import fs from "fs";
import path from "path";

const level2Syllabus = [
  {
    num: "2.1",
    title: "Chart Basics",
    objective: "Understand candlestick anatomy (OHLC) and timeframe relationship basics.",
    coreKeys: ["chart-basics-intro", "candle-anatomy", "ohlc-delivery", "timeframe-intro", "chart-basics-debrief"],
    fxKeys: ["forex-pip-value"],
    gdKeys: ["gold-spread-volatility"],
    crKeys: ["crypto-venue-mismatch"]
  },
  {
    num: "2.2",
    title: "Fractal Nature of Price",
    objective: "Identify how price structure repeats fractal patterns across scales.",
    coreKeys: ["fractal-nature-intro", "swing-mirroring", "multi-timeframe-scaling", "structure-fractions", "fractal-nature-debrief"],
    fxKeys: ["forex-h4-m15-scaling"],
    gdKeys: ["gold-wick-clusters-scaling"],
    crKeys: ["crypto-venue-spikes-scaling"]
  },
  {
    num: "2.3",
    title: "Primary Price Feeds",
    objective: "Distinguish between institutional direct price feeds and retail B-Book brokers.",
    coreKeys: ["price-feeds-intro", "direct-market-access", "b-book-broker", "spread-slippage", "price-feeds-debrief"],
    fxKeys: ["forex-stp-execution"],
    gdKeys: ["gold-comex-futures-feeds"],
    crKeys: ["crypto-cex-dex-fragmentation"]
  },
  {
    num: "2.4",
    title: "The Range Model",
    objective: "Model price movement inside dealing ranges using equilibrium and discount/premium arrays.",
    coreKeys: ["range-model-intro", "dealing-range-bounds", "equilibrium-line", "discount-premium-arrays", "range-model-debrief"],
    fxKeys: ["forex-adr-stretch-range"],
    gdKeys: ["gold-volatility-adjusted-zones"],
    crKeys: ["crypto-perp-funding-premium"]
  },
  {
    num: "2.5",
    title: "Market Structure: Part 1",
    objective: "Identify primary swing highs and swing lows to establish structure.",
    coreKeys: ["structure-part1-intro", "protected-swings", "swing-validation", "market-structure-breaks", "structure-part1-debrief"],
    fxKeys: ["forex-session-structure-limits"],
    gdKeys: ["gold-wick-structure-sweeps"],
    crKeys: ["crypto-venue-confirmed-structure"]
  },
  {
    num: "2.6",
    title: "Market Structure Shift (MSS)",
    objective: "Identify change of character (ChoCh) and displacement confirming a structure shift.",
    coreKeys: ["mss-intro", "displacement-confirm", "swing-invalidation", "change-of-character", "mss-debrief"],
    fxKeys: ["forex-london-open-mss"],
    gdKeys: ["gold-rapid-sweeps-mss"],
    crKeys: ["crypto-funding-oi-shift"]
  },
  {
    num: "2.7",
    title: "The Trend Fallacy",
    objective: "Why price moves between liquidity pools rather than continuous trendlines.",
    coreKeys: ["trend-fallacy-intro", "liquidity-to-liquidity", "retail-trend-traps", "order-matching-flow", "trend-fallacy-debrief"],
    fxKeys: ["forex-session-rotation-fallacy"],
    gdKeys: ["gold-safe-haven-sweeps"],
    crKeys: ["crypto-tokenomics-sweeps"]
  },
  {
    num: "2.8",
    title: "Internal vs External Structure",
    objective: "Filter minor internal pullbacks from major external dealing ranges.",
    coreKeys: ["internal-external-intro", "minor-pullbacks", "major-dealing-ranges", "layer-filtering", "internal-external-debrief"],
    fxKeys: ["forex-session-vs-macro-structure"],
    gdKeys: ["gold-wicks-vs-daily-anchors"],
    crKeys: ["crypto-altcoin-vs-btc-structure"]
  },
  {
    num: "2.9",
    title: "Displacement",
    objective: "Measure raw displacement using large body-to-wick ratios and volume.",
    coreKeys: ["displacement-intro", "body-to-wick-ratio", "volume-displacement", "commitment-candles", "displacement-debrief"],
    fxKeys: ["forex-london-breakout-displacement"],
    gdKeys: ["gold-news-displacement-wicks"],
    crKeys: ["crypto-perp-liquidation-displacement"]
  },
  {
    num: "2.10",
    title: "Breakouts vs Failed Breaks",
    objective: "Evaluate close quality to differentiate valid breakouts from sweeps.",
    coreKeys: ["breakouts-failed-intro", "close-quality-validation", "sweep-rejection-signs", "breakout-confirmation-rules", "breakouts-failed-debrief"],
    fxKeys: ["forex-session-breakout-fade"],
    gdKeys: ["gold-stop-sweeps-rejections"],
    crKeys: ["crypto-spot-perp-deviations"]
  },
  {
    num: "2.11",
    title: "Boundary Areas (BSL/SSL)",
    objective: "Map buy-side and sell-side liquidity clusters where resting orders sit.",
    coreKeys: ["boundary-areas-intro", "bsl-mapping", "ssl-mapping", "resting-liquidity-pools", "boundary-areas-debrief"],
    fxKeys: ["forex-session-extremes-liquidity"],
    gdKeys: ["gold-wicks-liquidity-pools"],
    crKeys: ["crypto-liquidation-heatmap-zones"]
  },
  {
    num: "2.12",
    title: "External Range Boundary",
    objective: "Map the highest and lowest points of the HTF range to set boundaries.",
    coreKeys: ["external-boundary-intro", "htf-range-extremes", "boundary-acceptance", "boundary-rejection", "external-boundary-debrief"],
    fxKeys: ["forex-daily-adr-bands"],
    gdKeys: ["gold-monthly-range-bounds"],
    crKeys: ["crypto-cex-dex-margin-bounds"]
  },
  {
    num: "2.13",
    title: "HTF Anchors",
    objective: "Anchor key support and resistance zones on Daily and Weekly charts.",
    coreKeys: ["htf-anchors-intro", "daily-weekly-levels", "anchor-strength-metrics", "confluence-anchors", "htf-anchors-debrief"],
    fxKeys: ["forex-dxy-structure-anchors"],
    gdKeys: ["gold-treasury-yield-levels"],
    crKeys: ["crypto-btc-macro-levels"]
  },
  {
    num: "2.14",
    title: "Session Windows",
    objective: "Coordinate execution plans with high-volume session openings.",
    coreKeys: ["session-windows-intro", "london-ny-opens", "volume-overlap-windows", "timing-rules-execution", "session-windows-debrief"],
    fxKeys: ["forex-session-overlaps"],
    gdKeys: ["gold-comex-open-window"],
    crKeys: ["crypto-funding-settlement-times"]
  },
  {
    num: "2.15",
    title: "Level 2 Review",
    objective: "Synthesize all Level 2 concepts to prepare for the Execution Mechanics exam.",
    coreKeys: ["level2-review-intro", "execution-mechanics-checklist", "interactive-terminal-prep", "exam-rubric-overview", "level2-review-debrief"],
    fxKeys: ["forex-multi-pair-audit"],
    gdKeys: ["gold-macro-checklist"],
    crKeys: ["crypto-spot-futures-checklist"]
  }
];

