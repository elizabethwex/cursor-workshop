/**
 * Module registry for the Cursor Workshop.
 * Each module has id, title, route, iconKey and functions unlocksWhen(progress), isComplete(progress).
 *
 * Unlock rules (one at a time, building on each other):
 * - welcome: always available (start here).
 * - github-basics: when welcome is complete.
 * - clone-and-run: when github-basics is complete.
 * - explore-cursor: when clone-and-run is complete.
 * - contribution: when explore-cursor is complete.
 * - checklist, resources: always available so users can jump to progress or links anytime.
 */

import type { Progress } from "./progress";

export interface Module {
  id: string;
  title: string;
  route: string;
  iconKey: string;
  /** OS-style label for desktop launcher, e.g. "WELCOME" → "WELCOME.app". */
  appLabel: string;
  /** Module id that must be complete before this one unlocks; null if always available. */
  prerequisiteModuleId: string | null;
  /** True if this module can be opened given current progress. */
  unlocksWhen: (progress: Progress) => boolean;
  /** True if this module is complete (e.g. user has visited it). */
  isComplete: (progress: Progress) => boolean;
}

const BASE = "/cursor-workshop";

function hasCompleted(progress: Progress, moduleId: string): boolean {
  return progress.completedModuleIds.includes(moduleId);
}

export const MODULES: Module[] = [
  {
    id: "welcome",
    title: "Welcome",
    route: `${BASE}/welcome/`,
    iconKey: "welcome",
    appLabel: "WELCOME",
    prerequisiteModuleId: null,
    unlocksWhen: () => true,
    isComplete: (p) => hasCompleted(p, "welcome"),
  },
  {
    id: "github-basics",
    title: "GitHub basics",
    route: `${BASE}/github/`,
    iconKey: "github",
    appLabel: "GITHUB",
    prerequisiteModuleId: "welcome",
    unlocksWhen: (p) => hasCompleted(p, "welcome"),
    isComplete: (p) => hasCompleted(p, "github-basics"),
  },
  {
    id: "clone-and-run",
    title: "Clone and run",
    route: `${BASE}/clone-and-run/`,
    iconKey: "clone",
    appLabel: "LOCALHOST",
    prerequisiteModuleId: "github-basics",
    unlocksWhen: (p) => hasCompleted(p, "github-basics"),
    isComplete: (p) => hasCompleted(p, "clone-and-run"),
  },
  {
    id: "explore-cursor",
    title: "Explore Cursor",
    route: `${BASE}/explore-cursor/`,
    iconKey: "explore",
    appLabel: "CURSOR",
    prerequisiteModuleId: "clone-and-run",
    unlocksWhen: (p) => hasCompleted(p, "clone-and-run"),
    isComplete: (p) => hasCompleted(p, "explore-cursor"),
  },
  {
    id: "contribution",
    title: "Contribution",
    route: `${BASE}/contribution/`,
    iconKey: "contribution",
    appLabel: "CONTRIBUTION",
    prerequisiteModuleId: "explore-cursor",
    unlocksWhen: (p) => hasCompleted(p, "explore-cursor"),
    isComplete: (p) => hasCompleted(p, "contribution"),
  },
  {
    id: "checklist",
    title: "Checklist",
    route: `${BASE}/checklist/`,
    iconKey: "checklist",
    appLabel: "CHECKLIST",
    prerequisiteModuleId: null,
    unlocksWhen: () => true,
    isComplete: (p) => hasCompleted(p, "checklist"),
  },
  {
    id: "resources",
    title: "Resources",
    route: `${BASE}/resources/`,
    iconKey: "resources",
    appLabel: "RESOURCES",
    prerequisiteModuleId: null,
    unlocksWhen: () => true,
    isComplete: (p) => hasCompleted(p, "resources"),
  },
];

/**
 * Find the module whose route matches the given path (normalized: no trailing slash).
 */
export function getModuleByRoute(routeOrPath: string): Module | undefined {
  const normalized = routeOrPath.replace(/\/$/, "") || BASE;
  return MODULES.find((m) => {
    const modRoute = m.route.replace(/\/$/, "") || BASE;
    return modRoute === normalized || normalized === `${BASE}/${m.id}`;
  });
}

/**
 * Get module by id.
 */
export function getModuleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}
