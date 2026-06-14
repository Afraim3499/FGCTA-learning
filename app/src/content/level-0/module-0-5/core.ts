import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "The Evidence Hierarchy",
    label: "Core Foundation",
    visualKey: "time-compression-board",
    body: "Think of a timeframe as a **Filter for Weight**. A 1-minute candle records the tiny fluctuations of the market. A Daily candle hides those fluctuations and only records the broad, heavy decisions. \n\n**The Rule**: More time inside a candle = More Evidence Weight.",
    context: {
      keyTerms: [
        { term: "Evidence Weight", definition: "How much 'truth' a candle holds based on the time it represents." },
        { term: "Participant Weight", definition: "The larger capital commitment of major market participants." }
      ],
      whyThisMatters: "Untrained readers often treat a 1-minute fluctuation with the same respect as a Daily move. This is like trying to predict the weather by looking at a single raindrop.",
      realLifeExample: "A Daily candle is a full book; a 1-minute candle is just a single sentence. You can't understand the story if you only read one sentence at a time.",
      commonMistake: "Thinking that a fast move on a small timeframe 'proves' the market has changed direction.",
      quickNote: "Don't trust the wiggles. Trust the weight."
    }
  },
  {
    type: "visual_intro",
    title: "Narrative Layers",
    label: "Structural Mapping",
    visualKey: "timeframe-comparison-windows",
    body: "The market is a stack of stories (Narratives) happening at once. A lower timeframe might look active, but it is often just a minor detail inside a much larger timeframe context. You must identify which layer is currently dominant.",
    context: {
      keyTerms: [
        { term: "The Narrative", definition: "The big, slow story told by the Higher Timeframes (HTF)." },
        { term: "The Detail", definition: "The fast, noisy story told by the Lower Timeframes (LTF)." }
      ],
      whyThisMatters: "To avoid traps, you must know if a move is a new direction or just a minor detail within an existing context. This stops you from calling a reading clear right before a Higher Timeframe support or resistance area is hit.",
      realLifeExample: "A city bus might turn left to avoid a pothole (LTF), but the route is still moving North (HTF). Don't let the turn fool you.",
      commonMistake: "Getting 'Zoomed In' and forgetting where the big price walls are.",
      quickNote: "The bigger the timeframe, the bigger the boss."
    }
  },
  {
    type: "visual_intro",
    title: "The Weight of the Record",
    label: "Quantitative Logic",
    visualKey: "timeframe-weight-ladder",
    body: "Not all evidence is equal. We use a **Weight Ladder** to prioritize what we see. Higher timeframes have 'Structural Gravity'—they are harder to move and easier to trust because they represent a broad market consensus.",
    context: {
      keyTerms: [
        { term: "Structural Gravity", definition: "The tendency of price to obey larger-timeframe levels over smaller-timeframe ones." },
        { term: "Consensus", definition: "When the majority of market participants agree on a direction." }
      ],
      whyThisMatters: "A disciplined learner does not guess; they stack evidence. A Daily rejection holds significantly more weight than a 5-minute rejection. We prioritize our reading from the top down.",
      realLifeExample: "Trying to stop a moving train (HTF) vs. stopping a rolling bicycle (LTF). The weight defines the difficulty.",
      commonMistake: "Ignoring the 'Gravity' of the higher timeframe and trying to trade against it.",
      quickNote: "Always check the weight before you take a side."
    }
  },
  {
    type: "visual_intro",
    title: "Stronger Moves vs. Noise",
    label: "Participant Roles",
    visualKey: "htf-ltf-roles",
    body: "To read a chart objectively, you must separate **stronger market participation** from **short-term noise**.\n\n* **Stronger Move (HTF)**: Price behavior backed by deep liquidity and major participants. They move with structural intent.\n* **Minor Noise (LTF)**: Temporary fluctuations and short-term volatility. They move with fast reactions.",
    context: {
      keyTerms: [
        { term: "Stronger Participation", definition: "High-weight evidence left by major capital flows." },
        { term: "Minor Noise", definition: "Unstable price fluctuations driven by high-frequency activity." }
      ],
      whyThisMatters: "Short-term noise can easily obscure the true market context. If you only watch the noise, you are being caught on the wrong side of stronger market pressure.",
      realLifeExample: "The Compass (Stronger Move) shows you where the island is. The Microscope (Noise) only shows you the dust on the deck of the ship.",
      commonMistake: "Watching the 1-minute chart and thinking you are seeing the 'Truth' of the market.",
      quickNote: "Follow the stronger move, ignore the noise."
    }
  },
  {
    type: "visual_intro",
    title: "Resolving Timeframe Conflict",
    label: "Evidence Auditing",
    visualKey: "timeframe-conflict-board",
    body: "What if the layers disagree? If the 5-minute is pushing up but the 4-hour is hitting a wall, the timeframe evidence is **Mixed**. A disciplined reader does not guess; they label the timeframe context 'Unclear' and wait for the layers to align.",
    context: {
      keyTerms: [
        { term: "Timeframe Conflict", definition: "When different timeframe layers suggest opposing market contexts." },
        { term: "Wait for Alignment", definition: "Staying out of the market until the timeframe layers agree." }
      ],
      whyThisMatters: "Most poor readings occur during periods of conflict between timeframes. By simply identifying this conflict and walking away, you reduce one common source of weak readings.",
      realLifeExample: "A red light (HTF) and a green light (LTF) at the same intersection. The disciplined driver waits for clarity.",
      commonMistake: "Forcing a decision when the data is clearly messy.",
      quickNote: "If the layers fight, you stay out."
    }
  },
  {
    type: "visual_intro",
    title: "Timeframe Personality: Trend vs. Range",
    label: "Structural Mapping",
    visualKey: "timeframe-personality-board",
    body: "A timeframe is not just a clock; it's a personality. A Higher Timeframe might be in a calm trend, while a Lower Timeframe is in a messy, chaotic range. You must identify the personality of each layer before you trust the local movement.",
    context: {
      keyTerms: [
        { term: "Timeframe Personality", definition: "The current behavioral state (Trend/Range/Chaos) of a specific layer." },
        { term: "HTF Personality", definition: "The dominant macro direction or state." },
        { term: "LTF Personality", definition: "The local behavior, which may be noisy or ranging even inside a trend." }
      ],
      whyThisMatters: "Most beginners assume that if the 4H is trending, the 5m must be trending too. This assumption leads to misinterpreting messy local movements. We only form a reading when the personalities align.",
      realLifeExample: "A big ship moving steadily across the ocean (HTF Trend). On the deck, people are running back and forth in a chaotic game (LTF Range). The ship's route is clear, but the deck is messy.",
      commonMistake: "Ignoring the messy personality of the lower timeframe just because the higher timeframe is trending.",
      quickNote: "Identify the personality before you trust the move."
    }
  },
  {
    type: "visual_intro",
    title: "The Timeframe Weight Checklist",
    label: "Process Control",
    visualKey: "evidence-audit-checklist-board",
    body: "A disciplined reader does not trust their feelings; they trust their process. Before forming a conclusion, you must audit timeframe weights. If you cannot verify timeframe alignment and weight priority, the evidence quality is too low to support a clean reading.",
    context: {
      keyTerms: [
        { term: "Weight Checklist", definition: "A verification of timeframe alignment before concluding a reading." },
        { term: "Alignment Verification", definition: "Confirming that timeframe layers do not actively contradict each other." },
        { term: "Reading Quality", definition: "The classification of how clear or mixed the technical evidence is." }
      ],
      whyThisMatters: "The checklist removes the emotional urge to predict and replaces it with logical discipline. If you cannot verify timeframe weight priority, you do not have a valid reading.",
      realLifeExample: "A surgeon before an operation. They check the patient's identity and the equipment. They don't skip the checklist just because they feel 'confident.'",
      commonMistake: "Skipping the weight check because the move 'looks' obvious.",
      quickNote: "The weight audit must be done before the reading is clean."
    }
  },
  {
    type: "visual_intro",
    title: "The Top-Down Timeframe Workflow",
    label: "Strategic Audit",
    visualKey: "top-down-reading-workflow",
    body: "Disciplined reading always moves from the **Outside In**. We audit the Narrative first, define the Structure second, and only use local detail to refine our timing. The full evidence audit (incorporating structure, location, and wicks) will be taught in detail in Module 0.6.",
    context: {
      keyTerms: [
        { term: "Top-Down Analysis", definition: "The process of starting from the Daily/4H chart and zooming in to the 5m detail." },
        { term: "Timeframe Workflow", definition: "The structured sequence of verifying higher-timeframe boundaries before checking local candles." }
      ],
      whyThisMatters: "Untrained readers often start on the 1-minute chart and hope the higher timeframes agree. The disciplined reader starts with the broader context first.",
      realLifeExample: "Checking the weather (HTF) before you check the engine (LTF) of your plane. Both matter, but one defines the mission.",
      commonMistake: "Starting at the bottom and hoping the top agrees.",
      quickNote: "Narrative first. Detail last."
    }
  },
  {
    type: "practice",
    title: "Final Audit Practice",
    label: "Strategic Decision",
    visualKey: "timeframe-decision-scenario",
    body: "TEST CASE: You see an aggressive 5-minute push (Detail) moving directly into a major 4-hour resistance area (Narrative). \n\n**What is the disciplined reading?**",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined reading?",
      options: [
        { id: "A", text: "The 5m push is very strong; the market has turned bullish.", isCorrect: false, feedback: "Wrong: You are letting local noise overrule broader context. One 5m move rarely breaks a 4H resistance zone on the first try." },
        { id: "B", text: "The 4H resistance is old; the 5m move is the new direction.", isCorrect: false, feedback: "Wrong: Newer details do not carry more weight. The 4H resistance represents a much larger consensus of capital." },
        { id: "C", text: "The timeframe evidence is mixed. I will classify the reading as mixed and wait for alignment.", isCorrect: true, feedback: "Correct: You have identified conflict. A disciplined reader waits for the higher-weight layer and the lower-weight layer to align." },
        { id: "D", text: "I will call the reading bullish because of the local candle speed.", isCorrect: false, feedback: "Wrong: Chasing candle speed is an emotional reaction, not an objective audit. We only call a reading clear when the weights are aligned." }
      ]
    },
    context: {
      whyThisMatters: "Learning to say 'I don't know' in a messy market is the most expensive skill in trading.",
      quickNote: "Don't bet on the noise against the narrative."
    }
  },
  {
    type: "summary",
    title: "Module Debrief: The Hierarchy of Evidence",
    label: "Module Recap",
    visualKey: "timeframe-debrief-board",
    body: "You have successfully completed the **Timeframe Alignment Reset**. You no longer see charts as isolated bars—you see them as a stack of Narrative layers. You now have the filter to separate stronger price moves from short-term noise.\n\n### Your New Competencies:\n\n* [x] Identify **Stronger Moves** vs. **Minor Noise**\n* [x] Audit the market from the **Outside-In**\n* [x] Resolve **Timeframe Conflict** by staying patient\n* [x] Respect **Structural Gravity**\n\n**Next**: We map the market's skeleton: **Basic Structure**.",
    context: {
      whyThisMatters: "This timeframe weight filter is what separates you from random market participants. You are now reading the market using objective structure filters.",
      quickNote: "You are now an Evidence Weight Auditor."
    }
  }
];
