import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.14 - Specialized Practice Note Lab Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "A Practice Note Turns One Attempt Into Learning Evidence",
    label: "Practice Note Foundation",
    visualKey: "practice-note-lab-foundation",
    body: "A simulator practice session only builds skill when it leaves behind a reviewable trace. A practice note is not a personal diary and it is not a place to blame the market for a bad outcome. Instead, it is a brief, structured record of what you observed, what you decided, what condition would prove your reading weak, and what lesson you will carry into your next session. By writing down your thinking immediately after the attempt, you turn a single simulator click into permanent learning data.",
    context: {
      keyTerms: [
        { term: "Practice note", definition: "A structured, written summary of your reasoning, chart evidence, and review condition recorded after a practice attempt." },
        { term: "Review condition", definition: "A specific price level or chart event that would prove your original market reading is no longer valid." },
        { term: "Learning log", definition: "A collection of practice notes used to track your analytical progress over multiple sessions." },
        { term: "Objective fact", definition: "A visible, verifiable detail on the chart, such as a swing high break or support hold, that contains no personal opinion." },
        { term: "Process audit", definition: "Evaluating a practice attempt based on how well you followed the rules rather than whether the trade made virtual profit." }
      ],
      whyThisMatters: "If you do not document your simulation sessions, your memory of the mistakes will fade, causing you to repeat the same errors in live markets.",
      realLifeExample: "A learner completes a simulator session, records a quick note detailing the structural breakout they observed, and notes where they were wrong. A week later, they review the note to refresh their memory of that setup.",
      commonMistake: "Closing the simulator without writing anything down, assuming you will naturally remember what you learned.",
      quickNote: "If the session leaves no note, it was busy activity, not deliberate training."
    }
  },
  {
    type: "visual_intro",
    title: "The Lurnava Standard Note Template",
    label: "Note Structure",
    visualKey: "standard-practice-note-template",
    body: "To make your practice history useful, you must use a consistent format. Writing random paragraphs or chaotic sentences makes comparing past sessions impossible. The Lurnava Standard Note Template divides your practice record into distinct, audit-ready fields. Each field forces you to separate your initial reasoning, the market's response, and your final process score.",
    context: {
      keyTerms: [
        { term: "Standard template", definition: "A fixed layout of fields used for every practice note to keep records clean and searchable." },
        { term: "Context field", definition: "The section of a note that records the higher-timeframe environment and market state." },
        { term: "Pre-action reasoning", definition: "The specific list of chart clues and evidence you identified before taking action." },
        { term: "Process compliance", definition: "A score showing how closely you followed the training checklist rules during the attempt." },
        { term: "Mistake tag", definition: "A short, searchable label added to a note to flag process errors like chasing or boredom clicks." }
      ],
      whyThisMatters: "Standardizing your notes ensures you can review dozens of past practice runs in minutes, quickly identifying where your logic breaks.",
      realLifeExample: "You use a structured template to log a gold practice run: Roadway (Gold), Context (Daily range low), Pre-action reasoning (15m close above support), Review condition (Close below support floor).",
      commonMistake: "Writing a long, messy story about what happened instead of filling out standard structural fields.",
      quickNote: "A standard note makes mistakes easier to compare and track later."
    }
  },
  {
    type: "visual_intro",
    title: "Facts First, Feelings Second",
    label: "Objective Language",
    visualKey: "facts-vs-feelings-note-board",
    body: "The vocabulary you use in your notes directly shapes how you read charts. Weak notes rely on emotional, subjective words like 'seems,' 'looks,' or 'hope.' Strong notes use objective, structural verbs that describe verifiable chart events. To build real skill, you must learn to strip out feeling and record only visible evidence.",
    context: {
      keyTerms: [
        { term: "Objective facts", definition: "Observable and measurable events on the chart, such as candle closes or swing levels." },
        { term: "Emotional explanation", definition: "Describing chart behavior using personal feelings, biases, or wishes rather than structure." },
        { term: "Structural verb", definition: "An action word that describes a specific price event, such as 'swept,' 'held,' or 'closed outside.'" },
        { term: "Vague description", definition: "Using words like 'seems strong' or 'looks good' which cannot be measured or verified." },
        { term: "Note audit", definition: "Reviewing your notes to replace emotional terms with objective, structural descriptions." }
      ],
      whyThisMatters: "If your notes are filled with vague feelings, you will keep making decisions based on intuition rather than real chart structure.",
      realLifeExample: "Instead of writing: 'The chart looked really bullish and fast,' a disciplined reader writes: 'Price closed above the daily range ceiling on high volume.'",
      commonMistake: "Confusing a strong personal feeling of confidence with objective, visible chart evidence.",
      quickNote: "Strip out the fluff. If a detail cannot be verified by another person looking at the chart, do not write it."
    }
  },
  {
    type: "visual_intro",
    title: "Pre-Action Reasoning Makes the Note Reviewable",
    label: "Pre-Action Reasoning",
    visualKey: "pre-action-reasoning-note",
    body: "Hindsight bias is the tendency to believe you predicted an outcome after it has already occurred. To protect your learning loop from this trap, your note must record your reasoning before you know the result. A useful practice note separates what you thought at the time of the click from what the market did afterward, exposing where your logic actually failed.",
    context: {
      keyTerms: [
        { term: "Pre-action reasoning", definition: "Stating or writing down your analytical logic and evidence before executing a simulator action." },
        { term: "Hindsight bias", definition: "The psychological bias that makes you believe you knew the outcome all along, masking process errors." },
        { term: "Evidence stack", definition: "The combined list of clues (structure, location, close quality) that supports a reading." },
        { term: "Uncertainty factor", definition: "Acknowledging what information is missing or unclear on the chart before you act." },
        { term: "Cognitive record", definition: "The baseline snapshot of your thinking before it is influenced by the market result." }
      ],
      whyThisMatters: "If you only write notes after the trade is over, you will rewrite history in your mind to make yourself feel correct.",
      realLifeExample: "Before playing a simulator scenario forward, you write: 'Buying at support low because 15m candle swept the floor. Invalidation: close below support.' This protects your original thoughts.",
      commonMistake: "Entering a simulated trade, waiting for it to win, and then writing a note that makes it sound like you were 100% certain.",
      quickNote: "Stating your reason before the result keeps you honest and exposes real process errors."
    }
  },
  {
    type: "visual_intro",
    title: "Write the Review Condition Clearly",
    label: "Review Condition",
    visualKey: "review-condition-writing-lab",
    body: "A review condition is your logical exit point. It is the exact event or level that tells you your original reading is no longer valid. If your review condition is vague, you will make excuses to stay in bad trades. To prevent this, you must write your review conditions with specific, falsifiable criteria.",
    context: {
      keyTerms: [
        { term: "Review condition", definition: "A specific price level or chart event that would prove your original market reading is no longer valid." },
        { term: "Falsifiable criteria", definition: "Statements that can be proven wrong by clear, observable facts rather than opinion." },
        { term: "Vague invalidation", definition: "Using unclear conditions like 'if it reverses' or 'if it looks bad' that cannot be measured." },
        { term: "Logical exit", definition: "Choosing to close a simulated position cleanly because your evidence stack has broken." },
        { term: "Boundary level", definition: "A drawn line or zone that marks the limit of your analytical idea." }
      ],
      whyThisMatters: "A clear, written review condition stops you from hoping for reversals when price is actively breaking your support levels.",
      realLifeExample: "Instead of writing: 'I will exit if the market turns,' you write: 'If price closes and holds below the daily support zone ($1.0820), my bullish reading is invalid.'",
      commonMistake: "Failing to define a specific invalidation price, leaving you to guess what to do when price moves against you.",
      quickNote: "A review condition must be so clear that a stranger looking at the chart could tell if it was hit."
    }
  },
  {
    type: "visual_intro",
    title: "Result Is Not the Same as Process Quality",
    label: "Process Audit",
    visualKey: "process-quality-note-audit",
    body: "In early training, the outcome of a simulator trade does not define its value. A guessed win is still a process failure because it reinforces random, dangerous habits. A disciplined loss is a process success because you followed your rules and exited cleanly at your review condition. Your note must evaluate the compliance of your actions, not the virtual PnL.",
    context: {
      keyTerms: [
        { term: "Process compliance", definition: "A score or grade showing how closely you followed your checklist rules during the attempt." },
        { term: "Guessed win", definition: "A winning trade that had no logical basis, reinforcing dangerous random habits." },
        { term: "Disciplined loss", definition: "A losing trade that was entered on good evidence and exited cleanly at the invalidation trigger." },
        { term: "Process audit", definition: "Reviewing your notes to score your discipline rather than your simulated account balance." },
        { term: "Outcome bias", definition: "Judging a decision's quality by its final result rather than the information available at the time." }
      ],
      whyThisMatters: "Focusing on virtual profit makes you feel successful when you make lucky guesses, setting you up for large losses later.",
      realLifeExample: "You lose a simulated trade but record a process score of 100% because you checked location, context, and exited exactly at your invalidation line.",
      commonMistake: "Fearing simulated losses, leading you to hide or delete losing notes from your practice database.",
      quickNote: "The PnL belongs to the market. The process compliance belongs to you."
    }
  },
  {
    type: "visual_intro",
    title: "Mistake Tags Reveal Repeated Patterns",
    label: "Mistake Tags",
    visualKey: "mistake-tagging-framework",
    body: "Making mistakes is a natural part of learning, but repeating the same mistake without realizing it stops your progress. A mistake tag is a simple, standardized label you add to your notes. By tagging your errors, you can quickly filter your practice history to see exactly which behavioral traps are draining your performance.",
    context: {
      keyTerms: [
        { term: "Mistake tag", definition: "A short, searchable label added to a note to flag process errors like chasing or boredom clicks." },
        { term: "Boredom click", definition: "Entering trades or changing analysis out of boredom or a desire for stimulation rather than evidence." },
        { term: "Candle chasing", definition: "Buying green candles or selling red candles purely because they are large and fast." },
        { term: "Location ignore", definition: "Acting on a candle pattern while ignoring that price is in a low-priority middle zone." },
        { term: "Pattern detection", definition: "Analyzing your logs over time to find which mistakes you repeat most frequently." }
      ],
      whyThisMatters: "Without mistake tags, your past errors remain a blurry list of failures. Tags turn them into clear statistics you can target.",
      realLifeExample: "You review your logs for the week and see that out of 5 losses, 4 are tagged with `#boredom-click`. You now know exactly what habit to focus on next week.",
      commonMistake: "Using different labels every time you make a mistake, making it impossible to filter and analyze your data.",
      quickNote: "Name your errors. If you cannot track the mistake, you cannot fix it."
    }
  },
  {
    type: "visual_intro",
    title: "A Stand-Aside Note Still Counts",
    label: "Stand-Aside Note",
    visualKey: "stand-aside-note-format",
    body: "Many beginners believe that if they do not enter a simulated trade, they have nothing to write down. This is incorrect. Choosing to stand aside (Active Idle) is a high-level practice action. A stand-aside note documents why the market was unclear, what evidence was missing, and what you would need to see before assigning a clear reading.",
    context: {
      keyTerms: [
        { term: "Stand-aside note", definition: "A practice note recorded when you deliberately choose to take no action due to market noise or lack of evidence." },
        { term: "Active idle", definition: "Choosing to take no trading action because the market lacks clear structure or evidence." },
        { term: "Messy context", definition: "A market state characterized by overlapping candles, range congestion, or conflicting clues." },
        { term: "Missing evidence", definition: "The specific chart details that were absent, preventing a valid reading." },
        { term: "Discipline trophy", definition: "Viewing a stand-aside note as a positive record of self-control rather than a wasted session." }
      ],
      whyThisMatters: "Stand-aside notes train your patience and build your ability to identify low-information market environments.",
      realLifeExample: "You review a choppy Bitcoin chart, write 'No structure, sideways chop. Missing sweep. Standing aside,' and save the note. You just practiced active discipline.",
      commonMistake: "Feeling frustrated when a practice session has no trades, leading you to force entries just to have something to log.",
      quickNote: "A clean stand-aside note is a record of discipline, not a blank page."
    }
  },
  {
    type: "visual_intro",
    title: "Replay and Missed-Opportunity Notes Need One Focus",
    label: "Replay / Missed Opportunity",
    visualKey: "replay-missed-opportunity-note",
    body: "Specialized note formats help you capture different learning situations. A replay note does not record a new trade; it documents what specific process error you corrected during the replay. A missed-opportunity note is not for regret; it records what rule or lack of confidence stopped you from acting on clean evidence.",
    context: {
      keyTerms: [
        { term: "Replay note", definition: "A log entry that records the specific process correction you practiced during a scenario replay." },
        { term: "Missed-opportunity note", definition: "A note detailing a clean setup that you identified but chose not to act on, used to audit hesitation." },
        { term: "Process correction", definition: "Identifying the specific checklist step you missed and focusing on it during the replay." },
        { term: "Regret filter", definition: "Stripping self-blame out of your notes to focus strictly on structural facts." },
        { term: "Confidence audit", definition: "Analyzing whether hesitation came from a lack of evidence or emotional fear." }
      ],
      whyThisMatters: "Using specialized formats ensures that every type of practice experience—including failures and omissions—is captured as clean learning data.",
      realLifeExample: "You miss a valid breakout. You log it as a missed-opportunity note, listing the evidence that was present, and note that you hesitated due to a past loss.",
      commonMistake: "Writing missed-opportunity notes filled with self-blame, treating them as diary entries instead of objective reviews.",
      quickNote: "Log the lesson, delete the regret."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Rewrite the Weak Note",
    label: "Practice Drill",
    visualKey: "practice-note-rewrite-drill",
    taskData: {
      type: "choice_block",
      question: "A learner writes this note after a simulator attempt: 'Bad trade. I thought it would go up because it looked strong. Then it reversed. I should have waited.' What is the best improvement?",
      options: [
        {
          id: "opt1",
          text: "Keep it as is, because it honestly explains the result and captures the learner's frustration.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. The note describes frustration but contains no structural facts, pre-action reasoning, or review condition. It is useless for future review."
        },
        {
          id: "opt2",
          text: "Rewrite it using the standard template: Context (Daily Range Midpoint), Pre-Action Reasoning (Chased 15m spike), Review Condition (None), Result (Loss), Mistake Tag (#chasing), Lesson (Do not buy wicks in range centers).",
          isCorrect: true,
          grade: "best",
          feedback: "Correct! This rewrite separates facts from feelings, logs the mistake tag, and extracts a clear process lesson that can be audited later."
        },
        {
          id: "opt3",
          text: "Delete the note completely because losing attempts are not useful for your long-term practice database.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. Losing attempts are highly valuable learning logs if you structure and review their process errors cleanly."
        },
        {
          id: "opt4",
          text: "Change the note to blame market manipulation, as this keeps your confidence high for the next session.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. Blaming the market prevents you from identifying your own process errors and stops your skill development."
        }
      ]
    },
    body: "Analyze the learner's original note. Identify the missing fields and the emotional language. Use the rewrite tool to choose the option that best transforms this diary entry into a structured practice note.",
    context: {
      keyTerms: [
        { term: "Diary entry", definition: "A note that focus on feelings, frustration, or market blame instead of objective facts." },
        { term: "Note rewrite", definition: "The practice of re-formatting a weak, emotional note into a structured, fact-based log." },
        { term: "Process compliance", definition: "Following your checklist rules exactly, regardless of emotional urges." },
        { term: "Auditable data", definition: "Practice logs that are clear and standardized enough to be searched and analyzed later." },
        { term: "Lesson field", definition: "The part of the note that defines one concrete action to improve or maintain in the next session." }
      ],
      whyThisMatters: "Learning to rewrite weak notes is how you build the mental habit of translating raw chart experiences into objective lessons.",
      realLifeExample: "You review your journal, find a note saying 'Market is trash today,' and force yourself to rewrite it to list the actual choppy range boundaries you ignored.",
      commonMistake: "Accepting vague, emotional sentences in your journal because writing structured notes takes slightly more effort.",
      quickNote: "A good note does not protect your ego. It protects your learning."
    }
  },
  {
    type: "debrief",
    title: "Debrief: A Good Note Makes the Next Session Cleaner",
    label: "Practice Note Debrief",
    visualKey: "practice-note-lab-debrief",
    body: "A successful practice note is not measured by its length or how smart it makes you look. A good note is simple, structured, factual, and actionable. By committing to the Lurnava Standard Note Template, separating objective facts from emotional fluff, defining clear review conditions, and logging mistake tags, you turn your simulator logs into a powerful personal database that systematically eliminates errors and builds professional reading quality.",
    context: {
      keyTerms: [
        { term: "Clean log standard", definition: "The rule that your journal should only contain structured, fact-based logs with clear review conditions." },
        { term: "Actionable lesson", definition: "A specific, measurable target for improvement that you can check in the next session." },
        { term: "Personal database", definition: "The collection of your own practice logs that reveals your historical habits and progress." },
        { term: "Writing discipline", definition: "The habit of taking 2 minutes after every simulator run to document your reasoning cleanly." },
        { term: "Audit compliance", definition: "The measure of how closely your written logs match standard template requirements." }
      ],
      whyThisMatters: "Building a clean practice log is how you transition from a random clicker to a structured, data-driven market analyst.",
      realLifeExample: "You finish your week with 10 practice notes. Every note follows the template, lists facts, and contains a mistake tag where relevant. You have built a clean learning record.",
      commonMistake: "Stopping your notes once your simulator PnL goes green, missing the chance to document what worked.",
      quickNote: "Do not write notes for the result. Write notes for the process."
    }
  }
];
