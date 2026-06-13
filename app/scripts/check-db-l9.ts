import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("CRITICAL: DIRECT_URL or DATABASE_URL is missing.");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const modules = await prisma.courseModule.findMany({
      where: { level: 9 },
      orderBy: { orderIndex: "asc" }
    });
    console.log(`\nFound ${modules.length} Level 9 modules in the DB.`);
    modules.forEach(m => {
      console.log(`  - Module ${m.moduleNumber}: ${m.title}`);
    });
  } catch (err) {
    console.error("Prisma error:", err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
