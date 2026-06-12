import * as fs from "fs";
import * as path from "path";

const targetDir = path.resolve(__dirname, "../content/level-5");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

interface CardData {
  type: string;
  title: string;
  label: string;
  visualKey: string;
  body: string;
  context: {
    keyTerms: { term: string; definition: string }[];
    whyThisMatters: string;
    realLifeExample: string;
    commonMistake: string;
    quickNote: string;
  };
  taskData?: any;
}

const modulesMetadata = [
  {
    num: "5.1",
    title: "The Kelly Criterion & Expected Value Optimization",
    objective: "Learn the mathematics of expected value optimization and optimal fractional position sizing.",
    visualKeys: { core: "kelly-criterion-basics", forex: "kelly-criterion-basics", gold: "kelly-criterion-basics", crypto: "kelly-criterion-basics" },
    coreConcept: "optimal fraction sizing based on win rate and risk-to-reward metrics",
    forexContext: "aligning base/quote currency pairs and session win rate probabilities",
    goldContext: "managing gold's fat-tail volatility distribution in Kelly sizing models",
    cryptoContext: "factoring in perpetual contract leverage slippage and trading costs"
  },
  {
    num: "5.2",
    title: "Volatility-Adjusted Sizing",
    objective: "Understand how to adjust position size dynamically based on market volatility (ATR) rather than arbitrary pip limits.",
    visualKeys: { core: "volatility-sizing", forex: "volatility-sizing", gold: "volatility-sizing", crypto: "volatility-sizing" },
    coreConcept: "ATR-based stop loss adjustments vs flat sizing models",
    forexContext: "modifying size based on session-specific ATR shifts (Asian range vs London expansion)",
    goldContext: "incorporating XAU/USD's heavy-tail price extensions into stop buffers",
    cryptoContext: "adjusting sizes dynamically to account for funding-rate-driven volatility"
  },
  {
    num: "5.3",
    title: "Dynamic Risk Sizing Calculations",
    objective: "Learn the exact mathematical formulas to compute unit sizes based on capital limits and stop distances.",
    visualKeys: { core: "dynamic-calculator-drill", forex: "dynamic-calculator-drill", gold: "dynamic-calculator-drill", crypto: "dynamic-calculator-drill" },
    coreConcept: "calculating lot sizes and risk exposure from account equity limits",
    forexContext: "calculating pip value variables across major, minor, and exotic currency pairs",
    goldContext: "tick and contract value multipliers for standard spot Gold (XAU/USD) contracts",
    cryptoContext: "calculating contract quantities for perpetual swaps and spot crypto assets"
  },
  {
    num: "5.4",
    title: "Scaling Out: Risk-Free Funding",
    objective: "Master the psychology and mathematics of taking partial profits at 1R to finance remaining trade risk.",
    visualKeys: { core: "scaling-out-basics", forex: "scaling-out-basics", gold: "scaling-out-basics", crypto: "scaling-out-basics" },
    coreConcept: "scaling out 50% of size at 1R and moving stop loss to Break-Even (BE)",
    forexContext: "executing partial take-profits at session boundaries or key liquidity arrays",
    goldContext: "taking aggressive partials in gold to secure gains before wicks retrace",
    cryptoContext: "using automated split limit orders on fragmented exchange books"
  },
  {
    num: "5.5",
    title: "Scaling In: Pyramiding Rules",
    objective: "Learn the strict conditions under which size can be added to an active winning position.",
    visualKeys: { core: "scaling-in-pyramiding", forex: "scaling-in-pyramiding", gold: "scaling-in-pyramiding", crypto: "scaling-in-pyramiding" },
    coreConcept: "adding positions at subsequent structure points while trailing initial stops to lock risk",
    forexContext: "pyramiding during strong London or New York distribution expansions",
    goldContext: "scaling in during gold's high-momentum breakout and retest cycles",
    cryptoContext: "piling size onto high-momentum BTC trends at FVG mitigations"
  },
  {
    num: "5.6",
    title: "Stop-Loss Placement Mechanics",
    objective: "Differentiate between structural invalidation levels and arbitrary, psychology-driven stop-loss targets.",
    visualKeys: { core: "stop-loss-placement", forex: "stop-loss-placement", gold: "stop-loss-placement", crypto: "stop-loss-placement" },
    coreConcept: "placing stops behind structural extremes where the trade thesis is mathematically dead",
    forexContext: "placing stops behind session highs/lows or major daily swing points",
    goldContext: "allocating wider ATR wicks buffers to survive gold's hunting spikes",
    cryptoContext: "placing stops outside high-leverage liquidation zones and exchange order books"
  },
  {
    num: "5.7",
    title: "Break-Even Stop Protocols",
    objective: "Establish rules for moving stop losses to entry without prematurely suffocating high-probability trades.",
    visualKeys: { core: "break-even-protocols", forex: "break-even-protocols", gold: "break-even-protocols", crypto: "break-even-protocols" },
    coreConcept: "moving stop to entry price only after structural displacement or liquidity sweeps",
    forexContext: "BE stop protocols following a confirmed London Open breakout shift",
    goldContext: "avoiding premature BE triggers on gold due to double-top sweeps",
    cryptoContext: "factoring in exchange maker/taker fees and slippage when setting BE price"
  },
  {
    num: "5.8",
    title: "Trailing Stop Architectures",
    objective: "Master the mechanics of trailing stops behind swing structure to secure maximum trend expansion.",
    visualKeys: { core: "trailing-stop-architectures", forex: "trailing-stop-architectures", gold: "trailing-stop-architectures", crypto: "trailing-stop-architectures" },
    coreConcept: "trailing stops behind higher timeframe swing points vs moving averages or ATR bands",
    forexContext: "trailing stops behind intraday session swing highs/lows in active trends",
    goldContext: "using ATR-based trailing parameters to capture parabolic gold breakouts",
    cryptoContext: "algorithmic trailing protocols to ride high-momentum crypto trends"
  },
  {
    num: "5.9",
    title: "The Asymmetric Gear Shift",
    objective: "Implement the drawdown circuit rules that protect your equity curve during statistical variance.",
    visualKeys: { core: "asymmetric-gear-shift", forex: "asymmetric-gear-shift", gold: "asymmetric-gear-shift", crypto: "asymmetric-gear-shift" },
    coreConcept: "halving risk parameters (1% -> 0.5% -> 0.25%) after consecutive losing trades",
    forexContext: "reducing sizing during low-volume sessions or choppy range conditions",
    goldContext: "protecting capital curves during gold's low-liquidity holiday hours",
    cryptoContext: "shifting to lower gears when high correlation causes altcoin sell-off sweeps"
  },
  {
    num: "5.10",
    title: "Circuit Breakers: Daily Loss Limits",
    objective: "Learn to enforce absolute daily loss limits to protect capital from emotional escalation (tilt).",
    visualKeys: { core: "daily-circuit-breaker", forex: "daily-circuit-breaker", gold: "daily-circuit-breaker", crypto: "daily-circuit-breaker" },
    coreConcept: "setting a hard daily loss limit of 3% and shutting down all execution terminals",
    forexContext: "handling high-impact currency news slippage and daily drawdown caps",
    goldContext: "managing XAU/USD high-volatility spikes that trigger daily circuit breakers",
    cryptoContext: "mitigating 24/7 crypto execution fatigue with structured daily lock rules"
  },
  {
    num: "5.11",
    title: "Circuit Breakers: Weekly Loss Limits",
    objective: "Enforce weekly loss caps to pause trading, execute a systems audit, and restore psychological balance.",
    visualKeys: { core: "weekly-circuit-breaker", forex: "weekly-circuit-breaker", gold: "weekly-circuit-breaker", crypto: "weekly-circuit-breaker" },
    coreConcept: "setting a hard weekly loss limit of 6% and locking the trading portal",
    forexContext: "managing weekly loss limits during choppy, consolidation-heavy market profiles",
    goldContext: "suspending gold executions during macro-news heavy weekly ranges",
    cryptoContext: "weekly portfolio drawdown limits and altcoin volatility management"
  },
  {
    num: "5.12",
    title: "Capital Defense vs Narrative Protection",
    objective: "Differentiate between protecting your account balance and defending a market prediction bias.",
    visualKeys: { core: "capital-defense-basics", forex: "capital-defense-basics", gold: "capital-defense-basics", crypto: "capital-defense-basics" },
    coreConcept: "accepting stop-outs as normal business expenses and avoiding narrative bias",
    forexContext: "cutting trades immediately when the DXY invalidates the currency pair correlation",
    goldContext: "stopping out of gold when central bank yields override local technical levels",
    cryptoContext: "exiting crypto setups early if underlying order flow or exchange metrics decay"
  },
  {
    num: "5.13",
    title: "Correlation & Portfolio Risk",
    objective: "Understand how correlated assets duplicate risk, and how to manage aggregate account exposure.",
    visualKeys: { core: "correlation-portfolio-risk", forex: "correlation-portfolio-risk", gold: "correlation-portfolio-risk", crypto: "correlation-portfolio-risk" },
    coreConcept: "calculating total account risk across correlated trades and setting limits",
    forexContext: "preventing double-exposure from trading heavily correlated pairs (e.g. EUR/USD and GBP/USD)",
    goldContext: "managing gold-USD negative correlation risk and metal group exposure limits",
    cryptoContext: "managing correlation beta exposure when trading BTC and altcoins simultaneously"
  },
  {
    num: "5.14",
    title: "Risk Management Checklists",
    objective: "Implement a rigorous pre-trade check list to ensure every parameter aligns with capital rules.",
    visualKeys: { core: "risk-checklists", forex: "risk-checklists", gold: "risk-checklists", crypto: "risk-checklists" },
    coreConcept: "verifying R:R, lot size, stop location, and news schedule before clicking execute",
    forexContext: "pre-trade FX checklist including spread, ADR limits, and upcoming central bank news",
    goldContext: "pre-trade gold checklist including spread expansion checks and yield announcements",
    cryptoContext: "pre-trade crypto checklist including funding rate charges and exchange order book depth"
  },
  {
    num: "5.15",
    title: "Level 5 Review & Final Gate Prep",
    objective: "Synthesize all Level 5 risk architecture concepts and prepare for the Drawdown Crucible exam.",
    visualKeys: { core: "level-5-debrief-recap", forex: "level-5-debrief-recap", gold: "level-5-debrief-recap", crypto: "level-5-debrief-recap" },
    coreConcept: "systematic review of position sizing, scale partials, and drawdown defense",
    forexContext: "final synthesis of session-timing risk and correlation filters in currency markets",
    goldContext: "final synthesis of gold contract multipliers and volatility stop-loss buffers",
    cryptoContext: "final synthesis of crypto leverage risk, perpetual swap fees, and liquidity flushes"
  }
];

