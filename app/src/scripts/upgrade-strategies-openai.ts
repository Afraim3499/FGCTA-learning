import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { OpenAI } from "openai";

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

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const systemPrompt = `You are a professional quantitative and institutional trading curriculum writer at Lurnava Academy.
Your task is to take a raw retail/draft trading strategy and upgrade it into a high-fidelity learning object.

You must return a single JSON object containing exactly TWO nested objects: "learningProfile" and "visualModel".

--- STYLE RULES ---
1. TONE: Professional, technical, analytical, pedagogical, serious. Never use vague motivational words or emotional adjectives. You must absolutely avoid terms like "journey", "perfect", "guaranteed", "always wins", "easy money", or "perfect setup".
   - CRITICAL TONE CONSTRAINT: Do NOT use the word "signal" or "signals" anywhere in the values, EXCEPT that you are allowed to use "MACD Signal Line" or "MACD Trigger Line" when referring to components of the MACD indicator. Otherwise, replace "signal" with "trigger", "indication", "setup", or "crossover" (or their plurals). Do NOT use the word "beginner" or "beginners" anywhere in the values. Replace them with "student", "learner", "new trader", or "novice" (or their plurals). Do NOT use the word "recruit" or "recruits" anywhere in the values.
2. ZERO FLUFF: Start immediately with the mechanics. No introductions like "In the dynamic world of...", "This strategy is a crucial tool...", "Understanding this helps...".
3. CONCRETE CRITERIA: Specify measurable numeric parameters, session windows, volume thresholds, and spread limits (e.g. "within 15 minutes of London Open", "14-period ATR with 2.0x multiplier", "spread under 2.5 pips").
   - CRITICAL VOLUME / FAKE PRECISION CONSTRAINT: Do NOT use exact contract numbers or absolute volume numbers (e.g., do NOT say "1,500 contracts" or "1500+ COMEX contracts"). Instead, use relative, simulated volume descriptions such as "simulated volume expansion", "relative volume confirmation", "volume spike marker", or "1.5x simulated volume expansion". If any exact number is used, it must be explicitly labeled as a classroom/simulated example.
4. REAL PRICES: Use plausible asset-specific prices (e.g. EUR/USD at 1.0842, BTC at 64,250, Gold at 2,345.50). Do NOT use round numbers like 100.00, 1.00, or 1.0000 unless historically plausible.
5. NO FUTURE CONCEPTS: Do not reference indicators, tools, or ideas that belong to higher levels than the current strategy's level. Align with these level rules:
   - Level 1: Swings, basic horizontal support/resistance, market structure. No indicators (no EMA, SMA, RSI, Bollinger Bands).
   - Level 2: Simple indicators (EMA, SMA, Bollinger Bands, MACD, ADX, RSI). No macro drivers.
   - Level 3: Simple macro drivers (real yields, gold correlation, DXY). No session timing / session indicators (London Open, Asian range, COMEX).
   - Level 4: Sessions & volatility (London/NY overlap, COMEX, ADR, ATR volatility sizing). No crypto derivatives.
   - Level 5: Crypto derivatives & funding (Perps, funding rate arbitrage, Open Interest). No on-chain metrics.
   - Level 6: On-chain metrics, exchange inflows, advanced risk metrics.
6. SPECIAL VISUAL & DIFFERENTIATION REQUIREMENTS:
   - Moving Average Crossover strategies: The visualModel labels and text must describe moving average lines (e.g., "50 EMA", "200 SMA"), the crossover event, pullbacks, crossover zones, and potential false crossover (lag) traps. Do not refer to generic candlestick zones without referencing the moving averages.
   - WMA (Weighted Moving Average) strategies: Visual labels must refer to WMA weightings, fast/slow WMA lines, and dynamic support/resistance zones.
   - MACD strategies: Visual labels must refer to the MACD line, signal line, histogram expansion, and baseline crossovers.
   - ADX strategies: Visual labels must refer to the ADX line, DMI+ / DMI- lines, and trend strength threshold zones (e.g. ADX > 25).
   - London/New York Breakout strategies: The visualModel labels and text must reference the "Asian range" boundary, the "session open expansion" zone, "breakout/retest" confirmation, and the "session timing" or "false breakout trap".
   - Intraday Breakouts: Focus on tight timeframes (5m chart), volume spikes (e.g. contracts volume), tight stop-losses, and rapid scaling wicks.
   - Swing Breakouts: Focus on higher timeframes (1H/4H charts), wider stop-losses (outside full session boundary), and macro session open flows.
   - New York Breakout: Focus on the 14:30 GMT volatility range (30m high/low range) and CPI/NFP macroeconomic data spikes.
   - Academy Entry Logic strategies: The visualModel labels and text must reference the "Liquidity sweep", "market structure shift (MSS)", "displacement", and the "retest/mitigation zone" or "premium/discount boundaries".
   - Real Yield Inverse Correlation strategies: The visualModel labels and text must reference the correlation between "US 10Y Real Yield (TIPS)" and "XAU/USD spot gold", identifying "correlation divergence" or "real yields tracking".
7. TARGET & PROFIT TONE RULES:
   - Do NOT write trade instructions or profit promises (e.g. "Target 3% profit level on Gold").
   - Instead, use educational target logic (e.g. "Identify the next key structural zone and observe how price reacts", "Use prior high/low, volatility range, or macro reaction zone as the educational target reference").
   - Do NOT refer to live targets or profits; emphasize that targets are for educational study and simulation.
   - Do NOT use the words "take-profit", "take profit", or "profit target" anywhere. Use "educational target reference", "exit reference zone", or "simulated movement".
8. ASSET-SPECIFIC LANGUAGE:
   - CRYPTO strategies should NOT contain Forex pip-based language (e.g. "spread under 2.5 pips"). Instead, use "spread percentage", "slippage", "liquidity depth", or "basis points".
   - GOLD strategies should NOT contain Forex pip-based language. Instead, use "dollars", "points", "ATR", or "wick behavior".
   - FOREX strategies should use Forex terms like "pips" or "pip" correctly.

--- REQUIRED JSON SCHEMA ---
{
  "learningProfile": {
    "name": "string (strategy name)",
    "family": "string (strategy family)",
    "assetClass": "string (CRYPTO | FOREX | GOLD)",
    "level": number,
    "difficulty": "string (LOW | MED | HIGH | ELITE)",
    "simpleExplanation": "string (plain-language explanation for students)",
    "whyExists": "string (what market behavior or inefficiency creates the setup)",
    "whyUseful": "string (what skill it trains / what mistake it helps avoid)",
    "setupContext": "string (pre-requisite market conditions, e.g. compression, trend alignment)",
    "whenToUse": "string (exact circumstances where this makes sense)",
    "whenNotToUse": "string (circumstances where it is dangerous, e.g. low liquidity, chop)",
    "suitableMarkets": "string (pairs, sessions, spread constraints)",
    "suitableSessions": "string (London, NY, Asia, COMEX, etc.)",
    "suitableTimeframes": "string (realistic timeframe for practice, e.g. 15m, 1H, 4H, and why)",
    "setupLogic": [
      { "step": 1, "action": "string (action step)", "reason": "string (pedagogical reason)" }
    ],
    "confirmationRules": "string (candle close, retest, volume filter)",
    "invalidationRules": "string (price action or level breach that cancels the idea)",
    "riskRules": "string (volatility sizing, risk limits, warning zones)",
    "targetLogic": "string (how targets are identified using structural levels or R-multiples)",
    "tradeManagement": "string (monitoring parameters, moving stops to break-even)",
    "commonTraps": "string (market traps like sweeps, news expansions, broker spread widening)",
    "beginnerMistakes": "string (common rookie errors specific to this strategy)",
    "exampleWalkthrough": {
      "context": "string (date, session, asset, macro conditions)",
      "setup": "string (step-by-step forming, exact entry, stop-loss, take-profit, and size)",
      "outcome": "string (whether SL, TP, or manual close hit, exact R gained or lost)",
      "lesson": "string (one non-generic lesson extracted)"
    },
    "practiceChecklist": [
      { "item": "string (actionable checklist item)", "reason": "string (why it matters)" }
    ],
    "relatedLessons": [
      { "lessonName": "string (related lesson from curriculum)", "relation": "string (why they are related)" }
    ],
    "prerequisiteKnowledge": "string (what must be understood before applying)",
    "skillDomains": ["string (e.g. Chart reading, Planning, Execution, Risk)"],
    "sandboxInstructions": "string (how to practice in Chart Lab/Strategy Lab, what to mark/log)"
  },
  "visualModel": {
    "visualCategory": "string (Must be exactly one of: Breakout / Retest Visual | Trend Continuation Visual | Range / Mean Reversion Visual | Supply / Demand Zone Visual | Liquidity Sweep / Trap Visual | Volatility / Trailing Stop Visual | Indicator Structure Visual | Multi-Timeframe Confluence Visual | Session / Time Window Visual | Order Flow / Imbalance Visual | Risk / Position Sizing Visual | Crypto Derivatives Visual | Gold Macro Reaction Visual | Forex Pair Strength Visual | Psychology / Process Audit Visual | Portfolio / Allocation Visual)",
    "componentType": "string (suitable UI component e.g. CandlestickChart | OrderFlowBook | DerivativesDashboard | SizingCalculator | GoldMacroRealYieldChart)",
    "chartTitle": "string (educational title for the visual)",
    "chartPurpose": "string (what the visual illustrates)",
    "marketConditionShown": "string (context drawn in the chart)",
    "setupFormationShown": "string (how the setup shapes on the chart)",
    "entryOrActivationZone": "string (description of the entry zone, where to trigger)",
    "confirmationMarker": "string (exactly what confirms the entry on the visual)",
    "invalidationZone": "string (red line or zone coordinates/description on the visual)",
    "targetZone": "string (green target zone description on the visual)",
    "trapZone": "string (amber warning or sweep area description on the visual)",
    "warningLabel": "string (prominent warning message on the visual)",
    "whatLearnerShouldNotice": "string (critical visual details the student should focus on)",
    "mistakePrevented": "string (what standard charting mistake is prevented by this visual)",
    "interactionType": "string (e.g. hover, click-to-measure, slider-adjust)",
    "requiredLabels": ["string (labels that must be placed on the chart)"],
    "requiredZones": ["string (areas that must be highlighted on the chart)"],
    "assetSpecificVisualNotes": "string (specific visual guidelines, e.g. long wicks for gold, fragmented order book for crypto)"
  }
}`;

