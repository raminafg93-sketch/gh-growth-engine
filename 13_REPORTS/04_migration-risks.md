# Migrationsrisiken — kfz-gutachtenhelden.de

Stand: 2026-07-21
Basis: `13_REPORTS/01_website-audit.md`

Ziel dieser Datei: Risiken benennen, die vor einem Website-Relaunch (Phase 3 der Roadmap) geklärt sein müssen, damit bestehende Rankings, Trust und Conversion nicht verloren gehen.

## P1 — blockiert Wachstum/Migration

1. **Unkonfigurierte Template-Seiten im Google-Index (`/home`, `/features`).**
   Beide tragen noch den Titel des zugrunde liegenden SaaS-Templates ("SaaS Wind"). Risiko: Duplicate-Content mit der echten Startseite (`/home` vs. `/`), verwirrende/unprofessionelle Snippets in der Google-Suche, möglicher Trust-Verlust bei Nutzern, die diese Seite direkt sehen. **Vor jeder Migration klären:** Werden diese URLs aktuell noch verlinkt oder sind sie Crawl-Reste? Erst nach echtem Seitenzugriff entscheidbar (KEEP/MERGE/REDIRECT) — aktuell REVIEW.
2. **Fehlende Datenschutzerklärung nicht bestätigbar.**
   Über Google nicht auffindbar. Falls die Seite tatsächlich fehlt oder nicht verlinkt ist, ist das ein rechtliches Risiko (DSGVO), das vor jeder Migration und jedem Ads-Ausbau geklärt werden muss. Keine Vermutung — REVIEW mit hoher Dringlichkeit.
3. **Kein technischer Zugriff für vollständigen Crawl.**
   Ohne echten Zugriff (Statuscodes, Canonicals, robots-Meta, echte URL-Liste über Sitemap) ist eine Migrationsplanung mit Redirect-Mapping nicht sicher möglich. Dieses Repository kann aktuell nur die über Google sichtbaren 6 URLs berücksichtigen — es können weitere, nicht indexierte URLs existieren, die vor einer Migration nicht versehentlich wegfallen dürfen ("Bestehende URLs dürfen nicht vorschnell entfernt werden").

## P2 — hohes SEO-/Conversion-Potenzial betroffen

4. **Fehlende dedizierte Leistungsseiten** (siehe `03_content-gaps.md`) bedeuten: Bei einer Migration auf eine neue Architektur mit mehr URLs entstehen viele **neue** URLs ohne bestehende Rankings, die man nicht "retten" muss — aber auch keine Referenz-Performance-Daten hat, um Prioritäten zu setzen (siehe Data-Sources-Lücke).
5. **Keine Analytics-/Search-Console-Daten angebunden** (`10_DATA_INSIGHTS/02_data-sources.md`). Jede Migrationsentscheidung, die auf Traffic oder Rankings basieren sollte, ist aktuell nicht evidenzbasiert möglich.

## P3 — sinnvoll vor Migration zu klären

6. **ProvenExpert-Trust-Widget** extern eingebunden (vermutet) — bei einer technischen Migration prüfen, ob dieses Element (Bewertungen) mitgenommen/neu eingebunden werden muss, da es ein zentrales Trust-Element sein könnte.

## Ausdrücklich nicht empfohlen

- Keine der oben genannten URLs löschen, redirecten oder verändern, ohne echten Seitenzugriff und ohne Freigabe von Ramin (Autonomiestufe ROT/GELB je nach Fall, siehe `12_AI_SYSTEM/03_github-autonomy.md`).
