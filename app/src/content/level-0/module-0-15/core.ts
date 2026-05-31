import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.15 - Specialized Final Level 0 Capstone Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Your Final Level 0 Mission",
    label: "Foundation Mission",
    visualKey: "level-0-foundation-mission-brief",
    body: "You have reached the final checkpoint of Level 0. This module is not a new theory lesson and it is not a simple quiz. It is your final Level 0 mission. You will be tested on whether you can combine everything you have studied—market mechanics, candle records, dual-timeframe structure, conditions, locations, evidence stack auditing, asset-specific traps, practice discipline, and review note writing—into one complete, disciplined reading workflow. Prove your skill, build your final reading, and prepare for promotion to Level 1.",
    context: {
      keyTerms: [
        { term: "Final mission", definition: "A capstone synthesis exercise that tests your ability to apply all Level 0 skills in a single workflow." },
        { term: "Synthesis", definition: "Combining separate pieces of knowledge—such as location, structure, and condition—into a unified market reading." },
        { term: "Workflow", definition: "The step-by-step sequence of observation, auditing, decision-making, and note-writing." },
        { term: "Promotion gate", definition: "The final readiness checkpoint you must pass before you are permitted to begin Level 1 training." },
        { term: "Market reading", definition: "The process of analyzing price charts using objective structure and evidence rather than guessing." }
      ],
      whyThisMatters: "To read live markets successfully, you cannot treat lessons as isolated facts. You must run the entire workflow together on every chart.",
      realLifeExample: "Before entering a live session, a professional runs the complete pipeline: mapping structure first, check session edges, stack indicators, define exit targets, and prepare logs.",
      commonMistake: "Rushing into advanced levels of execution because you finished reading the lessons, without proving you can follow the complete workflow.",
      quickNote: "You are not ready because you know the definitions. You are ready when you can run the entire workflow on a raw chart."
    }
  },
  {
    type: "visual_intro",
    title: "Start With Raw Observation",
    label: "Observation Layer",
    visualKey: "raw-observation-mission-layer",
    body: "The first step of the Lurnava workflow is raw observation. When you open a chart, your brain immediately wants to form opinions or make predictions like 'it's going up' or 'this is manipulation.' You must block these impulses. Your first task is to write down only the visible facts on the screen. Strip out your opinions, biases, and predictions, leaving only measurable chart details.",
    context: {
      keyTerms: [
        { term: "Objective fact", definition: "A visible, verifiable detail on the chart, such as a swing high break or support hold, that contains no personal opinion." },
        { term: "Raw observation", definition: "Listing only the visible chart coordinates and candle behaviors before assigning any directional bias." },
        { term: "Assumption trap", definition: "Falsely treating your own predictions or feelings of what will happen as if they were visible chart facts." },
        { term: "Verification baseline", definition: "The starting list of observable chart details that you will use to build your evidence stack." },
        { term: "Market noise", definition: "Choppy price movements that carry no clear structure or structural clues." }
      ],
      whyThisMatters: "If you start with assumptions, you will selectively look for clues that prove your bias correct, ignoring conflicting evidence.",
      realLifeExample: "You look at EUR/USD and note: 'Price is testing the prior London high, candle closed with a long upper wick.' You do not write: 'It's going to dump.'",
      commonMistake: "Labeling a chart as 'bullish' or 'bearish' before listing the actual candle close locations and structural levels.",
      quickNote: "Observe first, classify second. Write down what the chart is doing, not what you think it will do."
    }
  },
  {
    type: "visual_intro",
    title: "Timeframe and Structure Set the Map",
    label: "Map Layer",
    visualKey: "timeframe-structure-mission-map",
    body: "Once you have recorded your observations, you must map the structural boundaries. This requires a dual-timeframe check. A lower-timeframe candle may look like a strong breakout, but if it forms in the middle of a higher-timeframe range, it is simply midpoint noise. You must locate the lower-timeframe movement inside the higher-timeframe map to see the true structure.",
    context: {
      keyTerms: [
        { term: "Dual-timeframe check", definition: "Reviewing the higher-timeframe chart to set the structural map before reading the lower-timeframe detail." },
        { term: "HTF context", definition: "The dominant structural state (such as range edges or daily trends) on the higher-timeframe chart." },
        { term: "LTF detail", definition: "The local candle movements and short-term structure changes visible on the lower-timeframe chart." },
        { term: "Swing boundaries", definition: "The recent major high and low points that define the active range box." },
        { term: "Map alignment", definition: "Checking whether the lower-timeframe clues agree with the higher-timeframe structural directions." }
      ],
      whyThisMatters: "Without a map, you will chase local wicks and breakouts directly into higher-timeframe support floors and resistance ceilings.",
      realLifeExample: "You see a strong green candle on the 15m chart. You check the 4H chart and find that this move is directly inside a daily resistance ceiling, warning you not to buy.",
      commonMistake: "Zooming in on the lowest timeframe and trading local candle wiggles without knowing where they are on the daily map.",
      quickNote: "The HTF shows you where the battlefield is. The LTF shows you the immediate candle behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Condition and Location Decide Reading Quality",
    label: "Condition + Location",
    visualKey: "condition-location-mission-crosscheck",
    body: "A candlestick pattern does not carry a fixed meaning. Its reliability depends entirely on the market condition and chart location. A strong candle printed in a clean trend at a daily support floor is a high-quality clue. The exact same candle printed in the middle of a choppy range is noise. You must cross-check condition and location before trusting any evidence.",
    context: {
      keyTerms: [
        { term: "Market condition", definition: "The environmental state of the chart (such as trend, range, transition, or choppy noise)." },
        { term: "Market location", definition: "The position of price relative to key reaction zones (such as range edges, prior high/low, or empty space)." },
        { term: "Cross-check", definition: "Combining condition and location evaluations to determine the reliability score of a chart clue." },
        { term: "Reading quality", definition: "The reliability score of a chart reading based on the type of market evidence present." },
        { term: "Zone priority", definition: "Grading reaction areas based on whether they are high-priority edges or low-priority midpoints." }
      ],
      whyThisMatters: "Failing to cross-check location and condition leads you to treat every candle pattern with equal weight, resulting in poor trades in messy ranges.",
      realLifeExample: "You identify a bullish engulfing candle. You check the coordinates: Location is range midpoint, Condition is choppy noise. You downgrade the reading quality to weak.",
      commonMistake: "Trading wicks and close wiggles when price is trapped in a sideways range midpoint.",
      quickNote: "First check the environment (condition) and the address (location). Only then read the message (candle)."
    }
  },
  {
    type: "visual_intro",
    title: "Build the Evidence Stack",
    label: "Evidence Stack",
    visualKey: "foundation-evidence-stack-builder",
    body: "A professional market reader never builds an analysis around a single clue. You must compile an evidence stack. You layer timeframe alignment, structure status, market condition, location priority, close quality, follow-through hold, and asset-specific context. If the stack is aligned, the reading is clear. If clues conflict, the reading is mixed or unclear.",
    context: {
      keyTerms: [
        { term: "Evidence stack", definition: "The combined list of clues (structure, location, close quality) that supports a reading." },
        { term: "Confluence", definition: "A state where multiple independent chart clues point to the same structural conclusion." },
        { term: "Conflicting evidence", definition: "Chart clues that oppose each other, reducing the clarity of the reading." },
        { term: "Clarity grading", definition: "Classifying a chart reading as Clear, Mixed, or Unclear based on evidence stack alignment." },
        { term: "Asset context", definition: "Checking specific background factors (such as session times or derivatives data) unique to that market." }
      ],
      whyThisMatters: "A single clue is easily faked. An aligned evidence stack represents a true imbalance in market participant order flow.",
      realLifeExample: "You log: Location (edge), Structure (bullish hold), Close quality (strong hold), USD context (weak). These four aligned clues build a clear reading.",
      commonMistake: "Forcing a bullish or bearish conclusion when half of the clues in your stack are actively conflicting.",
      quickNote: "Count the clues. If they do not agree, do not try to guess which one is right."
    }
  },
  {
    type: "visual_intro",
    title: "Check Asset-Specific Traps",
    label: "Asset Trap Check",
    visualKey: "asset-specific-trap-check",
    body: "Every roadway has its own unique trap patterns. Before finalizing your evidence stack, you must check the asset-specific checklist. Forex requires auditing session handoffs and DXY context. Gold requires checking wick validity and macro news. Crypto requires auditing venue disagreement, perpetual contract funding, and liquidation flushes. Clear your asset checklist to protect your reading.",
    context: {
      keyTerms: [
        { term: "Asset trap", definition: "A false chart breakout or behavior pattern unique to a specific asset roadway." },
        { term: "DXY mirror trap", definition: "Falsely analyzing a major currency pair without checking if the US Dollar Index is at a key level." },
        { term: "Macro news distortion", definition: "Extreme price volatility and wicks caused by news releases, which temporarily mask structure." },
        { term: "Venue disagreement", definition: "A condition in crypto where price wicks appear on one CEX or DEX but do not exist on other liquid markets." },
        { term: "Liquidation flush", definition: "A rapid price move driven by perpetual contract liquidations rather than organic spot buying or selling." }
      ],
      whyThisMatters: "If you ignore roadway personality, you will treat a local crypto liquidation wick or a news spike on gold like a broad trend break.",
      realLifeExample: "Before calling a gold breakout valid, you check the news calendar and confirm that the spike is not an unstable reaction to a major announcement.",
      commonMistake: "Reading all assets with the exact same checklist, ignoring that crypto has liquidations and gold has high volatility.",
      quickNote: "Different markets have different rules. Verify the asset-specific checklist before the click."
    }
  },
  {
    type: "visual_intro",
    title: "Write the Verification Question",
    label: "Verification",
    visualKey: "verification-question-mission-board",
    body: "Confidence is not verification. To prove your reading is objective, you must write a verification question. The verification question defines the exact price behavior that must happen next before your reading can be trusted. It turns vague confidence into a testable condition, stopping you from chasing moves.",
    context: {
      keyTerms: [
        { term: "Verification question", definition: "A specific, testable question that defines what must happen next to confirm or weaken your reading." },
        { term: "Falsifiable condition", definition: "A written price behavior that can be proven false by simple observation of the next candles." },
        { term: "Urgency filter", definition: "Using the verification question to pause your actions when price moves very quickly." },
        { term: "Follow-through check", definition: "Verifying whether the next candle holds above the level or immediately reverses." },
        { term: "Logic baseline", definition: "The original reasoning you check your verification results against." }
      ],
      whyThisMatters: "Writing the verification question slows you down, preventing you from entering trades right before price wicks back.",
      realLifeExample: "Instead of asking 'Is this going to breakout?', you ask: 'Does the next H4 candle close and hold above the range ceiling ($64,500)?'",
      commonMistake: "Rushing to act because price is moving fast, without defining what would prove the breakout is actually holding.",
      quickNote: "If you cannot write a yes/no verification question, your reading is not ready."
    }
  },
  {
    type: "visual_intro",
    title: "Choose Action, Stand Aside, or Wait",
    label: "Practice Decision",
    visualKey: "practice-decision-mission-gate",
    body: "After running the workflow, you must select your simulator action. If the reading is clear and you have a written invalidation, action may be valid. If the reading is mixed, the correct choice is to wait for verification. If the chart is in chop, the correct choice is active idle. A disciplined decision is driven by reading quality, not boredom.",
    context: {
      keyTerms: [
        { term: "Practice action", definition: "A deliberate decision made in the simulator—such as selecting a reading or choosing to stand aside." },
        { term: "Active idle", definition: "Choosing to take no trading action because the market lacks clear structure or evidence." },
        { term: "Wait state", definition: "Choosing to monitor the chart until a specific verification condition is met before acting." },
        { term: "Cognitive control", definition: "The ability to suppress the emotional urge to act when your rules are not met." },
        { term: "Reading alignment", definition: "Ensuring your practice action matches the clarity grade of your evidence stack." }
      ],
      whyThisMatters: "If you treat every practice session like a prompt to trade, you will build the habit of forcing setups when the market is printing noise.",
      realLifeExample: "You evaluate a choppy USD/JPY chart, classify it as mixed, and select 'Wait for London Open breakout' as your disciplined action.",
      commonMistake: "Thinking a practice session is wasted if you do not enter a simulated position. Standing aside is a valid action.",
      quickNote: "Patience is a choice. Only click when your checklist is complete."
    }
  },
  {
    type: "visual_intro",
    title: "Prepare the Review Note Before the Result",
    label: "Review Note Prep",
    visualKey: "review-note-prep-mission-board",
    body: "The final step of the Level 0 workflow is note preparation. Before you advance the simulator or see what happened next, you must write down your pre-action reasoning. Stating your evidence, location priority, and review condition before the result prevents your brain from rewriting history. This is how you build a clean, reviewable practice database.",
    context: {
      keyTerms: [
        { term: "Pre-action reasoning", definition: "Writing down or stating your logic and evidence before touching any trading buttons." },
        { term: "Review condition", definition: "The specific chart event or price level that tells you your original reading is no longer correct." },
        { term: "Hindsight bias", definition: "The tendency to believe, after an event has occurred, that you predicted or expected it." },
        { term: "Practice database", definition: "The collection of your own practice notes that reveals your historical habits and progress." },
        { term: "Clean record", definition: "A journal or database that contains only process-compliant, evidence-backed practice sessions." }
      ],
      whyThisMatters: "Writing notes before the result is the only way to expose real errors in your logic and prevent false confidence.",
      realLifeExample: "You log: Context (Range low), Location (edge), Invalidation (close below floor). You then advance the simulator to audit the result.",
      commonMistake: "Waiting until after the simulator shows a win or loss to write down why you think you made the decision.",
      quickNote: "Freezing your thoughts in writing before the result is the key to elite practice."
    }
  },
  {
    type: "practice",
    title: "Final Drill: Build the Level 0 Reading",
    label: "Final Practice Drill",
    visualKey: "level-0-final-reading-drill",
    taskData: {
      type: "choice_block",
      question: "A learner opens a simulator scenario. Price is near the upper edge of a wide range on the higher timeframe. On the lower timeframe, a strong candle pushes above the range edge, but the close is weak and the next candle hesitates. The move forms during an active session, but asset-specific context is mixed: one supporting clue appears, one conflicting clue appears, and follow-through is not confirmed yet. The learner feels pressure to act quickly before the move 'gets away.' What is the most disciplined Level 0 response?",
      options: [
        {
          id: "opt1",
          text: "Act immediately because the lower-timeframe candle broke above the range edge.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. One lower-timeframe break is not enough when the close is weak, context is mixed, and follow-through is missing. Acting now is chasing."
        },
        {
          id: "opt2",
          text: "Classify the reading as mixed, write a specific verification condition (e.g., 'Does the next 4H candle close and hold above the range high?'), and wait for proof.",
          isCorrect: true,
          grade: "best",
          feedback: "Correct! This is disciplined Level 0 behavior. The learner identifies the mixed context, sets a falsifiable verification question, and avoids acting out of urgency."
        },
        {
          id: "opt3",
          text: "Ignore the scenario completely because mixed readings are useless for your practice database.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. A mixed reading is highly valuable. It tells you that there is no clear structural edge, indicating you must wait or stand aside."
        },
        {
          id: "opt4",
          text: "Act because feeling urgency usually means a significant market breakout is occurring.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. Urgency is an emotional reaction to candle speed, not chart evidence. Acting on urgency is a process failure."
        }
      ]
    },
    body: "Analyze the scenario metrics. Compare the HTF location, LTF candle close quality, asset context status, and the learner's emotional state. Use the final mission classifier tool to evaluate the reading and choose the most disciplined action.",
    context: {
      keyTerms: [
        { term: "Mixed reading", definition: "A market state where some clues align but other evidence actively conflicts, indicating no clear edge." },
        { term: "Verification condition", definition: "The specific price event that must occur to confirm a breakout before action is valid." },
        { term: "Urgency reaction", definition: "An impulsive click triggered by fast candles, violating cockpit checklist discipline." },
        { term: "Breakout confirmation", definition: "Verifying that price can close and build a consolidation base above a structural boundary." },
        { term: "Disciplined wait", definition: "Choosing to stay inactive while waiting for your written verification conditions to be met." }
      ],
      whyThisMatters: "Passing this final drill proves you can manage urgency and apply the complete workflow under simulated market pressure.",
      realLifeExample: "You see Bitcoin breakout. You note that the close is weak, tag it as mixed, write your verification level, and wait. The breakout fails and you protect your capital.",
      commonMistake: "Failing to check follow-through when price spikes, leading you to buy at the absolute top of fake breakout wicks.",
      quickNote: "Urgency is a trap. If the breakout is real, it will hold and give you plenty of time to read it."
    }
  },
  {
    type: "debrief",
    title: "Level 0 Debrief: You Are Ready to Train the Next Layer",
    label: "Foundation Debrief",
    visualKey: "level-0-foundation-mission-debrief",
    body: "Congratulations. You have completed the Level 0 Market Reading Foundations. You have proven that you can observe facts objectively, map timeframe and structure, cross-check condition and location, stack evidence, audit roadway-specific traps, define verification, make disciplined decisions, and record your results. You have built the cognitive foundation and the cockpit discipline required to begin Level 1 training, where you will study the actual mechanics of institutional order flow.",
    context: {
      keyTerms: [
        { term: "Readiness standard", definition: "The mastery checklist of 9 core skills required to graduate from Level 0." },
        { term: "Level 1 training", definition: "The next phase of Lurnava education, focusing on order matching, liquidity pools, and execution." },
        { term: "Cockpit discipline", definition: "The habit of following a structured check sequence before taking any action on the chart." },
        { term: "Factual reading", definition: "Market analysis built strictly on verifiable swing boundaries and closes rather than prediction." },
        { term: "Learning record", definition: "The complete history of your practice notes that proves your compliance over time." }
      ],
      whyThisMatters: "Level 1 assumes you can read structure and location automatically. This debrief verifies you have built that baseline skill.",
      realLifeExample: "A learner completes Level 0, reviews their journal of 30 clean notes, and confidently enters Level 1 knowing their foundation is solid.",
      commonMistake: "Forgetting your Level 0 workflow as soon as you start learning Level 1 execution concepts.",
      quickNote: "The foundation is the house. Keep your Level 0 discipline active as you build the next layers."
    }
  }
];
