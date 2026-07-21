/**
 * Strukturierte Inhalte der Homepage. Getrennt von `site.ts`
 * (Unternehmensstammdaten) — diese Datei enthält Homepage-spezifische
 * Texte/Reihenfolgen, damit künftige Seiten `site.ts` wiederverwenden
 * können, ohne Homepage-Copy mitzuschleppen (siehe
 * docs/architecture/content-flow.md).
 *
 * Quellen (nur bestätigte Angaben, siehe
 * docs/migration/current-homepage-inventory.md für die vollständige
 * Herleitung je Sektion):
 * - Leitclaim/Kernbotschaften: 01_BRAND/04_claims.md
 * - Kennzahlen: 02_COMPANY/02_trust-and-proof.md, 11_OPERATIONS/02_proof-register.md
 * - Leistungen: 03_OFFER/01_services.md
 * - Ablauf: 03_OFFER/02_customer-process.md
 * - Einwände/FAQ-Basis: 04_AUDIENCE/02_problems-and-objections.md
 * - Rechtliche Abgrenzung: 02_COMPANY/03_legal-boundaries.md
 *
 * FAQ- und Leistungsbeschreibungen sind redaktionell neu formuliert aus
 * diesen bestätigten Fakten (keine wörtliche Übernahme von der Live-Seite,
 * da technisch nicht einsehbar — siehe Inventar). Vor endgültiger
 * Veröffentlichung durch Ramin gegenlesen lassen.
 */

