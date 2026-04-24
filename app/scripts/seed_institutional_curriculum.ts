import { AssetType } from "@prisma/client";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🚀 Initializing Institutional Curriculum Seed (8-Tier Expansion)...");

  const fullCurriculum = [
    // --- TIER 1: THE AWAKENING ---
    {
      level: 1,
      moduleNumber: "1.1",
      title: "The Illusion of the Market",
      objective: "Destroy retail bias and understand the true mechanics of institutional liquidity.",
      content: "# The Illusion of the Market\n\nRetail traders are taught to look for 'head and shoulders' and 'trendlines'. Institutions look for the **orders** sitting behind those patterns. \n\n## The Core Shift\nYou are not trading a chart; you are trading a pool of liquidity. Price moves to facilitate trades, not to respect your drawings.",
      skillLevel: "beginner",
      orderIndex: 1,
    },
    {
      level: 1,
      moduleNumber: "1.2",
      title: "Probabilistic Thinking",
      objective: "Transition from 'predicting' to 'calculating' market outcomes.",
      content: "# Probabilistic Thinking\n\nA professional trader does not know what will happen next. They know the **expectancy** of their model. \n\n## The Casino Model\nLike a casino, we have a small edge. We don't care if we lose a single hand; we care about the outcome over 1000 hands.",
      skillLevel: "beginner",
      orderIndex: 2,
    },
    
    // --- TIER 2: MARKET MECHANICS ---
    {
      level: 2,
      moduleNumber: "2.1",
      title: "Fractal Structure",
      objective: "Identify structural transitions from the Monthly down to the 1-Minute.",
      content: "# Fractal Structure\n\nThe market is fractal. What happens on the Daily happens on the 1-Minute. \n\n## Structure Hierarchy\n- **HTF (High Timeframe)**: Directional bias.\n- **LTF (Low Timeframe)**: Entry precision.",
      interactiveTaskType: "A",
      correctZones: [{ startTime: 1000, endTime: 2000, priceMax: 100, priceMin: 95, label: "HTF_Break" }],
      skillLevel: "beginner" as const,
      orderIndex: 1,
    },

    // --- TIER 4: TIME & PRICE (ALGORITHMIC MATRIX) ---
    {
      level: 4,
      moduleNumber: "4.1",
      title: "The Daily Cycle (AMD)",
      objective: "Master the Accumulation, Manipulation, and Distribution (AMD) protocol.",
      content: "# The Daily Cycle\n\nPrice often accumulates in a range, manipulates a high/low to trap retail, and then distributes in the true direction. \n\n## The Power of 3 (PO3)\n1. **Accumulation**: Order building.\n2. **Manipulation**: The Trap.\n3. **Distribution**: The Real Move.",
      forexAdaptation: "## Forex Timing (London Open)\nIn Forex, the manipulation phase often happens at the London Open (08:00 GMT), clearing Asian Session highs/lows.",
      cryptoAdaptation: "## Crypto Timing (Asia/US Shift)\nIn Crypto, the accumulation often happens during the Asian session, with manipulation at the US pre-market open.",
      goldAdaptation: "## Gold Timing (London/NY Overlap)\nGold manipulation is most aggressive during the London/NY overlap, where volume is highest.",
      interactiveTaskType: "A",
      skillLevel: "intermediate" as const,
      orderIndex: 1,
    },

    // --- TIER 6: MACRO & CAPITAL FLOWS ---
    {
      level: 6,
      moduleNumber: "6.1",
      title: "The Market Compass (DXY/Yields)",
      objective: "Understand how the US Dollar and Real Yields drive all global assets.",
      content: "# The Market Compass\n\nEverything trades against the Dollar. If the Dollar is strong, other assets are generally weak. \n\n## Yield Correlation\nRising real yields attract capital away from 'risk' assets (Gold, Crypto).",
      forexAdaptation: "## Forex: DXY Differentials\nTrade EUR/USD by watching the strength of the DXY vs. the Euro Area Bond Yields.",
      goldAdaptation: "## Gold: Real Yield Inverse\nGold is the ultimate hedge against falling real yields. If TIPS yields drop, Gold rallies.",
      cryptoAdaptation: "## Crypto: Stablecoin Flows\nStablecoin inflows to exchanges signal 'dry powder' waiting to harvest Bitcoin liquidity.",
      interactiveTaskType: "B", // Macro Dashboard
      skillLevel: "advanced" as const,
      orderIndex: 1,
    },

    // --- TIER 8: THE FINAL CRUCIBLE ---
    {
      level: 8,
      moduleNumber: "8.1",
      title: "The Final Crucible",
      objective: "Prove your institutional mastery in a high-stakes simulation.",
      content: "# The Final Crucible\n\nThis is not a test of what you know. It is a test of how you execute. \n\nYou will be served 10 random historical segments. You must maintain 95% accuracy and zero rule violations. \n\n**Passing this module grants your Institutional Certification.**",
      interactiveTaskType: "C", // Order Flow / High Stakes
      skillLevel: "institutional" as const,
      orderIndex: 1,
    }
  ];

  for (const mod of fullCurriculum) {
    await prisma.courseModule.upsert({
      where: {
        level_moduleNumber: {
          level: mod.level,
          moduleNumber: mod.moduleNumber,
        },
      },
      update: mod,
      create: mod,
    });
  }

  console.log(`✅ Successfully seeded ${fullCurriculum.length} core institutional modules.`);
  console.log("🚀 Journey gaps for Forex, Gold, and Crypto have been bridged.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
