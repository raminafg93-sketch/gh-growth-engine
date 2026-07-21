# Informationsarchitektur — Deckt jede Suchintention die richtige Seite?

Stand: 2026-07-21
Primärdatei für dieses Ergebnis. Betroffene Folgedateien: `05_WEBSITE_SEO/02_url-map.md`, `11_OPERATIONS/03_roadmap.md`, `13_REPORTS/03_content-gaps.md`, `13_REPORTS/05_priority-roadmap.md`
Basis: `00_GH_MASTER_CONTEXT.md`, `00_GH_PRINCIPLES.md`, `05_WEBSITE_SEO/*`, `03_OFFER/*`, `04_AUDIENCE/*`, `13_REPORTS/01–05`

## Auftrag und Maßstab

Kein klassischer SEO-Audit. Leitfrage: **Haben wir für jede Suchintention eines Unfallgeschädigten die richtige Seite?**

Bewertungsmaßstab durchgehend `00_GH_PRINCIPLES.md`: Priorisierung nach kurzfristigem geschäftlichen Nutzen (Priorität A), Conversion vor Design, eine URL = ein klarer Zweck, Bestand schützen vor Neuaufbau riskieren, bei fehlender Datengrundlage REVIEW statt Vermutung.

**Technische Grenze (unverändert seit `13_REPORTS/01_website-audit.md`):** Ein direkter Seitenzugriff auf `kfz-gutachtenhelden.de` ist aus dieser Arbeitsumgebung weiterhin nicht möglich (erneut geprüft, weiterhin HTTP 403 am Egress-Proxy). Dieser Report baut daher auf den bereits dokumentierten Befunden (`13_REPORTS/01_website-audit.md`, `02_url-inventory.csv`) plus einer strategischen Analyse der vorhandenen Such­intentions-, Zielgruppen- und Leistungsdateien auf. Er ist eine Architektur- und Priorisierungsentscheidung auf Basis von Suchintention und Geschäftslogik — keine neue technische Crawl-Aussage. Wo echte Ranking-/Traffic-Daten fehlen, bleibt die Einzelbewertung REVIEW.

---

## 1. Welche Suchintentionen decken wir bereits ab?

| Suchintention (Quelle) | Aktuell abgedeckt durch | Bewertung |
|---|---|---|
| „Kfz-Gutachter Hamburg" / Markensuche | `/` (Homepage) | teilweise — generisch, kein dediziertes Money-Keyword-Matching |
| „Leistungen" / Überblick Services | `/leistungen` (Sammelseite) | teilweise — ein URL für neun Leistungen, keine 1:1-Zuordnung |
| Rechtliche Pflichtangaben | `/impressum` | abgedeckt |
| Kontaktaufnahme | `/kontakt` | teilweise — Inhalt technisch nicht verifizierbar |

Das ist die **gesamte** aktuell auffindbare Abdeckung (siehe `13_REPORTS/02_url-inventory.csv`). Von den in `04_AUDIENCE/03_search-intents.md`, `04_AUDIENCE/02_problems-and-objections.md` und `03_OFFER/01_services.md` dokumentierten Suchintentionen hat **keine einzige** eine eigene, dedizierte Landingpage.

## 2. Welche Suchintentionen fehlen komplett?

**Akut / hohe Dringlichkeit**
- Was tun nach dem Unfall? (Schritt-für-Schritt)
- Unfallgegner ist schuld – was jetzt?
- Kfz-Gutachter nach Unfall Hamburg (als eigene, keyword-fokussierte Seite statt nur Homepage)

**Versicherung / Vertrauen (höchste Nähe zu Frust + Conversion)**
- Versicherung schickt eigenen Gutachter — muss ich den akzeptieren?
- Versicherung zahlt zu wenig / kürzt das Gutachten

**Entscheidung**
- Kostenvoranschlag oder Gutachten — was lohnt sich wann?
- Ab wann lohnt sich ein Gutachten?
- Unfallschaden auszahlen lassen (fiktive Abrechnung)

