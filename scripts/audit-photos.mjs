// Safeguard the client photography library and the homepage's image diversity.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const read = (file) => readFileSync(join(process.cwd(), file), "utf8");
const catalog = read("app/realPhotos.ts");
const homepage = read("app/page.tsx");
const carousel = read("app/HeroStoryCarousel.tsx");

const knownPhotos = new Set(
  [...catalog.matchAll(/^\s{2}([A-Za-z]\w*):\s*\{/gm)].map((match) => match[1])
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

const gallery = homepage.match(/const communityStories\s*=\s*\[([\s\S]*?)\n\];/);
const mandate = homepage.match(/\{\[([^\]]+)\]\.map\(\(photo\)\s*=>/);
assert(gallery, "Could not locate the homepage community gallery");
assert(mandate, "Could not locate the homepage mandate photo strip");

const groups = {
  "featured carousel": [...carousel.matchAll(/\bphoto:\s*realPhotos\.([A-Za-z]\w*)/g)].map((m) => m[1]),
  "mandate strip": photoRefs(mandate[1]),
  "community gallery": photoRefs(gallery[1]),
};
assert(groups["featured carousel"].length >= 2, "Featured carousel images were not found");
assert(groups["mandate strip"].length >= 4, "Expected four mandate photos");
assert(groups["community gallery"].length >= 6, "Expected six community story photos");

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
  " distinct client photos across homepage carousel, mandate and gallery; all catalogue assets exist."
);
