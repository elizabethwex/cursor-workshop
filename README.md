# Cursor Workshop

An interactive onboarding site for designers learning **Cursor** and **GitHub**. Hosted on GitHub Pages.

## Run locally

1. **Clone the repo** (if you haven’t already):

   ```bash
   git clone https://github.com/your-username/cursor-workshop.git
   cd cursor-workshop
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the dev server:**

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (e.g. `http://localhost:4321`) in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. To preview:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch; the workflow will build and deploy to GitHub Pages.

**Important:** In `astro.config.mjs`, set `site` to your GitHub Pages URL (e.g. `https://your-username.github.io`) so links work correctly on the live site.

## Content guide

Where to add your own getting-started content:

| Content | File or folder |
|--------|-----------------|
| Welcome / intro | `src/pages/index.astro` |
| GitHub basics copy | `src/pages/github.astro` |
| Clone-and-run steps | `src/pages/clone-and-run.astro` |
| Cursor interface tour (sidebar, command palette, chat, Composer) | `src/pages/explore-cursor.astro` |
| Checklist items | `src/components/Checklist.astro` – edit the `defaultItems` array |
| Resources / next steps | `src/pages/resources.astro` |
| Screenshots | Add images under `public/images/` (e.g. `public/images/cursor-sidebar.png`), then reference them in pages with `<img src="/cursor-workshop/images/cursor-sidebar.png" alt="…" />` |

## Project structure

```
cursor-workshop/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── public/                         # Static assets (favicon, images)
├── src/
│   ├── components/                 # CopyButton, StepCard, Checklist
│   ├── layouts/WorkshopLayout.astro
│   ├── pages/                      # One .astro file per page
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## License

Use and adapt as needed for your team.