const cleanText = (str: string) => str.replace(/`/g, "\\`").replace(/\n/g, "\\n");

modulesMetadata.forEach((meta, mIdx) => {
  const modDirName = `module-5-${mIdx + 1}`;
  const modPath = path.join(targetDir, modDirName);
  if (!fs.existsSync(modPath)) {
    fs.mkdirSync(modPath, { recursive: true });
  }

  // Generate 15 Core cards
  const coreCards: CardData[] = Array.from({ length: 15 }, (_, cIdx) => {
    let type = "concept";
    if (cIdx === 0) type = "mission_brief";
    if (cIdx === 13) type = "practice";
    if (cIdx === 14) type = "summary";

    const isPractice = type === "practice";
    const cardTitle = `${type === "mission_brief" ? "Mission Brief" : type === "summary" ? "Summary" : "Concept"} ${cIdx + 1}: ${meta.title}`;

    const card: CardData = {
      type,
      title: cardTitle,
      label: "Core Track",
      visualKey: meta.visualKeys.core,
      body: `### Core Risk Concept: ${meta.title} (Part ${cIdx + 1})\\n\\nIn Level 5, we master the mathematics of capital defense. Sizing positions correctly is the difference between a professional account curve and retail ruin. This card teaches the **${meta.coreConcept}** to safeguard your capital.\\n\\n* **Capital Preservation**: Never risk more than the calculated fraction of your account.\\n* **Execution Filter**: Align stop loss distances and unit sizes dynamically.`,
      context: {
        keyTerms: [
          { term: "Risk Mitigation", definition: "Proactive strategies to minimize potential losses in volatile conditions." },
          { term: "Expected Value", definition: "The statistical average outcome of a setup over a large sample size." }
        ],
        whyThisMatters: "Without structured risk parameters, a positive-expectancy edge will still bankrupt you due to path dependency.",
        realLifeExample: `A trader calculates their lot size based on a strict ${meta.coreConcept} rule instead of selecting a random unit size.`,
        commonMistake: "Increasing risk size during drawdowns in an attempt to recover losses quickly.",
        quickNote: "Capital survival is the only priority. Protect the downside; the upside takes care of itself."
      }
    };

    if (isPractice) {
      card.taskData = {
        type: "choice_block",
        question: `What is the disciplined response for ${meta.title}?`,
        options: [
          { id: "0", text: `Verify that position sizing adheres strictly to the ${meta.coreConcept} protocol before placing the trade.`, isCorrect: true, feedback: "Correct! Every single position must be mathematically validated." },
          { id: "1", text: "Scale up your risk size after a loss to recover the deficit on the next trade.", isCorrect: false, feedback: "Incorrect. This is revenge trading, which leads to exponential account decay." }
        ]
      };
    }

    return card;
  });

  // Generate 8 Forex cards
  const forexCards: CardData[] = Array.from({ length: 8 }, (_, cIdx) => {
    let type = "concept";
    if (cIdx === 0) type = "mission_brief";
    if (cIdx === 6) type = "practice";
    if (cIdx === 7) type = "summary";

    const isPractice = type === "practice";
    const cardTitle = `Forex Roadway: ${meta.title} (${cIdx + 1})`;

    const card: CardData = {
      type,
      title: cardTitle,
      label: "Forex Roadway",
      visualKey: meta.visualKeys.forex,
      body: `### FX Risk Adaptations: ${meta.title} (Part ${cIdx + 1})\\n\\nForex pairs exhibit specific session behaviors and quote spreads. This card teaches **${meta.forexContext}** to align position sizing with global bank liquidity flows.\\n\\n* **Session Volatility**: Sizing parameters must adjust between quiet Asian hours and volatile London/NY sessions.\\n* **Quote Dynamics**: Factoring in pip values dynamically across base/quote relationships.`,
      context: {
        keyTerms: [
          { term: "Pip Value", definition: "The monetary value of a one-pip movement based on position sizing and currency pair." },
          { term: "Session Volatility", definition: "The typical pricing range and speed of a pair during its active session hours." }
        ],
        whyThisMatters: "Forex spreads expand and liquidity thins during session transitions. Sizing must be adjusted to protect against slippage.",
        realLifeExample: `A trader calculates their lot size on GBP/USD, adjusting for a 15-pip stop loss to absorb London Open volatility.`,
        commonMistake: "Trading exotic pairs with massive spreads using the same tight stop loss parameters as EUR/USD.",
        quickNote: "Understand your pair's session ATR before locking in your execution size."
      }
    };

    if (isPractice) {
      card.taskData = {
        type: "choice_block",
        question: `What is the disciplined Forex response for ${meta.title}?`,
        options: [
          { id: "0", text: `Calculate sizing based on current pair-specific ATR and session timing parameters.`, isCorrect: true, feedback: "Correct! Volatility-based adjustment is essential for Forex survival." },
          { id: "1", text: "Use a fixed 10-pip stop loss on all Forex pairs regardless of volatility or news status.", isCorrect: false, feedback: "Incorrect. Fixed pips fail to account for differing pair behaviors and lead to premature stop-outs." }
        ]
      };
    }

    return card;
  });

  // Generate 8 Gold cards
  const goldCards: CardData[] = Array.from({ length: 8 }, (_, cIdx) => {
    let type = "concept";
    if (cIdx === 0) type = "mission_brief";
    if (cIdx === 6) type = "practice";
    if (cIdx === 7) type = "summary";

    const isPractice = type === "practice";
    const cardTitle = `Gold Roadway: ${meta.title} (${cIdx + 1})`;

    const card: CardData = {
      type,
      title: cardTitle,
      label: "Gold Roadway",
      visualKey: meta.visualKeys.gold,
      body: `### Gold Risk Adaptations: ${meta.title} (Part ${cIdx + 1})\\n\\nGold (XAU/USD) is a highly volatile commodity driven by yield shifts and central bank flows. This card teaches **${meta.goldContext}** to manage metal-specific risk profiles.\\n\\n* **Heavy-Tail Spikes**: Gold regularly prints long wicks that sweep liquidity zones aggressively.\\n* **Contract Multipliers**: Gold pricing moves in cents and dollars, requiring point-to-risk translations.`,
      context: {
        keyTerms: [
          { term: "Wick Buffer", definition: "Extra space added to a stop loss to survive temporary high-volatility sweeps." },
          { term: "Point Value", definition: "The dollar value of a $1.00 move in gold price per standard contract lot." }
        ],
        whyThisMatters: "Gold volatility is asymmetric. Zone reactions are fast, and tight stops without wick buffers will get hunted.",
        realLifeExample: "Allowing a $1.50 point buffer on a Gold long position, adjusting lot size downward to keep risk at exactly 1%.",
        commonMistake: "Using standard Forex pip sizing models on Gold without accounting for contract multipliers.",
        quickNote: "Gold thins out during news. Give the trade room to breathe by lowering position size."
      }
    };

    if (isPractice) {
      card.taskData = {
        type: "choice_block",
        question: `What is the disciplined Gold response for ${meta.title}?`,
        options: [
          { id: "0", text: `Scale down position size to accommodate wider stop buffers required for XAU/USD volatility.`, isCorrect: true, feedback: "Correct! Widening stops and reducing sizes is the only way to survive Gold sweeps." },
          { id: "1", text: "Double position size to make quick profits because Gold moves faster than currency pairs.", isCorrect: false, feedback: "Incorrect. Increasing size in high-volatility environments leads to rapid account liquidation." }
        ]
      };
    }

    return card;
  });

  // Generate 8 Crypto cards
  const cryptoCards: CardData[] = Array.from({ length: 8 }, (_, cIdx) => {
    let type = "concept";
    if (cIdx === 0) type = "mission_brief";
    if (cIdx === 6) type = "practice";
    if (cIdx === 7) type = "summary";

    const isPractice = type === "practice";
    const cardTitle = `Crypto Roadway: ${meta.title} (${cIdx + 1})`;

    const card: CardData = {
      type,
      title: cardTitle,
      label: "Crypto Roadway",
      visualKey: meta.visualKeys.crypto,
      body: `### Crypto Risk Adaptations: ${meta.title} (Part ${cIdx + 1})\\n\\nCrypto perpetual swaps are highly leveraged instruments traded on fragmented venues. This card teaches **${meta.cryptoContext}** to manage crypto-specific exposure parameters.\\n\\n* **Liquidation Zones**: Algorithms hunt high-leverage liquidation pools during sweeps.\\n* **Funding & Cost Decay**: High funding rates and taker fees drag on long-term trade expectancy.`,
      context: {
        keyTerms: [
          { term: "Liquidation Pool", definition: "A cluster of price levels where leveraged positions are forced to auto-liquidate." },
          { term: "Funding Rate", definition: "Periodic interest payments exchanged between long and short perpetual swap traders." }
        ],
        whyThisMatters: "Crypto venues have high slippage. Order book depth thins out rapidly, making market executions costly.",
        realLifeExample: "Monitoring perp funding rates to ensure holding a long position over an 8-hour window doesn't bleed target profit.",
        commonMistake: "Using high leverage without calculating the absolute liquidation price relative to the stop loss.",
        quickNote: "Liquidation must never be your stop loss. Exit the trade before the exchange cuts it."
      }
    };

    if (isPractice) {
      card.taskData = {
        type: "choice_block",
        question: `What is the disciplined Crypto response for ${meta.title}?`,
        options: [
          { id: "0", text: `Ensure the liquidation price is completely outside your structural invalidation zone and size accordingly.`, isCorrect: true, feedback: "Correct! Liquidation must never be triggered; the stop loss must execute first." },
          { id: "1", text: "Use maximum exchange leverage to minimize the margin required, ignoring liquidation proximity.", isCorrect: false, feedback: "Incorrect. High leverage brings your liquidation price dangerously close, causing instant wipeouts on minor swings." }
        ]
      };
    }

    return card;
  });

  // Write files
  const coreFile = path.join(modPath, "core.ts");
  const forexFile = path.join(modPath, "forex.ts");
  const goldFile = path.join(modPath, "gold.ts");
  const cryptoFile = path.join(modPath, "crypto.ts");
  const indexFile = path.join(modPath, "index.ts");

  fs.writeFileSync(coreFile, `import { LessonCard } from "../../../types/curriculum";\n\nexport const coreCards: LessonCard[] = ${JSON.stringify(coreCards, null, 2)};\n`);
  fs.writeFileSync(forexFile, `import { LessonCard } from "../../../types/curriculum";\n\nexport const forexCards: LessonCard[] = ${JSON.stringify(forexCards, null, 2)};\n`);
  fs.writeFileSync(goldFile, `import { LessonCard } from "../../../types/curriculum";\n\nexport const goldCards: LessonCard[] = ${JSON.stringify(goldCards, null, 2)};\n`);
  fs.writeFileSync(cryptoFile, `import { LessonCard } from "../../../types/curriculum";\n\nexport const cryptoCards: LessonCard[] = ${JSON.stringify(cryptoCards, null, 2)};\n`);

  fs.writeFileSync(indexFile, `import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module5${mIdx + 1}: AcademyModule = {
  moduleNumber: "5.${mIdx + 1}",
  level: 5,
  title: "${meta.title}",
  objective: "${meta.objective}",
  skillLevel: "advanced",
  orderIndex: ${mIdx + 1},
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
`);

  console.log(`Generated Module 5.${mIdx + 1} at ${modPath}`);
});

// Generate Level 5 barrel index.ts
const barrelFile = path.join(targetDir, "index.ts");
let barrelContent = "";
for (let i = 1; i <= 15; i++) {
  barrelContent += `import { module5${i} } from "./module-5-${i}";\n`;
}
barrelContent += `import { AcademyModule } from "../../types/curriculum";\n\nexport const level5Curriculum: AcademyModule[] = [\n`;
for (let i = 1; i <= 15; i++) {
  barrelContent += `  module5${i}${i === 15 ? "" : ","}\n`;
}
barrelContent += `];\n`;

fs.writeFileSync(barrelFile, barrelContent);
console.log(`Generated barrel index.ts at ${barrelFile}`);
