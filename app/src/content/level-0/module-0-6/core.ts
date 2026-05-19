import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.6 - Core Track Cards
 * Focus: Evidence Audit: Turning Chart Records Into a Reading
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Evidence Audit Is the Trader’s Reading Process",
    label: "Core Foundation",
    visualKey: "evidence-audit-foundation",
    body: "An evidence audit is the disciplined process that turns raw chart records into a structured market reading. A professional reading is never a gut feeling or an emotional reaction to a single candle's color. Instead, it is an inspection of multiple technical layers—candle behavior, timeframe context, structure condition, location, and reaction—checked together before any conclusion is drawn.",
    context: {
      keyTerms: [
        { term: "Evidence Audit", definition: "A structured check of all available chart records before forming a reading." },
        { term: "Market Reading", definition: "A quality-classified assessment of current price behavior." },
        { term: "Evidence Layer", definition: "A specific category of technical record (e.g., structure, location, timeframe)." },
        { term: "Chart Record", definition: "Historical price and volume data displayed on the terminal." },
        { term: "Reading Quality", definition: "The classification of how aligned or conflicting the gathered evidence is." }
      ],
      whyThisMatters: "An evidence audit prevents traders from overreacting to isolated price movements and protects them from emotional bias.",
      realLifeExample: "A learner sees a large green candle and immediately assumes price will continue rising. A disciplined trader audits the evidence and realizes the candle is hitting a higher-timeframe resistance zone inside a range, meaning the evidence is conflicting, not clear.",
      commonMistake: "Treating a chart reading as a simple prediction of where price will go next, rather than an audit of current facts.",
      quickNote: "Do not ask what the market will do. Ask what evidence you currently have."
    }
  },
  {
    type: "visual_intro",
    title: "One Clue Is Not Enough",
    label: "Single-Clue Trap",
    visualKey: "single-clue-vs-evidence-stack",
    body: "The single-clue trap is one of the most common mistakes retail traders make. They see a single strong candle, a long wick, a local structure break, or a high-timeframe level, and build a full trading conclusion around it. In a disciplined reading, one clue can start a question or highlight an area, but it cannot complete the reading. A single record must be stacked against other layers to determine its true significance.",
    context: {
      keyTerms: [
        { term: "Single-Clue Trap", definition: "The mistake of drawing a full conclusion from one isolated candle or wick." },
        { term: "Evidence Stack", definition: "The collection of multiple technical layers checked in sequence." },
        { term: "Isolated Candle", definition: "A candle read without reference to surrounding structure or location." },
        { term: "Contextual Bias", definition: "An emotional assumption built from seeing what one wants to see on a chart." },
        { term: "Confirmation Bias", definition: "Searching only for clues that support a pre-existing assumption." }
      ],
      whyThisMatters: "Forcing a reading from a single clue leads to low-probability decisions and unexpected losses.",
      realLifeExample: "A long bottom wick forms, showing rejection. However, price is in a strong downtrend and has not reached a key location. Chasing this single clue fails because the trend structure limits its significance.",
      commonMistake: "Declaring a breakout or reversal based solely on the size or color of the latest candle.",
      quickNote: "One candle is a record of a moment. An evidence stack is the context of that moment."
    }
  },
  {
    type: "visual_intro",
    title: "The Evidence Layer Stack",
    label: "Evidence Layers",
    visualKey: "evidence-layer-stack",
    body: "To conduct a proper audit, you must check the six core layers of evidence in sequence. Each layer adds weight to or limits the confidence of your reading. By reviewing these layers in order—Candle Record, Timeframe Context, Structure Condition, Location, Reaction, and Follow-Through—you build a complete picture of market conditions and avoid skipping critical details.",
    context: {
      keyTerms: [
        { term: "Candle Record", definition: "The shape and close of the immediate candle under review." },
        { term: "Timeframe Context", definition: "The broader trend or range condition on the higher-timeframe chart." },
        { term: "Structure Condition", definition: "The current swing relationship (higher highs, lower lows, range)." },
        { term: "Location", definition: "The position of price relative to key reaction areas." },
        { term: "Reaction", definition: "Price behavior (such as sweeps or rejections) when entering a location." },
        { term: "Follow-Through", definition: "The subsequent candles that verify or weaken the initial reaction." }
      ],
      whyThisMatters: "Structuring your analysis into layers ensures that you never miss a conflicting high-timeframe level or range boundary.",
      realLifeExample: "Before entering a trade, a trader reviews the stack: 1. Candle is strong green. 2. Timeframe is a daily range. 3. Local structure is uptrend. 4. Location is daily range high (resistance). 5. Reaction is a quick wick. 6. Follow-through is negative. The stack shows a weak and conflicting setup.",
      commonMistake: "Skipping straight to reading wicks before confirming the broader structure or location.",
      quickNote: "A complete stack check turns guess-work into a systematic audit."
    }
  },
  {
    type: "visual_intro",
    title: "Alignment: When Evidence Supports the Same Reading",
    label: "Evidence Alignment",
    visualKey: "evidence-alignment-board",
    body: "Evidence alignment occurs when multiple layers of the stack support the same market reading. For example, if a strong candle closes at its highs (Candle), while local structure is making higher highs (Structure), the daily chart is in a clear uptrend (Timeframe), and price is bouncing off a previous swing low (Location), the evidence is aligned. Alignment increases reading quality, but remember: it does not guarantee direction.",
    context: {
      keyTerms: [
        { term: "Evidence Alignment", definition: "When multiple separate layers support the same market reading." },
        { term: "Confluence", definition: "The intersection of several independent technical clues." },
        { term: "Aligned Reading", definition: "A high-quality reading where layers do not contradict each other." },
        { term: "Directional Bias", definition: "A disciplined assessment of market pressure based on aligned evidence." },
        { term: "Structural Support", definition: "Structure swings and levels that align with immediate price behavior." }
      ],
      whyThisMatters: "Recognizing alignment helps you identify when market pressure is clear, without relying on guaranteed predictions.",
      realLifeExample: "Price drops to a major support level on the daily chart. On the 15m chart, price sweeps the low, closes strong, and begins building higher lows. Structure, location, and candle layers are aligned.",
      commonMistake: "Assuming that aligned evidence means a trade is 100% guaranteed to succeed.",
      quickNote: "Alignment improves reading quality; it does not eliminate risk."
    }
  },
  {
    type: "visual_intro",
    title: "Conflict: When Evidence Disagrees",
    label: "Evidence Conflict",
    visualKey: "evidence-conflict-map",
    body: "Evidence conflict is a normal market condition where different layers of the stack suggest opposing readings. For instance, local price action might show a strong breakout (supporting evidence), but price is immediately approaching a major weekly resistance zone (limiting evidence). A trained learner does not ignore conflict; they identify and name it, classifying the reading as mixed rather than trying to force a simple answer.",
    context: {
      keyTerms: [
        { term: "Evidence Conflict", definition: "A condition where different layers suggest opposing readings." },
        { term: "Limiting Evidence", definition: "Clues that reduce the quality or confidence of a reading." },
        { term: "Supporting Evidence", definition: "Clues that strengthen the quality of a reading." },
        { term: "Mixed Reading", definition: "A classification where supporting and limiting clues are balanced." },
        { term: "Divergence", definition: "When two related market metrics (like spot vs. derivative structure) disagree." }
      ],
      whyThisMatters: "Ignoring conflicting evidence is a primary cause of retail traders entering low-probability breakout traps.",
      realLifeExample: "Price breaks a local swing high, but volume is declining and price is sitting directly under a higher-timeframe range high. The local structure is bullish, but location and volume are bearish.",
      commonMistake: "Hiding or ignoring limiting evidence because you desperately want to take a trade.",
      quickNote: "When evidence conflicts, the reading is mixed. The discipline is to wait or lower your expectations."
    }
  },
  {
    type: "visual_intro",
    title: "Clear, Mixed, and Unclear Readings",
    label: "Reading Quality",
    visualKey: "reading-quality-classifier",
    body: "Not every chart provides a clear story, and a disciplined learner accepts this. We classify reading quality into three states: Clear (multiple layers align with minimal conflict), Mixed (some layers support, while others actively limit confidence), and Unclear (random or highly volatile price behavior with no defined structure). Understanding this classification helps you decide when to act and when to stand aside.",
    context: {
      keyTerms: [
        { term: "Clear Reading", definition: "A condition where multiple layers are aligned with minimal conflict." },
        { term: "Mixed Reading", definition: "A condition where evidence is present but is actively countered by other layers." },
        { term: "Unclear Reading", definition: "A condition with poor structure definition or highly noisy price action." },
        { term: "Noise", definition: "Random or low-quality price fluctuations that lack structural significance." },
        { term: "Reading Classification", definition: "Naming the quality of a chart setup rather than predicting its direction." }
      ],
      whyThisMatters: "Recognizing that a chart is mixed or unclear protects your capital from being chopped up in poor market conditions.",
      realLifeExample: "During low-liquidity holiday hours, price moves in jagged spikes without respecting key levels or structure. The disciplined learner classifies this as unclear and closes the terminal.",
      commonMistake: "Believing you must have a directional prediction for every chart you look at.",
      quickNote: "A professional trader spends most of their time classifying charts as mixed or unclear."
    }
  },
  {
    type: "visual_intro",
    title: "Verification: What Must Happen Next?",
    label: "Verification Logic",
    visualKey: "verification-checkpoint-flow",
    body: "Instead of predicting what price will do, a disciplined reader defines what must happen next to verify or weaken their reading. By establishing clear verification checkpoints—such as price holding above a specific low, or a breakout candle showing immediate follow-through—you transform passive chart watching into an active check of structural rules.",
    context: {
      keyTerms: [
        { term: "Verification", definition: "The process of waiting for specific behavior to confirm a reading." },
        { term: "Invalidation Checkpoint", definition: "A price level or behavior that proves a reading is incorrect." },
        { term: "Weakening Sign", definition: "Early behavior that limits the probability of a reading's scenario." },
        { term: "Confirmation Behavior", definition: "Price action that supports and completes a developing structure." },
        { term: "Chasing Price", definition: "Entering a market without waiting for proper verification." }
      ],
      whyThisMatters: "Verification logic stops you from guessing breakout success and forces you to wait for market confirmation.",
      realLifeExample: "Price breaks a local swing high. Instead of entering immediately, you define the verification: 'I need to see the next candle close above this break, and price must hold the broken level on a pullback.'",
      commonMistake: "Treating a break as confirmed before the breakout candle even closes.",
      quickNote: "Never chase. Establish your checkpoints and let the market prove itself."
    }
  },
  {
    type: "visual_intro",
    title: "When Early Evidence Breaks Down",
    label: "Reading Failure",
    visualKey: "reading-failure-diagnostic",
    body: "A reading is not a promise. It is an assessment that can change with the very next candle. When early evidence breaks down—for example, when a breakout candle is immediately followed by a large engulfing candle back inside structure—the disciplined learner does not defend their initial read. They update their classification immediately to mixed or unclear, accepting that the market story has changed.",
    context: {
      keyTerms: [
        { term: "Evidence Breakdown", definition: "When follow-through fails and invalidates the previous reading." },
        { term: "Reading Update", definition: "Changing the classification of a chart as new records arrive." },
        { term: "Ego Bias", definition: "The emotional attachment to a previous reading despite new conflicting evidence." },
        { term: "Invalidation", definition: "When price crosses a predefined boundary, erasing the reading's thesis." },
        { term: "Behavior Shift", definition: "A sudden change in candle characteristics or swing structure." }
      ],
      whyThisMatters: "Holding onto a failed reading out of pride leads to expanding stops, revenge trading, and large losses.",
      realLifeExample: "A trader reads a local structure break as clear. The next candle spikes down, breaking the swing low that supported the move. The trader immediately invalidates their bullish read and steps aside.",
      commonMistake: "Hoping or waiting for price to 'come back' to prove your original reading was right.",
      quickNote: "When the evidence changes, your reading must change. The market does not care about your ego."
    }
  },
  {
    type: "visual_intro",
    title: "The Full Core Reading Workflow",
    label: "Reading Workflow",
    visualKey: "core-reading-workflow-map",
    body: "To read a market professionally, you must combine all these lessons into a repeatable, step-by-step workflow. By following a structured checklist—observing raw candle behavior, mapping higher-timeframe context, analyzing swing structure, identifying key locations, reviewing local reactions, and checking follow-through—you arrive at a disciplined classification and clear verification checkpoints.",
    context: {
      keyTerms: [
        { term: "Reading Workflow", definition: "The step-by-step process of auditing evidence to classify reading quality." },
        { term: "Observation Layer", definition: "Recording raw candle behaviors before labeling them." },
        { term: "Location Check", definition: "Mapping price relative to major reaction zones." },
        { term: "Structure Review", definition: "Auditing high-timeframe and low-timeframe swing points." },
        { term: "Follow-Through Assessment", definition: "Evaluating the strength of movement after a reaction." }
      ],
      whyThisMatters: "Following a workflow ensures consistency in your analysis. You cannot expect consistent trading outcomes from a random reading process.",
      realLifeExample: "A trader opens a chart and systematically works through the workflow: daily range check, local swing labeling, key reaction area identification, immediate candle check. They find mixed evidence and log it.",
      commonMistake: "Jumping straight to looking for entry points without completing the foundational workflow steps.",
      quickNote: "A professional reading is a systematic inspection, not a quick glance."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Clear, Mixed, or Unclear?",
    label: "Practice Drill",
    visualKey: "evidence-audit-practice-drill",
    body: "This drill tests whether you can apply evidence-audit logic to a realistic chart reading scenario. A market will often show attractive clues mixed with warning signs. Your goal is to determine the disciplined reading quality classification rather than chasing the most exciting possibility.",
    taskData: {
      type: "choice_block",
      question: "A chart shows a strong green candle breaking above a local structure resistance level. However, the higher-timeframe chart remains inside a broader sideways range, the breakout candle closes near the middle of its range (leaving a long upper wick), and the subsequent candle shows weak follow-through. What is the disciplined evidence-audit reading?",
      options: [
        {
          id: "A",
          text: "Confirmed bullish breakout because price crossed the local structure area.",
          isCorrect: false,
          feedback: "Not correct. Crossing a local level is not enough to confirm a breakout, especially with a weak close and a higher-timeframe range blocking the move."
        },
        {
          id: "B",
          text: "Guaranteed reversal because follow-through is weak.",
          isCorrect: false,
          feedback: "Not correct. Weak follow-through limits the breakout's strength, but it does not guarantee a reversal. Avoid predictive, absolute statements."
        },
        {
          id: "C",
          text: "Mixed evidence because the local break is active, but the higher-timeframe range, the middle close, and weak follow-through limit clarity.",
          isCorrect: true,
          feedback: "Correct! The evidence is mixed. While the local break is a supportive clue, the higher-timeframe range, poor candle close, and lack of follow-through are active limiting factors that prevent a clear reading."
        },
        {
          id: "D",
          text: "Unclear because candles never provide useful evidence.",
          isCorrect: false,
          feedback: "Not correct. Candle shapes and structure details do provide useful, objective records, but they must be audited collectively rather than dismissed."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Disciplined Reading", definition: "A chart reading that accepts mixed or unclear conditions." },
        { term: "Local Break", definition: "A price move beyond a lower-timeframe structure point." },
        { term: "HTF Range", definition: "The high-timeframe boundary layout currently containing price." },
        { term: "Weak Follow-Through", definition: "Immediate pause or reversal candles after a structure break." },
        { term: "Evidence Classification", definition: "The final step of labeling a chart's quality as clear, mixed, or unclear." }
      ],
      whyThisMatters: "This drill trains you to identify limiting clues rather than only focusing on signs of movement.",
      realLifeExample: "Price breaks above a local high but immediately stalls and forms small indecisive candles. Recognizing this as mixed evidence saves you from buying the top of a range.",
      commonMistake: "Focusing only on the green breakout candle while ignoring the higher-timeframe range and weak follow-through.",
      quickNote: "Audit both supporting and limiting clues before deciding the reading quality."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Read Evidence Before You Trust Direction",
    label: "Core Debrief",
    visualKey: "evidence-audit-debrief",
    body: "You have completed Level 0. You are no longer looking at charts hoping for a magic signal. You have learned that candles are records, timeframes change the story, structure gives movement meaning, and an evidence audit combines them into a disciplined reading. By building this systematic habit, you protect yourself from retail traps and build a professional trading foundation.",
    context: {
      keyTerms: [
        { term: "Disciplined Trader", definition: "A trader who audits evidence before formulating any expectation." },
        { term: "Market Clues", definition: "Individual data points that must be combined to form a reading." },
        { term: "Audit Process", definition: "The checklist approach to analyzing charts." },
        { term: "Objectivity", definition: "Evaluating chart records without emotional projection." },
        { term: "Verification Habit", definition: "The practice of always defining the next validation step." },
        { term: "Price Records", definition: "Historical candles that show market participant actions." }
      ],
      whyThisMatters: "A trading career is built on systematic execution. Developing an objective evidence audit habit at Level 0 is the single most important step in that journey.",
      realLifeExample: "An untrained trader opens a chart, gets excited, and trades immediately. The Lurnava graduate audits the layers, writes down verification checkpoints, and acts only when conditions are clear.",
      commonMistake: "Slipping back into looking for quick, single-candle triggers once you start trading live.",
      quickNote: "Do not predict first. Audit first."
    }
  }
];
