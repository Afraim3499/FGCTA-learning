import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.6 - Gold Track Cards
 * Focus: Gold Evidence Audit: Reading XAU/USD Through Volatility, Location, and Follow-Through
 */
export const goldCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Gold Evidence Audit Starts With Volatility Discipline",
    label: "Gold Foundation",
    visualKey: "gold-evidence-audit-foundation",
    body: "Gold (XAU/USD) is one of the most liquid and actively traded assets in the world, known for its sudden, aggressive price movements. For a beginner, a massive green or red candle can look like an emergency or a guaranteed trading signal. But in a gold evidence audit, speed alone is not proof. A professional does not chase the speed. They slow down and audit where the move happened, whether it respected a key reaction zone, how the candle closed, and whether real follow-through appeared. Developing this discipline turns gold's scary volatility into structured, readable evidence.",
    context: {
      keyTerms: [
        { term: "XAU/USD", definition: "The trading symbol for Gold quoted against the United States Dollar." },
        { term: "Volatility Discipline", definition: "The habit of remaining calm and waiting for candle closes during rapid price moves." },
        { term: "Reaction Zone", definition: "An area on the chart where price has historically reacted, rather than a single line." },
        { term: "Close Quality", definition: "Evaluating where a candle's body closes relative to its wicks and the surrounding zones." },
        { term: "Follow-Through Check", definition: "Waiting to see if the next candles sustain the direction of the initial move." }
      ],
      whyThisMatters: "Reacting instantly to gold's speed usually results in entering at the worst possible price, right before it reverses.",
      realLifeExample: "Gold suddenly spikes $15 upward in a few minutes. A retail trader gets excited and buys immediately. A disciplined student waits for the candle to close, sees it rejected a major hourly supply zone, and classifies the setup as mixed, avoiding the trap.",
      commonMistake: "Assuming a fast-moving gold candle represents a clear trend breakout before it has closed.",
      quickNote: "Gold moves fast, but you do not need to trade fast. Let the move finish before you read it."
    }
  },
  {
    type: "visual_intro",
    title: "One Gold Wick Is Not a Full Reading",
    label: "Wick Trap",
    visualKey: "gold-single-wick-trap",
    body: "Gold wicks are incredibly common and often very long. Because gold moves large amounts of contracts quickly, it frequently sweeps previous highs and lows, clearing out stop-losses before reversing. Seeing a giant wick can make you think, 'This is a massive rejection, it's definitely reversing!' But a wick is only a single clue. Without checking where that wick occurred, how it relates to historical zones, and whether follow-through confirms it, you are stepping into a wick trap.",
    context: {
      keyTerms: [
        { term: "Liquidity Sweep", definition: "A fast price move beyond a previous high or low to trigger resting orders before pulling back." },
        { term: "Wick Trap", definition: "Entering a trade immediately based on a long wick without verifying the broader context." },
        { term: "Historical Zone", definition: "A price region where major buyers and sellers have historically placed heavy orders." },
        { term: "Reversal Clue", definition: "A wick or candle structure suggesting a potential shift in trend, requiring verification." },
        { term: "Order Flow Speed", definition: "The velocity of market and limit orders hitting the exchange, creating wicks." }
      ],
      whyThisMatters: "Gold frequently wicks past levels to gather liquidity. Waiting for the close prevents you from being swept out.",
      realLifeExample: "Gold wicks $8 below a support zone and snaps back. A beginner buys instantly, believing the support held. However, the next candle closes below the support zone, continuing the downtrend. The wick was just a stop run.",
      commonMistake: "Treating every long wick as an automatic reversal signal instead of an active clue that needs context.",
      quickNote: "A wick shows where price went but could not hold. Let the close prove if buyers or sellers own the area."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Reaction Zones Matter More Than Exact Lines",
    label: "Reaction Zones",
    visualKey: "gold-reaction-zone-evidence",
    body: "Many traders draw thin, exact lines on their gold charts and expect price to bounce perfectly off them. In reality, gold's volatility causes it to pierce lines, overshoot levels, and sweep liquidity before reacting. A disciplined gold reader marks flexible reaction zones rather than rigid prices. The question is never 'Did it touch my line?' The question is 'How is gold behaving as it enters and leaves this reaction zone?'",
    context: {
      keyTerms: [
        { term: "Rigid Line Thinking", definition: "The mistake of expecting price to react perfectly at an exact, single price point." },
        { term: "Reaction Zone", definition: "A block or range of prices where order flow is expected to shift." },
        { term: "Level Overshoot", definition: "When price briefly spikes past a key level before returning to hold it." },
        { term: "Area Behavior", definition: "Analyzing how candles open, close, and wick as they interact with a price zone." },
        { term: "Flexible Layout", definition: "Using structural blocks on your chart to represent zones of interest." }
      ],
      whyThisMatters: "Using exact lines leads to frustration when gold wicks slightly past your line, triggers your exit, and then moves in your direction.",
      realLifeExample: "You draw a resistance line at $2,030. Gold spikes to $2,032, triggering stop-losses, but closes the candle at $2,029. A zone trader had marked $2,028-$2,032 as the reaction area and safely read the rejection.",
      commonMistake: "Entering or exiting a trade early because gold moved slightly past a single line on the chart.",
      quickNote: "Gold trades in neighborhoods, not single addresses. Draw your zones wide enough to breathe."
    }
  },
  {
    type: "visual_intro",
    title: "USD Pressure Can Change Gold Reading Quality",
    label: "USD Context",
    visualKey: "gold-usd-context-evidence",
    body: "Gold is priced in US dollars, meaning its chart is directly tied to the strength or weakness of the dollar. If gold is attempting an upward breakout while the US dollar index (DXY) is weak or losing structure, your breakout reading has supportive macro gravity. However, if gold is pushing up while DXY is also trending strongly upward, the move is conflicting and fragile. Understanding USD pressure helps you filter out low-probability gold setups.",
    context: {
      keyTerms: [
        { term: "USD Pressure", definition: "The influence of the US dollar's value on gold's pricing." },
        { term: "DXY Index", definition: "The US Dollar Index, which measures the value of the Dollar compared to other major global currencies." },
        { term: "Macro Gravity", definition: "The broader financial conditions (like dollar strength or yields) that pull on gold's price." },
        { term: "Inverse Correlation", definition: "The tendency of gold to rise when the US dollar falls, and vice versa." },
        { term: "Conflicting Gravity", definition: "A market condition where gold and the dollar are moving in the same direction, indicating fragility." }
      ],
      whyThisMatters: "DXY acts as a global filter for gold. Ignoring dollar strength will lead to buying false gold breakouts.",
      realLifeExample: "Gold breaks above a 4-hour resistance zone. You check the DXY index and see it is in a strong uptrend. This is conflicting gravity. Within an hour, gold rejects and dumps back down.",
      commonMistake: "Reading gold charts in isolation without checking the US dollar's current trend.",
      quickNote: "Always check the dollar's pulse. A strong dollar is a heavy anchor for gold."
    }
  },
  {
    type: "visual_intro",
    title: "Macro Events Can Make Gold Look Clear Too Early",
    label: "Macro Distortion",
    visualKey: "gold-macro-event-distortion",
    body: "Because gold is a global safe-haven asset, it is highly sensitive to macroeconomic news, interest rate expectations, government yields, and central bank announcements. When high-impact news drops, gold can print huge, fast candles that look like powerful breakouts. But these news-driven moves are often highly distorted and lack real structural commitment. A disciplined auditor waits for the volatility to settle before classifying the reading.",
    context: {
      keyTerms: [
        { term: "Macro Candle", definition: "A large, rapid price candle printed on the chart immediately after a major news event or economic report." },
        { term: "Structural Commitment", definition: "When price holds a new area after a move, proving buyers or sellers are building value there." },
        { term: "News Distortion", definition: "Temporary price spikes caused by algorithmic and retail reactions to news releases." },
        { term: "Safe-Haven Asset", definition: "A financial instrument expected to retain or increase in value during market turbulence." },
        { term: "Yield Sensitivity", definition: "Gold's reaction to government bond interest rates (yields), since holding physical gold does not pay interest." }
      ],
      whyThisMatters: "News releases create emotional spikes that frequently reverse completely once the algorithms finish rebalancing.",
      realLifeExample: "Inflation data comes in lower than expected. Gold spikes $20 in 3 minutes, breaking resistance. Ten minutes later, price reverses the entire move and closes below the starting point. Waiting for the close saved the auditor.",
      commonMistake: "Chasing gold breakouts during or immediately after high-impact economic news releases.",
      quickNote: "News spikes show speed, not structure. Let the algorithms finish their work before you audit the chart."
    }
  },
  {
    type: "visual_intro",
    title: "Close Quality Matters After Gold Moves Fast",
    label: "Close Quality",
    visualKey: "gold-close-quality-audit",
    body: "A gold candle can travel a long distance during its lifespan, but the only thing that matters for your evidence audit is where it closes. The close tells you who won the battle at that specific time. If a candle spikes $15 high but closes near its open, leaving a long upper wick, the buyers did not hold the area. Evaluating close quality helps you identify whether a move represents commitment or just a temporary sweep.",
    context: {
      keyTerms: [
        { term: "Close Quality", definition: "An audit of where the candle's body closes relative to its full range and nearby zones." },
        { term: "Buyer Commitment", definition: "A bullish candle that closes near its absolute high, showing buyers controlled the close." },
        { term: "Seller Commitment", definition: "A bearish candle that closes near its absolute low, showing sellers controlled the close." },
        { term: "Mid-Range Close", definition: "A candle that closes near the middle of its wicks, showing indecision or balanced pressure." },
        { term: "Travel vs Close", definition: "The difference between how far a candle moved vs where it ended." }
      ],
      whyThisMatters: "Chasing a candle while it is active ignores the close, which is the actual record of market agreement.",
      realLifeExample: "Gold pushes strongly above a resistance block. The candle is green and looks powerful. In the last 5 minutes, it drops and closes with a tiny body at the bottom of the range. The close quality is weak, marking a mixed reading.",
      commonMistake: "Ignoring the close of a candle and entering trades based on its maximum active size.",
      quickNote: "Price travel is just a rumor. The candle close is the official contract."
    }
  },
  {
    type: "visual_intro",
    title: "Impulse and Pullback Need Context in Gold",
    label: "Impulse and Pullback",
    visualKey: "gold-impulse-pullback-evidence",
    body: "Gold's volatile nature means it rarely trends in a straight line. It commonly makes aggressive impulses followed by deep, scary-looking pullbacks. A beginner sees a deep pullback and panics, assuming the move has failed and trend has reversed. A trained auditor checks whether the pullback respects key structure levels and reaction zones. A pullback is not a betrayal; it is a question the market asks, and we must audit the answer.",
    context: {
      keyTerms: [
        { term: "Impulse Leg", definition: "A strong, rapid price move in the direction of the dominant local trend." },
        { term: "Deep Pullback", definition: "A retracement that retraces a large percentage of the initial impulse leg before holding." },
        { term: "Structure Hold", definition: "When a pullback respects and bounces off a prior swing low or support zone." },
        { term: "Trend Validation", definition: "Confirming a trend by observing clean impulse-pullback structures that hold key levels." },
        { term: "FOMO Entry", definition: "Entering at the peak of an impulse leg due to fear of missing out, right before a pullback." }
      ],
      whyThisMatters: "Expecting gold to move without deep pullbacks leads to panic-exiting positions right before they resume their trend.",
      realLifeExample: "Gold impulses up $25, then pulls back $18. A beginner exits in fear. A disciplined auditor notes the pullback held the previous hourly consolidation zone on declining volume. They classify the structure as holding.",
      commonMistake: "Buying the top of an impulse leg and selling the bottom of a normal pullback.",
      quickNote: "Impulses break the ice. Pullbacks test the strength of the new structure. Wait for the test."
    }
  },
  {
    type: "visual_intro",
    title: "Aligned Gold Evidence vs Mixed Gold Evidence",
    label: "Alignment and Conflict",
    visualKey: "gold-aligned-vs-mixed-evidence",
    body: "Now we must classify the quality of our gold reading. A clear aligned reading exists when multiple layers agree: gold reacts from a key reaction zone, closes strongly, USD pressure is supportive, and follow-through appears. A mixed reading exists when clues conflict: gold spikes high but leaves a long wick, closes near its middle, DXY is strong, and follow-through stalls. Separating these states keeps you out of noisy, low-probability environments.",
    context: {
      keyTerms: [
        { term: "Aligned Setup", definition: "A high-quality reading where structure, zone reaction, close quality, and USD context agree." },
        { term: "Mixed Setup", definition: "A classification where supportive and conflicting clues are balanced, limiting confidence." },
        { term: "Unclear Setup", definition: "A highly noisy market state with erratic wicks, flat volume, and no structure respect." },
        { term: "Clue Balance", definition: "Comparing supporting and limiting clues to determine reading quality." },
        { term: "Quality Filter", definition: "The practice of only taking actions when evidence is classified as clear and aligned." }
      ],
      whyThisMatters: "Gold volatility will quickly drain your capital if you treat mixed, conflicting evidence as clear setups.",
      realLifeExample: "Gold breaks out. DXY is trending down, the close is near the high, and the next candle holds the breakout level. This is a clear aligned read. If DXY was strong and the candle left a long wick, it would be mixed.",
      commonMistake: "Forcing a trade on a mixed gold setup because you are impatient and want to catch a move.",
      quickNote: "If you have to argue with the chart to make it look good, the reading is mixed. Stand aside."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Verification: What Must Happen Next?",
    label: "Verification Logic",
    visualKey: "gold-verification-workflow",
    body: "Gold moves with extreme speed, which often triggers emotional FOMO. To protect your capital, you must use verification logic. Instead of chasing a fast green spike, define what must happen next to prove the move is real. For a bullish break, ask: 'Does price hold above the reaction zone on a pullback? Does USD context remain supportive? Does follow-through appear?' If yes, the reading is verified. If not, the setup is invalid.",
    context: {
      keyTerms: [
        { term: "Verification Checkpoint", definition: "A specific price level or behavior that must be met to validate a reading." },
        { term: "Pullback Verification", definition: "Observing if price holds support on a low-volume retest of a broken zone." },
        { term: "FOMO Filter", definition: "A systematic verification check that prevents chasing rapid price candles." },
        { term: "Invalidation Level", definition: "A price point that, if crossed, proves the initial reading was false." },
        { term: "Verification Clock", definition: "Waiting for the subsequent candles to close before concluding the audit." }
      ],
      whyThisMatters: "Verification logic stops you from entering at the absolute peak of a temporary news or liquidity spike.",
      realLifeExample: "Gold spikes $12. Instead of buying, you wait: 'I will wait for a pullback to the broken zone. If it holds and DXY remains weak, the reading is verified.' Price immediately dumps back into the range, invalidating the move.",
      commonMistake: "Entering a trade on a fast candle before the market has verified the level as support.",
      quickNote: "Let the market prove the move first. Real trends will always give you a verified entry checkpoint."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Gold Reading Clear, Mixed, or Unclear?",
    label: "Practice Drill",
    visualKey: "gold-evidence-audit-practice-drill",
    body: "Let's put your gold evidence audit skills to the test. In this drill, we present a realistic XAU/USD scenario containing both supportive and conflicting indicators. Your goal is to evaluate the evidence layers objectively and classify the reading quality state. Remember: do not choose the option that sounds the most exciting, choose the most disciplined classification of the evidence.",
    taskData: {
      type: "choice_block",
      question: "Gold pushes above a previous key reaction zone during an active London market window. The candle leaves a long upper wick and closes near the middle of its range. Meanwhile, the US Dollar Index (DXY) is not clearly weak, and the subsequent hourly candle hesitates and starts drifting back toward the breakout level rather than continuing upward. What is the disciplined Gold evidence-audit reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because Gold moved above the reaction zone.",
          isCorrect: false,
          feedback: "Incorrect. Pushing above the zone is a supportive clue, but you cannot classify this as clear when the candle has a long upper wick, closes in the middle, USD context is unclear, and follow-through is weak."
        },
        {
          id: "B",
          text: "Mixed evidence because the move happened, but wick behavior, close quality, USD context, and weak follow-through limit confidence.",
          isCorrect: true,
          feedback: "Correct! The evidence is mixed. The breakout push is an active clue, but the long upper wick, mid-range close, lack of USD alignment, and weak follow-through are significant limiting clues that prevent a clear classification."
        },
        {
          id: "C",
          text: "Guaranteed reversal because Gold left an upper wick.",
          isCorrect: false,
          feedback: "Incorrect. An upper wick indicates selling pressure and limits reading quality, but it does not guarantee a reversal. Avoid absolute predictions."
        },
        {
          id: "D",
          text: "Unclear forever because Gold is too volatile to read.",
          isCorrect: false,
          feedback: "Incorrect. Gold is highly volatile, but it can be read systematically by auditing zones, closes, USD context, and follow-through together."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Disciplined Reading", definition: "Evaluating charts based on visible evidence rather than hopes or predictions." },
        { term: "Mid-Range Close", definition: "A candle that closes near the middle of its high-low range, indicating indecision." },
        { term: "USD Divergence", definition: "When gold moves but the dollar index does not confirm or support the direction." },
        { term: "Stalled Follow-Through", definition: "When subsequent candles fail to show impulsive expansion in the breakout direction." },
        { term: "Volatile Context", definition: "Aggressive price movement that requires careful close quality and zone verification." }
      ],
      whyThisMatters: "This drill trains you to look at close quality and dollar correlation rather than getting blinded by a fast gold breakout.",
      realLifeExample: "You see Gold spike, but check the close and DXY first. Finding a middle close and strong dollar, you classify the read as mixed and avoid buying the top of a sweep.",
      commonMistake: "Failing to check close quality before entering a trade, leading to losses when the candle rejects and returns to range.",
      quickNote: "If the breakout is isolated and closes weakly, the reading is mixed. Wait for the market to align."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Gold Reading Requires Patience Under Speed",
    label: "Gold Debrief",
    visualKey: "gold-evidence-audit-debrief",
    body: "Congratulations! You have completed the Level 0 Gold Roadway. You have shifted your mindset from an emotional speculator reacting to speed to a disciplined gold auditor. You now understand that gold's aggressive movements can be read systematically through reaction zones, close quality, USD pressure, and verification checkpoints. You have built a solid trading foundation that will protect your capital as you transition to Level 1.",
    context: {
      keyTerms: [
        { term: "Gold Auditor", definition: "A trader who evaluates XAU/USD by cross-checking zones, DXY index, close quality, and follow-through." },
        { term: "Market-Layer Reading", definition: "Evaluating gold by combining technical structures, dollar pressure, and volume levels." },
        { term: "Zone Awareness", definition: "Focusing on price areas rather than expecting exact line reactions." },
        { term: "Close Quality Literacy", definition: "Using the candle close to confirm buyer or seller commitment." },
        { term: "Capital Protection", definition: "Using evidence audits to filter out low-probability setups in volatile markets." }
      ],
      whyThisMatters: "Gold's high volatility will drain your capital quickly without a structured audit checklist. This process is your shield.",
      realLifeExample: "A Lurnava graduate audits gold. They check DXY (weak trend), close quality (near high), zone reaction (clean bounce), and wait for the pullback to hold. They execute with complete clarity.",
      commonMistake: "Chasing fast candles and forgetting to wait for close quality and verification checks.",
      quickNote: "Do not chase the speed. Audit the zone, check the dollar, and verify the close."
    }
  }
];
