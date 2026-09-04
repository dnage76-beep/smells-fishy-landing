// Screenshot a running variant at three widths.
//   NODE_PATH=$(npm root -g) node scripts/shoot.mjs <url> <outDir> <name>
// Writes <outDir>/<name>-desktop.png (1440x900, full page), -tablet.png
// (834x1112) and -mobile.png (390x844). Full-page desktop shot is the one
// Derek judges the design by.
import puppeteer from "puppeteer";
import { mkdir } from "node:fs/promises";

const [url, outDir, name] = process.argv.slice(2);
if (!url || !outDir || !name) {
  console.error("usage: shoot.mjs <url> <outDir> <name>");
  process.exit(2);
}
await mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--force-color-profile=srgb", "--font-render-hinting=none"],
});
const sizes = [
  ["desktop", 1440, 900, true],
  ["tablet", 834, 1112, false],
  ["mobile", 390, 844, false],
];
for (const [label, width, height, full] of sizes) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  // Let fonts settle and any entrance animation finish before the shutter.
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));
  if (full) {
    // Two things go wrong with a naive full-page shot of a long, effect-heavy
    // page. Puppeteer's default (captureBeyondViewport) rasterises past the
    // viewport without compositing backdrop-filter, so translucent panels come
    // out empty; and a 2x raster of a several-thousand-pixel page blows the
    // compositor's tile budget on a small machine, which drops whole bands of
    // content. So: grow the viewport to the document, keep the raster under a
    // safe pixel budget, and give it a beat to settle before the shutter.
    const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const pageHeight = Math.min(docHeight, 30000);
    const budget = 16e6;
    const scale = [2, 1.5, 1].find((s) => width * s * pageHeight * s <= budget) ?? 1;
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
