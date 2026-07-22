# Verantwortlichkeits-Matrix

**Status:** Architektur — Zuordnung zu bestehenden Primärdateien/Ordnern; inhaltliche Mandate noch nicht ausgefüllt
**Primärdatei für:** welches Team/welche Rolle für welchen Bereich des Repositories primär zuständig ist

Grundregel wie in `00_GH_DOCUMENT_MAP.md`: Diese Matrix ordnet Zuständigkeit zu, sie verschiebt keine fachlichen Primärdateien. Bei Widerspruch gilt weiterhin die fachliche Primärdatei.

## Level 1 — Management

| Rolle | Primär verantwortlich für | Trägt bei zu | Autonomiestufe (Regelfall) | Berichtet an |
|---|---|---|---|---|
| Growth Director | `00_GH_MASTER_CONTEXT.md`, `11_OPERATIONS/03_roadmap.md`, `docs/roadmaps/**` | Priorisierung aller Level-2-Teams | GRÜN/GELB je nach Thema | Ramin |
| Brand Manager | `01_BRAND/**`, `02_COMPANY/**` | Content Team, Social Media Team, SEO Team | GRÜN/GELB je nach Thema | Ramin |
| Operations Manager | `11_OPERATIONS/**`, `12_AI_SYSTEM/**` | alle Teams (Prozesse, Übergaben) | GRÜN | Ramin |

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
| QA Team | `13_REPORTS/**`, `.claude/skills/website-inventory/` | alle Teams (Prüfung vor Freigabe/Merge) | GRÜN | Operations Manager |

## Hinweis zur Autonomiestufen-Spalte

Die Spalte "Autonomiestufe (Regelfall)" ist eine Einordnungshilfe für den typischen Fall dieses Teams, keine eigenständige Regel. Maßgeblich bleibt ausschließlich `12_AI_SYSTEM/03_github-autonomy.md` — insbesondere gilt dort z. B. explizit, dass Google-/Meta-Ads-Budgets und Live-Domain-Änderungen immer ROT sind, unabhängig davon, welches Team daran arbeitet.

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `15_GROWTH_TEAM/01_LEVEL_1_MANAGEMENT/00_management-charter.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
- `00_GH_DOCUMENT_MAP.md`
