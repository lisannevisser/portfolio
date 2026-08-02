# Backlog

Ein Ort für Ideen, die später umgesetzt werden sollen. Damit nichts im
Chat oder im Kopf verloren geht. Manuell gepflegt, wie `CLAUDE.md`.

Format: Checklisten-Items, nach Thema gruppiert. Abhaken (`- [x]`), wenn
erledigt. Neue Ideen einfach unten im passenden Abschnitt ergänzen, oder
einen neuen Abschnitt aufmachen.

## Visuals-Seite (Canva & Co.)

Stand nach PR #151/#152: Übersichtskarte raus, Yoga-Flyer-Karte drin
(noch ohne Link), FacelyU- und Adventure-Set-Cover live.

- [ ] Canva-Link zum Yoga-Flyer-Template nachtragen (`link: ""` mit
      TODO-Kommentar in `js/data.js`, Karte "canva-yoga-flyer").
- [ ] Zwei weitere Canva-Designs raussuchen und als Karten ergänzen
      (Cover als SVG/PNG + direkter Template-Link; Workflow wie beim
      Flyer: headless Chrome rendert, sips macht das JPEG).
- [ ] Übersichts-PNG (mehrere Designs grafisch arrangiert) in voller
      Auflösung testen: als optionale Karte mit Link aufs Canva-Profil.
      Offene Frage: Grid-im-Grid-Optik - entscheidet sich am Bild.
- [ ] Jahr für "Illustration Adventure Set" nachtragen (steht leer).
- [ ] FacelyU: Zeitraum der 750+ Follower präzisieren (Post-Daten im
      eingeloggten Instagram-Account ablesen; extern nicht belegbar).

## Sketchbook-Seite

Die Seite ist seit 2026-08-02 fertig und steht im Footer unter "Site",
nicht mehr unter "Work in progress".

- [ ] Auswahl noch mal durchgehen: ein paar der älteren Illustrationen
      rausnehmen, damit nur die Arbeiten stehen bleiben, die die aktuelle
      Zeichenpraxis zeigen. Einträge in `js/data.js` (`sketchbook`) löschen
      und die zugehörigen Dateien in `images/sketchbook/` mit entfernen.

## Research-Positionierung (Portfolio gesamt)

Das Portfolio liest sich heute als "Designerin mit Research-Rückgrat",
nicht als "Researcherin". Diese Punkte verschieben es Richtung Research.

- [ ] Cases mit der Frage + dem Learning eröffnen, nicht mit Output + Zahl.
- [ ] Research-Synthese sichtbar machen: Affinity Map, Journey Map,
      Survey-Report, Interview-Guide, Coding-Schema. Aktuell ist nur das
      Limbic-Mapping als echtes Research-Artefakt sichtbar.
