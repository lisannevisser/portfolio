/* ==========================================================================
   EDIT MODE
   --------------------------------------------------------------------------
   Edit copy in the layout it lives in, instead of in the code or over chat.

   TURNING IT ON
     Visit this once per device:
       https://lisannevisser.github.io/portfolio/?edit=wet-paint
     The browser remembers it (localStorage), so the mode stays on across
     every page without the parameter. index.html only loads this file when
     the flag is set.

   TURNING IT OFF
     The "Done" button in the bar, or ?edit=off on any URL.

   The key sits in the open in a public repo. It stops anyone stumbling in by
   accident; it is not access control. It doesn't need to be: this module has
   no write path, no token, no backend. Edits live in the browser of whoever
   made them and nowhere else.

   HOW IT WORKS
   - app.js hangs a data-lv-edit on every text element, naming the value in
     window.LV_DATA that produced it (e.g. "cases.0.story.4.body").
   - Where one source string renders as several paragraphs (case bodies, split
     on blank lines), data-lv-part says which paragraph this node is.
   - On focus the field shows the raw source, including **bold** and
     [links](url). On blur it renders again.
   - Changes live in localStorage, so they survive a reload.
   - "Copy" puts a patch on the clipboard as JSON. That goes to Claude, who
     transfers it into data.js verbatim.

   Nothing here writes to a file. The patch is the handover.
   ========================================================================== */
