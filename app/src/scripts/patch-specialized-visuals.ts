import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { overrideVisualModel as applyVisualModelOverrides } from "./strategy-override-rules";

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
  console.log("Starting patch process for specialized chart visual models...");

  const strategies = await prisma.strategy.findMany({
    orderBy: [{ sequenceNumber: "asc" }, { id: "asc" }],
  });

  const upgraded = strategies.filter((s: any) => s.learningProfile !== null);
  console.log(`Found ${upgraded.length} upgraded strategies to patch.`);

  for (const s of upgraded) {
    const originalVm = s.visualModel as any;
    if (!originalVm) continue;

    const newVm = applyVisualModelOverrides(s.name, s.assetClass, { ...originalVm });
    const changed =
      newVm.componentType !== originalVm.componentType ||
      newVm.visualCategory !== originalVm.visualCategory ||
      JSON.stringify(newVm.requiredLabels) !== JSON.stringify(originalVm.requiredLabels) ||
      JSON.stringify(newVm.requiredZones) !== JSON.stringify(originalVm.requiredZones);

    if (!changed) continue;

    console.log(`Patching "${s.name}" (${s.assetClass}) -> ${newVm.visualCategory} / ${newVm.componentType}`);
    await prisma.strategy.update({
      where: { id: s.id },
      data: { visualModel: newVm as any },
    });
  }

  console.log("Patch process complete!");
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
