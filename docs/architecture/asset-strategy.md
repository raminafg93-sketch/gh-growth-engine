# Asset-Strategie

Stand: 2026-07-21
Zweck: Regeln, welche Assets aus `01_BRAND` / `14_ASSETS` in `apps/website` verwendet werden dürfen, und wie Original- und Webversionen unterschieden bleiben.

## Geprüfte Quellen

- `01_BRAND/01_brand-core.md` … `04_claims.md` — Text, keine Binärdateien, kein Assettransfer nötig.
- `01_BRAND/03_design-system.md` — Farben (`#002349`, `#019197`, `#FFFFFF`, `#F2F5F7`, `#16222E`) und Schriften (Saira, Inter) sind als CSS-Custom-Properties in `apps/website/src/styles/global.css` übernommen.
- `14_ASSETS/LOGOS/` — vier PNG-Logos, 72–81 KB je Datei, keine Rohformate (kein PSD/AI/SVG-Original vorhanden), keine Videos oder Archive.
- `14_ASSETS/REFERENCES/google-drive-structure.md` — Original-Logos, Fotos/Videos, Zertifikate liegen laut Struktur in Google Drive, nicht in GitHub. Kein Handlungsbedarf hier.

## Für die Website-Vorschau übernommene Assets

| Original                           | Web-Kopie                                         | Zweck                                                                  |
| ---------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| `14_ASSETS/LOGOS/GH-LOGO_Lang.png` | `apps/website/src/assets/logo/gh-logo-header.png` | Header-Logo (horizontal)                                               |
| `14_ASSETS/LOGOS/GH-LOGO_Rund.png` | `apps/website/src/assets/logo/gh-logo-mark.png`   | Bildmarke, aktuell nicht referenziert (für Favicon/Social vorbereitet) |

Beide Dateien wurden **unverändert kopiert** (identischer MD5-Hash zum Original), nicht bearbeitet. Astro verarbeitet das Header-Logo über `astro:assets` (`<Image>`), das beim Build automatisch optimierte Ausgabeformate/-größen erzeugt — eine manuelle WebP/AVIF-Konvertierung der Quelldatei war für dieses Grundgerüst nicht nötig.

`GH-LOGO_Hoch.png` und `GH-LOGO_Rund_HG.png` wurden **nicht** kopiert — für das technische Grundgerüst nicht erforderlich (Prinzip: nur benötigte Assets übernehmen).

## Regeln für künftige Asset-Übernahmen

1. **Kein Rohdatentransfer.** Große unbearbeitete Rohdateien (Kamera-Originale, mehrere hundert MB, Videos) bleiben in Google Drive. `apps/website/public` und `src/assets` enthalten ausschließlich weboptimierte, für den Einsatz bestimmte Dateien.
2. **Keine Videos/Medienarchive in Git.** Falls künftig Video-Content für die Website nötig wird, per externem Hosting (z. B. Vimeo/YouTube-Embed oder CDN) einbinden, nicht als Datei committen.
3. **SEO-taugliche Dateinamen.** Sprechende, kleingeschriebene, bindestrich-getrennte Namen (`gh-logo-header.png`, nicht `IMG_2381.png` oder unveränderte Exportnamen).
4. **Keine Mehrfach-Kopien in leicht unterschiedlichen Varianten.** Pro Verwendungszweck genau eine Web-Kopie; Varianten werden dokumentiert (siehe Tabelle oben), nicht wild dupliziert.
5. **Original und Webversion klar trennen.** Originale bleiben ausschließlich unter `14_ASSETS/` (Repo) bzw. Google Drive (Rohdaten/Großformate). Webversionen liegen ausschließlich unter `apps/website/public/` oder `apps/website/src/assets/`. Es wird nie in `14_ASSETS/` hinein für Web-Zwecke bearbeitet.
6. **Originaldateien werden nie verändert.** Nur kopiert, dann ggf. für den Web-Einsatz weiterverarbeitet (Kompression, Formatkonvertierung) an der Kopie, nicht am Original.

## Offener Punkt

Eine systematische Bildoptimierung (responsive Größen, WebP/AVIF für alle künftigen Content-Bilder, Favicon-Set aus `gh-logo-mark.png`) ist noch nicht umgesetzt — das ist Teil der künftigen Website-Umsetzung (Paritätsnachbau), nicht dieses Fundament-Auftrags.
