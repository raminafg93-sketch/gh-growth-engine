# Design System — Kanal-Anwendung

Stand: 2026-07-22
**Primärquelle für:** wie das Markendesign je Kanal (Social Media, Google Ads, Google Business Profile, Print) angewendet wird.
**Nicht Primärquelle für:** Farbwerte, Schriftarten, Grundverhältnis, Gestaltungsprinzipien — diese bleiben ausschließlich in `01_BRAND/03_design-system.md` bestätigt und werden hier nur referenziert, nie dupliziert (Grundprinzip: eine Primärquelle je Information, siehe `00_GH_DOCUMENT_MAP.md`).
**Verhältnis zu `docs/architecture/design-system.md`:** Jenes Dokument ist die technische Übersetzung für den Website-Code (Astro/Tokens). Dieses Dokument ist die Übersetzung für alle anderen Kanäle. Beide leiten sich aus derselben Primärquelle (`01_BRAND/03_design-system.md`) ab und dürfen sich nicht widersprechen.

## Kanalübergreifende Regeln (gelten immer, ohne Ausnahme)

- Tonalität: `01_BRAND/02_tone-of-voice.md` gilt für jeden Kanal identisch.
- Rechtliche Abgrenzung: `02_COMPANY/03_legal-boundaries.md` gilt für jeden Kanal identisch — keine Erfolgs-/Garantieversprechen, keine Darstellung als Rechtsanwaltskanzlei, unabhängig davon, ob es sich um Website-Text, Anzeigentext oder Social-Caption handelt.
- Claims: ausschließlich aus `11_OPERATIONS/02_proof-register.md` — ein Claim, der dort nicht freigegeben ist, erscheint in keinem Kanal, auch nicht in einer verkürzten Social-Formulierung.
- Logo: ausschließlich aus den bereits geprüften Quellen (`14_ASSETS/LOGOS/` als Original, `apps/website/src/assets/logo/` als weboptimierte Kopie) — keine neue Logovariante, kein neues Seitenverhältnis, keine neue Farbversion des Logos ohne Freigabe.
- Bildsprache-Grundregel: echte, lokale Aufnahmen bevorzugt (`01_BRAND/03_design-system.md`: „echte, lokale Bildsprache"). Generische Stock-Bildagentur-Fotos („Unfallschaden"-Stockfotos) sind nur als klar gekennzeichnete Übergangslösung zulässig, nie als Dauerzustand.

## Social Media (Meta/Instagram)

- **Farbverhältnis:** Grundsätzlich dieselbe 60/30/10-Logik (Weiß/Navy/Teal) wie im Web. Für Reels/Story-Creatives ist ein höherer Teal-Anteil (bis ca. 20 % statt 10 %) zulässig, weil diese Formate im Feed mehr visuellen Kontrast brauchen, um aufzufallen — die Marke darf dabei trotzdem nicht wie ein reines Werbebanner wirken (Abgrenzung zu „aufdringlich" bleibt bestehen).
- **Typografie:** Saira für Headlines/Zahlen-Highlights in Grafiken, Inter für Fließtext/Untertitel in Grafiken — wie im Web. Für reinen Caption-Text (Instagram-Beitragstext selbst) gilt keine Schriftvorgabe, da dieser als Plattform-Systemschrift dargestellt wird.
- **Format-Grundmaße** (technische Mindestangabe für Phase 6, Canva System): 1:1 (Feed quadratisch), 4:5 (Feed hochkant), 9:16 (Story/Reel).
- **Trust-Elemente:** Qualifikationsbadges (z. B. DGuSV, seit 2019) dürfen visuell eingebunden werden, ausschließlich mit bereits freigegebenen Claims.
- **CTA in Creatives:** kein direkter Kaufabschluss-Button (organisch technisch ohnehin nicht möglich), aber ein Conversion-Hinweis („Jetzt Kontakt aufnehmen") im Bild oder in der Caption ist erwünscht, konsistent mit der Conversion-Priorität aus `CLAUDE.md` (WhatsApp vor Anruf vor E-Mail vor Formular).

## Google Ads

- **Textanzeigen (Search):** kein eigenes visuelles Design nötig — Formulierung folgt vollständig `01_BRAND/02_tone-of-voice.md`. Kein „Weichmacher"-Vokabular, keine Erfolgsversprechen.
- **Bild-/Display-Anzeigen** (falls künftig genutzt, aktuell nicht aktiv laut `06_GOOGLE/03_google-ads.md`): gleiche 60/30/10-Grundregel wie Web, Logo-Platzierung an einer festen Standardposition (oben links oder unten rechts), nie mittig über dem Bildmotiv. Textkontrast auf Bild muss WCAG-AA-Kontrast erreichen, analog zur Web-Regel in `docs/architecture/design-system.md`.
- **Nicht Aufgabe dieses Dokuments:** Kampagnenstruktur, Keyword-Auswahl, Budget — das bleibt beim Google Ads Team bzw. bei Ramin (siehe `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/05_google-ads-team/`).

## Google Business Profile

- **Profilbild/Titelbild:** ausschließlich das bereits geprüfte Logo, keine neue Bildmarke.
- **Beitragsbilder:** dieselbe Bildsprache-Grundregel (lokal, echt, kein Stock). Empfohlenes Format nach Google-Vorgabe ca. 1200×900px. Text im Bild sparsam halten — Google beschneidet Vorschaubilder oft, die Kernaussage gehört in den Post-Text, nicht ins Bild.
- **Farbverhältnis:** weniger kritisch als bei Social, da GBP-Bilder isoliert (nicht im Feed-Kontext) betrachtet werden — Navy/Teal als wiedererkennbare Rahmen-/Overlay-Farbe bleibt dennoch bevorzugt.
- **Claims in Posts/Antworten:** identische Regel wie überall — nur `11_OPERATIONS/02_proof-register.md`.

## Print / sonstige Materialien

Aktuell kein aktiver Bedarf (kein Print-Kanal in Betrieb) — dieser Abschnitt ist vorbereitend für Phase 6/7, falls künftig Flyer, Visitenkarten o. Ä. entstehen:

- Gleiche Farb-/Typografie-Basis wie Web/Social.
- **Offene Lücke, bewusst nicht erfunden:** `01_BRAND/03_design-system.md` bestätigt nur RGB/Hex-Werte. Für echten Druck werden CMYK-Werte benötigt, die aktuell nicht bestätigt sind. Vor jeder tatsächlichen Druckproduktion müssen CMYK-Entsprechungen mit Ramin abgestimmt und in `01_BRAND/03_design-system.md` ergänzt werden — nicht in diesem Dokument neu geraten.

## Verwendung durch die Fachteams

| Team | Relevanter Abschnitt |
|---|---|
| Social Media Team | „Social Media (Meta/Instagram)" |
| Google Ads Team | „Google Ads" |
| Local SEO Team | „Google Business Profile" |
| Framer/Web Team | weiterhin `docs/architecture/design-system.md` (unverändert, keine Überschneidung) |
| Brand Manager | dieses gesamte Dokument als Prüfgrundlage für Kanal-Konsistenz |

## Verwandte Dateien

- `01_BRAND/03_design-system.md` (Primärquelle Farben/Typografie/Grundprinzipien)
- `docs/architecture/design-system.md` (Website-/Astro-Übersetzung)
- `01_BRAND/02_tone-of-voice.md`, `02_COMPANY/03_legal-boundaries.md`, `11_OPERATIONS/02_proof-register.md`
- `docs/roadmaps/growth-engine-masterplan.md` (Phase 2)
