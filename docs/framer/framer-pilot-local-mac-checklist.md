# Checkliste: Framer Pilot lokal auf dem Mac durchführen

Stand: 2026-07-21

Diese Checkliste enthält ausschließlich die notwendigen lokalen Schritte, um den in der Cloud-Arbeitsumgebung blockierten Framer-Agent-Piloten auf Ramins eigenem Mac fortzusetzen und abzuschließen. Hintergrund und Begründung: siehe `docs/architecture/framer-agent-final-conclusion.md`.

Kein Schritt hier wurde bereits ausgeführt — dies ist eine Anleitung für die nächste Ausführung, keine Ergebnisdokumentation.

## Vorbereitung

- [ ] Node.js **v24 oder neuer** installieren bzw. aktivieren (`node -v` prüfen).
- [ ] Claude Code lokal installieren/aktualisieren und einloggen.
- [ ] Prüfen, dass kein Firmen-/Netzwerk-Proxy `api.framer.com` blockiert (z. B. `curl -I https://api.framer.com` sollte keine `403`/Verbindungsfehler liefern).
- [ ] Falls der zuvor kurzzeitig exponierte API-Key aus dem Pilotversuch noch nicht rotiert wurde: in den Framer-Projekteinstellungen jetzt widerrufen/neu erzeugen.
- [ ] Dieses Repository lokal auf den aktuellen Stand von `main` bringen (`git fetch origin main && git checkout main && git pull`).

## Einrichtung

- [ ] `npx @framer/agent@latest setup` lokal ausführen und Ausgabe auf „Installed 2 skills" prüfen.
- [ ] Bestehende lokale Claude-Code-Skills vorher sichern (Kopie von `~/.claude/skills`), um eine Überschreibung ausschließen zu können.
- [ ] Nach der Installation prüfen, dass keine vorhandenen Skills verändert wurden.

## Projekt verbinden

- [ ] `npx @framer/agent@latest project auth "https://framer.com/projects/GutachtenHelden--uDdG1ZwZKuhNmduicUsQ"` ausführen.
- [ ] Browser-Freigabedialog („Authorize external agent") aktiv bestätigen (Approve).
- [ ] `npx @framer/agent@latest project list` ausführen und erfolgreiche Bindung an das Projekt bestätigen.

## Read-only-Test (erst danach weitermachen)

- [ ] `npx @framer/agent@latest session new "<Projekt-ID>"` ausführen.
- [ ] Bestätigen: korrekter Projektname.
- [ ] Bestätigen: erfolgreicher Zugriff.
- [ ] Bestätigen: Seiten erkannt.
- [ ] Bestätigen: Komponenten erkannt.
- [ ] Bestätigen: CMS erkannt.
- [ ] Bestätigen: Branch-Unterstützung erkannt.

## Danach (nicht Teil dieser Checkliste, folgt separat)

- [ ] Erst nach erfolgreichem Read-only-Test: sicheren Testbranch erstellen und den restlichen Pilotauftrag (Praxistest, Motion, Responsive, SEO, Vergleich mit Astro) gemäß ursprünglicher Aufgabenstellung fortsetzen.

## Ausdrücklich nicht Teil dieser Checkliste

- Keine neuen Verbindungsversuche in der Cloud-Arbeitsumgebung.
- Keine weiteren API-Aufrufe über diese Checkliste hinaus.
- Keine Änderungen am bestehenden Framer-Projekt (main/Live-Website).
- Keine Änderungen an diesem Repository außer der bereits vorliegenden Dokumentation.
