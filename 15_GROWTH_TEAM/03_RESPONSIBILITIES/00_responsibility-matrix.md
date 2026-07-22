# Verantwortlichkeits-Matrix

**Status:** Level 1 und Level 2 vollständig ausgearbeitet und cross-geprüft (Stand 2026-07-22)
**Primärdatei für:** welches Team/welche Rolle für welchen Bereich des Repositories primär zuständig ist

Grundregel wie in `00_GH_DOCUMENT_MAP.md`: Diese Matrix ordnet Zuständigkeit zu, sie verschiebt keine fachlichen Primärdateien. Bei Widerspruch gilt weiterhin die fachliche Primärdatei.

## Level 1 — Management

| Rolle | Primär verantwortlich für | Trägt bei zu | Autonomiestufe (Regelfall) | Berichtet an |
|---|---|---|---|---|
| Growth Director | `00_GH_MASTER_CONTEXT.md` (Gesamtaktualität), `11_OPERATIONS/03_roadmap.md`, `docs/roadmaps/**` | Priorisierung aller Level-2-Teams | GRÜN/GELB je nach Thema | Ramin |
| Brand Manager | `01_BRAND/**`, `02_COMPANY/**`, `11_OPERATIONS/02_proof-register.md` | Content Team, Social Media Team, SEO Team, Conversion Team, Google Ads Team, Framer/Web Team | GRÜN/GELB je nach Thema | Ramin |
| Operations Manager | `11_OPERATIONS/01_decision-log.md`, `12_AI_SYSTEM/**`, Pflege von `00_GH_DOCUMENT_MAP.md` | alle Teams (Prozesse, Übergaben), besonders QA Team | GRÜN | Ramin |

**Hinweis zur Abgrenzung innerhalb von `11_OPERATIONS/`** (Ergebnis des Level-1-Cross-Checks vom 2026-07-22): `11_OPERATIONS/` ist kein einheitlich einer Rolle zugeordneter Ordner, sondern nach Inhalt aufgeteilt — `03_roadmap.md` (Priorisierung) gehört dem Growth Director, `02_proof-register.md` (Claims/Nachweise) dem Brand Manager, `01_decision-log.md` (strukturelle Entscheidungen/Prozess) dem Operations Manager. Details und Begründung: `15_GROWTH_TEAM/01_LEVEL_1_MANAGEMENT/00_management-charter.md`.

## Level 2 — Fachteams

| Team | Primär verantwortlich für | Trägt bei zu | Autonomiestufe (Regelfall) | Berichtet an |
|---|---|---|---|---|
| SEO Team | `05_WEBSITE_SEO/**`, `06_GOOGLE/01_google-seo.md` | Content Team, Framer/Web Team | GRÜN/GELB | Growth Director |
| Local SEO Team | `06_GOOGLE/02_google-business-profile.md` | SEO Team | GRÜN | Growth Director |
| Content Team | `09_CONTENT_ENGINE/**` (Input aus `04_AUDIENCE/**`) | SEO Team, Social Media Team | GRÜN | Brand Manager |
| Conversion Team | `05_WEBSITE_SEO/03_conversion-system.md`, `docs/roadmaps/**` | Framer/Web Team, QA Team | GRÜN/GELB | Growth Director |
| Google Ads Team | `06_GOOGLE/03_google-ads.md` | Conversion Team | GELB/ROT (Budgets = ROT) | Growth Director |
| Social Media Team | `07_META/**` | Content Team | GRÜN/GELB | Brand Manager |
| Framer/Web Team | `apps/website/**`, `docs/architecture/**`, `docs/framer/**` | SEO Team, Conversion Team | GELB (produktiver Website-Code) | Operations Manager |
| QA Team | `13_REPORTS/**`, `.claude/skills/website-inventory/` | alle Teams (Prüfung vor Freigabe/Merge) | GRÜN | Growth Director (Ergebnis), fachlich eng abgestimmt mit Operations Manager |

**Hinweis zum Level-2-Cross-Check** (2026-07-22, sequenziell durchgeführt, siehe `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md` für den vollständigen Ablauf): Alle 8 Teams wurden nacheinander erstellt und jeweils sofort gegen die bereits bestehenden Rollen geprüft. Verfeinerung gegenüber dem ursprünglichen Architektur-Entwurf: QA Team berichtet Ergebnisse an den Growth Director (nicht an den Operations Manager) und stimmt sich nur fachlich mit dem Operations Manager ab — Ergebnis- vs. Prozessprüfung sind unterschiedliche Dinge. Keine weitere Korrektur nötig; alle übrigen Zuordnungen aus der Architekturphase (PR #20) haben sich bestätigt.

## Hinweis zur Autonomiestufen-Spalte

Die Spalte "Autonomiestufe (Regelfall)" ist eine Einordnungshilfe für den typischen Fall dieses Teams, keine eigenständige Regel. Maßgeblich bleibt ausschließlich `12_AI_SYSTEM/03_github-autonomy.md` — insbesondere gilt dort z. B. explizit, dass Google-/Meta-Ads-Budgets und Live-Domain-Änderungen immer ROT sind, unabhängig davon, welches Team daran arbeitet.

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `15_GROWTH_TEAM/01_LEVEL_1_MANAGEMENT/00_management-charter.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
- `00_GH_DOCUMENT_MAP.md`
