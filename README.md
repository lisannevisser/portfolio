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

## Structure

```
index.html    single-page app, hash routes (#/, #/work, #/work/<slug>, #/about, #/playground)
css/          shared.css (tokens), v1.css (theme)
js/           data.js (content), app.js (router, cursor, case renderer)
images/       logos and shared images
portfolio/    per-case-study assets
```

## Deploy

Pushed to `main` deploys to GitHub Pages automatically once CI is green. See [CLAUDE.md](CLAUDE.md) for the branch and PR flow.
