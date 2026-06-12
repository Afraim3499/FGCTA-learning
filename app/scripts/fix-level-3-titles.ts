import fs from "fs";
import path from "path";

const level3Dir = path.join(__dirname, "../src/content/level-3");
const modules = Array.from({ length: 15 }, (_, i) => `module-3-${i + 1}`);

// Map of specific files and card indexes to new premium titles
const specificFixes: Record<string, string> = {
  "module-3-5/gold.ts:8": "Gold Propulsion Timing Summary",
  "module-3-6/gold.ts:4": "Gold FVG Volatility Defense",
  "module-3-6/gold.ts:8": "Gold FVG Imbalances Summary",
  "module-3-6/crypto.ts:8": "Crypto FVG Liquidations Summary",
  "module-3-8/core.ts:15": "Consequent Encroachment Retest Synthesis",
  "module-3-8/gold.ts:8": "Gold CE Anchor Review",
  "module-3-8/crypto.ts:8": "Crypto CE Midpoint Review",
  "module-3-11/core.ts:15": "Footprint Delta Execution Synthesis",
  "module-3-13/core.ts:15": "Footprint Failure Risk Synthesis",
  "module-3-14/core.ts:7": "Common Pitfalls in Checklist Grading",
  "module-3-14/core.ts:8": "Synthesizing Checklist Execution Insights",
  "module-3-14/core.ts:15": "Order Flow Checklist Integration",
  "module-3-15/gold.ts:6": "Gold Order Flow Execution Review",
};

// Forex track specific body content for module-3-6 forex.ts card 5
const newForexBody = `### Forex Imbalance Risk: Protecting Rollover and Spread Swings
Managing risk on currency Fair Value Gaps requires accounting for execution slippage and spread expansions. This card teaches **how to size stops and manage trades when ECN spreads swell**.

* **Rollover Spread Buffers**: Stop-losses on FVG trades must incorporate a buffer equal to the pair's average 5:00 PM EST rollover spread expansion, preventing premature stop-outs.
* **ECN Slippage Math**: Stop parameters are adjusted to assume a 1-2 pip slippage penalty when filling limit orders during sudden macro-driven imbalance runs.
* **ATR Stop Scaling**: The invalidation boundary of the FVG plan is scaled using 1.5 times the 15-minute ATR to absorb volatility spikes during active session overlaps.`;

function fixLevel3() {
  console.log("--- FIXING LEVEL 3 DUPLICATE TITLES AND BODIES ---");
  let fixedTitlesCount = 0;
  let fixedBodiesCount = 0;

  for (const mod of modules) {
    const modPath = path.join(level3Dir, mod);
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
          
          // Fix specific titles
          if (specificFixes[key]) {
            console.log(`Fixing Title [${key}]: "${card.title}" -> "${specificFixes[key]}"`);
            card.title = specificFixes[key];
            changed = true;
            fixedTitlesCount++;
          }

          // Fix specific duplicate body in module-3-6 forex.ts card 5
          if (key === "module-3-6/forex.ts:5") {
            console.log(`Fixing Body [${key}]: Replacing duplicate body with FX-specific content.`);
            card.body = newForexBody;
            changed = true;
            fixedBodiesCount++;
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

  console.log(`\nSuccessfully fixed ${fixedTitlesCount} titles and ${fixedBodiesCount} bodies in Level 3!`);
}

fixLevel3();
