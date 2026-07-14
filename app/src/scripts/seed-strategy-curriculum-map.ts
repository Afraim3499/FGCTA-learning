import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type CurriculumSeed = {
  id: string;
  expectedName: string;
  expectedAsset: "FOREX" | "CRYPTO" | "GOLD";
  moduleNumber: string;
  examLevel?: number;
  domain: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const SEEDS: CurriculumSeed[] = [
  {
    id: "548304b2-e14b-4197-8a64-8871de52e5ec",
    expectedName: "Higher‑High & Higher‑Low Trend Structure",
    expectedAsset: "FOREX",
    moduleNumber: "1.3",
    domain: "market_structure",
    prompt: "What is the core requirement for the Higher-High & Higher-Low trend structure plan?",
    options: [
      "A fast oscillator must cross above its average line.",
      "Price must print a higher swing high and then hold a higher swing low.",
      "A session open must break the overnight range.",
      "ATR must expand above its recent average.",
    ],
    correctIndex: 1,
    explanation: "This plan is pure swing structure: the sequence of higher highs and higher lows is the main evidence.",
  },
  {
    id: "1e4b5b7e-a919-416d-b1fa-6a33f37afd05",
    expectedName: "Moving Average Crossover (20/50 EMA)",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "In the crypto 20/50 EMA crossover plan, what makes the setup healthier?",
    options: [
      "A single venue spike while other markets stay flat.",
      "The cross forms during thin liquidity with a wide spread.",
      "The faster EMA crosses and price holds with broad market participation.",
      "Price crosses both EMAs but immediately closes back inside a range.",
    ],
    correctIndex: 2,
    explanation: "Crypto crossovers need follow-through and venue agreement because isolated exchange movement can distort the chart.",
  },
  {
    id: "3c4b9689-a508-425c-ae15-5402072305cc",
    expectedName: "Moving‑Average Crossover Trend",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What should a Forex moving-average crossover be checked against before it is trusted?",
    options: [
      "Trend context, pair strength, and liquid session conditions.",
      "Only the candle color at the moment of the cross.",
      "A crypto exchange volume spike.",
      "The distance from a fixed gold reaction zone.",
    ],
    correctIndex: 0,
    explanation: "A Forex crossover is stronger when it agrees with pair pressure and a liquid session environment.",
  },
  {
    id: "e561b7d7-fb6c-4555-9e4b-b961b7d9809b",
    expectedName: "SMA Crossover Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is the main purpose of the crypto SMA crossover trend plan?",
    options: [
      "To forecast a move from a single candle wick.",
      "To ignore liquidity depth when volatility rises.",
      "To use two smoothed averages to classify trend direction after price accepts the move.",
      "To trade every crossover inside a sideways range.",
    ],
    correctIndex: 2,
    explanation: "The SMA crossover helps classify trend direction, but crypto still needs acceptance and liquidity checks.",
  },
  {
    id: "1e60f205-0db3-4186-9ff6-da303e9ecd18",
    expectedName: "Single Moving‑Average Filter",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "How should the Forex single moving-average filter be used?",
    options: [
      "As a direction filter that separates trend participation from range noise.",
      "As a standalone entry rule in every market condition.",
      "As a gold volatility gauge.",
      "As a way to ignore session timing.",
    ],
    correctIndex: 0,
    explanation: "A single moving average is a filter. It helps learners avoid fighting the dominant direction.",
  },
  {
    id: "33dc4747-a1b9-4ea5-beb0-b4c7f35b4d4a",
    expectedName: "EMA Crossover Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is a key crypto risk when using an EMA crossover?",
    options: [
      "All exchanges always show identical depth.",
      "A crossover can appear during a thin-liquidity spike and reverse quickly.",
      "EMA values remove all volatility risk.",
      "The plan only works during Forex sessions.",
    ],
    correctIndex: 1,
    explanation: "Crypto EMA crosses can be distorted by liquidity gaps, so depth and follow-through matter.",
  },
  {
    id: "cc725254-7441-4dc1-943c-8020a6ffd715",
    expectedName: "Golden Cross (50/200 SMA)",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What does the crypto 50/200 SMA golden cross mainly describe?",
    options: [
      "A short-term scalp trigger on one exchange.",
      "A long-horizon trend transition that still needs acceptance and liquidity review.",
      "A candle pattern for gold wicks.",
      "A rule that every pullback should be bought.",
    ],
    correctIndex: 1,
    explanation: "The 50/200 cross is slow and regime-focused. It needs confirmation from sustained market acceptance.",
  },
  {
    id: "31c51fbf-df65-4815-b534-2d4fb48c23a4",
    expectedName: "Dual Exponential vs. Simple MA Crossover",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "Why compare an EMA with an SMA in the Forex dual-average plan?",
    options: [
      "To combine a faster reaction line with a slower baseline for trend context.",
      "To replace all support and resistance analysis.",
      "To measure crypto order-book depth.",
      "To force a trade before a session opens.",
    ],
    correctIndex: 0,
    explanation: "The EMA reacts faster, while the SMA gives a steadier baseline for Forex trend assessment.",
  },
  {
    id: "ba893ddd-7279-4189-bc12-b1ea00997ebd",
    expectedName: "Weighted Moving Average (WMA) Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What makes the crypto WMA trend plan different from a slower SMA plan?",
    options: [
      "It ignores recent candles.",
      "It only applies to gold.",
      "It gives more weight to recent price while still requiring trend context.",
      "It removes the need to review liquidity.",
    ],
    correctIndex: 2,
    explanation: "A WMA responds more to recent price action, which can help but also needs context in crypto volatility.",
  },
  {
    id: "74b4ec83-ef8d-4cd5-b50b-d0175c824967",
    expectedName: "MACD Trend‑Following",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "In the Forex MACD trend-following plan, what should align before activation?",
    options: [
      "MACD momentum, trend direction, and Forex session liquidity.",
      "Only a random histogram color change.",
      "A gold wick above a reaction zone.",
      "A crypto venue imbalance by itself.",
    ],
    correctIndex: 0,
    explanation: "MACD is most useful when momentum agrees with broader Forex trend context and liquid trading conditions.",
  },
  {
    id: "a0146820-79ad-4f0c-910b-e9dd74e9e935",
    expectedName: "Dual Moving Average Filter",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is the role of the crypto dual moving-average filter?",
    options: [
      "To classify trend bias while avoiding trades in flat chop.",
      "To replace exchange depth checks.",
      "To use a fixed distance as the main measurement.",
      "To force entries during every crossover.",
    ],
    correctIndex: 0,
    explanation: "The filter separates trend conditions from flat movement. Crypto plans still need liquidity awareness.",
  },
  {
    id: "18c4e0cc-fe10-4c4a-acc7-30f5a432b0c1",
    expectedName: "ADX (Average Directional Index) Trend Strength Filter",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does ADX add to a Forex trend plan?",
    options: [
      "A reading of trend strength, separate from direction.",
      "A candle-by-candle entry command.",
      "A gold-specific macro filter.",
      "A way to ignore pair strength.",
    ],
    correctIndex: 0,
    explanation: "ADX measures trend strength. Direction still needs price structure or another directional filter.",
  },
  {
    id: "691f14ef-e3c0-404a-a7af-bef1a887c3f1",
    expectedName: "Golden Cross / Death Cross",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "How should a crypto golden cross or death cross be interpreted?",
    options: [
      "As a regime clue that needs acceptance, volume context, and liquidity review.",
      "As a reason to ignore volatility expansion.",
      "As a scalping pattern for every one-minute candle.",
      "As a fixed gold reaction-zone plan.",
    ],
    correctIndex: 0,
    explanation: "Longer moving-average crosses are regime clues, not instant instructions.",
  },
  {
    id: "b9dbffc8-5159-4c5c-9e10-6d24638ea46b",
    expectedName: "Triple Moving Average System",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is the cleanest reading in a crypto triple moving-average system?",
    options: [
      "Three averages tangled together inside a tight range.",
      "The fast, medium, and slow averages stacked in trend order with price acceptance.",
      "A one-exchange wick through all averages.",
      "A session label without price follow-through.",
    ],
    correctIndex: 1,
    explanation: "Stacked averages show ordered trend structure. Tangled averages warn that the market is unclear.",
  },
  {
    id: "cc654b43-7f4c-4e50-b635-f89930b8b8da",
    expectedName: "Supertrend Indicator Strategy",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "How should the Forex Supertrend plan be treated?",
    options: [
      "As a volatility-adjusted trend filter that still needs session and structure checks.",
      "As a fixed-price instruction that never changes.",
      "As a crypto exchange-depth model.",
      "As a gold wick-only setup.",
    ],
    correctIndex: 0,
    explanation: "Supertrend adjusts with volatility, but Forex context still requires structure and session awareness.",
  },
  {
    id: "5c2855dd-3755-4a3a-a02f-6ba11aeebbb5",
    expectedName: "Parabolic SAR Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is the main caution with crypto Parabolic SAR trend readings?",
    options: [
      "Rapid flips can occur during choppy volatility.",
      "The dots remove the need for invalidation.",
      "The tool measures gold macro pressure.",
      "It only works on Forex pairs.",
    ],
    correctIndex: 0,
    explanation: "Parabolic SAR can flip repeatedly in choppy crypto conditions, so learners must filter the environment.",
  },
  {
    id: "66003598-918f-4c4c-8b07-3ebe7669369a",
    expectedName: "Ichimoku Cloud Trend Strategy",
    expectedAsset: "FOREX",
    moduleNumber: "2.4",
    domain: "forex",
    prompt: "What does the Forex Ichimoku cloud plan require before it is clean?",
    options: [
      "Price acceptance beyond the cloud with trend-line alignment and enough room to the next structure.",
      "Only one wick through the cloud.",
      "A crypto venue imbalance.",
      "A gold-only volatility reading.",
    ],
    correctIndex: 0,
    explanation: "Ichimoku is a context model. Clean plans need price acceptance, cloud structure, and room to nearby levels.",
  },
  {
    id: "e8b80963-0255-4065-9431-36616c65070a",
    expectedName: "Adaptive Moving Average Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What is the purpose of an adaptive moving average in a crypto trend plan?",
    options: [
      "To react to changing volatility while still requiring market context.",
      "To ignore slippage and depth.",
      "To mark a fixed gold reference level.",
      "To replace every higher-timeframe check.",
    ],
    correctIndex: 0,
    explanation: "Adaptive averages adjust to changing conditions, but crypto volatility and liquidity still need review.",
  },
  {
    id: "1040822a-86be-4071-9e3a-1e417dc4092e",
    expectedName: "Heikin‑Ashi Trend Filter",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What does the crypto Heikin-Ashi trend filter mainly help learners see?",
    options: [
      "Smoothed trend persistence without overreacting to every raw candle.",
      "The exact order-book depth on every exchange.",
      "A fixed-distance rule from a prior session.",
      "A macro yield relationship for gold.",
    ],
    correctIndex: 0,
    explanation: "Heikin-Ashi smooths candles, which can clarify trend persistence but can also lag fast reversals.",
  },
  {
    id: "54152e9c-25b6-4f7e-bc7c-4748d5f2316f",
    expectedName: "Bollinger Band Trend Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What separates the Forex Bollinger Band Trend Breakout from a simple band touch?",
    options: [
      "Band expansion in the trend direction with a closing breakout and follow-through.",
      "A wick outside the band that closes back inside immediately.",
      "A crypto venue spike with no pair confirmation.",
      "A gold-only news reaction.",
    ],
    correctIndex: 0,
    explanation: "This Forex plan is about trend continuation and band expansion, not any random touch of the band.",
  },
  {
    id: "662f27f0-7cc7-484c-9a63-95abd4a00c2d",
    expectedName: "Supertrend Indicator Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What extra check is important for the crypto Supertrend strategy?",
    options: [
      "Liquidity depth and slippage risk around the volatility flip.",
      "A fixed-distance reading from an unrelated session range.",
      "Only the color of the Supertrend line.",
      "Gold real-yield pressure.",
    ],
    correctIndex: 0,
    explanation: "Crypto Supertrend readings can flip during volatility bursts, so liquidity depth and slippage risk matter.",
  },
  {
    id: "7e433f12-60d0-4687-bc38-19102b67a864",
    expectedName: "Price Channel Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What validates a Forex price-channel breakout plan?",
    options: [
      "A close beyond the channel boundary and failure to fall back inside the channel.",
      "Price touching the middle of the channel.",
      "A gold wick through an unrelated zone.",
      "A crypto-only exchange spike.",
    ],
    correctIndex: 0,
    explanation: "A channel breakout needs acceptance outside the boundary. Returning inside warns of a failed break.",
  },
  {
    id: "264882e6-4ba5-446f-8ed8-1a6d39e7fb8b",
    expectedName: "Donchian Channel Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What is the key trigger in the crypto Donchian Channel Breakout?",
    options: [
      "A close beyond the N-period high or low with liquidity depth still acceptable.",
      "A wick that pokes the band and closes back inside.",
      "A fixed-distance count from the prior session.",
      "A moving-average cross without channel context.",
    ],
    correctIndex: 0,
    explanation: "The Donchian plan uses N-period boundaries. In crypto, the close and liquidity conditions both matter.",
  },
  {
    id: "8a34ebe6-597e-47ba-a85a-9c61486ac488",
    expectedName: "Bollinger Band Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What makes the Gold Bollinger Band Breakout distinct?",
    options: [
      "Gold volatility, wick fakeouts, and close quality around the outer band.",
      "A fixed-distance threshold.",
      "Only a slow moving-average cross.",
      "A crypto venue-depth imbalance by itself.",
    ],
    correctIndex: 0,
    explanation: "Gold often rejects with sharp wicks, so the plan needs close quality and follow-through beyond the band.",
  },
  {
    id: "c4329999-e991-4fa8-87b4-f7c6973a4051",
    expectedName: "Bollinger Band Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What is central to the intraday Gold Bollinger Band breakout plan?",
    options: [
      "A short-timeframe squeeze, breakout close, and retest or trap review.",
      "A weekly macro-only reading with no chart trigger.",
      "A fixed-distance count.",
      "A long-term 50/200 SMA cross.",
    ],
    correctIndex: 0,
    explanation: "The intraday Gold version focuses on squeeze behavior, breakout acceptance, and trap recognition.",
  },
  {
    id: "9c6984b6-e2e4-4049-8c5d-f79aa046ae94",
    expectedName: "Academy Entry Logic",
    expectedAsset: "FOREX",
    moduleNumber: "3.1",
    domain: "execution_precision",
    prompt: "What comes first in the Forex Academy Entry Logic plan?",
    options: [
      "Identify the relevant order block or liquidity zone before looking for a trigger.",
      "Enter from a random candle color change.",
      "Ignore the zone and use a fixed distance.",
      "Use crypto venue depth as the main condition.",
    ],
    correctIndex: 0,
    explanation: "The plan begins with a mapped zone. The trigger is only meaningful after the area is defined.",
  },
  {
    id: "625532e5-97a8-471a-835a-47b6ed422fdf",
    expectedName: "Real Yield Inverse Correlation",
    expectedAsset: "GOLD",
    moduleNumber: "6.12",
    examLevel: 6,
    domain: "gold",
    prompt: "What is the main relationship behind the Gold real-yield inverse-correlation plan?",
    options: [
      "Rising real yields can pressure Gold when the chart also confirms weakness.",
      "Gold should be read only from candle color.",
      "Crypto venue depth defines Gold direction.",
      "A fixed-distance measure is the main Gold reading.",
    ],
    correctIndex: 0,
    explanation: "Gold can weaken when real yields rise, but learners still need chart confirmation and macro-calendar awareness.",
  },
  {
    id: "41c98ab2-e358-431e-93f5-7c4d8a08ae4f",
    expectedName: "Overnight Range Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "4.2",
    examLevel: 4,
    domain: "gold",
    prompt: "What must be defined before a Gold overnight range breakout is assessed?",
    options: [
      "The overnight high and low, then the quality of the break beyond that range.",
      "A random mid-range candle.",
      "A fixed-distance threshold.",
      "A crypto exchange imbalance.",
    ],
    correctIndex: 0,
    explanation: "The overnight range gives the boundaries. The breakout reading depends on close quality and follow-through.",
  },
  {
    id: "191dc6e6-ddc5-4040-9e35-1cb8191014a8",
    expectedName: "London Open Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "4.3",
    domain: "forex",
    prompt: "What context matters most for the Forex London Open Breakout?",
    options: [
      "The London open range, liquidity sweep risk, and acceptance after the break.",
      "A gold macro reading only.",
      "A crypto venue imbalance only.",
      "A moving average cross with no session context.",
    ],
    correctIndex: 0,
    explanation: "The London open plan is session-specific and needs acceptance after any range break.",
  },
  {
    id: "e83326e1-e6e7-433c-849c-4954d7fa3d5f",
    expectedName: "London Open Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "4.3",
    domain: "gold",
    prompt: "What makes the Gold London Open Breakout different from a generic breakout?",
    options: [
      "Gold volatility and wick rejection around the London open range.",
      "A fixed-distance rule.",
      "A crypto exchange-depth condition.",
      "A slow SMA crossover by itself.",
    ],
    correctIndex: 0,
    explanation: "Gold can move sharply at London open, so wick behavior and close quality are central.",
  },
  {
    id: "fc6cc0c6-f820-4554-bd26-319116b48ba9",
    expectedName: "London Open Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "4.3",
    domain: "gold",
    prompt: "What should the intraday Gold London Open Breakout emphasize?",
    options: [
      "The opening range, fast volatility, and whether price accepts or rejects the breakout.",
      "A weekly-only macro thesis.",
      "A fixed-distance threshold.",
      "A crypto order-book reading.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on fast opening behavior and clear acceptance or rejection.",
  },
  {
    id: "c3396d6e-3ba9-458f-8f93-31e2d9426435",
    expectedName: "London Open Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "4.3",
    domain: "gold",
    prompt: "How is the swing Gold London Open Breakout different from the intraday version?",
    options: [
      "It treats the London break as a larger structural clue and waits for broader follow-through.",
      "It ignores the London range.",
      "It uses a fixed-distance count as the main rule.",
      "It depends only on a one-minute wick.",
    ],
    correctIndex: 0,
    explanation: "The swing version gives more weight to broader structure after the London range breaks.",
  },
  {
    id: "f142af96-687b-4b25-96cf-580e32b1a01c",
    expectedName: "New York Open Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "4.4",
    domain: "gold",
    prompt: "What should be reviewed for a Gold New York Open Breakout?",
    options: [
      "The NY open range, overlap volatility, and close quality after the break.",
      "Only an EMA cross from the Asian session.",
      "A fixed-distance rule.",
      "A crypto venue imbalance.",
    ],
    correctIndex: 0,
    explanation: "The NY open can bring strong Gold volatility, so range boundaries and close quality matter.",
  },
  {
    id: "72d7fe18-a07d-4367-ac73-81f3ee9dab9f",
    expectedName: "New York Open Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "4.4",
    domain: "gold",
    prompt: "What is the intraday focus of the Gold New York Open Breakout?",
    options: [
      "A fast NY-session break, retest behavior, and rejection risk.",
      "A long-term 200 SMA crossover only.",
      "A fixed-distance count.",
      "A crypto-only funding shift.",
    ],
    correctIndex: 0,
    explanation: "The intraday plan studies fast NY-session behavior and whether the break holds or rejects.",
  },
  {
    id: "8cdf8440-0aca-4e7a-8639-63a0f842bf55",
    expectedName: "New York Open Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "4.4",
    domain: "gold",
    prompt: "What makes the swing Gold New York Open Breakout broader than the intraday version?",
    options: [
      "It uses the NY break as a structural clue that must continue beyond the opening burst.",
      "It trades only the first candle.",
      "It relies on a fixed-distance threshold.",
      "It ignores the NY open range.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs sustained structure after the initial NY volatility.",
  },
  {
    id: "4c013bf9-b6aa-41bf-94b3-787e7770df6b",
    expectedName: "Donchian Channel Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    examLevel: 2,
    domain: "forex",
    prompt: "What does a Forex Donchian Channel Breakout require?",
    options: [
      "A close beyond the period high or low and acceptance outside the channel.",
      "A candle that touches the middle band.",
      "A gold wick fakeout only.",
      "A crypto venue imbalance only.",
    ],
    correctIndex: 0,
    explanation: "The Donchian plan is a channel breakout. Returning inside the channel warns of failure.",
  },
  {
    id: "06622b1d-1614-489f-9f95-010862c95c27",
    expectedName: "Overnight Range Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "4.2",
    domain: "gold",
    prompt: "What defines the intraday Gold overnight range breakout?",
    options: [
      "A clean break from the overnight high or low with immediate intraday acceptance.",
      "A weekly macro view without range boundaries.",
      "A fixed-distance count.",
      "A crypto order-book imbalance.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on the overnight boundaries and how price behaves right after the break.",
  },
  {
    id: "45ceef50-94dd-428e-8e22-689005f9a84a",
    expectedName: "Overnight Range Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "4.2",
    domain: "gold",
    prompt: "What should the swing Gold overnight range breakout confirm after the range breaks?",
    options: [
      "Broader acceptance beyond the overnight boundary, not just a brief wick.",
      "A fixed-distance threshold.",
      "A crypto exchange spike.",
      "A candle closing in the middle of the range.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs the break to hold as a wider structural clue.",
  },
  {
    id: "0e05c77c-bbb9-43a6-86dc-174b4a0289e9",
    expectedName: "Volatility Breakout (ATR) Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "5.2",
    examLevel: 5,
    domain: "crypto",
    prompt: "What is the core idea in the crypto ATR volatility breakout strategy?",
    options: [
      "ATR expansion after compression, with liquidity depth checked before action.",
      "A fixed-distance count after a London session.",
      "A Gold wick rejection with no volatility reading.",
      "A moving average cross that ignores range compression.",
    ],
    correctIndex: 0,
    explanation: "The crypto ATR breakout looks for volatility expansion after compression and must account for liquidity depth.",
  },
  {
    id: "908c3611-b819-403e-ac16-0b3eca7323f9",
    expectedName: "Volatility‑Adjusted Trend (ATR Filter)",
    expectedAsset: "FOREX",
    moduleNumber: "5.2",
    examLevel: 5,
    domain: "forex",
    prompt: "How is the Forex ATR filter trend strategy different from an ATR breakout?",
    options: [
      "It uses ATR to filter trend quality and adjust invalidation distance, not to chase expansion alone.",
      "It ignores trend direction.",
      "It is a crypto liquidity-depth model.",
      "It depends on Gold wick fakeouts.",
    ],
    correctIndex: 0,
    explanation: "The Forex ATR filter supports trend selection and stop placement, while the crypto ATR breakout focuses on expansion.",
  },
];

function questionIdFor(strategyId: string): string {
  return `sv_${strategyId.replace(/-/g, "")}_mcq`;
}

function moduleLevel(moduleNumber: string): number {
  return Number.parseInt(moduleNumber.split(".")[0], 10);
}

function formatStatus(value: unknown): "ready" | "missing" {
  return value ? "ready" : "missing";
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const explicitDryRun = args.has("--dry-run");

  if (apply && explicitDryRun) {
    throw new Error("Use either --apply or --dry-run, not both.");
  }

  const dryRun = !apply;
  const targetIds = SEEDS.map((seed) => seed.id);
  const uniqueIds = new Set(targetIds);
  if (uniqueIds.size !== SEEDS.length) {
    throw new Error("Seed list contains duplicate strategy IDs.");
  }

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({
      where: { id: { in: targetIds } },
      select: {
        id: true,
        name: true,
        assetClass: true,
        sequenceNumber: true,
        parentFamily: true,
        learningProfile: true,
        visualModel: true,
      },
    }),
    prisma.courseModule.findMany({
      select: {
        id: true,
        level: true,
        moduleNumber: true,
        title: true,
        logicIds: true,
      },
    }),
  ]);

  const strategyById = new Map(strategies.map((strategy) => [strategy.id, strategy]));
  const moduleByNumber = new Map(modules.map((module) => [module.moduleNumber, module]));
  const missingStrategies = SEEDS.filter((seed) => !strategyById.has(seed.id));
  const missingModules = SEEDS.filter((seed) => !moduleByNumber.has(seed.moduleNumber));

  if (missingStrategies.length > 0) {
    throw new Error(`Missing strategies: ${missingStrategies.map((seed) => seed.id).join(", ")}`);
  }
  if (missingModules.length > 0) {
    throw new Error(`Missing modules: ${missingModules.map((seed) => seed.moduleNumber).join(", ")}`);
  }

  const mismatches = SEEDS.flatMap((seed) => {
    const strategy = strategyById.get(seed.id)!;
    const problems: string[] = [];
    if (strategy.name !== seed.expectedName) {
      problems.push(`${seed.id} name expected "${seed.expectedName}" but found "${strategy.name}"`);
    }
    if (strategy.assetClass !== seed.expectedAsset) {
      problems.push(`${seed.id} asset expected ${seed.expectedAsset} but found ${strategy.assetClass}`);
    }
    if (!strategy.learningProfile) {
      problems.push(`${seed.id} is missing learningProfile`);
    }
    if (!strategy.visualModel) {
      problems.push(`${seed.id} is missing visualModel`);
    }
    return problems;
  });

  if (mismatches.length > 0) {
    throw new Error(`Selection check failed:\n${mismatches.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING strategy curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ref: getVaultStrategyRef(seed.id),
      name: strategy.name,
      asset: strategy.assetClass,
      sequence: strategy.sequenceNumber,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      strategyLevel: getStrategyLevel(strategy),
      module: `${module.moduleNumber} ${module.title}`,
      examLevel: seed.examLevel ?? moduleLevel(seed.moduleNumber),
      learningProfile: formatStatus(strategy.learningProfile),
      visualModel: formatStatus(strategy.visualModel),
    };
  }));

  const seedsByModule = new Map<string, CurriculumSeed[]>();
  for (const seed of SEEDS) {
    const current = seedsByModule.get(seed.moduleNumber) || [];
    current.push(seed);
    seedsByModule.set(seed.moduleNumber, current);
  }

  for (const [moduleNumber, seeds] of seedsByModule) {
    const module = moduleByNumber.get(moduleNumber)!;
    const refsToAdd = seeds.map((seed) => getVaultStrategyRef(seed.id));
    const nextLogicIds = Array.from(new Set([...(module.logicIds || []), ...refsToAdd]));
    const addedRefs = refsToAdd.filter((ref) => !(module.logicIds || []).includes(ref));

    console.log(
      `${dryRun ? "Would update" : "Updating"} module ${module.moduleNumber} ${module.title}: ` +
      `${addedRefs.length} new strategy link(s)`
    );
    if (addedRefs.length > 0) {
      console.log(`  ${addedRefs.join(", ")}`);
    }

    if (!dryRun && addedRefs.length > 0) {
      await prisma.courseModule.update({
        where: { id: module.id },
        data: { logicIds: nextLogicIds },
      });
    }
  }

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    const level = seed.examLevel ?? module.level;
    const questionId = questionIdFor(seed.id);
    console.log(
      `${dryRun ? "Would upsert" : "Upserting"} exam question ${questionId} ` +
      `(L${level}, ${getVaultStrategyRef(seed.id)}, ${strategy.name})`
    );

    if (!dryRun) {
      await prisma.examQuestion.upsert({
        where: { id: questionId },
        update: {
          level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          matchingLeft: [],
          matchingRight: [],
          chartState: undefined,
          targetX: null,
          targetY: null,
          tolerance: null,
          explanation: seed.explanation,
        },
        create: {
          id: questionId,
          level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          explanation: seed.explanation,
        },
      });
    }
  }

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- STRATEGY CURRICULUM MAP APPLIED ---");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
