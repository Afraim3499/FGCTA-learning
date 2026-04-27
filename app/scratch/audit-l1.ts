import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function audit() {
  try {
    const modules = await prisma.courseModule.findMany({
      where: { level: 1 },
      orderBy: { orderIndex: 'asc' },
      include: { scenarioLinks: true }
    });
    const tests = await prisma.knowledgeTest.findMany({
      where: { level: 1 }
    });
    console.log(JSON.stringify({ modules, tests }, null, 2));
  } catch (error) {
    console.error("Audit Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

audit();
