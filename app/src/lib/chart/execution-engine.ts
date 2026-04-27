import type { Tick, OHLCV, InstrumentSpec } from "./chart-types";
import { getInstrument } from "./chart-types";
import type { EventBus, EngineConfig } from "./engine";
import type { ReplayCursor } from "./replay-loop";

// --- Types ---
export interface ExecutionIntent {
  direction: "buy" | "sell";
  size: number; // Input size (lots, coins, etc.)
  stopLoss?: number | null;
  takeProfit?: number | null;
}

export interface Position {
  id: string;
  instrument: string;
  direction: "buy" | "sell";
  size: number; // Normalized units (base units, coins, ounces)
  openPrice: number;
  stopLoss: number | null;
  takeProfit: number | null;
  floatingPnl: number;
  initialRiskAmount: number | null; // Phase 4.7: Store risk at entry for R-multiple
}

export interface TradeRecord {
  orderId: string;
  scenarioId: string;
  instrument: string;
  instrumentSpecSnapshot: InstrumentSpec; // Phase 4.7: Future-proofing
  direction: "buy" | "sell";
  
  // Phase 4.7: Size Metadata
  inputSize: number;
  inputMode: string;
  normalizedUnits: number;
  contractSize: number;

  size: number; // For backward compatibility/simplicity, same as normalizedUnits
  
  entryRequestedPrice: number;
  entryFillPrice: number;
  entrySpread: number;
  entrySlippage: number;
  entryCandleIndex: number;
  entryTickIndex: number;
  entryGlobalTickIndex: number;
  entryTimestamp: number;
  exitRequestedPrice: number | null;
  exitFillPrice: number | null;
  exitSpread: number | null;
  exitSlippage: number | null;
  exitCandleIndex: number | null;
  exitTickIndex: number | null;
  exitGlobalTickIndex: number | null;
  exitTimestamp: number | null;
  closeReason: "manual" | "sl" | "tp" | "rule" | "open";
  realizedPnL: number | null;
  rMultiple: number | null;
  ruleViolations: string[];
}

/**
 * ALPHA LEVERAGE DOCUMENTATION:
 * - Leverage in this engine affects Margin / Exposure limits only (Phase Rules).
 * - Leverage does NOT multiply PnL directly. 
 * - PnL is strictly calculated as (PriceDifference * Units).
 * - Size conversion (lots -> units) is the primary multiplier.
 */

// --- Centralized PnL & Risk Math ---

/**
 * PnL = (exit - entry) * normalizedUnits (for long)
 * PnL = (entry - exit) * normalizedUnits (for short)
 */
export function calculatePnL({
  direction,
  entryPrice,
  exitPrice,
  size, // This MUST be normalized units
}: {
  direction: "buy" | "sell";
  entryPrice: number;
  exitPrice: number;
  size: number;
}): number {
  const diff = direction === "buy" ? exitPrice - entryPrice : entryPrice - exitPrice;
  return diff * size;
}

/**
 * Risk Amount = |entry - stopLoss| * normalizedUnits
 */
export function calculateRiskAmount({
  direction,
  entryPrice,
  stopLoss,
  size, // Normalized units
}: {
  direction: "buy" | "sell";
  entryPrice: number;
  stopLoss: number | null;
  size: number;
}): number {
  if (stopLoss === null) return 0;
  return Math.abs(entryPrice - stopLoss) * size;
}

/**
 * Normalizes UI input size to base units/coins/ounces
 */
export function convertSizeToUnits(size: number, spec: InstrumentSpec): number {
  if (spec.marketTrack === "forex") {
    // Forex: lots -> base units (e.g., 1 lot = 100,000)
    return size * spec.contractSize;
  }
  if (spec.marketTrack === "gold") {
    // Gold: lots -> ounces (e.g., 1 lot = 100 oz)
    return size * spec.contractSize;
  }
  // Crypto: coins remain coins
  return size;
}

