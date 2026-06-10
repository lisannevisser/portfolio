/* ==========================================================================
   WIP sticky note — dismissal only.
   The note shows while <html data-wip="note">; the flash-free bootstrap in
   index.html sets that before paint and reads a remembered choice from
   localStorage. The close button turns it off and persists that.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORE = "lv-wip";

  function dismiss() {
    root.setAttribute("data-wip", "off");
    try { localStorage.setItem(STORE, "off"); } catch (e) {}
  }

  function init() {
    document.querySelectorAll("[data-wip-dismiss]").forEach(function (btn) {
      btn.addEventListener("click", dismiss);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
