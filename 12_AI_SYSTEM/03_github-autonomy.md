# GitHub-Autonomie

Diese Datei ist die Primärdatei für die Frage: **Was darf Claude im Repository `gh-growth-engine` selbstständig tun, ohne vorher nachzufragen?**

Sie gilt für alle KI-Sitzungen (Claude Code, Claude auf claude.ai/code, automatisierte Sessions) mit Zugriff auf dieses Repository.

## Grundprinzip

Ein klar formulierter Auftrag von Ramin gilt als Freigabe für alle notwendigen **repository-internen** Schritte innerhalb der unten definierten Stufen. Claude soll bei klar definierten, repository-internen Aufgaben eigenständig bis zum fertigen Ergebnis arbeiten und nicht nach jedem einzelnen GitHub-Schritt erneut um Freigabe bitten.

## Autonomiestufe GRÜN

Claude darf ohne weitere Rückfrage:

- Repository-Dateien lesen
- bestehende Informationen analysieren
- Markdown-Dateien erstellen und bearbeiten
- Reports und CSV-Dateien erstellen
- Wissensbasis aktualisieren
- Document Map aktualisieren
- Roadmap und Projektstatus aktualisieren
- Skills und Agentendateien vorbereiten
- Website-Audits durchführen
- Branches mit Präfix `claude/` erstellen
- Änderungen committen
- Branches pushen
- Pull Requests erstellen
- eigene Änderungen prüfen
- Pull Requests selbst mergen
- erledigte Branches löschen

**Voraussetzungen:**

- Aufgabe wurde von Ramin klar beauftragt
- Änderungen betreffen nur das Repository
- keine sensiblen Daten werden verarbeitet
- Konsistenzprüfung wurde bestanden
- keine Live-Systeme werden verändert

## Autonomiestufe GELB

Claude darf Änderungen vorbereiten, committen, pushen und einen Pull Request erstellen, aber **nicht selbst mergen** bei:

- produktivem Website-Code mit automatischem Deployment
- Änderungen an Tracking und Consent
- Redirects bestehender URLs
- Änderungen an Impressum oder Datenschutz
- rechtlich sensiblen Ratgebertexten
- neuen Kosten-, Garantie- oder Erfolgsversprechen
- Änderungen mit möglichem Rankingverlust
- größeren Änderungen an Markenpositionierung oder Leistungsangebot

In diesen Fällen erstellt Claude einen fertigen Pull Request und legt Ramin nur die konkrete geschäftliche Entscheidung zur Freigabe vor.

## Autonomiestufe ROT

Claude darf ohne ausdrückliche Einzelfreigabe niemals:

- eine Live-Website veröffentlichen
- Domains oder DNS verändern
- Google-Ads-Budgets oder Kampagnen aktiv verändern
- Meta-Ads aktivieren oder Budgets verändern
- externe Nachrichten senden
- Kunden kontaktieren
- Zugangsdaten erzeugen oder verändern
- Kundendaten, Kennzeichen, Gutachten oder Fahrzeugpapiere in GitHub speichern
- vertrauliche Finexity-Unterlagen verwenden
- rechtlich bindende Aussagen final freigeben
- externe kostenpflichtige Dienste buchen

## Unterbrechungsregel

Claude soll nicht wegen normaler GitHub-Schritte nachfragen.

Claude unterbricht nur, wenn:

- eine echte geschäftliche Entscheidung fehlt
- zwei fachlich unterschiedliche Strategien möglich sind
- Zugangsdaten benötigt werden
- eine externe Plattform aktiv verändert werden müsste
- sensible Daten betroffen sind
- eine irreversible oder rechtlich riskante Aktion erforderlich wäre
- der Auftrag technisch nicht ausführbar ist

Bei technischen Problemen prüft Claude zuerst selbstständig alternative Werkzeuge und Wege, bevor unterbrochen wird.

## Verwandte Dateien

- `CLAUDE.md` – Abschnitt „Freigaben" verweist auf diese Datei
- `12_AI_SYSTEM/01_ai-operating-system.md` – allgemeine Arbeitsweise der KI
- `11_OPERATIONS/01_decision-log.md` – Entscheidung zur Einführung der Autonomiestufen
- `00_GH_DOCUMENT_MAP.md` – Primärdatei-Zuordnung
