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
  const modules = await (prisma as any).courseModule.groupBy({
    by: ['level'],
    _count: {
      id: true
    },
    orderBy: {
      level: 'asc'
    }
  });

  console.log("--- DB CourseModule Stats ---");
  modules.forEach((m: any) => {
    console.log(`Level ${m.level}: ${m._count.id} modules`);
  });
  console.log("------------------------------");

  const tests = await (prisma as any).knowledgeTest.findMany({
    select: { level: true }
  });
  console.log("--- DB KnowledgeTest Stats ---");
  console.log("Levels with tests:", tests.map((t: any) => t.level).sort((a: any, b: any) => a-b).join(", "));
  console.log("------------------------------");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
