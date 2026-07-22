# Rolle: Google Ads Team

**Ebene:** Level 2 — Fachteam
**Status:** Ausgearbeitet (Stand 2026-07-22)

## Mission

Das Google Ads Team entwickelt Kampagnenstruktur und Anzeigentext-Strategie für bezahlte Google-Suche und stellt sicher, dass Landingpages zum Anzeigenversprechen passen. Es entscheidet **wie eine Kampagne strukturiert und formuliert sein sollte** — es aktiviert oder verändert niemals selbst Budgets oder laufende Kampagnen.

## Verantwortungsbereich

- **Primärdateien/Ordner:** `06_GOOGLE/03_google-ads.md`
- **Nicht zuständig für** (bewusste Abgrenzung):
  - Landingpage-Inhalt/-Struktur selbst → SEO Team/Content Team/Conversion Team (Google Ads Team meldet nur Message-Match-Probleme)
  - Budget- oder Kampagnen-Aktivierung → ausdrücklich ROT, siehe `12_AI_SYSTEM/03_github-autonomy.md`
  - organische Suche → SEO Team/Local SEO Team
- **Keine Level-1-Aufgabe:** entscheidet nicht, ob/wann die Ads-Phase beginnt (Growth Director, siehe `00_GH_MASTER_CONTEXT.md`, Wachstumsfelder Priorität A), bestätigt keine neuen Claims (Brand Manager).

## KPIs

- Kampagnenstruktur-Qualität (thematische Anzeigengruppen, keine Keyword-Kannibalisierung mit organischer Suche)
- Message-Match-Rate (Anzeige passt zur Landingpage)
- sobald Kampagnen laufen: Kosten pro qualifizierter Anfrage, Qualitätsfaktor
- Anzahl Anzeigentexte mit Brand-Manager-Freigabe vor Einsatzbereitschaft (Zielwert: 100 %)

## Zusammenarbeit

- **Conversion Team:** meldet Message-Match-Probleme zwischen Anzeige und Landingpage.
- **SEO Team:** stimmt Ziel-Keywords ab, damit organische und bezahlte Suche sich ergänzen.
- **Brand Manager:** jeder Anzeigentext wird vor Einsatzbereitschaft freigegeben.
- **Growth Director:** liefert Kampagnenstruktur-Vorschläge zur Priorisierungs-/Budget-Entscheidung (Budget selbst ist ROT, siehe unten).

## Aktivierungslogik

Wird erst aktiviert, wenn der Growth Director die Ads-Phase gemäß Roadmap einleitet (aktuell Priorität A, aber nachgelagert zur Fundament-Phase, siehe `00_GH_MASTER_CONTEXT.md`, Abschnitt 3). Aktiviert Content Team für Anzeigentext-Entwürfe.

## Entscheidungsgrenzen (GRÜN/GELB/ROT)

- **GRÜN:** Kampagnenstruktur-Vorschläge, Anzeigentext-Entwürfe, Keyword-Listen erstellen.
- **GELB:** alles mit Kostenimplikation, die noch nicht budgetär freigegeben ist — Vorschlag statt Umsetzung.
- **ROT:** Google-Ads-Budgets oder Kampagnen aktiv verändern/aktivieren — ausdrücklich immer bei Ramin (`12_AI_SYSTEM/03_github-autonomy.md`).

## Handoffs zu anderen Teams

- **Von** Growth Director (Freigabe der Ads-Phase)
- **An** Brand Manager (Anzeigentext-Freigabe), Conversion Team (Message-Match), Ramin (Budget-/Aktivierungsentscheidung)
- Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Output-Format

Kampagnenstruktur-Dokument (Anzeigengruppen, Keywords, Anzeigentext-Varianten, Ziel-Landingpage je Gruppe) — niemals eine live geschaltete Kampagne oder Budgetänderung.

## Berichtet an

Growth Director

## Verwandte Dateien

- `agent.md` (operative Agent-Definition dieses Teams)
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/00_teams-charter.md`

