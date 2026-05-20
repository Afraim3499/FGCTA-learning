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
    body: "Gold — traded under the code XAU/USD — often moves quickly, but fast movement is not the same as clear movement. A big candle or a long wick might look important, but it only means something if it happens at the right location and holds its ground after the candle closes. In this lab, you will learn to slow down, check where price is, and wait for Gold to prove the move before you form an opinion. Gold is not hard because it is random — it is hard because it moves fast and punishes learners who react before checking the conditions.",
    context: {
      keyTerms: [
        { term: "Gold Volatility", definition: "How quickly and widely Gold's price can move. Gold is known for sharp, fast price swings." },
        { term: "Speed vs Clarity", definition: "The trap of thinking that fast price movement means a clear trend. Speed alone does not prove direction." },
        { term: "Close Quality", definition: "Where the candle's closing price ends up relative to its high and low. A strong close near the high shows buyers held control." },
        { term: "Macro Sensitivity", definition: "Gold reacts strongly to big economic news events like inflation reports or interest rate decisions. This sharp sensitivity can cause sudden price spikes." },
        { term: "DXY (US Dollar Index)", definition: "A measure of the US Dollar's strength against other major currencies. When DXY drops, Gold often rises, and vice versa." },
        { term: "Institutional", definition: "Refers to large banks, hedge funds, and professional trading firms that move enough money to shift price. When we say institutional backing, we mean these large players are supporting the move." },
        { term: "Reading Discipline", definition: "The habit of waiting for location, candle close, and follow-through before forming an opinion about what Gold is doing." }
      ],
      whyThisMatters: "Without a custom Gold-specific discipline, you will be constantly trapped by rapid candle spikes and long wicks that disappear by the close.",
      realLifeExample: "Gold spikes up 20 dollars in five minutes after a news release. A beginner buys the breakout instantly. A disciplined reader waits for the hourly close to see if the move holds.",
      commonMistake: "Thinking that because Gold moved fast, it must be heading in a clear direction.",
      quickNote: "Slow down and let Gold prove the move before assigning a reading."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Speed Is Not Gold Clarity",
    label: "Volatility Discipline",
    visualKey: "gold-speed-vs-clarity",
    body: "Gold can print large, fast candles in many different environments: clean trends, the middle of sideways ranges, reaction zones, news-driven spikes, or messy back-and-forth movement. Speed simply tells the learner that trading activity has increased. It does not prove that a move is clean or sustainable. To interpret a fast candle, you must check where the move happened (location) and what happened immediately after (follow-through). An identical big candle in the middle of noise has a completely different reading quality than one testing a major reaction zone.",
    context: {
      keyTerms: [
        { term: "Activity Spike", definition: "A sudden burst of trading that creates large candles. It shows activity, but not necessarily a clear trend." },
        { term: "Contextual Value", definition: "The idea that a candle only means something based on where it forms on the chart. The same candle at a key zone vs in empty space has completely different value." },
        { term: "Midpoint Noise", definition: "Fast price movements in the center of a range that carry little useful information. These are easy to mistake for real moves." },
        { term: "Clarity Filter", definition: "The habit of ignoring fast candles unless they happen at a key price area. Speed in empty space is noise." },
        { term: "Sustainability Test", definition: "Checking whether price can hold a fast move after the initial burst, or if it fades back immediately." }
      ],
      whyThisMatters: "Filtering out midpoint speed saves you from chasing random price spikes that have no backing from large players.",
      realLifeExample: "Gold prints a massive green candle. You see it is in the dead center of a horizontal range. You ignore it because the location is low-priority noise.",
      commonMistake: "Deciding Gold must go up or down purely because one candle moved very fast.",
      quickNote: "A big Gold candle is activity, not automatic clarity."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Zones Are Where Gold Reveals Behavior",
    label: "Reaction Zone Lab",
    visualKey: "gold-reaction-zone-lab",
    body: "Gold reaction zones are not exact lines. They are flexible price ranges where buy and sell orders are historically clustered. When Gold returns to a zone, do not expect a perfect bounce to the penny. Instead, you must watch price behavior inside the zone. Does price reject quickly, accept the new values by sitting still in a tight range (called consolidating), overshoot and return inside, or follow through beyond the boundary? The zone does not tell you what to do; it tells you where price behavior matters most.",
    context: {
      keyTerms: [
        { term: "Reaction Zone", definition: "A price area where Gold has bounced or reversed before. Orders tend to cluster in these areas, making them important locations to watch." },
        { term: "Line Thinking Trap", definition: "Expecting price to bounce at one exact number instead of treating the area as a flexible zone." },
        { term: "Zone Test", definition: "When price enters a reaction zone to test whether buyers or sellers are still active there." },
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
    body: "XAU/USD is known for printing long wicks. Beginners often treat every long wick as a guaranteed reversal, but this is a dangerous trap. A Gold wick can come from thin liquidity (when fewer orders are in the market, so price jumps more easily), a major news release, a liquidity sweep (when price briefly spikes past a key level to trigger orders waiting there), or a normal reaction zone rejection. To read a wick properly, you must check its location and close quality. A long wick at a key reaction zone floor is high-quality evidence. An identical long wick in the middle of a range is just noise that can be run over immediately.",
    context: {
      keyTerms: [
        { term: "Wick Source", definition: "The underlying market event (news, sweep, reaction) that caused the wick to form." },
        { term: "Wick Location", definition: "Where the wick formed relative to important price areas like support zones, resistance zones, or prior highs and lows." },
        { term: "Mid-Range Wick", definition: "A long wick that forms in the middle of a price range, away from any important zone. It carries little weight because it is not testing anything meaningful." },
        { term: "Reversal Illusion", definition: "The mistake of thinking every long wick means price will reverse. Many wicks are just noise and get run over." },
        { term: "Information Weight", definition: "How important a wick is based on where it formed and why. A wick at a key zone carries more weight than one in empty space." }
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
    body: "Gold frequently sweeps above a prior high or below a prior low to trigger clustered orders (groups of automatic buy or sell orders that traders place just beyond key levels to limit their losses). When these orders get triggered, price spikes past the level briefly. A sweep is not an automatic signal to trade the opposite direction. It is a question: did Gold reject the price, accept beyond it, or just create short-term noise? You must wait for the candle close and follow-through to see if the market actually rejects the area or consolidates to accept the new values.",
    context: {
      keyTerms: [
        { term: "Liquidity Sweep", definition: "When price temporarily spikes past a prior high or low to trigger the automatic orders resting just beyond it, then often reverses." },
        { term: "Sweep-and-Return", definition: "When price spikes past a level but closes back inside the previous range." },
        { term: "Breakout Acceptance", definition: "Price closing beyond a swept high/low and holding its ground." },
        { term: "Mechanical Trap", definition: "The mistake of automatically selling when price crosses above a high, or buying when it crosses below a low, without waiting to see where the candle actually closes." },
        { term: "Clustered Stops", definition: "Groups of automatic sell or buy orders that traders place just above highs or below lows to limit losses. When price reaches these orders, they get triggered all at once, causing a sudden spike." }
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
    body: "During a candle's duration, price can travel very far, creating excitement. However, the close of the candle is the final record of that period. Close quality is a core filter: a candle that closes strongly beyond a zone shows that large buyers or sellers are committed to holding that price. A candle that wicks through a zone but closes all the way back inside shows that the move was rejected. Travel shows activity; close quality shows commitment.",
    context: {
      keyTerms: [
        { term: "Close Quality", definition: "Where the closing price sits relative to the candle's high, low, and key zones." },
        { term: "Strong Close", definition: "A candle that closes near its highest or lowest point, showing that one side — buyers or sellers — stayed in charge until the end." },
        { term: "Weak Close", definition: "A candle closing near its midpoint or back inside a zone after a breakout attempt." },
        { term: "Intra-Candle Noise", definition: "The messy up-and-down price movement that happens while a candle is still forming. This noise can fool you into acting before the candle finishes." },
        { term: "Commitment Filter", definition: "The habit of waiting for the candle to finish closing before deciding whether buyers or sellers are in control. The close tells you who won that time period." }
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
    body: "Gold is highly sensitive to major economic data releases. CPI (Consumer Price Index) measures inflation and tells the market whether prices are rising faster than expected. NFP (Non-Farm Payrolls) measures job growth and signals economic strength. FOMC meetings are where the Federal Reserve (the central bank of the United States) announces interest rate decisions. When these events release, Gold can print massive candles, sweep past highs and lows, and break zones in seconds. These moves look incredibly strong, but they are often distorted because many traders pull their orders during news, making the market thin and easy to spike. A disciplined reader respects this pressure, understands it can create temporary distortions, and waits for price to stabilize and close before analyzing the reading.",
    context: {
      keyTerms: [
        { term: "CPI (Consumer Price Index)", definition: "A report that measures inflation — how fast prices are rising. Higher-than-expected CPI often causes Gold to spike." },
        { term: "NFP (Non-Farm Payrolls)", definition: "A monthly report measuring how many jobs the US economy added. Strong job numbers can strengthen the dollar and push Gold down." },
        { term: "FOMC", definition: "The Federal Reserve committee that decides interest rates. Their announcements are among the biggest market-moving events for Gold." },
        { term: "Liquidity Thinning", definition: "During big news events, many traders remove their orders from the market. With fewer orders available, price can jump much farther on small trades, creating exaggerated spikes." },
        { term: "Stabilization Period", definition: "The time after a news spike when price settles down and returns to normal, readable structure. This is when you can start analyzing again." },
        { term: "Data-Driven Flow", definition: "Price movement caused by the market reacting to new economic data. For example, if inflation is higher than expected, Gold often moves sharply." }
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
    body: "An initial price reaction shows that Gold responded to a location or event. However, one candle is not a complete reading. Follow-through — how the next candles behave — determines whether the reaction has real backing from large market participants. If Gold rejects a support zone but the next candle fails to move higher and stalls, the reading remains mixed. If the next candle continues moving in the same direction and forms a clear pattern, the reading becomes cleaner.",
    context: {
      keyTerms: [
        { term: "Initial Reaction", definition: "The first candle's behavior when price reaches a key zone or important price area." },
        { term: "Follow-Through Candle", definition: "The next candle after an initial reaction. It either supports the move by continuing in the same direction, or cancels it out by reversing." },
        { term: "Reaction Stall", definition: "When price reacts at a zone but immediately hesitates, showing lack of backing." },
        { term: "Confirmation Bar", definition: "A candle that closes in the direction of the reaction, strengthening the reading." },
        { term: "Reading Resolution", definition: "The point where you have enough candles to decide if the reading is clear or mixed. One candle is rarely enough." }
      ],
      whyThisMatters: "Waiting for follow-through saves you from false starts where a reaction occurs but immediately runs out of breath.",
      realLifeExample: "Gold wicks off resistance and prints a bearish close. The very next candle is a strong green bar that completely covers the previous candle's range. The lack of follow-through cancels out the rejection.",
      commonMistake: "Trusting a reaction instantly without waiting to see if follow-through confirms the move.",
      quickNote: "The reaction is the question; follow-through is the answer."
    }
  },
  {
    type: "visual_intro",
    title: "The Gold Reading Sequence",
    label: "Reading Workflow",
    visualKey: "gold-reading-sequence",
    body: "To read Gold objectively, you must follow a disciplined, step-by-step sequence. Never let your eyes look at candle wicks or speed first. Instead, apply the sequence: 1. Identify the current volatility condition. 2. Verify price location relative to zones and prior swings (previous high/low points). 3. Check for wicks or sweeps at the boundaries. 4. Evaluate close quality at the candle close. 5. Cross-check macro and USD context. 6. Observe follow-through. Only then do you classify the reading quality.",
    context: {
      keyTerms: [
        { term: "Reading Sequence", definition: "The structured, step-by-step checklist for analyzing XAU/USD charts." },
        { term: "Condition Check", definition: "Determining the market environment: Is the price trending, ranging, or reacting to a news event?" },
        { term: "Location Mapping", definition: "Identifying the price's position relative to key zones and important past high/low pivot points." },
        { term: "Wick & Sweep Audit", definition: "Checking whether wicks or sweeps happened at zone edges, and where the candle closed relative to those edges." },
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
        { term: "Indecision Close", definition: "A candle that closes near the middle of its range, showing that neither buyers nor sellers won control of that time period." },
        { term: "Stall Candle", definition: "A follow-up candle that hesitates and barely moves, showing that the previous move has no continuation strength." },
        { term: "Reading Classification", definition: "Sorting what you see on the chart into one of three categories: clear (the evidence points one way), mixed (the evidence is conflicting), or unclear (not enough information yet)." },
        { term: "Discipline Hold", definition: "The habit of saying 'I do not have enough evidence to decide' and waiting, instead of forcing an opinion when the chart is not clear." }
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
    body: "Congratulations! You have completed the specialized Gold Reading Lab. You now understand that reading Gold is not about reacting to speed, chasing wicks, or trading breakouts blindly. Gold must be filtered through a disciplined sequence: check the conditions, locate the price, watch the reaction at key zones, evaluate the candle close, check for macro pressure, and observe follow-through. The habits you built here — slowing down, checking location, waiting for the close, observing follow-through — are not Gold-only habits. They are the foundation of reading any market under pressure.",
    context: {
      keyTerms: [
        { term: "Evidence Under Pressure", definition: "The habit of testing what price actually proved by checking location, close quality, and follow-through before forming an opinion." },
        { term: "Stabilization Rule", definition: "Waiting for news-driven price spikes to settle down into readable structure before you start analyzing." },
        { term: "Execution Filter", definition: "The habit of only paying attention to candles that form at important price areas, and ignoring candles in empty, meaningless zones." },
        { term: "Sustained Momentum", definition: "When price closes beyond a key level and the next candles keep moving in the same direction instead of fading back. This shows that the breakout has real strength behind it." },
        { term: "Professional Patience", definition: "The discipline of doing nothing when Gold does not present clear evidence. Sitting out is a skill." }
      ],
      whyThisMatters: "Gold will try to tempt you with rapid movements. This reading lab serves as your psychological and analytical shield.",
      realLifeExample: "You watch Gold spike on news. You calmly step through the sequence, classify the reading as unstable, and wait for the stabilization period.",
      commonMistake: "Allowing Gold's speed to rush your analysis sequence.",
      quickNote: "Trust the reading only after Gold proves quality through location, close, context, and follow-through."
    }
  }
];
