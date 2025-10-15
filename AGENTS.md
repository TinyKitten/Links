# Repository Guidelines

## Project Structure & Module Organization
- `src/App.tsx`, `src/entry-client.tsx`, `src/entry-server.tsx`: Preact root component (TinyKitten copy in Japanese) plus client hydration and SSR entry.
- `src/components/`: Reusable UI pieces such as `LinkButton.tsx` and `Symbol.tsx`.
- `src/index.css`: Tailwind CSS 4 setup and global styles.
- `public/`: Static assets served as-is (favicon `icon.png`, OGP image `opengraph-image.png`).
- `vite.config.ts`: Preact + Vite configuration, including the `@` alias to `src/`.

## Build, Test, and Development Commands
- `npm run dev`: Launch Vite dev server on http://localhost:5173 with hot reload.
- `npm run build`: Type-check, run `vite build`, emit an SSR bundle, and prerender `dist/index.html` via `scripts/prerender.mjs`.
- `npm run preview`: Serve the production bundle locally for smoke testing.
- `npm run lint`: Run ESLint on `src` with TypeScript + JSX rules.
## Coding Style & Naming Conventions
- Use TypeScript (`.ts`/`.tsx`) with `jsx: react-jsx` and `jsxImportSource: preact`.
- Prefer functional components with explicit prop types; export component files via PascalCase.
- Follow Tailwind utility classes for styling; use `tailwind-merge` when combining class strings.
- Let Prettier-like defaults be inferred from ESLint/TypeScript (2-space indentation, single quotes optional).
- Single-page routes are prerendered; add new pages by creating a server entry that returns HTML and registering it in the prerender script.

## Testing Guidelines
- No automated test suite exists yet. If adding tests, colocate them near source files (e.g., `src/components/LinkButton.test.tsx`) and document required tooling in `package.json`.
- Smoke-test UI changes by running `npm run dev` or `npm run preview` before submitting PRs.

## Commit & Pull Request Guidelines
- Match the existing short imperative Japanese commit style when appropriate (e.g., `hover挙動追加`).
- Group related changes per commit; include concise English summaries if the audience is broader.
- PRs should describe the motivation, key changes, manual test steps, and attach screenshots for visual tweaks.
- Link related issues or tickets and request review from maintainers familiar with Preact/Vite.
