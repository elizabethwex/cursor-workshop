/**
 * Resources step: reference materials. No completion/tasks.
 */
export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

export interface ResourceGroup {
  heading: string;
  links: ResourceLink[];
}

const resourceGroups: ResourceGroup[] = [
  {
    heading: "Cursor",
    links: [
      { title: "Cursor Documentation", url: "https://docs.cursor.com" },
      { title: "Cursor Command Palette Overview", url: "https://docs.cursor.com", description: "Learn what commands are available and when to use them." },
      { title: "Asking Good Questions in Cursor", url: "https://docs.cursor.com", description: "Focus on describing intent, not implementation." },
    ],
  },
  {
    heading: "GitHub",
    links: [
      { title: "GitHub Docs", url: "https://docs.github.com" },
      { title: "Understanding Branches", url: "https://docs.github.com/en/get-started/quickstart/github-flow" },
      { title: "Pull Requests Explained", url: "https://docs.github.com/en/pull-requests" },
      { title: "GitHub Pages", url: "https://pages.github.com" },
    ],
  },
  {
    heading: "Git & Local Development",
    links: [
      { title: "Git Basics", url: "https://git-scm.com/doc" },
      { title: "Node.js Documentation", url: "https://nodejs.org/en/docs" },
      { title: "npm Commands Reference", url: "https://docs.npmjs.com" },
    ],
  },
];

export const resourcesGoal = "Optional reference materials for Cursor, GitHub, and local development.";
export const resourcesEstimatedTime = "As needed";

export default resourceGroups;
