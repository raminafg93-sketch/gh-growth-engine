# Website-Bestandsaudit — kfz-gutachtenhelden.de

Stand: 2026-07-21
Primärdatei für Ergebnisse: dieser Report + `13_REPORTS/02_url-inventory.csv`
Betroffene Folgedateien: `05_WEBSITE_SEO/02_url-map.md`, `11_OPERATIONS/03_roadmap.md`

## Auftrag

Technischer und inhaltlicher Bestandsaudit von `https://www.kfz-gutachtenhelden.de` gemäß `05_WEBSITE_SEO/01_website-strategy.md` (Phase 1: "bestehende Website vollständig inventarisieren") und `.claude/skills/website-inventory/SKILL.md`. Keine Live-Änderungen, keine Löschung oder Umleitung bestehender URLs, keine erfundenen Daten.

## Technische Grenze — bitte zuerst lesen

**Ein direkter technischer Crawl der Domain war in dieser Arbeitsumgebung nicht möglich.**

- `curl` gegen `www.kfz-gutachtenhelden.de` scheitert mit `CONNECT tunnel failed, response 403` am vorgeschalteten Egress-Proxy dieser Session.
- Der WebFetch-Tool-Zugriff auf dieselbe Domain (Startseite und Unterseiten) liefert ebenfalls `HTTP 403 Forbidden`.
- Laut Proxy-Diagnose (`/root/.ccr/README.md`) bedeutet ein 403 auf CONNECT-Ebene: *"The destination host is not allowed by your organization's egress policy for this session. Do not retry or route around it — report the blocked host."*
- Ein Zugriff über das Internet Archive (`web.archive.org`) war ebenfalls nicht erreichbar.

Das ist kein Website-Problem, sondern eine **Netzwerkrichtlinie dieser Claude-Code-Umgebung** (Session-Environment auf claude.ai/code), die den Zugriff auf `kfz-gutachtenhelden.de` aktuell nicht zulässt. Alle anderen Teile des Auftrags (Autonomieregeln, Repo-Reports) sind davon nicht betroffen.

**Was ich stattdessen genutzt habe:** Google-Websuche (`site:kfz-gutachtenhelden.de` und themenbezogene Suchen) als indirekte, sekundäre Quelle. Damit lassen sich einige URLs, von Google zwischengespeicherte Seitentitel und thematische Kurzzusammenfassungen ermitteln — **keine** Statuscodes, Canonicals, exakten Meta-Descriptions, exakten H1-Texte, Wortzahlen, internen Linkgraphen oder Indexierbarkeits-Meta-Tags. Diese Felder sind im Inventar (`02_url-inventory.csv`) explizit als *"nicht ermittelbar – technische Grenze"* markiert statt geschätzt oder erfunden.

**Empfehlung an Ramin:** Damit ein vollständiger technischer Crawl möglich wird, entweder (a) die Netzwerk-/Egress-Richtlinie dieses Environments für `kfz-gutachtenhelden.de` freigeben (siehe Environment-Einstellungen unter claude.ai/code), oder (b) einen Sitemap-/Crawl-Export (z. B. Screaming Frog CSV) oder die rohen Seiten-HTMLs bereitstellen, oder (c) Search-Console-Zugang verbinden. Alle drei Wege würden den Audit vervollständigen, ohne die Live-Website zu verändern.

## Über die Google-Websuche ermittelte URLs (Stand 2026-07-21)

| URL | Google-indizierter Title | Auffälligkeit |
|---|---|---|
| `/` | KFZ-GutachtenHelden \| Kfz-Gutachter Hamburg & Umgebung | wirkt korrekt konfiguriert |
| `/home` | SaaS Wind - Sophisticated SaaS and Software Company Template | **unkonfigurierte Template-Seite, indexiert** |
| `/features` | Features - SaaS Wind Sophisticated SaaS and Software Company Template | **unkonfigurierte Template-Seite, indexiert** |
| `/impressum` | KFZ-GutachtenHelden \| Impressum | wirkt korrekt konfiguriert |
| `/kontakt` | KFZ-GutachtenHelden \| Kontakt | wirkt korrekt konfiguriert |
| `/leistungen` | KFZ-GutachtenHelden \| Leistungen | wirkt korrekt konfiguriert |

