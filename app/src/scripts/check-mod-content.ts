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

  const mods = await (prisma as any).courseModule.findMany({
    where: { moduleNumber: "0.1", level: 0 }
  });
  
  console.log("Found modules count:", mods.length);
  mods.forEach((m: any, i: number) => {
    console.log("Forex Adaptation Length:", m.forexAdaptation?.length);
    console.log("Forex Adaptation CONTENT START");
    console.log(m.forexAdaptation);
    console.log("Forex Adaptation CONTENT END");
  });
  
  await prisma.$disconnect();
  await pool.end();
}

check();
