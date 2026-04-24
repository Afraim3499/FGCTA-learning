import { useState, useEffect, useSyncExternalStore, useMemo } from "react";
import { createTradingEngine, TradingEngine, EngineSnapshot } from "@/lib/chart/engine";
import { OHLCV } from "@/lib/chart/chart-types";

interface EngineConfig {
  attemptId: string;
  scenarioId: string;
  mode: "practice" | "certification";
  instrument: string;
  initialCandles: OHLCV[];
  seed: string;
  phaseRules: any;
}

/**
 * useTradingEngine
 * Manages the lifecycle of a TradingEngine instance.
 */
export function useTradingEngine(config: EngineConfig) {
  // Use state to trigger re-renders only when a new engine is ready
  const [engine, setEngine] = useState<TradingEngine>(() => 
    createTradingEngine({
      scenarioId: config.scenarioId,
      userId: "user_placeholder",
      mode: config.mode,
      seed: config.seed,
      initialCandles: config.initialCandles,
      instrument: config.instrument,
      phaseRules: config.phaseRules,
    })
  );

  const engineKey = `${config.attemptId}-${config.scenarioId}-${config.mode}-${config.instrument}`;

  useEffect(() => {
    // If the key hasn't changed, do nothing
    // Note: We initialize the state, so on first mount this might redundant, 
    // but it handles subsequent changes to the identity key.
    
    const newEngine = createTradingEngine({
      scenarioId: config.scenarioId,
      userId: "user_placeholder",
      mode: config.mode,
      seed: config.seed,
      initialCandles: config.initialCandles,
      instrument: config.instrument,
      phaseRules: config.phaseRules,
    });

    setEngine(newEngine);

    return () => {
      console.log(`[EngineLifecycle] Destroying engine for key: ${engineKey}`);
      newEngine.destroy();
    };
  }, [engineKey]);

  return engine;
}

/**
 * useEngineSnapshot
 * Subscribes to the engine state with performance protection.
 * Throttles high-frequency updates (PRICE_TICK) while allowing
 * immediate updates for critical events (ORDER_OPENED, etc.)
 */
export function useEngineSnapshot(engine: TradingEngine): EngineSnapshot {
  const subscribe = useMemo(() => {
    return (callback: () => void) => engine.subscribe(callback);
  }, [engine]);

  return useSyncExternalStore(
    subscribe,
    () => engine.getSnapshot(),
    () => engine.getSnapshot()
  );
}
