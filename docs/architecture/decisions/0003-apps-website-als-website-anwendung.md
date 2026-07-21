# 0003 – `apps/website` als eigenständige Website-Anwendung

Status: entschieden (2026-07-21)

## Kontext

Die künftige Website-Anwendung braucht einen eigenen Workspace innerhalb des Monorepos.

## Entscheidung

Der Website-Code liegt unter `apps/website/` als eigener pnpm-Workspace.

## Begründung

- Vorgabe der Zielstruktur dieses Auftrags.
- Klare Trennung von Wissensbasis (nummerierte Ordner) und ausführbarem Code.
- Vercel kann `apps/website` später direkt als Root Directory verwenden (`docs/deployment/vercel-preparation.md`).

## Konsequenzen

- Eigenes `package.json`, `astro.config.mjs`, `tsconfig.json` innerhalb von `apps/website`.
- Root-Scripts (`pnpm website:*`) delegieren an diesen Workspace.
