# Homepage-SEO-Spezifikation v1

Stand: 2026-07-21
Betrifft die Homepage in `apps/website/src/pages/index.astro`. Umgesetzt über `components/seo/SeoHead.astro`, `components/seo/JsonLd.astro`, `components/seo/Breadcrumbs.astro`.

## Meta Title / Description

- Quelle: `site.seoDefaults` in `apps/website/src/data/site.ts`.
- Title: „KFZ-GutachtenHelden | Kfz-Gutachter Hamburg" — angelehnt an den über Google indexierten aktuellen Title (`13_REPORTS/01_website-audit.md`), keine künstliche Keyword-Häufung.
- Description: enthält Leitclaim + Kernleistungen, keine künstlich verlängerte Textlänge nur für SEO.

## Canonical

**Bewusst nicht aktiv**, solange `apps/website` keine echte Domain hat (`Astro.site` ist in `astro.config.mjs` nicht gesetzt). `SeoHead.astro` gibt `<link rel="canonical">` nur aus, wenn `Astro.site` konfiguriert ist. Ein erfundener oder auf die Live-Domain zeigender Canonical für eine nicht-deployte Vorschau wäre irreführender als gar keiner. Sobald eine Vercel-Preview-/Produktionsdomain feststeht, aktiviert das Setzen von `site` in `astro.config.mjs` automatisch korrekte Canonicals — ohne Codeänderung.

## Open Graph / Twitter Card

- `og:title`, `og:description`, `og:type`, `og:site_name`, `og:locale` immer aktiv.
- `og:image`/`twitter:image` nur, wenn `Astro.site` gesetzt ist (aus denselben Gründen wie beim Canonical — eine relative Bild-URL ist für externe Crawler nutzlos). Bildquelle: `gh-logo-mark.png`, über `astro:assets` optimiert.

## robots / noindex

- Homepage rendert `noindex={true}` über `SeoHead` → `<meta name="robots" content="noindex, nofollow">`.
- `apps/website/public/robots.txt` blockiert zusätzlich global (`Disallow: /`) auf Verzeichnisebene für den Fall eines versehentlichen Deployments ohne Seiten-Props.
- **Beide Mechanismen müssen aktiv bleiben, bis ein echter Launch freigegeben ist** (siehe `docs/migration/framer-to-astro-strategy.md`).

## Strukturierte Daten

- **LocalBusiness/AutomotiveBusiness** (`JsonLd.astro`): Name, alternativer Markenname, Telefon, E-Mail, Adresse (aus `company-facts.md` mechanisch in `PostalAddress`-Felder zerlegt), Servicegebiet, Öffnungszeiten — ausschließlich Felder, die auch sichtbar auf der Seite stehen (Footer/LocationSection).
- **Bewusst kein WebSite-Schema**: keine Sitesearch-Funktion vorhanden, ein WebSite-Schema ohne `SearchAction` bietet keinen Mehrwert (kein unnötiges Schema).
- **Bewusst kein separates Organization-Schema**: Unternehmen und lokales Geschäft sind identisch (Freiberufler, ein Standort) — keine zwei Entitäten abzubilden.
- **Breadcrumbs/`BreadcrumbList`**: Komponente fertig, auf der Homepage nicht eingesetzt (kein Pfad oberhalb von „/"). Aktiv, sobald Unterseiten (`/leistungen/…`, `/ratgeber/…`) entstehen.

## Semantische Struktur

- Genau ein `<h1>` (Leitclaim), danach ausschließlich `<h2>` für Sections und `<h3>` für Karten-/Listenelemente — keine übersprungenen Ebenen (siehe Build-Prüfung in Phase 11).
- Landmarken: `<header>` (implizit „banner"), `<nav aria-label="Hauptnavigation">`, `<main id="main-content">`, `<footer>`.

## Interne Links

- Keine Links auf noch nicht existierende Astro-Unterseiten. Wo die Homepage auf tiefere Inhalte verweist (`/leistungen`, `/impressum`), zeigt der Link bewusst auf die aktuelle Live-Website (`site.websiteUrl`), bis diese Seiten in `apps/website` existieren — kein toter interner Link.

## Nicht umgesetzt (bewusst)

- Kein Keyword-Stuffing, keine künstlich verlängerten Texte.
- Kein Schema für Bewertungen (`Review`/`AggregateRating`), solange keine echten Bewertungsdaten vorliegen (siehe `ReviewSection.astro` — rendert ohne Daten nichts, folglich auch kein Schema ohne zugehörigen sichtbaren Inhalt).
- Keine Sitemap/robots-Erweiterung über die bestehende `robots.txt` hinaus — erst mit echter Domain relevant.
