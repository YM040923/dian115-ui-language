import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html = await readFile(new URL("../demo/index.html", import.meta.url), "utf8");
const js = await readFile(new URL("../demo/app.js", import.meta.url), "utf8");

for (const marker of [
  "Harbor Console",
  'data-view="overview"',
  'data-view="settings"',
  'id="menuToggle"',
  'id="searchDialog"',
  'data-design-role="media-output-grid"',
  'data-design-role="attention-assistant"',
]) {
  assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `missing ${marker}`);
}
assert.doesNotMatch(html, /DIAN115|115\s*(?:网盘|账号)/, "demo must use original product identity");

for (const marker of ["showPage", "drawerState", "toastMessage"]) {
  assert.match(js, new RegExp(`\\b${marker}\\b`), `missing ${marker}`);
}

console.log("Dian115 UI Language demo checks passed.");
