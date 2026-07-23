# Pipeline-Stufenmodell (konzeptionell)

Stand: 2026-07-23
**Primärquelle für:** die abstrakten Stufen, die Rohmaterial auf dem Weg zu veröffentlichtem Content durchläuft — unabhängig davon, welches Werkzeug eine Stufe später ausführt.
**Nicht Primärquelle für:** technische Implementierung einzelner Stufen (Phase 9), konkrete Freigaberegeln je Stufe (`02_approval-principle.md`).

## Die fünf Stufen

| # | Stufe | Zweck | Verantwortlich (geschäftlich) | Referenzierte Primärquelle |
|---|---|---|---|---|
| 1 | **Input** | Rohmaterial mit Begleitangaben erfasst | Team, das Material einbringt (i. d. R. Social Media Team, Local SEO Team) | `01_INPUT/01_input-specification.md` |
| 2 | **Erstellung** | Content aus Rohmaterial + Grundnarrativ erzeugt (Text, Bild, Video/Reel, Untertitel, Plattformvariante) | Content Team (Narrativ), Social Media Team (Kanal-Adaption) | `09_CONTENT_ENGINE/01_content-system.md`, `01_BRAND/05_design-system-channels.md` |
| 3 | **Freigabe** | Erstellter Content wird gegen Qualität, Marke, Claims und Recht geprüft | QA Team (Prüfung), Brand Manager (Marke/Claims) | `09_CONTENT_ENGINE/02_content-quality.md`, `11_OPERATIONS/02_proof-register.md`, `02_approval-principle.md` |
| 4 | **Veröffentlichung** | Freigegebener Content erreicht den jeweiligen Kanal | Social Media Team, Local SEO Team, Framer/Web Team (je nach Kanal) | `07_META/**`, `06_GOOGLE/02_google-business-profile.md`, `docs/architecture/design-system.md` |
| 5 | **Auswertung** | Ergebnis fließt in Kennzahlen zurück | Operations Manager (Prozessqualität), zukünftige Phase 5 (Performance & Analytics System) | `10_DATA_INSIGHTS/01_kpi-system.md` |

## Grundsätze, die für jede Stufe gelten

- Jede Stufe hat genau ein verantwortliches Team — keine Stufe wird von einem Agenten „im Vorbeigehen" für ein anderes Team miterledigt.
- Der Übergang zwischen Stufen ist ein Handoff im bestehenden Format (`15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`) — es entsteht kein neues, automatisierungsspezifisches Handoff-Format, solange das bestehende ausreicht.
- Stufe 3 (Freigabe) kann nicht übersprungen werden, auch wenn Stufe 2 automatisiert erfolgt — siehe `02_approval-principle.md`.
- Stufe 4 (Veröffentlichung) ist der Punkt, an dem Autonomiestufen (`12_AI_SYSTEM/03_github-autonomy.md`) am strengsten greifen, weil hier externe Sichtbarkeit entsteht.

## Was dieses Modell bewusst nicht festlegt

- Welche Stufen automatisiert vs. manuell ablaufen (Phase 9)
- Technische Übergabeformate zwischen Stufen (APIs, Dateiformate — Phase 9)
- Konkrete Werkzeuge je Stufe

## Verwandte Dateien

- `01_INPUT/01_input-specification.md`
- `03_AGENTS/01_agent-interface-principles.md`
- `02_approval-principle.md`
- `15_GROWTH_TEAM/04_HANDOFFS/00_handoff-principles.md`
- `docs/roadmaps/growth-engine-masterplan.md` (Phase 9)
