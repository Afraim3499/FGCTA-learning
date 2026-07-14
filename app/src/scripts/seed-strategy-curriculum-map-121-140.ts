import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_121_140_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
    id: "1934148e-fdf7-4c8a-a880-9a246b1e15d6",
    expectedName: "Inside Bar Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "0.4",
    domain: "crypto",
    prompt: "What should the crypto Inside Bar Breakout lesson show?",
    options: [
      "Mother-bar high/low, inside-bar compression, breakout close, failed break back inside, and liquidity depth.",
      "A moving-average cross with no candle compression.",
      "Gold macro pressure only.",
      "A range idea without a mother bar.",
    ],
    correctIndex: 0,
    explanation: "The lesson starts with candle anatomy, then checks whether the crypto break holds outside the mother-bar range.",
  },
  {
    id: "af888b23-1238-4676-b730-6a0e9ca044ec",
    expectedName: "Momentum Factor (Time-Series)",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What makes Forex time-series momentum readable?",
    options: [
      "The pair holds on the trend side of its own momentum baseline with normal spread and pip distance.",
      "The pair is ranked against crypto exchange depth.",
      "Only a single candle color is checked.",
      "Gold wick distance is used as the main rule.",
    ],
    correctIndex: 0,
    explanation: "Time-series momentum compares the pair against its own baseline, then checks spread, session context, and invalidation distance.",
  },
  {
    id: "fc99919e-950b-4233-a86b-57c9e483828a",
    expectedName: "MACD Momentum (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What separates intraday Gold MACD Momentum from the base version?",
    options: [
      "5m/15m Gold context, MACD line, trigger line, histogram, zero baseline, and wick momentum fade.",
      "A swing-only chart with no intraday context.",
      "A crypto order-book depth lesson.",
      "A candle pattern without MACD structure.",
    ],
    correctIndex: 0,
    explanation: "The intraday version keeps MACD structure visible while checking fast Gold wick behavior.",
  },
  {
    id: "3939cfaa-6590-48e1-94ed-a0631d1b254d",
    expectedName: "Head and Shoulders Top",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.3",
    domain: "crypto",
    prompt: "What should a crypto Head and Shoulders Top lesson mark?",
    options: [
      "Left shoulder, head, right shoulder, neckline, breakdown close, failed reclaim, and liquidity depth.",
      "Only the head without a neckline.",
      "A moving-average cross by itself.",
      "Gold point distance as the deciding check.",
    ],
    correctIndex: 0,
    explanation: "The neckline break and failed reclaim are the core teaching points after the pattern shape is visible.",
  },
  {
    id: "58ec5390-8350-48ee-96e7-23b553c74c16",
    expectedName: "MACD Momentum (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should the swing Gold MACD Momentum lesson emphasize?",
    options: [
      "1H/4H Gold structure, MACD line, trigger line, histogram expansion, zero baseline, and wick fade risk.",
      "A 1m-only scalp read.",
      "Crypto exchange depth as the main rule.",
      "A neckline pattern with no MACD.",
    ],
    correctIndex: 0,
    explanation: "The swing version studies broader Gold structure with MACD momentum and wick rejection risk.",
  },
  {
    id: "66d321c0-be00-45de-ae62-36044f0da55f",
    expectedName: "Rate of Change (ROC) Momentum",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What should the Forex ROC Momentum lesson check?",
    options: [
      "ROC line, zero baseline, acceleration, failed rollover, spread, session context, and pip distance.",
      "Only a resistance line with no ROC.",
      "Gold wick distance only.",
      "Crypto liquidity depth as the main Forex rule.",
    ],
    correctIndex: 0,
    explanation: "The ROC line and zero baseline show momentum, while Forex spread and pip distance keep the example grounded.",
  },
  {
    id: "7d9cb8e6-fe83-464c-ae95-1d1567f93c35",
    expectedName: "Rate of Change Momentum",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What makes Gold Rate of Change Momentum readable?",
    options: [
      "ROC line, zero baseline, Gold acceleration, wick momentum fade, and point or dollar distance.",
      "A Forex pair baseline only.",
      "A crypto exchange-depth-only rule.",
      "A pattern neckline without ROC.",
    ],
    correctIndex: 0,
    explanation: "Gold ROC momentum must pair the oscillator reading with Gold structure and wick behavior.",
  },
  {
    id: "a9e3b4fd-cf5c-4ffd-9bb7-891f6f6c33ce",
    expectedName: "Inverse Head and Shoulders",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.3",
    domain: "crypto",
    prompt: "What should a crypto Inverse Head and Shoulders lesson show?",
    options: [
      "Left shoulder, head, right shoulder, neckline breakout, failed move back below neckline, and liquidity depth.",
      "Only a single bullish candle.",
      "A Gold macro catalyst alone.",
      "A momentum baseline with no neckline.",
    ],
    correctIndex: 0,
    explanation: "The pattern becomes teachable when the neckline breakout and failure case are both visible.",
  },
  {
    id: "d18cd22d-dc0a-4467-9143-1978ba7586e7",
    expectedName: "Commodity Channel Index (CCI) Momentum",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "How is Forex CCI Momentum different from CCI mean reversion?",
    options: [
      "It studies CCI holding on the trend side of zero with spread, session context, and pip distance.",
      "It treats every high CCI reading as a fade.",
      "It ignores the zero baseline.",
      "It uses crypto depth as the main check.",
    ],
    correctIndex: 0,
    explanation: "This lesson uses CCI for trend-side continuation, not outer-extreme range fading.",
  },
  {
    id: "0cda4b00-d934-434d-8561-b3f118cb36b6",
    expectedName: "Rate of Change Momentum (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should intraday Gold ROC Momentum include?",
    options: [
      "5m/15m ROC line, zero baseline, fast acceleration, wick fade risk, and point or dollar distance.",
      "A swing-only rule with no intraday chart.",
      "A currency-pair distance answer.",
      "A crypto triangle boundary only.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on fast Gold acceleration and wick rejection around the ROC baseline.",
  },
  {
    id: "c6845772-2a95-48f6-9b1a-dc70c9d3c3c7",
    expectedName: "Descending Triangle Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What should the crypto Descending Triangle lesson mark?",
    options: [
      "Flat support, lower highs, compression, breakdown close, failed reclaim, and liquidity depth.",
      "Only a rising resistance line.",
      "A Gold MACD histogram only.",
      "A moving average without triangle boundaries.",
    ],
    correctIndex: 0,
    explanation: "The flat support and lower highs define the pattern, then the close and failed reclaim teach acceptance versus trap.",
  },
  {
    id: "eb862cad-bb9b-4da8-9f3e-f8b9826b7111",
    expectedName: "Momentum Breakout with Volume",
    expectedAsset: "FOREX",
    moduleNumber: "3.9",
    domain: "forex",
    prompt: "What should Forex Momentum Breakout with Volume require?",
    options: [
      "Breakout level, momentum push, relative tick-volume expansion, retest quality, spread, and pip distance.",
      "A breakout with no participation check.",
      "Only a crypto exchange-depth warning.",
      "A Gold wick pattern with no level.",
    ],
    correctIndex: 0,
    explanation: "The lesson needs price movement and relative tick-volume expansion to agree, then the retest checks whether the level holds.",
  },
  {
    id: "02b16558-a77f-476f-b029-daeca0c00cde",
    expectedName: "Momentum Divergence",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does a Forex Momentum Divergence lesson compare?",
    options: [
      "Comparable price swings against comparable momentum swings, then a confirmation close and pip-distance check.",
      "A single candle against no prior swing.",
      "Gold macro pressure only.",
      "Crypto venue disagreement only.",
    ],
    correctIndex: 0,
    explanation: "Divergence requires two price points, two momentum points, and price confirmation before the warning is useful.",
  },
  {
    id: "8a1608c5-3e88-42e0-b271-38760df13f2c",
    expectedName: "Ascending Triangle Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What should the crypto Ascending Triangle lesson show?",
    options: [
      "Flat resistance, higher lows, compression, breakout close, failed move back inside, and liquidity depth.",
      "Only flat support with lower highs.",
      "A Forex ROC line only.",
      "A Gold DMI-only chart.",
    ],
    correctIndex: 0,
    explanation: "The flat resistance and higher lows define the pattern before the breakout and failure case are studied.",
  },
  {
    id: "de9668f6-7fb5-446c-ac14-bceb530c0fae",
    expectedName: "Rate of Change Momentum (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What separates swing Gold ROC Momentum from the intraday version?",
    options: [
      "1H/4H Gold structure, ROC line, zero baseline, broader wick fade risk, and point or dollar distance.",
      "A 1m-only momentum burst.",
      "A currency-pair distance rule.",
      "A crypto inside-bar compression box.",
    ],
    correctIndex: 0,
    explanation: "The swing version uses broader Gold structure while still reading ROC around the zero baseline.",
  },
  {
    id: "8306c21c-e914-4cfe-a0f6-192360bc827f",
    expectedName: "DMI/ADX Trend System",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should Gold DMI/ADX Trend System show?",
    options: [
      "ADX strength, +DI/-DI direction, Gold structure, wick/chop trap, and point or dollar distance.",
      "ADX alone without DI direction.",
      "A crypto neckline pattern only.",
      "A currency-pair distance rule as the main Gold check.",
    ],
    correctIndex: 0,
    explanation: "ADX shows strength, while +DI and -DI show direction; Gold structure and wick behavior keep the lesson grounded.",
  },
  {
    id: "c1127f50-de60-4c01-8e41-31053d1d39e7",
    expectedName: "Symmetrical Triangle Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What should a crypto Symmetrical Triangle Breakout lesson show?",
    options: [
      "Converging highs/lows, compression, breakout close, failed move back inside, and liquidity depth.",
      "Only one horizontal boundary.",
      "Gold MACD with no pattern.",
      "A Forex time-series baseline only.",
    ],
    correctIndex: 0,
    explanation: "A symmetrical triangle needs both converging sides, then a close outside and a clear failure case.",
  },
  {
    id: "f9eb20da-c0ea-44ca-9a56-aa1025918563",
    expectedName: "Momentum with Moving Average Confirmation",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What should Forex Momentum with Moving Average Confirmation require?",
    options: [
      "Momentum push, moving-average direction agreement, pullback behavior, spread, and pip distance.",
      "Momentum with no moving-average context.",
      "Crypto exchange depth as the main Forex rule.",
      "Gold point distance only.",
    ],
    correctIndex: 0,
    explanation: "The moving average gives trend context; momentum must agree and price should not chop through the average.",
  },
  {
    id: "34b2857e-22a3-4c98-8b3d-15941abd280d",
    expectedName: "Absolute Momentum",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What defines Forex Absolute Momentum?",
    options: [
      "The pair is judged against its own momentum baseline, with spread, session context, and pip distance checked.",
      "The pair is ranked against unrelated assets first.",
      "Only a triangle boundary is used.",
      "Gold wick distance is the main rule.",
    ],
    correctIndex: 0,
    explanation: "Absolute momentum checks whether the pair itself is holding above or below its own baseline.",
  },
  {
    id: "375bb199-c98d-4008-8193-57db163402a9",
    expectedName: "DMI/ADX Trend System (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What separates intraday Gold DMI/ADX from the base version?",
    options: [
      "5m/15m Gold chart, ADX strength, +DI/-DI direction, fast wick/chop trap, and point or dollar distance.",
      "A swing-only chart with no intraday context.",
      "A crypto triangle pattern only.",
      "A currency-pair distance answer.",
    ],
    correctIndex: 0,
    explanation: "The intraday version uses the same ADX and DI structure on a faster Gold chart with sharper wick/chop risk.",
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
    throw new Error("Batch 121-140 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_121_140_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 121-140 seed list missing target: ${target.ordinal} ${target.id}`);
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
    throw new Error(`Batch 121-140 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 121-140 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_121_140_TARGETS.find(target => target.id === seed.id)?.ordinal,
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

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- BATCH 121-140 CURRICULUM MAP APPLIED ---");
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
