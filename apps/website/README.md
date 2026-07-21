# apps/website

Astro-Grundgerüst der künftigen KFZ-GutachtenHelden-Website. **Nicht live, nicht deployed.**

Die aktuelle Live-Website läuft weiterhin unvermindert auf Framer unter `https://www.kfz-gutachtenhelden.de`. Dieser Workspace ist das technische Fundament für einen späteren, schrittweisen Umzug (siehe `docs/migration/framer-to-astro-strategy.md`) — noch kein Nachbau, keine Migration.

## Befehle

Aus dem Repository-Root (empfohlen, nutzt pnpm-Workspace-Filter):

```bash
pnpm website:dev     # lokaler Entwicklungsserver
pnpm website:build   # statischer Produktions-Build nach apps/website/dist
pnpm website:check   # Astro/TypeScript-Diagnose
```

Alternativ direkt in diesem Ordner: `pnpm dev`, `pnpm build`, `pnpm check`, `pnpm preview`.

## Struktur

- `src/pages/` — Astro-Seiten (Dateibasiertes Routing)
- `src/layouts/` — Seitenrahmen (`BaseLayout.astro`)
- `src/components/` — nach Zweck gruppiert: `layout`, `navigation`, `sections`, `conversion`, `trust`, `seo`, `forms`, `ui`
- `src/content/` — künftige Content-Collections: `services`, `guides`, `blog`, `faq`, `locations`, `reviews` (aktuell leer, `.gitkeep`)
- `src/data/site.ts` — zentrale, typisierte Unternehmenskonfiguration (Quelle: `02_COMPANY/01_company-facts.md`, `00_GH_MASTER_CONTEXT.md`)
- `src/assets/` — weboptimierte Assets (siehe `docs/architecture/asset-strategy.md`)
- `public/` — statische Dateien, inkl. `robots.txt` (aktuell `Disallow: /`, da nicht für den Livebetrieb bestimmt)

## Status

Technisches Grundgerüst mit einer internen Vorschauseite (`/`, `noindex`, sichtbar als "Interne Website-V2-Vorschau" gekennzeichnet). Kein Homepage-Nachbau, keine Domain-Anbindung, kein Live-Deployment. Details: `docs/architecture/website-architecture.md`.
