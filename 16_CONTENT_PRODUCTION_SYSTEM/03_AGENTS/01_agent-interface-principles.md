# Agenten-Schnittstellen-Prinzip (konzeptionell)

Stand: 2026-07-23
**Primärquelle für:** den konzeptionellen Vertrag, den jeder künftige technische Automatisierungs-Agent (z. B. im externen „Claude Design"-System) einhalten muss.
**Nicht Primärquelle für:** wer geschäftlich verantwortlich ist — das bleibt ausschließlich `15_GROWTH_TEAM/**` (Rollen-/Team-`agent.md`-Dateien). Kein technischer Agent hier ersetzt eine dortige Rolle oder deren Freigaberechte.
**Wichtig:** Dies ist kein Prompt, keine Tool-Konfiguration, keine API-Definition — nur das Prinzip, dem jede spätere konkrete Umsetzung folgen muss.

## Warum diese Trennung notwendig ist

`15_GROWTH_TEAM/**` beantwortet „wer trägt die geschäftliche Verantwortung" (Organisationsebene). Ein künftiges Automatisierungssystem braucht zusätzlich eine technische Antwort auf „was darf ein einzelner Agent tun, bevor er eskalieren muss" (Ausführungsebene). Ohne diese Trennung entstünde eine zweite, konkurrierende Definition von „Agent" neben den bestehenden Rollen — das widerspricht dem Grundprinzip „eine Primärquelle je Information".

## Der Vertrag (drei Teile, gilt für jeden künftigen Content-Production-Agenten)

### 1. Input-Vertrag

Ein Agent verarbeitet ausschließlich Material, das der Struktur aus `01_INPUT/01_input-specification.md` entspricht (Kategorie, Kanal-Eignung, Rechte-/Freigabestatus, Zustand). Fehlt eine Pflichtangabe, erzeugt der Agent keinen Output, sondern meldet die Lücke zurück — kein Agent ergänzt fehlende Angaben durch Annahmen.

### 2. Output-Vertrag

Ein Agent liefert Ergebnisse immer mit Bezug auf:

- welches Ausgangsmaterial verwendet wurde,
- welche Primärquelle(n) für Tonalität/Design/Claims herangezogen wurden (`01_BRAND/**`, `11_OPERATIONS/02_proof-register.md`),
- welchen Status der Output hat (Entwurf / bereit zur Freigabe) — niemals „veröffentlicht" als Selbsteinschätzung eines Agenten, siehe Freigabe-Grundsatz (`04_WORKFLOWS/02_approval-principle.md`).

### 3. Eskalations-Vertrag

Ein Agent eskaliert statt selbst zu entscheiden, sobald:

- eine Angabe fehlt oder widersprüchlich ist (siehe Input-Vertrag),
- ein Claim nicht in `11_OPERATIONS/02_proof-register.md` freigegeben ist,
- eine Aktion die Kanal-/Bild-/Tonalitätsregeln aus `01_BRAND/**` verlassen würde,
- eine Aktion nach `12_AI_SYSTEM/03_github-autonomy.md` GELB oder ROT wäre — insbesondere jede tatsächliche externe Veröffentlichung (siehe `04_WORKFLOWS/02_approval-principle.md`).

Diese Autonomiestufen gelten für technische Automatisierungs-Agenten identisch wie für jede Claude-Code-Session in diesem Repository — es gibt keine Sonderregel „weil automatisiert".

## Verantwortungs-Zuordnung (Referenz, keine neue Zuständigkeit)

| Content-Typ | Geschäftlich verantwortliches Team |
|---|---|
| Social-/Meta-Formate | `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/06_social-media-team/` |
| Grundnarrative/Content-Strategie | `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/03_content-team/` |
| Qualitätsprüfung vor Freigabe | `15_GROWTH_TEAM/02_LEVEL_2_TEAMS/08_qa-team/` |
| Marken-/Kanalkonsistenz | `15_GROWTH_TEAM/01_LEVEL_1_MANAGEMENT/02_brand-manager/` |

Ein technischer Agent arbeitet für das jeweils zuständige Team, ersetzt es aber nicht als Entscheidungsinstanz.

## Verwandte Dateien

- `15_GROWTH_TEAM/00_growth-team-overview.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
- `01_INPUT/01_input-specification.md`
- `04_WORKFLOWS/01_pipeline-stages.md`, `02_approval-principle.md`
