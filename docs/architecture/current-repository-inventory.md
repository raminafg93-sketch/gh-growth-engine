# Repository-Bestandsaufnahme (vor Monorepo-Umbau)

Stand: 2026-07-21
Zweck: Entscheidungsgrundlage für den Umbau von `gh-growth-engine` zu einem Monorepo (siehe `docs/architecture/monorepo-architecture.md`). Kurz, konkret, keine Theorie.

## 1. Aktuelle Repository-Struktur

Reines Markdown-/Wissens-Repository, keine Software bisher:

```
gh-growth-engine/
├── 00_GH_MASTER_CONTEXT.md
├── 00_GH_DOCUMENT_MAP.md
├── 00_GH_PRINCIPLES.md
├── 00_GH_CHANGE_REQUEST_TEMPLATE.md
├── CLAUDE.md
├── README.md
├── .gitignore
├── .claude/skills/website-inventory/
├── 01_BRAND … 14_ASSETS/   (14 nummerierte Wissensordner, je 1–7 Markdown-Dateien)
└── 13_REPORTS/             (Markdown-Reports + 1 CSV)
```

Kein `apps/`, kein `packages/`, kein `docs/`, kein `.github/`, kein `package.json` vor diesem Auftrag.

## 2. Bestehende Root-Dateien

| Datei                              | Rolle                                                    | Monorepo-relevant?                                                                      |
| ---------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `CLAUDE.md`                        | operative Claude-Arbeitsanweisung                        | ja — wird um Monorepo-Regeln ergänzt (Phase 8)                                          |
| `README.md`                        | Repo-Einstieg                                            | ja — wird überarbeitet (Phase 11)                                                       |
| `00_GH_MASTER_CONTEXT.md`          | aktueller Stand (Fakten)                                 | nur lesen, Quelle für `site.ts`                                                         |
| `00_GH_DOCUMENT_MAP.md`            | Primärdatei-Zuordnung                                    | ja — wird um neue Docs ergänzt                                                          |
| `00_GH_PRINCIPLES.md`              | dauerhafte Prinzipien                                    | nur lesen                                                                               |
| `00_GH_CHANGE_REQUEST_TEMPLATE.md` | Änderungsformat für Ramin↔KI                             | unverändert                                                                             |
| `.gitignore`                       | Ignorierregeln (Secrets, Kundendaten, node_modules etc.) | bereits kompatibel mit Node/Astro (`node_modules/`, `dist/`, `.astro/` schon vorhanden) |

## 3. Bestehende GitHub-Workflows

Keine vorhanden (`.github/` existiert nicht). Kein Konflikt, keine Migration nötig — ein neuer CI-Workflow kann sauber neu angelegt werden (Phase 9).

## 4. Bestehende Claude-Regeln

- `CLAUDE.md` (operativ), `00_GH_PRINCIPLES.md` (strategisch), `12_AI_SYSTEM/01_ai-operating-system.md`, `12_AI_SYSTEM/02_ai-start-prompt.md`, `12_AI_SYSTEM/03_github-autonomy.md` (Autonomiestufen GRÜN/GELB/ROT).
- Ein Claude-Skill: `.claude/skills/website-inventory/SKILL.md` (Website-Audit-Workflow, nutzt `05_WEBSITE_SEO/02_url-map.md` als Ziel).
- Alle Regeln sind reine Markdown-Dateien ohne Bezug zu einem Build-System — kein Konflikt mit pnpm/Astro.

## 5. Bestehende Build-Systeme

Keine. Keine `package.json`, kein Lockfile, kein CI, kein Bundler. Vollständig freies Feld für pnpm Workspaces + Astro.

## 6. Bestehende Node/npm/pnpm-Konfiguration

Keine. Node 22 (LTS) und pnpm 10 sind in der Arbeitsumgebung installiert, aber nicht im Repo verankert (kein `.nvmrc`, kein `packageManager`-Feld). Wird in Phase 2 nachgezogen.

## 7. Bestehende Dokumentverweise (Risiko für Bruch)

Interne Markdown-Querverweise existieren ausschließlich als reine Dateipfad-Nennungen in Backticks (z. B. `` `02_COMPANY/01_company-facts.md` ``), nicht als klickbare Markdown-Links (`[text](pfad)`). Das bedeutet:

