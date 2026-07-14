import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { namesMatchExpected, PILOT_20_TARGETS } from "./strategy-override-rules";

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

type PilotSeed = {
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

const SEEDS: PilotSeed[] = [
  {
    id: "51332489-42ba-48ed-84ea-5bd1281f25d2",
    expectedName: "Range Breakout at Support/Resistance",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What makes the crypto range breakout at support/resistance cleaner?",
    options: [
      "A close beyond the range edge, a retest, and enough liquidity depth.",
      "A single exchange wick with thin order-book depth.",
      "A fixed Forex distance count.",
      "A Gold wick rule with no crypto context.",
    ],
    correctIndex: 0,
    explanation: "The crypto version needs acceptance beyond the range plus liquidity review because one venue can distort the break.",
  },
  {
    id: "6f7fddbf-a818-441f-8e6c-cea6060cfb7d",
    expectedName: "Bollinger Band Squeeze Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What is the key idea in a crypto Bollinger Band squeeze breakout?",
    options: [
      "Compression tightens first, then price closes outside the band with liquidity still acceptable.",
      "Any touch of the outer band is enough.",
      "A fixed-distance threshold decides the result.",
      "Gold wick behavior is the only required clue.",
    ],
    correctIndex: 0,
    explanation: "A squeeze breakout starts with compression. The learner then checks close quality and crypto liquidity depth.",
  },
  {
    id: "b89c3e9c-c643-4852-9147-99d12d0f39d1",
    expectedName: "Trend-Following Using Parabolic SAR",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does the Forex Parabolic SAR trend-following plan require?",
    options: [
      "SAR dots must support the trend path while spread and pair movement remain readable.",
      "Every dot flip should be used inside chop.",
      "Crypto exchange depth replaces the chart reading.",
      "Gold wick distance decides the Forex setup.",
    ],
    correctIndex: 0,
    explanation: "Parabolic SAR is useful only when the dot trail agrees with a readable Forex trend and normal spread.",
  },
  {
    id: "e3ffafcb-3578-42cb-b055-369ad417506a",
    expectedName: "Bollinger Band Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should the swing Gold Bollinger breakout emphasize?",
    options: [
      "1H or 4H band expansion, close quality, and Gold wick fakeout risk.",
      "A one-candle scalp with no retest.",
      "A fixed-distance count.",
      "A crypto venue-depth rule by itself.",
    ],
    correctIndex: 0,
    explanation: "The swing Gold version needs broader timeframe acceptance and wick rejection awareness.",
  },
  {
    id: "888fcb2d-f14b-4674-9c13-2f677a3e106b",
    expectedName: "Gap Breakout Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What is the main trap in a crypto gap breakout?",
    options: [
      "The gap can refill quickly if liquidity is thin and the breakout close fails.",
      "All crypto gaps mean continuation.",
      "A fixed Forex distance confirms the setup.",
      "Gold wick rejection is the only clue.",
    ],
    correctIndex: 0,
    explanation: "Crypto gaps can come from thin participation. Learners must watch gap boundaries, close quality, and refill risk.",
  },
  {
    id: "cb823d9d-932c-4fb4-a512-fad9d2ead154",
    expectedName: "Guppy Multiple Moving Average (GMMA) Trend",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does GMMA help a Forex learner compare?",
    options: [
      "Short-term and long-term moving-average groups, plus whether the ribbon is expanding or tangled.",
      "A single candle color with no trend context.",
      "Crypto exchange depth only.",
      "A Gold pivot level with no averages.",
    ],
    correctIndex: 0,
    explanation: "GMMA is a moving-average ribbon lesson. Separation supports trend clarity, while tangled ribbons warn of chop.",
  },
  {
    id: "dcf01c2b-b799-4ade-8c06-31c64cc8c9b3",
    expectedName: "Donchian Channel Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should a Gold Donchian Channel Breakout prove?",
    options: [
      "Price closes beyond the N-period high or low and does not snap back inside the channel.",
      "A wick through the band is enough.",
      "A fixed-distance count is the main test.",
      "A crypto venue imbalance replaces the channel.",
    ],
    correctIndex: 0,
    explanation: "Gold needs close quality because wick fakeouts can pierce a Donchian band and still reject.",
  },
  {
    id: "6a5bc7de-e322-491d-82de-c04fc9c24eaf",
    expectedName: "Keltner Channel Trend-Follow",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What is the cleanest Forex Keltner trend-following read?",
    options: [
      "Price respects the EMA midline and closes on the trend side of the ATR channel.",
      "Price crosses the channel randomly inside chop.",
      "Crypto exchange depth becomes the main tool.",
      "Gold wick rejection alone confirms it.",
    ],
    correctIndex: 0,
    explanation: "Keltner trend-following uses the midline and ATR channel to judge whether trend movement is organized.",
  },
  {
    id: "c089f522-bade-412c-84d3-fc93bb6f1bea",
    expectedName: "Donchian Channel Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What distinguishes the intraday Gold Donchian breakout?",
    options: [
      "A lower-timeframe Donchian break that must hold after the first fast retest.",
      "A weekly-only macro view.",
      "A fixed-distance threshold.",
      "A crypto funding-rate change.",
    ],
    correctIndex: 0,
    explanation: "The intraday Gold version focuses on fast channel breaks and immediate rejection risk.",
  },
  {
    id: "f92ea260-580c-40ba-a319-f1aedda181ec",
    expectedName: "Asia Session Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "4.2",
    domain: "crypto",
    prompt: "What must be checked in a crypto Asia session breakout?",
    options: [
      "The Asia range boundary, breakout close, liquidity depth, and whether price returns inside the range.",
      "Only one exchange wick.",
      "A fixed-distance count.",
      "A Gold-only wick rule.",
    ],
    correctIndex: 0,
    explanation: "The Asia range gives the box. Crypto still needs depth and participation checks around the break.",
  },
  {
    id: "282dd0e7-3442-4c52-b119-b18e34ad6715",
    expectedName: "Trend-Following with Heikin-Ashi Candles",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does the Forex Heikin-Ashi trend-following plan teach?",
    options: [
      "Smoothed candle direction and continuation quality, while remembering that smoothing can lag.",
      "A raw candle wick by itself.",
      "A crypto venue imbalance only.",
      "A Gold macro relationship only.",
    ],
    correctIndex: 0,
    explanation: "Heikin-Ashi can make trend persistence easier to see, but learners must notice lag and invalidation.",
  },
  {
    id: "97534036-4dba-4ae1-8607-9c0c754b5105",
    expectedName: "Donchian Channel Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should the swing Gold Donchian breakout wait for?",
    options: [
      "A 1H or 4H close beyond the channel that avoids a quick return inside.",
      "A one-minute wick through the band.",
      "A fixed-distance threshold.",
      "A crypto exchange-depth clue by itself.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs higher-timeframe acceptance beyond the Donchian boundary.",
  },
  {
    id: "f29fe79a-5066-45e0-8ba1-4eeddc70224a",
    expectedName: "Mean Reversion via Bollinger Bands",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What is the core idea in crypto Bollinger mean reversion?",
    options: [
      "Price stretches outside the band, then acceptance back toward the middle band is studied with liquidity depth.",
      "Every outer-band touch should be chased outward.",
      "A fixed-distance count decides the reversion.",
      "Gold macro pressure is the main clue.",
    ],
    correctIndex: 0,
    explanation: "This is a range lesson. The learner studies stretch and return toward the mean, not breakout continuation.",
  },
  {
    id: "0011598f-73bf-4bab-9016-2b6f0ba1ccb7",
    expectedName: "Keltner Channel Mean Reversion",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What does crypto Keltner Channel mean reversion study?",
    options: [
      "A stretch outside the ATR channel and a return toward the EMA midline with liquidity checked.",
      "A breakout that never returns to the channel.",
      "A fixed-distance count.",
      "A Gold-only wick rule.",
    ],
    correctIndex: 0,
    explanation: "Keltner mean reversion studies stretch, midline return, and failed reversion risk in crypto conditions.",
  },
  {
    id: "576a9012-f400-4113-820b-cb86bc5412b0",
    expectedName: "Pivot Point Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should be visible in a Gold pivot point breakout?",
    options: [
      "The central pivot, nearby resistance/support level, breakout close, and wick fakeout risk.",
      "A random candle far from pivot levels.",
      "A fixed-distance count.",
      "A crypto liquidity-depth clue by itself.",
    ],
    correctIndex: 0,
    explanation: "Pivot breakouts need level context and close quality, especially because Gold can reject with sharp wicks.",
  },
  {
    id: "91040b9d-fdfb-4167-ad79-56728a72f857",
    expectedName: "Support-Resistance Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What makes a Forex support-resistance breakout valid for study?",
    options: [
      "A close beyond the horizontal level, retest quality, normal spread, and clear invalidation.",
      "A wick through the level that closes back inside.",
      "A crypto exchange spike.",
      "A Gold-only wick rule.",
    ],
    correctIndex: 0,
    explanation: "The learner needs a clear level, acceptance beyond it, and a failure point back through the level.",
  },
  {
    id: "09b66ace-fc16-485b-b630-fb8e06c51139",
    expectedName: "Pre-London Session Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "4.3",
    domain: "forex",
    prompt: "What defines the Forex pre-London session breakout?",
    options: [
      "A pre-London range, London handoff, breakout close, retest, and false-break risk.",
      "Only a random candle before Europe opens.",
      "A crypto venue-depth reading.",
      "A Gold pivot level with no session context.",
    ],
    correctIndex: 0,
    explanation: "This plan is session-specific. The pre-London box and London handoff are the teaching anchors.",
  },
  {
    id: "38e66098-f01a-40cb-a4e6-5046b8f01ab6",
    expectedName: "RSI Overbought/Oversold Mean Reversion",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What should a crypto RSI mean-reversion setup avoid?",
    options: [
      "Treating an RSI extreme as enough without a price reaction and liquidity check.",
      "Checking whether price accepts back toward the mean.",
      "Watching for failed reversion continuation.",
      "Reviewing spread percentage during volatility.",
    ],
    correctIndex: 0,
    explanation: "RSI extremes are only context. The learner still needs price reaction, mean path, and crypto liquidity review.",
  },
  {
    id: "3f2bef97-a5dc-4175-a8e1-0a8ca0920087",
    expectedName: "Pivot Point Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should the intraday Gold pivot breakout focus on?",
    options: [
      "A 5m or 15m pivot break, quick retest, and wick fakeout risk.",
      "A weekly-only macro view.",
      "A fixed-distance threshold.",
      "A crypto funding-rate change.",
    ],
    correctIndex: 0,
    explanation: "The intraday pivot version studies fast level behavior and immediate rejection risk.",
  },
  {
    id: "3691cf4d-9351-43c5-a55c-cc82c3e7afca",
    expectedName: "New York Session Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "4.4",
    domain: "forex",
    prompt: "What matters most in the Forex New York session breakout?",
    options: [
      "The pre-New York range, session expansion, retest, news-wick trap, and normal spread.",
      "A crypto venue imbalance only.",
      "A Gold wick rule with no currency context.",
      "A moving average cross with no session range.",
    ],
    correctIndex: 0,
    explanation: "The New York breakout is a session-range lesson. It needs range boundaries and close quality after expansion.",
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
    throw new Error("Pilot seed list contains duplicate strategy IDs.");
  }
  for (const target of PILOT_20_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Pilot seed list missing target: ${target.ordinal} ${target.id}`);
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
    throw new Error(`Pilot curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING pilot 20 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: PILOT_20_TARGETS.find(target => target.id === seed.id)?.ordinal,
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

  const seedsByModule = new Map<string, PilotSeed[]>();
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

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- PILOT 20 CURRICULUM MAP APPLIED ---");
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
