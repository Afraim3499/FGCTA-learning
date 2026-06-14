import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.5 - Forex Track Cards
 * Focus: Forex Structure: How Currency Pairs Build Direction, Ranges, and Breaks
 */
export const forexCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Forex Structure Is Pair Behavior",
    label: "Forex Structure Foundation",
    visualKey: "forex-pair-structure-skeleton",
    body: "Forex structure is the visible behavior of a currency pair over time. The chart shows how one currency is being priced against another, and that relationship forms swings, ranges, trends, breaks, and failures. A trained learner reads the pair structure, not one candle in isolation.",
    context: {
      keyTerms: [
        { term: "Currency Pair", definition: "Two currencies priced against each other." },
        { term: "Pair Structure", definition: "The visible arrangement of movement in a currency pair." },
        { term: "Relative Pressure", definition: "Movement created by the changing relationship between the two currencies." },
        { term: "Swing", definition: "A visible push or turn in price." },
        { term: "Structure Reading", definition: "Classifying what the pair is building over time." }
      ],
      whyThisMatters: "Forex learners often read a pair like one isolated asset. That creates weak interpretation. A pair’s structure is the visible result of relative movement between two currencies.",
      realLifeExample: "EUR/USD can rise because EUR is strengthening, USD is weakening, or both are happening together. The learner does not need to solve the whole macro picture yet, but they must know the chart is a relationship.",
      commonMistake: "Reading EUR/USD as if only EUR is moving.",
      quickNote: "In Forex, structure belongs to the pair, not one currency alone."
    }
  },
  {
    type: "visual_intro",
    title: "Forex Swings Show Pressure Turning Points",
    label: "Swing Pressure",
    visualKey: "forex-swing-pressure-points",
    body: "Forex swings are pressure turning points. A swing high shows where the pair pushed up and turned. A swing low shows where the pair pushed down and turned. Once the learner can separate meaningful turns from small noise, the pair’s structure becomes easier to read.",
    context: {
      keyTerms: [
        { term: "Swing High", definition: "A visible point where the pair pushed up and turned down." },
        { term: "Swing Low", definition: "A visible point where the pair pushed down and turned up." },
        { term: "Pressure Turn", definition: "A point where local movement changes direction." },
        { term: "Meaningful Swing", definition: "A swing that helps define structure." },
        { term: "Minor Wiggle", definition: "Small movement that does not improve the structure reading." }
      ],
      whyThisMatters: "Forex learners often over-mark charts. Too many markings create false structure and confusion.",
      realLifeExample: "GBP/USD may move up and down several times inside a small session range, but only a few turning points may actually define the structure.",
      commonMistake: "Treating every tiny lower-timeframe movement as a structural swing.",
      quickNote: "Good structure reading starts by filtering weak swings."
    }
  },
  {
    type: "visual_intro",
    title: "Trend and Range in Currency Pairs",
    label: "Pair Structure Types",
    visualKey: "forex-trend-range-structure",
    body: "A Forex pair can trend, range, or become unclear. Trend structure appears through swing relationships. Range structure appears when price keeps rotating between upper and lower areas. The trained learner classifies the pair’s structure before trusting a candle.",
    context: {
      keyTerms: [
        { term: "Pair Trend", definition: "Directional structure built by swing relationships." },
        { term: "Pair Range", definition: "Structure where the pair rotates between upper and lower areas." },
        { term: "Higher High", definition: "A swing high above a previous swing high." },
        { term: "Higher Low", definition: "A swing low above a previous swing low." },
        { term: "Lower High", definition: "A swing high below a previous swing high." },
        { term: "Lower Low", definition: "A swing low below a previous swing low." },
        { term: "Range Boundary", definition: "Upper or lower area of a sideways structure." }
      ],
      whyThisMatters: "A learner who cannot classify trend vs range will keep applying the wrong logic to the wrong condition.",
      realLifeExample: "EUR/USD may make clean higher highs during one period, then spend hours rotating between the same upper and lower areas. The structure changed from directional to balanced.",
      commonMistake: "Calling every active move a trend.",
      quickNote: "First classify the pair. Then read the candle."
    }
  },
  {
    type: "visual_intro",
    title: "Session Ranges Become Structure",
    label: "Session Structure",
    visualKey: "forex-session-range-structure",
    body: "A Forex session can create structure. A quiet period may form a range with upper and lower boundaries. Later activity may expand beyond it, reject from it, or rotate back inside. The range is not a signal. It is a reference area for reading behavior.",
    context: {
      keyTerms: [
        { term: "Session Range", definition: "A range formed during a specific trading window." },
        { term: "Session High", definition: "The upper area reached during a session." },
        { term: "Session Low", definition: "The lower area reached during a session." },
        { term: "Reference Area", definition: "A price area used to observe later behavior." },
        { term: "Expansion", definition: "Movement beyond a range or area." },
        { term: "Rotation", definition: "Movement back inside or across a range." }
      ],
      whyThisMatters: "Forex learners often turn session ranges into mechanical signals. The correct habit is to use them as structure references.",
      realLifeExample: "EUR/USD builds a tight Asia range. During London, price moves above the range, but the learner still checks whether it holds, follows through, or returns inside.",
      commonMistake: "Assuming a session range break is automatically meaningful.",
      quickNote: "A session range is a reference, not an instruction."
    }
  },
  {
    type: "visual_intro",
    title: "Session Highs and Lows Are Reaction Areas",
    label: "Session Reaction Areas",
    visualKey: "forex-session-high-low-reaction",
    body: "Session highs and lows are not magic lines. They are reaction areas created by previous session behavior. A trained learner watches how price behaves near those areas instead of assuming the line must hold or fail.",
    context: {
      keyTerms: [
        { term: "Session High", definition: "The upper area reached during a session." },
        { term: "Session Low", definition: "The lower area reached during a session." },
        { term: "Reaction Area", definition: "A zone where price behavior may change." },
        { term: "Overshoot", definition: "Price briefly moves beyond an area." },
        { term: "Hold", definition: "Price remains beyond or above/below an area after testing." },
        { term: "Return Inside", definition: "Price moves outside an area but comes back in." }
      ],
      whyThisMatters: "Rigid line thinking makes learners panic when price moves slightly beyond a session high or low.",
      realLifeExample: "GBP/USD pushes above the London high by a small margin (a few pips, which are the smallest price fractions in Forex), then closes back below it. A trained learner does not call that a clean break without follow-through.",
      commonMistake: "Treating session highs and lows as walls.",
      quickNote: "Session levels are areas to audit, not buttons to press."
    }
  },
  {
    type: "visual_intro",
    title: "Expansion and Pullback in Forex",
    label: "Session Movement Rhythm",
    visualKey: "forex-expansion-pullback-rhythm",
    body: "Forex structure often moves through compression, expansion, and pullback. Expansion shows stronger movement beyond a previous area. A pullback is the market moving back against that expansion. The pullback is not automatically failure. Structure and follow-through decide its meaning.",
    context: {
      keyTerms: [
        { term: "Compression", definition: "Tight or limited movement before expansion." },
        { term: "Expansion", definition: "Stronger movement beyond a previous area." },
        { term: "Pullback", definition: "Movement back against the expansion." },
        { term: "Continuation", definition: "Price resumes the expansion direction." },
        { term: "Failure", definition: "Price cannot continue and returns into prior structure." },
        { term: "Follow-Through", definition: "What price does after the move." }
      ],
      whyThisMatters: "Forex learners often chase expansion or fear pullbacks. This card teaches them to read the rhythm instead of reacting emotionally.",
      realLifeExample: "A pair breaks above a session range, pulls back toward the range high, then either holds and continues or fails and returns inside.",
      commonMistake: "Thinking every pullback after expansion means the move is dead.",
      quickNote: "Expansion starts the question. Pullback quality helps answer it."
    }
  },
  {
    type: "visual_intro",
    title: "Breaks and Failed Breaks Around Forex Areas",
    label: "Break Quality",
    visualKey: "forex-break-failure-quality",
    body: "A break is not automatically a structure change. In Forex, price can move beyond a session high, range boundary, or swing point and still fail. A trained learner checks close quality, hold, and follow-through before treating the break as meaningful.",
    context: {
      keyTerms: [
        { term: "Break", definition: "Price moving beyond a structure area." },
        { term: "Failed Break", definition: "Price moves beyond an area but cannot hold." },
        { term: "Hold", definition: "Price remains beyond the area after the break." },
        { term: "Close Quality", definition: "Where and how the candle closes relative to the area." },
        { term: "Follow-Through", definition: "Continued behavior after the break." },
        { term: "Break Quality", definition: "How reliable the break appears after review." }
      ],
      whyThisMatters: "Many Forex mistakes come from reacting to the first move outside a level.",
      realLifeExample: "EUR/USD breaks above the range high, but the candle closes back inside. That is different from a break that closes above and continues.",
      commonMistake: "Calling every move outside a Forex area a confirmed breakout.",
      quickNote: "A break must prove quality after crossing the area."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Pair Location Comes First",
    label: "Pair Location",
    visualKey: "forex-htf-location-first",
    body: "A lower-timeframe Forex move can be active and still incomplete. The higher timeframe shows where the pair is located in the broader structure. A trained learner checks pair location before trusting local session movement.",
    context: {
      keyTerms: [
        { term: "Higher-Timeframe Location", definition: "Where the pair sits in broader structure." },
        { term: "Major Area", definition: "A price area that has mattered previously." },
        { term: "Local Session Move", definition: "A shorter-term move inside a session." },
        { term: "Context-Limited Move", definition: "A move that is active but restricted by broader location." },
        { term: "Pair Location", definition: "The structural position of the currency pair." }
      ],
      whyThisMatters: "Without higher-timeframe location, learners overtrust lower-timeframe session moves.",
      realLifeExample: "GBP/USD rallies during London, but the 4H chart shows price entering a previous rejection zone. The move is active, but the reading is not automatically clean.",
      commonMistake: "Letting a 15m session push overrule the higher-timeframe structure.",
      quickNote: "In Forex, location comes before session excitement."
    }
  },
  {
    type: "visual_intro",
    title: "Related-Pair Context Can Support or Complicate Structure",
    label: "Context Layer",
    visualKey: "forex-related-pair-context",
    body: "Forex structure can be supported or complicated by related context. A move on one pair may be stronger if similar pairs or USD context support it. But related-pair context is not a signal. It is another layer of evidence.",
    context: {
      keyTerms: [
        { term: "Related-Pair Context", definition: "Information from similar or connected currency pairs." },
        { term: "USD Context", definition: "The broader condition of the US Dollar when reading USD pairs." },
        { term: "Isolated Move", definition: "Movement strong on one pair but not broadly supported." },
        { term: "Supported Move", definition: "Movement aligned with related context." },
        { term: "Evidence Layer", definition: "Additional information that can strengthen or weaken a reading." }
      ],
      whyThisMatters: "Forex learners who read one pair alone may miss whether the move is broad, isolated, or mixed.",
      realLifeExample: "EUR/USD breaks upward, but other USD pairs do not show similar USD weakness. The learner may still observe the move, but the evidence is less clean.",
      commonMistake: "Using related pairs as automatic confirmation instead of context.",
      quickNote: "Related context can support a reading. It should not replace structure."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Clean Break, Failed Break, or Mixed?",
    label: "Practice Drill",
    visualKey: "forex-structure-break-drill",
    body: "This drill tests whether you can audit a Forex break instead of reacting to it. A move beyond a session high is only the first clue. Hold, close quality, follow-through, and higher-timeframe location decide whether the structure is clean, weak, or mixed.",
    taskData: {
      type: "choice_block",
      question: "GBP/USD builds a tight session range. During London, price pushes above the session high. The first candle closes slightly above the range, but the next candle returns back inside. The 4H chart is still near a previous resistance area. What is the disciplined Forex structure reading?",
      options: [
        {
          id: "A",
          text: "It is a confirmed breakout because price moved above the session high.",
          isCorrect: false,
          feedback: "Wrong: Moving above an area is not enough. A break needs hold, close quality, and follow-through."
        },
        {
          id: "B",
          text: "It is definitely bearish because price returned inside the range.",
          isCorrect: false,
          feedback: "Wrong: A return inside weakens the break, but it does not automatically create a clean bearish reading."
        },
        {
          id: "C",
          text: "The break attempt is weak or mixed because price did not hold above the area and higher-timeframe location still limits clarity.",
          isCorrect: true,
          feedback: "Correct: Price moved above the session high, but the move did not hold and the higher-timeframe location still limits clarity. This is weak or mixed break evidence, not a clean structure change."
        },
        {
          id: "D",
          text: "The higher timeframe does not matter because London movement is more important.",
          isCorrect: false,
          feedback: "Wrong: Session movement must still be read inside higher-timeframe location."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Break Attempt", definition: "Price trying to move beyond a structure area." },
        { term: "Failed Hold", definition: "Price cannot stay beyond the broken area." },
        { term: "Mixed Evidence", definition: "Some clues support the move while other clues reduce clarity." },
        { term: "Higher-Timeframe Limitation", definition: "Broader context that weakens a local reading." },
        { term: "Break Audit", definition: "Reviewing close, hold, follow-through, and context." }
      ],
      whyThisMatters: "Forex learners often overreact to breaks. This drill forces the learner to classify quality, not just direction.",
      realLifeExample: "A pair moves above the session high, but quickly returns into the range while the higher timeframe is still near resistance.",
      commonMistake: "Calling a break confirmed just because price crossed a line.",
      quickNote: "Crossing the area is not enough. The break must hold quality."
    }
  },
  {
    type: "debrief",
    title: "Forex Debrief: Reading Pair Structure Properly",
    label: "Roadway Debrief",
    visualKey: "forex-structure-roadway-debrief",
    body: "You are no longer reading Forex structure as random candles or mechanical session breaks. You now understand that currency pairs build structure through swings, ranges, session areas, expansion, pullbacks, breaks, failures, and broader context. The job is to audit what the pair is building, not react to the loudest move.\n\n### Your Forex Competencies:\n\n* [x] Audit **Pair Behavior** as relative currency pressure\n* [x] Identify **Forex Swings** and filter session noise\n* [x] Classify **Trend vs. Range** structures in pairs\n* [x] Use **Session Ranges** as structural reference areas\n* [x] Audit **Break Quality** using close, hold, and follow-through\n* [x] Prioritize **HTF Location** and layer **Related Context**\n\n**Next**: Level 0 Synthesis & Verification.",
    context: {
      keyTerms: [
        { term: "Pair Structure", definition: "The visible arrangement of movement in a currency pair." },
        { term: "Session Structure", definition: "Structure created during a trading window." },
        { term: "Reaction Area", definition: "A zone where price behavior may change." },
        { term: "Break Quality", definition: "How reliable a break appears after review." },
        { term: "Higher-Timeframe Location", definition: "The pair’s broader structural position." },
        { term: "Related Context", definition: "Additional pair or currency evidence." },
        { term: "Reading Quality", definition: "Clear, mixed, or unclear." }
      ],
      whyThisMatters: "Forex structure reading prevents learners from chasing candles, session breaks, or isolated movement without context.",
      realLifeExample: "Two learners see the same London break. One reacts immediately. The trained learner checks session structure, break quality, higher-timeframe location, and whether related context supports the move.",
      commonMistake: "Leaving with session concepts but no process for reading structure quality.",
      quickNote: "Forex structure is audited through pair behavior, session areas, and context."
    }
  }
];
