// ============================================
// INDICATOR CALCULATION ENGINE
// Pure functions — no side effects, no dependencies.
// All calculations operate on OHLCV arrays.
// ============================================

import type { OHLCV } from "./chart-types";

// ---- Simple Moving Average ----

export function calcSMA(
  data: OHLCV[],
  period: number
): { time: number; value: number }[] {
  const result: { time: number; value: number }[] = [];
  for (let i = period - 1; i < data.length; i++) {
    let sum = 0;
    for (let j = i - period + 1; j <= i; j++) {
      sum += data[j].close;
    }
    result.push({ time: data[i].time, value: sum / period });
  }
  return result;
}

// ---- Exponential Moving Average ----

export function calcEMA(
  data: OHLCV[],
  period: number
): { time: number; value: number }[] {
  if (data.length < period) return [];
  const k = 2 / (period + 1);
  const result: { time: number; value: number }[] = [];

  // Seed with SMA of first `period` candles
  let ema = 0;
  for (let i = 0; i < period; i++) {
    ema += data[i].close;
  }
  ema /= period;
  result.push({ time: data[period - 1].time, value: ema });

  for (let i = period; i < data.length; i++) {
    ema = data[i].close * k + ema * (1 - k);
    result.push({ time: data[i].time, value: ema });
  }
  return result;
}

// ---- Bollinger Bands ----

export function calcBollingerBands(
  data: OHLCV[],
  period: number,
  stdDevMultiplier: number
): {
  upper: { time: number; value: number }[];
  middle: { time: number; value: number }[];
  lower: { time: number; value: number }[];
} {
  const upper: { time: number; value: number }[] = [];
  const middle: { time: number; value: number }[] = [];
  const lower: { time: number; value: number }[] = [];

  for (let i = period - 1; i < data.length; i++) {
    let sum = 0;
    for (let j = i - period + 1; j <= i; j++) {
      sum += data[j].close;
    }
    const mean = sum / period;

    let varianceSum = 0;
    for (let j = i - period + 1; j <= i; j++) {
      varianceSum += (data[j].close - mean) ** 2;
    }
    const stdDev = Math.sqrt(varianceSum / period);

    middle.push({ time: data[i].time, value: mean });
    upper.push({ time: data[i].time, value: mean + stdDevMultiplier * stdDev });
    lower.push({ time: data[i].time, value: mean - stdDevMultiplier * stdDev });
  }

  return { upper, middle, lower };
}

// ---- RSI (Relative Strength Index) ----

export function calcRSI(
  data: OHLCV[],
  period: number
): { time: number; value: number }[] {
  if (data.length < period + 1) return [];
  const result: { time: number; value: number }[] = [];

  // Calculate initial average gains/losses
  let avgGain = 0;
  let avgLoss = 0;
  for (let i = 1; i <= period; i++) {
    const change = data[i].close - data[i - 1].close;
    if (change > 0) avgGain += change;
    else avgLoss += Math.abs(change);
  }
  avgGain /= period;
  avgLoss /= period;

  const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
  result.push({
    time: data[period].time,
    value: 100 - 100 / (1 + rs),
  });

  // Smoothed RSI for subsequent values
  for (let i = period + 1; i < data.length; i++) {
    const change = data[i].close - data[i - 1].close;
    const gain = change > 0 ? change : 0;
    const loss = change < 0 ? Math.abs(change) : 0;

    avgGain = (avgGain * (period - 1) + gain) / period;
    avgLoss = (avgLoss * (period - 1) + loss) / period;

    const rsi = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);
    result.push({ time: data[i].time, value: rsi });
  }

  return result;
}

// ---- MACD ----

export function calcMACD(
  data: OHLCV[],
  fastPeriod: number,
  slowPeriod: number,
  signalPeriod: number
): {
  macd: { time: number; value: number }[];
  signal: { time: number; value: number }[];
  histogram: { time: number; value: number; color: string }[];
} {
  const fastEMA = calcEMA(data, fastPeriod);
  const slowEMA = calcEMA(data, slowPeriod);

  // Align arrays by time
  const slowTimeSet = new Set(slowEMA.map((d) => d.time));
  const alignedFast = fastEMA.filter((d) => slowTimeSet.has(d.time));

  const macdLine: { time: number; value: number }[] = [];
  for (let i = 0; i < slowEMA.length; i++) {
    const fast = alignedFast.find((f) => f.time === slowEMA[i].time);
    if (fast) {
      macdLine.push({
        time: slowEMA[i].time,
        value: fast.value - slowEMA[i].value,
      });
    }
  }

  // Signal line = EMA of MACD values
  const signal: { time: number; value: number }[] = [];
  if (macdLine.length >= signalPeriod) {
    const k = 2 / (signalPeriod + 1);
    let sigEma = 0;
    for (let i = 0; i < signalPeriod; i++) {
      sigEma += macdLine[i].value;
    }
    sigEma /= signalPeriod;
    signal.push({ time: macdLine[signalPeriod - 1].time, value: sigEma });

    for (let i = signalPeriod; i < macdLine.length; i++) {
      sigEma = macdLine[i].value * k + sigEma * (1 - k);
      signal.push({ time: macdLine[i].time, value: sigEma });
    }
  }

  // Histogram = MACD - Signal
  const signalTimeMap = new Map(signal.map((s) => [s.time, s.value]));
  const histogram: { time: number; value: number; color: string }[] = [];
  for (const m of macdLine) {
    const s = signalTimeMap.get(m.time);
    if (s !== undefined) {
      const val = m.value - s;
      histogram.push({
        time: m.time,
        value: val,
        color: val >= 0 ? "rgba(16, 185, 129, 0.6)" : "rgba(239, 68, 68, 0.6)",
      });
    }
  }

  return { macd: macdLine, signal, histogram };
}

// ---- ATR (Average True Range) ----

export function calcATR(
  data: OHLCV[],
  period: number
): { time: number; value: number }[] {
  if (data.length < period + 1) return [];

  const trueRanges: number[] = [];
  for (let i = 1; i < data.length; i++) {
    const tr = Math.max(
      data[i].high - data[i].low,
      Math.abs(data[i].high - data[i - 1].close),
      Math.abs(data[i].low - data[i - 1].close)
    );
    trueRanges.push(tr);
  }

  const result: { time: number; value: number }[] = [];
  let atr = 0;
  for (let i = 0; i < period; i++) {
    atr += trueRanges[i];
  }
  atr /= period;
  result.push({ time: data[period].time, value: atr });

  for (let i = period; i < trueRanges.length; i++) {
    atr = (atr * (period - 1) + trueRanges[i]) / period;
    result.push({ time: data[i + 1].time, value: atr });
  }

  return result;
}

// ---- VWAP (Volume Weighted Average Price) ----

export function calcVWAP(
  data: OHLCV[]
): { time: number; value: number }[] {
  const result: { time: number; value: number }[] = [];
  let cumulativeTPV = 0; // typical price * volume
  let cumulativeVolume = 0;

  for (const candle of data) {
    const typicalPrice = (candle.high + candle.low + candle.close) / 3;
    cumulativeTPV += typicalPrice * candle.volume;
    cumulativeVolume += candle.volume;

    result.push({
      time: candle.time,
      value: cumulativeVolume > 0 ? cumulativeTPV / cumulativeVolume : typicalPrice,
    });
  }

  return result;
}
