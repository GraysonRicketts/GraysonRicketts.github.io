# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

There are no tests or linting scripts configured.

## Architecture

Astro 6 static site with Tailwind CSS v4 and MDX, deployed to GitHub Pages via `.github/workflows/deploy.yml`.

**Path aliases** (defined in `tsconfig.json`):
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

**Layouts:** `Base.astro` is the root shell — it handles the dark mode FOUC prevention script, font loading, and wraps all pages with `Header` + `Footer`. `ArticleLayout.astro` extends it for prose content.

**Content collections** (`src/content.config.ts`):
- `projects` — JSON files in `src/content/projects/`. Schema: `title`, `description`, `url`, `repoUrl?`, `gif?`, `featured`, `order`. Sorted by `order`, filtered by `featured` for the homepage.
- `writing` — MD/MDX files in `src/content/writing/` (collection defined but directory not yet populated). Schema includes `title`, `description`, `publishDate`, `draft`, `featured`.

**Styling:** Tailwind v4 with `@theme` customization in `src/styles/global.css`. Design tokens: zinc palette for surfaces, orange for accent/links. Dark mode uses a `.dark` class on `<html>` toggled by `ThemeToggle.astro` and persisted in `localStorage`.

**Stripe Visualizer page** (`src/pages/stripe-visualizer.astro`) is a shell that loads a pre-built React app from `public/stripe-visualizer/assets/` — it does not use the `Base` layout and is built/maintained separately.
