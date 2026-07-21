# 0005 – Astro statt Framer für den technischen Neubau

Status: entschieden (2026-07-21)

## Kontext

Die aktuelle Live-Website läuft auf Framer und performt laut Einschätzung des Inhabers gut. Für den langfristigen, selbst kontrollierten technischen Neubau (nicht für die aktuelle Live-Seite) wurde ein Framework gewählt.

## Entscheidung

Astro für den technischen Neubau unter `apps/website`. Framer bleibt die Live-Plattform, bis ein expliziter, freigegebener Umzug erfolgt.

## Begründung

- Statische Generierung als Standard passt zu "SEO-Stabilität vor visueller Neuerfindung" und "Sicherheit vor Geschwindigkeit" (strategische Leitlinie).
- Minimales clientseitiges JavaScript, kein schweres UI-Framework nötig für eine überwiegend inhaltsgetriebene Marketing-/Conversion-Website.
- Volle Kontrolle über Markup/Performance/SEO-Details, die in einem No-Code-Website-Baukasten wie Framer nicht immer möglich sind.
- Vorgabe der strategischen Leitlinie dieses Auftrags.

## Konsequenzen

- Framer bleibt vollständig unverändert und live, solange kein Umzug freigegeben ist (`docs/migration/framer-to-astro-strategy.md`).
- Der Umzug erfolgt schrittweise mit Paritätsanspruch, nicht als Neugestaltung.
