
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
  const ms = await prisma.courseModule.findMany({
    where: { level: 2 },
    select: { id: true, moduleNumber: true, title: true }
  });
  console.log('Level 2 Modules:', JSON.stringify(ms, null, 2));
  
  const searchId = '335d2146-239f-431d-b892-748529f79624';
  const found = await prisma.courseModule.findUnique({ where: { id: searchId } });
  console.log('Search Result for ID:', found);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