**Schadenpositionen (konkrete, geldwerte Suchanfragen)**
- Wertminderung
- Nutzungsausfall
- Restwert
- Wiederbeschaffungswert
- Totalschaden

**Leistungen einzeln (aktuell nur in der Sammelseite `/leistungen`)**
- Unfallgutachten Hamburg
- Schadengutachten Hamburg
- Wertgutachten Hamburg
- Kostenvoranschlag
- Kaufberatung
- Elektroauto-Gutachten

**Sekundäre Zielgruppen (B2B, niedrigere Priorität)**
- Werkstätten, Rechtsanwälte, Autohäuser, Kooperationspartner — keine eigene Ansprache auffindbar.

## 3. Welche Seiten konkurrieren miteinander?

- **`/` vs. `/home`** — `/home` trägt laut Google-Index noch den unveränderten SaaS-Template-Titel und ist inhaltlich vermutlich ein Duplikat oder Rest der echten Startseite. Direktes Duplicate-Content-Risiko um dieselbe Marken-/Navigationsanfrage. Ohne echten Seitenzugriff nicht final entscheidbar (REVIEW), Tendenz: Konsolidierung auf `/`.
- **`/features` vs. `/leistungen`** — `/features` trägt ebenfalls einen unkonfigurierten Template-Titel, thematisch (Feature-Liste) nah an einer Leistungsübersicht. Mögliche Überschneidung mit `/leistungen`. Ohne echten Seitenzugriff nicht final entscheidbar (REVIEW), Tendenz: Prüfen ob Inhalt in `/leistungen` gehört.
- **Zukünftiges Risiko:** Wenn neue Leistungsseiten (Abschnitt C) entstehen, ohne `/leistungen` gleichzeitig zur reinen Übersichts-/Hub-Seite umzubauen, konkurriert die Sammelseite mit den neuen Einzelseiten um dieselben Suchbegriffe. `/leistungen` muss beim Ausbau strukturell zur Hub-Seite werden (verlinkt aus, rankt nicht selbst auf Einzel-Keywords).

## 4. Welche Landingpages müssen neu erstellt werden?

Siehe priorisierte Liste in Abschnitt C.

## 5. Welche Seiten sollten später zusammengeführt werden?

- `/home` → voraussichtlich Konsolidierung mit `/` (nach Bestätigung, dass keine eigenständige Funktion besteht).
- `/features` → voraussichtliche Prüfung auf Zusammenführung mit `/leistungen`, falls der Inhalt tatsächlich Leistungsmerkmale beschreibt.
- Mittelfristig: Sollten Schadenpositionen (Wertminderung, Nutzungsausfall) als sehr kurze Einzelseiten zu wenig eigenständigen Suchwert entwickeln, können sie langfristig zu einer gemeinsamen Ratgeber-Übersicht „Schadenpositionen nach dem Unfall" zusammengeführt werden — das ist heute noch nicht entscheidbar (REVIEW, abhängig von echten Rankingdaten nach Veröffentlichung).

## 6. Welche Seiten sind für Google besonders wichtig?

Bewertung nach Suchvolumen-Logik aus `06_GOOGLE/01_google-seo.md` (Zielbegriffe: „Kfz Gutachter Hamburg", „Unfallgutachten Hamburg", „Schadengutachten Hamburg", „unabhängiger Gutachter Hamburg") und Suchintentionsdichte:

1. `/` (Homepage) — Marken- und Hauptsuchanfragen, wichtigste Vertrauens- und Einstiegsseite
2. `/leistungen/unfallgutachten-hamburg` (neu) — zentraler Money-Keyword-Treffer
3. `/leistungen/schadengutachten-hamburg` (neu) — zweiter zentraler Money-Keyword-Treffer
4. `/ratgeber/versicherung-zahlt-zu-wenig` (neu) — hohes vermutetes Suchvolumen, hohe Dringlichkeit
5. `/ratgeber/totalschaden` (neu) — sehr häufig gesuchter Begriff nach Unfällen
6. Google Business Profile / lokale Signale (kein Repo-URL, aber direkt verzahnt mit `/` und den Leistungsseiten)