function generateCoreLogic(lp: any): string {
  const setupSteps = (lp.setupLogic || [])
    .map((step: any) => `  ${step.step}. **${step.action}**: ${step.reason}`)
    .join("\n");

  const checklistItems = (lp.practiceChecklist || [])
    .map((item: any) => `  - [ ] **${item.item}**: ${item.reason}`)
    .join("\n");

  const lessons = (lp.relatedLessons || [])
    .map((l: any) => `  - **${l.lessonName}**: ${l.relation}`)
    .join("\n");

  return [
    `### Core Strategy Logic`,
    `- **Simple Explanation**: ${lp.simpleExplanation}`,
    `- **Why It Exists**: ${lp.whyExists}`,
    `- **Why It Is Useful**: ${lp.whyUseful}`,
    `- **Setup Context**: ${lp.setupContext}`,
    `- **When To Use**: ${lp.whenToUse}`,
    `- **When Not To Use**: ${lp.whenNotToUse}`,
    `- **Suitable Markets / Pairs**: ${lp.suitableMarkets}`,
    `- **Suitable Sessions**: ${lp.suitableSessions}`,
    `- **Suitable Timeframes**: ${lp.suitableTimeframes}`,
    `- **Setup Logic (Step-by-step)**:`,
    setupSteps,
    `- **Confirmation Rules**: ${lp.confirmationRules}`,
    `- **Invalidation Rules**: ${lp.invalidationRules}`,
    `- **Checklist**:`,
    checklistItems,
    `- **Prerequisite Knowledge**: ${lp.prerequisiteKnowledge}`,
    `- **Skill Domains**: ${lp.skillDomains?.join(", ") || "None"}`,
    `- **Related Lessons**:`,
    lessons,
    `- **Sandbox Practice Instructions**: ${lp.sandboxInstructions}`
  ].join("\n\n");
}

