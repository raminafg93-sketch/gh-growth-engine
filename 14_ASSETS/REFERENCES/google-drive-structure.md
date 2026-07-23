# Google Drive Structure

```text
Gutachten Helden Growth/
├── BRAND/
├── PROOFS/
├── PHOTOS_VIDEO/
├── DATA_EXPORTS/
│   ├── SEARCH_CONSOLE/
│   ├── GOOGLE_ADS/
│   ├── ANALYTICS/
│   └── META/
├── DELIVERABLES/
└── BACKUPS/
```

GitHub enthält kleine operative Dateien. Drive enthält große Assets und vertrauliche Nachweise.

## Asset-Zustandsmodell

Jedes Asset (Foto/Video) durchläuft konzeptionell fünf Zustände, unabhängig davon, ob die Bearbeitung manuell oder — ab Phase 9 des Masterplans — automatisiert erfolgt:

| Zustand | Bedeutung | Typischer Ort |
|---|---|---|
| Rohmaterial | unbearbeitetes Original, noch nicht geprüft | `PHOTOS_VIDEO/` |
| In Bearbeitung | wird zu Content verarbeitet, noch nicht freigegeben | `PHOTOS_VIDEO/` |
| Freigegeben | Freigabe erfolgt (siehe `16_CONTENT_PRODUCTION_SYSTEM/04_WORKFLOWS/02_approval-principle.md`), noch nicht veröffentlicht | `DELIVERABLES/` |
| Veröffentlicht | live auf einem Kanal | `DELIVERABLES/` |
| Archiviert | nicht mehr aktiv genutzt, aus Nachweis-/Verlaufsgründen aufbewahrt | `BACKUPS/` |

Dieses Zustandsmodell ist die einzige Primärquelle für Asset-Lebenszyklus-Zustände; `16_CONTENT_PRODUCTION_SYSTEM/` referenziert es, dupliziert es nicht.
