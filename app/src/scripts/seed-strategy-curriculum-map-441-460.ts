import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_441_460_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_441_460_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(441, "9.11", "What keeps Flash Loan Arbitrage realistic?", "Borrow leg, DEX route, pool depth, gas, MEV risk, repay condition, slippage, and spread percentage.", ["Price gap only.", "No repay check.", "No gas or MEV review."], "Flash-loan examples need atomic route and friction checks before the gap is useful."),
  seed(442, "5.6", "What controls ATR-Based Stop Placement?", "ATR value, structure anchor, pip invalidation distance, spread allowance, session volatility, and too-tight placement trap.", ["ATR value only.", "No structure anchor.", "No pip-distance review."], "ATR placement combines volatility, structure, and Forex friction."),
  seed(443, "6.12", "What separates the swing COT speculator short extreme?", "Weekly COT lag, short percentile across reports, broader Gold structure, delayed reversal risk, broad invalidation, and wider point/dollar distance.", ["One COT print only.", "No Gold structure.", "Currency-pair distance wording."], "The swing version needs persistent crowding and broader Gold context."),
  seed(444, "5.13", "What should Volatility Scaling Portfolio Allocation compare?", "Pair basket weights, realized volatility, equal risk contribution, correlation check, rebalance threshold, spread, sessions, and pip distance.", ["Equal money weights only.", "No correlation review.", "No rebalance threshold."], "Volatility-scaled allocation changes weights when pair risk and correlation change."),
  seed(445, "6.12", "What supports COT Commercial Hedger Accumulation?", "Weekly COT lag, commercial net position trend, Gold structure response, accumulation confirmation, false-crowding trap, and point/dollar distance.", ["Commercial position only.", "No report lag.", "No Gold response."], "Commercial accumulation is delayed context and needs Gold structure."),
  seed(446, "8.13", "What keeps Governance Token Short on Dilutive Emissions grounded?", "Proposal terms, emission schedule, token unlock pressure, liquidity depth, borrow/funding feasibility, slippage, and spread percentage.", ["Emission headline only.", "No vote timing.", "No borrow or depth review."], "Dilution risk still needs governance timing and market feasibility."),
  seed(447, "5.10", "What defines Drawdown Control?", "Equity curve, daily/weekly drawdown threshold, halt condition, risk reduction, revenge-trading trap, sessions, spread, and pip distance.", ["Loss streak feeling only.", "No halt threshold.", "No reduction rule."], "Drawdown control works as a pre-written circuit breaker."),
  seed(448, "6.12", "What separates COT Commercial Hedger Accumulation (Swing)?", "Commercial accumulation across reports, broader Gold structure, delayed confirmation, macro conflict, broad invalidation, and wider point/dollar distance.", ["One report change.", "No broad Gold structure.", "Currency-pair distance wording."], "The swing version needs report-to-report persistence."),
  seed(449, "8.13", "What should DAO Treasury Diversification Trade check?", "Treasury wallet flow, asset mix change, proposal/execution timing, market depth, sale pressure, slippage, and spread percentage.", ["Proposal headline only.", "No wallet flow.", "No market depth."], "DAO treasury changes need verified flow and liquidity context."),
  seed(450, "5.13", "What keeps Hedging with Correlated Currency Pairs realistic?", "Primary pair exposure, hedge pair correlation, hedge ratio, net exposure, correlation-break trap, spread, sessions, and pip distance.", ["Related pair name only.", "No hedge ratio.", "No correlation-break review."], "A correlated hedge can fail when the relationship changes."),
  seed(451, "9.10", "What should Rule-Based Moving Average Bot include?", "Fast/slow average rule, completed cross, bot state, parameter drift, liquidity depth, slippage, and spread percentage.", ["Bot name only.", "No completed cross.", "No execution-cost review."], "Automation needs rule clarity and execution-quality checks."),
  seed(452, "6.12", "What should COT Divergence Audit include?", "Commercial/speculator divergence, weekly report lag, Gold structure response, confirmation area, false-divergence trap, and point/dollar distance.", ["Divergence name only.", "No report lag.", "No Gold structure."], "COT divergence is delayed context and needs Gold response."),
  seed(453, "9.14", "What controls Direct Hedging?", "Original exposure, offsetting hedge leg, net exposure, carry/spread cost, broker rule constraint, sessions, and pip distance.", ["Opposite position only.", "No net exposure.", "No carry or rule review."], "Direct hedging changes exposure but keeps costs and constraints visible."),
  seed(454, "9.10", "What should Indicator Stack Bot audit?", "Indicator inputs, rule order, disagreement matrix, overfit trap, execution latency, liquidity depth, slippage, and spread percentage.", ["Many indicators only.", "No rule order.", "No disagreement case."], "Stacking indicators needs conflict handling and execution review."),
  seed(455, "6.12", "What separates COT Divergence Audit (Swing)?", "Divergence across reports, weekly lag, broader Gold structure, delayed confirmation, broad invalidation, and wider point/dollar distance.", ["One divergence print.", "No broad Gold structure.", "Currency-pair distance wording."], "The swing version needs persistence and broader Gold structure."),
  seed(456, "9.14", "What should Options Hedging include?", "Spot exposure, option structure, strike, expiry, premium, implied volatility, hedge coverage, spread, sessions, and pip distance.", ["Option name only.", "No premium or IV.", "No hedge coverage."], "Options hedging needs terms, cost, and coverage checks."),
  seed(457, "9.12", "What keeps Scalping Bot realistic?", "Spread-capture rule, order-book depth, fee tier, latency, fill quality, overtrading trap, slippage, and spread percentage.", ["Fast entries only.", "No fee tier.", "No fill-quality review."], "Scalping bots depend on execution quality, not activity count."),
  seed(458, "6.12", "What supports ETF Inflow Momentum (Long)?", "ETF flow change, Gold response window, dollar/real-yield conflict, flow-chasing trap, and point/dollar distance.", ["ETF headline only.", "No Gold response.", "Currency-pair distance wording."], "Gold ETF inflows need timing, macro conflict, and visible Gold response."),
  seed(459, "9.14", "What controls Forward Contract Hedging?", "Spot exposure, forward rate, tenor, hedge amount, forward points/carry, settlement mismatch trap, spread, sessions, and pip distance.", ["Forward rate only.", "No tenor match.", "No residual exposure review."], "Forward hedges must match amount, timing, and exposure."),
  seed(460, "6.12", "What separates ETF Inflow Momentum (Long) (Swing)?", "ETF flow trend, delayed Gold response, dollar/real-yield conflict, broad invalidation, flow-chasing trap, and wider point/dollar distance.", ["One flow print.", "No delayed response.", "Currency-pair distance wording."], "The swing version needs flow persistence and broader Gold response."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_441_460_TARGETS.length) throw new Error("Batch 441-460 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_441_460_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 441-460 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 441-460 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 441 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 441-460 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