// --- Deterministic PRNG Helper ---
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateExecutionSeed(baseSeed: string, tickIndex: number): number {
  let h = 1779033703 ^ baseSeed.length;
  for (let i = 0; i < baseSeed.length; i++) {
    h = Math.imul(h ^ baseSeed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h ^= tickIndex;
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
}

// --- Execution Engine ---
export class ExecutionEngine {
  private config: EngineConfig;
  private eventBus: EventBus;
  private getCursor: () => ReplayCursor;
  private getPositions: () => Position[];
  private getEquity: () => number;
  private spec: InstrumentSpec;

  public tradeLog: TradeRecord[] = [];
  private orderCounter = 0;

  constructor(
    config: EngineConfig,
    eventBus: EventBus,
    getCursor: () => ReplayCursor,
    getPositions: () => Position[],
    getEquity: () => number
  ) {
    this.config = config;
    this.eventBus = eventBus;
    this.getCursor = getCursor;
    this.getPositions = getPositions;
    this.getEquity = getEquity;
    this.spec = getInstrument(this.config.instrument);
  }

  private getDynamicSpread(): number {
    return this.spec.baseSpread;
  }

  private getDeterministicSlippage(): number {
    const cursor = this.getCursor();
    const seed = generateExecutionSeed(this.config.seed, cursor.globalTickIndex);
    const prng = mulberry32(seed);
    const spread = this.getDynamicSpread();
    return spread * 0.5 * prng(); 
  }

  private validateOrderIntent(intent: ExecutionIntent, currentTick: Tick): { valid: boolean; reason: string } {
    const mid = currentTick.price;
    const spread = this.getDynamicSpread();
    const ask = mid + spread / 2;
    const bid = mid - spread / 2;

    const entryPrice = intent.direction === "buy" ? ask : bid;
    const normalizedSize = convertSizeToUnits(intent.size, this.spec);

    // Size range validation
    if (intent.size < this.spec.minSize) {
      return { valid: false, reason: `Size too small. Min: ${this.spec.minSize} ${this.spec.sizeLabel}` };
    }
    if (intent.size > this.spec.maxSize) {
      return { valid: false, reason: `Size too large. Max: ${this.spec.maxSize} ${this.spec.sizeLabel}` };
    }

    // Phase 4.5: SL/TP Validity
    if (intent.stopLoss) {
      if (intent.direction === "buy" && intent.stopLoss >= entryPrice) {
        return { valid: false, reason: "Buy SL must be below entry price" };
      }
      if (intent.direction === "sell" && intent.stopLoss <= entryPrice) {
        return { valid: false, reason: "Sell SL must be above entry price" };
      }
    }
    if (intent.takeProfit) {
      if (intent.direction === "buy" && intent.takeProfit <= entryPrice) {
        return { valid: false, reason: "Buy TP must be above entry price" };
      }
      if (intent.direction === "sell" && intent.takeProfit >= entryPrice) {
        return { valid: false, reason: "Sell TP must be below entry price" };
      }
    }

    // Phase 4.5: Core Risk Rules
    const rules = this.config.phaseRules || {};
    if (rules.requiresStopLoss && !intent.stopLoss) {
      return { valid: false, reason: "Mandatory stop-loss rule active: SL required." };
    }
    
    if (rules.maxRiskPct && intent.stopLoss) {
      const riskAmount = calculateRiskAmount({
        direction: intent.direction,
        entryPrice,
        stopLoss: intent.stopLoss,
        size: normalizedSize,
      });
      const equity = this.getEquity();
      const riskPct = (riskAmount / equity) * 100;
      if (riskPct > rules.maxRiskPct) {
        return { valid: false, reason: `Max risk per trade exceeded. Attempted: ${riskPct.toFixed(2)}%, Limit: ${rules.maxRiskPct}%` };
      }
    }

    return { valid: true, reason: "" };
  }

  public executeMarketOrder(intent: ExecutionIntent, currentTick: Tick) {
    const validation = this.validateOrderIntent(intent, currentTick);
    if (!validation.valid) {
      this.eventBus.emit("RULE_VIOLATION", {
        ruleId: "INVALID_ORDER",
        description: validation.reason,
      });
      return null;
    }

    const cursor = this.getCursor();
    const mid = currentTick.price;
    const spread = this.getDynamicSpread();
    const ask = mid + spread / 2;
    const bid = mid - spread / 2;
    const slippage = this.getDeterministicSlippage();

    const basePrice = intent.direction === "buy" ? ask : bid;
    const fillPrice = intent.direction === "buy" ? basePrice + slippage : basePrice - slippage;
    const normalizedSize = convertSizeToUnits(intent.size, this.spec);

    this.orderCounter++;
    const orderId = `ord-${this.orderCounter}`;

    const record: TradeRecord = {
      orderId,
      scenarioId: this.config.scenarioId,
      instrument: this.config.instrument,
      instrumentSpecSnapshot: { ...this.spec },
      direction: intent.direction,
      inputSize: intent.size,
      inputMode: this.spec.inputMode,
      normalizedUnits: normalizedSize,
      contractSize: this.spec.contractSize,
      size: normalizedSize,
      entryRequestedPrice: basePrice,
      entryFillPrice: fillPrice,
      entrySpread: spread,
      entrySlippage: slippage,
      entryCandleIndex: cursor.candleIndex,
      entryTickIndex: cursor.tickIndex,
      entryGlobalTickIndex: cursor.globalTickIndex,
      entryTimestamp: cursor.simulatedTimestamp,
      exitRequestedPrice: null,
      exitFillPrice: null,
      exitSpread: null,
      exitSlippage: null,
      exitCandleIndex: null,
      exitTickIndex: null,
      exitGlobalTickIndex: null,
      exitTimestamp: null,
      closeReason: "open",
      realizedPnL: null,
      rMultiple: null,
      ruleViolations: [],
    };

    this.tradeLog.push(record);

    this.eventBus.emit("ORDER_OPENED", {
      id: orderId,
      price: fillPrice,
      direction: intent.direction,
      size: normalizedSize,
    });

    // Phase 4.7: Calculate initial risk amount at entry
    const initialRiskAmount = intent.stopLoss ? calculateRiskAmount({
      direction: intent.direction,
      entryPrice: fillPrice,
      stopLoss: intent.stopLoss,
      size: normalizedSize,
    }) : null;

    return {
      orderId,
      instrument: this.config.instrument,
      fillPrice,
      entryPrice: fillPrice,
      stopLoss: intent.stopLoss ?? null,
      takeProfit: intent.takeProfit ?? null,
      size: normalizedSize,
      positionSize: intent.size, // The raw lot size for the grader
      direction: intent.direction,
      initialRiskAmount,
    };
  }

  public checkTriggers(tick: Tick) {
    const positions = this.getPositions();
    const mid = tick.price;
    const spread = this.getDynamicSpread();
    const ask = mid + spread / 2;
    const bid = mid - spread / 2;

    for (const pos of positions) {
      let hitSL = false;
      let hitTP = false;

      if (pos.stopLoss !== null) {
        hitSL = (pos.direction === "buy" && bid <= pos.stopLoss) ||
                (pos.direction === "sell" && ask >= pos.stopLoss);
      }
      if (pos.takeProfit !== null) {
        hitTP = (pos.direction === "buy" && bid >= pos.takeProfit) ||
                (pos.direction === "sell" && ask <= pos.takeProfit);
      }

      if (hitSL && hitTP) hitTP = false; 

      if (hitSL) {
        const exitDirection = pos.direction === "buy" ? "sell" : "buy";
        const slippage = this.getDeterministicSlippage();
        const basePrice = exitDirection === "buy" ? ask : bid;
        const fillPrice = exitDirection === "buy" ? basePrice + slippage : basePrice - slippage;

        this.recordExit(pos, fillPrice, "sl", slippage, pos.stopLoss!);
        this.eventBus.emit("STOP_TRIGGERED", { id: pos.id, price: fillPrice });
        this.eventBus.emit("ORDER_CLOSED", { id: pos.id, price: fillPrice, pnl: 0 }); 
        continue;
      }

      if (hitTP) {
        const fillPrice = pos.takeProfit!;
        this.recordExit(pos, fillPrice, "tp", 0, pos.takeProfit!);
        this.eventBus.emit("TAKE_PROFIT_TRIGGERED", { id: pos.id, price: fillPrice });
        this.eventBus.emit("ORDER_CLOSED", { id: pos.id, price: fillPrice, pnl: 0 });
      }
    }
  }

  public closePositionManual(posId: string, currentTick: Tick) {
    const positions = this.getPositions();
    const pos = positions.find(p => p.id === posId);
    if (!pos) return;

    const mid = currentTick.price;
    const spread = this.getDynamicSpread();
    const ask = mid + spread / 2;
    const bid = mid - spread / 2;
    const exitDirection = pos.direction === "buy" ? "sell" : "buy";
    const slippage = this.getDeterministicSlippage();
    
    const basePrice = exitDirection === "buy" ? ask : bid;
    const fillPrice = exitDirection === "buy" ? basePrice + slippage : basePrice - slippage;

    this.recordExit(pos, fillPrice, "manual", slippage, basePrice);
    this.eventBus.emit("ORDER_CLOSED", { id: pos.id, price: fillPrice, pnl: 0 });
  }

  private recordExit(pos: Position, fillPrice: number, reason: "sl" | "tp" | "manual", slippageAmount: number, requestedPrice: number) {
    const cursor = this.getCursor();
    const record = this.tradeLog.find(r => r.orderId === pos.id);
    if (!record) return;

    const realizedPnL = calculatePnL({
      direction: pos.direction,
      entryPrice: record.entryFillPrice,
      exitPrice: fillPrice,
      size: pos.size,
    });
    
    // Phase 4.7: Use initialRiskAmount stored in the position for R-multiple
    let rMultiple: number | null = null;
    if (pos.initialRiskAmount && pos.initialRiskAmount > 0) {
      rMultiple = realizedPnL / pos.initialRiskAmount;
    }

    record.exitRequestedPrice = requestedPrice;
    record.exitFillPrice = fillPrice;
    record.exitSpread = this.getDynamicSpread();
    record.exitSlippage = slippageAmount;
    record.exitCandleIndex = cursor.candleIndex;
    record.exitTickIndex = cursor.tickIndex;
    record.exitGlobalTickIndex = cursor.globalTickIndex;
    record.exitTimestamp = cursor.simulatedTimestamp;
    record.closeReason = reason;
    record.realizedPnL = realizedPnL;
    record.rMultiple = rMultiple;
  }
}

// --- Portfolio Engine ---
export class PortfolioEngine {
  public positions: Position[] = [];
  public equity: number;
  public initialBalance: number;
  private maxEquity: number;

  constructor(initialBalance: number) {
    this.initialBalance = initialBalance;
    this.equity = initialBalance;
    this.maxEquity = initialBalance;
  }

  public addPosition(pos: Position) {
    this.positions.push(pos);
  }

  public removePosition(id: string, closePrice: number): number {
    const idx = this.positions.findIndex((p) => p.id === id);
    if (idx === -1) return 0;
    
    const pos = this.positions[idx];
    const pnl = calculatePnL({
      direction: pos.direction,
      entryPrice: pos.openPrice,
      exitPrice: closePrice,
      size: pos.size,
    });
    
    this.equity += pnl;
    this.positions.splice(idx, 1);
    
    if (this.equity > this.maxEquity) {
      this.maxEquity = this.equity;
    }
    
    return pnl;
  }

  public evaluateTick(tick: Tick): { floatingPnl: number; equity: number } {
    let totalFloating = 0;
    
    for (const pos of this.positions) {
      const liqPrice = pos.direction === "buy" ? tick.bid : tick.ask;
      
      // Safety: skip if price is invalid
      if (isNaN(liqPrice) || liqPrice === 0) continue;

      pos.floatingPnl = calculatePnL({
        direction: pos.direction,
        entryPrice: pos.openPrice,
        exitPrice: liqPrice,
        size: pos.size,
      });
      totalFloating += pos.floatingPnl;
    }

    const currentEquity = this.equity + totalFloating;
    
    if (currentEquity > this.maxEquity) {
      this.maxEquity = currentEquity;
    }

    return { floatingPnl: totalFloating, equity: currentEquity };
  }

  public getDrawdownPercentage(currentEquity: number): number {
    return ((this.maxEquity - currentEquity) / this.maxEquity) * 100;
  }
}

// --- Rules Engine ---
export class RulesEngine {
  private config: EngineConfig;
  private eventBus: EventBus;

  constructor(config: EngineConfig, eventBus: EventBus) {
    this.config = config;
    this.eventBus = eventBus;
  }

  public evaluateRules(equity: number, drawdownPct: number, positions: Position[]) {
    const rules = this.config.phaseRules || {};
    const maxDrawdown = rules.maxDrawdownPct ?? 10;
    if (drawdownPct >= maxDrawdown) {
      this.eventBus.emit("RULE_VIOLATION", {
        ruleId: "MAX_DRAWDOWN",
        description: `Max drawdown of ${maxDrawdown}% breached. Current: ${drawdownPct.toFixed(2)}%`,
      });
      this.eventBus.emit("SCENARIO_COMPLETE", { outcome: "failed", reason: "Max drawdown breached" });
    }
  }
}
