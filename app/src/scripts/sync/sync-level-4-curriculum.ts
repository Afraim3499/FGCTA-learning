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
