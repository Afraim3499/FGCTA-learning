import { createTradingEngine } from "./engine";
import type { Tick } from "./chart-types";
import { calculatePnL, calculateRiskAmount, convertSizeToUnits } from "./execution-engine";

const EURUSD_SPEC = {
  symbol: "EURUSD",
  marketTrack: "forex",
  quoteCurrency: "USD",
  contractSize: 100000,
  baseSpread: 0.0002,
  minSize: 0.01,
  maxSize: 100,
  sizeLabel: "Lots",
};

const BTCUSD_SPEC = {
  symbol: "BTCUSD",
  marketTrack: "crypto",
  quoteCurrency: "USD",
  contractSize: 1,
  baseSpread: 15.0,
  minSize: 0.0001,
  maxSize: 10,
  sizeLabel: "Coins",
};

const XAUUSD_SPEC = {
  symbol: "XAUUSD",
  marketTrack: "gold",
  quoteCurrency: "USD",
  contractSize: 100,
  baseSpread: 0.4,
  minSize: 0.01,
  maxSize: 50,
  sizeLabel: "Lots",
};

jest.mock("./chart-types", () => ({
  getInstrument: (symbol: string) => {
    if (symbol === "EURUSD") return EURUSD_SPEC;
    if (symbol === "BTCUSD") return BTCUSD_SPEC;
    if (symbol === "XAUUSD") return XAUUSD_SPEC;
    return EURUSD_SPEC;
  },
}));

