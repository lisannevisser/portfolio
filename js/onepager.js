/* =========================================================================
   One-pager — renders the scrolling portfolio at #/portfolio, which is also
   the site's front door (HOME_ROUTE in js/app.js).

   Everything on the page comes from window.LV_DATA.onepager, so the content
   lives in js/data.js next to the rest of the site. The cover panel is
   static in index.html (name, statement and pitch should exist without
   JavaScript); every panel below it is built here.

   Three jobs beyond rendering:
     - reveal      fallback fade-in for browsers without view() timelines
     - rail        the panel index on the right, current panel highlighted
     - progress    the hairline at the very top of the page
   ========================================================================= */

(function () {
  "use strict";

  const D = window.LV_DATA;
  if (!D || !D.onepager) return;
  const R = D.onepager;
  const MAIL = (D.identity && D.identity.email) || "mail@lisannevisser.com";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function chips(items) {
    return (items || []).map((t) => `<li class="op-tool">${esc(t)}</li>`).join("");
  }

  // -----------------------------------------------------------------------
  // The visual next to each project.
  // A real screenshot when data.js has a `cover`, otherwise a typographic
  // plate: the number set large, the client wordmark underneath. No tints,
  // no hue gradients; the plate has to sit quietly next to running text.
  // -----------------------------------------------------------------------
  function visual(p, n) {
    const body = p.cover
      ? `<img class="op-cover-img" src="${esc(p.cover)}" alt="${esc(p.coverAlt || p.headline)}" loading="lazy" />`
      : plate(p);
    return `
      <figure class="op-figure">
        ${body}
        <figcaption class="op-figcaption">Fig. ${String(n).padStart(2, "0")} &middot; ${esc(p.metric.note)}</figcaption>
      </figure>`;
  }

  function plate(p) {
    const logo = (D.clientLogos || {})[p.company];
    const mark = logo
      ? `<img class="op-plate-logo" src="${esc(logo)}" alt="${esc(p.company)}" loading="lazy" />`
      : `<span class="op-plate-org">${esc(p.company)}</span>`;
    return `
      <div class="op-plate" role="img" aria-label="${esc(p.metric.value + " " + p.metric.label + ", " + p.company)}">
        <span class="op-plate-kind">${esc(p.kind)}</span>
        <span class="op-plate-num">${esc(p.metric.value)}</span>
        <span class="op-plate-foot">${mark}<span class="op-plate-org">${esc(p.metric.label)}</span></span>
      </div>`;
  }

  function projectPanel(p, n) {
    const ask = `mailto:${esc(MAIL)}?subject=${encodeURIComponent("The long version: " + p.headline)}`;
    // A case study only advertises itself once it is actually written. Until
    // then the panel offers the ask instead of a half-finished page.
    const more = p.caseLink
      ? `<p class="op-project-ask"><a href="#/work/${esc(p.slug)}">Read the full case study &rarr;</a></p>`
      : `<p class="op-project-ask">The long version, figures included, <a href="${ask}">on request</a></p>`;
    // Sides alternate so six panels in a row read as a sequence rather than
    // as the same slide six times.
    const flipped = n % 2 === 0 ? " is-flipped" : "";
    return `
      <section class="op-panel" data-op-panel data-op-label="${esc(p.kind)}" aria-label="${esc(p.headline)}">
        <div class="op-panel-inner lv-wrap">
          <div class="op-project-grid${flipped}">
            <div class="op-project-text">
              <p class="op-project-kicker">
                <span>${esc(String(n).padStart(2, "0"))}</span>
                <span>${esc(p.company)}</span>
                <span>${esc(p.period)}</span>
              </p>
              <h2 class="op-project-headline">${esc(p.headline)}</h2>
              <p class="op-project-scope">${esc(p.scope)}</p>
              <p class="op-body op-project-line">${esc(p.situation)}</p>
              <p class="op-body op-project-line">${esc(p.decision)}</p>
              <ul class="op-tools op-methods">${chips(p.methods)}</ul>
              ${more}
            </div>
            <div class="op-project-visual">${visual(p, n)}</div>
          </div>
        </div>
      </section>`;
  }

  function proofPanel() {
    const cells = R.proof
      .map(
        (m) => `
        <div class="op-proof-cell">
          <div class="op-proof-num">${esc(m.value)}</div>
          <div class="op-proof-label">${esc(m.label)}</div>
          <p class="op-proof-note">${esc(m.note)}</p>
        </div>`
      )
      .join("");
    return `
      <section class="op-panel" data-op-panel data-op-label="Numbers">
        <div class="op-panel-inner lv-wrap">
          <div class="op-head op-reveal">
            <p class="op-label">01 / What the work moved</p>
            <h2 class="op-h2">Four numbers I would put my name under.</h2>
            <p class="op-lead">Each one comes from work I led or owned, with the reasoning written up. The write-ups are just not public.</p>
          </div>
          <div class="op-proof-grid op-reveal">${cells}</div>
        </div>
      </section>`;
  }

  function workIntroPanel() {
    return `
      <section class="op-panel" data-op-panel data-op-label="Work">
        <div class="op-panel-inner lv-wrap">
          <div class="op-head op-reveal">
            <p class="op-label">02 / Selected work</p>
            <h2 class="op-h2">Six projects. What I decided, and what changed.</h2>
            <p class="op-lead">Most of this work sits on pricing, revenue, or internal process, so the full write-ups travel by mail rather than living on a public page. Ask and you get them, figures included.</p>
          </div>
        </div>
      </section>`;
  }

  function capabilitiesPanel() {
    const items = R.capabilities
      .map(
        (c) => `
        <div class="op-cap-item">
          <h3 class="op-h3">${esc(c.title)}</h3>
          <p class="op-body">${esc(c.body)}</p>
        </div>`
      )
      .join("");
    const credo = (R.credo || []).map((c) => `<li>${esc(c)}</li>`).join("");
    return `
      <section class="op-panel is-tall" data-op-panel data-op-label="How I work">
        <div class="op-panel-inner lv-wrap">
          <div class="op-head op-reveal">
            <p class="op-label">03 / How I work</p>
            <h2 class="op-h2">Five things I am reliably good at.</h2>
            <ul class="op-credo">${credo}</ul>
          </div>
          <div class="op-cap-list op-reveal">${items}</div>
          <p class="op-subhead op-reveal">Tools I actually use</p>
          <ul class="op-tools op-reveal">${chips(R.tools)}</ul>
        </div>
      </section>`;
  }

  function careerPanel() {
    const row = (r) => `
      <div class="op-ledger-row">
        <div class="op-ledger-period">${esc(r.period)}</div>
        <div>
          <h3 class="op-h3">${esc(r.role)}</h3>
          <div class="op-ledger-org">${esc(r.org)}</div>
          <p class="op-body op-ledger-note">${esc(r.note)}</p>
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
      <section class="op-panel is-tall" data-op-panel data-op-label="Track record">
        <div class="op-panel-inner lv-wrap">
          <div class="op-head op-reveal">
            <p class="op-label">04 / Track record</p>
            <h2 class="op-h2">Five years, four roles, two companies.</h2>
          </div>
          <div class="op-ledger op-reveal">${jobs}</div>
          <p class="op-subhead op-reveal">Before design</p>
          <div class="op-ledger op-reveal">${edu}</div>
          <p class="op-subhead op-reveal">Worked with</p>
          <div class="op-clients op-reveal">${logos}</div>
        </div>
      </section>`;
  }

  function beyondPanel() {
    const items = (R.beyond || [])
      .map((b) => {
        const links = (b.links || [])
          .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
          .join("");
        return `
        <div class="op-beyond-item">
          <h3 class="op-h3">${esc(b.title)}</h3>
          <p class="op-body">${esc(b.body)}</p>
          <div class="op-beyond-links">${links}</div>
        </div>`;
      })
      .join("");
    return `
      <section class="op-panel is-tall" data-op-panel data-op-label="Outside the brief">
        <div class="op-panel-inner lv-wrap">
          <div class="op-head op-reveal">
            <p class="op-label">05 / Outside the brief</p>
            <h2 class="op-h2">The rest of it, which is also the job.</h2>
            <p class="op-lead">Writing, drawing, teaching, and reading are where most of my thinking gets tested before it reaches a product.</p>
          </div>
          <div class="op-beyond-list op-reveal">${items}</div>
        </div>
      </section>`;
  }

  function contactPanel() {
    return `
      <section class="op-panel" data-op-panel data-op-label="Contact">
        <div class="op-panel-inner lv-wrap op-contact">
          <div class="op-head op-reveal">
            <p class="op-label">06 / Next step</p>
            <h2 class="op-h2">If this looks like what you are hiring for, write to me.</h2>
            <p class="op-lead">I answer every mail, and I bring the long versions with me.</p>
          </div>
          <a class="op-contact-mail op-reveal" href="mailto:${esc(MAIL)}" data-cursor-label="Write">${esc(MAIL)}</a>
          <div class="op-contact-links op-reveal">
            <a href="https://www.linkedin.com/in/lisanne-visser/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="${esc(R.cvUrl)}" target="_blank" rel="noopener noreferrer">Full CV</a>
            <a href="#/about">About me</a>
            <a href="#/work">Case study archive</a>
          </div>
        </div>
      </section>`;
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------
  let rendered = false;

  function render() {
    const root = $("#op-body");
    if (!root || rendered) return;
    root.innerHTML =
      proofPanel() +
      workIntroPanel() +
      R.projects.map((p, i) => projectPanel(p, i + 1)).join("") +
      capabilitiesPanel() +
      careerPanel() +
      beyondPanel() +
      contactPanel();
    rendered = true;
    buildRail();
    armReveal();
  }

  // -----------------------------------------------------------------------
  // Reveal fallback. Browsers with scroll-driven animations already animate
  // the panels from CSS; this covers the rest and keeps the page readable
  // when neither is available.
  // -----------------------------------------------------------------------
  function armReveal() {
    const els = $$("#op-page .op-reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Where the browser has scroll-driven animations, the panels already lift
    // in from CSS. Running this on top of that fades the same content twice
    // and makes it arrive late, so here the observer only switches it on.
    const hasViewTimeline =
      window.CSS && CSS.supports && CSS.supports("animation-timeline", "view()");
    if (reduce || hasViewTimeline || !("IntersectionObserver" in window)) {
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
      el.style.setProperty("--op-delay", (i % 4) * 70 + "ms");
      io.observe(el);
    });
  }

  // -----------------------------------------------------------------------
  // Rail: the panel index on the right. Doubles as navigation.
  // -----------------------------------------------------------------------
  function buildRail() {
    const rail = $("#op-rail");
    if (!rail) return;
    const panels = $$("#op-page [data-op-panel]");
    rail.innerHTML = panels
      .map((p, i) => {
        p.id = p.id || "op-panel-" + i;
        const label = p.getAttribute("data-op-label") || "Section " + (i + 1);
        // Number always, name on hover: the rail sits over the content column
        // on narrower desktops, and a two-character index never collides.
        return `<button type="button" data-op-goto="${p.id}" aria-label="${esc(label)}">` +
          `<span class="op-rail-name">${esc(label)}</span>` +
          `<span class="op-rail-num">${esc(String(i + 1).padStart(2, "0"))}</span><i></i></button>`;
      })
      .join("");
    rail.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-op-goto]");
      if (!btn) return;
      const target = document.getElementById(btn.getAttribute("data-op-goto"));
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
      if (document.documentElement.getAttribute("data-route") !== "portfolio") return;
      const bar = $("#op-progress-bar");
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        bar.style.width = (pct * 100).toFixed(2) + "%";
      }
      const buttons = $$("#op-rail button");
      if (!buttons.length) return;
      const line = window.innerHeight * 0.4;
      let current = 0;
      buttons.forEach((b, i) => {
        const el = document.getElementById(b.getAttribute("data-op-goto"));
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      buttons.forEach((b, i) => b.classList.toggle("is-current", i === current));
    });
  }

  document.addEventListener("lv:rendered", (e) => {
    const page = e.detail && e.detail.page;
    if (page !== "portfolio") return;
    render();
    onScroll();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // First paint: js/app.js dispatches lv:rendered on load, but this file may
  // load after that has already happened.
  if (document.documentElement.getAttribute("data-route") === "portfolio") {
    render();
    onScroll();
  }
})();
