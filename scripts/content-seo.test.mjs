import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { createServer } from "node:net";
import { join, relative, resolve, sep } from "node:path";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import test, { before, after } from "node:test";
import vm from "node:vm";
import ts from "typescript";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const root = resolve(import.meta.dirname, "..");
function load(file, imports = {}) {
  const source = readFileSync(join(root, file), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX,
  } }).outputText;
  const compiledModule = { exports: {} };
  vm.runInNewContext(compiled, { module: compiledModule, exports: compiledModule.exports, require: (name) => {
    assert.ok(Object.hasOwn(imports, name), `Unexpected import: ${name}`);
    return imports[name];
  } });
  return compiledModule.exports;
}
const data = load("src/content/projects.ts");
const expectedSlugs = [
  "renovering-namndemansgatan-solna", "tillbyggnad-sjovagen-solna",
  "nybyggnation-blanchevagen-danderyd", "badrum-frejgatan-stockholm",
  "attefallshus-sjovagen-solna", "poolbygge-sjovagen-solna", "servisbyte-dranering-solna",
];
// Frozen migration inventory, independent of the production redirect configuration.
const legacy = [
  ["/byggtips-2", "/byggtips"],
  ["/tjänster-för-privatpersoner", "/tjanster"],
  ["/tjänster-för-fastighetsägare", "/fastighetsagare"],
  ["/projekt-renovering-nämndemansgatan-solna", "/projekt/renovering-namndemansgatan-solna"],
  ["/projekt-tillbyggnad-solna", "/projekt/tillbyggnad-sjovagen-solna"],
  ["/projekt-nybyggnation-blanchevägen-danderyd", "/projekt/nybyggnation-blanchevagen-danderyd"],
  ["/projekt-badrum-frejgatan-stockholm", "/projekt/badrum-frejgatan-stockholm"],
  ["/projekt-attefallare-solna", "/projekt/attefallshus-sjovagen-solna"],
  ["/projekt-poolbygge-sjövägen-solna", "/projekt/poolbygge-sjovagen-solna"],
  ["/projekt-servisbyte-och-dränering", "/projekt/servisbyte-dranering-solna"],
];

let child, base, serverLog = "";
before(async () => {
  assert.ok(existsSync(join(root, ".next/BUILD_ID")), "Run npm run build first");
  const probe = createServer();
  await new Promise((resolve, reject) => { probe.once("error", reject); probe.listen(0, "127.0.0.1", resolve); });
  const port = probe.address().port;
  await new Promise((resolve) => probe.close(resolve));
  base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], { cwd: root, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
  child.stdout.on("data", (chunk) => { serverLog += chunk; });
  child.stderr.on("data", (chunk) => { serverLog += chunk; });
  child.on("error", (error) => { serverLog += error.message; });
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch(base)).ok) return; } catch { /* startup */ }
    if (child.exitCode !== null) break;
    await delay(100);
  }
  child.kill();
  throw new Error(`Local production server did not start: ${serverLog}`);
});
after(async () => {
  if (child && child.exitCode === null) {
    const closed = new Promise((resolve) => child.once("exit", resolve));
    child.kill();
    await closed;
  }
});

test("project facts, unique slugs and all image references match real local images", async () => {
  const published = data.getPublishedProjects();
  for (const slug of expectedSlugs) assert.ok(data.getProject(slug), `Missing original project ${slug}`);
  assert.equal(new Set(data.projects.map((p) => p.slug)).size, data.projects.length);
  const seen = new Set();
  for (const project of data.projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const value of [project.title, project.location, project.category, project.intro, project.details, project.seo.title, project.seo.description]) assert.ok(value.trim().length > 0);
    assert.ok(["draft", "published"].includes(project.status));
    assert.ok(project.service.href.startsWith("/tjanster/"));
    const images = [project.hero, ...project.gallery];
    assert.equal(new Set(images.map((image) => image.src)).size, images.length, `Duplicate in ${project.slug}`);
    for (const image of images) {
      assert.match(image.src, /^\/images\/projects\/[a-z0-9/-]+\.(?:jpeg|jpg|webp|png)$/);
      assert.ok(image.alt.trim());
      if (image.phase) assert.ok(["before", "during", "after"].includes(image.phase));
      const file = join(root, "public", image.src.slice(1));
      assert.ok(existsSync(file), image.src);
      if (!seen.has(image.src)) {
        const metadata = await sharp(file).metadata();
        assert.equal(image.width, metadata.width, image.src);
        assert.equal(image.height, metadata.height, image.src);
        seen.add(image.src);
      }
    }
  }
  assert.ok(published.length >= 7);
  const renovation = data.getProject(expectedSlugs[0]);
  assert.ok(renovation.highlights.some((text) => text.includes("Renovering av befintlig trappa")));
  assert.equal(renovation.gallery[0].phase, "during");
});

