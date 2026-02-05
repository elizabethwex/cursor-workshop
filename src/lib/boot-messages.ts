/**
 * Boot screen messages: system init and per-module "launching" lines.
 * Used by BootOverlay for first-time system boot and per-app boot.
 * Keys align with module ids in modules.ts.
 */

export const SYSTEM_BOOT_LINES: string[] = [
  "> CURSOR_WORKSHOP v1.0",
  "> Loading environment...",
  "> Loading apps: GITHUB, LOCALHOST, CURSOR, CONTRIBUTION CHALLENGES",
  "> Session state: activated",
  "> Welcome to the Cursor Access Program.",
];

export const MODULE_BOOT_LINES: Record<string, string[]> = {
  welcome: [
    "> Loading WELCOME.app...",
    "> Initializing enrollment...",
    "> Ready.",
  ],
  "github-basics": [
    "> Loading GITHUB.app...",
    "> Prepare to become a GitHub ninja...",
    "> Ready.",
  ],
  "clone-and-run": [
    "> Loading LOCALHOST.app...",
    "> Prepare your local environment...",
    "> Ready.",
  ],
  "explore-cursor": [
    "> Loading CURSOR BASICS.app...",
    "> Prepare to learn the Cursor interface...",
    "> Ready.",
  ],
  contribution: [
    "> Loading CONTRIBUTION.app...",
    "> Prepare to make your first contribution...",
    "> Ready.",
  ],
  checklist: [
    "> Loading CHECKLIST.app...",
    "> Checking your progress...",
    "> Ready.",
  ],
  resources: [
    "> Loading RESOURCES.app...",
    "> Indexing reference materials...",
    "> Ready.",
  ],
};
