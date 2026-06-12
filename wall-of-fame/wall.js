// Photo slots for the Wall of Fame pinboard.
// Drag a photo onto a frame (or click to browse); the image is downscaled
// through a canvas and persisted in localStorage so the wall survives reload.

(function () {
  'use strict';

  var KEY = 'wof-slots-v1';
  var MAX_DIM = 1200;
  // Raster formats only: SVG can carry script, animated GIF would silently
  // lose its animation in the canvas re-encode.
  var ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  var ICON =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="m21 15-5-5L5 21"/></svg>';

  function loadStore() {
    try {
      var raw = localStorage.getItem(KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  var store = loadStore();

  function saveStore() {
    try {
      localStorage.setItem(KEY, JSON.stringify(store));
      return true;
    } catch (e) {
      return false;
    }
  }

  // Downscale through a canvas so localStorage holds resized bytes, not the
  // raw upload. WebP where the browser encodes it (Chrome, Firefox), JPEG
  // fallback otherwise (Safari's toDataURL ignores the webp type).
  function toDataUrl(file, targetW) {
    return createImageBitmap(file).then(function (bitmap) {
      try {
        var cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
        var scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
        var w = Math.max(1, Math.round(bitmap.width * scale));
        var h = Math.max(1, Math.round(bitmap.height * scale));
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(bitmap, 0, 0, w, h);
        var url = canvas.toDataURL('image/webp', 0.85);
        if (url.indexOf('data:image/webp') !== 0) {
          url = canvas.toDataURL('image/jpeg', 0.85);
        }
        return url;
      } finally {
        if (bitmap.close) bitmap.close();
      }
    });
  }

  function initSlot(el) {
    var id = el.getAttribute('data-slot');
    var placeholder = el.getAttribute('data-placeholder') || 'Drop an image';

    el.innerHTML =
      '<img class="wof-img" alt="Pinned bad UX photo">' +
      '<div class="wof-empty" role="button" tabindex="0">' + ICON +
      '  <div class="wof-cap"></div>' +
      '  <div class="wof-sub">or <u>browse files</u></div>' +
      '</div>' +
      '<div class="wof-ring" aria-hidden="true"></div>' +
      '<div class="wof-ctl">' +
      '  <button type="button" data-act="replace" title="Replace photo">Replace</button>' +
      '  <button type="button" data-act="remove" title="Remove photo">Remove</button>' +
      '</div>' +
      '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';

    var img = el.querySelector('.wof-img');
    var empty = el.querySelector('.wof-empty');
    var input = el.querySelector('input');
    var errEl = null;
    var depth = 0;
    var gen = 0;

    empty.querySelector('.wof-cap').textContent = placeholder;
    empty.setAttribute('aria-label', placeholder);

    function render() {
      var url = store[id];
      if (url && /^data:image\//.test(url)) {
        if (img.getAttribute('src') !== url) img.src = url;
        el.classList.add('filled');
      } else {
        img.removeAttribute('src');
        el.classList.remove('filled');
      }
    }

    function showError(msg) {
      if (errEl) errEl.remove();
      var d = document.createElement('div');
      d.className = 'wof-err';
      d.textContent = msg;
      el.appendChild(d);
      errEl = d;
      setTimeout(function () {
        if (errEl === d) { d.remove(); errEl = null; }
      }, 3000);
    }

    function ingest(file) {
      if (errEl) { errEl.remove(); errEl = null; }
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        showError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // Encoding a large photo takes a moment; a newer drop in that window
      // wins over the stale one.
      var myGen = ++gen;
      toDataUrl(file, el.clientWidth || MAX_DIM).then(function (url) {
        if (myGen !== gen) return;
        store[id] = url;
        if (!saveStore()) {
          delete store[id];
          showError('Browser storage is full. Remove another photo first.');
          return;
        }
        render();
      }).catch(function () {
        if (myGen !== gen) return;
        showError('Could not read that image.');
      });
    }

    empty.addEventListener('click', function () { input.click(); });
    empty.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });

    el.addEventListener('click', function (e) {
      var act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
      if (act === 'replace') input.click();
      if (act === 'remove') {
        gen++;
        delete store[id];
        saveStore();
        render();
      }
    });

    input.addEventListener('change', function () {
      var f = input.files && input.files[0];
      if (f) ingest(f);
      input.value = '';
    });

    el.addEventListener('dragenter', function (e) {
      e.preventDefault();
      depth++;
      el.classList.add('over');
    });
    el.addEventListener('dragover', function (e) {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
    });
    el.addEventListener('dragleave', function () {
      // dragenter/leave fire for every descendant crossing; count depth so
      // hovering the icon inside the empty state doesn't flicker.
      if (--depth <= 0) { depth = 0; el.classList.remove('over'); }
    });
    el.addEventListener('drop', function (e) {
      e.preventDefault();
      depth = 0;
      el.classList.remove('over');
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) ingest(f);
    });

    render();
  }

  document.querySelectorAll('.wof-slot').forEach(initSlot);

  // Dropping a file outside a slot would navigate away from the wall.
  document.addEventListener('dragover', function (e) { e.preventDefault(); });
  document.addEventListener('drop', function (e) { e.preventDefault(); });
})();
