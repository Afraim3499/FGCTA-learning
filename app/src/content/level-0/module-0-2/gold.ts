import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Gold Is More Than One Chart",
    label: "Market Structure",
    visualKey: "gold-market-map-visual",
    body: "XAU/USD (Gold vs. United States Dollar currency pair) is only one visible window. The gold market underneath is multi-layered, consisting of London OTC (Over-The-Counter: trading directly between counterparties without a central exchange) spot, COMEX (Commodity Exchange) futures, benchmark auctions, and physical bullion.",
    context: {
      keyTerms: [
        { term: "London OTC", definition: "The primary spot market for gold, where trading is bilateral." },
        { term: "Benchmark Price", definition: "The global reference price set during daily LBMA (London Bullion Market Association) auctions." },
        { term: "Futures Market", definition: "A standardized exchange where contracts for future delivery are traded." }
      ],
      whyThisMatters: "Gold can appear as one simple chart, but the market underneath is layered. Missing the source of the move (spot, futures, or benchmark) can lead to a shallow reading.",
      realLifeExample: "A fast XAU/USD candle appears during a macro event. A trained learner asks if futures activity, spot liquidity, or benchmark timing is influencing the price.",
      commonMistake: "Thinking XAU/USD is the entire gold market.",
      quickNote: "Gold is one asset, but not one simple market."
    }
  },
  {
    type: "visual_intro",
    title: "London OTC: Where Gold Trades Bilaterally",
    label: "OTC Mechanics",
    visualKey: "gold-otc-bilateral-visual",
    body: "A major part of gold trading happens OTC: direct counterparty-to-counterparty trading. In the 'Loco London' market, bullion settles through London accounts rather than a public exchange.",
    context: {
      keyTerms: [
        { term: "Loco London", definition: "Gold bullion physically held in London vaults to underpin OTC trading activity." },
        { term: "Allocated Account", definition: "An account where the customer owns specific physical bars." },
        { term: "Unallocated Account", definition: "The standard settlement method where the customer has a general entitlement to metal." }
      ],
      whyThisMatters: "Gold is not always a transparent public order book. Bilateral OTC trades can move the market without the retail learner seeing the orders themselves.",
      realLifeExample: "A large institution settles a massive gold swap directly with a dealer. The move appears on the chart, but the 'matching' happened privately.",
      commonMistake: "Imagining London gold trading as one transparent public order book.",
      quickNote: "OTC Gold is negotiated privately, not displayed publicly."
    }
  },
  {
    type: "visual_intro",
    title: "COMEX Futures: The Paper Contract Layer",
    label: "Futures Mechanics",
    visualKey: "gold-futures-mechanics-visual",
    body: "COMEX Gold futures (GC) are standardized exchange-traded contracts. While they aren't physical gold, they are a primary engine for price discovery and risk management.",
    context: {
      keyTerms: [
        { term: "Futures Contract", definition: "A standardized agreement to buy or sell gold at a future date." },
        { term: "Standardized", definition: "Contracts with fixed sizes and quality rules for easy trading." },
        { term: "Price Discovery", definition: "The process by which market participants arrive at a price through exchange trading." }
      ],
      whyThisMatters: "XAU/USD often reacts to futures activity because futures concentrate large institutional expectations. If futures are moving fast, the retail quote will follow.",
      realLifeExample: "During a macro shock, futures volume spikes. A rushed learner sees a fast candle; a trained learner knows futures positioning is driving the speed.",
      commonMistake: "Thinking Gold futures and physical gold are the same thing.",
      quickNote: "Futures are contracts; physical is metal. Both move the chart."
    }
  },
  {
    type: "practice",
    title: "Gold Mini Drill: Which Market Layer Is Moving?",
    label: "Practical Drill",
    visualKey: "gold-market-layer-drill-visual",
    body: "Gold moves sharply near a major session window. You see a fast candle on XAU/USD. You haven't checked futures activity, spot liquidity, or benchmark timing. What is the disciplined Gold reading?",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined Gold reading?",
      options: [
        { id: "A", text: "Treat the candle as complete evidence because Gold moved fast.", isCorrect: false, feedback: "Not correct. Speed is not complete evidence. A fast Gold candle may come from several market layers (futures, spot, or benchmark)." },
        { id: "B", text: "Assume the move is purely physical gold demand without checking other layers.", isCorrect: false, feedback: "Not correct. Gold movement is not always purely physical. Futures, OTC activity, and benchmarks all shape the visible price." },
        { id: "C", text: "Classify the move as incomplete until you check the market layer behind it.", isCorrect: true, feedback: "Correct. Gold moves through connected layers: OTC spot, futures, benchmarks, and retail quotes. A Lurnava learner verifies the source before trusting the move." },
        { id: "D", text: "Ignore market structure because Gold is only about candle direction.", isCorrect: false, feedback: "Not correct. Market structure matters because the chart is only a visible record of deeper activity." }
      ]
    },
    context: {
      whyThisMatters: "A Lurnava learner checks the market layer to avoid being trapped by noisy quote conditions or single-layer spikes."
    }
  }
];
