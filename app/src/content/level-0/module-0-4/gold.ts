import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Gold Timeframes Are Volatility Records",
    visualKey: "gold-volatility-record-board",
    label: "Gold Foundation",
    body: "A Gold timeframe does not exist by itself. A 15-minute candle records 15 minutes of XAU/USD movement, but its quality depends on volatility, liquidity, market window, macro context, and where the candle forms inside the broader structure.",
    context: {
      keyTerms: [
        { term: "XAU/USD Timeframe", definition: "The amount of time represented by one Gold candle." },
        { term: "Volatility Condition", definition: "The speed and intensity of price movement during the candle period." },
        { term: "Candle Quality", definition: "How useful a candle is as evidence after checking the environment that created it." },
        { term: "Market Window", definition: "A period of the trading day where activity, liquidity, or event pressure changes." },
        { term: "Unstable Candle", definition: "A candle that looks strong but forms in fast, unclear, or distorted conditions." }
      ],
      whyThisMatters: "Gold can make a candle look important simply because it moves fast. If the learner ignores the condition behind the candle, they may confuse volatility with clarity.",
      realLifeExample: "Gold forms a large 15-minute candle during a quiet period and another large 15-minute candle after major US data. Same timeframe, different market condition.",
      commonMistake: "Judging a Gold candle only by size or color without checking the environment that created it.",
      "quickNote": "In Gold, candle size is not enough. Condition creates meaning."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Does Not Move Equally All Day",
    visualKey: "gold-market-rhythm-board",
    label: "Market Rhythm",
    body: "Gold may print candles across long trading hours, but not every hour carries the same reading quality. Activity, liquidity, macro attention, and event timing can change how much trust a learner should place in a candle.",
    context: {
      keyTerms: [
        { term: "Market Rhythm", definition: "The way activity changes across the trading day." },
        { term: "Active Window", definition: "A period where participation and movement may increase." },
        { term: "Quiet Window", definition: "A period where movement may be slower, thinner, or less reliable." },
        { term: "Overlap Activity", definition: "A period where major market participation can increase." },
        { term: "Event Window", definition: "A period around scheduled or sudden information that can create unstable movement." }
      ],
      whyThisMatters: "A learner who treats every hour the same will overread weak candles and underprepare for unstable candles.",
      realLifeExample: "Gold may stay narrow for hours, then expand sharply during New York data. The timeframe did not change, but the environment did.",
      commonMistake: "Thinking Gold candles carry the same quality just because they have the same timeframe.",
      "quickNote": "Gold has timeframes, but it also has rhythm."
    }
  },
  {
    type: "visual_intro",
    title: "Same Candle, Different Gold Window",
    visualKey: "gold-window-comparison-board",
    label: "Candle Weight",
    body: "A Gold candle gains meaning from the window that created it. The same candle shape can be weak, useful, unstable, or structurally important depending on liquidity, market activity, news pressure, and location.",
    context: {
      keyTerms: [
        { term: "Evidence Weight", definition: "The relative importance of a candle after considering context." },
        { term: "Gold Window", definition: "The time and condition in which a Gold candle forms." },
        { term: "Structural Location", definition: "Where the candle forms inside the broader chart." },
        { term: "Thin Movement", definition: "Movement that may happen with weaker participation or lower depth." },
        { term: "Unstable Evidence", definition: "A candle that looks important but forms in conditions where clarity is low." }
      ],
      whyThisMatters: "Gold learners often react to candle shape too quickly. This card teaches them to judge candle quality before trusting the candle.",
      realLifeExample: "A long upper wick at a major level during active conditions may matter. The same wick during news may simply be event noise until follow-through appears.",
      commonMistake: "Thinking the same Gold candle shape has the same meaning in every market window.",
      "quickNote": "Gold candle shape needs Gold context."
    }
  },
  {
    type: "visual_intro",
    title: "Macro News Can Distort Gold Timeframes",
    visualKey: "gold-event-distortion-board",
    label: "Event Pressure",
    body: "A Gold candle formed during a macro news window can record real repricing, but it can also contain unstable movement, violent wicks, and unclear follow-through. The disciplined learner waits for structure and close-location evidence before trusting the move.",
    context: {
      keyTerms: [
        { term: "Macro News Window", definition: "A period around economic data, central bank comments, or market-moving information." },
        { term: "Repricing", definition: "A fast adjustment in price after new information enters the market." },
        { term: "Event Volatility", definition: "Fast and sometimes unstable movement caused by a major event." },
        { term: "Follow-Through", definition: "What price does after the event candle closes." },
        { term: "Close-Location Review", definition: "Checking where the candle finished inside its full range." },
        { term: "Fake Clarity", definition: "A situation where a candle looks decisive but the context is unstable." }
      ],
      whyThisMatters: "Gold can move sharply around data. If the learner treats every news candle as clean evidence, they may confuse volatility with confirmation.",
      realLifeExample: "Gold spikes after inflation data, leaves a long wick, and closes near the middle. A rushed learner calls direction. A trained learner waits to see whether price follows through or rejects the move.",
      commonMistake: "Treating the first large Gold candle after news as the final truth.",
      "quickNote": "News can make Gold loud before it becomes clear."
    }
  },
  {
    type: "visual_intro",
    title: "London, New York, and Futures Participation",
    visualKey: "gold-participation-board",
    label: "Participation Windows",
    body: "Gold candles can become more meaningful when stronger participation enters the market, especially around major activity windows. But participation is not a signal. The learner still needs structure, location, close behavior, and follow-through.",
    context: {
      keyTerms: [
        { term: "Participation Window", definition: "A time period where market involvement may increase." },
        { term: "Futures Participation", definition: "Activity in futures markets that may influence visible Gold movement." },
        { term: "Retail XAU/USD Candle", definition: "The candle visible on a retail chart or platform." },
        { term: "Liquidity Attention", definition: "The level of market activity around a price move." },
        { term: "Macro Attention", definition: "Market focus on USD, yields, inflation, rates, and risk conditions." }
      ],
      whyThisMatters: "Gold can look more convincing during active windows, but the learner must not treat activity as automatic clarity.",
      realLifeExample: "Gold moves sharply during New York after US data while futures participation increases. A trained learner checks whether the move closes cleanly and follows through, not only that it moved fast.",
      commonMistake: "Thinking more activity automatically means a cleaner reading.",
      "quickNote": "Participation adds weight, not certainty."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Gold Location Comes First",
    visualKey: "gold-location-context-board",
    label: "Gold Location",
    body: "In Gold, a lower-timeframe move can look powerful and still be incomplete. The higher timeframe shows where price is located in the broader structure. A trained learner checks location before trusting local movement.",
    context: {
      keyTerms: [
        { term: "Higher-Timeframe Location", definition: "Where Gold is positioned in the broader chart structure." },
        { term: "Major Level", definition: "A price area where the market has previously reacted." },
        { term: "Range Boundary", definition: "The upper or lower area of a broader sideways structure." },
        { term: "Local Move", definition: "Shorter-term movement inside the higher-timeframe context." },
        { term: "Context-Limited Move", definition: "A move that is active but still restricted by broader location." }
      ],
      whyThisMatters: "Gold’s speed can make local movement feel more important than it is. Higher-timeframe location protects the learner from overreacting.",
      realLifeExample: "Gold rallies hard on 5m, but the 4H chart shows price entering a previous rejection zone. The move is real, but not automatically clean.",
      commonMistake: "Trusting a dramatic lower-timeframe Gold candle without checking higher-timeframe location.",
      "quickNote": "In Gold, location comes before reaction."
    }
  },
  {
    type: "visual_intro",
    title: "Lower-Timeframe Gold Behavior: Wicks, Sweeps, and Reaction",
    visualKey: "gold-local-behavior-board",
    label: "Local Behavior",
    body: "Lower-timeframe Gold charts are useful when they explain behavior inside a known location. They become dangerous when the learner treats every fast wick or candle as the full market story. Detail should refine the reading, not replace context.",
    context: {
      keyTerms: [
        { term: "Local Behavior", definition: "Shorter-term price behavior inside a broader context." },
        { term: "Liquidity Sweep", definition: "A move beyond a visible area that may trigger orders before price returns." },
        { term: "Failed Break", definition: "A move beyond a level that does not hold." },
        { term: "Behavior Lens", definition: "Using a smaller timeframe to observe how price is reacting now." },
        { term: "Refinement", definition: "Adding detail to a broader reading." },
        { term: "Gold Wick Reaction", definition: "A wick that may show a test, rejection, sweep, or unstable movement depending on context." }
      ],
      whyThisMatters: "Gold lower timeframes create many emotional traps. This card teaches learners to observe behavior without letting speed control the reading.",
      realLifeExample: "Gold reaches a higher-timeframe level. The 5m chart shows a sweep above the level and a quick return. A trained learner treats this as behavior to review, not an automatic reversal call.",
      commonMistake: "Using lower-timeframe Gold movement to create the main opinion instead of refining the broader reading.",
      "quickNote": "Lower timeframes explain behavior. They do not replace context."
    }
  },
  {
    type: "visual_intro",
    title: "Multi-Timeframe Gold Reading Process",
    visualKey: "gold-reading-stack-board",
    label: "Gold Workflow",
    body: "A disciplined Gold reading starts with broader location and market condition before moving into lower-timeframe behavior. The learner checks volatility, macro context, structure, and follow-through before trusting a fast candle.",
    context: {
      keyTerms: [
        { term: "Gold Top-Down Reading", definition: "A process for reading Gold from broader context into local behavior." },
        { term: "Market Window", definition: "The condition and timing around the candle." },
        { term: "Macro Context", definition: "USD, rate expectations, inflation data, risk sentiment, or news pressure." },
        { term: "Working Structure", definition: "The main chart structure used for the current reading." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." },
        { term: "Evidence Audit", definition: "Checking what supports and weakens a reading before forming a conclusion." }
      ],
      whyThisMatters: "Gold’s speed can pull learners into emotional decisions. A fixed reading process slows the learner down and improves evidence quality.",
      realLifeExample: "Gold forms a fast candle on 15m. A trained learner checks 4H location, macro timing, market window, 1H structure, and lower-timeframe behavior before judging the move.",
      commonMistake: "Starting from the fastest Gold chart and letting urgency control the reading.",
      "quickNote": "Gold reading must move from context to behavior."
    }
  },
  {
    type: "practice",
    title: "Gold Timeframe Conflict Drill",
    visualKey: "gold-conflict-drill-board",
    label: "Practice Drill",
    body: "This drill tests whether you can separate fast Gold movement from aligned evidence. A Gold candle can be active and still incomplete. The trained learner checks timeframe, location, close behavior, market window, and follow-through before calling the reading clean.",
    taskData: {
      type: "choice_block",
      question: "Gold forms a strong 15-minute bullish candle during New York activity. The 1-hour chart is still inside a range, the 4-hour chart is near a previous rejection area, and the candle closes below the top of its range. What is the disciplined Gold reading?",
      options: [
        { id: "A", text: "The 15-minute candle is strong, so Gold is clearly bullish.", isCorrect: false, feedback: "Not correct. A strong lower-timeframe Gold candle does not automatically define the full reading." },
        { id: "B", text: "New York activity means the move must continue.", isCorrect: false, feedback: "Not correct. New York activity can increase movement, but it does not guarantee continuation." },
        { id: "C", text: "The lower-timeframe move is active, but higher-timeframe location and close behavior reduce clarity. This is a mixed reading until structure confirms.", isCorrect: true, feedback: "Correct. The 15-minute move is active, but the 1-hour range, 4-hour rejection area, and imperfect close reduce clarity. This is a mixed reading until Gold shows stronger structure and follow-through." },
        { id: "D", text: "The higher timeframe does not matter because Gold moves fast.", isCorrect: false, feedback: "Not correct. Gold’s speed makes higher-timeframe context more important, not less important." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mixed Reading", definition: "A condition where some evidence supports the move but other layers reduce clarity." },
        { term: "Alignment", definition: "When multiple timeframes and conditions support the same reading." },
        { term: "Close Behavior", definition: "Where the candle finishes inside its range." },
        { term: "Active but Incomplete", definition: "Movement that is worth observing but not strong enough for a clean conclusion." },
        { term: "Follow-Through", definition: "What price does after the candle closes." }
      ],
      whyThisMatters: "Gold often creates convincing lower-timeframe candles that are not fully aligned with the broader chart.",
      realLifeExample: "Gold jumps during New York, but the 4H chart is still near a previous rejection zone. A rushed learner calls it bullish. A trained learner marks it as active but not fully confirmed.",
      commonMistake: "Confusing Gold’s speed with full multi-timeframe alignment.",
      "quickNote": "In Gold, fast is not the same as confirmed."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Debrief: Time, Volatility, Context, Alignment",
    visualKey: "gold-roadway-debrief",
    label: "Roadway Debrief",
    body: "You are no longer reading Gold candles as isolated fast moves. You now understand that every Gold candle belongs to a timeframe, every timeframe forms inside a volatility condition, and every move must be checked against market window, macro context, structure, and follow-through.",
    context: {
      keyTerms: [
        { term: "Volatility Condition", definition: "The movement environment behind the candle." },
        { term: "Market Window", definition: "The time and condition in which the Gold candle forms." },
        { term: "Macro Context", definition: "USD, rates, inflation, risk sentiment, and event pressure around Gold." },
        { term: "Timeframe Alignment", definition: "When multiple timeframes support the same reading." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." },
        { term: "Gold Evidence Stack", definition: "The combined review of timeframe, volatility, window, macro context, location, and behavior." }
      ],
      whyThisMatters: "Gold is fast enough to punish shallow reading. A learner needs a process that separates evidence from urgency.",
      realLifeExample: "Two learners see the same 15m Gold candle. One reacts to speed. The trained learner checks market window, 4H location, macro context, close behavior, and follow-through.",
      commonMistake: "Leaving with the idea that Gold is fast but no actual process for reading Gold timeframes.",
      "quickNote": "Gold candles are read through time, volatility, context, and alignment."
    }
  }
];