test("draft and unknown projects are excluded from lookup, static params and metadata", async () => {
  const draft = { ...data.projects[0], slug: "opublicerat-testprojekt", status: "draft" };
  const items = [...data.projects, draft];
  assert.equal(data.getProject(draft.slug, items), undefined);
  assert.equal(data.getProject("okant-projekt", items), undefined);
  assert.ok(!data.getPublishedProjects(items).some((p) => p.slug === draft.slug));
  const page = load("src/app/projekt/[slug]/page.tsx", {
    "react/jsx-runtime": { jsx: () => null },
    "next/navigation": { notFound: () => { throw new Error("EXPECTED_404"); } },
    "@/components/project-detail": { ProjectDetail: () => null },
    "@/content/projects": { ...data, getProject: (slug) => data.getProject(slug, items), getPublishedProjects: () => data.getPublishedProjects(items) },
  });
  assert.equal(page.dynamicParams, false);
  assert.ok(!page.generateStaticParams().some((p) => p.slug === draft.slug));
  for (const slug of [draft.slug, "okant-projekt"]) {
    const props = { params: Promise.resolve({ slug }) };
    await assert.rejects(page.default(props), /EXPECTED_404/);
    await assert.rejects(page.generateMetadata(props), /EXPECTED_404/);
  }
});

test("approved gallery selection is published once, with verified files and no repeated hero photos", async () => {
  const expected = {
    blanchevagen: [8, 14, 28], frejgatan: [1, 2, 6], namndemansgatan: [2, 7, 8],
    attefallshus: [3, 4], pool: [6], servisbyte: [5], tillbyggnad: [2],
  };
  const review = JSON.parse(readFileSync(join(root, "docs/project-image-review.json"), "utf8"));
  let added = 0, bytes = 0;
  for (const group of review) {
    assert.equal(group.rightsStatus, "owner-confirmed");
    assert.deepEqual(group.selected.filter((image) => image.usage === "gallery").map((image) => image.number), expected[group.project]);
    for (const image of group.selected.filter((image) => image.usage === "gallery")) {
      const file = readFileSync(join(root, "public", image.publicationAsset.slice(1)));
      assert.equal(createHash("sha256").update(file).digest("hex"), image.publicationSha256);
      const owners = data.getPublishedProjects().filter((project) => project.gallery.some((item) => item.src === image.publicationAsset));
      assert.equal(owners.length, 1, image.publicationAsset);
      const published = owners[0].gallery.find((item) => item.src === image.publicationAsset);
      assert.equal(published.width, image.publicationWidth);
      assert.equal(published.height, image.publicationHeight);
      assert.equal(published.alt, image.proposedAlt);
      assert.equal(published.phase, image.phase);
      assert.ok(published.width <= 1280 && published.height <= 1280);
      assert.ok(file.length < 400_000, image.publicationAsset);
      if ((group.project === "blanchevagen" && image.number === 28) || (group.project === "namndemansgatan" && image.number === 8)) assert.equal(published.phase, undefined);
      added++; bytes += file.length;
    }
  }
  assert.equal(added, 14);
  assert.ok(bytes < 1_000_000);
  const skipped = review.find((group) => group.project === "pool").selected.find((image) => image.number === 8);
  assert.equal(skipped.usage, "existing-hero");
  assert.equal(skipped.publicationAsset, data.getProject("poolbygge-sjovagen-solna").hero.src);
  // Compare actual pixels after normalizing size: catches duplicate photographs
  // even if they have different file names, formats or export dimensions.
  for (const project of data.getPublishedProjects()) {
    const images = [project.hero, ...project.gallery];
    const pixels = await Promise.all(images.map((image) => sharp(join(root, "public", image.src.slice(1))).rotate().resize(32, 32, { fit: "fill" }).removeAlpha().raw().toBuffer()));
    for (let a = 0; a < pixels.length; a++) for (let b = a + 1; b < pixels.length; b++) {
      const difference = pixels[a].reduce((sum, value, index) => sum + Math.abs(value - pixels[b][index]), 0) / pixels[a].length;
      assert.ok(difference > 2, `Repeated photo: ${images[a].src} and ${images[b].src}`);
    }
  }
});

