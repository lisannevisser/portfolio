# Worktree- und Branch-Struktur

Dieses Dokument hält fest, wie wir in diesem Projekt mit Git-Branches und
Git-Worktrees arbeiten. Es wird zunächst manuell gepflegt.

## Schreibstil (Copy auf der Seite)

**Keine Em-Dashes (`—`) in der sichtbaren Copy.** Wirkt schnell
AI-generiert. Stattdessen Gedankenstrich mit Leerzeichen (` - `),
Komma, Doppelpunkt oder neuer Satz.

Gilt für alles, was auf der Seite landet: Case-Study-Texte, About,
Überschriften, Microcopy. In dieser CLAUDE.md selbst sind Em-Dashes ok.

## Wichtig: `main` ist live

Die Seite läuft auf **GitHub Pages** aus dem `main`-Branch. Das heißt:
**alles, was nach `main` gemergt wird, ist ~30 Sekunden später live.**
Es gibt kein Staging, keinen Zwischenschritt.

Daraus folgen zwei feste Regeln (unten im Detail):

1. **CI muss grün sein**, bevor ein PR nach `main` mergt — passiert
   automatisch über GitHub Actions (siehe "Automatisierter PR-Flow").
2. **Rollback-Kommando griffbereit halten**, falls doch mal etwas kaputt ist.

## Grundidee

- **Branch** = eine parallele Entwicklungslinie in Git (nur ein Eintrag,
  kein eigener Ordner).
- **Worktree** = ein zusätzlicher Ordner auf der Platte, in dem ein
  bestimmter Branch ausgecheckt ist. So können mehrere Branches gleichzeitig
  editiert werden, ohne `git checkout` im Hauptordner.
- Wir nutzen Worktrees, damit **mehrere Claude-Sessions parallel** an
  unterschiedlichen Features arbeiten können, ohne sich gegenseitig zu stören.

## Pfad-Konvention (Geschwister-Ordner)

Der Haupt-Checkout bleibt wie gehabt:

```
/Users/lisannevisser/claude/2026-portfolio        ← main (Hauptrepo)
```

Zusätzliche Worktrees landen **daneben**, mit dem Branchnamen im Ordnernamen
(Slash → Bindestrich):

```
/Users/lisannevisser/claude/2026-portfolio-feature-about-redesign
/Users/lisannevisser/claude/2026-portfolio-fix-nav-overflow
```

Vorteile: `ls ~/claude` zeigt alle Worktrees auf einen Blick, und `cd ../…`
reicht zum Wechseln.

## Branch-Konvention

`main` — produktiver Stand (= live). Nur über sauberen Merge updaten.

Alle anderen Branches tragen eine **Kategorie** als Präfix. Die Kategorie
sagt auf einen Blick, *was* für eine Änderung das ist:

| Präfix         | Zweck                                      | Beispiel                      |
| -------------- | ------------------------------------------ | ----------------------------- |
| `feature/`     | Neue Dinge                                 | `feature/about-redesign`      |
| `fix/`         | Kaputte Dinge reparieren                   | `fix/nav-overflow`            |
| `style/`       | Design-Änderungen (CSS, Typo, Spacing)     | `style/case-study-spacing`    |
| `refactor/`    | Code aufräumen, kein Verhaltenswechsel     | `refactor/router-split`       |
| `chore/`       | Dependencies, Config, Kleinkram            | `chore/update-gitignore`      |
| `docs/`        | README, Kommentare, diese CLAUDE.md        | `docs/worktree-structure`     |
| `experiment/`  | Kreative Testideen — darf auch verworfen werden | `experiment/pixel-cursor`  |

Kurzname: kleingeschrieben, Worte mit `-` trennen. Knapp halten.

### Branch vs. Worktree — wann lohnt sich ein eigener Ordner?

