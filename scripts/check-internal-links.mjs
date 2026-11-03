import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const buildRoot = join(process.cwd(), ".next", "server", "app");
const publicRoot = join(process.cwd(), "public");
const productionOrigin = "https://www.tornrosbygg.se";

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
    const url = new URL(href, `${productionOrigin}/${source.replace(/(?:index)?\.html$/, "")}`);
    if (url.hostname !== "tornrosbygg.se" && url.hostname !== "www.tornrosbygg.se") continue;
    if (url.pathname.startsWith("/_next/")) continue;
    checked++;
    if (url.origin !== productionOrigin || (url.pathname !== "/" && url.pathname.endsWith("/"))) {
      const sources = missing.get(`Icke-slutlig URL: ${url.href}`) || new Set();
      sources.add(source);
      missing.set(`Icke-slutlig URL: ${url.href}`, sources);
    }
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
  console.error(`${missing.size} interna länkmål saknas eller använder icke-slutliga URL:er:`);
  for (const [target, sources] of missing) {
    console.error(`- ${target} (från ${[...sources].join(", ")})`);
  }
  process.exit(1);
}

console.log(`${checked} interna länkar kontrollerade på ${pages.length} sidor. Alla mål finns.`);
