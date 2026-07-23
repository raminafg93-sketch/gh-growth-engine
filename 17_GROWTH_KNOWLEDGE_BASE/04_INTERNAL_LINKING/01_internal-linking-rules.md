# Interne Verlinkungsregeln

Stand: 2026-07-23
**Primärquelle für:** die dauerhaft geltenden internen Verlinkungsregeln — unabhängig vom Stand einzelner Landingpages.
**Herkunft:** diese Regeln standen bisher als Abschnitt E („Interne Verlinkungsstrategie") in `13_REPORTS/06_information-architecture.md`, einem auf 2026-07-21 datierten Analyse-Report. Ein Report ist laut `00_GH_DOCUMENT_MAP.md` eine Primärquelle für „Reports/Audits" — also für Analyseergebnisse zu einem Zeitpunkt, nicht für dauerhaft gültige Regeln. Diese Datei übernimmt die Regel-Funktion; `13_REPORTS/06_information-architecture.md` bleibt unverändert bestehen und bleibt Primärquelle für die zugrunde liegende Analyse und Priorisierung.

## Regeln

1. **Hub-and-Spoke:** `/leistungen` und `/ratgeber` sind Hubs. Jede neue Einzelseite ist von ihrem Hub aus erreichbar und verlinkt zurück.
2. **Keine Waisenseiten:** Jede neue Seite muss innerhalb von maximal zwei Klicks von der Homepage erreichbar sein.
3. **Homepage verlinkt aktiv** auf die jeweils höchstpriorisierten Seiten (siehe `13_REPORTS/06_information-architecture.md`, Abschnitt C) statt nur auf `/leistungen`.
4. **Ratgeber → Leistungen:** Jeder Ratgeber-/Blogartikel verlinkt auf die passende Leistungsseite plus den primären CTA (WhatsApp, siehe `05_WEBSITE_SEO/03_conversion-system.md`), nie nur auf die Startseite.
5. **Leistungen → Ratgeber:** Jede Leistungsseite verlinkt auf 1–2 passende Ratgeber-Artikel zur Vertrauensbildung, ohne vom CTA abzulenken.
6. **Ein Ziel-Keyword pro Seite:** Keine zwei Seiten konkurrieren um dieselbe Suchintention.
7. **Unklare Bestandsseiten bleiben unverlinkt**, bis ihre Funktion geklärt ist (aktuell betrifft das `/home` und `/features`, siehe `13_REPORTS/06_information-architecture.md`, Abschnitt B — Einzelfallbewertung bleibt dort, diese Regel gilt unabhängig vom Einzelfall).

## Geltungsbereich

Diese Regeln gelten für jede künftige Seite (Leistungsseiten, Ratgeber-Artikel), nicht nur für die in `13_REPORTS/06_information-architecture.md` bereits geplanten. Neue Seiten außerhalb dieser Liste unterliegen denselben Regeln.

## Verwandte Dateien

- `13_REPORTS/06_information-architecture.md` (zugrunde liegende Analyse und Priorisierung, unverändert Primärquelle für „welche Seite wann")
- `05_WEBSITE_SEO/02_url-map.md` (URL-Status)
- `05_WEBSITE_SEO/03_conversion-system.md` (CTA-Hierarchie)
- `01_THEMEN_REGISTER/01_topic-register.md`
