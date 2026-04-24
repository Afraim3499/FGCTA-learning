// ============================================
// CHART ENGINE — TYPE DEFINITIONS
// Shared between server (price gen) and client (rendering)
// ============================================

/** Raw OHLCV candle — the fundamental data unit */
export interface OHLCV {
  time: number; // Unix timestamp in seconds (UTCTimestamp for lightweight-charts)
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

/** A single tick update from the server */
export interface Tick {
  time: number;
  price: number;
  volume: number;
  bid: number;
  ask: number;
}

/** Supported timeframes */
export type Timeframe = "1m" | "5m" | "15m" | "1h" | "4h" | "1D";

/** Timeframe metadata */
export const TIMEFRAME_CONFIG: Record<
  Timeframe,
  { label: string; seconds: number; defaultBars: number }
> = {
  "1m": { label: "1M", seconds: 60, defaultBars: 500 },
  "5m": { label: "5M", seconds: 300, defaultBars: 500 },
  "15m": { label: "15M", seconds: 900, defaultBars: 400 },
  "1h": { label: "1H", seconds: 3600, defaultBars: 300 },
  "4h": { label: "4H", seconds: 14400, defaultBars: 200 },
  "1D": { label: "1D", seconds: 86400, defaultBars: 200 },
};

/** Supported chart display types */
export type ChartType =
  | "candlestick"
  | "ohlc"
  | "line"
  | "area"
  | "baseline"
  | "heikin_ashi";

export const CHART_TYPES: { id: ChartType; label: string }[] = [
  { id: "candlestick", label: "Candlestick" },
  { id: "ohlc", label: "OHLC Bars" },
  { id: "line", label: "Line" },
  { id: "area", label: "Area" },
  { id: "baseline", label: "Baseline" },
  { id: "heikin_ashi", label: "Heikin-Ashi" },
];

/** Instrument definitions with realistic market parameters */
export interface InstrumentSpec {
  symbol: string;
  name: string;
  marketTrack: "forex" | "crypto" | "gold";
  quoteCurrency: string;
  basePrice: number;
  pricePrecision: number;
  sizePrecision: number;
  minSize: number;
  maxSize: number;
  contractSize: number;
  tickSize: number;
  tickValue: number;
  baseSpread: number;
  sizeLabel: string;
  inputMode: "lots" | "units" | "coins" | "ounces";
  volatility: number;
  meanReversion: number;
  volumeRange: [number, number];
}

export const INSTRUMENTS: InstrumentSpec[] = [
  {
    symbol: "EURUSD",
    name: "Euro / US Dollar",
    marketTrack: "forex",
    quoteCurrency: "USD",
    basePrice: 1.0850,
    pricePrecision: 5,
    sizePrecision: 2,
    minSize: 0.01,
    maxSize: 100,
    contractSize: 100000,
    tickSize: 0.0001,
    tickValue: 10, // Value of 1 pip (tickSize) for 1 standard lot (100k units)
    baseSpread: 0.0002,
    sizeLabel: "Lots",
    inputMode: "lots",
    volatility: 0.08,
    meanReversion: 0.02,
    volumeRange: [800, 5000],
  },
  {
    symbol: "BTCUSD",
    name: "Bitcoin / US Dollar",
    marketTrack: "crypto",
    quoteCurrency: "USD",
    basePrice: 65000,
    pricePrecision: 2,
    sizePrecision: 4,
    minSize: 0.0001,
    maxSize: 10,
    contractSize: 1,
    tickSize: 0.01,
    tickValue: 0.01,
    baseSpread: 15.0,
    sizeLabel: "Coins",
    inputMode: "coins",
    volatility: 0.65,
    meanReversion: 0.01,
    volumeRange: [50, 800],
  },
  {
    symbol: "XAUUSD",
    name: "Gold / US Dollar",
    marketTrack: "gold",
    quoteCurrency: "USD",
    basePrice: 2350,
    pricePrecision: 2,
    sizePrecision: 2,
    minSize: 0.01,
    maxSize: 50,
    contractSize: 100, // 1 lot = 100 oz
    tickSize: 0.01,
    tickValue: 1, // Value of 0.01 move for 1 standard lot (100 oz)
    baseSpread: 0.4,
    sizeLabel: "Lots",
    inputMode: "lots",
    volatility: 0.15,
    meanReversion: 0.03,
    volumeRange: [200, 3000],
  },
];

export function getInstrument(symbol: string): InstrumentSpec {
  const inst = INSTRUMENTS.find((i) => i.symbol === symbol);
  if (!inst) throw new Error(`Unknown instrument: ${symbol}`);
  return inst;
}

// ============================================
// INDICATOR TYPES
// ============================================

export type IndicatorId =
  | "sma"
  | "ema"
  | "bb"
  | "rsi"
  | "macd"
  | "atr"
  | "vwap";

export interface IndicatorConfig {
  id: IndicatorId;
  params: Record<string, number>;
  visible: boolean;
}

export const INDICATOR_DEFAULTS: Record<IndicatorId, { label: string; defaultParams: Record<string, number>; pane: "overlay" | "separate" }> = {
  sma: { label: "SMA", defaultParams: { period: 20 }, pane: "overlay" },
  ema: { label: "EMA", defaultParams: { period: 20 }, pane: "overlay" },
  bb: { label: "Bollinger Bands", defaultParams: { period: 20, stdDev: 2 }, pane: "overlay" },
  rsi: { label: "RSI", defaultParams: { period: 14 }, pane: "separate" },
  macd: { label: "MACD", defaultParams: { fast: 12, slow: 26, signal: 9 }, pane: "separate" },
  atr: { label: "ATR", defaultParams: { period: 14 }, pane: "separate" },
  vwap: { label: "VWAP", defaultParams: {}, pane: "overlay" },
};

// ============================================
// DRAWING TYPES
// ============================================

export type DrawingTool = "trendline" | "horizontal" | "fibonacci" | "rectangle";

export interface DrawingPoint {
  time: number;
  price: number;
}

export interface Drawing {
  id: string;
  tool: DrawingTool;
  points: DrawingPoint[];
  color: string;
  lineWidth: number;
  isSelected?: boolean;
  createdAt?: number; // cursorIndex when created
}

export type DrawingInteractionState = "idle" | "drawing" | "moving" | "editing";

export const DRAWING_TOOLS: { id: DrawingTool; label: string }[] = [
  { id: "trendline", label: "Trendline" },
  { id: "horizontal", label: "Horizontal Line" },
  { id: "fibonacci", label: "Fibonacci" },
  { id: "rectangle", label: "Rectangle" },
];

// ============================================
// TRADING & POSITION TYPES
// ============================================

export interface Position {
  id: string;
  instrument: string;
  direction: "buy" | "sell";
  entryPrice: number;
  lotSize: number;
  stopLoss: number;
  takeProfit?: number;
  openedAt: number; // cursorIndex
  closedAt?: number; // cursorIndex
  realizedPnL?: number;
  status: "open" | "closed";
}

export interface TradingState {
  balance: number;
  equity: number;
  maxEquity: number;
  unrealizedPnL: number;
  openPositions: Position[];
  closedPositions: Position[];
  dailyDrawdown: number;
  totalDrawdown: number;
}

// ============================================
// REPLAY & EXECUTION TYPES
// ============================================

export type PlaybackSpeed = 1 | 2 | 5;

export interface ReplaySession {
  scenarioId: string;
  cursorIndex: number;
  visibleStartIndex: number;
  visibleEndIndex: number;
  isPlaying: boolean;
  speed: PlaybackSpeed;
  checkpointIndex: number | null;
  replayMode: "training" | "review";
  checkpointSnapshot: CheckpointSnapshot | null;
}

export interface CheckpointSnapshot {
  cursorIndex: number;
  tradingState: TradingState;
  drawings: Drawing[];
}

export interface SlippageConfig {
  minSlippage: number; // in pips
  maxSlippage: number; // in pips
  volatilityScale: number; // multiplier for ATR
}

export interface FillResult {
  price: number;
  slippage: number;
  spread: number;
  totalCost: number;
  timestamp: number;
}