describe("Execution Engine (Phase 4.6 PnL & Instrument Integrity)", () => {
  const baseConfig = {
    scenarioId: "test-scen",
    userId: "test-user",
    mode: "practice" as const,
    seed: "fixed-seed",
    initialCandles: [{ time: 100, open: 1.1000, high: 1.1050, low: 1.0950, close: 1.1000, volume: 1000 }],
    phaseRules: { maxDrawdownPct: 10, requiresStopLoss: false, maxRiskPct: 2 },
  };

  const advanceTick = (engine: any, price: number, spread: number = 0.0002) => {
    engine.eventBus.emit("PRICE_TICK", {
      time: 1000, price, volume: 10, bid: price - spread / 2, ask: price + spread / 2
    } as Tick);
  };

  it("1. Size Conversion: Lots to Units (Forex & Gold) and Coins (Crypto)", () => {
    // @ts-ignore
    expect(convertSizeToUnits(1, EURUSD_SPEC)).toBe(100000);
    // @ts-ignore
    expect(convertSizeToUnits(1, XAUUSD_SPEC)).toBe(100);
    // @ts-ignore
    expect(convertSizeToUnits(1, BTCUSD_SPEC)).toBe(1);
  });

  it("2. EURUSD PnL: 1 Lot Buy, 10 Pip gain = $100", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" });
    engine.start();
    advanceTick(engine, 1.1000, 0); // Mid 1.1000, Ask 1.1000 (no spread/slip for clean test)
    
    // We'll mock slippage to 0 for this specific test to verify base PnL math
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("buy", 1); // 1 lot = 100k units
    advanceTick(engine, 1.1010, 0); // 10 pip gain
    
    const snapshot = engine.getSnapshot();
    expect(snapshot.openPositions[0].floatingPnl).toBeCloseTo(100);
  });

  it("3. BTCUSD PnL: 0.5 Coins Buy, $1000 gain = $500", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "BTCUSD" });
    engine.start();
    advanceTick(engine, 60000, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("buy", 0.5); 
    advanceTick(engine, 61000, 0); 
    
    expect(engine.getSnapshot().openPositions[0].floatingPnl).toBe(500);
  });

  it("4. XAUUSD PnL: 1 Lot Buy, $10 gain = $1000", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "XAUUSD" });
    engine.start();
    advanceTick(engine, 2300, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("buy", 1); // 1 lot = 100 oz
    advanceTick(engine, 2310, 0); 
    
    expect(engine.getSnapshot().openPositions[0].floatingPnl).toBe(1000);
  });

  it("5. Risk Calculation & Rejection: EURUSD Max Risk", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" }); // Bal 10k, Max Risk 2% = $200
    engine.start();
    advanceTick(engine, 1.1000, 0);

    const ruleMock = jest.fn();
    engine.eventBus.on("RULE_VIOLATION", ruleMock);

    // 1 lot = 100k units. SL 50 pips away = $500 risk. Should be rejected.
    engine.executeMarketOrder("buy", 1, 1.0950); 
    expect(ruleMock).toHaveBeenCalledWith(expect.objectContaining({ description: expect.stringContaining("Max risk per trade exceeded") }));
  });

  it("6. Size Boundary Validation", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" });
    engine.start();
    advanceTick(engine, 1.1000, 0);

    const ruleMock = jest.fn();
    engine.eventBus.on("RULE_VIOLATION", ruleMock);

    engine.executeMarketOrder("buy", 0.001); // Below 0.01 min
    expect(ruleMock).toHaveBeenCalledWith(expect.objectContaining({ description: expect.stringContaining("Size too small") }));

    engine.executeMarketOrder("buy", 200); // Above 100 max
    expect(ruleMock).toHaveBeenCalledWith(expect.objectContaining({ description: expect.stringContaining("Size too large") }));
  });

  it("7. TradeRecord Audit: Complete Entry/Exit fields and R-Multiple", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" });
    engine.start();
    advanceTick(engine, 1.1000, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("buy", 1, 1.0990); // $100 risk
    const posId = engine.getSnapshot().openPositions[0].id;

    advanceTick(engine, 1.1030, 0); // $300 gain
    engine.closePosition(posId);

    // @ts-ignore
    const record = engine.executionEngine.tradeLog[0];
    expect(record.inputSize).toBe(1);
    expect(record.inputMode).toBe("lots");
    expect(record.normalizedUnits).toBe(100000);
    expect(record.contractSize).toBe(100000);
    expect(record.instrumentSpecSnapshot).toBeDefined();
    expect(record.realizedPnL).toBe(300);
    expect(record.rMultiple).toBe(3);
    expect(record.exitFillPrice).toBe(1.1030);
    expect(record.closeReason).toBe("manual");
  });

  it("8. Short Side PnL: EURUSD Gain", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" });
    engine.start();
    advanceTick(engine, 1.1000, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("sell", 1); // Short at 1.1000
    advanceTick(engine, 1.0990, 0); // 10 pip drop = gain for short
    
    expect(engine.getSnapshot().openPositions[0].floatingPnl).toBe(100);
  });

  it("9. Short Side PnL: BTCUSD Loss", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "BTCUSD" });
    engine.start();
    advanceTick(engine, 60000, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("sell", 1); // Short at 60,000
    advanceTick(engine, 61000, 0); // $1,000 rise = loss for short
    
    expect(engine.getSnapshot().openPositions[0].floatingPnl).toBe(-1000);
  });

  it("10. Short Side PnL: XAUUSD Gain", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "XAUUSD" });
    engine.start();
    advanceTick(engine, 2300, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("sell", 1); // Short at 2300
    advanceTick(engine, 2290, 0); // $10 drop = $1000 gain (100 oz)
    
    expect(engine.getSnapshot().openPositions[0].floatingPnl).toBe(1000);
  });

  it("11. R-Multiple Integrity: Initial Risk Check", () => {
    const engine = createTradingEngine({ ...baseConfig, instrument: "EURUSD" });
    engine.start();
    advanceTick(engine, 1.1000, 0);
    // @ts-ignore
    jest.spyOn(engine.executionEngine, 'getDeterministicSlippage').mockReturnValue(0);

    engine.executeMarketOrder("buy", 1, 1.0990); // $100 risk
    const pos = engine.getSnapshot().openPositions[0];
    
    // Simulate moving SL to break-even (1.1000)
    pos.stopLoss = 1.1000;
    
    advanceTick(engine, 1.1020, 0); // $200 gain
    engine.closePosition(pos.id);

    // @ts-ignore
    const record = engine.executionEngine.tradeLog[0];
    // R-Multiple should be based on initial risk ($100), not adjusted risk ($0)
    // 200 / 100 = 2
    expect(record.rMultiple).toBe(2);
  });
});
