# Worktree and Branch Structure

This document records how we work with Git branches and Git worktrees in
this project. For now it is maintained manually.

## Writing for the Site

**No em-dashes (`—`) in body text.** Reads as AI-generated quickly.
Use a hyphen with spaces (` - `), a comma, a colon, or a new sentence
instead.

Applies to anything narrative: case study text, About, headings,
microcopy, blog posts.

**Exception:** Years, date ranges, and career lines may keep em-dashes
(e.g. `2022 — Now`, `2020 — 2022`, `2023 — ongoing`). Em-dashes are
fine in this CLAUDE.md itself.

**American English.** Stay consistent: `behavior` not `behaviour`,
`optimize` not `optimise`, `center` not `centre`, `analyze` not
`analyse`, `organization` not `organisation`, `color` not `colour`,
`realization` not `realisation`, `skeptical` not `sceptical`, `rigor`
not `rigour`.

**Currency format.** Write amounts in the European style: the number
first, a comma as the decimal separator, then a space and the symbol
(`10,00 €`, `9,90 €`, `15,99 €`). Whole-euro amounts can drop the
decimals (`10 €`, `20 €`). Never the leading-symbol, dot-decimal form
(`€10.00`). Applies to all site copy: case studies, About, microcopy.

**Credit what isn't ours.** Whenever we link out to someone else's
resource, or use material we didn't make, name the source. Two places,
both required:

1. **At the thing itself**, on the page. A named link rather than a bare
   "here", a caption under the image, the book with publisher and year.
2. **In the Credits block on the imprint page** (`#/imprint`), so there
   is one list a reader can check.

Applies to typefaces, icons, photos, illustrations, diagrams, and
articles we lean on. When adding an asset, adding its credit is part of
the same change, not a follow-up. It's the decent thing to do, and on a
portfolio it also shows you know where your material comes from.

**Scribbles welcome.** Hand-notes, arrows, drawn annotations are part
of the visual language. They can appear in cases, About, next to
figures, or between sections when they add a small personal touch.

### Tone & Voice

How a sentence reads. Senior product designer talking to a peer, not
marketing copy.

**Person**
- "I" for own decisions and reflections, "we" for team work. Don't
  appropriate collaborative work; don't hide behind "we" when you
  made the call.
- Speak to the reader. No third person ("the designer decided...").

**Register**
- Plain language. No buzzwords ("leverage", "transformational",
  "best-in-class").
- Describe, don't sell. "We relaunched the site" > "We delivered a
  transformational redesign".
- Contractions are fine ("didn't", "wasn't").

**Concreteness**
- Name tools (Figma, UXtweak, Hotjar). Cite sources where it matters
  (book + publisher + year).
