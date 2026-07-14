import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_501_520_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_501_520_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(501, "9.14", "What should Technical + Options Skew Confirmation compare?", "Technical level, options skew, implied-volatility context, premium drag, liquidity depth, slippage, and spread percentage.", ["Options skew alone.", "No price structure.", "No depth review."], "Crypto skew needs technical context and venue-quality checks."),
  seed(502, "6.12", "What separates Options Skew (Buy Calls) (Swing)?", "Swing Gold call skew, upside hedge demand, comparable call/put implied volatility, broad Gold structure, premium-drag trap, and wider point/dollar distance.", ["One call-skew print.", "No broad Gold structure.", "Currency-pair distance wording."], "Swing call-skew context needs broader Gold structure and cost awareness."),
  seed(503, "5.13", "What controls Relative Strength Rotation?", "Currency basket, relative-strength ranking, rotation window, correlation overlap, rebalance review, sessions, spread, and pip distance.", ["Strongest pair only.", "No basket comparison.", "No correlation check."], "Forex rotation compares currencies, not one pair in isolation."),
  seed(504, "9.14", "What should Basis Arbitrage review?", "Gold spot reference, futures reference, basis spread, financing/carry cost, expiry, convergence or widening trap, and point/dollar distance.", ["Price gap only.", "No carry cost.", "Currency-pair distance wording."], "Gold basis reads need spot/futures context, cost, and expiry."),
  seed(505, "2.9", "What makes Volatility Breakout System (Turtle-Type) channel-based?", "N-period high/low channel, completed breakout close, retest behavior, failed return inside, sessions, spread, and pip distance.", ["Any fast candle.", "A wick outside the channel.", "No failed return inside."], "The Turtle-type read is channel acceptance and failure."),
  seed(506, "5.3", "What controls Fixed Fraction Position Sizing?", "Risk percentage, invalidation distance, simulation size, exposure cap, liquidity depth, slippage, and spread percentage.", ["Same size everywhere.", "No invalidation distance.", "No venue-depth check."], "Crypto fixed-fraction sizing starts from risk and venue quality."),
  seed(507, "5.1", "What controls Kelly Criterion Position Sizing?", "Win-rate estimate, payoff estimate, fractional Kelly cap, sample-size warning, liquidity depth, slippage, and spread percentage.", ["Full Kelly always.", "No sample-size check.", "No depth review."], "Kelly sizing is estimate-sensitive and needs restraint."),
  seed(508, "2.3", "What defines Dynamic Support & Resistance via Pivot Points?", "Central pivot, support/resistance ladder, prior reaction points, current price response, failed pivot respect, sessions, spread, and pip distance.", ["Pivot number only.", "No price response.", "No failure case."], "Pivot levels need reaction and failure evidence."),
  seed(509, "9.14", "What separates Basis Arbitrage (Swing)?", "Multi-session Gold spot/futures basis, carry cost, expiry window, broader Gold structure, convergence or widening trap, and wider point/dollar distance.", ["One basis print.", "No expiry window.", "Currency-pair distance wording."], "Swing basis arbitrage studies persistence and wider Gold context."),
  seed(510, "5.2", "What controls Volatility Adjusted Position Sizing?", "Current volatility, invalidation distance, size cutback, risk budget, liquidity depth, slippage, and spread percentage.", ["Same size in every regime.", "No volatility review.", "No depth review."], "Crypto size must adjust when volatility and depth change."),
  seed(511, "2.3", "What supports Fibonacci Retracement Strategy?", "One completed Forex swing, fixed anchors, 38.2/50/61.8 band, independent structure, anchor-change trap, sessions, spread, and pip distance.", ["Move anchors after reaction.", "A ratio alone.", "No failure boundary."], "Fibonacci is reference geometry and needs stable anchors."),
  seed(512, "9.14", "What should Calendar Spread (Long Near, Short Far) compare?", "Long near leg, short far leg, same structure, implied-volatility term structure, premium ledger, expiry mismatch, and point/dollar distance.", ["Two expiries only.", "No premium ledger.", "Currency-pair distance wording."], "Gold calendar spreads need time, cost, and term-structure context."),
  seed(513, "2.9", "What should Pivot Point Breakout show?", "Central pivot, nearby support/resistance, breakout close, retest, failed break back through pivot, sessions, spread, and pip distance.", ["Random candle away from pivot.", "No retest.", "No failed-break case."], "Pivot breakout needs level context and acceptance."),
  seed(514, "9.14", "What separates Calendar Spread (Long Near, Short Far) (Swing)?", "Swing near/far expiries, premium ledger, term-structure context, broader Gold structure, expiry mismatch, and wider point/dollar distance.", ["One expiry comparison.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs broader Gold context and expiry timing."),
  seed(515, "5.6", "What should support invalidation placement include?", "Support shelf, wick-sweep area, protective invalidation beyond failed support, liquidity depth, slippage, and spread percentage.", ["Line inside normal wick noise.", "No support history.", "No depth review."], "Crypto support invalidation belongs beyond the failed-support area."),
  seed(516, "5.8", "What controls Trailing Stop Strategy?", "Trailing reference, volatility buffer, update rule, premature-tightening trap, liquidity depth, slippage, and spread percentage.", ["Move the trail by feeling.", "No buffer.", "No update rule."], "Crypto trailing invalidation needs a repeatable update rule and buffer."),
  seed(517, "2.4", "What should Moving Average Envelope Strategy show?", "Moving-average midline, upper/lower envelope bands, trend or range context, band reaction, failed envelope respect, sessions, spread, and pip distance.", ["One midline only.", "No envelope bands.", "No failure case."], "The envelope needs both bands and price behavior around them."),
  seed(518, "9.14", "What should Calendar Spread (Short Near, Long Far) compare?", "Short near leg, long far leg, same structure, implied-volatility term structure, premium ledger, expiry mismatch, and point/dollar distance.", ["Two expiries only.", "No premium ledger.", "Currency-pair distance wording."], "This version flips the time exposure and needs its own expiry-risk read."),
  seed(519, "9.14", "What separates Calendar Spread (Short Near, Long Far) (Swing)?", "Swing short-near/long-far structure, premium ledger, term-structure context, broader Gold structure, expiry mismatch, and wider point/dollar distance.", ["One expiry comparison.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs broader Gold context and expiry timing."),
  seed(520, "5.14", "What controls Risk-Reward Ratio Targeting?", "Invalidation distance, educational reference zone, reward-to-risk band, structural room check, liquidity depth, slippage, and spread percentage.", ["Reference zone before invalidation.", "No structural room.", "No venue-depth check."], "Crypto reward-to-risk planning starts with invalidation and realistic room."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_501_520_TARGETS.length) throw new Error("Batch 501-520 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_501_520_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 501-520 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 501-520 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 501 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 501-520 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
