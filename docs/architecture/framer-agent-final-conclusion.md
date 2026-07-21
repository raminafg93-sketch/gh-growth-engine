# Framer-Agent-Pilot — Abschlussbericht

Stand: 2026-07-21
Status: **Pilot abgeschlossen.** Autorisierung und Werkzeugbewertung erfolgreich, praktischer Live-Test in dieser Cloud-Arbeitsumgebung technisch nicht durchführbar. Fortsetzung erfordert lokale Ausführung auf einem Mac (siehe Checkliste `docs/framer/framer-pilot-local-mac-checklist.md`).

Dieser Bericht fasst den gesamten Piloten zusammen (Details siehe `docs/framer/framer-agent-pilot-report.md` auf Branch `chore/framer-agent-pilot`, PR #11, weiterhin nicht gemerged) und zieht daraus Schlussfolgerungen für die künftige Website-Architektur.

---

## 1. Welche Schritte erfolgreich waren

- **Werkzeug-Verifikation**: `@framer/agent` wurde als offizielles, von framer.com-Mitarbeitern gepflegtes npm-Paket verifiziert (Version `0.0.38`, Abhängigkeit `framer-api@0.1.24`) — kein Community-Fork, keine ungeprüfte Quelle.
- **Voraussetzungs-Lücke sauber gelöst**: Node.js v24+ wurde über eine offizielle, reversible Standalone-Binärdistribution bereitgestellt, ohne die bestehende System-/Projekt-Node-Installation (`/opt/node22`, Astro-Toolchain) zu verändern.
- **Offizielle Einrichtung**: `npx @framer/agent@latest setup` installierte 2 Skills additiv unter `~/.claude/skills` und `~/.agents/skills`. Vorher-Nachher-Diff bestätigt: alle 7 bereits vorhandenen Skills und `manifest.json` blieben unverändert.
- **Projektautorisierung**: Nach einem ersten strukturell bedingten Fehlversuch (siehe Punkt 2) gelang die Autorisierung des echten Projekts „GutachtenHelden" über den von der CLI selbst dokumentierten `apiKey`-Parameter, nachdem Ramin die Freigabe im Framer-Dialog aktiv bestätigt hatte. `project list` bestätigte die erfolgreiche Bindung.
- **Keine Sicherheitsregel verletzt**: Zu keinem Zeitpunkt wurde versucht, Authentifizierung zu umgehen, ein Secret committet, main verändert oder ohne Freigabe live veröffentlicht.

## 2. Welche Schritte durch die Cloud-Umgebung blockiert wurden

- **Browser-Autorisierung per lokalem Callback**: Der Standard-Autorisierungsweg öffnet einen HTTP-Listener auf `127.0.0.1:<port>/callback`. In dieser Cloud-Arbeitsumgebung liegt diese Adresse im Claude-Code-Container, nicht auf Ramins Mac — sein Browser konnte den Callback strukturell nicht erreichen (`ERR_CONNECTION_REFUSED`). Bestätigt durch das offizielle README: *„Framer Agent works with any **local** agent harness..."*
- **Live-Session-Aufbau (`session new`)**: Auch nach erfolgreicher Autorisierung scheiterte der Aufbau der Live-Session zweimal mit `Connection timeout after 90000ms`. Debug-Log zeigt das Ziel: `wss://api.framer.com/channel/headless-plugin`. Ein direkter `curl`-Test und das interne Proxy-Diagnoseprotokoll dieser Umgebung bestätigten übereinstimmend: `api.framer.com` wird von der Netzwerk-Egress-Richtlinie dieser spezifischen Arbeitsumgebung mit `403` blockiert (`connect_rejected`, „gateway answered 403 to CONNECT"). `framer.com` selbst (für den Auth-Redirect) ist erreichbar.
- **Folge**: Alle Phasen, die eine Live-Verbindung voraussetzen — Read-only-Test, Seiten-/Komponenten-/CMS-/Style-Inventur, sicherer Testbranch, Praxistest-Seite, Motion-, Responsive- und SEO-Prüfung, Vergleich mit dem Astro-Prototyp — konnten in dieser Umgebung nicht durchgeführt werden. Es wurden dafür bewusst keine angenommenen oder erfundenen Ergebnisse eingetragen.

## 3. Welche Erkenntnisse wir trotzdem gewonnen haben

- Der offizielle Framer-Agent ist ein **lokales Werkzeug**: Er ist für Setups konzipiert, in denen Coding-Agent und Browser auf demselben Gerät laufen. Cloud-/Remote-Ausführung ist kein vom Hersteller vorgesehener Use Case für den Standard-Autorisierungsweg.
- Es existiert ein **alternativer, nicht ausführlich dokumentierter API-Key-Autorisierungsweg** (`project auth <url> <apiKey>`), der ohne lokalen Callback funktioniert — nützlich als Fallback, aber ohne offizielle Dokumentation, wie/wo ein Key unabhängig vom Browser-Flow erzeugt wird.
- Die eigentliche Projekt-Interaktion (Lesen und Schreiben von Seiten, Komponenten, CMS, Styles) läuft über eine **WebSocket-Relay-Verbindung zu `api.framer.com`**, getrennt vom reinen Autorisierungs-Redirect über `framer.com`. Beide Hosts müssen erreichbar sein, nicht nur einer.
- Die offizielle Installation ist **additiv und sauber**: keine Überschreibung bestehender Skills, keine versteckten Nebenwirkungen, klare Trennung zwischen Setup (`setup`), Autorisierung (`project auth`) und Session-Betrieb (`session new`).
- Die Sicherheitsarchitektur des Tools folgt dem erwarteten Muster: explizite Nutzerfreigabe im Framer-Dialog, projektgebundene Keys, keine automatische Veröffentlichung ohne expliziten `publish`-Aufruf.

## 4. Welche Risiken ausgeschlossen werden konnten

- **Kein Risiko für main/die Live-Website**: Zu keinem Zeitpunkt wurde das bestehende Framer-Projekt verändert, ein Branch auf main angewendet oder etwas veröffentlicht — die Blockade trat vor jeder inhaltlichen Aktion auf.
- **Kein Secret-Leck ins Repository**: Der kurzzeitig im Browser sichtbare API-Key wurde nur lokal zur Autorisierung verwendet, nie in eine Datei geschrieben, nie committet und nirgends im Klartext wiederholt.
- **Kein Hinweis auf ein Framer-Konto-/Plan-Problem**: Die Blockade ist nachweislich eine Netzwerkrichtlinie dieser spezifischen Arbeitsumgebung (`api.framer.com` per Proxy-Policy gesperrt), keine fehlende Berechtigung, kein Kontingent- oder Abo-Limit auf Framer-Seite.
- **Keine Umgehungsversuche**: Es wurde kein Port-Forwarding, kein Tunnel und keine Manipulation der Callback-URL versucht — die Aufgabenstellung verlangte ausdrücklich, Authentifizierung nicht zu umgehen, und das wurde eingehalten.

## 5. Welche Fragen offen bleiben

- Ob Framer-**Branching-Unterstützung** (isolierte Testbranches innerhalb eines Projekts) tatsächlich wie erwartet funktioniert, konnte mangels Live-Session nicht verifiziert werden.
- Wie sich der Agent in der Praxis bei echten Aufgaben schlägt (Design-Qualität, Motion-Umsetzung, Responsive-Verhalten, SEO-Feldpflege, CMS-Handling) — dazu liegt noch keine einzige reale Beobachtung vor.
- Ob und wie ein API-Key unabhängig vom Browser-Callback offiziell (d. h. dokumentiert und dauerhaft) erzeugt werden kann, für den Fall künftiger Cloud-Ausführung.
- Ein direkter, beobachtungsbasierter Vergleich mit dem Astro-Prototyp (Phase 11 der ursprünglichen Aufgabenstellung) bleibt aus, bis ein echter Praxistest stattgefunden hat.

## 6. Voraussetzungen für einen erfolgreichen lokalen Abschluss auf dem Mac

- Node.js **v24 oder neuer** lokal installiert (oder per `nvm`/offiziellem Installer bereitgestellt).
- Aktuelle Version von Claude Code lokal auf dem Mac installiert und eingeloggt.
- Direkter, ungefilterter Netzwerkzugriff auf `framer.com` **und** `api.framer.com` (kein Firmen-Proxy, der `api.framer.com` blockiert — genau das war die Cloud-Blockade).
- Zugriff auf das Framer-Konto, das Eigentümer/Mitglied des Projekts „GutachtenHelden" ist, um die Browser-Freigabe im Autorisierungsdialog zu bestätigen.
- Der zuvor kurzzeitig exponierte API-Key sollte vor dem lokalen Neustart in den Framer-Projekteinstellungen **rotiert/widerrufen** worden sein (falls noch nicht geschehen).
- Sauberer lokaler Git-Checkout des Repositories, `main` aktuell.

Konkrete Schritt-für-Schritt-Anleitung: siehe `docs/framer/framer-pilot-local-mac-checklist.md`.

## 7. Auswirkungen auf die künftige Website-Architektur

- **Kein Anlass, den Astro-Prototyp aufzugeben.** Er bleibt wie in `claude/homepage-v2-foundation` (gemergt, PR #10) beschlossen als Benchmark, Referenz und Fallback im Monorepo bestehen — die Entscheidung „keine weitere Astro-Entwicklung, bis der Framer-Piloten-Vergleich vorliegt" bleibt unverändert gültig, da der Vergleich noch aussteht.
- **Framer-Agent ist ein ernstzunehmendes, offiziell unterstütztes Werkzeug** — die Einrichtungs- und Autorisierungsqualität war hoch (additiv, sicher, gut dokumentiert). Das spricht dafür, den Piloten lokal zu Ende zu führen, statt ihn wegen der Cloud-Netzwerkrichtlinie ganz zu verwerfen.
- **Architekturentscheidung „Framer als Live-System vs. Astro als Zielarchitektur" bleibt offen**, bis reale Beobachtungen zu Design-, Motion-, Responsive- und SEO-Verhalten des Framer-Agents vorliegen. Diese Entscheidung sollte nicht auf Basis der bisherigen (rein infrastrukturellen) Erkenntnisse getroffen werden.
- **Praktische Konsequenz für Cloud-Arbeitsumgebungen**: Aufgaben, die eine Live-Framer-Verbindung erfordern, sollten künftig von vornherein als „nur lokal durchführbar" eingeplant werden, nicht als Cloud-Session-Auftrag — das spart wiederholte Diagnosezyklen wie in diesem Piloten.
- Keine Änderung an Domain, DNS, Tracking, Redirects oder Live-Inhalten war zu irgendeinem Zeitpunkt erforderlich oder wurde vorgenommen — die bestehende Framer-Live-Website ist unverändert.
