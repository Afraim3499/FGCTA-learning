import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Initializing Full 69-Module Market Participant ingestion with Adaptations...");

  const modules = [
    // ============================================
    // LEVEL 0: MARKET READING FOUNDATIONS (6 MODULES)
    // ============================================
    {
      level: 0, moduleNumber: "0.1", title: "What Lurnava Teaches: Reading, Practice, Review",
      objective: "Welcome to the Market Reading Foundations.",
      content: `:::lesson-cards
[
  {
    "type": "mission_brief",
    "title": "Mission Brief: You Are Not Here for Tips",
    "label": "Training Intent",
    "body": "Welcome to the Academy. Most people enter the market looking for 'tips,' 'secret strategies,' or 'signals' that tell them when to click a button. This is the fastest route to failure. Imagine a foundation-stage learner who spends an entire evening watching short, high-energy trading content online. One video explains a candle pattern; another talks about a liquidity concept; a third mentions crypto funding. The learner feels informed, productive, and confident. However, as soon as they open a live price chart, they realize they cannot explain what evidence they are actually looking for. Their confidence was not built on skill; it was borrowed conviction from a screen.\\n\\nLurnava is not a library of content; it is a structured training system. We are here to prevent the 'Random Learner' trap—the habit of consuming endless information without ever building a repeatable process. You are not here to watch; you are here to be trained in Structured Market Reading. This requires moving past the desire for shortcuts and committing to an academy process of observation, simulation, and audit. This module prevents the most common failure in early-stage development: having a head full of facts but no system to apply them. You are here to stop guessing and start reading.",
    "context": {
      "keyTerms": ["Borrowed conviction", "Structured training system", "Market reading", "Training path"],
      "whyThisMatters": "Many learners feel productive after watching content, but they still cannot explain what they are seeing when a live chart opens. Lurnava trains the learner to build a repeatable process instead of collecting disconnected ideas.",
      "realLifeExample": "A learner watches one video about candles, another about liquidity, and another about crypto funding. They feel informed, but when the chart opens, they cannot name the evidence they are looking for.",
      "commonMistake": "Thinking “I have seen this before” means “I understand this.” Recognition without explanation is not skill.",
      "quickNote": "If you cannot explain the reading, do not trust the feeling.",
      "comparison": {
        "left": {
          "title": "The Random Learner",
          "subtitle": "Busy Activity, No Skill",
          "type": "negative",
          "items": ["Scattered Videos", "Conflicting Tips", "Emotional Hype", "Constant Strategy Hopping"],
          "description": "The learner feels informed, but cannot explain what evidence they are looking for when the chart opens."
        },
        "right": {
          "title": "The Lurnava Path",
          "subtitle": "Structured Skill Building",
          "type": "positive",
          "items": ["One Concept", "Deliberate Practice", "Mission Check-ride", "Review Audit"],
          "description": "Every session adds a repeatable brick to the foundation. Confidence comes from evidence, not emotion."
        }
      }
    }
  },
  {
    "type": "visual_intro",
    "title": "The Lurnava Training Loop",
    "visualKey": "learning-loop",
    "label": "Visual First",
    "body": "The loop matters because understanding alone is not training. Lurnava uses practice, missions, and review notes to turn a lesson into a repeatable learning process.",
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
      "realLifeExample": "EUR/USD rises during the London session. Instead of immediately saying 'Euro is strong,' a trained learner checks whether USD is weakening across other pairs and whether the session has enough activity to make the meaningful.",
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
        question: "Scenario: You watch a 'short tip' video online, open the Lurnava Lab, and see something similar happening. What is the most disciplined training action?",
        options: [
          "Act immediately to see if the tip works with real-time motion.",
          "Identify the core concept, check the structural context in the Lab, practice it deliberately in the simulator, and record a review note.",
          "Wait for Nava to tell you exactly where to click so you don't make a mistake.",
          "Search for more videos to see if other people agree with the tip before deciding."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 0, moduleNumber: "0.2", title: "What a Market Really Is",
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
          { "id": "A", "text": "A transaction happens when the chart forms a special pattern.", "isCorrect": false, "feedback": "Not correct. A pattern does not create a transaction. Patterns appear after price has moved; transactions come from matched buy and sell orders." },
          { "id": "B", "text": "A transaction happens when compatible buy and sell orders are matched at a price.", "isCorrect": true, "feedback": "Correct. A transaction happens when compatible buy and sell orders are matched at a price. The chart then records that completed exchange." },
          { "id": "C", "text": "A transaction happens when the computer randomly decides price should move.", "isCorrect": false, "feedback": "Not correct. The computer does not randomly decide that price should move. A matching engine connects compatible orders. Price updates because transactions happen." },
          { "id": "D", "text": "A transaction happens automatically every few seconds regardless of orders.", "isCorrect": false, "feedback": "Not correct. Transactions do not happen automatically just because time passes. They happen when orders are matched." }
        ]
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
      "keyTerms": [
        { "term": "Market Layer", "definition": "The specific segment of the gold market (spot, futures, etc.) driving the price." },
        { "term": "Incomplete Evidence", "definition": "Market data that lacks the structural context needed for a reliable reading." }
      ],
      "whyThisMatters": "A Lurnava learner checks the market layer to avoid being trapped by noisy quote conditions or single-layer spikes.",
      "quickNote": "Identify the market layer before trusting the move."
    }
  }
]
:::`,
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 0, moduleNumber: "0.3", title: "Candles Are Records, Not Signals",
      objective: "Learn to read price data as objective evidence of participant interaction.",
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
      "realLifeExample": "A candle with a tiny body and a very long upper wick records that buyers pushed price high, but sellers completely overwhelmed them before the period ended.",
      "commonMistake": "Ignoring the wicks. Wicks often contain more information about rejection than the body does about commitment.",
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
    "title": "Crypto Candles: The Liquidation Record",
    "visualKey": "crypto-mechanics",
    "label": "Crypto Context",
    "body": "Crypto candles often record extreme 'Wick' activity. A long wick in crypto can be a record of forced liquidations—where leveraged traders were pushed out of their positions rapidly.",
    "context": {
      "keyTerms": [
        { "term": "Liquidation Wick", "definition": "A long candle wick caused by forced exits of leveraged positions." },
        { "term": "Flash Move", "definition": "A rapid record of price movement that may not have long-term support." }
      ],
      "whyThisMatters": "In crypto, a dramatic candle may just be a mechanical record of liquidations, not a change in market sentiment.",
      "quickNote": "Wicks in crypto often record mechanical pressure."
    }
  }
]
:::`,
      goldAdaptation: `:::lesson-cards
[
  {
    "type": "visual_intro",
    "title": "Gold Candles: Speed vs. Clarity",
    "visualKey": "gold-reading-map",
    "label": "Gold Context",
    "body": "Gold candles can form very quickly. A large body in Gold can record high-speed momentum, but if it happens during a news event, the record may be 'noisy' and prone to immediate rejection.",
    "context": {
      "keyTerms": [
        { "term": "Noisy Record", "definition": "A candle formed during extreme volatility that may lack structural meaning." },
        { "term": "Rejection Speed", "definition": "How quickly a Gold candle can turn from a full body into a long wick." }
      ],
      "whyThisMatters": "Gold punishes learners who treat a fast-forming body as a confirmed signal before the candle actually closes.",
      "quickNote": "Wait for the close to read the record."
    }
  }
]
:::`,
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 0, moduleNumber: "0.4", title: "Timeframes Change the Story",
      objective: "Understanding the chart's zoom levels.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Timeframes Change the Story",
    "label": "Perspective",
    "body": "A timeframe is essentially the **zoom level** of your chart.\\n\\n- **Daily (D1)**: One candle = one full day.\\n- **1-hour (H1)**: One candle = one hour.\\n- **15-minute (m15)**: One candle = fifteen minutes.\\n\\nThe market is happening on all timeframes at once. Understanding how they interact is a vital professional skill."
  },
  {
    "type": "scenario",
    "title": "The Map Analogy",
    "label": "Visualization",
    "scenario": {
      "left": {
        "title": "Global Map (HTF)",
        "content": "You see that you are traveling North. This is the big picture direction."
      },
      "right": {
        "title": "City Map (LTF)",
        "content": "You might be turning South to avoid a one-way street. Without the global map, you think you are lost."
      }
    }
  },
  {
    "type": "concept",
    "title": "Context vs Detail",
    "label": "The Relationship",
    "items": [
      { "title": "Higher (HTF)", "body": "Provide the Context. They show the major 'narrative'.", "icon": "htf" },
      { "title": "Lower (LTF)", "body": "Provide the Detail. They show the specific 'movements'.", "icon": "ltf" }
    ]
  },
  {
    "type": "rule",
    "title": "The Alignment Rule",
    "label": "Logic",
    "body": "> Never form a reading based only on a lower timeframe. Always 'zoom out' to find the big story before you 'zoom in' to see the details."
  },
  {
    "type": "comparison",
    "title": "The Zoom-In Trap",
    "label": "Mistake",
    "comparison": {
      "left": {
        "title": "Wrong",
        "type": "negative",
        "content": "'The 5-minute chart has a big green candle! I'm buying!' (Ignoring the 4-hour downtrend)."
      },
      "right": {
        "title": "Better",
        "type": "positive",
        "content": "'The Daily chart is bullish. I will zoom in to find a structural shift in my favor on the 15-minute chart.'"
      }
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Timeframes are tools for perspective. The higher timeframe tells you **where** you are going, and the lower timeframe shows you **how** you are getting there."
  }
]
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The 4-hour chart is in a clear downtrend with lower highs and lower lows. You zoom into the 5-minute chart and see a very strong green candle. What is the most disciplined reading?",
        options: [
          { id: "opt1", text: "The trend has reversed on the 5-minute chart, so I should look for buys.", grade: "poor", feedback: "A single candle on a lower timeframe cannot reverse a higher-timeframe narrative.", rationale: "LTF moves are often just noise or small retracements inside an HTF move." },
          { id: "opt2", text: "The green candle is likely a minor retracement inside the 4-hour downtrend. I will wait for evidence that the 4-hour direction is resuming.", grade: "best", feedback: "Correct. You are prioritizing higher-timeframe context.", rationale: "Successful reading requires aligning the detail of the LTF with the context of the HTF." }
        ]
      },
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 0, moduleNumber: "0.5", title: "Basic Structure: Swings, Ranges, Direction",
      objective: "Mapping the skeleton of the market.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Basic Structure: Swings, Ranges, Direction",
    "label": "The Grammar",
    "body": "If candles are the words, **Market Structure** is the grammar. It is the skeleton that holds everything together. Without structure, a chart is just random wiggles.\\n\\nStructure allows us to map the market objectively using three components: **Swings**, **Ranges**, and **Direction**."
  },
  {
    "type": "concept",
    "title": "Swing Highs and Swing Lows",
    "label": "Anchors",
    "body": "A **Swing** is a turning point in price.\\n\\n- **Swing High**: A peak. Price moves up, stops, and moves down.\\n- **Swing Low**: A valley. Price moves down, stops, and moves up.\\n\\nThese points are your anchors. They represent where the market's intent shifted."
  },
  {
    "type": "concept",
    "title": "The Dealing Range",
    "label": "The Box",
    "body": "A **Range** is the distance between a Swing Low and a Swing High. Think of it as a 'box' that price is currently playing inside. Until price breaks out of this box, the structural story hasn't truly changed."
  },
  {
    "type": "concept",
    "title": "Directional Narrative",
    "label": "The Trend",
    "items": [
      { "title": "Uptrend", "body": "Higher Highs and Higher Lows. Stepping up.", "icon": "trending-up" },
      { "title": "Downtrend", "body": "Lower Highs and Lower Lows. Stepping down.", "icon": "trending-down" },
      { "title": "Ranging", "body": "Stuck inside an old range. Messy moves.", "icon": "minus" }
    ]
  },
  {
    "type": "comparison",
    "title": "What to Label",
    "label": "Clarity",
    "comparison": {
      "left": {
        "title": "Over-Mapping",
        "type": "negative",
        "content": "Trying to label every single wiggle. Creates a messy chart and a confused mind."
      },
      "right": {
        "title": "Pro Mapping",
        "type": "positive",
        "content": "Only label obvious peaks and valleys. If you have to squint, it's not important."
      }
    }
  },
  {
    "type": "rule",
    "title": "The Structure Rule",
    "label": "Logic",
    "body": "> Identify the major anchors (Swings) to define the 'box' (Range). The sequence of these ranges determines the Direction. Always map before you act."
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Market structure is the map of the market. By identifying Swing Highs and Swing Lows, you define the Range. By observing the sequence of these ranges, you determine the Direction."
  }
]
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "How do you identify a valid range in the market?",
        options: [
          "It is the distance between the most recent green candle and the most recent red candle.",
          "It is the distance between the most recently confirmed Swing High and Swing Low.",
          "It is the area where the price has stayed for at least 24 hours.",
          "It is the gap between the current price and the price from one hour ago."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 0, moduleNumber: "0.6", title: "Evidence vs Assumption",
      objective: "Building a disciplined reading process.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Evidence vs Assumption",
    "label": "Discipline",
    "body": "The final foundation of market reading is the most important for your survival: **Discipline**.\\n\\nIn the markets, there are two ways to think: **Assumption** and **Evidence**. Professional participants act only on evidence."
  },
  {
    "type": "scenario",
    "title": "Which Side Are You On?",
    "label": "The Mindset",
    "scenario": {
      "left": {
        "title": "The Assumer",
        "content": "Believes something *will* happen before it has. 'I think price will bounce here because it's a round number.' (Hope-based)."
      },
      "right": {
        "title": "The Observer",
        "content": "Acts on what has *already* happened. 'I observe a structural shift after price reached the level.' (Fact-based)."
      }
    }
  },
  {
    "type": "rule",
    "title": "The Evidence Rule",
    "label": "Logic",
    "body": "> Never form a reading based on what you 'feel' or 'hope' will happen. Only form a reading based on structural facts visible on the chart right now."
  },
  {
    "type": "concept",
    "title": "The Power of 'Unclear'",
    "label": "Objectivity",
    "body": "One of the most valuable phrases in market reading is: **'This is Unclear.'**\\n\\nIf the Evidence Stack is messy or contradictory, the professional answer is to wait. Forcing a reading is a form of assumption."
  },
  {
    "type": "concept",
    "title": "The Review Condition",
    "label": "Adaptability",
    "body": "A **Review Condition** is a specific event that tells you your reading is no longer valid. It prevents you from becoming emotionally 'locked' into a single story and gives you an objective reason to re-audit."
  },
  {
    "type": "comparison",
    "title": "Forming a Plan",
    "label": "The Process",
    "comparison": {
      "left": {
        "title": "Wrong",
        "type": "negative",
        "content": "'I'm buying here because I think it's cheap.' (Assumption)."
      },
      "right": {
        "title": "Better",
        "type": "positive",
        "content": "'Price printed a bullish shift in a discount area. I have three pieces of evidence. My review condition is a close below the swing low.' (Evidence-Based)."
      }
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Professional reading is about collecting evidence. If there isn't enough evidence, the reading is Unclear. Every plan must have a Review Condition to maintain objectivity."
  }
]
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are looking at a chart that is moving sideways with no clear highs or lows being broken. You really want to find a reason to practice. What is the best classification of this situation?",
        options: [
          { id: "opt1", text: "Assumption: I will guess the breakout direction so I can start practicing.", grade: "poor", feedback: "Guessing is not practice; it is gambling.", rationale: "Practice must be based on objective structural logic." },
          { id: "opt2", text: "Unclear: The market is not providing enough structural evidence to form a reading. I will wait for a breakout or a clear shift.", grade: "best", feedback: "Correct. Recognizing an unclear market is a vital skill.", rationale: "Objectivity requires accepting when the data is insufficient for a decision." }
        ]
      },
      skillLevel: "beginner", orderIndex: 6
    },

    {
      level: 0, moduleNumber: "0.7", title: "Forex Is Relative Strength, Not One Asset Moving",
      objective: "Understand that a currency pair is a relationship between two economies.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Forex Is Relative Strength",
    "label": "The Relationship",
    "body": "In Forex, everything comes in pairs (like **EUR/USD**). You aren't just buying one asset; you are participating in a **Relationship** between two economies."
  },
  {
    "type": "scenario",
    "title": "The Tug-of-War",
    "label": "Visualization",
    "scenario": {
      "left": {
        "title": "Base Pulling (EUR)",
        "content": "The Euro economy is pulling harder. Price moves up. EUR is stronger than USD."
      },
      "right": {
        "title": "Quote Pulling (USD)",
        "content": "The U.S. economy is pulling harder. Price moves down. USD is stronger than EUR."
      }
    }
  },
  {
    "type": "concept",
    "title": "Base and Quote",
    "label": "Roadmap",
    "body": "To navigate pairs, you must understand their structure:\\n\\n- **Base Currency**: The first one listed (The Item). In EUR/USD, it's EUR.\\n- **Quote Currency**: The second one listed (The Money). In EUR/USD, it's USD.\\n\\nIf EUR/USD is 1.1000, it means 1 Euro costs 1.10 U.S. Dollars."
  },
  {
    "type": "concept",
    "title": "Market Drivers",
    "label": "The Ecosystem",
    "items": [
      { "title": "Relative Strength", "body": "Price rises if Base strengthens OR Quote weakens.", "icon": "strength" },
      { "title": "The DXY", "body": "An index that tracks the USD against all majors.", "icon": "dxy" },
      { "title": "Pair Correlation", "body": "Shared currencies don't mean shared moves.", "icon": "correlation" }
    ]
  },
  {
    "type": "comparison",
    "title": "Analyzing a Pair",
    "label": "Process",
    "comparison": {
      "left": {
        "title": "The Bias",
        "type": "negative",
        "content": "'I like the British Pound, so I'm buying GBP/USD.' (Emotional bias)."
      },
      "right": {
        "title": "The Analysis",
        "type": "positive",
        "content": "'DXY shows weakness while GBP holds its range. GBP/USD is the logical pair to observe.' (Relative strength)."
      }
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Forex is a market of relationships. Success comes from identifying which side of the pair is the 'driver' of the move. Always check the other side."
  }
]
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "If the price of the GBP/USD currency pair is rising, which of the following is a correct structural explanation?",
        options: [
          "The British Pound (GBP) is gaining strength while the US Dollar (USD) remains the same or weakens.",
          "The US Dollar (USD) is gaining strength, which always makes the pair go up.",
          "The British Pound is the only currency that matters in this pair.",
          "The price is rising because more people in London are waking up."
        ],
        correctIndex: 0
      },
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 0, moduleNumber: "0.8", title: "Forex Sessions and Liquidity Windows",
      objective: "Learn how the time of day changes market behavior.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Sessions and Liquidity Windows",
    "label": "Timing",
    "body": "The Forex market is open 24 hours a day, but it doesn't move with the same intensity all the time. Market behavior changes in distinct cycles called **Sessions**, based on which major financial centers are awake."
  },
  {
    "type": "concept",
    "title": "The Three Major Sessions",
    "label": "The Cycle",
    "items": [
      { "title": "Asian (Tokyo)", "body": "Usually the quietest. Narrow ranges.", "icon": "asian" },
      { "title": "London", "body": "World's largest hub. The 'real' move often starts here.", "icon": "london" },
      { "title": "New York", "body": "High energy. Major decisions are finalized.", "icon": "new-york" }
    ]
  },
  {
    "type": "concept",
    "title": "The Liquidity Overlap",
    "label": "Peak Activity",
    "body": "The most important window is the **London/New York Overlap**. This is a 4-hour window where the two largest centers are both active, creating the highest liquidity and the most reliable evidence."
  },
  {
    "type": "scenario",
    "title": "Session Personality",
    "label": "Observation",
    "scenario": {
      "left": {
        "title": "Quiet Hours",
        "content": "Price moves slowly in a tiny range. Spreads are wider. Evidence is noisy and unreliable."
      },
      "right": {
        "title": "Active Hours",
        "content": "Injection of volume. New trends form. Spreads are tight. Real intent is revealed."
      }
    }
  },
  {
    "type": "rule",
    "title": "The Timing Rule",
    "label": "Logic",
    "body": "> Focus your practice on the first 2-3 hours of a major session. High-volume sessions provide the most reliable evidence. Respect the clock."
  },
  {
    "type": "comparison",
    "title": "Approaching the Day",
    "label": "Strategy",
    "comparison": {
      "left": {
        "title": "Wrong",
        "type": "negative",
        "content": "'I have free time now at 8 PM, so I'll trade now.' (Ignoring session context)."
      },
      "right": {
        "title": "Better",
        "type": "positive",
        "content": "'London is opening. I'll check for shifts because I know real intent is revealed now.' (Respecting the window)."
      }
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Time is just as important as price. High-volume sessions provide the most reliable evidence, while quiet sessions often lead to false moves."
  }
]
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are observing a price chart at 10 PM New York time (during the Asian session). Price is moving very slowly in a 5-pip range. What is the most disciplined observation?",
        options: [
          { id: "opt1", text: "The market is boring, so I should increase my position size to make a move happen.", grade: "poor", feedback: "Increasing size to 'force' a move is a sign of lack of discipline.", rationale: "Low-liquidity sessions require patience, not larger risk." },
          { id: "opt2", text: "This is a low-liquidity window. I will record the current range in my journal but wait for the London open to see if a real move begins.", grade: "best", feedback: "Correct. You are respecting the session context.", rationale: "Professional participation requires waiting for windows of high participation." }
        ]
      },
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 0, moduleNumber: "0.9", title: "Gold Is Not Just Another Currency Pair",
      objective: "Understanding the unique drivers of the Gold market.",
      content: `:::lesson-cards
