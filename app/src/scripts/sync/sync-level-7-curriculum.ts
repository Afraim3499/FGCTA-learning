import { level7Curriculum } from "../../content/level-7";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

/**
 * Modular Level 7 Curriculum Sync Pipeline
 *
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 7 CURRICULUM SYNC START ---");
  console.log(`Mode: ${isDryRun ? "DRY RUN" : "LIVE SYNC"}`);

  if (!isDryRun && !forceLive) {
    console.error("CRITICAL: Live sync requested but FORCE_LIVE is not 'true'. Aborting.");
    process.exit(1);
  }

  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("CRITICAL: DIRECT_URL or DATABASE_URL is missing.");
    process.exit(1);
  }

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

    for (const mod of level7Curriculum) {
      console.log(`\nProcessing Module ${mod.moduleNumber}: ${mod.title}`);

      const wrap = (cards: any[]) =>
        cards && cards.length > 0
          ? `:::lesson-cards\n${JSON.stringify(cards, null, 2)}\n:::`
          : "";

      const dbData: any = {
        level: mod.level,
        moduleNumber: mod.moduleNumber,
        title: mod.title,
        objective: mod.objective,
        skillLevel: (mod.skillLevel === "expert" ? "institutional" : mod.skillLevel) as SkillLevel,
        orderIndex: mod.orderIndex,
        content: wrap(mod.tracks.core),
        forexAdaptation: wrap(mod.tracks.forex || []),
        goldAdaptation: wrap(mod.tracks.gold || []),
        cryptoAdaptation: wrap(mod.tracks.crypto || []),
        marketTrack: "core" as ModuleTrack,
      };

      // Level 7 final gate module (7.15)
      if (mod.moduleNumber === "7.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = {
          scenarioSlug: "execution-precision-crucible",
          missionTitle: "Level 7 Final Gate",
          passThreshold: 80,
        };
      }

      const existing = await prisma.courseModule.findUnique({
        where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      });

      if (existing) {
        updateCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] ${isDryRun ? "WOULD " : ""}UPDATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.update({
            where: { id: existing.id },
            data: dbData,
          });
        }
      } else {
        createCount++;
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] ${isDryRun ? "WOULD " : ""}CREATE: Module ${mod.moduleNumber}`);
        if (!isDryRun) {
          await prisma.courseModule.create({ data: dbData });
        }
      }
    }

    console.log("\n--- LEVEL 7 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);

    // Level 7 Gate Scenario — Execution Precision Crucible
    const gateScenario = {
      slug: "execution-precision-crucible",
      title: "Level 7 Gate: The Execution Precision Crucible",
      description:
        "Final assessment for Level 7. Tests the student's mastery of order entry precision, pre-session protocol adherence, and post-session execution debrief skills.",
      scenarioType: "structure_annotation",
      status: "active",
      marketTrack: "multi",
      level: 7,
      instrument: "EURUSD",
      timeframe: "1H",
      candleSourceType: "curated",
      prompt:
        "You are in a live session. A 1H Order Block has formed at 1.0845–1.0855 after a confirmed Bullish Market Structure Shift. Mark the precise LIMIT ORDER entry zone — the structural range where you would place your limit buy order — and identify the STOP LOSS placement below the Order Block low.",
      passThreshold: 80,
      xpAward: 700,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement", "correct_stop_placement"] },
      candleData: [
        { time: "2024-03-01", open: 1.0780, high: 1.0810, low: 1.0765, close: 1.0800 },
        { time: "2024-03-04", open: 1.0800, high: 1.0835, low: 1.0790, close: 1.0828 },
        { time: "2024-03-05", open: 1.0828, high: 1.0858, low: 1.0820, close: 1.0852 },
        { time: "2024-03-06", open: 1.0852, high: 1.0875, low: 1.0840, close: 1.0868 },
        { time: "2024-03-07", open: 1.0868, high: 1.0890, low: 1.0855, close: 1.0872 },
        { time: "2024-03-08", open: 1.0872, high: 1.0885, low: 1.0848, close: 1.0858 },
        { time: "2024-03-11", open: 1.0858, high: 1.0870, low: 1.0840, close: 1.0845 },
        { time: "2024-03-12", open: 1.0845, high: 1.0860, low: 1.0832, close: 1.0852 },
        { time: "2024-03-13", open: 1.0852, high: 1.0878, low: 1.0845, close: 1.0872 },
        { time: "2024-03-14", open: 1.0872, high: 1.0895, low: 1.0860, close: 1.0888 },
        { time: "2024-03-15", open: 1.0888, high: 1.0915, low: 1.0875, close: 1.0908 },
        { time: "2024-03-18", open: 1.0908, high: 1.0930, low: 1.0892, close: 1.0920 },
        { time: "2024-03-19", open: 1.0920, high: 1.0942, low: 1.0905, close: 1.0935 },
        { time: "2024-03-20", open: 1.0935, high: 1.0958, low: 1.0918, close: 1.0948 },
        { time: "2024-03-21", open: 1.0948, high: 1.0965, low: 1.0928, close: 1.0940 },
        { time: "2024-03-22", open: 1.0940, high: 1.0952, low: 1.0910, close: 1.0918 },
        { time: "2024-03-25", open: 1.0918, high: 1.0930, low: 1.0892, close: 1.0902 },
        { time: "2024-03-26", open: 1.0902, high: 1.0915, low: 1.0878, close: 1.0888 },
        { time: "2024-03-27", open: 1.0888, high: 1.0902, low: 1.0862, close: 1.0870 },
        { time: "2024-03-28", open: 1.0870, high: 1.0882, low: 1.0845, close: 1.0855 },
      ] as any,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [
          {
            label: "Limit Order Entry Zone (OB)",
            timeStart: "2024-03-11",
            timeEnd: "2024-03-12",
            priceMin: 1.0840,
            priceMax: 1.0858,
          },
        ],
        feedbackOnPass:
          "Execution Precision Crucible completed. You correctly identified the Order Block entry zone and placed the limit order at the structural level — not chased the market. This is the hallmark of disciplined live execution.",
        feedbackOnFail:
          "The entry zone is incorrect. The Order Block formed between 1.0840 and 1.0858 after the Bullish MSS on 2024-03-05. Your limit order should be placed within this OB range, with the stop below 1.0832 (the OB low).",
      },
    };

    // Level 7 Knowledge Test — 15 questions on Execution OS
    const level7Test = {
      level: 7,
      title: "Level 7 Live Execution Mastery Test",
      passThreshold: 80,
      timeLimitMin: 35,
      questionsPerAttempt: 15,
      questions: [
        {
          id: "q7_exec_1",
          question: "What is the correct sequence of the Execution Operating System?",
          options: [
            "Execute trade → Review P&L → Plan next session",
            "Pre-session preparation → Live execution within parameters → Post-session process debrief",
            "Check news → Open chart → Enter market order → Set stop loss",
            "Review yesterday's losses → Increase position size → Recover lost capital",
          ],
          correctIndex: 1,
          explanation: "The Execution OS runs in three locked phases: Pre-session (sets parameters), Live session (executes only within those parameters), Post-session (measures process adherence). Skipping any phase corrupts the entire system.",
        },
        {
          id: "q7_exec_2",
          question: "When should a limit order be preferred over a market order for trade entry?",
          options: [
            "When you want to enter immediately to avoid missing the move",
            "When price is approaching a pre-defined structural level (OB, FVG) and your entry requires patience for price to come to your zone",
            "When there is a major news event and spreads are tight",
            "When the market is trending strongly in your direction",
          ],
          correctIndex: 1,
          explanation: "Limit orders enforce structural discipline — you set your price and wait for it. This prevents chasing entries outside the structural zone, which destroys the planned risk-reward ratio.",
        },
        {
          id: "q7_exec_3",
          question: "What is the primary purpose of a post-session execution debrief?",
          options: [
            "To calculate total profits and losses for the month",
            "To compare actual trade executions against the pre-planned scenario and measure process adherence",
            "To identify which pairs performed best this week",
            "To plan tomorrow's trades based on today's profits",
          ],
          correctIndex: 1,
          explanation: "The debrief measures process, not profit. A profitable trade with bad execution teaches the wrong lesson. The debrief separates trading skill from luck by focusing on whether the pre-defined process was followed.",
        },
        {
          id: "q7_exec_4",
          question: "A major news event (NFP) is 5 minutes away. Your limit order is sitting inside the entry zone. What is the correct protocol?",
          options: [
            "Leave the order active — NFP could trigger the move in your direction",
            "Cancel or pause the order per your pre-defined news event protocol, then reassess after the spread normalises",
            "Switch to a market order immediately before the release",
            "Double your position size to capture the news-driven move",
          ],
          correctIndex: 1,
          explanation: "News events create spread spikes that can fill limit orders at wildly unfavorable prices and trigger stops. The pre-session protocol must define news window rules — following that rule is not optional during live sessions.",
        },
        {
          id: "q7_exec_5",
          question: "What is 'slippage' in the context of trade execution?",
          options: [
            "The difference between the target profit and the actual profit taken",
            "The difference between the expected fill price and the actual fill price due to market conditions",
            "The amount the spread widens during volatile sessions",
            "The percentage of capital lost per trade",
          ],
          correctIndex: 1,
          explanation: "Slippage is an execution cost — the gap between your intended entry price and where the market actually fills your order. It is budgeted pre-session alongside spread costs and must be factored into R:R calculations.",
        },
        {
          id: "q7_exec_6",
          question: "When is it appropriate to move a stop loss to break-even?",
          options: [
            "Immediately after entering the trade to remove all risk",
            "After price has reached a pre-defined R:R milestone (e.g., 1:1), confirming the trade is moving in the planned direction",
            "When the trade is down 50% so you can limit further losses",
            "Only during the London session, never during NY",
          ],
          correctIndex: 1,
          explanation: "Moving to break-even is triggered by structural progress, not time or fear. Doing it too early stops out a valid trade on normal retracements. The milestone (e.g., price hitting 1:1) is defined pre-session.",
        },
        {
          id: "q7_exec_7",
          question: "What defines a 'partial profit protocol' in execution management?",
          options: [
            "Taking all profits as soon as the trade goes 5 pips in your direction",
            "A pre-defined scale-out rule where a fixed percentage of the position is closed at specific structural levels, locking in profit while leaving a runner",
            "Splitting your position into two equal halves and closing both at the same target",
            "Only taking profits when the trade reaches a 3:1 risk-reward ratio",
          ],
          correctIndex: 1,
          explanation: "Partial profit protocols are pre-defined — not in-session decisions. They specify at which structural level (e.g., 1:1, 2:1) what percentage closes, locking profits without fully exiting a running trade.",
        },
        {
          id: "q7_exec_8",
          question: "When executing two correlated pairs simultaneously (e.g., EURUSD and GBPUSD), what is the primary risk to manage?",
          options: [
            "The different pip values between the pairs",
            "Doubling directional exposure — both pairs moving the same direction creates combined risk that exceeds individual position limits",
            "The timing of order fills across different brokers",
            "The different spread costs for each pair",
          ],
          correctIndex: 1,
          explanation: "Correlated pairs (EURUSD and GBPUSD both USD-denominated) move in the same direction under the same macro pressure. Two full positions in both effectively doubles your USD exposure — correlation limits must be pre-defined.",
        },
        {
          id: "q7_exec_9",
          question: "What is the most common execution error that destroys trade R:R before the trade even begins?",
          options: [
            "Using a stop-loss that is too tight",
            "Chasing a market order entry when price has already moved past the structural entry zone",
            "Setting take-profit targets too close to the entry",
            "Entering during the London session instead of the NY session",
          ],
          correctIndex: 1,
          explanation: "Chasing entries via market order after missing the limit zone is the #1 execution error. It invalidates the structural R:R calculation because the entry is no longer at the defined structural level — the risk is now undefined.",
        },
        {
          id: "q7_exec_10",
          question: "For Gold (XAU/USD), which session window carries the highest spread and slippage risk for execution?",
          options: [
            "During the New York COMEX session peak hours (08:00–12:00 EST)",
            "During the Asian session (23:00–07:00 GMT) when COMEX is closed and liquidity is minimal",
            "During the London open (08:00–10:00 GMT) when DXY rebalancing occurs",
            "Immediately after the AM gold fixing (10:30 EST)",
          ],
          correctIndex: 1,
          explanation: "Gold liquidity is predominantly US-driven (COMEX). During the Asian session, gold spreads can spike 5–15× their normal range. Executing gold positions during Asian hours requires a pre-defined spread tolerance limit.",
        },
        {
          id: "q7_exec_11",
          question: "What is a 'funding rate window' and why does it matter for crypto perp execution?",
          options: [
            "The daily window when exchanges process deposit and withdrawal transactions",
            "The 8-hourly settlement period on perpetual futures where long or short positions pay a fee to the opposite side — creating forced position adjustments around settlement time",
            "The time period when crypto exchanges publish their fee schedules",
            "The weekly window when Bitcoin miners sell their rewards",
          ],
          correctIndex: 1,
          explanation: "Perp funding rates settle every 8 hours. When funding is highly positive (longs pay shorts), it creates pressure to close long positions near settlement. Executing longs just before a high positive funding event increases position cost.",
        },
        {
          id: "q7_exec_12",
          question: "What does a 'pre-session max-loss limit' enforce in the Execution OS?",
          options: [
            "The maximum number of trades you can place per session",
            "A hard capital boundary — if losses reach this level during the session, all positions close and no new trades are permitted",
            "The maximum spread you will accept before choosing not to trade",
            "The maximum profit target you aim for in a single session",
          ],
          correctIndex: 1,
          explanation: "The max-loss limit is a circuit breaker that prevents a bad session from becoming a catastrophic session. It is set pre-session, locked, and non-negotiable during live execution. Changing it in-session is a critical violation of the OS.",
        },
        {
          id: "q7_exec_13",
          question: "Why is a stop order the preferred entry type for a confirmed structural breakout — NOT a limit order?",
          options: [
            "Stop orders always provide better fill prices than limit orders",
            "A stop order only triggers if price actually breaks and passes the structural level, confirming the breakout — a limit order placed at the level could be filled on a false test without confirmation",
            "Stop orders are faster to execute than limit orders during news events",
            "Limit orders are only available on forex pairs, not on commodities",
          ],
          correctIndex: 1,
          explanation: "A limit buy at the breakout level gets filled even if price touches and reverses (a false breakout). A buy stop above the level only triggers on a confirmed break — meaning you need the breakout to actually happen before entering.",
        },
        {
          id: "q7_exec_14",
          question: "What is the 'process score' in the execution debrief, and how does it differ from P&L?",
          options: [
            "It is the same as P&L but expressed as a percentage instead of currency",
            "It measures the quality of execution decisions against the pre-defined plan, independent of whether the trade was profitable",
            "It measures only the number of winning trades as a percentage of total trades",
            "It is the broker's internal measure of trade execution quality",
          ],
          correctIndex: 1,
          explanation: "Process score measures adherence: Did you enter at the structural zone? Did you respect the max-loss? Did you follow the partial profit rules? A trade can score 100% on process and still lose money if the scenario was correctly invalidated — that is still a well-executed trade.",
        },
        {
          id: "q7_exec_15",
          question: "What constitutes 'execution mastery' at Level 7?",
          options: [
            "The ability to trade all 28 major forex pairs simultaneously without losses",
            "The consistent, systematic application of the Execution OS — pre-session protocol, structural order entry, active trade management, and process-focused post-session debrief — without emotional override",
            "Achieving a win rate above 80% for three consecutive months",
            "Trading without stop losses by using mental stops instead",
          ],
          correctIndex: 1,
          explanation: "Level 7 mastery is execution consistency, not profitability. The Execution OS — when followed without deviation across pre-session, live session, and post-session phases — is the professional standard that separates systematic traders from reactive ones.",
        },
      ],
    };

    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");

      // Upsert Gate Scenario
      console.log("\nUpserting Gate Scenario: 'execution-precision-crucible'...");
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: gateScenario.slug },
        update: gateScenario as any,
        create: gateScenario as any,
      });
      console.log(`   Upserted scenario: ${scenario.title}`);

      // Link scenario to module 7.15
      const mod715 = await prisma.courseModule.findFirst({
        where: { level: 7, moduleNumber: "7.15" },
      });
      if (mod715) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod715.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod715.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 },
        });
        console.log(`   Linked scenario '${scenario.slug}' to module 7.15.`);
      } else {
        console.warn("   Warning: Module 7.15 not found in database.");
      }

      // Upsert Level 7 Knowledge Test
      console.log("\nSyncing Level 7 Knowledge Test...");
      await prisma.knowledgeTest.upsert({
        where: { level: 7 },
        update: level7Test as any,
        create: level7Test as any,
      });
      console.log("   ✅ Level 7 Knowledge Test synced: 'Level 7 Live Execution Mastery Test'");
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
