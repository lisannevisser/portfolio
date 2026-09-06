/* =========================================================================
   Resume — renders the CV-style one-pager at #/cv.

   Everything on the page comes from window.LV_DATA.resume, so the content
   lives in js/data.js next to the rest of the site. The cover panel is
   static in index.html (it carries the name and the pitch, which should
   exist without JavaScript); every panel below it is built here.

   Three jobs beyond rendering:
     - reveal      fallback fade-in for browsers without view() timelines
     - rail        the panel index on the right, current panel highlighted
     - progress    the hairline at the very top of the page
   ========================================================================= */

(function () {
  "use strict";

  const D = window.LV_DATA;
  if (!D || !D.resume) return;
  const R = D.resume;
  const MAIL = (D.identity && D.identity.email) || "mail@lisannevisser.com";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // -----------------------------------------------------------------------
  // The visual next to each project.
  // A real image when data.js has a `cover`, otherwise a typographic plate:
  // the number set large, the client wordmark underneath. No tints, no hue
  // gradients; the plate is meant to be quiet enough to sit next to text.
  // -----------------------------------------------------------------------
  function visual(p, n) {
    const fig = String(n).padStart(2, "0");
    const body = p.cover
      ? `<img class="cv-cover-img" src="${esc(p.cover)}" alt="${esc(p.coverAlt || p.headline)}" loading="lazy" />`
      : plate(p);
    return `
      <figure class="cv-figure">
        ${body}
        <figcaption class="cv-figcaption">Fig. ${fig} &middot; ${esc(p.metric.note)}</figcaption>
      </figure>`;
  }

  function plate(p) {
    const logo = (D.clientLogos || {})[p.company];
    const mark = logo
      ? `<img class="cv-plate-logo" src="${esc(logo)}" alt="${esc(p.company)}" loading="lazy" />`
      : `<span class="cv-plate-org">${esc(p.company)}</span>`;
    return `
      <div class="cv-plate" role="img" aria-label="${esc(p.metric.value + " " + p.metric.label + ", " + p.company)}">
        <span class="cv-plate-kind">${esc(p.kind)}</span>
        <span class="cv-plate-num">${esc(p.metric.value)}</span>
        <span class="cv-plate-foot">${mark}<span class="cv-plate-org">${esc(p.metric.label)}</span></span>
      </div>`;
  }

  function projectPanel(p, n) {
    const ask = `mailto:${esc(MAIL)}?subject=${encodeURIComponent("Case study: " + p.headline)}`;
    // A case study only advertises itself once it is actually written; until
    // then the panel offers the ask instead of a half-finished page.
    const more = p.caseLink
      ? `<p class="cv-project-ask"><a href="#/work/${esc(p.slug)}">Read the case study &rarr;</a></p>`
      : `<p class="cv-project-ask">Full case study <a href="${ask}">on request</a></p>`;
    return `
      <section class="cv-panel" data-cv-panel data-cv-label="${esc(p.kind)}" aria-label="${esc(p.headline)}">
        <div class="cv-panel-inner lv-wrap">
          <div class="cv-project-grid">
            <div class="cv-project-text">
              <p class="cv-project-kicker">
                <span>${esc(String(n).padStart(2, "0"))}</span>
                <span>${esc(p.kind)}</span>
                <span>${esc(p.company)}</span>
                <span>${esc(p.period)}</span>
              </p>
              <h2 class="cv-project-headline">${esc(p.headline)}</h2>
              <p class="cv-project-scope">${esc(p.scope)}</p>
              <p class="cv-body cv-project-line">${esc(p.line)}</p>
              ${more}
            </div>
            <div class="cv-project-visual">${visual(p, n)}</div>
          </div>
        </div>
      </section>`;
  }

  function proofPanel() {
    const cells = R.proof
      .map(
        (m) => `
        <div class="cv-proof-cell">
          <div class="cv-proof-num">${esc(m.value)}</div>
          <div class="cv-proof-label">${esc(m.label)}</div>
          <p class="cv-proof-note">${esc(m.note)}</p>
        </div>`
      )
      .join("");
    return `
      <section class="cv-panel" data-cv-panel data-cv-label="Numbers">
        <div class="cv-panel-inner lv-wrap">
          <div class="cv-head cv-reveal">
            <p class="cv-label">01 / What the work moved</p>
            <h2 class="cv-h2">Four numbers I would put my name under.</h2>
            <p class="cv-lead">Every one of them comes from work I led or owned. The detail behind them is written up; it just is not public.</p>
          </div>
          <div class="cv-proof-grid cv-reveal">${cells}</div>
        </div>
      </section>`;
  }

  function workIntroPanel() {
    return `
      <section class="cv-panel" data-cv-panel data-cv-label="Work">
        <div class="cv-panel-inner lv-wrap">
          <div class="cv-head cv-reveal">
            <p class="cv-label">02 / Selected work</p>
            <h2 class="cv-h2">Six projects, one screen each.</h2>
            <p class="cv-lead">What it was, what I owned, what came out of it. The long versions exist as written case studies. Most of them touch pricing, revenue, or internal process, so I hand them over in a conversation rather than publish them here.</p>
            <p class="cv-lead" style="margin-top:0.75rem;">Ask and you get the full write-up, figures included.</p>
          </div>
        </div>
      </section>`;
  }

  function capabilitiesPanel() {
    const items = R.capabilities
      .map(
        (c) => `
        <div class="cv-cap-item">
          <h3 class="cv-h3">${esc(c.title)}</h3>
          <p class="cv-body">${esc(c.body)}</p>
        </div>`
      )
      .join("");
    const tools = (R.tools || []).map((t) => `<li class="cv-tool">${esc(t)}</li>`).join("");
    return `
      <section class="cv-panel is-tall" data-cv-panel data-cv-label="Capabilities">
        <div class="cv-panel-inner lv-wrap">
          <div class="cv-head cv-reveal">
            <p class="cv-label">03 / What I bring</p>
            <h2 class="cv-h2">Five things I am reliably good at.</h2>
          </div>
          <div class="cv-cap-list cv-reveal">${items}</div>
          <p class="cv-subhead cv-reveal">Tools I actually use</p>
          <ul class="cv-tools cv-reveal" style="list-style:none;padding:0;margin:0;">${tools}</ul>
        </div>
      </section>`;
  }

  function careerPanel() {
    const row = (r) => `
      <div class="cv-ledger-row">
        <div class="cv-ledger-period">${esc(r.period)}</div>
        <div>
          <h3 class="cv-h3">${esc(r.role)}</h3>
          <div class="cv-ledger-org">${esc(r.org)}</div>
          <p class="cv-body cv-ledger-note">${esc(r.note)}</p>
        </div>
      </div>`;
    const jobs = (R.career || []).map(row).join("");
    const edu = (R.education || []).map(row).join("");
    const logos = (D.clients || [])
      .map((name) => {
        const src = (D.clientLogos || {})[name];
        return src ? `<img src="${esc(src)}" alt="${esc(name)}" loading="lazy" />` : "";
      })
      .join("");
    return `
      <section class="cv-panel is-tall" data-cv-panel data-cv-label="Career">
        <div class="cv-panel-inner lv-wrap">
          <div class="cv-head cv-reveal">
            <p class="cv-label">04 / Career</p>
            <h2 class="cv-h2">Five years, four roles, two companies.</h2>
          </div>
          <div class="cv-ledger cv-reveal">${jobs}</div>
          <p class="cv-subhead cv-reveal">Education</p>
          <div class="cv-ledger cv-reveal">${edu}</div>
          <p class="cv-subhead cv-reveal">Worked with</p>
          <div class="cv-clients cv-reveal">${logos}</div>
        </div>
      </section>`;
  }

  function contactPanel() {
    return `
      <section class="cv-panel" data-cv-panel data-cv-label="Contact">
        <div class="cv-panel-inner lv-wrap cv-contact">
          <div class="cv-head cv-reveal">
            <p class="cv-label">05 / Next step</p>
            <h2 class="cv-h2">If any of this fits what you are hiring for, write to me.</h2>
            <p class="cv-lead">I answer every mail, and I bring the case studies with me.</p>
          </div>
          <a class="cv-contact-mail cv-reveal" href="mailto:${esc(MAIL)}" data-cursor-label="Write">${esc(MAIL)}</a>
          <div class="cv-contact-links cv-reveal">
            <a href="https://www.linkedin.com/in/lisanne-visser/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="${esc(R.cvUrl)}" target="_blank" rel="noopener noreferrer">CV document</a>
            <a href="#/about">More about me</a>
            <a href="#/blog">Writing</a>
          </div>
        </div>
      </section>`;
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------
  let rendered = false;

  function render() {
    const root = $("#cv-body");
    if (!root || rendered) return;
    root.innerHTML =
      proofPanel() +
      workIntroPanel() +
      R.projects.map((p, i) => projectPanel(p, i + 1)).join("") +
      capabilitiesPanel() +
      careerPanel() +
      contactPanel();
    rendered = true;
    buildRail();
    armReveal();
  }

  // -----------------------------------------------------------------------
  // Reveal fallback. Browsers with scroll-driven animations already animate
  // the panels via CSS; this covers the rest and keeps the page readable
  // when neither is available.
  // -----------------------------------------------------------------------
  function armReveal() {
    const els = $$("#cv-page .cv-reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (records) => {
        records.forEach((r) => {
          if (!r.isIntersecting) return;
          r.target.classList.add("is-in");
          io.unobserve(r.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    els.forEach((el, i) => {
      el.style.setProperty("--cv-delay", (i % 4) * 70 + "ms");
      io.observe(el);
    });
  }

  // -----------------------------------------------------------------------
  // Rail: the panel index on the right. Doubles as navigation.
  // -----------------------------------------------------------------------
  function buildRail() {
    const rail = $("#cv-rail");
    if (!rail) return;
    const panels = $$("#cv-page [data-cv-panel]");
    rail.innerHTML = panels
      .map((p, i) => {
        p.id = p.id || "cv-panel-" + i;
        const label = p.getAttribute("data-cv-label") || "Section " + (i + 1);
        // Number always, name on hover: the rail sits over the content column
        // on narrower desktops, and a two-character index never collides.
        return `<button type="button" data-cv-goto="${p.id}" aria-label="${esc(label)}">` +
          `<span class="cv-rail-name">${esc(label)}</span>` +
          `<span class="cv-rail-num">${esc(String(i + 1).padStart(2, "0"))}</span><i></i></button>`;
      })
      .join("");
    rail.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cv-goto]");
      if (!btn) return;
      const target = document.getElementById(btn.getAttribute("data-cv-goto"));
      if (!target) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  }

  // -----------------------------------------------------------------------
  // Progress hairline + current rail entry. One rAF-throttled scroll handler.
  // -----------------------------------------------------------------------
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (document.documentElement.getAttribute("data-route") !== "cv") return;
      const bar = $("#cv-progress-bar");
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        bar.style.width = (pct * 100).toFixed(2) + "%";
      }
      const buttons = $$("#cv-rail button");
      if (!buttons.length) return;
      const line = window.innerHeight * 0.4;
      let current = 0;
      buttons.forEach((b, i) => {
        const el = document.getElementById(b.getAttribute("data-cv-goto"));
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      buttons.forEach((b, i) => b.classList.toggle("is-current", i === current));
    });
  }

  document.addEventListener("lv:rendered", (e) => {
    const page = e.detail && e.detail.page;
    if (page !== "cv") return;
    render();
    onScroll();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // First paint: js/app.js dispatches lv:rendered on load, but this file may
  // load after that has already happened.
  if (document.documentElement.getAttribute("data-route") === "cv") {
    render();
    onScroll();
  }
})();
