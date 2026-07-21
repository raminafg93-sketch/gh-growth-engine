# Monorepo-Architektur

Stand: 2026-07-21
Primärdatei für diese Architekturentscheidung: `docs/architecture/decisions/0001-monorepo-statt-zweitem-repository.md`. Diese Datei erklärt das _Wie_, das ADR das _Warum_ in Kurzform.

## 1. Warum ein Monorepo?

`gh-growth-engine` ist bereits die "operative Quelle der Wahrheit" für Wissen, Strategie, Reports und Claude-Regeln (siehe `README.md`). Die künftige Website-Anwendung gehört fachlich zum selben System: Website-Texte kommen aus `03_OFFER`, `04_AUDIENCE`, `05_WEBSITE_SEO`; Trust-Claims aus `02_COMPANY`; Branding aus `01_BRAND`. Ein zweites Repository würde:

- eine zweite, leicht abweichende Quelle der Wahrheit erzeugen (widerspricht `00_GH_PRINCIPLES.md`, Abschnitt 10: "Eine Quelle der Wahrheit"),
- Ramin zwingen, zwischen zwei Repositories zu wechseln (widerspricht dem Ziel aus `docs/workflows/owner-workflow.md`),
- Claude zwingen, Kontext über zwei Repos hinweg zu synchronisieren.

Ein Monorepo hält Wissen, Strategie und Website-Code in einer Git-Historie, einer Autonomieregelung (`12_AI_SYSTEM/03_github-autonomy.md`) und einem Pull-Request-Prozess zusammen.

## 2. Rolle der bestehenden nummerierten Ordner (01–14)

Sie bleiben unverändert die Wissens- und Strategiebasis: Fakten, Zielgruppen, SEO-Strategie, Reports. Sie liegen bewusst weiterhin im Repository-Root, nicht unter `knowledge/` — siehe ADR `0002-nummerierte-ordner-bleiben-im-root.md`. Sie sind **Input** für Website-Inhalte, aber kein Teil des Website-Codes selbst und lösen keinen Website-Build aus.

## 3. Rolle von `apps/website`

Eigenständiger pnpm-Workspace mit dem Astro-Code der künftigen Website. Details: `docs/architecture/website-architecture.md`.

## 4. Rolle von `packages/`

Vorbereitet, aktuell leer/minimal dokumentiert (`packages/README.md`). Wird erst befüllt, wenn ein zweiter Workspace echte geteilte Logik braucht.

## 5. Rolle von `docs/`

Technische Architektur-, Deployment-, Migrations- und Workflow-Dokumentation für das Monorepo selbst — zu unterscheiden von den nummerierten Ordnern, die die fachliche Wissensbasis des Unternehmens sind.

## 6. Wann darf gleichzeitig in mehreren Bereichen geändert werden? (CROSS-DOMAIN)

Nur wenn eine Änderung in `apps/website` zwingend eine Anpassung der Wissensbasis erfordert (z. B. eine im Audit gefundene, tatsächlich falsche Angabe in `site.ts`, die auch in `02_COMPANY/01_company-facts.md` korrigiert werden muss) oder umgekehrt. Der Pull Request muss die Notwendigkeit explizit benennen (siehe `CLAUDE.md`, Abschnitt "Monorepo-Regeln", Kategorie CROSS-DOMAIN). Keine Vermischung "weil es gerade praktisch ist".

## 7. Wie werden große, unübersichtliche Pull Requests verhindert?

- Ein Auftrag = ein klar benannter Aufgabenbereich (KNOWLEDGE ONLY / WEBSITE ONLY / CROSS-DOMAIN / REPORT ONLY / INFRASTRUCTURE, siehe `CLAUDE.md`).
- Jeder PR trennt sichtbar LIVE-WIRKSAM von NICHT LIVE-WIRKSAM (siehe `CLAUDE.md`, Abschnitt C).
- Pfadfilter in der CI (`.github/workflows/ci.yml`) machen sichtbar, welcher Bereich betroffen ist.
- Reine Wissens-/Report-Änderungen werden nicht mit Website-Code-Änderungen vermischt, außer im begründeten CROSS-DOMAIN-Fall.
- Grundsatz aus `00_GH_PRINCIPLES.md`: "Kleine, nachvollziehbare Änderungen vor großen, unklaren Änderungen."

## Verwandte Dateien

- `docs/architecture/website-architecture.md`
- `docs/architecture/content-flow.md`
- `docs/architecture/decisions/`
- `CLAUDE.md`
