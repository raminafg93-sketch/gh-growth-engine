# 0008 – Keine Live-Migration in dieser Phase

Status: entschieden (2026-07-21)

## Kontext

Der Auftrag umfasst ausdrücklich nur das Monorepo-Fundament und ein technisches Website-Grundgerüst, nicht die Migration der Live-Website.

## Entscheidung

Keine Domain-Umstellung, keine Migration der bestehenden Live-Seite, keine Veränderung an Framer in dieser Phase. Die interne Vorschauseite ist explizit als "nicht für den Livebetrieb" gekennzeichnet und trägt `noindex`/`robots.txt: Disallow: /`.

## Begründung

- Strategische Leitlinie: "Bewahren vor Ersetzen", "Sicherheit vor Geschwindigkeit".
- Ohne vollständigen technischen Crawl der Live-Seite (siehe `13_REPORTS/01_website-audit.md`) ist eine sichere Migration ohnehin nicht möglich.

## Konsequenzen

- Der nächste Großauftrag (forensische Inventarisierung + Paritätsnachbau) ist eigenständig zu beauftragen, nicht automatisch Teil dieses Fundaments.
