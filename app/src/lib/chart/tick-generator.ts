import type { OHLCV, Tick } from "./chart-types";
import { getInstrument } from "./chart-types";

/**
 * Seeded Pseudo-Random Number Generator (Mulberry32).
 * Guarantees that the same seed always produces the same sequence of numbers.
 */
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Creates a deterministic numeric seed from a string.
 */
function xmur3(str: string) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

/**
 * Generates deterministic intra-candle micro-ticks for smooth replay and realistic execution.
 * 
 * Rules:
 * - Always starts at Open
 * - Always ends exactly at Close
 * - Never exceeds High or drops below Low
 * - Generates 10 to 20 ticks based on volatility
 * - Total tick volume sums exactly to candle volume
 */
export function generateTicks(
  candle: OHLCV,
  instrumentSymbol: string,
  baseSeed: string,
  volatilityRegime: number = 1.0
): Tick[] {
  // OHLC Validation Guard
  if (candle.high < candle.low) {
    throw new Error(`Invalid OHLC candle: High (${candle.high}) is less than Low (${candle.low})`);
  }
  if (candle.open > candle.high || candle.open < candle.low) {
    throw new Error(`Invalid OHLC candle: Open (${candle.open}) is outside High/Low range`);
  }
  if (candle.close > candle.high || candle.close < candle.low) {
    throw new Error(`Invalid OHLC candle: Close (${candle.close}) is outside High/Low range`);
  }

  // 1. Initialize Deterministic PRNG
  const seedGenerator = xmur3(`${baseSeed}-${candle.time}`);
  const prng = mulberry32(seedGenerator());

  const inst = getInstrument(instrumentSymbol);
  const spread = inst.baseSpread;

  // 2. Determine number of ticks based on volatility (10 to 20)
  const numTicks = Math.floor(10 + prng() * 10 * volatilityRegime);
  const ticks: Tick[] = [];

  const { open, high, low, close, volume, time } = candle;

  // Edge Case: Doji or 0-range candle
  if (high === low) {
    for (let i = 0; i < numTicks; i++) {
      const isLast = i === numTicks - 1;
      ticks.push({
        time: time + i, // Strictly increasing timestamp offset
        price: close,
        volume: isLast ? volume - (volume / numTicks) * i : volume / numTicks, // Ensures exact sum
        bid: close - spread / 2,
        ask: close + spread / 2,
      });
    }
    return ticks;
  }

  // 3. Determine the core path points
  const hitsHighFirst = prng() > 0.5;
  const extremum1 = hitsHighFirst ? high : low;
  const extremum2 = hitsHighFirst ? low : high;

  let remainingTicks = numTicks - 4; // Reserve 4 anchor points (Open, E1, E2, Close)
  let s1Ticks = 1 + Math.floor(prng() * (remainingTicks / 2));
  remainingTicks -= (s1Ticks - 1);
  let s2Ticks = 1 + Math.floor(prng() * (remainingTicks / 2));
  remainingTicks -= (s2Ticks - 1);
  let s3Ticks = 1 + remainingTicks;

  const pathPoints: number[] = [open];

  const interpolateWithNoise = (start: number, end: number, steps: number) => {
    if (steps <= 1) return;
    const stepSize = (end - start) / steps;
    for (let i = 1; i < steps; i++) {
      const basePrice = start + stepSize * i;
      const noiseMax = Math.abs(stepSize) * 0.5 * volatilityRegime;
      let noisyPrice = basePrice + (prng() * 2 - 1) * noiseMax;
      
      noisyPrice = Math.max(low, Math.min(high, noisyPrice));
      pathPoints.push(noisyPrice);
    }
  };

  interpolateWithNoise(open, extremum1, s1Ticks);
  pathPoints.push(extremum1);
  
  interpolateWithNoise(extremum1, extremum2, s2Ticks);
  pathPoints.push(extremum2);
  
  interpolateWithNoise(extremum2, close, s3Ticks);
  pathPoints.push(close);

  // 4. Map to Tick objects
  const volumePerTick = Math.floor(volume / pathPoints.length);
  let volumeDistributed = 0;
  
  pathPoints.forEach((price, index) => {
    const isLast = index === pathPoints.length - 1;
    const tickVol = isLast ? volume - volumeDistributed : volumePerTick;
    volumeDistributed += tickVol;

    ticks.push({
      time: time + index, // Strictly increasing
      price: price,
      volume: tickVol,
      bid: price - spread / 2,
      ask: price + spread / 2,
    });
  });

  return ticks;
}
