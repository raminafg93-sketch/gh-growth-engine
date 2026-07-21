/**
 * Zentrale, typisierte Unternehmenskonfiguration.
 *
 * Primärdatei für diese Werte ist `00_GH_MASTER_CONTEXT.md` /
 * `02_COMPANY/01_company-facts.md` im Repository-Root. Diese Datei übernimmt
 * ausschließlich dort eindeutig freigegebene Angaben — sie erfindet nichts.
 *
 * Werte, die im Wissenssystem noch nicht bestätigt sind, sind `null` und mit
 * `status: "missing"` markiert. Sie dürfen nicht produktiv ausgegeben werden,
 * bevor Ramin sie in `02_COMPANY/01_company-facts.md` bestätigt.
 */

export interface MissingValue {
  readonly value: null;
  readonly status: "missing";
  readonly note: string;
}

export interface ConfirmedValue<T> {
  readonly value: T;
  readonly status: "confirmed";
}

export type Field<T> = ConfirmedValue<T> | MissingValue;

function missing(note: string): MissingValue {
  return { value: null, status: "missing", note };
}

/** True nur, wenn der Wert bestätigt ist — für sichere Ausgabe in Templates. */
export function isConfirmed<T>(field: Field<T>): field is ConfirmedValue<T> {
  return field.status === "confirmed";
}

const phoneDisplay = "+49 173 408 64 20";
const phoneHref = `tel:${phoneDisplay.replace(/\s+/g, "")}`;

export const site = {
  companyName: "KFZ-GutachtenHelden",
  brandName: "Gutachten Helden",
  owner: "Ramin Gulzari",
  legalForm: "Freiberufler",

  websiteUrl: "https://www.kfz-gutachtenhelden.de",

  phone: {
    display: phoneDisplay,
    href: phoneHref,
  },
  email: "info@kfz-gutachtenhelden.de",

  whatsapp: missing(
    "Keine eigenständige WhatsApp-Nummer/-Link in 02_COMPANY/01_company-facts.md bestätigt. " +
      "Vor produktiver Nutzung mit Ramin klären, ob die Telefonnummer auch die WhatsApp-Nummer ist.",
  ) as Field<{ href: string; display: string }>,

  address: {
    official: "Drehbahn 5, 20354 Hamburg",
    office: "Holzdamm, Hamburg",
  },

  hours: "täglich 08:00–22:00 Uhr",
  service247: true,

  serviceArea: "Hamburg",

  social: missing(
    "Keine Social-Media-Links in 00_GH_MASTER_CONTEXT.md oder 02_COMPANY/01_company-facts.md bestätigt.",
  ) as Field<{ instagram?: string; facebook?: string }>,

  seoDefaults: {
    title: "KFZ-GutachtenHelden | Kfz-Gutachter Hamburg",
    description:
      "Dein Schaden. Deine Rechte. Unsere Gutachten. Unfallgutachten, Schadengutachten und Wertgutachten in Hamburg — schnell vor Ort, präzise dokumentiert.",
  },

  cta: {
    primary: "Schaden per WhatsApp senden →",
    secondary: "Jetzt anrufen →",
  },

  qualifications: [
    "M. Sc. Maschinenbauingenieur",
    "Mitglied im DGuSV",
    "DGuSV-zertifiziert",
    "zertifizierter Kfz-Sachverständiger",
    "Tätigkeit seit 2019",
  ],

  proofClaims: [
    "unter 60 Minuten am Unfallort",
    "Gutachten innerhalb von 24 Stunden",
    "über 3 Mio. € Schadenersatz",
  ],
} as const;

export type Site = typeof site;
