import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { STRATEGY_QUESTIONS } from "../lib/strategies-questions";
import { STRATEGIES_DATA } from "../lib/strategies-data";

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
  console.log("--- SEED EXAM QUESTIONS START ---");
  
  // Deleting existing exam questions first to prevent duplicates
  const deleteCount = await prisma.examQuestion.deleteMany({});
  console.log(`Cleared ${deleteCount.count} existing exam questions.`);

  for (const q of STRATEGY_QUESTIONS) {
    // 1. Look up level from STRATEGIES_DATA
    const strategy = STRATEGIES_DATA.find(s => s.logicId === q.logicId);
    const level = strategy ? strategy.level : 2;

    // 2. Prepare DB record payload
    let options: string[] = q.options || [];
    let correctIndex: number | null = q.correctIndex !== undefined ? q.correctIndex : null;
    let chartState: any = q.chartState || null;

    if (q.type === "TICKER_DECISION") {
      // Map TICKER_DECISION into standard options & correctIndex
      options = ["execute", "wait", "flat"];
      if (q.correctDecision === "execute") correctIndex = 0;
      else if (q.correctDecision === "wait") correctIndex = 1;
      else if (q.correctDecision === "flat") correctIndex = 2;
      
      chartState = { tickerData: q.tickerData };
    }

    const data = {
      id: q.id,
      level,
      type: q.type as QuestionType,
      domain: q.domain,
      logicId: q.logicId,
      prompt: q.prompt,
      options,
      correctIndex,
      matchingLeft: q.matchingLeft || [],
      matchingRight: q.matchingRight || [],
      chartState: chartState ? (chartState as any) : undefined,
      targetX: q.targetX !== undefined ? q.targetX : null,
      targetY: q.targetY !== undefined ? q.targetY : null,
      tolerance: q.tolerance !== undefined ? q.tolerance : null,
      explanation: q.explanation,
    };

    const created = await prisma.examQuestion.create({ data });
    console.log(`Seeded question [${created.type}] id: ${created.id} (Level ${created.level}, Strategy: ${created.logicId})`);
  }

  console.log("--- SEED EXAM QUESTIONS COMPLETE ---");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
