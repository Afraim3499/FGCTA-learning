import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import {
  getLegacyStrategyCode,
  getVaultStrategyRef,
  strategyMatchesModule,
} from "../lib/strategy-curriculum";

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

type Severity = "major" | "moderate" | "minor";

type AuditIssue = {
  severity: Severity;
  category: string;
  detail: string;
};

type StrategyAudit = {
  id: string;
  ref: string;
  displayCode: string;
  name: string;
  assetClass: string;
  sequenceNumber: number;
  profileLevel: number | null;
  linkedModules: string[];
  examQuestionCount: number;
  score: number;
  status: "10/10" | "needs polish" | "needs rework";
  issues: AuditIssue[];
};

const REQUIRED_PROFILE_FIELDS = [
  "simpleExplanation",
  "whyExists",
  "whyUseful",
  "setupContext",
  "whenToUse",
  "whenNotToUse",
  "suitableTimeframes",
  "prerequisiteKnowledge",
  "confirmationRules",
  "invalidationRules",
  "riskRules",
  "targetLogic",
  "sandboxInstructions",
];

const LIVE_TRADE_WORDING = [
  /\bstop-loss\b/i,
  /\bstop loss\b/i,
  /\baccount balance\b/i,
  /\btrading account\b/i,
  /\brisk(?:ing)? more than\b/i,
  /\bper trade\b/i,
  /\benter a long\b/i,
  /\benter a short\b/i,
  /\bbuy stop\b/i,
  /\bsell stop\b/i,
  /\bleading to losses\b/i,
];

const GENERIC_PHRASES = [
  /high-probability/i,
  /market sentiment/i,
  /sufficient market participation/i,
  /proper risk management/i,
  /strategy visualization/i,
  /confirms a potential/i,
  /validates the strength/i,
];

const BANNED_VALUE_WORDS = [
  /\bbeginner(?:s)?\b/i,
  /\brecruit(?:s)?\b/i,
  /\bguaranteed\b/i,
  /\balways wins\b/i,
  /\beasy money\b/i,
  /\bjourney\b/i,
  /\btake-profit\b/i,
  /\btake profit\b/i,
  /\bprofit target\b/i,
];

const LEVEL_1_BLOCKED = [
  /\bEMA\b/i,
  /\bSMA\b/i,
  /\bATR\b/i,
  /\bMACD\b/i,
  /\bADX\b/i,
  /\bsession(?:s)?\b/i,
  /\bsweep(?:s)?\b/i,
  /\border block(?:s)?\b/i,
  /\bliquidity\b/i,
  /\bBollinger\b/i,
  /\bRSI\b/i,
];

function stringifyValues(value: unknown, includeKeys = false): string {
  const parts: string[] = [];
  function walk(node: unknown, key?: string) {
    if (includeKeys && key) parts.push(key);
    if (typeof node === "string") {
      parts.push(node);
      return;
    }
    if (typeof node === "number" || typeof node === "boolean") {
      parts.push(String(node));
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(item => walk(item));
      return;
    }
    if (node && typeof node === "object") {
      Object.entries(node as Record<string, unknown>).forEach(([childKey, childValue]) => walk(childValue, childKey));
    }
  }
  walk(value);
  return parts.join("\n");
}

function containsDisallowedSignal(text: string): boolean {
  let cleaned = text.toLowerCase();
  const allowed = [
    /macd\s+signal\s+line/g,
    /macd\s+trigger\s+line\s*,\s*commonly\s+called\s+the\s+macd\s+signal\s+line/g,
    /macd\s+signal\s+line\s*\/\s*trigger\s+line/g,
    /macd\s+trigger\s+line\s*\/\s*signal\s+line/g,
    /macd\s+signal\s+crossover/g,
    /macd\s+signal/g,
    /macd\s+trigger\s+\(signal\)/g,
  ];
  for (const pattern of allowed) cleaned = cleaned.replace(pattern, "");
  return /\bsignal(?:s)?\b/.test(cleaned);
}

function addIssue(issues: AuditIssue[], severity: Severity, category: string, detail: string) {
  issues.push({ severity, category, detail });
}

function testPatterns(text: string, patterns: RegExp[]): RegExp[] {
  return patterns.filter(pattern => pattern.test(text));
}

function tokenSet(text: string): Set<string> {
  const stopWords = new Set([
    "the", "and", "for", "with", "that", "this", "from", "when", "then", "into", "price", "strategy",
    "market", "setup", "confirm", "confirmation", "use", "using", "identify", "should", "after", "before",
  ]);
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.has(word))
  );
}

function jaccard(a: string, b: string): number {
  const first = tokenSet(a);
  const second = tokenSet(b);
  const union = new Set([...first, ...second]);
  if (union.size === 0) return 0;
  let intersection = 0;
  for (const token of first) {
    if (second.has(token)) intersection++;
  }
  return intersection / union.size;
}

function hasAll(text: string, words: RegExp[]): boolean {
  return words.every(word => word.test(text));
}

