import type { Tick, OHLCV } from "./chart-types";
import { ReplayLoop } from "./replay-loop";
import type { ReplayCursor } from "./replay-loop";
import { OrderEngine, PortfolioEngine, RulesEngine } from "./order-engine";

// --- Event Bus Types ---
export type EngineEventType =
  | "PRICE_TICK"
  | "CANDLE_UPDATE"
  | "ORDER_OPENED"
  | "ORDER_CLOSED"
  | "STOP_TRIGGERED"
  | "TAKE_PROFIT_TRIGGERED"
  | "PNL_UPDATED"
  | "RULE_VIOLATION"
  | "SCENARIO_COMPLETE"
  | "ENGINE_STARTED"
  | "ENGINE_PAUSED"
  | "ENGINE_RESUMED"
  | "ENGINE_RESET"
  | "ENGINE_DESTROYED";

export interface EventPayloads {
  PRICE_TICK: Tick;
  CANDLE_UPDATE: OHLCV;
  ORDER_OPENED: { id: string; price: number; direction: string; size: number };
  ORDER_CLOSED: { id: string; price: number; pnl: number };
  STOP_TRIGGERED: { id: string; price: number };
  TAKE_PROFIT_TRIGGERED: { id: string; price: number };
  PNL_UPDATED: { floatingPnl: number; equity: number };
  RULE_VIOLATION: { ruleId: string; description: string };
  SCENARIO_COMPLETE: { outcome: "passed" | "failed"; reason: string };
  ENGINE_STARTED: void;
  ENGINE_PAUSED: void;
  ENGINE_RESUMED: void;
  ENGINE_RESET: void;
  ENGINE_DESTROYED: void;
}

export type EventHandler<T extends EngineEventType> = (payload: EventPayloads[T]) => void;

// --- Isolated Event Bus ---
export class EventBus {
  private listeners: { [K in EngineEventType]?: EventHandler<K>[] } = {};

  on<T extends EngineEventType>(event: T, handler: EventHandler<T>) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(handler);
  }

  off<T extends EngineEventType>(event: T, handler: EventHandler<T>) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event]!.filter((h) => h !== handler) as any;
  }

  emit<T extends EngineEventType>(event: T, payload: EventPayloads[T]) {
    if (!this.listeners[event]) return;
    for (const handler of this.listeners[event]!) {
      handler(payload);
    }
  }

  destroy() {
    this.listeners = {};
  }
}

// --- Engine Configuration & State ---
export interface EngineConfig {
  scenarioId: string;
  userId: string;
  mode: "practice" | "certification";
  seed: string;
  initialCandles: OHLCV[];
  instrument: string;
  phaseRules: any;
}

export interface EngineSnapshot {
  status: "idle" | "running" | "paused" | "complete" | "destroyed";
  equity: number;
  floatingPnl: number;
  openPositions: any[];
  currentPrice: number | null;
  candleIndex: number;
  tickIndex: number;
  globalTickIndex: number;
  simulatedTimestamp: number;
  speed: number;
}

// --- Core Engine Class ---
export class TradingEngine {
  public readonly eventBus: EventBus;
  private config: EngineConfig;
  public replayLoop: ReplayLoop;
  
  // Dummy internal states representing the sub-engines for this skeleton
  private scenarioState: { currentTick: Tick | null; equity: number; positions: any[] } = {
    currentTick: null,
    equity: 10000,
    positions: [],
  };

  private OrderEngine!: OrderEngine;
  private portfolioEngine!: PortfolioEngine;
  private rulesEngine!: RulesEngine;

