# Growth-Knowledge-Base — Übersicht

Stand: 2026-07-23
**Primärquelle für:** eine zentrale Wissensschicht, die Suchintentionen, Einwände, Versicherungswissen, FAQ und interne Verlinkungsregeln teamübergreifend zugänglich macht — für Menschen und künftige Agents gleichermaßen.
**Status:** Wissensfundament. Bewusst **keine große Bereinigung oder Verschiebung** bestehender Dateien in diesem Schritt — bestehende Primärquellen bleiben unverändert bestehen, dieser Ordner referenziert sie.

## Zweck

Die Analyse vor diesem Schritt hat gezeigt: Suchintentionen (`04_AUDIENCE/03_search-intents.md`), Einwände (`04_AUDIENCE/02_problems-and-objections.md`), Leistungen (`03_OFFER/01_services.md`) und die Ziel-URL-Struktur (`05_WEBSITE_SEO/02_url-map.md`, `13_REPORTS/06_information-architecture.md`) beschreiben teilweise dieselben Kernthemen aus unterschiedlichen Blickwinkeln, ohne dass eine Stelle existiert, die diese Blickwinkel zusammenführt. Zusätzlich fehlen zwei Wissensbereiche vollständig als Primärquelle: konsolidiertes Versicherungswissen und eine zentrale FAQ-Bibliothek (FAQ-Inhalte existieren bisher nur als Code in `apps/website/src/data/homepage.ts`).

Dieser Ordner schließt diese Lücken, **ohne** bestehende Primärquellen zu duplizieren oder zu verschieben.

## Grundregeln dieses Ordners

1. **Bestehende Primärquellen bleiben bestehen.** Keine Datei in `04_AUDIENCE/`, `05_WEBSITE_SEO/`, `03_OFFER/`, `09_CONTENT_ENGINE/`, `13_REPORTS/` wird durch diesen Schritt verändert, verschoben oder abgelöst.
2. **Referenzieren statt duplizieren.** Wo eine Information bereits eine Primärquelle hat, verweist dieser Ordner darauf, statt sie zu wiederholen.
3. **Überschneidungen werden dokumentiert, nicht aufgelöst.** Wo zwei bestehende Dateien dieselbe Information aus unterschiedlichen Blickwinkeln beschreiben, wird das hier benannt — eine Zusammenführung erfolgt nur nach separater Freigabe.
4. **Spätere Migration nur als Empfehlung.** Wo eine Konsolidierung sinnvoll erscheint, steht das als markierte Empfehlung in der jeweiligen Datei — keine Umsetzung in diesem Schritt.
5. **Keine erfundenen Fakten.** Wo Wissen (z. B. Versicherungswissen) tatsächlich fehlt, wird die Lücke offen markiert (`Status: REVIEW`/„noch nicht bestätigt"), statt Inhalte zu erfinden — Fortführung der bestehenden Regel aus `CLAUDE.md` und `09_CONTENT_ENGINE/02_content-quality.md` („auf bestätigten Fakten basieren").

## Abgrenzung zu bestehenden Bereichen

| Bereich | Bleibt Primärquelle für | Verhältnis zu dieser Wissensschicht |
|---|---|---|
| `03_OFFER/` | Leistungsportfolio, Kundenprozess | `01_THEMEN_REGISTER` referenziert die Leistungsliste, definiert sie nicht neu |
| `04_AUDIENCE/` | Zielgruppen, Einwände, Suchintentionen (jeweils als eigenständige Perspektive) | `01_THEMEN_REGISTER` führt diese Perspektiven zusammen, ersetzt keine der drei Dateien |
| `05_WEBSITE_SEO/` | URL-Status, Website-Strategie, Conversion-System | `01_THEMEN_REGISTER` und `04_INTERNAL_LINKING` referenzieren `02_url-map.md`, ändern daran nichts |
| `09_CONTENT_ENGINE/` | Content-Strategie- und Qualitätsprinzip | `02_INSURANCE_KNOWLEDGE` und `03_FAQ_LIBRARY` liefern Rohstoff, den Content-Team nach diesen Prinzipien verarbeitet — keine neue Qualitätsdefinition |
| `15_GROWTH_TEAM/` | Wer geschäftlich verantwortlich ist (Rollen, Freigaben) | Diese Wissensschicht definiert keine neue Zuständigkeit — SEO-, Content-, Conversion-, Social-Media- und Google-Ads-Team greifen unverändert nach ihren bestehenden Mandaten darauf zu |
| `16_CONTENT_PRODUCTION_SYSTEM/` | Architektur/Schnittstellen für künftige Content-Automation | Dort definierte Agenten würden diese Wissensschicht als Wissensquelle lesen — dieser Ordner ist keine Automation-Architektur, sondern reines Fachwissen |

## Struktur

| Datei | Inhalt |
|---|---|
| `00_growth-knowledge-base-overview.md` | diese Datei |
| `01_THEMEN_REGISTER/01_topic-register.md` | ein kanonischer Eintrag je Kernthema, referenziert Suchintention/Einwand/URL/Priorität statt sie zu wiederholen |
| `02_INSURANCE_KNOWLEDGE/01_insurance-knowledge.md` | Struktur für konsolidiertes Versicherungswissen — Inhalte großteils noch offen, bewusst nicht erfunden |
| `03_FAQ_LIBRARY/01_faq-library.md` | zentrales FAQ-Register, referenziert bestehende Code-FAQ statt sie zu duplizieren |
| `04_INTERNAL_LINKING/01_internal-linking-rules.md` | dauerhafte Verlinkungsregeln, referenziert aus `13_REPORTS/06_information-architecture.md` |

## Verwandte Dateien

- `03_OFFER/01_services.md`, `04_AUDIENCE/01–03`, `05_WEBSITE_SEO/01–03`, `09_CONTENT_ENGINE/01–02`
- `13_REPORTS/06_information-architecture.md`, `13_REPORTS/03_content-gaps.md`
- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `16_CONTENT_PRODUCTION_SYSTEM/00_content-production-system-overview.md`
- `docs/roadmaps/growth-engine-masterplan.md` (Phase 3)
