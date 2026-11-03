import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const buildRoot = join(process.cwd(), ".next", "server", "app");
const publicRoot = join(process.cwd(), "public");

if (!existsSync(join(buildRoot, "index.html"))) {
  console.error("Build saknas. Kör npm run build först.");
  process.exit(1);
}

function* htmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html") && !entry.name.startsWith("_")) yield path;
  }
}

const pages = [...htmlFiles(buildRoot)].filter((file) => !relative(buildRoot, file).split(sep).some((part) => part.startsWith("_")));
const missing = new Map();
let checked = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const source = relative(buildRoot, page);
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(?:mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const url = new URL(href, `https://tornrosbygg.se/${source.replace(/(?:index)?\.html$/, "")}`);
    if (url.origin !== "https://tornrosbygg.se") continue;
    if (url.pathname.startsWith("/_next/")) continue;
    checked++;
    const pathname = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";
    const target = pathname === "/" ? join(buildRoot, "index.html") : join(buildRoot, `${pathname.slice(1)}.html`);
    const asset = join(publicRoot, pathname.slice(1));
    if (!existsSync(target) && !existsSync(asset)) {
      const sources = missing.get(pathname) || new Set();
      sources.add(source);
      missing.set(pathname, sources);
    }
  }
}

if (missing.size) {
  console.error(`${missing.size} interna länkmål saknas efter byggning:`);
  for (const [target, sources] of missing) {
    console.error(`- ${target} (från ${[...sources].join(", ")})`);
  }
  process.exit(1);
}

console.log(`${checked} interna länkar kontrollerade på ${pages.length} sidor. Alla mål finns.`);
