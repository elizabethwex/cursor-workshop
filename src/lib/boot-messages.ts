/**
 * Boot screen messages: system init and per-module "launching" lines.
 * Used by BootOverlay for first-time system boot and per-app boot.
 * Keys align with module ids in modules.ts.
 */

export const SYSTEM_BOOT_LINES: string[] = [
  "> CURSOR_WORKSHOP v1.0",
  "> Loading environment...",
  "> Checking prerequisites: CURSOR, GIT, NODE",
  "> Session state: restored",
  "> Ready when you are.",
];

export const MODULE_BOOT_LINES: Record<string, string[]> = {
  welcome: [
    "> Loading WELCOME.app...",
    "> Initializing enrollment...",
    "> Ready.",
  ],
  "github-basics": [
    "> Loading GITHUB.app...",
    "> Connecting to repository...",
    "> Ready.",
  ],
  "clone-and-run": [
    "> Loading LOCALHOST.app...",
    "> Preparing local environment...",
    "> Ready.",
  ],
  "explore-cursor": [
    "> Loading CURSOR.app...",
    "> Initializing interface...",
    "> Ready.",
  ],
  contribution: [
    "> Loading CONTRIBUTION.app...",
    "> Preparing contributor workflow...",
    "> Ready.",
  ],
  checklist: [
    "> Loading CHECKLIST.app...",
    "> Retrieving program status...",
    "> Ready.",
  ],
  resources: [
    "> Loading RESOURCES.app...",
    "> Indexing reference materials...",
    "> Ready.",
  ],
};
