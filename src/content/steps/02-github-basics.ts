import type { StepContent } from "./types.js";

const content: StepContent = {
  intent: "Get access to GitHub and familiarize yourself with GitHub basics.",
  systemMessage: "System check: GitHub context loaded.",
  whatYouDo: [
    "Request access to the GitHub EMU via the WEX service desk.",
    "Understand repositories, branches, commits, and pull requests.",
    "Set up SSH in Cursor for secure authentication.",
  ],
  tasks: [
    "Submit a ticket to request access to the GitHub EMU",
    "Understand repository, main branch, branch, commit, and pull request",
    "Generate an SSH key in Cursor and add it to your GitHub account",
    "Confirm SSH connection (e.g. clone using SSH URL)",
  ],
  cursorPrompts: [],
  successList: [
    "You understand GitHub's role and how access works at WEX.",
    "You have a path to authenticate securely (SSH).",
    "Ready to move on to LOCALHOST.",
  ],
};

export default content;
