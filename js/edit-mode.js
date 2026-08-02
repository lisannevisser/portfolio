/* ==========================================================================
   EDIT MODE — pilot
   --------------------------------------------------------------------------
   Text bearbeiten direkt im Layout, statt im Code oder über den Chat.

   Aktiv nur mit ?edit=1 in der URL, z. B.
     http://localhost:4322/?edit=1#/blog/better-designer-with-ai
   Ohne den Parameter lädt index.html diese Datei gar nicht erst.

   Pilot-Umfang: Blog-Artikel (#/blog/<slug>). Cases und Listenseiten sind
   bewusst noch nicht dabei.

   Wie es funktioniert:
   - app.js hängt an jedes Textelement ein data-lv-edit mit dem Pfad des
     Wertes in window.LV_DATA (z. B. "posts.0.body.12.text").
   - Beim Reinklicken zeigt das Feld den Rohtext aus data.js, inklusive
     **fett** und [Link](url). Beim Rausklicken wird wieder gerendert.
   - Änderungen liegen in localStorage, überleben also einen Reload.
   - "Kopieren" legt einen Patch als JSON in die Zwischenablage. Der geht
     an Claude, der ihn wortwörtlich nach data.js überträgt.

   Nichts hier schreibt in eine Datei. Der Patch ist der Übergabepunkt.
   ========================================================================== */
