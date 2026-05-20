import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.7 - Crypto Roadway Cards
 * Focus: Crypto Market Conditions: Reading 24/7, Fragmented, Liquidity-Driven Environments
 */
export const cryptoCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Crypto Conditions Begin With Market Layers",
    label: "Crypto Foundation",
    visualKey: "crypto-condition-foundation",
    body: "In crypto markets, a candlestick pattern or range break does not exist in isolation. Every move is born inside a layered environment. That environment might be trending, ranging, compressing, expanding, transitioning, or choppy. But in crypto, this condition is also shaped by four powerful layers: BTC context, spot vs perp agreement, liquidity depth, and leverage pressure. A professional crypto reader does not look at a single altcoin's breakout in isolation. Before they trust any move, they ask: 'What condition is this asset in, and does the broader market layers support it?' Let's build this essential crypto filter.",
    context: {
      keyTerms: [
        { term: "Crypto Condition", definition: "The dominant state (trend, range, transition, chop, unstable) currently shaping an asset's price action." },
        { term: "BTC Context", definition: "The structural condition of Bitcoin, which dictates the overall trend direction and risk tolerance of the crypto market." },
        { term: "Spot vs Perp Agreement", definition: "The alignment of price action between spot markets (physical buying) and perpetual futures (leveraged derivatives)." },
        { term: "Liquidity Depth", definition: "The volume of buy and sell limit orders resting in order books, which stabilizes price against spikes." },
        { term: "Leverage Pressure", definition: "The build-up of open interest and liquidation risk that can exaggerate or distort price movement." }
      ],
      whyThisMatters: "Without identifying the crypto condition first, you will constantly buy perp-driven spikes (expecting trend continuation) and sell liquidation wicks (expecting structural reversals).",
      realLifeExample: "You see SOL spike 5% in 10 minutes. If you identify the condition as a spot-supported expansion with BTC trending, you expect continuation. If you identify it as a perp-only spike during thin weekend liquidity, you expect it to fade. The candle is the same; the environment changes the reading.",
      commonMistake: "Trading an altcoin breakout without checking if Bitcoin is in transition or if the breakout is purely driven by futures liquidations.",
      quickNote: "Slow down and name the crypto condition first. The environment is the translator of the move."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Context Shapes the Crypto Environment",
    label: "BTC Context",
    visualKey: "crypto-btc-condition-map",
    body: "Bitcoin is the index of the crypto market. It dictates the overall environment. An altcoin can print a beautiful structure break, but if Bitcoin is stuck below resistance, transitioning, or choppy, the altcoin's breakout is fragile. A clean altcoin trend condition requires a healthy, stable, or trending Bitcoin environment. If Bitcoin wobbles or rejects structure, the altcoin's reading quality immediately drops to mixed or unstable. BTC context is not there to confuse you. It helps you understand the market around the coin.",
    context: {
      keyTerms: [
        { term: "BTC Dominance", definition: "The ratio of Bitcoin's market capitalization to the total market cap of all digital assets." },
        { term: "Beta Relationship", definition: "The sensitivity of an altcoin's price relative to Bitcoin's directional movements." },
        { term: "Correlated Volatility", definition: "The tendency of altcoins to mirror Bitcoin's sudden price swings, often with magnified intensity." },
        { term: "Market Sentiment Filter", definition: "Using Bitcoin's structural health to determine the overall risk environment of the market." },
        { term: "Altcoin Vulnerability", definition: "The risk that an altcoin's clean technical structure will be broken by a sudden Bitcoin move." }
      ],
      whyThisMatters: "Respecting BTC context prevents you from buying clean altcoin breakouts right as Bitcoin is about to drop, which invalidates all local evidence.",
      realLifeExample: "ETH attempts to break out of a range. You check BTC and see it has just hit its major range ceiling and is showing rejection. You recognize that the ETH breakout lacks supporting environment, so you stay aside.",
      commonMistake: "Analyzing an altcoin in a vacuum, completely ignoring whether Bitcoin is in a stable or dangerous condition.",
      quickNote: "BTC context helps you avoid reading an altcoin in isolation. When the king moves, the court follows."
    }
  },
  {
    type: "visual_intro",
    title: "Spot-Supported Conditions Are Cleaner Than Perp-Only Pushes",
    label: "Spot vs Perp",
    visualKey: "crypto-spot-perp-condition-board",
    body: "Crypto price action is split between two major venues: spot markets (buying the actual asset) and perpetual futures (speculating with leverage). A high-quality, stable market condition is spot-supported, meaning physical buyers are actively accumulating. In contrast, perp-driven conditions are fueled by leverage, funding rate pressures, and short-term speculation. While perp-only spikes can look fast and powerful on a chart, they are highly fragile and tend to reverse completely. A trained learner checks whether a move is backed by real spot volume or perp pressure.",
    context: {
      keyTerms: [
        { term: "Spot Market", definition: "The direct buying and selling of cryptocurrency tokens with immediate settlement and no leverage." },
        { term: "Perpetual Futures (Perps)", definition: "Leveraged derivative contracts with no expiry date, tracking the underlying asset's index price." },
        { term: "Spot Premium", definition: "A condition where the spot price trades higher than the futures price, showing organic buying pressure." },
        { term: "Funding Rate Pressure", definition: "Periodic fees paid between perp longs and shorts that can force liquidations and position adjustments." },
        { term: "Leverage Exhaustion", definition: "A fast move driven by futures buying that runs out of fresh capital and rapidly reverses." }
      ],
      whyThisMatters: "Distinguishing spot-supported environments from perp-driven squeezes saves you from buying the absolute top of leverage-fueled pumps.",
      realLifeExample: "SOL spikes 8%. You check spot order books and see very little buying, but futures open interest has jumped $50M. You classify the environment as an unstable perp-driven spike, expecting it to fade.",
      commonMistake: "Chasing a high-speed breakout that is driven purely by perp leverage, ignoring the lack of spot participation.",
      quickNote: "Perp movement can exaggerate what the wider market is doing. Look for spot agreement to confirm the condition."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Compression Can Build Quiet Pressure",
    label: "Crypto Compression",
    visualKey: "crypto-compression-condition",
    body: "Crypto markets are highly cyclical, moving from quiet compression to explosive expansion. Compression happens when price swings narrow, candles shrink in size, and volume fades. During compression, orders are accumulating on both CEX and DEX order books. Beginners see a coin stuck in a flat squeeze and get bored, or they guess a breakout direction to force a trade. This is a gamble. Compression does not predict direction. It is a condition that says: 'Movement is tightening. Wait to see what price proves next.'",
    context: {
      keyTerms: [
        { term: "Crypto Compression", definition: "A market state where volatility contracts and price consolidates within a tightening range." },
        { term: "Volatility Cycle", definition: "The natural progression of the market shifting from quiet contraction to explosive expansion." },
        { term: "Order Book Coiling", definition: "The accumulation of buy and sell limit orders within a very tight, narrow price band." },
        { term: "Squeeze Trigger", definition: "The point where price reaches the apex of compression, preparing for a directional breakout." },
        { term: "Directional Neutrality", definition: "Accepting that a squeeze does not guarantee which way the price will exit compression." }
      ],
      whyThisMatters: "Classifying a coin as compressing stops you from entering trades in a flat, sideways market with no momentum.",
      realLifeExample: "BTC moves in a tiny $200 range for three days. You classify the condition as compression. You do not trade; you wait for a clean expansion push to verify direction.",
      commonMistake: "Assuming a tightening wedge must break upward because you feel bullish, rather than waiting for the breakout to print.",
      quickNote: "Compression is not a prediction. It is a condition that says, 'Wait to see what price proves next.'"
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Expansion Can Be Clean or Unstable",
    label: "Crypto Expansion",
    visualKey: "crypto-expansion-quality",
    body: "When price exits a compression zone or range, the market shifts into an expansion condition. But crypto expansion is often wobbly. A clean expansion is supported by spot buying, stable funding rates, and a clean close that holds outside the breakout level. An unstable expansion is fueled by leveraged futures chasing, leaving long wicks, and failing to hold outside the boundary. A trained crypto learner does not chase the spike. They ask: 'Did expansion cleanly break, and does it hold?'",
    context: {
      keyTerms: [
        { term: "Crypto Expansion", definition: "The release of volatility as price breaks outside a compression or range boundary." },
        { term: "Hold Verification", definition: "Subsequent candles maintaining price acceptance outside the broken structure level." },
        { term: "Expansion Quality", definition: "A rating (clean vs unstable) based on spot volume, leverage levels, and close quality." },
        { term: "Breakout Fade", definition: "When a breakout spike fails to sustain itself and quickly collapses back inside the range." },
        { term: "Leverage Chase", definition: "A fast move driven by futures traders chasing a breakout, creating an unsustainable spike." }
      ],
      whyThisMatters: "Evaluating expansion quality protects you from FOMO-buying a fake breakout that collapses the minute leverage exhausts.",
      realLifeExample: "DOT spikes 10% above its range high. You check the next hour's close. The candle closes back inside the range, and futures funding is highly positive. You label the expansion unstable and stay safe.",
      commonMistake: "Chasing the first fast breakout candle without waiting to see if subsequent candles hold the new price level.",
      quickNote: "The move happened. Now check whether the market supports it. A fast move is not always a clean move."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidation Conditions Can Fake Clarity",
    label: "Liquidation Environment",
    visualKey: "crypto-liquidation-condition",
    body: "Because crypto is heavily leveraged, sudden price moves often trigger liquidation cascades. When short sellers are forced to buy back, or long buyers are forced to sell, price prints massive, fast candles with long wicks. Beginners look at these huge candles and assume a new trend has started. This is a trap. A liquidation move is a forced mechanical event, not organic institutional direction. Once the liquidation loop ends, price often snaps back completely. A liquidation condition is unstable until proven otherwise.",
    context: {
      keyTerms: [
        { term: "Liquidation Cascade", definition: "A chain reaction where forced closures of leveraged positions drive price rapidly in one direction." },
        { term: "Forced Order Flow", definition: "Buy or sell orders executed automatically by exchange risk engines rather than human decision." },
        { term: "Liquidation Wick", definition: "A long candle wick created by a rapid spike and immediate reversal during a liquidation event." },
        { term: "Open Interest Collapse", definition: "A sharp drop in total active futures contracts, showing leverage is being cleared out." },
        { term: "Mechanical Distortion", definition: "Price distortion caused by automated liquidations rather than organic market valuation." }
      ],
      whyThisMatters: "Understanding liquidation conditions stops you from chasing wicks and teaches you to wait for price to stabilize.",
      realLifeExample: "ETH drops $100 in 2 minutes, leaving a massive lower wick, then returns to its original price. You recognize this as a liquidation cascade. You do not panic; you wait for structure to settle.",
      commonMistake: "Panic-selling a sudden drop that is driven purely by a forced liquidation cascade, selling at the absolute bottom.",
      quickNote: "A liquidation wick is a forced exit, not a fresh entry. Let the dust settle before you read the chart."
    }
  },
  {
    type: "visual_intro",
    title: "Low-Liquidity Conditions Make Crypto Noisier",
    label: "Thin Liquidity",
    visualKey: "crypto-thin-liquidity-condition",
    body: "Crypto trades 24/7, but market participation is not equal. During weekends, holidays, or late New York hours, liquidity in order books dries up. In a thin liquidity environment, even small buy or sell orders can cause large, erratic price spikes. These moves look significant on a chart, but they represent very low market agreement. In thin liquidity conditions, candles are noisy, wicks are common, and follow-through is extremely rare. A trained learner lowers reading confidence when liquidity is low.",
    context: {
      keyTerms: [
        { term: "Thin Liquidity", definition: "A market state where there are few resting orders in the order book, increasing price sensitivity." },
        { term: "Order Book Spread", definition: "The price gap between the highest buy bid and the lowest sell ask on an exchange." },
        { term: "Weekend Volatility", definition: "Erratic price movements that occur on Saturdays and Sundays due to lower institutional volume." },
        { term: "Slippage Spike", definition: "A sudden price jump caused by a market order eating through thin levels in the order book." },
        { term: "Market Agreement", definition: "The degree of volume-backed consensus among market participants at a specific price level." }
      ],
      whyThisMatters: "Identifying thin liquidity environments keeps you from trading weekend noise that will likely be reversed when institutions return on Monday.",
      realLifeExample: "An altcoin spikes 6% on Sunday afternoon. You check order book depth and find it is extremely thin. You classify the environment as noisy and thin, ignoring the breakout.",
      commonMistake: "Treating weekend or late-night spikes with the same confidence as high-volume, liquid weekday breakouts.",
      quickNote: "If liquidity is thin, your confidence should drop. Low volume makes price move easily but hold poorly."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Chop Punishes Directional Assumptions",
    label: "Crypto Chop",
    visualKey: "crypto-choppy-condition-warning",
    body: "A choppy crypto condition occurs when price moves sideways with no structure. Candles overlap constantly, wicks form on both sides, and mini-breaks are immediately reversed. This is where beginners lose the most money by trying to predict breakouts that never happen. A trained learner does not force a clear bias on a choppy chart. They accept that the market is messy, label the condition unclear, and protect their capital by standing aside.",
    context: {
      keyTerms: [
        { term: "Crypto Chop", definition: "A messy sideways market state characterized by overlapping swings and failed directional pushes." },
        { term: "Wick Noise", definition: "Frequent, long wicks on both sides of candles, indicating lack of consensus or control." },
        { term: "Pattern Degradation", definition: "The breakdown of standard technical patterns (like triangles or ranges) inside a messy environment." },
        { term: "Capital Protection", definition: "The discipline to preserve trading capital by staying out of choppy markets." },
        { term: "Reading Quality: Unclear", definition: "A classification indicating the chart structure is too messy to establish a high-probability bias." }
      ],
      whyThisMatters: "Recognizing a choppy environment prevents you from getting chopped up by endless false breakouts and small losses.",
      realLifeExample: "SOL bounces between $100 and $103 for two days, printing overlapping wicks. You identify the chop condition, classify the reading as unclear, and close the chart.",
      commonMistake: "Forcing a bullish or bearish trade on a chart that is clearly in a random, unstructured chop state.",
      quickNote: "Chop is not a failure to understand. Sometimes the market is simply not clean."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Condition First, Break Second",
    label: "Reading Workflow",
    visualKey: "crypto-condition-first-workflow",
    body: "How does a professional audit a crypto chart? They do not look at a breakout candle first. They follow a disciplined checklist: Zoom out. Classify the overall asset condition. Check BTC context. Verify spot vs perp support. Check liquidity depth. Zoom in. Audit the local candle close quality. Check for follow-through holds. Classify reading quality. By running this filter, you ensure you never trade an isolated candle without knowing the condition around it.",
    context: {
      keyTerms: [
        { term: "Crypto Workflow", definition: "The step-by-step audit process from macro market layers down to local candle details." },
        { term: "Environmental Priority", definition: "The rule that the broader market condition always overrides individual candle shapes." },
        { term: "Multi-Venue Verification", definition: "Cross-referencing spot and perpetual markets to check the quality of a price move." },
        { term: "Follow-through Hold", definition: "Verifying that subsequent candles sustain a breakout before assigning a clear reading." },
        { term: "Reading Quality Audit", definition: "Determining if a setup is Clear, Mixed, Unstable, or Unclear based on aligned evidence." }
      ],
      whyThisMatters: "Following this workflow prevents you from jumping into false setups driven by isolated, low-quality breakouts.",
      realLifeExample: "You see an altcoin break a level. You follow the workflow: check BTC (choppy), check spot vs perp (perp-only), check liquidity (thin). You classify it as mixed/unstable and avoid the trap.",
      commonMistake: "Jumping directly into a local breakout candle without checking BTC context or spot volume first.",
      quickNote: "Never audit a candle until you have named the room it is standing in."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: What Crypto Condition Is This Asset In?",
    label: "Practice Drill",
    visualKey: "crypto-condition-practice-drill",
    body: "Let's put your crypto condition-reading skills to the test. In this drill, we present a realistic market scenario involving an altcoin breakout attempt, BTC context, spot/perp alignment, and liquidity. Read the clues carefully, apply your environmental filters, and choose the most disciplined reading.",
    taskData: {
      type: "choice_block",
      question: "An altcoin was compressing inside a tight range. It suddenly breaks above the range with a strong candle. BTC is flat below a major resistance. The perp chart shows a much sharper move with rising open interest, but the spot chart shows very little buying volume. Liquidity looks thin on the order books, and the next candle stalls instead of continuing cleanly. What is the most disciplined crypto condition reading?",
      options: [
        {
          id: "A",
          text: "Clean expansion condition because the altcoin broke above the range.",
          isCorrect: false,
          feedback: "Incorrect. The break matters, but expansion is not clean until broader evidence supports it. Here, BTC is flat at resistance, spot volume is weak, perps are leading, and follow-through is stalling."
        },
        {
          id: "B",
          text: "Clean trend condition because the breakout candle was strong.",
          isCorrect: false,
          feedback: "Incorrect. One strong candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
        },
        {
          id: "C",
          text: "Mixed / unstable expansion because the move happened, but BTC context, spot support, liquidity, and follow-through are not clean.",
          isCorrect: true,
          feedback: "Correct! The move occurred, but the flat BTC context, perp-driven leverage, thin liquidity, and stalled follow-through mean the condition is mixed or unstable. It is not a clean expansion."
        },
        {
          id: "D",
          text: "Guaranteed reversal because the next candle stalled.",
          isCorrect: false,
          feedback: "Incorrect. Stalling and weak follow-through lower the quality of the condition reading, but they do not guarantee a reversal. Avoid predictive, absolute statements."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Divergent Breakout", definition: "When a coin breaks structure but the broader market (BTC) does not support the direction." },
        { term: "Leverage-Fueled Spike", definition: "A breakout attempt driven by futures buying that lacks organic spot accumulation." },
        { term: "Stalled Follow-Through", definition: "When price stops moving in the breakout direction immediately after the initial candle." },
        { term: "Unstable Condition", definition: "A market environment that is vulnerable to rapid reversals due to high leverage or thin liquidity." },
        { term: "Disciplined Classifier", definition: "Labelling a market condition based strictly on aligned evidence rather than FOMO." }
      ],
      whyThisMatters: "This drill trains you to cross-reference multiple crypto layers so you don't fall for isolated altcoin breakouts that lack organic market support.",
      realLifeExample: "An altcoin breaks out, but spot volume is low and funding rates are extremely high. You classify it as unstable, avoiding a loss when price crashes back down.",
      commonMistake: "Buying a breakout based solely on the altcoin's chart, without checking DXY, BTC, or futures open interest.",
      quickNote: "If the spot volume is missing and BTC is flat, the breakout is likely built on sand."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Read the Crypto Condition Before the Move",
    label: "Crypto Debrief",
    visualKey: "crypto-condition-debrief",
    body: "Congratulations! You have completed the Level 0 Module 0.7 Crypto Roadway. You have shifted your perspective from chasing individual candles to auditing the overall crypto environment. You now understand that BTC context, spot/perp alignment, liquidity depth, leverage pressure, structure, and follow-through dictate the validity of every technical setup. Carry this environmental filter with you whenever you open a digital asset chart.",
    context: {
      keyTerms: [
        { term: "Environmental Filter", definition: "The habit of classifying crypto conditions and market layers before auditing local candles." },
        { term: "Multi-Venue Audit", definition: "Evaluating altcoin structure, BTC context, spot/perp volume, and order book depth together." },
        { term: "Follow-through Verification", definition: "Waiting for subsequent candles to prove price acceptance outside a broken level." },
        { term: "Condition Adaptability", definition: "Shifting your trading rules immediately when a coin moves from trend to range or chop." },
        { term: "Capital Preservation", definition: "Standing aside and declaring a reading unclear when crypto conditions are choppy." }
      ],
      whyThisMatters: "Condition awareness is the ultimate filter. It separates clean spot-supported moves from unstable leverage traps.",
      realLifeExample: "You open an altcoin chart. Before looking at the current candle, you note that BTC is choppy and funding is positive. You recognize wicks are likely noise and wait.",
      commonMistake: "Forgetting to check the BTC context and trading altcoin ranges as if they were high-momentum trends.",
      quickNote: "Do not ask what the crypto candle is doing. Ask what condition the asset is in, and what market layer created it."
    }
  }
];
