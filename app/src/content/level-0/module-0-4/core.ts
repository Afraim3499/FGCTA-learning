import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "The Evidence Hierarchy",
    label: "Core Foundation",
    visualKey: "time-compression-board",
    body: "Think of a timeframe as a **Filter for Weight**. A 1-minute candle records the tiny wiggles of the market. A Daily candle hides those wiggles and only records the big, heavy decisions. \n\n**The Rule**: More time inside a candle = More Evidence Weight.",
    context: {
      keyTerms: [
        { term: "Evidence Weight", definition: "How much 'truth' a candle holds based on the time it represents." },
        { term: "Institutional Weight", definition: "The massive capital commitment of banks and funds." }
      ],
      whyThisMatters: "Retail traders lose because they treat a 1-minute 'wiggle' with the same respect as a Daily 'move.' This is like trying to predict the weather by looking at a single raindrop.",
      realLifeExample: "A Daily candle is a full book; a 1-minute candle is just a single sentence. You can't understand the story if you only read one sentence at a time.",
      commonMistake: "Thinking that a fast move on a small timeframe 'proves' the market has changed direction.",
      "quickNote": "Don't trust the wiggles. Trust the weight."
    }
  },
  {
    type: "visual_intro",
    title: "Narrative Layers",
    label: "Structural Mapping",
    visualKey: "timeframe-comparison-windows",
    body: "The market is a stack of stories (Narratives) happening at once. A lower timeframe might look urgent, but it is often just a small detail inside a much larger institutional story. You must identify which layer is currently 'The Boss.'",
    context: {
      keyTerms: [
        { term: "The Narrative", definition: "The big, slow story told by the Higher Timeframes (HTF)." },
        { term: "The Detail", definition: "The fast, noisy story told by the Lower Timeframes (LTF)." }
      ],
      whyThisMatters: "To avoid traps, you must know if a move is a 'New Story' or just a 'Detail' within an old one. This stops you from buying right before a Higher Timeframe wall hits you.",
      realLifeExample: "A city bus might turn left to avoid a pothole (LTF), but the route is still moving North (HTF). Don't let the turn fool you.",
      commonMistake: "Getting 'Zoomed In' and forgetting where the big price walls are.",
      "quickNote": "The bigger the timeframe, the bigger the boss."
    }
  },
  {
    type: "visual_intro",
    title: "The Weight of the Record",
    label: "Quantitative Logic",
    visualKey: "timeframe-weight-ladder",
    body: "Not all evidence is equal. We use a **Weight Ladder** to prioritize what we see. Higher timeframes have 'Structural Gravity'—they are harder to move and easier to trust because they represent a consensus of the biggest players.",
    context: {
      keyTerms: [
        { term: "Structural Gravity", definition: "The tendency of price to obey big-timeframe levels over small-timeframe ones." },
        { term: "Consensus", definition: "When the majority of market participants agree on a direction." }
      ],
      whyThisMatters: "A $750 student doesn't 'guess'; they stack evidence. A Daily rejection is 100x more powerful than a 5-minute rejection. We prioritize our reading from the top down.",
      realLifeExample: "Trying to stop a moving train (HTF) vs. stopping a rolling bicycle (LTF). The weight defines the difficulty.",
      commonMistake: "Ignoring the 'Gravity' of the higher timeframe and trying to trade against it.",
      "quickNote": "Always check the weight before you take a side."
    }
  },
  {
    type: "visual_intro",
    title: "Signature vs. Noise",
    label: "Participant Roles",
    visualKey: "htf-ltf-roles",
    body: "To read like a pro, you must separate the **Whales** from the **Minnows**.\n\n* **The Signature (HTF)**: The clear footprints of Banks and Sovereign Funds. They move with strategy.\n* **The Noise (LTF)**: The frantic wiggles of Algorithms and Retail Emotions. They move with panic.",
    context: {
      keyTerms: [
        { term: "Institutional Signature", definition: "High-weight evidence left by massive capital flows." },
        { term: "Retail Noise", definition: "Unstable movement driven by speculation and high-frequency bots." }
      ],
      whyThisMatters: "Institutions use the 'Noise' to hide their true 'Signature.' If you only watch the noise, you are the exit liquidity for the whales.",
      realLifeExample: "The Compass (Signature) shows you where the island is. The Microscope (Noise) only shows you the dust on the deck of the ship.",
      commonMistake: "Watching the 1-minute chart and thinking you are seeing the 'Truth' of the market.",
      "quickNote": "Follow the Signature, ignore the Noise."
    }
  },
  {
    type: "visual_intro",
    title: "Resolving Conflict",
    label: "Evidence Auditing",
    visualKey: "timeframe-conflict-board",
    body: "What if the layers disagree? If the 5-minute is pushing up but the 4-hour is hitting a wall, the evidence is **Mixed**. A professional does not flip a coin; they label the market 'Unclear' and wait for the layers to align.",
    context: {
      keyTerms: [
        { term: "Mixed Evidence", definition: "When your timeframe layers are telling different stories." },
        { term: "Wait for Alignment", definition: "Staying out of the market until the layers agree." }
      ],
      whyThisMatters: "Most losses happen during 'Conflict.' By simply identifying conflict and walking away, you instantly become more profitable than 90% of retail traders.",
      realLifeExample: "A red light (HTF) and a green light (LTF) at the same intersection. The disciplined driver waits for clarity.",
      commonMistake: "Forcing a decision when the data is clearly messy.",
      "quickNote": "If the layers fight, you stay out."
    }
  },
  {
    type: "visual_intro",
    title: "Timeframe Personality: Trend vs. Range",
    label: "Structural Mapping",
    visualKey: "timeframe-personality-board",
    body: "A timeframe is not just a clock; it's a personality. A Higher Timeframe might be in a calm, disciplined trend, while a Lower Timeframe is in a messy, chaotic range. You must identify the personality of each layer before you trust the evidence.",
    context: {
      keyTerms: [
        { term: "Timeframe Personality", definition: "The current behavioral state (Trend/Range/Chaos) of a specific layer." },
        { term: "HTF Personality", definition: "The dominant macro direction or state." },
        { term: "LTF Personality", definition: "The local behavior, which may be noisy or ranging even inside a trend." }
      ],
      whyThisMatters: "Most traders assume that if the 4H is trending, the 5m must be trending too. This assumption leads to buying 'Messy' movement. We only act when the personality supports the mission.",
      realLifeExample: "A big ship moving steadily across the ocean (HTF Trend). On the deck, people are running back and forth in a chaotic game (LTF Range). The ship's route is clear, but the deck is messy.",
      commonMistake: "Ignoring the messy personality of the lower timeframe just because the higher timeframe is trending.",
      "quickNote": "Identify the personality before you trust the move."
    }
  },
  {
    type: "visual_intro",
    title: "The Evidence Audit Checklist",
    label: "Process Control",
    visualKey: "evidence-audit-checklist-board",
    body: "A professional doesn't trust their gut; they trust their process. Before forming a conclusion, you must audit each layer of the hierarchy. If you can't verify the location, alignment, and behavior, the evidence quality is too low for a clean reading.",
    context: {
      keyTerms: [
        { term: "Evidence Audit", definition: "A manual verification of every layer in the hierarchy." },
        { term: "Verification", definition: "Confirming that a specific piece of evidence meets clinical standards." },
        { term: "Clinical Standards", definition: "Fixed rules for what counts as 'Clean' evidence." }
      ],
      whyThisMatters: "The checklist removes the emotional urge to trade and replaces it with logical discipline. If you can't check every box, you don't have a reading.",
      realLifeExample: "A surgeon before an operation. They check the patient's identity and the equipment. They don't skip the checklist just because they feel 'confident.'",
      commonMistake: "Skipping the audit because the move 'looks' obvious.",
      "quickNote": "The audit must be clinical before the reading is clean."
    }
  },
  {
    type: "visual_intro",
    title: "The Evidence Stack Workflow",
    label: "Strategic Audit",
    visualKey: "top-down-reading-workflow",
    body: "Professional reading always moves from the **Outside In**. We audit the Narrative first, define the Structure second, and only use the Detail to refine our timing. If the layers don't stack, the quality is too low to act.",
    context: {
      keyTerms: [
        { term: "Outside-In Audit", definition: "Starting from the Daily/4H and zooming in to the 5m." },
        { term: "Evidence Stack", definition: "A collection of facts from multiple layers that all point the same way." }
      ],
      whyThisMatters: "Most gamblers start on the 1-minute chart and 'hallucinate' a reason to buy. The $750 student starts on the Daily and 'verifies' a reason to act.",
      realLifeExample: "Checking the weather (HTF) before you check the engine (LTF) of your plane. Both matter, but one defines the mission.",
      commonMistake: "Starting at the bottom and hoping the top agrees.",
      "quickNote": "Narrative first. Detail last."
    }
  },
  {
    type: "practice",
    title: "Final Audit Practice",
    label: "Strategic Decision",
    visualKey: "timeframe-decision-scenario",
    body: "TEST CASE: You see an aggressive 5-minute push (Detail) moving directly into a major 4-hour resistance wall (Narrative). \n\n**What is the disciplined reading?**",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined reading?",
      options: [
        { id: "A", text: "The 5m push is very strong; the market has turned bullish.", isCorrect: false, feedback: "Wrong: You are letting 'Noise' overrule 'Signature.' One 5m move rarely breaks a 4H wall on the first try." },
        { id: "B", text: "The 4H wall is old; the 5m move is the 'new' truth.", isCorrect: false, feedback: "Wrong: 'Newer' doesn't mean 'Heavier.' The 4H wall represents thousands of times more capital than the 5m push." },
        { id: "C", text: "The evidence is mixed. I will stay 'Unclear' and wait for alignment.", isCorrect: true, feedback: "Correct: You have identified 'Conflict.' A professional waits for the high-weight layer and the low-weight layer to point in the same direction." },
        { id: "D", text: "I'll take a small trade to see if it breaks through.", isCorrect: false, feedback: "Wrong: This is 'Curiosity Trading,' not 'Evidence Auditing.' We only act when the stack is aligned." }
      ]
    },
    context: {
      whyThisMatters: "Learning to say 'I don't know' in a messy market is the most expensive skill in trading.",
      quickNote: "Don't bet on the Noise against the Narrative."
    }
  },
  {
    type: "summary",
    title: "Module Debrief: The Hierarchy of Evidence",
    label: "Module Recap",
    visualKey: "timeframe-debrief-board",
    body: "You have successfully completed the **Institutional Reset**. You no longer see charts as 'just bars'—you see them as a stack of Narrative layers. You now have the filter to separate real market movement from retail noise.\n\n### Your New Competencies:\n\n* [x] Identify **Whale Signatures** vs. **Retail Noise**\n* [x] Audit the market from the **Outside-In**\n* [x] Resolve **Mixed Evidence** by staying patient\n* [x] Respect **Structural Gravity**\n\n**Next**: We map the market's skeleton: **Basic Structure**.",
    context: {
      whyThisMatters: "This 'Evidence Filter' is what separates you from the gambling crowd. You are now reading the same data as the banks.",
      quickNote: "You are now an Evidence Auditor."
    }
  }
];
