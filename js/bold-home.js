/* =========================================================================
   Bold Type home (#/home-bold): work cards from data.js, chapter rail,
   progress segments, and the light/dark nav flip on the Contact chapter.
   Depends on: window.LV_DATA and window.LV_RENDER (set by js/app.js).
   ========================================================================= */

(function () {
  "use strict";
  const D = window.LV_DATA;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const root = $(".bt");
  if (!root || !D) return;

  const CHAPTERS = [
    { id: "intro", label: "Intro", color: "var(--bt-rose)" },
    { id: "work", label: "Work", color: "var(--bt-cobalt)" },
    { id: "experience", label: "Experience", color: "var(--bt-mustard)" },
    { id: "contact", label: "Contact", color: "var(--bt-rose)" },
  ];
  const pad = (n) => String(n).padStart(2, "0");

  // -------- Work cards: the top three cases, same order as data.js --------
  function renderCards() {
    const esc = window.LV_RENDER ? window.LV_RENDER.esc : (s) => String(s);
    const grid = $(".bt-work-grid", root);
    if (!grid) return;
    grid.innerHTML = D.cases.slice(0, 3).map((c) => `
      <a href="#/work/${esc(c.slug)}" class="bt-card" data-cursor-label="Read →">
        <span class="bt-card-cover" style="--case-hue:${c.coverPaletteHue};" aria-hidden="true"></span>
        <span class="bt-card-text">
          <span class="bt-card-title">${esc(c.title)}</span>
          <span class="bt-card-sub">${esc(c.company)} · ${esc((c.tags || [])[0] || c.year)}</span>
        </span>
      </a>
    `).join("");
  }

  // -------- Rail + progress: built once, driven by an observer --------
  function renderRail() {
    const rail = $(".bt-rail", root);
    const progress = $(".bt-nav-progress", root);
    if (rail) {
      rail.innerHTML = CHAPTERS.map((c, i) => `
        <button type="button" class="bt-rail-btn" data-go="${c.id}" style="--chapter-color:${c.color}">
          <span>${pad(i)} ${c.label}</span><span class="bar"></span>
        </button>
      `).join("") + `<span class="bt-rail-count"></span>`;
    }
    if (progress) {
      progress.innerHTML = CHAPTERS.map((c) => `<span style="--chapter-color:${c.color}"></span>`).join("");
    }
  }

  function setChapter(index) {
    const ch = CHAPTERS[index];
    root.setAttribute("data-chapter", ch.id);
    $$(".bt-rail-btn", root).forEach((b, i) => b.classList.toggle("is-active", i === index));
    $$(".bt-nav-progress span", root).forEach((s, i) => {
      s.classList.toggle("is-done", i <= index);
      // Every filled segment takes the current chapter's color, as in the design.
      if (i <= index) s.style.setProperty("--chapter-color", ch.color);
    });
    const count = `${pad(index)} / ${pad(CHAPTERS.length - 1)}`;
    $$(".bt-rail-count, .bt-nav-count", root).forEach((el) => (el.textContent = count));
    $$(".bt-nav-link", root).forEach((a) => {
      a.classList.toggle("is-current", a.getAttribute("data-chapter") === ch.id);
    });
  }

  // The current chapter is whichever one sits under the viewport's midline.
  // Read on scroll rather than via IntersectionObserver so the state can't
  // lag behind a snap or an instant jump. Four rect reads per event is cheap.
  function initScrollSpy() {
    const sections = $$(".bt-chapter", root);
    let current = -1;
    function update() {
      if (root.closest(".lv-route").hidden) return;
      const mid = window.innerHeight / 2;
      let i = sections.findIndex((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= mid && r.bottom > mid;
      });
      if (i < 0) i = window.scrollY <= 0 ? 0 : sections.length - 1;
      if (i !== current) { current = i; setChapter(i); }
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Route changes reset the scroll position; re-read after the router ran.
    document.addEventListener("lv:rendered", () => { current = -1; update(); });
    update();
  }

  function initClicks() {
    root.addEventListener("click", (e) => {
      const go = e.target.closest("[data-go]");
      if (go) {
        const target = $(`.bt-chapter[data-chapter-id="${go.getAttribute("data-go")}"]`, root);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    });
    // The mobile menu button reuses the site's nav sheet; the global toggle
    // is hidden on these routes, so trigger it by hand. Bound on document
    // because #/about-bold has its own .bt-nav outside this root.
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".bt-nav-menu")) return;
      const toggle = $(".lv-nav-toggle");
      if (toggle) toggle.click();
    });
  }

  function boot() {
    renderCards();
    renderRail();
    initClicks();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
