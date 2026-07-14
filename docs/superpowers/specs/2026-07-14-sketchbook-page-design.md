# Sketchbook page — design

**Date:** 2026-07-14
**Branch:** claude/portfolio-sketch-photos-7804f4

## Goal

Add a dedicated page for photos of hand-drawn sketches (fine-art
practice: portraits, still life, urban sketching). Kept separate from
`#/visuals`, which is framed as *digital* work (brand guides, Figma
kits, Framer/Canva). Sketchbook shows the hand and the practice behind
the scribbles that already appear throughout the portfolio.

## Why separate from Visuals

- `#/visuals` and its Work-page teaser explicitly frame it as finished
  digital artefacts ("Brand guides, identities, and studies").
- Sketches tell a different story: process and craft, not deliverables.
  Mixing dilutes both.
- The portfolio already uses a hand-drawn visual language (the
  scribbles, "the hand-drawn scribbles you see around this portfolio
  are all mine"). A Sketchbook page makes that its own chapter instead
  of only decoration.

## Scope

**In:** fine-art / sketchbook practice only (portraits, still life,
urban sketching).
**Out (YAGNI):** filters, categories, tags, external links, embeds, a
new modal component, a Work-page teaser.

## Design

### Route & page
- New route `#/sketchbook`, same pattern as visuals: a `.lv-route`
  section with `data-page="sketchbook"` in `index.html`, rendered by a
  `renderSketchbook()` in `js/app.js`, called from `boot()`.
- Footer nav gets a "Sketchbook" entry next to "Visuals".

### Grid & lightbox
- Photo grid reusing the visuals card markup/classes.
- Click opens the image large in the existing `#lv-visual-overlay`. No
  new modal code: the image-only branch already exists in
  `openVisual` (the `else if (v.thumb)` path). Reuse or lightly
  generalize it so an entry with no `embed`/`link` renders cleanly
  (link hidden).
- Adjust the stage rendering so portrait (tall) photos are not
  cropped — sketches are often vertical. `background-size: contain`
  for these rather than `cover`.

### Data model
New block in `js/data.js`:
```js
sketchbook: [
  { slug, title, medium, year, thumb, blurb? }
]
```
Example: `{ title: "Portrait study", medium: "Graphite", year: "2025",
thumb: "images/sketchbook/portrait-01.jpg" }`.
`context` / `link` / `embed` are omitted. `blurb` is optional: one
sentence, only where it adds something.

### Copy / tone
- Short, honest intro line at the top, in her voice ("I" for own
  practice), no marketing. Ties back to the scribbles seen throughout
  the portfolio. No em-dashes in body copy.

### Small links (approved)
- About page: the existing "Sketchbook practice" side-project entry
  links to `#/sketchbook`.
- No Work-page teaser (keep personal work separate from professional).

### Assets
- Photos live in `images/sketchbook/`.

## Blocked on
- The actual sketch photos (Lisanne is selecting them). Implementation
  of the data entries and final layout tuning waits on real images.

## Verification (post-implementation)
- `#/`, `#/work`, `#/visuals`, `#/about`, `#/sketchbook`, and a case
  route all load without console errors.
- Sketchbook grid renders; clicking a card opens the photo large;
  Escape / backdrop closes; portrait photos are not cropped.
- About "Sketchbook practice" links to the new page.
- CI green (HTML validation + link check).
