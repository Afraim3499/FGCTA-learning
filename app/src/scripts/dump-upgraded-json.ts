import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

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

  const output = strategies.map(s => ({
    id: s.id,
    name: s.name,
    assetClass: s.assetClass,
    sequenceNumber: s.sequenceNumber,
    learningProfile: s.learningProfile,
    visualModel: s.visualModel
  }));

  const outputPath = path.join(__dirname, "dumped_batch_1.json");
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Successfully dumped Batch 1 to: ${outputPath}`);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
