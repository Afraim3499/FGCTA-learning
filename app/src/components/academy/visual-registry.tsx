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
};
