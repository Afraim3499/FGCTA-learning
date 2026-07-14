import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_341_360_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };
function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_341_360_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(341, "3.14", "What confirms Gold trend plus volume for study?", "Trend structure, relative volume expansion, body-close quality, pullback hold, volume-spike trap, and point/dollar distance.", ["One large candle only.", "Volume without price structure.", "Currency-pair distance wording."], "Volume is useful only when it agrees with structure and close quality."),
  seed(342, "3.14", "What separates intraday Gold trend plus volume?", "5m/15m trend leg, fast relative volume expansion, body-close quality, quick pullback hold, exhaustion trap, and compact point/dollar distance.", ["A 4H swing test.", "One isolated volume burst.", "Forex distance wording."], "The intraday version needs fast acceptance and fast failure rules."),
  seed(343, "2.4", "What should a Forex moving-average crossover bot review?", "Fast/slow averages, crossover point, higher-timeframe filter, whipsaw, lag, parameter drift, spread, sessions, and pip distance.", ["Crossover only.", "No spread review.", "No manual rule audit."], "Automation still needs context, friction checks, and whipsaw control."),
  seed(344, "9.4", "What belongs in a crypto protective put hedge?", "Spot holding, long put, strike, expiry, premium paid, downside floor, upside participation, IV crush, depth, slippage, and spread percentage.", ["Spot position only.", "No premium or expiry.", "Assumed complete protection."], "A hedge has cost, expiry, and liquidity limits."),
  seed(345, "3.14", "What separates swing Gold trend plus volume?", "1H/4H trend leg, multi-candle volume participation, patient pullback hold, late-volume exhaustion trap, and wider point/dollar distance.", ["A 5m volume burst.", "One candle as broad participation.", "Forex distance wording."], "Swing confirmation needs persistent participation across broader candles."),
  seed(346, "2.9", "What makes the Forex Turtle system channel-based?", "N-period high/low channel, breakout close, channel retest, failed break back inside, spread, sessions, and pip distance.", ["Any moving-average cross.", "A wick through the channel.", "No failure back inside."], "Turtle logic is built from channel breakout acceptance and failure."),
  seed(347, "9.4", "What is the main tradeoff in a crypto covered call?", "Spot holding plus short call, strike, expiry, premium received, upside cap, assignment review, IV change, depth, slippage, and spread percentage.", ["Premium without upside cap.", "Short call without spot.", "No assignment review."], "Covered calls exchange premium for capped upside and option risk."),
  seed(348, "6.12", "What supports a long Gold real-yield decline study?", "Falling real yields, TIPS reference, Gold reaction window, dollar context, macro divergence, and point/dollar distance.", ["Gold rally alone.", "No yield reference.", "Forex distance wording."], "The macro input and Gold response must be connected."),
  seed(349, "2.9", "What must a Forex channel breakout system show?", "Upper/lower channel boundaries, repeated touches, body-close breakout, retest acceptance, return inside channel trap, spread, sessions, and pips.", ["A channel touch only.", "No retest behavior.", "No invalidation back inside."], "A channel breakout needs accepted movement outside the channel."),
  seed(350, "9.4", "What defines a crypto butterfly spread?", "Long wings, short body strikes, same expiry, net premium, central price body, IV sensitivity, depth, slippage, and spread percentage.", ["One option leg.", "Different expiries.", "No strike liquidity check."], "The butterfly is a multi-leg structure around a central price area."),
  seed(351, "2.2", "What keeps Forex Bollinger algorithmic mean reversion honest?", "Bollinger Bands, range context, stretch, close back inside, middle-band mean path, failed continuation trap, spread, sessions, and pips.", ["Outer-band touch only.", "Breakout framing.", "No failed continuation check."], "Mean reversion requires range context and a close back inside."),
  seed(352, "9.4", "What belongs in a crypto iron condor review?", "Short call spread, short put spread, wings, premium received, range body, margin, gap risk, depth, slippage, and spread percentage.", ["Premium only.", "No wings or margin.", "No breakout risk."], "The condor is a range structure with defined but real risk."),
  seed(353, "6.12", "What separates swing long Gold real-yield decline?", "1H/4H or daily Gold, falling real-yield trend, delayed response area, broad invalidation, and wider point/dollar distance.", ["One short bounce.", "No TIPS path.", "Forex distance wording."], "Swing macro reads need broader timing and invalidation."),
  seed(354, "6.12", "What supports a short Gold real-yield rise study?", "Rising real yields, TIPS reference, Gold pressure window, dollar/safe-haven conflict check, macro divergence, and point/dollar distance.", ["Gold drop alone.", "No yield reference.", "Forex distance wording."], "Rising real yields may pressure Gold, but macro conflicts must be checked."),
  seed(355, "9.4", "What does crypto gamma tilt study?", "Net gamma by strike, spot distance from strike clusters, hedge pressure, IV change, liquidity depth, slippage, and spread percentage.", ["Gamma as direct spot direction.", "No strike map.", "No liquidity review."], "Gamma tilt is options exposure context, not a direct forecast."),
  seed(356, "5.13", "What does a Forex stat-arb pairs algorithm require?", "Pair selection, spread/z-score, rolling correlation, cointegration check, reversion path, correlation break, spread, sessions, and pip distance.", ["Two pairs that look similar once.", "No correlation review.", "No spread baseline."], "Pairs algorithms need a measurable relationship and failure rule."),
  seed(357, "9.10", "What makes genetic parameter optimisation risky?", "Parameter population, fitness metric, train/test split, walk-forward review, overfitting trap, regime shift, spread, sessions, and pips.", ["Highest backtest score only.", "No out-of-sample check.", "No execution-cost review."], "Optimization can fit the past and fail after costs or regime changes."),
  seed(358, "9.4", "What must a crypto liquidation cascade trigger include?", "Leverage build-up, estimated liquidation bands, price approach, forced displacement, open-interest change, venue depth, slippage, and spread percentage.", ["Heatmap only.", "No OI change.", "No depth or slippage review."], "Cascade risk needs leverage, forced flow, and venue stress context."),
  seed(359, "6.12", "What separates swing short Gold real-yield rise?", "1H/4H or daily Gold, rising real-yield trend, delayed pressure area, broad invalidation, and wider point/dollar distance.", ["One short drop.", "No TIPS path.", "Forex distance wording."], "Swing macro pressure needs broader evidence and failure rules."),
  seed(360, "9.11", "What keeps crypto cross-exchange arbitrage realistic?", "Exchange A/B prices, depth, fees, transfer time, withdrawal limits, inventory on both venues, latency, slippage, stale quote trap, and spread percentage.", ["Visible price gap only.", "No inventory or transfer check.", "Assumed instant execution."], "Venue gaps often vanish after real execution constraints."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_341_360_TARGETS.length) throw new Error("Batch 341-360 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_341_360_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 341-360 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 341-360 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 341 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 341-360 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
