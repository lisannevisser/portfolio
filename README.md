# Lisanne Visser — Portfolio

Static portfolio site. Two interactive design variants (Designer / Dev-friendly) with a live switcher, hash-routed pages, custom cursor, magnetic hover, tweaks panel, and a small easter egg (`yyy`).

Pure HTML, CSS, and vanilla JavaScript — no build step.

## Run locally

```bash
python3 -m http.server 4322
# then open http://localhost:4322
```

## Structure

```
index.html          single-page app with hash routes (#/, #/work, #/work/<slug>, #/about, #/playground)
css/
  shared.css        theme tokens, nav/footer/switcher/tweaks, responsive base
  v1.css            Designer — warm paper, Fraunces italic, hand-drawn scribbles
  v3.css            Dev-friendly — dark terminal grid, amber accent
js/
  data.js           identity, case studies, reading list, side projects
  app.js            router, cursor, magnetic, switcher, tweaks, easter egg, case renderer
images/logos/       drop PNGs here for the client marquee (Funke, TikTok, feelinghale)
```

## Deploy to GitHub Pages

1. Create a new public repo named `portfolio` on [github.com/new](https://github.com/new) — **don't** initialize with a README / license / gitignore.
2. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages**. Set **Source** to `Deploy from a branch`, **Branch** to `main`, **Folder** to `/ (root)`. Save.
4. After ~30s the site is live at `https://<your-username>.github.io/portfolio/`.

## Custom domain (later)

When ready:

1. Add a `CNAME` file at the repo root containing just your domain, e.g. `lisannevisser.com`.
2. In your DNS provider, add a `CNAME` record for `www` pointing to `<your-username>.github.io`, plus `A` records for the apex domain to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.