function expectedComponent(name: string, assetClass?: string): string | null {
  const normalized = name.toLowerCase().replace(/[\u2010-\u2015]/g, "-");
  if (normalized.includes("technical + options skew confirmation") && assetClass === "CRYPTO") return "VolatilitySkewChart";
  if (normalized.includes("relative strength rotation") && assetClass === "FOREX") return "RelativeValueBasketChart";
  if (normalized.includes("basis arbitrage") && assetClass === "GOLD") return "SpotFuturesBasisChart";
  if (normalized.includes("volatility breakout system") && normalized.includes("turtle") && assetClass === "FOREX") return "DonchianChannelBreakoutChart";
  if (normalized.includes("fixed fraction position sizing") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("kelly criterion position sizing") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("dynamic support") && normalized.includes("pivot points") && assetClass === "FOREX") return "PivotBreakoutChart";
  if (normalized.includes("volatility adjusted position sizing") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("fibonacci retracement strategy") && assetClass === "FOREX") return "FibonacciConfluenceChart";
  if (normalized.includes("pivot point breakout") && assetClass === "FOREX") return "PivotBreakoutChart";
  if (normalized.includes("stop-loss placement under support") && assetClass === "CRYPTO") return "ChannelBreakoutChart";
  if (normalized.includes("trailing stop strategy") && assetClass === "CRYPTO") return "ATRVolatilityChart";
  if (normalized.includes("moving average envelope") && assetClass === "FOREX") return "KeltnerChannelChart";
  if (normalized.includes("risk-reward ratio targeting") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("ichimoku kumo breakout") && assetClass === "FOREX") return "IchimokuCloudChart";
  if (normalized.includes("leverage control") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("spot-futures divergence") && assetClass === "GOLD") return "SpotFuturesBasisChart";
  if (normalized.includes("adaptive rsi") && assetClass === "FOREX") return "RSIMeanReversionChart";
  if (normalized.includes("portfolio diversification across sectors") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("heikin-ashi") && normalized.includes("rsi") && assetClass === "FOREX") return "HeikinAshiTrendChart";
  if (normalized.includes("event straddle") && assetClass === "GOLD") return "OptionsStraddleChart";
  if (normalized.includes("stablecoin hedging") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("williams %r") && assetClass === "FOREX") return "OscillatorRangeChart";
  if (normalized.includes("insurance via options") && assetClass === "CRYPTO") return "ProtectivePutHedgeChart";
  if (normalized.includes("klinger volume oscillator") && assetClass === "FOREX") return "VolumeMomentumChart";
  if (normalized.includes("elder triple screen") && assetClass === "FOREX") return "MultiTimeframeConfluenceChart";
  if (normalized.includes("dollar-cost averaging") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("event strangle") && assetClass === "GOLD") return "OptionsStraddleChart";
  if (normalized.includes("laddered entry and exit") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("gann angle") && assetClass === "FOREX") return "FibonacciConfluenceChart";
  if (normalized.includes("liquidation threshold monitoring") && assetClass === "CRYPTO") return "LiquidationHeatmapChart";
  if (normalized.includes("pivot point camarilla") && assetClass === "FOREX") return "PivotBreakoutChart";
  if (normalized.includes("volatility selling") && normalized.includes("short straddle") && assetClass === "GOLD") return "OptionsStraddleChart";
  if (normalized.includes("hedged beta exposure") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("quantile regression forecasting") && assetClass === "FOREX") return "ModelAuditChart";
  if (normalized.includes("rebalancing into stablecoins") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("fractal adaptive moving average") && assetClass === "FOREX") return "MovingAverageCrossoverChart";
  if (normalized.includes("gamma scalping") && assetClass === "GOLD") return "GammaScalpingChart";
  if (normalized.includes("dynamic position sizing based on drawdown") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("renko chart trend trading") && assetClass === "FOREX") return "RenkoTrendChart";
  if (normalized.includes("stop-loss under volatility band") && assetClass === "CRYPTO") return "ATRVolatilityChart";
  if (normalized.includes("point & figure breakout") && assetClass === "FOREX") return "PointFigureBreakoutChart";
  if (normalized.includes("bull call spread") && assetClass === "GOLD") return "OptionsVerticalSpreadChart";
  if (normalized.includes("capital allocation caps") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("tick chart scalping") && assetClass === "FOREX") return "ExecutionMicrostructureChart";
  if (normalized.includes("stress testing portfolio") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("currency strength meter") && assetClass === "FOREX") return "ForexPairStrengthMeter";
  if (normalized.includes("bear put spread") && assetClass === "GOLD") return "OptionsVerticalSpreadChart";
  if (normalized.includes("economic surprise index") && assetClass === "FOREX") return "MacroFundamentalComparisonChart";
  if (normalized.includes("risk buffer via insurance protocols") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("political risk premium") && assetClass === "FOREX") return "MacroFundamentalComparisonChart";
  if (normalized.includes("portfolio volatility cap") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("ratio call spread") && assetClass === "GOLD") return "OptionsVerticalSpreadChart";
  if (normalized.includes("geopolitical hedging") && assetClass === "FOREX") return "RiskOnCarryBasketChart";
  if (normalized.includes("liquidity risk assessment") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("iron condor") && assetClass === "GOLD") return "OptionsIronCondorChart";
  if (normalized.includes("high-yield bond spread") && assetClass === "FOREX") return "MacroFundamentalComparisonChart";
  if (normalized.includes("counterparty risk diversification") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("purchasing managers") && normalized.includes("pmi") && assetClass === "FOREX") return "MacroFundamentalComparisonChart";
  if (normalized.includes("stablecoin yield diversification") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("emergency stop on exchange outage") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("butterfly spread") && assetClass === "GOLD") return "OptionsButterflySpreadChart";
  if (normalized.includes("speculative position unwind") && assetClass === "FOREX") return "COTPositioningChart";
  if (normalized.includes("crowded trade fade") && assetClass === "FOREX") return "RetailSentimentContrarianChart";
  if (normalized.includes("max drawdown alert") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("staged exit") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("quant sentiment index") && assetClass === "FOREX") return "ModelAuditChart";
  if (normalized.includes("protective put") && assetClass === "GOLD") return "ProtectivePutHedgeChart";
  if (normalized.includes("hedging stablecoin depeg") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("multi-asset correlation") && assetClass === "FOREX") return "CorrelationBetaChart";
  if (normalized.includes("portfolio insurance via stable yield") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("news volume spike scalping") && assetClass === "FOREX") return "ExecutionMicrostructureChart";
  if (normalized.includes("covered call") && assetClass === "GOLD") return "CoveredCallChart";
  if (normalized.includes("nfp pre-positioning") && assetClass === "FOREX") return "NewsBreakoutChart";
  if (normalized.includes("tax-loss harvesting") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("collar strategy") && assetClass === "GOLD") return "ProtectivePutHedgeChart";
  if (normalized.includes("rebalancing frequency optimization") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("structural break detection") && assetClass === "FOREX") return "ModelAuditChart";
  if (normalized.includes("overnight/weekend gap") && assetClass === "FOREX") return "GapBreakoutChart";
  if (normalized.includes("options collar hedging") && assetClass === "CRYPTO") return "ProtectivePutHedgeChart";
  if (normalized.includes("diversified custody") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("order flow footprint") && assetClass === "GOLD") return "FootprintDeltaChart";
  if (normalized.includes("opening range fade") && assetClass === "FOREX") return "OpeningRangeTimeStopChart";
  if (normalized.includes("overnight carry basket") && assetClass === "FOREX") return "InterestRateDifferentialChart";
  if (normalized.includes("leverage ladder") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("time decay arbitrage") && assetClass === "FOREX") return "CalendarSpreadRollChart";
  if (normalized.includes("position hedging via inverse") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("liquidity sweep fade") && assetClass === "GOLD") return "MarketStructureChart";
  if (normalized.includes("fx forward spread trading") && assetClass === "FOREX") return "FXForwardCurveChart";
  if (normalized.includes("emergency wallet seed backup") && assetClass === "CRYPTO") return "ModelAuditChart";
  if (normalized.includes("momentum fuel check") && assetClass === "FOREX") return "MomentumStrengthChart";
  if (normalized.includes("realized vs implied volatility spread") && assetClass === "FOREX") return "VolatilitySkewChart";
  if (normalized.includes("dynamic hedging via perps") && assetClass === "CRYPTO") return "DerivativesDashboard";
  if (normalized.includes("stop cluster breakout") && assetClass === "GOLD") return "ChannelBreakoutChart";
  if (normalized.includes("self-custody vs exchange risk") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("insurance on cefi platforms") && assetClass === "CRYPTO") return "PortfolioAllocationChart";
  if (normalized.includes("relative value") && normalized.includes("gold vs silver") && assetClass === "GOLD") return "PairSpreadMeanReversionChart";
  if (normalized.includes("multi-sig") && assetClass === "CRYPTO") return "ModelAuditChart";
  if (normalized.includes("fixed withdrawal schedule") && assetClass === "CRYPTO") return "ModelAuditChart";
  if (normalized.includes("relative value") && normalized.includes("gold vs usd") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("structured exit laddering") && assetClass === "CRYPTO") return "SizingCalculator";
  if (normalized.includes("statistical arbitrage") && normalized.includes("gold pair") && assetClass === "GOLD") return "PairSpreadMeanReversionChart";
  if (normalized.includes("execution algorithm") && normalized.includes("vwap") && normalized.includes("twap") && assetClass === "GOLD") return "ExecutionMicrostructureChart";
  if (normalized.includes("market making") && normalized.includes("inventory model") && assetClass === "GOLD") return "MarketMakingSpreadChart";
  if (normalized.includes("gold vs dxy divergence") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("gold vs real yields spread") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("gold vs equities risk-off divergence") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("gold vs oil relationship") && assetClass === "GOLD") return "CorrelationBetaChart";
  if (normalized.includes("gold vs copper correlation") && assetClass === "GOLD") return "CorrelationBetaChart";
  if (normalized.includes("gold vs inflation expectations") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("gold vs silver ratio") && assetClass === "GOLD") return "PairSpreadMeanReversionChart";
  if (normalized.includes("rule-based trend system") && assetClass === "GOLD") return "MovingAverageCrossoverChart";
  if (normalized.includes("rule-based mean reversion") && assetClass === "GOLD") return "ZScoreMeanReversionChart";
  if (normalized.includes("volatility-targeted system") && assetClass === "GOLD") return "SizingCalculator";
  if (normalized.includes("regime-switching model") && assetClass === "GOLD") return "ModelAuditChart";
  if (normalized.includes("machine learning forecast model") && assetClass === "GOLD") return "ModelAuditChart";
  if (normalized.includes("portfolio rebalancing algorithm") && assetClass === "GOLD") return "PortfolioAllocationChart";
  if (normalized.includes("multi-timeframe confluence") && assetClass === "GOLD") return "MultiTimeframeConfluenceChart";
  if (normalized.includes("macro + technical confluence") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("price action + volatility") && assetClass === "GOLD") return "ATRVolatilityChart";
  if (normalized.includes("yield + usd + chart structure") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if ((normalized.includes("ai-assisted signal") || normalized.includes("ai-assisted trade review")) && assetClass === "GOLD") return "ModelAuditChart";
  if (normalized.includes("atr-based position sizing") && assetClass === "GOLD") return "SizingCalculator";
  if (normalized.includes("leverage control") && assetClass === "GOLD") return "SizingCalculator";
  if (normalized.includes("news event risk reduction") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("drawdown controls") && assetClass === "GOLD") return "SizingCalculator";
  if (normalized.includes("portfolio hedging with gold") && assetClass === "GOLD") return "PortfolioAllocationChart";
  if (normalized.includes("correlation-aware exposure") && assetClass === "GOLD") return "CorrelationBetaChart";
  if ((normalized.includes("dummy strategy") || normalized.includes("previous-day high breakout")) && assetClass === "GOLD") return "SessionBreakoutChart";
  if (normalized.includes("bollinger squeeze breakout") && assetClass === "FOREX") return "BollingerSqueezeChart";
  if (normalized.includes("price action candle timing") && assetClass === "FOREX") return "CandlestickPatternChart";
  if (normalized.includes("structural breakout") && normalized.includes("retest") && assetClass === "FOREX") return "TrendlineBreakRetestChart";
  if (normalized.includes("exchange inflow exhaustion") && assetClass === "CRYPTO") return "ExchangeInflowDistributionChart";
  if (normalized.includes("single moving-average filter") && assetClass === "FOREX") return "MovingAverageCrossoverChart";
  if (normalized.includes("q1 seasonal demand surge") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("adx trend strength filter") && assetClass === "FOREX") return "ADXStrengthChart";
  if (normalized.includes("macd trend-following") && assetClass === "FOREX") return "MACDStructureChart";
  if (normalized.includes("funding rate arbitrage") && normalized.includes("delta neutral") && assetClass === "CRYPTO") return "FundingArbitrageChart";
  if (normalized.includes("moving-average crossover trend") && assetClass === "FOREX") return "MovingAverageCrossoverChart";
  if (normalized.includes("real yield inversion play") && assetClass === "GOLD") return "GoldMacroRealYieldChart";
  if (normalized.includes("supertrend volatility stop") && assetClass === "FOREX") return "SupertrendVolatilityChart";
  if (normalized.includes("ichimoku cloud logic") && assetClass === "FOREX") return "IchimokuCloudChart";
  if (normalized.includes("london session momentum") && assetClass === "FOREX") return "SessionBreakoutChart";
  if (normalized.includes("options put/call ratio")) return "RiskReversalSkewChart";
  if (normalized.includes("volatility targeting strategy")) return "SizingCalculator";
  if (normalized.includes("on-chain + technical confluence") || normalized.includes("on-chain \\+ technical confluence")) return "ModelAuditChart";
  if (normalized.includes("speed of market momentum scalping")) return "ExecutionMicrostructureChart";
  if (normalized.includes("funding + social sentiment filter") || normalized.includes("funding \\+ social sentiment filter")) return "ModelAuditChart";
  if (normalized.includes("news fade strategy")) return "NewsBreakoutChart";
  if (normalized.includes("multi-factor quant scoring")) return "ModelAuditChart";
  if (normalized.includes("straddle the news")) return "OptionsStraddleChart";
  if (normalized.includes("technical + fundamental confirmation") || normalized.includes("technical \\+ fundamental confirmation")) return "ModelAuditChart";
  if (normalized.includes("options skew") && assetClass === "GOLD") return "RiskReversalSkewChart";
  if (normalized.includes("gamma scalping") && assetClass === "FOREX") return "GammaScalpingChart";
  if (normalized.includes("funding + basis + oi composite") || normalized.includes("funding \\+ basis \\+ oi composite")) return "DerivativesDashboard";
  if (normalized.includes("calendar spread in fx options")) return "CalendarSpreadRollChart";
  if (normalized.includes("on-chain + sentiment contrarian") || normalized.includes("on-chain \\+ sentiment contrarian")) return "ModelAuditChart";
  if (normalized.includes("interest rate swaption hedge")) return "RiskReversalSkewChart";
  if (normalized.includes("arbitrage bot")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("machine-learning-enhanced execution")) return "ExecutionMicrostructureChart";
  if (normalized.includes("etf outflow indicator")) return "GoldMacroRealYieldChart";
  if (normalized.includes("cross-hedging with correlated asset")) return "CorrelationBetaChart";
  if (normalized.includes("rebalancing algorithm")) return "PortfolioAllocationChart";
  if (normalized.includes("portfolio diversification across currency pairs")) return "PortfolioAllocationChart";
  if (normalized.includes("dynamic leverage adjustment")) return "SizingCalculator";
  if (normalized.includes("momentum + mean reversion hybrid bot") || normalized.includes("momentum \\+ mean reversion hybrid bot")) return "ModelAuditChart";
  if (normalized.includes("retail sentiment contrarian")) return "RetailSentimentContrarianChart";
  if (normalized.includes("ai-assisted discretionary trading")) return "ModelAuditChart";
  if (normalized.includes("trailing stop strategy")) return "ParabolicSARChart";
  if (normalized.includes("risk parity allocation algorithm")) return "PortfolioAllocationChart";
  if (normalized.includes("equity curve stop")) return "SizingCalculator";
  if (normalized.includes("risk parity currency portfolio")) return "PortfolioAllocationChart";
  if (normalized.includes("reinforcement learning rebalancer")) return "ModelAuditChart";
  if (normalized.includes("correlation matrix position adjustment")) return "CorrelationBetaChart";
  if (normalized.includes("flash loan arbitrage")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("atr-based stop placement")) return "SizingCalculator";
  if (normalized.includes("volatility scaling portfolio allocation")) return "PortfolioAllocationChart";
  if (normalized.includes("cot commercial hedger accumulation")) return "COTPositioningChart";
  if (normalized.includes("governance token short")) return "GovernanceEventChart";
  if (normalized.includes("drawdown control")) return "SizingCalculator";
  if (normalized.includes("dao treasury diversification")) return "TreasuryFlowAuditChart";
  if (normalized.includes("hedging with correlated currency pairs")) return "CorrelationBetaChart";
  if (normalized.includes("rule-based moving average bot")) return "MovingAverageCrossoverChart";
  if (normalized.includes("cot divergence")) return "COTDivergenceChart";
  if (normalized.includes("direct hedging")) return "PortfolioAllocationChart";
  if (normalized.includes("indicator stack bot")) return "ModelAuditChart";
  if (normalized.includes("options hedging")) return "RiskReversalSkewChart";
  if (normalized.includes("scalping bot")) return "ExecutionMicrostructureChart";
  if (normalized.includes("etf inflow momentum")) return "GoldMacroRealYieldChart";
  if (normalized.includes("forward contract hedging")) return "FXForwardCurveChart";
  if (normalized.includes("stablecoin arbitrage across chains")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("de-dollarization theme")) return "GoldMacroRealYieldChart";
  if (normalized.includes("impermanent loss protection")) return "PortfolioAllocationChart";
  if (normalized.includes("macro + machine learning hybrid") || normalized.includes("macro \\+ machine learning hybrid")) return "ModelAuditChart";
  if (normalized.includes("supply disruption")) return "GoldMacroRealYieldChart";
  if (normalized.includes("seasonal + technical confirmation") || normalized.includes("seasonal \\+ technical confirmation")) return "SeasonalPatternAuditChart";
  if (normalized.includes("staking yield strategy")) return "StakingFlowAuditChart";
  if (normalized.includes("restaking & liquid staking")) return "StakingFlowAuditChart";
  if (normalized.includes("volatility breakout + fundamental filter") || normalized.includes("volatility breakout \\+ fundamental filter")) return "ATRExpansionBreakoutChart";
  if (normalized.includes("cot speculator extreme")) return "COTPositioningChart";
  if (normalized.includes("fixed fractional position sizing")) return "SizingCalculator";
  if (normalized.includes("liquidation farming on defi lending")) return "LiquidationHeatmapChart";
  if (normalized.includes("fixed ratio position sizing")) return "SizingCalculator";
  if (normalized.includes("synthetic asset arbitrage")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("kelly criterion sizing")) return "SizingCalculator";
  if (normalized.includes("insurance pool participation")) return "PortfolioAllocationChart";
  if (normalized.includes("liquidity provision to stable pair")) return "MarketMakingSpreadChart";
  if (normalized.includes("geopolitical risk")) return "GoldMacroRealYieldChart";
  if (normalized.includes("liquidity provision to volatile pair")) return "PortfolioAllocationChart";
  if (normalized.includes("indicator + price action confluence") || normalized.includes("indicator \\+ price action confluence")) return "ModelAuditChart";
  if (normalized.includes("triangular confluence")) return "ModelAuditChart";
  if (normalized.includes("yield farming rotation")) return "PortfolioAllocationChart";
  if (normalized.includes("hybrid carry + price action") || normalized.includes("hybrid carry \\+ price action")) return "InterestRateDifferentialChart";
  if (normalized.includes("dex arbitrage")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("central bank net buying") || normalized.includes("central bank net selling")) return "GoldMacroRealYieldChart";
  if (normalized.includes("mean reversion + options hedging") || normalized.includes("mean reversion \\+ options hedging")) return "RiskReversalSkewChart";
  if (normalized.includes("perpetual dex funding arbitrage")) return "FundingArbitrageChart";
  if (normalized.includes("news + technical event trading") || normalized.includes("news \\+ technical event trading")) return "NewsBreakoutChart";
  if (normalized.includes("lending & borrowing looping")) return "FundingArbitrageChart";
  if (normalized.includes("sentiment + risk-on/off regime") || normalized.includes("sentiment \\+ risk-on/off regime")) return "RiskOnCarryBasketChart";
  if (normalized.includes("rate arbitrage between lending platforms")) return "FundingArbitrageChart";
  if (normalized.includes("order flow + price action confluence") || normalized.includes("order flow \\+ price action confluence")) return "FootprintDeltaChart";
  if (normalized.includes("fx basket mean-reversion quant")) return "PairSpreadMeanReversionChart";
  if (
    normalized.includes("usd strength") ||
    normalized.includes("yield curve inversion") ||
    normalized.includes("high volatility risk-off")
  ) return "GoldMacroRealYieldChart";
  if (normalized.includes("hft momentum ignition")) return "ExecutionMicrostructureChart";
  if (normalized.includes("order flow imbalance analysis")) return "DOMOrderFlowChart";
  if (normalized.includes("adaptive moving average") && normalized.includes("kaufman")) return "MovingAverageCrossoverChart";
  if (normalized.includes("imbalance + price ladder scalping") || normalized.includes("imbalance \\+ price ladder scalping")) return "DOMOrderFlowChart";
  if (normalized.includes("volatility scaling of position sizes")) return "SizingCalculator";
  if (normalized.includes("trend + fundamental confirmation") || normalized.includes("trend \\+ fundamental confirmation")) return "MacroFundamentalComparisonChart";
  if (normalized.includes("vwap reversion execution")) return "ExecutionMicrostructureChart";
  if (normalized.includes("liquidity provision incentives")) return "MarketMakingSpreadChart";
  if (normalized.includes("technical + sentiment confluence") || normalized.includes("technical \\+ sentiment confluence")) return "ModelAuditChart";
  if (normalized.includes("cross-asset statistical factor model")) return "ModelAuditChart";
  if (normalized.includes("fundamental + cot confluence") || normalized.includes("fundamental \\+ cot confluence")) return "COTPositioningChart";
  if (normalized.includes("multi-timeframe trend alignment")) return "MultiTimeframeConfluenceChart";
  if (normalized.includes("social media sentiment")) return "ForexSocialSentimentChart";
  if (normalized.includes("whale exchange inflow")) return "ExchangeInflowDistributionChart";
  if (normalized.includes("exchange net flow divergence")) return "ExchangeNetflowDivergenceChart";
  if (normalized.includes("sentiment divergence")) return "PriceSentimentDivergenceChart";
  if (normalized.includes("dormant coin movement")) return "CoinAgeMovementChart";
  if (normalized.includes("sentiment confirmed breakout")) return "SentimentBreakoutChart";
  if (normalized.includes("sentiment & macro combined")) return "SentimentMacroConfluenceChart";
  if (normalized.includes("nr7/nr4") && assetClass === "GOLD") return "NRRangeBreakoutChart";
  if (normalized.includes("utxo age distribution")) return "UTXOAgeDistributionChart";
  if (normalized.includes("depth of market")) return "DOMOrderFlowChart";
  if (normalized.includes("wallet clustering")) return "WalletClusterAuditChart";
  if (normalized.includes("volume profile trading")) return "VolumeProfileChart";
  if (normalized.includes("stablecoin supply ratio")) return "StablecoinSupplyRatioChart";
  if (normalized.includes("fibonacci retracement confluence")) return "FibonacciConfluenceChart";
  if (normalized.includes("miner outflow")) return "MinerOutflowAuditChart";
  if (normalized.includes("footprint chart strategy")) return "FootprintDeltaChart";
  if (
    normalized.includes("neural network price prediction") ||
    normalized.includes("random forest classification") ||
    normalized.includes("support vector machine") ||
    normalized.includes("reinforcement learning trading agent") ||
    normalized.includes("kalman filter trend estimation") ||
    normalized.includes("hidden markov model")
  ) return "ModelAuditChart";
  if (
    normalized.includes("fed dovish pivot") ||
    normalized.includes("fed hawkish pivot") ||
    normalized.includes("inflation hedge") ||
    normalized.includes("usd weakness")
  ) return "GoldMacroRealYieldChart";
  if (normalized.includes("spatial arbitrage")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("triangular arbitrage") && assetClass === "CRYPTO") return "TriangularArbitrageChart";
  if (
    normalized.includes("cross-exchange market making") ||
    normalized.includes("latency market making") ||
    normalized.includes("high-frequency market making")
  ) return "MarketMakingSpreadChart";
  if (normalized.includes("statistical arbitrage basket") || normalized.includes("cointegration basket trading")) return "PairSpreadMeanReversionChart";
  if (normalized.includes("miner hashrate")) return "HashrateNetworkAuditChart";
  if (normalized.includes("institutional supply and demand") || normalized === "market supply/demand") return "SupplyDemandZoneChart";
  if (normalized.includes("market making")) return "MarketMakingSpreadChart";
  if (normalized.includes("stake/unstake")) return "StakingFlowAuditChart";
  if (normalized.includes("peg maintenance")) return "PegMaintenanceChart";
  if (normalized.includes("moving average bounce")) return "MovingAverageBounceChart";
  if (normalized.includes("horizontal s/r breakout")) return "HorizontalSRBreakoutChart";
  if (normalized.includes("round number bounce")) return "RoundNumberBounceChart";
  if (normalized.includes("gas price and activity")) return "GasActivityAuditChart";
  if (normalized.includes("spot-futures basis")) return "SpotFuturesBasisChart";
  if (normalized.includes("triangular arbitrage")) return "TriangularArbitrageChart";
  if (normalized.includes("covered interest arbitrage")) return "CoveredInterestArbitrageChart";
  if (normalized.includes("reverse basis trade")) return "ReverseBasisTradeChart";
  if (normalized.includes("price channel break") && normalized.includes("keltner")) return "KeltnerChannelChart";
  if (normalized.includes("trend + volume confirmation")) return "VolumePriceConfirmationChart";
  if (normalized.includes("moving average crossover bot")) return "MovingAverageCrossoverChart";
  if (normalized.includes("protective put hedging")) return "ProtectivePutHedgeChart";
  if (normalized.includes("turtle trading system")) return "DonchianChannelBreakoutChart";
  if (normalized.includes("covered call income")) return "CoveredCallChart";
  if (normalized.includes("real yield decline") || normalized.includes("real yield rise")) return "GoldMacroRealYieldChart";
  if (normalized.includes("channel breakout system")) return "ChannelBreakoutChart";
  if (normalized.includes("butterfly spread")) return "OptionsButterflySpreadChart";
  if (normalized.includes("mean reversion algorithm") && normalized.includes("bollinger")) return "BollingerBandChart";
  if (normalized.includes("iron condor")) return "OptionsIronCondorChart";
  if (normalized.includes("gamma tilt")) return "GammaTiltChart";
  if (normalized.includes("statistical arbitrage") && normalized.includes("pairs algorithm")) return "PairSpreadMeanReversionChart";
  if (normalized.includes("genetic algorithm parameter")) return "ModelAuditChart";
  if (normalized.includes("liquidation cascade trigger")) return "LiquidationCascadeChart";
  if (normalized.includes("cross-exchange arbitrage")) return "CrossExchangeArbitrageChart";
  if (normalized.includes("calendar spread")) return "CalendarSpreadRollChart";
  if (normalized.includes("relative value currency basket")) return "RelativeValueBasketChart";
  if (normalized.includes("perpetual funding rate arbitrage")) return "FundingArbitrageChart";
  if (normalized.includes("yield curve arbitrage")) return "FXForwardCurveChart";
  if (normalized.includes("order anticipation")) return "OrderAnticipationRiskChart";
  if (normalized.includes("gamma scalping")) return "GammaScalpingChart";
  if (normalized.includes("liquidity provision with vwap/twap")) return "ExecutionMicrostructureChart";
  if (normalized.includes("volatility skew trade")) return "VolatilitySkewChart";
  if (normalized.includes("percent of volume")) return "ExecutionMicrostructureChart";
  if (normalized.includes("long straddle") || normalized.includes("short straddle")) return "OptionsStraddleChart";
  if (normalized.includes("iceberg detection")) return "ExecutionMicrostructureChart";
  if (normalized.includes("liquidity run reversal")) return "MarketStructureChart";
  if (normalized.includes("put-call parity")) return "PutCallParityChart";
  if (normalized.includes("commitment of traders")) return "COTPositioningChart";
  if (normalized.includes("commercial hedger")) return "COTDivergenceChart";
  if (normalized.includes("retail sentiment contrarian")) return "RetailSentimentContrarianChart";
  if (normalized.includes("retail sentiment trend")) return "RetailSentimentTrendChart";
  if (normalized.includes("options sentiment")) return "RiskReversalSkewChart";
  if (normalized.includes("forex fear & greed")) return "ForexFearGreedChart";
  if (normalized.includes("news sentiment analysis")) return "NewsSentimentReactionChart";
  if (normalized.includes("parabolic sar reversal") && assetClass === "GOLD") return "ParabolicSARChart";
  if (normalized.includes("funding & oi combined")) return "FundingOpenInterestMatrixChart";
  if (normalized.includes("funding + basis convergence") || normalized.includes("funding \\+ basis convergence")) return "FundingBasisConvergenceChart";
  if (normalized.includes("crowded short squeeze")) return "ShortSqueezeMechanicsChart";
  if (normalized.includes("liquidation level front-run")) return "LiquidationFrontRunRiskChart";
  if (normalized.includes("reddit sentiment")) return "RedditSentimentAuditChart";
  if (normalized.includes("whale exchange outflow")) return "ExchangeOutflowAuditChart";
  if (normalized.includes("bollinger squeeze breakout") && assetClass === "GOLD") return "BollingerSqueezeChart";
  if (normalized.includes("atr expansion breakout") && assetClass === "GOLD") return "ATRExpansionBreakoutChart";
  if (normalized.includes("fx fair value")) return "PPPFairValueChart";
  if (normalized.includes("open interest expansion")) return "OpenInterestExpansionChart";
  if (normalized.includes("political event trading")) return "PoliticalEventScenarioChart";
  if (normalized.includes("alligator and fractals")) return "AlligatorFractalChart";
  if (normalized.includes("open interest divergence")) return "OpenInterestDivergenceChart";
  if (normalized.includes("seasonal patterns")) return "SeasonalPatternAuditChart";
  if (normalized.includes("liquidation cluster")) return "LiquidationHeatmapChart";
  if (normalized.includes("terms of trade spread convergence")) return "TermsOfTradeConvergenceChart";
  if (normalized.includes("liquidation cascade fade")) return "LiquidationCascadeChart";
  if (normalized.includes("safe-haven demand")) return "SafeHavenFlowChart";
  if (normalized.includes("social sentiment index")) return "SocialSentimentAuditChart";
  if (normalized.includes("risk-on carry basket")) return "RiskOnCarryBasketChart";
  if (normalized.includes("twitter influencer")) return "InfluencerAuditChart";
  if (normalized.includes("fear & greed")) return "FearGreedCycleChart";
  if (normalized.includes("news trading on economic releases")) return "NewsBreakoutChart";
  if (normalized.includes("flag and pennant") && assetClass === "GOLD") return "FlagPennantChart";
  if (normalized.includes("on-chain treasury")) return "TreasuryFlowAuditChart";
  if (normalized.includes("central bank divergence")) return "CentralBankDivergenceChart";
  if (normalized.includes("narrative sentiment index")) return "SentimentNarrativeChart";
  if (normalized.includes("triangle breakout") && assetClass === "GOLD") return "TriangleBreakoutChart";
  if (normalized.includes("commodity currency correlation")) return "CommodityCurrencyCorrelationChart";
  if (normalized.includes("regulatory event trading")) return "RegulatoryEventChart";
  if (normalized.includes("terms of trade") || normalized.includes("inflation differential") || normalized.includes("gdp growth differential") || normalized.includes("balance of payments")) return "MacroFundamentalComparisonChart";
  if (normalized.includes("funding rate arbitrage")) return "FundingArbitrageChart";
  if (normalized.includes("funding rate mean reversion")) return "FundingMeanReversionChart";
  if (normalized.includes("funding rate momentum")) return "FundingMomentumChart";
  if (normalized.includes("ichimoku cloud breakout") && assetClass === "GOLD") return "IchimokuCloudChart";
  if (normalized.includes("harmonic patterns")) return "HarmonicPatternChart";
  if (normalized.includes("elliott wave")) return "ElliottWaveChart";
  if (normalized.includes("candlestick cluster confluence")) return "CandlestickClusterChart";
  if (normalized.includes("multi-timeframe candlestick")) return "MultiTimeframeCandlestickChart";
  if (normalized.includes("double top/bottom") && assetClass === "GOLD" && (normalized.includes("intraday") || normalized.includes("swing"))) return "DoubleTopBottomChart";
  if (normalized.includes("cup and handle") && assetClass === "GOLD") return "CupHandleChart";
  if (normalized.includes("flag and pennant") && assetClass === "GOLD") return "FlagPennantChart";
  if (normalized.includes("supply shock") || normalized.includes("burn event") || normalized.includes("vesting cliff")) return "TokenSupplyEventChart";
  if (normalized.includes("macro liquidity correlation")) return "MacroCorrelationChart";
  if (normalized === "carry trade" || normalized.includes("uncovered interest rate parity") || normalized.includes("interest rate differential momentum")) return "InterestRateDifferentialChart";
  if (normalized.includes("correlation & beta")) return "CorrelationBetaChart";
  if (normalized.includes("network adoption") || normalized.includes("developer activity")) return "FundamentalGrowthAuditChart";
  if (normalized.includes("governance proposal")) return "GovernanceEventChart";
  const lower = name.toLowerCase().replace(/[‐‑‒–—]/g, "-");
  if (lower.includes("open interest confirmation")) return "DerivativesDashboard";
  if (lower.includes("rectangle (range) pattern")) return "ChannelBreakoutChart";
  if (lower.includes("trendline bounce")) return "TrendlineBounceChart";
  if (lower.includes("bull/bear market condition adjustment")) return "MarketRegimeChart";
  if (lower.includes("break of structure") || lower.includes("order block trading") || lower.includes("liquidity sweep") || lower.includes("quasimodo")) return "MarketStructureChart";
  if (lower.includes("narrative rotation") || lower.includes("ecosystem growth") || lower.includes("tokenomics supply-demand") || lower.includes("token unlock event") || lower.includes("halving cycle")) return "CryptoCycleCatalystChart";
  if (lower.includes("inside bar") && assetClass === "GOLD") return "InsideBarBreakoutChart";
  if (lower.includes("volatility targeting strategy") || lower.includes("fixed fraction") || lower.includes("kelly criterion") || lower.includes("volatility adjusted position sizing") || lower.includes("risk-reward ratio")) return "SizingCalculator";
  if (lower.includes("stop-loss placement under support")) return "ChannelBreakoutChart";
  if (lower.includes("trailing stop strategy")) return "ATRVolatilityChart";
  if (lower.includes("funding + basis") || lower.includes("options skew")) return "DerivativesDashboard";
  if (lower.includes("portfolio diversification") || lower.includes("stablecoin hedging") || lower.includes("dollar-cost averaging") || lower.includes("laddered entry")) return "PortfolioAllocationChart";
  if (lower.includes("on-chain + technical") || lower.includes("funding + social sentiment") || lower.includes("multi-factor quant") || lower.includes("technical + fundamental") || lower.includes("on-chain + sentiment")) return "ModelAuditChart";
  if (lower.includes("ml regression") || lower.includes("reinforcement learning") || lower.includes("sentiment-driven ml") || lower.includes("autoencoder") || lower.includes("genetic algorithm")) return "ModelAuditChart";
  if (lower.includes("twap execution") || lower.includes("vwap execution") || lower.includes("iceberg orders") || lower.includes("high-frequency market making") || lower.includes("latency arbitrage")) return "ExecutionMicrostructureChart";
  if (lower.includes("trendline break")) return "TrendlineBreakRetestChart";
  if (lower.includes("multi-timeframe trend confluence")) return "MultiTimeframeConfluenceChart";
  if (lower.includes("funding-adjusted breakout")) return "DerivativesDashboard";
  if (lower.includes("volume confirmation on trend")) return "VolumePriceConfirmationChart";
  if (lower.includes("inside bar") || lower.includes("head & shoulders") || lower.includes("head and shoulders") || lower.includes("double top") || lower.includes("double bottom") || lower.includes("triple top") || lower.includes("triple bottom") || lower.includes("cup and handle") || lower.includes("flag and pennant") || lower.includes("flag & pennant") || lower.includes("triangle breakout") || lower.includes("triangle pattern") || lower.includes("wedge patterns")) return "ChartPatternBreakoutChart";
  if (lower.includes("momentum breakout with volume")) return "VolumeBreakoutChart";
  if (lower.includes("momentum with moving average")) return "MovingAverageCrossoverChart";
  if (lower.includes("momentum factor") || lower.includes("absolute momentum") || lower.includes("momentum divergence")) return "MomentumStrengthChart";
  if (lower.includes("commodity channel index") && lower.includes("momentum")) return "MomentumStrengthChart";
  if (lower.includes("time-stop breakout") || lower.includes("opening range breakout")) return "OpeningRangeTimeStopChart";
  if (lower.includes("vwap trend reversal")) return "VWAPTrendReversalChart";
  if (lower.includes("vwap reversion")) return "VWAPReversionChart";
  if (lower.includes("stochastic oscillator")) return "StochasticOscillatorChart";
  if (lower.includes("oscillator range trading")) return "OscillatorRangeChart";
  if (lower.includes("commodity channel index") || lower.includes("cci")) return "CCIReversionChart";
  if (lower.includes("atr channel trend")) return "ATRChannelTrendChart";
  if (lower.includes("volume-price confirmation")) return "VolumePriceConfirmationChart";
  if (lower.includes("on-balance volume") || lower.includes("obv")) return "OBVDivergenceChart";
  if (lower.includes("pairs trading") || lower.includes("cointegration")) return "PairSpreadMeanReversionChart";
  if (lower.includes("support and resistance bounce") || lower.includes("support/resistance bounce") || lower.includes("support/resistance scalping")) return "ChannelBreakoutChart";
  if (lower.includes("engulfing pattern") || lower.includes("bullish engulfing") || lower.includes("bearish engulfing") || lower.includes("outside bar") || lower.includes("pin bar") || lower.includes("hammer pattern") || lower.includes("shooting star") || lower.includes("inverted hammer") || lower.includes("doji")) return "CandlestickPatternChart";
  if (lower.includes("regression channel reversion")) return "ZScoreMeanReversionChart";
  if (lower.includes("volatility mean reversion") || lower.includes("atr regression")) return "ATRVolatilityChart";
  if (lower.includes("z-score") || lower.includes("z score")) return "ZScoreMeanReversionChart";
  if (lower.includes("pair-wise") || lower.includes("statistical arbitrage")) return "PairSpreadMeanReversionChart";
  if (lower.includes("breakout with volume confirmation")) return "VolumeBreakoutChart";
  if (lower.includes("volume-weighted momentum")) return "VolumeMomentumChart";
  if (lower.includes("breakout with momentum confirmation")) return "MomentumBreakoutChart";
  if (lower.includes("momentum strength")) return "MomentumStrengthChart";
  if (lower.includes("rsi momentum")) return "RSIMomentumChart";
  if (lower.includes("volatility expansion breakout")) return "ATRVolatilityChart";
  if (lower.includes("grid breakout")) return "GridBreakoutChart";
  if (lower.includes("price-rate-of-change") || lower.includes("rate of change") || lower.includes("roc")) return "ROCMomentumChart";
  if (lower.includes("news release breakout")) return "NewsBreakoutChart";
  if (lower.includes("macd")) return "MACDStructureChart";
  if (lower.includes("adx")) return "ADXStrengthChart";
  if (lower.includes("supertrend")) return "SupertrendVolatilityChart";
  if (lower.includes("parabolic sar")) return "ParabolicSARChart";
  if (lower.includes("ichimoku")) return "IchimokuCloudChart";
  if (lower.includes("heikin")) return "HeikinAshiTrendChart";
  if (/\brsi\b/i.test(name) && lower.includes("mean reversion")) return "RSIMeanReversionChart";
  if (lower.includes("keltner")) return "KeltnerChannelChart";
  if (lower.includes("pivot point")) return "PivotBreakoutChart";
  if (lower.includes("gap breakout")) return "GapBreakoutChart";
  if (lower.includes("bollinger")) return "BollingerBandChart";
  if (lower.includes("donchian")) return "DonchianChannelBreakoutChart";
  if (lower.includes("london open") || lower.includes("new york open") || lower.includes("overnight range") || lower.includes("asia session") || lower.includes("pre-london") || lower.includes("new york session")) return "SessionBreakoutChart";
  if (lower.includes("price channel")) return "ChannelBreakoutChart";
  if (lower.includes("support") && lower.includes("resistance") && lower.includes("breakout")) return "ChannelBreakoutChart";
  if (lower.includes("range breakout")) return "ChannelBreakoutChart";
  if (lower.includes("higher") && lower.includes("lower")) return "MarketStructureChart";
  if (lower.includes("real yield")) return "GoldMacroRealYieldChart";
  if (lower.includes("moving average") || lower.includes("moving‑average") || lower.includes("sma") || lower.includes("ema") || lower.includes("golden cross") || lower.includes("death cross") || lower.includes("triple moving") || lower.includes("wma")) {
    return "MovingAverageCrossoverChart";
  }
  return null;
}

function suffixFor(strategy: any): string {
  return ` [${strategy.name} (${strategy.assetClass})]`;
}

function auditStrategy(strategy: any, modules: any[], exams: any[], allReady: any[]): StrategyAudit {
  const lp = strategy.learningProfile || {};
  const vm = strategy.visualModel || {};
  const text = stringifyValues({ learningProfile: lp, visualModel: vm });
  const lower = text.toLowerCase();
  const issues: AuditIssue[] = [];
  const ref = getVaultStrategyRef(strategy.id);
  const linkedModules = modules
    .filter(module => strategyMatchesModule({
      id: strategy.id,
      logicId: ref,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      sequenceNumber: strategy.sequenceNumber,
      assetClass: strategy.assetClass,
      parentFamily: strategy.parentFamily,
      learningProfile: lp,
    }, module))
    .map(module => `${module.moduleNumber} ${module.title}`);
  const examQuestions = exams.filter(exam => exam.logicId === ref);

  if (linkedModules.length === 0) {
    addIssue(issues, "major", "Curriculum", "No module is linked through the stable strategy ref.");
  }
  if (examQuestions.length === 0) {
    addIssue(issues, "major", "Exam", "No strategy exam question is linked through the stable strategy ref.");
  }

  for (const field of REQUIRED_PROFILE_FIELDS) {
    const value = lp[field];
    if (!value || stringifyValues(value).trim().length < 25) {
      addIssue(issues, "moderate", "Learning profile", `${field} is missing or too thin.`);
    }
  }

  if (!Array.isArray(lp.setupLogic) || lp.setupLogic.length < 3) {
    addIssue(issues, "moderate", "Learning profile", "setupLogic should have at least 3 clear teaching steps.");
  }
  if (!Array.isArray(lp.practiceChecklist) || lp.practiceChecklist.length < 5) {
    addIssue(issues, "moderate", "Learning profile", "practiceChecklist should have at least 5 concrete checks.");
  }
  if (!lp.exampleWalkthrough || stringifyValues(lp.exampleWalkthrough).length < 120) {
    addIssue(issues, "moderate", "Learning profile", "exampleWalkthrough is missing or too thin for a learner walkthrough.");
  }

  for (const pattern of BANNED_VALUE_WORDS) {
    if (pattern.test(text)) {
      addIssue(issues, "major", "Tone", `Restricted wording found: ${pattern.source}`);
    }
  }
  if (containsDisallowedSignal(text)) {
    addIssue(issues, "major", "Tone", "Restricted word used outside MACD context: signal.");
  }

  const liveTradeMatches = testPatterns(text, LIVE_TRADE_WORDING);
  if (liveTradeMatches.length > 0) {
    addIssue(
      issues,
      "moderate",
      "Educational framing",
      `Live-trade or account-style wording should be converted to educational/invalidation language: ${liveTradeMatches.map(pattern => pattern.source).join(", ")}`
    );
  }

  const genericMatches = testPatterns(text, GENERIC_PHRASES);
  if (genericMatches.length >= 2) {
    addIssue(
      issues,
      "minor",
      "Teaching tone",
      `Several generic phrases found; rewrite with more concrete teaching language: ${genericMatches.map(pattern => pattern.source).join(", ")}`
    );
  }

  if ((strategy.assetClass === "CRYPTO" || strategy.assetClass === "GOLD") && /\bpips?\b/i.test(text)) {
    addIssue(issues, "major", "Asset language", `${strategy.assetClass} strategy uses Forex pip wording.`);
  }
  if (strategy.assetClass === "CRYPTO" && !/(crypto|exchange|venue|liquidity|slippage|depth|spread percentage|perp|funding)/i.test(text)) {
    addIssue(issues, "moderate", "Asset language", "Crypto strategy lacks crypto-specific market language.");
  }
  if (strategy.assetClass === "GOLD" && !/(gold|xau|wick|dollar|point|macro|comex|yield|volatility|asian|london|new york)/i.test(text)) {
    addIssue(issues, "moderate", "Asset language", "Gold strategy lacks Gold-specific market language.");
  }
  if (strategy.assetClass === "FOREX" && !/(forex|pair|spread|pips?|session|london|new york|currency)/i.test(text)) {
    addIssue(issues, "moderate", "Asset language", "Forex strategy lacks Forex-specific market language.");
  }

  const expected = expectedComponent(strategy.name, strategy.assetClass);
  if (expected && vm.componentType !== expected) {
    addIssue(issues, "major", "Visual", `Expected ${expected}, found ${vm.componentType || "missing componentType"}.`);
  }
  if (!Array.isArray(vm.requiredZones) || vm.requiredZones.length < 3) {
    addIssue(issues, "moderate", "Visual", "requiredZones should include at least 3 teaching zones.");
  }
  if (!Array.isArray(vm.requiredLabels) || vm.requiredLabels.length < 3) {
    addIssue(issues, "moderate", "Visual", "requiredLabels should include at least 3 teaching labels.");
  }
  const expectedSuffix = suffixFor(strategy);
  const unsuffixed = [...(vm.requiredZones || []), ...(vm.requiredLabels || [])].filter((label: string) => typeof label === "string" && !label.includes(expectedSuffix));
  if (unsuffixed.length > 0) {
    addIssue(issues, "minor", "Visual", "One or more required visual labels/zones are missing the strategy suffix.");
  }

  const firstModuleLevel = linkedModules[0] ? Number.parseInt(linkedModules[0].split(".")[0], 10) : null;
  if (Number.isInteger(lp.level) && firstModuleLevel !== null && lp.level !== firstModuleLevel) {
    addIssue(issues, "minor", "Curriculum", `learningProfile.level is ${lp.level}, but linked module level is ${firstModuleLevel}.`);
  }

  if (strategy.name.includes("Higher") && strategy.name.includes("Higher")) {
    const blocked = LEVEL_1_BLOCKED.filter(pattern => pattern.test(text));
    if (blocked.length > 0) {
      addIssue(issues, "major", "Level discipline", `Level 1 structure strategy contains advanced terms: ${blocked.map(pattern => pattern.source).join(", ")}`);
    }
  }

  if (strategy.name === "Price Channel Breakout") {
    if (!hasAll(text, [/upper/i, /lower/i, /channel/i, /(false|failed)/i, /(inside|invalidation)/i])) {
      addIssue(issues, "major", "Visual", "Price Channel visual/content must show upper/lower channel, failed break, and invalidation back inside.");
    }
  }

  if (strategy.name === "Donchian Channel Breakout") {
    if (!hasAll(text, [/(upper|high)/i, /(lower|low)/i, /(period|donchian)/i, /close/i, /(false|failed)/i, /(inside|invalidation)/i])) {
      addIssue(issues, "major", "Visual", "Donchian content must show N-period high/low, breakout close, false break, and invalidation back inside.");
    }
  }

  if (strategy.name === "Supertrend Indicator Strategy" && strategy.assetClass === "CRYPTO") {
    if (!/(slippage|liquidity depth|depth)/i.test(text) || !/(crypto|exchange|venue)/i.test(text)) {
      addIssue(issues, "major", "Asset language", "Crypto Supertrend must teach crypto volatility plus slippage/liquidity-depth caution.");
    }
  }

  const bollinger = allReady.filter(item => item.name.toLowerCase().includes("bollinger"));
  if (strategy.name.toLowerCase().includes("bollinger")) {
    if (strategy.name === "Bollinger Band Trend Breakout" && !hasAll(text, [/trend/i, /(expansion|expand)/i, /(continuation|continue)/i])) {
      addIssue(issues, "major", "Differentiation", "Forex Bollinger Trend Breakout must emphasize trend continuation and band expansion.");
    }
    if (strategy.name === "Bollinger Band Breakout" && strategy.assetClass === "GOLD" && !hasAll(text, [/gold/i, /wick/i, /(fakeout|false|trap)/i])) {
      addIssue(issues, "major", "Differentiation", "Gold Bollinger Breakout must emphasize Gold volatility, wick behavior, and fakeout/trap risk.");
    }
    if (strategy.name.includes("Intraday") && !hasAll(text, [/(intraday|short-timeframe|short timeframe)/i, /squeeze/i, /(retest|trap)/i])) {
      addIssue(issues, "major", "Differentiation", "Gold intraday Bollinger version must emphasize short-timeframe squeeze, breakout, and retest/trap behavior.");
    }
    for (const other of bollinger) {
      if (other.id === strategy.id) continue;
      const similarity = jaccard(stringifyValues(lp.setupLogic) + stringifyValues(lp.practiceChecklist), stringifyValues(other.learningProfile?.setupLogic) + stringifyValues(other.learningProfile?.practiceChecklist));
      if (similarity > 0.62) {
        addIssue(issues, "moderate", "Differentiation", `Bollinger teaching is too similar to ${other.name} (${other.assetClass}); similarity ${similarity.toFixed(2)}.`);
      }
    }
  }

  if (strategy.name.includes("ATR") || strategy.name.includes("Volatility")) {
    if (strategy.name === "Volatility Breakout (ATR) Strategy" && !hasAll(text, [/ATR/i, /(compression|contract)/i, /(expansion|expand|breakout)/i, /(crypto|liquidity|slippage|depth)/i])) {
      addIssue(issues, "major", "Differentiation", "Crypto ATR breakout must teach ATR expansion after compression and crypto liquidity conditions.");
    }
    if (strategy.name === "Volatility‑Adjusted Trend (ATR Filter)" && !hasAll(text, [/ATR/i, /filter/i, /trend/i, /(invalidation|adjust|stop)/i, /forex/i])) {
      addIssue(issues, "major", "Differentiation", "Forex ATR filter must teach ATR as a trend/invalidation adjustment filter, not the same as breakout expansion.");
    }
  }

  for (const exam of examQuestions) {
    const examText = stringifyValues(exam);
    if (BANNED_VALUE_WORDS.some(pattern => pattern.test(examText)) || containsDisallowedSignal(examText)) {
      addIssue(issues, "major", "Exam", "Linked exam question contains restricted wording.");
    }
    if (strategy.assetClass !== "FOREX" && /\bpips?\b/i.test(examText)) {
      addIssue(issues, "major", "Exam", "Linked exam question uses Forex pip wording for a non-Forex strategy.");
    }
  }

  const penalty = issues.reduce((total, issue) => {
    if (issue.severity === "major") return total + 12;
    if (issue.severity === "moderate") return total + 6;
    return total + 3;
  }, 0);
  const score = Math.max(0, 100 - penalty);
  const status = score >= 90 && issues.length === 0 ? "10/10" : score >= 75 ? "needs polish" : "needs rework";

  return {
    id: strategy.id,
    ref,
    displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
    name: strategy.name,
    assetClass: strategy.assetClass,
    sequenceNumber: strategy.sequenceNumber,
    profileLevel: Number.isInteger(lp.level) ? lp.level : null,
    linkedModules,
    examQuestionCount: examQuestions.length,
    score,
    status,
    issues,
  };
}

function renderMarkdown(audits: StrategyAudit[]): string {
  const counts = audits.reduce<Record<string, number>>((acc, audit) => {
    acc[audit.status] = (acc[audit.status] || 0) + 1;
    return acc;
  }, {});
  const byCategory = audits.flatMap(audit => audit.issues).reduce<Record<string, number>>((acc, issue) => {
    acc[issue.category] = (acc[issue.category] || 0) + 1;
    return acc;
  }, {});

  const lines = [
    "# Strategy Upgrade Standard Audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Strategies audited: ${audits.length}`,
    `- 10/10: ${counts["10/10"] || 0}`,
    `- Needs polish: ${counts["needs polish"] || 0}`,
    `- Needs rework: ${counts["needs rework"] || 0}`,
    "",
    "## Issue Categories",
    "",
    ...Object.entries(byCategory)
      .sort((a, b) => b[1] - a[1])
      .map(([category, count]) => `- ${category}: ${count}`),
    "",
    "## Strategy Results",
    "",
    "| Strategy | Asset | Code | Linked Module | Exam Qs | Score | Status | Main Issues |",
    "| --- | --- | --- | --- | ---: | ---: | --- | --- |",
    ...audits.map(audit => {
      const mainIssues = audit.issues.slice(0, 3).map(issue => `${issue.category}: ${issue.detail}`).join("<br>");
      return `| ${audit.name} | ${audit.assetClass} | ${audit.displayCode} | ${audit.linkedModules.join("<br>") || "None"} | ${audit.examQuestionCount} | ${audit.score} | ${audit.status} | ${mainIssues || "None"} |`;
    }),
    "",
  ];

  return lines.join("\n");
}

async function main() {
  const [allStrategies, modules, exams] = await Promise.all([
    prisma.strategy.findMany({
      orderBy: [{ sequenceNumber: "asc" }, { id: "asc" }],
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
      orderBy: [{ level: "asc" }, { orderIndex: "asc" }],
      select: {
        id: true,
        level: true,
        moduleNumber: true,
        title: true,
        logicIds: true,
        strategyFamilies: true,
      },
    }),
    prisma.examQuestion.findMany({
      select: {
        id: true,
        level: true,
        logicId: true,
        prompt: true,
        options: true,
        correctIndex: true,
        explanation: true,
      },
    }),
  ]);

  const ready = allStrategies.filter(strategy => strategy.learningProfile && strategy.visualModel);
  const audits = ready.map(strategy => auditStrategy(strategy, modules, exams, ready));
  const sorted = audits.sort((a, b) => a.score - b.score || a.name.localeCompare(b.name));
  const report = {
    totals: {
      audited: audits.length,
      tenOfTen: audits.filter(audit => audit.status === "10/10").length,
      needsPolish: audits.filter(audit => audit.status === "needs polish").length,
      needsRework: audits.filter(audit => audit.status === "needs rework").length,
    },
    audits: sorted,
  };

  const jsonPath = path.join(__dirname, "strategy-upgrade-quality-audit.json");
  const mdPath = path.join(__dirname, "strategy-upgrade-quality-audit.md");
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(mdPath, renderMarkdown(sorted));

  console.log(JSON.stringify(report.totals, null, 2));
  console.log(`Wrote JSON audit: ${jsonPath}`);
  console.log(`Wrote Markdown audit: ${mdPath}`);
  console.table(sorted.map(audit => ({
    code: audit.displayCode,
    name: audit.name,
    asset: audit.assetClass,
    score: audit.score,
    status: audit.status,
    issues: audit.issues.length,
    firstIssue: audit.issues[0]?.detail || "",
  })));
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
