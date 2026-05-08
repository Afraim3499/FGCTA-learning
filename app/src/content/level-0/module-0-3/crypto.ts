import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Crypto Candles Are Venue Records",
    visualKey: "crypto-candle-source-map",
    label: "Venue Fragmentation",
    body: "In Forex, price is smoothed across major banks. In Crypto, price is fragmented across dozens of venues. A single BTC move can look like a clean trend on one exchange and a massive, distorted spike on another. You must never trust a candle until you know which venue produced it and whether it represents real asset ownership (Spot) or synthetic pressure (Perpetual/DEX).",
    context: {
      keyTerms: [
        { term: "Venue", definition: "The market or platform where the price is formed, such as a spot exchange, perpetual exchange, DEX pool, or aggregated feed." },
        { term: "CEX Spot Candle", definition: "A candle built from actual spot trades on a centralized exchange." },
        { term: "Perpetual Candle", definition: "A candle built from perpetual contract price movement, often affected by leverage, funding, and liquidation pressure." },
        { term: "DEX Candle", definition: "A candle built from swaps against liquidity pools on a decentralized exchange." },
        { term: "Aggregated Feed", definition: "A price view built from more than one source or venue." },
        { term: "Index Price", definition: "A reference price built from selected markets, often used to represent a broader price view." },
        { term: "Mark Price", definition: "A risk-management price often used in perpetual markets to reduce manipulation and calculate liquidation conditions." }
      ],
      whyThisMatters: "A crypto candle may not represent the whole market. The same asset can trade across spot exchanges, perpetual venues, DEX pools, and aggregated feeds. If a learner reads one candle without knowing where it came from, they may mistake one venue’s movement for broad market evidence.",
      realLifeExample: "BTC shows a sharp candle on a perpetual exchange, but spot exchanges move less aggressively. A rushed learner treats the candle as full confirmation. A trained learner first asks whether the move is spot-supported, derivatives-driven, or specific to that venue.",
      commonMistake: "Thinking one crypto candle equals the whole crypto market.",
      quickNote: "In crypto, first ask: where did this candle come from?"
    }
  },
  {
    type: "visual_intro",
    title: "The Two Market Engines",
    visualKey: "two-candle-engines-board",
    label: "Spot vs Perpetual",
    body: "Crypto has two primary market engines: the **Spot Engine** (Asset trades) and the **Perpetual Engine** (Contract/Leverage pressure). A spot candle is driven by supply and demand for the asset itself. A perpetual candle is often driven by speculative leverage and forced exits. To read crypto accurately, you must prioritize the Spot Engine as the 'True' record and treat Perp-only moves as potential noise.",
    context: {
      keyTerms: [
        { term: "Spot Market", definition: "A market where the actual crypto asset is bought and sold." },
        { term: "Perpetual Market", definition: "A derivatives market where traders take price exposure without owning the underlying asset." },
        { term: "Leverage", definition: "Using borrowed exposure to control a larger position than the account balance alone." },
        { term: "Funding Pressure", definition: "Pressure created by the cost or imbalance between long and short positions in perpetual markets." },
        { term: "Liquidation Risk", definition: "The risk that leveraged positions are forcibly closed when margin conditions fail." },
        { term: "Contract Price", definition: "The price of a derivative contract, which may not perfectly match spot price at every moment." },
        { term: "Spot Confirmation", definition: "Support from actual spot market movement, not only derivative-market movement." }
      ],
      whyThisMatters: "A spot candle and a perpetual candle can look similar, but the pressure behind them may be different. Spot movement reflects actual asset trading on that venue. Perpetual movement can also reflect leverage, contract positioning, funding pressure, and liquidation risk. A learner who reads them the same way may miss the source of the candle.",
      realLifeExample: "A large green candle forms on a BTC perpetual chart while spot movement is smaller. A rushed learner sees strength. A trained learner checks whether spot markets also support the move or whether the candle is mainly shaped by leveraged contract pressure.",
      commonMistake: "Reading spot and perpetual candles as if they always carry the same meaning.",
      quickNote: "Same shape. Different market engine. Different reading."
    }
  },
  {
    type: "visual_intro",
    title: "Diagnosing Mechanical Wicks",
    visualKey: "wick-source-diagnostic-board",
    label: "Wick Diagnosis",
    body: "Crypto wicks are often 'mechanical anomalies' rather than price rejections. A massive wick can be caused by **Thin Liquidity** (a small order hitting an empty book) or a **Liquidation Cascade** (forced exits triggering each other). Before assuming a wick shows 'rejection,' you must diagnose its source. If there is no corresponding spot volume, the wick is likely mechanical noise.",
    context: {
      keyTerms: [
        { term: "Wick", definition: "The part of a candle showing where price travelled beyond the body but did not close there." },
        { term: "Liquidation Wick", definition: "A wick that may be shaped by forced closing of leveraged positions." },
        { term: "Thin Liquidity", definition: "A condition where fewer available orders allow price to move quickly and sharply." },
        { term: "Stop Cascade", definition: "A chain reaction where triggered exits accelerate price movement." },
        { term: "Venue-Specific Print", definition: "A candle movement that appears strongly on one venue but is not broadly confirmed elsewhere." },
        { term: "Clean Rejection", definition: "A possible reading where price tests an area and fails to hold, but only when context supports that interpretation." },
        { term: "Mechanical Movement", definition: "Movement shaped heavily by market mechanics such as liquidations, thin liquidity, forced exits, or venue-specific pressure." }
      ],
      whyThisMatters: "Crypto wicks can be dramatic, but dramatic does not mean clean. A long wick may show rejection, but it may also come from thin liquidity, liquidation pressure, or a venue-specific spike. The learner must diagnose what created the wick before trusting it as evidence.",
      realLifeExample: "A token drops quickly, leaves a long lower wick, and recovers. A rushed learner calls it strong rejection. A trained learner checks whether the wick came from spot demand, liquidation pressure, thin liquidity, or only one noisy venue.",
      commonMistake: "Calling every long crypto wick “rejection” without checking liquidity, leverage, and venue confirmation.",
      quickNote: "In crypto, diagnose the wick before reading the candle."
    }
  },
  {
    type: "practice",
    title: "Drill: Real Move or Mechanical Noise?",
    visualKey: "crypto-candle-decision-board",
    label: "Disciplined Reading",
    body: "Observe the verification board. We have a sudden spike on a Perpetual venue. Use the diagnostic checklist to determine if this move represents a real structural shift or mechanical noise.",
    taskData: {
      type: "choice_block",
      question: "Based on the verification data (Bybit Perp source, Weak Spot Confirmation, High Vol Delta), what is the most disciplined reading of this spike?",
      options: [
        { id: "opt1", text: "This is a bullish breakout. The high volume confirms strong buyer intent.", isCorrect: false, feedback: "Incorrect. The 'High Vol Delta' is coming from liquidations, not buyers." },
        { id: "opt2", text: "This is mechanical noise. The lack of spot confirmation and presence of liquidations suggest a temporary spike.", isCorrect: true, feedback: "Correct. You correctly identified that the move lacks 'Real Evidence' from the Spot Engine." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mechanical Candle", definition: "A candle shaped heavily by market mechanics such as liquidations, thin liquidity, spread, or venue-specific pressure." },
        { term: "Spot Confirmation", definition: "Support from actual spot market movement." },
        { term: "Cross-Venue Confirmation", definition: "Evidence that the move appears across multiple markets or venues." },
        { term: "Liquidation Pressure", definition: "Forced closing of leveraged positions that can accelerate movement." },
        { term: "Venue-Specific Movement", definition: "Movement that is strong on one venue but weak or absent elsewhere." },
        { term: "Dramatic Candle", definition: "A candle that looks visually strong but may not be reliable without context." },
        { term: "Incomplete Evidence", definition: "A market clue that needs more confirmation before becoming a stronger reading." }
      ],
      whyThisMatters: "Crypto creates dramatic candles often. The learner’s job is not to be impressed by candle size. The learner’s job is to identify whether the movement is broadly supported or mechanically distorted by venue, leverage, liquidity, or liquidation pressure.",
      realLifeExample: "A perpetual chart prints a large wick during a liquidation event, while spot charts move less. A rushed learner treats the candle as clean rejection. A trained learner classifies it as incomplete until spot movement, liquidity, and cross-venue confirmation are reviewed.",
      commonMistake: "Trusting the most dramatic crypto candle without checking what created it.",
      quickNote: "In crypto, candle shape plus market mechanics creates the reading."
    }
  }
];
