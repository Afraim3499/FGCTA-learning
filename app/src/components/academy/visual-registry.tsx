"use client";

import dynamic from "next/dynamic";
import React from "react";

/**
 * Standard loading state for visual components
 */
const VisualLoading = () => (
  <div className="w-full h-[400px] bg-slate-50/50 rounded-[3rem] border border-slate-100 flex items-center justify-center animate-pulse">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-slate-200" />
      <div className="h-2 w-32 bg-slate-200 rounded-full" />
    </div>
  </div>
);

/**
 * Visual Registry Hub
 * Maps visual component keys to their modular files using dynamic imports.
 * This ensures only the required visual for the current card is downloaded.
 */
export const VISUAL_REGISTRY: Record<string, React.ComponentType<any>> = {
  // --- CORE MODULES ---
  
  // Core 0.1 Orientation
  "academy-path": dynamic(() => import("./visuals/core/module-0-1").then(m => m.AcademyPath), { loading: VisualLoading }),
  "learning-loop": dynamic(() => import("./visuals/core/module-0-1").then(m => m.LearningLoop), { loading: VisualLoading }),
  "system-map": dynamic(() => import("./visuals/core/module-0-1").then(m => m.SystemMap), { loading: VisualLoading }),
  "practice-timeline": dynamic(() => import("./visuals/core/module-0-1").then(m => m.PracticeTimeline), { loading: VisualLoading }),
  "note-comparison": dynamic(() => import("./visuals/core/module-0-1").then(m => m.NoteComparison), { loading: VisualLoading }),
  "behavior-flow": dynamic(() => import("./visuals/core/module-0-1").then(m => m.BehaviorFlow), { loading: VisualLoading }),
  "decision-gate": dynamic(() => import("./visuals/core/module-0-1").then(m => m.DecisionGate), { loading: VisualLoading }),
  "orientation-debrief": dynamic(() => import("./visuals/core/module-0-1").then(m => m.OrientationDebrief), { loading: VisualLoading }),

  // Core 0.2 Market Mechanisms
  "transaction-mechanism-mini": dynamic(() => import("./visuals/core/module-0-2").then(m => m.TransactionMechanismMiniVisual), { loading: VisualLoading }),
  "intent-logic-board": dynamic(() => import("./visuals/core/module-0-2").then(m => m.IntentLogicBoardVisual), { loading: VisualLoading }),
  "mindset-comparison": dynamic(() => import("./visuals/core/module-0-2").then(m => m.MindsetComparisonVisual), { loading: VisualLoading }),
  "liquidity-comparison": dynamic(() => import("./visuals/core/module-0-2").then(m => m.LiquidityComparisonVisual), { loading: VisualLoading }),
  "microstructure-board": dynamic(() => import("./visuals/core/module-0-2").then(m => m.MicrostructureBoardVisual), { loading: VisualLoading }),
  "order-matching": dynamic(() => import("./visuals/core/module-0-2").then(m => m.OrderMatchingVisual), { loading: VisualLoading }),
  "market-mechanism": dynamic(() => import("./visuals/core/module-0-2").then(m => m.MarketMechanismVisual), { loading: VisualLoading }),
  "market-mechanism-recap-visual": dynamic(() => import("./visuals/core/module-0-2").then(m => m.MarketMechanismRecapVisual), { loading: VisualLoading }),

  // Core 0.3 Candle Reading
  "candle-anatomy-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleAnatomyBoard), { loading: VisualLoading }),
  "record-vs-signal-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.RecordVsSignalBoard), { loading: VisualLoading }),
  "candle-evidence-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleEvidenceBoard), { loading: VisualLoading }),
  "context-logic-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.ContextLogicBoard), { loading: VisualLoading }),
  "candle-family-preview": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleFamilyPreview), { loading: VisualLoading }),
  "candle-decision-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleDecisionBoard), { loading: VisualLoading }),
  "forex-candle-quote-record-board": dynamic(() => import("./visuals/core/module-0-3").then(m => m.ForexCandleQuoteRecordBoard), { loading: VisualLoading }),
  "candle-recap-map": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleRecapMap), { loading: VisualLoading }),
  "candle-diagram": dynamic(() => import("./visuals/core/module-0-3").then(m => m.CandleDiagram), { loading: VisualLoading }),

  // Core 0.4 Timeframes
  "time-compression-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeCompressionBoard), { loading: VisualLoading }),
  "timeframe-comparison-windows": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframeComparisonWindows), { loading: VisualLoading }),
  "timeframe-weight-ladder": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframeWeightLadder), { loading: VisualLoading }),
  "htf-ltf-roles": dynamic(() => import("./visuals/core/module-0-4").then(m => m.HtfLtfRoles), { loading: VisualLoading }),
  "timeframe-conflict-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframeConflictBoard), { loading: VisualLoading }),
  "top-down-reading-workflow": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TopDownReadingWorkflow), { loading: VisualLoading }),
  "timeframe-decision-scenario": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframeDecisionScenario), { loading: VisualLoading }),
  "timeframe-debrief-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframeDebriefBoard), { loading: VisualLoading }),
  "forex-session-timeframe-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexSessionTimeframeBoard), { loading: VisualLoading }),
  "forex-trading-rhythm-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexTradingRhythmBoard), { loading: VisualLoading }),
  "forex-handoff-overlap-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexHandoffOverlapBoard), { loading: VisualLoading }),
  "forex-candle-weight-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexCandleWeightBoard), { loading: VisualLoading }),
  "forex-news-distortion-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexNewsDistortionBoard), { loading: VisualLoading }),
  "forex-location-context-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexLocationContextBoard), { loading: VisualLoading }),
  "forex-behavior-lens-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexBehaviorLensBoard), { loading: VisualLoading }),
  "forex-conflict-resolver": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexConflictResolver), { loading: VisualLoading }),
  "forex-top-down-workflow": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexTopDownWorkflow), { loading: VisualLoading }),
  "forex-timeframe-drill": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexTimeframeDrill), { loading: VisualLoading }),
  "forex-roadway-debrief": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexRoadwayDebrief), { loading: VisualLoading }),

  // --- MODULE 0.5 SCAFFOLD ---
  "structure-skeleton-intro": dynamic(() => import("./visuals/module-0-5/core").then(m => m.StructureSkeletonIntro), { loading: VisualLoading }),
  "swing-logic-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.SwingLogicVisual), { loading: VisualLoading }),
  "structure-language-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.StructureLanguageVisual), { loading: VisualLoading }),
  "trend-structure-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.TrendStructureVisual), { loading: VisualLoading }),
  "range-structure-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.RangeStructureVisual), { loading: VisualLoading }),
  "impulse-pullback-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.ImpulsePullbackVisual), { loading: VisualLoading }),
  "reaction-areas-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.ReactionAreasVisual), { loading: VisualLoading }),
  "structure-change-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.StructureChangeVisual), { loading: VisualLoading }),
  "multi-timeframe-structure-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.MultiTimeframeStructureVisual), { loading: VisualLoading }),
  "structure-drill-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.StructureDrillVisual), { loading: VisualLoading }),
  "structure-debrief-visual": dynamic(() => import("./visuals/module-0-5/core").then(m => m.StructureDebriefVisual), { loading: VisualLoading }),
  
  // Forex 0.5 adaptation keys
  "forex-pair-structure-skeleton": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexPairStructureSkeleton), { loading: VisualLoading }),
  "forex-swing-pressure-points": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexSwingPressurePoints), { loading: VisualLoading }),
  "forex-trend-range-structure": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexTrendRangeStructure), { loading: VisualLoading }),
  "forex-session-range-structure": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexSessionRangeStructure), { loading: VisualLoading }),
  "forex-session-high-low-reaction": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexSessionHighLowReaction), { loading: VisualLoading }),
  "forex-expansion-pullback-rhythm": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexExpansionPullbackRhythm), { loading: VisualLoading }),
  "forex-break-failure-quality": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexBreakFailureQuality), { loading: VisualLoading }),
  "forex-htf-location-first": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexHtfLocationFirst), { loading: VisualLoading }),
  "forex-related-pair-context": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexRelatedPairContext), { loading: VisualLoading }),
  "forex-structure-break-drill": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexStructureBreakDrill), { loading: VisualLoading }),
  "forex-structure-roadway-debrief": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexStructureRoadwayDebrief), { loading: VisualLoading }),

  "module-0-5-forex-placeholder": dynamic(() => import("./visuals/module-0-5/forex").then(m => m.ForexPlaceholderVisual), { loading: VisualLoading }),
  "module-0-5-gold-placeholder": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldPlaceholderVisual), { loading: VisualLoading }),
  "module-0-5-crypto-placeholder": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoPlaceholderVisual), { loading: VisualLoading }),

  // Crypto 0.5 adaptation keys
  "crypto-fragmented-structure-skeleton": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoFragmentedStructureSkeleton), { loading: VisualLoading }),
  "crypto-swing-source-map": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoSwingSourceMap), { loading: VisualLoading }),
  "crypto-btc-alt-structure-context": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoBtcAltStructureContext), { loading: VisualLoading }),
  "crypto-venue-structure-disagreement": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoVenueStructureDisagreement), { loading: VisualLoading }),
  "crypto-trend-range-structure": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoTrendRangeStructure), { loading: VisualLoading }),
  "crypto-liquidity-zones": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoLiquidityZones), { loading: VisualLoading }),
  "crypto-perp-break-false-structure": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoPerpBreakFalseStructure), { loading: VisualLoading }),
  "crypto-thin-liquidity-failed-break": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoThinLiquidityFailedBreak), { loading: VisualLoading }),
  "crypto-htf-location-first": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoHtfLocationFirst), { loading: VisualLoading }),
  "crypto-structure-break-drill": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoStructureBreakDrill), { loading: VisualLoading }),
  "crypto-structure-roadway-debrief": dynamic(() => import("./visuals/module-0-5/crypto").then(m => m.CryptoStructureRoadwayDebrief), { loading: VisualLoading }),

  // Gold 0.5 adaptation keys
  "gold-volatility-structure-skeleton": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldVolatilityStructureSkeleton), { loading: VisualLoading }),
  "gold-wick-heavy-swing-points": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldWickHeavySwingPoints), { loading: VisualLoading }),
  "gold-trend-range-structure": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldTrendRangeStructure), { loading: VisualLoading }),
  "gold-reaction-zones-not-lines": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldReactionZonesNotLines), { loading: VisualLoading }),
  "gold-sweep-wick-failed-reaction": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldSweepWickFailedReaction), { loading: VisualLoading }),
  "gold-impulse-pullback-rhythm": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldImpulsePullbackRhythm), { loading: VisualLoading }),
  "gold-macro-fake-structure": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldMacroFakeStructure), { loading: VisualLoading }),
  "gold-break-failure-quality": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldBreakFailureQuality), { loading: VisualLoading }),
  "gold-htf-location-first": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldHtfLocationFirst), { loading: VisualLoading }),
  "gold-structure-break-drill": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldStructureBreakDrill), { loading: VisualLoading }),
  "gold-structure-roadway-debrief": dynamic(() => import("./visuals/module-0-5/gold").then(m => m.GoldStructureRoadwayDebrief), { loading: VisualLoading }),


  // --- FOREX MODULES ---
  
  // Forex 0.2
  "forex-relationship": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexRelationship), { loading: VisualLoading }),
  "forex-network-visual": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexNetworkVisual), { loading: VisualLoading }),
  "forex-quote-panel-visual": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexQuotePanelVisual), { loading: VisualLoading }),
  "forex-instrument-panel": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexInstrumentPanel), { loading: VisualLoading }),

  // Forex 0.3
  "forex-pip-candle-board": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexPipCandleBoard), { loading: VisualLoading }),
  "forex-distorted-candle-board": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexDistortedCandleBoard), { loading: VisualLoading }),
  "forex-candle-decision-board": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexCandleDecisionBoard), { loading: VisualLoading }),
  "forex-context-comparison": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexContextComparison), { loading: VisualLoading }),
  "forex-session-liquidity-visual": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexSessionLiquidityVisual), { loading: VisualLoading }),
  "forex-mini-drill-board": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexMiniDrillBoard), { loading: VisualLoading }),
  "forex-quote-quality-drill-visual": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexQuoteQualityDrillVisual), { loading: VisualLoading }),

  // --- GOLD MODULES ---

  // Gold 0.1
  "gold-reading-map": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldReadingMap), { loading: VisualLoading }),
  "gold-context-driver-map": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldContextDriverMap), { loading: VisualLoading }),
  "gold-urgency-trap-visual": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldUrgencyTrapVisual), { loading: VisualLoading }),
  "gold-noise-decision-board": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldNoiseDecisionBoard), { loading: VisualLoading }),

  // Gold 0.2
  "gold-market-map-visual": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldMarketMapVisual), { loading: VisualLoading }),
  "gold-otc-bilateral-visual": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldOTCBilateralVisual), { loading: VisualLoading }),
  "gold-futures-mechanics-visual": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldFuturesMechanicsVisual), { loading: VisualLoading }),
  "gold-market-layer-drill-visual": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldMarketLayerDrillVisual), { loading: VisualLoading }),

  // Gold 0.3
  "gold-candle-context-board": dynamic(() => import("./visuals/gold/module-0-3").then(m => m.GoldCandleContextBoard), { loading: VisualLoading }),
  "gold-candle-quality-board": dynamic(() => import("./visuals/gold/module-0-3").then(m => m.GoldCandleQualityBoard), { loading: VisualLoading }),
  "gold-wick-diagnostic-board": dynamic(() => import("./visuals/gold/module-0-3").then(m => m.GoldWickDiagnosticBoard), { loading: VisualLoading }),
  "gold-candle-decision-board": dynamic(() => import("./visuals/gold/module-0-3").then(m => m.GoldCandleDecisionBoard), { loading: VisualLoading }),

  // --- CRYPTO MODULES ---

  // Crypto 0.1
  "crypto-mechanics-map": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.CryptoMechanicsMap), { loading: VisualLoading }),
  "crypto-market-mechanics-visual": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.CryptoMarketMechanicsVisual), { loading: VisualLoading }),
  "hype-trap-path": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.HypeTrapPath), { loading: VisualLoading }),
  "crypto-drill-board": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.CryptoDrillBoard), { loading: VisualLoading }),
  "crypto-hype-filtering-drill": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.CryptoHypeFilteringDrill), { loading: VisualLoading }),

  // Crypto 0.2
  "crypto-venue-map-visual": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoVenueMapVisual), { loading: VisualLoading }),
  "crypto-market-engines-visual": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoMarketEnginesVisual), { loading: VisualLoading }),
  "crypto-liquidity-fragmentation-visual": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoLiquidityFragmentationVisual), { loading: VisualLoading }),
  "crypto-venue-noise-drill-visual": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoVenueNoiseDrillVisual), { loading: VisualLoading }),

  // Crypto 0.3
  "crypto-candle-source-map": dynamic(() => import("./visuals/crypto/module-0-3").then(m => m.CryptoCandleSourceMap), { loading: VisualLoading }),
  "two-candle-engines-board": dynamic(() => import("./visuals/crypto/module-0-3").then(m => m.TwoCandleEnginesBoard), { loading: VisualLoading }),
  "wick-source-diagnostic-board": dynamic(() => import("./visuals/crypto/module-0-3").then(m => m.WickSourceDiagnosticBoard), { loading: VisualLoading }),
  "crypto-candle-decision-board": dynamic(() => import("./visuals/crypto/module-0-3").then(m => m.CryptoCandleDecisionBoard), { loading: VisualLoading }),
  
  // Crypto 0.4
  "crypto-continuous-market-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoContinuousMarketBoard), { loading: VisualLoading }),
  "crypto-activity-cycle-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoActivityCycleBoard), { loading: VisualLoading }),
  "crypto-candle-quality-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoCandleQualityBoard), { loading: VisualLoading }),
  "crypto-btc-context-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoBtcContextBoard), { loading: VisualLoading }),
  "crypto-spot-perp-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoSpotPerpBoard), { loading: VisualLoading }),
  "crypto-liquidity-risk-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoLiquidityRiskBoard), { loading: VisualLoading }),
  "crypto-event-pressure-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoEventPressureBoard), { loading: VisualLoading }),
  "crypto-reading-stack-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoReadingStackBoard), { loading: VisualLoading }),
  "crypto-conflict-drill-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoConflictDrillBoard), { loading: VisualLoading }),
  "crypto-roadway-debrief": dynamic(() => import("./visuals/core/module-0-4").then(m => m.CryptoRoadwayDebrief), { loading: VisualLoading }),
  "gold-volatility-record-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldVolatilityRecordBoard), { loading: VisualLoading }),
  "gold-market-rhythm-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldMarketRhythmBoard), { loading: VisualLoading }),
  "gold-window-comparison-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldWindowComparisonBoard), { loading: VisualLoading }),
  "gold-event-distortion-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldEventDistortionBoard), { loading: VisualLoading }),
  "gold-participation-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldParticipationBoard), { loading: VisualLoading }),
  "gold-location-context-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldLocationContextBoard), { loading: VisualLoading }),
  "gold-local-behavior-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldLocalBehaviorBoard), { loading: VisualLoading }),
  "gold-reading-stack-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldReadingStackBoard), { loading: VisualLoading }),
  "gold-conflict-drill-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldConflictDrillBoard), { loading: VisualLoading }),
  "gold-roadway-debrief": dynamic(() => import("./visuals/core/module-0-4").then(m => m.GoldRoadwayDebrief), { loading: VisualLoading }),
  "forex-reading-stack-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.ForexReadingStackBoard), { loading: VisualLoading }),
  "timeframe-personality-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.TimeframePersonalityBoard), { loading: VisualLoading }),
  "evidence-audit-checklist-board": dynamic(() => import("./visuals/core/module-0-4").then(m => m.EvidenceAuditChecklistBoard), { loading: VisualLoading }),

  // --- MODULE 0.6 SYNTHESIS ---
  "evidence-audit-foundation": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceAuditFoundation), { loading: VisualLoading }),
  "single-clue-vs-evidence-stack": dynamic(() => import("./visuals/module-0-6").then(m => m.SingleClueVsEvidenceStack), { loading: VisualLoading }),
  "evidence-layer-stack": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceLayerStack), { loading: VisualLoading }),
  "evidence-alignment-board": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceAlignmentBoard), { loading: VisualLoading }),
  "evidence-conflict-map": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceConflictMap), { loading: VisualLoading }),
  "reading-quality-classifier": dynamic(() => import("./visuals/module-0-6").then(m => m.ReadingQualityClassifier), { loading: VisualLoading }),
  "verification-checkpoint-flow": dynamic(() => import("./visuals/module-0-6").then(m => m.VerificationCheckpointFlow), { loading: VisualLoading }),
  "reading-failure-diagnostic": dynamic(() => import("./visuals/module-0-6").then(m => m.ReadingFailureDiagnostic), { loading: VisualLoading }),
  "core-reading-workflow-map": dynamic(() => import("./visuals/module-0-6").then(m => m.CoreReadingWorkflowMap), { loading: VisualLoading }),
  "evidence-audit-practice-drill": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceAuditPracticeDrill), { loading: VisualLoading }),
  "evidence-audit-debrief": dynamic(() => import("./visuals/module-0-6").then(m => m.EvidenceAuditDebrief), { loading: VisualLoading }),

  // --- MODULE 0.6 FOREX ROADWAY ---
  "forex-evidence-audit-foundation": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexEvidenceAuditFoundation), { loading: VisualLoading }),
  "forex-single-candle-trap": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexSingleCandleTrap), { loading: VisualLoading }),
  "forex-session-context-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexSessionContextEvidence), { loading: VisualLoading }),
  "forex-session-high-low-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexSessionHighLowEvidence), { loading: VisualLoading }),
  "forex-usd-context-reading": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexUsdContextReading), { loading: VisualLoading }),
  "forex-related-pair-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexRelatedPairEvidence), { loading: VisualLoading }),
  "forex-event-distortion-audit": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexEventDistortionAudit), { loading: VisualLoading }),
  "forex-aligned-vs-mixed-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexAlignedVsMixedEvidence), { loading: VisualLoading }),
  "forex-verification-workflow": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexVerificationWorkflow), { loading: VisualLoading }),
  "forex-evidence-audit-practice-drill": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexEvidenceAuditPracticeDrill), { loading: VisualLoading }),
  "forex-evidence-audit-debrief": dynamic(() => import("./visuals/module-0-6").then(m => m.ForexEvidenceAuditDebrief), { loading: VisualLoading }),

  // --- MODULE 0.6 CRYPTO ROADWAY ---
  "crypto-evidence-audit-foundation": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoEvidenceAuditFoundation), { loading: VisualLoading }),
  "crypto-single-wick-trap": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoSingleWickTrap), { loading: VisualLoading }),
  "crypto-btc-context-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoBtcContextEvidence), { loading: VisualLoading }),
  "crypto-spot-perp-evidence-conflict": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoSpotPerpEvidenceConflict), { loading: VisualLoading }),
  "crypto-liquidation-cascade-audit": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoLiquidationCascadeAudit), { loading: VisualLoading }),
  "crypto-dex-cex-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoDexCexEvidence), { loading: VisualLoading }),
  "crypto-funding-leverage-pressure": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoFundingLeveragePressure), { loading: VisualLoading }),
  "crypto-aligned-vs-mixed-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoAlignedVsMixedEvidence), { loading: VisualLoading }),
  "crypto-verification-workflow": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoVerificationWorkflow), { loading: VisualLoading }),
  "crypto-evidence-audit-practice-drill": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoEvidenceAuditPracticeDrill), { loading: VisualLoading }),
  "crypto-evidence-audit-debrief": dynamic(() => import("./visuals/module-0-6").then(m => m.CryptoEvidenceAuditDebrief), { loading: VisualLoading }),

  // --- MODULE 0.6 GOLD ROADWAY ---
  "gold-evidence-audit-foundation": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldEvidenceAuditFoundation), { loading: VisualLoading }),
  "gold-single-wick-trap": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldSingleWickTrap), { loading: VisualLoading }),
  "gold-reaction-zone-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldReactionZoneEvidence), { loading: VisualLoading }),
  "gold-usd-context-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldUsdContextEvidence), { loading: VisualLoading }),
  "gold-macro-event-distortion": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldMacroEventDistortion), { loading: VisualLoading }),
  "gold-close-quality-audit": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldCloseQualityAudit), { loading: VisualLoading }),
  "gold-impulse-pullback-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldImpulsePullbackEvidence), { loading: VisualLoading }),
  "gold-aligned-vs-mixed-evidence": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldAlignedVsMixedEvidence), { loading: VisualLoading }),
  "gold-verification-workflow": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldVerificationWorkflow), { loading: VisualLoading }),
  "gold-evidence-audit-practice-drill": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldEvidenceAuditPracticeDrill), { loading: VisualLoading }),
  "gold-evidence-audit-debrief": dynamic(() => import("./visuals/module-0-6").then(m => m.GoldEvidenceAuditDebrief), { loading: VisualLoading }),

  // --- MODULE 0.7 CORE ---
  "market-conditions-foundation": dynamic(() => import("./visuals/module-0-7").then(m => m.MarketConditionsFoundation), { loading: VisualLoading }),
  "trend-condition-environment": dynamic(() => import("./visuals/module-0-7").then(m => m.TrendConditionEnvironment), { loading: VisualLoading }),
  "range-condition-environment": dynamic(() => import("./visuals/module-0-7").then(m => m.RangeConditionEnvironment), { loading: VisualLoading }),
  "transition-condition-map": dynamic(() => import("./visuals/module-0-7").then(m => m.TransitionConditionMap), { loading: VisualLoading }),
  "compression-condition-board": dynamic(() => import("./visuals/module-0-7").then(m => m.CompressionConditionBoard), { loading: VisualLoading }),
  "expansion-condition-board": dynamic(() => import("./visuals/module-0-7").then(m => m.ExpansionConditionBoard), { loading: VisualLoading }),
  "choppy-condition-warning": dynamic(() => import("./visuals/module-0-7").then(m => m.ChoppyConditionWarning), { loading: VisualLoading }),
  "same-candle-different-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.SameCandleDifferentCondition), { loading: VisualLoading }),
  "condition-first-workflow": dynamic(() => import("./visuals/module-0-7").then(m => m.ConditionFirstWorkflow), { loading: VisualLoading }),
  "market-condition-practice-drill": dynamic(() => import("./visuals/module-0-7").then(m => m.MarketConditionPracticeDrill), { loading: VisualLoading }),
  "market-condition-debrief": dynamic(() => import("./visuals/module-0-7").then(m => m.MarketConditionDebrief), { loading: VisualLoading }),

  // --- MODULE 0.7 FOREX ---
  "forex-condition-foundation": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexConditionFoundation), { loading: VisualLoading }),
  "forex-session-condition-map": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexSessionConditionMap), { loading: VisualLoading }),
  "forex-asia-range-compression": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexAsiaRangeCompression), { loading: VisualLoading }),
  "forex-london-expansion-quality": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexLondonExpansionQuality), { loading: VisualLoading }),
  "forex-new-york-condition-shift": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexNewYorkConditionShift), { loading: VisualLoading }),
  "forex-trend-condition-session-support": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexTrendConditionSessionSupport), { loading: VisualLoading }),
  "forex-range-condition-rotation": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexRangeConditionRotation), { loading: VisualLoading }),
  "forex-usd-condition-context": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexUsdConditionContext), { loading: VisualLoading }),
  "forex-choppy-condition-warning": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexChoppyConditionWarning), { loading: VisualLoading }),
  "forex-condition-practice-drill": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexConditionPracticeDrill), { loading: VisualLoading }),
  "forex-condition-debrief": dynamic(() => import("./visuals/module-0-7").then(m => m.ForexConditionDebrief), { loading: VisualLoading }),

  // --- MODULE 0.7 CRYPTO ---
  "crypto-condition-foundation": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoConditionFoundation), { loading: VisualLoading }),
  "crypto-btc-condition-map": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoBtcConditionMap), { loading: VisualLoading }),
  "crypto-spot-perp-condition-board": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoSpotPerpConditionBoard), { loading: VisualLoading }),
  "crypto-compression-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoCompressionCondition), { loading: VisualLoading }),
  "crypto-expansion-quality": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoExpansionQuality), { loading: VisualLoading }),
  "crypto-liquidation-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoLiquidationCondition), { loading: VisualLoading }),
  "crypto-thin-liquidity-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoThinLiquidityCondition), { loading: VisualLoading }),
  "crypto-choppy-condition-warning": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoChoppyConditionWarning), { loading: VisualLoading }),
  "crypto-condition-first-workflow": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoConditionFirstWorkflow), { loading: VisualLoading }),
  "crypto-condition-practice-drill": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoConditionPracticeDrill), { loading: VisualLoading }),
  "crypto-condition-debrief": dynamic(() => import("./visuals/module-0-7").then(m => m.CryptoConditionDebrief), { loading: VisualLoading }),

  // --- MODULE 0.7 GOLD ---
  "gold-condition-foundation": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldConditionFoundation), { loading: VisualLoading }),
  "gold-volatility-condition-map": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldVolatilityConditionMap), { loading: VisualLoading }),
  "gold-reaction-zone-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldReactionZoneCondition), { loading: VisualLoading }),
  "gold-compression-condition": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldCompressionCondition), { loading: VisualLoading }),
  "gold-expansion-quality": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldExpansionQuality), { loading: VisualLoading }),
  "gold-macro-condition-distortion": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldMacroConditionDistortion), { loading: VisualLoading }),
  "gold-trend-condition-structure": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldTrendConditionStructure), { loading: VisualLoading }),
  "gold-choppy-condition-warning": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldChoppyConditionWarning), { loading: VisualLoading }),
  "gold-condition-first-workflow": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldConditionFirstWorkflow), { loading: VisualLoading }),
  "gold-condition-practice-drill": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldConditionPracticeDrill), { loading: VisualLoading }),
  "gold-condition-debrief": dynamic(() => import("./visuals/module-0-7").then(m => m.GoldConditionDebrief), { loading: VisualLoading }),

  // --- MODULE 0.8 CORE ---
  "location-gives-evidence-weight": dynamic(() => import("./visuals/module-0-8").then(m => m.LocationGivesEvidenceWeight), { loading: VisualLoading }),
  "chart-area-priority-map": dynamic(() => import("./visuals/module-0-8").then(m => m.ChartAreaPriorityMap), { loading: VisualLoading }),
  "reaction-zones-not-lines": dynamic(() => import("./visuals/module-0-8").then(m => m.ReactionZonesNotLines), { loading: VisualLoading }),
  "edge-vs-middle-location": dynamic(() => import("./visuals/module-0-8").then(m => m.EdgeVsMiddleLocation), { loading: VisualLoading }),
  "prior-swing-location-reference": dynamic(() => import("./visuals/module-0-8").then(m => m.PriorSwingLocationReference), { loading: VisualLoading }),
  "acceptance-rejection-location": dynamic(() => import("./visuals/module-0-8").then(m => m.AcceptanceRejectionLocation), { loading: VisualLoading }),
  "bad-location-weakens-evidence": dynamic(() => import("./visuals/module-0-8").then(m => m.BadLocationWeakensEvidence), { loading: VisualLoading }),
  "htf-location-changes-story": dynamic(() => import("./visuals/module-0-8").then(m => m.HtfLocationChangesStory), { loading: VisualLoading }),
  "location-first-workflow": dynamic(() => import("./visuals/module-0-8").then(m => m.LocationFirstWorkflow), { loading: VisualLoading }),
  "location-quality-practice-drill": dynamic(() => import("./visuals/module-0-8").then(m => m.LocationQualityPracticeDrill), { loading: VisualLoading }),
  "location-reading-debrief": dynamic(() => import("./visuals/module-0-8").then(m => m.LocationReadingDebrief), { loading: VisualLoading }),

  // --- MODULE 0.8 FOREX ---
  "forex-location-foundation": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexLocationFoundation), { loading: VisualLoading }),
  "forex-session-high-low-location": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexSessionHighLowLocation), { loading: VisualLoading }),
  "forex-session-middle-zone-noise": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexSessionMiddleZoneNoise), { loading: VisualLoading }),
  "forex-london-expansion-location": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexLondonExpansionLocation), { loading: VisualLoading }),
  "forex-new-york-location-shift": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexNewYorkLocationShift), { loading: VisualLoading }),
  "forex-pair-swing-location": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexPairSwingLocation), { loading: VisualLoading }),
  "forex-usd-location-context": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexUsdLocationContext), { loading: VisualLoading }),
  "forex-related-pair-location": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexRelatedPairLocation), { loading: VisualLoading }),
  "forex-location-first-workflow": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexLocationFirstWorkflow), { loading: VisualLoading }),
  "forex-location-quality-practice-drill": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexLocationQualityPracticeDrill), { loading: VisualLoading }),
  "forex-location-debrief": dynamic(() => import("./visuals/module-0-8").then(m => m.ForexLocationDebrief), { loading: VisualLoading }),

  // --- MODULE 0.8 CRYPTO ---
  "crypto-location-foundation": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoLocationFoundation), { loading: VisualLoading }),
  "crypto-btc-location-context": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoBtcLocationContext), { loading: VisualLoading }),
  "crypto-range-edge-vs-middle": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoRangeEdgeVsMiddle), { loading: VisualLoading }),
  "crypto-prior-high-low-location": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoPriorHighLowLocation), { loading: VisualLoading }),
  "crypto-liquidity-location": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoLiquidityLocation), { loading: VisualLoading }),
  "crypto-spot-perp-location-disagreement": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoSpotPerpLocationDisagreement), { loading: VisualLoading }),
  "crypto-dex-cex-location": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoDexCexLocation), { loading: VisualLoading }),
  "crypto-breakout-location-acceptance": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoBreakoutLocationAcceptance), { loading: VisualLoading }),
  "crypto-location-first-workflow": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoLocationFirstWorkflow), { loading: VisualLoading }),
  "crypto-location-quality-practice-drill": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoLocationQualityPracticeDrill), { loading: VisualLoading }),
  "crypto-location-debrief": dynamic(() => import("./visuals/module-0-8").then(m => m.CryptoLocationDebrief), { loading: VisualLoading }),

  // --- MODULE 0.8 GOLD ---
  "gold-location-foundation": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldLocationFoundation), { loading: VisualLoading }),
  "gold-reaction-zone-location": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldReactionZoneLocation), { loading: VisualLoading }),
  "gold-range-middle-noise": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldRangeMiddleNoise), { loading: VisualLoading }),
  "gold-prior-high-low-location": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldPriorHighLowLocation), { loading: VisualLoading }),
  "gold-wick-location-meaning": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldWickLocationMeaning), { loading: VisualLoading }),
  "gold-sweep-location-audit": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldSweepLocationAudit), { loading: VisualLoading }),
  "gold-macro-location-distortion": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldMacroLocationDistortion), { loading: VisualLoading }),
  "gold-htf-location-context": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldHtfLocationContext), { loading: VisualLoading }),
  "gold-location-first-workflow": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldLocationFirstWorkflow), { loading: VisualLoading }),
  "gold-location-quality-practice-drill": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldLocationQualityPracticeDrill), { loading: VisualLoading }),
  "gold-location-debrief": dynamic(() => import("./visuals/module-0-8").then(m => m.GoldLocationDebrief), { loading: VisualLoading }),

  // --- MODULE 0.9 GOLD SPECIALIZED ---
  "gold-reading-lab-foundation": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldReadingLabFoundation), { loading: VisualLoading }),
  "gold-speed-vs-clarity": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldSpeedVsClarity), { loading: VisualLoading }),
  "gold-reaction-zone-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldReactionZoneLab), { loading: VisualLoading }),
  "gold-wick-quality-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldWickQualityLab), { loading: VisualLoading }),
  "gold-sweep-discipline-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldSweepDisciplineLab), { loading: VisualLoading }),
  "gold-close-quality-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldCloseQualityLab), { loading: VisualLoading }),
  "gold-macro-distortion-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldMacroDistortionLab), { loading: VisualLoading }),
  "gold-follow-through-lab": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldFollowThroughLab), { loading: VisualLoading }),
  "gold-reading-sequence": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldReadingSequence), { loading: VisualLoading }),
  "gold-reading-lab-practice-drill": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldReadingLabPracticeDrill), { loading: VisualLoading }),
  "gold-reading-lab-debrief": dynamic(() => import("./visuals/module-0-9").then(m => m.GoldReadingLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.10 FOREX SPECIALIZED ---
  "forex-reading-lab-foundation": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexReadingLabFoundation), { loading: VisualLoading }),
  "forex-pair-pressure-map": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexPairPressureMap), { loading: VisualLoading }),
  "forex-session-context-lab": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexSessionContextLab), { loading: VisualLoading }),
  "forex-session-handoff-lab": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexSessionHandoffLab), { loading: VisualLoading }),
  "forex-dxy-mirror-trap": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexDxyMirrorTrap), { loading: VisualLoading }),
  "forex-related-pair-lab": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexRelatedPairLab), { loading: VisualLoading }),
  "forex-adr-caution-filter": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexAdrCautionFilter), { loading: VisualLoading }),
  "forex-news-distortion-lab": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexNewsDistortionLab), { loading: VisualLoading }),
  "forex-verification-sequence": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexVerificationSequence), { loading: VisualLoading }),
  "forex-reading-lab-practice-drill": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexReadingLabPracticeDrill), { loading: VisualLoading }),
  "forex-reading-lab-debrief": dynamic(() => import("./visuals/module-0-10").then(m => m.ForexReadingLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.11 CRYPTO SPECIALIZED ---
  "crypto-venue-fragmentation-lab-foundation": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoVenueFragmentationLabFoundation), { loading: VisualLoading }),
  "crypto-cex-spot-check": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoCexSpotCheck), { loading: VisualLoading }),
  "crypto-dex-price-impact-lab": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoDexPriceImpactLab), { loading: VisualLoading }),
  "crypto-exchange-disagreement-lab": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoExchangeDisagreementLab), { loading: VisualLoading }),
  "crypto-venue-alignment-lab": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoVenueAlignmentLab), { loading: VisualLoading }),
  "crypto-btc-context-lab-check": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoBtcContextLabCheck), { loading: VisualLoading }),
  "crypto-local-spike-vs-broad-move": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoLocalSpikeVsBroadMove), { loading: VisualLoading }),
  "crypto-post-spike-follow-through": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoPostSpikeFollowThrough), { loading: VisualLoading }),
  "crypto-cross-venue-verification-sequence": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoCrossVenueVerificationSequence), { loading: VisualLoading }),
  "crypto-venue-lab-practice-drill": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoVenueLabPracticeDrill), { loading: VisualLoading }),
  "crypto-venue-lab-debrief": dynamic(() => import("./visuals/module-0-11").then(m => m.CryptoVenueLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.12 CRYPTO DERIVATIVES ---
  "crypto-derivatives-lab-foundation": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoDerivativesLabFoundation), { loading: VisualLoading }),
  "crypto-open-interest-reading-lab": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoOpenInterestReadingLab), { loading: VisualLoading }),
  "crypto-price-oi-combination-board": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoPriceOiCombinationBoard), { loading: VisualLoading }),
  "crypto-funding-pressure-reading": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoFundingPressureReading), { loading: VisualLoading }),
  "crypto-crowded-positioning-fragility": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoCrowdedPositioningFragility), { loading: VisualLoading }),
  "crypto-liquidation-flush-lab": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoLiquidationFlushLab), { loading: VisualLoading }),
  "crypto-long-short-squeeze-board": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoLongShortSqueezeBoard), { loading: VisualLoading }),
  "crypto-post-liquidation-settlement": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoPostLiquidationSettlement), { loading: VisualLoading }),
  "crypto-derivatives-verification-sequence": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoDerivativesVerificationSequence), { loading: VisualLoading }),
  "crypto-derivatives-practice-drill": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoDerivativesPracticeDrill), { loading: VisualLoading }),
  "crypto-derivatives-lab-debrief": dynamic(() => import("./visuals/module-0-12").then(m => m.CryptoDerivativesLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.13 PRACTICE DISCIPLINE ---
  "practice-discipline-lab-foundation": dynamic(() => import("./visuals/module-0-13").then(m => m.PracticeDisciplineLabFoundation), { loading: VisualLoading }),
  "simulator-not-video-game": dynamic(() => import("./visuals/module-0-13").then(m => m.SimulatorNotVideoGame), { loading: VisualLoading }),
  "valid-practice-attempt-board": dynamic(() => import("./visuals/module-0-13").then(m => m.ValidPracticeAttemptBoard), { loading: VisualLoading }),
  "outcome-bias-practice-lab": dynamic(() => import("./visuals/module-0-13").then(m => m.OutcomeBiasPracticeLab), { loading: VisualLoading }),
  "active-idle-stand-aside-lab": dynamic(() => import("./visuals/module-0-13").then(m => m.ActiveIdleStandAsideLab), { loading: VisualLoading }),
  "boredom-clicking-warning-board": dynamic(() => import("./visuals/module-0-13").then(m => m.BoredomClickingWarningBoard), { loading: VisualLoading }),
  "chasing-speed-practice-trap": dynamic(() => import("./visuals/module-0-13").then(m => m.ChasingSpeedPracticeTrap), { loading: VisualLoading }),
  "reading-vs-execution-skill-board": dynamic(() => import("./visuals/module-0-13").then(m => m.ReadingVsExecutionSkillBoard), { loading: VisualLoading }),
  "scenario-replay-protocol-board": dynamic(() => import("./visuals/module-0-13").then(m => m.ScenarioReplayProtocol), { loading: VisualLoading }),
  "practice-discipline-drill": dynamic(() => import("./visuals/module-0-13").then(m => m.PracticeDisciplineDrill), { loading: VisualLoading }),
  "practice-discipline-lab-debrief": dynamic(() => import("./visuals/module-0-13").then(m => m.PracticeDisciplineLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.14 PRACTICE NOTES ---
  "practice-note-lab-foundation": dynamic(() => import("./visuals/module-0-14").then(m => m.PracticeNoteLabFoundation), { loading: VisualLoading }),
  "standard-practice-note-template": dynamic(() => import("./visuals/module-0-14").then(m => m.StandardPracticeNoteTemplate), { loading: VisualLoading }),
  "facts-vs-feelings-note-board": dynamic(() => import("./visuals/module-0-14").then(m => m.FactsVsFeelingsNoteBoard), { loading: VisualLoading }),
  "pre-action-reasoning-note": dynamic(() => import("./visuals/module-0-14").then(m => m.PreActionReasoningNote), { loading: VisualLoading }),
  "review-condition-writing-lab": dynamic(() => import("./visuals/module-0-14").then(m => m.ReviewConditionWritingLab), { loading: VisualLoading }),
  "process-quality-note-audit": dynamic(() => import("./visuals/module-0-14").then(m => m.ProcessQualityNoteAudit), { loading: VisualLoading }),
  "mistake-tagging-framework": dynamic(() => import("./visuals/module-0-14").then(m => m.MistakeTaggingFramework), { loading: VisualLoading }),
  "stand-aside-note-format": dynamic(() => import("./visuals/module-0-14").then(m => m.StandAsideNoteFormat), { loading: VisualLoading }),
  "replay-missed-opportunity-note": dynamic(() => import("./visuals/module-0-14").then(m => m.ReplayMissedOpportunityNote), { loading: VisualLoading }),
  "practice-note-rewrite-drill": dynamic(() => import("./visuals/module-0-14").then(m => m.PracticeNoteRewriteDrill), { loading: VisualLoading }),
  "practice-note-lab-debrief": dynamic(() => import("./visuals/module-0-14").then(m => m.PracticeNoteLabDebrief), { loading: VisualLoading }),

  // --- MODULE 0.15 FOUNDATION MISSION ---
  "level-0-foundation-mission-brief": dynamic(() => import("./visuals/module-0-15").then(m => m.Level0FoundationMissionBrief), { loading: VisualLoading }),
  "raw-observation-mission-layer": dynamic(() => import("./visuals/module-0-15").then(m => m.RawObservationMissionLayer), { loading: VisualLoading }),
  "timeframe-structure-mission-map": dynamic(() => import("./visuals/module-0-15").then(m => m.TimeframeStructureMissionMap), { loading: VisualLoading }),
  "condition-location-mission-crosscheck": dynamic(() => import("./visuals/module-0-15").then(m => m.ConditionLocationMissionCrosscheck), { loading: VisualLoading }),
  "foundation-evidence-stack-builder": dynamic(() => import("./visuals/module-0-15").then(m => m.FoundationEvidenceStackBuilder), { loading: VisualLoading }),
  "asset-specific-trap-check": dynamic(() => import("./visuals/module-0-15").then(m => m.AssetSpecificTrapCheck), { loading: VisualLoading }),
  "verification-question-mission-board": dynamic(() => import("./visuals/module-0-15").then(m => m.VerificationQuestionMissionBoard), { loading: VisualLoading }),
  "practice-decision-mission-gate": dynamic(() => import("./visuals/module-0-15").then(m => m.PracticeDecisionMissionGate), { loading: VisualLoading }),
  "review-note-prep-mission-board": dynamic(() => import("./visuals/module-0-15").then(m => m.ReviewNotePrepMissionBoard), { loading: VisualLoading }),
  "level-0-final-reading-drill": dynamic(() => import("./visuals/module-0-15").then(m => m.Level0FinalReadingDrill), { loading: VisualLoading }),
  "level-0-foundation-mission-debrief": dynamic(() => import("./visuals/module-0-15").then(m => m.Level0FoundationMissionDebrief), { loading: VisualLoading }),

  // --- MODULE 1.1 THE ANATOMY OF A TRADE PLAN ---
  "trade-plan-rationale": dynamic(() => import("./visuals/module-1-1").then(m => m.TradePlanRationale), { loading: VisualLoading }),
  "five-plan-pillars": dynamic(() => import("./visuals/module-1-1").then(m => m.FivePlanPillars), { loading: VisualLoading }),
  "context-location-matrix": dynamic(() => import("./visuals/module-1-1").then(m => m.ContextLocationMatrix), { loading: VisualLoading }),
  "invalidation-vs-target": dynamic(() => import("./visuals/module-1-1").then(m => m.InvalidationVsTarget), { loading: VisualLoading }),
  "plan-validation-drill": dynamic(() => import("./visuals/module-1-1").then(m => m.PlanValidationDrill), { loading: VisualLoading }),
  "trade-plan-debrief": dynamic(() => import("./visuals/module-1-1").then(m => m.TradePlanDebrief), { loading: VisualLoading }),

  "forex-plan-session-windows": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexPlanSessionWindows), { loading: VisualLoading }),
  "forex-session-extremes-invalidation": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexSessionExtremesInvalidation), { loading: VisualLoading }),
  "forex-dxy-correlation-matrix": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexDxyCorrelationMatrix), { loading: VisualLoading }),
  "forex-session-target-mapping": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexSessionTargetMapping), { loading: VisualLoading }),
  "forex-plan-audit-drill": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexPlanAuditDrill), { loading: VisualLoading }),
  "forex-plan-debrief": dynamic(() => import("./visuals/module-1-1").then(m => m.ForexPlanDebrief), { loading: VisualLoading }),

  "gold-plan-volatility-profile": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldPlanVolatilityProfile), { loading: VisualLoading }),
  "gold-wick-invalidation-buffer": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldWickInvalidationBuffer), { loading: VisualLoading }),
  "gold-yield-usd-overlay": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldYieldUsdOverlay), { loading: VisualLoading }),
  "gold-atr-target-mapping": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldAtrTargetMapping), { loading: VisualLoading }),
  "gold-plan-validation-drill": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldPlanValidationDrill), { loading: VisualLoading }),
  "gold-plan-debrief": dynamic(() => import("./visuals/module-1-1").then(m => m.GoldPlanDebrief), { loading: VisualLoading }),

  "crypto-plan-continuous-markets": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoPlanContinuousMarkets), { loading: VisualLoading }),
  "crypto-liquidation-invalidation": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoLiquidationInvalidation), { loading: VisualLoading }),
  "crypto-spot-perp-comparison": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoSpotPerpComparison), { loading: VisualLoading }),
  "crypto-funding-target-mapping": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoFundingTargetMapping), { loading: VisualLoading }),
  "crypto-plan-validation-drill": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoPlanValidationDrill), { loading: VisualLoading }),
  "crypto-plan-debrief": dynamic(() => import("./visuals/module-1-1").then(m => m.CryptoPlanDebrief), { loading: VisualLoading }),

  // --- MODULE 1.2 DEFINING THE INVALIDATION CHECKPOINT ---
  "invalidation-anatomy": dynamic(() => import("./visuals/module-1-2").then(m => m.InvalidationAnatomy), { loading: VisualLoading }),
  "trend-structure-invalidation": dynamic(() => import("./visuals/module-1-2").then(m => m.TrendStructureInvalidation), { loading: VisualLoading }),
  "range-extreme-invalidation": dynamic(() => import("./visuals/module-1-2").then(m => m.RangeExtremeInvalidation), { loading: VisualLoading }),
  "structural-vs-time-invalidation": dynamic(() => import("./visuals/module-1-2").then(m => m.StructuralVsTimeInvalidation), { loading: VisualLoading }),
  "mapping-invalidation-drill": dynamic(() => import("./visuals/module-1-2").then(m => m.MappingInvalidationDrill), { loading: VisualLoading }),
  "invalidation-debrief": dynamic(() => import("./visuals/module-1-2").then(m => m.InvalidationDebrief), { loading: VisualLoading }),

  "forex-invalidation-foundations": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexInvalidationFoundations), { loading: VisualLoading }),
  "forex-spread-safety-stops": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexSpreadSafetyStops), { loading: VisualLoading }),
  "forex-dxy-invalidation-overlay": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexDxyInvalidationOverlay), { loading: VisualLoading }),
  "forex-adr-stop-scaling": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexAdrStopScaling), { loading: VisualLoading }),
  "forex-invalidation-drill-component": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexInvalidationDrillComponent), { loading: VisualLoading }),
  "forex-invalidation-debrief-component": dynamic(() => import("./visuals/module-1-2").then(m => m.ForexInvalidationDebriefComponent), { loading: VisualLoading }),

  "gold-invalidation-foundations": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldInvalidationFoundations), { loading: VisualLoading }),
  "gold-stop-sweep-buffers": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldStopSweepBuffers), { loading: VisualLoading }),
  "gold-yield-invalidation-overlay": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldYieldInvalidationOverlay), { loading: VisualLoading }),
  "gold-stop-position-sizing": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldStopPositionSizing), { loading: VisualLoading }),
  "gold-invalidation-drill-component": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldInvalidationDrillComponent), { loading: VisualLoading }),
  "gold-invalidation-debrief-component": dynamic(() => import("./visuals/module-1-2").then(m => m.GoldInvalidationDebriefComponent), { loading: VisualLoading }),

  "crypto-invalidation-foundations": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoInvalidationFoundations), { loading: VisualLoading }),
  "crypto-spot-perp-stop-divergence": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoSpotPerpStopDivergence), { loading: VisualLoading }),
  "crypto-weekend-vs-weekday-stops": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoWeekendVsWeekdayStops), { loading: VisualLoading }),
  "crypto-funding-risk-stops": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoFundingRiskStops), { loading: VisualLoading }),
  "crypto-invalidation-drill-component": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoInvalidationDrillComponent), { loading: VisualLoading }),
  "crypto-invalidation-debrief-component": dynamic(() => import("./visuals/module-1-2").then(m => m.CryptoInvalidationDebriefComponent), { loading: VisualLoading }),

  // --- MODULE 1.3 MAPPING TARGET LOCATIONS ---
  "target-anatomy": dynamic(() => import("./visuals/module-1-3").then(m => m.TargetAnatomy), { loading: VisualLoading }),
  "structural-target-mapping": dynamic(() => import("./visuals/module-1-3").then(m => m.StructuralTargetMapping), { loading: VisualLoading }),
  "timeframe-target-alignment": dynamic(() => import("./visuals/module-1-3").then(m => m.TimeframeTargetAlignment), { loading: VisualLoading }),
  "fixed-vs-trailing-exits": dynamic(() => import("./visuals/module-1-3").then(m => m.FixedVsTrailingExits), { loading: VisualLoading }),
  "mapping-targets-drill": dynamic(() => import("./visuals/module-1-3").then(m => m.MappingTargetsDrill), { loading: VisualLoading }),
  "target-debrief": dynamic(() => import("./visuals/module-1-3").then(m => m.TargetDebrief), { loading: VisualLoading }),

  "forex-target-foundations": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexTargetFoundations), { loading: VisualLoading }),
  "forex-session-liquidity-targets": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexSessionLiquidityTargets), { loading: VisualLoading }),
  "forex-dxy-target-overlay": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexDxyTargetOverlay), { loading: VisualLoading }),
  "forex-adr-target-scaling-visual": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexAdrTargetScalingVisual), { loading: VisualLoading }),
  "forex-target-drill-component": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexTargetDrillComponent), { loading: VisualLoading }),
  "forex-target-debrief-component": dynamic(() => import("./visuals/module-1-3").then(m => m.ForexTargetDebriefComponent), { loading: VisualLoading }),

  "gold-target-foundations": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldTargetFoundations), { loading: VisualLoading }),
  "gold-wick-targets": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldWickTargets), { loading: VisualLoading }),
  "gold-yield-target-overlay": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldYieldTargetOverlay), { loading: VisualLoading }),
  "gold-target-ranges": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldTargetRanges), { loading: VisualLoading }),
  "gold-target-drill-component": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldTargetDrillComponent), { loading: VisualLoading }),
  "gold-target-debrief-component": dynamic(() => import("./visuals/module-1-3").then(m => m.GoldTargetDebriefComponent), { loading: VisualLoading }),

  "crypto-target-foundations": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoTargetFoundations), { loading: VisualLoading }),
  "crypto-ask-wall-targets": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoAskWallTargets), { loading: VisualLoading }),
  "crypto-spot-perp-target-peg": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoSpotPerpTargetPeg), { loading: VisualLoading }),
  "crypto-funding-target-scaling": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoFundingTargetScaling), { loading: VisualLoading }),
  "crypto-target-drill-component": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoTargetDrillComponent), { loading: VisualLoading }),
  "crypto-target-debrief-component": dynamic(() => import("./visuals/module-1-3").then(m => m.CryptoTargetDebriefComponent), { loading: VisualLoading }),

  // --- MODULE 1.4 RISK-REWARD & FEASIBILITY ---
  "rr-anatomy": dynamic(() => import("./visuals/module-1-4").then(m => m.RrAnatomy), { loading: VisualLoading }),
  "rr-ratio-scale": dynamic(() => import("./visuals/module-1-4").then(m => m.RrRatioScale), { loading: VisualLoading }),
  "winrate-vs-rr": dynamic(() => import("./visuals/module-1-4").then(m => m.WinrateVsRr), { loading: VisualLoading }),
  "expectancy-calculator": dynamic(() => import("./visuals/module-1-4").then(m => m.ExpectancyCalculator), { loading: VisualLoading }),
  "rr-feasibility-drill": dynamic(() => import("./visuals/module-1-4").then(m => m.RrFeasibilityDrill), { loading: VisualLoading }),
  "rr-debrief": dynamic(() => import("./visuals/module-1-4").then(m => m.RrDebrief), { loading: VisualLoading }),

  "forex-rr-foundations": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexRrFoundations), { loading: VisualLoading }),
  "forex-leverage-math": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexLeverageMath), { loading: VisualLoading }),
  "forex-spread-rr-decay": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexSpreadRrDecay), { loading: VisualLoading }),
  "forex-commission-costs": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexCommissionCosts), { loading: VisualLoading }),
  "forex-rr-drill-component": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexRrDrillComponent), { loading: VisualLoading }),
  "forex-rr-debrief-component": dynamic(() => import("./visuals/module-1-4").then(m => m.ForexRrDebriefComponent), { loading: VisualLoading }),

  "gold-rr-foundations": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldRrFoundations), { loading: VisualLoading }),
  "gold-leverage-sizing": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldLeverageSizing), { loading: VisualLoading }),
  "gold-spread-slippage": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldSpreadSlippage), { loading: VisualLoading }),
  "gold-real-yields-rr": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldRealYieldsRr), { loading: VisualLoading }),
  "gold-rr-drill-component": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldRrDrillComponent), { loading: VisualLoading }),
  "gold-rr-debrief-component": dynamic(() => import("./visuals/module-1-4").then(m => m.GoldRrDebriefComponent), { loading: VisualLoading }),

  "crypto-rr-foundations": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoRrFoundations), { loading: VisualLoading }),
  "crypto-leverage-sizing": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoLeverageSizing), { loading: VisualLoading }),
  "crypto-slippage-depth": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoSlippageDepth), { loading: VisualLoading }),
  "crypto-funding-rates-decay": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoFundingRatesDecay), { loading: VisualLoading }),
  "crypto-rr-drill-component": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoRrDrillComponent), { loading: VisualLoading }),
  "crypto-rr-debrief-component": dynamic(() => import("./visuals/module-1-4").then(m => m.CryptoRrDebriefComponent), { loading: VisualLoading }),

  // --- MODULE 1.5 COMPLETE PLAN SYNTHESIS & LEVEL 1 GATE ---
  "synthesis-brief": dynamic(() => import("./visuals/module-1-5").then(m => m.SynthesisBrief), { loading: VisualLoading }),
  "synthesis-checklist": dynamic(() => import("./visuals/module-1-5").then(m => m.SynthesisChecklist), { loading: VisualLoading }),
  "plan-builder-panel": dynamic(() => import("./visuals/module-1-5").then(m => m.PlanBuilderPanel), { loading: VisualLoading }),
  "plan-audit-comparison": dynamic(() => import("./visuals/module-1-5").then(m => m.PlanAuditComparison), { loading: VisualLoading }),
  "level-1-gate-drill": dynamic(() => import("./visuals/module-1-5").then(m => m.Level1GateDrill), { loading: VisualLoading }),
  "synthesis-debrief": dynamic(() => import("./visuals/module-1-5").then(m => m.SynthesisDebrief), { loading: VisualLoading }),

  "forex-synthesis-brief": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexSynthesisBrief), { loading: VisualLoading }),
  "forex-synthesis-checklist": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexSynthesisChecklist), { loading: VisualLoading }),
  "forex-plan-builder-panel": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexPlanBuilderPanel), { loading: VisualLoading }),
  "forex-plan-audit-comparison": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexPlanAuditComparison), { loading: VisualLoading }),
  "forex-level-1-gate-drill": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexLevel1GateDrill), { loading: VisualLoading }),
  "forex-synthesis-debrief": dynamic(() => import("./visuals/module-1-5").then(m => m.ForexSynthesisDebrief), { loading: VisualLoading }),

  "gold-synthesis-brief": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldSynthesisBrief), { loading: VisualLoading }),
  "gold-synthesis-checklist": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldSynthesisChecklist), { loading: VisualLoading }),
  "gold-plan-builder-panel": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldPlanBuilderPanel), { loading: VisualLoading }),
  "gold-plan-audit-comparison": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldPlanAuditComparison), { loading: VisualLoading }),
  "gold-level-1-gate-drill": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldLevel1GateDrill), { loading: VisualLoading }),
  "gold-synthesis-debrief": dynamic(() => import("./visuals/module-1-5").then(m => m.GoldSynthesisDebrief), { loading: VisualLoading }),

  "crypto-synthesis-brief": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoSynthesisBrief), { loading: VisualLoading }),
  "crypto-synthesis-checklist": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoSynthesisChecklist), { loading: VisualLoading }),
  "crypto-plan-builder-panel": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoPlanBuilderPanel), { loading: VisualLoading }),
  "crypto-plan-audit-comparison": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoPlanAuditComparison), { loading: VisualLoading }),
  "crypto-level-1-gate-drill": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoLevel1GateDrill), { loading: VisualLoading }),
  "crypto-synthesis-debrief": dynamic(() => import("./visuals/module-1-5").then(m => m.CryptoSynthesisDebrief), { loading: VisualLoading }),


  // --- LEVEL 1 EXPANSION VISUALS (Modules 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.11, 1.12, 1.13) ---
  "hypothesis-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.HypothesisIntro), { loading: VisualLoading }),
  "hypothesis-sentence-builder": dynamic(() => import("./visuals/shared-l1").then(m => m.HypothesisSentenceBuilder), { loading: VisualLoading }),
  "watch-vs-plan": dynamic(() => import("./visuals/shared-l1").then(m => m.WatchVsPlan), { loading: VisualLoading }),
  "pass-fail-gate": dynamic(() => import("./visuals/shared-l1").then(m => m.PassFailGate), { loading: VisualLoading }),
  "forex-quote-pressure": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexQuotePressure), { loading: VisualLoading }),
  "gold-zone-volatility": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldZoneVolatility), { loading: VisualLoading }),
  "crypto-venue-btc": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoVenueBtc), { loading: VisualLoading }),
  "hypothesis-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.HypothesisDebrief), { loading: VisualLoading }),

  "filter-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.FilterIntro), { loading: VisualLoading }),
  "evidence-threshold": dynamic(() => import("./visuals/shared-l1").then(m => m.EvidenceThreshold), { loading: VisualLoading }),
  "unclear-reading-rejection": dynamic(() => import("./visuals/shared-l1").then(m => m.UnclearReadingRejection), { loading: VisualLoading }),
  "weak-plan-warning": dynamic(() => import("./visuals/shared-l1").then(m => m.WeakPlanWarning), { loading: VisualLoading }),
  "forex-mixed-pressure-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexMixedPressureFilter), { loading: VisualLoading }),
  "gold-spike-verification-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldSpikeVerificationFilter), { loading: VisualLoading }),
  "crypto-venue-disagreement-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoVenueDisagreementFilter), { loading: VisualLoading }),
  "filter-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.FilterDebrief), { loading: VisualLoading }),

  "planning-zone-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.PlanningZoneIntro), { loading: VisualLoading }),
  "aoi-mapping": dynamic(() => import("./visuals/shared-l1").then(m => m.AoiMapping), { loading: VisualLoading }),
  "reaction-area-identification": dynamic(() => import("./visuals/shared-l1").then(m => m.ReactionAreaIdentification), { loading: VisualLoading }),
  "middle-zone-warning-drill": dynamic(() => import("./visuals/shared-l1").then(m => m.MiddleZoneWarningDrill), { loading: VisualLoading }),
  "forex-session-aoi": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexSessionAoi), { loading: VisualLoading }),
  "gold-wick-cluster-aoi": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldWickClusterAoi), { loading: VisualLoading }),
  "crypto-liquidity-pool-aoi": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoLiquidityPoolAoi), { loading: VisualLoading }),
  "aoi-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.AoiDebrief), { loading: VisualLoading }),

  "plan-context-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.PlanContextIntro), { loading: VisualLoading }),
  "trend-plan-mapping": dynamic(() => import("./visuals/shared-l1").then(m => m.TrendPlanMapping), { loading: VisualLoading }),
  "range-plan-mapping": dynamic(() => import("./visuals/shared-l1").then(m => m.RangePlanMapping), { loading: VisualLoading }),
  "breakout-plan-mapping": dynamic(() => import("./visuals/shared-l1").then(m => m.BreakoutPlanMapping), { loading: VisualLoading }),
  "forex-session-context-requirement": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexSessionContextRequirement), { loading: VisualLoading }),
  "gold-volatility-regime-requirement": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldVolatilityRegimeRequirement), { loading: VisualLoading }),
  "crypto-btc-state-requirement": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoBtcStateRequirement), { loading: VisualLoading }),
  "plan-context-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.PlanContextDebrief), { loading: VisualLoading }),

  "trigger-design-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.TriggerDesignIntro), { loading: VisualLoading }),
  "candle-trigger-mechanics": dynamic(() => import("./visuals/shared-l1").then(m => m.CandleTriggerMechanics), { loading: VisualLoading }),
  "level-trigger-mechanics": dynamic(() => import("./visuals/shared-l1").then(m => m.LevelTriggerMechanics), { loading: VisualLoading }),
  "timing-trigger-mechanics": dynamic(() => import("./visuals/shared-l1").then(m => m.TimingTriggerMechanics), { loading: VisualLoading }),
  "forex-session-trigger": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexSessionTrigger), { loading: VisualLoading }),
  "gold-zone-reaction-trigger": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldZoneReactionTrigger), { loading: VisualLoading }),
  "crypto-venue-confirmed-trigger": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoVenueConfirmedTrigger), { loading: VisualLoading }),
  "trigger-design-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.TriggerDesignDebrief), { loading: VisualLoading }),

  "confirmation-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.ConfirmationIntro), { loading: VisualLoading }),
  "close-quality-confirmation": dynamic(() => import("./visuals/shared-l1").then(m => m.CloseQualityConfirmation), { loading: VisualLoading }),
  "follow-through-confirmation": dynamic(() => import("./visuals/shared-l1").then(m => m.FollowThroughConfirmation), { loading: VisualLoading }),
  "failed-confirmation-trap": dynamic(() => import("./visuals/shared-l1").then(m => m.FailedConfirmationTrap), { loading: VisualLoading }),
  "forex-session-news-confirmation": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexSessionNewsConfirmation), { loading: VisualLoading }),
  "gold-wick-noise-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldWickNoiseFilter), { loading: VisualLoading }),
  "crypto-venue-quality-confirmation": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoVenueQualityConfirmation), { loading: VisualLoading }),
  "confirmation-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.ConfirmationDebrief), { loading: VisualLoading }),

  "activation-cancellation-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.ActivationCancellationIntro), { loading: VisualLoading }),
  "activation-rules": dynamic(() => import("./visuals/shared-l1").then(m => m.ActivationRules), { loading: VisualLoading }),
  "cancellation-rules": dynamic(() => import("./visuals/shared-l1").then(m => m.CancellationRules), { loading: VisualLoading }),
  "missed-plan-cancellation": dynamic(() => import("./visuals/shared-l1").then(m => m.MissedPlanCancellation), { loading: VisualLoading }),
  "forex-session-handoff-cancellation": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexSessionHandoffCancellation), { loading: VisualLoading }),
  "gold-macro-distortion-cancellation": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldMacroDistortionCancellation), { loading: VisualLoading }),
  "crypto-liquidity-spike-cancellation": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoLiquiditySpikeCancellation), { loading: VisualLoading }),
  "activation-cancellation-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.ActivationCancellationDebrief), { loading: VisualLoading }),

  "timing-plan-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.TimingPlanIntro), { loading: VisualLoading }),
  "valid-timing-window": dynamic(() => import("./visuals/shared-l1").then(m => m.ValidTimingWindow), { loading: VisualLoading }),
  "dead-timing-window": dynamic(() => import("./visuals/shared-l1").then(m => m.DeadTimingWindow), { loading: VisualLoading }),
  "late-plan-warning": dynamic(() => import("./visuals/shared-l1").then(m => m.LatePlanWarning), { loading: VisualLoading }),
  "forex-timing-session-matrix": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexTimingSessionMatrix), { loading: VisualLoading }),
  "gold-macro-release-timing": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldMacroReleaseTiming), { loading: VisualLoading }),
  "crypto-funding-window-timing": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoFundingWindowTiming), { loading: VisualLoading }),
  "timing-plan-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.TimingPlanDebrief), { loading: VisualLoading }),

  "event-filter-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.EventFilterIntro), { loading: VisualLoading }),
  "news-event-risk": dynamic(() => import("./visuals/shared-l1").then(m => m.NewsEventRisk), { loading: VisualLoading }),
  "first-move-distortion-trap": dynamic(() => import("./visuals/shared-l1").then(m => m.FirstMoveDistortionTrap), { loading: VisualLoading }),
  "post-event-confirmation-rule": dynamic(() => import("./visuals/shared-l1").then(m => m.PostEventConfirmationRule), { loading: VisualLoading }),
  "forex-cpi-nfp-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexCpiNfpFilter), { loading: VisualLoading }),
  "gold-yield-usd-news-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldYieldUsdNewsFilter), { loading: VisualLoading }),
  "crypto-unlock-liquidation-filter": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoUnlockLiquidationFilter), { loading: VisualLoading }),
  "event-filter-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.EventFilterDebrief), { loading: VisualLoading }),

  "plan-quality-intro": dynamic(() => import("./visuals/shared-l1").then(m => m.PlanQualityIntro), { loading: VisualLoading }),
  "grading-completeness": dynamic(() => import("./visuals/shared-l1").then(m => m.GradingCompleteness), { loading: VisualLoading }),
  "grading-clarity": dynamic(() => import("./visuals/shared-l1").then(m => m.GradingClarity), { loading: VisualLoading }),
  "grading-evidence-fit": dynamic(() => import("./visuals/shared-l1").then(m => m.GradingEvidenceFit), { loading: VisualLoading }),
  "forex-plan-score-sheet": dynamic(() => import("./visuals/shared-l1").then(m => m.ForexPlanScoreSheet), { loading: VisualLoading }),
  "gold-plan-score-sheet": dynamic(() => import("./visuals/shared-l1").then(m => m.GoldPlanScoreSheet), { loading: VisualLoading }),
  "crypto-plan-score-sheet": dynamic(() => import("./visuals/shared-l1").then(m => m.CryptoPlanScoreSheet), { loading: VisualLoading }),
  "plan-quality-debrief": dynamic(() => import("./visuals/shared-l1").then(m => m.PlanQualityDebrief), { loading: VisualLoading }),

  // --- ALIASES (Backward Compatibility) ---
  // These keys ensure that legacy data in the database still renders correctly 
  // during the transition to standardized keys.
  "transaction-mechanism": dynamic(() => import("./visuals/core/module-0-2").then(m => m.TransactionMechanismMiniVisual), { loading: VisualLoading }),
  "intent-logic": dynamic(() => import("./visuals/core/module-0-2").then(m => m.IntentLogicBoardVisual), { loading: VisualLoading }),
  "forex-instruments": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexInstrumentPanel), { loading: VisualLoading }),
  "forex-mini-drill": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexMiniDrillBoard), { loading: VisualLoading }),
  "forex-network": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexNetworkVisual), { loading: VisualLoading }),
  "forex-quote-panel": dynamic(() => import("./visuals/forex/module-0-2").then(m => m.ForexQuotePanelVisual), { loading: VisualLoading }),
  "forex-pip-candle": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexPipCandleBoard), { loading: VisualLoading }),
  "forex-distorted-candle": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexDistortedCandleBoard), { loading: VisualLoading }),
  "forex-candle-decision": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexCandleDecisionBoard), { loading: VisualLoading }),
  "forex-session-liquidity": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexSessionLiquidityVisual), { loading: VisualLoading }),
  "forex-quote-quality-drill": dynamic(() => import("./visuals/forex/module-0-3").then(m => m.ForexQuoteQualityDrillVisual), { loading: VisualLoading }),
  "gold-urgency-trap": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldUrgencyTrapVisual), { loading: VisualLoading }),
  "gold-noise-decision": dynamic(() => import("./visuals/gold/module-0-1").then(m => m.GoldNoiseDecisionBoard), { loading: VisualLoading }),
  "gold-market-map": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldMarketMapVisual), { loading: VisualLoading }),
  "gold-otc-bilateral": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldOTCBilateralVisual), { loading: VisualLoading }),
  "gold-futures-mechanics": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldFuturesMechanicsVisual), { loading: VisualLoading }),
  "gold-market-layer-drill": dynamic(() => import("./visuals/gold/module-0-2").then(m => m.GoldMarketLayerDrillVisual), { loading: VisualLoading }),
  "crypto-mechanics": dynamic(() => import("./visuals/crypto/module-0-1").then(m => m.CryptoMechanicsMap), { loading: VisualLoading }),
  "crypto-venue-map": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoVenueMapVisual), { loading: VisualLoading }),
  "crypto-market-engines": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoMarketEnginesVisual), { loading: VisualLoading }),
  "crypto-liquidity-fragmentation": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoLiquidityFragmentationVisual), { loading: VisualLoading }),
  "crypto-venue-noise-drill": dynamic(() => import("./visuals/crypto/module-0-2").then(m => m.CryptoVenueNoiseDrillVisual), { loading: VisualLoading }),

  // --- LEVEL 2 EXECUTION MECHANICS ---
  // Module 2.1
  "chart-basics-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "candle-anatomy": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "ohlc-delivery": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "timeframe-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "chart-basics-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "forex-pip-value": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "gold-spread-volatility": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),
  "crypto-venue-mismatch": dynamic(() => import("./visuals/shared-l2").then(m => m.ChartBasicsVisual), { loading: VisualLoading }),

  // Module 2.2
  "fractal-nature-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "swing-mirroring": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "multi-timeframe-scaling": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "structure-fractions": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "fractal-nature-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "forex-h4-m15-scaling": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "gold-wick-clusters-scaling": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),
  "crypto-venue-spikes-scaling": dynamic(() => import("./visuals/shared-l2").then(m => m.FractalNatureVisual), { loading: VisualLoading }),

  // Module 2.3
  "price-feeds-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "direct-market-access": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "b-book-broker": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "spread-slippage": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "price-feeds-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "forex-stp-execution": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "gold-comex-futures-feeds": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),
  "crypto-cex-dex-fragmentation": dynamic(() => import("./visuals/shared-l2").then(m => m.PrimaryPriceFeedsVisual), { loading: VisualLoading }),

  // Module 2.4
  "range-model-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "dealing-range-bounds": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "equilibrium-line": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "discount-premium-arrays": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "range-model-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "forex-adr-stretch-range": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "gold-volatility-adjusted-zones": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),
  "crypto-perp-funding-premium": dynamic(() => import("./visuals/shared-l2").then(m => m.RangeModelVisual), { loading: VisualLoading }),

  // Module 2.5
  "structure-part1-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "protected-swings": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "swing-validation": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "market-structure-breaks": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "structure-part1-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "forex-session-structure-limits": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "gold-wick-structure-sweeps": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),
  "crypto-venue-confirmed-structure": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructurePart1Visual), { loading: VisualLoading }),

  // Module 2.6
  "mss-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "displacement-confirm": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "swing-invalidation": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "change-of-character": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "mss-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "forex-london-open-mss": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "gold-rapid-sweeps-mss": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),
  "crypto-funding-oi-shift": dynamic(() => import("./visuals/shared-l2").then(m => m.MarketStructureShiftVisual), { loading: VisualLoading }),

  // Module 2.7
  "trend-fallacy-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "liquidity-to-liquidity": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "retail-trend-traps": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "order-matching-flow": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "trend-fallacy-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "forex-session-rotation-fallacy": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "gold-safe-haven-sweeps": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),
  "crypto-tokenomics-sweeps": dynamic(() => import("./visuals/shared-l2").then(m => m.TrendFallacyVisual), { loading: VisualLoading }),

  // Module 2.8
  "internal-external-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "minor-pullbacks": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "major-dealing-ranges": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "layer-filtering": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "internal-external-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "forex-session-vs-macro-structure": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "gold-wicks-vs-daily-anchors": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),
  "crypto-altcoin-vs-btc-structure": dynamic(() => import("./visuals/shared-l2").then(m => m.InternalExternalStructureVisual), { loading: VisualLoading }),

  // Module 2.9
  "displacement-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "body-to-wick-ratio": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "volume-displacement": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "commitment-candles": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "displacement-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "forex-london-breakout-displacement": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "gold-news-displacement-wicks": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),
  "crypto-perp-liquidation-displacement": dynamic(() => import("./visuals/shared-l2").then(m => m.DisplacementVisual), { loading: VisualLoading }),

  // Module 2.10
  "breakouts-failed-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "close-quality-validation": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "sweep-rejection-signs": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "breakout-confirmation-rules": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "breakouts-failed-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "forex-session-breakout-fade": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "gold-stop-sweeps-rejections": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),
  "crypto-spot-perp-deviations": dynamic(() => import("./visuals/shared-l2").then(m => m.BreakoutsFailedBreaksVisual), { loading: VisualLoading }),

  // Module 2.11
  "boundary-areas-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "bsl-mapping": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "ssl-mapping": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "resting-liquidity-pools": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "boundary-areas-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "forex-session-extremes-liquidity": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "gold-wicks-liquidity-pools": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),
  "crypto-liquidation-heatmap-zones": dynamic(() => import("./visuals/shared-l2").then(m => m.BoundaryAreasVisual), { loading: VisualLoading }),

  // Module 2.12
  "external-boundary-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "htf-range-extremes": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "boundary-acceptance": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "boundary-rejection": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "external-boundary-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "forex-daily-adr-bands": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "gold-monthly-range-bounds": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),
  "crypto-cex-dex-margin-bounds": dynamic(() => import("./visuals/shared-l2").then(m => m.ExternalRangeBoundaryVisual), { loading: VisualLoading }),

  // Module 2.13
  "htf-anchors-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "daily-weekly-levels": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "anchor-strength-metrics": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "confluence-anchors": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "htf-anchors-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "forex-dxy-structure-anchors": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "gold-treasury-yield-levels": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),
  "crypto-btc-macro-levels": dynamic(() => import("./visuals/shared-l2").then(m => m.HtfAnchorsVisual), { loading: VisualLoading }),

  // Module 2.14
  "session-windows-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "london-ny-opens": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "volume-overlap-windows": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "timing-rules-execution": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "session-windows-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "forex-session-overlaps": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "gold-comex-open-window": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),
  "crypto-funding-settlement-times": dynamic(() => import("./visuals/shared-l2").then(m => m.SessionWindowsVisual), { loading: VisualLoading }),

  // Module 2.15
  "level2-review-intro": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "execution-mechanics-checklist": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "interactive-terminal-prep": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "exam-rubric-overview": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "level2-review-debrief": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "forex-multi-pair-audit": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "gold-macro-checklist": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
  "crypto-spot-futures-checklist": dynamic(() => import("./visuals/shared-l2").then(m => m.Level2ReviewVisual), { loading: VisualLoading }),
};

