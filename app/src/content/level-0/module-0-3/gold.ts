import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Gold Candles Are Volatility Records",
    visualKey: "gold-candle-context-board",
    label: "Gold Candle Foundation",
    body: "A Gold candle records XAU/USD movement during one selected period. But in Gold, the candle’s quality depends heavily on volatility, session activity, USD/rate context, news pressure, and liquidity. Read the candle and the environment together.",
    context: {
      keyTerms: [
        { term: "XAU/USD Candle", definition: "A candle that records Gold priced against the US Dollar during one selected timeframe." },
        { term: "Volatility", definition: "How quickly and sharply price moves." },
        { term: "Session Activity", definition: "The market time window in which the candle forms, such as Asia, London, or New York." },
        { term: "USD Context", definition: "The broader strength or weakness of the US Dollar (USD), which can influence Gold pricing." },
        { term: "Rate Expectations", definition: "Market expectations around interest rates, which can affect demand for Gold." },
        { term: "News Window", definition: "A period around major economic events where candles may become unusually fast or unstable." },
        { term: "Liquidity Condition", definition: "How clean or thin the market environment is when the candle forms." }
      ],
      whyThisMatters: "Gold candles can look powerful because Gold moves quickly. But speed alone does not make the candle reliable. A learner must know whether the candle formed in a clean environment or during unstable volatility.",
      realLifeExample: "Gold forms a large candle during New York session after major economic data. A rushed learner sees only the candle size. A trained learner checks whether the move was supported by USD context, rate expectations, liquidity, and the candle close.",
      commonMistake: "Judging a Gold candle only by size or color without checking the environment that created it.",
      quickNote: "In Gold, candle quality depends on context."
    }
  },
  {
    type: "visual_intro",
    title: "News Candle vs. Structured Candle",
    visualKey: "gold-candle-quality-board",
    label: "Candle Quality",
    body: "A Gold news candle may record real activity, but it can also record unstable repricing. A structured candle is easier to read when the close, level, follow-through, and context support the move.",
    context: {
      keyTerms: [
        { term: "News Candle", definition: "A candle formed during or near a major economic event." },
        { term: "Structured Candle", definition: "A candle whose body, close, location, and follow-through create clearer evidence." },
        { term: "Follow-Through", definition: "What price does after the candle closes." },
        { term: "Close Location", definition: "Where the candle finishes inside its full high-to-low range." },
        { term: "Event Volatility", definition: "Fast movement caused by major data, announcements, or macro repricing." },
        { term: "Repricing", definition: "A fast adjustment in price when the market reacts to new information." }
      ],
      whyThisMatters: "Many Gold learners get trapped by large candles during news. The candle may look important, but if it forms inside unstable conditions, the learner must wait for structure before forming a strong reading.",
      realLifeExample: "Gold spikes after a major data release, leaves a long wick, and closes in the middle of the range. A rushed learner calls direction immediately. A trained learner waits to see whether the next candles confirm structure.",
      commonMistake: "Thinking a large Gold candle during news automatically gives a clear reading.",
      quickNote: "A dramatic candle is not always a clean candle."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Wick Diagnosis",
    visualKey: "gold-wick-diagnostic-board",
    label: "Wick Mechanics",
    body: "A Gold wick can suggest rejection, but it can also come from a liquidity sweep, news spike, or thin market condition. A Lurnava learner diagnoses the wick before trusting it as evidence.",
    context: {
      keyTerms: [
        { term: "Wick", definition: "The part of a candle showing where price travelled beyond the body but did not close there." },
        { term: "Clean Rejection", definition: "A possible reading where price tests an area and fails to hold, supported by context." },
        { term: "Liquidity Sweep", definition: "A move beyond a visible area that may trigger orders before price returns." },
        { term: "News Spike", definition: "A fast candle movement caused by major data or market repricing." },
        { term: "Thin Liquidity", definition: "A condition where fewer available orders make price easier to move." },
        { term: "Follow-Through", definition: "The price behavior after the wick forms." },
        { term: "Wick Diagnosis", definition: "The process of identifying what may have created the wick." }
      ],
      whyThisMatters: "Gold often creates dramatic wicks. A learner who calls every wick rejection will misread many candles. The correct habit is to ask what created the wick and whether the next price behavior supports the reading.",
      realLifeExample: "Gold pushes above a previous high, leaves a long upper wick, and falls back. A rushed learner says “reversal.” A trained learner checks whether it was clean rejection, a liquidity sweep, news volatility, or a thin-liquidity spike.",
      commonMistake: "Treating every long Gold wick as a confirmed reversal signal.",
      quickNote: "A Gold wick is a clue, not a verdict."
    }
  },
  {
    type: "practice",
    title: "Gold Mini Drill: Clean Rejection or Event Noise?",
    visualKey: "gold-candle-decision-board",
    label: "Practical Drill",
    body: "Observe the decision board. We have a sudden spike on XAU/USD (Gold vs. US Dollar) during a high-volatility news window. Use the checklist to determine if this move represents a real structural breakout or mechanical noise.\n\n**What is the disciplined Gold candle reading?**",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined Gold reading?",
      options: [
        { id: "A", text: "The upper wick guarantees rejection, so the reading is complete.", isCorrect: false, feedback: "Not correct. A wick does not guarantee rejection. In Gold, a wick can come from news volatility, liquidity sweep, or unstable movement." },
        { id: "B", text: "Treat the candle carefully because it formed during unstable conditions and needs context, close-location review, and follow-through.", isCorrect: true, feedback: "Correct. A Gold wick during a news window can be useful evidence, but it is not complete by itself. The learner must check close location, context, liquidity, and follow-through before forming a stronger reading." },
        { id: "C", text: "The candle is large, so it must be high-quality evidence.", isCorrect: false, feedback: "Not correct. A large candle is not automatically high-quality evidence. Gold can move dramatically and still remain unclear." },
        { id: "D", text: "Ignore the news window and read only the candle shape.", isCorrect: false, feedback: "Not correct. News context matters. A candle formed during an unstable event window needs extra caution." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Event Noise", definition: "Unstable movement created around major economic or market events." },
        { term: "Clean Rejection", definition: "A possible reading where price tests an area and fails to hold, supported by structure and follow-through." },
        { term: "Close-Location Review", definition: "Checking where the candle closed inside its full range." },
        { term: "Follow-Through", definition: "What price does after the candle closes." },
        { term: "Unclear Condition", definition: "A market condition where the candle does not provide enough evidence yet." },
        { term: "News Window", definition: "The time around major data or announcements when Gold movement may become unstable." },
        { term: "Structure Confirmation", definition: "Additional chart behavior that supports the reading." }
      ],
      whyThisMatters: "Gold often creates candles that look decisive but are actually unstable. A learner who can label unclear conditions honestly will avoid forcing weak readings from dramatic candles.",
      realLifeExample: "A gold candle (XAU/USD - Gold vs. US Dollar) opens at $2,000, spikes to $2,020 during a major news window, drops to $1,980, and closes at $1,995. The candle records that massive price movement in dollars, but the structure is incomplete until future candles confirm a trend.",
      commonMistake: "Turning a news-driven Gold wick into a complete reversal conclusion.",
      quickNote: "In Gold, unclear is a professional answer."
    }
  }
];
