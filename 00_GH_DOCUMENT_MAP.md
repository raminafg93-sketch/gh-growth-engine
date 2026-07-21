# GH DOCUMENT MAP

Diese Datei zeigt jeder KI exakt, **wo welche Information gepflegt wird**.

## Grundregel

Jede Information hat genau eine Primärdatei. Andere Dateien dürfen darauf verweisen, aber nicht widersprechen.

| Änderung | Primärdatei | zusätzlich prüfen |
|---|---|---|
| Firmenname, Adresse, Telefon, E-Mail | `02_COMPANY/01_company-facts.md` | Master Context, Google Business, Website-Footer, Impressum |
| Öffnungszeiten / Erreichbarkeit | `02_COMPANY/01_company-facts.md` | Master Context, Google Business, Website, Ads |
| Qualifikation / Zertifizierung | `02_COMPANY/02_trust-and-proof.md` | Claims, Website-Trust, GBP, Ads |
| Rechtliche Abgrenzung GH / Anwalt | `02_COMPANY/03_legal-boundaries.md` | Claims, Website-Rechtstexte, Google Ads |
| Claims | `01_BRAND/04_claims.md` | Master Context, Website, Google Ads, Meta |
| Farben / Schriften / Design | `01_BRAND/03_design-system.md` | Website-Komponenten, Social Templates, PDFs |
| Tonalität | `01_BRAND/02_tone-of-voice.md` | alle Content-Dateien |
| Leistungen | `03_OFFER/01_services.md` | Website, Google Business, Ads, SEO |
| Kundenprozess | `03_OFFER/02_customer-process.md` | Website, Onboarding-Content, Conversion-System |
| Zielgruppen | `04_AUDIENCE/01_target-groups.md` | SEO, Meta, Ads, Content |
| Kundenprobleme | `04_AUDIENCE/02_problems-and-objections.md` | Landingpages, Reels, Ads |
| Suchintentionen | `04_AUDIENCE/03_search-intents.md` | URL-Map, Content-Briefs, Ads |
| Website-Strategie | `05_WEBSITE_SEO/01_website-strategy.md` | URL-Map, Conversion, Content |
| URLs und Seitenstatus | `05_WEBSITE_SEO/02_url-map.md` | Redirects, interne Links, Sitemap |
| Google SEO | `06_GOOGLE/01_google-seo.md` | Website, Content, Reports |
| Google Maps / GBP | `06_GOOGLE/02_google-business-profile.md` | NAP, Bewertungen, Posts |
| Google Ads | `06_GOOGLE/03_google-ads.md` | Landingpages, Claims, Tracking |
| Meta / Instagram | `07_META/01_meta-strategy.md` | Content Engine, Assets |
| Meta-Content-Formate | `07_META/02_content-formats.md` | Content Engine, Assets |
| Coaching / Academy | `08_COACHING_ACADEMY/01_strategy.md` | Prozesse, Recruiting, Content |
| Content-Produktion | `09_CONTENT_ENGINE/01_content-system.md` | Google, Meta, Website |
| Content-Qualitätskriterien | `09_CONTENT_ENGINE/02_content-quality.md` | Content-System, Reports |
| KPIs / Messung | `10_DATA_INSIGHTS/01_kpi-system.md` | Reports, Entscheidungen |
| Datenquellen | `10_DATA_INSIGHTS/02_data-sources.md` | KPI-System, Reports |
| Entscheidungen | `11_OPERATIONS/01_decision-log.md` | Master Context bei großen Änderungen |
| Claim-Nachweise | `11_OPERATIONS/02_proof-register.md` | Google Drive |
| AI-Arbeitsweise | `12_AI_SYSTEM/01_ai-operating-system.md` | CLAUDE.md, Skills, Agenten |
| Projektstatus | `11_OPERATIONS/03_roadmap.md` | Master Context |
| Reports / Audits | `13_REPORTS/` | betroffene Strategie-Dateien |
| Google-Drive-Struktur | `14_ASSETS/REFERENCES/google-drive-structure.md` | Master Context Abschnitt 11, Proof-Register |
| Website-Audit-Skill | `.claude/skills/website-inventory/SKILL.md` | URL-Map, Reports |

## Pflichtantwort jeder KI bei Änderungen

Die KI muss immer ausgeben:

1. **Primärdatei**
2. **genauer Abschnitt**
3. **weitere betroffene Dateien**
4. **alter Text**
5. **neuer Text**
6. **Folgeänderungen**
7. **Prüfung nach Umsetzung**
