import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Managing Gold Wick Volatility",
    "label": "Gold Track",
    "body": "### Gold Wick Dynamics: Volatility Management\nWick volatility in gold trading can create misleading price signals. This card outlines **how to interpret and manage wick movements effectively**.\n\n* **Wick Length Analysis**: Measure the length of wicks relative to the body of the candle; a wick longer than the body indicates potential reversal or volatility. For example, a 15-minute candle with a body of $5 and a wick of $10 suggests significant price rejection.\n* **Session Timing**: Pay attention to major market sessions; wicks tend to be more pronounced during overlapping sessions (e.g., London and New York) due to increased liquidity and volatility.\n* **Volume Confirmation**: Confirm wick movements with volume spikes; a wick accompanied by high volume indicates stronger conviction behind the price action, while low volume may suggest a false signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick Volatility",
          "definition": "The rapid price movement represented by the wick of a candlestick, indicating rejection of price levels."
        }
      ],
      "whyThisMatters": "Understanding wick volatility is crucial for avoiding false breakouts and ensuring accurate trade entries and exits.",
      "realLifeExample": "On October 6, 2023, gold formed a 1-hour candle with a $15 wick during the overlap of the London and New York sessions, indicating a rejection of the $1,850 level.",
      "commonMistake": "Traders often misinterpret long wicks as definitive breakouts without considering volume and context.",
      "quickNote": "Wick length and volume are key indicators of price rejection in gold trading.",
      "mentorText": "When you see a long wick, don’t jump to conclusions. Analyze the length and volume to determine if it’s a genuine move or just noise.",
      "mentorAnalogy": "Think of wick volatility like turbulence in aviation; just as pilots must assess turbulence before making decisions, traders must analyze wick movements to avoid misjudgments."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "concept",
    "title": "Identifying True Swing Highs and Lows on Gold",
    "label": "Gold Track",
    "body": "### Gold Market Structure: Swing Highs and Lows\nAccurate identification of swing highs and lows in gold is essential for establishing market structure. This card teaches **methods to distinguish true swings from false signals**.\n\n* **Swing Confirmation**: A swing high must be confirmed by subsequent lower highs, while a swing low is confirmed by higher lows. For instance, if gold reaches $1,860 and then forms a lower high at $1,855, the $1,860 point is a valid swing high.\n* **Timeframe Consistency**: Use multiple timeframes to confirm swing points; a swing high on the 1-hour chart should align with a swing high on the 4-hour chart for greater reliability.\n* **Volume Analysis**: Look for volume spikes at swing points; a swing high with increasing volume indicates stronger selling pressure, validating the swing.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A price point where the market peaks before reversing downward."
        },
        {
          "term": "Swing Low",
          "definition": "A price point where the market bottoms before reversing upward."
        }
      ],
      "whyThisMatters": "Identifying true swing points allows traders to establish reliable support and resistance levels for effective trade planning.",
      "realLifeExample": "On September 25, 2023, gold established a swing low at $1,820, confirmed by a subsequent higher low at $1,825, indicating a bullish reversal.",
      "commonMistake": "Traders often mistake minor price fluctuations for swing points without confirming with volume or timeframe alignment.",
      "quickNote": "True swing highs and lows require confirmation from subsequent price action and volume.",
      "mentorText": "Always confirm your swing points. If you see a potential swing high, check if the next price action supports it before making any decisions.",
      "mentorAnalogy": "Identifying swing points is like a surgeon confirming a diagnosis; you need multiple indicators to ensure accuracy before proceeding."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "concept",
    "title": "Analyzing Sweeps in Gold Market Structure",
    "label": "Gold Track",
    "body": "### Gold Price Sweeps: Analysis Techniques\nPrice sweeps in the gold market can indicate either genuine moves or traps. This card focuses on **how to analyze these sweeps for informed trading decisions**.\n\n* **Sweep Identification**: A sweep occurs when price rapidly moves through multiple levels. For example, if gold drops from $1,850 to $1,830 in a matter of minutes, analyze the context to determine if it’s a trap or a legitimate move.\n* **Order Flow Observation**: Monitor order flow during sweeps; if large sell orders are executed, it suggests a genuine move, while a lack of follow-through indicates a potential trap.\n* **Market Sentiment**: Assess market sentiment through news and economic indicators; a sweep coinciding with negative news may validate the move, while a sweep without news may signal a false breakout.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Sweep",
          "definition": "A rapid price movement that breaches multiple support or resistance levels."
        }
      ],
      "whyThisMatters": "Differentiating between genuine sweeps and traps is vital for executing successful trades and managing risk.",
      "realLifeExample": "On October 10, 2023, gold swept through $1,840 to $1,820 in a single session, driven by a surge in selling pressure following poor economic data.",
      "commonMistake": "Traders often react impulsively to sweeps without analyzing the underlying order flow or market context.",
      "quickNote": "Always analyze the context and order flow behind price sweeps to validate their significance.",
      "mentorText": "When you see a sweep, don’t just react. Analyze the order flow and market sentiment to determine if it’s a real move or a trap.",
      "mentorAnalogy": "Analyzing price sweeps is like a detective examining a crime scene; you need to gather evidence before drawing conclusions."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "concept",
    "title": "Validating Gold Structure Points",
    "label": "Gold Track",
    "body": "### Gold Structure Validation: Methods and Techniques\nValidating swing points in gold is essential for establishing a reliable market structure. This card explores **methods to ensure the accuracy of identified swing points**.\n\n* **Contextual Analysis**: Evaluate the broader market context when validating swing points; a swing high at $1,850 is more significant if it coincides with a major resistance level or economic data release.\n* **Confluence Factors**: Look for confluence with other technical indicators, such as Fibonacci retracement levels or moving averages, to strengthen the validity of swing points. For example, if a swing low aligns with a 61.8% Fibonacci retracement, it adds credibility.\n* **Timeframe Alignment**: Ensure that swing points are validated across multiple timeframes; a swing high on the daily chart should be confirmed by the 4-hour and 1-hour charts for greater reliability.",
    "context": {
      "keyTerms": [
        {
          "term": "Structure Validation",
          "definition": "The process of confirming the reliability of identified swing points through contextual and technical analysis."
        }
      ],
      "whyThisMatters": "Validating swing points enhances the reliability of trading strategies and risk management practices.",
      "realLifeExample": "On November 1, 2023, a swing high at $1,870 was validated by a confluence with a 50-day moving average and a significant economic report release.",
      "commonMistake": "Traders often overlook the importance of context and confluence when validating swing points, leading to unreliable trading decisions.",
      "quickNote": "Context and confluence are essential for validating swing points in gold trading.",
      "mentorText": "Before acting on a swing point, ensure it’s backed by context and confluence. This will save you from making decisions based on false signals.",
      "mentorAnalogy": "Validating swing points is like an architect ensuring structural integrity; you need multiple checks to confirm the design before construction."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  }
];
