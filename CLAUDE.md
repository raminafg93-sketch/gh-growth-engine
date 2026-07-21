# Gutachten Helden – Claude Arbeitsanweisung

## Startreihenfolge

Vor jeder größeren Aufgabe lesen:

1. `00_GH_MASTER_CONTEXT.md`
2. `00_GH_DOCUMENT_MAP.md`
3. `00_GH_PRINCIPLES.md`
4. die fachlich betroffenen Dateien
5. `11_OPERATIONS/01_decision-log.md`

## Oberziel

Mehr qualifizierte Unfallkunden über Google, Meta, Website und langfristig Coaching / Academy.

## Arbeitsweise

- nicht allgemein beraten
- konkrete Maßnahmen liefern
- vorhandenen Bestand zuerst prüfen
- immer Primärdatei und betroffene Folge-Dateien nennen
- Änderungen niemals nur an einer einzelnen sichtbaren Stelle vornehmen
- Texte fertig formulieren
- exakt sagen, wo sie eingefügt werden
- Risiken und Abhängigkeiten nennen
- nichts veröffentlichen ohne Freigabe

## Verbindliches Änderungsformat

Bei Änderungswünschen immer:

1. Primärdatei
2. Abschnitt
3. weitere betroffene Dateien
4. Alttext
5. Neutext
6. Auswirkungen
7. Prüfung

## Conversion-Priorität

1. WhatsApp
2. Anruf
3. E-Mail
4. Kontaktformular

## Sprache

- Du statt Sie
- aktiv
- direkt
- kurz
- verständlich
- technisch sauber
- keine KI-Floskeln

## Sicherheit

Nicht in GitHub speichern:

- Kundendaten
- Kennzeichen
- Fahrzeugpapiere
- Schadenakten
- Zugangsdaten
- vertrauliche Arbeitgeberunterlagen
- private personenbezogene Daten

## Freigaben

Claude darf analysieren, planen, Entwürfe und Dateien vorbereiten.

Claude darf ohne ausdrückliche Freigabe nicht:

- live veröffentlichen
- produktive Seiten löschen
- Budgets ändern
- Nachrichten versenden
- Domains oder DNS verändern

Die verbindlichen Autonomiestufen für repository-interne GitHub-Arbeit (Branches,
Commits, Pull Requests, Merges) sind in `12_AI_SYSTEM/03_github-autonomy.md`
festgelegt:

- **GRÜN** – Claude darf repository-interne Änderungen (Dateien, Reports,
  Roadmap, Skills, Audits) eigenständig committen, pushen, per Pull Request
  einreichen und selbst mergen.
- **GELB** – bei produktivem Website-Code, Tracking/Consent, Redirects,
  Rechtstexten oder neuen Kosten-/Erfolgsversprechen erstellt Claude nur den
  Pull Request; Ramin entscheidet über den Merge.
- **ROT** – Live-Veröffentlichung, DNS/Domains, Ads-Budgets, externe
  Nachrichten und Zugangsdaten bleiben immer bei Ramin.

Details, Voraussetzungen und die Unterbrechungsregel: siehe
`12_AI_SYSTEM/03_github-autonomy.md`.

## Monorepo-Regeln

Seit dem Monorepo-Fundament (`docs/architecture/decisions/0001-monorepo-statt-zweitem-repository.md`) enthält dieses Repository zusätzlich zur Wissensbasis den Website-Code unter `apps/website/`. Diese Regeln gelten zusätzlich zu allen bisherigen Regeln dieser Datei.

### A. Aufgabenbereich erkennen

Vor jeder Änderung bestimmt Claude zuerst den Aufgabenbereich:

- **KNOWLEDGE ONLY** — betrifft nur die nummerierten Wissensordner, `00_GH_*`, `11_OPERATIONS`, `12_AI_SYSTEM`, `13_REPORTS`
- **WEBSITE ONLY** — betrifft nur `apps/website/**`
- **CROSS-DOMAIN** — betrifft Website-Code und Wissensbasis gemeinsam
- **REPORT ONLY** — erzeugt nur Reports/Audits, keine produktiven Änderungen
- **INFRASTRUCTURE** — betrifft Root-Konfiguration (`package.json`, `pnpm-workspace.yaml`, `.gitignore`, `.npmrc`, `.nvmrc`) oder `.github/workflows/**`

### B. Änderungsgrenzen

**KNOWLEDGE ONLY:**
- verändert keine Dateien unter `apps/website/**`
- löst keinen Website-Build aus, sofern technisch vermeidbar (Pfadfilter in der CI)

