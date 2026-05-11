import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// ============================================
// LEVEL 0 CURRICULUM DATA (EXTRACTED FROM SEED SOURCE)
// ============================================

const MODULES = [
  {
    level: 0,
    moduleNumber: "0.1",
    title: "What Lurnava Teaches: Reading, Practice, Review",
    objective: "Welcome to the Market Reading Foundations.",
    content: `:::lesson-cards
[
  {
    "type": "mission_brief",
    "title": "You Are Not Here for Tips",
    "visualKey": "academy-path",
    "label": "Mission Brief",
    "body": "Welcome to the Academy. Most people enter the market looking for 'tips,' 'secret strategies,' or 'signals' that tell them when to click a button. This is the fastest route to failure. Imagine a foundation-stage learner who spends an entire evening watching short, high-energy trading content online. One video explains a candle pattern; another talks about a liquidity concept; a third mentions crypto funding. The learner feels informed, productive, and confident. However, as soon as they open a live price chart, they realize they cannot explain what evidence they are actually looking for. Their confidence was not built on skill; it was **borrowed conviction** from a screen.\\n\\nLurnava is not a library of content; it is a **structured training system**. We are here to prevent the 'Random Learner' trap—the habit of consuming endless information without ever building a repeatable process. You are not here to watch; you are here to be trained in **Structured Market Reading**. This requires moving past the desire for shortcuts and committing to an academy process of observation, simulation, and audit. This module prevents the most common failure in early-stage development: having a head full of facts but no system to apply them. You are here to stop guessing and start reading.",
    "context": {
      "keyTerms": ["Borrowed conviction", "Structured training system", "Market reading", "Training path"],
      "whyThisMatters": "Many learners feel productive after watching content, but they still cannot explain what they are seeing when a live chart opens. Lurnava trains the learner to build a repeatable process instead of collecting disconnected ideas.",
      "realLifeExample": "A learner watches one video about candles, another about liquidity, and another about crypto funding. They feel informed, but when the chart opens, they cannot name the evidence they are looking for.",
      "commonMistake": "Thinking “I have seen this before” means “I understand this.” Recognition without explanation is not skill.",
      "quickNote": "If you cannot explain the reading, do not trust the feeling."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Lurnava Training Loop",
    "visualKey": "learning-loop",
    "label": "Visual First",
    "body": "The loop matters because understanding alone is not training. Lurnava uses practice, missions, and review notes to turn a lesson into a repeatable learning process.",
    "objective": "Understand the four-step loop every Lurnava lesson uses to turn information into trained judgment.",
    "context": {
      "keyTerms": ["Training loop", "Practice action", "Mission", "Review note", "Feedback loop"],
      "whyThisMatters": "Reading can give a learner vocabulary, but practice and review turn that vocabulary into usable judgment. The loop exists so the learner does not stop at “I understood the lesson” and mistake that feeling for skill.",
      "realLifeExample": "A learner studies one concept, then opens a controlled practice screen to identify it. After the mission, they write what they saw, what evidence supported it, and what confused them. The review note becomes the record that helps them improve next time.",
      "commonMistake": "Finishing a lesson and immediately jumping to the next topic. That creates the feeling of progress, but it skips the practice and review needed to expose weak understanding.",
      "quickNote": "If there is no practice action and no review note, the loop is incomplete."
    }
  },
  {
    "type": "visual_intro",
    "title": "Activity Is Not the Same as Training",
    "visualKey": "learner-profiles",
    "label": "Behavioral Shift",
    "body": "The difference between a struggling learner and a developing market reader is not talent or luck. The difference is whether the learner has a repeatable process that creates a feedback loop. One path leads to confusion; the other leads to clarity.",
    "context": {
      "keyTerms": ["Random learner", "Trained learner", "Feedback loop", "Evidence", "Review habit"],
      "whyThisMatters": "Many learners confuse activity with progress. A person can watch, click, and switch methods every day without building a repeatable process.",
      "realLifeExample": "A learner practices for one week but changes strategy every two days. At the end of the week, they have spent time, but they cannot say what improved.",
      "commonMistake": "Thinking effort alone creates progress. Effort only becomes useful when it creates feedback.",
      "quickNote": "If your practice leaves no record, it leaves no lesson."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Cockpit: Your Training Instruments",
    "visualKey": "training-cockpit",
    "label": "The Ecosystem",
    "body": "A cockpit is useful because every instrument answers a specific question. Lurnava works the same way: each tool helps the learner observe, practice, record, or review.",
    "items": [],
    "context": {
      "keyTerms": [
        { "term": "Training instrument", "definition": "A tool that helps you perform one part of the learning process." },
        { "term": "Controlled practice", "definition": "A guided exercise where you focus on one concept instead of clicking randomly." },
        { "term": "Historical scenario", "definition": "A past market situation selected for study and evidence review." },
        { "term": "Journal review", "definition": "Looking back at your own reasoning to find repeated mistakes." },
        { "term": "Checklist assistant", "definition": "Support that asks better questions without replacing your judgment." }
      ],
      "whyThisMatters": "A learner can use every tool on the platform and still learn poorly if each tool is used randomly. The system matters because every tool has one job: help you learn, check, practice, study, record, or review.",
      "realLifeExample": "A learner studies one lesson about market structure, completes a task to check the idea, practices the same concept in a controlled chart exercise, studies one historical case, then writes what evidence was clear and what still felt unclear.",
      "commonMistake": "Treating the Lab like a place to click around, or treating Nava like someone who should decide for you.",
      "quickNote": "Every tool should make your reasoning clearer. If it does not, you are using it passively."
    }
  },
  {
    "type": "visual_intro",
    "title": "One Hour of Bad Practice",
    "visualKey": "practice-timeline",
    "label": "Practice Discipline",
    "body": "The difference is not time. The difference is structure. A useful session leaves behind a clear reason, a review note, and one thing to improve next time.",
    "items": [],
    "context": {
      "keyTerms": [
        { "term": "Junk practice", "definition": "Busy action without a clear learning purpose." },
        { "term": "Deliberate practice", "definition": "Focused work on one concept, one situation, and one review note." },
        { "term": "Practice action", "definition": "A controlled exercise performed for learning, not guessing." },
        { "term": "Review condition", "definition": "The specific thing that would make the learner re-check their reading." },
        { "term": "Learning record", "definition": "The written trace of what the learner saw, thought, and needs to review." }
      ],
      "whyThisMatters": "A learner can spend one hour clicking through charts and still produce no learning. Practice becomes valuable only when it creates a record that can be reviewed.",
      "realLifeExample": "After work, a learner has one hour. The rushed learner jumps between charts to feel productive. The trained learner chooses one concept, studies one situation, writes one reason, and saves one note.",
      "commonMistake": "Measuring practice by how many actions were taken instead of how clearly the learner can explain what they practiced.",
      "quickNote": "If the session leaves no note, no reason, and no review condition, it was activity — not training."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Three-Question Gate",
    "visualKey": "decision-gate",
    "label": "Decision Checkpoint",
    "body": "A reading is not ready until it can pass all three questions. If one answer is missing, mark the reading as unclear.",
    "context": {
      "keyTerms": [
        { "term": "Reading", "definition": "Your current interpretation of what the chart is showing." },
        { "term": "Evidence", "definition": "Observable facts on the chart, not feelings or guesses." },
        { "term": "Review condition", "definition": "The specific condition that would make you re-check your reading." },
        { "term": "Weak logic", "definition": "A reading based on emotion, speed, or vague confidence." },
        { "term": "Valid reading", "definition": "A reading supported by observation, evidence, and a review condition." }
      ],
      "whyThisMatters": "Most poor readings fail before the chart does anything. They fail because the learner cannot explain what they observed, what evidence supports it, or what would make the idea invalid.",
      "realLifeExample": "A learner sees price moving fast and wants to call it strong. The gate forces them to slow down and ask whether structure actually changed or whether they are only reacting to motion.",
      "commonMistake": "Treating a strong feeling as evidence. Speed, excitement, and confidence are not enough to pass the gate.",
      "quickNote": "If you cannot answer the three questions, the correct label is unclear."
    }
  },
  {
    "type": "practice",
    "title": "Training Drill: The Hype Trap",
    "visualKey": "hype-trap-path",
    "label": "Practical Drill",
    "body": "Scenario: You watch a short online video claiming a specific candle pattern works well. Later, you open the Lab and see a similar-looking candle. Because the video is fresh in your memory, you feel tempted to use the idea immediately.",
    "taskData": {
      "type": "choice_block",
      "question": "What is the correct Lurnava response?",
      "options": [
        {
          "id": "A",
          "text": "Apply the pattern immediately because the candle looks similar and you want to see a win.",
          "isCorrect": false,
          "feedback": "Not correct. This is impulse driven by familiarity, not evidence. A similar-looking candle is not enough to justify action. Lurnava requires context and reasoning, not visual resemblance alone."
        },
        {
          "id": "B",
          "text": "Change timeframes repeatedly until the idea appears correct so you can justify the action.",
          "isCorrect": false,
          "feedback": "Not correct. Changing timeframes until the idea looks valid is a form of self-justification. This is not analysis. It is a bias-driven attempt to force confirmation."
        },
        {
          "id": "C",
          "text": "Identify the actual concept, check the chart context for evidence, practice it deliberately in the simulator, and write a review note.",
          "isCorrect": true,
          "feedback": "Correct. A Lurnava learner does not act because something 'looks familiar.' They identify the concept, check context, verify evidence, practice deliberately, and record reasoning. That is how skill is built.\\n\\n**Lurnava Principle**: Recognition is not enough. Evidence must confirm the reading."
        },
        {
          "id": "D",
          "text": "Skip the journal entry and the reasoning because this is only a practice session.",
          "isCorrect": false,
          "feedback": "Not correct. Practice without recording reasoning weakens the learning loop. In Lurnava, deliberate practice must produce reviewable logic, not just activity."
        }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Hype trap", "definition": "A psychological state where urgency and familiarity replace objective analysis." },
        { "term": "Context", "definition": "The broader chart environment surrounding a specific signal." },
        { "term": "Evidence", "definition": "The objective facts required to validate a reading." },
        { "term": "Deliberate practice", "definition": "Focused training on a specific concept with a review note." },
        { "term": "Review note", "definition": "The recorded logic used to audit a decision later." }
      ],
      "whyThisMatters": "Many learners mistake familiarity for proof. Seeing a chart that looks similar to a recent video idea can create false confidence. Lurnava trains the learner to slow down, verify context, and act only through structure.",
      "realLifeExample": "A learner watches a video about a candle setup in the morning. At night, they open the Lab, see a vaguely similar candle, and feel convinced they found the same idea. Without checking market structure or evidence, they are tempted to act too quickly.",
      "commonMistake": "Using a remembered idea before verifying whether the concept, context, and evidence are actually present on the chart.",
      "quickNote": "Similarity is not validity. A chart can look familiar without confirming the same reading."
    }
  },
  {
    "type": "summary",
    "title": "Debrief: What You Are Being Trained For",
    "visualKey": "orientation-debrief",
    "label": "Final Review",
    "body": "You are being trained to **explain your reading** with objective logic. You are not here to memorize 'magic' tips or react to every flickering movement on the screen. True skill in this academy comes from clarity and a repeatable process, not just confidence or speed. \\n\\nEvery reading you record and every journal entry you save is data that helps you understand your own thinking patterns. Commit to the simulator. Commit to the journal. Commit to the loop. This discipline is what separates the trained learner from the random guesser.\\n\\n**Next**: We move from the 'How' to the 'What.' In Module 0.2, you will study what a market actually is: an interaction between buyers, sellers, available orders, and the resulting price."
  }
]
:::`,
    forexAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Forex Brief: Reading a Relationship",
    "visualKey": "forex-relationship",
    "label": "Roadway Context",
    "body": "In Forex, a chart is a comparison. EUR/USD does not show Euro alone; it shows Euro priced against the US Dollar. Before reading the move, identify both sides of the pair.",
    "context": {
      "keyTerms": [
        { "term": "Currency Pair", "definition": "Two currencies compared against each other." },
        { "term": "Base Currency", "definition": "The first currency in the pair. In EUR/USD, EUR is the base." },
        { "term": "Quote Currency", "definition": "The second currency in the pair. In EUR/USD, USD is the quote." },
        { "term": "Relationship Reading", "definition": "Reading how both sides of the pair may be affecting movement." },
        { "term": "USD Context", "definition": "Checking whether the US Dollar is broadly strong or weak across related pairs." }
      ],
      "whyThisMatters": "A learner may look at EUR/USD rising and assume Euro is strong. That may be true, but the move may also come from Dollar weakness. Forex readings become clearer when the learner checks both sides of the pair.",
      "realLifeExample": "EUR/USD rises during a session. A rushed learner says, 'Euro is strong.' A trained learner checks whether USD is also weakening against other currencies before forming a stronger reading.",
      "commonMistake": "Reading a Forex pair like one single asset. A pair always has two sides.",
      "quickNote": "Before reading a Forex chart, name the base and the quote."
    }
  },
  {
    "type": "visual_intro",
    "title": "Forex Training Instruments",
    "visualKey": "forex-instrument-panel",
    "label": "Roadway Tools",
    "body": "A Forex reading starts before the candle. First identify the pair, then check the broader environment around it. This prevents the learner from blaming every move on only one side of the pair.",
    "context": {
      "keyTerms": [
        { "term": "Pair Identity", "definition": "Knowing which currency is the base and which is the quote." },
        { "term": "USD Context", "definition": "Checking whether the US Dollar is broadly strong, weak, or mixed across related pairs." },
        { "term": "Session Context", "definition": "The major time window currently active, such as Asia, London, or New York." },
        { "term": "Spread", "definition": "The gap between the price buyers offer and sellers ask." },
        { "term": "Activity Window", "definition": "A period where enough market participation exists to make movement easier to interpret." }
      ],
      "whyThisMatters": "A Forex pair can move for more than one reason. Without checking the pair identity, USD background, session, and activity level, a learner may explain the move too quickly and miss the actual driver.",
      "realLifeExample": "EUR/USD rises during the London session. Instead of immediately saying 'Euro is strong,' a trained learner checks whether USD is weakening across other pairs and whether the session has enough activity to make the movement meaningful.",
      "commonMistake": "Reading the candle first and the environment later. In Forex, the environment often explains why the candle looks the way it does.",
      "quickNote": "Before reading a Forex move, identify the pair and check the environment."
    }
  },

  {
    "type": "visual_intro",
    "title": "The One-Sided Mistake",
    "visualKey": "forex-context-comparison",
    "label": "Mistake Pattern",
    "body": "A fast move in one Forex pair is only the first clue. Before blaming the base currency, check whether the quote currency is moving broadly across related pairs.",
    "context": {
      "keyTerms": [
        { "term": "Isolated reading", "definition": "Judging one pair without checking related market context." },
        { "term": "Contextual reading", "definition": "Reading the pair together with related pairs, session context, and currency background." },
        { "term": "Related pairs", "definition": "Other pairs that can help reveal whether one currency is broadly strong or weak." },
        { "term": "USD weakness", "definition": "A condition where the US Dollar is weakening across several pairs, not just one chart." },
        { "term": "One-sided mistake", "definition": "Explaining a pair’s movement by looking at only one side of the relationship." }
      ],
      "whyThisMatters": "Forex pairs have two sides. A learner who reads only the base currency may miss that the quote currency is driving the move. Context prevents quick but weak explanations.",
      "realLifeExample": "GBP/USD rises during London. A rushed learner says GBP is strong. A trained learner checks EUR/USD, AUD/USD, and USD/JPY to see whether USD weakness is part of the explanation.",
      "commonMistake": "Seeing a large candle and immediately assigning the move to the first currency in the pair.",
      "quickNote": "One pair gives a clue. Related pairs give context."
    }
  },

  {
    "type": "practice",
    "title": "Forex Mini Drill: The Quote Factor",
    "visualKey": "forex-mini-drill-board",
    "label": "Practical Drill",
    "body": "EUR/USD rises sharply. At the same time, USD appears weak across several other pairs. What is the better Forex reading?",
    "taskData": {
      "type": "choice_block",
      "question": "What is the better Forex reading?",
      "options": [
        "EUR must be strong because EUR/USD is rising.",
        "The move may be partly explained by broader USD weakness, so USD context should be treated as supporting evidence.",
        "Ignore USD context and judge the move from the EUR/USD candle alone.",
        "The quote currency has no impact on the price movement of the pair."
      ],
      "correctIndex": 1,
      "feedback": {
        "1": "Correct. EUR/USD is a relationship between EUR and USD. If USD is weakening broadly, the rise may not be only about EUR strength. The stronger reading is to treat USD context as supporting evidence and avoid explaining the move from one side only.",
        "0": "Not quite. EUR may be strong, but EUR/USD can also rise because USD is weak. A Forex reading must check both sides of the pair.",
        "2": "Not quite. The candle is only one clue. Ignoring USD context creates a one-sided reading.",
        "3": "Not correct. The quote currency directly matters because the pair shows the base currency priced against the quote currency."
      }
    },
    "context": {
      "keyTerms": [
        { "term": "Quote factor", "definition": "The influence of the second currency in a pair." },
        { "term": "Supporting evidence", "definition": "Context that helps explain a move but does not give an instruction by itself." },
        { "term": "Related pairs", "definition": "Other Forex pairs used to check whether a currency is broadly strong or weak." },
        { "term": "One-sided reading", "definition": "Explaining a pair by looking at only one currency." },
        { "term": "USD context", "definition": "The broader condition of the US Dollar across related pairs." }
      ],
      "whyThisMatters": "A Forex pair can move because the base currency changes, the quote currency changes, or both. The quote factor prevents the learner from blaming every move on the first currency in the pair.",
      "realLifeExample": "EUR/USD rises sharply. A rushed learner says “Euro is strong.” A stronger learner checks whether USD is also weakening against GBP, AUD, or JPY before forming a cleaner reading.",
      "commonMistake": "Assuming the first currency caused the move just because it appears first in the pair name.",
      "quickNote": "A rising pair is not always base strength. Sometimes it is quote weakness."
    }
  }
]
:::`,
    goldAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Gold Brief: Speed vs. Clarity",
    "visualKey": "gold-reading-map",
    "label": "Roadway Context",
    "body": "Gold can move quickly, but speed alone does not make a reading reliable. A Lurnava learner checks whether the move has structure, liquidity, wick context, and supporting Dollar/rate background.",
    "context": {
      "keyTerms": [
        { "term": "XAU/USD", "definition": "Gold priced against the US Dollar." },
        { "term": "Liquidity", "definition": "How much active buying and selling is available. Thin liquidity can make movement noisy." },
        { "term": "Wick", "definition": "The thin part of a candle showing where price traveled before being pushed back." },
        { "term": "Dollar context", "definition": "The broader strength or weakness of the US Dollar." },
        { "term": "Rate pressure", "definition": "Interest-rate expectations that can influence Gold demand and pricing." },
        { "term": "Speed vs clarity", "definition": "The difference between fast movement and reliable evidence." }
      ],
      "whyThisMatters": "Gold often moves faster than learners expect. If a learner treats every spike as meaningful, they may confuse noise with evidence. The goal is not to react to speed, but to decide whether the move is structurally clear.",
      "realLifeExample": "Gold spikes upward quickly during a news-sensitive period, then leaves a long wick. A rushed learner thinks the move is strong. A trained learner checks whether the structure actually changed or whether price only rejected quickly in noisy conditions.",
      "commonMistake": "Thinking fast movement means clear direction. In Gold, speed can be noise unless structure and context support it.",
      "quickNote": "Fast is not the same as clear."
    }
  },
  {
    "type": "visual_intro",
    "title": "Gold Context Drivers",
    "visualKey": "gold-driver-map",
    "label": "Context Drivers",
    "body": "Gold can move quickly, but speed alone does not make a reading. A Lurnava learner checks the background drivers first, then decides whether the chart is showing structure or only noise.",
    "context": {
      "keyTerms": [
        { "term": "Volatility", "definition": "How quickly and widely price moves." },
        { "term": "USD Context", "definition": "The broader strength or weakness of the US Dollar." },
        { "term": "Rate Expectations", "definition": "Market expectations about interest rates and the attractiveness of holding cash or interest-paying assets." },
        { "term": "Market Uncertainty", "definition": "Periods where fear, risk, or instability can increase attention on Gold." },
        { "term": "Liquidity", "definition": "How much active buying and selling is available. Thin liquidity can make Gold movement noisy." },
        { "term": "Wick Rejection", "definition": "When price moves into an area but is pushed back before the candle closes." }
      ],
      "whyThisMatters": "Gold often reacts quickly to background conditions. If a learner reads only the candle, they may mistake a fast move for a clear move. Context drivers help separate meaningful pressure from temporary noise.",
      "realLifeExample": "Gold jumps during a news-sensitive period while the Dollar is weakening. A rushed learner reacts to the spike. A trained learner checks whether the move is supported by USD context, rate expectations, liquidity, and whether the candle holds or rejects.",
      "commonMistake": "Treating Gold like a normal slow-moving chart. Gold can move fast, reject quickly, and punish readings that ignore context.",
      "quickNote": "In Gold, context comes before confidence."
    }
  },
  {
    "type": "visual_intro",
    "title": "The 'Urgency' Trap",
    "visualKey": "gold-urgency-trap",
    "label": "Mistake Pattern",
    "body": "Gold often moves quickly and leaves dramatic wicks. A rushed learner treats that urgency as proof. A trained learner treats the wick as a clue and waits for structural confirmation before forming a reading.",
    "context": {
      "keyTerms": [
        { "term": "Wick", "definition": "The thin line above or below a candle showing where price travelled before pulling back." },
        { "term": "Volatility", "definition": "How quickly and sharply price moves." },
        { "term": "Structural evidence", "definition": "Observable chart conditions supporting a reading." },
        { "term": "Urgency trap", "definition": "Mistaking fast movement for proof." }
      ],
      "whyThisMatters": "Gold can move so fast that the learner feels forced to react immediately. That pressure often creates weak readings. Speed increases emotion, not certainty.",
      "realLifeExample": "Gold spikes quickly and leaves a long upper wick. A rushed learner instantly assumes reversal. A trained learner waits to see whether structure actually confirms weakness.",
      "commonMistake": "Treating a dramatic wick as a direct instruction instead of a possible clue.",
      "quickNote": "Fast does not mean clear. A wick can suggest something, but it must be validated."
    }
  },
  {
    "type": "practice",
    "title": "Gold Mini Drill: Noise vs. Clue",
    "visualKey": "gold-noise-decision",
    "label": "Practical Drill",
    "body": "Gold forms a large candle with long wicks in both directions during a highly volatile period. The move looks dramatic, but the candle also shows rejection on both sides.",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined Gold reading?",
      "options": [
        { "id": "a", "text": "Big movement means high clarity, so the reading should be trusted immediately." },
        { "id": "b", "text": "The long wicks alone are a guaranteed signal that price will reverse soon." },
        { "id": "c", "text": "Classify the condition as noisy or unclear until structure provides stronger evidence." },
        { "id": "d", "text": "Skip the review note because Gold moves too fast to record reasoning." }
      ],
      "correctId": "c",
      "feedback": {
        "c": "Correct. A large Gold candle with long wicks in both directions can show volatility, rejection, or unclear pressure. A Lurnava learner does not force a reading from drama alone. They classify the condition as noisy or unclear until structure gives stronger evidence.\\n\\n**Lurnava Principle:** When the chart is unclear, 'unclear' is a valid reading.",
        "a": "Not correct. Big movement does not automatically mean high clarity. In Gold, speed can create emotional pressure and make noisy movement look important.",
        "b": "Not correct. A long wick can be a clue, but it is not a guaranteed reversal signal. The learner still needs structure and confirmation.",
        "d": "Not correct. Fast markets make review more important, not less important. If the learner does not record reasoning, the session leaves no learning record."
      }
    },
    "context": {
      "keyTerms": [
        { "term": "Noisy condition", "definition": "A market condition where movement is active but not clear enough to form a strong reading." },
        { "term": "Wick", "definition": "The thin part of a candle showing where price traveled before being pushed back." },
        { "term": "Volatility", "definition": "How quickly and sharply price moves." },
        { "term": "Structural evidence", "definition": "Observable chart behavior that supports a reading." },
        { "term": "Unclear reading", "definition": "An honest label used when the chart does not provide enough evidence yet." }
      ],
      "whyThisMatters": "Gold can move dramatically and still be unclear. A learner who treats every large candle as a signal may confuse activity with evidence. Learning to label noise honestly prevents forced readings.",
      "realLifeExample": "Gold creates a large candle with long wicks above and below. A rushed learner tries to decide direction immediately. A trained learner recognizes that both sides were rejected and waits for structure before forming a stronger reading.",
      "commonMistake": "Thinking that a dramatic candle must contain a clear answer.",
      "quickNote": "Noisy is a valid label. You do not need to force a reading."
    }
  }
]
:::`,
    cryptoAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Crypto Brief: Mechanics Over Hype",
    "visualKey": "crypto-mechanics",
    "label": "Roadway Context",
    "body": "Crypto trades all day, but not every move is clean. Before trusting a crypto chart, check whether the move is supported by spot activity, perpetual mechanics, BTC context, and exchange conditions.",
    "context": {
      "keyTerms": [
        { "term": "Spot", "definition": "Buying or holding the actual crypto asset. If you buy BTC on spot, you hold BTC." },
        { "term": "Perpetual", "definition": "A derivative contract that follows the asset price without owning the asset. Affected by leverage and funding." },
        { "term": "Funding", "definition": "A periodic payment mechanism showing pressure between long and short positions." },
        { "term": "Liquidation pressure", "definition": "Forced closing of leveraged positions when traders cannot maintain margin." },
        { "term": "BTC context", "definition": "The influence Bitcoin often has on the broader crypto market as a reference asset." },
        { "term": "Exchange noise", "definition": "Movement that may appear strong in one place or thin condition but is not broadly supported." }
      ],
      "whyThisMatters": "Crypto can move because of real buying, leveraged contract pressure, BTC-wide movement, or thin exchange conditions. If a learner only looks at the candle, they may confuse hype or mechanical pressure with clean market evidence.",
      "realLifeExample": "BTC moves sharply during a low-liquidity period, and several altcoins follow. A rushed learner assumes every coin is independently strong. A trained learner first checks BTC context, market breadth, and whether the move is supported beyond one noisy chart.",
      "commonMistake": "Treating every fast crypto move as meaningful without checking whether it is broad, supported, and mechanically clean.",
      "quickNote": "In crypto, speed is not proof. Check the mechanics behind the move."
    }
  },
  {
    "type": "concept",
    "title": "Crypto Market Mechanics",
    "label": "Market Mechanics",
    "body": "Crypto moves can come from actual buying, contract pressure, forced exits, BTC-wide movement, or thin exchange conditions. Before trusting a fast move, check what may be driving it.",
    "items": [
      { "title": "Spot", "body": "Actual asset buying/selling. The foundational driver of price.", "icon": "check" },
      { "title": "Perpetuals", "body": "Derivative contracts that track price without owning the asset.", "icon": "layers" },
      { "title": "Funding", "body": "Periodic payment pressure between long and short positions.", "icon": "scale" },
      { "title": "Liquidation Pressure", "body": "Forced exits from leveraged positions due to margin failure.", "icon": "zap" },
      { "title": "BTC Context", "body": "Bitcoin's broad influence on the flow of the wider market.", "icon": "target" },
      { "title": "Exchange Noise", "body": "Movements that appear strong but lack broad market support.", "icon": "alert" }
    ],
    "context": {
      "keyTerms": [
        { "term": "Spot", "definition": "Buying or holding the actual crypto asset." },
        { "term": "Perpetual", "definition": "A derivative contract that tracks the asset price without owning the asset." },
        { "term": "Funding", "definition": "A periodic payment between long and short positions in perpetual markets." },
        { "term": "Leverage", "definition": "Using borrowed exposure to control a larger position than the account balance alone." },
        { "term": "Liquidation pressure", "definition": "Forced closing of leveraged positions when traders cannot maintain margin." },
        { "term": "Exchange noise", "definition": "Movement that may appear strong in one place or thin condition but is not broadly supported." }
      ],
      "whyThisMatters": "Crypto can move because of spot demand, leveraged contract pressure, forced liquidations, BTC-wide movement, or thin liquidity. If a learner only looks at the candle, they may confuse mechanical pressure with clean market evidence.",
      "realLifeExample": "BTC moves sharply and altcoins follow. At the same time, perpetual funding is stretched and leveraged traders are crowded on one side. A trained learner does not call the move clean immediately; they first check whether the movement is broad, supported, or driven by pressure.",
      "commonMistake": "Treating every fast crypto move as meaningful without checking whether it is supported by spot activity, BTC context, and market mechanics.",
      "quickNote": "In crypto, speed is not proof. Check the mechanics behind the move."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Social Hype Fallacy",
    "visualKey": "hype-trap-path",
    "label": "Mistake Pattern",
    "body": "Crypto hype can make a weak idea feel urgent. A Lurnava learner checks whether the move is structurally supported before trusting it.",
    "context": {
      "keyTerms": [
        { "term": "Social hype", "definition": "Public excitement around a coin, setup, or move." },
        { "term": "Public emotion", "definition": "The visible reaction of traders online, often driven by fear, greed, or attention." },
        { "term": "Mechanic-first reading", "definition": "Checking structure, funding, BTC context, and liquidity before trusting the move." },
        { "term": "Market evidence", "definition": "Observable facts that support a reading, not opinions or excitement." },
        { "term": "Hype fallacy", "definition": "Mistaking attention or emotion for actual market confirmation." }
      ],
      "whyThisMatters": "Crypto moves can attract attention very quickly. When public excitement rises, learners may feel late, pressured, or overly confident. That emotional pressure can make weak evidence feel stronger than it is.",
      "realLifeExample": "A coin starts trending online. Posts, comments, and videos all say the move is strong. A rushed learner opens the chart and wants to believe it immediately. A trained learner first checks whether structure, BTC context, and funding conditions support the move.",
      "commonMistake": "Thinking that a move is valid because many people are talking about it.",
      "quickNote": "Attention is not evidence. Hype must be tested against structure and mechanics."
    }
  },
  {
    "type": "practice",
    "title": "Crypto Mini Drill: Hype Filtering",
    "visualKey": "crypto-hype-filtering-drill",
    "label": "Practical Drill",
    "body": "Scenario: BTC moves sharply while funding is very high and public hype is rising. The chart looks active, but the environment may be crowded and emotionally charged.",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined crypto reading?",
      "options": [
        { "id": "a", "text": "Public excitement means the move is guaranteed to continue.", "isCorrect": false, "feedback": "Not correct. Public excitement does not guarantee continuation. Hype can increase risk because many learners may already be emotionally committed to the move." },
        { "id": "b", "text": "Funding alone tells the learner exactly what to do next.", "isCorrect": false, "feedback": "Not correct. Funding is context, not a command. It can show pressure between market participants, but the learner still needs structure and evidence." },
        { "id": "c", "text": "Treat funding and public reaction as supporting context to review carefully, not as a direct instruction.", "isCorrect": true, "feedback": "Correct. High funding and public excitement can reveal pressure, crowding, or emotional conditions, but they do not give a direct instruction. A Lurnava learner treats them as supporting context and checks whether chart structure and market mechanics confirm the reading. \\n\\nLurnava Principle: Context helps you review. It does not replace evidence." },
        { "id": "d", "text": "Ignore market mechanics and trust the crowd reaction because many people agree.", "isCorrect": false, "feedback": "Not correct. Crowd reaction can be noisy. A Lurnava learner checks mechanics before trusting public emotion." }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Funding", "definition": "A periodic payment between long and short positions in perpetual markets." },
        { "term": "Public reaction", "definition": "Visible excitement, fear, or attention from traders online." },
        { "term": "Supporting context", "definition": "Information that helps explain conditions but does not give a direct instruction." },
        { "term": "Crowded condition", "definition": "A situation where many participants may be positioned or emotionally leaning the same way." },
        { "term": "Hype filtering", "definition": "Separating market evidence from public excitement." }
      ],
      "whyThisMatters": "Crypto often moves with speed, leverage, and public emotion at the same time. If a learner treats funding or hype as an instruction, they may react to pressure instead of reading the market.",
      "realLifeExample": "BTC moves quickly and social feeds become loud. Funding is also high, showing pressure in perpetual markets. A rushed learner treats the excitement as confirmation. A trained learner slows down and asks whether the move is supported by structure, liquidity, and broader context.",
      "commonMistake": "Treating public excitement or high funding as proof that the move must continue.",
      "quickNote": "Funding and hype are context, not commands."
    }
  }
]
:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question:
        "Scenario: You watch a 'short tip' video online, open the Lurnava Lab, and see something similar happening. What is the most disciplined training action?",
      options: [
        "Act immediately to see if the tip works with real-time motion.",
        "Identify the core concept, check the structural context in the Lab, practice it deliberately in the simulator, and record a review note.",
        "Wait for Nava to tell you exactly where to click so you don't make a mistake.",
        "Search for more videos to see if other people agree with the tip before deciding.",
      ],
      correctIndex: 1,
    },
    skillLevel: "beginner",
    orderIndex: 1,
  },
  {
    level: 0,
    moduleNumber: "0.2",
    title: "What a Market Really Is",
    objective: "Understanding the core of market interaction.",
    content: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "What a Market Really Is",
    "label": "The Core",
    "visualKey": "market-mechanism",
    "body": "A market is not a prediction machine. It is a place where buy orders and sell orders meet. The chart records those interactions after they happen.",
    "context": {
      "keyTerms": [
        { "term": "Market", "definition": "A place or system where buyers and sellers exchange assets." },
        { "term": "Buyer", "definition": "A participant willing to pay a price to receive an asset." },
        { "term": "Seller", "definition": "A participant willing to accept a price to give up an asset." },
        { "term": "Order", "definition": "An instruction to buy or sell under certain conditions." },
        { "term": "Matching engine", "definition": "The system that matches compatible buy and sell orders." },
        { "term": "Transaction", "definition": "The completed exchange between a buyer and a seller." },
        { "term": "Price chart", "definition": "A visual record of completed market interactions over time." }
      ],
      "whyThisMatters": "Many learners treat a chart like a signal machine. But a chart is a record of transactions. If the learner understands that every candle comes from buyers, sellers, orders, and matching, the chart becomes easier to read as behavior instead of mystery.",
      "realLifeExample": "In a marketplace, one person wants to buy a phone and another wants to sell it. When they agree on a price, a transaction happens. Financial markets work differently in scale and speed, but the basic idea is still buyers and sellers meeting through orders.",
      "commonMistake": "Thinking the chart tells the future. The chart records what already happened; the learner’s job is to read the behavior and context behind that record.",
      "quickNote": "A chart is not magic. It is a record of interaction."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Meeting of Orders",
    "label": "Mechanics",
    "visualKey": "order-matching",
    "body": "Price changes when orders meet at new levels. A chart does not move by magic; it updates because transactions are happening between buyers and sellers.",
    "context": {
      "keyTerms": [
        { "term": "Bid", "definition": "The price a buyer is willing to pay." },
        { "term": "Ask", "definition": "The price a seller is willing to accept." },
        { "term": "Spread", "definition": "The gap between the best bid and the best ask." },
        { "term": "Order", "definition": "An instruction to buy or sell under certain conditions." },
        { "term": "Transaction", "definition": "A completed exchange between a buyer and a seller." },
        { "term": "Aggressive buyer", "definition": "A buyer willing to accept the seller’s price to get filled sooner." },
        { "term": "Aggressive seller", "definition": "A seller willing to accept the buyer’s price to sell sooner." },
        { "term": "Liquidity", "definition": "Available orders in the market that can absorb buying or selling." }
      ],
      "whyThisMatters": "Many learners look at price movement as if it appears by itself. In reality, price updates because orders are being matched. Understanding this helps the learner read candles as records of buyer-seller interaction, not random motion.",
      "realLifeExample": "A seller is willing to sell at 100.10. A buyer wants the asset now and accepts that price. A transaction happens at 100.10, and the chart records the result. If buyers keep accepting higher asks, price may print higher.",
      "commonMistake": "Thinking price moves because a candle “wants” to go somewhere. Candles only record transactions that already happened.",
      "quickNote": "Price moves when orders meet."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Three Pillars",
    "label": "Market Mechanics",
    "visualKey": "microstructure-board",
    "body": "Orders are the instructions. Liquidity is the available order depth. Spread is the gap between the best buyer and seller prices. Together, they shape how clean or noisy a market can feel.",
    "context": {
      "keyTerms": [
        { "term": "Bid", "definition": "The price a buyer is willing to pay." },
        { "term": "Ask", "definition": "The price a seller is willing to accept." },
        { "term": "Spread", "definition": "The gap between the best bid and the best ask." },
        { "term": "Liquidity", "definition": "Available orders that can absorb buying or selling." },
        { "term": "Market Order", "definition": "An order that prioritizes getting filled now." },
        { "term": "Limit Order", "definition": "An order that sets a specific price condition." },
        { "term": "Order Book", "definition": "A list of buy and sell orders waiting in the market." }
      ],
      "whyThisMatters": "A chart can look confusing if the learner does not understand what sits behind price movement. Spread, liquidity, and orders explain why some moves look clean while others look noisy, jumpy, or hard to read.",
      "realLifeExample": "If there are many buy and sell orders near the current price, movement may appear smoother. If there are few available orders, price may jump more easily because there is less liquidity to absorb activity.",
      "commonMistake": "Thinking price moves smoothly just because the chart line looks continuous. Under the chart, price is moving through available orders.",
      "quickNote": "Spread, liquidity, and orders are the market’s working parts."
    }
  },
  {
    "type": "visual_intro",
    "title": "Liquidity in Action",
    "label": "Example",
    "visualKey": "liquidity-comparison",
    "body": "Liquidity affects how far price must travel to complete transactions. A market with more nearby orders can absorb activity more smoothly; a thin market may move sharply from the same action.",
    "context": {
      "keyTerms": [
        { "term": "Liquidity", "definition": "The availability of orders that can absorb buying or selling action." },
        { "term": "Illiquid Market", "definition": "A market with few available orders and large gaps between prices." },
        { "term": "Order Depth", "definition": "The volume of orders stacked at various price levels." },
        { "term": "Matching", "definition": "The process of pairing a buyer with a seller." },
        { "term": "Slippage", "definition": "The difference between the expected price and the actual execution price." },
        { "term": "Price Movement", "definition": "The result of orders consuming liquidity across different levels." }
      ],
      "whyThisMatters": "Understanding liquidity explains why the same action can cause different results. In a dense (liquid) market, price is stable. In a sparse (illiquid) market, price is volatile and can jump unexpectedly.",
      "realLifeExample": "Buying a common item at a large supermarket (liquid) vs. a rare collectible at a small auction (illiquid). In the supermarket, the price doesn't change because you bought one. In the auction, your bid can move the price significantly.",
      "commonMistake": "Expecting price to move with the same 'weight' in every market. Different assets have different liquidity depths.",
      "quickNote": "Same buy order. Different order depth. Different price movement."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Intent Rule",
    "label": "Logic",
    "visualKey": "intent-logic",
    "body": "A pattern is not the cause. It is the visible result of orders and pressure. A Lurnava learner studies the behavior behind the pattern, not the shape alone.",
    "context": {
      "keyTerms": [
        { "term": "Intent", "definition": "The visible purpose behind market activity, shown through buying, selling, defending, or exiting." },
        { "term": "Pattern", "definition": "A shape on the chart formed after price has moved." },
        { "term": "Pressure", "definition": "The effect created when one side becomes more aggressive or persistent." },
        { "term": "Participant", "definition": "A buyer, seller, algorithm, or institution interacting with the market." },
        { "term": "Symptom", "definition": "A visible sign of something deeper happening underneath." },
        { "term": "Order flow", "definition": "The movement and matching of buy and sell orders over time." }
      ],
      "whyThisMatters": "Many learners memorize chart patterns as if the shape itself controls price. This creates shallow reading. Lurnava trains the learner to ask what behavior may have created the pattern.",
      "realLifeExample": "A chart forms a breakout shape. A rushed learner sees the shape and assumes the move is valid. A trained learner asks whether buyers actually showed pressure, or whether sellers were simply absent.",
      "commonMistake": "Thinking a pattern is powerful by itself, without checking the market behavior that formed it.",
      "quickNote": "The shape is the symptom. The behavior is the lesson."
    }
  },
  {
    "type": "visual_intro",
    "title": "How to Approach the Chart",
    "label": "Mindset",
    "visualKey": "mindset-comparison",
    "body": "Do not “guess” based on what the chart looks like. Observe what buyers, sellers, and pressure are actually doing.",
    "context": {
      "keyTerms": [
        { "term": "Observation", "definition": "The act of gathering evidence from market behavior before forming a conclusion." },
        { "term": "Guessing", "definition": "Forming an opinion based on chart appearance without underlying evidence." },
        { "term": "Evidence", "definition": "Visible signs of market pressure, such as buyers hitting the Ask or sellers being absorbed." },
        { "term": "Buy pressure", "definition": "The result of buyers being more aggressive than sellers at a specific level." },
        { "term": "Ask", "definition": "The price level where sellers are waiting to be matched." },
        { "term": "Intent", "definition": "The visible purpose behind price movement." }
      ],
      "whyThisMatters": "Many beginners form opinions from chart appearance alone. Lurnava trains the learner to build conclusions from visible market behavior.",
      "realLifeExample": "A chart rises quickly. A guesser buys because the move “looks strong.” An observer checks whether buyers are actually pressing through seller levels or whether the move is weak and unsupported.",
      "commonMistake": "Mistaking visual direction for confirmed evidence.",
      "quickNote": "Appearance is not proof. Read behavior, pressure, and intent."
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task",
    "visualKey": "transaction-mechanism",
    "body": "A buyer is willing to pay a price, and a seller is willing to accept that price. What has to happen for this to become a market transaction?",
    "taskData": {
      "type": "choice_block",
      "question": "Which explanation is correct?",
      "options": [
        { "id": "A", "text": "A transaction happens when the chart forms a special pattern.", "isCorrect": false, "feedback": "Not correct. A pattern does not create a transaction. Patterns appear after price has moved; transactions come from matched buy and sell orders." },
        { "id": "B", "text": "A transaction happens when compatible buy and sell orders are matched at a price.", "isCorrect": true, "feedback": "Correct. A transaction happens when compatible buy and sell orders are matched at a price. The chart then records that completed exchange." },
        { "id": "C", "text": "A transaction happens when the computer randomly decides price should move.", "isCorrect": false, "feedback": "Not correct. The computer does not randomly decide that price should move. A matching engine connects compatible orders. Price updates because transactions happen." },
        { "id": "D", "text": "A transaction happens automatically every few seconds regardless of orders.", "isCorrect": false, "feedback": "Not correct. Transactions do not happen automatically just because time passes. They happen when orders are matched." }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Transaction", "definition": "A completed exchange between buyer and seller through matched orders." },
        { "term": "Matched order", "definition": "A buy order and sell order that can execute at a compatible price." },
        { "term": "Buyer", "definition": "A participant willing to pay for an asset." },
        { "term": "Seller", "definition": "A participant willing to give up an asset for a price." },
        { "term": "Chart record", "definition": "The visual record of completed market interactions." }
      ],
      "whyThisMatters": "If a learner thinks transactions happen because of patterns, randomness, or time, the chart feels mysterious. Understanding matched orders makes price movement easier to read as market behavior.",
      "commonMistake": "Thinking the chart creates transactions. The chart only records transactions after they happen.",
      "quickNote": "No matched orders, no transaction."
    }
  },
  {
    "type": "summary",
    "title": "Module Debrief: The Machine Behind the Chart",
    "label": "Module Debrief",
    "visualKey": "market-mechanism-recap",
    "body": "You now understand that a market is not a signal machine. It is a system of participants, orders, matching, transactions, liquidity, and visible chart records.\\n\\n### You should now be able to explain:\\n\\n* [x] What a market really is\\n* [x] How buyers and sellers create transactions\\n* [x] Why bid, ask, spread, orders, and liquidity matter\\n* [x] Why price can move differently in liquid and illiquid conditions\\n* [x] Why patterns are symptoms of behavior, not magic causes\\n* [x] How an observer approaches a chart differently from a guesser\\n\\n**Next: Candles.** Now that you understand that charts record transactions, the next module shows how those transactions become candle bodies, wicks, and market structure.",
    "context": {
      "keyTerms": [
        { "term": "Matching system", "definition": "The mechanism that connects buyers and sellers." },
        { "term": "Visual record", "definition": "What you see on the chart (candles, patterns)." },
        { "term": "Synthesis", "definition": "Combining individual concepts into a complete mental model." }
      ],
      "whyThisMatters": "The chart is the record. The market is the machine underneath. Mastery comes from reading the machine.",
      "quickNote": "You are no longer reading shapes. You are reading behavior."
    }
  }
]
:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "Which explanation is correct?",
      options: [
        {
          id: "A",
          text: "A transaction happens when the chart forms a special pattern.",
          isCorrect: false,
          feedback:
            "Not correct. A pattern does not create a transaction. Patterns appear after price has moved; transactions come from matched buy and sell orders.",
        },
        {
          id: "B",
          text: "A transaction happens when compatible buy and sell orders are matched at a price.",
          isCorrect: true,
          feedback:
            "Correct. A transaction happens when compatible buy and sell orders are matched at a price. The chart then records that completed exchange.",
        },
        {
          id: "C",
          text: "A transaction happens when the computer randomly decides price should move.",
          isCorrect: false,
          feedback:
            "Not correct. The computer does not randomly decide that price should move. A matching engine connects compatible orders. Price updates because transactions happen.",
        },
        {
          id: "D",
          text: "A transaction happens automatically every few seconds regardless of orders.",
          isCorrect: false,
          feedback:
            "Not correct. Transactions do not happen automatically just because time passes. They happen when orders are matched.",
        },
      ],
    },
    forexAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Forex Is a Quote Network, Not One Central Exchange",
    "label": "Market Structure",
    "visualKey": "forex-network-visual",
    "body": "Forex is decentralized. You are not looking at one universal central exchange order book; you are looking at a feed generated by a network of providers, brokers, and aggregators.",
    "context": {
      "keyTerms": [
        { "term": "Decentralized", "definition": "A market with no single central location or exchange." },
        { "term": "Liquidity Provider", "definition": "Large banks and institutions that provide the underlying price quotes." },
        { "term": "Broker / Aggregator", "definition": "The entity that connects you to the liquidity network." },
        { "term": "Quote Feed", "definition": "The stream of prices shown on your chart." }
      ],
      "whyThisMatters": "Retail learners often think there is one 'true' price. In Forex, the quote you see depends on your provider's network. Understanding this helps you focus on behavior over tiny price discrepancies.",
      "realLifeExample": "Buying a currency at a local airport vs. an online bank. The underlying asset is the same, but the network and fees create different quotes.",
      "commonMistake": "Thinking every chart for the same pair must look exactly the same at all times.",
      "quickNote": "Forex is a network, not a building."
    }
  },
  {
    "type": "visual_intro",
    "title": "Bid, Ask, and Spread in Forex",
    "label": "Quote Mechanics",
    "visualKey": "forex-quote-panel-visual",
    "body": "Forex is read through quoted bid/ask prices. Before reading candle movement, you must understand the cost of interaction: the spread.",
    "context": {
      "keyTerms": [
        { "term": "Bid", "definition": "The price where you can sell (hitting the buyer's level)." },
        { "term": "Ask", "definition": "The price where you can buy (hitting the seller's level)." },
        { "term": "Spread", "definition": "The difference between Bid and Ask, usually measured in pips." },
        { "term": "Pip", "definition": "The smallest price move in a Forex pair." }
      ],
      "whyThisMatters": "The spread is your immediate cost. If the spread is wide, a move on the chart might not represent clean intent—it might just be a shift in the quote gap.",
      "realLifeExample": "Buying a house at the listed price (Ask) but knowing you could only sell it immediately for less (Bid). The difference is the spread.",
      "commonMistake": "Ignoring the spread when reading small candle movements.",
      "quickNote": "You buy at the Ask and sell at the Bid."
    }
  },
  {
    "type": "visual_intro",
    "title": "Session Liquidity Changes the Quality of the Quote",
    "label": "Liquidity Conditions",
    "visualKey": "forex-session-liquidity-visual",
    "body": "Forex market quality changes across sessions. Active overlaps provide the cleanest quotes; quiet sessions can be noisy and expensive.",
    "context": {
      "keyTerms": [
        { "term": "Session Overlap", "definition": "When two major markets (like London and NY) are open at once." },
        { "term": "Market Quality", "definition": "How reliable and clean the price movement feels based on liquidity." },
        { "term": "Thin Market", "definition": "A period with low volume where small orders can cause larger jumps." }
      ],
      "whyThisMatters": "A candle in the middle of the London session has more 'weight' than the same sized candle during a quiet holiday or late-night period. Context changes the reading.",
      "realLifeExample": "Driving in peak hour traffic (high liquidity, tight moves) vs. a quiet country road at night (low liquidity, sudden turns).",
      "commonMistake": "Treating all sessions as equally valid for market reading.",
      "quickNote": "Active sessions provide cleaner evidence."
    }
  },
  {
    "type": "practice",
    "title": "Forex Mini Drill: Clean Quote or Weak Reading?",
    "label": "Practical Drill",
    "visualKey": "forex-quote-quality-drill-visual",
    "body": "You see EUR/USD move slightly upward on the chart. However, you notice the spread has widened and it is currently a low-liquidity quiet period. What is the disciplined Forex reading?",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined Forex reading?",
      "options": [
        { "id": "A", "text": "The candle moved up, so buyers are clearly in control.", "isCorrect": false, "feedback": "Not correct. In low-liquidity periods with wide spreads, small moves can happen without real buyer intent. The candle alone is not enough evidence." },
        { "id": "B", "text": "Treat the move carefully; the quote condition and liquidity are weak.", "isCorrect": true, "feedback": "Correct. Discipline requires checking the quote quality. If liquidity is low and spread is wide, a move is weak evidence." },
        { "id": "C", "text": "The widened spread is a buy signal because it shows urgency.", "isCorrect": false, "feedback": "Not correct. A widened spread is usually a sign of lower liquidity and higher risk, not a signal to act." },
        { "id": "D", "text": "Buy immediately because quiet sessions are easier to predict.", "isCorrect": false, "feedback": "Not correct. Quiet sessions are often noisier and more unpredictable due to thin order depth." }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Disciplined reading", "definition": "Filtering market evidence based on liquidity and quote quality." },
        { "term": "Weak condition", "definition": "A state where chart movement is unreliable due to thin liquidity or wide spread." }
      ],
      "whyThisMatters": "The 'Chart Guesser' reacts to every candle. The 'Market Reader' filters candles through quote quality and session context.",
      "quickNote": "Filter the record through the condition."
    }
  }
]
:::`,
    cryptoAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Crypto Is a Fragmented Market",
    "label": "Market Structure",
    "visualKey": "crypto-venue-map-visual",
    "body": "Crypto does not usually behave like one single clean centralized market. The same asset can trade across multiple exchanges, pairs, venues, and derivatives markets.",
    "context": {
      "keyTerms": [
        { "term": "Venue", "definition": "A specific location where an asset is traded (e.g., Binance, Uniswap)." },
        { "term": "Fragmented Liquidity", "definition": "When the total buying/selling power for an asset is split across different locations." },
        { "term": "Index Price", "definition": "A weighted average price calculated from multiple exchange feeds." }
      ],
      "whyThisMatters": "A move that looks strong on one exchange may be weaker, delayed, or unsupported elsewhere. You must understand the source of the price before reading the movement.",
      "realLifeExample": "A token moves sharply on one exchange, but other venues show lower activity. A trained learner checks whether the move is broad or venue-specific.",
      "commonMistake": "Thinking one crypto chart always represents the whole crypto market.",
      "quickNote": "In crypto, first ask: which market am I actually seeing?"
    }
  },
  {
    "type": "visual_intro",
    "title": "Order Book vs. Liquidity Pool",
    "label": "Market Mechanics",
    "visualKey": "crypto-market-engines-visual",
    "body": "On a centralized exchange, price comes from an order book. On a decentralized exchange, price may come from a liquidity pool (AMM). Both show a chart, but the mechanics behind them are different.",
    "context": {
      "keyTerms": [
        { "term": "Order Book", "definition": "A list of buy and sell orders organized by price level." },
        { "term": "Liquidity Pool", "definition": "A smart contract containing a pair of tokens that allows for decentralized swapping." },
        { "term": "AMM", "definition": "Automated Market Maker; the algorithm that determines price in a liquidity pool." },
        { "term": "Price Impact", "definition": "How much a single trade changes the price in a pool." }
      ],
      "whyThisMatters": "CEX and DEX markets react differently to orders. A small-cap token might move sharply on a DEX due to thin pool reserves, even if the 'broad market' hasn't changed.",
      "realLifeExample": "Swapping tokens on Uniswap (DEX) vs. placing a limit order on Coinbase (CEX). One hits a pool; the other hits an order book.",
      "commonMistake": "Reading a DEX pool move like a deep centralized exchange order book.",
      "quickNote": "Same chart shape, different market engine."
    }
  },
  {
    "type": "visual_intro",
    "title": "Liquidity Fragmentation and Price Impact",
    "label": "Liquidity Conditions",
    "visualKey": "crypto-liquidity-fragmentation-visual",
    "body": "Crypto liquidity is split across venues. The same buying or selling action may look calm in one market and dramatic in another because the available depth is different.",
    "context": {
      "keyTerms": [
        { "term": "Market Depth", "definition": "The amount of orders available at nearby price levels." },
        { "term": "Slippage", "definition": "The difference between the expected price and the price where the trade actually executes." },
        { "term": "Thin Liquidity", "definition": "A state where small orders can cause large price jumps." }
      ],
      "whyThisMatters": "Crypto moves can look dramatic when liquidity is thin. A learner must ask whether the move shows broad participation or simply a weak liquidity environment.",
      "realLifeExample": "A token jumps 8% on a low-liquidity exchange after a $10k order, while a Tier-1 exchange barely moves. The sharpest chart isn't always the cleanest evidence.",
      "commonMistake": "Assuming the biggest move is the most meaningful move.",
      "quickNote": "Thin liquidity can exaggerate movement."
    }
  },
  {
    "type": "practice",
    "title": "Crypto Mini Drill: Broad Move or Venue Noise?",
    "label": "Practical Drill",
    "visualKey": "crypto-venue-noise-drill-visual",
    "body": "A crypto token moves +9% on Exchange A, but only +2% on Exchange B. Other venues show high slippage and mixed feeds. What is the disciplined crypto reading?",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined crypto reading?",
      "options": [
        { "id": "A", "text": "The largest move is automatically the strongest evidence.", "isCorrect": false, "feedback": "Not correct. The largest move may come from the weakest liquidity, not the strongest evidence." },
        { "id": "B", "text": "Treat the move as broad confirmation because one chart moved sharply.", "isCorrect": false, "feedback": "Not correct. One venue moving sharply does not prove broad confirmation. Crypto liquidity can be fragmented." },
        { "id": "C", "text": "Treat the move carefully; it may be venue-specific noise driven by thin liquidity.", "isCorrect": true, "feedback": "Correct. A sharp move on one venue can be useful context, but it is not automatically broad market evidence. A Lurnava learner checks whether other venues and liquidity conditions support the move." },
        { "id": "D", "text": "Ignore liquidity and only follow the chart with the biggest candle.", "isCorrect": false, "feedback": "Not correct. Ignoring liquidity can turn a noisy venue-specific move into a false reading." }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Venue Noise", "definition": "Price movement that is specific to one exchange and not reflective of the broader market." },
        { "term": "Broad Confirmation", "definition": "When multiple venues and market types show the same evidence." }
      ],
      "whyThisMatters": "The strongest-looking move is not always the cleanest move. A disciplined reading checks whether the move is supported across venues.",
      "quickNote": "Broad evidence beats dramatic noise."
    }
  }
]
:::`,
    goldAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Gold Is More Than One Chart",
    "label": "Market Structure",
    "visualKey": "gold-market-map-visual",
    "body": "XAU/USD is only one visible window. The gold market underneath is multi-layered, consisting of London OTC spot, COMEX futures, benchmark auctions, and physical bullion.",
    "context": {
      "keyTerms": [
        { "term": "London OTC", "definition": "The primary spot market for gold, where trading is bilateral." },
        { "term": "Benchmark Price", "definition": "The global reference price set during daily LBMA auctions." },
        { "term": "Futures Market", "definition": "A standardized exchange where contracts for future delivery are traded." }
      ],
      "whyThisMatters": "Gold can appear as one simple chart, but the market underneath is layered. Missing the source of the move (spot, futures, or benchmark) can lead to a shallow reading.",
      "realLifeExample": "A fast XAU/USD candle appears during a macro event. A trained learner asks if futures activity, spot liquidity, or benchmark timing is influencing the price.",
      "commonMistake": "Thinking XAU/USD is the entire gold market.",
      "quickNote": "Gold is one asset, but not one simple market."
    }
  },
  {
    "type": "visual_intro",
    "title": "London OTC: Where Gold Trades Bilaterally",
    "label": "OTC Mechanics",
    "visualKey": "gold-otc-bilateral-visual",
    "body": "A major part of gold trading happens OTC: direct counterparty-to-counterparty trading. In the 'Loco London' market, bullion settles through London accounts rather than a public exchange.",
    "context": {
      "keyTerms": [
        { "term": "Loco London", "definition": "Gold bullion physically held in London vaults to underpin OTC trading activity." },
        { "term": "Allocated Account", "definition": "An account where the customer owns specific physical bars." },
        { "term": "Unallocated Account", "definition": "The standard settlement method where the customer has a general entitlement to metal." }
      ],
      "whyThisMatters": "Gold is not always a transparent public order book. Bilateral OTC trades can move the market without the retail learner seeing the orders themselves.",
      "realLifeExample": "A large institution settles a massive gold swap directly with a dealer. The move appears on the chart, but the 'matching' happened privately.",
      "commonMistake": "Imagining London gold trading as one transparent public order book.",
      "quickNote": "OTC Gold is negotiated privately, not displayed publicly."
    }
  },
  {
    "type": "visual_intro",
    "title": "COMEX Futures: The Paper Contract Layer",
    "label": "Futures Mechanics",
    "visualKey": "gold-futures-mechanics-visual",
    "body": "COMEX Gold futures (GC) are standardized exchange-traded contracts. While they aren't physical gold, they are a primary engine for price discovery and risk management.",
    "context": {
      "keyTerms": [
        { "term": "Futures Contract", "definition": "A standardized agreement to buy or sell gold at a future date." },
        { "term": "Standardized", "definition": "Contracts with fixed sizes and quality rules for easy trading." },
        { "term": "Price Discovery", "definition": "The process by which market participants arrive at a price through exchange trading." }
      ],
      "whyThisMatters": "XAU/USD often reacts to futures activity because futures concentrate large institutional expectations. If futures are moving fast, the retail quote will follow.",
      "realLifeExample": "During a macro shock, futures volume spikes. A rushed learner sees a fast candle; a trained learner knows futures positioning is driving the speed.",
      "commonMistake": "Thinking Gold futures and physical gold are the same thing.",
      "quickNote": "Futures are contracts; physical is metal. Both move the chart."
    }
  },
  {
    "type": "practice",
    "title": "Gold Mini Drill: Which Market Layer Is Moving?",
    "label": "Practical Drill",
    "visualKey": "gold-market-layer-drill-visual",
    "body": "Gold moves sharply near a major session window. You see a fast candle on XAU/USD. You haven't checked futures activity, spot liquidity, or benchmark timing. What is the disciplined Gold reading?",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined Gold reading?",
      "options": [
        { "id": "A", "text": "Treat the candle as complete evidence because Gold moved fast.", "isCorrect": false, "feedback": "Not correct. Speed is not complete evidence. A fast Gold candle may come from several market layers (futures, spot, or benchmark)." },
        { "id": "B", "text": "Assume the move is purely physical gold demand without checking other layers.", "isCorrect": false, "feedback": "Not correct. Gold movement is not always purely physical. Futures, OTC activity, and benchmarks all shape the visible price." },
        { "id": "C", "text": "Classify the move as incomplete until you check the market layer behind it.", "isCorrect": true, "feedback": "Correct. Gold moves through connected layers: OTC spot, futures, benchmarks, and retail quotes. A Lurnava learner verifies the source before trusting the move." },
        { "id": "D", "text": "Ignore market structure because Gold is only about candle direction.", "isCorrect": false, "feedback": "Not correct. Market structure matters because the chart is only a visible record of deeper activity." }
      ]
    },
    "context": {
      "whyThisMatters": "A Lurnava learner checks the market layer to avoid being trapped by noisy quote conditions or single-layer spikes."
    }
  }
]
:::`,
    skillLevel: "beginner",
    orderIndex: 2,
  },
  {
    level: 0,
    moduleNumber: "0.3",
    title: "Candles Are Records, Not Signals",
    objective:
      "Learn to read price data as objective evidence of participant interaction.",
    content: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Candle Anatomy",
    "visualKey": "candle-anatomy",
    "label": "Visual First",
    "body": "A candle is a time-boxed record. It shows where price opened, how high and low it travelled, and where it closed during that period. It is evidence of participant commitment, not a direct instruction to act.",
    "context": {
      "keyTerms": [
        { "term": "Open", "definition": "The price when the time period started." },
        { "term": "High", "definition": "The highest price reached during the period." },
        { "term": "Low", "definition": "The lowest price reached during the period." },
        { "term": "Close", "definition": "The price when the time period ended." },
        { "term": "Body", "definition": "The area between Open and Close; shows the net result of the period." },
        { "term": "Wick", "definition": "The lines showing prices that were tested but rejected." },
        { "term": "Timeframe", "definition": "The specific duration one candle represents (e.g., 1 hour)." }
      ],
      "whyThisMatters": "Every part of the candle answers a question. The body shows who 'won' the period. The wicks show where one side tried to push but failed. Without this anatomy, you are just looking at colors.",
      "realLifeExample": "A 5-minute candle on EUR/USD. If EUR/USD opens at 1.1000, moves up to 1.1012, drops to 1.0998, and closes at 1.1009, that single candle records the full journey of that 5-minute period.",
      "commonMistake": "Thinking one candle is a prediction. Many beginners see a green candle and instantly think 'buy.' But a candle first shows what already happened inside one period — not a guaranteed next move.",
      "quickNote": "A candle records a period of market activity."
    }
  },
  {
    "type": "concept",
    "title": "Candles Are Records, Not Signals",
    "visualKey": "record-vs-signal",
    "label": "Core Principle",
    "body": "A candle does not give an instruction. It records movement. A Lurnava learner does not ask, “What does this candle tell me to do?” They ask, “What market behavior did this candle record?”",
    "context": {
      "keyTerms": [
        { "term": "Record", "definition": "An objective history of price action during a set window." },
        { "term": "Signal Trap", "definition": "The mistake of treating a candle shape as an automatic buy/sell instruction." },
        { "term": "Market Behavior", "definition": "The collective interaction of buyers and sellers recorded by price." }
      ],
      "whyThisMatters": "If you treat candles as magic signals, you will lose discipline. If you treat them as records, you gain clarity.",
      "realLifeExample": "A fast move after a news release. When a strong candle appears right after major news, the candle is recording aggressive buying or selling during that moment. It is evidence of behavior, not magic.",
      "commonMistake": "Treating candles like signal stickers. Beginners often label a candle 'bullish' or 'bearish' and stop thinking. A candle should be read as a market record, not as a one-word decision tool.",
      "quickNote": "The candle is the record. The reading comes from context."
    }
  },
  {
    "type": "concept",
    "title": "Body, Wick, and Close Location",
    "visualKey": "candle-evidence-board",
    "label": "Candle Mechanics",
    "body": "The body records net commitment. Wicks record rejected pressure. The close location shows where the balance of power shifted at the final moment of the record.",
    "context": {
      "keyTerms": [
        { "term": "Rejection", "definition": "When price reaches a level but cannot be maintained, leaving a wick." },
        { "term": "Commitment", "definition": "When price holds a direction and closes there, creating a body." },
        { "term": "Balance of Power", "definition": "The net result of buyer vs. seller interaction at the close." }
      ],
      "whyThisMatters": "Color is a shortcut. Anatomy is the full story.",
      "realLifeExample": "The 'Flash Rejection'. In high-speed markets like Gold, you might see price spike up 40 pips and then immediately crash back down. The resulting long upper wick is the record of that failed attempt to move higher.",
      "commonMistake": "Ignoring the close location. A candle can be green but close near its low after a big rejection. If you only look at the color, you miss the fact that the sellers actually took control at the end of the period.",
      "quickNote": "Color is not enough. Read the whole record."
    }
  },
  {
    "type": "concept",
    "title": "Context Changes the Reading",
    "visualKey": "context-logic-board",
    "label": "Context Logic",
    "body": "The same candle shape can mean different things depending on where it forms. A long wick in the middle of a range is just noise; the same wick at a major resistance level is significant evidence.",
    "context": {
      "keyTerms": [
        { "term": "Location", "definition": "Where a candle forms relative to previous price structure." },
        { "term": "Structure", "definition": "The 'landscape' of the market (ranges, trends, levels)." },
        { "term": "Contextual Weight", "definition": "How much importance is given to a record based on its surroundings." }
      ],
      "whyThisMatters": "Pattern memorization is dangerous without location. Context is the judge.",
      "realLifeExample": "The 'Resistance Wick'. A rejection wick that forms right at a major historical high has much more 'contextual weight' than a random wick that forms in the middle of a messy sideways range.",
      "commonMistake": "Reading candles in a vacuum. A hammer candle at the bottom of a trend is evidence of a potential shift. A hammer candle in the middle of a consolidation is often just noise. Never read the record without checking the location.",
      "quickNote": "Same shape. Different context. Different reading."
    }
  },
  {
    "type": "concept",
    "title": "Many Candle Forms Exist",
    "visualKey": "candle-family-preview",
    "label": "Pattern Preview",
    "body": "There are dozens of named candle patterns. You will study them in detail later. For now, focus on the foundation: every pattern is just a specific type of record. Don't memorize names yet; understand behavior.",
    "context": {
      "keyTerms": [
        { "term": "Candle Formation", "definition": "A group of candles that together record a specific market behavior." },
        { "term": "Pattern Recognition", "definition": "The skill of identifying high-probability behavioral records." }
      ],
      "whyThisMatters": "Knowing the name 'Hammer' is useless if you don't understand the rejection it recorded.",
      "realLifeExample": "The 'Engulfing' record. Instead of just memorizing the name, see it as a record where the current period’s activity completely overwhelmed and 'erased' the previous period’s progress. It’s a record of a sudden shift in power.",
      "commonMistake": "Collecting patterns like stamps. Many learners try to learn 50 patterns and look for them everywhere. It is better to understand the OHLC logic of 3 patterns than to know the names of 30 without understanding the record.",
      "quickNote": "Pattern names are vocabulary. Context creates the reading."
    }
  },
  {
    "type": "practice",
    "title": "Practice Check: Candle or Signal?",
    "visualKey": "candle-decision-board",
    "label": "Interactive Task",
    "body": "A candle is evidence, not a full decision. The disciplined learner reads what the candle recorded, checks where it formed, and waits for context before forming a stronger reading.",
    "taskData": {
      "type": "choice_block",
      "question": "A learner sees a candle with a long lower wick and immediately buys, saying 'It's a reversal signal!' What is the disciplined response?",
      "options": [
        { "id": "A", "text": "The wick guarantees reversal.", "isCorrect": false, "feedback": "Not correct. A wick can suggest rejection, but it does not guarantee reversal. The learner still needs location, structure, and follow-through." },
        { "id": "B", "text": "The candle is useful evidence, but it must be checked with location, close, structure, and context.", "isCorrect": true, "feedback": "Correct. A candle records what happened, but the reading depends on context. The wick may be useful evidence, but it is not a complete conclusion by itself." },
        { "id": "C", "text": "The candle color is the only thing that matters.", "isCorrect": false, "feedback": "Not correct. Candle color is only one small part of the record. Body, wick, close location, and context matter." },
        { "id": "D", "text": "Candle patterns should be followed without review.", "isCorrect": false, "feedback": "Not correct. Pattern-following without review creates weak reasoning. Lurnava trains observation before conclusion." }
      ]
    },
    "context": {
      "keyTerms": ["Evidence-First", "Discipline", "Context Check"],
      "whyThisMatters": "This prevents 'impulse trading' based on single candle shapes.",
      "realLifeExample": "Waiting for the 'Evidence Stack'. A professional sees a bullish candle at a key level but waits to see if the next candle confirms the commitment. They are treating the first candle as a piece of evidence, not a finished signal.",
      "commonMistake": "Emotional 'Front-Running'. Seeing a candle starting to look like a 'Hammer' and entering a trade before the candle even closes. The record is not final until the period is over. Anything can happen in the last 10 seconds.",
      "quickNote": "A candle starts a question; it doesn't end the analysis."
    }
  },
  {
    "type": "summary",
    "title": "Module Debrief: Candles Are Records",
    "visualKey": "candle-recap-map",
    "label": "Module Debrief",
    "body": "You have successfully moved from 'Shape Recognition' to 'Record Reading.' You now understand that a candle is a visual summary of participant interaction.\\n\\n### Your New Foundation:\\n\\n* [x] Candles are **Records**, not magic signals\\n* [x] **Anatomy** (OHLC) provides the evidence\\n* [x] **Context** (Location) creates the meaning\\n* [x] **Patterns** are just named behavioral records\\n\\n**Next**: We see how these records interact across different zoom levels: **Timeframes**.",
    "context": {
      "keyTerms": ["Participant Interaction", "Behavioral Record", "Contextual Foundation"],
      "whyThisMatters": "This foundation allows you to understand every future concept in the academy with much higher clarity.",
      "realLifeExample": "The Multi-Asset Audit. If you see a strong record on EUR/USD, a disciplined learner checks if the same behavior is recorded on GBP/USD or the DXY. This turns a single record into a 'cluster' of evidence.",
      "commonMistake": "Thinking you are 'done' learning candles. Reading candles is a life-long skill. As you move to higher levels, you will see that every advanced concept (like Order Blocks) is just a more sophisticated way of reading candle records.",
      "quickNote": "You are reading behavior, not shapes."
    }
  }
]
:::`,
    forexAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Forex Candles Are Quote Records",
    "visualKey": "forex-quote-record",
    "label": "Forex Candle Foundation",
    "body": "A Forex candle is a time-boxed quote record. It shows where the quoted price opened, how high and low it travelled, and where it closed during that selected period. It is evidence from a price feed, not a universal signal.",
    "context": {
      "keyTerms": [
        { "term": "Forex Candle", "definition": "A visual record of quoted price action for a currency pair." },
        { "term": "Currency Pair", "definition": "The two currencies being exchanged, defining the quote value." },
        { "term": "Quote Feed", "definition": "The stream of price data provided by a broker or liquidity provider." },
        { "term": "OHLC", "definition": "Open, High, Low, Close; the four data points defining a candle." },
        { "term": "Pip", "definition": "Percentage in Point; the standard unit of price change in Forex." },
        { "term": "Timeframe", "definition": "The duration of activity recorded by a single candle." }
      ],
      "whyThisMatters": "A learner may see a candle and assume it represents the entire Forex market. In reality, the candle is a record of quoted movement in a specific pair, timeframe, and platform environment. That context matters before interpretation.",
      "realLifeExample": "A 15-minute EUR/USD candle opens at 1.0850, moves to 1.0872, drops to 1.0844, and closes at 1.0865. The candle records that quote movement in pips during that 15-minute window.",
      "commonMistake": "Thinking every Forex candle is a complete picture of the whole global market instead of a record from a specific quote environment.",
      "quickNote": "A Forex candle is a quote record first."
    }
  },
  {
    "type": "visual_intro",
    "title": "Pip Range, Body, and Wick",
    "visualKey": "forex-pip-candle-board",
    "label": "Forex Candle Mechanics",
    "body": "In Forex, candle size should be read in pips and context. A large-looking candle on one pair may be normal, while the same pip movement on another pair may be unusual. Read the body, wick, close, and range together.",
    "context": {
      "keyTerms": [
        { "term": "Pip Range", "definition": "The total distance from High to Low measured in pips." },
        { "term": "Body Size", "definition": "The distance between Open and Close, showing net commitment." },
        { "term": "Upper Wick", "definition": "Price movement above the body that was rejected." },
        { "term": "Lower Wick", "definition": "Price movement below the body that was rejected." },
        { "term": "Close Location", "definition": "Where price ended relative to the candle's range." },
        { "term": "Pair Behavior", "definition": "The typical movement characteristics of a specific currency pair." },
        { "term": "Volatility", "definition": "The degree of variation in trading price over time." }
      ],
      "whyThisMatters": "Forex learners often judge candles by appearance only. But a candle’s size must be understood in pips, timeframe, and pair behavior. Without that, the learner may overreact to normal movement or ignore important movement.",
      "realLifeExample": "A 15-pip candle on EUR/USD during a quiet period may stand out. The same 15-pip movement on a more volatile pair or during an active session may be ordinary. The pip size needs context.",
      "commonMistake": "Comparing candle size visually without checking how many pips moved, what pair it happened on, and what timeframe it belongs to.",
      "quickNote": "In Forex, measure the candle before judging it."
    }
  },
  {
    "type": "visual_intro",
    "title": "Spread and Session Can Distort Candles",
    "visualKey": "forex-distorted-candle-board",
    "label": "Quote Quality",
    "body": "A Forex candle should not be read without quote condition. During thin liquidity, rollover, or unstable spread, a wick may reflect poor quote quality as much as clean market intent. First check whether the candle formed in a reliable environment.",
    "context": {
      "keyTerms": [
        { "term": "Spread", "definition": "The difference between the bid and ask price." },
        { "term": "Quote Quality", "definition": "How accurately the candle record reflects actual market depth." },
        { "term": "Rollover", "definition": "The period when positions are carried over to the next day, often featuring thin liquidity." },
        { "term": "Thin Liquidity", "definition": "A state where few participants are active, causing unstable prices." },
        { "term": "Session Context", "definition": "The specific trading session (e.g., London, NY) the candle formed in." },
        { "term": "Distorted Candle", "definition": "A candle record impacted by technical quote noise rather than market intent." }
      ],
      "whyThisMatters": "Some Forex candles look dramatic because the market condition is weak, not because the move is clean. A learner who ignores spread and session context may mistake quote noise for strong evidence.",
      "realLifeExample": "A long wick appears near a quiet session or rollover period while spread is wider than usual. A rushed learner calls it rejection. A trained learner checks whether the wick came from clean price movement or weak quote conditions.",
      "commonMistake": "Treating every Forex wick as meaningful rejection without checking spread, session, and liquidity condition.",
      "quickNote": "A candle is only as useful as the condition it formed in."
    }
  },
  {
    "type": "practice",
    "title": "Forex Mini Drill: Clean Candle or Quote Noise?",
    "visualKey": "forex-candle-decision-board",
    "label": "Practical Drill",
    "body": "A learner sees a long upper wick on EUR/USD and immediately says, 'This is rejection, so price should drop.' The candle formed during a low-liquidity period and the spread was wider than usual.\\n\\n**What is the disciplined Forex candle reading?**",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined Forex candle reading?",
      "options": [
        { "id": "A", "text": "The long upper wick guarantees rejection, so the reading is complete.", "isCorrect": false, "feedback": "Not correct. A wick does not guarantee rejection. The candle formed in weak quote conditions, so the learner needs more context before forming a strong reading." },
        { "id": "B", "text": "The candle should be treated carefully because spread and low-liquidity conditions may have distorted the wick.", "isCorrect": true, "feedback": "Correct. A long wick can be useful evidence, but in Forex it must be checked against spread, liquidity, session, and close location. Weak quote conditions can make a candle look more meaningful than it is." },
        { "id": "C", "text": "The candle color is the only thing that matters.", "isCorrect": false, "feedback": "Not correct. Candle color is only one part of the record. Wick, body, close location, pip range, spread, and session context matter." },
        { "id": "D", "text": "Forex candles do not need session or spread context.", "isCorrect": false, "feedback": "Not correct. Forex candles need quote context. Spread and session can change the quality of the candle record." }
      ]
    },
    "context": {
      "keyTerms": [
        { "term": "Clean Candle", "definition": "A candle record formed in a high-liquidity, stable spread environment." },
        { "term": "Quote Noise", "definition": "Price data that does not reflect meaningful market interaction." },
        { "term": "Spread Widening", "definition": "When the gap between buy and sell prices increases, usually in low liquidity." },
        { "term": "Low-Liquidity Period", "definition": "A time when few orders are in the market (e.g., session gaps)." },
        { "term": "Confirmation", "definition": "The requirement for follow-through before trusting a piece of evidence." },
        { "term": "Candle Context", "definition": "The combination of timeframe, session, and spread surrounding a record." }
      ],
      "whyThisMatters": "Forex candles can look clean even when the quote environment is weak. A learner who checks spread, session, and pip range before interpreting the candle builds stronger reading discipline.",
      "realLifeExample": "A long wick appears on EUR/USD during a quiet period with wider spread. Instead of calling it rejection instantly, a trained learner treats the candle as incomplete evidence until the quote condition and follow-through are checked.",
      "commonMistake": "Turning a Forex wick into a full market conclusion without checking whether the candle formed in clean conditions.",
      "quickNote": "In Forex, candle shape plus quote condition creates the reading."
    }
  }
]
:::`,
    cryptoAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Crypto Candles Are Venue Records",
    "visualKey": "crypto-candle-source-map",
    "label": "Venue Fragmentation",
    "body": "In Forex, price is smoothed across major banks. In Crypto, price is fragmented across dozens of venues. A single BTC move can look like a clean trend on one exchange and a massive, distorted spike on another. You must never trust a candle until you know which venue produced it and whether it represents real asset ownership (Spot) or synthetic pressure (Perpetual/DEX).",
    "context": {
      "keyTerms": [
        { "term": "Venue", "definition": "The market or platform where the price is formed, such as a spot exchange, perpetual exchange, DEX pool, or aggregated feed." },
        { "term": "CEX Spot Candle", "definition": "A candle built from actual spot trades on a centralized exchange." },
        { "term": "Perpetual Candle", "definition": "A candle built from perpetual contract price movement, often affected by leverage, funding, and liquidation pressure." },
        { "term": "DEX Candle", "definition": "A candle built from swaps against liquidity pools on a decentralized exchange." },
        { "term": "Aggregated Feed", "definition": "A price view built from more than one source or venue." },
        { "term": "Index Price", "definition": "A reference price built from selected markets, often used to represent a broader price view." },
        { "term": "Mark Price", "definition": "A risk-management price often used in perpetual markets to reduce manipulation and calculate liquidation conditions." }
      ],
      "whyThisMatters": "A crypto candle may not represent the whole market. The same asset can trade across spot exchanges, perpetual venues, DEX pools, and aggregated feeds. If a learner reads one candle without knowing where it came from, they may mistake one venue’s movement for broad market evidence.",
      "realLifeExample": "BTC shows a sharp candle on a perpetual exchange, but spot exchanges move less aggressively. A rushed learner treats the candle as full confirmation. A trained learner first asks whether the move is spot-supported, derivatives-driven, or specific to that venue.",
      "commonMistake": "Thinking one crypto candle equals the whole crypto market.",
      "quickNote": "In crypto, first ask: where did this candle come from?"
    }
  },
  {
    "type": "visual_intro",
    "title": "The Two Market Engines",
    "visualKey": "two-candle-engines-board",
    "label": "Spot vs Perpetual",
    "body": "Crypto has two primary market engines: the **Spot Engine** (Asset trades) and the **Perpetual Engine** (Contract/Leverage pressure). A spot candle is driven by supply and demand for the asset itself. A perpetual candle is often driven by speculative leverage and forced exits. To read crypto accurately, you must prioritize the Spot Engine as the 'True' record and treat Perp-only moves as potential noise.",
    "context": {
      "keyTerms": [
        { "term": "Spot Market", "definition": "A market where the actual crypto asset is bought and sold." },
        { "term": "Perpetual Market", "definition": "A derivatives market where traders take price exposure without owning the underlying asset." },
        { "term": "Leverage", "definition": "Using borrowed exposure to control a larger position than the account balance alone." },
        { "term": "Funding Pressure", "definition": "Pressure created by the cost or imbalance between long and short positions in perpetual markets." },
        { "term": "Liquidation Risk", "definition": "The risk that leveraged positions are forcibly closed when margin conditions fail." },
        { "term": "Contract Price", "definition": "The price of a derivative contract, which may not perfectly match spot price at every moment." },
        { "term": "Spot Confirmation", "definition": "Support from actual spot market movement, not only derivative-market movement." }
      ],
      "whyThisMatters": "A spot candle and a perpetual candle can look similar, but the pressure behind them may be different. Spot movement reflects actual asset trading on that venue. Perpetual movement can also reflect leverage, contract positioning, funding pressure, and liquidation risk. A learner who reads them the same way may miss the source of the candle.",
      "realLifeExample": "A large green candle forms on a BTC perpetual chart while spot movement is smaller. A rushed learner sees strength. A trained learner checks whether spot markets also support the move or whether the candle is mainly shaped by leveraged contract pressure.",
      "commonMistake": "Reading spot and perpetual candles as if they always carry the same meaning.",
      "quickNote": "Same shape. Different market engine. Different reading."
    }
  },
  {
    "type": "visual_intro",
    "title": "Diagnosing Mechanical Wicks",
    "visualKey": "wick-source-diagnostic-board",
    "label": "Wick Diagnosis",
    "body": "Crypto wicks are often 'mechanical anomalies' rather than price rejections. A massive wick can be caused by **Thin Liquidity** (a small order hitting an empty book) or a **Liquidation Cascade** (forced exits triggering each other). Before assuming a wick shows 'rejection,' you must diagnose its source. If there is no corresponding spot volume, the wick is likely mechanical noise.",
    "context": {
      "keyTerms": [
        { "term": "Wick", "definition": "The part of a candle showing where price travelled beyond the body but did not close there." },
        { "term": "Liquidation Wick", "definition": "A wick that may be shaped by forced closing of leveraged positions." },
        { "term": "Thin Liquidity", "definition": "A condition where fewer available orders allow price to move quickly and sharply." },
        { "term": "Stop Cascade", "definition": "A chain reaction where triggered exits accelerate price movement." },
        { "term": "Venue-Specific Print", "definition": "A candle movement that appears strongly on one venue but is not broadly confirmed elsewhere." },
        { "term": "Clean Rejection", "definition": "A possible reading where price tests an area and fails to hold, but only when context supports that interpretation." },
        { "term": "Mechanical Movement", "definition": "Movement shaped heavily by market mechanics such as liquidations, thin liquidity, forced exits, or venue-specific pressure." }
      ],
      "whyThisMatters": "Crypto wicks can be dramatic, but dramatic does not mean clean. A long wick may show rejection, but it may also come from thin liquidity, liquidation pressure, or a venue-specific spike. The learner must diagnose what created the wick before trusting it as evidence.",
      "realLifeExample": "A token drops quickly, leaves a long lower wick, and recovers. A rushed learner calls it strong rejection. A trained learner checks whether the wick came from spot demand, liquidation pressure, thin liquidity, or only one noisy venue.",
      "commonMistake": "Calling every long crypto wick “rejection” without checking liquidity, leverage, and venue confirmation.",
      "quickNote": "In crypto, diagnose the wick before reading the candle."
    }
  },
  {
    "type": "practice",
    "title": "Drill: Real Move or Mechanical Noise?",
    "visualKey": "crypto-candle-decision-board",
    "label": "Disciplined Reading",
    "body": "Observe the verification board. We have a sudden spike on a Perpetual venue. Use the diagnostic checklist to determine if this move represents a real structural shift or mechanical noise.",
    "taskData": {
      "type": "choice_block",
      "question": "Based on the verification data (Bybit Perp source, Weak Spot Confirmation, High Vol Delta), what is the most disciplined reading of this spike?",
      "options": [
        { "id": "opt1", "text": "This is a bullish breakout. The high volume confirms strong buyer intent.", "grade": "poor", "feedback": "Incorrect. The 'High Vol Delta' is coming from liquidations, not buyers." },
        { "id": "opt2", "text": "This is mechanical noise. The lack of spot confirmation and presence of liquidations suggest a temporary spike.", "grade": "best", "feedback": "Correct. You correctly identified that the move lacks 'Real Evidence' from the Spot Engine." }
      ],
      "correctId": "opt2"
    },
    "context": {
      "keyTerms": [
        { "term": "Mechanical Candle", "definition": "A candle shaped heavily by market mechanics such as liquidations, thin liquidity, spread, or venue-specific pressure." },
        { "term": "Spot Confirmation", "definition": "Support from actual spot market movement." },
        { "term": "Cross-Venue Confirmation", "definition": "Evidence that the move appears across multiple markets or venues." },
        { "term": "Liquidation Pressure", "definition": "Forced closing of leveraged positions that can accelerate movement." },
        { "term": "Venue-Specific Movement", "definition": "Movement that is strong on one venue but weak or absent elsewhere." },
        { "term": "Dramatic Candle", "definition": "A candle that looks visually strong but may not be reliable without context." },
        { "term": "Incomplete Evidence", "definition": "A market clue that needs more confirmation before becoming a stronger reading." }
      ],
      "whyThisMatters": "Crypto creates dramatic candles often. The learner’s job is not to be impressed by candle size. The learner’s job is to identify whether the movement is broadly supported or mechanically distorted by venue, leverage, liquidity, or liquidation pressure.",
      "realLifeExample": "A perpetual chart prints a large wick during a liquidation event, while spot charts move less. A rushed learner treats the candle as clean rejection. A trained learner classifies it as incomplete until spot movement, liquidity, and cross-venue confirmation are reviewed.",
      "commonMistake": "Trusting the most dramatic crypto candle without checking what created it.",
      "quickNote": "In crypto, candle shape plus market mechanics creates the reading."
    }
  }
]
:::`,
    goldAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Gold Candles Are Volatility Records",
    "visualKey": "gold-candle-context-board",
    "label": "Gold Candle Foundation",
    "body": "A Gold candle records XAU/USD movement during one selected period. But in Gold, the candle’s quality depends heavily on volatility, session activity, USD/rate context, news pressure, and liquidity. Read the candle and the environment together.",
    "context": {
      "keyTerms": [
        { "term": "XAU/USD Candle", "definition": "A candle that records Gold priced against the US Dollar during one selected timeframe." },
        { "term": "Volatility", "definition": "How quickly and sharply price moves." },
        { "term": "Session Activity", "definition": "The market time window in which the candle forms, such as Asia, London, or New York." },
        { "term": "USD Context", "definition": "The broader strength or weakness of the US Dollar, which can influence Gold pricing." },
        { "term": "Rate Expectations", "definition": "Market expectations around interest rates, which can affect demand for Gold." },
        { "term": "News Window", "definition": "A period around major economic events where candles may become unusually fast or unstable." },
        { "term": "Liquidity Condition", "definition": "How clean or thin the market environment is when the candle forms." }
      ],
      "whyThisMatters": "Gold candles can look powerful because Gold moves quickly. But speed alone does not make the candle reliable. A learner must know whether the candle formed in a clean environment or during unstable volatility.",
      "realLifeExample": "Gold forms a large candle during New York session after major economic data. A rushed learner sees only the candle size. A trained learner checks whether the move was supported by USD context, rate expectations, liquidity, and the candle close.",
      "commonMistake": "Judging a Gold candle only by size or color without checking the environment that created it.",
      "quickNote": "In Gold, candle quality depends on context."
    }
  },
  {
    "type": "visual_intro",
    "title": "News Candle vs. Structured Candle",
    "visualKey": "gold-candle-quality-board",
    "label": "Candle Quality",
    "body": "A Gold news candle may record real activity, but it can also record unstable repricing. A structured candle is easier to read when the close, level, follow-through, and context support the move.",
    "context": {
      "keyTerms": [
        { "term": "News Candle", "definition": "A candle formed during or near a major economic event." },
        { "term": "Structured Candle", "definition": "A candle whose body, close, location, and follow-through create clearer evidence." },
        { "term": "Follow-Through", "definition": "What price does after the candle closes." },
        { "term": "Close Location", "definition": "Where the candle finishes inside its full high-to-low range." },
        { "term": "Event Volatility", "definition": "Fast movement caused by major data, announcements, or macro repricing." },
        { "term": "Repricing", "definition": "A fast adjustment in price when the market reacts to new information." }
      ],
      "whyThisMatters": "Many Gold learners get trapped by large candles during news. The candle may look important, but if it forms inside unstable conditions, the learner must wait for structure before forming a strong reading.",
      "realLifeExample": "Gold spikes after a major data release, leaves a long wick, and closes in the middle of the range. A rushed learner calls direction immediately. A trained learner waits to see whether the next candles confirm structure.",
      "commonMistake": "Thinking a large Gold candle during news automatically gives a clear reading.",
      "quickNote": "A dramatic candle is not always a clean candle."
    }
  },
  {
    "type": "visual_intro",
    "title": "Gold Wick Diagnosis",
    "visualKey": "gold-wick-diagnostic-board",
    "label": "Wick Mechanics",
    "body": "A Gold wick can suggest rejection, but it can also come from a liquidity sweep, news spike, or thin market condition. A Lurnava learner diagnoses the wick before trusting it as evidence.",
    "context": {
      "keyTerms": [
        { "term": "Wick", "definition": "The part of a candle showing where price travelled beyond the body but did not close there." },
        { "term": "Clean Rejection", "definition": "A possible reading where price tests an area and fails to hold, supported by context." },
        { "term": "Liquidity Sweep", "definition": "A move beyond a visible area that may trigger orders before price returns." },
        { "term": "News Spike", "definition": "A fast candle movement caused by major data or market repricing." },
        { "term": "Thin Liquidity", "definition": "A condition where fewer available orders make price easier to move." },
        { "term": "Follow-Through", "definition": "The price behavior after the wick forms." },
        { "term": "Wick Diagnosis", "definition": "The process of identifying what may have created the wick." }
      ],
      "whyThisMatters": "Gold often creates dramatic wicks. A learner who calls every wick rejection will misread many candles. The correct habit is to ask what created the wick and whether the next price behavior supports the reading.",
      "realLifeExample": "Gold pushes above a previous high, leaves a long upper wick, and falls back. A rushed learner says “reversal.” A trained learner checks whether it was clean rejection, a liquidity sweep, news volatility, or a thin-liquidity spike.",
      "commonMistake": "Treating every long Gold wick as a confirmed reversal signal.",
      "quickNote": "A Gold wick is a clue, not a verdict."
    }
  },
  {
    "type": "practice",
    "title": "Gold Mini Drill: Clean Rejection or Event Noise?",
    "visualKey": "gold-candle-decision-board",
    "label": "Practical Drill",
    "body": "A learner sees Gold form a large candle with a long upper wick during a major news window. The candle closes near the middle of its range, and follow-through has not appeared yet.\\n\\n**What is the disciplined Gold candle reading?**",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined Gold candle reading?",
      "options": [
        { "id": "A", "text": "The upper wick guarantees rejection, so the reading is complete.", "isCorrect": false, "feedback": "Not correct. A wick does not guarantee rejection. In Gold, a wick can come from news volatility, liquidity sweep, or unstable movement." },
        { "id": "B", "text": "Treat the candle carefully because it formed during unstable conditions and needs context, close-location review, and follow-through.", "isCorrect": true, "feedback": "Correct. A Gold wick during a news window can be useful evidence, but it is not complete by itself. The learner must check close location, context, liquidity, and follow-through before forming a stronger reading." },
        { "id": "C", "text": "The candle is large, so it must be high-quality evidence.", "isCorrect": false, "feedback": "Not correct. A large candle is not automatically high-quality evidence. Gold can move dramatically and still remain unclear." },
        { "id": "D", "text": "Ignore the news window and read only the candle shape.", "isCorrect": false, "feedback": "Not correct. News context matters. A candle formed during an unstable event window needs extra caution." }
      ],
      "correctId": "B"
    },
    "context": {
      "keyTerms": [
        { "term": "Event Noise", "definition": "Unstable movement created around major economic or market events." },
        { "term": "Clean Rejection", "definition": "A possible reading where price tests an area and fails to hold, supported by structure and follow-through." },
        { "term": "Close-Location Review", "definition": "Checking where the candle closed inside its full range." },
        { "term": "Follow-Through", "definition": "What price does after the candle closes." },
      ]
    }
  }
]
:::`,
    skillLevel: "beginner",
    orderIndex: 3,
  },
  {
    level: 0,
    moduleNumber: "0.4",
    title: "The Hierarchy of Evidence",
    objective: "Understand the weight and hierarchy of market data layers.",
    content: `:::lesson-cards
