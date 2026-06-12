import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Spike Verification Filter Introduction",
    "label": "Gold Track",
    "body": "### Gold Spike Verification Filter Introduction\nSpike verification filters are essential for refining gold trading strategies. This card introduces **how to identify and filter out low-probability setups by analyzing price spikes**.\n\n* **Spike Definition**: A spike is a rapid, significant price movement often caused by news or market events. Identifying these correctly is crucial for filtering.\n* **Filter Criteria**: Only consider spikes that occur with high volume and clear follow-through. Spikes lacking these characteristics are typically noise.\n* **Threshold Verification**: Establish a minimum pip movement threshold for a spike to be considered valid. This ensures only substantial movements are analyzed.",
    "context": {
      "keyTerms": [
        {
          "term": "Spike",
          "definition": "A rapid and significant price movement in the market."
        },
        {
          "term": "Filter Criteria",
          "definition": "Specific conditions that a price spike must meet to be considered valid."
        }
      ],
      "whyThisMatters": "Filtering out noise spikes helps traders focus on high-probability setups, reducing false signals.",
      "realLifeExample": "During a 9:30 AM EST economic release, gold spikes $15 within minutes. Verify if volume supports this move before considering a trade.",
      "commonMistake": "Traders often mistake minor fluctuations for spikes, leading to poor trade decisions.",
      "quickNote": "Not every spike is trade-worthy; verify with volume and follow-through.",
      "mentorText": "Think of a spike as a sudden gust of wind. Not every gust turns into a storm, so we need to check if it has the strength to follow through.",
      "mentorAnalogy": "Like an engineer testing a bridge for structural integrity after a seismic event, traders must verify a spike's validity before proceeding."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "concept",
    "title": "Volatility Sweep Filters",
    "label": "Gold Track",
    "body": "### Volatility Sweep Filters\nVolatility sweeps are pivotal in assessing gold trading setups. This card explains **how to utilize sudden price movements to verify evidence thresholds for plan eligibility**.\n\n* **Sweep Identification**: A volatility sweep occurs when price rapidly moves through a range, often clearing out stop orders. Identify these by their speed and range.\n* **Confirmation Requirement**: A valid sweep must close beyond a key level with a strong candle body, not just a wick. This indicates genuine market intent.\n* **Volume Correlation**: High volume accompanying a sweep confirms institutional participation, enhancing the setup's credibility.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Sweep",
          "definition": "A rapid price movement through a range, often clearing stop orders."
        },
        {
          "term": "Confirmation Requirement",
          "definition": "Conditions that must be met for a volatility sweep to be considered valid."
        }
      ],
      "whyThisMatters": "Volatility sweeps can indicate genuine market direction, filtering out false breakouts.",
      "realLifeExample": "Gold drops $20 in 5 minutes during a Fed announcement, sweeping through a key support level with high volume.",
      "commonMistake": "Assuming any rapid price movement is a sweep without checking for volume and close.",
      "quickNote": "A sweep without volume is a mirage; verify with a solid close.",
      "mentorText": "A volatility sweep is like a tidal wave. It needs to have the force and volume to clear everything in its path, not just splash around.",
      "mentorAnalogy": "Like a pilot checking wind shear before landing, traders must ensure a sweep has the necessary volume and close to be actionable."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "concept",
    "title": "US Treasury Yield Correlation Filters",
    "label": "Gold Track",
    "body": "### US Treasury Yield Correlation Filters\nUS Treasury yield correlations are instrumental in filtering gold trading plans. This card explores **how to use the relationship between gold prices and yield movements to verify plan eligibility**.\n\n* **Inverse Correlation**: Gold often moves inversely to US Treasury yields. A rise in yields can signal a potential drop in gold prices.\n* **Correlation Verification**: Confirm the correlation by analyzing recent yield movements and their impact on gold. A strong inverse relationship enhances the setup's validity.\n* **Yield Thresholds**: Establish specific yield change thresholds that must be met to consider the correlation valid for trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Inverse Correlation",
          "definition": "A relationship where one asset moves opposite to another."
        },
        {
          "term": "Yield Thresholds",
          "definition": "Specific changes in yields that must be met to validate a correlation."
        }
      ],
      "whyThisMatters": "Understanding yield correlations helps traders anticipate gold price movements, enhancing decision-making.",
      "realLifeExample": "10-year Treasury yields rise by 0.25% during a session, and gold prices drop by $30, confirming the inverse correlation.",
      "commonMistake": "Ignoring yield movements and their impact on gold, leading to misaligned trades.",
      "quickNote": "Yields up, gold down; verify the correlation strength.",
      "mentorText": "Think of Treasury yields as the tide. When they rise, gold often recedes, and understanding this flow is crucial.",
      "mentorAnalogy": "Like a sailor adjusting sails based on wind direction, traders must align their strategies with yield movements."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "concept",
    "title": "ATR-Based Target Filters",
    "label": "Gold Track",
    "body": "### ATR-Based Target Filters\nAverage True Range (ATR) is a vital tool for setting realistic targets in gold trading. This card details **how to use ATR data to filter trading plans and verify their eligibility**.\n\n* **ATR Calculation**: Determine the ATR over a relevant period to gauge average price movement. This helps set realistic targets.\n* **Target Alignment**: Ensure that the target aligns with the ATR value. Targets beyond the ATR are less probable and should be adjusted.\n* **Volatility Adjustment**: Use ATR to adjust targets based on current market volatility, ensuring they remain achievable.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A measure of market volatility based on recent price movements."
        },
        {
          "term": "Target Alignment",
          "definition": "Ensuring trading targets are realistic and aligned with market conditions."
        }
      ],
      "whyThisMatters": "ATR helps traders set achievable targets, reducing the risk of overextending positions.",
      "realLifeExample": "With an ATR of $25, setting a $50 target in a single session is unrealistic and should be adjusted.",
      "commonMistake": "Setting targets without considering ATR, leading to unachievable goals.",
      "quickNote": "Align targets with ATR to ensure they are within reach.",
      "mentorText": "ATR is like a speedometer. It tells you how fast the market is moving, so you can set your targets accordingly.",
      "mentorAnalogy": "Like a marathon runner pacing themselves based on their average speed, traders must set targets that align with ATR."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "concept",
    "title": "Stop-Hunting Sweep Filters",
    "label": "Gold Track",
    "body": "### Gold Spike Verification: Stop-Hunting Sweep Filters\nStop-hunting sweeps in gold markets are engineered to trigger retail stop losses before reversing direction. This card teaches **how to identify and filter out these deceptive patterns**.\n\n* **Sweep Identification**: A stop-hunting sweep is characterized by a sharp spike that breaches recent highs or lows, followed by a swift reversal. Verify with volume spikes and a lack of follow-through in price action.\n* **Reversal Confirmation**: Post-sweep, a valid reversal setup requires a close back within the prior range with diminishing volume. This indicates the sweep was a liquidity grab, not a genuine breakout.\n* **Time of Day Consideration**: These sweeps often occur during low liquidity periods, such as pre-market or lunch hours. Avoid setups during these times unless the reversal criteria are met.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Hunting Sweep",
          "definition": "A market move designed to trigger stop losses before reversing."
        }
      ],
      "whyThisMatters": "Identifying stop-hunting sweeps prevents entering trades based on false breakouts, improving trade accuracy.",
      "realLifeExample": "Gold spikes $15 at 2:00 PM EST, breaching a recent high, then reverses $20 within 30 minutes, trapping breakout traders.",
      "commonMistake": "Mistaking a stop-hunting sweep for a genuine breakout, leading to poor entry decisions.",
      "quickNote": "Not every spike is a breakout; verify with volume and reversal patterns.",
      "mentorText": "When you see a sharp spike in gold, ask yourself: Is this a genuine move or a trap? Look for the reversal signal.",
      "mentorAnalogy": "Think of a stop-hunting sweep like a magician's misdirection. The initial move grabs your attention, but the real action happens in the reversal."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "concept",
    "title": "Volatility Trap Filters",
    "label": "Gold Track",
    "body": "### Gold Spike Verification: Volatility Trap Filters\nVolatility traps occur when gold prices exhibit erratic movements that entice traders into low-probability setups. This card explores **how to filter out these traps by understanding their characteristics**.\n\n* **Erratic Price Action**: Volatility traps are marked by rapid, unpredictable price swings with no clear directional bias. Avoid setups where price lacks structure and consistency.\n* **Volume Analysis**: High volatility without corresponding volume increase often signifies a trap. Genuine moves should be supported by volume expansion.\n* **Range Boundaries**: Identify and respect established range boundaries. Volatility traps typically occur near these levels without breaking them decisively.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Trap",
          "definition": "Erratic price movements that mislead traders into entering low-probability trades."
        }
      ],
      "whyThisMatters": "Filtering volatility traps reduces the likelihood of entering trades based on misleading price action.",
      "realLifeExample": "Gold fluctuates between $1,800 and $1,820 rapidly during a low-volume session, trapping traders in false breakouts.",
      "commonMistake": "Entering trades during erratic price swings without confirming volume and structure.",
      "quickNote": "Volatility without volume is a trap; confirm with structure.",
      "mentorText": "In gold trading, not every volatile move is an opportunity. Check if the volume supports the price action.",
      "mentorAnalogy": "Imagine a ship in a storm. The waves are high, but without a clear direction, it's just chaos, not progress."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "practice",
    "title": "Applying Gold Filters in Practice",
    "label": "Gold Track",
    "body": "### Gold Spike Verification: Applying Gold Filters in Practice\nEngage in practical exercises to apply gold-specific filters to trading plans. This card provides hands-on experience in filtering gold setups using evidence thresholds.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Practical application solidifies understanding and enhances the ability to filter low-probability setups in real-time.",
      "realLifeExample": "Analyzing a gold chart where price spikes $10 at 11:00 AM EST, assessing volume and reversal criteria before deciding on entry.",
      "commonMistake": "Failing to apply learned filters consistently, leading to inconsistent trading results.",
      "quickNote": "Practice makes precision; apply filters consistently.",
      "mentorText": "Let's put theory into practice. Analyze the chart, apply your filters, and decide if this setup meets your criteria.",
      "mentorAnalogy": "Like a pilot running through a pre-flight checklist, ensure every filter is applied before takeoff."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a $12 spike in gold at 9:30 AM EST with low volume and no follow-through. How should you proceed?",
      "options": [
        {
          "id": "0",
          "text": "Wait for a reversal confirmation before entering.",
          "isCorrect": true,
          "feedback": "Correct. Without volume and follow-through, this spike is likely a trap."
        },
        {
          "id": "1",
          "text": "Enter immediately, expecting a breakout.",
          "isCorrect": false,
          "feedback": "Incorrect. The lack of volume and follow-through suggests this is not a genuine breakout."
        },
        {
          "id": "2",
          "text": "Ignore the spike and look for another opportunity.",
          "isCorrect": false,
          "feedback": "Partially correct, but waiting for confirmation is a better strategy."
        },
        {
          "id": "3",
          "text": "Place a stop order above the spike high.",
          "isCorrect": false,
          "feedback": "Incorrect. This could lead to entering a trap without confirmation."
        }
      ]
    },
    "visualKey": "gold-spike-verification-filter"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Plan Filters",
    "label": "Gold Track",
    "body": "### Gold Spike Verification: Summary of Gold Plan Filters\nReview the key concepts of gold plan eligibility filters. This card summarizes **the strategies for filtering low-probability gold configurations effectively**.\n\n* **Stop-Hunting Sweep Recognition**: Identify sharp spikes followed by reversals, confirmed by volume and time of day.\n* **Volatility Trap Avoidance**: Filter out erratic price swings lacking volume and structure, especially near range boundaries.\n* **Consistent Application**: Apply these filters consistently to enhance trade accuracy and reduce exposure to false setups.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Summarizing these filters reinforces their importance and ensures traders apply them consistently.",
      "realLifeExample": "Reviewing a week's worth of gold trades, identifying patterns of stop-hunting sweeps and volatility traps.",
      "commonMistake": "Neglecting to review and apply filters consistently, leading to repeated mistakes.",
      "quickNote": "Consistent filter application is key to avoiding low-probability trades.",
      "mentorText": "Remember, these filters are your first line of defense. Use them to shield your capital from unnecessary risk.",
      "mentorAnalogy": "Think of these filters as a quality control process in manufacturing; they ensure only the best setups make it to execution."
    },
    "taskData": null,
    "visualKey": "gold-spike-verification-filter"
  }
];
