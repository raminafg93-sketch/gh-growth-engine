# 0004 – pnpm Workspaces als Package-Manager

Status: entschieden (2026-07-21)

## Kontext

Vor dieser Entscheidung gab es kein Build-System und keinen Package Manager im Repository (siehe `docs/architecture/current-repository-inventory.md`, Abschnitt 5–6). Es musste geprüft werden, ob bereits verbindlich ein anderer Package Manager verwendet wird.

## Entscheidung

pnpm mit pnpm-Workspaces (`pnpm-workspace.yaml`: `apps/*`, `packages/*`).

## Begründung

- Kein bestehender Package Manager im Repository — freie Wahl ohne Migrationsaufwand.
- pnpm ist in dieser Arbeitsumgebung bereits verfügbar (v10.33.0) und in der strategischen Leitlinie dieses Auftrags vorgegeben.
- Effizientes Monorepo-Handling (Content-addressable Store, strikte Dependency-Auflösung, native Workspace-Filter wie `pnpm --filter website`).

## Konsequenzen

- `packageManager`-Feld in der Root-`package.json` fixiert die Version.
- `.npmrc` (`engine-strict=true`, `auto-install-peers=true`) und `.nvmrc` (Node 22) sichern reproduzierbare Installationen ab.
