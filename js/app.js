/* =========================================================================
   App — vanilla JS: router, variation, cursor, magnetic, tweaks, easter egg,
   case-study renderer, mobile nav.
   Depends on: window.LV_DATA (loaded by js/data.js before this file).
   ========================================================================= */

(function () {
  "use strict";
  const D = window.LV_DATA;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // -------- Early bootstrap (inline head script already set data-variation,
  // but this re-applies persisted tweaks in case they weren't) ----------
  function bootstrapVars() {
    let v = localStorage.getItem("lv-variation") || "v1";
    if (v !== "v1" && v !== "v3") v = "v1";
    document.documentElement.setAttribute("data-variation", v);
    const hue = localStorage.getItem("lv-hue");
    if (hue !== null && hue !== "") {
      document.documentElement.style.setProperty("--accent-hue", hue);
    }
    const ts = localStorage.getItem("lv-ts");
    if (ts) document.documentElement.style.setProperty("--type-scale", ts);
    const density = localStorage.getItem("lv-density");
    if (density) document.documentElement.style.setProperty("--scribble-density", density);
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

    // Case study: fill every variation template with the selected slug.
    if (route.page === "case") {
      const c = D.cases.find((x) => x.slug === route.slug) || D.cases[0];
      renderV1Case(c);
      renderV3Case(c);
    }

    // Blog post: render selected post in both variation templates.
    if (route.page === "post") {
      const p = (D.posts || []).find((x) => x.slug === route.slug) || (D.posts || [])[0];
      if (p) {
        renderV1Post(p);
        renderV3Post(p);
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
  // VARIATION SWITCHER
  // ========================================================================
  function initSwitcher() {
    const el = $(".lv-switcher");
    if (!el) return;
    $$(".lv-switcher button", el).forEach((btn) => {
      btn.addEventListener("click", () => {
        const v = btn.getAttribute("data-variation");
        document.documentElement.setAttribute("data-variation", v);
        localStorage.setItem("lv-variation", v);
        $$(".lv-switcher button").forEach((b) => {
          b.classList.toggle("is-active", b.getAttribute("data-variation") === v);
        });
      });
    });
    const current = document.documentElement.getAttribute("data-variation") || "v1";
    $$(".lv-switcher button", el).forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-variation") === current);
    });
  }

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

  function renderV1Case(c) {
    const root = $("#v1-case-body");
    if (!root) return;
    const idx = D.cases.findIndex((x) => x.slug === c.slug);
    const next = D.cases[(idx + 1) % D.cases.length];

    const storyHtml = c.story.map((s, i) => {
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
        <section class="v1-story-block lv-reveal">
          <h3>${String(i + 1).padStart(2, "0")} — ${esc(s.title)}</h3>
          ${body}${extra}
        </section>`;
    }).join("");

    root.innerHTML = `
      <a href="#/work" class="lv-nav-link" data-cursor-label="← Back">← All work</a>

      <header style="margin-top:2rem;">
        <div class="v1-meta-row" style="border-top:none;">
          <span>${esc(c.company)} · ${esc(c.year)}</span>
          <span>${esc(c.duration)}</span>
        </div>
        <h1 class="v1-hero-display lv-reveal" style="margin:2rem 0 1.5rem;font-size:clamp(2.25rem,6vw,4.8rem);">
          <em>${esc(c.title)}</em>
        </h1>
        <p class="v1-pull lv-reveal">${esc(c.subtitle)}.</p>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.75rem;">
          ${c.tags.map((t) => `<span class="v1-chip">${esc(t)}</span>`).join("")}
        </div>
      </header>

      <div class="v1-case-media lv-reveal" style="--case-hue:${c.coverPaletteHue};aspect-ratio:21/9;margin:3rem 0 4rem;border-radius:var(--radius-lg);position:relative;">
        <div class="v1-case-media-label">Hero visual · ${esc(c.company)}</div>
      </div>

      <div class="v1-impact-grid lv-reveal" style="margin-bottom:4rem;">
        ${c.impact.map((i) => `
          <div class="v1-impact-cell">
            <div class="v1-impact-cell-label">${esc(i.label)}</div>
            <div class="v1-impact-num">${esc(i.value)}</div>
            <div class="lv-body" style="margin-top:0.5rem;font-size:0.9rem;">${esc(i.note)}</div>
          </div>`).join("")}
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;padding:1.5rem 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);margin-bottom:4rem;" class="lv-reveal v1-meta-3cols">
        <div><div class="lv-eyebrow">Role</div><div style="margin-top:0.5rem;">${esc(c.role)}</div></div>
        <div><div class="lv-eyebrow">Team</div><div style="margin-top:0.5rem;">${esc(c.team)}</div></div>
        <div><div class="lv-eyebrow">Year</div><div style="margin-top:0.5rem;">${esc(c.year)}</div></div>
      </div>

      <div class="v1-case-grid" style="display:grid;grid-template-columns:1fr 2.2fr;gap:clamp(2rem, 5vw, 4rem);">
        <aside class="lv-reveal">
          <div class="v1-sticky-nav">
            <div class="lv-eyebrow">Contents</div>
            <ol style="list-style:none;padding:0;margin:1rem 0 0;display:flex;flex-direction:column;gap:0.5rem;">
              ${c.story.map((s, i) => `<li style="font-family:var(--font-mono);font-size:0.78rem;color:var(--ink-3);">${String(i + 1).padStart(2, "0")} · ${esc(s.title)}</li>`).join("")}
            </ol>
            <div style="margin-top:2rem;" class="v1-hand">
              "Proud of<br/>this one."
              <span data-scribble="arrow" style="position:relative;display:block;width:100px;height:30px;margin-top:0.5rem;"></span>
            </div>
          </div>
        </aside>
        <div>${storyHtml}</div>
      </div>

      <a href="#/work/${esc(next.slug)}" class="lv-reveal" style="display:block;margin-top:6rem;text-decoration:none;color:inherit;padding:3rem 0;border-top:1px solid var(--rule);">
        <div class="lv-eyebrow">Next case →</div>
        <h2 class="v1-case-title" style="margin-top:1rem;font-size:clamp(1.75rem,3.5vw,2.6rem);">${esc(next.title)}</h2>
        <div style="margin-top:0.75rem;color:var(--ink-3);font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.1em;">
          ${esc(next.company)} · ${esc(next.impact[0].value)} ${esc(next.impact[0].label.toLowerCase())}
        </div>
      </a>
    `;
    renderScribbles();
  }

  function renderV3Case(c) {
    const root = $("#v3-case-body");
    if (!root) return;
    const idx = D.cases.findIndex((x) => x.slug === c.slug);
    const next = D.cases[(idx + 1) % D.cases.length];

    const storyHtml = c.story.map((s, i) => {
      const head = `<div class="v3-story-head"><span>${String(i + 1).padStart(2, "0")} · ${esc(s.title)}</span><span class="tag">${
        s.kind === "result" ? "OUTCOME" : s.kind === "framework" ? "MATRIX" : s.kind === "flow" ? "FLOW" : "LOG"
      }</span></div>`;
      const title = `<h2>${esc(s.title)}</h2>`;
      const body = s.body ? `<p class="v3-story-body">${esc(s.body)}</p>` : "";
      let extra = "";
      if (s.kind === "framework" && s.items) {
        extra = `<table class="v3-framework-table">
          <thead><tr><th>Principle</th><th>Value</th><th>Effect</th></tr></thead>
          <tbody>${s.items.map((it) => `<tr><td>${esc(it.k)}</td><td>${esc(it.v)}</td><td>${esc(it.effect)}</td></tr>`).join("")}</tbody>
        </table>`;
      } else if (s.kind === "flow" && s.items) {
        const lines = s.items.map((it, j) =>
          j === s.items.length - 1
            ? `    [${it.from}]  →  [${it.to}]`
            : `    [${it.from}]`
        ).join("\n       │\n       ▼\n");
        extra = `<div style="margin-top:1.5rem;padding:1.5rem;background:var(--paper-2);border:1px solid var(--rule);"><pre class="v3-ascii" style="padding:0;background:transparent;border:none;">${esc(lines)}</pre></div>`;
      }
      return `<section class="v3-story lv-reveal" style="margin-bottom:3.5rem;">${head}${title}${body}${extra}</section>`;
    }).join("");

    const idxNum = String(idx + 1).padStart(2, "0");
    const total = String(D.cases.length).padStart(2, "0");

    root.innerHTML = `
      <a href="#/work" style="font-family:var(--font-mono);font-size:0.8rem;color:var(--ink-3);text-decoration:none;letter-spacing:0.08em;" data-cursor-label="← Back">← ../work</a>

      <header style="margin-top:2rem;">
        <div class="v3-kicker">
          <span>CASE / ${idxNum} / ${total}</span>
          <span class="sep">◆</span>
          <span>${esc(c.company)}</span>
          <span class="sep">◆</span>
          <span>${esc(c.year)}</span>
        </div>
        <h1 class="v3-hero-title lv-reveal" style="font-size:clamp(2rem,6vw,4.5rem);">${esc(c.title)}</h1>
        <p class="lv-lead lv-reveal" style="max-width:62ch;margin-top:2rem;color:var(--ink-2);">${esc(c.tldr)}</p>
      </header>

      <div class="v3-meta-sheet lv-reveal">
        <div class="row-grid">
          <div class="cell"><div class="k">ROLE</div><div class="v">${esc(c.role)}</div></div>
          <div class="cell"><div class="k">TEAM</div><div class="v">${esc(c.team)}</div></div>
          <div class="cell"><div class="k">DURATION</div><div class="v">${esc(c.duration)}</div></div>
          <div class="cell"><div class="k">YEAR</div><div class="v">${esc(c.year)}</div></div>
        </div>
        <div class="tags">${c.tags.map((t) => `<span class="v3-chip">${esc(t)}</span>`).join("")}</div>
      </div>

      <div class="v3-impact-box lv-reveal">
        <div class="v3-kicker" style="margin-bottom:1.5rem;"><span>./impact</span></div>
        <div style="display:grid;gap:1.5rem;">
          ${c.impact.map((i, j) => `
            <div class="v3-impact-row">
              <div class="label">${esc(i.label)}</div>
              <div class="v3-metric-bar"><div class="fill" style="width:${60 + j * 15}%;animation-delay:${j * 0.2}s;"></div></div>
              <div class="val">${esc(i.value)}</div>
            </div>`).join("")}
        </div>
      </div>

      <div style="margin-top:5rem;">${storyHtml}</div>

      <a href="#/work/${esc(next.slug)}" class="lv-reveal" style="display:block;margin-top:5rem;padding:2.5rem 0;border-top:2px solid var(--rule);text-decoration:none;color:inherit;">
        <div class="v3-kicker"><span>→ next.case</span></div>
        <h2 class="v3-hero-title" style="font-size:clamp(1.6rem,3.5vw,2.8rem);margin-top:1rem;">${esc(next.title)}</h2>
        <div style="margin-top:1rem;font-family:var(--font-mono);font-size:0.8rem;color:var(--accent);">
          ${esc(next.company)} · ${esc(next.impact[0].value)} ${esc(next.impact[0].label.toLowerCase())} →
        </div>
      </a>
    `;
  }

  // ========================================================================
  // BLOG RENDERERS (list + post detail, v1 + v3)
  // ========================================================================
  function renderBlogLists() {
    const posts = D.posts || [];

    const v1List = $("#v1-blog-list");
    if (v1List) {
      v1List.innerHTML = posts.map((p, i) => `
        <a href="#/blog/${esc(p.slug)}" class="lv-reveal v1-career-row" style="text-decoration:none;color:inherit;grid-template-columns:auto 1fr auto;gap:2rem;align-items:baseline;" data-cursor-label="Read">
          <div class="period">${esc(p.dateLabel)}</div>
          <div>
            <div class="role" style="font-size:clamp(1.1rem,1.8vw,1.4rem);">${esc(p.title)}</div>
            <div class="note" style="margin-top:0.4rem;max-width:62ch;">${esc(p.excerpt)}</div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.75rem;">
              ${p.tags.map((t) => `<span class="v1-chip" style="font-size:0.68rem;">${esc(t)}</span>`).join("")}
            </div>
          </div>
          <div class="org" style="font-family:var(--font-mono);font-size:0.75rem;color:var(--ink-3);">${esc(p.readingTime)} →</div>
        </a>
      `).join("");
    }

    const v3List = $("#v3-blog-list");
    if (v3List) {
      v3List.innerHTML = posts.map((p, i) => `
        <a href="#/blog/${esc(p.slug)}" class="v3-case-row lv-reveal" data-cursor-label="Read">
          <div class="num">${String(i + 1).padStart(2, "0")}</div>
          <div>
            <h3>${esc(p.title)}</h3>
            <div class="meta">${esc(p.dateLabel)} · ${esc(p.readingTime)} · ${p.tags.map(esc).join(" · ")}</div>
          </div>
          <div class="metric" style="font-size:clamp(0.8rem,1.2vw,1rem);font-family:var(--font-mono);">${esc(p.date)}</div>
          <div class="metric-label">published</div>
          <div class="arrow">→</div>
        </a>
      `).join("");
    }
  }

  function renderV1Post(p) {
    const root = $("#v1-post-body");
    if (!root) return;
    const posts = D.posts || [];
    const idx = posts.findIndex((x) => x.slug === p.slug);
    const next = posts[(idx + 1) % posts.length];

    const bodyHtml = p.body.map((para) => `<p class="lv-lead lv-reveal" style="max-width:58ch;margin-bottom:1.5rem;">${esc(para)}</p>`).join("");

    root.innerHTML = `
      <a href="#/blog" class="lv-nav-link" data-cursor-label="← Back">← All posts</a>

      <header style="margin-top:2rem;">
        <div class="v1-meta-row" style="border-top:none;">
          <span>${esc(p.dateLabel)}</span>
          <span>${esc(p.readingTime)} read</span>
        </div>
        <h1 class="v1-hero-display lv-reveal" style="margin:2rem 0 1.5rem;font-size:clamp(2rem,5vw,4rem);">
          <em>${esc(p.title)}</em>
        </h1>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.25rem;">
          ${p.tags.map((t) => `<span class="v1-chip">${esc(t)}</span>`).join("")}
        </div>
      </header>

      <div style="margin-top:3.5rem;max-width:62ch;">${bodyHtml}</div>

      ${next && next.slug !== p.slug ? `
        <a href="#/blog/${esc(next.slug)}" class="lv-reveal" style="display:block;margin-top:6rem;text-decoration:none;color:inherit;padding:3rem 0;border-top:1px solid var(--rule);">
          <div class="lv-eyebrow">Next post →</div>
          <h2 class="v1-case-title" style="margin-top:1rem;font-size:clamp(1.5rem,3vw,2.2rem);">${esc(next.title)}</h2>
          <div style="margin-top:0.75rem;color:var(--ink-3);font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.1em;">
            ${esc(next.dateLabel)} · ${esc(next.readingTime)}
          </div>
        </a>` : ""}
    `;
    renderScribbles();
  }

  function renderV3Post(p) {
    const root = $("#v3-post-body");
    if (!root) return;
    const posts = D.posts || [];
    const idx = posts.findIndex((x) => x.slug === p.slug);
    const next = posts[(idx + 1) % posts.length];

    const bodyHtml = p.body.map((para) => `<p class="v3-story-body lv-reveal" style="margin-bottom:1.5rem;">${esc(para)}</p>`).join("");

    const idxNum = String(idx + 1).padStart(2, "0");
    const total = String(posts.length).padStart(2, "0");

    root.innerHTML = `
      <a href="#/blog" style="font-family:var(--font-mono);font-size:0.8rem;color:var(--ink-3);text-decoration:none;letter-spacing:0.08em;" data-cursor-label="← Back">← ../blog</a>

      <header style="margin-top:2rem;">
        <div class="v3-kicker">
          <span>POST / ${idxNum} / ${total}</span>
          <span class="sep">◆</span>
          <span>${esc(p.dateLabel)}</span>
          <span class="sep">◆</span>
          <span>${esc(p.readingTime)}</span>
        </div>
        <h1 class="v3-hero-title lv-reveal" style="font-size:clamp(1.75rem,5vw,3.75rem);margin-top:1.5rem;">${esc(p.title)}</h1>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.5rem;">
          ${p.tags.map((t) => `<span class="v3-chip">${esc(t)}</span>`).join("")}
        </div>
      </header>

      <div style="margin-top:4rem;max-width:64ch;">${bodyHtml}</div>

      ${next && next.slug !== p.slug ? `
        <a href="#/blog/${esc(next.slug)}" class="lv-reveal" style="display:block;margin-top:5rem;padding:2.5rem 0;border-top:2px solid var(--rule);text-decoration:none;color:inherit;">
          <div class="v3-kicker"><span>→ next.post</span></div>
          <h2 class="v3-hero-title" style="font-size:clamp(1.4rem,3vw,2.4rem);margin-top:1rem;">${esc(next.title)}</h2>
          <div style="margin-top:1rem;font-family:var(--font-mono);font-size:0.8rem;color:var(--accent);">
            ${esc(next.dateLabel)} · ${esc(next.readingTime)} →
          </div>
        </a>` : ""}
    `;
  }

  // ========================================================================
  // DYNAMIC HOME + WORK CASE LISTS (injected so data is one source of truth)
  // ========================================================================
  function renderCaseLists() {
    // V1 — Home selected work
    const v1HomeList = $("#v1-home-cases");
    if (v1HomeList) {
      v1HomeList.innerHTML = D.cases.map((c, i) => `
        <a href="#/work/${esc(c.slug)}" class="v1-case-card lv-reveal" style="text-decoration:none;color:inherit;" data-cursor-label="Open">
          <div>
            <div class="v1-case-num">Case ${String(i + 1).padStart(2, "0")}</div>
            <h3 class="v1-case-title">${esc(c.title)}</h3>
            <p class="lv-body" style="max-width:52ch;margin-top:0.5rem;">${esc(c.tldr)}</p>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.25rem;">
              <span class="v1-chip">${esc(c.company)}</span>
              <span class="v1-chip">${esc(c.year)}</span>
              <span class="v1-chip" style="color:var(--accent);">${esc(c.impact[0].value)} ${esc(c.impact[0].label)}</span>
            </div>
          </div>
          <div class="v1-case-media" style="--case-hue:${c.coverPaletteHue};">
            <div class="v1-case-media-label">${esc(c.tags[0])}</div>
          </div>
        </a>
      `).join("");
    }

    // V1 — Work list
    const v1WorkList = $("#v1-work-cases");
    if (v1WorkList) {
      v1WorkList.innerHTML = D.cases.map((c, i) => `
        <a href="#/work/${esc(c.slug)}" class="v1-case-card lv-reveal" style="text-decoration:none;color:inherit;" data-cursor-label="Open">
          <div>
            <div class="v1-case-num">${String(i + 1).padStart(2, "0")} · ${esc(c.company)}, ${esc(c.year)}</div>
            <h3 class="v1-case-title">${esc(c.title)}</h3>
            <p class="lv-body" style="max-width:56ch;margin-top:0.5rem;">${esc(c.tldr)}</p>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.25rem;">
              ${c.tags.map((t) => `<span class="v1-chip">${esc(t)}</span>`).join("")}
            </div>
          </div>
          <div class="v1-case-media" style="--case-hue:${c.coverPaletteHue};">
            <div class="v1-case-media-label">${esc(c.impact[0].value)} · ${esc(c.impact[0].label)}</div>
          </div>
        </a>
      `).join("");
    }

    // V3 — Home case rows
    const v3HomeList = $("#v3-home-cases");
    if (v3HomeList) {
      v3HomeList.innerHTML = D.cases.map((c, i) => `
        <a href="#/work/${esc(c.slug)}" class="v3-case-row lv-reveal" data-cursor-label="Open">
          <div class="num">0${i + 1}</div>
          <div>
            <h3>${esc(c.title)}</h3>
            <div class="meta">${esc(c.company)} · ${esc(c.year)} · ${c.tags.slice(0, 2).map(esc).join(" · ")}</div>
          </div>
          <div class="metric">${esc(c.impact[0].value)}</div>
          <div class="metric-label">${esc(c.impact[0].label)}</div>
          <div class="arrow">→</div>
        </a>
      `).join("");
    }

    // V3 — Work list
    const v3WorkList = $("#v3-work-cases");
    if (v3WorkList) {
      v3WorkList.innerHTML = D.cases.map((c, i) => `
        <a href="#/work/${esc(c.slug)}" class="v3-case-row lv-reveal">
          <div class="num">0${i + 1}</div>
          <div>
            <h3>${esc(c.title)}</h3>
            <div class="meta">${esc(c.company)} · ${esc(c.year)}</div>
            <div class="tags">${c.tags.map((t) => `<span class="v3-chip">${esc(t)}</span>`).join("")}</div>
          </div>
          <div class="metric">${esc(c.impact[0].value)}</div>
          <div class="metric-label">${esc(c.impact[0].label)}</div>
          <div class="arrow">→</div>
        </a>
      `).join("");
    }
  }

  // ========================================================================
  // BOOT
  // ========================================================================
  function boot() {
    renderCaseLists();
    renderBlogLists();
    renderClientStrip();
    renderScribbles();
    initSwitcher();
    initCursor();
    initMagnetic();
    initTweaks();
    initEasterEgg();
    initMobileNav();
    renderRoute();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
