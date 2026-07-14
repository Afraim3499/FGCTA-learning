import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_461_480_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_461_480_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(461, "9.11", "What keeps Arbitrage Bot (CEX + DEX) realistic?", "CEX quote, DEX pool price, inventory, route depth, gas, fees, latency, slippage, and spread percentage.", ["Price gap only.", "No inventory check.", "No fees or depth review."], "CEX/DEX bot lessons need synchronized prices and net execution checks."),
  seed(462, "9.12", "What should Machine-Learning-Enhanced Execution review?", "Model features, confidence band, order slice, venue depth, fill quality, latency, slippage, and spread percentage.", ["Model score only.", "No fill-quality review.", "No liquidity check."], "Execution models are judged by current liquidity and fills, not by model output alone."),
  seed(463, "6.12", "What supports ETF Outflow Indicator (Short)?", "ETF outflow timestamp, Gold response window, dollar/real-yield conflict, short-side crowding trap, and point/dollar distance.", ["Outflow headline only.", "No Gold response.", "Currency-pair distance wording."], "Gold ETF outflows need timing, macro conflict, and visible Gold response."),
  seed(464, "5.13", "What controls Cross-Hedging with Correlated Asset?", "Currency exposure, correlated asset driver, hedge ratio, basis risk, correlation-break trap, spread, sessions, and pip distance.", ["Asset name only.", "No hedge ratio.", "No basis-risk review."], "Cross-hedges can fail when the relationship or basis changes."),
  seed(465, "6.12", "What separates ETF Outflow Indicator (Short) (Swing)?", "Multi-report ETF outflow trend, delayed Gold response, dollar/real-yield conflict, broad invalidation, and wider point/dollar distance.", ["One outflow print.", "No delayed response.", "Currency-pair distance wording."], "The swing version needs persistent flow and broader Gold context."),
  seed(466, "9.13", "What should Rebalancing Algorithm (Periodic) compare?", "Target weights, rebalance calendar, drift band, transaction costs, liquidity depth, slippage, and spread percentage.", ["Calendar date only.", "No drift band.", "No cost review."], "Periodic rebalancing needs drift and cost checks before adjustment."),
  seed(467, "5.13", "What keeps Portfolio Diversification Across Currency Pairs honest?", "Pair basket, repeated currency exposure, correlation matrix, weight caps, rebalance review, spread, sessions, and pip distance.", ["Many pairs only.", "No repeated-currency check.", "No correlation matrix."], "A Forex basket can hide repeated exposure unless weights and correlations are visible."),
  seed(468, "9.9", "What controls Dynamic Leverage Adjustment?", "Volatility state, equity curve state, max leverage cap, drawdown gate, pip invalidation distance, spread, and sessions.", ["Confidence alone.", "No leverage cap.", "No drawdown gate."], "Dynamic leverage responds to risk state and invalidation distance."),
  seed(469, "9.10", "What should Momentum + Mean Reversion Hybrid Bot audit?", "Regime switch, momentum module, mean-reversion module, conflict state, overfit trap, liquidity depth, slippage, and spread percentage.", ["Two modules only.", "No regime switch.", "No conflict state."], "A hybrid bot needs a clear rule for which module leads."),
  seed(470, "8.3", "What supports Retail Sentiment Contrarian Short?", "Crowded-long sentiment, source sample limits, Gold structure response, persistence trap, and point/dollar distance.", ["Crowded reading only.", "No source limit.", "No Gold structure."], "Contrarian short context needs sentiment plus Gold structure."),
  seed(471, "8.3", "What separates Retail Sentiment Contrarian Short (Swing)?", "Crowded-long sentiment across a broader window, source limits, broad Gold structure, delayed reversal context, and wider point/dollar distance.", ["One crowding print.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs persistence and wider Gold structure."),
  seed(472, "9.10", "What keeps AI-Assisted Discretionary Trading grounded?", "AI thesis draft, human checklist, source quality, hallucination check, liquidity depth, slippage, and spread percentage.", ["AI answer only.", "No source check.", "No execution review."], "AI is decision support and must be checked against data and market quality."),
  seed(473, "5.8", "What should Trailing Stop Strategy define?", "Initial structure, trail rule, pip distance, spread, session volatility, and premature-tightening trap.", ["Move the line by feeling.", "No pip-distance review.", "No session context."], "A trailing invalidation rule should follow structure without becoming too tight."),
  seed(474, "9.13", "What controls Risk Parity Allocation Algorithm?", "Asset weights, realized volatility, equal risk contribution, correlation check, rebalance threshold, liquidity depth, slippage, and spread percentage.", ["Equal money weights only.", "No volatility contribution.", "No correlation check."], "Risk parity balances risk contribution, not capital amount."),
  seed(475, "8.3", "What supports Retail Sentiment Contrarian Long?", "Crowded-short sentiment, source sample limits, Gold structure response, persistence trap, and point/dollar distance.", ["Crowded reading only.", "No source limit.", "No Gold structure."], "Contrarian long context needs sentiment plus Gold structure."),
  seed(476, "5.10", "What defines Equity Curve Stop?", "Equity curve, portfolio drawdown threshold, halt rule, reduced-risk restart condition, revenge-trading trap, spread, sessions, and pip distance.", ["Loss streak feeling only.", "No halt rule.", "No restart condition."], "An equity-curve stop is a written circuit breaker for portfolio risk."),
  seed(477, "8.3", "What separates Retail Sentiment Contrarian Long (Swing)?", "Crowded-short sentiment across a broader window, source limits, broad Gold structure, delayed reversal context, and wider point/dollar distance.", ["One crowding print.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs persistence and wider Gold structure."),
  seed(478, "9.13", "What should Risk Parity Currency Portfolio compare?", "Currency basket weights, realized volatility, correlation matrix, equal risk contribution, rebalance threshold, spread, sessions, and pip distance.", ["Equal pair count only.", "No volatility review.", "No currency-cluster check."], "Currency risk parity controls theme-level risk contribution."),
  seed(479, "9.10", "What should Reinforcement Learning Rebalancer audit?", "State space, reward function, policy action, backtest/live drift, overfit trap, liquidity depth, slippage, and spread percentage.", ["Policy output only.", "No reward review.", "No drift check."], "RL rebalancers need model-governance checks before trusting policy action."),
  seed(480, "5.13", "What controls Correlation Matrix Position Adjustment?", "Pair exposure table, correlation matrix, overlap score, reduction or rebalance rule, correlation-spike trap, spread, sessions, and pip distance.", ["Matrix screenshot only.", "No exposure table.", "No adjustment rule."], "Correlation adjustment reduces hidden overlap when pair relationships tighten."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_461_480_TARGETS.length) throw new Error("Batch 461-480 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_461_480_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 461-480 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 461-480 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 461 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 461-480 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
