import fs from "fs";
import path from "path";

const level4Dir = path.join(__dirname, "../src/content/level-4");
const modules = Array.from({ length: 15 }, (_, i) => `module-4-${i + 1}`);

// Map of specific files and card indexes to new premium titles
const specificFixes: Record<string, string> = {
  "module-4-4/core.ts:15": "NY Session Overlap Flow Synthesis",
  "module-4-5/core.ts:15": "PO3 Daily Candle Synthesis",
  "module-4-6/core.ts:15": "Midnight Opening Price Execution Synthesis",
  "module-4-6/gold.ts:7": "Gold Midnight Open Price Deviations",
  "module-4-6/crypto.ts:7": "Crypto Midnight Open Price Traps",
  "module-4-7/gold.ts:8": "Gold London Session Execution Summary",
  "module-4-7/crypto.ts:4": "Crypto London Session Liquidity Maps",
  "module-4-8/core.ts:5": "NY Killzone Session Handoff Mechanics",
  "module-4-8/gold.ts:6": "Gold COMEX Open Invalidation Boundaries",
  "module-4-9/gold.ts:5": "Gold London Close Volatility Winding",
  "module-4-9/crypto.ts:5": "Crypto London Close Liquidation Winding",
  "module-4-10/core.ts:15": "20-Minute Algorithmic Macro Window Synthesis",
  "module-4-10/gold.ts:6": "Gold COMEX Macro Hour Resets",
  "module-4-10/crypto.ts:5": "Crypto Latency Arb Macro Resets",
  "module-4-11/gold.ts:8": "Gold Weekly Range Expansion Summary",
  "module-4-11/crypto.ts:8": "Crypto Weekend CME Gap Reversal Summary",
  "module-4-12/core.ts:15": "Killzone Clock and FVG Confluence Synthesis",
  "module-4-13/core.ts:15": "Time Decay and Invalidation Synthesis",
  "module-4-13/crypto.ts:8": "Crypto Weekend Invalidation Summary",
  "module-4-14/core.ts:15": "Timing Eligibility Checklist Synthesis",
};

function fixLevel4() {
  console.log("--- FIXING LEVEL 4 DUPLICATE TITLES ---");
  let fixedTitlesCount = 0;

  for (const mod of modules) {
    const modPath = path.join(level4Dir, mod);
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
            console.log(`Fixing Title [${key}]: "${card.title}" -> "${specificFixes[key]}"`);
            card.title = specificFixes[key];
            changed = true;
            fixedTitlesCount++;
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

  console.log(`\nSuccessfully fixed ${fixedTitlesCount} titles in Level 4!`);
}

fixLevel4();
