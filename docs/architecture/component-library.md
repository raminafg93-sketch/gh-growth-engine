# Komponentenbibliothek v1 — `apps/website`

Stand: 2026-07-21
Ergänzt `docs/architecture/design-system.md` (Tokens/Prinzipien) um die konkrete Komponentenübersicht. Ordnerstruktur: `src/components/{layout,ui,conversion,trust,sections,seo}`, `src/components/navigation`.

## Layout

### Container (`layout/Container.astro`)

- **Zweck:** zentrales Breiten-/Padding-Primitiv.
- **Einsatzort:** intern von `Section` genutzt; direkt einsetzbar für Inhalte außerhalb von Sections.
- **Props:** `narrow?: boolean`, `class?: string`.
- **Varianten:** Standard (`--container-lg`), `narrow` (`--container-md`).
- **Accessibility:** keine eigene Semantik, reiner Layout-Wrapper.
- **Content-Regeln:** kein eigener Text, nur `<slot />`.
- **Beispiel:** `<Container narrow><p>…</p></Container>`
- **Ungeeignet für:** Layouts, die volle Bildschirmbreite ohne Padding brauchen (z. B. Bild-Vollbreiten-Sektionen) — dafür eigenes Markup ohne Container.

### Section (`layout/Section.astro`)

- **Zweck:** einheitlicher Sektions-Rahmen (vertikaler Abstand, Hintergrundfarbe, optionale Landmarke).
- **Einsatzort:** jede Homepage-Sektion (`HeroSection`, `TrustBar`, …).
- **Props:** `background?: "page" | "surface" | "inverse"`, `id?: string`, `narrow?: boolean`, `ariaLabel?: string`, `class?: string`.
- **Varianten:** drei Hintergrundflächen laut 60/30/10-Farbverhältnis.
- **Accessibility:** `ariaLabel` für Sections ohne eigene sichtbare Überschrift (z. B. `TrustBar`).
- **Content-Regeln:** Inhalt über `<slot />`, keine feste Text-Vorgabe.
- **Beispiel:** `<Section id="leistungen" background="page"><h2>…</h2></Section>`
- **Ungeeignet für:** Header/Footer (eigene Landmarken, siehe `SiteHeader`/`SiteFooter`).
- **Technischer Hinweis:** Wird eine zusätzliche CSS-Klasse per `class`-Prop übergeben und soll vom aufrufenden Elternteil gestylt werden, muss der Selektor dort `:global(.klasse)` verwenden — Astros Scoped-CSS stempelt Elemente nach der Datei, die sie tatsächlich rendert (hier: `Section.astro`), nicht nach der aufrufenden Komponente. Siehe Kommentar in `HeroSection.astro`.

### SiteHeader (`layout/SiteHeader.astro`)

- **Zweck:** globaler Kopfbereich mit Logo, Desktop-CTA, mobiler Navigation.
- **Einsatzort:** `BaseLayout.astro` (jede Seite).
- **Props:** keine (bezieht alles aus `site.ts`).
- **Varianten:** Desktop-CTA sichtbar ab 768px, darunter übernimmt `MobileNavigation` + `StickyMobileCta`.
- **Accessibility:** `<header>` ist automatische „banner"-Landmarke.
- **Content-Regeln:** keine hartcodierten Unternehmensdaten — ausschließlich `site.ts`.
- **Beispiel:** einmalig in `BaseLayout.astro`.
- **Ungeeignet für:** Mehrfacheinbindung auf einer Seite.

### SiteFooter (`layout/SiteFooter.astro`)

- **Zweck:** Kontakt-/Rechtszusammenfassung, Hinweis auf internen Vorschaustatus.
- **Einsatzort:** `BaseLayout.astro`.
- **Props:** keine.
- **Accessibility:** `<address>` für Kontaktdaten, `<nav aria-label="Rechtliches">` für rechtliche Links.
- **Content-Regeln:** Impressum-Link zeigt bewusst auf die aktuelle Live-Website, solange `apps/website` kein eigenes Impressum hat.
- **Ungeeignet für:** eigenständige Nutzung außerhalb von `BaseLayout`.

## Navigation

### MobileNavigation (`navigation/MobileNavigation.astro`)

