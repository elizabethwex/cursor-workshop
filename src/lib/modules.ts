/**
 * Module registry for the Cursor Workshop.
 * Each module has id, title, route, iconKey and functions unlocksWhen(progress), isComplete(progress).
 *
 * Unlock rules:
 * - welcome: always available (start here).
 * - checklist, resources: always available so users can jump to progress or links anytime.
 * - All other modules: locked until welcome is complete.
 */

import type { Progress } from "./progress";

export interface Module {
  id: string;
  title: string;
  route: string;
  iconKey: string;
  /** OS-style label for desktop launcher, e.g. "WELCOME" → "WELCOME.app". */
  appLabel: string;
  /** True if this module can be opened given current progress. */
  unlocksWhen: (progress: Progress) => boolean;
  /** True if this module is complete (e.g. user has visited it). */
  isComplete: (progress: Progress) => boolean;
}

const BASE = "/cursor-workshop";

function welcomeComplete(progress: Progress): boolean {
  return progress.completedModuleIds.includes("welcome");
}

export const MODULES: Module[] = [
  {
    id: "welcome",
    title: "Welcome",
    route: `${BASE}/welcome/`,
    iconKey: "welcome",
    appLabel: "WELCOME",
    unlocksWhen: () => true,
    isComplete: (p) => p.completedModuleIds.includes("welcome"),
  },
  {
    id: "github-basics",
    title: "GitHub basics",
    route: `${BASE}/github/`,
    iconKey: "github",
    appLabel: "GITHUB",
    unlocksWhen: (p) => welcomeComplete(p),
    isComplete: (p) => p.completedModuleIds.includes("github-basics"),
  },
  {
    id: "clone-and-run",
    title: "Clone and run",
    route: `${BASE}/clone-and-run/`,
    iconKey: "clone",
    appLabel: "LOCALHOST",
    unlocksWhen: (p) => welcomeComplete(p),
    isComplete: (p) => p.completedModuleIds.includes("clone-and-run"),
  },
  {
    id: "explore-cursor",
    title: "Explore Cursor",
    route: `${BASE}/explore-cursor/`,
    iconKey: "explore",
    appLabel: "CURSOR",
    unlocksWhen: (p) => welcomeComplete(p),
    isComplete: (p) => p.completedModuleIds.includes("explore-cursor"),
  },
  {
    id: "contribution",
    title: "Contribution",
    route: `${BASE}/contribution/`,
    iconKey: "contribution",
    appLabel: "CONTRIBUTION",
    unlocksWhen: (p) => welcomeComplete(p),
    isComplete: (p) => p.completedModuleIds.includes("contribution"),
  },
  {
    id: "checklist",
    title: "Checklist",
    route: `${BASE}/checklist/`,
    iconKey: "checklist",
    appLabel: "CHECKLIST",
    unlocksWhen: () => true,
    isComplete: (p) => p.completedModuleIds.includes("checklist"),
  },
  {
    id: "resources",
    title: "Resources",
    route: `${BASE}/resources/`,
    iconKey: "resources",
    appLabel: "RESOURCES",
    unlocksWhen: () => true,
    isComplete: (p) => p.completedModuleIds.includes("resources"),
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
