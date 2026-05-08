import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Forex Candles Are Quote Records",
    visualKey: "forex-candle-quote-record-board",
    label: "Forex Candle Foundation",
    body: "A Forex candle is a time-boxed quote record. It shows where the quoted price opened, how high and low it travelled, and where it closed during that selected period. It is evidence from a price feed, not a universal signal.",
    context: {
      keyTerms: [
        { term: "Forex Candle", definition: "A visual record of quoted price action for a currency pair." },
        { term: "Currency Pair", definition: "The two currencies being exchanged, defining the quote value." },
        { term: "Quote Feed", definition: "The stream of price data provided by a broker or liquidity provider." },
        { term: "OHLC", definition: "Open, High, Low, Close; the four data points defining a candle." },
        { term: "Pip", definition: "Percentage in Point; the standard unit of price change in Forex." },
        { term: "Timeframe", definition: "The duration of activity recorded by a single candle." }
      ],
      whyThisMatters: "A learner may see a candle and assume it represents the entire Forex market. In reality, the candle is a record of quoted movement in a specific pair, timeframe, and platform environment. That context matters before interpretation.",
      realLifeExample: "A 15-minute EUR/USD candle opens at 1.0850, moves to 1.0872, drops to 1.0844, and closes at 1.0865. The candle records that quote movement in pips during that 15-minute window.",
      commonMistake: "Thinking every Forex candle is a complete picture of the whole global market instead of a record from a specific quote environment.",
      quickNote: "A Forex candle is a quote record first."
    }
  },
  {
    type: "visual_intro",
    title: "Pip Range, Body, and Wick",
    visualKey: "forex-pip-candle-board",
    label: "Forex Candle Mechanics",
    body: "In Forex, candle size should be read in pips and context. A large-looking candle on one pair may be normal, while the same pip movement on another pair may be unusual. Read the body, wick, close, and range together.",
    context: {
      keyTerms: [
        { term: "Pip Range", definition: "The total distance from High to Low measured in pips." },
        { term: "Body Size", definition: "The distance between Open and Close, showing net commitment." },
        { term: "Upper Wick", definition: "Price movement above the body that was rejected." },
        { term: "Lower Wick", definition: "Price movement below the body that was rejected." },
        { term: "Close Location", definition: "Where price ended relative to the candle's range." },
        { term: "Pair Behavior", definition: "The typical movement characteristics of a specific currency pair." },
        { term: "Volatility", definition: "The degree of variation in trading price over time." }
      ],
      whyThisMatters: "Forex learners often judge candles by appearance only. But a candle’s size must be understood in pips, timeframe, and pair behavior. Without that, the learner may overreact to normal movement or ignore important movement.",
      realLifeExample: "A 15-pip candle on EUR/USD during a quiet period may stand out. The same 15-pip movement on a more volatile pair or during an active session may be ordinary. The pip size needs context.",
      commonMistake: "Comparing candle size visually without checking how many pips moved, what pair it happened on, and what timeframe it belongs to.",
      quickNote: "In Forex, measure the candle before judging it."
    }
  },
  {
    type: "visual_intro",
    title: "Spread and Session Can Distort Candles",
    visualKey: "forex-distorted-candle-board",
    label: "Quote Quality",
    body: "A Forex candle should not be read without quote condition. During thin liquidity, rollover, or unstable spread, a wick may reflect poor quote quality as much as clean market intent. First check whether the candle formed in a reliable environment.",
    context: {
      keyTerms: [
        { term: "Spread", definition: "The difference between the bid and ask price." },
        { term: "Quote Quality", definition: "How accurately the candle record reflects actual market depth." },
        { term: "Rollover", definition: "The period when positions are carried over to the next day, often featuring thin liquidity." },
        { term: "Thin Liquidity", definition: "A state where few participants are active, causing unstable prices." },
        { term: "Session Context", definition: "The specific trading session (e.g., London, NY) the candle formed in." },
        { term: "Distorted Candle", definition: "A candle record impacted by technical quote noise rather than market intent." }
      ],
      whyThisMatters: "Some Forex candles look dramatic because the market condition is weak, not because the move is clean. A learner who ignores spread and session context may mistake quote noise for strong evidence.",
      realLifeExample: "A long wick appears near a quiet session or rollover period while spread is wider than usual. A rushed learner calls it rejection. A trained learner checks whether the wick came from clean price movement or weak quote conditions.",
      commonMistake: "Treating every Forex wick as meaningful rejection without checking spread, session, and liquidity condition.",
      quickNote: "A candle is only as useful as the condition it formed in."
    }
  },
  {
    type: "practice",
    title: "Forex Mini Drill: Clean Candle or Quote Noise?",
    visualKey: "forex-candle-decision-board",
    label: "Practical Drill",
    body: "A learner sees a long upper wick on EUR/USD and immediately says, 'This is rejection, so price should drop.' The candle formed during a low-liquidity period and the spread was wider than usual.\n\n**What is the disciplined Forex candle reading?**",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined Forex candle reading?",
      options: [
        { id: "A", text: "The long upper wick guarantees rejection, so the reading is complete.", isCorrect: false, feedback: "Not correct. A wick does not guarantee rejection. The candle formed in weak quote conditions, so the learner needs more context before forming a strong reading." },
        { id: "B", text: "The candle should be treated carefully because spread and low-liquidity conditions may have distorted the wick.", isCorrect: true, feedback: "Correct. A long wick can be useful evidence, but in Forex it must be checked against spread, liquidity, session, and close location. Weak quote conditions can make a candle look more meaningful than it is." },
        { id: "C", text: "The candle color is the only thing that matters.", isCorrect: false, feedback: "Not correct. Candle color is only one part of the record. Wick, body, close location, pip range, spread, and session context matter." },
        { id: "D", text: "Forex candles do not need session or spread context.", isCorrect: false, feedback: "Not correct. Forex candles need quote context. Spread and session can change the quality of the candle record." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Clean Candle", definition: "A candle record formed in a high-liquidity, stable spread environment." },
        { term: "Quote Noise", definition: "Price data that does not reflect meaningful market interaction." },
        { term: "Spread Widening", definition: "When the gap between buy and sell prices increases, usually in low liquidity." },
        { term: "Low-Liquidity Period", definition: "A time when few orders are in the market (e.g., session gaps)." },
        { term: "Confirmation", definition: "The requirement for follow-through before trusting a piece of evidence." },
        { term: "Candle Context", definition: "The combination of timeframe, session, and spread surrounding a record." }
      ],
      whyThisMatters: "Forex candles can look clean even when the quote environment is weak. A learner who checks spread, session, and pip range before interpreting the candle builds stronger reading discipline.",
      realLifeExample: "A long wick appears on EUR/USD during a quiet period with wider spread. Instead of calling it rejection instantly, a trained learner treats the candle as incomplete evidence until the quote condition and follow-through are checked.",
      commonMistake: "Turning a Forex wick into a full market conclusion without checking whether the candle formed in clean conditions.",
      quickNote: "In Forex, candle shape plus quote condition creates the reading."
    }
  }
];
