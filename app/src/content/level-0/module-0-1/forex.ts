import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Forex Brief: Reading a Relationship",
    visualKey: "forex-relationship",
    label: "Roadway Context",
    body: "In Forex, a chart is a comparison. EUR/USD does not show Euro alone; it shows Euro priced against the US Dollar. Before reading the move, identify both sides of the pair.",
    context: {
      keyTerms: [
        { term: "Currency Pair", definition: "Two currencies compared against each other." },
        { term: "Base Currency", definition: "The first currency in the pair. In EUR/USD, EUR is the base." },
        { term: "Quote Currency", definition: "The second currency in the pair. In EUR/USD, USD is the quote." },
        { term: "Relationship Reading", definition: "Reading how both sides of the pair may be affecting movement." },
        { term: "USD Context", definition: "Checking whether the US Dollar is broadly strong or weak across related pairs." }
      ],
      whyThisMatters: "A learner may look at EUR/USD rising and assume Euro is strong. That may be true, but the move may also come from Dollar weakness. Forex readings become clearer when the learner checks both sides of the pair.",
      realLifeExample: "EUR/USD rises during a session. A rushed learner says, 'Euro is strong.' A trained learner checks whether USD is also weakening against other currencies before forming a stronger reading.",
      commonMistake: "Reading a Forex pair like one single asset. A pair always has two sides.",
      quickNote: "Before reading a Forex chart, name the base and the quote."
    }
  },
  {
    type: "visual_intro",
    title: "Forex Training Instruments",
    visualKey: "forex-instrument-panel",
    label: "Roadway Tools",
    body: "A Forex reading starts before the candle. First identify the pair, then check the broader environment around it. This prevents the learner from blaming every move on only one side of the pair.",
    context: {
      keyTerms: [
        { term: "Pair Identity", definition: "Knowing which currency is the base and which is the quote." },
        { term: "USD Context", definition: "Checking whether the US Dollar is broadly strong, weak, or mixed across related pairs." },
        { term: "Session Context", definition: "The major time window currently active, such as Asia, London, or New York." },
        { term: "Spread", definition: "The gap between the price buyers offer and sellers ask." },
        { term: "Activity Window", definition: "A period where enough market participation exists to make movement easier to interpret." }
      ],
      whyThisMatters: "A Forex pair can move for more than one reason. Without checking the pair identity, USD background, session, and activity level, a learner may explain the move too quickly and miss the actual driver.",
      realLifeExample: "EUR/USD rises during the London session. Instead of immediately saying 'Euro is strong,' a trained learner checks whether USD is weakening across other pairs and whether the session has enough activity to make the movement meaningful.",
      commonMistake: "Reading the candle first and the environment later. In Forex, the environment often explains why the candle looks the way it does.",
      quickNote: "Before reading a Forex move, identify the pair and check the environment."
    }
  },
  {
    type: "visual_intro",
    title: "The One-Sided Mistake",
    visualKey: "forex-context-comparison",
    label: "Mistake Pattern",
    body: "A fast move in one Forex pair is only the first clue. Before blaming the base currency, check whether the quote currency is moving broadly across related pairs.",
    context: {
      keyTerms: [
        { term: "Isolated reading", definition: "Judging one pair without checking related market context." },
        { term: "Contextual reading", definition: "Reading the pair together with related pairs, session context, and currency background." },
        { term: "Related pairs", definition: "Other pairs that can help reveal whether one currency is broadly strong or weak." },
        { term: "USD weakness", definition: "A condition where the US Dollar is weakening across several pairs, not just one chart." },
        { term: "One-sided mistake", definition: "Explaining a pair’s movement by looking at only one side of the relationship." }
      ],
      whyThisMatters: "Forex pairs have two sides. A learner who reads only the base currency may miss that the quote currency is driving the move. Context prevents quick but weak explanations.",
      realLifeExample: "GBP/USD rises during London. A rushed learner says GBP is strong. A trained learner checks EUR/USD, AUD/USD, and USD/JPY to see whether USD weakness is part of the explanation.",
      commonMistake: "Seeing a large candle and immediately assigning the move to the first currency in the pair.",
      quickNote: "One pair gives a clue. Related pairs give context."
    }
  },
  {
    type: "practice",
    title: "Forex Mini Drill: The Quote Factor",
    visualKey: "forex-mini-drill-board",
    label: "Practical Drill",
    body: "EUR/USD rises sharply. At the same time, USD appears weak across several other pairs. What is the better Forex reading?",
    taskData: {
      type: "choice_block",
      question: "What is the better Forex reading?",
      options: [
        { id: "0", text: "EUR must be strong because EUR/USD is rising.", isCorrect: false, feedback: "Not quite. EUR may be strong, but EUR/USD can also rise because USD is weak. A Forex reading must check both sides of the pair." },
        { id: "1", text: "The move may be partly explained by broader USD weakness, so USD context should be treated as supporting evidence.", isCorrect: true, feedback: "Correct. EUR/USD is a relationship between EUR and USD. If USD is weakening broadly, the rise may not be only about EUR strength. The stronger reading is to treat USD context as supporting evidence and avoid explaining the move from one side only." },
        { id: "2", text: "Ignore USD context and judge the move from the EUR/USD candle alone.", isCorrect: false, feedback: "Not quite. The candle is only one clue. Ignoring USD context creates a one-sided reading." },
        { id: "3", text: "The quote currency has no impact on the price movement of the pair.", isCorrect: false, feedback: "Not correct. The quote currency directly matters because the pair shows the base currency priced against the quote currency." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Quote factor", definition: "The influence of the second currency in a pair." },
        { term: "Supporting evidence", definition: "Context that helps explain a move but does not give an instruction by itself." },
        { term: "Related pairs", definition: "Other Forex pairs used to check whether a currency is broadly strong or weak." },
        { term: "One-sided reading", definition: "Explaining a pair by looking at only one currency." },
        { term: "USD context", definition: "The broader condition of the US Dollar across related pairs." }
      ],
      whyThisMatters: "A Forex pair can move because the base currency changes, the quote currency changes, or both. The quote factor prevents the learner from blaming every move on the first currency in the pair.",
      realLifeExample: "EUR/USD rises sharply. A rushed learner says “Euro is strong.” A stronger learner checks whether USD is also weakening against GBP, AUD, or JPY before forming a cleaner reading.",
      commonMistake: "Assuming the first currency caused the move just because it appears first in the pair name.",
      quickNote: "A rising pair is not always base strength. Sometimes it is quote weakness."
    }
  }
];
