# Website-Plattform-Entscheidung — Astro vs. Framer

Stand: 2026-07-21 (konsolidiert — zentrale Plattform-Dokumentation)
Status: **Zwischenentscheidung getroffen, endgültige Migration noch nicht freigegeben.** Framer bleibt Live-System und bevorzugter Kandidat für die primäre Marketing-Website, Astro bleibt funktionsfähiger Benchmark und technischer Fallback.

Diese Datei ist die zentrale, vollständige Plattform-Dokumentation. Sie konsolidiert die Inhalte aus dem Rohbericht (PR #11, `docs/framer/framer-agent-pilot-report.md`) und dem ersten Abschlussbericht (PR #12, `docs/architecture/framer-agent-final-conclusion.md`) — beide PRs wurden als „superseded by PR #13" geschlossen, ohne gemergt zu werden. Referenz für die ursprüngliche Astro-Entscheidung: `docs/architecture/decisions/0005-astro-statt-framer-fuer-technischen-neubau.md`.

---

## 1. Warum Astro ursprünglich gewählt wurde

Für den langfristigen, selbst kontrollierten technischen Neubau (nicht für die damals schon laufende Live-Seite) wurde Astro festgelegt (ADR `0005`):

- Statische Generierung als Standard passt zur strategischen Leitlinie „SEO-Stabilität vor visueller Neuerfindung" und „Sicherheit vor Geschwindigkeit".
- Minimales clientseitiges JavaScript — passend für eine überwiegend inhaltsgetriebene Marketing-/Conversion-Website, kein schweres UI-Framework nötig.
- Volle Kontrolle über Markup, Performance- und SEO-Details, die ein No-Code-Baukasten wie Framer nicht in jedem Fall zulässt.
- Framer sollte dabei ausdrücklich unverändert live bleiben, bis ein expliziter, freigegebener Umzug erfolgt — kein Ersatz „über Nacht".

## 2. Framer-Agent-Pilot — was wir gelernt haben

### 2.1 Was erfolgreich war

- `@framer/agent` wurde über die öffentliche npm-Registry verifiziert (Version `0.0.38`, Abhängigkeit `framer-api@0.1.24`) — gepflegt von framer.com-Mitarbeiterkonten, kein Community-Paket. Offizielle Referenzseite: `framer.com/agents/external`.
- Die fehlende Node.js-v24-Voraussetzung wurde reversibel gelöst: eine offizielle Standalone-Binärdistribution (Node v26.5.0) wurde in ein temporäres Verzeichnis geladen, die bestehende System-/Projekt-Node-Installation blieb unverändert.
- `npx @framer/agent@latest setup` installierte additiv 2 Skills unter `~/.claude/skills` und `~/.agents/skills`. Vorher-Nachher-Diff bestätigte: alle 7 bereits vorhandenen Skills und `manifest.json` blieben unverändert. Kein separater Framer-MCP-Server nötig (laut offizieller FAQ).
- Die Autorisierung des echten Projekts „GutachtenHelden" gelang: nach einem ersten strukturell bedingten Fehlversuch (siehe 2.2) bestätigte Ramin die Freigabe aktiv im Framer-Dialog, danach wurde die Bindung über den von der CLI selbst dokumentierten `apiKey`-Parameter hergestellt und über `project list` bestätigt.
- Framer als Plattform ist damit grundsätzlich programmatisch aus Claude Code heraus ansprechbar — die Autorisierungskette funktioniert wie vom Hersteller vorgesehen.

### 2.2 Was durch die Cloud-Netzwerkrichtlinie blockiert war

Zwei rein infrastrukturelle Hürden, keine inhaltlichen oder kontobezogenen:

- **Browser-Callback:** Der Standard-Autorisierungsweg öffnet einen Callback auf `127.0.0.1:<port>` — in dieser Cloud-Arbeitsumgebung liegt das im Claude-Code-Container, nicht auf Ramins Rechner (`ERR_CONNECTION_REFUSED`). Bestätigt durch das offizielle README: „Framer Agent works with any **local** agent harness...". Dieser Weg wurde über den offiziell dokumentierten `apiKey`-Parameter erfolgreich umgangen — kein Verstoß, sondern ein vorgesehener Alternativweg.
- **Live-Sitzungsaufbau:** `session new` scheiterte zweimal identisch (`FramerAPIError: Connection timeout after 90000ms`). Debug-Log zeigt das Ziel `wss://api.framer.com/channel/headless-plugin`. Ein direkter `curl`-Test (`403`) und das interne Proxy-Diagnoseprotokoll dieser Umgebung (`connect_rejected`, „gateway answered 403 to CONNECT") bestätigten übereinstimmend: `api.framer.com` wird durch die Netzwerk-Egress-Richtlinie dieser spezifischen Arbeitsumgebung blockiert. `framer.com` selbst (für den Auth-Redirect) war erreichbar.
- **Folge:** Read-only-Test, Seiten-/Komponenten-/CMS-/Style-Inventur, sicherer Testbranch, Praxistest-Seite, Motion-, Responsive- und SEO-Prüfung sowie der Vergleich mit dem Astro-Prototyp blieben technisch unerreichbar. Es wurden dafür bewusst keine angenommenen Ergebnisse dokumentiert.

### 2.3 Sicherheit — was ausgeschlossen werden konnte

- Kein Zeitpunkt, an dem main/die Live-Website verändert oder etwas veröffentlicht wurde — die Blockade trat vor jeder inhaltlichen Aktion auf.
- Kein Secret-Leck ins Repository: Der kurzzeitig im Browser sichtbare API-Key wurde nur lokal zur Autorisierung verwendet, nie in eine Datei geschrieben, nie committet, nirgends im Klartext wiederholt (Empfehlung an Ramin: diesen Key in den Framer-Projekteinstellungen zu rotieren/widerrufen, falls noch nicht geschehen).
- Kein Hinweis, dass die Netzwerkblockade selbst mit dem Framer-Konto, -Plan oder einer fehlenden Berechtigung zusammenhängt — es ist eine Richtlinie dieser Arbeitsumgebung, keine Framer-seitige Einschränkung.
- Keine Umgehungsversuche: kein Port-Forwarding, kein Tunnel, keine Manipulation der Callback-URL.

### 2.4 Offene Fragen

- Wie sich der Agent in der Praxis bei echten Aufgaben schlägt (Design-Qualität, Motion, Responsive-Verhalten, SEO-Feldpflege, CMS-Handling) — dazu liegt noch keine reale Beobachtung vor.
- Ob ein API-Key unabhängig vom Browser-Callback offiziell und dauerhaft erzeugt werden kann, für den Fall künftiger Cloud-Ausführung.
- Ein beobachtungsbasierter Vergleich mit dem Astro-Prototyp bleibt aus, bis ein echter Praxistest stattgefunden hat.
- **Aktualisiert durch neue Plan-Information (Abschnitt 3):** Framer-Branching konnte nicht nur wegen der blockierten Live-Session nicht verifiziert werden — der aktuelle Tarif („Legacy Basic '24") enthält laut Tarifübersicht ohnehin **kein Branching**. Die Frage ist damit nicht mehr rein technisch offen, sondern zusätzlich planabhängig (siehe Abschnitt 3).

## 3. Framer-Plan und wirtschaftliche Einschränkungen

Von Ramin bestätigte Fakten zum aktuellen Framer-Projekt:

- Das Framer-Projekt läuft aktuell auf **„Legacy Basic '24"**.
- Der Plan verlängert sich laut Framer am **5. Januar 2027**.
- Das Projekt enthält bereits **mehr Seiten, als der Basic-Plan erlaubt**.
- **Basic** umfasst laut angezeigter Tarifübersicht:
  - 30 Site Pages
  - 2 CMS Collections
  - kein Branching
  - kein Staging
- **Pro** umfasst laut angezeigter Tarifübersicht:
  - 150 Site Pages
  - 10 CMS Collections
  - Branching
  - Staging

### Ableitungen

- Für eine kleine, weitgehend statische Website reicht Basic möglicherweise aus.
- Für die geplante SEO-Strategie mit vielen Leistungsseiten, Problemlösungsseiten, Blogartikeln und lokalen Landingpages wird Basic langfristig zu knapp — das Projekt liegt schon jetzt über dem Basic-Limit.
- Branching ist für einen sicheren Claude-Code-/Framer-Workflow (isolierte Testbranches statt direkter Arbeit an main) besonders relevant — auf Basic nicht verfügbar.
- Falls Framer als primäre Marketing-Website gewählt wird, ist ein **Pro-Upgrade sehr wahrscheinlich eine operative Voraussetzung und kein reines Komfort-Upgrade.**
- **Aktuell soll trotzdem noch kein Upgrade erfolgen.** Die Upgrade-Entscheidung wird erst nach einem erfolgreichen lokalen Framer-Agent-Piloten auf dem MacBook getroffen (siehe Abschnitt 4 und 6).

## 4. Voraussetzungen für Framer als künftige primäre Marketing-Plattform

Bevor Framer (mit Agent-gestützter Weiterentwicklung) als primäre Plattform final freigegeben werden kann, müssen mindestens erfüllt sein:

- Ein **erfolgreicher lokaler Praxistest** auf einem Mac (siehe `docs/framer/framer-pilot-local-mac-checklist.md`) mit echten Beobachtungen zu Design, Motion, Responsive-Verhalten, CMS und SEO-Feldpflege — Read-only-Test und ein kontrollierter Bearbeitungstest.
- Ein **beobachtungsbasierter Vergleich** mit dem Astro-Prototyp (nicht spekulativ) zu Performance, SEO-Kontrolle und Wartungsaufwand.
- Klärung, ob ein Pro-Upgrade (für Branching, Staging und ausreichend Seiten-/CMS-Kontingent) wirtschaftlich sinnvoll ist — Entscheidung erst nach dem lokalen Piloten, siehe Abschnitt 3.
- Eine ausdrückliche Freigabe durch Ramin für jeden Schritt, der die Live-Website betrifft — unverändert gemäß Autonomiestufen in `12_AI_SYSTEM/03_github-autonomy.md`.

Ohne diese Voraussetzungen bleibt Framer das, was es heute ist: die bewährte, unverändert laufende Live-Plattform auf dem bestehenden Basic-Plan — nicht mehr, aber auch nicht weniger.

## 5. Empfehlung für den aktuellen Stand

| Bereich | Empfehlung |
|---|---|
| **Marketing-Website** | Unverändert auf Framer (Basic-Plan) live lassen. Keine Migration, keine strukturellen Eingriffe, kein Plan-Upgrade ohne separate Freigabe. |
| **Dokumentation** | In diesem Repository (`gh-growth-engine`) als alleinige Quelle der Wahrheit fortführen — Wissensbasis, Architektur, Piloten-/Entscheidungsdokumente an einem Ort, konsolidiert in dieser Datei. |
| **GitHub** | Wie bisher: PRs für alles, klare Trennung LIVE-WIRKSAM/NICHT LIVE-WIRKSAM. Die früheren Framer-Piloten-PRs `chore/framer-agent-pilot` (#11) und `docs/framer-final-conclusion` (#12) sind als „superseded by PR #13" geschlossen; diese Datei ist die aktuelle, verbindliche Fassung. |
| **Claude Code** | Für Wissens-, Dokumentations- und Astro-Prototyp-Arbeit in der Cloud-Umgebung weiter einsetzen. Für Framer-Agent-Aufgaben ausschließlich lokal auf dem Mac einsetzen, nicht in dieser Cloud-Umgebung. |
| **Framer** | Bevorzugter Kandidat für die primäre Marketing-Website. Kein Plan-Upgrade und keine produktive Agent-Nutzung vor erfolgreichem lokalem Piloten (Abschnitt 4). |
| **Astro** | Als funktionsfähiger Benchmark und technischer Fallback im Monorepo unverändert erhalten. Keine neue Entwicklung, kein Live-Einsatz, bis die Plattformentscheidung final abgeschlossen ist. |

## 6. Aktuelle Zwischenentscheidung

- **GitHub bleibt Dokumentations- und Versionsbasis.**
- **Astro bleibt funktionsfähiger Benchmark und technischer Fallback.**
- **Framer bleibt der bevorzugte Kandidat für die primäre Marketing-Website.**
- **Die endgültige Migration zu Framer ist noch nicht freigegeben.**
- **Voraussetzung ist ein erfolgreicher lokaler Read-only- und Bearbeitungs-Pilot auf dem MacBook.**
- **Kein Framer-Pro-Upgrade vor diesem Test.**
- **Keine weiteren Astro-Ausbauarbeiten, bis die Plattformentscheidung final abgeschlossen ist.**

Kein neues Experiment, kein API-Aufruf und keine Framer-Änderung waren zur Erstellung oder Konsolidierung dieser Übersicht notwendig oder wurden vorgenommen.
