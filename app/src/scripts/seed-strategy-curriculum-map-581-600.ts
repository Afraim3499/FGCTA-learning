import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_581_600_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_581_600_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(581, "9.14", "What separates Butterfly Spread (Swing)?", "Lower wing, body strikes, upper wing, same expiry, net debit, IV, swing window, delayed liquidity risk, and wider Gold point/dollar distance.", ["Body strike only.", "No expiry or IV review.", "Same compact timing as the base version."], "The swing version needs broader timing, distance, and strike-liquidity review."),
  seed(582, "5.4", "What should Staged Exit Strategy plan first?", "Planned reduction tranches, remaining exposure after each step, updated invalidation, liquidity depth, slippage, and spread percentage.", ["Random reduction after a fast candle.", "No remaining-exposure review.", "No updated invalidation rule."], "The lesson is planned exposure reduction, not emotional reaction after a move."),
  seed(583, "8.11", "What should Quant Sentiment Index Overlay check?", "Sentiment inputs, weights, threshold bands, timestamp, stale-reading warning, pair structure, sessions, spread, and pip distance.", ["Index value only.", "No timestamp review.", "No price-structure comparison."], "A sentiment overlay needs transparent inputs and current Forex context."),
  seed(584, "9.14", "What defines Protective Put?", "Gold exposure, long put strike, premium, IV, expiry, protection floor, uncovered gap area, and point/dollar distance.", ["Gold exposure only.", "No option-cost review.", "No expiry check."], "A protective put changes the risk shape but still has cost, time, and gap behavior."),
  seed(585, "9.7", "What should Hedging Stablecoin Depeg Risk map?", "Issuer exposure, reserve warning, depeg threshold, hedge or rotation path, withdrawal status, liquidity depth, slippage, and spread percentage.", ["Stablecoin label only.", "No issuer split.", "No withdrawal-status review."], "Stablecoin stress needs issuer, access, and liquidity checks before any rotation is studied."),
  seed(586, "5.13", "What should Multi-Asset Correlation Trade compare?", "Selected Forex pair, proxy assets, rolling correlation, divergence window, correlation-break warning, sessions, spread, and pip distance.", ["One chart only.", "No proxy assets.", "No correlation-break case."], "Cross-asset context helps only when the relationship is measured and checked for failure."),
  seed(587, "9.14", "What separates Protective Put (Swing)?", "Swing Gold exposure, long put floor, IV term context, premium, broad expiry window, gap risk, and wider point/dollar distance.", ["Short expiry only.", "No IV term review.", "Same compact scale as the base version."], "Swing protection needs broader time and movement assumptions."),
  seed(588, "9.7", "What should Portfolio Insurance via Stable Yield review?", "Stable-yield source, platform exposure, issuer risk, lockup period, depeg warning, withdrawal limits, depth, slippage, and spread percentage.", ["Displayed yield only.", "No lockup review.", "No issuer or platform risk."], "Stable yield can reduce some stress, but it is not risk-free."),
  seed(589, "7.7", "What should News Volume Spike Scalping require?", "News timestamp, expected release, volume spike, spread expansion, fast acceptance or rejection, slippage, sessions, and pip distance.", ["First spike only.", "No spread review.", "No acceptance or rejection close."], "A news spike lesson needs timing, volume, and execution-quality checks."),
  seed(590, "9.14", "What defines Covered Call?", "Gold exposure, short call strike, premium, IV, expiry, capped upside area, assignment risk, and point/dollar distance.", ["Short call without exposure.", "No assignment review.", "No capped-upside area."], "A covered call pairs exposure with an option obligation that must be visible."),
  seed(591, "9.14", "What separates Covered Call (Swing)?", "Swing Gold exposure, short call strike, IV term context, premium, expiry window, assignment risk, event gap risk, and wider point/dollar distance.", ["Base timing only.", "No event-gap review.", "No IV term context."], "The swing version needs broader time, distance, and event-risk review."),
  seed(592, "7.7", "What should NFP Pre-Positioning define?", "Consensus, prior release, event time, pre-release range, pre-release invalidation, whipsaw risk, sessions, spread, and pip distance.", ["Headline expectation only.", "No range boundary.", "No spread or whipsaw review."], "NFP positioning needs a clear pre-release boundary and execution-risk review."),
  seed(593, "9.14", "What should Tax-Loss Harvesting include?", "Cost basis, unrealized loss, holding record, replacement exposure, fee and slippage estimate, legal or wash-sale review, and spread percentage.", ["Loss label only.", "No records.", "No qualified rule review."], "This is an educational accounting review and does not replace qualified legal or tax advice."),
  seed(594, "9.14", "What defines Collar Strategy?", "Gold exposure, long put strike, short call strike, premium offset, IV, expiry, capped upside area, assignment risk, and point/dollar distance.", ["Put floor only.", "No short-call cap.", "No assignment review."], "A collar teaches both the protection floor and the upside cap."),
  seed(595, "9.13", "What should Rebalancing Frequency Optimization compare?", "Target weights, current weights, drift bands, calendar interval, turnover cost, tax review note, liquidity depth, slippage, and spread percentage.", ["Rebalance after every move.", "No cost review.", "No drift band."], "Frequency should balance concentration risk against friction and rule checks."),
  seed(596, "9.10", "What should Structural Break Detection test?", "Baseline regime, break test, fresh sample, outlier check, model pause or adjustment rule, sessions, spread, and pip distance.", ["Old model only.", "One outlier candle.", "No pause rule."], "A structural break lesson asks whether the old relationship still works."),
  seed(597, "9.14", "What separates Collar Strategy (Swing)?", "Swing Gold exposure, long put floor, short call cap, premium offset, IV term context, broad expiry, event gap risk, and wider point/dollar distance.", ["Tight base collar only.", "No broad expiry review.", "No event-gap case."], "The swing collar needs wider spacing and more time context than the base collar."),
  seed(598, "4.11", "What should Overnight/Weekend Gap Strategy measure?", "Prior close, reopening price, gap size, event cause, spread widening, fill path, continuation path, invalidation, sessions, and pip distance.", ["Assume every gap fills.", "No event cause.", "No spread-widening review."], "Gap lessons need both fill and continuation cases, plus the execution conditions around the reopen."),
  seed(599, "9.14", "What should Options Collar Hedging map?", "Crypto spot exposure, long put floor, short call cap, IV, expiry, venue liquidity, settlement terms, slippage, and spread percentage.", ["Spot chart only.", "No option venue review.", "No settlement terms."], "Crypto collars need option mechanics plus venue-depth and settlement checks."),
  seed(600, "9.11", "What should Diversified Custody separate?", "Exchange, custodian, self-custody, issuer, and protocol exposure, maximum bucket limits, withdrawal test, recovery checks, depth, slippage, and spread percentage.", ["Many tokens on one exchange.", "No recovery-process check.", "No bucket limits."], "Custody diversification should reduce access and counterparty concentration, not just add more holdings."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_581_600_TARGETS.length) throw new Error("Batch 581-600 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({ where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } }, select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  BATCH_581_600_TARGETS.forEach((target, index) => {
    const strategy = strategyById.get(target.id);
    const item = SEEDS[index];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!item || item.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
    if (strategy && (!strategy.learningProfile || !strategy.visualModel)) problems.push(`Strategy not ready at ${target.ordinal}: ${strategy.name}`);
  });
  for (const item of SEEDS) if (!moduleByNumber.has(item.moduleNumber)) problems.push(`Missing module ${item.moduleNumber} for ${item.expectedName}`);
  if (problems.length) throw new Error(`Batch 581-600 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 581-600 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 581 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 581-600 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
