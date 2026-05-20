import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Crypto Is a Fragmented Market",
    label: "Market Structure",
    visualKey: "crypto-venue-map-visual",
    body: "Crypto does not usually behave like one single clean centralized market. The same asset can trade across multiple exchanges, pairs, venues, and derivatives markets.",
    context: {
      keyTerms: [
        { term: "Venue", definition: "A specific location where an asset is traded (e.g., Binance, Uniswap)." },
        { term: "Fragmented Liquidity", definition: "When the total buying/selling power for an asset is split across different locations." },
        { term: "Index Price", definition: "A weighted average price calculated from multiple exchange feeds." }
      ],
      whyThisMatters: "A move that looks strong on one exchange may be weaker, delayed, or unsupported elsewhere. You must understand the source of the price before reading the movement.",
      realLifeExample: "A token moves sharply on one exchange, but other venues show lower activity. A trained learner checks whether the move is broad or venue-specific.",
      commonMistake: "Thinking one crypto chart always represents the whole crypto market.",
      quickNote: "In crypto, first ask: which market am I actually seeing?"
    }
  },
  {
    type: "visual_intro",
    title: "Order Book vs. Liquidity Pool",
    label: "Market Mechanics",
    visualKey: "crypto-market-engines-visual",
    body: "On a Centralized Exchange (CEX), price comes from an order book. On a Decentralized Exchange (DEX), price may come from a liquidity pool powered by an Automated Market Maker (AMM). Both show a chart, but the mechanics behind them are different.",
    context: {
      keyTerms: [
        { term: "Order Book", definition: "A list of buy and sell orders organized by price level." },
        { term: "Liquidity Pool", definition: "A smart contract containing a pair of tokens that allows for decentralized swapping." },
        { term: "AMM", definition: "Automated Market Maker; the algorithm that determines price in a liquidity pool." },
        { term: "Price Impact", definition: "How much a single trade changes the price in a pool." }
      ],
      whyThisMatters: "CEX and DEX markets react differently to orders. A small-cap token might move sharply on a DEX due to thin pool reserves, even if the 'broad market' hasn't changed.",
      realLifeExample: "Swapping tokens on Uniswap (DEX) vs. placing a limit order on Coinbase (CEX). One hits a pool; the other hits an order book.",
      commonMistake: "Reading a DEX pool move like a deep centralized exchange order book.",
      quickNote: "Same chart shape, different market engine."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidity Fragmentation and Price Impact",
    label: "Liquidity Conditions",
    visualKey: "crypto-liquidity-fragmentation-visual",
    body: "Crypto liquidity is split across venues. The same buying or selling action may look calm in one market and dramatic in another because the available depth is different.",
    context: {
      keyTerms: [
        { term: "Market Depth", definition: "The amount of orders available at nearby price levels." },
        { term: "Slippage", definition: "The difference between the expected price and the price where the trade actually executes." },
        { term: "Thin Liquidity", definition: "A state where small orders can cause large price jumps." }
      ],
      whyThisMatters: "Crypto moves can look dramatic when liquidity is thin. A learner must ask whether the move shows broad participation or simply a weak liquidity environment.",
      realLifeExample: "A token jumps 8% on a low-liquidity exchange after a $10k order, while a Tier-1 exchange barely moves. The sharpest chart isn't always the cleanest evidence.",
      commonMistake: "Assuming the biggest move is the most meaningful move.",
      quickNote: "Thin liquidity can exaggerate movement."
    }
  },
  {
    type: "practice",
    title: "Crypto Mini Drill: Broad Move or Venue Noise?",
    label: "Practical Drill",
    visualKey: "crypto-venue-noise-drill-visual",
    body: "A crypto token moves +9% on Exchange A, but only +2% on Exchange B. Other venues show high slippage and mixed feeds. What is the disciplined crypto reading?",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined crypto reading?",
      options: [
        { id: "A", text: "The largest move is automatically the strongest evidence.", isCorrect: false, feedback: "Not correct. The largest move may come from the weakest liquidity, not the strongest evidence." },
        { id: "B", text: "Treat the move as broad confirmation because one chart moved sharply.", isCorrect: false, feedback: "Not correct. One venue moving sharply does not prove broad confirmation. Crypto liquidity can be fragmented." },
        { id: "C", text: "Treat the move carefully; it may be venue-specific noise driven by thin liquidity.", isCorrect: true, feedback: "Correct. A sharp move on one venue can be useful context, but it is not automatically broad market evidence. A Lurnava learner checks whether other venues and liquidity conditions support the move." },
        { id: "D", text: "Ignore liquidity and only follow the chart with the biggest candle.", isCorrect: false, feedback: "Not correct. Ignoring liquidity can turn a noisy venue-specific move into a false reading." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Venue Noise", definition: "Price movement that is specific to one exchange and not reflective of the broader market." },
        { term: "Broad Confirmation", definition: "When multiple venues and market types show the same evidence." }
      ],
      whyThisMatters: "The strongest-looking move is not always the cleanest move. A disciplined reading checks whether the move is supported across venues.",
      quickNote: "Broad evidence beats dramatic noise."
    }
  }
];
