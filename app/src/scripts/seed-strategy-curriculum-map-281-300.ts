import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_281_300_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };
function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_281_300_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(281, "8.3", "What makes Forex social-media sentiment auditable?", "A fixed source basket, language and bot filters, unique-author breadth, synchronized timestamps, score change, macro context, and pair structure.", ["Raw post count from whichever platform is busiest.", "One extreme score used without source freshness.", "Changing the source basket after viewing price."], "Social mood needs clean inputs, breadth, timing, and Forex context."),
  seed(282, "8.13", "How should a large crypto exchange inflow be interpreted?", "Verify entities, remove internal transfers, compare deposit-size distribution and venue concentration, then observe later balances, price, and volume.", ["Every large deposit means immediate selling.", "One transfer represents broad holder distribution.", "Destination venue and ownership do not matter."], "Inflow purpose cannot be inferred from size alone."),
  seed(283, "8.13", "What defines exchange-netflow divergence?", "Entity-adjusted inflow minus outflow moves opposite price over one fixed window and survives venue, custody-migration, and persistence checks.", ["One transfer disagrees with one candle.", "All exchange flows have complete venue coverage.", "Divergence requires immediate reversal."], "Netflow divergence is diagnostic and vulnerable to custody and coverage errors."),
  seed(284, "2.9", "What separates intraday Gold ATR expansion?", "A 5m or 15m compression box, session-relative ATR baseline, outside body close, next-candle hold, short expiry, and compact point/dollar distance.", ["One event wick with a larger ATR value.", "A multi-session swing requiring patient acceptance.", "Currency-pair distance language."], "The intraday version requires fast structure and sustained short-window expansion."),
  seed(285, "8.3", "How should Forex price-versus-sentiment divergence be studied?", "Use one named sentiment source and synchronized window, anchor both swing paths, measure persistence, and wait for completed price resolution.", ["Mix COT and retail ratios as one series.", "Assume every disagreement reverses immediately.", "Ignore failed-divergence continuation."], "Different sentiment sources measure different groups, and divergence can persist."),
  seed(286, "8.13", "What does Token Age Consumed add to a crypto audit?", "It combines coin age with amount moved, then requires historical context, entity labels, destination, repetition, and later price-volume response.", ["Every old coin movement is selling.", "Age alone is enough without amount moved.", "Internal transfers and custody changes are irrelevant."], "Dormant-coin movement has meaning only with value, entity, and destination context."),
  seed(287, "8.3", "What leads a sentiment-confirmed Forex breakout?", "A pre-marked price boundary and accepted body-close break lead; fresh synchronized sentiment breadth supplies secondary context through the retest.", ["Old sentiment chooses breakout direction.", "Sentiment replaces the breakout close.", "A stale narrow source can rescue failed structure."], "Price structure leads while sentiment remains supporting evidence."),
  seed(288, "2.9", "What separates swing Gold ATR expansion?", "A 1H or 4H multi-session compression, higher-timeframe ATR baseline, completed broad break, sustained expansion, patient hold, and wider point/dollar distance.", ["A 5m box with immediate expiry.", "One news candle treated as sustained expansion.", "A wick outside structure without a close."], "The swing version uses broad structure and slower acceptance."),
  seed(289, "8.3", "What makes Forex sentiment-and-macro confluence credible?", "A written two-economy thesis, expectation comparison, one independent sentiment source, agreement/disagreement matrix, pair structure, and thesis invalidation.", ["Count correlated headlines as separate evidence.", "Ignore disagreement among inputs.", "Use sentiment without defining the macro thesis."], "Confluence needs independent inputs and explicit conflict handling."),
  seed(290, "2.9", "What defines the base Gold NR4/NR7 lesson?", "Rank one completed candle's full range against the previous four or seven, box its high-low without direction bias, then require an outside body close.", ["Call any small candle NR7.", "Choose direction before the boundary breaks.", "Accept the first outside wick."], "NR4/NR7 is a measured compression boundary, not a directional forecast."),
  seed(291, "8.13", "How do UTXO age stock and old-coin spend flow differ?", "Age bands describe existing supply stock; spent aged outputs describe movement and should be value-weighted and interpreted with cohort and entity context.", ["A large old-supply share means immediate selling.", "Raw output count always equals economic value.", "Existing dormant supply and movement are identical."], "Separating supply stock from spend flow prevents a major on-chain misunderstanding."),
  seed(292, "2.9", "What separates intraday Gold NR4/NR7?", "Rank a 5m or 15m candle against same-timeframe ranges, use a compact high-low box, outside close, next-candle hold, and explicit expiry.", ["Compare a 5m candle with daily ranges.", "Use a wick with no close.", "Keep the setup active after the short window expires."], "The intraday variant depends on same-timeframe ranking and fast acceptance."),
  seed(293, "3.11", "What limitation must accompany Forex DOM analysis?", "The ladder is venue-specific because spot Forex has no consolidated order book; displayed additions, pulls, absorption, spoofing, and price response must be audited.", ["One broker DOM represents all global FX liquidity.", "Displayed size must execute.", "Cancellations and feed coverage do not matter."], "DOM shows displayed liquidity from a chosen source, not the whole Forex market."),
  seed(294, "8.13", "What makes wallet-cluster analysis defensible?", "Document the clustering heuristic and confidence, filter change/service/mixer/custody behavior, then trace destinations and market context.", ["Every linked address belongs to one whale.", "A cluster label is verified ownership.", "False merges and false splits are impossible."], "Wallet clusters are entity inferences with measurable uncertainty."),
  seed(295, "3.14", "What should a Forex volume profile show?", "A fixed anchor and data source, volume at price, point of control, value area, high/low-volume nodes, migration, and acceptance or rejection.", ["Centralized spot-FX volume from every venue.", "Move the anchor until levels fit.", "Every high-volume node requires reversal."], "Volume profiles depend on the selected feed and anchored range."),
  seed(296, "2.9", "What separates swing Gold NR4/NR7?", "A completed daily range ranking, higher-timeframe context, daily outside close, patient multi-session hold, broad failure, and wider point/dollar distance.", ["A compact 5m candle with immediate expiry.", "A daily wick without a close.", "Currency-pair distance language."], "The swing version uses daily compression and slower acceptance."),
  seed(297, "8.13", "How should a stablecoin supply ratio be interpreted?", "Define numerator and denominator, separate total and exchange supply, track issuance/redemption and percentile, then require actual deployment evidence while checking depeg and double counting.", ["Every stablecoin increase creates immediate buying.", "Supply location and depeg risk are irrelevant.", "Numerator changes cannot move the ratio."], "Stablecoin supply represents potential capacity, not automatic demand."),
  seed(298, "2.3", "What makes Gold Fibonacci retracement confluence meaningful?", "Lock one completed swing, draw retracement references correctly, require independent structure and completed reaction, and keep anchor-change invalidation visible.", ["Move anchors after seeing the reaction.", "A ratio alone is sufficient evidence.", "Cluster many drawings until one level fits."], "Fibonacci is reference geometry that needs stable anchors and independent structure."),
  seed(299, "8.13", "How should miner outflow be audited?", "Verify miner labels, compare with reserves, production, revenue, and historical flow, separate exchange from custody/internal destinations, then observe repeated market response.", ["Every miner transfer is immediate selling.", "Destination does not affect interpretation.", "One outflow spike establishes a lasting trend."], "Miner treasury movements require attribution, destination, and persistence checks."),
  seed(300, "3.11", "How does a footprint chart differ from DOM?", "Footprints show executed bid/ask volume and delta at price on a chosen venue; DOM shows displayed resting liquidity that can be added or canceled.", ["They are identical views of the same orders.", "One Forex feed represents all venues.", "High traded volume has meaning without price response."], "Executed footprint volume and displayed DOM liquidity answer different questions."),
];

function questionIdFor(id: string): string { return `sv_${id.replace(/-/g, "")}_mcq`; }

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_281_300_TARGETS.length) throw new Error("Batch 281-300 seed cardinality mismatch.");
  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];
  BATCH_281_300_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 281-300 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 281-300 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 281 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 281-300 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
