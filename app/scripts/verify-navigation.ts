
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

// This simulates the EXACT logic in getModuleContent (src/lib/course-actions.ts)
// to verify that next/prev links are correct for 2.7 through 2.12

async function verifyNavigation() {
  const approvedL1 = ["1.1", "1.2", "1.3", "1.4", "1.5"];
  
  const allInLevel = await prisma.courseModule.findMany({
    where: { level: 2 },
    orderBy: { orderIndex: 'asc' },
    select: { id: true, moduleNumber: true }
  });

  console.log('=== LEVEL 2 MODULE NAVIGATION VERIFICATION ===\n');
  console.log('Total Level 2 modules:', allInLevel.length);
  console.log('Module sequence:', allInLevel.map(m => m.moduleNumber).join(' → '));
  console.log('');

  // Test each module from 2.7 to 2.12
  const testModules = ['2.7', '2.8', '2.9', '2.10', '2.11', '2.12'];
  
  for (const moduleNumber of testModules) {
    const module = allInLevel.find(m => m.moduleNumber === moduleNumber);
    if (!module) {
      console.log(`❌ Module ${moduleNumber}: NOT FOUND in DB`);
      continue;
    }

    // OLD BUG: currentIndex = allInLevel.findIndex(m => m.id === moduleId)
    // If moduleId was the slug "2.12" instead of UUID, this fails
    const buggyIndex = allInLevel.findIndex(m => m.id === moduleNumber); // simulates bug
    
    // FIX: currentIndex = allInLevel.findIndex(m => m.id === module.id)
    const fixedIndex = allInLevel.findIndex(m => m.id === module.id);
    
    const prevModuleId = fixedIndex > 0 ? allInLevel[fixedIndex - 1].id : null;
    const nextModuleId = fixedIndex < allInLevel.length - 1 ? allInLevel[fixedIndex + 1].id : null;
    
    const prevModule = allInLevel.find(m => m.id === prevModuleId);
    const nextModule = allInLevel.find(m => m.id === nextModuleId);

    const buggyWouldFail = buggyIndex === -1;

    console.log(`Module ${moduleNumber} (ID: ${module.id.substring(0, 8)}...)`);
    console.log(`  Index: ${fixedIndex} (buggy index: ${buggyIndex} = ${buggyWouldFail ? '❌ WRONG - bug would fire!' : '✅'})`);
    console.log(`  ← Prev: ${prevModule?.moduleNumber ?? 'null (start of level)'}`);
    console.log(`  → Next: ${nextModule?.moduleNumber ?? 'null (end of level → test bridge)'}`);
    
    if (moduleNumber === '2.12') {
      console.log(`  🔗 End of Level 2 — next button bridges to /test/2`);
    }
    console.log('');
  }

  // Verify the mystery UUID
  const mysteryId = '335d2146-239f-431d-b892-748529f79624';
  const found = allInLevel.find(m => m.id === mysteryId);
  console.log(`=== MYSTERY UUID CHECK ===`);
  console.log(`ID 335d2146... in Level 2 modules: ${found ? '❌ FOUND - unexpected' : '✅ NOT FOUND (expected - ghost ID)'}`);
  console.log(`Conclusion: The 500 error was caused by the buggy index lookup returning -1,`);
  console.log(`causing nextModuleId to resolve to allInLevel[-1+1].id = allInLevel[0].id = 2.1's UUID.`);
  console.log(`Wait - actually if currentIndex is -1, then:`);
  console.log(`  nextModuleId = (-1 < 11) ? allInLevel[-1 + 1].id : null = allInLevel[0].id = ${allInLevel[0]?.id}`);
  console.log(`  ...but the ERROR was "Module 335d2146 not found", meaning that WAS the nextModuleId being navigated to.`);
  console.log(`\nChecking if 335d2146 is the ID of module 2.1:`);
  console.log(`Module 2.1 ID: ${allInLevel[0]?.id}`);
  console.log(`Match: ${allInLevel[0]?.id === mysteryId ? '❌ YES - this was the bug!' : '✅ No match - different root cause'}`);

  await prisma.$disconnect();
  await pool.end();
}

verifyNavigation().catch(e => console.error(e));
