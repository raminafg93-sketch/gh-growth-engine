# Claude-Code-Workflow im Monorepo

Stand: 2026-07-21
Ergänzt `CLAUDE.md` (operative Regeln) um den konkreten Arbeitsablauf für Website- vs. Wissensaufgaben. Bei Widerspruch gilt `CLAUDE.md`.

## 6. Wie soll Claude bei Website-Aufgaben vorgehen?

1. Aufgabenbereich bestimmen: WEBSITE ONLY oder CROSS-DOMAIN? (siehe `CLAUDE.md`, Abschnitt "Monorepo-Regeln")
2. Pflichtlektüre vor Code-Änderungen: `docs/architecture/website-architecture.md`, `05_WEBSITE_SEO/02_url-map.md`, betroffene `03_OFFER`/`04_AUDIENCE`-Dateien.
3. Änderungen primär unter `apps/website/**`.
4. Unternehmensdaten ausschließlich über `apps/website/src/data/site.ts` beziehen, nie neu im Code hinterlegen.
5. Keine neue URL/Seite ohne Eintrag/Abgleich in `05_WEBSITE_SEO/02_url-map.md`.
6. Vor jedem Commit: `pnpm website:check` und `pnpm website:build` erfolgreich durchlaufen lassen.
7. Im Pull Request LIVE-WIRKSAM/NICHT LIVE-WIRKSAM trennen (`CLAUDE.md` Abschnitt C).
8. Autonomiestufe prüfen (`12_AI_SYSTEM/03_github-autonomy.md`): reines Grundgerüst ohne automatisches Deployment ist GRÜN (Selbst-Merge möglich); produktiver Code mit automatischem Deployment, Tracking/Consent, Redirects oder Rechtstexten ist GELB (PR ja, Merge nur durch Ramin).

## 7. Wie soll Claude bei reinen Wissensaufgaben vorgehen?

1. Pflichtlektüre: `00_GH_MASTER_CONTEXT.md`, `00_GH_DOCUMENT_MAP.md`, `00_GH_PRINCIPLES.md`, betroffene Primärdatei.
2. Änderung ausschließlich in der zuständigen Primärdatei laut `00_GH_DOCUMENT_MAP.md` plus den dort gelisteten Folgedateien.
3. **Keine** Änderungen unter `apps/website/**`, außer eine echte Inkonsistenz zwischen Wissensbasis und `site.ts` wird dabei entdeckt (dann CROSS-DOMAIN, explizit benennen).
4. Kein Website-Build wird ausgelöst, wenn technisch vermeidbar (siehe CI-Pfadfilter, `.github/workflows/ci.yml`).
5. Änderungsformat aus `00_GH_CHANGE_REQUEST_TEMPLATE.md` / `CLAUDE.md` einhalten: Primärdatei, Abschnitt, Alttext, Neutext, Auswirkungen, Prüfung.

## 8. Wann darf Claude mehrere Bereiche gleichzeitig verändern?

Siehe `docs/architecture/monorepo-architecture.md`, Abschnitt 6 (CROSS-DOMAIN) — nur bei echter Notwendigkeit, im PR explizit begründet.

## 14. Welche Daten dürfen niemals öffentlich committed werden?

Unverändert gültig, siehe `CLAUDE.md` Abschnitt "Sicherheit" und `12_AI_SYSTEM/03_github-autonomy.md` (Stufe ROT):

- Kundendaten, Kennzeichen, Fahrzeugpapiere, Schadenakten, Gutachten
- Zugangsdaten, API-Keys, Tokens, `.env`-Inhalte (echte Werte — `.env.example` ohne echte Werte ist erlaubt)
- vertrauliche Arbeitgeberunterlagen (Finexity), private personenbezogene Daten
- Vercel-/Hosting-Zugangsdaten, DNS-Zugangsdaten

Technische Absicherung: `.gitignore` schließt `.env`, `.env.*` (außer `.env.example`), `customer-data/`, `case-files/`, `gutachten/`, `schadenfotos/`, `fahrzeugpapiere/` bereits aus. Vor jedem Commit prüft Claude zusätzlich manuell auf Secrets (siehe Qualitätssicherung in `docs/architecture/decisions/` bzw. PR-Selbstprüfung).

## Kurzreferenz: Aufgabenbereiche

| Bereich        | Ändert Website-Code? | Ändert Wissensbasis?        | Beispiel                                                      |
| -------------- | -------------------- | --------------------------- | ------------------------------------------------------------- |
| KNOWLEDGE ONLY | nein                 | ja                          | Claim in `01_BRAND/04_claims.md` präzisieren                  |
| WEBSITE ONLY   | ja                   | nur bei echter Inkonsistenz | neue Komponente in `apps/website/src/components`              |
| CROSS-DOMAIN   | ja                   | ja                          | neue Leistungsseite: Content-Collection + `03_OFFER`-Abgleich |
| REPORT ONLY    | nein                 | nein (nur `13_REPORTS/`)    | Audit-Report erstellen                                        |
| INFRASTRUCTURE | Root-Configs/CI      | nein                        | `pnpm-workspace.yaml`, `.github/workflows/*`                  |
