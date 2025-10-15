import { readFileSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const templatePath = resolve(distDir, "index.html");
const serverDir = resolve(distDir, "server");

const run = async () => {
  const template = readFileSync(templatePath, "utf-8");

  let files;
  try {
    files = readdirSync(serverDir);
  } catch {
    throw new Error("SSR bundle not found in dist/server. Did you run `vite build --ssr`?");
  }

  const entryFile = files.find((file) =>
    /^entry-server\.(mjs|cjs|js)$/i.test(file)
  );

  if (!entryFile) {
    throw new Error("Unable to locate SSR entry (expected entry-server.{mjs,cjs,js}).");
  }

  const entryModulePath = resolve(serverDir, entryFile);
  const { render } = await import(entryModulePath);

  const appHtml = await render();
  const renderedHtml = template.replace(
    '<div id="app"></div>',
    `<div id="app">${appHtml}</div>`
  );

  writeFileSync(templatePath, renderedHtml, "utf-8");

  rmSync(serverDir, { recursive: true, force: true });
};

run().catch((error) => {
  console.error("[prerender] failed:", error);
  process.exitCode = 1;
});
