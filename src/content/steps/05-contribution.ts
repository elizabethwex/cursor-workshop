import type { StepContent } from "./types.js";

const content: StepContent = {
  intent: "Contributor permissions available.",
  systemMessage: "Contributor permissions available.",
  goal: "Create a branch, make a change, commit, and open a pull request.",
  estimatedTime: "25–35 min",
  taskSectionIds: ["step-1-branch", "step-2-change", "step-3-commit", "step-4-pr"],
  whatYouDo: [
    "Create a new branch",
    "Make a small, safe change",
    "Commit your change",
    "Submit a pull request",
  ],
  tasks: [
    "Create a new branch (e.g. add-yourname)",
    "Make a small change (contributor entry or minor UI change)",
    "Commit your change with a short message",
    "Submit a pull request",
  ],
  cursorPrompts: [
    "What is a safe, beginner-friendly change I can make in this project?",
    "Where is the contributors file and what format should my entry be?",
    "How do I create a new branch in this repo?",
    "Give me the git commands to add, commit, push, and open a PR.",
  ],
  successList: [
    "Your pull request is open.",
    "You've participated in the core workflow.",
  ],
};

export default content;
