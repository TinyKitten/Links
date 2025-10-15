# Links

A lightweight link hub powered by Preact + Vite with Tailwind CSS 4 and `tailwind-merge` for styling.

## Setup

```bash
npm install
```

## Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to preview the page.

## Build & Prerender

```bash
npm run build
npm run preview
```

`npm run build` runs Vite’s bundler and then executes `scripts/prerender.mjs`, which injects the statically rendered Preact app into `dist/index.html`.

## Key Files

- `src/App.tsx` – Root UI component rendering the TinyKitten profile copy (Japanese)
- `src/components/LinkButton.tsx` – External link button component
- `src/components/Symbol.tsx` – Header symbol component
- `src/index.css` – Tailwind CSS 4 + global styles
- `src/entry-client.tsx` – Client-side hydration entry
- `src/entry-server.tsx` – Server entry used for prerendering
- `scripts/prerender.mjs` – Post-build script that writes static HTML
- `public/icon.png` – Favicon
- `public/opengraph-image.png` – OGP / Twitter card preview image

## Vercel Deployment

Vercel automatically runs `npm run build` and serves the static output from `dist/`. The configuration lives in `vercel.json`; confirm the build command and output directory in “Build & Development Settings” if needed.
