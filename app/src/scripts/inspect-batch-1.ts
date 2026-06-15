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
    take: 20
  });

  console.log("First 20 strategies in DB order:");
  strategies.forEach((s, idx) => {
    console.log(`${idx + 1}. Name: "${s.name}" (ID: ${s.id}, Seq: ${s.sequenceNumber}, Level: ${(s.learningProfile as any)?.level || 'N/A'}, Asset: ${s.assetClass}) - Upgraded: ${s.learningProfile !== null}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
