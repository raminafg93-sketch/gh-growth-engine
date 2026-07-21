# Framer-zu-Astro-Migrationsstrategie

Stand: 2026-07-21
Basis: strategische Leitlinie dieses Auftrags, `13_REPORTS/01_website-audit.md`, `13_REPORTS/04_migration-risks.md`, `13_REPORTS/06_information-architecture.md`, `00_GH_PRINCIPLES.md`.

## Leitsätze (unverändert gültig für jede künftige Migrationsphase)

> Bewahren vor Ersetzen. Parität vor Optimierung. Sicherheit vor Geschwindigkeit. Conversion vor Design. SEO-Stabilität vor visueller Neuerfindung.

Die aktuelle Framer-Website gefällt dem Inhaber und performt nach seiner Einschätzung gut bei Google. Sie wird **nicht** vorschnell ersetzt.

## 13. Wie wird der spätere SEO-sichere Umzug vorbereitet?

1. **Vollständiger technischer Crawl vor jeder Migrationsentscheidung.** Der bisherige Audit (`13_REPORTS/01_website-audit.md`) konnte die Domain aus dieser Arbeitsumgebung nicht direkt crawlen (Netzwerkrichtlinie). Vor einer echten Migration muss entweder der Netzwerkzugriff freigegeben, ein Crawl-Export (z. B. Screaming Frog) bereitgestellt, oder Search-Console-Zugang verbunden werden.
2. **1:1-Redirect-Mapping statt Neustrukturierung zuerst.** Jede bestehende, indexierte URL (siehe `13_REPORTS/02_url-inventory.csv`) bekommt vor dem Umzug eine eindeutige Ziel-URL im neuen System — keine URL wird ohne Redirect entfernt (Prinzip aus `.claude/skills/website-inventory/SKILL.md`: "Keine URL löschen").
3. **Inhaltliche Parität vor neuer Architektur.** Erst wenn jede bestehende Seite eine gleichwertige oder bessere Entsprechung in `apps/website` hat, wird über die in `13_REPORTS/06_information-architecture.md` vorgeschlagene erweiterte Struktur (zusätzliche Leistungs-/Ratgeberseiten) nachgedacht — nicht umgekehrt.
4. **Schrittweise Freigabe, nie Big-Bang.** Migration erfolgt über Vercel-Previews (`docs/deployment/vercel-preparation.md`), die erst nach Prüfung auf die Hauptdomain übernommen werden — mit Rückwegoption.
5. **P1-Risiken aus dem Audit vor der Migration klären**, nicht währenddessen: unklare Template-Reste (`/home`, `/features`), unbestätigte Datenschutzerklärung (siehe `13_REPORTS/04_migration-risks.md`).

## Phasenmodell

| Phase | Inhalt                                                                                                                                  | Status                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 0     | Monorepo-Fundament, Astro-Grundgerüst (dieser Auftrag)                                                                                  | erledigt                                                   |
| 1     | Forensische Inventarisierung der Framer-Seite (echter Crawl/Export nötig) + technisch-konvertierender Paritätsnachbau in `apps/website` | **nächster empfohlener Großauftrag**, noch nicht gestartet |
| 2     | Redirect-Mapping, Vercel-Preview-Abnahme, P1-Risiken aus dem Audit auflösen                                                             | offen                                                      |
| 3     | Erweiterte Architektur (neue Leistungs-/Ratgeberseiten aus `13_REPORTS/06_information-architecture.md`)                                 | offen, erst nach Parität                                   |
| 4     | Freigabe, DNS-Umstellung auf Vercel/`apps/website`                                                                                      | offen, Autonomiestufe ROT, nur mit Ramins Einzelfreigabe   |

## Ausdrücklich nicht Teil dieser Strategie-Phase

- kein Homepage-Nachbau, keine neuen SEO-Landingpages, keine Content-Überarbeitung, keine Entfernung bestehender URLs, keine Framer-Änderung, kein Domain-Wechsel — siehe Auftragsvorgabe.

## Risiko-Register

Siehe `13_REPORTS/04_migration-risks.md` (P1–P3) — bleibt die Primärdatei für Migrationsrisiken, wird hier nicht dupliziert.
