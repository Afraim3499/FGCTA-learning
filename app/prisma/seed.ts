import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // ============================================
  // TRADING PHASES (Rebalanced from audit)
  // ============================================
  const phases = [
    {
      phaseNumber: 1,
      startingCapital: 100,
      targetProfitPct: 20,
      maxDrawdownPct: 10,
      timeLimitDays: 30,
      minTrades: 15,
      minTradingDays: 10,
      maxRiskPerTrade: 2.0,
      maxPositions: 2,
      maxTradesPerDay: 5,
      maxLeverage: 5,
      commissionRate: 0.001,
    },
    {
      phaseNumber: 2,
      startingCapital: 300,
      targetProfitPct: 20,
      maxDrawdownPct: 10,
      timeLimitDays: 45,
      minTrades: 25,
      minTradingDays: 15,
      maxRiskPerTrade: 2.0,
      maxPositions: 3,
      maxTradesPerDay: 8,
      maxLeverage: 10,
      commissionRate: 0.001,
    },
    {
      phaseNumber: 3,
      startingCapital: 1000,
      targetProfitPct: 25,
      maxDrawdownPct: 12,
      timeLimitDays: 60,
      minTrades: 40,
      minTradingDays: 20,
      maxRiskPerTrade: 2.0,
      maxPositions: 4,
      maxTradesPerDay: 10,
      maxLeverage: 15,
      commissionRate: 0.002,
    },
    {
      phaseNumber: 4,
      startingCapital: 3000,
      targetProfitPct: 25,
      maxDrawdownPct: 12,
      timeLimitDays: 75,
      minTrades: 50,
      minTradingDays: 25,
      maxRiskPerTrade: 2.0,
      maxPositions: 5,
      maxTradesPerDay: 12,
      maxLeverage: 20,
      commissionRate: 0.002,
    },
    {
      phaseNumber: 5,
      startingCapital: 10000,
      targetProfitPct: 30,
      maxDrawdownPct: 15,
      timeLimitDays: 90,
      minTrades: 60,
      minTradingDays: 30,
      maxRiskPerTrade: 1.5,
      maxPositions: 6,
      maxTradesPerDay: 15,
      maxLeverage: 25,
      commissionRate: 0.002,
    },
  ];

  for (const phase of phases) {
    await prisma.tradingPhase.upsert({
      where: { phaseNumber: phase.phaseNumber },
      update: phase,
      create: phase,
    });
  }
  console.log(`  ✅ ${phases.length} trading phases seeded`);

  // ============================================
  // BADGES (MVP subset — 10 core badges)
  // ============================================
  const badges = [
    {
      name: "First Trade",
      description: "Execute your first simulated trade",
      rarity: "common" as const,
      conditionType: "trades_count",
      conditionValue: { min: 1 },
    },
    {
      name: "Foundation Complete",
      description: "Complete Level 0 and Level 1",
      rarity: "common" as const,
      conditionType: "level_complete",
      conditionValue: { levels: [0, 1] },
    },
    {
      name: "Five Strategy Master",
      description: "Complete all Level 2 modules (5 core strategies)",
      rarity: "uncommon" as const,
      conditionType: "level_complete",
      conditionValue: { levels: [2] },
    },
    {
      name: "Phase Crusher",
      description: "Pass any trading phase on first attempt (0 resets)",
      rarity: "rare" as const,
      conditionType: "phase_clean",
      conditionValue: { max_resets: 0 },
    },
    {
      name: "Discipline Streak 7",
      description: "7 consecutive trading days with 0 rule violations",
      rarity: "uncommon" as const,
      conditionType: "streak",
      conditionValue: { min_streak: 7 },
    },
    {
      name: "Discipline Streak 30",
      description: "30 consecutive trading days with 0 violations",
      rarity: "epic" as const,
      conditionType: "streak",
      conditionValue: { min_streak: 30 },
    },
    {
      name: "Risk Master",
      description: "Complete a phase with average risk per trade ≤ 1%",
      rarity: "rare" as const,
      conditionType: "avg_risk",
      conditionValue: { max_avg_risk: 1.0 },
    },
    {
      name: "Stop-Loss Saint",
      description: "100% stop-loss compliance across an entire phase",
      rarity: "rare" as const,
      conditionType: "sl_compliance",
      conditionValue: { min_compliance: 100 },
    },
    {
      name: "Profit Machine",
      description: "Achieve profit factor ≥ 2.5 in any phase",
      rarity: "rare" as const,
      conditionType: "profit_factor",
      conditionValue: { min_pf: 2.5 },
    },
    {
      name: "Clean Sweep",
      description: "Pass all 5 phases with 0 total resets",
      rarity: "legendary" as const,
      conditionType: "all_phases_clean",
      conditionValue: { max_total_resets: 0 },
    },
  ];

  for (const badge of badges) {
    await prisma.badge.upsert({
      where: { name: badge.name },
      update: badge,
      create: badge,
    });
  }
  console.log(`  ✅ ${badges.length} badges seeded`);

  // ============================================
  // COURSE MODULES (L0-L2 Placeholder Data)
  // ============================================
  const courseModules = [
    {
      level: 0,
      moduleNumber: "0.1",
      title: "What Is Trading",
      objective: "Understand speculation vs. investing, market participants, and edge.",
      content: "# What Is Trading\n\nTrading is the art of speculation. Unlike investing, which seeks long-term value appreciation, trading capitalizes on short-term price movements. \n\n## Key Concepts\n- **Market Participants**: Retail traders, institutions, market makers.\n- **The Spread**: The difference between the Bid and Ask price.\n- **Edge**: A statistical advantage that yields positive expectancy over a series of trades.",
      skillLevel: "beginner" as const,
      orderIndex: 1,
    },
    {
      level: 0,
      moduleNumber: "0.2",
      title: "Instrument Mechanics",
      objective: "Understand how Forex pairs, crypto tokens, and gold contracts work.",
      content: "# Instrument Mechanics\n\nDifferent markets have different mechanics. Understanding what you are trading is crucial.\n\n## Core Mechanics\n- **Leverage**: Controlling a large position with a smaller amount of capital.\n- **Margin**: The collateral required to open and maintain a leveraged position.",
      forexAdaptation: "## Forex Mechanics\n- **Pips**: The smallest price move in an exchange rate.\n- **Lots**: Standard (100k), Mini (10k), Micro (1k).",
      cryptoAdaptation: "## Crypto Mechanics\n- **Tokens**: Digital assets on a blockchain.\n- **Gas Fees**: The cost to process a transaction.",
      goldAdaptation: "## Gold Mechanics\n- **XAU/USD**: Spot gold traded against the US Dollar.\n- **Contracts**: Traded in ounces (oz).",
      skillLevel: "beginner" as const,
      orderIndex: 2,
    },
    {
      level: 1,
      moduleNumber: "1.1",
      title: "Trend Structure",
      objective: "Identify trending vs. ranging markets using price structure.",
      content: "# Trend Structure\n\nThe market moves in waves. A trend is a directional series of these waves.\n\n## Identifying Trends\n- **Uptrend**: Higher Highs (HH) and Higher Lows (HL).\n- **Downtrend**: Lower Highs (LH) and Lower Lows (LL).\n- **Ranging**: Horizontal movement between established support and resistance.",
      logicIds: ["TF_06.1"],
      skillLevel: "beginner" as const,
      orderIndex: 1,
    },
    {
      level: 2,
      moduleNumber: "2.1",
      title: "Trend Following (Core)",
      objective: "Enter and ride trends using smoothed price systems.",
      content: "# Trend Following\n\nTrend following systems attempt to capture the majority of a market trend. They are usually right less than 50% of the time, but the winners are significantly larger than the losers.\n\n## Moving Averages\nThe simplest trend following tool is the Moving Average (MA).",
      strategyFamilies: ["TF_01", "TF_02", "TF_05"],
      logicIds: ["TF_01.1", "TF_02.1", "TF_02.2", "TF_05.1"],
      skillLevel: "intermediate" as const,
      orderIndex: 1,
    }
  ];

  for (const mod of courseModules) {
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
  console.log(`  ✅ ${courseModules.length} course modules seeded`);

  // ============================================
  // KNOWLEDGE TESTS (L0 Placeholder)
  // ============================================
  const tests = [
    {
      level: 0,
      title: "Market Foundations Assessment",
      passThreshold: 80,
      timeLimitMin: 15,
      questionsPerAttempt: 5,
      questions: [
        {
          id: "q0_1",
          question: "What is the primary difference between trading and investing?",
          options: ["Trading is long-term, investing is short-term", "Trading capitalizes on short-term price moves, investing seeks long-term value", "There is no difference", "Investing is only for institutions"],
          correctIndex: 1,
          explanation: "Trading is generally short-term speculation, while investing focuses on long-term appreciation."
        },
        {
          id: "q0_2",
          question: "What does 'The Spread' represent in a trading terminal?",
          options: ["The broker's commission only", "The difference between Bid and Ask price", "The total profit of a trade", "The speed of price movement"],
          correctIndex: 1,
          explanation: "The spread is the gap between the highest price a buyer is willing to pay (Bid) and the lowest price a seller is willing to accept (Ask)."
        },
        {
          id: "q0_3",
          question: "Which of the following is considered an institutional market participant?",
          options: ["Retail traders", "Hedge Funds", "Casual investors", "Small businesses"],
          correctIndex: 1,
          explanation: "Hedge funds, investment banks, and central banks are institutional participants that move high volumes."
        },
        {
          id: "q0_4",
          question: "In Forex, what is a 'Pip'?",
          options: ["A type of order", "A unit of leverage", "The smallest price move in an exchange rate", "A trading session"],
          correctIndex: 2,
          explanation: "Percentage in Point (Pip) is the standard unit of measurement for price changes in currency pairs."
        },
        {
          id: "q0_5",
          question: "What happens when you use 'Leverage' in your trading account?",
          options: ["Your risk decreases", "You can control a larger position with less capital", "You are guaranteed to win", "Your spread is reduced"],
          correctIndex: 1,
          explanation: "Leverage allows you to multiply your buying power, though it also increases potential risk."
        }
      ]
    }
  ];

  for (const test of tests) {
    await prisma.knowledgeTest.upsert({
      where: { level: test.level },
      update: test,
      create: test,
    });
  }
  console.log(`  ✅ ${tests.length} knowledge tests seeded`);

  console.log("🌱 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
