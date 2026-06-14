import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Strategies for Navigating Gold Volatility",
    "label": "Gold Track",
    "body": "### Gold Volatility: Structure Awareness Strategies\nGold exhibits significant price fluctuations, necessitating a structured approach to navigate its volatility effectively. This card outlines **strategies to maintain structural integrity during rapid price movements**.\n\n* **Dynamic Swing Highs and Lows**: Continuously update swing high and low markers in real-time during volatile sessions, such as the London open, where gold can move 15-20 pips within minutes.\n* **Volatility Filters**: Utilize ATR (Average True Range) to set thresholds for volatility; avoid trading when ATR exceeds 2% of the current price to minimize risk during extreme movements.\n* **Timeframe Alignment**: Analyze multiple timeframes (e.g., 1-hour and 4-hour) to confirm structural integrity; if a swing high on the 1-hour aligns with a 4-hour structure, it strengthens the validity of the trade setup.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a volatility indicator measuring market movement."
        }
      ],
      "whyThisMatters": "Understanding volatility management is crucial for executing trades without being misled by false breakouts in gold's price action.",
      "realLifeExample": "During the 8:30 AM EST NFP release, gold spiked from $1,800 to $1,815, creating a volatile environment where maintaining swing structure was essential to avoid false signals.",
      "commonMistake": "Traders often fail to adjust their swing markers in real-time, leading to misinterpretation of price action during volatile periods.",
      "quickNote": "Maintain dynamic swing markers to adapt to gold's volatility.",
      "mentorText": "When trading gold, always keep your swing markers updated. If you see a rapid price movement, check if it aligns with your structural analysis before executing a trade.",
      "mentorAnalogy": "Think of navigating gold volatility like a pilot adjusting altitude in turbulent weather; constant adjustments ensure a safe flight path."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "concept",
    "title": "Awareness of Swing Traps in Gold Trading",
    "label": "Gold Track",
    "body": "### Gold Trading: Recognizing Swing Traps\nSwing traps can mislead traders in gold markets, resulting in significant losses. This card focuses on **identifying and avoiding common swing traps specific to gold trading**.\n\n* **False Breakouts**: Monitor for price movements that breach swing highs or lows without follow-through; for instance, if gold spikes above $1,810 but quickly retraces, it may indicate a false breakout.\n* **Volume Analysis**: Assess volume spikes accompanying price movements; a breakout with low volume (below 50% of the average) often signals a trap rather than a genuine trend.\n* **Confirmation Signals**: Utilize candlestick patterns (e.g., pin bars) to confirm swing highs or lows; a pin bar at a swing high with a long upper wick can indicate a potential reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that exceeds a swing high or low but fails to sustain momentum."
        }
      ],
      "whyThisMatters": "Awareness of swing traps is essential to avoid entering trades based on misleading price action, which can erode capital.",
      "realLifeExample": "On March 15, gold surged to $1,825, only to reverse sharply back to $1,800, trapping traders who entered on the breakout without confirming the move.",
      "commonMistake": "Traders often enter positions immediately after a breakout without waiting for confirmation, leading to losses from swing traps.",
      "quickNote": "Always confirm breakouts with volume and candlestick patterns to avoid traps.",
      "mentorText": "Before entering a trade, ask yourself: does this breakout have the volume to support it? If not, it’s likely a trap.",
      "mentorAnalogy": "Identifying swing traps in gold is like a surgeon recognizing a false diagnosis; accurate assessment is crucial to avoid unnecessary interventions."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "practice",
    "title": "Practical Application of Gold Swing Analysis",
    "label": "Gold Track",
    "body": "### Gold Swing Analysis: Practical Exercises\nEngaging in practical exercises reinforces the application of swing analysis techniques in gold trading. This card focuses on **applying learned concepts through real-world scenarios**.\n\n* **Scenario Analysis**: Review a chart of gold over the past month, identifying at least three swing highs and three swing lows, noting the price action and volume at each point.\n* **Trade Simulation**: Create a hypothetical trade plan based on identified swings; for example, if a swing low forms at $1,780, plan an entry at $1,785 with a stop loss at $1,775.\n* **Risk Assessment**: Calculate the risk-to-reward ratio for each identified swing trade; ensure that the ratio is at least 1:2 before executing any trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-to-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to the potential loss."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding of swing analysis, enabling traders to make informed decisions in live markets.",
      "realLifeExample": "In a recent trading session, gold formed a swing low at $1,780; a trader who identified this could have entered a long position at $1,785, targeting $1,800 with a stop loss at $1,775.",
      "commonMistake": "Traders often overlook the importance of risk assessment, leading to disproportionate risk in their trading plans.",
      "quickNote": "Practice identifying swings and calculating risk-to-reward ratios to enhance trading discipline.",
      "mentorText": "When analyzing swings, always ask yourself: how does this fit into my overall trading plan? Each swing should have a purpose.",
      "mentorAnalogy": "Think of swing analysis like a military operation; every move must be calculated and purposeful to ensure mission success."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a swing high at $1,820 and plan to enter a short position at $1,815. What should be your stop loss if you aim for a risk-to-reward ratio of 1:2?",
      "options": [
        {
          "id": "0",
          "text": "$1,825",
          "isCorrect": true,
          "feedback": "Correct. A stop loss at $1,825 allows for a $10 risk, targeting a $20 reward."
        },
        {
          "id": "1",
          "text": "$1,810",
          "isCorrect": false,
          "feedback": "Incorrect. A stop loss at $1,810 does not provide sufficient risk for the desired reward."
        },
        {
          "id": "2",
          "text": "$1,830",
          "isCorrect": false,
          "feedback": "Incorrect. A stop loss at $1,830 exceeds your entry point and increases risk."
        },
        {
          "id": "3",
          "text": "$1,800",
          "isCorrect": false,
          "feedback": "Incorrect. A stop loss at $1,800 does not align with the risk-to-reward ratio requirement."
        }
      ]
    },
    "visualKey": "gold-wick-structure-sweeps"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Market Insights",
    "label": "Gold Track",
    "body": "### Gold Market Insights: Key Takeaways\nThis card summarizes essential insights from the Gold track, emphasizing the importance of swing analysis in trading decisions. Key points include **the significance of swing highs and lows in establishing market structure**.\n\n* **Swing Identification**: Recognizing swing highs and lows is critical for determining entry and exit points; these points serve as reference markers for potential reversals.\n* **Volatility Management**: Implementing strategies to navigate gold's volatility ensures that traders maintain structural awareness and avoid false signals during rapid price movements.\n* **Avoiding Traps**: Awareness of swing traps helps traders make informed decisions, reducing the likelihood of entering positions based on misleading price action.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure",
          "definition": "The arrangement of price action defined by swing highs and lows."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the foundational concepts of swing analysis, essential for successful gold trading.",
      "realLifeExample": "Traders who effectively identified swings during the recent gold rally from $1,750 to $1,800 capitalized on significant price movements by adhering to structured analysis.",
      "commonMistake": "Failing to consolidate insights from swing analysis can lead to inconsistent trading strategies and missed opportunities.",
      "quickNote": "Consolidate swing analysis insights to enhance trading effectiveness.",
      "mentorText": "Reflect on your trades: did you base your decisions on solid swing analysis? Consistency in this practice is key to long-term success.",
      "mentorAnalogy": "Summarizing gold market insights is like a pilot debriefing after a flight; reviewing performance ensures better outcomes in future missions."
    },
    "taskData": null,
    "visualKey": "gold-wick-structure-sweeps"
  }
];
