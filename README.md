# Lisanne Visser - Portfolio

Senior product designer. This repo is the source of my portfolio.

**Live: [lisannevisser.github.io/portfolio](https://lisannevisser.github.io/portfolio/)**

## About the site

A static, hand-built site with no framework and no build step: just HTML, CSS, and vanilla JavaScript. The design leans typography-first with generous whitespace, warm paper, Fraunces italic, hand-drawn scribbles.

Plus a hash router, custom cursor, magnetic hover on key elements, a tweaks panel for live theming, and one small easter egg (type `yyy`).

## Run locally

```bash
python3 -m http.server 4322
# open http://localhost:4322
```

## Edit mode

Edit copy in the layout it lives in, on any case study or blog post, on
desktop or phone. Turn it on by visiting this once per device:

```
https://lisannevisser.github.io/portfolio/?edit=wet-paint
```

The browser remembers it, so the mode stays on across every page without
the parameter. Locally the same key works on `http://localhost:4322/?edit=wet-paint`.

Turn it off with the **Done** button in the bar, or `?edit=off` on any URL.

Click text, type, press Enter to commit or Escape to discard. Edited
paragraphs stay highlighted, **List** shows old against new with an undo
per entry, and **Copy** puts a patch on the clipboard:

```json
[{ "path": "cases.0.story.2.body", "part": 1, "old": "…", "new": "…" }]
```

That patch goes into a Claude chat, which transfers it into `js/data.js`
verbatim and opens a PR. Nothing is written from the browser: no token,
no backend, no request leaves the page.

The key is not a lock, just something nobody stumbles into. Changing it
means editing the two places it appears, `index.html` and
`js/edit-mode.js`, which also documents the whole thing at the top.

## Structure

```
index.html    single-page app, hash routes (#/, #/work, #/work/<slug>, #/about, #/playground)
css/          shared.css (tokens), v1.css (theme)
js/           data.js (content), app.js (router, cursor, case renderer), edit-mode.js (in-place editing)
images/       logos and shared images
portfolio/    per-case-study assets
```

## Deploy

Pushed to `main` deploys to GitHub Pages automatically once CI is green. See [CLAUDE.md](CLAUDE.md) for the branch and PR flow.
