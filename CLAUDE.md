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
- Parenthetical asides for side notes, not exclamation marks.

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
visually distinct from the regular sections. 3-5 short items, each
naming a scope or validity caveat about the work:
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
component library, experimentation layer, etc.). 3-5 items, 1-2
sentences each, builds on the actual project (not random product
ideas). Same item shape as limitations: title + body. Opt-in per case
study by adding an `opportunities` array to the limitations block.

### Editing

The polish pass. Drafting and editing are separate steps.

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
- Switch through both design variants (Designer / Dev-friendly).
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