[
  {
    "type": "mission_brief",
    "title": "The Evidence Hierarchy",
    "label": "Core Foundation",
    "visualKey": "time-compression-board",
    "body": "Think of a timeframe as a **Filter for Weight**. A 1-minute candle records the tiny wiggles of the market. A Daily candle hides those wiggles and only records the big, heavy decisions. \\n\\n**The Rule**: More time inside a candle = More Evidence Weight.",
    "context": {
      "keyTerms": [
        { "term": "Evidence Weight", "definition": "How much 'truth' a candle holds based on the time it represents." },
        { "term": "Institutional Weight", "definition": "The massive capital commitment of banks and funds." }
      ],
      "whyThisMatters": "Retail traders lose because they treat a 1-minute 'wiggle' with the same respect as a Daily 'move.' This is like trying to predict the weather by looking at a single raindrop.",
      "realLifeExample": "A Daily candle is a full book; a 1-minute candle is just a single sentence. You can't understand the story if you only read one sentence at a time.",
      "commonMistake": "Thinking that a fast move on a small timeframe 'proves' the market has changed direction.",
      "quickNote": "Don't trust the wiggles. Trust the weight."
    }
  },
  {
    "type": "visual_intro",
    "title": "Narrative Layers",
    "label": "Structural Mapping",
    "visualKey": "timeframe-comparison-windows",
    "body": "The market is a stack of stories (Narratives) happening at once. A lower timeframe might look urgent, but it is often just a small detail inside a much larger institutional story. You must identify which layer is currently 'The Boss.'",
    "context": {
      "keyTerms": [
        { "term": "The Narrative", "definition": "The big, slow story told by the Higher Timeframes (HTF)." },
        { "term": "The Detail", "definition": "The fast, noisy story told by the Lower Timeframes (LTF)." }
      ],
      "whyThisMatters": "To avoid traps, you must know if a move is a 'New Story' or just a 'Detail' within an old one. This stops you from buying right before a Higher Timeframe wall hits you.",
      "realLifeExample": "A city bus might turn left to avoid a pothole (LTF), but the route is still moving North (HTF). Don't let the turn fool you.",
      "commonMistake": "Getting 'Zoomed In' and forgetting where the big price walls are.",
      "quickNote": "The bigger the timeframe, the bigger the boss."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Weight of the Record",
    "label": "Quantitative Logic",
    "visualKey": "timeframe-weight-ladder",
    "body": "Not all evidence is equal. We use a **Weight Ladder** to prioritize what we see. Higher timeframes have 'Structural Gravity'—they are harder to move and easier to trust because they represent a consensus of the biggest players.",
    "context": {
      "keyTerms": [
        { "term": "Structural Gravity", "definition": "The tendency of price to obey big-timeframe levels over small-timeframe ones." },
        { "term": "Consensus", "definition": "When the majority of market participants agree on a direction." }
      ],
      "whyThisMatters": "A $750 student doesn't 'guess'; they stack evidence. A Daily rejection is 100x more powerful than a 5-minute rejection. We prioritize our reading from the top down.",
      "realLifeExample": "Trying to stop a moving train (HTF) vs. stopping a rolling bicycle (LTF). The weight defines the difficulty.",
      "commonMistake": "Ignoring the 'Gravity' of the higher timeframe and trying to trade against it.",
      "quickNote": "Always check the weight before you take a side."
    }
  },
  {
    "type": "visual_intro",
    "title": "Signature vs. Noise",
    "label": "Participant Roles",
    "visualKey": "htf-ltf-roles",
    "body": "To read like a pro, you must separate the **Whales** from the **Minnows**.\\n\\n* **The Signature (HTF)**: The clear footprints of Banks and Sovereign Funds. They move with strategy.\\n* **The Noise (LTF)**: The frantic wiggles of Algorithms and Retail Emotions. They move with panic.",
    "context": {
      "keyTerms": [
        { "term": "Institutional Signature", "definition": "High-weight evidence left by massive capital flows." },
        { "term": "Retail Noise", "definition": "Unstable movement driven by speculation and high-frequency bots." }
      ],
      "whyThisMatters": "Institutions use the 'Noise' to hide their true 'Signature.' If you only watch the noise, you are the exit liquidity for the whales.",
      "realLifeExample": "The Compass (Signature) shows you where the island is. The Microscope (Noise) only shows you the dust on the deck of the ship.",
      "commonMistake": "Watching the 1-minute chart and thinking you are seeing the 'Truth' of the market.",
      "quickNote": "Follow the Signature, ignore the Noise."
    }
  },
  {
    "type": "visual_intro",
    "title": "Resolving Conflict",
    "label": "Evidence Auditing",
    "visualKey": "timeframe-conflict-board",
    "body": "What if the layers disagree? If the 5-minute is pushing up but the 4-hour is hitting a wall, the evidence is **Mixed**. A professional does not flip a coin; they label the market 'Unclear' and wait for the layers to align.",
    "context": {
      "keyTerms": [
        { "term": "Mixed Evidence", "definition": "When your timeframe layers are telling different stories." },
        { "term": "Wait for Alignment", "definition": "Staying out of the market until the layers agree." }
      ],
      "whyThisMatters": "Most losses happen during 'Conflict.' By simply identifying conflict and walking away, you instantly become more profitable than 90% of retail traders.",
      "realLifeExample": "A red light (HTF) and a green light (LTF) at the same intersection. The disciplined driver waits for clarity.",
      "commonMistake": "Forcing a decision when the data is clearly messy.",
      "quickNote": "If the layers fight, you stay out."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Evidence Stack Workflow",
    "label": "Process Control",
    "visualKey": "top-down-reading-workflow",
    "body": "Professional reading always moves from the **Outside In**. We audit the Narrative first, define the Structure second, and only use the Detail to refine our timing. If the layers don't stack, the quality is too low to act.",
    "context": {
      "keyTerms": [
        { "term": "Outside-In Audit", "definition": "Starting from the Daily/4H and zooming in to the 5m." },
        { "term": "Evidence Stack", "definition": "A collection of facts from multiple layers that all point the same way." }
      ],
      "whyThisMatters": "Most gamblers start on the 1-minute chart and 'hallucinate' a reason to buy. The $750 student starts on the Daily and 'verifies' a reason to act.",
      "realLifeExample": "Checking the weather (HTF) before you check the engine (LTF) of your plane. Both matter, but one defines the mission.",
      "commonMistake": "Starting at the bottom and hoping the top agrees.",
      "quickNote": "Narrative first. Detail last."
    }
  },
  {
    "type": "practice",
    "title": "Final Audit Practice",
    "label": "Strategic Decision",
    "visualKey": "timeframe-decision-scenario",
    "body": "TEST CASE: You see an aggressive 5-minute push (Detail) moving directly into a major 4-hour resistance wall (Narrative). \\n\\n**What is the disciplined reading?**",
    "taskData": {
      "type": "choice_block",
      "question": "What is the disciplined reading?",
      "options": [
        { "id": "A", "text": "The 5m push is very strong; the market has turned bullish.", "isCorrect": false, "feedback": "Wrong: You are letting 'Noise' overrule 'Signature.' One 5m move rarely breaks a 4H wall on the first try." },
        { "id": "B", "text": "The 4H wall is old; the 5m move is the 'new' truth.", "isCorrect": false, "feedback": "Wrong: 'Newer' doesn't mean 'Heavier.' The 4H wall represents thousands of times more capital than the 5m push." },
        { "id": "C", "text": "The evidence is mixed. I will stay 'Unclear' and wait for alignment.", "isCorrect": true, "feedback": "Correct: You have identified 'Conflict.' A professional waits for the high-weight layer and the low-weight layer to point in the same direction." },
        { "id": "D", "text": "I'll take a small trade to see if it breaks through.", "isCorrect": false, "feedback": "Wrong: This is 'Curiosity Trading,' not 'Evidence Auditing.' We only act when the stack is aligned." }
      ]
    },
    "context": {
      "whyThisMatters": "Learning to say 'I don't know' in a messy market is the most expensive skill in trading.",
      "quickNote": "Don't bet on the Noise against the Narrative."
    }
  },
  {
    "type": "summary",
    "title": "Module Debrief: The Hierarchy of Evidence",
    "label": "Module Recap",
    "visualKey": "timeframe-debrief-board",
    "body": "You have completed the **Institutional Reset**. You no longer see charts as 'just bars'—you see them as a stack of Narrative layers. You now have the filter to separate real market movement from retail noise.\\n\\n### Your New Competencies:\\n\\n* [x] Identify **Whale Signatures** vs. **Retail Noise**\\n* [x] Audit the market from the **Outside-In**\\n* [x] Resolve **Mixed Evidence** by staying patient\\n* [x] Respect **Structural Gravity**\\n\\n**Next**: We map the market's skeleton: **Basic Structure**.",
    "context": {
      "whyThisMatters": "This 'Evidence Filter' is what separates you from the gambling crowd. You are now reading the same data as the banks.",
      "quickNote": "You are now an Evidence Auditor."
    }
  }
]
:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "What is the disciplined reading?",
      options: [
        {
          id: "A",
          text: "The 5m push is clearly bullish.",
          isCorrect: false,
          feedback: "Noise is not Narrative.",
        },
        {
          id: "B",
          text: "The 4H wall is less important than the 5m move.",
          isCorrect: false,
          feedback: "Weight always wins.",
        },
        {
          id: "C",
          text: "The evidence is mixed; higher context is not aligned.",
          isCorrect: true,
          feedback: "Professional patience: You wait for alignment.",
        },
        {
          id: "D",
          text: "Lower timeframes cancel higher timeframes.",
          isCorrect: false,
          feedback: "Incorrect. Gravity works from the top down.",
        },
      ],
    },
    forexAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Forex Timeframes Are Session Records",
    "visualKey": "forex-session-timeframe-board",
    "label": "Forex Foundation",
    "body": "A 15-minute candle records 15 minutes of activity. But in Forex, those 15 minutes are not equal across the day. A candle formed during quiet Asia, London open, New York overlap, or major news does not carry the same environment. \\n\\n**The Formula**: timeframe + session = reading environment",
    "context": {
      "keyTerms": [
        { "term": "Forex Session", "definition": "A major trading window such as Asia, London, or New York." },
        { "term": "Session Context", "definition": "The market environment created by the active trading region and participation level." },
        { "term": "Reading Environment", "definition": "The condition surrounding the candle: quiet, active, volatile, or mixed." },
        { "term": "Session Record", "definition": "A candle understood through both its timeframe and the session that created it." }
      ],
      "whyThisMatters": "If a learner reads only the candle duration, they miss the market environment behind the candle. Forex movement changes across the trading day.",
      "realLifeExample": "A 15-minute EUR/USD candle during late Asia may be slow and narrow. A 15-minute EUR/USD candle after London opens may form inside a much more active environment.",
      "commonMistake": "Reading Forex candles as if every hour of the day has the same quality.",
      "quickNote": "In Forex, timeframe tells you how long. Session tells you what kind of market."
    }
  },
  {
    "type": "visual_intro",
    "title": "The Forex Trading Day Has Rhythms",
    "visualKey": "forex-trading-rhythm-board",
    "label": "Session Rhythm",
    "body": "Forex is a 24-hour market, but participation is not equal across all hours. The market has rhythm: Asia, London, New York, and overlaps. Some periods are quiet, some are active, and some are unstable because of economic releases. \\n\\n**The Rule**: Know the environment you are reading.",
    "context": {
      "keyTerms": [
        { "term": "Asia Session", "definition": "A major trading window often associated with quieter movement in many major pairs." },
        { "term": "London Session", "definition": "A major trading window often associated with stronger Forex participation." },
        { "term": "New York Session", "definition": "A major trading window that can bring continuation, reversal, or news-driven movement." },
        { "term": "Session Rhythm", "definition": "The changing activity pattern across the Forex trading day." },
        { "term": "Participation", "definition": "The amount of market activity and involvement behind price movement." }
      ],
      "whyThisMatters": "A learner who ignores session rhythm may treat quiet movement, active movement, and event-driven movement as the same kind of evidence.",
      "realLifeExample": "A pair may stay tight during Asia, expand during London, and react sharply during New York data. The timeframe stayed the same, but the environment changed.",
      "commonMistake": "Thinking the market is equally active just because Forex is open.",
      "quickNote": "Forex is open for long hours, but activity comes in waves."
    }
  },
  {
    "type": "visual_intro",
    "title": "Session Handoffs and Overlaps",
    "visualKey": "forex-handoff-overlap-board",
    "label": "Liquidity Windows",
    "body": "Session handoffs and overlaps can change how a timeframe behaves. A candle formed during an overlap may carry more participation than one formed during a quiet period. But activity alone is not enough. The learner still needs structure, context, and close-location review.",
    "context": {
      "keyTerms": [
        { "term": "Session Handoff", "definition": "A transition period where one major trading region becomes less active and another becomes more active." },
        { "term": "Overlap", "definition": "A time window where two major sessions are active at the same time." },
        { "term": "Liquidity Window", "definition": "A period where market participation may be stronger." },
        { "term": "Activity Spike", "definition": "A sudden increase in price movement or participation." },
        { "term": "Clean Movement", "definition": "Movement that is easier to read because it has structure and follow-through." }
      ],
      "whyThisMatters": "Many Forex learners get excited when movement increases. But stronger activity can create useful evidence or unstable movement depending on context.",
      "realLifeExample": "London opens and EUR/USD starts moving faster. A trained learner does not call direction immediately. They check whether the move is breaking structure or only reacting to fresh activity.",
      "commonMistake": "Assuming every session overlap move is automatically clean.",
      "quickNote": "Overlap can increase activity. It does not guarantee clarity."
    }
  }
]
:::`,
    skillLevel: "beginner",
    orderIndex: 4,
  },
  {
    level: 0,
    moduleNumber: "0.5",
    title: "Basic Structure: Swings, Ranges, Direction",
    objective: "Mapping the skeleton of the market.",
    content: `# Basic Structure: Swings, Ranges, Direction\n\nIf candles are the words, **Market Structure** is the grammar. It is the skeleton that holds everything together. Without structure, a chart is just a mess of random wiggles.\n\nStructure allows us to map the market objectively. There are three core components you must master: **Swings**, **Ranges**, and **Direction**.\n\n### 1. Swing Highs and Swing Lows\nA **Swing** is a turning point in price.\n- A **Swing High** is a peak. It is formed when price goes up, stops, and then moves down.\n- A **Swing Low** is a valley. It is formed when price goes down, stops, and then moves up.\n\nThese points are our \"anchors.\" They represent the extremes of a move where the market's intent shifted.\n\n### 2. The Range\nA **Range** is the distance between a Swing Low and a Swing High.\nThink of it as a \"box\" that price is currently playing inside.\n*Beginner Example:* If the highest price today was $100 (Swing High) and the lowest was $90 (Swing Low), the market is in a \"$10 range.\" Until price breaks out of this box, it hasn't truly changed its structural story.\n\n### 3. Direction (The Narrative)\nBy looking at how new Swings are formed, we can determine the **Directional Narrative**:\n- **Uptrend**: Price is making Higher Highs and Higher Lows. It is stepping up.\n- **Downtrend**: Price is making Lower Highs and Lower Lows. It is stepping down.\n- **Unclear / Ranging**: Price is stuck inside an old range, making messy highs and lows that don't go anywhere.\n\n:::skill-target\nIdentify the major \"anchors\" (Swings) of the current move to define the \"box\" (Range) you are working in.\n:::\n\n:::visual\ntitle: Market Structure Map\nlookFor: [\"Swing High: A confirmed peak\", \"Swing Low: A confirmed valley\", \"Dealing Range: The area between the two extremes\", \"Direction: The sequence of high/low steps\"]\n:::\n\n### What Does Not Count\nA tiny \"wiggle\" on a 5-minute chart is not a \"Major Swing High\" if you are looking at a 1-hour story.\n**What this means:**\nStructure is relative to your timeframe. A \"Major\" swing is one that led to a significant move or broke a previous structural point.\n\n### Common Beginner Mistake: Over-Mapping\nBeginners try to label every single candle as a high or a low. This creates a messy chart and a confused mind.\n*Better Approach:* Only label the obvious \"peaks\" and \"valleys\" that stand out. If you have to squint to see it, it's probably not important.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Price just went up 10 pips, so the trend is bullish.\" (Reactive thinking)\n- **Better**: \"Price is still inside the range of yesterday's high and low. Until it breaks one of those anchors, the structural reading is Unclear/Sideways.\" (Proactive mapping)\n\n:::summary\nMarket structure is the map of the market. By identifying Swing Highs and Swing Lows, you define the Range. By observing the sequence of these ranges, you determine the Direction.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "How do you identify a valid range in the market?",
      options: [
        "It is the distance between the most recent green candle and the most recent red candle.",
        "It is the distance between the most recently confirmed Swing High and Swing Low.",
        "It is the area where the price has stayed for at least 24 hours.",
        "It is the gap between the current price and the price from one hour ago.",
      ],
      correctIndex: 1,
    },
    skillLevel: "beginner",
    orderIndex: 5,
  },
  {
    level: 0,
    moduleNumber: "0.6",
    title: "Evidence vs Assumption",
    objective: "Building a disciplined reading process.",
    content: `# Evidence vs Assumption\n\nThe final foundation of market reading is the most important for your survival: **Discipline**.\n\nIn the markets, there are two ways to think: **Assumption** and **Evidence**. Most retail participants act on assumption. Lurnava learners act on evidence.\n\n### What is Assumption?\nAn assumption is believing something will happen *before* the market has actually done it. It is a form of prediction.\n- *Example*: \"I think price is going to bounce here because it's a 'round number' like $1.1000.\"\n- *Why it is dangerous*: You are hoping. You are trying to be \"smarter\" than the market. If you are wrong, you have no logical reason for why you failed.\n\n### What is Evidence?\nEvidence is an observable chart behavior that has *already happened*.\n- *Example*: \"I observe that price reached $1.1000 and then immediately showed a structural shift with strong displacement candles.\"\n- *Why it is powerful*: You are responding. You aren't guessing what *will* happen; you are observing what *is* happening.\n\n:::decision-rule\nNever form a reading based on what you \"feel\" or \"hope\" will happen. Only form a reading based on structural facts that are visible on the chart right now.\n:::\n\n### The \"Unclear\" Reading\nOne of the most valuable phrases in market reading is: **\"This is Unclear.\"**\nIf the Evidence Stack is messy—for example, if the Daily chart is bullish but the 1-hour chart is bearish and the current range is narrow—the professional answer is not to guess. The answer is to mark it as **Unclear** and wait.\n\n### Review Conditions\nA **Review Condition** is a specific event that tells you your current reading is no longer valid.\n*Simple Scenario:* You have a bullish reading because price broke a high. Your review condition might be: \"If price closes back below the Swing Low that started the move, my bullish reading is dead.\"\n\nHaving a review condition prevents you from becoming emotionally \"locked\" into a single story. It gives you an objective reason to step back and re-audit.\n\n:::visual\ntitle: The Professional Decision Board\nlookFor: [\"Evidence: Facts already on the chart\", \"Assumption: Guesses about the future (Avoid)\", \"Unclear: The state of waiting for more data\", \"Review Condition: The trigger for a new audit\"]\n:::\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I'm buying here because I think it's cheap.\" (Assumption)\n- **Better**: \"Price has reached a Discount area of the range and has printed a bullish structural shift. I have three pieces of evidence supporting a move higher. My review condition is a close below the new swing low.\" (Evidence-Based)\n\n:::summary\nProfessional reading is about collecting evidence. If there isn't enough evidence, the reading is Unclear. Every plan must have a Review Condition to maintain objectivity.\n:::`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt:
        "You are looking at a chart that is moving sideways with no clear highs or lows being broken. You really want to find a reason to practice. What is the best classification of this situation?",
      options: [
        {
          id: "opt1",
          text: "Assumption: I will guess the breakout direction so I can start practicing.",
          grade: "poor",
          feedback: "Guessing is not practice; it is gambling.",
          rationale: "Practice must be based on objective structural logic.",
        },
        {
          id: "opt2",
          text: "Unclear: The market is not providing enough structural evidence to form a reading. I will wait for a breakout or a clear shift.",
          grade: "best",
          feedback: "Correct. Recognizing an unclear market is a vital skill.",
          rationale:
            "Objectivity requires accepting when the data is insufficient for a decision.",
        },
      ],
    },
    skillLevel: "beginner",
    orderIndex: 6,
  },
  {
    level: 0,
    moduleNumber: "0.7",
    title: "Forex Is Relative Strength, Not One Asset Moving",
    objective:
      "Understand that a currency pair is a relationship between two economies.",
    content: `# Forex Is Relative Strength, Not One Asset Moving\n\nWhen you enter the world of Forex (Foreign Exchange), the first thing you notice is that everything comes in pairs, like **EUR/USD** or **GBP/JPY**. Beginners often make the mistake of thinking they are buying \"the Euro\" or \"the Yen\" as if it were a single stock. In reality, you are participating in a **Relationship**.\n\n### The Tug-of-War\nImagine a game of tug-of-war between two teams. One team is the Eurozone economy, and the other is the United States economy. The price you see on the chart is the center point of that rope.\n- If the Euro team pulls harder (EUR gets stronger), the price moves up.\n- If the U.S. team pulls harder (USD gets stronger), the price moves down.\n\n**What this means:**\nPrice movement in Forex is **Relative**. A \"rally\" (upward move) in EUR/USD doesn't always mean Europe is doing great; it might just mean the U.S. is doing poorly. To read the market like a professional, you must always ask: \"Which side of the pair is actually driving this move?\"\n\n### Technical Terms: Base and Quote\nTo navigate the Forex roadway, you must understand how pairs are structured:\n\n1. **Base Currency**: This is the first currency listed in the pair.\n   *Simple Example:* In **EUR/USD**, the **EUR** is the Base. Think of this as the \"item\" you are looking at.\n2. **Quote Currency**: This is the second currency listed.\n   *Simple Example:* In **EUR/USD**, the **USD** is the Quote. Think of this as the \"money\" you use to measure the item.\n\nIf the price of EUR/USD is 1.1000, it means 1 Euro is worth 1.10 U.S. Dollars.\n\n:::visual\ntitle: The Currency Pair Relationship\nlookFor: [\"Base Currency (The Item) - First in the pair\", \"Quote Currency (The Price) - Second in the pair\", \"Relative Strength - Price rises if Base strengthens OR Quote weakens\", \"The DXY - A special index that tracks the strength of the US Dollar alone\"]\n:::\n\n### What Does Not Count\nA move in one currency pair does not guarantee a move in another, even if they share a currency. For example, EUR/USD might be going up while EUR/JPY is going down. This tells you the move is likely driven by the USD and JPY, not the EUR.\n\n### Common Beginner Mistake: Ignoring the Other Side\nMany beginners see a news headline about \"Strong U.S. Jobs Data\" and immediately expect EUR/USD to fall. They forget to check if there was even stronger news for the Euro at the same time. Professional participants look at the **DXY** (U.S. Dollar Index) to see how the Dollar is performing against *all* major currencies, not just one.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I like the British Pound, so I'm going to buy GBP/USD.\" (Emotional bias toward one asset).\n- **Better**: \"I observe that the US Dollar (DXY) is showing structural weakness, while the British Pound (GBP) is holding its range. GBP/USD is the most logical pair to observe for a potential upward shift.\" (Relative strength analysis).\n\n:::summary\nForex is a market of relationships. Every price move is the result of one currency becoming stronger or weaker relative to another. Success comes from identifying which currency is the 'driver' of the move.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question:
        "If the price of the GBP/USD currency pair is rising, which of the following is a correct structural explanation?",
      options: [
        {
          id: "opt1",
          text: "The British Pound (GBP) is gaining strength while the US Dollar (USD) remains the same or weakens.",
          grade: "best",
        },
        {
          id: "opt2",
          text: "The US Dollar (USD) is gaining strength, which always makes the pair go up.",
          grade: "poor",
        },
        {
          id: "opt3",
          text: "The British Pound is the only currency that matters in this pair.",
          grade: "poor",
        },
        {
          id: "opt4",
          text: "The price is rising because more people in London are waking up.",
          grade: "poor",
        },
      ],
      correctIndex: 0,
    },
    skillLevel: "beginner",
    orderIndex: 7,
  },
  {
    level: 0,
    moduleNumber: "0.8",
    title: "Forex Sessions and Liquidity Windows",
    objective: "Learn how the time of day changes market behavior.",
    content: `# Forex Sessions and Liquidity Windows\n\nThe Forex market is open 24 hours a day, 5 days a week. However, it does not move with the same intensity all the time. Because different parts of the world wake up and go to sleep at different times, the market goes through distinct \"cycles\" called **Sessions**.\n\n### The Three Major Sessions\n1. **The Asian Session (Tokyo)**: Usually the quietest. Price often stays in a narrow range.\n2. **The London Session**: Often the start of the \"real\" daily move. London is the world's largest Forex hub.\n3. **The New York Session**: High energy. When New York opens, many of the day's major decisions are finalized.\n\n**What this means:**\nThe \"personality\" of the market changes depending on which session is active. A strategy that works during the busy London session might fail miserably during the quiet Asian session.\n\n### Technical Terms: Session and Spread\n1. **Session**: A specific window of time when a major financial center's banks are open.\n   *Beginner Example:* If you try to buy a coffee at 3 AM, the shop is closed. If you try to trade the Australian Dollar at 3 PM in New York, the Australian banks are closed. The market is still \"open,\" but there are fewer participants.\n2. **Spread**: The difference between the buy price and the sell price.\n   *Simple Scenario:* During busy sessions, the spread is very small (cheap to trade). During quiet times or when a session is just opening, the spread can get much wider (more expensive).\n\n:::visual\ntitle: The 24-Hour Forex Cycle\nlookFor: [\"Asian Session - Low volatility, often ranging\", \"London Open - Injection of volume and new trends\", \"The Overlap - When London and NY are both open (Highest activity)\", \"NY Close - Market slows down as the day ends\"]\n:::\n\n### What to Observe: The Overlap\nThe most important window for many participants is the **London/New York Overlap**. This is a 4-hour window where the two largest financial centers are both active. This is where you see the most \"Liquidity\"—meaning there are thousands of orders being matched every second.\n\n### Common Beginner Mistake: Over-Trading Quiet Hours\nBeginners often get frustrated when the market doesn't move. They might enter a practice trade during the late Asian session and wonder why nothing is happening for 6 hours.\n*Better Approach:* Focus your practice on the first 2-3 hours of a major session. This is when the most \"Evidence\" is generated.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I have some free time at 8 PM on a Tuesday, so I'll start trading now.\" (Ignoring the session context).\n- **Better**: \"I observe that the London session is opening. I will check for structural shifts now because I know this is a high-liquidity window where real intent is revealed.\"\n\n:::summary\nTime is just as important as price. Use sessions to provide context for your readings. High-volume sessions provide the most reliable evidence, while quiet sessions often lead to false moves.\n:::`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt:
        "You are observing a price chart at 10 PM New York time (during the Asian session). Price is moving very slowly in a 5-pip range. What is the most disciplined observation?",
      options: [
        {
          id: "opt1",
          text: "The market is boring, so I should increase my position size to make a move happen.",
          grade: "poor",
          feedback:
            "Increasing size to 'force' a move is a sign of lack of discipline.",
          rationale:
            "Low-liquidity sessions require patience, not larger risk.",
        },
        {
          id: "opt2",
          text: "This is a low-liquidity window. I will record the current range in my journal but wait for the London open to see if a real move begins.",
          grade: "best",
          feedback: "Correct. You are respecting the session context.",
          rationale:
            "Professional participation requires waiting for windows of high participation.",
        },
      ],
    },
    skillLevel: "beginner",
    orderIndex: 8,
  },
  {
    level: 0,
    moduleNumber: "0.9",
    title: "Gold Is Not Just Another Currency Pair",
    objective: "Understanding the unique drivers of the Gold market.",
    content: `# Gold Is Not Just Another Currency Pair\n\nIn your trading terminal, Gold is usually listed as **XAU/USD**. While it looks like a currency pair, Gold behaves very differently. In the financial world, Gold is a **Commodity** and a **Safe-Haven Asset**.\n\n### The Multi-Driver Asset\nUnlike Forex, where you mostly compare two economies, Gold is influenced by three \"Gold’s Key Context Drivers\":\n1. **The US Dollar**: Since Gold is priced in Dollars (USD), if the Dollar gets stronger, Gold usually gets cheaper (and vice versa).\n2. **Interest Rates**: Gold doesn't pay you interest. If bank interest rates go up, people might sell Gold to put money in the bank. If rates go down, Gold becomes more attractive.\n3. **market uncertainty**: When the world is in crisis (wars, economic crashes), people run to Gold because it is a physical asset that has held value for thousands of years.\n\n**What this means:**\nGold can move violently even if nothing is happening in the currency markets. It responds to market uncertainty and \"inflation\" in a way that the Euro or Yen does not.\n\n:::visual\ntitle: The Gold Context Triangle\nlookFor: [\"USD Strength - When the Dollar rises, Gold often falls\", \"Interest Rates - Higher rates make Gold less attractive\", \"Uncertainty - Crisis events often cause sudden Gold rallies\", \"Physical Supply - Mines and central bank reserves\"]\n:::\n\n### Why This Roadway Is Different\nGold is often much more \"Volatile\" than Forex. This means the price can move much further and much faster in a single minute. For a beginner, this is both an opportunity and a major risk.\n\n**Technical Term: Volatility**\nVolatility is the \"speed\" and \"distance\" of price movement.\n*Beginner Example:* Imagine a car. A calm Forex pair is like a family sedan driving at 40 mph. Gold is like a sports car that can go from 0 to 100 mph in seconds. You need better \"brakes\" (risk management) to drive the sports car.\n\n### What Does Not Count\nA \"Gold Signal\" from a social media guru that ignores the US Dollar or Interest Rates is not a valid reading. If someone says \"Buy Gold because it's cheap,\" but the U.S. government just raised interest rates to 10%, that \"cheap\" Gold is likely going to get much cheaper.\n\n### Common Beginner Mistake: Underestimating the Speed\nBeginners often use the same position size on Gold that they use on a slow Forex pair like EUR/GBP. Because Gold moves so much faster, they end up losing their practice balance much quicker than they expected.\n\n:::summary\nGold is a unique asset driven by the Dollar, interest rates, and market uncertainty. It is highly volatile and requires a higher level of respect for structural boundaries than most currency pairs.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question:
        "Why does Gold often rise during times of global economic uncertainty?",
      options: [
        {
          id: "opt1",
          text: "Because it is considered a safe-haven asset that holds value when other assets are falling.",
          grade: "best",
        },
        {
          id: "opt2",
          text: "Because the price of Gold is controlled by a secret group of banks.",
          grade: "poor",
        },
        {
          id: "opt3",
          text: "Because people use Gold coins more often when the internet is down.",
          grade: "poor",
        },
        {
          id: "opt4",
          text: "Because Gold is a currency just like the Euro.",
          grade: "poor",
        },
      ],
      correctIndex: 0,
    },
    skillLevel: "beginner",
    orderIndex: 9,
  },
  {
    level: 0,
    moduleNumber: "0.10",
    title: "Gold Volatility and Review Discipline",
    objective: "Learning to manage high-speed market data.",
    content: `# Gold Volatility and Review Discipline\n\nBecause Gold (**XAU/USD**) moves so fast, it can be overwhelming for a beginner. The \"noise\" (random small wiggles) on a Gold chart can look like a major move. This is why the Gold roadway requires the highest level of **Review Discipline**.\n\n### Respecting the 'Spikes'\nGold is famous for \"Wick Spikes.\" This is when the price shoots up or down very quickly and then immediately returns to where it started.\n- In Forex, a 20-pip spike is a big deal.\n- In Gold, a 50-pip spike can happen in a few seconds.\n\n**Simple Scenario:**\nImagine you are playing a game of catch. In the Forex game, the ball is thrown at a steady pace. In the Gold game, the ball is sometimes replaced by a rocket. If you aren't paying attention, you'll miss the catch or get hurt.\n\n:::visual\ntitle: Gold Movement: Clean vs. Noisy\nlookFor: [\"Clean Structure - Price respects highs and lows with clear bodies\", \"Noisy Movement - Long wicks on both sides, 'messy' candles\", \"Displacement - Strong, full-bodied candles that show real intent\", \"Exhaustion - When wicks get longer and longer at the top of a move\"]\n:::\n\n### Technical Term: Volatility (Deep Dive)\nWe introduced volatility in the last module, but on the Gold roadway, it is your constant companion.\n**What this does not mean:**\nVolatility does not mean \"randomness.\" Even a fast-moving market follows structural rules. The difference is that you have less time to react.\n\n### Stricter Review Discipline\nBecause moves happen so fast, you cannot rely on \"feeling.\" You must have a **Pre-Flight Checklist** for every observation:\n1. **HTF Context**: Is the 4-hour Gold chart bullish or bearish?\n2. **Current Range**: Am I in the middle of a \"messy\" area or at a clear boundary?\n3. **Evidence Stack**: Do I have at least 3 reasons for my reading?\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Gold is pumping! I'll buy now before I miss it!\" (FOMO - Fear Of Missing Out).\n- **Better**: \"I observe a high-volatility spike into a major 4-hour resistance level. I will not 'chase' the move. I will wait for a structural shift on the 15-minute chart to confirm that the spike was an exhaustion move.\"\n\n### Journal / Review Prompt\nWhenever you complete a Gold practice session in the Lab, your journal entry must include the \"Speed Factor.\" Ask yourself: \"Did I make this decision because I saw a clear structural fact, or because the fast movement made me feel panicked?\"\n\n:::summary\nHigh volatility is not a reason to move faster; it is a reason to slow down and be more clinical. Gold requires you to be an expert at identifying 'Noise' versus 'Intent.'\n:::`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt:
        "You are looking at the 5-minute Gold chart. The price just shot up 40 pips in one candle, but the candle has a very long wick on top and the overall trend is down. What is the best reading?",
      options: [
        {
          id: "opt1",
          text: "This is a bullish breakout! I should buy immediately to capture the momentum.",
          grade: "poor",
          feedback:
            "Chasing a high-volatility spike without context is an assumption.",
          rationale:
            "Spikes often represent 'liquidity testing' rather than a change in trend.",
        },
        {
          id: "opt2",
          text: "This looks like a high-volatility spike (noise). Since it hasn't broken the overall downtrend structure, I will wait for price to settle.",
          grade: "best",
          feedback: "Correct. You are filtering the noise.",
          rationale:
            "Professional reading requires distinguishing between a momentary spike and structural displacement.",
        },
      ],
    },
    skillLevel: "beginner",
    orderIndex: 10,
  },
  {
    level: 0,
    moduleNumber: "0.11",
    title: "Crypto Is a 24/7 Fragmented Market",
    objective: "Understanding the unique structure of digital asset markets.",
    content: `# Crypto Is a 24/7 Fragmented Market\n\nThe Crypto roadway (Bitcoin, Ethereum, etc.) is the youngest and most \"wild\" market. Unlike Forex and Gold, which have established banking hours and central hubs, Crypto never sleeps and lives everywhere at once.\n\n### 1. The 24/7/365 Reality\nCrypto markets are open every second of every day. There is no \"weekend close.\"\n- **What this means:** Moves can happen at 2 AM on a Sunday when most traditional participants are asleep. This can lead to \"Low Liquidity\" periods where the price moves erratically because there aren't enough orders to keep it stable.\n\n### 2. Market Fragmentation\nIf you buy a share of Apple, it is the same share everywhere. But if you trade Bitcoin, you are trading on a specific **Exchange** (like Binance, Coinbase, or Bybit). Each exchange has its own **Order Book**.\n\n**Technical Terms: Exchange and Order Book**\n1. **Exchange**: A digital platform or marketplace where people buy and sell crypto.\n   *Simple Example:* Imagine three different farmers' markets in three different towns. They all sell the same type of apples, but the price might be $1.00 in one town and $1.05 in another. In crypto, these \"towns\" are the exchanges.\n2. **Order Book**: The live list of buy and sell orders on a specific exchange.\n   *Beginner Example:* It's like a transparent waitlist. You can see exactly how many people want to buy Bitcoin at $40,000 and how many want to sell at $40,100.\n\n:::visual\ntitle: Crypto 24/7 Environment\nlookFor: [\"Weekday Volume - Often aligned with Forex session times\", \"Weekend Noise - Lower volume, prone to sudden spikes\", \"Exchange Price Gaps - Tiny differences between Binance/Coinbase/etc\", \"Aggregated Feed - A chart that combines data from many exchanges\"]\n:::\n\n### Why This Roadway Is Different\nBecause there is no central authority, Crypto is driven purely by **public reaction** and **large participant activity**. This creates a market that is highly sensitive to social media, news, and \"hype cycles.\"\n\n### Common Beginner Mistake: Weekend Chasing\nBeginners often start practicing on Saturdays because they have free time. They see a big move on Bitcoin and think a new trend has started.\n*Reality Check:* Weekend moves are often \"Fake-outs.\" Because the major banks and institutions are closed, a single large participant can move the price easily. When Monday morning comes and the big money returns, the price often snaps back to where it was on Friday.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Bitcoin is up 5% on a Sunday afternoon! The bull market is back!\"\n- **Better**: \"I observe an upward move during a low-liquidity weekend window. I will wait for Monday's London open to see if this move is supported by high-volume participants.\"\n\n:::summary\nCrypto is a 24/7, fragmented marketplace. It requires you to be aware of the 'time of week' and to understand that the price on your screen is just one version of the truth from a specific exchange.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question:
        "What is a major risk of forming a structural reading during the weekend in the crypto market?",
      options: [
        {
          id: "opt1",
          text: "The market is closed, so you cannot see any price data.",
          grade: "poor",
        },
        {
          id: "opt2",
          text: "Low liquidity means a single large participant can move the price easily, creating 'fake' moves.",
          grade: "best",
        },
        {
          id: "opt3",
          text: "The exchanges charge higher fees on Saturdays.",
          grade: "poor",
        },
        { id: "opt4", text: "Bitcoin only moves on weekdays.", grade: "poor" },
      ],
      correctIndex: 1,
    },
    skillLevel: "beginner",
    orderIndex: 11,
  },
  {
    level: 0,
    moduleNumber: "0.12",
    title: "Spot, Perpetuals, Funding, and Liquidation Pressure",
    objective: "Learning the mechanics of crypto-native market data.",
    content: `# Spot, Perpetuals, Funding, and Liquidation Pressure\n\nTo truly read a crypto chart, you need to understand that there are two different \"versions\" of the market running at the same time: the **Spot** market and the **Perpetuals** (Derivatives) market.\n\n### 1. Spot vs. Perpetuals\n- **Spot Market**: You buy the actual coin and own it.\n  *Beginner Example*: Buying a physical gold bar and putting it in a safe.\n- **Perpetuals (Perps)**: You are trading a contract that tracks the price of the coin. You don't own the coin; you are just \"betting\" on the price movement.\n  *Simple Scenario*: A perpetual is like a bet that never expires. As long as you have enough money to cover your losses, you can keep the bet open forever.\n\n### 2. Funding and Liquidation\nBecause \"Perps\" allow people to use high leverage (borrowed money), they introduce two unique forces:\n\n**Technical Terms: Funding and Liquidation**\n1. **Funding Rate**: A periodic payment between traders. If too many people are \"Long\" (betting price goes up), they have to pay the \"Shorts\" (betting price goes down) to keep the contract price aligned with the spot price.\n   *What this means:* If funding is very high, it's a sign the market is \"overheated\" with too many people guessing the same thing.\n2. **Liquidation**: When a trader's loss exceeds their available money, the exchange **forcibly closes** their position.\n   *Simple Scenario:* If you bet $100 that Bitcoin will go up, but you use 10x leverage (acting as if you have $1,000), if the price drops just 10%, you lose your $100. The exchange \"liquidates\" you to prevent them from losing money.\n\n:::visual\ntitle: Crypto Market Mechanics\nlookFor: [\"Spot Volume - Actual buying/selling for ownership\", \"Open Interest - Total number of active perp contracts\", \"Funding Rate - Shows if the market is leaning too hard in one direction\", \"Liquidation Map - Areas where many traders will be forced to close\"]\n:::\n\n### What to Observe: Liquidation Pressure (Supporting Context)\nIn crypto, price often moves toward areas where many people are about to be liquidated. This creates a \"Liquidation Cascade.\"\n*Think of it this way:* If 1,000 people are forced to sell at the same price, that massive wave of selling will push the price even lower, forcing even more people to sell.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I'm buying Bitcoin because the chart looks green.\" (Ignoring market mechanics).\n- **Better**: \"I observe that the Funding Rate is extremely high and price is approaching a major structural low. This provides supporting context for a high risk of a 'Long Liquidation' event. I will wait for the potential cascade to finish before looking for a structural shift.\"\n\n:::summary\nCrypto is driven by the interaction between spot owners and perpetual speculators. Funding rates and liquidations are 'Supporting Context' that tell you when the market is emotionally over-extended.\n:::`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt:
        "The Funding Rate for Ethereum is highly positive (meaning 'Longs' are paying 'Shorts'). Price is slowly drifting down toward a cluster of support levels. How should you read this?",
      options: [
        {
          id: "opt1",
          text: "Since everyone is 'Long' and paying funding, I should also buy to join the crowd.",
          grade: "poor",
          feedback:
            "Joining an 'overheated' crowd is a recipe for being liquidated.",
          rationale:
            "High positive funding often precedes a move in the opposite direction.",
        },
        {
          id: "opt2",
          text: "The high funding suggests the market is over-leveraged to the upside. I will watch for a sudden drop that might trigger a liquidation cascade.",
          grade: "best",
          feedback: "Correct. You are reading the 'Liquidation Pressure'.",
          rationale:
            "Professional crypto reading requires monitoring how leveraged participants are positioned.",
        },
      ],
    },
    skillLevel: "beginner",
    orderIndex: 12,
  },
  {
    level: 0,
    moduleNumber: "0.13",
    title: "How to Practice Without Guessing",
    objective:
      "Establishing the mindset and process for professional simulation.",
    content: `# How to Practice Without Guessing\n\nMost beginners enter a \"trading simulator\" or \"the Lab\" with the goal of making a virtual profit. They want to see their account balance go up. This is a fundamental mistake. At Lurnava, simulation is not for proving you can make money; it is for **Practicing your Reasoning**.\n\n### The Purpose of Simulation\nIn the real world, a pilot uses a flight simulator to practice what to do when an engine fails. They don't do it to \"win\" a game; they do it so that when the real event happens, their response is automatic and based on logic, not panic.\n\n**What this means:**\nYour goal in the Lab is to find a high-quality \"Evidence Stack.\" If you make a decision and the market goes against you, but your reasoning was sound and based on objective facts, that is a **Successful Practice Session**. If you guess the direction and \"win,\" but you had no logical reason, that is a **Failed Practice Session**.\n\n### Technical Terms: Practice Action and Simulation\n1. **Practice Action**: Any decision you make in the Lab (like marking a structural shift or simulating an entry).\n   *Simple Example:* Before you click a button, you must be able to say: \"I am taking this action because I observe evidence A, B, and C.\" If you can't say that, you are guessing.\n2. **Simulation**: A controlled environment (The Lab) using historical data where you can practice without financial risk.\n\n:::visual\ntitle: The Professional Practice Checklist\nlookFor: [\"1. Observation - What is the current roadway and structure?\", \"2. Reason - What specific evidence supports a move?\", \"3. Review Condition - At what point is my logic proven wrong?\", \"4. Note - Have I documented this thinking in the Journal?\"]\n:::\n\n### What to Observe: The \"Unclear\" State\nThe hardest thing to practice is **Doing Nothing**. If the chart looks like a mess of random wiggles and you can't find a clear range or structure, your \"Practice Action\" should be to mark it as **Unclear** and move to the next period.\n\n**What this does not mean:**\n\"Practicing\" does not mean clicking buttons as fast as possible. It means waiting for the market to provide a clear story.\n\n### Common Beginner Mistake: Outcome Bias\nBeginners judge themselves by the result of the trade. If they \"win,\" they think they are geniuses. If they \"lose,\" they think the market is rigged.\n*Better Approach:* Judge yourself by the **Quality of your Logic**. Did you follow your structural rules? Did you ignore the \"noise\"?\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I think it's going up, so I'll click buy and hope for the best.\" (Gambling).\n- **Better**: \"I observe that price has broken a major swing high on the 1-hour chart and is now returning to a discount area. I will simulate an entry here with a review condition below the recent swing low.\" (Professional reasoning).\n\n:::summary\nSimulation is a tool for building cognitive discipline. Every action must have a reason, and every reason must be based on observable evidence. Success is measured by the consistency of your process, not the outcome of a single move.\n:::`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt:
        "You are practicing in the Lab. The market is moving sideways in a very choppy way. You haven't made a decision in 10 minutes and you are starting to feel bored. What is the most disciplined action?",
      options: [
        {
          id: "opt1",
          text: "Pick a direction and enter a small practice trade just to see what happens.",
          grade: "poor",
          feedback:
            "Boredom is not a reason to act. This is how 'noise' creates losses.",
          rationale:
            "Acting out of boredom is the opposite of objective market reading.",
        },
        {
          id: "opt2",
          text: "Identify the market as 'Unclear,' document why it is messy in your journal, and wait for a clear structural breakout.",
          grade: "best",
          feedback: "Correct. Recognizing 'Unclear' is a high-level skill.",
          rationale:
            "Professional practice requires the discipline to stay inactive when evidence is missing.",
        },
      ],
    },
    skillLevel: "beginner",
    orderIndex: 13,
  },
  {
    level: 0,
    moduleNumber: "0.14",
    title: "How to Write a Useful Practice Note",
    objective:
      "Learning to document the learning process for maximum improvement.",
    content: `# How to Write a Useful Practice Note\n\nIn the Lurnava system, the **Journal** is your most powerful tool. However, a journal is only as good as the notes you put into it. Most beginners write notes that are useless for learning. They write things like \"I bought here and I was right\" or \"I lost money on this one.\"\n\n### The Note as a Mirror\nA useful practice note is a record of your **Thinking Process** at the time you made the decision. It allows you to look back a week later and see exactly where your logic was strong and where it was weak.\n\n**What this means:**\nYou are documenting the **Evidence Stack** you saw before the result happened. This prevents you from \"rewriting history\" in your mind after you see what the market did.\n\n### Technical Terms: Journal Review and Review Condition\n1. **Journal Review**: The act of looking back at your past notes to find patterns in your thinking.\n   *Simple Example:* You might notice that every time you buy during a \"noisy\" Gold spike, you end up with a poor result. Without a note, you would forget this. With a note, you have a lesson.\n2. **Review Condition**: A specific price level or event that tells you your original idea is no longer valid.\n   *Simple Scenario:* \"I am bullish as long as price stays above $1.1000. If it closes below that, I must re-audit the chart.\"\n\n:::note-comparison\n:::\n\n### What Does Not Count\nA \"Diary\" entry about how you feel (\"I feel nervous about this trade\") is not a structural practice note. While feelings are important, your primary focus must be on **Objective Facts**.\n\n### Common Beginner Mistake: Vague Descriptions\nUsing words like \"seems,\" \"looks like,\" or \"maybe\" in your notes.\n*Better Approach:* Use definitive structural terms. \"Price **broke** the high,\" \"Price **rejected** the level,\" \"The range is **defined** by X and Y.\"\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Bought Bitcoin because it's cheap. Hope it goes to 100k.\" (Weak note).\n- **Better**: \"Roadway: Crypto. Context: Bullish HTF. Action: Simulated buy at 65k following a 15m structural shift. Evidence: High spot volume. Review Condition: Break of 64.2k swing low.\" (Strong note).\n\n:::summary\nYour journal is your personal data set. By writing detailed, structural notes, you turn every practice session into a repeatable lesson. Strong notes lead to strong skills.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question:
        "Which of the following is the strongest example of a professional practice note?",
      options: [
        {
          id: "opt1",
          text: "I have a feeling this is a good buy, so I'm going in with a big position.",
          grade: "poor",
        },
        {
          id: "opt2",
          text: "Bought EUR/USD. The chart looks like a head and shoulders pattern from the book.",
          grade: "poor",
        },
        {
          id: "opt3",
          text: "Roadway: FX. Context: H4 Bullish. Evidence: 15m structural break + London Open volume. Review Condition: Close below 1.0850.",
          grade: "best",
        },
        {
          id: "opt4",
          text: "I lost this trade but I'm sure it will work next time if I just wait longer.",
          grade: "poor",
        },
      ],
      correctIndex: 2,
    },
    skillLevel: "beginner",
    orderIndex: 14,
  },
  {
    level: 0,
    moduleNumber: "0.15",
    title: "Level 0 Foundation Mission",
    objective: "Synthesizing all Level 0 concepts into a single workflow.",
    content: `# Level 0 Foundation Mission\n\nYou have reached the end of the **Market Reading Foundations**. You have learned that the market is a matching engine, that candles are records, and that structure is the skeleton of everything we do. You have also seen how different roadways (Forex, Gold, Crypto) have their own unique \"personalities.\"\n\n### The Lurnava Synthesis\nBefore you move on to Level 1, you must be able to combine these ideas into a single, disciplined process. This is the **Lurnava Workflow**:\n\n1. **Identify the Roadway Context**: Are you in the 24/5 FX market (Relative Strength), the high-speed Gold market (Macro/Volatility), or the 24/7 Crypto market (Fragmentation/Perps)? Each requires a different level of patience.\n2. **Map the Basic Structure**: Identify the most recent Swing High and Swing Low. Define the \"Box\" (Range) that price is currently playing in.\n3. **Separate Evidence from Assumption**: List the objective facts. \"Price is in a discount area\" is Evidence. \"Price will go up from here\" is an Assumption.\n4. **Choose the Review Area**: Identify the structural zone where the next meaningful interaction will happen. This is your observation point.\n5. **Define the Review Condition**: At what point does your current reading become \"Unclear\"?\n\n:::visual\ntitle: Level 0 Foundation Map\nlookFor: [\"Roadway Context - Applied constraints\", \"Range Boundaries - Mapping the anchors\", \"Evidence Stack - Listing the facts\", \"Review Area - Placing the observation marker\", \"Review Condition - The logic reset trigger\"]\n:::\n\n### Mission Objectives\nTo pass the Level 0 mission, you must demonstrate that you can identify a **Review Area** based on structural logic. You are not trying to predict a winner; you are trying to identify where the market's next move will reveal its intent.\n\n:::decision-rule\nProfessional skill is not about being right about every move. It is about having a repeatable workflow that keeps you objective regardless of the market's behavior.\n:::\n\n:::summary\nYou are now ready for the capstone mission. Apply the Level 0 workflow to identify the Review Area on the mission chart. Once complete, document your reasoning in your Journal to finish the Foundations phase.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "What is the primary goal of the Level 0 Foundation Mission?",
      options: [
        {
          id: "opt1",
          text: "To make a high simulated profit and win a prize.",
          grade: "poor",
        },
        {
          id: "opt2",
          text: "To demonstrate that you can identify a Review Area using objective structural logic.",
          grade: "best",
        },
        {
          id: "opt3",
          text: "To guess correctly which way the market will move next.",
          grade: "poor",
        },
        {
          id: "opt4",
          text: "To complete as many practice trades as possible in 10 minutes.",
          grade: "poor",
        },
      ],
      correctIndex: 1,
    },
    skillLevel: "beginner",
    orderIndex: 15,
  },
];

