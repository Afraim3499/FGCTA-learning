import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

console.log("Checking environment...");
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not defined in .env!");
  process.exit(1);
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function exportAllData() {
  console.log("🚀 Starting full database export...");

  // Get all models from Prisma
  // Note: We have to manually list them or use the internal dmmf
  const models = [
    "user",
    "userProgress",
    "courseModule",
    "moduleProgress",
    "userPhaseAttempt",
    "trade",
    "dailySnapshot",
    "xPLedgerEntry",
    "userEventLog",
    "userBadge"
  ];

  const exportData: any = {};

  for (const model of models) {
    console.log(`📦 Exporting ${model}...`);
    try {
      // @ts-ignore - dynamic access to prisma models
      const data = await prisma[model].findMany();
      exportData[model] = data;
    } catch (error) {
      console.error(`❌ Failed to export ${model}:`, error);
    }
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const fileName = `db_backup_${timestamp}.json`;
  const filePath = path.join(process.cwd(), fileName);

  fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2));

  console.log("✅ Export Complete!");
  console.log(`📄 File saved to: ${filePath}`);
}

exportAllData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