## 7. Welche Seiten bringen vermutlich die meisten Anfragen?

Ohne Analytics/Search-Console-Daten (`10_DATA_INSIGHTS/02_data-sources.md`) ist das eine qualifizierte Einschätzung nach Dringlichkeit und Geldbezug der Suchintention, nicht belegte Messung — entsprechend als Einschätzung, nicht als Faktum zu lesen:

1. `/leistungen/unfallgutachten-hamburg` — direktester Kaufabschluss-Intent
2. `/ratgeber/versicherung-zahlt-zu-wenig` bzw. „Kürzung durch Versicherung" — Nutzer ist bereits frustriert und sucht aktiv Hilfe
3. `/ratgeber/wertminderung` und `/ratgeber/nutzungsausfall` — konkreter Geldbezug erzeugt hohe Handlungsbereitschaft
4. `/ratgeber/totalschaden` — Entscheidungsmoment mit hohem Beratungsbedarf
5. `/` (Homepage) — Marken-/Direktanfragen, v. a. nach Empfehlung

---

## A. Die ideale Seitenstruktur

```
/                                   Homepage (Marke, Vertrauen, Einstieg in Top-Leistungen)
/leistungen                         Hub: Übersicht aller Leistungen, verlinkt auf Einzelseiten
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
/partner                            später: Werkstätten, Rechtsanwälte, Autohäuser (sekundäre Zielgruppe)
/kontakt
/impressum
/datenschutz
```

Prinzip (siehe `00_GH_PRINCIPLES.md`, Abschnitt 6): eine URL, ein klarer Zweck. `/leistungen` und `/ratgeber` sind Hubs, die verlinken — sie ranken nicht auf dieselben Keywords wie ihre Unterseiten.

## B. Bestehende Seiten mit Bewertung

| URL | Bewertung | Begründung |
|---|---|---|
| `/` | IMPROVE | Solide Basis, sollte künftig aktiv auf die wichtigsten neuen Leistungs- und Ratgeberseiten verlinken |
| `/home` | REVIEW | Vermutlich Template-Duplikat der Startseite; Tendenz Konsolidierung/Redirect auf `/`, aber ohne echten Seitenzugriff nicht final entscheidbar |
| `/features` | REVIEW | Unkonfigurierter Template-Titel; Tendenz Prüfung auf Zusammenführung mit `/leistungen`, nicht final entscheidbar |
| `/leistungen` | IMPROVE | Muss von Sammelseite zu echtem Hub mit Verlinkung auf neue Einzelseiten umgebaut werden |
| `/kontakt` | REVIEW | Grundfunktion vermutlich vorhanden, CTA-/Conversion-Elemente technisch nicht verifizierbar |
| `/impressum` | KEEP | Pflichtseite, kein Änderungsbedarf erkennbar |
| `/datenschutz` | REVIEW | Existenz nicht bestätigt; falls fehlend, entspricht das NEW mit hoher Dringlichkeit (rechtlich) |

Keine bestehende URL wird gelöscht oder gemergt, ohne echten Seitenzugriff und ohne Freigabe (siehe `13_REPORTS/04_migration-risks.md`).

## C. Priorisierte Liste neuer Landingpages

