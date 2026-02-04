# Cursor Workshop App — Requirements & Brief

## Overview

This project is an interactive, playful onboarding guidebook for designers learning to use **Cursor** and **GitHub**.  
It is designed as an **async, self-guided experience** that helps designers move from zero setup to making a real code contribution.

The app should feel like a system coming online: alive, encouraging, and confidence-building — not like documentation.

Primary outcome: designers successfully run the project on `localhost` **and** make a small GitHub contribution using Cursor.

---

## Core Goals

1. Onboard designers to:
   - Cursor (as a creative partner, not just an editor)
   - GitHub (as a place to contribute, not just store code)

2. Get users to a working local environment by:
   - Cloning the repo
   - Opening it in Cursor
   - Running `npm install`
   - Running `npm run dev`
   - Viewing the app on `localhost`

3. Reinforce learning through:
   - Interactive checklists
   - Lightweight gamification (badges, progress, status)
   - Clear affirmation at key milestones

4. End with a **real contribution**:
   - User adds themselves (avatar + name) or a small creative change
   - Contribution is made via GitHub (branch + commit + PR)

---

## Target Audience

- Product / UX / Visual designers
- Beginner to low-confidence coders
- Comfortable with tools, unfamiliar with developer workflows
- Likely anxious about "breaking things"

The app should assume intelligence, not prior coding experience.

---

## Experience Principles

- **Playful, not gimmicky**
- **Scannable, not verbose**
- **Encouraging, not instructional**
- **Real outcomes, not simulations**

Avoid:
- Dense documentation
- Excessive terminal roleplay
- Long typing animations
- "Gamification for its own sake"

---

## Information Architecture

### Phases of the Experience

1. **Boot / Orientation**
   - What Cursor is
   - What GitHub is
   - Why designers should care
   - Install prerequisites (Cursor, Git, Node)

2. **Repo & Tools**
   - Clone this repo
   - Open it in Cursor
   - Understand basic project structure (high level)

3. **Localhost Activation**
   - Run `npm install`
   - Run `npm run dev`
   - Confirm local server is running

4. **Cursor as Partner**
   - Use Cursor to explain code
   - Use Cursor to modify a small design-related value
   - Optional experiments

5. **Contribution**
   - Add self to a contributors board OR
   - Make a small, scoped creative change
   - Commit and open a PR

---

## Functional Requirements

### Interactive Checklist
- Each step must be checkable by the user
- Checklist state must persist via `localStorage`
- Completed steps should visually collapse or mark progress

### Progress & Status
- Display overall progress (percentage or stages)
- Show system-like status indicators (e.g. Repo: Connected, Localhost: Online)
- Progress should unlock new sections

### Gamification
- Badges awarded for meaningful milestones (not every click)
- Badge state derived from completed steps
- Badges are identity markers, not rewards

### Persistence
- Progress, checklist state, and earned badges must persist across reloads
- Returning users should see a "welcome back" state

---

## Visual & Interaction Requirements

### Visual Style
- Bold color palette with strong contrast
- Neutral base with one or two saturated accent colors
- Abstract / symbolic illustrations (tools, glyphs, systems)
- No mascots or characters required

### Motion & Delight
- Subtle transitions tied to progress
- Typing animation used only for:
  - System messages
  - Section intros
  - Milestone affirmations
- Instructions and checklist text must remain static and scannable

### Tone of Voice
- Encouraging
- Confident
- Slightly mischievous
- Never condescending
- Never overly technical

---

## Contribution Flow Requirements

- Contribution must be **real**, not simulated
- Should be achievable with Cursor assistance
- Must be scoped to prevent breakage

### Preferred Option: Contributor Wall
- User adds name + avatar to a shared data file
- App renders contributors visually
- Clear instructions for:
  - Creating a branch
  - Making a commit
  - Opening a PR

Optional:
- Bonus creative widgets or small UI tweaks

---

## Technical Constraints

- Must be hostable on **GitHub Pages**
- No backend required
- Browser-only persistence (localStorage)
- Safe for beginners to modify without breaking the app

---

## Success Criteria

The onboarding is successful if:
- A designer with no prior setup completes the flow
- The app runs locally on their machine
- They use Cursor to make a code change
- They submit a real GitHub contribution
- They leave feeling capable, not exhausted

---

## Non-Goals

- Teaching JavaScript or React in depth
- Covering all Git concepts
- Perfect accessibility compliance in v1
- Advanced error handling for every edge case

---

## Open Questions / Future Enhancements

- Verification of local setup (optional script?)
- Optional sound design
- Team-specific extensions or badges
- Post-onboarding next steps

---

_End goal: designers who no longer see code as "other," but as a medium they can shape._
