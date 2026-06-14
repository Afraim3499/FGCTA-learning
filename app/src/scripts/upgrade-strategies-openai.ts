import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { OpenAI } from "openai";

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

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const systemPrompt = [
  "You are a professional quantitative and institutional trading curriculum writer at Lurnava Academy.",
  "Your task is to rewrite a draft retail trading strategy into a rigorous, process-driven, institutional-grade playbook entry.",
  "",
  "STYLE RULES:",
  "- TONE: Professional, technical, analytical. Never use vague motivational phrases, emotional adjectives, or terms like 'beginner', 'easy', 'journey', or 'signals'.",
  "- ZERO FLUFF: Start immediately with the technical mechanics. Never start with textbook introductions like 'In the dynamic world of...', 'This strategy is a crucial tool...', 'Understanding this helps...'.",
  "- CONCRETE CRITERIA: Specify measurable numeric parameters, session windows, volume limits, and spread tolerances (e.g. 'within 15 minutes of London Open', 'using a 14-period ATR with a 2.0x multiplier', 'where the spread is under 2.5 pips').",
  "- REAL EXAMPLES: When writing the trade walkthrough, use realistic market prices plausible for the given asset class. Do NOT use round placeholder numbers like 100.00 or 1.0000 unless that is accurate for that asset.",
  "",
  "You must return a JSON object with exactly THREE fields:",
  "1. \"coreLogic\": A markdown formatted explanation of the core technical logic. It must start directly with a heading (### Core Strategy Logic) and include:",
  "   - A detailed breakdown of the entry, stop-loss placement, and profit targets.",
  "   - An explicit, bulleted Checklist for entries, exits, and invalidations.",
  "2. \"trapMechanics\": A markdown formatted explanation of market traps. It must start directly with a heading (### Market Trap Mechanics) and include:",
  "   - A deep-dive into how retail traders get trapped using this concept (e.g., liquidity sweeps, news expansions, broker spread widening).",
  "   - An explicit Common Mistake description.",
  "   - Mitigation rules to avoid getting trapped.",
  "3. \"tradeWalkthrough\": A markdown formatted step-by-step walkthrough of ONE concrete hypothetical trade using this strategy. It must start directly with a heading (### Trade Walkthrough) and include:",
  "   - Market context: date, session, asset, and macro/price context at the time of setup.",
  "   - Step-by-step trade setup: exact entry price, stop-loss price, take-profit price, lot size or position sizing rationale.",
  "   - Trade outcome: whether the trade hit TP, SL, or was manually closed, and why. Include the exact R gained or lost.",
  "   - Lesson extracted: one precise, non-generic lesson that students should internalize from this specific trade example.",
  "   - DO NOT use generic placeholder prices. Use realistic, historically plausible price levels for the asset.",
].join("\n");

async function main() {
  const args = process.argv.slice(2);
  const limitArg = args.find(a => a.startsWith("--limit="))?.split("=")[1];
  const dryRun = args.includes("--dry-run");
  const strategyId = args.find(a => a.startsWith("--id="))?.split("=")[1];

  const limit = limitArg ? parseInt(limitArg) : 5;

  // Count total pending strategies
  const totalCount = await prisma.strategy.count();
  const pendingCount = await prisma.strategy.count({
    where: {
      NOT: {
        coreLogic: {
          contains: "### Core Strategy Logic"
        }
      }
    }
  });

  console.log("--- STRATEGY CONTENT UPGRADE PROCESS START ---");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE DB UPDATE"}`);
  console.log(`Total Database Strategies: ${totalCount}`);
  console.log(`Pending Upgrades Remaining: ${pendingCount}`);
  console.log(`Batch Limit for this phase: ${strategyId ? "Single Strategy" : limit}`);

  // Fetch target strategies
  let strategies: any[] = [];
  if (strategyId) {
    const s = await prisma.strategy.findUnique({ where: { id: strategyId } });
    if (s) strategies.push(s);
  } else {
    strategies = await prisma.strategy.findMany({
      where: {
        NOT: {
          coreLogic: {
            contains: "### Core Strategy Logic"
          }
        }
      },
      take: limit,
      orderBy: [
        { sequenceNumber: "asc" },
        { id: "asc" }
      ]
    });
  }

  if (strategies.length === 0) {
    console.log("No strategies found to upgrade.");
    await prisma.$disconnect();
    await pool.end();
    return;
  }

  for (const s of strategies) {
    console.log(`\nUpgrading strategy: "${s.name}" (ID: ${s.id}, Seq: ${s.sequenceNumber}, Asset: ${s.assetClass})`);

    const userPrompt = [
      `Strategy Name: ${s.name}`,
      `Asset Class: ${s.assetClass}`,
      `Parent Family: ${s.parentFamily}`,
      "",
      "Draft Core Logic:",
      s.coreLogic,
      "",
      "Draft Trap Mechanics:",
      s.trapMechanics || "None",
      "",
      "Please generate the upgraded institutional content in JSON format.",
    ].join("\n");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.3,
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");

      if (!result.coreLogic || !result.trapMechanics || !result.tradeWalkthrough) {
        console.warn(`  [Warning] Missing fields in OpenAI response. Got: ${Object.keys(result).join(", ")}. Skipping update.`);
        continue;
      }

      console.log("--- Upgraded Core Logic Preview ---");
      console.log(result.coreLogic.substring(0, 200) + "...");
      console.log("--- Upgraded Trap Mechanics Preview ---");
      console.log(result.trapMechanics.substring(0, 200) + "...");
      console.log("--- Trade Walkthrough Preview ---");
      console.log(result.tradeWalkthrough.substring(0, 200) + "...");

      if (!dryRun) {
        await prisma.strategy.update({
          where: { id: s.id },
          data: {
            coreLogic: result.coreLogic,
            trapMechanics: result.trapMechanics,
            tradeWalkthrough: result.tradeWalkthrough,
          }
        });
        console.log(`  ✓ Updated database entry for: "${s.name}"`);
      }
    } catch (err) {
      console.error(`  [Error] Failed to process strategy "${s.name}":`, err);
    }
  }

  console.log("\n--- STRATEGY CONTENT UPGRADE PROCESS COMPLETE ---");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
