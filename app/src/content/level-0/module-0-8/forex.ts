import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.8 - Forex Roadway Track Cards
 * Focus: Forex Market Location: Reading Where a Currency Pair Is Before Trusting the Move
 * Core habit: "Before judging the Forex move, locate the pair inside session structure, pair structure, USD context, and related-pair context."
 */
export const forexCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "The Forex Location Habit: Four-Dimensional Auditing",
    label: "Forex Foundation",
    visualKey: "forex-location-foundation",
    body: "In retail trading, beginners are taught to draw lines on a chart and buy or sell 'support and resistance' blindly. In institutional reality, a single candle or breakout has zero absolute meaning. Before you judge any local price movement, you must audit the pair's location across four distinct layers: Session Structure (timeline boundaries), Pair Structure (historical swing memory), USD Context (DXY index alignment), and Related-Pair Context (correlation verification). If any of these layers are conflicting or out of place, the location is low-quality, and the local candle signal must be ignored.",
    context: {
      keyTerms: [
        { term: "Forex Location Habit", definition: "The rule of auditing session structure, pair structure, USD context, and related pairs before reading local candles." },
        { term: "Session Structure", definition: "The temporal boundaries (highs and lows) established during the Asia, London, and New York sessions." },
        { term: "Pair Structure", definition: "A pair's individual historical memory, defined by multi-day swing highs and swing lows." },
        { term: "USD Context", definition: "The macro alignment of the US Dollar Index (DXY), which anchors all major USD currency pairs." },
        { term: "Related-Pair Context", definition: "The correlation status of sibling pairs (like GBP/USD verifying a EUR/USD move)." }
      ],
      whyThisMatters: "Treating price location as a four-dimensional audit stops you from chasing fake breakout candles in the middle of low-information zones.",
      realLifeExample: "You see EUR/USD print a strong green candle. Before calling it bullish, you check: Is it testing a session edge? Is it aligned with a prior swing? Is DXY at resistance? Is GBP/USD moving up? If all four match, you have a high-priority location.",
      commonMistake: "Treating support and resistance as simple lines on a single chart and trading wicks without checking USD or session alignment.",
      quickNote: "Before judging the candle, locate the pair across all four context layers."
    }
  },
  {
    type: "visual_intro",
    title: "Layer 1: Session Structure and Timeline Coordinates",
    label: "Session Location",
    visualKey: "forex-session-high-low-location",
    body: "The Forex market runs 24 hours a day, but volume is highly concentrated. Session boundaries—the Asia range, London open expansion, and New York reaction zones—are not brick-wall barriers where price must bounce. They are temporal reference zones where major orders are matched. When price approaches a session boundary, it is entering Layer 1 of its location map. Your task is to observe whether the session edge is defended (Limit Rejection), swept (Overshoot & Return), or accepted (Expansion Hold).",
    context: {
      keyTerms: [
        { term: "Temporal reference", definition: "Using session highs and lows as behavioral markers rather than absolute support or resistance lines." },
        { term: "Asia Range boundary", definition: "The baseline ceiling and floor established during low-volume Asian hours, tested by London." },
        { term: "Limit Rejection", definition: "When price attempts to breach a session edge but closes back inside, leaving a significant wick." },
        { term: "Expansion Hold", definition: "A clean body close outside a session boundary followed by consolidation, proving acceptance." },
        { term: "Overshoot & Return", definition: "A false expansion where price sweeps past a session high/low but quickly closes back inside." }
      ],
      whyThisMatters: "Session structure tells you who is in control of the daily timeline, preventing you from buying wicks that are actually liquidity sweeps.",
      realLifeExample: "London volume pushes EUR/USD 5 pips above the Asia high. You do not buy. You wait for the candle close to see if the session high location is accepted or swept.",
      commonMistake: "Assuming that a session high is a simple resistance line that will guarantee a bounce, instead of waiting for behavior proof.",
      quickNote: "Session edges do not cause bounces. They are zones where institutional order matching reveals direction."
    }
  },
  {
    type: "visual_intro",
    title: "The Midpoint Noise: Filtering Session Structure",
    label: "Middle-Zone Noise",
    visualKey: "forex-session-middle-zone-noise",
    body: "Within any daily session structure, there is a high-information edge and a low-information midpoint. The center of a session range represents price equilibrium, where buy and sell orders are balanced and minor retail flows chop price back and forth. If a pair prints an active-looking candle in this middle zone, it is noise. Without the presence of resting institutional orders that cluster at session edges, midpoint price moves lack momentum and follow-through. The location devalues the candle.",
    context: {
      keyTerms: [
        { term: "Price Equilibrium", definition: "The balanced center of a range where buying and selling pressures cancel each other out." },
        { term: "Low-Information Zone", definition: "Areas inside a range where price behavior is random and provides no edge." },
        { term: "Midpoint Chop", definition: "Sideways, overlapping price movement in the center of a session structure." },
        { term: "Location Devaluation", definition: "Lowering the priority of a candle pattern because it formed in a random midpoint." },
        { term: "Edge Focus", definition: "Discipline to only read candle behavior when price is interacting with outer boundaries." }
      ],
      whyThisMatters: "Filtering out midpoint candles keeps you from entering trades in choppy, low-probability zones where price has no structural momentum.",
      realLifeExample: "GBP/USD prints a massive red engulfing candle. You check the chart and see it is in the dead center of the Asia range. You classify it as noise and stand aside.",
      commonMistake: "Failing to check if a strong candle is at an edge, leading to buying high and selling low inside range chop.",
      quickNote: "No matter how strong a candle looks, if it forms in the middle of the range, it is noise."
    }
  },
  {
    type: "visual_intro",
    title: "Layer 2: Pair Structure (London Expansion Limits)",
    label: "London Expansion Location",
    visualKey: "forex-london-expansion-location",
    body: "When the London session opens, European capital enters, often expanding the price beyond the Asia range limits. This is the first major test of Layer 2: Pair Structure. As price expands, you must audit where this expansion stalls relative to the pair's daily structure. A breakout that occurs without a consolidation base above the Asia high lacks structural acceptance. You are auditing the quality of the new location, checking if the pair can sustain value outside its baseline range.",
    context: {
      keyTerms: [
        { term: "Pair Structure Expansion", definition: "How the pair establishes new directional zones outside the initial session range." },
        { term: "Consolidation Base", definition: "A cluster of small-bodied candles holding above a level, proving the new location is accepted." },
        { term: "Sustained Value", definition: "Price holding outside a boundary for multiple candles, establishing a new trend floor." },
        { term: "Expansion Stall", definition: "When a breakout loses momentum immediately after crossing a boundary, warning of a trap." },
        { term: "Structural Acceptance", definition: "Confirmation that the market has accepted the new higher or lower price tier." }
      ],
      whyThisMatters: "Auditing expansion location stops you from chasing momentum right as the pair runs out of volume at a structural exhaustion point.",
      realLifeExample: "EUR/USD breaks the Asia high at London open, but stalls immediately and prints tiny dojis. You classify the location as an expansion stall and wait.",
      commonMistake: "Chasing a London breakout candle the instant it crosses the Asia high without checking if it builds a consolidation base.",
      quickNote: "Breakouts must prove they can accept the new location before you trust the move."
    }
  },
  {
    type: "visual_intro",
    title: "Session Handoff: Transitioning Pair Structure",
    label: "New York Location Shift",
    visualKey: "forex-new-york-location-shift",
    body: "Forex location is dynamic. The New York open introduces a massive wave of US liquidity that tests the locations established during the London session. This is the session handoff. New York volume will either defend the London expansion high/low (Continuation Hold), reject the European direction completely (Reversal), or fail to expand (Consolidation). Before reading any US session candles, locate the pair relative to the London high and low coordinates to see if the session handoff is aligned.",
    context: {
      keyTerms: [
        { term: "Session Handoff", definition: "The transitional period when London volume fades and New York liquidity takes control." },
        { term: "London Coordinates", definition: "The high and low extremes printed during European hours, serving as New York's primary map." },
        { term: "Continuation Hold", definition: "When New York tests the London high/low from above/below and rejects returning inside." },
        { term: "Handoff Alignment", definition: "When both London and New York volume push price in the same direction." },
        { term: "Reversal Trap", definition: "When New York completely undoes a London breakout, trapping morning momentum traders." }
      ],
      whyThisMatters: "Tracking the session handoff protects you from holding stale London trend assumptions when US volume enters and rejects the location.",
      realLifeExample: "EUR/USD rallied all morning in London. New York opens, tests the London high, but wicks back down and drops inside. You update your location map to bearish reversal.",
      commonMistake: "Assuming London's trend will automatically continue through New York without auditing how US volume handles the London coordinates.",
      quickNote: "The London high is New York's battlefield. Watch how US volume behaves when testing it."
    }
  },
  {
    type: "visual_intro",
    title: "Layer 3: Prior Pair Swings (Multi-Day Memory)",
    label: "Pair Swing Location",
    visualKey: "forex-pair-swing-location",
    body: "Beyond daily session boundaries lies Layer 3: Prior Pair Swings. These are the multi-day peaks and troughs where major capital imbalances previously reversed the market. These locations carry a deeper structural memory than intraday session lines. When a currency pair returns to a major daily or 4-hour swing low, local session candles change meaning. A bearish candle testing a daily swing floor is not a signal to sell—it is a test of structural defense. You must locate the pair relative to these multi-day coordinates.",
    context: {
      keyTerms: [
        { term: "Multi-Day Memory", definition: "The tendency of price to react at significant historical turning points from previous days." },
        { term: "Swing Low Floor", definition: "A prior major daily or 4-hour bottom where buyers previously overwhelmed sellers." },
        { term: "Swing High Ceiling", definition: "A prior major daily or 4-hour peak where sellers previously overwhelmed buyers." },
        { term: "Structural Defense", definition: "Institutional buy or sell limits placed at major swing levels to defend positions." },
        { term: "Local vs. Macro Location", definition: "Comparing immediate session lines with major daily swing coordinates." }
      ],
      whyThisMatters: "Prioritizing prior swing locations stops you from selling breakdown candles that are actually slamming directly into multi-day buying support.",
      realLifeExample: "USD/JPY is trending down. It prints a strong red candle, but it is testing a major 4-hour swing low. You do not sell; you wait to see if the swing location rejects the move.",
      commonMistake: "Trading local breakouts directly into major daily swing floors, resulting in instant reversal traps.",
      quickNote: "Daily swing locations override intraday session boundaries. Always map the daily landmarks first."
    }
  },
  {
    type: "visual_intro",
    title: "Layer 4: USD Context (The Macro DXY Anchor)",
    label: "USD Location Context",
    visualKey: "forex-usd-location-context",
    body: "Because the US Dollar anchors over 80% of all Forex transactions, you cannot read any major pair in isolation. This is Layer 4: USD Context. The US Dollar Index (DXY) represents the aggregate strength of the USD. If EUR/USD is testing a local support floor, but DXY is trading in midpoint noise or breaking out of its own support floor, the EUR/USD floor is unstable. A high-quality location requires alignment: a pair at support must be backed by the USD index sitting at resistance.",
    context: {
      keyTerms: [
        { term: "USD Index (DXY)", definition: "A measure of the value of the US Dollar relative to a basket of foreign currencies." },
        { term: "Macro Anchor", definition: "Using the DXY index to determine the true strength or weakness driving major USD pairs." },
        { term: "Context Alignment", definition: "When DXY is at resistance while a major USD pair (like EUR/USD) is at support." },
        { term: "Context Conflict", definition: "When DXY and a currency pair are both testing support, indicating an unstable, non-correlated move." },
        { term: "Index Filter", definition: "Using DXY location to approve or reject local pair setups." }
      ],
      whyThisMatters: "Checking USD context prevents you from trading fake pair setups that are contradicted by the true underlying movement of the Dollar.",
      realLifeExample: "EUR/USD is at a support floor. You check the DXY chart and see it is testing a daily resistance ceiling. The context is aligned, making the EUR/USD support high-quality.",
      commonMistake: "Trading major currency pairs without looking at the location of the US Dollar Index, ignoring the macro anchor.",
      quickNote: "If the US Dollar is not at a key location, your major pair's local level is much less reliable."
    }
  },
  {
    type: "visual_intro",
    title: "Layer 5: Related-Pair Context (Correlation Check)",
    label: "Related-Pair Location",
    visualKey: "forex-related-pair-location",
    body: "The final layer of the location audit is Related-Pair Context. Correlated pairs (such as EUR/USD and GBP/USD) should move in harmony when driven by broad institutional capital. If EUR/USD is attempting to break a session high, but GBP/USD is trapped in midpoint noise and DXY is flat, the EUR/USD move is isolated. Isolated breakouts are usually retail-driven traps. An aligned location—where multiple major pairs test boundaries together—confirms institutional participation.",
    context: {
      keyTerms: [
        { term: "Related-Pair Context", definition: "Using the location of correlated pairs to verify the broad validity of a move." },
        { term: "Isolated Breakout", definition: "A price expansion occurring on only one pair, indicating low institutional backing." },
        { term: "Coordinated Expansion", definition: "When multiple majors break session boundaries simultaneously, proving broad flow." },
        { term: "Retail Trap", definition: "An isolated move designed to suck in retail breakout traders before rotating back." },
        { term: "Correlation Verification", definition: "Checking if sibling pairs are at similar structural edges before trading." }
      ],
      whyThisMatters: "Cross-checking related pairs acts as a powerful safety filter, keeping you out of false moves that occur in isolation.",
      realLifeExample: "EUR/USD breaks its daily high, but GBP/USD is completely flat in its middle zone. You refuse to buy the EUR/USD breakout because it lacks related-pair alignment.",
      commonMistake: "Focusing on a single pair chart with tunnel vision, ignoring key warning signs on related major pairs.",
      quickNote: "True institutional moves are broad. If only one pair is moving, be highly suspicious."
    }
  },
  {
    type: "visual_intro",
    title: "The Forex Location Workflow",
    label: "Location Workflow",
    visualKey: "forex-location-first-workflow",
    body: "To build a professional chart-reading habit, you must follow a disciplined, top-down workflow. Never let your eyes jump straight to a candle's body or wick. Follow this sequence: First, identify the session structure boundaries. Second, map the pair's multi-day swing structure. Third, verify the DXY index location. Fourth, cross-check related-pair locations. Only when the location is confirmed across these layers do you look at local candles to read behavior.",
    context: {
      keyTerms: [
        { term: "Location Workflow", definition: "A top-down audit process prioritizing structural coordinates over candle shapes." },
        { term: "Session Mapping", definition: "Marking current day session boundaries to establish the immediate playing field." },
        { term: "Swing Integration", definition: "Overlaying historical daily/4h swings to check for major macro support or resistance." },
        { term: "Context Check", definition: "Auditing USD index and related pairs to verify broad capital alignment." },
        { term: "Behavior Verification", definition: "Analyzing local wicks and closes only after location quality has been approved." }
      ],
      whyThisMatters: "A structured workflow guarantees objectivity, stopping you from chasing shiny candles that form in random, unprofitable areas.",
      realLifeExample: "You open your charts. You don't look at candles. You map: Asia boundaries, prior daily swing lows, DXY resistance, and check GBP/USD. Only then do you analyze the EUR/USD 15m closes.",
      commonMistake: "Analyzing candle wicks and entry signals before mapping session and macro coordinates.",
      quickNote: "First locate the pair, then read the candle."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Multi-Layer Location Audit",
    label: "Practice Drill",
    visualKey: "forex-location-quality-practice-drill",
    body: "Apply the location-first habit to this scenario: EUR/USD prints a strong green candle on the 15-minute chart, closing near its high. However, price is in the middle of its Asia range ($1.0850). GBP/USD is also trading in its midpoint noise, and DXY is consolidated. How should you read this setup based on the four-layer location model?",
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
    title: "Debrief: The Complete Forex Location Checklist",
    label: "Forex Debrief",
    visualKey: "forex-location-debrief",
    body: "Congratulations! You have completed the Module 0.8 Forex Roadway track. You have built a solid foundation in Location Awareness. Remember: a candlestick is only as valuable as the ground it stands on. By ignoring the noisy middle, mapping session boundaries, prioritizing daily swings, checking USD context, and verifying related-pair correlation, you have adopted the professional location-first habit. You are now equipped to read Forex charts with institutional objectivity.",
    context: {
      keyTerms: [
        { term: "Location Checklist", definition: "The mental audit of session, pair, USD, and correlation boundaries before making a trading decision." },
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
