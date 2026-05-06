import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

async function check() {
  const pool = new Pool({ 
    connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const mod = await (prisma as any).courseModule.findFirst({
    where: { moduleNumber: "0.1", level: 0 }
  });
  
  if (!mod) {
    console.log("Module not found");
    await prisma.$disconnect();
    await pool.end();
    return;
  }

  console.log("Module Title:", mod.title);
  console.log("Core Content has :::lesson-cards?", mod.content?.includes(":::lesson-cards"));
  console.log("Crypto Adaptation has :::lesson-cards?", mod.cryptoAdaptation?.includes(":::lesson-cards"));
  
  if (mod.cryptoAdaptation) {
    console.log("--- CRYPTO ADAPTATION ---");
    console.log(mod.cryptoAdaptation.substring(0, 500));
  }
  
  await prisma.$disconnect();
  await pool.end();
}

check();
