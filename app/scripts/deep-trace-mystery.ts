
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function deepTrace() {
  const mysteryId = '335d2146-239f-431d-b892-748529f79624';
  
  console.log('=== DEEP TRACE: Mystery UUID 335d2146... ===\n');
  
  // Check if it could be from UserProgress or another related progress table
  const upCheck = await prisma.userProgress.findMany({ select: { id: true, userId: true, currentLevel: true } });
  console.log('UserProgress rows:', upCheck.map(u => u.id));
  
  // Check module completions - maybe the user had a completion for a now-deleted module?
  const completions = await prisma.moduleCompletion.findMany({
    where: { moduleId: mysteryId }
  });
  console.log('Completions with mystery moduleId:', completions.length);
  
  // Check if it's in the UserProgress currentModuleId field (if one exists)
  const up = await prisma.userProgress.findMany({ 
    select: { id: true, userId: true }
  });
  const upIds = up.map(u => u.id);
  console.log('UserProgress IDs:', upIds.map(id => id.substring(0,8)));
  const foundInUp = upIds.includes(mysteryId);
  console.log('Mystery ID is a UserProgress ID:', foundInUp);

  // Check if it's from an old nextStepCard link stored in progress
  // The getNextStep function links to /course/module/${nextMod.id}
  // If nextMod.id was EVER the mystery ID, it would have come from an old module now deleted

  // Check all historical modules - maybe this module was DELETED
  // Check moduleCompletion for ANY module that doesn't exist anymore
  const allCompletions = await prisma.moduleCompletion.findMany({
    select: { moduleId: true }
  });
  const uniqueModuleIds = [...new Set(allCompletions.map(c => c.moduleId))];
  console.log('\nAll moduleIds referenced in completions:', uniqueModuleIds.length);
  
  const allCurrentModules = await prisma.courseModule.findMany({ select: { id: true, moduleNumber: true } });
  const currentIds = new Set(allCurrentModules.map(m => m.id));
  
  const orphanedCompletions = uniqueModuleIds.filter(id => !currentIds.has(id));
  console.log('Orphaned moduleIds in completions (deleted modules):', orphanedCompletions);
  
  if (orphanedCompletions.includes(mysteryId)) {
    console.log('FOUND: Mystery ID was a MODULE that was DELETED but has old completions!');
  }

  // What user had the mystery ID in their journey?
  const userWithMystery = await prisma.moduleCompletion.findMany({
    where: { moduleId: mysteryId }
  });
  console.log('Users with mystery moduleId completions:', userWithMystery.map(c => c.userId));

  await prisma.$disconnect();
  await pool.end();
}

deepTrace().catch(e => console.error(e));
