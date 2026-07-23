# Growth-Priority-Roadmap — Die 5 wirksamsten Maßnahmen für qualifizierte Unfallkunden

Stand: 2026-07-21
Oberziel (`CLAUDE.md`): Mehr qualifizierte Unfallkunden über Google, Meta, Website und langfristig Coaching/Academy.

Diese Roadmap ist **Produktarbeit**, keine Infrastruktur- oder Architekturentscheidung. Sie beantwortet ausschließlich: Welche fünf Maßnahmen bringen den größten Einfluss auf qualifizierte Unfallkunden, unabhängig davon, ob die Website später auf Framer oder Astro läuft? Basis: `13_REPORTS/06_information-architecture.md`, `13_REPORTS/03_content-gaps.md`, `13_REPORTS/05_priority-roadmap.md`, `04_AUDIENCE/03_search-intents.md`, `05_WEBSITE_SEO/03_conversion-system.md`, `06_GOOGLE/02_google-business-profile.md`.

Keine der fünf Maßnahmen erfordert eine Entscheidung zwischen Framer und Astro (siehe `docs/architecture/website-platform-decision.md`, unverändert). Alle sind auf der aktuell laufenden Live-Website und im bestehenden Google Business Profile umsetzbar.

---

## Die 5 Maßnahmen

### 1. Google Business Profile optimieren

**Was:** NAP-Konsistenz mit `02_COMPANY/01_company-facts.md` sicherstellen, Kategorien/Attribute schärfen, Bewertungsanfragen systematisieren, regelmäßige GBP-Posts (Trust-Nachweise aus `02_COMPANY/02_trust-and-proof.md`), Fragen&Antworten-Sektion befüllen.

