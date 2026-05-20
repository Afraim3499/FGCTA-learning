import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.8 - Core Track Cards
 * Focus: Market Location: Knowing Where Price Is Before Judging What It Does
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Location Gives Evidence Its Weight",
    label: "Core Foundation",
    visualKey: "location-gives-evidence-weight",
    body: "Imagine reading a letter. The words are clear, but if you don't know who sent it or where it came from, the meaning is incomplete. The same rule applies to the charts. A single candlestick, a wick, a sudden expansion, or a tight compression does not carry the same weight everywhere. Its meaning changes based on the location. Price near a prior swing high, range boundary, or higher-timeframe reaction area holds far more weight than price drifting aimlessly in the middle of noise. Before you judge what a candle is doing, you must locate where it is happening.",
    context: {
      keyTerms: [
        { term: "Market Location", definition: "The specific area on a chart where price is currently trading relative to structural reference points." },
        { term: "Evidence Weighting", definition: "The habit of assigning more or less importance to price candles based on where they form." },
        { term: "Middle Noise", definition: "The middle portion of trading structures where price moves with low information value." },
        { term: "Reference Area", definition: "A marked zone on the chart, such as a prior swing or boundary, used to measure price reactions." },
        { term: "Reading Priority", definition: "The disciplined order of analysis: first locate price, then judge local candle evidence." }
      ],
      whyThisMatters: "If you don't check location first, you will waste energy trying to analyze every single candle in the middle of nowhere, which leads to confusion and false signals.",
      realLifeExample: "You see a strong green candle. If it forms in the empty space between two major zones, you ignore it as noise. If it forms right as price tests a major structure floor, you pay close attention.",
      commonMistake: "Trying to interpret the meaning of every candlestick shape without first checking if the location is meaningful.",
      quickNote: "Slow down and ask: Where is this candle forming before asking what it means."
    }
  },
  {
    type: "visual_intro",
    title: "Not Every Chart Area Matters Equally",
    label: "Location Priority",
    visualKey: "chart-area-priority-map",
    body: "A common beginner mistake is looking at a chart and treating every square inch of it as if it holds the same value. It doesn't. A chart is divided into high-information areas and low-information areas. High-information areas are locations where buyers and sellers have actively fought before—like structure edges and prior reaction zones. Low-information areas are the spaces in between, where price drifts with no clear boundary. A professional trader ignores the noise in the middle and focuses attention exclusively on the edges.",
    context: {
      keyTerms: [
        { term: "High-Information Area", definition: "A location on the chart that has historically generated strong interest and clear price reactions." },
        { term: "Low-Information Area", definition: "The middle zone between key structures where price action is typically random." },
        { term: "Structure Edge", definition: "The outer boundaries of a range or trend channel where transitions or defenses occur." },
        { term: "Attention Filter", definition: "The conscious choice to ignore price action unless it reaches a pre-planned location." },
        { term: "Reaction Zone", definition: "A historical price band where the market has shown a clear change in behavior." }
      ],
      whyThisMatters: "Filtering chart areas prevents you from overtrading in messy, random zones where price has no structural reason to respect any pattern.",
      realLifeExample: "Price is trading in the dead center of a 100-pip range. You see a hammer candle. A disciplined trader ignores it because the location is low-priority.",
      commonMistake: "Assuming that a classic candlestick pattern is valid even if it forms in a completely random, low-information location.",
      quickNote: "Location determines value. If price is in a low-information area, the evidence is automatically weak."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Areas Are Zones, Not Magic Lines",
    label: "Reaction Areas",
    visualKey: "reaction-zones-not-lines",
    body: "When you mark a location on your chart, do not draw a thin, single line and expect price to bounce off it to the penny. Markets are made of human decisions and order books, not laser beams. A reaction area is always a zone—a price range where orders are clustered. Price will often overshoot a level, reject it slightly below, or hover inside it before declaring a direction. If you think in lines, you will constantly be trapped by minor wicks; if you think in zones, you will give price room to show its true behavior.",
    context: {
      keyTerms: [
        { term: "Reaction Zone", definition: "A flexible price range representing clustered order interest rather than a single price line." },
        { term: "Overshoot", definition: "A temporary penetration past a key level that is quickly reclaimed, showing zone depth." },
        { term: "Order Clustering", definition: "The concentration of buy or sell orders within a specific price range." },
        { term: "Line Thinking Trap", definition: "The error of expecting price to respect an exact decimal number on the chart." },
        { term: "Zone Depth", definition: "The vertical height of a reaction area, allowing for normal market breathing room." }
      ],
      whyThisMatters: "Thinking in zones instead of exact lines keeps you calm when price temporarily spikes past a level before returning.",
      realLifeExample: "You draw a support line at $2,000. Price spikes to $1,997, wicks back up, and continues higher. A line-trader thinks the level broke; a zone-trader sees a normal test of the $1,995–$2,000 support zone.",
      commonMistake: "Declaring a key level broken the second price trades one pip past your drawn line.",
      quickNote: "A reaction area is not a brick wall. It is a soft boundary where behavior must be observed."
    }
  },
  {
    type: "visual_intro",
    title: "Edges Give Cleaner Information Than the Middle",
    label: "Edge vs Middle",
    visualKey: "edge-vs-middle-location",
    body: "If you want to read a market clearly, look at its outer boundaries. The edges of ranges and structures are where the battle between buyers and sellers is decided. In the middle of a structure, price is often just transferring between these edges, creating messy, overlapping waves that look like signals but carry no real intention. The outer edges force a decision: price must either reject and turn back, or accept the new location and break out. The edges ask clean questions; the middle only offers confusion.",
    context: {
      keyTerms: [
        { term: "Outer Boundary", definition: "The extreme high or low price point of a structure where the market's limits are tested." },
        { term: "Drifting Price", definition: "Aimless price movement in the middle of a structure that lacks institutional momentum." },
        { term: "Edge Decision", definition: "The critical choice price makes at a boundary: either rejection back inside or breakout acceptance." },
        { term: "Middle Noise Trap", definition: "Getting chopped up by taking trades based on candles forming inside the center of a range." },
        { term: "Structural Limits", definition: "The verified points where supply or demand has previously overwhelmed the opposite side." }
      ],
      whyThisMatters: "Focusing on structural edges helps you stay patient and wait for price to reach areas where the risk of random chop is lowest.",
      realLifeExample: "Instead of trying to trade the choppy waves inside a range, you wait for price to reach the extreme range highs or lows to see who controls the boundaries.",
      commonMistake: "Forcing a directional bias when price is sitting directly in the middle of a range.",
      quickNote: "The middle tells you less. The edges ask the only questions that matter."
    }
  },
  {
    type: "visual_intro",
    title: "Prior Swings Become Location References",
    label: "Swing Location",
    visualKey: "prior-swing-location-reference",
    body: "A prior swing high or swing low is more than just a peak on the chart; it is a permanent historical record of where price previously failed to continue. When price returns to a prior swing, that location becomes a primary reference point. The market is forced to answer a question: Is there still supply/demand at this level? The swing is not a guaranteed bounce point, but it is a location where behavior will be highly concentrated. By marking prior swings, you identify where to watch for rejection or acceptance.",
    context: {
      keyTerms: [
        { term: "Prior Swing", definition: "A historical turning point where price changed direction, leaving a clear high or low reference." },
        { term: "Location Reference", definition: "Using historical turning points as coordinates to judge current price reactions." },
        { term: "Re-test behavior", definition: "How price behaves (rejection, acceptance, overshoot) when it returns to a prior swing area." },
        { term: "Pivot Zone", definition: "The area immediately surrounding a major swing high or low." },
        { term: "Historical Record", definition: "The memory of past transactions that influences how traders react when price returns." }
      ],
      whyThisMatters: "Prior swings provide objective landmarks on your chart. Without them, you are navigating without a map.",
      realLifeExample: "Price drops to a level where it rallied 50 pips yesterday. As price approaches that exact swing low, you observe if it slows down or spikes through.",
      commonMistake: "Assuming every prior swing high or low will cause a guaranteed trend reversal.",
      quickNote: "A prior swing is not a prediction of a bounce. It is a landmark to watch for behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Acceptance and Rejection Change the Location Reading",
    label: "Accept or Reject",
    visualKey: "acceptance-rejection-location",
    body: "Once price reaches an important location, your job is not to predict what happens next, but to read how price reacts. If price touches a zone and quickly wicks back with high volume, it is showing Rejection—the location is being defended. If price enters the zone, slows down, and starts building value (overlapping candles closing near or beyond the level), it is showing Acceptance—the market is comfortable at this new price. Reading this difference prevents you from trading against dominant momentum.",
    context: {
      keyTerms: [
        { term: "Rejection Behavior", definition: "A quick price move away from a zone after a test, often leaving long wicks." },
        { term: "Acceptance Behavior", definition: "When price holds its ground inside or beyond a zone, showing comfort at new values." },
        { term: "Value Building", definition: "A series of overlapping candle bodies that establish a new price range." },
        { term: "Zone Defense", definition: "Active orders stepping in to prevent price from breaking through a structure boundary." },
        { term: "Close Quality", definition: "Checking where the candle closes relative to the zone to confirm if the test failed or succeeded." }
      ],
      whyThisMatters: "Recognizing acceptance saves you from selling a market that is consolidating just above a resistance zone, preparing to break higher.",
      realLifeExample: "Price spikes above a prior high but the hourly candle closes way back below it, leaving a long wick. This is rejection. If it closes above and stays there, it is acceptance.",
      commonMistake: "Failing to wait for candle closes to verify if price is rejecting a zone or accepting it.",
      quickNote: "The location sets the stage. Price behavior at that location tells you the story."
    }
  },
  {
    type: "visual_intro",
    title: "Bad Location Weakens Good-Looking Evidence",
    label: "Bad Location",
    visualKey: "bad-location-weakens-evidence",
    body: "A beautiful candlestick pattern in a poor location is like a sports car on a muddy dirt road—it looks great, but it can't perform. You might see a textbook bullish engulfing candle or a perfect hammer with a long bottom wick. But if that candle forms in the absolute middle of a horizontal range, or after a long, overextended trend that is already exhausted, its value is extremely low. Good-looking evidence loses its validity when the location is weak. Never trust a candle structure until you have approved its location.",
    context: {
      keyTerms: [
        { term: "Evidence Devaluation", definition: "Lowering the importance of a candlestick pattern because of its poor location." },
        { term: "Overextended Move", definition: "A long, continuous price expansion that has run out of order flow and is vulnerable to exhaustion." },
        { term: "Isolated Pattern Trap", definition: "Trading a candlestick pattern purely based on its visual shape, ignoring context." },
        { term: "Location Validation", definition: "Confirming that a candlestick pattern formed at a structural boundary or swing." },
        { term: "Pattern Degradation", definition: "The process where reliable patterns become highly random when formed inside chop." }
      ],
      whyThisMatters: "Understanding this concept saves you from losing money on perfect-looking patterns that form in the middle of market noise.",
      realLifeExample: "A hammer candle prints. In the middle of a choppy range, you ignore it. At a clean higher-timeframe support zone, you audit it as high-quality evidence.",
      commonMistake: "Chasing strong engulfing candles that form after price has already moved too far without pulling back.",
      quickNote: "A good candle in a bad location is not good evidence. It is a trap."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Location Changes the Lower-Timeframe Story",
    label: "Higher-Timeframe Location",
    visualKey: "htf-location-changes-story",
    body: "A lower-timeframe chart is like a magnifying glass—it shows the details of local action. But if you don't look up, you might step off a cliff. A 5-minute chart might show a beautiful, clean uptrend making higher highs. It looks highly bullish. But if you zoom out to the 4-hour chart, you discover price is currently touching the upper edge of a major daily resistance zone. The lower-timeframe strength is moving straight into higher-timeframe supply. The higher-timeframe location always overrides the local story.",
    context: {
      keyTerms: [
        { term: "Higher Timeframe (HTF)", definition: "A wider perspective chart (e.g., 4-hour, Daily) used to identify major structures." },
        { term: "Lower Timeframe (LTF)", definition: "A detailed perspective chart (e.g., 5-minute, 15-minute) used to observe local behavior." },
        { term: "Location Override", definition: "The rule that HTF structural zones dictate the quality and risk of LTF movements." },
        { term: "Contextual Conflict", definition: "When local price action looks strong, but is heading directly into opposing macro levels." },
        { term: "Map Checking", definition: "The habit of checking HTF locations before auditing local candlestick behavior." }
      ],
      whyThisMatters: "Checking HTF locations stops you from buying a minor breakout directly into a major resistance zone.",
      realLifeExample: "The 15-minute chart breaks out of a tiny range. You zoom out and see this breakout is happening directly against a weekly resistance ceiling. You avoid buying the trap.",
      commonMistake: "Trading LTF continuation patterns without verifying if price is hitting an HTF wall.",
      quickNote: "The local chart shows the speed. The higher timeframe shows the walls."
    }
  },
  {
    type: "visual_intro",
    title: "Location First, Then Behavior",
    label: "Location Workflow",
    visualKey: "location-first-workflow",
    body: "To build a professional, repeatable reading habit, you must structure your analysis. You cannot look at a chart and let your eyes jump randomly to whatever candle looks biggest. Follow this location-first workflow: First, zoom out and map the environment. Second, identify if price is near an edge, middle, or prior swing. Third, cross-check the higher-timeframe location. Fourth, evaluate local behavior (rejection or acceptance). Fifth, determine the final reading quality. Location sets the stage; only then do you audit the actors.",
    context: {
      keyTerms: [
        { term: "Analysis Workflow", definition: "A step-by-step checklist that keeps your chart reading objective and consistent." },
        { term: "Zoom Out Habit", definition: "Always starting your session by looking at the broader market structure." },
        { term: "Stage Setting", definition: "Identifying the location boundaries before allowing yourself to interpret any candle." },
        { term: "Disciplined Reading", definition: "Forming market opinions based strictly on the alignment of location and behavior." },
        { term: "Validation Step", definition: "Defining what price must do next to prove your reading is correct." }
      ],
      whyThisMatters: "Following a structured workflow keeps you objective and prevents you from forcing setups in random locations.",
      realLifeExample: "You open a chart. Instead of guessing direction, you check: Is price at a key boundary? If not, you close the chart. If yes, you start auditing candle behavior.",
      commonMistake: "Analyzing candle shapes before identifying where those candles are located on the broader map.",
      quickNote: "Always check the address before you trust the message."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Good Location or Poor Location?",
    label: "Practice Drill",
    visualKey: "location-quality-practice-drill",
    body: "Let's put your location-reading discipline to the test. In this drill, we present a realistic market scenario where price prints an active candle in the middle of a wide range. Your goal is to evaluate the location quality, ignore the visual appeal of the candle shape, and select the most disciplined reading. Read the scenario and inspect the visual model carefully before choosing.",
    taskData: {
      type: "choice_block",
      question: "Price is trading inside a wide horizontal range between $100 (range floor) and $120 (range ceiling). Price suddenly prints a very strong green candle on the hourly chart, closing near its high at $110. This candle is sitting directly in the middle of the range, far from the boundaries and prior swings. There is no nearby reference zone, and higher-timeframe structure is neutral. What is the most disciplined location reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because the green candle is large and closed near its high, indicating strong buying pressure.",
          isCorrect: false,
          feedback: "Incorrect. The size of the candle is attractive, but because it formed in the middle of a range (poor location), its information quality is very low."
        },
        {
          id: "B",
          text: "Strong evidence because any large candle matters equally regardless of where it forms on the chart.",
          isCorrect: false,
          feedback: "Incorrect. Not all chart areas are equal. The location changes the weight of the evidence. A candle in the middle of a range is highly random."
        },
        {
          id: "C",
          text: "Poor or low-quality location because the move occurred in the middle of the range without any key reference structures nearby.",
          isCorrect: true,
          feedback: "Correct! This is a poor location. Although the candle looks strong, its position in the dead center of the range makes it unreliable noise."
        },
        {
          id: "D",
          text: "Guaranteed reversal because price is inside a range and must rotate back immediately.",
          isCorrect: false,
          feedback: "Incorrect. Ranges lead to rotations, but there are no guarantees in trading. In the middle of the range, price can drift unpredictably."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Middle Range Zone", definition: "The central portion of a range where buying and selling forces are in equilibrium, creating noise." },
        { term: "Candle Devaluation", definition: "Discounting the significance of a strong candle because it formed in a low-priority area." },
        { term: "Reference Vacuum", definition: "A chart area devoid of prior swings or key zones, making it impossible to measure reaction quality." },
        { term: "Discipline Override", definition: "Choosing to ignore an active-looking candle because it failed your location filter." },
        { term: "Range Rotation Rule", definition: "The tendency of price to traverse the middle of a range quickly rather than reverse there." }
      ],
      whyThisMatters: "This drill trains you to resist the visual temptation of trading strong-looking candles that have no structural backup.",
      realLifeExample: "You see BTC print a huge green bar. You check the chart and see it is in the middle of a consolidation range. You sit on your hands and wait.",
      commonMistake: "Entering a trade in the middle of a range because you got excited by a single fast candle.",
      quickNote: "A big candle in the middle of a range is just noise trying to look like a signal."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Know Where Price Is Before Judging What It Does",
    label: "Core Debrief",
    visualKey: "location-reading-debrief",
    body: "Congratulations! You have completed the Module 0.8 Core Concept. You have mastered one of the most critical filters in trading: Location Awareness. You now understand that a candlestick is only as valuable as the ground it stands on. By ignoring the noisy middle, focusing on structure edges, thinking in zones, and verifying with higher timeframes, you have elevated your chart reading far above the retail average. You are now ready to apply these location filters to real charts.",
    context: {
      keyTerms: [
        { term: "Location Filter", definition: "The strict rule of rejecting any chart evidence that does not form at a key structural boundary." },
        { term: "Zone Awareness", definition: "Viewing chart levels as flexible bands of order flow rather than rigid decimal lines." },
        { term: "Edge Focus", definition: "Directing all your analytical attention to the outer boundaries of market structures." },
        { term: "Contextual Weighting", definition: "Evaluating candle strength only after validating the location quality." },
        { term: "Top-Down Discipline", definition: "Consistently referencing higher timeframes to prevent trading into major structural walls." }
      ],
      whyThisMatters: "Location awareness is your shield. It prevents you from taking low-quality trades in the middle of noise, preserving your capital for high-priority opportunities.",
      realLifeExample: "A professional trader opens a chart, identifies that price is drifting in the middle of a range, and closes the platform. They only work when price reaches the edges.",
      commonMistake: "Forgetting the location rule when a candle looks extremely clean and fast, leading to an undisciplined entry.",
      quickNote: "Do not judge what price did until you know where it happened."
    }
  }
];
