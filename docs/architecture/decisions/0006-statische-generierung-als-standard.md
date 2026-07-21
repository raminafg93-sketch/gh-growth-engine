# 0006 – Statische Generierung als Standard

Status: entschieden (2026-07-21)

## Kontext

Astro unterstützt sowohl statische Generierung (SSG) als auch Server-Rendering (SSR).

## Entscheidung

`output: "static"` in `apps/website/astro.config.mjs`. SSR wird nicht ohne konkreten, begründeten Bedarf eingeführt.

## Begründung

- Eine Marketing-/Conversion-Website mit überwiegend redaktionellem Content braucht keinen Server-Runtime.
- Statische Seiten sind schneller, günstiger zu hosten und robuster (kein Server, der ausfallen kann).
- Passt zu "möglichst wenig clientseitiges JavaScript" und "Sicherheit vor Geschwindigkeit" aus der strategischen Leitlinie.

## Konsequenzen

- Formulare (`src/components/forms/`) brauchen später einen externen Endpunkt oder eine Serverless-Function (z. B. über Vercel Functions), nicht eine eingebaute Astro-SSR-Route — das wird erst beim tatsächlichen Formular-Bau entschieden.
