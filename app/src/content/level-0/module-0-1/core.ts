import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "You Are Not Here for Tips",
    visualKey: "academy-path",
    label: "Mission Brief",
    body: "Welcome to the Academy. Most people enter the market looking for 'tips,' 'secret strategies,' or 'signals' that tell them when to click a button. This is the fastest route to failure. Imagine a foundation-stage learner who spends an entire evening watching short, high-energy trading content online. One video explains a candle pattern; another talks about a liquidity concept; a third mentions crypto funding. The learner feels informed, productive, and confident. However, as soon as they open a live price chart, they realize they cannot explain what evidence they are actually looking for. Their confidence was not built on skill; it was **borrowed conviction** from a screen.\n\nLurnava is not a library of content; it is a **structured training system**. We are here to prevent the 'Random Learner' trap—the habit of consuming endless information without ever building a repeatable process. You are not here to watch; you are here to be trained in **Structured Market Reading**. This requires moving past the desire for shortcuts and committing to an academy process of observation, simulation, and audit. This module prevents the most common failure in early-stage development: having a head full of facts but no system to apply them. You are here to stop guessing and start reading.",
    context: {
      keyTerms: ["Borrowed conviction", "Structured training system", "Market reading", "Training path"],
      whyThisMatters: "Many learners feel productive after watching content, but they still cannot explain what they are seeing when a live chart opens. Lurnava trains the learner to build a repeatable process instead of collecting disconnected ideas.",
      realLifeExample: "A learner watches one video about candles, another about liquidity, and another about crypto funding. They feel informed, but when the chart opens, they cannot name the evidence they are looking for.",
      commonMistake: "Thinking “I have seen this before” means “I understand this.” Recognition without explanation is not skill.",
      quickNote: "If you cannot explain the reading, do not trust the feeling."
    }
  },
  {
    type: "visual_intro",
    title: "The Lurnava Training Loop",
    visualKey: "learning-loop",
    label: "Visual First",
    body: "The loop matters because understanding alone is not training. Lurnava uses practice, missions, and review notes to turn a lesson into a repeatable learning process.",
    objective: "Understand the four-step loop every Lurnava lesson uses to turn information into trained judgment.",
    context: {
      keyTerms: ["Training loop", "Practice action", "Mission", "Review note", "Feedback loop"],
      whyThisMatters: "Reading can give a learner vocabulary, but practice and review turn that vocabulary into usable judgment. The loop exists so the learner does not stop at “I understood the lesson” and mistake that feeling for skill.",
      realLifeExample: "A learner studies one concept, then opens a controlled practice screen to identify it. After the mission, they write what they saw, what evidence supported it, and what confused them. The review note becomes the record that helps them improve next time.",
      commonMistake: "Finishing a lesson and immediately jumping to the next topic. That creates the feeling of progress, but it skips the practice and review needed to expose weak understanding.",
      quickNote: "If there is no practice action and no review note, the loop is incomplete."
    }
  },
  {
    type: "visual_intro",
    title: "Activity Is Not the Same as Training",
    visualKey: "behavior-flow",
    label: "Behavioral Shift",
    body: "The difference between a struggling learner and a developing market reader is not talent or luck. The difference is whether the learner has a repeatable process that creates a feedback loop. One path leads to confusion; the other leads to clarity.",
    context: {
      keyTerms: ["Random learner", "Trained learner", "Feedback loop", "Evidence", "Review habit"],
      whyThisMatters: "Many learners confuse activity with progress. A person can watch, click, and switch methods every day without building a repeatable process.",
      realLifeExample: "A learner practices for one week but changes strategy every two days. At the end of the week, they have spent time, but they cannot say what improved.",
      commonMistake: "Thinking effort alone creates progress. Effort only becomes useful when it creates feedback.",
      quickNote: "If your practice leaves no record, it leaves no lesson."
    }
  },
  {
    type: "visual_intro",
    title: "The Cockpit: Your Training Instruments",
    visualKey: "system-map",
    label: "The Ecosystem",
    body: "A cockpit is useful because every instrument answers a specific question. Lurnava works the same way: each tool helps the learner observe, practice, record, or review.",
    items: [],
    context: {
      keyTerms: [
        { term: "Training instrument", definition: "A tool that helps you perform one part of the learning process." },
        { term: "Controlled practice", definition: "A guided exercise where you focus on one concept instead of clicking randomly." },
        { term: "Historical scenario", definition: "A past market situation selected for study and evidence review." },
        { term: "Journal review", definition: "Looking back at your own reasoning to find repeated mistakes." },
        { term: "Checklist assistant", definition: "Support that asks better questions without replacing your judgment." }
      ],
      whyThisMatters: "A learner can use every tool on the platform and still learn poorly if each tool is used randomly. The system matters because every tool has one job: help you learn, check, practice, study, record, or review.",
      realLifeExample: "A learner studies one lesson about market structure, completes a task to check the idea, practices the same concept in a controlled chart exercise, studies one historical case, then writes what evidence was clear and what still felt unclear.",
      commonMistake: "Treating the Lab like a place to click around, or treating Nava like someone who should decide for you.",
      quickNote: "Every tool should make your reasoning clearer. If it does not, you are using it passively."
    }
  },
  {
    type: "visual_intro",
    title: "One Hour of Bad Practice",
    visualKey: "practice-timeline",
    label: "Practice Discipline",
    body: "The difference is not time. The difference is structure. A useful session leaves behind a clear reason, a review note, and one thing to improve next time.",
    items: [],
    context: {
      keyTerms: [
        { term: "Junk practice", definition: "Busy action without a clear learning purpose." },
        { term: "Deliberate practice", definition: "Focused work on one concept, one situation, and one review note." },
        { term: "Practice action", definition: "A controlled exercise performed for learning, not guessing." },
        { term: "Review condition", definition: "The specific thing that would make the learner re-check their reading." },
        { term: "Learning record", definition: "The written trace of what the learner saw, thought, and needs to review." }
      ],
      whyThisMatters: "A learner can spend one hour clicking through charts and still produce no learning. Practice becomes valuable only when it creates a record that can be reviewed.",
      realLifeExample: "After work, a learner has one hour. The rushed learner jumps between charts to feel productive. The trained learner chooses one concept, studies one situation, writes one reason, and saves one note.",
      commonMistake: "Measuring practice by how many actions were taken instead of how clearly the learner can explain what they practiced.",
      quickNote: "If the session leaves no note, no reason, and no review condition, it was activity — not training."
    }
  },
  {
    type: "visual_intro",
    title: "The Three-Question Gate",
    visualKey: "decision-gate",
    label: "Decision Checkpoint",
    body: "A reading is not ready until it can pass all three questions. If one answer is missing, mark the reading as unclear.",
    context: {
      keyTerms: [
        { term: "Reading", definition: "Your current interpretation of what the chart is showing." },
        { term: "Evidence", definition: "Observable facts on the chart, not feelings or guesses." },
        { term: "Review condition", definition: "The specific condition that would make you re-check your reading." },
        { term: "Weak logic", definition: "A reading based on emotion, speed, or vague confidence." },
        { term: "Valid reading", definition: "A reading supported by observation, evidence, and a review condition." }
      ],
      whyThisMatters: "Most poor readings fail before the chart does anything. They fail because the learner cannot explain what they observed, what evidence supports it, or what would make the idea invalid.",
      realLifeExample: "A learner sees price moving fast and wants to call it strong. The gate forces them to slow down and ask whether structure actually changed or whether they are only reacting to motion.",
      commonMistake: "Treating a strong feeling as evidence. Speed, excitement, and confidence are not enough to pass the gate.",
      quickNote: "If you cannot answer the three questions, the correct label is unclear."
    }
  },
  {
    type: "practice",
    title: "Training Drill: The Hype Trap",
    visualKey: "hype-trap-path",
    label: "Practical Drill",
    body: "Scenario: You watch a short online video claiming a specific candle pattern works well. Later, you open the Lab and see a similar-looking candle. Because the video is fresh in your memory, you feel tempted to use the idea immediately.",
    taskData: {
      type: "choice_block",
      question: "What is the correct Lurnava response?",
      options: [
        {
          id: "A",
          text: "Apply the pattern immediately because the candle looks similar and you want to see a win.",
          isCorrect: false,
          feedback: "Not correct. This is impulse driven by familiarity, not evidence. A similar-looking candle is not enough to justify action. Lurnava requires context and reasoning, not visual resemblance alone."
        },
        {
          id: "B",
          text: "Change timeframes repeatedly until the idea appears correct so you can justify the action.",
          isCorrect: false,
          feedback: "Not correct. Changing timeframes until the idea looks valid is a form of self-justification. This is not analysis. It is a bias-driven attempt to force confirmation."
        },
        {
          id: "C",
          text: "Identify the actual concept, check the chart context for evidence, practice it deliberately in the simulator, and write a review note.",
          isCorrect: true,
          feedback: "Correct. A Lurnava learner does not act because something 'looks familiar.' They identify the concept, check context, verify evidence, practice deliberately, and record reasoning. That is how skill is built.\n\n**Lurnava Principle**: Recognition is not enough. Evidence must confirm the reading."
        },
        {
          id: "D",
          text: "Skip the journal entry and the reasoning because this is only a practice session.",
          isCorrect: false,
          feedback: "Not correct. Practice without recording reasoning weakens the learning loop. In Lurnava, deliberate practice must produce reviewable logic, not just activity."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Hype trap", definition: "A psychological state where urgency and familiarity replace objective analysis." },
        { term: "Context", definition: "The broader chart environment surrounding a specific signal." },
        { term: "Evidence", definition: "The objective facts required to validate a reading." },
        { term: "Deliberate practice", definition: "Focused training on a specific concept with a review note." },
        { term: "Review note", definition: "The recorded logic used to audit a decision later." }
      ],
      whyThisMatters: "Many learners mistake familiarity for proof. Seeing a chart that looks similar to a recent video idea can create false confidence. Lurnava trains the learner to slow down, verify context, and act only through structure.",
      realLifeExample: "A learner watches a video about a candle setup in the morning. At night, they open the Lab, see a vaguely similar candle, and feel convinced they found the same idea. Without checking market structure or evidence, they are tempted to act too quickly.",
      commonMistake: "Using a remembered idea before verifying whether the concept, context, and evidence are actually present on the chart.",
      quickNote: "Similarity is not validity. A chart can look familiar without confirming the same reading."
    }
  },
  {
    type: "summary",
    title: "Debrief: What You Are Being Trained For",
    visualKey: "orientation-debrief",
    label: "Final Review",
    body: "You are being trained to **explain your reading** with objective logic. You are not here to memorize 'magic' tips or react to every flickering movement on the screen. True skill in this academy comes from clarity and a repeatable process, not just confidence or speed. \n\nEvery reading you record and every journal entry you save is data that helps you understand your own thinking patterns. Commit to the simulator. Commit to the journal. Commit to the loop. This discipline is what separates the trained learner from the random guesser.\n\n**Next**: We move from the 'How' to the 'What.' In Module 0.2, you will study what a market actually is: an interaction between buyers, sellers, available orders, and the resulting price."
  }
];