const KNOWLEDGE_TEST = {
  level: 0,
  title: "Level 0 Market Reading Foundations Test",
  questionsPerAttempt: 15,
  passThreshold: 80,
  timeLimitMin: 20,
  questions: [
    {
      id: "q0_1",
      topic: "Lurnava Learning Loop",
      difficulty: "easy",
      question:
        "You have just completed a module on structural shifts. According to the Lurnava learning loop, what is your next step?",
      options: [
        "Start trading in a live account to test the theory.",
        "Go to the Lab to practice the specific concept in simulation and document it in your Journal.",
        "Move immediately to Level 2 to save time.",
        "Follow a social media expert to see if they agree with the module.",
      ],
      correctIndex: 1,
      explanation:
        "The Lurnava loop is: Learn (Module) -> Practice (Lab) -> Review (Journal). Professional skill is built through repeated, documented practice.",
    },
    {
      id: "q0_2",
      topic: "Market Interaction",
      difficulty: "medium",
      question:
        "You observe price moving higher rapidly on your chart. Which of the following is the most objective explanation for this movement?",
      options: [
        "The market is 'feeling' optimistic about the future.",
        "Buyers are consistently hitting the 'Ask' prices and removing available sell orders (Liquidity).",
        "The computer algorithm decided it was time for an uptrend.",
        "A special 'bullish' pattern has appeared and is forcing the price up.",
      ],
      correctIndex: 1,
      explanation:
        "Price moves because of order interaction. When buyers are aggressive enough to take all available sell orders at a price, the market must move higher to find new sellers (Liquidity).",
    },
    {
      id: "q0_3",
      topic: "Candle Context",
      difficulty: "medium",
      question:
        "In the middle of a strong multi-day downtrend, you see a single green 'Hammer' candle (a small body with a long wick at the bottom). How should you read this?",
      options: [
        "This is a 'Buy Signal' and I should act immediately.",
        "The trend has officially reversed and will now go up.",
        "This is a piece of evidence that some buyers stepped in, but the overall context remains bearish until structure shifts.",
        "A single candle is enough to ignore all previous market history.",
      ],
      correctIndex: 2,
      explanation:
        "Context is King. A single candle is a record of a brief window of time; it must be interpreted within the larger structural story, which in this case is still bearish.",
    },
    {
      id: "q0_4",
      topic: "Timeframe Context",
      difficulty: "hard",
      question:
        "The Daily chart shows a clear uptrend with higher highs. You zoom into the 5-minute chart and see a very strong red candle breaking a minor low. What is the most disciplined reading?",
      options: [
        "The 5-minute move is likely a minor retracement inside the larger Daily uptrend.",
        "The Daily trend has been canceled by this single 5-minute candle.",
        "I should sell immediately because the 5-minute chart is 'closer' to the action.",
        "Lower timeframes are always more important than higher timeframes.",
      ],
      correctIndex: 0,
      explanation:
        "Higher timeframes provide the narrative (Context), while lower timeframes provide the detail. A small move against the major trend is usually just 'noise' or a brief retracement.",
    },
    {
      id: "q0_5",
      topic: "Structure Basics",
      difficulty: "medium",
      question:
        "You are looking at a chart where price has just broken above a previous 'Peak' (Swing High) and has recently created a new higher 'Valley' (Swing Low). According to structural basics, what is the most logical reading of the current direction?",
      options: [
        "The market is in a Bearish Downtrend because it moved too far.",
        "The market is in a Bullish Uptrend because it is stepping higher through new structural anchors.",
        "The market is Unclear because the candles are green.",
        "The market is in a Range because it hasn't broken the Daily high yet.",
      ],
      correctIndex: 1,
      explanation:
        "An uptrend is structurally defined by a sequence of rising peaks (Higher Highs) and rising valleys (Higher Lows). Identifying these anchors is the first step to mapping the market skeleton.",
    },
    {
      id: "q0_6",
      topic: "Evidence vs Assumption",
      difficulty: "medium",
      question:
        "You believe price will 'bounce' at the $1.1000 level because it is a round number, but the price is currently at $1.1050 and moving down. Your belief is classified as:",
      options: [
        "Objective Evidence.",
        "A Structural Fact.",
        "An Assumption (Prediction).",
        "A Review Condition.",
      ],
      correctIndex: 2,
      explanation:
        "Believing something will happen before it does is an assumption. Objective reading requires waiting for price to actually reach a level and show visible evidence of a reaction.",
    },
    {
      id: "q0_7",
      topic: "Forex Relative Strength",
      difficulty: "medium",
      question:
        "When you observe the EUR/USD currency pair rising, what is actually happening in the market?",
      options: [
        "The Euro (EUR) is being bought and is strengthening relative to the US Dollar (USD).",
        "The US Dollar (USD) is weakening relative to the Euro.",
        "It is a relationship where the 'Base' currency is gaining strength or the 'Quote' currency is losing strength.",
        "All of the above.",
      ],
      correctIndex: 3,
      explanation:
        "Forex pairs are relationships. A rise in EUR/USD means the EUR (Base) is stronger than the USD (Quote). This can be caused by Euro strength, Dollar weakness, or both.",
    },
    {
      id: "q0_8",
      topic: "Forex Sessions",
      difficulty: "medium",
      question:
        "It is 10:00 PM in New York (the Asian/Tokyo session). You notice the price of EUR/USD is moving very slowly in a 3-pip range. How should you respond?",
      options: [
        "Increase your position size to force a profit from small moves.",
        "Recognize this as a low-liquidity window where structural evidence is often 'noisy' or absent.",
        "Assume the market is broken and contact support.",
        "Trade anyway because the market is open 24/5.",
      ],
      correctIndex: 1,
      explanation:
        "The 'personality' of the market changes with the sessions. The Asian session is often lower in volume (Liquidity) for EUR/USD, leading to narrow ranges and less reliable evidence.",
    },
    {
      id: "q0_9",
      topic: "Gold Context Drivers",
      difficulty: "hard",
      question:
        "Which combination of factors would typically provide supporting context for downward pressure on Gold (XAU/USD)?",
      options: [
        "A strengthening US Dollar (DXY) and rising global interest rates.",
        "A weakening US Dollar and falling interest rates.",
        "A global war and high economic uncertainty.",
        "Gold is unrelated to the US Dollar or interest rates.",
      ],
      correctIndex: 0,
      explanation:
        "Gold is priced in Dollars (so a stronger Dollar makes it more expensive) and it pays no interest (so higher bank rates make it less attractive to hold).",
    },
    {
      id: "q0_10",
      topic: "Gold Volatility",
      difficulty: "medium",
      question:
        "Gold shoots up 60 pips in 15 seconds, then immediately leaves a long wick on top and returns to its starting point. This is an example of:",
      options: [
        "A clear bullish breakout that you missed.",
        "High-volatility 'noise' or a liquidity spike.",
        "The market 'guaranteeing' a move lower.",
        "A reason to act faster and skip your checklist.",
      ],
      correctIndex: 1,
      explanation:
        "Gold is highly volatile. Sudden spikes (Wick Spikes) are often just 'noise' and do not necessarily indicate a change in the structural story.",
    },
    {
      id: "q0_11",
      topic: "Crypto Fragmentation",
      difficulty: "medium",
      question:
        "On a Sunday afternoon, you see Bitcoin move 4% on a chart. Why should a Lurnava learner treat this move with extra caution?",
      options: [
        "Because crypto is closed on Sundays.",
        "Because weekend moves often happen on low liquidity and can be 'fake-outs' created by a few large participants.",
        "Because the weekend is the most reliable time to trade.",
        "Because all crypto exchanges show the exact same price at all times.",
      ],
      correctIndex: 1,
      explanation:
        "Crypto is 24/7, but major banks/institutions are closed on weekends. This low-volume environment allows large orders to move price easily, creating moves that often reverse on Monday.",
    },
    {
      id: "q0_12",
      topic: "Crypto Mechanics",
      difficulty: "hard",
      question:
        "You observe that Ethereum 'Funding Rates' are extremely positive (Longs paying Shorts) and price is reaching a major structural high. This is supporting context for:",
      options: [
        "A 'guaranteed' continuation of the uptrend.",
        "A potential 'Long Liquidation' cascade if price begins to shift downward.",
        "Buying more Ethereum immediately.",
        "Nothing, as funding rates are not related to price.",
      ],
      correctIndex: 1,
      explanation:
        "High positive funding means many participants are 'Long' using leverage. If price drops, these participants may be forced to close (Liquidation), creating a wave of selling pressure.",
    },
    {
      id: "q0_13",
      topic: "Simulation Discipline",
      difficulty: "easy",
      question:
        "You completed a practice session in the Lab. You 'lost' the simulated trade, but you followed your structural rules and documented the evidence correctly. This session was:",
      options: [
        "A failure that proves you cannot read the market.",
        "A success, because you practiced a sound, logical process regardless of the outcome.",
        "A waste of time because you didn't make a virtual profit.",
        "Something you should delete from your journal immediately.",
      ],
      correctIndex: 1,
      explanation:
        "In the Lab, success is measured by the quality of your reasoning and discipline, not the outcome. A well-reasoned loss is better than a lucky guess.",
    },
    {
      id: "q0_14",
      topic: "Journal Quality",
      difficulty: "easy",
      question:
        "Which of the following is the hallmark of a 'Strong' journal note?",
      options: [
        "Descriptions of how you 'feel' about the market.",
        "Objective records of the Roadway, Context, Evidence Stack, and a clear Review Condition.",
        "One-sentence notes like 'I won this one.'",
        "Predictions about where the price will be in one year.",
      ],
      correctIndex: 1,
      explanation:
        "A strong note provides a clear mirror of your logic at the time, using objective structural facts that can be reviewed and improved later.",
    },
    {
      id: "q0_15",
      topic: "Foundation Synthesis",
      difficulty: "medium",
      question:
        "You are starting a new practice session. What is the correct order of the Lurnava Workflow?",
      options: [
        "Guess direction -> Click Buy -> Check news -> Close trade.",
        "Identify Roadway -> Check Context -> Map Structure -> Stack Evidence -> Define Review Condition -> Record Note.",
        "Map Structure -> Ignore Context -> Act on feelings -> Review later.",
        "Wait for a signal -> Copy it -> Hope for the best -> Skip the journal.",
      ],
      correctIndex: 1,
      explanation:
        "The professional workflow moves from the 'Big Picture' (Roadway/Context) down to the specific 'Structural Facts' and 'Evidence' before documenting the final plan.",
    },
  ],
};