Über weitere gezielte Suchanfragen (`datenschutz`, `wertgutachten`, `ratgeber`, `blog`, `sitemap.xml`) konnten **keine zusätzlichen URLs** gefunden werden — das heißt nicht zwangsläufig, dass es sie nicht gibt, sondern nur, dass sie aktuell nicht über Google auffindbar sind (siehe Migrationsrisiken).

Externe Trust-Referenz gefunden: ein Bewertungsprofil auf ProvenExpert (`provenexpert.com/de-de/kfz-gutachtenhelden`) — vermutlich als Trust-Widget auf der Website eingebunden, aber technisch nicht verifiziert.

## Wichtigste Befunde

1. **Template-Leichen im Google-Index.** Die Website scheint auf einem SaaS-Landingpage-Template ("SaaS Wind") aufgebaut zu sein. Zwei Seiten (`/home`, `/features`) tragen noch den unveränderten Template-Titel und sind von Google indexiert. Das ist ein reales SEO- und Markenrisiko: doppelter/irrelevanter Content im Index, verwirrende Suchergebnisse, mögliche Duplicate-Content-Abwertung. Priorität P1.
2. **Sehr kleines sichtbares URL-Set.** Nur 6 URLs sind über die Google-Websuche auffindbar (Home, Home-Duplikat, Features, Impressum, Kontakt, Leistungen). Für ein Themenfeld mit mehreren eigenständigen Leistungen (Unfallgutachten, Schadengutachten, Wertgutachten, Kostenvoranschlag, Kaufberatung, Elektroauto-Gutachten – siehe `03_OFFER/01_services.md`) und mehreren Suchintentionen (siehe `04_AUDIENCE/03_search-intents.md`) fehlen dedizierte Landingpages fast vollständig. Das deckt sich mit dem aktuellen Projektstatus ("Website-Inventar" ist der nächste Schritt vor "neue Architektur").
3. **Keine Datenschutzerklärung auffindbar.** Über die Websuche wurde kein `/datenschutz` gefunden. Das kann heißen: Seite existiert, ist aber nicht indexiert (z. B. `noindex` oder Footer-Link ohne interne Verlinkung), oder sie fehlt tatsächlich. Rechtlich relevant (DSGVO-Pflicht) — REVIEW, keine Vermutung ohne echten Seitenzugriff.
4. **Firmendaten aus Suchschnipseln stimmen mit `02_COMPANY/01_company-facts.md` überein** (Telefon +49 173 408 64 20, Adresse Drehbahn 5 / Holzdamm, Öffnungszeiten täglich 08–22 Uhr) — keine Widersprüche gefunden, aber auch nicht auf Zeichenebene verifiziert, da die Seiten nicht direkt gelesen werden konnten.
5. **Keine Ranking-, Klick- oder Trafficdaten verfügbar** (siehe `10_DATA_INSIGHTS/02_data-sources.md`: Search Console/Analytics/Ads noch nicht angebunden). Jede Entscheidung, die solche Daten bräuchte, ist REVIEW.

## Nicht ermittelbar (technische Grenzen, keine Vermutung)

- HTTP-Statuscodes aller URLs
- Canonical-Tags
- Indexierbarkeit (robots meta / X-Robots-Tag)
- exakte Meta-Descriptions und H1-Texte
- vollständige Überschriftenstruktur
- Wortzahl je Seite
- Anzahl interner Links je Seite, eingehende interne Links
- primärer CTA, WhatsApp-/Telefon-Conversion-Elemente auf Seitenebene
- Trust-Elemente auf der Seite selbst (nur externe Referenz über ProvenExpert bekannt)
- vollständige URL-Liste (Unterseiten ohne Google-Indexierung bleiben unsichtbar)

Details je URL: siehe `13_REPORTS/02_url-inventory.csv`.

## Nächster Schritt

Sobald der Netzwerkzugriff freigegeben ist oder ein Crawl-Export vorliegt, kann dieser Report mit echten technischen Daten vervollständigt werden, ohne die hier dokumentierte Struktur zu ändern — nur die REVIEW-Einträge in `02_url-inventory.csv` und `05_WEBSITE_SEO/02_url-map.md` werden dann durch echte Statuswerte ersetzt.
