# Arbeitsablauf für Ramin (ohne Entwickler-Vorwissen)

Stand: 2026-07-21
Zweck: Du musst für Website-Arbeit und für SEO-/Content-Arbeit **nicht zwischen zwei Repositories wechseln.** Alles läuft über `gh-growth-engine`.

## Für Website-Arbeit

1. Claude Code im Root von `gh-growth-engine` öffnen (kein separates Repo).
2. Aufgabe beschreiben, z. B. "Baue eine Leistungsseite für Wertminderung" oder "Behebe Layout-Fehler im Header".
3. Claude erkennt selbst, ob es sich um eine Website-Aufgabe handelt (siehe `docs/workflows/claude-code-monorepo-workflow.md`).
4. Claude arbeitet in `apps/website` und — nur wenn wirklich nötig — zusätzlich in den passenden Wissensordnern (z. B. `03_OFFER`).
5. Vor jedem Pull Request prüft Claude selbst: baut die Website? Sind TypeScript-Fehler frei?
6. Der Pull Request zeigt dir getrennt: was **live-wirksam** ist (sobald deployt) und was nur Dokumentation/Wissen ist.
7. Eine Vorschau entsteht später automatisch über Vercel, sobald das verbunden ist (`docs/deployment/vercel-preparation.md`) — aktuell noch nicht angebunden.
8. **Deine Live-Website auf Framer bleibt davon komplett unberührt**, bis du ausdrücklich einen echten Umzug freigibst.

## Für SEO- oder Content-Arbeit

1. Claude liest zuerst `00_GH_MASTER_CONTEXT.md` und `00_GH_PRINCIPLES.md` — den aktuellen Stand und die dauerhaften Prinzipien.
2. Claude aktualisiert die zuständige Wissens- oder Content-Datei (z. B. `04_AUDIENCE/03_search-intents.md`, `05_WEBSITE_SEO/02_url-map.md`).
3. Website-Code wird **nur** angefasst, wenn dein Auftrag das ausdrücklich verlangt (z. B. "und baue daraus auch gleich die Seite").
4. Jede Änderung bleibt nachvollziehbar: Primärdatei, was sich ändert, welche Folgedateien betroffen sind (Format aus `00_GH_CHANGE_REQUEST_TEMPLATE.md`).

## Was du NICHT selbst tun musst

- Kein manuelles Wechseln zwischen Repositories.
- Kein manuelles Einrichten von pnpm/Node — das ist bereits vorbereitet.
- Kein manuelles Prüfen von Build-Fehlern — Claude prüft das vor jedem Pull Request.

## Was ausschließlich du entscheidest (Autonomiestufe ROT)

- Ob und wann die Website live geht.
- Ob und wann die Domain/DNS auf ein neues System umgestellt wird.
- Ob Vercel oder ein anderer Hosting-Dienst tatsächlich verbunden wird (dafür brauchst du dort einen Account/Zugangsdaten).
- Ob Google-/Meta-Ads-Budgets sich ändern.

Details zu diesen Grenzen: `12_AI_SYSTEM/03_github-autonomy.md`.

## Kurzcheck: Ist gerade etwas live-wirksam?

Frag im Zweifel einfach: "Ist das schon live oder nur im Repository?" — Claude beantwortet das in jedem Pull Request von sich aus unter der Rubrik "LIVE-WIRKSAM".
