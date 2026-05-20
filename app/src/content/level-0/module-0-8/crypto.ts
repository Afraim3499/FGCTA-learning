import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.8 - Crypto Roadway Track Cards
 * Focus: Crypto Market Location: Reading Where a Crypto Asset Is Before Trusting the Move
 * Core habit: "Before judging the crypto move, locate the asset first relative to range structure, BTC context, spot/perp alignment, and liquidity zone."
 */
export const cryptoCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Crypto Location Starts With Where the Asset Is",
    label: "Crypto Foundation",
    visualKey: "crypto-location-foundation",
    body: "In crypto markets, the exact same candlestick, volume surge, or liquidation wick carries a completely different meaning depending on where it forms. Beginners often make the mistake of chasing strong-looking candles in random zones. A professional trading reader starts by asking: Where is the asset trading? Is it at a prior high, a prior low, a range edge, a liquidation pool, or drifting aimlessly in the middle of a choppy range? By locating the asset first across multiple market coordinates—including BTC's own structural position—you filter out random price noise and trade with context.",
    context: {
      keyTerms: [
        { term: "Crypto Location", definition: "The specific structural coordinate where a crypto asset is trading relative to range boundaries, prior highs/lows, and liquidity zones." },
        { term: "Asset coordinates", definition: "The mapping of price levels to identify whether price is at an edge of value or in a middle noise area." },
        { term: "Location Filter", definition: "The discipline of rejecting any candle pattern that does not form at a high-information area." },
        { term: "Reading Quality", definition: "The reliability of a chart reading, assessed by checking context coordinates before individual candles." },
        { term: "Market Noise", definition: "Random price fluctuations that look active but occur away from major structural decision areas." }
      ],
      whyThisMatters: "Locating the asset first prevents you from chasing random, volatile candles that have no institutional order backing.",
      realLifeExample: "Solana prints a massive 5% green candle. Before buying, you map the chart: if this candle forms in the dead center of a weekly range, you ignore it. If it forms right at a swept range low, you study it closely.",
      commonMistake: "Focusing entirely on how fast or large a candle looks while ignoring that it formed in a low-information middle zone.",
      quickNote: "Good crypto reading starts by locating the asset first."
    }
  },
  {
    type: "visual_intro",
    title: "BTC Location Can Change the Altcoin Reading",
    label: "BTC Location Context",
    visualKey: "crypto-btc-location-context",
    body: "Altcoins do not trade in a vacuum. Because Bitcoin commands the majority of crypto capital flows, BTC's structural location acts as a gravity field. If an altcoin looks like it is breaking out of a strong range, but BTC is sitting directly under a major daily resistance ceiling, the altcoin's breakout is unstable. A rejection at BTC's local resistance will pull the entire altcoin market down. To read an altcoin's location with high quality, you must always overlay BTC's context.",
    context: {
      keyTerms: [
        { term: "BTC Gravity", definition: "The tendency of Bitcoin's price movement and location to pull or push the rest of the altcoin market." },
        { term: "BTC Location Context", definition: "Checking where Bitcoin is trading relative to its own key ranges and daily swing extremes." },
        { term: "Context Conflict", definition: "When an altcoin has a strong setup but BTC is at a high-risk, weak location, lowering the reading quality." },
        { term: "Context Alignment", definition: "When both BTC and the altcoin are at compatible structural locations, supporting the move." },
        { term: "Altcoin Dependency", definition: "The structural reality that altcoins rarely sustain independent breakouts during BTC exhaustion." }
      ],
      whyThisMatters: "Checking BTC location saves you from buying altcoin breakouts right as Bitcoin prepares to reject its daily highs.",
      realLifeExample: "Ethereum is testing its range high. You check BTC and see it is consolidating comfortably above its support floor. This alignment increases the quality of the Ethereum breakout setup.",
      commonMistake: "Trading an altcoin breakout in isolation without checking whether Bitcoin is at a major resistance ceiling.",
      quickNote: "BTC location helps you avoid reading an altcoin like it lives alone."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Range Edges Matter More Than the Middle",
    label: "Range Edge vs Middle",
    visualKey: "crypto-range-edge-vs-middle",
    body: "Crypto assets spend a vast amount of time consolidating inside local ranges. Within these structures, the outer edges represent areas of high information, while the center zone is noise. Edges represent areas where buyers and sellers defend price or capitulate, providing clean behavioral coordinates. The middle of the range represents equilibrium, where retail buyers and sellers chop price back and forth. A strong candle in the middle of a range should be devalued because the location lacks order density.",
    context: {
      keyTerms: [
        { term: "Range Edges", definition: "The extreme high and low boundaries of a consolidation zone where institutional decisions happen." },
        { term: "Middle Zone Noise", definition: "The center area of a range where price drifts randomly without structural significance." },
        { term: "Equilibrium", definition: "A state of balance where buy and sell pressures match, producing choppy, sideways behavior." },
        { term: "Order Density", definition: "The clustering of limit buy and sell orders that naturally occurs at range extremes." },
        { term: "Location Devaluation", definition: "Treating candle evidence as low priority because it forms away from range edges." }
      ],
      whyThisMatters: "Focusing on range edges keeps you from overtrading inside mid-range chop where price has no directional advantage.",
      realLifeExample: "Cardano is trading inside a range from $0.45 to $0.50. It prints a fast green candle at $0.475. You ignore it because it is in the noisy middle zone.",
      commonMistake: "Chasing a large green candle in the middle of a range, only for price to instantly reverse back toward the center.",
      quickNote: "The middle often gives fewer answers. In crypto, it can also be where noise looks more exciting than it is."
    }
  },
  {
    type: "visual_intro",
    title: "Prior Highs and Lows Become Crypto Location References",
    label: "Prior High / Prior Low",
    visualKey: "crypto-prior-high-low-location",
    body: "Prior highs and lows are the coordinates of previous market turnarounds. In crypto, these landmarks are highly visible, attracting resting orders, liquidations, and stop-losses. However, they are not magic walls where price must reverse. Instead, they are reference zones to watch for behavior. When price tests a prior high, you must wait to see if price rejects, sweeps and returns inside, or accepts the location and consolidates above.",
    context: {
      keyTerms: [
        { term: "Prior Swing Landmarks", definition: "Historical peaks or valleys where buying or selling pressure previously caused a reversal." },
        { term: "Location Reference", definition: "Using historical boundaries to observe current behavior rather than predict immediate pivots." },
        { term: "Breakout Acceptance", definition: "When price closes beyond a prior high and establishes a new consolidation base." },
        { term: "Rejection Wick", definition: "A candle showing price tested a level but closed far from it, leaving a long upper/lower wick." },
        { term: "Coordinate Test", definition: "The moment price returns to a historical swing high or low to check for buyer/seller defense." }
      ],
      whyThisMatters: "Treating prior highs and lows as reference points instead of reversal lines prevents you from taking blind counter-trend trades.",
      realLifeExample: "BTC rises to its prior weekly high. Instead of shorting immediately, you watch the 1-hour candles: if they wick and close back below, rejection behavior is confirmed.",
      commonMistake: "Placing immediate buy or sell orders exactly at prior highs or lows without waiting for close behavior.",
      quickNote: "A prior high is not a prediction of a bounce. It is a landmark to watch for behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidity Areas Are Locations, Not Predictions",
    label: "Liquidity Location",
    visualKey: "crypto-liquidity-location",
    body: "In crypto, liquidity clusters—resting stop-losses, buy stops, and liquidations—often build up around highly visible structures like equal highs and equal lows. The market frequently sweeps these areas to match orders. However, these zones do not guarantee a reversal. A sweep is simply an event at a coordinate. The Lurnava reader checks whether price returns inside the range after a sweep (proving rejection) or holds beyond it (proving acceptance).",
    context: {
      keyTerms: [
        { term: "Liquidity Sweep", definition: "A price spike that breaches a key level, triggers resting stop orders, and then moves back." },
        { term: "Equal Highs / Lows", definition: "Double tops or double bottoms that create highly obvious liquidity boundaries." },
        { term: "Capitulation Volume", definition: "High volume during a sweep, indicating retail stops are being matched by institutional buyers." },
        { term: "Sweep and Hold", definition: "A sweep that fails to return inside, indicating the breakout has succeeded and accepted the new level." },
        { term: "Stop Cluster", definition: "A concentration of buy or sell stop orders sitting just outside obvious swing highs or lows." }
      ],
      whyThisMatters: "Understanding liquidity coordinates stops you from panic-selling sweeps that are actually institutional order matches.",
      realLifeExample: "ETH drops below equal lows, triggers liquidations with a large wick, but closes the hourly candle back above the floor. You recognize this as a liquidity sweep rejection.",
      commonMistake: "Assuming a sweep will always lead to a reversal, or selling a breakdown right into a major liquidity sweep floor.",
      quickNote: "A liquidity area is not a prediction. It is a place to observe behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Spot and Perp Location Can Disagree",
    label: "Spot vs Perp Location",
    visualKey: "crypto-spot-perp-location-disagreement",
    body: "Because crypto is heavily leveraged, derivative (perp) markets can experience massive liquidation wicks or spikes that do not exist on the spot market. If you see a token break out on a perp chart, but the spot chart shows price remaining below the range edge, the location is conflicted. Leverage pressure is temporarily distorting the perp coordinates. High-quality location requires agreement between both spot and perp structures.",
    context: {
      keyTerms: [
        { term: "Spot Market", definition: "The market where crypto is bought and sold for immediate delivery, representing real asset demand." },
        { term: "Perpetual Futures (Perps)", definition: "Leveraged derivative contracts that track the underlying asset price without expiration." },
        { term: "Leverage Distortion", definition: "When perp prices briefly spike far beyond spot prices due to leverage and liquidation cascades." },
        { term: "Venue Disagreement", definition: "When different markets (spot and perps) display conflicting structures or boundaries." },
        { term: "Structural Agreement", definition: "When spot and perp charts confirm the same location test and close quality simultaneously." }
      ],
      whyThisMatters: "Cross-checking spot and perp locations protects you from buying fake perp breakouts driven purely by leveraged short squeezes.",
      realLifeExample: "SOL perp spikes above range high during a funding rate squeeze. You check the Coinbase spot chart and see price stayed 0.5% below the high. You ignore the perp breakout.",
      commonMistake: "Trading perp charts in isolation without checking if spot volume is actually backing the breakout location.",
      quickNote: "Spot and perp agreement can make a location reading cleaner."
    }
  },
  {
    type: "visual_intro",
    title: "DEX Location Can Be Thin and Misleading",
    label: "DEX / CEX Location",
    visualKey: "crypto-dex-cex-location",
    body: "Crypto liquidity is fragmented. Small-cap altcoins trading on decentralized exchanges (DEXs) can print extreme spikes and wicks due to low pool liquidity or single large swaps. These wicks reflect local pool imbalances, not global market agreements. If a token wicks 20% on a DEX but remains flat on centralized exchanges (CEXs), the DEX location is thin and misleading. Always check whether the wider market supports the venue-specific movement.",
    context: {
      keyTerms: [
        { term: "DEX Liquidity Pool", definition: "A smart contract containing locked tokens that facilitates decentralized trading." },
        { term: "CEX Centralized Order Book", definition: "An exchange order book (e.g. Binance) where buyers and sellers match limit orders." },
        { term: "Thin Liquidity Wick", definition: "An extreme price spike caused by a single transaction draining a shallow liquidity pool." },
        { term: "Venue Discrepancy", definition: "A difference in price or wick extremes between DEX pools and centralized exchanges." },
        { term: "Market Agreement", definition: "When multiple exchanges and pools print similar price coordinates, confirming broad flow." }
      ],
      whyThisMatters: "Recognizing thin DEX wicks prevents you from interpreting local pool imbalances as significant market trends.",
      realLifeExample: "A meme coin wicks down 15% on Uniswap due to a single large sell order, but Uniswap V3 and CEX order books show no drop. You ignore the Uniswap wick.",
      commonMistake: "Panic-selling a major wick on a DEX chart without verifying if it exists on CEX charts or other liquid venues.",
      quickNote: "A DEX wick may be real movement, but it may not represent the whole market."
    }
  },
  {
    type: "visual_intro",
    title: "Breakout Location Needs Acceptance, Not Just Crossing",
    label: "Breakout Location",
    visualKey: "crypto-breakout-location-acceptance",
    body: "Crossing a range edge or prior high is only the beginning of a breakout question. In crypto, price frequently crosses a level briefly to tap liquidity, only to reverse. To confirm the new location is accepted, you must watch the behavior: does price close outside the edge with a solid body? Does it hold its value on subsequent candles? A breakout location without acceptance is simply an overshoot trap.",
    context: {
      keyTerms: [
        { term: "Breakout Crossing", definition: "The moment price crossing a key structural boundary, which is often a false signal." },
        { term: "Acceptance Hold", definition: "When price consolidates outside a boundary, establishing a new support or resistance floor." },
        { term: "Overshoot Trap", definition: "A brief breach of a boundary designed to trap breakout traders before reversing." },
        { term: "Consolidation Base", definition: "A cluster of tight candles holding above a level, proving the price is accepted." },
        { term: "Follow-through", definition: "Subsequent high-volume candles moving in the direction of the breakout, confirming trend." }
      ],
      whyThisMatters: "Waiting for proof of acceptance saves you from buying breakout wicks that instantly pull back inside the range.",
      realLifeExample: "Polkadot crosses the range ceiling of $6.50. You do not buy. You wait for the 4-hour candle to close. It closes at $6.52, and the next candle consolidates. This proves acceptance.",
      commonMistake: "Chasing a breakout the second price crosses a line, instead of waiting for candle closes to confirm acceptance.",
      quickNote: "Crossing the line starts the question. Holding the location helps answer it."
    }
  },
  {
    type: "visual_intro",
    title: "Crypto Location First, Market Layer Second",
    label: "Location Workflow",
    visualKey: "crypto-location-first-workflow",
    body: "To read crypto like a professional, you must train your eyes to follow a strict top-down workflow. Never zoom in on individual candle shapes until you have mapped the coordinates. First, identify if the asset is at a range edge, prior swing high/low, or midpoint noise. Second, check BTC's current location. Third, cross-check spot vs perp coordinates. Fourth, evaluate if the location behavior is showing rejection or acceptance. Only then do you draw a conclusion.",
    context: {
      keyTerms: [
        { term: "Location Workflow", definition: "A systematic audit checklist that prioritizes price coordinates over candle shapes." },
        { term: "Coordinate Scan", definition: "Mapping the asset's position relative to range limits, daily swings, and liquidity pools." },
        { term: "BTC Overlay", definition: "Checking BTC's structural location to confirm if the macro trend supports the altcoin." },
        { term: "Derivative Cross-Check", definition: "Comparing spot and perp charts to ensure the move is backed by real capital, not perp leverage." },
        { term: "Behavior Verification", definition: "Analyzing local wicks and closes only after location quality has been approved." }
      ],
      whyThisMatters: "Following a structured workflow ensures you remain objective and prevents you from forcing setups in low-information zones.",
      realLifeExample: "You open the AVAX chart. Instead of looking at the green candle, you map: Asia session high, daily swing lows, check BTC's location, and cross-reference spot. Only then do you read the AVAX candles.",
      commonMistake: "Analyzing candle wicks and bodies before identifying where they are on the daily map.",
      quickNote: "Slow down and locate the asset first."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Crypto Location Useful or Weak?",
    label: "Practice Drill",
    visualKey: "crypto-location-quality-practice-drill",
    body: "Test your crypto location-reading discipline on this scenario: An altcoin prints a strong green candle on the 15-minute chart, closing near its high. However, price is in the middle of its local range. BTC is sitting directly under daily resistance, and the spot chart shows no confirmation of the perp movement. How should you read this location?",
    taskData: {
      type: "choice_block",
      question: "An altcoin prints a strong green candle on the 15-minute chart, closing near its high. However, price is in the middle of its local range. BTC is sitting directly under daily resistance, and the spot chart shows no confirmation of the perp movement. What is the most disciplined crypto location reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because the altcoin printed a strong candle near its high, showing immediate buyer control.",
          isCorrect: false,
          feedback: "Incorrect. The candle is active, but its location in the middle of the range, combined with BTC's resistance hurdle, devalues the quality to noise."
        },
        {
          id: "B",
          text: "Strong location because any large crypto candle represents high institutional volume and must be traded.",
          isCorrect: false,
          feedback: "Incorrect. Not all crypto chart areas carry equal weight. Location changes how useful the evidence is; in the middle of a range, it is highly random."
        },
        {
          id: "C",
          text: "Weak or mixed location because the move formed in the middle of the range, BTC is at a difficult location, and spot/perp support is not clean.",
          isCorrect: true,
          feedback: "Correct! This is a weak or mixed location. The altcoin moved in the middle of its range, BTC is under daily resistance, and the move lacks spot market backing."
        },
        {
          id: "D",
          text: "Guaranteed reversal because BTC is under resistance and the altcoin must drop immediately.",
          isCorrect: false,
          feedback: "Incorrect. BTC resistance does not guarantee an immediate reversal. It only makes the altcoin reading more cautious, urging you to stand aside."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Midpoint Noise", definition: "The central portion of a range where price action is highly random and lacks direction." },
        { term: "BTC Resistance Barrier", definition: "A daily swing ceiling on BTC that acts as an obstacle for the entire altcoin market." },
        { term: "Leverage Pump", definition: "A temporary price spike on perps driven by short liquidations, lacking spot support." },
        { term: "Discipline Stand-Aside", definition: "Refusing to take trades on active-looking candles due to poor location quality." },
        { term: "Range Rotation Rule", definition: "The tendency of price to chop and rotate through range centers rather than expand." }
      ],
      whyThisMatters: "This drill trains you to resist the visual temptation of trading large candles that have no structural backup.",
      realLifeExample: "You see Solana print a green candle. You note it is in the range center and BTC is at weekly resistance. You close the chart and do nothing.",
      commonMistake: "Chasing a breakout inside range midpoint noise because a single candle looked fast.",
      quickNote: "A big candle in the middle of a range is just noise trying to look like a move."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Locate the Crypto Asset Before Trusting the Move",
    label: "Crypto Debrief",
    visualKey: "crypto-location-debrief",
    body: "Congratulations! You have completed the Module 0.8 Crypto Roadway track. You have built a critical analytical filter: Location Awareness. Remember, a crypto candle is only as useful as the coordinate it occupies. By filtering out range midpoints, overlaying BTC context, cross-checking spot vs perp venues, and watching for behavioral acceptance, you read markets with institutional objectivity. Keep this checklist at the front of your mind.",
    context: {
      keyTerms: [
        { term: "Location Checklist", definition: "The habit of auditing range limits, BTC status, and spot/perp alignment before reading candles." },
        { term: "BTC Overlay Filter", definition: "Using BTC's structural location to confirm if the market environment supports altcoin expansion." },
        { term: "Spot/Perp Alignment", definition: "Verifying that derivative moves are supported by spot volume and actual asset demand." },
        { term: "Consolidation Base", definition: "A cluster of candles proving price has accepted the area beyond a prior swing." },
        { term: "Reading Quality", definition: "Classifying a chart setup as clear, mixed, or unclear based on structural locations." }
      ],
      whyThisMatters: "Location awareness is your ultimate shield. It prevents you from taking low-quality trades inside range chop, protecting your capital for prime conditions.",
      realLifeExample: "A professional crypto trader opens a chart, notes that BTC is consolidating in the middle of its daily range, and logs out without trading.",
      commonMistake: "Forgetting the location workflow when a fast candle prints, leading to impulsive trades in noisy areas.",
      quickNote: "Do not ask only whether the crypto candle is strong. Ask where the asset is."
    }
  }
];
