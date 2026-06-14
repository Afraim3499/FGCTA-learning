import { level0Curriculum } from "../src/content/level-0";
import { level1Curriculum } from "../src/content/level-1";
import { level2Curriculum } from "../src/content/level-2";
import { level3Curriculum } from "../src/content/level-3";
import { level4Curriculum } from "../src/content/level-4";
import { level5Curriculum } from "../src/content/level-5";
import { level6Curriculum } from "../src/content/level-6";
import { level7Curriculum } from "../src/content/level-7";
import { level8Curriculum } from "../src/content/level-8";
import { level9Curriculum } from "../src/content/level-9";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const allLevels = [
  { levelNum: 0, curriculum: level0Curriculum },
  { levelNum: 1, curriculum: level1Curriculum },
  { levelNum: 2, curriculum: level2Curriculum },
  { levelNum: 3, curriculum: level3Curriculum },
  { levelNum: 4, curriculum: level4Curriculum },
  { levelNum: 5, curriculum: level5Curriculum },
  { levelNum: 6, curriculum: level6Curriculum },
  { levelNum: 7, curriculum: level7Curriculum },
  { levelNum: 8, curriculum: level8Curriculum },
  { levelNum: 9, curriculum: level9Curriculum }
];

async function runAudit() {
  console.log("=========================================");
  console.log("LURNAVA CURRICULUM SCALE DETAILED AUDIT");
  console.log("=========================================\n");

  let grandTotalModules = 0;
  let grandTotalCore = 0;
  let grandTotalForex = 0;
  let grandTotalGold = 0;
  let grandTotalCrypto = 0;
  let grandTotalCards = 0;
  let grandTotalPractices = 0;
  let grandTotalScenarios = 0;
  const allVisualKeys = new Set<string>();

  const rows: string[] = [];
  rows.push("| Level | Modules | Core Cards | Forex Cards | Gold Cards | Crypto Cards | Practices | Scenarios | Visuals | Total Cards |");
  rows.push("|---|---|---|---|---|---|---|---|---|---|");

  for (const lvl of allLevels) {
    let coreCount = 0;
    let forexCount = 0;
    let goldCount = 0;
    let cryptoCount = 0;
    let practiceCount = 0;
    let scenarioCount = 0;
    const lvlVisuals = new Set<string>();

    for (const mod of lvl.curriculum) {
      if (mod.tracks.core) {
        coreCount += mod.tracks.core.length;
        mod.tracks.core.forEach(c => {
          if (c.type === "practice") practiceCount++;
          if (c.visualKey) {
            lvlVisuals.add(c.visualKey);
            allVisualKeys.add(c.visualKey);
          }
        });
      }
      if (mod.tracks.forex) {
        forexCount += mod.tracks.forex.length;
        mod.tracks.forex.forEach(c => {
          if (c.type === "practice") practiceCount++;
          if (c.visualKey) {
            lvlVisuals.add(c.visualKey);
            allVisualKeys.add(c.visualKey);
          }
        });
      }
      if (mod.tracks.gold) {
        goldCount += mod.tracks.gold.length;
        mod.tracks.gold.forEach(c => {
          if (c.type === "practice") practiceCount++;
          if (c.visualKey) {
            lvlVisuals.add(c.visualKey);
            allVisualKeys.add(c.visualKey);
          }
        });
      }
      if (mod.tracks.crypto) {
        cryptoCount += mod.tracks.crypto.length;
        mod.tracks.crypto.forEach(c => {
          if (c.type === "practice") practiceCount++;
          if (c.visualKey) {
            lvlVisuals.add(c.visualKey);
            allVisualKeys.add(c.visualKey);
          }
        });
      }

      if (mod.interactiveTaskType === "scenario_link" || mod.interactiveTaskData?.scenarioSlug) {
        scenarioCount++;
      }
    }

    const lvlTotal = coreCount + forexCount + goldCount + cryptoCount;
    grandTotalModules += lvl.curriculum.length;
    grandTotalCore += coreCount;
    grandTotalForex += forexCount;
    grandTotalGold += goldCount;
    grandTotalCrypto += cryptoCount;
    grandTotalCards += lvlTotal;
    grandTotalPractices += practiceCount;
    grandTotalScenarios += scenarioCount;

    rows.push(`| Level ${lvl.levelNum} | ${lvl.curriculum.length} | ${coreCount} | ${forexCount} | ${goldCount} | ${cryptoCount} | ${practiceCount} | ${scenarioCount} | ${lvlVisuals.size} | ${lvlTotal} |`);
  }

  rows.push(`| **Total** | **${grandTotalModules}** | **${grandTotalCore}** | **${grandTotalForex}** | **${grandTotalGold}** | **${grandTotalCrypto}** | **${grandTotalPractices}** | **${grandTotalScenarios}** | **${allVisualKeys.size}** | **${grandTotalCards}** |`);

  console.log(rows.join("\n"));

  // Fetch db test/mcq counts
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (connectionString) {
    try {
      const pool = new Pool({
        connectionString,
        ssl: { rejectUnauthorized: false },
      });
      const adapter = new PrismaPg(pool);
      const prisma = new PrismaClient({ adapter });
      const tests = await prisma.knowledgeTest.findMany();
      let totalMCQs = 0;
      tests.forEach(t => {
        totalMCQs += (t.questions as any[] || []).length;
      });
      console.log(`\nDatabase Quizzes Count: ${tests.length} tests, Total MCQs: ${totalMCQs}`);
      await prisma.$disconnect();
      await pool.end();
    } catch (e: any) {
      console.log("\nCould not connect to DB to fetch tests:", e.message);
    }
  }
}

runAudit();
