import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

async function check() {
  const pool = new Pool({ 
    connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const mod = await prisma.courseModule.findUnique({
      where: { level_moduleNumber: { level: 0, moduleNumber: "0.1" } }
    });

    if (mod) {
      console.log("Module 0.1 found.");
      console.log("Forex Adaptation Length:", mod.forexAdaptation?.length || 0);
      console.log("Gold Adaptation Length:", mod.goldAdaptation?.length || 0);
      console.log("Crypto Adaptation Length:", mod.cryptoAdaptation?.length || 0);
      
      if (mod.goldAdaptation) {
        console.log("Gold Adaptation sample:", mod.goldAdaptation.substring(0, 50));
      }
    } else {
      console.log("Module 0.1 not found.");
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

check();