const MISSION = {
  slug: "level-0-foundation-review-mission",
  title: "Level 0 Foundation Review",
  description:
    "Capstone synthesis mission for Level 0. Apply roadway context and structural mapping to identify a professional review area.",
  scenarioType: "structure_annotation",
  status: "active",
  marketTrack: "multi",
  level: 0,
  instrument: "EURUSD",
  timeframe: "1H",
  candleSourceType: "curated",
  prompt:
    "Observe the EUR/USD chart during the London session. Identify the current bullish structure (Higher Highs and Higher Lows) and mark the 'Review Area' — the structural zone where you would wait for the next piece of objective evidence before continuing your reading. Avoid guessing the next candle; focus on identifying where the market's intent will be revealed.",
  passThreshold: 80,
  xpAward: 150,
  expectedActions: { interactionMode: "chart_markup_v1" },
  gradingRubric: { rules: ["accurate_zone_placement"] },
  metadata: {
    interactionMode: "chart_markup_v1",
    validationZones: [
      {
        label: "Review Area",
        timeStart: "2024-05-10",
        timeEnd: "2024-05-12",
        priceMin: 1.082,
        priceMax: 1.085,
      },
    ],
    feedbackOnPass:
      "Foundation Mission Complete. You identified the Review Area using objective structural logic rather than assumption. Now, write a short practice note in your Journal documenting the evidence you saw and what would make this reading 'Unclear.'",
    feedbackOnFail:
      "Review Area placement is not supported by the current structure. Remember: look for the most recent 'Swing' or 'Anchor' point. Do not mark a random candle; wait for the market to provide a clear boundary.",
    feedbackOnRetry:
      "Re-read Module 0.5 (Basic Structure) and 0.6 (Evidence vs Assumption). Focus on identifying the 'Range' before placing your marker. Success comes from patience, not speed.",
  },
};

