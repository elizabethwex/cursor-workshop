/**
 * Modules registry – single source of truth for onboarding modules.
 * Status (locked | available | complete) is derived client-side from
 * progress: visited routes + checklist state vs unlockWhen.
 */

export interface Module {
  id: string;
  title: string;
  route: string;
  description: string;
  /** Checklist item IDs that must be checked to unlock this module. */
  unlockWhen: string[];
  /** Optional hint for UI (e.g. "Requires GitHub account"). */
  statusHints?: Record<string, string>;
}

export const MODULES: Module[] = [
  {
    id: "welcome",
    title: "Welcome",
    route: "/cursor-workshop/welcome/",
    description: "Get started with the workshop.",
    unlockWhen: [],
  },
  {
    id: "github-basics",
    title: "GitHub basics",
    route: "/cursor-workshop/github/",
    description: "What is GitHub and why we use it.",
    unlockWhen: [],
  },
  {
    id: "clone-and-run",
    title: "Clone and run",
    route: "/cursor-workshop/clone-and-run/",
    description: "Clone the repo and run it locally.",
    unlockWhen: ["github-account"],
  },
  {
    id: "explore-cursor",
    title: "Explore Cursor",
    route: "/cursor-workshop/explore-cursor/",
    description: "Learn the Cursor interface.",
    unlockWhen: ["cloned-repo", "opened-cursor", "ran-localhost"],
  },
  {
    id: "contribution",
    title: "Contribution",
    route: "/cursor-workshop/contribution/",
    description: "Add yourself to the contributors board (name, team, role, avatar).",
    unlockWhen: ["cloned-repo", "opened-cursor", "ran-localhost"],
  },
  {
    id: "checklist",
    title: "Checklist",
    route: "/cursor-workshop/checklist/",
    description: "Track progress and badges.",
    unlockWhen: ["cloned-repo", "opened-cursor", "ran-localhost"],
  },
  {
    id: "resources",
    title: "Resources",
    route: "/cursor-workshop/resources/",
    description: "Links and next steps.",
    unlockWhen: [],
  },
];
