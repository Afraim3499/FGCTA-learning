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
  const countArg = process.argv.find(arg => arg.startsWith("--count="))?.split("=")[1];
  const requestedCount = countArg ? parseInt(countArg, 10) : undefined;
  if (requestedCount !== undefined && (!Number.isInteger(requestedCount) || requestedCount <= 0)) {
    throw new Error(`Invalid --count value: ${countArg}`);
  }

  const allDbStrategies = await prisma.strategy.findMany({
    orderBy: [
      { sequenceNumber: "asc" },
      { id: "asc" },
    ],
  });

  const upgraded = allDbStrategies.filter((s: any) => s.learningProfile !== null && s.visualModel !== null);
  if (requestedCount !== undefined && upgraded.length < requestedCount) {
    throw new Error(`Requested ${requestedCount} upgraded strategies, but only ${upgraded.length} are ready.`);
  }

  const selected = requestedCount !== undefined ? upgraded.slice(0, requestedCount) : upgraded;
  const output = selected.map((s: any, index: number) => ({
    ordinal: index + 1,
    id: s.id,
    name: s.name,
    assetClass: s.assetClass,
    sequenceNumber: s.sequenceNumber,
    parentFamily: s.parentFamily,
    learningProfile: s.learningProfile,
    visualModel: s.visualModel,
  }));

  const outputName = requestedCount ? `dumped_${requestedCount}_strategies.json` : "dumped_upgraded_strategies.json";
  const outputPath = path.join(__dirname, outputName);
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Successfully dumped ${output.length} strategies to: ${outputPath}`);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
