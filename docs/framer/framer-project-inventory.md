# Framer-Projekt-Inventur — KFZ-GutachtenHelden

Stand: 2026-07-21
Status: **Noch nicht durchführbar.**

## Warum dieses Dokument noch leer ist

Diese Inventur (Seiten, Komponenten, Styles/Design-System, CMS, Motion, SEO, Conversion-Elemente) kann erst erstellt werden, nachdem der Framer-Agent mit dem echten Framer-Projekt **KFZ-GutachtenHelden** verbunden ist. Diese Verbindung erfordert eine einmalige Browser-Autorisierung durch Ramin in seinem eigenen Framer-Konto — siehe `docs/framer/framer-agent-pilot-report.md`, Abschnitt „3. Framer-Projekt verbinden — PAUSIERT" für die genauen nächsten Schritte.

Es werden hier bewusst **keine** angenommenen, geschätzten oder aus der Wissensbasis (`00_GH_MASTER_CONTEXT.md`, `03_OFFER`, `04_AUDIENCE` etc.) abgeleiteten Platzhalter-Inhalte eingetragen — das würde eine echte Projektinventur vortäuschen, die technisch nicht stattgefunden hat.

## Geplante Struktur (wird nach Verbindung befüllt)

1. **Seiten** — Seitentitel, Slugs, Seitentyp, Indexierungsstatus, SEO-Felder
2. **Komponenten** — wiederverwendbare Komponenten, Varianten, verschachtelte Komponenten, Code Components, Overrides, Navigation, CTAs, Motion-Komponenten
3. **Styles und Design-System** — Farben, Textstile, Schriftarten, Abstände, Radien, Schatten, Breakpoints, Tokens/Variablen
4. **CMS** — Collections, Felder, CMS-Seiten, Slugs, SEO-Felder, Beziehungen
5. **Motion** — Hover-, Scroll-, Appear-Effekte, Transitions, Component Variants, Code-Component-Animationen
6. **SEO** — Titles, Descriptions, Canonicals, Indexierungsregeln, Social Images, strukturierte Daten, Redirects, Sitemap-relevante Seiten
7. **Conversion** — WhatsApp-/Anruf-CTAs, Formulare, Sticky CTAs, Bewertungen, Trust-Elemente, mobile Navigation

## Quelle, sobald verfügbar

`npx @framer/agent@latest read-project` bzw. das automatisch generierte `project-inventory.md` innerhalb der Skill-Session (siehe `~/.claude/skills/framer/projects/<projectId>/project-inventory.md`) — Snapshot aus `framer.agent.getContext()`. Dieses Dokument hier wird dann als bereinigte, secret-freie Repository-Version daraus abgeleitet.
