import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_301_320_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };
function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_301_320_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(301, "8.13", "What must a miner-hashrate audit include?", "Hashrate, difficulty, hashprice, miner revenue, reserves or flow context, and later price-volume response.", ["Hashrate direction alone.", "Only exchange inflow after the move.", "A fixed mining threshold without revenue context."], "Hashrate needs mining economics and market response before interpretation."),
  seed(302, "3.1", "What makes a Forex supply/demand zone defensible?", "A visible displacement origin, fresh zone boundaries, mitigation return, reaction quality, and invalidation beyond the zone.", ["Any fast candle after price reacts.", "A zone extended through messy candles.", "An institutional label without observable displacement."], "The learner should mark evidence, not claim hidden intent."),
  seed(303, "2.3", "What separates intraday Gold Fibonacci confluence?", "Locked short-timeframe swing anchors, 38.2/50/61.8 band, compact independent structure, completed reaction, fast failure, and point/dollar distance.", ["Redraw anchors after a wick.", "Use a higher-timeframe swing with patient confirmation.", "Measure Gold like a currency pair."], "Intraday Fibonacci needs compact structure and quick invalidation."),
  seed(304, "2.3", "What separates swing Gold Fibonacci confluence?", "Completed higher-timeframe anchors, retracement band, broader structure, patient reaction, broad invalidation, and wider point/dollar distance.", ["Use a 5m wick reaction.", "Move anchors after price responds.", "Treat a ratio alone as evidence."], "The swing version needs stable anchors and broader structure."),
  seed(305, "9.11", "What must a Forex spread-capture audit include?", "Venue/source, bid and ask quotes, spread, fees, fill probability, adverse selection, inventory skew, latency, session liquidity, and pips.", ["Quoted spread only.", "A fill assumption without sequence.", "No inventory or fast-move review."], "Spread capture can vanish once execution and inventory are included."),
  seed(306, "8.13", "How should stake and unstake flows be read?", "Separate staking deposits, unlock queue, validator exits, liquid-staking movement, destinations, waiting period, and later market response.", ["Every unstake event is immediate selling.", "Every stake event permanently removes supply.", "Destination and queue timing do not matter."], "Staking flows need destination and timing context."),
  seed(307, "6.11", "Why is a Forex peg different from an ordinary level?", "A peg depends on policy band, intervention history, reserves, forward points, credibility, boundary defense, and break or repeg cases.", ["It behaves like normal support or resistance.", "Only candle structure matters.", "Reserve and forward stress are irrelevant."], "Policy context can dominate chart-only readings."),
  seed(308, "3.1", "What keeps plain market supply/demand distinct from institutional zones?", "It uses observable impulse origin, fresh zone, return path, acceptance or rejection, and invalidation without claiming hidden institutional intent.", ["It always proves institutional activity.", "Any pause can become a zone.", "Reaction does not need a completed candle."], "Plain zone logic should avoid overclaiming the source of the move."),
  seed(309, "2.4", "What does a moving-average bounce require?", "Trend context, one chosen average, first clean pullback, candle reaction, continuation structure, close-through failure, sessions, spread, and pips.", ["Every touch of an average.", "A moving average with no trend context.", "Ignoring the close through the average."], "The average is context, not support by itself."),
  seed(310, "2.9", "What defines a horizontal S/R breakout?", "A pre-marked horizontal level from repeated touches, a body close beyond it, retest acceptance, and failed-break back-inside logic.", ["A trendline channel break.", "A wick through a level.", "A level drawn after the break."], "Horizontal breakouts need pre-marked levels and close quality."),
  seed(311, "2.3", "How should Gold round-number bounce be studied?", "Draw the number first, study approach quality, completed reaction or break-through, invalidation, and Gold point/dollar distance.", ["Assume the number must hold.", "Measure Gold like a currency pair.", "Ignore approach quality."], "Round numbers attract attention but are not evidence by themselves."),
  seed(312, "5.3", "What inputs drive fixed fractional sizing?", "Account equity, fixed risk percentage, pip invalidation distance, pip value, spread/slippage allowance, and exposure cap.", ["Confidence in the setup.", "Same lot size for every idea.", "Outcome goal before invalidation distance."], "Sizing follows risk budget and failure distance."),
  seed(313, "8.13", "What makes gas/activity data useful?", "Gas price, transaction count, active addresses, failed transactions, protocol congestion, fee spikes, price-volume response, and market quality checks.", ["High gas always means bullish demand.", "Only one fee spike.", "Ignoring failed transactions."], "High fees can represent demand, congestion, spam, or stress."),
  seed(314, "9.11", "What belongs in a spot-futures basis audit?", "Timestamped spot and futures prices, basis percentage, expiry, funding, fees, borrow, matched notionals, margin, venue depth, and convergence or widening cases.", ["Gross basis only.", "No margin or fee review.", "Assumed convergence at any cost."], "Net basis and execution quality matter more than headline spread."),
  seed(315, "9.11", "What makes triangular arbitrage hard to validate?", "Three synchronized pair quotes, implied cross versus actual cross, bid/ask costs, leg sequence, latency, stale quotes, fills, and pip distance.", ["Mid-price calculation only.", "One stale quote.", "Assume all legs fill immediately."], "Execution can remove the apparent cross-rate mismatch."),
  seed(316, "2.3", "What separates intraday Gold round-number bounce?", "Short-timeframe round number, compact approach, immediate reaction, wick fakeout, fast expiry, and compact point/dollar distance.", ["Multi-session patience.", "A number held only by old candles.", "Currency-pair distance wording."], "The intraday version has quick acceptance and quick failure."),
  seed(317, "2.3", "What separates swing Gold round-number bounce?", "Higher-timeframe number, broad approach, multi-session reaction, structural hold or failure, and wider point/dollar distance.", ["A tiny intraday wick.", "Fast expiry only.", "The number alone."], "The swing version needs broader context and patient reaction."),
  seed(318, "5.2", "What does ATR-adjusted sizing change?", "It changes position size using ATR window, invalidation distance, risk budget, pip value, spread/slippage allowance, and exposure cap.", ["It chooses direction.", "It ignores pip invalidation.", "It keeps size fixed when volatility expands."], "ATR changes size and risk distance, not directional logic."),
  seed(319, "9.11", "What belongs in covered interest arbitrage?", "Spot rate, forward rate, interest-rate differential, hedge timing, transaction costs, capital controls, counterparty risk, spread, and forward-point distance.", ["Rate difference only.", "No forward hedge cost.", "Assume covered means no risk."], "A covered hedge still has costs and constraints."),
  seed(320, "9.11", "What defines reverse basis risk?", "Inverted basis, funding, borrow, fees, matched exposure, margin, liquidation buffer, venue depth, convergence and squeeze traps, slippage, and spread percentage.", ["Assumed quick convergence.", "No margin buffer.", "Ignoring borrow and funding."], "Reverse basis can widen or squeeze before converging."),
];

function questionIdFor(id: string): string { return `sv_${id.replace(/-/g, "")}_mcq`; }

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_301_320_TARGETS.length) throw new Error("Batch 301-320 seed cardinality mismatch.");
  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];
  BATCH_301_320_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 301-320 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 301-320 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 301 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 301-320 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
