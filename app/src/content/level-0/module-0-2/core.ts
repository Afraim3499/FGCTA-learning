import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "What a Market Really Is",
    label: "The Core",
    visualKey: "market-mechanism",
    body: "A market is not a prediction machine. It is a place where buy orders and sell orders meet. The chart records those interactions after they happen.",
    context: {
      keyTerms: [
        { term: "Market", definition: "A place or system where buyers and sellers exchange assets." },
        { term: "Buyer", definition: "A participant willing to pay a price to receive an asset." },
        { term: "Seller", definition: "A participant willing to accept a price to give up an asset." },
        { term: "Order", definition: "An instruction to buy or sell under certain conditions." },
        { term: "Matching engine", definition: "The system that matches compatible buy and sell orders." },
        { term: "Transaction", definition: "The completed exchange between a buyer and a seller." },
        { term: "Price chart", definition: "A visual record of completed market interactions over time." }
      ],
      whyThisMatters: "Many learners treat a chart like a signal machine. But a chart is a record of transactions. If the learner understands that every candle comes from buyers, sellers, orders, and matching, the chart becomes easier to read as behavior instead of mystery.",
      realLifeExample: "In a marketplace, one person wants to buy a phone and another wants to sell it. When they agree on a price, a transaction happens. Financial markets work differently in scale and speed, but the basic idea is still buyers and sellers meeting through orders.",
      commonMistake: "Thinking the chart tells the future. The chart records what already happened; the learner’s job is to read the behavior and context behind that record.",
      quickNote: "A chart is not magic. It is a record of interaction."
    }
  },
  {
    type: "visual_intro",
    title: "The Meeting of Orders",
    label: "Mechanics",
    visualKey: "order-matching",
    body: "Price changes when orders meet at new levels. A chart does not move by magic; it updates because transactions are happening between buyers and sellers.",
    context: {
      keyTerms: [
        { term: "Bid", definition: "The price a buyer is willing to pay." },
        { term: "Ask", definition: "The price a seller is willing to accept." },
        { term: "Spread", definition: "The gap between the best bid and the best ask." },
        { term: "Order", definition: "An instruction to buy or sell under certain conditions." },
        { term: "Transaction", definition: "A completed exchange between a buyer and a seller." },
        { term: "Aggressive buyer", definition: "A buyer willing to accept the seller’s price to get filled sooner." },
        { term: "Aggressive seller", definition: "A seller willing to accept the buyer’s price to sell sooner." },
        { term: "Liquidity", definition: "Available orders in the market that can absorb buying or selling." }
      ],
      whyThisMatters: "Many learners look at price movement as if it appears by itself. In reality, price updates because orders are being matched. Understanding this helps the learner read candles as records of buyer-seller interaction, not random motion.",
      realLifeExample: "A seller is willing to sell at 100.10. A buyer wants the asset now and accepts that price. A transaction happens at 100.10, and the chart records the result. If buyers keep accepting higher asks, price may print higher.",
      commonMistake: "Thinking price moves because a candle “wants” to go somewhere. Candles only record transactions that already happened.",
      quickNote: "Price moves when orders meet."
    }
  },
  {
    type: "visual_intro",
    title: "The Three Pillars",
    label: "Market Mechanics",
    visualKey: "microstructure-board",
    body: "Orders are the instructions. Liquidity is the available order depth. Spread is the gap between the best buyer and seller prices. Together, they shape how clean or noisy a market can feel.",
    context: {
      keyTerms: [
        { term: "Bid", definition: "The price a buyer is willing to pay." },
        { term: "Ask", definition: "The price a seller is willing to accept." },
        { term: "Spread", definition: "The gap between the best bid and the best ask." },
        { term: "Liquidity", definition: "Available orders that can absorb buying or selling." },
        { term: "Market Order", definition: "An order that prioritizes getting filled now." },
        { term: "Limit Order", definition: "An order that sets a specific price condition." },
        { term: "Order Book", definition: "A list of buy and sell orders waiting in the market." }
      ],
      whyThisMatters: "A chart can look confusing if the learner does not understand what sits behind price movement. Spread, liquidity, and orders explain why some moves look clean while others look noisy, jumpy, or hard to read.",
      realLifeExample: "If there are many buy and sell orders near the current price, movement may appear smoother. If there are few available orders, price may jump more easily because there is less liquidity to absorb activity.",
      commonMistake: "Thinking price moves smoothly just because the chart line looks continuous. Under the chart, price is moving through available orders.",
      quickNote: "Spread, liquidity, and orders are the market’s working parts."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidity in Action",
    label: "Example",
    visualKey: "liquidity-comparison",
    body: "Liquidity affects how far price must travel to complete transactions. A market with more nearby orders can absorb activity more smoothly; a thin market may move sharply from the same action.",
    context: {
      keyTerms: [
        { term: "Liquidity", definition: "The availability of orders that can absorb buying or selling action." },
        { term: "Illiquid Market", definition: "A market with few available orders and large gaps between prices." },
        { term: "Order Depth", definition: "The volume of orders stacked at various price levels." },
        { term: "Matching", definition: "The process of pairing a buyer with a seller." },
        { term: "Slippage", definition: "The difference between the expected price and the actual execution price." },
        { term: "Price Movement", definition: "The result of orders consuming liquidity across different levels." }
      ],
      whyThisMatters: "Understanding liquidity explains why the same action can cause different results. In a dense (liquid) market, price is stable. In a sparse (illiquid) market, price is volatile and can jump unexpectedly.",
      realLifeExample: "Buying a common item at a large supermarket (liquid) vs. a rare collectible at a small auction (illiquid). In the supermarket, the price doesn't change because you bought one. In the auction, your bid can move the price significantly.",
      commonMistake: "Expecting price to move with the same 'weight' in every market. Different assets have different liquidity depths.",
      quickNote: "Same buy order. Different order depth. Different price movement."
    }
  },
  {
    type: "visual_intro",
    title: "The Intent Rule",
    label: "Logic",
    visualKey: "intent-logic",
    body: "A pattern is not the cause. It is the visible result of orders and pressure. A Lurnava learner studies the behavior behind the pattern, not the shape alone.",
    context: {
      keyTerms: [
        { term: "Intent", definition: "The visible purpose behind market activity, shown through buying, selling, defending, or exiting." },
        { term: "Pattern", definition: "A shape on the chart formed after price has moved." },
        { term: "Pressure", definition: "The effect created when one side becomes more aggressive or persistent." },
        { term: "Participant", definition: "A buyer, seller, algorithm, or institution interacting with the market." },
        { term: "Symptom", definition: "A visible sign of something deeper happening underneath." },
        { term: "Order flow", definition: "The movement and matching of buy and sell orders over time." }
      ],
      whyThisMatters: "Many learners memorize chart patterns as if the shape itself controls price. This creates shallow reading. Lurnava trains the learner to ask what behavior may have created the pattern.",
      realLifeExample: "A chart forms a breakout shape. A rushed learner sees the shape and assumes the move is valid. A trained learner asks whether buyers actually showed pressure, or whether sellers were simply absent.",
      commonMistake: "Thinking a pattern is powerful by itself, without checking the market behavior that formed it.",
      quickNote: "The shape is the symptom. The behavior is the lesson."
    }
  },
  {
    type: "visual_intro",
    title: "How to Approach the Chart",
    label: "Mindset",
    visualKey: "mindset-comparison",
    body: "Do not “guess” based on what the chart looks like. Observe what buyers, sellers, and pressure are actually doing.",
    context: {
      keyTerms: [
        { term: "Observation", definition: "The act of gathering evidence from market behavior before forming a conclusion." },
        { term: "Guessing", definition: "Forming an opinion based on chart appearance without underlying evidence." },
        { term: "Evidence", definition: "Visible signs of market pressure, such as buyers hitting the Ask or sellers being absorbed." },
        { term: "Buy pressure", definition: "The result of buyers being more aggressive than sellers at a specific level." },
        { term: "Ask", definition: "The price level where sellers are waiting to be matched." },
        { term: "Intent", definition: "The visible purpose behind price movement." }
      ],
      whyThisMatters: "Many beginners form opinions from chart appearance alone. Lurnava trains the learner to build conclusions from visible market behavior.",
      realLifeExample: "A chart rises quickly. A guesser buys because the move “looks strong.” An observer checks whether buyers are actually pressing through seller levels or whether the move is weak and unsupported.",
      commonMistake: "Mistaking visual direction for confirmed evidence.",
      quickNote: "Appearance is not proof. Read behavior, pressure, and intent."
    }
  },
  {
    type: "practice",
    title: "Practice Check",
    label: "Interactive Task",
    visualKey: "transaction-mechanism-mini",
    body: "A buyer is willing to pay a price, and a seller is willing to accept that price. What has to happen for this to become a market transaction?",
    taskData: {
      type: "choice_block",
      question: "Which explanation is correct?",
      options: [
        { id: "A", text: "A transaction happens when the chart forms a special pattern.", isCorrect: false, feedback: "Not correct. A pattern does not create a transaction. Patterns appear after price has moved; transactions come from matched buy and sell orders." },
        { id: "B", text: "A transaction happens when compatible buy and sell orders are matched at a price.", isCorrect: true, feedback: "Correct. A transaction happens when compatible buy and sell orders are matched at a price. The chart then records that completed exchange." },
        { id: "C", text: "A transaction happens when the computer randomly decides price should move.", isCorrect: false, feedback: "Not correct. The computer does not randomly decide that price should move. A matching engine connects compatible orders. Price updates because transactions happen." },
        { id: "D", text: "A transaction happens automatically every few seconds regardless of orders.", isCorrect: false, feedback: "Not correct. Transactions do not happen automatically just because time passes. They happen when orders are matched." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Transaction", definition: "A completed exchange between buyer and seller through matched orders." },
        { term: "Matched order", definition: "A buy order and sell order that can execute at a compatible price." },
        { term: "Buyer", definition: "A participant willing to pay for an asset." },
        { term: "Seller", definition: "A participant willing to give up an asset for a price." },
        { term: "Chart record", definition: "The visual record of completed market interactions." }
      ],
      whyThisMatters: "If a learner thinks transactions happen because of patterns, randomness, or time, the chart feels mysterious. Understanding matched orders makes price movement easier to read as market behavior.",
      commonMistake: "Thinking the chart creates transactions. The chart only records transactions after they happen.",
      quickNote: "No matched orders, no transaction."
    }
  },
  {
    type: "summary",
    title: "Module Debrief: The Machine Behind the Chart",
    label: "Module Debrief",
    visualKey: "market-mechanism-recap-visual",
    body: "You now understand that a market is not a signal machine. It is a system of participants, orders, matching, transactions, liquidity, and visible chart records.\n\n### You should now be able to explain:\n\n* [x] What a market really is\n* [x] How buyers and sellers create transactions\n* [x] Why bid, ask, spread, orders, and liquidity matter\n* [x] Why price can move differently in liquid and illiquid conditions\n* [x] Why patterns are symptoms of behavior, not magic causes\n* [x] How an observer approaches a chart differently from a guesser\n\n**Next: Candles.** Now that you understand that charts record transactions, the next module shows how those transactions become candle bodies, wicks, and market structure.",
    context: {
      keyTerms: [
        { term: "Matching system", definition: "The mechanism that connects buyers and sellers." },
        { term: "Visual record", definition: "What you see on the chart (candles, patterns)." },
        { term: "Synthesis", definition: "Combining individual concepts into a complete mental model." }
      ],
      whyThisMatters: "The chart is the record. The market is the machine underneath. Mastery comes from reading the machine.",
      quickNote: "You are no longer reading shapes. You are reading behavior."
    }
  }
];
