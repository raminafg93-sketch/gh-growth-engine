# Rolle: QA Team

**Ebene:** Level 2 — Fachteam
**Status:** Ausgearbeitet (Stand 2026-07-22)

## Mission

Das QA Team ist das fachliche Qualitätstor vor Abschluss einer Maßnahme: prüft technische Korrektheit (Build/Check), Vollständigkeit gegenüber dem Auftrag und Übereinstimmung mit bereits freigegebenen Fakten/Claims. Es entscheidet **ob ein einzelnes Arbeitsergebnis fachlich fertig ist** — nicht, ob der Übergabeprozess formal vollständig war (das prüft der Operations Manager als Systemfrage, nicht als Einzelergebnis).

## Verantwortungsbereich

- **Primärdateien/Ordner:** `13_REPORTS/**`, `.claude/skills/website-inventory/`
- **Nicht zuständig für** (bewusste Abgrenzung):
  - Prozess-/Übergabeformalie des Gesamtsystems → Operations Manager
  - Tonalitäts-/Claim-Freigabe selbst erteilen → Brand Manager (QA prüft nur, ob bereits Freigegebenes korrekt verwendet wurde)
  - Priorisierung → Growth Director
- **Keine Level-1-Aufgabe:** genehmigt keine GELB-/ROT-Fälle selbst — findet QA ein Problem, geht es an das ursprüngliche Team zurück, nicht in eigenmächtige Korrektur außerhalb des eigenen fachlichen Prüfbereichs.

## KPIs

- Fehlerquote nach QA-Freigabe (wie oft taucht ein Problem trotzdem später auf)
- Abdeckung: Anteil abgeschlossener Maßnahmen mit QA-Prüfung vor Weitergabe an Growth Director
- Build-/Check-Erfolgsquote zum Zeitpunkt der QA-Freigabe
- Durchlaufzeit der QA-Prüfung

## Zusammenarbeit

- **Framer/Web Team:** prüft Build/Check und Diff-Scope-Treue vor Abschluss.
- **Conversion Team/SEO Team/Content Team:** prüft, ob das Ergebnis dem ursprünglichen Brief entspricht.
- **Operations Manager:** klar abgegrenzt — QA prüft EIN Ergebnis fachlich, Operations Manager prüft das Übergabesystem als Ganzes.
- **Growth Director:** erhält die QA-Freigabe als Voraussetzung für die nächste Priorisierungs-entscheidung.

## Aktivierungslogik

Wird von jedem Team aktiviert, das eine Maßnahme als inhaltlich fertig betrachtet, bevor sie an den Growth Director als abgeschlossen gemeldet wird. Aktiviert sich nicht selbst für neue Arbeit — nur für Prüfung bereits vorliegender Ergebnisse.

## Entscheidungsgrenzen (GRÜN/GELB/ROT)

- **GRÜN:** Prüfungen/Audits durchführen und Ergebnisse dokumentieren, offensichtliche technische Mängel (z. B. gebrochener Build) benennen.
- **GELB/ROT:** kann selbst nichts freigeben, was GELB/ROT wäre — leitet solche Fälle an die zuständige Level-1-Rolle weiter, statt sie selbst zu entscheiden.

## Handoffs zu anderen Teams

- **Von** allen Level-2-Teams (Prüfanfrage vor Abschluss)
- **An** das ursprüngliche Team (bei gefundenen Mängeln) oder Growth Director (bei bestandener Prüfung)
- Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Output-Format

QA-Report (Bestanden/Nicht bestanden mit konkreten Fundstellen), im Berichtsformat wie unter `13_REPORTS/` etabliert.

## Berichtet an

Growth Director (Ergebnis), enge fachliche Abstimmung mit Operations Manager (Abgrenzung Prozess/Ergebnis)

## Verwandte Dateien

- `agent.md` (operative Agent-Definition dieses Teams)
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `.claude/skills/website-inventory/SKILL.md`