function generateTrapMechanics(lp: any): string {
  return [
    `### Market Trap Mechanics`,
    `- **Risk Rules**: ${lp.riskRules}`,
    `- **Common Traps**: ${lp.commonTraps}`,
    `- **Beginner Mistakes**: ${lp.beginnerMistakes}`
  ].join("\n\n");
}

function generateTradeWalkthrough(lp: any): string {
  const wt = lp.exampleWalkthrough || {};
  return [
    `### Trade Walkthrough`,
    `- **Context**: ${wt.context || "No context specified"}`,
    `- **Setup**: ${wt.setup || "No setup details specified"}`,
    `- **Outcome**: ${wt.outcome || "No outcome details specified"}`,
    `- **Lesson**: ${wt.lesson || "No lesson details specified"}`
  ].join("\n\n");
}

function getCorrectLevel(name: string, assetClass: string): number {
  const n = name.toLowerCase();
  if (n.includes("london open breakout") || n.includes("new york open breakout") || n.includes("ny open breakout") || n.includes("breakout (swing)") || n.includes("breakout (intraday)")) return 4;
  if (n.includes("academy entry logic")) return 3;
  if (n.includes("real yield inverse correlation")) return 3;
  
  if (
    n.includes("crossover") || 
    n.includes("moving average") || 
    n.includes("moving‑average") || 
    n.includes("filter") || 
    n.includes("cross") ||
    n.includes("macd") ||
    n.includes("adx") ||
    n.includes("wma") ||
    n.includes("supertrend") ||
    n.includes("parabolic sar") ||
    n.includes("ichimoku")
  ) {
    return 2;
  }
  
  if (assetClass === "GOLD") return 3;
  if (assetClass === "FOREX") return 4;
  if (assetClass === "CRYPTO") return 5;
  return 2;
}

