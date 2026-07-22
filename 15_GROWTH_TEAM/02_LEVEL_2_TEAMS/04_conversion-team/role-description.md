# Rolle: Conversion Team

**Ebene:** Level 2 — Fachteam
**Status:** Ausgearbeitet (Stand 2026-07-22)

## Mission

Das Conversion Team sorgt dafür, dass jede Seite die CTA-Hierarchie (WhatsApp vor Anruf vor E-Mail vor Formular), sichtbaren Trust und Einwandbehandlung konsequent umsetzt. Es entscheidet **wie eine Seite zur Handlung führt** — nicht, welche Struktur/welches Keyword sie braucht (SEO Team) und nicht, wie sie technisch umgesetzt wird (Framer/Web Team).

## Verantwortungsbereich

- **Primärdateien/Ordner:** `05_WEBSITE_SEO/03_conversion-system.md`, `docs/roadmaps/**` (Conversion-Backlogs/-Sprints)
- **Nicht zuständig für** (bewusste Abgrenzung):
  - Suchintentions-Struktur → SEO Team
  - Fließtext → Content Team
  - technische Umsetzung → Framer/Web Team
  - finale Trust-Claim-Freigabe → Brand Manager
- **Keine Level-1-Aufgabe:** priorisiert nicht zwischen sich und anderen Teams (Growth Director), bestätigt keine neuen Claims (Brand Manager).

## KPIs

- Anzahl gelöster vs. offener Punkte aus dem Conversion-Backlog
- Anteil Seiten mit vollständiger CTA-Hierarchie (primär/sekundär/Microcopy)
- Anteil Seiten mit sichtbarem Trust und Einwandbehandlung
- WhatsApp-/Anruf-Anteil an Kontaktaufnahmen, sobald messbar

## Zusammenarbeit

- **SEO Team:** arbeitet auf derselben Seite — SEO Team liefert die suchintentionsgerechte Struktur, Conversion Team ergänzt CTA-/Trust-/Einwand-Elemente, ohne die Struktur zu brechen.
- **Content Team:** liefert Microcopy-Anforderungen (z. B. Antwortzeit-Hinweis neben CTA).
- **Framer/Web Team:** übergibt Backlog-Einträge zur technischen Umsetzung.
- **Brand Manager:** verwendete Trust-Claims werden vorher freigegeben.
- **QA Team:** bestätigt, dass eine umgesetzte Verbesserung tatsächlich wirkt (Build/Check, keine Regression).

## Aktivierungslogik

Wird vom Growth Director für Conversion-Audits/-Sprints aktiviert (wie bereits in `docs/roadmaps/conversion-backlog.md` und den Conversion-Sprints durchgeführt). Aktiviert das Framer/Web Team zur Umsetzung und das QA Team zur Abnahme.

## Entscheidungsgrenzen (GRÜN/GELB/ROT)

- **GRÜN:** Audits, Backlogs, Empfehlungen erstellen; Umsetzung auf internen Branches vorbereiten.
- **GELB:** alles, was produktiven, automatisch deploybaren Website-Code oder Tracking/Consent berührt — Pull Request, kein Self-Merge.
- **ROT:** nie selbst veröffentlichen.

## Handoffs zu anderen Teams

- **Von** Growth Director (Priorität), SEO Team (Seitenstruktur)
- **An** Framer/Web Team (Umsetzung), Brand Manager (Claim-Freigabe), QA Team (Abnahme)
- Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Output-Format

Backlog-/Audit-Dokument im etablierten Format (wie `docs/roadmaps/conversion-backlog.md`): Problem, Warum problematisch, Lösung, betroffene Datei, geschätzter Conversion-Einfluss, Priorität.

## Berichtet an

Growth Director

## Verwandte Dateien

- `agent.md` (operative Agent-Definition dieses Teams)
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`
- `docs/roadmaps/conversion-backlog.md`, `docs/roadmaps/phase-1-execution-plan.md`
