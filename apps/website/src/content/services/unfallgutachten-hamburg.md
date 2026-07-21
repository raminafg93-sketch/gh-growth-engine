---
status: "content-ready-not-built"
targetUrl: "/leistungen/unfallgutachten-hamburg"
targetKeyword: "Unfallgutachten Hamburg"
lastUpdated: "2026-07-21"
sourceRoadmap: "docs/roadmaps/growth-priority-roadmap.md (Phase 1, Maßnahme 2)"
sourceExecutionPlan: "docs/roadmaps/phase-1-execution-plan.md (Maßnahme 2)"
---

# Unfallgutachten Hamburg — produktionsreifer Seiteninhalt

Dieses Dokument enthält den vollständigen, freigabefähigen Content für die Landingpage „Unfallgutachten Hamburg". Es liegt bewusst als Markdown-Content vor, nicht als `.astro`-Seite: Der technische Einbau ist gemäß `docs/architecture/website-platform-decision.md` aktuell blockiert (keine weitere Astro-Ausbauarbeit vor Abschluss der Plattformentscheidung; keine Framer-Live-Änderung ohne erfolgreichen lokalen Piloten). Sobald eine der beiden Plattformen freigegeben ist, kann dieser Inhalt 1:1 übernommen werden — Abschnitt „Technische Umsetzung später" zeigt exakt, wohin.

Alle Aussagen stammen aus bestätigten Quellen: `02_COMPANY/01_company-facts.md`, `02_COMPANY/02_trust-and-proof.md`, `01_BRAND/04_claims.md`, `03_OFFER/01_services.md`, `03_OFFER/02_customer-process.md`, `04_AUDIENCE/02_problems-and-objections.md`, `02_COMPANY/03_legal-boundaries.md`, `apps/website/src/data/site.ts`, `apps/website/src/data/homepage.ts`. Keine neuen Zahlen, Garantien oder Leistungsversprechen erfunden.

---

## 1. SEO Title

```
Unfallgutachten Hamburg – Dein unabhängiger Kfz-Gutachter
```
(57 Zeichen — innerhalb der empfohlenen Länge)

## 2. Meta Description

```
Unfallgutachten in Hamburg: unabhängig, unter 60 Minuten vor Ort, Gutachten in 24 Stunden. DGuSV-zertifiziert, über 3 Mio. € durchgesetzt. Jetzt Schaden sichern.
```
(161 Zeichen — leicht über dem empfohlenen 155–160-Zeichen-Richtwert, vor Veröffentlichung ggf. um 1–5 Zeichen kürzen)

## 3. H1–H3-Struktur

```
H1  Unfallgutachten Hamburg: Dein Schaden. Deine Rechte. Unsere Gutachten.
  H2  Warum ein unabhängiges Unfallgutachten in Hamburg zählt
  H2  Dein Ablauf in 5 Schritten
  H2  Das gehört zu Deinem Unfallgutachten
    H3  Schadendokumentation
    H3  Wertminderung & Nutzungsausfall
    H3  Fiktive Abrechnung
  H2  Darum GutachtenHelden
    H3  Qualifikation
    H3  Leistungsnachweise
  H2  Häufige Fragen zum Unfallgutachten in Hamburg
  H2  Jetzt Schaden sichern
```

Genau ein `h1` pro Seite, wie in `docs/architecture/design-system.md` vorgeschrieben.

---

## 4. Hero

**Eyebrow:** Kfz-Gutachter Hamburg

**H1 / Headline:** Unfallgutachten Hamburg: Dein Schaden. Deine Rechte. Unsere Gutachten.

**Subheadline:** Unfall in Hamburg gehabt? Wir sichern Deine Ansprüche mit einem unabhängigen Unfallgutachten.

**Unterstützende Punkte (supportingPoints):**
- Schnell vor Ort. Präzise dokumentiert. Stark in der Regulierung.
- Damit Du kein Geld liegen lässt.

