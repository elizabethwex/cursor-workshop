# Migration: Stepper → Module-based onboarding

## Files that implement stepper logic

| File | Stepper-related code |
|------|----------------------|
| **WorkshopLayout.astro** | `steps` array; `currentIndex` / `stepIndex` / `currentStep` / `prevStep` / `nextStep`; left `<aside>` with `workshop-step-list` and per-step links; footer "Step X of 7" and Previous/Next; script that pushes pathname to `VISITED_KEY` and adds `workshop-step--done` to visited links. |
| **index.astro** | Duplicate `steps` array passed to `<Desktop>`; `VISITED_KEY` in `hasProgress()` for welcome-back. |
| **Desktop.astro** | Receives `steps` (href, label, step number); renders icon grid; no unlock/status logic. |
| **global.css** | `.workshop-step*` (sidebar list, item, circle, --done, [aria-current]); footer layout. Level strip and status strip are progress-only, not step-index. |
| **Layout script** | `VISITED_KEY`; loop over `.workshop-step` to set `--done`. Level/status use `CHECKLIST_KEY` only. |
| **StepTasks.astro** | `stepId` → storage key `cursor-workshop-step-${stepId}-tasks`. Can be renamed to `moduleId` and key `cursor-workshop-module-${moduleId}-tasks`. |
| **Content pages** | Use `StepTasks stepId="02-github-basics"` etc. and content from `content/steps/01-welcome.ts` etc. No direct step index. |
| **Checklist.astro** | Uses checklist item IDs (`github-account`, `cloned-repo`, …); persistence `cursor-workshop-checklist`. No step index. |

## Smallest set of changes to migrate safely

1. **Add modules registry** – `src/data/modules.ts`: single source of truth with `id`, `title`, `route`, `description`, `unlockWhen` (checklist IDs), optional `statusHints`. Map current 7 steps to modules; `unlockWhen` drives locked/available.

2. **Layout** – Remove sidebar (`<aside>` and `workshop-step-list`). Remove `prevStep` / `nextStep` / `currentStep` and footer Previous/Next; simplify footer to e.g. "Back to desktop" or keep minimal. Keep header (level strip, status strip, theme). Keep script: keep `VISITED_KEY` (or rename to `cursor-workshop-visited-modules`), keep checklist/level/status logic; remove only the loop that adds `workshop-step--done`.

3. **Desktop** – Consume modules from registry. Derive status client-side: **locked** = `unlockWhen` not satisfied; **available** = `unlockWhen` satisfied and route not in visited; **complete** = route in visited. Render icons; locked = no link / disabled style; available + complete = link to `route`. Use `id` for icon/label (no step number). Optional: show small check for complete.

4. **Index** – Import registry; pass modules to `<Desktop>`. Optionally inject registry (or modules list) for client script so Desktop can compute status. Keep welcome-back logic using visited/progress.

5. **StepTasks** – Rename prop `stepId` → `moduleId`; storage key `cursor-workshop-module-${moduleId}-tasks`. Content pages: pass `moduleId` (e.g. `welcome`, `github-basics`) instead of `stepId`; keep same content file imports.

6. **Content pages** – Replace `stepId` with `moduleId` in `<StepTasks>`. No route or content file changes.

7. **CSS** – Remove `.workshop-step*` and sidebar layout; keep `.step-card`, `.step-intent`, `.step-tasks`, `.step-success`. Adjust footer styles for simplified footer.

8. **Persistence** – Keep `cursor-workshop-checklist` and `cursor-workshop-visited-steps` (or rename to `cursor-workshop-visited-modules`). Level strip and status strip unchanged. Module status = f(visited, checklist, unlockWhen).

## Order of implementation

1. Create `src/data/modules.ts` (registry).
2. Update `Desktop.astro` to take modules, support locked/available/complete (client script).
3. Update `WorkshopLayout.astro`: remove sidebar and prev/next; simplify footer; keep header and progress script.
4. Update `index.astro`: use registry, pass modules to Desktop.
5. Update `StepTasks.astro`: stepId → moduleId, storage key by moduleId.
6. Update content pages: StepTasks moduleId.
7. Remove stepper CSS; adjust footer.
