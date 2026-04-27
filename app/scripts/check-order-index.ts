
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
  const ms = await prisma.courseModule.findMany({
    where: { level: 2 },
    select: { id: true, moduleNumber: true, orderIndex: true },
    orderBy: { orderIndex: 'asc' }
  });
  console.log('Level 2 Modules Order:', JSON.stringify(ms, null, 2));
  
  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
