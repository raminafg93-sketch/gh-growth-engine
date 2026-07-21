# GH Growth Engine

Monorepo: Zentrales Marketing-, Kundenakquise-, KI-Arbeits- und Website-System für Gutachten Helden (KFZ-GutachtenHelden).

## Zweck

1. **Wissenssystem** — Unternehmenswissen, Marke, Zielgruppen, SEO-/Google-/Meta-Strategie, Reports, Claude-Regeln (nummerierte Ordner `01_BRAND` … `14_ASSETS`, siehe `00_GH_DOCUMENT_MAP.md`).
2. **Website-Anwendung** — technisches Grundgerüst der künftigen, selbst gehosteten Website unter `apps/website/` (Astro). **Ersetzt die aktuelle Live-Website auf Framer noch nicht.**

## Oberziel

Mehr qualifizierte Unfallkunden gewinnen durch:

1. Google
2. Google Maps
3. Google Ads
4. Meta / Instagram
5. Website und Conversion
6. Content und AI Search
7. Coaching / Academy als späteres Skalierungsfeld

## Monorepo-Struktur

```
gh-growth-engine/
├── apps/website/        Astro-Website-Grundgerüst (nicht live)
├── packages/            vorbereitet für geteilte Logik (aktuell minimal/leer)
├── docs/                 Architektur-, Deployment-, Migrations-, Workflow-Dokumentation
├── .github/workflows/    CI (Build/Check, kein Deployment)
├── 01_BRAND … 14_ASSETS  bestehendes Wissenssystem (unverändert am bisherigen Ort)
├── 13_REPORTS/            Audits und Reports
├── .claude/skills/        Claude-Skills (z. B. website-inventory)
├── CLAUDE.md              Claude-Arbeitsanweisung
├── package.json           Root-Workspace-Scripts
└── pnpm-workspace.yaml    pnpm-Workspace-Definition
```

Bestehende Wissensordner wurden bewusst **nicht** verschoben — Details: `docs/architecture/decisions/0002-nummerierte-ordner-bleiben-im-root.md`.

## Systemprinzip

Dieses Repository ist die operative Quelle der Wahrheit.

- GitHub versioniert alle Änderungen.
- Claude arbeitet direkt mit den Dateien — sowohl Wissen als auch Website-Code.
- Google Drive speichert große Assets, Exporte, Nachweise, Fotos und Videos.
- Kundendaten und sensible Akten gehören nicht in dieses Repository.

## Voraussetzungen

- Node.js ≥ 22.12 (siehe `.nvmrc`)
- pnpm ≥ 10 (`corepack enable` oder `npm i -g pnpm`)

## Installation

```bash
pnpm install
```

## Wichtigste Befehle (aus dem Repository-Root)

| Befehl                              | Wirkung                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------- |
| `pnpm dev` / `pnpm website:dev`     | lokaler Astro-Entwicklungsserver                                            |
| `pnpm build` / `pnpm website:build` | statischer Produktions-Build von `apps/website`                             |
| `pnpm check` / `pnpm website:check` | Astro-/TypeScript-Diagnose                                                  |
| `pnpm format`                       | Code mit Prettier formatieren                                               |
| `pnpm format:check`                 | Formatierung prüfen (wie in CI)                                             |
| `pnpm lint`                         | reserviert — aktuell kein Linter konfiguriert, Befehl läuft als No-op durch |
| `pnpm test`                         | reserviert — aktuell keine Tests vorhanden, Befehl läuft als No-op durch    |

## Sicherheitsregeln

Nicht in GitHub speichern (Details: `CLAUDE.md`, `12_AI_SYSTEM/03_github-autonomy.md`):

- Kundendaten, Kennzeichen, Fahrzeugpapiere, Schadenakten, Gutachten
- Zugangsdaten, Secrets, API-Keys
- vertrauliche Arbeitgeberunterlagen, private personenbezogene Daten

Das Repository ist öffentlich — jede Datei wird entsprechend behandelt.

## Aktueller Status der Migration

- Live-Website: Framer, unter `https://www.kfz-gutachtenhelden.de`, **unverändert und vollständig aktiv**.
- `apps/website`: Design System v1 (`docs/architecture/design-system.md`), wiederverwendbare Komponentenbibliothek (`docs/architecture/component-library.md`) und eine erste, komponentenbasiert neu aufgebaute Homepage-Version. Weiterhin eine interne, nicht indexierte Vorschauseite (`noindex`, `robots.txt: Disallow: /`) — kein Deployment, kein Domain-Wechsel.
- Vergleich Alt (Framer) vs. Neu (Astro): `docs/migration/homepage-parity-and-improvement-report.md`.
- Nächster geplanter, aber noch nicht beauftragter Schritt: echter technischer Crawl/Export der Live-Seite (aktuell netzwerkseitig blockiert) und darauf aufbauende Paritätsverfeinerung, danach Vercel-Anbindung (siehe `docs/migration/framer-to-astro-strategy.md`).

## Wichtigste Startdateien

1. `00_GH_MASTER_CONTEXT.md`
2. `00_GH_DOCUMENT_MAP.md`
3. `00_GH_PRINCIPLES.md`
4. `00_GH_CHANGE_REQUEST_TEMPLATE.md`
5. `CLAUDE.md`
6. für Website-Arbeit zusätzlich: `docs/architecture/website-architecture.md`, `docs/workflows/claude-code-monorepo-workflow.md`

## Für den Inhaber

Verständliche Schritt-für-Schritt-Anleitung ohne Entwickler-Vorwissen: `docs/workflows/owner-workflow.md`.
