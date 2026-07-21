# Design System v1 — `apps/website`

Stand: 2026-07-21
Primärdatei für die technische Umsetzung des Markenauftritts im Astro-Code. Fachliche Primärquelle bleibt `01_BRAND/03_design-system.md` — bei Widerspruch gilt diese Wissensdatei, dieses Dokument beschreibt nur die technische Übersetzung in CSS-Tokens und Komponenten.

## Designprinzipien

Abgeleitet aus `01_BRAND/01_brand-core.md` und der Aufgabenstellung dieses Auftrags:

- **Modern, aber nicht kalt** — klare Flächen, viel Weißraum, keine verspielten Verläufe, keine Glasoptik (bestätigt in `01_BRAND/03_design-system.md`).
- **Vertrauenswürdig statt aufdringlich** — Trust-Elemente sichtbar, aber nicht schreiend; Teal als Akzent, nicht als Flächenfarbe (Verhältnis 60 % Weiß / 30 % Navy / 10 % Teal).
- **Lokal und menschlich** — echte, lokale Bildsprache (kein Stock-Foto-Glanz), keine generische SaaS-Optik.
- **Technisch sauber** — konsistente Tokens statt verstreuter Werte, damit Claude künftige Seiten ohne Rätselraten im gleichen System bauen kann.
- **Nicht wie eine klassische Gutachter-Seite** — keine behördliche Kühle, keine überladene Tabellen-Optik.

## Tokens

Primärdatei: `apps/website/src/styles/tokens.css`. Kategorien:

| Kategorie                | Beispieltoken                                                                               | Quelle                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Farben                   | `--color-navy`, `--color-teal`, `--color-white`, `--color-grey-light`, `--color-anthracite` | `01_BRAND/03_design-system.md` (bestätigt, nicht verändern) |
| Abgeleitete Farbzustände | `--color-navy-hover`, `--color-teal-hover`, `--color-teal-tint`                             | technisch berechnet, keine neuen Markenfarben               |
| Semantische Farbrollen   | `--color-bg-page`, `--color-text-primary`, `--color-accent`                                 | mappen Markenfarben auf Verwendungszweck                    |
| Typografie               | `--font-heading` (Saira), `--font-body` (Inter), `--text-xs` … `--text-5xl`                 | `01_BRAND/03_design-system.md`                              |
| Spacing                  | `--space-1` … `--space-24` (4px-Basis)                                                      | neu, konsistente Skala                                      |
| Container                | `--container-sm` … `--container-xl`                                                         | neu                                                         |
| Radius                   | `--radius-sm/md/lg/full`                                                                    | "kleine bis mittlere Radien"                                |
| Schatten                 | `--shadow-sm/md/lg`                                                                         | "dezente Schatten"                                          |
| Buttons                  | `--button-height-md` (44px), `--button-height-lg`                                           | mobile Touch-Ziel-Mindestgröße                              |
| Fokus                    | `--focus-ring-width`, `--focus-ring-offset`                                                 | Accessibility                                               |
| Breakpoints              | `--breakpoint-xs` … `--breakpoint-2xl`                                                      | Referenzwerte, siehe Hinweis in `tokens.css`                |
| Z-Index                  | `--z-header`, `--z-sticky-cta`, `--z-overlay`                                               | verhindert Überlappungskonflikte                            |
| Animation                | `--transition-fast`, `--transition-base`                                                    | respektiert `prefers-reduced-motion`                        |

**Regel:** Neue Komponenten verwenden ausschließlich diese Tokens, keine hartcodierten Hex-/px-Werte — Ausnahme: einmalige, dokumentierte Berechnungen (z. B. Seitenverhältnis eines Logos).

## Typografie

Primärdatei: `apps/website/src/styles/typography.css`.

- Saira für alle Überschriften (`h1`–`h6`), Inter für Fließtext/UI.
- Genau ein `h1` pro Seite (Leitclaim auf der Homepage).
- Fließtext ist auf `65ch` Zeilenlänge begrenzt (Lesbarkeit).
- `.lede` für einleitende, größere Absätze (z. B. Hero-Subheadline).
- Responsive Schriftgrößen: Basisgrößen mobil, größere Stufen ab `768px`.

## Spacing

- 4px-Basis-Skala (`--space-1` = 4px bis `--space-24` = 96px).
- `.stack` / `.stack--sm` / `.stack--lg` für vertikalen Rhythmus zwischen Geschwister-Elementen (kein manuelles Margin-Jonglieren in Komponenten).
- `.cluster` für horizontale, umbrechende Gruppen (z. B. CTA-Paare).

