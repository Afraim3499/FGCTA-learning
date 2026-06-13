import { level9Curriculum } from "../../content/level-9";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

/**
 * Modular Level 9 Curriculum Sync Pipeline
 *
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 9 CURRICULUM SYNC START ---");
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

    for (const mod of level9Curriculum) {
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

      // Level 9 final gate module (9.15)
      if (mod.moduleNumber === "9.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = {
          scenarioSlug: "final-certification-crucible",
          missionTitle: "Level 9 Final Gate",
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

    console.log("\n--- LEVEL 9 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);

    // Level 9 Gate Scenario — Final Certification Crucible
    const gateScenario = {
      slug: "final-certification-crucible",
      title: "Level 9 Gate: The Final Certification Crucible",
      description:
        "Final comprehensive assessment for Level 9. Evaluates multi-asset correlation, dynamic drawdown management, and sweep-invalidation zone marking under stress conditions.",
      scenarioType: "structure_annotation",
      status: "active",
      marketTrack: "multi",
      level: 9,
      instrument: "XAUUSD",
      timeframe: "1D",
      candleSourceType: "curated",
      prompt:
        "You are executing the Final Certification Crucible on Gold (XAUUSD). The market is transitioning from a high-volatility expansion trend into a compressed range regime. Analyze the daily candle structure: identify the exact candle that marks the swing high rejection (liquidity sweep), and select the invalidation zone where your stop parameters should trigger to protect portfolio equity.",
      passThreshold: 80,
      xpAward: 1000,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_sweep_high_identification", "correct_stop_invalidation_zone"] },
      candleData: [
        { time: "2024-05-01", open: 2285.40, high: 2320.00, low: 2280.00, close: 2302.50 },
        { time: "2024-05-02", open: 2302.50, high: 2315.20, low: 2290.00, close: 2303.10 },
        { time: "2024-05-03", open: 2303.10, high: 2328.00, low: 2295.50, close: 2320.60 },
        { time: "2024-05-06", open: 2320.60, high: 2335.40, low: 2310.00, close: 2328.20 },
        { time: "2024-05-07", open: 2328.20, high: 2342.10, low: 2322.00, close: 2330.50 },
        { time: "2024-05-08", open: 2330.50, high: 2345.50, low: 2315.00, close: 2322.40 },
        { time: "2024-05-09", open: 2322.40, high: 2362.00, low: 2318.50, close: 2358.90 },
        { time: "2024-05-10", open: 2358.90, high: 2378.20, low: 2350.00, close: 2360.20 },
        { time: "2024-05-13", open: 2360.20, high: 2380.00, low: 2332.00, close: 2345.50 },
        { time: "2024-05-14", open: 2345.50, high: 2368.40, low: 2340.00, close: 2357.80 },
        { time: "2024-05-15", open: 2357.80, high: 2397.60, low: 2352.00, close: 2385.40 },
        { time: "2024-05-16", open: 2385.40, high: 2405.00, low: 2375.00, close: 2387.20 },
        { time: "2024-05-17", open: 2387.20, high: 2420.50, low: 2382.00, close: 2415.00 },
        { time: "2024-05-20", open: 2415.00, high: 2450.10, low: 2400.00, close: 2425.40 },
        { time: "2024-05-21", open: 2425.40, high: 2435.00, low: 2405.50, close: 2421.20 },
        { time: "2024-05-22", open: 2421.20, high: 2426.00, low: 2375.00, close: 2378.60 }
      ] as any,
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [
          {
            label: "Swing High Liquidity Sweep (Trend Invalidation Zone)",
            timeStart: "2024-05-19",
            timeEnd: "2024-05-21",
            priceMin: 2438.00,
            priceMax: 2455.00,
          },
        ],
        feedbackOnPass:
          "Certification Crucible completed successfully. You identified the peak liquidity sweep high that marked structural trend invalidation. You have demonstrated execution control and macro regime transition awareness.",
        feedbackOnFail:
          "The identified invalidation zone is incorrect. The trend invalidated at the peak liquidity sweep on 2024-05-20 when price reached 2450.10 before reversing heavily below 2400. Real-time protection rules mandate that you halt long exposure in this zone.",
      },
    };

    // Level 9 Knowledge Test — 15 questions on Portfolio Management & Certification
    const level9Test = {
      level: 9,
      title: "Level 9 Final Certification Portfolio Readiness Test",
      passThreshold: 80,
      timeLimitMin: 45,
      questionsPerAttempt: 15,
      questions: [
        {
          id: "q9_cert_1",
          question: "When composing an institutional multi-asset portfolio, what is the primary risk of executing concurrent long strategies on EURUSD and GBPUSD?",
          options: [
            "High exchange execution fee drag on both currency instruments.",
            "Elevated correlation risk resulting in doubled structural exposure to USD weakness/strength.",
            "Contradictory session ranges causing execution overlap conflicts.",
            "Prisma database model constraints on dual currency tracking."
          ],
          correctIndex: 1,
          explanation: "EURUSD and GBPUSD share the US Dollar as their quote currency. Sizing long setups on both concurrently duplicates USD exposure, creating high correlation risk that violates portfolio diversification principles."
        },
        {
          id: "q9_cert_2",
          question: "How should a certified portfolio manager adjust leverage limits during an equity curve drawdown state?",
          options: [
            "Increase leverage limits dynamically to achieve faster recovery cycles.",
            "Apply a leverage gating protocol, systematically restricting position size and maximum leverage bounds as drawdown increases.",
            "Halt all exchange API connections and hold current positions without stops.",
            "Diversify the drawdown by adding highly leveraged altcoin perpetual contracts."
          ],
          correctIndex: 1,
          explanation: "Dynamic leverage gating restricts risk parameters relative to equity curve drawdown. By reducing sizing and leverage as drawdown deepens, the system preserves capital and ensures survival."
        },
        {
          id: "q9_cert_3",
          question: "What does a Sharpe Ratio of 2.2 over a 100-trade sample statistically indicate about a trading system?",
          options: [
            "The system win rate is guaranteed to be above 80% in all regimes.",
            "The strategy produces high risk-adjusted returns with controlled variance and smooth equity growth.",
            "The system is highly exposed to overnight COMEX swap rates.",
            "The execution venue is experiencing high slippage leakage."
          ],
          correctIndex: 1,
          explanation: "The Sharpe Ratio measures risk-adjusted return (Return / Volatility). A ratio of 2.2 represents exceptional risk-adjusted performance with low portfolio volatility relative to returns."
        },
        {
          id: "q9_cert_4",
          question: "In prop firm funding audits, how is the 'relative daily drawdown limit' typically calculated?",
          options: [
            "Based on the starting balance of the account, updated every calendar month.",
            "Based on the highest equity peak reached during that trading day, calculating drawdown from that peak in real-time.",
            "By adding the total commission costs to the realized trade losses.",
            "From the median liquidity pool depth on centralized exchanges."
          ],
          correctIndex: 1,
          explanation: "Prop firm rules evaluate drawdown dynamically from the highest equity/balance peak of the day. Breaching this relative limit from the day's high triggers immediate account liquidation."
        },
        {
          id: "q9_cert_5",
          question: "Which emergency protocol must be enforced on an execution desk during a system black swan event (e.g. broker API disconnect or stablecoin depeg)?",
          options: [
            "Execute double market orders to hedge potential price gaps.",
            "Enforce immediate emergency stops, close active risk via phone desk/backups, and freeze new execution entry logs.",
            "Wait for the API status indicator to resolve before taking action.",
            "Leverage the position to buy the asset at local discount wicks."
          ],
          correctIndex: 1,
          explanation: "A black swan event requires immediate risk isolation. Traders must enforce emergency stop protocols, contact the execution desk via backup channels to close open exposure, and freeze all new entries."
        },
        {
          id: "q9_cert_6",
          question: "What is the primary indicator that a trading strategy is experiencing 'performance drift'?",
          options: [
            "Slight increase in commission and taker fees charged by the venue.",
            "A systematic decline in win rate and profit factor, caused by executing a trend model in a prolonged range regime.",
            "An increase in the total volume of daily trade logs.",
            "Changes in the custody configuration of the underlying assets."
          ],
          correctIndex: 1,
          explanation: "Performance drift occurs when a strategy's logic decays because the current market regime mismatch (e.g., trend model running in range conditions) destroys the statistical edge."
        },
        {
          id: "q9_cert_7",
          question: "How does order book fragmentation across different crypto execution venues affect slippage leakage?",
          options: [
            "It eliminates slippage by spreading buy orders evenly across exchanges.",
            "It increases slippage leakage because bids/asks are split, lowering depth and causing larger price impact for a single block order.",
            "It increases perpetual funding rate payouts.",
            "It forces cross-margin structures to default to isolated margin."
          ],
          correctIndex: 1,
          explanation: "Crypto liquidity is fragmented across multiple CEXs and DEXs. Executing block orders when book depth is divided across venues results in increased slippage leakage due to lower localized depth."
        },
        {
          id: "q9_cert_8",
          question: "What is the main advantage of utilizing an ECN (Electronic Communication Network) broker over a standard retail market maker for Forex execution?",
          options: [
            "ECN brokers guarantee zero negative slippage on all market orders.",
            "ECN brokers route orders directly to the interbank liquidity pool, providing raw spreads and lower fill delays at the cost of commissions.",
            "ECN brokers offer fixed spreads that never widen during NFP or CPI news releases.",
            "ECN brokers automatically manage drawdown circuit breakers for the user."
          ],
          correctIndex: 1,
          explanation: "ECN brokers match orders directly with institutional liquidity providers. This results in tighter raw spreads and faster execution speeds, minimizing spread-widening costs."
        },
        {
          id: "q9_cert_9",
          question: "When designing a live execution desk workspace, what is the correct setup priority?",
          options: [
            "Maximize the number of monitors displaying retail social sentiment channels.",
            "Ensure low-latency digital feeds (macro calendars, TIPS curve, DXY index) and a clear, distraction-free environment.",
            "Set up automatic sound alerts for every 1-minute candle close.",
            "Ensure the execution terminal remains open 24/7 on mobile devices."
          ],
          correctIndex: 1,
          explanation: "An execution workspace must optimize cognitive bandwidth. Low-latency macro indicators (TIPS, DXY) and the exclusion of emotional indicators (social channels) are the setup priorities."
        },
        {
          id: "q9_cert_10",
          question: "Which metric is the best measure of a strategy's statistical consistency over a 100-trade sample size?",
          options: [
            "The largest single winning trade amount.",
            "The Profit Factor, average R-multiple distribution, and win-rate stability across multiple subsets.",
            "The total number of currency pairs traded.",
            "The broker leverage multiplier used during the streak."
          ],
          correctIndex: 1,
          explanation: "Consistency is evaluated through the profit factor and the variance in R-multiple distribution. High variance or reliance on a single outlier win indicates lack of edge stability."
        },
        {
          id: "q9_cert_11",
          question: "How should overnight swap rates (COMEX) be factored into a gold position swing trading plan?",
          options: [
            "They should be ignored as they are offset by intraday slippage.",
            "They must be modeled as a continuous carrying cost, reducing net expectancy and adjusting minimum holding targets.",
            "By increasing leverage to compensate for swap fees.",
            "By closing and re-opening the spot gold contract at the daily fix window."
          ],
          correctIndex: 1,
          explanation: "Swap rates represent the cost of carrying a position overnight. For swing trades, these accumulated interest costs act as a continuous drag on net expectancy and must be budgeted in the strategy R:R calculations."
        },
        {
          id: "q9_cert_12",
          question: "What is the role of investor fiduciary limits in institutional capital management?",
          options: [
            "To guarantee that the trading account cannot experience a single losing week.",
            "To establish legally binding risk boundaries, daily drawdown caps, and asset universe limitations to protect client capital.",
            "To report individual retail transactions to international customs.",
            "To bypass standard exchange API rate limits."
          ],
          correctIndex: 1,
          explanation: "Fiduciary limits are strict legal boundaries governing capital allocation. They mandate exact drawdown limits and asset restrictions that the portfolio manager cannot exceed under any circumstances."
        },
        {
          id: "q9_cert_13",
          question: "Why should altcoin position sizes be adjusted dynamically based on BTC Dominance cycles?",
          options: [
            "Because altcoins offer higher leverage limits on centralized exchanges.",
            "During high BTC dominance, altcoins exhibit extreme beta volatility and lower liquidity, requiring smaller exposure sizes.",
            "BTC Dominance determines the hourly perp funding settlement interval.",
            "To bypass KYC limits on decentralized exchanges."
          ],
          correctIndex: 1,
          explanation: "Bitcoin Dominance determines capital flow. When BTC dominance spikes, altcoins experience liquidity drains and amplified downside volatility (high beta risk), requiring immediate reduction in position sizes."
        },
        {
          id: "q9_cert_14",
          question: "In a multi-strategy portfolio, how does combining an expansion strategy with a mean reversion strategy stabilize the equity curve?",
          options: [
            "It doubles the win rate of both strategies during high volatility.",
            "It exploits different market conditions, smoothing drawdown periods because one system thrives when the other is inactive.",
            "It automatically hedges all currency risk without stop losses.",
            "It matches the transaction speed of the execution venue."
          ],
          correctIndex: 1,
          explanation: "Combining non-correlated systems (expansion and mean reversion) smooths drawdown. Expansion trades capture large trends while mean reversion captures range rotations, creating a balanced equity curve."
        },
        {
          id: "q9_cert_15",
          question: "What constitutes the final pass condition of the Lurnava final Certification Crucible?",
          options: [
            "Reaching a profit target of $10,000 using maximum leverage.",
            "Achieving a grading score of 80% or higher, representing 100% rule conformance, verified drawdown defense, positive expectancy, and passing the Gate Scenario.",
            "Passing the automated backtesting phase of 10 major currency pairs.",
            "Trading for 90 consecutive days without experiencing a single drawdown phase."
          ],
          correctIndex: 1,
          explanation: "Lurnava Certification is process-centric. Graduation requires achieving an 80%+ score reflecting flawless checklist conformance, drawdown gating adherence, positive expectancy, and passing the interactive gate scenario."
        }
      ]
    };

    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");

      // Upsert Gate Scenario
      console.log("\nUpserting Gate Scenario: 'final-certification-crucible'...");
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: gateScenario.slug },
        update: gateScenario as any,
        create: gateScenario as any,
      });
      console.log(`   Upserted scenario: ${scenario.title}`);

      // Link scenario to module 9.15
      const mod915 = await prisma.courseModule.findFirst({
        where: { level: 9, moduleNumber: "9.15" },
      });
      if (mod915) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod915.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod915.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 },
        });
        console.log(`   Linked scenario '${scenario.slug}' to module 9.15.`);
      } else {
        console.warn("   Warning: Module 9.15 not found in database.");
      }

      // Upsert Level 9 Knowledge Test
      console.log("\nSyncing Level 9 Knowledge Test...");
      await prisma.knowledgeTest.upsert({
        where: { level: 9 },
        update: level9Test as any,
        create: level9Test as any,
      });
      console.log("   ✅ Level 9 Knowledge Test synced: 'Level 9 Final Certification Portfolio Readiness Test'");
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
