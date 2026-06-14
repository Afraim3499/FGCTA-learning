import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.8 - Gold Roadway Track Cards
 * Focus: Gold Market Location: Reading Where XAU/USD Is Before Trusting the Move
 * Core habit: "Before judging the Gold move, locate the price first relative to reaction zones, prior highs/lows, range boundaries, macro event zones, and higher-timeframe boundaries."
 */
export const goldCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Gold Location Starts With Where XAU/USD Is",
    label: "Gold Foundation",
    visualKey: "gold-location-foundation",
    body: "Before trusting a Gold move, you must locate Gold through reaction zones, prior highs and lows, wick behavior, sweep areas (where price temporarily spikes to trigger orders), macro context, higher-timeframe location, close quality, and follow-through. This is not about drawing simple support and resistance lines. It is about understanding that a candlestick's information value is entirely determined by its coordinates. A massive green candle is meaningless if it prints in the middle of range noise, while a tiny doji at a weekly sweep area carries high structural information. By mapping these dimensions first, you filter out random price noise and read Gold with clear context.",
    context: {
      keyTerms: [
        { term: "Gold Location", definition: "The specific structural coordinate where Gold is trading relative to key reaction zones, prior highs and lows, and value boundaries." },
        { term: "Reference Landmarks", definition: "Highly visible historical areas on the chart where price previously paused, reversed, or consolidated." },
        { term: "Location-First Reading", definition: "The habit of identifying price coordinates on the chart before reading local candle wicks or bodies." },
        { term: "Value Boundaries", definition: "The outer edges of a range or consolidation where institutional buyers and sellers are forced to make decisions." },
        { term: "Noise Filtration", definition: "The process of ignoring active-looking price movement because it occurs in low-information areas." }
      ],
      whyThisMatters: "Locating XAU/USD first prevents you from chasing fast, volatile wicks that have no structural backing.",
      realLifeExample: "Gold prints a massive 15-dollar green candle. Before reactively buying, you map the chart: if this candle formed in the dead center of a monthly range, you ignore it. If it formed right at a swept weekly low, you study it closely.",
      commonMistake: "Focusing entirely on how fast or large a Gold candle looks while ignoring that it formed in a low-information middle zone.",
      quickNote: "Good Gold reading starts by locating the asset first."
    }
  },
  {
    type: "visual_intro",
    title: "Reaction Zones Are Gold’s Main Location References",
    label: "Reaction Zone Location",
    visualKey: "gold-reaction-zone-location",
    body: "Gold does not react to magic, thin lines. Instead, Gold responds to reaction zones—broad areas on the chart where price has previously changed behavior. When price returns to a reaction zone, you watch how it behaves: does price reject, accept, overshoot and return inside, or follow through? A reaction zone is not an instruction to buy or sell. It is simply a place of interest where price behavior becomes highly informative.",
    context: {
      keyTerms: [
        { term: "Reaction Zones", definition: "Broad price regions where historical order flow previously shifted price direction." },
        { term: "Area of Interest", definition: "A designated zone on the chart where you anticipate price will show rejection or acceptance behavior." },
        { term: "Behavioral Test", definition: "How price behaves when it returns to a reaction zone, analyzed through candle closes and wicks." },
        { term: "Rejection Defense", definition: "When price enters a zone but wicks out and closes outside it, indicating buyers or sellers defended the area." },
        { term: "Acceptance Base", definition: "When price closes cleanly inside or beyond a zone and builds a new consolidation floor, confirming market movement." }
      ],
      whyThisMatters: "Treating zones as areas to watch—rather than lines to trade—stops you from entering forced, premature positions.",
      realLifeExample: "Gold drops into a daily reaction zone between $2010 and $2015. Instead of buying instantly, you watch the 4-hour candle. It spikes to $2008 but closes at $2013, showing strong rejection wicks.",
      commonMistake: "Placing a limit order on a exact price line, expecting a perfect bounce, only to get stopped out as price sweeps through the zone.",
      quickNote: "A reaction zone is not a wall. It is a place to observe behavior."
    }
  },
  {
    type: "visual_intro",
    title: "The Middle of a Gold Range Can Be Misleading",
    label: "Middle-Zone Noise",
    visualKey: "gold-range-middle-noise",
    body: "Gold is highly volatile and can print large, fast candles even when there is no real structural transition. When Gold moves in the middle of a range, away from the upper and lower reaction zones, the reading quality of these candles is heavily degraded. This middle zone represents price balance, where buyers and sellers swap orders without a clear advantage. Large candles here look important, but they are frequently traps that lead to immediate chop.",
    context: {
      keyTerms: [
        { term: "Range Midpoint", definition: "The center of a trading range where supply and demand are in price balance." },
        { term: "Balanced Zone", definition: "An area of fair value where price chops back and forth without institutional urgency." },
        { term: "Chop Zone", definition: "A region where candles frequently overlap, print alternating colors, and lack follow-through." },
        { term: "Decoy Momentum", definition: "Fast-looking candles that print in the middle of a range but fail to create sustained trends." },
        { term: "Location Devaluation", definition: "Downgrading the importance of a candle because it formed in a low-information area." }
      ],
      whyThisMatters: "Devaluing midpoint price action protects your capital from being chopped up in random, directionless volatility.",
      realLifeExample: "Gold is trading in a range between $2030 and $2070. Price is at $2050 and prints a strong 5-minute green candle. You ignore it because it sits directly in the middle of the range.",
      commonMistake: "Assuming a fast green candle at the range midpoint means a breakout to the range high has already begun.",
      quickNote: "The middle of a Gold range can look exciting, but it often gives fewer useful answers."
    }
  },
  {
    type: "visual_intro",
    title: "Prior Highs and Lows Are Gold Reference Areas",
    label: "Prior High / Prior Low",
    visualKey: "gold-prior-high-low-location",
    body: "Prior daily or weekly highs and lows are crucial coordinates. Because these landmarks are highly visible, they act as magnets for resting orders and stop-losses. When Gold returns to a prior high or low, you do not predict a reversal. Instead, you wait for price to test the coordinate. The reader checks whether price wicks past it and returns inside, or accepts the area by closing cleanly beyond it.",
    context: {
      keyTerms: [
        { term: "Prior Swing Landmarks", definition: "Recent daily or weekly highs and lows where major price reversals occurred." },
        { term: "Liquidity Pool", definition: "A concentration of resting orders (automatic exit or entry orders) sitting just beyond key landmarks." },
        { term: "Breakout Crossing", definition: "The temporary moment price crosses a prior high or low before the candle's close quality is confirmed." },
        { term: "Overshoot Return", definition: "A quick price spike beyond a prior high or low that fails to hold and returns back inside." },
        { term: "Sweep Test", definition: "A coordinate test that triggers resting orders and immediately reverses, confirming rejection." }
      ],
      whyThisMatters: "Watching how Gold behaves at prior swing landmarks helps you differentiate between a false spike and a true breakout.",
      realLifeExample: "Gold rises toward the prior weekly high of $2088. Price spikes to $2092 but closes the daily candle at $2084. You read this overshoot-and-return as a rejection of higher coordinates.",
      commonMistake: "Buying a breakout immediately as price crosses a prior high, without waiting for the candle to close and confirm acceptance.",
      quickNote: "Prior highs and lows are not automatic reversal walls. They are locations to observe behavior."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Wicks Need Location Before Meaning",
    label: "Wick Location",
    visualKey: "gold-wick-location-meaning",
    body: "Gold prints some of the largest wicks in the trading world. Beginners are often taught that a long wick always means a reversal is coming. This is false. A wick's meaning is dictated by its location. A long upper wick that forms directly at a daily reaction zone or a prior weekly high holds high reading quality. That same upper wick printing in the middle of range noise or during low-volume hours is likely just random spread volatility.",
    context: {
      keyTerms: [
        { term: "Wick Clues", definition: "The thin line on a candlestick representing within-candle price rejection at specific coordinates." },
        { term: "Location Filter", definition: "Evaluating where a wick formed on the structural map before assigning it meaning." },
        { term: "Wick at Edge", definition: "A wick that forms at a major range boundary or reaction zone, holding high reading quality." },
        { term: "Mid-Range Wick", definition: "A wick that prints in the center of a range, holding low reading quality." },
        { term: "Close Quality", definition: "Where a candle closes relative to its wicks and the key structural level it tested." }
      ],
      whyThisMatters: "Ignoring mid-range wicks prevents you from taking bad counter-trend trades during normal consolidation chop.",
      realLifeExample: "You notice a 4-hour candle with a large lower wick on XAU/USD. You check the location: price is at the range midpoint, not at support. You ignore the wick as random noise.",
      commonMistake: "Shorting Gold because you see a single upper wick, without checking if the wick actually tested a significant reaction zone.",
      quickNote: "A wick is a clue. Location tells you whether the clue deserves attention."
    }
  },
  {
    type: "visual_intro",
    title: "Sweep Locations Are Questions, Not Answers",
    label: "Sweep Location",
    visualKey: "gold-sweep-location-audit",
    body: "In Gold trading, price regularly sweeps above prior highs or below prior lows to trigger resting orders. This is a common institutional order-matching event. However, a sweep location is a question, not an answer. A sweep does not guarantee a reversal. The reader waits for behavior: does price return inside the range on a strong close (proving rejection), or does it hold its ground outside the boundary (suggesting breakout acceptance)?",
    context: {
      keyTerms: [
        { term: "Liquidity Sweep", definition: "Price temporarily breaching a key level to trigger stop orders (automatic exits) and match large buy/sell orders." },
        { term: "Sweep and Return", definition: "When price spikes past a swing landmark but closes the candle back inside the boundary." },
        { term: "Acceptance Alternative", definition: "When price sweeps past a high, but instead of reversing, it consolidates above it, confirming a breakout." },
        { term: "Fake Breakout", definition: "A sweep that retail traders mistake for a breakout, trapping them as price reverses." },
        { term: "Order Matching", definition: "The process of institutional traders matching their large orders against triggered retail stops." }
      ],
      whyThisMatters: "Waiting for close confirmation after a sweep keeps you from buying the absolute top of a fake breakout.",
      realLifeExample: "Gold spikes above the daily high of $2060, reaching $2065. It looks like a breakout, but the 1-hour candle closes at $2058. This sweep-and-return warns you not to buy.",
      commonMistake: "Failing to check the candle close after price sweeps a prior high, resulting in buying right into a trap.",
      quickNote: "A sweep is a location clue that needs close and follow-through confirmation."
    }
  },
  {
    type: "visual_intro",
    title: "Macro Location Can Distort Gold Reading",
    label: "Macro Location",
    visualKey: "gold-macro-location-distortion",
    body: "Gold is highly sensitive to macroeconomic events such as inflation data (CPI), jobs reports (Non-Farm Payrolls, or NFP), interest rate decisions, and Treasury yield shifts. During these announcements, Gold will print massive, volatile candles. A macro-driven spike can overshoot a reaction zone by 20 dollars in seconds. To read these locations, you must practice extreme patience. Let the event noise settle, and check where the candle closes relative to the reaction zone.",
    context: {
      keyTerms: [
        { term: "Macro Location", definition: "Price areas that become active or distorted during high-impact economic news releases." },
        { term: "Yield Pressure", definition: "The negative correlation between US Treasury yields and Gold, forcing price shifts." },
        { term: "USD Context", definition: "Checking if the US Dollar Index (DXY) is rejecting or accepting key coordinates during Gold moves." },
        { term: "Event Spike", definition: "A rapid price spike during news that often clears out liquidity on both sides of a range." },
        { term: "Close Stability", definition: "Evaluating where a macro candle finishes after the initial news volatility has subsided." }
      ],
      whyThisMatters: "Patience during macro spikes prevents you from trading the initial, highly random news reaction.",
      realLifeExample: "NFP data is released, and Gold spikes $25 higher, clearing the range high at $2045. You wait. An hour later, price is trading back at $2038. The macro location was a trap.",
      commonMistake: "Chasing a volatile news candle during the release, only to get trapped by a massive wick reversal.",
      quickNote: "Macro news distort coordinates. Let the dust settle and check the close."
    }
  },
  {
    type: "visual_intro",
    title: "Higher-Timeframe Gold Location Changes the Lower-Timeframe Story",
    label: "Higher-Timeframe Location",
    visualKey: "gold-htf-location-context",
    body: "A lower-timeframe Gold move can look incredibly strong, convincing, and clean until you check the higher-timeframe map. Gold may be pushing up on the 15-minute chart, but if it is running directly into a major daily reaction zone, that lower-timeframe push is in a high-risk location. The daily sellers are likely to step in, stalling the lower-timeframe trend. Always check the bigger map before trusting the smaller move.",
    context: {
      keyTerms: [
        { term: "HTF Location", definition: "The coordinate of price on the 4-hour, daily, or weekly charts." },
        { term: "HTF Reaction Zone", definition: "A major historical reversal area identified on daily or weekly timeframes." },
        { term: "Dual-Timeframe Context", definition: "Analyzing how a lower-timeframe trend aligns with higher-timeframe boundaries." },
        { term: "Push Exhaustion", definition: "When a lower-timeframe trend runs out of steam upon meeting a higher-timeframe barrier." },
        { term: "Reading Priority", definition: "Giving higher-timeframe coordinates priority over lower-timeframe candle patterns." }
      ],
      whyThisMatters: "Overlaying HTF locations prevents you from buying a lower-timeframe trend right at the point where it is most likely to exhaust.",
      realLifeExample: "The 15-minute Gold chart shows a strong uptrend. However, you check the daily chart and see price is at the weekly resistance ceiling. You hold a cautious, mixed reading.",
      commonMistake: "Trading a 5-minute breakout without realizing that the location is directly inside a daily resistance zone.",
      quickNote: "The small chart shows the move. The bigger chart shows where the move is happening."
    }
  },
  {
    type: "visual_intro",
    title: "Gold Location First, Candle Behavior Second",
    label: "Location Workflow",
    visualKey: "gold-location-first-workflow",
    body: "To read Gold like a professional, you must follow a disciplined, repeatable mental checklist. Before trusting a Gold move, locate Gold through reaction zones, prior highs and lows, wick behavior, sweep areas, macro context, higher-timeframe location, close quality, and follow-through. Never focus on the color or size of a candle until you have audited its coordinates. By establishing this workflow on every chart, you filter out random movements and only trade when the location gives you a structural advantage.",
    context: {
      keyTerms: [
        { term: "Location Workflow", definition: "The step-by-step checklist of auditing price coordinates before analyzing candles." },
        { term: "Coordinate Scan", definition: "Locating price relative to reaction zones, prior highs/lows, and range boundaries." },
        { term: "Context Audit", definition: "Checking USD (DXY) alignment and macro events to confirm structural support." },
        { term: "Close Quality Check", definition: "Evaluating the candle body close relative to the tested location boundaries." },
        { term: "Reading Quality Verdict", definition: "Classifying the market condition as clear, mixed, or unclear based on location coordinates." }
      ],
      whyThisMatters: "A repeatable workflow removes emotional reactivity and ensures you only judge candles that form in high-information zones.",
      realLifeExample: "You open the Gold chart. Instead of looking at the current candle, you locate: weekly high, daily reaction zones, check DXY location, and then read the close quality.",
      commonMistake: "Looking at a candle pattern first and then forcing support/resistance zones onto the chart to justify a trade.",
      quickNote: "Gold location first, candle behavior second."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Is This Gold Location Useful or Weak?",
    label: "Practice Drill",
    visualKey: "gold-location-quality-practice-drill",
    body: "Test your Gold location-reading discipline on this scenario: Gold prints a large green candle on the 15-minute chart, closing near its high. However, price is in the middle of a wide trading range. It is far from the upper reaction zone and far from the lower reaction zone. There are no prior highs, prior lows, or higher-timeframe areas nearby. How should you read this location?",
    taskData: {
      type: "choice_block",
      question: "Gold prints a large green candle on the 15-minute chart, closing near its high. However, price is in the middle of a wide trading range. It is far from the upper reaction zone and far from the lower reaction zone. There are no prior highs, prior lows, or higher-timeframe areas nearby. What is the most disciplined Gold location reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because Gold printed a large green candle, showing strong buyer dominance.",
          isCorrect: false,
          feedback: "Incorrect. The candle is active, but its location in the middle of the range devalues the reading quality to noise. There is no structural reference here."
        },
        {
          id: "B",
          text: "Strong location because any large Gold candle represents high institutional volume and must be followed.",
          isCorrect: false,
          feedback: "Incorrect. Not all Gold chart areas are equal. Location changes how useful the evidence is; in the middle of a range, it is highly random."
        },
        {
          id: "C",
          text: "Weak or low-quality location because the move formed in the middle of a wide range without a useful reference area.",
          isCorrect: true,
          feedback: "Correct! This is a weak or low-quality location. Gold moved in the middle of a wide range, away from reaction zones and useful reference areas, making it noise."
        },
        {
          id: "D",
          text: "Guaranteed reversal because Gold is inside a range and must reverse immediately back to the support floor.",
          isCorrect: false,
          feedback: "Incorrect. Being inside a range does not guarantee a reversal. It only means the location is low-quality, and you should stand aside."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Mid-Range Decoy", definition: "A price move in the center of a range that appears strong but lacks order support." },
        { term: "Coordinate Validation", definition: "Verifying if price is at a major weekly or daily landmark before reading wicks." },
        { term: "Discipline Stand-Aside", definition: "Refusing to trade active-looking candles because they formed in weak locations." },
        { term: "Close Quality", definition: "The location of a candle's close relative to range highs and lows rather than its own range." },
        { term: "Confirmation Wait", definition: "Waiting for price to reach range extremes before forming a market reading." }
      ],
      whyThisMatters: "This drill trains you to resist the visual temptation of trading large candles that have no structural backup.",
      realLifeExample: "You see Gold print a strong green candle. You note it is in the range center and has no nearby daily levels. You close the chart and do nothing.",
      commonMistake: "Chasing a breakout inside range midpoint noise because a single candle looked fast.",
      quickNote: "A big candle in the middle of a range is just noise trying to look like a move."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Locate Gold Before Trusting the Move",
    label: "Gold Debrief",
    visualKey: "gold-location-debrief",
    body: "Congratulations! You have completed the Module 0.8 Gold Roadway track. You have built a critical filter: before trusting a Gold move, locate Gold through reaction zones, prior highs and lows, wick behavior, sweep areas, macro context, higher-timeframe location, close quality, and follow-through. By filtering out range midpoints, watching prior swing landmarks, overlaying higher-timeframe boundaries, and waiting for close quality and follow-through, you read Gold with institutional objectivity.",
    context: {
      keyTerms: [
        { term: "Location-First Habit", definition: "The automated habit of mapping chart boundaries before studying candle wicks or bodies." },
        { term: "Boundary Check", definition: "Scanning the chart for range extremes and historical daily swing areas." },
        { term: "Close Quality Audit", definition: "Checking if candle bodies closed outside or returned inside key coordinates." },
        { term: "Macro Context Overlay", definition: "Waiting for news volatility to settle to see where coordinates are accepted." },
        { term: "Reading Quality Verdict", definition: "Judging whether a setup is clear, mixed, or unclear based on its location coordinates." }
      ],
      whyThisMatters: "Location awareness is your ultimate shield. It prevents you from taking low-quality trades inside range chop, protecting your capital for prime conditions.",
      realLifeExample: "A professional Gold trader opens a chart, notes that price is consolidating in the middle of its daily range, and logs out without trading.",
      commonMistake: "Forgetting the location workflow when a fast candle prints, leading to impulsive trades in noisy areas.",
      quickNote: "Do not ask only whether the Gold candle is big. Ask where Gold is."
    }
  }
];
