import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_381_400_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_381_400_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(381, "5.13", "What keeps FX Basket Mean-Reversion Quant Strategy realistic?", "Basket legs, weights, z-score deviation, rolling correlation, rebalance drift, spread, sessions, and pip distance.", ["One strong pair only.", "No basket weights.", "No correlation review."], "The basket lesson needs stable weights, relationship quality, and Forex execution context."),
  seed(382, "6.12", "What supports USD Weakness (Long Gold) (Swing)?", "DXY trend, real-yield cross-check, delayed Gold response, safe-haven conflict, broad invalidation, and wider point/dollar distance.", ["Dollar weakness only.", "No real-yield review.", "Currency-pair distance wording."], "The swing Gold study checks macro agreement and waits for Gold behavior across a wider window."),
  seed(383, "9.12", "What keeps HFT Momentum Ignition safe as a crypto lesson?", "Rapid order bursts, thin depth, cancellation pattern, toxic flow, slippage, manipulation/fade trap, and spread percentage.", ["Fast candle only.", "No depth review.", "No cancellation check."], "The lesson is an execution-risk audit of bursts, book quality, and fade risk."),
  seed(384, "3.14", "What should Order Flow Imbalance Analysis include?", "Bid/ask depth, aggressive flow, absorption, exhaustion, imbalance persistence, spoof-risk caution, slippage, and spread percentage.", ["One order-book snapshot.", "No traded-flow review.", "No slippage check."], "Order-flow imbalance must be read through depth, trades, and later price response."),
  seed(385, "6.12", "What supports USD Strength (Short Gold)?", "DXY or dollar-basket strength, real-yield cross-check, Gold pressure window, macro divergence, and point/dollar distance.", ["Dollar strength only.", "No Gold response window.", "Currency-pair distance wording."], "Gold pressure needs dollar and yield context plus visible Gold behavior."),
  seed(386, "2.4", "What keeps Adaptive Moving Average (Kaufman AMA) Strategy readable?", "Kaufman AMA line, efficiency ratio, trend/noise state, price reaction, whipsaw trap, spread, sessions, and pip distance.", ["Moving line only.", "No noise-state review.", "No whipsaw trap."], "Kaufman AMA teaches how an adaptive average changes between trend and noisy conditions."),
  seed(387, "3.14", "What should Imbalance + Price Ladder Scalping include?", "Ladder depth, bid/ask imbalance, absorption, quick invalidation, spoofing trap, slippage, and spread percentage.", ["One large visible order.", "No invalidation rule.", "No spread review."], "The ladder lesson must show fast-changing depth, absorption, and market friction."),
  seed(388, "5.2", "What keeps Volatility Scaling of Position Sizes controlled?", "Volatility input, pip invalidation distance, scaling rule, exposure cap, spread/slippage allowance, sessions, and risk budget.", ["Bigger size after movement.", "No exposure cap.", "No pip-distance measurement."], "Volatility scaling changes position size from a fixed risk budget and measurable Forex distance."),
  seed(389, "6.12", "What separates USD Strength (Short Gold) (Swing)?", "Swing DXY strength, real-yield cross-check, delayed Gold pressure, safe-haven conflict, broad invalidation, and wider point/dollar distance.", ["One quick Gold drop.", "No yield review.", "Currency-pair distance wording."], "The swing version needs persistent macro pressure and a broader Gold response window."),
  seed(390, "8.11", "What should Trend + Fundamental Confirmation compare?", "Trend structure, macro driver, calendar context, pair response, conflict matrix, spread, sessions, and pip distance.", ["Trend line only.", "No calendar context.", "No disagreement case."], "The confluence lesson teaches agreement and conflict between structure and macro evidence."),
  seed(391, "6.12", "What supports Yield Curve Inversion (Long Gold)?", "Yield-curve inversion, growth-risk context, real-yield path, Gold reaction window, macro divergence, and point/dollar distance.", ["Curve shape only.", "No real-yield path.", "Currency-pair distance wording."], "Gold needs a visible response and real-yield context, not only an inverted curve."),
  seed(392, "9.12", "What keeps VWAP Reversion Execution realistic?", "VWAP anchor, deviation band, return path, order slicing, depth, slippage, spread percentage, and failed-reclaim trap.", ["Distance from VWAP only.", "No execution plan.", "No depth review."], "VWAP reversion is useful only when the anchor, return path, and execution friction are visible."),
  seed(393, "9.11", "What matters in Liquidity Provision Incentives?", "Maker reward, fee tier, depth added, inventory exposure, adverse selection, incentive decay, slippage, and spread percentage.", ["Reward headline only.", "No inventory review.", "No fee-tier check."], "Incentives must be studied after costs, inventory risk, and changing reward terms."),
  seed(394, "8.11", "What keeps Technical + Sentiment Confluence grounded?", "Chart structure, sentiment source, window alignment, disagreement matrix, stale sentiment trap, spread, sessions, and pip distance.", ["Bullish mood only.", "No source window.", "No chart structure."], "The learner compares technical structure with a time-aligned sentiment source and conflict case."),
  seed(395, "6.12", "What separates Yield Curve Inversion (Long Gold) (Swing)?", "Swing yield-curve inversion, recession-risk context, real-yield path, delayed Gold response, broad invalidation, and wider point/dollar distance.", ["One macro headline.", "No delayed response.", "Currency-pair distance wording."], "The swing version needs persistent curve context and slower Gold confirmation."),
  seed(396, "9.13", "What keeps Cross-Asset Statistical Factor Model useful?", "Factor inputs, cross-asset exposure, beta weights, regime check, out-of-sample drift, liquidity depth, slippage, and spread percentage.", ["Backtest curve only.", "No beta weights.", "No regime review."], "Factor models need readable inputs, drift checks, and crypto liquidity context."),
  seed(397, "6.12", "What supports High Volatility Risk-Off (Long Gold)?", "Volatility spike, equity stress, yield response, Gold safe-haven window, macro conflict, and point/dollar distance.", ["Volatility spike only.", "No yield response.", "Currency-pair distance wording."], "Risk-off Gold studies need stress context, rate response, and Gold behavior together."),
  seed(398, "6.11", "What should Fundamental + COT Confluence include?", "Macro driver, COT participant category, report lag, positioning percentile, price structure, conflict matrix, sessions, spread, and pip distance.", ["COT extreme only.", "No report-lag review.", "No price structure."], "COT is delayed positioning data, so it needs macro and structure context."),
  seed(399, "6.12", "What separates High Volatility Risk-Off (Long Gold) (Swing)?", "Swing volatility regime, equity stress, yield response, delayed Gold safe-haven behavior, broad invalidation, and wider point/dollar distance.", ["One stress candle.", "No yield review.", "Currency-pair distance wording."], "The swing version waits for persistent stress and slower Gold behavior."),
  seed(400, "6.2", "What keeps Multi-Timeframe Trend Alignment clear?", "Higher-timeframe direction, lower-timeframe structure, pullback quality, conflict timeframe, spread, sessions, and pip distance.", ["One timeframe only.", "No pullback review.", "No conflict check."], "Multi-timeframe alignment teaches how larger and smaller structures agree or disagree."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_381_400_TARGETS.length) throw new Error("Batch 381-400 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_381_400_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 381-400 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 381-400 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 381 + index,
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
    console.log(`${dryRun ? "Would update" : "Updating"} module ${moduleNumber} ${module.title}: ${next.length - module.logicIds.length} new link(s)`);
    if (!dryRun) await prisma.courseModule.update({ where: { id: module.id }, data: { logicIds: next } });
  }

  for (const item of SEEDS) {
    const module = moduleByNumber.get(item.moduleNumber)!;
    const id = questionIdFor(item.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} ${id} at Level ${module.level}`);
    if (!dryRun) {
      const question = { level: module.level, type: QuestionType.MCQ, domain: item.expectedAsset.toLowerCase(), logicId: getVaultStrategyRef(item.id), prompt: item.prompt, options: item.options, correctIndex: 0, explanation: item.explanation };
      await prisma.examQuestion.upsert({ where: { id }, create: { id, ...question }, update: { ...question, matchingLeft: [], matchingRight: [], chartState: undefined, targetX: null, targetY: null, tolerance: null } });
    }
  }
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 381-400 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
