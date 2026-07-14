"use client";

import React, { useState } from "react";
import { Info, ShieldAlert, TrendingUp, DollarSign, Activity, Percent, ArrowLeftRight } from "lucide-react";

export interface VisualModel {
  visualCategory: string;
  componentType: string;
  chartTitle: string;
  chartPurpose: string;
  marketConditionShown: string;
  setupFormationShown: string;
  entryOrActivationZone?: string;
  confirmationMarker?: string;
  invalidationZone?: string;
  targetZone?: string;
  trapZone?: string;
  warningLabel?: string;
  whatLearnerShouldNotice: string;
  mistakePrevented: string;
  interactionType: string;
  requiredLabels: string[];
  requiredZones: string[];
  assetSpecificVisualNotes?: string;
}

interface StrategySetupVisualProps {
  visualModel?: VisualModel;
}

export function StrategySetupVisual({ visualModel }: StrategySetupVisualProps) {
  // 1. Fallback / Default Renderer if no visualModel is provided
  if (!visualModel) {
    return <DefaultCandlestickChart />;
  }

  const category = visualModel.visualCategory;
  const compType = visualModel.componentType;

  // 2. Route to specialized visual layout components based on category or componentType
  const batch201Visuals = [
    "HarmonicPatternChart",
    "ElliottWaveChart",
    "CandlestickClusterChart",
    "MultiTimeframeCandlestickChart",
    "DoubleTopBottomChart",
    "CupHandleChart",
    "FlagPennantChart",
    "TokenSupplyEventChart",
    "MacroCorrelationChart",
    "InterestRateDifferentialChart",
    "CorrelationBetaChart",
    "FundamentalGrowthAuditChart",
    "GovernanceEventChart",
    "TreasuryFlowAuditChart",
    "CentralBankDivergenceChart",
    "SentimentNarrativeChart",
    "TriangleBreakoutChart",
    "CommodityCurrencyCorrelationChart",
    "RegulatoryEventChart",
    "MacroFundamentalComparisonChart",
    "FundingArbitrageChart",
    "FundingMeanReversionChart",
    "FundingMomentumChart",
    "PPPFairValueChart",
    "OpenInterestExpansionChart",
    "PoliticalEventScenarioChart",
    "AlligatorFractalChart",
    "OpenInterestDivergenceChart",
    "SeasonalPatternAuditChart",
    "LiquidationHeatmapChart",
    "TermsOfTradeConvergenceChart",
    "LiquidationCascadeChart",
    "SafeHavenFlowChart",
    "SocialSentimentAuditChart",
    "RiskOnCarryBasketChart",
    "InfluencerAuditChart",
    "FearGreedCycleChart",
    "COTPositioningChart",
    "COTDivergenceChart",
    "RetailSentimentContrarianChart",
    "RetailSentimentTrendChart",
    "RiskReversalSkewChart",
    "ForexFearGreedChart",
    "NewsSentimentReactionChart",
    "FundingOpenInterestMatrixChart",
    "FundingBasisConvergenceChart",
    "ShortSqueezeMechanicsChart",
    "LiquidationFrontRunRiskChart",
    "RedditSentimentAuditChart",
    "ExchangeOutflowAuditChart",
    "BollingerSqueezeChart",
    "ATRExpansionBreakoutChart",
    "ForexSocialSentimentChart",
    "ExchangeInflowDistributionChart",
    "ExchangeNetflowDivergenceChart",
    "PriceSentimentDivergenceChart",
    "CoinAgeMovementChart",
    "SentimentBreakoutChart",
    "SentimentMacroConfluenceChart",
    "NRRangeBreakoutChart",
    "UTXOAgeDistributionChart",
    "DOMOrderFlowChart",
    "WalletClusterAuditChart",
    "VolumeProfileChart",
    "StablecoinSupplyRatioChart",
    "FibonacciConfluenceChart",
    "RenkoTrendChart",
    "PointFigureBreakoutChart",
    "MinerOutflowAuditChart",
    "FootprintDeltaChart",
    "HashrateNetworkAuditChart",
    "SupplyDemandZoneChart",
    "MarketMakingSpreadChart",
    "StakingFlowAuditChart",
    "PegMaintenanceChart",
    "MovingAverageBounceChart",
    "HorizontalSRBreakoutChart",
    "RoundNumberBounceChart",
    "GasActivityAuditChart",
    "SpotFuturesBasisChart",
    "TriangularArbitrageChart",
    "CoveredInterestArbitrageChart",
    "ReverseBasisTradeChart",
    "CalendarSpreadRollChart",
    "RelativeValueBasketChart",
    "FXForwardCurveChart",
    "OrderAnticipationRiskChart",
    "GammaScalpingChart",
    "VolatilitySkewChart",
    "OptionsStraddleChart",
    "OptionsVerticalSpreadChart",
    "PutCallParityChart",
    "ProtectivePutHedgeChart",
    "CoveredCallChart",
    "OptionsButterflySpreadChart",
    "OptionsIronCondorChart",
    "GammaTiltChart",
    "CrossExchangeArbitrageChart",
  ];
  if (batch201Visuals.includes(compType)) {
    return <Batch201StrategyChart visual={visualModel} />;
  }
  if (compType === "InsideBarBreakoutChart") {
    return <InsideBarBreakoutChart visual={visualModel} />;
  }
  if (compType === "TrendlineBounceChart") {
    return <TrendlineBounceChart visual={visualModel} />;
  }
  if (compType === "MarketRegimeChart") {
    return <MarketRegimeChart visual={visualModel} />;
  }
  if (compType === "CryptoCycleCatalystChart") {
    return <CryptoCycleCatalystChart visual={visualModel} />;
  }
  if (category === "Risk / Position Sizing Visual" || compType === "SizingCalculator") {
    return <PositionSizingCalculator visual={visualModel} />;
  }
  if (category === "Crypto Derivatives Visual" || compType === "DerivativesDashboard") {
    return <CryptoDerivativesDashboard visual={visualModel} />;
  }
  if (category === "Portfolio / Allocation Visual" || compType === "PortfolioAllocationChart") {
    return <PortfolioAllocationChart visual={visualModel} />;
  }
  if (category === "Multi-Timeframe Confluence Visual" || compType === "MultiTimeframeConfluenceChart") {
    return <MultiTimeframeConfluenceChart visual={visualModel} />;
  }
  if (category === "Gold Macro Reaction Visual" || compType === "GoldMacroRealYieldChart") {
    return <GoldMacroRealYieldChart visual={visualModel} />;
  }
  if (category === "Forex Pair Strength Visual" || compType === "ForexPairStrengthMeter") {
    return <ForexPairStrengthMeter visual={visualModel} />;
  }
  if (compType === "MACDStructureChart") {
    return <MACDStructureChart visual={visualModel} />;
  }
  if (compType === "ADXStrengthChart") {
    return <ADXStrengthChart visual={visualModel} />;
  }
  if (compType === "MovingAverageCrossoverChart") {
    return <MovingAverageCrossoverChart visual={visualModel} />;
  }
  if (compType === "SessionBreakoutChart" || compType === "OpeningRangeTimeStopChart") {
    return <SessionBreakoutChart visual={visualModel} />;
  }
  if (compType === "SupertrendVolatilityChart") {
    return <SupertrendVolatilityChart visual={visualModel} />;
  }
  if (compType === "ATRVolatilityChart" || compType === "ATRChannelTrendChart") {
    return <ATRVolatilityChart visual={visualModel} />;
  }
  if (compType === "ParabolicSARChart") {
    return <ParabolicSARChart visual={visualModel} />;
  }
  if (compType === "IchimokuCloudChart") {
    return <IchimokuCloudChart visual={visualModel} />;
  }
  if (compType === "HeikinAshiTrendChart") {
    return <HeikinAshiTrendChart visual={visualModel} />;
  }
  if (compType === "DonchianChannelBreakoutChart") {
    return <DonchianChannelBreakoutChart visual={visualModel} />;
  }
  if (compType === "BollingerBandChart" || compType === "KeltnerChannelChart") {
    return <BandStrategyChart visual={visualModel} />;
  }
  if (compType === "RSIMeanReversionChart" || compType === "StochasticOscillatorChart" || compType === "OscillatorRangeChart" || compType === "CCIReversionChart") {
    return <RSIMeanReversionChart visual={visualModel} />;
  }
  if (compType === "ZScoreMeanReversionChart" || compType === "PairSpreadMeanReversionChart" || compType === "VWAPReversionChart") {
    return <StatisticalMeanReversionChart visual={visualModel} />;
  }
  if (compType === "MomentumStrengthChart" || compType === "MomentumBreakoutChart" || compType === "RSIMomentumChart" || compType === "ROCMomentumChart" || compType === "VWAPTrendReversalChart" || compType === "MACDStructureChart" || compType === "ADXStrengthChart") {
    return <MomentumStudyChart visual={visualModel} />;
  }
  if (compType === "VolumeBreakoutChart" || compType === "VolumeMomentumChart" || compType === "VolumePriceConfirmationChart" || compType === "OBVDivergenceChart") {
    return <VolumeConfirmationChart visual={visualModel} />;
  }
  if (compType === "GridBreakoutChart") {
    return <GridBreakoutChart visual={visualModel} />;
  }
  if (compType === "NewsBreakoutChart") {
    return <NewsBreakoutChart visual={visualModel} />;
  }
  if (compType === "PivotBreakoutChart") {
    return <PivotBreakoutChart visual={visualModel} />;
  }
  if (compType === "GapBreakoutChart") {
    return <GapBreakoutChart visual={visualModel} />;
  }
  if (compType === "ChannelBreakoutChart") {
    return <ChannelBreakoutChart visual={visualModel} />;
  }
  if (compType === "TrendlineBreakRetestChart") {
    return <TrendlineBreakRetestChart visual={visualModel} />;
  }
  if (compType === "ModelAuditChart") {
    return <ModelAuditChart visual={visualModel} />;
  }
  if (compType === "ExecutionMicrostructureChart") {
    return <ExecutionMicrostructureChart visual={visualModel} />;
  }
  if (compType === "MarketStructureChart") {
    return <MarketStructureChart visual={visualModel} />;
  }
  if (compType === "ChartPatternBreakoutChart") {
    return <ChartPatternBreakoutChart visual={visualModel} />;
  }
  if (compType === "CandlestickPatternChart") {
    return <AnnotatedCandlestickChart visual={visualModel} />;
  }

  // 3. Custom SVG Chart for standard structural categories (Breakout, Trend, S/R, Sweep, etc.)
  return <AnnotatedCandlestickChart visual={visualModel} />;
}

