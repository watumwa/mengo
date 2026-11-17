// Safeguard the client photography library and the homepage's image diversity.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const read = (file) => readFileSync(join(process.cwd(), file), "utf8");
const catalog = read("app/realPhotos.ts");
const carousel = read("app/HeroStoryCarousel.tsx");

const knownPhotos = new Set(
  [...catalog.matchAll(/^\s{2}([A-Za-z]\w*):\s*\{/gm)].map((match) => match[1])
);
const cataloguedLocalPhotos = new Map(
  [...catalog.matchAll(/^\s{2}([A-Za-z]\w*):\s*\{\n\s{4}src:\s*"(\/images\/[^"]+\.(?:jpe?g))"/gim)]
    .map((match) => [match[2], match[1]])
);
const photoRefs = (source) =>
  [...source.matchAll(/\brealPhotos\.([A-Za-z]\w*)/g)].map((match) => match[1]);
const assert = (condition, message) => {
  if (!condition) throw new Error("Photo audit: " + message);
};

// Every local photograph in the central catalogue must actually exist.
for (const match of catalog.matchAll(/\bsrc:\s*"(\/images\/[^"]+)"/g)) {
  assert(existsSync(join(process.cwd(), "public", match[1])), "Missing asset " + match[1]);
}

// Every supplied raster photograph must be catalogued so it can be placed with
// an accurate alt description and content context instead of becoming an orphan.
const localPhotoFiles = [];
const collectLocalPhotos = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectLocalPhotos(path);
    else if (entry.isFile() && /\.jpe?g$/i.test(entry.name)) localPhotoFiles.push(path);
  }
};
collectLocalPhotos(join(process.cwd(), "public", "images"));
for (const file of localPhotoFiles) {
  const publicPath = "/" + relative(join(process.cwd(), "public"), file);
  assert(cataloguedLocalPhotos.has(publicPath), "Uncatalogued local photo " + publicPath);
}

// Keep the wider site from falling back to the same small set of photographs.
const tsxFiles = [];
const collectTsx = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectTsx(path);
    else if (entry.isFile() && entry.name.endsWith(".tsx")) tsxFiles.push(path);
  }
};
collectTsx(join(process.cwd(), "app"));

const siteUsage = new Map();
for (const file of tsxFiles) {
  for (const key of photoRefs(readFileSync(file, "utf8"))) {
    assert(knownPhotos.has(key), "Unknown photo " + key + " in " + relative(process.cwd(), file));
    const references = siteUsage.get(key) ?? [];
    references.push(relative(process.cwd(), file));
    siteUsage.set(key, references);
  }
}
const maximumSiteReferences = 6;
for (const [key, references] of siteUsage) {
  assert(
    references.length <= maximumSiteReferences,
    key + " is referenced " + references.length + " times across the site; use more context-specific photographs"
  );
}
for (const [src, key] of cataloguedLocalPhotos) {
  assert(siteUsage.has(key), "Local photo " + src + " is catalogued but not rendered on a content page");
}

const groups = {
  "featured carousel": [...carousel.matchAll(/\bphoto:\s*realPhotos\.([A-Za-z]\w*)/g)].map((m) => m[1]),
};
assert(groups["featured carousel"].length >= 2, "Featured carousel images were not found");

const locations = new Map();
for (const [section, photos] of Object.entries(groups)) {
  for (const key of photos) {
    assert(knownPhotos.has(key), "Unknown photo " + key + " in " + section);
    assert(!locations.has(key),
      key + " is repeated in " + locations.get(key) + " and " + section);
    locations.set(key, section);
  }
}

// History and culture each need their own lead photograph.
const history = read("app/kingdom/history/page.tsx");
const culture = read("app/kingdom/culture-tourism/page.tsx");
const heroPhoto = (source) => source.match(/\bimage=\{realPhotos\.([A-Za-z]\w*)\}/)?.[1];
assert(heroPhoto(history) && heroPhoto(culture), "Missing Kingdom editorial hero");
assert(heroPhoto(history) !== heroPhoto(culture), "Kingdom history and culture share the same hero");

console.log(
  "Photo audit passed: " + locations.size +
  " distinct client photos in the streamlined homepage carousel; all " + localPhotoFiles.length +
  " local photographs are catalogued and rendered; no catalogued photo exceeds " +
  maximumSiteReferences + " site references."
);
