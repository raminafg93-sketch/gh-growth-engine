# Vercel-Vorbereitung

Stand: 2026-07-21
Status: **vorbereitet, nicht verbunden.** Keine Vercel-Zugangsdaten oder -Integration in dieser Umgebung vorhanden — daher wurde in diesem Auftrag keine Verbindung hergestellt (Autonomiestufe ROT: "externe kostenpflichtige Dienste buchen" / Zugangsdaten, siehe `12_AI_SYSTEM/03_github-autonomy.md`).

## Funktionsprinzip (später)

```
GitHub (gh-growth-engine, Branch-Push/PR)
        │
        ▼
Vercel baut apps/website (Root Directory = apps/website)
        │
        ▼
Vorschau-URL (*.vercel.app) pro Pull Request
        │
        ▼
nach ausdrücklicher Freigabe: Hauptdomain (kfz-gutachtenhelden.de)
```

## Konfiguration, die später in Vercel gesetzt wird

| Einstellung           | Wert                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Root Directory        | `apps/website`                                                                                                                    |
| Framework Preset      | Astro                                                                                                                             |
| Install Command       | `pnpm install --frozen-lockfile` (im Repo-Root ausgeführt, Vercel erkennt pnpm-Workspaces automatisch über `pnpm-workspace.yaml`) |
| Build Command         | `pnpm --filter website build` (oder Vercel-Default `astro build`, wenn Root Directory gesetzt ist)                                |
| Output Directory      | `dist`                                                                                                                            |
| Node-Version          | 22.x (siehe `.nvmrc`, mindestens 22.12 wegen Astro-7-Anforderung)                                                                 |
| Environment Variables | aktuell **keine** nötig — das Grundgerüst verwendet keine externen APIs, kein Tracking, keine Secrets                             |

## Preview- vs. Produktions-Verhalten

- **Preview:** Jeder Pull Request gegen `main`, der `apps/website/**` verändert, würde (sobald Vercel verbunden ist) automatisch eine Vorschau-URL erzeugen. Diese Vorschau ist nie die Hauptdomain und sollte ebenfalls `noindex` bleiben, bis ein echter Launch freigegeben ist.
- **Produktion:** Nur nach ausdrücklicher Freigabe durch Ramin wird die Hauptdomain `kfz-gutachtenhelden.de` auf Vercel/`apps/website` umgestellt (Autonomiestufe ROT: "Domains oder DNS verändern", "eine Live-Website veröffentlichen"). Das ist **nicht** Teil dieses Auftrags und nicht Teil des nächsten empfohlenen Auftrags (Paritätsnachbau) — sondern ein eigener, späterer Schritt mit expliziter Einzelfreigabe.

## Wie vermeiden reine Dokuänderungen unnötige Builds?

Der CI-Workflow (`.github/workflows/ci.yml`) nutzt Pfadfilter: Änderungen ausschließlich in den nummerierten Wissensordnern, `13_REPORTS/`, `docs/` oder anderen Markdown-Dateien lösen keinen Astro-Build aus. Sobald Vercel verbunden ist, sollte dort zusätzlich unter "Ignored Build Step" ein Check auf `apps/website/**`- und Root-Config-Änderungen eingerichtet werden (`git diff --quiet HEAD^ HEAD -- apps/website package.json pnpm-workspace.yaml` oder Vercels `turbo-ignore`-Äquivalent), damit reine Wissens-PRs keinen Vercel-Build auslösen.

## Wie bleibt Framer währenddessen live?

Framer ist technisch komplett unabhängig von diesem Repository und von Vercel. Es gibt aktuell keine DNS-Verknüpfung zwischen `kfz-gutachtenhelden.de` und diesem Repository/Vercel-Projekt. Solange niemand die DNS-Einträge der Domain manuell ändert (Autonomiestufe ROT, nie ohne Einzelfreigabe), läuft Framer unverändert weiter — unabhängig davon, wie viele Preview-Deployments in Vercel entstehen.

## Offene Punkte

- Vercel-Account/-Projekt muss von Ramin angelegt und mit dem GitHub-Repo verbunden werden (Zugangsdaten-Schritt, Autonomiestufe ROT).
- Sobald verbunden: Ignored-Build-Step-Regel in Vercel selbst konfigurieren (kann nicht aus dem Repository allein erzwungen werden).