**Primärer CTA im Hero:** siehe Abschnitt 8 (Conversion-Elemente) — WhatsApp-Button nur, sobald `site.whatsapp.status === "confirmed"`; bis dahin ist der Anruf-Button primär.

---

## 5. Vertrauenselemente

**TrustBar (Kennzahlenleiste direkt unter dem Hero):**

| Wert | Label |
|---|---|
| < 60 Min. | am Unfallort in Hamburg |
| 24 Std. | bis zum fertigen Gutachten |
| > 3 Mio. € | durchgesetzter Schadenersatz |

**Qualifikationsbadges („Darum GutachtenHelden" → H3 „Qualifikation"):**
- M. Sc. Maschinenbauingenieur
- Mitglied im DGuSV
- DGuSV-zertifiziert
- zertifizierter Kfz-Sachverständiger
- Tätigkeit seit 2019

**Leistungsnachweise (H3 „Leistungsnachweise"):**
- unter 60 Minuten am Unfallort
- Gutachten innerhalb von 24 Stunden
- über 3 Mio. € durchgesetzter Schadenersatz

**Rechtlicher Rahmen (nicht als eigene Sektion, sondern als Tonfall-Regel für die gesamte Seite):** Keine pauschalen Versicherungsgarantien, keine garantierten Auszahlungssummen, keine Darstellung als Rechtsanwaltskanzlei (`02_COMPANY/03_legal-boundaries.md`). Formulierungen durchgehend mit „in der Regel", „bei einem unverschuldeten Unfall" statt absoluter Zusagen.

---

## 6. Seiteninhalt (vollständiger Fließtext)

### H2: Warum ein unabhängiges Unfallgutachten in Hamburg zählt

Nach einem Autounfall in Hamburg entscheiden die ersten Schritte oft darüber, ob Du Deinen vollen Anspruch bekommst. Ein unabhängiges Unfallgutachten dokumentiert Deinen Schaden lückenlos und beziffert ihn fachlich — unabhängig davon, welchen Gutachter die gegnerische Versicherung Dir vorschlägt.

Bei einem unverschuldeten Unfall hast Du in der Regel das Recht, einen unabhängigen Gutachter Deiner Wahl zu beauftragen. Der von der Versicherung vorgeschlagene Gutachter arbeitet für die Versicherung — ein unabhängiges Gutachten sichert Deine eigene Perspektive.

### H2: Dein Ablauf in 5 Schritten

1. **Melden** — Schaden per Telefon melden (WhatsApp folgt, sobald verfügbar).
2. **Klären** — Wir klären gemeinsam die Ausgangssituation.
3. **Besichtigen** — Dein Fahrzeug wird vor Ort in Hamburg besichtigt und dokumentiert.
4. **Beziffern** — Schaden und Ansprüche werden fachlich beziffert.
5. **Regulieren** — Bei Bedarf Zusammenarbeit mit spezialisierten Partneranwälten.

(Quelle: `03_OFFER/02_customer-process.md`, identische Schrittfolge wie auf der Homepage — bewusst konsistent, keine zweite, abweichende Prozessbeschreibung.)

### H2: Das gehört zu Deinem Unfallgutachten

Ein Unfallgutachten von GutachtenHelden ist mehr als eine Reparaturkostenschätzung — es sichert alle Schadenpositionen, die Dir nach dem Unfall zustehen.

#### H3: Schadendokumentation
Vollständige technische Dokumentation und Bezifferung Deines Unfallschadens — nachvollziehbar für Versicherung und ggf. Gericht.

#### H3: Wertminderung & Nutzungsausfall
Wir beziffern den Wertverlust durch den Unfall als eigene Schadenposition und die Entschädigung für die Zeit ohne Dein Fahrzeug — zwei Ansprüche, die ein reiner Werkstatt-Kostenvoranschlag nicht erfasst.

#### H3: Fiktive Abrechnung
Du musst Dein Fahrzeug nicht reparieren lassen: Über die fiktive Abrechnung rechnest Du den Schaden auf Basis des Gutachtens ab.

### H2: Darum GutachtenHelden

Siehe Abschnitt 5 (Vertrauenselemente) für die vollständigen Qualifikations- und Leistungsnachweis-Listen. Einleitender Satz für diese Sektion:

> Als DGuSV-zertifizierter Kfz-Sachverständiger mit Tätigkeit seit 2019 dokumentiere ich Deinen Schaden schnell, präzise und unabhängig — direkt in Hamburg vor Ort.

---

## 7. FAQ

Fünf Fragen, redaktionell auf die Suchintention „Unfallgutachten Hamburg" zugeschnitten, inhaltlich konsistent mit `apps/website/src/data/homepage.ts` (keine widersprüchlichen Zweitaussagen zur Homepage):

1. **Was kostet mich das Unfallgutachten?**
   Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die Gutachterkosten. Wir klären Deine individuelle Situation direkt am Telefon.

2. **Brauche ich wirklich einen Gutachter, oder reicht ein Kostenvoranschlag der Werkstatt?**
   Bei mehr als einem kleinen Kratzer sichert ein unabhängiges Gutachten zusätzliche Ansprüche wie Wertminderung und Nutzungsausfall, die ein reiner Kostenvoranschlag nicht erfasst.

3. **Muss ich den Gutachter der Versicherung akzeptieren?**
   Nein. Bei einem unverschuldeten Unfall hast Du in der Regel das Recht, einen unabhängigen Gutachter Deiner Wahl zu beauftragen — zum Beispiel uns.

4. **Wie schnell bekomme ich mein Gutachten?**
   Wir sind meist unter 60 Minuten am Unfallort in Hamburg und liefern Dein Gutachten innerhalb von 24 Stunden.

5. **Muss ich mein Fahrzeug reparieren lassen, bevor ich Geld bekomme?**
   Nein. Über die fiktive Abrechnung kannst Du den Schaden auf Basis des Gutachtens abrechnen, ohne reparieren zu müssen.

---

## 8. Conversion-Elemente

Nach `05_WEBSITE_SEO/03_conversion-system.md` (CTA-Hierarchie: WhatsApp → Anruf → E-Mail → Kontaktformular) und der bereits im Code umgesetzten Fallback-Logik in `PrimaryCtaGroup.astro`:

- **Primärer CTA:** WhatsApp — wird nur gerendert, wenn `site.whatsapp.status === "confirmed"` ist. Aktuell **nicht bestätigt** (`apps/website/src/data/site.ts`, Feld `whatsapp`, Status `missing`). Bis zur Bestätigung übernimmt der Anruf-Button automatisch die primäre Rolle — kein Fake-Link, keine erfundene Nummer.
- **Sekundärer/aktuell primärer CTA:** Anruf — `tel:+4917340864 20` (aus `site.phone`).
- **Tertiär:** E-Mail — `info@kfz-gutachtenhelden.de`.
- **Quartär:** Kontaktformular — sofern auf der Zielplattform vorhanden; aktuell in `apps/website` nicht implementiert (`src/components/forms/` ist nur vorbereitet, leer).
- **Sticky Mobile CTA:** analog zur Homepage nutzen (`StickyMobileCta.astro`), damit der CTA auf Mobilgeräten beim Scrollen sichtbar bleibt.
- **Microcopy unter dem CTA:** „Antwort in der Regel innerhalb weniger Minuten — täglich 08:00–22:00 Uhr erreichbar."
- **Finaler CTA am Seitenende (H2 „Jetzt Schaden sichern"):**
  - Headline: „Jetzt Schaden sichern"
  - Body: „Schnell, unabhängig und direkt in Hamburg vor Ort."
  - Gleiche CTA-Hierarchie wie im Hero (Anruf primär, bis WhatsApp bestätigt ist).

---

## 9. LocalBusiness- und FAQ-Schema (JSON-LD)

### LocalBusiness/AutomotiveBusiness-Schema

Identisch zum bestehenden Schema-Muster in `apps/website/src/components/seo/JsonLd.astro` — ausschließlich Felder aus `site.ts`, keine neuen Angaben:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "name": "KFZ-GutachtenHelden",
  "alternateName": "Gutachten Helden",
  "url": "https://www.kfz-gutachtenhelden.de",
  "telephone": "+49 173 408 64 20",
  "email": "info@kfz-gutachtenhelden.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Drehbahn 5",
    "postalCode": "20354",
    "addressLocality": "Hamburg",
    "addressCountry": "DE"
  },
  "areaServed": "Hamburg",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "08:00",
    "closes": "22:00"
  }
}
```

### FAQPage-Schema

Direkt aus den fünf FAQ-Einträgen in Abschnitt 7 abgeleitet:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet mich das Unfallgutachten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die Gutachterkosten. Wir klären Deine individuelle Situation direkt am Telefon."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich wirklich einen Gutachter, oder reicht ein Kostenvoranschlag der Werkstatt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei mehr als einem kleinen Kratzer sichert ein unabhängiges Gutachten zusätzliche Ansprüche wie Wertminderung und Nutzungsausfall, die ein reiner Kostenvoranschlag nicht erfasst."
      }
    },
    {
      "@type": "Question",
      "name": "Muss ich den Gutachter der Versicherung akzeptieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Bei einem unverschuldeten Unfall hast Du in der Regel das Recht, einen unabhängigen Gutachter Deiner Wahl zu beauftragen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schnell bekomme ich mein Gutachten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir sind meist unter 60 Minuten am Unfallort in Hamburg und liefern Dein Gutachten innerhalb von 24 Stunden."
      }
    },
    {
      "@type": "Question",
      "name": "Muss ich mein Fahrzeug reparieren lassen, bevor ich Geld bekomme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Über die fiktive Abrechnung kannst Du den Schaden auf Basis des Gutachtens abrechnen, ohne reparieren zu müssen."
      }
    }
  ]
}
```

