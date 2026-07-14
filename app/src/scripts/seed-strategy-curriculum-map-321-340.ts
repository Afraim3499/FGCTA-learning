import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_321_340_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };
function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_321_340_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(321, "2.9", "What makes a Gold Keltner channel break valid for study?", "Keltner midline, ATR channel, completed close outside, retest acceptance, failed return inside, and point/dollar distance.", ["A wick outside the band.", "A moving average touch only.", "Currency-pair distance wording."], "The close and retest separate accepted expansion from a failed channel break."),
  seed(322, "9.11", "What belongs in a crypto calendar spread roll audit?", "Near/far futures, expiries, roll yield, basis curve, fees, margin, collateral limits, venue depth, slippage, and spread percentage.", ["Only the visible price gap.", "No expiry or roll timing.", "Assumed smooth convergence."], "Calendar spreads need term structure, roll timing, and execution costs."),
  seed(323, "5.13", "What keeps a Forex relative-value basket honest?", "Currency strength inputs, weights, long/short legs, correlation overlap, rebalance rule, sessions, spread, and pip distance.", ["Many pairs with repeated exposure.", "One strong pair only.", "No rebalance or correlation check."], "A basket must control concentration and correlation."),
  seed(324, "9.11", "What must perpetual funding arbitrage include?", "Matched spot/perp legs, funding interval, basis, fees, borrow, collateral, liquidation buffer, depth, slippage, and spread percentage.", ["Funding rate only.", "No margin buffer.", "Assumed risk-free carry."], "Net funding depends on hedge quality and stress controls."),
  seed(325, "2.9", "What separates the intraday Gold Keltner channel break?", "5m/15m channel, fast close outside the ATR envelope, quick retest, wick fakeout review, fast return-inside failure, and point/dollar distance.", ["A swing-chart retest.", "A wick outside the envelope.", "Currency-pair distance wording."], "The intraday version needs fast acceptance and fast failure logic."),
  seed(326, "6.11", "What does FX forward yield-curve arbitrage compare?", "Spot, forward curve nodes, rate differential, forward points, maturity match, hedge timing, costs, sessions, spread, and pip distance.", ["Rate difference only.", "No maturity match.", "No transaction-cost review."], "Forward-curve reads can fail when maturity, cost, or constraints are ignored."),
  seed(327, "2.9", "What separates the swing Gold Keltner channel break?", "1H/4H channel, sustained close outside the ATR envelope, patient retest, broad return-inside failure, and wider point/dollar distance.", ["A 5m wick outside the band.", "Fast expiry only.", "Currency-pair distance wording."], "The swing version needs wider structure and sustained acceptance."),
  seed(328, "9.12", "How should order anticipation/front-running be taught?", "As an ethics and execution-risk audit using public footprint clues, compliance boundary, venue limits, spoofing risk, failure path, spread, sessions, and pips.", ["Instructions to trade ahead of client orders.", "Private order information.", "No compliance boundary."], "The lesson must teach boundaries and risk, not prohibited behavior."),
  seed(329, "9.4", "What makes gamma scalping hard in crypto options?", "Option position, delta hedge, gamma/theta balance, re-hedge points, fees, IV change, depth, slippage, and spread percentage.", ["Hedge every move without cost.", "Ignore theta decay.", "No liquidity review."], "Frequent hedging can be overwhelmed by cost and liquidity."),
  seed(330, "9.12", "What should VWAP/TWAP liquidity provision check?", "Participation path, time/volume pacing, bid/ask spread, fill quality, inventory, adverse selection, sessions, and pip distance.", ["Schedule only.", "No inventory review.", "No spread or fill-quality check."], "Execution quality can fail when market conditions move faster than the algorithm."),
  seed(331, "9.4", "What does a crypto volatility skew trade study?", "Comparable call/put IV, expiry, strike distance, skew curve, event premium, hedge cost, IV normalization, depth, slippage, and spread percentage.", ["Skew as direct spot direction.", "Different expiries compared.", "No liquidity review."], "Skew is options-demand context and can normalize."),
  seed(332, "2.4", "What makes Gold SuperTrend useful for study?", "SuperTrend line, close through the line, volatility band, line retest, chop warning, failed flip, and point/dollar distance.", ["Line color only.", "A wick through the line.", "Currency-pair distance wording."], "The line needs completed price behavior and chop awareness."),
  seed(333, "2.4", "What separates intraday Gold SuperTrend?", "5m/15m SuperTrend line, fast flip close, quick retest, news-wick or chop trap, and compact point/dollar distance.", ["A swing chart flip.", "Line color only.", "Currency-pair distance wording."], "Fast Gold flips need quick acceptance and quick invalidation."),
  seed(334, "9.12", "What does a Forex POV algorithm control?", "Target participation rate, live volume estimate, child-order pace, fill quality, market impact, sessions, spread, and pip distance.", ["Direction choice.", "Fixed pace regardless of volume.", "No market-impact review."], "POV is execution pacing, not directional analysis."),
  seed(335, "9.4", "What does a crypto long straddle need to overcome?", "Premium paid, breakeven band, move-needed area, theta decay, IV crush, depth, slippage, and spread percentage.", ["Direction prediction only.", "Ignore premium decay.", "No IV review."], "A large move can still disappoint if premium or IV works against the position."),
  seed(336, "9.12", "What makes Forex iceberg detection cautious?", "Repeated refill, displayed depth, traded volume, absorption, false refill, venue/proxy limits, sessions, spread, and pip distance.", ["One repeated print as certainty.", "No venue limits.", "No absorption review."], "Hidden size is inferred, not proven."),
  seed(337, "9.4", "What is the main short-straddle danger?", "Short call/put exposure, premium received, breakeven band, margin, volatility expansion, gap risk, depth, slippage, and spread percentage.", ["Premium only.", "No margin check.", "Assume range always holds."], "Short gamma risk can expand quickly."),
  seed(338, "2.4", "What separates swing Gold SuperTrend?", "1H/4H SuperTrend line, sustained flip close, wide volatility band, patient retest, late-flip trap, and wider point/dollar distance.", ["A 5m flip.", "Line color only.", "Currency-pair distance wording."], "The swing version needs broader acceptance and wider invalidation."),
  seed(339, "2.9", "What defines a Forex liquidity run reversal?", "Prior high/low pool, sweep wick, close back inside, displacement away, failed continuation, sessions, spread, and pip distance.", ["Any breakout candle.", "No close back inside.", "No displacement away."], "A liquidity run reversal must reject the break instead of accepting outside."),
  seed(340, "9.4", "What belongs in put-call parity audit?", "Call, put, spot, strike, expiry, synthetic forward, actual derivative reference, funding/borrow, fees, exercise style, depth, and spread percentage.", ["Option price gap only.", "No fee or borrow check.", "Ignore exercise style."], "Parity gaps can be non-executable after real terms."),
];

function questionIdFor(id: string): string { return `sv_${id.replace(/-/g, "")}_mcq`; }

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_321_340_TARGETS.length) throw new Error("Batch 321-340 seed cardinality mismatch.");
  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];
  BATCH_321_340_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 321-340 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 321-340 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 321 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 321-340 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
