import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

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

const allowedCategories = [
  "Breakout / Retest Visual",
  "Trend Continuation Visual",
  "Range / Mean Reversion Visual",
  "Supply / Demand Zone Visual",
  "Liquidity Sweep / Trap Visual",
  "Volatility / Trailing Stop Visual",
  "Indicator Structure Visual",
  "Multi-Timeframe Confluence Visual",
  "Session / Time Window Visual",
  "Order Flow / Imbalance Visual",
  "Risk / Position Sizing Visual",
  "Crypto Derivatives Visual",
  "Gold Macro Reaction Visual",
  "Forex Pair Strength Visual",
  "Psychology / Process Audit Visual",
  "Portfolio / Allocation Visual"
];

function hasForbiddenWordInValues(obj: any, forbiddenWords: string[]): string | null {
  if (typeof obj === "string") {
    const val = obj.toLowerCase();
    for (const word of forbiddenWords) {
      if (val.includes(word)) {
        return `Found forbidden word "${word}" in value: "${obj}"`;
      }
    }
  } else if (Array.isArray(obj)) {
    for (const item of obj) {
      const found = hasForbiddenWordInValues(item, forbiddenWords);
      if (found) return found;
    }
  } else if (typeof obj === "object" && obj !== null) {
    for (const key of Object.keys(obj)) {
      const found = hasForbiddenWordInValues(obj[key], forbiddenWords);
      if (found) return found;
    }
  }
  return null;
}

// Recursively checks if any text contains future-level concept words
function containsConceptWords(obj: any, words: string[]): string | null {
  if (typeof obj === "string") {
    const val = obj.toLowerCase();
    for (const word of words) {
      // Use boundary checks to avoid false positives like "any session" matching "ny session"
      const regex = new RegExp(`\\b${word}\\b`);
      if (regex.test(val)) {
        return `Found future-concept word "${word}" in text: "${obj}"`;
      }
    }
  } else if (Array.isArray(obj)) {
    for (const item of obj) {
      const found = containsConceptWords(item, words);
      if (found) return found;
    }
  } else if (typeof obj === "object" && obj !== null) {
    for (const key of Object.keys(obj)) {
      // SkiprelatedLessons keys to avoid false positives on prerequisite titles
      if (key === "relatedLessons" || key === "prerequisiteKnowledge") continue;
      const found = containsConceptWords(obj[key], words);
      if (found) return found;
    }
  }
  return null;
}

function checkToneAndPrecision(obj: any, sName: string): string[] {
  const errors: string[] = [];
  const forbiddenWordsWithoutSignal = ["guaranteed", "always wins", "perfect setup", "easy money", "journey", "beginner", "beginners", "recruit", "recruits"];
  
  function traverse(node: any) {
    if (typeof node === "string") {
      const val = node.toLowerCase();
      // Check standard forbidden words
      for (const word of forbiddenWordsWithoutSignal) {
        if (val.includes(word)) {
          errors.push(`Found forbidden word "${word}" in text: "${node}"`);
        }
      }
      
      // Check signal / signals with the MACD allowlist
      if (val.includes("signal")) {
        let cleaned = val;
        cleaned = cleaned.replace(/macd\s+signal\s+line/g, "");
        cleaned = cleaned.replace(/macd\s+trigger\s+line\s*,\s*commonly\s+called\s+the\s+macd\s+signal\s+line/g, "");
        cleaned = cleaned.replace(/macd\s+signal\s+line\s*\/\s*trigger\s+line/g, "");
        cleaned = cleaned.replace(/macd\s+trigger\s+line\s*\/\s*signal\s+line/g, "");
        cleaned = cleaned.replace(/macd\s+signal\s+crossover/g, "");
        cleaned = cleaned.replace(/macd\s+signal/g, "");
        cleaned = cleaned.replace(/macd\s+trigger\s+\(signal\)/g, "");
        
        if (cleaned.includes("signal")) {
          errors.push(`Tone violation: Forbidden word "signal" used outside allowed MACD context in text: "${node}"`);
        }
      }

      // Check fake precision terms for volume / contracts
      if (val.includes("contract") || val.includes("comex")) {
        const isSimulated = val.includes("simulated") || val.includes("example") || val.includes("relative") || val.includes("marker");
        if (!isSimulated && /\b\d+[\d,]*\b/.test(val)) {
          errors.push(`Fake precision violation: Exact volume/contract count found without being marked as simulated: "${node}"`);
        }
      }
    } else if (Array.isArray(node)) {
      for (const item of node) traverse(item);
    } else if (typeof node === "object" && node !== null) {
      for (const key of Object.keys(node)) traverse(node[key]);
    }
  }

  traverse(obj);
  return errors;
}

