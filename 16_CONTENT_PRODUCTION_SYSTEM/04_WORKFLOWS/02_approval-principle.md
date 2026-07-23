# Freigabe-Grundsatz (konzeptionell)

Stand: 2026-07-23
**Primärquelle für:** wie die bestehenden Autonomiestufen (GRÜN/GELB/ROT) grundsätzlich auf die Stufen des Content-Production-Systems (`01_pipeline-stages.md`) abgebildet werden.
**Nicht Primärquelle für:** die Autonomiestufen selbst — die bleiben ausschließlich `12_AI_SYSTEM/03_github-autonomy.md`. Dieses Dokument ändert diese Stufen nicht, es wendet sie an.

## Grundsätzliche Abbildung

| Pipeline-Stufe | Typische Autonomiestufe | Begründung |
|---|---|---|
| Input | GRÜN | rein interne Erfassung, kein externer Effekt |
| Erstellung | GRÜN, sofern auf bestehendem Ausgangsmaterial/Narrativ | analog zu bestehender Regel für Social Media Team (`15_GROWTH_TEAM/.../06_social-media-team/agent.md`: „Darf ohne Rückfrage: bestehendes Material adaptieren") |
| Freigabe | GRÜN für die Prüfung selbst (QA Team) | Prüfung ist repository-intern, keine Veröffentlichung |
| **Veröffentlichung** | **ungeklärt — siehe offene Frage unten** | externe Sichtbarkeit |
| Auswertung | GRÜN | interne Kennzahlen-Erfassung |

## Offene Governance-Frage (bewusst nicht hier entschieden)

`CLAUDE.md` benennt „Nachrichten versenden" als Handlung, die Claude ohne ausdrückliche Freigabe nicht ausführen darf, und `12_AI_SYSTEM/03_github-autonomy.md` führt „externe Nachrichten" als ROT-Beispiel. Ob eine automatisierte Veröffentlichung auf Social-/GBP-Kanälen darunter fällt oder unter welchen Bedingungen sie es nicht täte (z. B. nur nach expliziter menschlicher Freigabe je Einzelstück, nie vollautomatisch), ist damit eine **Level-1-/Ramin-Entscheidung**, keine Dokumentationsaufgabe dieses Fundaments.

Dieses Dokument hält lediglich fest: **Bis diese Frage explizit entschieden ist, gilt jede Veröffentlichungs-Handlung als ROT** — also nie ohne Ramin, unabhängig davon, wie viele Stufen davor automatisiert ablaufen. Diese Vorgabe ist die konservative Auslegung der bestehenden Regel, keine neue Regel.

## Grundsatz für Phase 9

Wenn die technische Automation gebaut wird (Phase 9), muss sie diese Abbildung entweder unverändert übernehmen oder eine explizite, von Ramin freigegebene Änderung an `12_AI_SYSTEM/03_github-autonomy.md` selbst nach sich ziehen — sie darf die Frage nicht implizit durch Tooling-Entscheidungen beantworten.

## Verwandte Dateien

- `12_AI_SYSTEM/03_github-autonomy.md`
- `01_pipeline-stages.md`
- `03_AGENTS/01_agent-interface-principles.md`
- `CLAUDE.md`, Abschnitt „Freigaben"