**Hinweis:** Nicht gleichzeitig ein zweites, seitenweites FAQPage-Schema mit der Homepage ausgeben, falls beide Seiten künftig live sind — pro Seite genau ein FAQPage-Schema mit den auf dieser Seite tatsächlich sichtbaren Fragen (Google-Richtlinie).

---

## 10. Interne Verlinkung

- **Von `/` (Homepage):** Aktiver Link auf diese Seite mit Ankertext „Unfallgutachten Hamburg" — ersetzt/ergänzt den bisherigen reinen Verweis auf `/leistungen` als Top-Priorität (siehe `13_REPORTS/06_information-architecture.md`, Abschnitt E).
- **Von `/leistungen` (sobald zum Hub umgebaut):** Eintrag „Unfallgutachten Hamburg" verlinkt hierher.
- **Breadcrumb auf dieser Seite:** Home → Leistungen → Unfallgutachten Hamburg (`Breadcrumbs.astro` wiederverwenden).
- **Von dieser Seite zu:** dem Ratgeber-Artikel „Versicherung zahlt zu wenig" (Phase-1-Maßnahme 3, Text liegt vor, noch nicht veröffentlicht) — Verlinkung im Abschnitt „Darum GutachtenHelden" oder direkt nach FAQ-Frage 3.
- **Von dieser Seite zu:** `/kontakt` als sekundärer Link im finalen CTA-Block, falls ein Kontaktformular verfügbar ist.
- **Keine Waisenseite:** Diese Seite ist nach Verlinkung von Homepage und `/leistungen` in maximal einem Klick erreichbar (Prinzip aus `13_REPORTS/06_information-architecture.md`, Abschnitt E).