[
  {
    "type": "concept",
    "title": "Gold Is Not Just Another Pair",
    "label": "Safe-Haven",
    "body": "In your terminal, Gold is listed as **XAU/USD**. While it looks like a currency pair, Gold behaves very differently. It is a physical commodity that has held value for thousands of years."
  },
  {
    "type": "concept",
    "title": "Key Context Drivers",
    "label": "The Trio",
    "items": [
      { "title": "The US Dollar", "body": "If the Dollar strengthens, Gold usually gets cheaper.", "icon": "usd" },
      { "title": "Interest Rates", "body": "Higher rates make non-yielding Gold less attractive.", "icon": "rates" },
      { "title": "Uncertainty", "body": "Crisis events often cause sudden runs to Gold.", "icon": "crisis" }
    ]
  },
  {
    "type": "scenario",
    "title": "Understanding Volatility",
    "label": "The Sports Car",
    "scenario": {
      "left": {
        "title": "Forex (Sedan)",
        "content": "A family car driving at 40 mph. Calm, predictable movements."
      },
      "right": {
        "title": "Gold (Sports Car)",
        "content": "Can go from 0 to 100 mph in seconds. Requires much better brakes (risk management)."
      }
    }
  },
  {
    "type": "rule",
    "title": "The Respect Rule",
    "label": "Logic",
    "body": "> Gold is highly volatile. Never use the same position size on Gold that you use on slow Forex pairs. Respect the speed of the asset."
  },
  {
    "type": "comparison",
    "title": "Analyzing Gold",
    "label": "Context",
    "comparison": {
      "left": {
        "title": "Guru Logic",
        "type": "negative",
        "content": "'Buy Gold because it's cheap!' (Ignoring interest rates and USD strength)."
      },
      "right": {
        "title": "Professional Logic",
        "type": "positive",
        "content": "'Dollar is weak and market uncertainty is rising. Gold structural shift is confirmed.' (Multi-driver analysis)."
      }
    }
  },
  {
    "type": "practice",
    "title": "Practice Check",
    "label": "Interactive Task"
  },
  {
    "type": "summary",
    "title": "Module Summary",
    "label": "Recap",
    "body": "Gold is a unique asset driven by the Dollar, rates, and global uncertainty. It requires a higher level of respect for risk than most currency pairs."
  }
]
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Why does Gold often rise during times of global economic uncertainty?",
        options: [
          "Because it is considered a safe-haven asset that holds value when other assets are falling.",
          "Because the price of Gold is controlled by a secret group of banks.",
          "Because people use Gold coins more often when the internet is down.",
          "Because Gold is a currency just like the Euro."
        ],
        correctIndex: 0
      },
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 0, moduleNumber: "0.10", title: "Gold Volatility and Review Discipline",
      objective: "Learning to manage high-speed market data.",
      content: `# Gold Volatility and Review Discipline

Because Gold (**XAU/USD**) moves so fast, it can be overwhelming for a beginner. The "noise" (random small wiggles) on a Gold chart can look like a major move. This is why the Gold roadway requires the highest level of **Review Discipline**.

### Respecting the 'Spikes'
Gold is famous for "Wick Spikes." This is when the price shoots up or down very quickly and then immediately returns to where it started.
- In Forex, a 20-pip spike is a big deal.
- In Gold, a 50-pip spike can happen in a few seconds.

**Simple Scenario:**
Imagine you are playing a game of catch. In the Forex game, the ball is thrown at a steady pace. In the Gold game, the ball is sometimes replaced by a rocket. If you aren't paying attention, you'll miss the catch or get hurt.

:::visual
title: Gold Movement: Clean vs. Noisy
lookFor: ["Clean Structure - Price respects highs and lows with clear bodies", "Noisy Movement - Long wicks on both sides, 'messy' candles", "Displacement - Strong, full-bodied candles that show real intent", "Exhaustion - When wicks get longer and longer at the top of a move"]
:::

### Technical Term: Volatility (Deep Dive)
We introduced volatility in the last module, but on the Gold roadway, it is your constant companion.
**What this does not mean:**
Volatility does not mean "randomness." Even a fast-moving market follows structural rules. The difference is that you have less time to react.

### Stricter Review Discipline
Because moves happen so fast, you cannot rely on "feeling." You must have a **Pre-Flight Checklist** for every observation:
1. **HTF Context**: Is the 4-hour Gold chart bullish or bearish?
2. **Current Range**: Am I in the middle of a "messy" area or at a clear boundary?
3. **Evidence Stack**: Do I have at least 3 reasons for my reading?

### Wrong Approach vs Better Approach
- **Wrong**: "Gold is pumping! I'll buy now before I miss it!" (FOMO - Fear Of Missing Out).
- **Better**: "I observe a high-volatility spike into a major 4-hour resistance level. I will not 'chase' the move. I will wait for a structural shift on the 15-minute chart to confirm that the spike was an exhaustion move."

### Journal / Review Prompt
Whenever you complete a Gold practice session in the Lab, your journal entry must include the "Speed Factor." Ask yourself: "Did I make this decision because I saw a clear structural fact, or because the fast movement made me feel panicked?"

:::summary
High volatility is not a reason to move faster; it is a reason to slow down and be more clinical. Gold requires you to be an expert at identifying 'Noise' versus 'Intent.'
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are looking at the 5-minute Gold chart. The price just shot up 40 pips in one candle, but the candle has a very long wick on top and the overall trend is down. What is the best reading?",
        options: [
          { id: "opt1", text: "This is a bullish breakout! I should buy immediately to capture the momentum.", grade: "poor", feedback: "Chasing a high-volatility spike without context is an assumption.", rationale: "Spikes often represent 'liquidity testing' rather than a change in trend." },
          { id: "opt2", text: "This looks like a high-volatility spike (noise). Since it hasn't broken the overall downtrend structure, I will wait for price to settle.", grade: "best", feedback: "Correct. You are filtering the noise.", rationale: "Professional reading requires distinguishing between a momentary spike and structural displacement." }
        ]
      },
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 0, moduleNumber: "0.11", title: "Crypto Is a 24/7 Fragmented Market",
      objective: "Understanding the unique structure of digital asset markets.",
      content: `# Crypto Is a 24/7 Fragmented Market

The Crypto roadway (Bitcoin, Ethereum, etc.) is the youngest and most "wild" market. Unlike Forex and Gold, which have established banking hours and central hubs, Crypto never sleeps and lives everywhere at once.

### 1. The 24/7/365 Reality
Crypto markets are open every second of every day. There is no "weekend close."
- **What this means:** Moves can happen at 2 AM on a Sunday when most traditional participants are asleep. This can lead to "Low Liquidity" periods where the price moves erratically because there aren't enough orders to keep it stable.

### 2. Market Fragmentation
If you buy a share of Apple, it is the same share everywhere. But if you trade Bitcoin, you are trading on a specific **Exchange** (like Binance, Coinbase, or Bybit). Each exchange has its own **Order Book**.

**Technical Terms: Exchange and Order Book**
1. **Exchange**: A digital platform or marketplace where people buy and sell crypto.
   *Simple Scenario:* Imagine three different farmers' markets in three different towns. They all sell the same type of apples, but the price might be $1.00 in one town and $1.05 in another. In crypto, these "towns" are the exchanges.
2. **Order Book**: The live list of buy and sell orders on a specific exchange.
   *Beginner Example:* It's like a transparent waitlist. You can see exactly how many people want to buy Bitcoin at $40,000 and how many want to sell at $40,100.

:::visual
title: Crypto 24/7 Environment
lookFor: ["Weekday Volume - Often aligned with Forex session times", "Weekend Noise - Lower volume, prone to sudden spikes", "Exchange Price Gaps - Tiny differences between Binance/Coinbase/etc", "Aggregated Feed - A chart that combines data from many exchanges"]
:::

### Why This Roadway Is Different
Because there is no central authority, Crypto is driven purely by **public reaction** and **large participant activity**. This creates a market that is highly sensitive to social media, news, and "hype cycles."

### Common Beginner Mistake: Weekend Chasing
Many beginners start practicing on Saturdays because they have free time. They see a big move on Bitcoin and think a new trend has started.
*Reality Check:* Weekend moves are often "Fake-outs." Because the major banks and institutions are closed, a single large participant can move the price easily. When Monday morning comes and the big money returns, the price often snaps back to where it was on Friday.