Die Kategorie steht **nur** im Branchnamen. Ein Worktree erbt den Namen,
hat aber keine eigene Kategorie. Nicht jeder Branch braucht einen Worktree —
hier eine Faustregel:

| Kategorie     | Worktree sinnvoll?                                        |
| ------------- | --------------------------------------------------------- |
| `feature/`    | Ja — oft länger offen, parallel zu anderem                |
| `experiment/` | Ja — daneben rumspielen, nicht `main` blockieren          |
| `fix/`        | Meistens ja, wenn der Fix > 5 Minuten dauert              |
| `refactor/`   | Ja bei größerem Refactor, sonst nein                      |
| `style/`      | Je nach Umfang                                            |
| `chore/`      | Meistens nein — schnell im Hauptrepo, Lokal-Check, mergen |
| `docs/`       | Meistens nein — gleiche Logik wie `chore/`                |

Für `experiment/`-Branches gilt außerdem: es ist **völlig ok, sie nicht zu
mergen**. Wenn das Experiment nichts wird, Worktree + Branch einfach
wegwerfen (siehe Aufräumen-Kommandos unten).

## Arbeitsablauf

1. Neuer Branch **von `main`** anlegen, Worktree optional daneben.
2. Arbeit im Branch / Worktree erledigen, committen, pushen.
3. PR öffnen (`gh pr create`) + Auto-Merge aktivieren
   (`gh pr merge --auto --squash`).
4. CI läuft automatisch. Bei grün: Squash-Merge nach `main`, Branch wird
   automatisch gelöscht, Seite ~30 s später live.
5. Lokalen Worktree nach Merge mit `git worktree remove` aufräumen.

## Automatisierter PR-Flow mit CI

Seit 2026-04-24 läuft der Merge nach `main` automatisch über GitHub Actions
und Auto-Merge. Kein manueller Klick mehr nötig.

### Was pro PR passiert

1. Claude legt Branch an, commited, pusht, öffnet PR mit Beschreibung.
2. Claude aktiviert Auto-Merge: `gh pr merge --auto --squash`.
3. **GitHub Actions** (`.github/workflows/ci.yml`) startet automatisch und
   führt zwei Jobs aus:
   - **HTML validation** — prüft `index.html` mit dem W3C Nu HTML Checker
     (fängt kaputtes Markup, fehlende Tags, ungültige Attribute).
   - **Link check** — prüft mit `lychee` alle Links in `index.html`
     (intern + extern). Akzeptiert `403/429`, weil manche Seiten Bots blocken.
4. Beide Checks grün → Auto-Merge greift → Squash-Merge nach `main` →
   Branch wird automatisch gelöscht.
5. GitHub Pages deployed ~30 s später die neue Version.

### Was CI nicht fängt

- Visuelle Regressions (Layout verschoben, Farben falsch)
- Content-Fehler (Tippfehler, falscher Text)
- Laufzeit-JS-Fehler, die erst beim Interagieren auftreten

Dafür gibt es den **Rollback-Flow** (siehe unten) und optional den
**Lokal-Check** (siehe weiter unten).

### Einmaliges GitHub-Setup

Damit Auto-Merge wirklich sicher greift, muss GitHub zwei Dinge wissen.
Diese zwei Einstellungen müssen **einmal** im Browser gesetzt werden:

**1. Branch-Protection auf `main`**
GitHub → Repository Settings → Branches → "Add rule" (oder "Add ruleset"):
- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
  - Required checks auswählen: `HTML validation` und `Link check`
    (erscheinen erst nach dem ersten CI-Lauf in der Liste)
  - ✅ Require branches to be up to date before merging

**2. Auto-Merge erlauben**
GitHub → Repository Settings → General → Pull Requests:
- ✅ Allow auto-merge
- ✅ Automatically delete head branches

### Was ist GitHub Actions eigentlich?

