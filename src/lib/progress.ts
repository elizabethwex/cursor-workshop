/**
 * Progress persistence by module id.
 * Stored in localStorage; used by the module registry for unlock/complete state.
 */

const STORAGE_KEY = "cursor-workshop-progress";

export interface Progress {
  /** Module ids that the user has completed (e.g. visited that module page). */
  completedModuleIds: string[];
}

const defaultProgress: Progress = {
  completedModuleIds: [],
};

/**
 * Read progress from localStorage.
 */
export function getProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.completedModuleIds)) {
      return { ...defaultProgress };
    }
    return {
      completedModuleIds: [...parsed.completedModuleIds].filter((id) => typeof id === "string"),
    };
  } catch {
    return { ...defaultProgress };
  }
}

/**
 * Write progress to localStorage.
 */
export function setProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

/**
 * Mark a module as complete (e.g. when the user visits that module's route).
 */
export function markModuleComplete(moduleId: string): void {
  const p = getProgress();
  if (p.completedModuleIds.includes(moduleId)) return;
  p.completedModuleIds.push(moduleId);
  setProgress(p);
}

/**
 * Return whether the given module is complete.
 */
export function isModuleComplete(moduleId: string): boolean {
  return getProgress().completedModuleIds.includes(moduleId);
}
