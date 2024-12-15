import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory (equivalent to __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths for source and destination directories
const sourceDir = path.resolve(__dirname, "dist/client/");
const destinationDir = path.resolve(__dirname, "public/");

// Ensure the destination folder exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
  console.log(`📂 Created directory: ${destinationDir}`);
}

// Copy all .xml files from dist/client/ to public/
fs.readdirSync(sourceDir).forEach((file) => {
  if (file.endsWith(".xml")) {
    const sourcePath = path.join(sourceDir, file);
    const destinationPath = path.join(destinationDir, file);
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`✅ Copied ${file} to public/`);
  }
});