| # | Landingpage | Begründung (Geschäftsnutzen) |
|---|---|---|
| 1 | `/leistungen/unfallgutachten-hamburg` | Kernleistung, direktester Conversion-Pfad, zentrales Google-Ziel-Keyword |
| 2 | `/ratgeber/versicherung-zahlt-zu-wenig` | Höchste Dringlichkeit/Frust, Nutzer sucht sofort Hilfe |
| 3 | `/ratgeber/wertminderung` | Konkreter Geldbezug, hohe Handlungsbereitschaft |
| 4 | `/ratgeber/nutzungsausfall` | Konkreter Geldbezug, hohe Handlungsbereitschaft |
| 5 | `/ratgeber/totalschaden` | Sehr häufiger, entscheidungskritischer Suchbegriff |
| 6 | `/leistungen/schadengutachten-hamburg` | Zweites zentrales Google-Ziel-Keyword |
| 7 | `/ratgeber/versicherung-schickt-gutachter` | Löst zentralen Einwand „Muss ich den Gutachter der Versicherung akzeptieren?" |
| 8 | `/leistungen/wertgutachten-hamburg` | Eigenständige Leistung, eigene Suchintention (kein Unfall) |
| 9 | `/ratgeber/kostenvoranschlag-oder-gutachten` | Löst zentralen Einwand „Reicht die Werkstatt?" |
| 10 | `/ratgeber/was-tun-nach-dem-unfall` | Sehr hohes Suchvolumen, starker Top-of-Funnel-Hub für interne Verlinkung |
| 11 | `/ratgeber/fiktive-abrechnung` | Deckt „Unfallschaden auszahlen lassen" |
| 12 | `/ratgeber/restwert` / `/ratgeber/wiederbeschaffungswert` | Ergänzende Schadenpositionen, eher informationell |
| 13 | `/leistungen/kostenvoranschlag`, `/leistungen/kaufberatung`, `/leistungen/elektroauto-gutachten` | Vervollständigen das Leistungsportfolio, geringeres vermutetes Suchvolumen |
| 14 | `/partner` (Werkstätten/Anwälte/Autohäuser) | Sekundäre Zielgruppe, strategisch später |

## D. Priorisierte Liste neuer Blogartikel (Ratgeber-Content)

| # | Artikel | Zweck |
|---|---|---|
| 1 | Was tun nach einem Unfall in Hamburg? (Schritt-für-Schritt) | Top-of-Funnel-Hub, verlinkt in alle anderen Artikel |
| 2 | Muss ich den Gutachter der Versicherung akzeptieren? | Vertrauen aufbauen, zentraler Einwand lösen |
| 3 | Versicherung kürzt das Gutachten — was jetzt? | Hohe Dringlichkeit, direkte Handlungsaufforderung |
| 4 | Wertminderung nach dem Unfall — Anspruch und Höhe erklärt | Geldbezug, hohe Conversion-Nähe |
| 5 | Nutzungsausfallentschädigung — wie viel steht mir zu? | Geldbezug, hohe Conversion-Nähe |
| 6 | Totalschaden — was passiert jetzt? | Entscheidungsmoment, hoher Beratungsbedarf |
| 7 | Kostenvoranschlag oder Gutachten — was lohnt sich wann? | Löst zentralen Einwand, unterstützt Entscheidung |
| 8 | Unfallgegner ist schuld — diese Schritte sichern deinen Anspruch | Akute Situation, hohe Sucherelevanz |
| 9 | Fiktive Abrechnung erklärt — Unfallschaden auszahlen lassen | Deckt Entscheidungsphase ab |
| 10 | Restwert und Wiederbeschaffungswert einfach erklärt | Ergänzende Aufklärung, unterstützt Vertrauen |

## E. Interne Verlinkungsstrategie

