import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.7 - Core Track Cards
 * Focus: Market Conditions: Reading the Environment Before Trusting the Move
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Market Conditions: Reading the Environment Before the Move",
    label: "Core Foundation",
    visualKey: "market-conditions-foundation",
    body: "Beginners look at a chart and immediately ask: 'Is this candle bullish (going up) or bearish (going down)?' They look at the size of the body, the length of the wicks, and try to guess what happens next. This is a trap. A candlestick pattern does not exist in a vacuum. It is born inside a specific market environment. A strong green candle inside a clean uptrend (rising prices) means continuation; inside a flat range (price bouncing sideways), it means exhaustion; inside choppy noise (messy price movement with no direction), it means nothing at all. Before you trust any single candle, you must identify the environment. This module is where you build that filter.",
    context: {
      keyTerms: [
        { term: "Market Environment", definition: "The overall state (like a trend, range, or messy sideways movement) that shapes how price moves." },
        { term: "Condition Filter", definition: "The habit of checking the overall market environment before deciding what any single candle means." },
        { term: "Isolated Candle Trap", definition: "The mistake of assuming a candle shape has a fixed, guaranteed meaning." },
        { term: "Environment Priority", definition: "The rule that the overall environment determines whether local clues (like candles) are reliable." },
        { term: "Reading Order", definition: "First check the environment, second find the key price levels (zones), and third check the candle." }
      ],
      whyThisMatters: "If you do not classify the environment first, you will constantly buy range tops (thinking they are trend breakouts) and sell pullback bottoms (thinking they are trend reversals).",
      realLifeExample: "You see a huge green candle. If you identify the environment as a horizontal range, you expect rejection at the ceiling. If you identify it as a clean trend, you expect continuation. The candle is the same; the environment changes the decision.",
      commonMistake: "Zooming in on a single candle's shape and speed before knowing if the overall market is trending, ranging, or compressing.",
      quickNote: "Repeat this before every chart audit: Before I trust the candle, I must identify the environment."
    }
  },
  {
    type: "visual_intro",
    title: "Trend Condition: Before You Trust the Pullback",
    label: "Trend Environment",
    visualKey: "trend-condition-environment",
    body: "The Trap: You see three consecutive red candles dropping quickly. Your instinct screams 'the market is crashing, sell!' You react to the candle speed. The Reading: Before you trust those red candles, identify the environment. You zoom out and see price is in a clean uptrend, making higher highs and higher lows. Those red candles are not a crash; they are a structured pullback (a temporary price drop inside a rising market) returning to a previous high zone. In a trend condition, pullbacks are normal price adjustments. The environment tells you the downward candles are low-probability reversal signals (signs that the market is reversing, or changing direction).",
    context: {
      keyTerms: [
        { term: "Trend Environment", definition: "A clear state where price is actively moving in one main direction, making clean steps." },
        { term: "Pullback Validation", definition: "Reading downward candles as temporary pullbacks rather than major reversals because the trend is strong." },
        { term: "Structure Defense", definition: "When price drops back to a previous swing point (high or low) and new buying or selling orders step in to support it." },
        { term: "Dominant Flow", definition: "The main price direction backed by large institutional orders." },
        { term: "Sequence Integrity", definition: "The continuous pattern of higher peaks and higher bottoms that confirms a healthy trend." }
      ],
      whyThisMatters: "Identifying a trend environment saves you from panic-selling during a minor pullback inside a massive uptrend.",
      realLifeExample: "Gold drops $15 in one hour. A beginner panics and sells. A Lurnava student identifies the clean hourly uptrend, locates the prior breakout structure, and waits for a hold. The trend environment overrides the scary red candles.",
      commonMistake: "Treating a standard pullback inside a healthy trend as a market reversal.",
      quickNote: "Before I trust those red candles, I must check if the environment is a healthy trend."
    }
  },
  {
    type: "visual_intro",
    title: "Range Condition: Before You Buy the Breakout",
    label: "Range Environment",
    visualKey: "range-condition-environment",
    body: "The Trap: You see a massive green candle surge upward with speed, closing near its highs. You buy immediately, expecting a massive breakout (price breaking out of a sideways box to start a new trend). The Reading: Before you trust that strong green candle, identify the environment. You zoom out and see price has been rotating sideways between $2,020 and $2,040 for three days. You are inside a range condition. Inside a range, strong candles pushing toward boundaries are usually exhaustion sweeps (quick moves that run out of steam and rapidly reverse), not breakouts. The environment tells you that strong candle is highly likely to fail and rotate backward.",
    context: {
      keyTerms: [
        { term: "Range Environment", definition: "A balanced state where price bounces sideways between a ceiling and a floor." },
        { term: "Exhaustion Sweep", definition: "A fast price move toward a range boundary that runs out of buyers or sellers and rapidly reverses." },
        { term: "Ping-Pong Rotation", definition: "The path of price bouncing from the floor (support) to the ceiling (resistance) and back again." },
        { term: "Boundary Liquidation", definition: "A quick spike that triggers automatic exit orders (stops) located just outside the range boundary before returning inside." },
        { term: "Containment Rule", definition: "The expectation that range boundaries will keep price contained until a breakout is verified." }
      ],
      whyThisMatters: "Classifying a range environment stops you from buying at the absolute high or selling at the absolute low.",
      realLifeExample: "Price has bounced off $2,040 four times. A trader sees a strong green candle hit $2,041 and buys. The next candle drops back to $2,030. They fell for an exhaustion sweep because they didn't respect the range environment.",
      commonMistake: "Applying trend-continuation rules inside a market that is clearly in a horizontal range.",
      quickNote: "Before I buy that strong candle, I must identify if the environment is a range ceiling."
    }
  },
  {
    type: "visual_intro",
    title: "Transition Condition: Before You Force Certainty",
    label: "Transition Environment",
    visualKey: "transition-condition-map",
    body: "The Trap: You are looking at a chart trying to decide if you should buy or sell. The candles are messy and overlapping. You feel frustrated because the direction isn't obvious, but you force a decision anyway. The Reading: Before you force a reading, identify the environment. The prior uptrend recently failed to make a new high, and the subsequent pullback was unusually deep. The clean trend sequence is broken. The market is in a transition condition (the state where the market is shifting from one environment to another, like from a trend to a range). In transition, evidence is naturally mixed and direction is unclear. The environment is telling you to lower your confidence and wait.",
    context: {
      keyTerms: [
        { term: "Transition Environment", definition: "A state of change where the market is shifting from one condition to another." },
        { term: "Trend Decay", definition: "The weakening of a trend, marked by smaller swings and deeper pullbacks." },
        { term: "Overlapping Swings", definition: "When price waves cross over each other's boundaries instead of making clean steps, ending the trend." },
        { term: "State Shift", definition: "The transition from a trend to a range, or from compression (squeezing) to expansion (breaking out)." },
        { term: "Auditor Patience", definition: "The discipline to stand aside and wait when chart clues are mixed and unclear." }
      ],
      whyThisMatters: "Transition zones are where traders lose the most money by trying to trade trends that are actively dying or ranges that are not yet formed.",
      realLifeExample: "A trend starts making overlapping swings. An emotional trader keeps trying to buy pullbacks and gets chopped up. A Lurnava student identifies transition, lowers reading quality to mixed, and waits.",
      commonMistake: "Demanding a clear directional bias from a market that is actively transitioning between states.",
      quickNote: "Before I force a direction, I must identify if the environment is in transition."
    }
  },
  {
    type: "visual_intro",
    title: "Compression: Before You Predict the Squeeze",
    label: "Compression",
    visualKey: "compression-condition-board",
    body: "The Trap: Price swings are getting smaller and smaller, forming a tight wedge. You feel certain it is going to break upward, so you buy inside the squeeze. The Reading: Before you guess the breakout direction, identify the environment. It is compression (when price swings get smaller and smaller, narrowing into a tight wedge). Buyers and sellers are packing buying and selling orders into a narrowing price corridor. Price volatility is contracting (swings are shrinking). Compression builds massive energy for a future breakout, but it does not predict direction by itself. The environment tells you to wait for the breakout rather than gambling on the squeeze.",
    context: {
      keyTerms: [
        { term: "Compression Environment", definition: "A state where price swings become progressively smaller and tighter." },
        { term: "Order Packing", definition: "The build-up of matching buy and sell orders within a shrinking space." },
        { term: "Energy Accumulation", definition: "The build-up of market pressure before a large move." },
        { term: "Directional Neutrality", definition: "Accepting that a tight squeeze does not guarantee which direction the breakout will go." },
        { term: "Squeeze Boundaries", definition: "The narrowing high and low lines that outline the compression area." }
      ],
      whyThisMatters: "Buying or selling inside a compression zone means you are locking up capital in a sideways market and risking a massive fakeout.",
      realLifeExample: "Price swings contract from $20 to $10 to $3. A trader buys, guessing it breaks up. It immediately spikes down, trapping them. A Lurnava student identifies compression and waits for a confirmed break.",
      commonMistake: "Gambling on the direction of a compression squeeze instead of waiting for the market to choose.",
      quickNote: "Before I trust a breakout prediction, I must identify if the environment is still compressing."
    }
  },
  {
    type: "visual_intro",
    title: "Expansion: Before You Chase the Spike",
    label: "Expansion",
    visualKey: "expansion-condition-board",
    body: "The Trap: Price suddenly explodes out of compression with a massive green candle. You jump in immediately out of FOMO (fear of missing out), chasing the fast spike. The Reading: Before you chase the speed, identify the environment. The market has shifted from compression to expansion (a sudden breakout and release of energy from compression). But expansion is not automatically a clean new trend. Is it a fakeout sweep (a false breakout that immediately reverses) that will snap back inside, or is it a genuine expansion that will hold? The environment tells you that the first candle is just the question. You must wait to see if the next candle holds outside the squeeze boundary.",
    context: {
      keyTerms: [
        { term: "Expansion State", definition: "A sudden, rapid move as price leaves a compressed or sideways zone." },
        { term: "Initial Spike", definition: "The first large candle that breaks out past a range or compression boundary." },
        { term: "Fakeout Trap", definition: "When price spikes outside a boundary but quickly closes back inside, trapping late buyers or sellers." },
        { term: "Follow-Through Check", definition: "Checking subsequent candles to see if they hold the new price level." },
        { term: "Breakout Verification", definition: "The rule that price must stay outside the broken boundary to prove the breakout is real." }
      ],
      whyThisMatters: "Waiting for follow-through verification prevents you from buying the absolute top of a fake breakout spike.",
      realLifeExample: "Gold spikes $12 out of a squeeze. A trader chases it. The next candle drops $11 back into the squeeze. They got trapped. A Lurnava student waits for the next candle to hold, sees it fail, and stays safe.",
      commonMistake: "Confusing a fast expansion spike with a confirmed, structured trend environment.",
      quickNote: "Before I chase the expansion spike, I must identify if the market is holding outside the boundary."
    }
  },
  {
    type: "visual_intro",
    title: "Choppy Conditions: Before You Over-Analyze",
    label: "Chop and Noise",
    visualKey: "choppy-condition-warning",
    body: "The Trap: You see a pin bar candle (a candle with a long wick showing price rejection), then an engulfing candle (a large candle that completely covers the previous candle's body), then a wick sweep (a quick spike past a high or low that immediately returns). You try to draw support and resistance lines around every swing, looking for a trade. The Reading: Before you trust any of those candle patterns, identify the environment. Swings are overlapping constantly, wicks are forming on both sides of every candle, and price is moving sideways with no clean boundaries. The environment is choppy. In chop, candle patterns are random noise. The environment tells you that no local evidence can be trusted, and your reading quality must be classified as unclear.",
    context: {
      keyTerms: [
        { term: "Choppy Environment", definition: "A messy sideways state with overlapping swings, wicks on both sides, and no clear structure." },
        { term: "Market Noise", definition: "Random price movements that do not reflect the direction of big players." },
        { term: "Pattern Degradation", definition: "The breakdown of standard candle patterns, making them highly unreliable inside a messy environment." },
        { term: "Stand Aside Filter", definition: "The choice to stop analyzing and walk away from the chart when the market is choppy." },
        { term: "Reading Quality: Unclear", definition: "Classifying the market as unreadable because the clues are completely mixed." }
      ],
      whyThisMatters: "Recognizing a choppy environment prevents you from over-trading and losing capital in random, sideways noise.",
      realLifeExample: "Gold has printed six overlapping, wick-heavy candles in a tight $3 range. A trader keeps trying to predict the next direction. A Lurnava student identifies chop, labels the reading unclear, and walks away.",
      commonMistake: "Forcing yourself to find a clear reading in a market that is objectively messy and unstructured.",
      quickNote: "Before I trust this candle pattern, I must identify if the environment is just choppy noise."
    }
  },
  {
    type: "visual_intro",
    title: "The Same Candle Changes Meaning by Condition",
    label: "Condition Changes Meaning",
    visualKey: "same-candle-different-condition",
    body: "This is the ultimate proof that you cannot trust a candle shape by itself. A strong green candle with tiny wicks looks highly bullish (likely to go up). But look at where it stands. In a clean trend, it means the trend is continuing. At a range ceiling, it is a temporary surge that is running out of steam. In compression, it is a breakout attempt. In chop, it is random noise. The candle shape has not changed at all, but the environment completely changes its meaning. Before you trust the candle, you must identify the environment.",
    context: {
      keyTerms: [
        { term: "Contextual Auditing", definition: "The discipline of reading candle clues strictly based on the surrounding market condition." },
        { term: "Candle Meaning Shift", definition: "How the same candle shape changes from bullish to bearish depending on where it sits." },
        { term: "Environment Priority", definition: "The rule that the overall environment overrides the look of any single candle." },
        { term: "Evidence Weighting", definition: "Giving more or less importance to wicks and candle closes based on the environment." },
        { term: "Reading Consistency", definition: "Making sure your analysis matches the specific rules of the environment you identified." }
      ],
      whyThisMatters: "Failing to change your interpretation of candle shapes across different conditions leads to constant reading errors.",
      realLifeExample: "You see a strong hourly green candle. In a clean uptrend, you read it as high-quality bullish. In a horizontal range, you read it as potential high-boundary exhaustion. Same candle, opposite interpretations.",
      commonMistake: "Using a single rulebook for candle shapes instead of adapting your reading to the market's condition.",
      quickNote: "The candle is just the word. The market condition is the sentence that gives it meaning."
    }
  },
  {
    type: "visual_intro",
    title: "Condition First, Evidence Second",
    label: "Reading Workflow",
    visualKey: "condition-first-workflow",
    body: "How does a professional read a chart? They do not look at the current candle first. They follow a strict workflow: Zoom out. Classify the environment. Mark the zones relevant to that environment. Zoom in. Audit the local candle evidence. Determine the reading quality. Define the verification. The environment sets the rules. The zones show the stage. The candle is just the final clue. Condition first, evidence second. Before you trust the candle, you must identify the environment.",
    context: {
      keyTerms: [
        { term: "Analysis Order", definition: "The step-by-step checklist starting from the broad environment down to the individual candle." },
        { term: "Zoom Out Habit", definition: "Starting your chart reading with a wider view to establish the overall environment first." },
        { term: "Zone Marking", definition: "Drawing key support, resistance, or squeeze areas based on the environment." },
        { term: "Reading Quality", definition: "Classifying the final reading as clear, mixed, or unclear based on how well the clues align." },
        { term: "Verification Plan", definition: "Stating what price levels or checkpoints must hold to prove your reading is correct." }
      ],
      whyThisMatters: "Following this workflow prevents confirmation bias, where you search for local clues to support a trade you already want to take.",
      realLifeExample: "You open a chart. Before looking at the current hourly candle, you verify the market is in a 4-hour range condition. You then apply range rules to the local candles, avoiding a false breakout buy.",
      commonMistake: "Zooming straight into a 5-minute candle and drawing support lines around it without knowing the broader condition.",
      quickNote: "Never audit a candle until you have named the room it is standing in."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: What Condition Is This Market In?",
    label: "Practice Drill",
    visualKey: "market-condition-practice-drill",
    body: "Let's put your condition-reading skills to the test. In this drill, we present a realistic market scenario where a previously clean trend starts exhibiting mixed, sideways behavior. Your goal is to evaluate the changes in structure, apply the correct classification lens, and decide the disciplined reading. Read the scenario details carefully before making your choice.",
    taskData: {
      type: "choice_block",
      question: "Price was previously moving upward with clear higher highs and higher lows on the hourly chart. Recently, the last upward push made only a weak new high, and the subsequent pullback dipped below the previous swing low. Price is now moving sideways, with swings overlapping each other. There is no clean trend continuation, but it has not established a clean horizontal range yet. What is the most disciplined condition reading?",
      options: [
        {
          id: "A",
          text: "Clean trend condition because price was previously moving upward.",
          isCorrect: false,
          feedback: "Incorrect. The prior trend matters, but the recent shallow high, deeper pullback, and overlapping swings indicate the clean trend condition is no longer active. You must adapt to the new clues."
        },
        {
          id: "B",
          text: "Clean range condition because price is moving sideways now.",
          isCorrect: false,
          feedback: "Incorrect. While price is moving sideways, it has not yet established clear, respected horizontal support and resistance boundaries. Classifying it as a clean range is premature."
        },
        {
          id: "C",
          text: "Transition condition because the previous trend is weakening and the current structure is mixed.",
          isCorrect: true,
          feedback: "Correct! The prior trend has broken its sequence (shallow high, deeper pullback), and a clean range has not formed yet. The market is in a transition condition, creating mixed evidence."
        },
        {
          id: "D",
          text: "Guaranteed reversal because the latest pullback was deeper.",
          isCorrect: false,
          feedback: "Incorrect. A deeper pullback shows trend weakness and shifts the condition to transition, but it does not guarantee a reversal. Avoid predictive, absolute statements."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Trend Interruption", definition: "A break in the sequential pattern of higher highs and higher lows, signaling a change in the environment." },
        { term: "Overlapping Swings", definition: "Price movements that cross over each other, indicating a loss of trend structure." },
        { term: "Transition State", definition: "The middle zone between a trend and a range where clues are highly mixed." },
        { term: "Sideways Noise", definition: "Messy sideways price waves that have not yet formed clean boundary levels." },
        { term: "Disciplined Classification", definition: "Naming the environment based strictly on current structure rather than hoping for old trends to continue." }
      ],
      whyThisMatters: "This drill trains you to spot the early signs of a weakening trend so you don't keep expecting clean continuation when the market has shifted.",
      realLifeExample: "You notice a trend starts to overlap. Recognizing it as a transition, you stop buying pullbacks and wait for a clean range or a new trend to declare itself.",
      commonMistake: "Treating a decaying trend as if it is still clean, leading to losses as price enters a sideways chop.",
      quickNote: "When the sequence breaks and overlaps begin, the trend is over. You are in transition."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Read the Environment Before the Evidence",
    label: "Core Debrief",
    visualKey: "market-condition-debrief",
    body: "Congratulations! You have completed Module 0.7 Core Concept. You have shifted your mindset from reacting to individual price candles to classifying the broader market environment first. You now understand that trends, ranges, transitions, compressions, expansions, and chop dictate what candle evidence actually means. With this condition-reading framework, you are ready to explore the asset-specific roadways.",
    context: {
      keyTerms: [
        { term: "Condition Literacy", definition: "The ability to accurately name the market's environment under any chart condition." },
        { term: "Environment Priority", definition: "The rule that the overall market state always overrules local candle patterns." },
        { term: "Workflow Habit", definition: "The habit of starting every chart analysis with a wide view to classify the environment." },
        { term: "Evidence Weighting", definition: "Adjusting the importance of wicks, candle bodies, and closes based on the overall condition." },
        { term: "Capital Preservation", definition: "Protecting your funds by standing aside when the market environment is choppy or transitioning." }
      ],
      whyThisMatters: "Condition awareness is the ultimate filter. It separates high-probability trading environments from expensive market noise.",
      realLifeExample: "A Lurnava graduate opens a chart, identifies compression, marks the squeeze, and waits for a verified expansion. They do not guess; they read the environment.",
      commonMistake: "Forgetting to classify the condition and jumping straight into local candle analysis.",
      quickNote: "Do not ask what the candle is doing. Ask where the candle is standing."
    }
  }
];
