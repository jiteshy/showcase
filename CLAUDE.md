# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + build for production (tsc && vite build)
npm run lint       # ESLint (zero warnings allowed)
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages (gh-pages branch)
```

There are no tests in this project.

## Architecture

Single-page portfolio site built with React 18 + TypeScript + Vite + Tailwind CSS.

**Layout** (`src/pages/Index.tsx`): Two-column card layout — left sidebar (`Hero` + `Social`) and right main content (`Projects`, `MediumPosts`, `Contributions`), wrapped in `Footer`.

**All content is driven by environment variables** (not hardcoded). Copy `.env.example` to `.env` and fill in values before running. Key variable groups:
- `VITE_PROJECT_1_*` / `VITE_PROJECT_2_*` — project cards (title, description, GitHub URL, app URL, comma-separated tags)
- `VITE_MEDIUM_ARTICLE_1_*` / `VITE_MEDIUM_ARTICLE_2_*` — blog post entries (title, URL, date)
- `VITE_LINKEDIN_URL`, `VITE_GITHUB_URL`, `VITE_MEDIUM_URL`, `VITE_GITHUB_USERNAME` — social links
- `VITE_GITHUB_REPOSITORIES_URL` — link on the Projects section header
- `VITE_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID

**GitHub contributions chart** (`Contributions.tsx`) fetches from `https://ghchart.rshah.org/{VITE_GITHUB_USERNAME}` — requires a valid username and internet access.

**Path alias**: `@/` maps to `src/` (configured in Vite/TS).

**Routing**: React Router v6 with only two routes — `/` (Index) and `*` (NotFound). Add new routes above the catch-all in `src/App.tsx`.
