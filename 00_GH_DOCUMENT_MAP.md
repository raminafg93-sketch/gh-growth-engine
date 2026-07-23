# GH DOCUMENT MAP

Diese Datei zeigt jeder KI exakt, **wo welche Information gepflegt wird**.

## Grundregel

Jede Information hat genau eine Primärdatei. Andere Dateien dürfen darauf verweisen, aber nicht widersprechen.

| Änderung | Primärdatei | zusätzlich prüfen |
|---|---|---|
| Dauerhafte Entscheidungsprinzipien | `00_GH_PRINCIPLES.md` | Master Context, CLAUDE.md, Decision Log |
| Firmenname, Adresse, Telefon, E-Mail | `02_COMPANY/01_company-facts.md` | Master Context, Google Business, Website-Footer, Impressum |
| Öffnungszeiten / Erreichbarkeit | `02_COMPANY/01_company-facts.md` | Master Context, Google Business, Website, Ads |
| Qualifikation / Zertifizierung | `02_COMPANY/02_trust-and-proof.md` | Claims, Website-Trust, GBP, Ads |
| Rechtliche Abgrenzung GH / Anwalt | `02_COMPANY/03_legal-boundaries.md` | Claims, Website-Rechtstexte, Google Ads |
| Claims | `01_BRAND/04_claims.md` | Master Context, Website, Google Ads, Meta |
| Farben / Schriften / Design | `01_BRAND/03_design-system.md` | Website-Komponenten, Social Templates, PDFs |
| Kanal-Anwendung des Design-Systems (Social/Ads/GBP/Print) | `01_BRAND/05_design-system-channels.md` | `01_BRAND/03_design-system.md`, `docs/architecture/design-system.md` |
| Growth-Engine-Masterplan (Phasen 2–9) | `docs/roadmaps/growth-engine-masterplan.md` | 15_GROWTH_TEAM, bisherige Einzel-Roadmaps |
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
| GitHub-Autonomieregeln | `12_AI_SYSTEM/03_github-autonomy.md` | CLAUDE.md, Decision Log |
| Projektstatus | `11_OPERATIONS/03_roadmap.md` | Master Context |
| Reports / Audits | `13_REPORTS/` | betroffene Strategie-Dateien |
| Google-Drive-Struktur | `14_ASSETS/REFERENCES/google-drive-structure.md` | Master Context Abschnitt 11, Proof-Register |
| Website-Audit-Skill | `.claude/skills/website-inventory/SKILL.md` | URL-Map, Reports |
| Monorepo-Architektur | `docs/architecture/monorepo-architecture.md` | ADRs, CLAUDE.md |
| Website-Architektur (`apps/website`) | `docs/architecture/website-architecture.md` | apps/website/README.md, Content-Flow |
| Content-Flow (Wissen → SEO → Website-Code) | `docs/architecture/content-flow.md` | 09_CONTENT_ENGINE, 05_WEBSITE_SEO |
| Asset-Strategie | `docs/architecture/asset-strategy.md` | 01_BRAND, 14_ASSETS |
| Design System v1 (`apps/website`) | `docs/architecture/design-system.md` | 01_BRAND/03_design-system.md, Komponentenbibliothek |
| Komponentenbibliothek (`apps/website`) | `docs/architecture/component-library.md` | Design System, Website-Architektur |
| Homepage-SEO-Spezifikation | `docs/architecture/homepage-seo-specification.md` | Website-Architektur, 05_WEBSITE_SEO |
| Architekturentscheidungen (ADRs) | `docs/architecture/decisions/` | Monorepo-Architektur, Website-Architektur |
| Repository-Bestandsaufnahme | `docs/architecture/current-repository-inventory.md` | (historisches Momentaufnahme-Dokument) |
| Vercel-Vorbereitung | `docs/deployment/vercel-preparation.md` | Website-Architektur, CI-Workflow |
| Framer-zu-Astro-Migrationsstrategie | `docs/migration/framer-to-astro-strategy.md` | 13_REPORTS, 05_WEBSITE_SEO/02_url-map.md |
| Homepage-Bestandsinventar (forensisch) | `docs/migration/current-homepage-inventory.md` | Optimierungs-Matrix, Parity-Report |
| Homepage-Optimierungs-Matrix | `docs/migration/homepage-optimization-matrix.md` | Homepage-Bestandsinventar |
| Homepage-Alt-Neu-Vergleich | `docs/migration/homepage-parity-and-improvement-report.md` | Homepage-Bestandsinventar, Optimierungs-Matrix |
| Claude-Monorepo-Workflow | `docs/workflows/claude-code-monorepo-workflow.md` | CLAUDE.md, GitHub-Autonomieregeln |
| Owner-Workflow | `docs/workflows/owner-workflow.md` | CLAUDE.md, GitHub-Autonomieregeln |
| Growth-Team-Struktur (Rollen, Ebenen, Übersicht) | `15_GROWTH_TEAM/00_growth-team-overview.md` | CLAUDE.md, 12_AI_SYSTEM, Master Context Abschnitt 11 |
| Growth-Team-Verantwortlichkeiten | `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md` | GitHub-Autonomieregeln, Growth-Team-Übersicht |
| Growth-Team-Übergabeprozess | `15_GROWTH_TEAM/04_HANDOFFS/00_handoff-principles.md` | GH Change Request Template, GitHub-Autonomieregeln |
| Content-Production-System — Architektur/Übersicht | `16_CONTENT_PRODUCTION_SYSTEM/00_content-production-system-overview.md` | 09_CONTENT_ENGINE, 15_GROWTH_TEAM, Masterplan Phase 9 |
| Content-Production-System — Input-Struktur | `16_CONTENT_PRODUCTION_SYSTEM/01_INPUT/01_input-specification.md` | Google-Drive-Struktur, Design System |
| Content-Production-System — Agenten-Schnittstellen | `16_CONTENT_PRODUCTION_SYSTEM/03_AGENTS/01_agent-interface-principles.md` | 15_GROWTH_TEAM, GitHub-Autonomieregeln |
| Content-Production-System — Pipeline-Stufen und Freigabe-Grundsatz | `16_CONTENT_PRODUCTION_SYSTEM/04_WORKFLOWS/01_pipeline-stages.md`, `02_approval-principle.md` | GitHub-Autonomieregeln, Handoff-Prinzipien |
| Asset-Zustandsmodell | `14_ASSETS/REFERENCES/google-drive-structure.md` | Content-Production-System |
| Growth-Knowledge-Base — Architektur/Übersicht | `17_GROWTH_KNOWLEDGE_BASE/00_growth-knowledge-base-overview.md` | 04_AUDIENCE, 05_WEBSITE_SEO, 03_OFFER, 09_CONTENT_ENGINE, Masterplan Phase 3 |
| Themen-Register (Suchintention ↔ Einwand ↔ URL) | `17_GROWTH_KNOWLEDGE_BASE/01_THEMEN_REGISTER/01_topic-register.md` | 04_AUDIENCE/02–03, 05_WEBSITE_SEO/02_url-map.md, 13_REPORTS/06 |
| Versicherungswissen (Struktur) | `17_GROWTH_KNOWLEDGE_BASE/02_INSURANCE_KNOWLEDGE/01_insurance-knowledge.md` | 02_COMPANY/03_legal-boundaries.md |
| FAQ-Bibliothek (Register) | `17_GROWTH_KNOWLEDGE_BASE/03_FAQ_LIBRARY/01_faq-library.md` | apps/website/src/data/homepage.ts, 04_AUDIENCE/02 |
| Interne Verlinkungsregeln (dauerhaft) | `17_GROWTH_KNOWLEDGE_BASE/04_INTERNAL_LINKING/01_internal-linking-rules.md` | 13_REPORTS/06_information-architecture.md |
| Knowledge-Object-Schema (Datenmodell) | `17_GROWTH_KNOWLEDGE_BASE/05_SCHEMA/01_knowledge-object-schema.md` | 04_AUDIENCE, 01_BRAND, 02_COMPANY, 11_OPERATIONS, 12_AI_SYSTEM, 16_CONTENT_PRODUCTION_SYSTEM |

## Pflichtantwort jeder KI bei Änderungen

Die KI muss immer ausgeben:

1. **Primärdatei**
2. **genauer Abschnitt**
3. **weitere betroffene Dateien**
4. **alter Text**
5. **neuer Text**
6. **Folgeänderungen**
7. **Prüfung nach Umsetzung**
