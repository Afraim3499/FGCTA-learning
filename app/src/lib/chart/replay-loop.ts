import { generateTicks } from "./tick-generator";
import type { Tick, OHLCV } from "./chart-types";

export interface ReplayCursor {
  candleIndex: number;
  tickIndex: number;
  globalTickIndex: number;
  simulatedTimestamp: number;
  status: "idle" | "running" | "paused" | "complete" | "destroyed";
  speed: number;
}

export interface ReplayLoopConfig {
  candles: OHLCV[];
  seed: string;
  instrument: string;
  onTick: (tick: Tick, isCandleClose: boolean) => void;
  onCandleComplete: (candle: OHLCV) => void;
  onComplete: () => void;
  ticksPerSecond?: number; // Base rate at 1x speed
}

export class ReplayLoop {
  private config: ReplayLoopConfig;
  public cursor: ReplayCursor;

  // Cached generated ticks for the current candle to avoid generating on every frame
  private currentCandleTicks: Tick[] = [];

  private animationFrameId: number | null = null;
  private lastFrameTime: number | null = null;
  private accumulatedMs: number = 0;

  // Base milliseconds needed to progress one tick at 1x speed.
  // E.g. if ticksPerSecond is 10, then msPerTick = 100.
  private msPerTick: number;

  private visibilityHandler = this.handleVisibilityChange.bind(this);

  constructor(config: ReplayLoopConfig) {
    this.config = config;
    this.msPerTick = 1000 / (config.ticksPerSecond || 10);
    this.cursor = {
      candleIndex: 0,
      tickIndex: 0,
      globalTickIndex: 0,
      simulatedTimestamp: config.candles[0]?.time ?? 0,
      status: "idle",
      speed: 1,
    };

    if (typeof window !== "undefined") {
      document.addEventListener("visibilitychange", this.visibilityHandler);
    }
  }

  private loadCandleTicks() {
    if (this.cursor.candleIndex >= this.config.candles.length) {
      return false; // Complete
    }
    const candle = this.config.candles[this.cursor.candleIndex];
    // Use candle index in seed to ensure unique deterministic path per candle
    this.currentCandleTicks = generateTicks(candle, this.config.instrument, `${this.config.seed}-${this.cursor.candleIndex}`);
    this.cursor.tickIndex = 0;
    return true;
  }

  public setSpeed(multiplier: number) {
    this.cursor.speed = multiplier;
  }

  public start() {
    if (this.cursor.status === "destroyed" || this.cursor.status === "complete") return;
    if (this.cursor.status === "running") return;

    if (this.cursor.status === "idle") {
      // First start, load first candle
      if (!this.loadCandleTicks()) {
        this.complete();
        return;
      }
    }

    this.cursor.status = "running";
    this.lastFrameTime = typeof performance !== "undefined" ? performance.now() : Date.now();
    this.loop(this.lastFrameTime);
  }

  public pause() {
    if (this.cursor.status !== "running") return;
    this.cursor.status = "paused";
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.lastFrameTime = null;
  }

  public resume() {
    this.start();
  }

  /**
   * Steps forward exactly one full candle.
   */
  public stepCandle() {
    if (this.cursor.status === "complete" || this.cursor.status === "destroyed") return;
    
    // If running, pause first
    if (this.cursor.status === "running") this.pause();
    
    // If idle, load first candle
    if (this.cursor.status === "idle") {
      if (!this.loadCandleTicks()) {
        this.complete();
        return;
      }
    }

    // Fast-forward all remaining ticks in the current candle
    while (this.cursor.tickIndex < this.currentCandleTicks.length) {
      this.emitCurrentTick();
    }
  }


  public reset() {
    this.pause();
    this.cursor = {
      candleIndex: 0,
      tickIndex: 0,
      globalTickIndex: 0,
      simulatedTimestamp: this.config.candles[0]?.time ?? 0,
      status: "idle",
      speed: 1,
    };
    this.currentCandleTicks = [];
    this.accumulatedMs = 0;
  }

  public destroy() {
    this.pause();
    this.cursor.status = "destroyed";
    if (typeof window !== "undefined") {
      document.removeEventListener("visibilitychange", this.visibilityHandler);
    }
  }

  private handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      // If the tab is hidden, we freeze the time accumulator so that 
      // when it becomes visible again, we don't have a massive burst of elapsed time.
      if (this.cursor.status === "running") {
        this.pause();
        // Option: we could keep it "running" internally but just not request animation frames,
        // but explicit pause prevents any edge cases.
        // Actually, to resume seamlessly when visible, we can just clear lastFrameTime.
        // Let's implement auto-pause/resume logic.
        this.cursor.status = "paused"; // or we introduce a "suspended" state.
        // The prompt says: "when tab becomes hidden, automatically pause or freeze elapsed-time accumulation"
      }
    } else if (document.visibilityState === "visible") {
      // Do not auto-resume unless we specifically want to. 
      // The prompt says: "replay must resume cleanly only when explicitly resumed or according to the selected policy."
      // So we leave it paused. User must explicitly click play.
    }
  }

  private loop = (timestamp: number) => {
    if (this.cursor.status !== "running") return;

    if (this.lastFrameTime === null) {
      this.lastFrameTime = timestamp;
    }

    // Accumulate elapsed time (scaled by speed)
    const deltaMs = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // Safety clamp delta to prevent massive bursts if rAF slept but visibility API failed
    const clampedDelta = Math.min(deltaMs, 1000); 
    
    this.accumulatedMs += clampedDelta * this.cursor.speed;

    const maxTicksPerFrame = 5; // Cap to prevent bursting

    // If accumulated time is massive (e.g. visibility API failed or thread stalled),
    // discard the excess so we don't chase a massive backlog over many frames.
    const maxAccumulatedAllowed = this.msPerTick * maxTicksPerFrame;
    if (this.accumulatedMs > maxAccumulatedAllowed) {
      this.accumulatedMs = maxAccumulatedAllowed;
    }

    // Process all ticks that should have occurred in the accumulated time
    let ticksProcessed = 0;

    while (this.accumulatedMs >= this.msPerTick && ticksProcessed < maxTicksPerFrame) {
      this.accumulatedMs -= this.msPerTick;
      ticksProcessed++;
      
      const hasMore = this.emitCurrentTick();
      if (!hasMore) {
        this.complete();
        return; // Stop loop, scenario is over
      }
    }

    // Request next frame
    this.animationFrameId = requestAnimationFrame(this.loop);
  };

  private emitCurrentTick(): boolean {
    const tick = this.currentCandleTicks[this.cursor.tickIndex];
    this.cursor.simulatedTimestamp = tick.time;
    this.cursor.globalTickIndex++;
    
    const isCandleClose = this.cursor.tickIndex === this.currentCandleTicks.length - 1;
    
    // Emit the tick
    this.config.onTick(tick, isCandleClose);

    this.cursor.tickIndex++;

    if (isCandleClose) {
      // Candle is complete
      const candle = this.config.candles[this.cursor.candleIndex];
      this.config.onCandleComplete(candle);

      // Move to next candle
      this.cursor.candleIndex++;
      const hasNext = this.loadCandleTicks();
      if (!hasNext) {
        return false; // Out of candles
      }
    }

    return true; // Still have more ticks
  }

  private complete() {
    this.pause();
    this.cursor.status = "complete";
    this.config.onComplete();
  }
}
