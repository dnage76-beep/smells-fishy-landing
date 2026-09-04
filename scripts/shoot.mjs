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
//
// Full-page capture is done by SCROLLING AND STITCHING, not by any of the
// shortcuts, because both shortcuts are broken here:
//
//   - puppeteer's default `captureBeyondViewport` rasterises past the
//     viewport WITHOUT compositing backdrop-filter or filter, so every
//     translucent panel below the fold photographs as an empty box.
//   - growing the viewport to the document height fixes that, but any page
//     built on svh/vh units then resolves those units against the grown
//     viewport, so its sections become as tall as the document. That turned
//     the Apple variant into a 23,795 px image that was 94% black.
//
// Scrolling at the natural viewport avoids both: every slice composites
// normally and viewport units keep their real values. Elements that are
// fixed or sticky are hidden after the first slice so a floating header is
// not stamped into every screenful.
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, unlink } from "node:fs/promises";

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

// Scroll the page one screenful at a time, capture each, and stitch the
// slices into one image. `scale` is the device pixel ratio of the slices.
async function captureFullPage(page, { width, height, scale, out }) {
  const docHeight = Math.min(
    await page.evaluate(() => document.documentElement.scrollHeight),
    40000,
  );
  const steps = Math.max(1, Math.ceil(docHeight / height));
  const slices = [];
  for (let i = 0; i < steps; i += 1) {
    const y = Math.min(i * height, Math.max(0, docHeight - height));
    await page.evaluate((top) => window.scrollTo(0, top), y);
    if (i === 1) {
      // From the second slice on, take fixed and sticky chrome out of the
      // flow so it is not stamped into every screenful.
      await page.evaluate(() => {
        document.querySelectorAll("body *").forEach((el) => {
          const pos = getComputedStyle(el).position;
          if (pos === "fixed" || pos === "sticky") {
            el.dataset.shootHidden = "1";
            el.style.setProperty("visibility", "hidden", "important");
          }
        });
      });
    }
    // Let lazy content, scroll-linked transforms and animations settle.
    await new Promise((r) => setTimeout(r, 450));
    const buf = await page.screenshot({ captureBeyondViewport: false });
    slices.push({ y, buf });
  }
  await page.evaluate(() => {
    document.querySelectorAll('[data-shoot-hidden="1"]').forEach((el) => {
      el.style.removeProperty("visibility");
      delete el.dataset.shootHidden;
    });
  });

  // Stitch with Python's imaging library rather than in the page: passing
  // twenty multi-megabyte data URLs into page.evaluate overruns the CDP
  // message size and throws.
  const { writeFile, mkdtemp, rm } = await import("node:fs/promises");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const dir = await mkdtemp(join(tmpdir(), "shoot-"));
  const manifest = [];
  for (let i = 0; i < slices.length; i += 1) {
    const file = join(dir, `slice-${String(i).padStart(3, "0")}.png`);
    await writeFile(file, slices[i].buf);
    manifest.push({ file, y: slices[i].y });
  }
  const spec = JSON.stringify({
    slices: manifest,
    width: Math.round(width * scale),
    height: Math.round(docHeight * scale),
    scale,
    out,
  });
  execFileSync("python3", ["-c", `
import json, sys
from PIL import Image
spec = json.loads(sys.argv[1])
canvas = Image.new("RGB", (spec["width"], spec["height"]), (255, 255, 255))
for part in spec["slices"]:
    img = Image.open(part["file"]).convert("RGB")
    canvas.paste(img, (0, round(part["y"] * spec["scale"])))
canvas.save(spec["out"])
`, spec]);
  await rm(dir, { recursive: true, force: true });

  return { docHeight, steps };
}

const sizes = [
  ["desktop", 1440, 900],
  ["tablet", 834, 1112],
  ["mobile", 390, 844],
];

for (const [label, width, height] of sizes) {
  const page = await browser.newPage();
  // A 2x raster of a very long page overruns the compositor's tile budget
  // on this Mac and drops whole bands, so long pages drop to 1x.
  const scale = 2;
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));
  const out = `${outDir}/${name}-${label}.png`;
  const { docHeight, steps } = await captureFullPage(page, { width, height, scale, out });
  console.log(`${label}: ${width}x${docHeight} from ${steps} slice(s) -> ${out}`);
  await page.close();
}

await browser.close();
