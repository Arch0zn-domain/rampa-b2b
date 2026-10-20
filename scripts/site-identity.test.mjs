import assert from "node:assert/strict";
import { test } from "node:test";
import { grokOgHeadTags } from "./grok-pwa-shared.mjs";

test("an explicitly configured public deployment host emits a working share image", () => {
  const tags = grokOgHeadTags({
    host: "preview-random.vercel.app",
    site: { title: "Rampa", card: "custom", publicHost: "rampa-mea.vercel.app" },
  }).join("");
  assert.match(tags, /property="og:image" content="https:\/\/rampa-mea.vercel.app\/og.jpg"/);
  assert.doesNotMatch(tags, /preview-random/);
});

test("invalid explicit hosts never become share-image destinations", () => {
  for (const publicHost of [
    "bad.example/path",
    "user@bad.example",
    "localhost",
    "bad.example?secret=x",
  ]) {
    const tags = grokOgHeadTags({ host: "preview-random.vercel.app", site: { publicHost } }).join(
      "",
    );
    assert.doesNotMatch(tags, /property="og:image"/);
  }
});