  constructor(config: EngineConfig) {
    this.config = config;
    this.eventBus = new EventBus();
    
    this.replayLoop = new ReplayLoop({
      candles: config.initialCandles,
      seed: config.seed,
      instrument: config.instrument,
      ticksPerSecond: 10,
      onTick: (tick, isCandleClose) => {
        // Broadcast Event
        this.eventBus.emit("PRICE_TICK", tick);
      },
      onCandleComplete: (candle) => {
        this.eventBus.emit("CANDLE_UPDATE", candle);
      },
      onComplete: () => {
        this.eventBus.emit("SCENARIO_COMPLETE", { outcome: "passed", reason: "Simulation ended" });
      }
    });

    this.initializeSubEngines();
    
    // Initialize starting price from first candle if available
    if (config.initialCandles.length > 0) {
      const firstCandle = config.initialCandles[0];
      this.scenarioState.currentTick = {
        price: firstCandle.close,
        bid: firstCandle.close - (config.phaseRules.spread || 0.0002) / 2,
        ask: firstCandle.close + (config.phaseRules.spread || 0.0002) / 2,
        time: firstCandle.time,
        volume: firstCandle.volume
      };
    } else {
      this.scenarioState.currentTick = null;
    }
  }

  private initializeSubEngines() {
    this.portfolioEngine = new PortfolioEngine(10000);
    this.OrderEngine = new OrderEngine(
      this.config,
      this.eventBus,
      () => this.replayLoop.cursor,
      () => this.portfolioEngine.positions,
      () => this.portfolioEngine.equity
    );
    this.rulesEngine = new RulesEngine(this.config, this.eventBus);

    // Event Ordering Rule Implementation
    this.eventBus.on("PRICE_TICK", (tick) => {
      this.scenarioState.currentTick = tick;

      // 1. Execution Engine checks SL/TP
      this.OrderEngine.checkTriggers(tick);

      // 2. Portfolio Engine updates floating PnL
      const { floatingPnl, equity } = this.portfolioEngine.evaluateTick(tick);
      
      // Emit PNL_UPDATED only if meaningfully changed
      if (Math.abs(this.scenarioState.equity - equity) > 0.01 || this.portfolioEngine.positions.length > 0) {
        this.scenarioState.equity = equity;
        this.eventBus.emit("PNL_UPDATED", { floatingPnl, equity });
      }

      // 3. Rules Engine checks active violations
      const drawdownPct = this.portfolioEngine.getDrawdownPercentage(equity);
      this.rulesEngine.evaluateRules(equity, drawdownPct, this.portfolioEngine.positions);

      // 4. Telemetry Engine records tick/action data (Placeholder)
    });

    // Handle Order Lifecycle Sync
    this.eventBus.on("ORDER_CLOSED", (payload) => {
      this.portfolioEngine.removePosition(payload.id, payload.price);
      this.scenarioState.equity = this.portfolioEngine.equity;
    });
  }

  // --- External Execution Interface ---
  public executeMarketOrder(intent: { direction: "buy" | "sell"; size: number; stopLoss?: number | null; takeProfit?: number | null }) {
    if (this.replayLoop.cursor.status !== "running") return null;
    if (!this.scenarioState.currentTick) return null;

    const posData = this.OrderEngine.executeMarketOrder(intent, this.scenarioState.currentTick);
    
    if (!posData) return null;

    // Add to portfolio
    this.portfolioEngine.addPosition({
      id: posData.orderId,
      instrument: this.config.instrument,
      direction: posData.direction,
      size: posData.size,
      openPrice: posData.fillPrice,
      stopLoss: posData.stopLoss,
      takeProfit: posData.takeProfit,
      floatingPnl: 0,
      initialRiskAmount: posData.initialRiskAmount,
    });

    return posData;
  }

  public closePosition(id: string) {
    if (this.replayLoop.cursor.status !== "running") return;
    if (!this.scenarioState.currentTick) return;
    this.OrderEngine.closePositionManual(id, this.scenarioState.currentTick);
  }

  // Phase 5: Expose Trade Log
  public get tradeLog() {
    return this.OrderEngine.tradeLog;
  }

  // --- Lifecycle Methods ---
  public start() {
    if (this.replayLoop.cursor.status === "destroyed") return;
    this.replayLoop.start();
    this.eventBus.emit("ENGINE_STARTED", undefined);
  }

  public pause() {
    this.replayLoop.pause();
    this.eventBus.emit("ENGINE_PAUSED", undefined);
  }

  public resume() {
    if (this.replayLoop.cursor.status === "destroyed") return;
    this.replayLoop.resume();
    this.eventBus.emit("ENGINE_RESUMED", undefined);
  }