---

## 11. Bildempfehlungen

Aktueller Bestand laut `docs/architecture/asset-strategy.md`: Im Repository liegen ausschließlich die vier Logo-Dateien. Fotos/Videos liegen ausschließlich in Google Drive und wurden für dieses Fundament bewusst nicht übernommen. Für diese Seite empfohlen, **Status REVIEW — noch keine Datei bestätigt/übernommen**:

| Platzierung | Empfehlung | Status |
|---|---|---|
| Hero-Hintergrund/-Bild | Ramin bei der Schadenaufnahme vor Ort in Hamburg (authentisch, kein Stock-Foto — siehe Designprinzip „lokal und menschlich" in `docs/architecture/design-system.md`) | REVIEW — Auswahl aus Google Drive nötig |
| „Darum GutachtenHelden" | Porträtfoto Ramin Gulzari | REVIEW — Auswahl aus Google Drive nötig |
| „Das gehört zu Deinem Unfallgutachten" | Optional: anonymisierte Nahaufnahme eines dokumentierten Fahrzeugschadens | REVIEW — nur mit Freigabe, keine identifizierbaren Kennzeichen (siehe `CLAUDE.md`, Abschnitt „Sicherheit") |
| Prozessschritte (5 Schritte) | Keine Fotos nötig — Icon-/Nummern-Darstellung wie auf der Homepage (`ProcessSteps.astro`) | Kein Bildbedarf |

