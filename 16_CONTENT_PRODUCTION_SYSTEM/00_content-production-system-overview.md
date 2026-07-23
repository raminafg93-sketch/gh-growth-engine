# Content-Production-System — Übersicht

Stand: 2026-07-23
**Primärquelle für:** die Architektur- und Schnittstellen-Grundlage eines künftigen, kanalübergreifenden Content-Production-Systems (Input, Agenten-Schnittstellen, Workflow-Stufen, Freigabe-Grundsatz).
**Status:** Fundament dokumentiert. **Keine Automation-Implementierung.** Die technische Umsetzung (Automatisierungsplattform, APIs, Tools, konkrete Agenten-Konfigurationen, tatsächliches Publizieren) bleibt Phase 9 des Masterplans (`docs/roadmaps/growth-engine-masterplan.md`).

## Warum dieser Ordner jetzt entsteht

An anderer Stelle entsteht — außerhalb dieses Repositories, in „Claude Design" — ein Automation-first Social Production System für GutachtenHelden (Foto-/Video-Input, automatische Content-Erstellung, Video-/Reel-Produktion, Untertitel, Plattformvarianten, Freigabe- und Publishing-Workflows, Analytics, mehrere spezialisierte Agents). Damit diese spätere Automation nicht bei null anfängt und nicht in Widerspruch zu bestehenden Primärquellen gerät, wird jetzt nur das **werkzeugunabhängige Fundament** dokumentiert: welche Struktur Input braucht, welchen Vertrag Agenten einhalten müssen, welche Stufen eine Content-Pipeline durchläuft, wie Freigabe grundsätzlich funktioniert. Keine dieser Fragen hängt davon ab, welches Tool sie später ausführt — deshalb ist es sinnvoll, sie jetzt zu klären.

## Warum „Content-Production-System" statt „Content-Automation"

Der Bereich umfasst langfristig mehr als Automatisierung: Content-Produktion, Asset-Übergaben und Agenten-Orchestrierung sind eigenständige Architekturfragen, die unabhängig davon gelten, ob ein Schritt automatisiert oder manuell ausgeführt wird. „Content-Production-System" folgt der bestehenden Namenslogik von `12_AI_SYSTEM` (Architektur-/Arbeitsweise-Ebene, kein einzelnes Werkzeug).

## Abgrenzung zu bestehenden Primärquellen

Dieser Ordner erweitert nichts inhaltlich, sondern beschreibt ausschließlich Struktur und Schnittstellen. Bei jeder inhaltlichen Frage gilt die jeweilige fachliche Primärquelle:

- **`09_CONTENT_ENGINE/`** bleibt alleinige Primärquelle für Content-Strategie und Qualitätskriterien (`01_content-system.md`, `02_content-quality.md`). Dieser Ordner definiert nicht, was guter Content ist — nur, in welcher Struktur Input/Output eine Pipeline durchläuft.
- **`15_GROWTH_TEAM/`** bleibt alleinige Primärquelle dafür, **wer geschäftlich verantwortlich ist** (Rollen, Entscheidungsrechte, Berichtslinien). Dieser Ordner definiert nur den **technischen Schnittstellen-Vertrag**, den ein künftiger Automatisierungs-Agent einhalten muss — er ersetzt keine Rolle und erfindet keine neue Zuständigkeit.
- **`14_ASSETS/REFERENCES/google-drive-structure.md`** bleibt alleinige Primärquelle für die Drive-Struktur. Dieser Ordner referenziert das dortige Asset-Zustandsmodell, dupliziert es nicht.
- **`12_AI_SYSTEM/03_github-autonomy.md`** bleibt alleinige Primärquelle für Autonomiestufen (GRÜN/GELB/ROT). Der Freigabe-Grundsatz in `04_WORKFLOWS/02_approval-principle.md` bildet diese Stufen nur auf Content-Production-Schritte ab, ändert sie nicht.
- **`docs/roadmaps/growth-engine-masterplan.md`**, Phase 9, bleibt Primärquelle dafür, wann tatsächliche Automation gebaut wird.

## Struktur

| Datei | Inhalt |
|---|---|
| `00_content-production-system-overview.md` | diese Datei — Zweck, Abgrenzung, Namensbegründung |
| `01_INPUT/01_input-specification.md` | konzeptionelle Struktur von Rohmaterial (Foto/Video) als Pipeline-Input |
| `03_AGENTS/01_agent-interface-principles.md` | Schnittstellen-Vertrag für künftige technische Agenten |
| `04_WORKFLOWS/01_pipeline-stages.md` | Abstrakte Pipeline-Stufen (Input → Erstellung → Freigabe → Veröffentlichung → Auswertung) |
| `04_WORKFLOWS/02_approval-principle.md` | Abbildung von GRÜN/GELB/ROT auf Content-Production-Schritte, offene Governance-Frage |

Bewusst noch nicht angelegt: Content-Templates (hängen an Phase 6 „Canva System" und der noch offenen Design-System-Lückenschließung aus Phase 2), Integrationen/APIs (Phase 9), konkrete Agenten-Konfigurationen (Phase 9). Die Nummerierung (01, 03, 04) lässt bewusst Lücken für `02_TEMPLATES/` und `05_INTEGRATIONS/`, damit spätere Ergänzung ohne Umbenennung möglich bleibt.

## Verwandte Dateien

- `09_CONTENT_ENGINE/01_content-system.md`, `02_content-quality.md`
- `15_GROWTH_TEAM/00_growth-team-overview.md`, `02_LEVEL_2_TEAMS/06_social-media-team/`, `03_content-team/`
- `14_ASSETS/REFERENCES/google-drive-structure.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
- `docs/roadmaps/growth-engine-masterplan.md` (Phase 9)
- `00_GH_DOCUMENT_MAP.md`
