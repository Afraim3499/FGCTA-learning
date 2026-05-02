
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
  const searchId = '335d2146-239f-431d-b892-748529f79624';
  const all = await prisma.courseModule.findMany();
  
  all.forEach(m => {
    const jsonStr = JSON.stringify(m);
    if (jsonStr.includes(searchId)) {
      console.log('MATCH FOUND in Module JSON:', m.id, m.moduleNumber);
    }
  });

  const tests = await prisma.knowledgeTest.findMany();
  tests.forEach(t => {
    const jsonStr = JSON.stringify(t);
    if (jsonStr.includes(searchId)) {
      console.log('MATCH FOUND in Test JSON:', t.id, t.level);
    }
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
