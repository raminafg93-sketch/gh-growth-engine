# Level 2 — Fachteams-Charta

**Status:** Alle 8 Fachteams ausgearbeitet und sequenziell gegeneinander geprüft (Stand 2026-07-22)

## Zweck dieser Ebene

Level 2 arbeitet operativ innerhalb der bestehenden Wissensbasis und des Website-Codes. Jedes Fachteam ist einer Level-1-Rolle zugeordnet und berichtet an diese.

## Teams dieser Ebene

| Team | Primärer Fokus | Berichtet an | Ordner |
|---|---|---|---|
| SEO Team | `05_WEBSITE_SEO`, `06_GOOGLE/01_google-seo.md` | Growth Director | `01_seo-team/` |
| Local SEO Team | `06_GOOGLE/02_google-business-profile.md` | Growth Director | `02_local-seo-team/` |
| Content Team | `09_CONTENT_ENGINE` | Brand Manager | `03_content-team/` |
| Conversion Team | `05_WEBSITE_SEO/03_conversion-system.md`, `docs/roadmaps/` | Growth Director | `04_conversion-team/` |
| Google Ads Team | `06_GOOGLE/03_google-ads.md` | Growth Director | `05_google-ads-team/` |
| Social Media Team | `07_META` | Brand Manager | `06_social-media-team/` |
| Framer/Web Team | `apps/website`, `docs/architecture`, `docs/framer` | Operations Manager | `07_framer-web-team/` |
| QA Team | `13_REPORTS`, `.claude/skills/website-inventory` | Operations Manager | `08_qa-team/` |

Detaillierte Zuordnung: siehe `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`.

## Zusammenarbeit zwischen Fachteams

Kein Fachteam arbeitet isoliert. Wo ein Team das Ergebnis eines anderen Teams braucht oder erzeugt, läuft die Übergabe nach `15_GROWTH_TEAM/04_HANDOFFS/00_handoff-principles.md` und dem Template `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`.

## Bezug zu den Autonomiestufen

Jedes Fachteam handelt innerhalb der in `12_AI_SYSTEM/03_github-autonomy.md` festgelegten Stufen GRÜN/GELB/ROT. Die typische Autonomiestufe je Team ist in der Verantwortlichkeits-Matrix vermerkt — das ist eine Einordnungshilfe, keine Abweichung von der Primärdatei `12_AI_SYSTEM/03_github-autonomy.md`.

## Cross-Check der 8 Fachteams (sequenziell, 2026-07-22)

Wie beauftragt wurde nach jedem fertiggestellten Team geprüft, bevor das nächste Team erstellt wurde. Ergebnis:

1. **SEO Team** — keine Vorgänger, keine Überschneidung.
2. **Local SEO Team** — Prüfung gegen SEO Team: Gefahr, dass beide „lokale" On-Page-Inhalte beanspruchen. Abgegrenzt: SEO Team = On-Page-Inhalte mit Lokalbezug (z. B. `-hamburg`-Landingpages), Local SEO Team = Google Business Profile/Maps außerhalb der Website. Zusätzlich geklärt: Local SEO Team trägt nie selbst etwas live in das externe GBP-Dashboard ein (wie beim Framer/Web Team gegenüber der Live-Framer-Website).
3. **Content Team** — Prüfung gegen SEO Team/Local SEO Team: Content Team schreibt nur auf Basis eines Briefs, entscheidet nicht selbst über Keyword/Struktur. Prüfung gegen Brand Manager (Level 1): Content Team erstellt Entwürfe, finale Tonalitäts-/Claim-Freigabe bleibt beim Brand Manager — keine Überschneidung, nur eine klare Übergabe.
4. **Conversion Team** — Prüfung gegen SEO Team: beide arbeiten auf derselben Seite. Abgegrenzt: SEO Team liefert such­intentionsgerechte Struktur, Conversion Team ergänzt CTA-/Trust-/Einwand-Elemente darauf, ohne die Struktur zu brechen — sequenzielle Zusammenarbeit statt Überschneidung.
5. **Google Ads Team** — Prüfung gegen SEO Team: Keyword-Überschneidung zwischen organischer und bezahlter Suche möglich. Abgegrenzt: Teams stimmen Ziel-Keywords ab, damit organische und bezahlte Suche sich ergänzen statt intern zu konkurrieren. Bestätigt: Budget-/Kampagnenaktivierung bleibt ROT (`12_AI_SYSTEM/03_github-autonomy.md`) — keine Überschneidung mit Growth Director, der nur die Sequenzierung der Ads-Phase entscheidet, nicht das Budget selbst.
6. **Social Media Team** — Prüfung gegen Content Team: Risiko doppelter Content-Erstellung. Abgegrenzt: Social Media Team adaptiert/repurposed Content-Team-Material, erfindet keine neuen Grundnarrative. Offener Punkt dokumentiert (kein Overhead, nur Klarstellung): Für bezahlte Meta-Ads existiert aktuell **kein eigenes Fachteam** unter den beauftragten 8 Teams — das Social Media Team verantwortet ausschließlich organische Inhalte; Meta-Ads-Budgets bleiben ROT bei Ramin, eine mögliche künftige Erweiterung wäre eine separate Entscheidung.
7. **Framer/Web Team** — Prüfung gegen Conversion Team/SEO Team: beide liefern Anforderungen an dieses Team, keine Überschneidung, da Framer/Web Team nur umsetzt, nicht selbst priorisiert oder Inhalte definiert. Prüfung gegen Operations Manager (Level 1) und Growth Director (Level 1): Framer/Web Team trifft keine Plattformentscheidung (Astro vs. Framer) selbst — das bleibt in `docs/architecture/website-platform-decision.md` verankert.
8. **QA Team** — Prüfung gegen Operations Manager (Level 1): beide „prüfen", aber unterschiedliche Ebenen — QA Team prüft ein einzelnes fachliches Ergebnis, Operations Manager prüft die Prozess-/Übergabeformalie des Gesamtsystems. Explizit in beiden Rollen-Dateien gegenseitig referenziert, keine Überschneidung.

**Ergebnis:** Keine der 8 Fachteam-Definitionen übernimmt eine Level-1-Aufgabe (Priorisierung, finale Marken-/Claim-Freigabe, Änderung von Autonomiestufen/Prozessformaten). Keine zusätzliche Datei oder Rolle wurde für die Klärungen angelegt — alle Korrekturen erfolgten direkt in den betroffenen Team-Dateien.

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `15_GROWTH_TEAM/01_LEVEL_1_MANAGEMENT/00_management-charter.md`
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
