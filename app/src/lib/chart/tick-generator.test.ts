import { generateTicks } from "./tick-generator";
import type { OHLCV } from "./chart-types";

// Mock the getInstrument function for testing so we don't depend on chart-types fully
jest.mock("./chart-types", () => ({
  getInstrument: () => ({ spread: 0.0002 }),
}));

describe("Tick Generator", () => {
  const dummyCandle: OHLCV = {
    time: 1600000000,
    open: 1.1000,
    high: 1.1050,
    low: 1.0950,
    close: 1.1020,
    volume: 1000,
  };

  it("should be deterministic (same seed -> same ticks)", () => {
    const ticks1 = generateTicks(dummyCandle, "EURUSD", "seed1");
    const ticks2 = generateTicks(dummyCandle, "EURUSD", "seed1");
    expect(ticks1).toEqual(ticks2);
  });

  it("should produce different ticks for different seeds", () => {
    const ticks1 = generateTicks(dummyCandle, "EURUSD", "seed1");
    const ticks2 = generateTicks(dummyCandle, "EURUSD", "seed2");
    expect(ticks1).not.toEqual(ticks2);
  });

  it("1. First/last tick integrity", () => {
    const ticks = generateTicks(dummyCandle, "EURUSD", "test_seed");
    expect(ticks.length).toBeGreaterThan(0);
    expect(ticks[0].price).toBeCloseTo(dummyCandle.open, 5);
    expect(ticks[ticks.length - 1].price).toBeCloseTo(dummyCandle.close, 5);
  });

  it("2. High/low integrity", () => {
    for (let i = 0; i < 20; i++) {
      const ticks = generateTicks(dummyCandle, "EURUSD", `seed_${i}`);
      let hitHigh = false;
      let hitLow = false;
      
      for (const tick of ticks) {
        expect(tick.price).toBeLessThanOrEqual(dummyCandle.high);
        expect(tick.price).toBeGreaterThanOrEqual(dummyCandle.low);
        if (Math.abs(tick.price - dummyCandle.high) < 0.000001) hitHigh = true;
        if (Math.abs(tick.price - dummyCandle.low) < 0.000001) hitLow = true;
      }
      expect(hitHigh).toBe(true);
      expect(hitLow).toBe(true);
    }
  });

  it("3. Edge-case candles (Doji, Tiny, Long Wicks)", () => {
    const cases: OHLCV[] = [
      { time: 100, open: 1.1, high: 1.1, low: 1.1, close: 1.1, volume: 100 }, // Doji
      { time: 100, open: 1.1000, high: 1.1001, low: 1.0999, close: 1.1000, volume: 50 }, // Tiny
      { time: 100, open: 1.1000, high: 1.1500, low: 1.0990, close: 1.1010, volume: 2000 }, // Long upper wick
      { time: 100, open: 1.1000, high: 1.1010, low: 1.0500, close: 1.0990, volume: 2000 }, // Long lower wick
      { time: 100, open: 1.0000, high: 1.1000, low: 1.0000, close: 1.1000, volume: 5000 }, // Full bull
      { time: 100, open: 1.1000, high: 1.1000, low: 1.0000, close: 1.0000, volume: 5000 }, // Full bear
      { time: 100, open: 1.1000, high: 1.1050, low: 1.0950, close: 1.1020, volume: 0 }, // Zero volume
    ];

    for (const c of cases) {
      const ticks = generateTicks(c, "EURUSD", "seed");
      expect(ticks[0].price).toBeCloseTo(c.open, 5);
      expect(ticks[ticks.length - 1].price).toBeCloseTo(c.close, 5);
    }
  });

  it("4. Timestamp order", () => {
    const ticks = generateTicks(dummyCandle, "EURUSD", "seed");
    for (let i = 1; i < ticks.length; i++) {
      expect(ticks[i].time).toBeGreaterThan(ticks[i - 1].time);
    }
  });

  it("5. Volume distribution", () => {
    const ticks = generateTicks(dummyCandle, "EURUSD", "seed");
    const sum = ticks.reduce((acc, t) => acc + t.volume, 0);
    expect(sum).toBeCloseTo(dummyCandle.volume, 5);
  });

  it("6. Invalid candle guard", () => {
    expect(() => generateTicks({ ...dummyCandle, high: 1.0 }, "EURUSD", "s")).toThrow(/Invalid OHLC candle/);
    expect(() => generateTicks({ ...dummyCandle, open: 2.0 }, "EURUSD", "s")).toThrow(/Invalid OHLC candle/);
    expect(() => generateTicks({ ...dummyCandle, close: 0.5 }, "EURUSD", "s")).toThrow(/Invalid OHLC candle/);
  });
});

