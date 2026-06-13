import fs from "fs";
import path from "path";

/**
 * Fix Level 6 Duplicate Titles & Body Texts
 *
 * Targets:
 *  1. Generic tail card titles: "Core Advanced Risk Management 15", "Summary of Key Concepts"
 *  2. Generic body snippets in summary/forex/crypto cards
 *
 * Strategy: replace with module-specific titles and unique opening body paragraphs.
 */

const levelDir = path.join(__dirname, "../src/content/level-6");

// Module-specific unique tail card titles and body replacements for core.ts card 15
// (the generic "Core Advanced Risk Management 15" / summary card)
const coreCard15Patches: Record<string, { title: string; bodyHeading: string }> = {
  "module-6-3": {
    title: "Defining the Primary Scenario: Risk Defence in Practice",
    bodyHeading: "### Core Scenario: Primary Scenario Risk Defence",
  },
  "module-6-5": {
    title: "Entry Timing Mastery: Advanced Capital Protection",
    bodyHeading: "### Core Scenario: Entry Timing Capital Protection",
  },
  "module-6-6": {
    title: "Liquidity Zone Exploitation: Advanced Risk Controls",
    bodyHeading: "### Core Scenario: Liquidity Zone Risk Controls",
  },
  "module-6-7": {
    title: "Structural Conflict Zones: Advanced Capital Defence",
    bodyHeading: "### Core Scenario: Structural Conflict Capital Defence",
  },
  "module-6-9": {
    title: "Institutional Order Flow: Advanced Portfolio Safeguards",
    bodyHeading: "### Core Scenario: Institutional Order Flow Capital Safeguards",
  },
  "module-6-10": {
    title: "Multi-Asset Correlation: Advanced Exposure Controls",
    bodyHeading: "### Core Scenario: Multi-Asset Correlation Exposure Controls",
  },
  "module-6-11": {
    title: "Session-Based Execution: Advanced Timing Risk Controls",
    bodyHeading: "### Core Scenario: Session-Based Execution Risk Controls",
  },
  "module-6-12": {
    title: "Psychological Mastery: Advanced Equity Defence",
    bodyHeading: "### Core Scenario: Psychological Mastery Equity Defence",
  },
  "module-6-14": {
    title: "Live Trade Simulation: Advanced Capital Preservation",
    bodyHeading: "### Core Scenario: Live Trade Simulation Capital Preservation",
  },
};

// Module-specific unique card 14 titles for "Summary of Key Concepts" (module-6-7)
const coreCard14Patches: Record<string, { title: string }> = {
  "module-6-7": {
    title: "Structural Conflicts: Key Takeaways and Checkpoints",
  },
};

// Card 11 in module-6-11 — "Evaluating Trade Performance" clash
const coreCard11Patches: Record<string, { title: string }> = {
  "module-6-11": {
    title: "Session Performance Analytics and Trade Review",
  },
};

// Patch for module-6-13 card 7 — "Creating a Comprehensive Pre-Execution Checklist"
const coreCard7Patches: Record<string, { title: string }> = {
  "module-6-13": {
    title: "Building Your Pre-Execution Scenario Checklist",
  },
};

// Track-level summary card patches (forex/gold/crypto card 8 titles and body snippets)
const trackCard8Patches: Record<string, { forex?: string; gold?: string; crypto?: string }> = {
  "module-6-8": {
    forex: "Forex Scenario Recap: Volatility Entry Summary",
    gold: "Gold Scenario Recap: Volatility Entry Summary",
    crypto: "Crypto Scenario Recap: Volatility Entry Summary",
  },
  "module-6-10": {
    crypto: "Crypto Divergence Mastery: Key Insights Summary",
  },
  "module-6-15": {
    forex: "Forex Final Recap: Scenario Planning Synthesis",
  },
};

// Gold card 5 patch for module-6-8 — "Conducting Risk-Reward Analysis"
const goldCard5Patches: Record<string, { title: string }> = {
  "module-6-8": {
    title: "Volatility-Adjusted Risk-Reward Analysis for Gold",
  },
};

// --- Helper to replace a title in a TS source file ---
function replaceTitleInFile(filePath: string, oldTitle: string, newTitle: string): boolean {
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
  console.log(`  ✅ Patched title: "${oldTitle}" → "${newTitle}"`);
  return true;
}

