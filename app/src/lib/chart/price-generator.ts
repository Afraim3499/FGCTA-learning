// ============================================
// SERVER-SIDE PRICE GENERATOR
// Generates realistic OHLCV data using:
//   - Geometric Brownian Motion (trend + randomness)
//   - Ornstein-Uhlenbeck mean reversion
//   - Microstructure noise (wicks, gaps)
//   - Volume correlation with volatility
// All generation is seeded for reproducibility.
// ============================================

import type { OHLCV, InstrumentSpec, Timeframe } from "./chart-types";
import { TIMEFRAME_CONFIG, getInstrument } from "./chart-types";

/** Seeded PRNG (Mulberry32) for reproducible price paths */
class SeededRandom {
  private state: number;

  constructor(seed: number) {
    this.state = seed;
  }

  /** Returns a value in [0, 1) */
  next(): number {
    this.state |= 0;
    this.state = (this.state + 0x6d2b79f5) | 0;
    let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** Normal distribution via Box-Muller */
  nextGaussian(): number {
    const u1 = this.next();
    const u2 = this.next();
    return Math.sqrt(-2 * Math.log(u1 || 0.0001)) * Math.cos(2 * Math.PI * u2);
  }
}

/** Regime states for market condition simulation */
type MarketRegime = "trending_up" | "trending_down" | "ranging" | "volatile";

interface GeneratorState {
  price: number;
  regime: MarketRegime;
  regimeCountdown: number;
  volatilityMultiplier: number;
  trendBias: number;
}

/**
 * Generates an array of OHLCV candles for a given instrument and timeframe.
 */
export function generateOHLCV(
  instrument: string,
  timeframe: Timeframe,
  count: number,
  sessionSeed?: number
): OHLCV[] {
  const config = getInstrument(instrument);
  const tfConfig = TIMEFRAME_CONFIG[timeframe];

  const seed =
    sessionSeed ??
    Array.from(instrument).reduce((acc, c) => acc + c.charCodeAt(0), 0) * 31337;
  const rng = new SeededRandom(seed);

  const candles: OHLCV[] = [];

  const state: GeneratorState = {
    price: config.basePrice,
    regime: "ranging",
    regimeCountdown: 30 + Math.floor(rng.next() * 50),
    volatilityMultiplier: 1.0,
    trendBias: 0,
  };

  const now = Math.floor(Date.now() / 1000);
  const startTime = now - count * tfConfig.seconds;

  for (let i = 0; i < count; i++) {
    const candle = generateSingleCandle(config, tfConfig.seconds, state, rng);
    candle.time = startTime + i * tfConfig.seconds;
    candles.push(candle);

    state.regimeCountdown--;
    if (state.regimeCountdown <= 0) {
      transitionRegime(state, rng);
    }
  }

  return candles;
}

/**
 * Generate a single OHLCV candle.
 */
function generateSingleCandle(
  config: InstrumentSpec,
  intervalSeconds: number,
  state: GeneratorState,
  rng: SeededRandom
): OHLCV {
  const dt = intervalSeconds / (365.25 * 86400); 
  const sigma = config.volatility * state.volatilityMultiplier;
  const mu = state.trendBias;

  const SUB_STEPS = 10;
  const subDt = dt / SUB_STEPS;

  const open = state.price;
  let high = open;
  let low = open;
  let current = open;

  for (let s = 0; s < SUB_STEPS; s++) {
    const drift = mu * subDt;
    const diffusion = sigma * Math.sqrt(subDt) * rng.nextGaussian();

    const reversionForce =
      config.meanReversion * (config.basePrice - current) * subDt;

    current = current * (1 + drift + diffusion) + reversionForce;
    current = Math.max(current, config.tickSize * 10);

    high = Math.max(high, current);
    low = Math.min(low, current);
  }

  const close = current;
  state.price = close;

  const range = (high - low) / config.basePrice;
  const normalizedRange = range / (sigma * Math.sqrt(dt) + 0.0001);
  const volumeBase =
    config.volumeRange[0] +
    rng.next() * (config.volumeRange[1] - config.volumeRange[0]);
  const volume = Math.round(volumeBase * (0.5 + normalizedRange * 0.8));

  return {
    time: 0,
    open: roundToDecimals(open, config.pricePrecision),
    high: roundToDecimals(high, config.pricePrecision),
    low: roundToDecimals(low, config.pricePrecision),
    close: roundToDecimals(close, config.pricePrecision),
    volume: Math.max(1, volume),
  };
}

function transitionRegime(state: GeneratorState, rng: SeededRandom): void {
  const roll = rng.next();

  if (roll < 0.25) {
    state.regime = "trending_up";
    state.trendBias = 0.03 + rng.next() * 0.07;
    state.volatilityMultiplier = 0.8 + rng.next() * 0.4;
  } else if (roll < 0.5) {
    state.regime = "trending_down";
    state.trendBias = -(0.03 + rng.next() * 0.07);
    state.volatilityMultiplier = 0.8 + rng.next() * 0.4;
  } else if (roll < 0.85) {
    state.regime = "ranging";
    state.trendBias = (rng.next() - 0.5) * 0.02;
    state.volatilityMultiplier = 0.5 + rng.next() * 0.5;
  } else {
    state.regime = "volatile";
    state.trendBias = (rng.next() - 0.5) * 0.15;
    state.volatilityMultiplier = 1.5 + rng.next() * 1.5;
  }

  state.regimeCountdown = 20 + Math.floor(rng.next() * 60);
}

export function generateTick(
  instrument: string,
  lastPrice: number,
  seed: number
): { price: number; bid: number; ask: number; volume: number } {
  const config = getInstrument(instrument);
  const rng = new SeededRandom(seed);

  const tickVol = config.volatility / Math.sqrt(365.25 * 86400);
  const move = lastPrice * tickVol * rng.nextGaussian() * 5;
  const reversion =
    config.meanReversion * (config.basePrice - lastPrice) * 0.001;
  const newPrice = Math.max(
    config.tickSize * 10,
    lastPrice + move + reversion
  );

  const price = roundToDecimals(newPrice, config.pricePrecision);
  const halfSpread = config.baseSpread / 2;

  return {
    price,
    bid: roundToDecimals(price - halfSpread, config.pricePrecision),
    ask: roundToDecimals(price + halfSpread, config.pricePrecision),
    volume: Math.round(
      config.volumeRange[0] * (0.3 + rng.next() * 0.7)
    ),
  };
}

export function toHeikinAshi(candles: OHLCV[]): OHLCV[] {
  if (candles.length === 0) return [];

  const ha: OHLCV[] = [];
  let prevHaOpen = candles[0].open;
  let prevHaClose = (candles[0].open + candles[0].high + candles[0].low + candles[0].close) / 4;

  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const haClose = (c.open + c.high + c.low + c.close) / 4;
    const haOpen = (prevHaOpen + prevHaClose) / 2;
    const haHigh = Math.max(c.high, haOpen, haClose);
    const haLow = Math.min(c.low, haOpen, haClose);

    const decimals = getDecimalsFromPrice(c.close);
    ha.push({
      time: c.time,
      open: roundToDecimals(haOpen, decimals),
      high: roundToDecimals(haHigh, decimals),
      low: roundToDecimals(haLow, decimals),
      close: roundToDecimals(haClose, decimals),
      volume: c.volume,
    });

    prevHaOpen = haOpen;
    prevHaClose = haClose;
  }

  return ha;
}

function roundToDecimals(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function getDecimalsFromPrice(price: number): number {
  if (price < 10) return 5;
  if (price < 100) return 4;
  return 2;
}

