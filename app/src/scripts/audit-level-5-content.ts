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
  const mod5 = await (prisma as any).courseModule.findFirst({
    where: { level: 5 },
    select: { moduleNumber: true, title: true, content: true }
  });

  console.log("--- Level 5 Sample Module ---");
  console.log("Module:", mod5?.moduleNumber);
  console.log("Title:", mod5?.title);
  console.log("Content Length:", mod5?.content?.length);
  console.log("Content Preview:", mod5?.content?.substring(0, 100));
  console.log("------------------------------");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
