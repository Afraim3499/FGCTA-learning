import fs from "fs";
import path from "path";

const level2Dir = path.join(__dirname, "../src/content/level-2");
const modules = Array.from({ length: 15 }, (_, i) => `module-2-${i + 1}`);

// Map of specific files and card indexes to new premium titles
const specificFixes: Record<string, string> = {
  "module-2-2/core.ts:15": "Fractal Scale Structural Synthesis",
  "module-2-2/gold.ts:6": "Risk Management in Fractal Gold Spikes",
  "module-2-6/core.ts:15": "MSS Displacement Synthesis",
  "module-2-7/gold.ts:7": "Practical Application of Gold Liquidity Sweeps",
  "module-2-8/core.ts:15": "Internal vs External Range Synthesis",
  "module-2-12/core.ts:15": "External Range Boundary Synthesis",
  "module-2-14/core.ts:15": "Session Time-Price Integration",
  "module-2-14/gold.ts:8": "Gold Session Timing Integration",
  "module-2-14/crypto.ts:8": "Crypto Session Timing Integration",
};

function fixTitles() {
  console.log("--- FIXING LEVEL 2 DUPLICATE TITLES ---");
  let fixedCount = 0;

  for (const mod of modules) {
    const modPath = path.join(level2Dir, mod);
    if (!fs.existsSync(modPath)) continue;

    const files = ["core.ts", "forex.ts", "gold.ts", "crypto.ts"];
    for (const file of files) {
      const filePath = path.join(modPath, file);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/export const (\w+)Cards: LessonCard\[] = (\[[\s\S]+\]);/);
      if (!match) continue;

      try {
        const varName = match[1];
        const cards = JSON.parse(match[2]);
        let changed = false;

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const key = `${mod}/${file}:${i + 1}`;
          
          if (specificFixes[key]) {
            console.log(`Fixing [${key}]: "${card.title}" -> "${specificFixes[key]}"`);
            card.title = specificFixes[key];
            changed = true;
            fixedCount++;
          }
        }

        if (changed) {
          const updatedContent = `import { LessonCard } from "../../../types/curriculum";\n\nexport const ${varName}Cards: LessonCard[] = ${JSON.stringify(cards, null, 2)};\n`;
          fs.writeFileSync(filePath, updatedContent);
        }
      } catch (err) {
        console.error(`Error parsing JSON in ${mod}/${file}:`, err);
      }
    }
  }

  console.log(`\nSuccessfully fixed ${fixedCount} duplicate titles in Level 2!`);
}

fixTitles();