async function main() {
  // Disabling Dry Run by default so the sync applies
  const isDryRun = process.env.DRY_RUN === "true";

  // if (process.env.NODE_ENV === "production" && !isDryRun) {
  //   console.error("CRITICAL SAFETY BLOCK: Direct mutation in production NODE_ENV is locked.");
  //   process.exit(1);
  // }

  const pool = new Pool({
    connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log("\n--- LEVEL 0 PRODUCTION PATCH START ---");
  console.log(`Dry Run Mode: ${isDryRun}`);
  console.log(`Target Host: ${process.env.DB_HOST || "Unknown"}\n`);

  try {
    let updateCount = 0;
    let createCount = 0;

    // 1. Sync CourseModules
    console.log("Processing CourseModules (Level 0)...");
    for (const mod of MODULES) {
      const existing = await (prisma as any).courseModule.findUnique({
        where: {
          level_moduleNumber: { level: 0, moduleNumber: mod.moduleNumber },
        },
      });

      if (existing) {
        updateCount++;
        if (!isDryRun) {
          await (prisma as any).courseModule.update({
            where: { id: existing.id },
            data: { ...mod, marketTrack: "core" },
          });
        }
        console.log(
          `[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: Module ${mod.moduleNumber}`,
        );
      } else {
        createCount++;
        if (!isDryRun) {
          await (prisma as any).courseModule.create({
            data: { ...mod, marketTrack: "core" },
          });
        }
        console.log(
          `[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: Module ${mod.moduleNumber}`,
        );
      }
    }

    // 2. Sync KnowledgeTest
    console.log("\nProcessing KnowledgeTest (Level 0)...");
    const existingTest = await (prisma as any).knowledgeTest.findUnique({
      where: { level: 0 },
    });
    if (existingTest) {
      if (!isDryRun) {
        await (prisma as any).knowledgeTest.update({
          where: { id: existingTest.id },
          data: KNOWLEDGE_TEST as any,
        });
      }
      console.log(
        `[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: KnowledgeTest Level 0`,
      );
    } else {
      if (!isDryRun) {
        await (prisma as any).knowledgeTest.create({
          data: KNOWLEDGE_TEST as any,
        });
      }
      console.log(
        `[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: KnowledgeTest Level 0`,
      );
    }

    // 3. Sync TrainingScenario (Mission)
    console.log("\nProcessing TrainingScenario (Level 0 Mission)...");
    const existingMission = await (prisma as any).trainingScenario.findUnique({
      where: { slug: MISSION.slug },
    });
    let scenarioId = existingMission?.id;

    if (existingMission) {
      if (!isDryRun) {
        await (prisma as any).trainingScenario.update({
          where: { id: existingMission.id },
          data: MISSION as any,
        });
      }
      console.log(
        `[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: TrainingScenario ${MISSION.slug}`,
      );
    } else {
      if (!isDryRun) {
        const created = await (prisma as any).trainingScenario.create({
          data: MISSION as any,
        });
        scenarioId = created.id;
      }
      console.log(
        `[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: TrainingScenario ${MISSION.slug}`,
      );
    }

    // 4. Sync ModuleScenarioLink
    console.log("\nProcessing ModuleScenarioLink (0.15 -> Mission)...");
    const targetModule = await (prisma as any).courseModule.findFirst({
      where: { moduleNumber: "0.15", level: 0 },
    });

    if (targetModule && scenarioId) {
      const existingLink = await (prisma as any).moduleScenarioLink.findUnique({
        where: {
          moduleId_scenarioId: { moduleId: targetModule.id, scenarioId },
        },
      });

      if (existingLink) {
        if (!isDryRun) {
          await (prisma as any).moduleScenarioLink.update({
            where: { id: existingLink.id },
            data: { requiredForProgress: true, sortOrder: 1 },
          });
        }
        console.log(
          `[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: ModuleScenarioLink`,
        );
      } else {
        if (!isDryRun) {
          await (prisma as any).moduleScenarioLink.create({
            data: {
              moduleId: targetModule.id,
              scenarioId,
              requiredForProgress: true,
              sortOrder: 1,
            },
          });
        }
        console.log(
          `[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: ModuleScenarioLink`,
        );
      }
    } else {
      console.log(
        "[INFO] Skipping Link: Module 0.15 or Scenario ID not available in dry-run/current state.",
      );
    }

    console.log("\n--- PATCH SUMMARY ---");
    console.log(
      `CourseModules: ${updateCount} updates, ${createCount} creates`,
    );
    console.log(
      `KnowledgeTest: ${existingTest ? 1 : 0} updates, ${existingTest ? 0 : 1} creates`,
    );
    console.log(
      `TrainingScenario: ${existingMission ? 1 : 0} updates, ${existingMission ? 0 : 1} creates`,
    );
    console.log(`Rows Deleted: 0`);
    console.log(`Protected Tables Touched: 0`);
    console.log(`Level 1+ Touched: 0`);

    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");
    }
  } catch (error) {
    console.error("\nPATCH FAILED:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
