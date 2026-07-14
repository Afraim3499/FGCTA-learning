import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_361_380_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };
function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_361_380_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(361, "9.10", "What keeps Forex neural-network prediction realistic?", "Feature inputs, training window, prediction band, error band, validation split, regime shift, spread, sessions, and pip distance.", ["One predicted line only.", "No validation split.", "No current spread review."], "The neural-network lesson is a model audit: output, error, and current Forex conditions must be reviewed together."),
  seed(362, "6.12", "What supports a Gold Fed dovish pivot study?", "Fed pivot context, real-yield decline, dollar response, Gold reaction window, macro divergence, and point/dollar distance.", ["A softer headline only.", "No real-yield reference.", "Currency-pair distance wording."], "A dovish pivot needs macro agreement and a visible Gold response."),
  seed(363, "9.10", "What should a Forex random-forest direction classifier show?", "Feature set, tree-vote probability, class label, confusion review, feature drift, spread, sessions, and pip distance.", ["Majority vote only.", "No error review.", "No feature drift check."], "Random forests teach vote quality and feature stability, not blind acceptance of a class label."),
  seed(364, "9.11", "What keeps crypto spatial arbitrage realistic?", "Venue A/B/C prices, depth, fees, inventory, transfer limits, latency, slippage, and spread percentage.", ["Visible venue gap only.", "No inventory review.", "No transfer-limit check."], "Spatial gaps often disappear when executable size and venue friction are included."),
  seed(365, "6.12", "What separates swing Gold Fed dovish pivot study?", "Broader Fed repricing window, real-yield decline trend, dollar response, delayed Gold acceptance, broad invalidation, and wider point/dollar distance.", ["One fast candle.", "No dollar check.", "Currency-pair distance wording."], "The swing version needs persistent macro repricing and broader Gold behavior."),
  seed(366, "9.10", "What makes a Forex SVM trend classifier auditable?", "Scaled features, support vectors, separating boundary, margin, class-flip area, validation split, spread, sessions, and pip distance.", ["Class label only.", "No margin review.", "Unscaled inputs."], "SVM lessons focus on boundary quality and the weak area near the margin."),
  seed(367, "9.11", "What must crypto triangular arbitrage include?", "Three crypto pair quotes, implied cross, actual cross, leg sequence, fees, latency, depth, slippage, and spread percentage.", ["Mid-price triangle only.", "No leg sequence.", "No depth review."], "A triangle is useful only when all three bid/ask legs can be studied with costs and depth."),
  seed(368, "6.12", "What supports a Gold Fed hawkish pivot study?", "Fed hawkish pivot, real-yield rise, dollar response, Gold pressure window, safe-haven conflict, and point/dollar distance.", ["One hawkish phrase only.", "No safe-haven check.", "Currency-pair distance wording."], "Hawkish Gold pressure needs macro agreement and a clear conflict check."),
  seed(369, "6.12", "What separates swing Gold Fed hawkish pivot study?", "Broader hawkish repricing window, real-yield rise trend, dollar response, delayed Gold pressure, broad invalidation, and wider point/dollar distance.", ["One short drop.", "No real-yield trend.", "Currency-pair distance wording."], "The swing version studies persistent repricing rather than an immediate reaction."),
  seed(370, "9.11", "What keeps cross-exchange crypto market making realistic?", "Venue A/B quote ladders, inventory on both venues, hedge leg quality, queue depth, latency, transfer limits, slippage, and spread percentage.", ["Visible spread only.", "No inventory on both venues.", "No withdrawal-limit review."], "Cross-venue making depends on inventory, hedge quality, and venue constraints."),
  seed(371, "9.10", "What should a Forex reinforcement-learning agent review?", "State inputs, action map, reward design, training environment, policy output, distribution mismatch, spread, sessions, and pip distance.", ["Policy output only.", "No reward review.", "No live-condition comparison."], "The policy is only educational when the state, reward, and current Forex conditions are visible."),
  seed(372, "6.12", "What belongs in a Gold inflation hedge study?", "Inflation surprise, real-yield conflict, dollar context, Gold hedge reaction, macro divergence, and point/dollar distance.", ["Inflation number only.", "No dollar context.", "Currency-pair distance wording."], "Inflation alone is incomplete; the lesson checks real yields, the dollar, and Gold behavior."),
  seed(373, "9.10", "What keeps a Forex Kalman trend estimate readable?", "Observed price, estimated state, filter gain, residual band, lag review, regime shift, spread, sessions, and pip distance.", ["Smoothed line only.", "No residual band.", "No lag review."], "Kalman teaching separates raw price, estimated state, and filter error."),
  seed(374, "9.11", "What matters most in crypto latency market making?", "Quote age, queue position, cancel/replace delay, inventory skew, toxic flow, depth, slippage, and spread percentage.", ["Spread display only.", "No quote-age review.", "No cancel-delay check."], "Latency lessons show when the quote becomes stale and vulnerable."),
  seed(375, "9.10", "What should a Forex HMM regime-switching lesson show?", "Hidden state labels, observed return/volatility inputs, transition probabilities, state confidence, regime-flip trap, spread, sessions, and pip distance.", ["One regime label only.", "No probability map.", "No low-confidence review."], "HMM regimes are inferred, so confidence and transition risk must be visible."),
  seed(376, "5.13", "What keeps a crypto statistical-arbitrage basket grounded?", "Basket construction, z-score spread, rolling correlation, cointegration check, rebalance drift, depth, slippage, and spread percentage.", ["Two tokens that look similar.", "No basket weights.", "No rebalance drift."], "Basket lessons need measurable relationships plus execution and rebalance checks."),
  seed(377, "6.12", "What separates swing Gold inflation hedge study?", "Persistent inflation context, real-yield conflict, dollar context, delayed Gold hedge behavior, broad invalidation, and wider point/dollar distance.", ["One inflation headline.", "No persistence review.", "Currency-pair distance wording."], "The swing version needs persistent macro context and a broader Gold response."),
  seed(378, "9.12", "What keeps Forex high-frequency market making auditable?", "Bid/ask quote ladder, queue priority, latency, inventory skew, adverse selection, active sessions, spread, and pip distance.", ["Quoted spread only.", "No queue review.", "No inventory skew."], "HFT market making is a process audit of queue, latency, inventory, and Forex friction."),
  seed(379, "6.12", "What supports a USD-weakness long Gold study?", "DXY or dollar basket context, real-yield cross-check, Gold reaction window, macro divergence, safe-haven conflict, and point/dollar distance.", ["Dollar weakness only.", "No real-yield check.", "Currency-pair distance wording."], "Gold must respond in context; dollar weakness alone is not enough."),
  seed(380, "5.13", "What keeps crypto cointegration basket trading realistic?", "Basket legs, hedge weights, stationarity check, spread z-score, convergence path, depth, slippage, and spread percentage.", ["Correlation glance only.", "No stationarity check.", "No hedge weights."], "Cointegration lessons require a stable relationship, weights, and cost-aware convergence review."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_361_380_TARGETS.length) throw new Error("Batch 361-380 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_361_380_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 361-380 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 361-380 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 361 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 361-380 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