function getCorrectFamily(name: string, currentFamily: string): string {
  const n = name.toLowerCase();
  if (n.includes("london open breakout") || n.includes("new york open breakout") || n.includes("ny open breakout") || n.includes("breakout (swing)") || n.includes("breakout (intraday)")) {
    return "Breakout Trading";
  }
  if (
    n.includes("crossover") || 
    n.includes("moving average") || 
    n.includes("moving‑average") || 
    n.includes("filter") || 
    n.includes("cross") ||
    n.includes("macd") ||
    n.includes("adx") ||
    n.includes("supertrend") ||
    n.includes("parabolic sar") ||
    n.includes("ichimoku") ||
    n.includes("wma") ||
    n.includes("ema") ||
    n.includes("sma")
  ) {
    return "Trend Following";
  }
  return currentFamily;
}

function sanitizeAssetLanguage(obj: any, assetClass: string): any {
  if (typeof obj === "string") {
    let text = obj;
    if (assetClass === "CRYPTO") {
      text = text
        .replace(/spread under (\d+(\.\d+)?)\s*pips/gi, "spread under $1%")
        .replace(/spread under (\d+(\.\d+)?)\s*pip/gi, "spread under $1%")
        .replace(/\b(\d+(\.\d+)?)\s*pips\b/gi, "$1 basis points")
        .replace(/\b(\d+(\.\d+)?)\s*pip\b/gi, "$1 basis point")
        .replace(/\bpips\b/gi, "basis points")
        .replace(/\bpip\b/gi, "basis point");
    } else if (assetClass === "GOLD") {
      text = text
        .replace(/spread under (\d+(\.\d+)?)\s*pips/gi, "spread under $1 dollars")
        .replace(/spread under (\d+(\.\d+)?)\s*pip/gi, "spread under $1 dollar")
        .replace(/\b(\d+(\.\d+)?)\s*pips\b/gi, "$1 points")
        .replace(/\b(\d+(\.\d+)?)\s*pip\b/gi, "$1 point")
        .replace(/\bpips\b/gi, "points")
        .replace(/\bpip\b/gi, "point");
    }
    return text;
  } else if (Array.isArray(obj)) {
    return obj.map(item => sanitizeAssetLanguage(item, assetClass));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = sanitizeAssetLanguage(obj[key], assetClass);
    }
    return newObj;
  }
  return obj;
}

function sanitizeTargetLanguage(obj: any): any {
  if (typeof obj === "string") {
    return obj
      .replace(/target\s+at\s+(\d+(\.\d+)?%)/gi, "educational target reference at the next structural level ($1)")
      .replace(/target\s+(\d+(\.\d+)?%)\s+profit/gi, "educational target reference at $1")
      .replace(/target\s+(\d+(\.\d+)?%)\s+level/gi, "educational target reference at $1")
      .replace(/profit\s+target\s+at\s+(\d+(\.\d+)?%)/gi, "educational target reference at the next structural level ($1)")
      .replace(/take-profit\s+at\s+(\d+(\.\d+)?%)/gi, "educational target reference at $1")
      .replace(/take\s+profit\s+at\s+(\d+(\.\d+)?%)/gi, "educational target reference at $1")
      .replace(/aiming\s+for\s+a\s+(\d+:\d+)\s+risk-reward/gi, "studying structural levels for a potential $1 reward-to-risk ratio")
      .replace(/risk-reward\s+ratio\s+of\s+at\s+least\s+(\d+:\d+)/gi, "educational reward-to-risk reference of $1")
      .replace(/risk-reward\s+ratio\s+of\s+(\d+:\d+)/gi, "educational reward-to-risk reference of $1")
      .replace(/gain\s+of\s+(\d+(\.\d+)?%)/gi, "potential move of $1")
      .replace(/resulting\s+in\s+a\s+gain\s+of\s+(\d+(\.\d+)?\s*R)/gi, "capturing a simulated $1 movement")
      .replace(/resulting\s+in\s+a\s+gain\s+of\s+(\d+(\.\d+)?\s*percent)/gi, "capturing a simulated $1 movement")
      .replace(/take-profit/gi, "educational target reference")
      .replace(/take\s+profit/gi, "educational target reference")
      .replace(/profit\s+target/gi, "educational target reference");
  } else if (Array.isArray(obj)) {
    return obj.map(item => sanitizeTargetLanguage(item));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = sanitizeTargetLanguage(obj[key]);
    }
    return newObj;
  }
  return obj;
}

