import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const zipPath = path.join(root, "dynasty8-hostinger.zip");

if (!existsSync(outDir)) {
  console.error('Dossier "out/" introuvable. Lance "npm run build" d\'abord.');
  process.exit(1);
}

if (existsSync(zipPath)) rmSync(zipPath);

const isWin = process.platform === "win32";

if (isWin) {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: "inherit" },
  );
} else {
  execSync(`cd "${outDir}" && zip -r "${zipPath}" .`, { stdio: "inherit" });
}

console.log(`\n✅ Archive prête : ${zipPath}`);
console.log("Uploade et extrais ce zip dans public_html sur Hostinger.");
