/* =========================================================================
   App — vanilla JS: router, cursor, magnetic, tweaks, easter egg,
   case-study renderer, mobile nav.
   Depends on: window.LV_DATA (loaded by js/data.js before this file).
   ========================================================================= */

(function () {
  "use strict";
  const D = window.LV_DATA;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // -------- Early bootstrap: re-apply persisted tweaks in case the inline
  // head script didn't ----------
  function bootstrapVars() {
    const hue = localStorage.getItem("lv-hue");
    if (hue !== null && hue !== "") {
      document.documentElement.style.setProperty("--accent-hue", hue);
    }
    const ts = localStorage.getItem("lv-ts");
    if (ts) document.documentElement.style.setProperty("--type-scale", ts);
    const density = localStorage.getItem("lv-density");
    if (density) document.documentElement.style.setProperty("--scribble-density", density);
    const cursor = localStorage.getItem("lv-cursor");
    document.documentElement.setAttribute("data-cursor", cursor === "off" ? "off" : "on");
  }
  bootstrapVars();

  // ========================================================================
  // HASH ROUTER
  // ========================================================================
  function parseHash(h) {
    const clean = (h || "").replace(/^#\/?/, "");
    if (!clean) return { page: "home" };
    const parts = clean.split("/");
    if (parts[0] === "work" && parts[1]) return { page: "case", slug: parts[1] };
    if (parts[0] === "blog" && parts[1]) return { page: "post", slug: parts[1] };
    return { page: parts[0] || "home" };
  }

  function renderRoute() {
    const route = parseHash(location.hash);
    document.documentElement.setAttribute("data-route", route.page);

    // Hide every route section, show the active one.
    $$(".lv-route").forEach((el) => {
      const name = el.getAttribute("data-page");
      el.hidden = name !== route.page;
    });

    // Case study: fill the template with the selected slug.
    if (route.page === "case") {
      flushTocFabCleanups();
      const c = D.cases.find((x) => x.slug === route.slug) || D.cases[0];
      renderV1Case(c);
    } else {
      flushTocFabCleanups();
    }

    // Blog post: render the selected post.
    if (route.page === "post") {
      const p = (D.posts || []).find((x) => x.slug === route.slug) || (D.posts || [])[0];
      if (p) {
        renderV1Post(p);
      }
    }

    // Nav active state
    $$(".lv-nav-link").forEach((a) => {
      const target = a.getAttribute("data-route");
      const active =
        target === route.page || (target === "work" && route.page === "case");
      a.classList.toggle("is-active", active);
    });

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  window.addEventListener("hashchange", renderRoute);

  // ========================================================================
  // CUSTOM CURSOR + MAGNETIC
  // ========================================================================
  function initCursor() {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 900) return;

    const dot = $(".lv-cursor");
    const ring = $(".lv-cursor-ring");
    if (!dot || !ring) return;

    let x = 0, y = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
    });
    (function loop() {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("[data-cursor-label], a, button, .lv-magnetic");
      if (!target) return;
      ring.classList.add("is-hovering");
      const label = target.getAttribute && target.getAttribute("data-cursor-label");
      if (label) {
        ring.setAttribute("data-label", label);
        ring.classList.add("is-labelled");
      }
    });
    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest("[data-cursor-label], a, button, .lv-magnetic");
      if (!target) return;
      ring.classList.remove("is-hovering", "is-labelled");
    });
  }

  function initCursorToggle() {
    const btn = $(".lv-cursor-toggle");
    if (!btn) return;
    const apply = (on) => {
      document.documentElement.setAttribute("data-cursor", on ? "on" : "off");
      btn.setAttribute("aria-checked", on ? "true" : "false");
    };
    apply(localStorage.getItem("lv-cursor") !== "off");
    btn.addEventListener("click", () => {
      const nextOn = document.documentElement.getAttribute("data-cursor") === "off";
      localStorage.setItem("lv-cursor", nextOn ? "on" : "off");
      apply(nextOn);
    });
  }

  function initMagnetic() {
    if (window.matchMedia("(hover: none)").matches) return;
    $$(".lv-magnetic").forEach((el) => {
      const strength = parseFloat(el.getAttribute("data-strength") || "0.25");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ========================================================================
  // TWEAKS PANEL
  // ========================================================================
  function initTweaks() {
    const panel = $(".lv-tweaks");
    const toggle = $(".lv-tweaks-toggle");
    if (!panel || !toggle) return;

    toggle.addEventListener("click", () => panel.classList.toggle("is-open"));

    // Accent-hue swatches (each has data-hue)
    $$(".lv-hue-row button", panel).forEach((btn) => {
      btn.addEventListener("click", () => {
        const hue = btn.getAttribute("data-hue");
        document.documentElement.style.setProperty("--accent-hue", hue);
        localStorage.setItem("lv-hue", hue);
        $$(".lv-hue-row button", panel).forEach((b) =>
          b.classList.toggle("is-active", b === btn)
        );
      });
      const savedHue = localStorage.getItem("lv-hue");
      if (savedHue && btn.getAttribute("data-hue") === savedHue) {
        btn.classList.add("is-active");
      }
    });

    // Type scale
    const tsInput = $('input[data-tweak="type-scale"]', panel);
    const tsLabel = $('[data-tweak-label="type-scale"]', panel);
    if (tsInput) {
      const saved = localStorage.getItem("lv-ts") || "1";
      tsInput.value = saved;
      if (tsLabel) tsLabel.textContent = saved + "x";
      tsInput.addEventListener("input", () => {
        const v = tsInput.value;
        document.documentElement.style.setProperty("--type-scale", v);
        localStorage.setItem("lv-ts", v);
        if (tsLabel) tsLabel.textContent = v + "x";
      });
    }

    // Scribble density
    const dInput = $('input[data-tweak="density"]', panel);
    const dLabel = $('[data-tweak-label="density"]', panel);
    if (dInput) {
      const saved = localStorage.getItem("lv-density") || "2";
      dInput.value = saved;
      if (dLabel) dLabel.textContent = saved;
      dInput.addEventListener("input", () => {
        const v = dInput.value;
        document.documentElement.style.setProperty("--scribble-density", v);
        localStorage.setItem("lv-density", v);
        if (dLabel) dLabel.textContent = v;
      });
    }
  }

  // ========================================================================
  // EASTER EGG — Konami + 'yyy' → rotate 180°
  // ========================================================================
  function initEasterEgg() {
    let buf = [];
    const seq = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    function trigger() {
      document.body.classList.add("lv-upside-down");
      const toast = document.createElement("div");
      toast.className = "lv-toast";
      toast.textContent = "upside down. like aerial yoga.";
      document.body.appendChild(toast);
      setTimeout(() => {
        document.body.classList.remove("lv-upside-down");
        toast.remove();
      }, 4500);
    }
    window.addEventListener("keydown", (e) => {
      buf.push(e.key);
      if (buf.length > seq.length) buf = buf.slice(-seq.length);
      if (buf.length === seq.length && buf.every((k, i) => k === seq[i])) trigger();
      if (e.key === "y" && buf.slice(-3).join("").toLowerCase() === "yyy") trigger();
    });
    window.LV_easterEgg = trigger;
  }

  // ========================================================================
  // MOBILE NAV
  // ========================================================================
  function initMobileNav() {
    const toggle = $(".lv-nav-toggle");
    const sheet = $(".lv-nav-sheet");
    const scrim = $(".lv-nav-scrim");
    const closeBtn = $(".lv-nav-sheet-close");
    if (!toggle || !sheet || !scrim) return;
    function open() {
      sheet.classList.add("is-open");
      scrim.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      sheet.classList.remove("is-open");
      scrim.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    toggle.addEventListener("click", open);
    scrim.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);
    $$("a", sheet).forEach((a) => a.addEventListener("click", close));
    window.addEventListener("hashchange", close);
  }

  // ========================================================================
  // SCRIBBLE helpers (rendered to inline SVG via data-scribble attr)
  // ========================================================================
  const SCRIBBLE_PATHS = {
    underline: { d: "M 4 18 C 40 8, 80 26, 120 14 S 190 22, 240 10", vb: "0 0 250 30" },
    circle:    { d: "M 140 20 C 90 10 20 25 20 60 C 20 95 80 110 140 100 C 200 92 220 70 210 40 C 200 15 160 10 140 20 Z", vb: "0 0 230 120" },
    arrow:     { d: "M 6 30 C 40 10, 90 50, 140 20 L 130 10 M 140 20 L 128 30", vb: "0 0 150 40" },
    "arrow-long": { d: "M 4 22 C 90 6, 180 36, 280 18 S 460 8, 588 22 L 572 12 M 588 22 L 570 30", vb: "0 0 600 40" },
    squiggle:  { d: "M 0 10 C 20 0, 40 20, 60 10 S 100 0, 120 10 S 160 20, 180 10", vb: "0 0 180 20" },
    wave:      { d: "M 0 10 Q 15 0, 30 10 T 60 10 T 90 10 T 120 10", vb: "0 0 120 20" },
    asterisk:  { d: "M 20 4 L 20 36 M 6 12 L 34 28 M 6 28 L 34 12 M 4 20 L 36 20", vb: "0 0 40 40" }
  };

  function renderScribbles() {
    $$("[data-scribble]").forEach((el) => {
      if (el.dataset.rendered) return;
      const kind = el.getAttribute("data-scribble");
      const cfg = SCRIBBLE_PATHS[kind];
      if (!cfg) return;
      const delay = el.getAttribute("data-delay") || "0.3";
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "lv-scribble");
      svg.setAttribute("viewBox", cfg.vb);
      svg.setAttribute("stroke-width", "2.2");
      if (kind === "underline" || kind === "squiggle" || kind === "wave" || kind === "arrow-long") {
        svg.setAttribute("preserveAspectRatio", "none");
      }
      svg.style.setProperty("--delay", delay + "s");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", cfg.d);
      svg.appendChild(path);
      el.appendChild(svg);
      el.dataset.rendered = "true";
    });
  }

  // ========================================================================
  // CLIENT LOGO STRIP (V1) — swap in real PNGs when available
  // ========================================================================
  function renderClientStrip() {
    const track = $(".v1-logo-track");
    if (!track) return;
    if (track.dataset.rendered === "true") return;
    const items = [];
    // Render the list three times for smooth marquee continuity
    for (let pass = 0; pass < 3; pass++) {
      D.clients.forEach((c) => {
        const logo = D.clientLogos[c];
        if (logo) {
          items.push(`<img src="${logo}" alt="${c}" loading="lazy" onerror="this.outerHTML='<span>— ${c}</span>'">`);
        } else {
          items.push(`<span>— ${c}</span>`);
        }
      });
    }
    track.innerHTML = items.join("");
    track.dataset.rendered = "true";
  }

  // ========================================================================
  // CASE STUDY RENDERERS
  // ========================================================================
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Stable id from a section title. Used as the scroll target for TOC entries.
  function sectionId(prefix, title, i) {
    const base = String(title || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40);
    return `${prefix}-${base || "section"}-${i}`;
  }

  // Build the list of TOC entries for a case. Figures don't get a row.
  // Limitations gets a special row marked with the lim flag.
  function buildTocEntries(c, prefix) {
    const entries = [];
    let n = 0;
    c.story.forEach((s, i) => {
      if (s.kind === "figure") return;
      if (s.kind === "limitations") {
        entries.push({
          id: sectionId(prefix, s.title || "limitations", i),
          num: "↳",
          title: s.title || "Limitations",
          lim: true
        });
        return;
      }
      n += 1;
      entries.push({
        id: sectionId(prefix, s.title, i),
        num: String(n).padStart(2, "0"),
        title: s.title || "",
        lim: false
      });
    });
    return entries;
  }

  // FAB markup. The popover ol is filled by wireTocFab() once the case body
  // has been injected, since we need to know which entries actually rendered.
  function tocFabHtml() {
    return `
      <div class="lv-toc-fab" tabindex="0" role="button" aria-label="Contents" aria-haspopup="menu" aria-expanded="false">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
          <line x1="5" y1="6" x2="15" y2="6"></line>
          <line x1="5" y1="10" x2="15" y2="10"></line>
          <line x1="5" y1="14" x2="11" y2="14"></line>
        </svg>
        <div class="lv-toc-popover" role="menu">
          <span class="eyebrow">Contents</span>
          <ol></ol>
        </div>
      </div>`;
  }

  // Wire up the FAB. The case renderer runs per route change, so we
  // track cleanup per render-pass and flush stale listeners before binding new ones.
  const __tocFabCleanups = [];
  function flushTocFabCleanups() {
    while (__tocFabCleanups.length) {
      const fn = __tocFabCleanups.pop();
      try { fn(); } catch (_) { /* no-op */ }
    }
  }
  function wireTocFab(root, entries) {
    const fab = root.querySelector(".lv-toc-fab");
    if (!fab) return;
    const list = fab.querySelector("ol");
    if (!list) return;

    // Render the list. Only include entries whose target section actually
    // exists in the DOM (defensive: some kinds may be filtered out later).
    list.innerHTML = entries
      .filter((e) => document.getElementById(e.id))
      .map((e) => `
        <li data-target="${esc(e.id)}"${e.lim ? ' class="is-lim"' : ""}>
          <span class="n">${esc(e.num)}</span>
          <span class="t">${esc(e.title)}</span>
        </li>`)
      .join("");

    const close = () => {
      fab.classList.remove("is-open");
      fab.setAttribute("aria-expanded", "false");
    };
    const open = () => {
      fab.classList.add("is-open");
      fab.setAttribute("aria-expanded", "true");
    };

    const onFabClick = (e) => {
      // Don't toggle when clicking inside the popover (list items handle their own).
      if (e.target.closest(".lv-toc-popover")) return;
      fab.classList.contains("is-open") ? close() : open();
    };
    const onFabKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fab.classList.contains("is-open") ? close() : open();
      }
      if (e.key === "Escape") close();
    };
    const onListClick = (e) => {
      const li = e.target.closest("li[data-target]");
      if (!li) return;
      const target = document.getElementById(li.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(close, 60);
    };
    const onOutside = (e) => {
      if (!fab.contains(e.target)) close();
    };
    const onDocKey = (e) => {
      if (e.key === "Escape") close();
    };

    fab.addEventListener("click", onFabClick);
    fab.addEventListener("keydown", onFabKey);
    list.addEventListener("click", onListClick);
    document.addEventListener("click", onOutside);
    document.addEventListener("keydown", onDocKey);

    // Active-section highlight: the section closest to the upper-middle of
    // the viewport wins.
    const io = new IntersectionObserver(
      (records) => {
        records.forEach((r) => {
          if (!r.isIntersecting) return;
          list.querySelectorAll("li").forEach((li) => li.classList.remove("is-active"));
          const li = list.querySelector(`li[data-target="${r.target.id}"]`);
          if (li) li.classList.add("is-active");
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    entries.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) io.observe(el);
    });

    __tocFabCleanups.push(() => {
      fab.removeEventListener("click", onFabClick);
      fab.removeEventListener("keydown", onFabKey);
      list.removeEventListener("click", onListClick);
      document.removeEventListener("click", onOutside);
      document.removeEventListener("keydown", onDocKey);
      io.disconnect();
    });
  }

  // Impact cells display a label, a prominent value, and a short note.
  // The big value must either contain a digit or stay short (<= 10 chars).
  // If any cell violates that, the whole impact section is hidden so the
  // hero block does not turn into a wall of prose.
  function isImpactValueValid(v) {
    if (typeof v !== "string" || !v) return false;
    if (/\d/.test(v)) return true;
    return v.length <= 10;
  }
  function shouldShowImpact(impact) {
    return Array.isArray(impact) && impact.length > 0 && impact.every((i) => isImpactValueValid(i.value));
  }

  function renderV1Case(c) {
    const root = $("#v1-case-body");
    if (!root) return;
    const idx = D.cases.findIndex((x) => x.slug === c.slug);
    const next = D.cases[(idx + 1) % D.cases.length];

    const tocEntries = buildTocEntries(c, "v1");

    let narrativeIdx = 0;
    const storyHtml = c.story.map((s, storyI) => {
      if (s.kind === "figure") {
        const hue = Number.isFinite(s.hue) ? s.hue : c.coverPaletteHue;
        const label = s.label ? `<span class="label">${esc(s.label)}</span>` : "";
        const caption = s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : "";
        return `<figure class="lv-post-figure lv-reveal" style="--post-figure-hue:${hue};margin:2.5rem 0;"><div class="frame" role="img" aria-label="${esc(s.alt || s.caption || "Figure placeholder")}">${label}</div>${caption}</figure>`;
      }
      if (s.kind === "limitations" && s.items) {
        const sid = sectionId("v1", s.title || "limitations", storyI);
        const renderItems = (arr) => arr.map((it) => `
          <div class="v1-limitation-row">
            <h4>${esc(it.title)}</h4>
            <p>${esc(it.body)}</p>
          </div>`).join("");
        const hasOpp = Array.isArray(s.opportunities) && s.opportunities.length;
        const oppFirst = s.defaultFace === "opportunities" && hasOpp;
        const limFace = { title: s.title || "Limitations", items: s.items, subtitle: s.subtitle, flipLabel: "↻ Opportunities" };
        const oppFace = { title: s.oppositeTitle || "Opportunities", items: s.opportunities, subtitle: s.oppositeSubtitle, flipLabel: "↻ Limitations" };
        const front = oppFirst ? oppFace : limFace;
        const back = oppFirst ? limFace : oppFace;
        const renderHeader = (face, idSuffix, pressed) => {
          const pid = `${sid}-info-${idSuffix}`;
          const info = face.subtitle ? `
              <button class="v1-limitations-info-btn" type="button" aria-expanded="false" aria-controls="${esc(pid)}" aria-label="About this card">i</button>
              <div class="v1-limitations-info-popover" id="${esc(pid)}" role="tooltip" hidden>${esc(face.subtitle)}</div>` : "";
          const flip = hasOpp ? `<button class="v1-limitations-flip" type="button" aria-pressed="${pressed}">${face.flipLabel}</button>` : "";
          return `
            <div class="v1-limitations-header">
              <div class="v1-limitations-info-group">
                <span class="v1-limitations-label">${esc(face.title)}</span>${info}
              </div>
              ${flip}
            </div>`;
        };
        const frontFace = `
          <div class="v1-limitations-face is-front">
            ${renderHeader(front, "front", "false")}
            <div class="v1-limitations-grid">${renderItems(front.items)}</div>
          </div>`;
        const backFace = hasOpp ? `
          <div class="v1-limitations-face is-back" aria-hidden="true">
            ${renderHeader(back, "back", "true")}
            <div class="v1-limitations-grid">${renderItems(back.items)}</div>
          </div>` : "";
        return `
          <section id="${esc(sid)}" class="v1-limitations-card lv-case-section ${hasOpp ? "is-flippable" : ""} lv-reveal">
            <div class="v1-limitations-card-inner">${frontFace}${backFace}</div>
          </section>`;
      }
      const i = narrativeIdx++;
      const sid = sectionId("v1", s.title, storyI);
      let body = s.body ? `<p>${esc(s.body)}</p>` : "";
      let extra = "";
      if (s.kind === "framework" && s.items) {
        extra = `<div class="v1-framework">${s.items.map((it) => `
          <div class="v1-framework-row">
            <span>${esc(it.k)}</span>
            <span>${esc(it.v)}</span>
            <span>${esc(it.effect)}</span>
          </div>`).join("")}</div>`;
      } else if (s.kind === "flow" && s.items) {
        const chips = s.items.map((it, j) => {
          const arrow = `<svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M 2 5 L 16 5 M 12 2 L 16 5 L 12 8"/></svg>`;
          const last = j === s.items.length - 1
            ? `<span class="v1-chip" style="background:var(--accent);color:var(--paper);border-color:var(--accent);padding:0.6rem 1rem;">${esc(it.to)}</span>`
            : "";
          return `<span class="v1-chip" style="padding:0.6rem 1rem;">${esc(it.from)}</span>${arrow}${last}`;
        }).join("");
        extra = `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;margin-top:1rem;">${chips}</div>`;
      }
      return `
        <section id="${esc(sid)}" class="v1-story-block lv-case-section lv-reveal">
          <span class="lv-section-num">${String(i + 1).padStart(2, "0")}</span>
          <h2 class="lv-section-title">${esc(s.title)}</h2>
          ${body}${extra}
        </section>`;
    }).join("");

    root.innerHTML = `
      <a href="#/work" class="lv-nav-link" data-cursor-label="← Back">← All work</a>

      <header style="margin-top:2rem;">
        <h1 class="v1-hero-display lv-reveal" style="margin:2rem 0 1.5rem;font-size:clamp(2.25rem,6vw,4.8rem);">
          <em>${esc(c.title)}</em>
        </h1>
      </header>

      ${c.hideHero ? "" : `
      <div class="v1-case-media lv-reveal" style="--case-hue:${c.coverPaletteHue};aspect-ratio:21/9;margin:3rem 0 4rem;border-radius:var(--radius-lg);position:relative;">
        <div class="v1-case-media-label">Hero visual · ${esc(c.company)}</div>
      </div>`}

      ${shouldShowImpact(c.impact) ? `
      <div class="v1-impact-grid lv-reveal" style="margin-bottom:4rem;">
        <div class="v1-impact-cell">
          <div class="v1-impact-cell-label">${esc(c.impact[0].label)}</div>
          <div class="lv-body" style="font-size:0.9rem;margin-bottom:0.75rem;">${esc(c.impact[0].note)}</div>
          <div class="v1-impact-num">${esc(c.impact[0].value)}</div>
        </div>
        <div class="v1-impact-cell v1-impact-cell--meta">
          <div class="v1-impact-cell-label">Role</div>
          <div class="v1-impact-meta">${esc(c.role)}</div>
        </div>
        <div class="v1-impact-cell v1-impact-cell--meta">
          <div class="v1-impact-cell-label">Team</div>
          <div class="v1-impact-meta">${esc(c.team)}</div>
        </div>
        <div class="v1-impact-cell v1-impact-cell--meta">
          <div class="v1-impact-cell-label">Year</div>
          <div class="v1-impact-meta">${esc(c.year)}</div>
        </div>
      </div>` : ""}

      <div>${storyHtml}</div>

      ${tocFabHtml()}

      <a href="#/work/${esc(next.slug)}" class="lv-next-case lv-reveal">
        <span class="lv-next-label">Next</span>
        <span class="lv-next-title-wrap">
          <span class="lv-next-title">${esc(next.title)}</span>
          <span class="lv-next-scribble" data-scribble="arrow-long" data-delay="0.15"></span>
        </span>
      </a>
    `;
    wireTocFab(root, tocEntries);
    renderScribbles();
  }

  // ========================================================================
  // BLOG RENDERERS (list + post detail)
  // ========================================================================
  // Pull the first few prose blocks (lead/paragraph/string) out of a post body
  // as plain text, for the gazette front-page aufmacher columns.
  function gazetteLeadParagraphs(post, max) {
    const out = [];
    for (const b of (post.body || [])) {
      let t = null;
      if (typeof b === "string") t = b;
      else if (b && (b.kind === "lead" || b.kind === "paragraph")) t = b.text;
      if (t) out.push(t);
      if (out.length >= max) break;
    }
    return out;
  }

  function renderBlogLists() {
    const posts = D.posts || [];

    const v1List = $("#v1-blog-list");
    if (v1List && posts.length) {
      // Newest post runs as the front-page aufmacher; the rest fill the index.
      const lead = posts[0];
      const leadParas = gazetteLeadParagraphs(lead, 2);

      // Inject the current month (without the year) into the masthead dateline
      const datelineTags = $("#lv-gz-dateline-tags");
      if (datelineTags) datelineTags.textContent = lead.dateLabel.replace(/\s*\d{4}$/, "");

      const featured = `
        <a href="#/blog/${esc(lead.slug)}" class="lv-gz-lead lv-reveal">
          <h2 class="lv-gz-lead-head">${esc(lead.title)}</h2>
          <p class="lv-gz-deck">${esc(lead.excerpt)}</p>
          <div class="lv-gz-byline">${esc(lead.dateLabel)} · ${esc(lead.readingTime)} read · ${lead.tags.map(esc).join(" · ")}</div>
          <div class="lv-gz-lead-cols">
            ${leadParas.map((t) => `<p>${inlineMarks(t)}</p>`).join("")}
            <p class="lv-gz-continue">Continue reading →</p>
          </div>
        </a>`;

      // Split remaining posts by year
      const currentYear = lead.date.slice(0, 4);
      const sameYear = posts.slice(1).filter(p => p.date.startsWith(currentYear));
      const olderPosts = posts.slice(1).filter(p => !p.date.startsWith(currentYear));

      function renderEntryGrid(items) {
        const isOdd = items.length % 2 !== 0;
        return `<div class="lv-gz-index">
          ${items.map((p, i) => `
            <a href="#/blog/${esc(p.slug)}" class="lv-gz-entry lv-reveal${isOdd && i === items.length - 1 ? " lv-gz-entry--full" : ""}">
              <div class="kicker">${p.tags.map(esc).join(" · ")}</div>
              <h3 class="hl">${esc(p.title)}</h3>
              <p class="exc">${esc(p.excerpt)}</p>
              <div class="meta">${esc(p.dateLabel)} · ${esc(p.readingTime)}</div>
            </a>`).join("")}
        </div>`;
      }

      const sameYearSection = sameYear.length ? `
        <div class="lv-gz-section-heading lv-reveal"><span>More in this edition</span></div>
        ${renderEntryGrid(sameYear)}` : "";

      // Group older posts by year
      const olderByYear = {};
      olderPosts.forEach(p => {
        const yr = p.date.slice(0, 4);
        if (!olderByYear[yr]) olderByYear[yr] = [];
        olderByYear[yr].push(p);
      });
      const olderSections = Object.keys(olderByYear).sort((a, b) => b - a).map(yr => `
        <div class="lv-gz-section-heading lv-gz-section-heading--archive lv-reveal"><span>${yr} Edition</span></div>
        ${renderEntryGrid(olderByYear[yr])}`).join("");

      v1List.innerHTML = featured + sameYearSection + olderSections;
    }
  }

  // Inline marks: [text](url) links, **bold** and *italic*. Applied AFTER esc(),
  // so we re-introduce a tightly-scoped set of tags. Keep this conservative.
  function inlineMarks(text) {
    return esc(text)
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,
        '<a class="lv-post-link" href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(])\*([^*]+)\*/g, "$1<em>$2</em>");
  }

  // Render one post-body block. Strings are paragraphs (backward-compat).
  // Objects dispatch on .kind.
  function renderPostBlock(b) {
    if (typeof b === "string") {
      return `<p class="lv-post-p lv-reveal">${inlineMarks(b)}</p>`;
    }
    const kind = b.kind;
    if (kind === "paragraph") {
      return `<p class="lv-post-p lv-reveal">${inlineMarks(b.text || "")}</p>`;
    }
    if (kind === "lead") {
      return `<p class="lv-post-lead lv-reveal">${inlineMarks(b.text || "")}</p>`;
    }
    if (kind === "h2") {
      return `<h2 class="lv-post-h2 lv-reveal">${inlineMarks(b.text || "")}</h2>`;
    }
    if (kind === "h3") {
      return `<h3 class="lv-post-h3 lv-reveal">${inlineMarks(b.text || "")}</h3>`;
    }
    if (kind === "quote") {
      const cite = b.attribution
        ? `<cite>${esc(b.attribution)}</cite>` : "";
      return `<blockquote class="lv-post-quote lv-reveal"><p>${inlineMarks(b.text || "")}</p>${cite}</blockquote>`;
    }
    if (kind === "list") {
      const tag = b.style === "numbered" ? "ol" : "ul";
      const items = (b.items || []).map((it) => {
        if (typeof it === "string") return `<li>${inlineMarks(it)}</li>`;
        if (it && it.title) {
          return `<li><strong>${inlineMarks(it.title)}</strong> ${inlineMarks(it.text || "")}</li>`;
        }
        return `<li>${inlineMarks((it && it.text) || "")}</li>`;
      }).join("");
      return `<${tag} class="lv-post-list lv-reveal">${items}</${tag}>`;
    }
    if (kind === "figure") {
      const hue = Number.isFinite(b.hue) ? b.hue : 200;
      const label = b.label ? `<span class="label">${esc(b.label)}</span>` : "";
      const caption = b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : "";
      return `<figure class="lv-post-figure lv-reveal" style="--post-figure-hue:${hue};"><div class="frame" role="img" aria-label="${esc(b.alt || b.caption || "Figure placeholder")}">${label}</div>${caption}</figure>`;
    }
    if (kind === "callout") {
      const label = b.label ? `<div class="lv-post-callout-label">${esc(b.label)}</div>` : "";
      return `<aside class="lv-post-callout lv-reveal">${label}<p>${inlineMarks(b.text || "")}</p></aside>`;
    }
    if (kind === "divider") {
      if (b.symbol) {
        return `<div class="lv-post-divider has-symbol lv-reveal" role="separator" aria-hidden="true">${esc(b.symbol)}</div>`;
      }
      return `<hr class="lv-post-divider lv-reveal" />`;
    }
    if (kind === "code") {
      const lang = b.lang ? `<span class="lang">${esc(b.lang)}</span>` : "";
      return `<pre class="lv-post-code lv-reveal">${lang}<code>${esc(b.code || "")}</code></pre>`;
    }
    if (kind === "chat") {
      const groups = (b.messages || []).map((m) => {
        const bubbles = (m.bubbles || []).map((bb) => {
          const link = bb.link ? `<span class="lv-chat-link">${esc(bb.link)}</span>` : "";
          return `<div class="lv-chat-msg" data-chat-step>
            <span class="lv-chat-typing" aria-hidden="true"><i></i><i></i><i></i></span>
            <div class="lv-chat-bubble"><p>${esc(bb.text || "")}</p>${link}</div>
          </div>`;
        }).join("");
        const reaction = m.reaction
          ? `<span class="lv-chat-reaction" data-chat-reaction>${esc(m.reaction)}</span>` : "";
        return `<div class="lv-chat-group">
          <div class="lv-chat-avatar" aria-hidden="true">${esc(m.initial || (m.author || "?").charAt(0))}</div>
          <div class="lv-chat-rows">
            <div class="lv-chat-meta"><strong>${esc(m.author || "")}</strong><span class="time">${esc(m.time || "")}</span></div>
            ${bubbles}${reaction}
          </div>
        </div>`;
      }).join("");
      const caption = b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : "";
      return `<figure class="lv-post-chat lv-reveal" data-chat>
        <div class="lv-chat-window" role="log" aria-label="${esc(b.aria || "Chat conversation")}">${groups}</div>
        ${caption}
      </figure>`;
    }
    // Unknown block: render as paragraph fallback.
    return `<p class="lv-post-p lv-reveal">${inlineMarks(b.text || "")}</p>`;
  }

  function renderPostBody(blocks) {
    return (blocks || []).map(renderPostBlock).join("\n");
  }

  // Chat blocks replay like a live conversation: each message shows a short
  // typing indicator, then pops in; reactions land last. Runs once per render,
  // when the block scrolls into view. Reduced motion shows everything at once.
  function initPostChats(root) {
    if (!root) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$("[data-chat]", root).forEach((chat) => {
      const steps = $$("[data-chat-step]", chat);
      const reactions = $$("[data-chat-reaction]", chat);
      if (reduceMotion || !("IntersectionObserver" in window)) {
        steps.forEach((s) => s.classList.add("is-shown"));
        reactions.forEach((r) => r.classList.add("is-shown"));
        return;
      }
      const play = () => {
        let t = 200;
        steps.forEach((s) => {
          setTimeout(() => {
            s.closest(".lv-chat-group").classList.add("is-active");
            s.classList.add("is-typing");
          }, t);
          t += 850;
          setTimeout(() => {
            s.classList.remove("is-typing");
            s.classList.add("is-shown");
          }, t);
          t += 350;
        });
        setTimeout(() => {
          reactions.forEach((r) => r.classList.add("is-shown"));
        }, t + 400);
      };
      const io = new IntersectionObserver((records) => {
        records.forEach((r) => {
          if (!r.isIntersecting) return;
          io.disconnect();
          play();
        });
      }, { threshold: 0.35 });
      io.observe(chat);
    });
  }

  function renderV1Post(p) {
    const root = $("#v1-post-body");
    if (!root) return;
    const posts = D.posts || [];
    const idx = posts.findIndex((x) => x.slug === p.slug);
    const next = posts[(idx + 1) % posts.length];

    // Drop cap on the first prose paragraph (the lead stays italic display).
    const bodyHtml = renderPostBody(p.body)
      .replace('class="lv-post-p lv-reveal"', 'class="lv-post-p lv-reveal lv-dropcap"');

    root.innerHTML = `
      <a href="#/blog" class="lv-gz-back lv-nav-link" data-cursor-label="← Back">← Back to the front page</a>

      <header>
        <div class="lv-gz-article-masthead lv-reveal">
          <div class="flag">The Design Gazette</div>
        </div>
        <div class="lv-gz-dateline lv-gz-dateline--article lv-reveal">
          <span>Berlin</span>
          <span>${esc(p.date.slice(0, 4))} Edition</span>
          <span>${esc(p.dateLabel.replace(/\s*\d{4}$/, ""))}</span>
        </div>
        <h1 class="lv-gz-article-title lv-reveal">${esc(p.title)}</h1>
        ${p.excerpt ? `<p class="lv-gz-article-deck lv-reveal">${esc(p.excerpt)}</p>` : ""}
        <div class="lv-gz-byline lv-reveal">${esc(p.dateLabel)} · ${esc(p.readingTime)} read · ${p.tags.map(esc).join(" · ")}</div>
      </header>

      <div class="lv-post-body">${bodyHtml}</div>

      ${next && next.slug !== p.slug ? `
        <div class="lv-gz-section-heading lv-reveal" style="margin-top:6rem;"><span>Read next</span></div>
        <a href="#/blog/${esc(next.slug)}" class="lv-gz-entry lv-gz-entry--full lv-reveal" style="border-top:none;padding-top:0;">
          <div class="kicker">${next.tags.map(esc).join(" · ")}</div>
          <h3 class="hl">${esc(next.title)}</h3>
          <p class="exc">${esc(next.excerpt)}</p>
          <div class="meta">${esc(next.dateLabel)} · ${esc(next.readingTime)}</div>
        </a>` : ""}
    `;
    renderScribbles();
    initPostChats(root);
  }

  // ========================================================================
  // V1 WORK LEDGER — filter chips + impact-stamp rows + per-row mini-intro
  // ========================================================================
  const WORK_PREVIEW = {
    "pricing": {
      kind: "stat", label: "in revenue", tilt: -6,
      categories: ["research", "experimentation"],
      intro: "Research lead · with PM, data, and finance"
    },
    "ai-workflow": {
      kind: "stat", label: "less cycle time", tilt: 5,
      categories: ["ops", "experimentation"],
      intro: "End-to-end owner · cross-functional rollout"
    },
    "research-culture": {
      kind: "stat", label: "of target hit", tilt: -3,
      categories: ["research", "ops"],
      intro: "Research lead · org-wide practice"
    },
    "design-system": {
      kind: "image",
      categories: ["systems", "brand"],
      intro: "System lead · with 1 designer, 2 engineers"
    },
    "website-relaunch": {
      kind: "stat", label: "pages relaunched", tilt: 7,
      categories: ["systems", "brand"],
      intro: "Lead designer · brand, IA & 140+ pages"
    }
  };

  const WORK_FILTERS = [
    { id: "all",             label: "All work" },
    { id: "research",        label: "Research" },
    { id: "experimentation", label: "Experimentation" },
    { id: "systems",         label: "Design systems" },
    { id: "ops",             label: "Design ops" },
    { id: "brand",           label: "Brand" }
  ];

  let v1WorkFilter = "all";

  function inCategory(c, filter) {
    if (filter === "all") return true;
    const cats = (WORK_PREVIEW[c.slug] && WORK_PREVIEW[c.slug].categories) || [];
    return cats.includes(filter);
  }

  function renderV1WorkLedger() {
    const filtersEl = $("#v1-work-filters");
    const rowsEl = $("#v1-work-cases");
    if (!filtersEl || !rowsEl) return;

    // Filter chips (with counts)
    const counts = {};
    WORK_FILTERS.forEach((f) => {
      counts[f.id] = D.cases.filter((c) => inCategory(c, f.id)).length;
    });
    filtersEl.innerHTML = WORK_FILTERS.map((f) => {
      const active = v1WorkFilter === f.id;
      const disabled = counts[f.id] === 0;
      return `
        <button type="button" class="v1-work-chip${active ? " is-active" : ""}"
                data-filter="${esc(f.id)}"${disabled ? " disabled" : ""}
                aria-pressed="${active ? "true" : "false"}">
          <span>${esc(f.label)}</span>
          <span class="v1-work-chip-count">${counts[f.id]}</span>
        </button>
      `;
    }).join("");

    // Ledger rows
    const visible = D.cases.filter((c) => inCategory(c, v1WorkFilter));
    rowsEl.innerHTML = visible.length === 0
      ? `<div class="v1-work-empty">Nothing in this category yet — try another filter.</div>`
      : visible.map((c, i) => {
          const p = WORK_PREVIEW[c.slug] || {};
          const stat = c.impact && c.impact[0];
          const visual = p.kind === "image"
            ? `<span class="v1-work-thumb" style="--case-hue:${c.coverPaletteHue};"></span>`
            : `<span class="v1-work-stamp" style="--tilt:${p.tilt != null ? p.tilt : -4}deg;">
                 <span class="v">${esc(stat ? stat.value : "")}</span>
                 <span class="k">${esc(p.label || (stat ? stat.label : ""))}</span>
               </span>`;
          return `
            <a href="#/work/${esc(c.slug)}" class="v1-work-row lv-reveal"
               style="--case-hue:${c.coverPaletteHue};" data-cursor-label="Open">
              <span class="n">${String(i + 1).padStart(2, "0")}</span>
              <span class="body">
                <span class="title">${esc(c.title)}</span>
                <span class="intro">${esc(p.intro || c.role)} · ${esc(c.company)} · ${esc(c.year)}</span>
              </span>
              <span class="visual">${visual}</span>
            </a>
          `;
        }).join("");
  }

  function initV1WorkFilters() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".v1-work-chip");
      if (!btn || btn.disabled) return;
      e.preventDefault();
      const next = btn.getAttribute("data-filter");
      if (!next || next === v1WorkFilter) return;
      v1WorkFilter = next;
      renderV1WorkLedger();
    });
  }

  // ========================================================================
  // DYNAMIC HOME + WORK CASE LISTS (injected so data is one source of truth)
  // ========================================================================
  function renderCaseLists() {
    // V1 — Home selected work: minimal ledger with cursor-following preview
    const v1HomeList = $("#v1-home-cases");
    if (v1HomeList) {
      const PREVIEW = {
        "pricing":          { kind: "stat",  label: "in revenue",       tilt: -6 },
        "ai-workflow":      { kind: "stat",  label: "less cycle time",  tilt:  5 },
        "research-culture": { kind: "stat",  label: "of target hit",    tilt: -3 },
        "design-system":    { kind: "image" },
        "website-relaunch": { kind: "stat",  label: "pages relaunched", tilt:  7 }
      };

      const rowsHtml = D.cases.map((c, i) => {
        const p = PREVIEW[c.slug] || { kind: "stat", label: c.impact[0].label, tilt: -4 };
        return `
          <a href="#/work/${esc(c.slug)}" class="v1-ledger-row lv-reveal"
             data-preview-kind="${esc(p.kind)}"
             data-preview-value="${esc(c.impact[0].value)}"
             data-preview-label="${esc(p.label || c.impact[0].label)}"
             data-preview-tilt="${p.tilt == null ? -4 : p.tilt}"
             data-case-hue="${c.coverPaletteHue}">
            <span class="n">${String(i + 1).padStart(2, "0")}</span>
            <span class="title">${esc(c.title)}</span>
          </a>
        `;
      }).join("");

      v1HomeList.innerHTML = `
        <div class="v1-ledger-root">
          <div class="v1-ledger">${rowsHtml}</div>
          <div class="v1-ledger-stat-floater" aria-hidden="true">
            <div class="v"></div>
            <div class="k"></div>
          </div>
          <div class="v1-ledger-image-floater" aria-hidden="true">
            <div class="v1-ledger-cover"></div>
          </div>
        </div>
      `;

      const ledgerRoot = v1HomeList.querySelector(".v1-ledger-root");
      const statFloater = ledgerRoot.querySelector(".v1-ledger-stat-floater");
      const imageFloater = ledgerRoot.querySelector(".v1-ledger-image-floater");
      const statV = statFloater.querySelector(".v");
      const statK = statFloater.querySelector(".k");
      const cover = imageFloater.querySelector(".v1-ledger-cover");
      let active = null;

      ledgerRoot.addEventListener("mousemove", (e) => {
        if (!active) return;
        const target = active.dataset.previewKind === "image" ? imageFloater : statFloater;
        target.style.left = e.clientX + "px";
        target.style.top = e.clientY + "px";
      });

      ledgerRoot.querySelectorAll(".v1-ledger-row").forEach((row) => {
        row.addEventListener("mouseenter", () => {
          active = row;
          if (row.dataset.previewKind === "image") {
            cover.style.setProperty("--case-hue", row.dataset.caseHue);
            imageFloater.classList.add("is-visible");
          } else {
            statV.textContent = row.dataset.previewValue;
            statK.textContent = row.dataset.previewLabel;
            statFloater.style.setProperty("--tilt", row.dataset.previewTilt + "deg");
            statFloater.classList.add("is-visible");
          }
        });
        row.addEventListener("mouseleave", () => {
          active = null;
          statFloater.classList.remove("is-visible");
          imageFloater.classList.remove("is-visible");
        });
      });
    }

    // V1 — Work ledger (filter chips + impact-stamp rows + mini-intro)
    renderV1WorkLedger();
  }

  // ========================================================================
  // BOOT
  // ========================================================================
  function closeAllInfoPopovers(except) {
    document.querySelectorAll(".v1-limitations-info-btn").forEach((b) => {
      if (b === except) return;
      if (b.getAttribute("aria-expanded") !== "true") return;
      b.setAttribute("aria-expanded", "false");
      const pid = b.getAttribute("aria-controls");
      const pop = pid && document.getElementById(pid);
      if (pop) pop.hidden = true;
    });
  }

  function initFlipCards() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".v1-limitations-flip");
      if (!btn) return;
      const card = btn.closest(".v1-limitations-card");
      if (!card) return;
      closeAllInfoPopovers();
      const flipped = card.classList.toggle("is-flipped");
      card.querySelectorAll(".is-front, .is-back").forEach((face) => {
        const isBack = face.classList.contains("is-back");
        face.setAttribute("aria-hidden", String(isBack !== flipped));
      });
      card.querySelectorAll(".v1-limitations-flip").forEach((b) => {
        const onBack = b.closest(".is-back");
        b.setAttribute("aria-pressed", String(onBack ? !flipped : flipped));
      });
    });
  }

  function initInfoPopovers() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".v1-limitations-info-btn");
      if (btn) {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        closeAllInfoPopovers(btn);
        const pid = btn.getAttribute("aria-controls");
        const pop = pid && document.getElementById(pid);
        btn.setAttribute("aria-expanded", String(!expanded));
        if (pop) pop.hidden = expanded;
        return;
      }
      if (!e.target.closest(".v1-limitations-info-popover")) {
        closeAllInfoPopovers();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllInfoPopovers();
    });
  }


  function initFooterEmoji() {
    const el = document.querySelector(".lv-footer-emoji");
    if (!el) return;
    const emojis = ["🩶", "🐶", "🍵", "🎨", "🤸", "🧘"];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % emojis.length;
      el.textContent = emojis[i];
    }, 2500);
  }

  // ---- About page: merged hero + pinned scrollytelling -------------------
  // .ahs section pins for ~5.65 viewports. First ~20% of scroll collapses
  // the headline into a masthead and cross-fades the lead out / chapters in;
  // the remainder steps through the four chapters and swaps the right-hand
  // image accordingly.
  function initHeroScrolly() {
    const sec = document.querySelector(".ahs");
    if (!sec) return;
    const pin = sec.querySelector(".ahs-pin");
    const imgs = $$(".ahs-img", sec);
    const portrait = sec.querySelector(".ahs-img[data-hero]");
    const stepImgs = $$(".ahs-img[data-step]", sec);
    const steps = $$(".ahs-step", sec);
    const dots = $$(".ahs-rail button", sec);
    const counter = sec.querySelector(".ahs-progress [data-current]");
    const total = steps.length;
    if (!total) return;
    const HERO_SEG = 0.2;
    let activeChap = -1;
    let lastImg = null;
    const isNarrow = () => window.matchMedia("(max-width: 880px)").matches;

    function setImg(el) {
      if (el === lastImg) return;
      imgs.forEach((i) => i.classList.toggle("is-active", i === el));
      lastImg = el;
    }
    function setChap(n) {
      if (n === activeChap) return;
      activeChap = n;
      steps.forEach((s, i) => s.classList.toggle("is-active", i === n));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === n));
      if (counter) counter.textContent = String(n + 1).padStart(2, "0");
    }

    function update() {
      if (isNarrow()) {
        pin.style.setProperty("--collapse", "1");
        setChap(0);
        setImg(portrait);
        return;
      }
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = sec.offsetHeight - vh;
      if (scrollable <= 0) {
        pin.style.setProperty("--collapse", "0");
        return;
      }
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      const collapse = Math.min(1, p / HERO_SEG);
      pin.style.setProperty("--collapse", collapse.toFixed(3));

      const chapP = Math.min(1, Math.max(0, (p - HERO_SEG) / (1 - HERO_SEG)));
      const idx = Math.min(total - 1, Math.floor(chapP * total * 0.999));
      setChap(idx);

      if (collapse < 0.5) setImg(portrait);
      else setImg(stepImgs[idx]);
    }

    dots.forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.getAttribute("data-step-jump") || "0", 10);
        const vh = window.innerHeight;
        const scrollable = sec.offsetHeight - vh;
        const frac = HERO_SEG + (1 - HERO_SEG) * (i + 0.15) / total;
        window.scrollTo({ top: sec.offsetTop + scrollable * frac, behavior: "smooth" });
      });
    });

    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", () => requestAnimationFrame(update));
    update();
  }

  // Slow the about-hero portrait video down a touch — full speed reads as
  // restless. playbackRate can only be set in JS, and it survives looping.
  function initHeroVideo() {
    const vid = document.querySelector(".ahs-video");
    if (!vid) return;
    const slow = () => { vid.playbackRate = 0.15; };
    slow();
    vid.addEventListener("loadedmetadata", slow);
    vid.addEventListener("play", slow);
  }

  function boot() {
    renderCaseLists();
    renderBlogLists();
    renderClientStrip();
    renderScribbles();
    initCursor();
    initCursorToggle();
    initMagnetic();
    initTweaks();
    initEasterEgg();
    initMobileNav();
    initFlipCards();
    initInfoPopovers();
    initV1WorkFilters();
    initFooterEmoji();
    initHeroScrolly();
    initHeroVideo();
    renderRoute();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
