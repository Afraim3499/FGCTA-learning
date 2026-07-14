import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_481_500_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_481_500_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(481, "6.12", "What supports Options Put/Call Ratio High (Bullish)?", "Elevated put/call ratio, put-demand context, implied-volatility review, Gold response window, crowding persistence trap, and point/dollar distance.", ["Ratio print only.", "No Gold structure response.", "Currency-pair distance wording."], "High put/call Gold context needs options crowding plus Gold response and premium context."),
  seed(482, "5.2", "What controls Volatility Targeting Strategy?", "Realized volatility, desired risk band, size adjustment, invalidation distance, liquidity depth, slippage, and spread percentage.", ["Same size in every regime.", "No volatility estimate.", "No liquidity review."], "Crypto volatility targeting adjusts classroom size to movement and venue quality."),
  seed(483, "8.13", "What should On-Chain + Technical Confluence compare?", "On-chain flow, technical structure, agreement or disagreement check, stale-chain-data trap, liquidity depth, slippage, and spread percentage.", ["On-chain print only.", "No chart structure.", "No depth review."], "Crypto confluence needs separate data streams and current execution context."),
  seed(484, "6.12", "What separates Options Put/Call Ratio High (Bullish) (Swing)?", "Multi-session elevated put demand, implied-volatility context, broader Gold structure, crowding persistence trap, and wider point/dollar distance.", ["One ratio print.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs persistence and wider Gold structure."),
  seed(485, "7.4", "What defines Speed of Market Momentum Scalping?", "Tick speed, candle expansion, active session, spread, pip distance, slippage, and exhaustion trap.", ["Fast candle only.", "No spread check.", "No session context."], "Fast Forex reads need execution context and failure zones."),
  seed(486, "8.13", "What should Funding + Social Sentiment Filter align?", "Funding pressure, social crowding source, window alignment, disagreement case, stale/social manipulation trap, liquidity depth, slippage, and spread percentage.", ["Social posts only.", "Funding only.", "No source timing."], "Funding and social data must be synchronized and checked against venue quality."),
  seed(487, "7.7", "What supports News Fade Strategy?", "Scheduled event, first impulse, spread normalization, failed continuation, fade observation area, whipsaw trap, sessions, spread, and pip distance.", ["First candle only.", "No spread normalization.", "No failed continuation."], "A news fade read waits for failed continuation after the event reaction stabilizes."),
  seed(488, "6.12", "What supports Options Put/Call Ratio Low (Bearish)?", "Low put demand, call-crowding/complacency context, implied-volatility review, Gold response window, complacency trap, and point/dollar distance.", ["Low ratio only.", "No Gold response.", "Currency-pair distance wording."], "Low put/call Gold context studies complacency with Gold structure and premium context."),
  seed(489, "6.12", "What separates Options Put/Call Ratio Low (Bearish) (Swing)?", "Multi-session low put demand, implied-volatility context, broader Gold structure, complacency persistence trap, and wider point/dollar distance.", ["One low reading.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs persistent complacency and wider Gold structure."),
  seed(490, "8.11", "What should Multi-Factor Quant Scoring include?", "Factor list, weights, scoring window, validation sample, disagreement matrix, overfit trap, liquidity depth, slippage, and spread percentage.", ["Score only.", "No weights.", "No validation sample."], "A quant score must show inputs, weighting, and whether it still fits current market conditions."),
  seed(491, "9.14", "What should Straddle the News review?", "Scheduled event, call and put legs, same expiry, strike, premium, implied volatility, move-needed band, spread, sessions, and pip distance.", ["Event name only.", "No premium review.", "No IV context."], "A news straddle lesson compares expected movement with options cost and volatility."),
  seed(492, "8.13", "What should Technical + Fundamental Confirmation compare?", "Crypto technical structure, network/fundamental context, agreement or conflict review, stale fundamental trap, liquidity depth, slippage, and spread percentage.", ["Fundamental story only.", "No chart structure.", "No venue-quality check."], "Crypto technical/fundamental confluence requires chart and fundamental evidence to align."),
  seed(493, "6.12", "What supports Options Skew (Buy Puts)?", "Gold put skew, downside hedge demand, comparable call/put implied volatility, Gold response window, premium-drag trap, and point/dollar distance.", ["Put interest only.", "No IV comparison.", "Currency-pair distance wording."], "Buy-puts skew context needs implied-volatility comparison, Gold response, and premium cost."),
  seed(494, "9.14", "What should Gamma Scalping review?", "Option position, delta hedge line, gamma/theta balance, re-hedge interval, implied-volatility change, spread, sessions, and pip distance.", ["Delta line only.", "No theta review.", "No spread or session context."], "Forex gamma scalping is an options-hedging simulation with cost and timing checks."),
  seed(495, "9.4", "What controls Funding + Basis + OI Composite?", "Funding, basis, open interest, price context, venue disagreement, liquidation/crowding trap, liquidity depth, slippage, and spread percentage.", ["Funding only.", "No basis or OI.", "No venue disagreement."], "The composite needs all derivatives inputs and crypto execution quality."),
  seed(496, "6.12", "What separates Options Skew (Buy Puts) (Swing)?", "Swing Gold put skew, downside hedge demand, comparable implied volatility, broad Gold structure, premium-drag trap, and wider point/dollar distance.", ["One skew print.", "No broad Gold structure.", "Currency-pair distance wording."], "Swing skew reads need broader Gold context and wider distance."),
  seed(497, "9.14", "What should Calendar Spread in FX Options compare?", "Near expiry, far expiry, matched strike or structure, implied-volatility term structure, premium ledger, forward-rate context, spread, sessions, and pip distance.", ["Two expiries only.", "No premium ledger.", "No forward-rate context."], "Calendar spreads compare time, implied volatility, premium, and Forex conditions together."),
  seed(498, "6.12", "What supports Options Skew (Buy Calls)?", "Gold call skew, upside hedge demand, comparable call/put implied volatility, Gold response window, premium-drag trap, and point/dollar distance.", ["Call interest only.", "No IV comparison.", "Currency-pair distance wording."], "Buy-calls skew context needs implied-volatility comparison, Gold response, and premium cost."),
  seed(499, "8.13", "What should On-Chain + Sentiment Contrarian review?", "On-chain activity, sentiment extreme, price-structure disagreement, crowding persistence trap, liquidity depth, slippage, and spread percentage.", ["Sentiment extreme only.", "No on-chain context.", "No price disagreement."], "The contrarian read needs on-chain context, sentiment extreme, and price behavior."),
  seed(500, "9.14", "What should Interest Rate Swaption Hedge define?", "Rate exposure, payer/receiver swaption structure, strike, expiry, premium, rate-shock scenario, hedge coverage, spread, sessions, and pip distance.", ["Rate view only.", "No option coverage.", "No premium or expiry."], "A swaption hedge lesson matches rate exposure with option coverage and cost."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_481_500_TARGETS.length) throw new Error("Batch 481-500 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_481_500_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 481-500 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 481-500 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 481 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 481-500 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