- Kein Linkchecker-Tool nötig für harte Link-Brüche (es gibt keine `[..](..)`-Links).
- Risiko besteht nur, wenn Dateipfade sich ändern. Da die nummerierten Ordner **nicht** verschoben werden (Auftragsvorgabe), bleibt dieses Risiko in diesem Auftrag bei ~0.
- 17 Markdown-Dateien enthalten `.md`-Erwähnungen (Primärdatei-Verweise), am dichtesten in `00_GH_DOCUMENT_MAP.md`, `00_GH_MASTER_CONTEXT.md`, `00_GH_PRINCIPLES.md`, `12_AI_SYSTEM/*`, `13_REPORTS/*`.

## 8. Mögliche Konflikte mit einer Monorepo-Struktur

| Konflikt                                                                          | Bewertung                                                                                |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Ordnername `apps/website` vs. bestehende Groß-Präfix-Konvention (`01_BRAND` etc.) | kein technischer Konflikt, nur stilistisch zweigleisig — bewusst akzeptiert laut Auftrag |
| `.gitignore` vs. Node-Tooling                                                     | keiner — `node_modules/`, `dist/`, `.astro/`, `coverage/` sind bereits enthalten         |
| Root-`package.json` vs. bestehende Markdown-only-Struktur                         | keiner — reine Ergänzung                                                                 |
| CI-Workflow vs. bestehende Autonomiestufen                                        | keiner, solange CI nicht deployt (GRÜN-kompatibel)                                       |
| Asset-Duplikate (`14_ASSETS/LOGOS` vs. `apps/website/src/assets`)                 | bewusst: Originale bleiben in `14_ASSETS`, Web-Kopien klar getrennt benennen (Phase 5)   |

## 9. Dateien, die besonders geschützt oder unverändert bleiben sollten

- Alle 14 nummerierten Wissensordner (`01_BRAND` … `14_ASSETS`) — Ort und Inhalt bleiben stabil, nur additive Ergänzungen laut Document Map.
- `14_ASSETS/LOGOS/*.png` — Originaldateien, nicht bearbeiten, nur für Web optimierte Kopien woanders ablegen.
- `.claude/skills/website-inventory/` — bestehender Skill, nicht verändern.
- `11_OPERATIONS/01_decision-log.md` und `12_AI_SYSTEM/03_github-autonomy.md` — Autonomie-/Entscheidungsgrundlage, nur additiv erweitern, nie umschreiben.
- Alle bestehenden Report-Dateien in `13_REPORTS/` — dokumentieren einen realen Auditstand, nicht überschreiben.

## 10. Risiken des Umbaus

| Risiko                                                                | Einschätzung                                       | Gegenmaßnahme                                                                                    |
| --------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Versehentliches Verschieben nummerierter Ordner                       | gering, aber hoher Schaden                         | explizit nicht Teil dieses Auftrags, in ADR festgehalten                                         |
| Große/binäre Dateien landen im Git-Repo (Node-Modules, Build-Output)  | mittel                                             | `.gitignore` deckt `node_modules/`, `dist/`, `.astro/` bereits ab; vor Commit geprüft (Phase 13) |
| Root-CI löst unnötige Builds bei reinen Doku-Änderungen aus           | gering                                             | Pfadfilter auf `apps/website/**` und Root-Configs (Phase 9)                                      |
| Verwechslung interne Vorschau ↔ echte Live-Website                    | mittel, hoher Reputationsschaden falls verwechselt | sichtbare Kennzeichnung + `noindex` in der Vorschauseite (Phase 3)                               |
| Unvollständige Unternehmensdaten (z. B. Social-Links) werden erfunden | hoch, wenn nicht diszipliniert                     | `site.ts` markiert fehlende Werte explizit als `TODO_MISSING`, kein Fake-Wert (Phase 4)          |

## Fazit

Kein bestehendes Build-System, keine Workflows, keine Konflikte, die einen anderen Package Manager erzwingen würden. Der Umbau ist ein additiver Vorgang: Neue Ordner (`apps/`, `packages/`, `docs/`, `.github/`) und Root-Configs kommen hinzu, bestehende Struktur bleibt unangetastet. Empfehlung: pnpm Workspaces + Astro wie in der strategischen Leitlinie vorgegeben, ohne Abweichung.
