import type { StepContent } from "./types.js";

const content: StepContent = {
  intent: "Cursor interface active.",
  systemMessage: "Cursor interface active.",
  whatYouDo: [
    "Open and read files using the file tree",
    "Search the project for words or phrases",
    "Ask Cursor about code in plain language",
    "Ask for or make a small change",
  ],
  tasks: [
    "Open a file from the file tree",
    "Use search to find a word or phrase in the project",
    "Ask Cursor at least one question about the code",
    "Make or consider a small change (e.g. text, color, variable name)",
  ],
  cursorPrompts: [
    "What does this file do?",
    "How does this affect the UI?",
    "Is this safe to change?",
    "Change this text to be more descriptive",
    "Update this color value",
    "Rename this variable to something clearer",
  ],
  successList: [
    "You've opened files, used search, and asked Cursor at least one question.",
    "You've made or considered a small change.",
  ],
};

export default content;
