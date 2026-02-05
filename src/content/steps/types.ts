/**
 * Shared shape for step content. Each step file exports an object matching this.
 */
export interface StepContent {
  intent: string;
  systemMessage: string;
  /** One-sentence goal for the module (shown in goal panel). */
  goal: string;
  /** Estimated time to complete, e.g. "15 min", "20–30 min". */
  estimatedTime: string;
  whatYouDo: string[];
  tasks: string[];
  /** Section id per task (CollapsibleSection id); same length as tasks. */
  taskSectionIds?: string[];
  cursorPrompts: string[];
  successList: string[];
}
