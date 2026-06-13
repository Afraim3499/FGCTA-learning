import fs from "fs";
import path from "path";

const level8Dir = path.join(__dirname, "../src/content/level-8");

function patch() {
  console.log("--- STARTING LEVEL 8 EXPECTANCY KEY PATCH ---");
  
  if (!fs.existsSync(level8Dir)) {
    console.error(`Error: Level 8 directory not found at ${level8Dir}`);
    process.exit(1);
  }

  const modules = fs.readdirSync(level8Dir).filter(name => name.startsWith("module-8-"));
  let patchCount = 0;

  for (const mod of modules) {
    const modDir = path.join(level8Dir, mod);
    const files = ["core.ts", "forex.ts", "gold.ts", "crypto.ts"];

    for (const file of files) {
      const filePath = path.join(modDir, file);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, "utf-8");
      if (content.includes('"expectancy-calculator"')) {
        const updatedContent = content.replace(/"expectancy-calculator"/g, '"expectancy-calculator-l8"');
        fs.writeFileSync(filePath, updatedContent);
        console.log(`✓ Patched key in ${mod}/${file}`);
        patchCount++;
      }
    }
  }

  console.log(`--- PATCH COMPLETED: Updated ${patchCount} files ---`);
}

patch();
