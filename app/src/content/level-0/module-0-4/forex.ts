import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Forex Timeframes Are Session Records",
    visualKey: "forex-session-timeframe-board",
    label: "Forex Foundation",
    body: "A 15-minute candle records 15 minutes of activity. But in Forex, those 15 minutes are not equal across the day. A candle formed during quiet Asia, London open, New York overlap, or major news does not carry the same environment. \n\n**The Formula**: timeframe + session = reading environment",
    context: {
      keyTerms: [
        { term: "Forex Session", definition: "A major trading window such as Asia, London, or New York." },
        { term: "Session Context", definition: "The market environment created by the active trading region and participation level." },
        { term: "Reading Environment", definition: "The condition surrounding the candle: quiet, active, volatile, or mixed." },
        { term: "Session Record", definition: "A candle understood through both its timeframe and the session that created it." }
      ],
      whyThisMatters: "If a learner reads only the candle duration, they miss the market environment behind the candle. Forex movement changes across the trading day.",
      realLifeExample: "A 15-minute EUR/USD candle during late Asia may be slow and narrow. A 15-minute EUR/USD candle after London opens may form inside a much more active environment.",
      commonMistake: "Reading Forex candles as if every hour of the day has the same quality.",
      quickNote: "In Forex, timeframe tells you how long. Session tells you what kind of market."
    }
  },
  {
    type: "visual_intro",
    title: "The Forex Trading Day Has Rhythms",
    visualKey: "forex-trading-rhythm-board",
    label: "Session Rhythm",
    body: "Forex is a 24-hour market, but participation is not equal across all hours. The market has rhythm: Asia, London, New York, and overlaps. Some periods are quiet, some are active, and some are unstable because of economic releases. \n\n**The Rule**: Know the environment you are reading.",
    context: {
      keyTerms: [
        { term: "Asia Session", definition: "A major trading window often associated with quieter movement in many major pairs." },
        { term: "London Session", definition: "A major trading window often associated with stronger Forex participation." },
        { term: "New York Session", definition: "A major trading window that can bring continuation, reversal, or news-driven movement." },
        { term: "Session Rhythm", definition: "The changing activity pattern across the Forex trading day." },
        { term: "Participation", definition: "The amount of market activity and involvement behind price movement." }
      ],
      whyThisMatters: "A learner who ignores session rhythm may treat quiet movement, active movement, and event-driven movement as the same kind of evidence.",
      realLifeExample: "A pair may stay tight during Asia, expand during London, and react sharply during New York data. The timeframe stayed the same, but the environment changed.",
      commonMistake: "Thinking the market is equally active just because Forex is open.",
      quickNote: "Forex is open for long hours, but activity comes in waves."
    }
  },
  {
    type: "visual_intro",
    title: "Session Handoffs and Overlaps",
    visualKey: "forex-handoff-overlap-board",
    label: "Liquidity Windows",
    body: "Session handoffs and overlaps can change how a timeframe behaves. A candle formed during an overlap may carry more participation than one formed during a quiet period. But activity alone is not enough. The learner still needs structure, context, and close-location review.",
    context: {
      keyTerms: [
        { term: "Session Handoff", definition: "A transition period where one major trading region becomes less active and another becomes more active." },
        { term: "Overlap", definition: "A time window where two major sessions are active at the same time." },
        { term: "Liquidity Window", definition: "A period where market participation may be stronger." },
        { term: "Activity Spike", definition: "A sudden increase in price movement or participation." },
        { term: "Clean Movement", definition: "Movement that is easier to read because it has structure and follow-through." }
      ],
      whyThisMatters: "Many Forex learners get excited when movement increases. But stronger activity can create useful evidence or unstable movement depending on context.",
      realLifeExample: "London opens and EUR/USD starts moving faster. A trained learner does not call direction immediately. They check whether the move is breaking structure or only reacting to fresh activity.",
      commonMistake: "Assuming every session overlap move is automatically clean.",
      quickNote: "Overlap can increase activity. It does not guarantee clarity."
    }
  },
  {
    type: "visual_intro",
    title: "Same Candle, Different Session Meaning",
    visualKey: "forex-candle-weight-board",
    label: "Candle Quality",
    body: "A Forex candle gains meaning from the environment that produced it. The same candle shape can be weak, useful, or unstable depending on session activity, liquidity, and news pressure. Candle shape alone is not enough.",
    context: {
      keyTerms: [
        { term: "Evidence Weight", definition: "The relative importance of a candle after considering timeframe and context." },
        { term: "Candle Quality", definition: "How useful a candle is as market evidence." },
        { term: "Thin Movement", definition: "Movement formed in a weaker or less active environment." },
        { term: "Active Session Candle", definition: "A candle formed during stronger market participation." },
        { term: "Unstable Candle", definition: "A candle formed in conditions where movement may be fast but not clean." }
      ],
      whyThisMatters: "Forex learners often memorize candle shapes. This card teaches them to judge the quality of the candle, not just the appearance.",
      realLifeExample: "A strong-looking candle during London may matter more than the same shape printed during a quiet period. But if the candle forms during news, it may be unstable instead of clean.",
      commonMistake: "Thinking the same candle shape has the same meaning in every trading hour.",
      quickNote: "The candle shape is only part of the reading. The session gives it weight."
    }
  },
  {
    type: "visual_intro",
    title: "News Windows Distort Timeframe Reading",
    visualKey: "forex-news-distortion-board",
    label: "Event Pressure",
    body: "A Forex candle formed during a major news window may record real market reaction, but it can also include unstable movement, spread changes, violent wicks, or fast repricing. The disciplined learner does not treat a news candle as clean until structure and follow-through appear.",
    context: {
      keyTerms: [
        { term: "News Window", definition: "The time around major economic releases or central bank events." },
        { term: "Repricing", definition: "A fast adjustment in price after new information enters the market." },
        { term: "Spread Expansion", definition: "A widening difference between bid and ask during unstable conditions." },
        { term: "Event Volatility", definition: "Fast movement caused by scheduled or unexpected events." },
        { term: "Follow-Through", definition: "What price does after the event candle closes." }
      ],
      whyThisMatters: "Many Forex learners mistake fast news movement for high-quality evidence. Speed can create drama without clarity.",
      realLifeExample: "GBP/USD prints a huge candle after economic data. A rushed learner sees direction. A trained learner waits to see whether the next candles confirm the move or reject it.",
      commonMistake: "Treating every large news candle as a clean directional reading.",
      "quickNote": "News can make a candle loud before it becomes clear."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Location in Forex",
    visualKey: "forex-location-context-board",
    label: "Pair Location",
    body: "In Forex, a lower-timeframe move can be active and still incomplete. The higher timeframe shows where the pair is located in the broader structure. A trained learner checks location before trusting local movement.",
    context: {
      keyTerms: [
        { term: "Higher-Timeframe Location", definition: "Where price sits in the broader chart structure." },
        { term: "Major Area", definition: "A zone that has mattered previously in the market." },
        { term: "Local Movement", definition: "Shorter-term movement inside a broader context." },
        { term: "Support / Resistance Area", definition: "A price zone where the market has previously reacted." },
        { term: "Incomplete Reading", definition: "A reading that needs more context before becoming strong." }
      ],
      whyThisMatters: "Without location, learners overreact to local movement and miss the broader structure.",
      realLifeExample: "EUR/USD rallies on 15m, but the 4H chart shows price pressing into a previous resistance zone. The rally is real, but the broader context still matters.",
      commonMistake: "Trusting a small-timeframe move without checking where the pair is on the larger chart.",
      "quickNote": "In Forex, location comes before reaction."
    }
  },
  {
    type: "visual_intro",
    title: "Lower-Timeframe Session Behavior",
    visualKey: "forex-behavior-lens-board",
    label: "Local Behavior",
    body: "Lower timeframes are useful when they explain behavior inside a known context. They become dangerous when the learner treats them as the whole market. In Forex, lower-timeframe charts should refine the reading, not replace the broader reading.",
    context: {
      keyTerms: [
        { term: "Local Behavior", definition: "Short-term price action inside a broader context." },
        { term: "Behavior Lens", definition: "Using a smaller timeframe to observe how price is reacting now." },
        { term: "Refinement", definition: "Adding detail to an existing reading." },
        { term: "Noise", definition: "Movement that feels important but does not improve the broader reading." },
        { term: "Reaction", definition: "How price behaves near an important area or condition." }
      ],
      whyThisMatters: "Lower timeframes are where many learners become emotional. This card teaches them how to use detail without becoming controlled by it.",
      realLifeExample: "The 1H chart shows price near a zone. The 5m chart helps observe whether price is rejecting, slowing, or pushing through that zone.",
      commonMistake: "Using lower timeframes to create the main opinion instead of refining an existing one.",
      "quickNote": "Lower timeframes should explain behavior, not create blind confidence."
    }
  },
  {
    type: "visual_intro",
    title: "Multi-Timeframe Forex Reading Process",
    visualKey: "forex-reading-stack-board",
    label: "Forex Workflow",
    body: "Professional Forex reading moves through a structured audit. You start with the broader building (HTF Location), then check the environment (Session Timing & Events), and only then use the local detail (Structure & Behavior) to refine the reading.",
    context: {
      keyTerms: [
        { term: "Forex Top-Down Reading", definition: "A process for reading from broader context into session behavior and local detail." },
        { term: "HTF Location", definition: "Identifying the broader chart structure before local analysis." },
        { term: "Session Timing", definition: "Audit of participation quality based on the current trading hour." },
        { term: "Event Pressure", definition: "Checking for news-driven distortion or upcoming catalysts." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." }
      ],
      whyThisMatters: "Forex is fast and fragmented. A fixed process slows the learner down and improves the quality of the evidence they accept.",
      realLifeExample: "EUR/USD pushes on 15m. A trained learner checks 4H location, London participation, and upcoming CPI data before trusting the move.",
      commonMistake: "Starting from the fastest chart and letting session speed control the reading.",
      "quickNote": "Read Forex from session into behavior, not from speed into emotion."
    }
  },
  {
    type: "practice",
    title: "Forex Timeframe Conflict Drill",
    visualKey: "forex-timeframe-drill",
    label: "Practice Drill",
    body: "This drill tests whether you can separate active session movement from full timeframe alignment. A Forex move can be real and still incomplete. The trained learner does not call the reading clean until broader context, working structure, and session behavior support each other.",
    taskData: {
      type: "choice_block",
      question: "GBP/USD shows a strong 15-minute bullish push during London session. The 1-hour chart is still inside a range, and the 4-hour chart shows price near a previous resistance area. \n\nWhat is the disciplined Forex reading?",
      options: [
        { id: "A", text: "The 15-minute candle is strong, so the pair is clearly bullish.", isCorrect: false, feedback: "Not correct. A strong lower-timeframe candle does not automatically define the whole pair. You still need higher-timeframe and session context." },
        { id: "B", text: "London activity means the move must continue.", isCorrect: false, feedback: "Not correct. London activity can increase participation, but it does not guarantee continuation." },
        { id: "C", text: "The lower-timeframe push is active, but higher-timeframe context is not fully aligned. This is a mixed reading until structure confirms.", isCorrect: true, feedback: "Correct. The 15-minute move is active and worth observing, but the 1-hour range and 4-hour resistance reduce clarity. This is a mixed reading until the pair shows stronger alignment across timeframe and structure." },
        { id: "D", text: "The higher timeframe does not matter because the 15-minute chart is more recent.", isCorrect: false, feedback: "Not correct. Newer does not always mean more important. Lower-timeframe movement must be read inside broader context." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mixed Reading", definition: "A condition where some evidence supports the move but other layers reduce clarity." },
        { term: "Alignment", definition: "When multiple timeframes support the same reading." },
        { term: "Active but Incomplete", definition: "Movement that is worth observing but not strong enough for a clean conclusion." },
        { term: "Confirmation", definition: "Additional structure or behavior that strengthens the reading." }
      ],
      whyThisMatters: "Forex often produces active lower-timeframe moves during major sessions. The learner’s job is not to chase activity. The learner’s job is to judge alignment.",
      realLifeExample: "GBP/USD pushes upward during London, but the 4H chart still shows resistance. A rushed learner calls it bullish. A trained learner marks it as active but not fully confirmed.",
      commonMistake: "Confusing active session movement with full multi-timeframe alignment.",
      "quickNote": "In Forex, active is not the same as aligned."
    }
  },
  {
    type: "summary",
    title: "Forex Debrief: Time, Session, Structure",
    visualKey: "forex-roadway-debrief",
    label: "Roadway Debrief",
    body: "You are no longer reading Forex candles as isolated shapes. You now understand that every candle belongs to a timeframe, every timeframe forms inside a session, and every session move must be checked against broader structure. This is how Forex reading becomes disciplined instead of reactive.",
    context: {
      keyTerms: [
        { term: "Session Context", definition: "The trading environment behind the candle." },
        { term: "Timeframe Alignment", definition: "When multiple timeframes support the same reading." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." },
        { term: "Pair Location", definition: "Where the currency pair sits in broader structure." },
        { term: "Top-Down Forex Reading", definition: "Reading from broader context into session behavior and local detail." }
      ],
      whyThisMatters: "Forex becomes much easier to misread when the learner ignores time, session, and structure. This roadway gives a repeatable process.",
      realLifeExample: "Two learners see the same 15m candle. One reacts to the candle. The trained learner asks which session created it, where the pair is on 4H, and whether the move is aligned.",
      commonMistake: "Leaving with session names but no reading process.",
      "quickNote": "Forex candles are read through time, session, and structure together."
    }
  }
];