async function main() {
  console.log("--- RUNNING BATCH 1 QUALITY & VALIDATION CHECKS ---\n");

  const allStrategies = await prisma.strategy.findMany();
  const upgradedStrategies = allStrategies.filter((s: any) => s.learningProfile !== null);

  console.log(`Found ${upgradedStrategies.length} upgraded strategies in the database.\n`);

  let failures = 0;
  let successes = 0;

  // Track checklists, traps, and setup logic across strategies to check for copy-paste duplicates
  const checklistMap: Record<string, string[]> = {};
  const trapsMap: Record<string, string[]> = {};
  const setupLogicMap: Record<string, string[]> = {};
  const labelsMap: Record<string, string[]> = {};
  const zonesMap: Record<string, string[]> = {};

  for (const s of upgradedStrategies) {
    const lp: any = s.learningProfile;
    const vm: any = s.visualModel;

    console.log(`Auditing strategy: "${s.name}" (ID: ${s.id})`);

    const errors: string[] = [];

    // --- CHECK 1: No Placeholders ---
    const strRep = JSON.stringify(s).toLowerCase();
    if (strRep.includes("strategy name") && s.name !== "Strategy Name") {
      errors.push("Placeholder violation: Found literal text 'Strategy Name' inside data fields.");
    }
    const placeholders = ["tbd", "dummy", "placeholder", "lorem ipsum", "todo"];
    for (const p of placeholders) {
      if (strRep.includes(`"${p}"`) || strRep.includes(`: "${p}"`)) {
        errors.push(`Placeholder violation: Found placeholder term "${p}".`);
      }
    }

    // --- CHECK 2: Schema Completeness ---
    if (!lp.simpleExplanation || lp.simpleExplanation.length < 30) errors.push("learningProfile.simpleExplanation is missing or too short.");
    if (!lp.whyExists || lp.whyExists.length < 30) errors.push("learningProfile.whyExists is missing or too short.");
    if (!lp.whyUseful || lp.whyUseful.length < 30) errors.push("learningProfile.whyUseful is missing or too short.");
    if (!lp.setupContext || lp.setupContext.length < 30) errors.push("learningProfile.setupContext is missing or too short.");
    if (!lp.whenToUse || lp.whenToUse.length < 20) errors.push("learningProfile.whenToUse is missing or too short.");
    if (!lp.whenNotToUse || lp.whenNotToUse.length < 20) errors.push("learningProfile.whenNotToUse is missing or too short.");
    if (!lp.suitableTimeframes || lp.suitableTimeframes.length < 15) errors.push("learningProfile.suitableTimeframes is missing or too short.");
    if (!lp.setupLogic || lp.setupLogic.length === 0) errors.push("learningProfile.setupLogic steps are empty.");
    if (!lp.practiceChecklist || lp.practiceChecklist.length === 0) errors.push("learningProfile.practiceChecklist is empty.");
    if (!lp.prerequisiteKnowledge || lp.prerequisiteKnowledge.length < 15) errors.push("learningProfile.prerequisiteKnowledge is missing or too short.");
    if (!lp.confirmationRules || lp.confirmationRules.length < 15) errors.push("learningProfile.confirmationRules is missing or too short.");
    if (!lp.invalidationRules || lp.invalidationRules.length < 15) errors.push("learningProfile.invalidationRules is missing or too short.");
    if (!lp.riskRules || lp.riskRules.length < 15) errors.push("learningProfile.riskRules is missing or too short.");

    // --- CHECK 3: Duplicate Checklist Check ---
    const checklistStr = JSON.stringify(lp.practiceChecklist);
    if (checklistStr) {
      if (checklistMap[checklistStr]) {
        checklistMap[checklistStr].push(s.name);
        errors.push(`Uniqueness violation: Practice checklist is identical to checklist in strategy: ${checklistMap[checklistStr][0]}.`);
      } else {
        checklistMap[checklistStr] = [s.name];
      }
    }

    // --- CHECK 4: Duplicate Traps / Mistakes Check ---
    const trapsStr = `${lp.commonTraps} || ${lp.beginnerMistakes}`;
    if (trapsStr) {
      if (trapsMap[trapsStr]) {
        trapsMap[trapsStr].push(s.name);
        errors.push(`Uniqueness violation: Traps/beginner mistakes text is identical to strategy: ${trapsMap[trapsStr][0]}.`);
      } else {
        trapsMap[trapsStr] = [s.name];
      }
    }

    // --- CHECK 5: Duplicate Setup Steps Check ---
    const setupLogicStr = JSON.stringify(lp.setupLogic);
    if (setupLogicStr) {
      if (setupLogicMap[setupLogicStr]) {
        setupLogicMap[setupLogicStr].push(s.name);
        errors.push(`Uniqueness violation: Setup logic steps are identical to strategy: ${setupLogicMap[setupLogicStr][0]}.`);
      } else {
        setupLogicMap[setupLogicStr] = [s.name];
      }
    }

    // --- CHECK 6: Visual Category Matches Strategy Family ---
    if (vm) {
      if (!allowedCategories.includes(vm.visualCategory)) {
        errors.push(`Visual category violation: "${vm.visualCategory}" is not an allowed visualCategory.`);
      }
      if (s.name.includes("London Open Breakout") && vm.visualCategory !== "Session / Time Window Visual") {
        errors.push(`Visual category mismatch: "${s.name}" should use "Session / Time Window Visual", got "${vm.visualCategory}"`);
      }
      if (s.name.includes("Real Yield Inverse Correlation") && vm.visualCategory !== "Gold Macro Reaction Visual") {
        errors.push(`Visual category mismatch: "${s.name}" should use "Gold Macro Reaction Visual", got "${vm.visualCategory}"`);
      }
      if (s.name.includes("Academy Entry Logic") && vm.visualCategory !== "Liquidity Sweep / Trap Visual") {
        errors.push(`Visual category mismatch: "${s.name}" should use "Liquidity Sweep / Trap Visual", got "${vm.visualCategory}"`);
      }
      if (
        (
          s.name.toLowerCase().includes("crossover") || 
          s.name.toLowerCase().includes("moving average") || 
          s.name.toLowerCase().includes("moving‑average") || 
          s.name.toLowerCase().includes("filter") || 
          s.name.toLowerCase().includes("cross")
        ) &&
        vm.visualCategory !== "Trend Continuation Visual"
      ) {
        errors.push(`Visual category mismatch: "${s.name}" should use "Trend Continuation Visual", got "${vm.visualCategory}"`);
      }
    }

    // --- CHECK 7: Strategy-Specific Labels in visualModel ---
    if (vm) {
      const vmText = JSON.stringify(vm).toLowerCase();
      if (
        (s.name.toLowerCase().includes("crossover") || 
        s.name.toLowerCase().includes("moving average") || 
        s.name.toLowerCase().includes("moving‑average") || 
        s.name.toLowerCase().includes("filter") ||
        s.name.toLowerCase().includes("cross")) &&
        !s.name.toLowerCase().includes("heikin") &&
        !s.name.toLowerCase().includes("supertrend") &&
        !s.name.toLowerCase().includes("parabolic sar") &&
        !s.name.toLowerCase().includes("ichimoku")
      ) {
        const hasMAWords = vmText.includes("ema") || vmText.includes("sma") || vmText.includes("moving average") || vmText.includes("crossover") || vmText.includes("cross");
        if (!hasMAWords) {
          errors.push("Visual content mismatch: Moving average strategy visuals must contain indicators/labels referencing EMA, SMA, or crossover zones.");
        }
      }
      if (s.name.includes("London Open Breakout")) {
        const hasLondonWords = vmText.includes("asian") || vmText.includes("london") || vmText.includes("session") || vmText.includes("breakout");
        if (!hasLondonWords) {
          errors.push("Visual content mismatch: London Open breakout strategy visuals must contain labels referencing the Asian range, London session, or breakouts.");
        }
      }
      if (s.name.includes("Real Yield Inverse Correlation")) {
        const hasYieldWords = vmText.includes("yield") || vmText.includes("tips") || vmText.includes("gold") || vmText.includes("correlation") || vmText.includes("divergence");
        if (!hasYieldWords) {
          errors.push("Visual content mismatch: Real Yield correlation visuals must contain labels referencing Real Yields, TIPS, Gold, or correlation divergence.");
        }
      }
      if (s.name.includes("Academy Entry Logic")) {
        const hasAcademyWords = vmText.includes("sweep") || vmText.includes("liquidity") || vmText.includes("mss") || vmText.includes("structure") || vmText.includes("displacement");
        if (!hasAcademyWords) {
          errors.push("Visual content mismatch: Academy Entry logic visuals must contain labels referencing sweeps, liquidity, or structure shifts.");
        }
      }
    }

    // --- CHECK 8: Visual Zone Completeness ---
    if (vm) {
      if (!vm.chartTitle || vm.chartTitle.length < 10) errors.push("visualModel.chartTitle is missing or too short.");
      if (!vm.chartPurpose || vm.chartPurpose.length < 15) errors.push("visualModel.chartPurpose is missing or too short.");
      if (!vm.whatLearnerShouldNotice || vm.whatLearnerShouldNotice.length < 20) errors.push("visualModel.whatLearnerShouldNotice is missing or too short.");
      if (!vm.mistakePrevented || vm.mistakePrevented.length < 20) errors.push("visualModel.mistakePrevented is missing or too short.");
      if (!vm.confirmationMarker || vm.confirmationMarker.length < 10) errors.push("visualModel.confirmationMarker is missing or too short.");
      if (!vm.invalidationZone || vm.invalidationZone.length < 10) errors.push("visualModel.invalidationZone is missing or too short.");
      if (!vm.trapZone || vm.trapZone.length < 10) errors.push("visualModel.trapZone is missing or too short.");
    } else {
      errors.push("visualModel is missing.");
    }

    // --- CHECK 9: Component Match ---
    if (vm) {
      if (vm.visualCategory === "Gold Macro Reaction Visual" && vm.componentType !== "GoldMacroRealYieldChart") {
        errors.push(`Visual component mismatch: Gold Macro Reaction Visual should use "GoldMacroRealYieldChart", got "${vm.componentType}"`);
      }
      if (vm.visualCategory === "Risk / Position Sizing Visual" && vm.componentType !== "SizingCalculator") {
        errors.push(`Visual component mismatch: Risk / Position Sizing Visual should use "SizingCalculator", got "${vm.componentType}"`);
      }
      if (vm.visualCategory === "Crypto Derivatives Visual" && vm.componentType !== "DerivativesDashboard") {
        errors.push(`Visual component mismatch: Crypto Derivatives Visual should use "DerivativesDashboard", got "${vm.componentType}"`);
      }
    }

    // --- CHECK 10 & 11: Tone Cleanliness, MACD Term Allowlist, & Fake Precision ---
    const toneAndPrecisionErrors = [
      ...checkToneAndPrecision(lp, s.name),
      ...(vm ? checkToneAndPrecision(vm, s.name) : [])
    ];
    errors.push(...toneAndPrecisionErrors);




    // --- CHECK 12: Future-Level Concept Boundaries ---
    const currentLevel = lp.level || 1;
    // Level 1 cannot contain Level 2+ concepts (indicators like ema, sma, rsi, macd, average)
    if (currentLevel === 1) {
      const level2Words = ["ema", "sma", "rsi", "macd", "bollinger", "moving average", "average crossover"];
      const conceptViolation = containsConceptWords(lp, level2Words);
      if (conceptViolation) {
        errors.push(`Level 1 Concept violation: ${conceptViolation}`);
      }
    }
    // Level 2 cannot contain Level 3+ concepts (macro terms like yield, tips, real yield)
    if (currentLevel <= 2) {
      const level3Words = ["real yield", "tips yield", "bond yield", "treasury yield"];
      const conceptViolation = containsConceptWords(lp, level3Words);
      if (conceptViolation) {
        errors.push(`Level 2 Concept violation: ${conceptViolation}`);
      }
    }
    // Level 3 cannot contain Level 4+ concepts (session terms like london open, asian range, comex)
    if (currentLevel <= 3) {
      const level4Words = ["london open", "london session", "asian range", "asian session", "ny session", "new york open", "comex"];
      const conceptViolation = containsConceptWords(lp, level4Words);
      if (conceptViolation) {
        errors.push(`Level 3 Concept violation: ${conceptViolation}`);
      }
    }
    // Level 4 cannot contain Level 5+ concepts (crypto derivatives terms like perp, open interest, funding rate)
    if (currentLevel <= 4) {
      const level5Words = ["perp", "perpetual", "open interest", "funding rate", "derivatives dashboard", "funding arbitrage"];
      const conceptViolation = containsConceptWords(lp, level5Words);
      if (conceptViolation) {
        errors.push(`Level 4 Concept violation: ${conceptViolation}`);
      }
    }

    // --- CHECK 13: Asset-Language Validation ---
    if (s.assetClass === "CRYPTO" || s.assetClass === "GOLD") {
      const cryptoGoldText = JSON.stringify(lp).toLowerCase() + " " + (vm ? JSON.stringify(vm).toLowerCase() : "");
      if (cryptoGoldText.includes(" pips ") || cryptoGoldText.includes(" pip ") || cryptoGoldText.includes(" pips,") || cryptoGoldText.includes(" pip,") || cryptoGoldText.includes(" pips.") || cryptoGoldText.includes(" pip.")) {
        errors.push(`Asset-language violation: ${s.assetClass} strategy should not use Forex pip-based language.`);
      }
    }
    if (s.assetClass === "FOREX") {
      const forexText = JSON.stringify(lp).toLowerCase() + " " + (vm ? JSON.stringify(vm).toLowerCase() : "");
      const hasForexTerms = forexText.includes("pip") || forexText.includes("pips") || forexText.includes("spread") || forexText.includes("session");
      if (!hasForexTerms) {
        errors.push(`Asset-language violation: Forex strategy "${s.name}" should use correct Forex terminology (pair/spread/session/pips).`);
      }
    }

    // --- CHECK 14: Strategy-Family Validation ---
    if (
      s.name.toLowerCase().includes("crossover") || 
      s.name.toLowerCase().includes("moving average") || 
      s.name.toLowerCase().includes("moving‑average") || 
      s.name.toLowerCase().includes("cross")
    ) {
      if (lp.family === "On-Chain Analytics" || lp.family === "Technical Breakout" || lp.family === "Price Action") {
        errors.push(`Strategy-family violation: Moving average strategy "${s.name}" must not be classified as "${lp.family}".`);
      }
    }
    if (s.name.toLowerCase().includes("real yield") || s.name.toLowerCase().includes("correlation")) {
      if (lp.family === "Trend Following" || lp.family === "Simple Indicators" || lp.family === "Technical Breakout") {
        errors.push(`Strategy-family violation: Macro strategy "${s.name}" must not be classified as a simple indicator or breakout strategy.`);
      }
    }
    if (s.name.toLowerCase().includes("sizing") || s.name.toLowerCase().includes("risk")) {
      if (lp.family === "Price Action" || lp.family === "Chart Patterns" || lp.family === "Trend Following") {
        errors.push(`Strategy-family violation: Risk-sizing strategy "${s.name}" must not be classified as price action, chart patterns, or trend following.`);
      }
    }

    // --- CHECK 15: Target-Language Validation ---
    const targetText = JSON.stringify(lp).toLowerCase();
    const rigidProfitRegexes = [
      /\btarget\s+(\d+(\.\d+)?%)\s+profit\b/,
      /\bprofit\s+target\s+of\s+(\d+(\.\d+)?%)/,
      /\baiming\s+for\s+(\d+(\.\d+)?%)\s+profit\b/,
      /\btake-profit\b/,
      /\btake\s+profit\b/,
      /\bprofit\s+target\b/
    ];
    for (const r of rigidProfitRegexes) {
      if (r.test(targetText)) {
        errors.push(`Target-language violation: Found rigid profit-target language matching ${r}. Use educational target logic instead.`);
      }
    }

    // --- CHECK 16: Visual-Specific Validation ---
    if (vm) {
      const vmText = JSON.stringify(vm).toLowerCase();
      if (vm.visualCategory === "Trend Continuation Visual") {
        const hasMALabels = vmText.includes("ema") || vmText.includes("sma") || vmText.includes("moving average") || vmText.includes("crossover") || vmText.includes("cross") || vmText.includes("filter") || vmText.includes("ichimoku") || vmText.includes("heikin") || vmText.includes("adx");
        if (!hasMALabels) {
          errors.push(`Visual-specific violation: Trend Continuation Visual for "${s.name}" must contain EMA, SMA, crossover, moving average, Ichimoku, or Heikin-Ashi labels.`);
        }
      }
      if (vm.visualCategory === "Session / Time Window Visual") {
        const hasSessionLabels = vmText.includes("asian") || vmText.includes("london") || vmText.includes("session") || vmText.includes("range") || vmText.includes("time-window");
        if (!hasSessionLabels) {
          errors.push(`Visual-specific violation: Session/Time Window Visual for "${s.name}" must contain range or session/time-window labels.`);
        }
      }
      if (vm.visualCategory === "Liquidity Sweep / Trap Visual") {
        const hasSweepLabels = vmText.includes("sweep") || vmText.includes("trap") || vmText.includes("rejection") || vmText.includes("mss") || vmText.includes("structure");
        if (!hasSweepLabels) {
          errors.push(`Visual-specific violation: Liquidity Sweep / Trap Visual for "${s.name}" must contain sweep, trap, rejection, or structure labels.`);
        }
      }
      if (vm.visualCategory === "Gold Macro Reaction Visual") {
        const hasMacroLabels = vmText.includes("macro") || vmText.includes("yield") || vmText.includes("tips") || vmText.includes("correlation") || vmText.includes("divergence");
        if (!hasMacroLabels) {
          errors.push(`Visual-specific violation: Gold Macro Reaction Visual for "${s.name}" must contain macro correlation, yield, TIPS, or correlation divergence labels.`);
        }
      }

      // Visual Label Uniqueness Check
      const labelsStr = JSON.stringify(vm.requiredLabels || []);
      if (labelsStr && labelsStr !== "[]") {
        if (labelsMap[labelsStr]) {
          labelsMap[labelsStr].push(s.name);
          errors.push(`Uniqueness violation: Required labels are identical to labels in strategy: ${labelsMap[labelsStr][0]}.`);
        } else {
          labelsMap[labelsStr] = [s.name];
        }
      }

      // Visual Zone Uniqueness Check
      const zonesStr = JSON.stringify(vm.requiredZones || []);
      if (zonesStr && zonesStr !== "[]") {
        if (zonesMap[zonesStr]) {
          zonesMap[zonesStr].push(s.name);
          errors.push(`Uniqueness violation: Required zones are identical to zones in strategy: ${zonesMap[zonesStr][0]}.`);
        } else {
          zonesMap[zonesStr] = [s.name];
        }
      }
    }

    // --- NEW BATCH 2 CHECKS ---

    // 1. Similar-Strategy Duplication Check (Check simpleExplanation, whyExists, whyUseful, setupContext, sandboxInstructions)
    for (const other of upgradedStrategies) {
      if (other.id === s.id) continue;
      const otherLp: any = other.learningProfile;
      if (!otherLp) continue;
      if (lp.simpleExplanation === otherLp.simpleExplanation) {
        errors.push(`Duplication violation: simpleExplanation is identical to strategy "${other.name}".`);
      }
      if (lp.whyExists === otherLp.whyExists) {
        errors.push(`Duplication violation: whyExists is identical to strategy "${other.name}".`);
      }
      if (lp.whyUseful === otherLp.whyUseful) {
        errors.push(`Duplication violation: whyUseful is identical to strategy "${other.name}".`);
      }
      if (lp.setupContext === otherLp.setupContext) {
        errors.push(`Duplication violation: setupContext is identical to strategy "${other.name}".`);
      }
      if (lp.sandboxInstructions === otherLp.sandboxInstructions) {
        errors.push(`Duplication violation: sandboxInstructions is identical to strategy "${other.name}".`);
      }
    }

    // 2. Session-Breakout Differentiation Check (Intraday vs Swing, NY vs London)
    const lowerName = s.name.toLowerCase();
    if (lowerName.includes("breakout")) {
      const isIntraday = lowerName.includes("intraday");
      const isSwing = lowerName.includes("swing");
      const tfText = (lp.suitableTimeframes || "").toLowerCase();
      if (isIntraday) {
        if (!tfText.includes("5m") && !tfText.includes("5-minute") && !tfText.includes("15m") && !tfText.includes("15-minute")) {
          errors.push(`Session breakout differentiation error: Intraday breakout "${s.name}" should specify a lower timeframe (5m or 15m).`);
        }
      }
      if (isSwing) {
        if (!tfText.includes("1h") && !tfText.includes("4h") && !tfText.includes("daily") && !tfText.includes("hour")) {
          errors.push(`Session breakout differentiation error: Swing breakout "${s.name}" should specify a higher timeframe (1H, 4H, or daily).`);
        }
      }
      if (lowerName.includes("london") && !tfText.includes("london") && !JSON.stringify(lp).toLowerCase().includes("london")) {
        errors.push(`Session breakout differentiation error: London Open breakout must contain London session details.`);
      }
      if (lowerName.includes("new york") && !tfText.includes("new york") && !JSON.stringify(lp).toLowerCase().includes("new york") && !JSON.stringify(lp).toLowerCase().includes("ny open")) {
        errors.push(`Session breakout differentiation error: New York Open breakout must contain New York session details.`);
      }
    }

    // 3. Indicator-Family Differentiation Check (EMA, SMA, WMA, MACD, ADX)
    const fullContent = JSON.stringify(s).toLowerCase();
    if (lowerName.includes("wma") || lowerName.includes("weighted moving average")) {
      if (!fullContent.includes("wma") && !fullContent.includes("weighted")) {
        errors.push(`Indicator-family differentiation error: WMA strategy "${s.name}" must contain "WMA" or "weighted".`);
      }
    }
    if (lowerName.includes("macd")) {
      if (!fullContent.includes("macd") && !fullContent.includes("histogram") && !fullContent.includes("divergence")) {
        errors.push(`Indicator-family differentiation error: MACD strategy "${s.name}" must contain "MACD", "histogram", or "divergence".`);
      }
    }
    if (lowerName.includes("adx") || lowerName.includes("directional index")) {
      if (!fullContent.includes("adx") && !fullContent.includes("strength") && !fullContent.includes("directional")) {
        errors.push(`Indicator-family differentiation error: ADX strategy "${s.name}" must contain "ADX", "strength", or "directional".`);
      }
    }
    if (lowerName.includes("golden cross") || lowerName.includes("death cross")) {
      if (!fullContent.includes("daily") && !fullContent.includes("50 sma") && !fullContent.includes("200 sma") && !fullContent.includes("50-period") && !fullContent.includes("200-period")) {
        errors.push(`Indicator-family differentiation error: Golden Cross strategy "${s.name}" must contain daily timeframe 50/200 SMA references.`);
      }
    }

    // 4. Strategy Existence Justification Check
    if (lp.whyExists.length < 40 || lp.whyUseful.length < 40) {
      errors.push(`Existence justification error: "whyExists" and "whyUseful" descriptions must be substantial (at least 40 characters) to justify unique existence.`);
    }

    // 5. Component Specialization Check
    if (vm) {
      const lowerName = s.name.toLowerCase();
      if (lowerName.includes("macd")) {
        if (vm.componentType !== "MACDStructureChart") {
          errors.push(`Component specialization error: MACD strategy "${s.name}" must use componentType "MACDStructureChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("adx") || lowerName.includes("directional index")) {
        if (vm.componentType !== "ADXStrengthChart") {
          errors.push(`Component specialization error: ADX strategy "${s.name}" must use componentType "ADXStrengthChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("supertrend")) {
        if (vm.componentType !== "SupertrendVolatilityChart") {
          errors.push(`Component specialization error: Supertrend strategy "${s.name}" must use componentType "SupertrendVolatilityChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("parabolic sar")) {
        if (vm.componentType !== "ParabolicSARChart") {
          errors.push(`Component specialization error: Parabolic SAR strategy "${s.name}" must use componentType "ParabolicSARChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("ichimoku")) {
        if (vm.componentType !== "IchimokuCloudChart") {
          errors.push(`Component specialization error: Ichimoku strategy "${s.name}" must use componentType "IchimokuCloudChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("heikin")) {
        if (vm.componentType !== "HeikinAshiTrendChart") {
          errors.push(`Component specialization error: Heikin-Ashi strategy "${s.name}" must use componentType "HeikinAshiTrendChart", got "${vm.componentType}".`);
        }
      } else if (lowerName.includes("donchian")) {
        if (vm.componentType !== "DonchianChannelBreakoutChart") {
          errors.push(`Component specialization error: Donchian strategy "${s.name}" must use componentType "DonchianChannelBreakoutChart", got "${vm.componentType}".`);
        }
      } else if (
        lowerName.includes("crossover") || 
        lowerName.includes("moving average") || 
        lowerName.includes("moving‑average") || 
        lowerName.includes("filter") ||
        lowerName.includes("cross") ||
        lowerName.includes("wma")
      ) {
        if (vm.componentType !== "MovingAverageCrossoverChart") {
          errors.push(`Component specialization error: Trend/MA strategy "${s.name}" must use componentType "MovingAverageCrossoverChart", got "${vm.componentType}".`);
        }
      } else if (
        lowerName.includes("london") || 
        lowerName.includes("new york open") || 
        lowerName.includes("ny open") || 
        lowerName.includes("overnight range")
      ) {
        if (vm.componentType !== "SessionBreakoutChart") {
          errors.push(`Component specialization error: Breakout strategy "${s.name}" must use componentType "SessionBreakoutChart", got "${vm.componentType}".`);
        }
      }
    }

    // 6. Visual Depth Check
    if (vm) {
      const vmText = JSON.stringify(vm).toLowerCase();
      const lowerName = s.name.toLowerCase();
      if (lowerName.includes("macd")) {
        const hasZeroLine = vmText.includes("zero line") || vmText.includes("zero-line") || vmText.includes("baseline");
        const hasHistogram = vmText.includes("histogram") || vmText.includes("bar");
        const hasSignalOrTrigger = vmText.includes("signal line") || vmText.includes("trigger line") || vmText.includes("macd line");
        if (!hasZeroLine) errors.push(`Visual depth check error: MACD visual must reference the "zero line" or "baseline".`);
        if (!hasHistogram) errors.push(`Visual depth check error: MACD visual must reference "histogram" bars.`);
        if (!hasSignalOrTrigger) errors.push(`Visual depth check error: MACD visual must reference MACD / signal / trigger lines.`);
      }
      if (lowerName.includes("adx") || lowerName.includes("directional index")) {
        const hasThreshold = vmText.includes("threshold") || vmText.includes("25") || vmText.includes("20");
        const hasWeakTrend = vmText.includes("weak trend") || vmText.includes("trend strength") || vmText.includes("no trend");
        if (!hasThreshold) errors.push(`Visual depth check error: ADX visual must reference the "threshold" line (e.g. 25).`);
        if (!hasWeakTrend) errors.push(`Visual depth check error: ADX visual must reference the "weak trend" zone or "trend strength".`);
      }
      if (lowerName.includes("supertrend")) {
        const hasStopLine = vmText.includes("trailing stop") || vmText.includes("stop line") || vmText.includes("supertrend line");
        const hasFlip = vmText.includes("flip") || vmText.includes("reversal") || vmText.includes("crossover");
        const hasVolatility = vmText.includes("volatility") || vmText.includes("atr") || vmText.includes("chop") || vmText.includes("warning");
        if (!hasStopLine) errors.push(`Visual depth check error: Supertrend visual must reference the trailing stop/Supertrend line.`);
        if (!hasFlip) errors.push(`Visual depth check error: Supertrend visual must reference trend flip or reversal events.`);
        if (!hasVolatility) errors.push(`Visual depth check error: Supertrend visual must reference volatility bands, ATR, or chop warning zones.`);
      }
      if (lowerName.includes("parabolic sar")) {
        const hasDots = vmText.includes("dot") || vmText.includes("sar dot") || vmText.includes("points");
        const hasFlip = vmText.includes("flip") || vmText.includes("reversal");
        const hasAcceleration = vmText.includes("acceleration") || vmText.includes("boundary");
        if (!hasDots) errors.push(`Visual depth check error: Parabolic SAR visual must reference SAR acceleration dots.`);
        if (!hasFlip) errors.push(`Visual depth check error: Parabolic SAR visual must reference dot flips or reversals.`);
        if (!hasAcceleration) errors.push(`Visual depth check error: Parabolic SAR visual must reference trend acceleration or boundaries.`);
      }
      if (lowerName.includes("ichimoku")) {
        const hasLines = vmText.includes("tenkan") || vmText.includes("kijun") || vmText.includes("conversion") || vmText.includes("base line") || vmText.includes("lines");
        const hasCloud = vmText.includes("cloud") || vmText.includes("senkou") || vmText.includes("span");
        const hasChop = vmText.includes("inside") || vmText.includes("chop") || vmText.includes("false trend") || vmText.includes("equilibrium");
        if (!hasLines) errors.push(`Visual depth check error: Ichimoku visual must reference Tenkan/Kijun/conversion/base lines.`);
        if (!hasCloud) errors.push(`Visual depth check error: Ichimoku visual must reference the Senkou Span cloud/boundary.`);
        if (!hasChop) errors.push(`Visual depth check error: Ichimoku visual must reference inside-cloud zones or false trends.`);
      }
      if (lowerName.includes("heikin")) {
        const hasHA = vmText.includes("heikin") || vmText.includes("ashi") || vmText.includes("smoothed");
        const hasContinuation = vmText.includes("continuation") || vmText.includes("marker") || vmText.includes("signal");
        const hasFlat = vmText.includes("flat") || vmText.includes("bottom") || vmText.includes("top") || vmText.includes("boundaries");
        if (!hasHA) errors.push(`Visual depth check error: Heikin-Ashi visual must reference Heikin-Ashi smoothed candles.`);
        if (!hasContinuation) errors.push(`Visual depth check error: Heikin-Ashi visual must reference trend continuation indicators.`);
        if (!hasFlat) errors.push(`Visual depth check error: Heikin-Ashi visual must reference flat candle boundaries/tops/bottoms.`);
      }
      if (lowerName.includes("donchian")) {
        const hasBands = vmText.includes("upper") || vmText.includes("lower") || vmText.includes("band") || vmText.includes("donchian channel");
        const hasBreakout = vmText.includes("breakout") || vmText.includes("trigger") || vmText.includes("expansion");
        const hasTrap = vmText.includes("trap") || vmText.includes("false") || vmText.includes("sweep");
        if (!hasBands) errors.push(`Visual depth check error: Donchian visual must reference upper/lower channel bands.`);
        if (!hasBreakout) errors.push(`Visual depth check error: Donchian visual must reference channel breakout triggers.`);
        if (!hasTrap) errors.push(`Visual depth check error: Donchian visual must reference false breakout traps.`);
      }
      if (
        (lowerName.includes("crossover") || 
        lowerName.includes("moving average") || 
        lowerName.includes("moving‑average") || 
        lowerName.includes("filter") ||
        lowerName.includes("cross") ||
        lowerName.includes("wma")) &&
        !lowerName.includes("supertrend") &&
        !lowerName.includes("parabolic sar") &&
        !lowerName.includes("ichimoku") &&
        !lowerName.includes("heikin")
      ) {
        const hasMALines = vmText.includes("ema") || vmText.includes("sma") || vmText.includes("wma") || vmText.includes("moving average") || vmText.includes("line");
        const hasCrossoverOrPoint = vmText.includes("crossover") || vmText.includes("cross") || vmText.includes("trigger") || vmText.includes("point") || vmText.includes("crossover point");
        const hasLagOrTrap = vmText.includes("lag") || vmText.includes("trap") || vmText.includes("whipsaw") || vmText.includes("false") || vmText.includes("consolidation");
        if (!hasMALines) errors.push(`Visual depth check error: MA visual must reference indicator/MA lines.`);
        if (!hasCrossoverOrPoint) errors.push(`Visual depth check error: MA visual must reference crossover/trigger points.`);
        if (!hasLagOrTrap) errors.push(`Visual depth check error: MA visual must reference whipsaw / lag trap / false crossover zones.`);
      }
      if (
        (lowerName.includes("london") || 
        lowerName.includes("new york open") || 
        lowerName.includes("ny open") || 
        lowerName.includes("overnight range")) &&
        !lowerName.includes("donchian")
      ) {
        const hasRangeBounds = vmText.includes("range") || vmText.includes("boundary") || vmText.includes("high/low") || vmText.includes("limit") || vmText.includes("channel") || vmText.includes("box");
        const hasBreakoutRetest = vmText.includes("breakout") || vmText.includes("retest") || vmText.includes("expansion") || vmText.includes("trigger") || vmText.includes("entry");
        const hasSessionOrTiming = vmText.includes("session") || vmText.includes("london") || vmText.includes("new york") || vmText.includes("ny") || vmText.includes("overnight") || vmText.includes("hours") || vmText.includes("gmt");
        if (!hasRangeBounds) errors.push(`Visual depth check error: Session visual must reference range boundaries/limits.`);
        if (!hasBreakoutRetest) errors.push(`Visual depth check error: Session visual must reference breakout or retest zones.`);
        if (!hasSessionOrTiming) errors.push(`Visual depth check error: Session visual must reference session timings, hours, or names.`);
      }
    }

    // --- FINAL DECISION ---
    if (errors.length > 0) {
      failures++;
      console.log("  ❌ FAILED Validation:");
      errors.forEach(e => console.log(`    - ${e}`));
    } else {
      successes++;
      console.log(`  ✓ PASSED (Category: "${vm.visualCategory}", Component: "${vm.componentType}")`);
    }
    console.log();
  }

  console.log("--- VALIDATION RUN COMPLETE ---");
  console.log(`Successes: ${successes}`);
  console.log(`Failures: ${failures}`);

  await prisma.$disconnect();
  await pool.end();

  if (failures > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error("Validation error:", err);
  process.exit(1);
});
