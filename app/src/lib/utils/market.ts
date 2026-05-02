import { UTCTimestamp } from "lightweight-charts";

export interface Candle {
  time: UTCTimestamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

/**
 * Generates realistic-looking mock market data for simulation and lab practice.
 */
export function generateMockCandles(count: number = 100, basePrice: number = 2000): Candle[] {
  const data: Candle[] = [];
  let currentPrice = basePrice;
  const now = Math.floor(Date.now() / 1000);
  
  for (let i = 0; i < count; i++) {
    const time = (now - (count - i) * 3600 * 24) as UTCTimestamp; // Daily candles
    const volatility = currentPrice * 0.01;
    
    const open = currentPrice;
    const high = open + Math.random() * volatility;
    const low = open - Math.random() * volatility;
    const close = low + Math.random() * (high - low);
    
    data.push({ time, open, high, low, close });
    currentPrice = close;
  }
  
  return data;
}

/**
 * Simple seeded random number generator
 */
function seededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  
  return function() {
    const x = Math.sin(hash++) * 10000;
    return x - Math.floor(x);
  };
}

/**
 * Generates deterministic candles for a specific concept based on its logicId.
 */
export function getConceptCandles(logicId: string, count: number = 200, basePrice: number = 2500): Candle[] {
  const rand = seededRandom(logicId);
  const data: Candle[] = [];
  let currentPrice = basePrice;
  
  // Static starting time for determinism
  const startTime = 1704067200; // 2024-01-01
  
  for (let i = 0; i < count; i++) {
    const time = (startTime + i * 3600) as UTCTimestamp; // Hourly candles
    
    // Logic-based volatility adjustment (can be expanded)
    const volMultiplier = logicId.includes("BO_") ? 0.02 : 0.01;
    const volatility = currentPrice * volMultiplier;
    
    const open = currentPrice;
    const high = open + rand() * volatility;
    const low = open - rand() * volatility;
    const close = low + rand() * (high - low);
    
    data.push({ time, open, high, low, close });
    currentPrice = close;
  }
  
  return data;
}