### Wrong Approach vs Better Approach
- **Wrong**: "Bitcoin is up 5% on a Sunday afternoon! The bull market is back!"
- **Better**: "I observe an upward move during a low-liquidity weekend window. I will wait for Monday's London open to see if this move is supported by high-volume participants."

:::summary
Crypto is a 24/7, fragmented marketplace. It requires you to be aware of the 'time of week' and to understand that the price on your screen is just one version of the truth from a specific exchange.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "What is a major risk of forming a structural reading during the weekend in the crypto market?",
        options: [
          "The market is closed, so you cannot see any price data.",
          "Low liquidity means a single large participant can move the price easily, creating 'fake' moves.",
          "The exchanges charge higher fees on Saturdays.",
          "Bitcoin only moves on weekdays."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 0, moduleNumber: "0.12", title: "Spot, Perpetuals, Funding, and Liquidation Pressure",
      objective: "Learning the mechanics of crypto-native market data.",
      content: `# Spot, Perpetuals, Funding, and Liquidation Pressure

To truly read a crypto chart, you need to understand that there are two different "versions" of the market running at the same time: the **Spot** market and the **Perpetuals** (Derivatives) market.

### 1. Spot vs. Perpetuals
- **Spot Market**: You buy the actual coin and own it.
  *Beginner Example*: Buying a physical gold bar and putting it in a safe.
- **Perpetuals (Perps)**: You are trading a contract that tracks the price of the coin. You don't own the coin; you are just "betting" on the price movement.
  *Simple Scenario*: A perpetual is like a bet that never expires. As long as you have enough money to cover your losses, you can keep the bet open forever.

### 2. Funding and Liquidation
Because "Perps" allow people to use high leverage (borrowed money), they introduce two unique forces:

**Technical Terms: Funding and Liquidation**
1. **Funding Rate**: A periodic payment between traders. If too many people are "Long" (betting price goes up), they have to pay the "Shorts" (betting price goes down) to keep the contract price aligned with the spot price.
   *What this means:* If funding is very high, it's a sign the market is "overheated" with too many people guessing the same thing.
2. **Liquidation**: When a trader's loss exceeds their available money, the exchange **forcibly closes** their position.
   *Simple Scenario:* If you bet $100 that Bitcoin will go up, but you use 10x leverage (acting as if you have $1,000), if the price drops just 10%, you lose your $100. The exchange "liquidates" you to prevent them from losing money.

:::visual
title: Crypto Market Mechanics
lookFor: ["Spot Volume - Actual buying/selling for ownership", "Open Interest - Total number of active perp contracts", "Funding Rate - Shows if the market is leaning too hard in one direction", "Liquidation Map - Areas where many traders will be forced to close"]
:::

### What to Observe: Liquidation Pressure (Supporting Context)
In crypto, price often moves toward areas where many people are about to be liquidated. This creates a "Liquidation Cascade."
*Think of it this way:* If 1,000 people are forced to sell at the same price, that massive wave of selling will push the price even lower, forcing even more people to sell.

### Wrong Approach vs Better Approach
- **Wrong**: "I'm buying Bitcoin because the chart looks green." (Ignoring market mechanics).
- **Better**: "I observe that the Funding Rate is extremely high and price is approaching a major structural low. This provides supporting context for a high risk of a 'Long Liquidation' event. I will wait for the potential cascade to finish before looking for a structural shift."

:::summary
Crypto is driven by the interaction between spot owners and perpetual speculators. Funding rates and liquidations are 'Supporting Context' that tell you when the market is emotionally over-extended.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Funding Rate for Ethereum is highly positive (meaning 'Longs' are paying 'Shorts'). Price is slowly drifting down toward a cluster of support levels. How should you read this?",
        options: [
          { id: "opt1", text: "Since everyone is 'Long' and paying funding, I should also buy to join the crowd.", grade: "poor", feedback: "Joining an 'overheated' crowd is a recipe for being liquidated.", rationale: "High positive funding often precedes a move in the opposite direction." },
          { id: "opt2", text: "The high funding suggests the market is over-leveraged to the upside. I will watch for a sudden drop that might trigger a liquidation cascade.", grade: "best", feedback: "Correct. You are reading the 'Liquidation Pressure'.", rationale: "Professional crypto reading requires monitoring how leveraged participants are positioned." }
        ]
      },
      skillLevel: "beginner", orderIndex: 12
    },

    {
      level: 0, moduleNumber: "0.13", title: "How to Practice Without Guessing",
      objective: "Establishing the mindset and process for professional simulation.",
      content: `# How to Practice Without Guessing

Most beginners enter a "trading simulator" or "the Lab" with the goal of making a virtual profit. They want to see their account balance go up. This is a fundamental mistake. At Lurnava, simulation is not for proving you can make money; it is for **Practicing your Reasoning**.

### The Purpose of Simulation
In the real world, a pilot uses a flight simulator to practice what to do when an engine fails. They don't do it to "win" a game; they do it so that when the real event happens, their response is automatic and based on logic, not panic.

**What this means:**
Your goal in the Lab is to find a high-quality "Evidence Stack." If you make a decision and the market goes against you, but your reasoning was sound and based on objective facts, that is a **Successful Practice Session**. If you guess the direction and "win," but you had no logical reason, that is a **Failed Practice Session**.

### Technical Terms: Practice Action and Simulation
1. **Practice Action**: Any decision you make in the Lab (like marking a structural shift or simulating an entry).
   *Simple Scenario:* Before you click a button, you must be able to say: "I am taking this action because I observe evidence A, B, and C." If you can't say that, you are guessing.
2. **Simulation**: A controlled environment (The Lab) using historical data where you can practice without financial risk.

:::visual
title: The Professional Practice Checklist
lookFor: ["1. Observation - What is the current roadway and structure?", "2. Reason - What specific evidence supports a move?", "3. Review Condition - At what point is my logic proven wrong?", "4. Note - Have I documented this thinking in the Journal?"]
:::

### What to Observe: The "Unclear" State
The hardest thing to practice is **Doing Nothing**. If the chart looks like a mess of random wiggles and you can't find a clear range or structure, your "Practice Action" should be to mark it as **Unclear** and move to the next period.

**What this does not mean:**
"Practicing" does not mean clicking buttons as fast as possible. It means waiting for the market to provide a clear story.

### Common Beginner Mistake: Outcome Bias
Beginners judge themselves by the result of the trade. If they "win," they think they are geniuses. If they "lose," they think the market is rigged.
*Better Approach:* Judge yourself by the **Quality of your Logic**. Did you follow your structural rules? Did you ignore the "noise"?

### Wrong Approach vs Better Approach
- **Wrong**: "I think it's going up, so I'll click buy and hope for the best." (Gambling).
- **Better**: "I observe that price has broken a major swing high on the 1-hour chart and is now returning to a discount area. I will simulate an entry here with a review condition below the recent swing low." (Professional reasoning).

:::summary
Simulation is a tool for building cognitive discipline. Every action must have a reason, and every reason must be based on observable evidence. Success is measured by the consistency of your process, not the outcome of a single move.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are practicing in the Lab. The market is moving sideways in a very choppy way. You haven't made a decision in 10 minutes and you are starting to feel bored. What is the most disciplined action?",
        options: [
          { id: "opt1", text: "Pick a direction and enter a small practice trade just to see what happens.", grade: "poor", feedback: "Boredom is not a reason to act. This is how 'noise' creates losses.", rationale: "Acting out of boredom is the opposite of objective market reading." },
          { id: "opt2", text: "Identify the market as 'Unclear,' document why it is messy in your journal, and wait for a clear structural breakout.", grade: "best", feedback: "Correct. Recognizing 'Unclear' is a high-level skill.", rationale: "Professional practice requires the discipline to stay inactive when evidence is missing." }
        ]
      },
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 0, moduleNumber: "0.14", title: "How to Write a Useful Practice Note",
      objective: "Learning to document the learning process for maximum improvement.",
      content: `# How to Write a Useful Practice Note

In the Lurnava system, the **Journal** is your most powerful tool. However, a journal is only as good as the notes you put into it. Most beginners write notes that are useless for learning. They write things like "I bought here and I was right" or "I lost money on this one."

### The Note as a Mirror
A useful practice note is a record of your **Thinking Process** at the time you made the decision. It allows you to look back a week later and see exactly where your logic was strong and where it was weak.

**What this means:**
You are documenting the **Evidence Stack** you saw before the result happened. This prevents you from "rewriting history" in your mind after you see what the market did.

### Technical Terms: Journal Review and Review Condition
1. **Journal Review**: The act of looking back at your past notes to find patterns in your thinking.
   *Simple Example:* You might notice that every time you buy during a "noisy" Gold spike, you end up with a poor result. Without a note, you would forget this. With a note, you have a lesson.
2. **Review Condition**: A specific price level or event that tells you your original idea is no longer valid.
   *Simple Scenario:* "I am bullish as long as price stays above $1.1000. If it closes below that, I must re-audit the chart."

:::note-comparison
:::

### What Does Not Count
A "Diary" entry about how you feel ("I feel nervous about this trade") is not a structural practice note. While feelings are important, your primary focus must be on **Objective Facts**.

### Common Beginner Mistake: Vague Descriptions
Using words like "seems," "looks like," or "maybe" in your notes.
*Better Approach:* Use definitive structural terms. "Price **broke** the high," "Price **rejected** the level," "The range is **defined** by X and Y."

### Wrong Approach vs Better Approach
- **Wrong**: "Bought Bitcoin because it's cheap. Hope it goes to 100k." (Weak note).
- **Better**: "Roadway: Crypto. Context: Bullish HTF. Action: Simulated buy at 65k following a 15m structural shift. Evidence: High spot volume. Review Condition: Break of 64.2k swing low." (Strong note).

:::summary
Your journal is your personal data set. By writing detailed, structural notes, you turn every practice session into a repeatable lesson. Strong notes lead to strong skills.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Which of the following is the strongest example of a professional practice note?",
        options: [
          "I have a feeling this is a good buy, so I'm going in with a big position.",
          "Bought EUR/USD. The chart looks like a head and shoulders pattern from the book.",
          "Roadway: FX. Context: H4 Bullish. Evidence: 15m structural break + London Open volume. Review Condition: Close below 1.0850.",
          "I lost this trade but I'm sure it will work next time if I just wait longer."
        ],
        correctIndex: 2
      },
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 0, moduleNumber: "0.15", title: "Level 0 Foundation Mission",
      objective: "Synthesizing all Level 0 concepts into a single workflow.",
      content: `# Level 0 Foundation Mission

You have reached the end of the **Market Reading Foundations**. You have learned that the market is a matching engine, that candles are records, and that structure is the skeleton of everything we do. You have also seen how different roadways (Forex, Gold, Crypto) have their own unique "personalities."

### The Lurnava Synthesis
Before you move on to Level 1, you must be able to combine these ideas into a single, disciplined process. This is the **Lurnava Workflow**:

1. **Identify the Roadway Context**: Are you in the 24/5 FX market (Relative Strength), the high-speed Gold market (Macro/Volatility), or the 24/7 Crypto market (Fragmentation/Perps)? Each requires a different level of patience.
2. **Map the Basic Structure**: Identify the most recent Swing High and Swing Low. Define the "Box" (Range) that price is currently playing in.
3. **Separate Evidence from Assumption**: List the objective facts. "Price is in a discount area" is Evidence. "Price will go up from here" is an Assumption.
4. **Choose the Review Area**: Identify the structural zone where the next meaningful interaction will happen. This is your observation point.
5. **Define the Review Condition**: At what point does your current reading become "Unclear"?

:::visual
title: Level 0 Foundation Map
lookFor: ["Market Reality - Orders and Liquidity", "Observation Tools - Candles, Timeframes, Structure", "Roadway Context - FX Sessions, Gold Volatility, Crypto Perps", "The Discipline Loop - Read, Practice, Review"]
:::

### Technical Term: Platform Controls
As you move into the next levels, you will start using the **Platform Controls** in the Lab more frequently. These include:
- **Period Forward**: Moving the chart one candle at a time to test your reading.
- **Structural Markups**: Tools to draw ranges and swings directly on the chart.
- **Journal Sync**: Automatically saving your chart markups into your practice notes.

### What Does Not Count
Passing Level 0 does not mean you are a "pro trader." It means you have built the **Foundations** to start learning the actual mechanics of Level 1. Do not rush to Level 2 or 3 until you feel 100% comfortable identifying a Range and a Swing.

### The Foundation Mission
In the upcoming mission, you will be given a series of static charts. Your job is not to "trade" them, but to **Classify** them using the workflow. You will be asked to identify the Roadway, the Current Range, and the strongest piece of Evidence.

### After the Mission: Your First Review Note
Once you complete the mission, your final task is to write a **Synthesis Note** in your Journal. Document:
- Which roadway felt most intuitive to you.
- One structural fact you identified correctly.
- One "Assumption" you caught yourself making during the process.

