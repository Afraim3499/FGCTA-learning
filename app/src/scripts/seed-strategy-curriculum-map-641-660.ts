import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_641_660_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
  originalName: string;
  expectedAsset: Asset;
  moduleNumber: string;
  prompt: string;
  options: string[];
  explanation: string;
};

function finalNameFor(name: string): string {
  if (namesMatchExpected(name, "AI-Assisted Signal")) return "AI-Assisted Trade Review";
  if (namesMatchExpected(name, "Dummy Strategy")) return "Previous-Day High Breakout";
  return name;
}

function seed(
  ordinal: number,
  moduleNumber: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string
): BatchSeed {
  const target = BATCH_641_660_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return {
    id: target.id,
    ordinal,
    expectedName: finalNameFor(target.name),
    originalName: target.name,
    expectedAsset: target.assetClass as Asset,
    moduleNumber,
    prompt,
    options: [correct, ...wrong],
    explanation,
  };
}

const SEEDS: BatchSeed[] = [
  seed(641, "8.10", "What should Rule-Based Mean Reversion require?", "A written mean rule, deviation band, range context, close back toward the mean, failed-expansion boundary, and Gold point/dollar distance.", ["A late chase after expansion.", "No mean line.", "No failed-expansion boundary."], "Mean reversion works as a rule audit only when the mean, stretch, and failure area are all visible."),
  seed(642, "5.2", "What should Volatility-Targeted System adjust?", "Exposure size from current Gold volatility, invalidation distance, target risk budget, exposure cap, and event-volatility cutback.", ["Direction from volatility alone.", "Size without invalidation distance.", "No exposure cap."], "Volatility targeting controls size; it does not decide market direction."),
  seed(643, "9.10", "What should Regime-Switching Model check before changing state?", "Named regime states, transition evidence, confidence threshold, pause rule, and false-regime-flip trap.", ["One candle state change.", "No confidence threshold.", "No pause rule."], "A regime model needs evidence and a pause condition when Gold state is unclear."),
  seed(644, "9.10", "What should Machine Learning Forecast Model audit?", "Feature inputs, training window, walk-forward review, forecast band, uncertainty area, overfit trap, and human review.", ["Forecast line only.", "No test window.", "No uncertainty band."], "The lesson teaches model review, not blind acceptance of a forecast."),
  seed(645, "9.13", "What should Portfolio Rebalancing Algorithm compare?", "Target Gold weight, current drift, rebalance threshold, turnover cost, correlation review, and post-rebalance allocation.", ["Price excitement only.", "No target weight.", "No cost review."], "Rebalancing is triggered by measured drift and portfolio rules."),
  seed(646, "8.11", "What should Multi-Timeframe Confluence separate?", "Higher-timeframe structure, middle-timeframe pullback, lower-timeframe trigger, conflict state, and Gold point/dollar distance.", ["One timeframe copied three times.", "Lower timeframe first.", "No conflict label."], "Each timeframe answers a different question, so disagreement must be visible."),
  seed(647, "8.11", "What should Macro + Technical Confluence compare?", "Fresh real-yield or USD driver, Gold chart structure, completed close, disagreement matrix, and macro-only trap.", ["Macro story only.", "No chart level.", "No disagreement check."], "Macro context must be tested against Gold structure before it becomes useful."),
  seed(648, "6.12", "What should Price Action + Volatility require?", "Gold candle body/wick structure, volatility band, acceptance close, normal-movement buffer, wick fakeout trap, and point/dollar distance.", ["Wick alone.", "No volatility band.", "No invalidation area."], "Gold price action becomes clearer when normal movement is separated from accepted structure."),
  seed(649, "6.9", "What should Yield + USD + Chart Structure compare?", "Real-yield direction, DXY context, Gold structure, conflict matrix, delayed-response trap, and point/dollar distance.", ["DXY only.", "No real-yield check.", "No Gold level."], "Gold macro context needs all three pieces: yield, USD, and chart behavior."),
  seed(650, "9.10", "What should AI-Assisted Trade Review use AI for?", "A draft that is checked against human chart notes, evidence checklist, uncertainty area, unsupported-output trap, and Gold point/dollar distance.", ["AI output as final answer.", "No human evidence review.", "No uncertainty note."], "AI can organize review notes, but the learner must verify every claim against the chart."),
  seed(651, "5.2", "What should ATR-Based Position Sizing calculate?", "Current ATR, structure invalidation distance, fixed classroom risk budget, size result, volatility-spike caution, and Gold point/dollar distance.", ["ATR as direction.", "Size before distance.", "No risk budget."], "ATR sizing converts movement size into a classroom size calculation."),
  seed(652, "5.3", "What should Leverage Control protect?", "Leverage cap, margin buffer, volatility cutback, exposure reduction gate, margin stress trap, and Gold point/dollar distance.", ["Increase leverage after stress.", "No buffer.", "No cap."], "Leverage control keeps exposure inside a written limit before stress grows."),
  seed(653, "6.12", "What should News Event Risk Reduction mark?", "Event time, no-action window, spread/volatility expansion, reduced exposure rule, whipsaw trap, and point/dollar distance.", ["First news wick only.", "No calendar check.", "No no-action window."], "The process is decided before the event, not during the first chaotic candle."),
  seed(654, "5.10", "What should Drawdown Controls enforce?", "Equity curve state, drawdown threshold, pause or cutback rule, recovery gate, and revenge-style trap.", ["Move the threshold.", "Increase exposure to recover.", "No recovery gate."], "Drawdown controls protect the process after repeated failed reads."),
  seed(655, "5.13", "What should Portfolio Hedging with Gold size?", "Named portfolio risk, Gold hedge sleeve, correlation or beta estimate, stress-window review, allocation cap, and over-hedge trap.", ["Gold added randomly.", "No correlation check.", "No hedge size."], "A hedge must be sized against a named portfolio risk."),
  seed(656, "5.13", "What should Correlation-Aware Exposure limit?", "Rolling correlation window, shared driver, exposure overlap, allocation cap, stress check, and relationship-break trap.", ["Asset names only.", "No shared driver.", "No cap."], "Correlation-aware exposure controls hidden concentration."),
  seed(657, "2.9", "What should Previous-Day High Breakout require?", "Premarked previous-day high, body close above it, retest or hold, invalidation back below, wick fakeout trap, and Gold point/dollar distance.", ["A wick above the level only.", "No prior high marked.", "No invalidation back below."], "The prior high must be fixed before the break, then acceptance is judged by close and retest behavior."),
  seed(658, "2.9", "What should Bollinger Squeeze Breakout require?", "Tight Bollinger Bands, bandwidth compression, breakout close, retest or hold, failed expansion trap, spread, and pip distance.", ["Choose direction before the close.", "No bandwidth expansion.", "No spread check."], "The squeeze shows compression; direction comes only after price breaks and holds."),
  seed(659, "1.11", "What should Price Action Candle Timing teach first?", "Wait for the candle to close, then mark open, high, low, close, body, wick, nearby swing, spread, and simple pip distance.", ["Judge the candle mid-formation.", "Use indicators.", "Ignore the wick."], "This is pure candle reading: the learner waits for the finished candle before judging it."),
  seed(660, "2.9", "What should Structural Breakout (Retest) require?", "Premarked support/resistance, completed breakout close, retest hold, invalidation back inside the old range, spread, and pip distance.", ["Move the level after the break.", "No retest review.", "No invalidation back inside."], "A retest lesson teaches whether the old level is accepted from the new side."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_641_660_TARGETS.length) throw new Error("Batch 641-660 seed cardinality mismatch.");

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
  if (problems.length) throw new Error(`Batch 641-660 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 641-660 curriculum map ---");
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

  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 641-660 curriculum map applied.");
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
