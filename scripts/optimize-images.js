/*
  Image optimization script
  - Generates AVIF and WebP variants at multiple widths for images found in Home/image and Event/image
  - Outputs to /img/optimized with filenames: <basename>-<width>.<ext>

  Usage:
  1. npm install sharp glob mkdirp --save-dev
  2. node scripts/optimize-images.js

  Note: This script is safe to re-run; it skips existing outputs.
*/

const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const INPUT_GLOBS = ['Home/image/*.{jpg,jpeg,png,webp}', 'Event/image/*.{jpg,jpeg,png,webp}'];
const OUTPUT_DIR = path.join(__dirname, '..', 'img', 'optimized');
const SIZES = [480, 768, 1200, 1920];
const FORMATS = [
  { ext: 'avif', fn: (pipeline, width) => pipeline.resize(width).avif({ quality: 60 }) },
  { ext: 'webp', fn: (pipeline, width) => pipeline.resize(width).webp({ quality: 75 }) }
];

async function processFile(file) {
  const filename = path.basename(file);
  const name = filename.split('.').slice(0, -1).join('.');

  for (const size of SIZES) {
    for (const fmt of FORMATS) {
      const outName = `${name}-${size}.${fmt.ext}`;
      const outPath = path.join(OUTPUT_DIR, outName);
      if (fs.existsSync(outPath)) {
        console.log(`Skipping existing: ${outName}`);
        continue;
      }

      try {
        mkdirp.sync(OUTPUT_DIR);
        const pipeline = sharp(file).rotate();
        fmt.fn(pipeline, size);
        await pipeline.toFile(outPath);
        console.log(`Written ${outPath}`);
      } catch (err) {
        console.error(`Failed to process ${file} -> ${outName}:`, err.message);
      }
    }
  }
}

(async function main() {
  console.log('Starting image optimization...');
  for (const pattern of INPUT_GLOBS) {
    const files = glob.sync(pattern, { nodir: true });
    for (const file of files) {
      await processFile(file);
    }
  }
  console.log('Done. Optimized images are in /img/optimized. Update srcset in your templates to reference these files.');
})();