(function () {
  "use strict";

  const KEY = "wet-paint";   // must match the snippet in index.html
  const FLAG = "lv-edit";
  const STORE_KEY = "lv-edit-draft-v1";

  // index.html already reads the parameter. Repeated here so the file is
  // still correct when it gets loaded on its own.
  try {
    const param = new URLSearchParams(location.search).get("edit");
    if (param === KEY) localStorage.setItem(FLAG, "on");
    if (param === "off") localStorage.removeItem(FLAG);
    if (localStorage.getItem(FLAG) !== "on") return;
  } catch (err) {
    return;
  }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ------------------------------------------------------------------------
  // PATHS INTO LV_DATA
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

  // A field is either a whole string or one paragraph inside it. app.js
  // splits on blank lines when rendering, so the same split happens here and
  // the paragraph index means the same thing on both sides.
  const SPLIT = /\n\n+/;

  function readField(path, part) {
    const raw = getPath(window.LV_DATA, path);
    const str = raw == null ? "" : String(raw);
    if (part == null) return str;
    const parts = str.split(SPLIT);
    return parts[part] == null ? "" : parts[part];
  }

  function writeField(path, part, value) {
    if (part == null) {
      setPath(window.LV_DATA, path, value);
      return;
    }
    const raw = getPath(window.LV_DATA, path);
    const parts = String(raw == null ? "" : raw).split(SPLIT);
    parts[part] = value;
    setPath(window.LV_DATA, path, parts.join("\n\n"));
  }

  // ------------------------------------------------------------------------
  // DRAFT
  // Map: key -> { path, part, old, next }. The key keeps paragraphs of the
  // same string apart. `old` is always the original value from data.js, no
  // matter how often a field was touched, otherwise "undo" would break after
  // the second edit.
  // ------------------------------------------------------------------------
  let changes = new Map();

  const changeKey = (path, part) => (part == null ? path : `${path}#${part}`);

  function loadDraft() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
      changes = new Map(raw.map((c) => [changeKey(c.path, c.part), c]));
    } catch (err) {
      changes = new Map();
    }
  }

  function saveDraft() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(changes.values())));
    } catch (err) {
      // Private mode: the draft won't survive a reload. No reason to bail,
      // editing still works.
    }
  }

  function applyDraft() {
    changes.forEach((c) => writeField(c.path, c.part, c.next));
  }

  function pristine(path, part) {
    const c = changes.get(changeKey(path, part));
    return c ? c.old : readField(path, part);
  }

  // ------------------------------------------------------------------------
  // FIELDS
  // ------------------------------------------------------------------------
  const esc = (s) =>
    (window.LV_RENDER && window.LV_RENDER.esc)
      ? window.LV_RENDER.esc(s)
      : String(s == null ? "" : s).replace(/[&<>"]/g, (ch) =>
          ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  const partOf = (el) =>
    el.hasAttribute("data-lv-part") ? Number(el.getAttribute("data-lv-part")) : null;

  // Render a field back the way app.js would have: through inlineMarks when
  // data-lv-marks is set, escaped otherwise.
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
    if (changes.has(changeKey(el.dataset.lvEdit, partOf(el)))) el.classList.add("is-changed");
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    el.addEventListener("keydown", onKeydown);
    el.addEventListener("paste", onPaste);
  }

  // On focus, swap in the raw source. For paragraphs without marks nothing
  // changes visually; where there is bold or a link the characters show up,
  // which is the only way to edit them.
  function onFocus(e) {
    const el = e.currentTarget;
    el.dataset.lvBefore = readField(el.dataset.lvEdit, partOf(el));
    el.textContent = el.dataset.lvBefore;
  }

  function onBlur(e) {
    const el = e.currentTarget;
    const path = el.dataset.lvEdit;
    const part = partOf(el);
    const before = el.dataset.lvBefore || "";
    // contenteditable likes to sprinkle in non-breaking spaces.
    const next = el.textContent.replace(/\u00a0/g, " ").trim();

    if (!next) {
      paint(el, before);
      flash("Field was empty, change discarded");
      return;
    }

    const key = changeKey(path, part);
    const old = pristine(path, part);
    if (next === old) changes.delete(key);
    else changes.set(key, { path: path, part: part, old: old, next: next });

    writeField(path, part, next);
    paint(el, next);
    el.classList.toggle("is-changed", changes.has(key));
    saveDraft();
    renderBar();
    renderPanel();
  }

  function onKeydown(e) {
    // Keeps typing out of the global shortcuts in app.js (the easter egg
    // listens for "yyy", so the page would flip while writing).
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

  // Pasted text comes in as plain text, not as somebody else's HTML.
  function onPaste(e) {
    e.preventDefault();
    const text = ((e.clipboardData || window.clipboardData).getData("text/plain") || "")
      .replace(/\s*\n\s*/g, " ");
    document.execCommand("insertText", false, text);
  }

  // ------------------------------------------------------------------------
  // BAR
  // ------------------------------------------------------------------------
  let bar, panel, countEl;
  let fieldCount = 0;

  const BLOCK_LABEL = {
    lead: "Lead", paragraph: "Paragraph", h2: "Heading", h3: "Heading",
    quote: "Quote", list: "List", figure: "Figure", callout: "Callout",
    section: "Section", result: "Outcome", framework: "Framework",
    limitations: "Limitations", flow: "Flow"
  };

  const FIELD_LABEL = {
    title: "Title", subtitle: "Subtitle", excerpt: "Teaser", role: "Role",
    team: "Team", year: "Year", caption: "Caption", label: "Label",
    body: "Body", text: "Text", attribution: "Attribution", note: "Note",
    value: "Value", oppositeTitle: "Back title", oppositeSubtitle: "Back subtitle"
  };

  function label(c) {
    const seg = c.path.split(".");
    const field = seg[seg.length - 1];
    const named = FIELD_LABEL[field] || field;
    const partSuffix = c.part == null ? "" : ` · paragraph ${c.part + 1}`;

    const m = c.path.match(/^(posts|cases)\.(\d+)\.(body|story)\.(\d+)/);
    if (!m) return `${named} · ${seg[0]}`;
    const block = getPath(window.LV_DATA, `${m[1]}.${m[2]}.${m[3]}.${m[4]}`);
    const kind = typeof block === "string" ? "paragraph" : (block && block.kind) || "";
    const where = m[1] === "cases" ? "Case" : "Post";
    return `${where} · ${BLOCK_LABEL[kind] || kind || "Block"} #${m[4]}${partSuffix}`;
  }

  function buildBar() {
    bar = document.createElement("div");
    bar.className = "lv-edit-bar";
    bar.innerHTML = `
      <div class="lv-edit-panel" hidden></div>
      <div class="lv-edit-row">
        <span class="lv-edit-badge">Edit</span>
        <span class="lv-edit-count"></span>
        <button type="button" data-act="list">List</button>
        <button type="button" data-act="copy">Copy</button>
        <button type="button" data-act="reset">Discard</button>
        <button type="button" data-act="exit">Done</button>
      </div>`;
    document.body.appendChild(bar);
    panel = $(".lv-edit-panel", bar);
    countEl = $(".lv-edit-count", bar);

    bar.addEventListener("click", (e) => {
      const act = e.target.getAttribute && e.target.getAttribute("data-act");
      if (act === "list") {
        panel.hidden = !panel.hidden;
        renderPanel();
      }
      if (act === "copy") copyPatch();
      if (act === "reset") resetAll();
      if (act === "exit") exitMode();
      const rev = e.target.getAttribute && e.target.getAttribute("data-revert");
      if (rev) revert(rev);
    });

    window.addEventListener("resize", fitBody);
    renderBar();
  }

  // The bar wraps on narrow screens. The page's bottom padding tracks its
  // real height, otherwise it covers the last paragraph.
  function fitBody() {
    const row = bar && $(".lv-edit-row", bar);
    if (!row) return;
    document.body.style.paddingBottom =
      Math.ceil(row.getBoundingClientRect().height + 24) + "px";
  }

  function renderBar() {
    const n = changes.size;
    countEl.textContent = n
      ? (n === 1 ? "1 change" : `${n} changes`)
      : (fieldCount ? `${fieldCount} fields editable` : "Nothing to edit on this page");
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
    panel.innerHTML = Array.from(changes, ([key, c]) => `
      <div class="lv-edit-item">
        <div class="lv-edit-head">
          <span class="lv-edit-label">${esc(label(c))}</span>
          <button type="button" class="lv-edit-revert" data-revert="${esc(key)}">undo</button>
        </div>
        <div class="lv-edit-old">${esc(diffPair(c.old, c.next)[0])}</div>
        <div class="lv-edit-new">${esc(diffPair(c.old, c.next)[1])}</div>
      </div>`).join("");
  }

  // Both lines are cut to fit, but cutting from the front hides the edit when
  // it sits at the end of a long paragraph — old and new then read identical.
  // So the window starts just before the first character that differs.
  function diffPair(a, b) {
    const A = String(a == null ? "" : a);
    const B = String(b == null ? "" : b);
    let i = 0;
    while (i < A.length && i < B.length && A[i] === B[i]) i++;
    const start = Math.max(0, i - 25);
    const cut = (s) =>
      (start > 0 ? "…" : "") + s.slice(start, start + 110) +
      (start + 110 < s.length ? "…" : "");
    return [cut(A), cut(B)];
  }

  function fieldEl(path, part) {
    return $$(`[data-lv-edit="${path}"]`).find((el) => partOf(el) === part) || null;
  }

  function revert(key) {
    const c = changes.get(key);
    if (!c) return;
    writeField(c.path, c.part, c.old);
    changes.delete(key);
    const el = fieldEl(c.path, c.part);
    if (el) {
      paint(el, c.old);
      el.classList.remove("is-changed");
    }
    saveDraft();
    renderBar();
    renderPanel();
  }

  function resetAll() {
    changes.forEach((c) => writeField(c.path, c.part, c.old));
    changes.clear();
    saveDraft();
    window.dispatchEvent(new Event("hashchange")); // re-render the page clean
    renderBar();
    renderPanel();
    flash("All changes discarded");
  }

  function exitMode() {
    if (changes.size &&
        !window.confirm(`${changes.size} change(s) not copied yet. Leave anyway?`)) return;
    try {
      localStorage.removeItem(FLAG);
    } catch (err) { /* then it stays on until the tab closes */ }
    location.replace(location.pathname + location.hash);
  }

  // ------------------------------------------------------------------------
  // PATCH
  // ------------------------------------------------------------------------
  function patchText() {
    return JSON.stringify(
      Array.from(changes.values(), (c) => {
        const entry = { path: c.path };
        if (c.part != null) entry.part = c.part;
        entry.old = c.old;
        entry.new = c.next;
        return entry;
      }),
      null, 2
    );
  }

  function copyPatch() {
    const text = patchText();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => flash("Patch copied, off to the chat"),
        () => showPatch(text)
      );
    } else {
      showPatch(text);
    }
  }

  // Fallback for when the clipboard is off limits (plain http, for example).
  function showPatch(text) {
    panel.hidden = false;
    panel.innerHTML = `
      <p class="lv-edit-empty">Clipboard not available. Select the text and copy it:</p>
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
  // BOOT
  // ------------------------------------------------------------------------
  function arm() {
    const fields = $$("[data-lv-edit]").filter((el) => !el.closest("[hidden].lv-route"));
    fields.forEach(prepare);
    fieldCount = fields.length;
    if (bar) renderBar();
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
    document.addEventListener("lv:rendered", arm);

    if (changes.size) {
      applyDraft();
      // If app.js already rendered, the page needs one more pass for the
      // draft to show up.
      if ($$("[data-lv-edit]").length) window.dispatchEvent(new Event("hashchange"));
    }
    arm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
