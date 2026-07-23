# Input-Spezifikation (konzeptionell)

Stand: 2026-07-23
**Primärquelle für:** welche Angaben Rohmaterial (Foto/Video) begleiten muss, damit es später — automatisiert oder manuell — zu Content verarbeitet werden kann.
**Nicht Primärquelle für:** wo Rohmaterial physisch liegt (`14_ASSETS/REFERENCES/google-drive-structure.md`), welche Bildsprache gilt (`01_BRAND/03_design-system.md`, `01_BRAND/05_design-system-channels.md`), welche Qualitätskriterien Content erfüllen muss (`09_CONTENT_ENGINE/02_content-quality.md`).
**Wichtig:** Diese Datei beschreibt eine **Struktur**, keine echten Werte. Es werden hier zu keinem Zeitpunkt tatsächliche Kundendaten, Kennzeichen, Fahrzeugpapiere oder Schadenakten abgelegt — das bleibt ausnahmslos in Google Drive (`CLAUDE.md`, Abschnitt „Sicherheit").

## Zweck

Jedes künftige Automatisierungssystem — unabhängig vom konkreten Werkzeug — braucht dieselben Grundangaben zu einem Rohmaterial-Stück, um es einzuordnen. Diese Angaben jetzt zu definieren erspart, sie bei Phase 9 neu zu erfinden.

## Begleitangaben je Rohmaterial-Einheit (konzeptionell)

| Angabe | Zweck |
|---|---|
| Kategorie | z. B. Vorher-/Nachher-Aufnahme, Standort-/Büro-Aufnahme, Prozess-Aufnahme — steuert, welcher Content-Typ daraus entstehen darf |
| Kanal-Eignung | für welche Kanäle das Material grundsätzlich geeignet ist (Website, Social, GBP) — referenziert `01_BRAND/05_design-system-channels.md` |
| Rechte-/Freigabestatus | ob das Motiv veröffentlichungsfähig ist (z. B. keine erkennbaren Kennzeichen, keine erkennbaren Personen ohne Einwilligung) — Voraussetzung, nicht Nachweis; der Nachweis selbst bleibt in Drive/`11_OPERATIONS/02_proof-register.md`, nicht in dieser Struktur |
| Bezug zu Fallbeispielen | falls ein Motiv sich auf einen Fall bezieht: ausschließlich als anonymisierter Verweis, niemals als echte Fallakte (vgl. `apps/website/src/data/homepage.ts`, `damageExamples` — bestehendes Muster für anonymisierte Beispiele) |
| Entstehungsdatum | für Aktualitäts-/Verfallsprüfung (z. B. saisonale Motive) |
| Zustand | Rohmaterial / in Bearbeitung / freigegeben / veröffentlicht / archiviert — siehe Asset-Zustandsmodell in `14_ASSETS/REFERENCES/google-drive-structure.md` |

## Was diese Spezifikation bewusst nicht festlegt

- Kein Datei-/Ordner-Benennungsschema (technische Umsetzung, Phase 9)
- Keine API oder Metadaten-Schnittstelle (technische Umsetzung, Phase 9)
- Keine Aussage, welches Tool Metadaten erfasst (kann manuell oder automatisiert erfolgen)

## Verwandte Dateien

- `14_ASSETS/REFERENCES/google-drive-structure.md` (Ablageort, Asset-Zustandsmodell)
- `01_BRAND/03_design-system.md`, `01_BRAND/05_design-system-channels.md` (Bildsprache-Regeln)
- `09_CONTENT_ENGINE/02_content-quality.md` (Qualitätskriterien für daraus entstehenden Content)
- `11_OPERATIONS/02_proof-register.md` (Nachweis-/Claim-Register)
- `16_CONTENT_PRODUCTION_SYSTEM/04_WORKFLOWS/01_pipeline-stages.md` (wie dieser Input in die Pipeline eintritt)
