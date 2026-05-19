import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.6 - Crypto Track Cards
 * Focus: Crypto Evidence Audit: Reading Fragmented Market Evidence
 */
export const cryptoCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Crypto Evidence Audit Starts With Fragmented Markets",
    label: "Crypto Foundation",
    visualKey: "crypto-evidence-audit-foundation",
    body: "When you look at a crypto chart, it is easy to assume you are seeing the 'official' price of the asset. But unlike traditional stock markets, there is no single centralized exchange for crypto. Bitcoin and Ethereum trade across hundreds of centralized spot exchanges (like Binance or Coinbase), perpetual futures venues, decentralized exchanges (DEXs), and aggregate price index feeds. Because liquidity is fragmented across all these different pools, a breakout or rejection can look clean on one chart but be completely unsupported elsewhere. A trained crypto learner doesn't just react to one chart; they audit whether the evidence is supported by the wider market.",
    context: {
      keyTerms: [
        { term: "Fragmented Liquidity", definition: "A market condition where buy and sell orders are split across many different exchanges and venues." },
        { term: "Spot Exchange (CEX)", definition: "A centralized platform where traders buy and sell the actual underlying cryptocurrency." },
        { term: "Perpetual Futures (Perps)", definition: "Leveraged contracts tracking price that do not have an expiration date." },
        { term: "Decentralized Exchange (DEX)", definition: "An on-chain liquidity pool where trading happens directly from user wallets." },
        { term: "Market-Layer Audit", definition: "Evaluating price behavior across spot, futures, and related venues to verify a reading." }
      ],
      whyThisMatters: "If you only check one exchange's chart, you can easily be trapped by an isolated local movement that has no backing from the broader market.",
      realLifeExample: "You notice a sudden bullish breakout candle on ETH on a decentralized exchange. But when you check the big centralized exchanges, the spot price hasn't moved at all. The DEX move was just an isolated imbalance in a thin liquidity pool.",
      commonMistake: "Treating a single exchange's chart as the absolute, unified truth of the entire crypto market.",
      quickNote: "Crypto price is an average across many islands. Make sure the main islands agree before you trust the move."
    }
  },
  {
    type: "visual_intro",
    title: "One Crypto Wick Is Not the Whole Story",
    label: "Wick Trap",
    visualKey: "crypto-single-wick-trap",
    body: "Crypto charts are famous for printing giant, dramatic wicks that look like instant rejections. It is incredibly tempting to see a massive wick shooting down below support and assume, 'This is a clean rejection, price is guaranteed to reverse!' But in crypto, these wicks are often just the result of thin liquidity, localized liquidations, or cascading stop-losses on a single exchange. One wick is a useful clue that starts a question, but it cannot complete your reading. We must audit where the wick happened, why it formed, and whether price actually follows through.",
    context: {
      keyTerms: [
        { term: "Liquidation Wick", definition: "A sharp, rapid price extension caused by automated system liquidations of leveraged positions." },
        { term: "Stop Run", definition: "A price sweep designed to trigger resting stop-loss orders before reversing." },
        { term: "Thin Liquidity", definition: "A low number of buy and sell orders in the order book, making price spike easily with small volume." },
        { term: "Follow-Through Check", definition: "Observing whether subsequent candles sustain the direction of a major wick." },
        { term: "Wick Trap", definition: "The mistake of assuming an immediate reversal purely based on the presence of a long wick." }
      ],
      whyThisMatters: "Reacting instantly to wicks in crypto often lands you in the middle of a leverage flush, entering right before the real trend continues.",
      realLifeExample: "ETH wicks down 3% below a key support level on a perp chart and returns inside within a minute. A beginner buys immediately, expecting a reversal. However, the spot market shows no volume support, and the next candle closes below the support level. The wick was just a leveraged stop run.",
      commonMistake: "Assuming every long wick is a guaranteed reversal signal, rather than a liquidity event that requires verification.",
      quickNote: "A wick tells you where orders were cleared out, not where price is going next."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Context Changes Crypto Reading Quality",
    label: "BTC Context",
    visualKey: "crypto-btc-context-evidence",
    body: "Bitcoin (BTC) is the gravity of the crypto market. It represents the majority of the market's total value and drives the general risk appetite of crypto participants. If you are auditing an altcoin like SOL, LINK, or AVAX, you cannot read its structure in isolation. You must check Bitcoin's context. If an altcoin breaks a resistance level, but BTC is stuck below a major daily resistance or losing its own trend structure, the altcoin's breakout is highly vulnerable. We must check whether the market-wide driver is supportive or conflicting.",
    context: {
      keyTerms: [
        { term: "Market Gravity", definition: "The dominant influence of Bitcoin's price trend over the rest of the crypto market." },
        { term: "Altcoin Structure", definition: "The technical chart pattern and swing points of cryptocurrencies other than Bitcoin." },
        { term: "BTC Alignment", definition: "When both Bitcoin and altcoins are trending or consolidating in the same direction." },
        { term: "BTC Conflict", definition: "When an altcoin attempts a move that is directly contradicted by Bitcoin's structure." },
        { term: "Relative Strength", definition: "An altcoin moving upward while Bitcoin is flat or weak, indicating unique demand." }
      ],
      whyThisMatters: "Altcoins are highly sensitive to Bitcoin. When Bitcoin drops, it drags down even the strongest-looking altcoin structures.",
      realLifeExample: "Solana (SOL) breaks out of a neat cup-and-handle pattern on its local chart. However, at the exact same moment, Bitcoin drops below its daily swing low. Solana's breakout fails instantly, dragging price back inside.",
      commonMistake: "Buying altcoin breakouts without looking at the Bitcoin chart to confirm the broader market's health.",
      quickNote: "When Bitcoin sneezes, the altcoins catch a cold. Never audit an altcoin in a vacuum."
    }
  },
  {
    type: "visual_intro",
    title: "Spot and Perp Evidence Can Disagree",
    label: "Venue Conflict",
    visualKey: "crypto-spot-perp-evidence-conflict",
    body: "In crypto, there is a major difference between the spot market (where people buy the actual asset) and the perpetual futures market (where people trade with leverage). A breakout that is driven purely by futures leverage is often a temporary imbalance. If traders are forcing price higher using high leverage on perp venues while spot volume remains flat and inactive, the breakout is fragile. A healthy, high-quality reading requires spot and perp evidence to confirm each other.",
    context: {
      keyTerms: [
        { term: "Spot Confirmation", definition: "Visible buying volume on centralized spot exchanges backing a price move." },
        { term: "Perp-Led Movement", definition: "A price move driven predominantly by leverage and derivatives positioning on futures exchanges." },
        { term: "Leverage Imbalance", definition: "An unstable market condition where futures open interest is unsustainably high." },
        { term: "Spot/Perp Divergence", definition: "When price moves on perp exchanges but spot exchanges do not show matching volume or price action." },
        { term: "Order Book Depth", definition: "The volume of limit orders available on an exchange to absorb price movements." }
      ],
      whyThisMatters: "Perp-led breakouts are highly susceptible to sudden liquidations and reversals. Checking spot volume acts as a quality filter.",
      realLifeExample: "BTC spikes 2% on Binance Perps. You check Coinbase Spot and Binance Spot volume and see it is extremely low. This perp-led spike is likely a short squeeze that will collapse as soon as the futures buying stops.",
      commonMistake: "Trusting a breakout without checking if the volume is coming from spot buying or just perp leverage.",
      quickNote: "Spot volume is the foundation. Perp leverage is the accelerant. Never trust the accelerant alone."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidation Cascades Can Fake Clarity",
    label: "Liquidation Pressure",
    visualKey: "crypto-liquidation-cascade-audit",
    body: "When traders use high leverage, they set liquidation prices. If price reaches those levels, the exchange automatically force-closes their positions, buying or selling market orders in a fraction of a second. This triggers further liquidations in a chain reaction—a liquidation cascade. The result is a massive, fast candle that looks like a powerful breakout or breakdown. But this is forced liquidation, not sustainable buying or selling. We must observe whether price holds the new area after the cascade or immediately snaps back.",
    context: {
      keyTerms: [
        { term: "Liquidation Cascade", definition: "A chain reaction where one liquidation triggers price shifts that force subsequent liquidations." },
        { term: "Forced Order", definition: "A market order executed automatically by an exchange's liquidation engine." },
        { term: "Cascading Stop", definition: "A series of stop-loss orders triggered sequentially as price spikes rapidly." },
        { term: "Mean Reversion", definition: "The tendency of price to return to its average level after an extreme, forced spike." },
        { term: "Liquidation Flush", definition: "Clearing out over-leveraged traders from the market, leading to price stabilization." }
      ],
      whyThisMatters: "Chasing a liquidation candle often results in buying the absolute top or selling the absolute bottom of a temporary spike.",
      realLifeExample: "An altcoin consolidates for days, then suddenly spikes down 5% in 10 seconds, hitting a key support. The move was a liquidation cascade of late longs. Within 5 minutes, price returns back to the range. The break was fake.",
      commonMistake: "Assuming a fast, high-speed news or liquidation candle represents a clean, organic trend shift.",
      quickNote: "Liquidations create speed, not structure. Let the dust settle before you read the chart."
    }
  },
  {
    type: "visual_intro",
    title: "DEX and CEX Prices May Not Tell the Same Story",
    label: "Venue Difference",
    visualKey: "crypto-dex-cex-evidence",
    body: "Because decentralized exchanges (DEXs) rely on local liquidity pools rather than central order books, their pricing can temporarily deviate from centralized exchanges (CEXs). A large trade on a DEX can create a massive wick or price distortion due to slippage or thin pool depth. This is a local venue anomaly, not a global market shift. A disciplined auditor cross-checks CEX spot feeds to ensure a DEX move represents a true structural change.",
    context: {
      keyTerms: [
        { term: "Centralized Exchange (CEX)", definition: "An exchange operating a centralized order book (e.g., Binance, Coinbase)." },
        { term: "Decentralized Pool", definition: "Smart-contract-based reserves of tokens that facilitate trading on DEXs." },
        { term: "Slippage", definition: "The difference between the expected price of a trade and the price at which it is executed." },
        { term: "Venue Anomaly", definition: "A price spike or discrepancy that occurs on only one specific exchange." },
        { term: "Arbitrage", definition: "The practice of buying on one exchange and selling on another to profit from price differences." }
      ],
      whyThisMatters: "Relying purely on DEX charts can lead to trading price wicks that were caused by single large orders rather than general market movement.",
      realLifeExample: "A local DEX pool for a mid-cap token spikes 8% upward because a whale bought $100k worth of tokens. On Binance and OKX spot, the price remained completely unchanged. Arbitrageurs quickly sell on the DEX, bringing the price back down.",
      commonMistake: "Failing to check centralized exchange pricing when trading on decentralized platforms.",
      quickNote: "A DEX wick is often just a localized splash in a small pond. Look at the big lake first."
    }
  },
  {
    type: "visual_intro",
    title: "Funding and Leverage Can Pressure the Reading",
    label: "Funding and Leverage",
    visualKey: "crypto-funding-leverage-pressure",
    body: "To keep the price of perpetual futures in line with the spot price, crypto exchanges use a mechanism called the funding rate. When most traders are leverage-long, longs pay shorts a fee every few hours (positive funding). When most are short, shorts pay longs (negative funding). If the funding rate becomes extremely positive, it shows that leverage is heavily crowded. This crowded position makes any bullish breakout fragile, as a small downward move can trigger a massive liquidation chain.",
    context: {
      keyTerms: [
        { term: "Funding Rate", definition: "A periodic payment exchanged between long and short traders to align perp and spot prices." },
        { term: "Crowded Leverage", definition: "An extreme imbalance where the vast majority of market participants are positioned in the same direction." },
        { term: "Open Interest (OI)", definition: "The total number of active, outstanding futures contracts in the market." },
        { term: "Funding Pressure", definition: "The financial cost of holding a leveraged position in a crowded market." },
        { term: "Long Squeeze", definition: "A rapid price drop that forces leveraged long traders to sell, driving price down further." }
      ],
      whyThisMatters: "Trading breakouts when funding is highly elevated is dangerous because the market is structurally fragile and primed for a reversal.",
      realLifeExample: "You want to buy a breakout on ETH. You check the funding rate and see it is at its highest level in months. This tells you leverage is crowded. A few hours later, a tiny dip triggers a mass cascade of long liquidations.",
      commonMistake: "Ignoring extremely positive or negative funding rates when evaluating trend continuation.",
      quickNote: "When everyone is leaning on one side of the boat, a tiny wave will capsize it."
    }
  },
  {
    type: "visual_intro",
    title: "Aligned Crypto Evidence vs Mixed Crypto Evidence",
    label: "Alignment and Conflict",
    visualKey: "crypto-aligned-vs-mixed-evidence",
    body: "Now we must classify our crypto reading. We have a clear aligned reading when multiple independent layers point in the same direction: BTC structure is bullish, spot volume confirms the move, perp open interest rises healthily, and follow-through holds key support levels. We have a mixed reading when we have active conflict: an altcoin is breaking high, but BTC is dropping, spot volume is thin, and the funding rate is crowded. Learning to separate these states keeps you out of risky markets.",
    context: {
      keyTerms: [
        { term: "Aligned Reading", definition: "A high-quality reading where structure, BTC, spot volume, and perps all agree." },
        { term: "Mixed Reading", definition: "A classification where some indicators are supportive but others present significant warnings." },
        { term: "Unclear Reading", definition: "A market state characterized by high noise, flat volume, and erratic price action." },
        { term: "Conflict Identification", definition: "Actively noting indicators that oppose your primary directional bias." },
        { term: "Risk Mitigation", definition: "Lowering exposure or standing aside when evidence is classified as mixed or unclear." }
      ],
      whyThisMatters: "Altcoins are highly volatile. Without a clear alignment checklist, you will constantly buy into temporary price spikes.",
      realLifeExample: "SOL breaks its range high. BTC is breaking upward as well, spot volume on Coinbase is expanding, and funding is neutral. This is a clear aligned read. If BTC was flat and spot volume was dry, the read would be mixed.",
      commonMistake: "Failing to classify a setup as mixed because you are emotionally attached to the altcoin's project news.",
      quickNote: "If the evidence doesn't align cleanly across spot, perps, and BTC, the reading is mixed. Stand aside."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Verification: What Must Happen Next?",
    label: "Verification Logic",
    visualKey: "crypto-verification-workflow",
    body: "Crypto markets move with extreme speed, which often triggers FOMO (Fear of Missing Out). To protect yourself, you must replace emotional reactions with verification logic. Instead of chasing a fast-moving green candle, define what the market must show you next. For a bullish break, ask: 'Does price hold above the broken range high on a pullback? Does spot volume continue to support? Does BTC remain stable?' If yes, the reading is verified. If not, the setup is invalid.",
    context: {
      keyTerms: [
        { term: "Verification Checkpoint", definition: "A specific price level or volume behavior that confirms a reading's validity." },
        { term: "Pullback Test", definition: "When price returns to a broken structure level to verify if it acts as support." },
        { term: "FOMO Filter", definition: "A disciplined habit of waiting for verification checks to prevent chasing price." },
        { term: "Invalidation Level", definition: "A price point that, if crossed, proves the initial breakout reading was false." },
        { term: "Volume Verification", definition: "Confirming that trading volume remains high during pullbacks and continuations." }
      ],
      whyThisMatters: "Waiting for verification checks stops you from entering at the absolute peak of a liquidation spike.",
      realLifeExample: "An altcoin spikes 8% in ten minutes. Instead of FOMO-buying, you say: 'I will wait for a pullback to the broken range high. If it holds on low volume and BTC is stable, I will verify the read.' Price immediately dumps back into the range, proving the breakout was false.",
      commonMistake: "Buying a high-speed breakout candle before it closes, leaving yourself exposed to a sudden rejection wick.",
      quickNote: "Let the market run first. If the move is real, it will give you a safe pullback checkpoint to read."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Crypto Reading Clear, Mixed, or Unclear?",
    label: "Practice Drill",
    visualKey: "crypto-evidence-audit-practice-drill",
    body: "Let's put your crypto audit skills to the test. In this drill, we present a realistic crypto market scenario featuring both positive indicators and active warning signs. Your goal is to evaluate the evidence layers objectively and classify the reading quality state. Remember: do not choose the most exciting directional option, choose the most disciplined classification of the evidence.",
    taskData: {
      type: "choice_block",
      question: "An altcoin breaks above a local range high on its local chart. The perp chart shows a sharp upward spike in price with expanding open interest. However, Bitcoin is currently flat and stuck directly below a major daily resistance zone. Furthermore, the spot volume on major centralized exchanges remains very thin, and the breakout candle immediately hesitates and starts drifting back toward the broken range high. What is the disciplined Crypto evidence-audit reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because the altcoin broke above the range.",
          isCorrect: false,
          feedback: "Incorrect. While the local breakout exists, you cannot classify this as clear when BTC is stuck under resistance, spot confirmation is thin, and the breakout candle is already losing momentum."
        },
        {
          id: "B",
          text: "Mixed evidence because the break happened, but BTC context, spot confirmation, and follow-through are not strong yet.",
          isCorrect: true,
          feedback: "Correct! The evidence is mixed. The local breakout is an active supportive clue, but the flat BTC context, thin spot volume, and stalling follow-through are significant limiting clues that prevent a clear reading."
        },
        {
          id: "C",
          text: "Guaranteed reversal because the next candle stalled.",
          isCorrect: false,
          feedback: "Incorrect. Stalling or drifting back limits reading confidence, but it does not guarantee a reversal. Avoid absolute predictions."
        },
        {
          id: "D",
          text: "Unclear forever because crypto markets cannot be read.",
          isCorrect: false,
          feedback: "Incorrect. Crypto markets can be read systematically, but we must audit the different layers (BTC, spot, perps, and structure) together rather than dismissing them."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Disciplined Reading", definition: "Evaluating charts based on visible evidence rather than hopes or predictions." },
        { term: "Altcoin Breakout", definition: "Price breaking above a local consolidation range on an altcoin chart." },
        { term: "Spot/Perp Divergence", definition: "When a price move is driven by perp leverage while spot buying remains inactive." },
        { term: "BTC Resistance Barrier", definition: "A key historical supply zone on the Bitcoin chart that limits market-wide upside." },
        { term: "Drifting Follow-Through", definition: "A weak post-breakout candle structure that fails to show impulsive continuation." }
      ],
      whyThisMatters: "This drill trains you to notice market-wide gravity and volume depth rather than getting blinded by a fast altcoin breakout.",
      realLifeExample: "You see SOL spike, but check BTC and spot volume first. Finding no market-wide support, you classify the read as mixed and avoid buying the top of a leverage spike.",
      commonMistake: "Failing to check Bitcoin's structure before entering an altcoin trade, leading to losses when Bitcoin rejects resistance.",
      quickNote: "If the breakout is isolated, the reading is mixed. Wait for the market gravity to align."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Crypto Reading Requires Market-Layer Evidence",
    label: "Crypto Debrief",
    visualKey: "crypto-evidence-audit-debrief",
    body: "Congratulations! You have completed the Level 0 Crypto Roadway. You have shifted your mindset from a retail speculator chasing speed to a disciplined crypto auditor. You now understand that a crypto chart is just one piece of a fragmented market, shaped by Bitcoin's gravity, spot/perp volume, liquidation cascades, and verification checkpoints. You have built a professional trading foundation that will protect your capital as you transition to Level 1.",
    context: {
      keyTerms: [
        { term: "Crypto Auditor", definition: "A trader who cross-checks BTC, spot volume, and perp leverage before drawing a reading." },
        { term: "Market-Layer Reading", definition: "Evaluating crypto assets by combining multiple exchange and derivatives layers." },
        { term: "Gravity Awareness", definition: "Always checking Bitcoin's structure before forming a view on altcoins." },
        { term: "Liquidation Literacy", definition: "Understanding that high-speed moves are often forced liquidations rather than real trends." },
        { term: "Capital Protection", definition: "The ultimate goal of using evidence audits to avoid low-probability trades." }
      ],
      whyThisMatters: "Crypto is highly volatile and easily manipulated by leverage. A systematic evidence audit is your only shield against these market flushes.",
      realLifeExample: "A Lurnava graduate audits SOL. They check BTC (bullish trend), spot volume (expanding on Coinbase), perp open interest (stable), and wait for a pullback to hold the H1 low. They execute with complete clarity.",
      commonMistake: "Slipping back into trading fast wicks and chasing spikes without auditing the market layers.",
      quickNote: "Do not chase the speed. Audit the source, check the gravity, and verify the hold."
    }
  }
];
