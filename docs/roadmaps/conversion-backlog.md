# Conversion-Backlog — Issue-Liste

Stand: 2026-07-21
Umfang: ausschließlich die aktuell im Code vorhandene Website (`apps/website`, Astro-Referenzimplementierung der Homepage v2, `src/pages/index.astro`). Kein Zugriff auf den Live-Framer-Code möglich (siehe `docs/architecture/website-platform-decision.md`) — diese Analyse bewertet daher die konkret einsehbare Implementierung, nicht die aktuell live geschaltete Framer-Seite.

Maßstab: `05_WEBSITE_SEO/03_conversion-system.md` — jede Seite braucht primären CTA, sekundären CTA, passende Microcopy, sichtbaren Trust, reduzierte Nutzerangst, klare nächste Schritte.

Dies ist ausschließlich ein priorisierter Issue-Backlog. Keine Codeänderung, kein Refactoring, keine neue Komponente in diesem PR.

---

## Issue 1: WhatsApp — höchster Conversion-Kanal ist sitewide nicht aktiv

**Priorität:** P1
**Label-Vorschlag:** `conversion`, `p1`, `data-gap`

**Problem:** `site.whatsapp` ist als `status: "missing"` markiert. Dadurch rendert `WhatsAppButton.astro` auf jeder Seite nichts, und `PrimaryCtaGroup.astro` zeigt überall nur den Anruf-Button als einzigen CTA.

**Warum problematisch:** WhatsApp steht laut `05_WEBSITE_SEO/03_conversion-system.md` an Position 1 der CTA-Hierarchie — vor Anruf, E-Mail und Kontaktformular. Die Zielgruppe ist akut nach einem Unfall, überwiegend mobil unterwegs (siehe Kommentar in `StickyMobileCta.astro`) und nutzt WhatsApp typischerweise mit geringerer Hemmschwelle als einen Anruf. Ohne WhatsApp fehlt der Kanal mit vermutlich der höchsten Abschlussrate auf der gesamten Seite, nicht nur auf einer Unterseite.

**Konkrete Lösung:** Bestätigte WhatsApp-Nummer/-Link mit Ramin klären (Telefonnummer identisch mit WhatsApp-Nummer? Separate Business-Nummer?), in `02_COMPANY/01_company-facts.md` freigeben, danach `site.whatsapp` in `site.ts` von `missing(...)` auf `{ value: {...}, status: "confirmed" }` umstellen. Kein Code-Refactoring nötig — die technische Fallback-Logik existiert bereits korrekt.

**Betroffene Datei:** `apps/website/src/data/site.ts` (Feld `whatsapp`, Zeile 52–55); wirkt sich aus auf `apps/website/src/components/conversion/WhatsAppButton.astro` und `PrimaryCtaGroup.astro` (sitewide, jede Sektion mit CTA).

**Geschätzter Einfluss auf Conversion:** **Hoch** — betrifft jeden CTA auf jeder Seite, nicht nur eine Sektion.

---

## Issue 2: Bewertungssektion rendert vollständig nichts — kein Social Proof

**Priorität:** P1
**Label-Vorschlag:** `conversion`, `p1`, `content-gap`, `trust`

**Problem:** `homepage.reviews.items` ist ein leeres Array, `ratingSummary` ist `undefined`. `ReviewSection.astro` rendert bei `items.length === 0` bewusst gar nichts — die gesamte Sektion existiert aktuell nicht auf der Seite.

**Warum problematisch:** Bewertungen sind eines der wirksamsten Vertrauenssignale unmittelbar vor einer Kontaktentscheidung, besonders bei einer erklärungsbedürftigen, vertrauensabhängigen Dienstleistung wie einem Kfz-Gutachten. `13_REPORTS/05_priority-roadmap.md` (P3, Punkt 8) benennt ProvenExpert-Bewertungen bereits als zu prüfendes Trust-Signal — aktuell fehlt jede Umsetzung, die Seite wirkt an dieser Stelle wie ein unbewertetes, unbekanntes Unternehmen.

**Konkrete Lösung:** Reale, freigegebene Bewertungen (z. B. aus ProvenExpert oder Google) beschaffen und in `homepage.ts` unter `reviews.items` sowie `reviews.ratingSummary` eintragen — nur mit Zustimmung der Bewertenden und ohne personenbezogene Daten über das nötige Maß hinaus.

