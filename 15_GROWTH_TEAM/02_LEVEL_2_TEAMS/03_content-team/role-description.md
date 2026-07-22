# Rolle: Content Team

**Ebene:** Level 2 — Fachteam
**Status:** Ausgearbeitet (Stand 2026-07-22)

## Mission

Das Content Team schreibt die tatsächlichen Texte — Landingpages, Ratgeberartikel, GBP-Posts, Grundlage für Ad-/Social-Copy — auf Basis von Briefs anderer Teams. Es entscheidet **wie ein bereits definierter Inhalt in Worte gefasst wird** — nicht, welches Keyword/welche Struktur die Seite braucht (SEO Team) und nicht, ob der Ton/die Claims final passen (Brand Manager entscheidet das verbindlich).

## Verantwortungsbereich

- **Primärdateien/Ordner:** `09_CONTENT_ENGINE/**` (Input aus `04_AUDIENCE/**`)
- **Nicht zuständig für** (bewusste Abgrenzung):
  - Keyword-/Struktur-Vorgabe → SEO Team liefert das Brief
  - finale Freigabe von Tonalität/Claims → Brand Manager
  - CTA-/Trust-Layout → Conversion Team
  - technische Veröffentlichung → Framer/Web Team
- **Keine Level-1-Aufgabe:** erstellt keine neuen Claims ohne Brand-Manager-Freigabe, priorisiert nicht selbst, welches Thema zuerst geschrieben wird (Growth Director gibt die Reihenfolge über die Briefs vor).

## KPIs

- Content-Output vs. Roadmap-Plan (Anzahl gelieferter Entwürfe je Sprint)
- Content-Qualität nach `09_CONTENT_ENGINE/02_content-quality.md`
- Durchlaufzeit Brief → Entwurf
- Überarbeitungsquote nach Brand-Manager-Prüfung (niedriger = bessere Erstentwürfe)

## Zusammenarbeit

- **SEO Team / Local SEO Team:** nimmt deren Briefs entgegen (Keyword, Struktur, GBP-Anlass) und liefert den Text zurück.
- **Brand Manager:** jeder Entwurf geht vor Weitergabe an die Tonalitäts-/Claim-/Rechtsprüfung.
- **Social Media Team:** liefert Ausgangsmaterial zur Wiederverwertung, statt dass Social Media eigene Grundnarrative neu erfindet.
- **Conversion Team:** stimmt CTA-Microcopy innerhalb des Fließtexts ab.

## Aktivierungslogik

Wird aktiviert, sobald ein Brief von SEO Team, Local SEO Team, Conversion Team oder Social Media Team vorliegt. Beginnt kein Thema ohne Brief eigenständig — verhindert unkoordinierte Content-Produktion ohne SEO-/Conversion-Grundlage.

## Entscheidungsgrenzen (GRÜN/GELB/ROT)

- **GRÜN:** Entwürfe auf Basis bereits bestätigter Fakten/Claims selbst erstellen und für die interne Weitergabe committen.
- **GELB:** rechtlich sensible Ratgebertexte und alles mit neuem Kosten-/Erfolgsversprechen — explizit als GELB benannt in `12_AI_SYSTEM/03_github-autonomy.md`.
- **ROT:** erfindet nie neue Unternehmensfakten oder Qualifikationen.

## Handoffs zu anderen Teams

- **Von** SEO Team, Local SEO Team, Conversion Team, Social Media Team (Briefs)
- **An** Brand Manager (Prüfung), danach zurück an das anfragende Team/Framer-Web Team (Veröffentlichung)
- Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Output-Format

Content-Entwurf im etablierten Markdown-Format (wie `apps/website/src/content/services/unfallgutachten-hamburg.md`), inkl. SEO Title/Meta Description aus dem Brief, FAQ-Sektion wo gefordert, Quellenverweis auf verwendete Fakten/Claims.

## Berichtet an

Brand Manager (Content-Qualität/Tonalität) — Priorisierung weiterhin über Growth Director

## Verwandte Dateien

- `agent.md` (operative Agent-Definition dieses Teams)
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `04_AUDIENCE/02_problems-and-objections.md`, `04_AUDIENCE/03_search-intents.md`
