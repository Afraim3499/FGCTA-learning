import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Filtering Gold Wick Noise",
    "label": "Gold Track",
    "body": "### Filtering Gold Wick Noise: Mission Brief\nGold's volatility often results in wicks that can mislead traders. This mission focuses on **methods to filter out noise from gold wicks, distinguishing true structural rejections from temporary fluctuations**.\n\n* **Wick Length Analysis**: Evaluate wicks that exceed the average range of the past three sessions by more than 50%. These are more likely to represent noise rather than genuine rejections.\n* **Volume Confirmation**: Only consider wicks significant if accompanied by a surge in volume exceeding the 20-period moving average by 30%. This indicates institutional involvement.\n* **Timeframe Correlation**: Cross-reference wick behavior across multiple timeframes. A rejection on the 1-hour chart must align with similar behavior on the 4-hour chart to be considered valid.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick",
          "definition": "The thin line on a candlestick chart representing the high and low prices during a given time period."
        },
        {
          "term": "Noise",
          "definition": "Market movements that do not reflect genuine price action or trend direction."
        }
      ],
      "whyThisMatters": "Filtering noise is crucial to avoid false signals and ensure trades are based on genuine market movements.",
      "realLifeExample": "During a volatile session, gold spikes to $1,950 but quickly retracts to $1,940. Without volume confirmation, this wick is noise.",
      "commonMistake": "Traders often react to long wicks without confirming volume, leading to premature entries.",
      "quickNote": "Not all wicks are signals; confirm with volume and timeframe alignment.",
      "mentorText": "Think of gold wicks like gusts of wind. A strong gust might sway a tree, but only a sustained wind will uproot it. Confirm the strength before reacting.",
      "mentorAnalogy": "Filtering noise is like a pilot ignoring turbulence when it's not affecting the flight path. Focus on the instruments that matter."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "concept",
    "title": "Confirming Wick Rejections",
    "label": "Gold Track",
    "body": "### Confirming Wick Rejections: Structural Verification\nTo ensure gold wicks represent genuine structural rejections, apply **criteria to validate their significance**.\n\n* **Displacement Close**: A wick is confirmed as a rejection if the candlestick closes beyond the previous structural level, indicating a true shift.\n* **Sequential Confirmation**: Look for a series of at least two consecutive candlesticks confirming the direction of the rejection, reinforcing the structural change.\n* **Volume Spike Validation**: A rejection is only valid if the wick is accompanied by a volume spike at least 40% above the average, indicating strong market interest.",
    "context": {
      "keyTerms": [
        {
          "term": "Displacement Close",
          "definition": "A candlestick close that clearly breaks a previous structural level, confirming a directional shift."
        }
      ],
      "whyThisMatters": "Validating wick rejections prevents false entries and aligns trades with genuine market sentiment.",
      "realLifeExample": "Gold wicks down to $1,920 but closes at $1,930 above a previous support level, confirming a rejection.",
      "commonMistake": "Assuming a single wick represents a rejection without waiting for confirmation closes.",
      "quickNote": "A wick's story is incomplete without a confirming close.",
      "mentorText": "Don't jump at shadows. Wait for the market to confirm its intentions with a solid close.",
      "mentorAnalogy": "Like a surgeon confirming a diagnosis with multiple tests, confirm wick rejections with multiple criteria."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "concept",
    "title": "Identifying Yield Sweeps",
    "label": "Gold Track",
    "body": "### Identifying Yield Sweeps: Differentiation from Rejections\nYield sweeps can mimic rejections but lack structural confirmation. Learn **how to identify and differentiate yield sweeps from true rejections**.\n\n* **Sweep Characteristics**: Yield sweeps often occur with rapid price movements that fail to close beyond key levels, indicating a lack of commitment.\n* **Volume Discrepancy**: Sweeps typically show a volume drop-off after the initial spike, unlike genuine rejections that maintain elevated volume levels.\n* **Reversal Patterns**: Look for reversal patterns following a sweep, such as engulfing candles, to confirm the absence of a structural shift.",
    "context": {
      "keyTerms": [
        {
          "term": "Yield Sweep",
          "definition": "A rapid price movement that temporarily breaches a level without confirming a structural change."
        }
      ],
      "whyThisMatters": "Distinguishing sweeps from rejections prevents misinterpretation of temporary price movements as structural changes.",
      "realLifeExample": "Gold spikes to $1,960 but quickly returns to $1,950 without closing above the resistance, indicating a yield sweep.",
      "commonMistake": "Confusing yield sweeps with genuine breakouts, leading to erroneous trade entries.",
      "quickNote": "Sweeps lack follow-through; watch for volume and reversal patterns.",
      "mentorText": "A yield sweep is like a false start in a race. The initial burst doesn't mean the race is on.",
      "mentorAnalogy": "Identifying sweeps is like a detective distinguishing between a real lead and a red herring. Look for supporting evidence."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "concept",
    "title": "Techniques for Noise Filtering",
    "label": "Gold Track",
    "body": "### Techniques for Noise Filtering: Clarity in Verification\nExplore **various techniques for filtering out noise in gold trading**, focusing on maintaining clarity in structural verification.\n\n* **Multi-Timeframe Analysis**: Use higher timeframes to filter out lower timeframe noise, ensuring that signals align across different perspectives.\n* **ATR-Based Filtering**: Apply the Average True Range (ATR) to set thresholds for acceptable wick sizes, filtering out those that fall below the threshold.\n* **Market Context Evaluation**: Consider broader market conditions, such as economic releases or geopolitical events, that may cause temporary noise.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Noise filtering ensures that trading decisions are based on reliable data, avoiding distractions from irrelevant market movements.",
      "realLifeExample": "During a high-volatility news event, gold wicks erratically. Using ATR, filter out wicks below $10 to focus on significant movements.",
      "commonMistake": "Ignoring higher timeframe trends, leading to decisions based on short-term noise.",
      "quickNote": "Filter noise with ATR and context; align signals across timeframes.",
      "mentorText": "Think of noise filtering like tuning a radio. Ignore the static to focus on the clear signal.",
      "mentorAnalogy": "Filtering noise is like an air traffic controller focusing on the main runway signals, ignoring irrelevant background chatter."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "concept",
    "title": "Checking Structural Integrity in Gold Setups",
    "label": "Gold Track",
    "body": "### Gold Setup: Structural Integrity Verification\nGold setups require rigorous structural checks to ensure wicks align with broader market trends. This card outlines **how to verify structural integrity in gold trading setups**.\n\n* **Trend Alignment**: Confirm that wick formations align with the prevailing trend on higher timeframes. A wick that extends against the primary trend without a subsequent reversal signal is typically noise.\n* **Volume Confirmation**: Verify that significant wicks are supported by increased volume, indicating genuine market interest rather than transient noise.\n* **Range Contextualization**: Assess the wick's position within the current trading range. Wicks that form at range extremes are more likely to indicate structural shifts than those within the range.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Integrity",
          "definition": "The alignment of market movements with broader trends and volume support."
        }
      ],
      "whyThisMatters": "Ensuring structural integrity prevents traders from acting on misleading signals and reduces exposure to false breakouts.",
      "realLifeExample": "Gold at $1,850 shows a long wick on the 4-hour chart, aligning with a bullish daily trend and supported by high trading volume.",
      "commonMistake": "Ignoring higher timeframe trends, leading to misinterpretation of wick signals as trend reversals.",
      "quickNote": "Align wicks with trend and volume for structural integrity.",
      "mentorText": "Always verify that your gold setup's wicks are in harmony with the overarching market trend. This prevents you from mistaking noise for a genuine move.",
      "mentorAnalogy": "Think of it like a structural engineer assessing a building's framework. If the beams aren't aligned with the design, the structure is unsound."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "concept",
    "title": "Confirmation in Turbulent Gold Markets",
    "label": "Gold Track",
    "body": "### Gold Market: Turbulence Confirmation Strategies\nIn volatile gold markets, maintaining structural verification is crucial. This card details **strategies for confirming setups amidst market turbulence**.\n\n* **Volatility Filters**: Implement ATR (Average True Range) filters to distinguish between normal volatility and significant market moves. A setup is confirmed only if price action exceeds the ATR threshold.\n* **Multi-Timeframe Analysis**: Use multiple timeframes to confirm setups. A setup is only valid if it aligns across at least two different timeframes, reducing the risk of false signals.\n* **Event Impact Assessment**: Consider the impact of macroeconomic events on gold volatility. Confirm setups only if they remain valid after accounting for event-driven price spikes.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over a certain period."
        }
      ],
      "whyThisMatters": "In turbulent markets, confirmation strategies help traders avoid reacting to noise and focus on genuine market movements.",
      "realLifeExample": "During a sudden spike in gold prices due to geopolitical tension, a trader uses ATR to confirm that the move is beyond normal volatility before entering a trade.",
      "commonMistake": "Failing to adjust confirmation criteria for increased volatility, leading to premature trade entries.",
      "quickNote": "Use ATR and multi-timeframe checks to confirm in volatility.",
      "mentorText": "In turbulent gold markets, don't rush. Use volatility filters and cross-check timeframes to ensure your setup is solid.",
      "mentorAnalogy": "Like a pilot navigating through a storm, you need to rely on multiple instruments to confirm your course, not just the visual cues."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "practice",
    "title": "Gold Confirmation Practice",
    "label": "Gold Track",
    "body": "### Practical Exercise: Gold Setup Confirmation\nApply your knowledge of noise filtering and confirmation techniques in real-world gold trading scenarios. This exercise tests your ability to verify structural integrity and confirm setups under varying market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Noise Filtering",
          "definition": "The process of distinguishing between significant market signals and irrelevant price movements."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, ensuring traders can effectively implement confirmation strategies in live markets.",
      "realLifeExample": "A trader identifies a potential gold setup at $1,870 but uses volume and ATR to confirm its validity before executing the trade.",
      "commonMistake": "Overlooking the need for confirmation in practice, leading to reliance on initial signals without verification.",
      "quickNote": "Practice confirms theory; apply filters and checks.",
      "mentorText": "Now it's time to put theory into practice. Test your ability to filter noise and confirm setups in real scenarios.",
      "mentorAnalogy": "Like a surgeon practicing on simulations before operating, you must hone your skills in controlled environments before live trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a gold setup at $1,860 with a large wick on the 1-hour chart. The daily trend is bullish, and volume is high. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Confirm the setup as valid and prepare to trade.",
          "isCorrect": true,
          "feedback": "The setup aligns with the daily trend and is supported by high volume, indicating structural integrity."
        },
        {
          "id": "1",
          "text": "Ignore the setup due to the large wick.",
          "isCorrect": false,
          "feedback": "Ignoring a setup solely due to a wick without considering trend alignment and volume is a mistake."
        },
        {
          "id": "2",
          "text": "Wait for a reversal signal before acting.",
          "isCorrect": false,
          "feedback": "A reversal signal is unnecessary if the setup aligns with the trend and volume confirms it."
        },
        {
          "id": "3",
          "text": "Enter the trade immediately without further checks.",
          "isCorrect": false,
          "feedback": "Immediate entry without confirmation checks can lead to trading on noise."
        }
      ]
    },
    "visualKey": "gold-wick-noise-filter"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Confirmation Strategies",
    "label": "Gold Track",
    "body": "### Consolidating Gold Confirmation Techniques\nReview key strategies for filtering noise and verifying structural integrity in gold trading. This summary consolidates the essential techniques covered in this module.\n\n* **Trend and Volume Alignment**: Ensure wicks and setups align with broader market trends and are supported by volume, confirming structural integrity.\n* **Volatility and Multi-Timeframe Checks**: Use ATR and multi-timeframe analysis to filter noise and confirm setups in volatile markets.\n* **Event-Driven Adjustments**: Adapt confirmation strategies to account for macroeconomic events impacting gold volatility, ensuring setups remain valid.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Strategies",
          "definition": "Methods used to verify the validity of a trading setup before execution."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of confirmation strategies equips traders to navigate complex market conditions with confidence.",
      "realLifeExample": "After a major economic announcement, a trader uses multi-timeframe analysis and ATR to validate a gold setup at $1,880.",
      "commonMistake": "Failing to integrate multiple confirmation strategies, leading to reliance on single indicators.",
      "quickNote": "Integrate trend, volume, and volatility checks for robust confirmation.",
      "mentorText": "You've learned the tools; now integrate them. Use trend, volume, and volatility checks to ensure your gold trades are based on solid confirmation.",
      "mentorAnalogy": "Think of it like a chef using all their senses to confirm a dish's readiness. You need multiple checks to ensure your trade is ready."
    },
    "taskData": null,
    "visualKey": "gold-wick-noise-filter"
  }
];