| Kriterium | Bewertung |
|---|---|
| Geschäftlicher Nutzen | **Hoch** — direkter Kanal für „in der Nähe"-Suchen mit sofortigem Anruf-/WhatsApp-Klick, kein Umweg über die Website nötig |
| SEO-Wirkung | **Hoch** — Maps-Ranking ist für lokale, dringliche Suchintention („Kfz Gutachter Hamburg") oft entscheidender als organisches Ranking |
| Umsetzungsaufwand | **Niedrig** — keine Website-/Code-Änderung, direkt im GBP-Dashboard |
| Abhängigkeiten | **Keine** — unabhängig von Plattformentscheidung, Content-Produktion oder technischem Zugriff |
| Priorität | **P1** |

### 2. Leistungsseite „Unfallgutachten Hamburg" veröffentlichen

**Was:** Dedizierte Landingpage für die konkreteste, kaufnächste Suchintention (siehe `13_REPORTS/06_information-architecture.md`, Abschnitt C/G, Platz 1). Ersetzt die generische Sammelseite `/leistungen` als Ranking-Ziel für dieses Money-Keyword.

| Kriterium | Bewertung |
|---|---|
| Geschäftlicher Nutzen | **Hoch** — direktester Conversion-Pfad, zentrales Google-Ziel-Keyword |
| SEO-Wirkung | **Hoch** — schließt die größte identifizierte Content-Lücke (`13_REPORTS/03_content-gaps.md`) |
| Umsetzungsaufwand | **Mittel** — Text nach Conversion-System erstellen (primärer/sekundärer CTA, Trust, Microcopy), Freigabe vor Veröffentlichung |
| Abhängigkeiten | Trust-Nachweise aus `02_COMPANY/02_trust-and-proof.md`, Freigabe vor Live-Schaltung auf der produktiven Website |
| Priorität | **P1** |

### 3. Ratgeber-Artikel „Versicherung zahlt zu wenig" veröffentlichen

**Was:** Der dringlichste, frustrationsnächste Suchintent aus `04_AUDIENCE/03_search-intents.md` und `13_REPORTS/03_content-gaps.md` — Nutzer sucht aktiv und akut nach Hilfe, hohe Bereitschaft zu WhatsApp/Anruf.

| Kriterium | Bewertung |
|---|---|
| Geschäftlicher Nutzen | **Hoch** — Nutzer in diesem Moment ist maximal handlungsbereit, kein „nur Informationssuche" |
| SEO-Wirkung | **Mittel-Hoch** — vermutlich hohes Suchvolumen (REVIEW, keine Search-Console-Daten vorhanden), aber sehr hohe Conversion-Nähe |
| Umsetzungsaufwand | **Niedrig-Mittel** — kompakter Ratgeber-Artikel, kein neues Leistungsangebot nötig |
| Abhängigkeiten | Muss auf Leistungsseite/CTA verlinken (Hub-and-Spoke-Prinzip aus `13_REPORTS/06_information-architecture.md`, Abschnitt E) |
| Priorität | **P1** |

### 4. Conversion-Elemente auf bestehenden Seiten schärfen

**Was:** CTA-Hierarchie konsequent nach `05_WEBSITE_SEO/03_conversion-system.md` (WhatsApp → Anruf → E-Mail → Kontaktformular) auf allen bestehenden Live-Seiten prüfen und schärfen; Trust-Elemente (Qualifikation, DGuSV, seit 2019, >3 Mio. € Schadenersatz) sichtbarer platzieren statt nur implizit vorhanden.

| Kriterium | Bewertung |
|---|---|
| Geschäftlicher Nutzen | **Hoch** — wirkt sofort auf bereits vorhandenen Besucherstrom, ohne auf neuen Traffic warten zu müssen |
| SEO-Wirkung | **Niedrig-Mittel** — primär Conversion-Hebel, kein direkter Ranking-Effekt |
| Umsetzungsaufwand | **Niedrig** — Anpassung bestehender Seiten, kein neuer Content nötig |
| Abhängigkeiten | Freigabe für Änderungen an produktiven Seiten (GELB laut `12_AI_SYSTEM/03_github-autonomy.md`) |
| Priorität | **P2** |

### 5. Schadenpositions-Content: Wertminderung, Nutzungsausfall, Totalschaden

**Was:** Drei Ratgeber-/Leistungsinhalte mit direktem Geldbezug (siehe `13_REPORTS/06_information-architecture.md`, Abschnitt C/D) — Nutzer mit hoher Handlungsbereitschaft, da es um konkrete, ihm zustehende Beträge geht.

| Kriterium | Bewertung |
|---|---|
| Geschäftlicher Nutzen | **Mittel-Hoch** — konkreter Geldbezug erzeugt Handlungsdruck, aber etwas weiter vom Erstkontakt entfernt als Maßnahme 2–3 |
| SEO-Wirkung | **Mittel-Hoch** — drei zusätzliche, spezifische Keyword-Treffer statt einer Sammelseite |
| Umsetzungsaufwand | **Mittel** — drei separate Inhalte, je kompakt, aber in Summe mehr Aufwand als ein Einzelartikel |
| Abhängigkeiten | Profitiert von bereits veröffentlichter Leistungsseite (Maßnahme 2) zur internen Verlinkung |
| Priorität | **P2–P3** |

---

## Phase 1 — Sofort, ohne Abhängigkeiten

1. Google Business Profile optimieren
2. Leistungsseite „Unfallgutachten Hamburg" erstellen und veröffentlichen
3. Ratgeber-Artikel „Versicherung zahlt zu wenig" erstellen und veröffentlichen

Begründung: Alle drei sind unabhängig voneinander startbar, keine wartet auf eine andere Maßnahme oder auf die Plattformentscheidung. Sie decken die höchste Dringlichkeit und den direktesten Geldbezug ab.

## Phase 2 — Ausbau auf bestehender Basis

4. Conversion-Elemente auf allen bestehenden Live-Seiten schärfen (CTA-Hierarchie, Trust-Sichtbarkeit)
5. Wertminderung- und Nutzungsausfall-Content veröffentlichen (direkte Verlinkung zur Leistungsseite aus Phase 1)

Begründung: Baut auf dem in Phase 1 geschaffenen Fundament auf (neue Leistungsseite als Verlinkungsziel) und hebt den Wert des bereits vorhandenen Traffics.

## Phase 3 — Vervollständigung

6. Totalschaden-Content veröffentlichen
7. `/leistungen` zur echten Hub-Seite umbauen (verlinkt auf Einzelseiten statt selbst auf Money-Keywords zu ranken)
8. Restliche priorisierte Leistungsseiten und Ratgeber-Artikel aus `13_REPORTS/06_information-architecture.md`, Abschnitt C/D (Wertgutachten, Kostenvoranschlag, Kaufberatung, Elektroauto-Gutachten, Restwert, Wiederbeschaffungswert, fiktive Abrechnung, „Was tun nach dem Unfall", „Versicherung schickt Gutachter")

Begründung: Vervollständigt das Content-Portfolio, sobald die dringlichsten und wirksamsten Inhalte bereits live sind und erste Ergebnisse (Anfragen, Rankings) zur weiteren Priorisierung vorliegen.

---

## Eindeutige Empfehlung: Womit wir als Nächstes beginnen

**Zuerst: Google Business Profile optimieren.**

Begründung: Es ist die einzige der fünf Maßnahmen ohne jede Abhängigkeit — kein neuer Content, keine Freigabe für Änderungen an der Live-Website nötig, kein Bezug zur noch offenen Plattformfrage. Es wirkt direkt auf den Kanal, über den dringliche, lokale Unfallkunden am häufigsten zuerst suchen, und führt sie ohne Umweg über die Website direkt zu Anruf oder WhatsApp — der oberste Punkt der bestehenden Conversion-Priorität (`CLAUDE.md`).

**Parallel dazu, sofort startbar:** Texterstellung für die Leistungsseite „Unfallgutachten Hamburg" und den Ratgeber-Artikel „Versicherung zahlt zu wenig" beginnen (Textentwurf, Freigabe, dann Veröffentlichung) — beide sind vollständig vorbereitbar, ohne dass die Plattformentscheidung (Framer/Astro) final geklärt sein muss.
