# FAQ-Bibliothek — Register

Stand: 2026-07-23
**Primärquelle für:** welche FAQ-Einträge bereits existieren, wo sie liegen und welches Thema/welchen Einwand sie beantworten.
**Nicht Primärquelle für:** den tatsächlichen Frage-/Antworttext — der bleibt, bis eine Migration separat freigegeben ist, in `apps/website/src/data/homepage.ts` (Feld `faq`) bzw. der noch nicht gemergten `unfallgutachten-hamburg.ts`. Dieses Register verweist auf diese Instanzen, es kopiert ihren Text nicht.

## Befund

FAQ-Inhalte existieren bereits — aber ausschließlich als Code-Daten, nicht im Wissenslayer registriert:

| Ort | Anzahl Einträge | Status |
|---|---|---|
| `apps/website/src/data/homepage.ts`, Feld `faq.items` | 6 | live auf der Homepage, entsprechen 1:1 den 6 Einwänden in `04_AUDIENCE/02_problems-and-objections.md` (siehe Zuordnung unten) |
| `unfallgutachten-hamburg.ts` (Branch `feature/unfallgutachten-hamburg`, PR #19, **nicht gemerged**) | 17 | noch nicht Teil von `main`, daher hier nur als bekannte künftige Quelle vermerkt, nicht als bestätigter Bestand |

## Zuordnung: Homepage-FAQ ↔ Einwände-Register

| FAQ-Frage (`homepage.ts`) | Entspricht Einwand in `04_AUDIENCE/02_problems-and-objections.md` |
|---|---|
| „Was kostet mich das?" | „Was kostet mich das?" |
| „Brauche ich wirklich einen Gutachter?" | „Brauche ich wirklich einen Gutachter?" |
| „Reicht nicht auch die Werkstatt?" | „Reicht die Werkstatt?" |
| „Kann ich der Versicherung vertrauen?" | „Kann ich der Versicherung vertrauen?" |
| „Wie schnell geht das?" | „Wie schnell geht das?" |
| „Muss ich mein Fahrzeug reparieren lassen?" | „Muss ich reparieren lassen?" |

Diese Zuordnung existierte bisher nirgends dokumentiert — sie war nur implizit im Code erkennbar.

## Warum dieses Register trotzdem als Struktur sinnvoll ist

Sobald neue FAQ entstehen (weitere Landingpages, Social-Nutzung, Google-Ads-Erweiterungen), soll nicht jede Seite unabhängig neue Formulierungen erfinden. Dieses Register definiert die Felder, die ein FAQ-Eintrag künftig braucht, damit er zentral auffindbar und wiederverwendbar ist:

| Feld | Zweck |
|---|---|
| Frage | die tatsächlich gestellte Nutzerfrage |
| Antwort-Kernaussage | Referenz auf freigegebene Aussage (`01_BRAND/04_claims.md`, `11_OPERATIONS/02_proof-register.md`) statt neuer, unabhängig formulierter Fakten |
| Zugehöriges Thema | Referenz auf `01_THEMEN_REGISTER/01_topic-register.md` |
| Verwendungsort(e) | welche Seite(n)/welcher Kanal diese Frage aktuell oder künftig zeigt |

## Empfehlung für spätere Migration (nicht umgesetzt)

Die 6 bestehenden Homepage-FAQ und die 17 FAQ aus PR #19 könnten künftig aus diesem Register generiert statt direkt im Code gepflegt werden — das würde verhindern, dass dieselbe Frage auf zwei Seiten unterschiedlich beantwortet wird. Das ist eine Empfehlung für eine spätere, separat zu entscheidende technische Umsetzung (berührt Website-Code, daher potenziell GELB-Autonomie nach `12_AI_SYSTEM/03_github-autonomy.md`) — keine Umsetzung in diesem Schritt.

## Verwandte Dateien

- `apps/website/src/data/homepage.ts` (Feld `faq`)
- `04_AUDIENCE/02_problems-and-objections.md`
- `01_BRAND/04_claims.md`, `11_OPERATIONS/02_proof-register.md`
- `01_THEMEN_REGISTER/01_topic-register.md`
