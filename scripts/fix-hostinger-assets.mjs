import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const fromDir = path.join(outDir, "_next");
const toDir = path.join(outDir, "next");

if (!existsSync(outDir)) {
  console.error('Dossier "out/" introuvable. Lance "npm run build" d\'abord.');
  process.exit(1);
}

if (!existsSync(fromDir)) {
  if (existsSync(toDir)) {
    console.log('Déjà fixé : dossier "next/" présent.');
    process.exit(0);
  }
  console.error('Dossier "out/_next" introuvable.');
  process.exit(1);
}

if (existsSync(toDir)) {
  rmSync(toDir, { recursive: true, force: true });
}

renameSync(fromDir, toDir);

const TEXT_EXT = new Set([".html", ".js", ".css", ".json", ".txt", ".xml", ".map", ".svg"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let rewritten = 0;
for (const file of walk(outDir)) {
  if (!TEXT_EXT.has(path.extname(file).toLowerCase())) continue;
  const before = readFileSync(file, "utf8");
  if (!before.includes("_next")) continue;
  const after = before
    .replaceAll("/_next/", "/next/")
    .replaceAll('"_next/', '"next/')
    .replaceAll("'_next/", "'next/")
    .replaceAll("`/_next/", "`/next/");
  if (after !== before) {
    writeFileSync(file, after);
    rewritten += 1;
  }
}

console.log(`✅ Hostinger fix : "_next" → "next" (${rewritten} fichiers mis à jour)`);
