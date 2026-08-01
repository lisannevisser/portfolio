/* =========================================================================
   Styleguide — live CSS audit for the #/styleguide route.
   Reads every same-origin stylesheet via the CSSOM, inventories tokens,
   color literals, type sizes, fonts, radii, and shadows, and renders the
   result together with curated live specimens of the site's core styles.
   Renders once, lazily, the first time the route is visited; values with
   clamp()/vw resolve at the viewport width active at that moment.
   ========================================================================= */

(function () {
  "use strict";

  var ROUTE = "styleguide";
  // The audit page's own stylesheet must not pollute the audit.
  var EXCLUDE_FILES = { "styleguide.css": true };

  var rendered = false;

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // ----------------------------------------------------------------------
  // Stylesheet walking
  // ----------------------------------------------------------------------
  function fileOf(sheet) {
    if (!sheet.href) return "index.html";
    return sheet.href.split("/").pop().split("?")[0];
  }

  function walkRules(rules, file, cb) {
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r.selectorText && r.style) cb(r, file);
      if (r.cssRules) walkRules(r.cssRules, file, cb);
    }
  }

  var scannedFiles = {};

  function eachStyleRule(cb) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      var file = fileOf(sheet);
      if (EXCLUDE_FILES[file]) continue;
      var rules;
      try {
        rules = sheet.cssRules;
      } catch (e) {
        continue; // cross-origin sheet (e.g. Google Fonts), not auditable
      }
      if (rules) {
        scannedFiles[file] = true;
        walkRules(rules, file, cb);
      }
    }
  }

  // ----------------------------------------------------------------------
  // Color canonicalization (probe element resolves any notation to rgb)
  // ----------------------------------------------------------------------
  var probe = null;
  function ensureProbe() {
    if (probe) return probe;
    probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    document.body.appendChild(probe);
    return probe;
  }

  var canonCache = {};
  function canonColor(value) {
    if (Object.prototype.hasOwnProperty.call(canonCache, value)) {
      return canonCache[value];
    }
    // Values still holding a var() can't be resolved outside their component
    // (the probe would silently inherit body color and produce false matches).
    if (value.indexOf("var(") >= 0) {
      canonCache[value] = null;
      return null;
    }
    var el = ensureProbe();
    el.style.color = "";
    el.style.color = value;
    var out = el.style.color ? getComputedStyle(el).color : null;
    canonCache[value] = out;
    return out;
  }

  function probeFontPx(value) {
    var el = ensureProbe();
    el.style.fontSize = "";
    el.style.fontSize = value;
    if (!el.style.fontSize) return 0;
    return parseFloat(getComputedStyle(el).fontSize) || 0;
  }

  // ----------------------------------------------------------------------
  // Scan
  // ----------------------------------------------------------------------
  var COLOR_RE = /#[0-9a-fA-F]{3,8}\b|(?:rgba?|hsla?|oklch|oklab)\([^)]*\)/g;
  var CUSTOM_PROP_RE = /--[\w-]+\s*:\s*[^;}]+[;}]?/g;
  var VAR_USE_RE = /var\(--[\w-]+/g;

  function scan() {
    var data = {
      files: {},          // file -> rule count
      tokens: [],         // { name, value, file, selector }
      tokenNames: {},     // name -> true (dedupe)
      colors: {},         // literal -> { count, files:{}, selectors:[] }
      varUses: 0,
      fontSizes: {},      // value -> { count, files:{}, selectors:[] }
      fontFamilies: {},   // value -> { count, files:{} }
      fontWeights: {},    // value -> { count, files:{} }
      radii: {},          // value -> { count, files:{} }
      shadows: {}         // value -> { count, files:{}, selectors:[] }
    };

    function bump(map, key, file, selector, cap) {
      if (!map[key]) map[key] = { count: 0, files: {}, selectors: [] };
      var e = map[key];
      e.count += 1;
      e.files[file] = true;
      if (selector && e.selectors.length < (cap || 4) && e.selectors.indexOf(selector) < 0) {
        e.selectors.push(selector);
      }
    }

    eachStyleRule(function (rule, file) {
      data.files[file] = (data.files[file] || 0) + 1;
      var sel = rule.selectorText;
      var text = rule.style.cssText || "";

      // Custom property definitions come out first, so the remaining text
      // only holds hard-coded values.
      var rest = text.replace(CUSTOM_PROP_RE, function (decl) {
        var idx = decl.indexOf(":");
        var name = decl.slice(0, idx).trim();
        var value = decl.slice(idx + 1).replace(/[;}]\s*$/, "").trim();
        if (!data.tokenNames[name]) {
          data.tokenNames[name] = true;
          data.tokens.push({ name: name, value: value, file: file, selector: sel });
        }
        return "";
      });

      var m = rest.match(COLOR_RE);
      if (m) {
        m.forEach(function (c) {
          bump(data.colors, c.toLowerCase(), file, sel);
        });
      }
      var v = rest.match(VAR_USE_RE);
      if (v) data.varUses += v.length;

      var fs = rule.style.getPropertyValue("font-size");
      if (fs) bump(data.fontSizes, fs.trim(), file, sel, 6);
      var ff = rule.style.getPropertyValue("font-family");
      if (ff) bump(data.fontFamilies, ff.trim(), file, sel);
      var fw = rule.style.getPropertyValue("font-weight");
      if (fw) bump(data.fontWeights, fw.trim(), file, sel);
      var br = rule.style.getPropertyValue("border-radius");
      if (br) bump(data.radii, br.trim(), file, sel);
      var bs = rule.style.getPropertyValue("box-shadow");
      if (bs && bs !== "none") bump(data.shadows, bs.trim(), file, sel);
    });

    return data;
  }

  // ----------------------------------------------------------------------
  // Small render helpers
  // ----------------------------------------------------------------------
  var FILE_SHORT = {
    "shared.css": "shared",
    "v1.css": "v1",
    "wall-of-fame.css": "wof",
    "wip.css": "wip",
    "fonts.css": "fonts",
    "index.html": "inline"
  };

  function fileBadges(files) {
    return Object.keys(files).map(function (f) {
      return '<span class="lv-sg-badge">' + esc(FILE_SHORT[f] || f) + "</span>";
    }).join("");
  }

  function tooltip(entry) {
    return entry.selectors.length
      ? ' title="' + esc(entry.selectors.join("  ·  ")) + '"'
      : "";
  }

  function sectionHead(num, title, lead) {
    return (
      '<div class="lv-sg-section-head">' +
      '<span class="lv-eyebrow">' + esc(num) + "</span>" +
      '<h2 class="lv-h2">' + esc(title) + "</h2>" +
      (lead ? '<p class="lv-body">' + lead + "</p>" : "") +
      "</div>"
    );
  }

  // ----------------------------------------------------------------------
  // Sections
  // ----------------------------------------------------------------------
  function renderStats(data, hardCodedCount) {
    var fileCount = Object.keys(scannedFiles).length;
    var cells = [
      { v: fileCount, k: "stylesheets scanned" },
      { v: data.tokens.length, k: "design tokens (custom properties)" },
      { v: data.varUses, k: "var() usages" },
      { v: hardCodedCount, k: "hard-coded color literals" },
      { v: Object.keys(data.fontSizes).length, k: "distinct font sizes" },
      { v: Object.keys(data.radii).length, k: "distinct border radii" }
    ];
    return (
      '<div class="lv-sg-stats">' +
      cells.map(function (c) {
        return (
          '<div class="lv-sg-stat"><span class="v">' + esc(c.v) +
          '</span><span class="k">' + esc(c.k) + "</span></div>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderTokens(data) {
    var root = getComputedStyle(document.documentElement);
    var rows = data.tokens.map(function (t) {
      var computed = root.getPropertyValue(t.name).trim() || t.value;
      var canon = canonColor(computed);
      var swatch = canon
        ? '<span class="lv-sg-swatch" style="background:' + esc(computed) + ';"></span>'
        : '<span class="lv-sg-swatch is-empty"></span>';
      return (
        '<div class="lv-sg-token-row" title="' + esc("defined in " + t.file + " on " + t.selector) + '">' +
        swatch +
        '<code class="name">' + esc(t.name) + "</code>" +
        '<code class="value">' + esc(t.value) + "</code>" +
        '<span class="files"><span class="lv-sg-badge">' + esc(FILE_SHORT[t.file] || t.file) + "</span></span>" +
        "</div>"
      );
    }).join("");
    return (
      '<section class="lv-sg-section">' +
      sectionHead("01", "Tokens",
        "Every CSS custom property the site defines. This is the system that already exists: values with a name. Everything in the sections below that is not on this list is a candidate for consolidation.") +
      '<div class="lv-sg-token-list">' + rows + "</div>" +
      "</section>"
    );
  }

  function renderColors(data, tokenByCanon) {
    var entries = Object.keys(data.colors).map(function (value) {
      var e = data.colors[value];
      var canon = canonColor(value);
      return {
        value: value,
        count: e.count,
        files: e.files,
        selectors: e.selectors,
        token: canon && tokenByCanon[canon] ? tokenByCanon[canon] : null
      };
    }).sort(function (a, b) { return b.count - a.count; });

    var cells = entries.map(function (e) {
      var tokenNote = e.token
        ? '<span class="lv-sg-match">= ' + esc(e.token) + "</span>"
        : "";
      var swatch = canonColor(e.value)
        ? '<span class="lv-sg-swatch is-large" style="background:' + esc(e.value) + ';"></span>'
        : '<span class="lv-sg-swatch is-large is-empty" title="depends on a component-scoped var()"></span>';
      return (
        '<div class="lv-sg-color-cell"' + tooltip(e) + ">" + swatch +
        '<code class="value">' + esc(e.value) + "</code>" +
        '<span class="meta"><span class="count">' + e.count + "×</span>" +
        fileBadges(e.files) + tokenNote + "</span>" +
        "</div>"
      );
    }).join("");

    var matched = entries.filter(function (e) { return e.token; }).length;
    var lead =
      esc(entries.length) + " color literals live outside the token list, sorted by how often they appear. " +
      (matched
        ? esc(matched) + " of them resolve to the exact value of an existing token (marked below): those are the cheapest fixes, a mechanical swap to var()."
        : "None of them match an existing token value, so each one needs a decision.") +
      " Hover a cell to see where a value is used.";

    return (
      '<section class="lv-sg-section">' +
      sectionHead("02", "Colors in the wild", lead) +
      '<div class="lv-sg-color-grid">' + cells + "</div>" +
      "</section>"
    );
  }

  function renderTypeSizes(data) {
    var entries = Object.keys(data.fontSizes).map(function (value) {
      var e = data.fontSizes[value];
      return {
        value: value,
        px: probeFontPx(value),
        count: e.count,
        files: e.files,
        selectors: e.selectors
      };
    }).sort(function (a, b) { return b.px - a.px || b.count - a.count; });

    var rows = entries.map(function (e) {
      var sampleSize = Math.min(e.px, 72);
      return (
        '<div class="lv-sg-type-row"' + tooltip(e) + ">" +
        '<span class="sample" style="font-size:' + sampleSize + 'px;">Aa</span>' +
        '<span class="body"><code class="value">' + esc(e.value) + "</code>" +
        '<span class="meta"><span class="px">' + (Math.round(e.px * 10) / 10) + "px now</span>" +
        '<span class="count">' + e.count + "×</span>" + fileBadges(e.files) +
        (e.selectors.length ? '<span class="sel">e.g. ' + esc(e.selectors[0]) + "</span>" : "") +
        "</span></span>" +
        "</div>"
      );
    }).join("");

    return (
      '<section class="lv-sg-section">' +
      sectionHead("03", "Type sizes",
        esc(entries.length) + " distinct font-size values, largest first. Sizes using clamp() or viewport units resolve at your current viewport width; samples are capped at 72px so the list stays scannable. Hover a row for the selectors that use it.") +
      '<div class="lv-sg-type-list">' + rows + "</div>" +
      "</section>"
    );
  }

  function renderSimpleList(num, title, lead, map, opts) {
    var entries = Object.keys(map).map(function (value) {
      return { value: value, count: map[value].count, files: map[value].files, selectors: map[value].selectors };
    }).sort(function (a, b) { return b.count - a.count; });

    var rows = entries.map(function (e) {
      var extra = "";
      if (opts && opts.radiusSwatch) {
        extra = '<span class="lv-sg-radius-box" style="border-radius:' + esc(e.value) + ';"></span>';
      }
      if (opts && opts.shadowSwatch) {
        extra = '<span class="lv-sg-shadow-box" style="box-shadow:' + esc(e.value) + ';"></span>';
      }
      return (
        '<div class="lv-sg-plain-row"' + tooltip(e) + ">" + extra +
        '<code class="value">' + esc(e.value) + "</code>" +
        '<span class="meta"><span class="count">' + e.count + "×</span>" + fileBadges(e.files) + "</span>" +
        "</div>"
      );
    }).join("");

    return (
      '<section class="lv-sg-section">' +
      sectionHead(num, title, lead) +
      '<div class="lv-sg-plain-list">' + rows + "</div>" +
      "</section>"
    );
  }

  // ----------------------------------------------------------------------
  // Curated specimens — live markup rendered with the site's actual CSS
  // ----------------------------------------------------------------------
  var SPECIMENS = [
    {
      group: "Headlines",
      items: [
        { label: "Hero display", cls: ".v1-hero-display", html: '<h1 class="v1-hero-display" style="margin:0;">Taking <em>stock</em>.</h1>' },
        { label: "Page H1", cls: ".lv-h1", html: '<h1 class="lv-h1" style="margin:0;">What’s on the <em>shelf</em>.</h1>' },
        { label: "Section H2", cls: ".lv-h2", html: '<h2 class="lv-h2" style="margin:0;">A section heading.</h2>' },
        { label: "Case section title", cls: ".v1-story-block .lv-section-title", html: '<div class="v1-story-block" style="margin:0;padding:0;border:none;"><span class="lv-section-num">01</span><h2 class="lv-section-title" style="margin:0.25rem 0 0;">The decision, not the activity.</h2></div>' },
        { label: "Blog H2", cls: ".lv-post-h2", html: '<h2 class="lv-post-h2" style="margin:0;">Then along came AI.</h2>' },
        { label: "Blog H3", cls: ".lv-post-h3", html: '<h3 class="lv-post-h3" style="margin:0;">A smaller beat.</h3>' },
        { label: "Gazette article title", cls: ".lv-gz-article-title", html: '<h1 class="lv-gz-article-title" style="margin:0;">The Design Gazette headline.</h1>' }
      ]
    },
    {
      group: "Text styles",
      items: [
        { label: "Eyebrow", cls: ".lv-eyebrow", html: '<div class="lv-eyebrow">./eyebrow-label</div>' },
        { label: "Lead", cls: ".lv-lead", html: '<p class="lv-lead" style="margin:0;">A lead paragraph sets up the page in one or two sentences.</p>' },
        { label: "Body", cls: ".lv-body", html: '<p class="lv-body" style="margin:0;">Body copy carries the actual reading. It should disappear behind the content.</p>' },
        { label: "Blog lead", cls: ".lv-post-lead", html: '<p class="lv-post-lead" style="margin:0;">A blog post opens with a confession, not a thesis.</p>' },
        { label: "Handwriting", cls: ".v1-hand", html: '<div class="v1-hand" style="font-size:1.75rem;">a hand-written aside ↗</div>' }
      ]
    },
    {
      group: "Links & buttons",
      items: [
        { label: "Default link", cls: "a (inherits)", html: '<a href="#/styleguide">A plain anchor, color inherited</a>' },
        { label: "Blog inline link", cls: ".lv-post-link", note: "Class exists in markup but has no CSS rules; it falls back to the default anchor.", html: '<a class="lv-post-link" href="#/styleguide">An inline link in a blog post</a>' },
        { label: "Nav link", cls: ".lv-nav-link", html: '<a class="lv-nav-link" href="#/styleguide">Nav link</a>' },
        { label: "Button", cls: ".lv-btn", html: '<a class="lv-btn" href="#/styleguide">Primary button</a>' },
        { label: "Ghost button", cls: ".lv-btn.is-ghost", html: '<a class="lv-btn is-ghost" href="#/styleguide">Ghost button</a>' },
        { label: "Chip", cls: ".v1-chip", html: '<span class="v1-chip" style="padding:0.6rem 1rem;">Flow chip</span>' },
        { label: "Filter chip", cls: ".v1-work-chip", html: '<button type="button" class="v1-work-chip"><span>Research</span><span class="v1-work-chip-count">2</span></button>' }
      ]
    },
    {
      group: "Dividers & rules",
      items: [
        { label: "Blog divider", cls: "hr.lv-post-divider", html: '<hr class="lv-post-divider" style="margin:0;" />' },
        { label: "Symbol divider", cls: ".lv-post-divider.has-symbol", html: '<div class="lv-post-divider has-symbol" style="margin:0;" role="separator" aria-hidden="true">✳</div>' },
        { label: "Gazette section heading", cls: ".lv-gz-section-heading", html: '<div class="lv-gz-section-heading" style="margin:0;"><span>More in this edition</span></div>' },
        { label: "Plain rule", cls: "border: 1px solid var(--rule)", html: '<div style="border-top:1px solid var(--rule);"></div>' }
      ]
    }
  ];

  function renderSpecimens() {
    var groups = SPECIMENS.map(function (g) {
      var items = g.items.map(function (it) {
        return (
          '<div class="lv-sg-specimen">' +
          '<div class="lv-sg-specimen-meta">' +
          '<span class="label">' + esc(it.label) + "</span>" +
          '<code class="cls">' + esc(it.cls) + "</code>" +
          (it.note ? '<span class="note">' + esc(it.note) + "</span>" : "") +
          "</div>" +
          '<div class="lv-sg-specimen-stage">' + it.html + "</div>" +
          "</div>"
        );
      }).join("");
      return (
        '<div class="lv-sg-specimen-group">' +
        '<h3 class="lv-eyebrow">' + esc(g.group) + "</h3>" + items +
        "</div>"
      );
    }).join("");

    return (
      '<section class="lv-sg-section">' +
      sectionHead("06", "Specimens",
        "Curated examples rendered live with the site’s actual CSS, not screenshots. If a style changes anywhere, it changes here too. Notes flag the quirks found while assembling the list.") +
      groups +
      "</section>"
    );
  }

  // ----------------------------------------------------------------------
  // Page
  // ----------------------------------------------------------------------
  function render() {
    var root = document.getElementById("lv-sg-root");
    if (!root) return;

    var data = scan();

    // Map each token's canonical color to its name, so literals that
    // duplicate a token value can be flagged in the color section.
    var rootStyle = getComputedStyle(document.documentElement);
    var tokenByCanon = {};
    data.tokens.forEach(function (t) {
      var computed = rootStyle.getPropertyValue(t.name).trim() || t.value;
      var canon = canonColor(computed);
      if (canon && !tokenByCanon[canon]) tokenByCanon[canon] = t.name;
    });

    var hardCodedCount = Object.keys(data.colors).length;

    root.innerHTML =
      renderStats(data, hardCodedCount) +
      renderTokens(data) +
      renderColors(data, tokenByCanon) +
      renderTypeSizes(data) +
      renderSimpleList("04", "Corner radii",
        "Radius values in use. The token list above shows which of these have names; the rest grew on the side.",
        data.radii, { radiusSwatch: true }) +
      renderSimpleList("05", "Shadows",
        "Every box-shadow in the stylesheets. Shadows have no tokens yet.",
        data.shadows, { shadowSwatch: true }) +
      renderSpecimens();

    if (probe) { probe.remove(); probe = null; }
  }

  function onRoute() {
    if (rendered) return;
    var clean = (location.hash || "").replace(/^#\/?/, "");
    if (clean.split("/")[0] !== ROUTE) return;
    rendered = true;
    render();
  }

  window.addEventListener("hashchange", onRoute);
  onRoute();
})();