function sanitizeSessions(obj: any, level: number): any {
  if (level > 3) return obj; // Level 4+ is allowed to mention sessions

  if (typeof obj === "string") {
    return obj
      .replace(/\blondon open\b/gi, "session open")
      .replace(/\blondon sessions\b/gi, "active trading hours")
      .replace(/\blondon session\b/gi, "active hours")
      .replace(/\bny sessions\b/gi, "active trading hours")
      .replace(/\bny session\b/gi, "active hours")
      .replace(/\bnew york sessions\b/gi, "active trading hours")
      .replace(/\bnew york session\b/gi, "active hours")
      .replace(/\bnew york open\b/gi, "session open")
      .replace(/\bny open\b/gi, "session open")
      .replace(/\btrading sessions\b/gi, "active hours")
      .replace(/\btrading session\b/gi, "active hours")
      .replace(/\basian sessions\b/gi, "overnight hours")
      .replace(/\basian session\b/gi, "overnight hours")
      .replace(/\basia session\b/gi, "overnight hours")
      .replace(/\basian range\b/gi, "overnight range")
      .replace(/\bcomex\b/gi, "exchange");
  } else if (Array.isArray(obj)) {
    return obj.map(item => sanitizeSessions(item, level));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = sanitizeSessions(obj[key], level);
    }
    return newObj;
  }
  return obj;
}

function sanitizeTone(obj: any): any {
  if (typeof obj === "string") {
    let text = obj
      .replace(/\bbeginners\b/gi, "learners")
      .replace(/\bbeginner\b/gi, "learner")
      .replace(/\brecruits\b/gi, "learners")
      .replace(/\brecruit\b/gi, "learner");

    // Temporarily mask MACD Signal/Trigger Line references to protect them
    text = text.replace(/macd\s+signal\s+line\s*\/\s*trigger\s+line/gi, "___MACD_COMBINED___");
    text = text.replace(/macd\s+trigger\s+line\s*,\s*commonly\s+called\s+the\s+macd\s+signal\s+line/gi, "___MACD_COMBINED___");
    text = text.replace(/macd\s+signal\s+line/gi, "___MACD_SIGNAL_LINE___");
    text = text.replace(/macd\s+trigger\s+line/gi, "___MACD_TRIGGER_LINE___");
    
    // Replace generic signals and variations
    text = text.replace(/\bsignaling\b/gi, "triggering");
    text = text.replace(/\bsignals\b/gi, "triggers");
    text = text.replace(/\bsignal\b/gi, "trigger");
    
    // Restore protected terms
    text = text.replace(/___MACD_COMBINED___/g, "MACD Signal Line / Trigger Line");
    text = text.replace(/___MACD_SIGNAL_LINE___/g, "MACD Signal Line");
    text = text.replace(/___MACD_TRIGGER_LINE___/g, "MACD Trigger Line");
    
    return text;
  } else if (Array.isArray(obj)) {
    return obj.map(item => sanitizeTone(item));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = sanitizeTone(obj[key]);
    }
    return newObj;
  }
  return obj;
}

function sanitizeVolume(obj: any): any {
  if (typeof obj === "string") {
    let text = obj;
    // Replace exact volume thresholds like "1500+ COMEX contracts", "1500 contracts", "1,500 contracts", etc.
    text = text.replace(/\b\d+[\d,]*\+?\s+comex\s+contracts\b/gi, "above-average simulated volume expansion");
    text = text.replace(/\b\d+[\d,]*\+?\s+contracts\b/gi, "simulated volume expansion");
    text = text.replace(/\bvolume\s+of\s+\d+[\d,]*\+?\s+contracts\b/gi, "simulated volume expansion");
    text = text.replace(/\bvolume\s+spike\s+of\s+\d+[\d,]*\+?\s+contracts\b/gi, "simulated volume spike");
    text = text.replace(/\bvolume\s+threshold\s+of\s+\d+[\d,]*\+?\s+contracts\b/gi, "simulated volume threshold");
    return text;
  } else if (Array.isArray(obj)) {
    return obj.map(item => sanitizeVolume(item));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = sanitizeVolume(obj[key]);
    }
    return newObj;
  }
  return obj;
}

