/**
 * Content collections config. Step content is imported directly from
 * src/content/steps/*.ts (not via the content layer). This config defines
 * the "steps" collection so Astro does not auto-generate it.
 */
import { defineCollection } from "astro:content";

const steps = defineCollection({
  loader: async () => ({}),
});

export const collections = {
  steps,
};
