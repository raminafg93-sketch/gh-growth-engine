# Phase-1-Umsetzungsplan — Growth-Priority-Roadmap

Stand: 2026-07-21
Basis: `docs/roadmaps/growth-priority-roadmap.md` (Phase 1, unverändert, PR #14 nicht gemergt), `02_COMPANY/01_company-facts.md`, `02_COMPANY/02_trust-and-proof.md`, `02_COMPANY/03_legal-boundaries.md`, `03_OFFER/01_services.md`, `04_AUDIENCE/02_problems-and-objections.md`, `04_AUDIENCE/03_search-intents.md`, `05_WEBSITE_SEO/03_conversion-system.md`, `06_GOOGLE/01_google-seo.md`, `06_GOOGLE/02_google-business-profile.md`, `11_OPERATIONS/02_proof-register.md`, `13_REPORTS/06_information-architecture.md`.

Ziel dieses Dokuments: Jede der drei Phase-1-Maßnahmen so weit herunterbrechen, dass jede Einzelaufgabe ohne weitere Planung abgearbeitet werden kann.

**Rollenklärung (unverändert gemäß `12_AI_SYSTEM/03_github-autonomy.md`):** Claude bereitet Texte, Strukturen, Meta-Daten und Schema-Entwürfe vor. Die Veröffentlichung auf der produktiven Website (GELB) und jede Änderung im Google-Business-Profil-Dashboard (externe Plattform, nicht Teil dieses Repositories) bleibt Ramins Aktion. Dieses Dokument selbst löst keine Veröffentlichung, keinen GBP-Post und keine Live-Änderung aus.

---

## Maßnahme 1: Google Business Profile optimieren

### 1. Ziel
Das GBP so aufstellen, dass es dringliche, lokale Sucher direkt zu Anruf oder WhatsApp führt — ohne Umweg über die Website.

### 2. Konkrete Deliverables
- NAP-Abgleichsdokument (Ist-GBP vs. `02_COMPANY/01_company-facts.md`)
- Optimierte Unternehmensbeschreibung (GBP-Zeichenlimit 750)
- Kategorievorschlag (primär + sekundär)
- 5 vorformulierte Standard-Fragen samt Antworten für die GBP-Q&A-Sektion
- 4 vorformulierte GBP-Posts (Trust-Nachweise aus `02_COMPANY/02_trust-and-proof.md`, Leistungsschwerpunkte)
- Bewertungsanfrage-Vorlage (WhatsApp-Text für nach Auftragsabschluss)
- Bild-Bedarfsliste für GBP (Status REVIEW — keine bestätigten Bilddateien im Repository vorhanden)

### 3. Reihenfolge der Umsetzung
1. NAP-Abgleich
2. Kategorien prüfen
3. Unternehmensbeschreibung
4. Q&A-Text
5. GBP-Posts
6. Bewertungsanfrage-Vorlage
7. Bild-Bedarfsliste an Ramin übergeben

### 4. Geschätzter Zeitaufwand
Texterstellung (Claude): ca. 3–4 Stunden gesamt. Umsetzung im GBP-Dashboard (Ramin): ca. 30–60 Minuten.

### 5. Abhängigkeiten
Kein Zugriff auf das GBP-Dashboard aus diesem Repository/dieser Arbeitsumgebung — Ramin muss die vorbereiteten Texte selbst einfügen. Keine Abhängigkeit von den anderen zwei Maßnahmen.

### 6. Erwarteter Einfluss
| Bereich | Einfluss |
|---|---|
| Lokale Sichtbarkeit | **Hoch** — direkter Hebel für Maps-Ranking |
| Organischer Traffic | **Niedrig-Mittel** — wirkt primär auf Maps, nicht auf klassische organische SERP |
| Conversion | **Hoch** — Anruf/WhatsApp direkt aus Maps ohne Website-Umweg |
| Vertrauen | **Hoch** — Bewertungen, Q&A und Trust-Posts sichtbar an prominentester Stelle |

### 7. Messbare Erfolgskennzahlen (KPIs)
- Anzahl Anrufe über GBP (GBP-Insights)
- Anzahl Wegbeschreibungsanfragen
- Anzahl Website-Klicks aus GBP
- Anzahl neuer Bewertungen pro Monat
- Durchschnittliche Sternebewertung
- Sichtbarkeit im Maps-Pack für „Kfz Gutachter Hamburg" (manueller Stichproben-Check, da keine GBP-API angebunden)

### Aufgaben (einzeln abarbeitbar)
- [ ] NAP-Daten-Abgleich GBP vs. `02_COMPANY/01_company-facts.md` durchführen
- [ ] GBP-Kategorien prüfen und Optimierungsvorschlag erstellen
- [ ] Unternehmensbeschreibung (GBP) neu formulieren
- [ ] 5 GBP-Q&A-Einträge formulieren
- [ ] 4 GBP-Posts formulieren
- [ ] Bewertungsanfrage-Vorlage (WhatsApp-Text) erstellen
- [ ] Bild-Bedarfsliste für GBP zusammenstellen und an Ramin übergeben

---

## Maßnahme 2: Leistungsseite „Unfallgutachten Hamburg"

### 1. Ziel
Eine dedizierte, conversion-starke Landingpage für die konkreteste und kaufnächste Suchintention veröffentlichen — ersetzt `/leistungen` als Ranking-Ziel für dieses Money-Keyword.

### 2. Konkrete Deliverables
- Vollständiger Seitentext (Einstieg, Ablauf, Leistungsumfang, Trust-Sektion, CTA-Sektion)
- Meta Title
- Meta Description
- FAQ-Sektion (4 Fragen aus `04_AUDIENCE/02_problems-and-objections.md`: „Was kostet mich das?", „Brauche ich wirklich einen Gutachter?", „Reicht die Werkstatt?", „Wie schnell geht das?")
- FAQPage-Schema (JSON-LD)
- CTA-/Conversion-Elemente nach `05_WEBSITE_SEO/03_conversion-system.md` (primär WhatsApp, sekundär Anruf, sichtbarer Trust, reduzierte Nutzerangst)
- Interne-Verlinkungs-Plan (Homepage → Seite, `/leistungen`-Hub → Seite, Seite → Ratgeber „Versicherung zahlt zu wenig")
- Bild-Bedarfsliste (Status REVIEW — keine bestätigten Bilddateien vorhanden)

### 3. Reihenfolge der Umsetzung
1. Gliederung/Struktur festlegen
2. Seitentext schreiben
3. FAQ schreiben
4. Meta Title + Meta Description formulieren
5. FAQPage-Schema erstellen
6. CTA-/Conversion-Elemente festlegen
7. Interne Verlinkung festlegen
8. Freigabe durch Ramin einholen
9. Veröffentlichung durch Ramin (GELB, aktuelle Live-Plattform)
10. GBP-Post zur Ankündigung vorbereiten

### 4. Geschätzter Zeitaufwand
Content-Erstellung (Claude): ca. 3–4 Stunden. Review/Freigabe (Ramin): ca. 30 Minuten. Technische Veröffentlichung: abhängig von der aktuellen Live-Plattform, nicht Teil dieses Dokuments.

### 5. Abhängigkeiten
Trust-Nachweise aus `02_COMPANY/02_trust-and-proof.md` / `11_OPERATIONS/02_proof-register.md` (bereits freigegeben). Freigabe vor Live-Schaltung zwingend (GELB gemäß `12_AI_SYSTEM/03_github-autonomy.md`). Keine Abhängigkeit von Maßnahme 1; Maßnahme 3 profitiert von der internen Verlinkung auf diese Seite.

### 6. Erwarteter Einfluss
| Bereich | Einfluss |
|---|---|
| Lokale Sichtbarkeit | **Mittel** — ergänzt GBP, primär organisch statt Maps-bezogen |
| Organischer Traffic | **Hoch** — schließt größte identifizierte Content-Lücke, zentrales Google-Ziel-Keyword |
| Conversion | **Hoch** — dedizierter CTA-Pfad statt generischer Sammelseite |
| Vertrauen | **Mittel-Hoch** — eigene Trust-Sektion mit Nachweisen |

### 7. Messbare Erfolgskennzahlen (KPIs)
- Ranking-Position für „Unfallgutachten Hamburg" (Search Console, sobald angebunden, sonst manueller Check)
- Organische Impressionen/Klicks auf die URL
- Anzahl WhatsApp-/Anruf-Klicks von dieser Seite
- Verweildauer und Absprungrate

### Aufgaben (einzeln abarbeitbar)
- [ ] Gliederung der Leistungsseite erstellen
- [ ] Seitentext der Leistungsseite schreiben
- [ ] Meta Title formulieren
- [ ] Meta Description formulieren
- [ ] FAQ-Sektion (4 Fragen) schreiben
- [ ] FAQPage-Schema (JSON-LD) erstellen
- [ ] CTA-/Conversion-Elemente festlegen (WhatsApp primär, Anruf sekundär)
- [ ] Interne Verlinkung festlegen (Homepage, `/leistungen`-Hub, Ratgeber-Artikel)
- [ ] Bild-Bedarfsliste zusammenstellen und an Ramin übergeben
- [ ] Freigabe-Runde mit Ramin durchführen

---

## Maßnahme 3: Ratgeber-Artikel „Versicherung zahlt zu wenig"

### 1. Ziel
Den dringlichsten, frustrationsnächsten Suchintent bedienen und akut hilfesuchende Nutzer direkt zum CTA führen.

### 2. Konkrete Deliverables
- Artikeltext (Problem benennen, konkrete Handlungsschritte, wann und wie GH hilft, klare Abgrenzung zur Rechtsberatung gemäß `02_COMPANY/03_legal-boundaries.md`)
- Meta Title
- Meta Description
- FAQ-Sektion (2–3 Fragen, z. B. „Muss ich die Kürzung der Versicherung akzeptieren?", „Was kann ich tun, wenn die Versicherung zu wenig zahlt?")
- FAQPage-Schema (JSON-LD)
- Interne-Verlinkungs-Plan (zur Leistungsseite „Unfallgutachten Hamburg", zum Ratgeber-Hub)
- CTA-Sektion (primär WhatsApp)
- Trust-Element (Erfolgsnachweis „über 3 Mio. € Schadenersatz" aus `02_COMPANY/02_trust-and-proof.md`)

### 3. Reihenfolge der Umsetzung
1. Gliederung/Struktur festlegen
2. Artikeltext schreiben
3. FAQ schreiben
4. Meta Title + Meta Description formulieren
5. FAQPage-Schema erstellen
6. CTA-/Trust-Elemente festlegen
7. Interne Verlinkung festlegen
8. Freigabe durch Ramin einholen
9. Veröffentlichung durch Ramin (GELB)

### 4. Geschätzter Zeitaufwand
Content-Erstellung (Claude): ca. 2–3 Stunden. Review/Freigabe (Ramin): ca. 20–30 Minuten.

### 5. Abhängigkeiten
Muss `02_COMPANY/03_legal-boundaries.md` strikt einhalten (keine pauschalen Garantien, keine Darstellung als Rechtsanwaltskanzlei). Freigabe vor Live-Schaltung zwingend. Profitiert von, ist aber nicht blockiert durch, die parallel entstehende Leistungsseite (Maßnahme 2) als Verlinkungsziel.

### 6. Erwarteter Einfluss
| Bereich | Einfluss |
|---|---|
| Lokale Sichtbarkeit | **Niedrig** — informationeller Artikel, nicht lokal-spezifisch |
| Organischer Traffic | **Hoch** — vermutlich hohes Suchvolumen (REVIEW, keine Search-Console-Daten vorhanden) |
| Conversion | **Sehr hoch** — Nutzer ist im Moment der Suche bereits akut frustriert und handlungsbereit |
| Vertrauen | **Hoch** — Nutzer fühlt sich in seiner konkreten Situation verstanden |

### 7. Messbare Erfolgskennzahlen (KPIs)
- Organische Impressionen/Klicks auf die URL
- WhatsApp-/Anruf-Konversionsrate von dieser Seite
- Verweildauer / Scrolltiefe
- Anzahl Anfragen mit erkennbarem Bezug zu „Versicherung zahlt zu wenig" (sofern im Kontaktkanal nachvollziehbar)

### Aufgaben (einzeln abarbeitbar)
- [ ] Gliederung des Ratgeber-Artikels erstellen
- [ ] Artikeltext schreiben
- [ ] Meta Title formulieren
- [ ] Meta Description formulieren
- [ ] FAQ-Sektion (2–3 Fragen) schreiben
- [ ] FAQPage-Schema (JSON-LD) erstellen
- [ ] CTA-/Trust-Elemente festlegen
- [ ] Interne Verlinkung festlegen (Leistungsseite, Ratgeber-Hub)
- [ ] Freigabe-Runde mit Ramin durchführen

---

## Priorisierte Checkliste (maximal 20 Aufgaben)

Reihenfolge nach Priorität: zuerst die abhängigkeitsfreie Maßnahme (GBP), dann die Leistungsseite (höchster direkter Conversion-Nutzen), dann der Ratgeber-Artikel, abschließend die maßnahmenübergreifende Freigabe und Ankündigung.

1. [ ] NAP-Daten-Abgleich GBP vs. `02_COMPANY/01_company-facts.md` durchführen
2. [ ] GBP-Kategorien prüfen und Optimierungsvorschlag erstellen
3. [ ] Unternehmensbeschreibung (GBP) neu formulieren
4. [ ] 5 GBP-Q&A-Einträge formulieren
5. [ ] 4 GBP-Posts formulieren
6. [ ] Bewertungsanfrage-Vorlage (WhatsApp-Text) erstellen
7. [ ] Bild-Bedarfsliste für GBP zusammenstellen und an Ramin übergeben
8. [ ] Gliederung der Leistungsseite „Unfallgutachten Hamburg" erstellen
9. [ ] Seitentext der Leistungsseite schreiben
10. [ ] Meta Title + Meta Description der Leistungsseite formulieren
11. [ ] FAQ-Sektion (4 Fragen) für die Leistungsseite schreiben
12. [ ] FAQPage-Schema für die Leistungsseite erstellen
13. [ ] CTA-/Conversion-Elemente für die Leistungsseite festlegen (WhatsApp primär, Anruf sekundär)
14. [ ] Interne Verlinkung der Leistungsseite festlegen (Homepage, `/leistungen`-Hub, Ratgeber)
15. [ ] Artikeltext „Versicherung zahlt zu wenig" schreiben
16. [ ] Meta Title + Meta Description des Ratgeber-Artikels formulieren
17. [ ] FAQ-Sektion (2–3 Fragen) für den Ratgeber-Artikel schreiben
18. [ ] Interne Verlinkung des Ratgeber-Artikels festlegen (Leistungsseite, Ratgeber-Hub)
19. [ ] Freigabe-Runde mit Ramin für Leistungsseite und Ratgeber-Artikel durchführen
20. [ ] GBP-Post „Neue Leistungsseite veröffentlicht" vorbereiten

Kein Punkt dieser Checkliste wurde durch die Erstellung dieses Dokuments bereits ausgeführt oder veröffentlicht.
