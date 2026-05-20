import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.7 - Forex Roadway Cards
 * Focus: Forex Market Conditions: Reading Pair Environments Through Sessions, Structure, and Context
 */
export const forexCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Forex Conditions Begin With Pair Environment",
    label: "Forex Foundation",
    visualKey: "forex-condition-foundation",
    body: "In Forex, a candlestick pattern or structure break does not stand alone. Every move is born inside a specific pair environment. That environment might be a clean trend, a quiet horizontal range, a messy transition, or choppy noise. But in the foreign exchange markets, this environment is also shaped by three powerful forces: session timing (hours when different global hubs trade), USD context (US Dollar strength or weakness), and related-pair behavior. A professional Forex reader does not look at a single EUR/USD candle in isolation. Before they trust any move, they ask: 'What condition is this currency pair in, and does the broader context support it?' Let's build this essential Forex reading filter.",
    context: {
      keyTerms: [
        { term: "Pair Environment", definition: "The overall structural condition (like a trend, range, or messy sideways movement) currently shaping a currency pair's movement." },
        { term: "Session Rhythm", definition: "The regular flow of activity and price swings as major global cities (Asia, London, and New York) open and close." },
        { term: "Forex Context Layer", definition: "Reading session hours, US Dollar strength, and related pairs together to confirm a currency pair's move." },
        { term: "USD Context", definition: "The directional pressure of the US Dollar, which naturally pushes other currency pairs up or down." },
        { term: "Related-Pair Alignment", definition: "Highly connected currency pairs moving in the same direction to confirm a setup." }
      ],
      whyThisMatters: "Without identifying the pair environment first, you will mistake quiet Asia range limits for active trend breakouts, and normal London pullbacks for complete market reversals.",
      realLifeExample: "You see EUR/USD push upward. If you identify the pair environment as a horizontal range during a quiet session, you expect rejection. If you identify it as a fresh London breakout with USD weakness, you expect continuation. The candle is the same; the environment changes the reading.",
      commonMistake: "Analyzing the shape of a single 15-minute candle without knowing what session it is in or what environment the pair is operating under.",
      quickNote: "Slow down and name the pair condition first. The environment is the translator of the move."
    }
  },
  {
    type: "visual_intro",
    title: "Session Timing Changes the Condition",
    label: "Session Environment",
    visualKey: "forex-session-condition-map",
    body: "A Forex day is not a single continuous block of time. It is a rhythm of opening and closing windows: the Tokyo/Asia window, the London window, the New York window, and the intense New York/London overlap. The same candlestick pattern can mean something completely different depending on which window it forms in. A strong green candle during the quiet Asia window usually signifies range exhaustion. The exact same candle during London might start a clean expansion (a breakout from consolidation). Session timing does not tell you what to do. It helps you understand the environment.",
    context: {
      keyTerms: [
        { term: "Asia Window", definition: "A quiet, lower-volume trading session where currency pairs typically consolidate sideways in narrow ranges." },
        { term: "London Window", definition: "A highly active session where major European volume enters, often starting directional price breakouts." },
        { term: "New York Window", definition: "An active session where US markets react to economic news, often continuing or reversing London's moves." },
        { term: "Session Overlap", definition: "The 4-hour window when both London and New York are open at the same time, creating the busiest trading period." },
        { term: "Timeframe Relativity", definition: "Judgement of candle sizes based on the normal price movements of the current session." }
      ],
      whyThisMatters: "Understanding session timing prevents you from expecting massive trend continuation during quiet, low-volume hours.",
      realLifeExample: "You notice a breakout candle on GBP/USD at 3:00 AM New York time (London Open). You recognize that the London window is starting, which supports a high-quality expansion condition. The session timing confirms the environment.",
      commonMistake: "Forcing trades during late New York or early Asia, expecting the market to trend cleanly when the session environment is naturally choppy.",
      quickNote: "A London break is useful, but it still needs quality. The session window is the playground of the pair."
    }
  },
  {
    type: "visual_intro",
    title: "Asia Range Is Often a Compression Condition",
    label: "Asia Compression",
    visualKey: "forex-asia-range-compression",
    body: "During the Tokyo and Asia sessions, major pairs like EUR/USD or GBP/USD usually enter a quiet, balanced state. Volume drops, and price bounces horizontally, forming a tight session range. This is a classic compression condition. Beginners see price hitting the top of this range and expect a breakout, or they sell the first breakout candle immediately. This is a mistake. In Forex, Asia ranges are reference boundaries. They show you where orders are accumulating. Asia compression (a quiet state where a currency pair moves sideways within a narrow horizontal box) does not predict direction; it sets a benchmark for the next session to challenge.",
    context: {
      keyTerms: [
        { term: "Asia Range", definition: "The highest and lowest prices reached during the Tokyo/Asia session." },
        { term: "Asia Compression", definition: "A quiet state where a currency pair moves sideways within a narrow horizontal box." },
        { term: "Reference Boundary", definition: "Using the highs and lows of a session to judge future breakouts." },
        { term: "Asia Sweep", definition: "A temporary spike outside the Asia session high or low that quickly returns back inside." },
        { term: "Volatility Contraction", definition: "The shrinking of price swings that typically happens before a large price breakout." }
      ],
      whyThisMatters: "Recognizing Asia as a compression environment stops you from chasing small moves and teaches you to wait for verified expansion.",
      realLifeExample: "EUR/USD consolidates in a tight 20-pip range during Asia. You mark the highs and lows. You do not trade inside it. You wait for London to test these boundaries to see if a real expansion condition develops.",
      commonMistake: "Assuming that every push outside the Asia range is a guaranteed trend, rather than checking if it's just a boundary sweep.",
      quickNote: "Asia compression gives you a reference, not an instruction. Let the market show its hand first."
    }
  },
  {
    type: "visual_intro",
    title: "London Expansion Must Prove Quality",
    label: "London Expansion",
    visualKey: "forex-london-expansion-quality",
    body: "When London opens, a wave of institutional volume (heavy volume from large financial institutions) enters the market. If the pair has been compressing during Asia, this new volume will often push price outside the Asia range boundaries. This shift is an expansion condition. However, expansion is not automatically a clean trend. You must audit the quality of the move. Did the breakout candle close cleanly outside the range? Does the next candle hold above the boundary, or does it immediately snap back inside? In Forex, expansion starts the question; follow-through holds provide the answer.",
    context: {
      keyTerms: [
        { term: "London Expansion", definition: "The release of volume at London open that pushes price outside Asia session boundaries." },
        { term: "Close Quality", definition: "Checking if a breakout candle closes strongly outside a boundary rather than leaving a long wick." },
        { term: "Hold Verification", definition: "Verifying if subsequent candles stay outside the broken level to confirm the move." },
        { term: "Fake Expansion", definition: "A false breakout where price spikes outside a boundary but quickly closes back inside." },
        { term: "Liquidity Grab", definition: "A quick spike past a boundary to clear out orders before reversing price in the opposite direction." }
      ],
      whyThisMatters: "Waiting to verify expansion quality saves you from buying the absolute top of a fake breakout and getting trapped.",
      realLifeExample: "GBP/USD spikes 15 pips above the Asia high at the London open. You wait for the hourly close. The candle closes strongly outside, and the next candle holds. This is a high-quality expansion condition.",
      commonMistake: "Chasing a fast London spike the second it crosses the Asia high without waiting for candle close quality or hold verification.",
      quickNote: "Expansion starts the question. The quality of the hold and follow-through helps answer it."
    }
  },
  {
    type: "visual_intro",
    title: "New York Can Continue, Reverse, or Create Transition",
    label: "New York Condition Shift",
    visualKey: "forex-new-york-condition-shift",
    body: "The New York session is not a passive repeat of London's direction. It is a highly active session that frequently shifts the pair's condition. New York can continue the existing London trend, reject the London expansion entirely (returning price to the Asia range), or create a messy transition environment as it digests macro data (high-impact US economic news). A trained learner does not assume London's bias is permanent. Before you audit New York candles, ask: 'Is this session confirming London's condition, challenging it, or turning it mixed?'",
    context: {
      keyTerms: [
        { term: "New York Shift", definition: "A change in the pair's environment as US traders enter the market." },
        { term: "Trend Continuation", definition: "When New York volume moves in the same direction as London, making new highs or lows." },
        { term: "Expansion Rejection", definition: "When New York rejects London's breakout, pushing price back inside the previous range." },
        { term: "Macro Event Distortion", definition: "Sudden price spikes and confusion caused by high-impact US economic reports (like inflation or employment reports)." },
        { term: "Session Overlap Transition", definition: "The time when European traders close positions and US traders open theirs." }
      ],
      whyThisMatters: "Realizing that New York can reverse London prevents you from holding trend positions that are actively showing rejection signs.",
      realLifeExample: "EUR/USD expands upward during London. At the New York open, a macro report releases. Price spikes down, closing back inside the Asia range. New York has shifted the condition from expansion to transition.",
      commonMistake: "Blindly buying pullbacks in New York under the assumption that the London trend must continue all day.",
      quickNote: "New York can confirm the move, challenge it, or turn it mixed. Always audit the new session's candles."
    }
  },
  {
    type: "visual_intro",
    title: "Pair Trend Condition Needs Session Support",
    label: "Forex Trend Condition",
    visualKey: "forex-trend-condition-session-support",
    body: "A clean trend condition in Forex is an environment where a pair builds a reliable sequence of structural steps (higher highs and higher lows, or lower lows and lower highs). But in Forex, structure is not enough. You must also audit session support. A healthy trend environment sees London expand the move, New York pull back to test structure, and New York volume hold that structure to continue. If pullbacks constantly break swing lows during New York, the trend condition is wobbly, and the reading shifts to mixed.",
    context: {
      keyTerms: [
        { term: "Forex Trend Condition", definition: "A market state where a pair consistently builds directional structure across session windows." },
        { term: "Structure Respect", definition: "When pullbacks hold above previous swing levels, showing buyers or sellers are defending value." },
        { term: "Session Follow-Through", definition: "When successive trading sessions continue the directional push instead of reversing it." },
        { term: "Trend Pullback", definition: "A temporary price drop against the main trend direction before the trend continues." },
        { term: "Directional Bias", definition: "The highest-probability direction based on clean session-backed structure." }
      ],
      whyThisMatters: "Checking session support prevents you from buying a 'trend' that is actively being rejected by major New York volume.",
      realLifeExample: "AUD/USD is trending up. London pushes price to a new high. New York pulls back to the previous London breakout point, holds it, and continues upward. This session support confirms a clean trend environment.",
      commonMistake: "Calling a pair trending when London moves one way and New York completely reverses it every single day.",
      quickNote: "A real Forex trend is a team effort between London and New York. Make sure they are playing on the same team."
    }
  },
  {
    type: "visual_intro",
    title: "Range Condition Punishes Trend Assumptions",
    label: "Forex Range Condition",
    visualKey: "forex-range-condition-rotation",
    body: "A Forex pair can spend hours, days, or even weeks trapped between established upper and lower boundaries. This is a range condition. Inside a range, the market is in horizontal balance. Beginners see a fast, strong green candle surge toward the range high and immediately buy, assuming a trend has started. This is how they get punished. In a range condition, strong candles are usually exhaustion sweeps running out of steam. Before you trust a directional push, identify if the environment is a range ceiling.",
    context: {
      keyTerms: [
        { term: "Range Condition", definition: "A balanced market state where price rotates horizontally between support and resistance." },
        { term: "Exhaustion Sweep", definition: "A candle that spikes outside a range boundary to clear orders but lacks volume to stay there." },
        { term: "Sideways Rotation", definition: "Price traveling horizontally from one range boundary to the other and back." },
        { term: "Range Floor", definition: "The bottom boundary where buying pressure consistently keeps price from dropping further." },
        { term: "Range Ceiling", definition: "The top boundary where selling pressure consistently keeps price from rising higher." }
      ],
      whyThisMatters: "Recognizing a range condition prevents you from chasing breakouts at the absolute highs or selling breakouts at the absolute lows.",
      realLifeExample: "USD/CAD has rotated between 1.3400 and 1.3450 for three days. Price spikes to 1.3452 with speed. You identify the range environment, realize it is likely an exhaustion sweep, and wait for a rejection close.",
      commonMistake: "Using trend-continuation rules (like buying pullbacks) inside a market that is clearly rotating sideways.",
      quickNote: "A range is not confusion. It is a condition that asks for slower, more careful reading."
    }
  },
  {
    type: "visual_intro",
    title: "USD Context Can Change the Pair Condition",
    label: "USD Condition Context",
    visualKey: "forex-usd-condition-context",
    body: "Because USD is the counterweight for all major currency pairs, its environment strongly impacts your pair readings. A EUR/USD upward expansion is highly reliable if the US Dollar Index (DXY) is simultaneously breaking down into a clean downtrend. If EUR/USD is attempting to break higher, but the USD is in a strong uptrend, the two structures are in conflict. A trained Forex learner does not read a pair in isolation. They check if USD context (US Dollar strength or weakness) supports, limits, or conflicts with the pair's condition.",
    context: {
      keyTerms: [
        { term: "USD Context", definition: "The directional pressure of the US Dollar, acting as the counterweight for major currency pairs." },
        { term: "DXY Index", definition: "US Dollar Index (DXY — an index tracking the value of the US Dollar against other major currencies)." },
        { term: "Contextual Alignment", definition: "When the US Dollar Index moves in the opposite direction of a currency pair's breakout." },
        { term: "Contextual Conflict", definition: "When a pair breakout occurs without supporting movement in the underlying US Dollar Index." },
        { term: "USD Counterweight", definition: "The pricing rule where USD strength naturally depresses other currencies, and vice versa." }
      ],
      whyThisMatters: "Checking USD context prevents you from buying a fake euro breakout that is fighting against a super-strong US Dollar.",
      realLifeExample: "EUR/USD pushes above a resistance level. You check the DXY index and see it has just broken below a major support level. The USD weakness aligns with the EUR strength. Your reading quality increases to clear.",
      commonMistake: "Auditing a major pair's breakout without checking if the US Dollar is supporting the move, leading to high-risk trades.",
      quickNote: "USD context helps you avoid reading one pair in isolation. The US Dollar is the tide that floats or sinks all pairs."
    }
  },
  {
    type: "visual_intro",
    title: "Choppy Forex Conditions Lower Reading Confidence",
    label: "Forex Chop",
    visualKey: "forex-choppy-condition-warning",
    body: "There are times when a Forex pair is simply unreadable. Candles overlap constantly, wicks form on both sides, structures are broken and immediately ignored, and session boundaries fail to contain price. This is a choppy condition. Beginners get frustrated because their drawings don't work, and they force trades to make up for losses. This is a trap. A trained learner understands that some pair environments are genuinely messy. When chop is identified, they lower their confidence to unclear and stand aside.",
    context: {
      keyTerms: [
        { term: "Choppy Condition", definition: "A messy, sideways market state with no clear direction or respected boundaries." },
        { term: "Overlapping Candles", definition: "Candles whose bodies repeatedly open and close inside the space of previous candles." },
        { term: "Structure Degradation", definition: "When technical support and resistance levels are repeatedly crossed and ignored, making them useless." },
        { term: "Reading Quality: Unclear", definition: "Classifying the market as unreadable when clues are highly conflicting." },
        { term: "Stand Aside Filter", definition: "The choice to stop analyzing and close the chart when the condition is choppy." }
      ],
      whyThisMatters: "Identifying chop protects your capital from being eaten away by small losses in a market with no structural edge.",
      realLifeExample: "EUR/USD has printed eight overlapping 1-hour candles during the New York afternoon with wicks on both sides. You identify the choppy condition, label it unclear, and close your trading platform.",
      commonMistake: "Believing that you must find a trade on every chart, every single day, even when the environment is random noise.",
      quickNote: "If the condition is choppy, your confidence should drop. The best traders know when to stand aside."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: What Forex Condition Is This Pair In?",
    label: "Practice Drill",
    visualKey: "forex-condition-practice-drill",
    body: "Let's put your Forex condition-reading skills to the test. In this drill, we present a realistic market scenario involving session dynamics, related pairs, and USD context. Read the clues carefully, apply your environmental filters, and choose the most disciplined reading.",
    taskData: {
      type: "choice_block",
      question: "EUR/USD forms a tight Asia range. During London, price breaks above the range high and closes outside, but the next candle hesitates. GBP/USD is not confirming strongly (it remains inside its Asia range), and USD context (DXY) is completely flat and unclear. Later, EUR/USD starts moving back toward the top of the Asia range instead of continuing cleanly. What is the most disciplined Forex condition reading?",
      options: [
        {
          id: "A",
          text: "Clean expansion condition because price broke above the Asia range.",
          isCorrect: false,
          feedback: "Incorrect. The break matters, but expansion is not clean until the pair proves quality after the break. Here, follow-through is weak, GBP/USD is not confirming, and DXY is flat."
        },
        {
          id: "B",
          text: "Clean trend condition because London created a bullish breakout candle.",
          isCorrect: false,
          feedback: "Incorrect. One London candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
        },
        {
          id: "C",
          text: "Mixed / transition condition because expansion started, but follow-through, related-pair context, and USD context are not clean.",
          isCorrect: true,
          feedback: "Correct! The pair attempted expansion, but the lack of follow-through, the divergence with GBP/USD, and the flat USD context mean the evidence is conflicting. The condition is mixed/transition."
        },
        {
          id: "D",
          text: "Guaranteed reversal because price hesitated after the break.",
          isCorrect: false,
          feedback: "Incorrect. Hesitation and a pullback do not guarantee a reversal. They only lower the quality of the condition reading. Avoid predicting absolute reversals."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Divergent Breakout", definition: "When one pair breaks a level but a closely related pair remains trapped in sideways movement." },
        { term: "Unconfirmed Expansion", definition: "A breakout attempt that lacks follow-through verification from the US Dollar or related pairs." },
        { term: "Mixed Evidence", definition: "A state where some clues are bullish (like a breakout) but others are flat or opposing." },
        { term: "Risk Mitigation", definition: "Lowering your reading quality rating to mixed to avoid trading in unconfirmed environments." },
        { term: "Transition Audit", definition: "Checking if a breakout is failing and returning back inside the range boundaries." }
      ],
      whyThisMatters: "This drill trains you to cross-reference multiple Forex layers so you don't fall for isolated breakouts that lack broad support.",
      realLifeExample: "EUR/USD spikes up, but GBP/USD doesn't budge and the Dollar index is stable. You realize this is a divergent, low-quality expansion. You stand aside, avoiding a loss as EUR/USD drops back.",
      commonMistake: "Buying a EUR/USD breakout based solely on the chart in front of you, without checking related pairs or USD context.",
      quickNote: "Before you buy a breakout, check the team. If the dollar and pound aren't playing, stay on the bench."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Read the Forex Condition Before the Move",
    label: "Forex Debrief",
    visualKey: "forex-condition-debrief",
    body: "Congratulations! You have completed the Level 0 Module 0.7 Forex Roadway. You have shifted your perspective from chasing individual candles to auditing the overall Forex environment. You now understand that session rhythm, Asia compression ranges, London expansion quality, New York shifts, USD counterweight context, and related-pair confirmations dictate the validity of every technical setup. Carry this environmental filter with you whenever you open a currency chart.",
    context: {
      keyTerms: [
        { term: "Environmental Filter", definition: "The habit of naming the pair's environment and session before looking at individual candles." },
        { term: "Multi-Layer Audit", definition: "Checking pair structure, session hours, the US Dollar Index, and related pairs together." },
        { term: "Session Integrity", definition: "Recognizing how London and New York trading hours confirm or reject price levels." },
        { term: "Condition Adaptability", definition: "Changing your reading rules immediately when a pair shifts from trending to ranging or chop." },
        { term: "Capital Preservation", definition: "Standing aside and keeping your money safe when the environment is choppy." }
      ],
      whyThisMatters: "Condition awareness is the ultimate filter. It separates clean institutional setups from messy retail traps.",
      realLifeExample: "You open a EUR/USD chart. Before looking at the current candle, you note that it's the Asia session (compression) and the Dollar Index is flat. You recognize that wicks are likely noise, and you wait for London.",
      commonMistake: "Forgetting the session rhythm and trading late New York or Asia ranges as if they were high-momentum trends.",
      quickNote: "Do not ask what the Forex candle is doing. Ask what condition the pair is in, and what session created it."
    }
  }
];