  public step() {
    if (this.replayLoop.cursor.status === "destroyed") return;
    this.replayLoop.stepCandle();
  }

  public reset() {
    this.replayLoop.reset();
    const firstCandle = this.config.initialCandles[0];
    this.scenarioState = { 
      currentTick: firstCandle ? {
        price: firstCandle.close,
        bid: firstCandle.close,
        ask: firstCandle.close,
        time: firstCandle.time,
        volume: firstCandle.volume
      } : null, 
      equity: 10000, 
      positions: [] 
    };
    this.eventBus.emit("ENGINE_RESET", undefined);
  }

  public destroy() {
    this.replayLoop.destroy();
    this.eventBus.emit("ENGINE_DESTROYED", undefined);
    this.eventBus.destroy();
  }

  public setSpeed(speed: number) {
    const allowed = [1, 2, 5, 10]; 
    if (!allowed.includes(speed)) return;
    this.replayLoop.setSpeed(speed);
    this.eventBus.emit("ENGINE_RESUMED", undefined); 
  }

  private lastSnapshot: EngineSnapshot | null = null;
  private lastSnapshotState: string = "";

  public getSnapshot(): EngineSnapshot {
    // Generate a simple state string for shallow equality check
    const price = this.scenarioState.currentTick?.price ?? 0;
    const currentState = `${this.replayLoop.cursor.status}-${this.portfolioEngine.equity}-${this.portfolioEngine.positions.length}-${price}-${this.replayLoop.cursor.candleIndex}-${this.replayLoop.cursor.speed}`;
    
    if (this.lastSnapshot && this.lastSnapshotState === currentState) {
      return this.lastSnapshot;
    }

    this.lastSnapshot = {
      status: this.replayLoop.cursor.status,
      equity: this.portfolioEngine.equity,
      floatingPnl: 0,
      openPositions: [...this.portfolioEngine.positions],
      currentPrice: this.scenarioState.currentTick?.price ?? null,
      candleIndex: this.replayLoop.cursor.candleIndex,
      tickIndex: this.replayLoop.cursor.tickIndex,
      globalTickIndex: this.replayLoop.cursor.globalTickIndex,
      simulatedTimestamp: this.replayLoop.cursor.simulatedTimestamp,
      speed: this.replayLoop.cursor.speed,
    };
    this.lastSnapshotState = currentState;
    
    return this.lastSnapshot;
  }

  public subscribe(listener: (snapshot: EngineSnapshot) => void): () => void {
    const update = () => listener(this.getSnapshot());
    
    // Emit initial snapshot immediately
    update();
    
    // Subscribe to all relevant events that mutate snapshot state
    this.eventBus.on("PRICE_TICK", update);
    this.eventBus.on("CANDLE_UPDATE", update);
    this.eventBus.on("PNL_UPDATED", update);
    this.eventBus.on("ORDER_OPENED", update);
    this.eventBus.on("ORDER_CLOSED", update);
    this.eventBus.on("ENGINE_STARTED", update);
    this.eventBus.on("ENGINE_PAUSED", update);
    this.eventBus.on("ENGINE_RESUMED", update);
    this.eventBus.on("ENGINE_RESET", update);
    this.eventBus.on("SCENARIO_COMPLETE", update);

    // Return an unsubscribe function for React useEffect cleanup
    return () => {
      this.eventBus.off("PRICE_TICK", update);
      this.eventBus.off("CANDLE_UPDATE", update);
      this.eventBus.off("PNL_UPDATED", update);
      this.eventBus.off("ORDER_OPENED", update);
      this.eventBus.off("ORDER_CLOSED", update);
      this.eventBus.off("ENGINE_STARTED", update);
      this.eventBus.off("ENGINE_PAUSED", update);
      this.eventBus.off("ENGINE_RESUMED", update);
      this.eventBus.off("ENGINE_RESET", update);
      this.eventBus.off("SCENARIO_COMPLETE", update);
    };
  }
}

// --- Factory Method ---
export function createTradingEngine(config: EngineConfig): TradingEngine {
  return new TradingEngine(config);
}
