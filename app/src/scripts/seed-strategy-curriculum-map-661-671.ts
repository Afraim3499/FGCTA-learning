import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_661_671_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = {
  id: string;
  ordinal: number;
  expectedName: string;
  expectedAsset: Asset;
  moduleNumber: string;
  prompt: string;
  options: string[];
  explanation: string;
};

function seed(
  ordinal: number,
  moduleNumber: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string
): BatchSeed {
  const target = BATCH_661_671_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return {
    id: target.id,
    ordinal,
    expectedName: target.name,
    expectedAsset: target.assetClass as Asset,
    moduleNumber,
    prompt,
    options: [correct, ...wrong],
    explanation,
  };
}

const SEEDS: BatchSeed[] = [
  seed(661, "8.13", "What should Exchange Inflow Exhaustion require?", "Fresh exchange inflow, wallet-label timestamp, failed continuation, venue depth, spread percentage, absorption area, and stale-label trap.", ["Inflow count alone.", "No wallet-label check.", "No venue-depth review."], "The lesson teaches that crypto flow data needs price response and venue context before it becomes useful."),
  seed(662, "2.4", "What should Single Moving-Average Filter check?", "One moving average, slope, completed close, session spread, pip distance, and whipsaw through the average.", ["Two-average crossover.", "Unfinished candle only.", "No spread check."], "A single average is a filter lesson; it should not become a crossover lesson."),
  seed(663, "6.12", "What should Q1 Seasonal Demand Surge compare?", "Q1 window, current Gold structure, macro conflict check, wick behavior, point/dollar distance, and seasonality-only trap.", ["Calendar month only.", "No Gold structure.", "No macro conflict check."], "Seasonality is context and still needs current Gold structure."),
  seed(664, "2.4", "What should ADX Trend Strength Filter separate?", "ADX strength, +DI/-DI direction, price-structure agreement, low-ADX chop, spread, and pip distance.", ["ADX as direction alone.", "No directional-line check.", "No price structure."], "ADX describes strength; the directional lines and price structure carry the direction check."),
  seed(665, "2.4", "What should MACD Trend-Following compare?", "MACD line, trigger line, histogram bars, zero baseline, Forex structure, spread, and pip distance.", ["Histogram bar alone.", "No zero baseline.", "No price-structure check."], "MACD is clearer when the lines, histogram, baseline, and price structure are read together."),
  seed(666, "9.11", "What should Funding Rate Arbitrage (Delta Neutral) audit?", "Equalized spot/perpetual legs, funding interval, basis, fees, collateral, venue depth, slippage, spread percentage, and rebalance drift.", ["Perpetual leg only.", "No fee ledger.", "No venue-depth check."], "Delta-neutral means the legs are matched; it does not remove basis, fee, collateral, or venue risk."),
  seed(667, "2.4", "What should Moving-Average Crossover Trend require?", "Fast and slow averages, slope agreement, completed crossover close, Forex spread, pip distance, and whipsaw trap.", ["Single average only.", "No completed close.", "No whipsaw review."], "A crossover lesson needs both averages and a completed close, then the learner checks for lag and whipsaw."),
  seed(668, "6.12", "What should Real Yield Inversion Play compare?", "Real-yield direction, Gold structure response, macro timestamp, conflict area, delayed-reaction trap, and point/dollar distance.", ["Nominal yields only.", "No Gold response.", "No macro timestamp."], "Gold macro lessons need both the macro input and the chart response."),
  seed(669, "2.4", "What should Supertrend Volatility Stop show?", "Supertrend volatility band, pullback hold, trend flip, trailing invalidation, spread, pip distance, and flip-whipsaw trap.", ["Band color only.", "No pullback hold.", "No trailing invalidation."], "The Supertrend band is a trailing invalidation guide, not a standalone direction rule."),
  seed(670, "2.4", "What should Ichimoku Cloud Logic require?", "Kumo boundary, cloud thickness, Tenkan/Kijun relationship, completed close, spread, pip distance, and return-inside-cloud trap.", ["Cloud color only.", "No Tenkan/Kijun check.", "No completed close."], "Ichimoku logic works as a structure read only when cloud, lines, and close are checked together."),
  seed(671, "4.3", "What should London Session Momentum require?", "Premarked pre-London range, London open, first stable close, pullback or hold, spread, pip distance, and false-start trap.", ["First fast candle only.", "Range drawn after the move.", "No spread review."], "London momentum is a timing lesson: the range must be fixed before the expansion is judged."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 11 || SEEDS.length !== BATCH_661_671_TARGETS.length) throw new Error("Batch 661-671 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({
    where: { id: { in: ids } },
    select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true },
  });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({
    where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } },
    select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true },
  });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  for (const item of SEEDS) {
    const strategy = strategyById.get(item.id);
    if (!strategy) {
      problems.push(`Missing strategy ${item.ordinal}: ${item.id}`);
      continue;
    }
    if (!namesMatchExpected(strategy.name, item.expectedName)) problems.push(`Name mismatch at ${item.ordinal}: expected ${item.expectedName}, got ${strategy.name}`);
    if (strategy.assetClass !== item.expectedAsset) problems.push(`Asset mismatch at ${item.ordinal}: expected ${item.expectedAsset}, got ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`Strategy not ready at ${item.ordinal}: ${strategy.name}`);
  }
  for (const item of SEEDS) {
    if (!moduleByNumber.has(item.moduleNumber)) problems.push(`Missing module ${item.moduleNumber} for ${item.expectedName}`);
  }
  if (problems.length) throw new Error(`Batch 661-671 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 661-671 curriculum map ---");
  console.table(SEEDS.map(item => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: item.ordinal,
      id: item.id,
      name: strategy.name,
      asset: strategy.assetClass,
      sequence: strategy.sequenceNumber,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      strategyLevel: getStrategyLevel(strategy),
      module: `${module.moduleNumber} ${module.title}`,
      examLevel: module.level,
      learningProfile: "ready",
      visualModel: "ready",
    };
  }));

  const byModule = new Map<string, BatchSeed[]>();
  for (const item of SEEDS) byModule.set(item.moduleNumber, [...(byModule.get(item.moduleNumber) || []), item]);

  for (const [moduleNumber, moduleSeeds] of byModule) {
    const module = moduleByNumber.get(moduleNumber)!;
    const refs = moduleSeeds.map(item => getVaultStrategyRef(item.id));
    const next = Array.from(new Set([...(module.logicIds || []), ...refs]));
    console.log(`${dryRun ? "Would update" : "Updating"} module ${moduleNumber} ${module.title}: ${next.length - (module.logicIds || []).length} new link(s)`);
    if (!dryRun) await prisma.courseModule.update({ where: { id: module.id }, data: { logicIds: next } });
  }

  for (const item of SEEDS) {
    const module = moduleByNumber.get(item.moduleNumber)!;
    const id = questionIdFor(item.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} ${id} at Level ${module.level}`);
    if (!dryRun) {
      const question = {
        level: module.level,
        type: QuestionType.MCQ,
        domain: item.expectedAsset.toLowerCase(),
        logicId: getVaultStrategyRef(item.id),
        prompt: item.prompt,
        options: item.options,
        correctIndex: 0,
        explanation: item.explanation,
      };
      await prisma.examQuestion.upsert({
        where: { id },
        create: { id, ...question },
        update: { ...question, matchingLeft: [], matchingRight: [], chartState: undefined, targetX: null, targetY: null, tolerance: null },
      });
    }
  }

  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 661-671 curriculum map applied.");
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
