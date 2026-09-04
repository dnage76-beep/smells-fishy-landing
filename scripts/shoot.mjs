// Screenshot a running variant at three widths.
//   node scripts/shoot.mjs <url> <outDir> <name>
//
// Resolves puppeteer from the global install (NODE_PATH does NOT work for
// ESM imports, which is why the first run of this script failed for every
// agent) and drives the copy of Chrome that is actually on this Mac, since
// puppeteer's own browser was never downloaded. Puppeteer uses a throwaway
// profile, so Derek's Chrome profile is untouched.
//
// Shoot the PRODUCTION server (npx next start), not npm run dev: the dev
// build paints a floating dev-tools badge into the corner of every frame.
// Writes <outDir>/<name>-desktop.png (1440x900, full page), -tablet.png
// (834x1112) and -mobile.png (390x844). Full-page desktop shot is the one
// Derek judges the design by.
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";

function loadPuppeteer() {
  const require = createRequire(import.meta.url);
  try {
    return require("puppeteer");
  } catch {
    const globalRoot = execFileSync("npm", ["root", "-g"], { encoding: "utf8" }).trim();
    return createRequire(`${globalRoot}/`)("puppeteer");
  }
}

function chromePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const installed = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  return existsSync(installed) ? installed : undefined;
}

const puppeteer = loadPuppeteer();

const [url, outDir, name] = process.argv.slice(2);
if (!url || !outDir || !name) {
  console.error("usage: shoot.mjs <url> <outDir> <name>");
  process.exit(2);
}
await mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({
  headless: "new",
  executablePath: chromePath(),
  args: ["--no-sandbox", "--force-color-profile=srgb", "--font-render-hinting=none"],
});
// Full page at every width: a variant is judged on the whole design, and
// the hero is simply the top of a full-page shot. Viewport-only tablet and
// mobile shots hid everything below the fold at exactly the widths where
// layouts break.
const sizes = [
  ["desktop", 1440, 900, true],
  ["tablet", 834, 1112, true],
  ["mobile", 390, 844, true],
];
for (const [label, width, height, full] of sizes) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  // Let fonts settle and any entrance animation finish before the shutter.
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));
  if (full) {
    // Two things go wrong with a naive full-page shot of a long page that uses
    // backdrop-filter or filter. Puppeteer's default (captureBeyondViewport)
    // rasterises past the viewport WITHOUT compositing those layers, so every
    // translucent panel below the fold comes out empty. And a 2x raster of a
    // several-thousand-pixel page overruns the compositor's tile budget on this
    // Mac, which drops whole bands of content (and past 16384px in either
    // dimension it cannot allocate the texture at all). So: grow the viewport
    // to the document, keep the raster inside a safe budget, and give it a beat
    // to settle before the shutter.
    const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const pageHeight = Math.min(docHeight, 30000);
    const budget = 16e6;
    const scale =
      [2, 1.5, 1].find(
        (s) => width * s * pageHeight * s <= budget && pageHeight * s <= 16000,
      ) ?? 1;
    await page.setViewport({ width, height: pageHeight, deviceScaleFactor: scale });
    await new Promise((r) => setTimeout(r, 1200));
  }
  await page.screenshot({
    path: `${outDir}/${name}-${label}.png`,
    fullPage: full,
    captureBeyondViewport: false,
  });
  const errors = await page.evaluate(() => window.__errors || []);
  if (errors.length) console.error(label, "page errors:", errors);
  await page.close();
}
await browser.close();
console.log(`${outDir}/${name}-{desktop,tablet,mobile}.png`);