**Betroffene Datei:** `apps/website/src/components/sections/ReviewSection.astro` (Zeile 16–39, Bedingung `items.length > 0 &&`); Datenquelle `apps/website/src/data/homepage.ts` (`reviews`, Zeile 149–154).

**Geschätzter Einfluss auf Conversion:** **Hoch**.

---

## Issue 3: Schadenbeispiele-Sektion rendert vollständig nichts — kein Wirkungsnachweis

**Priorität:** P1
**Label-Vorschlag:** `conversion`, `p1`, `content-gap`, `trust`

**Problem:** `homepage.damageExamples.items` ist leer. `DamageExamples.astro` rendert analog zu Issue 2 bei leerem Array nichts.

**Warum problematisch:** Konkrete, anonymisierte Beispiele ("Wertminderung von X € durchgesetzt", "Nutzungsausfall erfolgreich beziffert") machen den abstrakten Trust-Claim ">3 Mio. € Schadenersatz" aus der TrustBar greifbar und nachvollziehbar. Ohne sie bleibt der Beweis rein behauptet statt gezeigt — ein klassischer Conversion-Hebel fehlt komplett.

**Konkrete Lösung:** 3–5 anonymisierte, freigegebene Fallbeispiele mit Ramin abstimmen (keine Kennzeichen, keine identifizierbaren Kundendaten — siehe `CLAUDE.md`, Abschnitt „Sicherheit") und in `homepage.ts` unter `damageExamples.items` eintragen.

**Betroffene Datei:** `apps/website/src/components/sections/DamageExamples.astro` (Zeile 16–31); Datenquelle `apps/website/src/data/homepage.ts` (`damageExamples`, Zeile 143–147).

**Geschätzter Einfluss auf Conversion:** **Hoch-Mittel**.

---

## Issue 4: FAQ-Sektion hat keinen eigenen CTA nach der Einwandbehandlung

**Priorität:** P2
**Label-Vorschlag:** `conversion`, `p2`, `cta-placement`

**Problem:** `FaqSection.astro` rendert Überschrift, Intro und die `<details>`-Liste — aber keinerlei CTA-Element danach. Der nächste CTA befindet sich erst in der übernächsten Sektion (`FinalCtaSection.astro`).

**Warum problematisch:** Der Moment direkt nach dem Auflösen des letzten Einwands (z. B. „Wie schnell geht das?") ist der psychologisch günstigste Moment für eine Handlungsaufforderung — genau hier fehlt sie. Der Nutzer muss stattdessen selbst weiterscrollen, wodurch Absprünge wahrscheinlicher werden.

**Konkrete Lösung:** Direkt unter der FAQ-Liste einen kompakten CTA-Block ergänzen (`PrimaryCtaGroup`, kleinere Größe, mit kurzer Microcopy wie „Noch Fragen? Wir klären das direkt.").

**Betroffene Datei:** `apps/website/src/components/sections/FaqSection.astro` (Zeile 10–24).

**Geschätzter Einfluss auf Conversion:** **Mittel-Hoch**.

---

## Issue 5: „Deine Rechte nach dem Unfall" löst den zentralen Einwand auf, ohne zum Handeln aufzufordern

**Priorität:** P2
**Label-Vorschlag:** `conversion`, `p2`, `cta-placement`

**Problem:** `RightsAfterAccident.astro` beantwortet die zentralen Einwände (u. a. „Muss ich den Gutachter der Versicherung akzeptieren?") und endet mit dem rein rechtlichen Hinweissatz „Individuelle Rechtsberatung erfolgt durch einen Rechtsanwalt." — kein CTA in der gesamten Sektion.

**Warum problematisch:** Genau in dieser Sektion wird der stärkste Einwand entkräftet, der einen Nutzer bisher vom Kontakt abgehalten haben könnte. Ohne unmittelbar folgenden CTA verpufft dieser Vertrauensgewinn, statt ihn direkt in eine Kontaktaufnahme zu überführen.

**Konkrete Lösung:** Nach dem Rechtsberatungshinweis einen kompakten sekundären CTA ergänzen (z. B. „Fragen zu Deinem Fall? Jetzt klären." + `PrimaryCtaGroup`, Größe `md`).

**Betroffene Datei:** `apps/website/src/components/sections/RightsAfterAccident.astro` (Zeile 13–30).

**Geschätzter Einfluss auf Conversion:** **Mittel-Hoch**.

---

## Issue 6: Leistungsübersicht bietet keinen direkten CTA pro Leistung, nur einen externen Sammel-Link

**Priorität:** P2
**Label-Vorschlag:** `conversion`, `p2`, `cta-placement`

**Problem:** `ServiceOverview.astro` zeigt neun Leistungs-Cards ohne eigenen CTA und endet mit einem einzigen Link „Alle Leistungen im Detail ansehen →", der auf die externe Live-Framer-URL (`${site.websiteUrl}/leistungen`) zeigt.

**Warum problematisch:** Ein Nutzer, der beim Scannen der Karten sofort seine eigene Situation erkennt (z. B. „Wertminderung"), hat keinen direkten Weg zur Kontaktaufnahme an dieser Stelle — er wird stattdessen auf eine andere, externe Domain geleitet, was zusätzliche Klicks und Absprungrisiko erzeugt, statt die Erkenntnis sofort zu nutzen.

**Konkrete Lösung:** Direkt unter dem Card-Grid einen `PrimaryCtaGroup`-Block ergänzen („Deine Leistung ist dabei? Jetzt Kontakt aufnehmen."), unabhängig vom bestehenden externen Verweis-Link.

**Betroffene Datei:** `apps/website/src/components/sections/ServiceOverview.astro` (Zeile 13–33).

**Geschätzter Einfluss auf Conversion:** **Mittel**.

---

## Issue 7: Kein Kontaktformular als vierte Stufe der CTA-Hierarchie implementiert

**Priorität:** P2
**Label-Vorschlag:** `conversion`, `p2`, `missing-feature`

**Problem:** `05_WEBSITE_SEO/03_conversion-system.md` definiert vier CTA-Stufen (WhatsApp → Anruf → E-Mail → Kontaktformular). `apps/website/src/components/forms/` enthält ausschließlich eine `.gitkeep`-Datei — kein Kontaktformular ist implementiert.

**Warum problematisch:** Nutzer, die weder anrufen noch eine E-Mail-App öffnen möchten (z. B. am Desktop ohne konfiguriertes Mailprogramm, oder aus genereller Präferenz für Formulare), haben aktuell keine niedrigschwellige vierte Option — die Conversion-Hierarchie ist an ihrem letzten Glied unvollständig.

**Konkrete Lösung:** Minimal-Kontaktformular (Name, Kontaktweg, kurze Nachricht) als eigene Komponente einplanen — Umsetzung bewusst nicht Teil dieses Issues (kein Refactoring/keine neue Komponente in diesem Backlog-PR).

**Betroffene Datei:** `apps/website/src/components/forms/.gitkeep` (Verzeichnis vorbereitet, keine Implementierung).

**Geschätzter Einfluss auf Conversion:** **Mittel**.

---

## Issue 8: Keine Microcopy/Antwortzeit-Versprechen bei den CTA-Buttons

**Priorität:** P2
**Label-Vorschlag:** `conversion`, `p2`, `copy-gap`

**Problem:** Weder `PrimaryCtaGroup.astro` noch `WhatsAppButton.astro`, `CallButton.astro` oder `Button.astro` geben irgendeine begleitende Microcopy aus (z. B. Reaktionszeit, Erreichbarkeit). `site.hours` und `site.service247` sind zwar in `site.ts` bestätigt, werden aber nur in `ContactCard.astro` gezeigt — nicht neben den eigentlichen CTA-Buttons.

**Warum problematisch:** `05_WEBSITE_SEO/03_conversion-system.md` fordert „passende Microcopy" und „reduzierte Nutzerangst" für jede Seite. Direkt am Entscheidungspunkt (dem Button selbst) fehlt die Information, wie schnell und wie lange erreichbar reagiert wird — das erhöht die Hemmschwelle, gerade bei einem spontanen, mobilen CTA-Klick.

**Konkrete Lösung:** Kurze Microcopy-Zeile unter/neben `PrimaryCtaGroup` ergänzen, z. B. „Täglich 08:00–22:00 Uhr erreichbar · 24/7-Service" (Formulierung ausschließlich aus bereits bestätigten `site.ts`-Feldern, keine neue Zusage).

**Betroffene Datei:** `apps/website/src/components/conversion/PrimaryCtaGroup.astro` (Zeile 20–27).

**Geschätzter Einfluss auf Conversion:** **Mittel**.

---

## Issue 9: ContactCard zeigt Kontaktdaten nur als Text/Link, ohne eigenen CTA-Button

**Priorität:** P3
**Label-Vorschlag:** `conversion`, `p3`, `cta-placement`

**Problem:** `ContactCard.astro` gibt Adresse, Telefonnummer, E-Mail und Öffnungszeiten ausschließlich als Fließtext mit einfachen `<a>`-Links aus — keine der button-artigen Conversion-Komponenten (`CallButton`, `WhatsAppButton`) wird hier verwendet.

**Warum problematisch:** In der „Vor Ort in Hamburg"-Sektion, in der lokales Vertrauen am größten ist, wirkt der Kontaktweg dadurch unauffälliger und weniger handlungsauffordernd als in Hero oder Final-CTA — ein optischer Bruch in der sonst konsequenten CTA-Gestaltung der Seite.

**Konkrete Lösung:** In `ContactCard.astro` zusätzlich zum Adress-/Öffnungszeiten-Text einen kompakten `CallButton` (bzw. `PrimaryCtaGroup`, Größe `md`) ergänzen, statt nur den reinen Telefonlink.

**Betroffene Datei:** `apps/website/src/components/conversion/ContactCard.astro` (Zeile 16–29).

**Geschätzter Einfluss auf Conversion:** **Niedrig-Mittel**.

---

## Issue 10: Keine menschliche/lokale Bildsprache im Hero — Designprinzip nicht umgesetzt

**Priorität:** P3
**Label-Vorschlag:** `conversion`, `p3`, `asset-gap`, `trust`

**Problem:** `HeroSection.astro` enthält kein Bildelement. Laut `docs/architecture/asset-strategy.md` liegen im Repository ausschließlich vier Logo-Dateien — keine Fotos. Fotos/Videos existieren nur in Google Drive und wurden bislang bewusst nicht für die Website-Vorschau übernommen.

**Warum problematisch:** `docs/architecture/design-system.md` benennt „lokal und menschlich — echte, lokale Bildsprache (kein Stock-Foto-Glanz)" explizit als Designprinzip. Ein rein textbasierter Hero ohne Gesicht/Vor-Ort-Bild reduziert genau das emotionale Vertrauenssignal, das bei einer personenbezogenen Vertrauensdienstleistung (Gutachter vor Ort) besonders wirksam ist.

**Konkrete Lösung:** Mit Ramin ein Hero-taugliches Foto aus Google Drive auswählen und freigeben (z. B. bei der Schadenaufnahme vor Ort oder Porträt), gemäß der bestehenden Regeln in `docs/architecture/asset-strategy.md` als weboptimierte Kopie nach `apps/website/src/assets/` übernehmen und über `ResponsiveImage.astro` einbinden.

**Betroffene Datei:** `apps/website/src/components/sections/HeroSection.astro` (kein Bildelement vorhanden); Regelwerk `docs/architecture/asset-strategy.md`.

**Geschätzter Einfluss auf Conversion:** **Niedrig-Mittel**.

---

## Priorisierte Übersicht

| # | Issue | Priorität | Einfluss |
|---|---|---|---|
| 1 | WhatsApp sitewide nicht aktiv | P1 | Hoch |
| 2 | Keine Bewertungen (Social Proof) | P1 | Hoch |
| 3 | Keine Schadenbeispiele (Wirkungsnachweis) | P1 | Hoch-Mittel |
| 4 | Kein CTA nach FAQ | P2 | Mittel-Hoch |
| 5 | Kein CTA nach „Deine Rechte nach dem Unfall" | P2 | Mittel-Hoch |
| 6 | Kein CTA pro Leistung, nur externer Sammel-Link | P2 | Mittel |
| 7 | Kein Kontaktformular (4. CTA-Stufe fehlt) | P2 | Mittel |
| 8 | Keine Microcopy/Antwortzeit bei CTAs | P2 | Mittel |
| 9 | ContactCard ohne eigenen CTA-Button | P3 | Niedrig-Mittel |
| 10 | Keine menschliche Bildsprache im Hero | P3 | Niedrig-Mittel |

Keine dieser zehn Beobachtungen wurde in diesem PR umgesetzt. Kein Code wurde geändert, kein Refactoring durchgeführt, keine neue Komponente angelegt — ausschließlich dieser priorisierte Issue-Backlog.
