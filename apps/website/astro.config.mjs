// @ts-check
import { defineConfig } from "astro/config";

// Monorepo-Fundament-Phase: kein Deployment, keine Domain-Bindung.
// `site` (für Canonical-URLs/RSS) wird erst gesetzt, wenn eine Vercel-Preview
// oder Produktion vorbereitet wird — siehe docs/deployment/vercel-preparation.md.
export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
});