- Numbers where you have them ("140+ sites in under 1 year", "5%
  tablet users").

**Sentences**
- Short to medium. Fact sentences direct.
- Longer only when spelling out a trade-off or reasoning.
- Parenthetical asides for side notes, not exclamation marks
  (case studies; blog posts may use an occasional exclamation mark,
  see Blog Voice).

**Narrative tension**
- Welcome when the stakes are real and serve the judgement story. A
  single, true tension beat that sets up a decision works ("Two weeks
  before launch, X came back…").
- Avoid manufactured stakes, cliffhangers ("read on to find out…"),
  or vague "but then everything changed" beats.
- Sparingly — one or two pressure points per case study, not every
  section.

**Don't**
- No emojis as bullet markers. Reads as 2018-startup-deck, breaks the
  "restraint = seniority" stance. Use plain bold labels.
- No emojis in body text in general.
- No superlatives without evidence.

### Blog Voice

Blog posts (the Gazette) are looser and warmer than case studies.
Everything in Tone & Voice still applies (plain language, no
buzzwords, concreteness, no emojis), but the register shifts. These
markers come from two posts: comparing an editorial rewrite of the
UX-audits-with-AI post against Lisanne's own draft (the rewrite was
reverted because it lost her voice), and writing/editing the
"better designer with AI" post.

**Voice markers**

- **Playful showmanship between sections.** Build-up beats are part
  of the voice, not manufactured stakes: "Then along came AI.",
  "From here, it gets even better!", "As if this wasn't enough, I
  have more to offer.", "the cherry on top". What a case study
  forbids, a blog post enjoys.
- **Self-aware humor in parentheses.** "I already rebelled against
  this establishment (look at me, what a rebel)." One or two per
  post, puncturing her own seriousness.
- **Exclamation marks for genuine excitement.** Blog only, sparingly.
- **Parentheses for asides**, not paired commas: "(or had someone
  conduct it for you)", "(native HTML is Claude Design's default)".
- **Colons to introduce a thing or an explanation**, sometimes with a
  capital after the colon: "I opted for Heurio: A software solution
  that lets you annotate and score your findings."
- **Conversational connectors open sentences**: "From here,", "From
  there,", "In consequence,", "Even more than that,", "However,".
- **Talky beats tight.** Natural, slightly wordy phrasing ("easily
  share", "a fair chance you end up with…") wins over maximally
  compressed prose. If a sentence reads like a magazine editor
  tightened it, it has drifted off-voice. The cut pass (see Editing)
  is gentler here than in case studies.

**Structure & restraint**
- **Honest hook.** A personal confession or admission opens stronger
  than a thesis. Vulnerable but confident.
- **Don't overclaim.** Prefer "a good part" over a precise-sounding
  number that isn't measured, "a day" over a flashy "a morning".
  Realistic beats impressive.
- **One bolded core claim per article.** The single sentence the
  post argues for gets **bold**. Only that one.
- **Questions as questions.** Write rhetorical questions out with
  question marks ("Does this heuristic actually apply here?"), not
  as comma-chained clauses.
- **Short paragraphs.** One idea per paragraph; split rather than
  stack.
- **No ornament.** No pull quotes, no attribution lines, no end
  dividers. The article ends on its last sentence.
- **No insider shorthand.** If a word only works because of the
  sentence before it ("the calls"), expect a reader query; prefer
  wording that survives first read.

### Blog Post Workflow

How a post travels from raw thoughts to live, learned on the
"better designer with AI" post.

1. **Draft in data.js on a branch.** The first draft goes straight
   into the posts array as blocks. Local preview, nothing live until
   PR.
2. **Thoughts before polish.** Lisanne dumps raw thoughts
   (voice-to-text is fine). Claude structures them and maps them
   against the draft: what's covered, what's missing. Revision
   happens after she re-read, not before.
3. **Editing via markdown copy.** For her own editing pass, Claude
   exports the article as a standalone .md in the worktree root
   (never committed). She edits there; changes get transferred back
   to data.js 100% verbatim — the rules in "Working on Lisanne's
   Drafts" apply.
4. **Real artifacts beat illustrations.** Chats, PR comments, and
   screenshots from actual work become elements in the post (the
   animated chat block is reusable: `kind: "chat"`). Anonymize
   people ("Developer"), strip real repo links and URLs.
5. **Cross-link instead of repeating.** If a point is covered in
   another post or case study, link a text phrase inline and cut the
   duplicated content.
6. **Bump the cache-bust version** (`?v=...` in index.html) with
   every CSS/JS change, or returning visitors get the old assets.

### Case Study Structure

How a case study is assembled. About *what goes where*, not *how it
reads*.

**Project at a glance — top of the page**
The existing role / team / tools / timeline block plus 1-2 sentences
on what changed or what the impact was. The full outcome section can
still come at the end, but scanners need an early signal of whether
the case study is worth their time. Qualitative is fine if
quantitative isn't available — pair it with the hypothesis you set up
and how you would measure it.

**Impact cells: numbers or nothing**
The big value in each impact cell must either contain a digit
("+15%", "140+", "1st") or stay short and punchy ("Refreshed",
"Org-wide", "Daily use"). If any cell's value has no digit and runs
longer than ~10 characters, the entire impact section is hidden
automatically (see `shouldShowImpact` in app.js). The big-number slot
is for metrics, not sentences. Move sentence-length context into the
note line underneath.

**Sections lead with the decision, not the activity**
- Bad: "We did tree testing with UXtweak."
- Better: "Top-bar navigation needed to survive both SEO link
  structure and user mental models. After the workshop, I tree-tested
  the proposed structure in UXtweak…"
- Decision is the headline. Activity is the evidence.

**Section granularity**
Every heading needs more than a sentence to justify it. A one-line
section reads as messy — merge it into the section before or after,
or expand it. Most case studies need 5-7 sections, not 10+. More
headings ≠ more structure; often it reads as fragmented.

**Constraints stay in the background**
Constraints shape decisions but shouldn't shape the case study's
structure. Mention them briefly where the decision is discussed —
don't give them their own section, framework, or take-away. The case
study is about the work and what came out of it, not about what was
missing or who didn't approve what.

When you do mention a constraint, frame as agency, not grievance:
- Avoid: "what was forced on us", "the constraint I accepted under
  protest", "we had no choice but to…", "going against my preference,
  management decided X"
- Prefer: "working without X", "how I replaced X", "what we did
  instead", "the workaround that held up"

For your own thinking while writing, the questions are still useful:
what did I want, what was decided differently, how did I make it
work, what would I revisit. But the answers should land in the
narrative quietly, not as bullet points or headings.

**Skimmable hierarchy**
- "Project at a glance" at the top.
- Every section starts with a one-sentence lead.
- Gist in 60 seconds. Detail rewards deeper reading but isn't
  required for the takeaway.

**Limitations card at the bottom**
End each case study with a scientific-paper style Limitations card,
visually distinct from the regular sections. At most 4 short items
(fewer is fine, never more), each naming a scope or validity caveat
about the work:
- Methodological constraints (e.g. "external user testing" — what was
  validated by what method)
- Sample / coverage limits (e.g. "desktop-first" — what got the
  attention, what didn't)
- Team / role scope (e.g. "solo design lead" — breadth vs depth)
- Evidence still building (e.g. "post-launch metrics started after
  launch, not before")

The point is honest scoping of what the case study can and cannot
claim. Each item is one short paragraph. Frame as scope, not
complaint: "Decisions used internal proxies and the live launch as
test phase" beats "we had no budget for testing".

The limitations card replaces a separate take-aways paragraph; the
forward-looking "next time I'd…" sentence belongs inside the relevant
limitation item, not as its own block.

**Optional: Opportunities on the back.** The Limitations card can
flip to a second face labelled "Opportunities" — short forward-looking
ideas for how the work could be extended (mobile-native pass, public
component library, experimentation layer, etc.). At most 4 items
(fewer is fine, never more), 1-2 sentences each, builds on the actual
project (not random product ideas). Same item shape as limitations: title + body. Opt-in per case
study by adding an `opportunities` array to the limitations block.

### Editing

The polish pass. Drafting and editing are separate steps. These
rules apply to text Claude drafted — Lisanne's own drafts get a
different, much lighter treatment (see next section).

- **Draft first, then edit.** Don't polish while writing.
- **Cut pass.** For each sentence ask "if I delete this, is anything
  lost?". If no, cut. Adverbs go first.
- **Length discipline.** Wordiness is the default. Bias toward
  shorter.
- **Typo pass before publish.** Separate step, mandatory. Surface
  errors read as no-final-read.
- **Voice consistency pass.** Scan for textbook-y phrases that
  drifted in ("reaccessed brand assets in accordance with…"). Put
  them back in your normal voice.

### Working on Lisanne's Drafts

Learned on the UX-audits-with-AI post: an editorial rewrite of her
draft had to be reverted wholesale (PR #54). When she provides the
text, the job is transcription and repair, not improvement.

- **Her draft is the source of truth.** Keep wording, sentence
  structure, and section order verbatim. Only fill in what she
  explicitly asks for (links, citations, figure placeholders, named
  gaps).
- **Typo pass means errors only.** Misspellings ("capapble" →
  "capable") and clear grammar slips ("a typical audits") yes.
  Rephrasing, tightening, or smoothing no — even when a sentence
  feels wordy. List the fixes for approval instead of folding them
  into other changes.
- **Typo ≠ voice.** Unusual-but-intentional phrasings ("Additionally
  to", "feedback culture similar to what we're used to in Figma")
  stay. Same for consistent spelling choices like "judgement" —
  don't silently Americanize her word picks; the American English
  list above is for Claude-drafted text. When unsure whether
  something is a slip or a choice, leave it and ask.
- **Don't polish away voice markers.** Jokes, parenthetical asides,
  exclamation marks, build-up beats, small repetitions: features,
  not bugs.
- **Never restructure silently.** Moving a figure, code block,
  paragraph, or section is a content decision she makes, not an
  edit.

When drafting from scratch (her notes → post), write in Blog Voice
and expect her to do a wording pass. Flag the spots where you
guessed at her phrasing rather than burying them.

## The One-Pager (`#/portfolio`, and the front door)

Added 2026-09. The whole portfolio as one scroll: one panel per topic,
readable end to end in a few minutes. It is the landing route, so the
bare URL opens it.

**Why it exists.** The case studies were the bottleneck. Writing them
well takes concentration and time, and until they were done the site
could not be sent to anyone. The one-pager removes that dependency:
each project carries the situation, the decision, the methods, and one
number, and the full write-up is handed over on request. Applying stops
waiting on writing.

**It is a portfolio, not a CV.** No "curriculum vitae" framing, no
CV-style headings. The career ledger is one panel among several, and it
sits after the work, not before it. The link to the Google Doc CV lives
in the cover and the contact panel and nowhere else.

**Where the content lives.** `window.LV_DATA.onepager` in `js/data.js`.
Everything except the cover panel is rendered from there by
`js/onepager.js`; the cover is static in `index.html` so the name, the
statement and the pitch exist without JavaScript. Styling is
`css/onepager.css` and nothing else touches it.

**Panel order.** Cover, 01 numbers, 02 work chapter opener, six project
panels, 03 how I work, 04 track record, 05 outside the brief, 06
contact. Project panels alternate which side the visual sits on.

**The case studies are parked, not deleted.** They stay in `cases` and
stay reachable at `#/work/<slug>`, and the old work list is still at
`#/work`. The one-pager just does not advertise them. When a case study
is finished, add `caseLink: true` to that project in
`onepager.projects` and its panel grows a link to the full study.

**Project visuals.** Each panel renders a typographic plate (the number
set large, the client wordmark under it) as a stand-in. Drop a real
image at `images/cases/<slug>.jpg`, set `cover` on the project, and the
plate is replaced. `coverAlt` sets the alt text; without it the
headline is used.

**Design rules on this page**, tighter than the rest of the site:

- **No color in headings.** Ink on paper only. Colored headlines read
  as AI design.
- **Three type roles, no more.** Fraunces for headlines and numbers
  (roman, never italic), Instrument Sans for running text, JetBrains
  Mono for labels, indices and chips. The mono stays because it carries
  the nav, the logo, and the favicon.
- **One rhythm.** Every panel uses the same `--op-pad` block padding
  and the same `--op-gap` between its parts. If a section needs its own
  spacing, the section is wrong, not the token.
- **One type ladder.** `--op-fs-hero` once, `--op-fs-h2` for section
  and project headlines, `--op-fs-h3` for item titles, then lead, body,
  label. Nothing in between.
- **Motion is enhancement.** Panels lift in via `animation-timeline:
  view()` where the browser supports it, and only where it does not is
  the IntersectionObserver reveal used, so the same content never fades
  twice. Everything switches off under `prefers-reduced-motion`.
  Snapping is `proximity`, not `mandatory`, and only above 700px of
  viewport height.

**The old home page is parked, not deleted.** `HOME_ROUTE` at the top
of `js/app.js` decides what the bare URL opens. It is `"portfolio"`;
set it back to `"home"` and the previous home page is the front door
again. Either way the other one stays reachable at its own route
(`#/home` / `#/portfolio`).

**Related global change.** The same work toned the paper down from
beige (`#f4efe6`) to warm white (`#fbf9f5`) and cut the two accent
washes in `css/v1.css` to roughly a third. The tint is still there, it
just no longer sets the mood. Revert those two blocks to go back.

## Important: `main` is live

The site runs on **GitHub Pages** from the `main` branch. That means:
**anything merged into `main` is live ~30 seconds later.** There is no
staging, no intermediate step.

Two firm rules follow from this (details below):

1. **CI must be green** before a PR merges into `main` — happens
   automatically via GitHub Actions (see "Automated PR flow").
2. **Keep the rollback command at the ready**, in case something does
   break.

## Core Idea

- **Branch** = a parallel line of development in Git (just an entry, no
  separate folder).
- **Worktree** = an additional folder on disk where a specific branch is
  checked out. This way several branches can be edited simultaneously
  without `git checkout` in the main folder.
- We use worktrees so that **multiple Claude sessions can work in
  parallel** on different features without getting in each other's way.

## Path Convention (Sibling Folders)

The main checkout stays as is:

```
/Users/lisannevisser/claude/2026-portfolio        ← main (main repo)
```

Additional worktrees go **next to it**, with the branch name in the
folder name (slash → hyphen):

```
/Users/lisannevisser/claude/2026-portfolio-feature-about-redesign
/Users/lisannevisser/claude/2026-portfolio-fix-nav-overflow
```

Benefits: `ls ~/claude` shows all worktrees at a glance, and `cd ../…`
is enough to switch.

## Branch Convention

`main` — production state (= live). Only update via clean merge.

All other branches carry a **category** as a prefix. The category tells
you at a glance *what kind* of change it is:

| Prefix         | Purpose                                      | Example                       |
| -------------- | -------------------------------------------- | ----------------------------- |
| `feature/`     | New things                                   | `feature/about-redesign`      |
| `fix/`         | Repair broken things                         | `fix/nav-overflow`            |
| `style/`       | Design changes (CSS, typography, spacing)    | `style/case-study-spacing`    |
| `refactor/`    | Clean up code, no behavior change            | `refactor/router-split`       |
| `chore/`       | Dependencies, config, small stuff            | `chore/update-gitignore`      |
| `docs/`        | README, comments, this CLAUDE.md             | `docs/worktree-structure`     |
| `experiment/`  | Creative test ideas — may also be discarded  | `experiment/pixel-cursor`     |

Short name: lowercase, separate words with `-`. Keep it concise.

### Branch vs. Worktree — when is a separate folder worth it?

The category is **only** in the branch name. A worktree inherits the
name but has no category of its own. Not every branch needs a worktree —
a rule of thumb:

| Category      | Worktree useful?                                              |
| ------------- | ------------------------------------------------------------- |
| `feature/`    | Yes — often open longer, parallel to other work               |
| `experiment/` | Yes — play around next to it, don't block `main`              |
| `fix/`        | Mostly yes, if the fix takes > 5 minutes                      |
| `refactor/`   | Yes for a larger refactor, otherwise no                       |
| `style/`      | Depends on scope                                              |
| `chore/`      | Mostly no — quick in the main repo, local check, merge        |
| `docs/`       | Mostly no — same logic as `chore/`                            |

For `experiment/` branches it also applies: it is **completely fine not
to merge them**. If the experiment doesn't pan out, just throw away
worktree + branch (see cleanup commands below).

## Workflow

1. Create new branch **from `main`**, worktree optional next to it.
2. Do the work in the branch / worktree, commit, push.
3. Open PR (`gh pr create`) + enable auto-merge
   (`gh pr merge --auto --squash`).
4. CI runs automatically. On green: squash-merge into `main`, branch is
   deleted automatically, site live ~30 s later.
5. Clean up local worktree after merge with `git worktree remove`.

## Automated PR Flow with CI

Since 2026-04-24 the merge into `main` runs automatically via GitHub
Actions and auto-merge. No more manual click needed.

### What happens per PR

1. Claude creates branch, commits, pushes, opens PR with description.
2. Claude enables auto-merge: `gh pr merge --auto --squash`.
3. **GitHub Actions** (`.github/workflows/ci.yml`) starts automatically
   and runs two jobs:
   - **HTML validation** — checks `index.html` with the W3C Nu HTML
     Checker (catches broken markup, missing tags, invalid attributes).
   - **Link check** — uses `lychee` to check all links in `index.html`
     (internal + external). Accepts `403/429`, because some sites block
     bots.
4. Both checks green → auto-merge kicks in → squash-merge into `main` →
   branch is deleted automatically.
5. GitHub Pages deploys the new version ~30 s later.

### What CI does not catch

- Visual regressions (layout shifted, wrong colors)
- Content errors (typos, wrong text)
- Runtime JS errors that only appear when interacting

For that there is the **rollback flow** (see below) and optionally the
**local check** (see further below).

### One-time GitHub Setup

For auto-merge to really kick in safely, GitHub needs to know two
things. These two settings have to be set **once** in the browser and
then stay active for all future PRs:

**1. Branch protection on `main`**
GitHub → Repository Settings → Branches → "Add rule" (or "Add ruleset"):
- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
  - Select required checks: `HTML validation` and `Link check`
    (only appear in the list after the first CI run)
  - ✅ Require branches to be up to date before merging

**2. Allow auto-merge**
GitHub → Repository Settings → General → Pull Requests:
- ✅ Allow auto-merge
- ✅ Automatically delete head branches

### What is GitHub Actions, actually?

In short: an automation system in GitHub. YAML files under
`.github/workflows/` describe what should run when. GitHub spins up a
fresh virtual machine ("runner") for each run, executes the steps,
tears it down afterwards. Free up to a generous quota (irrelevant for
your portfolio, you're well below it).

Terms:
- **Workflow** — the YAML file (in our case `ci.yml`).
- **Trigger** (`on:`) — when the workflow runs (in our case:
  `pull_request`).
- **Job** — logical unit, runs isolated on a VM.
- **Runner** — the VM (in our case `ubuntu-latest`).
- **Step** — a single command or action within a job.
- **Action** — prebuilt building block from the GitHub Marketplace
  that you can reuse (e.g. `actions/checkout`,
  `lycheeverse/lychee-action`).

## Local Check (optional)

Since the CI setup, the local check is no longer a mandatory step. It
is worth doing for changes that CI does **not** catch:

- Visual changes (spacing, colors, layout, responsive behavior)
- Content changes (you only catch typos by reading)
- JS behavior when interacting (clicks, animations, tweaks)

If you want to look locally, in the worktree:

```sh
python3 -m http.server 4322
# then open http://localhost:4322 in the browser
```

Quick checklist:

- Home page loads without errors (browser console open — red messages?).
- Navigation works (`#/`, `#/work`, `#/about`, case study).
- On the page you changed, explicitly verify the new behavior.

## Emergency: Rollback after a broken merge

If the site is broken after a merge, in the main repo (`main` checked
out):

```sh
git pull                     # make sure you have the current state
git revert -m 1 HEAD         # reverts the last merge commit (new commit)
git push                     # push the revert → site ok again ~30 s later
```

Important:

- `revert` **deletes nothing**, it just creates a counter-commit.
  History stays clean, nothing is lost.
- `-m 1` tells Git the merge should be reverted (against the first
  parent, i.e. `main` before the merge).
- If the last commit was **not** a merge, `git revert HEAD` without
  `-m 1` is enough.

Then calmly fix the bug in the branch, local check, merge again.

## Commands (Cheat Sheet)

Run from the main repo (`2026-portfolio`).

### Create worktree + new branch

```sh
git worktree add ../2026-portfolio-feature-about-redesign -b feature/about-redesign main
```

That creates the folder, branches `feature/about-redesign` fresh from
`main`, and checks it out there.

### List worktrees

```sh
git worktree list
```

### Cleanup after the merge

First remove the worktree, then the branch:

```sh
git worktree remove ../2026-portfolio-feature-about-redesign
git branch -d feature/about-redesign
```

If Git complains ("not fully merged"), make sure beforehand that it
really was merged into `main`.

## Current Worktrees / Branches

<!-- Manually note here what is currently open. Example:
- `feature/about-redesign` → `../2026-portfolio-feature-about-redesign` — WIP redesign About page
-->

_(currently no active worktrees next to `main`)_
