/**
 * PURPOSE: Clear Level 6 in the database to prepare for Scenario Planning content.
 * 
 * CURRENT STATE:
 *   Level 6 = Macro Economics (8 modules) -> legacy content to be cleared.
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- LEVEL 6 CLEARANCE FOR SCENARIO PLANNING ---");
  console.log(`Mode: ${isDryRun ? "DRY RUN" : "LIVE"}`);

  if (!isDryRun && !forceLive) {
    console.error("CRITICAL: Live mode requested but FORCE_LIVE is not 'true'. Aborting.");
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
    // 1. Inspect current state of Level 6
    const l6Modules = await prisma.courseModule.findMany({
      where: { level: 6 },
      orderBy: { orderIndex: "asc" },
    });
    const l6Test = await prisma.knowledgeTest.findUnique({ where: { level: 6 } });
    const l6Scenarios = await prisma.trainingScenario.findMany({ where: { level: 6 } });

    console.log(`\nCurrent Level 6 State:`);
    console.log(`  Modules: ${l6Modules.length}`);
    l6Modules.forEach((m: any) => console.log(`    ${m.moduleNumber}: ${m.title}`));
    console.log(`  Test: ${l6Test ? (l6Test as any).title : "NONE"}`);
    console.log(`  Scenarios: ${l6Scenarios.length}`);
    l6Scenarios.forEach((s: any) => console.log(`    ${s.slug}`));

    if (l6Modules.length === 0 && !l6Test) {
      console.log("\n✅ Level 6 is already clear. Nothing to do.");
      return;
    }

    // 2. Delete Level 6 module-scenario links first (foreign key safety)
    console.log("\n--- Step 1: Remove ModuleScenarioLinks for Level 6 modules ---");
    for (const mod of l6Modules) {
      const links = await prisma.moduleScenarioLink.findMany({
        where: { moduleId: mod.id },
      });
      if (links.length > 0) {
        console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} Deleting ${links.length} link(s) for module ${(mod as any).moduleNumber}`);
        if (!isDryRun) {
          await prisma.moduleScenarioLink.deleteMany({ where: { moduleId: mod.id } });
        }
      }
    }

    // 3. Delete Level 6 modules
    console.log("\n--- Step 2: Delete legacy Level 6 modules ---");
    for (const mod of l6Modules) {
      console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} DELETE ${(mod as any).moduleNumber}: ${(mod as any).title}`);
      if (!isDryRun) {
        // Delete module completions first
        await prisma.moduleCompletion.deleteMany({ where: { moduleId: mod.id } });
        await prisma.courseModule.delete({ where: { id: mod.id } });
      }
    }

    // 4. Delete Level 6 Knowledge Test
    if (l6Test) {
      console.log("\n--- Step 3: Delete Level 6 Knowledge Test ---");
      console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} DELETE test: ${(l6Test as any).title}`);
      if (!isDryRun) {
        await prisma.knowledgeTest.delete({ where: { level: 6 } });
      }
    }

    // 5. Verification
    if (!isDryRun) {
      const remainingL6 = await prisma.courseModule.count({ where: { level: 6 } });
      const remainingL6Test = await prisma.knowledgeTest.findUnique({ where: { level: 6 } });

      console.log("\n--- VERIFICATION ---");
      console.log(`  Level 6 modules remaining: ${remainingL6} (expected: 0)`);
      console.log(`  Level 6 test remaining: ${remainingL6Test ? "YES ❌" : "NONE ✅"}`);

      if (remainingL6 === 0 && !remainingL6Test) {
        console.log("\n✅ Level 6 is now CLEAR and ready for Scenario Planning.");
      } else {
        console.log("\n⚠️ Some Level 6 items remain. Please investigate.");
      }
    } else {
      console.log("\n--- DRY RUN COMPLETE ---");
      console.log("No data was changed. Run with DRY_RUN=false FORCE_LIVE=true to execute.");
    }

  } catch (error) {
    console.error("\nCLEARANCE FAILED:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
