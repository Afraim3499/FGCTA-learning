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
    take: 10
  });

  console.log("Upgraded strategy details:");
  strategies.forEach((s) => {
    const lp: any = s.learningProfile;
    console.log(`- Name: "${s.name}"`);
    console.log(`  DB ID: ${s.id}`);
    console.log(`  Asset: ${s.assetClass}`);
    console.log(`  Seq: ${s.sequenceNumber}`);
    if (lp) {
      console.log(`  LP Level: ${lp.level}`);
      console.log(`  LP Difficulty: ${lp.difficulty}`);
      console.log(`  LP Family: ${lp.family}`);
    } else {
      console.log("  No learning profile!");
    }
    console.log();
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
