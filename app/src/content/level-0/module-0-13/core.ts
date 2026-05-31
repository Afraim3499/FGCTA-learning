import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.13 - Specialized Practice Discipline Lab Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Practice Is Training, Not Clicking",
    label: "Practice Lab Foundation",
    visualKey: "practice-discipline-lab-foundation",
    body: "A simulator is only useful when the learner practices with a clear purpose. Clicking through charts, chasing movement, or trying to force a win does not build skill. Good practice means the learner states the reading, defines what would prove it wrong, acts only when the process is valid, and reviews the result honestly. In this Practice Discipline Lab, you will study how to maintain simulation cockpit discipline, recognize outcome bias, and ensure every practice action translates into trained market reading judgment.",
    context: {
      keyTerms: [
        { term: "Simulation", definition: "A controlled training environment using historical market data where you can practice without financial risk." },
        { term: "Practice action", definition: "A deliberate decision made in the simulator—such as selecting a reading or choosing to stand aside—based on pre-defined logic." },
        { term: "Cockpit discipline", definition: "The habit of following a structured check sequence before taking any action on the chart." },
        { term: "Process quality", definition: "The measure of how closely you followed your analytical rules, regardless of whether the simulator outcome was a win or loss." },
        { term: "Reading quality", definition: "The reliability score of a chart reading based on the type of market evidence present." }
      ],
      whyThisMatters: "Without practice discipline, you will treat the simulator like a game, clicking buttons randomly and reinforcing poor habits that lead to confusion.",
      realLifeExample: "A learner clicks buy because price is rising quickly, with no clear structure or level. The trade wins, but they learned nothing repeatable. They practiced a bad habit.",
      commonMistake: "Measuring practice by how many times you clicked rather than how clearly you followed your checklist.",
      quickNote: "Practice makes permanent. Only deliberate, disciplined practice makes perfect."
    }
  },
  {
    type: "visual_intro",
    title: "The Simulator Is Not a Video Game",
    label: "Simulator Mindset",
    visualKey: "simulator-not-video-game",
    body: "A video game rewards speed, reactions, and points. A professional simulator should reward correct procedures, patience, and compliance. In early training, you are not trying to make virtual profit or prove how smart you are. You are trying to prove that you can execute a clean reading process under pressure without making impulsive errors.",
    context: {
      keyTerms: [
        { term: "Video-game mindset", definition: "The mistake of focusing on virtual points, quick wins, and rapid clicks rather than learning." },
        { term: "Training mindset", definition: "Focusing on process compliance, patience, and logic quality to build repeatable skills." },
        { term: "Virtual PnL", definition: "The simulated profit or loss shown on the screen, which carries no learning value if it came from guessing." },
        { term: "Process compliance", definition: "Following your checklist rules exactly, even when it means making no trades or sitting idle." },
        { term: "Cognitive training", definition: "Exercises designed to build mental discipline and objective observation habits." }
      ],
      whyThisMatters: "Treating the simulator like a video game creates fake confidence, leading you to chase volatile candles in live markets.",
      realLifeExample: "A learner boasts about making $5,000 on a demo account by guessing a crypto breakout. The next week, they lose their initial capital because they have no repeatable process.",
      commonMistake: "Focusing on the simulated account balance instead of the consistency of your chart auditing process.",
      quickNote: "The simulator is for training judgment, not chasing points."
    }
  },
  {
    type: "visual_intro",
    title: "A Valid Practice Attempt Needs a Reason First",
    label: "Valid Attempt",
    visualKey: "valid-practice-attempt-board",
    body: "A practice attempt is valid only when you can explain the reading before you take action. You must know what evidence you observed, what the reading quality was, and what specific review condition would prove your idea wrong. If you click a button first and then look for reasons to justify it, the attempt is invalid and weakens your training loop.",
    context: {
      keyTerms: [
        { term: "Valid attempt", definition: "A simulation action supported by pre-planned reasoning, visible evidence, and a clear invalidation trigger." },
        { term: "Invalid attempt", definition: "An action driven by impulse, emotion, or speed, where reasoning is only created after the click." },
        { term: "Pre-action reasoning", definition: "Writing down or stating your logic and evidence before touching any trading buttons." },
        { term: "Review condition", definition: "The specific chart event or price level that tells you your original reading is no longer correct." },
        { term: "Justification trap", definition: "Creating reasons after an action has been taken to make yourself feel correct." }
      ],
      whyThisMatters: "Ensuring every action is valid stops you from developing 'lazy hands' that react to flickering price candles.",
      realLifeExample: "Before entering a simulated trade, you state: 'I am entering because price swept daily support and closed strong. If price breaks the support floor, my logic is wrong.' This is a valid attempt.",
      commonMistake: "Clicking 'Buy' and then looking at the chart to see if there was a support level nearby.",
      quickNote: "Reason first, action second. If you cannot explain the setup, do not click the button."
    }
  },
  {
    type: "visual_intro",
    title: "Outcome Bias Makes Bad Practice Look Good",
    label: "Outcome Bias",
    visualKey: "outcome-bias-practice-lab",
    body: "Outcome bias means judging the quality of a decision only by the final result. A guessed win is still poor practice because it teaches you to gamble. A losing result can still be excellent practice if you followed your rules and price hit your pre-defined review condition. In early practice, the quality of your process is the only score that matters.",
    context: {
      keyTerms: [
        { term: "Outcome bias", definition: "Judging a decision's quality by its final result rather than the information available at the time it was made." },
        { term: "Process quality", definition: "The evaluation of how well you followed your rules, checklists, and discipline parameters." },
        { term: "Guessed win", definition: "A successful simulator trade that had no logical basis, reinforcing dangerous random habits." },
        { term: "Disciplined loss", definition: "A losing simulator trade that was entered on good evidence and exited cleanly at the review condition." },
        { term: "Feedback quality", definition: "The accuracy of the lesson learned from a practice session." }
      ],
      whyThisMatters: "If you let outcome bias guide you, you will repeat bad habits because they worked once, and avoid good habits because they failed once.",
      realLifeExample: "You buy a messy, choppy chart out of boredom. Price happens to spike up and you win. You feel successful, but you actually practiced a process failure.",
      commonMistake: "Thinking a trade was good because it made virtual money, or bad because it lost virtual money.",
      quickNote: "A good process with a bad outcome is still good practice. A bad process with a good outcome is a trap."
    }
  },
  {
    type: "visual_intro",
    title: "Active Idle Is a Valid Practice Action",
    label: "Active Idle",
    visualKey: "active-idle-stand-aside-lab",
    body: "Some market environments are simply not clean enough to read. When the chart is choppy or lacks evidence, the correct practice action is to stand aside. Active idle is not laziness; it is the deliberate choice to do nothing because your criteria are not met. This trains your patience and prevents you from forcing setups.",
    context: {
      keyTerms: [
        { term: "Active idle", definition: "Choosing to take no trading action because the market lacks clear structure or evidence." },
        { term: "Stand aside", definition: "Remaining on the sidelines as an observer when market conditions are messy or conflicting." },
        { term: "Forced certainty", definition: "The mistake of trying to make a chart look clear when it is actually messy and range-bound." },
        { term: "Patience threshold", definition: "Your mental capacity to wait for high-quality setups without clicking out of frustration." },
        { term: "Active observation", definition: "Monitoring the chart to learn its behavior, even when you have no active positions." }
      ],
      whyThisMatters: "Learning when to do nothing is 50% of professional trading. Active idle protects your capital and keeps your mind clear.",
      realLifeExample: "You open the gold chart. It is in the middle of a choppy range. You write 'unclear range' in your notes and close the screen. This is a highly disciplined action.",
      commonMistake: "Feeling like a practice session is wasted if you did not enter a simulated trade.",
      quickNote: "Doing nothing is a positive action when the market is printing noise."
    }
  },
  {
    type: "visual_intro",
    title: "Boredom Clicking Breaks the Training Loop",
    label: "Boredom Clicking",
    visualKey: "boredom-clicking-warning-board",
    body: "Boredom clicking happens when you take an action simply because nothing interesting has occurred on the chart for a while. You get tired of waiting, so you click just to feel active. This introduces noisy data into your practice record, distorts your learning results, and trains your brain to seek excitement rather than discipline.",
    context: {
      keyTerms: [
        { term: "Boredom clicking", definition: "Entering trades or changing analysis out of boredom or a desire for stimulation rather than evidence." },
        { term: "Stimulation seeking", definition: "The urge to click buttons to get a quick mental rush, common in random learners." },
        { term: "Training noise", definition: "Inconsistent data in your practice history caused by impulsive, non-systematic clicks." },
        { term: "Boredom loop", definition: "Boredom leading to an impulsive click, which leads to a loss, which leads to regret, repeating the cycle." },
        { term: "Behavioral filter", definition: "A rule or pause that stops you from clicking when you feel bored or distracted." }
      ],
      whyThisMatters: "Boredom clicking is the primary cause of small, grinding account drawdowns for early-stage traders.",
      realLifeExample: "After 15 minutes of flat market action, you get restless. You enter a buy just to see if price will break. You get stopped out instantly. You just paid a boredom tax.",
      commonMistake: "Confusing boredom with a lack of opportunity. A slow market is a test of your patience, not a prompt to trade.",
      quickNote: "If your reason for acting is boredom, the result will be regret."
    }
  },
  {
    type: "visual_intro",
    title: "Chasing Speed Is Not Reading",
    label: "Chasing Movement",
    visualKey: "chasing-speed-practice-trap",
    body: "Fast-moving candles can trigger a sense of urgency, making you feel like you are missing a major move. This feeling creates chasing. Chasing means clicking because price moved quickly, without checking if the location is good or if the structure supports it. Good practice requires you to pause and verify before the click.",
    context: {
      keyTerms: [
        { term: "Chasing", definition: "Entering a position late after a rapid price move has already occurred, driven by FOMO." },
        { term: "FOMO", definition: "Fear Of Missing Out; the anxiety that others are profiting while you are left behind." },
        { term: "Urgency trap", definition: "The feeling that you must act immediately or lose the opportunity forever." },
        { term: "Candle chasing", definition: "Buying green candles or selling red candles purely because they are large and fast." },
        { term: "Analysis pause", definition: "A deliberate 5-second pause before taking any action to verify your evidence stack." }
      ],
      whyThisMatters: "Chasing speed makes you buy at the absolute top of wicks and sell at the absolute bottom of flushes, right before price reverses.",
      realLifeExample: "Bitcoin spikes $1,000. You feel the panic of missing out and click buy at the top of the candle. Immediately, the candle wicks back and you are in drawdown.",
      commonMistake: "Reacting to the speed of a candle rather than the quality of its location and structure.",
      quickNote: "Speed is a diagnostic clue, not an instruction to chase."
    }
  },
  {
    type: "visual_intro",
    title: "Reading and Execution Are Not the Same Skill",
    label: "Reading vs Execution",
    visualKey: "reading-vs-execution-skill-board",
    body: "Reading means explaining what the market is showing using objective logic. Execution means taking an action based on that reading. In Level 0, you are training your reading quality first. You should not judge your development only by how many actions you took, but by how accurately you mapped the market's structure.",
    context: {
      keyTerms: [
        { term: "Reading skill", definition: "The ability to observe, classify, and verify market behavior objectively." },
        { term: "Execution skill", definition: "The ability to enter, manage, and exit positions cleanly according to a plan." },
        { term: "Cognitive split", definition: "Separating the analysis of the chart from the emotional weight of taking a trade." },
        { term: "Reading quality", definition: "The degree of logic, structure, and consensus behind your chart analysis." },
        { term: "Level 0 focus", definition: "Prioritizing objective market reading and structure mapping over execution timing." }
      ],
      whyThisMatters: "If you mix reading and execution too early, the fear of losing money will distort your ability to see chart evidence clearly.",
      realLifeExample: "You analyze a support level perfectly but choose not to execute a trade. A random learner thinks they failed. A disciplined reader knows their analysis was 100% correct.",
      commonMistake: "Thinking you are a bad analyst because a trade didn't execute, or a good analyst because you clicked quickly.",
      quickNote: "First learn to read the map. Only then can you learn to drive the car."
    }
  },
  {
    type: "visual_intro",
    title: "Replay the Scenario Without Fighting the Result",
    label: "Replay Protocol",
    visualKey: "scenario-replay-protocol-board",
    body: "Replaying a failed simulation scenario is highly valuable, but you must not do it to 'force a win' because you now know where price went. A disciplined replay is used to review your original reasoning, find exactly where your checklist broke, and repeat the scenario to practice process compliance, not to chase the outcome.",
    context: {
      keyTerms: [
        { term: "Replay protocol", definition: "A structured method for repeating a simulated scenario to identify process errors rather than force wins." },
        { term: "Revenge practice", definition: "Repeating a chart scenario repeatedly out of frustration to get a positive result." },
        { term: "Hindsight bias", definition: "The tendency to believe, after an event has occurred, that you predicted or expected it." },
        { term: "Process correction", definition: "Identifying the specific checklist step you missed and focusing on it during the replay." },
        { term: "Outcome chasing", definition: "Replaying a scenario using your memory of the result rather than your real-time analysis." }
      ],
      whyThisMatters: "Fighting the result in replays teaches you to trade with hindsight, which is impossible in live markets.",
      realLifeExample: "You lose a simulated trade. Instead of getting angry, you reload the chart, freeze your screen at the entry point, find that you ignored a daily resistance zone, and practice noting it down.",
      commonMistake: "Reloading a chart and instantly buying because you remember that price rallied later in the scenario.",
      quickNote: "Replay to correct your process, not to rewrite history."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Was This a Valid Practice Attempt?",
    label: "Practice Drill",
    visualKey: "practice-discipline-drill",
    taskData: {
      type: "choice_block",
      question: "A learner opens the simulator during a slow market replay. Price is moving sideways with overlapping candles. The learner feels bored and clicks long after one green candle appears, without writing a reason or review condition. The trade later moves in their favor. How should this practice attempt be judged?",
      options: [
        {
          id: "opt1",
          text: "Good practice because the trade ended positive and showed the green candle had buying pressure.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. The positive result does not make the practice good. This is a classic outcome bias trap. The action had no pre-action reasoning or review condition."
        },
        {
          id: "opt2",
          text: "Invalid practice because the action came from boredom, without a clear reasoning checklist or a defined review condition.",
          isCorrect: true,
          grade: "best",
          feedback: "Correct! This is invalid practice. The learner acted due to boredom rather than structure. A winning result does not validate a process failure."
        },
        {
          id: "opt3",
          text: "Good practice because one green candle is enough evidence to justify a short-term simulator test.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. A single green candle inside a choppy sideways range is noise, not evidence. Moving without checking location and structure is gambling."
        },
        {
          id: "opt4",
          text: "Unclear because simulator outcomes do not matter at all for learning records.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. Simulator results do not dictate practice quality, but the attempt can be clearly graded as invalid based on the lack of process discipline."
        }
      ]
    },
    body: "Analyze the learner's behavior, their mental state, and the pre-click steps. Use the classifier tool to grade this attempt and choose the most disciplined evaluation.",
    context: {
      keyTerms: [
        { term: "Invalid practice", definition: "A practice session characterized by impulsive actions, lack of reasoning, and outcome bias." },
        { term: "Process compliance", definition: "Following your checklist rules exactly, regardless of emotional urges." },
        { term: "Sideways chop", definition: "Sideways price movement with overlapping candles and no clear direction." },
        { term: "Boredom tax", definition: "The losses or bad habits created by trading out of boredom instead of waiting for evidence." },
        { term: "Outcome bias trap", definition: "Falsely believing a decision was correct simply because the result was positive." }
      ],
      whyThisMatters: "Spotting invalid practice in yourself is the first step toward building professional simulation habits.",
      realLifeExample: "You review your week and find three winning trades that were clicked without structure. You delete them from your valid database and only count process-compliant logs.",
      commonMistake: "Logging a trade as 'successful' purely because the PnL was green.",
      quickNote: "A winning guess is still a failed training attempt."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Good Practice Leaves a Clean Record",
    label: "Practice Lab Debrief",
    visualKey: "practice-discipline-lab-debrief",
    body: "Practice quality is not measured by virtual simulator profit. A good training attempt has a pre-defined reason, a clear review condition, a valid action or stand-aside decision, and a clean review note. By protecting your practice process from outcome bias, boredom clicking, and candle chasing, you build the cognitive discipline required to read live markets with professional objectivity.",
    context: {
      keyTerms: [
        { term: "Clean record", definition: "A journal or database that contains only process-compliant, evidence-backed practice sessions." },
        { term: "Process compliance", definition: "Judging your practice strictly by your checklist execution rather than account outcomes." },
        { term: "Simulation standard", definition: "The set of cockpit rules that define a valid practice attempt." },
        { term: "Outcome-bias control", definition: "The mental filter that prevents you from grading decisions based on PnL." },
        { term: "Cognitive discipline", definition: "The habit of observing facts objectively and staying calm under pressure." }
      ],
      whyThisMatters: "Building a clean practice record ensures your brain learns real, repeatable patterns instead of random noise.",
      realLifeExample: "You finish a session with two losses and three stand-asides. Every step was checklist-compliant. You mark the session as a 100% success in your training journal.",
      commonMistake: "Feeling discouraged by simulated losses when your process was perfectly correct.",
      quickNote: "Do not trust a practice win because it is green. Trust the attempt only after the process is verified."
    }
  }
];
