import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_601_620_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_601_620_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(601, "3.11", "What should Order Flow Footprint show for Gold?", "Footprint source, bid/ask traded volume, delta, stacked imbalance, absorption, exhaustion, wick response, and Gold point/dollar distance.", ["One candle body only.", "No footprint source.", "Forex distance wording."], "Gold footprint study needs traded-volume evidence plus a completed price response."),
  seed(602, "4.4", "What should Opening Range Fade require?", "Opening range high/low, failed extension, close back inside, fade reference path, invalidation beyond the failed side, session timing, spread, and pip distance.", ["Fade the first touch.", "No opening range box.", "No session or spread review."], "The fade is based on failed range extension, not a random opening move."),
  seed(603, "6.11", "What should Overnight Carry Basket review?", "Rate differential, basket weights, swap or forward cost, overnight event risk, correlation concentration, protective invalidation boundary, sessions, spread, and pip distance.", ["Rate differential only.", "No basket concentration check.", "No protective boundary."], "Carry baskets need net cost, correlation, and event-risk review."),
  seed(604, "3.11", "What separates Order Flow Footprint (Swing)?", "Multi-session footprint source, bid/ask traded volume, delta, stacked imbalance, absorption, exhaustion, broader Gold structure, and wider point/dollar distance.", ["One short print only.", "No higher-timeframe structure.", "Forex distance wording."], "The swing version needs broader structure and patient footprint evidence."),
  seed(605, "9.9", "What should Leverage Ladder control?", "Maximum leverage cap, tier sizes, liquidation buffer, volatility cutback, funding cost, venue depth, slippage, and spread percentage.", ["Unlimited tier increases.", "No liquidation buffer.", "No venue-depth review."], "A crypto leverage ladder is a staged risk gate, not a reason to add exposure automatically."),
  seed(606, "9.14", "What should Time Decay Arbitrage in FX Options compare?", "Near/far expiry, theta decay, IV term structure, spread cost, gamma risk, event calendar, sessions, and forward-point or pip distance.", ["Theta only.", "No spread cost.", "No event calendar review."], "Time decay needs option-cost and event-risk review before the structure is useful."),
  seed(607, "9.7", "What should inverse ETP hedging check?", "Spot exposure, inverse product ratio, tracking error, issuer risk, rebalance drag, liquidity depth, slippage, and spread percentage.", ["Spot exposure only.", "No tracking error.", "No issuer or liquidity review."], "Inverse products can hedge exposure but may drift through product mechanics."),
  seed(608, "2.10", "What should Liquidity Sweep Fade require?", "Marked Gold high/low, sweep wick, close back inside, rejection body, fade reference zone, invalidation beyond the sweep, and point/dollar distance.", ["Fade every wick.", "No close back inside.", "Forex distance wording."], "A sweep fade needs completed rejection back inside the old area."),
  seed(609, "9.14", "What should FX Forward Spread Trading measure?", "Spot rate, forward points, tenor spread, rate differential, carry cost, counterparty or capital constraint, sessions, spread, and pip or forward-point distance.", ["Spot chart only.", "No tenor spread.", "No cost or constraint review."], "Forward spread lessons need synchronized spot, forward, cost, and constraint inputs."),
  seed(610, "2.10", "What separates Liquidity Sweep Fade (Swing)?", "Higher-timeframe external high/low, sweep wick, close back inside, patient fade path, broad invalidation, wider point/dollar distance, and delayed continuation trap.", ["Lower-timeframe wick only.", "No broad invalidation.", "Forex distance wording."], "The swing version needs higher-timeframe rejection and wider Gold movement review."),
  seed(611, "9.11", "What should Emergency Wallet Seed Backup Strategy audit?", "Seed storage split, recovery test, hardware wallet state, access checklist, custody failure trap, and no price-distance language.", ["Store one copy only.", "No recovery test.", "Expose secret words in notes."], "Wallet backup is an operational resilience process, not a market setup."),
  seed(612, "7.4", "What should Momentum Fuel Check verify?", "Impulse candle quality, follow-through candles, tick or volume expansion where available, failed continuation, active session, spread, and pip distance.", ["One large candle only.", "No follow-through review.", "No spread or session check."], "Momentum fuel requires behavior after the first impulse."),
  seed(613, "9.8", "What should Realized vs Implied Volatility Spread compare?", "Realized volatility window, implied volatility quote, volatility spread, event premium, mean-reversion risk, sessions, spread, and pip or vol-point distance.", ["Mismatched windows.", "No implied quote.", "No event premium review."], "The comparison only works when realized and implied inputs use compatible windows."),
  seed(614, "9.9", "What should Dynamic Hedging via Perps monitor?", "Spot exposure, perp hedge ratio, funding cost, basis drift, liquidation buffer, venue depth, slippage, and spread percentage.", ["Fixed hedge forever.", "No funding review.", "No liquidation buffer."], "Perpetual hedges require ongoing maintenance as funding, basis, and liquidity change."),
  seed(615, "2.9", "What should Stop Cluster Breakout show?", "Clustered Gold highs/lows, breakout close, retest acceptance, failed return inside, invalidation, and point/dollar distance.", ["One wick beyond the cluster.", "No retest behavior.", "Forex distance wording."], "A cluster breakout needs a completed close and acceptance after the break."),
  seed(616, "9.11", "What should Self-Custody vs Exchange Risk Management compare?", "Exchange exposure, self-custody process, withdrawal test, recovery procedure, key-loss risk, counterparty risk, depth, slippage, and spread percentage.", ["Move assets without testing.", "Exchange balance only.", "No recovery procedure."], "Custody choices solve different risks and create different failure modes."),
  seed(617, "2.9", "What separates Stop Cluster Breakout (Swing)?", "Obvious external cluster, broad breakout close, retest acceptance, failed return inside, wider point/dollar distance, and delayed trap.", ["Small poke only.", "No swing retest.", "Forex distance wording."], "The swing version needs broader clusters, wider spacing, and more patience."),
  seed(618, "9.14", "What should Insurance on CeFi Platforms review?", "Covered event, exclusion list, provider solvency, claim delay, counterparty exposure, withdrawal status, liquidity depth, slippage, and spread percentage.", ["Coverage label only.", "No exclusions.", "No claim-delay or withdrawal review."], "CeFi coverage has limits, exclusions, and timing risk."),
  seed(619, "5.13", "What should Relative Value (Gold vs Silver) compare?", "Gold/Silver ratio, historical band, divergence, mean-reversion path, correlation break, and point, dollar, or ratio distance.", ["Gold chart alone.", "No ratio band.", "Forex distance wording."], "Relative value studies the spread relationship, not Gold in isolation."),
  seed(620, "5.13", "What separates Relative Value (Gold vs Silver) (Swing)?", "Swing Gold/Silver ratio, broad historical band, broad divergence, event risk, mean-reversion path, correlation break, and wider point, dollar, or ratio distance.", ["Compact intraday band.", "No event-risk review.", "Forex distance wording."], "The swing version needs broader bands, larger distance, and more time context."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_601_620_TARGETS.length) throw new Error("Batch 601-620 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({ where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } }, select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  BATCH_601_620_TARGETS.forEach((target, index) => {
    const strategy = strategyById.get(target.id);
    const item = SEEDS[index];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!item || item.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
    if (strategy && (!strategy.learningProfile || !strategy.visualModel)) problems.push(`Strategy not ready at ${target.ordinal}: ${strategy.name}`);
  });
  for (const item of SEEDS) if (!moduleByNumber.has(item.moduleNumber)) problems.push(`Missing module ${item.moduleNumber} for ${item.expectedName}`);
  if (problems.length) throw new Error(`Batch 601-620 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 601-620 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 601 + index,
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
    console.log(`${dryRun ? "Would update" : "Updating"} module ${moduleNumber} ${module.title}: ${next.length - (module.logicIds || []).length} new link(s)`);
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 601-620 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
