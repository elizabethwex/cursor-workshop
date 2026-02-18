// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// For GitHub Pages project site: repo cursor-workshop → https://<org-or-user>.github.io/cursor-workshop/
// Local dev: base "/" so http://localhost:4321/ works; production: base "/cursor-workshop/" for GitHub Pages
export default defineConfig({
  site: "https://elizabethwex.github.io",
  base: process.env.NODE_ENV === "production" ? "/cursor-workshop/" : "/",
});
