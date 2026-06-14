import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.11 - Specialized Crypto Reading Lab Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Crypto Moves Must Be Verified Across Venues",
    label: "Crypto Lab Foundation",
    visualKey: "crypto-venue-fragmentation-lab-foundation",
    body: "Crypto can show different price movements on different venues. A move on one exchange, one DEX pool, or one feed may be real, but it may not represent the whole market. A disciplined learner checks whether the move is broad, local, fragile, or unclear before drawing a conclusion. In this Crypto Reading Lab, you will learn to cross-check CEX spot charts, DEX pools, BTC context, venue agreement, and next-candle follow-through to verify what price is actually proving.",
    context: {
      keyTerms: [
        { term: "Venue verification", definition: "Checking price behavior across multiple exchanges or pools to confirm a move." },
        { term: "Broad movement", definition: "Price action that happens across multiple exchanges with broad support." },
        { term: "Local distortion", definition: "Price movement that occurs only on a single exchange or trading pool." },
        { term: "Fragile movement", definition: "Price action that spikes quickly but lacks volume support or BTC alignment, making it highly likely to reverse." },
        { term: "Unclear reading", definition: "A market state where different exchanges disagree or BTC is conflicting, providing no clear evidence." }
      ],
      whyThisMatters: "Without a venue verification process, you will constantly chase isolated wicks and spikes, treating venue-specific noise as market-wide trend confirmation.",
      realLifeExample: "A token spikes 7% on Uniswap, but the Coinbase spot price remains flat. The move was local, and it fades completely within minutes. A disciplined reader stays safe by ignoring it.",
      commonMistake: "Treating the price on one exchange as the absolute, single truth of the entire crypto market.",
      quickNote: "Crypto has no single home. Always check if other venues agree before trusting the move."
    }
  },
  {
    type: "visual_intro",
    title: "CEX Spot Is the First Broad-Market Check",
    label: "CEX Spot Check",
    visualKey: "crypto-cex-spot-check",
    body: "A CEX spot chart shows actual asset trading on major centralized platforms. It is not perfect, but because these exchanges have deep order books, they serve as a reliable broad-market reference. If a token shows a sudden breakout on a smaller venue, but CEX spot stays flat with thin volume, the move is likely a local anomaly. Always check the CEX spot charts first to see if major buyers are participating.",
    context: {
      keyTerms: [
        { term: "CEX Spot", definition: "A centralized exchange where actual cryptocurrencies are bought and sold directly." },
        { term: "Order Book Depth", definition: "The volume of buy and sell orders waiting at different price levels on an exchange." },
        { term: "Broad-Market Reference", definition: "An index or exchange chart used to check general market participation." },
        { term: "Local Wick", definition: "A price spike on a single exchange chart that is not confirmed elsewhere." },
        { term: "Reading Quality", definition: "The reliability score of a chart reading based on supporting evidence." }
      ],
      whyThisMatters: "CEX spot volume represents real asset trading and is less prone to temporary localized spikes than thin pools.",
      realLifeExample: "An altcoin wicks up on a smaller exchange due to a localized order. You check Binance spot and find it is flat with no volume. You classify the move as a local wick trap.",
      commonMistake: "Assuming a fast green candle on one chart means major spot exchanges are also buying.",
      quickNote: "Start your check with CEX spot. If the big exchanges aren't buying, the move lacks a foundation."
    }
  },
  {
    type: "visual_intro",
    title: "DEX Pool Wicks Can Come From Price Impact",
    label: "DEX Price Impact",
    visualKey: "crypto-dex-price-impact-lab",
    body: "On decentralized exchanges (DEXs), price is set by automated smart contracts based on the reserves in a liquidity pool. When a pool is thin, even a single moderate swap can cause a large price change. This is called price impact. A dramatic DEX wick does not mean the wider market agreed with the move; it only means one buyer hit a thin pool. Check CEX spot to see if the price change is broad.",
    context: {
      keyTerms: [
        { term: "DEX Pool", definition: "A decentralized liquidity pool where smart contracts handle token trades automatically." },
        { term: "Price Impact", definition: "The price change caused by a single transaction relative to the pool size." },
        { term: "Pool Liquidity", definition: "The reserve of tokens held inside a smart contract to enable swapping." },
        { term: "AMM", definition: "Automated Market Maker; the algorithm that automatically sets prices in a liquidity pool based on its reserves." },
        { term: "Slippage", definition: "The price difference between when a swap is requested and when it is completed." }
      ],
      whyThisMatters: "Understanding price impact prevents you from misinterpreting a DEX liquidity pool wick as a major trend change.",
      realLifeExample: "A buyer swaps $50k of a token on Uniswap, causing a 12% wick on the chart due to thin pool liquidity. CEX spot doesn't budge. The wick is just a local pool distortion.",
      commonMistake: "Reading a DEX wick like a deep, institutional order book move.",
      quickNote: "Price impact means one trade can push a thin pool more than the wider market moved."
    }
  },
  {
    type: "visual_intro",
    title: "Exchange Disagreement Is a Warning, Not a Signal",
    label: "Venue Disagreement",
    visualKey: "crypto-exchange-disagreement-lab",
    body: "When a move begins, it does not always start everywhere at once. However, if Exchange A shows a strong price spike while Exchange B shows only a small bounce and Exchange C remains completely flat, the reading is conflicted. This exchange disagreement is a warning to slow down, not a signal to trade. You must monitor whether the move spreads to other exchanges, fades away, or remains isolated.",
    context: {
      keyTerms: [
        { term: "Exchange Disagreement", definition: "A situation where different exchanges print conflicting price movements." },
        { term: "Isolated Spike", definition: "A price jump that happens on only one venue and does not spread." },
        { term: "Spread Risk", definition: "The risk of trading a move that hasn't expanded to other exchanges." },
        { term: "Order Disbalance", definition: "A temporary gap between buy and sell orders on a single venue." },
        { term: "Caution Filter", definition: "A rule that tells the learner to slow down when exchange prices diverge." }
      ],
      whyThisMatters: "Exchange disagreement shows that the move lacks broad consensus, making it highly fragile.",
      realLifeExample: "A token rallies on one minor exchange. You check major exchanges and see they are flat. You wait for others to catch up before drawing a reading, avoiding a false breakout.",
      commonMistake: "Assuming a move is valid because one exchange is printing a large green candle.",
      quickNote: "Disagreement means wait. Consensus is what makes a crypto move clean."
    }
  },
  {
    type: "visual_intro",
    title: "Market Alignment Can Resolve Venue Gaps",
    label: "Venue Alignment",
    visualKey: "crypto-venue-alignment-lab",
    body: "When a price gap forms between exchanges, active traders and market makers work to resolve it. This process is called venue alignment. If a token jumps on one exchange, other venues may catch up as market makers buy on the cheaper exchange and sell on the more expensive one (arbitrage). If the gap does not resolve quickly through convergence, the move may fade, or price may remain unstable.",
    context: {
      keyTerms: [
        { term: "Venue Alignment", definition: "When price differences across exchanges decrease and prices align." },
        { term: "Arbitrage", definition: "The practice of buying on one exchange at a lower price and selling on another at a higher price to capture the difference." },
        { term: "Market Maker", definition: "A participant that provides constant buy and sell orders to keep markets liquid." },
        { term: "Price Convergence", definition: "When prices on different platforms move toward the same value." },
        { term: "Venue Gap", definition: "A price difference for the same asset between two exchanges." }
      ],
      whyThisMatters: "Understanding venue alignment helps you see why price gaps are usually temporary and why unaligned wicks tend to fade.",
      realLifeExample: "A token is priced at $1.00 on Coinbase and spikes to $1.10 on Bybit. Arbitrageurs sell on Bybit and buy on Coinbase. The gap resolves, and the price settles at $1.02.",
      commonMistake: "Thinking a temporary price difference between exchanges is a permanent trend change.",
      quickNote: "Venue gaps usually close. Let the market align before you trust the price."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Context Separates Asset Strength From Market Drift",
    label: "BTC Context Check",
    visualKey: "crypto-btc-context-lab-check",
    body: "Bitcoin is the primary gravity of the crypto market. If an altcoin spikes while Bitcoin is consolidating comfortably, the move has a supportive environment. But if Bitcoin is actively dropping or hitting a major weekly resistance ceiling, an altcoin breakout is highly fragile. In a conflicting BTC environment, you should demand much stronger venue agreement and next-candle proof before calling the move clean.",
    context: {
      keyTerms: [
        { term: "BTC Context", definition: "Bitcoin's general structural location and trend direction." },
        { term: "Market Gravity", definition: "Bitcoin's strong influence over the direction of other cryptocurrencies." },
        { term: "Altcoin Breakout", definition: "An upward price move on an alternative cryptocurrency past a previous high." },
        { term: "Trend Alignment", definition: "When an altcoin and Bitcoin move in the same direction, strengthening the reading." },
        { term: "Context Conflict", definition: "When an altcoin attempts to rise while Bitcoin is falling or hitting resistance." }
      ],
      whyThisMatters: "Bitcoin drives general market sentiment. When Bitcoin rejects resistance, it often drags down even active altcoins.",
      realLifeExample: "SOL breaks its local high, but BTC is rejecting its daily ceiling. Minutes later, BTC drops, and SOL's breakout fails, pulling price back inside.",
      commonMistake: "Trading an altcoin breakout without looking at where BTC is located on the daily map.",
      quickNote: "Check Bitcoin's posture. If the market leader is weak, altcoin moves are highly fragile."
    }
  },
  {
    type: "visual_intro",
    title: "Local Spike vs Broad Move",
    label: "Broad or Local",
    visualKey: "crypto-local-spike-vs-broad-move",
    body: "To read crypto cleanly, you must separate local spikes from broad moves. A local spike is restricted to a single exchange or DEX pool, lacks spot support, occurs when BTC is flat or weak, and has poor hold quality. A broad move appears simultaneously across all major spot venues, matches DEX activity, aligns with a supportive BTC context, and consolidates cleanly above the broken level.",
    context: {
      keyTerms: [
        { term: "Local Spike", definition: "A rapid price jump limited to a single exchange or pool." },
        { term: "Broad Move", definition: "A price trend that is visible and supported across all major exchanges." },
        { term: "Volume Confirmation", definition: "Expanding trade activity that validates price movement." },
        { term: "Market Consensus", definition: "Broad agreement across different venues and market participants." },
        { term: "Structure Validity", definition: "The strength of a chart pattern based on its supporting environment." }
      ],
      whyThisMatters: "Classifying the move quality prevents you from buying local spikes that lack institutional order backing.",
      realLifeExample: "You see two charts. Asset A spikes on Bybit perps only (local spike). Asset B rises on Coinbase spot, Binance spot, Uniswap, and BTC is trending (broad move). You devalue Asset A and study Asset B.",
      commonMistake: "Assuming every fast price pump has the same level of market participation.",
      quickNote: "Local spikes fade. Broad moves have the volume and consensus to hold."
    }
  },
  {
    type: "visual_intro",
    title: "Follow-Through Proves Whether the Spike Survived",
    label: "Post-Spike Proof",
    visualKey: "crypto-post-spike-follow-through",
    body: "The initial breakout candle only shows that orders were executed. Next-candle follow-through proves whether price accepted the new level. If price immediately stalls, wicks back, or fades after a venue spike, the reading remains mixed or unclear. If price holds outside the broken level across major venues and builds a consolidation base, acceptance is confirmed.",
    context: {
      keyTerms: [
        { term: "Follow-Through", definition: "The subsequent candles that show if price sustains its breakout direction." },
        { term: "Hold Quality", definition: "How well price maintains its position outside a broken range." },
        { term: "Fade", definition: "When price quickly reverses and returns to its original starting area." },
        { term: "Acceptance Base", definition: "A cluster of stable candles formed outside a broken boundary." },
        { term: "Drifting Chop", definition: "Sideways, overlapping candle movement with no clear direction." }
      ],
      whyThisMatters: "Waiting for follow-through stops you from entering at the absolute peak of a temporary price spike.",
      realLifeExample: "A token spikes 6% out of its range. You wait. The next candle close returns 5% back inside the range. Because follow-through failed, you label it a false break.",
      commonMistake: "Chasing a breakout candle before it closes, expecting continuation without waiting for hold proof.",
      quickNote: "The spike is the first step. Let the next candles hold the level to confirm the move."
    }
  },
  {
    type: "visual_intro",
    title: "The Cross-Venue Verification Sequence",
    label: "Verification Workflow",
    visualKey: "crypto-cross-venue-verification-sequence",
    body: "A disciplined crypto reading uses a structured cross-venue verification sequence. Before you trust a move, run this workflow: 1. Identify which venue moved first. 2. Check if CEX spot confirms. 3. Check if DEX wicks were caused by thin pool price impact. 4. Verify if major exchanges align. 5. Overlay BTC context. 6. Observe follow-through. 7. Classify the reading as broad, local, fragile, or unclear.",
    context: {
      keyTerms: [
        { term: "Verification Sequence", definition: "A step-by-step checklist to verify the quality of a price move." },
        { term: "Cross-Venue Audit", definition: "Checking multiple exchange feeds to verify a breakout." },
        { term: "Price Impact Filter", definition: "Checking if a move was caused by a single swap in a thin pool." },
        { term: "Macro Alignment", definition: "Cross-checking if the broader market (BTC) supports the move." },
        { term: "Reading Quality Classification", definition: "Grading a chart setup as clear, mixed, or unclear." }
      ],
      whyThisMatters: "Following a sequence keeps you objective and prevents you from reacting emotionally to speed.",
      realLifeExample: "EUR/USD has Forex sessions. Crypto has venue layers. When a token spikes, you check CEX spot, DEX pools, BTC, and follow-through in order before drawing your conclusion.",
      commonMistake: "Analyzing a chart in isolation without running the venue verification checks first.",
      quickNote: "Never read a crypto candle without verifying its source and market alignment."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Broad Move or Local Distortion?",
    label: "Practice Drill",
    visualKey: "crypto-venue-lab-practice-drill",
    body: "Let's put your venue verification skills to the test. A mid-cap token has printed a sharp wick upward on a DEX pool after a large buy. CEX spot shows only a slight uptick. Another major exchange remains flat. BTC is sitting directly below daily resistance and is flat. The next two candles on the DEX return near the original price. How should you read this?",
    taskData: {
      type: "choice_block",
      question: "Based on the verification data, what is the most disciplined crypto reading?",
      options: [
        {
          id: "opt1",
          text: "Clear bullish reading because the DEX wick moved sharply upward.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. A sharp DEX wick is evidence, but it is not enough without broader confirmation."
        },
        {
          id: "opt2",
          text: "Broad market confirmation because one large trade moved the pool.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. One large trade can move a thin pool without proving broad market agreement."
        },
        {
          id: "opt3",
          text: "Local distortion / mixed reading because the move happened mainly in a thin DEX pool, CEX spot did not confirm, other venues stayed flat, BTC context was not supportive, and follow-through failed.",
          isCorrect: true,
          grade: "best",
          feedback: "Correct! This is a local distortion or mixed reading. The move was mostly venue-specific and failed to gain wider support."
        },
        {
          id: "opt4",
          text: "Guaranteed reversal because DEX wicks always reverse.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. DEX wicks do not always reverse. They need context, venue checks, and follow-through."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mid-Cap Token", definition: "A cryptocurrency with medium market capitalization and moderate liquidity." },
        { term: "DEX Pool Wick", definition: "A long wick printed on a decentralized pool chart." },
        { term: "Exchange Neutrality", definition: "When major exchanges show flat, inactive price behavior." },
        { term: "Resistance Hurdle", definition: "A historical price ceiling where sellers are active." },
        { term: "Local Distortion", definition: "Price movement that remains isolated to one thin market." }
      ],
      whyThisMatters: "This drill trains you to verify multiple venue layers before accepting a breakout as valid.",
      realLifeExample: "You see a token spike on Uniswap. You check Coinbase spot, see no volume, and note BTC is weak. You classify it as local distortion and stay safe.",
      commonMistake: "Chasing a DEX spike because a single candle looked fast and strong.",
      quickNote: "Check the venue stack. If the move is isolated and fails to hold, it is a local distortion."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Crypto Needs Cross-Venue Proof",
    label: "Crypto Lab Debrief",
    visualKey: "crypto-venue-lab-debrief",
    body: "Congratulations! You have completed the Crypto Reading Lab. You now understand that crypto price action is not a single chart. It is a fragmented network. A strong crypto reading checks whether a move is broad across major venues, supported by BTC context, not just DEX price impact, and confirmed by next-candle follow-through. By building this cross-venue habit, you protect your capital and read digital asset markets with professional objectivity.",
    context: {
      keyTerms: [
        { term: "Cross-Venue Proof", definition: "Supporting evidence from multiple independent exchanges." },
        { term: "Venue Verification Habit", definition: "The practice of checking other charts before drawing a conclusion." },
        { term: "Market Consensus", definition: "General agreement in price direction across all exchanges." },
        { term: "Reading Integrity", definition: "Maintaining an objective, evidence-based view of price action." },
        { term: "Capital Protection", definition: "Avoiding entries in low-quality or isolated market moves." }
      ],
      whyThisMatters: "Crypto moves can look dramatic. Developing a verification habit protects you from buying the top of temporary venue spikes.",
      realLifeExample: "A Lurnava graduate audits an altcoin breakout. They check CEX spot (confirming), DEX pools (aligned), BTC context (supportive), and wait for a pullback hold. Only then do they verify the reading.",
      commonMistake: "Trusting a crypto breakout because a single chart looked loud and fast.",
      quickNote: "Do not trust a crypto move because one chart is loud. Verify it across the venue stack first."
    }
  }
];
