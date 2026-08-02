# Launch

Was noch zwischen der Seite und dem Livegang steht. Alles, was den
Launch **nicht** blockiert, steht in `BACKLOG.md`.

## Erledigt (2026-08-02)

- **Google Fonts self-hosted.** Kein Request geht mehr an Google, damit
  ist das DSGVO-Thema erledigt. Die Material-Symbols-Icon-Font ist ganz
  raus: sie wurde für genau ein Glyph geladen (Burger-Menü), das ist
  jetzt ein Inline-SVG. Unterm Strich zwei externe Stylesheets und ein
  Preconnect weniger, also auch schneller.
- **Datenschutz** ergänzt um Canva- und Behance-Embeds und einen
  Font-Abschnitt.
- **Impressum**: Credits gefüllt (Typefaces, Icon, Bilder), Stand auf
  August 2026.
- **Favicon**: zwei Varianten in JetBrains Mono, A (`li`) ist verdrahtet,
  B (`l.`) liegt daneben.
- **Homepage** zeigt drei Cases statt fünf.
- **Wall of Fame** aus dem Footer, Route bleibt. PR #132 ist drin,
  PR #130 geschlossen.

## Offen

| Was | Wer |
| --- | --- |
| Case-Content überarbeiten | **Lisanne** |
| Restliche Texte gegenlesen | **Lisanne** |
| Case-Visuals: 8 Figures sind noch farbige Platzhalter | **Lisanne** liefert Bilder, ich baue sie ein |
| Impressum: `Phone: [optional]` und `DE[VAT number]` stehen live auf der Seite | **Lisanne** (oder sag Bescheid, dann nehme ich die beiden Zeilen raus) |
| Domain: `lisanne.design` oder `github.io`? Es gibt noch kein CNAME | **Lisanne** entscheidet, ich setze um |
| WIP-Zettel abschalten (Default auf `off`) | **ich**, als letzter Schritt vor dem Merge |

## Was ich komplett allein erledigen kann

Alles außer Content-Review und den drei Entscheidungen oben: Umsetzung,
Legal-Seiten, Meta und SEO, Assets einbauen, Aufräumarbeiten. Wenn du
mir die Bilder und die Impressumsdaten gibst und die Domain entscheidest,
kommt der Rest von mir.

## Reihenfolge

1. Diese PR grün mergen (Fonts, Legal, Favicon, Homepage).
2. Domain entscheiden, CNAME setzen, DNS braucht Vorlauf.
3. Content-Review und Visuals (dein Teil, der eigentliche Brocken).
4. WIP-Zettel aus, mergen, live.
