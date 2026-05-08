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
