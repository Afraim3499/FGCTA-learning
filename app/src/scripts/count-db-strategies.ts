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
  const dbCount = await prisma.strategy.count();
  console.log(`\nFound ${dbCount} strategies in the Strategy table.`);

  // Let's sample the first 10 strategies
  const samples = await prisma.strategy.findMany({
    take: 10,
    orderBy: { sequenceNumber: "asc" }
  });

  console.log("\nFirst 10 strategies in DB:");
  samples.forEach(s => {
    console.log(`  - Sequence ${s.sequenceNumber} | Name: "${s.name}" | Asset: ${s.assetClass} | Family: ${s.parentFamily}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
