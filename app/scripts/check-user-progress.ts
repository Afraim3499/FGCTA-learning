
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
  const up = await prisma.userProgress.findFirst({
    include: { user: { select: { email: true } } }
  });
  console.log('User Progress:', JSON.stringify(up, null, 2));
  
  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