test("all legacy URL variants redirect permanently in one hop to a 200 canonical URL", async () => {
  const cases = [...legacy, ...legacy.map(([old, target]) => ["/sv" + old, target]), ["/sv", "/"], ["/en-gb", "/"]];
  let checked = 0;
  for (const [old, target] of cases) {
    const encoded = encodeURI(old);
    const lowerEncoded = encoded.replace(/%[0-9A-F]{2}/g, (value) => value.toLowerCase());
    for (const variant of new Set([old, encoded, lowerEncoded])) for (const slash of ["", "/"]) {
      const response = await fetch(base + variant + slash + "?migration=1", { redirect: "manual" });
      assert.equal(response.status, 308, variant + slash);
      const location = new URL(response.headers.get("location"), base);
      assert.equal(location.pathname, target, variant + slash);
      assert.equal(location.search, "?migration=1");
      const final = await fetch(location, { redirect: "manual" });
      assert.equal(final.status, 200, location.href);
      assert.equal(final.headers.get("location"), null, "Redirect chain: " + variant);
      checked++;
    }
  }
  console.log(`${checked} legacy redirect variants: one hop, query preserved, final HTTP 200`);
});

test("removed pages, unknown projects and a draft-like URL remain actual HTTP 404", async () => {
  for (const prefix of ["", "/sv"]) for (const slug of ["jobba-hos-oss", "projekt-nybyggnation-munkholmen"]) {
    for (const slash of ["", "/"]) {
      const response = await fetch(base + prefix + "/" + slug + slash);
      assert.equal(response.status, 404);
    }
  }
  // Koggevägen has no verified local project/image material yet. These are
  // negative URL probes, not reserved or proposed project addresses.
  for (const slug of ["okant-projekt", "opublicerat-testprojekt", "koggevagen", "nybyggnation-koggevagen"]) {
    assert.equal(data.getProject(slug), undefined);
    assert.equal((await fetch(base + "/projekt/" + slug)).status, 404);
  }
});

test("all sitemap URLs have matching non-redirecting canonicals and exactly one H1", async () => {
  const response = await fetch(base + "/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  assert.equal(new Set(urls).size, urls.length);
  for (const slug of expectedSlugs) assert.ok(urls.includes("https://tornrosbygg.se/projekt/" + slug));
  const titles = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    assert.ok(path === "/" || !path.endsWith("/"), url);
    const result = await fetch(base + path, { redirect: "manual" });
    assert.equal(result.status, 200, path);
    const html = await result.text();
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).href, new URL(url).href, path);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path);
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(title && !titles.has(title), path);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    if (path !== "/") {
      const slash = await fetch(base + path + "/", { redirect: "manual" });
      assert.equal(slash.status, 308);
      assert.equal(new URL(slash.headers.get("location"), base).pathname, path);
    }
  }
  console.log(`${urls.length} sitemap URLs: HTTP 200, matching canonical, title, description and one H1`);
});

test("every built content page is in sitemap and every project is listed", async () => {
  const xml = await (await fetch(base + "/sitemap.xml")).text();
  const buildRoot = join(root, ".next/server/app");
  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, entry.name);
      if (entry.isDirectory()) walk(file);
      else if (entry.name.endsWith(".html") && !relative(buildRoot, file).split(sep).some((p) => p.startsWith("_"))) {
        const route = "/" + relative(buildRoot, file).split(sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");
        assert.ok(xml.includes("https://tornrosbygg.se" + route + "</loc>"), route);
      }
    }
  }
  walk(buildRoot);
  const index = await (await fetch(base + "/projekt")).text();
  for (const project of data.getPublishedProjects()) assert.ok(index.includes(`href="${data.projectPath(project)}"`));
  const home = await (await fetch(base)).text();
  for (const project of data.getFeaturedProjects()) assert.ok(home.includes(`href="${data.projectPath(project)}"`));
});

test("new service links reach real sections and removed claims stay absent", async () => {
  const services = await (await fetch(base + "/tjanster")).text();
  for (const [path, id] of [
    ["/tjanster/markarbeten", "pool-och-utemiljo"],
    ["/fastighetsagare", "innergardar-och-tak"],
    ["/fastighetsagare", "lekplatser-och-ravindar"],
    ["/fastighetsagare", "projektledning-och-besiktning"],
  ]) {
    assert.ok(services.includes(`href="${path}#${id}"`));
    const html = await (await fetch(base + path)).text();
    assert.ok(html.includes(`id="${id}"`));
  }
  const brf = await (await fetch(base + "/fastighetsagare")).text();
  const visibleMain = brf.match(/<main>([\s\S]*?)<\/main>/)[1];
  assert.doesNotMatch(visibleMain, /10 års garanti|AAA-rating|nöjdkundgaranti|certifierad|oberoende besiktningsman|behörig kontrollansvarig|fastighetsskötsel/i);
});
