# packages/

Vorbereiteter Bereich für später wiederverwendbare Logik, die von mehr als einer App gemeinsam genutzt wird.

## Aktueller Stand

Bewusst leer. Die gesamte Logik des Website-Grundgerüsts (`site.ts`, Komponenten) liegt direkt unter `apps/website`, weil es aktuell nur eine App gibt und keine geteilte Logik existiert, die einen eigenen Workspace rechtfertigt.

Prinzip für diesen Ordner: **Einfachheit vor Architekturtheater.** Kein Paket wird angelegt, bevor es einen echten, aktuellen Nutzen hat (z. B. zweite App, oder Logik, die nachweislich mehrfach gebraucht wird).

## Mögliche spätere Pakete

- `packages/seo` — geteilte SEO-Helfer (Meta-Tag-Generierung, strukturierte Daten), falls eine zweite Astro-App oder ein Content-Tool entsteht
- `packages/content-schema` — geteilte Typen/Schemas für Content-Collections (Leistungen, Ratgeber, FAQ), falls Content-Validierung außerhalb von `apps/website` gebraucht wird
- `packages/shared-config` — geteilte TypeScript-/ESLint-/Prettier-Basiskonfiguration, sobald ein zweiter Workspace entsteht

## Wann ein Paket hier angelegt werden darf

1. Es gibt einen zweiten Workspace, der dieselbe Logik braucht — nicht nur eine theoretische Möglichkeit.
2. Oder: Logik in `apps/website` ist nachweislich für ein konkretes zweites Vorhaben (z. B. `packages/content-schema` für Content-Automatisierung) nötig.

Bis dahin bleibt dieser Ordner dokumentiert und leer.