:::summary
Level 0 is about learning to see the market as it truly is: a structured environment driven by data and human interaction. You now have the language and the mindset to begin your professional journey.
:::`,
      interactiveTaskType: "scenario_link",
      interactiveTaskData: {
        scenarioSlug: "level-0-foundation-review-mission",
        missionTitle: "Level 0 Foundation Mission",
        passThreshold: 80
      },
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 1: MARKET BASICS (15 MODULES)
    // ============================================
    {
      level: 1, moduleNumber: "1.1", title: "Purpose of Financial Markets",
      objective: "Understand the historical role of value exchange.",
      content: "# The Purpose of Markets\n\nFinancial markets exist to facilitate the exchange of capital and value. Understanding this is the first step to thinking like a professional participant.",
      forexAdaptation: "## Fiat Reserve System\nCentral Banks manage currency valuation to maintain exchange balance. We observe the 'Yield Differential'.",
      cryptoAdaptation: "## Web3 Economy\nCrypto exists to remove the middleman. We observe the 'On-Chain Inflow' metrics.",
      goldAdaptation: "## Hard Money Heritage\nGold is the only asset with zero counterparty exposure. We observe it as the 'Inflation Compass'.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "A Central Bank announces an unexpected 50bps rate hike. The currency pair immediately rallies 100 pips. Why did this happen in the context of global capital?",
        options: [
          { id: "opt1", text: "Global capital is seeking the higher yield available in this currency.", grade: "best", feedback: "Correct. Capital flows toward yield.", rationale: "The Yield Differential is a powerful macro driver." },
          { id: "opt2", text: "Participants are excited and buying the news.", grade: "poor", feedback: "Emotional excitement doesn't move trillions. Yield differentials do.", rationale: "Retail sentiment is a symptom, not the cause." }
        ]
      },
      logicIds: ["MAC_001"],
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 1, moduleNumber: "1.2", title: "The Zero-Sum Fallacy",
      objective: "Deconstruct the myth of retail vs. primary participant 'performance'.",
      content: "# Zero-Sum vs Value Transfer\n\nYou are not playing against a chart; you are playing against matching algorithms.",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 1, moduleNumber: "1.3", title: "The Probability Matrix",
      objective: "Thinking in probabilities. The Casino Analogy.",
      content: "# The Probability Matrix\n\nLike a casino, we have a small edge. We don't care about a single unfavorable outcome; we care about the result over a large sample.",
      interactiveTaskType: "coin_flip_simulator",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 1, moduleNumber: "1.4", title: "Supply & Demand Fundamentals",
      objective: "Basic economics of value and scarcity.",
      content: "# Supply & Demand\n\nThe fundamental truth of value. If something is rare and desired, price rises.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 1, moduleNumber: "1.5", title: "Inflation Mechanics",
      objective: "How fiat debasement drives asset pricing.",
      content: "# Inflation\n\nWhen the supply of currency expands, the purchasing power of each unit declines.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 1, moduleNumber: "1.6", title: "Central Banking Basics",
      objective: "The role of the Fed, ECB, and BOJ.",
      content: "# Central Banking\n\nThe ultimate controllers of capital supply.",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 1, moduleNumber: "1.7", title: "Macro Interconnectivity",
      objective: "How Bonds, Stocks, and Currencies correlate.",
      content: "# Macro Interconnectivity\n\nEverything is connected. When bond yields rise, it impacts currency valuation.",
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 1, moduleNumber: "1.8", title: "Economic Indicators",
      objective: "Interest rates, CPI, and employment data.",
      content: "# Economic Indicators\n\nData points that participants use to gauge the health of an economy.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 1, moduleNumber: "1.9", title: "The History of Currency",
      objective: "From Gold Standard to Fiat.",
      content: "# History of Money\n\nUnderstanding the transition to digital, borderless capital.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 1, moduleNumber: "1.10", title: "The Auction Process",
      objective: "How orders are matched in real-time.",
      content: "# The Auction\n\nMarkets are continuous auctions matching buyers and sellers.",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 1, moduleNumber: "1.11", title: "Exposure Management: Part 1",
      objective: "The R-Multiple and Asymmetry.",
      content: "# Exposure Management\n\nProtecting capital is the first priority.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "If you have a 1:3 planned exposure / possible outcome ratio, how many unfavorable outcomes can one favorable outcome cover?",
        options: ["One", "Two", "Three", "Zero"],
        correctIndex: 2
      },
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 1, moduleNumber: "1.12", title: "Psychology of Uncertainty",
      objective: "Unfavorable outcome aversion and the gambler's fallacy.",
      content: "# Psychology\n\nThe human brain is not wired for probabilistic thinking.",
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 1, moduleNumber: "1.13", title: "Result Expectations",
      objective: "The mathematical matrix of outcomes.",
      content: "# Outcome Mapping\n\nA participant with a 35% favorable rate can be highly successful.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 1, moduleNumber: "1.14", title: "Asset Classes",
      objective: "Forex vs. Crypto vs. Commodities.",
      content: "# Asset Classes\n\nChoosing the right environment for your skills.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are reviewing a high-volatility environment in BTC/USD. Why is the structural reading different from EUR/USD?",
        options: [
          { id: "opt1", text: "Crypto markets are thinner and more prone to rapid delivery gaps.", grade: "best", feedback: "Correct.", rationale: "Capital profiles vary by asset class." },
          { id: "opt2", text: "Charts work differently in Crypto.", grade: "poor", feedback: "Charts are just a reflection of participation.", rationale: "Logic is consistent, but delivery speed varies." }
        ]
      },
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 1, moduleNumber: "1.15", title: "Final Level Review",
      objective: "Consolidating foundations.",
      content: "# Review\n\nYou are ready for the Level 1 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 2: MARKET MECHANICS (15 MODULES)
    // ============================================
    {
      level: 2, moduleNumber: "2.1", title: "Chart Basics",
      objective: "Candlestick anatomy and timeframes.",
      content: "# The Chart\n\nA visual record of price and time.",
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 2, moduleNumber: "2.2", title: "Fractal Nature of Price",
      objective: "Structure within structure.",
      content: "# Fractals\n\nPrice action mirrors itself across scales.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 2, moduleNumber: "2.3", title: "Primary Price Feeds",
      objective: "Difference between B-Book and Direct feeds.",
      content: "# Primary vs Retail feeds.",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 2, moduleNumber: "2.4", title: "The Range Model",
      objective: "Equilibrium, Premium, and Discount.",
      content: "# Range Modeling\n\nIdentifying the midpoint of price delivery.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 2, moduleNumber: "2.5", title: "Market Structure: Part 1",
      objective: "Identifying Primary Swings.",
      content: "# Market Structure\n\nDefining the major anchors of a directional move.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 2, moduleNumber: "2.6", title: "Market Structure Shift (MSS)",
      objective: "Identifying the structural reading change.",
      content: "# Market Structure Shift (MSS)\n\nThe moment price displacement violates a major anchor.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 2, moduleNumber: "2.7", title: "The Trend Fallacy",
      objective: "Why 'trend' is an unhelpful expectation.",
      content: "# The 'Trend' Fallacy\n\nLarge participants move between boundary areas.",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 2, moduleNumber: "2.8", title: "Internal vs External Structure",
      objective: "Noise vs. Major anchors.",
      content: "# Structural Layers\n\nFiltering lower-timeframe noise from higher-timeframe context.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 2, moduleNumber: "2.9", title: "Displacement",
      objective: "Aggressive price movement.",
      content: "# Displacement\n\nClear, violent moves that indicate commitment.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 2, moduleNumber: "2.10", title: "Breakouts vs Failed Breaks",
      objective: "Validation of boundaries.",
      content: "# Breakouts\n\nWhen price holds beyond a previous boundary.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 2, moduleNumber: "2.11", title: "Boundary Areas (BSL/SSL)",
      objective: "Identifying resting orders.",
      content: "# Boundaries\n\nAreas where orders cluster beyond old highs and lows.",
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 2, moduleNumber: "2.12", title: "External Range Boundary",
      objective: "Practice identifying range extremes.",
      content: "# External Boundaries\n\nLaunching the Chart Map Mission.",
      interactiveTaskType: "scenario_link",
      interactiveTaskData: { scenarioSlug: "m2-level-2-map-review-v1" },
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 2, moduleNumber: "2.13", title: "HTF Anchors",
      objective: "Daily and Weekly levels.",
      content: "# HTF Anchors\n\nThe maps used by larger participants.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 2, moduleNumber: "2.14", title: "Session Windows",
      objective: "London and NY participation windows.",
      content: "# Session Windows\n\nWhen the auction is most active.",
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 2, moduleNumber: "2.15", title: "Level 2 Review",
      objective: "Consolidating mechanics.",
      content: "# Review\n\nYou are ready for the Level 2 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 3: STRUCTURE & IMBALANCE (15 MODULES)
    // ============================================
    {
      level: 3, moduleNumber: "3.1", title: "Order Blocks",
      objective: "Identify where strong moves are initiated.",
      content: "# Order Blocks\n\nThe last candle before a structural shift.",
      skillLevel: "intermediate", orderIndex: 1
    },
    {
      level: 3, moduleNumber: "3.2", title: "Fair Value Gaps (FVG)",
      objective: "Price delivery imbalances.",
      content: "# Fair Value Gaps\n\nRapid delivery that leaves gaps in matching.",
      skillLevel: "intermediate", orderIndex: 2
    },
    {
      level: 3, moduleNumber: "3.3", title: "Breaker Blocks",
      objective: "Failed order blocks flipping polarity.",
      content: "# Breakers\n\nViolation of an OB that subsequently acts as an anchor.",
      skillLevel: "intermediate", orderIndex: 3
    },
    {
      level: 3, moduleNumber: "3.4", title: "Mitigation Blocks",
      objective: "Hedge clearing without boundary sweeps.",
      content: "# Mitigation\n\nNeutralizing previous exposure.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 4
    },
    {
      level: 3, moduleNumber: "3.5", title: "Inversion FVG",
      objective: "Inefficiency flipping polarity.",
      content: "# Inversion\n\nA shift in Primary structural reading.",
      skillLevel: "intermediate", orderIndex: 5
    },
    {
      level: 3, moduleNumber: "3.6", title: "Exchange Voids",
      objective: "Explosive moves and the vacuum effect.",
      content: "# Voids\n\nGaps in price where exchange did not occur.",
      skillLevel: "intermediate", orderIndex: 6
    },
    {
      level: 3, moduleNumber: "3.7", title: "Volume Imbalances",
      objective: "Identifying commitment via volume.",
      content: "# Volume Imbalances\n\nWhen candle bodies do not overlap.",
      skillLevel: "intermediate", orderIndex: 7
    },
    {
      level: 3, moduleNumber: "3.8", title: "Propulsion Blocks",
      objective: "Retest of an order block.",
      content: "# Propulsion\n\nAcceleration of price from a validated OB.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 8
    },
    {
      level: 3, moduleNumber: "3.9", title: "Footprint Basics",
      objective: "Order flow and Tape Reading.",
      content: "# Footprints\n\nObserving real-time exchange data.",
      interactiveTaskType: "tape_reading_basics",
      skillLevel: "intermediate", orderIndex: 9
    },
    {
      level: 3, moduleNumber: "3.10", title: "Level 3 Final Gate",
      objective: "Final structural assessment.",
      content: "# Final Gate\n\nComplete the mission to unlock Level 4.",
      interactiveTaskType: "scenario_link",
      skillLevel: "intermediate", orderIndex: 10
    },

    // ============================================
    // LEVEL 4: STRUCTURE MAPPING (REDACTED FOR MVP)
    // ============================================
    {
      level: 4, moduleNumber: "4.1", title: "Advanced Structure",
      objective: "Higher timeframe context.",
      content: "# HTF Structure\n\nMapping the primary map.",
      skillLevel: "advanced", orderIndex: 1
    },

    // ============================================
    // LEVEL 5: EVIDENCE-BASED SCENARIO PLANNING (10 MODULES)
    // ============================================
    {
      level: 5, moduleNumber: "5.1", title: "Evidence Stack Framework",
      objective: "Transition from identifying isolated components to building a unified, weighted reading of the market environment.",
      content: `# 5.1 — Evidence Stack Framework

:::skill-target
Master the ability to unify isolated structural clues into a single, weighted Evidence Stack.
:::

### The Shift to Professional Synthesis
In previous levels, you learned how to find individual tools: a Market Structure Shift, a Fair Value Gap, or an Order Block. However, in simulation, these tools often provide conflicting signals. A professional participant does not react to a single clue; they build an **Evidence Stack**.

:::visual
title: The Evidence Ladder
image: /images/academy/level5/5.1_stack.png
caption: Layering high-probability clues to find the path of highest structural alignment.
lookFor: ["HTF Directional Narrative", "Intermediate MSS Quality", "Price Delivery (FVG/OB)", "Session Liquidity Context"]
:::

### What Counts as Evidence?
Not all clues are weighted equally. The "Stack" follows a hierarchy of significance:
1. **The Anchor**: High-Timeframe structure (Daily/4H).
2. **The Catalyst**: A clear Market Structure Shift with displacement.
3. **The Vehicle**: The specific entry array (FVG, Order Block) being respected.
4. **The Timing**: Interaction occurring during a high-volume session window.

:::decision-rule
If your stack contains less than three layers of alignment, the environment is considered "Low Certainty." The professional decision is to observe, not participate.
:::

### The "Conflict" Filter
When you find a Bullish FVG but the Daily structure is Bearish, you have **Structural Conflict**. In Level 5, we do not "guess" which will win. We identify the conflict, document it in the journal, and wait for one side to be invalidated.

:::trap
**The Single-Clue Fallacy**: Assuming a "Perfect FVG" will hold even when the HTF Evidence Stack is pointing in the opposite direction.
:::

### Journal Review Prompt
After your simulation session, review your evidence stack and ask: 'Did I record conflicting evidence, or did I only collect clues that supported my initial impression?' If you only recorded supporting evidence, flag this session for bias review.`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner identifies a bearish MSS on the Daily chart and a bullish Order Block on the 4-hour chart. How should these be handled in the Evidence Stack?",
        options: [
          { id: "A", text: "Ignore the Order Block because the Daily MSS is more important.", isCorrect: false, feedback: "Incorrect. The stack must account for all relevant structural clues, even conflicting ones." },
          { id: "B", text: "Record both observations in the stack — the MSS as a supporting clue and the OB as a conflicting clue.", isCorrect: true, feedback: "Correct. A complete evidence stack includes both supporting and conflicting structural observations across timeframes." },
          { id: "C", text: "Wait until one of them disappears before building the stack.", isCorrect: false, feedback: "Waiting removes the ability to plan for alternative outcomes during the session." },
          { id: "D", text: "Choose whichever clue appeared most recently.", isCorrect: false, feedback: "Recency is not a weighting factor in a disciplined evidence stack." }
        ]
      },
      skillLevel: "advanced", orderIndex: 1
    },
    {
      level: 5, moduleNumber: "5.2", title: "Primary vs Alternative Scenario",
      objective: "Build two-way branching logic to maintain objectivity and prevent narrative lock.",
      content: `# 5.2 — Primary vs Alternative Scenario

:::skill-target
Develop the discipline to 'branch' your thinking by preparing for both your expected outcome and its logical invalidation.
:::

### Thinking in Branches
A "Scenario" is not a prediction. It is a logical "If/Then" statement. If you only have one plan, you are emotionally committed to a single outcome. A professional participant always carries two: the **Primary Scenario** and the **Alternative Scenario**.

:::visual
title: Branching Logic Map
image: /images/academy/level5/5.2_branching.png
caption: Preparing for market delivery in both directions to remain objective during the session.
lookFor: ["Primary Execution Logic", "Invalidation Trigger Point", "Alternative Narrative Pivot", "Neutral Observation Criteria"]
:::

### The Primary Scenario (The 'A' Plan)
This is the path with the most Evidence Stack alignment.
*   **Trigger**: Price interacts with a specific array (e.g., 1H FVG).
*   **Behavior**: Price shows immediate displacement in the narrative direction.
*   **Objective**: Price reaches the identified liquidity pool.

:::decision-rule
Before every session, you must be able to state: "If price closes below [Level X], my Primary Bullish Scenario is dead, and I will pivot to Neutral or Bearish."
:::

### The Alternative Scenario (The 'B' Plan)
This is what happens if your Primary Scenario is **invalidated**.
*   **Trigger**: Price closes through your invalidation anchor.
*   **New Logic**: The rejection of your plan confirms a move in the opposite direction or a transition to a "Sideways/Unclear" state.

:::visual-compare
title: Scenario Bias Check
caption: Compare how you feel when price reaches your area vs. how you should react.
leftImage: /images/academy/level5/5.2_branching.png
leftLabel: OBJECTIVE BRANCHING
rightImage: /images/academy/level5/5.2_lock.png
rightLabel: NARRATIVE LOCK (TRAP)
:::

