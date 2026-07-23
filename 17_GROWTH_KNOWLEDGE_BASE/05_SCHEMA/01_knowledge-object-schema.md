# Knowledge-Object-Schema

Stand: 2026-07-23
**Primärquelle für:** das Datenmodell, nach dem jedes künftige Knowledge Object in `17_GROWTH_KNOWLEDGE_BASE/` strukturiert wird.
**Nicht Primärquelle für:** die Inhalte selbst — ein Knowledge Object referenziert bestehende Primärquellen (`03_OFFER`, `04_AUDIENCE`, `05_WEBSITE_SEO`, `01_BRAND`, `02_COMPANY`, `11_OPERATIONS`), es dupliziert sie nicht.
**Status dieses Dokuments:** Datenmodell freigegeben. **Es wurden noch keine Knowledge Objects nach diesem Schema angelegt** — das ist ein separater, noch nicht beauftragter Schritt.

## Grundidee

Ein Knowledge Object ist ein strukturierter Index-Eintrag, der bestehende Primärquellen zu einer für Menschen und Agents nutzbaren Einheit zusammenführt. Es speichert selbst möglichst wenig Text — es referenziert die jeweilige Primärquelle und trägt nur das, was nirgends sonst schon existiert (Status, Zuordnung, Freigabestufe, emotionale Einordnung).

## Pflichtfelder

| Feld | Pflicht | Typ | Bedeutung | Primärquelle / erlaubte Werte |
|---|---|---|---|---|
| `id` | ✅ | String | stabiler, sprechender Schlüssel (`KO-005-wertminderung`) | frei vergeben, einmalig |
| `titel` | ✅ | String | Klartext-Themenname | frei formuliert |
| `status` | ✅ | Enum | Reifegrad des Objekts selbst | `ENTWURF` / `REVIEW` / `FREIGEGEBEN` / `IN_VERWENDUNG` / `AKTUALISIERUNG_ERFORDERLICH` / `VERALTET` |
| `verantwortlich` | ✅ | Referenz | welches Team pflegt/gibt fachlich frei | `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/**` |
| `freigabestufe` | ✅ | Enum | Autonomiestufe für jede Veröffentlichung aus diesem Objekt | GRÜN/GELB/ROT — referenziert `12_AI_SYSTEM/03_github-autonomy.md` |
| `quelle` | ✅ | Referenzliste | woher jede Sachaussage im Objekt stammt und ob sie bestätigt ist | siehe Abschnitt „Feld `quelle`" |
| `zielgruppe` | ✅ | Referenz | wen dieses Thema anspricht | `04_AUDIENCE/01_target-groups.md` |
| `kundenproblem` | ✅ | Referenz | zugrundeliegendes Problem (nicht die Formulierung des Einwands) | `04_AUDIENCE/02_problems-and-objections.md`, Abschnitt „Probleme" |
| `erlaubte_claims` | ✅ (auch wenn leer) | Referenzliste | welche Aussagen in Outputs verwendet werden dürfen | `01_BRAND/04_claims.md` ∩ `11_OPERATIONS/02_proof-register.md` (`Status: freigegeben`) |
| `rechtliche_grenzen` | ✅ | Referenz | was GH sagen darf/nicht darf | `02_COMPANY/03_legal-boundaries.md` |
| `content_ausgaben` | ✅ | Liste | geplante/erlaubte Formate + Einzelstatus | siehe Abschnitt „`content_ausgaben`" |
| `zuletzt_geprueft` | ✅ | Datum | wann zuletzt fachlich bestätigt | ISO-Datum |

## Optionale Felder (Pflicht, sobald für den jeweiligen Zweck genutzt)