function overrideVisualModel(sName: string, assetClass: string, vm: any): any {
  const name = sName.toLowerCase();
  
  const labelSuffix = ` [${sName} (${assetClass})]`;

  if (name.includes("macd")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MACDStructureChart";
    vm.requiredLabels = [
      `MACD Line${labelSuffix}`,
      `MACD Signal Line / Trigger Line${labelSuffix}`,
      `Zero Line Baseline${labelSuffix}`
    ];
    vm.requiredZones = [
      `MACD Crossover Area${labelSuffix}`,
      `MACD Histogram Expansion Zone${labelSuffix}`,
      `Zero Line Midpoint${labelSuffix}`
    ];
  } else if (name.includes("adx") || name.includes("directional index")) {
    vm.visualCategory = "Trend Continuation Visual"; // ADX Filter
    vm.componentType = "ADXStrengthChart";
    vm.requiredLabels = [
      `ADX Strength Line${labelSuffix}`,
      `ADX Threshold (25)${labelSuffix}`,
      `Trend Confirmation Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Strong Trend Zone (ADX > 25)${labelSuffix}`,
      `Weak Trend Zone (ADX < 25)${labelSuffix}`,
      `ADX Confirmation Area${labelSuffix}`
    ];
  } else if (name.includes("london open breakout") || name.includes("london open")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Asian Range High Boundary${labelSuffix}`,
      `Asian Range Low Boundary${labelSuffix}`,
      `London Open Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Asian Range Consolidation Box${labelSuffix}`,
      `London Open Expansion Zone${labelSuffix}`,
      `False Breakout / Liquidity Sweep Area${labelSuffix}`
    ];
  } else if (name.includes("new york open breakout") || name.includes("ny open breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Pre-Market Range High Boundary${labelSuffix}`,
      `Pre-Market Range Low Boundary${labelSuffix}`,
      `NY Open Volatility Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `US Pre-Market Consolidation Box${labelSuffix}`,
      `NY Open Expansion Zone${labelSuffix}`,
      `False Breakout Sweep / News Trap Area${labelSuffix}`
    ];
  } else if (name.includes("overnight range breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Overnight Range High Boundary${labelSuffix}`,
      `Overnight Range Low Boundary${labelSuffix}`,
      `Morning Session Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Overnight Consolidation Range Box${labelSuffix}`,
      `Morning Open Expansion Zone${labelSuffix}`,
      `Overnight Range Liquidity Sweep${labelSuffix}`
    ];
  } else if (name.includes("donchian channel breakout") || name.includes("donchian")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "DonchianChannelBreakoutChart";
    vm.requiredLabels = [
      `Donchian Upper Channel Band${labelSuffix}`,
      `Donchian Lower Channel Band${labelSuffix}`,
      `Channel Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Donchian Channel High/Low Bound${labelSuffix}`,
      `Channel Breakout Expansion Zone${labelSuffix}`,
      `False Channel Breakout Trap Area${labelSuffix}`
    ];
  } else if (name.includes("real yield") || name.includes("correlation")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [
      `US 10Y Real Yield (TIPS)${labelSuffix}`,
      `XAU/USD Spot Gold Price${labelSuffix}`,
      `Correlation Divergence${labelSuffix}`
    ];
    vm.requiredZones = [
      `Real Yield Tracking Zone${labelSuffix}`,
      `Macro Reaction Window${labelSuffix}`,
      `Divergence Action Area${labelSuffix}`
    ];
  } else if (name.includes("supertrend")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "SupertrendVolatilityChart";
    vm.requiredLabels = [
      `Supertrend Trailing Stop Line${labelSuffix}`,
      `Trend Flip Marker${labelSuffix}`,
      `ATR Volatility Band${labelSuffix}`
    ];
    vm.requiredZones = [
      `Shaded Volatility Zone${labelSuffix}`,
      `Sideways Chop Warning Zone${labelSuffix}`,
      `Dynamic Stop-Loss Area${labelSuffix}`
    ];
  } else if (name.includes("parabolic sar")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    vm.requiredLabels = [
      `Parabolic SAR Acceleration Dot${labelSuffix}`,
      `Dot Flip Reversal Point${labelSuffix}`,
      `Trend Acceleration Indicator${labelSuffix}`
    ];
    vm.requiredZones = [
      `Bullish Acceleration Area${labelSuffix}`,
      `Bearish Acceleration Area${labelSuffix}`,
      `SAR Reversal Boundary${labelSuffix}`
    ];
  } else if (name.includes("ichimoku")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "IchimokuCloudChart";
    vm.requiredLabels = [
      `Tenkan-sen Conversion Line${labelSuffix}`,
      `Kijun-sen Base Line${labelSuffix}`,
      `Senkou Span Cloud Boundary${labelSuffix}`
    ];
    vm.requiredZones = [
      `Senkou Span Shaded Cloud Support${labelSuffix}`,
      `False Trend Zone Inside Cloud${labelSuffix}`,
      `Ichimoku Equilibrium Area${labelSuffix}`
    ];
  } else if (name.includes("heikin")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "HeikinAshiTrendChart";
    vm.requiredLabels = [
      `Heikin-Ashi Smoothed Candles${labelSuffix}`,
      `Trend Continuation Marker${labelSuffix}`,
      `Flat Candle Boundaries${labelSuffix}`
    ];
    vm.requiredZones = [
      `Strong Bullish Flat-Bottom Zone${labelSuffix}`,
      `Strong Bearish Flat-Top Zone${labelSuffix}`,
      `Heikin-Ashi Smoothing Area${labelSuffix}`
    ];
  } else if (
    name.includes("crossover") || 
    name.includes("moving average") || 
    name.includes("moving‑average") || 
    name.includes("filter") ||
    name.includes("cross") ||
    name.includes("wma")
  ) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    
    let fastLabel = `Fast Moving Average Line${labelSuffix}`;
    let slowLabel = `Slow Moving Average Line${labelSuffix}`;
    
    if (name.includes("wma") || name.includes("weighted")) {
      fastLabel = `Fast Weighted WMA Line${labelSuffix}`;
      slowLabel = `Slow Weighted WMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("20/50 ema")) {
      fastLabel = `20 EMA Fast Line${labelSuffix}`;
      slowLabel = `50 EMA Slow Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("50/200 sma") || name.includes("golden cross") || name.includes("death cross")) {
      fastLabel = `50 SMA Line${labelSuffix}`;
      slowLabel = `200 SMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("triple")) {
      fastLabel = `Fast EMA Line${labelSuffix}`;
      const medLabel = `Medium EMA Line${labelSuffix}`;
      slowLabel = `Slow EMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, medLabel, slowLabel, `Triple Crossover Point${labelSuffix}`];
    } else {
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    }
    
    vm.requiredZones = [
      `Entry Trigger Zone${labelSuffix}`,
      `Whipsaw / Lag Trap Zone${labelSuffix}`,
      `Dynamic Trend Support Area${labelSuffix}`
    ];
  }
  
  return vm;
}



