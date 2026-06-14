import { level1Curriculum } from "../../content/level-1";
import { PrismaClient, SkillLevel, ModuleTrack } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

/**
 * Modular Level 1 Curriculum Sync Pipeline
 * 
 * Safety Rules:
 * 1. Upsert only. No delete or truncate operations.
 * 2. Dry run by default.
 * 3. Requires FORCE_LIVE="true" for actual database mutation.
 */

async function sync() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- MODULAR LEVEL 1 CURRICULUM SYNC START ---");
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

    for (const mod of level1Curriculum) {
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

      if (mod.moduleNumber === "1.15") {
        dbData.interactiveTaskType = "scenario_link";
        dbData.interactiveTaskData = { scenarioSlug: "level-1-planning-gate", passThreshold: 80 };
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

    console.log("\n--- LEVEL 1 SYNC SUMMARY ---");
    console.log(`Modules Updated: ${updateCount}`);
    console.log(`Modules Created: ${createCount}`);
    console.log(`Total Operations: ${updateCount + createCount}`);

    const scenarioData = {
      slug: "level-1-planning-gate",
      title: "Level 1 Trade Plan Formulation Crucible",
      description: "Demonstrate your trade plan formulation by mapping triggers, targets, and invalidations.",
      scenarioType: "structure_annotation" as any,
      status: "active" as any,
      level: 1,
      instrument: "EUR/USD",
      timeframe: "1H",
      candleSourceType: "curated" as any,
      prompt: "Step through the chart progression and formulate the correct trade plan hypotheses.",
      expectedActions: [
        { step: 1, action: "MAP_SUPPORT", justification: "Identify the major HTF support level as the narrative anchor." },
        { step: 2, action: "DEFINE_TRIGGER", justification: "Wait for a lower timeframe displacement trigger to confirm bias." },
        { step: 3, action: "SET_INVALIDATION", justification: "Place the invalidation line below the swing low." },
        { step: 4, action: "SET_TARGET", justification: "Define target at the next significant liquidity pool (resistance)." },
        { step: 5, action: "EXECUTE", justification: "Hypothesis confirmed: execute trade aligned with risk parameters." }
      ] as any,
      gradingRubric: {
        perfect_score: 100,
        passing_score: 80,
        deduction_per_mistake: 20
      } as any,
      xpAward: 50,
      scenarioVersion: 1,
      engineVersion: "1.0.0",
      graderVersion: "1.0.0",
      metadata: {} as any
    };

    if (isDryRun) {
      console.log("\n[DRY] WOULD UPSERT SCENARIO: level-1-planning-gate");
      console.log("[DRY] WOULD LINK SCENARIO level-1-planning-gate to Module 1.15");
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nUpdating Scenario Links for Level 1 Gate...");
      const mod115 = await prisma.courseModule.findFirst({
        where: { level: 1, moduleNumber: "1.15" }
      });
      const scenario = await prisma.trainingScenario.upsert({
        where: { slug: "level-1-planning-gate" },
        update: scenarioData,
        create: {
          id: crypto.randomUUID(),
          ...scenarioData
        }
      });

      if (mod115 && scenario) {
        await prisma.moduleScenarioLink.upsert({
          where: { moduleId_scenarioId: { moduleId: mod115.id, scenarioId: scenario.id } },
          update: { requiredForProgress: true, sortOrder: 1 },
          create: { moduleId: mod115.id, scenarioId: scenario.id, requiredForProgress: true, sortOrder: 1 }
        });
        console.log(`   Successfully seeded scenario '${scenario.slug}' and linked it to Module 1.15.`);
      }
      console.log("\nLIVE SYNC COMPLETE: Database updated.");
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
