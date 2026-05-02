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
  const modules = await prisma.courseModule.findMany({
    where: {
      level: 2,
      moduleNumber: { in: ['2.7', '2.8', '2.9', '2.10', '2.11', '2.12'] }
    },
    select: {
      moduleNumber: true,
      interactiveTaskType: true,
      interactiveTaskData: true,
      logicIds: true,
      strategyFamilies: true
    },
    orderBy: { orderIndex: 'asc' }
  });

  console.log(JSON.stringify(modules, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