(function () {
  "use strict";

  if (new URLSearchParams(location.search).get("edit") !== "1") return;

  const STORE_KEY = "lv-edit-draft-v1";
  const CONTAINER = "#v1-post-body";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ------------------------------------------------------------------------
  // PFADE IN LV_DATA
  // ------------------------------------------------------------------------
  const parsePath = (path) =>
    path.split(".").map((k) => (/^\d+$/.test(k) ? Number(k) : k));

  function getPath(obj, path) {
    return parsePath(path).reduce((o, k) => (o == null ? o : o[k]), obj);
  }

  function setPath(obj, path, value) {
    const keys = parsePath(path);
    const last = keys.pop();
    const target = keys.reduce((o, k) => (o == null ? o : o[k]), obj);
    if (target != null) target[last] = value;
  }

  // ------------------------------------------------------------------------
  // ENTWURF
  // Map: Pfad -> { old, next }. `old` ist immer der ursprüngliche Wert aus
  // data.js, egal wie oft ein Feld angefasst wurde. Sonst wäre "zurück"
  // nach der zweiten Änderung kaputt.
  // ------------------------------------------------------------------------
  let changes = new Map();

  function loadDraft() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
      changes = new Map(raw.map((c) => [c.path, { old: c.old, next: c.next }]));
    } catch (err) {
      changes = new Map();
    }
  }

  function saveDraft() {
    const list = Array.from(changes, ([path, c]) => ({
      path: path, old: c.old, next: c.next
    }));
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
    } catch (err) {
      // Privater Modus: der Entwurf überlebt dann keinen Reload. Kein Grund
      // abzubrechen, das Bearbeiten funktioniert weiter.
    }
  }

  function applyDraft() {
    changes.forEach((c, path) => setPath(window.LV_DATA, path, c.next));
  }

  const pristine = (path) =>
    changes.has(path) ? changes.get(path).old : getPath(window.LV_DATA, path);

  // ------------------------------------------------------------------------
  // FELDER
  // ------------------------------------------------------------------------
  const esc = (s) =>
    (window.LV_RENDER && window.LV_RENDER.esc)
      ? window.LV_RENDER.esc(s)
      : String(s == null ? "" : s).replace(/[&<>"]/g, (ch) =>
          ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  // Ein Feld so zurückrendern, wie app.js es gerendert hätte: mit inlineMarks,
  // wenn data-lv-marks gesetzt ist, sonst nur escaped.
  function paint(el, value) {
    const R = window.LV_RENDER || {};
    if (el.hasAttribute("data-lv-marks") && R.inlineMarks) {
      el.innerHTML = R.inlineMarks(value);
    } else {
      el.innerHTML = esc(value);
    }
  }

  function prepare(el) {
    if (el.dataset.lvArmed) return;
    el.dataset.lvArmed = "1";
    el.setAttribute("contenteditable", "true");
    el.setAttribute("spellcheck", "false");
    el.classList.add("lv-editable");
    if (changes.has(el.dataset.lvEdit)) el.classList.add("is-changed");
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    el.addEventListener("keydown", onKeydown);
    el.addEventListener("paste", onPaste);
  }

  // Beim Reinklicken auf den Rohtext umschalten. Bei Absätzen ohne Marks
  // sieht man keinen Unterschied; bei fett/Links tauchen die Zeichen auf,
  // damit sie überhaupt editierbar sind.
  function onFocus(e) {
    const el = e.currentTarget;
    const value = getPath(window.LV_DATA, el.dataset.lvEdit);
    el.dataset.lvBefore = value == null ? "" : String(value);
    el.textContent = el.dataset.lvBefore;
  }

  function onBlur(e) {
    const el = e.currentTarget;
    const path = el.dataset.lvEdit;
    const before = el.dataset.lvBefore || "";
    // contenteditable streut gerne geschützte Leerzeichen ein.
    const next = el.textContent.replace(/\u00a0/g, " ").trim();

    if (!next) {
      paint(el, before);
      flash("Feld war leer, Änderung verworfen");
      return;
    }

    const old = pristine(path);
    if (next === String(old == null ? "" : old)) changes.delete(path);
    else changes.set(path, { old: String(old == null ? "" : old), next: next });

    setPath(window.LV_DATA, path, next);
    paint(el, next);
    el.classList.toggle("is-changed", changes.has(path));
    saveDraft();
    renderBar();
    renderPanel();
  }

  function onKeydown(e) {
    // Hält Tippen aus den globalen Shortcuts in app.js raus (das Easter Egg
    // hört auf "yyy" — sonst steht die Seite beim Schreiben auf dem Kopf).
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      const el = e.currentTarget;
      el.textContent = el.dataset.lvBefore || "";
      el.blur();
    }
  }

  // Eingefügter Text kommt als reiner Text rein, nicht als fremdes HTML.
  function onPaste(e) {
    e.preventDefault();
    const text = ((e.clipboardData || window.clipboardData).getData("text/plain") || "")
      .replace(/\s*\n\s*/g, " ");
    document.execCommand("insertText", false, text);
  }

  // ------------------------------------------------------------------------
  // LEISTE
  // ------------------------------------------------------------------------
  let bar, panel, countEl;
  let onPostRoute = false;

  const KIND_LABEL = {
    lead: "Lead",
    paragraph: "Absatz",
    h2: "Überschrift",
    h3: "Überschrift",
    quote: "Zitat",
    list: "Liste",
    figure: "Abbildung",
    callout: "Callout"
  };

  function label(path) {
    if (/\.title$/.test(path)) return "Titel";
    if (/\.excerpt$/.test(path)) return "Teaser";
    const m = path.match(/^posts\.(\d+)\.body\.(\d+)/);
    if (!m) return path;
    const block = getPath(window.LV_DATA, `posts.${m[1]}.body.${m[2]}`);
    const kind = typeof block === "string" ? "paragraph" : (block && block.kind) || "";
    return `${KIND_LABEL[kind] || kind || "Block"} · #${m[2]}`;
  }

  const trunc = (s, n) => {
    const str = String(s == null ? "" : s);
    return str.length > (n || 90) ? str.slice(0, n || 90) + "…" : str;
  };

  function buildBar() {
    bar = document.createElement("div");
    bar.className = "lv-edit-bar";
    bar.innerHTML = `
      <div class="lv-edit-panel" hidden></div>
      <div class="lv-edit-row">
        <span class="lv-edit-badge">Edit</span>
        <span class="lv-edit-count"></span>
        <button type="button" data-act="list">Liste</button>
        <button type="button" data-act="copy">Kopieren</button>
        <button type="button" data-act="reset">Verwerfen</button>
        <button type="button" data-act="exit">Beenden</button>
      </div>`;
    document.body.appendChild(bar);
    panel = $(".lv-edit-panel", bar);
    countEl = $(".lv-edit-count", bar);

    bar.addEventListener("click", (e) => {
      const act = e.target.getAttribute && e.target.getAttribute("data-act");
      if (act === "list") {
        panel.hidden = !panel.hidden;
        if (!panel.hidden) renderPanel();
      }
      if (act === "copy") copyPatch();
      if (act === "reset") resetAll();
      if (act === "exit") location.replace(location.pathname + location.hash);
      const rev = e.target.getAttribute && e.target.getAttribute("data-revert");
      if (rev) revert(rev);
    });

    window.addEventListener("resize", fitBody);
    renderBar();
  }

  // Die Leiste bricht auf schmalen Displays um. Der Abstand unter dem Artikel
  // nimmt die tatsächliche Höhe mit, sonst verdeckt sie den letzten Absatz.
  function fitBody() {
    const row = bar && $(".lv-edit-row", bar);
    if (!row) return;
    document.body.style.paddingBottom =
      Math.ceil(row.getBoundingClientRect().height + 24) + "px";
  }

  function renderBar() {
    const n = changes.size;
    countEl.textContent = !onPostRoute
      ? "Pilot: nur Blog-Artikel"
      : n === 0
        ? "Keine Änderungen"
        : n === 1 ? "1 Änderung" : `${n} Änderungen`;
    $$("button[data-act]", bar).forEach((b) => {
      const act = b.getAttribute("data-act");
      if (act === "copy" || act === "reset" || act === "list") b.disabled = n === 0;
    });
    fitBody();
  }

  function renderPanel() {
    if (!panel || panel.hidden) return;
    if (!changes.size) {
      panel.innerHTML = "";
      panel.hidden = true;
      return;
    }
    panel.innerHTML = Array.from(changes, ([path, c]) => `
      <div class="lv-edit-item">
        <div class="lv-edit-head">
          <span class="lv-edit-label">${esc(label(path))}</span>
          <button type="button" class="lv-edit-revert" data-revert="${esc(path)}">zurück</button>
        </div>
        <div class="lv-edit-old">${esc(trunc(c.old))}</div>
        <div class="lv-edit-new">${esc(trunc(c.next))}</div>
      </div>`).join("");
  }

  function revert(path) {
    const c = changes.get(path);
    if (!c) return;
    setPath(window.LV_DATA, path, c.old);
    changes.delete(path);
    const el = $(`[data-lv-edit="${path}"]`);
    if (el) {
      paint(el, c.old);
      el.classList.remove("is-changed");
    }
    saveDraft();
    renderBar();
    renderPanel();
  }

  function resetAll() {
    changes.forEach((c, path) => setPath(window.LV_DATA, path, c.old));
    changes.clear();
    saveDraft();
    window.dispatchEvent(new Event("hashchange")); // Artikel sauber neu rendern
    renderBar();
    renderPanel();
    flash("Alle Änderungen verworfen");
  }

  // ------------------------------------------------------------------------
  // PATCH
  // ------------------------------------------------------------------------
  function patchText() {
    return JSON.stringify(
      Array.from(changes, ([path, c]) => ({ path: path, old: c.old, new: c.next })),
      null, 2
    );
  }

  function copyPatch() {
    const text = patchText();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => flash("Patch kopiert — ab in den Chat"),
        () => showPatch(text)
      );
    } else {
      showPatch(text);
    }
  }

  // Fallback, wenn die Zwischenablage nicht darf (http im LAN zum Beispiel).
  function showPatch(text) {
    panel.hidden = false;
    panel.innerHTML = `
      <p class="lv-edit-empty">Zwischenablage nicht verfügbar. Text markieren und kopieren:</p>
      <textarea class="lv-edit-out" readonly></textarea>`;
    const ta = $(".lv-edit-out", panel);
    ta.value = text;
    ta.focus();
    ta.select();
  }

  function flash(msg) {
    let el = $(".lv-edit-flash", bar);
    if (!el) {
      el = document.createElement("div");
      el.className = "lv-edit-flash";
      bar.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("is-on");
    clearTimeout(flash.t);
    flash.t = setTimeout(() => el.classList.remove("is-on"), 2200);
  }

  // ------------------------------------------------------------------------
  // START
  // ------------------------------------------------------------------------
  const currentRoute = () => {
    const parts = (location.hash || "").replace(/^#\/?/, "").split("/");
    return parts[0] === "blog" && parts[1] ? "post" : (parts[0] || "home");
  };

  function arm(page) {
    onPostRoute = page === "post";
    if (bar) renderBar();
    if (!onPostRoute) return;
    const root = $(CONTAINER);
    if (root) $$("[data-lv-edit]", root).forEach(prepare);
  }

  function styles() {
    const css = `
      .lv-editable { cursor: text; border-radius: 3px; transition: background-color .12s ease; }
      .lv-editable:hover { background: rgba(80, 80, 220, .07); }
      .lv-editable:focus { outline: none; background: rgba(80, 80, 220, .10);
        box-shadow: 0 0 0 2px rgba(80, 80, 220, .45); }
      .lv-editable.is-changed { background: rgba(255, 190, 0, .18); }

      .lv-edit-bar { position: fixed; left: 0; right: 0; bottom: 0; z-index: 9999;
        background: #111; color: #f4f4f4; font-family: "Space Mono", ui-monospace, monospace;
        font-size: 12px; line-height: 1.4; padding-bottom: env(safe-area-inset-bottom); }
      .lv-edit-row { display: flex; align-items: center; gap: .4rem; padding: .55rem .7rem; }
      .lv-edit-badge { background: #f4f4f4; color: #111; border-radius: 999px;
        padding: .15rem .5rem; font-weight: 700; }
      .lv-edit-count { margin-right: auto; opacity: .8; }
      .lv-edit-row button { font: inherit; background: transparent; color: inherit;
        border: 1px solid rgba(255,255,255,.35); border-radius: 999px;
        padding: .3rem .65rem; cursor: pointer; }
      .lv-edit-row button:hover:not([disabled]) { background: rgba(255,255,255,.12); }
      .lv-edit-row button[disabled] { opacity: .3; cursor: default; }

      .lv-edit-panel { max-height: 45vh; overflow: auto; padding: .6rem .7rem;
        border-bottom: 1px solid rgba(255,255,255,.16); }
      .lv-edit-empty { margin: 0; opacity: .7; }
      .lv-edit-item { padding: .5rem 0; border-bottom: 1px solid rgba(255,255,255,.10); }
      .lv-edit-head { display: flex; align-items: center; gap: .5rem; margin-bottom: .3rem; }
      .lv-edit-label { font-weight: 700; }
      .lv-edit-revert { font: inherit; margin-left: auto; background: transparent;
        color: inherit; border: 1px solid rgba(255,255,255,.35); border-radius: 999px;
        padding: .15rem .5rem; cursor: pointer; }
      .lv-edit-old { opacity: .55; text-decoration: line-through; }
      .lv-edit-new { color: #ffd76a; }
      .lv-edit-out { width: 100%; min-height: 8rem; margin-top: .4rem; font: inherit;
        background: #000; color: #f4f4f4; border: 1px solid rgba(255,255,255,.25);
        border-radius: 4px; padding: .4rem; }

      .lv-edit-flash { position: absolute; left: .7rem; bottom: 100%; margin-bottom: .4rem;
        background: #111; border: 1px solid rgba(255,255,255,.25); border-radius: 999px;
        padding: .3rem .7rem; opacity: 0; transform: translateY(4px);
        transition: opacity .15s ease, transform .15s ease; pointer-events: none; }
      .lv-edit-flash.is-on { opacity: 1; transform: translateY(0); }

      @media (max-width: 640px) {
        .lv-edit-row { flex-wrap: wrap; }
        .lv-edit-count { flex: 1 0 100%; margin: 0 0 .35rem; }
      }
      @media print { .lv-edit-bar { display: none; } }
    `;
    const tag = document.createElement("style");
    tag.textContent = css;
    document.head.appendChild(tag);
  }

  function init() {
    if (!window.LV_DATA) return;
    loadDraft();
    styles();
    buildBar();
    document.addEventListener("lv:rendered", (e) => arm(e.detail && e.detail.page));

    if (changes.size) {
      applyDraft();
      const root = $(CONTAINER);
      // Wenn app.js schon gerendert hat, muss der Artikel einmal neu, damit
      // der Entwurf sichtbar wird.
      if (root && root.children.length) window.dispatchEvent(new Event("hashchange"));
    }
    arm(currentRoute());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
