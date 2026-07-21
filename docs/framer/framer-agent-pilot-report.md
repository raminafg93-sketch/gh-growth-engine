# Framer-Agent-Pilot — Ergebnisbericht

Stand: 2026-07-21 (aktualisiert nach erstem Autorisierungsversuch)
Status: **Einrichtung abgeschlossen. Erster echter Autorisierungsversuch durchgeführt und an einer strukturellen Umgebungs-Inkompatibilität gescheitert (siehe Abschnitt 3) — nicht an fehlender Freigabe.**

Dieser Bericht dokumentiert ehrlich, was in diesem Auftrag tatsächlich durchgeführt werden konnte, und wo er aus einem echten, nicht umgehbaren Grund pausiert wurde. Es werden **keine** Ergebnisse für Phasen erfunden, die technisch nicht erreicht wurden.

---

## Zusammenfassung

| Phase | Status |
|---|---|
| 1. Voraussetzungen prüfen | ✅ abgeschlossen |
| 2. Offizielle Framer-Agent-Integration einrichten | ✅ abgeschlossen |
| 3. Framer-Projekt verbinden | ⏸ **pausiert — strukturelle Umgebungs-Inkompatibilität (Remote-Container vs. lokaler Browser-Callback)** |
| 4–11 (Inventur, Testbranch, Praxistest, Motion, Responsive, SEO, Vergleich) | nicht begonnen (setzen Phase 3 voraus) |

---

## 1. Voraussetzungen (Phase 1)

Lokale Umgebung dieser Session:

- Node.js: `v22.22.2` (System-Standard dieser Arbeitsumgebung)
- npm: `10.9.7`
- Claude Code: `2.1.216`
- Git-Repository: sauber, keine uncommitteten Änderungen vor Beginn
- Ausgangsbranch: `claude/homepage-v2-foundation` (bereits gemergt in `main`)

## 2. Offizielle Framer-Agent-Integration (Phase 2)

### Quelle und Verifikation

`@framer/agent` wurde über die öffentliche npm-Registry verifiziert (kein Community-Paket): gepflegt von `@framer.com`-Mitarbeiterkonten (`koenrh@framer.com`, `npm@framer.com`, `eelco@framer.com`, `djovanni@framer.com` u. a.), README verweist auf `framer.com/agents/external` als offizielle Produktseite. Verwendete Version: **`@framer/agent@0.0.38`** (aktuelle `latest`, veröffentlicht 2026-07-13). Abhängigkeit: `framer-api@0.1.24` (ebenfalls framer.com-gepflegt).

### Voraussetzungs-Lücke: Node.js-Version

Die offizielle Dokumentation verlangt **Node.js v24 oder neuer**. Die Standardumgebung dieser Session stellt Node v22.22.2 bereit — das reicht für `@framer/agent` nicht aus (wohl aber weiterhin für den Astro-Workspace, dessen `engines`-Feld nur `>=22.12.0` verlangt; hier entsteht kein Konflikt).

**Lösung (reversibel, ohne Systemänderung):** Offizielle Node.js-Standalone-Binärdistribution (`node-v26.5.0-linux-x64`) von `nodejs.org/download/release/latest/` (exakt die von Framers eigenem Setup-Prompt genannte Quelle) in ein temporäres Verzeichnis heruntergeladen und ausschließlich dort verwendet — die bestehende System-/Projekt-Node-Installation (`/opt/node22`, `apps/website`-Toolchain) wurde **nicht verändert**.

### Was wurde installiert?

```
npx @framer/agent@latest setup
```

Ergebnis: `Installed 2 skills to /root/.agents/skills, /root/.claude/skills`

