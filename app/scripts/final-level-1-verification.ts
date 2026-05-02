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

async function main() {
  console.log('--- 1. Level 1 DB Query Result ---');
  const level1Modules = await prisma.courseModule.findMany({
    where: { level: 1 },
    orderBy: { orderIndex: 'asc' },
    select: { id: true, level: true, moduleNumber: true, title: true, orderIndex: true }
  });
  console.table(level1Modules);

  console.log('\n--- 2. Duplicate Check ---');
  const duplicates = await prisma.$queryRaw`
    SELECT module_number, COUNT(*)
    FROM course_modules
    WHERE level = 1
    GROUP BY module_number
    HAVING COUNT(*) > 1
  `;
  console.log(duplicates);

  console.log('\n--- 4. Exact Knowledge Test Content ---');
  const test = await prisma.knowledgeTest.findUnique({
    where: { level: 1 }
  });
  if (test) {
    console.log('Title:', test.title);
    console.log('Threshold:', test.passThreshold);
    console.log('Questions:');
    console.log(JSON.stringify(test.questions, null, 2));
  } else {
    console.log('Test not found');
  }

  console.log('\n--- Checking Level 0 and Level 2 Status ---');
  const level0Count = await prisma.courseModule.count({ where: { level: 0 } });
  const level2Count = await prisma.courseModule.count({ where: { level: 2 } });
  console.log('Level 0 modules count:', level0Count);
  console.log('Level 2 modules count:', level2Count);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
