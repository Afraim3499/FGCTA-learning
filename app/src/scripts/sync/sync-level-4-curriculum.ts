import { level4Curriculum } from "../../content/level-4";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

/**
 * Modular Level 4 Curriculum Sync Pipeline
 * 
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 4 CURRICULUM SYNC START ---");
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

    for (const mod of level4Curriculum) {
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

      if (mod.moduleNumber === "4.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = { scenarioSlug: "l4-mission-4a", missionTitle: "Level 4 Review Missions", passThreshold: 80 };
      } else if (mod.moduleNumber === "4.8") {
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

    console.log("\n--- LEVEL 4 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);
    
    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");
      
      console.log("\nUpdating Scenario Links for Level 4 Final Gate...");
      
      const mod415 = await prisma.courseModule.findFirst({
        where: { level: 4, moduleNumber: "4.15" }
      });
      const mod48 = await prisma.courseModule.findFirst({
        where: { level: 4, moduleNumber: "4.8" }
      });
      
      const slugs = ["l4-mission-4a", "l4-mission-4b"];

      for (const slug of slugs) {
        const scenario = await prisma.trainingScenario.findUnique({
          where: { slug }
        });

        if (scenario) {
          if (mod48) {
            await prisma.moduleScenarioLink.deleteMany({
              where: { moduleId: mod48.id, scenarioId: scenario.id }
            });
            console.log(`   Removed link between scenario ${slug} and old module 4.8.`);
          }

          if (mod415) {
            await prisma.moduleScenarioLink.upsert({
              where: { moduleId_scenarioId: { moduleId: mod415.id, scenarioId: scenario.id } },
              update: { requiredForProgress: true, sortOrder: 1 },
              create: { moduleId: mod415.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 }
            });
            console.log(`   Linked scenario ${slug} to new module 4.15.`);
          }
        } else {
          console.warn(`   Warning: TrainingScenario '${slug}' not found in database.`);
        }
      }

      // --- Level 4 Knowledge Test Upsert ---
      console.log("\nSyncing Level 4 Knowledge Test (Time & Price Cycles)...");
      const level4Test = {
        level: 4,
        title: "Level 4 Time & Price Cycles Test",
        passThreshold: 80,
        timeLimitMin: 25,
        questionsPerAttempt: 15,
        questions: [
          { id: "q4_tp_1", question: "What are the three phases of the Daily Session Cycle?", options: ["Accumulation, Manipulation, Distribution", "Compression, Expansion, Reversal", "Asian, London, New York", "Open, Close, Reset"], correctIndex: 0, explanation: "The Daily Cycle moves through Accumulation (Asian consolidation), Manipulation (false move at London Open), and Distribution (the true directional expansion)." },
          { id: "q4_tp_2", question: "What is the Asian Range?", options: ["The total range of the first 4 hours of the New York session", "The consolidation range formed during the Asian session that defines the day's initial liquidity boundaries", "A specific candlestick pattern seen on JPY pairs", "The distance between the daily open and close"], correctIndex: 1, explanation: "The Asian Range is the high and low formed during the Asian session. It establishes the resting BSL and SSL boundaries that London and NY sessions often target." },
          { id: "q4_tp_3", question: "What is a Judas Swing?", options: ["A bullish breakout that holds above the Asian Range", "A false move at the London Open that sweeps one side of the Asian Range before reversing in the true daily direction", "A high-probability continuation pattern", "A gap fill from the previous day's close"], correctIndex: 1, explanation: "The Judas Swing is a deceptive move designed to trap early participants by sweeping Asian Range liquidity before price reverses into the true distribution direction." },
          { id: "q4_tp_4", question: "What time (EST) does the London Killzone typically operate?", options: ["7:00 AM - 10:00 AM", "2:00 AM - 5:00 AM", "12:00 PM - 3:00 PM", "10:00 PM - 1:00 AM"], correctIndex: 1, explanation: "The London Killzone runs approximately 2:00 AM to 5:00 AM EST, which is when the London session opens and the highest-probability manipulations begin." },
          { id: "q4_tp_5", question: "What time (EST) does the New York Killzone typically operate?", options: ["2:00 AM - 5:00 AM", "7:00 AM - 10:00 AM", "12:00 PM - 3:00 PM", "5:00 PM - 8:00 PM"], correctIndex: 1, explanation: "The NY Killzone runs approximately 7:00 AM to 10:00 AM EST, when New York banks begin active participation and major economic data is released." },
          { id: "q4_tp_6", question: "What is the Midnight Open Anchor?", options: ["The opening price of the Asian session at midnight EST, used as a directional reference for the true day", "The closing price of the previous New York session", "A specific Order Block that forms at midnight", "The weekly open price"], correctIndex: 0, explanation: "The Midnight Open (00:00 EST) serves as a directional anchor. If price trades above it, the day's bias leans bullish; below it, bearish. It separates premium from discount for the algorithmic day." },
          { id: "q4_tp_7", question: "In the Power of 3 (PO3) model, what does the 'Manipulation' phase correspond to on a daily candle?", options: ["The candle body", "The wick that forms opposite to the close direction (the false move)", "The opening price", "The closing price"], correctIndex: 1, explanation: "In PO3, the Manipulation phase creates the wick on the opposite side of the true close. On a bullish day, the low wick is the manipulation (sweep of sell-side liquidity)." },
          { id: "q4_tp_8", question: "What are Macro Windows?", options: ["Large economic events like NFP and FOMC", "20-minute algorithmic recalculation intervals within Killzones (e.g., :50-:10 past the hour)", "Weekly chart patterns", "Monthly economic calendar dates"], correctIndex: 1, explanation: "Macro Windows are short ~20-minute intervals within Killzones where algorithmic models recalculate and often trigger liquidity runs. Common examples include the :50-:10 window around major hours." },
          { id: "q4_tp_9", question: "According to Weekly Cycle analysis, when does the weekly Low or High of the Day (LOD/HOD) most commonly form?", options: ["Friday afternoon", "Monday or Tuesday", "Wednesday or Thursday", "Sunday evening"], correctIndex: 1, explanation: "Statistical analysis shows the weekly low or high typically forms on Monday or Tuesday, establishing the manipulation reference for the rest of the week's distribution." },
          { id: "q4_tp_10", question: "What is the London Close Killzone window (EST)?", options: ["2:00 AM - 5:00 AM", "7:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"], correctIndex: 2, explanation: "The London Close Killzone runs approximately 10:00 AM to 12:00 PM EST. This is when London participants unwind positions, often causing counter-trend retracements." },
          { id: "q4_tp_11", question: "If your bullish scenario has not triggered by the end of the NY Killzone (10:00 AM EST), what should you do?", options: ["Extend the scenario window to the afternoon", "Archive the scenario as time-expired and wait for the next session", "Switch to a bearish scenario immediately", "Add more confluence to justify the entry"], correctIndex: 1, explanation: "Time-based invalidation is a core Level 4 rule. If the expected interaction does not occur within the defined Killzone window, the scenario is expired. Extending the window is narrative protection." },
          { id: "q4_tp_12", question: "What makes a 'Time & Price Confluence' high-probability?", options: ["When price reaches a round number during any time of day", "When an institutional array (OB, FVG) aligns with an active Killzone window and session context", "When multiple indicators agree on a chart", "When the daily candle is green"], correctIndex: 1, explanation: "A true Time & Price Confluence occurs when WHERE price is (at an institutional array) aligns with WHEN it arrives (during an active Killzone or Macro Window). This stacking of time and price evidence elevates probability." },
          { id: "q4_tp_13", question: "During a bullish PO3 day, the Distribution phase corresponds to which part of the daily candle?", options: ["The low wick (sweep of SSL)", "The body expanding upward from the manipulation wick toward the close", "The opening gap", "The Asian Range consolidation"], correctIndex: 1, explanation: "Distribution is the true directional expansion. On a bullish PO3 day, it is the body traveling from the manipulation low toward the high close. The body IS the distribution." },
          { id: "q4_tp_14", question: "Why is the NY/London Overlap considered a high-significance window?", options: ["Because both London and NY banks are active simultaneously, creating peak volume and liquidity", "Because the Asian session is about to open", "Because economic news is never released during this time", "Because spreads are at their widest"], correctIndex: 0, explanation: "The overlap (approximately 8:00 AM - 12:00 PM EST) is when both the world's largest Forex centers are active. This creates the highest liquidity, the tightest spreads, and the most reliable structural moves." },
          { id: "q4_tp_15", question: "If a mid-week reversal pattern is expected (based on weekly cycle analysis), which day typically marks the pivot?", options: ["Monday", "Wednesday", "Friday", "Sunday"], correctIndex: 1, explanation: "Wednesday is the classic mid-week reversal pivot. After the weekly LOD/HOD forms on Monday/Tuesday, Wednesday often marks the structural shift toward the opposite weekly extreme." }
        ]
      };

      if (!isDryRun) {
        await prisma.knowledgeTest.upsert({
          where: { level: 4 },
          update: level4Test as any,
          create: level4Test as any,
        });
        console.log("   ✅ Level 4 Knowledge Test synced: 'Level 4 Time & Price Cycles Test'");
      } else {
        console.log("   [DRY] WOULD UPSERT: Level 4 Knowledge Test (Time & Price Cycles)");
      }
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