export const homepage = {
  hero: {
    eyebrow: "Kfz-Gutachter Hamburg",
    headline: "Dein Schaden. Deine Rechte. Unsere Gutachten.",
    subheadline: "Unfall gehabt? Wir sichern Deine Ansprüche.",
    supportingPoints: [
      "Schnell vor Ort. Präzise dokumentiert. Stark in der Regulierung.",
      "Damit Du kein Geld liegen lässt.",
    ],
  },

  trustBar: {
    stats: [
      { value: "< 60 Min.", label: "am Unfallort in Hamburg" },
      { value: "24 Std.", label: "bis zum fertigen Gutachten" },
      { value: "> 3 Mio. €", label: "durchgesetzter Schadenersatz" },
    ],
  },

  services: {
    intro:
      "Von der Unfallaufnahme bis zur Wertermittlung — ein Ansprechpartner für alle Schadenfragen rund um Dein Fahrzeug.",
    items: [
      {
        name: "Unfallgutachten",
        description:
          "Vollständige technische Dokumentation und Bezifferung Deines Unfallschadens.",
      },
      {
        name: "Schadengutachten",
        description:
          "Unabhängige Begutachtung von Fahrzeugschäden unabhängig von der Ursache.",
      },
      {
        name: "Wertgutachten",
        description:
          "Fundierte Wertermittlung Deines Fahrzeugs, z. B. für Kauf, Verkauf oder Versicherung.",
      },
      {
        name: "Kostenvoranschlag",
        description: "Nachvollziehbare Kostenschätzung für kleinere Schäden.",
      },
      {
        name: "Kaufberatung",
        description: "Technische Prüfung vor dem Fahrzeugkauf.",
      },
      {
        name: "Elektroauto-Gutachten",
        description:
          "Gutachten speziell für Elektrofahrzeuge, inklusive Batteriezustand.",
      },
      {
        name: "Fiktive Abrechnung",
        description:
          "Schaden auf Basis des Gutachtens abrechnen, ohne reparieren zu müssen.",
      },
      {
        name: "Wertminderung",
        description:
          "Bezifferung des Wertverlusts durch den Unfall als eigene Schadenposition.",
      },
      {
        name: "Nutzungsausfall",
        description:
          "Bezifferung der Entschädigung für die Zeit ohne Fahrzeug.",
      },
    ],
  },

  process: {
    intro:
      "Ein klarer Ablauf von der ersten Meldung bis zu Deinem fertigen Gutachten.",
    steps: [
      {
        title: "Melden",
        description: "Schaden per WhatsApp oder Telefon melden.",
      },
      {
        title: "Klären",
        description: "Wir klären gemeinsam die Ausgangssituation.",
      },
      {
        title: "Besichtigen",
        description: "Dein Fahrzeug wird vor Ort besichtigt und dokumentiert.",
      },
      {
        title: "Beziffern",
        description: "Schaden und Ansprüche werden fachlich beziffert.",
      },
      {
        title: "Regulieren",
        description:
          "Bei Bedarf Zusammenarbeit mit spezialisierten Partneranwälten.",
      },
    ],
  },

  rightsAfterAccident: {
    intro:
      "Nach einem Unfall entscheiden die ersten Schritte oft über Deinen Anspruch.",
    points: [
      {
        question: "Muss ich den Gutachter der Versicherung akzeptieren?",
        answer:
          "Nein. Bei einem unverschuldeten Unfall hast Du in der Regel das Recht, einen unabhängigen Gutachter Deiner Wahl zu beauftragen.",
      },
      {
        question: "Reicht ein Kostenvoranschlag der Werkstatt?",
        answer:
          "Ein Kostenvoranschlag deckt meist nur die Reparaturkosten ab — Wertminderung und Nutzungsausfall bleiben oft unberücksichtigt.",
      },
      {
        question: "Was ist, wenn die Versicherung zu wenig zahlt?",
        answer:
          "Ein unabhängiges Gutachten dokumentiert den Schaden nachvollziehbar und ist die fachliche Grundlage, um Kürzungen zu widersprechen.",
      },
    ],
  },

  damageExamples: {
    intro:
      "Konkrete, anonymisierte Schadenbeispiele folgen, sobald sie freigegeben sind.",
    items: [] as { title: string; description: string; amount?: string }[],
  },

  reviews: {
    intro: "Was Kunden über die Zusammenarbeit sagen.",
    ratingSummary: undefined as
      { rating: number; reviewCount: number; source: string } | undefined,
    items: [] as { author: string; quote: string; rating?: number }[],
  },

  location: {
    intro: "Vor Ort in Hamburg — unter 60 Minuten nach Deiner Meldung.",
  },

  faq: {
    intro: "Häufige Fragen direkt nach dem Unfall.",
    items: [
      {
        question: "Was kostet mich das?",
        answer:
          "Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die Gutachterkosten. Wir klären Deine individuelle Situation direkt am Telefon oder per WhatsApp.",
      },
      {
        question: "Brauche ich wirklich einen Gutachter?",
        answer:
          "Bei mehr als einem kleinen Kratzer sichert ein unabhängiges Gutachten zusätzliche Ansprüche wie Wertminderung und Nutzungsausfall, die ein reiner Kostenvoranschlag nicht erfasst.",
      },
      {
        question: "Reicht nicht auch die Werkstatt?",
        answer:
          "Eine Werkstatt schätzt die Reparaturkosten. Ein Gutachten dokumentiert zusätzlich den vollständigen Schaden fachlich und unabhängig.",
      },
      {
        question: "Kann ich der Versicherung vertrauen?",
        answer:
          "Der von der Versicherung vorgeschlagene Gutachter arbeitet für die Versicherung. Ein unabhängiges Gutachten sichert Deine eigene Perspektive.",
      },
      {
        question: "Wie schnell geht das?",
        answer:
          "Wir sind meist unter 60 Minuten am Unfallort und liefern Dein Gutachten innerhalb von 24 Stunden.",
      },
      {
        question: "Muss ich mein Fahrzeug reparieren lassen?",
        answer:
          "Nein. Über die fiktive Abrechnung kannst Du den Schaden auf Basis des Gutachtens abrechnen, ohne reparieren zu müssen.",
      },
    ],
  },

  finalCta: {
    headline: "Jetzt Schaden sichern",
    body: "Schnell, unabhängig und direkt in Hamburg vor Ort.",
  },
} as const;

export type Homepage = typeof homepage;
