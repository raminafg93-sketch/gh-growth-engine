# Checkliste: Framer Pilot lokal auf dem Mac durchführen

Stand: 2026-07-21

Diese Checkliste enthält ausschließlich die notwendigen lokalen Schritte, um den in der Cloud-Arbeitsumgebung blockierten Framer-Agent-Piloten auf Ramins eigenem Mac fortzusetzen und abzuschließen. Hintergrund und Begründung: siehe `docs/architecture/website-platform-decision.md`.

Kein Schritt hier wurde bereits ausgeführt — dies ist eine Anleitung für die nächste Ausführung, keine Ergebnisdokumentation. Diese Datei enthält keine Secrets, API-Keys, Tokens oder projektspezifischen Zugangsdaten.

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

- [ ] `npx @framer/agent@latest project auth "<Framer-Projektlink>"` ausführen.
- [ ] Browser-Freigabedialog („Authorize external agent") aktiv bestätigen (Approve).
- [ ] `npx @framer/agent@latest project list` ausführen und erfolgreiche Bindung an das Projekt bestätigen.

## Read-only-Test (erst danach weitermachen)

- [ ] `npx @framer/agent@latest session new "<Projekt-ID>"` ausführen.
- [ ] Bestätigen: korrekter Projektname.
- [ ] Bestätigen: erfolgreicher Zugriff.
- [ ] Bestätigen: Seiten erkannt.
- [ ] Bestätigen: Komponenten erkannt.
- [ ] Bestätigen: CMS erkannt.
- [ ] Bestätigen: Branch-Unterstützung erkannt (Hinweis: laut aktuellem „Legacy Basic '24"-Plan ist Branching nicht enthalten — ein Fehlschlag an dieser Stelle kann planbedingt sein, nicht zwingend technisch).

## Bearbeitungs-Pilot (erst nach erfolgreichem Read-only-Test)

- [ ] Einen sicheren, isolierten Testbereich für eine kleine Praxisänderung festlegen (kein main, keine produktiven Seiten).
- [ ] Eine kleine, klar abgegrenzte Teständerung durchführen und Ergebnis dokumentieren (Design, Motion, Responsive-Verhalten).
- [ ] Ergebnis mit dem bestehenden Astro-Prototyp vergleichen (beobachtungsbasiert, nicht spekulativ).

## Danach (nicht Teil dieser Checkliste, folgt separat)

- [ ] Ergebnisse aus Read-only-Test und Bearbeitungs-Pilot in die Plattformentscheidung (`docs/architecture/website-platform-decision.md`) einarbeiten.
- [ ] Auf Basis der Ergebnisse über ein Framer-Pro-Upgrade entscheiden (nicht vorher).

## Ausdrücklich nicht Teil dieser Checkliste

- Keine neuen Verbindungsversuche in der Cloud-Arbeitsumgebung.
- Keine weiteren API-Aufrufe über diese Checkliste hinaus.
- Keine Änderungen am bestehenden Framer-Projekt (main/Live-Website).
- Kein Framer-Plan-Upgrade im Rahmen dieser Checkliste.
- Keine Änderungen an diesem Repository außer der bereits vorliegenden Dokumentation.
