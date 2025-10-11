# Repository Guidelines

## Project Structure & Module Organization
Faithful Ventures uses the Next.js App Router. `app/` contains route segments such as `about/`, `portfolio/`, and shared layout code in `layout.tsx`; page-level styling lives in `app/globals.css`. Reusable UI lives in `components/` with PascalCase containers and Shadcn-inspired primitives under `components/ui/`. Utility hooks sit in `hooks/`, while `lib/utils.ts` centralizes helpers such as class name combiners. Static assets (logos, favicons) belong in `public/`. Update `components.json` when generating new UI primitives to keep the catalog in sync.

## Build, Test, and Development Commands
Use Node 18+ (matching Next 15). Typical flows:
- `npm run dev` (or `pnpm dev`) starts the local server on http://localhost:3000.
- `npm run build` compiles the production bundle and verifies type safety.
- `npm run start` runs the compiled build; use it to reproduce hosting behaviour.
- `npm run lint` executes `next lint` with the project ESLint config.
Run `npm install` before the first build; lockfiles for npm and pnpm are checked in, but default to npm for consistency.

## Coding Style & Naming Conventions
Write TypeScript everywhere; `.tsx` files for components and pages. Keep JSX indented with two spaces and prefer descriptive component props over magic strings. Name components and directories in PascalCase (`Navbar.tsx`), hooks in `camelCase` (`useToast`), and utility exports in `camelCase`. Tailwind classes should follow mobile-first ordering (layout → spacing → color). Run `npm run lint` before pushing; add inline comments only when behaviour is non-obvious.

## Testing Guidelines
No automated test runner ships yet. When contributing, cover changes with targeted `npm run lint`, interactive QA across key routes, and, when feasible, add React Testing Library specs under `app/__tests__/` mirroring the route structure. Document any manual scenarios in the pull request so reviewers can reproduce them quickly.

## Commit & Pull Request Guidelines
Commits in this repo follow short, imperative descriptions (`privacy policy`, `navbar fix`). Keep messages under ~60 characters and bundle related changes only. Pull requests should include: a concise summary, screenshots or Looms for UI updates, links to related issues, a checklist of commands run, and callouts for any TODOs or follow-ups. Request review once linting passes and preview links are ready.
