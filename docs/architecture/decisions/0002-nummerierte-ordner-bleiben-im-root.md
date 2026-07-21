# 0002 – Bestehende Wissensordner bleiben zunächst im Root

Status: entschieden (2026-07-21)

## Kontext

Eine Monorepo-Struktur böte die Möglichkeit, alle nummerierten Wissensordner (`01_BRAND` … `14_ASSETS`) unter `knowledge/` zu bündeln.

## Entscheidung

Die nummerierten Ordner bleiben in diesem Auftrag an ihrem aktuellen Ort im Repository-Root. Keine Verschiebung nach `knowledge/`.

## Begründung

- Bestehende Verweise (Dateipfade in Backticks, z. B. in `00_GH_DOCUMENT_MAP.md`) bleiben stabil.
- Claudes verbindliche Lesereihenfolge (`CLAUDE.md`, `00_GH_MASTER_CONTEXT.md` Abschnitt 11) bleibt unverändert gültig.
- Git-Historie bleibt nachvollziehbar (keine Massen-Umbenennung/-Verschiebung).
- Der Umbau bleibt risikoarm und reversibel.

## Konsequenzen

- Root-Verzeichnis enthält sowohl Monorepo-Infrastruktur (`apps/`, `packages/`, `docs/`, `.github/`) als auch die nummerierten Wissensordner nebeneinander. Bewusst akzeptiert.
- Eine spätere Verschiebung nach `knowledge/` bleibt möglich, ist aber ausdrücklich nicht Teil dieses Auftrags und müsste eigens entschieden werden.
