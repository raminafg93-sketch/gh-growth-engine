# Übergabeprinzipien zwischen Teams

**Status:** Architektur — Prozessrahmen; inhaltliche Detailregeln je Team noch nicht ausgefüllt

## Wann eine Übergabe stattfindet

Eine Übergabe ist jeder Punkt, an dem die Verantwortung für ein Arbeitsergebnis von einem Team/einer Rolle an ein anderes Team/eine andere Rolle wechselt — z. B. wenn das SEO Team eine neue Seitenstruktur an das Framer/Web Team zur Umsetzung übergibt, oder wenn das Conversion Team ein Ergebnis an das QA Team zur Prüfung gibt.

## Verhältnis zum Change-Request-Template

`00_GH_CHANGE_REQUEST_TEMPLATE.md` regelt die Übergabe **Ramin → KI**. Das Handoff-Template hier regelt die Übergabe **Team → Team** innerhalb des Growth-Teams. Beide folgen demselben Grundprinzip (Primärdatei nennen, Alt/Neu, Auswirkungen, Prüfung), sind aber unterschiedliche Dokumente für unterschiedliche Übergabestellen.

## Pflichtbestandteile jeder Übergabe

1. Von-Team / An-Team
2. Bezug zur betroffenen Primärdatei (siehe `00_GH_DOCUMENT_MAP.md`)
3. Kontext — was wurde gemacht und warum
4. Ergebnis / Deliverable
5. Offene Punkte
6. Nächster konkreter Schritt für das empfangende Team
7. Freigabestatus (GRÜN / GELB / ROT, siehe `12_AI_SYSTEM/03_github-autonomy.md`)

Format: `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`

## Eskalation bei Konflikt zwischen Teams

[noch nicht ausgefüllt — Grundsatz: Eskalation zuerst an die zuständige Level-1-Rolle, siehe `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`, danach an Ramin gemäß der Unterbrechungsregel in `12_AI_SYSTEM/03_github-autonomy.md`]

## Bezug zu den Autonomiestufen

- **GRÜN:** Das empfangende Team darf direkt weiterarbeiten (committen, pushen, PR, selbst mergen).
- **GELB:** Das empfangende Team bereitet einen Pull Request vor, mergt aber nicht selbst — Ramin entscheidet.
- **ROT:** Keine Weiterarbeit ohne ausdrückliche Einzelfreigabe durch Ramin.

## Verwandte Dateien

- `15_GROWTH_TEAM/04_HANDOFFS/01_handoff-template.md`
- `15_GROWTH_TEAM/03_RESPONSIBILITIES/00_responsibility-matrix.md`
- `00_GH_CHANGE_REQUEST_TEMPLATE.md`
- `12_AI_SYSTEM/03_github-autonomy.md`
