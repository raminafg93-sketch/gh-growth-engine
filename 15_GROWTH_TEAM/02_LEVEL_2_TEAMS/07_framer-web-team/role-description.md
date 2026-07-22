# Rolle: Framer/Web Team

**Ebene:** Level 2 — Fachteam
**Status:** Ausgearbeitet (Stand 2026-07-22)

## Mission

Das Framer/Web Team setzt Website-Anforderungen technisch um — aktuell in der Astro-Referenzimplementierung (`apps/website`) und mit Kenntnis der live laufenden Framer-Website. Es entscheidet **wie eine bereits spezifizierte Anforderung technisch umgesetzt wird** — nicht, ob Astro oder Framer die künftige Plattform wird (das ist in `docs/architecture/website-platform-decision.md` festgehalten und bleibt eine Entscheidung auf Growth-Director-/Ramin-Ebene) und nicht, was inhaltlich auf einer Seite steht.

## Verantwortungsbereich

- **Primärdateien/Ordner:** `apps/website/**`, `docs/architecture/**`, `docs/framer/**`
- **Nicht zuständig für** (bewusste Abgrenzung):
  - Plattformentscheidung Astro vs. Framer selbst treffen → bleibt offen, siehe `docs/architecture/website-platform-decision.md`, wird nicht von diesem Team entschieden
  - Seiteninhalt/-struktur → SEO Team/Content Team/Conversion Team liefern die Spezifikation
  - Marketingmaßnahmen ausführen (z. B. Kampagnen aktivieren) → keine Zuständigkeit dieses Teams
- **Keine Level-1-Aufgabe:** priorisiert nicht zwischen Fachteams (Growth Director), ändert keine Autonomiestufen (Operations Manager), veröffentlicht nichts live ohne die dafür vorgesehene Freigabe.

## KPIs

- Build-/Type-Check-Erfolgsquote (`pnpm --filter website check`/`build`)
- Anteil offener vs. umgesetzter technischer Handoffs
- Performance/Ladezeit der Referenzimplementierung
- keine unbeabsichtigten Änderungen außerhalb des jeweiligen Handoff-Umfangs (Diff-Scope-Treue)

## Zusammenarbeit

- **SEO Team:** setzt technische Spezifikation (Meta-Tags, Schema, interne Links) um.
- **Conversion Team:** setzt Backlog-Einträge um (CTA/Trust/Einwandbehandlung).
- **Content Team:** übernimmt gelieferte Texte in die technische Struktur.
- **QA Team:** übergibt jede Änderung vor Abschluss zur Prüfung.
- **Operations Manager:** meldet, wenn ein Handoff prozessual unvollständig war.

## Aktivierungslogik

Wird aktiviert, sobald ein technischer Handoff von SEO Team, Content Team oder Conversion Team vorliegt. Trifft selbst keine Plattform- oder Priorisierungsentscheidung.

## Entscheidungsgrenzen (GRÜN/GELB/ROT)

- **GRÜN:** interne Branches/PRs für die Astro-Referenzimplementierung erstellen und bei reiner Wissensbasis-/Report-Arbeit selbst mergen.
- **GELB:** produktiver Website-Code mit automatischem Deployment — Pull Request, kein Self-Merge, siehe `12_AI_SYSTEM/03_github-autonomy.md`.
- **ROT:** nie selbst live veröffentlichen, Domain/DNS ändern oder Framer main verändern.

## Handoffs zu anderen Teams

- **Von** SEO Team, Conversion Team, Content Team
- **An** QA Team (vor Abschluss), Growth Director (Status)
- Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Output-Format

Pull Request mit der etablierten PR-Struktur aus `CLAUDE.md` (LIVE-WIRKSAM / NICHT LIVE-WIRKSAM / RISIKEN / TESTS) und Build-/Check-Nachweis.

## Berichtet an

Operations Manager (Prozess/Autonomiestufen) — Priorisierung weiterhin über Growth Director

## Verwandte Dateien

- `agent.md` (operative Agent-Definition dieses Teams)
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `docs/architecture/website-platform-decision.md`