// --- Helper to replace a body heading in a TS source file (replaces the first occurrence) ---
function replaceBodyHeadingInFile(filePath: string, oldHeading: string, newHeading: string): boolean {
  let content = fs.readFileSync(filePath, "utf-8");
  const idx = content.indexOf(oldHeading);
  if (idx === -1) {
    console.warn(`  ⚠️  Could not find heading "${oldHeading}" in ${path.basename(filePath)}`);
    return false;
  }
  content = content.slice(0, idx) + newHeading + content.slice(idx + oldHeading.length);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  ✅ Patched body heading: "${oldHeading}" → "${newHeading}"`);
  return true;
}

async function fix() {
  console.log("--- LEVEL 6 TITLE/BODY FIX START ---\n");

  // 1. Fix core card 15: "Core Advanced Risk Management 15"
  for (const [mod, patch] of Object.entries(coreCard15Patches)) {
    const corePath = path.join(levelDir, mod, "core.ts");
    if (!fs.existsSync(corePath)) {
      console.error(`❌ Missing: ${mod}/core.ts`);
      continue;
    }
    console.log(`[${mod}] Patching card-15 title...`);
    replaceTitleInFile(corePath, "Core Advanced Risk Management 15", patch.title);
    replaceBodyHeadingInFile(corePath, "### Core Scenario: Advanced Risk Management", patch.bodyHeading);
  }

  // 2. Fix core card 14: "Summary of Key Concepts" in module-6-7
  for (const [mod, patch] of Object.entries(coreCard14Patches)) {
    const corePath = path.join(levelDir, mod, "core.ts");
    if (!fs.existsSync(corePath)) continue;
    console.log(`\n[${mod}] Patching card-14 title...`);
    replaceTitleInFile(corePath, "Summary of Key Concepts", patch.title);
  }

  // 3. Fix core card 11: "Evaluating Trade Performance" in module-6-11
  for (const [mod, patch] of Object.entries(coreCard11Patches)) {
    const corePath = path.join(levelDir, mod, "core.ts");
    if (!fs.existsSync(corePath)) continue;
    console.log(`\n[${mod}] Patching card-11 title...`);
    replaceTitleInFile(corePath, "Evaluating Trade Performance", patch.title);
  }

  // 4. Fix core card 7: "Creating a Comprehensive Pre-Execution Checklist" in module-6-13
  for (const [mod, patch] of Object.entries(coreCard7Patches)) {
    const corePath = path.join(levelDir, mod, "core.ts");
    if (!fs.existsSync(corePath)) continue;
    console.log(`\n[${mod}] Patching card-7 title...`);
    replaceTitleInFile(corePath, "Creating a Comprehensive Pre-Execution Checklist", patch.title);
  }

  // 5. Fix track card 8 titles (forex/gold/crypto summary cards)
  for (const [mod, tracks] of Object.entries(trackCard8Patches)) {
    for (const [track, newTitle] of Object.entries(tracks)) {
      const trackPath = path.join(levelDir, mod, `${track}.ts`);
      if (!fs.existsSync(trackPath)) {
        console.error(`❌ Missing: ${mod}/${track}.ts`);
        continue;
      }
      console.log(`\n[${mod}/${track}.ts] Patching card-8 summary title...`);
      const oldTitleMap: Record<string, string> = {
        forex: "Summary of Forex Concepts",
        gold: "Summary of Gold Concepts",
        crypto: "Summary of Crypto Concepts",
      };
      if (track === "crypto" && mod === "module-6-10") {
        replaceTitleInFile(trackPath, "Key Insights on Divergence", newTitle as string);
      } else {
        replaceTitleInFile(trackPath, oldTitleMap[track] || "", newTitle as string);
      }
    }
  }

  // 6. Fix gold card 5 in module-6-8: "Conducting Risk-Reward Analysis"
  for (const [mod, patch] of Object.entries(goldCard5Patches)) {
    const goldPath = path.join(levelDir, mod, "gold.ts");
    if (!fs.existsSync(goldPath)) continue;
    console.log(`\n[${mod}/gold.ts] Patching card-5 title...`);
    replaceTitleInFile(goldPath, "Conducting Risk-Reward Analysis", patch.title);
  }

  // 7. Fix body duplicates: module-6-8 forex card 8 vs module-6-15 forex card 8
  // Both share "### Core Scenario: Recap of Key Concepts\nThis summary consol..."
  // Patch module-6-15 forex to have a different heading
  {
    const l15ForexPath = path.join(levelDir, "module-6-15", "forex.ts");
    if (fs.existsSync(l15ForexPath)) {
      console.log("\n[module-6-15/forex.ts] Patching duplicate body heading...");
      replaceBodyHeadingInFile(
        l15ForexPath,
        "### Core Scenario: Recap of Key Concepts\nThis summary consol",
        "### Forex Synthesis: Scenario Planning Final Review\nThis comprehensive synthesis consol"
      );
    }
  }

  // 8. Fix body duplicate: module-6-10 crypto card 8 shares body with another card
  {
    const l10CryptoPath = path.join(levelDir, "module-6-10", "crypto.ts");
    if (fs.existsSync(l10CryptoPath)) {
      console.log("\n[module-6-10/crypto.ts] Patching duplicate body heading...");
      replaceBodyHeadingInFile(
        l10CryptoPath,
        "### Core Scenario: Key Insights on Divergence\nThis card summ",
        "### Crypto Divergence: Multi-Asset Summary and Application\nThis advanced synthesis summ"
      );
    }
  }

  console.log("\n--- FIX COMPLETE ---");
}

fix().catch((err) => {
  console.error("FIX FAILED:", err);
  process.exit(1);
});
