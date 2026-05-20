import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.8 - Forex Roadway Track Cards
 * Focus: Forex Market Location: Reading Where a Currency Pair Is Before Trusting the Move
 */
export const forexCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Forex Location Starts With Where the Pair Is",
    label: "Forex Foundation",
    visualKey: "forex-location-foundation",
    body: "In the Forex market, price movement does not happen in a vacuum. A single candlestick, a sudden break, or a fast pullback carries a completely different meaning depending on where it forms. Before you judge the strength of a candle, you must locate the pair. Is price near a session high or low? Is it sitting at a prior swing level, or is it drifting aimlessly in the middle of the range? By checking where the pair is trading first, you filter out random noise and ensure your reading is backed by structural significance.",
    context: {
      keyTerms: [
        { term: "Pair Location", definition: "The specific price zone where a currency pair is trading relative to major session and structural reference points." },
        { term: "Location Filter", definition: "A disciplined habit of rejecting any candle pattern that does not form at a high-information area." },
        { term: "Session Boundaries", definition: "The high and low price marks established during specific trading sessions (Asia, London, New York)." },
        { term: "Structure Edge", definition: "The outer ceiling or floor of a range where buying or selling pressure is historically concentrated." },
        { term: "Reading Quality", definition: "An assessment of how reliable a price move is, based on its location and behavior." }
      ],
      whyThisMatters: "Without checking the pair's location first, you will constantly be trapped by strong-looking candles that are actually forming in weak, noisy areas.",
      realLifeExample: "You see EUR/USD print a large green candle. If it forms in the dead center of the daily range, you ignore it. If it forms right at a major daily support floor, you pay close attention.",
      commonMistake: "Failing to check where the pair is trading relative to the daily map before trying to read individual candles.",
      quickNote: "Good Forex reading starts by locating the pair first."
    }
  },
  {
    type: "visual_intro",
    title: "Session Highs and Lows Are Location References",
    label: "Session Location",
    visualKey: "forex-session-high-low-location",
    body: "Session highs and lows are not magic lines where price is guaranteed to reverse. Instead, they are historical reference points that show where buyers and sellers reached their limits during specific trading windows. When price returns to a session boundary—such as an Asia high or a prior London low—it is entering a high-information location. Your job is not to predict a bounce, but to observe how price behaves: does it reject the level, overshoot it and return inside, or accept the level and push through?",
    context: {
      keyTerms: [
        { term: "Session Reference", definition: "Using highs and lows of previous trading sessions as coordinates to judge current behavior." },
        { term: "Asia Range Limits", definition: "The maximum high and low prices printed during the Tokyo session, serving as a day floor and ceiling." },
        { term: "Behavior Observation", definition: "Waiting to see if price rejects or accepts a level rather than predicting an immediate turn." },
        { term: "Zone Depth", definition: "The small price range around a session level where order execution naturally hovers." },
        { term: "Overshoot & Return", definition: "When price temporarily spikes past a session high/low but closes back inside the boundary." }
      ],
      whyThisMatters: "Treating session highs and lows as behavioral locations stops you from taking blind trades right at the level, saving you from breakout traps.",
      realLifeExample: "Price approaches the Asia session high on GBP/USD. Instead of selling immediately, you wait to see if the next candle wicks and closes back below the level.",
      commonMistake: "Assuming that a session high will automatically act as a brick-wall barrier and cause a reversal.",
      quickNote: "Session highs and lows are not instructions. They are places to observe behavior."
    }
  },
  {
    type: "visual_intro",
    title: "The Middle of a Session Range Gives Weaker Information",
    label: "Middle-Zone Noise",
    visualKey: "forex-session-middle-zone-noise",
    body: "When a currency pair is trading inside the middle zone of a session range, the quality of your reading drops significantly. The middle of the range represents price equilibrium, where buy and sell forces are in balance. There are no major resting orders or structural defenses here, meaning price moves randomly. Even if the pair prints a very strong green or red candle in this zone, it is highly likely to lead to immediate chop. Disciplined readers stand aside and wait for price to reach the outer boundaries.",
    context: {
      keyTerms: [
        { term: "Middle Zone", definition: "The central portion of a range structure where price moves with low informational value." },
        { term: "Price Equilibrium", definition: "A state where supply and demand are balanced, leading to random, non-directional drift." },
        { term: "Noisy Candles", definition: "Active-looking candles forming in weak locations that do not represent institutional intention." },
        { term: "Outer Boundaries", definition: "The extreme high and low edges of a session range where structure defenses are tested." },
        { term: "Reading Devaluation", definition: "Lowering the importance of candle evidence because it forms inside a low-priority zone." }
      ],
      whyThisMatters: "Filtering out middle-zone noise prevents you from overtrading in choppy conditions where no clear structural advantage exists.",
      realLifeExample: "EUR/USD is trading exactly in the middle of its 60-pip Asia range. A massive red candle prints on the 15-minute chart. You ignore it because the location is weak.",
      commonMistake: "Getting excited by a fast, large candle that forms in the middle of range noise, leading to an impulsive entry.",
      quickNote: "The middle of a session range often gives weaker information."
    }
  },
  {
    type: "visual_intro",
    title: "London Expansion Location Needs Proof",
    label: "London Expansion Location",
    visualKey: "forex-london-expansion-location",
    body: "The London open brings a massive influx of liquidity that often pushes price beyond the quiet Asia range boundaries. This movement is called London expansion. However, the location where this expansion happens must be audited. A price spike that quickly wicks back inside the Asia high is a rejection reading. A price push that holds its body firmly above the Asia high, followed by consolidated value, is an acceptance reading. You must wait for the close to prove the location is accepted.",
    context: {
      keyTerms: [
        { term: "London Expansion", definition: "The breakout push or range expansion that occurs when European liquidity enters the market." },
        { term: "Acceptance Hold", definition: "When price closes outside a boundary and consolidates, proving the new price is accepted." },
        { term: "Rejection Return", definition: "When price spikes past a boundary but closes back inside, showing defense." },
        { term: "Asia High Test", definition: "The critical moment when London session volume tests the upper limit of the Asian session." },
        { term: "Close Verification", definition: "Waiting for the hourly or 15-minute candle to close to confirm if the expansion succeeded." }
      ],
      whyThisMatters: "Waiting for proof of acceptance prevents you from buying London breakout wicks that instantly reverse back into the Asia range.",
      realLifeExample: "At 8:05 AM, EUR/USD spikes 15 pips above the Asia high. You wait until the hourly candle closes at 9:00 AM. It closes back inside the range, proving rejection.",
      commonMistake: "Entering a breakout trade the second price crosses a session high before the candle has closed.",
      quickNote: "Expansion is not the answer. Behavior around the expansion location gives the answer."
    }
  },
  {
    type: "visual_intro",
    title: "New York Can Change the Location Reading",
    label: "New York Location Shift",
    visualKey: "forex-new-york-location-shift",
    body: "The New York session introduces a new wave of volume that interacts directly with the locations established by London. New York will do one of three things: continue the London expansion, reject the London high/low and pull price back into the morning range, or consolidate price in a tight range. A Lurnava reader always updates the location context when New York opens, checking if the US session supports or contradicts the European session's structure.",
    context: {
      keyTerms: [
        { term: "Session Shift", definition: "The transition of market control and volume from London to the New York session." },
        { term: "New York Rejection", definition: "When US session volume reverses the directional expansion created during London." },
        { term: "London Expansion High", definition: "The maximum price reached during the European session before New York begins." },
        { term: "Continuation Hold", definition: "When New York defends the London highs or lows, extending the morning's expansion." },
        { term: "Overlap Window", definition: "The highly liquid 3-hour period when both London and New York sessions are active." }
      ],
      whyThisMatters: "Knowing that New York can reverse London structures prevents you from holding stale directional assumptions across session transitions.",
      realLifeExample: "EUR/USD trended up all morning in London. New York opens, spikes above the London high, but wicks back down and drops. You update your reading to bearish rejection.",
      commonMistake: "Assuming a trend established in London will automatically continue through the New York session without checking New York's local reaction.",
      quickNote: "EUR/USD may break above Asia during London, but if New York pulls it back, the location reading changes."
    }
  },
  {
    type: "visual_intro",
    title: "Prior Pair Swings Become Forex Reference Areas",
    label: "Pair Swing Location",
    visualKey: "forex-pair-swing-location",
    body: "Every currency pair has its own memory, recorded as prior swing highs and swing lows. These swings are historical price peaks and troughs where buying or selling pressure completely overwhelmed the other side, causing a reversal. When a pair returns to a prior swing area, that location acts as a major reference floor or ceiling. Instead of expecting an automatic bounce, check how the pair reacts. A clean wick shows defense; a solid close beyond shows structural transition.",
    context: {
      keyTerms: [
        { term: "Prior Swing", definition: "A clear historical peak or trough where price previously changed direction." },
        { term: "Reference Ceiling", definition: "A prior swing high location used to observe potential sell defense or breakout acceptance." },
        { term: "Reference Floor", definition: "A prior swing low location used to observe potential buy defense or breakdown acceptance." },
        { term: "Structural Transition", definition: "When a pair breaks and accepts a location beyond a major prior swing, altering the market map." },
        { term: "Reaction Audit", definition: "Analyzing the close quality of candles as they interact with a historical swing." }
      ],
      whyThisMatters: "Using prior swings as reference locations provides objective targets to watch, keeping you from guessing where price will stall.",
      realLifeExample: "USD/JPY drops toward the low it bounced from two days ago. You map that swing low and watch for buy defense or a clean breakdown close.",
      commonMistake: "Buying or selling blindly at prior swing points without waiting to see if price rejects or accepts the location.",
      quickNote: "A prior swing is not a prediction of a bounce. It is a landmark to watch for behavior."
    }
  },
  {
    type: "visual_intro",
    title: "USD Context Changes Forex Location Quality",
    label: "USD Location Context",
    visualKey: "forex-usd-location-context",
    body: "Because the US Dollar is the counter or base currency for all major pairs, you cannot analyze a pair's location in isolation. A pair like EUR/USD may look like it is approaching a clean support floor, but if the US Dollar Index (DXY) is sitting directly at a major daily support ceiling, the USD is poised to strengthen. A strengthening USD will apply downward pressure on EUR/USD, potentially causing it to break its support floor. Always check if USD context aligns with your pair's location.",
    context: {
      keyTerms: [
        { term: "USD Context", definition: "The structural location of the US Dollar Index (DXY) relative to its own key zones." },
        { term: "Context Alignment", definition: "When the location of the USD index supports the expected behavior of the currency pair." },
        { term: "Context Conflict", definition: "When the USD index is poised to move in a direction that opposes the pair's local setup." },
        { term: "DXY Reference", definition: "Using the US Dollar Index chart as a macro coordinate filter for all major USD pairs." },
        { term: "Pressure Overlay", definition: "Considering the macro force of the USD before deciding if a pair's local support/resistance is high-quality." }
      ],
      whyThisMatters: "Checking USD context prevents you from buying a major pair support floor right as the US Dollar is preparing to rally.",
      realLifeExample: "EUR/USD is at a support floor. You check the DXY index and see it is in the middle of a choppy range. There is no DXY obstacle, so the EUR/USD location quality is verified.",
      commonMistake: "Trading USD-paired currencies without checking the location of the US Dollar Index itself.",
      quickNote: "USD context can support or challenge the pair's location."
    }
  },
  {
    type: "visual_intro",
    title: "Related Pairs Help You Avoid Location Tunnel Vision",
    label: "Related-Pair Location",
    visualKey: "forex-related-pair-location",
    body: "In Forex, related pairs (like EUR/USD and GBP/USD) often move in tandem due to shared currency exposure. If you see EUR/USD pushing past a major resistance ceiling, but GBP/USD is stuck in the middle of a messy range and DXY is flat, the breakout location is isolated. An isolated breakout is much more likely to be a fake move. If related pairs are also testing or accepting major boundaries together, the location reading is aligned and carries higher quality.",
    context: {
      keyTerms: [
        { term: "Related-Pair Location", definition: "Comparing the current structure coordinates of correlated currency pairs." },
        { term: "Isolated Breakout", definition: "A breakout occurring on only one currency pair while related pairs remain trapped in noise." },
        { term: "Aligned Location", definition: "When multiple correlated pairs reach and test structural boundaries simultaneously." },
        { term: "Correlation Filter", definition: "Using related pair behavior to confirm if a market move is supported by broad capital flows." },
        { term: "Tunnel Vision Trap", definition: "Focusing entirely on a single chart while ignoring conflicting setups in related assets." }
      ],
      whyThisMatters: "Comparing related pairs acts as a confirmation filter, protecting you from buying low-probability, isolated breakouts.",
      realLifeExample: "EUR/USD spikes above its session high, but GBP/USD is trading in its midpoint noise. You stay patient and do not buy the EUR/USD move.",
      commonMistake: "Failing to check GBP/USD or USD context, leading to trading an isolated EUR/USD breakout that immediately fails.",
      quickNote: "Related pairs help you avoid reading one pair in isolation."
    }
  },
  {
    type: "visual_intro",
    title: "Forex Location First, Pair Behavior Second",
    label: "Location Workflow",
    visualKey: "forex-location-first-workflow",
    body: "To read charts like a professional, you must build a structured, step-by-step analytical habit. You cannot let your eyes jump immediately to the largest candle on the screen. Follow this Forex workflow: First, locate the pair relative to session highs, lows, and prior swings. Second, verify if price is at a structural edge or in midpoint noise. Third, audit the USD context and related pairs. Fourth, evaluate local behavior (rejection or acceptance). Fifth, determine reading quality.",
    context: {
      keyTerms: [
        { term: "Forex Workflow", definition: "A systematic checklist used to audit a currency pair before interpreting candle shapes." },
        { term: "Location Scan", definition: "The initial step of mapping where price is relative to session highs, lows, and swings." },
        { term: "Context Cross-Check", definition: "Comparing the pair's location with DXY and related currency pairs to find alignment." },
        { term: "Behavior Audit", definition: "Evaluating the candle closes and wicks only after location quality has been approved." },
        { term: "Quality Rating", definition: "Classifying the final chart reading as clear, mixed, or unclear based on structural alignment." }
      ],
      whyThisMatters: "Following a structured workflow keeps you objective and prevents you from forcing trade ideas in random locations.",
      realLifeExample: "You open the EUR/USD chart. You immediately check: Is price at a session edge? If yes, you check DXY. If aligned, you look at the 15m candle closes.",
      commonMistake: "Analyzing candle wicks and bodies before identifying where they are on the session map.",
      quickNote: "First locate the pair, then judge behavior."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Forex Location Useful or Weak?",
    label: "Practice Drill",
    visualKey: "forex-location-quality-practice-drill",
    body: "Let's put your Forex location-reading discipline to the test. In this drill, we present a realistic market scenario where a currency pair prints an active-looking candle. Your goal is to evaluate the location quality, ignore the visual size of the candle, and select the most disciplined reading. Study the scenario and the visual mock chart before making your choice.",
    taskData: {
      type: "choice_block",
      question: "EUR/USD is currently trading inside its Asia session range. It prints a very strong green candle on the 15-minute chart, closing near its high at $1.0850. This candle is sitting directly in the middle of the range, far from the Asia high ($1.0900) and Asia low ($1.0800). GBP/USD is also sitting in the middle of its own range, and USD context (DXY) is completely flat and unclear. What is the most disciplined Forex location reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because EUR/USD printed a strong candle closing near its high, showing buyer control.",
          isCorrect: false,
          feedback: "Incorrect. The candle may be active, but its location in the middle of the session range lowers the reading quality to noise."
        },
        {
          id: "B",
          text: "Strong location because any large candle inside a liquid session range is important and should be traded.",
          isCorrect: false,
          feedback: "Incorrect. Not every candle matters equally. Location changes how useful the evidence is; in the middle of a range, price is highly random."
        },
        {
          id: "C",
          text: "Weak or low-quality location because the move formed in the middle of the range without any useful reference area or related-pair alignment.",
          isCorrect: true,
          feedback: "Correct! This is a weak or low-quality location. The move happened in the middle of the range, away from session edges or clear reference areas, and lacks related-pair support."
        },
        {
          id: "D",
          text: "Guaranteed reversal because price is inside the Asia range and must rotate back to the floor immediately.",
          isCorrect: false,
          feedback: "Incorrect. Being inside a range does not guarantee a reversal. It only means the location is weak and you should stand aside."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Midpoint Noise", definition: "The central portion of a session range where price action is highly random and lacks direction." },
        { term: "Isolated Candle Trap", definition: "Trading a single candle purely based on its visual size while ignoring its location." },
        { term: "Flat USD Context", definition: "When the DXY index is consolidated, providing no directional aid for currency pairs." },
        { term: "Discipline Stand-Aside", definition: "Refusing to trade active-looking candles because they formed in low-priority locations." },
        { term: "Range Rotation Rule", definition: "The tendency of price to drift through the middle of a range rather than reverse there." }
      ],
      whyThisMatters: "This drill trains you to resist the visual temptation of trading large green candles that have no structural backup.",
      realLifeExample: "You see EUR/USD print a fast green candle. You see it is in the middle of the range and GBP/USD is flat. You close your chart and do nothing.",
      commonMistake: "Chasing a breakout in the middle of a session range because a single candle looked fast.",
      quickNote: "A big candle in the middle of a session range is just noise trying to look like a move."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Locate the Pair Before Judging the Move",
    label: "Forex Debrief",
    visualKey: "forex-location-debrief",
    body: "Congratulations! You have completed the Module 0.8 Forex Roadway track. You have mastered one of the most critical analytical filters in Forex: Location Awareness. You now understand that a candlestick is only as valuable as the ground it stands on. By ignoring the noisy middle, focusing on session boundaries, prioritizing structural edges, and verifying with DXY and related pairs, you have elevated your chart reading far above the retail average. You are ready to apply these skills to live markets.",
    context: {
      keyTerms: [
        { term: "Forex Location Filter", definition: "The strict rule of rejecting any currency pair evidence that does not form at a session edge or prior swing." },
        { term: "Session Boundaries", definition: "The outer ceilings and floors of a session range where institutional order flow changes." },
        { term: "USD Index Overlay", definition: "Consistently referencing the DXY location to check if context supports the pair's setup." },
        { term: "Related-Pair Filter", definition: "Using correlations (e.g., EUR/USD vs GBP/USD) to ensure price action is broad rather than isolated." },
        { term: "Top-Down Reading", definition: "An analytical method that prioritizes macro location and session edges over individual candle wicks." }
      ],
      whyThisMatters: "Location awareness is your shield. It prevents you from taking low-quality trades in the middle of noise, preserving your capital for high-priority opportunities.",
      realLifeExample: "A professional trader logs in, identifies that EUR/USD is drifting in the middle of its London range, and logs out. They only work when price tests the edges.",
      commonMistake: "Forgetting the location rule when a pair candle looks extremely clean and fast, leading to an undisciplined entry.",
      quickNote: "Do not ask only whether the Forex candle is strong. Ask where the pair is."
    }
  }
];
