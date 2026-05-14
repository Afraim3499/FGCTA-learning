import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.5 - Core Track Cards
 * Focus: [Placeholder for Module 0.5 Topic]
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Structure Is the Market’s Skeleton",
    label: "Core Foundation",
    visualKey: "structure-skeleton-intro",
    body: "Market structure is the arrangement of price movement over time. A candle is one record, but structure is the relationship between many records. Without structure, every candle feels more important than it really is.",
    context: {
      keyTerms: [
        { term: "Market Structure", definition: "The arrangement of price movement over time." },
        { term: "Swing", definition: "A visible push or turn in price." },
        { term: "Structure", definition: "The relationship between swings, highs, lows, and reaction areas." },
        { term: "Context", definition: "The bigger situation that gives meaning to movement." },
        { term: "Reading Quality", definition: "Whether the evidence is clear, mixed, or unclear." }
      ],
      whyThisMatters: "Without structure, learners overreact to individual candles and miss the bigger price story.",
      realLifeExample: "A green candle can look strong by itself, but inside a broader downtrend or range, it may only be a small reaction.",
      commonMistake: "Reading candles one by one without seeing what they are building together.",
      quickNote: "Candles show movement. Structure shows the story."
    }
  },
  {
    type: "visual_intro",
    title: "Swings: The Building Blocks of Structure",
    label: "Swing Logic",
    visualKey: "swing-logic-visual",
    body: "Swings are the building blocks of structure. A swing high shows where price pushed up and turned. A swing low shows where price pushed down and turned. Once you can see swings, the chart becomes less random.",
    context: {
      keyTerms: [
        { term: "Swing High", definition: "A visible high point where price turned downward." },
        { term: "Swing Low", definition: "A visible low point where price turned upward." },
        { term: "Turn", definition: "A change in local direction." },
        { term: "Leg", definition: "A movement from one swing point to another." },
        { term: "Structure Point", definition: "A swing point that helps define the market story." }
      ],
      whyThisMatters: "If learners cannot identify swings, they cannot identify trends, ranges, breaks, or structure changes.",
      realLifeExample: "Price pushes up, pauses, and turns down. That turn creates a swing high. Later, price drops and turns upward, creating a swing low.",
      commonMistake: "Marking every tiny candle movement as a meaningful swing.",
      quickNote: "Structure starts when you can separate meaningful swings from noise."
    }
  },
  {
    type: "visual_intro",
    title: "Higher Highs, Higher Lows, Lower Highs, Lower Lows",
    label: "Structure Language",
    visualKey: "structure-language-visual",
    body: "Structure has a language. Higher highs, higher lows, lower highs, and lower lows help describe how price is building. These labels do not predict the future, but they help the learner describe the current structure clearly.",
    context: {
      keyTerms: [
        { term: "Higher High", definition: "A swing high above a previous swing high." },
        { term: "Higher Low", definition: "A swing low above a previous swing low." },
        { term: "Lower High", definition: "A swing high below a previous swing high." },
        { term: "Lower Low", definition: "A swing low below a previous swing low." },
        { term: "Overlapping Structure", definition: "A condition where highs and lows do not create clear direction." }
      ],
      whyThisMatters: "A learner cannot read trend, range, or structure change without first naming the swing relationships correctly.",
      realLifeExample: "If price makes a new high and then pulls back but stays above the previous low, the structure may be building upward.",
      commonMistake: "Calling any upward candle movement a higher high without checking the previous swing point.",
      quickNote: "Structure reading begins with correct swing language."
    }
  },
  {
    type: "visual_intro",
    title: "Trend Structure: Direction Through Swings",
    label: "Trend Structure",
    visualKey: "trend-structure-visual",
    body: "A trend is a relationship between swings. In an uptrend, price generally builds higher highs and higher lows. In a downtrend, price generally builds lower lows and lower highs. One candle does not define a trend.",
    context: {
      keyTerms: [
        { term: "Uptrend", definition: "A structure of generally higher highs and higher lows." },
        { term: "Downtrend", definition: "A structure of generally lower lows and lower highs." },
        { term: "Trend Leg", definition: "A movement that contributes to directional structure." },
        { term: "Continuation", definition: "When price keeps building in the same structural direction." },
        { term: "Trend Evidence", definition: "Swing relationships that support directional reading." }
      ],
      whyThisMatters: "Learners often call direction too early. Structure forces them to check whether the market is actually building directional evidence.",
      realLifeExample: "A market can print a strong green candle inside a downtrend. That candle is not an uptrend unless the swing structure changes.",
      commonMistake: "Calling a trend from one strong candle.",
      quickNote: "Trend is swing relationship, not candle emotion."
    }
  },
  {
    type: "visual_intro",
    title: "Range Structure: When Price Moves Sideways",
    label: "Range Structure",
    visualKey: "range-structure-visual",
    body: "A range is not a broken market. It is a structure where price moves between upper and lower areas without clear directional control. A trained learner does not force a trend reading inside a range.",
    context: {
      keyTerms: [
        { term: "Range", definition: "A structure where price moves between upper and lower areas." },
        { term: "Upper Boundary", definition: "The top area of a range." },
        { term: "Lower Boundary", definition: "The bottom area of a range." },
        { term: "Rotation", definition: "Movement from one side of a range toward the other." },
        { term: "Balance", definition: "A condition where neither side has clear control." }
      ],
      whyThisMatters: "Many learners keep forcing trend logic inside range conditions. That creates bad readings and emotional confusion.",
      realLifeExample: "Price pushes upward several times but keeps returning to the middle of the same area. That is not clean trend behavior; it may be range behavior.",
      commonMistake: "Treating every push inside a range as a new breakout.",
      quickNote: "A range is structure. It is not random."
    }
  },
  {
    type: "visual_intro",
    title: "Impulse and Pullback",
    label: "Movement Rhythm",
    visualKey: "impulse-pullback-visual",
    body: "Structure often forms through impulse and pullback. An impulse shows stronger movement in one direction. A pullback is the market breathing back against that move. A pullback is not automatically a reversal.",
    context: {
      keyTerms: [
        { term: "Impulse", definition: "A stronger directional movement." },
        { term: "Pullback", definition: "A movement against the previous impulse." },
        { term: "Continuation", definition: "When price resumes the prior direction." },
        { term: "Failure", definition: "When price cannot continue and structure weakens." },
        { term: "Movement Rhythm", definition: "The push-and-pause behavior of price." }
      ],
      whyThisMatters: "Learners often panic during pullbacks because they think every opposite move means the whole structure has failed.",
      realLifeExample: "In an uptrend, price pushes higher, then moves down for a while before trying to continue. That pullback may be normal unless structure breaks.",
      commonMistake: "Thinking every pullback is a reversal.",
      quickNote: "A pullback is a question. Structure decides the answer."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Areas, Not Magic Lines",
    label: "Reaction Areas",
    visualKey: "reaction-areas-visual",
    body: "Reaction areas are places where price has previously changed behavior. They are not magic lines. A trained learner watches how price behaves near an area instead of assuming the area must hold.",
    context: {
      keyTerms: [
        { term: "Reaction Area", definition: "A zone where price has previously changed behavior." },
        { term: "Support", definition: "An area where price previously found buying reaction." },
        { term: "Resistance", definition: "An area where price previously found selling reaction." },
        { term: "Zone", definition: "A flexible area, not a perfect line." },
        { term: "Test", definition: "Price moving into an area to see if reaction appears." }
      ],
      whyThisMatters: "Markets often react around areas, not exact mathematical lines. Rigid line thinking creates false confidence.",
      realLifeExample: "Price touches near the same upper area three times, but not at the exact same price. The reaction area matters more than the exact line.",
      commonMistake: "Expecting support or resistance to behave like a wall.",
      quickNote: "Areas matter. Exact lines are often too rigid."
    }
  },
  {
    type: "visual_intro",
    title: "Breaks, Failed Breaks, and Structure Change",
    label: "Structure Change",
    visualKey: "structure-change-visual",
    body: "A break is movement beyond a structure area. But movement beyond an area is not enough by itself. A trained learner checks whether the break closes well, follows through, and changes the structure.",
    context: {
      keyTerms: [
        { term: "Break", definition: "Price moving beyond a structural area." },
        { term: "Failed Break", definition: "Price moves beyond an area but cannot hold." },
        { term: "Follow-Through", definition: "What price does after the break." },
        { term: "Structure Change", definition: "A meaningful shift in the relationship between swings." },
        { term: "Confirmation", definition: "Additional evidence that strengthens the reading." }
      ],
      whyThisMatters: "This card prevents breakout addiction. The learner must stop treating every break as a clean opportunity.",
      realLifeExample: "Price pushes above a range high, but closes back inside the range. That is not the same as a clean breakout with continuation.",
      commonMistake: "Calling every move outside a line a confirmed breakout.",
      quickNote: "A break is a clue. Follow-through decides its quality."
    }
  },
  {
    type: "visual_intro",
    title: "Structure Across Timeframes",
    label: "Multi-Timeframe Structure",
    visualKey: "multi-timeframe-structure-visual",
    body: "Structure changes with timeframe. A lower timeframe may show a clean trend inside a higher-timeframe range. That does not make either chart wrong. It means the learner must know which layer of structure they are reading.",
    context: {
      keyTerms: [
        { term: "Structure Layer", definition: "The timeframe layer where structure is being read." },
        { term: "Local Trend", definition: "A smaller trend inside a broader chart." },
        { term: "Broader Range", definition: "A higher-timeframe sideways structure." },
        { term: "Alignment", definition: "When structure supports the same reading across layers." },
        { term: "Conflict", definition: "When structure differs across timeframes." }
      ],
      whyThisMatters: "This is where many learners become confused. They think one timeframe must be right and the other must be wrong.",
      realLifeExample: "A 5m chart trends upward while the 4H chart remains inside a large range. The 5m trend is real, but it is still inside a broader structure.",
      commonMistake: "Thinking the lower timeframe cancels the higher timeframe.",
      quickNote: "Different structure layers can exist at the same time."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Trend, Range, or Mixed?",
    label: "Practice Drill",
    visualKey: "structure-drill-visual",
    body: "This drill tests whether you can classify structure without forcing certainty. A market can show local improvement while the broader structure remains unchanged. The trained learner names the condition accurately instead of choosing the most exciting chart.",
    taskData: {
      type: "choice_block",
      question: "Price has made two higher lows on the lower timeframe, but the higher timeframe still shows price inside a wide range. The latest move is pushing toward the upper boundary of that range. What is the disciplined structure reading?",
      options: [
        {
          id: "A",
          text: "It is clearly a full uptrend because the lower timeframe has higher lows.",
          isCorrect: false,
          feedback: "Not correct. A lower-timeframe structure does not automatically redefine the higher-timeframe structure."
        },
        {
          id: "B",
          text: "It is clearly bearish because price is near the upper boundary.",
          isCorrect: false,
          feedback: "Not correct. Being near an upper boundary does not automatically make the market bearish. You still need behavior and evidence."
        },
        {
          id: "C",
          text: "The lower timeframe is showing local upward structure, but the broader chart is still range-bound. The reading is mixed until price changes the higher-timeframe structure.",
          isCorrect: true,
          feedback: "Correct. The local structure is improving, but the broader structure has not changed yet. This is a mixed reading, not a clean full-trend conclusion."
        },
        {
          id: "D",
          text: "The range does not matter if the latest candle is green.",
          isCorrect: false,
          feedback: "Not correct. One green candle does not erase the broader range structure."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mixed Structure", definition: "A condition where different layers show different readings." },
        { term: "Local Structure", definition: "Structure on a lower timeframe." },
        { term: "Broader Structure", definition: "Structure on a higher timeframe." },
        { term: "Range-Bound", definition: "Price remains inside a larger range." },
        { term: "Structure Confirmation", definition: "Evidence that a structure has meaningfully changed." }
      ],
      whyThisMatters: "The learner must practice not forcing clean answers when structure is mixed.",
      realLifeExample: "A smaller chart starts trending upward, but the larger chart still has not broken out of its range.",
      commonMistake: "Choosing the most exciting chart instead of the clearest structure.",
      quickNote: "Mixed structure requires patience, not forced certainty."
    }
  },
  {
    type: "debrief",
    title: "Module Debrief: Structure Gives Movement Meaning",
    label: "Module Recap",
    visualKey: "structure-debrief-visual",
    body: "You are no longer reading price as isolated candles. You are learning to see the skeleton behind movement. Structure helps you understand whether price is trending, ranging, pausing, breaking, failing, or becoming unclear.",
    context: {
      keyTerms: [
        { term: "Swing", definition: "A visible push or turn in price." },
        { term: "Trend", definition: "Directional structure built through swing relationships." },
        { term: "Range", definition: "Sideways structure between upper and lower areas." },
        { term: "Reaction Area", definition: "A zone where price has previously changed behavior." },
        { term: "Break", definition: "Movement beyond a structural area." },
        { term: "Mixed Structure", definition: "A condition where the structure is not cleanly aligned." },
        { term: "Structure Reading", definition: "Classifying what price is building." }
      ],
      whyThisMatters: "Structure is the foundation for serious chart reading. Without it, learners chase candles. With it, they begin to read market behavior.",
      realLifeExample: "Two learners see the same candle. One reacts to color. The trained learner checks where it formed inside the structure.",
      commonMistake: "Leaving with labels like trend and range but no process for classifying them.",
      quickNote: "Structure turns movement into meaning."
    }
  }
];
