# Framer-Agent-Pilot — Ergebnisbericht

Stand: 2026-07-21
Status: **Einrichtung abgeschlossen, Praxistest blockiert bei Phase 3 (Projektautorisierung durch Ramin).**

Dieser Bericht dokumentiert ehrlich, was in diesem Auftrag tatsächlich durchgeführt werden konnte, und wo er aus einem echten, nicht umgehbaren Grund pausiert wurde. Es werden **keine** Ergebnisse für Phasen erfunden, die technisch nicht erreicht wurden.

---

## Zusammenfassung

| Phase | Status |
|---|---|
| 1. Voraussetzungen prüfen | ✅ abgeschlossen |
| 2. Offizielle Framer-Agent-Integration einrichten | ✅ abgeschlossen |
| 3. Framer-Projekt verbinden | ⏸ **pausiert — Browser-Autorisierung durch Ramin erforderlich** |
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

## 3. Framer-Projekt verbinden (Phase 3) — **PAUSIERT**

### Was technisch geprüft wurde (sicher, ohne Kontoverbindung)

```
npx @framer/agent@latest project list   →  []   (keine verbundenen Projekte — erwartungsgemäß bei Erstinstallation)
```

### Der eigentliche Blocker

Laut offizieller CLI-Hilfe (`project --help`) und offiziellem README verbindet sich der Agent mit einem Framer-Projekt über:

```
npx @framer/agent@latest project auth <projectUrlOrId> [apiKey]
```

oder beim Anlegen/Duplizieren eines Projekts jeweils **"via browser approval"** — der offizielle CLI-Text selbst benennt das explizit. Das offizielle README bestätigt zusätzlich: *"This will connect to your Framer project and ask you to grant access to the project from your browser."*

Das bedeutet konkret:

1. Es gibt noch keine Projekt-URL für "KFZ-GutachtenHelden" in diesem System — die öffentliche Live-Domain (`https://www.kfz-gutachtenhelden.de`) ist **nicht** dasselbe wie der Framer-Editor-Projektlink, den nur ein eingeloggter Mitbearbeiter erhält.
2. Selbst mit einer Projekt-URL löst die Autorisierung einen **Browser-Freigabeschritt** aus, den nur Ramins eigenes Framer-Konto bestätigen kann.
3. Es gibt keinen sicheren, korrekten Weg, diesen Schritt zu erraten, zu simulieren oder zu umgehen — genau das schließt die Aufgabenstellung ausdrücklich aus ("keine Zugangsdaten erfinden", "nicht versuchen, Authentifizierung zu umgehen").

**Deshalb wurde hier bewusst pausiert, statt einen Fake-Verbindungsversuch oder erfundene Inventurdaten zu erzeugen.**

### Was Ramin jetzt konkret tun muss

1. Das Framer-Projekt **KFZ-GutachtenHelden** öffnen (Browser unter framer.com oder die Framer-Desktop-App).
2. Den Projektlink kopieren:
   - **Browser:** Adresszeile kopieren, während das Projekt geöffnet ist.
   - **App:** Rechtsklick auf den Projekt-Tab → „Copy Project Link".
3. Diesen Link in einer Nachricht an Claude einfügen (er enthält keine Zugangsdaten, nur eine Projekt-ID).
4. Sobald Claude `project auth <Link>` ausführt, öffnet sich ein Browser-Freigabedialog — **Ramin muss diesen selbst in seinem eigenen, eingeloggten Framer-Konto bestätigen.** Claude zeigt an dieser Stelle nur die Aufforderung an, kann den Klick nicht für Ramin ausführen.
5. Falls beim Verbindungsversuch mehrere Projekte zur Auswahl erscheinen: Claude pausiert erneut und nennt die gefundenen Projektnamen zur Auswahl.

### Falls das nicht funktioniert (mögliche Alternativursachen, laut offizieller FAQ)

- Framer-Branching (Voraussetzung für sichere, isolierte Agentenarbeit) ist laut FAQ ein reguläres Framer-Feature ("Framer has branching, so every change made by an external agent automatically happens on a branch") — keine Hinweise auf einen kostenpflichtigen Plan-Unterschied gefunden, aber das wurde nicht am echten Projekt verifiziert, da keine Verbindung bestand. Falls Ramins Plan Branching nicht anbietet, wird das erst beim echten Verbindungsversuch sichtbar — Claude bricht in diesem Fall sofort ab und berichtet, ohne einen Workaround zu versuchen.

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

Warten auf Ramins Projektlink und Browser-Freigabe. Danach: Phase 3 fortsetzen (Verbindung herstellen), anschließend Phasen 4–11 wie im Auftrag beschrieben durchführen — als Fortsetzung dieses Piloten, nicht als neuer Auftrag.
