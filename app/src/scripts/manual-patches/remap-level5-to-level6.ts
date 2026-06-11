/**
 * PURPOSE: Clear Level 5 for Risk Architecture by remapping legacy content.
 * 
 * CURRENT STATE:
 *   Level 5 = Scenario Planning (10 modules) → should be Level 6
 *   Level 6 = Macro Economics (8 modules) → already in correct position or needs later resequencing
 * 
 * STRATEGY:
 *   1. Move Level 5 Scenario Planning → Level 6 (renumber 5.x → 6.x)
 *      - Since Level 6 already has modules, we need to handle collisions
 *      - Move existing L6 Macro modules to Level 7 temporarily, then bring Scenario Planning to L6
 *      - Actually: the simplest safe approach is to just wipe Level 5 content that is Scenario Planning,
 *        since it's legacy 10-module content that will be rebuilt as 15-module content later.
 *   2. Delete the Level 5 KnowledgeTest (Scenario Planning Test) so the slot is clear for Risk Architecture.
 *   3. Remap the Level 5 gate scenario to Level 6.
 * 
 * DECISION: Because Level 6 already has 8 Macro Economics modules (6.1-6.8),
 *   and these do NOT collide with Scenario Planning (which would be 6.1-6.10),
 *   we cannot simply renumber 5.x → 6.x without hitting unique constraint violations.
 *   
 *   SOLUTION: Delete the legacy Level 5 modules entirely. They are 10-module legacy content
 *   without the proper 39-card architecture. They will be rebuilt from scratch when we reach
 *   Level 6 (Scenario Planning) in the curriculum build pipeline.
 *   
 *   Keep the gate scenario (remap to L6) and delete the L5 test.
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

async function main() {
  const isDryRun = process.env.DRY_RUN !== "false";
  const forceLive = process.env.FORCE_LIVE === "true";

  console.log("--- LEVEL 5 CLEARANCE FOR RISK ARCHITECTURE ---");
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
    // 1. Inspect current state
    const l5Modules = await prisma.courseModule.findMany({
      where: { level: 5 },
      orderBy: { orderIndex: "asc" },
    });
    const l5Test = await prisma.knowledgeTest.findUnique({ where: { level: 5 } });
    const l5Scenarios = await prisma.trainingScenario.findMany({ where: { level: 5 } });

    console.log(`\nCurrent Level 5 State:`);
    console.log(`  Modules: ${l5Modules.length}`);
    l5Modules.forEach((m: any) => console.log(`    ${m.moduleNumber}: ${m.title}`));
    console.log(`  Test: ${l5Test ? (l5Test as any).title : "NONE"}`);
    console.log(`  Scenarios: ${l5Scenarios.length}`);
    l5Scenarios.forEach((s: any) => console.log(`    ${s.slug}`));

    if (l5Modules.length === 0 && !l5Test) {
      console.log("\n✅ Level 5 is already clear. Nothing to do.");
      return;
    }

    // 2. Verify these ARE the legacy Scenario Planning modules (safety check)
    const isScenarioPlanning = l5Modules.some((m: any) =>
      m.title?.includes("Evidence Stack") ||
      m.title?.includes("Scenario Planning") ||
      m.title?.includes("Primary vs Alternative")
    );

    if (l5Modules.length > 0 && !isScenarioPlanning) {
      console.error("\n❌ SAFETY: Level 5 modules do NOT look like legacy Scenario Planning. Aborting.");
      console.error("   If Level 5 Risk Architecture has already been built, this script is not needed.");
      return;
    }

    // 3. Delete Level 5 module-scenario links first (foreign key safety)
    console.log("\n--- Step 1: Remove ModuleScenarioLinks for Level 5 modules ---");
    for (const mod of l5Modules) {
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

    // 4. Delete Level 5 modules (legacy 10-module format, no 39-card architecture)
    console.log("\n--- Step 2: Delete legacy Level 5 modules ---");
    for (const mod of l5Modules) {
      console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} DELETE ${(mod as any).moduleNumber}: ${(mod as any).title}`);
      if (!isDryRun) {
        // Delete module completions first (foreign key)
        await prisma.moduleCompletion.deleteMany({ where: { moduleId: mod.id } });
        await prisma.courseModule.delete({ where: { id: mod.id } });
      }
    }

    // 5. Delete Level 5 Knowledge Test (stale Scenario Planning test)
    if (l5Test) {
      console.log("\n--- Step 3: Delete Level 5 Knowledge Test ---");
      console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} DELETE test: ${(l5Test as any).title}`);
      if (!isDryRun) {
        // Delete test attempts first (foreign key via onDelete: Cascade should handle this)
        await prisma.knowledgeTest.delete({ where: { level: 5 } });
      }
    }

    // 6. Remap Level 5 gate scenario to Level 6
    if (l5Scenarios.length > 0) {
      console.log("\n--- Step 4: Remap Level 5 scenarios → Level 6 ---");
      for (const sc of l5Scenarios) {
        console.log(`  ${isDryRun ? "[DRY]" : "[LIVE]"} ${(sc as any).slug}: Level 5 → Level 6`);
        if (!isDryRun) {
          await prisma.trainingScenario.update({
            where: { id: sc.id },
            data: { level: 6 },
          });
        }
      }
    }

    // 7. Verification
    if (!isDryRun) {
      const remainingL5 = await prisma.courseModule.count({ where: { level: 5 } });
      const remainingL5Test = await prisma.knowledgeTest.findUnique({ where: { level: 5 } });
      const remainingL5Scenarios = await prisma.trainingScenario.count({ where: { level: 5 } });

      console.log("\n--- VERIFICATION ---");
      console.log(`  Level 5 modules remaining: ${remainingL5} (expected: 0)`);
      console.log(`  Level 5 test remaining: ${remainingL5Test ? "YES ❌" : "NONE ✅"}`);
      console.log(`  Level 5 scenarios remaining: ${remainingL5Scenarios} (expected: 0)`);

      if (remainingL5 === 0 && !remainingL5Test && remainingL5Scenarios === 0) {
        console.log("\n✅ Level 5 is now CLEAR and ready for Risk Architecture.");
      } else {
        console.log("\n⚠️  Some Level 5 items remain. Please investigate.");
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
