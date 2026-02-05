/**
 * Welcome module content. Rendered by welcome.astro.
 */
export interface WelcomePrerequisiteItem {
  text: string;
  url?: string;
  note?: string;
}

export interface WelcomeContent {
  moduleMeta: {
    module: string;
    accessRequirement: string;
    completionUnlocks: string;
  };
  /** One-sentence goal (shown in goal panel). */
  goal: string;
  /** Estimated time, e.g. "5 min". */
  estimatedTime: string;
  systemMessages: string[];
  welcomeSection: {
    title: string;
    paragraphs: string[];
    learnListIntro: string;
    learnList: string[];
  };
  whatThisIsSection: {
    paragraphs: string[];
    learnListIntro: string;
    learnList: string[];
  };
  prerequisitesSection: {
    intro: string;
    items: WelcomePrerequisiteItem[];
    footer: string;
  };
  howProgressWorksSection: {
    paragraphs: string[];
  };
  beginEnrollmentSection: {
    intro: string;
    actionLabel: string;
    confirmationTitle: string;
    confirmationMessage: string;
  };
}

const content: WelcomeContent = {
  moduleMeta: {
    module: "WELCOME",
    accessRequirement: "None",
    completionUnlocks: "Observer",
  },
  goal: "Confirm enrollment and understand how the program works.",
  estimatedTime: "5–10 min",
  systemMessages: ["System initializing…", "Access granted."],
  welcomeSection: {
    title: "Welcome to the Cursor Access Program",
    paragraphs: [
      "This program is designed to help designers work directly with code.",
      "You do not need prior coding experience.",
      "You do need curiosity.",
    ],
    learnListIntro: "You'll learn how to:",
    learnList: [
      "Navigate a shared codebase",
      "Run a project on your local machine",
      "Use Cursor as a design partner",
      "Make a real contribution through GitHub",
    ],
  },
  whatThisIsSection: {
    paragraphs: [
      "This is not a tutorial in the traditional sense.",
      "You will not be asked to memorize syntax.",
      "Everything here is reversible.",
      "Nothing you do can permanently break the system.",
    ],
    learnListIntro: "Instead, you'll learn how to:",
    learnList: [
      "Move through unfamiliar systems safely",
      "Ask good questions of code",
      "Make small, confident changes",
      "Understand how your work fits into a larger workflow",
    ],
  },
  prerequisitesSection: {
    intro: "Before working in Cursor, you will need the following:",
    items: [
      {
        text: "Submit a ticket to access Cursor in Okta",
        url: "https://wexinc.atlassian.net/servicedesk/customer/portal/1016/create/3001",
      },
      {
        text: "Download the Cursor app",
        url: "https://cursor.com/download",
      },
      {
        text: "A GitHub account",
        note: "We will go over how to get access in the next module.",
      },
      { text: "Git installed" },
      {
        text: "Node.js installed",
        url: "https://nodejs.org/en/download",
      },
    ],
    footer: "If something is missing, you can return here at any time.",
  },
  howProgressWorksSection: {
    paragraphs: [
      "The program is divided into modules.",
      "Each completed module increases your access level and unlocks additional system capabilities.",
      "Progress is saved automatically.",
      "You may revisit any module at any time.",
    ],
  },
  beginEnrollmentSection: {
    intro: "When you're ready, confirm enrollment to unlock the next module.",
    actionLabel: "Confirm enrollment",
    confirmationTitle: "On confirmation:",
    confirmationMessage: "Enrollment complete. Access level upgraded: Observer",
  },
};

export default content;
