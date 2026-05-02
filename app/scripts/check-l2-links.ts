
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

// NOTE: nextModuleId / prevModuleId are NOT DB columns.
// They are computed dynamically in getModuleContent via findIndex on the ordered list.
// This script verifies navigation by showing the computed sequence from orderIndex.

async function main() {
  const ms = await prisma.courseModule.findMany({
    where: { level: 2 },
    select: { 
      id: true, 
      moduleNumber: true, 
      title: true,
      orderIndex: true
    },
    orderBy: { orderIndex: 'asc' }
  });
  
  console.log('Level 2 Module Navigation Sequence (computed from orderIndex):');
  ms.forEach((m, i) => {
    const prev = i > 0 ? ms[i - 1].moduleNumber : 'null (start)';
    const next = i < ms.length - 1 ? ms[i + 1].moduleNumber : 'null → /test/2';
    console.log(`${m.moduleNumber} [${m.id.substring(0, 8)}...]: prev=${prev}, next=${next}`);
  });

  const searchId = '335d2146-239f-431d-b892-748529f79624';
  const foundAt = ms.findIndex(m => m.id === searchId);
  console.log(`\nSearch for ghost ID ${searchId.substring(0, 8)}...:`);
  console.log(foundAt >= 0 
    ? `FOUND at index ${foundAt} (${ms[foundAt].moduleNumber})`
    : 'NOT FOUND in Level 2 modules (expected — ghost ID, 500 error caused by stale cached link)');

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
