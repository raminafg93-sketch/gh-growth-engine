# Website-Plattform-Entscheidung — Astro vs. Framer

Stand: 2026-07-21
Status: **Entschieden bis auf Weiteres.** Keine Plattformänderung. Framer bleibt Live-System, Astro bleibt kontrollierter Neubau-Prototyp.

Diese Datei ist die kurze Abschlussübersicht nach dem Framer-Agent-Piloten. Details: `docs/architecture/decisions/0005-astro-statt-framer-fuer-technischen-neubau.md` (ursprüngliche Entscheidung) und `docs/architecture/framer-agent-final-conclusion.md` (vollständiger Pilotbericht, Branch `docs/framer-final-conclusion`, nicht gemerged).

---

## 1. Warum Astro ursprünglich gewählt wurde

Für den langfristigen, selbst kontrollierten technischen Neubau (nicht für die damals schon laufende Live-Seite) wurde Astro festgelegt (ADR `0005`):

- Statische Generierung als Standard passt zur strategischen Leitlinie „SEO-Stabilität vor visueller Neuerfindung" und „Sicherheit vor Geschwindigkeit".
- Minimales clientseitiges JavaScript — passend für eine überwiegend inhaltsgetriebene Marketing-/Conversion-Website, kein schweres UI-Framework nötig.
- Volle Kontrolle über Markup, Performance- und SEO-Details, die ein No-Code-Baukasten wie Framer nicht in jedem Fall zulässt.
- Framer sollte dabei ausdrücklich unverändert live bleiben, bis ein expliziter, freigegebener Umzug erfolgt — kein Ersatz „über Nacht".

## 2. Welche neuen Erkenntnisse der Framer-Pilot gebracht hat

- Framer bietet inzwischen einen **offiziellen, von framer.com selbst gepflegten Agenten** (`@framer/agent`) für Claude Code — kein Community-Hack. Einrichtung und Autorisierung liefen additiv und sicher (keine Überschreibung bestehender Skills, keine Umgehung von Authentifizierung, keine unautorisierte Aktion).
- Die Autorisierung des echten Projekts „GutachtenHelden" gelang tatsächlich — Framer als Plattform ist grundsätzlich programmatisch aus Claude Code heraus ansprechbar.
- Der Agent ist architektonisch als **lokales Werkzeug** konzipiert (Coding-Agent und Browser auf demselben Gerät), nicht primär für isolierte Cloud-Umgebungen.
- Zu Design-Qualität, Motion, Responsive-Verhalten, CMS-Handling und SEO-Feldpflege des Agenten liegt **noch keine einzige reale Beobachtung** vor — dazu kam es nicht, siehe Punkt 3.

## 3. Warum der Pilot in dieser Cloud-Umgebung nicht vollständig abgeschlossen werden konnte

Zwei rein infrastrukturelle Hürden, keine inhaltlichen:

- Der Standard-Autorisierungsweg öffnet einen Callback auf `127.0.0.1:<port>` — in dieser Cloud-Arbeitsumgebung liegt das im Claude-Code-Container, nicht auf Ramins Rechner. Dieser Weg wurde über den von der CLI selbst dokumentierten API-Key-Parameter erfolgreich umgangen (kein Verstoß, sondern ein offiziell vorgesehener Alternativweg).
- Der anschließende Live-Sitzungsaufbau (`session new`) benötigt eine WebSocket-Verbindung zu `api.framer.com`. Diese wird durch die Netzwerk-Egress-Richtlinie dieser spezifischen Cloud-Arbeitsumgebung mit `403` blockiert (verifiziert per direktem Verbindungstest und internem Proxy-Diagnoseprotokoll) — nachweislich keine Framer-Konto-, Plan- oder Berechtigungsfrage.

Damit blieben Read-only-Test, Inventur, Testbranch, Praxistest, Motion-, Responsive- und SEO-Prüfung sowie der Vergleich mit dem Astro-Prototyp technisch unerreichbar. Es wurden dafür bewusst keine angenommenen Ergebnisse dokumentiert.

