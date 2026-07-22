/**
 * Strukturierte Inhalte für /leistungen/unfallgutachten-hamburg.
 * Getrennt von homepage.ts, damit diese Seite eigenständig weiterentwickelt
 * werden kann, ohne die Homepage-Copy mitzuschleppen (siehe
 * docs/architecture/content-flow.md).
 *
 * Quellen (nur bestätigte Angaben — siehe auch apps/website/src/data/homepage.ts
 * für dieselbe Herleitung):
 * - Leitclaim/Kernbotschaften: 01_BRAND/04_claims.md
 * - Kennzahlen: 02_COMPANY/02_trust-and-proof.md, 11_OPERATIONS/02_proof-register.md
 * - Leistungen: 03_OFFER/01_services.md
 * - Ablauf: 03_OFFER/02_customer-process.md
 * - Einwände/FAQ-Basis: 04_AUDIENCE/02_problems-and-objections.md, 04_AUDIENCE/03_search-intents.md
 * - Rechtliche Abgrenzung: 02_COMPANY/03_legal-boundaries.md (keine Erfolgsgarantien,
 *   keine Darstellung als Rechtsanwaltskanzlei — durchgehend beachtet)
 *
 * Texte sind redaktionell eigenständig formuliert (nicht wortgleich mit
 * homepage.ts), um doppelte Aussagen auf derselben Website zu vermeiden,
 * bleiben aber inhaltlich konsistent zu den dort bereits freigegebenen Fakten.
 *
 * Interne Verlinkung dieser Seite (siehe Sprint-Auftrag "Interne Verlinkung"):
 * - Leistungen: externe Live-Website (site.websiteUrl + "/leistungen") — diese
 *   Seite existiert bereits live auf Framer, kein Astro-Duplikat, kein toter Link
 *   (gleiches Prinzip wie in ServiceOverview.astro).
 * - Deine Rechte / Der Ablauf / Häufige Fragen: In-Page-Anker auf dieser Seite
 *   (#rechte, #ablauf, #faq) — als Quick-Nav direkt umgesetzt.
 * - Kontakt: Anker auf der Homepage (/#standort) — einzige aktuell bestehende
 *   Kontakt-/Standort-Sektion im Astro-Referenzstand.
 * - Ratgeber/Blog (künftige Schadenpositionsseiten wie /ratgeber/wertminderung,
 *   /ratgeber/nutzungsausfall, /ratgeber/totalschaden, vgl.
 *   13_REPORTS/06_information-architecture.md Abschnitt A): Diese Routen
 *   existieren im Astro-Referenzstand noch nicht (nur content/blog/.gitkeep
 *   vorbereitet). Bewusst KEIN toter interner Link gesetzt — sobald diese
 *   Seiten existieren, hier verlinken (Kandidatentexte: "Mehr zur Wertminderung",
 *   "Mehr zum Nutzungsausfall", "Mehr zum Totalschaden" jeweils im Scope-
 *   Abschnitt bzw. in den passenden FAQ-Antworten).
 */

