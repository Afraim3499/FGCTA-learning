import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_401_420_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_401_420_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(401, "9.11", "What keeps Liquidity Provision to Stable Pair realistic?", "Stable pool pair, pool depth, fee APR, utilization, impermanent-loss check, depeg risk, slippage, and spread percentage.", ["Stable pair name only.", "No depeg review.", "No pool-depth check."], "A stable-pair LP lesson still needs depth, fee durability, depeg risk, and market friction."),
  seed(402, "9.5", "What supports Geopolitical Risk (Long Gold)?", "Geopolitical event window, safe-haven Gold response, yield and dollar conflict, liquidity gap, broad invalidation, and point/dollar distance.", ["Headline only.", "No yield or dollar check.", "No Gold reaction window."], "Gold geopolitical stress needs event context, macro conflict checks, and visible Gold behavior."),
  seed(403, "9.13", "What separates Liquidity Provision to Volatile Pair with Impermanent Loss Hedging?", "Volatile pair, IL curve, hedge leg, rebalance schedule, fee income, hedge cost, slippage, and spread percentage.", ["Pool fee headline only.", "No hedge leg.", "No IL curve."], "The volatile-pair version must teach impermanent-loss exposure and hedge quality."),
  seed(404, "8.11", "What should Indicator + Price Action Confluence compare?", "Indicator state, price action structure, completed reaction, disagreement case, failed structure trap, spread, sessions, and pip distance.", ["Indicator line only.", "No price structure.", "No disagreement case."], "The indicator and price-action lesson checks whether two evidence types agree or conflict."),
  seed(405, "8.11", "What keeps Triangular Confluence grounded?", "Fundamental driver, technical structure, sentiment window, evidence weights, disagreement matrix, spread, sessions, and pip distance.", ["Three labels without weights.", "No disagreement matrix.", "No pair-structure review."], "The learner must judge whether the three inputs are independent and time-aligned."),
  seed(406, "9.13", "What matters in Yield Farming Rotation?", "Protocol yield, TVL trend, incentive decay, lockup or exit terms, smart-contract risk, liquidity depth, slippage, and spread percentage.", ["APR only.", "No exit terms.", "No contract-risk review."], "Yield rotation needs durability, risk, and exit quality instead of a headline rate."),
  seed(407, "9.5", "What separates Geopolitical Risk (Long Gold) (Swing)?", "Broader geopolitical stress window, delayed safe-haven Gold response, yield/dollar conflict, de-escalation trap, and wider point/dollar distance.", ["One event candle.", "No delayed response.", "No de-escalation case."], "The swing version needs broader timing and a persistent Gold response."),
  seed(408, "8.11", "What should Hybrid Carry + Price Action include?", "Rate differential, rollover cost, price action structure, structure failure, spread, sessions, and pip distance.", ["Carry only.", "No rollover cost.", "No structure failure."], "Carry is context; price action still needs to agree and define failure."),
  seed(409, "9.11", "What keeps DEX Arbitrage realistic?", "DEX A/B price, pool depth, gas cost, router path, slippage, MEV risk, and spread percentage.", ["Quoted gap only.", "No gas cost.", "No pool-depth review."], "DEX gaps must survive routing, gas, depth, MEV, and slippage checks."),
  seed(410, "6.12", "What supports Central Bank Net Buying (Long Gold)?", "Central-bank buying context, reserve-flow timing, Gold reaction window, yield/dollar conflict, flow-lag trap, and point/dollar distance.", ["Reserve headline only.", "No data-lag check.", "No Gold reaction window."], "Official buying can matter, but timing, macro conflict, and Gold behavior must be visible."),
  seed(411, "9.13", "What should Mean Reversion + Options Hedging include?", "Range mean-reversion context, options hedge structure, premium/volatility check, hedge coverage, spread, sessions, and pip distance.", ["Range line only.", "No hedge cost.", "No coverage review."], "The hedge changes the lesson through cost, coverage, and volatility."),
  seed(412, "9.11", "What keeps Perpetual DEX Funding Arbitrage realistic?", "DEX perpetual funding, hedge leg, basis, gas/fee cost, smart-contract risk, funding flip trap, slippage, and spread percentage.", ["Funding rate only.", "No hedge leg.", "No smart-contract risk."], "DEX funding needs matched exposure, costs, contract risk, and funding-flip awareness."),
  seed(413, "6.12", "What separates Central Bank Net Buying (Long Gold) (Swing)?", "Broader reserve-flow window, delayed Gold demand response, stale data trap, yield/dollar conflict, and wider point/dollar distance.", ["One reserve update.", "No delayed response.", "No stale-data review."], "The swing version studies persistent official demand rather than a short headline reaction."),
  seed(414, "6.12", "What supports Central Bank Net Selling (Short Gold)?", "Central-bank selling context, reserve-flow timing, Gold pressure window, yield/dollar conflict, flow-headline trap, and point/dollar distance.", ["Selling headline only.", "No macro conflict.", "No Gold pressure window."], "Official selling context needs timing, macro checks, and visible Gold pressure."),
  seed(415, "7.7", "What should News + Technical Event Trading include?", "News event window, technical boundary, first stable close, spread widening, slippage, whipsaw trap, and pip distance.", ["Event candle only.", "Boundary drawn after release.", "No spread review."], "The technical boundary must exist before the news window and event friction must be visible."),
  seed(416, "9.9", "What keeps Lending & Borrowing Looping Strategy controlled?", "Collateral asset, borrow leg, loop count, health factor, liquidation buffer, gas cost, slippage, and spread percentage.", ["More loops only.", "No health factor.", "No liquidation buffer."], "Looping is a leverage-risk lesson built around health factor and stress checks."),
  seed(417, "8.11", "What supports Sentiment + Risk-On/Off Regime Strategy?", "Risk-on/off proxy, sentiment source, pair response, regime flip, stale sentiment trap, spread, sessions, and pip distance.", ["Mood label only.", "No pair response.", "No stale-source review."], "The regime lesson needs a named proxy, fresh sentiment, and pair-specific behavior."),
  seed(418, "6.12", "What separates Central Bank Net Selling (Short Gold) (Swing)?", "Broader official-selling window, delayed Gold pressure, reserve-data lag, yield/dollar conflict, and wider point/dollar distance.", ["One selling headline.", "No reserve-data lag.", "No delayed Gold pressure."], "The swing version checks whether official selling pressure persists across a broader Gold window."),
  seed(419, "9.11", "What keeps Rate Arbitrage Between Lending Platforms realistic?", "Platform A/B lending rates, utilization, liquidity depth, bridge/gas cost, transfer time, rate compression trap, slippage, and spread percentage.", ["Highest rate only.", "No transfer time.", "No utilization review."], "A lending-rate gap must survive utilization, transfer, gas, liquidity, and rate-compression checks."),
  seed(420, "3.14", "What should Order Flow + Price Action Confluence include?", "Footprint/delta context, price action structure, absorption/exhaustion, structure response, flow-only trap, spread, sessions, and pip distance.", ["Delta only.", "No price structure.", "No data-source review."], "The Forex order-flow lesson needs both venue-specific flow and completed price-action response."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_401_420_TARGETS.length) throw new Error("Batch 401-420 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_401_420_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 401-420 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 401-420 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 401 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 401-420 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