- Neu: `~/.claude/skills/framer/` (SKILL.md, start-conversation.md, projects/-Vorlage)
- Neu: `~/.claude/skills/framer-code-components/` (SKILL.md)
- Neu (Spiegelung): `~/.agents/skills/framer/`, `~/.agents/skills/framer-code-components/`
- **Bestehende 7 Skills unverändert:** `docx`, `morning`, `pdf`, `pptx`, `session-start-hook`, `skill-creator`, `xlsx` — vor der Installation gesichert (`manifest.json` + vollständiges `skills/`-Verzeichnis als Tarball), nach der Installation per Diff verglichen: **keine Überschreibung**, `manifest.json` unverändert.
- Es wurden **keine** zusätzlichen Community-Skills und **kein** separater Framer-MCP-Server installiert — laut offizieller FAQ ausdrücklich nicht nötig ("No. Framer doesn't require a separate MCP server").
- Diese Installation liegt vollständig unter `$HOME` (`/root/.claude`, `/root/.agents`), **nicht** im Repository — keine Astro-Dateien wurden berührt.

### Berechtigungen / Datenschutz

- Kein API-Key wurde eingegeben, erzeugt oder committed.
- Keine Secrets in diesem Repository gespeichert.
- Hinweis: Der offizielle Installer zeigt einen Telemetrie-Hinweis ("Framer collects telemetry... You can opt out at any time by running: `@framer/agent telemetry disable`"). Nicht deaktiviert — das ist eine Präferenzentscheidung von Ramin, keine sicherheitsrelevante Änderung an GH-Daten.

## 3. Framer-Projekt verbinden (Phase 3) — **PAUSIERT, mit echtem Befund**

### Bereitgestellter Projektlink

Ramin stellte den echten Framer-Editor-Projektlink bereit: `https://framer.com/projects/GutachtenHelden--uDdG1ZwZKuhNmduicUsQ` (Projekt-ID `uDdG1ZwZKuhNmduicUsQ`).

### Autorisierungsversuch

```
npx @framer/agent@latest project auth "https://framer.com/projects/GutachtenHelden--uDdG1ZwZKuhNmduicUsQ"
```

Ausgabe:

```
Could not open browser. Open this URL manually:
https://framer.com/projects/server-api/auth?callback=http%3A%2F%2F127.0.0.1%3A34273%2Fcallback&state=...&projectId=uDdG1ZwZKuhNmduicUsQ
```

Ramin öffnete diesen Link, klickte „Verbinden", erhielt danach: *„Die Website ist nicht erreichbar — 127.0.0.1 hat die Verbindung abgelehnt. ERR_CONNECTION_REFUSED"*.

### Ursache (verifiziert, kein Rateversuch)

Der Autorisierungs-Callback ist auf `http://127.0.0.1:<port>/callback` fest verdrahtet — das ist die **lokale Adresse des Claude-Code-Containers, in dem dieser Auftrag läuft**, nicht Ramins eigener Rechner. Sein Browser kann diese Adresse strukturell nicht erreichen, unabhängig von Firewall/Proxy-Einstellungen bei ihm.

Das offizielle npm-README (`@framer/agent`) bestätigt diese Architekturannahme explizit: *"Framer Agent works with any **local** agent harness..."* — das Produkt ist für Agenten konzipiert, die auf demselben Gerät wie der Browser laufen (klassisches lokales Claude-Code-Setup), nicht für einen isolierten Cloud-Container wie diese Arbeitsumgebung.

Kontrolle nach dem gescheiterten Versuch: `project list` weiterhin `[]` — es wurde nichts autorisiert oder in einem Zwischenzustand gespeichert.

**Kein Workaround versucht:** kein Port-Forwarding, kein Tunnel, keine Manipulation der Callback-URL — das wäre eine Umgehung der Autorisierung gewesen, die die Aufgabenstellung ausdrücklich untersagt.

### Geprüfte, aber nicht dokumentierte Alternative