- **Zweck:** mobiles Disclosure-Menü mit Sprunglinks zu Homepage-Sektionen.
- **Einsatzort:** `SiteHeader.astro`.
- **Props:** keine (Menüpunkte aktuell fest hinterlegt, siehe Quelltext).
- **Accessibility:** echter `<button>` mit `aria-expanded`/`aria-controls`, Panel mit `aria-label`. Minimaler Vanilla-JS-Toggle (bewusste Ausnahme von „kein JS" — Begründung im Dateikommentar).
- **Content-Regeln:** Linkziele müssen echten `id`-Ankern auf der Seite entsprechen.
- **Ungeeignet für:** Seiten ohne die referenzierten Sektions-IDs (Anker anpassen).

## UI

### Button (`ui/Button.astro`)

- **Zweck:** generischer Button/Link-Primitiv.
- **Props:** `variant?: "primary"|"secondary"|"ghost"`, `size?: "md"|"lg"`, `href?`, `type?`, `class?`.
- **Accessibility:** Mindesthöhe 44px, sichtbarer Fokusring (global), Kontrast AA geprüft.
- **Ungeeignet für:** WhatsApp-/Anruf-CTAs (dafür `CallButton`/`WhatsAppButton`, die die Conversion-Priorität technisch absichern).

### IconButton (`ui/IconButton.astro`)

- **Zweck:** Icon-only Button/Link.
- **Props:** `label: string` (Pflicht, wird `aria-label`), `href?`, `variant?`.
- **Accessibility:** kein Icon-Button ohne `label`.
- **Ungeeignet für:** Aktionen, die zusätzlich sichtbaren Text brauchen (Klarheit vor Kompaktheit).

### Badge (`ui/Badge.astro`)

- **Zweck:** generisches Pill-Label.
- **Props:** `tone?: "neutral"|"accent"|"inverse"`.
- **Einsatzort:** Basis für `TrustBadge`/`QualificationBadge`, auch direkt nutzbar (z. B. Hero-Eyebrow).

### Card (`ui/Card.astro`)

- **Zweck:** generische Oberflächenkarte.
- **Props:** `elevated?: boolean`.
- **Einsatzort:** Leistungs-/Prozess-/Rechte-Karten, Basis für `ContactCard`.

### Logo (`ui/Logo.astro`)

- **Zweck:** Markenlogo in zwei Varianten.
- **Props:** `variant?: "header"|"mark"`.
- **Content-Regeln:** ausschließlich Assets aus `src/assets/logo/` (siehe `docs/architecture/asset-strategy.md`).

### ResponsiveImage (`ui/ResponsiveImage.astro`)

- **Zweck:** Wrapper um `astro:assets` `<Image>` mit Performance-Defaults.
- **Props:** `src` (ImageMetadata, Pflicht), `alt` (Pflicht), `width`, `height`, `priority?`.
- **Accessibility/Performance:** `alt` ist Pflicht; `priority` steuert `loading`/`fetchpriority`/`decoding` — nur für das größte, sofort sichtbare Bild `true` setzen.

## Conversion

### CallButton (`conversion/CallButton.astro`)

- **Zweck:** Anruf-CTA, immer verfügbar (Telefonnummer bestätigt).
- **Props:** `variant?`, `size?`, `class?`.

### WhatsAppButton (`conversion/WhatsAppButton.astro`)

- **Zweck:** höchste Priorität in der Conversion-Hierarchie.
- **Verhalten:** rendert **nichts**, solange `site.whatsapp.status !== "confirmed"` — kein Fake-Link.
- **Ungeeignet für:** direkte Nutzung ohne `PrimaryCtaGroup`, wenn ein Fallback auf Anruf gewünscht ist (dafür `PrimaryCtaGroup` verwenden).

### PrimaryCtaGroup (`conversion/PrimaryCtaGroup.astro`)

- **Zweck:** setzt WhatsApp-vor-Anruf-Priorität technisch um, inkl. automatischem Fallback.
- **Props:** `size?`, `class?`.
- **Einsatzort:** Header, Hero, StickyMobileCta, FinalCta — überall, wo der primäre Conversion-Pfad gebraucht wird.

### StickyMobileCta (`conversion/StickyMobileCta.astro`)

- **Zweck:** hält den CTA beim Scrollen auf Mobilgeräten sichtbar, ab 768px ausgeblendet.
- **Accessibility:** `role="region" aria-label="Schnellkontakt"`, respektiert `env(safe-area-inset-bottom)`.

### ContactCard (`conversion/ContactCard.astro`)

- **Zweck:** kompakte Kontaktzusammenfassung (Adresse, Telefon, E-Mail, Öffnungszeiten).
- **Einsatzort:** `LocationSection`, potenziell Footer-Erweiterungen.

## Trust

### StatItem (`trust/StatItem.astro`)

- **Props:** `value`, `label` (beide Pflicht-Strings). Werte nur aus bestätigten Claims.

### QualificationBadge / TrustBadge (`trust/QualificationBadge.astro`, `trust/TrustBadge.astro`)

- **Unterschied:** Qualifikation = Nachweis/Zertifikat, TrustBadge = Leistungsversprechen (z. B. 24/7).

### ReviewCard (`trust/ReviewCard.astro`)

- **Props:** `author`, `quote` (Pflicht), `rating?` (1–5).
- **Status:** aktuell ohne Aufrufer im Homepage-Neuaufbau — keine echten Bewertungsdaten bestätigt (siehe `docs/migration/current-homepage-inventory.md`).

### RatingSummary (`trust/RatingSummary.astro`)

- **Verhalten:** rendert nichts ohne `rating` UND `reviewCount` — verhindert eine erfundene/unsichere Zahl.

### PartnerLogoRow (`trust/PartnerLogoRow.astro`)

- **Props:** `logos?: {src, alt}[]`.
- **Status:** ohne Aufrufer, keine Partnerlogos bestätigt.

## Sections

Jede Section kapselt genau einen Homepage-Abschnitt, bezieht Inhalte aus `homepage.ts`/`site.ts` und trägt eine eigene `id` für Sprunglinks (sofern zutreffend).

| Komponente            | Zweck                                               | Rendert leer, wenn …                                     |
| --------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| `HeroSection`         | Leitclaim, Kernbotschaft, primärer CTA              | — (immer sichtbar)                                       |
| `TrustBar`            | Kennzahlen direkt nach dem Hero                     | —                                                        |
| `ServiceOverview`     | Leistungsübersicht mit Link zur Live-Leistungsseite | —                                                        |
| `ProcessSteps`        | 5-Schritte-Ablauf                                   | —                                                        |
| `RightsAfterAccident` | Kompakte Vertrauens-/Aufklärungssektion             | —                                                        |
| `DamageExamples`      | Konkrete Schadenbeispiele                           | `homepage.damageExamples.items` leer ist (aktuell immer) |
| `ReviewSection`       | Kundenbewertungen                                   | `homepage.reviews.items` leer ist (aktuell immer)        |
| `LocationSection`     | Standort/Kontakt                                    | —                                                        |
| `FaqSection`          | Häufige Fragen, natives `<details>/<summary>`       | —                                                        |
| `FinalCtaSection`     | Abschluss-CTA                                       | —                                                        |

**Ungeeignet für:** Wiederverwendung auf Unterseiten ohne Prüfung — jede Section ist aktuell homepage-spezifisch formuliert (Texte aus `homepage.ts`), keine generischen, seitenunabhängigen Bausteine.

## SEO

### SeoHead (`seo/SeoHead.astro`)

- **Zweck:** Title/Description/Canonical/OG/Twitter-Meta.
- **Props:** `title?`, `description?`, `noindex?`.
- **Verhalten:** Canonical/OG-Image nur aktiv, wenn `Astro.site` konfiguriert ist (siehe `docs/architecture/homepage-seo-specification.md`).

### JsonLd (`seo/JsonLd.astro`)

- **Zweck:** LocalBusiness/AutomotiveBusiness-Schema aus `site.ts`.
- **Props:** keine (aktuell homepage-/unternehmensweit identisch).

### Breadcrumbs (`seo/Breadcrumbs.astro`)

- **Zweck:** Breadcrumb-Navigation + `BreadcrumbList`-Schema.
- **Props:** `items: {label, href}[]`.
- **Status:** vorbereitet, auf der Homepage nicht eingesetzt (kein Pfad oberhalb von „/").

## Bewusst nicht gebaut / zurückgestellt

- Formular-Komponenten (`components/forms/`) — kein Formular in v1, Conversion läuft über WhatsApp/Anruf.
- Icon-Bibliothek — nur minimale, handgeschriebene Inline-SVGs, keine externe Abhängigkeit.
