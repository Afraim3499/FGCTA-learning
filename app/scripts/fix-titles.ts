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
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.3' } },
    data: { title: 'Supply & Demand Basics' }
  });
  console.log('Updated 1.3 title to:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
