import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_561_580_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_561_580_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(561, "9.14", "What separates Bear Put Spread (Swing)?", "Long higher put, short lower put, debit, expiry, wider Gold point/dollar distance, IV/time review, and delayed bearish-structure trap.", ["Long call only.", "No expiry review.", "Same compact distance as the base version."], "The swing version needs broader time, distance, and option-context review."),
  seed(562, "6.11", "What should Economic Surprise Index Strategy compare?", "Consensus versus actual data, surprise direction, release timestamp, currency response, stale-data trap, sessions, spread, and pip distance.", ["Actual release only.", "No timestamp review.", "No pair response check."], "Economic surprise is measured against expectations and then checked against Forex response."),
  seed(563, "9.14", "What should Risk Buffer via Insurance Protocols include?", "Coverage amount, covered events, exclusions, protocol solvency, premium drag, claim delay, smart-contract risk, depth, slippage, and spread percentage.", ["Coverage label only.", "No exclusions.", "No protocol solvency review."], "Crypto insurance adds a risk buffer only after exclusions and provider risk are visible."),
  seed(564, "8.11", "What should Political Risk Premium Trading map?", "Political event timeline, affected currency, risk-premium proxy, yield or spread response, hedge demand, rumor trap, sessions, spread, and pip distance.", ["Headline only.", "No affected currency.", "No premium unwind case."], "Political risk needs event timing, premium evidence, and a failure path."),
  seed(565, "5.2", "What controls Portfolio Volatility Cap?", "Realized portfolio volatility, fixed cap threshold, allocation cutback, correlation spike, liquidity depth, slippage, and spread percentage.", ["One token volatility only.", "No cap threshold.", "No liquidity review."], "A volatility cap controls exposure when the portfolio risk state changes."),
  seed(566, "9.14", "What defines Ratio Call Spread?", "One long call, multiple short higher calls, debit or credit, IV/time review, upside risk beyond short calls, and Gold point/dollar distance.", ["One long call only.", "No short-call ratio.", "No overextension area."], "The ratio structure must show both its payoff body and extra upside risk."),
  seed(567, "6.11", "What should Geopolitical Hedging Using Safe-Havens compare?", "Risk event, haven currency basket, dollar or CHF/JPY context, hedge leg, haven unwind trap, sessions, spread, and pip distance.", ["Gold-only haven read.", "No currency basket.", "No unwind review."], "Forex safe-haven hedging needs currency-specific behavior, not a generic stress label."),
  seed(568, "9.14", "What separates Ratio Call Spread (Swing)?", "Swing expiry, long call, multiple short higher calls, IV term context, wider payoff body, delayed overextension risk, and wider Gold point/dollar distance.", ["Base ratio timing only.", "No IV term context.", "No delayed trap."], "The swing version needs broader expiry, distance, and risk review."),
  seed(569, "9.11", "What should Liquidity Risk Assessment check?", "Order-book depth, exchange concentration, withdrawal status, slippage estimate, spread percentage, reserve buffer, and thin-book trap.", ["Headline volume only.", "No withdrawal status.", "No slippage estimate."], "Crypto liquidity must be assessed through usable depth and venue access."),
  seed(570, "9.14", "What defines Iron Condor?", "Short put spread, short call spread, wings, premium, margin, defined range body, gap risk, and Gold point/dollar distance.", ["Long call only.", "No wings.", "No range-break case."], "An iron condor is a range options structure with gap and margin review."),
  seed(571, "6.11", "What should High-Yield Bond Spread Indicator show?", "Credit spread direction, risk currency response, dollar or haven cross-check, stale credit data trap, sessions, spread, and pip distance.", ["Bond spread alone.", "No currency response.", "No stale-data review."], "Credit spreads are a risk proxy that must be checked against the selected Forex pair."),
  seed(572, "9.11", "What should Counterparty Risk Diversification separate?", "Exchange, custodian, protocol, and issuer exposures, concentration caps, withdrawal limits, reserve warning, depth, slippage, and spread percentage.", ["Token holdings only.", "No venue or issuer split.", "No withdrawal review."], "Crypto risk can come from counterparties even when market exposure is diversified."),
  seed(573, "6.11", "What should Purchasing Managers’ Index (PMI) Trend review?", "Manufacturing PMI, services PMI, the 50 threshold, trend direction, consensus surprise, release timing, sessions, spread, and pip distance.", ["One PMI print only.", "No consensus review.", "No pair response check."], "PMI trend is macro context, not a standalone Forex direction rule."),
  seed(574, "9.14", "What separates Iron Condor (Swing)?", "Swing short put spread, swing short call spread, wings, expiry, premium, margin, broad range body, delayed gap risk, and wider Gold point/dollar distance.", ["Same compact range body.", "No expiry review.", "No delayed gap case."], "The swing version needs broader range, timing, and event-risk assumptions."),
  seed(575, "9.7", "What should Stablecoin Yield Diversification check?", "Platform list, stablecoin issuer exposure, APY source, lockup, smart-contract risk, depeg risk, liquidity depth, slippage, and spread percentage.", ["Highest displayed yield only.", "No issuer split.", "No lockup or depeg review."], "Stablecoin yield sources can carry very different risks."),
  seed(576, "9.11", "What controls Emergency Stop on Exchange Outage?", "Exchange status timestamp, cancel-only mode, withdrawal halt, position freeze state, backup venue liquidity, hedge availability, slippage, and spread percentage.", ["Assume the venue works.", "No backup venue.", "No timestamp review."], "An outage lesson starts with access state and alternative venue checks."),
  seed(577, "9.14", "What defines Butterfly Spread?", "Lower wing, body strikes, upper wing, same expiry, net debit, central payoff body, IV/time sensitivity, illiquid strike trap, and Gold point/dollar distance.", ["Two random calls.", "No same-expiry check.", "No central body."], "A butterfly spread depends on strike geometry and option timing."),
  seed(578, "6.11", "What should Speculative Position Unwind Strategy verify?", "Positioning proxy, crowded side, weekly change, price response, reporting lag, unwind persistence, sessions, spread, and pip distance.", ["Crowding label only.", "No weekly change.", "No reporting lag."], "Crowding needs visible reduction and price response before it becomes an unwind study."),
  seed(579, "8.11", "What should Crowded Trade Fade require?", "Crowding evidence, failed continuation, position reduction or contrary catalyst, persistence trap, sessions, spread, and pip distance.", ["Popularity alone.", "No failed continuation.", "No persistence review."], "A fade lesson needs failed extension and evidence that crowding is changing."),
  seed(580, "5.10", "What should Max Drawdown Alert System track?", "Equity curve state, drawdown threshold, risk pause rule, recovery rule, volatility context, liquidity depth, slippage, and spread percentage.", ["One losing idea only.", "No recovery rule.", "No liquidity review."], "A drawdown alert protects the process when portfolio state worsens."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_561_580_TARGETS.length) throw new Error("Batch 561-580 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({ where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } }, select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  BATCH_561_580_TARGETS.forEach((target, index) => {
    const strategy = strategyById.get(target.id);
    const seed = SEEDS[index];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!seed || seed.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
    if (strategy && (!strategy.learningProfile || !strategy.visualModel)) problems.push(`Strategy not ready at ${target.ordinal}: ${strategy.name}`);
  });
  for (const seed of SEEDS) if (!moduleByNumber.has(seed.moduleNumber)) problems.push(`Missing module ${seed.moduleNumber} for ${seed.expectedName}`);
  if (problems.length) throw new Error(`Batch 561-580 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 561-580 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 561 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 561-580 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
