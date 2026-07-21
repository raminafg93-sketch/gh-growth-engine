# URL Map

Erster Bestandsaudit durchgeführt (2026-07-21) — Details siehe `13_REPORTS/01_website-audit.md`
und `13_REPORTS/02_url-inventory.csv`. Ein vollständiger technischer Crawl war in dieser
Arbeitsumgebung nicht möglich (Domain durch Netzwerkrichtlinie blockiert), daher basiert die
folgende Übersicht auf über Google indizierten Seiten und ist entsprechend lückenhaft. Alle
Entscheidungen unten sind REVIEW, bis ein echter Seitenzugriff vorliegt.

## Aktueller Stand (2026-07-21)

| URL | Seitentyp | Entscheidung | Anmerkung |
|---|---|---|---|
| `/` | Homepage | REVIEW | Title korrekt konfiguriert |
| `/home` | vermutl. Template-Duplikat | REVIEW | unkonfigurierter Template-Title, P1-Risiko |
| `/features` | vermutl. Template-Seite | REVIEW | unkonfigurierter Template-Title, P1-Risiko |
| `/impressum` | Rechtsseite | REVIEW | Title korrekt konfiguriert |
| `/kontakt` | Kontaktseite | REVIEW | Title korrekt konfiguriert |
| `/leistungen` | Leistungsübersicht | REVIEW | einzige gefundene Sammelseite für alle Leistungen |
| `/datenschutz` (vermutet) | Rechtsseite | REVIEW | nicht über Google auffindbar, Existenz ungeklärt |

Vollständige Datenpunkte je URL: `13_REPORTS/02_url-inventory.csv`.

## Empfohlene Zielstruktur (2026-07-21)

Auf Basis der Informationsarchitektur-Analyse (`13_REPORTS/06_information-architecture.md`) —
Suchintentions-Abgleich statt reiner Technik-Check. Vollständige Begründung, Priorisierung und
Umsetzungsreihenfolge dort. Zielstruktur:

```
/                                   Homepage
/leistungen                         Hub: Leistungsübersicht
/leistungen/unfallgutachten-hamburg
/leistungen/schadengutachten-hamburg
/leistungen/wertgutachten-hamburg
/leistungen/kostenvoranschlag
/leistungen/kaufberatung
/leistungen/elektroauto-gutachten
/ratgeber                           Hub: Ratgeber-Übersicht
/ratgeber/was-tun-nach-dem-unfall
/ratgeber/unfallgegner-ist-schuld
/ratgeber/versicherung-schickt-gutachter
/ratgeber/versicherung-zahlt-zu-wenig
/ratgeber/kostenvoranschlag-oder-gutachten
/ratgeber/wertminderung
/ratgeber/nutzungsausfall
/ratgeber/totalschaden
/ratgeber/restwert
/ratgeber/wiederbeschaffungswert
/ratgeber/fiktive-abrechnung
/partner                            später: sekundäre Zielgruppen
/kontakt
/impressum
/datenschutz
```

## Audit-Ziel

Bestätigte Domain: https://www.kfz-gutachtenhelden.de

Jede URL erhält:

- bestehende URL
- Seitentyp
- primäre Suchintention
- Ranking-Daten
- Conversion-Ziel
- Entscheidung: KEEP, IMPROVE, MERGE, REDIRECT, NEW oder REVIEW
- neue Ziel-URL
- interne Links

## Statuswerte

- KEEP
- IMPROVE
- MERGE
- REDIRECT
- NEW
- REVIEW: Eine manuelle Prüfung ist erforderlich, weil Daten fehlen oder noch keine eindeutige Entscheidung möglich ist.