| Feld | Bedeutung | Primärquelle / Hinweis |
|---|---|---|
| `suchintention` | passender Suchbegriff — Pflicht, sobald ein SEO-relevanter Output entsteht | `04_AUDIENCE/03_search-intents.md` |
| `einwaende` | konkrete Einwandformulierungen (Oberfläche des Problems) — Pflicht, sobald ein Conversion-/FAQ-Output entsteht | `04_AUDIENCE/02_problems-and-objections.md`, Abschnitt „Einwände" |
| `emotion` | emotionale Ausgangslage — Pflicht, sobald ein Conversion- oder Social-Output entsteht | kein bestehende Primärquelle — kurzes Label (z. B. „Angst vor finanziellem Nachteil", „Frust über Kürzung", „Unsicherheit über nächsten Schritt"); Umgang damit richtet sich nach `01_BRAND/02_tone-of-voice.md`, der Inhalt des Labels selbst ist neu je Objekt |
| `faq` | zugehörige FAQ-Einträge | `17_GROWTH_KNOWLEDGE_BASE/03_FAQ_LIBRARY/01_faq-library.md` |
| `interne_verlinkung` | Ziel-URL + Verlinkungsregel — Pflicht, sobald Landingpage/Blog geplant ist | `05_WEBSITE_SEO/02_url-map.md`, `17_GROWTH_KNOWLEDGE_BASE/04_INTERNAL_LINKING/01_internal-linking-rules.md` |
| `prioritaet` | Einordnung in Priorisierung | `13_REPORTS/06_information-architecture.md` Abschnitt C/G, 20-Objekte-Priorisierung |
| `verwandte_objekte` | thematisch verwandte Knowledge-Object-IDs | intern |
| `agent_hinweise` | reserviertes Feld für künftige Automatisierungs-Agenten — **nicht operationalisieren** | siehe Abschnitt „Feld `agent_hinweise`" |

## Feld `quelle`

Ein Objekt-Level-Register, getrennt von den einzelnen Referenzfeldern, damit in einem Blick erkennbar ist, ob das gesamte Objekt auf bestätigten Quellen beruht:

```
quelle:
  - feld: zielgruppe
    primärquelle: 04_AUDIENCE/01_target-groups.md
    bestätigt_durch: [Rolle/Name]
    bestätigt_am: [Datum]
    status: bestätigt | unbestätigt
  - feld: kundenproblem
    primärquelle: 04_AUDIENCE/02_problems-and-objections.md
    ...
```

Ein Objekt darf nur dann `status: FREIGEGEBEN` erhalten, wenn jede Zeile in `quelle` `status: bestätigt` trägt. Fehlt eine Bestätigung, bleibt das Objekt `REVIEW` — analog zur bestehenden Regel in `17_GROWTH_KNOWLEDGE_BASE/02_INSURANCE_KNOWLEDGE/01_insurance-knowledge.md` (keine unbestätigten Fachaussagen).

## Abgrenzung `kundenproblem` vs. `einwaende`

`04_AUDIENCE/02_problems-and-objections.md` enthält bereits zwei getrennte Abschnitte, die im ursprünglichen Entwurf dieses Schemas zu einem Feld zusammengefasst waren:

- **`kundenproblem`** referenziert den Abschnitt „Probleme" — die zugrundeliegende Situation (z. B. „Kürzung durch Versicherung").
- **`einwaende`** referenziert den Abschnitt „Einwände" — die konkrete, oft gestellte Frage (z. B. „Kann ich der Versicherung vertrauen?").

Beide Felder referenzieren dieselbe Datei, aber unterschiedliche Abschnitte — kein neues Duplikat, nur eine präzisere Zuordnung zur bestehenden Struktur der Datei.

## Feld `agent_hinweise` (reserviert, nicht operationalisiert)

Vorgesehen für künftige, spezifisch an Automatisierungs-Agenten (nicht an menschliche Bearbeiter) gerichtete Hinweise — z. B. Generierungs-Einschränkungen oder bevorzugte Formulierungsmuster, die über `03_AGENTS/01_agent-interface-principles.md` (`16_CONTENT_PRODUCTION_SYSTEM`) hinausgehen. **In diesem Schritt ausdrücklich nicht befüllt oder operationalisiert** — das Feld existiert im Datenmodell als vorbereitete Zukunftsreferenz, bleibt aber bis zu einem separaten Auftrag leer/unbenutzt.

## `content_ausgaben` — vollständige Format-Liste

