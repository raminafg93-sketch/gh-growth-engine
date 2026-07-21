# Website-Architektur (`apps/website`)

Stand: 2026-07-21

## 3. Welche Rolle hat `apps/website`?

Eigenständiger Astro-Workspace für die künftige, technisch selbst gehostete Version der KFZ-GutachtenHelden-Website. Enthält inzwischen ein Design System v1 (`docs/architecture/design-system.md`), eine wiederverwendbare Komponentenbibliothek (`docs/architecture/component-library.md`) und eine erste, komponentenbasiert neu aufgebaute Homepage-Version — weiterhin eine **interne Vorschauseite**, keine Kopie der Live-Website, kein Domain-Wechsel. Ziel gemäß strategischer Leitlinie: Bewahren vor Ersetzen, Parität vor Optimierung (siehe `docs/migration/homepage-parity-and-improvement-report.md` für den aktuellen Alt-Neu-Vergleich).

Technisch:

- **Astro** mit statischer Ausgabe (`output: "static"` in `astro.config.mjs`) — HTML wird zur Build-Zeit erzeugt, kein Server-Runtime nötig.
- **TypeScript strict** (`tsconfig.json` erweitert `astro/tsconfigs/strict`).
- Minimales clientseitiges JavaScript — Astro liefert standardmäßig keine JS-Runtime für statische Komponenten aus (kein Framework wie React/Vue eingebunden).

## Ordnerstruktur

```
apps/website/src/
├── components/
│   ├── layout/       Container, Section, SiteHeader, SiteFooter
│   ├── navigation/   MobileNavigation
│   ├── sections/     HeroSection, TrustBar, ServiceOverview, ProcessSteps,
│   │                 RightsAfterAccident, DamageExamples, ReviewSection,
│   │                 LocationSection, FaqSection, FinalCtaSection
│   ├── conversion/   CallButton, WhatsAppButton, PrimaryCtaGroup,
│   │                 StickyMobileCta, ContactCard
│   ├── trust/        StatItem, QualificationBadge, TrustBadge, ReviewCard,
│   │                 RatingSummary, PartnerLogoRow
│   ├── seo/          SeoHead, JsonLd, Breadcrumbs
│   ├── forms/        (vorbereitet, aktuell leer — kein Formular in v1)
│   └── ui/           Button, IconButton, Badge, Card, Logo, ResponsiveImage
├── content/          services, guides, blog, faq, locations, reviews (Content-Collections, aktuell leer)
├── data/site.ts       zentrale Unternehmenskonfiguration
├── data/homepage.ts   Homepage-spezifische Inhalte (siehe content-flow.md)
├── layouts/           BaseLayout.astro
├── lib/               (vorbereitet, aktuell leer)
├── pages/             index.astro (Homepage-Neuaufbau, interne Vorschau)
└── styles/            tokens.css, typography.css, utilities.css, global.css
```

Details je Komponente: `docs/architecture/component-library.md`.

## 4. Welche Dateien wirken sich auf die Live-Website aus?

**Keine, solange kein Deployment mit Produktions-Domain existiert.** `apps/website` wird aktuell nicht deployt (siehe `docs/deployment/vercel-preparation.md`). Sobald eine Vercel-Verbindung besteht, gilt:

| Datei/Bereich                                                          | Live-Wirkung                                                     |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apps/website/src/**`, `astro.config.mjs`, `apps/website/package.json` | ja, sobald deployt                                               |
| `apps/website/public/robots.txt`                                       | ja — steuert Indexierung der deployten Instanz                   |
| Root-`package.json`, `pnpm-workspace.yaml`, `.github/workflows/*`      | indirekt — steuern Build/CI, kein direkter Content               |
| `01_BRAND` … `14_ASSETS`, `13_REPORTS`, `00_GH_*`                      | **nein** — reine Wissensbasis, kein Website-Code                 |
| `docs/**`                                                              | **nein** — Dokumentation über das System, nicht Teil der Website |

## 5. Welche Dateien sind nur Wissen oder Dokumentation?

Alle nummerierten Ordner (`01_BRAND` … `14_ASSETS`), `13_REPORTS/`, `00_GH_MASTER_CONTEXT.md`, `00_GH_DOCUMENT_MAP.md`, `00_GH_PRINCIPLES.md`, `00_GH_CHANGE_REQUEST_TEMPLATE.md`, `CLAUDE.md`, alles unter `docs/`. Sie beeinflussen die Website nur indirekt — als Quelle, aus der Ramin oder Claude künftig Website-Inhalte (Texte, `site.ts`-Werte, Content-Collections) ableiten.

## Konversions- und SEO-Bausteine im Grundgerüst

- `src/data/site.ts` — typisierte, aus `02_COMPANY/01_company-facts.md` abgeleitete Konfiguration. Unbestätigte Werte (z. B. WhatsApp-Link, Social-Links) sind als `status: "missing"` markiert und werden von Komponenten (`WhatsAppButton.astro`, `PrimaryCtaGroup.astro`) automatisch übersprungen/durch einen Fallback ersetzt — sie erscheinen nie als Platzhalter-Fake-Wert im HTML.
- `src/data/homepage.ts` — Homepage-spezifische Texte/Reihenfolgen, getrennt von den Unternehmensstammdaten (siehe `docs/architecture/content-flow.md`).
- `src/components/conversion/PrimaryCtaGroup.astro` — setzt die Conversion-Priorität aus `05_WEBSITE_SEO/03_conversion-system.md` (WhatsApp → Anruf → E-Mail → Formular) technisch um.
- `src/components/seo/SeoHead.astro`, `JsonLd.astro` — Title/Description/`noindex`/Canonical-Steuerung und LocalBusiness-Schema, siehe `docs/architecture/homepage-seo-specification.md`.

## Nächster Schritt (nicht Teil dieses Auftrags)

Echter technischer Crawl/Export der Live-Homepage, sobald Netzwerkzugriff oder ein Export vorliegt, um die redaktionell rekonstruierten Inhalte (siehe `docs/migration/current-homepage-inventory.md`) gegen den tatsächlichen Live-Wortlaut abzugleichen — siehe `docs/migration/framer-to-astro-strategy.md`.