Sobald Bilder aus Google Drive freigegeben sind: Originale bleiben in Google Drive, nur weboptimierte Kopien nach `apps/website/src/assets/` übernehmen und über `ResponsiveImage.astro` einbinden (Regeln in `docs/architecture/asset-strategy.md` unverändert befolgen).

---

## 12. Technische Umsetzung später — exakte Einbaustellen

Sobald die Plattformentscheidung abgeschlossen ist, wird dieser Content wie folgt eingebaut. Diese Zuordnung selbst ist keine Umsetzung — es werden keine Dateien unter `apps/website/src/pages` oder `apps/website/src/data` angelegt oder verändert.

**Falls Astro (Referenzarchitektur):**

| Abschnitt dieses Dokuments | Zieldatei/-komponente |
|---|---|
| Seite insgesamt | neue Datei `apps/website/src/pages/leistungen/unfallgutachten-hamburg.astro`, analog zu `src/pages/index.astro` |
| Strukturierte Inhalte (Abschnitt 4–7) | neue Datei `apps/website/src/data/pages/unfallgutachten-hamburg.ts`, analog zu `src/data/homepage.ts` |
| SEO Title/Description (Abschnitt 1–2) | `SeoHead.astro`, Props `title`/`description` |
| Hero (Abschnitt 4) | `HeroSection.astro` |
| Vertrauenselemente (Abschnitt 5) | `TrustBar.astro`, `QualificationBadge.astro`, `StatItem.astro` |
| Ablauf (Abschnitt 6, H2 „Dein Ablauf") | `ProcessSteps.astro` |
| Leistungsumfang (Abschnitt 6, H2 „Das gehört zu…") | `ServiceOverview.astro` oder neue, gleichartige Section-Komponente nach demselben Muster |
| FAQ (Abschnitt 7) | `FaqSection.astro` |
| Conversion-Elemente (Abschnitt 8) | `PrimaryCtaGroup.astro`, `WhatsAppButton.astro`, `CallButton.astro`, `StickyMobileCta.astro`, `FinalCtaSection.astro` |
| Schema (Abschnitt 9) | `JsonLd.astro` — LocalBusiness-Teil unverändert wiederverwenden, FAQPage-Teil neu ergänzen (aktuell gibt `JsonLd.astro` nur LocalBusiness aus) |
| Breadcrumb (Abschnitt 10) | `Breadcrumbs.astro` |
| Bilder (Abschnitt 11) | `ResponsiveImage.astro`, sobald Assets aus Google Drive freigegeben sind |

**Falls Framer (abhängig vom Ausgang des lokalen Piloten, siehe `docs/architecture/website-platform-decision.md`):** Gleiche Abschnittsreihenfolge als neue Framer-Seite unter einem eigenen Pfad `/leistungen/unfallgutachten-hamburg` anlegen, CTA-Hierarchie und Schema-Felder inhaltlich identisch übernehmen. Keine Umsetzung ohne den in der Plattformentscheidung geforderten erfolgreichen lokalen Praxistest.

Kein Code wurde für diesen Sprint geschrieben oder verändert. Keine Astro-Seite wurde angelegt. Keine Framer-Änderung wurde vorgenommen.
