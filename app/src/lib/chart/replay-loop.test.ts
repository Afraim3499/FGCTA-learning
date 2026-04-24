import { ReplayLoop } from "./replay-loop";
import type { OHLCV, Tick } from "./chart-types";
import { generateTicks } from "./tick-generator";

jest.mock("./chart-types", () => ({
  getInstrument: () => ({ spread: 0.0002 }),
}));

describe("Replay Loop", () => {
  const dummyCandles: OHLCV[] = [
    { time: 100, open: 1.1, high: 1.2, low: 1.0, close: 1.15, volume: 1000 },
    { time: 200, open: 1.15, high: 1.25, low: 1.1, close: 1.2, volume: 1000 },
  ];

  let loop: ReplayLoop;
  let ticksEmitted: Tick[] = [];
  let candlesCompleted = 0;
  let isComplete = false;

  // Mock timing
  let currentTime = 1000;
  let rafCallback: ((time: number) => void) | null = null;

  beforeEach(() => {
    ticksEmitted = [];
    candlesCompleted = 0;
    isComplete = false;
    currentTime = 1000;
    rafCallback = null;

    global.requestAnimationFrame = jest.fn((cb) => {
      rafCallback = cb;
      return 1;
    }) as any;

    global.cancelAnimationFrame = jest.fn(() => {
      rafCallback = null;
    });

    global.performance = { now: () => currentTime } as any;

    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      get: () => "visible",
    });

    loop = new ReplayLoop({
      candles: dummyCandles,
      seed: "test",
      instrument: "EURUSD",
      ticksPerSecond: 10, // 100ms per tick
      onTick: (tick) => ticksEmitted.push(tick),
      onCandleComplete: () => candlesCompleted++,
      onComplete: () => { isComplete = true; },
    });
  });

  const advanceTime = (ms: number) => {
    currentTime += ms;
    if (rafCallback) {
      const cb = rafCallback;
      rafCallback = null; // Clear so it only loops if rAF is called again
      cb(currentTime);
    }
  };

  it("1. start emits ticks in correct order", () => {
    loop.start();
    advanceTime(100); // 1 tick
    expect(ticksEmitted.length).toBe(1);
    
    advanceTime(200); // 2 more ticks
    expect(ticksEmitted.length).toBe(3);
    
    // Ensure timestamps are increasing
    expect(ticksEmitted[1].time).toBeGreaterThan(ticksEmitted[0].time);
  });

  it("2. pause stops progression and resume continues", () => {
    loop.start();
    advanceTime(100);
    expect(ticksEmitted.length).toBe(1);

    loop.pause();
    advanceTime(500); // Should do nothing
    expect(ticksEmitted.length).toBe(1);

    loop.resume();
    advanceTime(100);
    expect(ticksEmitted.length).toBe(2);
  });

  it("3. reset returns to first candle/tick", () => {
    loop.start();
    advanceTime(300);
    expect(ticksEmitted.length).toBe(3);
    expect(loop.cursor.tickIndex).toBe(3);

    loop.reset();
    expect(loop.cursor.status).toBe("idle");
    expect(loop.cursor.tickIndex).toBe(0);
    expect(loop.cursor.candleIndex).toBe(0);
  });

  it("4. scenario complete fires once", () => {
    loop.start();
    
    // Fast forward enough time to finish both candles
    // Each candle generates ~10-20 ticks, so 40 ticks * 100ms = 4000ms is plenty
    for(let i=0; i < 50; i++) {
      advanceTime(100);
    }

    expect(isComplete).toBe(true);
    expect(loop.cursor.status).toBe("complete");
    expect(candlesCompleted).toBe(2);
    
    // Advancing more time shouldn't emit more ticks
    const lengthAfterComplete = ticksEmitted.length;
    advanceTime(1000);
    expect(ticksEmitted.length).toBe(lengthAfterComplete);
  });

  it("5. visibility hidden does not cause catch-up burst", () => {
    loop.start();
    advanceTime(100);
    expect(ticksEmitted.length).toBe(1);

    // Simulate tab hidden
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      get: () => "hidden",
    });
    document.dispatchEvent(new Event("visibilitychange"));

    expect(loop.cursor.status).toBe("paused");

    // Advance 5 seconds while hidden (which normally would queue 50 ticks)
    advanceTime(5000); 

    // Simulate tab visible
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      get: () => "visible",
    });
    document.dispatchEvent(new Event("visibilitychange"));

    // User explicitly resumes
    loop.resume();
    advanceTime(100); // 1 tick
    
    // Should only have 2 ticks total (1 before pause, 1 after resume)
    expect(ticksEmitted.length).toBe(2);
  });

  it("6. speed multiplier changes progression rate deterministically", () => {
    loop.start();
    
    loop.setSpeed(2); // 2x speed
    advanceTime(100); // 100ms * 2 = 200ms elapsed = 2 ticks
    
    expect(ticksEmitted.length).toBe(2);

    loop.setSpeed(5); // 5x speed
    advanceTime(100); // 100ms * 5 = 500ms elapsed = 5 ticks

    expect(ticksEmitted.length).toBe(7);
  });

  it("7. step mode steps one full candle", () => {
    expect(loop.cursor.candleIndex).toBe(0);
    
    loop.stepCandle();
    
    expect(candlesCompleted).toBe(1);
    expect(loop.cursor.candleIndex).toBe(1);
    expect(loop.cursor.status).toBe("idle"); // Assuming stepCandle leaves it paused/idle

    const length1 = ticksEmitted.length;
    
    loop.stepCandle();
    
    expect(candlesCompleted).toBe(2);
    expect(loop.cursor.candleIndex).toBe(2);
    expect(ticksEmitted.length).toBeGreaterThan(length1);
    expect(isComplete).toBe(true);
  });

  it("8. destroy stops all future emissions", () => {
    loop.start();
    advanceTime(100);
    expect(ticksEmitted.length).toBe(1);

    loop.destroy();
    expect(loop.cursor.status).toBe("destroyed");

    advanceTime(1000); // If rAF was somehow still firing
    expect(ticksEmitted.length).toBe(1); // No new emissions
  });
});
