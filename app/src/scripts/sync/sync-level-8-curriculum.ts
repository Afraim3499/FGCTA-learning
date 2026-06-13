import { level8Curriculum } from "../../content/level-8";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

/**
 * Modular Level 8 Curriculum Sync Pipeline
 *
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 8 CURRICULUM SYNC START ---");
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

    for (const mod of level8Curriculum) {
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

      // Level 8 final gate module (8.15)
      if (mod.moduleNumber === "8.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = {
          scenarioSlug: "institutional-mastery-crucible",
          missionTitle: "Level 8 Final Gate",
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

    console.log("\n--- LEVEL 8 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);

    // Level 8 Gate Scenario — Institutional Mastery Crucible
    const gateScenario = {
      slug: "institutional-mastery-crucible",
      title: "Level 8 Gate: The Institutional Mastery Crucible",
      description:
        "Final assessment for Level 8. Tests the student's mastery of cognitive bias mitigation, expectancy modeling, structured journaling, and performance metric auditing.",
      scenarioType: "structure_annotation",
      status: "active",
      marketTrack: "multi",
      level: 8,
      instrument: "XAUUSD",
      timeframe: "1D",
      candleSourceType: "curated",
      prompt:
        "You are reviewing an equity drawdown period on Gold (XAUUSD). A series of losing trades occurred during a central bank interest rate repricing. Identify the key swing candle that represents the peak of the greed cycle (retail FOMO) that led to early entry violations, and select the validation zone where risk should have been cut to protect capital.",
      passThreshold: 80,
      xpAward: 800,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_peak_identification", "correct_risk_cut_zone"] },
      candleData: [
        { time: "2024-04-01", open: 2230.50, high: 2250.00, low: 2225.00, close: 2245.20 },
        { time: "2024-04-02", open: 2245.20, high: 2275.50, low: 2240.00, close: 2268.80 },
        { time: "2024-04-03", open: 2268.80, high: 2295.00, low: 2265.00, close: 2280.40 },
        { time: "2024-04-04", open: 2280.40, high: 2305.60, low: 2270.00, close: 2290.90 },
        { time: "2024-04-05", open: 2290.90, high: 2330.00, low: 2285.00, close: 2320.10 },
        { time: "2024-04-08", open: 2320.10, high: 2354.00, low: 2315.00, close: 2338.50 },
        { time: "2024-04-09", open: 2338.50, high: 2365.20, low: 2335.00, close: 2352.40 },
        { time: "2024-04-10", open: 2352.40, high: 2360.00, low: 2318.00, close: 2332.10 },
        { time: "2024-04-11", open: 2332.10, high: 2377.00, low: 2325.30, close: 2372.50 },
        { time: "2024-04-12", open: 2372.50, high: 2431.50, low: 2370.00, close: 2343.90 },
        { time: "2024-04-15", open: 2343.90, high: 2387.00, low: 2332.50, close: 2383.00 },
        { time: "2024-04-16", open: 2383.00, high: 2398.00, low: 2362.00, close: 2382.50 },
        { time: "2024-04-17", open: 2382.50, high: 2395.00, low: 2355.00, close: 2361.00 },
        { time: "2024-04-18", open: 2361.00, high: 2392.00, low: 2358.00, close: 2379.00 },
        { time: "2024-04-19", open: 2379.00, high: 2417.00, low: 2372.00, close: 2391.20 },
        { time: "2024-04-22", open: 2391.20, high: 2392.00, low: 2292.00, close: 2327.30 }
      ] as any,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [
          {
            label: "Greed Cycle Peak (High Volatility Sweep)",
            timeStart: "2024-04-11",
            timeEnd: "2024-04-13",
            priceMin: 2400.00,
            priceMax: 2435.00,
          },
        ],
        feedbackOnPass:
          "Institutional Mastery Crucible completed. You successfully identified the peak greed cycle liquidation sweep where retail FOMO trapped buyers. Marking this zone accurately demonstrates your understanding of market cycle traps and risk exposure boundaries.",
        feedbackOnFail:
          "The identified peak is incorrect. The extreme high-volatility sweep peaked on 2024-04-12, reaching a high of 2431.50 before reversing sharply. This candle represents the climax of the greed cycle where risk scaling protocols must enforce systematic profit-taking rather than buying.",
      },
    };

    // Level 8 Knowledge Test — 15 questions on Elite Psychology & Routine
    const level8Test = {
      level: 8,
      title: "Level 8 Elite Psychology & Routine Mastery Test",
      passThreshold: 80,
      timeLimitMin: 35,
      questionsPerAttempt: 15,
      questions: [
        {
          id: "q8_psych_1",
          question: "How does an institutional trader mitigate recency bias after a streak of consecutive losses?",
          options: [
            "Increase leverage on the next trade to recover the drawdown quickly.",
            "Apply the independent event principle, treating the next trade setup as completely decoupled from the historical outcome of previous trades.",
            "Pause all trading for 30 calendar days to let market conditions reset.",
            "Shift to market execution to ensure immediate fills."
          ],
          correctIndex: 1,
          explanation: "Recency bias causes cognitive over-weighting of recent events. By treating each trade as an independent event with its own probability distribution, the trader decouples execution decisions from the emotional weight of prior streaks."
        },
        {
          id: "q8_psych_2",
          question: "Which mathematical formula represents the Expectancy of a trading strategy?",
          options: [
            "Expectancy = (Win Rate * Average Win) - (Loss Rate * Average Loss)",
            "Expectancy = (Win Rate * Loss Rate) / Average Win",
            "Expectancy = Average Win / Average Loss",
            "Expectancy = Total Profits - Total Losses"
          ],
          correctIndex: 0,
          explanation: "Expectancy is the average amount a trader expects to win or lose per trade. It is calculated by multiplying the win rate by the average win size and subtracting the product of the loss rate and the average loss size."
        },
        {
          id: "q8_psych_3",
          question: "During a parabolic crypto market expansion characterized by extreme retail FOMO, what is the correct institutional protocol?",
          options: [
            "Increase leverage to capture the accelerating rate of change.",
            "Halt all execution, disable market orders, and take profit systematically into liquidity sweeps.",
            "Switch to manual execution and buy all breakout pullbacks.",
            "Short the market immediately without a stop loss."
          ],
          correctIndex: 1,
          explanation: "Parabolic growth phases feature extreme retail FOMO and high liquidity sweeps. Institutional protocols require systematic profit-taking into these sweeps and halting momentum-chasing executions to avoid the subsequent sharp mean reversion."
        },
        {
          id: "q8_psych_4",
          question: "In a professional Gold (XAUUSD) pre-market routine, which macro indicators must be scanned to establish a daily bias?",
          options: [
            "Moving average crossovers on the 5-minute chart.",
            "10-Year Real TIPS yields, the US Dollar Index (DXY), and COMEX open interest shifts.",
            "Social media sentiment indexes and retail broker long/short ratios.",
            "The previous day's crypto funding rates and TVL changes."
          ],
          correctIndex: 1,
          explanation: "Gold is highly sensitive to real interest rates (10-Year TIPS yields) and the USD. Establishing a macro bias requires checking TIPS, DXY, and institutional positioning (open interest) rather than short-term retail indicators."
        },
        {
          id: "q8_psych_5",
          question: "What is the primary purpose of an in-session cognitive load circuit breaker?",
          options: [
            "To shut down the trading terminal automatically when a profit target is reached.",
            "To limit distraction, manage decision fatigue, and prevent impulsive execution during low-volume mid-session lulls.",
            "To bypass broker API limits during high-volatility news events.",
            "To automatically double position sizing after a winning trade."
          ],
          correctIndex: 1,
          explanation: "Decision fatigue and cognitive strain lead to poor execution. Circuit breakers (e.g., screen breaks, session limits) manage cognitive load and prevent bored or impulsive trading during quiet hours."
        },
        {
          id: "q8_psych_6",
          question: "Which metrics should be prioritized in a post-market journaling protocol to separate execution quality from outcome luck?",
          options: [
            "Total P&L, account balance growth, and broker fees paid.",
            "Process adherence score, setup classification, slippage variance, and cognitive state.",
            "Win-loss ratio of other traders in the same community.",
            "Leverage percentage and number of active charts monitored."
          ],
          correctIndex: 1,
          explanation: "Standard journaling must focus on process over outcome. Logging process adherence, setup types, execution slippage, and mental state helps identify whether results are due to systematic edge or random distribution."
        },
        {
          id: "q8_psych_7",
          question: "Why is it critical to tag trades by 'mistake classification' in a performance database?",
          options: [
            "To report mistakes to regulatory bodies or brokers.",
            "To isolate and quantify the exact financial leakage caused by specific behavioral errors (e.g., chasing entry, early exit).",
            "To justify changing the strategy parameters after every loss.",
            "To calculate the average funding rate paid to exchanges."
          ],
          correctIndex: 1,
          explanation: "Database error tagging enables a trader to calculate the exact cost of behavioral errors, making the cost of indiscipline visible as financial leakage and providing a quantitative target for performance optimization."
        },
        {
          id: "q8_psych_8",
          question: "A strategy has a 40% win rate and a 2.5:1 average risk-reward ratio. What is the mathematical expectancy per unit of risk?",
          options: [
            "0.2 R",
            "0.4 R",
            "0.6 R",
            "0.8 R"
          ],
          correctIndex: 1,
          explanation: "Expectancy = (0.40 * 2.5) - (0.60 * 1.0) = 1.0 - 0.6 = 0.4 R. This means the strategy produces an average profit of 40% of the risked amount per trade over a large sample."
        },
        {
          id: "q8_psych_9",
          question: "When an equity curve enters a pre-defined drawdown audit phase, what is the standard risk mitigation protocol?",
          options: [
            "Increase position size to recover the losses in fewer trades.",
            "Systematically reduce position size (e.g., scale down from 1.0% to 0.25% risk per setup) and trade only high-confluence setups.",
            "Switch from limit orders to market execution to guarantee fills.",
            "Add correlated instruments to diversify the risk exposure."
          ],
          correctIndex: 1,
          explanation: "Drawdown recovery requires capital preservation. Scaling down risk size reduces the rate of drawdown while allowing the trader to rebuild confidence and verify if the edge is intact without destroying capital."
        },
        {
          id: "q8_psych_10",
          question: "What does it mean for a Master Trading Plan to be 'governed'?",
          options: [
            "The plan is approved by the SEC or financial regulators.",
            "The rules are fixed, documented, and any modification requires a formal review loop based on a sample of at least 100 trades.",
            "The plan is automated through a public cloud service.",
            "The broker executes the plan automatically on the trader's behalf."
          ],
          correctIndex: 1,
          explanation: "A governed rulebook cannot be altered on a whim or in-session. Any change to stop loss, entry, or risk parameters must undergo a formal backtesting and statistical review process over a significant sample size."
        },
        {
          id: "q8_psych_11",
          question: "Why is a sample size of at least 50–100 trades required to audit a strategy's edge?",
          options: [
            "Smaller samples are statistically insignificant due to the variance and random distribution of wins and losses.",
            "Brokers charge lower commission rates for larger trade samples.",
            "It is a requirement for getting funded by proprietary trading firms.",
            "It takes 100 trades to test all currency pairs in the market."
          ],
          correctIndex: 0,
          explanation: "Due to random distribution, a profitable strategy can easily have 5-10 consecutive losses (variance). A small sample (e.g., 10 trades) does not represent the true probability distribution; only larger samples reveal the edge."
        },
        {
          id: "q8_psych_12",
          question: "Which correlation dynamic is most critical for a gold trader evaluating macroeconomic capital flows?",
          options: [
            "The correlation between gold prices and altcoin funding rates.",
            "The inverse correlation between gold prices and US Real Yields (TIPS).",
            "The direct correlation between COMEX volume and Asian session spreads.",
            "The correlation between gold mining stocks and crypto perpetual leverage."
          ],
          correctIndex: 1,
          explanation: "Gold is a non-yielding asset, making it highly inversely correlated with real yields. When US Real Yields (TIPS) rise, the opportunity cost of holding gold increases, typically exerting downward pressure on gold prices."
        },
        {
          id: "q8_psych_13",
          question: "How does persistent funding rate drag affect long-term crypto perpetual position performance?",
          options: [
            "It increases slippage on limit order entries.",
            "It continuously erodes account capital if long positions are held during sustained positive funding regimes, lowering the net expectancy.",
            "It triggers automatic stop-loss executions during low volatility.",
            "It increases the taker fee charged by centralized exchanges."
          ],
          correctIndex: 1,
          explanation: "Perpetual swap funding rates are paid periodically. Holding long positions during periods of high positive funding means paying a continuous fee, which acts as a drag on performance and reduces the net R:R of the trade."
        },
        {
          id: "q8_psych_14",
          question: "How does 'habit stacking' apply to pre-market trading routines?",
          options: [
            "Checking multiple charts at the same time to speed up the process.",
            "Linking a new discipline (e.g., daily macro calendar check) directly to an established daily habit (e.g., drinking morning coffee).",
            "Placing multiple limit orders at the same price level.",
            "Logging into multiple brokerage accounts simultaneously."
          ],
          correctIndex: 1,
          explanation: "Habit stacking anchors new behaviors by piggybacking them onto existing automatic routines. This builds cognitive pathways that make pre-market discipline effortless over time."
        },
        {
          id: "q8_psych_15",
          question: "What constitutes 'execution mastery' at Level 8?",
          options: [
            "The ability to trade all 28 major forex pairs simultaneously without losses.",
            "The consistent, systematic application of the Execution OS — pre-session protocol, structural order entry, active trade management, and process-focused post-session debrief — without emotional override.",
            "Shifting entirely from market prediction to process governance, quantitative expectancy, managing behavioral leaks, and systematic routine optimization.",
            "Trading without stop losses by using hedging strategies instead."
          ],
          correctIndex: 2,
          explanation: "Level 8 is the peak of professional trading: shifting entirely from prediction and ego to process governance, quantitative expectancy, managing behavioral leaks, and systematic routine optimization."
        }
      ]
    };

    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");

      // Upsert Gate Scenario
      console.log("\nUpserting Gate Scenario: 'institutional-mastery-crucible'...");
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: gateScenario.slug },
        update: gateScenario as any,
        create: gateScenario as any,
      });
      console.log(`   Upserted scenario: ${scenario.title}`);

      // Link scenario to module 8.15
      const mod815 = await prisma.courseModule.findFirst({
        where: { level: 8, moduleNumber: "8.15" },
      });
      if (mod815) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod815.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod815.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 },
        });
        console.log(`   Linked scenario '${scenario.slug}' to module 8.15.`);
      } else {
        console.warn("   Warning: Module 8.15 not found in database.");
      }

      // Upsert Level 8 Knowledge Test
      console.log("\nSyncing Level 8 Knowledge Test...");
      await prisma.knowledgeTest.upsert({
        where: { level: 8 },
        update: level8Test as any,
        create: level8Test as any,
      });
      console.log("   ✅ Level 8 Knowledge Test synced: 'Level 8 Elite Psychology & Routine Mastery Test'");
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