function generateDetailedCard(mNum: string, mTitle: string, track: string, cardIndex: number, visualKeys: string[], totalCards: number) {
  const isBrief = cardIndex === 1;
  const isSummary = cardIndex === totalCards;
  const isPractice = cardIndex === totalCards - 1;
  const vKey = visualKeys[(cardIndex - 1) % visualKeys.length] || "";
  const type = isBrief ? "mission_brief" : isSummary ? "summary" : isPractice ? "practice" : "concept";

  let title = `${mTitle} - ${track} Card ${cardIndex}`;
  let body = "";
  let keyTerms: { term: string; definition: string }[] = [];
  let whyThisMatters = "";
  let realLifeExample = "";
  let commonMistake = "";
  let quickNote = "";

  if (track === "Core") {
    title = `Core Concept ${cardIndex}: ${mTitle}`;
    body = `### Execution Mechanics Fundamentals\n\nIn Level 2, we master the execution discipline of **${mTitle}**. Successful execution requires a strict focus on order matching, fill quality, and identifying exact structural anchors. We do not react to emotional wiggles; we operate as rule-based execution engines.\n\n* **Pillar Focus**: Identify direct institutional footprints rather than retail chart indicators.\n* **Execution Parameter**: Wait for exact candle or level parameters before routing order entries.`;
    keyTerms = [
      { term: "Order Routing", definition: "Sending execution requests to specific matching engines." },
      { term: "Fill Quality", definition: "The difference between requested price and executed price." }
    ];
    whyThisMatters = `Poor execution mechanics will consume your edge through slippage and wide spreads.`;
    realLifeExample = `A trader monitors the L2 order matching book and waits for a discount block limit retest.`;
    commonMistake = `Impulsively executing market orders during thin liquidity session handoffs.`;
    quickNote = `Audit the feed, identify the anchor, then execute.`;
  } else if (track === "Forex") {
    title = `Forex roadway: ${mTitle} (${cardIndex})`;
    body = `### Currency Execution Adaptations\n\nIn Forex, currency pairs are traded across decentralized STP/ECN networks. The execution of **${mTitle}** requires calculating exact pip values and accounting for spread shifts across session openings.\n\n* **FX Execution**: Synchronize entries with peak London or New York volume.`;
    keyTerms = [
      { term: "STP Broker", definition: "Straight-Through Processing broker routing orders directly to liquidity providers." },
      { term: "Pip Value", definition: "The monetary value of a single digit price movement based on lot size." }
    ];
    whyThisMatters = `Forex spreads widen dramatically at session handoffs. Executing then increases frictional costs.`;
    realLifeExample = `Executing a EUR/USD long position precisely at the London open when spreads compress to minimums.`;
    commonMistake = `Trading large lot sizes on minor pairs during low-liquidity Asian hours.`;
    quickNote = `Forex execution demands session alignment and spread awareness.`;
  } else if (track === "Gold") {
    title = `Gold roadway: ${mTitle} (${cardIndex})`;
    body = `### Precious Metals Execution Adaptations\n\nGold (XAU/USD) is a highly volatile instrument sensitive to COMEX futures positioning. Executing **${mTitle}** requires buffering stop triggers to accommodate deep sweep spikes.\n\n* **Gold Execution**: Account for deep wicks when setting execution levels.`;
    keyTerms = [
      { term: "COMEX Feed", definition: "Commodity Exchange price data representing central futures liquidity." },
      { term: "Slippage Buffer", definition: "Configuring entry limits to prevent bad fills during rapid news spikes." }
    ];
    whyThisMatters = `Gold wicks sweep stops violently. Tight execution boundaries get stopped out prematurely.`;
    realLifeExample = `Placing an execution limit order 15 pips below the obvious horizontal level to catch the spike-rejection.`;
    commonMistake = `Chasing rapid market wicks during high-impact US macro announcements.`;
    quickNote = `Gold demands wide slippage buffers and wick-tolerant invalidation anchors.`;
  } else if (track === "Crypto") {
    title = `Crypto roadway: ${mTitle} (${cardIndex})`;
    body = `### Digital Asset Execution Adaptations\n\nCrypto execution is fragmented across multiple centralized and decentralized exchanges. Executing **${mTitle}** demands verifying the spot-perp premium and leverage funding rates.\n\n* **Crypto Execution**: Compare spot volumes to prevent perpetual fakeouts.`;
    keyTerms = [
      { term: "Spot-Perp Deviation", definition: "Discrepancy between spot token price and perpetual futures contract price." },
      { term: "Funding Rollover", definition: "Settlement window (usually 8h) affecting perpetual carry cost." }
    ];
    whyThisMatters = `Perpetual sweeps often occur without spot backing. Check spot exchange books for real support.`;
    realLifeExample = `Entering a BTC limit buy order on Binance Spot while perp funding is negative and short liquidations begin.`;
    commonMistake = `Executing high-leverage perpetual positions when funding rates are heavily skewed against your direction.`;
    quickNote = `Crypto execution requires spot confirmation and funding rate checks.`;
  }

  const card: any = {
    type,
    title,
    label: `${track} Track Pillar`,
    visualKey: vKey,
    body,
    context: {
      keyTerms,
      whyThisMatters,
      realLifeExample,
      commonMistake,
      quickNote
    }
  };

  if (isPractice) {
    card.type = "practice";
    card.taskData = {
      type: "choice_block",
      question: `What is the disciplined ${track} response for ${mTitle}?`,
      options: [
        { id: "0", text: `Wait for the execution parameters to align perfectly with your pre-written plan.`, isCorrect: true, feedback: "Correct! Execution must be rule-based, not emotional." },
        { id: "1", text: "Execute immediately to avoid missing a fast-moving price candle.", isCorrect: false, feedback: "Incorrect. Impulse execution is a gambler's trap." }
      ]
    };
  }

  return card;
}