| Format | Primärquelle für den Kanal | Hinweis |
|---|---|---|
| Landingpage | `05_WEBSITE_SEO/02_url-map.md` | — |
| Blog/Ratgeber | `05_WEBSITE_SEO/02_url-map.md` | — |
| Reel | `07_META/02_content-formats.md` | — |
| Karussell | `07_META/02_content-formats.md` | — |
| FAQ | `17_GROWTH_KNOWLEDGE_BASE/03_FAQ_LIBRARY/01_faq-library.md` | — |
| Ads | `06_GOOGLE/03_google-ads.md` | — |
| Google Business Post | `06_GOOGLE/02_google-business-profile.md` | — |
| Newsletter | — | **keine Kanal-Primärquelle vorhanden** — Newsletter ist aktuell kein dokumentierter Kanal in `07_META`/`06_GOOGLE`; ein Output-Eintrag bleibt `geplant`, bis eine Newsletter-Strategie entschieden ist |
| YouTube Short | — | **keine Kanal-Primärquelle vorhanden** — kein YouTube-Strategiedokument existiert; analoge Einschränkung wie Newsletter |
| TikTok | — | **keine Kanal-Primärquelle vorhanden** — `07_META` deckt ausschließlich Meta/Instagram ab; analoge Einschränkung |
| WhatsApp Antwortvorlage | `05_WEBSITE_SEO/03_conversion-system.md` (CTA-Priorität), künftig `Marketing Assets Library` (Masterplan Phase 7) | Vorlagen-Bibliothek selbst existiert noch nicht — Einzelverwendung schon (WhatsApp als CTA-Kanal 1) |

Für Formate ohne bestehende Kanal-Primärquelle (Newsletter, YouTube Short, TikTok) gilt: ein `content_ausgaben`-Eintrag darf angelegt werden, aber nicht über `status: geplant` hinausgehen, bis eine eigene Kanalstrategie entschieden und dokumentiert ist. Das Schema erzwingt hier keine neue Strategie — es macht nur die fehlende Grundlage sichtbar.

## Status — vollständige Enum-Definition

| Status | Bedeutung | Darf Content erzeugen? |
|---|---|---|
| `ENTWURF` | Struktur angelegt, Kernfelder teilweise leer | Nein |
| `REVIEW` | Inhalt/Zuordnung vorhanden, mindestens eine `quelle`-Zeile unbestätigt | Nein |
| `FREIGEGEBEN` | Alle `quelle`-Zeilen bestätigt | Ja |
| `IN_VERWENDUNG` | Mindestens ein `content_ausgaben`-Eintrag live | Ja, weitere Formate möglich |
| `AKTUALISIERUNG_ERFORDERLICH` | War `FREIGEGEBEN`/`IN_VERWENDUNG`, aber eine referenzierte Primärquelle hat sich geändert (z. B. Claim zurückgezogen, Rechtsgrenze geändert) | Nein für neue Outputs — bestehende, bereits live geschaltete Outputs bleiben unverändert bestehen, werden aber zur Prüfung markiert |
| `VERALTET` | Durch anderes Objekt ersetzt oder nicht mehr zutreffend | Nein — bestehende Outputs bleiben, keine neuen |

**Regel für `AKTUALISIERUNG_ERFORDERLICH`:** Dieser Status entsteht nie automatisch durch dieses Schema selbst — er wird gesetzt, wenn eine der referenzierten Primärquellen (`erlaubte_claims`, `rechtliche_grenzen`, `zielgruppe` usw.) sich ändert. Wer die Primärquelle ändert (z. B. Brand Manager bei `01_BRAND/04_claims.md`), ist dafür verantwortlich, betroffene Knowledge Objects auf diesen Status zu setzen — konsistent mit dem bestehenden Prinzip „eine Primärquelle je Information": die Änderung passiert nur an der Primärquelle, das Knowledge Object reagiert nur im Status, nicht im Inhalt.

## Struktur (aktualisierte Gruppierung)

```
Knowledge Object
├── Kopfdaten                id, titel, status, zuletzt_geprueft, quelle
├── Verantwortung            verantwortlich, freigabestufe
├── Zielgruppe & Intention    zielgruppe, kundenproblem, einwaende, suchintention, emotion
├── Freigabe & Recht          erlaubte_claims, rechtliche_grenzen
├── Wissen                    faq, verwandte_objekte
├── Aktivierung                content_ausgaben, interne_verlinkung, prioritaet
└── Reserviert                agent_hinweise (nicht operationalisiert)
```

## Beispielhafte Instanziierung (nur zur Illustration — keine neuen Inhalte)