- [ ] Pro Case eine Methoden-Zeile mit n ergänzen (z. B. "Tree Test, n=24,
      UXtweak").
- [ ] Stichprobengrößen nachtragen, wo sie fehlen:
  - Pricing: A/B-User / Sessions pro Variante.
  - Research-Culture: Interview-Anzahl, Fokusgruppen-Teilnehmende,
    Element-Test-Traffic.
  - Design-System: Anzahl der Employee-Interviews.
  - Relaunch: Teilnehmende bei Card Sort und Tree Test.
  - Der 385+-Survey ist schon korrekt ausgewiesen - als Muster nutzen.

## Work-Page / Navigation

- [ ] Entscheiden, ob es eine eigene Überseite "Playground" geben soll,
      die alle Nicht-Portfolio-Seiten bündelt (Visuals, Sketchbook,
      Reading, Chinese Library, Wall of Fame, Playground) - ggf. mit
      eigener Unternavigation. Das sind Spaßprojekte, keine
      Portfolio-Seiten; deshalb ist Playground seit 2026-08-01 aus der
      Topnav raus und die Seiten stehen im Footer unter "Work in
      progress".
- [ ] Navigation NICHT splitten - "Work" bleibt der einzige Eintrag.
- [ ] Filter-/Linsen-Chips auf der Work-Seite über die bestehenden Tags
      (z. B. "Research & Experimentation" / "Design & Systems"). Cases
      dürfen unter mehreren Linsen auftauchen, weil viele hybrid sind.
- [ ] Research-sprechende Lead-Zeile pro Case-Zeile (Frage statt nur
      Titel + Zahl).
- [ ] Reihenfolge: einen research-starken Case (Research-Culture oder
      Pricing) nach oben legen - steuert den ersten Eindruck am stärksten.

## Wall of Fame (versteckt, nicht verlinkt)

Seit 2026-08-02 ist die Seite **aus dem Footer raus**. Die Route
`#/wall-of-fame` funktioniert weiterhin und alle Assets liegen im Repo -
sie ist nur nirgends mehr verlinkt. Grund: das Board braucht erst
Inhalt, und das ist Arbeit, die vor dem Launch nicht reinpasst.

Was schon da ist (Stand PR #132):

- 7 Exhibit-Slots, Drag-and-Drop für Besucher, Auswahl bleibt lokal im
  Browser.
- Ein committetes Default-Foto in Exhibit A (getapte Fußgängerampel,
  verkehrt herum montiert), das für alle Besucher rendert. Fehlt die
  Datei, fällt der Slot sauber auf die Drop-UI zurück.
- Eigenes Stylesheet (`css/wall-of-fame.css`) und eigene Logik
  (`js/wall-of-fame.js`).

Offene Entscheidung, eins von beiden:

- [ ] **Weiterarbeiten**: die restlichen 6 Slots mit echten Fotos
      befüllen, dann wieder in den Footer aufnehmen.
- [ ] **Auslagern / rausnehmen**: falls die Seite nicht zurückkommt,
      gehören mit raus: die Route in `index.html`,
      `css/wall-of-fame.css`, `js/wall-of-fame.js`,
      `images/wall-of-fame/`, die Stylesheet- und Script-Zeilen im
      `<head>` bzw. am Seitenende, und die vier Board-Fontdateien
      (`archivo-*`, `libre-caslon-text-*`, `space-mono-*` in `fonts/`)
      samt ihrer `@font-face`-Blöcke oben in `css/wall-of-fame.css`.

## SEO & Meta (nach dem Launch)

- [x] `canonical`, Open Graph und Twitter Card gesetzt, mit
      `images/og-card.png` (1200x630, aus den eigenen Fonts gebaut).
      Die absoluten URLs stehen als einziger Block im `<head>` und sind
      beim Domainumzug die komplette Änderung.
- [ ] Beim Domainumzug: den Meta-Block auf die neue Domain umstellen,
      Share-Bild-URL inklusive.
- [ ] Share-Bild neu bauen, sobald es echte Case-Visuals gibt. Die
      aktuelle Karte ist typografisch, das trägt, aber ein Bild trägt
      weiter.
- [ ] `robots.txt` und `sitemap.xml` anlegen. Bei Hash-Routing bringt
      eine Sitemap wenig, deshalb vorher prüfen, ob sich der Aufwand
      lohnt.
- [ ] Structured Data (`Person`-Schema) im JSON-LD-Block.

## Footer, Informationsarchitektur & Branding

- [ ] Footer aufräumen und entscheiden, welche der Nebenseiten
      dauerhaft bleiben. Aktuell hängt die komplette
      Informationsarchitektur am Footer, was als Zwischenzustand
      funktioniert, aber keine bewusste Struktur ist. Die Überschrift
      "Work in progress" bleibt, solange sie stimmt.
- [ ] **Branding ist ein eigenes Projekt und bewusst ausgeklammert.**
      Es gibt kein Logo und vorerst soll auch keins entstehen. Der
      Header bleibt beim Mono. Das Favicon ist eine Übergangslösung
      (siehe unten).
- [ ] Favicon final entscheiden: Variante A (`li`) ist verdrahtet,
      Variante B (`l.`) liegt daneben unter
      `images/logos/favicon-b-l-dot.svg`. Beide sind JetBrains Mono in
      Outlines, lassen sich also direkt in Figma weiterbearbeiten.
- [ ] Offen: der Typeface aus dem alten Portfolio (i-Punkt als leicht
      gedrehtes Quadrat, Pixel-Vibe). Schön, würde aber eine dritte
      typografische Stimme auf die Seite bringen. Nur zusammen mit einer
      echten Branding-Runde entscheiden, nicht nebenbei.

### Branding-Infos nach Figma holen

Aktuell liegen die Branding-Grundlagen verstreut: als CSS-Variablen, als
SVG-Board, als Live-Styleguide. Für eine echte Branding-Runde gehören sie
an einen Ort. Eine `.fig` lässt sich nicht generieren, das ist Handarbeit,
aber die Vorlagen liegen alle bereit.

- [ ] Figma-Datei aufsetzen und befüllen mit:
  - Den beiden Favicon-Varianten samt Größenstaffel und Specs.
    `images/logos/favicon-board.svg` importiert genau das als Frame.
  - Den vier Typefaces (Fraunces, Instrument Sans, JetBrains Mono,
    Caveat) mit der Type-Scale, wie sie in `css/shared.css` steht.
  - Den Farbtokens: `--paper`, `--ink`, `--ink-2`, `--rule` und dem
    Accent, der über `--accent-hue` durchstimmbar ist. Der Hue ist eine
    Besonderheit, die eine statische Palette nicht abbildet.
  - Der Scribble-Sprache (Kreise, Unterstreichungen, Pfeile).
  - Den wiederkehrenden Bausteinen: Buttons, Ledger-Zeilen der Work-Liste,
    Case-Cover, Impact-Zellen, Limitations-Karte mit Flip.
  - Dem Share-Bild-Layout (`images/og-card.png`, 1200x630).
- [ ] Dabei mitentscheiden: Was ist die Quelle der Wahrheit? Es gibt
      bereits einen Live-Styleguide unter `#/styleguide`, der die echten
      CSS-Werte ausliest. Zwei Quellen driften garantiert
      auseinander - entweder Figma führt und die CSS folgt, oder Figma
      ist bewusst nur der Entwurfsraum fürs Branding und der Styleguide
      bleibt maßgeblich.

## Homepage

- [ ] Stärker mit einem Visual arbeiten statt nur mit der Ledger-Liste.
      Bewusst zurückgestellt: solange es keine Case-Visuals gibt, lässt
      sich das nicht sinnvoll entscheiden.
- [x] Selected work von fünf auf drei Cases gekürzt (`HOME_CASE_COUNT`
      in `js/app.js`), "All work →" trägt den Rest.

## Neue Case Studies

- [ ] Limbic-Types als eigene Case ausgliedern (aktuell nur Unterpunkt im
      Research-Culture-Case). Generative Segmentierung von null an;
      Decision-Lead: "Wir konnten nicht sagen, wer unsere User sind - und
      Personas/JTBD passten nicht." Ehrlich rahmen als adaptierter Proxy
      ohne offizielles Tool und als einzelne Momentaufnahme.
      Opportunities-Flip: Follow-up-Interviews + Standard-Interview-Guide,
      um die Typen über Zeit zu validieren.
  - [ ] Offen: 6. Case ODER den Research-Culture-Case ersetzen /
        verschlanken?
  - [ ] Offen: konkrete Findings nennen oder auf Methode + Ansatz fokussieren?
- [ ] Research-Culture-Case: Limbic nur kurz erwähnen und auf die
      dedizierte Case verlinken (cross-link statt Wiederholung).
- [ ] Post-Cancellation-Survey als Discovery-Case. Erstmals eingeführter
      Touchpoint, reiner Erkenntnisgewinn - aber mit "und deshalb"-Frame
      (welche Entscheidung / Annahme-Korrektur folgte), damit es
      management-fest ist.
- [ ] Weitere reine Discovery-Projekte aus dem Daily Job sichten - evtl.
      mehrere zu einer Case bündeln.

## Cargoboard Split - Follow-ups (nach PR #154)

- [ ] Case 04 (Design System) Story-Body aufräumen: Section "Approach",
      Framework-Item "IA" und "Outcome"-Text referenzieren noch IA-Arbeit,
      die inzwischen komplett zu Case 05 gehört. Rebrand-Erwähnung bleibt.
- [ ] Case 05 (Website Relaunch) vom Platzhalter zum vollen Case ausbauen:
      echte `duration`, Subtitle ersetzen ("[Case study in progress]"),
      Story-Sections schreiben (Audit, IA-Ansatz, Marketer-Kollab,
      Dev-Hiring, Outcome).

## Blog (Gazette)

- [ ] Post: "Warum ich AI bei Quant traue, aber nicht bei Qual."
      Kontraintuitiver Hook, eine fettgedruckte Kernaussage (Richtung "Die
      Mathematik kann AI nicht fälschen, die Bedeutung schon"), den
      Survey-Python-How-to als Beweis-Abschnitt einbetten. Cross-Link zum
      bestehenden "I'm a better designer with AI"-Post, um den
      Python-Beat nicht zu wiederholen.
- [ ] Optional separat: reiner How-to-Post "Surveys mit Python auswerten".
      Nur, wenn klar vom Trust-Post differenziert (echte Pipeline:
      Cleaning, Testwahl, ddof-Detail, Output-Artefakt). Aus Post 1
      verlinken statt dort auszubreiten.
- [ ] Post: "Wie AI die UX-Maturity gesenkt hat." These: Gerade Orgs mit
      niedriger UX-Maturity und fehlendem Incentive, UX zu unterstützen,
      laufen mit den neuen AI-Möglichkeiten Gefahr, weiter abzurutschen.
      Wenn plötzlich alle Prototypen bauen können, fühlt sich das
      kurzfristig wie ein Gewinn an (Tempo, sichtbarer Output), tut aber
      eigentlich weh: design- und research-artige Outputs ohne
      UX-Kompetenz, Slop, der noch nicht als Slop erkannt wird, und ein
      noch schwächeres Argument, echte UX-Leute einzustellen. Der
      scheinbare Benefit kaschiert, dass die Org sich reifer fühlt, als
      sie ist. Knüpft an den "What it doesn't do"-Beat aus "I'm a better
      designer with AI" an (AI multipliziert Erfahrung, ersetzt sie
      nicht); offen, ob als kritischer Gegenpol dazu cross-verlinkt.

## ResearchOps / Prozess (später)

- [ ] Standard-Interview-Guide für regelmäßige Interviews aufsetzen;
      Limbic-Follow-up darin integrieren.
- [ ] Longitudinal: den Kern-Survey jährlich wiederholen, um die
      Nutzerbasis über Zeit zu beobachten, nicht nur als Momentaufnahme.

## Research-Tooling, Skills & Agents

Wiederverwendbare Bausteine, die projektübergreifend greifen - statt jedes
Mal bei null anzufangen.

- [ ] Eigenes Repo mit Research-Skills, die in verschiedenen Projekten
      angewendet werden können (gebündelt als wiederverwendbare
      Claude-Code-Skills/Agents).
- [ ] Spec-driven development (SDD) als Prozess (Skill/Agent) für Audits +
      Design-Prototypen - ein spec-getriebener, wiederholbarer Ablauf, der
      projektübergreifend funktioniert.
- [ ] Skill oder Agent für Python-Auswertungen von Surveys (Cleaning,
      Testwahl, ddof, reproduzierbarer Output). Knüpft an den
      Quant-vs-Qual-Blogpost an.
