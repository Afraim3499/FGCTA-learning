import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const tests = await prisma.knowledgeTest.findMany({
    orderBy: { level: "asc" }
  });
  console.log(`\nFound ${tests.length} Knowledge Tests in the DB:`);
  tests.forEach(t => {
    const qCount = (t.questions as any[] || []).length;
    console.log(`  - Level ${t.level}: "${t.title}" (${qCount} questions, threshold ${t.passThreshold}%)`);
  });

  const scenarios = await prisma.trainingScenario.findMany({
    orderBy: { level: "asc" }
  });
  console.log(`\nFound ${scenarios.length} Training Scenarios in the DB:`);
  scenarios.forEach(s => {
    console.log(`  - Level ${s.level} | Slug: "${s.slug}" | Title: "${s.title}" | Instrument: ${s.instrument}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
