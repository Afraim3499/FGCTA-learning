import { level5Curriculum } from "../../content/level-5";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

/**
 * Modular Level 5 Curriculum Sync Pipeline
 * 
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 5 CURRICULUM SYNC START ---");
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
    ssl: isLocal ? false : { rejectUnauthorized: false }
  });
  
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    let updateCount = 0;
    let createCount = 0;

    for (const mod of level5Curriculum) {
      console.log(`\nProcessing Module ${mod.moduleNumber}: ${mod.title}`);

      // Helper to wrap cards in the expected block format
      const wrap = (cards: any[]) => cards && cards.length > 0 ? `:::lesson-cards\n${JSON.stringify(cards, null, 2)}\n:::` : "";

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
        marketTrack: "core" as ModuleTrack // Default track
      };

      if (mod.moduleNumber === "5.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = { scenarioSlug: "drawdown-crucible", missionTitle: "Level 5 Final Gate", passThreshold: 80 };
      } else if (mod.moduleNumber === "5.10") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = { scenarioSlug: "level-5-scenario-planning-gate", missionTitle: "Level 5 Synthesis Mission", passThreshold: 85 };
      } else {
        dbData.interactiveTaskType = null;
        dbData.interactiveTaskData = null;
      }

      const existing = await prisma.courseModule.findUnique({
        where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } }
      });

      if (existing) {
        updateCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.update({
            where: { id: existing.id },
            data: dbData
          });
        }
      } else {
        createCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.create({
            data: dbData
          });
        }
      }
    }

    console.log("\n--- LEVEL 5 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);
    
    const gateScenario = {
      slug: "drawdown-crucible",
      title: "Level 5 Gate: The Drawdown Crucible",
      description: "Final assessment scenario for Level 5. Intentionally tests the student's adherence to the Asymmetric Gear Shift and daily circuit breaker rules.",
      scenarioType: "structure_annotation",
      status: "active",
      marketTrack: "multi",
      level: 5,
      instrument: "EURUSD",
      timeframe: "1H",
      candleSourceType: "curated",
      prompt: "Identify the Daily Circuit Breaker violation zone. During the aggressive drop between 2024-01-10 and 2024-01-12, the trader violated the 3% daily loss limit (Circuit Breaker) trying to buy the falling knife. Draw a box around this violation area to complete the risk audit.",
      passThreshold: 80,
      xpAward: 500,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      candleData: [
        { time: "2024-01-01", open: 1.1000, high: 1.1020, low: 1.0980, close: 1.1010 },
        { time: "2024-01-02", open: 1.1010, high: 1.1030, low: 1.0990, close: 1.1020 },
        { time: "2024-01-03", open: 1.1020, high: 1.1050, low: 1.1010, close: 1.1040 },
        { time: "2024-01-04", open: 1.1040, high: 1.1060, low: 1.1020, close: 1.1030 },
        { time: "2024-01-05", open: 1.1030, high: 1.1040, low: 1.0960, close: 1.0970 },
        { time: "2024-01-08", open: 1.0970, high: 1.0990, low: 1.0950, close: 1.0960 },
        { time: "2024-01-09", open: 1.0960, high: 1.0980, low: 1.0940, close: 1.0950 },
        { time: "2024-01-10", open: 1.0950, high: 1.0970, low: 1.0900, close: 1.0910 },
        { time: "2024-01-11", open: 1.0910, high: 1.0930, low: 1.0890, close: 1.0900 },
        { time: "2024-01-12", open: 1.0900, high: 1.0920, low: 1.0880, close: 1.0890 },
        { time: "2024-01-15", open: 1.0890, high: 1.0915, low: 1.0870, close: 1.0880 },
        { time: "2024-01-16", open: 1.0880, high: 1.0900, low: 1.0850, close: 1.0860 },
        { time: "2024-01-17", open: 1.0860, high: 1.0880, low: 1.0820, close: 1.0830 },
        { time: "2024-01-18", open: 1.0830, high: 1.0850, low: 1.0810, close: 1.0825 },
        { time: "2024-01-19", open: 1.0825, high: 1.0840, low: 1.0790, close: 1.0800 },
        { time: "2024-01-22", open: 1.0800, high: 1.0820, low: 1.0770, close: 1.0780 },
        { time: "2024-01-23", open: 1.0780, high: 1.0800, low: 1.0760, close: 1.0770 },
        { time: "2024-01-24", open: 1.0770, high: 1.0790, low: 1.0740, close: 1.0750 },
        { time: "2024-01-25", open: 1.0750, high: 1.0770, low: 1.0720, close: 1.0730 },
        { time: "2024-01-26", open: 1.0730, high: 1.0750, low: 1.0700, close: 1.0710 }
      ] as any,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [
          {
            label: "Circuit Breaker Zone",
            timeStart: "2024-01-10",
            timeEnd: "2024-01-12",
            priceMin: 1.0880,
            priceMax: 1.0970
          }
        ],
        feedbackOnPass: "Drawdown Crucible completed successfully. You identified the daily circuit breaker violation range and demonstrated key understanding of Level 5 Risk Architecture.",
        feedbackOnFail: "The zone is incorrect. Focus on the sharp drop between 2024-01-10 and 2024-01-12 where consecutive losses violated the daily drawdown limit."
      }
    };

    const scenarioPlanningScenario = {
      slug: "level-5-scenario-planning-gate",
      title: "Level 5 Scenario Planning Review",
      description: "Capstone synthesis mission for Level 5 — Evidence-Based Scenario Planning. Validates the learner's ability to identify the correct Review Area based on structural context, evidence stacking, and timeframe alignment.",
      scenarioType: "structure_annotation" as any,
      status: "active" as any,
      marketTrack: "multi" as any,
      level: 5,
      instrument: "EURUSD",
      timeframe: "1H",
      candleSourceType: "curated" as any,
      prompt: "Using the Scenario Planning Map workflow, identify the Review Area — the structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading. This mission validates a single zone, not a complete scenario map. However, your zone selection should reflect the full evidence stack: HTF narrative, LTF alignment, and structural context.",
      passThreshold: 85,
      xpAward: 750,
      expectedActions: { interactionMode: "chart_markup_v1" } as any,
      gradingRubric: { rules: ["accurate_zone_placement"] } as any,
      candleData: gateScenario.candleData,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-01-20", timeEnd: "2024-01-22", priceMin: 1.0950, priceMax: 1.0980 }],
        feedbackOnPass: "Level 5 complete. Your Review Area placement demonstrates structural understanding of the evidence stack and timeframe alignment. Complete your post-mission journal entry.",
        feedbackOnFail: "Review Area placement does not align with the structural context."
      } as any
    };

    if (isDryRun) {
      console.log("\n[DRY] WOULD UPSERT SCENARIO: drawdown-crucible");
      console.log("[DRY] WOULD LINK SCENARIO drawdown-crucible to Module 5.15");
      console.log("\n[DRY] WOULD UPSERT SCENARIO: level-5-scenario-planning-gate");
      console.log("[DRY] WOULD LINK SCENARIO level-5-scenario-planning-gate to Module 5.10");
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");
      
      console.log("\nUpserting Gate Scenario: 'drawdown-crucible'...");
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: gateScenario.slug },
        update: gateScenario as any,
        create: { id: crypto.randomUUID(), ...gateScenario as any },
      });
      console.log(`   Upserted scenario: ${scenario.title}`);

      console.log("\nUpdating Scenario Links for Level 5 Final Gate (5.15)...");
      const mod515 = await prisma.courseModule.findFirst({
        where: { level: 5, moduleNumber: "5.15" }
      });

      if (mod515) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod515.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod515.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 }
        });
        console.log(`   Linked scenario '${scenario.slug}' to module 5.15.`);
      } else {
        console.warn("   Warning: Module 5.15 not found in database.");
      }

      console.log("\nUpserting Scenario Planning Scenario: 'level-5-scenario-planning-gate'...");
      const scenario2 = await prisma.trainingScenario.upsert({
        where: { slug: scenarioPlanningScenario.slug },
        update: scenarioPlanningScenario as any,
        create: { id: crypto.randomUUID(), ...scenarioPlanningScenario as any },
      });
      console.log(`   Upserted scenario: ${scenario2.title}`);

      console.log("\nUpdating Scenario Links for Level 5 Module 5.10...");
      const mod510 = await prisma.courseModule.findFirst({
        where: { level: 5, moduleNumber: "5.10" }
      });

      if (mod510) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod510.id, scenarioId: scenario2.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod510.id, scenarioId: scenario2.id, requiredForProgress: true, sortOrder: 1 }
        });
        console.log(`   Linked scenario '${scenario2.slug}' to module 5.10.`);
      } else {
        console.warn("   Warning: Module 5.10 not found in database.");
      }

      // --- Level 5 Knowledge Test Upsert ---
      console.log("\nSyncing Level 5 Knowledge Test (Risk Architecture)...");
      const level5Test = {
        level: 5,
        title: "Level 5 Risk Architecture Test",
        passThreshold: 80,
        timeLimitMin: 30,
        questionsPerAttempt: 15,
        questions: [
          {
            id: "q5_ra_1",
            question: "What is the main mathematical goal of the Kelly Criterion?",
            options: [
              "To guarantee a 100% win rate across all sessions",
              "Expected value optimization and determining the mathematically optimal fraction to size per trade",
              "To eliminate all trading fees and slippage cost drag",
              "To find key historical resistance arrays on daily charts"
            ],
            correctIndex: 1,
            explanation: "The Kelly Criterion calculates the optimal fraction to risk on a trade to maximize the long-term growth rate of capital based on win rate and reward-to-risk ratio."
          },
          {
            id: "q5_ra_2",
            question: "Why is volatility-adjusted sizing (ATR-based) superior to fixed pip sizing?",
            options: [
              "Because it ensures that you always win the trade regardless of direction",
              "Fixed pip sizing fails to account for current market speed and range, causing premature stop-outs in high volatility and under-allocation in low volatility",
              "Because standard currency pairs have no volatility shifts during major news",
              "Fixed sizing is faster to execute on mobile devices"
            ],
            correctIndex: 1,
            explanation: "Volatility-adjusted sizing matches stop distance to current market extensions (ATR), keeping your statistical exposure identical while avoiding arbitrary noise sweep stopouts."
          },
          {
            id: "q5_ra_3",
            question: "If using a 1/4 Fractional Kelly model and your edge calculates to a raw 8% risk recommendation, how much should you risk on the trade?",
            options: [
              "8.0%",
              "4.0%",
              "2.0%",
              "1.0%"
            ],
            correctIndex: 2,
            explanation: "A 1/4 Kelly model divides the raw Kelly percentage by 4 to preserve capital against drawdown variance (8% / 4 = 2.0%)."
          },
          {
            id: "q5_ra_4",
            question: "What is the core rule of the Risk-Free Funding (partials) model?",
            options: [
              "Holding a position indefinitely until it reaches target",
              "Taking 50% profit at 1R and trailing the remaining position's stop loss to the entry price (break-even)",
              "Risks 0% at entry by using deep limit orders only",
              "Trading only during the quiet Asian range hours"
            ],
            correctIndex: 1,
            explanation: "Taking 50% off at 1R secures profit equal to the remaining risk. Moving the stop to break-even ensures that even if it reverses, the trade yields a net positive/neutral outcome."
          },
          {
            id: "q5_ra_5",
            question: "When scaling into a trade (pyramiding), what is the mandatory requirement to keep total exposure at or below initial risk limits?",
            options: [
              "You must double your position size with every new entry",
              "The stops of previous positions must be trailed to break-even or profit before adding new positions",
              "You must add size only at the midnight open anchor price",
              "The trade must be executed on a cryptocurrency asset"
            ],
            correctIndex: 1,
            explanation: "Pyramiding safely requires that previous entries are protected with trailed stops to ensure that the aggregate risk of all active units never exceeds the single-trade risk limit."
          },
          {
            id: "q5_ra_6",
            question: "If a trader suffers 3 consecutive losses, what does the Asymmetric Gear Shift rule dictate?",
            options: [
              "Double the lot size on the next trade to recover the losses quickly",
              "Halving the risk parameter on the next trade (e.g., from 1% to 0.5%)",
              "Switching from currency pairs to spot gold immediately",
              "Extending the stop loss distance on all active orders"
            ],
            correctIndex: 1,
            explanation: "The Asymmetric Gear Shift slows down capital decay during losing streaks by halving risk, preserving capital until performance and conditions return to baseline."
          },
          {
            id: "q5_ra_7",
            question: "Under the Asymmetric Gear Shift rules, if a trader experiences 5 consecutive losses, what is their risk shifted to?",
            options: [
              "Normal 1% risk",
              "0.5% risk",
              "0.1% floor (Gear 1)",
              "Trading is permanently disabled"
            ],
            correctIndex: 2,
            explanation: "Continuous consecutive losses slide risk down to a defensive 0.1% floor (Gear 1) to make it mathematically impossible to blow the account."
          },
          {
            id: "q5_ra_8",
            question: "What is the daily circuit breaker percentage and the required immediate action?",
            options: [
              "1% loss limit; buy a hedge contract in the opposite direction",
              "3% daily loss limit; shut down all execution terminals and walk away",
              "5% daily loss limit; double leverage to recover the drawdown before market close",
              "10% daily loss limit; switch to lower timeframes to trade noise wicks"
            ],
            correctIndex: 1,
            explanation: "A daily circuit breaker is a hard-coded equity defense. If you lose 3% from the daily open, order execution is locked and you must shut down terminals to prevent emotional tilt."
          },
          {
            id: "q5_ra_9",
            question: "What is the weekly circuit breaker percentage and the required action?",
            options: [
              "2% loss limit; email customer support",
              "6% weekly loss limit; pause credentials, execute a systems audit, and review trade logs",
              "12% weekly loss limit; add more funds to the account to sustain margin",
              "There is no weekly circuit breaker, only daily limits"
            ],
            correctIndex: 1,
            explanation: "A weekly loss of 6% triggers a mandatory pause. The trader must halt executions, audit system processes, and log all errors before being allowed to trade again."
          },
          {
            id: "q5_ra_10",
            question: "In a correlation-heavy portfolio (e.g., buying EUR/USD and GBP/USD simultaneously), how does risk behave?",
            options: [
              "Risk is diversified and reduced by half",
              "Correlation duplicates risk instead of diversifying it, meaning total exposure is double what is planned",
              "Spreads are eliminated because the pairs cancel each other out",
              "Trading multiple pairs disables the daily circuit breaker"
            ],
            correctIndex: 1,
            explanation: "EUR/USD and GBP/USD move in close lockstep. Buying both simultaneously is not diversification; it is a single double-sized bet on DXY weakness, doubling actual risk exposure."
          },
          {
            id: "q5_ra_11",
            question: "When placing a stop loss, what constitutes a valid 'structural invalidation level'?",
            options: [
              "An arbitrary distance (e.g., exactly 10 pips) from your entry point",
              "A price point behind a major swing or key array where the trade's underlying thesis is mathematically dead",
              "The round number nearest to your entry price",
              "The high or low of the previous calendar month"
            ],
            correctIndex: 1,
            explanation: "A stop loss must be placed at a level that, if breached, proves your technical scenario is incorrect. Arbitrary distances do not reflect structural reality."
          },
          {
            id: "q5_ra_12",
            question: "Why is moving a stop loss to break-even prematurely considered a bad practice?",
            options: [
              "Because it increases the spreads charged by brokers",
              "It suffocates the trade, denying price the room to fluctuate within its normal session range or retest structural arrays before expanding",
              "Because it is illegal under CFTC regulatory frameworks",
              "It prevents you from taking partial profits at 1R"
            ],
            correctIndex: 1,
            explanation: "Moving stops to BE before price has cleared structural blockades or swept liquidity will result in getting stopped out at entry right before price moves to target."
          },
          {
            id: "q5_ra_13",
            question: "If your bullish scenario is stopped out, what is the disciplined response?",
            options: [
              "Buy again immediately at market to secure a better entry price",
              "Accept the stop-out as a normal expense, do not revenge trade, and wait for a fresh evidence stack to form",
              "Complain to the broker about spread manipulation",
              "Double your size and sell to catch the downward reversal"
            ],
            correctIndex: 1,
            explanation: "Losses are a standard cost of doing business. Objectivity requires accepting the outcome, logging the trade, and waiting for new structural context to mature."
          },
          {
            id: "q5_ra_14",
            question: "What does the 'asymmetry of drawdowns' refer to?",
            options: [
              "The fact that short positions lose money faster than long positions",
              "As drawdowns increase, the recovery percentage required to return to break-even increases exponentially",
              "That your win rate changes based on session times",
              "The difference in lot sizes between gold and currency pairs"
            ],
            correctIndex: 1,
            explanation: "Because drawdown reduces your trading capital base, recovering gets harder. A 10% loss requires an 11% gain to break even, but a 50% loss requires a 100% gain to break even."
          },
          {
            id: "q5_ra_15",
            question: "If a trade reaches +1R and you scale out 50% and move your stop to break-even, what is the maximum possible loss of the remaining position?",
            options: [
              "Full 1% of initial capital",
              "0.5% of initial capital",
              "Zero dollars (the trade is mathematically guaranteed to not lose money)",
              "It depends on the swap rates of the pair"
            ],
            correctIndex: 2,
            explanation: "Because you locked in profit equal to 0.5R, and the remaining 50% position can only lose 0.5R if stopped out at entry, your worst-case net return is exactly $0.00."
          }
        ]
      };

      await prisma.knowledgeTest.upsert({
        where: { level: 5 },
        update: level5Test as any,
        create: level5Test as any,
      });
      console.log("   ✅ Level 5 Knowledge Test synced: 'Level 5 Risk Architecture Test'");
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
