Image optimization script

What it does:
- Generates AVIF and WebP variants at multiple widths (480, 768, 1200, 1920)
- Writes outputs to `img/optimized` as `<basename>-<width>.<ext>`

How to run locally:
1. Ensure you have Node.js installed (14+ recommended).
2. From the repo root run:
   npm install
   npm run optimize-images

Notes:
- The script is safe to re-run; it skips files that already exist.
- After running, the site HTML is updated to reference `/img/optimized/<name>-<width>.<ext>` via `srcset`/`<picture>` fallbacks.
- If you prefer using a different directory or quality settings, edit `scripts/optimize-images.js`.
