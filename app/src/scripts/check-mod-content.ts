import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const module = await prisma.courseModule.findFirst({
    where: { moduleNumber: "0.1", level: 0 }
  });

  if (module) {
    const gold = module.goldAdaptation || "";
    const match = gold.match(/:::lesson-cards\s*\n([\s\S]*?)\n\s*:::/);
    if (!match) {
      console.log("Regex match failed");
      return;
    }
    try {
      const cards = JSON.parse(match[1]);
      console.log("JSON.parse successful. Number of cards:", cards.length);
    } catch (e: any) {
      console.log("JSON.parse failed:", e.message);
      console.log("Snippet near error:", match[1].substring(0, 1000));
    }
  } else {
    console.log("Module not found");
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