:::trap
**Narrative Lock**: Entering a session so convinced that price 'must' go up that you ignore the structural clues telling you the Alternative Scenario is currently active.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have built an evidence stack supporting a bearish scenario from a 1H FVG at 1.0965. The Daily MSS is bearish. You need to define your Alternative Scenario. Which of the following is the strongest alternative?",
        options: [
          { id: "opt1", text: "If price closes above the FVG at 1.0975 with a displacement candle creating a new bullish delivery gap, the bearish reading is no longer valid and the 1H structure may be shifting.", grade: "best", feedback: "Correct. This alternative is specific, structurally anchored, and defines the exact condition that invalidates the primary.", rationale: "Alternatives must be concrete — tied to a level, a candle behavior, and a structural consequence." },
          { id: "opt2", text: "If price goes up instead of down, I will reconsider my reading.", grade: "poor", feedback: "This is too vague to be an alternative scenario. It has no structural anchor or specific condition.", rationale: "Vague alternatives provide no decision framework and are functionally useless." },
          { id: "opt3", text: "I do not need an alternative because the Daily MSS is very clear.", grade: "poor", feedback: "Even the strongest readings require an alternative. No structural event is certain.", rationale: "Refusing to define an alternative is the definition of narrative lock." }
        ]
      },
      skillLevel: "advanced", orderIndex: 2
    },
    {
      level: 5, moduleNumber: "5.3", title: "Invalidation and Review Conditions",
      objective: "Define the exact structural conditions under which a scenario is no longer valid.",
      content: `# 5.3 — Invalidation and Review Conditions

:::skill-target
Learn to identify the exact structural point where a scenario 'dies' and requires an immediate audit.
:::

### The 'Kill-Switch' for Logic
Every Evidence Stack has a foundation. If that foundation is broken, the entire stack collapses. We call this the **Invalidation Anchor**. Without an invalidation point, you are not planning; you are guessing.

:::visual
title: Invalidation Anchor Visual
image: /images/academy/level5/5.3_invalidation.png
caption: Identifying the specific swing level that protects your structural narrative.
lookFor: ["Protected Swing High/Low", "Price Displacement Point", "Validation of MSS", "Point of No Return"]
:::

### Two Types of Invalidation
1.  **Structure-Based Invalidation**: A specific structural anchor is violated with displacement. For example, if your bullish scenario is built on the premise that a certain swing low holds, then a candle body closing below that swing low with a delivery gap is a structure-based invalidation.
2.  **Time-Based Invalidation**: The scenario has a time window. If the expected structural interaction does not occur within the defined session window, the scenario is marked 'Expired'.

:::decision-rule
If price reaches your Invalidation Anchor, the session logic is VOID. Do not re-enter based on the old plan. You must perform a full Review Audit before forming a new scenario.
:::

:::trap
**Anchor-Dragging**: Moving your invalidation point further away because you 'feel' price is just doing a deeper retracement. This is the fastest way to lose discipline.
:::`,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the structural anchor that would serve as the logical invalidation point for a bullish scenario built from the recent Fair Value Gap. Look for the swing low that anchored the expansion.",
        chartData: [
          { time: '2024-01-10', open: 1.0810, high: 1.0840, low: 1.0805, close: 1.0835 },
          { time: '2024-01-11', open: 1.0835, high: 1.0860, low: 1.0830, close: 1.0855 },
          { time: '2024-01-12', open: 1.0855, high: 1.0880, low: 1.0850, close: 1.0870 },
          { time: '2024-01-15', open: 1.0870, high: 1.0875, low: 1.0825, close: 1.0830 },
          { time: '2024-01-16', open: 1.0830, high: 1.0850, low: 1.0815, close: 1.0840 },
          { time: '2024-01-17', open: 1.0840, high: 1.0890, low: 1.0835, close: 1.0885 }
        ],
        validationZones: {
          primary: [{ time: "2024-01-15", priceMin: 1.0820, priceMax: 1.0840 }]
        },
        hints: {
          light: "Look for the lowest point of the retracement before the final upward move.",
          guided: "Identify the candle on 2024-01-15 near the 1.0830 level."
        },
        rationale: "The swing low that anchored the bullish expansion is the structural foundation of the scenario. If this level is violated with displacement, the bullish reading is no longer valid."
      },
      skillLevel: "advanced", orderIndex: 3
    },
    {
      level: 5, moduleNumber: "5.4", title: "Context Alignment Across Timeframes",
      objective: "Synthesize HTF narrative with LTF structural evidence to build aligned scenario plans.",
      content: `# 5.4 — Context Alignment Across Timeframes

:::skill-target
Standardize how you 'zoom out' to find the Anchor and 'zoom in' to find the Catalyst.
:::

### The Multi-Timeframe Filter
In Level 5, we stop looking at charts as isolated patterns. Every 15-minute candle is a tiny fragment of a 4-hour story. **Context Alignment** is the process of ensuring your small-scale plan is supported by the large-scale environment.

:::visual
title: Timeframe Alignment Flow
image: /images/academy/level5/5.4_alignment.png
caption: How directional narrative flows from higher timeframes into execution timeframes.
lookFor: ["Weekly/Daily Narrative Anchor", "4H/1H Structural Phase", "15m/5m Execution Catalyst", "Alignment vs Divergence"]
:::

### The Roles
*   **High Timeframe (HTF - Daily/Weekly)**: Defines the **Narrative**. Are we in a retracement or an expansion?
*   **Medium Timeframe (MTF - 4H/1H)**: Defines the **Scenario Area**. Where should we look for a reaction?
*   **Low Timeframe (LTF - 15m/5m/1m)**: Defines the **Catalyst**. Is the reaction actually happening?

:::decision-rule
Never take an LTF Catalyst that is trading directly *into* an HTF Invalidation zone. The HTF always has more weight in the Evidence Stack.
:::

:::trap
**The Zoom-In Bias**: Spending 90% of your time on the 1-minute chart and losing track of the 4-hour supply zone you are currently trapped inside.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Daily chart has completed a bearish MSS. On the 1-hour chart, price is retracing upward but has not created a bullish MSS — the retracement is a slow grind with no displacement. What is the most aligned reading?",
        options: [
          { id: "opt1", text: "The 1H retracement has no structural shift (no MSS, no displacement). The Daily bearish narrative remains the primary context. I will observe the retracement for signs of failure at a bearish anchor.", grade: "best", feedback: "Correct. The absence of an LTF structural shift means the HTF narrative is still dominant.", rationale: "Slow retracements without displacement are internal noise until a structural shift occurs." },
          { id: "opt2", text: "The 1H is moving upward, so the bearish Daily narrative may be changing. I will build a bullish scenario from the 1H move.", grade: "poor", feedback: "This is a counter-narrative reading built on price movement alone, not structural evidence.", rationale: "Directional movement without structural shift (MSS/FVG) is not evidence of narrative change." }
        ]
      },
      skillLevel: "advanced", orderIndex: 4
    },
    {
      level: 5, moduleNumber: "5.5", title: "Structural Conflict and Unclear Areas",
      objective: "Identify when the evidence stack is too conflicted to form a valid scenario plan.",
      content: `# 5.5 — Structural Conflict and Unclear Areas

:::skill-target
Learn to identify the 'No-Scenario Reading' — when the market is too messy to plan a high-probability path.
:::

### The Value of 'I Don't Know'
One of the most expensive habits in trading is the belief that every chart must have a scenario. A professional participant's most powerful tool is the ability to say: **"This structure is conflicted; I will wait."**

:::visual
title: Clear vs Conflicted Structure
image: /images/academy/level5/5.5_conflict.png
caption: Identifying when the Evidence Stack is too fragmented to support a disciplined plan.
lookFor: ["Clean Trending Expansion", "Opposing MSS Shifts", "Overlapping FVG Zones", "Consolidation Range Highs/Lows"]
:::

### Signs of Structural Conflict
- **Opposing MSS on adjacent timeframes**: The Daily has a bullish MSS, but the 4H has just completed a bearish MSS.
- **Consolidation without boundary interaction**: Price is ranging within a narrow zone.
- **Mixed displacement quality**: The most recent move had strong displacement in one direction, but it occurred entirely within a larger opposing structure.

:::decision-rule
If you cannot identify a Primary Scenario with at least 70% confidence based on the Evidence Stack, the chart is **Unclear**. Your scenario for the session is "Observe only."
:::

:::trap
**Over-Searching**: If you have to squint or change timeframes 5 times to 'find' a reason to enter, the setup doesn't exist. High-probability scenarios are usually obvious.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "The Daily chart has a bullish MSS. The 4-hour chart has just completed a bearish MSS. The 1-hour chart is consolidating with no boundary interaction. What is the correct reading?",
        options: [
          { id: "A", text: "Build a bullish scenario because the Daily timeframe has more authority.", isCorrect: false, feedback: "HTF authority does not negate MTF structural shifts. This is conflict, not clarity." },
          { id: "B", text: "Build a bearish scenario because the 4-hour MSS is more recent.", isCorrect: false, feedback: "Recency does not resolve timeframe conflict." },
          { id: "C", text: "Record 'No Scenario — Structural Conflict' and wait for one MSS to be invalidated before building a plan.", isCorrect: true, feedback: "Correct. When adjacent timeframes have opposing MSS events with no resolution, the chart is structurally unclear." },
          { id: "D", text: "Build both a bullish and bearish scenario simultaneously and observe which one plays out.", isCorrect: false, feedback: "Building two opposing plans on the same timeframe in a conflicted environment leads to over-trading." }
        ]
      },
      skillLevel: "advanced", orderIndex: 5
    },
    {
      level: 5, moduleNumber: "5.6", title: "Confirmation vs Assumption",
      objective: "Distinguish between acting on structural evidence and acting before the chart provides observable proof.",
      content: `# 5.6 — Confirmation vs Assumption

:::skill-target
Differentiate between 'Predicting what price will do' and 'Responding to what price has done'.
:::

### The Reactivity Principle
Level 5 teaches you to be a **Reactive Observer**, not a Predictor. An **Assumption** is taking a trade because price reached a level. **Confirmation** is taking a trade because price reached a level AND showed a structural shift.

:::visual-compare
title: Assumption vs Confirmation
caption: The visual difference between 'Hoping' a level holds and 'Verifying' it holds.
leftImage: /images/academy/level5/5.6_confirmation.png
leftLabel: CONFIRMATION (REACTION)
rightImage: /images/academy/level5/5.6_confirmation.png
rightLabel: ASSUMPTION (PREDICTION)
:::

:::decision-rule
Confirmation usually requires a lower-timeframe shift (e.g., 5m or 1m) occurring *inside* a higher-timeframe area (e.g., 1H or 4H).
:::

### The Risk of Assumption
When you assume, you are betting that the "Anchor" will hold before any "Catalyst" appears. If the anchor fails, you take a full loss.
*   **Assumption**: "I'm buying here because it's a 4H FVG."
*   **Confirmation**: "I'm buying here because price hit the 4H FVG and then printed a 5m Bullish MSS."

:::trap
**Bottom Fishing**: Trying to catch the exact low of a retracement before any MSS occurs. This is an assumption that usually leads to being 'run over' by the trend.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have identified a bullish Order Block at 1.0940 from the 4-hour chart. Price is currently at 1.0955, moving downward toward the OB. You want to build a bullish scenario. What is the correct approach?",
        options: [
          { id: "opt1", text: "Wait for price to reach the OB. If a 1-minute MSS occurs with displacement at or near 1.0940, build the scenario from the confirmed reaction.", grade: "best", feedback: "Correct. Confirmation requires waiting for structural evidence at the area.", rationale: "Scenarios built on delivered evidence produce better journal review data and reduce emotional attachment." },
          { id: "opt2", text: "Build the bullish scenario now because the OB is very clear and price is almost there.", grade: "poor", feedback: "This is assumption-based planning. The OB has not yet produced any structural reaction.", rationale: "Identifying a zone is not the same as confirming a reaction." }
        ]
      },
      skillLevel: "advanced", orderIndex: 6
    },
    {
      level: 5, moduleNumber: "5.7", title: "Scenario Review Under Pressure",
      objective: "Adapt scenario plans systematically as new structural evidence arrives during simulation.",
      content: `# 5.7 — Scenario Review Under Pressure

:::skill-target
Maintain objectivity when price action moves faster than your emotional processing.
:::

### The Fog of War
In a live simulation session, price action can be chaotic. Your brain will naturally try to ignore clues that contradict your bias. **Real-Time Review** is the practice of stepping back every 5–15 minutes to re-evaluate your Evidence Stack.

:::visual
title: Scenario Review Timeline
image: /images/academy/level5/5.7_timeline.png
caption: A step-by-step workflow for auditing your plan as new candles print.
lookFor: ["Planned Interaction Area", "Real-Time Structural Reaction", "Validity Check", "Decision Confirmation/Pivot"]
:::

### The 3-Step Mid-Session Audit
1.  **Check the Anchor**: Is the HTF narrative still valid, or did DXY just have a major shift?
2.  **Check the Invalidation**: Is price closer to my profit target or my Invalidation Anchor?
3.  **Check the Quality**: Is the displacement strong, or is this "lazy" price action?

:::decision-rule
If at any point during the session you feel "Confused" or "Anxious," your scenario is officially **Broken**. The only professional move is to exit or go neutral until clarity returns.
:::

:::trap
**Hope-Based Holding**: Staying in a plan because you 'need' the win, even though the structural clues (like a counter-MSS) have already invalidated your logic.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "Your bullish scenario is confirmed from a 1H Order Block. On the 1-minute chart, price made a new high but immediately displaced downward, creating a bearish FVG that violates your confirmation zone. The swing low of your MSS at 1.0938 has NOT been violated yet. What do you do?",
        options: [
          { id: "opt1", text: "The bearish FVG through my confirmation zone is a structural warning. I note the warning in my journal and watch for the swing low violation.", grade: "best", feedback: "Correct. This is a measured response at a structural checkpoint.", rationale: "Adaptation requires distinguishing between warning signs and full invalidation." },
          { id: "opt2", text: "The high was broken so the bullish scenario is working. I ignore the bearish FVG.", grade: "poor", feedback: "A new high followed by immediate bearish displacement is a classic boundary sweep pattern.", rationale: "New highs without sustain, followed by displacement, are structural warnings." }
        ]
      },
      skillLevel: "advanced", orderIndex: 7
    },
    {
      level: 5, moduleNumber: "5.8", title: "Intermarket Context as Supporting Evidence",
      objective: "Use DXY and cross-asset correlation as secondary supporting context in scenario planning.",
      content: `# 5.8 — Intermarket Context as Supporting Evidence

:::skill-target
Use the Dollar Index (DXY) as a 'Truth Filter' for your currency scenarios.
:::

### The Inverse Mirror
For Forex participants, the Dollar Index (DXY) is the "Global Anchor." If you are planning a Bullish Scenario on EUR/USD, you MUST see a Bearish Evidence Stack on DXY. If they are both moving in the same direction, you have **Intermarket Conflict**.

:::visual
title: Intermarket Correlation Visual
image: /images/academy/level5/5.8_intermarket.png
caption: Using DXY as a secondary verification tool for your primary pair.
lookFor: ["DXY Inverse Alignment", "Correlation Strength", "Divergence Warning Signs", "Global Narrative Support"]
:::

:::decision-rule
Intermarket context is **Supporting Evidence**, not a Primary Catalyst. Never take a trade *only* because DXY looks good if the primary pair's structure is conflicted.
:::

### SMT Divergence (Advanced Clue)
Sometimes one pair makes a new high while its correlated pair (e.g., GBP/USD) fails to. This "crack" in correlation is a powerful signal of institutional manipulation.

:::trap
**The DXY-Only Trap**: Entering a trade on EUR/USD because DXY hit a level, even though EUR/USD hasn't printed an MSS yet. This is an assumption.
:::`,
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "advanced", orderIndex: 8
    },
    {
      level: 5, moduleNumber: "5.9", title: "Journal-Based Decision Review",
      objective: "Use structured post-session auditing to identify bias patterns and improve scenario objectivity over time.",
      content: `# 5.9 — Journal-Based Decision Review

:::skill-target
Standardize your post-session audit to identify emotional bias vs. logical errors.
:::

### The 'L5' Audit Template
A professional's growth happens in the journal, not the chart. The goal of a Level 5 Review is to determine if your **Process** was correct, regardless of whether the simulated outcome was a "win" or "loss."

:::visual
title: The Professional Audit Template
image: /images/academy/level5/5.9_journal.png
caption: A structured 10-point checklist for objective session review.
lookFor: ["Evidence Weighting Accuracy", "Scenario Branching Clarity", "Invalidation Discipline", "Emotional State Audit"]
:::

### The Audit Questions
1. Did I identify a Primary and Alternative scenario *before* price reached the area?
2. Did my Evidence Stack have at least 3 layers of alignment?
3. Did I wait for Confirmation, or did I act on Assumption?
4. If price hit my Invalidation Anchor, did I stop trading immediately?

:::decision-rule
A "Good Trade" is any trade where the Scenario Planning Map was followed perfectly. A "Bad Trade" is any trade where the process was skipped, even if it resulted in profit.
:::

:::trap
**Outcome Bias**: Judging your performance based on simulation P&L rather than the quality of your Evidence Stack and Scenario discipline.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner completes a simulation session and writes in their journal: 'The scenario worked. Good session.' What is the primary problem with this entry?",
        options: [
          { id: "A", text: "It is too short to be a proper entry.", isCorrect: false, feedback: "Length is secondary to content quality." },
          { id: "B", text: "It records only the outcome without any process analysis — no evidence stack review, no confirmation check, no invalidation audit.", isCorrect: true, feedback: "Correct. A journal entry that only records outcomes provides no insight into the decision-making process." },
          { id: "C", text: "It should include the exact price levels reached.", isCorrect: false, feedback: "Price levels are data, but process analysis is the learning engine." },
          { id: "D", text: "It should compare the result to the previous session.", isCorrect: false, feedback: "Historical comparison is useful, but current process audit is critical." }
        ]
      },
      skillLevel: "advanced", orderIndex: 9
    },
    {
      level: 5, moduleNumber: "5.10", title: "Scenario Planning Map",
      objective: "Synthesize all Level 5 concepts into a complete scenario planning workflow and complete the capstone mission.",
      content: `# 5.10 — Scenario Planning Map

:::skill-target
Synthesize all Level 5 components into a repeatable, session-ready workflow.
:::

### The Unified Workflow
Everything you have learned — evidence stacking, branching logic, invalidation, timeframe alignment, unclear areas, confirmation, real-time adaptation, intermarket context, and journal review — comes together here.

:::visual
title: Scenario Planning Map
image: /images/academy/level5/5.10_map.png
caption: The complete circular workflow for professional market participation.
lookFor: ["HTF Narrative Anchor", "Evidence Stack Weights", "Scenario Branching", "Active Execution & Audit"]
:::

:::visual
title: The 10-Step Scenario Checklist
lookFor: ["1. Zoom Out: HTF Narrative Anchor", "2. Filter: Scan for Structural Conflict", "3. Stack: Build Evidence Stack (3+ layers)", "4. Branch: Define Primary/Alternative Scenarios", "5. Anchor: Mark Invalidation Level", "6. Verify: Check Intermarket (DXY) alignment", "7. Wait: Let price enter Scenario Area", "8. Confirm: Look for LTF Catalyst (MSS)", "9. Audit: Monitor for Lazy Delivery", "10. Review: Post-Session Journal Audit"]
:::

:::decision-rule
If Step 1 through Step 6 are not complete, you have no business performing Step 7.
:::

:::summary
Level 5 is about moving from "What is the chart doing?" to "How am I logically responding to the chart?" You are now a **Strategic Planner**, capable of maintaining objectivity in any simulated environment.
:::`,
      interactiveTaskType: "scenario_link",
      interactiveTaskData: {
        scenarioSlug: "level-5-scenario-planning-gate",
        missionTitle: "Level 5 Synthesis Mission",
        passThreshold: 85
      },
      skillLevel: "advanced", orderIndex: 10
    }
  ];

  console.log(`🚀 Ingesting modules via upsert...`);
  for (const mod of modules) {
    await prisma.courseModule.upsert({
      where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      update: {
        ...(mod as any),
        marketTrack: "core",
      },
      create: {
        ...(mod as any),
        marketTrack: "core",
      },
    });
  }

  // ============================================
  // KNOWLEDGE TESTS (LEVEL 0-3)
  // ============================================
  const knowledgeTests = [
    {
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
          question: "You have just completed a module on structural shifts. According to the Lurnava learning loop, what is your next step?",
          options: [
            "Start trading in a live account to test the theory.",
            "Go to the Lab to practice the specific concept in simulation and document it in your Journal.",
            "Move immediately to Level 2 to save time.",
            "Follow a social media expert to see if they agree with the module."
          ],
          correctIndex: 1,
          explanation: "The Lurnava loop is: Learn (Module) -> Practice (Lab) -> Review (Journal). Professional skill is built through repeated, documented practice."
        },
        {
          id: "q0_2",
          topic: "Market Interaction",
          difficulty: "medium",
          question: "You observe price moving higher rapidly on your chart. Which of the following is the most objective explanation for this movement?",
          options: [
            "The market is 'feeling' optimistic about the future.",
            "Buyers are consistently hitting the 'Ask' prices and removing available sell orders (Liquidity).",
            "The computer algorithm decided it was time for an uptrend.",
            "A special 'bullish' pattern has appeared and is forcing the price up."
          ],
          correctIndex: 1,
          explanation: "Price moves because of order interaction. When buyers are aggressive enough to take all available sell orders at a price, the market must move higher to find new sellers (Liquidity)."
        },
        {
          id: "q0_3",
          topic: "Candle Context",
          difficulty: "medium",
          question: "In the middle of a strong multi-day downtrend, you see a single green 'Hammer' candle (a small body with a long wick at the bottom). How should you read this?",
          options: [
            "This is a 'Buy Signal' and I should act immediately.",
            "The trend has officially reversed and will now go up.",
            "This is a piece of evidence that some buyers stepped in, but the overall context remains bearish until structure shifts.",
            "A single candle is enough to ignore all previous market history."
          ],
          correctIndex: 2,
          explanation: "Context is King. A single candle is a record of a brief window of time; it must be interpreted within the larger structural story, which in this case is still bearish."
        },
        {
          id: "q0_4",
          topic: "Timeframe Context",
          difficulty: "hard",
          question: "The Daily chart shows a clear uptrend with higher highs. You zoom into the 5-minute chart and see a very strong red candle breaking a minor low. What is the most disciplined reading?",
          options: [
            "The 5-minute move is likely a minor retracement inside the larger Daily uptrend.",
            "The Daily trend has been canceled by this single 5-minute candle.",
            "I should sell immediately because the 5-minute chart is 'closer' to the action.",
            "Lower timeframes are always more important than higher timeframes."
          ],
          correctIndex: 0,
          explanation: "Higher timeframes provide the narrative (Context), while lower timeframes provide the detail. A small move against the major trend is usually just 'noise' or a brief retracement."
        },
        {
          id: "q0_5",
          topic: "Structure Basics",
          difficulty: "medium",
          question: "You are looking at a chart where price has just broken above a previous 'Peak' (Swing High) and has recently created a new higher 'Valley' (Swing Low). According to structural basics, what is the most logical reading of the current direction?",
          options: [
            "The market is in a Bearish Downtrend because it moved too far.",
            "The market is in a Bullish Uptrend because it is stepping higher through new structural anchors.",
            "The market is Unclear because the candles are green.",
            "The market is in a Range because it hasn't broken the Daily high yet."
          ],
          correctIndex: 1,
          explanation: "An uptrend is structurally defined by a sequence of rising peaks (Higher Highs) and rising valleys (Higher Lows). Identifying these anchors is the first step to mapping the market skeleton."
        },
        {
          id: "q0_6",
          topic: "Evidence vs Assumption",
          difficulty: "medium",
          question: "You believe price will 'bounce' at the $1.1000 level because it is a round number, but the price is currently at $1.1050 and moving down. Your belief is classified as:",
          options: [
            "Objective Evidence.",
            "A Structural Fact.",
            "An Assumption (Prediction).",
            "A Review Condition."
          ],
          correctIndex: 2,
          explanation: "Believing something will happen before it does is an assumption. Objective reading requires waiting for price to actually reach a level and show visible evidence of a reaction."
        },
        {
          id: "q0_7",
          topic: "Forex Relative Strength",
          difficulty: "medium",
          question: "When you observe the EUR/USD currency pair rising, what is actually happening in the market?",
          options: [
            "The Euro (EUR) is being bought and is strengthening relative to the US Dollar (USD).",
            "The US Dollar (USD) is weakening relative to the Euro.",
            "It is a relationship where the 'Base' currency is gaining strength or the 'Quote' currency is losing strength.",
            "All of the above."
          ],
          correctIndex: 3,
          explanation: "Forex pairs are relationships. A rise in EUR/USD means the EUR (Base) is stronger than the USD (Quote). This can be caused by Euro strength, Dollar weakness, or both."
        },
        {
          id: "q0_8",
          topic: "Forex Sessions",
          difficulty: "medium",
          question: "It is 10:00 PM in New York (the Asian/Tokyo session). You notice the price of EUR/USD is moving very slowly in a 3-pip range. How should you respond?",
          options: [
            "Increase your position size to force a profit from small moves.",
            "Recognize this as a low-liquidity window where structural evidence is often 'noisy' or absent.",
            "Assume the market is broken and contact support.",
            "Trade anyway because the market is open 24/5."
          ],
          correctIndex: 1,
          explanation: "The 'personality' of the market changes with the sessions. The Asian session is often lower in volume (Liquidity) for EUR/USD, leading to narrow ranges and less reliable evidence."
        },
        {
          id: "q0_9",
          topic: "Gold Context Drivers",
          difficulty: "hard",
          question: "Which combination of factors would typically provide supporting context for downward pressure on Gold (XAU/USD)?",
          options: [
            "A strengthening US Dollar (DXY) and rising global interest rates.",
            "A weakening US Dollar and falling interest rates.",
            "A global war and high economic uncertainty.",
            "Gold is unrelated to the US Dollar or interest rates."
          ],
          correctIndex: 0,
          explanation: "Gold is priced in Dollars (so a stronger Dollar makes it more expensive) and it pays no interest (so higher bank rates make it less attractive to hold)."
        },
        {
          id: "q0_10",
          topic: "Gold Volatility",
          difficulty: "medium",
          question: "Gold shoots up 60 pips in 15 seconds, then immediately leaves a long wick on top and returns to its starting point. This is an example of:",
          options: [
            "A clear bullish breakout that you missed.",
            "High-volatility 'noise' or a liquidity spike.",
            "The market 'guaranteeing' a move lower.",
            "A reason to act faster and skip your checklist."
          ],
          correctIndex: 1,
          explanation: "Gold is highly volatile. Sudden spikes (Wick Spikes) are often just 'noise' and do not necessarily indicate a change in the structural story."
        },
        {
          id: "q0_11",
          topic: "Crypto Fragmentation",
          difficulty: "medium",
          question: "On a Sunday afternoon, you see Bitcoin move 4% on a chart. Why should a Lurnava learner treat this move with extra caution?",
          options: [
            "Because crypto is closed on Sundays.",
            "Because weekend moves often happen on low liquidity and can be 'fake-outs' created by a few large participants.",
            "Because the weekend is the most reliable time to trade.",
            "Because all crypto exchanges show the exact same price at all times."
          ],
          correctIndex: 1,
          explanation: "Crypto is 24/7, but major banks/institutions are closed on weekends. This low-volume environment allows large orders to move price easily, creating moves that often reverse on Monday."
        },
        {
          id: "q0_12",
          topic: "Crypto Mechanics",
          difficulty: "hard",
          question: "You observe that Ethereum 'Funding Rates' are extremely positive (Longs paying Shorts) and price is reaching a major structural high. This is supporting context for:",
          options: [
            "A 'guaranteed' continuation of the uptrend.",
            "A potential 'Long Liquidation' cascade if price begins to shift downward.",
            "Buying more Ethereum immediately.",
            "Nothing, as funding rates are not related to price."
          ],
          correctIndex: 1,
          explanation: "High positive funding means many participants are 'Long' using leverage. If price drops, these participants may be forced to close (Liquidation), creating a wave of selling pressure."
        },
        {
          id: "q0_13",
          topic: "Simulation Discipline",
          difficulty: "easy",
          question: "You completed a practice session in the Lab. You 'lost' the simulated trade, but you followed your structural rules and documented the evidence correctly. This session was:",
          options: [
            "A failure that proves you cannot read the market.",
            "A success, because you practiced a sound, logical process regardless of the outcome.",
            "A waste of time because you didn't make a virtual profit.",
            "Something you should delete from your journal immediately."
          ],
          correctIndex: 1,
          explanation: "In the Lab, success is measured by the quality of your reasoning and discipline, not the outcome. A well-reasoned loss is better than a lucky guess."
        },
        {
          id: "q0_14",
          topic: "Journal Quality",
          difficulty: "easy",
          question: "Which of the following is the hallmark of a 'Strong' journal note?",
          options: [
            "Descriptions of how you 'feel' about the market.",
            "Objective records of the Roadway, Context, Evidence Stack, and a clear Review Condition.",
            "One-sentence notes like 'I won this one.'",
            "Predictions about where the price will be in one year."
          ],
          correctIndex: 1,
          explanation: "A strong note provides a clear mirror of your logic at the time, using objective structural facts that can be reviewed and improved later."
        },
        {
          id: "q0_15",
          topic: "Foundation Synthesis",
          difficulty: "medium",
          question: "You are starting a new practice session. What is the correct order of the Lurnava Workflow?",
          options: [
            "Guess direction -> Click Buy -> Check news -> Close trade.",
            "Identify Roadway -> Check Context -> Map Structure -> Stack Evidence -> Define Review Condition -> Record Note.",
            "Map Structure -> Ignore Context -> Act on feelings -> Review later.",
            "Wait for a signal -> Copy it -> Hope for the best -> Skip the journal."
          ],
          correctIndex: 1,
          explanation: "The professional workflow moves from the 'Big Picture' (Roadway/Context) down to the specific 'Structural Facts' and 'Evidence' before documenting the final plan."
        }
      ]
    },
    {
      level: 1,
      title: "Level 1 Market Basics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q1_1", question: "What does the 'Casino Analogy' represent in market participation?", options: ["Trying to force a large outcome from one event.", "Maintaining a statistical edge over a large sample of independent events.", "Expecting one event to be known in advance."], correctIndex: 1, explanation: "Professional participation relies on the law of large numbers." },
        { id: "q1_2", question: "In a zero-sum matching environment, what is primarily being transferred?", options: ["Intelligence", "Capital and Value", "Confidence"], correctIndex: 1, explanation: "Markets facilitate the transfer of value." },
        { id: "q1_3", question: "If a system has a 55% success rate, what is a statistically normal occurrence in the short term?", options: ["Guaranteed positive results every week.", "A series of consecutive unfavorable attempts.", "No chance of an unsuccessful attempt."], correctIndex: 1, explanation: "Probability allows for significant short-term variance." },
        { id: "q1_4", question: "What does an R-Multiple compare?", options: ["Planned exposure relative to the outcome", "Account size only", "Price-feed speed", "A method for increasing size after a setback"], correctIndex: 0, explanation: "R-Multiple defines the unit of exposure relative to the result." },
        { id: "q1_5", question: "What is unfavorable outcome aversion in decision-making?", options: ["Feeling a negative outcome more strongly than an equal positive outcome", "Avoiding all practice to prevent mistakes", "Taking larger actions to avoid admitting a small mistake", "Both A and C"], correctIndex: 3, explanation: "Aversion can push learners to avoid objective review after an unfavorable result." },
        { id: "q1_6", question: "What is the primary intent when price moves beyond a known structural boundary and then reverses?", options: ["A sign that the structure is strengthening.", "Testing available orders and boundaries.", "A technical error."], correctIndex: 1, explanation: "Moves beyond boundaries test the available capital and interest at those extremes." },
        { id: "q1_7", question: "Why is account decrease described as 'asymmetrical'?", options: ["Because negative outcomes are always larger than positive ones.", "Because a 50% decrease requires a 100% increase to return to the original level.", "Because transaction fees change."], correctIndex: 1, explanation: "The math of recovery becomes exponentially harder as the percentage of decrease increases." },
        { id: "q1_8", question: "At their core, market price movements are driven by:", options: ["The relative scarcity of an asset and the desire to hold it (Supply and Demand).", "The specific colors and patterns of the candles.", "Random chance with no underlying cause."], correctIndex: 0, explanation: "Value is a function of supply, demand, and participant perception." },
        { id: "q1_9", question: "A central bank raising interest rates usually evidences:", options: ["A planned capital outflow from that currency.", "Capital inflow as participants seek the higher available yield.", "No change in participant behavior."], correctIndex: 1, explanation: "Higher relative yields attract global capital seeking better returns." },
        { id: "q1_10", question: "What is the most effective tool for maintaining emotional discipline?", options: ["A documented plan and an objective review journal.", "Larger actions to recover from small setbacks.", "Following advice in group chats."], correctIndex: 0, explanation: "Process-oriented discipline is built through documentation and review." },
        { id: "q1_11", question: "If a system has a 1:2 planned exposure / possible outcome ratio, what success rate is required to reach a breakeven state?", options: ["50%", "33.3%", "25%"], correctIndex: 1, explanation: "With 1:2, one successful outcome covers two failed ones." },
        { id: "q1_12", question: "What is the role of 'unlearning' in the foundations phase?", options: ["To forget how to read a price chart entirely.", "To remove unhelpful expectations of easy achievement.", "To stop paying attention to events."], correctIndex: 1, explanation: "Foundation requires clearing the mind of inaccurate terminology and unhelpful expectations." },
        { id: "q1_13", question: "Markets primarily exist to:", options: ["Create wealth for all participants simultaneously.", "Facilitate exchange between participants with different time and capital needs.", "Provide a platform for testing new high-frequency software."], correctIndex: 1, explanation: "Markets are matching engines for capital and time." },
        { id: "q1_14", question: "Inflationary mechanics typically cause a currency's purchasing power to:", options: ["Rise indefinitely over time.", "Decline as the total supply of the currency expands.", "Stay perfectly stable."], correctIndex: 1, explanation: "Expansion of currency supply (inflation) generally debases its purchasing power." },
        { id: "q1_15", question: "The probability of any single market outcome is:", options: ["Predetermined by previous events.", "Uncertain and independent of the previous outcome.", "Known in advance by participants with large capital."], correctIndex: 1, explanation: "In a probabilistic environment, every event is unique and its specific outcome is uncertain." }
      ]
    },
    {
      level: 2,
      title: "Level 2 Market Mechanics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q2_1", question: "What is the defining characteristic of 'Fractal' market behavior?", options: ["One that only moves in a single direction without retracements.", "One where small-scale patterns mirror large-scale patterns.", "One that is completely random."], correctIndex: 1, explanation: "Markets are self-similar across timeframes." },
        { id: "q2_2", question: "A Market Structure Shift (MSS) is identified when:", options: ["Price touches a specific moving average line.", "Price violates a major structural anchor with clear displacement.", "A new daily session window begins."], correctIndex: 1, explanation: "A shift requires the clear violation of the points that anchored the previous structural sequence." },
        { id: "q2_3", question: "What does 'Equilibrium' represent within a defined dealing range?", options: ["The exact 50% midpoint between the range high and range low.", "The area immediately above the previous high.", "The current market price."], correctIndex: 0, explanation: "Equilibrium is the fair value midpoint of a structural range." },
        { id: "q2_4", question: "In structural mapping, price above the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 1, explanation: "Above 50% is Premium." },
        { id: "q2_5", question: "In structural mapping, price below the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 0, explanation: "Below 50% is Discount." },
        { id: "q2_6", question: "What is 'Internal Structure' in the context of a dealing range?", options: ["Movements that occur completely outside the major structural anchors.", "Fluctuations that occur within a larger, major directional leg.", "Raw data from the exchange."], correctIndex: 1, explanation: "Internal structure is the movement within a higher-timeframe leg." },
        { id: "q2_7", question: "External Range boundaries are typically identified at:", options: ["Old highs.", "Old lows.", "Both old highs and old lows that form the range extremes."], correctIndex: 2, explanation: "The extremes of the current structural sequence define the external boundaries." },
        { id: "q2_8", question: "A 'Failed Break' is best described as:", options: ["Price moving beyond a level and establishing a new range.", "Price moving briefly beyond a level but failing to close there and returning inside.", "A move that happens exactly at the session window open."], correctIndex: 1, explanation: "A failed break shows a lack of commitment to the new price level." },
        { id: "q2_9", question: "A 'Major Swing High' is confirmed as a structural anchor only when:", options: ["It is the highest visible point on the current screen.", "It anchors a move that successfully violates a previous major structural point.", "It consists of at least three consecutive candles."], correctIndex: 1, explanation: "Structural significance is earned through the violation of opposing structure." },
        { id: "q2_10", question: "True or False: Every small fluctuation that looks like a peak is a Major Structural Anchor.", options: ["True", "False"], correctIndex: 1, explanation: "Only swings that lead to significant structural changes are considered major anchors." },
        { id: "q2_11", question: "What is the primary goal of mapping external range boundaries?", options: ["To make an immediate action decision.", "To define the objective boundaries of the current structural reading.", "To guess where other participants are placing their orders."], correctIndex: 1, explanation: "Boundaries provide the map for objective review." },
        { id: "q2_12", question: "Primary price feeds differ from typical feeds primarily in:", options: ["The color of the candles.", "Direct access and transparency of the available orders.", "Their ability to be 100% accurate about what happens next."], correctIndex: 1, explanation: "Professional feeds have less filtering and provide more granular data." },
        { id: "q2_13", question: "A Market Structure Shift (MSS) represents:", options: ["A minor and expected pullback within a sequence.", "A behavioral shift in the underlying chart context.", "A random technical glitch."], correctIndex: 1, explanation: "MSS indicates that the character of price delivery has changed." },
        { id: "q2_14", question: "The 'Trend Fallacy' assumes that:", options: ["Markets move in straight, predictable lines for extended periods.", "All market structure is fractal and self-similar.", "Prices always return to their starting point."], correctIndex: 0, explanation: "Retail trends are often just expansion phases between ranges." },
        { id: "q2_15", question: "Dealing ranges are structurally established by:", options: ["Two major structural anchors forming the high and low.", "Sudden spikes in activity.", "Announcements made by government officials."], correctIndex: 0, explanation: "Ranges are the areas between confirmed structural extremes." }
      ]
    },
    {
      level: 3,
      title: "Level 3 Structure & Imbalance Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 30,
      questions: [
        { id: "q3_1", question: "What is a Fair Value Gap (FVG)?", options: ["A simple gap between the close of one day and the open of the next.", "A 3-candle sequence where rapid delivery leaves an imbalance of orders.", "A horizontal line drawn at a round number."], correctIndex: 1, explanation: "FVGs represent areas where price moved too quickly to offer balanced delivery." },
        { id: "q3_2", question: "An Order Block (OB) is structurally defined as:", options: ["Any candle that has a large body.", "The origin point of a move that successfully violates major structure.", "A candle that appears exactly at the start of a new hour."], correctIndex: 1, explanation: "Order blocks anchor the beginning of an expansion that shifts structure." },
        { id: "q3_3", question: "A 'Breaker Block' is formed when:", options: ["A failed order block is violated and then retested.", "A current structural sequence continues without interruption.", "Price moves sideways for many candles."], correctIndex: 0, explanation: "Breakers are failed order blocks that flip their structural polarity." },
        { id: "q3_4", question: "What is an 'Exchange Void'?", options: ["A moment when the order book is empty.", "An explosive move that leaves behind no orders matched on one side.", "A slow period where no candles are formed."], correctIndex: 1, explanation: "Voids represent gaps in the delivery of price." },
        { id: "q3_5", question: "Mitigation occurs when:", options: ["A participant closes all positions.", "Price returns to an old order block to clear previous exposure.", "A new all-time high is reached."], correctIndex: 1, explanation: "Mitigation is the process of neutralizing exposure from previous orders." },
        { id: "q3_6", question: "An Inversion FVG is:", options: ["A price gap that never fills.", "An FVG that is broken and then acts as support/resistance level.", "A gap that opens on the 1-minute timeframe."], correctIndex: 1, explanation: "Inversion FVGs flip their structural role after being broken." },
        { id: "q3_7", question: "A 'Volume Imbalance' is characterized by:", options: ["Exceptionally high activity on a single candle.", "A gap between two candle bodies where the wicks still overlap.", "Candles that have no wicks."], correctIndex: 1, explanation: "Volume imbalances occur when bodies do not overlap despite wick overlap." },
        { id: "q3_8", question: "Tracking structural footprints is primarily about identifying:", options: ["The exact next direction of the chart.", "Evidence left by strong participation in price movement.", "The best session window for action.", "The names of participants involved."], correctIndex: 1, explanation: "Structural footprints are visible clues created by strong participation and delivery gaps." },
        { id: "q3_9", question: "A 1-minute MSS within a 4-hour upward leg is structurally:", options: ["Confirmation of a full structure change.", "Likely internal noise or a short-term retracement.", "The strongest possible evidence for a new directional move."], correctIndex: 1, explanation: "Higher-timeframe context always overrides lower-timeframe shifts." },
        { id: "q3_10", question: "Why does Premium/Discount context matter in Level 3 review?", options: ["It gives an automatic action instruction.", "It helps compare price location with the current range.", "It removes the need for structure mapping.", "It guarantees a clean reaction."], correctIndex: 1, explanation: "Premium/Discount context helps learners review where price is located within a defined range." },
        { id: "q3_11", question: "The underlying 'Engine' of a Fair Value Gap is:", options: ["Emotional overreaction only.", "A lack of two-way exchange during strong price delivery.", "A news label on the chart.", "A wider spread only."], correctIndex: 1, explanation: "FVGs are delivery failures." },
        { id: "q3_12", question: "A 'Mitigation Block' differs from a 'Breaker' primarily because:", options: ["It contains a significantly higher amount of volume.", "It does not require a boundary sweep of the previous high/low.", "It is only structurally valid on the daily chart."], correctIndex: 1, explanation: "Breakers are defined by the sweep of a previous extreme; Mitigations are not." },
        { id: "q3_13", question: "Time & Sales data helps identify:", options: ["The exact next chart movement.", "Aggressive participation hitting bid or ask.", "The content of future news.", "The final outcome of the current candle."], correctIndex: 1, explanation: "Data reveals aggressive participation in real-time." },
        { id: "q3_14", question: "An 'Iceberg Order' is revealed when:", options: ["A level is tested repeatedly while movement through it remains limited.", "A very large candle body appears without any news event.", "Price moves too quickly for candles to form."], correctIndex: 0, explanation: "Icebergs absorb value at a fixed price." },
        { id: "q3_15", question: "Price delivery is considered 'Balanced' only when:", options: ["Both sides of the spread have been offered at every price point in a range.", "The market is closed.", "There are an equal number of candles."], correctIndex: 0, explanation: "Balanced delivery ensures no visible delivery gaps are left behind." }
      ]
    },
    {
      level: 5,
      title: "Level 5 Scenario Planning Test",
      questionsPerAttempt: 20,
      passThreshold: 85,
      timeLimitMin: 45,
      questions: [
        { id: "q5_1", question: "You identify a bearish MSS on the Daily chart and a bullish FVG on the 4-hour chart. Neither has been invalidated. What is the correct evidence stack assessment?", options: ["The Daily MSS overrides the 4H FVG automatically because it is a higher timeframe.", "Both clues should be recorded — the MSS as supporting and the FVG as conflicting — creating an evidence stack with documented conflict.", "The 4H FVG should be ignored because it opposes the Daily narrative.", "Wait until one of the two clues self-resolves before recording anything."], correctIndex: 1, explanation: "A complete evidence stack includes both supporting and conflicting observations. Conflict is information, not a problem to eliminate." },
        { id: "q5_2", question: "Your primary scenario is bearish from a 1H FVG. Your alternative is a bullish shift if price closes above 1.0975 with displacement. During the session, price closes above 1.0975 with a strong displacement candle and creates a new bullish FVG. What should you do?", options: ["Hold the bearish scenario because the Daily narrative has not changed.", "Switch to the alternative scenario as pre-defined — the condition has been met.", "Wait for a second displacement candle to confirm the first one.", "Abandon both scenarios and stop observing for the session."], correctIndex: 1, explanation: "The pre-defined alternative condition was met. Switching is not a failure — it is the execution of a well-designed plan." },
        { id: "q5_3", question: "A learner writes their invalidation condition as: 'I will invalidate if things look bad.' What is the structural problem with this condition?", options: ["It is too emotional — invalidation must reference a specific structural level and candle behavior.", "It is fine as long as the learner has experience.", "It needs to include a time component only.", "The word 'bad' should be replaced with 'bearish.'"], correctIndex: 0, explanation: "Invalidation conditions must be specific: structural level + candle behavior (body close with displacement). Vague language produces vague decisions." },
        { id: "q5_4", question: "The Daily chart shows a bearish MSS. On the 1H chart, price is retracing upward in a slow grind with no displacement and no MSS. What is the aligned reading?", options: ["Build a bullish 1H scenario because the retracement is visible.", "The 1H retracement lacks structural evidence (no MSS, no displacement). The Daily bearish narrative remains the primary context.", "Switch to a bullish scenario because the 1H is more recent.", "The chart is unclear — record No Scenario."], correctIndex: 1, explanation: "A slow retracement without structural shift does not override the HTF narrative. It is internal noise until an MSS occurs." },
        { id: "q5_5", question: "The Daily chart has a bullish MSS. The 4H chart has just completed a bearish MSS. The 1H is consolidating with no boundary interaction. What is the correct reading?", options: ["Build a bullish scenario from the Daily MSS.", "Build a bearish scenario from the 4H MSS.", "Record No Scenario — Structural Conflict, and wait for one MSS to be invalidated.", "Build both scenarios simultaneously and observe."], correctIndex: 2, explanation: "Opposing MSS on adjacent timeframes without resolution creates structural conflict. Forcing a read produces poor review quality." },
        { id: "q5_6", question: "You have identified a bullish Order Block at 1.0940. Price is at 1.0960, moving toward it. You write: 'My scenario is bullish from 1.0940.' What type of planning is this?", options: ["Confirmation-based, because the OB is a strong structural level.", "Assumption-based, because price has not yet reached the area and no structural reaction has occurred.", "Aligned, because the OB supports the HTF narrative.", "Speculative, but acceptable for simulation practice."], correctIndex: 1, explanation: "Building a scenario before price reaches the area and before any structural reaction has occurred is assumption-based planning." },
        { id: "q5_7", question: "During a simulation session, a single red candle appears inside your bullish scenario. No MSS has occurred. No FVG has been created. No anchor has been violated. What should you do?", options: ["Update the scenario to bearish because the candle was red.", "Record the candle as a structural checkpoint and update the journal.", "Do nothing — a single candle without a structural event is not a review trigger.", "Close the simulation session to avoid further uncertainty."], correctIndex: 2, explanation: "Scenario reviews are triggered by structural events (MSS, FVG, boundary sweep), not by individual candle colors." },
        { id: "q5_8", question: "Your EUR/USD scenario is bullish. You check DXY and find it also has a bullish MSS with displacement. What is the intermarket assessment?", options: ["Intermarket aligned — both bullish is supporting.", "Intermarket conflicting — EUR/USD bullish requires DXY bearish. Both bullish simultaneously is a structural divergence that should be documented.", "Intermarket neutral — DXY does not affect EUR/USD.", "Ignore DXY because the EUR/USD chart is the primary source."], correctIndex: 1, explanation: "EUR/USD and DXY are negatively correlated. Both being bullish simultaneously is a divergence that should be recorded as intermarket conflict." },
        { id: "q5_9", question: "A learner writes in their journal: 'The scenario did not work. Bad session.' What is the primary problem with this entry?", options: ["It needs more detail about the price levels.", "It records only the outcome without process analysis — no evidence stack audit, no confirmation check, no invalidation review.", "It should blame a specific external factor for the outcome.", "It is an acceptable short-form entry for minor sessions."], correctIndex: 1, explanation: "Journal entries must audit the decision-making process, not just record outcomes. Process analysis is what produces learning." },
        { id: "q5_10", question: "In the Scenario Planning Map workflow, what must be completed before defining the Primary Scenario?", options: ["The HTF narrative check, the evidence stack, and the structural conflict check.", "Only the HTF narrative check.", "The intermarket context check.", "The post-session journal review."], correctIndex: 0, explanation: "Steps 1-3 (HTF narrative, evidence stack, conflict check) must be completed before Step 4 (Primary Scenario). Building a scenario without these steps produces structurally incomplete plans." },
        { id: "q5_11", question: "Your bullish scenario has a time-based invalidation: New York AM session (8:30-11:00 EST). By 11:15, price has not reached your area of interest. What is the correct action?", options: ["Extend the time window by one more hour to give it more room.", "Record 'Time-expired. No interaction. Scenario archived.' This is a clean, objective outcome.", "Switch to the alternative scenario because time ran out.", "The scenario is still valid — time-based invalidation is optional."], correctIndex: 1, explanation: "Time-based invalidation is a pre-defined condition. When the window expires without interaction, the scenario is archived. Extending the window is narrative protection." },
        { id: "q5_12", question: "Price reaches your identified 4H Order Block. On the 1-minute chart, a wick forms at the zone but immediately recovers — no MSS, no FVG, no displacement. Is this confirmation?", options: ["Yes — price touched the zone, which is enough.", "No — a wick reaction without a structural shift (MSS/FVG/displacement) is not confirmation. It may be a sweep.", "Yes — the wick shows that the zone is respected.", "It depends on the size of the wick."], correctIndex: 1, explanation: "Confirmation requires a structural event at the area — not just proximity or a wick. A wick without structural shift is ambiguous and may indicate a sweep." },
        { id: "q5_13", question: "You are reviewing your journal entries from three consecutive sessions. In all three, you defined an alternative scenario but never switched to it, even though the alternative conditions were met twice. What pattern does this reveal?", options: ["Strong conviction in primary readings — a positive trait.", "Narrative lock — the alternative was defined but not activated when conditions triggered it. This is a process failure.", "Insufficient alternative scenarios — they need to be rewritten.", "Normal behavior — alternatives rarely need to be activated."], correctIndex: 1, explanation: "Defining alternatives without activating them when conditions are met is narrative lock disguised as preparation. This is a critical process pattern to address." },
        { id: "q5_14", question: "A learner builds an evidence stack with five supporting clues and zero conflicting clues. What should they suspect?", options: ["Their reading is very strong because all clues align.", "Possible confirmation bias — a stack with zero conflicting clues may indicate that conflicting evidence was unconsciously filtered out.", "The chart is unusually clear and no further review is needed.", "They should add a sixth clue to strengthen the stack."], correctIndex: 1, explanation: "An evidence stack with zero conflicting observations should be treated with suspicion. Most chart environments contain at least some conflicting data." },
        { id: "q5_15", question: "During real-time adaptation, you updated your scenario four times in ten minutes, each time triggered by a single candle. What is the likely problem?", options: ["The chart is extremely volatile and requires rapid updates.", "Over-adaptation — updating the scenario based on individual candles rather than structural checkpoints. Most of the updates were likely noise reactions.", "Under-adaptation — four updates is too few for a ten-minute window.", "The scenario was poorly designed from the start."], correctIndex: 1, explanation: "Structural checkpoints (MSS, FVG, anchor violation) are the only valid review triggers. If every candle triggers a review, the learner is reacting to noise." },
        { id: "q5_16", question: "In the capstone mission, you are asked to identify a Review Area. What does this zone represent structurally?", options: ["The zone where price will most likely reverse.", "The structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading.", "The zone with the highest volume concentration.", "The zone closest to the current price."], correctIndex: 1, explanation: "The Review Area is where the chart will provide the next piece of structural evidence. It is not a reversal prediction — it is an observation point." },
        { id: "q5_17", question: "Your scenario is bearish from a 1H FVG. Price creates a new bearish FVG below the first one, but your anchoring swing low has not been swept. A learner asks: 'Should I move my invalidation to the new FVG?' What is the correct answer?", options: ["Yes — the new FVG is more recent and therefore more relevant.", "No — invalidation is defined by the structural anchor (swing low), not by subsequent FVGs. Moving invalidation to track new FVGs is narrative protection.", "Yes — as long as the new FVG is in the same direction as the scenario.", "It depends on the displacement quality of the new FVG."], correctIndex: 1, explanation: "Invalidation is anchored to the structural level defined in the plan. Moving it to track subsequent price action is redefining the plan to protect the narrative." },
        { id: "q5_18", question: "A learner checks DXY after completing their EUR/USD evidence stack. DXY is unclear — consolidating with no recent MSS. How should this affect the EUR/USD scenario?", options: ["Cancel the EUR/USD scenario because DXY is unclear.", "Record 'Intermarket context: DXY unclear — no additional weight or conflict.' The primary EUR/USD reading stands on its own evidence.", "Force a DXY reading to ensure intermarket alignment.", "Use another correlated pair instead of DXY to find alignment."], correctIndex: 1, explanation: "When DXY is unclear, it provides neither supporting nor conflicting context. The primary chart's evidence stack is unchanged." },
        { id: "q5_19", question: "You are building a 1-minute scenario based on a Weekly chart narrative, skipping the Daily, 4H, and 1H charts entirely. What is the alignment problem?", options: ["There is no problem — the Weekly chart is the most authoritative.", "Timeframe mismatch — alignment requires stepping through intermediate timeframes, not jumping from the highest to the lowest.", "The 1-minute chart is too noisy for any scenario planning.", "The Weekly chart should only be used for scenarios lasting more than one week."], correctIndex: 1, explanation: "Alignment requires methodical review across intermediate timeframes. Jumping from Weekly to 1-minute skips the 4H, 1H, and 15m, making the scenario structurally incomplete." },
        { id: "q5_20", question: "After completing the 10-step Scenario Planning Map, you attempt the capstone mission but place the Review Area incorrectly. Your journal review reveals that you skipped Step 3 (Structural Conflict Check). What is the lesson?", options: ["The mission grading was too strict.", "Skipping the conflict check allowed a scenario to be built on conflicted structure, which led to an inaccurate zone selection. The full workflow must be completed.", "Step 3 is optional for experienced learners.", "The Review Area should have been placed at the closest FVG instead."], correctIndex: 1, explanation: "The Scenario Planning Map is a sequential workflow. Skipping steps compromises the structural logic of the entire plan, including zone selection." }
      ]
    }
  ];

  for (const test of knowledgeTests) {
    await prisma.knowledgeTest.upsert({
      where: { level: test.level },
      update: test as any,
      create: test as any,
    });
    console.log(`✅ Level ${test.level} Knowledge Test Ingested.`);
  }

  // ============================================
  // TRAINING SCENARIOS (LEVEL 3 + GATE)
  // ============================================
  const scenarios = [
    {
      slug: "level-3-final-gate",
      title: "Level 3 Final Gate",
      description: "Capstone mission for Level 3.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 3, instrument: "BTCUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the primary zone.",
      passThreshold: 80, xpAward: 500,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Zone Check", timeStart: "2024-01-10", timeEnd: "2024-01-12", priceMin: 108, priceMax: 112 }],
        feedbackOnPass: "Level 3 complete.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "m2-level-2-map-review-v1",
      title: "Level 2 Boundary Review",
      description: "Boundary identification mission.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 2, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the external boundary.",
      passThreshold: 80, xpAward: 250,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Boundary", timeStart: "2024-01-05", timeEnd: "2024-01-07", priceMin: 98, priceMax: 102 }],
        feedbackOnPass: "Boundary identified.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "level-5-scenario-planning-gate",
      title: "Level 5 Scenario Planning Review",
      description: "Capstone synthesis mission for Level 5 — Evidence-Based Scenario Planning. Validates the learner's ability to identify the correct Review Area based on structural context, evidence stacking, and timeframe alignment.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 5, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Using the Scenario Planning Map workflow, identify the Review Area — the structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading. This mission validates a single zone, not a complete scenario map. However, your zone selection should reflect the full evidence stack: HTF narrative, LTF alignment, and structural context. Before placing your zone, consider: What is the HTF narrative? What structural clue makes this zone the next area to observe? What would confirmation and invalidation look like at this zone?",
      passThreshold: 85, xpAward: 750,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-01-20", timeEnd: "2024-01-22", priceMin: 1.0950, priceMax: 1.0980 }],
        feedbackOnPass: "Level 5 complete. Your Review Area placement demonstrates structural understanding of the evidence stack and timeframe alignment. Complete your post-mission journal entry: document the HTF narrative, the evidence that led to your zone selection, and what confirmation or invalidation would look like at this area.",
        feedbackOnFail: "Review Area placement does not align with the structural context. Before retrying, revisit the Scenario Planning Map workflow (Module 5.10): verify your HTF narrative reading, confirm that your evidence stack includes both supporting and conflicting clues, and ensure your zone represents the area where the next meaningful structural interaction will occur — not where you expect price to reverse.",
        feedbackOnRetry: "Take time between attempts. Before retrying, complete the Pre-Mission Journal Note from Module 5.10: (1) What is the HTF narrative? (2) What evidence supports a scenario? (3) What evidence conflicts? (4) Where is the next meaningful structural interaction? Use this documentation to guide your zone selection."
      }
    },
    {
      slug: "level-0-foundation-review-mission",
      title: "Level 0 Foundation Review",
      description: "Capstone synthesis mission for Level 0. Apply roadway context and structural mapping to identify a professional review area.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 0, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Observe the EUR/USD chart during the London session. Identify the current bullish structure (Higher Highs and Higher Lows) and mark the 'Review Area' — the structural zone where you would wait for the next piece of objective evidence before continuing your reading. Avoid guessing the next candle; focus on identifying where the market's intent will be revealed.",
      passThreshold: 80, xpAward: 150,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-05-10", timeEnd: "2024-05-12", priceMin: 1.0820, priceMax: 1.0850 }],
        feedbackOnPass: "Foundation Mission Complete. You identified the Review Area using objective structural logic rather than assumption. Now, write a short practice note in your Journal documenting the evidence you saw and what would make this reading 'Unclear.'",
        feedbackOnFail: "Review Area placement is not supported by the current structure. Remember: look for the most recent 'Swing' or 'Anchor' point. Do not mark a random candle; wait for the market to provide a clear boundary.",
        feedbackOnRetry: "Re-read Module 0.5 (Basic Structure) and 0.6 (Evidence vs Assumption). Focus on identifying the 'Range' before placing your marker. Success comes from patience, not speed."
      }
    }
  ];

  for (const sc of scenarios) {
    const scenario = await prisma.trainingScenario.upsert({
      where: { slug: sc.slug },
      update: sc as any,
      create: sc as any,
    });

    let targetModuleNumber = "4.8";
    if (sc.level === 5) targetModuleNumber = "5.10";
    if (sc.level === 3) targetModuleNumber = "3.10";
    if (sc.level === 2) targetModuleNumber = "2.12";
    if (sc.level === 0) targetModuleNumber = "0.15";

    const targetModule = await prisma.courseModule.findFirst({
      where: { moduleNumber: targetModuleNumber, level: sc.level }
    });

    if (targetModule) {
      await prisma.moduleScenarioLink.upsert({
        where: { moduleId_scenarioId: { moduleId: targetModule.id, scenarioId: scenario.id } },
        update: { requiredForProgress: true, sortOrder: 1 },
        create: {
          moduleId: targetModule.id,
          scenarioId: scenario.id,
          requiredForProgress: true,
          sortOrder: 1
        },
      });
    }
  }

  console.log(`✅ SUCCESS: All Tests and Missions Ingested.`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