async function main() {
  const args = process.argv.slice(2);
  const limitArg = args.find(a => a.startsWith("--limit="))?.split("=")[1];
  const dryRun = args.includes("--dry-run");
  const strategyId = args.find(a => a.startsWith("--id="))?.split("=")[1];
  const limit = limitArg ? parseInt(limitArg) : 10;

  // Fetch all strategies and filter in memory to avoid Prisma Json null querying complications
  const allDbStrategies = await prisma.strategy.findMany({
    orderBy: [
      { sequenceNumber: "asc" },
      { id: "asc" }
    ]
  });

  const totalCount = allDbStrategies.length;
  const pendingStrategies = allDbStrategies.filter((s: any) => !s.learningProfile || !s.visualModel);
  const pendingCount = pendingStrategies.length;

  console.log("--- STRATEGY CONTENT UPGRADE PROCESS START ---");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE DB UPDATE"}`);
  console.log(`Total Database Strategies: ${totalCount}`);
  console.log(`Strategies Needing Schema Upgrade: ${pendingCount}`);
  console.log(`Limit: ${strategyId ? "Single Strategy" : limit}`);

  // Fetch strategies that need upgrading
  let strategies: any[] = [];
  if (strategyId) {
    const s = await prisma.strategy.findUnique({ where: { id: strategyId } });
    if (s) strategies.push(s);
  } else {
    strategies = pendingStrategies.slice(0, limit);
  }

  if (strategies.length === 0) {
    console.log("No strategies need upgrades.");
    await prisma.$disconnect();
    await pool.end();
    return;
  }

  const chunkSize = 5;
  for (let i = 0; i < strategies.length; i += chunkSize) {
    const chunk = strategies.slice(i, i + chunkSize);
    console.log(`\nProcessing chunk ${i / chunkSize + 1} of ${Math.ceil(strategies.length / chunkSize)}...`);
    await Promise.all(chunk.map(async (s) => {
      console.log(`Upgrading strategy: "${s.name}" (ID: ${s.id}, Seq: ${s.sequenceNumber}, Asset: ${s.assetClass})`);

      const level = getCorrectLevel(s.name, s.assetClass);
      const correctFamily = getCorrectFamily(s.name, s.parentFamily);

      // Level-specific constraints to prevent future-concept leakage
      let levelConstraints = "";
      if (level === 1) {
        levelConstraints = "- Level 1 Constraint: Do NOT mention any indicators (e.g. EMA, SMA, RSI, MACD, Bollinger Bands) or session names (e.g., London session, NY session, Asian session, COMEX) or macro concepts. Focus strictly on price action, swings, and horizontal support/resistance.";
      } else if (level === 2) {
        levelConstraints = "- Level 2 Constraint: Do NOT mention macro drivers (real yields, TIPS, DXY) or session names/timings (London open, Asian range, NY session, COMEX) or derivatives/funding. Focus strictly on indicator crossover rules, trend direction, and basic candle triggers.";
      } else if (level === 3) {
        levelConstraints = "- Level 3 Constraint: Do NOT mention session names/timings (London open, Asian range, NY session, COMEX) or derivatives/funding. Focus on macro correlations, real yields, TIPS, and gold price movements.";
      } else if (level === 4) {
        levelConstraints = "- Level 4 Constraint: Do NOT mention crypto derivatives (perps, funding rate, open interest) or on-chain metrics. Focus on session ranges, London Open breakouts, volatility, ATR, and session timings.";
      }

      const userPrompt = [
        `Strategy Name: ${s.name}`,
        `Asset Class: ${s.assetClass}`,
        `Parent Family: ${correctFamily}`,
        `Sequence Number: ${s.sequenceNumber}`,
        `Target Level: ${level}`,
        "",
        "Level Constraints to Enforce:",
        levelConstraints,
        "",
        "Draft Core Logic:",
        s.coreLogic,
        "",
        "Draft Trap Mechanics:",
        s.trapMechanics || "None",
        "",
        "Draft Trade Walkthrough:",
        s.tradeWalkthrough || "None",
        "",
        `Please generate the upgraded institutional content and the visual model in JSON format matching the schema exactly. You must set "level": ${level} in the learningProfile JSON.`,
      ].join("\n");

      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.3,
        });

        let result = JSON.parse(response.choices[0].message.content || "{}");
        
        if (!result.learningProfile || !result.visualModel) {
          console.warn(`  [Warning] Missing fields in OpenAI response for "${s.name}". Skipping update.`);
          return;
        }

        // Ensure correct level and family are stored
        result.learningProfile.level = level;
        result.learningProfile.family = getCorrectFamily(s.name, s.parentFamily);

        // Apply programmatic category overrides to match visual component routes exactly
        result.visualModel = overrideVisualModel(s.name, s.assetClass, result.visualModel);

        // Safeguard timeframes for swing/intraday breakouts
        if (s.name.toLowerCase().includes("swing") && s.name.toLowerCase().includes("breakout")) {
          result.learningProfile.suitableTimeframes = "1H or 4H charts for swing confirmation";
        }
        if (s.name.toLowerCase().includes("intraday") && s.name.toLowerCase().includes("breakout")) {
          result.learningProfile.suitableTimeframes = "5m or 15m charts for intraday execution";
        }

        // Safeguard invalidation rules
        if (!result.learningProfile.invalidationRules || result.learningProfile.invalidationRules.length < 15) {
          result.learningProfile.invalidationRules = "A clean candle close beyond the defined structural key level or key moving average line.";
        }

        // Sanitize sessions, asset language, target language, and tone after overrides to ensure no bad terms or future concepts seep in
        result = sanitizeSessions(result, level);
        result = sanitizeAssetLanguage(result, s.assetClass);
        result = sanitizeTargetLanguage(result);
        result = sanitizeTone(result);
        result = sanitizeVolume(result);

        // Generate compatible legacy markdown strings
        const coreLogicMarkdown = generateCoreLogic(result.learningProfile);
        const trapMarkdown = generateTrapMechanics(result.learningProfile);
        const walkthroughMarkdown = generateTradeWalkthrough(result.learningProfile);

        console.log(`  ✓ Generated structures for: "${s.name}"`);

        if (!dryRun) {
          await prisma.strategy.update({
            where: { id: s.id },
            data: {
              parentFamily: correctFamily,
              learningProfile: result.learningProfile,
              visualModel: result.visualModel,
              coreLogic: coreLogicMarkdown,
              trapMechanics: trapMarkdown,
              tradeWalkthrough: walkthroughMarkdown,
            }
          });
          console.log(`  ✓ Updated database entry for: "${s.name}"`);
        }
      } catch (err) {
        console.error(`  [Error] Failed to process strategy "${s.name}":`, err);
      }
    }));
  }

  console.log("\n--- STRATEGY CONTENT UPGRADE PROCESS COMPLETE ---");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
