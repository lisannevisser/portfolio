# Worktree and Branch Structure

This document records how we work with Git branches and Git worktrees in
this project. For now it is maintained manually.

## Writing Style (Copy on the Site)

**No em-dashes (`—`) in visible copy.** Reads as AI-generated quickly.
Use a hyphen with spaces (` - `), a comma, a colon, or a new sentence
instead.

Applies to anything that ends up on the site: case study text, About,
headings, microcopy. Em-dashes are fine in this CLAUDE.md itself.

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
