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

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const strategies = await prisma.strategy.findMany({
    orderBy: [
      { sequenceNumber: "asc" },
      { id: "asc" }
    ],
    skip: 30,
    take: 10
  });

  console.log("Batch 4 Proposed Strategies:");
  strategies.forEach((s, idx) => {
    console.log(`${idx + 31}. Name: "${s.name}" (ID: ${s.id}, Seq: ${s.sequenceNumber}, Asset: ${s.assetClass})`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
