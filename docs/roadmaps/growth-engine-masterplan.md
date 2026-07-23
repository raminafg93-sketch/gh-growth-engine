# Growth-Engine-Masterplan — Phasen 2–9

Stand: 2026-07-22
Status: **Freigegeben.** Phase 1 abgeschlossen, Phase 2 in Bearbeitung.

Primärdatei für die großen Ausbaustufen von KFZ-GutachtenHelden nach Abschluss des KI-Wachstumsteam-Aufbaus (`15_GROWTH_TEAM/`). Diese Datei hält fest, **welche Phase als Nächstes kommt und warum** — nicht die fachlichen Inhalte selbst, die in den jeweiligen Primärdateien je Phase entstehen.

## Grundprinzip (bestätigt für das gesamte Repository)

Jede fachliche Information besitzt genau eine Primärquelle. Andere Bereiche referenzieren diese Information ausschließlich, anstatt sie zu duplizieren — Fortführung von `00_GH_DOCUMENT_MAP.md`, Grundregel, auf sämtliche in diesem Masterplan entstehenden Assets/Systeme.

## Phase 1 — AI Operating System (abgeschlossen)

Growth-Team-Struktur (`15_GROWTH_TEAM/`): Level 1 (Growth Director, Brand Manager, Operations Manager), Level 2 (8 Fachteams), Verantwortlichkeits-Matrix, Handoff-Prinzipien und -Template. Abgeschlossen und freigegeben.

## Phase 2 — Design System (kanalübergreifend)

**Ziel:** Das bestehende, website-code-gebundene Design-System (`01_BRAND/03_design-system.md`, `docs/architecture/design-system.md`) um kanalspezifische Anwendungsregeln erweitern — Social Media, Google Ads, Google Business Profile, Print — ohne die Markenwerte selbst zu duplizieren.

**Warum jetzt wichtig:** Mehrere Fachteams (Social Media, Google Ads, Local SEO) sollen jetzt produzieren, ohne für jeden Kanal eigene Stilregeln zu erfinden.

**Beteiligte Teams:** Brand Manager (Owner), Social Media Team, Google Ads Team, Local SEO Team, Framer/Web Team (bestehende Website-Übersetzung bleibt unverändert Referenz).

**Abschlusskriterium:** Jedes visuell produzierende Team hat eine referenzierbare Quelle für Farbe/Schrift/Bildsprache-Regeln seines Kanals.

**Status:** In Bearbeitung (dieser PR).

## Phase 3 — Growth Knowledge Base

**Ziel:** Konsolidierte, teamübergreifende Wissensbasis — Suchintentionen, Zielgruppen, Versicherungswissen, Einwände, FAQ-Bibliothek, interne Verlinkungsregeln — statt auf mehrere Ordner verstreut.

**Warum jetzt wichtig:** SEO Team, Content Team, Conversion Team, Google Ads Team und Social Media Team brauchen dieselben Grundfakten; bisher verstreut über `04_AUDIENCE/**`, `05_WEBSITE_SEO/**`, `13_REPORTS/06_information-architecture.md`.

**Beteiligte Teams:** SEO Team (Owner für Struktur), Content Team, Conversion Team, Local SEO Team, Google Ads Team, Social Media Team, Brand Manager (Konsistenzprüfung).

**Abschlusskriterium:** Jedes Team bezieht seine fachliche Grundlage aus einer einzigen konsolidierten Quelle.

**Status:** Geplant.

## Phase 4 — Conversion System v2

**Ziel:** Aus Einzelfall-Optimierung eine wiederverwendbare Bibliothek machen: CTA-Patterns, Trust-Element-Bibliothek, Einwandbehandlungs-Baukasten, Microcopy-Sammlung.

**Warum jetzt wichtig:** Mit der Growth Knowledge Base entstehen viele neue Seiten parallel — jede muss von Anfang an konvertieren.

**Beteiligte Teams:** Conversion Team (Owner), Content Team, Framer/Web Team, Google Ads Team, Brand Manager.

**Abschlusskriterium:** Ein dokumentierter Baukasten existiert, den jedes Team ohne eigene Conversion-Analyse pro Asset anwenden kann.

**Status:** Geplant.

## Phase 5 — Performance & Analytics System

**Ziel:** Zentrale KPIs, Datenquellen, Verantwortliche je Kennzahl, Aktualisierungsintervall und Vorgehen bei Zielabweichungen definieren. Das System soll nicht nur messen, sondern Priorisierungsentscheidungen aktiv unterstützen.

**Warum jetzt wichtig:** Fast jede bereits definierte KPI in den Level-1-/Level-2-Rollen steht aktuell mit „sobald messbar" da. Vor drei weiteren Produktionsphasen sollte feststehen, woran Erfolg gemessen wird.