function generateModuleContent(m: typeof level2Syllabus[0]) {
  const modDir = path.join(__dirname, "../src/content/level-2", `module-2-${m.num.split(".")[1]}`);
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  const coreCards = [];
  const forexCards = [];
  const goldCards = [];
  const cryptoCards = [];

  for (let i = 1; i <= 15; i++) {
    coreCards.push(generateDetailedCard(m.num, m.title, "Core", i, m.coreKeys, 15));
  }
  for (let i = 1; i <= 8; i++) {
    forexCards.push(generateDetailedCard(m.num, m.title, "Forex", i, m.fxKeys, 8));
    goldCards.push(generateDetailedCard(m.num, m.title, "Gold", i, m.gdKeys, 8));
    cryptoCards.push(generateDetailedCard(m.num, m.title, "Crypto", i, m.crKeys, 8));
  }

  fs.writeFileSync(path.join(modDir, "core.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const coreCards: LessonCard[] = ${JSON.stringify(coreCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "forex.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const forexCards: LessonCard[] = ${JSON.stringify(forexCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "gold.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const goldCards: LessonCard[] = ${JSON.stringify(goldCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "crypto.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const cryptoCards: LessonCard[] = ${JSON.stringify(cryptoCards, null, 2)};\n`);

  fs.writeFileSync(path.join(modDir, "index.ts"), `import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module2${m.num.split(".")[1]}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 2,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "beginner",
  orderIndex: ${parseInt(m.num.split(".")[1])},
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
`);
}

function run() {
  console.log("Generating 15 Modules for Level 2...");
  for (const m of level2Syllabus) {
    generateModuleContent(m);
    console.log(`  Module 2.${m.num.split(".")[1]} generated successfully.`);
  }

  // Generate Level 2 Index file
  const imports = level2Syllabus.map(m => `import { module2${m.num.split(".")[1]} } from "./module-2-${m.num.split(".")[1]}";`).join("\n");
  const exports = `export const level2Curriculum: AcademyModule[] = [\n` + level2Syllabus.map(m => `  module2${m.num.split(".")[1]}`).join(",\n") + `\n];`;
  
  fs.writeFileSync(
    path.join(__dirname, "../src/content/level-2/index.ts"),
    `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`
  );
  console.log("Level 2 index.ts updated.");
}

run();
