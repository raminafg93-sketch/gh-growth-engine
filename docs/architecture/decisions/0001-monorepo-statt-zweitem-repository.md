# 0001 – Monorepo statt zweites Repository

Status: entschieden (2026-07-21)

## Kontext

Für die künftige Website-Anwendung stand ein zweites, eigenständiges Repository zur Debatte.

## Entscheidung

`gh-growth-engine` wird zum Monorepo erweitert (`apps/`, `packages/`, `docs/`), statt ein zweites Repository anzulegen.

## Begründung

- Eine Quelle der Wahrheit für Wissen, Strategie und Website-Code (`00_GH_PRINCIPLES.md`, Abschnitt 10).
- Ramin muss nicht zwischen zwei Repositories wechseln (`docs/workflows/owner-workflow.md`).
- Eine gemeinsame Autonomieregelung und ein gemeinsamer Pull-Request-Prozess (`12_AI_SYSTEM/03_github-autonomy.md`).

## Konsequenzen

- Root-Konfiguration (`package.json`, `pnpm-workspace.yaml`) kommt hinzu, ohne bestehende Struktur zu verändern.
- CI muss zwischen Wissens- und Website-Änderungen unterscheiden (Pfadfilter).
