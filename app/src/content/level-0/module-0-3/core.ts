import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Candle Anatomy",
    visualKey: "candle-anatomy-board",
    label: "Visual First",
    body: "A candle is a time-boxed record. It shows where price opened, how high and low it travelled, and where it closed during that period. It is evidence of participant commitment, not a direct instruction to act.",
    context: {
      keyTerms: [
        { term: "Open", definition: "The price when the time period started." },
        { term: "High", definition: "The highest price reached during the period." },
        { term: "Low", definition: "The lowest price reached during the period." },
        { term: "Close", definition: "The price when the time period ended." },
        { term: "Body", definition: "The area between Open and Close; shows the net result of the period." },
        { term: "Wick", definition: "The lines showing prices that were tested but rejected." },
        { term: "Timeframe", definition: "The specific duration one candle represents (e.g., 1 hour)." }
      ],
      whyThisMatters: "Every part of the candle answers a question. The body shows who 'won' the period. The wicks show where one side tried to push but failed. Without this anatomy, you are just looking at colors.",
      realLifeExample: "A 5-minute candle on EUR/USD (Euro vs. US Dollar). If EUR/USD opens at 1.1000, moves up to 1.1012, drops to 1.0998, and closes at 1.1009, that single candle records the full journey of that 5-minute period.",
      commonMistake: "Thinking one candle is a prediction. Many beginners see a green candle and instantly think 'buy.' But a candle first shows what already happened inside one period — not a guaranteed next move.",
      quickNote: "A candle records a period of market activity."
    }
  },
  {
    type: "concept",
    title: "Candles Are Records, Not Signals",
    visualKey: "record-vs-signal-board",
    label: "Core Principle",
    body: "A candle does not give an instruction. It records movement. A Lurnava learner does not ask, “What does this candle tell me to do?” They ask, “What market behavior did this candle record?”",
    context: {
      keyTerms: [
        { term: "Record", definition: "An objective history of price action during a set window." },
        { term: "Signal Trap", definition: "The mistake of treating a candle shape as an automatic buy/sell instruction." },
        { term: "Market Behavior", definition: "The collective interaction of buyers and sellers recorded by price." }
      ],
      whyThisMatters: "If you treat candles as magic signals, you will lose discipline. If you treat them as records, you gain clarity.",
      realLifeExample: "A fast move after a news release. When a strong candle appears right after major news, the candle is recording aggressive buying or selling during that moment. It is evidence of behavior, not magic.",
      commonMistake: "Treating candles like signal stickers. Beginners often label a candle 'bullish' or 'bearish' and stop thinking. A candle should be read as a market record, not as a one-word decision tool.",
      quickNote: "The candle is the record. The reading comes from context."
    }
  },
  {
    type: "concept",
    title: "Body, Wick, and Close Location",
    visualKey: "candle-evidence-board",
    label: "Candle Mechanics",
    body: "The body records net commitment. Wicks record rejected pressure. The close location shows where the balance of power shifted at the final moment of the record.",
    context: {
      keyTerms: [
        { term: "Rejection", definition: "When price reaches a level but cannot be maintained, leaving a wick." },
        { term: "Commitment", definition: "When price holds a direction and closes there, creating a body." },
        { term: "Balance of Power", definition: "The net result of buyer vs. seller interaction at the close." }
      ],
      whyThisMatters: "Color is a shortcut. Anatomy is the full story.",
      realLifeExample: "The 'Flash Rejection'. In high-speed markets like Gold, you might see price spike up 40 pips (which are the smallest price fractions in Forex) and then immediately crash back down. The resulting long upper wick is the record of that failed attempt to move higher.",
      commonMistake: "Ignoring the close location. A candle can be green but close near its low after a big rejection. If you only look at the color, you miss the fact that the sellers actually took control at the end of the period.",
      quickNote: "Color is not enough. Read the whole record."
    }
  },
  {
    type: "concept",
    title: "Context Changes the Reading",
    visualKey: "context-logic-board",
    label: "Context Logic",
    body: "The same candle shape can mean different things depending on where it forms. A long wick in the middle of a range is just noise; the same wick at a major resistance level is significant evidence.",
    context: {
      keyTerms: [
        { term: "Location", definition: "Where a candle forms relative to previous price structure." },
        { term: "Structure", definition: "The 'landscape' of the market (ranges, trends, levels)." },
        { term: "Contextual Weight", definition: "How much importance is given to a record based on its surroundings." }
      ],
      whyThisMatters: "Pattern memorization is dangerous without location. Context is the judge.",
      realLifeExample: "The 'Resistance Wick'. A rejection wick that forms right at a major historical high has much more 'contextual weight' than a random wick that forms in the middle of a messy sideways range.",
      commonMistake: "Reading candles in a vacuum. A hammer candle at the bottom of a trend is evidence of a potential shift. A hammer candle in the middle of a consolidation is often just noise. Never read the record without checking the location.",
      quickNote: "Same shape. Different context. Different reading."
    }
  },
  {
    type: "concept",
    title: "Many Candle Forms Exist",
    visualKey: "candle-family-preview",
    label: "Pattern Preview",
    body: "There are dozens of named candle patterns. You will study them in detail later. For now, focus on the foundation: every pattern is just a specific type of record. Don't memorize names yet; understand behavior.",
    context: {
      keyTerms: [
        { term: "Candle Formation", definition: "A group of candles that together record a specific market behavior." },
        { term: "Pattern Recognition", definition: "The skill of identifying high-probability behavioral records." }
      ],
      whyThisMatters: "Knowing the name 'Hammer' is useless if you don't understand the rejection it recorded.",
      realLifeExample: "The 'Engulfing' record. Instead of just memorizing the name, see it as a record where the current period’s activity completely overwhelmed and 'erased' the previous period’s progress. It’s a record of a sudden shift in power.",
      commonMistake: "Collecting patterns like stamps. Many learners try to learn 50 patterns and look for them everywhere. It is better to understand the OHLC (Open, High, Low, Close) logic of 3 patterns than to know the names of 30 without understanding the record.",
      quickNote: "Pattern names are vocabulary. Context creates the reading."
    }
  },
  {
    type: "practice",
    title: "Practice Check: Candle or Signal?",
    visualKey: "candle-decision-board",
    label: "Interactive Task",
    body: "A candle is evidence, not a full decision. The disciplined learner reads what the candle recorded, checks where it formed, and waits for context before forming a stronger reading.",
    taskData: {
      type: "choice_block",
      question: "A learner sees a candle with a long lower wick and immediately buys, saying 'It's a reversal signal!' What is the disciplined response?",
      options: [
        { id: "A", text: "The wick guarantees reversal.", isCorrect: false, feedback: "Not correct. A wick can suggest rejection, but it does not guarantee reversal. The learner still needs location, structure, and follow-through." },
        { id: "B", text: "The candle is useful evidence, but it must be checked with location, close, structure, and context.", isCorrect: true, feedback: "Correct. A candle records what happened, but the reading depends on context. The wick may be useful evidence, but it is not a complete conclusion by itself." },
        { id: "C", text: "The candle color is the only thing that matters.", isCorrect: false, feedback: "Not correct. Candle color is only one small part of the record. Body, wick, close location, and context matter." },
        { id: "D", text: "Candle patterns should be followed without review.", isCorrect: false, feedback: "Not correct. Pattern-following without review creates weak reasoning. Lurnava trains observation before conclusion." }
      ]
    },
    context: {
      keyTerms: ["Evidence-First", "Discipline", "Context Check"],
      whyThisMatters: "This prevents 'impulse trading' based on single candle shapes.",
      realLifeExample: "Waiting for the 'Evidence Stack'. A professional sees a bullish candle at a key level but waits to see if the next candle confirms the commitment. They are treating the first candle as a piece of evidence, not a finished signal.",
      commonMistake: "Emotional 'Front-Running'. Seeing a candle starting to look like a 'Hammer' and entering a trade before the candle even closes. The record is not final until the period is over. Anything can happen in the last 10 seconds.",
      quickNote: "A candle starts a question; it doesn't end the analysis."
    }
  },
  {
    type: "summary",
    title: "Module Debrief: Candles Are Records",
    visualKey: "candle-recap-map",
    label: "Module Debrief",
    body: "You have successfully moved from 'Shape Recognition' to 'Record Reading.' You now understand that a candle is a visual summary of participant interaction.\n\n### Your New Foundation:\n\n* [x] Candles are **Records**, not magic signals\n* [x] **Anatomy** (OHLC) provides the evidence\n* [x] **Context** (Location) creates the meaning\n* [x] **Patterns** are just named behavioral records\n\n**Next**: We see how these records interact across different zoom levels: **Timeframes**.",
    context: {
      keyTerms: ["Participant Interaction", "Behavioral Record", "Contextual Foundation"],
      whyThisMatters: "This foundation allows you to understand every future concept in the academy with much higher clarity.",
      realLifeExample: "The Multi-Asset Audit. If you see a strong record on EUR/USD (Euro vs. US Dollar), a disciplined learner checks if the same behavior is recorded on GBP/USD (British Pound vs. US Dollar) or the DXY (US Dollar Index). This turns a single record into a 'cluster' of evidence.",
      commonMistake: "Thinking you are 'done' learning candles. Reading candles is a life-long skill. As you move to higher levels, you will see that every advanced concept (like Order Blocks) is just a more sophisticated way of reading candle records.",
      quickNote: "You are reading behavior, not shapes."
    }
  }
];
