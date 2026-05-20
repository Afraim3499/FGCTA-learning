import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Gold Brief: Speed vs. Clarity",
    visualKey: "gold-reading-map",
    label: "Roadway Context",
    body: "Gold can move quickly, but speed alone does not make a reading reliable. A Lurnava learner checks whether the move has structure, liquidity, wick context, and supporting Dollar/rate background.",
    context: {
      keyTerms: [
        { term: "XAU/USD", definition: "Gold priced against the US Dollar (USD)." },
        { term: "Liquidity", definition: "How much active buying and selling is available. Thin liquidity can make movement noisy." },
        { term: "Wick", definition: "The thin part of a candle showing where price traveled before being pushed back." },
        { term: "Dollar context", definition: "The broader strength or weakness of the US Dollar (USD)." },
        { term: "Rate pressure", definition: "Interest-rate expectations that can influence Gold demand and pricing." },
        { term: "Speed vs clarity", definition: "The difference between fast movement and reliable evidence." }
      ],
      whyThisMatters: "Gold often moves faster than learners expect. If a learner treats every spike as meaningful, they may confuse noise with evidence. The goal is not to react to speed, but to decide whether the move is structurally clear.",
      realLifeExample: "Gold spikes upward quickly during a news-sensitive period, then leaves a long wick. A rushed learner thinks the move is strong. A trained learner checks whether the structure actually changed or whether price only rejected quickly in noisy conditions.",
      commonMistake: "Thinking fast movement means clear direction. In Gold, speed can be noise unless structure and context support it.",
      quickNote: "Fast is not the same as clear."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Context Drivers",
    visualKey: "gold-context-driver-map",
    label: "Context Drivers",
    body: "Gold can move quickly, but speed alone does not make a reading. A Lurnava learner checks the background drivers first, then decides whether the chart is showing structure or only noise.",
    context: {
      keyTerms: [
        { term: "Volatility", definition: "How quickly and widely price moves." },
        { term: "USD Context", definition: "The broader strength or weakness of the US Dollar (USD)." },
        { term: "Rate Expectations", definition: "Market expectations about interest rates and the attractiveness of holding cash or interest-paying assets." },
        { term: "Market Uncertainty", definition: "Periods where fear, risk, or instability can increase attention on Gold." },
        { term: "Liquidity", definition: "How much active buying and selling is available. Thin liquidity can make Gold movement noisy." },
        { term: "Wick Rejection", definition: "When price moves into an area but is pushed back before the candle closes." }
      ],
      whyThisMatters: "Gold often reacts quickly to background conditions. If a learner reads only the candle, they may mistake a fast move for a clear move. Context drivers help separate meaningful pressure from temporary noise.",
      realLifeExample: "Gold jumps during a news-sensitive period while the US Dollar (USD) is weakening. A rushed learner reacts to the spike. A trained learner checks whether the move is supported by USD (US Dollar) context, rate expectations, liquidity, and whether the candle holds or rejects.",
      commonMistake: "Treating Gold like a normal slow-moving chart. Gold can move fast, reject quickly, and punish readings that ignore context.",
      quickNote: "In Gold, context comes before confidence."
    }
  },
  {
    type: "visual_intro",
    title: "The 'Urgency' Trap",
    visualKey: "gold-urgency-trap",
    label: "Mistake Pattern",
    body: "Gold often moves quickly and leaves dramatic wicks. A rushed learner treats that urgency as proof. A trained learner treats the wick as a clue and waits for structural confirmation before forming a reading.",
    context: {
      keyTerms: [
        { term: "Wick", definition: "The thin line above or below a candle showing where price travelled before pulling back." },
        { term: "Volatility", definition: "How quickly and sharply price moves." },
        { term: "Structural evidence", definition: "Observable chart conditions supporting a reading." },
        { term: "Urgency trap", definition: "Mistaking fast movement for proof." }
      ],
      whyThisMatters: "Gold can move so fast that the learner feels forced to react immediately. That pressure often creates weak readings. Speed increases emotion, not certainty.",
      realLifeExample: "Gold spikes quickly and leaves a long upper wick. A rushed learner instantly assumes reversal. A trained learner waits to see whether structure actually confirms weakness.",
      commonMistake: "Treating a dramatic wick as a direct instruction instead of a possible clue.",
      quickNote: "Fast does not mean clear. A wick can suggest something, but it must be validated."
    }
  },
  {
    type: "practice",
    title: "Gold Mini Drill: Noise vs. Clue",
    visualKey: "gold-noise-decision",
    label: "Practical Drill",
    body: "Gold forms a large candle with long wicks in both directions during a highly volatile period. The move looks dramatic, but the candle also shows rejection on both sides.",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined Gold reading?",
      options: [
        { id: "a", text: "Big movement means high clarity, so the reading should be trusted immediately.", isCorrect: false, feedback: "Not correct. Big movement does not automatically mean high clarity. In Gold, speed can create emotional pressure and make noisy movement look important." },
        { id: "b", text: "The long wicks alone are a guaranteed signal that price will reverse soon.", isCorrect: false, feedback: "Not correct. A long wick can be a clue, but it is not a guaranteed reversal signal. The learner still needs structure and confirmation." },
        { id: "c", text: "Classify the condition as noisy or unclear until structure provides stronger evidence.", isCorrect: true, feedback: "Correct. A large Gold candle with long wicks in both directions can show volatility, rejection, or unclear pressure. A Lurnava learner does not force a reading from drama alone. They classify the condition as noisy or unclear until structure gives stronger evidence.\n\n**Lurnava Principle:** When the chart is unclear, 'unclear' is a valid reading." },
        { id: "d", text: "Skip the review note because Gold moves too fast to record reasoning.", isCorrect: false, feedback: "Not correct. Fast markets make review more important, not less important. If the learner does not record reasoning, the session leaves no learning record." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Noisy condition", definition: "A market condition where movement is active but not clear enough to form a strong reading." },
        { term: "Wick", definition: "The thin part of a candle showing where price traveled before being pushed back." },
        { term: "Volatility", definition: "How quickly and sharply price moves." },
        { term: "Structural evidence", definition: "Observable chart behavior that supports a reading." },
        { term: "Unclear reading", definition: "An honest label used when the chart does not provide enough evidence yet." }
      ],
      whyThisMatters: "Gold can move dramatically and still be unclear. A learner who treats every large candle as a signal may confuse activity with evidence. Learning to label noise honestly prevents forced readings.",
      realLifeExample: "Gold creates a large candle with long wicks above and below. A rushed learner tries to decide direction immediately. A trained learner recognizes that both sides were rejected and waits for structure before forming a stronger reading.",
      commonMistake: "Thinking that a dramatic candle must contain a clear answer.",
      quickNote: "Noisy is a valid label. You do not need to force a reading."
    }
  }
];