**Beteiligte Teams:** Growth Director (Owner, Priorisierungsregeln), Operations Manager (Dashboard-/Prozessqualität), SEO Team, Local SEO Team, Conversion Team, Google Ads Team, QA Team (Datenqualität).

**Abschlusskriterium:** Jede in den Rollen benannte KPI hat eine definierte Messmethode, Datenquelle, einen verantwortlichen Owner, ein Aktualisierungsintervall und ein festgelegtes Vorgehen bei Zielabweichung.

**Status:** Geplant.

## Phase 6 — Canva System

**Ziel:** Produktionsfähige Vorlagen für Social-Posts, GBP-Bilder, Anzeigen-Creatives, Artikel-Header — abgeleitet aus Phase 2.

**Beteiligte Teams:** Brand Manager (Owner), Social Media Team, Local SEO Team, Content Team.

**Abschlusskriterium:** Für jeden Standard-Content-Typ existiert eine nutzbare Vorlage.

**Status:** Geplant.

## Phase 7 — Marketing Assets Library

**Ziel:** Kuratierte Bibliothek wiederverwendbarer, freigegebener Assets — Fallbeispiele, Trust-Snippets, Kernbotschaften je Kanal, einsatzfertige Claims.

**Beteiligte Teams:** Brand Manager (Owner), Content Team, Social Media Team, Google Ads Team, Local SEO Team.

**Abschlusskriterium:** Jedes benötigte Asset-Format hat mindestens einen einsatzfertigen Bibliothekseintrag.

**Status:** Geplant.

## Phase 8 — Prompt Library

**Ziel:** Für jeden Schritt der Standard-Workflows eine getestete, wiederverwendbare Prompt-Vorlage — bewusst erst, nachdem Wissen (Phase 3), Conversion (Phase 4) und Assets (Phase 6/7) stehen.

**Beteiligte Teams:** Operations Manager (Owner), alle Level-2-Teams, Growth Director (Priorisierung).

**Abschlusskriterium:** Für jeden Schritt jedes freigegebenen Standard-Workflows existiert mindestens eine getestete Prompt-Vorlage.

**Status:** Geplant.

## Phase 9 — Automatisierungen

**Ziel:** Wiederkehrende, aktuell manuelle Abläufe automatisieren — bewusst letzte Phase, da Automatisierung eines noch nicht stabilen Prozesses nur Chaos schneller automatisiert (`00_GH_PRINCIPLES.md`: „Erst verstehen, dann automatisieren").

**Beteiligte Teams:** Operations Manager (Owner), Framer/Web Team, QA Team, alle Teams als Nutznießer.

**Abschlusskriterium:** Die identifizierten Kernwiederholungen laufen ohne manuellen Eingriff je Einzelfall.

**Fundament bereits vorhanden:** Seit 2026-07-23 dokumentiert `16_CONTENT_PRODUCTION_SYSTEM/` die werkzeugunabhängige Architektur- und Schnittstellen-Grundlage für ein künftiges, kanalübergreifendes Content-Production-System (Input-Struktur, Asset-Zustandsmodell, Agenten-Schnittstellen-Prinzip, Pipeline-Stufenmodell, Freigabe-Grundsatz). **Klare Abgrenzung:** Dieses Fundament ist reine Architektur/Dokumentation — keine Automation-Implementierung, keine APIs, keine Tools, keine Automatisierungsplattform, kein tatsächliches Publizieren. Die technische Umsetzung selbst (Werkzeuge, konkrete Agenten-Konfigurationen, Integrationen, tatsächliche Ausführung) bleibt vollständig Teil dieser Phase 9 und beginnt erst, wenn diese Phase explizit beauftragt wird.

**Status:** Geplant. Architektur-Fundament (`16_CONTENT_PRODUCTION_SYSTEM/`) vorbereitet.

## Bewusst ausgeklammert

- Die offene Plattformentscheidung (Astro vs. Framer, `docs/architecture/website-platform-decision.md`) ist keine eigene Phase, sondern Querschnitts-Abhängigkeit für Phase 4 und 6.
- Google-Ads-/Meta-Skalierung selbst folgt erst nach Phase 2–8, entsprechend `00_GH_MASTER_CONTEXT.md`: „Fundament vor Ausbau vor Skalierung".

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `docs/roadmaps/growth-priority-roadmap.md`, `phase-1-execution-plan.md`, `conversion-backlog.md` (frühere, kleinteiligere Roadmaps — bleiben gültig, dieser Masterplan ordnet sie in den größeren Phasenrahmen ein)
- `01_BRAND/05_design-system-channels.md` (Phase 2)
- `16_CONTENT_PRODUCTION_SYSTEM/` (Architektur-Fundament für Phase 9)
