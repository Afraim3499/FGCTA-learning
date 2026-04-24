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
