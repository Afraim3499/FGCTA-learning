import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const mod1 = await (prisma as any).courseModule.findFirst({
    where: { level: 1 },
    select: { moduleNumber: true, title: true, content: true }
  });

  console.log("--- Level 1 Sample Module ---");
  console.log("Module:", mod1?.moduleNumber);
  console.log("Title:", mod1?.title);
  console.log("Content Length:", mod1?.content?.length);
  console.log("Content Preview:", mod1?.content?.substring(0, 100));
  console.log("------------------------------");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