export const unfallgutachtenHamburg = {
  seo: {
    title: "Unfallgutachten Hamburg – Dein unabhängiger Kfz-Gutachter",
    description:
      "Unfallgutachten in Hamburg: unabhängig, unter 60 Minuten vor Ort, Gutachten in 24 Stunden. DGuSV-zertifiziert, über 3 Mio. € durchgesetzt. Jetzt Schaden sichern.",
  },

  hero: {
    eyebrow: "Kfz-Gutachter Hamburg",
    headline: "Unfallgutachten Hamburg: Dein Schaden. Deine Rechte. Unsere Gutachten.",
    subheadline:
      "Unfall in Hamburg gehabt? Wir sichern Deine Ansprüche mit einem unabhängigen Unfallgutachten.",
    supportingPoints: [
      "Schnell vor Ort. Präzise dokumentiert. Stark in der Regulierung.",
      "Damit Du kein Geld liegen lässt.",
    ],
  },

  quickNav: [
    { label: "Der Ablauf", href: "#ablauf" },
    { label: "Deine Rechte", href: "#rechte" },
    { label: "Häufige Fragen", href: "#faq" },
  ],

  trustBar: {
    stats: [
      { value: "< 60 Min.", label: "am Unfallort in Hamburg" },
      { value: "24 Std.", label: "bis zum fertigen Gutachten" },
      { value: "> 3 Mio. €", label: "durchgesetzter Schadenersatz" },
    ],
  },

  intro: {
    heading: "Warum ein unabhängiges Unfallgutachten in Hamburg zählt",
    paragraphs: [
      "Nach einem Autounfall in Hamburg entscheiden die ersten Schritte oft darüber, ob Du Deinen vollen Anspruch bekommst. Ein unabhängiges Unfallgutachten dokumentiert Deinen Schaden lückenlos und beziffert ihn fachlich — unabhängig davon, welchen Gutachter die gegnerische Versicherung Dir vorschlägt.",
      "Der von der Versicherung vorgeschlagene Gutachter arbeitet für die Versicherung. Ein unabhängiges Gutachten sichert Deine eigene Perspektive und ist die fachliche Grundlage für Deine Ansprüche.",
    ],
  },

  process: {
    heading: "Der Ablauf in 5 Schritten",
    intro: "Ein klarer Ablauf von der ersten Meldung bis zu Deinem fertigen Gutachten.",
    steps: [
      { title: "Melden", description: "Schaden telefonisch melden." },
      { title: "Klären", description: "Wir klären gemeinsam die Ausgangssituation." },
      {
        title: "Besichtigen",
        description: "Dein Fahrzeug wird vor Ort in Hamburg besichtigt und dokumentiert.",
      },
      { title: "Beziffern", description: "Schaden und Ansprüche werden fachlich beziffert." },
      {
        title: "Regulieren",
        description: "Bei Bedarf Zusammenarbeit mit spezialisierten Partneranwälten.",
      },
    ],
  },

  scope: {
    heading: "Das gehört zu Deinem Unfallgutachten",
    items: [
      {
        title: "Schadendokumentation",
        description:
          "Vollständige technische Dokumentation und Bezifferung Deines Unfallschadens — nachvollziehbar für Versicherung und ggf. Gericht.",
      },
      {
        title: "Wertminderung & Nutzungsausfall",
        description:
          "Wir beziffern den Wertverlust durch den Unfall als eigene Schadenposition und die Entschädigung für die Zeit ohne Dein Fahrzeug.",
      },
      {
        title: "Fiktive Abrechnung",
        description:
          "Auch ohne Reparaturauftrag sicherst Du Dir Deinen Anspruch: Die fiktive Abrechnung rechnet Deinen Schaden direkt auf Basis des Gutachtens ab.",
      },
    ],
  },

  trustSection: {
    heading: "Darum GutachtenHelden",
    intro:
      "Als DGuSV-zertifizierter Kfz-Sachverständiger mit Tätigkeit seit 2019 dokumentiere ich Deinen Schaden schnell, präzise und unabhängig — direkt in Hamburg vor Ort.",
  },

  objections: {
    heading: "Deine Rechte nach dem Unfall",
    intro: "Nach einem Unfall entscheiden die ersten Schritte oft über Deinen Anspruch.",
    items: [
      {
        title: "Freie Gutachterwahl",
        description:
          "Bei einem unverschuldeten Unfall entscheidest Du, wer Deinen Schaden begutachtet — nicht die Versicherung.",
      },
      {
        title: "Vollständige Schadenerfassung",
        description:
          "Ein Kostenvoranschlag deckt meist nur die Reparatur ab. Ein Gutachten erfasst zusätzlich Wertminderung und Nutzungsausfall.",
      },
      {
        title: "Fachliche Grundlage gegen Kürzungen",
        description:
          "Ein unabhängiges Gutachten dokumentiert Deinen Schaden nachvollziehbar — die Basis, um Kürzungen der Versicherung zu widersprechen.",
      },
    ],
  },

  faq: {
    heading: "Häufige Fragen zum Unfallgutachten in Hamburg",
    intro: "Antworten auf die häufigsten Fragen rund um Dein Unfallgutachten in Hamburg.",
    items: [
      {
        question: "Wer bezahlt den Gutachter?",
        answer:
          "Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die Kosten für das Unfallgutachten. Wir klären Deine individuelle Situation direkt am Telefon.",
      },
      {
        question: "Muss ich den Gutachter der Versicherung nehmen?",
        answer:
          "Nein. Bei einem unverschuldeten Unfall hast Du in der Regel das Recht, einen unabhängigen Gutachter Deiner Wahl zu beauftragen — zum Beispiel uns.",
      },
      {
        question: "Wie schnell bekomme ich das Gutachten?",
        answer:
          "Wir sind meist unter 60 Minuten am Unfallort in Hamburg und liefern Dein Gutachten innerhalb von 24 Stunden.",
      },
      {
        question: "Was passiert bei einem Totalschaden?",
        answer:
          "Bei einem Totalschaden ermitteln wir den Wiederbeschaffungswert und den Restwert Deines Fahrzeugs und dokumentieren die Schadenhöhe nachvollziehbar — die Grundlage für die weitere Regulierung mit der Versicherung.",
      },
      {
        question: "Was ist Nutzungsausfall?",
        answer:
          "Nutzungsausfall ist die Entschädigung für die Zeit, in der Du Dein Fahrzeug unfallbedingt nicht nutzen kannst — zum Beispiel während der Reparatur. Wir beziffern diesen Anspruch als eigene Schadenposition.",
      },
      {
        question: "Was ist Wertminderung?",
        answer:
          "Wertminderung beschreibt den Wertverlust, den Dein Fahrzeug durch den Unfall erleidet — auch nach einer fachgerechten Reparatur. Wir weisen diesen Anspruch fachlich nach.",
      },
      {
        question: "Was ist der Unterschied zwischen Kostenvoranschlag und Gutachten?",
        answer:
          "Ein Kostenvoranschlag der Werkstatt schätzt meist nur die Reparaturkosten. Ein unabhängiges Gutachten dokumentiert zusätzlich den vollständigen Schaden und sichert weitere Ansprüche wie Wertminderung und Nutzungsausfall.",
      },
      {
        question: "Was ist eine fiktive Abrechnung?",
        answer:
          "Über die fiktive Abrechnung rechnest Du den Schaden auf Basis des Gutachtens ab, ohne Dein Fahrzeug reparieren lassen zu müssen.",
      },
      {
        question: "Brauche ich bei jedem Unfall ein Gutachten?",
        answer:
          "Bei mehr als einem kleinen Kratzer sichert ein unabhängiges Gutachten zusätzliche Ansprüche, die ein reiner Kostenvoranschlag nicht erfasst. Bei sehr kleinen Schäden klären wir gemeinsam, ob sich ein Gutachten lohnt.",
      },
      {
        question: "Was mache ich, wenn die Versicherung mein Gutachten kürzt oder anzweifelt?",
        answer:
          "Sprich uns direkt an — wir gehen die Kürzung gemeinsam mit Dir durch. Bei rechtlichen Streitfragen vermitteln wir bei Bedarf an spezialisierte Partneranwälte weiter.",
      },
      {
        question: "Was mache ich direkt nach dem Unfall in Hamburg?",
        answer:
          "Sichere zuerst die Unfallstelle ab, halte Kontaktdaten und Schäden möglichst mit Fotos fest und melde Dich anschließend bei uns — wir klären die nächsten Schritte gemeinsam mit Dir.",
      },
      {
        question: "Was, wenn ich selbst schuld am Unfall war?",
        answer:
          "In diesem Fall läuft die Schadenregulierung meist über Deine eigene Kaskoversicherung. Sprich uns direkt an — wir klären Deine individuelle Situation.",
      },
      {
        question: "Arbeitet ihr auch mit Rechtsanwälten zusammen?",
        answer:
          "Ja. Bei Bedarf arbeiten wir mit spezialisierten Partneranwälten zusammen, insbesondere wenn es um die rechtliche Durchsetzung Deiner Ansprüche geht. Individuelle Rechtsberatung erfolgt durch den Rechtsanwalt.",
      },
      {
        question: "Kann ich das Gutachten auch für den Verkauf oder Kauf meines Fahrzeugs nutzen?",
        answer:
          "Für Kauf oder Verkauf empfiehlt sich ein eigenständiges Wertgutachten oder eine Kaufberatung — sprich uns gerne zusätzlich zu Deinem Unfallgutachten darauf an.",
      },
      {
        question: "Ist eine Begutachtung auch am Wochenende möglich?",
        answer: "Ja. Wir sind täglich von 08:00 bis 22:00 Uhr erreichbar und bieten einen 24/7-Service.",
      },
      {
        question: "Muss der Unfall in Hamburg passiert sein, damit ihr helfen könnt?",
        answer:
          "Wir sind vor Ort in Hamburg tätig. Sprich uns direkt an, dann klären wir, ob wir Dir bei Deinem Schaden helfen können.",
      },
      {
        question: "Wie melde ich meinen Schaden am schnellsten?",
        answer:
          "Am schnellsten erreichst Du uns telefonisch — wir klären die ersten Schritte direkt am Telefon und vereinbaren zeitnah einen Termin zur Besichtigung.",
      },
    ],
  },

  finalCta: {
    headline: "Jetzt Schaden sichern",
    body: "Schnell, unabhängig und direkt in Hamburg vor Ort.",
  },
} as const;

export type UnfallgutachtenHamburg = typeof unfallgutachtenHamburg;
