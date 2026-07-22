# Growth-Team-Übersicht

**Dokumenttyp:** Primärdatei für die Organisationsstruktur des digitalen Wachstumsteams
**Status:** Architektur — Inhalte noch nicht ausgefüllt
**Pflegepflicht:** Bei jeder strukturellen Änderung an Rollen, Teams oder Übergabeprozessen

---

## Zweck

Diese Ordnerstruktur definiert das KI-gestützte Wachstumsteam für KFZ-GutachtenHelden als vollständig GitHub-organisiertes System. Keine Rolle, kein Team und kein Übergabeprozess wird ausschließlich lokal (z. B. nur in einem Chat-Verlauf oder auf einem einzelnen Rechner) gepflegt — alles Verbindliche lebt hier im Repository.

Dieser Schritt legt ausschließlich die **Architektur** fest: Ordnerstruktur, Rollen-Skelette, Agent-Datei-Vorlagen, Verantwortlichkeits-Zuordnung und Übergabeprozess-Vorlagen. Es sind noch keine inhaltlichen Entscheidungen (Mandate, KPIs, Freigabegrenzen im Detail) getroffen — diese werden in einem separaten, späteren Schritt befüllt.

## Funktionsprinzip — zwei Ebenen

```
15_GROWTH_TEAM/
├── 01_LEVEL_1_MANAGEMENT/     Führungsebene: Priorisierung, Konsistenz, Prozesse
└── 02_LEVEL_2_TEAMS/          Fachebene: operative Umsetzung je Fachbereich
```

- **Level 1 (Management)** entscheidet über Priorisierung zwischen Fachteams, sichert Konsistenz (Marke, Prozesse) und ist die einzige Ebene, die direkt an Ramin berichtet.
- **Level 2 (Fachteams)** arbeitet operativ innerhalb der bestehenden Wissensbasis (`01_BRAND` bis `14_ASSETS`, `apps/website`, `docs/`) und berichtet an die zuständige Level-1-Rolle.
- Level 2 arbeitet nicht isoliert: Übergaben zwischen Fachteams laufen nach dem Format in `04_HANDOFFS/`.

## Verhältnis zur bestehenden Wissensbasis

Dieses Ordner erweitert, ersetzt aber nichts:

- Die fachlichen Primärdateien bleiben unverändert in `00_GH_MASTER_CONTEXT.md` bis `14_ASSETS/` sowie `apps/website/`.
- `15_GROWTH_TEAM/` definiert **wer** wofür zuständig ist und **wie** zwischen Zuständigkeiten übergeben wird — nicht die fachlichen Inhalte selbst.
- Bei Widerspruch zwischen einer Rollen-/Team-Datei hier und einer fachlichen Primärdatei gilt die fachliche Primärdatei (siehe `00_GH_DOCUMENT_MAP.md`, Grundregel).
- Governance (was Claude/ein Agent selbstständig darf) bleibt ausschließlich in `12_AI_SYSTEM/03_github-autonomy.md` geregelt. Rollen- und Agent-Dateien hier referenzieren diese Datei, sie duplizieren oder überschreiben sie nicht.

## Struktur im Überblick

| Ordner | Inhalt |
|---|---|
| `00_growth-team-overview.md` | diese Datei — Primärdatei für die Gesamtstruktur |
| `01_LEVEL_1_MANAGEMENT/` | Führungsrollen: Growth Director, Brand Manager, Operations Manager |
| `02_LEVEL_2_TEAMS/` | Fachteams: SEO, Local SEO, Content, Conversion, Google Ads, Social Media, Framer/Web, QA |
| `03_RESPONSIBILITIES/` | Verantwortlichkeits-Matrix (welches Team ist wofür zuständig) |
| `04_HANDOFFS/` | Übergabeprinzipien und wiederverwendbares Übergabe-Template |
| `_TEMPLATES/` | Kanonische Rollen-/Agent-Vorlagen, aus denen jede Rollen-Datei erzeugt wurde |

Jede Rolle/jedes Team hat einen eigenen Unterordner mit zwei Dateien:

- `role-description.md` — Mandat, Verantwortungsbereich, KPIs, Schnittstellen (geschäftliche Sicht)
- `agent.md` — operative Agent-Definition (Pflichtdateien, Arbeitsweise, Freigaben/Grenzen, Übergabe, Output-Format)

## Verwandte Dateien

- `00_GH_DOCUMENT_MAP.md` — Primärdatei-Zuordnung (registriert diese Struktur)
- `00_GH_MASTER_CONTEXT.md`, Abschnitt 11 „Technisches System" — nennt „Agenten" bereits als GitHub-Bestandteil
- `12_AI_SYSTEM/03_github-autonomy.md` — Autonomiestufen, die jede Rolle referenziert
- `11_OPERATIONS/01_decision-log.md` — Entscheidung zur Einführung dieser Struktur
