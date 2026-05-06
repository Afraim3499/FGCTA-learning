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
  console.log("Content Structure Type:", typeof mod.content);
  
  const content = typeof mod.content === 'string' ? JSON.parse(mod.content.replace(':::lesson-cards\n', '').replace('\n:::', '')) : mod.content;
  
  console.log("Card count:", content?.length);
  
  if (content && content[1]) {
    console.log("--- CARD 2 ---");
    console.log("Title:", content[1].title);
    console.log("Body:", content[1].body);
    console.log("Context:", JSON.stringify(content[1].context, null, 2));
  } else {
    console.log("Card 2 not found");
  }
  
  await prisma.$disconnect();
  await pool.end();
}

check();
