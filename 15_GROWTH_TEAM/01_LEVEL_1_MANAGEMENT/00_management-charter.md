# Level 1 — Management-Charta

**Status:** Growth Director, Brand Manager und Operations Manager ausgearbeitet und gegeneinander geprüft (Stand 2026-07-22)

## Zweck dieser Ebene

Level 1 priorisiert zwischen den Level-2-Fachteams, sichert Konsistenz über alle Fachteams hinweg (Marke, Prozesse, Qualität) und ist die einzige Ebene mit direkter Eskalation an Ramin.

Level 1 arbeitet nicht selbst operativ in einzelnen Fachkanälen (das ist Aufgabe von Level 2) — Level 1 entscheidet, priorisiert und prüft.

## Rollen dieser Ebene

| Rolle | Primärer Fokus | Ordner |
|---|---|---|
| Growth Director | Gesamtpriorisierung, Roadmap | `01_growth-director/` |
| Brand Manager | Marke, Tonalität, Trust-Konsistenz | `02_brand-manager/` |
| Operations Manager | Prozesse, Autonomiestufen, Übergaben | `03_operations-manager/` |

## Entscheidungsbefugnis gegenüber Level 2

Jede Level-1-Rolle darf innerhalb ihres eigenen Verantwortungsbereichs (siehe Verantwortlichkeits-Matrix) einem Level-2-Team eine Aufgabe zuweisen oder ein Ergebnis zur Überarbeitung zurückgeben:

- **Growth Director** entscheidet **ob und wann** ein Team arbeitet (Priorisierung/Reihenfolge).
- **Brand Manager** entscheidet, **ob ein Ergebnis wegen Marken-/Claim-/Rechtsabweichung zurückgewiesen wird**, unabhängig von der Priorität.
- **Operations Manager** entscheidet, **ob eine Übergabe formal vollständig ist**, unabhängig von Priorität und Markenkonsistenz.

Keine Level-1-Rolle entscheidet über die fachliche Umsetzung selbst (welches Keyword, welcher Anzeigentext, welcher Code) — das bleibt beim jeweiligen Level-2-Team. Bei widersprüchlichen Anweisungen zweier Level-1-Rollen an dasselbe Team gilt: zuerst untereinander klären (siehe Abschnitt „Abgrenzung der drei Rollen zueinander" unten), erst danach an das Team weitergeben. Ein Team erhält nie zwei widersprüchliche Freigaben gleichzeitig.

## Abgrenzung der drei Rollen zueinander (Cross-Check vom 2026-07-22)

Nach Fertigstellung aller drei Level-1-Rollen wurden sie gegeneinander geprüft. Gefundene Überschneidung und Korrektur:

- **Befund:** Der ursprüngliche Architektur-Entwurf ordnete Operations Manager pauschal `11_OPERATIONS/**` zu — das hätte sich mit der bereits dem Growth Director zugeordneten `11_OPERATIONS/03_roadmap.md` und der inhaltlich zum Brand Manager gehörenden `11_OPERATIONS/02_proof-register.md` überschnitten.
- **Korrektur:** `11_OPERATIONS/` wurde nach Inhalt statt nach Ordner aufgeteilt:
  - `03_roadmap.md` (Priorisierungsinhalt) → Growth Director
  - `02_proof-register.md` (Claims/Nachweise) → Brand Manager
  - `01_decision-log.md` (strukturelle Entscheidungen/Prozess) → Operations Manager
- **Weitere Klärung:** `00_GH_MASTER_CONTEXT.md` gehört keiner Rolle exklusiv — der Growth Director hält die Gesamtdatei aktuell, Abschnitte zu Marke/Unternehmen bzw. technischem System werden in Abstimmung mit Brand Manager bzw. Operations Manager geändert, nicht einseitig.
- **Kein zusätzlicher Overhead:** Es wurde keine neue Datei und keine neue Rolle für diese Klärung angelegt — die Korrektur wurde direkt in den drei betroffenen Rollen-Dateien und der Verantwortlichkeits-Matrix nachgezogen.
- Damit sind alle drei Rollen überschneidungsfrei: Growth Director = **was/wann**, Brand Manager = **was darf gesagt werden**, Operations Manager = **wie sauber wird gearbeitet**.

## Bezug zu den Autonomiestufen

Jede Level-1-Rolle handelt innerhalb der in `12_AI_SYSTEM/03_github-autonomy.md` festgelegten Stufen GRÜN/GELB/ROT. Level 1 darf diese Stufen nicht eigenständig ändern — Änderungen an den Autonomiestufen selbst sind eine Entscheidung von Ramin (siehe `11_OPERATIONS/01_decision-log.md`).

## Eskalation nach oben

Jede Level-1-Rolle unterbricht und eskaliert an Ramin gemäß der Unterbrechungsregel in `12_AI_SYSTEM/03_github-autonomy.md`.

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