**WEBSITE ONLY:**
- verändert primär `apps/website/**`
- ändert Wissensdokumente nur bei einer echten, im PR benannten Inkonsistenz
- kennzeichnet live-wirksame Änderungen klar im Pull Request (sobald ein Deployment existiert)

**CROSS-DOMAIN:**
- darf Website-Code und Wissensbasis gemeinsam aktualisieren
- muss die Notwendigkeit dafür im Pull Request explizit erklären

**REPORT ONLY:**
- erzeugt keine produktiven Änderungen an `apps/website/**`

**INFRASTRUCTURE:**
- darf Root-Konfigurationen und GitHub-Workflows ändern
- wird besonders sorgfältig geprüft (Build/CI vor dem Commit lokal testen)

### C. Pull-Request-Struktur

Jeder Pull Request, der Website-Code oder Infrastruktur betrifft, unterscheidet:

- **LIVE-WIRKSAM** — Dateien/Änderungen, die eine spätere, deployte Website beeinflussen (`apps/website/src/**`, `astro.config.mjs`, `apps/website/public/**`)
- **NICHT LIVE-WIRKSAM** — Dokumentation, Reports, Strategie, interne Prozesse, `docs/**`
- **RISIKEN** — SEO, Deployment, URL, Tracking, Formulare, Datenschutz (auch wenn aktuell keine betroffen sind: explizit "keine" vermerken)
- **TESTS** — welche Prüfungen ausgeführt wurden (`pnpm website:check`, `pnpm website:build`, CI-Status) und deren Ergebnis

### D. Schutzregeln

- keine direkte Domain-Änderung
- kein Löschen bestehender Framer-Inhalte
- keine erfundenen Unternehmensangaben (unbestätigte Werte in `site.ts` bleiben `status: "missing"`, nie ein Fake-Wert)
- keine Secrets im Repository
- keine unbestätigte Entfernung bestehender URLs
- keine automatische Veröffentlichung auf der Hauptdomain
- keine großflächige Content-Neuschreibung während einer technischen Migration

### E. Arbeitsprinzip

So wenig Dateien wie nötig. So viele Dateien wie fachlich erforderlich. Keine ungefragten Nebenprojekte. Keine unnötige Abstraktion. Keine Infrastruktur ohne geschäftlichen Nutzen.

### Verwandte Dateien

- `docs/architecture/monorepo-architecture.md` — Architekturbegründung
- `docs/workflows/claude-code-monorepo-workflow.md` — konkreter Ablauf für Website- und Wissensaufgaben
- `docs/workflows/owner-workflow.md` — verständliche Anleitung für Ramin
- `12_AI_SYSTEM/03_github-autonomy.md` — Autonomiestufen (unverändert führend bei Widerspruch)

## Dauerhafte Website-Bestandsregel

Bei **jeder** Änderung an einer bestehenden Seite — ob Homepage, künftige Leistungsseite oder Ratgeberartikel — gilt: **niemals blind neu schreiben.** Immer in dieser Reihenfolge:

1. **Bestand erfassen** — was existiert aktuell (Inhalt, Struktur, URL, Ranking-Signale), auch wenn ein direkter Seitenzugriff technisch nicht möglich ist (dann: verifizierbare Sekundärquellen nutzen und die Grenze offen dokumentieren, nicht raten).
2. **Suchintention verstehen** — welches Bedürfnis bedient diese Seite laut `04_AUDIENCE/03_search-intents.md` und verwandten Dateien.
3. **Conversion-Funktion verstehen** — welchen Schritt im Trichter aus `05_WEBSITE_SEO/03_conversion-system.md` übernimmt diese Seite.
4. **Kategorisieren** — jedes wesentliche Element in PRESERVE / OPTIMIZE NOW / EXPERIMENT LATER einordnen (siehe `docs/migration/homepage-optimization-matrix.md` als Referenzbeispiel).
5. **Sichere Optimierungen direkt umsetzen** — technische, semantische, mobile, Accessibility- und Performance-Verbesserungen ohne Aussage-/Strategieänderung.
6. **Riskante Änderungen dokumentieren, nicht sofort umsetzen** — neue Positionierung, große Textkürzungen, geänderte Suchintention landen in einem Optimierungs-/Migrationsdokument, nicht direkt im Code.
7. **Bestehende URLs und Rankings schützen** — keine Umbenennung, Zusammenlegung oder Entfernung ohne echten Seitenzugriff und ohne Freigabe.

Diese Regel gilt unverändert für künftige Landingpages und Ratgeberartikel, sobald bestehende Inhalte migriert werden. Referenzumsetzung: `docs/migration/current-homepage-inventory.md`, `docs/migration/homepage-optimization-matrix.md`, `docs/migration/homepage-parity-and-improvement-report.md`.