## 4. Voraussetzungen für Framer als künftige primäre Marketing-Plattform

Bevor Framer (mit Agent-gestützter Weiterentwicklung) ernsthaft als primäre Plattform in Betracht gezogen werden kann, müssen mindestens erfüllt sein:

- Ein **erfolgreicher lokaler Praxistest** auf einem Mac (siehe `docs/framer/framer-pilot-local-mac-checklist.md`) mit echten Beobachtungen zu Design, Motion, Responsive-Verhalten, CMS und SEO-Feldpflege.
- Ein **beobachtungsbasierter Vergleich** mit dem Astro-Prototyp (nicht spekulativ) zu Performance, SEO-Kontrolle und Wartungsaufwand.
- Klärung, ob Framer-Branching für sichere, isolierte Testarbeit tatsächlich wie erwartet funktioniert (bisher unverifiziert).
- Eine ausdrückliche Freigabe durch Ramin für jeden Schritt, der die Live-Website betrifft — unverändert gemäß Autonomiestufen in `12_AI_SYSTEM/03_github-autonomy.md`.

Ohne diese Voraussetzungen bleibt Framer das, was es heute ist: die bewährte, unverändert laufende Live-Plattform — nicht mehr, aber auch nicht weniger.

## 5. Welche Architektur wir bis auf Weiteres verfolgen

- **Framer bleibt die Live-Plattform.** Keine Änderung, kein Umzug, keine Migration ohne explizite, separate Freigabe.
- **Astro bleibt der kontrollierte Neubau-Prototyp** unter `apps/website` im Monorepo — Benchmark, Referenz und Fallback/Exit-Option, wie in `claude/homepage-v2-foundation` (PR #10) festgelegt.
- **Keine weitere Astro-Entwicklung** über den bestehenden Stand hinaus, bis ein realer Framer-Vergleich vorliegt (Punkt 4).
- **Keine weiteren Framer-Agent-Verbindungsversuche in dieser Cloud-Arbeitsumgebung.** Eine Fortsetzung ist ausschließlich lokal auf einem Mac vorgesehen, nicht in dieser Session oder einer vergleichbaren Cloud-Umgebung.

## 6. Empfehlung für den aktuellen Stand

| Bereich | Empfehlung |
|---|---|
| **Marketing-Website** | Unverändert auf Framer live lassen. Keine Migration, keine strukturellen Eingriffe ohne separate Freigabe. |
| **Dokumentation** | In diesem Repository (`gh-growth-engine`) als alleinige Quelle der Wahrheit fortführen — Wissensbasis, Architektur, Piloten-/Entscheidungsdokumente an einem Ort. |
| **GitHub** | Wie bisher: PRs für alles, klare Trennung LIVE-WIRKSAM/NICHT LIVE-WIRKSAM, Framer-Piloten-PRs (`chore/framer-agent-pilot` #11, `docs/framer-final-conclusion` #12) bewusst offen und ungemerged lassen, bis lokal abgeschlossen. |
| **Claude Code** | Für Wissens-, Dokumentations- und Astro-Prototyp-Arbeit in der Cloud-Umgebung weiter einsetzen. Für Framer-Agent-Aufgaben ausschließlich lokal auf dem Mac einsetzen, nicht in dieser Cloud-Umgebung. |
| **Framer** | Als Live-System beibehalten. Agent-gestützte Weiterentwicklung erst nach erfolgreichem lokalem Pilotabschluss (Punkt 4) erneut bewerten — kein Einsatz für produktive Änderungen vor dieser Bewertung. |
| **Astro** | Als Prototyp/Benchmark im Monorepo unverändert erhalten. Keine neue Entwicklung, kein Live-Einsatz, bis eine begründete Entscheidung für oder gegen einen Umzug getroffen wurde. |

Kein neues Experiment, kein API-Aufruf und keine Framer-Änderung waren zur Erstellung dieser Übersicht notwendig oder wurden vorgenommen.