Kurz: ein Automatisierungs-System in GitHub. YAML-Dateien unter
`.github/workflows/` beschreiben, was wann laufen soll. GitHub startet für
jeden Lauf eine frische virtuelle Maschine ("Runner"), führt die Schritte
aus, räumt sie danach weg. Kostenlos bis zu einem großzügigen Kontingent
(für dein Portfolio irrelevant, du bist weit drunter).

Begriffe:
- **Workflow** — die YAML-Datei (bei uns `ci.yml`).
- **Trigger** (`on:`) — wann der Workflow läuft (bei uns: `pull_request`).
- **Job** — logische Einheit, läuft isoliert auf einer VM.
- **Runner** — die VM (bei uns `ubuntu-latest`).
- **Step** — einzelner Befehl oder Action innerhalb eines Jobs.
- **Action** — vorgefertigter Baustein aus dem GitHub Marketplace, den man
  wiederverwenden kann (z.B. `actions/checkout`, `lycheeverse/lychee-action`).

## Lokal-Check (optional)

Seit dem CI-Setup ist der Lokal-Check kein Pflicht-Schritt mehr. Er lohnt
sich aber bei Änderungen, die CI **nicht** fängt:

- Visuelle Änderungen (Spacing, Farben, Layout, Responsive-Verhalten)
- Content-Änderungen (Tippfehler erkennst du nur beim Lesen)
- JS-Verhalten beim Interagieren (Klicks, Animationen, Tweaks)

Wenn du lokal schauen willst, im Worktree:

```sh
python3 -m http.server 4322
# dann http://localhost:4322 im Browser öffnen
```

Kurze Check-Liste:

- Startseite lädt ohne Fehler (Browser-Konsole offen — rote Meldungen?).
- Navigation funktioniert (`#/`, `#/work`, `#/about`, Case-Study).
- Beide Design-Varianten (Designer / Dev-friendly) durchschalten.
- Auf der Seite, die du geändert hast, explizit das neue Verhalten prüfen.

## Notfall: Rollback nach einem kaputten Merge

Wenn nach einem Merge die Seite kaputt ist, im Hauptrepo (`main` ausgecheckt):

```sh
git pull                     # sicherstellen, dass du den aktuellen Stand hast
git revert -m 1 HEAD         # kehrt den letzten Merge-Commit um (neuer Commit)
git push                     # pusht den Revert → Seite ist ~30 s später wieder ok
```

Wichtig:

- `revert` **löscht nichts**, es erstellt nur einen Gegen-Commit. Historie
  bleibt sauber, nichts geht verloren.
- `-m 1` sagt Git, dass der Merge rückgängig gemacht werden soll (gegenüber
  dem ersten Parent, also `main` vor dem Merge).
- Falls der letzte Commit **kein** Merge war, reicht `git revert HEAD` ohne
  `-m 1`.

Danach in Ruhe im Branch den Fehler fixen, Lokal-Check, erneut mergen.

## Kommandos (Cheat Sheet)

Aus dem Hauptrepo (`2026-portfolio`) ausführen.

### Worktree + neuen Branch anlegen

```sh
git worktree add ../2026-portfolio-feature-about-redesign -b feature/about-redesign main
```

Das erstellt den Ordner, legt `feature/about-redesign` frisch von `main` an
und checkt ihn dort aus.

### Worktrees auflisten

```sh
git worktree list
```

### Nach dem Merge aufräumen

Erst den Worktree entfernen, dann den Branch:

```sh
git worktree remove ../2026-portfolio-feature-about-redesign
git branch -d feature/about-redesign
```

Falls Git sich beschwert („not fully merged"), vorher sicherstellen, dass
wirklich nach `main` gemergt wurde.

## Aktuelle Worktrees / Branches

<!-- Hier tragen wir manuell ein, was gerade offen ist. Beispiel:
- `feature/about-redesign` → `../2026-portfolio-feature-about-redesign` — WIP Redesign About-Seite
-->

_(aktuell keine aktiven Worktrees neben `main`)_
