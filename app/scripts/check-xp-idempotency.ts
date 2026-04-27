
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Afraim9934?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const scenarioSlug = 'm2-level-2-map-review-v1';
  const scenario = await prisma.trainingScenario.findUnique({ where: { slug: scenarioSlug } });
  
  if (!scenario) {
    console.log('ERROR: Scenario not found');
    return;
  }

  console.log('=== SCENARIO INFO ===');
  console.log('Scenario ID:', scenario.id);
  console.log('Scenario Slug:', scenario.slug);
  console.log('XP Award:', scenario.xpAward);

  // Check all attempts for this scenario (ordered by startedAt, not attemptedAt)
  const allAttempts = await prisma.scenarioAttempt.findMany({
    where: { scenarioId: scenario.id },
    orderBy: { startedAt: 'asc' }
  });

  console.log('\n=== ALL ATTEMPTS ===');
  console.log('Total attempts:', allAttempts.length);
  allAttempts.forEach(a => {
    console.log(`  Attempt ID: ${a.id}, UserID: ${a.userId}, Passed: ${a.passed}, Score: ${a.score}`);
  });

  // Check XP ledger entries — using scenario-keyed sourceType ('scenario')
  const xpEntries = await prisma.xPLedgerEntry.findMany({
    where: { 
      OR: [
        { sourceId: scenario.id, sourceType: 'scenario' },
        { sourceId: { in: allAttempts.map(a => a.id) }, sourceType: 'scenario_attempt' }
      ]
    }
  });

  console.log('\n=== XP LEDGER ENTRIES ===');
  console.log('Total XP entries:', xpEntries.length);
  xpEntries.forEach(x => {
    console.log(`  XP Entry ID: ${x.id}, UserID: ${x.userId}, Amount: ${x.xpAmount}, sourceType: ${x.sourceType}, sourceId: ${x.sourceId}`);
  });

  // Check unique constraint
  console.log('\n=== UNIQUE KEY ANALYSIS ===');
  const uniqueKeys = new Set(xpEntries.map(x => `${x.userId}|${x.sourceId}|${x.sourceType}`));
  console.log('Unique userId+sourceId+sourceType combos:', uniqueKeys.size);
  console.log('Total XP entries:', xpEntries.length);
  if (uniqueKeys.size === xpEntries.length) {
    console.log('STATUS: NO DUPLICATES - Unique constraint is working');
  } else {
    console.log('STATUS: POSSIBLE DUPLICATES DETECTED');
  }

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