Die CLI kennt den Aufruf `project auth <projectUrlOrId> [apiKey]` mit optionalem API-Key-Parameter — ein möglicher Weg ohne lokalen Browser-Callback. Ein Versuch, die offizielle Erklärungsseite (`framer.com/agents/external`) dazu abzurufen, scheiterte an einer Zugriffssperre dieser Arbeitsumgebung (HTTP 403). Das npm-README dokumentiert diesen Parameter nicht weiter. **Es wurde deshalb keine Vermutung angestellt, wo/wie ein solcher Key zu erzeugen wäre** — das müsste Ramin direkt bei Framer (Account-/Projekteinstellungen oder Framer-Support) klären.

### Sichere Alternativen (keine davon automatisch ausgeführt)

1. **Claude Code lokal auf Ramins eigenem Rechner** ausführen (dort, wo auch der Browser läuft) — damit funktioniert der Callback exakt wie vom Hersteller vorgesehen. Das ist der offiziell beschriebene, unterstützte Weg.
2. **Bei Framer direkt nachfragen**, ob ein API-Key-basierter Autorisierungsweg für Remote-/Cloud-Coding-Agenten existiert, und falls ja, wo er erzeugt wird.

### Status der offenen Punkte aus der ursprünglichen Anleitung

- Framer-Branching-Unterstützung konnte **nicht verifiziert** werden (Verbindung kam nicht zustande) — weiterhin offen.
- Kein Hinweis auf ein kostenpflichtiges Upgrade gefunden, aber ebenfalls nicht verifizierbar ohne Verbindung.

## 4.–11. (Inventur, Testbranch, Praxistest, Motion, Responsive, SEO, Vergleich)

**Nicht durchgeführt.** Jede dieser Phasen setzt eine aktive, autorisierte Projektverbindung voraus (Phase 3). Es wurden keine Platzhalter-, Beispiel- oder erfundenen Ergebnisse für diese Phasen erzeugt.

## Bewertung (1–10) — nur für tatsächlich Geprüftes

| Kriterium | Bewertung | Begründung |
|---|---|---|
| Setup-Qualität (offizieller Installer) | 9/10 | sauber, additiv, keine Überschreibung bestehender Skills, klare Doku |
| Dokumentationsqualität (offizielles README/CLI-Hilfe) | 9/10 | ungewöhnlich präzise für ein AI-Agent-Tool, nennt Berechtigungsgrenzen explizit |
| Kontrollierbarkeit des Verbindungsprozesses | 8/10 | Autorisierung liegt vollständig und nachvollziehbar bei Ramin, kein Umgehungsrisiko erkennbar |
| Alle anderen Kriterien (Design, Motion, Responsive, SEO, CMS-Tauglichkeit, Skalierbarkeit) | **nicht bewertbar** | erfordern echten Projektzugriff, der in diesem Auftrag nicht erreicht wurde |

## Vergleich mit Astro-Prototyp (Phase 11)

**Nicht durchführbar in diesem Auftrag** — ein Vergleich erfordert laut Auftrag ausschließlich Beobachtungen aus dem tatsächlich durchgeführten Framer-Test. Da dieser Test nicht stattfinden konnte, würde jeder Vergleich an dieser Stelle auf Spekulation statt auf Beobachtung beruhen — das widerspricht ausdrücklich der Vorgabe "keine neue allgemeine Architekturtheorie, nur beobachtete Ergebnisse". Dieser Vergleich wird nachgereicht, sobald ein echter Praxistest stattgefunden hat.

## Nächster Schritt

Wartet auf Ramins Entscheidung, wie mit dem Umgebungs-Blocker umgegangen wird (lokale Ausführung vs. Klärung eines API-Key-Wegs mit Framer). Sobald eine Verbindung zustande kommt — gleich auf welchem Weg —, wird dieser Pilot mit dem vereinbarten Read-only-Test (Projektname, Zugriff, Seiten, Komponenten, CMS, Branch-Unterstützung) fortgesetzt, danach erst der sichere Testbranch und die restlichen Phasen — nicht als neuer Auftrag.
