/**
 * Converteert alle .jpg en .png in public/photos/ naar .webp
 * Originelen blijven staan — verwijder ze daarna handmatig of via het script.
 *
 * Gebruik: node scripts/convert-to-webp.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PHOTOS_DIR = join(__dirname, "../public/photos");
const QUALITY = 85;   // 85% kwaliteit — goede balans tussen scherpte en bestandsgrootte
const MAX_PX = 2560;  // Maximale breedte/hoogte — ruim voor retina 4K schermen

const files = await readdir(PHOTOS_DIR);
const targets = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`\n🔄 Converteren van ${targets.length} bestanden naar WebP (kwaliteit: ${QUALITY}%)...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of targets) {
  const inputPath = join(PHOTOS_DIR, file);
  const outputName = basename(file, extname(file)) + ".webp";
  const outputPath = join(PHOTOS_DIR, outputName);

  const { size: sizeBefore } = await stat(inputPath);

  await sharp(inputPath)
    .resize(MAX_PX, MAX_PX, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outputPath);

  const { size: sizeAfter } = await stat(outputPath);
  const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);

  totalBefore += sizeBefore;
  totalAfter += sizeAfter;

  const beforeKB = (sizeBefore / 1024).toFixed(0).padStart(6);
  const afterKB = (sizeAfter / 1024).toFixed(0).padStart(6);
  console.log(`  ${file.padEnd(40)} ${beforeKB} KB → ${afterKB} KB  (−${saving}%)`);
}

const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
console.log(`\n✅ Klaar!`);
console.log(`   Totaal voor:  ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`   Totaal na:    ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`   Besparing:    −${totalSaving}%\n`);
console.log(`Volgende stap: verwijder de originele .jpg en .png bestanden uit public/photos/\n`);
