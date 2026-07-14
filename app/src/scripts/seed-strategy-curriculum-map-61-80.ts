import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_61_80_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type BatchSeed = {
  id: string;
  expectedName: string;
  expectedAsset: "FOREX" | "CRYPTO" | "GOLD";
  moduleNumber: string;
  domain: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const SEEDS: BatchSeed[] = [
  {
    id: "3b29ad3c-11b5-47fa-ac1b-f00c3b6cc220",
    expectedName: "Pivot Point Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should the swing Gold pivot breakout show before the lesson is trusted?",
    options: [
      "A 1H or 4H pivot close, retest, wick-fakeout area, and invalidation back through the pivot.",
      "A one-candle move far away from any pivot level.",
      "A crypto liquidity-depth rule by itself.",
      "A fixed distance rule with no Gold context.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs a broader Gold chart, pivot context, close quality, and wick rejection awareness.",
  },
  {
    id: "4ac20393-3b1b-4d72-a9a9-23f0f71161b9",
    expectedName: "Z-Score Mean Reversion",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What is the main idea in crypto Z-score mean reversion?",
    options: [
      "A statistical stretch moves back toward the mean only after price accepts and liquidity depth is acceptable.",
      "Every extreme reading must immediately reverse.",
      "A Gold wick rule replaces the mean baseline.",
      "A fixed distance count decides the reversion.",
    ],
    correctIndex: 0,
    explanation: "The learner studies stretch, acceptance back toward the mean, and crypto depth. An extreme alone is not enough.",
  },
  {
    id: "0728bc3c-f5cc-424a-8805-9a4887b377b7",
    expectedName: "Pair-wise Mean Reversion (Statistical Arbitrage)",
    expectedAsset: "CRYPTO",
    moduleNumber: "5.13",
    domain: "crypto",
    prompt: "What makes crypto pair-wise mean reversion different from a single-chart reversion lesson?",
    options: [
      "It compares two related assets, their spread, convergence path, and correlation-break risk.",
      "It uses only one candle on one chart.",
      "It ignores venue depth on both assets.",
      "It uses Gold pivot behavior as the main rule.",
    ],
    correctIndex: 0,
    explanation: "Pair-spread lessons need two-market context, spread behavior, and a warning that relationships can break.",
  },
  {
    id: "8cf0e21d-ea89-4bce-9a75-3f231dce8ee7",
    expectedName: "Bollinger Band Mean Reversion",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should a Gold Bollinger mean-reversion lesson emphasize?",
    options: [
      "Outer-band stretch, wick rejection, acceptance back inside, and a path toward the middle band.",
      "A breakout continuation checklist.",
      "Crypto venue-depth rules with no Gold context.",
      "A fixed distance threshold.",
    ],
    correctIndex: 0,
    explanation: "This is a Gold reversion lesson, so the middle band and wick rejection matter more than breakout expansion.",
  },
  {
    id: "a2e9123d-bbf8-4d89-9813-9b2c2b346268",
    expectedName: "False Breakout (Fakey) Strategy",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What confirms the Forex false-breakout lesson?",
    options: [
      "Price pokes beyond support or resistance, closes back inside, then the retest fails.",
      "Every wick beyond the level is continuation.",
      "A crypto exchange spike decides it.",
      "A Gold RSI extreme replaces the level.",
    ],
    correctIndex: 0,
    explanation: "The false-break lesson is about failure back inside the old range and retest rejection.",
  },
  {
    id: "75633c38-1e1a-448f-9273-c865c1684f4d",
    expectedName: "Breakout with Volume Confirmation",
    expectedAsset: "FOREX",
    moduleNumber: "3.9",
    domain: "forex",
    prompt: "How should volume be used in a Forex breakout with volume confirmation?",
    options: [
      "As relative tick-volume support beside level break, close quality, and retest behavior.",
      "As a centralized spot-FX volume feed that decides everything.",
      "As a Gold wick filter only.",
      "As a crypto funding-rate rule.",
    ],
    correctIndex: 0,
    explanation: "Spot Forex volume is relative. The level, close, and retest remain the anchor of the lesson.",
  },
  {
    id: "96b7f6b9-0256-4247-a12f-f209f018d5e6",
    expectedName: "Bollinger Band Mean Reversion (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What distinguishes intraday Gold Bollinger mean reversion?",
    options: [
      "A 5m or 15m outer-band stretch, quick wick reaction, and return toward the middle band.",
      "A swing-only chart with no short-timeframe trap.",
      "A crypto pair-spread model.",
      "A fixed distance rule.",
    ],
    correctIndex: 0,
    explanation: "The intraday Gold version focuses on fast stretch, wick reaction, and immediate continuation risk.",
  },
  {
    id: "c4edf7ee-e05b-4c94-b2ca-71f6ebc01afb",
    expectedName: "Momentum Strength Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "6.13",
    domain: "crypto",
    prompt: "What is the main caution in crypto momentum strength?",
    options: [
      "Strong relative movement can become crowded, rotate away, or lose depth.",
      "The asset that moved fastest must keep moving.",
      "A Forex session rule decides the setup.",
      "A Gold pivot wick is the only clue.",
    ],
    correctIndex: 0,
    explanation: "Crypto leadership can rotate quickly, so strength must be checked against depth, slippage, and extension.",
  },
  {
    id: "0abb67e8-0be2-4483-8778-58cb46c0ef7f",
    expectedName: "Volume-Weighted Momentum",
    expectedAsset: "CRYPTO",
    moduleNumber: "3.9",
    domain: "crypto",
    prompt: "What makes crypto volume-weighted momentum cleaner for study?",
    options: [
      "Momentum agrees with relative volume, exchange participation, and enough liquidity depth.",
      "Price rises while volume fades and depth thins.",
      "A fixed distance target is used.",
      "A Gold-only wick rule is enough.",
    ],
    correctIndex: 0,
    explanation: "The lesson combines momentum with participation, then checks whether liquidity can support the move.",
  },
  {
    id: "5971fcc7-8b8a-4191-988e-b8b2c35a44c7",
    expectedName: "Bollinger Band Mean Reversion (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should the swing Gold Bollinger mean-reversion lesson use?",
    options: [
      "1H or 4H outer-band stretch, broader structure, wick rejection, and middle-band path.",
      "A 5m-only quick scalp model.",
      "A crypto exchange-depth rule by itself.",
      "A fixed distance count.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader Gold context because overextension can last longer.",
  },
  {
    id: "82e17374-6add-440b-ab8c-edcd4394d1a8",
    expectedName: "Breakout with Momentum Confirmation (RSI/Momentum)",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What separates the Forex momentum-confirmed breakout from a basic breakout?",
    options: [
      "The level break is supported by RSI or momentum, then checked again on the retest.",
      "The level is ignored once the indicator moves.",
      "A crypto venue-depth spike replaces the retest.",
      "A Gold wick rule decides the pair movement.",
    ],
    correctIndex: 0,
    explanation: "This lesson combines support/resistance structure with momentum support and retest behavior.",
  },
  {
    id: "2e1fb8e2-2f5f-4393-a0c6-b96dbe98331d",
    expectedName: "RSI Momentum Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "How is crypto RSI momentum different from RSI mean reversion?",
    options: [
      "RSI holds strength around the midline while price continues, with depth and slippage checked.",
      "The learner fades every RSI stretch.",
      "The middle band decides the plan.",
      "Fixed spacing is the main rule.",
    ],
    correctIndex: 0,
    explanation: "RSI momentum studies continuation strength, not automatic fading of extremes.",
  },
  {
    id: "5ddb159c-3051-43b2-b282-b32c50a17f59",
    expectedName: "Volatility Expansion Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "5.2",
    domain: "forex",
    prompt: "What is the core sequence in Forex volatility expansion breakout?",
    options: [
      "Compression range first, ATR expansion, breakout close, retest, and failure back inside if it does not hold.",
      "ATR alone without a range.",
      "A crypto liquidity-depth rule by itself.",
      "A Gold RSI extreme.",
    ],
    correctIndex: 0,
    explanation: "This is a Forex volatility-breakout lesson, so compression and accepted expansion must both be visible.",
  },
  {
    id: "e5f0ec3e-59d5-4f26-95fe-cd0e92db2cd4",
    expectedName: "RSI Mean Reversion",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should the Gold RSI mean-reversion lesson require?",
    options: [
      "RSI extreme, matching price stretch, Gold wick reaction, and a path back toward a mean area.",
      "RSI alone with no price reaction.",
      "Crypto pair correlation.",
      "A fixed distance target.",
    ],
    correctIndex: 0,
    explanation: "RSI is context. Gold still needs price stretch, wick reaction, and a mean reference.",
  },
  {
    id: "784e2bdb-b1ae-4c7c-86af-4da5e204007c",
    expectedName: "RSI Mean Reversion (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What makes the intraday Gold RSI mean-reversion version distinct?",
    options: [
      "A 5m or 15m RSI stretch, fast wick reaction, and quick continuation-trap check.",
      "A 4H-only swing model.",
      "A crypto venue-depth spread pair.",
      "A Forex session breakout rule.",
    ],
    correctIndex: 0,
    explanation: "Intraday Gold reversion can fail fast, so the trap and timeframe must be clear.",
  },
  {
    id: "9ec9bfda-a430-41ee-8224-00c5e3a5674f",
    expectedName: "Grid Breakout (Grid Trading)",
    expectedAsset: "FOREX",
    moduleNumber: "5.3",
    domain: "forex",
    prompt: "What is the main lesson in Forex grid breakout?",
    options: [
      "Grid levels are observation bands, and breakout outside the corridor warns about stacked exposure.",
      "Add more exposure every time price leaves the corridor.",
      "Crypto funding controls the grid.",
      "Gold wick rejection is the only rule.",
    ],
    correctIndex: 0,
    explanation: "The educational purpose is to show where the grid corridor fails and why stacked exposure is dangerous.",
  },
  {
    id: "ba86225f-1022-4d05-877b-540dfc760d8f",
    expectedName: "MACD Histogram Momentum",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What should the crypto MACD histogram momentum lesson study?",
    options: [
      "Histogram expansion around the zero baseline, price continuation, liquidity depth, and histogram fade risk.",
      "A fixed distance count.",
      "Gold pivot wick behavior only.",
      "A session range with no MACD histogram.",
    ],
    correctIndex: 0,
    explanation: "The histogram shows momentum expansion and fade, while crypto depth keeps the lesson asset-aware.",
  },
  {
    id: "3423b58d-5050-4b96-98e7-d591468c4a13",
    expectedName: "Price-Rate-of-Change (ROC) Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What does the crypto ROC momentum lesson use as its anchor?",
    options: [
      "The ROC line, zero baseline, acceleration, failed rollover, and liquidity-depth check.",
      "A Bollinger middle band only.",
      "A fixed distance target.",
      "A Gold wick fakeout only.",
    ],
    correctIndex: 0,
    explanation: "ROC is a rate-of-change lesson, so the zero baseline and acceleration/rollover behavior matter.",
  },
  {
    id: "6affdf20-2d1f-4830-ad96-5d34e35088a8",
    expectedName: "RSI Mean Reversion (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should the swing Gold RSI mean-reversion version include?",
    options: [
      "1H or 4H RSI stretch, broader structure, wick reaction, and failed swing reversion risk.",
      "Only a 1m reaction candle.",
      "A crypto pair-spread model.",
      "A fixed distance rule.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader Gold structure because RSI extremes can stay stretched.",
  },
  {
    id: "7d0a766c-4035-4c12-94a9-bc2d6b5b851f",
    expectedName: "News Release Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "7.7",
    domain: "forex",
    prompt: "What should the Forex news release breakout lesson warn about?",
    options: [
      "Spread widening, slippage, whipsaw, and a close back inside the pre-release range.",
      "The first news spike being enough by itself.",
      "A crypto venue-depth pair trade.",
      "A Gold Bollinger mean path.",
    ],
    correctIndex: 0,
    explanation: "News release lessons need range context plus warnings about unstable execution conditions.",
  },
];

function questionIdFor(strategyId: string): string {
  return `sv_${strategyId.replace(/-/g, "")}_mcq`;
}

function formatStatus(value: unknown): "ready" | "missing" {
  return value ? "ready" : "missing";
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const explicitDryRun = args.has("--dry-run");

  if (apply && explicitDryRun) {
    throw new Error("Use either --apply or --dry-run, not both.");
  }

  const dryRun = !apply;
  const targetIds = SEEDS.map(seed => seed.id);
  const targetIdSet = new Set(targetIds);
  if (targetIdSet.size !== SEEDS.length) {
    throw new Error("Batch 61-80 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_61_80_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 61-80 seed list missing target: ${target.ordinal} ${target.id}`);
    }
  }

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({
      where: { id: { in: targetIds } },
      select: {
        id: true,
        name: true,
        assetClass: true,
        sequenceNumber: true,
        parentFamily: true,
        learningProfile: true,
        visualModel: true,
      },
    }),
    prisma.courseModule.findMany({
      select: {
        id: true,
        level: true,
        moduleNumber: true,
        title: true,
        logicIds: true,
      },
    }),
  ]);

  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));
  const problems: string[] = [];

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id);
    const module = moduleByNumber.get(seed.moduleNumber);
    if (!strategy) {
      problems.push(`Missing strategy ${seed.id}`);
      continue;
    }
    if (!module) {
      problems.push(`Missing module ${seed.moduleNumber} for ${seed.expectedName}`);
    }
    if (!namesMatchExpected(strategy.name, seed.expectedName)) {
      problems.push(`${seed.id} name expected "${seed.expectedName}" but found "${strategy.name}"`);
    }
    if (strategy.assetClass !== seed.expectedAsset) {
      problems.push(`${seed.id} asset expected ${seed.expectedAsset} but found ${strategy.assetClass}`);
    }
    if (!strategy.learningProfile) {
      problems.push(`${seed.id} is missing learningProfile`);
    }
    if (!strategy.visualModel) {
      problems.push(`${seed.id} is missing visualModel`);
    }
  }
  if (problems.length > 0) {
    throw new Error(`Batch 61-80 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 61-80 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_61_80_TARGETS.find(target => target.id === seed.id)?.ordinal,
      ref: getVaultStrategyRef(seed.id),
      name: strategy.name,
      asset: strategy.assetClass,
      sequence: strategy.sequenceNumber,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      strategyLevel: getStrategyLevel(strategy),
      module: `${module.moduleNumber} ${module.title}`,
      examLevel: module.level,
      learningProfile: formatStatus(strategy.learningProfile),
      visualModel: formatStatus(strategy.visualModel),
    };
  }));

  const seedsByModule = new Map<string, BatchSeed[]>();
  for (const seed of SEEDS) {
    const group = seedsByModule.get(seed.moduleNumber) || [];
    group.push(seed);
    seedsByModule.set(seed.moduleNumber, group);
  }

  for (const [moduleNumber, seeds] of seedsByModule) {
    const module = moduleByNumber.get(moduleNumber)!;
    const refsToAdd = seeds.map(seed => getVaultStrategyRef(seed.id));
    const nextLogicIds = Array.from(new Set([...(module.logicIds || []), ...refsToAdd]));
    const addedRefs = refsToAdd.filter(ref => !(module.logicIds || []).includes(ref));
    console.log(`${dryRun ? "Would update" : "Updating"} module ${module.moduleNumber} ${module.title}: ${addedRefs.length} new strategy link(s)`);
    if (addedRefs.length > 0) console.log(`  ${addedRefs.join(", ")}`);

    if (!dryRun && addedRefs.length > 0) {
      await prisma.courseModule.update({
        where: { id: module.id },
        data: { logicIds: nextLogicIds },
      });
    }
  }

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    const questionId = questionIdFor(seed.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} exam question ${questionId} (L${module.level}, ${getVaultStrategyRef(seed.id)}, ${strategy.name})`);

    if (!dryRun) {
      await prisma.examQuestion.upsert({
        where: { id: questionId },
        update: {
          level: module.level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          matchingLeft: [],
          matchingRight: [],
          chartState: undefined,
          targetX: null,
          targetY: null,
          tolerance: null,
          explanation: seed.explanation,
        },
        create: {
          id: questionId,
          level: module.level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          explanation: seed.explanation,
        },
      });
    }
  }

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- BATCH 61-80 CURRICULUM MAP APPLIED ---");
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
