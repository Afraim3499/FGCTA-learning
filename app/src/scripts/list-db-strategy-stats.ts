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
  const assetTypes = ["CRYPTO", "FOREX", "GOLD"];
  console.log("--- STRATEGY DATABASE BREAKDOWN ---");
  
  for (const asset of assetTypes) {
    const count = await prisma.strategy.count({
      where: { assetClass: asset as any }
    });
    console.log(`- ${asset}: ${count} strategies`);
  }

  const total = await prisma.strategy.count();
  console.log(`\nTotal Strategies in DB: ${total}`);

  // Let's print the count of unique families
  const families = await prisma.strategy.groupBy({
    by: ["parentFamily"],
    _count: {
      id: true
    }
  });

  console.log("\nBy Families:");
  families.forEach(f => {
    console.log(`  - "${f.parentFamily}": ${f._count.id} strategies`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