- **Hub-and-Spoke:** `/leistungen` und `/ratgeber` sind Hubs. Jede neue Einzelseite ist von ihrem Hub aus erreichbar und verlinkt zurück.
- **Keine Waisenseiten:** Jede neue Seite muss innerhalb von maximal zwei Klicks von der Homepage erreichbar sein.
- **Homepage verlinkt aktiv** auf die Top-4-Prioritätsseiten aus Abschnitt C (Unfallgutachten Hamburg, Versicherung zahlt zu wenig, Wertminderung, Totalschaden) statt nur auf `/leistungen`.
- **Ratgeber → Leistungen:** Jeder Blogartikel verlinkt auf die passende Leistungsseite plus den primären CTA (WhatsApp), nie nur auf die Startseite.
- **Leistungen → Ratgeber:** Jede Leistungsseite verlinkt auf 1–2 passende Ratgeber-Artikel zur Vertrauensbildung, ohne vom CTA abzulenken.
- **Ein Ziel-Keyword pro Seite:** Keine zwei Seiten konkurrieren um dieselbe Suchintention (löst die in Abschnitt 3 identifizierten Konflikte strukturell).
- **`/home` und `/features` bleiben unverlinkt**, bis ihre Funktion geklärt ist (siehe Abschnitt B).

## F. Empfohlene URL-Struktur

- Sprache: Deutsch, klein geschrieben, Bindestriche statt Unterstriche.
- Zwei klare Silos: `/leistungen/*` für transaktionale Serviceseiten, `/ratgeber/*` für informationelle/Entscheidungs-Inhalte.
- Lokaler Bezug direkt in den wichtigsten Leistungs-URLs (`-hamburg`-Suffix) dort, wo es die Suchintention stützt; bei den Ratgeber-Artikeln nicht zwingend nötig, da diese eher bundesweit/informativ gesucht werden.
- Bestehende URLs (`/`, `/leistungen`, `/kontakt`, `/impressum`) bleiben erhalten — keine Umbenennung ohne zwingenden Grund (Bestandsschutz vor Neuaufbau, `00_GH_PRINCIPLES.md` Abschnitt 4).
- `/datenschutz` ergänzen, sobald Existenz/Fehlen bestätigt ist.

## G. Reihenfolge der Umsetzung nach Geschäftsnutzen

1. **`/leistungen/unfallgutachten-hamburg`** — höchster direkter Conversion-Nutzen, zentrales Google-Ziel-Keyword, keine Abhängigkeit von anderen Seiten.
2. **`/ratgeber/versicherung-zahlt-zu-wenig`** — höchste Dringlichkeit, geringe Erstellungskomplexität, hohe erwartete Nachfrage.
3. **`/ratgeber/wertminderung`** und **`/ratgeber/nutzungsausfall`** — direkter Geldbezug, vergleichsweise kompakter Content, hohe Handlungsbereitschaft der Nutzer.
4. **`/leistungen` zum Hub umbauen** — muss parallel zu Schritt 1–3 erfolgen, damit keine neue interne Konkurrenz entsteht (siehe Abschnitt 3).
5. **`/ratgeber/totalschaden`** — hohes Suchvolumen, entscheidungskritisch.
6. **`/leistungen/schadengutachten-hamburg`** — zweites zentrales Google-Ziel-Keyword.
7. **`/ratgeber/versicherung-schickt-gutachter`** — löst zentralen Vertrauens-Einwand.
8. **`/home` und `/features` klären** — Voraussetzung, um Duplicate-Content-Risiko zu beenden, bevor neue Seiten live gehen und um interne Verlinkung sauber zu halten.
9. **Restliche Leistungsseiten** (`Wertgutachten`, `Kostenvoranschlag`, `Kaufberatung`, `Elektroauto-Gutachten`) und **restliche Ratgeber-Artikel**.
10. **`/partner`** für sekundäre Zielgruppen — strategisch sinnvoll, aber ohne unmittelbaren Effekt auf das Kernziel „mehr qualifizierte Unfallkunden".

---

## Verwandte Dateien

- `05_WEBSITE_SEO/02_url-map.md` — wird um diese Struktur ergänzt
- `11_OPERATIONS/03_roadmap.md` — Phase 3 profitiert direkt von diesem Report
- `13_REPORTS/03_content-gaps.md`, `04_migration-risks.md`, `05_priority-roadmap.md` — vorherige Analysen, hier vertieft und in eine konkrete Struktur überführt
