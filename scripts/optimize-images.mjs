/**
 * Image optimization script — converts gallery PNGs to WebP + AVIF.
 *
 * Usage:
 *   npm install --save-dev sharp        (one-time)
 *   node scripts/optimize-images.mjs
 *
 * Output files land alongside the originals in /public with the same base name.
 * After running, update GallerySection image paths from .png → .webp
 * (or .avif for browsers that support it — use <picture> with <source> tags).
 *
 * Expected savings: ~85–90% size reduction vs PNG (from ~2MB → ~150–250KB each).
 */

import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(__dirname, '../public')

// Images to convert — add or remove as needed
const IMAGES = [
  'BM-1-1.png',
  'BM-1-2.png',
  'BM-1-3.png',
  'BM-1-4.png',
  'BM-BA-1.png',
  'BM-BA-2.png',
  'BM-BA-3.png',
  'BM-BA-4.png',
  'hero-image.png',
]

let sharp
try {
  sharp = require('sharp')
} catch {
  console.error(
    '\n❌  sharp is not installed. Run:\n\n   npm install --save-dev sharp\n\nthen re-run this script.\n'
  )
  process.exit(1)
}

async function convert(filename) {
  const input = path.join(publicDir, filename)
  const base = path.basename(filename, path.extname(filename))

  if (!fs.existsSync(input)) {
    console.warn(`  ⚠ Skipped (not found): ${filename}`)
    return
  }

  const originalKB = Math.round(fs.statSync(input).size / 1024)

  // WebP — broad browser support, good compression
  const webpOut = path.join(publicDir, `${base}.webp`)
  await sharp(input).webp({ quality: 82 }).toFile(webpOut)
  const webpKB = Math.round(fs.statSync(webpOut).size / 1024)

  // AVIF — best compression, modern browsers only
  const avifOut = path.join(publicDir, `${base}.avif`)
  await sharp(input).avif({ quality: 65 }).toFile(avifOut)
  const avifKB = Math.round(fs.statSync(avifOut).size / 1024)

  console.log(
    `  ✓ ${filename.padEnd(20)}  ${String(originalKB).padStart(5)}KB  →  WebP ${String(webpKB).padStart(4)}KB  |  AVIF ${String(avifKB).padStart(4)}KB`
  )
}

console.log('\nOptimizing images…\n')
console.log('  File                   Original     WebP          AVIF')
console.log('  ' + '─'.repeat(64))

for (const img of IMAGES) {
  await convert(img)
}

console.log('\n✅  Done. Next steps:')
console.log('   1. In GallerySection.tsx update image paths: .png → .webp')
console.log('      (OGL loads images via a plain <img> tag, so .webp works directly)')
console.log('   2. For the hero poster, reference hero-image.webp instead of hero-image.png')
console.log('   3. Commit the .webp/.avif files and keep the originals as fallback for now.\n')