## Buttons

- Mindesthöhe `--button-height-md` (44px) — Touch-Ziel-Mindestmaß.
- Zustände: default, hover (`--color-*-hover`), focus-visible (Ring, kein reines Farbsignal), disabled (nicht Teil von v1, da keine Formulare mit Submit-Buttons in dieser Phase).
- Primär = Teal-Fläche/weißer Text (CTA), Sekundär = Navy-Outline oder Navy-Text auf Weiß — keine dritte, konkurrierende Button-Farbe.

## Cards

- Hintergrund `--color-bg-surface` oder Weiß mit `--shadow-sm`/`--shadow-md`, Radius `--radius-md`.
- Kein Schatten + Fläche gleichzeitig in „laut" Kombination (Prinzip: dezent).

## Formulare

- In v1 keine Formulare auf der Homepage (Conversion läuft über WhatsApp/Anruf, siehe `05_WEBSITE_SEO/03_conversion-system.md`). Formular-Tokens/Komponenten (`src/components/forms/`) bleiben vorbereitet, aber ungenutzt, bis ein echtes Formular gebraucht wird.

## Bildsprache

- Echte, lokale Fotografie bevorzugt (laut `01_BRAND/03_design-system.md`), keine generischen Stock-Icons als Hero-Bild.
- Logos ausschließlich aus `apps/website/src/assets/logo/` (siehe `docs/architecture/asset-strategy.md|`), nie erneut aus `14_ASSETS/LOGOS` direkt in Komponenten importieren.
- Alle Bilder über `astro:assets` (`<Image>`), damit automatische Optimierung/Formatkonvertierung greift.

## Icons

- Keine Icon-Font/-Bibliothek in v1 (vermeidet unnötige Abhängigkeit). Wo Icons nötig sind (z. B. Telefon-/WhatsApp-Symbol im Button), werden minimale, handgeschriebene Inline-SVGs verwendet — keine externen Icon-Sets ohne Prüfung.

## Responsive-Verhalten

- Mobile-first: Basis-Styles gelten für die kleinste Breite, `@media (min-width: …)` fügt Verbesserungen für größere Breakpoints hinzu.
- Geprüfte Breakpoints: 360, 390, 768, 1024, 1280, 1440px (siehe `docs/migration/homepage-parity-and-improvement-report.md` für Ergebnisse).

## Animationen

- Nur dezente Übergänge (`--transition-fast`/`--transition-base`) für Hover/Fokus, keine Scroll-Animationen oder Parallax in v1.
- `prefers-reduced-motion: reduce` wird global respektiert (`global.css`) — Übergänge und Scrollverhalten werden dann auf nahezu 0 reduziert.

## Accessibility-Regeln

- Landmarken: genau ein `header`, `nav` (mit `aria-label`), `main`, `footer` pro Seite.
- Ein `h1` pro Seite, keine übersprungenen Heading-Ebenen.
- Sichtbarer Fokusring auf allen interaktiven Elementen (`:focus-visible` in `global.css`).
- Kontraste: Textfarben (`--color-text-primary` auf Weiß, `--color-text-inverse` auf Navy) erfüllen WCAG-AA-Kontrast für Fließtext (siehe Prüfung in Phase 8/9).
- Touch-Ziele ≥ 44×44px.
- Skip-Link (`.skip-link`) springt zu `#main-content`.

## Einsatzbeispiele

```astro
<Section background="surface">
  <Container>
    <h2>Unsere Leistungen</h2>
    <Card>...</Card>
  </Container>
</Section>
```

## Regeln für Claude bei zukünftigen Seiten

1. Immer Tokens aus `tokens.css` verwenden, nie neue Hex-/px-Werte "just for this page" einführen.
2. Neue Farbbedarfe zuerst gegen `01_BRAND/03_design-system.md` prüfen — fehlt eine Farbe dort, ist das ein KNOWLEDGE-ONLY-Änderungsbedarf, keine freie Erfindung im Code.
3. Neue Sections nutzen bestehende Layout-Primitive (`Section`, `Container`) statt eigener Container-Logik.
4. Jede neue interaktive Komponente braucht einen sichtbaren Fokuszustand und ausreichenden Kontrast, bevor sie als fertig gilt.
5. Vor dem Hinzufügen neuer Utility-Klassen prüfen, ob ein bestehendes Token/Utility ausreicht (`utilities.css` bleibt bewusst klein).
