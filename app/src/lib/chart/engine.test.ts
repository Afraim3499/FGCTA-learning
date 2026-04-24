import { createTradingEngine } from "./engine";
import type { OHLCV, Tick } from "./chart-types";

jest.mock("./chart-types", () => ({
  getInstrument: () => ({ spread: 0.0002 }),
}));

describe("Engine Integration & ReplayLoop", () => {
  const dummyCandles: OHLCV[] = [
    { time: 100, open: 1.1, high: 1.2, low: 1.0, close: 1.15, volume: 1000 },
    { time: 200, open: 1.15, high: 1.25, low: 1.1, close: 1.2, volume: 1000 },
  ];

  const dummyConfig = {
    scenarioId: "test-1",
    userId: "user-1",
    mode: "practice" as const,
    seed: "seed",
    initialCandles: dummyCandles,
    instrument: "EURUSD",
    phaseRules: {},
  };

  let currentTime = 1000;
  let rafCallback: ((time: number) => void) | null = null;

  beforeEach(() => {
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
  });

  const advanceTime = (ms: number) => {
    currentTime += ms;
    if (rafCallback) {
      const cb = rafCallback;
      rafCallback = null; 
      cb(currentTime);
    }
  };

  it("1. engine.start() emits PRICE_TICK and syncs snapshot", () => {
    const engine = createTradingEngine(dummyConfig);
    const tickMock = jest.fn();
    engine.eventBus.on("PRICE_TICK", tickMock);

    engine.start();
    advanceTime(100);

    expect(tickMock).toHaveBeenCalled();
    const snapshot = engine.getSnapshot();
    expect(snapshot.status).toBe("running");
    expect(snapshot.globalTickIndex).toBeGreaterThan(0);
  });

  it("2. engine.step() emits exactly one candle's worth of ticks", () => {
    const engine = createTradingEngine(dummyConfig);
    const candleMock = jest.fn();
    engine.eventBus.on("CANDLE_UPDATE", candleMock);

    engine.step();

    expect(candleMock).toHaveBeenCalledTimes(1);
    expect(engine.getSnapshot().candleIndex).toBe(1);
    expect(engine.getSnapshot().status).toBe("idle");
  });

  it("3. engine.pause() stops event emissions", () => {
    const engine = createTradingEngine(dummyConfig);
    const tickMock = jest.fn();
    engine.eventBus.on("PRICE_TICK", tickMock);

    engine.start();
    advanceTime(100);
    const countAfterStart = tickMock.mock.calls.length;

    engine.pause();
    advanceTime(1000);

    expect(tickMock.mock.calls.length).toBe(countAfterStart);
    expect(engine.getSnapshot().status).toBe("paused");
  });

  it("4. engine.reset() resets ReplayLoop and snapshot state", () => {
    const engine = createTradingEngine(dummyConfig);
    engine.start();
    advanceTime(200);

    engine.reset();
    const snapshot = engine.getSnapshot();
    
    expect(snapshot.status).toBe("idle");
    expect(snapshot.globalTickIndex).toBe(0);
    expect(snapshot.candleIndex).toBe(0);
    expect(snapshot.currentPrice).toBe(null);
  });

  it("5. engine.destroy() prevents all future emissions", () => {
    const engine = createTradingEngine(dummyConfig);
    const tickMock = jest.fn();
    engine.eventBus.on("PRICE_TICK", tickMock);

    engine.start();
    engine.destroy();
    
    advanceTime(100); // would emit if not destroyed

    expect(tickMock).not.toHaveBeenCalled();
    expect(engine.getSnapshot().status).toBe("destroyed");
  });

  it("6. maxTicksPerFrame prevents burst emissions after simulated frame delay", () => {
    const engine = createTradingEngine(dummyConfig);
    const tickMock = jest.fn();
    engine.eventBus.on("PRICE_TICK", tickMock);

    engine.start();

    // Advance 1000ms in a single frame. 
    // At 10 ticks per second (msPerTick=100), this should normally emit 10 ticks.
    // However, maxTicksPerFrame = 5, so it should only emit 5.
    advanceTime(1000);

    expect(tickMock).toHaveBeenCalledTimes(5);
  });
});

