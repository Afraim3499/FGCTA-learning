import fs from "fs";
import path from "path";

const level4Syllabus = [
  {
    num: "4.1",
    title: "The Daily Cycle Basics",
    objective: "Understand the core session cycle of consolidation, manipulation, and distribution.",
    coreKeys: ["daily-cycle-intro", "asia-london-ny-flow", "judas-swing-basics", "distribution-mechanics", "daily-cycle-debrief"],
    fxKeys: ["forex-daily-cycle"],
    gdKeys: ["gold-daily-cycle"],
    crKeys: ["crypto-daily-cycle"]
  },
  {
    num: "4.2",
    title: "The Asian Range",
    objective: "Map the Asian range and identify its boundaries as early key liquidity pools.",
    coreKeys: ["asia-range-intro", "asian-boundaries", "range-extension-traps", "equilibrium-reference", "asia-range-debrief"],
    fxKeys: ["forex-asia-range"],
    gdKeys: ["gold-asia-range"],
    crKeys: ["crypto-asia-range"]
  },
  {
    num: "4.3",
    title: "The London Open",
    objective: "Identify Judas Swing manipulation sweeps at London open that form the LOD/HOD.",
    coreKeys: ["london-open-intro", "judas-swing-mechanics", "sweep-rejection-signatures", "london-low-high-day", "london-open-debrief"],
    fxKeys: ["forex-london-open"],
    gdKeys: ["gold-london-open"],
    crKeys: ["crypto-london-open"]
  },
  {
    num: "4.4",
    title: "The NY Open & Overlap",
    objective: "Recognize the NY session overlap volatility and trade London reversals or continuations.",
    coreKeys: ["ny-open-intro", "london-reversal-signs", "ny-continuation-mechanics", "session-handoffs", "ny-open-debrief"],
    fxKeys: ["forex-ny-open"],
    gdKeys: ["gold-ny-open"],
    crKeys: ["crypto-ny-open"]
  },
  {
    num: "4.5",
    title: "Power of 3 (PO3)",
    objective: "Deconstruct the daily candle into Accumulation, Manipulation, and Distribution phases.",
    coreKeys: ["po3-template-intro", "ohlc-phase-mapping", "accumulation-phase", "manipulation-sweeps", "po3-template-debrief"],
    fxKeys: ["forex-po3-template"],
    gdKeys: ["gold-po3-template"],
    crKeys: ["crypto-po3-template"]
  },
  {
    num: "4.6",
    title: "Midnight Open Anchor",
    objective: "Utilize the 12:00 AM EST Midnight Opening Price as the primary algorithmic line of accumulation.",
    coreKeys: ["midnight-open-intro", "midnight-price-anchor", "above-below-midnight", "true-day-direction", "midnight-open-debrief"],
    fxKeys: ["forex-midnight-open"],
    gdKeys: ["gold-midnight-open"],
    crKeys: ["crypto-midnight-open"]
  },
  {
    num: "4.7",
    title: "London Killzone",
    objective: "Master the execution parameters of the 2:00 AM - 5:00 AM EST London Killzone.",
    coreKeys: ["london-killzone-intro", "london-hours-window", "london-liquidity-sweeps", "london-setup-filters", "london-killzone-debrief"],
    fxKeys: ["forex-london-killzone"],
    gdKeys: ["gold-london-killzone"],
    crKeys: ["crypto-london-killzone"]
  },
  {
    num: "4.8",
    title: "NY Killzone",
    objective: "Master the execution parameters of the 7:00 AM - 10:00 AM EST New York Killzone.",
    coreKeys: ["ny-killzone-intro", "ny-hours-window", "ny-macro-overlaps", "ny-news-filters", "ny-killzone-debrief"],
    fxKeys: ["forex-ny-killzone"],
    gdKeys: ["gold-ny-killzone"],
    crKeys: ["crypto-ny-killzone"]
  },
  {
    num: "4.9",
    title: "London Close Killzone",
    objective: "Understand position liquidations and profit-taking targets during the 10:00 AM - 12:00 PM EST London Close.",
    coreKeys: ["london-close-intro", "london-close-hours", "counter-trend-retracements", "position-unwinding", "london-close-debrief"],
    fxKeys: ["forex-london-close"],
    gdKeys: ["gold-london-close"],
    crKeys: ["crypto-london-close"]
  },
  {
    num: "4.10",
    title: "Macro Windows",
    objective: "Audit algorithmic delivery during high-precision 20-minute macro windows.",
    coreKeys: ["macro-windows-intro", "macro-time-frames", "algo-spoofing-signs", "liquidity-run-macro", "macro-windows-debrief"],
    fxKeys: ["forex-macro-windows"],
    gdKeys: ["gold-macro-windows"],
    crKeys: ["crypto-macro-windows"]
  },
  {
    num: "4.11",
    title: "Weekly Cycles",
    objective: "Map the formation of the High/Low of the Week (HOW/LOW) on Monday or Tuesday.",
    coreKeys: ["weekly-cycles-intro", "mon-tue-low-high", "mid-week-reversals", "weekly-range-expansion", "weekly-cycles-debrief"],
    fxKeys: ["forex-weekly-cycles"],
    gdKeys: ["gold-weekly-cycles"],
    crKeys: ["crypto-weekly-cycles"]
  },
  {
    num: "4.12",
    title: "Time & Price Confluences",
    objective: "Synthesize killzone clock windows with order blocks and Fair Value Gap anchors.",
    coreKeys: ["confluence-tp-intro", "session-anchor-confluence", "time-price-stacking", "high-prob-windows", "confluence-tp-debrief"],
    fxKeys: ["forex-confluence-tp"],
    gdKeys: ["gold-confluence-tp"],
    crKeys: ["crypto-confluence-tp"]
  },
  {
    num: "4.13",
    title: "Time-based Invalidation",
    objective: "Invalidate trade blueprints when setup targets are missed within killzone windows.",
    coreKeys: ["time-invalidation-intro", "window-expiration-rules", "time-decay-plan", "inactive-session-pass", "time-invalidation-debrief"],
    fxKeys: ["forex-time-invalidation"],
    gdKeys: ["gold-time-invalidation"],
    crKeys: ["crypto-time-invalidation"]
  },
  {
    num: "4.14",
    title: "Time & Price Checklists",
    objective: "Grade daily session and weekly cycle eligibility before committing execution orders.",
    coreKeys: ["tp-checklist-intro", "session-readiness-checks", "narrative-continuity", "timing-checks", "tp-checklist-debrief"],
    fxKeys: ["forex-tp-checklist"],
    gdKeys: ["gold-tp-checklist"],
    crKeys: ["crypto-tp-checklist"]
  },
  {
    num: "4.15",
    title: "Level 4 Review",
    objective: "Synthesize all Time & Price concepts to prepare for the weekly cycle capstone scenario and knowledge exam.",
    coreKeys: ["level4-review-intro", "weekly-narrative-audit", "time-price-checklist", "exam-prep-tp", "level4-review-debrief"],
    fxKeys: ["forex-multi-pair-tp"],
    gdKeys: ["gold-comex-tp"],
    crKeys: ["crypto-cex-tp"]
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
    body = `### Time & Price Delivery Principles\n\nIn Level 4, we analyze the relationship between session windows and price delivery. Understanding **${mTitle}** is about decoding institutional timing rather than chasing raw patterns out of session.\n\n* **Algorithmic Timing**: Central bank algorithms only activate order books at highly specific Killzones.\n* **Execution Filter**: Align timing parameters to avoid over-trading during low-volume hours.`;
    keyTerms = [
      { term: "Killzone", definition: "High-volume session hours where market volatility expands rapidly." },
      { term: "Daily Cycle", definition: "The programmed progression of consolidation, manipulation, and distribution." }
    ];
    whyThisMatters = `Price is irrelevant without time. A high-probability setup that forms during the dead Asian session is highly prone to manipulation.`;
    realLifeExample = `A trader monitors the NY open to execute a trade only within the established 7:00 AM - 10:00 AM EST Killzone window.`;
    commonMistake = `Executing positions during illiquid session handoffs or major holiday breaks.`;
    quickNote = `Sit on your hands when the clock is red. Action is only valid when the session opens.`;
  } else if (track === "Forex") {
    title = `Forex roadway: ${mTitle} (${cardIndex})`;
    body = `### FX Time & Price Adaptations\n\nIn Forex, pricing clocks are tied to global session handoffs. Tracking **${mTitle}** requires recognizing London and NY openings when liquidity is matched.\n\n* **FX Timing**: Align footprint entry confirmations with major bank clock alignments.`;
    keyTerms = [
      { term: "Judas Swing", definition: "A sharp session-open sweep designed to capture liquidity before the true trend begins." },
      { term: "Session Handoff", definition: "The transitional hours where liquidity switches from one global center to another." }
    ];
    whyThisMatters = `Forex sweeps are highly time-dependent. The London Open will regularly manipulate Asian boundaries to engineer pricing.`;
    realLifeExample = `Identifying a GBP/USD Judas Swing that sweeps the Asian range low exactly at 3:15 AM EST.`;
    commonMistake = `Trading pairs outside of their native session (e.g. trading EUR/GBP during Asian hours).`;
    quickNote = `Synchronize your FX execution limits with London and NY session overlap windows.`;
  } else if (track === "Gold") {
    title = `Gold roadway: ${mTitle} (${cardIndex})`;
    body = `### Gold Time & Price Adaptations\n\nGold is highly sensitive to US macroeconomic releases. Tracking **${mTitle}** requires absolute awareness of daily macro window injections.\n\n* **Gold Timing**: Set entry limits during COMEX futures openings to capture institutional volume surges.`;
    keyTerms = [
      { term: "COMEX Open", definition: "The Chicago Mercantile Exchange open where physical futures orders are matching." },
      { term: "Macro Windows", definition: "20-minute periods where algos update bids and asks aggressively." }
    ];
    whyThisMatters = `Gold spikes are driven by scheduled macro events. Trading immediately before NFP or CPI is gambling.`;
    realLifeExample = `Waiting for the NY Open volatility to subside, then executing gold entries at the 9:50 AM macro window.`;
    commonMistake = `Failing to check the economic calendar for high-impact USD events before setting Gold limit orders.`;
    quickNote = `Gold volume surges are highly concentrated around the COMEX open and US macro windows.`;
  } else if (track === "Crypto") {
    title = `Crypto roadway: ${mTitle} (${cardIndex})`;
    body = `### Crypto Time & Price Adaptations\n\nCrypto operates 24/7, but institutional volume matches global financial hours. Tracking **${mTitle}** requires looking at CEX funding settlements and US derivatives opens.\n\n* **Crypto Timing**: Align perp volatility checks with Asian open and US derivatives session handoffs.`;
    keyTerms = [
      { term: "Funding Settlement", definition: "The 8-hour funding intervals (e.g. 00:00, 08:00 UTC) where leveraged positions pay interest." },
      { term: "CME Bitcoin Futures", definition: "Centralized institutional Bitcoin derivatives that close over weekends." }
    ];
    whyThisMatters = `Crypto runs all day, but true displacement occurs when US stock and CME futures markets are active.`;
    realLifeExample = `Buying a BTC spot breakout that occurs exactly at the US equities open with backing from CME volume delta.`;
    commonMistake = `Trading thin altcoin ranges during low-volume weekend sessions.`;
    quickNote = `Weekend crypto ranges are highly prone to sweep-rejections on Monday open.`;
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
        { id: "0", text: `Wait for the Killzone timing parameters to align perfectly with your pre-written plan.`, isCorrect: true, feedback: "Correct! Timing is the primary filter for institutional setups." },
        { id: "1", text: "Execute immediately if the price structure looks good, regardless of current session hours.", isCorrect: false, feedback: "Incorrect. Out-of-session trades lack volume backing and are prone to manipulation." }
      ]
    };
  }

  return card;
}

function generateModuleContent(m: typeof level4Syllabus[0]) {
  const modDir = path.join(__dirname, "../src/content/level-4", `module-4-${m.num.split(".")[1]}`);
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

export const module4${m.num.split(".")[1]}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 4,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "advanced",
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
  console.log("Generating 15 Modules for Level 4...");
  for (const m of level4Syllabus) {
    generateModuleContent(m);
    console.log(`  Module 4.${m.num.split(".")[1]} generated successfully.`);
  }

  // Generate Level 4 Index file
  const imports = level4Syllabus.map(m => `import { module4${m.num.split(".")[1]} } from "./module-4-${m.num.split(".")[1]}";`).join("\n");
  const exports = `export const level4Curriculum: AcademyModule[] = [\n` + level4Syllabus.map(m => `  module4${m.num.split(".")[1]}`).join(",\n") + `\n];`;
  
  const contentDir = path.join(__dirname, "../src/content/level-4");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`
  );
  console.log("Level 4 index.ts updated.");
}

run();
