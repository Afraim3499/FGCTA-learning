import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.5 - Gold Track Cards
 * Focus: Gold Structure: Volatility, Reaction Areas, and Break Quality
 */
export const goldCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Gold Structure Is Volatility-Shaped Movement",
    label: "Gold Structure Foundation",
    visualKey: "gold-volatility-structure-skeleton",
    body: "Gold structure is the visible arrangement of XAU/USD movement over time. It is built from swings, ranges, impulses, pullbacks, reaction areas, breaks, and failures. But because Gold can move sharply, the learner must separate true structure from volatility. Gold often moves faster and more violently than many learners expect. That means structure can look dramatic before it becomes clear. A trained learner does not trust speed alone. They ask whether the movement is building stable structure or only showing volatility.",
    context: {
      keyTerms: [
        { term: "Gold Structure", definition: "The arrangement of XAU/USD movement over time." },
        { term: "Volatility", definition: "The speed and intensity of price movement." },
        { term: "Swing", definition: "A visible push or turn in price." },
        { term: "Structure Reading", definition: "Classifying what Gold is building over time." },
        { term: "Reading Quality", definition: "Whether evidence is clear, mixed, or unclear." }
      ],
      whyThisMatters: "Gold can make weak structure look important because movement is fast. Without structure discipline, learners confuse speed with clarity.",
      realLifeExample: "Gold prints a large candle on 15m, but the broader structure still shows price inside the same range. The candle is active, but the structure may not have changed.",
      commonMistake: "Thinking fast movement automatically means strong structure.",
      quickNote: "Gold’s speed is not structure. Structure is built through evidence."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Swings Are Often Wick-Heavy Turning Points",
    label: "Swing Quality",
    visualKey: "gold-wick-heavy-swing-points",
    body: "Gold swings are visible turning points, but they often include sharp wicks and fast reactions. A swing high shows where price pushed upward and turned. A swing low shows where price pushed downward and turned. But Gold swings can be wick-heavy, meaning the visible turn may include overshoots, liquidity sweeps, sharp reactions, or event volatility. The trained learner marks the swing, then audits its quality. A wick-heavy swing is not automatically a clean rejection.",
    context: {
      keyTerms: [
        { term: "Swing High", definition: "A visible high point where Gold turned downward." },
        { term: "Swing Low", definition: "A visible low point where Gold turned upward." },
        { term: "Wick-Heavy Swing", definition: "A swing point with a large wick or sharp extension." },
        { term: "Sweep", definition: "A move beyond an area followed by return." },
        { term: "Swing Quality", definition: "How reliable the swing appears after checking context." }
      ],
      whyThisMatters: "Gold learners often see a wick and instantly call rejection. That is weak reading. The source and behavior after the wick matter.",
      realLifeExample: "Gold pushes above a previous high, leaves a long upper wick, and returns. That may be rejection, sweep, or news volatility depending on context and follow-through.",
      commonMistake: "Treating every Gold wick as a confirmed reversal.",
      quickNote: "A Gold wick is a clue, not a verdict."
    }
  },
  {
    type: "visual_intro",
    title: "Trend and Range in Gold",
    label: "Gold Structure Types",
    visualKey: "gold-trend-range-structure",
    body: "Gold can trend, range, or become unclear. Trend structure is built through swing relationships. Range structure is built through repeated reaction between upper and lower areas. Fast candles and long wicks do not replace structure classification. A Gold uptrend still requires higher highs and higher lows. A Gold downtrend still requires lower lows and lower highs. A Gold range still has upper and lower reaction areas. But Gold may produce violent candles and deep wicks inside those structures. The learner must not let one dramatic candle erase the structure too quickly.",
    context: {
      keyTerms: [
        { term: "Gold Trend", definition: "Directional structure built through swing relationships." },
        { term: "Gold Range", definition: "Structure where price rotates between upper and lower areas." },
        { term: "Wick Noise", definition: "Sharp extensions that may not change the broader structure." },
        { term: "Overlapping Structure", definition: "Highs and lows that do not create clean direction." },
        { term: "Structure Classification", definition: "Naming what Gold is building." }
      ],
      whyThisMatters: "Gold often looks more dramatic than it is structurally. Learners need to classify the condition instead of reacting to the latest candle.",
      realLifeExample: "Gold makes several sharp pushes but keeps returning between the same upper and lower zones. That may still be a range, not a clean trend.",
      commonMistake: "Calling every fast Gold push a new trend.",
      quickNote: "Gold can move loudly inside the same structure."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Reaction Areas Are Zones, Not Lines",
    label: "Reaction Areas",
    visualKey: "gold-reaction-zones-not-lines",
    body: "Gold reaction areas are not magic lines. They are zones where price has previously changed behavior. A trained learner watches how Gold behaves around the area instead of assuming one exact price must hold. Gold often reacts around areas rather than perfect prices. Because of volatility, spread, liquidity, and event pressure, Gold can overshoot a line, wick through it, and still respect the broader area. Learners should think in zones and behavior, not rigid lines.",
    context: {
      keyTerms: [
        { term: "Reaction Area", definition: "A zone where price has previously changed behavior." },
        { term: "Support Area", definition: "A zone where buying reaction previously appeared." },
        { term: "Resistance Area", definition: "A zone where selling reaction previously appeared." },
        { term: "Zone", definition: "A flexible area rather than one exact price." },
        { term: "Test", definition: "Price moving into an area to see whether reaction appears." }
      ],
      whyThisMatters: "Gold can pierce exact lines often. If learners expect perfect line behavior, they will misread normal volatility.",
      realLifeExample: "Gold reacts around the same resistance area several times, but not at the exact same price. The area matters more than the perfect line.",
      commonMistake: "Expecting Gold support or resistance to behave like a wall.",
      quickNote: "In Gold, mark the area. Then audit behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Sweeps, Wicks, and Failed Reactions",
    label: "Sweep Logic",
    visualKey: "gold-sweep-wick-failed-reaction",
    body: "Gold can move through a visible area, leave a wick, and return. That may be a sweep, but the wick alone is not enough. A trained learner checks where the candle closes, what price does next, and whether the broader structure supports the reaction. Gold may move above a previous high or below a previous low, trigger reaction, and then return. This may be a sweep. But not every sweep is meaningful. A wick through an area must be judged by close location, follow-through, and broader structure. The learner must stop treating every sweep as a reversal and every wick as a signal.",
    context: {
      keyTerms: [
        { term: "Sweep", definition: "A move beyond a visible area followed by return." },
        { term: "Wick", definition: "The part of a candle showing price travelled beyond the body." },
        { term: "Failed Reaction", definition: "A reaction that does not gain follow-through." },
        { term: "Close Location", definition: "Where the candle finishes inside its range." },
        { term: "Follow-Through", definition: "What price does after the reaction." }
      ],
      whyThisMatters: "Gold creates many sweeps and wicks. Learners who read them mechanically will keep forcing weak conclusions.",
      realLifeExample: "Gold sweeps above a previous high, closes near the middle, then fails to continue down. The sweep happened, but the reaction quality is still unclear.",
      commonMistake: "Calling every sweep a guaranteed reversal.",
      quickNote: "A sweep starts the question. Follow-through answers it."
    }
  },
  {
    type: "visual_intro",
    title: "Impulse and Pullback in Gold",
    label: "Movement Rhythm",
    visualKey: "gold-impulse-pullback-rhythm",
    body: "Gold structure often forms through impulse and pullback. An impulse shows strong movement, while a pullback shows price moving back against that movement. The pullback is not automatically a reversal, and the impulse is not automatically a continuation. Structure decides the quality. Gold often moves through sharp impulses followed by pullbacks, pauses, or failed continuation. An impulse shows stronger movement, but it is not automatically a clean trend. A pullback may be normal structure, exhaustion, or a warning depending on context. The learner must learn to read rhythm, not chase speed.",
    context: {
      keyTerms: [
        { term: "Impulse", definition: "A stronger directional movement." },
        { term: "Pullback", definition: "Movement against the previous impulse." },
        { term: "Continuation", definition: "When price resumes the prior direction." },
        { term: "Failure", definition: "When price cannot continue and structure weakens." },
        { term: "Movement Rhythm", definition: "The push-and-pause behavior of price." },
        { term: "Exhaustion", definition: "A condition where strong movement begins to weaken." }
      ],
      whyThisMatters: "Gold’s impulses can pull learners into emotional readings. This card teaches them to wait for structure quality.",
      realLifeExample: "Gold jumps sharply after an active window, then pulls back. The pullback may be normal if structure holds, or a warning if the move fails.",
      commonMistake: "Chasing the impulse or panicking at the pullback.",
      quickNote: "Gold impulse is not the answer. Structure is."
    }
  },
  {
    type: "visual_intro",
    title: "News and Macro Events Can Fake Structure",
    label: "Macro Distortion",
    visualKey: "gold-macro-fake-structure",
    body: "Macro events can make Gold look structurally clear before it actually is. A news candle may break a level, sweep a zone, or print a large wick, but the learner still needs close quality, follow-through, and structure confirmation before trusting it. Gold reacts strongly to macro information: inflation data, central bank comments, USD movement, rates, yields, and risk sentiment. A macro candle may break a level, sweep a zone, or print a large wick. That can be important, but it can also be fake clarity if follow-through does not appear. This card must teach caution, not fear.",
    context: {
      keyTerms: [
        { term: "Macro Event", definition: "A market-moving economic or central bank event." },
        { term: "Fake Structure", definition: "A move that appears structural but weakens after context is reviewed." },
        { term: "Event Volatility", definition: "Fast movement caused by news or macro repricing." },
        { term: "Repricing", definition: "Rapid adjustment after new information." },
        { term: "Structure Confirmation", definition: "Evidence that the move meaningfully changed the structure." }
      ],
      whyThisMatters: "Gold can break areas violently during news and then reverse or stall. Learners need to avoid treating the first reaction as final truth.",
      realLifeExample: "Gold breaks above resistance after inflation data, but closes back inside the prior area. The visual break happened, but structure confirmation is weak.",
      commonMistake: "Treating the first macro candle as confirmed structure.",
      quickNote: "News can create movement before it creates structure."
    }
  },
  {
    type: "visual_intro",
    title: "Breaks and Failed Breaks Around Gold Levels",
    label: "Break Quality",
    visualKey: "gold-break-failure-quality",
    body: "A Gold break is not automatically a structure change. Price can move beyond an area and still fail. A trained learner checks close quality, hold, follow-through, and broader context before treating the break as meaningful. A break happens when Gold moves beyond a reaction area, range boundary, or previous swing. But a break is not automatically a structure change. Gold can overshoot levels and return quickly. The learner must check whether the move holds, closes well, and follows through. This card should kill breakout addiction in Gold.",
    context: {
      keyTerms: [
        { term: "Break", definition: "Price moving beyond a structural area." },
        { term: "Failed Break", definition: "Price moves beyond an area but cannot hold." },
        { term: "Hold", definition: "Price remains beyond the area after the break." },
        { term: "Close Quality", definition: "Where and how the candle closes relative to the area." },
        { term: "Follow-Through", definition: "What price does after the break." },
        { term: "Break Quality", definition: "How reliable the break appears after review." }
      ],
      whyThisMatters: "Gold often crosses levels with force. The learner must check whether the break actually changed structure.",
      realLifeExample: "Gold moves above a range high, but the next candle returns inside. That is different from a clean break that holds and continues.",
      commonMistake: "Calling every move outside a Gold zone a confirmed breakout.",
      quickNote: "Gold breaks need proof after the break."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Gold Location Comes First",
    label: "Gold Location",
    visualKey: "gold-htf-location-first",
    body: "A lower-timeframe Gold move can be active and still incomplete. The higher timeframe shows where price is located in the broader structure. A trained learner checks location before trusting local movement. Gold can create dramatic lower-timeframe structure while the higher timeframe remains near a major reaction area, previous high/low, range boundary, or macro-sensitive zone. The lower-timeframe move can be real but still context-limited. The learner must check location before trusting speed.",
    context: {
      keyTerms: [
        { term: "Higher-Timeframe Location", definition: "Where Gold sits in broader structure." },
        { term: "Major Reaction Area", definition: "A zone where price has previously changed behavior." },
        { term: "Local Move", definition: "Shorter-timeframe movement inside broader context." },
        { term: "Context-Limited Move", definition: "A move that is active but restricted by broader structure." },
        { term: "Broader Structure", definition: "The larger chart condition around local movement." }
      ],
      whyThisMatters: "Gold’s speed can make local movement feel more important than the broader chart. Location protects the learner from shallow readings.",
      realLifeExample: "Gold rallies hard on 5m, but the 4H chart shows price entering a previous rejection zone. The move is real, but not automatically clean.",
      commonMistake: "Letting a fast lower-timeframe Gold move overrule higher-timeframe structure.",
      quickNote: "In Gold, speed does not erase location."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Clean Break, Sweep, or Mixed?",
    label: "Practice Drill",
    visualKey: "gold-structure-break-drill",
    body: "This drill tests whether you can audit Gold structure instead of reacting to speed. A move beyond an area is only the first clue. The trained learner checks close location, wick source, follow-through, and higher-timeframe context before classifying the structure.",
    taskData: {
      type: "choice_block",
      question: "Gold pushes above a previous reaction area during New York activity. The candle leaves a long upper wick and closes near the middle of its range. The next candle has not confirmed direction yet, and the 4H chart is still near a previous rejection zone. What is the disciplined Gold structure reading?",
      options: [
        {
          id: "A",
          text: "It is a confirmed breakout because Gold moved above the reaction area.",
          isCorrect: false,
          feedback: "Not correct. Moving above an area is not enough. A break needs close quality, hold, and follow-through."
        },
        {
          id: "B",
          text: "It is a guaranteed reversal because the candle has an upper wick.",
          isCorrect: false,
          feedback: "Not correct. A wick does not guarantee reversal. It is a clue that needs context and follow-through."
        },
        {
          id: "C",
          text: "The move is active but mixed because the wick, middle close, missing follow-through, and higher-timeframe location reduce clarity.",
          isCorrect: true,
          feedback: "Correct! Gold moved above the area, but the upper wick, middle close, missing follow-through, and higher-timeframe location reduce clarity. This is mixed evidence, not a clean break or guaranteed reversal."
        },
        {
          id: "D",
          text: "The higher timeframe does not matter because Gold moves fast.",
          isCorrect: false,
          feedback: "Not correct. Gold’s speed makes higher-timeframe location more important, not less important."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mixed Evidence", definition: "Some clues support the move while other clues reduce clarity." },
        { term: "Wick Source", definition: "The condition that may have created the wick." },
        { term: "Middle Close", definition: "A candle close near the middle of its range." },
        { term: "Failed Follow-Through", definition: "Price does not continue after the move." },
        { term: "Break Audit", definition: "Reviewing close, hold, wick, follow-through, and context." },
        { term: "Context-Limited Move", definition: "A move weakened by broader location." }
      ],
      whyThisMatters: "Gold often creates dramatic moves that are neither clean breakouts nor confirmed reversals. The learner must classify quality.",
      realLifeExample: "Gold spikes above resistance after New York activity, leaves a wick, and closes in the middle. A rushed learner calls direction. A trained learner marks it mixed until follow-through appears.",
      commonMistake: "Choosing either “breakout” or “reversal” too quickly when the evidence is mixed.",
      quickNote: "In Gold, mixed evidence is a valid professional reading."
    }
  },
  {
    type: "debrief",
    title: "Gold Debrief: Reading Structure Through Volatility and Context",
    label: "Roadway Debrief",
    visualKey: "gold-structure-roadway-debrief",
    body: "You are no longer reading Gold structure as fast candles and dramatic wicks. You now understand that Gold structure must be audited through volatility, reaction areas, wick source, break quality, macro context, follow-through, and higher-timeframe location. The job is to classify evidence, not react to speed.\n\n### Your Gold Competencies:\n\n* [x] Audit **Gold Structure** shaped by volatility\n* [x] Mark and judge **Wick-Heavy Swings**\n* [x] Classify **Trend and Range** under volatility noise\n* [x] Map **Reaction Zones** rather than rigid lines\n* [x] Diagnose **Sweeps and Wicks** before calling reversal\n* [x] Audit **Impulse and Pullback** structural rhythm\n* [x] Identify and wait out **News & Macro Event Distortions**\n* [x] Grade **Break Quality** via close, hold, and follow-through\n* [x] Prioritize **HTF Location** context before local action\n* [x] Read and align **Evidence Quality**: Clear, Mixed, or Unclear\n\n**Next**: Level 0 Synthesis & Verification.",
    context: {
      keyTerms: [
        { term: "Gold Structure", definition: "The arrangement of XAU/USD movement over time." },
        { term: "Volatility Condition", definition: "The speed and intensity behind movement." },
        { term: "Reaction Area", definition: "A zone where price behavior may change." },
        { term: "Wick Source", definition: "The condition that may have created the wick." },
        { term: "Break Quality", definition: "How reliable a break appears after review." },
        { term: "Higher-Timeframe Location", definition: "Gold’s broader structural position." },
        { term: "Reading Quality", definition: "Clear, mixed, or unclear." }
      ],
      whyThisMatters: "Gold structure reading protects learners from reacting to speed, wicks, and news movement without context.",
      realLifeExample: "Two learners see the same Gold wick. One calls reversal. The trained learner checks reaction area, close location, follow-through, macro context, and higher-timeframe location.",
      commonMistake: "Leaving with Gold volatility awareness but no process for classifying structure.",
      quickNote: "Gold structure is read through volatility, location, and proof."
    }
  }
];
