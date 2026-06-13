import fs from "fs";
import path from "path";

const levelDir = path.join(__dirname, "../src/content/level-7");

const patches: { file: string; oldTitle: string; newTitle: string }[] = [
  {
    file: "module-7-4/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Integrating Price Action into the Live OS",
  },
  {
    file: "module-7-5/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Systematic Open Trade Management Review",
  },
  {
    file: "module-7-6/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Scale-Out Mechanics and Profit Run Mastery",
  },
  {
    file: "module-7-7/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "News Event Execution Playbook Summary",
  },
  {
    file: "module-7-8/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Spread and Slippage Leakage Audit",
  },
  {
    file: "module-7-9/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Conducting the Post-Session Performance Debrief",
  },
  {
    file: "module-7-10/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Habit Stacking for Flawless Trade Execution",
  },
  {
    file: "module-7-11/core.ts",
    oldTitle: "Core Execution Mastery 14",
    newTitle: "Simulating Multi-Pair Execution Risk",
  },
  {
    file: "module-7-11/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "Multi-Pair Coordination and Exposure Limits",
  },
  {
    file: "module-7-12/core.ts",
    oldTitle: "Core Execution Mastery 15",
    newTitle: "COMEX Session Execution Protocol Integration",
  },
  {
    file: "module-7-12/crypto.ts",
    oldTitle: "Simulating Crypto Execution Scenarios",
    newTitle: "Simulating Gold-Influenced Crypto Trades",
  },
  {
    file: "module-7-13/crypto.ts",
    oldTitle: "Simulating Crypto Execution Scenarios",
    newTitle: "Simulating Perp Funding and Slippage Scenarios",
  },
  {
    file: "module-7-12/forex.ts",
    oldTitle: "Summary of Forex Execution Strategies",
    newTitle: "Summary of Forex Execution Around Gold Volatility",
  },
  {
    file: "module-7-13/forex.ts",
    oldTitle: "Summary of Forex Execution Strategies",
    newTitle: "Summary of Forex Risk During Crypto Dominance",
  },
  {
    file: "module-7-15/forex.ts",
    oldTitle: "Summary of Forex Execution Strategies",
    newTitle: "Forex Execution Final Review Synthesis",
  },
];

function replaceTitleInFile(filePath: string, oldTitle: string, newTitle: string): boolean {
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  File does not exist: ${filePath}`);
    return false;
  }
  let content = fs.readFileSync(filePath, "utf-8");
  const escaped = oldTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`("title"\\s*:\\s*)"${escaped}"`, "g");
  const matches = content.match(regex);
  if (!matches) {
    console.warn(`  ⚠️  Could not find title "${oldTitle}" in ${path.basename(filePath)}`);
    return false;
  }
  content = content.replace(regex, `$1"${newTitle}"`);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  ✅ Patched ${path.basename(filePath)}: "${oldTitle}" → "${newTitle}"`);
  return true;
}

function runPatches() {
  console.log("--- STARTING LEVEL 7 DUPLICATE TITLE PATCHES ---");
  let patchCount = 0;
  for (const patch of patches) {
    const fullPath = path.join(levelDir, patch.file);
    if (replaceTitleInFile(fullPath, patch.oldTitle, patch.newTitle)) {
      patchCount++;
    }
  }
  console.log(`\nPatched ${patchCount} / ${patches.length} titles.`);
}

runPatches();