```
id: KO-005-wertminderung
titel: Wertminderung
status: REVIEW
verantwortlich: Content Team (Pflege), Brand Manager (Claim-Freigabe)
freigabestufe: GELB
quelle:
  - feld: zielgruppe → 04_AUDIENCE/01_target-groups.md — status: bestätigt
  - feld: kundenproblem → 04_AUDIENCE/02_problems-and-objections.md, "Probleme" — status: bestätigt
  - feld: suchintention → 04_AUDIENCE/03_search-intents.md, "Schadenpositionen" — status: bestätigt
  - feld: erlaubte_claims → 01_BRAND/04_claims.md ∩ 11_OPERATIONS/02_proof-register.md — status: bestätigt
zielgruppe: → 04_AUDIENCE/01_target-groups.md, "Primär"
kundenproblem: → 04_AUDIENCE/02_problems-and-objections.md, "Probleme": "Wertminderung"
einwaende: → 04_AUDIENCE/02_problems-and-objections.md, "Einwände" (kein direkter Eintrag — Prüfbedarf)
emotion: "Sorge, nach der Reparatur finanziell benachteiligt zu bleiben, ohne es zu merken"
erlaubte_claims: → 01_BRAND/04_claims.md ∩ 11_OPERATIONS/02_proof-register.md
rechtliche_grenzen: → 02_COMPANY/03_legal-boundaries.md ("Werte und Schadenpositionen beziffern" = GH-Aufgabe)
faq: → 17_GROWTH_KNOWLEDGE_BASE/03_FAQ_LIBRARY/01_faq-library.md (noch kein Eintrag — Lücke)
content_ausgaben:
  - Landingpage: geplant → /ratgeber/wertminderung
  - Blog: geplant
  - FAQ: geplant
  - Ads: geplant
  - Google Business Post: geplant
interne_verlinkung: → 17_GROWTH_KNOWLEDGE_BASE/04_INTERNAL_LINKING/01_internal-linking-rules.md
prioritaet: Rang 5 (20-Objekte-Priorisierung)
verwandte_objekte: [KO-006-nutzungsausfall, KO-011-totalschaden]
agent_hinweise: (leer — reserviert)
zuletzt_geprueft: 2026-07-23
```

## Nutzung je Team/Agent

| Nutzer | Liest primär | Schreibt/pflegt primär |
|---|---|---|
| SEO Team | `suchintention`, `interne_verlinkung`, `prioritaet` | `suchintention`-Zuordnung |
| Content Team | alle Felder | `status`, `content_ausgaben` |
| Social Media Team | `kundenproblem`, `emotion`, `zielgruppe`, `erlaubte_claims` | `content_ausgaben` (Reel/Karussell/YouTube Short/TikTok-Zeilen) |
| Google Ads Team | `suchintention`, `erlaubte_claims`, `interne_verlinkung` | `content_ausgaben` (Ads-Zeile) |
| Conversion Team | `kundenproblem`, `einwaende`, `emotion`, `faq`, `erlaubte_claims` | `faq`-Zuordnung, `content_ausgaben` (WhatsApp-Antwortvorlage) |
| AI Agents (künftig, `16_CONTENT_PRODUCTION_SYSTEM`) | vollständiges Objekt als Input-Vertrag, `agent_hinweise` sobald operationalisiert | keine Freigabefelder — nur `content_ausgaben`-Entwürfe |

## Verwandte Dateien

- `17_GROWTH_KNOWLEDGE_BASE/00_growth-knowledge-base-overview.md`
- `17_GROWTH_KNOWLEDGE_BASE/01_THEMEN_REGISTER/01_topic-register.md`, `02_INSURANCE_KNOWLEDGE/01_insurance-knowledge.md`, `03_FAQ_LIBRARY/01_faq-library.md`, `04_INTERNAL_LINKING/01_internal-linking-rules.md`
- `16_CONTENT_PRODUCTION_SYSTEM/03_AGENTS/01_agent-interface-principles.md`
- `04_AUDIENCE/01–03`, `01_BRAND/02_tone-of-voice.md`, `04_claims.md`, `02_COMPANY/03_legal-boundaries.md`, `11_OPERATIONS/02_proof-register.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
