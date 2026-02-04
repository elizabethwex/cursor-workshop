import type { StepContent } from "./types.js";

const content: StepContent = {
  intent: "Preparing local environment…",
  systemMessage: "Preparing local environment…",
  whatYouDo: [
    "Copy the code from GitHub to your machine (clone)",
    "Open it in Cursor so you can see and edit it",
    "Run it locally to see the UI in your browser",
  ],
  tasks: [
    "Clone the repository in Cursor (Git: Clone, paste repo URL)",
    "Open the cloned project when prompted",
    "Run npm install in the integrated terminal",
    "Run npm run dev and open the URL in your browser",
  ],
  cursorPrompts: [
    "Why did this command fail?",
    "What does this error message mean?",
    "What should I try next?",
  ],
  successList: [
    "The code is on your machine and open in Cursor.",
    "You can see the app running at localhost in your browser.",
  ],
};

export default content;
