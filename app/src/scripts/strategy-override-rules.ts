export type StrategyAssetClass = "CRYPTO" | "FOREX" | "GOLD" | string;

export interface VisualModelLike {
  visualCategory?: string;
  componentType?: string;
  chartTitle?: string;
  chartPurpose?: string;
  marketConditionShown?: string;
  setupFormationShown?: string;
  entryOrActivationZone?: string;
  confirmationMarker?: string;
  invalidationZone?: string;
  targetZone?: string;
  trapZone?: string;
  warningLabel?: string;
  whatLearnerShouldNotice?: string;
  mistakePrevented?: string;
  interactionType?: string;
  requiredLabels?: string[];
  requiredZones?: string[];
  assetSpecificVisualNotes?: string;
  [key: string]: unknown;
}

export interface Batch4Target {
  ordinal: number;
  id: string;
  name: string;
  assetClass: "FOREX" | "GOLD" | "CRYPTO";
}

export const BATCH_4_TARGETS: Batch4Target[] = [
  { ordinal: 31, id: "54152e9c-25b6-4f7e-bc7c-4748d5f2316f", name: "Bollinger Band Trend Breakout", assetClass: "FOREX" },
  { ordinal: 32, id: "45ceef50-94dd-428e-8e22-689005f9a84a", name: "Overnight Range Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 33, id: "662f27f0-7cc7-484c-9a63-95abd4a00c2d", name: "Supertrend Indicator Strategy", assetClass: "CRYPTO" },
  { ordinal: 34, id: "7e433f12-60d0-4687-bc38-19102b67a864", name: "Price Channel Breakout", assetClass: "FOREX" },
  { ordinal: 35, id: "264882e6-4ba5-446f-8ed8-1a6d39e7fb8b", name: "Donchian Channel Breakout", assetClass: "CRYPTO" },
  { ordinal: 36, id: "548304b2-e14b-4197-8a64-8871de52e5ec", name: "Higher-High & Higher-Low Trend Structure", assetClass: "FOREX" },
  { ordinal: 37, id: "8a34ebe6-597e-47ba-a85a-9c61486ac488", name: "Bollinger Band Breakout", assetClass: "GOLD" },
  { ordinal: 38, id: "0e05c77c-bbb9-43a6-86dc-174b4a0289e9", name: "Volatility Breakout (ATR) Strategy", assetClass: "CRYPTO" },
  { ordinal: 39, id: "908c3611-b819-403e-ac16-0b3eca7323f9", name: "Volatility-Adjusted Trend (ATR Filter)", assetClass: "FOREX" },
  { ordinal: 40, id: "c4329999-e991-4fa8-87b4-f7c6973a4051", name: "Bollinger Band Breakout (Intraday)", assetClass: "GOLD" },
];

export const PILOT_20_TARGETS: Batch4Target[] = [
  { ordinal: 41, id: "51332489-42ba-48ed-84ea-5bd1281f25d2", name: "Range Breakout at Support/Resistance", assetClass: "CRYPTO" },
  { ordinal: 42, id: "6f7fddbf-a818-441f-8e6c-cea6060cfb7d", name: "Bollinger Band Squeeze Breakout", assetClass: "CRYPTO" },
  { ordinal: 43, id: "b89c3e9c-c643-4852-9147-99d12d0f39d1", name: "Trend-Following Using Parabolic SAR", assetClass: "FOREX" },
  { ordinal: 44, id: "e3ffafcb-3578-42cb-b055-369ad417506a", name: "Bollinger Band Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 45, id: "888fcb2d-f14b-4674-9c13-2f677a3e106b", name: "Gap Breakout Strategy", assetClass: "CRYPTO" },
  { ordinal: 46, id: "cb823d9d-932c-4fb4-a512-fad9d2ead154", name: "Guppy Multiple Moving Average (GMMA) Trend", assetClass: "FOREX" },
  { ordinal: 47, id: "dcf01c2b-b799-4ade-8c06-31c64cc8c9b3", name: "Donchian Channel Breakout", assetClass: "GOLD" },
  { ordinal: 48, id: "6a5bc7de-e322-491d-82de-c04fc9c24eaf", name: "Keltner Channel Trend-Follow", assetClass: "FOREX" },
  { ordinal: 49, id: "c089f522-bade-412c-84d3-fc93bb6f1bea", name: "Donchian Channel Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 50, id: "f92ea260-580c-40ba-a319-f1aedda181ec", name: "Asia Session Breakout", assetClass: "CRYPTO" },
  { ordinal: 51, id: "282dd0e7-3442-4c52-b119-b18e34ad6715", name: "Trend-Following with Heikin-Ashi Candles", assetClass: "FOREX" },
  { ordinal: 52, id: "97534036-4dba-4ae1-8607-9c0c754b5105", name: "Donchian Channel Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 53, id: "f29fe79a-5066-45e0-8ba1-4eeddc70224a", name: "Mean Reversion via Bollinger Bands", assetClass: "CRYPTO" },
  { ordinal: 54, id: "0011598f-73bf-4bab-9016-2b6f0ba1ccb7", name: "Keltner Channel Mean Reversion", assetClass: "CRYPTO" },
  { ordinal: 55, id: "576a9012-f400-4113-820b-cb86bc5412b0", name: "Pivot Point Breakout", assetClass: "GOLD" },
  { ordinal: 56, id: "91040b9d-fdfb-4167-ad79-56728a72f857", name: "Support-Resistance Breakout", assetClass: "FOREX" },
  { ordinal: 57, id: "09b66ace-fc16-485b-b630-fb8e06c51139", name: "Pre-London Session Breakout", assetClass: "FOREX" },
  { ordinal: 58, id: "38e66098-f01a-40cb-a4e6-5046b8f01ab6", name: "RSI Overbought/Oversold Mean Reversion", assetClass: "CRYPTO" },
  { ordinal: 59, id: "3f2bef97-a5dc-4175-a8e1-0a8ca0920087", name: "Pivot Point Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 60, id: "3691cf4d-9351-43c5-a55c-cc82c3e7afca", name: "New York Session Breakout", assetClass: "FOREX" },
];

export const BATCH_61_80_TARGETS: Batch4Target[] = [
  { ordinal: 61, id: "3b29ad3c-11b5-47fa-ac1b-f00c3b6cc220", name: "Pivot Point Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 62, id: "4ac20393-3b1b-4d72-a9a9-23f0f71161b9", name: "Z-Score Mean Reversion", assetClass: "CRYPTO" },
  { ordinal: 63, id: "0728bc3c-f5cc-424a-8805-9a4887b377b7", name: "Pair-wise Mean Reversion (Statistical Arbitrage)", assetClass: "CRYPTO" },
  { ordinal: 64, id: "8cf0e21d-ea89-4bce-9a75-3f231dce8ee7", name: "Bollinger Band Mean Reversion", assetClass: "GOLD" },
  { ordinal: 65, id: "a2e9123d-bbf8-4d89-9813-9b2c2b346268", name: "False Breakout (Fakey) Strategy", assetClass: "FOREX" },
  { ordinal: 66, id: "75633c38-1e1a-448f-9273-c865c1684f4d", name: "Breakout with Volume Confirmation", assetClass: "FOREX" },
  { ordinal: 67, id: "96b7f6b9-0256-4247-a12f-f209f018d5e6", name: "Bollinger Band Mean Reversion (Intraday)", assetClass: "GOLD" },
  { ordinal: 68, id: "c4edf7ee-e05b-4c94-b2ca-71f6ebc01afb", name: "Momentum Strength Strategy", assetClass: "CRYPTO" },
  { ordinal: 69, id: "0abb67e8-0be2-4483-8778-58cb46c0ef7f", name: "Volume-Weighted Momentum", assetClass: "CRYPTO" },
  { ordinal: 70, id: "5971fcc7-8b8a-4191-988e-b8b2c35a44c7", name: "Bollinger Band Mean Reversion (Swing)", assetClass: "GOLD" },
  { ordinal: 71, id: "82e17374-6add-440b-ab8c-edcd4394d1a8", name: "Breakout with Momentum Confirmation (RSI/Momentum)", assetClass: "FOREX" },
  { ordinal: 72, id: "2e1fb8e2-2f5f-4393-a0c6-b96dbe98331d", name: "RSI Momentum Strategy", assetClass: "CRYPTO" },
  { ordinal: 73, id: "5ddb159c-3051-43b2-b282-b32c50a17f59", name: "Volatility Expansion Breakout", assetClass: "FOREX" },
  { ordinal: 74, id: "e5f0ec3e-59d5-4f26-95fe-cd0e92db2cd4", name: "RSI Mean Reversion", assetClass: "GOLD" },
  { ordinal: 75, id: "784e2bdb-b1ae-4c7c-86af-4da5e204007c", name: "RSI Mean Reversion (Intraday)", assetClass: "GOLD" },
  { ordinal: 76, id: "9ec9bfda-a430-41ee-8224-00c5e3a5674f", name: "Grid Breakout (Grid Trading)", assetClass: "FOREX" },
  { ordinal: 77, id: "ba86225f-1022-4d05-877b-540dfc760d8f", name: "MACD Histogram Momentum", assetClass: "CRYPTO" },
  { ordinal: 78, id: "3423b58d-5050-4b96-98e7-d591468c4a13", name: "Price-Rate-of-Change (ROC) Strategy", assetClass: "CRYPTO" },
  { ordinal: 79, id: "6affdf20-2d1f-4830-ad96-5d34e35088a8", name: "RSI Mean Reversion (Swing)", assetClass: "GOLD" },
  { ordinal: 80, id: "7d0a766c-4035-4c12-94a9-bc2d6b5b851f", name: "News Release Breakout", assetClass: "FOREX" },
];

export const BATCH_81_100_TARGETS: Batch4Target[] = [
  { ordinal: 81, id: "6ca2f969-dcce-4817-849c-180e830b7708", name: "Ichimoku Cloud Trend", assetClass: "CRYPTO" },
  { ordinal: 82, id: "c9404e89-906b-4f46-bac1-f79b81afd047", name: "Time-Stop Breakout (Opening Range Breakout)", assetClass: "FOREX" },
  { ordinal: 83, id: "fbb12542-43c5-4d36-a72a-79d719c61b1e", name: "VWAP Reversion", assetClass: "GOLD" },
  { ordinal: 84, id: "71ea8d75-0c8b-4f78-9a22-7a266c61f99a", name: "VWAP Reversion (Intraday)", assetClass: "GOLD" },
  { ordinal: 85, id: "896bbc6c-a676-4832-a505-d06f023ecfe8", name: "Stochastic Oscillator Strategy", assetClass: "CRYPTO" },
  { ordinal: 86, id: "ac3db937-ed95-49ff-a3ac-440915dc48d4", name: "Oscillator Range Trading", assetClass: "FOREX" },
  { ordinal: 87, id: "09452fe9-a557-4cf7-9487-ab6d97e296dc", name: "Commodity Channel Index (CCI) Strategy", assetClass: "CRYPTO" },
  { ordinal: 88, id: "5168cf28-ed10-49ba-b5ac-04027f62d10f", name: "Bollinger Band Mean Reversion", assetClass: "FOREX" },
  { ordinal: 89, id: "9c8618dd-956a-422f-8d1c-6cfe817917bc", name: "VWAP Reversion (Swing)", assetClass: "GOLD" },
  { ordinal: 90, id: "491edc5b-bddb-4980-aca3-fbcf994476aa", name: "Moving Average Crossover (20/50 EMA)", assetClass: "GOLD" },
  { ordinal: 91, id: "4f2b4372-fa9c-4784-8412-fcf2df377532", name: "ATR Channel Trend", assetClass: "CRYPTO" },
  { ordinal: 92, id: "9f6d1a0b-a564-4c0d-b020-9e4a283b7769", name: "RSI Mean Reversion", assetClass: "FOREX" },
  { ordinal: 93, id: "5b7e4b4c-8300-46e4-a94d-e29a35b462c6", name: "Moving Average Mean Reversion", assetClass: "FOREX" },
  { ordinal: 94, id: "a496e436-5752-4d1b-912b-a0632538e362", name: "Volume-Price Confirmation", assetClass: "CRYPTO" },
  { ordinal: 95, id: "cbe17918-f93f-48b5-be05-f3ab3c52856d", name: "Moving Average Crossover (20/50 EMA) (Intraday)", assetClass: "GOLD" },
  { ordinal: 96, id: "2938cc1e-8a69-49e8-965e-e69a513b4585", name: "On-Balance Volume (OBV) Divergence", assetClass: "CRYPTO" },
  { ordinal: 97, id: "a2a911c8-dc7b-46b1-9c5f-ed8e64960adc", name: "Pairs Trading (Cointegration)", assetClass: "FOREX" },
  { ordinal: 98, id: "c4e518fc-2de6-4a2d-a8af-5b2c5f552b02", name: "Moving Average Crossover (20/50 EMA) (Swing)", assetClass: "GOLD" },
  { ordinal: 99, id: "2babbc7c-e5c3-46b3-95b6-7471ec64552f", name: "VWAP Trend Reversal", assetClass: "CRYPTO" },
  { ordinal: 100, id: "af3efe3a-7f29-4f8d-a884-137a875c48e6", name: "Bollinger Band Squeeze Reversion", assetClass: "FOREX" },
];

export const BATCH_101_120_TARGETS: Batch4Target[] = [
  { ordinal: 101, id: "d451237e-f03d-4ab9-a2c3-61cc3ccc6f22", name: "Golden Cross (50/200 SMA)", assetClass: "GOLD" },
  { ordinal: 102, id: "8f18ee6d-37d8-4381-9887-8a13895040cf", name: "Support and Resistance Bounce", assetClass: "CRYPTO" },
  { ordinal: 103, id: "afa031cb-c7d3-4d65-b7d6-3c9e5fcaf311", name: "Golden Cross (50/200 SMA) (Intraday)", assetClass: "GOLD" },
  { ordinal: 104, id: "e561f424-0b3a-476f-aa0d-1eec5841ca65", name: "Stochastic Oscillator Range Reversion", assetClass: "FOREX" },
  { ordinal: 105, id: "41b2d509-ee2c-4ed0-b8cc-02c761f65b40", name: "Golden Cross (50/200 SMA) (Swing)", assetClass: "GOLD" },
  { ordinal: 106, id: "502ebb25-686c-42e9-add9-2dbf3698ca4f", name: "Support/Resistance Scalping", assetClass: "CRYPTO" },
  { ordinal: 107, id: "8bcfef24-cefc-408d-8770-fe71669610da", name: "Mean Reversion with Z-Score", assetClass: "FOREX" },
  { ordinal: 108, id: "7ccc5d19-a4a6-4b82-9f8b-0464f9593194", name: "Bullish Engulfing Pattern", assetClass: "CRYPTO" },
  { ordinal: 109, id: "dea3d2bb-c6be-462f-8437-0b37d3bc26ce", name: "EMA Cross with RSI Filter", assetClass: "GOLD" },
  { ordinal: 110, id: "e33de523-6778-47da-80f9-9128ca99e7be", name: "Regression Channel Reversion", assetClass: "FOREX" },
  { ordinal: 111, id: "31c3d45c-7a01-488d-85fe-80e9720e3763", name: "VWAP Reversion (Volume Weighted Average Price)", assetClass: "FOREX" },
  { ordinal: 112, id: "85dbd266-bc29-4598-8995-efff7f00464f", name: "Support/Resistance Bounce", assetClass: "CRYPTO" },
  { ordinal: 113, id: "b95eed4d-b1fa-455f-afaa-35469d084818", name: "Bearish Engulfing Pattern", assetClass: "CRYPTO" },
  { ordinal: 114, id: "c7936cc4-a81e-4dc1-97b6-74a5859d25bc", name: "EMA Cross with RSI Filter (Intraday)", assetClass: "GOLD" },
  { ordinal: 115, id: "163ec38a-647e-4953-988f-7e2e801da7bd", name: "Pin Bar / Hammer Pattern", assetClass: "CRYPTO" },
  { ordinal: 116, id: "6d1bde77-087d-4a94-941a-daf5fcb12f07", name: "EMA Cross with RSI Filter (Swing)", assetClass: "GOLD" },
  { ordinal: 117, id: "cae2a2cc-f5c8-46a6-8432-9a977aeba237", name: "Intraday Scalping Mean Reversion", assetClass: "FOREX" },
  { ordinal: 118, id: "0b2c8f23-7524-4221-aba5-544d683b3473", name: "Shooting Star / Inverted Hammer", assetClass: "CRYPTO" },
  { ordinal: 119, id: "9bf79610-6adf-49be-b993-3db235dfb949", name: "MACD Momentum", assetClass: "GOLD" },
  { ordinal: 120, id: "9f07a2ff-3ed0-4549-83ce-7e97f0e8fb62", name: "Volatility Mean Reversion (ATR Regression)", assetClass: "FOREX" },
];

export const BATCH_121_140_TARGETS: Batch4Target[] = [
  { ordinal: 121, id: "1934148e-fdf7-4c8a-a880-9a246b1e15d6", name: "Inside Bar Breakout", assetClass: "CRYPTO" },
  { ordinal: 122, id: "af888b23-1238-4676-b730-6a0e9ca044ec", name: "Momentum Factor (Time-Series)", assetClass: "FOREX" },
  { ordinal: 123, id: "fc99919e-950b-4233-a86b-57c9e483828a", name: "MACD Momentum (Intraday)", assetClass: "GOLD" },
  { ordinal: 124, id: "3939cfaa-6590-48e1-94ed-a0631d1b254d", name: "Head and Shoulders Top", assetClass: "CRYPTO" },
  { ordinal: 125, id: "58ec5390-8350-48ee-96e7-23b553c74c16", name: "MACD Momentum (Swing)", assetClass: "GOLD" },
  { ordinal: 126, id: "66d321c0-be00-45de-ae62-36044f0da55f", name: "Rate of Change (ROC) Momentum", assetClass: "FOREX" },
  { ordinal: 127, id: "7d9cb8e6-fe83-464c-ae95-1d1567f93c35", name: "Rate of Change Momentum", assetClass: "GOLD" },
  { ordinal: 128, id: "a9e3b4fd-cf5c-4ffd-9bb7-891f6f6c33ce", name: "Inverse Head and Shoulders", assetClass: "CRYPTO" },
  { ordinal: 129, id: "d18cd22d-dc0a-4467-9143-1978ba7586e7", name: "Commodity Channel Index (CCI) Momentum", assetClass: "FOREX" },
  { ordinal: 130, id: "0cda4b00-d934-434d-8561-b3f118cb36b6", name: "Rate of Change Momentum (Intraday)", assetClass: "GOLD" },
  { ordinal: 131, id: "c6845772-2a95-48f6-9b1a-dc70c9d3c3c7", name: "Descending Triangle Breakout", assetClass: "CRYPTO" },
  { ordinal: 132, id: "eb862cad-bb9b-4da8-9f3e-f8b9826b7111", name: "Momentum Breakout with Volume", assetClass: "FOREX" },
  { ordinal: 133, id: "02b16558-a77f-476f-b029-daeca0c00cde", name: "Momentum Divergence", assetClass: "FOREX" },
  { ordinal: 134, id: "8a1608c5-3e88-42e0-b271-38760df13f2c", name: "Ascending Triangle Breakout", assetClass: "CRYPTO" },
  { ordinal: 135, id: "de9668f6-7fb5-446c-ac14-bceb530c0fae", name: "Rate of Change Momentum (Swing)", assetClass: "GOLD" },
  { ordinal: 136, id: "8306c21c-e914-4cfe-a0f6-192360bc827f", name: "DMI/ADX Trend System", assetClass: "GOLD" },
  { ordinal: 137, id: "c1127f50-de60-4c01-8e41-31053d1d39e7", name: "Symmetrical Triangle Breakout", assetClass: "CRYPTO" },
  { ordinal: 138, id: "f9eb20da-c0ea-44ca-9a56-aa1025918563", name: "Momentum with Moving Average Confirmation", assetClass: "FOREX" },
  { ordinal: 139, id: "34b2857e-22a3-4c98-8b3d-15941abd280d", name: "Absolute Momentum", assetClass: "FOREX" },
  { ordinal: 140, id: "375bb199-c98d-4008-8193-57db163402a9", name: "DMI/ADX Trend System (Intraday)", assetClass: "GOLD" },
];

export const BATCH_141_160_TARGETS: Batch4Target[] = [
  { ordinal: 141, id: "e8bb2d7c-bd97-422f-b23e-0d4f12a148f0", name: "Flag and Pennant Continuation", assetClass: "CRYPTO" },
  { ordinal: 142, id: "0bbc3d75-52e1-4a9c-b3ac-55e1fe9fd428", name: "Pin Bar Reversal", assetClass: "FOREX" },
  { ordinal: 143, id: "8d7c44ff-e6d2-4a54-9b2c-c95500ff5db3", name: "DMI/ADX Trend System (Swing)", assetClass: "GOLD" },
  { ordinal: 144, id: "c488d87e-6dac-4bfd-a31a-8d87a0b0a7e7", name: "ML Regression Price Prediction", assetClass: "CRYPTO" },
  { ordinal: 145, id: "2bd691f1-a274-49ad-9bda-f9a5091d953d", name: "Inside Bar Breakout", assetClass: "FOREX" },
  { ordinal: 146, id: "37a2d848-4067-4cab-aea9-22942accd14e", name: "Trendline Break and Retest", assetClass: "GOLD" },
  { ordinal: 147, id: "db4c6526-26b2-40af-a05e-b110896e0822", name: "Reinforcement Learning Trading Bot", assetClass: "CRYPTO" },
  { ordinal: 148, id: "13e2e541-7b63-45c6-996c-d94d3c8f4002", name: "Sentiment-Driven ML Model", assetClass: "CRYPTO" },
  { ordinal: 149, id: "56cefd7a-66e1-47c7-8c79-f7f6a48bb6da", name: "Outside Bar (Engulfing) Reversal", assetClass: "FOREX" },
  { ordinal: 150, id: "6e0dfa2c-9900-451f-963d-e125f6027932", name: "Trendline Break and Retest (Intraday)", assetClass: "GOLD" },
  { ordinal: 151, id: "15dbdfc0-e989-42a9-b0f6-a77e8d06d020", name: "Doji & Indecision Candles", assetClass: "FOREX" },
  { ordinal: 152, id: "4760bd42-6893-4d17-a9bc-c035cad770cc", name: "Autoencoder Anomaly Detection", assetClass: "CRYPTO" },
  { ordinal: 153, id: "ba9bf2f0-26eb-440a-a153-a80d2218f209", name: "Trendline Break and Retest (Swing)", assetClass: "GOLD" },
  { ordinal: 154, id: "113a72a9-2f04-46da-bafd-08c347a1a124", name: "Head & Shoulders Pattern", assetClass: "FOREX" },
  { ordinal: 155, id: "751da8e5-388c-4b86-b07f-bc62c857d49a", name: "Genetic Algorithm Strategy Optimization", assetClass: "CRYPTO" },
  { ordinal: 156, id: "b852376a-6ef1-4b1e-916b-58a2662cd68f", name: "Support/Resistance Bounce", assetClass: "GOLD" },
  { ordinal: 157, id: "b16a105b-3cfb-48d2-948f-3fedf1f6bde8", name: "Double Top / Bottom", assetClass: "FOREX" },
  { ordinal: 158, id: "c4ec7eaf-7df9-4d0c-ba07-c1ac592fbd0c", name: "Support/Resistance Bounce (Intraday)", assetClass: "GOLD" },
  { ordinal: 159, id: "eea0bc02-efbb-41f1-9d1c-3bb568c271f0", name: "High-Frequency Market Making", assetClass: "CRYPTO" },
  { ordinal: 160, id: "9e3bc521-41aa-43b9-b0e2-34de7950fd84", name: "Latency Arbitrage", assetClass: "CRYPTO" },
];

export const BATCH_161_180_TARGETS: Batch4Target[] = [
  { ordinal: 161, id: "ad481bb1-db73-484c-996c-e33bc5b9b460", name: "Support/Resistance Bounce (Swing)", assetClass: "GOLD" },
  { ordinal: 162, id: "b5eb4051-8a7b-4d81-9eae-a0b2e8e11795", name: "Triple Top / Bottom", assetClass: "FOREX" },
  { ordinal: 163, id: "284993f5-df8c-4ac6-8c50-44c062836780", name: "Engulfing Pattern", assetClass: "GOLD" },
  { ordinal: 164, id: "8503deed-5eb1-4912-a254-57184663c634", name: "Cup and Handle Pattern", assetClass: "FOREX" },
  { ordinal: 165, id: "cbf6a76f-8513-48d4-8cb3-a482c0b40066", name: "TWAP Execution Algorithm", assetClass: "CRYPTO" },
  { ordinal: 166, id: "0a594e72-1858-4852-ba27-44950e72299a", name: "Ascending Triangle Pattern", assetClass: "FOREX" },
  { ordinal: 167, id: "4d0dca00-a47c-4135-b21b-130fac5bd8c0", name: "VWAP Execution Algorithm", assetClass: "CRYPTO" },
  { ordinal: 168, id: "a1dd2828-cd6b-4b2d-8283-9bfa5901203f", name: "Engulfing Pattern (Intraday)", assetClass: "GOLD" },
  { ordinal: 169, id: "21417b83-f06b-4505-a9d8-e6542639e0b5", name: "Engulfing Pattern (Swing)", assetClass: "GOLD" },
  { ordinal: 170, id: "82c3b335-c266-41d3-abb0-dd753d01b738", name: "Descending Triangle Pattern", assetClass: "FOREX" },
  { ordinal: 171, id: "b1a22410-4067-4930-9390-858dcfa8a16a", name: "Iceberg Orders", assetClass: "CRYPTO" },
  { ordinal: 172, id: "13aa0a77-19f6-42cd-afd1-fde2eeaf4f02", name: "Pin Bar Reversal", assetClass: "GOLD" },
  { ordinal: 173, id: "56748bdb-3ef1-4048-903f-81dbee972c94", name: "Symmetrical Triangle Pattern", assetClass: "FOREX" },
  { ordinal: 174, id: "7fb1d7bd-7578-46e6-b344-455f19713824", name: "Multi-Timeframe Trend Confluence", assetClass: "CRYPTO" },
  { ordinal: 175, id: "03ad0164-12ee-4d17-96aa-da0fe64ec626", name: "Pin Bar Reversal (Intraday)", assetClass: "GOLD" },
  { ordinal: 176, id: "22e36006-ef9a-4048-8f71-d68e7c771b1c", name: "Volume Confirmation on Trend Signals", assetClass: "CRYPTO" },
  { ordinal: 177, id: "7c6cf948-cf22-4beb-954e-34dff0030eff", name: "Flag & Pennant Patterns", assetClass: "FOREX" },
  { ordinal: 178, id: "5ce2bc88-e661-4ebb-9963-406327a3484d", name: "Pin Bar Reversal (Swing)", assetClass: "GOLD" },
  { ordinal: 179, id: "9d4fd01b-a4d1-4cf2-af45-f310d969dd16", name: "Wedge Patterns (Falling & Rising)", assetClass: "FOREX" },
  { ordinal: 180, id: "f5c9bf81-3779-4f3e-8689-f3330c4f8a92", name: "Funding-Adjusted Breakout", assetClass: "CRYPTO" },
];

export const BATCH_181_200_TARGETS: Batch4Target[] = [
  { ordinal: 181, id: "17c0e353-851e-476a-90a7-dfe1b887ab9a", name: "Inside Bar Breakout", assetClass: "GOLD" },
  { ordinal: 182, id: "62bbe664-99c8-414c-b90f-067e11a65560", name: "Open Interest Confirmation", assetClass: "CRYPTO" },
  { ordinal: 183, id: "773d3bad-457f-41c1-92dd-884ee8dbd81f", name: "Rectangle (Range) Pattern", assetClass: "FOREX" },
  { ordinal: 184, id: "378e3397-aba4-4a8d-ab61-eb61d0b04449", name: "Trendline Bounce", assetClass: "FOREX" },
  { ordinal: 185, id: "39048402-2630-489c-b6c2-311b71ebb82a", name: "Inside Bar Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 186, id: "d183a7a5-29df-432e-a23c-3bf6a14400e1", name: "Bull/Bear Market Condition Adjustment", assetClass: "CRYPTO" },
  { ordinal: 187, id: "0c18fc0d-df61-4c45-9b77-f4b2929333b6", name: "Break of Structure (BOS)", assetClass: "FOREX" },
  { ordinal: 188, id: "6d7b9fdd-3d1c-44fc-b919-25709c628128", name: "Narrative Rotation Strategy", assetClass: "CRYPTO" },
  { ordinal: 189, id: "e05b5b76-ce6c-49d8-bf1e-5ebddf183b99", name: "Inside Bar Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 190, id: "1fe45d70-50cc-4ef2-9185-4fc4429a1e98", name: "Order Block Trading", assetClass: "FOREX" },
  { ordinal: 191, id: "36d8a014-9f12-4186-8647-2d1d56db984d", name: "Head and Shoulders", assetClass: "GOLD" },
  { ordinal: 192, id: "4c8f6a4b-af9e-437e-82ad-f8e828f8ef96", name: "Ecosystem Growth Play", assetClass: "CRYPTO" },
  { ordinal: 193, id: "26c5db92-6c85-4d96-83ff-36f8a59fb86d", name: "Tokenomics Supply-Demand Strategy", assetClass: "CRYPTO" },
  { ordinal: 194, id: "822b522b-86d9-4534-92f5-42680c6b15fe", name: "Head and Shoulders (Intraday)", assetClass: "GOLD" },
  { ordinal: 195, id: "a33198d7-8070-46ac-8a80-e281ff9e10d4", name: "Liquidity Sweep (Stop-Hunt) Setup", assetClass: "FOREX" },
  { ordinal: 196, id: "3899648c-0e28-400b-b87c-ec80668ed316", name: "Quasimodo (Over and Under) Pattern", assetClass: "FOREX" },
  { ordinal: 197, id: "46ba778f-d91d-4eba-8bd3-3d5c8c38d32b", name: "Token Unlock Event Trading", assetClass: "CRYPTO" },
  { ordinal: 198, id: "8cb41197-3710-4d11-9487-9031d1bb450c", name: "Head and Shoulders (Swing)", assetClass: "GOLD" },
  { ordinal: 199, id: "09ce5a31-c2c0-4a1c-b272-13fa0dbe00f2", name: "Double Top/Bottom", assetClass: "GOLD" },
  { ordinal: 200, id: "bb1d502b-ce6f-440a-a81f-2d606e80dd00", name: "Halving Cycle Strategy", assetClass: "CRYPTO" },
];

export const BATCH_201_220_TARGETS: Batch4Target[] = [
  { ordinal: 201, id: "d0b6f830-2109-4764-88aa-0d36f4f28f87", name: "Harmonic Patterns (Gartley, Butterfly, Bat)", assetClass: "FOREX" },
  { ordinal: 202, id: "7ef5d315-342f-4d6c-a805-e0ff94b28f70", name: "Double Top/Bottom (Intraday)", assetClass: "GOLD" },
  { ordinal: 203, id: "da0ac31d-d9cd-4feb-b3b9-d01cc5278923", name: "Elliott Wave Impulse/Corrective Patterns", assetClass: "FOREX" },
  { ordinal: 204, id: "eac97651-8cd1-4f20-a924-964d0f99e1d6", name: "Supply Shock / Burn Event Play", assetClass: "CRYPTO" },
  { ordinal: 205, id: "32ff8ffd-1e1f-4fb9-b03e-9fb9d318e0d2", name: "Candlestick Cluster Confluence", assetClass: "FOREX" },
  { ordinal: 206, id: "9cf54a52-0749-4ef6-9c2f-1afb3128c6fc", name: "Vesting Cliff Fade", assetClass: "CRYPTO" },
  { ordinal: 207, id: "d7ba63b5-28a9-44d4-b33c-5a9f0734de41", name: "Double Top/Bottom (Swing)", assetClass: "GOLD" },
  { ordinal: 208, id: "72a3525f-3dd0-4fd1-ba4f-68c5f0ee66de", name: "Multi‑Timeframe Candlestick Confirmation", assetClass: "FOREX" },
  { ordinal: 209, id: "c487588c-8f9e-4b5e-a24a-0fd74a9b76a7", name: "Cup and Handle", assetClass: "GOLD" },
  { ordinal: 210, id: "e265533b-1585-4625-8083-fb3c34264fda", name: "Macro Liquidity Correlation Strategy", assetClass: "CRYPTO" },
  { ordinal: 211, id: "1ed6b01b-4cb4-47b4-a85b-482d69387edc", name: "Carry Trade", assetClass: "FOREX" },
  { ordinal: 212, id: "c4c2aab8-0950-46f5-b69a-84fa9b33659e", name: "Correlation & Beta Strategy", assetClass: "CRYPTO" },
  { ordinal: 213, id: "fef14756-da8a-4f47-b819-06cb2dc55afd", name: "Cup and Handle (Intraday)", assetClass: "GOLD" },
  { ordinal: 214, id: "3211f8c8-090f-401b-ba3f-ba762a9919df", name: "Uncovered Interest Rate Parity (UIRP) Strategy", assetClass: "FOREX" },
  { ordinal: 215, id: "9e3e6705-907e-44db-af4d-0bba65099825", name: "Network Adoption Trend", assetClass: "CRYPTO" },
  { ordinal: 216, id: "ac8fbbec-b790-4dd2-9bed-b8a35dd1d3f2", name: "Cup and Handle (Swing)", assetClass: "GOLD" },
  { ordinal: 217, id: "20e33df6-f725-4306-a022-af30bda32600", name: "Interest Rate Differential Momentum", assetClass: "FOREX" },
  { ordinal: 218, id: "8ddb82b9-718e-425d-a664-1e1662006bb2", name: "Ecosystem Developer Activity Play", assetClass: "CRYPTO" },
  { ordinal: 219, id: "ea3332dd-232e-4d7a-8bb9-7ed0e292df17", name: "Flag and Pennant", assetClass: "GOLD" },
  { ordinal: 220, id: "057c1855-150f-4f54-b28a-98cea52e8a71", name: "Governance Proposal Trading", assetClass: "CRYPTO" },
];

export const BATCH_221_240_TARGETS: Batch4Target[] = [
  { ordinal: 221, id: "79cad4c8-7812-444e-8d9e-c84a18fe5b2c", name: "News Trading on Economic Releases", assetClass: "FOREX" },
  { ordinal: 222, id: "d2ef67e0-ec4f-4611-8997-9efdc3e56c9b", name: "Flag and Pennant (Intraday)", assetClass: "GOLD" },
  { ordinal: 223, id: "5a8fd47b-bc04-4209-afe5-389ad2bf8d66", name: "On‑chain Treasury Monitoring", assetClass: "CRYPTO" },
  { ordinal: 224, id: "717d8b9d-c296-464c-914c-6d5205f727e0", name: "Central Bank Divergence Trading", assetClass: "FOREX" },
  { ordinal: 225, id: "d4550d71-caa8-4c3e-9483-699c3d74bf31", name: "Flag and Pennant (Swing)", assetClass: "GOLD" },
  { ordinal: 226, id: "3a1fe3a2-d5f8-48bc-b2ed-568a36976118", name: "Narrative Sentiment Index", assetClass: "CRYPTO" },
  { ordinal: 227, id: "d8c06d25-c210-400c-9885-1576d98802a2", name: "Triangle Breakout", assetClass: "GOLD" },
  { ordinal: 228, id: "f84c6f76-930e-4b1a-9fa0-08ef04da1216", name: "Commodity Currency Correlation Trade", assetClass: "FOREX" },
  { ordinal: 229, id: "062457e8-d147-4035-b665-c8f7b242483c", name: "Triangle Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 230, id: "3cca9bf1-3003-45e9-9d9f-ff8a5ff9d6c2", name: "Regulatory Event Trading", assetClass: "CRYPTO" },
  { ordinal: 231, id: "5c869ac4-17ad-4b25-8805-3bf3ea67e5cf", name: "Terms of Trade Strategy", assetClass: "FOREX" },
  { ordinal: 232, id: "0d8d6c92-0a56-4305-87f7-b232fcffb86f", name: "Inflation Differential Trading", assetClass: "FOREX" },
  { ordinal: 233, id: "2e0dfee3-9560-4c62-8364-0edde97029e2", name: "Funding Rate Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 234, id: "e13ae28f-aa00-4d45-ae0c-389350e52b66", name: "Triangle Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 235, id: "841b9a52-cfe2-4061-802c-e52f32bec760", name: "Funding Rate Mean Reversion", assetClass: "CRYPTO" },
  { ordinal: 236, id: "a5f855eb-d926-47fa-ae12-e855941b44f8", name: "Ichimoku Cloud Breakout", assetClass: "GOLD" },
  { ordinal: 237, id: "c1f4d812-33ee-45d4-8cf5-bcd69d2722a8", name: "GDP Growth Differential Strategy", assetClass: "FOREX" },
  { ordinal: 238, id: "92579b3f-9e9b-4ac4-ba93-348776390db0", name: "Ichimoku Cloud Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 239, id: "b7bcd35b-cfa7-4dde-bcd8-82b3eac0f5ae", name: "Balance of Payments Strategy", assetClass: "FOREX" },
  { ordinal: 240, id: "eb928131-efba-47f5-8a76-57b82a76c06d", name: "Funding Rate Momentum", assetClass: "CRYPTO" },
];

export const BATCH_241_260_TARGETS: Batch4Target[] = [
  { ordinal: 241, id: "10be75d2-1d35-43bd-bb78-c7683fb4526d", name: "FX Fair Value (PPP) Strategy", assetClass: "FOREX" },
  { ordinal: 242, id: "ccfc0709-78e6-4503-980b-1f3a2afbb4ff", name: "Ichimoku Cloud Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 243, id: "f6d247c1-a24a-4be6-949c-ddb76d15b509", name: "Open Interest Expansion Strategy", assetClass: "CRYPTO" },
  { ordinal: 244, id: "38dde308-6428-4a9c-8f85-c5d62e37500c", name: "Political Event Trading", assetClass: "FOREX" },
  { ordinal: 245, id: "6c300a6d-6670-48db-b1e3-697fe99a95b7", name: "Alligator and Fractals", assetClass: "GOLD" },
  { ordinal: 246, id: "7bd4d4ba-6a38-4895-9ee9-91f13e873017", name: "Open Interest Divergence Strategy", assetClass: "CRYPTO" },
  { ordinal: 247, id: "0868bb5b-8516-4984-b456-acc1f345c608", name: "Seasonal Patterns (Calendar Effects)", assetClass: "FOREX" },
  { ordinal: 248, id: "6bbd2a7e-d823-4dff-be51-1c094e59930b", name: "Alligator and Fractals (Intraday)", assetClass: "GOLD" },
  { ordinal: 249, id: "8b774316-095f-4e20-b1e7-fa43c972a3e5", name: "Liquidation Cluster Trading", assetClass: "CRYPTO" },
  { ordinal: 250, id: "2c40bd56-fecb-4c2d-b11d-a1611373a4b0", name: "Terms of Trade Spread Convergence", assetClass: "FOREX" },
  { ordinal: 251, id: "902dc5af-cbb8-405e-ba62-84b831284e90", name: "Alligator and Fractals (Swing)", assetClass: "GOLD" },
  { ordinal: 252, id: "f3b2cff4-5e18-4a6e-bbeb-19b28bfab5ed", name: "Liquidation Cascade Fade", assetClass: "CRYPTO" },
  { ordinal: 253, id: "378a0812-491e-4dd7-8e4a-6702c99e7171", name: "Safe-Haven Demand Strategy", assetClass: "FOREX" },
  { ordinal: 254, id: "a10fd04b-d67b-4442-9a91-ff1d4d2a79bf", name: "ADX + DMI Filter", assetClass: "GOLD" },
  { ordinal: 255, id: "de9836ba-5e6f-41f9-a798-5710acc2e2a5", name: "Social Sentiment Index Trading", assetClass: "CRYPTO" },
  { ordinal: 256, id: "049dc778-e052-48df-a052-0a16220f7b47", name: "Risk-On Carry Basket", assetClass: "FOREX" },
  { ordinal: 257, id: "31435880-9bf1-4fa5-b904-aaf4b54804d9", name: "ADX + DMI Filter (Intraday)", assetClass: "GOLD" },
  { ordinal: 258, id: "5e244732-efc5-427b-b340-402d737b56f4", name: "Twitter Influencer Monitoring", assetClass: "CRYPTO" },
  { ordinal: 259, id: "5a28fc98-2ffd-4e4b-9619-fb1de4c0a828", name: "Fear & Greed Index Contrarian", assetClass: "CRYPTO" },
  { ordinal: 260, id: "744c06bd-1dc4-4597-8868-2a569935312d", name: "ADX + DMI Filter (Swing)", assetClass: "GOLD" },
];

export const BATCH_261_280_TARGETS: Batch4Target[] = [
  { ordinal: 261, id: "95baae2b-ed0e-4afe-89d7-2a4da1634141", name: "Commitment of Traders (COT) Net Position Extremes", assetClass: "FOREX" },
  { ordinal: 262, id: "3ce6764b-8d75-46b4-a1ba-1e1f32628bb9", name: "Parabolic SAR Reversal", assetClass: "GOLD" },
  { ordinal: 263, id: "4e5c1617-6f39-4ad6-a17a-e969f3990911", name: "Funding & OI Combined Sentiment", assetClass: "CRYPTO" },
  { ordinal: 264, id: "fb04629c-0a09-48fe-8449-842531a6ad70", name: "Commercial Hedger vs Speculator Divergence", assetClass: "FOREX" },
  { ordinal: 265, id: "6281fe71-a044-4758-8154-86911dd533d3", name: "Retail Sentiment Contrarian Strategy", assetClass: "FOREX" },
  { ordinal: 266, id: "dd13a96f-558a-4cd7-8ac0-59e6c821941e", name: "Funding + Basis Convergence Trade", assetClass: "CRYPTO" },
  { ordinal: 267, id: "fb914573-389a-4979-ad5e-6357a3e64710", name: "Parabolic SAR Reversal (Intraday)", assetClass: "GOLD" },
  { ordinal: 268, id: "66435681-64aa-40bf-8cb1-117d14419605", name: "Crowded Short Squeeze Play", assetClass: "CRYPTO" },
  { ordinal: 269, id: "711ebe4b-d312-4d37-a92f-01d683ed8cf2", name: "Parabolic SAR Reversal (Swing)", assetClass: "GOLD" },
  { ordinal: 270, id: "ef7ca637-e53a-4335-8c49-4ae0e47379c2", name: "Retail Sentiment Trend-Following", assetClass: "FOREX" },
  { ordinal: 271, id: "8c15744f-3251-431e-a152-3321735357de", name: "Liquidation Level Front-Run", assetClass: "CRYPTO" },
  { ordinal: 272, id: "95d2b30d-e94b-4484-acda-e5069a72c5ff", name: "Options Sentiment (Risk Reversals)", assetClass: "FOREX" },
  { ordinal: 273, id: "ca6430d4-714f-4ac7-a830-0a57c4e9f750", name: "Bollinger Squeeze Breakout", assetClass: "GOLD" },
  { ordinal: 274, id: "5393b4d7-3fe2-423f-9e9b-55091c7ce54e", name: "Reddit Sentiment Swings", assetClass: "CRYPTO" },
  { ordinal: 275, id: "d55a7138-79ac-46b2-b34c-35f1c7d91c97", name: "Forex Fear & Greed Index", assetClass: "FOREX" },
  { ordinal: 276, id: "f76e6014-07d2-4a46-a363-6251251b55dc", name: "Bollinger Squeeze Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 277, id: "09fa92e2-55ac-47c2-ae9c-dfeaa3ff9662", name: "Whale Exchange Outflow Accumulation", assetClass: "CRYPTO" },
  { ordinal: 278, id: "7fe22452-b485-451a-96e3-48187d08436b", name: "News Sentiment Analysis", assetClass: "FOREX" },
  { ordinal: 279, id: "80f1d915-4cba-437c-a205-002c02149637", name: "Bollinger Squeeze Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 280, id: "7993212b-65a1-483a-8720-eb80b820fd4a", name: "ATR Expansion Breakout", assetClass: "GOLD" },
];

export const BATCH_281_300_TARGETS: Batch4Target[] = [
  { ordinal: 281, id: "813c12ab-c443-4be7-8f4c-5b68a5f20aa2", name: "Social Media Sentiment (Twitter/Reddit)", assetClass: "FOREX" },
  { ordinal: 282, id: "8966e5e1-8c21-4a84-9b99-42463422a058", name: "Whale Exchange Inflow Distribution", assetClass: "CRYPTO" },
  { ordinal: 283, id: "4aafd158-b06d-44b7-8e35-fb675852920c", name: "Exchange Net Flow Divergence", assetClass: "CRYPTO" },
  { ordinal: 284, id: "641d3030-7aee-492c-8c15-f028d1a1bdad", name: "ATR Expansion Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 285, id: "6ab8e6b4-9eb7-4b20-ae9e-499f1699ac99", name: "Sentiment Divergence (Price vs Sentiment)", assetClass: "FOREX" },
  { ordinal: 286, id: "2efdc9c0-bcf2-4442-afb4-ac5f1cfe651a", name: "Dormant Coin Movement (TAC) Strategy", assetClass: "CRYPTO" },
  { ordinal: 287, id: "7ed53e86-778e-4c42-b451-656044e0f3a9", name: "Sentiment Confirmed Breakout", assetClass: "FOREX" },
  { ordinal: 288, id: "ad9264f6-1341-41a7-a6f5-40724a3ea19f", name: "ATR Expansion Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 289, id: "61cd3fd8-466f-475f-b4ad-48404982576f", name: "Sentiment & Macro Combined", assetClass: "FOREX" },
  { ordinal: 290, id: "6fba630b-e355-4db3-b14f-0ca7da66c322", name: "NR7/NR4 Range Breakout", assetClass: "GOLD" },
  { ordinal: 291, id: "a356e52c-97b7-4c35-824c-60a31d740e54", name: "UTXO Age Distribution Strategy", assetClass: "CRYPTO" },
  { ordinal: 292, id: "12abd63d-4c8f-488f-b57d-3bc862b6e363", name: "NR7/NR4 Range Breakout (Intraday)", assetClass: "GOLD" },
  { ordinal: 293, id: "9a45edb5-1736-4820-b5ea-277c8c19b968", name: "Depth of Market (DOM) Order Flow", assetClass: "FOREX" },
  { ordinal: 294, id: "a65efdf1-725d-4e2a-9975-c35673413728", name: "Wallet Clustering Behaviour Analysis", assetClass: "CRYPTO" },
  { ordinal: 295, id: "1f6a9e59-4ee2-47c1-bd5d-e54d3294642e", name: "Volume Profile Trading", assetClass: "FOREX" },
  { ordinal: 296, id: "65bd13e4-4ca4-4e92-ae86-4bdb144a2818", name: "NR7/NR4 Range Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 297, id: "c4041a4a-a8a1-4875-bb98-f1ba67476b03", name: "Stablecoin Supply Ratio Strategy", assetClass: "CRYPTO" },
  { ordinal: 298, id: "110f1c6b-d35a-43f4-8fb1-681f68aec038", name: "Fibonacci Retracement Confluence", assetClass: "GOLD" },
  { ordinal: 299, id: "914aa00b-927a-4cbc-a3ce-fe12e30a25c1", name: "Miner Outflow Signal", assetClass: "CRYPTO" },
  { ordinal: 300, id: "beda2707-9b64-4c94-96ce-f7a9bee9af5b", name: "Footprint Chart Strategy", assetClass: "FOREX" },
];

export const BATCH_301_320_TARGETS: Batch4Target[] = [
  { ordinal: 301, id: "69acf5e3-caf1-4f38-b4ec-0cfd8f5cc4a6", name: "Miner Hashrate Trend Strategy", assetClass: "CRYPTO" },
  { ordinal: 302, id: "83679b9a-2281-4913-be60-8a61395b7db1", name: "Institutional Supply and Demand Zones", assetClass: "FOREX" },
  { ordinal: 303, id: "c4f5d6de-ee42-489f-af7b-9a866a84f82b", name: "Fibonacci Retracement Confluence (Intraday)", assetClass: "GOLD" },
  { ordinal: 304, id: "05e77806-ed54-4225-936c-523b4d4a4dd4", name: "Fibonacci Retracement Confluence (Swing)", assetClass: "GOLD" },
  { ordinal: 305, id: "0fb341fb-9a2a-4d89-a69b-73ebc8143c79", name: "Market Making (Spread Capture)", assetClass: "FOREX" },
  { ordinal: 306, id: "9f7ad42b-0db0-4165-b05b-b69a6d48fb1f", name: "Stake/Unstake Flow Strategy", assetClass: "CRYPTO" },
  { ordinal: 307, id: "112b4d81-84bb-4991-aa05-1a1c172536ae", name: "Peg Maintenance Strategy", assetClass: "FOREX" },
  { ordinal: 308, id: "29d909da-9da8-400e-8e68-d9590d9506dc", name: "Market Supply/Demand", assetClass: "FOREX" },
  { ordinal: 309, id: "34bb0e24-f955-4908-90ff-8eabafb5aefe", name: "Moving Average Bounce (Standard)", assetClass: "FOREX" },
  { ordinal: 310, id: "6c2f2054-578f-4ab3-a40b-6b261c3afa5b", name: "Horizontal S/R Breakout", assetClass: "FOREX" },
  { ordinal: 311, id: "bc76291f-682e-4c40-a994-0c0b0a23b5c6", name: "Round Number Bounce", assetClass: "GOLD" },
  { ordinal: 312, id: "d0bd8535-312b-4008-864b-4066af807e25", name: "Fixed Fractional Sizing", assetClass: "FOREX" },
  { ordinal: 313, id: "ee8f7a9b-f5bb-4dbb-a06e-11781bd11b4e", name: "Gas Price and Activity Indicator", assetClass: "CRYPTO" },
  { ordinal: 314, id: "946e225f-c0fb-41ee-b9c5-b514be065add", name: "Spot-Futures Basis Trade", assetClass: "CRYPTO" },
  { ordinal: 315, id: "df916f06-a61f-4f02-8442-66a0a899d263", name: "Triangular Arbitrage", assetClass: "FOREX" },
  { ordinal: 316, id: "f10bad6d-ec24-45d2-a057-71e47b7a923f", name: "Round Number Bounce (Intraday)", assetClass: "GOLD" },
  { ordinal: 317, id: "d96083bc-1726-44ba-bc9e-52a08774ee99", name: "Round Number Bounce (Swing)", assetClass: "GOLD" },
  { ordinal: 318, id: "de9a3408-97b6-409c-a4df-5d6e0e1c9253", name: "ATR-Adjusted Volatility Sizing", assetClass: "FOREX" },
  { ordinal: 319, id: "e7768c78-753d-4aec-b738-2795f8477a22", name: "Covered Interest Arbitrage", assetClass: "FOREX" },
  { ordinal: 320, id: "f98f140f-006b-407a-9135-57bb3d45d8d9", name: "Reverse Basis Trade", assetClass: "CRYPTO" },
];

export const BATCH_321_340_TARGETS: Batch4Target[] = [
  { ordinal: 321, id: "3ff0e95a-6b74-4475-baa8-cc4cb126647a", name: "Price Channel Break (Keltner Channel)", assetClass: "GOLD" },
  { ordinal: 322, id: "5094e629-1cfb-4db1-96ba-55a49bf9e325", name: "Calendar Spread (Futures Roll)", assetClass: "CRYPTO" },
  { ordinal: 323, id: "bdf41287-6b05-4257-bd9c-104d394f4519", name: "Relative Value Currency Basket", assetClass: "FOREX" },
  { ordinal: 324, id: "41cf86c4-b467-4385-add9-31b8375106c3", name: "Perpetual Funding Rate Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 325, id: "78adfe39-ff8c-49e3-aa96-4f3f7244fe0e", name: "Price Channel Break (Keltner Channel) (Intraday)", assetClass: "GOLD" },
  { ordinal: 326, id: "8adb1993-9c03-4e05-953a-cf1fd7430246", name: "Yield Curve Arbitrage in FX Forwards", assetClass: "FOREX" },
  { ordinal: 327, id: "326ec721-9458-48d5-a147-02786349fa5d", name: "Price Channel Break (Keltner Channel) (Swing)", assetClass: "GOLD" },
  { ordinal: 328, id: "4c29cc35-7fc7-420b-9afa-2f50c8325885", name: "Order Anticipation Strategy (Front-Running)", assetClass: "FOREX" },
  { ordinal: 329, id: "6665178b-5a64-4f89-9eb0-9cee60ad5611", name: "Gamma Scalping", assetClass: "CRYPTO" },
  { ordinal: 330, id: "209b9398-da10-450f-b1a3-55e14de99a0b", name: "Liquidity Provision with VWAP/TWAP Algorithms", assetClass: "FOREX" },
  { ordinal: 331, id: "666a0df0-fccf-4766-83a8-583c91899487", name: "Volatility Skew Trade", assetClass: "CRYPTO" },
  { ordinal: 332, id: "f1ab82af-97bd-4646-8245-7f3e0c6d7eef", name: "SuperTrend Indicator Strategy", assetClass: "GOLD" },
  { ordinal: 333, id: "2ee8f374-8e03-4b24-a4f3-c20e2735ade3", name: "SuperTrend Indicator Strategy (Intraday)", assetClass: "GOLD" },
  { ordinal: 334, id: "a29c28bc-278f-4cfe-8071-69681f08dcc0", name: "Percent of Volume (POV) Algorithm", assetClass: "FOREX" },
  { ordinal: 335, id: "e7791701-b643-4fb5-b0c9-14b32c6c1c02", name: "Long Straddle Strategy", assetClass: "CRYPTO" },
  { ordinal: 336, id: "2352e794-8c19-44bb-950c-be05056b01ab", name: "Iceberg Detection", assetClass: "FOREX" },
  { ordinal: 337, id: "a44d33f0-ad23-4171-8ee8-ec5968d850dc", name: "Short Straddle Strategy", assetClass: "CRYPTO" },
  { ordinal: 338, id: "ada065b7-77f9-4cc3-a495-7ede3442edb6", name: "SuperTrend Indicator Strategy (Swing)", assetClass: "GOLD" },
  { ordinal: 339, id: "122451fd-75fa-48b7-90cf-00e9a3c82e9f", name: "Liquidity Run Reversal", assetClass: "FOREX" },
  { ordinal: 340, id: "16567a82-906e-4796-8ecc-8924076b1bb8", name: "Put-Call Parity Arbitrage", assetClass: "CRYPTO" },
];

export const BATCH_341_360_TARGETS: Batch4Target[] = [
  { ordinal: 341, id: "b1036191-216c-4b56-881d-5804e6624c78", name: "Trend + Volume Confirmation", assetClass: "GOLD" },
  { ordinal: 342, id: "1c7c1e7b-2435-46a2-b7fe-84c008d7ff5d", name: "Trend + Volume Confirmation (Intraday)", assetClass: "GOLD" },
  { ordinal: 343, id: "4b4e2df3-8957-44c7-ad15-299548aafe8f", name: "Moving Average Crossover Bot", assetClass: "FOREX" },
  { ordinal: 344, id: "e5fdfead-6b8f-4904-bcf2-6720b9530bb5", name: "Protective Put Hedging", assetClass: "CRYPTO" },
  { ordinal: 345, id: "4921d5c5-2f89-45cd-a515-5a430b2929e3", name: "Trend + Volume Confirmation (Swing)", assetClass: "GOLD" },
  { ordinal: 346, id: "d0195a97-5242-4906-bf93-94dbba1ad8e5", name: "Turtle Trading System", assetClass: "FOREX" },
  { ordinal: 347, id: "d0c0b4de-8b40-4f51-aa7d-42877017be21", name: "Covered Call Income", assetClass: "CRYPTO" },
  { ordinal: 348, id: "2df50f45-6415-4be0-9f57-5039e7a4a4ee", name: "Real Yield Decline (Long Gold)", assetClass: "GOLD" },
  { ordinal: 349, id: "490eb41b-416c-4219-89bf-99958797b4c5", name: "Channel Breakout System (Channel Commodity)", assetClass: "FOREX" },
  { ordinal: 350, id: "93ee2af3-57e0-4b49-b140-7b33c9cbb05d", name: "Butterfly Spread", assetClass: "CRYPTO" },
  { ordinal: 351, id: "19e8b81c-3fd6-48a8-a618-004cfb07104a", name: "Mean Reversion Algorithm with Bollinger Bands", assetClass: "FOREX" },
  { ordinal: 352, id: "ddbc2fbd-12f7-47a4-b7ad-7dc2638b1177", name: "Iron Condor", assetClass: "CRYPTO" },
  { ordinal: 353, id: "e8a5722d-ae9d-4ce4-bbbd-8adb62ac17f7", name: "Real Yield Decline (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 354, id: "01a5a799-2a3a-47d7-b7c2-c9e7f6f187a7", name: "Real Yield Rise (Short Gold)", assetClass: "GOLD" },
  { ordinal: 355, id: "1554290c-dfcb-43d3-8e19-42ea4b394419", name: "Gamma Tilt Strategy", assetClass: "CRYPTO" },
  { ordinal: 356, id: "bff45a7b-4e5b-41bf-b0d4-bf0f6bbb6c30", name: "Statistical Arbitrage (Stat-Arb) Pairs Algorithm", assetClass: "FOREX" },
  { ordinal: 357, id: "08ad27d6-b500-4ec5-a3a3-9c046b019d58", name: "Genetic Algorithm Parameter Optimisation", assetClass: "FOREX" },
  { ordinal: 358, id: "64bc2085-e5d3-42d1-8fc4-97c05ad6d43f", name: "Liquidation Cascade Trigger", assetClass: "CRYPTO" },
  { ordinal: 359, id: "c02136f0-7af6-4f2c-b8c4-be25cfc46289", name: "Real Yield Rise (Short Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 360, id: "41b00c9a-a9e1-407c-8f78-33d0bfadeffc", name: "Cross-Exchange Arbitrage", assetClass: "CRYPTO" },
];

export const BATCH_361_380_TARGETS: Batch4Target[] = [
  { ordinal: 361, id: "b9273988-667c-4ade-a0c9-84e4f14c8efb", name: "Neural Network Price Prediction", assetClass: "FOREX" },
  { ordinal: 362, id: "fde18418-0456-494f-8b43-8c34a4675125", name: "Fed Dovish Pivot (Long Gold)", assetClass: "GOLD" },
  { ordinal: 363, id: "6c60c970-1840-4df8-a002-b74340b6a093", name: "Random Forest Classification for Direction", assetClass: "FOREX" },
  { ordinal: 364, id: "a2c8fb42-0287-425c-8be0-898a2d0c05de", name: "Spatial Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 365, id: "d71a17d6-2aab-45ac-813b-1e6d716e5d45", name: "Fed Dovish Pivot (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 366, id: "64f8f9d5-655d-44f3-9e9a-0ffc9644df44", name: "Support Vector Machine (SVM) Trend Classification", assetClass: "FOREX" },
  { ordinal: 367, id: "6a45207b-adc0-4966-a515-b1372bf74004", name: "Triangular Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 368, id: "98f77d80-0c6d-42fc-9989-4187f45c6e47", name: "Fed Hawkish Pivot (Short Gold)", assetClass: "GOLD" },
  { ordinal: 369, id: "4ab6d504-fde6-4665-a777-f841cbcf9678", name: "Fed Hawkish Pivot (Short Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 370, id: "96a66aeb-5ada-4ec3-a9b2-491fb13f626e", name: "Cross-Exchange Market Making", assetClass: "CRYPTO" },
  { ordinal: 371, id: "a9a8f29f-db7d-4722-bf64-400a37a17b0f", name: "Reinforcement Learning Trading Agent", assetClass: "FOREX" },
  { ordinal: 372, id: "885fa9ef-e11d-44a7-9efd-8c288c4c1000", name: "Inflation Hedge (Long Gold)", assetClass: "GOLD" },
  { ordinal: 373, id: "a9f37921-39d6-44e5-b759-e0f83cbf3381", name: "Kalman Filter Trend Estimation", assetClass: "FOREX" },
  { ordinal: 374, id: "e29982d7-64b1-4e85-9267-e1592cd4c18e", name: "Latency Market Making", assetClass: "CRYPTO" },
  { ordinal: 375, id: "1bfc20a6-071c-4fe4-8ef4-4f87a13742f0", name: "Hidden Markov Model (HMM) Regime Switching", assetClass: "FOREX" },
  { ordinal: 376, id: "e8e5b314-6214-469f-b844-5a24c90e31de", name: "Statistical Arbitrage Basket", assetClass: "CRYPTO" },
  { ordinal: 377, id: "f2dabb56-812e-4f60-a6d9-51690c7960a8", name: "Inflation Hedge (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 378, id: "2d8ec8a9-b898-487a-ab77-8462ccaf85a3", name: "High-Frequency Market Making Algorithm", assetClass: "FOREX" },
  { ordinal: 379, id: "30a1fcb0-257f-41c8-b5b6-323e38502e4c", name: "USD Weakness (Long Gold)", assetClass: "GOLD" },
  { ordinal: 380, id: "a5db653e-162a-48b4-af45-0c2520829f82", name: "Cointegration Basket Trading", assetClass: "CRYPTO" },
];

export const BATCH_381_400_TARGETS: Batch4Target[] = [
  { ordinal: 381, id: "513818fc-ecd4-4703-aa22-dbc92b225eba", name: "FX Basket Mean-Reversion Quant Strategy", assetClass: "FOREX" },
  { ordinal: 382, id: "7f61063e-2309-4273-85a9-2955de09e10f", name: "USD Weakness (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 383, id: "9acbb287-381b-40a1-af2d-c6041148c602", name: "HFT Momentum Ignition", assetClass: "CRYPTO" },
  { ordinal: 384, id: "0f5f4f5c-6899-47aa-82ed-19a54e424a75", name: "Order Flow Imbalance Analysis", assetClass: "CRYPTO" },
  { ordinal: 385, id: "47d2be05-ace4-4a79-9355-b0bc1b93b006", name: "USD Strength (Short Gold)", assetClass: "GOLD" },
  { ordinal: 386, id: "f3def1a4-0e78-406a-b66e-9a392efd9718", name: "Adaptive Moving Average (Kaufman AMA) Strategy", assetClass: "FOREX" },
  { ordinal: 387, id: "5eece27d-d108-4783-9a2e-bec4ae196a6c", name: "Imbalance + Price Ladder Scalping", assetClass: "CRYPTO" },
  { ordinal: 388, id: "d778c531-7726-46ea-bdc8-ca47e7908fde", name: "Volatility Scaling of Position Sizes", assetClass: "FOREX" },
  { ordinal: 389, id: "f2a0f077-6aec-4323-b846-41027a06b283", name: "USD Strength (Short Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 390, id: "01712a66-a6b6-4ff5-a3c1-90e0607db5b8", name: "Trend + Fundamental Confirmation", assetClass: "FOREX" },
  { ordinal: 391, id: "a56e7666-df61-49d3-8b26-ac259af7a517", name: "Yield Curve Inversion (Long Gold)", assetClass: "GOLD" },
  { ordinal: 392, id: "e0220c42-0d72-46a0-988c-4362976bea1b", name: "VWAP Reversion Execution", assetClass: "CRYPTO" },
  { ordinal: 393, id: "a79c108c-a3f6-4fbd-84cd-a774bd8b05b6", name: "Liquidity Provision Incentives", assetClass: "CRYPTO" },
  { ordinal: 394, id: "ac1fada4-e162-4479-b078-46e3e4e87c10", name: "Technical + Sentiment Confluence", assetClass: "FOREX" },
  { ordinal: 395, id: "b01f6410-8c18-44e6-aa0a-dfb228bd6fca", name: "Yield Curve Inversion (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 396, id: "0d5b22d4-7df5-4b55-bfcf-c7888d971eb8", name: "Cross-Asset Statistical Factor Model", assetClass: "CRYPTO" },
  { ordinal: 397, id: "4ebb4764-e473-4d57-9de4-613bff53df33", name: "High Volatility Risk-Off (Long Gold)", assetClass: "GOLD" },
  { ordinal: 398, id: "71e69df9-c6f5-4c90-8540-2a33e3b405bf", name: "Fundamental + COT Confluence", assetClass: "FOREX" },
  { ordinal: 399, id: "6517cc07-4ef1-4c6a-8533-74ef14e00a1f", name: "High Volatility Risk-Off (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 400, id: "7018de08-bc9c-43ef-a38a-a7b42dda1239", name: "Multi-Timeframe Trend Alignment", assetClass: "FOREX" },
];

export const BATCH_401_420_TARGETS: Batch4Target[] = [
  { ordinal: 401, id: "f3af3be0-0c65-47b9-bea7-39c756254c8d", name: "Liquidity Provision to Stable Pair", assetClass: "CRYPTO" },
  { ordinal: 402, id: "0532293f-ef5a-4160-8591-3fd3757ac5e6", name: "Geopolitical Risk (Long Gold)", assetClass: "GOLD" },
  { ordinal: 403, id: "1e3413ea-c5b5-4c21-9b39-f6a958312c3e", name: "Liquidity Provision to Volatile Pair with Impermanent Loss Hedging", assetClass: "CRYPTO" },
  { ordinal: 404, id: "d1c484b6-60ae-4bf1-9ee5-d276d7320ba6", name: "Indicator + Price Action Confluence", assetClass: "FOREX" },
  { ordinal: 405, id: "46a74acb-b64a-4615-964a-22615297c749", name: "Triangular Confluence (Fundamental + Technical + Sentiment)", assetClass: "FOREX" },
  { ordinal: 406, id: "e38f3f7b-12ce-485b-b9b1-706dcf68645d", name: "Yield Farming Rotation", assetClass: "CRYPTO" },
  { ordinal: 407, id: "f871a27e-24f8-49e3-a820-aff8d58a448d", name: "Geopolitical Risk (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 408, id: "3571a18c-f27e-4eec-b2d2-59bf1b6eaaac", name: "Hybrid Carry + Price Action", assetClass: "FOREX" },
  { ordinal: 409, id: "8b183198-6312-4306-a26c-3ae3c578ba66", name: "DEX Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 410, id: "e89b9c2b-008f-4f5d-b1cb-76bcf21fc6cf", name: "Central Bank Net Buying (Long Gold)", assetClass: "GOLD" },
  { ordinal: 411, id: "2cfc517d-9ada-4e32-ab2d-82222728ba86", name: "Mean Reversion + Options Hedging", assetClass: "FOREX" },
  { ordinal: 412, id: "addecd70-9f6d-4cfb-ad5a-be48b02c3241", name: "Perpetual DEX Funding Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 413, id: "d84400a3-7275-4c9f-8314-5903e99432b3", name: "Central Bank Net Buying (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 414, id: "5aca75bd-0594-4630-9884-3b1411861d70", name: "Central Bank Net Selling (Short Gold)", assetClass: "GOLD" },
  { ordinal: 415, id: "7f5b97d1-a4a2-4ffe-a635-b5b417288a4e", name: "News + Technical Event Trading", assetClass: "FOREX" },
  { ordinal: 416, id: "cfe0c901-fe72-47bb-9a1e-47ce3342fdb6", name: "Lending & Borrowing Looping Strategy", assetClass: "CRYPTO" },
  { ordinal: 417, id: "00ea4834-743c-4ac6-81bf-cecc001dcd9e", name: "Sentiment + Risk-On/Off Regime Strategy", assetClass: "FOREX" },
  { ordinal: 418, id: "8003d897-259e-4439-9b69-1b190d7bda7d", name: "Central Bank Net Selling (Short Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 419, id: "9c3ef48e-8fcb-48af-9d05-0739be67dcf5", name: "Rate Arbitrage Between Lending Platforms", assetClass: "CRYPTO" },
  { ordinal: 420, id: "5fe366be-322d-4a22-8c8d-057448ac62db", name: "Order Flow + Price Action Confluence", assetClass: "FOREX" },
];

export const BATCH_421_440_TARGETS: Batch4Target[] = [
  { ordinal: 421, id: "6a3f06fb-2519-4674-8e00-24ba66ca149a", name: "Stablecoin Arbitrage Across Chains", assetClass: "CRYPTO" },
  { ordinal: 422, id: "865732e2-7061-4633-a923-2aeafc028c8f", name: "De-Dollarization Theme (Long Gold)", assetClass: "GOLD" },
  { ordinal: 423, id: "0e13b9c6-8dfc-4a83-abeb-830e76b166a0", name: "Impermanent Loss Protection Protocols", assetClass: "CRYPTO" },
  { ordinal: 424, id: "7c2be510-23bb-42b5-abe1-8b954e77f471", name: "Macro + Machine Learning Hybrid", assetClass: "FOREX" },
  { ordinal: 425, id: "a9cb6e0d-023b-4287-9a4d-4c8cca170431", name: "De-Dollarization Theme (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 426, id: "2b7a4670-be16-4406-b574-f1022a8b4737", name: "Supply Disruption (Long Gold)", assetClass: "GOLD" },
  { ordinal: 427, id: "34284b30-d97f-46d5-a178-08bb80d26116", name: "Seasonal + Technical Confirmation", assetClass: "FOREX" },
  { ordinal: 428, id: "edbfa0ae-b745-47f3-b4f7-a16a79e14923", name: "Staking Yield Strategy", assetClass: "CRYPTO" },
  { ordinal: 429, id: "3bee0322-fb8a-4648-8b4e-c892f36d55cf", name: "Restaking & Liquid Staking Tokens", assetClass: "CRYPTO" },
  { ordinal: 430, id: "3de9fc8a-8491-431a-810b-df2d999afd7b", name: "Supply Disruption (Long Gold) (Swing)", assetClass: "GOLD" },
  { ordinal: 431, id: "7238d23c-71ca-4df3-8426-78a8af0f26af", name: "Volatility Breakout + Fundamental Filter", assetClass: "FOREX" },
  { ordinal: 432, id: "17df146e-84fd-4022-80b8-4624a1ab6482", name: "COT Speculator Extreme Long (Contrarian Short)", assetClass: "GOLD" },
  { ordinal: 433, id: "57d1ad6b-9776-421f-89c7-c44432f5e8a8", name: "Fixed Fractional Position Sizing", assetClass: "FOREX" },
  { ordinal: 434, id: "f2d716a0-076c-4ef8-b0dc-024d9e3e163c", name: "Liquidation Farming on DeFi Lending", assetClass: "CRYPTO" },
  { ordinal: 435, id: "53d3bbec-fbe6-4af5-975e-8548d71c9987", name: "Fixed Ratio Position Sizing", assetClass: "FOREX" },
  { ordinal: 436, id: "8f171f37-b88b-470f-953c-1bdebbfb64e5", name: "COT Speculator Extreme Long (Contrarian Short) (Swing)", assetClass: "GOLD" },
  { ordinal: 437, id: "addfce31-6c23-4549-9fc8-bc747c886ec8", name: "Synthetic Asset Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 438, id: "470eee33-5eaf-4816-925c-2b6a1375a2b7", name: "Kelly Criterion Sizing", assetClass: "FOREX" },
  { ordinal: 439, id: "b3038782-fb9a-46a4-84fd-d0430eb8cfa0", name: "Insurance Pool Participation", assetClass: "CRYPTO" },
  { ordinal: 440, id: "f80a9ef8-ec02-453f-bd56-78b354f7fef9", name: "COT Speculator Extreme Short (Contrarian Long)", assetClass: "GOLD" },
];

export const BATCH_441_460_TARGETS: Batch4Target[] = [
  { ordinal: 441, id: "033bf281-3c02-4376-8c19-94c9d239c277", name: "Flash Loan Arbitrage", assetClass: "CRYPTO" },
  { ordinal: 442, id: "131b744b-6d9b-4624-abef-0bf88fb680ce", name: "ATR-Based Stop Placement", assetClass: "FOREX" },
  { ordinal: 443, id: "b62539d7-5c03-4aef-b497-0a017a70535d", name: "COT Speculator Extreme Short (Contrarian Long) (Swing)", assetClass: "GOLD" },
  { ordinal: 444, id: "245aeaf5-e460-42e2-8dfa-74b7ca387692", name: "Volatility Scaling Portfolio Allocation", assetClass: "FOREX" },
  { ordinal: 445, id: "5c1fb4dc-6867-4995-97cb-49c540b5740f", name: "COT Commercial Hedger Accumulation", assetClass: "GOLD" },
  { ordinal: 446, id: "7186671f-42f2-4291-bc70-fa298fa7f9d6", name: "Governance Token Short on Dilutive Emissions", assetClass: "CRYPTO" },
  { ordinal: 447, id: "13f28f85-f8e8-46f7-a08a-a486d9ca8855", name: "Drawdown Control (Stop Trading after X%)", assetClass: "FOREX" },
  { ordinal: 448, id: "18a0636f-f498-412f-8157-7bee0bcc4c33", name: "COT Commercial Hedger Accumulation (Swing)", assetClass: "GOLD" },
  { ordinal: 449, id: "4e541d6a-178d-42c6-9762-a7ab82de0be4", name: "DAO Treasury Diversification Trade", assetClass: "CRYPTO" },
  { ordinal: 450, id: "9013ba23-fabe-43d9-8293-4db27adc2cdf", name: "Hedging with Correlated Currency Pairs", assetClass: "FOREX" },
  { ordinal: 451, id: "c461ed9a-9078-441a-8e58-03291ff43b02", name: "Rule-Based Moving Average Bot", assetClass: "CRYPTO" },
  { ordinal: 452, id: "e54d0996-9ed4-4e29-af4c-d3491eae02c5", name: "COT Divergence Signal", assetClass: "GOLD" },
  { ordinal: 453, id: "1f97dfc4-29a2-445d-8f17-dd2816214ec7", name: "Direct Hedging (Offsetting Position)", assetClass: "FOREX" },
  { ordinal: 454, id: "b4de017f-5e70-4a2b-8d9c-94b1233c430a", name: "Indicator Stack Bot", assetClass: "CRYPTO" },
  { ordinal: 455, id: "b6506df9-0f0f-47d0-992a-fae84e612d58", name: "COT Divergence Signal (Swing)", assetClass: "GOLD" },
  { ordinal: 456, id: "8254166a-3642-4ed5-b50a-5531335607fc", name: "Options Hedging (FX Options)", assetClass: "FOREX" },
  { ordinal: 457, id: "9969d6ad-90fa-4bbe-9b2e-7c0ba71e86d6", name: "Scalping Bot", assetClass: "CRYPTO" },
  { ordinal: 458, id: "e3e2d4d1-74f4-4669-89a4-e715932e4009", name: "ETF Inflow Momentum (Long)", assetClass: "GOLD" },
  { ordinal: 459, id: "57be31cf-d210-4ef5-878b-289a6e1b1a2d", name: "Forward Contract Hedging", assetClass: "FOREX" },
  { ordinal: 460, id: "c2bb9451-d160-42a9-ab0f-527d17b09b53", name: "ETF Inflow Momentum (Long) (Swing)", assetClass: "GOLD" },
];

export const BATCH_461_480_TARGETS: Batch4Target[] = [
  { ordinal: 461, id: "e3808c45-5077-4897-adfe-3b049d781f98", name: "Arbitrage Bot (CEX + DEX)", assetClass: "CRYPTO" },
  { ordinal: 462, id: "0934b409-7efd-481d-b6b9-34742610f54d", name: "Machine-Learning-Enhanced Execution", assetClass: "CRYPTO" },
  { ordinal: 463, id: "a1806f54-241d-4701-8ace-649e86539c97", name: "ETF Outflow Indicator (Short)", assetClass: "GOLD" },
  { ordinal: 464, id: "ab384928-8bdd-486a-be4e-d08b24c116f6", name: "Cross-Hedging with Correlated Asset (e.g., Oil)", assetClass: "FOREX" },
  { ordinal: 465, id: "97be1024-d062-475c-b455-55ff56fe7f58", name: "ETF Outflow Indicator (Short) (Swing)", assetClass: "GOLD" },
  { ordinal: 466, id: "b788b13f-f744-472d-87bf-bdffd08a50c9", name: "Rebalancing Algorithm (Periodic)", assetClass: "CRYPTO" },
  { ordinal: 467, id: "f033652c-c93d-4551-bc22-569474250331", name: "Portfolio Diversification Across Currency Pairs", assetClass: "FOREX" },
  { ordinal: 468, id: "04296be4-2646-4bf0-a69e-05aa38133d17", name: "Dynamic Leverage Adjustment", assetClass: "FOREX" },
  { ordinal: 469, id: "7775d93e-ac5c-422d-9253-0954c876a99a", name: "Momentum + Mean Reversion Hybrid Bot", assetClass: "CRYPTO" },
  { ordinal: 470, id: "c62e99fd-8f3b-4f49-939b-d90d61940c0f", name: "Retail Sentiment Contrarian Short", assetClass: "GOLD" },
  { ordinal: 471, id: "872bc83a-4c96-48dd-94af-f983998de2bc", name: "Retail Sentiment Contrarian Short (Swing)", assetClass: "GOLD" },
  { ordinal: 472, id: "a958b1e0-d69e-444e-9145-d9893e50445a", name: "AI-Assisted Discretionary Trading", assetClass: "CRYPTO" },
  { ordinal: 473, id: "c849ae84-a8a7-465d-97ec-436786da903b", name: "Trailing Stop Strategy", assetClass: "FOREX" },
  { ordinal: 474, id: "2d422c94-1d4c-4f6f-b6da-6e7e77247d27", name: "Risk Parity Allocation Algorithm", assetClass: "CRYPTO" },
  { ordinal: 475, id: "d8d83fa2-650f-46b8-af05-61b5c57ae067", name: "Retail Sentiment Contrarian Long", assetClass: "GOLD" },
  { ordinal: 476, id: "e8a3aad0-b51c-43ca-bfac-af80f4e5321b", name: "Equity Curve Stop (Portfolio Stop)", assetClass: "FOREX" },
  { ordinal: 477, id: "10d6a262-e33c-4c83-b02c-291482db57eb", name: "Retail Sentiment Contrarian Long (Swing)", assetClass: "GOLD" },
  { ordinal: 478, id: "1d841b67-e9b4-4c19-b7d6-31b601ff07da", name: "Risk Parity Currency Portfolio", assetClass: "FOREX" },
  { ordinal: 479, id: "b4566c82-cb2e-4d8b-b409-def948eb6395", name: "Reinforcement Learning Rebalancer", assetClass: "CRYPTO" },
  { ordinal: 480, id: "0f29c726-03e4-4308-976c-4c291a60ce6e", name: "Correlation Matrix Position Adjustment", assetClass: "FOREX" },
];

export const BATCH_481_500_TARGETS: Batch4Target[] = [
  { ordinal: 481, id: "379f51da-549a-4050-9421-ff660afe5f25", name: "Options Put/Call Ratio High (Bullish)", assetClass: "GOLD" },
  { ordinal: 482, id: "59cd2918-b756-4cc2-829b-15f6c64de245", name: "Volatility Targeting Strategy", assetClass: "CRYPTO" },
  { ordinal: 483, id: "deeb4925-6200-4b3b-949e-9b6712f11038", name: "On-Chain + Technical Confluence", assetClass: "CRYPTO" },
  { ordinal: 484, id: "f789b875-3b17-4874-a04d-6c0e2b88d99d", name: "Options Put/Call Ratio High (Bullish) (Swing)", assetClass: "GOLD" },
  { ordinal: 485, id: "fe8b48ee-6594-4dd0-9a07-2d95dc5642a3", name: "Speed of Market Momentum Scalping", assetClass: "FOREX" },
  { ordinal: 486, id: "921b0561-7148-48c6-973f-67898574faac", name: "Funding + Social Sentiment Filter", assetClass: "CRYPTO" },
  { ordinal: 487, id: "a5fcd1a4-e953-4626-9d8c-455b48c4c726", name: "News Fade Strategy", assetClass: "FOREX" },
  { ordinal: 488, id: "e2eacef9-d4f9-4d99-ad85-0cecdb3339ad", name: "Options Put/Call Ratio Low (Bearish)", assetClass: "GOLD" },
  { ordinal: 489, id: "9acb9af7-e5e8-45e9-b481-a26d3a68dfdf", name: "Options Put/Call Ratio Low (Bearish) (Swing)", assetClass: "GOLD" },
  { ordinal: 490, id: "c0608fad-adaa-4728-a4db-11aa165966d1", name: "Multi-Factor Quant Scoring", assetClass: "CRYPTO" },
  { ordinal: 491, id: "ead6b756-4ee6-444a-a4c7-feae25b2744a", name: "Straddle the News", assetClass: "FOREX" },
  { ordinal: 492, id: "3ee10191-315d-476c-9f5f-33a816e807a9", name: "Technical + Fundamental Confirmation", assetClass: "CRYPTO" },
  { ordinal: 493, id: "904142b2-252c-4b8f-85ba-bb16e6d83699", name: "Options Skew (Buy Puts)", assetClass: "GOLD" },
  { ordinal: 494, id: "b8dcd16e-af06-4c7c-8083-6a36e4e09de1", name: "Gamma Scalping", assetClass: "FOREX" },
  { ordinal: 495, id: "3efcdbf3-52d2-42c6-b756-663d1b08a6f6", name: "Funding + Basis + OI Composite", assetClass: "CRYPTO" },
  { ordinal: 496, id: "8ac3f3f6-caa6-4b0c-94ea-db7932d5a8de", name: "Options Skew (Buy Puts) (Swing)", assetClass: "GOLD" },
  { ordinal: 497, id: "94406a24-f233-4013-bc3e-22866dd4dd44", name: "Calendar Spread in FX Options", assetClass: "FOREX" },
  { ordinal: 498, id: "0ed7a76c-6c08-49ae-8123-d05a394a9382", name: "Options Skew (Buy Calls)", assetClass: "GOLD" },
  { ordinal: 499, id: "8eea3b34-e03f-4f7e-af17-2e28ba54acbc", name: "On-Chain + Sentiment Contrarian", assetClass: "CRYPTO" },
  { ordinal: 500, id: "bafec578-201e-46c5-80cb-53baea2e3efc", name: "Interest Rate Swaption Hedge", assetClass: "FOREX" },
];

export const BATCH_501_520_TARGETS: Batch4Target[] = [
  { ordinal: 501, id: "1db5fa61-425d-43f1-be70-153a9f6633f1", name: "Technical + Options Skew Confirmation", assetClass: "CRYPTO" },
  { ordinal: 502, id: "658b0195-d023-488d-9a74-649d6c13be53", name: "Options Skew (Buy Calls) (Swing)", assetClass: "GOLD" },
  { ordinal: 503, id: "a1eabd33-919e-4db8-983e-dffe89038f04", name: "Relative Strength Rotation", assetClass: "FOREX" },
  { ordinal: 504, id: "47b7e0bc-a70a-4a3d-9685-e0771efe7b8a", name: "Basis Arbitrage", assetClass: "GOLD" },
  { ordinal: 505, id: "62f25460-ae18-47af-b345-382575779d3c", name: "Volatility Breakout System (Turtle-Type)", assetClass: "FOREX" },
  { ordinal: 506, id: "8704e6e5-ec71-4efe-9339-4c47e24cdd4c", name: "Fixed Fraction Position Sizing", assetClass: "CRYPTO" },
  { ordinal: 507, id: "6b2bd9ff-d8b4-470b-af66-1c7ccf7f112b", name: "Kelly Criterion Position Sizing", assetClass: "CRYPTO" },
  { ordinal: 508, id: "ac0c4c05-a193-41a6-920c-3362823575df", name: "Dynamic Support & Resistance via Pivot Points", assetClass: "FOREX" },
  { ordinal: 509, id: "bce97bc0-d602-46f6-80e4-d31c6bc256d4", name: "Basis Arbitrage (Swing)", assetClass: "GOLD" },
  { ordinal: 510, id: "946c241a-6977-4d7c-b0bf-2c982bfa5194", name: "Volatility Adjusted Position Sizing", assetClass: "CRYPTO" },
  { ordinal: 511, id: "d2570e74-d17d-4f8b-b91e-ed8c819f5590", name: "Fibonacci Retracement Strategy", assetClass: "FOREX" },
  { ordinal: 512, id: "faa03633-6c51-4a85-af54-1d5587abd1f8", name: "Calendar Spread (Long Near, Short Far)", assetClass: "GOLD" },
  { ordinal: 513, id: "052138bb-04b4-487d-8da3-d79ada694d16", name: "Pivot Point Breakout", assetClass: "FOREX" },
  { ordinal: 514, id: "0f806aab-70ba-460d-8e3a-e49d414c92fd", name: "Calendar Spread (Long Near, Short Far) (Swing)", assetClass: "GOLD" },
  { ordinal: 515, id: "c1378281-d607-4255-90b2-f4f9a5c592b2", name: "Stop-Loss Placement Under Support", assetClass: "CRYPTO" },
  { ordinal: 516, id: "23d56a27-a7f3-44bc-a10f-91586e6e2003", name: "Trailing Stop Strategy", assetClass: "CRYPTO" },
  { ordinal: 517, id: "32aa54a7-c26e-48dc-a71a-888e2c65790c", name: "Moving Average Envelope Strategy", assetClass: "FOREX" },
  { ordinal: 518, id: "e6824006-845c-4b0c-b548-8c5dc498f5f2", name: "Calendar Spread (Short Near, Long Far)", assetClass: "GOLD" },
  { ordinal: 519, id: "67540a41-a100-44a5-9bbe-726f8a92fd69", name: "Calendar Spread (Short Near, Long Far) (Swing)", assetClass: "GOLD" },
  { ordinal: 520, id: "ebfb3e7f-caf9-41d0-a4de-d9a527b4dd52", name: "Risk-Reward Ratio Targeting", assetClass: "CRYPTO" },
];

export const BATCH_521_540_TARGETS: Batch4Target[] = [
  { ordinal: 521, id: "ed8f265f-e410-4651-a398-82b32570d52c", name: "Ichimoku Kumo Breakout", assetClass: "FOREX" },
  { ordinal: 522, id: "6e0c90c7-33e7-4812-b871-e50afa440684", name: "Leverage Control", assetClass: "CRYPTO" },
  { ordinal: 523, id: "752d23ff-8300-4770-98e7-c537d3afca1e", name: "Spot-Futures Divergence Trade", assetClass: "GOLD" },
  { ordinal: 524, id: "f711758c-f422-4bb8-8bb6-adf23db56c1a", name: "Adaptive RSI (Connors RSI)", assetClass: "FOREX" },
  { ordinal: 525, id: "b911098e-7cc2-41c0-a743-ce3c74626513", name: "Portfolio Diversification Across Sectors", assetClass: "CRYPTO" },
  { ordinal: 526, id: "e971ba44-c861-42bf-acf9-851b4a3208c0", name: "Spot-Futures Divergence Trade (Swing)", assetClass: "GOLD" },
  { ordinal: 527, id: "f8df3185-d0c1-48a8-8035-fdc27693cf0d", name: "Heikin-Ashi & RSI Confluence", assetClass: "FOREX" },
  { ordinal: 528, id: "a7ccf049-1445-41b3-9f50-5f844305e8c0", name: "Event Straddle", assetClass: "GOLD" },
  { ordinal: 529, id: "da9bf240-e286-4a2a-a2a8-08c42914a150", name: "Stablecoin Hedging", assetClass: "CRYPTO" },
  { ordinal: 530, id: "f6229243-bf99-4f82-b2eb-64313a8266d8", name: "Williams %R Mean Reversion", assetClass: "FOREX" },
  { ordinal: 531, id: "086cad03-40a7-49e9-ab50-c311cf87f04c", name: "Event Straddle (Swing)", assetClass: "GOLD" },
  { ordinal: 532, id: "985d39b7-9107-4da7-8171-97230ffcbf02", name: "Insurance via Options", assetClass: "CRYPTO" },
  { ordinal: 533, id: "e008f1a5-30bd-48de-8dff-2fcaed0190bf", name: "Klinger Volume Oscillator Strategy", assetClass: "FOREX" },
  { ordinal: 534, id: "549dafaa-925b-44cf-afd8-1ecd17acefff", name: "Elder Triple Screen System", assetClass: "FOREX" },
  { ordinal: 535, id: "8aa62ff5-b817-4ded-8070-f382c099bbb4", name: "Dollar-Cost Averaging (DCA)", assetClass: "CRYPTO" },
  { ordinal: 536, id: "e9638bf9-0c3f-4217-b6de-5fbd63ebba9b", name: "Event Strangle", assetClass: "GOLD" },
  { ordinal: 537, id: "03737265-c844-48f7-a928-2f667d7ec21f", name: "Laddered Entry and Exit", assetClass: "CRYPTO" },
  { ordinal: 538, id: "342f66fd-fa13-4c1d-85f4-33beba534123", name: "Event Strangle (Swing)", assetClass: "GOLD" },
  { ordinal: 539, id: "da66e333-4207-4ace-97c6-9c631362e981", name: "Gann Angle Trading", assetClass: "FOREX" },
  { ordinal: 540, id: "180cb30b-621c-4905-ab46-3d5fb3673e84", name: "Liquidation Threshold Monitoring", assetClass: "CRYPTO" },
];

export const BATCH_541_560_TARGETS: Batch4Target[] = [
  { ordinal: 541, id: "359f2d9c-a679-440d-8159-a312467b2c0f", name: "Pivot Point Camarilla Strategy", assetClass: "FOREX" },
  { ordinal: 542, id: "e0094902-4342-404a-a3bf-e8bbdc075390", name: "Volatility Selling (Short Straddle)", assetClass: "GOLD" },
  { ordinal: 543, id: "31d3dd7d-c033-4fdc-a94a-25ef77dc18c7", name: "Volatility Selling (Short Straddle) (Swing)", assetClass: "GOLD" },
  { ordinal: 544, id: "4b15b5b4-3d1a-41bd-906d-9838cf98bbac", name: "Hedged Beta Exposure", assetClass: "CRYPTO" },
  { ordinal: 545, id: "5c3b2d85-8411-49c7-93bf-dfd907604ff8", name: "Quantile Regression Forecasting", assetClass: "FOREX" },
  { ordinal: 546, id: "27fc24df-6187-41d7-be6a-c82291a7fc07", name: "Rebalancing into Stablecoins After Parabolic Run", assetClass: "CRYPTO" },
  { ordinal: 547, id: "53e10cae-4876-4683-bbab-2d038c99a0b9", name: "Gamma Scalping", assetClass: "GOLD" },
  { ordinal: 548, id: "d5370221-9c51-44d9-ac57-e8ed0ab7761e", name: "Fractal Adaptive Moving Average (FRAMA)", assetClass: "FOREX" },
  { ordinal: 549, id: "3fafd490-b1c0-457b-b866-3518e474a564", name: "Renko Chart Trend Trading", assetClass: "FOREX" },
  { ordinal: 550, id: "687e1ad8-1919-49fa-ba73-2ba62e4982a2", name: "Dynamic Position Sizing Based on Drawdown", assetClass: "CRYPTO" },
  { ordinal: 551, id: "b13fc4e8-6e9b-4f23-9df2-aa4b3849c31e", name: "Gamma Scalping (Swing)", assetClass: "GOLD" },
  { ordinal: 552, id: "48842bbd-d66e-47d0-9940-83a77a03b12f", name: "Point & Figure Breakout", assetClass: "FOREX" },
  { ordinal: 553, id: "8ce38c73-749e-4a0b-a7a9-f154c2cc255e", name: "Stop-Loss Under Volatility Band", assetClass: "CRYPTO" },
  { ordinal: 554, id: "f5898f79-b23a-4e75-8b8b-949c09370fa3", name: "Bull Call Spread", assetClass: "GOLD" },
  { ordinal: 555, id: "2e057aee-10aa-4eb5-ab22-da63da9d653f", name: "Bull Call Spread (Swing)", assetClass: "GOLD" },
  { ordinal: 556, id: "7a340b0f-2536-4aae-9ec7-b93f961348dd", name: "Tick Chart Scalping", assetClass: "FOREX" },
  { ordinal: 557, id: "ca11edd1-433c-42bd-a0e2-6d7a10a20821", name: "Capital Allocation Caps", assetClass: "CRYPTO" },
  { ordinal: 558, id: "41eaeb51-0a3b-43b4-9ada-23aa779a1dc7", name: "Stress Testing Portfolio", assetClass: "CRYPTO" },
  { ordinal: 559, id: "69b942af-6c56-419f-97cb-9e19ff911337", name: "Bear Put Spread", assetClass: "GOLD" },
  { ordinal: 560, id: "a9c734b4-b005-41fd-b39e-f248e433c33d", name: "Currency Strength Meter Strategy", assetClass: "FOREX" },
];

export const BATCH_561_580_TARGETS: Batch4Target[] = [
  { ordinal: 561, id: "474fd460-c264-48ac-bc21-554c2fb706ba", name: "Bear Put Spread (Swing)", assetClass: "GOLD" },
  { ordinal: 562, id: "9ea474f9-2fe3-40d1-8440-98393c5fa9ae", name: "Economic Surprise Index Strategy", assetClass: "FOREX" },
  { ordinal: 563, id: "cb55341d-9dd5-4eeb-aaaf-e8f1f57b5e9d", name: "Risk Buffer via Insurance Protocols", assetClass: "CRYPTO" },
  { ordinal: 564, id: "182840c2-d4cf-44de-8e15-c4017f2e1965", name: "Political Risk Premium Trading", assetClass: "FOREX" },
  { ordinal: 565, id: "71829ab8-412e-4c4e-93f9-4193de810f97", name: "Portfolio Volatility Cap", assetClass: "CRYPTO" },
  { ordinal: 566, id: "cb8964ad-5094-4a68-b44f-fd5767b58661", name: "Ratio Call Spread", assetClass: "GOLD" },
  { ordinal: 567, id: "060fd52f-a237-4695-89c3-f32ff5922dd3", name: "Geopolitical Hedging Using Safe-Havens", assetClass: "FOREX" },
  { ordinal: 568, id: "1438c0ac-db41-4b81-98ef-e088822031ad", name: "Ratio Call Spread (Swing)", assetClass: "GOLD" },
  { ordinal: 569, id: "637d4bf4-87d4-48d6-9527-2a01f679c75c", name: "Liquidity Risk Assessment", assetClass: "CRYPTO" },
  { ordinal: 570, id: "4ca87d98-c910-478a-8f13-26872bf01a37", name: "Iron Condor", assetClass: "GOLD" },
  { ordinal: 571, id: "c2b69180-9e9f-44d5-8748-3050dbd52c9f", name: "High-Yield Bond Spread Indicator", assetClass: "FOREX" },
  { ordinal: 572, id: "c6e4dea8-be88-4777-bb77-6c1717eea0d8", name: "Counterparty Risk Diversification", assetClass: "CRYPTO" },
  { ordinal: 573, id: "0187454f-b315-48ba-9f1f-4e011c9bb3e3", name: "Purchasing Managers’ Index (PMI) Trend", assetClass: "FOREX" },
  { ordinal: 574, id: "234367a7-183a-45f2-ad91-47cbca7d4a65", name: "Iron Condor (Swing)", assetClass: "GOLD" },
  { ordinal: 575, id: "e901f807-a332-4efb-90d7-2e3044de79ea", name: "Stablecoin Yield Diversification", assetClass: "CRYPTO" },
  { ordinal: 576, id: "058e0cf6-74d1-4b29-ba36-0a0db8302282", name: "Emergency Stop on Exchange Outage", assetClass: "CRYPTO" },
  { ordinal: 577, id: "2bfa3c95-08dc-4144-b4da-0559c9529e99", name: "Butterfly Spread", assetClass: "GOLD" },
  { ordinal: 578, id: "7bfd9636-0595-4532-b639-9a79f71b7a87", name: "Speculative Position Unwind Strategy", assetClass: "FOREX" },
  { ordinal: 579, id: "3908df13-0aa3-4b94-bb0a-d4c3a268d2a4", name: "Crowded Trade Fade", assetClass: "FOREX" },
  { ordinal: 580, id: "3d1f94c4-1c29-4cbc-8064-31ee445ef6f4", name: "Max Drawdown Alert System", assetClass: "CRYPTO" },
];

export const BATCH_581_600_TARGETS: Batch4Target[] = [
  { ordinal: 581, id: "90b6c3f9-571c-4342-9139-1e2bdf0502d3", name: "Butterfly Spread (Swing)", assetClass: "GOLD" },
  { ordinal: 582, id: "0f0c2bd6-727b-42bf-bc3c-65fe1325a97a", name: "Staged Exit Strategy", assetClass: "CRYPTO" },
  { ordinal: 583, id: "7c62eb32-f4e0-4b8c-bcf9-60b6295ac890", name: "Quant Sentiment Index Overlay", assetClass: "FOREX" },
  { ordinal: 584, id: "ad3a6d7b-b081-435c-950d-c93be05dc90f", name: "Protective Put", assetClass: "GOLD" },
  { ordinal: 585, id: "8c5c5f19-e6a0-445f-a862-c5525ac7674c", name: "Hedging Stablecoin Depeg Risk", assetClass: "CRYPTO" },
  { ordinal: 586, id: "e5c940ee-50e3-4674-88e9-7de92da704d6", name: "Multi-Asset Correlation Trade", assetClass: "FOREX" },
  { ordinal: 587, id: "e7ce1e96-9a6b-4c6c-806e-cf384621c3de", name: "Protective Put (Swing)", assetClass: "GOLD" },
  { ordinal: 588, id: "086690a4-2bcf-49d6-b059-ba5a78c137db", name: "Portfolio Insurance via Stable Yield", assetClass: "CRYPTO" },
  { ordinal: 589, id: "6e0ae7d8-618b-4f2e-8f9d-9a389beb84c4", name: "News Volume Spike Scalping", assetClass: "FOREX" },
  { ordinal: 590, id: "bd92f343-097d-4f75-b68d-98b565002407", name: "Covered Call", assetClass: "GOLD" },
  { ordinal: 591, id: "16d53b8e-5f6c-4fa3-8ae8-73aab546682f", name: "Covered Call (Swing)", assetClass: "GOLD" },
  { ordinal: 592, id: "5978e411-ea63-47a4-b62e-3682257cf4cb", name: "NFP Pre-Positioning", assetClass: "FOREX" },
  { ordinal: 593, id: "d659aa9b-578c-4376-8925-6281bfd2d0e6", name: "Tax-Loss Harvesting", assetClass: "CRYPTO" },
  { ordinal: 594, id: "3bbab57e-020e-40fe-9700-9cf1a1b21ad0", name: "Collar Strategy", assetClass: "GOLD" },
  { ordinal: 595, id: "90bd1f54-86da-42a1-94c6-e777451ed619", name: "Rebalancing Frequency Optimization", assetClass: "CRYPTO" },
  { ordinal: 596, id: "a91ae052-9dbd-4f2c-bd11-3a3435a20954", name: "Structural Break Detection", assetClass: "FOREX" },
  { ordinal: 597, id: "3a5d3b66-057d-4b0c-82b8-f25ffc19f367", name: "Collar Strategy (Swing)", assetClass: "GOLD" },
  { ordinal: 598, id: "55a62380-1350-48aa-9deb-5c7dad375fec", name: "Overnight/Weekend Gap Strategy", assetClass: "FOREX" },
  { ordinal: 599, id: "58b83345-b753-4105-a44b-e49aff0e5491", name: "Options Collar Hedging", assetClass: "CRYPTO" },
  { ordinal: 600, id: "2e0dedd8-7375-49fb-963d-00429aa8785c", name: "Diversified Custody", assetClass: "CRYPTO" },
];

export const BATCH_601_620_TARGETS: Batch4Target[] = [
  { ordinal: 601, id: "e4516e96-da3f-402c-aa29-f3dab8027415", name: "Order Flow Footprint", assetClass: "GOLD" },
  { ordinal: 602, id: "fee5f9b4-2850-4619-9780-01b0d4dd6b82", name: "Opening Range Fade", assetClass: "FOREX" },
  { ordinal: 603, id: "252a8705-10ae-4f2f-bdfb-ec6bdae7d482", name: "Overnight Carry Basket with Stop-Loss", assetClass: "FOREX" },
  { ordinal: 604, id: "456e46b8-56ae-4be0-981e-c7d9f7252097", name: "Order Flow Footprint (Swing)", assetClass: "GOLD" },
  { ordinal: 605, id: "dea19ae1-0c21-4ff0-89ec-74ad60af1034", name: "Leverage Ladder", assetClass: "CRYPTO" },
  { ordinal: 606, id: "4d0f92ad-fef6-4140-ac47-2203fc1c04d5", name: "Time Decay Arbitrage in FX Options", assetClass: "FOREX" },
  { ordinal: 607, id: "62e5b1d0-53ba-44e7-9ee1-6bca65dbdb38", name: "Position Hedging via Inverse Exchange-Traded Products", assetClass: "CRYPTO" },
  { ordinal: 608, id: "e78fde06-646a-43f5-94b0-5b30e85ee6f1", name: "Liquidity Sweep Fade", assetClass: "GOLD" },
  { ordinal: 609, id: "89b069ff-34b0-46ef-9fe0-5f9f0effa468", name: "FX Forward Spread Trading", assetClass: "FOREX" },
  { ordinal: 610, id: "bd285b5a-f9f0-455d-9663-aadc30c8dfd4", name: "Liquidity Sweep Fade (Swing)", assetClass: "GOLD" },
  { ordinal: 611, id: "eaaeef0b-f9e6-42f5-a07b-2744a58d5510", name: "Emergency Wallet Seed Backup Strategy", assetClass: "CRYPTO" },
  { ordinal: 612, id: "0f3b406d-ad21-4228-8247-29e589a47868", name: "Momentum Fuel Check", assetClass: "FOREX" },
  { ordinal: 613, id: "227bfcb5-0e66-47b6-8ddf-32b36f8129c5", name: "Realized vs Implied Volatility Spread", assetClass: "FOREX" },
  { ordinal: 614, id: "53b6a74f-69c7-4d04-b8e8-1f202db190c5", name: "Dynamic Hedging via Perps", assetClass: "CRYPTO" },
  { ordinal: 615, id: "e0bd7598-68c2-4024-a65d-41f864325674", name: "Stop Cluster Breakout", assetClass: "GOLD" },
  { ordinal: 616, id: "53fc12c9-312a-4e96-bcc2-67ac111af185", name: "Self-Custody vs Exchange Risk Management", assetClass: "CRYPTO" },
  { ordinal: 617, id: "91c3ff75-8546-47ee-9026-df27dc0eed18", name: "Stop Cluster Breakout (Swing)", assetClass: "GOLD" },
  { ordinal: 618, id: "257be27e-75e8-41fa-85b4-1d0718b77abc", name: "Insurance on CeFi Platforms", assetClass: "CRYPTO" },
  { ordinal: 619, id: "97c9a920-5d25-4c35-a725-adb53df0f0ca", name: "Relative Value (Gold vs Silver)", assetClass: "GOLD" },
  { ordinal: 620, id: "7265d8d9-ff11-4aba-b688-a5a41a9fe76b", name: "Relative Value (Gold vs Silver) (Swing)", assetClass: "GOLD" },
];

export const BATCH_621_640_TARGETS: Batch4Target[] = [
  { ordinal: 621, id: "7ef3c0ed-1424-4b7f-b610-515bd3bf0b90", name: "Use of Multi-Sig for Fund Transfers", assetClass: "CRYPTO" },
  { ordinal: 622, id: "2014425f-1e6f-48d0-a791-dc8787c51261", name: "Fixed Withdrawal Schedule", assetClass: "CRYPTO" },
  { ordinal: 623, id: "9551ed7c-4660-4149-92da-69cc388b3526", name: "Relative Value (Gold vs USD)", assetClass: "GOLD" },
  { ordinal: 624, id: "e86fd3fe-a0ad-4f19-ab50-bd2e65226973", name: "Relative Value (Gold vs USD) (Swing)", assetClass: "GOLD" },
  { ordinal: 625, id: "f0286c78-21da-4704-a0b8-fbda220d3c3a", name: "Structured Exit Laddering", assetClass: "CRYPTO" },
  { ordinal: 626, id: "5c96f7e1-1055-41c7-9e8c-662212c2e9a8", name: "Statistical Arbitrage (Gold Pair)", assetClass: "GOLD" },
  { ordinal: 627, id: "bad37291-dee1-4205-bf64-5a1739e2b34e", name: "Statistical Arbitrage (Gold Pair) (Swing)", assetClass: "GOLD" },
  { ordinal: 628, id: "42dd0323-a63a-43df-917c-c7cef67725e6", name: "Execution Algorithm (VWAP/TWAP)", assetClass: "GOLD" },
  { ordinal: 629, id: "85229e05-b8d2-4927-b31c-1b019b0d2180", name: "Execution Algorithm (VWAP/TWAP) (Swing)", assetClass: "GOLD" },
  { ordinal: 630, id: "ab5ba3fd-17f0-468a-b605-2d3a33b5fab0", name: "Market Making / Inventory Model", assetClass: "GOLD" },
  { ordinal: 631, id: "bbf92c21-6b4d-4e32-9c73-36deca85978c", name: "Market Making / Inventory Model (Swing)", assetClass: "GOLD" },
  { ordinal: 632, id: "054e0099-bc30-4028-9eb1-de66e53e8b3f", name: "Gold vs DXY Divergence", assetClass: "GOLD" },
  { ordinal: 633, id: "df170f70-8800-4ef0-87d3-46675d1040c0", name: "Gold vs Real Yields Spread", assetClass: "GOLD" },
  { ordinal: 634, id: "0803bd5f-0850-4367-8ac7-f1825026f11b", name: "Gold vs Equities Risk-Off Divergence", assetClass: "GOLD" },
  { ordinal: 635, id: "6d6c898f-e5a7-4e9c-8206-91545b54fb8b", name: "Gold vs Oil Relationship", assetClass: "GOLD" },
  { ordinal: 636, id: "e95fa993-c93c-4f14-a859-9d8ce52bfee6", name: "Gold vs Copper Correlation", assetClass: "GOLD" },
  { ordinal: 637, id: "cdf8e0cf-c28f-44fa-a26f-9fcd3ef443bf", name: "Gold vs Inflation Expectations", assetClass: "GOLD" },
  { ordinal: 638, id: "32bc5b33-d691-4c10-b990-c90cb19b10d0", name: "Gold vs Silver Ratio High (Switch to Silver)", assetClass: "GOLD" },
  { ordinal: 639, id: "306e38b2-c6d5-4657-bf98-90aa7bf395ec", name: "Gold vs Silver Ratio Low (Switch to Gold)", assetClass: "GOLD" },
  { ordinal: 640, id: "31086641-7559-436f-b956-ed50c8021488", name: "Rule-Based Trend System", assetClass: "GOLD" },
];

export const BATCH_641_660_TARGETS: Batch4Target[] = [
  { ordinal: 641, id: "8cddfe23-62a8-4514-afe2-0eb2be975a70", name: "Rule-Based Mean Reversion", assetClass: "GOLD" },
  { ordinal: 642, id: "044b925d-8d7f-4228-8d4e-42487f92ed3b", name: "Volatility-Targeted System", assetClass: "GOLD" },
  { ordinal: 643, id: "f59824f7-1fb8-4bac-bd2e-377613d5ebe2", name: "Regime-Switching Model", assetClass: "GOLD" },
  { ordinal: 644, id: "6fdf5ab3-7f5a-41af-b557-b8cb678b58d5", name: "Machine Learning Forecast Model", assetClass: "GOLD" },
  { ordinal: 645, id: "a1208684-a72f-4d3d-a74e-b2cee6cf6650", name: "Portfolio Rebalancing Algorithm", assetClass: "GOLD" },
  { ordinal: 646, id: "760f7e39-ba70-437e-bdff-890c76a4044b", name: "Multi-Timeframe Confluence", assetClass: "GOLD" },
  { ordinal: 647, id: "8e3ffed5-2f25-405a-a30d-51f01e0bc116", name: "Macro + Technical Confluence", assetClass: "GOLD" },
  { ordinal: 648, id: "f9304213-8e86-4b0f-b73b-a507049b0571", name: "Price Action + Volatility", assetClass: "GOLD" },
  { ordinal: 649, id: "67724b16-51bf-49b3-83d0-14ee83f17205", name: "Yield + USD + Chart Structure", assetClass: "GOLD" },
  { ordinal: 650, id: "a59864de-9f44-4ac6-b378-f72a328a67c7", name: "AI-Assisted Signal", assetClass: "GOLD" },
  { ordinal: 651, id: "54a282b2-86aa-408f-a182-a0ef6db3c910", name: "ATR-Based Position Sizing", assetClass: "GOLD" },
  { ordinal: 652, id: "254688f9-ce4a-4d7b-80c6-4ab9c6bee35e", name: "Leverage Control", assetClass: "GOLD" },
  { ordinal: 653, id: "a7bc7022-31bd-45b7-b5e6-f8e39af56485", name: "News Event Risk Reduction", assetClass: "GOLD" },
  { ordinal: 654, id: "c9f5bceb-4e9d-48ff-8360-a24d8d00dbf1", name: "Drawdown Controls", assetClass: "GOLD" },
  { ordinal: 655, id: "05a13e01-04b0-48e8-b68c-cb09952c7e09", name: "Portfolio Hedging with Gold", assetClass: "GOLD" },
  { ordinal: 656, id: "930aa72d-4673-47bc-bf86-6db9fbcbe206", name: "Correlation-Aware Exposure", assetClass: "GOLD" },
  { ordinal: 657, id: "a5015754-5d74-440e-9844-f639a6dcd824", name: "Dummy Strategy", assetClass: "GOLD" },
  { ordinal: 658, id: "ec7c69b1-ace3-4b1b-bf11-e32b0bd9af71", name: "Bollinger Squeeze Breakout", assetClass: "FOREX" },
  { ordinal: 659, id: "3389f2de-a277-4fdf-8977-86d0e30e38e5", name: "Price Action Candle Timing", assetClass: "FOREX" },
  { ordinal: 660, id: "d90ff3f5-3816-4097-85bf-6afbed65e17c", name: "Structural Breakout (Retest)", assetClass: "FOREX" },
];

export const BATCH_661_671_TARGETS: Batch4Target[] = [
  { ordinal: 661, id: "088ed23a-aaca-4b02-bc57-b372b6898f5b", name: "Exchange Inflow Exhaustion", assetClass: "CRYPTO" },
  { ordinal: 662, id: "0e8714b8-374a-4afa-bc0e-7ccba4531005", name: "Single Moving-Average Filter", assetClass: "FOREX" },
  { ordinal: 663, id: "124a287b-e7ce-48a9-9ce1-ab8ec8054481", name: "Q1 Seasonal Demand Surge", assetClass: "GOLD" },
  { ordinal: 664, id: "389fac5e-4109-4c7e-b32d-7e6623765f49", name: "ADX Trend Strength Filter", assetClass: "FOREX" },
  { ordinal: 665, id: "6eabab8a-e14f-4a63-a927-e2e4e7271450", name: "MACD Trend-Following", assetClass: "FOREX" },
  { ordinal: 666, id: "7561179f-cda3-42e4-8fcd-d0c8c765b505", name: "Funding Rate Arbitrage (Delta Neutral)", assetClass: "CRYPTO" },
  { ordinal: 667, id: "81ea5a2f-a0d3-4a88-853f-142dbcd5f34d", name: "Moving-Average Crossover Trend", assetClass: "FOREX" },
  { ordinal: 668, id: "aa3e6c1d-cb11-45e3-acab-1ecee367a33d", name: "Real Yield Inversion Play", assetClass: "GOLD" },
  { ordinal: 669, id: "b3a26a61-8ef9-4dd2-b908-d7b2abc3cfb9", name: "Supertrend Volatility Stop", assetClass: "FOREX" },
  { ordinal: 670, id: "bbf2f1a8-f331-447b-bb33-a09a2954d873", name: "Ichimoku Cloud Logic", assetClass: "FOREX" },
  { ordinal: 671, id: "f08d9f96-276f-44ca-8670-1d5516d2cf75", name: "London Session Momentum", assetClass: "FOREX" },
];

function normalizedName(name: string): string {
  return name.toLowerCase().replace(/\\\+/g, "+").replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, "-");
}

function labelSuffix(strategyName: string, assetClass: StrategyAssetClass): string {
  return ` [${strategyName} (${assetClass})]`;
}

export function namesMatchExpected(actualName: string, expectedName: string): boolean {
  return normalizedName(actualName) === normalizedName(expectedName);
}

export function getCorrectLevel(name: string, assetClass: StrategyAssetClass): number {
  const n = normalizedName(name);

  if (n.includes("exchange inflow exhaustion") && assetClass === "CRYPTO") return 8;
  if (n.includes("single moving-average filter") && assetClass === "FOREX") return 2;
  if (n.includes("q1 seasonal demand surge") && assetClass === "GOLD") return 6;
  if (n.includes("adx trend strength filter") && assetClass === "FOREX") return 2;
  if (n.includes("macd trend-following") && assetClass === "FOREX") return 2;
  if (n.includes("funding rate arbitrage") && n.includes("delta neutral") && assetClass === "CRYPTO") return 9;
  if (n.includes("moving-average crossover trend") && assetClass === "FOREX") return 2;
  if (n.includes("real yield inversion play") && assetClass === "GOLD") return 6;
  if (n.includes("supertrend volatility stop") && assetClass === "FOREX") return 2;
  if (n.includes("ichimoku cloud logic") && assetClass === "FOREX") return 2;
  if (n.includes("london session momentum") && assetClass === "FOREX") return 4;

  if (
    n.includes("options put/call ratio") ||
    (n.includes("options skew") && assetClass === "GOLD")
  ) return 6;
  if (n.includes("volatility targeting strategy") && assetClass === "CRYPTO") return 5;
  if (
    n.includes("speed of market momentum scalping") ||
    n.includes("news fade strategy")
  ) return 7;
  if (
    n.includes("straddle the news") ||
    (n.includes("gamma scalping") && assetClass === "FOREX") ||
    n.includes("calendar spread in fx options") ||
    n.includes("interest rate swaption hedge") ||
    n.includes("funding + basis + oi composite")
  ) return 9;
  if (
    n.includes("on-chain + technical confluence") ||
    n.includes("funding + social sentiment filter") ||
    n.includes("multi-factor quant scoring") ||
    n.includes("technical + fundamental confirmation") ||
    n.includes("on-chain + sentiment contrarian")
  ) return 8;
  if (n.includes("technical + options skew confirmation") && assetClass === "CRYPTO") return 9;
  if (n.includes("relative strength rotation") && assetClass === "FOREX") return 5;
  if (n.includes("basis arbitrage") && assetClass === "GOLD") return 9;
  if (n.includes("calendar spread") && assetClass === "GOLD") return 9;
  if (n.includes("volatility breakout system") && n.includes("turtle") && assetClass === "FOREX") return 2;
  if (n.includes("dynamic support") && n.includes("pivot points") && assetClass === "FOREX") return 2;
  if (n.includes("fibonacci retracement strategy") && assetClass === "FOREX") return 2;
  if (n.includes("moving average envelope") && assetClass === "FOREX") return 2;
  if (n.includes("ichimoku kumo breakout") && assetClass === "FOREX") return 2;
  if (n.includes("leverage control") && assetClass === "CRYPTO") return 9;
  if (n.includes("spot-futures divergence") && assetClass === "GOLD") return 9;
  if (n.includes("adaptive rsi") && assetClass === "FOREX") return 2;
  if (n.includes("portfolio diversification across sectors") && assetClass === "CRYPTO") return 9;
  if (n.includes("heikin-ashi") && n.includes("rsi") && assetClass === "FOREX") return 2;
  if (n.includes("event straddle") && assetClass === "GOLD") return 9;
  if (n.includes("stablecoin hedging") && assetClass === "CRYPTO") return 9;
  if (n.includes("williams %r") && assetClass === "FOREX") return 2;
  if (n.includes("insurance via options") && assetClass === "CRYPTO") return 9;
  if (n.includes("klinger volume oscillator") && assetClass === "FOREX") return 3;
  if (n.includes("elder triple screen") && assetClass === "FOREX") return 6;
  if (n.includes("dollar-cost averaging") && assetClass === "CRYPTO") return 9;
  if (n.includes("event strangle") && assetClass === "GOLD") return 9;
  if (n.includes("laddered entry and exit") && assetClass === "CRYPTO") return 5;
  if (n.includes("gann angle") && assetClass === "FOREX") return 2;
  if (n.includes("liquidation threshold monitoring") && assetClass === "CRYPTO") return 9;
  if (n.includes("pivot point camarilla") && assetClass === "FOREX") return 2;
  if (n.includes("volatility selling") && n.includes("short straddle") && assetClass === "GOLD") return 9;
  if (n.includes("hedged beta exposure") && assetClass === "CRYPTO") return 5;
  if (n.includes("quantile regression forecasting") && assetClass === "FOREX") return 9;
  if (n.includes("rebalancing into stablecoins") && assetClass === "CRYPTO") return 8;
  if (n.includes("fractal adaptive moving average") && assetClass === "FOREX") return 2;
  if (n.includes("gamma scalping") && assetClass === "GOLD") return 9;
  if (n.includes("dynamic position sizing based on drawdown") && assetClass === "CRYPTO") return 5;
  if (n.includes("renko chart trend trading") && assetClass === "FOREX") return 2;
  if (n.includes("stop-loss under volatility band") && assetClass === "CRYPTO") return 5;
  if (n.includes("point & figure breakout") && assetClass === "FOREX") return 2;
  if (n.includes("bull call spread") && assetClass === "GOLD") return 9;
  if (n.includes("capital allocation caps") && assetClass === "CRYPTO") return 5;
  if (n.includes("tick chart scalping") && assetClass === "FOREX") return 7;
  if (n.includes("stress testing portfolio") && assetClass === "CRYPTO") return 9;
  if (n.includes("currency strength meter") && assetClass === "FOREX") return 5;
  if (n.includes("bear put spread") && assetClass === "GOLD") return 9;
  if (n.includes("economic surprise index") && assetClass === "FOREX") return 6;
  if (n.includes("risk buffer via insurance protocols") && assetClass === "CRYPTO") return 9;
  if (n.includes("political risk premium") && assetClass === "FOREX") return 8;
  if (n.includes("portfolio volatility cap") && assetClass === "CRYPTO") return 5;
  if (n.includes("ratio call spread") && assetClass === "GOLD") return 9;
  if (n.includes("geopolitical hedging") && assetClass === "FOREX") return 6;
  if (n.includes("liquidity risk assessment") && assetClass === "CRYPTO") return 9;
  if (n.includes("high-yield bond spread") && assetClass === "FOREX") return 6;
  if (n.includes("counterparty risk diversification") && assetClass === "CRYPTO") return 9;
  if (n.includes("purchasing managers") && n.includes("pmi") && assetClass === "FOREX") return 6;
  if (n.includes("stablecoin yield diversification") && assetClass === "CRYPTO") return 9;
  if (n.includes("emergency stop on exchange outage") && assetClass === "CRYPTO") return 9;
  if (n.includes("speculative position unwind") && assetClass === "FOREX") return 6;
  if (n.includes("crowded trade fade") && assetClass === "FOREX") return 8;
  if (n.includes("max drawdown alert") && assetClass === "CRYPTO") return 5;
  if (n.includes("butterfly spread") && assetClass === "GOLD") return 9;
  if (n.includes("staged exit") && assetClass === "CRYPTO") return 5;
  if (n.includes("quant sentiment index") && assetClass === "FOREX") return 8;
  if (n.includes("protective put") && assetClass === "GOLD") return 9;
  if (n.includes("hedging stablecoin depeg") && assetClass === "CRYPTO") return 9;
  if (n.includes("multi-asset correlation") && assetClass === "FOREX") return 5;
  if (n.includes("portfolio insurance via stable yield") && assetClass === "CRYPTO") return 9;
  if (n.includes("news volume spike scalping") && assetClass === "FOREX") return 7;
  if (n.includes("covered call") && assetClass === "GOLD") return 9;
  if (n.includes("nfp pre-positioning") && assetClass === "FOREX") return 7;
  if (n.includes("tax-loss harvesting") && assetClass === "CRYPTO") return 9;
  if (n.includes("collar strategy") && assetClass === "GOLD") return 9;
  if (n.includes("rebalancing frequency optimization") && assetClass === "CRYPTO") return 9;
  if (n.includes("structural break detection") && assetClass === "FOREX") return 9;
  if (n.includes("overnight/weekend gap") && assetClass === "FOREX") return 4;
  if (n.includes("options collar hedging") && assetClass === "CRYPTO") return 9;
  if (n.includes("diversified custody") && assetClass === "CRYPTO") return 9;
  if (n.includes("order flow footprint") && assetClass === "GOLD") return 3;
  if (n.includes("opening range fade") && assetClass === "FOREX") return 4;
  if (n.includes("overnight carry basket") && assetClass === "FOREX") return 6;
  if (n.includes("leverage ladder") && assetClass === "CRYPTO") return 9;
  if (n.includes("time decay arbitrage") && assetClass === "FOREX") return 9;
  if (n.includes("position hedging via inverse") && assetClass === "CRYPTO") return 9;
  if (n.includes("liquidity sweep fade") && assetClass === "GOLD") return 2;
  if (n.includes("fx forward spread trading") && assetClass === "FOREX") return 9;
  if (n.includes("emergency wallet seed backup") && assetClass === "CRYPTO") return 9;
  if (n.includes("momentum fuel check") && assetClass === "FOREX") return 7;
  if (n.includes("realized vs implied volatility spread") && assetClass === "FOREX") return 9;
  if (n.includes("dynamic hedging via perps") && assetClass === "CRYPTO") return 9;
  if (n.includes("stop cluster breakout") && assetClass === "GOLD") return 2;
  if (n.includes("self-custody vs exchange risk") && assetClass === "CRYPTO") return 9;
  if (n.includes("insurance on cefi platforms") && assetClass === "CRYPTO") return 9;
  if (n.includes("relative value") && n.includes("gold vs silver") && assetClass === "GOLD") return 5;
  if (n.includes("multi-sig") && assetClass === "CRYPTO") return 9;
  if (n.includes("fixed withdrawal schedule") && assetClass === "CRYPTO") return 9;
  if (n.includes("relative value") && n.includes("gold vs usd") && assetClass === "GOLD") return 6;
  if (n.includes("structured exit laddering") && assetClass === "CRYPTO") return 5;
  if (n.includes("statistical arbitrage") && n.includes("gold pair") && assetClass === "GOLD") return 5;
  if (n.includes("execution algorithm") && n.includes("vwap") && n.includes("twap") && assetClass === "GOLD") return 7;
  if (n.includes("market making") && n.includes("inventory model") && assetClass === "GOLD") return 9;
  if (n.includes("gold vs dxy divergence") && assetClass === "GOLD") return 6;
  if (n.includes("gold vs real yields spread") && assetClass === "GOLD") return 6;
  if (n.includes("gold vs equities risk-off divergence") && assetClass === "GOLD") return 6;
  if (n.includes("gold vs oil relationship") && assetClass === "GOLD") return 5;
  if (n.includes("gold vs copper correlation") && assetClass === "GOLD") return 5;
  if (n.includes("gold vs inflation expectations") && assetClass === "GOLD") return 6;
  if (n.includes("gold vs silver ratio") && assetClass === "GOLD") return 5;
  if (n.includes("rule-based trend system") && assetClass === "GOLD") return 8;
  if (n.includes("rule-based mean reversion") && assetClass === "GOLD") return 8;
  if (n.includes("volatility-targeted system") && assetClass === "GOLD") return 5;
  if (n.includes("regime-switching model") && assetClass === "GOLD") return 9;
  if (n.includes("machine learning forecast model") && assetClass === "GOLD") return 9;
  if (n.includes("portfolio rebalancing algorithm") && assetClass === "GOLD") return 9;
  if (n.includes("multi-timeframe confluence") && assetClass === "GOLD") return 8;
  if (n.includes("macro + technical confluence") && assetClass === "GOLD") return 8;
  if (n.includes("price action + volatility") && assetClass === "GOLD") return 6;
  if (n.includes("yield + usd + chart structure") && assetClass === "GOLD") return 6;
  if ((n.includes("ai-assisted signal") || n.includes("ai-assisted trade review")) && assetClass === "GOLD") return 9;
  if (n.includes("atr-based position sizing") && assetClass === "GOLD") return 5;
  if (n.includes("leverage control") && assetClass === "GOLD") return 5;
  if (n.includes("news event risk reduction") && assetClass === "GOLD") return 6;
  if (n.includes("drawdown controls") && assetClass === "GOLD") return 5;
  if (n.includes("portfolio hedging with gold") && assetClass === "GOLD") return 5;
  if (n.includes("correlation-aware exposure") && assetClass === "GOLD") return 5;
  if ((n.includes("dummy strategy") || n.includes("previous-day high breakout")) && assetClass === "GOLD") return 2;
  if (n.includes("bollinger squeeze breakout") && assetClass === "FOREX") return 2;
  if (n.includes("price action candle timing") && assetClass === "FOREX") return 1;
  if (n.includes("structural breakout") && n.includes("retest") && assetClass === "FOREX") return 2;

  if (
    n.includes("arbitrage bot") ||
    n.includes("machine-learning-enhanced execution") ||
    n.includes("rebalancing algorithm") ||
    n.includes("dynamic leverage adjustment") ||
    n.includes("momentum + mean reversion hybrid bot") ||
    n.includes("ai-assisted discretionary trading") ||
    n.includes("risk parity allocation algorithm") ||
    n.includes("risk parity currency portfolio") ||
    n.includes("reinforcement learning rebalancer")
  ) return 9;
  if (
    n.includes("cross-hedging with correlated asset") ||
    n.includes("portfolio diversification across currency pairs") ||
    n.includes("trailing stop strategy") ||
    n.includes("equity curve stop") ||
    n.includes("correlation matrix position adjustment")
  ) return 5;
  if (n.includes("retail sentiment contrarian")) return 8;
  if (n.includes("etf outflow indicator")) return 6;

  if (
    n.includes("flash loan arbitrage") ||
    n.includes("rule-based moving average bot") ||
    n.includes("indicator stack bot") ||
    n.includes("scalping bot") ||
    n.includes("direct hedging") ||
    n.includes("options hedging") ||
    n.includes("forward contract hedging")
  ) return 9;
  if (n.includes("governance token short") || n.includes("dao treasury diversification")) return 8;
  if (
    n.includes("atr-based stop placement") ||
    n.includes("volatility scaling portfolio allocation") ||
    n.includes("drawdown control") ||
    n.includes("hedging with correlated currency pairs")
  ) return 5;
  if (
    n.includes("cot speculator extreme short") ||
    n.includes("cot commercial hedger accumulation") ||
    n.includes("cot divergence") ||
    n.includes("etf inflow momentum")
  ) return 6;

  if (
    n.includes("stablecoin arbitrage across chains") ||
    n.includes("impermanent loss protection") ||
    n.includes("restaking & liquid staking") ||
    n.includes("synthetic asset arbitrage") ||
    n.includes("insurance pool participation")
  ) return 9;
  if (n.includes("liquidation farming on defi lending")) return 9;
  if (n.includes("macro + machine learning hybrid")) return 9;
  if (
    n.includes("de-dollarization theme") ||
    n.includes("supply disruption") ||
    n.includes("cot speculator extreme")
  ) return 6;
  if (n.includes("staking yield strategy")) return 8;
  if (n.includes("seasonal + technical confirmation") || n.includes("volatility breakout + fundamental filter")) return 8;
  if (
    n.includes("fixed fractional position sizing") ||
    n.includes("fixed ratio position sizing") ||
    n.includes("kelly criterion sizing")
  ) return 5;

  if (
    n.includes("liquidity provision to stable pair") ||
    n.includes("liquidity provision to volatile pair") ||
    n.includes("yield farming rotation") ||
    n.includes("dex arbitrage") ||
    n.includes("perpetual dex funding arbitrage") ||
    n.includes("lending & borrowing looping") ||
    n.includes("rate arbitrage between lending platforms")
  ) return 9;
  if (n.includes("geopolitical risk") && assetClass === "GOLD") return 9;
  if (n.includes("central bank net buying") || n.includes("central bank net selling")) return 6;
  if (
    n.includes("indicator + price action confluence") ||
    n.includes("triangular confluence") ||
    n.includes("hybrid carry + price action") ||
    n.includes("sentiment + risk-on/off regime")
  ) return 8;
  if (n.includes("mean reversion + options hedging")) return 9;
  if (n.includes("news + technical event trading")) return 7;
  if (n.includes("order flow + price action confluence")) return 3;

  if (n.includes("fx basket mean-reversion quant")) return 5;
  if (
    n.includes("usd strength") ||
    n.includes("yield curve inversion") ||
    n.includes("high volatility risk-off")
  ) return 6;
  if (
    n.includes("hft momentum ignition") ||
    n.includes("vwap reversion execution") ||
    n.includes("liquidity provision incentives") ||
    n.includes("cross-asset statistical factor model")
  ) return 9;
  if (n.includes("order flow imbalance analysis") || n.includes("imbalance + price ladder scalping")) return 3;
  if (n.includes("adaptive moving average") && n.includes("kaufman")) return 2;
  if (n.includes("volatility scaling of position sizes")) return 5;
  if (n.includes("trend + fundamental confirmation") || n.includes("technical + sentiment confluence")) return 8;
  if (n.includes("fundamental + cot confluence")) return 6;
  if (n.includes("multi-timeframe trend alignment")) return 6;

  if (
    n.includes("neural network price prediction") ||
    n.includes("random forest classification") ||
    n.includes("support vector machine") ||
    n.includes("reinforcement learning trading agent") ||
    n.includes("kalman filter trend estimation") ||
    n.includes("hidden markov model")
  ) return 9;
  if (
    n.includes("fed dovish pivot") ||
    n.includes("fed hawkish pivot") ||
    n.includes("inflation hedge") ||
    n.includes("usd weakness")
  ) return 6;
  if (
    n.includes("spatial arbitrage") ||
    (n.includes("triangular arbitrage") && assetClass === "CRYPTO") ||
    n.includes("cross-exchange market making") ||
    n.includes("latency market making") ||
    n.includes("high-frequency market making")
  ) return 9;
  if (n.includes("statistical arbitrage basket") || n.includes("cointegration basket trading")) return 5;

  if (n.includes("trend + volume confirmation") && assetClass === "GOLD") return 3;
  if (n.includes("moving average crossover bot")) return 2;
  if (n.includes("protective put hedging")) return 9;
  if (n.includes("turtle trading system")) return 2;
  if (n.includes("covered call income")) return 9;
  if (n.includes("real yield decline") || n.includes("real yield rise")) return 6;
  if (n.includes("channel breakout system")) return 2;
  if (n.includes("butterfly spread")) return 9;
  if (n.includes("mean reversion algorithm") && n.includes("bollinger")) return 2;
  if (n.includes("iron condor")) return 9;
  if (n.includes("gamma tilt")) return 9;
  if (n.includes("statistical arbitrage") && n.includes("pairs algorithm")) return 5;
  if (n.includes("genetic algorithm parameter")) return 9;
  if (n.includes("liquidation cascade trigger")) return 9;
  if (n.includes("cross-exchange arbitrage")) return 9;

  if (n.includes("price channel break") && n.includes("keltner")) return 2;
  if (n.includes("calendar spread") || n.includes("perpetual funding rate arbitrage") || n.includes("gamma scalping") || n.includes("volatility skew trade") || n.includes("straddle") || n.includes("put-call parity")) return 9;
  if (n.includes("relative value currency basket")) return 5;
  if (n.includes("yield curve arbitrage")) return 6;
  if (n.includes("order anticipation") || n.includes("liquidity provision with vwap/twap") || n.includes("percent of volume") || n.includes("iceberg detection")) return 9;
  if (n.includes("supertrend indicator strategy") && assetClass === "GOLD") return 2;
  if (n.includes("liquidity run reversal")) return 2;

  if (n.includes("miner hashrate") || n.includes("stake/unstake") || n.includes("gas price and activity")) return 8;
  if (n.includes("institutional supply and demand") || n === "market supply/demand") return 3;
  if (n.includes("fibonacci retracement confluence") || n.includes("round number bounce") || n.includes("moving average bounce") || n.includes("horizontal s/r breakout")) return 2;
  if (n.includes("fixed fractional sizing") || n.includes("atr-adjusted volatility sizing")) return 5;
  if (n.includes("peg maintenance")) return 6;
  if (n.includes("market making") || n.includes("triangular arbitrage") || n.includes("covered interest arbitrage") || n.includes("spot-futures basis") || n.includes("reverse basis trade")) return 9;

  if (n.includes("social media sentiment") || n.includes("sentiment divergence") || n.includes("sentiment confirmed breakout") || n.includes("sentiment & macro combined")) return 8;
  if (n.includes("whale exchange inflow") || n.includes("exchange net flow divergence") || n.includes("dormant coin movement") || n.includes("utxo age distribution") || n.includes("wallet clustering") || n.includes("stablecoin supply ratio") || n.includes("miner outflow")) return 8;
  if (n.includes("atr expansion breakout") || n.includes("nr7/nr4") || n.includes("fibonacci retracement confluence")) return 2;
  if (n.includes("depth of market") || n.includes("volume profile trading") || n.includes("footprint chart strategy")) return 3;

  if (n.includes("commitment of traders") || n.includes("commercial hedger") || n.includes("options sentiment")) return 6;
  if (n.includes("retail sentiment") || n.includes("forex fear & greed") || n.includes("reddit sentiment") || n.includes("whale exchange outflow")) return 8;
  if (n.includes("news sentiment analysis")) return 7;
  if (n.includes("funding & oi combined")) return 6;
  if (n.includes("funding + basis convergence") || n.includes("crowded short squeeze") || n.includes("liquidation level front-run")) return 9;
  if (n.includes("parabolic sar reversal") || n.includes("bollinger squeeze breakout") || n.includes("atr expansion breakout")) return 2;

  if (n.includes("political event trading")) return 7;
  if (n.includes("fx fair value") || n.includes("seasonal patterns") || n.includes("terms of trade spread convergence") || n.includes("safe-haven demand") || n.includes("risk-on carry basket")) return 6;
  if (n.includes("open interest expansion") || n.includes("open interest divergence")) return 6;
  if (n.includes("liquidation cluster") || n.includes("liquidation cascade fade")) return 9;
  if (n.includes("social sentiment index") || n.includes("twitter influencer") || n.includes("fear & greed")) return 8;
  if (n.includes("alligator and fractals") || n.includes("adx + dmi")) return 2;
  if (n.includes("news trading on economic releases") || n.includes("regulatory event trading")) return 7;
  if (n.includes("flag and pennant") || n.includes("triangle breakout") || n.includes("ichimoku cloud breakout")) return 2;
  if (n.includes("on-chain treasury") || n.includes("narrative sentiment index")) return 8;
  if (n.includes("central bank divergence") || n.includes("commodity currency correlation") || n.includes("terms of trade") || n.includes("inflation differential") || n.includes("gdp growth differential") || n.includes("balance of payments")) return 6;
  if (n.includes("funding rate arbitrage")) return 9;
  if (n.includes("funding rate mean reversion") || n.includes("funding rate momentum")) return 6;

  if (n.includes("candlestick cluster confluence")) return 1;
  if (n.includes("harmonic patterns") || n.includes("elliott wave") || n.includes("multi-timeframe candlestick")) return 2;
  if (n.includes("double top/bottom") || n.includes("cup and handle") || n.includes("flag and pennant")) return 2;
  if (n.includes("correlation & beta")) return 5;
  if (n.includes("macro liquidity correlation") || n === "carry trade" || n.includes("uncovered interest rate parity") || n.includes("interest rate differential momentum")) return 6;
  if (n.includes("supply shock") || n.includes("burn event") || n.includes("vesting cliff") || n.includes("network adoption") || n.includes("developer activity") || n.includes("governance proposal")) return 8;

  if (n.includes("open interest confirmation")) return 6;
  if (n.includes("bull/bear market condition adjustment") || n.includes("narrative rotation")) return 6;
  if (n.includes("ecosystem growth") || n.includes("tokenomics supply-demand") || n.includes("token unlock event") || n.includes("halving cycle")) return 8;
  if (n.includes("order block trading")) return 3;
  if (n.includes("break of structure") || n.includes("liquidity sweep") || n.includes("quasimodo") || n.includes("rectangle (range) pattern") || n.includes("trendline bounce")) return 2;
  if (n.includes("higher-high") && n.includes("higher-low")) return 1;
  if (n.includes("genetic algorithm")) return 9;
  if (n.includes("twap execution") || n.includes("vwap execution")) return 7;
  if (n.includes("iceberg orders") || n.includes("funding-adjusted breakout")) return 9;
  if (n.includes("multi-timeframe trend confluence")) return 6;
  if (n.includes("volume confirmation on trend")) return 3;
  if (n.includes("volatility targeting strategy") || n.includes("fixed fraction") || n.includes("kelly criterion") || n.includes("volatility adjusted position sizing") || n.includes("stop-loss placement") || n.includes("trailing stop") || n.includes("risk-reward ratio") || n.includes("laddered entry")) return 5;
  if (n.includes("on-chain") || n.includes("multi-factor quant") || n.includes("technical + fundamental") || n.includes("funding + social sentiment")) return 8;
  if (n.includes("funding + basis") || n.includes("options skew") || n.includes("leverage control") || n.includes("portfolio diversification") || n.includes("stablecoin hedging") || n.includes("insurance via options") || n.includes("dollar-cost averaging")) return 9;
  if (n.includes("ml regression") || n.includes("reinforcement learning") || n.includes("sentiment-driven ml") || n.includes("autoencoder")) return 8;
  if (n.includes("high-frequency market making") || n.includes("latency arbitrage")) return 9;
  if (n.includes("inside bar")) return 0;
  if (n.includes("engulfing pattern") || n.includes("bullish engulfing") || n.includes("bearish engulfing") || n.includes("outside bar") || n.includes("pin bar") || n.includes("hammer pattern") || n.includes("shooting star") || n.includes("inverted hammer") || n.includes("doji")) return 0;
  if (n.includes("flag and pennant") || n.includes("flag & pennant") || n.includes("trendline break") || n.includes("head & shoulders") || n.includes("head and shoulders") || n.includes("double top") || n.includes("double bottom") || n.includes("triple top") || n.includes("triple bottom") || n.includes("cup and handle") || n.includes("triangle pattern") || n.includes("wedge patterns")) return 2;
  if (n.includes("scalping")) return 7;
  if (n.includes("asia session") || n.includes("pre-london") || n.includes("new york session")) return 4;
  if (n.includes("news release breakout")) return 7;
  if (n.includes("grid breakout")) return 5;
  if (n.includes("pairs trading") || n.includes("cointegration")) return 5;
  if (n.includes("pair-wise mean reversion") || n.includes("statistical arbitrage")) return 5;
  if (n.includes("atr channel trend")) return 5;
  if (n.includes("breakout with volume confirmation") || n.includes("volume-weighted momentum")) return 3;
  if (n.includes("volume-price confirmation") || n.includes("obv")) return 3;
  if (n.includes("time-stop breakout") || n.includes("opening range breakout")) return 4;
  if (n.includes("momentum strength")) return 6;
  if (n.includes("volatility expansion breakout")) return 5;
  if (n.includes("volatility mean reversion") || n.includes("atr regression")) return 5;
  if (n.includes("momentum breakout with volume")) return 3;
  if (n.includes("head and shoulders") || n.includes("triangle breakout")) return 2;
  if (n.includes("momentum factor") || n.includes("absolute momentum") || n.includes("momentum divergence") || n.includes("momentum with moving average")) return 2;
  if (n.includes("regression channel")) return 2;
  if (n.includes("support and resistance bounce") || n.includes("support/resistance bounce")) return 2;
  if (n.includes("vwap") || n.includes("stochastic") || n.includes("oscillator") || n.includes("cci")) return 2;
  if (n.includes("moving average mean reversion")) return 2;
  if (n.includes("z-score") || n.includes("z score")) return 2;
  if (n.includes("bollinger")) return 2;
  if (n.includes("donchian")) return 2;
  if (n.includes("support-resistance") || n.includes("support/resistance")) return 2;
  if (n.includes("range breakout")) return 2;
  if (n.includes("gap breakout")) return 2;
  if (n.includes("pivot point")) return 2;
  if (n.includes("keltner")) return 2;
  if (n.includes("rsi")) return 2;
  if (n.includes("heikin")) return 2;
  if (n.includes("price channel breakout")) return 2;
  if (n.includes("supertrend")) return 2;
  if (n.includes("atr") || n.includes("volatility-adjusted")) return 4;
  if (n.includes("london open breakout") || n.includes("new york open breakout") || n.includes("ny open breakout") || n.includes("breakout (swing)") || n.includes("breakout (intraday)")) return 4;
  if (n.includes("academy entry logic")) return 3;
  if (n.includes("real yield inverse correlation")) return 3;

  if (
    n.includes("momentum") ||
    n.includes("roc") ||
    n.includes("crossover") ||
    n.includes("moving average") ||
    n.includes("moving-average") ||
    n.includes("filter") ||
    n.includes("cross") ||
    n.includes("macd") ||
    n.includes("adx") ||
    n.includes("wma") ||
    n.includes("parabolic sar") ||
    n.includes("ichimoku")
  ) {
    return 2;
  }

  if (assetClass === "GOLD") return 3;
  if (assetClass === "FOREX") return 4;
  if (assetClass === "CRYPTO") return 5;
  return 2;
}

export function getCorrectFamily(name: string, currentFamily: string, assetClass?: StrategyAssetClass): string {
  const n = normalizedName(name);

  if (n.includes("exchange inflow exhaustion") && assetClass === "CRYPTO") return "Crypto Exchange-Inflow Exhaustion";
  if (n.includes("single moving-average filter") && assetClass === "FOREX") return "Forex Single Moving-Average Filter";
  if (n.includes("q1 seasonal demand surge") && assetClass === "GOLD") return "Gold Q1 Seasonal Demand";
  if (n.includes("adx trend strength filter") && assetClass === "FOREX") return "Forex ADX Trend Strength Filter";
  if (n.includes("macd trend-following") && assetClass === "FOREX") return "Forex MACD Trend-Following";
  if (n.includes("funding rate arbitrage") && n.includes("delta neutral") && assetClass === "CRYPTO") return "Crypto Delta-Neutral Funding Arbitrage";
  if (n.includes("moving-average crossover trend") && assetClass === "FOREX") return "Forex Moving-Average Crossover Trend";
  if (n.includes("real yield inversion play") && assetClass === "GOLD") return "Gold Real-Yield Inversion";
  if (n.includes("supertrend volatility stop") && assetClass === "FOREX") return "Forex Supertrend Volatility Stop";
  if (n.includes("ichimoku cloud logic") && assetClass === "FOREX") return "Forex Ichimoku Cloud Logic";
  if (n.includes("london session momentum") && assetClass === "FOREX") return "Forex London Session Momentum";

  if (n.includes("technical + options skew confirmation") && assetClass === "CRYPTO") return "Crypto Technical / Options Skew Confirmation";
  if (n.includes("options skew") && n.includes("buy calls") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Options Skew Buy-Calls Context";
  if (n.includes("relative strength rotation") && assetClass === "FOREX") return "Forex Relative Strength Rotation";
  if (n.includes("basis arbitrage") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Basis Arbitrage";
  if (n.includes("basis arbitrage") && assetClass === "GOLD") return "Gold Basis Arbitrage";
  if (n.includes("volatility breakout system") && n.includes("turtle") && assetClass === "FOREX") return "Forex Turtle-Type Volatility Breakout";
  if (n.includes("fixed fraction position sizing") && assetClass === "CRYPTO") return "Crypto Fixed-Fraction Risk Sizing";
  if (n.includes("kelly criterion position sizing") && assetClass === "CRYPTO") return "Crypto Kelly Criterion Risk Sizing";
  if (n.includes("dynamic support") && n.includes("pivot points") && assetClass === "FOREX") return "Forex Dynamic Pivot Support / Resistance";
  if (n.includes("volatility adjusted position sizing") && assetClass === "CRYPTO") return "Crypto Volatility-Adjusted Risk Sizing";
  if (n.includes("fibonacci retracement strategy") && assetClass === "FOREX") return "Forex Fibonacci Retracement Structure";
  if (n.includes("calendar spread") && n.includes("long near") && n.includes("short far") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Calendar Spread Long-Near / Short-Far";
  if (n.includes("calendar spread") && n.includes("long near") && n.includes("short far") && assetClass === "GOLD") return "Gold Calendar Spread Long-Near / Short-Far";
  if (n.includes("pivot point breakout") && assetClass === "FOREX") return "Forex Pivot Point Breakout";
  if (n.includes("stop-loss placement under support") && assetClass === "CRYPTO") return "Crypto Support Invalidation Placement";
  if (n.includes("trailing stop strategy") && assetClass === "CRYPTO") return "Crypto Trailing Invalidation Strategy";
  if (n.includes("moving average envelope") && assetClass === "FOREX") return "Forex Moving-Average Envelope Strategy";
  if (n.includes("calendar spread") && n.includes("short near") && n.includes("long far") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Calendar Spread Short-Near / Long-Far";
  if (n.includes("calendar spread") && n.includes("short near") && n.includes("long far") && assetClass === "GOLD") return "Gold Calendar Spread Short-Near / Long-Far";
  if (n.includes("risk-reward ratio targeting") && assetClass === "CRYPTO") return "Crypto Reward-to-Risk Planning";
  if (n.includes("ichimoku kumo breakout") && assetClass === "FOREX") return "Forex Ichimoku Kumo Breakout";
  if (n.includes("leverage control") && assetClass === "CRYPTO") return "Crypto Leverage Control";
  if (n.includes("spot-futures divergence") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Spot-Futures Divergence";
  if (n.includes("spot-futures divergence") && assetClass === "GOLD") return "Gold Spot-Futures Divergence";
  if (n.includes("adaptive rsi") && assetClass === "FOREX") return "Forex Adaptive RSI Mean Reversion";
  if (n.includes("portfolio diversification across sectors") && assetClass === "CRYPTO") return "Crypto Sector Diversification";
  if (n.includes("heikin-ashi") && n.includes("rsi") && assetClass === "FOREX") return "Forex Heikin-Ashi / RSI Confluence";
  if (n.includes("event straddle") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Event Straddle";
  if (n.includes("event straddle") && assetClass === "GOLD") return "Gold Event Straddle";
  if (n.includes("stablecoin hedging") && assetClass === "CRYPTO") return "Crypto Stablecoin Hedge Allocation";
  if (n.includes("williams %r") && assetClass === "FOREX") return "Forex Williams %R Mean Reversion";
  if (n.includes("insurance via options") && assetClass === "CRYPTO") return "Crypto Options Insurance";
  if (n.includes("klinger volume oscillator") && assetClass === "FOREX") return "Forex Klinger Volume Oscillator";
  if (n.includes("elder triple screen") && assetClass === "FOREX") return "Forex Elder Triple Screen";
  if (n.includes("dollar-cost averaging") && assetClass === "CRYPTO") return "Crypto Dollar-Cost Averaging";
  if (n.includes("event strangle") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Event Strangle";
  if (n.includes("event strangle") && assetClass === "GOLD") return "Gold Event Strangle";
  if (n.includes("laddered entry and exit") && assetClass === "CRYPTO") return "Crypto Laddered Entry / Exit Planning";
  if (n.includes("gann angle") && assetClass === "FOREX") return "Forex Gann Angle Geometry";
  if (n.includes("liquidation threshold monitoring") && assetClass === "CRYPTO") return "Crypto Liquidation Threshold Monitoring";
  if (n.includes("pivot point camarilla") && assetClass === "FOREX") return "Forex Camarilla Pivot Reversal / Breakout";
  if (n.includes("volatility selling") && n.includes("short straddle") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Short Straddle Volatility Selling";
  if (n.includes("volatility selling") && n.includes("short straddle") && assetClass === "GOLD") return "Gold Short Straddle Volatility Selling";
  if (n.includes("hedged beta exposure") && assetClass === "CRYPTO") return "Crypto Hedged Beta Exposure";
  if (n.includes("quantile regression forecasting") && assetClass === "FOREX") return "Forex Quantile Regression Model Audit";
  if (n.includes("rebalancing into stablecoins") && assetClass === "CRYPTO") return "Crypto Stablecoin Rebalance After Parabolic Run";
  if (n.includes("fractal adaptive moving average") && assetClass === "FOREX") return "Forex FRAMA Adaptive Trend Filter";
  if (n.includes("gamma scalping") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Gamma Scalping";
  if (n.includes("gamma scalping") && assetClass === "GOLD") return "Gold Gamma Scalping";
  if (n.includes("dynamic position sizing based on drawdown") && assetClass === "CRYPTO") return "Crypto Drawdown-Based Position Sizing";
  if (n.includes("renko chart trend trading") && assetClass === "FOREX") return "Forex Renko Trend Structure";
  if (n.includes("stop-loss under volatility band") && assetClass === "CRYPTO") return "Crypto Volatility-Band Invalidation Placement";
  if (n.includes("point & figure breakout") && assetClass === "FOREX") return "Forex Point-and-Figure Breakout";
  if (n.includes("bull call spread") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Bull Call Spread";
  if (n.includes("bull call spread") && assetClass === "GOLD") return "Gold Bull Call Spread";
  if (n.includes("capital allocation caps") && assetClass === "CRYPTO") return "Crypto Capital Allocation Caps";
  if (n.includes("tick chart scalping") && assetClass === "FOREX") return "Forex Tick-Chart Scalping";
  if (n.includes("stress testing portfolio") && assetClass === "CRYPTO") return "Crypto Portfolio Stress Testing";
  if (n.includes("currency strength meter") && assetClass === "FOREX") return "Forex Currency Strength Meter";
  if (n.includes("bear put spread") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Bear Put Spread";
  if (n.includes("bear put spread") && assetClass === "GOLD") return "Gold Bear Put Spread";
  if (n.includes("economic surprise index") && assetClass === "FOREX") return "Forex Economic Surprise Index";
  if (n.includes("risk buffer via insurance protocols") && assetClass === "CRYPTO") return "Crypto Insurance-Protocol Risk Buffer";
  if (n.includes("political risk premium") && assetClass === "FOREX") return "Forex Political Risk Premium";
  if (n.includes("portfolio volatility cap") && assetClass === "CRYPTO") return "Crypto Portfolio Volatility Cap";
  if (n.includes("ratio call spread") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Ratio Call Spread";
  if (n.includes("ratio call spread") && assetClass === "GOLD") return "Gold Ratio Call Spread";
  if (n.includes("geopolitical hedging") && assetClass === "FOREX") return "Forex Safe-Haven Geopolitical Hedge";
  if (n.includes("liquidity risk assessment") && assetClass === "CRYPTO") return "Crypto Liquidity Risk Assessment";
  if (n.includes("iron condor") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Iron Condor";
  if (n.includes("iron condor") && assetClass === "GOLD") return "Gold Iron Condor";
  if (n.includes("high-yield bond spread") && assetClass === "FOREX") return "Forex High-Yield Bond Spread Risk Proxy";
  if (n.includes("counterparty risk diversification") && assetClass === "CRYPTO") return "Crypto Counterparty Risk Diversification";
  if (n.includes("purchasing managers") && n.includes("pmi") && assetClass === "FOREX") return "Forex PMI Trend Macro Read";
  if (n.includes("stablecoin yield diversification") && assetClass === "CRYPTO") return "Crypto Stablecoin Yield Diversification";
  if (n.includes("emergency stop on exchange outage") && assetClass === "CRYPTO") return "Crypto Exchange-Outage Circuit Breaker";
  if (n.includes("butterfly spread") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Butterfly Spread";
  if (n.includes("butterfly spread") && assetClass === "GOLD") return "Gold Butterfly Spread";
  if (n.includes("speculative position unwind") && assetClass === "FOREX") return "Forex Speculative Position Unwind";
  if (n.includes("crowded trade fade") && assetClass === "FOREX") return "Forex Crowded Trade Fade";
  if (n.includes("max drawdown alert") && assetClass === "CRYPTO") return "Crypto Max Drawdown Alert System";
  if (n.includes("staged exit") && assetClass === "CRYPTO") return "Crypto Staged Position Reduction";
  if (n.includes("quant sentiment index") && assetClass === "FOREX") return "Forex Quant Sentiment Overlay";
  if (n.includes("protective put") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Protective Put";
  if (n.includes("protective put") && assetClass === "GOLD") return "Gold Protective Put";
  if (n.includes("hedging stablecoin depeg") && assetClass === "CRYPTO") return "Crypto Stablecoin Depeg Hedge";
  if (n.includes("multi-asset correlation") && assetClass === "FOREX") return "Forex Multi-Asset Correlation Trade";
  if (n.includes("portfolio insurance via stable yield") && assetClass === "CRYPTO") return "Crypto Stable-Yield Portfolio Insurance";
  if (n.includes("news volume spike scalping") && assetClass === "FOREX") return "Forex News Volume Spike Scalping";
  if (n.includes("covered call") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Covered Call";
  if (n.includes("covered call") && assetClass === "GOLD") return "Gold Covered Call";
  if (n.includes("nfp pre-positioning") && assetClass === "FOREX") return "Forex NFP Pre-Positioning";
  if (n.includes("tax-loss harvesting") && assetClass === "CRYPTO") return "Crypto Tax-Loss Harvesting";
  if (n.includes("collar strategy") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Collar Strategy";
  if (n.includes("collar strategy") && assetClass === "GOLD") return "Gold Collar Strategy";
  if (n.includes("rebalancing frequency optimization") && assetClass === "CRYPTO") return "Crypto Rebalancing Frequency Optimization";
  if (n.includes("structural break detection") && assetClass === "FOREX") return "Forex Structural Break Detection";
  if (n.includes("overnight/weekend gap") && assetClass === "FOREX") return "Forex Overnight / Weekend Gap Strategy";
  if (n.includes("options collar hedging") && assetClass === "CRYPTO") return "Crypto Options Collar Hedge";
  if (n.includes("diversified custody") && assetClass === "CRYPTO") return "Crypto Diversified Custody";
  if (n.includes("order flow footprint") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Order Flow Footprint";
  if (n.includes("order flow footprint") && assetClass === "GOLD") return "Gold Order Flow Footprint";
  if (n.includes("opening range fade") && assetClass === "FOREX") return "Forex Opening Range Fade";
  if (n.includes("overnight carry basket") && assetClass === "FOREX") return "Forex Overnight Carry Basket";
  if (n.includes("leverage ladder") && assetClass === "CRYPTO") return "Crypto Leverage Ladder";
  if (n.includes("time decay arbitrage") && assetClass === "FOREX") return "Forex Options Time-Decay Arbitrage";
  if (n.includes("position hedging via inverse") && assetClass === "CRYPTO") return "Crypto Inverse ETP Hedge";
  if (n.includes("liquidity sweep fade") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Liquidity Sweep Fade";
  if (n.includes("liquidity sweep fade") && assetClass === "GOLD") return "Gold Liquidity Sweep Fade";
  if (n.includes("fx forward spread trading") && assetClass === "FOREX") return "Forex Forward Spread Trading";
  if (n.includes("emergency wallet seed backup") && assetClass === "CRYPTO") return "Crypto Wallet Seed Backup";
  if (n.includes("momentum fuel check") && assetClass === "FOREX") return "Forex Momentum Fuel Check";
  if (n.includes("realized vs implied volatility spread") && assetClass === "FOREX") return "Forex Realized / Implied Volatility Spread";
  if (n.includes("dynamic hedging via perps") && assetClass === "CRYPTO") return "Crypto Perpetual Dynamic Hedge";
  if (n.includes("stop cluster breakout") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Stop Cluster Breakout";
  if (n.includes("stop cluster breakout") && assetClass === "GOLD") return "Gold Stop Cluster Breakout";
  if (n.includes("self-custody vs exchange risk") && assetClass === "CRYPTO") return "Crypto Self-Custody / Exchange Risk";
  if (n.includes("insurance on cefi platforms") && assetClass === "CRYPTO") return "Crypto CeFi Platform Insurance";
  if (n.includes("relative value") && n.includes("gold vs silver") && n.includes("swing") && assetClass === "GOLD") return "Gold-Silver Swing Relative Value";
  if (n.includes("relative value") && n.includes("gold vs silver") && assetClass === "GOLD") return "Gold-Silver Relative Value";
  if (n.includes("multi-sig") && assetClass === "CRYPTO") return "Crypto Multi-Sig Fund Transfer Control";
  if (n.includes("fixed withdrawal schedule") && assetClass === "CRYPTO") return "Crypto Fixed Withdrawal Schedule";
  if (n.includes("relative value") && n.includes("gold vs usd") && n.includes("swing") && assetClass === "GOLD") return "Gold-USD Swing Relative Value";
  if (n.includes("relative value") && n.includes("gold vs usd") && assetClass === "GOLD") return "Gold-USD Relative Value";
  if (n.includes("structured exit laddering") && assetClass === "CRYPTO") return "Crypto Structured Exposure Reduction Ladder";
  if (n.includes("statistical arbitrage") && n.includes("gold pair") && n.includes("swing") && assetClass === "GOLD") return "Gold Pair Swing Statistical Arbitrage";
  if (n.includes("statistical arbitrage") && n.includes("gold pair") && assetClass === "GOLD") return "Gold Pair Statistical Arbitrage";
  if (n.includes("execution algorithm") && n.includes("vwap") && n.includes("twap") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing VWAP / TWAP Execution Algorithm";
  if (n.includes("execution algorithm") && n.includes("vwap") && n.includes("twap") && assetClass === "GOLD") return "Gold VWAP / TWAP Execution Algorithm";
  if (n.includes("market making") && n.includes("inventory model") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Market-Making Inventory Model";
  if (n.includes("market making") && n.includes("inventory model") && assetClass === "GOLD") return "Gold Market-Making Inventory Model";
  if (n.includes("gold vs dxy divergence") && assetClass === "GOLD") return "Gold-DXY Divergence";
  if (n.includes("gold vs real yields spread") && assetClass === "GOLD") return "Gold-Real Yields Spread";
  if (n.includes("gold vs equities risk-off divergence") && assetClass === "GOLD") return "Gold-Equities Risk-Off Divergence";
  if (n.includes("gold vs oil relationship") && assetClass === "GOLD") return "Gold-Oil Intermarket Relationship";
  if (n.includes("gold vs copper correlation") && assetClass === "GOLD") return "Gold-Copper Correlation";
  if (n.includes("gold vs inflation expectations") && assetClass === "GOLD") return "Gold-Inflation Expectations";
  if (n.includes("gold vs silver ratio high") && assetClass === "GOLD") return "Gold-Silver Ratio High Rotation";
  if (n.includes("gold vs silver ratio low") && assetClass === "GOLD") return "Gold-Silver Ratio Low Rotation";
  if (n.includes("rule-based trend system") && assetClass === "GOLD") return "Gold Rule-Based Trend System";
  if (n.includes("rule-based mean reversion") && assetClass === "GOLD") return "Gold Rule-Based Mean Reversion";
  if (n.includes("volatility-targeted system") && assetClass === "GOLD") return "Gold Volatility-Targeted Risk System";
  if (n.includes("regime-switching model") && assetClass === "GOLD") return "Gold Regime-Switching Model";
  if (n.includes("machine learning forecast model") && assetClass === "GOLD") return "Gold Machine Learning Forecast Audit";
  if (n.includes("portfolio rebalancing algorithm") && assetClass === "GOLD") return "Gold Portfolio Rebalancing Algorithm";
  if (n.includes("multi-timeframe confluence") && assetClass === "GOLD") return "Gold Multi-Timeframe Confluence";
  if (n.includes("macro + technical confluence") && assetClass === "GOLD") return "Gold Macro / Technical Confluence";
  if (n.includes("price action + volatility") && assetClass === "GOLD") return "Gold Price Action / Volatility Confluence";
  if (n.includes("yield + usd + chart structure") && assetClass === "GOLD") return "Gold Yield / USD / Structure Confluence";
  if ((n.includes("ai-assisted signal") || n.includes("ai-assisted trade review")) && assetClass === "GOLD") return "Gold AI-Assisted Trade Review";
  if (n.includes("atr-based position sizing") && assetClass === "GOLD") return "Gold ATR-Based Position Sizing";
  if (n.includes("leverage control") && assetClass === "GOLD") return "Gold Leverage Control";
  if (n.includes("news event risk reduction") && assetClass === "GOLD") return "Gold News Event Risk Reduction";
  if (n.includes("drawdown controls") && assetClass === "GOLD") return "Gold Drawdown Controls";
  if (n.includes("portfolio hedging with gold") && assetClass === "GOLD") return "Gold Portfolio Hedge";
  if (n.includes("correlation-aware exposure") && assetClass === "GOLD") return "Gold Correlation-Aware Exposure";
  if ((n.includes("dummy strategy") || n.includes("previous-day high breakout")) && assetClass === "GOLD") return "Gold Previous-Day High Breakout";
  if (n.includes("bollinger squeeze breakout") && assetClass === "FOREX") return "Forex Bollinger Squeeze Breakout";
  if (n.includes("price action candle timing") && assetClass === "FOREX") return "Forex Price Action Candle Timing";
  if (n.includes("structural breakout") && n.includes("retest") && assetClass === "FOREX") return "Forex Structural Breakout Retest";

  if (n.includes("options put/call ratio high") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Options Put/Call High Bullish Context";
  if (n.includes("options put/call ratio high") && assetClass === "GOLD") return "Gold Options Put/Call High Bullish Context";
  if (n.includes("options put/call ratio low") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Options Put/Call Low Bearish Context";
  if (n.includes("options put/call ratio low") && assetClass === "GOLD") return "Gold Options Put/Call Low Bearish Context";
  if (n.includes("volatility targeting strategy") && assetClass === "CRYPTO") return "Crypto Volatility Targeting Risk Sizing";
  if (n.includes("on-chain + technical confluence") && assetClass === "CRYPTO") return "Crypto On-Chain / Technical Confluence";
  if (n.includes("speed of market momentum scalping") && assetClass === "FOREX") return "Forex Speed-of-Market Momentum Scalping";
  if (n.includes("funding + social sentiment filter") && assetClass === "CRYPTO") return "Crypto Funding / Social Sentiment Filter";
  if (n.includes("news fade strategy") && assetClass === "FOREX") return "Forex News Fade Execution Audit";
  if (n.includes("multi-factor quant scoring") && assetClass === "CRYPTO") return "Crypto Multi-Factor Quant Scoring";
  if (n.includes("straddle the news") && assetClass === "FOREX") return "Forex Options News Straddle Audit";
  if (n.includes("technical + fundamental confirmation") && assetClass === "CRYPTO") return "Crypto Technical / Fundamental Confluence";
  if (n.includes("options skew") && n.includes("buy puts") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Options Skew Buy-Puts Context";
  if (n.includes("options skew") && n.includes("buy puts") && assetClass === "GOLD") return "Gold Options Skew Buy-Puts Context";
  if (n.includes("gamma scalping") && assetClass === "FOREX") return "Forex Options Gamma Scalping";
  if (n.includes("funding + basis + oi composite") && assetClass === "CRYPTO") return "Crypto Funding / Basis / OI Composite";
  if (n.includes("calendar spread in fx options") && assetClass === "FOREX") return "Forex Options Calendar Spread";
  if (n.includes("options skew") && n.includes("buy calls") && assetClass === "GOLD") return "Gold Options Skew Buy-Calls Context";
  if (n.includes("on-chain + sentiment contrarian") && assetClass === "CRYPTO") return "Crypto On-Chain / Sentiment Contrarian Audit";
  if (n.includes("interest rate swaption hedge") && assetClass === "FOREX") return "Forex Interest-Rate Swaption Hedge";

  if (n.includes("arbitrage bot") && assetClass === "CRYPTO") return "Crypto CEX/DEX Arbitrage Bot Audit";
  if (n.includes("machine-learning-enhanced execution") && assetClass === "CRYPTO") return "Crypto Machine-Learning Execution Audit";
  if (n.includes("etf outflow indicator") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing ETF Outflow Short Context";
  if (n.includes("etf outflow indicator") && assetClass === "GOLD") return "Gold ETF Outflow Short Context";
  if (n.includes("cross-hedging with correlated asset") && assetClass === "FOREX") return "Forex Cross-Hedge / Correlated Asset";
  if (n.includes("rebalancing algorithm") && assetClass === "CRYPTO") return "Crypto Periodic Rebalancing Algorithm";
  if (n.includes("portfolio diversification across currency pairs") && assetClass === "FOREX") return "Forex Currency-Pair Diversification";
  if (n.includes("dynamic leverage adjustment") && assetClass === "FOREX") return "Forex Dynamic Leverage Gate";
  if (n.includes("momentum + mean reversion hybrid bot") && assetClass === "CRYPTO") return "Crypto Hybrid Bot Model Audit";
  if (n.includes("retail sentiment contrarian short") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Retail Sentiment Contrarian Short";
  if (n.includes("retail sentiment contrarian short") && assetClass === "GOLD") return "Gold Retail Sentiment Contrarian Short";
  if (n.includes("ai-assisted discretionary trading") && assetClass === "CRYPTO") return "Crypto AI-Assisted Discretionary Audit";
  if (n.includes("trailing stop strategy") && assetClass === "FOREX") return "Forex Trailing Invalidation Strategy";
  if (n.includes("risk parity allocation algorithm") && assetClass === "CRYPTO") return "Crypto Risk-Parity Allocation Algorithm";
  if (n.includes("retail sentiment contrarian long") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Retail Sentiment Contrarian Long";
  if (n.includes("retail sentiment contrarian long") && assetClass === "GOLD") return "Gold Retail Sentiment Contrarian Long";
  if (n.includes("equity curve stop") && assetClass === "FOREX") return "Forex Equity-Curve Portfolio Stop";
  if (n.includes("risk parity currency portfolio") && assetClass === "FOREX") return "Forex Risk-Parity Currency Portfolio";
  if (n.includes("reinforcement learning rebalancer") && assetClass === "CRYPTO") return "Crypto Reinforcement-Learning Rebalancer Audit";
  if (n.includes("correlation matrix position adjustment") && assetClass === "FOREX") return "Forex Correlation-Matrix Position Adjustment";

  if (n.includes("flash loan arbitrage") && assetClass === "CRYPTO") return "Crypto Flash-Loan Arbitrage Audit";
  if (n.includes("atr-based stop placement") && assetClass === "FOREX") return "Forex ATR-Based Invalidation Placement";
  if (n.includes("cot speculator extreme short") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing COT Speculator Extreme Short";
  if (n.includes("volatility scaling portfolio allocation") && assetClass === "FOREX") return "Forex Volatility-Scaled Portfolio Allocation";
  if (n.includes("cot commercial hedger accumulation") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing COT Commercial Hedger Accumulation";
  if (n.includes("cot commercial hedger accumulation") && assetClass === "GOLD") return "Gold COT Commercial Hedger Accumulation";
  if (n.includes("governance token short") && assetClass === "CRYPTO") return "Crypto Governance Dilution Audit";
  if (n.includes("drawdown control") && assetClass === "FOREX") return "Forex Drawdown Circuit Breaker";
  if (n.includes("dao treasury diversification") && assetClass === "CRYPTO") return "Crypto DAO Treasury Diversification Audit";
  if (n.includes("hedging with correlated currency pairs") && assetClass === "FOREX") return "Forex Correlated-Pair Hedge";
  if (n.includes("rule-based moving average bot") && assetClass === "CRYPTO") return "Crypto Rule-Based Moving-Average Bot Audit";
  if (n.includes("cot divergence") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing COT Divergence Audit";
  if (n.includes("cot divergence") && assetClass === "GOLD") return "Gold COT Divergence Audit";
  if (n.includes("direct hedging") && assetClass === "FOREX") return "Forex Direct Hedge / Offsetting Position";
  if (n.includes("indicator stack bot") && assetClass === "CRYPTO") return "Crypto Indicator-Stack Bot Audit";
  if (n.includes("options hedging") && assetClass === "FOREX") return "Forex Options Hedge";
  if (n.includes("scalping bot") && assetClass === "CRYPTO") return "Crypto Scalping Bot Execution Audit";
  if (n.includes("etf inflow momentum") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing ETF Inflow Momentum";
  if (n.includes("etf inflow momentum") && assetClass === "GOLD") return "Gold ETF Inflow Momentum";
  if (n.includes("forward contract hedging") && assetClass === "FOREX") return "Forex Forward Contract Hedge";

  if (n.includes("stablecoin arbitrage across chains") && assetClass === "CRYPTO") return "Crypto Cross-Chain Stablecoin Arbitrage";
  if (n.includes("de-dollarization theme") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing De-Dollarization Theme";
  if (n.includes("de-dollarization theme") && assetClass === "GOLD") return "Gold De-Dollarization Theme";
  if (n.includes("impermanent loss protection") && assetClass === "CRYPTO") return "Crypto Impermanent-Loss Protection";
  if (n.includes("macro + machine learning hybrid") && assetClass === "FOREX") return "Forex Macro / Machine-Learning Model Audit";
  if (n.includes("supply disruption") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Supply Disruption";
  if (n.includes("supply disruption") && assetClass === "GOLD") return "Gold Supply Disruption";
  if (n.includes("seasonal + technical confirmation") && assetClass === "FOREX") return "Forex Seasonal / Technical Confluence";
  if (n.includes("staking yield strategy") && assetClass === "CRYPTO") return "Crypto Staking Yield Audit";
  if (n.includes("restaking & liquid staking") && assetClass === "CRYPTO") return "Crypto Restaking / Liquid-Staking Token Risk";
  if (n.includes("volatility breakout + fundamental filter") && assetClass === "FOREX") return "Forex Volatility Breakout / Fundamental Filter";
  if (n.includes("cot speculator extreme long") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing COT Speculator Extreme Long";
  if (n.includes("cot speculator extreme long") && assetClass === "GOLD") return "Gold COT Speculator Extreme Long";
  if (n.includes("cot speculator extreme short") && assetClass === "GOLD") return "Gold COT Speculator Extreme Short";
  if (n.includes("fixed fractional position sizing") && assetClass === "FOREX") return "Forex Fixed Fractional Position Sizing";
  if (n.includes("liquidation farming on defi lending") && assetClass === "CRYPTO") return "Crypto DeFi Lending Liquidation Audit";
  if (n.includes("fixed ratio position sizing") && assetClass === "FOREX") return "Forex Fixed Ratio Position Sizing";
  if (n.includes("synthetic asset arbitrage") && assetClass === "CRYPTO") return "Crypto Synthetic Asset Arbitrage";
  if (n.includes("kelly criterion sizing") && assetClass === "FOREX") return "Forex Kelly Criterion Sizing";
  if (n.includes("insurance pool participation") && assetClass === "CRYPTO") return "Crypto Insurance Pool Participation";

  if (n.includes("liquidity provision to stable pair") && assetClass === "CRYPTO") return "Crypto Stable-Pair Liquidity Provision";
  if (n.includes("geopolitical risk") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Geopolitical Risk Response";
  if (n.includes("geopolitical risk") && assetClass === "GOLD") return "Gold Geopolitical Risk Response";
  if (n.includes("liquidity provision to volatile pair") && assetClass === "CRYPTO") return "Crypto Volatile-Pair LP / IL Hedge";
  if (n.includes("indicator + price action confluence") && assetClass === "FOREX") return "Forex Indicator / Price Action Confluence";
  if (n.includes("triangular confluence") && assetClass === "FOREX") return "Forex Three-Way Fundamental / Technical / Sentiment Confluence";
  if (n.includes("yield farming rotation") && assetClass === "CRYPTO") return "Crypto Yield Farming Rotation";
  if (n.includes("hybrid carry + price action") && assetClass === "FOREX") return "Forex Hybrid Carry / Price Action";
  if (n.includes("dex arbitrage") && assetClass === "CRYPTO") return "Crypto DEX Arbitrage Audit";
  if (n.includes("central bank net buying") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Central-Bank Net Buying";
  if (n.includes("central bank net buying") && assetClass === "GOLD") return "Gold Central-Bank Net Buying";
  if (n.includes("mean reversion + options hedging") && assetClass === "FOREX") return "Forex Mean Reversion / Options Hedge";
  if (n.includes("perpetual dex funding arbitrage") && assetClass === "CRYPTO") return "Crypto Perpetual DEX Funding Arbitrage";
  if (n.includes("central bank net selling") && n.includes("swing") && assetClass === "GOLD") return "Gold Swing Central-Bank Net Selling";
  if (n.includes("central bank net selling") && assetClass === "GOLD") return "Gold Central-Bank Net Selling";
  if (n.includes("news + technical event trading") && assetClass === "FOREX") return "Forex News / Technical Event Trading";
  if (n.includes("lending & borrowing looping") && assetClass === "CRYPTO") return "Crypto Lending / Borrowing Looping Risk";
  if (n.includes("sentiment + risk-on/off regime") && assetClass === "FOREX") return "Forex Sentiment / Risk Regime";
  if (n.includes("rate arbitrage between lending platforms") && assetClass === "CRYPTO") return "Crypto Lending-Platform Rate Arbitrage";
  if (n.includes("order flow + price action confluence") && assetClass === "FOREX") return "Forex Order-Flow / Price Action Confluence";

  if (n.includes("fx basket mean-reversion quant")) return "Forex Basket Mean-Reversion Quant";
  if (n.includes("usd weakness") && n.includes("swing")) return "Gold Swing USD-Weakness Macro Reaction";
  if (n.includes("usd strength") && n.includes("swing")) return "Gold Swing USD-Strength Macro Reaction";
  if (n.includes("usd strength")) return "Gold USD-Strength Macro Reaction";
  if (n.includes("hft momentum ignition")) return "Crypto HFT Momentum Ignition Audit";
  if (n.includes("order flow imbalance analysis")) return "Crypto Order-Flow Imbalance Audit";
  if (n.includes("adaptive moving average") && n.includes("kaufman")) return "Forex Kaufman Adaptive Moving Average";
  if (n.includes("imbalance + price ladder scalping")) return "Crypto Price-Ladder Imbalance Audit";
  if (n.includes("volatility scaling of position sizes")) return "Forex Volatility-Scaled Position Sizing";
  if (n.includes("trend + fundamental confirmation")) return "Forex Trend / Fundamental Confluence";
  if (n.includes("yield curve inversion") && n.includes("swing")) return "Gold Swing Yield-Curve Inversion";
  if (n.includes("yield curve inversion")) return "Gold Yield-Curve Inversion";
  if (n.includes("vwap reversion execution")) return "Crypto VWAP Reversion Execution Audit";
  if (n.includes("liquidity provision incentives")) return "Crypto Liquidity Provision Incentives";
  if (n.includes("technical + sentiment confluence")) return "Forex Technical / Sentiment Confluence";
  if (n.includes("cross-asset statistical factor model")) return "Crypto Cross-Asset Statistical Factor Model";
  if (n.includes("high volatility risk-off") && n.includes("swing")) return "Gold Swing High-Volatility Risk-Off";
  if (n.includes("high volatility risk-off")) return "Gold High-Volatility Risk-Off";
  if (n.includes("fundamental + cot confluence")) return "Forex Fundamental / COT Confluence";
  if (n.includes("multi-timeframe trend alignment")) return "Forex Multi-Timeframe Trend Alignment";

  if (n.includes("neural network price prediction")) return "Forex Neural Network Model Audit";
  if (n.includes("random forest classification")) return "Forex Random Forest Direction Classifier";
  if (n.includes("support vector machine")) return "Forex SVM Trend Classification";
  if (n.includes("reinforcement learning trading agent")) return "Forex Reinforcement Learning Policy Audit";
  if (n.includes("kalman filter trend estimation")) return "Forex Kalman Trend Estimation";
  if (n.includes("hidden markov model")) return "Forex HMM Regime Switching";
  if (n.includes("fed dovish pivot") && n.includes("swing")) return "Gold Swing Fed Dovish Pivot";
  if (n.includes("fed dovish pivot")) return "Gold Fed Dovish Pivot";
  if (n.includes("fed hawkish pivot") && n.includes("swing")) return "Gold Swing Fed Hawkish Pivot";
  if (n.includes("fed hawkish pivot")) return "Gold Fed Hawkish Pivot";
  if (n.includes("inflation hedge") && n.includes("swing")) return "Gold Swing Inflation Hedge";
  if (n.includes("inflation hedge")) return "Gold Inflation Hedge";
  if (n.includes("usd weakness")) return "Gold USD-Weakness Macro Reaction";
  if (n.includes("spatial arbitrage")) return "Crypto Spatial Arbitrage Audit";
  if (n.includes("triangular arbitrage") && assetClass === "CRYPTO") return "Crypto Triangular Arbitrage Audit";
  if (n.includes("cross-exchange market making")) return "Crypto Cross-Exchange Market Making";
  if (n.includes("latency market making")) return "Crypto Latency Market Making";
  if (n.includes("statistical arbitrage basket")) return "Crypto Statistical Arbitrage Basket";
  if (n.includes("high-frequency market making")) return "Forex High-Frequency Market Making Audit";
  if (n.includes("cointegration basket trading")) return "Crypto Cointegration Basket";

  if (n.includes("trend + volume confirmation") && n.includes("intraday")) return "Gold Intraday Trend / Volume Confirmation";
  if (n.includes("trend + volume confirmation") && n.includes("swing")) return "Gold Swing Trend / Volume Confirmation";
  if (n.includes("trend + volume confirmation")) return "Gold Trend / Volume Confirmation";
  if (n.includes("moving average crossover bot")) return "Forex Moving-Average Automation Audit";
  if (n.includes("protective put hedging")) return "Crypto Protective Put Hedge";
  if (n.includes("turtle trading system")) return "Forex Turtle Channel Breakout";
  if (n.includes("covered call income")) return "Crypto Covered Call Risk";
  if (n.includes("real yield decline") && n.includes("swing")) return "Gold Swing Real-Yield Decline";
  if (n.includes("real yield decline")) return "Gold Real-Yield Decline";
  if (n.includes("real yield rise") && n.includes("swing")) return "Gold Swing Real-Yield Rise";
  if (n.includes("real yield rise")) return "Gold Real-Yield Rise";
  if (n.includes("channel breakout system")) return "Forex Channel Commodity Breakout";
  if (n.includes("butterfly spread")) return "Crypto Options Butterfly Spread";
  if (n.includes("mean reversion algorithm") && n.includes("bollinger")) return "Forex Bollinger Algorithmic Mean Reversion";
  if (n.includes("iron condor")) return "Crypto Options Iron Condor";
  if (n.includes("gamma tilt")) return "Crypto Options Gamma Tilt";
  if (n.includes("statistical arbitrage") && n.includes("pairs algorithm")) return "Forex Statistical Arbitrage Pairs";
  if (n.includes("genetic algorithm parameter")) return "Forex Model Optimization Audit";
  if (n.includes("liquidation cascade trigger")) return "Crypto Liquidation Cascade Trigger";
  if (n.includes("cross-exchange arbitrage")) return "Crypto Cross-Exchange Arbitrage Audit";

  if (n.includes("price channel break") && n.includes("keltner") && n.includes("intraday")) return "Gold Intraday Keltner Channel Break";
  if (n.includes("price channel break") && n.includes("keltner") && n.includes("swing")) return "Gold Swing Keltner Channel Break";
  if (n.includes("price channel break") && n.includes("keltner")) return "Gold Keltner Channel Break";
  if (n.includes("calendar spread")) return "Crypto Calendar Spread Roll Audit";
  if (n.includes("relative value currency basket")) return "Forex Relative Value Basket";
  if (n.includes("perpetual funding rate arbitrage")) return "Crypto Perpetual Funding Arbitrage";
  if (n.includes("yield curve arbitrage")) return "Forex Forward Yield-Curve Arbitrage";
  if (n.includes("order anticipation")) return "Forex Order Anticipation Risk Audit";
  if (n.includes("gamma scalping")) return "Crypto Options Gamma Scalping";
  if (n.includes("liquidity provision with vwap/twap")) return "Forex Algorithmic Liquidity Provision";
  if (n.includes("volatility skew trade")) return "Crypto Options Volatility Skew";
  if (n.includes("supertrend indicator strategy") && n.includes("intraday")) return "Gold Intraday SuperTrend Volatility";
  if (n.includes("supertrend indicator strategy") && n.includes("swing")) return "Gold Swing SuperTrend Volatility";
  if (n.includes("supertrend indicator strategy")) return "Gold SuperTrend Volatility";
  if (n.includes("percent of volume")) return "Forex POV Execution Algorithm";
  if (n.includes("long straddle")) return "Crypto Long Straddle Volatility";
  if (n.includes("iceberg detection")) return "Forex Iceberg Detection";
  if (n.includes("short straddle")) return "Crypto Short Straddle Risk";
  if (n.includes("liquidity run reversal")) return "Forex Liquidity Run Reversal";
  if (n.includes("put-call parity")) return "Crypto Put-Call Parity Audit";

  if (n.includes("miner hashrate")) return "Crypto Hashrate Network Audit";
  if (n.includes("institutional supply and demand")) return "Forex Institutional Supply / Demand";
  if (n.includes("fibonacci retracement confluence") && n.includes("intraday")) return "Gold Fibonacci Intraday Confluence";
  if (n.includes("fibonacci retracement confluence") && n.includes("swing")) return "Gold Fibonacci Swing Confluence";
  if (n.includes("market making")) return "Forex Market-Making Spread Audit";
  if (n.includes("stake/unstake")) return "Crypto Staking Flow Audit";
  if (n.includes("peg maintenance")) return "Forex Peg Maintenance Scenario";
  if (n === "market supply/demand") return "Forex Market Supply / Demand";
  if (n.includes("moving average bounce")) return "Forex Moving-Average Reaction";
  if (n.includes("horizontal s/r breakout")) return "Forex Horizontal S/R Breakout";
  if (n.includes("round number bounce") && n.includes("intraday")) return "Gold Intraday Round-Number Reaction";
  if (n.includes("round number bounce") && n.includes("swing")) return "Gold Swing Round-Number Reaction";
  if (n.includes("round number bounce")) return "Gold Round-Number Reaction";
  if (n.includes("fixed fractional sizing")) return "Forex Fixed Fractional Sizing";
  if (n.includes("gas price and activity")) return "Crypto Gas / Activity Audit";
  if (n.includes("spot-futures basis")) return "Crypto Spot / Futures Basis Audit";
  if (n.includes("triangular arbitrage")) return "Forex Triangular Arbitrage Audit";
  if (n.includes("atr-adjusted volatility sizing")) return "Forex ATR-Adjusted Sizing";
  if (n.includes("covered interest arbitrage")) return "Forex Covered Interest Arbitrage";
  if (n.includes("reverse basis trade")) return "Crypto Reverse Basis Audit";

  if (n.includes("social media sentiment")) return "Forex Social Sentiment Audit";
  if (n.includes("whale exchange inflow")) return "Crypto Exchange-Inflow Distribution";
  if (n.includes("exchange net flow divergence")) return "Crypto Exchange-Netflow Divergence";
  if (n.includes("sentiment divergence")) return "Forex Price / Sentiment Divergence";
  if (n.includes("dormant coin movement")) return "Crypto Dormant-Coin Movement Audit";
  if (n.includes("sentiment confirmed breakout")) return "Forex Sentiment-Confirmed Breakout";
  if (n.includes("sentiment & macro combined")) return "Forex Sentiment / Macro Confluence";
  if (n.includes("nr7/nr4")) return "Gold Narrow-Range Breakout";
  if (n.includes("utxo age distribution")) return "Crypto UTXO Age Distribution";
  if (n.includes("depth of market")) return "Forex DOM Order-Flow Audit";
  if (n.includes("wallet clustering")) return "Crypto Wallet-Cluster Audit";
  if (n.includes("volume profile trading")) return "Forex Volume Profile";
  if (n.includes("stablecoin supply ratio")) return "Crypto Stablecoin Supply Ratio";
  if (n.includes("fibonacci retracement confluence")) return "Gold Fibonacci Structure Confluence";
  if (n.includes("miner outflow")) return "Crypto Miner-Outflow Audit";
  if (n.includes("footprint chart strategy")) return "Forex Footprint Delta Audit";

  if (n.includes("commitment of traders")) return "COT Positioning Extremes";
  if (n.includes("commercial hedger")) return "COT Hedger / Speculator Divergence";
  if (n.includes("retail sentiment contrarian")) return "Forex Retail Sentiment Contrarian";
  if (n.includes("retail sentiment trend")) return "Forex Retail Sentiment Trend Context";
  if (n.includes("options sentiment")) return "FX Options Risk Reversal";
  if (n.includes("forex fear & greed")) return "Forex Risk Sentiment Composite";
  if (n.includes("news sentiment analysis")) return "Forex News Sentiment Reaction";
  if (n.includes("parabolic sar reversal")) return "Parabolic SAR Reversal";
  if (n.includes("funding & oi combined")) return "Crypto Funding / OI Sentiment";
  if (n.includes("funding + basis convergence")) return "Crypto Funding / Basis Convergence";
  if (n.includes("crowded short squeeze")) return "Crypto Short-Squeeze Mechanics";
  if (n.includes("liquidation level front-run")) return "Crypto Liquidation-Level Risk";
  if (n.includes("reddit sentiment")) return "Crypto Reddit Sentiment Audit";
  if (n.includes("whale exchange outflow")) return "Crypto Exchange-Outflow Audit";
  if (n.includes("bollinger squeeze breakout")) return "Gold Bollinger Squeeze Breakout";
  if (n.includes("atr expansion breakout")) return "Gold ATR Expansion Breakout";

  if (n.includes("fx fair value")) return "Purchasing Power Parity Valuation";
  if (n.includes("open interest expansion")) return "Crypto Open Interest Expansion";
  if (n.includes("political event trading")) return "Political Event Scenario";
  if (n.includes("alligator and fractals")) return "Alligator / Fractal Trend Structure";
  if (n.includes("open interest divergence")) return "Crypto Open Interest Divergence";
  if (n.includes("seasonal patterns")) return "Forex Calendar Seasonality";
  if (n.includes("liquidation cluster")) return "Crypto Liquidation Cluster";
  if (n.includes("terms of trade spread convergence")) return "Terms of Trade Convergence";
  if (n.includes("liquidation cascade fade")) return "Crypto Liquidation Cascade";
  if (n.includes("safe-haven demand")) return "Safe-Haven Intermarket Flow";
  if (n.includes("adx + dmi")) return "ADX / DMI Trend Strength";
  if (n.includes("social sentiment index")) return "Crypto Social Sentiment Audit";
  if (n.includes("risk-on carry basket")) return "Risk-On Carry Basket";
  if (n.includes("twitter influencer")) return "Crypto Influencer Activity Audit";
  if (n.includes("fear & greed")) return "Crypto Fear / Greed Contrarian";
  if (n.includes("news trading on economic releases")) return "Macro Event Reaction";
  if (n.includes("flag and pennant")) return "Chart Pattern Continuation";
  if (n.includes("triangle breakout")) return "Chart Pattern Breakout";
  if (n.includes("on-chain treasury")) return "Crypto Treasury Flow Audit";
  if (n.includes("central bank divergence")) return "Central Bank Policy Divergence";
  if (n.includes("narrative sentiment index")) return "Crypto Narrative Sentiment Audit";
  if (n.includes("commodity currency correlation")) return "Commodity / FX Intermarket Correlation";
  if (n.includes("regulatory event trading")) return "Crypto Regulatory Event";
  if (n.includes("terms of trade")) return "Terms of Trade Macro";
  if (n.includes("inflation differential")) return "Inflation Differential";
  if (n.includes("funding rate arbitrage")) return "Crypto Funding Arbitrage";
  if (n.includes("funding rate mean reversion")) return "Crypto Funding Mean Reversion";
  if (n.includes("funding rate momentum")) return "Crypto Funding Momentum";
  if (n.includes("ichimoku cloud breakout")) return "Ichimoku Cloud Breakout";
  if (n.includes("gdp growth differential")) return "GDP Growth Differential";
  if (n.includes("balance of payments")) return "Balance of Payments Macro";

  if (n.includes("harmonic patterns")) return "Harmonic Pattern Reversal";
  if (n.includes("elliott wave")) return "Wave Structure";
  if (n.includes("candlestick cluster confluence")) return "Candlestick Confluence";
  if (n.includes("multi-timeframe candlestick")) return "Multi-Timeframe Candlestick Confirmation";
  if (n.includes("double top/bottom")) return "Chart Pattern Reversal";
  if (n.includes("cup and handle") || n.includes("flag and pennant")) return "Chart Pattern Continuation";
  if (n.includes("supply shock") || n.includes("burn event") || n.includes("vesting cliff")) return "Crypto Supply Event";
  if (n.includes("macro liquidity correlation")) return "Intermarket Liquidity Correlation";
  if (n === "carry trade") return "Interest Rate Differential Carry";
  if (n.includes("correlation & beta")) return "Correlation / Beta";
  if (n.includes("uncovered interest rate parity")) return "Interest Rate Parity";
  if (n.includes("interest rate differential momentum")) return "Interest Rate Differential Momentum";
  if (n.includes("network adoption")) return "Crypto Network Adoption";
  if (n.includes("developer activity")) return "Crypto Fundamental Audit";
  if (n.includes("governance proposal")) return "Crypto Governance Event";

  if (n.includes("open interest confirmation")) {
    return "Crypto Derivatives Confirmation";
  }
  if (n.includes("rectangle (range) pattern")) {
    return "Range Pattern Breakout";
  }
  if (n.includes("trendline bounce")) {
    return "Trendline Reaction";
  }
  if (n.includes("bull/bear market condition adjustment")) {
    return "Crypto Regime Adjustment";
  }
  if (n.includes("break of structure")) {
    return "Market Structure Continuation";
  }
  if (n.includes("narrative rotation")) {
    return "Crypto Narrative Rotation";
  }
  if (n.includes("order block trading")) {
    return "Order Block";
  }
  if (n.includes("ecosystem growth")) {
    return "Crypto Fundamental Audit";
  }
  if (n.includes("tokenomics supply-demand")) {
    return "Tokenomics Supply / Demand";
  }
  if (n.includes("liquidity sweep")) {
    return "Liquidity Sweep";
  }
  if (n.includes("quasimodo")) {
    return "Market Structure Reversal";
  }
  if (n.includes("token unlock event")) {
    return "Crypto Supply Event";
  }
  if (n.includes("halving cycle")) {
    return "Crypto Market Cycle";
  }
  if (n.includes("twap execution") || n.includes("vwap execution")) {
    return "Execution Algorithm";
  }
  if (n.includes("iceberg orders")) {
    return "Order Book Microstructure";
  }
  if (n.includes("funding-adjusted breakout")) {
    return "Crypto Derivatives Breakout";
  }
  if (n.includes("multi-timeframe trend confluence")) {
    return "Multi-Timeframe Trend Confluence";
  }
  if (n.includes("volume confirmation on trend")) {
    return "Volume / Trend Confirmation";
  }
  if (n.includes("volatility targeting strategy")) {
    return "Risk Sizing / Volatility Targeting";
  }
  if (n.includes("fixed fraction") || n.includes("kelly criterion") || n.includes("volatility adjusted position sizing")) {
    return "Position Sizing";
  }
  if (n.includes("stop-loss placement") || n.includes("trailing stop") || n.includes("risk-reward ratio") || n.includes("laddered entry")) {
    return "Risk Management";
  }
  if (n.includes("on-chain") || n.includes("multi-factor quant") || n.includes("technical + fundamental") || n.includes("funding + social sentiment")) {
    return "Confluence / Model Audit";
  }
  if (n.includes("funding + basis") || n.includes("options skew") || n.includes("insurance via options")) {
    return "Crypto Derivatives Audit";
  }
  if (n.includes("leverage control")) {
    return "Leverage Risk Control";
  }
  if (n.includes("portfolio diversification") || n.includes("stablecoin hedging") || n.includes("dollar-cost averaging")) {
    return "Portfolio Allocation";
  }
  if (n.includes("inside bar")) {
    return "Candlestick Breakout Pattern";
  }
  if (n.includes("engulfing pattern") || n.includes("pin bar")) {
    return "Candlestick Reversal Pattern";
  }
  if (n.includes("flag and pennant") || n.includes("flag & pennant")) {
    return "Chart Pattern Continuation";
  }
  if (n.includes("head & shoulders") || n.includes("head and shoulders") || n.includes("double top") || n.includes("double bottom") || n.includes("triple top") || n.includes("triple bottom") || n.includes("triangle breakout") || n.includes("triangle pattern") || n.includes("cup and handle") || n.includes("wedge patterns")) {
    return "Chart Pattern Breakout";
  }
  if (n.includes("trendline break")) {
    return "Trendline Break And Retest";
  }
  if (n.includes("ml regression")) {
    return "Machine Learning Model Audit";
  }
  if (n.includes("reinforcement learning")) {
    return "Reinforcement Learning Model Audit";
  }
  if (n.includes("sentiment-driven ml")) {
    return "Sentiment Model Audit";
  }
  if (n.includes("autoencoder")) {
    return "Anomaly Detection Model Audit";
  }
  if (n.includes("genetic algorithm")) {
    return "Strategy Optimization Model Audit";
  }
  if (n.includes("high-frequency market making")) {
    return "Market Microstructure";
  }
  if (n.includes("latency arbitrage")) {
    return "Execution Latency Audit";
  }
  if (n.includes("commodity channel index") && n.includes("momentum")) {
    return "Momentum";
  }
  if (n.includes("momentum factor") || n.includes("absolute momentum") || n.includes("momentum divergence") || n.includes("momentum with moving average")) {
    return "Momentum";
  }
  if (n.includes("momentum breakout with volume")) {
    return "Volume Momentum Breakout";
  }
  if (n.includes("bullish engulfing") || n.includes("bearish engulfing") || n.includes("outside bar") || n.includes("pin bar") || n.includes("hammer pattern") || n.includes("shooting star") || n.includes("inverted hammer") || n.includes("doji")) {
    return "Candlestick Reversal Pattern";
  }
  if (n.includes("scalping")) {
    return "Execution Scalping";
  }
  if (n.includes("support and resistance bounce") || n.includes("support/resistance bounce")) {
    return "Support / Resistance Reaction";
  }
  if (n.includes("regression channel")) {
    return "Statistical Mean Reversion";
  }
  if (n.includes("volatility mean reversion") || n.includes("atr regression")) {
    return "Volatility Mean Reversion";
  }
  if (n.includes("macd momentum")) {
    return "Momentum";
  }
  if (n.includes("golden cross") || n.includes("ema cross with rsi")) {
    return "Trend Following";
  }
  if (
    n.includes("false breakout") ||
    n.includes("fakey") ||
    n.includes("price channel breakout") ||
    n.includes("donchian channel breakout") ||
    n.includes("range breakout") ||
    n.includes("gap breakout") ||
    n.includes("pivot point breakout") ||
    n.includes("support-resistance breakout") ||
    n.includes("support/resistance breakout")
  ) {
    return "Technical Breakout";
  }
  if (n.includes("bollinger")) {
    return n.includes("mean reversion") || n.includes("squeeze reversion") ? "Range / Mean Reversion" : "Technical Breakout";
  }
  if (n.includes("z-score") || n.includes("z score")) {
    return "Statistical Mean Reversion";
  }
  if (n.includes("pair-wise mean reversion") || n.includes("statistical arbitrage")) {
    return "Statistical Pair Reversion";
  }
  if (n.includes("breakout with volume confirmation")) {
    return "Volume Breakout";
  }
  if (n.includes("breakout with momentum confirmation")) {
    return "Momentum Breakout";
  }
  if (n.includes("time-stop breakout") || n.includes("opening range breakout")) {
    return "Opening Range Breakout";
  }
  if (n.includes("volume-price confirmation")) {
    return "Volume / Price Confirmation";
  }
  if (n.includes("obv")) {
    return "Volume Divergence";
  }
  if (n.includes("pairs trading") || n.includes("cointegration")) {
    return "Statistical Pair Reversion";
  }
  if (n.includes("vwap")) {
    return n.includes("trend reversal") ? "VWAP Trend Reversal" : "VWAP Mean Reversion";
  }
  if (n.includes("stochastic") || n.includes("oscillator range") || n.includes("cci")) {
    return "Oscillator Mean Reversion";
  }
  if (n.includes("moving average mean reversion")) {
    return "Moving Average Mean Reversion";
  }
  if (n.includes("atr channel trend")) {
    return "Volatility Channel Trend";
  }
  if (n.includes("volume-weighted momentum")) {
    return "Volume Momentum";
  }
  if (n.includes("momentum strength") || n.includes("rsi momentum") || n.includes("roc") || n.includes("rate of change")) {
    return "Momentum";
  }
  if (n.includes("volatility expansion breakout")) {
    return "Volatility Breakout";
  }
  if (n.includes("grid breakout")) {
    return "Grid Breakout / Exposure Control";
  }
  if (n.includes("news release breakout")) {
    return "Event Breakout";
  }
  if (n.includes("keltner")) {
    return n.includes("mean reversion") ? "Range / Mean Reversion" : "Trend Following";
  }
  if (n.includes("rsi") && n.includes("mean reversion")) {
    return "Range / Mean Reversion";
  }
  if (n.includes("higher-high") && n.includes("higher-low")) {
    return "Trend Structure";
  }
  if (n.includes("volatility breakout") || n.includes("volatility-adjusted")) {
    return "Volatility Expansion/Contraction";
  }
  if (n.includes("supertrend")) {
    return "Trend Following";
  }
  if (n.includes("london open breakout") || n.includes("new york open breakout") || n.includes("ny open breakout") || n.includes("breakout (swing)") || n.includes("breakout (intraday)")) {
    return "Breakout Trading";
  }
  if (n.includes("asia session") || n.includes("pre-london") || n.includes("new york session")) {
    return "Breakout Trading";
  }
  if (
    n.includes("crossover") ||
    n.includes("moving average") ||
    n.includes("moving-average") ||
    n.includes("filter") ||
    n.includes("cross") ||
    n.includes("macd") ||
    n.includes("adx") ||
    n.includes("parabolic sar") ||
    n.includes("ichimoku") ||
    n.includes("wma") ||
    n.includes("ema") ||
    n.includes("sma")
  ) {
    return "Trend Following";
  }
  return currentFamily;
}

export function getBatch4Directive(name: string, assetClass: StrategyAssetClass): string {
  const n = normalizedName(name);

  if (n.includes("ichimoku kumo breakout") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Ichimoku Kumo breakout through Kumo boundary, cloud thickness, Tenkan/Kijun agreement, Chikou context, completed close beyond the cloud, failed return into the cloud, sessions, spread, and pip distance.";
  if (n.includes("leverage control") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto leverage control as risk-gating education. Use leverage cap, liquidation buffer, margin-ratio warning, volatility cutback, forced-liquidation trap, venue depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("spot-futures divergence") && n.includes("swing") && assetClass === "GOLD") return "Batch 521-540 directive: Teach swing Gold spot-futures divergence through multi-session spot/futures spread, carry cost, expiry window, broad Gold structure, divergence-widening trap, and wider point/dollar distance. Do not use pip language or risk-free framing.";
  if (n.includes("spot-futures divergence") && assetClass === "GOLD") return "Batch 521-540 directive: Teach Gold spot-futures divergence through timestamped spot reference, futures reference, basis spread, carry cost, convergence watch, divergence-widening trap, and point/dollar distance. Do not use pip language or risk-free framing.";
  if (n.includes("adaptive rsi") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Adaptive RSI / Connors RSI as mean-reversion education. Use short RSI component, streak component, rank component, range context, failed continuation trap, sessions, spread, and pip distance. Keep it distinct from plain RSI.";
  if (n.includes("portfolio diversification across sectors") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto sector diversification through sector buckets, weight caps, correlation check, concentration trap, rebalance review, stable reserve, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("heikin-ashi") && n.includes("rsi") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Heikin-Ashi and RSI confluence through smoothed candle state, RSI pullback zone, trend context, disagreement trap, sessions, spread, and pip distance. Keep it separate from standalone Heikin-Ashi and standalone RSI.";
  if (n.includes("event straddle") && n.includes("swing") && assetClass === "GOLD") return "Batch 521-540 directive: Teach swing Gold event straddle through same-expiry call and put, premium ledger, implied-volatility term structure, event window, multi-session movement-needed area, IV-crush trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("event straddle") && assetClass === "GOLD") return "Batch 521-540 directive: Teach Gold event straddle through same-expiry call and put, premium ledger, implied volatility, event window, move-needed band, IV-crush trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("stablecoin hedging") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto stablecoin hedging as allocation defense. Use stable reserve band, de-risking threshold, issuer/depeg warning, exchange liquidity depth, slippage, and spread percentage. Avoid pip language and outcome-promise wording.";
  if (n.includes("williams %r") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Williams %R mean reversion through oscillator extreme, range boundary, return-toward-mean path, continuation failure, sessions, spread, and pip distance. Keep it distinct from RSI and Stochastic.";
  if (n.includes("insurance via options") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto insurance via options through protective option structure, premium cost, expiry window, implied-volatility drag, under-hedge trap, venue depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("klinger volume oscillator") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Klinger Volume Oscillator through volume-force line, zero-line pressure, divergence with price, false volume surge trap, sessions, spread, and pip distance. Avoid the restricted word; use trigger line only if needed.";
  if (n.includes("elder triple screen") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Elder Triple Screen through higher-timeframe trend screen, intermediate oscillator screen, lower-timeframe activation screen, timeframe conflict trap, sessions, spread, and pip distance.";
  if (n.includes("dollar-cost averaging") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto DCA allocation through fixed schedule, tranche size, reserve rule, exposure cap, averaging-too-fast trap, liquidity depth, slippage, and spread percentage. Do not use pip language or account-growth claims.";
  if (n.includes("event strangle") && n.includes("swing") && assetClass === "GOLD") return "Batch 521-540 directive: Teach swing Gold event strangle through out-of-the-money call and put, strike distance, premium ledger, implied-volatility term structure, multi-session movement-needed area, IV-crush trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("event strangle") && assetClass === "GOLD") return "Batch 521-540 directive: Teach Gold event strangle through out-of-the-money call and put, strike distance, premium ledger, event volatility, movement-needed band, IV-crush trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("laddered entry and exit") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto laddered allocation through planned tranches, spacing rule, average reference, invalidation line, educational exit reference zones, over-laddering trap, liquidity depth, slippage, and spread percentage. Do not use pip language or live-order wording.";
  if (n.includes("gann angle") && assetClass === "FOREX") return "Batch 521-540 directive: Teach Forex Gann angle geometry through fixed anchor point, 1x1 angle, retest tolerance, candle reaction, angle-break failure, sessions, spread, and pip distance. Present it as chart geometry, not certainty.";
  if (n.includes("liquidation threshold monitoring") && assetClass === "CRYPTO") return "Batch 521-540 directive: Teach crypto liquidation threshold monitoring through estimated liquidation bands, margin buffer, threshold approach, cascade risk, venue depth, slippage, and spread percentage. Do not use pip language or live-liquidation chasing.";
  if (n.includes("pivot point camarilla") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex Camarilla pivots through R3/S3 reaction bands, R4/S4 breakout boundaries, close quality, failed pivot fade trap, sessions, spread, and pip distance.";
  if (n.includes("volatility selling") && n.includes("short straddle") && n.includes("swing") && assetClass === "GOLD") return "Batch 541-560 directive: Teach swing Gold short straddle volatility selling through short call and short put, premium received, margin, implied-volatility crush, multi-session breakeven band, gap risk, and point/dollar distance. Do not use pip language.";
  if (n.includes("volatility selling") && n.includes("short straddle") && assetClass === "GOLD") return "Batch 541-560 directive: Teach Gold short straddle volatility selling through same-expiry short call and short put, premium received, margin, range body, IV expansion trap, gap risk, and point/dollar distance. Do not use pip language.";
  if (n.includes("hedged beta exposure") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto hedged beta exposure through portfolio beta estimate, hedge leg, net beta, correlation break, rebalance threshold, venue depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("quantile regression forecasting") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex quantile regression as model-risk education. Use percentile bands, median forecast, prediction interval, outlier regime shift, walk-forward review, sessions, spread, and pip distance. Do not present forecasts as certainty.";
  if (n.includes("rebalancing into stablecoins") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto stablecoin rebalancing after a parabolic run through extension score, tranche schedule, reserve target, depeg/issuer review, depth, slippage, and spread percentage. Do not use pip language or account-growth claims.";
  if (n.includes("fractal adaptive moving average") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex FRAMA through adaptive smoothing, fractal efficiency, trend/chop contrast, lag trap, sessions, spread, and pip distance. Keep it distinct from ordinary moving averages.";
  if (n.includes("gamma scalping") && n.includes("swing") && assetClass === "GOLD") return "Batch 541-560 directive: Teach swing Gold gamma scalping through option gamma, delta hedge line, wider re-hedge intervals, theta cost, IV change, execution friction, and point/dollar distance. Do not use pip language.";
  if (n.includes("gamma scalping") && assetClass === "GOLD") return "Batch 541-560 directive: Teach Gold gamma scalping through option gamma, delta hedge line, re-hedge points, theta cost, over-hedge trap, execution friction, and point/dollar distance. Do not use pip language.";
  if (n.includes("dynamic position sizing based on drawdown") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto drawdown-based sizing through equity curve state, drawdown threshold, size cutback, recovery gate, over-reduction trap, depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("renko chart trend trading") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex Renko trend trading through fixed brick size, reversal brick rule, trend sequence, missing-time warning, false brick trap, sessions, spread, and pip distance.";
  if (n.includes("stop-loss under volatility band") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto volatility-band invalidation through band boundary, volatility width, invalidation below band, reclaim trap, depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("point & figure breakout") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex point-and-figure breakout through X/O columns, box size, reversal amount, triple-top or double-top breakout, failed-column trap, sessions, spread, and pip distance.";
  if (n.includes("bull call spread") && n.includes("swing") && assetClass === "GOLD") return "Batch 541-560 directive: Teach swing Gold bull call spread through long lower call, short higher call, debit paid, defined risk, capped upside zone, IV/time decay, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("bull call spread") && assetClass === "GOLD") return "Batch 541-560 directive: Teach Gold bull call spread through long lower call, short higher call, debit paid, defined risk, capped upside zone, IV/time decay trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("capital allocation caps") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto capital allocation caps through per-asset cap, sector cap, reserve floor, concentration warning, rebalance review, depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("tick chart scalping") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex tick-chart scalping through tick bar construction, spread filter, micro range, completed tick-bar break, overtrading trap, sessions, and pip distance.";
  if (n.includes("stress testing portfolio") && assetClass === "CRYPTO") return "Batch 541-560 directive: Teach crypto portfolio stress testing through shock scenario, correlation spike, drawdown estimate, liquidity haircut, reserve response, depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("currency strength meter") && assetClass === "FOREX") return "Batch 541-560 directive: Teach Forex currency strength meter through basket inputs, base/quote split, relative strength ranking, correlation overlap, stale reading trap, sessions, spread, and pip distance.";
  if (n.includes("bear put spread") && assetClass === "GOLD") return "Batch 541-560 directive: Teach Gold bear put spread through long higher put, short lower put, debit paid, defined risk, capped downside zone, IV/time decay trap, and point/dollar distance. Do not use pip language.";

  if (n.includes("technical + options skew confirmation") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto technical plus options-skew confirmation through a marked technical level, options skew, implied-volatility context, premium drag, liquidity depth, slippage, and spread percentage. Do not use pip language or treat skew as direction by itself.";
  if (n.includes("options skew") && n.includes("buy calls") && n.includes("swing") && assetClass === "GOLD") return "Batch 501-520 directive: Teach swing Gold options skew buy-calls context through call IV premium over puts, upside hedge demand, broader Gold structure, premium-drag trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("relative strength rotation") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex relative-strength rotation through a currency basket, ranked relative strength, rotation window, correlation overlap, rebalance review, sessions, spread, and pip distance. Keep it separate from one-pair momentum.";
  if (n.includes("basis arbitrage") && n.includes("swing") && assetClass === "GOLD") return "Batch 501-520 directive: Teach swing Gold basis arbitrage through multi-session spot/futures basis, carry and financing cost, expiry window, broader Gold structure, convergence or widening trap, and wider point/dollar distance. Do not use pip language or risk-free framing.";
  if (n.includes("basis arbitrage") && assetClass === "GOLD") return "Batch 501-520 directive: Teach Gold basis arbitrage through spot reference, futures reference, basis spread, carry and financing cost, expiry, convergence or widening trap, and point/dollar distance. Do not use pip language or risk-free framing.";
  if (n.includes("volatility breakout system") && n.includes("turtle") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex Turtle-type volatility breakout as channel acceptance: N-period high/low, completed breakout close, retest behavior, failed return inside the channel, sessions, spread, and pip distance. Keep it channel-based and do not turn it into an ATR lesson.";
  if (n.includes("fixed fraction position sizing") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto fixed-fraction position sizing through fixed risk percentage, invalidation distance, exposure cap, liquidity depth, slippage, and spread percentage. Use classroom sizing language and no pip wording.";
  if (n.includes("kelly criterion position sizing") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto Kelly sizing through win-rate estimate, payoff estimate, fractional Kelly cap, sample-size warning, liquidity depth, slippage, and spread percentage. Warn against full-size overbetting and do not use pip language.";
  if (n.includes("dynamic support") && n.includes("pivot points") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex dynamic support and resistance through the central pivot, support/resistance ladder, prior reactions, current price response, failed pivot respect, sessions, spread, and pip distance.";
  if (n.includes("volatility adjusted position sizing") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto volatility-adjusted sizing through current volatility, invalidation distance, size cutback, risk budget, liquidity depth, slippage, and spread percentage. Keep it distinct from fixed-fraction and Kelly sizing.";
  if (n.includes("fibonacci retracement strategy") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex Fibonacci retracement through one completed swing, fixed anchors, 38.2/50/61.8 reference band, independent structure, anchor-change trap, sessions, spread, and pip distance.";
  if (n.includes("calendar spread") && n.includes("long near") && n.includes("short far") && n.includes("swing") && assetClass === "GOLD") return "Batch 501-520 directive: Teach swing Gold calendar spread long-near/short-far through near/far expiries, premium ledger, implied-volatility term structure, broader Gold structure, expiry mismatch, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("calendar spread") && n.includes("long near") && n.includes("short far") && assetClass === "GOLD") return "Batch 501-520 directive: Teach Gold calendar spread long-near/short-far through long near leg, short far leg, same structure, implied-volatility term structure, premium ledger, expiry mismatch, and point/dollar distance. Do not use pip language.";
  if (n.includes("pivot point breakout") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex pivot point breakout through central pivot, nearby support/resistance, completed breakout close, retest, failed break back through pivot, sessions, spread, and pip distance.";
  if (n.includes("stop-loss placement under support") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto support invalidation placement through support shelf, wick-sweep area, protective invalidation beyond failed support, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("trailing stop strategy") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto trailing invalidation through a trailing reference, volatility buffer, update rule, premature-tightening trap, liquidity depth, slippage, and spread percentage. Keep it separate from Forex trailing-stop content and do not use pip language.";
  if (n.includes("moving average envelope") && assetClass === "FOREX") return "Batch 501-520 directive: Teach Forex moving-average envelope through the moving-average midline, upper/lower envelope bands, trend or range context, band reaction, failed envelope respect, sessions, spread, and pip distance. Do not make it a crossover lesson.";
  if (n.includes("calendar spread") && n.includes("short near") && n.includes("long far") && n.includes("swing") && assetClass === "GOLD") return "Batch 501-520 directive: Teach swing Gold calendar spread short-near/long-far through short near leg, long far leg, premium ledger, term-structure context, broader Gold structure, expiry mismatch, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("calendar spread") && n.includes("short near") && n.includes("long far") && assetClass === "GOLD") return "Batch 501-520 directive: Teach Gold calendar spread short-near/long-far through short near leg, long far leg, same structure, implied-volatility term structure, premium ledger, expiry mismatch, and point/dollar distance. Do not use pip language.";
  if (n.includes("risk-reward ratio targeting") && assetClass === "CRYPTO") return "Batch 501-520 directive: Teach crypto reward-to-risk planning through invalidation distance, educational reference zone, reward-to-risk band, structural room check, liquidity depth, slippage, and spread percentage. Do not use pip language or outcome-promise wording.";

  if (n.includes("options put/call ratio high") && n.includes("swing")) return "Batch 481-500 directive: Teach swing Gold options put/call ratio high as bullish contrarian context through elevated put demand, multi-session persistence, Gold structure response, IV/premium context, crowding persistence trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("options put/call ratio high")) return "Batch 481-500 directive: Teach Gold options put/call ratio high as bullish contrarian context through elevated put demand, Gold reaction window, IV/premium context, source lag, crowding persistence trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("volatility targeting strategy")) return "Batch 481-500 directive: Teach crypto volatility targeting as risk-sizing education. Use realized volatility, target risk band, size adjustment, invalidation distance, liquidity depth, slippage, and spread percentage. Do not use pip language or account-growth claims.";
  if (n.includes("on-chain + technical confluence")) return "Batch 481-500 directive: Teach crypto on-chain plus technical confluence through on-chain flow, technical structure, agreement/disagreement check, stale-chain-data trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("speed of market momentum scalping")) return "Batch 481-500 directive: Teach Forex speed-of-market momentum scalping as execution-reading education. Use tick speed, candle expansion, order-flow proxy, session liquidity, spread, pip distance, slippage, and exhaustion trap. Avoid live scalping instruction wording.";
  if (n.includes("funding + social sentiment filter")) return "Batch 481-500 directive: Teach crypto funding plus social sentiment as a confluence filter. Use funding pressure, social crowding source, window alignment, disagreement case, stale/social manipulation trap, liquidity depth, slippage, and spread percentage.";
  if (n.includes("news fade strategy")) return "Batch 481-500 directive: Teach Forex news fade through scheduled event, first impulse, spread normalization, failed continuation, fade observation area, whipsaw trap, sessions, spread, and pip distance. Do not write live news-order instructions.";
  if (n.includes("options put/call ratio low") && n.includes("swing")) return "Batch 481-500 directive: Teach swing Gold options put/call ratio low as bearish complacency context through low put demand, multi-session persistence, Gold structure response, IV/premium context, complacency trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("options put/call ratio low")) return "Batch 481-500 directive: Teach Gold options put/call ratio low as bearish complacency context through low put demand, Gold reaction window, IV/premium context, source lag, complacency trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("multi-factor quant scoring")) return "Batch 481-500 directive: Teach crypto multi-factor quant scoring as model audit. Use factor list, weights, scoring window, validation sample, disagreement matrix, overfit trap, liquidity depth, slippage, and spread percentage.";
  if (n.includes("straddle the news")) return "Batch 481-500 directive: Teach Forex options news straddle as an options-structure simulation. Use scheduled event, call/put legs, strike/expiry, premium, implied volatility, move-needed band, IV-crush trap, sessions, spread, and pip distance.";
  if (n.includes("technical + fundamental confirmation")) return "Batch 481-500 directive: Teach crypto technical plus fundamental confirmation through technical structure, network/fundamental context, agreement/disagreement check, stale fundamental trap, liquidity depth, slippage, and spread percentage.";
  if (n.includes("options skew") && n.includes("buy puts") && n.includes("swing")) return "Batch 481-500 directive: Teach swing Gold options skew buy-puts context through put IV premium over calls, broader downside-hedge demand, Gold structure, premium-drag trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("options skew") && n.includes("buy puts")) return "Batch 481-500 directive: Teach Gold options skew buy-puts context through put IV premium over calls, downside-hedge demand, Gold reaction window, premium-drag trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("gamma scalping")) return "Batch 481-500 directive: Teach Forex gamma scalping as options-hedging simulation. Use option position, delta hedge line, gamma/theta balance, re-hedge intervals, IV change, spread, sessions, pip distance, and over-hedging trap.";
  if (n.includes("funding + basis + oi composite")) return "Batch 481-500 directive: Teach crypto funding plus basis plus open-interest composite through funding, basis, OI change, price context, venue disagreement, liquidation/crowding trap, liquidity depth, slippage, and spread percentage.";
  if (n.includes("calendar spread in fx options")) return "Batch 481-500 directive: Teach Forex options calendar spread through near/far expiries, same strike or matched structure, implied volatility term structure, premium ledger, forward-rate context, spread, sessions, pip distance, and expiry mismatch trap.";
  if (n.includes("options skew") && n.includes("buy calls")) return "Batch 481-500 directive: Teach Gold options skew buy-calls context through call IV premium over puts, upside hedge demand, Gold reaction window, premium-drag trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("on-chain + sentiment contrarian")) return "Batch 481-500 directive: Teach crypto on-chain plus sentiment contrarian as an audit. Use on-chain activity, sentiment extreme, price structure disagreement, crowding persistence trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("interest rate swaption hedge")) return "Batch 481-500 directive: Teach Forex interest-rate swaption hedge through rate exposure, swaption payer/receiver structure, expiry, strike, premium, rate-shock scenario, hedge coverage, spread, sessions, pip distance, and under-hedge trap.";

  if (n.includes("arbitrage bot")) return "Batch 461-480 directive: Teach crypto CEX/DEX arbitrage bot as an execution audit. Use CEX quote, DEX pool price, route depth, fees, gas, inventory, latency, slippage, and spread percentage. Do not use pip language or risk-free framing.";
  if (n.includes("machine-learning-enhanced execution")) return "Batch 461-480 directive: Teach crypto machine-learning-enhanced execution as an execution-quality audit. Use feature inputs, model confidence band, venue depth, order slicing, fill quality, latency, slippage, and spread percentage. Keep model output advisory, not predictive certainty.";
  if (n.includes("etf outflow indicator") && n.includes("swing")) return "Batch 461-480 directive: Teach swing Gold ETF outflow short context through multi-report outflow trend, delayed Gold response, dollar and real-yield conflict, broad invalidation, stale-flow trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("etf outflow indicator")) return "Batch 461-480 directive: Teach Gold ETF outflow short context through ETF outflow change, Gold response window, dollar and real-yield conflict, short-side crowding trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("cross-hedging with correlated asset")) return "Batch 461-480 directive: Teach Forex cross-hedging with a correlated asset such as oil through currency exposure, correlated asset driver, hedge ratio, basis risk, correlation-break trap, spread, sessions, and pip distance.";
  if (n.includes("rebalancing algorithm")) return "Batch 461-480 directive: Teach crypto periodic rebalancing as portfolio process. Use target weights, rebalance calendar, drift band, transaction costs, tax/fee friction as educational context, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("portfolio diversification across currency pairs")) return "Batch 461-480 directive: Teach Forex diversification across currency pairs through pair basket selection, repeated currency exposure, correlation matrix, weight caps, rebalance review, spread, sessions, and pip distance.";
  if (n.includes("dynamic leverage adjustment")) return "Batch 461-480 directive: Teach Forex dynamic leverage adjustment through volatility state, equity curve state, max leverage cap, drawdown gate, pip invalidation distance, spread, sessions, and simulation-only exposure sizing.";
  if (n.includes("momentum + mean reversion hybrid bot")) return "Batch 461-480 directive: Teach crypto hybrid bot logic through regime switch, momentum module, mean-reversion module, conflict state, overfit trap, liquidity depth, slippage, and spread percentage. Keep bot rules auditable and do not use pip language.";
  if (n.includes("retail sentiment contrarian short") && n.includes("swing")) return "Batch 461-480 directive: Teach swing Gold retail-sentiment contrarian short through crowded-long sentiment, source/sample limits, broader Gold structure, delayed reversal context, extreme-persistence trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("retail sentiment contrarian short")) return "Batch 461-480 directive: Teach Gold retail-sentiment contrarian short through crowded-long sentiment, source/sample limits, Gold structure response, reversal context, persistence trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("ai-assisted discretionary trading")) return "Batch 461-480 directive: Teach crypto AI-assisted discretionary trading as decision-support audit. Use AI thesis draft, human checklist, data-source quality, hallucination check, execution liquidity, slippage, and spread percentage. Keep AI advisory, not autonomous.";
  if (n.includes("trailing stop strategy")) return "Batch 461-480 directive: Teach Forex trailing stop strategy as trailing invalidation architecture. Use initial structure, trail rule, pip distance, spread, session volatility, premature-tightening trap, and educational simulation language.";
  if (n.includes("risk parity allocation algorithm")) return "Batch 461-480 directive: Teach crypto risk-parity allocation through asset weights, realized volatility, equal risk contribution, correlation check, rebalance threshold, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("retail sentiment contrarian long") && n.includes("swing")) return "Batch 461-480 directive: Teach swing Gold retail-sentiment contrarian long through crowded-short sentiment, source/sample limits, broader Gold structure, delayed reversal context, extreme-persistence trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("retail sentiment contrarian long")) return "Batch 461-480 directive: Teach Gold retail-sentiment contrarian long through crowded-short sentiment, source/sample limits, Gold structure response, reversal context, persistence trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("equity curve stop")) return "Batch 461-480 directive: Teach Forex equity-curve portfolio stop as a circuit breaker. Use equity curve, portfolio drawdown threshold, halt rule, reduced-risk restart condition, revenge-trading trap, spread, sessions, and pip distance.";
  if (n.includes("risk parity currency portfolio")) return "Batch 461-480 directive: Teach Forex risk-parity currency portfolio through currency basket weights, realized volatility, correlation matrix, equal risk contribution, rebalance threshold, spread, sessions, and pip distance.";
  if (n.includes("reinforcement learning rebalancer")) return "Batch 461-480 directive: Teach crypto reinforcement-learning rebalancer as model-governance audit. Use state space, reward function, policy action, backtest/live drift, overfit trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("correlation matrix position adjustment")) return "Batch 461-480 directive: Teach Forex correlation-matrix position adjustment through pair exposure table, correlation matrix, overlap score, position reduction or rebalance rule, correlation-spike trap, spread, sessions, and pip distance.";

  if (n.includes("flash loan arbitrage")) return "Batch 441-460 directive: Teach crypto flash-loan arbitrage as an atomic execution audit. Use borrow leg, route path, DEX/pool depth, fee and gas cost, MEV risk, revert condition, slippage, and spread percentage. Do not use pip language or risk-free framing.";
  if (n.includes("atr-based stop placement")) return "Batch 441-460 directive: Teach Forex ATR-based invalidation placement through ATR value, structure anchor, pip distance, spread allowance, session volatility, too-tight placement trap, and simulation-only risk math.";
  if (n.includes("cot speculator extreme short") && n.includes("swing")) return "Batch 441-460 directive: Teach swing Gold COT speculator extreme short as contrarian long-study context through weekly report lag, short percentile across reports, broader Gold structure, delayed reversal risk, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("volatility scaling portfolio allocation")) return "Batch 441-460 directive: Teach Forex volatility-scaled portfolio allocation through pair basket weights, realized volatility, equal risk contribution, correlation check, rebalance threshold, spread, sessions, and pip distance.";
  if (n.includes("cot commercial hedger accumulation") && n.includes("swing")) return "Batch 441-460 directive: Teach swing Gold COT commercial hedger accumulation through weekly report lag, commercial net position trend, broader Gold structure, accumulation persistence, crowded interpretation trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("cot commercial hedger accumulation")) return "Batch 441-460 directive: Teach Gold COT commercial hedger accumulation through weekly report lag, commercial net position trend, Gold structure response, accumulation confirmation, false-crowding trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("governance token short")) return "Batch 441-460 directive: Teach crypto governance-token dilution as an emissions-risk audit. Use proposal terms, emission schedule, token unlock pressure, liquidity depth, borrow/funding feasibility, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("drawdown control")) return "Batch 441-460 directive: Teach Forex drawdown control as a circuit-breaker rule. Use equity curve, daily/weekly drawdown threshold, halt condition, risk reduction, revenge-trading trap, sessions, spread, and pip distance.";
  if (n.includes("dao treasury diversification")) return "Batch 441-460 directive: Teach crypto DAO treasury diversification through treasury wallet flow, asset mix change, proposal/execution timing, market depth, unlock or sale pressure, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("hedging with correlated currency pairs")) return "Batch 441-460 directive: Teach Forex correlated-pair hedging through primary pair exposure, hedge pair correlation, hedge ratio, correlation-break trap, spread, sessions, and pip distance.";
  if (n.includes("rule-based moving average bot")) return "Batch 441-460 directive: Teach crypto rule-based moving-average bot as automation audit. Use fast/slow average rule, completed cross, exchange execution state, whipsaw trap, parameter drift, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("cot divergence") && n.includes("swing")) return "Batch 441-460 directive: Teach swing Gold COT divergence audit through commercial/speculator divergence, weekly report lag, broader Gold structure, delayed confirmation, divergence-persistence trap, and wider point/dollar distance. Avoid the banned word from the original title in learner-facing copy.";
  if (n.includes("cot divergence")) return "Batch 441-460 directive: Teach Gold COT divergence audit through commercial/speculator divergence, weekly report lag, Gold structure response, confirmation area, false-divergence trap, and point/dollar distance. Avoid the banned word from the original title in learner-facing copy.";
  if (n.includes("direct hedging")) return "Batch 441-460 directive: Teach Forex direct hedging as offsetting-position exposure audit. Use original exposure, hedge leg, net exposure, carry/spread cost, broker rule constraint, sessions, and pip distance.";
  if (n.includes("indicator stack bot")) return "Batch 441-460 directive: Teach crypto indicator-stack bot as model/process audit. Use indicator inputs, rule order, disagreement matrix, overfit/stacking trap, execution latency, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("options hedging")) return "Batch 441-460 directive: Teach Forex options hedging through spot exposure, option structure, strike/expiry, premium and implied volatility, hedge coverage, spread, sessions, and pip distance. Use simulation language only.";
  if (n.includes("scalping bot")) return "Batch 441-460 directive: Teach crypto scalping bot as execution microstructure audit. Use spread capture rule, order-book depth, fee tier, latency, fill quality, overtrading trap, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("etf inflow momentum") && n.includes("swing")) return "Batch 441-460 directive: Teach swing Gold ETF inflow momentum through ETF flow trend, Gold response, dollar/real-yield conflict, delayed flow confirmation, flow-chasing trap, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("etf inflow momentum")) return "Batch 441-460 directive: Teach Gold ETF inflow momentum through ETF flow change, Gold response window, dollar/real-yield conflict, flow-chasing trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("forward contract hedging")) return "Batch 441-460 directive: Teach Forex forward contract hedging through spot exposure, forward rate, tenor, hedge amount, forward points/carry, settlement mismatch trap, spread, sessions, and pip distance.";

  if (n.includes("stablecoin arbitrage across chains")) return "Batch 421-440 directive: Teach crypto cross-chain stablecoin arbitrage through chain A/B stablecoin price, bridge and gas cost, transfer time, pool depth, depeg/oracle risk, slippage, and spread percentage. Do not use pip language or risk-free framing.";
  if (n.includes("de-dollarization theme") && n.includes("swing")) return "Batch 421-440 directive: Teach swing long Gold de-dollarization through reserve diversification, dollar trend, real-yield conflict, delayed Gold demand response, narrative-only trap, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("de-dollarization theme")) return "Batch 421-440 directive: Teach long Gold de-dollarization through reserve diversification theme, dollar trend, real-yield conflict, Gold response window, narrative-only trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("impermanent loss protection")) return "Batch 421-440 directive: Teach crypto impermanent-loss protection protocols through protected LP position, IL coverage mechanism, premium/cost, protocol reserves, claim limits, slippage, and spread percentage. Keep it separate from volatile-pair LP hedging and do not use pip language.";
  if (n.includes("macro + machine learning hybrid")) return "Batch 421-440 directive: Teach Forex macro plus machine-learning hybrid as model audit. Use macro feature set, model output, validation split, feature drift, macro/model disagreement, sessions, spread, and pip distance. Do not present model output as a forecast promise.";
  if (n.includes("supply disruption") && n.includes("swing")) return "Batch 421-440 directive: Teach swing long Gold supply disruption through broader supply-stress window, inventory/logistics context, delayed Gold scarcity response, headline shortage trap, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("supply disruption")) return "Batch 421-440 directive: Teach long Gold supply disruption through physical supply stress, inventory/logistics context, Gold reaction window, yield/dollar conflict, headline shortage trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("seasonal + technical confirmation")) return "Batch 421-440 directive: Teach Forex seasonal plus technical confirmation through seasonal window, historical tendency, technical structure, out-of-sample check, broken-seasonality trap, sessions, spread, and pip distance. Keep it separate from pure seasonality.";
  if (n.includes("staking yield strategy")) return "Batch 421-440 directive: Teach crypto staking yield through yield source, validator or protocol terms, lockup and unstake queue, slashing risk, liquidity depth, slippage, and spread percentage. Do not imply yield is certain.";
  if (n.includes("restaking & liquid staking")) return "Batch 421-440 directive: Teach crypto restaking and liquid staking tokens through restaked collateral, LST peg, reward source, liquidity depth, slashing/depeg risk, rehypothecation trap, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("volatility breakout + fundamental filter")) return "Batch 421-440 directive: Teach Forex volatility breakout plus fundamental filter through compression, breakout close, macro/fundamental filter, conflict case, false expansion trap, sessions, spread, and pip distance. Keep it distinct from pure ATR breakout.";
  if (n.includes("cot speculator extreme long") && n.includes("swing")) return "Batch 421-440 directive: Teach swing Gold COT speculator extreme long as contrarian short-study context through weekly COT lag, speculator long percentile, broader Gold structure, delayed reversal risk, extreme-persistence trap, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("cot speculator extreme long")) return "Batch 421-440 directive: Teach Gold COT speculator extreme long as contrarian short-study context through weekly COT lag, speculator long percentile, Gold structure, reversal trigger, extreme-persistence trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("fixed fractional position sizing")) return "Batch 421-440 directive: Teach Forex fixed fractional position sizing through account equity, fixed risk percentage, pip invalidation distance, pip value, calculated position size, spread/slippage allowance, and exposure cap. Simulation-only and no target-profit language.";
  if (n.includes("liquidation farming on defi lending")) return "Batch 421-440 directive: Teach crypto DeFi lending liquidation farming as a liquidation-risk and execution-friction audit. Use collateral vault health factor, liquidation threshold, liquidation bonus, gas competition, oracle risk, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("fixed ratio position sizing")) return "Batch 421-440 directive: Teach Forex fixed ratio position sizing through equity step, delta rule, size increase threshold, pip invalidation distance, drawdown restraint, spread/slippage allowance, and exposure cap. Simulation-only and no target-profit language.";
  if (n.includes("synthetic asset arbitrage")) return "Batch 421-440 directive: Teach crypto synthetic asset arbitrage through synthetic price, spot/oracle reference, collateral backing, mint/redeem or hedge path, fees, oracle/peg risk, slippage, and spread percentage. Do not imply every synthetic discount is executable.";
  if (n.includes("kelly criterion sizing")) return "Batch 421-440 directive: Teach Forex Kelly criterion sizing through win-rate estimate, payoff estimate, Kelly fraction, fractional cap, sample-size warning, pip invalidation distance, spread/slippage allowance, and overbetting trap.";
  if (n.includes("insurance pool participation")) return "Batch 421-440 directive: Teach crypto insurance pool participation through pool exposure, premium income source, claim reserve, covered-risk definition, correlated-claims trap, liquidity depth, slippage, and spread percentage. Do not frame coverage returns as certain.";
  if (n.includes("cot speculator extreme short")) return "Batch 421-440 directive: Teach Gold COT speculator extreme short as contrarian long-study context through weekly COT lag, speculator short percentile, Gold structure, reversal trigger, extreme-persistence trap, and point/dollar distance. Do not use pip language.";

  if (n.includes("liquidity provision to stable pair")) return "Batch 401-420 directive: Teach crypto stable-pair liquidity provision through stable pool pair selection, pool depth, fee APR, utilization, impermanent-loss check, depeg risk, slippage, and spread percentage. Keep it separate from volatile-pair LP and do not use pip language.";
  if (n.includes("geopolitical risk") && n.includes("swing")) return "Batch 401-420 directive: Teach swing long Gold geopolitical risk through broader event-stress window, safe-haven Gold response, yield and dollar conflict, de-escalation trap, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("geopolitical risk")) return "Batch 401-420 directive: Teach long Gold geopolitical risk through event window, safe-haven demand response, yield and dollar conflict, liquidity gap, headline fade, broad invalidation, and point/dollar distance. Do not use pip language.";
  if (n.includes("liquidity provision to volatile pair")) return "Batch 401-420 directive: Teach crypto volatile-pair liquidity provision with impermanent-loss hedging through volatile pool pair, IL curve, hedge leg, rebalance schedule, fee income, hedge cost, slippage, and spread percentage. Keep it separate from stable-pair LP and do not use pip language.";
  if (n.includes("indicator + price action confluence")) return "Batch 401-420 directive: Teach Forex indicator plus price-action confluence through indicator state, price structure, completed reaction, disagreement case, failed structure trap, sessions, spread, and pip distance. Do not let the indicator override price structure.";
  if (n.includes("triangular confluence")) return "Batch 401-420 directive: Teach Forex three-way confluence through fundamental driver, technical structure, sentiment window, evidence weights, disagreement matrix, overweighted-evidence trap, sessions, spread, and pip distance. Keep it separate from indicator plus price action.";
  if (n.includes("yield farming rotation")) return "Batch 401-420 directive: Teach crypto yield farming rotation through protocol yield, TVL trend, incentive decay, lockup or exit terms, smart-contract risk, liquidity depth, slippage, and spread percentage. Do not imply high APR removes risk.";
  if (n.includes("hybrid carry + price action")) return "Batch 401-420 directive: Teach Forex hybrid carry plus price action through rate differential, rollover cost, price structure, structure failure, active sessions, spread, and pip distance. Carry is context, not a standalone trigger.";
  if (n.includes("dex arbitrage")) return "Batch 401-420 directive: Teach crypto DEX arbitrage through DEX A/B prices, pool depth, gas cost, router path, slippage, MEV risk, stale quote trap, and spread percentage. Do not use pip language or imply every gap is executable.";
  if (n.includes("central bank net buying") && n.includes("swing")) return "Batch 401-420 directive: Teach swing long Gold central-bank net buying through broader reserve-flow window, delayed Gold demand response, stale reserve-data trap, yield and dollar conflict, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("central bank net buying")) return "Batch 401-420 directive: Teach long Gold central-bank net buying through official buying context, reserve-flow timing, Gold reaction window, yield and dollar conflict, flow-lag trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("mean reversion + options hedging")) return "Batch 401-420 directive: Teach Forex mean reversion plus options hedging through range context, options hedge structure, premium and volatility check, hedge coverage, sessions, spread, and pip distance. Keep it separate from simple range mean reversion.";
  if (n.includes("perpetual dex funding arbitrage")) return "Batch 401-420 directive: Teach crypto perpetual DEX funding arbitrage through DEX perpetual funding, matched hedge leg, basis, gas and fee cost, smart-contract risk, funding flip trap, slippage, and spread percentage. Do not use pip language or risk-free framing.";
  if (n.includes("central bank net selling") && n.includes("swing")) return "Batch 401-420 directive: Teach swing short Gold central-bank net selling through broader official-selling window, delayed Gold pressure, reserve-data lag, yield and dollar conflict, broad invalidation, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("central bank net selling")) return "Batch 401-420 directive: Teach short Gold central-bank net selling through official selling context, reserve-flow timing, Gold pressure window, yield and dollar conflict, flow-headline trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("news + technical event trading")) return "Batch 401-420 directive: Teach Forex news plus technical event trading through news event window, pre-marked technical boundary, first stable close, spread widening, slippage, whipsaw trap, sessions, and pip distance. Do not write live news-order instructions.";
  if (n.includes("lending & borrowing looping")) return "Batch 401-420 directive: Teach crypto lending and borrowing looping as a leverage-risk audit through collateral asset, borrow leg, loop count, health factor, liquidation buffer, gas cost, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("sentiment + risk-on/off regime")) return "Batch 401-420 directive: Teach Forex sentiment plus risk-on/off regime through risk proxy, sentiment source, pair response, regime flip, stale sentiment trap, active sessions, spread, and pip distance. Keep it separate from technical-sentiment confluence.";
  if (n.includes("rate arbitrage between lending platforms")) return "Batch 401-420 directive: Teach crypto lending-platform rate arbitrage through platform A/B rates, utilization, liquidity depth, bridge or gas cost, transfer time, rate compression trap, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("order flow + price action confluence")) return "Batch 401-420 directive: Teach Forex order flow plus price action through footprint or delta context, price structure, absorption or exhaustion, structure response, flow-only trap, sessions, spread, and pip distance. Keep it distinct from crypto order-flow imbalance.";

  if (n.includes("fx basket mean-reversion quant")) return "Batch 381-400 directive: Teach Forex basket mean-reversion as a correlation and portfolio-risk audit. Use basket legs, weights, z-score deviation, rolling correlation, rebalance drift, session, spread, and pip distance. Do not make it one-pair bias.";
  if (n.includes("usd weakness") && n.includes("swing")) return "Batch 381-400 directive: Teach swing long Gold USD weakness through DXY trend, real-yield cross-check, delayed Gold response, broad invalidation, safe-haven conflict, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("usd strength")) {
    const focus = n.includes("swing") ? "swing DXY strength, real-yield cross-check, delayed Gold pressure, broad invalidation, and wider point/dollar distance" : "DXY or dollar-basket strength, real-yield cross-check, Gold pressure window, macro divergence, and point/dollar distance";
    return `Batch 381-400 directive: Teach short Gold USD strength through ${focus}. Do not use pip language or one-input macro framing.`;
  }
  if (n.includes("hft momentum ignition")) return "Batch 381-400 directive: Teach crypto HFT momentum ignition as a detection and risk audit, not instructions to create movement. Use rapid order bursts, thin depth, cancellation pattern, spread percentage, slippage, toxic flow, and manipulation/fade trap. Do not use pip language.";
  if (n.includes("order flow imbalance analysis")) return "Batch 381-400 directive: Teach crypto order-flow imbalance through bid/ask depth, aggressive flow, absorption, exhaustion, imbalance persistence, spoof-risk caution, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("adaptive moving average") && n.includes("kaufman")) return "Batch 381-400 directive: Teach Forex Kaufman AMA through adaptive average line, efficiency ratio, trend/noise state, price reaction, whipsaw trap, session, spread, and pip distance. Keep it distinct from simple EMA/SMA crossover.";
  if (n.includes("imbalance + price ladder scalping")) return "Batch 381-400 directive: Teach crypto price-ladder imbalance as a short-window order-flow audit. Use ladder depth, bid/ask imbalance, absorption, quick invalidation, spoofing trap, slippage, and spread percentage. Do not use pip language or live scalping instructions.";
  if (n.includes("volatility scaling of position sizes")) return "Batch 381-400 directive: Teach Forex volatility scaling as simulation-only sizing. Use volatility input, pip invalidation distance, scale-down rule, exposure cap, spread/slippage allowance, session conditions, and risk budget. Avoid account-growth promises.";
  if (n.includes("trend + fundamental confirmation")) return "Batch 381-400 directive: Teach Forex trend plus fundamental confluence through trend structure, macro driver, calendar context, pair response, conflict matrix, spread, sessions, and pip distance. Do not let fundamentals override invalidation.";
  if (n.includes("yield curve inversion")) {
    const focus = n.includes("swing") ? "swing yield-curve inversion, recession-risk context, real-yield path, delayed Gold response, broad invalidation, and wider point/dollar distance" : "yield-curve inversion, growth-risk context, real-yield path, Gold reaction window, macro divergence, and point/dollar distance";
    return `Batch 381-400 directive: Teach long Gold yield-curve inversion through ${focus}. Do not use pip language.`;
  }
  if (n.includes("vwap reversion execution")) return "Batch 381-400 directive: Teach crypto VWAP reversion execution as an execution-quality audit. Use VWAP anchor, deviation band, return path, order slicing, depth, slippage, spread percentage, and failure to reclaim VWAP. Do not use pip language.";
  if (n.includes("liquidity provision incentives")) return "Batch 381-400 directive: Teach crypto liquidity provision incentives through maker rewards, fee tier, depth added, inventory exposure, adverse selection, incentive decay, slippage, and spread percentage. Do not imply rewards remove risk.";
  if (n.includes("technical + sentiment confluence")) return "Batch 381-400 directive: Teach Forex technical plus sentiment confluence as evidence-weighting audit. Use chart structure, sentiment source, window alignment, disagreement matrix, stale sentiment trap, spread, sessions, and pip distance. Do not treat sentiment as automatic direction.";
  if (n.includes("cross-asset statistical factor model")) return "Batch 381-400 directive: Teach crypto cross-asset statistical factor model as model-risk audit. Use factor inputs, cross-asset exposure, beta weights, regime check, out-of-sample drift, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("high volatility risk-off")) {
    const focus = n.includes("swing") ? "swing volatility regime, equity stress, yield response, delayed Gold safe-haven behavior, broad invalidation, and wider point/dollar distance" : "volatility spike, equity stress, yield response, Gold safe-haven window, macro conflict, and point/dollar distance";
    return `Batch 381-400 directive: Teach long Gold high-volatility risk-off through ${focus}. Do not use pip language.`;
  }
  if (n.includes("fundamental + cot confluence")) return "Batch 381-400 directive: Teach Forex fundamental plus COT confluence through macro driver, COT participant category, report lag, positioning percentile, price structure, conflict matrix, sessions, spread, and pip distance. Do not treat COT as a timing tool.";
  if (n.includes("multi-timeframe trend alignment")) return "Batch 381-400 directive: Teach Forex multi-timeframe trend alignment through higher-timeframe direction, lower-timeframe structure, pullback quality, conflict timeframe, spread, sessions, and pip distance. Keep it separate from indicator stacking.";

  if (n.includes("neural network price prediction")) return "Batch 361-380 directive: Teach Forex neural network price prediction as a model-audit lesson, not a forecast promise. Use feature inputs, training window, prediction band, error band, validation split, regime shift, spread, sessions, and pip distance.";
  if (n.includes("random forest classification")) return "Batch 361-380 directive: Teach Forex random forest direction classification through feature votes, class probabilities, out-of-sample confusion, feature drift, spread, sessions, and pip distance. Keep it distinct from neural networks and SVM boundary logic.";
  if (n.includes("support vector machine")) return "Batch 361-380 directive: Teach Forex SVM trend classification through feature scaling, separating boundary, margin, support vectors, class flip zone, validation split, spread, sessions, and pip distance. Keep it distinct from tree voting.";
  if (n.includes("reinforcement learning trading agent")) return "Batch 361-380 directive: Teach Forex reinforcement learning as policy audit. Use state, action, reward, training environment, policy output, live-distribution mismatch, overfitting, spread, sessions, and pip distance. Do not use bot-profit promises.";
  if (n.includes("kalman filter trend estimation")) return "Batch 361-380 directive: Teach Forex Kalman filter as adaptive trend-estimation audit. Use observed price, estimated state, filter gain, residual/error band, lag, regime shift, spread, sessions, and pip distance. It is not a magic trend detector.";
  if (n.includes("hidden markov model")) return "Batch 361-380 directive: Teach Forex HMM regime switching through hidden regime states, transition probabilities, observed returns/volatility, state confidence, regime-flip trap, spread, sessions, and pip distance. Keep it separate from simple trend classification.";
  if (n.includes("fed dovish pivot")) {
    const focus = n.includes("swing") ? "swing Fed policy repricing, real-yield decline, dollar response, delayed Gold reaction, and wide point/dollar distance" : "Fed policy pivot, real-yield decline, dollar response, Gold reaction window, and point/dollar distance";
    return `Batch 361-380 directive: Teach long Gold Fed dovish pivot through ${focus}. Do not use pip language or certainty wording.`;
  }
  if (n.includes("fed hawkish pivot")) {
    const focus = n.includes("swing") ? "swing Fed policy repricing, real-yield rise, dollar response, delayed Gold pressure, and wide point/dollar distance" : "Fed policy pivot, real-yield rise, dollar response, Gold pressure window, and point/dollar distance";
    return `Batch 361-380 directive: Teach short Gold Fed hawkish pivot through ${focus}. Do not use pip language or certainty wording.`;
  }
  if (n.includes("inflation hedge")) {
    const focus = n.includes("swing") ? "swing inflation surprise, real-yield conflict, dollar context, delayed Gold hedge behavior, and wide point/dollar distance" : "inflation surprise, real-yield conflict, dollar context, Gold hedge reaction, and point/dollar distance";
    return `Batch 361-380 directive: Teach long Gold inflation hedge through ${focus}. Do not use pip language or simple 'inflation up means Gold up' framing.`;
  }
  if (n.includes("usd weakness")) return "Batch 361-380 directive: Teach long Gold USD weakness through dollar index context, real-yield cross-check, Gold reaction window, macro divergence, safe-haven conflict, and point/dollar distance. Do not use pip language.";
  if (n.includes("spatial arbitrage")) return "Batch 361-380 directive: Teach crypto spatial arbitrage as multi-venue price-location audit. Use venue A/B/C prices, depth, fees, transfer limits, inventory, latency, stale quotes, slippage, and spread percentage. Do not imply every venue gap is executable.";
  if (n.includes("triangular arbitrage") && assetClass === "CRYPTO") return "Batch 361-380 directive: Teach crypto triangular arbitrage through three crypto pairs, synchronized bid/ask quotes, implied cross rate, execution sequence, fees, depth, latency, stale quote trap, and spread percentage. Do not use pip language.";
  if (n.includes("cross-exchange market making")) return "Batch 361-380 directive: Teach crypto cross-exchange market making through quotes on two venues, inventory on both venues, spread percentage, queue depth, hedge leg, latency, adverse selection, and withdrawal/transfer limits. Avoid risk-free spread language.";
  if (n.includes("latency market making")) return "Batch 361-380 directive: Teach crypto latency market making as queue and stale-quote risk audit. Use bid/ask ladder, quote age, queue position, inventory skew, cancel/replace delay, toxic flow, depth, slippage, and spread percentage.";
  if (n.includes("statistical arbitrage basket")) return "Batch 361-380 directive: Teach crypto statistical arbitrage basket through basket construction, z-score spread, rolling correlation, cointegration check, rebalance drift, correlation-break trap, depth, slippage, and spread percentage.";
  if (n.includes("high-frequency market making")) return "Batch 361-380 directive: Teach Forex high-frequency market making as execution-quality audit. Use bid/ask quotes, queue priority, inventory skew, adverse selection, latency, active sessions, spread, and pip distance. Avoid live-order instruction wording.";
  if (n.includes("cointegration basket trading")) return "Batch 361-380 directive: Teach crypto cointegration basket trading through basket legs, hedge weights, stationarity check, spread z-score, convergence path, relationship-break trap, depth, slippage, and spread percentage.";

  if (n.includes("trend + volume confirmation") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m Gold trend leg, relative volume expansion, body-close quality, fast exhaustion trap, and compact point/dollar distance" : n.includes("swing") ? "1H/4H Gold trend leg, multi-candle volume participation, patient pullback, late-volume exhaustion trap, and wider point/dollar distance" : "Gold trend structure, relative volume expansion, candle close quality, pullback hold, volume-spike trap, and point/dollar distance";
    return `Batch 341-360 directive: Teach this Gold trend plus volume version through ${focus}. Keep base, intraday, and swing versions distinct. Never use pip language.`;
  }
  if (n.includes("moving average crossover bot")) return "Batch 341-360 directive: Teach Forex moving-average crossover bot as automation audit, not autopilot. Use fast/slow moving averages, crossover point, higher-timeframe filter, spread, sessions, pip distance, whipsaw, lag, parameter drift, and manual review.";
  if (n.includes("protective put hedging")) return "Batch 341-360 directive: Teach crypto protective put hedging as portfolio insurance simulation. Use spot holding, long put, strike, expiry, premium paid, downside floor, upside participation, IV crush, liquidity depth, slippage, and spread percentage. Do not promise complete protection.";
  if (n.includes("turtle trading system")) return "Batch 341-360 directive: Teach Forex Turtle system as Donchian channel breakout with N-period high/low, breakout close, ATR-style unit sizing only as context, add-on restraint, failed breakout back inside, spread, sessions, and pip distance. Keep it channel-based.";
  if (n.includes("covered call income")) return "Batch 341-360 directive: Teach crypto covered call as spot holding plus short call risk study. Use spot leg, short call strike/expiry, premium received, upside cap, assignment risk, IV change, liquidity depth, slippage, and spread percentage. Avoid income certainty.";
  if (n.includes("real yield decline") && assetClass === "GOLD") {
    const focus = n.includes("swing") ? "1H/4H or daily Gold reaction to falling real yields, TIPS trend, delayed confirmation, broad macro invalidation, and point/dollar distance" : "falling US real yields, TIPS reference, Gold reaction window, macro divergence, inflation/US-dollar context, and point/dollar distance";
    return `Batch 341-360 directive: Teach long Gold real-yield decline through ${focus}. Do not use pip language or simple indicator framing.`;
  }
  if (n.includes("real yield rise") && assetClass === "GOLD") {
    const focus = n.includes("swing") ? "1H/4H or daily Gold pressure during rising real yields, TIPS trend, delayed macro response, broad invalidation, and point/dollar distance" : "rising US real yields, TIPS reference, Gold pressure window, macro divergence, US-dollar context, and point/dollar distance";
    return `Batch 341-360 directive: Teach short Gold real-yield rise through ${focus}. Do not use pip language or simple indicator framing.`;
  }
  if (n.includes("channel breakout system")) return "Batch 341-360 directive: Teach Forex channel breakout system through upper/lower channel boundaries, repeated touches, body-close breakout, retest acceptance, invalidation back inside channel, spread, sessions, and pip distance. Keep it distinct from Donchian and Keltner.";
  if (n.includes("butterfly spread")) return "Batch 341-360 directive: Teach crypto butterfly spread as limited-risk options structure. Use long/short option wings, body strikes, same expiry, max-risk premium, central price zone, IV sensitivity, liquidity depth, slippage, and spread percentage.";
  if (n.includes("mean reversion algorithm") && n.includes("bollinger")) return "Batch 341-360 directive: Teach Forex Bollinger mean-reversion algorithm through upper/middle/lower Bollinger Bands, range context, close back inside, mean path, failed continuation trap, spread, sessions, and pip distance. Do not frame it as breakout.";
  if (n.includes("iron condor")) return "Batch 341-360 directive: Teach crypto iron condor as defined-range options risk study. Use short call spread, short put spread, wings, premium received, range body, margin, breakout/gap risk, liquidity depth, slippage, and spread percentage.";
  if (n.includes("gamma tilt")) return "Batch 341-360 directive: Teach crypto gamma tilt as an options exposure-bias audit. Use net gamma by strike, dealer/portfolio hedge pressure, spot distance from strike cluster, IV change, hedge cost, liquidity depth, slippage, and spread percentage. Keep it distinct from gamma scalping.";
  if (n.includes("statistical arbitrage") && n.includes("pairs algorithm")) return "Batch 341-360 directive: Teach Forex stat-arb pairs algorithm through pair selection, spread/z-score, rolling correlation, cointegration check, reversion path, correlation break, spread, sessions, and pip distance. It is not discretionary pair bias.";
  if (n.includes("genetic algorithm parameter")) return "Batch 341-360 directive: Teach Forex genetic algorithm parameter optimisation as model-risk audit. Use parameter population, fitness metric, train/test split, walk-forward check, overfitting trap, regime shift, spread, sessions, and pip distance. Avoid black-box certainty.";
  if (n.includes("liquidation cascade trigger")) return "Batch 341-360 directive: Teach crypto liquidation cascade trigger as derivatives-risk audit. Use leverage build-up, estimated liquidation bands, price approach, forced liquidation displacement, open-interest change, venue depth, slippage, and spread percentage. Do not present it as a live squeeze instruction.";
  if (n.includes("cross-exchange arbitrage")) return "Batch 341-360 directive: Teach crypto cross-exchange arbitrage as venue-price consistency audit. Use exchange A/B prices, transfer time, fees, withdrawal limits, inventory on both venues, latency, depth, slippage, stale quote trap, and spread percentage. Do not imply every gap is executable.";
  if (n.includes("price channel break") && n.includes("keltner") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m Keltner channel, fast close outside the ATR envelope, quick retest, wick fakeout, and compact point/dollar distance" : n.includes("swing") ? "1H/4H Keltner channel, sustained close outside the ATR envelope, patient retest, broader failure back inside, and wider point/dollar distance" : "Keltner EMA midline, ATR channel boundary, close outside the envelope, retest acceptance, failed close back inside, and point/dollar distance";
    return `Batch 321-340 directive: Teach this Gold Keltner channel break through ${focus}. Keep the base, intraday, and swing versions distinct. Never use pip language.`;
  }
  if (n.includes("calendar spread")) return "Batch 321-340 directive: Teach crypto calendar spread futures roll as a derivatives term-structure audit. Use near and far futures, expiry dates, roll yield, basis curve, fees, margin, borrow or collateral constraints, venue depth, convergence or roll slippage, and spread percentage. Do not imply the spread must converge smoothly.";
  if (n.includes("relative value currency basket")) return "Batch 321-340 directive: Teach Forex relative value currency basket as a portfolio/correlation lesson. Use currency strength inputs, basket weights, long/short currency legs, correlation overlap, rebalancing, active sessions, spread, pip distance, and concentration risk. It is not one-pair trend following.";
  if (n.includes("perpetual funding rate arbitrage")) return "Batch 321-340 directive: Teach crypto perpetual funding arbitrage as matched spot/perpetual exposure with funding interval, basis, fees, collateral, borrow, liquidation buffer, venue depth, slippage, and spread percentage. Keep it distinct from generic funding-rate direction and do not present it as risk-free.";
  if (n.includes("yield curve arbitrage")) return "Batch 321-340 directive: Teach FX forward yield-curve arbitrage with spot rate, forward points, rate curve nodes, maturity mismatch, hedge timing, transaction costs, counterparty/capital constraints, spread, sessions, and pip or forward-point distance. It is a curve audit, not a free carry claim.";
  if (n.includes("order anticipation")) return "Batch 321-340 directive: Reframe Forex order anticipation/front-running as an ethics and execution-risk audit, not instructions to trade ahead of client orders. Teach public footprint clues, broker/venue limitations, compliance boundary, spoofing risk, failed anticipation, spread, sessions, and pip distance.";
  if (n.includes("gamma scalping")) return "Batch 321-340 directive: Teach crypto gamma scalping as an options-hedging simulation. Use option position, delta hedge line, gamma/theta balance, re-hedge intervals, fees, slippage, IV change, liquidity depth, and spread percentage. Do not imply constant hedging creates guaranteed gains.";
  if (n.includes("liquidity provision with vwap/twap")) return "Batch 321-340 directive: Teach Forex liquidity provision with VWAP/TWAP algorithms as an execution audit. Use volume curve, time slices, bid/ask spread, fill quality, inventory, adverse selection, active sessions, and pip distance. Avoid live-order instruction wording.";
  if (n.includes("volatility skew trade")) return "Batch 321-340 directive: Teach crypto volatility skew through comparable call/put implied volatility, maturity, strike distance, event premium, smile shape, hedge cost, IV normalization, liquidity depth, slippage, and spread percentage. Skew is option demand context, not direct spot direction.";
  if (n.includes("supertrend indicator strategy") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "short-timeframe SuperTrend flip, quick Gold wick trap, chop warning, news volatility, and compact point/dollar distance" : n.includes("swing") ? "higher-timeframe SuperTrend line, sustained Gold trend flip, wide volatility band, late-flip trap, and broad point/dollar distance" : "SuperTrend trailing line, close through the line, volatility band, chop warning, failed flip, and Gold point/dollar distance";
    return `Batch 321-340 directive: Teach this Gold SuperTrend version through ${focus}. Keep the base, intraday, and swing versions distinct. Never use pip language.`;
  }
  if (n.includes("percent of volume")) return "Batch 321-340 directive: Teach Forex POV algorithm as execution pacing. Use target participation rate, live volume estimate, child-order pacing, spread, partial fills, market-impact check, active sessions, and pip distance. This is an execution-quality lesson, not a direction method.";
  if (n.includes("long straddle")) return "Batch 321-340 directive: Teach crypto long straddle as an options volatility study. Use same-expiry call and put, premium paid, implied volatility, breakeven band, move-needed area, theta decay, IV crush, liquidity depth, slippage, and spread percentage. Avoid directional prediction framing.";
  if (n.includes("iceberg detection")) return "Batch 321-340 directive: Teach Forex iceberg detection as an order-flow audit. Use repeated refill at one price, displayed depth, traded volume, absorption, false refill, venue/proxy limitations, active session, spread, and pip distance. Do not claim hidden size as certainty.";
  if (n.includes("short straddle")) return "Batch 321-340 directive: Teach crypto short straddle as a premium-and-risk study. Use same-expiry short call and short put, premium received, breakeven band, margin, volatility expansion, gap risk, liquidity depth, slippage, and spread percentage. Stress that short gamma can expand risk quickly.";
  if (n.includes("liquidity run reversal")) return "Batch 321-340 directive: Teach Forex liquidity run reversal through a prior high/low pool, sweep wick, close back inside, displacement away, failed continuation, session context, spread, and pip distance. Keep it distinct from accepted breakout logic.";
  if (n.includes("put-call parity")) return "Batch 321-340 directive: Teach crypto put-call parity arbitrage as a pricing-consistency audit. Use call, put, spot, strike, expiry, funding/borrow, fees, synthetic forward, actual futures or forward reference, venue depth, exercise style, and spread percentage. Do not imply every parity gap is executable.";
  if (n.includes("miner hashrate")) return "Batch 301-320 directive: Teach crypto miner hashrate as a network-security audit. Use hashrate trend, difficulty adjustment, miner revenue pressure, hashprice, reserves/outflow context, exchange flow only as secondary evidence, price/volume response, depth, slippage, and spread percentage. Hashrate does not give automatic direction.";
  if (n.includes("institutional supply and demand")) return "Batch 301-320 directive: Teach Forex institutional supply/demand zones through prior displacement origin, untested zone boundaries, mitigation, return quality, invalidation beyond the zone, session and spread context, and pip distance. Keep this distinct from generic market supply/demand.";
  if (n.includes("fibonacci retracement confluence") && n.includes("intraday")) return "Batch 301-320 directive: Teach intraday Gold Fibonacci confluence through one completed short-timeframe swing, locked anchors, 38.2/50/61.8 band, compact independent structure, completed reaction, fast invalidation, anchor-change trap, and point/dollar distance. Never use pip language.";
  if (n.includes("fibonacci retracement confluence") && n.includes("swing")) return "Batch 301-320 directive: Teach swing Gold Fibonacci confluence through a completed 1H/4H or daily swing, stable anchors, 38.2/50/61.8 band, higher-timeframe structure, patient reaction, broad invalidation, anchor-change trap, and wider point/dollar distance. Never use pip language.";
  if (n.includes("market making")) return "Batch 301-320 directive: Teach Forex market-making spread capture as an execution and inventory audit. State venue/source, bid/ask quote, spread, fill probability, adverse selection, inventory skew, session liquidity, fees, latency, and pip distance. Do not present spread capture as risk-free.";
  if (n.includes("stake/unstake")) return "Batch 301-320 directive: Teach crypto stake/unstake flow as an on-chain audit. Separate staking deposits, unlock queue, validator exits, liquid staking tokens, exchange destination, waiting period, price/volume response, depth, slippage, and spread percentage. Unstaking is not automatic selling.";
  if (n.includes("peg maintenance")) return "Batch 301-320 directive: Teach Forex peg maintenance as a policy-band scenario. Show official peg or managed band, central-bank intervention history, reserve pressure, forward points, boundary defense, break/repeg cases, session liquidity, spread, and pip distance. A peg can hold longer than a chart pattern.";
  if (n === "market supply/demand") return "Batch 301-320 directive: Teach Forex market supply/demand as plain zone reaction logic. Use clear impulse origin, fresh zone, return path, acceptance or rejection, invalidation beyond the zone, no institutional certainty claim, spread, sessions, and pip distance.";
  if (n.includes("moving average bounce")) return "Batch 301-320 directive: Teach Forex moving-average bounce through trend context, chosen average, first clean pullback, candle reaction, continuation structure, close through the average as failure, spread, sessions, and pip distance. The average is context, not support by itself.";
  if (n.includes("horizontal s/r breakout")) return "Batch 301-320 directive: Teach Forex horizontal support/resistance breakout through a pre-marked level, repeated touches, body close, retest acceptance, failed break back inside, spread, sessions, and pip distance. Keep it pure horizontal structure, not channels or sessions.";
  if (n.includes("round number bounce") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "short-timeframe round number, compact approach, immediate reaction, wick fakeout, fast expiry, and compact point/dollar distance" : n.includes("swing") ? "higher-timeframe round number, broad approach, multi-session reaction, structural hold/failure, and wider point/dollar distance" : "round-number level, approach quality, rejection wick or body response, invalidation through the number, and point/dollar distance";
    return `Batch 301-320 directive: Teach this Gold round-number bounce through ${focus}. Keep base, intraday, and swing versions distinct. Round numbers attract attention but are not support by themselves. Never use pip language.`;
  }
  if (n.includes("fixed fractional sizing")) return "Batch 301-320 directive: Teach Forex fixed fractional sizing as a risk-budget calculation. Use account equity, fixed risk percentage, invalidation distance in pips, pip value, position size, spread/slippage allowance, maximum exposure cap, and simulation-only sizing. No profit-target language.";
  if (n.includes("gas price and activity")) return "Batch 301-320 directive: Teach crypto gas price and activity as a network-demand audit. Separate gas price, transaction count, active addresses, failed transactions, protocol-specific congestion, fee spikes, price/volume response, depth, slippage, and spread percentage. High gas is not automatic bullish demand.";
  if (n.includes("spot-futures basis")) return "Batch 301-320 directive: Teach crypto spot-futures basis through timestamped spot and futures references, basis percentage, time to expiry, funding/fees/borrow, matched notionals, margin, venue depth, convergence and basis-widening traps, slippage, and spread percentage.";
  if (n.includes("triangular arbitrage")) return "Batch 301-320 directive: Teach Forex triangular arbitrage as a cross-rate consistency audit. Use three currency pairs, implied cross, actual cross, transaction costs, bid/ask spread, latency, fill sequence, stale quote trap, and pip distance. Do not imply retail execution can lock every discrepancy.";
  if (n.includes("atr-adjusted volatility sizing")) return "Batch 301-320 directive: Teach Forex ATR-adjusted sizing as a volatility-based position-size calculation. Use ATR window, invalidation distance, risk budget, pip value, size reduction in wider volatility, spread/slippage allowance, and exposure cap. ATR changes size, not direction.";
  if (n.includes("covered interest arbitrage")) return "Batch 301-320 directive: Teach Forex covered interest arbitrage with spot rate, forward rate, interest-rate differential, hedge timing, transaction costs, capital controls, counterparty risk, spread, sessions, and pip/forward-point distance. Covered does not mean risk-free.";
  if (n.includes("reverse basis trade")) return "Batch 301-320 directive: Teach crypto reverse basis through spot/perpetual or futures relationship, negative or inverted basis, funding, borrow and fees, matched exposure, margin, liquidation buffer, venue depth, convergence and squeeze traps, slippage, and spread percentage.";
  if (n.includes("social media sentiment")) return "Batch 281-300 directive: Teach a Forex social-sentiment audit using a fixed Twitter/Reddit source basket, language and bot filters, unique-author breadth, timestamp alignment, score level versus change, macro-calendar context, pair structure, spread, sessions, and pip distance. Social mood is not automatic direction.";
  if (n.includes("whale exchange inflow")) return "Batch 281-300 directive: Teach crypto exchange-inflow distribution with verified entities, internal-transfer filtering, destination venue, deposit-size distribution, concentration versus breadth, historical baseline, later exchange balance and price/volume response, depth, slippage, and spread percentage. Inflow is not automatic selling.";
  if (n.includes("exchange net flow divergence")) return "Batch 281-300 directive: Teach crypto exchange-netflow divergence with entity-adjusted inflow minus outflow, one fixed window, price direction, repeated versus one-off flow, venue coverage, custody migration, divergence resolution, depth, slippage, and spread percentage. Never use pip language.";
  if (n.includes("atr expansion breakout") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m compression, session-relative ATR baseline, compact boundary, outside body close, next-candle hold, fast expiry, and compact point/dollar distance" : n.includes("swing") ? "1H/4H multi-session compression, higher-timeframe ATR baseline, broad boundary, completed close, sustained expansion, patient hold, and wider point/dollar distance" : "pre-marked structure, ATR versus its own baseline, body-close break, multi-candle expansion, return-inside and news-spike traps, and point/dollar distance";
    return `Batch 281-300 directive: Teach this Gold ATR expansion variant through ${focus}. Keep base, intraday, and swing setups, checklists, traps, and visual zones distinct. ATR measures movement size, not direction. Never use pip language.`;
  }
  if (n.includes("sentiment divergence")) return "Batch 281-300 directive: Teach Forex price-versus-sentiment divergence using one named sentiment source, synchronized windows, price swing sequence, sentiment level and change, divergence persistence, completed price resolution, failed-divergence continuation, spread, sessions, and pips. Do not mix COT and retail data as if they were identical.";
  if (n.includes("dormant coin movement")) return "Batch 281-300 directive: Teach Token Age Consumed or dormant-coin movement as a crypto on-chain audit. Show coin age times amount moved, historical percentile, entity labels, exchange versus custody destination, repeated versus one-off movement, price/volume response, false entity-label and churn traps, depth, slippage, and spread percentage. Movement is not automatic selling.";
  if (n.includes("sentiment confirmed breakout")) return "Batch 281-300 directive: Teach a Forex breakout whose price structure leads and a fresh, source-defined sentiment change supplies secondary context. Show pre-marked boundary, body close, synchronized sentiment breadth/change, retest, stale or contrary sentiment trap, spread, sessions, and pip distance. Keep it distinct from price-versus-sentiment divergence.";
  if (n.includes("sentiment & macro combined")) return "Batch 281-300 directive: Teach Forex sentiment/macro confluence with a written macro thesis, two-economy comparison, expectation versus release, one documented sentiment source, agreement and disagreement matrix, pair structure, thesis invalidation, spread, sessions, and pips. Do not count correlated inputs as independent confirmation.";
  if (n.includes("nr7/nr4") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "one intraday NR4/NR7 candle compared with the previous 4/7 candles on the same timeframe, compact high-low box, outside close, immediate hold, expiry, and point/dollar distance" : n.includes("swing") ? "daily NR4/NR7 bar inside higher-timeframe structure, multi-session compression, completed daily close, patient acceptance, broad failure, and wider point/dollar distance" : "correct narrow-range ranking, full candle high-low boundary, no direction forecast, outside body close, return-inside trap, and point/dollar distance";
    return `Batch 281-300 directive: Teach this Gold NR4/NR7 variant through ${focus}. Keep all three setup logics, checklists, traps, and visual zones distinct. Do not use Forex pip language.`;
  }
  if (n.includes("utxo age distribution")) return "Batch 281-300 directive: Teach Bitcoin UTXO age distribution as a stock-versus-flow audit. Separate the age-band share of existing supply from old coins actually moving, use value-weighting where appropriate, identify cohort changes, entity and spent-output context, price/volume comparison, and depth/slippage warnings. Old supply is not automatic selling.";
  if (n.includes("depth of market")) return "Batch 281-300 directive: Teach Forex DOM as a venue-specific execution audit. Explain that spot FX has no single consolidated order book; identify venue/source, bid/ask ladder, displayed depth, additions, cancellations, pulls, absorption, spoofing and feed-coverage limitations, spread, session, and pip distance. Visible size is not guaranteed intent.";
  if (n.includes("wallet clustering")) return "Batch 281-300 directive: Teach crypto wallet clustering as an entity-inference audit using co-spend or transaction heuristics, label confidence, service-wallet and change-address filters, cluster growth, exchange/custody destinations, false-merge and false-split traps, price/volume context, depth, slippage, and spread percentage. A cluster is not automatically one whale.";
  if (n.includes("volume profile trading")) return "Batch 281-300 directive: Teach Forex volume profile with explicit data-source limitations, fixed session or anchored range, volume-at-price histogram, point of control, value area, high-volume nodes, low-volume nodes, profile migration, price acceptance/rejection, spread, sessions, and pips. Do not imply centralized spot-FX volume.";
  if (n.includes("stablecoin supply ratio")) return "Batch 281-300 directive: Teach a crypto stablecoin supply ratio as a transparent numerator/denominator model. Define crypto market capitalization versus stablecoin supply, include/exclude rules, issuance and redemption, exchange versus total supply, trend and percentile, deployment evidence, depeg and double-counting traps, depth, slippage, and spread percentage. Dry powder is not automatic buying.";
  if (n.includes("fibonacci retracement confluence") && assetClass === "GOLD") return "Batch 281-300 directive: Teach Gold Fibonacci retracement as measured swing geometry. Use one completed swing low/high, correct drawing direction, 38.2/50/61.8 reference band, independent structural confluence, completed reaction, anchor-change and level-clustering traps, invalidation beyond the swing, and point/dollar distance. A Fibonacci number alone is not evidence.";
  if (n.includes("miner outflow")) return "Batch 281-300 directive: Teach Bitcoin miner outflow as an on-chain audit with verified miner labels, miner-to-exchange versus internal/custody destinations, historical baseline, miner reserves, production and revenue context, repeated flow, later exchange and price/volume response, label risk, depth, slippage, and spread percentage. Outflow is not automatic selling.";
  if (n.includes("footprint chart strategy")) return "Batch 281-300 directive: Teach Forex footprint charts as venue-specific bid/ask traded-volume and delta analysis. State spot-FX fragmentation, identify data source, price ladder, bid/ask volume, delta, stacked imbalance, absorption, exhaustion, opposite-side invalidation, feed limits, spread, sessions, and pips. Do not confuse displayed DOM orders with executed footprint volume.";
  if (n.includes("commitment of traders")) return "Batch 261-280 directive: Teach Forex COT positioning as a delayed weekly context study. Separate asset-manager or leveraged-fund net position, historical percentile, weekly change, report date versus publication date, price structure, extreme persistence, spread, sessions, and pip distance. An extreme is crowding context, not an automatic reversal.";
  if (n.includes("commercial hedger")) return "Batch 261-280 directive: Teach COT commercial-versus-speculator divergence with clearly named participant groups, comparable net-position series, fixed historical window, weekly change, price confirmation, reporting lag, convergence and persistence cases, spread, sessions, and pip distance. Do not claim commercials always lead price.";
  if (n.includes("retail sentiment contrarian")) return "Batch 261-280 directive: Teach Forex retail sentiment as broker-sample crowding context for a contrarian lesson. Show long/short share, sample limitations, extreme persistence, price structure change, failed contrarian timing, spread, sessions, and pip distance. The ratio alone never activates the lesson.";
  if (n.includes("retail sentiment trend")) return "Batch 261-280 directive: Teach Forex retail sentiment as supporting context during an already established price trend. Require trend structure first, then persistence and change in the broker-sample ratio, late-crowd exhaustion, spread, sessions, and pip distance. Keep setup logic and traps materially different from the contrarian lesson.";
  if (n.includes("options sentiment")) return "Batch 261-280 directive: Teach Forex risk reversals as the implied-volatility difference between comparable calls and puts at the same tenor and delta. Show skew level and change, event premium, pair structure, normalization, spread, sessions, and pip distance. Skew measures option demand and protection cost; it is not direct spot direction.";
  if (n.includes("forex fear & greed")) return "Batch 261-280 directive: Teach a Forex risk-sentiment composite through transparent components such as equities, volatility, yields, credit, and currency breadth. Show component disagreement, extreme persistence, pair-specific structure, normalization, spread, sessions, and pip distance. Do not present the composite as a universal market fact or automatic reversal.";
  if (n.includes("news sentiment analysis")) return "Batch 261-280 directive: Teach Forex news-text analysis as a before/during/after audit. Separate source, timestamp, speaker, sentence context, policy topic, score change, market expectation, first stable close, spread widening, negation or sarcasm error, session, and pip distance. A text score never replaces primary-source reading or price response.";
  if (n.includes("parabolic sar reversal") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "one 5m/15m observation window, prior dot run, completed flip, immediate price hold, rapid whipsaw expiry, and compact point/dollar distance" : n.includes("swing") ? "4H structure, 1H pullback, sustained dot-side change across completed candles, patient hold, mature-trend failure, and wider point/dollar distance" : "dot placement, acceleration behavior, completed flip, price-structure agreement, range whipsaw, and point/dollar distance";
    return `Batch 261-280 directive: Teach this Gold Parabolic SAR reversal through ${focus}. Keep the base, intraday, and swing setups, checklists, traps, and visual zones distinct. Never use pip language and never make a single dot flip sufficient.`;
  }
  if (n.includes("funding & oi combined")) return "Batch 261-280 directive: Teach crypto funding and open interest with a four-quadrant matrix. Compare funding sign and persistence, OI change, price direction, spot/perpetual agreement, crowded versus healthy participation, venue differences, depth, slippage, and spread percentage. Neither funding nor OI determines direction alone. Never use pip language.";
  if (n.includes("funding + basis convergence")) return "Batch 261-280 directive: Teach advanced crypto funding and basis convergence as a matched-leg classroom audit. Define spot, perpetual, dated-futures basis, funding schedule, leg equality, convergence path, fees, borrow, margin, basis widening, venue failure, depth, slippage, and spread percentage. Do not describe it as risk free or use pip language.";
  if (n.includes("crowded short squeeze")) return "Batch 261-280 directive: Teach an advanced crypto short-squeeze mechanism after crowding is established. Show negative funding, elevated OI, spot reclaim, buy-side displacement, short liquidations, OI reduction, continuation versus exhaustion, depth, slippage, and spread percentage. Never anticipate a squeeze from funding alone or use pip language.";
  if (n.includes("liquidation level front-run")) return "Batch 261-280 directive: Turn the strategy name into a risk-audit lesson, not instruction to place orders ahead of estimated liquidations. Show estimate uncertainty, cluster migration, approach behavior, spot/perpetual evidence, sweep-through risk, reclaim or continuation, depth, slippage, and spread percentage. Never use pip language.";
  if (n.includes("reddit sentiment")) return "Batch 261-280 directive: Teach a crypto Reddit sentiment audit with fixed communities, collection window, unique authors, bot/repost filtering, post versus comment weighting, score and breadth, timestamp alignment, price/volume context, brigading and survivorship traps, depth, slippage, and spread percentage. Never use pip language.";
  if (n.includes("whale exchange outflow")) return "Batch 261-280 directive: Teach a crypto exchange-outflow audit with verified wallet labels, internal-transfer filter, entity-adjusted netflow, historical baseline, destination and custody context, repeated versus one-off flow, price/volume response, stale-label risk, depth, slippage, and spread percentage. Outflow is not automatic accumulation. Never use pip language.";
  if (n.includes("bollinger squeeze breakout") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m bandwidth compression, compact structure, outside close, next-candle hold, wick return, expiry, and compact point/dollar distance" : n.includes("swing") ? "1H/4H multi-session compression, broad boundary, completed close, several-candle acceptance, volatility re-expansion, and wider point/dollar distance" : "middle band, upper/lower bands, normalized bandwidth, squeeze sequence, body-close break, return-inside trap, and point/dollar distance";
    return `Batch 261-280 directive: Teach this Gold Bollinger squeeze variant through ${focus}. Keep all three setup logics, checklists, traps, and visual zones distinct. Never use pip language.`;
  }
  if (n.includes("atr expansion breakout") && assetClass === "GOLD") return "Batch 261-280 directive: Teach Gold ATR expansion as volatility measurement after a pre-marked structural compression. Compare current ATR with its own baseline, require a body close beyond structure, show expansion without direction bias, failed return inside, news-distortion check, and Gold point/dollar distance. Keep it distinct from Bollinger bandwidth squeezes and never use pip language.";
  if (n.includes("fx fair value")) return "Batch 241-260 directive: Teach Forex purchasing-power-parity valuation as a slow macro benchmark. Compare consistent price baskets, base year, inflation accumulation, market exchange rate, valuation gap, revision risk, capital-flow divergence, spread, sessions, and pip distance. PPP is context, not a short-term timing tool.";
  if (n.includes("ichimoku cloud breakout") && n.includes("swing") && assetClass === "GOLD") return "Batch 241-260 directive: Teach a 1H/4H Gold Ichimoku breakout using broad Kumo boundaries, cloud thickness, Tenkan/Kijun agreement, forward-cloud direction, completed higher-timeframe close, patient multi-candle retest, inside-cloud invalidation, and point/dollar distance. Keep it materially distinct from base and intraday lessons. Never use pip language.";
  if (n.includes("open interest expansion")) return "Batch 241-260 directive: Teach crypto open-interest expansion as participation analysis: price direction, OI change, spot/perpetual agreement, basis or funding context, healthy versus leveraged expansion, OI rollover, venue disagreement, depth, slippage, and spread percentage. Rising OI does not determine direction by itself. Never use pip language.";
  if (n.includes("political event trading")) return "Batch 241-260 directive: Teach a Forex political-event scenario from event calendar and scenario tree through polling uncertainty, policy channels, pre-event positioning, result versus expectation, first stable close, spread freeze, session context, pip distance, and post-event invalidation. Do not present polling as certainty or instruct pre-event live positioning.";
  if (n.includes("alligator and fractals") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m jaw-teeth-lips separation, fresh compact fractal, body-close break, immediate retest, and fast line-tangle trap" : n.includes("swing") ? "1H/4H jaw-teeth-lips separation, completed swing fractal, patient close, multi-candle retest, and broad line-compression invalidation" : "jaw-teeth-lips order, sleeping versus opening mouth, confirmed five-candle fractal, close beyond the fractal, and line-tangle failure";
    return `Batch 241-260 directive: Teach this Gold Alligator/Fractals variant through ${focus}. Keep all three setup logics, checklists, traps, and visual zones distinct. Use Gold points/dollars and wick behavior, never pip language.`;
  }
  if (n.includes("open interest divergence")) return "Batch 241-260 directive: Teach crypto open-interest divergence by comparing price direction with OI direction across a fixed window. Separate short covering, long liquidation, unsupported price extension, and fresh-position confirmation using spot/perpetual agreement, funding, venue consistency, depth, slippage, and spread percentage. Divergence is a diagnostic, not an automatic reversal. Never use pip language.";
  if (n.includes("seasonal patterns")) return "Batch 241-260 directive: Teach Forex seasonality as a historical calendar tendency. Use a fixed pair, calendar window, multi-year sample, hit rate and dispersion, economic explanation, current macro filter, out-of-sample check, pair structure, spread, sessions, and pip distance. Never imply that a calendar tendency must repeat.";
  if (n.includes("liquidation cluster")) return "Batch 241-260 directive: Teach an advanced crypto liquidation-heatmap audit. Show estimated cluster bands, leverage-side concentration, distance from price, attraction versus rejection, cluster migration, spot/perpetual confirmation, cascade-through trap, depth, slippage, and spread percentage. Heatmaps are estimates, not executable order books. Never use pip language.";
  if (n.includes("terms of trade spread convergence")) return "Batch 241-260 directive: Teach Forex terms-of-trade convergence as a relative macro spread between two economies. Define the export/import price ratios, normalize the two series, measure deviation from a historical band, require evidence that the macro gap is narrowing, verify pair structure, and mark revision, regime, spread, session, and pip risks. Keep it distinct from the directional Terms of Trade Strategy.";
  if (n.includes("liquidation cascade fade")) return "Batch 241-260 directive: Teach an advanced crypto post-cascade stabilization study. Identify forced liquidation, OI collapse, abnormal displacement, venue agreement, spot response, reclaim and stabilization, continuation trap, depth recovery, slippage, and spread percentage. Never catch the first falling candle or use pip language.";
  if (n.includes("safe-haven demand")) return "Batch 241-260 directive: Teach Forex safe-haven demand as an intermarket flow comparison across JPY, CHF, USD, equities, volatility, yields, and pair structure. Separate broad risk-off confirmation from one headline spike, identify haven divergence and unwind, and include spread, session context, and pip distance.";
  if (n.includes("adx + dmi") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m +DI/-DI direction, ADX slope, compact price break, quick follow-through, and fast crossover churn" : n.includes("swing") ? "1H/4H +DI/-DI direction, sustained ADX rise, broad swing structure, patient pullback, and late-trend exhaustion" : "+DI/-DI direction, ADX strength versus direction, rising versus falling ADX, price-structure agreement, and low-ADX chop";
    return `Batch 241-260 directive: Teach this Gold ADX/DMI variant through ${focus}. Keep all three setup logics, checklists, traps, and visual zones distinct. Use Gold points/dollars, never pip language.`;
  }
  if (n.includes("social sentiment index")) return "Batch 241-260 directive: Teach a crypto social-sentiment composite audit using a fixed source basket, bot/duplicate filtering, normalized polarity, source breadth, change versus level, price/volume context, manipulation and stale-data traps, depth, slippage, and spread percentage. An extreme score is not an automatic reversal. Never use pip language.";
  if (n.includes("risk-on carry basket")) return "Batch 241-260 directive: Teach a Forex risk-on carry basket through expected rate carry, basket construction, equal risk contribution, cross-pair correlation, risk-on confirmation, JPY funding exposure, drawdown concentration, regime reversal, spread, sessions, and pip distance. Keep it distinct from a single-pair carry trade.";
  if (n.includes("twitter influencer")) return "Batch 241-260 directive: Teach a crypto influencer-activity audit, not a copying lesson. Use a fixed account list, identity and disclosure checks, original-post versus repost timing, bot amplification, token liquidity, price/volume before the post, delayed follower reaction, deletion or promotion trap, depth, slippage, and spread percentage. Never use pip language.";
  if (n.includes("fear & greed")) return "Batch 241-260 directive: Teach the crypto Fear & Greed index as a slow composite crowding measure. Show component freshness, persistence at extremes, price structure, volatility context, normalization, trend-persistence trap, depth, slippage, and spread percentage. Extreme fear or greed is context, not an automatic reversal. Never use pip language.";
  if (n.includes("news trading on economic releases")) return "Batch 221-240 directive: Teach Forex economic-release study as a before/during/after protocol. Show consensus versus actual, prior revision, pre-release range, spread widening, first stable close, whipsaw, event invalidation, session context, and pip distance. Do not give live straddle-order instructions.";
  if (n.includes("flag and pennant") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m impulse, compact contraction, immediate breakout/retest, and fast wick return" : n.includes("swing") ? "1H/4H flagpole, broad controlled pause, completed close, patient retest, and wider invalidation" : "clear flagpole, controlled flag or pennant, breakout close, and failed return inside";
    return `Batch 221-240 directive: Teach this Gold Flag/Pennant variant through ${focus}. Keep setup logic, checklist, traps, and visual zones distinct from the other variants. Use points/dollars and wick behavior, never pip language.`;
  }
  if (n.includes("on-chain treasury")) return "Batch 221-240 directive: Teach a crypto treasury-flow audit using labeled treasury wallets, inflow source, outflow destination, token and stablecoin composition, runway or obligations, exchange transfers, governance authorization, data freshness, liquidity depth, slippage, and spread percentage. A transfer is context, not direction. Do not use pip language.";
  if (n.includes("central bank divergence")) return "Batch 221-240 directive: Teach Forex central-bank divergence through two policy paths, market-implied expectations, statement versus decision, repricing gap, matching pair structure, convergence risk, spread, session context, and pip distance. Keep it distinct from carry and inflation-only lessons.";
  if (n.includes("narrative sentiment index")) return "Batch 221-240 directive: Teach a crypto narrative-sentiment audit with source basket, normalized score, bot/duplicate filtering, sentiment breadth, price and volume context, extreme/cooling state, stale narrative trap, liquidity depth, slippage, and spread percentage. Sentiment measures crowding; it does not predict by itself. Do not use pip language.";
  if (n.includes("triangle breakout") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m converging boundaries, compact apex, close before the final apex, immediate retest, and wick trap" : n.includes("swing") ? "1H/4H converging swing boundaries, patient compression, completed higher-timeframe close, multi-candle retest, and wider distance" : "upper/lower converging boundaries, at least two touches per side, apex, body close, retest, and failed return inside";
    return `Batch 221-240 directive: Teach this Gold Triangle Breakout variant through ${focus}. Separate base, intraday, and swing setup logic and traps. Use points/dollars and wick behavior, never pip language.`;
  }
  if (n.includes("commodity currency correlation")) return "Batch 221-240 directive: Teach Forex commodity-currency correlation with one named commodity and related currency pair, synchronized returns, rolling correlation, lead/lag, terms-of-trade context, pair structure, decoupling, spread, sessions, and pip distance. Correlation can change and does not prove causation.";
  if (n.includes("regulatory event trading")) return "Batch 221-240 directive: Teach a crypto regulatory-event scenario from primary-source publication through scope, jurisdiction, affected entities, effective date, implementation uncertainty, pre-event crowding, first stable reaction, venue fragmentation, liquidity depth, slippage, and spread percentage. Do not trade headlines or use pip language.";
  if (n.includes("terms of trade")) return "Batch 221-240 directive: Teach Forex terms of trade as export-price versus import-price change. Compare two economies, identify the dominant export basket, separate temporary commodity spikes from persistent improvement, verify pair structure, mark data lag, spread, session context, and pip distance.";
  if (n.includes("inflation differential")) return "Batch 221-240 directive: Teach Forex inflation differential through headline versus core inflation, surprise versus expectation, central-bank reaction function, real-rate implication, pair structure, convergence risk, spread, session context, and pip distance. Inflation alone does not determine currency direction.";
  if (n.includes("funding rate arbitrage")) return "Batch 221-240 directive: Teach advanced crypto funding arbitrage as a hedged spot-perpetual classroom model. Show equalized legs, funding received/paid, basis, borrow and taker fees, rebalance drift, liquidation buffer, venue/counterparty risk, depth, slippage, and spread percentage. Do not imply risk-free returns or use pip language.";
  if (n.includes("funding rate mean reversion")) return "Batch 221-240 directive: Teach crypto funding mean reversion as a crowding audit. Show persistent extreme funding, price extension, open-interest context, normalization zone, squeeze/continued-extreme trap, liquidity depth, slippage, and spread percentage. One extreme print is not enough. Do not use pip language.";
  if (n.includes("funding rate momentum")) return "Batch 221-240 directive: Teach crypto funding momentum through funding slope and persistence, price direction, open-interest participation, spot-perp agreement, acceleration versus saturation, rollover invalidation, depth, slippage, and spread percentage. Keep it distinct from mean reversion and hedged arbitrage. Do not use pip language.";
  if (n.includes("ichimoku cloud breakout") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m thin/thick cloud, short-timeframe close, line agreement, immediate retest, and wick return" : "completed Gold close beyond the cloud, cloud thickness, Tenkan/Kijun agreement, forward cloud, retest, and point/dollar invalidation";
    return `Batch 221-240 directive: Teach this Gold Ichimoku breakout through ${focus}. Keep base and intraday lessons materially distinct. Do not use pip language.`;
  }
  if (n.includes("gdp growth differential")) return "Batch 221-240 directive: Teach Forex GDP growth differential through comparable real-growth data, actual versus forecast, revisions, growth composition, policy implication, pair structure, convergence risk, spread, session context, and pip distance. Do not compare nominal and real growth as if they were the same.";
  if (n.includes("balance of payments")) return "Batch 221-240 directive: Teach Forex balance of payments through current account, capital/financial account, financing quality, reserve changes, persistent versus one-off flows, pair structure, data lag, reversal risk, spread, session context, and pip distance.";
  if (n.includes("harmonic patterns")) return "Batch 201-220 directive: Teach Forex harmonic geometry with X-A-B-C-D swing points, pattern-specific Fibonacci ratio tolerances, a potential reversal zone rather than one exact price, close-based reaction evidence, pattern invalidation beyond D, spread, session context, and pip distance. Explain that a near-match is not a valid Gartley, Butterfly, or Bat.";
  if (n.includes("elliott wave")) return "Batch 201-220 directive: Teach Elliott Wave as a structured counting exercise, not a prediction. Show a five-wave impulse, A-B-C correction, Wave 2 and Wave 4 overlap rules, alternate count, invalidation, Forex spread, session context, and pip distance. Keep it distinct from harmonic ratio geometry.";
  if (n.includes("candlestick cluster confluence")) return "Batch 201-220 directive: Keep this pure Level 1. Teach two or more completed candle clues at one horizontal support or resistance area, body/wick/close agreement, cluster boundary, opposing close invalidation, spread and pip distance. Do not use indicators, sessions, macro concepts, liquidity sweeps, order blocks, or advanced volatility language.";
  if (n.includes("multi-timeframe candlestick")) return "Batch 201-220 directive: Teach top-down Forex candle confirmation: higher-timeframe location, middle-timeframe structure, lower-timeframe completed candle clue, timeframe disagreement, invalidation, spread, session context, and pip distance. Do not turn this into an indicator lesson.";
  if (n.includes("double top/bottom") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "5m/15m neckline close, fast wick reclaim, and compact point/dollar distance" : "1H/4H swing completion, patient neckline acceptance, and wider point/dollar distance";
    return `Batch 201-220 directive: Teach the Gold Double Top/Bottom variant through ${focus}. Keep its setup logic, trap, checklist, and visual zones distinct from the existing base Gold lesson. Do not use pip language.`;
  }
  if (n.includes("cup and handle") && assetClass === "GOLD") {
    const focus = n.includes("intraday") ? "short-timeframe rounded recovery, shallow handle, immediate close/retest, and wick trap" : n.includes("swing") ? "broad 1H/4H rounded base, patient handle, completed breakout close, and multi-candle retest" : "pattern anatomy: two rim tests, rounded cup, controlled handle, breakout close, and failed handle breakdown";
    return `Batch 201-220 directive: Teach this Gold Cup and Handle variant through ${focus}. Use Gold points/dollars and wick behavior. Keep all three variants materially different. Do not use pip language.`;
  }
  if (n.includes("flag and pennant") && assetClass === "GOLD") return "Batch 201-220 directive: Teach a Gold continuation pattern with a clear flagpole impulse, either parallel flag or converging pennant boundaries, contraction, breakout close, failed break back inside, wick behavior, and point/dollar distance. Do not use pip language.";
  if (n.includes("supply shock") || n.includes("burn event")) return "Batch 201-220 directive: Teach a crypto supply-event audit: verify the burn mechanism on-chain, compare gross versus net supply change, scheduled versus surprise event, pre-event crowding, post-event absorption, market-wide context, liquidity depth, slippage, and spread percentage. A burn alone does not prove demand. Do not use pip language.";
  if (n.includes("vesting cliff")) return "Batch 201-220 directive: Teach a crypto vesting-cliff scenario audit: unlock date, amount as a percentage of circulating supply, recipient type, transferability, exchange inflow evidence, pre-event positioning, post-event absorption, liquidity depth, slippage, and spread percentage. Do not assume every cliff causes a decline. Do not use pip language.";
  if (n.includes("macro liquidity correlation")) return "Batch 201-220 directive: Teach crypto macro-liquidity correlation as a changing relationship. Compare a broad liquidity proxy with crypto structure, lead/lag windows, rolling correlation, DXY/risk context, decoupling, liquidity depth, slippage, and spread percentage. Correlation is evidence, not causation. Do not use pip language.";
  if (n === "carry trade") return "Batch 201-220 directive: Teach Forex carry through the policy-rate differential, expected persistence, forward/swap cost, spot trend, event risk, funding reversal, spread, session context, and pip distance. Keep it distinct from parity theory and short-term differential momentum.";
  if (n.includes("uncovered interest rate parity")) return "Batch 201-220 directive: Teach UIRP as a classroom comparison between the interest-rate differential and the later spot-currency change. Show expected depreciation/appreciation, observation window, parity gap, model failure, spread, and pip distance. Do not present UIRP as a direct entry rule.";
  if (n.includes("interest rate differential momentum")) return "Batch 201-220 directive: Teach Forex rate-differential momentum through a widening or narrowing policy path, repricing in yield expectations, matching pair structure, event confirmation, reversal of the differential, spread, session context, and pip distance. Keep it distinct from passive carry and UIRP theory.";
  if (n.includes("correlation & beta")) return "Batch 201-220 directive: Teach crypto correlation and beta as two different measurements. Show rolling correlation, beta slope, benchmark choice, regime change, outlier risk, duplicated exposure, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("network adoption")) return "Batch 201-220 directive: Teach a crypto network-adoption audit using active users/addresses, retained activity, transaction or fee quality, concentration, incentive distortion, price-activity divergence, data freshness, liquidity depth, slippage, and spread percentage. Do not use fake exact claims or pip language.";
  if (n.includes("developer activity")) return "Batch 201-220 directive: Teach a crypto developer-activity audit using active contributors, release cadence, code-quality context, repository relevance, copied/forked activity, price-development lag, data freshness, liquidity depth, slippage, and spread percentage. Commit count alone is not adoption. Do not use pip language.";
  if (n.includes("governance proposal")) return "Batch 201-220 directive: Teach a crypto governance-event audit from proposal publication through quorum, vote outcome, executable change, implementation delay, economic impact, delegate concentration, pre-vote crowding, post-vote absorption, liquidity depth, slippage, and spread percentage. Sentiment alone is not proof. Do not use pip language.";
  if (n.includes("inside bar breakout") && assetClass === "GOLD") {
    const frame = n.includes("intraday") ? "5m/15m" : n.includes("swing") ? "1H/4H" : "clean multi-timeframe";
    return `Batch 181-200 directive: Build this as a Gold inside-bar compression lesson on a ${frame} chart. Teach the mother-bar high/low, the smaller inside candle, breakout close, failed break back inside, Gold wick behavior, and point/dollar distance. Keep base, intraday, and swing setup logic and traps distinct. Do not use pip language.`;
  }
  if (n.includes("open interest confirmation")) {
    return "Batch 181-200 directive: Build this as a crypto derivatives confirmation audit. Teach price direction versus rising/falling open interest, new-position participation, liquidation/crowding risk, venue disagreement, liquidity depth, slippage, and spread percentage. Open interest confirms participation; it does not predict direction alone. Do not use pip language.";
  }
  if (n.includes("rectangle (range) pattern")) {
    return "Batch 181-200 directive: Build this as a Forex rectangle range lesson. Teach horizontal upper/lower boundaries, repeated reactions, range midpoint, breakout close, retest, failed break back inside, normal spread, session context, and pip distance.";
  }
  if (n.includes("trendline bounce")) {
    return "Batch 181-200 directive: Build this as a Forex trendline reaction lesson. Require multiple prior touches, a clean reaction candle, horizontal structure agreement, failed trendline hold, normal spread, session context, and pip distance. Explain that a trendline is a visual guide, not an automatic support wall.";
  }
  if (n.includes("bull/bear market condition adjustment")) {
    return "Batch 181-200 directive: Build this as crypto branching logic for bull, bear, and range conditions. Teach how the same setup is accepted, reduced, or rejected based on higher-timeframe structure, volatility, liquidity depth, and spread percentage. Include regime-transition and late-classification traps. Do not use pip language.";
  }
  if (n.includes("break of structure")) {
    return "Batch 181-200 directive: Build this as Forex Break of Structure education. Distinguish continuation BOS from a Market Structure Shift: identify the protected swing, require a body close beyond the prior swing, mark displacement quality, retest, false wick break, normal spread, session context, and pip distance. Do not add order blocks or FVGs.";
  }
  if (n.includes("narrative rotation")) {
    return "Batch 181-200 directive: Build this as a crypto narrative-rotation audit. Teach relative strength moving between sectors, BTC/market context, breadth, catalyst freshness, liquidity migration, late-crowding trap, slippage, and spread percentage. Do not treat social excitement as proof. Do not use pip language.";
  }
  if (n.includes("order block trading")) {
    return "Batch 181-200 directive: Build this as Level 3 Forex Order Block education. Teach the last opposing candle before displacement, protected swing context, open/high/low boundary, 50% mean threshold, mitigation retest, invalidation through the block, failed block trap, normal spread, and pip distance. Do not collapse it into generic support/resistance.";
  }
  if (n.includes("head and shoulders") && assetClass === "GOLD") {
    const frame = n.includes("intraday") ? "5m/15m" : n.includes("swing") ? "1H/4H" : "clean multi-timeframe";
    return `Batch 181-200 directive: Build this as a Gold head-and-shoulders lesson on a ${frame} chart. Teach left shoulder, head, right shoulder, neckline, neckline close, failed reclaim, Gold wick asymmetry, and point/dollar distance. Differentiate base, intraday, and swing examples. Do not use pip language.`;
  }
  if (n.includes("ecosystem growth")) {
    return "Batch 181-200 directive: Build this as a crypto ecosystem-growth audit. Teach active users/addresses, developer or application activity, fee/revenue trend, liquidity growth, valuation lag, data-quality warning, concentration risk, and spread percentage. Use relative or simulated metrics, not fake exact claims. Do not use pip language.";
  }
  if (n.includes("tokenomics supply-demand")) {
    return "Batch 181-200 directive: Build this as a crypto tokenomics supply-demand audit. Teach circulating versus maximum supply, emission schedule, burn or sink mechanics, staking lockups, holder concentration, unlock pressure, demand-use evidence, liquidity depth, and spread percentage. Do not use pip language.";
  }
  if (n.includes("liquidity sweep")) {
    return "Batch 181-200 directive: Build this as a Forex liquidity-sweep lesson. Teach prior equal highs/lows or a clear swing boundary, wick beyond the level, close back inside, displacement away, failed sweep continuation, spread, session context, and pip distance. Keep it distinct from a valid breakout.";
  }
  if (n.includes("quasimodo")) {
    return "Batch 181-200 directive: Build this as a Forex Quasimodo reversal pattern. Teach the final higher high/lower low, break of the opposing swing, left-shoulder reaction level, return to that level, invalidation beyond the extreme, malformed-pattern trap, spread, session context, and pip distance. Keep it separate from head-and-shoulders and order-block lessons.";
  }
  if (n.includes("token unlock event")) {
    return "Batch 181-200 directive: Build this as a crypto token-unlock event audit. Teach unlock calendar, unlocked amount as a percentage of circulating supply, recipient category, vesting versus immediate liquidity, pre-event crowding, post-event absorption, thin-depth/slippage risk, and spread percentage. Do not imply every unlock causes a decline. Do not use pip language.";
  }
  if (n.includes("double top") && assetClass === "GOLD") {
    return "Batch 181-200 directive: Build this as a Gold double-top/double-bottom lesson. Teach two comparable peaks or troughs, neckline, neckline close, failed reclaim, Gold wick behavior, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("halving cycle")) {
    return "Batch 181-200 directive: Build this as a crypto halving-cycle scenario audit. Teach issuance-rate change, pre-event anticipation, post-event supply adjustment, miner pressure, liquidity and macro context, cycle-timing uncertainty, crowding trap, and spread percentage. Do not present the cycle as a guaranteed price path. Do not use pip language.";
  }

  if (n.includes("support/resistance bounce") && assetClass === "GOLD") {
    return "Batch 161-180 directive: Build this as a Gold support/resistance bounce lesson. Teach visible level history, wick rejection, close away from the level, failed bounce through the level, swing/intraday timeframe if named, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("engulfing pattern") && assetClass === "GOLD") {
    return "Batch 161-180 directive: Build this as a Gold engulfing-candle lesson. Teach prior candle range, engulfing body, support/resistance context, wick behavior, follow-up close, failed engulfing trap, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("pin bar reversal") && assetClass === "GOLD") {
    return "Batch 161-180 directive: Build this as a Gold pin-bar rejection lesson. Teach long wick, small body, close location, support/resistance context, follow-up close, failed wick trap, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("triple top") || n.includes("triple bottom")) {
    return "Batch 161-180 directive: Build this as a Forex triple top/bottom pattern lesson. Teach three comparable peaks or troughs, neckline, close through neckline, failed reclaim, spread, sessions, and pip distance.";
  }
  if (n.includes("cup and handle")) {
    return "Batch 161-180 directive: Build this as a Forex cup-and-handle pattern lesson. Teach cup rim, rounded base, handle pullback, breakout close, failed handle breakdown, retest, spread, sessions, and pip distance.";
  }
  if (n.includes("ascending triangle pattern") || n.includes("descending triangle pattern") || n.includes("symmetrical triangle pattern")) {
    return "Batch 161-180 directive: Build this as a Forex triangle pattern lesson. Teach pattern boundaries, compression, breakout or breakdown close, retest, failed break back inside, spread, sessions, and pip distance.";
  }
  if (n.includes("flag & pennant") || n.includes("flag and pennant")) {
    return "Batch 161-180 directive: Build this as a Forex flag/pennant continuation pattern lesson. Teach flagpole impulse, tight pause, boundary break, retest, failed continuation trap, spread, sessions, and pip distance.";
  }
  if (n.includes("wedge patterns")) {
    return "Batch 161-180 directive: Build this as a Forex wedge pattern lesson. Teach rising/falling wedge boundaries, compression, breakout or breakdown close, failed break back inside, spread, sessions, and pip distance.";
  }
  if (n.includes("twap execution") || n.includes("vwap execution") || n.includes("iceberg orders")) {
    return "Batch 161-180 directive: Build this as a crypto execution microstructure lesson. Teach venue depth, spread percentage, slippage, schedule or volume-curve participation for TWAP/VWAP, hidden-size/refill behavior for iceberg orders, and thin-depth traps. Do not use pip language or live-order instructions.";
  }
  if (n.includes("multi-timeframe trend confluence")) {
    return "Batch 161-180 directive: Build this as a crypto multi-timeframe confluence lesson. Teach higher-timeframe direction, mid-timeframe structure, lower-timeframe trigger, timeframe conflict trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("volume confirmation on trend")) {
    return "Batch 161-180 directive: Build this as a crypto trend-volume trigger lesson. Teach trend structure, relative volume expansion, close quality, false volume burst trap, liquidity depth, slippage, and spread percentage. Avoid the restricted word in learner-facing prose; use trigger, clue, or participation instead.";
  }
  if (n.includes("funding-adjusted breakout")) {
    return "Batch 161-180 directive: Build this as a crypto funding-adjusted breakout lesson. Teach breakout boundary, funding rate context, perp crowding, breakout close, failed break back inside, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }

  if (n.includes("volatility targeting strategy")) {
    return "Batch 161-180 directive: Build this as a crypto volatility-targeting risk lesson. Teach realized volatility estimate, target risk band, position-size adjustment, high-volatility cutback, liquidity depth, slippage, and spread percentage. Do not use pip language or live-account instructions.";
  }
  if (n.includes("on-chain + technical confluence")) {
    return "Batch 161-180 directive: Build this as a crypto confluence audit. Teach on-chain flow, technical structure, disagreement check, stale on-chain trap, exchange liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("funding + social sentiment filter")) {
    return "Batch 161-180 directive: Build this as a crypto funding-and-sentiment filter audit. Teach funding pressure, social crowding, price structure, disagreement filter, crowded-position trap, liquidity depth, slippage, and spread percentage. Do not route this to a moving-average visual.";
  }
  if (n.includes("multi-factor quant scoring")) {
    return "Batch 161-180 directive: Build this as a crypto multi-factor scoring audit. Teach factor inputs, weighted score, threshold band, validation sample, overfit factor trap, liquidity depth, slippage, and spread percentage. Avoid certainty wording.";
  }
  if (n.includes("technical + fundamental confirmation")) {
    return "Batch 161-180 directive: Build this as a crypto technical-plus-fundamental confluence lesson. Teach chart structure, network/fundamental check, disagreement condition, narrative trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("funding + basis + oi composite")) {
    return "Batch 161-180 directive: Build this as a crypto derivatives composite audit. Teach funding rate, basis spread, open interest, liquidation-risk area, crowded leverage trap, venue depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("on-chain + sentiment contrarian")) {
    return "Batch 161-180 directive: Build this as a crypto contrarian audit. Teach on-chain activity, sentiment extreme, price location, failed contrarian trap, exchange liquidity depth, slippage, and spread percentage. Avoid prediction language.";
  }
  if (n.includes("technical + options skew confirmation")) {
    return "Batch 161-180 directive: Build this as a crypto options-skew confirmation audit. Teach technical level, options skew, implied-volatility context, skew disagreement trap, venue depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("fixed fraction position sizing")) {
    return "Batch 161-180 directive: Build this as crypto fixed-fraction sizing education. Teach risk percentage, invalidation distance, position-size calculation, drawdown restraint, liquidity depth, slippage, and spread percentage. Do not use pip language or account-growth promises.";
  }
  if (n.includes("kelly criterion position sizing")) {
    return "Batch 161-180 directive: Build this as crypto Kelly sizing education. Teach win-rate estimate, payoff estimate, fractional Kelly cap, overbetting trap, sample-size warning, liquidity depth, slippage, and spread percentage.";
  }
  if (n.includes("volatility adjusted position sizing")) {
    return "Batch 161-180 directive: Build this as crypto volatility-adjusted sizing education. Teach ATR or realized-volatility distance, size reduction during high volatility, volatility expansion trap, liquidity depth, slippage, and spread percentage.";
  }
  if (n.includes("stop-loss placement under support")) {
    return "Batch 161-180 directive: Build this as crypto protective-invalidation placement under support. Teach support shelf, invalidation buffer, wick-sweep trap, slippage risk, liquidity depth, and spread percentage. Avoid live-order wording and pip language.";
  }
  if (n.includes("trailing stop strategy")) {
    return "Batch 161-180 directive: Build this as crypto trailing-invalidation architecture. Teach trailing reference, volatility buffer, step update, premature-tightening trap, liquidity depth, slippage, and spread percentage. Avoid live-order wording.";
  }
  if (n.includes("risk-reward ratio targeting")) {
    return "Batch 161-180 directive: Build this as crypto reward-to-risk planning education. Teach invalidation distance, educational reference zone, ratio math, cramped-reference trap, liquidity depth, slippage, and spread percentage. Do not use profit-target wording.";
  }
  if (n.includes("leverage control")) {
    return "Batch 161-180 directive: Build this as crypto leverage-control risk education. Teach leverage cap, liquidation buffer, maintenance margin, volatility cutback, forced-liquidation trap, venue depth, slippage, and spread percentage.";
  }
  if (n.includes("portfolio diversification across sectors")) {
    return "Batch 161-180 directive: Build this as crypto sector-diversification allocation education. Teach sector buckets, correlation check, concentration cap, rotation trap, stable reserve, exchange liquidity depth, and spread percentage.";
  }
  if (n.includes("stablecoin hedging")) {
    return "Batch 161-180 directive: Build this as crypto stablecoin hedge allocation education. Teach stable reserve, de-risking band, depeg warning, exchange/issuer risk, liquidity depth, slippage, and spread percentage. Avoid profit wording.";
  }
  if (n.includes("insurance via options")) {
    return "Batch 161-180 directive: Build this as crypto options-insurance education. Teach protective option structure, premium cost, expiry window, implied-volatility drag, skew trap, venue depth, and spread percentage.";
  }
  if (n.includes("dollar-cost averaging")) {
    return "Batch 161-180 directive: Build this as crypto DCA allocation education. Teach schedule, tranche size, reserve rule, drawdown scenario, averaging-too-fast trap, liquidity depth, slippage, and spread percentage.";
  }
  if (n.includes("laddered entry and exit")) {
    return "Batch 161-180 directive: Build this as crypto laddered allocation education. Teach planned tranches, spacing, invalidation, educational exit reference zones, over-laddering trap, liquidity depth, slippage, and spread percentage. Avoid live-order wording.";
  }

  if (n.includes("flag and pennant") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto flag/pennant continuation lesson. Teach flagpole impulse, tight consolidation, upper/lower pattern boundary, breakout close, failed break back inside, liquidity depth, slippage, and spread percentage. Do not use pip language or live-order instructions.";
  }
  if (n.includes("pin bar reversal") && assetClass === "FOREX") {
    return "Batch 141-160 directive: Build this as a Level 0 Forex candle-reversal lesson. Teach long wick, small body, close location, support/resistance context, failed wick read, spread, session context, and pip distance. Do not add advanced indicators or macro concepts.";
  }
  if (n.includes("dmi/adx trend system") && n.includes("swing") && assetClass === "GOLD") {
    return "Batch 141-160 directive: Build this as swing Gold DMI/ADX trend structure. Teach 1H/4H context, ADX strength threshold, +DI/-DI direction, pullback, wick/chop trap, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("ml regression") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto ML regression model-audit lesson, not a prediction promise. Teach features, training window, prediction band, error band, validation split, overfitting trap, liquidity depth, slippage, and spread percentage. Do not use pip language or certainty wording.";
  }
  if (n.includes("inside bar breakout") && assetClass === "FOREX") {
    return "Batch 141-160 directive: Build this as a Level 0 Forex inside-bar breakout lesson. Teach mother-bar high/low, inside candle compression, breakout close, failed close back inside, spread, session context, and pip distance. Keep it different from crypto inside-bar liquidity-depth wording.";
  }
  if (n.includes("trendline break and retest") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 141-160 directive: Build this as intraday Gold trendline break-and-retest. Teach 5m/15m trendline touches, break close, retest area, wick fakeout, fast trap back through trendline, and point/dollar distance. Do not use pip language.";
    if (n.includes("swing")) return "Batch 141-160 directive: Build this as swing Gold trendline break-and-retest. Teach 1H/4H trendline touches, break close, broader retest, wick fakeout, failed acceptance back through trendline, and point/dollar distance. Do not use pip language.";
    return "Batch 141-160 directive: Build this as Gold trendline break-and-retest. Teach repeated trendline touches, break close, retest from the other side, wick fakeout, invalidation back through the trendline, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("reinforcement learning") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto reinforcement-learning model-audit lesson. Teach state, action, reward, training environment, policy output, live-distribution mismatch, overfitting trap, liquidity depth, slippage, and spread percentage. Do not use pip language or bot-profit promises.";
  }
  if (n.includes("sentiment-driven ml") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto sentiment-model audit lesson. Teach sentiment input, price context, disagreement check, source-quality filter, crowding trap, news/social spike risk, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("outside bar") && assetClass === "FOREX") {
    return "Batch 141-160 directive: Build this as a Level 0 Forex outside-bar reversal lesson. Teach engulfing range, prior candle high/low, close location, structural context, failed outside-bar trap, spread, session context, and pip distance. Do not add advanced indicators or macro concepts.";
  }
  if (n.includes("doji") && assetClass === "FOREX") {
    return "Batch 141-160 directive: Build this as a Level 0 Forex indecision-candle lesson. Teach small body, balanced wicks, location at support/resistance, confirmation candle, failed doji read, spread, session context, and pip distance. Do not add advanced indicators or macro concepts.";
  }
  if (n.includes("autoencoder") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto anomaly-detection model-audit lesson. Teach normal behavior window, reconstruction error, anomaly threshold, false-anomaly trap, exchange liquidity depth, slippage, and spread percentage. Do not use pip language or certainty wording.";
  }
  if ((n.includes("head & shoulders") || n.includes("head and shoulders")) && assetClass === "FOREX") {
    return "Batch 141-160 directive: Build this as a Forex head-and-shoulders pattern lesson. Teach left shoulder, head, right shoulder, neckline, breakdown close, failed reclaim, spread, session context, and pip distance.";
  }
  if (n.includes("genetic algorithm") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto strategy-optimization model-audit lesson. Teach parameter chromosome, fitness metric, train/test split, mutation/crossover idea in simple words, overfitting trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("support/resistance bounce") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 141-160 directive: Build this as intraday Gold support/resistance bounce. Teach 5m/15m reaction level, rejection wick, hold/reclaim, failed bounce through level, and point/dollar distance. Do not use pip language.";
    return "Batch 141-160 directive: Build this as Gold support/resistance bounce. Teach reaction level, rejection wick, close back from the level, failed bounce through the level, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("double top") || n.includes("double bottom")) {
    return "Batch 141-160 directive: Build this as a Forex double top/bottom lesson. Teach two comparable peaks/troughs, neckline, breakout/breakdown close, failed neckline reclaim, spread, session context, and pip distance.";
  }
  if (n.includes("high-frequency market making") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto market-making microstructure audit, not a retail instruction manual. Teach bid/ask spread, order-book depth, queue risk, inventory imbalance, latency/slippage warning, toxic flow trap, and spread percentage. Do not use pip language.";
  }
  if (n.includes("latency arbitrage") && assetClass === "CRYPTO") {
    return "Batch 141-160 directive: Build this as a crypto latency-arbitrage execution audit, not an instruction to exploit venues. Teach exchange price discrepancy, stale quote risk, transfer/execution delay, fee/slippage drag, venue depth, and spread percentage. Do not use pip language.";
  }

  if (n.includes("bollinger band trend breakout") && assetClass === "FOREX") {
    return "Batch 4 directive: Build this as a Forex trend-continuation Bollinger Band expansion lesson. Use major-pair, spread, and pip language. Do not reuse squeeze-only Gold wording, wick-fakeout framing, or intraday trap checklists.";
  }
  if (n === "bollinger band breakout" && assetClass === "GOLD") {
    return "Batch 4 directive: Build this as a Gold volatility breakout lesson using dollars, points, ATR context, wick behavior, and fakeout risk. Do not use pip language or the intraday squeeze checklist.";
  }
  if (n.includes("bollinger band breakout (intraday)") && assetClass === "GOLD") {
    return "Batch 4 directive: Build this as a short-timeframe Gold Bollinger squeeze lesson on 5m/15m charts with breakout, retest, and fast trap behavior. Use dollars, points, ATR context, and wick behavior. Do not use pip language.";
  }
  if (n.includes("price channel breakout")) {
    return "Batch 4 directive: Classify as Technical Breakout or Channel Breakout, not session. Use upper/lower price channel boundaries, breakout close, failed breakout trap, and invalidation back inside the channel. Use Forex pair/spread/pip language.";
  }
  if (n.includes("donchian channel breakout")) {
    return "Batch 4 directive: Classify as Technical Breakout or Channel Breakout, not Trend Following or session. Use upper/lower Donchian bands, N-period high/low, breakout close, false breakout trap, and invalidation back inside the channel. Use crypto spread percentage, slippage, liquidity depth, or basis points; never pips.";
  }
  if (n.includes("higher-high") && n.includes("higher-low")) {
    return "Batch 4 directive: Keep this pure Level 1 market structure. Use only swing highs, swing lows, higher highs, higher lows, support/resistance, and simple invalidation. Do not mention EMA, SMA, ATR, MACD, ADX, sessions, liquidity sweeps, order blocks, or advanced volatility language.";
  }
  if (n.includes("supertrend") && assetClass === "CRYPTO") {
    return "Batch 4 directive: Use the SupertrendVolatilityChart framing for crypto. Include volatility bands, trend flip behavior, slippage, liquidity depth, and spread percentage cautions. Do not use pip language or copy the Forex Supertrend lesson.";
  }
  if (n.includes("volatility breakout") && n.includes("atr") && assetClass === "CRYPTO") {
    return "Batch 4 directive: Build this as ATR expansion after compression in crypto. Focus on volatility release, spread percentage, slippage, and liquidity depth. Do not reuse the Forex ATR trend-filter checklist or trailing-stop lesson.";
  }
  if (n.includes("volatility-adjusted") && n.includes("atr") && assetClass === "FOREX") {
    return "Batch 4 directive: Build this as a Forex ATR filter for trend continuation and dynamic stop adjustment. Use pairs, spreads, and pip-based distance. Do not reuse the crypto compression breakout checklist or trap framing.";
  }
  if (n.includes("range breakout") && (n.includes("support-resistance") || n.includes("support/resistance"))) {
    return "Pilot directive: Build this as a crypto support/resistance range breakout. Teach upper/lower range edges, breakout close, retest, false break back inside, spread percentage, slippage, and liquidity depth. Do not use pip language.";
  }
  if (n.includes("bollinger band squeeze breakout") && assetClass === "CRYPTO") {
    return "Pilot directive: Build this as crypto Bollinger compression followed by expansion. Teach squeeze width, breakout close, retest, fakeout back inside the bands, spread percentage, slippage, and liquidity depth. Do not copy Gold wick language or Forex pips.";
  }
  if (n.includes("trend-following using parabolic sar")) {
    return "Pilot directive: Build this as a Forex Parabolic SAR trend-following lesson. Teach SAR dots, dot flip, trend continuation, chop risk, spread, pair movement, and pips for distance only.";
  }
  if (n.includes("bollinger band breakout (swing)") && assetClass === "GOLD") {
    return "Pilot directive: Build this as a swing Gold Bollinger breakout lesson. Teach 1H/4H compression, band expansion, wick fakeouts, close quality, and invalidation back inside the band. Use points/dollars, not pips.";
  }
  if (n.includes("gap breakout") && assetClass === "CRYPTO") {
    return "Pilot directive: Build this as a crypto gap or thin-liquidity displacement breakout lesson. Teach gap boundary, breakout close, refill trap, liquidity depth, spread percentage, and venue disagreement. Do not use pip language.";
  }
  if (n.includes("guppy") || n.includes("gmma")) {
    return "Pilot directive: Build this as a Forex GMMA trend lesson. Teach short-term and long-term moving-average groups, compression, expansion, ribbon separation, false ribbon twist, spread, sessions, and pips.";
  }
  if (n.includes("donchian channel breakout") && assetClass === "GOLD") {
    return "Pilot directive: Build this as a Gold Donchian channel breakout lesson. Teach N-period high/low, breakout close, wick fakeout risk, intraday/swing timeframe if named, and invalidation back inside the channel. Use points/dollars, not pips.";
  }
  if (n.includes("keltner channel trend-follow")) {
    return "Pilot directive: Build this as a Forex Keltner trend-following lesson. Teach EMA midline, ATR channel, trend-side closes, pullback to the midline, false channel break, spread, sessions, and pips.";
  }
  if (n.includes("asia session breakout")) {
    return "Pilot directive: Build this as a crypto Asia session breakout lesson. Teach the Asian range box, breakout close, retest, fakeout back into range, liquidity depth, spread percentage, and exchange participation. Do not use pip language.";
  }
  if (n.includes("trend-following with heikin-ashi")) {
    return "Pilot directive: Build this as a Forex Heikin-Ashi trend-following lesson. Teach smoothed candle direction, flat-bottom/flat-top candles, color shift, lag risk, spread, session context, and pips.";
  }
  if (n.includes("mean reversion via bollinger")) {
    return "Pilot directive: Build this as a crypto Bollinger mean-reversion lesson. Teach outer-band stretch, return toward the middle band, failed mean reversion, liquidity depth, slippage, and spread percentage. Do not frame it as a breakout.";
  }
  if (n.includes("keltner channel mean reversion")) {
    return "Pilot directive: Build this as a crypto Keltner mean-reversion lesson. Teach stretch outside the ATR channel, return toward the EMA midline, failed reversion, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("pivot point breakout (swing)") && assetClass === "GOLD") {
    return "Batch 61-80 directive: Build this as a swing Gold pivot breakout lesson. Teach 1H/4H pivot context, central pivot, nearby support/resistance pivot, breakout close, retest, wick fakeout risk, and invalidation back through the pivot. Use points/dollars, not pips.";
  }
  if (n.includes("pivot point breakout")) {
    return assetClass === "GOLD"
      ? "Pilot directive: Build this as a Gold pivot point breakout lesson. Teach pivot level, R/S levels, breakout close, retest, wick fakeout, intraday timeframe if named, and invalidation back through pivot. Use points/dollars, not pips."
      : "Pilot directive: Build this as a pivot point breakout lesson with pivot, support/resistance levels, breakout close, retest, false break, and invalidation.";
  }
  if (n.includes("support-resistance breakout") || n.includes("support/resistance breakout")) {
    return "Pilot directive: Build this as a Forex support/resistance breakout lesson. Teach horizontal level selection, breakout close, retest, failed break back through the level, spread, sessions, and pip distance.";
  }
  if (n.includes("pre-london session breakout")) {
    return "Pilot directive: Build this as a Forex pre-London session breakout lesson. Teach pre-London range, London handoff, breakout close, retest, false break back into range, spread, and pips.";
  }
  if (n.includes("new york session breakout")) {
    return "Pilot directive: Build this as a Forex New York session breakout lesson. Teach pre-NY range, New York open expansion, retest, news-wick trap, spread, session context, and pips.";
  }
  if (n.includes("time-stop breakout") || n.includes("opening range breakout")) {
    return "Batch 81-100 directive: Build this as a Forex opening-range breakout with a time-stop rule. Teach opening range high/low, breakout close, retest, time expiry, invalidation back inside the range, spread, session context, and pip distance. Do not turn it into live order placement.";
  }
  if (n.includes("vwap reversion") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 81-100 directive: Build this as intraday Gold VWAP reversion. Teach 5m/15m VWAP stretch, wick rejection, return toward VWAP, fast continuation trap, points/dollars, and no pip language.";
    if (n.includes("swing")) return "Batch 81-100 directive: Build this as swing Gold VWAP reversion. Teach 1H/4H VWAP distance, broader structure, wick rejection, return toward VWAP, failed swing reversion, points/dollars, and no pip language.";
    return "Batch 81-100 directive: Build this as Gold VWAP mean reversion. Teach VWAP as fair-value reference, stretch away from VWAP, wick rejection, return path, failed continuation, points/dollars, and no pip language.";
  }
  if (n.includes("stochastic oscillator")) {
    if (assetClass === "FOREX") return "Batch 101-120 directive: Build this as Forex Stochastic range reversion. Teach horizontal range edge, Stochastic upper/lower band, candle reaction back toward mid-range, false extreme trap, spread, sessions, and pip distance.";
    return "Batch 81-100 directive: Build this as crypto Stochastic range reading. Teach oscillator upper/lower bands, price range context, overextension reaction, failed range trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("oscillator range trading")) {
    return "Batch 81-100 directive: Build this as Forex oscillator range trading. Teach horizontal range boundaries, oscillator extreme, candle reaction back toward mid-range, false extreme trap, spread, session context, and pips.";
  }
  if (n.includes("commodity channel index") || n.includes("cci")) {
    return "Batch 81-100 directive: Build this as crypto CCI mean-reversion/range lesson. Teach CCI extreme, zero baseline, price stretch, failed CCI reversion trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("bollinger band mean reversion") && assetClass === "FOREX") {
    return "Batch 81-100 directive: Build this as Forex Bollinger mean reversion, not breakout. Teach range context, outer-band stretch, close back inside, middle-band mean path, failed continuation trap, spread, sessions, and pip distance. Keep it distinct from Gold and crypto Bollinger versions.";
  }
  if (n.includes("atr channel trend")) {
    return "Batch 81-100 directive: Build this as crypto ATR channel trend. Teach ATR channel midline, trend-side channel respect, pullback path, volatility expansion/chop trap, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("rsi mean reversion") && assetClass === "FOREX") {
    return "Batch 81-100 directive: Build this as Forex RSI mean reversion. Teach range context, RSI extreme, price reaction, mid-range/mean path, failed reversion continuation, spread, sessions, and pip distance.";
  }
  if (n.includes("moving average mean reversion")) {
    return "Batch 81-100 directive: Build this as Forex moving-average mean reversion, not a crossover. Teach stretch away from the moving average, candle reaction, return toward the average, trend-continuation failure case, spread, sessions, and pip distance.";
  }
  if (n.includes("volume-price confirmation")) {
    return "Batch 81-100 directive: Build this as crypto volume-price confirmation. Teach price structure, relative volume expansion, candle close quality, failed volume spike trap, exchange participation, liquidity depth, and spread percentage. Do not use pip language.";
  }
  if (n.includes("on-balance volume") || n.includes("obv")) {
    return "Batch 81-100 directive: Build this as crypto OBV divergence. Teach OBV line, price higher high/lower low disagreement, divergence trap, confirmation close, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("pairs trading") || n.includes("cointegration")) {
    return "Batch 81-100 directive: Build this as Forex pairs trading with cointegration in simple classroom language. Teach two correlated currency pairs, spread divergence, mean relationship, convergence path, correlation break trap, spread, and pip distance.";
  }
  if (n.includes("vwap trend reversal")) {
    return "Batch 81-100 directive: Build this as crypto VWAP trend reversal. Teach price losing one side of VWAP, acceptance on the other side, retest of VWAP, failed reversal trap, exchange liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("bollinger band squeeze reversion")) {
    return "Batch 81-100 directive: Build this as Forex Bollinger squeeze reversion, not squeeze breakout. Teach compressed bands, failed break outside the squeeze, close back inside, return toward middle band, spread, sessions, and pip distance.";
  }
  if (n.includes("golden cross") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 101-120 directive: Build this as intraday Gold 50/200 SMA Golden Cross study. Teach 5m/15m execution view, daily 50/200 SMA context, cross quality, first pullback, wick/whipsaw trap, and point/dollar distance. Do not use pip language.";
    if (n.includes("swing")) return "Batch 101-120 directive: Build this as swing Gold 50/200 SMA Golden Cross study. Teach 1H/4H structure, daily 50/200 SMA context, slower cross confirmation, pullback zone, wick failure, and point/dollar distance. Do not use pip language.";
    return "Batch 101-120 directive: Build this as Gold Golden Cross trend study. Teach daily 50 SMA crossing 200 SMA, Gold structure, cross lag, wick/whipsaw trap, and point/dollar distance. Do not use pip language.";
  }
  if ((n.includes("support and resistance bounce") || n.includes("support/resistance bounce")) && assetClass === "CRYPTO") {
    return "Batch 101-120 directive: Build this as crypto support/resistance bounce reading. Teach horizontal level quality, repeated touches, rejection candle, return toward range center, failed bounce through the level, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("support/resistance scalping") && assetClass === "CRYPTO") {
    return "Batch 101-120 directive: Build this as crypto support/resistance scalping for simulation only. Teach fast level tap, immediate rejection, tight invalidation through the level, thin-depth trap, slippage, spread percentage, and exchange participation. Do not use pip language.";
  }
  if (n.includes("mean reversion with z-score") && assetClass === "FOREX") {
    return "Batch 101-120 directive: Build this as Forex Z-score mean reversion. Teach statistical stretch from mean, acceptance back toward baseline, range context, failed continuation trap, spread, sessions, and pip distance.";
  }
  if (n.includes("bullish engulfing pattern")) {
    return "Batch 101-120 directive: Build this as a crypto bullish engulfing candlestick anatomy lesson. Teach prior decline, full-body engulfing candle, close quality, support context, failed engulfing trap, liquidity depth, slippage, and spread percentage. Do not use pip language or advanced indicator rules.";
  }
  if (n.includes("bearish engulfing pattern")) {
    return "Batch 101-120 directive: Build this as a crypto bearish engulfing candlestick anatomy lesson. Teach prior rise, full-body engulfing candle, close quality, resistance context, failed engulfing trap, liquidity depth, slippage, and spread percentage. Do not use pip language or advanced indicator rules.";
  }
  if (n.includes("pin bar") || n.includes("hammer pattern")) {
    return "Batch 101-120 directive: Build this as a crypto pin bar / hammer candlestick anatomy lesson. Teach long rejection wick, small body, support context, confirmation close, failed wick trap, liquidity depth, slippage, and spread percentage. Do not use pip language or indicator rules.";
  }
  if (n.includes("shooting star") || n.includes("inverted hammer")) {
    return "Batch 101-120 directive: Build this as a crypto shooting star / inverted hammer candlestick anatomy lesson. Teach long upper wick, small body, resistance context, confirmation close, failed wick trap, liquidity depth, slippage, and spread percentage. Do not use pip language or indicator rules.";
  }
  if (n.includes("ema cross with rsi") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 101-120 directive: Build this as intraday Gold EMA cross with RSI filter. Teach 5m/15m EMA cross, RSI midline support, first pullback, wick/whipsaw trap, and point/dollar distance. Do not use pip language.";
    if (n.includes("swing")) return "Batch 101-120 directive: Build this as swing Gold EMA cross with RSI filter. Teach 1H/4H EMA cross, RSI trend support, broader structure, pullback zone, wick failure, and point/dollar distance. Do not use pip language.";
    return "Batch 101-120 directive: Build this as Gold EMA cross with RSI filter. Teach EMA cross direction, RSI midline/context filter, close quality, lag/whipsaw trap, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("regression channel reversion")) {
    return "Batch 101-120 directive: Build this as Forex regression channel mean reversion. Teach regression midline, upper/lower channel deviation, candle reaction back toward midline, channel-break failure, spread, sessions, and pip distance.";
  }
  if (n.includes("vwap reversion") && assetClass === "FOREX") {
    return "Batch 101-120 directive: Build this as Forex VWAP reversion. Teach VWAP as fair-value reference, pair stretch away from VWAP, acceptance back toward VWAP, failed continuation, spread, sessions, and pip distance.";
  }
  if (n.includes("intraday scalping mean reversion")) {
    return "Batch 101-120 directive: Build this as Forex intraday scalping mean reversion for simulation only. Teach short-timeframe stretch from mean, candle reaction, fast return path, spread sensitivity, time-based cancellation, and pip distance. Avoid live-account wording.";
  }
  if (n.includes("macd momentum") && assetClass === "GOLD") {
    return "Batch 101-120 directive: Build this as Gold MACD momentum. Teach MACD line, trigger line, histogram bars, zero baseline, momentum fade trap, Gold wick behavior, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("inside bar breakout") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto inside-bar breakout lesson. Teach mother-bar high/low, inside-bar compression, breakout close, false break back inside the mother bar, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("head and shoulders top") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto head-and-shoulders top lesson. Teach left shoulder, head, right shoulder, neckline, breakdown close, failed breakdown reclaim, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("inverse head and shoulders") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto inverse head-and-shoulders lesson. Teach left shoulder, head, right shoulder, neckline breakout, failed breakout back below neckline, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("descending triangle breakout") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto descending triangle breakdown lesson. Teach flat support, lower highs, compression, breakdown close, failed breakdown reclaim, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("ascending triangle breakout") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto ascending triangle breakout lesson. Teach flat resistance, higher lows, compression, breakout close, failed breakout back inside, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("symmetrical triangle breakout") && assetClass === "CRYPTO") {
    return "Batch 121-140 directive: Build this as a crypto symmetrical triangle breakout lesson. Teach converging highs/lows, compression, breakout close, direction trap back inside the triangle, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("momentum factor") && assetClass === "FOREX") {
    return "Batch 121-140 directive: Build this as Forex time-series momentum. Teach current pair movement versus its own lookback baseline, trend persistence, failed momentum rollover, spread, sessions, and pip distance.";
  }
  if (n.includes("absolute momentum") && assetClass === "FOREX") {
    return "Batch 121-140 directive: Build this as Forex absolute momentum. Teach whether the pair is above its own momentum baseline, continuation path, failed zero-line hold, spread, sessions, and pip distance. Do not turn it into relative ranking.";
  }
  if (n.includes("rate of change") || n.includes("roc")) {
    if (assetClass === "FOREX") return "Batch 121-140 directive: Build this as Forex ROC momentum. Teach ROC line, zero baseline, acceleration, failed rollover, spread, sessions, and pip distance.";
    return "Batch 121-140 directive: Build this as Gold ROC momentum. Teach ROC line, zero baseline, acceleration, intraday/swing timeframe if named, wick momentum fade, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("commodity channel index") && n.includes("momentum")) {
    return "Batch 121-140 directive: Build this as Forex CCI momentum, not CCI mean reversion. Teach CCI above/below zero, trend-side continuation, failed zero-line hold, spread, sessions, and pip distance.";
  }
  if (n.includes("momentum breakout with volume")) {
    return "Batch 121-140 directive: Build this as Forex momentum breakout with relative tick-volume expansion. Teach breakout level, momentum push, volume expansion, retest, false volume breakout, spread, sessions, and pip distance.";
  }
  if (n.includes("momentum divergence")) {
    return "Batch 121-140 directive: Build this as Forex momentum divergence. Teach price swing versus momentum swing disagreement, confirmation close, failed divergence continuation, spread, sessions, and pip distance.";
  }
  if (n.includes("momentum with moving average confirmation")) {
    return "Batch 121-140 directive: Build this as Forex momentum checked by a moving-average context. Teach momentum push, moving-average direction, pullback, failed momentum/MA mismatch, spread, sessions, and pip distance.";
  }
  if (n.includes("dmi/adx trend system") && assetClass === "GOLD") {
    return "Batch 121-140 directive: Build this as Gold DMI/ADX trend structure. Teach ADX strength, +DI/-DI direction, intraday version if named, wick/chop trap, and point/dollar distance. Do not use pip language.";
  }
  if (n.includes("volatility mean reversion") || n.includes("atr regression")) {
    return "Batch 101-120 directive: Build this as Forex ATR regression mean reversion. Teach ATR stretch, regression midline, return toward channel center, failed reversion expansion, spread, sessions, and pip distance. Do not turn it into a crypto ATR breakout lesson.";
  }
  if (n.includes("z-score") || n.includes("z score")) {
    return "Batch 61-80 directive: Build this as crypto statistical mean reversion. Teach z-score stretch, mean line, reversion path, failed reversion continuation, exchange liquidity depth, slippage, and spread percentage. Do not use pip language or live order wording.";
  }
  if (n.includes("pair-wise mean reversion") || n.includes("statistical arbitrage")) {
    return "Batch 61-80 directive: Build this as crypto pair-spread mean reversion. Teach two related crypto assets, spread divergence, correlation/cointegration context in simple classroom terms, convergence path, de-peg/correlation-break trap, venue depth, and slippage. Do not use pip language.";
  }
  if (n.includes("bollinger band mean reversion") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 61-80 directive: Build this as intraday Gold Bollinger mean reversion. Teach 5m/15m outer-band stretch, wick rejection, return toward middle band, fast continuation trap, points/dollars, and no pip language.";
    if (n.includes("swing")) return "Batch 61-80 directive: Build this as swing Gold Bollinger mean reversion. Teach 1H/4H outer-band stretch, broader structure context, wick rejection, return toward middle band, failed swing reversion, points/dollars, and no pip language.";
    return "Batch 61-80 directive: Build this as Gold Bollinger mean reversion. Teach outer-band stretch, middle-band mean reference, Gold wick behavior, failed reversion continuation, points/dollars, and no pip language. Keep it different from Gold Bollinger breakout lessons.";
  }
  if (n.includes("false breakout") || n.includes("fakey")) {
    return "Batch 61-80 directive: Build this as a Forex failed-breakout trap lesson. Teach key support/resistance, breakout poke, close back inside range, retest failure, invalidation, spread, sessions, and pip distance. Do not frame it as a normal breakout continuation.";
  }
  if (n.includes("breakout with volume confirmation")) {
    return "Batch 61-80 directive: Build this as Forex breakout with relative/tick-volume confirmation. Teach support/resistance break, candle close, relative volume expansion marker, retest, false volume spike trap, spread, and pips. Do not imply centralized spot-FX volume.";
  }
  if (n.includes("momentum strength strategy")) {
    return "Batch 61-80 directive: Build this as crypto relative momentum strength. Teach asset ranking by relative performance as a classroom example, momentum continuation, liquidity depth, slippage, crowded-move trap, and rotation risk. Do not use pip language.";
  }
  if (n.includes("volume-weighted momentum")) {
    return "Batch 61-80 directive: Build this as crypto volume-weighted momentum. Teach momentum plus relative volume expansion, liquidity depth, exchange participation, exhaustion trap, and spread percentage. Do not use pip language.";
  }
  if (n.includes("breakout with momentum confirmation")) {
    return "Batch 61-80 directive: Build this as Forex breakout with RSI/momentum confirmation. Teach level break, momentum confirmation, retest, momentum divergence/failure trap, spread, sessions, and pip distance.";
  }
  if (n.includes("rsi momentum strategy")) {
    return "Batch 61-80 directive: Build this as crypto RSI momentum continuation. Teach RSI midline/strength zone, price continuation, liquidity depth, slippage, failed momentum rollover, and spread percentage. Do not use pip language and do not copy RSI mean-reversion logic.";
  }
  if (n.includes("volatility expansion breakout")) {
    return "Batch 61-80 directive: Build this as Forex volatility expansion breakout. Teach compression range, ATR expansion, breakout close, retest, false expansion back inside range, spread, sessions, and pip distance. Do not copy crypto ATR liquidity wording.";
  }
  if (n.includes("rsi mean reversion") && assetClass === "GOLD") {
    if (n.includes("intraday")) return "Batch 61-80 directive: Build this as intraday Gold RSI mean reversion. Teach 5m/15m RSI extreme, wick rejection, return toward mean, fast continuation trap, points/dollars, and no pip language.";
    if (n.includes("swing")) return "Batch 61-80 directive: Build this as swing Gold RSI mean reversion. Teach 1H/4H RSI extreme, broader structure, wick rejection, mean path, failed swing reversion, points/dollars, and no pip language.";
    return "Batch 61-80 directive: Build this as Gold RSI mean reversion. Teach RSI extreme, price stretch, wick reaction, return toward mean, failed reversion continuation, points/dollars, and no pip language.";
  }
  if (n.includes("rsi") && n.includes("mean reversion")) {
    return "Pilot directive: Build this as a crypto RSI mean-reversion lesson. Teach RSI overbought/oversold zone, price stretch, reversal close, failed reversion, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("grid breakout")) {
    return "Batch 61-80 directive: Build this as a Forex grid breakout/exposure-control lesson for classroom simulation only. Teach grid levels as planned observation bands, breakout activation, stacked exposure warning, false break trap, invalidation, spread, and pip spacing. Avoid live order placement language.";
  }
  if (n.includes("macd histogram momentum")) {
    return "Batch 61-80 directive: Build this as crypto MACD histogram momentum. Teach histogram expansion around the zero baseline, MACD line context, momentum continuation, liquidity depth, slippage, and histogram fade trap. Do not use pip language.";
  }
  if (n.includes("price-rate-of-change") || n.includes("roc")) {
    return "Batch 61-80 directive: Build this as crypto ROC momentum. Teach rate-of-change line, zero baseline, momentum acceleration, failed rollover, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  }
  if (n.includes("news release breakout")) {
    return "Batch 61-80 directive: Build this as Forex news-release breakout education. Teach pre-release range, economic calendar context, breakout close after release, spread widening, slippage warning, whipsaw trap, and pip distance. Do not turn it into live news-order instructions.";
  }
  if (n.includes("bear put spread") && n.includes("swing") && assetClass === "GOLD") return "Batch 561-580 directive: Teach swing Gold bear put spread through long higher put, short lower put, debit paid, expiry window, defined downside payoff shape, wider point/dollar distance, IV/time decay, and failed bearish structure trap. Do not use pip language.";
  if (n.includes("economic surprise index") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex economic surprise index as a macro scenario tool. Show consensus versus actual releases, surprise direction, currency response, stale data trap, sessions, spread, and pip distance. A surprise index is context, not an automatic direction rule.";
  if (n.includes("risk buffer via insurance protocols") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto insurance-protocol buffers as portfolio risk education. Show coverage amount, protocol solvency, exclusions, premium drag, claim delay, smart-contract risk, liquidity depth, slippage, and spread percentage. Never use pip language.";
  if (n.includes("political risk premium") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex political risk premium through event timeline, currency risk premium, yield/spread response, hedging demand, rumor-versus-confirmed-event trap, sessions, spread, and pip distance. Avoid prediction certainty.";
  if (n.includes("portfolio volatility cap") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto portfolio volatility caps through realized volatility, cap threshold, size or allocation cutback, correlation spike, liquidity depth, slippage, and spread percentage. The cap controls exposure; it does not decide direction.";
  if (n.includes("ratio call spread") && assetClass === "GOLD") return "Batch 561-580 directive: Teach Gold ratio call spreads through long call, multiple short higher calls, net debit/credit, upside risk beyond the short strikes, IV/time review, base versus swing timing, and point/dollar distance. Do not use pip language.";
  if (n.includes("geopolitical hedging") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex safe-haven hedging through risk event, haven currency basket, DXY or CHF/JPY context, hedge leg, reversal risk, sessions, spread, and pip distance. Keep this distinct from Gold safe-haven lessons.";
  if (n.includes("liquidity risk assessment") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto liquidity risk assessment through order-book depth, exchange concentration, withdrawal status, slippage estimate, spread percentage, stable reserve, and thin-book trap. Do not use pip language.";
  if (n.includes("iron condor") && assetClass === "GOLD") return "Batch 561-580 directive: Teach Gold iron condors through short put spread, short call spread, wings, premium, margin, defined range body, gap risk, base versus swing timing, and point/dollar distance. Do not use pip language.";
  if (n.includes("high-yield bond spread") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex high-yield bond spread as a risk appetite proxy. Show credit spread widening or narrowing, risk currency reaction, dollar/haven comparison, stale credit data trap, sessions, spread, and pip distance.";
  if (n.includes("counterparty risk diversification") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto counterparty diversification through exchange, custodian, DeFi protocol, stablecoin issuer, concentration caps, withdrawal limits, proof-of-reserve warning, liquidity depth, and spread percentage. Never use pip language.";
  if (n.includes("purchasing managers") && n.includes("pmi") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex PMI trend through manufacturing/services PMI, expansion threshold, trend direction, consensus surprise, currency response, stale release trap, sessions, spread, and pip distance.";
  if (n.includes("stablecoin yield diversification") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto stablecoin yield diversification through platform list, issuer exposure, APY source, lockup, smart-contract risk, depeg risk, liquidity depth, slippage, and spread percentage. Yield is not risk-free.";
  if (n.includes("emergency stop on exchange outage") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto exchange-outage emergency stops as a risk-process lesson. Show venue status, cancel-only mode, withdrawal halt, hedge venue availability, position freeze risk, communication timestamp, liquidity depth, and spread percentage. Do not use pip language.";
  if (n.includes("butterfly spread") && n.includes("swing") && assetClass === "GOLD") return "Batch 581-600 directive: Teach swing Gold butterfly spread through lower wing, body strikes, upper wing, same expiry, net debit, central payoff body, IV/time sensitivity, wider point/dollar distance, and delayed liquidity trap. Do not use pip language.";
  if (n.includes("butterfly spread") && assetClass === "GOLD") return "Batch 561-580 directive: Teach Gold butterfly spreads through lower wing, body strikes, upper wing, same expiry, net debit, central body, IV/time sensitivity, illiquid strike trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("speculative position unwind") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex speculative position unwind through COT or positioning proxy, crowded side, weekly change, price response, reporting lag, unwind persistence, sessions, spread, and pip distance. Do not claim crowding alone reverses price.";
  if (n.includes("crowded trade fade") && assetClass === "FOREX") return "Batch 561-580 directive: Teach Forex crowded trade fade through crowding evidence, price exhaustion, failed continuation, position reduction, contrary catalyst, sessions, spread, and pip distance. Keep it distinct from ordinary contrarian sentiment.";
  if (n.includes("max drawdown alert") && assetClass === "CRYPTO") return "Batch 561-580 directive: Teach crypto max drawdown alerts through equity curve state, drawdown threshold, risk pause, recovery rule, volatility context, liquidity depth, slippage, and spread percentage. The alert protects the process; it is not a market prediction.";
  if (n.includes("staged exit") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto staged exits as planned position reduction through tranche schedule, reference zones, invalidation update, remaining exposure, liquidity depth, slippage, and spread percentage. Do not use pip language or account-growth wording.";
  if (n.includes("quant sentiment index") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex quant sentiment overlay through index inputs, weighting, threshold, price-context cross-check, stale sentiment trap, sessions, spread, and pip distance.";
  if (n.includes("protective put") && n.includes("swing") && assetClass === "GOLD") return "Batch 581-600 directive: Teach swing Gold protective put through Gold exposure, long put strike, expiry, premium, downside floor, upside participation, IV/time decay, wider point/dollar distance, and under-hedge trap. Do not use pip language.";
  if (n.includes("protective put") && assetClass === "GOLD") return "Batch 581-600 directive: Teach Gold protective put through Gold exposure, long put strike, expiry, premium, downside floor, upside participation, IV/time decay, and point/dollar distance. Do not use pip language.";
  if (n.includes("hedging stablecoin depeg") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto stablecoin depeg hedge through issuer exposure, depeg threshold, hedge or rotation leg, venue depth, withdrawal limits, slippage, spread percentage, and false-alarm trap. Do not use pip language.";
  if (n.includes("multi-asset correlation") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex multi-asset correlation through currency pair, dollar index, rates, commodity or equity proxy, rolling correlation, correlation-break trap, sessions, spread, and pip distance.";
  if (n.includes("portfolio insurance via stable yield") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto portfolio insurance via stable yield through allocation sleeve, yield source, issuer/platform risk, lockup, depeg risk, reserve buffer, liquidity depth, slippage, and spread percentage. Yield is not risk-free.";
  if (n.includes("news volume spike scalping") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex news volume spike scalping through news timestamp, volume spike, spread expansion, fast acceptance or rejection, slippage risk, sessions, and pip distance.";
  if (n.includes("covered call") && n.includes("swing") && assetClass === "GOLD") return "Batch 581-600 directive: Teach swing Gold covered call through Gold exposure, short call strike, expiry, premium, upside cap, assignment review, IV change, wider point/dollar distance, and delayed rally trap. Do not use pip language.";
  if (n.includes("covered call") && assetClass === "GOLD") return "Batch 581-600 directive: Teach Gold covered call through Gold exposure, short call strike, expiry, premium, upside cap, assignment review, IV change, and point/dollar distance. Do not use pip language.";
  if (n.includes("nfp pre-positioning") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex NFP pre-positioning as event-risk planning through consensus, prior range, liquidity conditions, spread widening, invalidation before release, whipsaw trap, and pip distance. Avoid outcome promises.";
  if (n.includes("tax-loss harvesting") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto tax-loss harvesting as educational portfolio accounting through cost basis, unrealized loss, wash-sale or legal review, replacement exposure, fee/slippage, liquidity depth, and spread percentage. Do not provide legal advice.";
  if (n.includes("collar strategy") && n.includes("swing") && assetClass === "GOLD") return "Batch 581-600 directive: Teach swing Gold collar through Gold exposure, long put floor, short call cap, expiry, premium offset, wider point/dollar distance, assignment review, and delayed collar trap. Do not use pip language.";
  if (n.includes("collar strategy") && assetClass === "GOLD") return "Batch 581-600 directive: Teach Gold collar through Gold exposure, long put floor, short call cap, expiry, premium offset, IV review, assignment risk, and point/dollar distance. Do not use pip language.";
  if (n.includes("rebalancing frequency optimization") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto rebalancing frequency through target weights, drift band, calendar interval, transaction cost, tax/accounting friction, over-rebalance trap, liquidity depth, slippage, and spread percentage.";
  if (n.includes("structural break detection") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex structural break detection through regime window, model baseline, break test, confirmation sample, false-break statistic, sessions, spread, and pip distance.";
  if (n.includes("overnight/weekend gap") && assetClass === "FOREX") return "Batch 581-600 directive: Teach Forex overnight/weekend gap strategy through prior close, reopening gap, weekend event context, spread widening, fill or continuation scenario, invalidation, sessions, and pip distance.";
  if (n.includes("options collar hedging") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto options collar hedge through spot holding, long put floor, short call cap, expiry, premium offset, assignment risk, IV/liquidity review, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("diversified custody") && assetClass === "CRYPTO") return "Batch 581-600 directive: Teach crypto diversified custody through exchange, custodian, self-custody, issuer and protocol split, withdrawal test, reserve proof, operational checklist, liquidity depth, slippage, and spread percentage.";
  if (n.includes("order flow footprint") && n.includes("swing") && assetClass === "GOLD") return "Batch 601-620 directive: Teach swing Gold order-flow footprint through multi-session footprint source, bid/ask traded volume, delta, stacked imbalance, absorption, exhaustion, broader Gold point/dollar distance, and delayed false-read trap. Do not use pip language.";
  if (n.includes("order flow footprint") && assetClass === "GOLD") return "Batch 601-620 directive: Teach Gold order-flow footprint through data source, bid/ask traded volume, delta, stacked imbalance, absorption, exhaustion, wick response, and Gold point/dollar distance. Do not use pip language.";
  if (n.includes("opening range fade") && assetClass === "FOREX") return "Batch 601-620 directive: Teach Forex opening range fade through opening range high/low, failed extension, close back inside range, fade reference path, invalidation outside the failed side, session timing, spread, and pip distance.";
  if (n.includes("overnight carry basket") && assetClass === "FOREX") return "Batch 601-620 directive: Teach Forex overnight carry basket through rate differential, basket weights, swap/forward cost, overnight event risk, correlation concentration, protective invalidation boundary, sessions, spread, and pip distance. Avoid live-order wording.";
  if (n.includes("leverage ladder") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach crypto leverage ladder as staged leverage gating through max leverage cap, tier size, liquidation buffer, volatility cutback, funding cost, venue depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("time decay arbitrage") && assetClass === "FOREX") return "Batch 601-620 directive: Teach Forex options time-decay arbitrage through near/far expiry, theta decay, IV term structure, spread cost, gamma risk, event calendar, sessions, and forward-point or pip distance. Do not imply risk-free arbitrage.";
  if (n.includes("position hedging via inverse") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach crypto inverse ETP hedging through spot exposure, inverse product ratio, tracking error, issuer risk, rebalance drag, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("liquidity sweep fade") && n.includes("swing") && assetClass === "GOLD") return "Batch 601-620 directive: Teach swing Gold liquidity sweep fade through higher-timeframe external high/low, sweep wick, close back inside, patient fade path, broad invalidation, wider point/dollar distance, and delayed continuation trap. Do not use pip language.";
  if (n.includes("liquidity sweep fade") && assetClass === "GOLD") return "Batch 601-620 directive: Teach Gold liquidity sweep fade through marked high/low, sweep wick, close back inside, rejection body, fade reference zone, invalidation beyond the sweep, and point/dollar distance. Do not use pip language.";
  if (n.includes("fx forward spread trading") && assetClass === "FOREX") return "Batch 601-620 directive: Teach FX forward spread trading through spot rate, forward points, tenor spread, rate differential, carry cost, counterparty/capital constraint, sessions, spread, and pip or forward-point distance.";
  if (n.includes("emergency wallet seed backup") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach crypto wallet seed backup as operational resilience: seed phrase storage split, recovery test, hardware wallet state, access checklist, custody failure trap, and no price or pip language.";
  if (n.includes("momentum fuel check") && assetClass === "FOREX") return "Batch 601-620 directive: Teach Forex momentum fuel check through impulse candle quality, follow-through candles, tick/volume expansion where available, failed continuation, active session, spread, and pip distance. Avoid the restricted word; say trigger or clue.";
  if (n.includes("realized vs implied volatility spread") && assetClass === "FOREX") return "Batch 601-620 directive: Teach Forex realized-versus-implied volatility spread through realized volatility window, implied volatility quote, vol spread, event premium, mean-reversion risk, sessions, spread, and pip/vol-point distance.";
  if (n.includes("dynamic hedging via perps") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach crypto dynamic hedging via perpetuals through spot exposure, perp hedge ratio, funding cost, basis drift, liquidation buffer, venue depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("stop cluster breakout") && n.includes("swing") && assetClass === "GOLD") return "Batch 601-620 directive: Teach swing Gold stop-cluster breakout through obvious external cluster, broad break close, retest acceptance, failed return inside, wider point/dollar distance, and delayed trap. Do not use pip language.";
  if (n.includes("stop cluster breakout") && assetClass === "GOLD") return "Batch 601-620 directive: Teach Gold stop-cluster breakout through obvious clustered highs/lows, breakout close, retest acceptance, failed return inside, invalidation, and point/dollar distance. Do not use pip language.";
  if (n.includes("self-custody vs exchange risk") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach crypto self-custody versus exchange risk through exchange exposure, self-custody process, withdrawal test, recovery procedure, key-loss risk, counterparty risk, depth, slippage, and spread percentage.";
  if (n.includes("insurance on cefi platforms") && assetClass === "CRYPTO") return "Batch 601-620 directive: Teach CeFi platform insurance as coverage review through covered event, exclusion list, provider solvency, claim delay, counterparty exposure, withdrawal status, liquidity depth, slippage, and spread percentage. Avoid safety promises.";
  if (n.includes("relative value") && n.includes("gold vs silver") && n.includes("swing") && assetClass === "GOLD") return "Batch 601-620 directive: Teach swing Gold/Silver relative value through ratio spread, historical band, broad divergence, mean-reversion path, correlation break, event risk, and wider point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("relative value") && n.includes("gold vs silver") && assetClass === "GOLD") return "Batch 601-620 directive: Teach Gold/Silver relative value through ratio spread, historical band, divergence, mean-reversion path, correlation break, and Gold/Silver point, dollar, or ratio distance. Do not use pip language.";
  if (n.includes("multi-sig") && assetClass === "CRYPTO") return "Batch 621-640 directive: Teach crypto multi-sig fund transfers as operational control through signer set, threshold, proposal review, hardware wallet state, approval delay, failed signer trap, withdrawal route, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("fixed withdrawal schedule") && assetClass === "CRYPTO") return "Batch 621-640 directive: Teach crypto fixed withdrawal schedule as process control through calendar cadence, amount rule, venue balance, withdrawal test, fee state, chain congestion, custody destination, liquidity depth, slippage, and spread percentage. Do not use pip language.";
  if (n.includes("relative value") && n.includes("gold vs usd") && n.includes("swing") && assetClass === "GOLD") return "Batch 621-640 directive: Teach swing Gold versus USD relative value through DXY trend, Gold response, broad divergence, real-yield cross-check, event risk, delayed mean-reversion path, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("relative value") && n.includes("gold vs usd") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus USD relative value through DXY context, Gold response, divergence window, real-yield cross-check, mean-reversion path, dollar-only trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("structured exit laddering") && assetClass === "CRYPTO") return "Batch 621-640 directive: Teach crypto structured exposure reduction through planned tranches, remaining exposure, updated invalidation, liquidity depth, slippage, spread percentage, tax/accounting note, and random-reduction trap. Do not use pip language or target/outcome wording.";
  if (n.includes("statistical arbitrage") && n.includes("gold pair") && n.includes("swing") && assetClass === "GOLD") return "Batch 621-640 directive: Teach swing Gold-pair statistical arbitrage through paired instruments, hedge ratio, spread z-score, broad mean-reversion band, correlation break, event risk, and wider point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("statistical arbitrage") && n.includes("gold pair") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold-pair statistical arbitrage through paired instruments, hedge ratio, spread z-score, rolling correlation, mean-reversion path, relationship-break trap, and point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("execution algorithm") && n.includes("vwap") && n.includes("twap") && n.includes("swing") && assetClass === "GOLD") return "Batch 621-640 directive: Teach swing Gold VWAP/TWAP execution through multi-session participation schedule, volume curve, time slices, fill quality, inventory exposure, adverse selection, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("execution algorithm") && n.includes("vwap") && n.includes("twap") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold VWAP/TWAP execution through VWAP anchor, TWAP slices, participation rate, bid/ask spread, fill quality, inventory exposure, adverse selection, and point/dollar distance. Do not use pip language.";
  if (n.includes("market making") && n.includes("inventory model") && n.includes("swing") && assetClass === "GOLD") return "Batch 621-640 directive: Teach swing Gold market-making inventory through quote bands, inventory skew, wider spread, hedge review, adverse selection, multi-session holding risk, and wider point/dollar distance. Do not use pip language.";
  if (n.includes("market making") && n.includes("inventory model") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold market-making inventory through bid/ask quotes, spread capture study, fill probability, inventory skew, hedge review, adverse selection, and point/dollar distance. Do not use pip language.";
  if (n.includes("gold vs dxy divergence") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus DXY divergence through DXY direction, Gold response, divergence window, real-yield cross-check, USD-only trap, macro event context, and point/dollar distance. Do not use pip language.";
  if (n.includes("gold vs real yields spread") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus real-yields spread through nominal yields, inflation expectation, real-yield direction, Gold response, spread divergence, macro conflict trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("gold vs equities risk-off divergence") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus equities risk-off divergence through equity stress, volatility proxy, safe-haven response, yield conflict, delayed reaction, risk-off reversal trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("gold vs oil relationship") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus oil relationship through inflation proxy, commodity pressure, rolling correlation, divergence band, macro conflict, relationship-break trap, and point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("gold vs copper correlation") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus copper correlation through growth-metal proxy, safe-haven contrast, rolling correlation, divergence band, regime warning, relationship-break trap, and point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("gold vs inflation expectations") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold versus inflation expectations through breakeven inflation, real-yield cross-check, Gold response, inflation-only trap, macro event context, and point/dollar distance. Do not use pip language.";
  if (n.includes("gold vs silver ratio high") && assetClass === "GOLD") return "Batch 621-640 directive: Teach high Gold/Silver ratio rotation through ratio band, relative stretch toward Silver, confirmation path, correlation break, industrial-demand caveat, and point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("gold vs silver ratio low") && assetClass === "GOLD") return "Batch 621-640 directive: Teach low Gold/Silver ratio rotation through ratio band, relative stretch toward Gold, confirmation path, correlation break, safe-haven caveat, and point/dollar or ratio distance. Do not use pip language.";
  if (n.includes("rule-based trend system") && assetClass === "GOLD") return "Batch 621-640 directive: Teach Gold rule-based trend system through written trend rule, moving-average or structure filter, entry trigger, invalidation line, review checklist, whipsaw trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("rule-based mean reversion") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold rule-based mean reversion through a written deviation rule, mean line, z-score or standard-deviation band, range context, close back toward the mean, failed expansion trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("volatility-targeted system") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold volatility targeting through measured volatility input, target risk budget, size cutback, exposure cap, drawdown guard, event volatility caution, and point/dollar distance. Do not use pip language.";
  if (n.includes("regime-switching model") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold regime switching through named regime states, transition evidence, confidence threshold, model pause, false regime flip trap, macro/volatility context, and point/dollar distance. Do not use pip language.";
  if (n.includes("machine learning forecast model") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold machine-learning forecast audit through feature inputs, training window, walk-forward review, forecast band, uncertainty area, overfit trap, human review, and point/dollar distance. Do not use pip language.";
  if (n.includes("portfolio rebalancing algorithm") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold portfolio rebalancing through target weights, drift band, rebalance threshold, turnover cost, correlation review, event risk, and point/dollar distance. Do not use pip language.";
  if (n.includes("multi-timeframe confluence") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold multi-timeframe confluence through higher-timeframe structure, middle-timeframe pullback, lower-timeframe trigger, conflict state, wick trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("macro + technical confluence") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold macro and technical confluence through real-yield or USD driver, chart structure, disagreement matrix, event timing, macro-only trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("price action + volatility") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold price action plus volatility through candle structure, volatility band, acceptance close, invalidation outside normal movement, wick fakeout trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("yield + usd + chart structure") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold yield, USD, and chart structure confluence through real-yield direction, DXY context, marked structure, conflict matrix, delayed macro response trap, and point/dollar distance. Do not use pip language.";
  if ((n.includes("ai-assisted signal") || n.includes("ai-assisted trade review")) && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold AI-assisted trade review through prompt input quality, evidence checklist, model uncertainty, unsupported-output trap, human acceptance rule, and point/dollar distance. Do not use pip language.";
  if (n.includes("atr-based position sizing") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold ATR-based position sizing through ATR distance, invalidation distance, risk budget, size calculation, volatility spike caution, and point/dollar distance. Do not use pip language.";
  if (n.includes("leverage control") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold leverage control through leverage cap, margin buffer, volatility cutback, exposure reduction gate, event-risk warning, and point/dollar distance. Do not use pip language.";
  if (n.includes("news event risk reduction") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold news-event risk reduction through event calendar, spread/volatility expansion, reduced exposure rule, no-action window, whipsaw trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("drawdown controls") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold drawdown controls through equity curve state, drawdown threshold, pause or cutback rule, recovery gate, revenge-trade trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("portfolio hedging with gold") && assetClass === "GOLD") return "Batch 641-660 directive: Teach portfolio hedging with Gold through portfolio exposure, Gold hedge sleeve, correlation or beta estimate, stress window, over-hedge trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("correlation-aware exposure") && assetClass === "GOLD") return "Batch 641-660 directive: Teach Gold correlation-aware exposure through rolling correlation, exposure overlap, allocation cap, relationship-break warning, stress check, and point/dollar distance. Do not use pip language.";
  if ((n.includes("dummy strategy") || n.includes("previous-day high breakout")) && assetClass === "GOLD") return "Batch 641-660 directive: Rename to Previous-Day High Breakout and teach Gold previous-day high structure through premarked prior high, breakout close, retest or acceptance, invalidation back below the level, wick fakeout trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("bollinger squeeze breakout") && assetClass === "FOREX") return "Batch 641-660 directive: Teach Forex Bollinger squeeze breakout through tight Bollinger Bands, bandwidth compression, breakout close, retest, failed expansion trap, session/spread context, and pip distance. Keep it distinct from Gold Bollinger lessons.";
  if (n.includes("price action candle timing") && assetClass === "FOREX") return "Batch 641-660 directive: Keep this pure Level 1 Forex price-action timing. Teach candle open, high, low, close, body, wick, completed candle, nearby swing, and simple invalidation. Do not use indicators, sessions, liquidity, order blocks, volatility tools, or macro language.";
  if (n.includes("structural breakout") && n.includes("retest") && assetClass === "FOREX") return "Batch 641-660 directive: Teach Forex structural breakout retest through a marked support/resistance level, completed breakout close, retest acceptance, failed return inside the old range, spread check, and pip distance. Do not add session timing.";
  if (n.includes("exchange inflow exhaustion") && assetClass === "CRYPTO") return "Batch 661-671 directive: Teach crypto exchange inflow exhaustion as an on-chain audit. Show exchange inflow spike, follow-through failure, exchange-balance context, spot depth, slippage, spread percentage, absorption/exhaustion area, and stale-wallet-label trap. Do not use pip language.";
  if (n.includes("single moving-average filter") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex single moving-average filter as a simple Level 2 trend filter. Use one moving average, slope, price position, completed close, whipsaw trap, session/spread context, and pip distance. Do not turn it into a crossover lesson.";
  if (n.includes("q1 seasonal demand surge") && assetClass === "GOLD") return "Batch 661-671 directive: Teach Gold Q1 seasonal demand surge through seasonal window, historical tendency, current Gold structure, macro conflict check, point/dollar distance, and seasonality-only trap. Do not use pip language or certainty wording.";
  if (n.includes("adx trend strength filter") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex ADX trend-strength filter through ADX line, +DI/-DI direction, rising-versus-falling strength, price-structure agreement, low-ADX chop trap, sessions, spread, and pip distance.";
  if (n.includes("macd trend-following") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex MACD trend-following through MACD line, trigger line, histogram, zero baseline, trend continuation context, histogram fade trap, sessions, spread, and pip distance. Avoid the restricted word except MACD Signal Line if absolutely needed.";
  if (n.includes("funding rate arbitrage") && n.includes("delta neutral") && assetClass === "CRYPTO") return "Batch 661-671 directive: Teach crypto delta-neutral funding arbitrage through equalized spot/perpetual legs, funding interval, basis, fees, borrow/collateral, rebalance drift, liquidation buffer, venue depth, slippage, and spread percentage. Do not imply risk-free returns or use pip language.";
  if (n.includes("moving-average crossover trend") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex moving-average crossover trend through fast/slow moving averages, crossover context, slope agreement, completed close, whipsaw trap, session/spread context, and pip distance. Keep it distinct from single moving-average filter.";
  if (n.includes("real yield inversion play") && assetClass === "GOLD") return "Batch 661-671 directive: Teach Gold real-yield inversion through nominal yield, inflation expectation, real-yield direction, Gold response, macro conflict, delayed reaction trap, and point/dollar distance. Do not use pip language.";
  if (n.includes("supertrend volatility stop") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex Supertrend volatility stop through ATR-style volatility band, trend flip, trailing invalidation, pullback behavior, flip-whipsaw trap, session/spread context, and pip distance.";
  if (n.includes("ichimoku cloud logic") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex Ichimoku cloud logic through Kumo boundary, cloud thickness, Tenkan/Kijun relationship, Chikou context, completed close, return-inside-cloud trap, sessions, spread, and pip distance.";
  if (n.includes("london session momentum") && assetClass === "FOREX") return "Batch 661-671 directive: Teach Forex London session momentum through pre-London range, London open expansion, first stable close, pullback or hold, spread widening, false-start trap, and pip distance. Keep it as Level 4 session timing.";
  return "Strategy directive: Keep the lesson unique, asset-specific, aligned with its curriculum module, and matched to its visual component.";
}

export function overrideVisualModel(strategyName: string, assetClass: StrategyAssetClass, visualModel: VisualModelLike): VisualModelLike {
  const vm = { ...visualModel };
  const name = normalizedName(strategyName);
  const suffix = labelSuffix(strategyName, assetClass);

  if (name.includes("exchange inflow exhaustion") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "ExchangeInflowDistributionChart";
    vm.requiredLabels = [`Exchange Inflow Spike${suffix}`, `Follow-Through Failure${suffix}`, `Spot Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Inflow Exhaustion Area${suffix}`, `Absorption Review Area${suffix}`, `Stale Wallet Label Trap${suffix}`];
    return vm;
  }
  if (name.includes("single moving-average filter") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Single Moving Average${suffix}`, `Price Position And Slope${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Filter Agreement Area${suffix}`, `Completed Close Review${suffix}`, `Whipsaw Through Average Trap${suffix}`];
    return vm;
  }
  if (name.includes("q1 seasonal demand surge") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Q1 Seasonal Window${suffix}`, `Gold Structure Response${suffix}`, `Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Seasonal Demand Review${suffix}`, `Macro Conflict Check${suffix}`, `Seasonality-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("adx trend strength filter") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "ADXStrengthChart";
    vm.requiredLabels = [`ADX Strength Line${suffix}`, `ADX Threshold (25)${suffix}`, `+DI / -DI Direction Trigger${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Strength-Building Area${suffix}`, `Price-Structure Agreement Area${suffix}`, `Trigger Point Review${suffix}`, `Low-ADX Chop Trap${suffix}`];
    return vm;
  }
  if (name.includes("macd trend-following") && assetClass === "FOREX") {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MACDStructureChart";
    vm.requiredLabels = [`MACD Line And Trigger Line${suffix}`, `Histogram Bars Around Zero Baseline${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Trend Continuation Review${suffix}`, `Baseline Agreement Area${suffix}`, `Histogram Fade Trap${suffix}`];
    return vm;
  }
  if (name.includes("funding rate arbitrage") && name.includes("delta neutral") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`Equalized Spot And Perpetual Legs${suffix}`, `Funding / Basis / Fee Ledger${suffix}`, `Liquidation Buffer And Venue Depth${suffix}`];
    vm.requiredZones = [`Delta-Neutral Exposure Area${suffix}`, `Rebalance Drift Area${suffix}`, `Basis Blowout Or Counterparty Trap${suffix}`];
    return vm;
  }
  if (name.includes("moving-average crossover trend") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Fast Moving Average${suffix}`, `Slow Moving Average${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Crossover Agreement Area${suffix}`, `Completed Close Review${suffix}`, `Whipsaw Crossover Trap${suffix}`];
    return vm;
  }
  if (name.includes("real yield inversion play") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Real-Yield Direction${suffix}`, `Gold Structure Response${suffix}`, `Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Real-Yield Inversion Review${suffix}`, `Gold Response Area${suffix}`, `Delayed Macro Reaction Trap${suffix}`];
    return vm;
  }
  if (name.includes("supertrend volatility stop") && assetClass === "FOREX") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "SupertrendVolatilityChart";
    vm.requiredLabels = [`Supertrend Volatility Band${suffix}`, `Trend Flip Marker${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Trailing Invalidation Area${suffix}`, `Pullback Hold Review${suffix}`, `Flip-Whipsaw Trap${suffix}`];
    return vm;
  }
  if (name.includes("ichimoku cloud logic") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "IchimokuCloudChart";
    vm.requiredLabels = [`Kumo Cloud Boundary${suffix}`, `Tenkan / Kijun Relationship${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Cloud Logic Review${suffix}`, `Completed Close Beyond Cloud${suffix}`, `Return Inside Cloud Trap${suffix}`];
    return vm;
  }
  if (name.includes("london session momentum") && assetClass === "FOREX") {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [`Pre-London Range${suffix}`, `London Expansion Close${suffix}`, `Spread / Pip Distance Check${suffix}`];
    vm.requiredZones = [`London Momentum Window${suffix}`, `Pullback Or Hold Review${suffix}`, `False-Start Trap${suffix}`];
    return vm;
  }

  if (name.includes("ichimoku kumo breakout") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "IchimokuCloudChart";
    vm.requiredLabels = [`Tenkan-sen Conversion Line${suffix}`, `Kijun-sen Base Line${suffix}`, `Kumo Cloud Boundary${suffix}`];
    vm.requiredZones = [`Kumo Breakout Acceptance${suffix}`, `Return Inside Cloud Failure${suffix}`, `Chikou Conflict Trap${suffix}`];
    return vm;
  }
  if (name.includes("leverage control") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Leverage Cap${suffix}`, `Liquidation Buffer${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Margin-Ratio Safety Band${suffix}`, `Volatility Cutback Area${suffix}`, `Forced-Liquidation Trap${suffix}`];
    return vm;
  }
  if (name.includes("spot-futures divergence") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "SpotFuturesBasisChart";
    vm.requiredLabels = [`Swing Gold Spot Reference${suffix}`, `Futures Reference / Carry Cost${suffix}`, `Expiry Window${suffix}`];
    vm.requiredZones = [`Multi-Session Divergence Review${suffix}`, `Convergence Watch Area${suffix}`, `Divergence-Widening Trap${suffix}`];
    return vm;
  }
  if (name.includes("spot-futures divergence") && assetClass === "GOLD") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "SpotFuturesBasisChart";
    vm.requiredLabels = [`Gold Spot Reference${suffix}`, `Futures Reference${suffix}`, `Basis Spread / Carry Cost${suffix}`];
    vm.requiredZones = [`Spot-Futures Divergence Review${suffix}`, `Convergence Watch Area${suffix}`, `Divergence-Widening Trap${suffix}`];
    return vm;
  }
  if (name.includes("adaptive rsi") && assetClass === "FOREX") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "RSIMeanReversionChart";
    vm.requiredLabels = [`Connors RSI Composite${suffix}`, `Streak Component${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Adaptive RSI Extreme Area${suffix}`, `Return-Toward-Mean Path${suffix}`, `Plain-RSI Copy Trap${suffix}`];
    return vm;
  }
  if (name.includes("portfolio diversification across sectors") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Crypto Sector Buckets${suffix}`, `Correlation / Concentration Check${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Diversification Allocation Band${suffix}`, `Stable Reserve Review${suffix}`, `Hidden Sector Correlation Trap${suffix}`];
    return vm;
  }
  if (name.includes("heikin-ashi") && name.includes("rsi") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "HeikinAshiTrendChart";
    vm.requiredLabels = [`Heikin-Ashi Flat-Top / Flat-Bottom Candle State${suffix}`, `RSI Pullback Zone${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Heikin-RSI Confluence Area${suffix}`, `Color-Flip Boundary Failure${suffix}`, `RSI Disagreement Trap${suffix}`];
    return vm;
  }
  if (name.includes("event straddle") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Swing Gold Call Leg${suffix}`, `Swing Gold Put Leg${suffix}`, `Premium Ledger / IV Term Structure${suffix}`];
    vm.requiredZones = [`Multi-Session Move-Needed Area${suffix}`, `Event Volatility Review${suffix}`, `Delayed IV-Crush Trap${suffix}`];
    return vm;
  }
  if (name.includes("event straddle") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Gold Event Call Leg${suffix}`, `Gold Event Put Leg${suffix}`, `Premium Ledger / Implied Volatility${suffix}`];
    vm.requiredZones = [`Event Move-Needed Area${suffix}`, `One-Sided Move Review${suffix}`, `IV-Crush Trap${suffix}`];
    return vm;
  }
  if (name.includes("stablecoin hedging") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Stablecoin Reserve Band${suffix}`, `De-Risking Threshold${suffix}`, `Issuer / Depeg Warning${suffix}`];
    vm.requiredZones = [`Reserve Buffer Area${suffix}`, `Exchange Liquidity Review${suffix}`, `Over-Hedging Trap${suffix}`];
    return vm;
  }
  if (name.includes("williams %r") && assetClass === "FOREX") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "OscillatorRangeChart";
    vm.requiredLabels = [`Williams %R Extreme${suffix}`, `Forex Range Boundary${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Mean-Reversion Study Area${suffix}`, `Continuation Failure${suffix}`, `Oscillator-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("insurance via options") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Protective Option Structure${suffix}`, `Premium Cost / Expiry Window${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Insurance Coverage Area${suffix}`, `Premium Drag Review${suffix}`, `Under-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("klinger volume oscillator") && assetClass === "FOREX") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumeMomentumChart";
    vm.requiredLabels = [`Klinger Volume Line${suffix}`, `Zero-Line Volume Pressure${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Volume-Price Agreement Area${suffix}`, `False Volume Surge${suffix}`, `Divergence Trap${suffix}`];
    return vm;
  }
  if (name.includes("elder triple screen") && assetClass === "FOREX") {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MultiTimeframeConfluenceChart";
    vm.requiredLabels = [`Higher-Timeframe Trend Screen${suffix}`, `Intermediate Oscillator Screen${suffix}`, `Lower-Timeframe Activation Screen${suffix}`];
    vm.requiredZones = [`Triple-Screen Alignment Area${suffix}`, `Timeframe Conflict Zone${suffix}`, `Late-Activation Trap${suffix}`];
    return vm;
  }
  if (name.includes("dollar-cost averaging") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`DCA Tranche Schedule${suffix}`, `Reserve Rule${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Scheduled Allocation Band${suffix}`, `Exposure Cap Review${suffix}`, `Averaging-Too-Fast Trap${suffix}`];
    return vm;
  }
  if (name.includes("event strangle") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Swing OTM Call Strike${suffix}`, `Swing OTM Put Strike${suffix}`, `Premium Ledger / IV Term Structure${suffix}`];
    vm.requiredZones = [`Wide Movement-Needed Area${suffix}`, `Strike-Distance Review${suffix}`, `Delayed IV-Crush Trap${suffix}`];
    return vm;
  }
  if (name.includes("event strangle") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`OTM Call Strike${suffix}`, `OTM Put Strike${suffix}`, `Premium Ledger / Event Volatility${suffix}`];
    vm.requiredZones = [`Wide Movement-Needed Area${suffix}`, `Strike-Distance Review${suffix}`, `IV-Crush Trap${suffix}`];
    return vm;
  }
  if (name.includes("laddered entry and exit") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Laddered Tranche Map${suffix}`, `Spacing / Average Reference${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Planned Tranche Band${suffix}`, `Invalidation Pause Area${suffix}`, `Over-Laddering Trap${suffix}`];
    return vm;
  }
  if (name.includes("gann angle") && assetClass === "FOREX") {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "FibonacciConfluenceChart";
    vm.requiredLabels = [`Fixed Anchor Point${suffix}`, `1x1 Gann Angle${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Angle Retest Tolerance Area${suffix}`, `Angle Break Failure${suffix}`, `Forced-Geometry Trap${suffix}`];
    return vm;
  }
  if (name.includes("liquidation threshold monitoring") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationHeatmapChart";
    vm.requiredLabels = [`Estimated Liquidation Threshold${suffix}`, `Margin Buffer${suffix}`, `Venue Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Threshold Approach Area${suffix}`, `Forced-Liquidation Cluster${suffix}`, `Buffer Failure Trap${suffix}`];
    return vm;
  }
  if (name.includes("pivot point camarilla") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "PivotBreakoutChart";
    vm.requiredLabels = [`Camarilla R3/S3 Reaction Band${suffix}`, `Camarilla R4/S4 Break Boundary${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Camarilla Reversal Study Area${suffix}`, `Breakout Acceptance Area${suffix}`, `Failed Pivot Fade Trap${suffix}`];
    return vm;
  }
  if (name.includes("volatility selling") && name.includes("short straddle") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Swing Short Call Leg${suffix}`, `Swing Short Put Leg${suffix}`, `Premium / Margin / IV Term Check${suffix}`];
    vm.requiredZones = [`Multi-Session Breakeven Band${suffix}`, `Theta Decay Review${suffix}`, `Swing Gap Risk Trap${suffix}`];
    return vm;
  }
  if (name.includes("volatility selling") && name.includes("short straddle") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Short Call Leg${suffix}`, `Short Put Leg${suffix}`, `Premium Received / Margin Check${suffix}`];
    vm.requiredZones = [`Short-Straddle Range Body${suffix}`, `IV Compression Review${suffix}`, `IV Expansion / Gap Trap${suffix}`];
    return vm;
  }
  if (name.includes("hedged beta exposure") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Portfolio Beta Estimate${suffix}`, `Hedge Leg / Net Beta${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Beta Hedge Review Area${suffix}`, `Rebalance Threshold${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("quantile regression forecasting") && assetClass === "FOREX") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Median Forecast Line${suffix}`, `Quantile Prediction Bands${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Prediction Interval Review${suffix}`, `Walk-Forward Validation Area${suffix}`, `Outlier Regime Shift Trap${suffix}`];
    return vm;
  }
  if (name.includes("rebalancing into stablecoins") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Parabolic Extension Score${suffix}`, `Stablecoin Reserve Target${suffix}`, `Issuer / Depeg / Depth Check${suffix}`];
    vm.requiredZones = [`Rebalance Tranche Band${suffix}`, `Reserve Floor Review${suffix}`, `Late-Chase Rebalance Trap${suffix}`];
    return vm;
  }
  if (name.includes("fractal adaptive moving average") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`FRAMA Adaptive Average${suffix}`, `Fractal Efficiency Read${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Adaptive Trend Study Area${suffix}`, `Chop Filter Review${suffix}`, `Lag / Over-Smoothing Trap${suffix}`];
    return vm;
  }
  if (name.includes("gamma scalping") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "GammaScalpingChart";
    vm.requiredLabels = [`Swing Option Gamma${suffix}`, `Wider Delta Hedge Line${suffix}`, `Theta / IV / Point Distance Check${suffix}`];
    vm.requiredZones = [`Multi-Session Re-Hedge Area${suffix}`, `Hedge Cost Review${suffix}`, `Delayed Over-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("gamma scalping") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "GammaScalpingChart";
    vm.requiredLabels = [`Option Gamma${suffix}`, `Delta Hedge Line${suffix}`, `Theta / IV / Point Distance Check${suffix}`];
    vm.requiredZones = [`Re-Hedge Study Area${suffix}`, `Execution Cost Review${suffix}`, `Over-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("dynamic position sizing based on drawdown") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Equity Curve State${suffix}`, `Drawdown Threshold${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Size Cutback Calculation${suffix}`, `Recovery Gate Review${suffix}`, `Over-Reduction Trap${suffix}`];
    return vm;
  }
  if (name.includes("renko chart trend trading") && assetClass === "FOREX") {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "RenkoTrendChart";
    vm.requiredLabels = [`Fixed Renko Brick Size${suffix}`, `Reversal Brick Rule${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Renko Trend Sequence${suffix}`, `Brick Reversal Review${suffix}`, `Missing-Time False Brick Trap${suffix}`];
    return vm;
  }
  if (name.includes("stop-loss under volatility band") && assetClass === "CRYPTO") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [`Volatility Band Boundary${suffix}`, `Invalidation Below Band${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Volatility-Band Buffer Area${suffix}`, `Band Width Review${suffix}`, `Band Reclaim Trap${suffix}`];
    return vm;
  }
  if (name.includes("point & figure breakout") && assetClass === "FOREX") {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "PointFigureBreakoutChart";
    vm.requiredLabels = [`X/O Column Structure${suffix}`, `Box Size / Reversal Amount${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Point-and-Figure Breakout Column${suffix}`, `Retest Column Review${suffix}`, `Failed Column Trap${suffix}`];
    return vm;
  }
  if (name.includes("bull call spread") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Swing Long Lower Call${suffix}`, `Swing Short Higher Call${suffix}`, `Debit / IV / Time Check${suffix}`];
    vm.requiredZones = [`Capped Upside Payoff Area${suffix}`, `Wider Point-Distance Review${suffix}`, `Swing Time-Decay Trap${suffix}`];
    return vm;
  }
  if (name.includes("bull call spread") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Long Lower Call${suffix}`, `Short Higher Call${suffix}`, `Debit / IV / Time Check${suffix}`];
    vm.requiredZones = [`Capped Upside Payoff Area${suffix}`, `Defined-Risk Review${suffix}`, `Time-Decay Trap${suffix}`];
    return vm;
  }
  if (name.includes("capital allocation caps") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Per-Asset Allocation Cap${suffix}`, `Sector / Theme Cap${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Capital Cap Review Area${suffix}`, `Reserve Floor Check${suffix}`, `Hidden Concentration Trap${suffix}`];
    return vm;
  }
  if (name.includes("tick chart scalping") && assetClass === "FOREX") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Tick Bar Construction${suffix}`, `Spread Filter${suffix}`, `Session / Pip Distance Check${suffix}`];
    vm.requiredZones = [`Micro Range Break Area${suffix}`, `Fill Quality Review${suffix}`, `Overtrading Trap${suffix}`];
    return vm;
  }
  if (name.includes("stress testing portfolio") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Stress Scenario Shock${suffix}`, `Correlation Spike${suffix}`, `Liquidity Haircut / Spread Percentage${suffix}`];
    vm.requiredZones = [`Portfolio Drawdown Estimate${suffix}`, `Reserve Response Area${suffix}`, `Stress Blind-Spot Trap${suffix}`];
    return vm;
  }
  if (name.includes("currency strength meter") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Pair Strength Visual";
    vm.componentType = "ForexPairStrengthMeter";
    vm.requiredLabels = [`Currency Basket Inputs${suffix}`, `Base / Quote Strength Split${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Relative Strength Ranking Area${suffix}`, `Pair Selection Review${suffix}`, `Stale Strength Reading Trap${suffix}`];
    return vm;
  }
  if (name.includes("bear put spread") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Swing Long Higher Put${suffix}`, `Swing Short Lower Put${suffix}`, `Debit / Expiry / IV Check${suffix}`];
    vm.requiredZones = [`Swing Capped Downside Payoff Area${suffix}`, `Wider Point-Distance Review${suffix}`, `Delayed Time-Decay Trap${suffix}`];
    return vm;
  }
  if (name.includes("bear put spread") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Long Higher Put${suffix}`, `Short Lower Put${suffix}`, `Debit / IV / Time Check${suffix}`];
    vm.requiredZones = [`Capped Downside Payoff Area${suffix}`, `Defined-Risk Review${suffix}`, `Time-Decay Trap${suffix}`];
    return vm;
  }
  if (name.includes("economic surprise index") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    vm.requiredLabels = [`Consensus Versus Actual Releases${suffix}`, `Surprise Index Direction${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Macro Surprise Review Area${suffix}`, `Currency Response Window${suffix}`, `Stale Surprise Data Trap${suffix}`];
    return vm;
  }
  if (name.includes("risk buffer via insurance protocols") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Insurance Coverage Buffer${suffix}`, `Protocol Solvency / Exclusions${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Coverage Allocation Area${suffix}`, `Premium Drag Review${suffix}`, `Claim Delay / Smart-Contract Trap${suffix}`];
    return vm;
  }
  if (name.includes("political risk premium") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    vm.requiredLabels = [`Political Event Timeline${suffix}`, `Currency Risk Premium${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Risk-Premium Repricing Area${suffix}`, `Hedge Demand Review${suffix}`, `Rumor-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("portfolio volatility cap") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Realized Portfolio Volatility${suffix}`, `Volatility Cap Threshold${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Allocation Cutback Area${suffix}`, `Correlation Spike Review${suffix}`, `Same-Exposure Volatility Trap${suffix}`];
    return vm;
  }
  if (name.includes("ratio call spread") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Swing Long Call Leg${suffix}`, `Multiple Short Higher Calls${suffix}`, `Expiry / IV / Point Distance Check${suffix}`];
    vm.requiredZones = [`Swing Ratio Payoff Body${suffix}`, `Upside Risk Beyond Shorts${suffix}`, `Delayed Overextension Trap${suffix}`];
    return vm;
  }
  if (name.includes("ratio call spread") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsVerticalSpreadChart";
    vm.requiredLabels = [`Long Call Leg${suffix}`, `Multiple Short Higher Calls${suffix}`, `Debit-Credit / IV Check${suffix}`];
    vm.requiredZones = [`Ratio Payoff Body${suffix}`, `Upside Risk Beyond Short Calls${suffix}`, `Overextension Trap${suffix}`];
    return vm;
  }
  if (name.includes("geopolitical hedging") && assetClass === "FOREX") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "RiskOnCarryBasketChart";
    vm.requiredLabels = [`Risk Event Timeline${suffix}`, `Safe-Haven Currency Basket${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Haven Hedge Review Area${suffix}`, `Risk-Off Confirmation Window${suffix}`, `Haven Unwind Trap${suffix}`];
    return vm;
  }
  if (name.includes("liquidity risk assessment") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Order-Book Depth Snapshot${suffix}`, `Exchange Concentration Check${suffix}`, `Spread Percentage / Slippage Estimate${suffix}`];
    vm.requiredZones = [`Liquidity Buffer Area${suffix}`, `Withdrawal Status Review${suffix}`, `Thin-Book Trap${suffix}`];
    return vm;
  }
  if (name.includes("iron condor") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsIronCondorChart";
    vm.requiredLabels = [`Swing Short Put Spread${suffix}`, `Swing Short Call Spread${suffix}`, `Wings / Premium / Margin Check${suffix}`];
    vm.requiredZones = [`Swing Range Body${suffix}`, `Wider Gap Risk Review${suffix}`, `Delayed Breakout Trap${suffix}`];
    return vm;
  }
  if (name.includes("iron condor") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsIronCondorChart";
    vm.requiredLabels = [`Short Put Spread${suffix}`, `Short Call Spread${suffix}`, `Wings / Premium / Margin Check${suffix}`];
    vm.requiredZones = [`Defined Range Body${suffix}`, `Gap Risk Review${suffix}`, `Range Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("high-yield bond spread") && assetClass === "FOREX") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    vm.requiredLabels = [`High-Yield Spread Direction${suffix}`, `Risk Currency Response${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Credit-Risk Review Area${suffix}`, `Dollar / Haven Cross-Check${suffix}`, `Stale Credit Data Trap${suffix}`];
    return vm;
  }
  if (name.includes("counterparty risk diversification") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Exchange / Custodian Split${suffix}`, `Protocol / Issuer Exposure Cap${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Counterparty Diversification Area${suffix}`, `Withdrawal Limit Review${suffix}`, `Single-Venue Failure Trap${suffix}`];
    return vm;
  }
  if (name.includes("purchasing managers") && name.includes("pmi") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    vm.requiredLabels = [`Manufacturing / Services PMI${suffix}`, `Expansion Threshold / Trend${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`PMI Trend Review Area${suffix}`, `Consensus Surprise Window${suffix}`, `Stale Release Trap${suffix}`];
    return vm;
  }
  if (name.includes("stablecoin yield diversification") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Stablecoin Platform Allocation${suffix}`, `Issuer / APY Source Check${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Yield Diversification Area${suffix}`, `Lockup And Depeg Review${suffix}`, `Yield-Chasing Trap${suffix}`];
    return vm;
  }
  if (name.includes("emergency stop on exchange outage") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Exchange Status Timestamp${suffix}`, `Cancel-Only / Withdrawal Halt Check${suffix}`, `Backup Venue Liquidity${suffix}`];
    vm.requiredZones = [`Emergency Risk Pause Area${suffix}`, `Hedge Venue Review${suffix}`, `Frozen-Position Trap${suffix}`];
    return vm;
  }
  if (name.includes("butterfly spread") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsButterflySpreadChart";
    vm.requiredLabels = [`Swing Lower Wing${suffix}`, `Swing Body Strikes${suffix}`, `Upper Wing / IV Term Check${suffix}`];
    vm.requiredZones = [`Swing Central Payoff Body${suffix}`, `Wider Point-Distance Review${suffix}`, `Delayed Illiquid-Strike Trap${suffix}`];
    return vm;
  }
  if (name.includes("butterfly spread") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "OptionsButterflySpreadChart";
    vm.requiredLabels = [`Lower Wing${suffix}`, `Body Strikes${suffix}`, `Upper Wing / IV Check${suffix}`];
    vm.requiredZones = [`Central Body Payoff Area${suffix}`, `Same-Expiry Review${suffix}`, `Illiquid Strike Trap${suffix}`];
    return vm;
  }
  if (name.includes("speculative position unwind") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Speculative Position Proxy${suffix}`, `Weekly Change / Crowd Side${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Unwind Review Area${suffix}`, `Price Response Window${suffix}`, `Reporting-Lag Trap${suffix}`];
    return vm;
  }
  if (name.includes("crowded trade fade") && assetClass === "FOREX") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Crowding Evidence${suffix}`, `Failed Continuation Structure${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Fade Study Area${suffix}`, `Position Reduction Review${suffix}`, `Crowding Persistence Trap${suffix}`];
    return vm;
  }
  if (name.includes("max drawdown alert") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Equity Curve State${suffix}`, `Max Drawdown Threshold${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Risk Pause Area${suffix}`, `Recovery Rule Review${suffix}`, `Ignoring Alert Trap${suffix}`];
    return vm;
  }
  if (name.includes("staged exit") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Planned Reduction Tranches${suffix}`, `Remaining Exposure Check${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Reference-Zone Reduction Ladder${suffix}`, `Invalidation Update Area${suffix}`, `Over-Exit / Thin-Book Trap${suffix}`];
    return vm;
  }
  if (name.includes("quant sentiment index") && assetClass === "FOREX") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Sentiment Index Inputs${suffix}`, `Weighted Score Threshold${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Overlay Agreement Area${suffix}`, `Price-Context Cross-Check${suffix}`, `Stale Sentiment Trap${suffix}`];
    return vm;
  }
  if (name.includes("protective put") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Swing Gold Exposure${suffix}`, `Long Put Floor${suffix}`, `Expiry / IV / Point Distance Check${suffix}`];
    vm.requiredZones = [`Swing Downside Floor Area${suffix}`, `Upside Participation Review${suffix}`, `Delayed Under-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("protective put") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Gold Exposure${suffix}`, `Long Put Strike / Expiry${suffix}`, `Premium / IV Check${suffix}`];
    vm.requiredZones = [`Downside Floor Area${suffix}`, `Upside Participation Review${suffix}`, `Under-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("hedging stablecoin depeg") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Stablecoin Issuer Exposure${suffix}`, `Depeg Threshold${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Hedge / Rotation Area${suffix}`, `Withdrawal Status Review${suffix}`, `False-Alarm Depeg Trap${suffix}`];
    return vm;
  }
  if (name.includes("multi-asset correlation") && assetClass === "FOREX") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Currency Pair Exposure${suffix}`, `Multi-Asset Correlation Inputs${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Correlation Agreement Area${suffix}`, `Exposure Overlap Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("portfolio insurance via stable yield") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Stable Yield Sleeve${suffix}`, `Issuer / Platform Risk${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Insurance Allocation Buffer${suffix}`, `Lockup / Depeg Review${suffix}`, `Yield-Source Trap${suffix}`];
    return vm;
  }
  if (name.includes("news volume spike scalping") && assetClass === "FOREX") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`News Timestamp${suffix}`, `Volume Spike / Spread Expansion${suffix}`, `Pip Distance Check${suffix}`];
    vm.requiredZones = [`Fast Acceptance Area${suffix}`, `Slippage Review${suffix}`, `News Spike Reversal Trap${suffix}`];
    return vm;
  }
  if (name.includes("covered call") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "CoveredCallChart";
    vm.requiredLabels = [`Swing Gold Exposure${suffix}`, `Short Call Cap${suffix}`, `Expiry / IV / Point Distance Check${suffix}`];
    vm.requiredZones = [`Swing Premium Offset Area${suffix}`, `Upside Cap Review${suffix}`, `Delayed Rally / Assignment Trap${suffix}`];
    return vm;
  }
  if (name.includes("covered call") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "CoveredCallChart";
    vm.requiredLabels = [`Gold Exposure${suffix}`, `Short Call Strike / Expiry${suffix}`, `Premium / IV Check${suffix}`];
    vm.requiredZones = [`Premium Offset Area${suffix}`, `Upside Cap Review${suffix}`, `Rally / Assignment Trap${suffix}`];
    return vm;
  }
  if (name.includes("nfp pre-positioning") && assetClass === "FOREX") {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsBreakoutChart";
    vm.requiredLabels = [`NFP Release Window${suffix}`, `Consensus / Prior Range${suffix}`, `Spread / Pip Distance Check${suffix}`];
    vm.requiredZones = [`Pre-Release Planning Area${suffix}`, `Post-Release Whipsaw Review${suffix}`, `Pre-Positioning Trap${suffix}`];
    return vm;
  }
  if (name.includes("tax-loss harvesting") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Cost Basis / Unrealized Loss${suffix}`, `Replacement Exposure Review${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Harvest Candidate Area${suffix}`, `Legal / Wash-Sale Review${suffix}`, `Tax-Only Decision Trap${suffix}`];
    return vm;
  }
  if (name.includes("collar strategy") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Swing Gold Exposure${suffix}`, `Long Put Floor${suffix}`, `Short Call Cap / Expiry Check${suffix}`];
    vm.requiredZones = [`Swing Collar Protection Band${suffix}`, `Premium Offset Review${suffix}`, `Delayed Cap / Assignment Trap${suffix}`];
    return vm;
  }
  if (name.includes("collar strategy") && assetClass === "GOLD") {
    vm.visualCategory = "Options Positioning Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Gold Exposure${suffix}`, `Long Put Floor${suffix}`, `Short Call Cap / Premium Check${suffix}`];
    vm.requiredZones = [`Collar Protection Band${suffix}`, `Premium Offset Review${suffix}`, `Cap / Assignment Trap${suffix}`];
    return vm;
  }
  if (name.includes("rebalancing frequency optimization") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Target Weights / Drift Band${suffix}`, `Calendar Interval${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Rebalance Timing Area${suffix}`, `Cost / Tax Review${suffix}`, `Over-Rebalancing Trap${suffix}`];
    return vm;
  }
  if (name.includes("structural break detection") && assetClass === "FOREX") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Baseline Regime Window${suffix}`, `Break Test Result${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Structural Break Review Area${suffix}`, `Confirmation Sample${suffix}`, `False-Break Statistic Trap${suffix}`];
    return vm;
  }
  if (name.includes("overnight/weekend gap") && assetClass === "FOREX") {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "GapBreakoutChart";
    vm.requiredLabels = [`Prior Close / Reopen Price${suffix}`, `Weekend Event Context${suffix}`, `Spread / Pip Distance Check${suffix}`];
    vm.requiredZones = [`Gap Fill Review Area${suffix}`, `Continuation Review${suffix}`, `Wide-Reopen Spread Trap${suffix}`];
    return vm;
  }
  if (name.includes("options collar hedging") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Spot Holding${suffix}`, `Long Put Floor${suffix}`, `Short Call Cap / Spread Percentage${suffix}`];
    vm.requiredZones = [`Collar Hedge Band${suffix}`, `IV / Liquidity Review${suffix}`, `Assignment / Under-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("diversified custody") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Exchange / Custodian Split${suffix}`, `Self-Custody / Issuer Exposure${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Custody Diversification Area${suffix}`, `Withdrawal Test Review${suffix}`, `Single-Custody Failure Trap${suffix}`];
    return vm;
  }
  if (name.includes("order flow footprint") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "FootprintDeltaChart";
    vm.requiredLabels = [`Swing Footprint Source${suffix}`, `Bid/Ask Delta Imbalance${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Multi-Session Absorption Area${suffix}`, `Exhaustion Review${suffix}`, `Delayed False-Footprint Trap${suffix}`];
    return vm;
  }
  if (name.includes("order flow footprint") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "FootprintDeltaChart";
    vm.requiredLabels = [`Footprint Data Source${suffix}`, `Bid/Ask Delta Imbalance${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Absorption Area${suffix}`, `Exhaustion Review${suffix}`, `One-Print Footprint Trap${suffix}`];
    return vm;
  }
  if (name.includes("opening range fade") && assetClass === "FOREX") {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "OpeningRangeTimeStopChart";
    vm.requiredLabels = [`Opening Range High / Low${suffix}`, `Failed Extension Close${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Fade Back Inside Range${suffix}`, `Invalidation Beyond Failed Side${suffix}`, `Late Fade Trap${suffix}`];
    return vm;
  }
  if (name.includes("overnight carry basket") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "InterestRateDifferentialChart";
    vm.requiredLabels = [`Carry Basket Weights${suffix}`, `Rate Differential / Swap Cost${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Overnight Carry Review${suffix}`, `Correlation Concentration Area${suffix}`, `Funding Reversal Trap${suffix}`];
    return vm;
  }
  if (name.includes("leverage ladder") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Leverage Tier Ladder${suffix}`, `Liquidation Buffer${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Volatility Cutback Area${suffix}`, `Funding Cost Review${suffix}`, `Over-Leverage Trap${suffix}`];
    return vm;
  }
  if (name.includes("time decay arbitrage") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Near / Far Expiry${suffix}`, `Theta Decay / IV Term Structure${suffix}`, `Forward-Point / Pip Check${suffix}`];
    vm.requiredZones = [`Time-Decay Review Area${suffix}`, `Event Calendar Review${suffix}`, `Gamma / Spread-Cost Trap${suffix}`];
    return vm;
  }
  if (name.includes("position hedging via inverse") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Spot Exposure${suffix}`, `Inverse ETP Hedge Ratio${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Hedge Coverage Area${suffix}`, `Tracking Error Review${suffix}`, `Issuer / Rebalance Drag Trap${suffix}`];
    return vm;
  }
  if (name.includes("liquidity sweep fade") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [`HTF External High / Low${suffix}`, `Sweep Wick And Close Back Inside${suffix}`, `Wider Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Swing Fade Review Area${suffix}`, `Broad Invalidation Beyond Sweep${suffix}`, `Delayed Continuation Trap${suffix}`];
    return vm;
  }
  if (name.includes("liquidity sweep fade") && assetClass === "GOLD") {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [`Marked High / Low${suffix}`, `Sweep Wick And Close Back Inside${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Fade Review Area${suffix}`, `Invalidation Beyond Sweep${suffix}`, `Continuation Trap${suffix}`];
    return vm;
  }
  if (name.includes("fx forward spread trading") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "FXForwardCurveChart";
    vm.requiredLabels = [`Spot Rate${suffix}`, `Forward Points / Tenor Spread${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Forward Spread Review${suffix}`, `Carry Cost Area${suffix}`, `Capital Constraint Trap${suffix}`];
    return vm;
  }
  if (name.includes("emergency wallet seed backup") && assetClass === "CRYPTO") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Seed Storage Split${suffix}`, `Recovery Test Status${suffix}`, `Access Checklist${suffix}`];
    vm.requiredZones = [`Backup Review Area${suffix}`, `Hardware Wallet State${suffix}`, `Unverified Recovery Trap${suffix}`];
    return vm;
  }
  if (name.includes("momentum fuel check") && assetClass === "FOREX") {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MomentumStrengthChart";
    vm.requiredLabels = [`Impulse Candle Quality${suffix}`, `Follow-Through Check${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Momentum Fuel Review${suffix}`, `Continuation Path${suffix}`, `Fuel Exhaustion Trap${suffix}`];
    return vm;
  }
  if (name.includes("realized vs implied volatility spread") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "VolatilitySkewChart";
    vm.requiredLabels = [`Realized Volatility Window${suffix}`, `Implied Volatility Quote${suffix}`, `Vol-Point / Pip Check${suffix}`];
    vm.requiredZones = [`Volatility Spread Review${suffix}`, `Event Premium Area${suffix}`, `Vol Spread Mean-Reversion Trap${suffix}`];
    return vm;
  }
  if (name.includes("dynamic hedging via perps") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "DerivativesDashboard";
    vm.requiredLabels = [`Spot Exposure${suffix}`, `Perp Hedge Ratio${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Dynamic Hedge Band${suffix}`, `Funding / Basis Review${suffix}`, `Liquidation Buffer Trap${suffix}`];
    return vm;
  }
  if (name.includes("stop cluster breakout") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [`Swing Stop Cluster Area${suffix}`, `Broad Breakout Close${suffix}`, `Wider Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Swing Retest Acceptance${suffix}`, `Failed Return Inside Cluster${suffix}`, `Delayed Breakout Trap${suffix}`];
    return vm;
  }
  if (name.includes("stop cluster breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [`Stop Cluster Area${suffix}`, `Breakout Close${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Retest Acceptance${suffix}`, `Failed Return Inside Cluster${suffix}`, `Cluster Breakout Trap${suffix}`];
    return vm;
  }
  if (name.includes("self-custody vs exchange risk") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Exchange Exposure${suffix}`, `Self-Custody Process${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Custody Risk Split${suffix}`, `Withdrawal / Recovery Test${suffix}`, `Single Access Point Trap${suffix}`];
    return vm;
  }
  if (name.includes("insurance on cefi platforms") && assetClass === "CRYPTO") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Covered Event / Exclusions${suffix}`, `Provider Solvency${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`CeFi Insurance Review${suffix}`, `Claim Delay / Withdrawal Status${suffix}`, `Coverage Assumption Trap${suffix}`];
    return vm;
  }
  if (name.includes("relative value") && name.includes("gold vs silver") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Swing Gold/Silver Ratio${suffix}`, `Historical Band${suffix}`, `Wider Ratio / Point Distance${suffix}`];
    vm.requiredZones = [`Broad Divergence Area${suffix}`, `Mean-Reversion Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("relative value") && name.includes("gold vs silver") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Gold/Silver Ratio${suffix}`, `Historical Band${suffix}`, `Ratio / Point Distance${suffix}`];
    vm.requiredZones = [`Divergence Area${suffix}`, `Mean-Reversion Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("multi-sig") && assetClass === "CRYPTO") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Signer Set / Threshold${suffix}`, `Proposal Review${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Multi-Sig Approval Flow${suffix}`, `Hardware Wallet State${suffix}`, `Failed Signer Trap${suffix}`];
    return vm;
  }
  if (name.includes("fixed withdrawal schedule") && assetClass === "CRYPTO") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Withdrawal Cadence${suffix}`, `Venue Balance / Destination${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Scheduled Withdrawal Review${suffix}`, `Chain Fee / Congestion Area${suffix}`, `Access Delay Trap${suffix}`];
    return vm;
  }
  if (name.includes("relative value") && name.includes("gold vs usd") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing DXY Trend${suffix}`, `Gold Response${suffix}`, `Wider Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Broad Gold-USD Divergence${suffix}`, `Real-Yield Cross-Check${suffix}`, `Delayed Dollar-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("relative value") && name.includes("gold vs usd") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`DXY Context${suffix}`, `Gold Response${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Gold-USD Divergence Window${suffix}`, `Real-Yield Cross-Check${suffix}`, `Dollar-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("structured exit laddering") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Reduction Tranche Ladder${suffix}`, `Remaining Exposure${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Exposure Reduction Plan${suffix}`, `Updated Invalidation Area${suffix}`, `Random Reduction Trap${suffix}`];
    return vm;
  }
  if (name.includes("statistical arbitrage") && name.includes("gold pair") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Swing Gold Pair Spread${suffix}`, `Hedge Ratio / Z-Score${suffix}`, `Wider Point / Ratio Distance${suffix}`];
    vm.requiredZones = [`Broad Mean-Reversion Band${suffix}`, `Event-Risk Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("statistical arbitrage") && name.includes("gold pair") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Gold Pair Spread${suffix}`, `Hedge Ratio / Z-Score${suffix}`, `Point / Ratio Distance${suffix}`];
    vm.requiredZones = [`Mean-Reversion Band${suffix}`, `Rolling Correlation Review${suffix}`, `Relationship Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("execution algorithm") && name.includes("vwap") && name.includes("twap") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Swing VWAP / TWAP Schedule${suffix}`, `Fill Quality / Spread${suffix}`, `Wider Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Multi-Session Participation Path${suffix}`, `Inventory Review${suffix}`, `Delayed Adverse Selection Trap${suffix}`];
    return vm;
  }
  if (name.includes("execution algorithm") && name.includes("vwap") && name.includes("twap") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`VWAP Anchor / TWAP Slices${suffix}`, `Fill Quality / Spread${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Participation Path${suffix}`, `Inventory Exposure Review${suffix}`, `Adverse Selection Trap${suffix}`];
    return vm;
  }
  if (name.includes("market making") && name.includes("inventory model") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Swing Quote Band${suffix}`, `Inventory Skew${suffix}`, `Wider Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Multi-Session Spread Review${suffix}`, `Hedge Adjustment Area${suffix}`, `Delayed Adverse Selection Trap${suffix}`];
    return vm;
  }
  if (name.includes("market making") && name.includes("inventory model") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Bid / Ask Quote Band${suffix}`, `Inventory Skew${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Spread Capture Review${suffix}`, `Hedge Adjustment Area${suffix}`, `Adverse Selection Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs dxy divergence") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`DXY Direction${suffix}`, `Gold Response${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Gold-DXY Divergence Window${suffix}`, `Real-Yield Cross-Check${suffix}`, `USD-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs real yields spread") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Real-Yield Direction${suffix}`, `Gold Response${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Real-Yield Spread Review${suffix}`, `Inflation Expectation Cross-Check${suffix}`, `Macro Conflict Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs equities risk-off divergence") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Equity Stress Proxy${suffix}`, `Gold Safe-Haven Response${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Risk-Off Divergence Window${suffix}`, `Yield Conflict Review${suffix}`, `Risk-Off Reversal Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs oil relationship") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Gold / Oil Rolling Correlation${suffix}`, `Inflation Proxy Context${suffix}`, `Point / Ratio Distance${suffix}`];
    vm.requiredZones = [`Commodity Divergence Band${suffix}`, `Macro Conflict Review${suffix}`, `Relationship Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs copper correlation") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Gold / Copper Rolling Correlation${suffix}`, `Growth-Metal Context${suffix}`, `Point / Ratio Distance${suffix}`];
    vm.requiredZones = [`Growth-Versus-Haven Divergence${suffix}`, `Regime Review${suffix}`, `Relationship Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs inflation expectations") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Inflation Expectation Proxy${suffix}`, `Real-Yield Cross-Check${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Inflation Expectation Review${suffix}`, `Gold Response Area${suffix}`, `Inflation-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs silver ratio high") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`High Gold/Silver Ratio${suffix}`, `Silver Rotation Watch${suffix}`, `Ratio / Point Distance${suffix}`];
    vm.requiredZones = [`High-Ratio Stretch Band${suffix}`, `Confirmation Path Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("gold vs silver ratio low") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Low Gold/Silver Ratio${suffix}`, `Gold Rotation Watch${suffix}`, `Ratio / Point Distance${suffix}`];
    vm.requiredZones = [`Low-Ratio Stretch Band${suffix}`, `Confirmation Path Review${suffix}`, `Correlation Break Trap${suffix}`];
    return vm;
  }
  if (name.includes("rule-based trend system") && assetClass === "GOLD") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Written Trend Rule${suffix}`, `Trend Filter${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Rule Alignment Area${suffix}`, `Invalidation Line Review${suffix}`, `Whipsaw Trap${suffix}`];
    return vm;
  }
  if (name.includes("rule-based mean reversion") && assetClass === "GOLD") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ZScoreMeanReversionChart";
    vm.requiredLabels = [`Mean Line${suffix}`, `Deviation Band${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Mean-Reversion Review${suffix}`, `Failed Expansion Trap${suffix}`, `Rule Drift Trap${suffix}`];
    return vm;
  }
  if (name.includes("volatility-targeted system") && assetClass === "GOLD") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Volatility Input${suffix}`, `Target Risk Budget${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Size Cutback Area${suffix}`, `Exposure Cap Review${suffix}`, `Event Volatility Trap${suffix}`];
    return vm;
  }
  if (name.includes("regime-switching model") && assetClass === "GOLD") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Gold Regime States${suffix}`, `Transition Evidence${suffix}`, `Confidence Threshold${suffix}`];
    vm.requiredZones = [`Regime Audit Area${suffix}`, `Model Pause Zone${suffix}`, `False Regime Flip Trap${suffix}`];
    return vm;
  }
  if (name.includes("machine learning forecast model") && assetClass === "GOLD") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Feature Input Window${suffix}`, `Forecast Band${suffix}`, `Walk-Forward Review${suffix}`];
    vm.requiredZones = [`Training Window Audit${suffix}`, `Uncertainty Area${suffix}`, `Overfit Trap${suffix}`];
    return vm;
  }
  if (name.includes("portfolio rebalancing algorithm") && assetClass === "GOLD") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Target Gold Weight${suffix}`, `Drift Band${suffix}`, `Correlation / Cost Check${suffix}`];
    vm.requiredZones = [`Rebalance Threshold${suffix}`, `Turnover Review${suffix}`, `Over-Rebalance Trap${suffix}`];
    return vm;
  }
  if (name.includes("multi-timeframe confluence") && assetClass === "GOLD") {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MultiTimeframeConfluenceChart";
    vm.requiredLabels = [`Higher-Timeframe Structure${suffix}`, `Middle-Timeframe Pullback${suffix}`, `Lower-Timeframe Trigger${suffix}`];
    vm.requiredZones = [`Timeframe Agreement Area${suffix}`, `Wick Acceptance Review${suffix}`, `Timeframe Conflict Trap${suffix}`];
    return vm;
  }
  if (name.includes("macro + technical confluence") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Real-Yield / USD Driver${suffix}`, `Gold Chart Structure${suffix}`, `Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Macro-Technical Agreement${suffix}`, `Disagreement Matrix${suffix}`, `Macro-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("price action + volatility") && assetClass === "GOLD") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [`Gold Candle Structure${suffix}`, `Volatility Band${suffix}`, `Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Volatility-Acceptance Area${suffix}`, `Normal-Movement Buffer${suffix}`, `Wick Fakeout Trap${suffix}`];
    return vm;
  }
  if (name.includes("yield + usd + chart structure") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Real-Yield Direction${suffix}`, `DXY Context${suffix}`, `Gold Structure Level${suffix}`];
    vm.requiredZones = [`Yield-USD-Structure Agreement${suffix}`, `Macro Conflict Review${suffix}`, `Delayed Response Trap${suffix}`];
    return vm;
  }
  if ((name.includes("ai-assisted signal") || name.includes("ai-assisted trade review")) && assetClass === "GOLD") {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`AI Thesis Draft${suffix}`, `Human Review Checklist${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Evidence Audit Area${suffix}`, `Uncertainty Review${suffix}`, `Unsupported Output Trap${suffix}`];
    return vm;
  }
  if (name.includes("atr-based position sizing") && assetClass === "GOLD") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`ATR Distance${suffix}`, `Risk Budget${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Size Calculation Area${suffix}`, `Volatility Spike Review${suffix}`, `Oversizing Trap${suffix}`];
    return vm;
  }
  if (name.includes("leverage control") && assetClass === "GOLD") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Leverage Cap${suffix}`, `Margin Buffer${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Volatility Cutback Area${suffix}`, `Exposure Reduction Gate${suffix}`, `Margin Stress Trap${suffix}`];
    return vm;
  }
  if (name.includes("news event risk reduction") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`News Event Window${suffix}`, `Spread / Volatility State${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Reduced Exposure Review${suffix}`, `No-Action Window${suffix}`, `Whipsaw Trap${suffix}`];
    return vm;
  }
  if (name.includes("drawdown controls") && assetClass === "GOLD") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Equity Curve State${suffix}`, `Drawdown Threshold${suffix}`, `Recovery Gate${suffix}`];
    vm.requiredZones = [`Pause / Cutback Area${suffix}`, `Review Window${suffix}`, `Revenge-Trade Trap${suffix}`];
    return vm;
  }
  if (name.includes("portfolio hedging with gold") && assetClass === "GOLD") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Portfolio Exposure${suffix}`, `Gold Hedge Sleeve${suffix}`, `Correlation / Beta Estimate${suffix}`];
    vm.requiredZones = [`Hedge Allocation Area${suffix}`, `Stress Window Review${suffix}`, `Over-Hedge Trap${suffix}`];
    return vm;
  }
  if (name.includes("correlation-aware exposure") && assetClass === "GOLD") {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Rolling Correlation${suffix}`, `Exposure Overlap${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Correlation Cap Review${suffix}`, `Stress Check Area${suffix}`, `Relationship Break Trap${suffix}`];
    return vm;
  }
  if ((name.includes("dummy strategy") || name.includes("previous-day high breakout")) && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [`Previous-Day High${suffix}`, `Breakout Close${suffix}`, `Gold Point / Dollar Distance${suffix}`];
    vm.requiredZones = [`Prior-High Breakout Area${suffix}`, `Retest / Acceptance Area${suffix}`, `Wick Fakeout Back Below${suffix}`];
    return vm;
  }
  if (name.includes("bollinger squeeze breakout") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerSqueezeChart";
    vm.requiredLabels = [`Tight Bollinger Bands${suffix}`, `Bandwidth Compression${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Squeeze Box${suffix}`, `Breakout Retest Area${suffix}`, `Failed Expansion Trap${suffix}`];
    return vm;
  }
  if (name.includes("price action candle timing") && assetClass === "FOREX") {
    vm.visualCategory = "Candlestick Confluence Visual";
    vm.componentType = "CandlestickPatternChart";
    vm.requiredLabels = [`Candle Open / High / Low / Close${suffix}`, `Body And Wick Read${suffix}`, `Simple Forex Spread Check${suffix}`];
    vm.requiredZones = [`Completed Candle Review${suffix}`, `Nearby Swing Reference${suffix}`, `Unfinished Candle Trap${suffix}`];
    return vm;
  }
  if (name.includes("structural breakout") && name.includes("retest") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "TrendlineBreakRetestChart";
    vm.requiredLabels = [`Support / Resistance Level${suffix}`, `Breakout Close${suffix}`, `Spread / Pip Distance${suffix}`];
    vm.requiredZones = [`Retest Acceptance Area${suffix}`, `Old-Range Return Trap${suffix}`, `Invalidation Back Inside${suffix}`];
    return vm;
  }

  if (name.includes("technical + options skew confirmation") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "VolatilitySkewChart";
    vm.requiredLabels = [`Technical Level${suffix}`, `Options Skew / IV Context${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Technical-Skew Agreement Area${suffix}`, `Premium Drag Review${suffix}`, `Skew-Only Trap${suffix}`];
    return vm;
  }
  if (name.includes("options skew") && name.includes("buy calls") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Swing Gold Call Skew${suffix}`, `Upside Hedge Demand${suffix}`, `Broad Gold Structure Response${suffix}`];
    vm.requiredZones = [`Swing Buy-Calls Context${suffix}`, `Premium Drag Review${suffix}`, `Delayed Upside-Skew Trap${suffix}`];
    return vm;
  }
  if (name.includes("relative strength rotation") && assetClass === "FOREX") {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "RelativeValueBasketChart";
    vm.requiredLabels = [`Currency Strength Ranking${suffix}`, `Rotation Window${suffix}`, `Correlation / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Rotation Candidate Area${suffix}`, `Rebalance Review${suffix}`, `Crowded Currency Overlap Trap${suffix}`];
    return vm;
  }
  if (name.includes("basis arbitrage") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "SpotFuturesBasisChart";
    vm.requiredLabels = [`Swing Gold Spot Reference${suffix}`, `Futures Basis / Carry Cost${suffix}`, `Expiry Window${suffix}`];
    vm.requiredZones = [`Multi-Session Basis Review${suffix}`, `Convergence Watch Area${suffix}`, `Basis Widening Trap${suffix}`];
    return vm;
  }
  if (name.includes("basis arbitrage") && assetClass === "GOLD") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "SpotFuturesBasisChart";
    vm.requiredLabels = [`Gold Spot Reference${suffix}`, `Futures Basis Spread${suffix}`, `Carry Cost / Expiry${suffix}`];
    vm.requiredZones = [`Basis Dislocation Review${suffix}`, `Convergence Watch Area${suffix}`, `Financing-Cost Trap${suffix}`];
    return vm;
  }
  if (name.includes("volatility breakout system") && name.includes("turtle") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "DonchianChannelBreakoutChart";
    vm.requiredLabels = [`N-Period Channel High${suffix}`, `N-Period Channel Low${suffix}`, `Breakout Close / Pip Distance${suffix}`];
    vm.requiredZones = [`Channel Breakout Review${suffix}`, `Retest Area${suffix}`, `Failed Return Inside Channel Trap${suffix}`];
    return vm;
  }
  if (name.includes("fixed fraction position sizing") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Fixed Risk Percentage${suffix}`, `Invalidation Distance${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Classroom Size Calculation${suffix}`, `Exposure Cap Review${suffix}`, `Thin-Depth Overexposure Trap${suffix}`];
    return vm;
  }
  if (name.includes("kelly criterion position sizing") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Win-Rate Estimate${suffix}`, `Payoff Estimate${suffix}`, `Fractional Kelly Cap${suffix}`];
    vm.requiredZones = [`Kelly Size Calculation${suffix}`, `Sample-Size Review${suffix}`, `Full-Kelly Overbetting Trap${suffix}`];
    return vm;
  }
  if (name.includes("dynamic support") && name.includes("pivot points") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "PivotBreakoutChart";
    vm.requiredLabels = [`Central Pivot${suffix}`, `Support / Resistance Ladder${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Pivot Reaction Area${suffix}`, `Dynamic S/R Review${suffix}`, `Failed Pivot Respect Trap${suffix}`];
    return vm;
  }
  if (name.includes("volatility adjusted position sizing") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Current Crypto Volatility${suffix}`, `Invalidation Distance${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Volatility Size Cutback Area${suffix}`, `Risk Budget Review${suffix}`, `Same-Size Volatility Trap${suffix}`];
    return vm;
  }
  if (name.includes("fibonacci retracement strategy") && assetClass === "FOREX") {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "FibonacciConfluenceChart";
    vm.requiredLabels = [`Completed Forex Swing${suffix}`, `38.2 / 50 / 61.8 Band${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Retracement Study Area${suffix}`, `Structure Confluence Review${suffix}`, `Anchor-Change Trap${suffix}`];
    return vm;
  }
  if (name.includes("calendar spread") && name.includes("long near") && name.includes("short far") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Swing Long Near Gold Leg${suffix}`, `Swing Short Far Gold Leg${suffix}`, `IV Term Structure / Premium Ledger${suffix}`];
    vm.requiredZones = [`Swing Long-Near Calendar Review${suffix}`, `Broad Gold Structure Check${suffix}`, `Expiry Mismatch Trap${suffix}`];
    return vm;
  }
  if (name.includes("calendar spread") && name.includes("long near") && name.includes("short far") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Long Near Gold Leg${suffix}`, `Short Far Gold Leg${suffix}`, `IV Term Structure / Premium Ledger${suffix}`];
    vm.requiredZones = [`Long-Near Calendar Review${suffix}`, `Point / Dollar Distance Check${suffix}`, `Expiry Mismatch Trap${suffix}`];
    return vm;
  }
  if (name.includes("pivot point breakout") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "PivotBreakoutChart";
    vm.requiredLabels = [`Central Pivot${suffix}`, `Breakout Close${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Pivot Breakout Review${suffix}`, `Retest Area${suffix}`, `Failed Break Back Through Pivot Trap${suffix}`];
    return vm;
  }
  if (name.includes("stop-loss placement under support") && assetClass === "CRYPTO") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [`Crypto Support Shelf${suffix}`, `Wick Sweep Area${suffix}`, `Protective Invalidation Beyond Support${suffix}`];
    vm.requiredZones = [`Support Invalidation Area${suffix}`, `Liquidity Depth Review${suffix}`, `Inside-Wick-Noise Trap${suffix}`];
    return vm;
  }
  if (name.includes("trailing stop strategy") && assetClass === "CRYPTO") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [`Crypto Trailing Reference${suffix}`, `Volatility Buffer${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Trailing Invalidation Path${suffix}`, `Step Update Review${suffix}`, `Premature Tightening Trap${suffix}`];
    return vm;
  }
  if (name.includes("moving average envelope") && assetClass === "FOREX") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "KeltnerChannelChart";
    vm.requiredLabels = [`Moving Average Midline${suffix}`, `Upper / Lower Envelope Bands${suffix}`, `Session / Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Envelope Reaction Area${suffix}`, `Trend Or Range Review${suffix}`, `Failed Envelope Respect Trap${suffix}`];
    return vm;
  }
  if (name.includes("calendar spread") && name.includes("short near") && name.includes("long far") && name.includes("swing") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Swing Short Near Gold Leg${suffix}`, `Swing Long Far Gold Leg${suffix}`, `IV Term Structure / Premium Ledger${suffix}`];
    vm.requiredZones = [`Swing Short-Near Calendar Review${suffix}`, `Broad Gold Structure Check${suffix}`, `Expiry Mismatch Trap${suffix}`];
    return vm;
  }
  if (name.includes("calendar spread") && name.includes("short near") && name.includes("long far") && assetClass === "GOLD") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Short Near Gold Leg${suffix}`, `Long Far Gold Leg${suffix}`, `IV Term Structure / Premium Ledger${suffix}`];
    vm.requiredZones = [`Short-Near Calendar Review${suffix}`, `Point / Dollar Distance Check${suffix}`, `Expiry Mismatch Trap${suffix}`];
    return vm;
  }
  if (name.includes("risk-reward ratio targeting") && assetClass === "CRYPTO") {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Invalidation Distance${suffix}`, `Educational Reference Zone${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Reward-To-Risk Planning Band${suffix}`, `Structural Room Review${suffix}`, `Forced-Ratio Trap${suffix}`];
    return vm;
  }

  if (name.includes("options put/call ratio high") && name.includes("swing")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Swing Gold Put/Call Ratio High${suffix}`, `Multi-Session Put Demand / IV Premium${suffix}`, `Broad Gold Structure Response${suffix}`];
    vm.requiredZones = [`Swing Bullish Contrarian Review${suffix}`, `Delayed Premium Normalization Area${suffix}`, `Put-Crowding Persistence Trap${suffix}`];
  } else if (name.includes("options put/call ratio high")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Gold Put/Call Ratio High${suffix}`, `Put Demand / IV Premium${suffix}`, `Gold Structure Response Window${suffix}`];
    vm.requiredZones = [`Bullish Contrarian Review${suffix}`, `Premium Normalization Area${suffix}`, `Put-Crowding Persistence Trap${suffix}`];
  } else if (name.includes("options put/call ratio low") && name.includes("swing")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Swing Gold Put/Call Ratio Low${suffix}`, `Multi-Session Low Put Demand${suffix}`, `Broad Gold Weakness Response${suffix}`];
    vm.requiredZones = [`Swing Bearish Complacency Review${suffix}`, `Delayed Protection-Repricing Area${suffix}`, `Complacency Persistence Trap${suffix}`];
  } else if (name.includes("options put/call ratio low")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Gold Put/Call Ratio Low${suffix}`, `Low Put Demand / Call Crowding${suffix}`, `Gold Weakness Response Window${suffix}`];
    vm.requiredZones = [`Bearish Complacency Review${suffix}`, `Protection-Repricing Area${suffix}`, `Complacency Extension Trap${suffix}`];
  } else if (name.includes("volatility targeting strategy")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Realized Crypto Volatility${suffix}`, `Target Risk Band${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Volatility Size Adjustment Area${suffix}`, `Reduced Exposure Review${suffix}`, `Volatility Expansion Trap${suffix}`];
  } else if (name.includes("on-chain + technical confluence")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`On-Chain Flow Context${suffix}`, `Technical Structure Check${suffix}`, `Liquidity Depth Review${suffix}`];
    vm.requiredZones = [`Confluence Agreement Area${suffix}`, `Disagreement Review${suffix}`, `Stale Chain-Data Trap${suffix}`];
  } else if (name.includes("speed of market momentum scalping")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Tick Speed / Candle Expansion${suffix}`, `Session Liquidity And Spread${suffix}`, `Pip Distance / Slippage Check${suffix}`];
    vm.requiredZones = [`Speed Momentum Observation Area${suffix}`, `Execution Quality Review${suffix}`, `Exhaustion Whipsaw Trap${suffix}`];
  } else if (name.includes("funding + social sentiment filter")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Funding Pressure Window${suffix}`, `Social Crowding Source${suffix}`, `Venue Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Funding-Sentiment Agreement Area${suffix}`, `Source Alignment Review${suffix}`, `Stale Or Manipulated Social Trap${suffix}`];
  } else if (name.includes("news fade strategy")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsBreakoutChart";
    vm.requiredLabels = [`Scheduled Forex News Event${suffix}`, `First Impulse / Spread Normalization${suffix}`, `Failed Continuation Fade Read${suffix}`];
    vm.requiredZones = [`Event Reaction Window${suffix}`, `Fade Observation Area${suffix}`, `News Whipsaw Trap${suffix}`];
  } else if (name.includes("multi-factor quant scoring")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Weighted Crypto Factor Inputs${suffix}`, `Validation Sample${suffix}`, `Liquidity Depth Review${suffix}`];
    vm.requiredZones = [`Factor Score Review Area${suffix}`, `Disagreement Matrix${suffix}`, `Overfit Score Trap${suffix}`];
  } else if (name.includes("straddle the news")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Scheduled Forex Event${suffix}`, `Call + Put Same Expiry${suffix}`, `Premium / IV Crush Check${suffix}`];
    vm.requiredZones = [`Move-Needed Band${suffix}`, `Post-News Volatility Review${suffix}`, `Premium Decay Trap${suffix}`];
  } else if (name.includes("technical + fundamental confirmation")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Crypto Technical Structure${suffix}`, `Network / Fundamental Context${suffix}`, `Liquidity Depth Review${suffix}`];
    vm.requiredZones = [`Technical-Fundamental Agreement Area${suffix}`, `Conflict Review${suffix}`, `Stale Fundamental Trap${suffix}`];
  } else if (name.includes("options skew") && name.includes("buy puts") && name.includes("swing")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Swing Gold Put Skew${suffix}`, `Downside Hedge Demand${suffix}`, `Broad Gold Structure Response${suffix}`];
    vm.requiredZones = [`Swing Buy-Puts Context${suffix}`, `Premium Drag Review${suffix}`, `Delayed Skew-Normalization Trap${suffix}`];
  } else if (name.includes("options skew") && name.includes("buy puts")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Gold Put Skew${suffix}`, `Downside Hedge Demand${suffix}`, `Gold Response Window${suffix}`];
    vm.requiredZones = [`Buy-Puts Context${suffix}`, `Premium Drag Review${suffix}`, `Skew-Normalization Trap${suffix}`];
  } else if (name.includes("gamma scalping") && assetClass === "FOREX") {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "GammaScalpingChart";
    vm.requiredLabels = [`Option Delta Hedge Line${suffix}`, `Gamma / Theta Balance${suffix}`, `Spread / Session / Pip Check${suffix}`];
    vm.requiredZones = [`Re-Hedge Observation Area${suffix}`, `Realized Volatility Review${suffix}`, `Over-Hedging Trap${suffix}`];
  } else if (name.includes("funding + basis + oi composite")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "DerivativesDashboard";
    vm.requiredLabels = [`Funding / Basis / OI Composite${suffix}`, `Price And Venue Context${suffix}`, `Liquidity Depth / Spread Percentage${suffix}`];
    vm.requiredZones = [`Derivatives Pressure Review${suffix}`, `Venue Disagreement Area${suffix}`, `Crowded Liquidation Trap${suffix}`];
  } else if (name.includes("calendar spread in fx options")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Near FX Option Expiry${suffix}`, `Far FX Option Expiry${suffix}`, `IV Term Structure / Premium Ledger${suffix}`];
    vm.requiredZones = [`Calendar Spread Review${suffix}`, `Forward-Rate And Spread Check${suffix}`, `Expiry Mismatch Trap${suffix}`];
  } else if (name.includes("options skew") && name.includes("buy calls")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Gold Call Skew${suffix}`, `Upside Hedge Demand${suffix}`, `Gold Response Window${suffix}`];
    vm.requiredZones = [`Buy-Calls Context${suffix}`, `Premium Drag Review${suffix}`, `Upside-Skew Normalization Trap${suffix}`];
  } else if (name.includes("on-chain + sentiment contrarian")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`On-Chain Activity Context${suffix}`, `Sentiment Extreme${suffix}`, `Liquidity Depth Review${suffix}`];
    vm.requiredZones = [`Contrarian Evidence Review${suffix}`, `Price Disagreement Area${suffix}`, `Crowding Persistence Trap${suffix}`];
  } else if (name.includes("interest rate swaption hedge")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Rate Exposure${suffix}`, `Payer / Receiver Swaption Structure${suffix}`, `Premium / Rate-Shock Scenario${suffix}`];
    vm.requiredZones = [`Swaption Hedge Coverage Area${suffix}`, `Rate Repricing Review${suffix}`, `Under-Hedge Or Premium-Drag Trap${suffix}`];
  } else if (name.includes("arbitrage bot")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`CEX Quote / Inventory${suffix}`, `DEX Pool Price / Route Depth${suffix}`, `Net After Gas And Fees${suffix}`];
    vm.requiredZones = [`CEX-DEX Gap Review${suffix}`, `Execution Cost Filter${suffix}`, `Stale Quote Or Slippage Trap${suffix}`];
  } else if (name.includes("machine-learning-enhanced execution")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`ML Execution Feature Set${suffix}`, `Order Slice / Venue Depth${suffix}`, `Fill Quality And Drift Check${suffix}`];
    vm.requiredZones = [`Model-Assisted Execution Area${suffix}`, `Latency And Slippage Review${suffix}`, `Overfit Execution Trap${suffix}`];
  } else if (name.includes("etf outflow indicator") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing ETF Outflow Trend${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Delayed Gold Weakness Response${suffix}`];
    vm.requiredZones = [`Swing ETF Outflow Window${suffix}`, `Delayed Short-Context Review${suffix}`, `Stale Flow Or Short-Crowding Trap${suffix}`];
  } else if (name.includes("etf outflow indicator")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Gold ETF Outflow Change${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Gold Weakness Response Window${suffix}`];
    vm.requiredZones = [`ETF Outflow Review Window${suffix}`, `Short-Context Reaction Area${suffix}`, `Flow-Chasing Short Trap${suffix}`];
  } else if (name.includes("cross-hedging with correlated asset")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Currency Exposure${suffix}`, `Correlated Asset Driver${suffix}`, `Hedge Ratio / Basis Risk${suffix}`];
    vm.requiredZones = [`Cross-Hedge Coverage Area${suffix}`, `Correlation Stability Review${suffix}`, `Basis Or Correlation-Break Trap${suffix}`];
  } else if (name.includes("rebalancing algorithm")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Target Crypto Weights${suffix}`, `Drift Band / Rebalance Date${suffix}`, `Cost And Liquidity Check${suffix}`];
    vm.requiredZones = [`Periodic Rebalance Window${suffix}`, `Portfolio Drift Review${suffix}`, `Over-Rebalancing Cost Trap${suffix}`];
  } else if (name.includes("portfolio diversification across currency pairs")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Forex Pair Basket${suffix}`, `Repeated Currency Exposure${suffix}`, `Weight Cap / Correlation Check${suffix}`];
    vm.requiredZones = [`Diversified Pair Basket Area${suffix}`, `Exposure Concentration Review${suffix}`, `Hidden Correlation Trap${suffix}`];
  } else if (name.includes("dynamic leverage adjustment")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Volatility And Equity State${suffix}`, `Max Leverage Cap${suffix}`, `Pip Invalidation Distance${suffix}`];
    vm.requiredZones = [`Dynamic Leverage Gate${suffix}`, `Reduced Exposure Review${suffix}`, `Over-Leverage Trap${suffix}`];
  } else if (name.includes("momentum + mean reversion hybrid bot")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Momentum Module${suffix}`, `Mean-Reversion Module${suffix}`, `Regime Switch / Conflict State${suffix}`];
    vm.requiredZones = [`Hybrid Bot Decision Area${suffix}`, `Module Disagreement Review${suffix}`, `Regime Misclassification Trap${suffix}`];
  } else if (name.includes("retail sentiment contrarian short") && name.includes("swing")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Swing Crowded-Long Sentiment${suffix}`, `Gold Structure Response${suffix}`, `Source Sample / Persistence Check${suffix}`];
    vm.requiredZones = [`Swing Contrarian Short Context${suffix}`, `Delayed Gold Reversal Review${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("retail sentiment contrarian short")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Crowded-Long Sentiment${suffix}`, `Gold Structure Response${suffix}`, `Source Sample Limit${suffix}`];
    vm.requiredZones = [`Contrarian Short Context${suffix}`, `Gold Reversal Review${suffix}`, `Sentiment Persistence Trap${suffix}`];
  } else if (name.includes("ai-assisted discretionary trading")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`AI Thesis Draft${suffix}`, `Human Checklist Review${suffix}`, `Data Quality / Hallucination Check${suffix}`];
    vm.requiredZones = [`AI-Assisted Decision Area${suffix}`, `Execution Liquidity Review${suffix}`, `Automation Bias Trap${suffix}`];
  } else if (name.includes("trailing stop strategy")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    vm.requiredLabels = [`Initial Forex Structure${suffix}`, `Trailing Invalidation Rule${suffix}`, `Pip Distance / Session Volatility${suffix}`];
    vm.requiredZones = [`Trailing Invalidation Path${suffix}`, `Locked-In Risk Reduction Review${suffix}`, `Premature Tightening Trap${suffix}`];
  } else if (name.includes("risk parity allocation algorithm")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Crypto Asset Weights${suffix}`, `Realized Volatility Contribution${suffix}`, `Correlation / Rebalance Check${suffix}`];
    vm.requiredZones = [`Risk-Parity Allocation Area${suffix}`, `Equal-Risk Contribution Review${suffix}`, `Correlation Spike Trap${suffix}`];
  } else if (name.includes("retail sentiment contrarian long") && name.includes("swing")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Swing Crowded-Short Sentiment${suffix}`, `Gold Structure Response${suffix}`, `Source Sample / Persistence Check${suffix}`];
    vm.requiredZones = [`Swing Contrarian Long Context${suffix}`, `Delayed Gold Reversal Review${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("retail sentiment contrarian long")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Crowded-Short Sentiment${suffix}`, `Gold Structure Response${suffix}`, `Source Sample Limit${suffix}`];
    vm.requiredZones = [`Contrarian Long Context${suffix}`, `Gold Reversal Review${suffix}`, `Sentiment Persistence Trap${suffix}`];
  } else if (name.includes("equity curve stop")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Portfolio Equity Curve${suffix}`, `Drawdown Halt Threshold${suffix}`, `Reduced-Risk Restart Rule${suffix}`];
    vm.requiredZones = [`Equity-Curve Stop Area${suffix}`, `Restart Readiness Review${suffix}`, `Revenge-Trading Trap${suffix}`];
  } else if (name.includes("risk parity currency portfolio")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Currency Basket Weights${suffix}`, `Volatility Contribution${suffix}`, `Correlation Matrix Review${suffix}`];
    vm.requiredZones = [`Currency Risk-Parity Area${suffix}`, `Equal-Risk Contribution Review${suffix}`, `Currency Cluster Trap${suffix}`];
  } else if (name.includes("reinforcement learning rebalancer")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`RL State Space${suffix}`, `Reward Function / Policy Action${suffix}`, `Live Drift Check${suffix}`];
    vm.requiredZones = [`RL Rebalance Decision Area${suffix}`, `Policy Drift Review${suffix}`, `Overfit Reward Trap${suffix}`];
  } else if (name.includes("correlation matrix position adjustment")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Forex Exposure Table${suffix}`, `Correlation Matrix${suffix}`, `Position Adjustment Rule${suffix}`];
    vm.requiredZones = [`Correlation Adjustment Area${suffix}`, `Overlap Reduction Review${suffix}`, `Correlation Spike Trap${suffix}`];
  } else if (name.includes("flash loan arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`Flash Loan Borrow Leg${suffix}`, `DEX Route / Pool Depth${suffix}`, `Atomic Repay Check${suffix}`];
    vm.requiredZones = [`Atomic Arbitrage Route${suffix}`, `Gas / MEV Friction Review${suffix}`, `Revert Or Slippage Trap${suffix}`];
  } else if (name.includes("atr-based stop placement")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`ATR Value / Structure Anchor${suffix}`, `Pip Invalidation Distance${suffix}`, `Spread And Session Volatility${suffix}`];
    vm.requiredZones = [`ATR-Based Invalidation Area${suffix}`, `Too-Tight Placement Review${suffix}`, `Volatility Expansion Trap${suffix}`];
  } else if (name.includes("cot speculator extreme short") && name.includes("swing")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Swing COT Speculator Short Extreme${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Percentile Check${suffix}`];
    vm.requiredZones = [`Swing Crowded-Short Review${suffix}`, `Delayed Contrarian Long-Study Area${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("volatility scaling portfolio allocation")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Forex Pair Basket Weights${suffix}`, `Realized Volatility Scale${suffix}`, `Correlation / Rebalance Check${suffix}`];
    vm.requiredZones = [`Volatility-Scaled Allocation Area${suffix}`, `Equal-Risk Contribution Review${suffix}`, `Correlation Spike Trap${suffix}`];
  } else if (name.includes("cot commercial hedger accumulation") && name.includes("swing")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Swing Commercial Hedger Accumulation${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Position Trend${suffix}`];
    vm.requiredZones = [`Swing Commercial Accumulation Window${suffix}`, `Delayed Gold Confirmation Area${suffix}`, `Crowding Misread Trap${suffix}`];
  } else if (name.includes("cot commercial hedger accumulation")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Commercial Hedger Accumulation${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Position Trend${suffix}`];
    vm.requiredZones = [`Commercial Accumulation Review${suffix}`, `Gold Confirmation Area${suffix}`, `False-Crowding Trap${suffix}`];
  } else if (name.includes("governance token short")) {
    vm.visualCategory = "Crypto Governance Event Visual";
    vm.componentType = "GovernanceEventChart";
    vm.requiredLabels = [`Dilutive Governance Proposal${suffix}`, `Emission / Unlock Schedule${suffix}`, `Liquidity And Borrow Feasibility${suffix}`];
    vm.requiredZones = [`Dilution Pressure Window${suffix}`, `Execution Feasibility Review${suffix}`, `Crowded Short Or Vote-Failure Trap${suffix}`];
  } else if (name.includes("drawdown control")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Equity Curve Drawdown State${suffix}`, `Daily / Weekly Circuit Breaker${suffix}`, `Risk Reduction Rule${suffix}`];
    vm.requiredZones = [`Drawdown Halt Area${suffix}`, `Reduced-Risk Recovery Review${suffix}`, `Revenge-Trading Trap${suffix}`];
  } else if (name.includes("dao treasury diversification")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "TreasuryFlowAuditChart";
    vm.requiredLabels = [`DAO Treasury Wallet Flow${suffix}`, `Asset Mix Change${suffix}`, `Proposal / Execution Timing${suffix}`];
    vm.requiredZones = [`Treasury Diversification Window${suffix}`, `Market-Depth Review${suffix}`, `Governance Delay Or Sale-Pressure Trap${suffix}`];
  } else if (name.includes("hedging with correlated currency pairs")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Primary Pair Exposure${suffix}`, `Correlated Hedge Pair${suffix}`, `Hedge Ratio / Correlation Check${suffix}`];
    vm.requiredZones = [`Correlation Hedge Area${suffix}`, `Net Exposure Review${suffix}`, `Correlation Break Trap${suffix}`];
  } else if (name.includes("rule-based moving average bot")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Fast / Slow Average Rule${suffix}`, `Completed Cross And Bot State${suffix}`, `Execution / Parameter Drift Check${suffix}`];
    vm.requiredZones = [`Rule Activation Area${suffix}`, `Liquidity Execution Review${suffix}`, `Whipsaw Or Parameter-Drift Trap${suffix}`];
  } else if (name.includes("cot divergence") && name.includes("swing")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTDivergenceChart";
    vm.requiredLabels = [`Swing COT Divergence Read${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Persistence Check${suffix}`];
    vm.requiredZones = [`Swing Divergence Review${suffix}`, `Delayed Gold Confirmation Area${suffix}`, `Divergence Persistence Trap${suffix}`];
  } else if (name.includes("cot divergence")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTDivergenceChart";
    vm.requiredLabels = [`COT Divergence Read${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Position Split${suffix}`];
    vm.requiredZones = [`COT Divergence Review${suffix}`, `Gold Confirmation Area${suffix}`, `False Divergence Trap${suffix}`];
  } else if (name.includes("direct hedging")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Original Forex Exposure${suffix}`, `Offsetting Hedge Leg${suffix}`, `Net Exposure / Carry Cost${suffix}`];
    vm.requiredZones = [`Direct Hedge Area${suffix}`, `Spread And Carry Review${suffix}`, `Locked-Loss Or Broker-Rule Trap${suffix}`];
  } else if (name.includes("indicator stack bot")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Indicator Input Stack${suffix}`, `Rule Order / Agreement Matrix${suffix}`, `Latency / Overfit Check${suffix}`];
    vm.requiredZones = [`Bot Rule Audit Area${suffix}`, `Indicator Disagreement Review${suffix}`, `Overfit Stack Trap${suffix}`];
  } else if (name.includes("options hedging")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Spot Exposure${suffix}`, `Option Strike / Expiry${suffix}`, `Premium / IV Hedge Coverage${suffix}`];
    vm.requiredZones = [`Options Hedge Coverage Area${suffix}`, `Premium And Volatility Review${suffix}`, `IV Crush Or Under-Hedge Trap${suffix}`];
  } else if (name.includes("scalping bot")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Order-Book Spread Capture Rule${suffix}`, `Latency / Fee Tier${suffix}`, `Fill Quality Check${suffix}`];
    vm.requiredZones = [`Scalping Bot Execution Area${suffix}`, `Depth And Fee Review${suffix}`, `Overtrading Or Slippage Trap${suffix}`];
  } else if (name.includes("etf inflow momentum") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Gold ETF Inflow Trend${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Delayed Gold Response${suffix}`];
    vm.requiredZones = [`Swing ETF Flow Window${suffix}`, `Delayed Gold Momentum Area${suffix}`, `Flow-Chasing Macro Trap${suffix}`];
  } else if (name.includes("etf inflow momentum")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Gold ETF Inflow Change${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Gold Response Window${suffix}`];
    vm.requiredZones = [`ETF Inflow Momentum Window${suffix}`, `Gold Flow Response Area${suffix}`, `Flow-Chasing Macro Trap${suffix}`];
  } else if (name.includes("forward contract hedging")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "FXForwardCurveChart";
    vm.requiredLabels = [`Spot Exposure / Hedge Amount${suffix}`, `Forward Rate / Tenor${suffix}`, `Forward Points / Settlement Check${suffix}`];
    vm.requiredZones = [`Forward Hedge Coverage Area${suffix}`, `Carry And Spread Review${suffix}`, `Settlement Mismatch Trap${suffix}`];
  } else if (name.includes("stablecoin arbitrage across chains")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`Chain A/B Stablecoin Price${suffix}`, `Bridge / Gas / Transfer Time${suffix}`, `Pool Depth / Depeg Check${suffix}`];
    vm.requiredZones = [`Cross-Chain Price Gap Area${suffix}`, `Transfer Friction Review${suffix}`, `Depeg Or Bridge Delay Trap${suffix}`];
  } else if (name.includes("de-dollarization theme") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Reserve Diversification Theme${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Delayed Gold Demand Response${suffix}`];
    vm.requiredZones = [`Swing De-Dollarization Theme Window${suffix}`, `Delayed Gold Accumulation Response${suffix}`, `Narrative-Only Macro Trap${suffix}`];
  } else if (name.includes("de-dollarization theme")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Reserve Diversification Theme${suffix}`, `Dollar / Real-Yield Conflict Check${suffix}`, `Gold Demand Response Window${suffix}`];
    vm.requiredZones = [`De-Dollarization Theme Window${suffix}`, `Gold Demand Response Area${suffix}`, `Narrative-Only Macro Trap${suffix}`];
  } else if (name.includes("impermanent loss protection")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Protected LP Position${suffix}`, `IL Coverage Mechanism${suffix}`, `Protocol Reserve / Claim Limit${suffix}`];
    vm.requiredZones = [`Protection Coverage Area${suffix}`, `Claim Friction Review${suffix}`, `Protection Gap Trap${suffix}`];
  } else if (name.includes("macro + machine learning hybrid")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Macro Feature Set${suffix}`, `Machine-Learning Model Output${suffix}`, `Validation / Feature Drift Check${suffix}`];
    vm.requiredZones = [`Hybrid Model Audit Area${suffix}`, `Macro / Model Disagreement Area${suffix}`, `Overfit Or Regime-Drift Trap${suffix}`];
  } else if (name.includes("supply disruption") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Supply Disruption Context${suffix}`, `Inventory / Logistics Stress${suffix}`, `Delayed Gold Scarcity Response${suffix}`];
    vm.requiredZones = [`Swing Supply-Stress Window${suffix}`, `Delayed Scarcity Response Area${suffix}`, `Headline Shortage Macro Trap${suffix}`];
  } else if (name.includes("supply disruption")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Physical Supply Disruption${suffix}`, `Inventory / Logistics Stress${suffix}`, `Gold Reaction Window${suffix}`];
    vm.requiredZones = [`Supply Shock Window${suffix}`, `Gold Scarcity Response Area${suffix}`, `Headline Shortage Macro Trap${suffix}`];
  } else if (name.includes("seasonal + technical confirmation")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "SeasonalPatternAuditChart";
    vm.requiredLabels = [`Seasonal Tendency Window${suffix}`, `Technical Structure${suffix}`, `Out-Of-Sample Check${suffix}`];
    vm.requiredZones = [`Seasonal Alignment Area${suffix}`, `Technical Confirmation Area${suffix}`, `Broken-Seasonality Trap${suffix}`];
  } else if (name.includes("staking yield strategy")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "StakingFlowAuditChart";
    vm.requiredLabels = [`Staking Yield Source${suffix}`, `Validator / Lockup Terms${suffix}`, `Unstake Queue / Liquidity Check${suffix}`];
    vm.requiredZones = [`Staking Participation Area${suffix}`, `Yield Sustainability Review${suffix}`, `Slashing Or Unstake Trap${suffix}`];
  } else if (name.includes("restaking & liquid staking")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "StakingFlowAuditChart";
    vm.requiredLabels = [`Restaked Collateral${suffix}`, `LST Peg / Liquidity${suffix}`, `Slashing / Depeg Risk${suffix}`];
    vm.requiredZones = [`Restaking Exposure Area${suffix}`, `Liquid-Staking Liquidity Review${suffix}`, `Rehypothecation Trap${suffix}`];
  } else if (name.includes("volatility breakout + fundamental filter")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRExpansionBreakoutChart";
    vm.requiredLabels = [`Volatility Compression${suffix}`, `Fundamental Filter${suffix}`, `Breakout Close / Retest${suffix}`];
    vm.requiredZones = [`Compression And Filter Alignment${suffix}`, `Breakout Acceptance Area${suffix}`, `False Expansion Or Macro Conflict Trap${suffix}`];
  } else if (name.includes("cot speculator extreme long") && name.includes("swing")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Swing COT Speculator Long Extreme${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Percentile Check${suffix}`];
    vm.requiredZones = [`Swing Crowded-Long Review${suffix}`, `Delayed Contrarian Short-Study Area${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("cot speculator extreme long")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`COT Speculator Long Extreme${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Percentile Check${suffix}`];
    vm.requiredZones = [`Crowded-Long Review${suffix}`, `Contrarian Short-Study Area${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("fixed fractional position sizing")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Account Equity / Risk Percent${suffix}`, `Pip Invalidation Distance${suffix}`, `Calculated Forex Position Size${suffix}`];
    vm.requiredZones = [`Fixed-Fraction Sizing Area${suffix}`, `Spread / Slippage Allowance${suffix}`, `Oversizing Trap${suffix}`];
  } else if (name.includes("liquidation farming on defi lending")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationHeatmapChart";
    vm.requiredLabels = [`Collateral Vault Health Factor${suffix}`, `Liquidation Threshold / Bonus${suffix}`, `Gas / Oracle Risk Check${suffix}`];
    vm.requiredZones = [`Liquidation Eligibility Area${suffix}`, `Gas Competition Review${suffix}`, `Failed Liquidation Or Oracle Trap${suffix}`];
  } else if (name.includes("fixed ratio position sizing")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Equity Step / Delta Rule${suffix}`, `Pip Invalidation Distance${suffix}`, `Size Increase Threshold${suffix}`];
    vm.requiredZones = [`Fixed-Ratio Step Area${suffix}`, `Drawdown Restraint Area${suffix}`, `Aggressive Step-Up Trap${suffix}`];
  } else if (name.includes("synthetic asset arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`Synthetic Asset Price${suffix}`, `Spot / Oracle Reference${suffix}`, `Collateral / Redeem Cost${suffix}`];
    vm.requiredZones = [`Synthetic Premium / Discount Area${suffix}`, `Hedge Or Redeem Review${suffix}`, `Oracle Or Peg Trap${suffix}`];
  } else if (name.includes("kelly criterion sizing")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Win-Rate / Payoff Estimate${suffix}`, `Fractional Kelly Cap${suffix}`, `Forex Pip Invalidation Check${suffix}`];
    vm.requiredZones = [`Kelly Calculation Area${suffix}`, `Fractional Cap Review${suffix}`, `Overbetting / Sample-Size Trap${suffix}`];
  } else if (name.includes("insurance pool participation")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Insurance Pool Exposure${suffix}`, `Premium / Claim Reserve${suffix}`, `Covered-Risk Definition${suffix}`];
    vm.requiredZones = [`Coverage Allocation Area${suffix}`, `Claim Reserve Review${suffix}`, `Correlated Claims Trap${suffix}`];
  } else if (name.includes("cot speculator extreme short")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`COT Speculator Short Extreme${suffix}`, `Gold Structure Response${suffix}`, `Report Lag / Percentile Check${suffix}`];
    vm.requiredZones = [`Crowded-Short Review${suffix}`, `Contrarian Long-Study Area${suffix}`, `Extreme Persistence Trap${suffix}`];
  } else if (name.includes("liquidity provision to stable pair")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Stable Pool Pair${suffix}`, `Pool Depth / Fee APR${suffix}`, `Impermanent-Loss Check${suffix}`];
    vm.requiredZones = [`Stable LP Review Area${suffix}`, `Depth / Slippage Area${suffix}`, `Depeg Or Fee-Decay Trap${suffix}`];
  } else if (name.includes("geopolitical risk") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Geopolitical Event Window${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Delayed Gold Safe-Haven Response${suffix}`];
    vm.requiredZones = [`Swing Geopolitical Stress Window${suffix}`, `Delayed Gold Response Area${suffix}`, `De-Escalation Macro Trap${suffix}`];
  } else if (name.includes("geopolitical risk")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Geopolitical Event Window${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Safe-Haven Gold Response${suffix}`];
    vm.requiredZones = [`Event Shock Window${suffix}`, `Gold Reaction Area${suffix}`, `Headline Fade Macro Trap${suffix}`];
  } else if (name.includes("liquidity provision to volatile pair")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Volatile Pool Pair${suffix}`, `Impermanent-Loss Curve${suffix}`, `Hedge Leg / Rebalance Check${suffix}`];
    vm.requiredZones = [`Volatile LP Review Area${suffix}`, `Hedge Coverage Area${suffix}`, `IL Under-Hedge Trap${suffix}`];
  } else if (name.includes("indicator + price action confluence")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Indicator State${suffix}`, `Price Action Structure${suffix}`, `Agreement / Failure Check${suffix}`];
    vm.requiredZones = [`Confluence Review Area${suffix}`, `Price Action Confirmation Area${suffix}`, `Indicator-Only Trap${suffix}`];
  } else if (name.includes("triangular confluence")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Fundamental Driver${suffix}`, `Technical Structure${suffix}`, `Sentiment Window${suffix}`];
    vm.requiredZones = [`Three-Way Agreement Area${suffix}`, `Disagreement Review Area${suffix}`, `Overweighted Evidence Trap${suffix}`];
  } else if (name.includes("yield farming rotation")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    vm.requiredLabels = [`Protocol Yield${suffix}`, `TVL / Incentive Decay${suffix}`, `Smart-Contract / Liquidity Check${suffix}`];
    vm.requiredZones = [`Rotation Candidate Area${suffix}`, `Exit Friction Area${suffix}`, `Unsustainable APR Trap${suffix}`];
  } else if (name.includes("hybrid carry + price action")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "InterestRateDifferentialChart";
    vm.requiredLabels = [`Rate Differential / Carry${suffix}`, `Price Action Structure${suffix}`, `Session Spread / Pip Check${suffix}`];
    vm.requiredZones = [`Carry Alignment Area${suffix}`, `Structure Confirmation Area${suffix}`, `Carry-Only Trap${suffix}`];
  } else if (name.includes("dex arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`DEX A/B Price${suffix}`, `Gas / Fee Cost${suffix}`, `Pool Depth / Slippage${suffix}`];
    vm.requiredZones = [`Arbitrage Gap Area${suffix}`, `Executable Size Review${suffix}`, `MEV Or Gas Trap${suffix}`];
  } else if (name.includes("central bank net buying") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Central-Bank Flow Context${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Delayed Gold Demand Response${suffix}`];
    vm.requiredZones = [`Swing Official Buying Window${suffix}`, `Delayed Gold Response${suffix}`, `Stale Reserve Data Macro Trap${suffix}`];
  } else if (name.includes("central bank net buying")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Central-Bank Flow Context${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Gold Demand Reaction Window${suffix}`];
    vm.requiredZones = [`Official Buying Review${suffix}`, `Gold Demand Response${suffix}`, `Flow-Lag Macro Trap${suffix}`];
  } else if (name.includes("mean reversion + options hedging")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Mean-Reversion Range${suffix}`, `Options Hedge Structure${suffix}`, `Volatility / Premium Check${suffix}`];
    vm.requiredZones = [`Range Reversion Area${suffix}`, `Hedge Coverage Area${suffix}`, `Premium Decay Trap${suffix}`];
  } else if (name.includes("perpetual dex funding arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`DEX Perpetual Funding${suffix}`, `Spot / Hedge Leg${suffix}`, `Gas / Slippage Check${suffix}`];
    vm.requiredZones = [`Funding Capture Review${suffix}`, `Basis / Hedge Area${suffix}`, `Smart-Contract Or Funding Flip Trap${suffix}`];
  } else if (name.includes("central bank net selling") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing Central-Bank Selling Context${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Delayed Gold Pressure Response${suffix}`];
    vm.requiredZones = [`Swing Official Selling Window${suffix}`, `Delayed Gold Pressure${suffix}`, `Reserve Data Lag Macro Trap${suffix}`];
  } else if (name.includes("central bank net selling")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Central-Bank Selling Context${suffix}`, `Yield / Dollar Conflict Check${suffix}`, `Gold Pressure Reaction Window${suffix}`];
    vm.requiredZones = [`Official Selling Review${suffix}`, `Gold Pressure Response${suffix}`, `Flow-Headline Macro Trap${suffix}`];
  } else if (name.includes("news + technical event trading")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsBreakoutChart";
    vm.requiredLabels = [`News Event Window${suffix}`, `Technical Boundary${suffix}`, `Spread / Slippage Check${suffix}`];
    vm.requiredZones = [`Pre-Event Range${suffix}`, `Post-Event Acceptance Area${suffix}`, `Whipsaw Trap${suffix}`];
  } else if (name.includes("lending & borrowing looping")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`Collateral Asset${suffix}`, `Borrow Leg / Health Factor${suffix}`, `Liquidation Buffer${suffix}`];
    vm.requiredZones = [`Loop Exposure Area${suffix}`, `Borrow Cost Review${suffix}`, `Liquidation Cascade Trap${suffix}`];
  } else if (name.includes("sentiment + risk-on/off regime")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "RiskOnCarryBasketChart";
    vm.requiredLabels = [`Risk-On / Risk-Off Proxy${suffix}`, `Sentiment Source${suffix}`, `Forex Pair Response${suffix}`];
    vm.requiredZones = [`Regime Alignment Area${suffix}`, `Sentiment Freshness Review${suffix}`, `Risk-Regime Flip Trap${suffix}`];
  } else if (name.includes("rate arbitrage between lending platforms")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`Platform A/B Lending Rate${suffix}`, `Utilization / Liquidity${suffix}`, `Bridge / Gas Cost${suffix}`];
    vm.requiredZones = [`Rate Differential Review${suffix}`, `Transfer Friction Area${suffix}`, `Rate Compression Trap${suffix}`];
  } else if (name.includes("order flow + price action confluence")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "FootprintDeltaChart";
    vm.requiredLabels = [`Footprint / Delta Context${suffix}`, `Price Action Structure${suffix}`, `Absorption / Exhaustion Check${suffix}`];
    vm.requiredZones = [`Order-Flow Confluence Area${suffix}`, `Structure Response Area${suffix}`, `Flow-Only Trap${suffix}`];
  } else if (name.includes("fx basket mean-reversion quant")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`FX Basket Legs${suffix}`, `Basket Z-Score Deviation${suffix}`, `Rolling Correlation / Rebalance Check${suffix}`];
    vm.requiredZones = [`Basket Stretch Area${suffix}`, `Mean-Reversion Review Area${suffix}`, `Correlation Break Trap${suffix}`];
  } else if (name.includes("usd weakness") && name.includes("swing")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Swing USD Weakness / DXY Trend${suffix}`, `Real-Yield Cross-Check${suffix}`, `Gold Long-Study Response${suffix}`];
    vm.requiredZones = [`Swing Dollar Weakness Window${suffix}`, `Delayed Gold Response Area${suffix}`, `Safe-Haven Or Yield Divergence Trap${suffix}`];
  } else if (name.includes("usd strength") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`USD Strength / DXY Context${suffix}`, `Real-Yield Cross-Check${suffix}`, `Gold Short-Study Pressure${suffix}`];
    vm.requiredZones = name.includes("swing")
      ? [`Swing Dollar Strength Window${suffix}`, `Delayed Gold Pressure Area${suffix}`, `Yield Or Safe-Haven Conflict Trap${suffix}`]
      : [`Dollar Strength Pressure Window${suffix}`, `Gold Rejection Area${suffix}`, `Dollar-Only Trap${suffix}`];
  } else if (name.includes("hft momentum ignition")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Rapid Order Burst${suffix}`, `Thin Depth / Spread Percentage${suffix}`, `Cancellation Pattern Check${suffix}`];
    vm.requiredZones = [`Ignition Detection Window${suffix}`, `Liquidity-Thin Response Area${suffix}`, `Manipulation / Fade Trap${suffix}`];
  } else if (name.includes("order flow imbalance analysis")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "DOMOrderFlowChart";
    vm.requiredLabels = [`Bid / Ask Imbalance${suffix}`, `Depth Shift${suffix}`, `Absorption Or Exhaustion Check${suffix}`];
    vm.requiredZones = [`Imbalance Observation Area${suffix}`, `Persistence Review Area${suffix}`, `Spoof / One-Sided Book Trap${suffix}`];
  } else if (name.includes("adaptive moving average") && name.includes("kaufman")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Kaufman AMA Line${suffix}`, `Efficiency Ratio State${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Adaptive Trend Review Area${suffix}`, `Noise Filter Area${suffix}`, `Whipsaw / Lag Trap${suffix}`];
  } else if (name.includes("imbalance + price ladder scalping")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "DOMOrderFlowChart";
    vm.requiredLabels = [`Crypto Price Ladder${suffix}`, `Bid / Ask Stack Imbalance${suffix}`, `Absorption / Spoof Check${suffix}`];
    vm.requiredZones = [`Short-Window Ladder Area${suffix}`, `Quick Invalidation Area${suffix}`, `Spoof Or Thin-Depth Trap${suffix}`];
  } else if (name.includes("volatility scaling of position sizes")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Volatility Input${suffix}`, `Pip Invalidation Distance${suffix}`, `Exposure Cap${suffix}`];
    vm.requiredZones = [`Scale-Down Review Area${suffix}`, `Risk Budget Area${suffix}`, `Oversizing During Volatility Trap${suffix}`];
  } else if (name.includes("trend + fundamental confirmation")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    vm.requiredLabels = [`Forex Trend Structure${suffix}`, `Fundamental Driver${suffix}`, `Conflict Matrix${suffix}`];
    vm.requiredZones = [`Trend / Macro Alignment Area${suffix}`, `Pair Response Review${suffix}`, `Fundamental-Override Trap${suffix}`];
  } else if (name.includes("yield curve inversion") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Yield-Curve Inversion${suffix}`, `Growth-Risk / Real-Yield Check${suffix}`, `Gold Long-Study Reaction${suffix}`];
    vm.requiredZones = name.includes("swing")
      ? [`Swing Yield-Curve Stress Window${suffix}`, `Delayed Gold Reaction Area${suffix}`, `Curve-Only Trap${suffix}`]
      : [`Yield-Curve Stress Window${suffix}`, `Gold Reaction Area${suffix}`, `Macro Divergence Trap${suffix}`];
  } else if (name.includes("vwap reversion execution")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`VWAP Anchor${suffix}`, `Deviation / Reversion Path${suffix}`, `Depth And Slippage Check${suffix}`];
    vm.requiredZones = [`VWAP Deviation Area${suffix}`, `Execution Quality Review${suffix}`, `Failed Reclaim Trap${suffix}`];
  } else if (name.includes("liquidity provision incentives")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Maker Incentive / Fee Tier${suffix}`, `Depth Added${suffix}`, `Inventory Exposure${suffix}`];
    vm.requiredZones = [`Incentive Review Area${suffix}`, `Spread / Rebate Quality Area${suffix}`, `Adverse Selection Trap${suffix}`];
  } else if (name.includes("technical + sentiment confluence")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Technical Structure${suffix}`, `Sentiment Source Window${suffix}`, `Disagreement Matrix${suffix}`];
    vm.requiredZones = [`Confluence Audit Area${suffix}`, `Sentiment Freshness Review${suffix}`, `Stale Sentiment Trap${suffix}`];
  } else if (name.includes("cross-asset statistical factor model")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Cross-Asset Factor Inputs${suffix}`, `Beta / Exposure Weights${suffix}`, `Out-Of-Sample Drift Check${suffix}`];
    vm.requiredZones = [`Factor Model Audit Area${suffix}`, `Regime Shift Review${suffix}`, `Overfit / Liquidity Trap${suffix}`];
  } else if (name.includes("high volatility risk-off") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [`Volatility Spike${suffix}`, `Equity Stress / Yield Response${suffix}`, `Gold Safe-Haven Reaction${suffix}`];
    vm.requiredZones = name.includes("swing")
      ? [`Swing Risk-Off Window${suffix}`, `Delayed Safe-Haven Response Area${suffix}`, `Volatility Normalization Trap${suffix}`]
      : [`Risk-Off Shock Window${suffix}`, `Gold Reaction Area${suffix}`, `Macro Conflict Trap${suffix}`];
  } else if (name.includes("fundamental + cot confluence")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Fundamental Driver${suffix}`, `COT Participant Positioning${suffix}`, `Report Lag / Percentile Check${suffix}`];
    vm.requiredZones = [`Macro / COT Alignment Area${suffix}`, `Positioning Extreme Review${suffix}`, `COT Timing Trap${suffix}`];
  } else if (name.includes("multi-timeframe trend alignment")) {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MultiTimeframeConfluenceChart";
    vm.requiredLabels = [`Higher-Timeframe Trend${suffix}`, `Lower-Timeframe Structure${suffix}`, `Conflict Timeframe Check${suffix}`];
    vm.requiredZones = [`Alignment Review Area${suffix}`, `Pullback Quality Area${suffix}`, `Timeframe Conflict Trap${suffix}`];
  } else if (
    name.includes("neural network price prediction") ||
    name.includes("random forest classification") ||
    name.includes("support vector machine") ||
    name.includes("reinforcement learning trading agent") ||
    name.includes("kalman filter trend estimation") ||
    name.includes("hidden markov model")
  ) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    if (name.includes("neural network")) {
      vm.requiredLabels = [`Feature Input Window${suffix}`, `Prediction Band${suffix}`, `Error Band / Validation Split${suffix}`];
      vm.requiredZones = [`Training Window Audit${suffix}`, `Prediction Uncertainty Area${suffix}`, `Overfit / Regime Shift Trap${suffix}`];
    } else if (name.includes("random forest")) {
      vm.requiredLabels = [`Feature Vote Set${suffix}`, `Tree-Vote Probability${suffix}`, `Out-Of-Sample Confusion Check${suffix}`];
      vm.requiredZones = [`Classifier Vote Area${suffix}`, `Feature Drift Review${suffix}`, `Majority-Vote Trap${suffix}`];
    } else if (name.includes("support vector machine")) {
      vm.requiredLabels = [`Scaled Feature Space${suffix}`, `SVM Boundary / Margin${suffix}`, `Support Vector Examples${suffix}`];
      vm.requiredZones = [`Trend Classification Area${suffix}`, `Class-Flip Boundary Area${suffix}`, `Narrow-Margin Trap${suffix}`];
    } else if (name.includes("reinforcement learning")) {
      vm.requiredLabels = [`State Inputs${suffix}`, `Action / Reward Map${suffix}`, `Policy Output Review${suffix}`];
      vm.requiredZones = [`Training Environment Area${suffix}`, `Live Distribution Check${suffix}`, `Reward-Hacking Trap${suffix}`];
    } else if (name.includes("kalman")) {
      vm.requiredLabels = [`Observed Forex Price${suffix}`, `Kalman Estimated Trend State${suffix}`, `Residual / Filter Error Band${suffix}`];
      vm.requiredZones = [`Adaptive Smoothing Area${suffix}`, `Lag And Filter Gain Review${suffix}`, `Regime Shift Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Hidden Regime States${suffix}`, `Transition Probability Map${suffix}`, `State Confidence Check${suffix}`];
      vm.requiredZones = [`Regime Switch Observation Area${suffix}`, `Low-Confidence State Area${suffix}`, `False Regime Flip Trap${suffix}`];
    }
  } else if (
    (name.includes("fed dovish pivot") || name.includes("fed hawkish pivot") || name.includes("inflation hedge") || name.includes("usd weakness")) &&
    assetClass === "GOLD"
  ) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    if (name.includes("fed dovish")) {
      vm.requiredLabels = [`Fed Dovish Pivot Watch${suffix}`, `Real-Yield Decline / Dollar Check${suffix}`, `Gold Long-Study Reaction${suffix}`];
      vm.requiredZones = name.includes("swing")
        ? [`Swing Policy Repricing Window${suffix}`, `Delayed Gold Reaction Area${suffix}`, `Dollar Rebound Trap${suffix}`]
        : [`Policy Pivot Reaction Window${suffix}`, `Gold Acceptance Area${suffix}`, `False Dovish Read Trap${suffix}`];
    } else if (name.includes("fed hawkish")) {
      vm.requiredLabels = [`Fed Hawkish Pivot Watch${suffix}`, `Real-Yield Rise / Dollar Check${suffix}`, `Gold Short-Study Pressure${suffix}`];
      vm.requiredZones = name.includes("swing")
        ? [`Swing Hawkish Repricing Window${suffix}`, `Delayed Gold Pressure Area${suffix}`, `Safe-Haven Conflict Trap${suffix}`]
        : [`Policy Pressure Window${suffix}`, `Gold Rejection Area${suffix}`, `False Hawkish Read Trap${suffix}`];
    } else if (name.includes("inflation hedge")) {
      vm.requiredLabels = [`Inflation Surprise Context${suffix}`, `Real-Yield Conflict Check${suffix}`, `Gold Hedge Reaction${suffix}`];
      vm.requiredZones = name.includes("swing")
        ? [`Swing Inflation-Hedge Window${suffix}`, `Delayed Hedge Response Area${suffix}`, `Real-Yield Conflict Trap${suffix}`]
        : [`Inflation-Hedge Observation Area${suffix}`, `Gold Reaction Area${suffix}`, `Inflation-Only Trap${suffix}`];
    } else {
      vm.requiredLabels = [`USD Weakness / DXY Context${suffix}`, `Real-Yield Cross-Check${suffix}`, `Gold Long-Study Response${suffix}`];
      vm.requiredZones = [`Dollar Weakness Window${suffix}`, `Gold Reaction Area${suffix}`, `Safe-Haven Or Yield Divergence Trap${suffix}`];
    }
  } else if (name.includes("spatial arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`Venue A/B/C Prices${suffix}`, `Depth / Fees / Inventory${suffix}`, `Transfer Limits And Latency${suffix}`];
    vm.requiredZones = [`Spatial Price Gap Area${suffix}`, `Executable Inventory Review${suffix}`, `Stale Venue Quote Trap${suffix}`];
  } else if (name.includes("triangular arbitrage") && assetClass === "CRYPTO") {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "TriangularArbitrageChart";
    vm.requiredLabels = [`Three Crypto Pair Triangle${suffix}`, `Implied Cross Versus Actual Cross${suffix}`, `Fees / Depth / Latency Cost${suffix}`];
    vm.requiredZones = [`Crypto Cross-Rate Gap Area${suffix}`, `Three-Leg Fill Sequence Area${suffix}`, `Stale Quote / Partial Fill Trap${suffix}`];
  } else if (name.includes("cross-exchange market making")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Venue A Quote Ladder${suffix}`, `Venue B Hedge Quote${suffix}`, `Inventory On Both Venues${suffix}`];
    vm.requiredZones = [`Cross-Venue Spread Area${suffix}`, `Inventory Hedge Review${suffix}`, `Latency / Withdrawal Limit Trap${suffix}`];
  } else if (name.includes("latency market making")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Quote Age And Queue Position${suffix}`, `Cancel / Replace Delay${suffix}`, `Inventory Skew Gauge${suffix}`];
    vm.requiredZones = [`Latency-Sensitive Quote Area${suffix}`, `Queue Loss Review${suffix}`, `Toxic Flow Trap${suffix}`];
  } else if (name.includes("statistical arbitrage basket")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Crypto Basket Legs${suffix}`, `Basket Z-Score Spread${suffix}`, `Rolling Correlation / Cointegration Check${suffix}`];
    vm.requiredZones = [`Basket Divergence Area${suffix}`, `Rebalance Drift Review${suffix}`, `Correlation Break Trap${suffix}`];
  } else if (name.includes("high-frequency market making")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Forex Bid / Ask Quote Ladder${suffix}`, `Queue Priority / Latency${suffix}`, `Inventory Skew Gauge${suffix}`];
    vm.requiredZones = [`HFT Spread Observation Area${suffix}`, `Adverse Selection Review${suffix}`, `Fast-Move No-Fill Trap${suffix}`];
  } else if (name.includes("cointegration basket trading")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Cointegrated Basket Legs${suffix}`, `Hedge Weights / Stationarity Check${suffix}`, `Spread Z-Score${suffix}`];
    vm.requiredZones = [`Cointegration Divergence Area${suffix}`, `Convergence Review Area${suffix}`, `Relationship Break Trap${suffix}`];
  } else if (name.includes("trend + volume confirmation") && assetClass === "GOLD") {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumePriceConfirmationChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Gold Trend Leg${suffix}`, `Relative Volume Expansion${suffix}`, `Fast Exhaustion Check${suffix}`];
      vm.requiredZones = [`Intraday Trend-Volume Alignment${suffix}`, `Quick Pullback Hold Area${suffix}`, `Volume Spike Fakeout Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Gold Trend Leg${suffix}`, `Multi-Candle Volume Participation${suffix}`, `Wider Point/Dollar Check${suffix}`];
      vm.requiredZones = [`Swing Trend-Volume Alignment${suffix}`, `Patient Pullback Hold Area${suffix}`, `Late-Volume Exhaustion Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Gold Trend Structure${suffix}`, `Relative Volume Expansion${suffix}`, `Close Quality Check${suffix}`];
      vm.requiredZones = [`Trend-Volume Alignment Area${suffix}`, `Pullback Hold Area${suffix}`, `Volume Spike Trap${suffix}`];
    }
  } else if (name.includes("moving average crossover bot")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [`Fast Moving Average${suffix}`, `Slow Moving Average${suffix}`, `Bot Review / Crossover Point${suffix}`];
    vm.requiredZones = [`Automation Review Area${suffix}`, `Higher-Timeframe Filter Area${suffix}`, `Whipsaw / Parameter Drift Trap${suffix}`];
  } else if (name.includes("protective put hedging")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "ProtectivePutHedgeChart";
    vm.requiredLabels = [`Spot Holding${suffix}`, `Long Put Strike And Expiry${suffix}`, `Premium Paid / Downside Floor${suffix}`];
    vm.requiredZones = [`Insurance Study Area${suffix}`, `Upside Participation Area${suffix}`, `IV Crush / Liquidity Trap${suffix}`];
  } else if (name.includes("turtle trading system")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "DonchianChannelBreakoutChart";
    vm.requiredLabels = [`N-Period High / Low Channel${suffix}`, `Donchian Breakout Close${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Turtle Channel Observation Area${suffix}`, `Breakout Acceptance Area${suffix}`, `Failed Break Back Inside Channel${suffix}`];
  } else if (name.includes("covered call income")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CoveredCallChart";
    vm.requiredLabels = [`Spot Holding${suffix}`, `Short Call Strike And Expiry${suffix}`, `Premium Received / Upside Cap${suffix}`];
    vm.requiredZones = [`Covered Call Structure Area${suffix}`, `Assignment Review Area${suffix}`, `Upside Cap / IV Expansion Trap${suffix}`];
  } else if (name.includes("real yield decline") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    if (name.includes("swing")) {
      vm.requiredLabels = [`Falling TIPS Real Yield Trend${suffix}`, `Swing Gold Response${suffix}`, `Wide Point/Dollar Check${suffix}`];
      vm.requiredZones = [`Swing Macro Reaction Window${suffix}`, `Delayed Confirmation Area${suffix}`, `Yield Rebound / Dollar Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Falling US Real Yield / TIPS${suffix}`, `Gold Long-Study Response${suffix}`, `Macro Divergence Check${suffix}`];
      vm.requiredZones = [`Real-Yield Decline Window${suffix}`, `Gold Reaction Area${suffix}`, `Divergence Or Dollar-Strength Trap${suffix}`];
    }
  } else if (name.includes("real yield rise") && assetClass === "GOLD") {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    if (name.includes("swing")) {
      vm.requiredLabels = [`Rising TIPS Real Yield Trend${suffix}`, `Swing Gold Pressure${suffix}`, `Wide Point/Dollar Check${suffix}`];
      vm.requiredZones = [`Swing Macro Pressure Window${suffix}`, `Delayed Confirmation Area${suffix}`, `Yield Pullback / Safe-Haven Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Rising US Real Yield / TIPS${suffix}`, `Gold Short-Study Pressure${suffix}`, `Macro Divergence Check${suffix}`];
      vm.requiredZones = [`Real-Yield Rise Window${suffix}`, `Gold Pressure Area${suffix}`, `Divergence Or Safe-Haven Trap${suffix}`];
    }
  } else if (name.includes("channel breakout system")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [`Upper Channel Boundary${suffix}`, `Lower Channel Boundary${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Channel Compression Area${suffix}`, `Body-Close Breakout And Retest Area${suffix}`, `Return Back Inside Channel Trap${suffix}`];
  } else if (name.includes("butterfly spread")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OptionsButterflySpreadChart";
    vm.requiredLabels = [`Long Wing Options${suffix}`, `Short Body Strikes${suffix}`, `Same Expiry / Net Premium${suffix}`];
    vm.requiredZones = [`Central Price Body Area${suffix}`, `Limited-Risk Wing Area${suffix}`, `Illiquid Strike / IV Shift Trap${suffix}`];
  } else if (name.includes("mean reversion algorithm") && name.includes("bollinger")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [`Upper / Middle / Lower Bollinger Bands${suffix}`, `Close Back Inside Band${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Range Stretch Area${suffix}`, `Middle-Band Mean Path${suffix}`, `Failed Mean-Reversion Continuation Trap${suffix}`];
  } else if (name.includes("iron condor")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OptionsIronCondorChart";
    vm.requiredLabels = [`Short Put Spread${suffix}`, `Short Call Spread${suffix}`, `Premium / Margin / Wings${suffix}`];
    vm.requiredZones = [`Defined Range Body${suffix}`, `Wing Protection Area${suffix}`, `Breakout / Gap Risk Trap${suffix}`];
  } else if (name.includes("gamma tilt")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "GammaTiltChart";
    vm.requiredLabels = [`Net Gamma By Strike${suffix}`, `Spot Distance From Strike Cluster${suffix}`, `Hedge Pressure / IV Change${suffix}`];
    vm.requiredZones = [`Gamma Tilt Observation Area${suffix}`, `Dealer Hedge Pressure Area${suffix}`, `Gamma Flip / Liquidity Trap${suffix}`];
  } else if (name.includes("statistical arbitrage") && name.includes("pairs algorithm")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [`Forex Pair A / Pair B Spread${suffix}`, `Z-Score / Correlation Check${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Stat-Arb Divergence Area${suffix}`, `Mean-Reversion Review Area${suffix}`, `Correlation Break Trap${suffix}`];
  } else if (name.includes("genetic algorithm parameter")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    vm.requiredLabels = [`Parameter Population${suffix}`, `Train / Test Fitness Split${suffix}`, `Walk-Forward Review${suffix}`];
    vm.requiredZones = [`Optimization Study Area${suffix}`, `Out-Of-Sample Review Area${suffix}`, `Overfitting / Regime Shift Trap${suffix}`];
  } else if (name.includes("liquidation cascade trigger")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationCascadeChart";
    vm.requiredLabels = [`Estimated Liquidation Bands${suffix}`, `Forced Liquidation Displacement${suffix}`, `Open Interest Change${suffix}`];
    vm.requiredZones = [`Cascade Trigger Area${suffix}`, `Venue Depth Stress Area${suffix}`, `Reversal After Forced Flow Trap${suffix}`];
  } else if (name.includes("cross-exchange arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CrossExchangeArbitrageChart";
    vm.requiredLabels = [`Exchange A Price / Depth${suffix}`, `Exchange B Price / Depth${suffix}`, `Fees / Transfer Time / Inventory${suffix}`];
    vm.requiredZones = [`Venue Price Gap Area${suffix}`, `Transfer And Withdrawal Review Area${suffix}`, `Stale Quote / Non-Executable Gap Trap${suffix}`];
  } else if (name.includes("price channel break") && name.includes("keltner") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "KeltnerChannelChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Keltner EMA Midline${suffix}`, `Fast Close Outside ATR Channel${suffix}`, `Compact Gold Point/Dollar Check${suffix}`];
      vm.requiredZones = [`Intraday Channel Compression${suffix}`, `Quick Break-And-Retest Area${suffix}`, `Fast Return-Inside Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Keltner EMA Midline${suffix}`, `Sustained Close Outside ATR Channel${suffix}`, `Wide Gold Point/Dollar Check${suffix}`];
      vm.requiredZones = [`Swing Channel Structure${suffix}`, `Patient Retest Area${suffix}`, `Broad Acceptance Back Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Keltner EMA Midline${suffix}`, `Upper/Lower ATR Channel${suffix}`, `Gold Close Outside Channel${suffix}`];
      vm.requiredZones = [`Channel-Break Observation Area${suffix}`, `Retest Acceptance Area${suffix}`, `Failed Close Back Inside${suffix}`];
    }
  } else if (name.includes("calendar spread")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "CalendarSpreadRollChart";
    vm.requiredLabels = [`Near Futures Expiry${suffix}`, `Far Futures Expiry${suffix}`, `Roll Yield / Basis Curve${suffix}`];
    vm.requiredZones = [`Calendar Spread Observation Area${suffix}`, `Roll Cost And Margin Area${suffix}`, `Expiry / Roll Slippage Trap${suffix}`];
  } else if (name.includes("relative value currency basket")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "RelativeValueBasketChart";
    vm.requiredLabels = [`Currency Strength Inputs${suffix}`, `Basket Weights And Correlation${suffix}`, `Long / Short Basket Legs${suffix}`];
    vm.requiredZones = [`Relative-Value Ranking Area${suffix}`, `Rebalance Review Area${suffix}`, `Correlation Crowding Trap${suffix}`];
  } else if (name.includes("perpetual funding rate arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`Matched Spot And Perpetual Legs${suffix}`, `Funding Interval / Basis / Fee Ledger${suffix}`, `Liquidation Buffer And Venue Depth${suffix}`];
    vm.requiredZones = [`Funding Carry Observation Area${suffix}`, `Rebalance Drift Area${suffix}`, `Basis Blowout Or Margin Trap${suffix}`];
  } else if (name.includes("yield curve arbitrage")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "FXForwardCurveChart";
    vm.requiredLabels = [`FX Forward Curve Nodes${suffix}`, `Rate Differential And Forward Points${suffix}`, `Hedge Timing / Cost Ledger${suffix}`];
    vm.requiredZones = [`Curve Dislocation Area${suffix}`, `Maturity-Match Review Area${suffix}`, `Curve Shift Or Capital Constraint Trap${suffix}`];
  } else if (name.includes("order anticipation")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "OrderAnticipationRiskChart";
    vm.requiredLabels = [`Public Footprint Clue${suffix}`, `Compliance Boundary${suffix}`, `Failed Anticipation Path${suffix}`];
    vm.requiredZones = [`Order-Flow Observation Area${suffix}`, `Ethics / Venue-Limit Area${suffix}`, `Spoofing Or Illegal-Front-Run Trap${suffix}`];
  } else if (name.includes("gamma scalping")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "GammaScalpingChart";
    vm.requiredLabels = [`Option Delta Hedge Line${suffix}`, `Gamma / Theta Balance${suffix}`, `Fees / Slippage / IV Change${suffix}`];
    vm.requiredZones = [`Re-Hedge Observation Area${suffix}`, `Realized-Volatility Area${suffix}`, `Over-Hedging / Theta Trap${suffix}`];
  } else if (name.includes("liquidity provision with vwap/twap")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`VWAP / TWAP Participation Path${suffix}`, `Bid / Ask Spread And Fill Quality${suffix}`, `Inventory And Adverse Selection Check${suffix}`];
    vm.requiredZones = [`Algorithmic Provision Area${suffix}`, `Session Liquidity Review Area${suffix}`, `Adverse Selection Trap${suffix}`];
  } else if (name.includes("volatility skew trade")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "VolatilitySkewChart";
    vm.requiredLabels = [`Comparable Call IV${suffix}`, `Comparable Put IV${suffix}`, `Skew / Smile Shape${suffix}`];
    vm.requiredZones = [`Option-Demand Imbalance Area${suffix}`, `Event Premium Area${suffix}`, `Skew Normalization Trap${suffix}`];
  } else if (name.includes("supertrend indicator strategy") && assetClass === "GOLD") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "SupertrendVolatilityChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`Short-Timeframe SuperTrend Line${suffix}`, `Fast Gold Flip Close${suffix}`, `Compact Point/Dollar Distance${suffix}`];
      vm.requiredZones = [`Intraday Volatility Band${suffix}`, `Quick Retest Area${suffix}`, `Chop / News Wick Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`Higher-Timeframe SuperTrend Line${suffix}`, `Sustained Gold Flip Close${suffix}`, `Wide Point/Dollar Distance${suffix}`];
      vm.requiredZones = [`Swing Volatility Band${suffix}`, `Patient Trend-Flip Area${suffix}`, `Late Flip / Reclaim Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Gold SuperTrend Trailing Line${suffix}`, `Close Through Flip Area${suffix}`, `Volatility Band Context${suffix}`];
      vm.requiredZones = [`Trend-Flip Observation Area${suffix}`, `Line Retest Area${suffix}`, `Sideways Chop Trap${suffix}`];
    }
  } else if (name.includes("percent of volume")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Target Participation Rate${suffix}`, `Live Volume Estimate${suffix}`, `Child-Order Pace And Fill Quality${suffix}`];
    vm.requiredZones = [`POV Pacing Area${suffix}`, `Market Impact Review Area${suffix}`, `Volume Estimate Drift Trap${suffix}`];
  } else if (name.includes("long straddle")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Long Call + Long Put${suffix}`, `Premium Paid / Breakeven Band${suffix}`, `IV Crush And Theta Decay${suffix}`];
    vm.requiredZones = [`Large-Move Needed Area${suffix}`, `Volatility Expansion Area${suffix}`, `Premium Decay Trap${suffix}`];
  } else if (name.includes("iceberg detection")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [`Repeated Refill At One Price${suffix}`, `Displayed Depth Versus Traded Volume${suffix}`, `Venue / Proxy Limitation${suffix}`];
    vm.requiredZones = [`Absorption Review Area${suffix}`, `Hidden-Size Suspicion Area${suffix}`, `False Refill Trap${suffix}`];
  } else if (name.includes("short straddle")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OptionsStraddleChart";
    vm.requiredLabels = [`Short Call + Short Put${suffix}`, `Premium Received / Breakeven Band${suffix}`, `Margin And Volatility Expansion${suffix}`];
    vm.requiredZones = [`Range-Stays-Contained Area${suffix}`, `Short-Gamma Risk Area${suffix}`, `Gap / Volatility Expansion Trap${suffix}`];
  } else if (name.includes("liquidity run reversal")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [`Prior Liquidity Pool${suffix}`, `Sweep Wick And Close Back Inside${suffix}`, `Displacement Away From Run${suffix}`];
    vm.requiredZones = [`Liquidity Run Area${suffix}`, `Reversal Acceptance Area${suffix}`, `Accepted Breakout Trap${suffix}`];
  } else if (name.includes("put-call parity")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "PutCallParityChart";
    vm.requiredLabels = [`Call + Cash Side${suffix}`, `Put + Spot Side${suffix}`, `Synthetic Forward Comparison${suffix}`];
    vm.requiredZones = [`Parity Gap Observation Area${suffix}`, `Fee / Borrow / Exercise Review Area${suffix}`, `Non-Executable Gap Trap${suffix}`];
  } else if (name.includes("miner hashrate")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "HashrateNetworkAuditChart";
    vm.requiredLabels = [`Hashrate And Difficulty Trend${suffix}`, `Hashprice / Miner Revenue Context${suffix}`, `Miner Reserve / Flow Cross-Check${suffix}`];
    vm.requiredZones = [`Network-Security Observation Area${suffix}`, `Miner-Stress Audit Area${suffix}`, `Difficulty-Lag / Price-Myth Trap${suffix}`];
  } else if (name.includes("institutional supply and demand")) {
    vm.visualCategory = "Supply / Demand Zone Visual";
    vm.componentType = "SupplyDemandZoneChart";
    vm.requiredLabels = [`Displacement Origin Zone${suffix}`, `Fresh Mitigation Return${suffix}`, `Invalidation Beyond Zone${suffix}`];
    vm.requiredZones = [`Institutional-Supply Study Area${suffix}`, `Institutional-Demand Study Area${suffix}`, `Already-Mitigrated Zone Trap${suffix}`];
  } else if (name.includes("market making")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "MarketMakingSpreadChart";
    vm.requiredLabels = [`Bid / Ask Quote Ladder${suffix}`, `Inventory Skew Gauge${suffix}`, `Adverse Selection Check${suffix}`];
    vm.requiredZones = [`Spread Capture Observation Area${suffix}`, `Inventory Rebalance Area${suffix}`, `Fast-Move / No-Fill Trap${suffix}`];
  } else if (name.includes("stake/unstake")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "StakingFlowAuditChart";
    vm.requiredLabels = [`Stake Deposits / Unlock Queue${suffix}`, `Validator Exit Or LST Flow${suffix}`, `Exchange Destination Check${suffix}`];
    vm.requiredZones = [`Staking Participation Area${suffix}`, `Unstake Waiting-Period Area${suffix}`, `Unstake-Equals-Selling Trap${suffix}`];
  } else if (name.includes("peg maintenance")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "PegMaintenanceChart";
    vm.requiredLabels = [`Official Peg / Managed Band${suffix}`, `Intervention / Reserve Pressure${suffix}`, `Break Or Repeg Scenario${suffix}`];
    vm.requiredZones = [`Band-Defense Area${suffix}`, `Forward-Point Stress Area${suffix}`, `False Peg-Break Trap${suffix}`];
  } else if (name === "market supply/demand") {
    vm.visualCategory = "Supply / Demand Zone Visual";
    vm.componentType = "SupplyDemandZoneChart";
    vm.requiredLabels = [`Plain Supply Zone${suffix}`, `Plain Demand Zone${suffix}`, `Acceptance / Rejection Reaction${suffix}`];
    vm.requiredZones = [`Fresh Zone Study Area${suffix}`, `Return-To-Zone Area${suffix}`, `Institutional-Certainty Trap${suffix}`];
  } else if (name.includes("moving average bounce")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageBounceChart";
    vm.requiredLabels = [`Chosen Moving Average${suffix}`, `First Clean Pullback${suffix}`, `Close-Through Failure${suffix}`];
    vm.requiredZones = [`Trend Context Area${suffix}`, `Average Reaction Area${suffix}`, `Average-As-Support Trap${suffix}`];
  } else if (name.includes("horizontal s/r breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "HorizontalSRBreakoutChart";
    vm.requiredLabels = [`Pre-Marked Horizontal Level${suffix}`, `Body-Close Breakout${suffix}`, `Retest Acceptance${suffix}`];
    vm.requiredZones = [`Repeated-Touch Area${suffix}`, `Breakout / Retest Area${suffix}`, `Failed Break Back Inside${suffix}`];
  } else if (name.includes("round number bounce") && assetClass === "GOLD") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "RoundNumberBounceChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`Intraday Gold Round Number${suffix}`, `Compact Wick Reaction${suffix}`, `Fast Expiry Check${suffix}`];
      vm.requiredZones = [`Short-Timeframe Approach Area${suffix}`, `Immediate Reaction Area${suffix}`, `Fast Break-Through Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`Higher-Timeframe Gold Round Number${suffix}`, `Multi-Session Reaction${suffix}`, `Broad Structural Failure${suffix}`];
      vm.requiredZones = [`Swing Approach Area${suffix}`, `Patient Reaction Area${suffix}`, `Level-Only Bias Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Gold Round Number${suffix}`, `Approach Quality${suffix}`, `Reaction / Invalidation${suffix}`];
      vm.requiredZones = [`Round-Number Study Area${suffix}`, `Bounce Reaction Area${suffix}`, `Clean Break-Through Trap${suffix}`];
    }
  } else if (name.includes("fixed fractional sizing")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`Fixed Risk Percentage${suffix}`, `Pip Invalidation Distance${suffix}`, `Position Size Output${suffix}`];
    vm.requiredZones = [`Risk Budget Area${suffix}`, `Spread / Slippage Allowance${suffix}`, `Oversized Position Trap${suffix}`];
  } else if (name.includes("gas price and activity")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "GasActivityAuditChart";
    vm.requiredLabels = [`Gas Price / Transaction Count${suffix}`, `Active Address And Failure Rate${suffix}`, `Protocol Congestion Context${suffix}`];
    vm.requiredZones = [`Network-Demand Observation Area${suffix}`, `Fee-Spike Area${suffix}`, `High-Gas-Is-Bullish Trap${suffix}`];
  } else if (name.includes("spot-futures basis")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "SpotFuturesBasisChart";
    vm.requiredLabels = [`Timestamped Spot And Futures Price${suffix}`, `Basis / Time-To-Expiry${suffix}`, `Fees / Margin / Depth Ledger${suffix}`];
    vm.requiredZones = [`Positive Basis Observation Area${suffix}`, `Convergence Cost Area${suffix}`, `Basis-Widening Trap${suffix}`];
  } else if (name.includes("triangular arbitrage")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "TriangularArbitrageChart";
    vm.requiredLabels = [`Three-Pair Quote Triangle${suffix}`, `Implied Cross Vs Actual Cross${suffix}`, `Bid / Ask And Latency Cost${suffix}`];
    vm.requiredZones = [`Cross-Rate Dislocation Area${suffix}`, `Execution Sequence Area${suffix}`, `Stale-Quote / No-Fill Trap${suffix}`];
  } else if (name.includes("atr-adjusted volatility sizing")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    vm.requiredLabels = [`ATR Window And Distance${suffix}`, `Risk Budget And Pip Value${suffix}`, `Volatility Size Cutback${suffix}`];
    vm.requiredZones = [`Volatility Sizing Area${suffix}`, `Spread / Slippage Allowance${suffix}`, `ATR-As-Direction Trap${suffix}`];
  } else if (name.includes("covered interest arbitrage")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "CoveredInterestArbitrageChart";
    vm.requiredLabels = [`Spot / Forward / Rate Differential${suffix}`, `Hedged Cashflow Ledger${suffix}`, `Cost And Capital-Control Check${suffix}`];
    vm.requiredZones = [`Covered Carry Observation Area${suffix}`, `Forward-Point Comparison Area${suffix}`, `Covered-Equals-Riskless Trap${suffix}`];
  } else if (name.includes("reverse basis trade")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "ReverseBasisTradeChart";
    vm.requiredLabels = [`Inverted Basis / Funding${suffix}`, `Matched Exposure Ledger${suffix}`, `Liquidation Buffer And Venue Depth${suffix}`];
    vm.requiredZones = [`Reverse Basis Observation Area${suffix}`, `Convergence Or Funding Area${suffix}`, `Squeeze / Margin Trap${suffix}`];
  } else if (name.includes("social media sentiment")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ForexSocialSentimentChart";
    vm.requiredLabels = [`Fixed Twitter / Reddit Source Basket${suffix}`, `Unique-Author Sentiment Breadth${suffix}`, `Forex Price / Macro Context${suffix}`];
    vm.requiredZones = [`Broad Sentiment Shift Area${suffix}`, `Score-Change Observation Area${suffix}`, `Bot / Stale-Text Trap${suffix}`];
  } else if (name.includes("whale exchange inflow")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "ExchangeInflowDistributionChart";
    vm.requiredLabels = [`Entity-Adjusted Exchange Inflows${suffix}`, `Deposit-Size Distribution${suffix}`, `Venue Concentration / Breadth${suffix}`];
    vm.requiredZones = [`Broad Inflow Area${suffix}`, `Concentrated Whale Deposit Area${suffix}`, `Internal-Transfer / No-Sale Trap${suffix}`];
  } else if (name.includes("exchange net flow divergence")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "ExchangeNetflowDivergenceChart";
    vm.requiredLabels = [`Entity-Adjusted Netflow${suffix}`, `Opposing Crypto Price Path${suffix}`, `Repeated-Flow Window${suffix}`];
    vm.requiredZones = [`Net-Outflow Divergence Area${suffix}`, `Net-Inflow Divergence Area${suffix}`, `Custody-Migration Trap${suffix}`];
  } else if (name.includes("sentiment divergence")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "PriceSentimentDivergenceChart";
    vm.requiredLabels = [`Forex Price Swing Sequence${suffix}`, `Synchronized Sentiment Path${suffix}`, `Completed Divergence Resolution${suffix}`];
    vm.requiredZones = [`Bullish Divergence Area${suffix}`, `Bearish Divergence Area${suffix}`, `Failed-Divergence Continuation Trap${suffix}`];
  } else if (name.includes("dormant coin movement")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "CoinAgeMovementChart";
    vm.requiredLabels = [`Coin Age × Amount Moved${suffix}`, `Historical TAC Percentile${suffix}`, `Destination / Entity Context${suffix}`];
    vm.requiredZones = [`Dormant-Coin Movement Spike${suffix}`, `Repeated Movement Area${suffix}`, `Internal Churn / Label Trap${suffix}`];
  } else if (name.includes("sentiment confirmed breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "SentimentBreakoutChart";
    vm.requiredLabels = [`Pre-Marked Forex Boundary${suffix}`, `Body-Close Breakout${suffix}`, `Fresh Sentiment Breadth / Change${suffix}`];
    vm.requiredZones = [`Price-Led Activation Area${suffix}`, `Retest Acceptance Area${suffix}`, `Stale / Contrary Sentiment Trap${suffix}`];
  } else if (name.includes("sentiment & macro combined")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "SentimentMacroConfluenceChart";
    vm.requiredLabels = [`Two-Economy Macro Thesis${suffix}`, `Documented Sentiment Source${suffix}`, `Forex Pair Structure${suffix}`];
    vm.requiredZones = [`Macro / Sentiment Agreement Area${suffix}`, `Input-Disagreement Area${suffix}`, `Double-Counting / Thesis-Failure Trap${suffix}`];
  } else if (name.includes("nr7/nr4") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "NRRangeBreakoutChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`Intraday NR4 / NR7 Ranking${suffix}`, `Compact Gold High-Low Box${suffix}`, `Immediate Outside Close${suffix}`];
      vm.requiredZones = [`Short-Timeframe Compression Area${suffix}`, `Next-Candle Hold Area${suffix}`, `Fast Return-Inside / Expiry Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`Daily NR4 / NR7 Bar${suffix}`, `Higher-Timeframe Gold Structure${suffix}`, `Completed Daily Breakout Close${suffix}`];
      vm.requiredZones = [`Multi-Session Compression Area${suffix}`, `Patient Acceptance Area${suffix}`, `Broad Return-Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Four / Seven-Bar Range Comparison${suffix}`, `Narrowest Candle High-Low${suffix}`, `Gold Outside Body Close${suffix}`];
      vm.requiredZones = [`Narrow-Range Compression Area${suffix}`, `Expansion Observation Area${suffix}`, `False Break Back Inside${suffix}`];
    }
  } else if (name.includes("utxo age distribution")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "UTXOAgeDistributionChart";
    vm.requiredLabels = [`UTXO Age-Band Supply Share${suffix}`, `Old-Coin Spend Flow${suffix}`, `Value-Weighted Cohort Change${suffix}`];
    vm.requiredZones = [`Dormant Supply Stock${suffix}`, `Aged-Coin Movement Area${suffix}`, `Old-Supply-Equals-Selling Trap${suffix}`];
  } else if (name.includes("depth of market")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "DOMOrderFlowChart";
    vm.requiredLabels = [`Venue-Specific Bid / Ask Ladder${suffix}`, `Displayed Depth Add / Pull${suffix}`, `Price / Spread Response${suffix}`];
    vm.requiredZones = [`Bid Absorption Area${suffix}`, `Ask Absorption Area${suffix}`, `Spoof / Fragmented-Feed Trap${suffix}`];
  } else if (name.includes("wallet clustering")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "WalletClusterAuditChart";
    vm.requiredLabels = [`Address-to-Entity Heuristics${suffix}`, `Cluster Confidence${suffix}`, `Exchange / Custody Destination${suffix}`];
    vm.requiredZones = [`Likely Entity Cluster${suffix}`, `Cluster Growth / Distribution Area${suffix}`, `False-Merge / False-Split Trap${suffix}`];
  } else if (name.includes("volume profile trading")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumeProfileChart";
    vm.requiredLabels = [`Anchored Forex Volume-at-Price${suffix}`, `Point of Control / Value Area${suffix}`, `High / Low Volume Nodes${suffix}`];
    vm.requiredZones = [`Price Acceptance Area${suffix}`, `Low-Volume Transit Area${suffix}`, `Profile-Migration / Feed-Limit Trap${suffix}`];
  } else if (name.includes("stablecoin supply ratio")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "StablecoinSupplyRatioChart";
    vm.requiredLabels = [`Crypto Market-Cap Numerator${suffix}`, `Stablecoin Supply Denominator${suffix}`, `Ratio Trend / Percentile${suffix}`];
    vm.requiredZones = [`Potential Dry-Powder Area${suffix}`, `Deployment Evidence Area${suffix}`, `Depeg / Double-Count Trap${suffix}`];
  } else if (name.includes("fibonacci retracement confluence") && assetClass === "GOLD") {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "FibonacciConfluenceChart";
    vm.requiredLabels = [`Completed Gold Swing Anchors${suffix}`, `38.2 / 50 / 61.8 Reference Band${suffix}`, `Independent Structure Confluence${suffix}`];
    vm.requiredZones = [`Measured Retracement Area${suffix}`, `Completed Reaction Area${suffix}`, `Anchor-Change / Level-Cluster Trap${suffix}`];
  } else if (name.includes("miner outflow")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "MinerOutflowAuditChart";
    vm.requiredLabels = [`Verified Miner Entity Outflow${suffix}`, `Exchange / Custody Destination${suffix}`, `Reserve / Production Context${suffix}`];
    vm.requiredZones = [`Repeated Miner-to-Exchange Flow${suffix}`, `Price / Volume Response Area${suffix}`, `Internal Transfer / Label Trap${suffix}`];
  } else if (name.includes("footprint chart strategy")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "FootprintDeltaChart";
    vm.requiredLabels = [`Venue-Specific Bid × Ask Volume${suffix}`, `Bar Delta / Stacked Imbalance${suffix}`, `Forex Price Structure${suffix}`];
    vm.requiredZones = [`Absorption Area${suffix}`, `Exhaustion Area${suffix}`, `Fragmented-Feed / Opposite-Delta Trap${suffix}`];
  } else if (name.includes("commitment of traders")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTPositioningChart";
    vm.requiredLabels = [`Weekly Net Position${suffix}`, `Historical Percentile${suffix}`, `Report / Publication Lag${suffix}`];
    vm.requiredZones = [`Crowded Long Area${suffix}`, `Crowded Short Area${suffix}`, `Extreme-Persistence Trap${suffix}`];
  } else if (name.includes("commercial hedger")) {
    vm.visualCategory = "Forex Positioning Visual";
    vm.componentType = "COTDivergenceChart";
    vm.requiredLabels = [`Commercial Net Position${suffix}`, `Speculator Net Position${suffix}`, `Forex Price Structure${suffix}`];
    vm.requiredZones = [`Participant Divergence Area${suffix}`, `Convergence Observation Area${suffix}`, `Reporting-Lag Trap${suffix}`];
  } else if (name.includes("retail sentiment contrarian")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentContrarianChart";
    vm.requiredLabels = [`Broker-Sample Long / Short Share${suffix}`, `Price Structure Change${suffix}`, `Sentiment Normalization${suffix}`];
    vm.requiredZones = [`Extreme Crowding Area${suffix}`, `Contrarian Confirmation Area${suffix}`, `Persistent-Extreme Trap${suffix}`];
  } else if (name.includes("retail sentiment trend")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RetailSentimentTrendChart";
    vm.requiredLabels = [`Established Forex Trend${suffix}`, `Retail Ratio Persistence${suffix}`, `Trend Structure Hold${suffix}`];
    vm.requiredZones = [`Trend Agreement Area${suffix}`, `Late-Crowd Observation Area${suffix}`, `Trend-Exhaustion Trap${suffix}`];
  } else if (name.includes("options sentiment")) {
    vm.visualCategory = "Forex Options Positioning Visual";
    vm.componentType = "RiskReversalSkewChart";
    vm.requiredLabels = [`Comparable Call Implied Volatility${suffix}`, `Comparable Put Implied Volatility${suffix}`, `Risk-Reversal Skew${suffix}`];
    vm.requiredZones = [`Option-Demand Imbalance${suffix}`, `Event-Premium Area${suffix}`, `Skew-Normalization Trap${suffix}`];
  } else if (name.includes("forex fear & greed")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ForexFearGreedChart";
    vm.requiredLabels = [`Transparent Component Basket${suffix}`, `Composite Risk Reading${suffix}`, `Forex Pair Structure${suffix}`];
    vm.requiredZones = [`Broad Risk-Off Area${suffix}`, `Broad Risk-On Area${suffix}`, `Component-Disagreement Trap${suffix}`];
  } else if (name.includes("news sentiment analysis")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsSentimentReactionChart";
    vm.requiredLabels = [`Primary-Source Text Timeline${suffix}`, `Context-Aware Sentiment Score${suffix}`, `First Stable Forex Close${suffix}`];
    vm.requiredZones = [`Expectation Comparison Area${suffix}`, `Spread-Normalization Area${suffix}`, `Negation / Headline Trap${suffix}`];
  } else if (name.includes("parabolic sar reversal") && assetClass === "GOLD") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Prior SAR Dot Run${suffix}`, `Compact Gold Reversal Boundary${suffix}`, `Completed Intraday Dot Flip${suffix}`];
      vm.requiredZones = [`Compact Reversal Area${suffix}`, `Short Observation Window${suffix}`, `Rapid Dot-Whipsaw Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`4H Gold Swing Boundary${suffix}`, `1H Sustained SAR Side Change${suffix}`, `Patient Pullback Hold${suffix}`];
      vm.requiredZones = [`Broad Swing Reversal Area${suffix}`, `Multi-Candle Acceptance Area${suffix}`, `Mature-Trend Failure Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Parabolic SAR Dot Side${suffix}`, `Dot Acceleration And Spacing${suffix}`, `Gold Structure Agreement${suffix}`];
      vm.requiredZones = [`Completed Flip Area${suffix}`, `Reversal Confirmation Area${suffix}`, `Range-Whipsaw Trap${suffix}`];
    }
  } else if (name.includes("funding & oi combined")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingOpenInterestMatrixChart";
    vm.requiredLabels = [`Funding Sign And Persistence${suffix}`, `Open Interest Change${suffix}`, `Price / Spot Context${suffix}`];
    vm.requiredZones = [`Healthy Participation Quadrant${suffix}`, `Crowded Leverage Quadrant${suffix}`, `Venue-Disagreement Trap${suffix}`];
  } else if (name.includes("funding + basis convergence")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingBasisConvergenceChart";
    vm.requiredLabels = [`Spot / Perpetual Matched Legs${suffix}`, `Dated-Futures Basis${suffix}`, `Funding And Total Carry${suffix}`];
    vm.requiredZones = [`Convergence Observation Area${suffix}`, `Cost And Margin Area${suffix}`, `Basis-Widening / Venue-Failure Trap${suffix}`];
  } else if (name.includes("crowded short squeeze")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "ShortSqueezeMechanicsChart";
    vm.requiredLabels = [`Negative Funding And Elevated OI${suffix}`, `Spot Reclaim / Buy Displacement${suffix}`, `Short Liquidations And OI Reduction${suffix}`];
    vm.requiredZones = [`Crowded Short Area${suffix}`, `Squeeze Acceleration Area${suffix}`, `No-Trigger / Exhaustion Trap${suffix}`];
  } else if (name.includes("liquidation level front-run")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationFrontRunRiskChart";
    vm.requiredLabels = [`Estimated Liquidation Cluster${suffix}`, `Cluster Migration And Approach${suffix}`, `Spot / Perpetual Response${suffix}`];
    vm.requiredZones = [`Observation Buffer Area${suffix}`, `Reclaim Or Continuation Area${suffix}`, `Sweep-Through / Estimate-Error Trap${suffix}`];
  } else if (name.includes("reddit sentiment")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RedditSentimentAuditChart";
    vm.requiredLabels = [`Fixed Communities And Window${suffix}`, `Unique-Author Sentiment Breadth${suffix}`, `Price / Volume Alignment${suffix}`];
    vm.requiredZones = [`Organic Discussion Area${suffix}`, `Sentiment Shift Area${suffix}`, `Bot / Brigading Trap${suffix}`];
  } else if (name.includes("whale exchange outflow")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "ExchangeOutflowAuditChart";
    vm.requiredLabels = [`Entity-Adjusted Exchange Netflow${suffix}`, `Verified Destination / Custody Context${suffix}`, `Historical Flow Baseline${suffix}`];
    vm.requiredZones = [`Repeated Outflow Area${suffix}`, `Price / Volume Confirmation Area${suffix}`, `Internal-Transfer / Stale-Label Trap${suffix}`];
  } else if (name.includes("bollinger squeeze breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerSqueezeChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Bandwidth Compression${suffix}`, `Compact Gold Breakout Close${suffix}`, `Next-Candle Hold${suffix}`];
      vm.requiredZones = [`Short-Timeframe Squeeze Area${suffix}`, `Immediate Retest Area${suffix}`, `Wick-Return / Expiry Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Multi-Session Squeeze${suffix}`, `Broad Gold Breakout Boundary${suffix}`, `Volatility Re-Expansion${suffix}`];
      vm.requiredZones = [`Higher-Timeframe Compression Area${suffix}`, `Several-Candle Acceptance Area${suffix}`, `Broad Return-Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Upper / Middle / Lower Bollinger Bands${suffix}`, `Normalized Bandwidth${suffix}`, `Gold Body-Close Break${suffix}`];
      vm.requiredZones = [`Squeeze Sequence Area${suffix}`, `Expansion Observation Area${suffix}`, `False Break Back Inside${suffix}`];
    }
  } else if (name.includes("atr expansion breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRExpansionBreakoutChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Gold Compression Box${suffix}`, `Session-Relative ATR Baseline${suffix}`, `Immediate Outside Body Close${suffix}`];
      vm.requiredZones = [`Compact ATR Expansion Area${suffix}`, `Next-Candle Hold Area${suffix}`, `Fast Return-Inside / Expiry Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Gold Compression Structure${suffix}`, `Higher-Timeframe ATR Baseline${suffix}`, `Completed Swing Breakout Close${suffix}`];
      vm.requiredZones = [`Multi-Session ATR Expansion Area${suffix}`, `Patient Acceptance Area${suffix}`, `Broad Return-Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Pre-Marked Gold Structure${suffix}`, `ATR Versus Baseline${suffix}`, `Body-Close Breakout${suffix}`];
      vm.requiredZones = [`Compression Baseline Area${suffix}`, `ATR Expansion Area${suffix}`, `News Spike / Return-Inside Trap${suffix}`];
    }
  } else if (name.includes("fx fair value")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "PPPFairValueChart";
    vm.requiredLabels = [`Consistent Price Baskets${suffix}`, `PPP Fair-Value Path${suffix}`, `Observed Exchange Rate${suffix}`];
    vm.requiredZones = [`Valuation Gap Area${suffix}`, `Slow Convergence Observation Area${suffix}`, `Capital-Flow Divergence Trap${suffix}`];
  } else if (name.includes("open interest expansion")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OpenInterestExpansionChart";
    vm.requiredLabels = [`Price Direction${suffix}`, `Open Interest Expansion${suffix}`, `Spot-Perpetual Agreement${suffix}`];
    vm.requiredZones = [`Healthy Participation Area${suffix}`, `Leveraged Crowding Area${suffix}`, `OI Rollover Invalidation${suffix}`];
  } else if (name.includes("political event trading")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "PoliticalEventScenarioChart";
    vm.requiredLabels = [`Scenario Tree And Polling Range${suffix}`, `Result Versus Expectation${suffix}`, `First Stable Forex Close${suffix}`];
    vm.requiredZones = [`Pre-Event Positioning Area${suffix}`, `Spread-Freeze Observation Area${suffix}`, `Headline Whipsaw Trap${suffix}`];
  } else if (name.includes("alligator and fractals") && assetClass === "GOLD") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "AlligatorFractalChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Jaw-Teeth-Lips Order${suffix}`, `Fresh Compact Fractal${suffix}`, `Immediate Gold Breakout Close${suffix}`];
      vm.requiredZones = [`Fast Mouth-Opening Area${suffix}`, `Immediate Fractal Retest${suffix}`, `Rapid Line-Tangle Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Jaw-Teeth-Lips Separation${suffix}`, `Completed Swing Fractal${suffix}`, `Patient Higher-Timeframe Close${suffix}`];
      vm.requiredZones = [`Broad Trend Expansion Area${suffix}`, `Multi-Candle Fractal Retest${suffix}`, `Line-Compression Invalidation${suffix}`];
    } else {
      vm.requiredLabels = [`Alligator Jaw / Teeth / Lips${suffix}`, `Confirmed Five-Candle Fractal${suffix}`, `Fractal Breakout Close${suffix}`];
      vm.requiredZones = [`Sleeping Alligator Area${suffix}`, `Opening-Mouth Trend Area${suffix}`, `Tangled-Lines Failure Area${suffix}`];
    }
  } else if (name.includes("open interest divergence")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "OpenInterestDivergenceChart";
    vm.requiredLabels = [`Price Direction${suffix}`, `Opposing Open Interest Path${suffix}`, `Spot-Perpetual Context${suffix}`];
    vm.requiredZones = [`Short-Covering / Long-Liquidation Area${suffix}`, `Unsupported Extension Area${suffix}`, `Divergence Resolution Trap${suffix}`];
  } else if (name.includes("seasonal patterns")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "SeasonalPatternAuditChart";
    vm.requiredLabels = [`Fixed Calendar Window${suffix}`, `Multi-Year Outcome Distribution${suffix}`, `Current Macro Filter${suffix}`];
    vm.requiredZones = [`Historical Tendency Area${suffix}`, `Out-of-Sample Test Area${suffix}`, `Broken-Seasonality Trap${suffix}`];
  } else if (name.includes("liquidation cluster")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationHeatmapChart";
    vm.requiredLabels = [`Estimated Long-Liquidation Bands${suffix}`, `Estimated Short-Liquidation Bands${suffix}`, `Current Price And Cluster Distance${suffix}`];
    vm.requiredZones = [`Cluster Attraction Area${suffix}`, `Rejection / Absorption Area${suffix}`, `Cascade-Through Trap${suffix}`];
  } else if (name.includes("terms of trade spread convergence")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "TermsOfTradeConvergenceChart";
    vm.requiredLabels = [`Economy A Terms-of-Trade Index${suffix}`, `Economy B Terms-of-Trade Index${suffix}`, `Normalized Relative Spread${suffix}`];
    vm.requiredZones = [`Historical Deviation Band${suffix}`, `Macro Convergence Area${suffix}`, `Revision Or Regime-Shift Trap${suffix}`];
  } else if (name.includes("liquidation cascade fade")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "LiquidationCascadeChart";
    vm.requiredLabels = [`Forced Liquidation Displacement${suffix}`, `Open Interest Collapse${suffix}`, `Spot Reclaim And Stabilization${suffix}`];
    vm.requiredZones = [`Cascade Exhaustion Area${suffix}`, `Depth-Recovery Observation Area${suffix}`, `Continuation-Lower Trap${suffix}`];
  } else if (name.includes("safe-haven demand")) {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "SafeHavenFlowChart";
    vm.requiredLabels = [`Equity / Volatility Risk Context${suffix}`, `JPY / CHF / USD Relative Haven Flow${suffix}`, `Forex Pair Confirmation${suffix}`];
    vm.requiredZones = [`Broad Risk-Off Area${suffix}`, `Haven Divergence Area${suffix}`, `Risk-Reversal Unwind Trap${suffix}`];
  } else if (name.includes("adx + dmi") && assetClass === "GOLD") {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "ADXStrengthChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m +DI / -DI Direction${suffix}`, `Fast ADX Slope${suffix}`, `Compact Gold Structure Break${suffix}`];
      vm.requiredZones = [`Quick Strength Expansion${suffix}`, `Immediate Pullback Area${suffix}`, `Crossover-Churn Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H +DI / -DI Direction${suffix}`, `Sustained ADX Rise${suffix}`, `Broad Gold Swing Structure${suffix}`];
      vm.requiredZones = [`Mature Trend Area${suffix}`, `Patient Swing Pullback${suffix}`, `Late-Trend Exhaustion Trap${suffix}`];
    } else {
      vm.requiredLabels = [`+DI / -DI Direction${suffix}`, `ADX Strength And Slope${suffix}`, `Gold Price-Structure Agreement${suffix}`];
      vm.requiredZones = [`Strength-Building Area${suffix}`, `Direction-Confirmation Area${suffix}`, `Low-ADX Chop Trap${suffix}`];
    }
  } else if (name.includes("social sentiment index")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "SocialSentimentAuditChart";
    vm.requiredLabels = [`Filtered Source Basket${suffix}`, `Normalized Polarity And Breadth${suffix}`, `Price / Volume Context${suffix}`];
    vm.requiredZones = [`Sentiment Extreme Area${suffix}`, `Normalization Observation Area${suffix}`, `Bot / Manipulation Trap${suffix}`];
  } else if (name.includes("risk-on carry basket")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "RiskOnCarryBasketChart";
    vm.requiredLabels = [`Expected Carry By Pair${suffix}`, `Equal-Risk Basket Weights${suffix}`, `Cross-Pair Correlation${suffix}`];
    vm.requiredZones = [`Risk-On Confirmation Area${suffix}`, `Concentration Audit Area${suffix}`, `Risk-Off Basket Unwind Trap${suffix}`];
  } else if (name.includes("twitter influencer")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "InfluencerAuditChart";
    vm.requiredLabels = [`Verified Account And Disclosure Check${suffix}`, `Original Post / Repost Timeline${suffix}`, `Price / Volume Before And After${suffix}`];
    vm.requiredZones = [`Organic Attention Area${suffix}`, `Delayed Follower Reaction Area${suffix}`, `Promotion / Deletion Trap${suffix}`];
  } else if (name.includes("fear & greed")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "FearGreedCycleChart";
    vm.requiredLabels = [`Composite Fear / Greed Reading${suffix}`, `Extreme Persistence${suffix}`, `Price And Volatility Context${suffix}`];
    vm.requiredZones = [`Extreme Crowding Area${suffix}`, `Normalization Observation Area${suffix}`, `Trend-Persistence Trap${suffix}`];
  } else if (name.includes("news trading on economic releases")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsBreakoutChart";
    vm.requiredLabels = [`Consensus / Actual / Revision${suffix}`, `First Stable Forex Close${suffix}`, `Spread And Pip Distance Check${suffix}`];
    vm.requiredZones = [`Pre-Release Range${suffix}`, `Post-Release Stabilization Area${suffix}`, `Whipsaw And Spread-Widening Trap${suffix}`];
  } else if (name.includes("flag and pennant") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "FlagPennantChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Gold Flagpole${suffix}`, `Compact Flag/Pennant Boundaries${suffix}`, `Immediate Breakout Close${suffix}`];
      vm.requiredZones = [`Short-Timeframe Contraction${suffix}`, `Fast Retest Area${suffix}`, `Rapid Wick Return Inside Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Gold Flagpole${suffix}`, `Broad Controlled Pause${suffix}`, `Completed Higher-Timeframe Close${suffix}`];
      vm.requiredZones = [`Swing Compression Structure${suffix}`, `Patient Multi-Candle Retest${suffix}`, `Sustained Return Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Gold Flagpole Impulse${suffix}`, `Flag Or Pennant Boundaries${suffix}`, `Point/Dollar Breakout Close${suffix}`];
      vm.requiredZones = [`Controlled Compression Area${suffix}`, `Continuation And Retest Area${suffix}`, `Failed Break Back Inside Pattern${suffix}`];
    }
  } else if (name.includes("on-chain treasury")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "TreasuryFlowAuditChart";
    vm.requiredLabels = [`Labeled Treasury Wallet${suffix}`, `Asset Composition And Obligations${suffix}`, `Destination / Exchange Flow Check${suffix}`];
    vm.requiredZones = [`Treasury Inflow Area${suffix}`, `Authorized Outflow Area${suffix}`, `Unlabeled Transfer Or Stale-Data Trap${suffix}`];
  } else if (name.includes("central bank divergence")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "CentralBankDivergenceChart";
    vm.requiredLabels = [`Central Bank A Policy Path${suffix}`, `Central Bank B Policy Path${suffix}`, `Market-Implied Repricing Gap${suffix}`];
    vm.requiredZones = [`Policy Divergence Window${suffix}`, `Pair-Structure Agreement Area${suffix}`, `Policy Convergence Trap${suffix}`];
  } else if (name.includes("narrative sentiment index")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "SentimentNarrativeChart";
    vm.requiredLabels = [`Normalized Narrative Score${suffix}`, `Source Breadth / Bot Filter${suffix}`, `Price And Participation Context${suffix}`];
    vm.requiredZones = [`Building Narrative Area${suffix}`, `Extreme And Cooling Area${suffix}`, `Stale Or Manipulated Narrative Trap${suffix}`];
  } else if (name.includes("triangle breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "TriangleBreakoutChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Converging Boundaries${suffix}`, `Compact Apex / Early Close${suffix}`, `Immediate Gold Retest${suffix}`];
      vm.requiredZones = [`Short-Timeframe Compression${suffix}`, `Fast Breakout Area${suffix}`, `Apex Wick And Return Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Converging Swing Boundaries${suffix}`, `Completed Higher-Timeframe Breakout${suffix}`, `Wider Point/Dollar Distance${suffix}`];
      vm.requiredZones = [`Broad Triangle Compression${suffix}`, `Patient Multi-Candle Retest${suffix}`, `Sustained Acceptance Back Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Upper/Lower Triangle Boundaries${suffix}`, `Two Touches Per Side${suffix}`, `Gold Body Close Beyond Boundary${suffix}`];
      vm.requiredZones = [`Triangle Anatomy Area${suffix}`, `Breakout And Retest Area${suffix}`, `Late-Apex Or Failed-Break Trap${suffix}`];
    }
  } else if (name.includes("commodity currency correlation")) {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "CommodityCurrencyCorrelationChart";
    vm.requiredLabels = [`Named Commodity Return Path${suffix}`, `Related Currency Pair Path${suffix}`, `Rolling Correlation / Lead-Lag${suffix}`];
    vm.requiredZones = [`Intermarket Alignment Window${suffix}`, `Terms-of-Trade Context Area${suffix}`, `Decoupling Or False-Causation Trap${suffix}`];
  } else if (name.includes("regulatory event trading")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "RegulatoryEventChart";
    vm.requiredLabels = [`Primary Regulatory Source${suffix}`, `Scope / Jurisdiction / Effective Date${suffix}`, `First Stable Crypto Reaction${suffix}`];
    vm.requiredZones = [`Pre-Event Positioning Area${suffix}`, `Implementation Review Area${suffix}`, `Headline-Only Or Venue-Fragmentation Trap${suffix}`];
  } else if (name.includes("terms of trade") || name.includes("inflation differential") || name.includes("gdp growth differential") || name.includes("balance of payments")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "MacroFundamentalComparisonChart";
    const macroLabel = name.includes("terms of trade") ? "Export Price / Import Price Ratio" : name.includes("inflation") ? "Headline/Core Inflation Differential" : name.includes("gdp") ? "Comparable Real-GDP Growth Differential" : "Current / Capital Account Flow Balance";
    const macroTrap = name.includes("terms of trade") ? "Temporary Commodity Spike Or Data-Lag Trap" : name.includes("inflation") ? "Inflation-Only Or Policy-Reaction Trap" : name.includes("gdp") ? "Revision Or Nominal-vs-Real Trap" : "One-Off Financing Or Reserve-Draw Trap";
    vm.requiredLabels = [`${macroLabel}${suffix}`, `Economy A Versus Economy B${suffix}`, `Forex Pair Structure / Pip Check${suffix}`];
    vm.requiredZones = [`Macro Differential Window${suffix}`, `Price Agreement Area${suffix}`, `${macroTrap}${suffix}`];
  } else if (name.includes("funding rate arbitrage")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingArbitrageChart";
    vm.requiredLabels = [`Equalized Spot And Perpetual Legs${suffix}`, `Funding / Basis / Fee Ledger${suffix}`, `Liquidation Buffer And Venue Depth${suffix}`];
    vm.requiredZones = [`Hedged Exposure Area${suffix}`, `Rebalance Drift Area${suffix}`, `Basis Blowout Or Counterparty Trap${suffix}`];
  } else if (name.includes("funding rate mean reversion")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingMeanReversionChart";
    vm.requiredLabels = [`Persistent Funding Extreme${suffix}`, `Price Extension And Open Interest${suffix}`, `Funding Normalization Marker${suffix}`];
    vm.requiredZones = [`Crowded Extreme Area${suffix}`, `Normalization Observation Area${suffix}`, `Continued-Extreme Or Squeeze Trap${suffix}`];
  } else if (name.includes("funding rate momentum")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "FundingMomentumChart";
    vm.requiredLabels = [`Funding Slope And Persistence${suffix}`, `Price / OI Participation${suffix}`, `Spot-Perp Agreement Check${suffix}`];
    vm.requiredZones = [`Funding Acceleration Area${suffix}`, `Momentum Saturation Area${suffix}`, `Funding Rollover Invalidation${suffix}`];
  } else if (name.includes("ichimoku cloud breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "IchimokuCloudChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Gold Cloud Boundary${suffix}`, `Short-Timeframe Tenkan/Kijun Agreement${suffix}`, `Immediate Breakout Close${suffix}`];
      vm.requiredZones = [`Thin/Thick Intraday Cloud${suffix}`, `Inside-Cloud Chop And Fast Retest Area${suffix}`, `Sharp Wick Back Through Cloud Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Gold Kumo Boundary${suffix}`, `Sustained Tenkan/Kijun Agreement${suffix}`, `Completed Higher-Timeframe Close${suffix}`];
      vm.requiredZones = [`Broad Forward-Cloud Context${suffix}`, `Patient Multi-Candle Retest${suffix}`, `Acceptance Back Inside Cloud Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Gold Kumo Boundary And Thickness${suffix}`, `Tenkan/Kijun Agreement${suffix}`, `Forward Cloud Context${suffix}`];
      vm.requiredZones = [`Completed Cloud Break Area${suffix}`, `Patient Kumo Retest Area${suffix}`, `Close Back Inside Cloud Trap${suffix}`];
    }
  } else if (name.includes("harmonic patterns")) {
    vm.visualCategory = "Pattern Geometry Visual";
    vm.componentType = "HarmonicPatternChart";
    vm.requiredLabels = [`X-A-B-C-D Swing Geometry${suffix}`, `Fibonacci Ratio Tolerance${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Potential Reversal Zone At D${suffix}`, `Close-Based Reaction Area${suffix}`, `Ratio Mismatch Or D Invalidation${suffix}`];
  } else if (name.includes("elliott wave")) {
    vm.visualCategory = "Wave Structure Visual";
    vm.componentType = "ElliottWaveChart";
    vm.requiredLabels = [`Five-Wave Impulse Count${suffix}`, `A-B-C Corrective Count${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Wave 2 And Wave 4 Rule Area${suffix}`, `Alternate Count Area${suffix}`, `Wave-Count Invalidation${suffix}`];
  } else if (name.includes("candlestick cluster confluence")) {
    vm.visualCategory = "Candlestick Confluence Visual";
    vm.componentType = "CandlestickClusterChart";
    vm.requiredLabels = [`First Completed Candle Clue${suffix}`, `Second Completed Candle Clue${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Horizontal Reaction Area${suffix}`, `Cluster Boundary And Close Agreement${suffix}`, `Opposing Close Invalidation${suffix}`];
    vm.entryOrActivationZone = "Completed candle cluster at one horizontal reaction area.";
    vm.confirmationMarker = "Second completed candle closes in agreement with the first clue.";
    vm.invalidationZone = "Opposing candle close beyond the horizontal reaction area.";
    vm.trapZone = "Unfinished candle or unrelated candle from a different chart location.";
    vm.warningLabel = "Use completed candles and simple horizontal structure only.";
    vm.assetSpecificVisualNotes = "Show Forex spread and pip distance without sessions, indicators, or advanced concepts.";
  } else if (name.includes("multi-timeframe candlestick")) {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MultiTimeframeCandlestickChart";
    vm.requiredLabels = [`Higher-Timeframe Location Candle${suffix}`, `Middle-Timeframe Structure Candle${suffix}`, `Lower-Timeframe Completed Trigger Candle${suffix}`];
    vm.requiredZones = [`Timeframe Agreement Area${suffix}`, `Forex Spread And Pip Check${suffix}`, `Timeframe Conflict Or Early-Candle Trap${suffix}`];
  } else if (name.includes("double top/bottom") && assetClass === "GOLD" && (name.includes("intraday") || name.includes("swing"))) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "DoubleTopBottomChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Twin Gold Extremes${suffix}`, `Compact Neckline Close${suffix}`, `Immediate Wick Reclaim Check${suffix}`];
      vm.requiredZones = [`Short-Timeframe Pattern Area${suffix}`, `Fast Neckline Retest${suffix}`, `Wick Break And Close-Back-Inside Trap${suffix}`];
    } else {
      vm.requiredLabels = [`1H/4H Twin Gold Extremes${suffix}`, `Completed Swing Neckline Close${suffix}`, `Wider Point/Dollar Distance Check${suffix}`];
      vm.requiredZones = [`Higher-Timeframe Pattern Area${suffix}`, `Patient Multi-Candle Retest${suffix}`, `Sustained Neckline Reclaim Trap${suffix}`];
    }
  } else if (name.includes("cup and handle") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "CupHandleChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [`5m/15m Rounded Recovery${suffix}`, `Shallow Intraday Handle${suffix}`, `Immediate Gold Close And Retest${suffix}`];
      vm.requiredZones = [`Compact Cup Area${suffix}`, `Fast Handle-Break Area${suffix}`, `Sharp Wick Back Into Handle Trap${suffix}`];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [`1H/4H Rounded Cup Base${suffix}`, `Patient Swing Handle${suffix}`, `Completed Higher-Timeframe Breakout${suffix}`];
      vm.requiredZones = [`Broad Cup Structure${suffix}`, `Multi-Candle Handle Retest${suffix}`, `Sustained Acceptance Below Handle Trap${suffix}`];
    } else {
      vm.requiredLabels = [`Two Comparable Gold Rim Tests${suffix}`, `Rounded Cup And Controlled Handle${suffix}`, `Point/Dollar Breakout Distance${suffix}`];
      vm.requiredZones = [`Cup Anatomy Area${suffix}`, `Handle Break And Retest Area${suffix}`, `V-Shaped Cup Or Failed Handle Trap${suffix}`];
    }
  } else if (name.includes("flag and pennant") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "FlagPennantChart";
    vm.requiredLabels = [`Gold Flagpole Impulse${suffix}`, `Flag Or Pennant Boundaries${suffix}`, `Point/Dollar Breakout Close${suffix}`];
    vm.requiredZones = [`Controlled Compression Area${suffix}`, `Continuation And Retest Area${suffix}`, `Failed Break Back Inside Pattern${suffix}`];
  } else if (name.includes("supply shock") || name.includes("burn event") || name.includes("vesting cliff")) {
    vm.visualCategory = "Crypto Supply Event Visual";
    vm.componentType = "TokenSupplyEventChart";
    const supplyLabel = name.includes("vesting") ? "Vesting Cliff And Recipient Schedule" : "Verified Burn And Net Supply Change";
    const supplyTrap = name.includes("vesting") ? "Expected Unlock Or Post-Event Absorption Trap" : "Already-Priced Burn Or Weak-Demand Trap";
    vm.requiredLabels = [`${supplyLabel}${suffix}`, `Circulating Supply And Exchange Flow${suffix}`, `Crypto Depth/Slippage Check${suffix}`];
    vm.requiredZones = [`Pre-Event Positioning Area${suffix}`, `Post-Event Absorption Area${suffix}`, `${supplyTrap}${suffix}`];
  } else if (name.includes("macro liquidity correlation")) {
    vm.visualCategory = "Intermarket Correlation Visual";
    vm.componentType = "MacroCorrelationChart";
    vm.requiredLabels = [`Broad Liquidity Proxy${suffix}`, `Crypto Structure Response${suffix}`, `Rolling Correlation And Lead/Lag${suffix}`];
    vm.requiredZones = [`Relationship Alignment Window${suffix}`, `DXY/Risk Context Area${suffix}`, `Decoupling Or False-Causation Trap${suffix}`];
  } else if (name === "carry trade" || name.includes("uncovered interest rate parity") || name.includes("interest rate differential momentum")) {
    vm.visualCategory = "Forex Macro Differential Visual";
    vm.componentType = "InterestRateDifferentialChart";
    const mechanism = name === "carry trade" ? "Policy Differential And Carry Cost" : name.includes("uncovered") ? "Expected Spot Change Versus Parity" : "Widening Differential And Pair Momentum";
    const trap = name === "carry trade" ? "Policy Reversal Or Spot Drawdown Trap" : name.includes("uncovered") ? "Parity Model Gap And Observation Error" : "Differential Reversal Or Late Momentum Trap";
    vm.requiredLabels = [`${mechanism}${suffix}`, `Currency Pair Structure${suffix}`, `Forex Spread And Pip Check${suffix}`];
    vm.requiredZones = [`Differential Observation Window${suffix}`, `Price Agreement Area${suffix}`, `${trap}${suffix}`];
  } else if (name.includes("correlation & beta")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "CorrelationBetaChart";
    vm.requiredLabels = [`Rolling Correlation${suffix}`, `Beta Slope Versus Benchmark${suffix}`, `Crypto Depth/Slippage Check${suffix}`];
    vm.requiredZones = [`Shared-Movement Area${suffix}`, `Duplicated Exposure Area${suffix}`, `Regime Shift Or Outlier Trap${suffix}`];
  } else if (name.includes("network adoption") || name.includes("developer activity")) {
    vm.visualCategory = "Crypto Fundamental Audit Visual";
    vm.componentType = "FundamentalGrowthAuditChart";
    const primary = name.includes("developer") ? "Active Contributors And Release Cadence" : "Retained Users And Activity Quality";
    const trap = name.includes("developer") ? "Forked/Mechanical Commit Count Trap" : "Incentive-Driven Activity Spike Trap";
    vm.requiredLabels = [`${primary}${suffix}`, `Price And Liquidity Context${suffix}`, `Data Freshness Check${suffix}`];
    vm.requiredZones = [`Sustained Growth Evidence${suffix}`, `Price-Fundamental Agreement Area${suffix}`, `${trap}${suffix}`];
  } else if (name.includes("governance proposal")) {
    vm.visualCategory = "Crypto Governance Event Visual";
    vm.componentType = "GovernanceEventChart";
    vm.requiredLabels = [`Proposal-To-Vote Timeline${suffix}`, `Quorum/Delegate Concentration${suffix}`, `Executable Economic Change${suffix}`];
    vm.requiredZones = [`Pre-Vote Context Area${suffix}`, `Implementation And Absorption Area${suffix}`, `Sentiment-Only Or Delayed-Execution Trap${suffix}`];
  } else if (name.includes("inside bar breakout") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "InsideBarBreakoutChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [
        `5m/15m Gold Mother-Bar Boundary${suffix}`,
        `Immediate Follow-Through Candle${suffix}`,
        `Compact Point/Dollar Distance Check${suffix}`,
      ];
      vm.requiredZones = [
        `Short-Timeframe Compression Box${suffix}`,
        `Fast Breakout And Retest Area${suffix}`,
        `Rapid Wick-And-Close-Back-Inside Trap${suffix}`,
      ];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [
        `1H/4H Gold Mother-Bar Boundary${suffix}`,
        `Completed Higher-Timeframe Breakout Close${suffix}`,
        `Wider Point/Dollar Invalidation Check${suffix}`,
      ];
      vm.requiredZones = [
        `Higher-Timeframe Compression Structure${suffix}`,
        `Patient Multi-Candle Expansion Area${suffix}`,
        `Sustained Acceptance Back Inside Trap${suffix}`,
      ];
    } else {
      vm.requiredLabels = [
        `Gold Mother-Bar Wick High/Low${suffix}`,
        `Fully Contained Inside Candle${suffix}`,
        `First Body Close Beyond Range${suffix}`,
      ];
      vm.requiredZones = [
        `Candle-Anatomy Compression Box${suffix}`,
        `Clean Close Acceptance Area${suffix}`,
        `Incorrect Containment Or Wick-Only Trap${suffix}`,
      ];
    }
  } else if (name.includes("open interest confirmation")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "DerivativesDashboard";
    vm.requiredLabels = [
      `Price Direction${suffix}`,
      `Open Interest Expansion/Contraction${suffix}`,
      `Crypto Venue Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `New Position Participation Area${suffix}`,
      `Crowded Leverage/Liquidation Area${suffix}`,
      `Price-OI Disagreement Trap${suffix}`,
    ];
  } else if (name.includes("rectangle (range) pattern")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Rectangle Upper Boundary${suffix}`,
      `Rectangle Lower Boundary${suffix}`,
      `Forex Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Rectangle Range Box${suffix}`,
      `Breakout And Retest Area${suffix}`,
      `Failed Break Back Inside Rectangle${suffix}`,
    ];
  } else if (name.includes("trendline bounce")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "TrendlineBounceChart";
    vm.requiredLabels = [
      `Trendline With Prior Touches${suffix}`,
      `Reaction Candle At Trendline${suffix}`,
      `Forex Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trendline Reaction Area${suffix}`,
      `Horizontal Structure Agreement Area${suffix}`,
      `Failed Trendline Hold${suffix}`,
    ];
  } else if (name.includes("bull/bear market condition adjustment")) {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MarketRegimeChart";
    vm.requiredLabels = [
      `Bull Regime Branch${suffix}`,
      `Bear Regime Branch${suffix}`,
      `Range/Transition Branch${suffix}`,
    ];
    vm.requiredZones = [
      `Setup Accepted Area${suffix}`,
      `Reduced/Stand-Aside Area${suffix}`,
      `Late Regime Classification Trap${suffix}`,
    ];
  } else if (name.includes("break of structure")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [
      `Protected Forex Swing${suffix}`,
      `BOS Body Close Beyond Swing${suffix}`,
      `Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Continuation Structure Area${suffix}`,
      `BOS Retest Area${suffix}`,
      `False Wick Break Trap${suffix}`,
    ];
  } else if (name.includes("narrative rotation") || name.includes("ecosystem growth") || name.includes("tokenomics supply-demand") || name.includes("token unlock event") || name.includes("halving cycle")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "CryptoCycleCatalystChart";
    const primaryLabel = name.includes("narrative rotation")
      ? "Sector Relative Strength Rotation"
      : name.includes("ecosystem growth")
        ? "Ecosystem Activity And Liquidity Trend"
        : name.includes("tokenomics")
          ? "Supply Emission And Demand-Use Balance"
          : name.includes("token unlock")
            ? "Unlock Calendar And Circulating Supply Impact"
            : "Halving Issuance-Rate Change";
    vm.requiredLabels = [
      `${primaryLabel}${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
      `Catalyst Freshness/Absorption Check${suffix}`,
    ];
    vm.requiredZones = [
      `Pre-Catalyst Context Area${suffix}`,
      `Post-Catalyst Review Area${suffix}`,
      `Crowding Or Stale Narrative Trap${suffix}`,
    ];
  } else if (name.includes("order block trading")) {
    vm.visualCategory = "Supply / Demand Zone Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [
      `Last Opposing Candle Before Displacement${suffix}`,
      `Order Block Mean Threshold (50%)${suffix}`,
      `Forex Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Order Block Boundary${suffix}`,
      `Mitigation Retest Area${suffix}`,
      `Invalidated Order Block Trap${suffix}`,
    ];
  } else if (name.includes("head and shoulders") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChartPatternBreakoutChart";
    if (name.includes("intraday")) {
      vm.requiredLabels = [
        `5m/15m Distinct Gold Swing Sequence${suffix}`,
        `Compact Neckline Break Close${suffix}`,
        `Immediate Wick-Reclaim Check${suffix}`,
      ];
      vm.requiredZones = [
        `Short-Timeframe Three-Swing Formation${suffix}`,
        `Fast Neckline Retest Area${suffix}`,
        `Noisy Zigzag Or Wick-Reclaim Trap${suffix}`,
      ];
    } else if (name.includes("swing")) {
      vm.requiredLabels = [
        `1H/4H Broad Shoulder Structure${suffix}`,
        `Completed Higher-Timeframe Neckline Close${suffix}`,
        `Right-Shoulder Invalidation Boundary${suffix}`,
      ];
      vm.requiredZones = [
        `Broad Multi-Candle Pattern Formation${suffix}`,
        `Patient Neckline Retest Area${suffix}`,
        `Sustained Acceptance Back Above Neckline${suffix}`,
      ];
    } else {
      vm.requiredLabels = [
        `Balanced Gold Left Shoulder/Head/Right Shoulder${suffix}`,
        `Neckline Through Reaction Lows${suffix}`,
        `Completed Right-Shoulder Check${suffix}`,
      ];
      vm.requiredZones = [
        `Pattern-Anatomy Formation Area${suffix}`,
        `Body-Close Neckline Acceptance Area${suffix}`,
        `Early Pattern-Naming Trap${suffix}`,
      ];
    }
  } else if (name.includes("liquidity sweep")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [
      `Prior Equal Highs/Lows Or Swing Boundary${suffix}`,
      `Sweep Wick And Close Back Inside${suffix}`,
      `Forex Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Boundary Liquidity Area${suffix}`,
      `Displacement Away From Sweep${suffix}`,
      `Failed Sweep Continuation Trap${suffix}`,
    ];
  } else if (name.includes("quasimodo")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [
      `Final Higher High/Lower Low${suffix}`,
      `Opposing Swing Break${suffix}`,
      `Quasimodo Shoulder Level${suffix}`,
    ];
    vm.requiredZones = [
      `Quasimodo Return Area${suffix}`,
      `Extreme Invalidation Area${suffix}`,
      `Malformed Pattern Trap${suffix}`,
    ];
  } else if (name.includes("double top") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChartPatternBreakoutChart";
    vm.requiredLabels = [
      `Gold Double Top/Bottom Swings${suffix}`,
      `Gold Neckline Break Close${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Repeated Gold Rejection Area${suffix}`,
      `Neckline Retest Area${suffix}`,
      `Failed Pattern Reclaim Trap${suffix}`,
    ];
  } else if (name.includes("twap execution") || name.includes("vwap execution") || name.includes("iceberg orders")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    const mainLabel = name.includes("twap")
      ? "TWAP Time Slice Schedule"
      : name.includes("vwap")
        ? "VWAP Volume Curve Participation"
        : "Iceberg Refill And Hidden Size Clue";
    vm.requiredLabels = [
      `${mainLabel}${suffix}`,
      `Crypto Venue Depth Check${suffix}`,
      `Spread Percentage And Slippage${suffix}`,
    ];
    vm.requiredZones = [
      `Execution Path Review Area${suffix}`,
      `Thin Depth Slippage Zone${suffix}`,
      `${name.includes("iceberg") ? "False Refill Trap" : "Schedule Exposure Trap"}${suffix}`,
    ];
  } else if (name.includes("multi-timeframe trend confluence")) {
    vm.visualCategory = "Multi-Timeframe Confluence Visual";
    vm.componentType = "MultiTimeframeConfluenceChart";
    vm.requiredLabels = [
      `Higher-Timeframe Trend Context${suffix}`,
      `Mid-Timeframe Structure Check${suffix}`,
      `Lower-Timeframe Trigger Clue${suffix}`,
    ];
    vm.requiredZones = [
      `Timeframe Alignment Area${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
      `Timeframe Conflict Trap${suffix}`,
    ];
  } else if (name.includes("volume confirmation on trend")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumePriceConfirmationChart";
    vm.requiredLabels = [
      `Crypto Trend Structure${suffix}`,
      `Relative Volume Expansion${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trend Participation Area${suffix}`,
      `False Volume Burst Trap${suffix}`,
      `Spread Percentage Warning Zone${suffix}`,
    ];
  } else if (name.includes("funding-adjusted breakout")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "DerivativesDashboard";
    vm.requiredLabels = [
      `Breakout Boundary And Close${suffix}`,
      `Perp Funding Rate Context${suffix}`,
      `Crypto Venue Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Funding-Adjusted Breakout Area${suffix}`,
      `Crowded Funding Trap${suffix}`,
      `Failed Break Back Inside Range${suffix}`,
    ];
  } else if (name.includes("engulfing pattern") && assetClass === "GOLD") {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "CandlestickPatternChart";
    vm.requiredLabels = [
      `${name.includes("intraday") ? "Intraday" : name.includes("swing") ? "Swing" : "Gold"} Engulfing Body${suffix}`,
      `Gold Support Or Resistance Context${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Gold Engulfing Reaction Area${suffix}`,
      `Follow-Up Close Check${suffix}`,
      `Failed Engulfing Trap${suffix}`,
    ];
  } else if (name.includes("pin bar reversal") && assetClass === "GOLD") {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "CandlestickPatternChart";
    vm.requiredLabels = [
      `${name.includes("intraday") ? "Intraday" : name.includes("swing") ? "Swing" : "Gold"} Pin Bar Rejection Wick${suffix}`,
      `Gold Support Or Resistance Context${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Gold Wick Rejection Area${suffix}`,
      `Follow-Up Close Check${suffix}`,
      `Failed Pin Bar Trap${suffix}`,
    ];
  } else if (name.includes("support/resistance bounce") && assetClass === "GOLD") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `${name.includes("swing") ? "Swing Gold" : name.includes("intraday") ? "Intraday Gold" : "Gold"} Support Level${suffix}`,
      `${name.includes("swing") ? "Swing Gold" : name.includes("intraday") ? "Intraday Gold" : "Gold"} Resistance Level${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Gold Rejection Wick Area${suffix}`,
      `Bounce Confirmation Area${suffix}`,
      `Failed Bounce Through Level${suffix}`,
    ];
  } else if (name.includes("triple top") || name.includes("triple bottom") || name.includes("cup and handle") || name.includes("ascending triangle pattern") || name.includes("descending triangle pattern") || name.includes("symmetrical triangle pattern") || name.includes("flag & pennant") || name.includes("flag and pennant") || name.includes("wedge patterns")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChartPatternBreakoutChart";
    const patternLabel = name.includes("triple")
      ? "Triple Top/Bottom Neckline"
      : name.includes("cup")
        ? "Cup Rim And Handle Pullback"
        : name.includes("flag")
          ? "Flag/Pennant Continuation Boundary"
          : name.includes("wedge")
            ? "Rising/Falling Wedge Boundary"
            : "Triangle Compression Boundary";
    const breakCloseLabel = assetClass === "FOREX"
      ? "Forex Pattern Break Close"
      : assetClass === "GOLD"
        ? "Gold Pattern Break Close"
        : "Crypto Pattern Break Close";
    const distanceCheckLabel = assetClass === "FOREX"
      ? "Spread And Pip Check"
      : assetClass === "GOLD"
        ? "Point/Dollar Distance Check"
        : "Liquidity Depth Check";
    vm.requiredLabels = [
      `${patternLabel}${suffix}`,
      `${breakCloseLabel}${suffix}`,
      `${distanceCheckLabel}${suffix}`,
    ];
    vm.requiredZones = [
      `Pattern Compression Area${suffix}`,
      `Breakout Or Breakdown Retest Area${suffix}`,
      `Failed Pattern Break Back Inside${suffix}`,
    ];
  } else if (name.includes("volatility targeting strategy") || name.includes("fixed fraction") || name.includes("kelly criterion") || name.includes("volatility adjusted position sizing") || name.includes("risk-reward ratio")) {
    vm.visualCategory = "Risk / Position Sizing Visual";
    vm.componentType = "SizingCalculator";
    const sizingLabel = name.includes("kelly")
      ? "Fractional Kelly Size Cap"
      : name.includes("fixed fraction")
        ? "Fixed Fraction Risk Band"
        : name.includes("risk-reward")
          ? "Reward-To-Risk Planning Band"
          : name.includes("volatility adjusted")
            ? "Volatility Adjusted Size Cutback"
            : "Target Volatility Risk Band";
    vm.requiredLabels = [
      `${sizingLabel}${suffix}`,
      `Crypto Invalidation Distance${suffix}`,
      `Liquidity Depth And Slippage Check${suffix}`,
    ];
    vm.requiredZones = [
      `Risk Budget Area${suffix}`,
      `Size Adjustment Zone${suffix}`,
      `Overexposure Warning Zone${suffix}`,
    ];
  } else if (name.includes("stop-loss placement under support")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Crypto Support Shelf${suffix}`,
      `Protective Invalidation Buffer${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Support Reaction Area${suffix}`,
      `Wick Sweep Trap Under Support${suffix}`,
      `Invalidation Acceptance Zone${suffix}`,
    ];
  } else if (name.includes("trailing stop strategy")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [
      `Trailing Invalidation Path${suffix}`,
      `Volatility Buffer${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trail Update Zone${suffix}`,
      `Premature Tightening Trap${suffix}`,
      `Volatility Expansion Warning${suffix}`,
    ];
  } else if (name.includes("funding + basis + oi composite") || name.includes("options skew") || name.includes("insurance via options") || name.includes("leverage control")) {
    vm.visualCategory = "Crypto Derivatives Visual";
    vm.componentType = "DerivativesDashboard";
    const derivativeLabel = name.includes("options") || name.includes("insurance")
      ? "Options Skew And Premium Check"
      : name.includes("leverage")
        ? "Liquidation Buffer Check"
        : "Funding Basis OI Composite";
    vm.requiredLabels = [
      `${derivativeLabel}${suffix}`,
      `Crypto Venue Depth Check${suffix}`,
      `Spread Percentage And Slippage${suffix}`,
    ];
    vm.requiredZones = [
      `Crowded Derivatives Zone${suffix}`,
      `Liquidation Or Premium Drag Area${suffix}`,
      `Disagreement Trap${suffix}`,
    ];
  } else if (name.includes("portfolio diversification") || name.includes("stablecoin hedging") || name.includes("dollar-cost averaging") || name.includes("laddered entry")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PortfolioAllocationChart";
    const allocationLabel = name.includes("stablecoin")
      ? "Stablecoin Reserve Band"
      : name.includes("dollar-cost")
        ? "DCA Tranche Schedule"
        : name.includes("laddered")
          ? "Laddered Tranche Map"
          : "Crypto Sector Allocation Map";
    vm.requiredLabels = [
      `${allocationLabel}${suffix}`,
      `Correlation Or Concentration Check${suffix}`,
      `Liquidity Depth And Slippage Check${suffix}`,
    ];
    vm.requiredZones = [
      `Allocation Band${suffix}`,
      `Reserve Or Hedge Area${suffix}`,
      `Concentration Trap${suffix}`,
    ];
  } else if (name.includes("on-chain + technical") || name.includes("funding + social sentiment") || name.includes("multi-factor quant") || name.includes("technical + fundamental") || name.includes("on-chain + sentiment")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    const auditLabel = name.includes("on-chain")
      ? "On-Chain Context Check"
      : name.includes("funding + social")
        ? "Funding And Crowd Sentiment Check"
        : name.includes("technical + fundamental")
          ? "Technical Fundamental Agreement"
          : "Weighted Factor Score";
    vm.requiredLabels = [
      `${auditLabel}${suffix}`,
      `Validation Or Disagreement Check${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Input Review Window${suffix}`,
      `Confluence Score Area${suffix}`,
      `Crowding Or Stale Data Trap${suffix}`,
    ];
  } else if (name.includes("ml regression") || name.includes("reinforcement learning") || name.includes("sentiment-driven ml") || name.includes("autoencoder") || name.includes("genetic algorithm")) {
    vm.visualCategory = "Psychology / Process Audit Visual";
    vm.componentType = "ModelAuditChart";
    const modelLabel = name.includes("reinforcement learning")
      ? "Policy Output Audit"
      : name.includes("sentiment")
        ? "Sentiment Input Quality"
        : name.includes("autoencoder")
          ? "Anomaly Error Threshold"
          : name.includes("genetic")
            ? "Optimization Overfit Check"
            : "Prediction Error Band";
    vm.requiredLabels = [
      `${modelLabel}${suffix}`,
      `Validation Split Check${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Training Data Window${suffix}`,
      `Model Output Review Area${suffix}`,
      `Overfitting Or Regime-Shift Trap${suffix}`,
    ];
  } else if (name.includes("high-frequency market making") || name.includes("latency arbitrage")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "ExecutionMicrostructureChart";
    vm.requiredLabels = [
      `${name.includes("latency") ? "Exchange Price Discrepancy" : "Bid Ask Queue Map"}${suffix}`,
      `Crypto Venue Depth Check${suffix}`,
      `${name.includes("latency") ? "Latency And Fee Drag" : "Inventory Imbalance Warning"}${suffix}`,
    ];
    vm.requiredZones = [
      `${name.includes("latency") ? "Stale Quote Risk Area" : "Thin Book Spread Area"}${suffix}`,
      `Slippage Warning Zone${suffix}`,
      `${name.includes("latency") ? "Execution Delay Trap" : "Toxic Flow Trap"}${suffix}`,
    ];
  } else if (name.includes("trendline break and retest")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "TrendlineBreakRetestChart";
    vm.requiredLabels = [
      `Gold Trendline Touches${suffix}`,
      `Break Close Beyond Trendline${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trendline Retest Area${suffix}`,
      `Wick Fakeout Around Trendline${suffix}`,
      `Failed Acceptance Back Through Trendline${suffix}`,
    ];
  } else if (name.includes("pin bar") || name.includes("outside bar") || name.includes("doji")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "CandlestickPatternChart";
    const candleLabel = name.includes("doji")
      ? "Doji Indecision Candle"
      : name.includes("outside bar")
        ? "Outside Bar Engulfing Range"
        : "Pin Bar Rejection Wick";
    const contextLabel = assetClass === "FOREX"
      ? "Forex Support Or Resistance Context"
      : assetClass === "GOLD"
        ? "Gold Support Or Resistance Context"
        : "Crypto Support Or Resistance Context";
    const distanceLabel = assetClass === "FOREX"
      ? "Spread And Pip Check"
      : assetClass === "GOLD"
        ? "Point/Dollar Distance Check"
        : "Liquidity Depth Check";
    vm.requiredLabels = [
      `${candleLabel}${suffix}`,
      `${contextLabel}${suffix}`,
      `${distanceLabel}${suffix}`,
    ];
    vm.requiredZones = [
      `Candle Reaction Area${suffix}`,
      `Confirmation Close Area${suffix}`,
      `Failed Candle Trap${suffix}`,
    ];
  } else if (name.includes("support/resistance bounce") && assetClass === "GOLD") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Gold Support Level${suffix}`,
      `Gold Resistance Level${suffix}`,
      `Point/Dollar Distance Check${suffix}`,
    ];
    vm.requiredZones = [
      `Gold Rejection Wick Area${suffix}`,
      `Bounce Confirmation Area${suffix}`,
      `Failed Bounce Through Level${suffix}`,
    ];
  } else if (name.includes("inside bar") || name.includes("head & shoulders") || name.includes("head and shoulders") || name.includes("double top") || name.includes("double bottom") || name.includes("flag and pennant") || name.includes("triangle breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChartPatternBreakoutChart";
    const patternLabel = name.includes("inside bar")
      ? "Mother Bar Compression"
      : name.includes("head & shoulders") || name.includes("head and shoulders")
        ? "Neckline Pattern Boundary"
        : name.includes("double top") || name.includes("double bottom")
          ? "Double Top/Bottom Neckline"
          : name.includes("flag and pennant")
            ? "Flag/Pennant Consolidation"
            : "Triangle Compression Boundary";
    const assetCheck = assetClass === "FOREX"
      ? "Spread And Pip Check"
      : assetClass === "GOLD"
        ? "Point/Dollar Distance Check"
        : "Crypto Liquidity Depth Check";
    vm.requiredLabels = [
      `${patternLabel}${suffix}`,
      `Pattern Breakout Close${suffix}`,
      `${assetCheck}${suffix}`,
    ];
    vm.requiredZones = [
      `Pattern Compression Area${suffix}`,
      `Breakout Or Breakdown Retest Area${suffix}`,
      `Failed Pattern Break Back Inside${suffix}`,
    ];
  } else if (name.includes("momentum breakout with volume")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumeBreakoutChart";
    vm.requiredLabels = [
      `Forex Breakout Level${suffix}`,
      `Momentum Push With Tick-Volume Expansion${suffix}`,
      `Retest Quality Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Volume-Backed Breakout Area${suffix}`,
      `False Volume Breakout Trap${suffix}`,
      `Return Back Through Level${suffix}`,
    ];
  } else if (name.includes("momentum with moving average")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [
      `Momentum Push${suffix}`,
      `Moving Average Direction Check${suffix}`,
      `Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trend-Side Pullback Area${suffix}`,
      `Momentum And Average Alignment Area${suffix}`,
      `Chop Across Moving Average Trap${suffix}`,
    ];
  } else if (name.includes("momentum factor") || name.includes("absolute momentum") || name.includes("momentum divergence") || (name.includes("commodity channel index") && name.includes("momentum"))) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MomentumStrengthChart";
    const mainLabel = name.includes("commodity channel index")
      ? "CCI Momentum Reading"
      : name.includes("divergence")
        ? "Price And Momentum Disagreement"
        : "Momentum Baseline Reading";
    vm.requiredLabels = [
      `${mainLabel}${suffix}`,
      `Forex Momentum Baseline${suffix}`,
      `Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `Trend-Side Momentum Area${suffix}`,
      `Failed Momentum Rollover Trap${suffix}`,
      `Chop Around Momentum Baseline${suffix}`,
    ];
  } else if (name.includes("time-stop breakout") || name.includes("opening range breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "OpeningRangeTimeStopChart";
    vm.requiredLabels = [
      `Opening Range High${suffix}`,
      `Opening Range Low${suffix}`,
      `Time-Stop Expiry Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Opening Range Box${suffix}`,
      `Breakout Acceptance Window${suffix}`,
      `Expired Breakout Trap${suffix}`,
    ];
  } else if (name.includes("support/resistance scalping")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Fast Crypto Support Tap${suffix}`,
      `Fast Crypto Resistance Tap${suffix}`,
      `Spread Percentage Check${suffix}`,
    ];
    vm.requiredZones = [
      `Scalping Reaction Area${suffix}`,
      `Thin Liquidity Trap${suffix}`,
      `Immediate Invalidation Through Level${suffix}`,
    ];
  } else if (name.includes("support and resistance bounce") || name.includes("support/resistance bounce")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Crypto Support Level${suffix}`,
      `Crypto Resistance Level${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Boundary Bounce Reaction Area${suffix}`,
      `Return Toward Range Center${suffix}`,
      `Failed Bounce Break Through Level${suffix}`,
    ];
  } else if (name.includes("bullish engulfing") || name.includes("bearish engulfing") || name.includes("pin bar") || name.includes("hammer pattern") || name.includes("shooting star") || name.includes("inverted hammer")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "CandlestickPatternChart";
    vm.requiredLabels = [
      `Crypto Rejection Wick Or Engulfing Body${suffix}`,
      `Pattern Confirmation Close${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Candlestick Reversal Area${suffix}`,
      `Failed Pattern Trap${suffix}`,
      `Invalidation Beyond Pattern Extreme${suffix}`,
    ];
  } else if (name.includes("regression channel reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ZScoreMeanReversionChart";
    vm.requiredLabels = [
      `Regression Channel Upper Deviation${suffix}`,
      `Regression Midline Baseline${suffix}`,
      `Forex Reaction Close${suffix}`,
    ];
    vm.requiredZones = [
      `Channel Deviation Stretch Zone${suffix}`,
      `Return Toward Regression Midline${suffix}`,
      `Channel Break Failure Trap${suffix}`,
    ];
  } else if (name.includes("volatility mean reversion") || name.includes("atr regression")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [
      `ATR Stretch Reading${suffix}`,
      `Regression Midline Baseline${suffix}`,
      `Forex Spread And Pip Check${suffix}`,
    ];
    vm.requiredZones = [
      `ATR Regression Stretch Area${suffix}`,
      `Return Toward Channel Center${suffix}`,
      `Failed Reversion Expansion Trap${suffix}`,
    ];
  } else if (name.includes("vwap reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "VWAPReversionChart";
    const marketLabel = assetClass === "FOREX" ? "Forex" : assetClass === "GOLD" ? "Gold" : "Crypto";
    const firstLabel = assetClass === "FOREX"
      ? "Forex VWAP Fair-Value Line"
      : `${name.includes("intraday") ? "Intraday" : name.includes("swing") ? "Swing" : marketLabel} VWAP Fair-Value Line`;
    const secondLabel = assetClass === "FOREX" ? "Forex Pair Stretch Away From VWAP" : `${marketLabel} Stretch Away From VWAP`;
    const thirdLabel = assetClass === "FOREX" ? "Forex Close Back Toward VWAP" : `${marketLabel} Wick Rejection Marker`;
    const firstZone = assetClass === "FOREX"
      ? "Forex VWAP Stretch Zone"
      : `${name.includes("intraday") ? "5m/15m" : name.includes("swing") ? "1H/4H" : marketLabel} VWAP Stretch Zone`;
    vm.requiredLabels = [
      `${firstLabel}${suffix}`,
      `${secondLabel}${suffix}`,
      `${thirdLabel}${suffix}`,
    ];
    vm.requiredZones = [
      `${firstZone}${suffix}`,
      `Return Path Toward VWAP${suffix}`,
      `Failed VWAP Reversion Trap${suffix}`,
    ];
  } else if (name.includes("stochastic oscillator")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "StochasticOscillatorChart";
    const marketLabel = assetClass === "FOREX" ? "Forex" : "Crypto";
    vm.requiredLabels = [
      `Stochastic Upper Band${suffix}`,
      `Stochastic Lower Band${suffix}`,
      `${assetClass === "FOREX" ? "Forex Spread And Pip Check" : "Crypto Liquidity Depth Check"}${suffix}`,
    ];
    vm.requiredZones = [
      `${marketLabel} Range Extreme Area${suffix}`,
      `Oscillator Reaction Path${suffix}`,
      `Failed Range Reversion Trap${suffix}`,
    ];
  } else if (name.includes("oscillator range trading")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "OscillatorRangeChart";
    vm.requiredLabels = [
      `Forex Range High${suffix}`,
      `Forex Range Low${suffix}`,
      `Oscillator Extreme Reading${suffix}`,
    ];
    vm.requiredZones = [
      `Range Boundary Reaction Area${suffix}`,
      `Mid-Range Mean Path${suffix}`,
      `False Oscillator Extreme Trap${suffix}`,
    ];
  } else if (name.includes("commodity channel index") || name.includes("cci")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "CCIReversionChart";
    vm.requiredLabels = [
      `CCI Extreme Reading${suffix}`,
      `CCI Zero Baseline${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `CCI Stretch Zone${suffix}`,
      `Mean Reversion Toward Baseline${suffix}`,
      `Failed CCI Reversion Trap${suffix}`,
    ];
  } else if (name.includes("bollinger band mean reversion") && assetClass === "FOREX") {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Forex Outer Bollinger Band Stretch${suffix}`,
      `Middle Band Mean Reference${suffix}`,
      `Forex Close Back Inside Bands${suffix}`,
    ];
    vm.requiredZones = [
      `Forex Range Exhaustion Area${suffix}`,
      `Pip-Based Return Path To Middle Band${suffix}`,
      `Failed Reversion Continuation Trap${suffix}`,
    ];
  } else if (name.includes("atr channel trend")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRChannelTrendChart";
    vm.requiredLabels = [
      `ATR Channel Midline${suffix}`,
      `Crypto Trend-Side Channel Respect${suffix}`,
      `Liquidity Depth Warning${suffix}`,
    ];
    vm.requiredZones = [
      `ATR Channel Trend Path${suffix}`,
      `Volatility Pullback Area${suffix}`,
      `Chop Across Channel Trap${suffix}`,
    ];
  } else if (name.includes("moving average mean reversion")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [
      `Moving Average Mean Line${suffix}`,
      `Forex Stretch Away From Average${suffix}`,
      `Reaction Back Toward Average${suffix}`,
    ];
    vm.requiredZones = [
      `MA Stretch Exhaustion Area${suffix}`,
      `Mean Return Path${suffix}`,
      `Trend Continuation Failure Case${suffix}`,
    ];
  } else if (name.includes("volume-price confirmation")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumePriceConfirmationChart";
    vm.requiredLabels = [
      `Crypto Price Structure Close${suffix}`,
      `Relative Volume Expansion${suffix}`,
      `Exchange Participation Check${suffix}`,
    ];
    vm.requiredZones = [
      `Volume-Price Agreement Area${suffix}`,
      `False Volume Spike Trap${suffix}`,
      `Thin Liquidity Warning Zone${suffix}`,
    ];
  } else if (name.includes("on-balance volume") || name.includes("obv")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "OBVDivergenceChart";
    vm.requiredLabels = [
      `OBV Line Direction${suffix}`,
      `Price Direction Comparison${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `OBV Divergence Area${suffix}`,
      `Confirmation Close Zone${suffix}`,
      `False Divergence Trap${suffix}`,
    ];
  } else if (name.includes("pairs trading") || name.includes("cointegration")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [
      `Forex Pair A Relative Path${suffix}`,
      `Forex Pair B Relative Path${suffix}`,
      `Cointegration Spread Divergence${suffix}`,
    ];
    vm.requiredZones = [
      `Normal Forex Pair Spread Band${suffix}`,
      `Cointegration Divergence Area${suffix}`,
      `Correlation Break Trap${suffix}`,
    ];
  } else if (name.includes("vwap trend reversal")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "VWAPTrendReversalChart";
    vm.requiredLabels = [
      `VWAP Direction Flip${suffix}`,
      `Crypto Acceptance Across VWAP${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `VWAP Reversal Decision Area${suffix}`,
      `Retest Of VWAP Zone${suffix}`,
      `Failed Reversal Trap${suffix}`,
    ];
  } else if (name.includes("bollinger band squeeze reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Forex Bollinger Squeeze Width${suffix}`,
      `Failed Outer Band Break${suffix}`,
      `Middle Band Reversion Path${suffix}`,
    ];
    vm.requiredZones = [
      `Compressed Band Squeeze Box${suffix}`,
      `Failed Break Back Inside Bands${suffix}`,
      `Forex Mean Reversion Return Area${suffix}`,
    ];
  } else if (name.includes("z-score") || name.includes("z score")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "ZScoreMeanReversionChart";
    const marketLabel = assetClass === "FOREX" ? "Forex" : "Crypto";
    vm.requiredLabels = [
      `Z-Score Extreme Reading${suffix}`,
      `Mean Baseline${suffix}`,
      `${assetClass === "FOREX" ? "Forex Spread And Pip Check" : "Crypto Liquidity Depth Check"}${suffix}`,
    ];
    vm.requiredZones = [
      `${marketLabel} Statistical Stretch Zone${suffix}`,
      `Mean Reversion Path${suffix}`,
      `Failed Reversion Continuation Trap${suffix}`,
    ];
  } else if (name.includes("pair-wise mean reversion") || name.includes("statistical arbitrage")) {
    vm.visualCategory = "Portfolio / Allocation Visual";
    vm.componentType = "PairSpreadMeanReversionChart";
    vm.requiredLabels = [
      `Crypto Pair A Relative Path${suffix}`,
      `Crypto Pair B Relative Path${suffix}`,
      `Spread Divergence Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Normal Spread Band${suffix}`,
      `Pair Divergence Area${suffix}`,
      `Correlation Break Trap${suffix}`,
    ];
  } else if (name.includes("bollinger band mean reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `${name.includes("intraday") ? "Intraday" : name.includes("swing") ? "Swing" : "Gold"} Bollinger Outer Band Stretch${suffix}`,
      `Middle Band Mean Reference${suffix}`,
      `Gold Wick Rejection Marker${suffix}`,
    ];
    vm.requiredZones = [
      `${name.includes("intraday") ? "5m/15m" : name.includes("swing") ? "1H/4H" : "Gold"} Outer Band Exhaustion Area${suffix}`,
      `Mean Reversion Path To Middle Band${suffix}`,
      `Failed Reversion Continuation Trap${suffix}`,
    ];
  } else if (name.includes("false breakout") || name.includes("fakey")) {
    vm.visualCategory = "Liquidity Sweep / Trap Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Forex Support/Resistance Boundary${suffix}`,
      `False Breakout Wick Or Close${suffix}`,
      `Return Back Inside Range${suffix}`,
    ];
    vm.requiredZones = [
      `Breakout Trap Area${suffix}`,
      `Retest Failure Zone${suffix}`,
      `Invalidation Beyond Failed Break${suffix}`,
    ];
  } else if (name.includes("breakout with volume confirmation")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumeBreakoutChart";
    vm.requiredLabels = [
      `Forex Breakout Level${suffix}`,
      `Relative Tick-Volume Expansion${suffix}`,
      `Retest Confirmation Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Breakout Acceptance Area${suffix}`,
      `False Volume Spike Trap${suffix}`,
      `Return Back Through Level${suffix}`,
    ];
  } else if (name.includes("momentum strength strategy")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MomentumStrengthChart";
    vm.requiredLabels = [
      `Crypto Relative Strength Rank${suffix}`,
      `Momentum Continuation Path${suffix}`,
      `Liquidity Depth Warning${suffix}`,
    ];
    vm.requiredZones = [
      `Strong Relative Momentum Area${suffix}`,
      `Crowded Move Exhaustion Zone${suffix}`,
      `Rotation Risk Area${suffix}`,
    ];
  } else if (name.includes("volume-weighted momentum")) {
    vm.visualCategory = "Order Flow / Imbalance Visual";
    vm.componentType = "VolumeMomentumChart";
    vm.requiredLabels = [
      `Crypto Momentum Line${suffix}`,
      `Relative Volume Expansion${suffix}`,
      `Exchange Participation Check${suffix}`,
    ];
    vm.requiredZones = [
      `Volume-Backed Momentum Area${suffix}`,
      `Volume Exhaustion Trap${suffix}`,
      `Thin Liquidity Warning Zone${suffix}`,
    ];
  } else if (name.includes("breakout with momentum confirmation")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "MomentumBreakoutChart";
    vm.requiredLabels = [
      `Forex Breakout Level${suffix}`,
      `RSI / Momentum Confirmation${suffix}`,
      `Breakout Retest Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Momentum-Confirmed Breakout Area${suffix}`,
      `Momentum Divergence Trap${suffix}`,
      `Return Back Through Level${suffix}`,
    ];
  } else if (name.includes("rsi momentum")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "RSIMomentumChart";
    vm.requiredLabels = [
      `RSI Midline Strength Zone${suffix}`,
      `Crypto Price Continuation Path${suffix}`,
      `Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `RSI Momentum Acceptance Area${suffix}`,
      `Failed Momentum Rollover${suffix}`,
      `Chop Around RSI Midline${suffix}`,
    ];
  } else if (name.includes("volatility expansion breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [
      `Forex Compression Range${suffix}`,
      `ATR Expansion Breakout Close${suffix}`,
      `Retest After Expansion${suffix}`,
    ];
    vm.requiredZones = [
      `Low-Volatility Compression Box${suffix}`,
      `Volatility Expansion Breakout Area${suffix}`,
      `False Expansion Back Inside Range${suffix}`,
    ];
  } else if (name.includes("grid breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "GridBreakoutChart";
    vm.requiredLabels = [
      `Forex Grid Observation Levels${suffix}`,
      `Breakout Activation Band${suffix}`,
      `Stacked Exposure Warning${suffix}`,
    ];
    vm.requiredZones = [
      `Grid Planning Corridor${suffix}`,
      `Breakout Direction Area${suffix}`,
      `False Break Grid Trap${suffix}`,
    ];
  } else if (name.includes("price-rate-of-change") || name.includes("rate of change") || name.includes("roc")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "ROCMomentumChart";
    const marketLabel = assetClass === "FOREX" ? "Forex" : assetClass === "GOLD" ? "Gold" : "Crypto";
    vm.requiredLabels = [
      `ROC Momentum Line${suffix}`,
      `Zero Baseline${suffix}`,
      `${assetClass === "FOREX" ? "Forex Spread And Pip Check" : `${marketLabel} Point/Dollar Distance Check`}${suffix}`,
    ];
    vm.requiredZones = [
      `${marketLabel} Positive ROC Momentum Area${suffix}`,
      `Failed ROC Rollover Trap${suffix}`,
      `Chop Around Zero Baseline${suffix}`,
    ];
  } else if (name.includes("news release breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "NewsBreakoutChart";
    vm.requiredLabels = [
      `Pre-Release Range High${suffix}`,
      `Pre-Release Range Low${suffix}`,
      `Post-Release Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Economic Calendar Event Window${suffix}`,
      `Spread Widening Warning Zone${suffix}`,
      `News Whipsaw Trap Area${suffix}`,
    ];
  } else if (name.includes("range breakout") && (name.includes("support-resistance") || name.includes("support/resistance"))) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Support Range Boundary${suffix}`,
      `Resistance Range Boundary${suffix}`,
      `Crypto Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Support/Resistance Range Box${suffix}`,
      `Breakout Retest Area${suffix}`,
      `False Break Back Inside Range${suffix}`,
    ];
  } else if (name.includes("bollinger band squeeze breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Bollinger Squeeze Width${suffix}`,
      `Outer Band Breakout Close${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Compression Squeeze Box${suffix}`,
      `Band Expansion Breakout Area${suffix}`,
      `Failed Break Back Inside Bands${suffix}`,
    ];
  } else if (name.includes("trend-following using parabolic sar")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    vm.requiredLabels = [
      `Parabolic SAR Acceleration Dot Trail${suffix}`,
      `Dot Flip Trend Marker${suffix}`,
      `Forex Pair Continuation Boundary${suffix}`,
    ];
    vm.requiredZones = [
      `SAR Trend Acceleration Zone${suffix}`,
      `Chop Flip Warning Zone${suffix}`,
      `Invalidation Boundary Across SAR Dots${suffix}`,
    ];
  } else if (name.includes("bollinger band breakout (swing)") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Swing Bollinger Compression${suffix}`,
      `1H/4H Band Breakout Close${suffix}`,
      `Gold Wick Fakeout Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Swing Band Compression Zone${suffix}`,
      `Gold Breakout Retest Area${suffix}`,
      `Return Inside Band Invalidation${suffix}`,
    ];
  } else if (name.includes("gap breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "GapBreakoutChart";
    vm.requiredLabels = [
      `Crypto Gap Boundary${suffix}`,
      `Breakout Close Beyond Gap${suffix}`,
      `Liquidity Depth Warning${suffix}`,
    ];
    vm.requiredZones = [
      `Thin-Liquidity Gap Zone${suffix}`,
      `Gap Breakout Retest Area${suffix}`,
      `Gap Refill Trap Area${suffix}`,
    ];
  } else if (name.includes("guppy") || name.includes("gmma")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    vm.requiredLabels = [
      `Short-Term GMMA Ribbon${suffix}`,
      `Long-Term GMMA Ribbon${suffix}`,
      `Ribbon Expansion Point${suffix}`,
    ];
    vm.requiredZones = [
      `GMMA Compression Zone${suffix}`,
      `Trend Ribbon Separation Area${suffix}`,
      `False Ribbon Twist Trap${suffix}`,
    ];
  } else if (name.includes("keltner channel trend-follow")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "KeltnerChannelChart";
    vm.requiredLabels = [
      `Keltner EMA Midline${suffix}`,
      `Upper ATR Channel${suffix}`,
      `Trend-Side Close${suffix}`,
    ];
    vm.requiredZones = [
      `Keltner Trend Continuation Path${suffix}`,
      `Midline Pullback Area${suffix}`,
      `False Channel Break Trap${suffix}`,
    ];
  } else if (name.includes("asia session breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Asia Session Range High${suffix}`,
      `Asia Session Range Low${suffix}`,
      `Crypto Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Asia Session Range Box${suffix}`,
      `Crypto Session Expansion Area${suffix}`,
      `False Break Back Inside Range${suffix}`,
    ];
  } else if (name.includes("trend-following with heikin-ashi")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "HeikinAshiTrendChart";
    vm.requiredLabels = [
      `Heikin-Ashi Smoothed Trend Candles${suffix}`,
      `Flat Candle Continuation Marker${suffix}`,
      `Color Shift Warning${suffix}`,
    ];
    vm.requiredZones = [
      `Smoothed Forex Trend Path${suffix}`,
      `Continuation Candle Cluster${suffix}`,
      `Lag Reversal Warning Zone${suffix}`,
    ];
  } else if (name.includes("mean reversion via bollinger")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Outer Bollinger Band Stretch${suffix}`,
      `Middle Band Mean Reference${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Outer Band Exhaustion Area${suffix}`,
      `Mean Reversion Path To Middle Band${suffix}`,
      `Failed Reversion Continuation Trap${suffix}`,
    ];
  } else if (name.includes("keltner channel mean reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "KeltnerChannelChart";
    vm.requiredLabels = [
      `Keltner Outer Channel Stretch${suffix}`,
      `EMA Midline Mean Reference${suffix}`,
      `Crypto Spread Percentage Check${suffix}`,
    ];
    vm.requiredZones = [
      `ATR Channel Exhaustion Area${suffix}`,
      `Mean Reversion To Midline Path${suffix}`,
      `Failed Reversion Breakout Trap${suffix}`,
    ];
  } else if (name.includes("pivot point breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "PivotBreakoutChart";
    vm.requiredLabels = [
      `Central Pivot Level${suffix}`,
      `Pivot Resistance Breakout Close${suffix}`,
      `${assetClass === "GOLD" ? "Gold Wick Fakeout Marker" : "Pivot Retest Marker"}${suffix}`,
    ];
    vm.requiredZones = [
      `Pivot Compression Area${suffix}`,
      `Breakout Retest Around Pivot${suffix}`,
      `Failed Break Back Through Pivot${suffix}`,
    ];
  } else if (name.includes("support-resistance breakout") || name.includes("support/resistance breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Horizontal Resistance Level${suffix}`,
      `Horizontal Support Level${suffix}`,
      `Forex Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Support/Resistance Decision Area${suffix}`,
      `Breakout Retest Zone${suffix}`,
      `Failed Break Back Through Level${suffix}`,
    ];
  } else if (name.includes("pre-london session breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Pre-London Range High${suffix}`,
      `Pre-London Range Low${suffix}`,
      `London Handoff Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Pre-London Range Box${suffix}`,
      `London Expansion Window${suffix}`,
      `False Break Back Inside Range${suffix}`,
    ];
  } else if (name.includes("rsi") && name.includes("mean reversion")) {
    vm.visualCategory = "Range / Mean Reversion Visual";
    vm.componentType = "RSIMeanReversionChart";
    vm.requiredLabels = [
      `RSI Overbought/Oversold Zone${suffix}`,
      `Price Stretch Away From Mean${suffix}`,
      `${assetClass === "GOLD" ? "Gold Wick Rejection Marker" : "Crypto Liquidity Depth Check"}${suffix}`,
    ];
    vm.requiredZones = [
      `${name.includes("intraday") ? "Intraday" : name.includes("swing") ? "Swing" : ""} RSI Extreme Reading Area${suffix}`,
      `Mean Reversion Reaction Path${suffix}`,
      `Failed Reversion Continuation Trap${suffix}`,
    ];
  } else if (name.includes("new york session breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Pre-New York Range High${suffix}`,
      `Pre-New York Range Low${suffix}`,
      `New York Session Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Pre-New York Range Box${suffix}`,
      `New York Expansion Window${suffix}`,
      `News-Wick False Break Trap${suffix}`,
    ];
  } else if (name.includes("price channel breakout")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ChannelBreakoutChart";
    vm.requiredLabels = [
      `Upper Price Channel Boundary${suffix}`,
      `Lower Price Channel Boundary${suffix}`,
      `Channel Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Channel Consolidation Corridor${suffix}`,
      `Breakout Retest Area${suffix}`,
      `Failed Breakout Back Inside Channel${suffix}`,
    ];
  } else if (name.includes("bollinger band trend breakout") && assetClass === "FOREX") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Upper Bollinger Band Expansion${suffix}`,
      `Middle Band Trend Reference${suffix}`,
      `Forex Breakout Close${suffix}`,
    ];
    vm.requiredZones = [
      `Band Expansion Continuation Zone${suffix}`,
      `Pullback To Middle Band Retest${suffix}`,
      `Failed Expansion Back Inside Bands${suffix}`,
    ];
  } else if (name === "bollinger band breakout" && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Upper Bollinger Band Gold Breakout${suffix}`,
      `Gold Wick Rejection Marker${suffix}`,
      `Volatility Expansion Close${suffix}`,
    ];
    vm.requiredZones = [
      `Gold Volatility Breakout Zone${suffix}`,
      `High-Wick Fakeout Area${suffix}`,
      `Return Inside Band Invalidation${suffix}`,
    ];
  } else if (name.includes("bollinger band breakout (intraday)") && assetClass === "GOLD") {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "BollingerBandChart";
    vm.requiredLabels = [
      `Intraday Bollinger Squeeze${suffix}`,
      `5m/15m Breakout Close${suffix}`,
      `Fast Retest Trap Marker${suffix}`,
    ];
    vm.requiredZones = [
      `Short-Timeframe Squeeze Box${suffix}`,
      `Intraday Breakout Retest Area${suffix}`,
      `Rapid Reversal Trap Zone${suffix}`,
    ];
  } else if (name.includes("donchian channel breakout") || name.includes("donchian")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "DonchianChannelBreakoutChart";
    const timeframeLabel = name.includes("intraday")
      ? "Intraday Donchian Breakout Close"
      : name.includes("swing")
        ? "Swing Donchian Breakout Close"
        : "N-Period High Breakout Close";
    const goldContext = assetClass === "GOLD" ? "Gold " : "";
    vm.requiredLabels = [
      `${goldContext}Donchian Upper Channel Band${suffix}`,
      `${goldContext}Donchian Lower Channel Band${suffix}`,
      `${timeframeLabel}${suffix}`,
    ];
    vm.requiredZones = [
      `${goldContext}Donchian N-Period High/Low Channel${suffix}`,
      `${name.includes("intraday") ? "Fast Intraday" : name.includes("swing") ? "1H/4H Swing" : "Channel"} Breakout Expansion Zone${suffix}`,
      `${goldContext}False Breakout Back Inside Channel${suffix}`,
    ];
  } else if (name.includes("higher-high") && name.includes("higher-low")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "MarketStructureChart";
    vm.requiredLabels = [
      `Swing High${suffix}`,
      `Higher High${suffix}`,
      `Higher Low${suffix}`,
    ];
    vm.requiredZones = [
      `Rising Swing Structure${suffix}`,
      `Pullback Higher-Low Area${suffix}`,
      `Structure Failure Below Prior Swing Low${suffix}`,
    ];
  } else if (name.includes("volatility breakout") && name.includes("atr")) {
    vm.visualCategory = "Breakout / Retest Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [
      `ATR Compression Range${suffix}`,
      `ATR Expansion Breakout Close${suffix}`,
      `Crypto Liquidity Depth Check${suffix}`,
    ];
    vm.requiredZones = [
      `Low-ATR Compression Box${suffix}`,
      `ATR Expansion Breakout Area${suffix}`,
      `Slippage / Spread Percentage Warning Zone${suffix}`,
    ];
  } else if (name.includes("volatility-adjusted") && name.includes("atr filter")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ATRVolatilityChart";
    vm.requiredLabels = [
      `ATR Trend Filter Reading${suffix}`,
      `Forex Pair Trend Continuation Path${suffix}`,
      `Dynamic Pip Stop Adjustment${suffix}`,
    ];
    vm.requiredZones = [
      `Acceptable ATR Trend Filter Zone${suffix}`,
      `Volatility-Adjusted Stop Area${suffix}`,
      `Low-ATR Chop Avoidance Zone${suffix}`,
    ];
  } else if (name.includes("macd")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MACDStructureChart";
    vm.requiredLabels = [
      `MACD Line${suffix}`,
      `MACD Signal Line / Trigger Line${suffix}`,
      `Zero Line Baseline${suffix}`,
    ];
    vm.requiredZones = [
      `MACD Crossover Area${suffix}`,
      `MACD Histogram Expansion Zone${suffix}`,
      `Zero Line Midpoint${suffix}`,
    ];
  } else if (name.includes("adx") || name.includes("directional index")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "ADXStrengthChart";
    vm.requiredLabels = [
      `ADX Strength Line${suffix}`,
      `ADX Threshold (25)${suffix}`,
      `Trend Confirmation Trigger${suffix}`,
    ];
    vm.requiredZones = [
      `Strong Trend Zone (ADX > 25)${suffix}`,
      `Weak Trend Zone (ADX < 25)${suffix}`,
      `ADX Confirmation Area${suffix}`,
    ];
  } else if (name.includes("london open breakout") || name.includes("london open")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Asian Range High Boundary${suffix}`,
      `Asian Range Low Boundary${suffix}`,
      `London Open Breakout Trigger${suffix}`,
    ];
    vm.requiredZones = [
      `Asian Range Consolidation Box${suffix}`,
      `London Open Expansion Zone${suffix}`,
      `False Breakout / Liquidity Sweep Area${suffix}`,
    ];
  } else if (name.includes("new york open breakout") || name.includes("ny open breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Pre-Market Range High Boundary${suffix}`,
      `Pre-Market Range Low Boundary${suffix}`,
      `NY Open Volatility Trigger${suffix}`,
    ];
    vm.requiredZones = [
      `US Pre-Market Consolidation Box${suffix}`,
      `NY Open Expansion Zone${suffix}`,
      `False Breakout Sweep / News Trap Area${suffix}`,
    ];
  } else if (name.includes("overnight range breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Overnight Range High Boundary${suffix}`,
      `Overnight Range Low Boundary${suffix}`,
      `Morning Session Breakout Trigger${suffix}`,
    ];
    vm.requiredZones = [
      `Overnight Consolidation Range Box${suffix}`,
      `Morning Open Expansion Zone${suffix}`,
      `Overnight Range Liquidity Sweep${suffix}`,
    ];
  } else if (name.includes("real yield") || name.includes("correlation")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [
      `US 10Y Real Yield (TIPS)${suffix}`,
      `XAU/USD Spot Gold Price${suffix}`,
      `Correlation Divergence${suffix}`,
    ];
    vm.requiredZones = [
      `Real Yield Tracking Zone${suffix}`,
      `Macro Reaction Window${suffix}`,
      `Divergence Action Area${suffix}`,
    ];
  } else if (name.includes("supertrend")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "SupertrendVolatilityChart";
    vm.requiredLabels = [
      `Supertrend Trailing Stop Line${suffix}`,
      `${assetClass === "CRYPTO" ? "Crypto " : ""}Trend Flip Marker${suffix}`,
      `ATR Volatility Band${suffix}`,
    ];
    vm.requiredZones = [
      `Shaded ${assetClass === "CRYPTO" ? "Crypto " : ""}Volatility Zone${suffix}`,
      `Sideways Chop Warning Zone${suffix}`,
      `Dynamic Invalidation Area${suffix}`,
    ];
  } else if (name.includes("parabolic sar")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    vm.requiredLabels = [
      `Parabolic SAR Acceleration Dot${suffix}`,
      `Dot Flip Reversal Point${suffix}`,
      `Trend Acceleration Indicator${suffix}`,
    ];
    vm.requiredZones = [
      `Bullish Acceleration Area${suffix}`,
      `Bearish Acceleration Area${suffix}`,
      `SAR Reversal Boundary${suffix}`,
    ];
  } else if (name.includes("ichimoku")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "IchimokuCloudChart";
    vm.requiredLabels = [
      `Tenkan-sen Conversion Line${suffix}`,
      `Kijun-sen Base Line${suffix}`,
      `Senkou Span Cloud Boundary${suffix}`,
    ];
    vm.requiredZones = [
      `Senkou Span Shaded Cloud Support${suffix}`,
      `False Trend Zone Inside Cloud${suffix}`,
      `Ichimoku Equilibrium Area${suffix}`,
    ];
  } else if (name.includes("heikin")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "HeikinAshiTrendChart";
    vm.requiredLabels = [
      `Heikin-Ashi Smoothed Candles${suffix}`,
      `Trend Continuation Marker${suffix}`,
      `Flat Candle Boundaries${suffix}`,
    ];
    vm.requiredZones = [
      `Strong Bullish Flat-Bottom Zone${suffix}`,
      `Strong Bearish Flat-Top Zone${suffix}`,
      `Heikin-Ashi Smoothing Area${suffix}`,
    ];
  } else if (
    name.includes("crossover") ||
    name.includes("moving average") ||
    name.includes("moving-average") ||
    name.includes("filter") ||
    name.includes("cross") ||
    name.includes("wma")
  ) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";

    let fastLabel = `Fast Moving Average Line${suffix}`;
    let slowLabel = `Slow Moving Average Line${suffix}`;

    if (name.includes("ema cross with rsi")) {
      fastLabel = `Fast EMA Line${suffix}`;
      slowLabel = `Slow EMA Line${suffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `RSI Midline Filter${suffix}`, `EMA Cross Point${suffix}`];
    } else if (name.includes("wma") || name.includes("weighted")) {
      fastLabel = `Fast Weighted WMA Line${suffix}`;
      slowLabel = `Slow Weighted WMA Line${suffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${suffix}`];
    } else if (name.includes("20/50 ema")) {
      fastLabel = `20 EMA Fast Line${suffix}`;
      slowLabel = `50 EMA Slow Line${suffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${suffix}`];
    } else if (name.includes("50/200 sma") || name.includes("golden cross") || name.includes("death cross")) {
      fastLabel = `50 SMA Line${suffix}`;
      slowLabel = `200 SMA Line${suffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${suffix}`];
    } else if (name.includes("triple")) {
      fastLabel = `Fast EMA Line${suffix}`;
      const medLabel = `Medium EMA Line${suffix}`;
      slowLabel = `Slow EMA Line${suffix}`;
      vm.requiredLabels = [fastLabel, medLabel, slowLabel, `Triple Crossover Point${suffix}`];
    } else {
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${suffix}`];
    }

    vm.requiredZones = [
      `Activation Area${suffix}`,
      `Whipsaw / Lag Trap Zone${suffix}`,
      `Dynamic Trend Support Area${suffix}`,
    ];
  }

  return vm;
}
