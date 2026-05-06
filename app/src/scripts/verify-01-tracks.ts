import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🔍 Verifying Module 0.1 Full Track Upgrade...");
  const m = await (prisma as any).courseModule.findFirst({
    where: { level: 0, moduleNumber: '0.1' }
  });

  if (!m) {
    console.error("❌ Module 0.1 not found!");
    process.exit(1);
  }

  const checkTrack = (name: string, content: string | null, expectedCardCount: number) => {
    if (!content) {
      console.log(`[FAIL] Track ${name} is empty`);
      return;
    }
    const hasDirective = content.includes(":::lesson-cards");
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.log(`[FAIL] Track ${name} has no valid JSON array`);
      return;
    }
    try {
      const cards = JSON.parse(jsonMatch[0]);
      console.log(`[PASS] Track ${name}: Found ${cards.length} cards (Expected ${expectedCardCount})`);
    } catch (e) {
      console.log(`[FAIL] Track ${name}: JSON parse error`);
    }
  };

  checkTrack("Core", m.content, 8);
  checkTrack("Forex", m.forexAdaptation, 4);
  checkTrack("Gold", m.goldAdaptation, 4);
  checkTrack("Crypto", m.cryptoAdaptation, 4);

  // Check specific titles in Core
  const coreTitles = [
    "Mission Brief: You Are Not Here for Tips",
    "The Lurnava Training Loop",
    "Random Learner vs. Trained Learner",
    "The Cockpit: Your Training Instruments",
    "One Hour of Bad Practice",
    "The Three-Question Gate",
    "Training Drill: The Hype Trap",
    "Debrief: What You Are Being Trained For"
  ];

  coreTitles.forEach(t => {
    console.log(`[${m.content.includes(t) ? "PASS" : "FAIL"}] Core Title: ${t}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main();
