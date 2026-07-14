import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_221_240_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = {
  id: string;
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
  explanation: string,
): BatchSeed {
  const target = BATCH_221_240_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return {
    id: target.id,
    expectedName: target.name,
    expectedAsset: target.assetClass,
    moduleNumber,
    prompt,
    options: [correct, ...wrong],
    explanation,
  };
}

const SEEDS: BatchSeed[] = [
  seed(221, "7.7", "How should a Forex economic-release scenario be studied?", "Record consensus, actual value, revision, pre-release range, spread change, first stable close, and whipsaw invalidation.", ["Enter from the headline before checking expectations.", "Treat the first price spike as stable acceptance.", "Ignore spread expansion because the event direction is known."], "A release matters through its surprise, revision, and the market's stable response."),
  seed(222, "2.9", "What defines the intraday Gold Flag and Pennant lesson?", "A sharp 5m or 15m flagpole, compact contraction, outside close, immediate retest, and rapid wick return trap.", ["A broad multi-day pause with no fast retest.", "Any sideways candles without a prior impulse.", "Forex-only distance measurements instead of Gold points or dollars."], "The intraday version uses compact structure and fast acceptance behavior."),
  seed(223, "8.13", "What makes an on-chain crypto treasury review useful?", "Verified treasury wallets, asset composition, obligations, flow purpose, destination, freshness, and venue liquidity.", ["Treasury balance alone without liabilities.", "Treat every exchange transfer as immediate selling.", "Use unverified wallet labels from social posts."], "Treasury movements need verified ownership, purpose, and market context."),
  seed(224, "6.11", "What drives a Central Bank Divergence Trading study?", "A widening difference in expected policy paths that agrees with currency-pair structure and remains open to convergence.", ["The current policy rates without future expectations.", "One central-bank statement without comparing the other economy.", "A fixed response after every rate decision."], "Currencies respond to relative policy expectations and repricing."),
  seed(225, "2.9", "What separates the swing Gold Flag and Pennant lesson?", "A 1H or 4H flagpole, broad controlled pause, completed breakout close, patient retest, and sustained return-inside failure.", ["A rapid 5m pattern requiring an immediate retest.", "A loose range that erases the prior impulse.", "One wick outside the boundary."], "The swing version develops across broader structure and slower confirmation."),
  seed(226, "8.3", "How should a crypto narrative sentiment index be interpreted?", "Use a fixed filtered source basket, normalized score, source breadth, price context, and clear extreme, cooling, and stale states.", ["Count every repost and bot message equally.", "Assume high attention always supports continuation.", "Change the source basket after seeing price."], "Sentiment is useful only when its inputs, breadth, and changing state are auditable."),
  seed(227, "2.9", "What completes the base Gold Triangle Breakout lesson?", "Converging boundaries with repeated completed touches, a body close before the late apex, a retest, and return-inside invalidation.", ["Two parallel boundaries that never converge.", "A wick through the boundary at the final apex.", "One touch on each side."], "A triangle requires contraction, a timely close, and visible failure behavior."),
  seed(228, "6.9", "How should a commodity-currency relationship be tested?", "Name the export channel, synchronize return windows, measure rolling correlation and lead-lag behavior, then mark decoupling.", ["Assume correlation proves direct causation.", "Compare unsynchronized price series.", "Keep using a historical relationship after it has decoupled."], "The economic link gives context, while rolling measurement shows whether it still holds."),
  seed(229, "2.9", "What separates the intraday Gold Triangle Breakout lesson?", "Compact 5m or 15m convergence, breakout before the final apex, outside close, immediate retest, and rapid wick-back trap.", ["A broad 4H triangle with a multi-candle retest.", "A late-apex wick without an outside close.", "Currency-pair distance language."], "The intraday version depends on compact contraction and fast confirmation."),
  seed(230, "7.7", "What must a crypto regulatory-event review establish first?", "The primary document, jurisdiction, affected entities, rule scope, effective date, implementation path, and appeal uncertainty.", ["A social headline without the legal document.", "Publication date treated as immediate enforcement.", "One exchange wick treated as the full market response."], "Legal scope and implementation determine whether an event changes market conditions."),
  seed(231, "6.11", "What is the core of a Forex Terms of Trade Strategy?", "Compare export prices with import prices, identify the trade basket, test persistence, and compare the other economy in the pair.", ["Use one commodity spike without import costs.", "Study only one economy in a currency pair.", "Ignore data delay and revisions."], "Terms of trade describe how export purchasing power changes relative to import costs."),
  seed(232, "6.11", "How should an inflation differential be interpreted for Forex?", "Compare headline and core surprises, policy reaction functions, real-rate implications, pair structure, and possible convergence.", ["Choose the currency with higher inflation automatically.", "Ignore how each central bank responds.", "Use old inflation data without revisions."], "Inflation affects currencies through relative policy expectations and real-rate context."),
  seed(233, "9.4", "What must a crypto funding-rate arbitrage simulation include?", "Matched spot and perpetual notionals plus funding, basis, borrow cost, fees, slippage, rebalancing, liquidation, and venue risk.", ["Funding income alone.", "Two unmatched directional positions.", "A neutral-price assumption with no venue or liquidation stress."], "Matched exposure reduces directional movement but leaves costs and operational risks."),
  seed(234, "2.9", "What separates the swing Gold Triangle Breakout lesson?", "Completed 1H or 4H converging swings, sustained compression, higher-timeframe close, patient retest, and sustained return failure.", ["A compact 5m triangle with an immediate retest.", "An intrabar break before the candle completes.", "A late-apex wick."], "The swing version needs broader completed structure and patient acceptance."),
  seed(235, "6.13", "What supports a crypto funding-rate mean-reversion study?", "A persistent funding extreme, matching price extension and open interest, a normalization marker, and continued-extreme or squeeze invalidation.", ["One elevated funding print by itself.", "Assume an extreme must reverse immediately.", "Ignore depth, slippage, and open interest."], "Crowding can persist, so normalization evidence and failure cases matter."),
  seed(236, "2.9", "What defines the base Gold Ichimoku Cloud Breakout lesson?", "Cloud boundaries and thickness, Tenkan-Kijun agreement, a completed close beyond the cloud, patient retest, and close-back-inside invalidation.", ["A wick through any cloud edge.", "Price tangled inside repeated cloud flips.", "Forex-only distance language instead of Gold points or dollars."], "The cloud is a structured area whose breakout needs acceptance and failure rules."),
  seed(237, "6.11", "How should a Forex GDP growth differential be compared?", "Use comparable real-GDP data, actual-versus-forecast surprise, revisions, growth composition, policy implications, and pair structure.", ["Compare nominal GDP for one economy with real GDP for another.", "Use headline growth without revisions.", "Assume faster growth always strengthens a currency."], "Relative growth matters through its quality, policy effect, and current market expectations."),
  seed(238, "2.9", "What separates the intraday Gold Ichimoku Cloud Breakout lesson?", "A clean 5m or 15m cloud, line agreement, outside close, immediate retest, and sharp wick back through the cloud.", ["A broad 4H cloud with a patient multi-candle retest.", "Repeated price tangles through cloud flips.", "A boundary touch without a completed close."], "The intraday version uses a clean short chart and fast acceptance."),
  seed(239, "6.11", "What makes a Forex Balance of Payments review complete?", "Separate the current account from capital and financial flows, classify financing quality, mark reserve use and one-off flows, and compare pair structure.", ["Read only the headline balance.", "Treat short-term borrowing like stable direct investment.", "Ignore reserve changes and revisions."], "The composition and durability of external financing matter more than one total."),
  seed(240, "6.13", "What defines crypto Funding Rate Momentum?", "Measure funding slope across intervals and confirm participation with price, open interest, and spot-perpetual behavior while marking saturation.", ["Use the funding level without its rate of change.", "Treat a flattening extreme as fresh acceleration.", "Ignore funding rollover and venue depth."], "Momentum comes from changing leveraged participation, not an isolated funding value."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_221_240_TARGETS.length) throw new Error("Batch 221-240 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, parentFamily: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_221_240_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 221-240 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 221-240 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 221 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 221-240 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
