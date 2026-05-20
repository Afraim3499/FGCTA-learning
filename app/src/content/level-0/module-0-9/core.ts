import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.9 - Specialized Gold Module Track Cards
 * Focus: Gold Reading Lab: Volatility, Zones, Wicks, and Macro Pressure
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Gold Needs a Different Reading Discipline",
    label: "Gold Foundation",
    visualKey: "gold-reading-lab-foundation",
    body: "Gold (XAU/USD) often moves quickly, but fast movement is not the same as clear movement. A trained learner does not react to the biggest candle or longest wick. They slow down and read Gold through structure, condition, location, wick quality, close quality, macro pressure, and follow-through. Gold is not hard because it is impossible to read; it is hard because it moves fast, reacts sharply, and punishes learners who judge candles before understanding the context. Stop asking what the candle shape is, and start checking what the move actually proved.",
    context: {
      keyTerms: [
        { term: "Gold Volatility", definition: "The characteristic rapid, wide-ranging price expansions of XAU/USD." },
        { term: "Speed vs Clarity", definition: "The illusion that fast price movement represents a clear directional trend." },
        { term: "Close Quality", definition: "Evaluating the final closing price of a candle relative to its total range." },
        { term: "Macro Sensitivity", definition: "Gold's high reactivity to interest rates, DXY, and inflation data." },
        { term: "Reading Discipline", definition: "Waiting for location, close, and follow-through before forming an opinion." }
      ],
      whyThisMatters: "Without a custom Gold-specific discipline, you will be constantly trapped by rapid candle spikes and long wicks that disappear by the close.",
      realLifeExample: "Gold spikes up 20 dollars in five minutes after a news release. A beginner buys the breakout instantly. A disciplined reader waits for the hourly close to see if the move holds.",
      commonMistake: "Equating Gold's rapid price speed with clear directional momentum.",
      quickNote: "Slow down and let Gold prove the move before assigning a reading."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Speed Is Not Gold Clarity",
    label: "Volatility Discipline",
    visualKey: "gold-speed-vs-clarity",
    body: "Gold can print large, fast candles in many different environments: clean trends, range midpoints, reaction zones, macro spikes, or unstable chop. Speed simply tells the learner that transaction activity has increased. It does not prove that a move is clean or sustainable. To interpret a fast candle, you must check where the move happened (location) and what happened immediately after (follow-through). An identical big candle in the middle of noise has a completely different reading quality than one testing a major reaction zone.",
    context: {
      keyTerms: [
        { term: "Activity Spike", definition: "A sudden increase in transaction speed and volume, often creating large candles." },
        { term: "Contextual Value", definition: "The rule that candle meaning depends entirely on where it forms on the map." },
        { term: "Midpoint Noise", definition: "Fast price movements occurring in the center of a range with low informational value." },
        { term: "Clarity Filter", definition: "Ignoring price action speed unless it occurs at a verified high-information area." },
        { term: "Sustainability Test", definition: "Evaluating whether price can hold a fast expansion after the initial surge." }
      ],
      whyThisMatters: "Filtering out midpoint speed saves you from chasing random price spikes that have no institutional backing.",
      realLifeExample: "Gold prints a massive green candle. You see it is in the dead center of a horizontal range. You ignore it because the location is low-priority noise.",
      commonMistake: "Forcing a directional bias purely because a single Gold candle moved very fast.",
      quickNote: "A big Gold candle is activity, not automatic clarity."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Zones Are Where Gold Reveals Behavior",
    label: "Reaction Zone Lab",
    visualKey: "gold-reaction-zone-lab",
    body: "Gold reaction zones are not exact lines. They are flexible price ranges where buy and sell orders are historically clustered. When Gold returns to a zone, do not expect a perfect bounce to the penny. Instead, you must watch price behavior inside the zone. Does price reject quickly, accept the new values by consolidating, overshoot and return inside, or follow through beyond the boundary? The zone does not tell you what to do; it tells you where price behavior matters most.",
    context: {
      keyTerms: [
        { term: "Reaction Zone", definition: "A flexible price area representing clustered historical transaction interest." },
        { term: "Line Thinking Trap", definition: "Expecting price to respect a single decimal coordinate instead of a flexible zone." },
        { term: "Zone Test", definition: "Price entering a reaction area to see if opposing orders are present." },
        { term: "Zone Acceptance", definition: "Price holding its ground and consolidating inside or beyond a reaction zone." },
        { term: "Zone Rejection", definition: "Price quickly backing away from a zone, leaving wicks and closing outside." }
      ],
      whyThisMatters: "Thinking in zones gives price room to breathe and prevents you from getting shaken out by minor wicks.",
      realLifeExample: "You mark a support zone from $2,010 to $2,015. Price spikes down to $2,008, wicks back up, and closes at $2,012. A line trader thinks support broke; a zone trader sees a normal test.",
      commonMistake: "Declaring a key level broken the moment price trades slightly past a single drawn line.",
      quickNote: "A reaction zone is a soft boundary where behavior must be observed, not a rigid brick wall."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Wicks Need Source, Location, and Close",
    label: "Wick Quality",
    visualKey: "gold-wick-quality-lab",
    body: "XAU/USD is notorious for printing long wicks. Beginners often treat every long wick as a guaranteed reversal signal, but this is a dangerous trap. A Gold wick can come from thin liquidity, a macro news release, a liquidity sweep, or a normal reaction zone rejection. To read a wick, you must audit its location and close quality. A long wick at a key reaction zone floor is high-quality evidence. An identical long wick in the middle of a range is just noise that can be ran over immediately.",
    context: {
      keyTerms: [
        { term: "Wick Source", definition: "The underlying market event (news, sweep, reaction) that caused the wick to form." },
        { term: "Wick Location", definition: "Where the wick formed relative to key structural reference boundaries." },
        { term: "Mid-Range Wick", definition: "A long wick occurring in a low-information area, carries low weight." },
        { term: "Reversal Illusion", definition: "The false belief that every wick indicates an immediate price turnaround." },
        { term: "Information Weight", definition: "Determining how much importance to assign a wick based on its context." }
      ],
      whyThisMatters: "Auditing wicks prevents you from trading false reversals in the middle of range noise.",
      realLifeExample: "Gold spikes downward, leaves a 10-dollar wick, but closes near the center of a choppy range. You ignore it. Later, it wicks at a major daily support and closes strong. You pay attention.",
      commonMistake: "Assuming a long wick guarantees a reversal regardless of where it forms.",
      quickNote: "A wick is a clue, not a verdict. Check the location first."
    }
  },
  {
    type: "visual_intro",
    title: "Sweeps Are Questions, Not Reversal Signals",
    label: "Sweep Discipline",
    visualKey: "gold-sweep-discipline-lab",
    body: "Gold frequently sweeps above a prior high or below a prior low to tap clustered orders before returning. A sweep is not an automatic signal to trade in the opposite direction. A sweep is a question: did Gold reject the price, accept beyond it, or simply create short-term event noise? You must wait for the candle close and follow-through to see if the market actually rejects the area or if it consolidates to accept the new higher values.",
    context: {
      keyTerms: [
        { term: "Liquidity Sweep", definition: "Price temporarily driving past a prior high or low to trigger stop orders." },
        { term: "Sweep-and-Return", definition: "When price spikes past a level but closes back inside the previous range." },
        { term: "Breakout Acceptance", definition: "Price closing beyond a swept high/low and holding its ground." },
        { term: "Mechanical Trap", definition: "Selling immediately when price crosses a high, ignoring close quality." },
        { term: "Clustered Stops", definition: "Concentrations of buy or sell stop orders resting just beyond key highs and lows." }
      ],
      whyThisMatters: "Waiting for the sweep response keeps you from buying a false breakout or selling a strong continuation move.",
      realLifeExample: "Gold rises above yesterday's high of $2,050 to $2,053. It wicks back down and closes the hour at $2,047. This sweep-and-return shows rejection. If it closed at $2,052 and held, it would show acceptance.",
      commonMistake: "Labeling every high/low crossover as a reversal sweep without looking at close location.",
      quickNote: "A sweep starts the question. It does not answer it."
    }
  },
  {
    type: "visual_intro",
    title: "Close Quality Shows Whether Gold Held the Move",
    label: "Close Quality",
    visualKey: "gold-close-quality-lab",
    body: "During a candle's duration, price can travel very far, creating excitement. However, the close of the candle is the final transaction record of that period. Close quality is a core filter: a candle that closes strongly beyond a zone shows institutional commitment. A candle that wicks through a zone but closes all the way back inside shows that the move was rejected. Travel shows activity; close quality shows commitment.",
    context: {
      keyTerms: [
        { term: "Close Quality", definition: "Where the closing price sits relative to the candle's high, low, and key zones." },
        { term: "Strong Close", definition: "A candle closing near its extreme high or low, showing dominant control." },
        { term: "Weak Close", definition: "A candle closing near its midpoint or back inside a zone after a breakout attempt." },
        { term: "Intra-Candle Noise", definition: "The price fluctuations that occur before the candle period completes." },
        { term: "Commitment Filter", definition: "Using the final candle close to determine if buyers or sellers held control." }
      ],
      whyThisMatters: "Waiting for the close prevents you from reacting to temporary intra-candle spikes that get completely retraced.",
      realLifeExample: "Gold pushes up 15 dollars during an hourly candle. With 2 minutes left, it drops back down and closes near its open. The close quality is weak; the breakout failed.",
      commonMistake: "Entering a trade based on a strong-looking candle before it actually closes.",
      quickNote: "Travel shows activity. Close quality helps you see whether Gold held the move."
    }
  },
  {
    type: "visual_intro",
    title: "Macro Pressure Can Create Fake Certainty",
    label: "Macro Distortion",
    visualKey: "gold-macro-distortion-lab",
    body: "Gold is highly sensitive to macro data like CPI, NFP, and FOMC meetings. When these events release, XAU/USD prints massive candles, sweeps prior highs/lows, and breaks zones in seconds. These moves look incredibly strong, but they are often distorted by thin liquidity and high-speed execution. A disciplined reader respects macro pressure, understands it can create temporary distortions, and waits for price to stabilize and close before attempting to analyze the reading.",
    context: {
      keyTerms: [
        { term: "Macro Distortion", definition: "Price spikes caused by event-driven news rather than structural flow." },
        { term: "News Spike", definition: "A sudden, high-speed price move immediately following a data release." },
        { term: "Liquidity Thinning", definition: "The removal of orders from the book during news events, causing wider spreads." },
        { term: "Stabilization Period", definition: "The time it takes for price action to return to normal structure after news." },
        { term: "Data-Driven Flow", definition: "Price adjustment reflecting shifts in interest rate or inflation expectations." }
      ],
      whyThisMatters: "Treating news-driven spikes with caution keeps you from trading in highly unstable conditions.",
      realLifeExample: "CPI data is released, and Gold spikes 30 dollars down, then 20 dollars up in two minutes. A disciplined reader stands aside until the market settles into a readable range.",
      commonMistake: "Assuming the first rapid news reaction is a reliable trend signal.",
      quickNote: "Gold can react fast and still leave a mixed reading. Wait for the dust to settle."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Follow-Through Separates Reaction From Reading",
    label: "Follow-Through",
    visualKey: "gold-follow-through-lab",
    body: "An initial price reaction shows that Gold responded to a location or event. However, one candle is not a complete reading. Follow-through—how the next candles behave—determines whether the reaction has sustained institutional support. If Gold rejects a support zone but the next candle fails to move higher and stalls, the reading remains mixed. If the next candle continues the rejection and builds structure, the reading becomes cleaner.",
    context: {
      keyTerms: [
        { term: "Initial Reaction", definition: "The first candle's behavior when testing a key zone or structure." },
        { term: "Follow-Through Candle", definition: "The subsequent candle that confirms or invalidates the initial move." },
        { term: "Reaction Stall", definition: "When price reacts at a zone but immediately hesitates, showing lack of backing." },
        { term: "Confirmation Bar", definition: "A candle that closes in the direction of the reaction, strengthening the reading." },
        { term: "Reading Resolution", definition: "Waiting for follow-through to classify a reading as clear or mixed." }
      ],
      whyThisMatters: "Waiting for follow-through saves you from false starts where a reaction occurs but immediately runs out of breath.",
      realLifeExample: "Gold wicks off resistance and prints a bearish close. The very next candle is a strong green bar engulfing the wick. The lack of follow-through invalidates the rejection.",
      commonMistake: "Trusting a reaction instantly without waiting to see if follow-through confirms the move.",
      quickNote: "The reaction is the question; follow-through is the answer."
    }
  },
  {
    type: "visual_intro",
    title: "The Gold Reading Sequence",
    label: "Reading Workflow",
    visualKey: "gold-reading-sequence",
    body: "To read Gold objectively, you must follow a disciplined, step-by-step sequence. Never let your eyes look at candle wicks or speed first. Instead, apply the sequence: 1. Identify the current volatility condition. 2. Verify price location relative to zones and prior swings. 3. Check for wicks or sweeps at the boundaries. 4. Evaluate close quality at the candle close. 5. Cross-check macro and USD context. 6. Observe follow-through. Only then do you classify the reading quality.",
    context: {
      keyTerms: [
        { term: "Reading Sequence", definition: "The structured, step-by-step checklist for analyzing XAU/USD charts." },
        { term: "Condition Check", definition: "First defining the environment (trend, range, chop, event)." },
        { term: "Location Mapping", definition: "Locating price relative to key structural reaction zones." },
        { term: "Wick & Sweep Audit", definition: "Evaluating boundary interactions and close locations." },
        { term: "Context Cross-Check", definition: "Verifying macro news state and US Dollar Index (DXY) alignment." }
      ],
      whyThisMatters: "Following a sequence keeps you calm and structured when Gold starts moving rapidly, preventing emotional reactions.",
      realLifeExample: "Gold rises rapidly. Instead of chasing, you systematically ask: Where is it? Near a zone? Did it close? Is there news? Is there follow-through?",
      commonMistake: "Allowing fast price action to disrupt your structured analysis checklist.",
      quickNote: "Always check the address of the move before you decode the message."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: What Is the Gold Reading?",
    label: "Practice Drill",
    visualKey: "gold-reading-lab-practice-drill",
    body: "Let's put your Gold reading discipline to the test. In this drill, we analyze a complex test of a key zone during a news event. Your goal is to filter out the noise, evaluate the location, wicks, close quality, and follow-through, and select the most disciplined reading. Read the scenario and inspect the visual model carefully before choosing.",
    taskData: {
      type: "choice_block",
      question: "Gold moves into a previous reaction zone during an active market window. It pushes above the zone and leaves a long upper wick. The candle closes near the middle of its range, not strongly above the zone. USD context is unclear, and the next candle hesitates instead of continuing upward. What is the most disciplined Gold reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because Gold moved above the reaction zone.",
          isCorrect: false,
          feedback: "Incorrect. Moving above the zone is an initial reaction, but a middle close, long wick, and lack of follow-through mean the move did not show acceptance."
        },
        {
          id: "B",
          text: "Guaranteed reversal because Gold left a long upper wick.",
          isCorrect: false,
          feedback: "Incorrect. A long wick is a clue of rejection, but it is not a guarantee of a reversal without clear close quality and supportive follow-through."
        },
        {
          id: "C",
          text: "Mixed / unstable reading because Gold tested the zone, but wick behavior, middle close, unclear USD context, and weak follow-through limit confidence.",
          isCorrect: true,
          feedback: "Correct! This is a mixed or unstable reading. Gold tested a key location, but the lack of strong close quality and follow-through means the move did not establish clear direction."
        },
        {
          id: "D",
          text: "Ignore the move completely because Gold is too volatile to read.",
          isCorrect: false,
          feedback: "Incorrect. Gold is readable, but you must be willing to classify a reading as mixed/unclear and stand aside when evidence is not clean."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Zone Penetration", definition: "Price temporarily breaking through a reaction zone boundary." },
        { term: "Indecision Close", definition: "A candle closing near the middle of its range, showing buyer-seller equilibrium." },
        { term: "Stall Candle", definition: "A follow-up candle that hesitates, indicating lack of directional momentum." },
        { term: "Reading Classification", definition: "Categorizing chart evidence as clear, mixed, or unclear." },
        { term: "Discipline Hold", definition: "Refusing to assign a high-confidence reading when key evidence is missing." }
      ],
      whyThisMatters: "This drill trains you to accept mixed readings and stay disciplined instead of forcing high-conviction opinions on messy charts.",
      realLifeExample: "Gold spikes above resistance but prints a weak, wick-heavy close. The next hour chops. You write it down as a mixed reading and wait.",
      commonMistake: "Forcing a bullish or bearish bias when the evidence is clearly mixed.",
      quickNote: "A mixed reading is high-quality information. It tells you there is no clear edge."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Gold Reading Is Evidence Under Pressure",
    label: "Gold Debrief",
    visualKey: "gold-reading-lab-debrief",
    body: "Congratulations! You have completed the specialized Gold Reading Lab. You now understand that XAU/USD reading is not about reacting to speed, chasing wicks, or trading breakouts blindly. Gold must be filtered through a rigorous sequence: condition, location, reaction zones, wicks, sweeps, close quality, macro context, and follow-through. By waiting for Gold to prove its quality under pressure, you protect your capital and elevate your reading skills above the retail average.",
    context: {
      keyTerms: [
        { term: "Evidence Under Pressure", definition: "Testing price reactions against location, close quality, and follow-through." },
        { term: "Stabilization Rule", definition: "Waiting for macro spikes to settle into structure before reading." },
        { term: "Execution Filter", definition: "Separating high-information zones from low-information noise." },
        { term: "Sustained Momentum", definition: "Price holding a breakout close and creating clear follow-through." },
        { term: "Professional Patience", definition: "The habit of doing nothing when Gold does not present clear evidence." }
      ],
      whyThisMatters: "Gold will try to tempt you with rapid movements. This reading lab serves as your psychological and analytical shield.",
      realLifeExample: "You watch Gold spike on news. You calmly step through the sequence, classify the reading as unstable, and wait for the stabilization period.",
      commonMistake: "Allowing Gold's speed to rush your analysis sequence.",
      quickNote: "Trust the reading only after Gold proves quality through location, close, context, and follow-through."
    }
  }
];
