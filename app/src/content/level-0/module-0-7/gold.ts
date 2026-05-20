import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.7 - Gold Roadway Cards
 * Focus: Gold Market Conditions: Reading XAU/USD Through Volatility, Zones, and Macro Pressure
 */
export const goldCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Gold Conditions Begin With Volatility Discipline",
    label: "Gold Foundation",
    visualKey: "gold-condition-foundation",
    body: "In Gold trading (XAU/USD — the trading symbol for Gold priced in US Dollars), a candlestick pattern, structure break, or pullback does not exist in isolation. Every move is born inside a specific market condition. That condition might be trending, ranging, compressing, expanding, transitioning, choppy, or unstable. Because Gold moves quickly, beginners often react to price speed before reading the environment. A professional Gold reader does not look at a single breakout candle in isolation. Before they trust any move, they ask: 'What condition is this asset in, and does the broader context support it?' Let's build this essential Gold filter.",
    context: {
      keyTerms: [
        { term: "Gold Condition", definition: "The overall state (like a trend, range, or messy sideways movement) currently shaping Gold price action." },
        { term: "Reaction Zone", definition: "A price area on the chart where buyers or sellers have repeatedly stepped in, acting as a magnet." },
        { term: "Wick Quality", definition: "Evaluating the length of wicks compared to candle bodies to check if a move is running out of steam." },
        { term: "Liquidity Sweep", definition: "A rapid spike past a key level to trigger exit orders (stops) before reversing price back." },
        { term: "Macro Pressure", definition: "Directional force exerted on Gold by US economic reports, interest rate decisions, and government bond yields." }
      ],
      whyThisMatters: "Without identifying the Gold condition first, you will mistake aggressive, news-driven spikes for clean trend continuation, only to get trapped when they immediately reverse.",
      realLifeExample: "You see Gold surge $15 in five minutes. If you identify the condition as a spot-supported expansion near a key reaction zone, you expect continuation. If you identify it as a news sweep during thin liquidity, you expect a reversal. The candle is the same; the condition changes the reading.",
      commonMistake: "Buying a fast, green Gold candle solely because of its speed, without checking if it occurred inside a choppy horizontal range.",
      quickNote: "Slow down and name the Gold condition first. Volatility is energy, but condition is the map."
    }
  },
  {
    type: "visual_intro",
    title: "Volatility Changes the Gold Environment",
    label: "Volatility Environment",
    visualKey: "gold-volatility-condition-map",
    body: "Gold's natural state is high volatility. Price can move sharply even when the market condition is not clean. A fast candle may appear during a trend, expansion, macro reaction, sweep, or chop. Speed tells the learner that volatility (the speed and size of price swings) has increased, but it does not prove the condition is clear. The learner must check location, close quality, and follow-through. Gold moving fast does not automatically mean Gold is moving clearly.",
    context: {
      keyTerms: [
        { term: "Calm Range", definition: "A quiet condition where price bounces sideways between support and resistance." },
        { term: "Active Expansion", definition: "A fast price move where price pushes cleanly outside a range with high volume." },
        { term: "Event Spike", definition: "A sudden, news-driven price spike that lacks structural validation and often reverses." },
        { term: "Choppy Volatility", definition: "A messy environment where price swings rapidly up and down with no clear direction." },
        { term: "Volatility Filter", definition: "Adjusting your technical expectations based on the speed and size of average candles." }
      ],
      whyThisMatters: "Recognizing that volatility is not direction protects you from chasing sudden, low-quality spikes that occur inside quiet ranges.",
      realLifeExample: "Gold jumps $10 at the London open. Instead of buying instantly, you check the environment and see price is in the middle of a choppy range. You recognize it as choppy volatility and stay out.",
      commonMistake: "Confusing price speed with a clean trend breakout, leading to buying high-volatility exhaustion peaks.",
      quickNote: "Do not chase the speed. Chase the structure. Gold moving fast does not mean it's moving clearly."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Zones Shape Gold Conditions",
    label: "Reaction Zone Context",
    visualKey: "gold-reaction-zone-condition",
    body: "Gold moves between key reaction zones rather than exact, thin price levels. A move near a reaction zone carries different meaning from a move in empty space. The learner should ask whether Gold is testing, rejecting, accepting, overshooting, or returning inside the zone. A Gold zone is not a wall. It is an area where buyer and seller behavior deserves attention. By auditing behavior at the zone, you classify the condition.",
    context: {
      keyTerms: [
        { term: "Reaction Zone", definition: "A price area on the chart where buyers or sellers have historically stepped in." },
        { term: "Zone Test", definition: "When price enters a zone to see if buyers or sellers will step in again." },
        { term: "Zone Acceptance", definition: "When price breaks past a zone and holds on the other side, showing a strong breakout." },
        { term: "Zone Rejection", definition: "When price enters a zone but quickly leaves a long wick and closes outside it, showing opposition." },
        { term: "Overshoot Sweep", definition: "A quick spike that pushes past a zone to trigger exit orders before reversing back inside." }
      ],
      whyThisMatters: "Reading behavior around reaction zones prevents you from treating minor wicks inside empty space as major structural signals.",
      realLifeExample: "Gold moves toward a major resistance zone at $2030. Price spikes to $2033, but leaves a long wick and closes the hourly candle at $2027. You recognize this as a zone rejection, not a breakout.",
      commonMistake: "Expecting support or resistance to act as a perfect, pixel-perfect line on the chart, leading to premature stop-outs.",
      quickNote: "Zones are buffers, not walls. Watch how price acts inside the zone to read the condition."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Compression Can Tighten Before Fast Expansion",
    label: "Gold Compression",
    visualKey: "gold-compression-condition",
    body: "Gold frequently enters periods of compression, where volatility drops and price swings tighten. During compression, buyers and sellers are coiled in balance. Compression (a quiet market state where price swings shrink) often precedes explosive expansion, but it does not predict the breakout direction by itself. A trained learner observes the compression condition and waits for expansion quality and follow-through. Do not treat compression as a directional signal.",
    context: {
      keyTerms: [
        { term: "Gold Compression", definition: "A quiet market state where price swings shrink within a narrowing corridor." },
        { term: "Volatility Contraction", definition: "The quiet period where price swings shrink right before a large breakout." },
        { term: "Coiled Balance", definition: "A temporary balance between buying and selling pressure before a breakout." },
        { term: "Expansion Catalyst", definition: "A news event or surge in volume that triggers a breakout from a squeeze." },
        { term: "Directional Neutrality", definition: "Accepting that a squeeze does not tell you which direction price will break out." }
      ],
      whyThisMatters: "Classifying the market as compressing stops you from placing high-risk trades inside a narrowing wedge where there is no trend edge.",
      realLifeExample: "Gold consolidates in a tight $5 range during the late New York afternoon. You classify it as compression. You do not place any trades, waiting instead for London to expand.",
      commonMistake: "Placing buy or sell orders inside the middle of a compression squeeze, assuming price must break in your favored direction.",
      quickNote: "Compression is not a prediction. It is a condition that says, 'Wait to see what price proves next.'"
    }
  },
  {
    type: "visual_intro",
    title: "Gold Expansion Must Prove It Is Clean",
    label: "Gold Expansion",
    visualKey: "gold-expansion-quality",
    body: "Gold expansion happens when price moves strongly away from compression, a range, or a reaction zone. But expansion is not automatically clean. It may be supported by USD context and follow-through, or it may be an unstable spike that leaves a long wick and returns inside the range. Close quality and follow-through decide whether the condition becomes clean or stays unstable. The move happened. Now check whether Gold held the move.",
    context: {
      keyTerms: [
        { term: "Gold Expansion", definition: "The sudden release of price movement past a consolidation zone." },
        { term: "Close Quality", definition: "Checking if a breakout candle closes strongly outside a boundary rather than leaving a long wick." },
        { term: "Follow-through Hold", definition: "Verifying that subsequent candles hold the new price level to confirm a breakout." },
        { term: "Unstable Spike", definition: "A rapid breakout attempt that leaves a long wick and fails to hold." },
        { term: "Range Return", definition: "When price spikes outside a range but quickly closes back inside." }
      ],
      whyThisMatters: "Distinguishing clean expansion from unstable spikes prevents you from buying breakouts that are about to fail.",
      realLifeExample: "Gold breaks above a range high at $2050. The breakout candle closes strongly at $2054 with almost no upper wick, and the next candle holds. You classify this as clean expansion.",
      commonMistake: "FOMO-buying a fast Gold breakout spike while the candle is still open, only for it to close as a massive rejection wick.",
      quickNote: "The move happened. Now check whether Gold held the move. A wick is a clue, not a final answer."
    }
  },
  {
    type: "visual_intro",
    title: "Macro Pressure Can Distort Gold Conditions",
    label: "Macro Pressure",
    visualKey: "gold-macro-condition-distortion",
    body: "As a global reserve asset, Gold reacts strongly to US interest rate expectations, inflation data, bond yields, and the US Dollar Index. During high-impact macro events (like CPI or FOMC releases — inflation and interest rate reports), Gold prints massive, fast candles that sweep both sides of key zones. This movement is real, but the condition is often highly unstable. A trained learner does not trade the immediate news spike. They wait for close quality and follow-through to appear before classifying the new condition.",
    context: {
      keyTerms: [
        { term: "Macro Distortion", definition: "Price spikes and confusion caused by high-impact economic news releases." },
        { term: "Yield Correlation", definition: "The rule where rising government bond yields naturally depress Gold prices." },
        { term: "USD Counterweight", definition: "The pricing rule where US Dollar strength naturally depresses Gold prices, and vice versa." },
        { term: "Dual Sweep", definition: "A news spike that shoots both up and down within minutes, clearing out orders on both sides." },
        { term: "Post-News Settlement", definition: "Waiting for the news volatility to cool down so clean price levels can show up again." }
      ],
      whyThisMatters: "Understanding macro pressure prevents you from trading news wicks that represent temporary panic rather than structural direction.",
      realLifeExample: "US CPI data is released. Gold spikes $20 down, then $30 up, clearing range limits. You recognize this as macro distortion and wait two hours for the market to settle.",
      commonMistake: "Trying to predict news directions and placing trades right before high-impact economic releases.",
      quickNote: "Macro events create fast waves. Let the water settle before you try to read the tide."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Trend Conditions Need Structure, Not Speed",
    label: "Gold Trend Condition",
    visualKey: "gold-trend-condition-structure",
    body: "A clean Gold trend condition is not defined by a single aggressive candle. It is an environment where price builds a reliable sequence of higher highs and higher lows (or lower lows and lower highs). Inside a trend, pullbacks respect previous swing points, candle closes hold beyond broken levels, and follow-through is consistent. Gold can move fast inside a trend, but speed alone does not create structure. Look for structural alignment to confirm a trend.",
    context: {
      keyTerms: [
        { term: "Trend Condition", definition: "A market state where price consistently moves in a directional sequence of higher highs and lows." },
        { term: "Structure Respect", definition: "When pullbacks hold above previous breakout points, showing buyers or sellers are defending value." },
        { term: "Swing Sequence", definition: "The organized staircase pattern of highs and lows that confirms a healthy trend." },
        { term: "Trend Pullback", definition: "A temporary price drop against the main trend direction before the trend continues." },
        { term: "Directional Sustainability", definition: "Checking if a trend is supported by consistent volume and steps rather than a single spike." }
      ],
      whyThisMatters: "Focusing on trend structure instead of speed stops you from calling a market trending when it is actually just printing one large news spike.",
      realLifeExample: "Gold is trending up. Price breaks $2060, pulls back to test $2060 as support, holds it, and continues upward. This structural support confirms a clean trend environment.",
      commonMistake: "Calling Gold trending bullish after a single large candle, ignoring the fact that it is still trapped inside a larger range.",
      quickNote: "A real trend is a staircase, not a single elevator. Look for the steps."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Chop Makes Strong Candles Less Trustworthy",
    label: "Gold Chop",
    visualKey: "gold-choppy-condition-warning",
    body: "A choppy Gold condition occurs when price moves sideways with constant overlap, long wicks on both sides of candles, and failed breakouts. In this environment, even strong, large candles can mislead beginners because the overall condition is not clean. A trained learner does not force a directional trade in chop. They identify the messy environment, lower reading confidence to unclear, and protect capital by standing aside.",
    context: {
      keyTerms: [
        { term: "Gold Chop", definition: "A messy sideways state with overlapping swings and no clear direction." },
        { term: "Overlapping Swings", definition: "Price swings that cross over each other's paths instead of making clean steps." },
        { term: "Wick Noise", definition: "Frequent wicks on both sides of candles, showing no clear control." },
        { term: "Structure Degradation", definition: "When technical support and resistance levels are repeatedly crossed and ignored, making them useless." },
        { term: "Reading Quality: Unclear", definition: "Classifying the market as unreadable when clues are highly conflicting." }
      ],
      whyThisMatters: "Recognizing a choppy environment prevents you from getting chopped up by endless false breakouts and minor losses.",
      realLifeExample: "Gold consolidates between $2015 and $2020 for three days, printing overlapping candles with wicks. You label the condition choppy, drop confidence to unclear, and close the platform.",
      commonMistake: "Believing you must find a setup on every chart every day, even when Gold is in a highly choppy, noisy state.",
      quickNote: "Chop is not a failure to understand. Sometimes Gold is simply not clean."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Condition First, Candle Second",
    label: "Reading Workflow",
    visualKey: "gold-condition-first-workflow",
    body: "How does a professional audit a Gold chart? They do not look at a breakout candle first. They follow a disciplined checklist: Zoom out. Classify the overall Gold condition. Identify if price is near a reaction zone. Check if the move is news-driven or structural. Audit local candle close quality. Check for follow-through holds. Classify reading quality. By running this filter, you ensure you never trade an isolated candle without knowing the environment around it.",
    context: {
      keyTerms: [
        { term: "Gold Workflow", definition: "The step-by-step audit process starting from Gold condition down to the individual candle." },
        { term: "Environmental Priority", definition: "The rule that the overall market state always overrules local candle shapes." },
        { term: "Zone Alignment", definition: "Checking if a candle breakout occurs near a key reaction zone." },
        { term: "Close Quality Check", definition: "Checking where a candle closes relative to its highs and lows." },
        { term: "Reading Quality Audit", definition: "Checking if clues align to give a clear, mixed, or unclear reading." }
      ],
      whyThisMatters: "Following this workflow prevents you from jumping into false setups driven by isolated, low-quality breakouts.",
      realLifeExample: "You see Gold print a large green candle. You run the workflow: check zone (empty space), check macro (CPI news spike), check close (middle close). You classify it as mixed/unstable and stay out.",
      commonMistake: "Jumping directly into a local breakout candle without checking if it occurred at a valid reaction zone first.",
      quickNote: "Never audit a candle until you have named the room it is standing in."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: What Gold Condition Is This?",
    label: "Practice Drill",
    visualKey: "gold-condition-practice-drill",
    body: "Let's put your Gold condition-reading skills to the test. In this drill, we present a realistic market scenario involving a Gold breakout attempt, reaction zones, close quality, and follow-through. Read the clues carefully, apply your environmental filters, and choose the most disciplined reading.",
    taskData: {
      type: "choice_block",
      question: "Gold compresses below a previous reaction zone during an active market window. Then it pushes above the zone with a large candle, but the candle leaves a long upper wick and closes near the middle. USD context is unclear, and the next candle hesitates instead of continuing upward. What is the most disciplined Gold condition reading?",
      options: [
        {
          id: "A",
          text: "Clean expansion condition because Gold moved above the reaction zone.",
          isCorrect: false,
          feedback: "Incorrect. Moving above the zone matters, but expansion is not clean until Gold proves quality after the move. Here, the candle has a long upper wick, closed in the middle, and follow-through is weak."
        },
        {
          id: "B",
          text: "Clean trend condition because the candle was large.",
          isCorrect: false,
          feedback: "Incorrect. One large candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
        },
        {
          id: "C",
          text: "Mixed / unstable expansion because the move happened, but wick behavior, close quality, USD context, and follow-through are not clean.",
          isCorrect: true,
          feedback: "Correct! The move occurred, but the long upper wick, middle close, flat USD context, and weak follow-through mean the condition is mixed or unstable. It is not a clean expansion."
        },
        {
          id: "D",
          text: "Guaranteed reversal because the candle left an upper wick.",
          isCorrect: false,
          feedback: "Incorrect. An upper wick does not guarantee reversal. It only gives a clue that must be audited. Avoid predictive, absolute statements."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Divergent Breakout", definition: "When Gold breaks structure but the US Dollar is moving in the same direction." },
        { term: "Exhaustion Wick", definition: "A long wick on a breakout candle showing a move is running out of steam." },
        { term: "Middle Close", definition: "A candle closing near the middle of its range, showing balance rather than control." },
        { term: "Unconfirmed Expansion", definition: "A breakout attempt that fails to hold and lacks follow-through." },
        { term: "Mixed Evidence", definition: "A state where some clues are bullish (like a breakout attempt) but others are flat or opposing." }
      ],
      whyThisMatters: "This drill trains you to cross-reference multiple Gold layers so you don't fall for isolated wicks and spikes that lack broad support.",
      realLifeExample: "Gold spikes above a zone, but leaves a long upper wick and DXY is flat. You recognize this as an unconfirmed expansion, avoiding a loss when price rotates back down.",
      commonMistake: "Buying a Gold breakout based solely on the size of the candle, without checking close quality or follow-through.",
      quickNote: "If the candle closes in the middle and the USD is flat, the breakout is likely built on sand."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Read the Gold Condition Before the Move",
    label: "Gold Debrief",
    visualKey: "gold-condition-debrief",
    body: "Congratulations! You have completed the Level 0 Module 0.7 Gold Roadway. You have shifted your perspective from chasing individual candles to auditing the overall Gold environment. You now understand that volatility, reaction zones, macro pressure, USD context, close quality, structure, and follow-through dictate the validity of every technical setup. Carry this environmental filter with you whenever you open an XAU/USD chart.",
    context: {
      keyTerms: [
        { term: "Environmental Filter", definition: "Naming the overall market environment and key price zones before looking at candles." },
        { term: "Multi-Venue Audit", definition: "Evaluating Gold structure, US Dollar direction, reaction zones, and news together." },
        { term: "Follow-through Verification", definition: "Checking if subsequent candles hold the new price level to confirm a breakout." },
        { term: "Condition Adaptability", definition: "Changing your reading rules immediately when price shifts from trending to ranging." },
        { term: "Capital Preservation", definition: "Protecting your trading funds by walking away when the market is choppy." }
      ],
      whyThisMatters: "Condition awareness is the ultimate filter. It separates clean zone-supported moves from unstable macro traps.",
      realLifeExample: "You open a Gold chart. Before looking at the current candle, you note that it's high-volatility chop and macro news is flat. You recognize wicks are likely noise and wait.",
      commonMistake: "Forgetting to check the reaction zones and trading minor wicks as if they were major structural reversals.",
      quickNote: "Do not ask what the Gold candle is doing. Ask what condition Gold is in, and what reaction zone created the move."
    }
  }
];
