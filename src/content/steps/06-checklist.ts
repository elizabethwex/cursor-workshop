import type { StepContent } from "./types.js";

const content: StepContent = {
  intent: "System status summary.",
  systemMessage: "System status summary.",
  goal: "Review your progress and see which modules are complete.",
  estimatedTime: "2 min",
  whatYouDo: [
    "Review which modules you've completed",
    "Return to Desktop or revisit any module",
  ],
  tasks: [],
  cursorPrompts: [],
  successList: [
    "All core modules complete. Access level: Cleared.",
  ],
};

export default content;
