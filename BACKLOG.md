# Backlog

Ein Ort für Ideen, die später umgesetzt werden sollen. Damit nichts im
Chat oder im Kopf verloren geht. Manuell gepflegt, wie `CLAUDE.md`.

Format: Checklisten-Items, nach Thema gruppiert. Abhaken (`- [x]`), wenn
erledigt. Neue Ideen einfach unten im passenden Abschnitt ergänzen, oder
einen neuen Abschnitt aufmachen.

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

- [ ] Navigation NICHT splitten - "Work" bleibt der einzige Eintrag.
- [ ] Filter-/Linsen-Chips auf der Work-Seite über die bestehenden Tags
      (z. B. "Research & Experimentation" / "Design & Systems"). Cases
      dürfen unter mehreren Linsen auftauchen, weil viele hybrid sind.
- [ ] Research-sprechende Lead-Zeile pro Case-Zeile (Frage statt nur
      Titel + Zahl).
- [ ] Reihenfolge: einen research-starken Case (Research-Culture oder
      Pricing) nach oben legen - steuert den ersten Eindruck am stärksten.

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

## App-Projekte (iOS, eigene Apps)

Kleine eigene Apps, gebaut mit Claude Code + Xcode. Voraussetzung: Mac
mit Xcode. Kosten: 0 € solange nur lokal installiert (7-Tage-Limit beim
kostenlosen Account), 99 € / Jahr fürs Apple Developer Program (gilt
für beliebig viele Apps, dauerhafte Installation, TestFlight, App
Store). Beide Apps: kein Account, keine Server, keine Datensammlung -
alles bleibt auf dem Gerät. Später evtl. als Portfolio-Material nutzbar
(Side Projects / Case).

- [ ] **Affirmations-App** (gestartet). Fertig bauen und rund machen.
      Aufwand: Kern ein Nachmittag, poliert 1-2 Tage.
- [ ] **Schrittzähler-App.** Cleaner Schrittzähler ohne Werbung und
      Clutter, mit eigenem Design als Differenzierung. Aufwand: Kern
      1-2 Tage, poliert 3-5 Tage, Watch zusätzlich 2-3 Tage.
  - [ ] Phase 1: iPhone-App + Homescreen-Widget, HealthKit-Anbindung
        (nur lesen, Standard-Berechtigungsdialog).
  - [ ] Phase 2: Lockscreen-Widget + optionale Erinnerung ("noch 6.000
        bis zum Ziel").
  - [ ] Phase 3: Watch-App + Komplikation fürs Zifferblatt. Spätestens
        hier die 99 € investieren.
  - Bekannte Grenze: Homescreen-Widgets aktualisieren nur alle 15-30
    Min (Apple-Update-Budget), kein Live-Ticker. Live-Zahlen zeigt die
    geöffnete App.
  - Falls App Store: Datenschutzerklärung nötig (HealthKit-Pflicht),
    Privacy-Label "Data Not Collected". "Kein Account, keine Werbung,
    alles lokal" als Store-Argument nutzen.
  - [ ] Launch: Bewertungs-Prompt über Apples natives StoreKit-Review
        (requestReview). Nicht sofort fragen, sondern nach
        Zufriedenheits-Signalen: z. B. Tagesziel mehrfach erreicht,
        App über 1-2 Wochen regelmäßig geöffnet. Apple-Regeln beachten:
        Nur der native Dialog ist erlaubt, max. 3 Prompts pro Jahr pro
        User, Apple entscheidet selbst, ob der Dialog wirklich
        erscheint. Deshalb den Trigger auf einen guten Moment legen
        (direkt nach Zielerreichung, nicht beim App-Start).

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
