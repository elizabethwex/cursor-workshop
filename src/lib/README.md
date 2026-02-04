# Lib – modules and progress

## `progress.ts`

- **Progress** is `{ completedModuleIds: string[] }`, stored under `cursor-workshop-progress`.
- **getProgress()** / **setProgress()** – read/write full progress.
- **markModuleComplete(moduleId)** – mark a module as complete (e.g. when the user visits that route).
- **isModuleComplete(moduleId)** – whether that module is complete.

Use this as the single source for “has the user finished this module?” when deriving locked/available/complete in the UI.

## `modules.ts`

- **Module** has `id`, `title`, `route`, `iconKey`, **unlocksWhen(progress)**, **isComplete(progress)**.
- **MODULES** – array of all launcher modules (welcome, github-basics, clone-and-run, explore-cursor, contribution, checklist, resources).
- **getModuleByRoute(route)** – resolve current path to a module (for marking complete on page load).
- **getModuleById(id)** – lookup by id.

### Unlock rules

- **welcome**: always available (start here).
- **checklist**, **resources**: always available so users can open “Checklist” or “Resources” anytime without finishing Welcome first. This keeps the flow flexible and avoids blocking access to progress or links.
- **All other modules**: locked until **welcome** is complete (i.e. `progress.completedModuleIds` includes `"welcome"`).

### Integration

1. On each module page (or in the layout when the route is a module page), call **markModuleComplete(moduleId)** for the current module (e.g. get module via **getModuleByRoute(pathname)**).
2. Desktop launcher: for each module, call **unlocksWhen(getProgress())** and **isComplete(getProgress())** to set `data-status` (locked | available | complete) and optionally `aria-description` for “Start here” on welcome when available.