function Batch201StrategyChart({ visual }: { visual: VisualModel }) {
  const type = visual.componentType;
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const grid = [44, 84, 124, 164].map(y => <line key={y} x1="18" y1={y} x2="482" y2={y} stroke="#1e293b" strokeWidth="0.55" strokeDasharray="3 3" />);

  const chart = (() => {
    if (type === "HarmonicPatternChart") return <>
      {grid}<polyline points="42,118 126,42 208,96 292,62 402,146" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2" />
      {[['X',42,118],['A',126,42],['B',208,96],['C',292,62],['D',402,146]].map(([t,x,y]) => <g key={String(t)}><circle cx={Number(x)} cy={Number(y)} r="5" fill="#0f172a" stroke="rgb(45,212,191)" strokeWidth="1.5"/><text x={Number(x)} y={Number(y)-10} fill="rgb(226,232,240)" fontSize="8" fontWeight="bold" textAnchor="middle">{t}</text></g>)}
      <rect x="366" y="126" width="72" height="42" rx="4" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)" strokeDasharray="3 2"/><text x="402" y="182" fill="rgb(251,191,36)" fontSize="7" fontWeight="bold" textAnchor="middle">POTENTIAL REVERSAL ZONE</text>
      <text x="210" y="112" fill="rgb(148,163,184)" fontSize="7" textAnchor="middle">RATIO TOLERANCE</text>
    </>;
    if (type === "ElliottWaveChart") return <>
      {grid}<polyline points="34,154 92,112 138,138 216,70 268,106 348,38" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/>
      <polyline points="348,38 392,92 430,62 468,126" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/>
      {[['1',92,112],['2',138,138],['3',216,70],['4',268,106],['5',348,38],['A',392,92],['B',430,62],['C',468,126]].map(([t,x,y]) => <text key={String(t)} x={Number(x)} y={Number(y)-9} fill="rgb(226,232,240)" fontSize="8" fontWeight="bold" textAnchor="middle">{t}</text>)}
      <path d="M 36 166 C 150 112 254 144 362 72" fill="none" stroke="rgba(251,191,36,.55)" strokeDasharray="4 3"/><text x="172" y="178" fill="rgb(251,191,36)" fontSize="7">ALTERNATE COUNT</text>
    </>;
    if (type === "CandlestickClusterChart") return <>
      {grid}<rect x="32" y="116" width="430" height="34" rx="4" fill="rgba(56,189,248,.07)" stroke="rgba(56,189,248,.5)"/><text x="44" y="110" fill="rgb(56,189,248)" fontSize="7" fontWeight="bold">HORIZONTAL REACTION AREA</text>
      {[{x:110,o:132,c:112,h:102,l:144},{x:168,o:126,c:106,h:96,l:139},{x:226,o:118,c:94,h:86,l:132},{x:284,o:102,c:82,h:74,l:116}].map((c,i)=><g key={c.x}><line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={i<2?'rgb(251,191,36)':'rgb(45,212,191)'}/><rect x={c.x-7} y={Math.min(c.o,c.c)} width="14" height={Math.abs(c.o-c.c)} fill={i<2?'rgba(251,191,36,.65)':'rgba(45,212,191,.65)'}/></g>)}
      <line x1="82" y1="154" x2="334" y2="154" stroke="rgb(248,113,113)" strokeDasharray="4 2"/><text x="334" y="168" fill="rgb(248,113,113)" fontSize="7" textAnchor="end">OPPOSING CLOSE INVALIDATION</text>
    </>;
    if (type === "MultiTimeframeCandlestickChart") return <>
      {['HTF LOCATION','MID STRUCTURE','LTF COMPLETED CANDLE'].map((t,i)=><g key={t}><rect x="30" y={24+i*58} width="440" height="42" rx="5" fill="rgba(15,23,42,.78)" stroke={i===2?'rgba(45,212,191,.55)':'rgba(71,85,105,.6)'}/><text x="44" y={42+i*58} fill={i===2?'rgb(45,212,191)':'rgb(148,163,184)'} fontSize="7" fontWeight="bold">{t}</text><path d={`M 180 ${52+i*58} C 236 ${28+i*58} 300 ${62+i*58} 412 ${34+i*58}`} fill="none" stroke={i===0?'rgb(56,189,248)':i===1?'rgb(167,139,250)':'rgb(45,212,191)'} strokeWidth="1.7"/></g>)}
      <line x1="402" y1="22" x2="402" y2="184" stroke="rgb(251,191,36)" strokeDasharray="3 3"/><text x="392" y="198" fill="rgb(251,191,36)" fontSize="7" textAnchor="end">AGREEMENT POINT</text>
    </>;
    if (type === "DoubleTopBottomChart") return <>
      {grid}<path d="M 36 150 C 92 134 106 54 162 58 S 224 138 270 124 S 306 54 360 60 S 408 132 464 148" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/>
      <line x1="160" y1="124" x2="466" y2="124" stroke="rgb(56,189,248)" strokeDasharray="5 3"/><text x="458" y="116" fill="rgb(56,189,248)" fontSize="7" textAnchor="end">NECKLINE</text>
      <rect x="348" y="118" width="78" height="40" rx="4" fill="rgba(248,113,113,.07)" stroke="rgba(248,113,113,.55)"/><text x="387" y="174" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">RECLAIM TRAP</text>
    </>;
    if (type === "CupHandleChart") return <>
      {grid}<path d="M 42 58 C 92 58 96 146 188 154 C 284 162 292 58 352 58" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/>
      <path d="M 352 58 C 378 70 394 94 422 74 C 440 62 452 54 470 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/>
      <line x1="38" y1="58" x2="472" y2="58" stroke="rgb(251,191,36)" strokeDasharray="5 3"/><text x="250" y="48" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">RIM / BREAKOUT BOUNDARY</text><text x="392" y="106" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">HANDLE FAILURE</text>
    </>;
    if (type === "FlagPennantChart") return <>
      {grid}<line x1="46" y1="164" x2="178" y2="42" stroke="rgb(45,212,191)" strokeWidth="5"/><text x="84" y="102" fill="rgb(45,212,191)" fontSize="7" fontWeight="bold">FLAGPOLE</text>
      <path d="M 178 42 L 378 72 L 378 126 L 178 96 Z" fill="rgba(167,139,250,.07)" stroke="rgb(167,139,250)"/><path d="M 378 96 L 462 48" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><text x="290" y="142" fill="rgb(167,139,250)" fontSize="7" textAnchor="middle">CONTROLLED COMPRESSION</text>
    </>;
    if (type === "TokenSupplyEventChart") return <>
      {grid}<rect x="44" y="116" width="72" height="48" fill="rgba(56,189,248,.2)"/><rect x="138" y="96" width="72" height="68" fill="rgba(56,189,248,.3)"/><rect x="232" y="66" width="72" height="98" fill="rgba(251,191,36,.35)"/><rect x="326" y="84" width="72" height="80" fill="rgba(45,212,191,.3)"/>
      <line x1="268" y1="28" x2="268" y2="176" stroke="rgb(251,191,36)" strokeDasharray="4 2"/><text x="268" y="20" fill="rgb(251,191,36)" fontSize="7" fontWeight="bold" textAnchor="middle">SUPPLY EVENT</text><path d="M 44 92 C 126 70 180 104 240 86 S 340 54 448 74" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/><text x="442" y="186" fill="rgb(248,113,113)" fontSize="7" textAnchor="end">PRICED-IN / ABSORPTION CHECK</text>
    </>;
    if (type === "MacroCorrelationChart") return <>
      {grid}<path d="M 34 142 C 88 120 126 128 176 92 S 270 72 326 54 S 406 72 466 42" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><path d="M 34 158 C 94 146 128 118 184 108 S 276 80 326 92 S 410 108 466 74" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="40" y="34" fill="rgb(56,189,248)" fontSize="7">LIQUIDITY PROXY</text><text x="40" y="48" fill="rgb(217,70,239)" fontSize="7">CRYPTO RESPONSE</text><rect x="310" y="72" width="92" height="46" fill="rgba(248,113,113,.06)" stroke="rgba(248,113,113,.5)"/><text x="356" y="132" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DECOUPLING</text>
    </>;
    if (type === "InterestRateDifferentialChart") return <>
      {grid}<path d="M 38 126 C 128 120 186 94 264 78 S 374 58 464 44" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/><path d="M 38 112 C 130 116 196 124 270 132 S 384 142 464 150" fill="none" stroke="rgb(248,113,113)" strokeWidth="2"/>
      <path d="M 38 170 C 142 160 238 126 464 88" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 2"/><text x="44" y="32" fill="rgb(45,212,191)" fontSize="7">CURRENCY A RATE PATH</text><text x="44" y="46" fill="rgb(248,113,113)" fontSize="7">CURRENCY B RATE PATH</text><text x="444" y="82" fill="rgb(251,191,36)" fontSize="7" textAnchor="end">DIFFERENTIAL / PARITY GAP</text>
    </>;
    if (type === "CorrelationBetaChart") return <>
      {grid}<line x1="54" y1="164" x2="250" y2="48" stroke="rgba(56,189,248,.55)"/><line x1="286" y1="164" x2="470" y2="44" stroke="rgba(251,191,36,.65)"/>
      {[72,104,132,166,198,224].map((x,i)=><circle key={x} cx={x} cy={150-i*17+(i%2)*12} r="5" fill="rgb(56,189,248)"/>)}{[304,334,366,396,430,456].map((x,i)=><circle key={x} cx={x} cy={154-i*18+(i%2)*14} r="5" fill="rgb(251,191,36)"/>)}
      <text x="148" y="28" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">ROLLING CORRELATION</text><text x="382" y="28" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">BETA SLOPE</text><line x1="270" y1="22" x2="270" y2="176" stroke="#334155"/>
    </>;
    if (type === "FundamentalGrowthAuditChart") return <>
      {grid}{[0,1,2].map(i=><g key={i}><path d={`M 42 ${154-i*10} C 118 ${148-i*16} 184 ${126-i*18} 250 ${112-i*20} S 384 ${84-i*16} 462 ${58-i*14}`} fill="none" stroke={["rgb(56,189,248)","rgb(45,212,191)","rgb(217,70,239)"][i]} strokeWidth="2"/><circle cx={250} cy={112-i*20} r="4" fill={["rgb(56,189,248)","rgb(45,212,191)","rgb(217,70,239)"][i]}/></g>)}
      <text x="46" y="30" fill="rgb(56,189,248)" fontSize="7">ACTIVITY QUALITY</text><text x="46" y="44" fill="rgb(45,212,191)" fontSize="7">RETENTION / RELEASES</text><text x="46" y="58" fill="rgb(217,70,239)" fontSize="7">PRICE + LIQUIDITY</text><rect x="300" y="104" width="112" height="40" fill="rgba(248,113,113,.06)" stroke="rgba(248,113,113,.5)"/><text x="356" y="158" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">INFLATED METRIC TRAP</text>
    </>;
    if (type === "TreasuryFlowAuditChart") return <>
      {grid}<rect x="36" y="72" width="96" height="64" rx="5" fill="rgba(56,189,248,.12)" stroke="rgb(56,189,248)"/><text x="84" y="98" fill="rgb(226,232,240)" fontSize="8" fontWeight="bold" textAnchor="middle">TREASURY</text><text x="84" y="113" fill="rgb(148,163,184)" fontSize="7" textAnchor="middle">ASSETS - OBLIGATIONS</text>
      {[["CUSTODY",242,42],["GRANTS",242,104],["EXCHANGE",400,70]].map(([label,x,y])=><g key={String(label)}><rect x={Number(x)-42} y={Number(y)} width="84" height="32" rx="4" fill="rgba(15,23,42,.8)" stroke={label==="EXCHANGE"?"rgb(251,191,36)":"rgb(71,85,105)"}/><text x={Number(x)} y={Number(y)+19} fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{label}</text></g>)}
      <path d="M 132 88 C 166 70 178 60 200 58 M 132 106 C 166 114 178 120 200 120 M 284 58 C 330 56 348 70 358 80" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/><text x="302" y="156" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">UNVERIFIED LABEL / TRANSFER PURPOSE TRAP</text>
    </>;
    if (type === "CentralBankDivergenceChart") return <>
      {grid}<path d="M 42 142 C 132 132 210 102 302 60 S 402 42 466 32" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 42 96 C 138 102 218 120 302 144 S 402 154 466 164" fill="none" stroke="rgb(248,113,113)" strokeWidth="2.2"/>
      <path d="M 42 166 C 142 160 238 130 332 96 S 420 70 466 60" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 3"/><text x="48" y="32" fill="rgb(45,212,191)" fontSize="7">BANK A EXPECTED PATH</text><text x="48" y="46" fill="rgb(248,113,113)" fontSize="7">BANK B EXPECTED PATH</text><text x="456" y="88" fill="rgb(251,191,36)" fontSize="7" textAnchor="end">PAIR REPRICING</text><rect x="222" y="78" width="92" height="54" fill="rgba(248,113,113,.05)" stroke="rgba(248,113,113,.5)"/><text x="268" y="146" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">PATHS CONVERGE</text>
    </>;
    if (type === "SentimentNarrativeChart") return <>
      {grid}<path d="M 38 154 C 96 146 132 126 180 88 S 258 36 316 54 S 386 104 462 128" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/><path d="M 38 162 C 116 158 176 142 228 112 S 324 82 462 98" fill="none" stroke="rgb(56,189,248)" strokeWidth="1.8" strokeDasharray="5 3"/>
      <rect x="230" y="28" width="104" height="54" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/><text x="282" y="20" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">EXTREME</text><text x="54" y="40" fill="rgb(217,70,239)" fontSize="7">NORMALIZED SCORE</text><text x="54" y="54" fill="rgb(56,189,248)" fontSize="7">SOURCE BREADTH</text><text x="406" y="146" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">COOLING / STALE</text>
    </>;
    if (type === "TriangleBreakoutChart") return <>
      {grid}<path d="M 42 42 L 344 100 L 42 164 Z" fill="rgba(167,139,250,.06)" stroke="rgb(167,139,250)" strokeWidth="2"/><line x1="344" y1="100" x2="462" y2="54" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 462 54 C 430 78 402 88 372 74" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 2"/>
      <text x="112" y="92" fill="rgb(167,139,250)" fontSize="7">CONVERGING BOUNDARIES</text><text x="350" y="118" fill="rgb(45,212,191)" fontSize="7">BODY-CLOSE BREAK</text><text x="416" y="100" fill="rgb(251,191,36)" fontSize="7">RETEST</text><line x1="342" y1="112" x2="462" y2="142" stroke="rgb(248,113,113)" strokeDasharray="4 3"/><text x="454" y="158" fill="rgb(248,113,113)" fontSize="7" textAnchor="end">RETURN-INSIDE TRAP</text>
    </>;
    if (type === "CommodityCurrencyCorrelationChart") return <>
      {grid}<path d="M 38 156 C 92 142 130 116 180 100 S 262 70 316 58 S 404 42 466 30" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/><path d="M 38 166 C 96 150 136 128 184 112 S 266 82 316 72 S 382 98 466 120" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/>
      <text x="44" y="30" fill="rgb(251,191,36)" fontSize="7">EXPORT COMMODITY</text><text x="44" y="44" fill="rgb(56,189,248)" fontSize="7">CURRENCY RETURN</text><rect x="326" y="54" width="122" height="82" fill="rgba(248,113,113,.05)" stroke="rgba(248,113,113,.55)"/><text x="387" y="150" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ROLLING DECOUPLING</text>
    </>;
    if (type === "RegulatoryEventChart") return <>
      {grid}<line x1="48" y1="108" x2="458" y2="108" stroke="rgb(71,85,105)" strokeWidth="2"/>{[["PUBLICATION",92,"rgb(56,189,248)"],["SCOPE",210,"rgb(167,139,250)"],["EFFECTIVE DATE",332,"rgb(251,191,36)"],["IMPLEMENTATION",438,"rgb(45,212,191)"]].map(([label,x,color],i)=><g key={String(label)}><line x1={Number(x)} y1="54" x2={Number(x)} y2="154" stroke={String(color)} strokeDasharray={i===3?"":"4 2"}/><circle cx={Number(x)} cy="108" r="6" fill={String(color)}/><text x={Number(x)} y={i%2===0?42:174} fill={String(color)} fontSize="7" textAnchor="middle">{label}</text></g>)}
      <path d="M 92 132 C 164 154 244 82 332 124 S 400 150 438 132" fill="none" stroke="rgb(217,70,239)" strokeWidth="1.8"/><text x="258" y="194" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">HEADLINE / DELAY / APPEAL UNCERTAINTY</text>
    </>;
    if (type === "MacroFundamentalComparisonChart") return <>
      {grid}{[["ECONOMY A",82,76,"rgb(45,212,191)"],["ECONOMY B",176,124,"rgb(248,113,113)"]].map(([label,x,h,color])=><g key={String(label)}><rect x={Number(x)} y={168-Number(h)} width="54" height={Number(h)} fill={String(color)} opacity=".55"/><text x={Number(x)+27} y="184" fill={String(color)} fontSize="7" textAnchor="middle">{label}</text></g>)}<path d="M 258 154 C 312 144 344 106 386 82 S 430 58 468 48" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/><path d="M 258 78 C 318 86 360 112 410 126 S 446 132 468 138" fill="none" stroke="rgb(56,189,248)" strokeDasharray="4 3"/>
      <text x="364" y="30" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">RELATIVE MACRO PATH</text><text x="364" y="44" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">PAIR STRUCTURE</text><text x="354" y="174" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">REVISION / CONVERGENCE TRAP</text>
    </>;
    if (type === "FundingArbitrageChart") return <>
      {grid}<rect x="42" y="48" width="142" height="72" rx="5" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><rect x="316" y="48" width="142" height="72" rx="5" fill="rgba(217,70,239,.1)" stroke="rgb(217,70,239)"/><text x="113" y="78" fill="rgb(226,232,240)" fontSize="8" fontWeight="bold" textAnchor="middle">SPOT LEG</text><text x="387" y="78" fill="rgb(226,232,240)" fontSize="8" fontWeight="bold" textAnchor="middle">PERPETUAL LEG</text><text x="113" y="98" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">MATCHED NOTIONAL</text><text x="387" y="98" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">MATCHED NOTIONAL</text>
      <line x1="184" y1="84" x2="316" y2="84" stroke="rgb(45,212,191)" strokeWidth="2"/><text x="250" y="72" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">HEDGED EXPOSURE</text><rect x="116" y="142" width="268" height="40" fill="rgba(251,191,36,.07)" stroke="rgb(251,191,36)"/><text x="250" y="160" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">FUNDING - BASIS - BORROW - FEES - SLIPPAGE</text><text x="250" y="176" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">LEG / VENUE / LIQUIDATION RISK</text>
    </>;
    if (type === "FundingMeanReversionChart") return <>
      {grid}<line x1="38" y1="54" x2="466" y2="54" stroke="rgb(248,113,113)" strokeDasharray="4 3"/><line x1="38" y1="146" x2="466" y2="146" stroke="rgb(56,189,248)" strokeDasharray="4 3"/><path d="M 38 112 C 94 108 126 48 178 42 S 246 74 286 102 S 366 118 466 106" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/>
      <text x="44" y="46" fill="rgb(248,113,113)" fontSize="7">EXTREME CROWDING</text><text x="44" y="160" fill="rgb(56,189,248)" fontSize="7">OPPOSITE EXTREME</text><line x1="286" y1="28" x2="286" y2="176" stroke="rgb(45,212,191)" strokeDasharray="3 2"/><text x="292" y="28" fill="rgb(45,212,191)" fontSize="7">NORMALIZATION</text><text x="390" y="76" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PERSISTENCE TRAP</text>
    </>;
    if (type === "FundingMomentumChart") return <>
      {grid}<path d="M 38 164 C 104 156 154 142 214 116 S 326 72 466 38" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/><path d="M 38 172 C 106 166 168 144 226 124 S 332 88 466 72" fill="none" stroke="rgb(45,212,191)" strokeWidth="1.8"/><path d="M 38 148 C 110 146 162 134 226 110 S 338 82 466 96" fill="none" stroke="rgb(56,189,248)" strokeWidth="1.8" strokeDasharray="4 2"/>
      <text x="44" y="30" fill="rgb(217,70,239)" fontSize="7">FUNDING SLOPE</text><text x="44" y="44" fill="rgb(45,212,191)" fontSize="7">PRICE PARTICIPATION</text><text x="44" y="58" fill="rgb(56,189,248)" fontSize="7">OPEN INTEREST</text><rect x="354" y="68" width="100" height="56" fill="rgba(248,113,113,.06)" stroke="rgba(248,113,113,.55)"/><text x="404" y="138" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ROLLOVER / SATURATION</text>
    </>;
    if (type === "PPPFairValueChart") return <>
      {grid}<path d="M 38 142 C 120 134 176 120 244 104 S 372 74 466 62" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 38 92 C 112 84 174 72 240 90 S 352 128 466 82" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/><path d="M 244 104 L 244 90 M 352 80 L 352 128" stroke="rgb(248,113,113)" strokeDasharray="3 2"/>
      <text x="44" y="30" fill="rgb(45,212,191)" fontSize="7">PPP FAIR-VALUE PATH</text><text x="44" y="44" fill="rgb(251,191,36)" fontSize="7">OBSERVED EXCHANGE RATE</text><text x="300" y="154" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">VALUATION GAP / SLOW CONVERGENCE</text>
    </>;
    if (type === "OpenInterestExpansionChart") return <>
      {grid}<path d="M 38 156 C 124 142 202 112 284 84 S 390 54 466 40" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 38 168 C 126 162 204 142 284 106 S 386 68 466 54" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/>
      <text x="44" y="30" fill="rgb(45,212,191)" fontSize="7">PRICE</text><text x="44" y="44" fill="rgb(217,70,239)" fontSize="7">OPEN INTEREST</text><rect x="338" y="42" width="112" height="76" fill="rgba(251,191,36,.06)" stroke="rgba(251,191,36,.55)"/><text x="394" y="132" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">CROWDING / OI ROLLOVER</text>
    </>;
    if (type === "PoliticalEventScenarioChart") return <>
      {grid}<line x1="54" y1="102" x2="446" y2="102" stroke="rgb(71,85,105)" strokeWidth="2"/><circle cx="110" cy="102" r="7" fill="rgb(56,189,248)"/><path d="M 110 102 L 238 48 M 110 102 L 238 102 M 110 102 L 238 156" stroke="rgb(167,139,250)" strokeWidth="1.8"/><path d="M 238 48 C 306 54 350 68 446 54 M 238 102 C 314 104 358 96 446 100 M 238 156 C 310 148 362 132 446 148" fill="none" stroke="rgb(45,212,191)" strokeWidth="1.8"/>
      <text x="110" y="82" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">EVENT</text><text x="238" y="28" fill="rgb(167,139,250)" fontSize="7" textAnchor="middle">SCENARIO TREE</text><text x="382" y="182" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">RESULT VS EXPECTATION / WHIPSAW</text>
    </>;
    if (type === "AlligatorFractalChart") return <>
      {grid}<path d="M 38 150 C 118 146 178 126 244 92 S 354 52 466 38" fill="none" stroke="rgb(56,189,248)" strokeWidth="3"/><path d="M 38 158 C 120 154 180 136 246 104 S 358 64 466 50" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/><path d="M 38 166 C 124 162 184 148 250 118 S 362 78 466 66" fill="none" stroke="rgb(217,70,239)" strokeWidth="1.8"/>
      {[138,254,372].map((x,i)=><path key={x} d={`M ${x-10} ${118-i*23} L ${x} ${106-i*23} L ${x+10} ${118-i*23}`} fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/>)}<text x="48" y="34" fill="rgb(56,189,248)" fontSize="7">JAW</text><text x="82" y="34" fill="rgb(251,191,36)" fontSize="7">TEETH</text><text x="124" y="34" fill="rgb(217,70,239)" fontSize="7">LIPS</text><text x="322" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">TANGLED-LINE / FRACTAL FAILURE</text>
    </>;
    if (type === "OpenInterestDivergenceChart") return <>
      {grid}<path d="M 38 150 C 130 134 220 104 312 76 S 404 50 466 38" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 38 70 C 128 76 220 96 312 122 S 406 150 466 162" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/>
      <text x="44" y="30" fill="rgb(45,212,191)" fontSize="7">PRICE PATH</text><text x="44" y="44" fill="rgb(217,70,239)" fontSize="7">OPPOSING OI PATH</text><line x1="302" y1="68" x2="302" y2="132" stroke="rgb(251,191,36)" strokeDasharray="3 2"/><text x="308" y="148" fill="rgb(251,191,36)" fontSize="7">COVERING / LIQUIDATION DIAGNOSIS</text>
    </>;
    if (type === "SeasonalPatternAuditChart") return <>
      {grid}{[42,94,146,198,250,302,354,406].map((x,i)=><rect key={x} x={x} y={i%3===0?74:i%3===1?104:126} width="26" height={i%3===0?90:i%3===1?60:38} fill={i===6?"rgba(248,113,113,.55)":"rgba(56,189,248,.42)"}/>)}<path d="M 42 92 C 120 70 188 114 250 84 S 368 58 440 92" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/>
      <text x="44" y="28" fill="rgb(251,191,36)" fontSize="7">MULTI-YEAR DISTRIBUTION</text><text x="250" y="184" fill="rgb(148,163,184)" fontSize="7" textAnchor="middle">FIXED CALENDAR WINDOW</text><text x="386" y="62" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BROKEN YEAR / REGIME</text>
    </>;
    if (type === "LiquidationHeatmapChart") return <>
      {grid}{[[46,40,408,"rgba(248,113,113,.32)"],[82,34,420,"rgba(251,191,36,.22)"],[132,58,370,"rgba(56,189,248,.25)"]].map(([y,x,w,c])=><rect key={Number(y)} x={Number(x)} y={Number(y)} width={Number(w)} height="18" fill={String(c)}/>)}<path d="M 38 114 C 114 126 172 98 244 112 S 366 88 466 104" fill="none" stroke="rgb(226,232,240)" strokeWidth="2.2"/>
      <text x="48" y="32" fill="rgb(248,113,113)" fontSize="7">SHORT-LIQUIDATION BANDS</text><text x="48" y="160" fill="rgb(56,189,248)" fontSize="7">LONG-LIQUIDATION BANDS</text><text x="390" y="124" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ATTRACTION / REJECTION / CASCADE</text>
    </>;
    if (type === "TermsOfTradeConvergenceChart") return <>
      {grid}<path d="M 38 52 C 140 66 220 84 304 100 S 400 108 466 110" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 38 164 C 136 150 220 128 304 116 S 400 112 466 110" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/>
      <path d="M 38 108 L 466 108" stroke="rgb(251,191,36)" strokeDasharray="4 3"/><text x="44" y="30" fill="rgb(45,212,191)" fontSize="7">ECONOMY A INDEX</text><text x="44" y="44" fill="rgb(56,189,248)" fontSize="7">ECONOMY B INDEX</text><text x="366" y="138" fill="rgb(248,113,113)" fontSize="7">REVISION / REGIME SHIFT</text>
    </>;
    if (type === "LiquidationCascadeChart") return <>
      {grid}<path d="M 38 48 C 128 58 182 74 238 138 S 318 164 466 124" fill="none" stroke="rgb(248,113,113)" strokeWidth="3"/><path d="M 38 78 C 138 82 206 96 250 148 S 334 170 466 156" fill="none" stroke="rgb(217,70,239)" strokeWidth="2" strokeDasharray="4 2"/>
      <rect x="228" y="126" width="92" height="48" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/><text x="274" y="118" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">OI COLLAPSE</text><text x="406" y="106" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">SPOT RECLAIM + DEPTH RECOVERY</text>
    </>;
    if (type === "SafeHavenFlowChart") return <>
      {grid}<path d="M 38 154 C 118 138 188 104 264 76 S 382 54 466 44" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><path d="M 38 162 C 122 150 188 124 264 94 S 382 74 466 68" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/><path d="M 38 146 C 120 144 190 132 264 116 S 384 102 466 104" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/>
      <text x="44" y="28" fill="rgb(56,189,248)" fontSize="7">JPY</text><text x="72" y="28" fill="rgb(45,212,191)" fontSize="7">CHF</text><text x="104" y="28" fill="rgb(251,191,36)" fontSize="7">USD</text><text x="368" y="142" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">HAVEN DIVERGENCE / UNWIND</text>
    </>;
    if (type === "SocialSentimentAuditChart") return <>
      {grid}{[["X",62,132,"rgb(56,189,248)"],["FORUM",62,86,"rgb(167,139,250)"],["CHAT",62,40,"rgb(45,212,191)"]].map(([label,x,y,color])=><g key={String(label)}><circle cx={Number(x)} cy={Number(y)} r="18" fill="rgba(15,23,42,.85)" stroke={String(color)}/><text x={Number(x)} y={Number(y)+3} fill={String(color)} fontSize="7" textAnchor="middle">{label}</text></g>)}<path d="M 82 40 L 206 82 M 82 86 L 206 82 M 82 132 L 206 82" stroke="rgb(71,85,105)"/><path d="M 206 82 C 284 66 346 54 464 42" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/>
      <text x="206" y="104" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">FILTER + NORMALIZE</text><text x="370" y="84" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BOT / MANIPULATION / STALE EXTREME</text>
    </>;
    if (type === "RiskOnCarryBasketChart") return <>
      {grid}{[[72,62],[154,90],[236,72]].map(([x,h],i)=><g key={x}><rect x={x} y={166-h} width="48" height={h} fill={["rgba(56,189,248,.5)","rgba(45,212,191,.5)","rgba(251,191,36,.5)"][i]}/><text x={x+24} y="184" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{["PAIR A","PAIR B","PAIR C"][i]}</text></g>)}<path d="M 318 142 C 360 112 404 82 466 54" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/>
      <text x="174" y="34" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">EQUAL RISK CONTRIBUTION</text><text x="392" y="38" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">RISK-ON CONTEXT</text><text x="392" y="166" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CORRELATED UNWIND</text>
    </>;
    if (type === "InfluencerAuditChart") return <>
      {grid}<line x1="48" y1="108" x2="458" y2="108" stroke="rgb(71,85,105)" strokeWidth="2"/>{[["ORIGINAL",82],["REPOSTS",190],["FOLLOWERS",302],["REVERSAL",422]].map(([label,x],i)=><g key={String(label)}><circle cx={Number(x)} cy="108" r={i===2?9:6} fill={i===3?"rgb(248,113,113)":"rgb(56,189,248)"}/><text x={Number(x)} y={i%2===0?88:136} fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{label}</text></g>)}<path d="M 48 166 C 142 160 218 128 300 70 S 386 50 458 84" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/>
      <text x="254" y="30" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PRICE / VOLUME RESPONSE</text><text x="402" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">PROMOTION / DELETION TRAP</text>
    </>;
    if (type === "FearGreedCycleChart") return <>
      {grid}<path d="M 52 142 C 120 164 170 152 222 104 S 310 34 368 56 S 424 112 466 134" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.4"/><line x1="38" y1="58" x2="466" y2="58" stroke="rgb(248,113,113)" strokeDasharray="4 3"/><line x1="38" y1="148" x2="466" y2="148" stroke="rgb(56,189,248)" strokeDasharray="4 3"/>
      <text x="44" y="48" fill="rgb(248,113,113)" fontSize="7">EXTREME GREED</text><text x="44" y="162" fill="rgb(56,189,248)" fontSize="7">EXTREME FEAR</text><text x="370" y="88" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PERSISTENCE BEFORE NORMALIZATION</text>
    </>;
    if (type === "COTPositioningChart") return <>
      {grid}<line x1="38" y1="104" x2="466" y2="104" stroke="rgb(71,85,105)"/><path d="M 40 116 C 96 132 136 146 186 128 S 272 48 332 42 S 404 58 462 72" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/><line x1="38" y1="52" x2="466" y2="52" stroke="rgb(248,113,113)" strokeDasharray="4 3"/><line x1="38" y1="154" x2="466" y2="154" stroke="rgb(45,212,191)" strokeDasharray="4 3"/>
      <text x="44" y="30" fill="rgb(56,189,248)" fontSize="7">WEEKLY NET POSITION + PERCENTILE</text><text x="330" y="184" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">REPORT DATE → PUBLICATION LAG</text><text x="402" y="92" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">EXTREME CAN PERSIST</text>
    </>;
    if (type === "COTDivergenceChart") return <>
      {grid}<path d="M 40 150 C 122 138 190 108 262 72 S 382 44 462 36" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 40 48 C 124 62 190 88 262 120 S 382 150 462 158" fill="none" stroke="rgb(248,113,113)" strokeWidth="2.2"/><path d="M 40 130 C 144 124 236 112 330 94 S 416 78 462 74" fill="none" stroke="rgb(251,191,36)" strokeDasharray="5 3"/>
      <text x="46" y="26" fill="rgb(45,212,191)" fontSize="7">COMMERCIALS</text><text x="112" y="26" fill="rgb(248,113,113)" fontSize="7">SPECULATORS</text><text x="214" y="26" fill="rgb(251,191,36)" fontSize="7">PRICE</text><text x="360" y="110" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">DIVERGENCE → CONVERGENCE CHECK</text>
    </>;
    if (type === "RetailSentimentContrarianChart") return <>
      {grid}<path d="M 42 54 C 118 42 184 40 244 58 S 352 116 462 142" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/><path d="M 42 146 C 118 148 184 136 244 112 S 352 72 462 58" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><rect x="42" y="34" width="190" height="48" fill="rgba(248,113,113,.06)" stroke="rgba(248,113,113,.55)"/>
      <text x="48" y="26" fill="rgb(217,70,239)" fontSize="7">RETAIL CROWDING</text><text x="48" y="172" fill="rgb(56,189,248)" fontSize="7">PRICE STRUCTURE CHANGE</text><text x="342" y="96" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">WAIT FOR CONFIRMATION</text>
    </>;
    if (type === "RetailSentimentTrendChart") return <>
      {grid}<path d="M 42 158 C 112 146 174 122 236 96 S 352 64 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 42 136 C 124 132 188 116 248 92 S 366 58 462 62" fill="none" stroke="rgb(217,70,239)" strokeWidth="1.8" strokeDasharray="5 3"/><rect x="352" y="32" width="102" height="54" fill="rgba(251,191,36,.07)" stroke="rgba(251,191,36,.55)"/>
      <text x="48" y="28" fill="rgb(45,212,191)" fontSize="7">ESTABLISHED PRICE TREND</text><text x="48" y="42" fill="rgb(217,70,239)" fontSize="7">RETAIL RATIO CONTEXT</text><text x="402" y="102" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">LATE-CROWD EXHAUSTION</text>
    </>;
    if (type === "RiskReversalSkewChart") return <>
      {grid}<path d="M 42 130 C 126 116 190 92 260 68 S 382 48 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.1"/><path d="M 42 82 C 126 88 190 104 260 118 S 382 134 462 142" fill="none" stroke="rgb(248,113,113)" strokeWidth="2.1"/><path d="M 42 154 C 134 146 206 124 276 92 S 396 70 462 66" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 3"/>
      <text x="48" y="28" fill="rgb(45,212,191)" fontSize="7">CALL IV</text><text x="96" y="28" fill="rgb(248,113,113)" fontSize="7">PUT IV</text><text x="144" y="28" fill="rgb(251,191,36)" fontSize="7">RISK-REVERSAL SKEW</text><text x="382" y="174" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">EVENT PREMIUM / NORMALIZATION</text>
    </>;
    if (type === "ForexFearGreedChart") return <>
      {grid}{[[54,58],[116,92],[178,72],[240,122],[302,84]].map(([x,h],i)=><rect key={x} x={x} y={166-h} width="38" height={h} fill={["rgba(56,189,248,.5)","rgba(45,212,191,.5)","rgba(251,191,36,.5)","rgba(217,70,239,.5)","rgba(248,113,113,.5)"][i]}/>)}<path d="M 42 142 C 126 132 194 112 260 94 S 384 70 462 58" fill="none" stroke="rgb(226,232,240)" strokeWidth="2"/>
      <text x="48" y="28" fill="rgb(226,232,240)" fontSize="7">EQUITIES · VOLATILITY · YIELDS · CREDIT · FX BREADTH</text><text x="382" y="116" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">COMPOSITE + PAIR CHECK</text><text x="382" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">COMPONENT DISAGREEMENT</text>
    </>;
    if (type === "NewsSentimentReactionChart") return <>
      {grid}<line x1="174" y1="24" x2="174" y2="176" stroke="rgb(251,191,36)" strokeDasharray="4 3"/><path d="M 42 132 C 108 128 140 130 174 126 S 220 54 270 86 S 366 72 462 58" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/><path d="M 42 152 C 112 150 150 146 184 116 S 248 90 310 98 S 400 80 462 76" fill="none" stroke="rgb(217,70,239)" strokeDasharray="5 3"/>
      <text x="42" y="28" fill="rgb(251,191,36)" fontSize="7">PRIMARY TEXT TIMESTAMP</text><text x="238" y="42" fill="rgb(217,70,239)" fontSize="7">CONTEXT-AWARE SCORE</text><text x="376" y="118" fill="rgb(45,212,191)" fontSize="7">FIRST STABLE CLOSE</text><text x="226" y="178" fill="rgb(248,113,113)" fontSize="7">NEGATION / HEADLINE TRAP</text>
    </>;
    if (type === "FundingOpenInterestMatrixChart") return <>
      <line x1="250" y1="28" x2="250" y2="176" stroke="rgb(71,85,105)"/><line x1="52" y1="102" x2="448" y2="102" stroke="rgb(71,85,105)"/><rect x="58" y="34" width="184" height="60" fill="rgba(45,212,191,.08)" stroke="rgba(45,212,191,.45)"/><rect x="258" y="34" width="184" height="60" fill="rgba(251,191,36,.08)" stroke="rgba(251,191,36,.45)"/><rect x="58" y="110" width="184" height="60" fill="rgba(56,189,248,.08)" stroke="rgba(56,189,248,.45)"/><rect x="258" y="110" width="184" height="60" fill="rgba(248,113,113,.08)" stroke="rgba(248,113,113,.45)"/>
      <text x="150" y="68" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">NEGATIVE FUNDING + OI RISE</text><text x="350" y="68" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">POSITIVE FUNDING + OI RISE</text><text x="150" y="144" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">OI FALL / POSITION CLOSURE</text><text x="350" y="144" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CROWDING / VENUE CHECK</text>
    </>;
    if (type === "FundingBasisConvergenceChart") return <>
      {grid}<path d="M 42 46 C 140 58 220 78 302 98 S 402 108 462 110" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/><path d="M 42 154 C 140 142 220 124 302 112 S 402 110 462 110" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/><line x1="42" y1="110" x2="462" y2="110" stroke="rgb(251,191,36)" strokeDasharray="4 3"/>
      <text x="48" y="28" fill="rgb(217,70,239)" fontSize="7">FUTURES / PERPETUAL BASIS</text><text x="48" y="174" fill="rgb(56,189,248)" fontSize="7">SPOT REFERENCE</text><text x="360" y="90" fill="rgb(45,212,191)" fontSize="7">CONVERGENCE</text><text x="336" y="144" fill="rgb(248,113,113)" fontSize="7">COST · MARGIN · VENUE FAILURE</text>
    </>;
    if (type === "ShortSqueezeMechanicsChart") return <>
      {grid}<path d="M 42 146 C 136 142 204 134 262 116 S 330 52 462 36" fill="none" stroke="rgb(45,212,191)" strokeWidth="3"/><path d="M 42 92 C 132 82 204 72 270 64 S 352 102 462 136" fill="none" stroke="rgb(217,70,239)" strokeWidth="2" strokeDasharray="4 3"/>{[292,330,368].map(x=><line key={x} x1={x} y1="54" x2={x} y2="130" stroke="rgb(248,113,113)" strokeDasharray="2 2"/>)}
      <text x="48" y="28" fill="rgb(217,70,239)" fontSize="7">ELEVATED OI / NEGATIVE FUNDING</text><text x="340" y="28" fill="rgb(45,212,191)" fontSize="7">SPOT RECLAIM + DISPLACEMENT</text><text x="380" y="154" fill="rgb(248,113,113)" fontSize="7">SHORT LIQUIDATIONS / OI DROP</text>
    </>;
    if (type === "LiquidationFrontRunRiskChart") return <>
      {grid}<rect x="316" y="44" width="108" height="34" fill="rgba(248,113,113,.18)" stroke="rgb(248,113,113)"/><path d="M 42 148 C 124 142 192 128 252 108 S 320 86 364 62 S 414 78 462 104" fill="none" stroke="rgb(226,232,240)" strokeWidth="2.3"/><rect x="250" y="92" width="58" height="40" fill="rgba(251,191,36,.07)" stroke="rgb(251,191,36)" strokeDasharray="3 2"/>
      <text x="370" y="36" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ESTIMATED CLUSTER</text><text x="278" y="148" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">OBSERVATION BUFFER</text><text x="388" y="130" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">RECLAIM OR SWEEP-THROUGH</text>
    </>;
    if (type === "RedditSentimentAuditChart") return <>
      {grid}{[[68,54],[68,102],[68,150]].map(([x,y],i)=><circle key={y} cx={x} cy={y} r="18" fill="rgba(15,23,42,.9)" stroke={["rgb(56,189,248)","rgb(167,139,250)","rgb(45,212,191)"][i]}/>)}<path d="M 88 54 L 206 96 M 88 102 L 206 96 M 88 150 L 206 96" stroke="rgb(71,85,105)"/><path d="M 206 96 C 280 72 354 60 462 48" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/>
      <text x="68" y="24" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">FIXED COMMUNITIES</text><text x="206" y="118" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">UNIQUE AUTHORS + FILTERS</text><text x="378" y="86" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BRIGADING / BOT TRAP</text>
    </>;
    if (type === "ExchangeOutflowAuditChart") return <>
      {grid}<rect x="42" y="72" width="98" height="62" rx="5" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><text x="91" y="106" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">EXCHANGE</text><rect x="356" y="42" width="100" height="44" rx="5" fill="rgba(45,212,191,.1)" stroke="rgb(45,212,191)"/><text x="406" y="68" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">VERIFIED CUSTODY</text><rect x="356" y="122" width="100" height="44" rx="5" fill="rgba(248,113,113,.08)" stroke="rgb(248,113,113)"/><text x="406" y="148" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">INTERNAL / UNKNOWN</text><path d="M 140 92 C 220 56 284 56 356 64 M 140 116 C 220 146 284 144 356 144" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/>
      <text x="248" y="32" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ENTITY-ADJUSTED NETFLOW</text><text x="248" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">LABEL / DESTINATION AUDIT</text>
    </>;
    if (type === "BollingerSqueezeChart") return <>
      {grid}<path d="M 42 44 C 118 58 170 76 230 92 S 312 98 352 94 S 410 62 462 42" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><path d="M 42 166 C 118 150 170 132 230 116 S 312 110 352 114 S 410 146 462 166" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><path d="M 42 104 C 132 104 212 104 302 104 S 392 104 462 104" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 3"/><path d="M 42 132 C 148 124 238 110 330 102 S 396 70 462 54" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/>
      <text x="250" y="84" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">BANDWIDTH SQUEEZE</text><text x="418" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">CLOSE + EXPANSION</text><text x="392" y="190" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">RETURN INSIDE TRAP</text>
    </>;
    if (type === "ATRExpansionBreakoutChart") return <>
      {grid}<rect x="42" y="78" width="214" height="52" fill="rgba(56,189,248,.06)" stroke="rgba(56,189,248,.5)"/><path d="M 42 112 C 116 104 182 108 252 100 S 320 70 462 44" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 42 166 C 134 162 212 158 276 150 S 356 104 462 72" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="148" y="70" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">PRE-MARKED STRUCTURE</text><text x="336" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">BODY-CLOSE BREAKOUT</text><text x="370" y="126" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">ATR VS ITS BASELINE</text><text x="320" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">NEWS SPIKE / RETURN INSIDE</text>
    </>;
    if (type === "HashrateNetworkAuditChart") return <>
      {grid}<path d="M 42 142 C 116 130 166 116 232 96 S 356 66 462 52" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/><path d="M 42 168 C 122 162 194 146 262 130 S 368 104 462 88" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/><path d="M 42 76 C 124 82 186 98 256 122 S 374 150 462 142" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="62" y="32" fill="rgb(56,189,248)" fontSize="7">HASHRATE</text><text x="62" y="48" fill="rgb(251,191,36)" fontSize="7">DIFFICULTY</text><text x="62" y="64" fill="rgb(217,70,239)" fontSize="7">HASHPRICE</text><text x="330" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DIFFICULTY LAG / PRICE MYTH</text>
    </>;
    if (type === "SupplyDemandZoneChart") return <>
      {grid}<rect x="52" y="46" width="146" height="42" fill="rgba(248,113,113,.13)" stroke="rgb(248,113,113)"/><rect x="52" y="128" width="146" height="42" fill="rgba(45,212,191,.12)" stroke="rgb(45,212,191)"/><path d="M 64 132 C 150 102 190 76 252 60 S 362 74 456 42" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/><path d="M 456 42 C 386 82 300 122 198 146" fill="none" stroke="rgb(251,191,36)" strokeDasharray="5 4"/>
      <text x="126" y="38" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SUPPLY ZONE</text><text x="126" y="184" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">DEMAND ZONE</text><text x="304" y="138" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">RETURN / MITIGATION</text><text x="354" y="190" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">STALE ZONE TRAP</text>
    </>;
    if (type === "MarketMakingSpreadChart") return <>
      {grid}<line x1="250" y1="38" x2="250" y2="174" stroke="rgb(226,232,240)"/><path d="M 70 88 C 156 82 216 84 250 92 S 344 98 430 88" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/><path d="M 70 118 C 156 124 216 122 250 116 S 344 108 430 118" fill="none" stroke="rgb(248,113,113)" strokeWidth="2"/><rect x="212" y="72" width="76" height="62" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="90" y="78" fill="rgb(45,212,191)" fontSize="7">BID</text><text x="90" y="134" fill="rgb(248,113,113)" fontSize="7">ASK</text><text x="250" y="62" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">SPREAD</text><text x="336" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ADVERSE SELECTION / INVENTORY</text>
    </>;
    if (type === "StakingFlowAuditChart") return <>
      {grid}<rect x="42" y="64" width="104" height="58" rx="5" fill="rgba(45,212,191,.1)" stroke="rgb(45,212,191)"/><text x="94" y="96" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">STAKED</text><rect x="210" y="42" width="98" height="42" rx="5" fill="rgba(251,191,36,.1)" stroke="rgb(251,191,36)"/><text x="259" y="67" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">UNLOCK QUEUE</text><rect x="362" y="104" width="98" height="42" rx="5" fill="rgba(248,113,113,.08)" stroke="rgb(248,113,113)"/><text x="411" y="129" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">EXCHANGE?</text><path d="M 146 92 C 180 76 196 66 210 62 M 308 64 C 342 76 358 94 362 122" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/>
      <text x="252" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">UNSTAKE DOES NOT EQUAL SELLING</text>
    </>;
    if (type === "PegMaintenanceChart") return <>
      {grid}<rect x="60" y="62" width="380" height="72" fill="rgba(56,189,248,.06)" stroke="rgb(56,189,248)"/><line x1="60" y1="98" x2="440" y2="98" stroke="rgb(251,191,36)" strokeDasharray="5 4"/><path d="M 42 118 C 118 130 172 124 230 102 S 316 72 456 82" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><path d="M 94 134 C 150 114 180 104 222 98" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="250" y="54" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">OFFICIAL BAND</text><text x="250" y="92" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PEG</text><text x="160" y="148" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">INTERVENTION PRESSURE</text><text x="362" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FALSE BREAK / REPEG</text>
    </>;
    if (type === "MovingAverageBounceChart") return <>
      {grid}<path d="M 42 150 C 110 128 160 118 224 102 S 342 68 462 48" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/><path d="M 42 162 C 128 136 164 108 220 106 S 292 126 330 96 S 402 62 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><circle cx="224" cy="106" r="11" fill="rgba(56,189,248,.18)" stroke="rgb(56,189,248)"/>
      <text x="152" y="78" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">MOVING AVERAGE CONTEXT</text><text x="224" y="126" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">FIRST CLEAN PULLBACK</text><text x="350" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CLOSE THROUGH FAILURE</text>
    </>;
    if (type === "HorizontalSRBreakoutChart") return <>
      {grid}<line x1="42" y1="96" x2="462" y2="96" stroke="rgb(251,191,36)" strokeWidth="2"/><path d="M 42 132 C 122 126 172 104 224 98 S 296 112 332 92 S 398 58 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 336 92 C 300 118 268 128 230 112" fill="none" stroke="rgb(248,113,113)" strokeDasharray="5 4"/>
      <text x="140" y="86" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PRE-MARKED HORIZONTAL LEVEL</text><text x="394" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">BODY CLOSE</text><text x="286" y="148" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FAILED BREAK BACK INSIDE</text>
    </>;
    if (type === "RoundNumberBounceChart") return <>
      {grid}<line x1="42" y1="104" x2="462" y2="104" stroke="rgb(251,191,36)" strokeWidth="2.4"/><path d="M 42 62 C 126 74 180 92 236 102 S 310 128 366 104 S 420 74 462 66" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><rect x="206" y="82" width="78" height="44" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="250" y="94" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ROUND NUMBER</text><text x="246" y="140" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">REACTION QUALITY</text><text x="366" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CLEAN BREAK-THROUGH TRAP</text>
    </>;
    if (type === "GasActivityAuditChart") return <>
      {grid}<path d="M 42 142 C 116 136 186 118 250 92 S 362 60 462 54" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/><path d="M 42 162 C 126 156 196 146 260 126 S 360 96 462 88" fill="none" stroke="rgb(56,189,248)" strokeWidth="2"/><path d="M 42 76 C 112 78 190 92 260 116 S 370 146 462 150" fill="none" stroke="rgb(248,113,113)" strokeWidth="2"/>
      <text x="52" y="28" fill="rgb(251,191,36)" fontSize="7">GAS PRICE</text><text x="52" y="44" fill="rgb(56,189,248)" fontSize="7">TX COUNT</text><text x="52" y="60" fill="rgb(248,113,113)" fontSize="7">FAILURE RATE</text><text x="326" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">HIGH GAS IS NOT AUTOMATIC DEMAND</text>
    </>;
    if (type === "SpotFuturesBasisChart") return <>
      {grid}<path d="M 42 122 C 128 116 206 108 286 100 S 384 88 462 80" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 42 78 C 128 70 206 74 286 82 S 384 96 462 112" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/><path d="M 60 170 L 440 170" stroke="rgb(251,191,36)" strokeDasharray="5 4"/>
      <text x="62" y="32" fill="rgb(45,212,191)" fontSize="7">SPOT</text><text x="62" y="48" fill="rgb(217,70,239)" fontSize="7">FUTURES</text><text x="272" y="62" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">BASIS + COST LEDGER</text><text x="326" y="190" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BASIS WIDENING / VENUE TRAP</text>
    </>;
    if (type === "TriangularArbitrageChart") return <>
      {grid}<polygon points="250,38 90,150 410,150" fill="rgba(15,23,42,.55)" stroke="rgb(56,189,248)"/><text x="250" y="32" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">EUR/USD</text><text x="84" y="166" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">USD/JPY</text><text x="416" y="166" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">EUR/JPY</text><circle cx="250" cy="112" r="34" fill="rgba(251,191,36,.11)" stroke="rgb(251,191,36)"/><text x="250" y="116" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">IMPLIED VS ACTUAL</text>
      <text x="250" y="190" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BID/ASK + LATENCY + FILL SEQUENCE</text>
    </>;
    if (type === "CoveredInterestArbitrageChart") return <>
      {grid}<rect x="52" y="56" width="104" height="42" rx="4" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><text x="104" y="81" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">SPOT</text><rect x="198" y="56" width="104" height="42" rx="4" fill="rgba(251,191,36,.1)" stroke="rgb(251,191,36)"/><text x="250" y="81" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">RATE DIFF</text><rect x="344" y="56" width="104" height="42" rx="4" fill="rgba(217,70,239,.1)" stroke="rgb(217,70,239)"/><text x="396" y="81" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">FORWARD</text><path d="M 104 98 C 154 142 198 142 250 98 M 250 98 C 302 142 344 142 396 98" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/>
      <text x="250" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">COSTS / CAPITAL CONTROLS / COUNTERPARTY</text>
    </>;
    if (type === "ReverseBasisTradeChart") return <>
      {grid}<path d="M 42 78 C 130 82 206 94 286 112 S 386 134 462 142" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/><path d="M 42 136 C 130 128 206 112 286 96 S 386 74 462 62" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><rect x="198" y="82" width="112" height="48" fill="rgba(248,113,113,.08)" stroke="rgb(248,113,113)"/>
      <text x="56" y="32" fill="rgb(217,70,239)" fontSize="7">FUTURES / PERP</text><text x="56" y="48" fill="rgb(45,212,191)" fontSize="7">SPOT</text><text x="254" y="108" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">INVERTED BASIS</text><text x="326" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SQUEEZE / MARGIN TRAP</text>
    </>;
    if (type === "CalendarSpreadRollChart") return <>
      {grid}<path d="M 42 68 C 130 74 206 88 288 108 S 392 136 462 144" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/><path d="M 42 132 C 130 126 206 112 288 92 S 392 68 462 58" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/><rect x="188" y="76" width="112" height="58" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="58" y="34" fill="rgb(56,189,248)" fontSize="7">NEAR FUTURE</text><text x="58" y="50" fill="rgb(217,70,239)" fontSize="7">FAR FUTURE</text><text x="244" y="106" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ROLL YIELD / BASIS CURVE</text><text x="330" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">EXPIRY / ROLL SLIPPAGE</text>
    </>;
    if (type === "RelativeValueBasketChart") return <>
      {grid}{[[70,74,"USD"],[128,116,"EUR"],[186,54,"JPY"],[244,96,"GBP"]].map(([x,h,label])=><g key={String(label)}><rect x={Number(x)} y={166-Number(h)} width="34" height={Number(h)} fill="rgba(56,189,248,.48)"/><text x={Number(x)+17} y="184" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{label}</text></g>)}<path d="M 324 142 C 356 108 396 76 462 52" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 324 62 C 362 92 402 126 462 150" fill="none" stroke="rgb(248,113,113)" strokeWidth="2.1"/>
      <text x="156" y="34" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">STRENGTH + WEIGHT INPUTS</text><text x="392" y="42" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">LONG BASKET</text><text x="392" y="168" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SHORT BASKET</text><text x="260" y="196" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">CORRELATION / REBALANCE CHECK</text>
    </>;
    if (type === "FXForwardCurveChart") return <>
      {grid}<path d="M 54 146 C 142 126 226 106 310 88 S 396 72 456 64" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 54 100 C 142 104 226 112 310 124 S 396 136 456 146" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.1"/>{[108,208,308,408].map((x,i)=><g key={x}><line x1={x} y1="48" x2={x} y2="164" stroke="rgba(148,163,184,.45)" strokeDasharray="3 3"/><text x={x} y="176" fill="rgb(148,163,184)" fontSize="6" textAnchor="middle">{`${i+1}M`}</text></g>)}
      <text x="64" y="32" fill="rgb(45,212,191)" fontSize="7">FORWARD POINTS</text><text x="64" y="48" fill="rgb(251,191,36)" fontSize="7">RATE DIFFERENTIAL</text><text x="308" y="62" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CURVE DISLOCATION</text><text x="330" y="196" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">MISMATCH / CAPITAL CONSTRAINT</text>
    </>;
    if (type === "OrderAnticipationRiskChart") return <>
      {grid}<rect x="62" y="58" width="112" height="54" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><text x="118" y="88" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">PUBLIC FOOTPRINT</text><line x1="250" y1="34" x2="250" y2="166" stroke="rgb(248,113,113)" strokeWidth="2" strokeDasharray="5 4"/><text x="250" y="28" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">COMPLIANCE BOUNDARY</text><path d="M 176 86 C 224 76 274 68 332 80 S 410 118 462 144" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/>
      <text x="358" y="72" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ANTICIPATION PATH</text><text x="356" y="164" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FAILED / SPOOFED / PROHIBITED TRAP</text>
    </>;
    if (type === "GammaScalpingChart") return <>
      {grid}<path d="M 42 112 C 104 70 168 56 244 104 S 368 156 462 82" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/><path d="M 42 104 C 124 104 204 104 284 104 S 386 104 462 104" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 3"/>{[118,238,354].map(x=><circle key={x} cx={x} cy="104" r="8" fill="rgba(45,212,191,.15)" stroke="rgb(45,212,191)"/>)}
      <text x="62" y="34" fill="rgb(56,189,248)" fontSize="7">UNDERLYING PATH</text><text x="204" y="94" fill="rgb(251,191,36)" fontSize="7">DELTA HEDGE LINE</text><text x="278" y="52" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">RE-HEDGE POINTS</text><text x="330" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FEES / THETA / OVER-HEDGE</text>
    </>;
    if (type === "VolatilitySkewChart") return <>
      {grid}<path d="M 48 140 C 126 76 198 62 250 106 S 376 132 462 54" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.4"/><path d="M 48 116 C 132 108 206 104 286 102 S 392 100 462 98" fill="none" stroke="rgb(148,163,184)" strokeDasharray="4 3"/><rect x="338" y="42" width="92" height="64" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="64" y="32" fill="rgb(217,70,239)" fontSize="7">IV SMILE / SKEW</text><text x="384" y="36" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">EVENT PREMIUM</text><text x="252" y="158" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SKEW NORMALIZATION TRAP</text>
    </>;
    if (type === "OptionsStraddleChart") return <>
      {grid}<path d="M 58 150 L 162 104 L 250 70 L 338 104 L 442 150" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.5"/><path d="M 58 72 L 162 118 L 250 150 L 338 118 L 442 72" fill="none" stroke="rgb(248,113,113)" strokeWidth="2" strokeDasharray="5 3"/><rect x="178" y="88" width="144" height="54" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="250" y="82" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">LONG STRADDLE PAYOFF</text><text x="250" y="162" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SHORT STRADDLE RISK</text><text x="250" y="116" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">BREAKEVEN BAND</text><text x="326" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">THETA / IV / GAP RISK</text>
    </>;
    if (type === "OptionsVerticalSpreadChart") return <>
      {grid}<path d="M 58 150 L 162 150 L 250 88 L 338 88 L 442 88" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.5"/><path d="M 58 88 L 162 88 L 250 118 L 338 150 L 442 150" fill="none" stroke="rgb(248,113,113)" strokeWidth="2" strokeDasharray="5 3"/>
      {[162,338].map((x,i)=><line key={x} x1={x} y1="42" x2={x} y2="166" stroke={i===0?"rgb(56,189,248)":"rgb(251,191,36)"} strokeDasharray="4 3"/>)}
      <rect x="162" y="82" width="176" height="72" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/><text x="162" y="34" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">LONG STRIKE</text><text x="338" y="34" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">SHORT STRIKE</text><text x="250" y="112" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">DEFINED-RISK SPREAD BODY</text><text x="326" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DEBIT / IV / TIME DECAY TRAP</text>
    </>;
    if (type === "PutCallParityChart") return <>
      {grid}<rect x="58" y="48" width="152" height="54" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><text x="134" y="80" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">CALL + CASH</text><rect x="290" y="48" width="152" height="54" fill="rgba(217,70,239,.1)" stroke="rgb(217,70,239)"/><text x="366" y="80" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">PUT + SPOT</text><line x1="210" y1="76" x2="290" y2="76" stroke="rgb(251,191,36)" strokeWidth="2"/><path d="M 72 144 C 160 130 222 118 300 118 S 396 132 452 146" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/>
      <text x="250" y="66" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PARITY CHECK</text><text x="250" y="136" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">SYNTHETIC FORWARD COMPARISON</text><text x="322" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FEES / BORROW / EXERCISE TRAP</text>
    </>;
    if (type === "ProtectivePutHedgeChart") return <>
      {grid}<path d="M 52 142 C 138 124 214 98 292 74 S 386 52 456 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><path d="M 52 156 L 168 156 L 250 118 L 456 118" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.3"/><line x1="250" y1="34" x2="250" y2="168" stroke="rgb(251,191,36)" strokeDasharray="5 3"/><rect x="72" y="118" width="154" height="48" fill="rgba(56,189,248,.08)" stroke="rgb(56,189,248)"/>
      <text x="70" y="32" fill="rgb(45,212,191)" fontSize="7">SPOT HOLDING</text><text x="250" y="28" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">PUT STRIKE</text><text x="148" y="146" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">DOWNSIDE FLOOR</text><text x="332" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">PREMIUM / IV / LIQUIDITY TRAP</text>
    </>;
    if (type === "CoveredCallChart") return <>
      {grid}<path d="M 52 150 C 130 132 214 104 300 80 S 394 58 456 46" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 52 150 C 142 124 218 96 310 72 L 456 72" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.5"/><line x1="310" y1="34" x2="310" y2="168" stroke="rgb(248,113,113)" strokeDasharray="5 3"/><rect x="308" y="48" width="112" height="52" fill="rgba(248,113,113,.07)" stroke="rgb(248,113,113)"/>
      <text x="76" y="32" fill="rgb(45,212,191)" fontSize="7">SPOT LEG</text><text x="310" y="28" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">SHORT CALL STRIKE</text><text x="388" y="86" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">UPSIDE CAP</text><text x="292" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ASSIGNMENT / IV EXPANSION</text>
    </>;
    if (type === "OptionsButterflySpreadChart") return <>
      {grid}<path d="M 58 154 L 162 154 L 250 58 L 338 154 L 442 154" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.6"/>{[162,250,338].map((x,i)=><line key={x} x1={x} y1="38" x2={x} y2="166" stroke={i===1?"rgb(251,191,36)":"rgb(56,189,248)"} strokeDasharray="4 3"/>)}<rect x="200" y="70" width="100" height="70" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="162" y="32" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">LOWER WING</text><text x="250" y="32" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">BODY STRIKE</text><text x="338" y="32" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">UPPER WING</text><text x="250" y="112" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">CENTRAL BODY</text><text x="318" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ILLIQUID STRIKE / IV SHIFT</text>
    </>;
    if (type === "OptionsIronCondorChart") return <>
      {grid}<path d="M 56 154 L 136 118 L 204 82 L 296 82 L 364 118 L 444 154" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.5"/>{[136,204,296,364].map((x,i)=><line key={x} x1={x} y1="38" x2={x} y2="166" stroke={i===1||i===2?"rgb(251,191,36)":"rgb(56,189,248)"} strokeDasharray="4 3"/>)}<rect x="204" y="72" width="92" height="62" fill="rgba(251,191,36,.08)" stroke="rgb(251,191,36)"/>
      <text x="170" y="30" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">PUT SPREAD</text><text x="250" y="64" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">RANGE BODY</text><text x="330" y="30" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">CALL SPREAD</text><text x="326" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BREAKOUT / GAP RISK</text>
    </>;
    if (type === "GammaTiltChart") return <>
      {grid}{[86,142,198,254,310,366,422].map((x,i)=><rect key={x} x={x-12} y={i<3?88-i*14:92+(i-3)*16} width="24" height={i<3?78+i*14:72-(i-3)*12} fill={i<3?"rgba(45,212,191,.45)":"rgba(248,113,113,.45)"}/>)}<line x1="254" y1="34" x2="254" y2="168" stroke="rgb(251,191,36)" strokeDasharray="5 3"/><path d="M 44 136 C 122 112 210 92 254 86 S 350 104 456 138" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/>
      <text x="254" y="28" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">SPOT NEAR STRIKE CLUSTER</text><text x="146" y="62" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">POSITIVE GAMMA</text><text x="358" y="62" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">NEGATIVE GAMMA</text><text x="310" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">GAMMA FLIP / DEPTH TRAP</text>
    </>;
    if (type === "CrossExchangeArbitrageChart") return <>
      {grid}<rect x="58" y="52" width="132" height="62" rx="5" fill="rgba(56,189,248,.1)" stroke="rgb(56,189,248)"/><text x="124" y="78" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">EXCHANGE A</text><text x="124" y="94" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">PRICE + DEPTH</text><rect x="310" y="52" width="132" height="62" rx="5" fill="rgba(217,70,239,.1)" stroke="rgb(217,70,239)"/><text x="376" y="78" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">EXCHANGE B</text><text x="376" y="94" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">PRICE + DEPTH</text><path d="M 190 82 C 226 48 274 48 310 82" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 310 102 C 274 138 226 138 190 102" fill="none" stroke="rgb(251,191,36)" strokeDasharray="5 3"/>
      <text x="250" y="42" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">VENUE PRICE GAP</text><text x="250" y="150" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">TRANSFER / INVENTORY / FEES</text><text x="300" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">STALE QUOTE / NON-EXECUTABLE GAP</text>
    </>;
    if (type === "ForexSocialSentimentChart") return <>
      {grid}{[[58,48,"TWITTER"],[58,112,"REDDIT"]].map(([x,y,t])=><g key={String(t)}><circle cx={Number(x)} cy={Number(y)} r="22" fill="rgba(15,23,42,.9)" stroke="rgb(56,189,248)"/><text x={Number(x)} y={Number(y)+3} fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{t}</text></g>)}<path d="M 82 48 L 206 82 M 82 112 L 206 82" stroke="rgb(71,85,105)"/><path d="M 206 82 C 282 70 358 76 462 48" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.2"/><path d="M 206 128 C 286 124 366 108 462 92" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/>
      <text x="206" y="104" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">FILTER + UNIQUE AUTHORS</text><text x="382" y="34" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">SENTIMENT BREADTH</text><text x="382" y="124" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">FOREX + MACRO CONTEXT</text><text x="286" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BOT / STALE TEXT TRAP</text>
    </>;
    if (type === "ExchangeInflowDistributionChart") return <>
      {grid}{[[52,18],[92,34],[132,54],[172,94],[212,42]].map(([x,h],i)=><rect key={x} x={x} y={166-h} width="26" height={h} fill={i===3?"rgba(248,113,113,.65)":"rgba(56,189,248,.45)"}/>)}<rect x="310" y="54" width="138" height="72" fill="rgba(15,23,42,.8)" stroke="rgb(251,191,36)"/><text x="379" y="80" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">VENUE CONCENTRATION</text><text x="379" y="98" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ONE LARGE ENTITY?</text>
      <text x="142" y="28" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">DEPOSIT-SIZE DISTRIBUTION</text><text x="250" y="188" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ENTITY / INTERNAL-TRANSFER FILTER</text>
    </>;
    if (type === "ExchangeNetflowDivergenceChart") return <>
      {grid}<line x1="42" y1="104" x2="462" y2="104" stroke="rgb(71,85,105)"/><path d="M 42 138 C 124 148 190 142 252 126 S 370 88 462 62" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><path d="M 42 68 C 124 62 190 70 252 88 S 370 120 462 140" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/>
      <text x="48" y="28" fill="rgb(45,212,191)" fontSize="7">PRICE PATH</text><text x="48" y="42" fill="rgb(217,70,239)" fontSize="7">ENTITY-ADJUSTED NETFLOW</text><text x="350" y="98" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">DIVERGENCE RESOLUTION</text><text x="350" y="178" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CUSTODY MIGRATION TRAP</text>
    </>;
    if (type === "PriceSentimentDivergenceChart") return <>
      {grid}<path d="M 42 146 L 126 112 L 202 124 L 286 68 L 370 82 L 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/><path d="M 42 156 L 126 132 L 202 142 L 286 112 L 370 128 L 462 138" fill="none" stroke="rgb(217,70,239)" strokeWidth="2.3"/><line x1="286" y1="68" x2="462" y2="42" stroke="rgb(251,191,36)" strokeDasharray="4 3"/><line x1="286" y1="112" x2="462" y2="138" stroke="rgb(251,191,36)" strokeDasharray="4 3"/>
      <text x="48" y="28" fill="rgb(45,212,191)" fontSize="7">PRICE SWINGS</text><text x="48" y="42" fill="rgb(217,70,239)" fontSize="7">SENTIMENT PATH</text><text x="372" y="104" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">DIVERGENCE</text><text x="320" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FAILED DIVERGENCE CONTINUATION</text>
    </>;
    if (type === "CoinAgeMovementChart") return <>
      {grid}{[[56,20],[104,28],[152,24],[200,82],[248,34],[296,118],[344,30],[392,46]].map(([x,h],i)=><rect key={x} x={x} y={166-h} width="28" height={h} fill={i===3||i===5?"rgba(251,191,36,.65)":"rgba(56,189,248,.4)"}/>)}<path d="M 42 134 C 126 132 188 120 248 106 S 364 88 462 72" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="216" y="28" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">COIN AGE × AMOUNT MOVED</text><text x="374" y="56" fill="rgb(217,70,239)" fontSize="7">PRICE / VOLUME RESPONSE</text><text x="256" y="188" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ENTITY LABEL / INTERNAL CHURN TRAP</text>
    </>;
    if (type === "SentimentBreakoutChart") return <>
      {grid}<rect x="42" y="82" width="246" height="54" fill="rgba(56,189,248,.06)" stroke="rgb(56,189,248)"/><path d="M 42 120 C 122 114 202 122 286 104 S 354 58 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 42 156 C 154 154 236 142 304 116 S 390 82 462 72" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="164" y="74" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">PRE-MARKED BOUNDARY</text><text x="368" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">PRICE-LED BREAKOUT</text><text x="374" y="104" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">FRESH SENTIMENT BREADTH</text><text x="266" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">STALE / CONTRARY CONTEXT</text>
    </>;
    if (type === "SentimentMacroConfluenceChart") return <>
      {grid}{[["MACRO A",54,54],["MACRO B",54,126],["SENTIMENT",226,90],["PAIR",396,90]].map(([t,x,y],i)=><g key={String(t)}><rect x={Number(x)-42} y={Number(y)-18} width="84" height="36" rx="4" fill="rgba(15,23,42,.85)" stroke={["rgb(56,189,248)","rgb(45,212,191)","rgb(217,70,239)","rgb(251,191,36)"][i]}/><text x={Number(x)} y={Number(y)+3} fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{t}</text></g>)}<path d="M 96 54 L 184 84 M 96 126 L 184 96 M 268 90 L 354 90" stroke="rgb(71,85,105)" strokeWidth="2"/>
      <text x="226" y="28" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">AGREEMENT / DISAGREEMENT MATRIX</text><text x="248" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">CORRELATED INPUT / THESIS FAILURE</text>
    </>;
    if (type === "NRRangeBreakoutChart") return <>
      {grid}{[50,90,130,170,210,250,290].map((x,i)=><g key={x}><line x1={x} y1={60+i%2*12} x2={x} y2={150-i%3*8} stroke="rgb(148,163,184)"/><rect x={x-6} y={88+i%2*8} width="12" height={30-i*2} fill={i===6?"rgba(251,191,36,.7)":"rgba(56,189,248,.38)"}/></g>)}<rect x="282" y="78" width="24" height="54" fill="none" stroke="rgb(251,191,36)" strokeWidth="2"/><path d="M 306 90 C 356 76 402 58 462 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/>
      <text x="174" y="28" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">4 / 7-BAR RANGE COMPARISON</text><text x="294" y="148" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">NARROWEST BAR</text><text x="390" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">OUTSIDE CLOSE</text><text x="382" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">RETURN INSIDE</text>
    </>;
    if (type === "UTXOAgeDistributionChart") return <>
      {grid}{[[52,116,"<1M"],[118,92,"1-6M"],[184,70,"6-12M"],[250,46,"1-3Y"],[316,34,"3Y+"]].map(([x,h,t],i)=><g key={String(t)}><rect x={Number(x)} y={166-Number(h)} width="44" height={Number(h)} fill={i>2?"rgba(251,191,36,.55)":"rgba(56,189,248,.4)"}/><text x={Number(x)+22} y="184" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">{t}</text></g>)}<path d="M 42 144 C 150 138 238 130 326 104 S 410 70 462 62" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/>
      <text x="214" y="28" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">SUPPLY STOCK BY AGE</text><text x="390" y="92" fill="rgb(217,70,239)" fontSize="7" textAnchor="middle">SPENT OLD-COIN FLOW</text><text x="282" y="200" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">OLD SUPPLY ≠ SELLING</text>
    </>;
    if (type === "DOMOrderFlowChart") return <>
      <line x1="250" y1="26" x2="250" y2="180" stroke="rgb(226,232,240)" strokeWidth="2"/>{[48,72,96,120,144,168].map((y,i)=><g key={y}><rect x={250-(i%3+1)*42} y={y-8} width={(i%3+1)*42} height="15" fill="rgba(45,212,191,.35)"/><rect x="250" y={y-8} width={((i+1)%3+1)*38} height="15" fill="rgba(248,113,113,.35)"/><text x="244" y={y+3} fill="rgb(226,232,240)" fontSize="7" textAnchor="end">{(1.0860+i*.0001).toFixed(4)}</text></g>)}
      <text x="144" y="24" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">DISPLAYED BIDS</text><text x="356" y="24" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DISPLAYED ASKS</text><text x="250" y="198" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">ADD · PULL · ABSORB · SPOOF</text>
    </>;
    if (type === "WalletClusterAuditChart") return <>
      {grid}{[[92,64],[150,42],[150,92],[150,142],[242,64],[242,124],[354,92]].map(([x,y],i)=><circle key={`${x}-${y}`} cx={x} cy={y} r={i===0||i===6?18:10} fill="rgba(15,23,42,.9)" stroke={i===6?"rgb(251,191,36)":"rgb(56,189,248)"}/>)}<path d="M 110 64 L 140 42 M 110 70 L 140 92 M 104 80 L 140 142 M 160 42 L 232 64 M 160 92 L 232 64 M 160 142 L 232 124 M 252 64 L 336 88 M 252 124 L 336 96" stroke="rgb(71,85,105)"/>
      <text x="118" y="24" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">ADDRESS HEURISTICS</text><text x="354" y="64" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">DESTINATION</text><text x="272" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FALSE MERGE / FALSE SPLIT</text>
    </>;
    if (type === "VolumeProfileChart") return <>
      {grid}{[[48,68],[72,118],[96,172],[120,232],[144,148],[168,86]].map(([y,w],i)=><rect key={y} x="42" y={y} width={w} height="16" fill={i===3?"rgba(251,191,36,.7)":i===0||i===5?"rgba(248,113,113,.28)":"rgba(56,189,248,.42)"}/>)}<path d="M 302 162 C 338 142 360 116 388 104 S 432 70 462 48" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.3"/>
      <text x="160" y="28" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">VOLUME AT PRICE</text><text x="280" y="130" fill="rgb(251,191,36)" fontSize="7" textAnchor="end">POINT OF CONTROL</text><text x="396" y="186" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">PROFILE MIGRATION / DATA LIMIT</text>
    </>;
    if (type === "StablecoinSupplyRatioChart") return <>
      {grid}<path d="M 42 70 C 126 62 190 70 254 84 S 366 112 462 128" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/><path d="M 42 148 C 126 140 190 124 254 106 S 366 78 462 58" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.2"/><path d="M 42 112 C 132 118 214 112 296 96 S 402 72 462 66" fill="none" stroke="rgb(251,191,36)" strokeDasharray="4 3"/>
      <text x="48" y="28" fill="rgb(56,189,248)" fontSize="7">CRYPTO MARKET CAP</text><text x="48" y="42" fill="rgb(45,212,191)" fontSize="7">STABLECOIN SUPPLY</text><text x="48" y="56" fill="rgb(251,191,36)" fontSize="7">RATIO</text><text x="374" y="154" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DEPEG / DOUBLE COUNT / NO DEPLOYMENT</text>
    </>;
    if (type === "FibonacciConfluenceChart") return <>
      {grid}<path d="M 48 162 C 128 142 202 92 286 42" fill="none" stroke="rgb(45,212,191)" strokeWidth="2.4"/><path d="M 286 42 C 330 72 362 104 404 118 S 438 94 462 78" fill="none" stroke="rgb(56,189,248)" strokeWidth="2.2"/>{[[82,"38.2"],[104,"50"],[126,"61.8"]].map(([y,t])=><g key={String(t)}><line x1="88" y1={Number(y)} x2="450" y2={Number(y)} stroke="rgb(251,191,36)" strokeDasharray="4 3"/><text x="82" y={Number(y)+3} fill="rgb(251,191,36)" fontSize="7" textAnchor="end">{t}%</text></g>)}
      <text x="164" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">COMPLETED SWING ANCHORS</text><text x="370" y="148" fill="rgb(56,189,248)" fontSize="7" textAnchor="middle">STRUCTURAL CONFLUENCE + REACTION</text><text x="240" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ANCHOR CHANGE / LEVEL CLUSTER TRAP</text>
    </>;
    if (type === "RenkoTrendChart") return <>
      {grid}{[[68,142],[96,126],[124,110],[152,94],[180,78],[208,94],[236,110],[264,94],[292,78],[320,62],[348,46]].map(([x,y], i) => <rect key={`${x}-${y}`} x={x} y={y} width="24" height="16" fill={i === 5 || i === 6 ? "rgba(248,113,113,.58)" : "rgba(45,212,191,.58)"} stroke={i === 5 || i === 6 ? "rgb(248,113,113)" : "rgb(45,212,191)"} />)}
      <line x1="52" y1="158" x2="390" y2="38" stroke="rgb(251,191,36)" strokeDasharray="5 3"/><rect x="196" y="88" width="72" height="44" fill="rgba(248,113,113,.08)" stroke="rgb(248,113,113)"/>
      <text x="92" y="36" fill="rgb(45,212,191)" fontSize="7">FIXED BRICK SIZE</text><text x="238" y="124" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">REVERSAL BRICKS</text><text x="300" y="184" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">MISSING-TIME / FALSE BRICK TRAP</text>
    </>;
    if (type === "PointFigureBreakoutChart") return <>
      {grid}{[
        [70,146,"X"],[70,130,"X"],[70,114,"X"],[104,114,"O"],[104,130,"O"],[104,146,"O"],[138,146,"X"],[138,130,"X"],[138,114,"X"],[138,98,"X"],[172,98,"O"],[172,114,"O"],[172,130,"O"],[206,130,"X"],[206,114,"X"],[206,98,"X"],[206,82,"X"],[240,82,"O"],[240,98,"O"],[240,114,"O"],[274,114,"X"],[274,98,"X"],[274,82,"X"],[274,66,"X"],[274,50,"X"],
      ].map(([x,y,t]) => <text key={`${x}-${y}-${t}`} x={Number(x)} y={Number(y)} fill={t === "X" ? "rgb(45,212,191)" : "rgb(248,113,113)"} fontSize="13" fontWeight="900" textAnchor="middle">{t}</text>)}
      <line x1="42" y1="78" x2="330" y2="78" stroke="rgb(251,191,36)" strokeDasharray="5 3"/><rect x="252" y="42" width="56" height="50" fill="rgba(45,212,191,.08)" stroke="rgb(45,212,191)"/>
      <text x="86" y="34" fill="rgb(148,163,184)" fontSize="7">BOX SIZE + REVERSAL AMOUNT</text><text x="280" y="36" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">BREAKOUT COLUMN</text><text x="318" y="182" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">FAILED COLUMN TRAP</text>
    </>;
    if (type === "MinerOutflowAuditChart") return <>
      {grid}<rect x="42" y="72" width="96" height="58" rx="5" fill="rgba(251,191,36,.1)" stroke="rgb(251,191,36)"/><text x="90" y="104" fill="rgb(226,232,240)" fontSize="8" textAnchor="middle">MINER ENTITY</text><rect x="350" y="42" width="110" height="42" rx="4" fill="rgba(248,113,113,.08)" stroke="rgb(248,113,113)"/><text x="405" y="67" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">EXCHANGE</text><rect x="350" y="128" width="110" height="42" rx="4" fill="rgba(56,189,248,.08)" stroke="rgb(56,189,248)"/><text x="405" y="153" fill="rgb(226,232,240)" fontSize="7" textAnchor="middle">CUSTODY / INTERNAL</text><path d="M 138 92 C 222 62 278 60 350 62 M 138 112 C 222 144 278 148 350 148" fill="none" stroke="rgb(45,212,191)" strokeWidth="2"/>
      <text x="246" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">RESERVES · PRODUCTION · REVENUE</text><text x="250" y="190" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">DESTINATION / LABEL AUDIT</text>
    </>;
    if (type === "FootprintDeltaChart") return <>
      {grid}{[54,82,110,138,166].map((y,i)=><g key={y}><rect x="80" y={y-10} width="130" height="20" fill="rgba(248,113,113,.18)"/><rect x="210" y={y-10} width="130" height="20" fill="rgba(45,212,191,.18)"/><text x="198" y={y+3} fill="rgb(248,113,113)" fontSize="7" textAnchor="end">{[84,62,110,48,76][i]}</text><text x="222" y={y+3} fill="rgb(45,212,191)" fontSize="7">{[42,94,58,126,70][i]}</text></g>)}<path d="M 360 164 C 390 146 404 116 420 92 S 444 58 462 42" fill="none" stroke="rgb(251,191,36)" strokeWidth="2.2"/>
      <text x="145" y="28" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">BID TRADED</text><text x="276" y="28" fill="rgb(45,212,191)" fontSize="7" textAnchor="middle">ASK TRADED</text><text x="410" y="28" fill="rgb(251,191,36)" fontSize="7" textAnchor="middle">DELTA / STRUCTURE</text><text x="250" y="196" fill="rgb(248,113,113)" fontSize="7" textAnchor="middle">ABSORPTION · EXHAUSTION · FEED LIMIT</text>
    </>;
    return <>{grid}<line x1="44" y1="112" x2="456" y2="112" stroke="rgb(148,163,184)"/><line x1="110" y1="34" x2="110" y2="170" stroke="rgb(56,189,248)"/><line x1="242" y1="34" x2="242" y2="170" stroke="rgb(251,191,36)"/><line x1="374" y1="34" x2="374" y2="170" stroke="rgb(45,212,191)"/>
      {[['PROPOSAL',110],['VOTE / QUORUM',242],['IMPLEMENTATION',374]].map(([t,x])=><text key={String(t)} x={Number(x)} y="24" fill="rgb(226,232,240)" fontSize="7" fontWeight="bold" textAnchor="middle">{t}</text>)}<path d="M 48 150 C 148 144 178 82 242 94 S 330 74 448 52" fill="none" stroke="rgb(217,70,239)" strokeWidth="2"/><text x="454" y="180" fill="rgb(248,113,113)" fontSize="7" textAnchor="end">DELAY / CONCENTRATION TRAP</text></>;
  })();

  return <div className="w-full bg-slate-900 border border-slate-800 rounded-lg p-5 space-y-4 shadow-2xl">
    <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3"><div className="min-w-0 space-y-1"><h4 className="text-xs font-black text-white uppercase tracking-wider break-words">{visual.chartTitle}</h4><p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p></div><div className="shrink-0 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">Mechanism</div></div>
    <div className="w-full overflow-hidden bg-slate-950 rounded-md p-2"><svg viewBox="0 0 500 205" className="w-full h-auto font-sans">{chart}</svg></div>
    <div className="grid gap-2 sm:grid-cols-3">{[...labels.slice(0,3), ...zones.slice(0,3)].map((item,index)=><div key={`${item}-${index}`} className={`min-w-0 border px-2 py-1.5 text-[9px] leading-snug break-words ${index<3?'border-slate-700 text-slate-300':'border-slate-800 text-slate-400'}`}>{item}</div>)}</div>
    <ObservationPanel visual={visual} />
  </div>;
}

// ==========================================================
// SUB-RENDERER A: Annotated Candlestick Chart (General)
// ==========================================================
function AnnotatedCandlestickChart({ visual }: { visual: VisualModel }) {
  const targetZone = { top: 15, bottom: 45, label: visual.targetZone || "Target Zone" };
  const entryZone = { top: 80, bottom: 100, label: visual.entryOrActivationZone || "Entry Trigger Area" };
  const invalidationLine = 135;
  const warningZone = { top: 135, bottom: 165, label: visual.trapZone || "Trap / Sweep Zone" };

  const candles = [
    { x: 30, open: 110, high: 95, low: 120, close: 102 },
    { x: 70, open: 102, high: 82, low: 110, close: 90 },
    { x: 110, open: 90, high: 85, low: 120, close: 115 },
    { x: 150, open: 115, high: 105, low: 145, close: 130 }, // Wicks into warning
    { x: 190, open: 130, high: 95, low: 135, close: 100 },  // Strong rejection
    { x: 230, open: 100, high: 80, low: 110, close: 85 },
    { x: 270, open: 85, high: 65, low: 90, close: 70 },
    { x: 310, open: 70, high: 65, low: 80, close: 75 },
    { x: 350, open: 75, high: 50, low: 80, close: 55 },
    { x: 390, open: 55, high: 30, low: 60, close: 35 },
    { x: 430, open: 35, high: 15, low: 45, close: 25 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose} ({visual.marketConditionShown})
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>Interactive Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Grid lines */}
          {[35, 70, 105, 140].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Target Zone */}
          <rect x="0" y={targetZone.top} width="500" height={targetZone.bottom - targetZone.top} fill="rgba(16, 185, 129, 0.06)" />
          <line x1="0" y1={targetZone.top} x2="500" y2={targetZone.top} stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="0" y1={targetZone.bottom} x2="500" y2={targetZone.bottom} stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="490" y={targetZone.top + 16} fill="rgb(52, 211, 153)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.8">
            {targetZone.label.toUpperCase()}
          </text>

          {/* Entry Zone */}
          <rect x="0" y={entryZone.top} width="500" height={entryZone.bottom - entryZone.top} fill="rgba(20, 184, 166, 0.06)" />
          <line x1="0" y1={entryZone.top} x2="500" y2={entryZone.top} stroke="rgba(20, 184, 166, 0.2)" strokeWidth="0.5" />
          <line x1="0" y1={entryZone.bottom} x2="500" y2={entryZone.bottom} stroke="rgba(20, 184, 166, 0.2)" strokeWidth="0.5" />
          <text x="490" y={entryZone.top + 13} fill="rgb(45, 212, 191)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.8">
            {entryZone.label.toUpperCase()}
          </text>

          {/* Invalidation Level */}
          <line x1="0" y1={invalidationLine} x2="500" y2={invalidationLine} stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="490" y={invalidationLine - 4} fill="rgb(248, 113, 113)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.9">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION LEVEL"}
          </text>

          {/* Warning / Trap Zone */}
          <rect x="0" y={warningZone.top} width="500" height={warningZone.bottom - warningZone.top} fill="rgba(245, 158, 11, 0.03)" />
          <text x="490" y={warningZone.top + 18} fill="rgb(251, 191, 36)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.7">
            {warningZone.label.toUpperCase()}
          </text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={wickColor} strokeWidth="1.2" />
                <rect x={c.x - 5} y={bodyY} width="10" height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2.5 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER B: Position Sizing Calculator
// ==========================================================
function PositionSizingCalculator({ visual }: { visual: VisualModel }) {
  const visualText = JSON.stringify(visual).toLowerCase();
  const isCrypto = visualText.includes("crypto") || visualText.includes("liquidity depth") || visualText.includes("spread percentage");
  const isForex = !isCrypto && (visualText.includes("forex") || visualText.includes("pip"));
  const distanceLabel = isCrypto ? "Invalidation Distance (%)" : isForex ? "Stop Distance (Pips)" : "Invalidation Distance (Points)";
  const outputLabel = isCrypto ? "Relative Crypto Size Units" : isForex ? "Calculated Position Size" : "Relative Size Units";
  const formulaText = isCrypto
    ? "Formula is `(Balance * Risk%) / Invalidation Distance %`. This keeps the practice size tied to crypto volatility and depth."
    : isForex
      ? "Formula is `(Balance * Risk%) / (Stop Pips * $10 per pip)`. This adjusts size to target exact risk parameters."
      : "Formula is `(Balance * Risk%) / Point Distance`. This keeps the practice size tied to the invalidation distance.";
  const [balance, setBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(1);
  const [stopPips, setStopPips] = useState(50);

  const riskAmount = (balance * riskPct) / 100;
  const positionSize = stopPips > 0 ? (riskAmount / (isForex ? stopPips * 10 : stopPips)) : 0;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-extrabold uppercase border border-blue-500/20">
          <Percent className="w-3 h-3" />
          <span>Interactive Calculator</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Input 1 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Account Balance</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <DollarSign className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Input 2 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Max Risk %</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <Percent className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              step="0.1"
              value={riskPct}
              onChange={(e) => setRiskPct(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Input 3 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">{distanceLabel}</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              value={stopPips}
              onChange={(e) => setStopPips(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Output Renders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 border border-slate-850 p-5 rounded-3xl">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Cash Value at Risk</span>
          <p className="text-xl font-mono font-bold text-rose-400">${riskAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="space-y-1 text-center md:text-left border-t md:border-t-0 md:border-l border-slate-850 pt-3.5 md:pt-0 md:pl-5">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">{outputLabel}</span>
          <p className="text-xl font-mono font-bold text-emerald-400">{positionSize.toFixed(2)} {isForex ? "Standard Lots" : "Units"}</p>
        </div>
      </div>

      <div className="bg-slate-950/50 p-4 border border-slate-850 rounded-2xl space-y-2.5">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Math Process: </span>
            {formulaText}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Prevented Error: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER C: Crypto Derivatives Dashboard (Funding/OI)
// ==========================================================
function CryptoDerivativesDashboard({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-extrabold uppercase border border-amber-500/20">
          <ArrowLeftRight className="w-3 h-3" />
          <span>Derivatives Monitor</span>
        </div>
      </div>

      {/* Spot vs Perp Visualization */}
      <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-4 select-none">
        <div className="h-28 relative flex items-end justify-between border-b border-slate-800 pb-1.5">
          {/* Dual Axis Lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-10">
            {[1, 2, 3, 4].map(i => <div key={i} className="border-t border-slate-300 w-full" />)}
          </div>
          
          {/* Plotting spot vs perp mock curves */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
            {/* Spot line (Cyan) */}
            <path d="M 10 90 Q 100 85 200 60 T 390 15" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
            <text x="380" y="30" fill="rgb(45, 212, 191)" fontSize="7" fontWeight="bold">SPOT</text>

            {/* Perp line (Yellow/Amber - deviates and sweeps) */}
            <path d="M 10 90 Q 100 85 200 45 T 390 5" fill="none" stroke="rgb(251, 191, 36)" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="380" y="10" fill="rgb(251, 191, 36)" fontSize="7" fontWeight="bold">PERP (OI BUILD)</text>

            {/* Rejection/liquidation drop */}
            <circle cx="300" cy="40" r="4" fill="red" className="animate-pulse" />
            <line x1="300" y1="40" x2="300" y2="90" stroke="red" strokeWidth="1" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest px-2">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-teal-400" /> Spot price index</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-amber-400" /> Perpetual contract price</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-red-500" /> Liquidation Trigger</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-950 p-3.5 border border-slate-850 rounded-2xl text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Perp Funding Rate</span>
          <p className="text-lg font-mono font-bold text-amber-400">+0.0824% / 8h</p>
          <span className="text-[8px] text-rose-400 font-bold block mt-0.5">HIGH LONG PRESSURE</span>
        </div>
        <div className="bg-slate-950 p-3.5 border border-slate-850 rounded-2xl text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Basis Spread</span>
          <p className="text-lg font-mono font-bold text-teal-400">+$245.50</p>
          <span className="text-[8px] text-slate-400 font-bold block mt-0.5">PERP PREMIUM OVER SPOT</span>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Whale Watch: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Prevented Error: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER D: Portfolio / Allocation Visual
// ==========================================================
function PortfolioAllocationChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const allocations = [
    { label: labels[0] || "Core Allocation", width: 42, color: "bg-cyan-400" },
    { label: labels[1] || "Diversification Check", width: 28, color: "bg-violet-400" },
    { label: labels[2] || "Liquidity Reserve", width: 18, color: "bg-emerald-400" },
    { label: "Review Buffer", width: 12, color: "bg-amber-400" },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <ArrowLeftRight className="w-3 h-3" />
          <span>Allocation Map</span>
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 space-y-4">
        <div className="flex h-9 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          {allocations.map((allocation) => (
            <div
              key={allocation.label}
              className={`${allocation.color} opacity-85 border-r border-slate-950 last:border-r-0`}
              style={{ width: `${allocation.width}%` }}
              title={allocation.label}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allocations.slice(0, 3).map((allocation) => (
            <div key={allocation.label} className="flex items-start gap-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-3">
              <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${allocation.color}`} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-200 leading-snug">{allocation.label}</p>
                <p className="text-[9px] text-slate-500 font-semibold mt-1">Weight band: {allocation.width}% classroom example</p>
              </div>
            </div>
          ))}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-300 leading-snug">{zones[2] || "Concentration Trap"}</p>
            <p className="text-[9px] text-amber-100/70 font-semibold mt-1">{visual.trapZone || visual.mistakePrevented}</p>
          </div>
        </div>
      </div>

      <ObservationPanel visual={visual} />
    </div>
  );
}

// ==========================================================
// SUB-RENDERER D: Gold Macro Real Yield Chart (Gold vs TIPS)
// ==========================================================
function GoldMacroRealYieldChart({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-[9px] font-extrabold uppercase border border-yellow-500/20">
          <TrendingUp className="w-3 h-3" />
          <span>Macro Correlation</span>
        </div>
      </div>

      {/* Gold vs yields overlay */}
      <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl relative select-none">
        <div className="h-28 relative flex items-end justify-between border-b border-slate-800 pb-1.5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
            {/* Real Yields line (White - inverted) */}
            <path d="M 10 15 Q 100 35 200 60 T 390 90" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="15" y="25" fill="rgba(255, 255, 255, 0.6)" fontSize="7" fontWeight="bold">US 10Y REAL YIELD (INVERTED)</text>

            {/* Gold Line (Gold/Yellow - lagging then reacting) */}
            <path d="M 10 20 Q 100 40 200 65 T 390 85" fill="none" stroke="rgb(250, 204, 21)" strokeWidth="1.8" />
            <text x="380" y="80" fill="rgb(250, 204, 21)" fontSize="7" fontWeight="bold" textAnchor="end">XAU/USD (SPOT GOLD)</text>

            {/* Correlation Divergence Area */}
            <path d="M 150 47 L 230 63 L 230 45 L 150 35 Z" fill="rgba(250, 204, 21, 0.08)" />
            <text x="190" y="25" fill="rgb(250, 204, 21)" fontSize="6" fontWeight="bold" textAnchor="middle">CORRELATION ALIGNED</text>
          </svg>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Macro Note: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Rookie Trap: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER E: Forex Pair Strength Meter
// ==========================================================
function ForexPairStrengthMeter({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-extrabold uppercase border border-purple-500/20">
          <TrendingUp className="w-3 h-3" />
          <span>Strength Matrix</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Base Currency Strength */}
        <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-2 text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Base Currency Strength</span>
          <p className="text-2xl font-black text-emerald-400">8.2 / 10</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: "82%" }} />
          </div>
          <span className="text-[8px] text-slate-500 font-extrabold block">BULLISH EXPANSION</span>
        </div>

        {/* Quote Currency Strength */}
        <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-2 text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Quote Currency Strength</span>
          <p className="text-2xl font-black text-rose-400">2.4 / 10</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-rose-400" style={{ width: "24%" }} />
          </div>
          <span className="text-[8px] text-slate-500 font-extrabold block">BEARISH DECAY</span>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Avoid Mistake: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// FALLBACK DEFAULT: Simple Candlestick Chart
// ==========================================================
function DefaultCandlestickChart() {
  const candles = [
    { x: 30, open: 110, high: 95, low: 120, close: 102 },
    { x: 70, open: 102, high: 82, low: 110, close: 90 },
    { x: 110, open: 90, high: 85, low: 120, close: 115 },
    { x: 150, open: 115, high: 105, low: 145, close: 130 },
    { x: 190, open: 130, high: 95, low: 135, close: 100 },
    { x: 230, open: 100, high: 80, low: 110, close: 85 },
  ];

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-2xl p-4 md:p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="space-y-0.5">
          <h4 className="text-[10px] font-black text-[var(--ln-navy-900)] uppercase tracking-wider">Setup Blueprint</h4>
          <p className="text-[9px] text-slate-400 font-semibold">Reference model showing entry and invalidation zones.</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-extrabold uppercase">
          <Info className="w-2.5 h-2.5" />
          <span>Default Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-900 rounded-xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Target Zone */}
          <rect x="0" y="15" width="500" height="30" fill="rgba(16, 185, 129, 0.08)" />
          <text x="490" y="32" fill="rgb(52, 211, 153)" fontSize="7" fontWeight="bold" textAnchor="end">TARGET ZONE</text>
          
          {/* Entry Zone */}
          <rect x="0" y="80" width="500" height="20" fill="rgba(20, 184, 166, 0.08)" />
          <text x="490" y="93" fill="rgb(45, 212, 191)" fontSize="7" fontWeight="bold" textAnchor="end">ENTRY ZONE</text>

          {/* Invalidation line */}
          <line x1="0" y1="135" x2="500" y2="135" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="490" y="131" fill="rgb(248, 113, 113)" fontSize="7" fontWeight="bold" textAnchor="end">INVALIDATION LEVEL</text>

          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(1.5, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.2" opacity="0.6" />
                <rect x={c.x - 5} y={bodyY} width="10" height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER F: MACD Structure Chart
// ==========================================================
function MACDStructureChart({ visual }: { visual: VisualModel }) {
  const macdPoints = [
    { x: 30, macd: -15, signal: -10 },
    { x: 70, macd: -8, signal: -11 },
    { x: 110, macd: 2, signal: -8 },
    { x: 150, macd: 15, signal: -3 },
    { x: 190, macd: 25, signal: 5 },
    { x: 230, macd: 28, signal: 11 },
    { x: 270, macd: 22, signal: 15 },
    { x: 310, macd: 12, signal: 16 },
    { x: 350, macd: 2, signal: 13 },
    { x: 390, macd: -8, signal: 7 },
    { x: 430, macd: -14, signal: -1 },
    { x: 470, macd: -12, signal: -6 },
  ];

  const macdPath = "M " + macdPoints.map(p => `${p.x} ${90 - p.macd * 2}`).join(" L ");
  const signalPath = "M " + macdPoints.map(p => `${p.x} ${90 - p.signal * 2}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[9px] font-extrabold uppercase tracking-widest border border-indigo-500/20">
          <Activity className="w-3 h-3" />
          <span>MACD Structure</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Zero Line */}
          <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <text x="10" y="86" fill="rgba(255, 255, 255, 0.4)" fontSize="6" fontWeight="bold">ZERO LINE</text>

          {/* Histogram Bars */}
          {macdPoints.map((p, i) => {
            const diff = p.macd - p.signal;
            const barHeight = Math.abs(diff) * 2;
            const y = diff >= 0 ? 90 - diff * 2 : 90;
            const isGreen = diff >= 0;
            const fillColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            return (
              <rect
                key={i}
                x={p.x - 3}
                y={y}
                width="6"
                height={Math.max(1, barHeight)}
                fill={fillColor}
                rx="0.5"
              />
            );
          })}

          {/* MACD Line (Cyan) */}
          <path d={macdPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Signal Line (Red/Orange) */}
          <path d={signalPath} fill="none" stroke="rgb(249, 115, 22)" strokeWidth="1.5" strokeDasharray="3 1" strokeLinecap="round" strokeLinejoin="round" />

          {/* Crossover Annotation */}
          <circle cx="110" cy="106" r="5" fill="none" stroke="rgb(251, 191, 36)" strokeWidth="1.5" />
          <text x="110" y="122" fill="rgb(251, 191, 36)" fontSize="6" fontWeight="bold" textAnchor="middle">CROSSOVER</text>

          {/* Histogram Expansion Zone */}
          <rect x="175" y="40" width="30" height="40" fill="rgba(45, 212, 191, 0.08)" rx="2" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="0.5" />
          <text x="190" y="32" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="bold" textAnchor="middle">EXPANSION ZONE</text>

          {/* Target/Invalidation Labels */}
          {visual.invalidationZone && (
            <>
              <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="490" y="146" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
                {visual.invalidationZone.toUpperCase()}
              </text>
            </>
          )}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER G: ADX Strength Chart
// ==========================================================
function ADXStrengthChart({ visual }: { visual: VisualModel }) {
  const adxPoints = [
    { x: 30, val: 12 },
    { x: 70, val: 14 },
    { x: 110, val: 18 },
    { x: 150, val: 24 },
    { x: 190, val: 32 },
    { x: 230, val: 40 },
    { x: 270, val: 45 },
    { x: 310, val: 48 },
    { x: 350, val: 44 },
    { x: 390, val: 38 },
    { x: 430, val: 30 },
    { x: 470, val: 22 },
  ];

  const adxPath = "M " + adxPoints.map(p => `${p.x} ${160 - p.val * 2.5}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-extrabold uppercase tracking-widest border border-teal-500/20">
          <Activity className="w-3 h-3" />
          <span>ADX Strength</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Weak Trend Zone */}
          <rect x="0" y="97.5" width="500" height="82.5" fill="rgba(244, 63, 94, 0.03)" />
          <text x="10" y="165" fill="rgba(244, 63, 94, 0.5)" fontSize="6.5" fontWeight="bold">WEAK TREND ZONE (ADX &lt; 25)</text>

          {/* Strong Trend Zone */}
          <rect x="0" y="0" width="500" height="97.5" fill="rgba(45, 212, 191, 0.03)" />
          <text x="10" y="20" fill="rgba(45, 212, 191, 0.5)" fontSize="6.5" fontWeight="bold">STRONG TREND ZONE (ADX &gt; 25)</text>

          {/* Threshold line */}
          <line x1="0" y1="97.5" x2="500" y2="97.5" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="490" y="94" fill="rgba(255, 255, 255, 0.5)" fontSize="6.5" fontWeight="bold" textAnchor="end">TREND STRENGTH THRESHOLD (25)</text>

          {/* ADX Line */}
          <path d={adxPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Trend Strength Confirmation Marker */}
          <circle cx="190" cy="80" r="5" fill="rgb(45, 212, 191)" />
          <text x="202" y="82" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="black">CONFIRMED TREND STRENGTH</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER H: Moving Average Crossover Chart
// ==========================================================
function MovingAverageCrossoverChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
    { x: 350, open: 74, close: 60, high: 58, low: 78 },
    { x: 390, open: 60, close: 52, high: 50, low: 65 },
    { x: 430, open: 52, close: 40, high: 38, low: 55 },
    { x: 470, open: 40, close: 32, high: 30, low: 45 },
  ];

  const fastMA = [
    { x: 30, y: 122 },
    { x: 70, y: 120 },
    { x: 110, y: 112 },
    { x: 150, y: 100 },
    { x: 190, y: 92 },
    { x: 230, y: 94 },
    { x: 270, y: 88 },
    { x: 310, y: 78 },
    { x: 350, y: 66 },
    { x: 390, y: 55 },
    { x: 430, y: 45 },
    { x: 470, y: 35 },
  ];

  const slowMA = [
    { x: 30, y: 108 },
    { x: 70, y: 106 },
    { x: 110, y: 102 },
    { x: 150, y: 97 },
    { x: 190, y: 92 },
    { x: 230, y: 88 },
    { x: 270, y: 83 },
    { x: 310, y: 77 },
    { x: 350, y: 70 },
    { x: 390, y: 64 },
    { x: 430, y: 58 },
    { x: 470, y: 51 },
  ];

  const fastPath = "M " + fastMA.map(p => `${p.x} ${p.y}`).join(" L ");
  const slowPath = "M " + slowMA.map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>MA Crossover</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Grid lines */}
          {[35, 70, 105, 140].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Invalidation Zone */}
          <rect x="0" y="145" width="500" height="35" fill="rgba(239, 68, 68, 0.05)" />
          <line x1="0" y1="145" x2="500" y2="145" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.8" strokeDasharray="4 2" />
          <text x="490" y="141" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION ZONE"}
          </text>

          {/* False Crossover / whipsaw trap zone */}
          <rect x="205" y="65" width="50" height="55" fill="rgba(251, 191, 36, 0.06)" rx="3" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="230" y="60" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">LAG / WHIPSAW TRAP ZONE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));

            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Fast MA Line */}
          <path d={fastPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Slow MA Line */}
          <path d={slowPath} fill="none" stroke="rgb(129, 140, 248)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Crossover Point Indicator */}
          <circle cx="190" cy="92" r="4" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          <text x="190" y="84" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold" textAnchor="middle">CROSSOVER POINT</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER I: Session Breakout Chart
// ==========================================================
function SessionBreakoutChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 110, close: 114, high: 108, low: 116 },
    { x: 60, open: 114, close: 108, high: 106, low: 118 },
    { x: 90, open: 108, close: 112, high: 105, low: 115 },
    { x: 120, open: 112, close: 118, high: 109, low: 120 },
    { x: 150, open: 118, close: 110, high: 107, low: 121 },
    { x: 180, open: 110, close: 128, high: 108, low: 132 },
    { x: 210, open: 128, close: 135, high: 124, low: 140 },
    { x: 240, open: 135, close: 132, high: 130, low: 138 },
    { x: 270, open: 132, close: 148, high: 130, low: 150 },
    { x: 300, open: 148, close: 155, high: 145, low: 158 },
    { x: 330, open: 155, close: 162, high: 152, low: 165 },
    { x: 360, open: 162, close: 158, high: 155, low: 166 },
    { x: 390, open: 158, close: 170, high: 156, low: 172 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">
          <Activity className="w-3 h-3" />
          <span>Session Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Session Range box */}
          <rect x="15" y="105" width="150" height="18" fill="rgba(56, 189, 248, 0.05)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.8" strokeDasharray="2 2" rx="2" />
          <text x="90" y="100" fill="rgb(56, 189, 248)" fontSize="5.5" fontWeight="black" textAnchor="middle">SESSION RANGE BOUNDARY</text>

          {/* Breakout / Retest Entry Zone */}
          <rect x="225" y="125" width="30" height="15" fill="rgba(45, 212, 191, 0.08)" rx="2" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="0.5" />
          <text x="240" y="120" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold" textAnchor="middle">RETEST ENTRY ZONE</text>

          {/* False Breakout / Trap zone under Asian low */}
          <rect x="165" y="122" width="30" height="12" fill="rgba(245, 158, 11, 0.05)" rx="2" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
          <text x="180" y="142" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">FALSE BREAKOUT SWEEP</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Target / Invalidation labels */}
          <line x1="0" y1="10" x2="500" y2="10" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="490" y="8" fill="rgb(52, 211, 153)" fontSize="6" fontWeight="bold" textAnchor="end">TARGET ZONE</text>

          <line x1="0" y1="76" x2="500" y2="76" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="490" y="72" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION ZONE"}
          </text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER J: Supertrend Volatility Chart
// ==========================================================
function SupertrendVolatilityChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
    { x: 350, open: 74, close: 60, high: 58, low: 78 },
  ];

  // Draw Supertrend line: Bullish (green) below, Bearish (red) above
  const supertrendPoints = [
    { x: 30, y: 135, type: "red" },
    { x: 70, y: 132, type: "red" },
    { x: 110, y: 128, type: "red" },
    { x: 150, y: 122, type: "red" },
    { x: 190, y: 80, type: "green" }, // FLIP occurs here
    { x: 230, y: 78, type: "green" },
    { x: 270, y: 72, type: "green" },
    { x: 310, y: 65, type: "green" },
    { x: 350, y: 55, type: "green" },
  ];

  const redPath = "M " + supertrendPoints.filter(p => p.type === "red").map(p => `${p.x} ${p.y}`).join(" L ");
  const greenPath = "M " + supertrendPoints.filter(p => p.type === "green").map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>Supertrend Volatility</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Volatility Bands (Shaded ATR Area) */}
          <path d="M 30 145 L 150 132 L 150 112 L 30 125 Z" fill="rgba(244, 63, 94, 0.04)" />
          <path d="M 190 90 L 350 65 L 350 45 L 190 70 Z" fill="rgba(45, 212, 191, 0.04)" />
          <text x="300" y="35" fill="rgba(45, 212, 191, 0.5)" fontSize="6" fontWeight="bold">VOLATILITY BAND (ATR ZONE)</text>

          {/* Sideways chop warning zone */}
          <rect x="115" y="70" width="70" height="65" fill="rgba(251, 191, 36, 0.05)" rx="3" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="150" y="65" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">SIDEWAYS CHOP / WARNING ZONE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Supertrend Red (Bearish Stop Line) */}
          <path d={redPath} fill="none" stroke="rgb(239, 68, 68)" strokeWidth="2" />
          {/* Supertrend Green (Bullish Stop Line) */}
          <path d={greenPath} fill="none" stroke="rgb(16, 185, 129)" strokeWidth="2" />

          {/* Flip Dot */}
          <circle cx="190" cy="80" r="4.5" fill="rgb(16, 185, 129)" />
          <circle cx="190" cy="80" r="7" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="1" />
          <text x="190" y="94" fill="rgb(16, 185, 129)" fontSize="6" fontWeight="black" textAnchor="middle">TREND FLIP</text>

          {/* Invalidation Zone */}
          {visual.invalidationZone && (
            <>
              <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="490" y="146" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">{visual.invalidationZone.toUpperCase()}</text>
            </>
          )}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER K: ATR Volatility Chart
// ==========================================================
function ATRVolatilityChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 35, open: 118, close: 121, high: 116, low: 123 },
    { x: 75, open: 121, close: 119, high: 117, low: 123 },
    { x: 115, open: 119, close: 122, high: 118, low: 124 },
    { x: 155, open: 122, close: 120, high: 118, low: 124 },
    { x: 195, open: 120, close: 135, high: 118, low: 138 },
    { x: 235, open: 135, close: 146, high: 132, low: 148 },
    { x: 275, open: 146, close: 141, high: 138, low: 150 },
    { x: 315, open: 141, close: 154, high: 139, low: 157 },
  ];
  const atrPath = "M 25 145 C 80 143 125 141 170 138 C 210 118 250 82 315 58 C 370 52 420 50 475 48";

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[9px] font-extrabold uppercase tracking-widest border border-orange-500/20">
          <Activity className="w-3 h-3" />
          <span>ATR Volatility</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {[45, 90, 135].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          <rect x="24" y="108" width="150" height="34" fill="rgba(56, 189, 248, 0.05)" rx="3" stroke="rgba(56, 189, 248, 0.22)" strokeDasharray="2 1" strokeWidth="0.6" />
          <text x="99" y="102" fill="rgb(56, 189, 248)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[0] || "LOW-ATR COMPRESSION BOX").toUpperCase()}</text>

          <rect x="188" y="46" width="90" height="44" fill="rgba(45, 212, 191, 0.07)" rx="3" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="0.6" />
          <text x="233" y="39" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="black" textAnchor="middle">{(labels[1] || "ATR EXPANSION BREAKOUT CLOSE").toUpperCase()}</text>

          <path d={atrPath} fill="none" stroke="rgb(251, 146, 60)" strokeWidth="2" strokeLinecap="round" />
          <text x="330" y="46" fill="rgb(251, 146, 60)" fontSize="5.7" fontWeight="bold">{(labels[0] || "ATR VOLATILITY READING").toUpperCase()}</text>

          <line x1="0" y1="132" x2="500" y2="132" stroke="rgba(239, 68, 68, 0.35)" strokeWidth="0.8" strokeDasharray="4 3" />
          <text x="490" y="128" fill="rgb(248, 113, 113)" fontSize="5.7" fontWeight="bold" textAnchor="end">{(visual.invalidationZone || zones[2] || "VOLATILITY WARNING ZONE").toUpperCase()}</text>

          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={color} strokeWidth="1" opacity="0.55" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER L: Parabolic SAR Chart
// ==========================================================
function ParabolicSARChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
  ];

  // Dots above when bearish, below when bullish
  const sarDots = [
    { x: 30, y: 110, type: "bear" },
    { x: 70, y: 108, type: "bear" },
    { x: 110, y: 98, type: "bear" },
    { x: 150, y: 88, type: "bear" },
    { x: 190, y: 120, type: "bull" }, // FLIP
    { x: 230, y: 116, type: "bull" },
    { x: 270, y: 110, type: "bull" },
    { x: 310, y: 98, type: "bull" },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[9px] font-extrabold uppercase tracking-widest border border-indigo-500/20">
          <Activity className="w-3 h-3" />
          <span>Parabolic SAR</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Reversal Boundary */}
          <line x1="150" y1="0" x2="150" y2="180" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="145" y="20" fill="rgb(251, 191, 36)" fontSize="6" fontWeight="bold" textAnchor="end">REVERSAL BOUNDARY</text>

          {/* Trend Acceleration explanation */}
          <text x="350" y="40" fill="rgba(255, 255, 255, 0.4)" fontSize="6" fontWeight="bold">SAR DOTS ACCELERATING UNDER PRICE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* SAR Dots */}
          {sarDots.map((d, i) => {
            const isBear = d.type === "bear";
            const color = isBear ? "rgb(239, 68, 68)" : "rgb(16, 185, 129)";
            return (
              <circle key={i} cx={d.x} cy={d.y} r="2.2" fill={color} />
            );
          })}

          {/* Reversal Marker */}
          <path d="M 190 120 L 175 130 L 175 110 Z" fill="rgb(251, 191, 36)" opacity="0.8" />
          <text x="200" y="132" fill="rgb(251, 191, 36)" fontSize="6.5" fontWeight="black">DOT FLIP (BULLISH REVERSAL)</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER L: Ichimoku Cloud Chart
// ==========================================================
function IchimokuCloudChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
  ];

  // Tenkan-sen (Conversion line) and Kijun-sen (Base line)
  const tenkan = [
    { x: 30, y: 122 }, { x: 70, y: 120 }, { x: 110, y: 112 }, { x: 150, y: 100 },
    { x: 190, y: 92 }, { x: 230, y: 94 }, { x: 270, y: 88 }, { x: 310, y: 78 }
  ];

  const kijun = [
    { x: 30, y: 108 }, { x: 70, y: 106 }, { x: 110, y: 102 }, { x: 150, y: 97 },
    { x: 190, y: 92 }, { x: 230, y: 88 }, { x: 270, y: 83 }, { x: 310, y: 77 }
  ];

  const tenkanPath = "M " + tenkan.map(p => `${p.x} ${p.y}`).join(" L ");
  const kijunPath = "M " + kijun.map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-extrabold uppercase tracking-widest border border-purple-500/20">
          <Activity className="w-3 h-3" />
          <span>Ichimoku Cloud</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Shaded Cloud Support/Resistance (Senkou Span Cloud) */}
          <path d="M 30 95 Q 150 90 270 75 Q 390 60 470 50 L 470 75 Q 390 85 270 100 Q 150 115 30 120 Z" fill="rgba(16, 185, 129, 0.05)" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.8" />
          <text x="350" y="85" fill="rgba(16, 185, 129, 0.6)" fontSize="6" fontWeight="bold">SENKOU SPAN CLOUD (SUPPORT)</text>

          {/* False Trend Zone Inside Cloud */}
          <rect x="150" y="80" width="70" height="35" fill="rgba(245, 158, 11, 0.05)" rx="3" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="185" y="75" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">FALSE TREND ZONE (INSIDE CLOUD)</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Tenkan-sen (Cyan) */}
          <path d={tenkanPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          {/* Kijun-sen (Indigo/Blue) */}
          <path d={kijunPath} fill="none" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />

          <text x="30" y="145" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">TENKAN-SEN (CONVERSION LINE)</text>
          <text x="30" y="155" fill="rgb(99, 102, 241)" fontSize="5.5" fontWeight="bold">KIJUN-SEN (BASE LINE)</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER M: Heikin-Ashi Trend Chart
// ==========================================================
function HeikinAshiTrendChart({ visual }: { visual: VisualModel }) {
  // Smoothed Heikin-Ashi candles: strong trend candles have flat bottoms (bullish) or flat tops (bearish)
  const candles = [
    { x: 30, open: 120, close: 110, high: 108, low: 120, isBull: false }, // Flat top
    { x: 70, open: 110, close: 100, high: 98, low: 110, isBull: false },  // Flat top
    { x: 110, open: 100, close: 90, high: 88, low: 100, isBull: false },  // Flat top
    { x: 150, open: 90, close: 95, high: 88, low: 97, isBull: true },
    { x: 190, open: 93, close: 105, high: 107, low: 93, isBull: true },   // Flat bottom
    { x: 230, open: 105, close: 118, high: 120, low: 105, isBull: true }, // Flat bottom
    { x: 270, open: 118, close: 130, high: 132, low: 118, isBull: true }, // Flat bottom
    { x: 310, open: 130, close: 142, high: 145, low: 130, isBull: true }, // Flat bottom
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-extrabold uppercase tracking-widest border border-teal-500/20">
          <Activity className="w-3 h-3" />
          <span>Heikin-Ashi Smoothing</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Wick reduction explanation */}
          <text x="350" y="30" fill="rgba(45, 212, 191, 0.6)" fontSize="6" fontWeight="bold">FLAT BOTTOMS = STRONG BULLISH TREND</text>
          <text x="350" y="42" fill="rgba(248, 113, 113, 0.6)" fontSize="6" fontWeight="bold">FLAT TOPS = STRONG BEARISH TREND</text>

          {/* Trend continuation signals */}
          <path d="M 230 135 L 245 135 L 237.5 145 Z" fill="rgb(45, 212, 191)" />
          <text x="250" y="142" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">TREND CONTINUATION MARKER</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const color = c.isBull ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.2" />
                <rect x={c.x - 4} y={bodyY} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER N: Band Strategy Chart (Bollinger / Keltner)
// ==========================================================
function BandStrategyChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 34, open: 106, close: 108, high: 101, low: 112 },
    { x: 72, open: 108, close: 105, high: 102, low: 111 },
    { x: 110, open: 105, close: 107, high: 101, low: 110 },
    { x: 148, open: 107, close: 106, high: 102, low: 111 },
    { x: 186, open: 106, close: 115, high: 104, low: 118 },
    { x: 224, open: 115, close: 128, high: 112, low: 132 },
    { x: 262, open: 128, close: 121, high: 117, low: 135 },
    { x: 300, open: 121, close: 130, high: 118, low: 134 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-[9px] font-extrabold uppercase tracking-widest border border-sky-500/20">
          <Activity className="w-3 h-3" />
          <span>Band Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {[42, 82, 122, 162].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          <path d="M 20 70 C 95 76 155 66 220 55 S 340 42 480 34" fill="none" stroke="rgb(56, 189, 248)" strokeWidth="1.4" strokeDasharray="4 2" />
          <path d="M 20 112 C 95 108 155 111 220 104 S 340 92 480 78" fill="none" stroke="rgb(148, 163, 184)" strokeWidth="1.1" />
          <path d="M 20 145 C 95 138 155 145 220 138 S 340 128 480 116" fill="none" stroke="rgb(56, 189, 248)" strokeWidth="1.4" strokeDasharray="4 2" />
          <path d="M 20 70 C 95 76 155 66 220 55 S 340 42 480 34 L 480 116 C 340 128 285 132 220 138 S 95 138 20 145 Z" fill="rgba(56, 189, 248, 0.035)" />

          <rect x="72" y="76" width="102" height="46" rx="4" fill="rgba(148, 163, 184, 0.06)" stroke="rgba(148, 163, 184, 0.18)" strokeWidth="0.6" />
          <text x="123" y="70" fill="rgb(148, 163, 184)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[0] || "BAND COMPRESSION AREA").toUpperCase()}</text>

          <rect x="214" y="42" width="80" height="38" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.24)" strokeWidth="0.7" />
          <text x="254" y="36" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="black" textAnchor="middle">{(labels[1] || "BAND ACTIVATION CLOSE").toUpperCase()}</text>

          <rect x="250" y="83" width="74" height="36" rx="4" fill="rgba(251, 191, 36, 0.06)" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="0.6" strokeDasharray="2 1" />
          <text x="287" y="129" fill="rgb(251, 191, 36)" fontSize="5.4" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED BAND MOVE").toUpperCase()}</text>

          <text x="486" y="46" fill="rgb(56, 189, 248)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[0] || "OUTER BAND").toUpperCase()}</text>
          <text x="486" y="92" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[1] || "MIDLINE / MEAN").toUpperCase()}</text>

          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.55)" : "rgba(248, 113, 113, 0.55)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));
            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER O: RSI Mean Reversion Chart
// ==========================================================
function RSIMeanReversionChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-[9px] font-extrabold uppercase tracking-widest border border-fuchsia-500/20">
          <Activity className="w-3 h-3" />
          <span>RSI Reversion</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="126" fill="rgba(15, 23, 42, 0.7)" />
          <path d="M 28 82 C 70 76 104 68 142 56 S 214 42 252 34 S 330 45 388 66 S 440 74 474 62" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.6" />
          <line x1="0" y1="86" x2="500" y2="86" stroke="rgba(148, 163, 184, 0.26)" strokeWidth="0.7" strokeDasharray="3 3" />
          <text x="486" y="82" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">PRICE MEAN</text>

          <rect x="190" y="22" width="84" height="34" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.24)" strokeWidth="0.6" />
          <text x="232" y="18" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[1] || "PRICE STRETCH").toUpperCase()}</text>
          <path d="M 252 34 C 272 58 292 74 320 86" fill="none" stroke="rgb(248, 113, 113)" strokeWidth="1.2" strokeDasharray="4 2" />
          <text x="324" y="100" fill="rgb(248, 113, 113)" fontSize="5.6" fontWeight="bold">{(zones[2] || "FAILED REVERSION TRAP").toUpperCase()}</text>

          <rect x="0" y="138" width="500" height="62" fill="rgba(2, 6, 23, 0.95)" />
          <line x1="0" y1="152" x2="500" y2="152" stroke="rgba(248, 113, 113, 0.45)" strokeDasharray="3 2" />
          <line x1="0" y1="184" x2="500" y2="184" stroke="rgba(45, 212, 191, 0.45)" strokeDasharray="3 2" />
          <text x="10" y="148" fill="rgb(248, 113, 113)" fontSize="5.6" fontWeight="bold">RSI 70</text>
          <text x="10" y="196" fill="rgb(45, 212, 191)" fontSize="5.6" fontWeight="bold">RSI 30</text>
          <path d="M 28 176 C 82 170 130 156 172 150 S 238 143 266 158 S 322 178 384 184 S 438 174 474 166" fill="none" stroke="rgb(217, 70, 239)" strokeWidth="1.6" />
          <circle cx="238" cy="143" r="4" fill="rgb(251, 191, 36)" />
          <text x="248" y="141" fill="rgb(251, 191, 36)" fontSize="5.6" fontWeight="bold">{(labels[0] || "RSI EXTREME").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER P: Statistical Mean Reversion Chart
// ==========================================================
function StatisticalMeanReversionChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <Activity className="w-3 h-3" />
          <span>Stat Reversion</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="210" fill="rgba(2, 6, 23, 0.95)" />
          {[38, 72, 106, 140, 174].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.55" strokeDasharray="3 3" />
          ))}

          <line x1="18" y1="106" x2="482" y2="106" stroke="rgb(148, 163, 184)" strokeWidth="1" />
          <line x1="18" y1="58" x2="482" y2="58" stroke="rgba(248, 113, 113, 0.5)" strokeWidth="0.9" strokeDasharray="5 3" />
          <line x1="18" y1="154" x2="482" y2="154" stroke="rgba(45, 212, 191, 0.5)" strokeWidth="0.9" strokeDasharray="5 3" />
          <text x="486" y="102" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[1] || "MEAN BASELINE").toUpperCase()}</text>

          <path d="M 28 104 C 72 98 112 86 150 62 S 228 38 264 74 S 314 142 356 156 S 422 132 472 106" fill="none" stroke="rgb(34, 211, 238)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="250" cy="66" r="5" fill="rgb(248, 113, 113)" />
          <circle cx="356" cy="156" r="5" fill="rgb(45, 212, 191)" />

          <rect x="206" y="34" width="92" height="52" rx="4" fill="rgba(248, 113, 113, 0.08)" stroke="rgba(248, 113, 113, 0.25)" />
          <text x="252" y="28" fill="rgb(248, 113, 113)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "STATISTICAL STRETCH ZONE").toUpperCase()}</text>

          <path d="M 264 74 C 296 92 328 103 364 106" fill="none" stroke="rgb(251, 191, 36)" strokeWidth="1.2" strokeDasharray="4 2" />
          <text x="366" y="120" fill="rgb(251, 191, 36)" fontSize="5.7" fontWeight="bold">{(zones[1] || "MEAN REVERSION PATH").toUpperCase()}</text>

          <rect x="334" y="132" width="78" height="38" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2 2" />
          <text x="374" y="184" fill="rgb(251, 191, 36)" fontSize="5.4" fontWeight="bold" textAnchor="middle">{(zones[2] || "CORRELATION BREAK TRAP").toUpperCase()}</text>

          <text x="30" y="44" fill="rgb(34, 211, 238)" fontSize="5.8" fontWeight="bold">{(labels[0] || "Z-SCORE / SPREAD READING").toUpperCase()}</text>
          <text x="30" y="190" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold">{(labels[2] || "LIQUIDITY DEPTH CHECK").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER Q: Momentum Study Chart
// ==========================================================
function MomentumStudyChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">
          <TrendingUp className="w-3 h-3" />
          <span>Momentum</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="210" fill="rgba(2, 6, 23, 0.95)" />
          {[45, 90, 135, 180].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.55" strokeDasharray="3 3" />
          ))}

          <path d="M 26 142 C 72 136 110 126 152 112 S 226 78 274 62 S 366 52 474 42" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 26 170 C 88 166 142 156 196 136 S 276 92 334 86 S 414 104 474 118" fill="none" stroke="rgb(167, 139, 250)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="18" y1="132" x2="482" y2="132" stroke="rgba(148, 163, 184, 0.35)" strokeDasharray="5 3" />
          <text x="486" y="128" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[0] || "MOMENTUM BASELINE").toUpperCase()}</text>

          <rect x="214" y="56" width="120" height="42" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.26)" />
          <text x="274" y="50" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "MOMENTUM ACCEPTANCE AREA").toUpperCase()}</text>

          <rect x="346" y="92" width="86" height="44" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2 2" />
          <text x="389" y="148" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[1] || "FAILED MOMENTUM ROLLOVER").toUpperCase()}</text>

          <circle cx="274" cy="62" r="4" fill="rgb(45, 212, 191)" />
          <circle cx="390" cy="104" r="4" fill="rgb(251, 191, 36)" />
          <text x="30" y="34" fill="rgb(167, 139, 250)" fontSize="5.8" fontWeight="bold">{(labels[1] || "PRICE CONTINUATION PATH").toUpperCase()}</text>
          <text x="30" y="194" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold">{(labels[2] || "LIQUIDITY / FAILURE CHECK").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER R: Volume Confirmation Chart
// ==========================================================
function VolumeConfirmationChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const volumes = [26, 32, 28, 34, 62, 86, 52, 38, 30];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-extrabold uppercase tracking-widest border border-teal-500/20">
          <Activity className="w-3 h-3" />
          <span>Volume</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 220" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="220" fill="rgba(2, 6, 23, 0.95)" />
          <line x1="20" y1="92" x2="482" y2="92" stroke="rgba(148, 163, 184, 0.35)" strokeDasharray="4 3" />
          <text x="486" y="88" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[0] || "BREAKOUT LEVEL").toUpperCase()}</text>

          <path d="M 28 128 C 84 122 132 116 178 106 S 242 78 296 72 S 386 82 472 68" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" />
          <rect x="214" y="58" width="96" height="50" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.26)" />
          <text x="262" y="52" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "VOLUME BACKED BREAKOUT AREA").toUpperCase()}</text>

          <rect x="326" y="80" width="86" height="42" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2 2" />
          <text x="369" y="134" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[1] || "FALSE VOLUME SPIKE TRAP").toUpperCase()}</text>

          <line x1="0" y1="164" x2="500" y2="164" stroke="rgba(148, 163, 184, 0.2)" />
          {volumes.map((v, index) => {
            const x = 42 + index * 46;
            const height = v * 0.55;
            const isExpansion = index === 5;
            return (
              <rect
                key={index}
                x={x}
                y={204 - height}
                width="18"
                height={height}
                rx="2"
                fill={isExpansion ? "rgb(45, 212, 191)" : "rgba(148, 163, 184, 0.55)"}
              />
            );
          })}
          <text x="292" y="170" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold">{(labels[1] || "RELATIVE VOLUME EXPANSION").toUpperCase()}</text>
          <text x="36" y="214" fill="rgb(148, 163, 184)" fontSize="5.6" fontWeight="bold">{(labels[2] || "PARTICIPATION CHECK").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER S: Grid Breakout Chart
// ==========================================================
function GridBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-extrabold uppercase tracking-widest border border-amber-500/20">
          <Activity className="w-3 h-3" />
          <span>Grid Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 190" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="190" fill="rgba(2, 6, 23, 0.95)" />
          {[48, 70, 92, 114, 136].map((y, index) => (
            <g key={y}>
              <line x1="24" y1={y} x2="476" y2={y} stroke={index === 2 ? "rgb(251, 191, 36)" : "rgba(148, 163, 184, 0.32)"} strokeWidth={index === 2 ? "1.2" : "0.8"} strokeDasharray={index === 2 ? "0" : "5 3"} />
              <text x="486" y={y - 3} fill="rgb(148, 163, 184)" fontSize="5.4" fontWeight="bold" textAnchor="end">GRID</text>
            </g>
          ))}
          <rect x="72" y="48" width="126" height="88" rx="4" fill="rgba(148, 163, 184, 0.05)" stroke="rgba(148, 163, 184, 0.2)" />
          <text x="135" y="42" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "GRID PLANNING CORRIDOR").toUpperCase()}</text>

          <path d="M 34 122 C 90 118 130 102 178 94 S 246 86 286 62 S 356 44 466 36" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" />
          <rect x="268" y="36" width="98" height="42" rx="4" fill="rgba(45, 212, 191, 0.08)" stroke="rgba(45, 212, 191, 0.26)" />
          <text x="317" y="30" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[1] || "BREAKOUT ACTIVATION BAND").toUpperCase()}</text>

          <rect x="344" y="82" width="88" height="42" rx="4" fill="rgba(248, 113, 113, 0.07)" stroke="rgba(248, 113, 113, 0.25)" strokeDasharray="2 2" />
          <text x="388" y="138" fill="rgb(248, 113, 113)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(labels[2] || "STACKED EXPOSURE WARNING").toUpperCase()}</text>
          <text x="34" y="172" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold">{(labels[0] || "FOREX GRID OBSERVATION LEVELS").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER T: News Breakout Chart
// ==========================================================
function NewsBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[9px] font-extrabold uppercase tracking-widest border border-rose-500/20">
          <Activity className="w-3 h-3" />
          <span>News Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 190" className="w-full h-auto font-sans">
          <rect x="0" y="0" width="500" height="190" fill="rgba(2, 6, 23, 0.95)" />
          <rect x="72" y="78" width="128" height="42" rx="4" fill="rgba(148, 163, 184, 0.06)" stroke="rgba(148, 163, 184, 0.22)" />
          <line x1="72" y1="78" x2="200" y2="78" stroke="rgb(45, 212, 191)" strokeWidth="1" />
          <line x1="72" y1="120" x2="200" y2="120" stroke="rgb(248, 113, 113)" strokeWidth="1" />
          <text x="136" y="72" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[0] || "PRE-RELEASE RANGE HIGH").toUpperCase()}</text>
          <text x="136" y="134" fill="rgb(248, 113, 113)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "PRE-RELEASE RANGE LOW").toUpperCase()}</text>

          <rect x="220" y="30" width="46" height="138" rx="5" fill="rgba(244, 63, 94, 0.08)" stroke="rgba(244, 63, 94, 0.26)" />
          <text x="243" y="24" fill="rgb(251, 113, 133)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[0] || "ECONOMIC CALENDAR EVENT WINDOW").toUpperCase()}</text>

          <path d="M 30 104 C 84 102 132 98 188 100 S 230 64 252 46 S 306 142 338 74 S 394 54 470 42" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" />
          <circle cx="254" cy="46" r="5" fill="rgb(45, 212, 191)" />
          <text x="302" y="36" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold">{(labels[2] || "POST-RELEASE BREAKOUT CLOSE").toUpperCase()}</text>

          <rect x="282" y="102" width="96" height="44" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2 2" />
          <text x="330" y="158" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[2] || "NEWS WHIPSAW TRAP AREA").toUpperCase()}</text>
          <text x="438" y="178" fill="rgb(251, 113, 133)" fontSize="5.7" fontWeight="bold" textAnchor="end">{(zones[1] || "SPREAD WIDENING WARNING ZONE").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER U: Pivot Breakout Chart
// ==========================================================
function PivotBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-extrabold uppercase tracking-widest border border-amber-500/20">
          <Activity className="w-3 h-3" />
          <span>Pivot Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          <line x1="0" y1="92" x2="500" y2="92" stroke="rgb(251, 191, 36)" strokeWidth="1.2" />
          <line x1="0" y1="58" x2="500" y2="58" stroke="rgba(45, 212, 191, 0.45)" strokeDasharray="4 2" />
          <line x1="0" y1="126" x2="500" y2="126" stroke="rgba(248, 113, 113, 0.45)" strokeDasharray="4 2" />
          <text x="486" y="88" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[0] || "CENTRAL PIVOT").toUpperCase()}</text>
          <text x="486" y="54" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold" textAnchor="end">R1</text>
          <text x="486" y="138" fill="rgb(248, 113, 113)" fontSize="5.8" fontWeight="bold" textAnchor="end">S1</text>

          <rect x="92" y="78" width="100" height="28" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.24)" />
          <text x="142" y="73" fill="rgb(251, 191, 36)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[0] || "PIVOT COMPRESSION AREA").toUpperCase()}</text>
          <rect x="220" y="48" width="82" height="34" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.24)" />
          <text x="261" y="42" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "PIVOT BREAKOUT CLOSE").toUpperCase()}</text>
          <path d="M 296 58 C 326 78 354 92 388 96" fill="none" stroke="rgb(251, 191, 36)" strokeDasharray="4 2" />
          <text x="386" y="110" fill="rgb(251, 191, 36)" fontSize="5.6" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED BREAK THROUGH PIVOT").toUpperCase()}</text>

          {[42, 82, 122, 162, 202, 242, 282, 322].map((x, i) => {
            const y = [102, 98, 96, 88, 78, 62, 68, 54][i];
            const color = i < 4 ? "rgb(148, 163, 184)" : i === 6 ? "rgb(248, 113, 113)" : "rgb(45, 212, 191)";
            return <rect key={x} x={x - 4} y={y - 9} width="8" height="18" fill={color} rx="0.5" opacity="0.8" />;
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER Q: Gap Breakout Chart
// ==========================================================
function GapBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[9px] font-extrabold uppercase tracking-widest border border-rose-500/20">
          <Activity className="w-3 h-3" />
          <span>Gap Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          <rect x="142" y="72" width="74" height="38" rx="4" fill="rgba(251, 191, 36, 0.07)" stroke="rgba(251, 191, 36, 0.24)" strokeDasharray="3 2" />
          <text x="179" y="66" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "THIN-LIQUIDITY GAP ZONE").toUpperCase()}</text>
          <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(148, 163, 184, 0.25)" strokeDasharray="3 3" />
          <line x1="0" y1="72" x2="500" y2="72" stroke="rgba(45, 212, 191, 0.28)" strokeDasharray="3 3" />

          {[38, 76, 114].map((x, i) => (
            <rect key={x} x={x - 5} y={[105, 99, 102][i]} width="10" height="18" fill="rgb(148, 163, 184)" rx="0.5" opacity="0.75" />
          ))}
          {[230, 268, 306, 344].map((x, i) => (
            <rect key={x} x={x - 5} y={[62, 52, 58, 46][i]} width="10" height="22" fill="rgb(45, 212, 191)" rx="0.5" opacity="0.85" />
          ))}
          <text x="288" y="38" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="black" textAnchor="middle">{(labels[1] || "BREAKOUT CLOSE BEYOND GAP").toUpperCase()}</text>

          <path d="M 344 60 C 372 82 396 98 428 110" fill="none" stroke="rgb(248, 113, 113)" strokeDasharray="4 2" />
          <text x="430" y="124" fill="rgb(248, 113, 113)" fontSize="5.6" fontWeight="bold" textAnchor="middle">{(zones[2] || "GAP REFILL TRAP").toUpperCase()}</text>
          <text x="486" y="150" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(labels[2] || "LIQUIDITY DEPTH WARNING").toUpperCase()}</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER R: Channel Breakout Chart
// ==========================================================
function ChannelBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 35, open: 112, close: 116, high: 108, low: 120 },
    { x: 75, open: 116, close: 111, high: 109, low: 122 },
    { x: 115, open: 111, close: 118, high: 107, low: 121 },
    { x: 155, open: 118, close: 113, high: 110, low: 125 },
    { x: 195, open: 113, close: 121, high: 109, low: 124 },
    { x: 235, open: 121, close: 132, high: 118, low: 135 },
    { x: 275, open: 132, close: 127, high: 124, low: 140 },
    { x: 315, open: 127, close: 142, high: 125, low: 145 },
    { x: 355, open: 142, close: 151, high: 139, low: 154 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <Activity className="w-3 h-3" />
          <span>Channel Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {[40, 80, 120, 160].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          <path d="M 20 105 C 95 94 160 88 230 78" fill="none" stroke="rgb(56, 189, 248)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M 20 142 C 95 132 160 127 230 116" fill="none" stroke="rgb(56, 189, 248)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M 20 105 C 95 94 160 88 230 78 L 230 116 C 160 127 95 132 20 142 Z" fill="rgba(56, 189, 248, 0.04)" />
          <text x="24" y="96" fill="rgb(56, 189, 248)" fontSize="5.8" fontWeight="bold">{(labels[0] || "UPPER CHANNEL BOUNDARY").toUpperCase()}</text>
          <text x="24" y="154" fill="rgb(56, 189, 248)" fontSize="5.8" fontWeight="bold">{(labels[1] || "LOWER CHANNEL BOUNDARY").toUpperCase()}</text>

          <rect x="248" y="62" width="74" height="26" fill="rgba(45, 212, 191, 0.07)" rx="3" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="0.6" />
          <text x="285" y="56" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="black" textAnchor="middle">{(labels[2] || "BREAKOUT CLOSE").toUpperCase()}</text>

          <rect x="218" y="82" width="54" height="34" fill="rgba(251, 191, 36, 0.06)" rx="3" stroke="rgba(251, 191, 36, 0.24)" strokeDasharray="2 1" strokeWidth="0.6" />
          <text x="245" y="126" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED BREAKOUT BACK INSIDE CHANNEL").toUpperCase()}</text>

          <line x1="0" y1="116" x2="500" y2="116" stroke="rgba(239, 68, 68, 0.32)" strokeWidth="0.8" strokeDasharray="4 3" />
          <text x="490" y="112" fill="rgb(248, 113, 113)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(visual.invalidationZone || "INVALIDATION BACK INSIDE CHANNEL").toUpperCase()}</text>

          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.55)" : "rgba(248, 113, 113, 0.55)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER S: Trendline Break and Retest Chart
// ==========================================================
function TrendlineBreakRetestChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 42, open: 125, close: 118, high: 113, low: 129 },
    { x: 82, open: 118, close: 121, high: 115, low: 126 },
    { x: 122, open: 121, close: 112, high: 108, low: 124 },
    { x: 162, open: 112, close: 116, high: 110, low: 121 },
    { x: 202, open: 116, close: 104, high: 100, low: 119 },
    { x: 242, open: 104, close: 93, high: 91, low: 108 },
    { x: 282, open: 93, close: 101, high: 89, low: 105 },
    { x: 322, open: 101, close: 86, high: 83, low: 104 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-extrabold uppercase tracking-widest border border-amber-500/20">
          <Activity className="w-3 h-3" />
          <span>Trendline Retest</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 190" className="w-full h-auto font-sans">
          {[40, 80, 120, 160].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}
          <line x1="26" y1="70" x2="310" y2="116" stroke="rgb(251, 191, 36)" strokeWidth="1.7" strokeDasharray="5 2" />
          <text x="158" y="62" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[0] || "TRENDLINE TOUCHES").toUpperCase()}</text>

          <rect x="226" y="104" width="82" height="34" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="0.7" />
          <text x="267" y="100" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="black" textAnchor="middle">{(labels[1] || "BREAK CLOSE").toUpperCase()}</text>

          <rect x="272" y="86" width="72" height="35" rx="4" fill="rgba(251, 191, 36, 0.06)" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2 1" strokeWidth="0.7" />
          <text x="308" y="82" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[0] || "RETEST AREA").toUpperCase()}</text>
          <text x="382" y="132" fill="rgb(248, 113, 113)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED ACCEPTANCE BACK THROUGH TRENDLINE").toUpperCase()}</text>

          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 190 - c.close;
            const openY = 190 - c.open;
            const highY = 190 - c.high;
            const lowY = 190 - c.low;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.55)" : "rgba(248, 113, 113, 0.55)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));
            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <ObservationPanel visual={visual} />
    </div>
  );
}

function InsideBarBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 76, open: 116, close: 78, high: 66, low: 132, width: 18 },
    { x: 126, open: 101, close: 91, high: 84, low: 110, width: 12 },
    { x: 166, open: 96, close: 103, high: 88, low: 108, width: 12 },
    { x: 230, open: 88, close: 58, high: 48, low: 96, width: 15 },
    { x: 280, open: 62, close: 72, high: 52, low: 82, width: 13 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-[9px] font-extrabold uppercase tracking-widest border border-amber-500/20">
          Mother Bar
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 205" className="w-full h-auto font-sans">
          {[48, 88, 128, 168].map(y => <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.55" strokeDasharray="3 3" />)}
          <rect x="50" y="66" width="145" height="66" rx="5" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.38)" strokeDasharray="4 2" />
          <text x="122" y="58" fill="rgb(251,191,36)" fontSize="5.9" fontWeight="bold" textAnchor="middle">{(labels[0] || "MOTHER-BAR HIGH / LOW").toUpperCase()}</text>
          <text x="145" y="150" fill="rgb(148,163,184)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "MOTHER-BAR RANGE BOX").toUpperCase()}</text>
          <rect x="110" y="82" width="76" height="34" rx="4" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.3)" />
          <text x="148" y="78" fill="rgb(56,189,248)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "INSIDE CANDLE COMPRESSION").toUpperCase()}</text>
          <rect x="210" y="40" width="92" height="54" rx="5" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.3)" />
          <text x="256" y="34" fill="rgb(45,212,191)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[1] || "BREAKOUT CLOSE AREA").toUpperCase()}</text>
          <path d="M 298 70 C 332 92 356 112 390 124" fill="none" stroke="rgb(248,113,113)" strokeWidth="1.3" strokeDasharray="4 2" />
          <text x="390" y="142" fill="rgb(248,113,113)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED BREAK BACK INSIDE").toUpperCase()}</text>
          <text x="476" y="190" fill="rgb(148,163,184)" fontSize="5.7" fontWeight="bold" textAnchor="end">{(labels[2] || "DISTANCE CHECK").toUpperCase()}</text>
          {candles.map((c, index) => {
            const rising = c.close < c.open;
            const color = rising ? "rgb(45,212,191)" : "rgb(248,113,113)";
            return (
              <g key={index}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.2" opacity="0.7" />
                <rect x={c.x - c.width / 2} y={Math.min(c.open, c.close)} width={c.width} height={Math.max(3, Math.abs(c.close - c.open))} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>
      <ObservationPanel visual={visual} />
    </div>
  );
}

function TrendlineBounceChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">Trendline Reaction</div>
      </div>
      <div className="relative w-full overflow-hidden bg-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 205" className="w-full h-auto font-sans">
          {[48, 88, 128, 168].map(y => <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.55" strokeDasharray="3 3" />)}
          <line x1="38" y1="164" x2="414" y2="58" stroke="rgb(56,189,248)" strokeWidth="2" />
          <text x="176" y="112" fill="rgb(56,189,248)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[0] || "TRENDLINE WITH PRIOR TOUCHES").toUpperCase()}</text>
          {[{x:92,y:149},{x:188,y:122},{x:286,y:95}].map(point => <circle key={point.x} cx={point.x} cy={point.y} r="5" fill="rgb(15,23,42)" stroke="rgb(45,212,191)" strokeWidth="1.5" />)}
          <path d="M 42 118 C 84 96 120 156 158 116 S 230 140 286 95 S 342 54 382 72" fill="none" stroke="rgb(45,212,191)" strokeWidth="2" />
          <rect x="264" y="76" width="70" height="38" rx="5" fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.28)" />
          <text x="299" y="70" fill="rgb(45,212,191)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "REACTION CANDLE").toUpperCase()}</text>
          <line x1="18" y1="116" x2="482" y2="116" stroke="rgba(251,191,36,0.45)" strokeDasharray="5 3" />
          <text x="478" y="110" fill="rgb(251,191,36)" fontSize="5.6" fontWeight="bold" textAnchor="end">{(zones[1] || "HORIZONTAL STRUCTURE AGREEMENT").toUpperCase()}</text>
          <rect x="352" y="116" width="84" height="44" rx="5" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.28)" strokeDasharray="3 2" />
          <text x="394" y="174" fill="rgb(248,113,113)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED TRENDLINE HOLD").toUpperCase()}</text>
          <text x="28" y="192" fill="rgb(148,163,184)" fontSize="5.7" fontWeight="bold">{(labels[2] || "FOREX DISTANCE CHECK").toUpperCase()}</text>
        </svg>
      </div>
      <ObservationPanel visual={visual} />
    </div>
  );
}

function MarketRegimeChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const branches = [
    { y: 52, label: labels[0] || "Bull Regime Branch", color: "rgb(45,212,191)", path: "M 62 70 C 128 72 176 54 232 42 C 292 30 344 34 430 22" },
    { y: 102, label: labels[2] || "Range / Transition Branch", color: "rgb(251,191,36)", path: "M 62 104 C 128 86 178 122 232 102 C 292 82 348 118 430 98" },
    { y: 154, label: labels[1] || "Bear Regime Branch", color: "rgb(248,113,113)", path: "M 62 134 C 126 128 174 144 232 154 C 294 166 350 158 430 180" },
  ];
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">Regime Branches</div>
      </div>
      <div className="relative w-full overflow-hidden bg-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 220" className="w-full h-auto font-sans">
          {branches.map(branch => (
            <g key={branch.label}>
              <path d={branch.path} fill="none" stroke={branch.color} strokeWidth="2" />
              <text x="468" y={branch.y} fill={branch.color} fontSize="5.8" fontWeight="bold" textAnchor="end">{branch.label.toUpperCase()}</text>
            </g>
          ))}
          <rect x="34" y="76" width="106" height="68" rx="6" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.28)" />
          <text x="87" y="68" fill="rgb(56,189,248)" fontSize="5.8" fontWeight="bold" textAnchor="middle">CLASSIFY CONDITION</text>
          <text x="87" y="101" fill="rgb(226,232,240)" fontSize="5.5" fontWeight="bold" textAnchor="middle">STRUCTURE</text>
          <text x="87" y="116" fill="rgb(226,232,240)" fontSize="5.5" fontWeight="bold" textAnchor="middle">VOLATILITY</text>
          <text x="87" y="131" fill="rgb(226,232,240)" fontSize="5.5" fontWeight="bold" textAnchor="middle">DEPTH</text>
          <rect x="212" y="34" width="104" height="42" rx="5" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.26)" />
          <text x="264" y="28" fill="rgb(45,212,191)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[0] || "SETUP ACCEPTED AREA").toUpperCase()}</text>
          <rect x="212" y="118" width="104" height="42" rx="5" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.26)" />
          <text x="264" y="176" fill="rgb(251,191,36)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(zones[1] || "REDUCED / STAND-ASIDE AREA").toUpperCase()}</text>
          <text x="468" y="208" fill="rgb(248,113,113)" fontSize="5.7" fontWeight="bold" textAnchor="end">{(zones[2] || "LATE REGIME CLASSIFICATION TRAP").toUpperCase()}</text>
        </svg>
      </div>
      <ObservationPanel visual={visual} />
    </div>
  );
}

function CryptoCycleCatalystChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const points = [
    { x: 70, y: 130, label: "PRE" },
    { x: 190, y: 92, label: "CATALYST" },
    { x: 310, y: 70, label: "ABSORPTION" },
    { x: 430, y: 108, label: "REVIEW" },
  ];
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 text-[9px] font-extrabold uppercase tracking-widest border border-fuchsia-500/20">Catalyst Timeline</div>
      </div>
      <div className="relative w-full overflow-hidden bg-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 220" className="w-full h-auto font-sans">
          <line x1="42" y1="132" x2="458" y2="132" stroke="rgba(148,163,184,0.4)" strokeWidth="1.2" />
          <path d="M 48 146 C 112 142 142 118 190 92 S 266 54 310 70 S 378 92 442 108" fill="none" stroke="rgb(217,70,239)" strokeWidth="2" />
          {points.map((point, index) => (
            <g key={point.label}>
              <circle cx={point.x} cy={point.y} r="6" fill="rgb(15,23,42)" stroke={index === 1 ? "rgb(251,191,36)" : "rgb(217,70,239)"} strokeWidth="2" />
              <text x={point.x} y={point.y + 22} fill="rgb(203,213,225)" fontSize="5.6" fontWeight="bold" textAnchor="middle">{point.label}</text>
            </g>
          ))}
          <rect x="112" y="34" width="156" height="42" rx="5" fill="rgba(217,70,239,0.06)" stroke="rgba(217,70,239,0.26)" />
          <text x="190" y="28" fill="rgb(232,121,249)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[0] || "CATALYST / CYCLE INPUT").toUpperCase()}</text>
          <rect x="282" y="144" width="146" height="38" rx="5" fill="rgba(56,189,248,0.05)" stroke="rgba(56,189,248,0.24)" />
          <text x="355" y="198" fill="rgb(56,189,248)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "LIQUIDITY DEPTH CHECK").toUpperCase()}</text>
          <text x="462" y="36" fill="rgb(45,212,191)" fontSize="5.7" fontWeight="bold" textAnchor="end">{(labels[2] || "FRESHNESS / ABSORPTION CHECK").toUpperCase()}</text>
          <text x="72" y="190" fill="rgb(148,163,184)" fontSize="5.6" fontWeight="bold">{(zones[0] || "PRE-CATALYST CONTEXT").toUpperCase()}</text>
          <text x="310" y="58" fill="rgb(45,212,191)" fontSize="5.6" fontWeight="bold" textAnchor="middle">{(zones[1] || "POST-CATALYST REVIEW").toUpperCase()}</text>
          <text x="458" y="172" fill="rgb(248,113,113)" fontSize="5.6" fontWeight="bold" textAnchor="end">{(zones[2] || "CROWDING / STALE NARRATIVE TRAP").toUpperCase()}</text>
        </svg>
      </div>
      <ObservationPanel visual={visual} />
    </div>
  );
}

// ==========================================================
// SUB-RENDERER T: Model Audit Chart
// ==========================================================
function MultiTimeframeConfluenceChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const lanes = [
    { y: 44, label: labels[0] || "Higher-Timeframe Trend Context", color: "rgb(56, 189, 248)", path: "M 42 90 C 92 72 136 70 188 54 C 240 38 286 40 338 26" },
    { y: 96, label: labels[1] || "Mid-Timeframe Structure Check", color: "rgb(45, 212, 191)", path: "M 42 112 C 88 102 124 118 166 92 C 210 66 252 76 300 54" },
    { y: 148, label: labels[2] || "Lower-Timeframe Trigger Clue", color: "rgb(251, 191, 36)", path: "M 42 142 C 84 150 124 136 158 146 C 196 158 232 112 278 102" },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 text-[9px] font-extrabold uppercase tracking-widest border border-sky-500/20">
          <ArrowLeftRight className="w-3 h-3" />
          <span>Timeframes</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          {[54, 106, 158].map((y, index) => (
            <g key={y}>
              <rect x="22" y={y - 28} width="456" height="42" rx="5" fill="rgba(15, 23, 42, 0.72)" stroke="rgba(71, 85, 105, 0.45)" />
              <text x="36" y={y - 12} fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold">{["HTF", "MID", "LTF"][index]}</text>
            </g>
          ))}

          {lanes.map((lane) => (
            <g key={lane.label}>
              <path d={lane.path} fill="none" stroke={lane.color} strokeWidth="1.7" strokeLinecap="round" />
              <circle cx={lane.y === 44 ? 338 : lane.y === 96 ? 300 : 278} cy={lane.y === 44 ? 26 : lane.y === 96 ? 54 : 102} r="4" fill={lane.color} />
              <text x="468" y={lane.y} fill={lane.color} fontSize="5.8" fontWeight="bold" textAnchor="end">{lane.label.toUpperCase()}</text>
            </g>
          ))}

          <rect x="314" y="34" width="118" height="74" rx="6" fill="rgba(45, 212, 191, 0.06)" stroke="rgba(45, 212, 191, 0.26)" />
          <text x="373" y="28" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="black" textAnchor="middle">{(zones[0] || "TIMEFRAME ALIGNMENT AREA").toUpperCase()}</text>

          <rect x="268" y="126" width="122" height="48" rx="6" fill="rgba(251, 191, 36, 0.06)" stroke="rgba(251, 191, 36, 0.26)" strokeDasharray="3 2" />
          <text x="329" y="188" fill="rgb(251, 191, 36)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[2] || "TIMEFRAME CONFLICT TRAP").toUpperCase()}</text>

          <text x="34" y="196" fill="rgb(56, 189, 248)" fontSize="5.8" fontWeight="bold">{(zones[1] || "CRYPTO LIQUIDITY DEPTH CHECK").toUpperCase()}</text>
        </svg>
      </div>

      <ObservationPanel visual={visual} />
    </div>
  );
}

function ModelAuditChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">
          <Activity className="w-3 h-3" />
          <span>Model Audit</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          <rect x="22" y="32" width="126" height="112" rx="5" fill="rgba(99, 102, 241, 0.08)" stroke="rgba(129, 140, 248, 0.28)" />
          <text x="85" y="24" fill="rgb(165, 180, 252)" fontSize="6" fontWeight="bold" textAnchor="middle">{(zones[0] || "TRAINING DATA WINDOW").toUpperCase()}</text>
          <path d="M 38 112 C 62 92 82 124 104 86 S 132 86 142 68" fill="none" stroke="rgb(129, 140, 248)" strokeWidth="1.5" />

          <rect x="188" y="44" width="124" height="88" rx="5" fill="rgba(45, 212, 191, 0.06)" stroke="rgba(45, 212, 191, 0.24)" />
          <text x="250" y="36" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="bold" textAnchor="middle">{(labels[0] || "MODEL OUTPUT REVIEW").toUpperCase()}</text>
          <path d="M 204 104 C 232 74 254 86 292 58" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.6" />
          <path d="M 204 124 C 232 92 254 104 292 78" fill="none" stroke="rgba(45, 212, 191, 0.45)" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M 204 84 C 232 56 254 68 292 40" fill="none" stroke="rgba(45, 212, 191, 0.45)" strokeWidth="1" strokeDasharray="3 2" />
          <text x="250" y="145" fill="rgb(148, 163, 184)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[1] || "VALIDATION SPLIT CHECK").toUpperCase()}</text>

          <rect x="352" y="52" width="112" height="86" rx="5" fill="rgba(248, 113, 113, 0.06)" stroke="rgba(248, 113, 113, 0.26)" strokeDasharray="3 2" />
          <text x="408" y="44" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="middle">{(zones[2] || "OVERFITTING TRAP").toUpperCase()}</text>
          <path d="M 366 118 C 386 42 420 156 452 64" fill="none" stroke="rgb(248, 113, 113)" strokeWidth="1.5" />
          <text x="408" y="154" fill="rgb(251, 191, 36)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[2] || "LIQUIDITY DEPTH CHECK").toUpperCase()}</text>

          <line x1="148" y1="88" x2="188" y2="88" stroke="rgb(71, 85, 105)" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="312" y1="88" x2="352" y2="88" stroke="rgb(71, 85, 105)" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      </div>

      <ObservationPanel visual={visual} />
    </div>
  );
}

// ==========================================================
// SUB-RENDERER U: Execution Microstructure Chart
// ==========================================================
function ExecutionMicrostructureChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const bidRows = [78, 94, 112, 132, 150];
  const askRows = [58, 76, 96, 118, 140];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <ArrowLeftRight className="w-3 h-3" />
          <span>Microstructure</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 210" className="w-full h-auto font-sans">
          <text x="118" y="28" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="bold" textAnchor="middle">BID DEPTH</text>
          <text x="382" y="28" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="middle">ASK DEPTH</text>
          {bidRows.map((width, index) => (
            <rect key={`bid-${index}`} x={154 - width} y={48 + index * 24} width={width} height="14" rx="2" fill="rgba(45, 212, 191, 0.18)" stroke="rgba(45, 212, 191, 0.28)" />
          ))}
          {askRows.map((width, index) => (
            <rect key={`ask-${index}`} x="346" y={48 + index * 24} width={width} height="14" rx="2" fill="rgba(248, 113, 113, 0.16)" stroke="rgba(248, 113, 113, 0.26)" />
          ))}
          <line x1="250" y1="38" x2="250" y2="172" stroke="rgb(148, 163, 184)" strokeWidth="1" strokeDasharray="4 3" />
          <rect x="214" y="88" width="72" height="30" rx="4" fill="rgba(251, 191, 36, 0.08)" stroke="rgba(251, 191, 36, 0.26)" />
          <text x="250" y="84" fill="rgb(251, 191, 36)" fontSize="5.7" fontWeight="bold" textAnchor="middle">{(labels[0] || "SPREAD / VENUE GAP").toUpperCase()}</text>
          <text x="250" y="188" fill="rgb(56, 189, 248)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[1] || "VENUE DEPTH CHECK").toUpperCase()}</text>
          <text x="414" y="178" fill="rgb(248, 113, 113)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[2] || "TOXIC FLOW / DELAY TRAP").toUpperCase()}</text>
          <path d="M 58 176 C 146 170 200 168 250 148 S 348 118 446 112" fill="none" stroke="rgb(56, 189, 248)" strokeWidth="1.2" strokeDasharray="4 2" />
        </svg>
      </div>

      <ObservationPanel visual={visual} />
    </div>
  );
}

function ObservationPanel({ visual }: { visual: VisualModel }) {
  return (
    <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
      <div className="flex gap-2">
        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
          <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
          {visual.whatLearnerShouldNotice}
        </p>
      </div>
      <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
          <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
          {visual.mistakePrevented}
        </p>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER V: Market Structure Chart
// ==========================================================
function MarketStructureChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const swings = [
    { x: 45, y: 122, label: "LOW" },
    { x: 115, y: 86, label: labels[0] || "Swing High" },
    { x: 185, y: 112, label: labels[2] || "Higher Low" },
    { x: 255, y: 66, label: labels[1] || "Higher High" },
    { x: 325, y: 94, label: labels[2] || "Higher Low" },
    { x: 395, y: 50, label: labels[1] || "Higher High" },
  ];
  const path = "M " + swings.map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>Market Structure</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {[45, 90, 135].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          <path d={path} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 45 122 L 325 94 L 325 126 L 45 154 Z" fill="rgba(45, 212, 191, 0.04)" />
          <text x="250" y="134" fill="rgb(45, 212, 191)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(zones[0] || "RISING SWING STRUCTURE").toUpperCase()}</text>

          <rect x="302" y="84" width="48" height="24" fill="rgba(45, 212, 191, 0.06)" rx="3" stroke="rgba(45, 212, 191, 0.22)" strokeWidth="0.6" />
          <text x="326" y="80" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[1] || "PULLBACK HIGHER-LOW AREA").toUpperCase()}</text>

          <line x1="0" y1="126" x2="500" y2="126" stroke="rgba(239, 68, 68, 0.35)" strokeWidth="0.8" strokeDasharray="4 3" />
          <text x="490" y="122" fill="rgb(248, 113, 113)" fontSize="5.8" fontWeight="bold" textAnchor="end">{(zones[2] || "STRUCTURE FAILURE BELOW PRIOR SWING LOW").toUpperCase()}</text>

          {swings.map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="4" fill="rgb(15, 23, 42)" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
              <text x={point.x} y={point.y - 10} fill="rgb(226, 232, 240)" fontSize="5.7" fontWeight="bold" textAnchor="middle">
                {point.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER P: Chart Pattern Breakout Chart
// ==========================================================
function ChartPatternBreakoutChart({ visual }: { visual: VisualModel }) {
  const labels = visual.requiredLabels || [];
  const zones = visual.requiredZones || [];
  const candles = [
    { x: 44, open: 118, close: 108, high: 101, low: 124 },
    { x: 82, open: 108, close: 115, high: 104, low: 119 },
    { x: 120, open: 115, close: 110, high: 106, low: 118 },
    { x: 158, open: 110, close: 114, high: 108, low: 117 },
    { x: 196, open: 114, close: 112, high: 109, low: 116 },
    { x: 234, open: 112, close: 121, high: 110, low: 124 },
    { x: 272, open: 121, close: 134, high: 118, low: 137 },
    { x: 310, open: 134, close: 129, high: 126, low: 138 },
    { x: 348, open: 129, close: 140, high: 127, low: 144 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">
          <Activity className="w-3 h-3" />
          <span>Pattern Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 190" className="w-full h-auto font-sans">
          {[42, 84, 126, 168].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          <path d="M 38 100 L 210 72 L 210 130 L 38 148 Z" fill="rgba(139, 92, 246, 0.045)" stroke="rgba(139, 92, 246, 0.22)" strokeWidth="0.8" strokeDasharray="4 3" />
          <line x1="40" y1="148" x2="230" y2="132" stroke="rgb(139, 92, 246)" strokeWidth="1.2" strokeDasharray="4 2" />
          <line x1="40" y1="100" x2="230" y2="70" stroke="rgb(139, 92, 246)" strokeWidth="1.2" strokeDasharray="4 2" />
          <text x="135" y="66" fill="rgb(167, 139, 250)" fontSize="5.8" fontWeight="bold" textAnchor="middle">{(labels[0] || "PATTERN BOUNDARY").toUpperCase()}</text>

          <line x1="20" y1="124" x2="480" y2="124" stroke="rgba(148, 163, 184, 0.35)" strokeWidth="0.8" strokeDasharray="4 3" />
          <text x="480" y="119" fill="rgb(148, 163, 184)" fontSize="5.8" fontWeight="bold" textAnchor="end">NECKLINE / MOTHER-BAR LEVEL</text>

          <rect x="254" y="42" width="84" height="38" rx="4" fill="rgba(45, 212, 191, 0.07)" stroke="rgba(45, 212, 191, 0.25)" strokeWidth="0.7" />
          <text x="296" y="36" fill="rgb(45, 212, 191)" fontSize="5.7" fontWeight="black" textAnchor="middle">{(labels[1] || "BREAKOUT CLOSE").toUpperCase()}</text>

          <rect x="304" y="86" width="72" height="36" rx="4" fill="rgba(251, 191, 36, 0.06)" stroke="rgba(251, 191, 36, 0.24)" strokeWidth="0.7" strokeDasharray="2 1" />
          <text x="340" y="135" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">{(zones[2] || "FAILED BREAK BACK INSIDE").toUpperCase()}</text>

          <text x="90" y="160" fill="rgb(139, 92, 246)" fontSize="5.6" fontWeight="bold">{(zones[0] || "COMPRESSION AREA").toUpperCase()}</text>
          <text x="244" y="92" fill="rgb(45, 212, 191)" fontSize="5.6" fontWeight="bold">{(zones[1] || "RETEST AREA").toUpperCase()}</text>
          <text x="470" y="58" fill="rgb(56, 189, 248)" fontSize="5.6" fontWeight="bold" textAnchor="end">{(labels[2] || "LIQUIDITY CHECK").toUpperCase()}</text>

          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 190 - c.close;
            const openY = 190 - c.open;
            const highY = 190 - c.high;
            const lowY = 190 - c.low;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.55)" : "rgba(248, 113, 113, 0.55)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER P: Donchian Channel Breakout Chart
// ==========================================================
function DonchianChannelBreakoutChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 110, close: 114, high: 108, low: 116 },
    { x: 60, open: 114, close: 108, high: 106, low: 118 },
    { x: 90, open: 108, close: 112, high: 105, low: 115 },
    { x: 120, open: 112, close: 118, high: 109, low: 120 },
    { x: 150, open: 118, close: 110, high: 107, low: 121 },
    { x: 180, open: 110, close: 128, high: 108, low: 132 },
    { x: 210, open: 128, close: 135, high: 124, low: 140 },
    { x: 240, open: 135, close: 132, high: 130, low: 138 },
    { x: 270, open: 132, close: 148, high: 130, low: 150 }, // BREAKOUT
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <Activity className="w-3 h-3" />
          <span>Donchian Channel</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Upper Band */}
          <line x1="0" y1="52" x2="250" y2="52" stroke="rgb(45, 212, 191)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="250" y1="52" x2="500" y2="30" stroke="rgb(45, 212, 191)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="10" y="45" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">DONCHIAN UPPER CHANNEL BAND (20-PERIOD HIGH)</text>

          {/* Lower Band */}
          <line x1="0" y1="130" x2="500" y2="130" stroke="rgb(248, 113, 113)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="10" y="142" fill="rgb(248, 113, 113)" fontSize="5.5" fontWeight="bold">DONCHIAN LOWER CHANNEL BAND (20-PERIOD LOW)</text>

          {/* Breakout Event */}
          <circle cx="270" cy="48" r="5" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          <text x="270" y="38" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="black" textAnchor="middle">CHANNEL BREAKOUT TRIGGER</text>

          {/* False Channel Breakout Trap Area */}
          <rect x="135" y="35" width="45" height="25" fill="rgba(245, 158, 11, 0.05)" rx="2" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
          <text x="157.5" y="30" fill="rgb(251, 191, 36)" fontSize="5" fontWeight="bold" textAnchor="middle">FALSE BREAKOUT TRAP</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}
