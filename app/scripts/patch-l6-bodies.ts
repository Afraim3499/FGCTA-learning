import fs from "fs";
import path from "path";

const levelDir = path.join(__dirname, "../src/content/level-6");

const patches = [
  {
    file: "module-6-8/forex.ts",
    old: "### Core Scenario: Recap of Key Concepts\\nThis summary consolidates the essential concepts related to auditing forex positions",
    rep: "### Forex Mid-Session Audit Recap: Execution and Target Synthesis\\nThis advanced forex recap consolidates the essential execution strategies for auditing live forex positions",
  },
  {
    file: "module-6-7/gold.ts",
    old: "### Core Scenario: Recap of Key Concepts\\nThis summary consolidates the essential concepts related to navigating gold structure spikes",
    rep: "### Gold Structure Spikes: Macro Yield Conflict Summary\\nThis gold-specific recap consolidates the essential techniques for navigating gold structure spikes",
  },
  {
    file: "module-6-2/gold.ts",
    old: "### Core Scenario: Recap of Key Concepts\\nThis summary consolidates essential concepts related to gold narrative anchors",
    rep: "### Gold Narrative Anchors: Scenario Planning Recap\\nThis gold-track consolidation covers the essential concepts related to gold narrative anchors",
  },
  {
    file: "module-6-1/gold.ts",
    old: "### Core Scenario: Recap of Key Concepts\\nThis card summarizes the essential strategies for navigating gold",
    rep: "### Gold Safe-Haven Strategy Review: If/Then Logic Recap\\nThis card synthesizes the essential strategies for navigating gold",
  },
];

for (const p of patches) {
  const filePath = path.join(levelDir, p.file);
  let content = fs.readFileSync(filePath, "utf-8");
  if (content.includes(p.old)) {
    content = content.replace(p.old, p.rep);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Patched: ${p.file}`);
  } else {
    console.warn(`⚠️  Not found in: ${p.file}`);
  }
}
console.log("Done.");
