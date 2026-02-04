/**
 * Shared shape for step content. Each step file exports an object matching this.
 */
export interface StepContent {
  intent: string;
  systemMessage: string;
  whatYouDo: string[];
  tasks: string[];
  cursorPrompts: string[];
  successList: string[];
}
