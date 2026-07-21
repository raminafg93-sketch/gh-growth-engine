# Content-Flow: Wissen → SEO → Website-Code

Stand: 2026-07-21

## 10. Wie werden Content, SEO und Website-Code synchron gehalten?

Reihenfolge, die für jede künftige Content-/Seiten-Änderung gilt (baut auf `00_GH_DOCUMENT_MAP.md` und `09_CONTENT_ENGINE/01_content-system.md` auf):

```
1. Wissensbasis (Primärdatei)         z. B. 03_OFFER/01_services.md, 04_AUDIENCE/03_search-intents.md
2. SEO-/URL-Entscheidung               05_WEBSITE_SEO/02_url-map.md (Status: KEEP/IMPROVE/MERGE/REDIRECT/NEW/REVIEW)
3. Content-Collection in apps/website  src/content/{services,guides,faq,...}/*.md
4. Seite/Komponente                    src/pages/**, src/components/sections/**
5. Report/Dokumentation der Änderung   13_REPORTS/ oder Decision Log
```

Kein Schritt wird übersprungen: Kein Website-Content ohne bestätigte Suchintention/Fakten aus der Wissensbasis, keine neue URL ohne Eintrag in `05_WEBSITE_SEO/02_url-map.md` (Regel aus `.claude/skills/website-inventory/SKILL.md`: "keine neue URL empfehlen, bevor Überschneidungen geprüft sind").

## Content-Collections in `apps/website/src/content/`

| Ordner       | Fachliche Quelle       | Primärdatei                                                                     |
| ------------ | ---------------------- | ------------------------------------------------------------------------------- |
| `services/`  | Leistungsseiten        | `03_OFFER/01_services.md`                                                       |
| `guides/`    | Ratgeber/Problemseiten | `04_AUDIENCE/02_problems-and-objections.md`, `04_AUDIENCE/03_search-intents.md` |
| `faq/`       | Häufige Fragen         | `04_AUDIENCE/02_problems-and-objections.md`                                     |
| `blog/`      | redaktioneller Content | `09_CONTENT_ENGINE/01_content-system.md`                                        |
| `locations/` | lokale Seiten          | `04_AUDIENCE/01_target-groups.md`, Servicegebiet in `site.ts`                   |
| `reviews/`   | Bewertungen/Trust      | `02_COMPANY/02_trust-and-proof.md`, `11_OPERATIONS/02_proof-register.md`        |

Alle Ordner sind aktuell leer (`.gitkeep`) — sie werden erst befüllt, wenn echte, geprüfte Inhalte vorliegen (Grundsatz: "kein KI-generierter Inhalt ohne geprüfte Faktenbasis", `00_GH_PRINCIPLES.md` Abschnitt 9).

## Wiederholung vermeiden

Unternehmensdaten (Telefon, Adresse, Öffnungszeiten, Claims) werden **nicht** in einzelnen Seiten oder Komponenten wiederholt, sondern ausschließlich aus `src/data/site.ts` bezogen, das wiederum ausschließlich aus `02_COMPANY/01_company-facts.md` gespeist wird. Ändert sich ein Fakt, ändert sich `company-facts.md` (Primärdatei laut `00_GH_DOCUMENT_MAP.md`) — und danach `site.ts`, nie umgekehrt.
