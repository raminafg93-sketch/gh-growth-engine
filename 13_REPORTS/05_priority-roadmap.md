# Prioritäten-Roadmap — Website-Audit

Stand: 2026-07-21
Basis: `13_REPORTS/01_website-audit.md`, `03_content-gaps.md`, `04_migration-risks.md`

P1 = blockiert Wachstum oder Migration
P2 = hohes SEO- oder Conversion-Potenzial
P3 = sinnvoller Ausbau
P4 = später optimieren

## P1

1. **Technischen Website-Zugriff für diese Arbeitsumgebung freigeben** (oder Crawl-Export/Sitemap/HTML bereitstellen), damit ein vollständiger Audit mit echten Statuscodes, Canonicals, Meta-Daten und der vollständigen URL-Liste möglich wird. Ohne diesen Schritt bleiben alle inhaltlichen Entscheidungen REVIEW.
2. **`/home` und `/features` prüfen** — unkonfigurierte SaaS-Template-Seiten im Google-Index klären (existieren sie noch bewusst, sind sie Duplicate-Content, sollen sie konsolidiert werden?). Keine Aktion ohne echten Seitenzugriff und Freigabe.
3. **Datenschutzerklärung verifizieren** — bestätigen, dass eine rechtssichere `/datenschutz`-Seite existiert und verlinkt ist.

## P2

4. **Dedizierte Leistungsseiten aufbauen** für die konkretesten, kaufnahen Suchintentionen: Unfallgutachten, Wertgutachten, Wertminderung, Nutzungsausfall, Kostenvoranschlag (siehe `03_content-gaps.md`).
5. **Search Console und Analytics anbinden** (`10_DATA_INSIGHTS/02_data-sources.md`), damit künftige Audits auf echten Ranking-/Traffic-Daten statt REVIEW-Platzhaltern basieren.
6. **Ratgeber-/FAQ-Content für akute Suchintentionen** ("Was tun nach Unfall?", "Versicherung zahlt zu wenig") — hohe Nähe zur Conversion, aktuell keine Abdeckung erkennbar.

## P3

7. **Trust-Elemente (Qualifikation, DGuSV, seit 2019, >3 Mio. € Schadenersatz) als eigene, klar auffindbare Sektion/Seite** statt nur implizit auf der Startseite.
8. **ProvenExpert-Bewertungen als Trust-Signal technisch prüfen** und bei Migration bewusst mitnehmen.
9. **B2B-/Partnerseite** für Werkstätten, Rechtsanwälte, Autohäuser (sekundäre Zielgruppen laut Master Context) evaluieren.

## P4

10. **URL-Struktur und interne Verlinkung erst nach vollständigem Crawl final bewerten** (Redirect-Mapping, interne Linkgraph-Optimierung) — sinnvoll erst mit echten technischen Daten aus P1.
