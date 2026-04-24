"use server";

// ============================================
// CHART SERVER ACTIONS
// All price generation runs server-side to prevent manipulation.
// ============================================

import { generateOHLCV, generateTick } from "./price-generator";
import type { OHLCV, Timeframe } from "./chart-types";
import { TIMEFRAME_CONFIG, getInstrument } from "./chart-types";

/**
 * Fetches historical OHLCV chart data for a given instrument and timeframe.
 * Data is generated server-side using the seeded price engine.
 */
export async function getChartData(
  instrument: string,
  timeframe: Timeframe,
  count?: number
): Promise<OHLCV[]> {
  const config = TIMEFRAME_CONFIG[timeframe];
  const barCount = count ?? config.defaultBars;

  // Validate instrument exists
  getInstrument(instrument);

  // Generate deterministic candles seeded by instrument + timeframe
  const seed =
    Array.from(instrument + timeframe).reduce(
      (acc, c) => acc + c.charCodeAt(0),
      0
    ) * 31337;

  const candles = generateOHLCV(instrument, timeframe, barCount, seed);
  return candles;
}

/**
 * Returns the latest simulated price tick for real-time chart updates.
 * Uses a time-based seed so the same second returns the same tick (idempotent).
 */
export async function getLatestTick(
  instrument: string,
  lastPrice: number
): Promise<{
  price: number;
  bid: number;
  ask: number;
  volume: number;
  timestamp: number;
}> {
  const now = Math.floor(Date.now() / 1000);
  const seed = now * 7919 + instrument.charCodeAt(0) * 31;
  const tick = generateTick(instrument, lastPrice, seed);

  return {
    ...tick,
    timestamp: now,
  };
}

/**
 * Returns configuration for all available instruments.
 */
export async function getInstruments() {
  const { INSTRUMENTS } = await import("./chart-types");
  return INSTRUMENTS.map((inst) => ({
    symbol: inst.symbol,
    name: inst.name,
    marketTrack: inst.marketTrack,
    pricePrecision: inst.pricePrecision,
    tickSize: inst.tickSize,
    baseSpread: inst.baseSpread,
    sizeLabel: inst.sizeLabel,
  }));
}
