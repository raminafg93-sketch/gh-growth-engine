# 0009 – Strategie der schrittweisen Framer-Parität

Status: entschieden (2026-07-21)

## Kontext

Die Live-Website gefällt dem Inhaber und performt nach seiner Einschätzung gut bei Google. Ein vollständiger Neubau mit neuer Architektur birgt SEO- und Conversion-Risiken.

## Entscheidung

Jede künftige Migration folgt der Reihenfolge: vollständiger Bestandsaudit → 1:1-Paritätsnachbau → Redirect-Mapping → Vercel-Preview-Abnahme → erst danach optionale, begründete Architekturerweiterung (siehe `docs/migration/framer-to-astro-strategy.md`).

## Begründung

- "Parität vor Optimierung", "SEO-Stabilität vor visueller Neuerfindung" (strategische Leitlinie).
- Bestehende Rankings, URLs und Kundenbeziehungen werden nicht leichtfertig geopfert (`00_GH_PRINCIPLES.md`, Abschnitt 4 und 6).

## Konsequenzen

- Neue SEO-Landingpages (siehe `13_REPORTS/06_information-architecture.md`) werden erst nach hergestellter Parität evaluiert, nicht vorher.
- Jede Abweichung von Parität braucht eine explizite, dokumentierte Begründung.
