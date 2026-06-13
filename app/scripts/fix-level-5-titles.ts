import fs from "fs";
import path from "path";

const level5Dir = path.join(__dirname, "../src/content/level-5");
const modules = Array.from({ length: 15 }, (_, i) => `module-5-${i + 1}`);

// Map of specific files and card indexes to new premium titles
const specificFixes: Record<string, string> = {
  "module-5-2/core.ts:13": "Core Volatility-Adjusted Sizing Rules",
  "module-5-3/core.ts:15": "Core Risk Sizing Formula Synthesis",
  "module-5-4/core.ts:15": "Risk-Free Partial Sizing Synthesis",
  "module-5-4/crypto.ts:5": "Crypto Partial Target Invalidation Boundaries",
  "module-5-5/core.ts:12": "Pyramiding Stop Loss Realignment",
  "module-5-6/core.ts:15": "Invalidation Placement Rule Synthesis",
  "module-5-7/core.ts:15": "Break-Even Transition Parameters Synthesis",
  "module-5-8/core.ts:15": "Trailing Stop Architecture Synthesis",
  "module-5-9/core.ts:15": "Asymmetric Contraction Scale Synthesis",
  "module-5-10/core.ts:15": "Daily Equity Circuit Breaker Synthesis",
  "module-5-10/forex.ts:4": "Forex Lot Allocation Calculations",
  "module-5-11/forex.ts:8": "Forex Weekly Loss Limit Enforcement Summary",
  "module-5-11/crypto.ts:8": "Crypto Weekly Loss Limit Enforcement Summary",
  "module-5-12/crypto.ts:6": "Crypto Invalidation Bias Mitigation",
  "module-5-13/core.ts:15": "Correlation Coefficient Sizing Synthesis",
};

// New unique body content for module-5-10 crypto.ts cards 7 and 8
const newCryptoBody7 = `### Crypto Practice: Simulating Isolated Margin Drawdowns
Enforcing daily loss limits in volatile crypto perps requires active margin recalculation. This card presents **a scenario-based drill to compute risk parameters during sudden sweeps**.

* **Volatile perp simulation**: You open a 10x leveraged long position on ETH at $3,500, allocating 5% of your $20,000 account as margin.
* **Circuit Breaker Threshold**: If a sudden liquidation sweep wicks ETH down by 4%, calculate the absolute dollar drawdown and determine if it triggers the 3% daily circuit breaker.
* **Stop Execution Discipline**: The simulated trade triggers the daily circuit breaker when total loss reaches $1,000, requiring immediate termination of all execution bots.`;

const newCryptoBody8 = `### Crypto Summary: Perp Position Circuit Breakers
Managing risk in leveraged crypto markets requires automatic execution limits. This card summarizes **the core practices to prevent liquidation and tilt during high-volatility sessions**.

* **Dynamic Stop Locks**: Never rely on manual execution; place hard stop-loss parameters on all perpetual contracts to trigger before the exchange maintenance margin.
* **Asymmetric Risk Scaling**: Halve perp position size and leverage factor immediately if consecutive stop-outs occur during highly volatile token unlocks.
* **Isolated Margin Safeguards**: Avoid cross-margin settings; isolate capital on individual perp setups to prevent single-coin flash crashes from draining the portfolio.`;

function fixLevel5() {
  console.log("--- FIXING LEVEL 5 DUPLICATE TITLES AND BODIES ---");
  let fixedTitlesCount = 0;
  let fixedBodiesCount = 0;

  for (const mod of modules) {
    const modPath = path.join(level5Dir, mod);
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

          if (key === "module-5-10/crypto.ts:7") {
            console.log(`Fixing Body [${key}]: Replacing duplicate body with unique crypto perp content.`);
            card.body = newCryptoBody7;
            changed = true;
            fixedBodiesCount++;
          }

          if (key === "module-5-10/crypto.ts:8") {
            console.log(`Fixing Body [${key}]: Replacing duplicate body with unique crypto summary content.`);
            card.body = newCryptoBody8;
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

  console.log(`\nSuccessfully fixed ${fixedTitlesCount} titles and ${fixedBodiesCount} bodies in Level 5!`);
}

fixLevel5();
