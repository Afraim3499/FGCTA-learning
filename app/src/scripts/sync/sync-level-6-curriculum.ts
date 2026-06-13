import { level6Curriculum } from "../../content/level-6";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

/**
 * Modular Level 6 Curriculum Sync Pipeline
 *
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 6 CURRICULUM SYNC START ---");
  console.log(`Mode: ${isDryRun ? "DRY RUN" : "LIVE SYNC"}`);

  if (!isDryRun && !forceLive) {
    console.error("CRITICAL: Live sync requested but FORCE_LIVE is not 'true'. Aborting for safety.");
    process.exit(1);
  }

  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("CRITICAL: DIRECT_URL or DATABASE_URL is missing.");
    process.exit(1);
  }

  // Detect SSL requirement for local postgres vs remote supabase
  const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
  const pool = new Pool({
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
  });

  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    let updateCount = 0;
    let createCount = 0;

    for (const mod of level6Curriculum) {
      console.log(`\nProcessing Module ${mod.moduleNumber}: ${mod.title}`);

      // Helper to wrap cards in the expected block format
      const wrap = (cards: any[]) =>
        cards && cards.length > 0
          ? `:::lesson-cards\n${JSON.stringify(cards, null, 2)}\n:::`
          : "";

      const dbData: any = {
        level: mod.level,
        moduleNumber: mod.moduleNumber,
        title: mod.title,
        objective: mod.objective,
        skillLevel: mod.skillLevel as SkillLevel,
        orderIndex: mod.orderIndex,
        content: wrap(mod.tracks.core),
        forexAdaptation: wrap(mod.tracks.forex || []),
        goldAdaptation: wrap(mod.tracks.gold || []),
        cryptoAdaptation: wrap(mod.tracks.crypto || []),
        marketTrack: "core" as ModuleTrack, // Default track
      };

      // Level 6 final gate module (6.15)
      if (mod.moduleNumber === "6.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = {
          scenarioSlug: "scenario-planning-crucible",
          missionTitle: "Level 6 Final Gate",
          passThreshold: 80,
        };
      }

      const existing = await prisma.courseModule.findUnique({
        where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      });

      if (existing) {
        updateCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.update({
            where: { id: existing.id },
            data: dbData,
          });
        }
      } else {
        createCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.create({
            data: dbData,
          });
        }
      }
    }

    console.log("\n--- LEVEL 6 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);

    // Level 6 Final Gate Scenario
    const gateScenario = {
      slug: "scenario-planning-crucible",
      title: "Level 6 Gate: The Scenario Planning Crucible",
      description:
        "Final assessment for Level 6. Tests the student's mastery of branching logic, structural probability, and multi-timeframe scenario synthesis.",
      scenarioType: "structure_annotation",
      status: "active",
      marketTrack: "multi",
      level: 6,
      instrument: "EURUSD",
      timeframe: "4H",
      candleSourceType: "curated",
      prompt:
        "This is a two-way branching scenario. Identify the Decision Gate — the key level where the market will confirm either the Primary (bullish) or Alternative (bearish) scenario. Draw a box around the Decision Gate zone between the swing low support at 1.0820 and the resistance confluence at 1.0880.",
      passThreshold: 80,
      xpAward: 600,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      candleData: [
        { time: "2024-02-01", open: 1.0800, high: 1.0840, low: 1.0780, close: 1.0820 },
        { time: "2024-02-02", open: 1.0820, high: 1.0870, low: 1.0810, close: 1.0855 },
        { time: "2024-02-05", open: 1.0855, high: 1.0890, low: 1.0840, close: 1.0875 },
        { time: "2024-02-06", open: 1.0875, high: 1.0900, low: 1.0855, close: 1.0862 },
        { time: "2024-02-07", open: 1.0862, high: 1.0880, low: 1.0835, close: 1.0845 },
        { time: "2024-02-08", open: 1.0845, high: 1.0865, low: 1.0820, close: 1.0830 },
        { time: "2024-02-09", open: 1.0830, high: 1.0855, low: 1.0815, close: 1.0848 },
        { time: "2024-02-12", open: 1.0848, high: 1.0885, low: 1.0835, close: 1.0878 },
        { time: "2024-02-13", open: 1.0878, high: 1.0910, low: 1.0860, close: 1.0895 },
        { time: "2024-02-14", open: 1.0895, high: 1.0930, low: 1.0875, close: 1.0920 },
        { time: "2024-02-15", open: 1.0920, high: 1.0945, low: 1.0898, close: 1.0935 },
        { time: "2024-02-16", open: 1.0935, high: 1.0960, low: 1.0915, close: 1.0950 },
        { time: "2024-02-19", open: 1.0950, high: 1.0970, low: 1.0925, close: 1.0942 },
        { time: "2024-02-20", open: 1.0942, high: 1.0958, low: 1.0910, close: 1.0918 },
        { time: "2024-02-21", open: 1.0918, high: 1.0935, low: 1.0890, close: 1.0900 },
        { time: "2024-02-22", open: 1.0900, high: 1.0915, low: 1.0875, close: 1.0885 },
        { time: "2024-02-23", open: 1.0885, high: 1.0900, low: 1.0855, close: 1.0862 },
        { time: "2024-02-26", open: 1.0862, high: 1.0878, low: 1.0830, close: 1.0840 },
        { time: "2024-02-27", open: 1.0840, high: 1.0858, low: 1.0815, close: 1.0825 },
        { time: "2024-02-28", open: 1.0825, high: 1.0845, low: 1.0800, close: 1.0810 },
      ] as any,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [
          {
            label: "Decision Gate Zone",
            timeStart: "2024-02-05",
            timeEnd: "2024-02-09",
            priceMin: 1.0820,
            priceMax: 1.0880,
          },
        ],
        feedbackOnPass:
          "Scenario Planning Crucible completed. You correctly identified the Decision Gate — the structural confluence where the primary and alternative scenarios diverge. This is the core of advanced branching logic.",
        feedbackOnFail:
          "The zone is incorrect. Focus on the area between the swing low support (1.0820) and the resistance confluence (1.0880) where the price was deciding its directional bias during 2024-02-05 to 2024-02-09.",
      },
    };

    // Level 6 Knowledge Test
    const level6Test = {
      level: 6,
      title: "Level 6 Scenario Planning Test",
      passThreshold: 80,
      timeLimitMin: 35,
      questionsPerAttempt: 15,
      questions: [
        {
          id: "q6_sp_1",
          question: "What is the core principle of 'branching logic' in advanced scenario planning?",
          options: [
            "Committing to a single directional bias before price confirms",
            "Building pre-planned 'If/Then' conditional pathways for both bullish and bearish outcomes",
            "Ignoring lower timeframe signals and only trading on the daily chart",
            "Using a single indicator to generate all entry and exit signals",
          ],
          correctIndex: 1,
          explanation:
            "Branching logic requires a trader to pre-plan both branches — if X happens, then Y action. This eliminates decision-paralysis by having pre-committed responses ready for both market directions.",
        },
        {
          id: "q6_sp_2",
          question: "What defines the 'Primary Scenario' in the structural probability framework?",
          options: [
            "The trade with the largest potential profit target",
            "The scenario with the highest evidence stack weight and structural probability",
            "The most recent trade idea shared on social media by an influencer",
            "Any trade taken on the 15-minute timeframe during London session",
          ],
          correctIndex: 1,
          explanation:
            "The Primary Scenario is the highest-probability outcome derived from the weighted evidence stack — structure, confluence, liquidity, and macro narrative all pointing in one direction.",
        },
        {
          id: "q6_sp_3",
          question: "When the Primary Scenario is invalidated, what must a trader immediately do?",
          options: [
            "Double down on the trade to average down the entry price",
            "Close the trade, accept the structural invalidation, and activate the Alternative Scenario plan",
            "Switch to a different currency pair immediately without any analysis",
            "Wait 24 hours before making any trading decisions",
          ],
          correctIndex: 1,
          explanation:
            "Structural invalidation means the market has proven your thesis wrong. The pre-planned Alternative Scenario branch becomes active — this is the discipline that separates professional traders.",
        },
        {
          id: "q6_sp_4",
          question: "What is a 'Decision Gate' in branching scenario planning?",
          options: [
            "A mandatory approval from a risk manager before trade entry",
            "A key structural level where the market will confirm or invalidate the primary scenario direction",
            "The maximum number of trades allowed per session",
            "A proprietary trading algorithm used by institutional desks",
          ],
          correctIndex: 1,
          explanation:
            "A Decision Gate is a price level or structural confluence where the market's next move will definitively confirm either the bullish or bearish branch of your two-way scenario.",
        },
        {
          id: "q6_sp_5",
          question: "How does the DXY (Dollar Index) function as a correlation anchor in Forex scenario planning?",
          options: [
            "The DXY has no relevance to individual currency pairs",
            "A strengthening DXY typically suppresses USD-quoted pairs (e.g., EURUSD) while lifting dollar-base pairs (e.g., USDCHF)",
            "The DXY only matters for commodity trading, not forex",
            "DXY movements always lead EURUSD by exactly 4 hours",
          ],
          correctIndex: 1,
          explanation:
            "The DXY is the inverse anchor for all major USD pairs. Understanding its directional bias confirms or contradicts your individual pair scenario, adding a critical layer to your evidence stack.",
        },
        {
          id: "q6_sp_6",
          question: "What does SMT Divergence (Smart Money Technique Divergence) between correlated pairs signal?",
          options: [
            "That both pairs are trending in the same direction with equal strength",
            "A potential institutional accumulation or distribution phase, often preceding a reversal",
            "A broken internet connection at the broker's data center",
            "That the trading session is about to close",
          ],
          correctIndex: 1,
          explanation:
            "SMT Divergence occurs when correlated pairs (e.g., EURUSD and GBPUSD) make opposing highs or lows. This divergence reveals where institutional order flow is concentrated, signaling a likely reversal.",
        },
        {
          id: "q6_sp_7",
          question: "In a structural conflict between adjacent timeframes (e.g., daily bullish vs 4H bearish), what is the correct protocol?",
          options: [
            "Always trade the lower timeframe direction to capture more frequent setups",
            "Reduce position size, wait for higher timeframe confirmation, and do not force entries in the conflict zone",
            "Ignore the higher timeframe and rely solely on 1-minute scalps",
            "Enter the trade immediately on both sides simultaneously to capture whichever direction moves first",
          ],
          correctIndex: 1,
          explanation:
            "Structural conflict zones require capital defense first. Reduce size, wait for the higher timeframe MSS to confirm direction, and only then enter with precision on the lower timeframe.",
        },
        {
          id: "q6_sp_8",
          question: "What is the role of the 'evidence stack' in multi-confluence scenario planning?",
          options: [
            "To count how many followers an analyst has on social media before copying their trade",
            "To systematically weight and combine structural, technical, and fundamental signals to calculate the probability of each scenario",
            "To track the number of winning trades in a row before increasing position size",
            "To document losses for tax purposes at the end of the financial year",
          ],
          correctIndex: 1,
          explanation:
            "The evidence stack is the sum of all weighted signals supporting a scenario. More aligned signals = higher structural probability. This scientific approach removes emotional bias from scenario selection.",
        },
        {
          id: "q6_sp_9",
          question: "Why is 'feedback loop integration' critical in live scenario planning?",
          options: [
            "It allows traders to complain about losing trades on trading forums",
            "Market responses to your scenarios provide real-time data that must be used to validate or invalidate the ongoing branch",
            "Feedback loops automatically place trades without human intervention",
            "It is only useful for algorithmic systems, not discretionary traders",
          ],
          correctIndex: 1,
          explanation:
            "A feedback loop means that as price moves, you continuously validate whether market behavior confirms your scenario. Deviations trigger a branch switch, keeping your analysis aligned with reality.",
        },
        {
          id: "q6_sp_10",
          question: "When planning a Forex scenario around a major news event (e.g., NFP), what should be done BEFORE the release?",
          options: [
            "Place a market order 5 minutes before the release to capture the spike",
            "Pre-plan both the bullish and bearish scenario branches including entry triggers, stop levels, and target zones for each outcome",
            "Avoid all trading activity for the entire month around the event",
            "Close all existing positions and open the opposite direction post-release",
          ],
          correctIndex: 1,
          explanation:
            "Pre-planning both branches before the event means you are never surprised. Regardless of the outcome, your decision tree is already mapped — execution becomes mechanical, not emotional.",
        },
        {
          id: "q6_sp_11",
          question: "What makes a 'high-probability' scenario branch in the structural probability model?",
          options: [
            "A scenario that has won three consecutive times in the past week",
            "A scenario where multiple independent evidence types (structure, liquidity, session timing, macro narrative) all confirm the same directional bias",
            "Any trade shared by a tier-1 investment bank on their research portal",
            "A scenario based on a single RSI reading below 30",
          ],
          correctIndex: 1,
          explanation:
            "High probability emerges from confluence — when structure, liquidity pools, session timing, and macro narrative all point to the same outcome independently. Single-indicator scenarios are low-probability by definition.",
        },
        {
          id: "q6_sp_12",
          question: "How should position sizing change when you are operating in a structural conflict zone?",
          options: [
            "Increase to maximum leverage to capture the breakout in either direction",
            "Reduce to 25-50% of standard size to limit exposure until the conflict resolves",
            "Keep position size identical regardless of market conditions",
            "Only trade in conflict zones as they provide the most profit opportunities",
          ],
          correctIndex: 1,
          explanation:
            "Structural conflict zones carry elevated probability of whipsaw and false breakouts. Halving position size preserves capital while still allowing participation if the trade moves favorably.",
        },
        {
          id: "q6_sp_13",
          question: "In gold scenario planning, how does macro yield divergence (rising yields) typically affect the primary scenario bias?",
          options: [
            "Rising yields are bullish for gold as they increase inflation expectations",
            "Rising yields create headwinds for gold (bearish pressure) as opportunity cost of holding non-yielding gold increases",
            "Yield levels have zero correlation with gold price movements",
            "Rising yields only affect crypto markets, not precious metals",
          ],
          correctIndex: 1,
          explanation:
            "Gold is a non-yielding asset. When bond yields rise, the opportunity cost of holding gold increases, creating structural bearish pressure. This macro signal is a core evidence stack input for gold scenario planning.",
        },
        {
          id: "q6_sp_14",
          question: "What is the purpose of running a 'mid-session audit' during live trading?",
          options: [
            "To calculate your tax liability in real-time",
            "To reassess active positions, validate or invalidate running scenarios, and adjust targets based on new structural data",
            "To check social media for the latest trading tips",
            "To document all closed positions for broker reporting",
          ],
          correctIndex: 1,
          explanation:
            "A mid-session audit is a structured checkpoint during a live session where you review all open positions, evaluate whether market behavior still supports your active scenario branch, and make data-driven adjustments.",
        },
        {
          id: "q6_sp_15",
          question: "What constitutes 'scenario synthesis mastery' at Level 6?",
          options: [
            "The ability to open the maximum number of positions simultaneously across all markets",
            "The integrated ability to build, weight, monitor, audit, and adapt multi-timeframe branching scenarios across forex, gold, and crypto simultaneously",
            "Memorizing all RSI and MACD signal combinations across 50 currency pairs",
            "Having a 100% win rate across all scenarios executed in a calendar month",
          ],
          correctIndex: 1,
          explanation:
            "Level 6 mastery is the synthesis of all skills: building scenarios from evidence, weighting probabilities, executing within structural rules, running live audits, and adapting branches as market conditions evolve — across all three asset classes.",
        },
      ],
    };

    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");

      // Upsert Gate Scenario
      console.log("\nUpserting Gate Scenario: 'scenario-planning-crucible'...");
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: gateScenario.slug },
        update: gateScenario as any,
        create: gateScenario as any,
      });
      console.log(`   Upserted scenario: ${scenario.title}`);

      // Link scenario to module 6.15
      console.log("\nUpdating Scenario Links for Level 6 Final Gate...");
      const mod615 = await prisma.courseModule.findFirst({
        where: { level: 6, moduleNumber: "6.15" },
      });

      if (mod615) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod615.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod615.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 },
        });
        console.log(`   Linked scenario '${scenario.slug}' to module 6.15.`);
      } else {
        console.warn("   Warning: Module 6.15 not found in database.");
      }

      // Upsert Level 6 Knowledge Test
      console.log("\nSyncing Level 6 Knowledge Test (Scenario Planning)...");
      await prisma.knowledgeTest.upsert({
        where: { level: 6 },
        update: level6Test as any,
        create: level6Test as any,
      });
      console.log("   ✅ Level 6 Knowledge Test synced: 'Level 6 Scenario Planning Test'");
    }
  } catch (error) {
    console.error("\nSYNC FAILED:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

sync();
