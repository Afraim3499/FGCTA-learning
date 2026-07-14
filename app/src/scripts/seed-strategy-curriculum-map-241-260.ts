import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_241_260_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
  const target = BATCH_241_260_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(241, "6.11", "How should a Forex PPP valuation gap be studied?", "Use comparable price baskets and base dates, calculate relative inflation, then challenge the valuation gap with revisions, rates, productivity, capital flows, and pair structure.", ["Treat the PPP benchmark as precise short-term timing.", "Mix unrelated price baskets from different base years.", "Assume every valuation gap closes quickly."], "PPP is a slow purchasing-power benchmark whose deviations can persist."),
  seed(242, "2.9", "What defines the swing Gold Ichimoku breakout lesson?", "A completed 1H or 4H close beyond a broad Kumo, sustained Tenkan-Kijun agreement, forward-cloud context, patient retest, and inside-cloud invalidation.", ["A quick short-chart wick through a thin cloud.", "Price repeatedly tangled inside the Kumo.", "Forex-only distance measurement instead of Gold points or dollars."], "The swing version requires broad completed structure and slower acceptance."),
  seed(243, "6.13", "What does open-interest expansion add to a crypto price study?", "It shows changing leveraged participation when synchronized with price, spot-perpetual agreement, funding or basis, venue consistency, and rollover risk.", ["It determines direction without price context.", "It proves every move has healthy spot demand.", "It removes liquidation and venue risk."], "Open interest measures participation, not direction or durability by itself."),
  seed(244, "7.7", "How should a Forex political event be prepared for?", "Build several outcomes and policy channels, record market expectations, then compare the confirmed result with the first stable response after spreads normalize.", ["Treat one poll as a certain outcome.", "Judge the event from the first headline candle.", "Ignore pre-event positioning and policy consequences."], "Political events require scenario analysis rather than one forecast."),
  seed(245, "2.4", "How do Alligator lines and fractals work together in the base Gold lesson?", "Jaw, teeth, and lips organize trend state; a fully confirmed five-candle fractal supplies a boundary only when the lines are ordered and separating.", ["Use an unfinished fractal while the lines are tangled.", "Treat every fractal as a reversal.", "Read ADX as part of the Alligator calculation."], "Line organization filters whether a fractal break occurs in trend or noise."),
  seed(246, "6.13", "What makes open-interest divergence useful in crypto?", "A fixed-window comparison of price and OI can diagnose covering, liquidation, unsupported extension, or fresh participation when checked against spot, funding, and venues.", ["Every divergence requires an immediate reversal.", "OI direction can be interpreted without price.", "One exchange feed represents the whole market."], "Different price-and-OI combinations describe different positioning mechanics."),
  seed(247, "6.11", "What makes a Forex calendar tendency credible enough for study?", "A fixed pair and window, many independent years, hit rate and dispersion, an economic explanation, out-of-sample testing, and a current-regime check.", ["Choose the dates after finding favorable years.", "Use one strong historical year.", "Assume a calendar pattern must repeat."], "Seasonality is a tested historical tendency, not a fixed schedule."),
  seed(248, "2.4", "What separates the intraday Gold Alligator and Fractals lesson?", "Fast 5m or 15m line separation, a fresh compact confirmed fractal, body-close break, immediate retest, and rapid line-tangle invalidation.", ["A broad 4H fractal with a multi-candle retest.", "An old fractal after repeated line crossings.", "Forex-only distance language."], "The intraday variant uses compact boundaries and quick confirmation."),
  seed(249, "9.4", "How should a crypto liquidation heatmap be interpreted?", "As estimated long and short forced-order bands whose density, distance, migration, and spot-perpetual response may produce attraction, rejection, or cascade.", ["As a visible executable order book.", "As proof price will reverse at the brightest band.", "Without checking whether clusters migrated."], "Heatmaps estimate leverage concentration and must be challenged by live market evidence."),
  seed(250, "6.11", "What distinguishes terms-of-trade spread convergence from a directional terms-of-trade lesson?", "It normalizes two economies' indexes, measures their relative deviation, and requires fresh narrowing evidence plus matching pair structure.", ["It selects the economy with the highest export price only.", "It assumes a wide spread must close.", "It ignores revisions and regime changes."], "Convergence studies change in a relative macro spread, not merely which economy looks stronger."),
  seed(251, "2.4", "What separates the swing Gold Alligator and Fractals lesson?", "1H or 4H line separation, a completed swing fractal, higher-timeframe close, patient multi-candle retest, and line-compression invalidation.", ["A compact 5m fractal requiring immediate reaction.", "An unfinished swing before right-side candles close.", "A mature trend with already compressed lines."], "The swing version uses completed broad structure and slower confirmation."),
  seed(252, "9.4", "What must happen before studying a fade after a crypto liquidation cascade?", "Forced liquidation and OI collapse are verified, spot reclaims structure, several candles stabilize, and market depth begins recovering.", ["Act during the first fast candle.", "Treat the first small bounce as stabilization.", "Ignore whether other venues are still cascading."], "A post-cascade study begins after forced flow shows evidence of exhaustion."),
  seed(253, "6.11", "How should safe-haven demand be verified in Forex?", "Compare equities, volatility, yields, and relative JPY, CHF, and USD behavior, then require the chosen pair structure to agree.", ["Assume all havens strengthen equally.", "Use one alarming headline as complete evidence.", "Ignore a rapid risk-on reversal."], "Safe-haven flow is relative and depends on the type of market stress."),
  seed(254, "2.4", "What different jobs do DMI and ADX perform?", "+DI and -DI describe directional leadership; ADX level and slope describe trend strength without choosing bullish or bearish direction.", ["ADX alone gives market direction.", "Every DI crossover is valid in low-strength chop.", "A high but falling ADX means strength is accelerating."], "Separating direction from strength prevents common indicator confusion."),
  seed(255, "8.3", "What makes a crypto social-sentiment composite auditable?", "A fixed multi-platform basket, bot and repost filtering, normalized polarity and breadth, freshness, and comparison with price and volume.", ["Raw mention count from one platform.", "An extreme score used without market context.", "Changing sources after seeing the result."], "Social mood can be manipulated or concentrated, so source quality and breadth matter."),
  seed(256, "6.11", "What makes a Forex risk-on carry basket different from several unrelated positions?", "Each pair passes expected-carry and regime checks, weights contribute similar risk, and cross-pair correlation plus shared funding exposure are measured.", ["Give every pair the same position size.", "Count several JPY crosses as diversification.", "Ignore a broad risk-off shift."], "Basket construction must control shared exposures and correlated failure."),
  seed(257, "2.4", "What separates the intraday Gold ADX and DMI lesson?", "5m or 15m DI leadership, fast ADX slope, a compact price break, quick follow-through, and crossover-churn invalidation.", ["A broad 4H swing with a patient pullback.", "One ADX spike while price remains inside the range.", "ADX interpreted as bullish direction."], "The intraday version demands quick chart agreement and rejects churn."),
  seed(258, "8.3", "What is the proper role of influencer monitoring in crypto education?", "Audit verified identity, disclosure history, original-post timing, repost and bot amplification, and price, volume, and depth before and after the post.", ["Copy every post from a popular account.", "Join after followers have already moved a thin token.", "Ignore promotions or deleted posts."], "The lesson evaluates attention mechanics and conflicts rather than copying opinions."),
  seed(259, "8.3", "How should the crypto Fear and Greed index be used?", "As a slow composite crowding measure whose freshness, extreme persistence, price structure, volatility context, and normalization must be checked.", ["The first extreme reading requires reversal.", "Index level replaces chart structure.", "Extreme emotion cannot persist during a trend."], "Extreme crowding is context and can remain extreme for an extended period."),
  seed(260, "2.4", "What separates the swing Gold ADX and DMI lesson?", "1H or 4H DI leadership, sustained ADX rise, broad swing structure, patient pullback, and high-but-falling ADX exhaustion.", ["A fast 5m crossover requiring immediate follow-through.", "Join solely because ADX remains high while falling.", "Ignore completed higher-timeframe structure."], "The swing version studies sustained strength and late-trend exhaustion."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_241_260_TARGETS.length) throw new Error("Batch 241-260 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, parentFamily: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_241_260_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 241-260 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 241-260 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 241 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 241-260 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
