import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Sizing Continuation Trades in the NY Session",
    "label": "Forex Track",
    "body": "### Core Scenario: Sizing Continuation Trades\nContinuation trades capitalize on momentum established during the London session. This card teaches **how to size these trades effectively based on prior session trends**.\n\n* **Trend Confirmation**: Verify that the trend established in the London session is intact by analyzing key support and resistance levels before entering a trade in the NY session.\n* **Position Sizing**: Use the Average True Range (ATR) of the London session to determine the optimal position size, ensuring that risk remains within acceptable parameters.\n* **Risk-Reward Ratio**: Aim for a minimum risk-reward ratio of 1:2, adjusting position size accordingly to maintain this ratio based on the current market volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuation Trade",
          "definition": "A trade that follows the established trend from a previous session."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A measure of market volatility used to determine position size."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Proper sizing of continuation trades ensures that traders can maximize their potential gains while managing risk effectively.",
      "realLifeExample": "During the London session, EURUSD moves from 1.1000 to 1.1050, establishing a bullish trend. In the NY session, using an ATR of 20 pips, a trader sizes their position to risk 1% of their capital, targeting a profit at 1.1100.",
      "commonMistake": "Traders often miscalculate position size by not accounting for the volatility of the previous session, leading to overexposure.",
      "quickNote": "Size continuation trades based on London session trends and ATR.",
      "mentorText": "When sizing your continuation trades, always refer back to the London session's volatility. If the trend is strong, your position should reflect that strength while keeping risk in check.",
      "mentorAnalogy": "Think of sizing your trades like a pilot adjusting fuel load based on the flight path and weather conditions. Just as a pilot ensures the aircraft is balanced for optimal performance, you must balance your trade size with market conditions."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "concept",
    "title": "Identifying London Session Trends",
    "label": "Forex Track",
    "body": "### Core Scenario: Identifying London Session Trends\nIdentifying trends during the London session is critical for planning NY session trades. This card teaches **how to analyze price action and volume to spot these trends**.\n\n* **Price Action Analysis**: Observe the first hour of the London session for significant price movements, noting whether they break key support or resistance levels.\n* **Volume Confirmation**: Use volume indicators to confirm the strength of a trend; higher volume during price movements suggests stronger conviction.\n* **Trend Lines**: Draw trend lines based on the high and low points of the London session to visualize potential continuation patterns into the NY session.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time."
        },
        {
          "term": "Volume Indicator",
          "definition": "A tool that shows the number of shares or contracts traded in a security."
        },
        {
          "term": "Trend Line",
          "definition": "A line that connects significant price points to indicate the direction of the market."
        }
      ],
      "whyThisMatters": "Accurate identification of trends during the London session allows for better-informed trading decisions in the subsequent NY session.",
      "realLifeExample": "In the London session, GBPUSD rallies from 1.2500 to 1.2550 with increased volume, indicating a strong bullish trend. A trader notes this trend and prepares to enter a continuation trade in the NY session.",
      "commonMistake": "Traders often overlook volume analysis, leading to false confirmations of trends based solely on price action.",
      "quickNote": "Focus on price action and volume to identify London session trends.",
      "mentorText": "When assessing trends, always look for volume spikes that accompany price movements. This will give you a clearer picture of whether the trend is likely to continue.",
      "mentorAnalogy": "Identifying trends is like a detective piecing together clues. Each price movement and volume spike provides critical evidence that helps you determine the direction of the market."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "concept",
    "title": "Techniques for Trade Sizing",
    "label": "Forex Track",
    "body": "### Core Scenario: Techniques for Trade Sizing\nEffective trade sizing is essential for managing risk while maximizing returns. This card teaches **various techniques to determine appropriate trade sizes**.\n\n* **Fixed Fractional Method**: Allocate a fixed percentage of your trading capital (e.g., 1%) to each trade, adjusting the position size based on the stop-loss distance.\n* **Kelly Criterion**: Use the Kelly Criterion formula to calculate optimal bet size based on your win rate and average win/loss ratio, ensuring that you are not over-leveraging.\n* **Volatility-Based Sizing**: Adjust position sizes based on the volatility of the asset, using indicators like ATR to determine how much to risk per trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Fixed Fractional Method",
          "definition": "A risk management strategy that allocates a fixed percentage of capital to each trade."
        },
        {
          "term": "Kelly Criterion",
          "definition": "A formula used to determine the optimal size of a series of bets."
        },
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given security."
        }
      ],
      "whyThisMatters": "Proper trade sizing techniques help traders manage risk effectively, ensuring long-term sustainability in their trading careers.",
      "realLifeExample": "A trader with a $10,000 account uses the fixed fractional method, risking 1% per trade. With a stop-loss of 30 pips on EURUSD, they calculate their position size to be 0.33 lots.",
      "commonMistake": "Traders often neglect to adjust their position sizes based on volatility, leading to either excessive risk or missed opportunities.",
      "quickNote": "Employ various techniques to determine trade sizes that align with your risk management strategy.",
      "mentorText": "Always remember that your trade size should reflect your risk tolerance and the volatility of the market. Adjust accordingly to stay within your risk parameters.",
      "mentorAnalogy": "Think of trade sizing like a chef adjusting ingredient quantities based on the number of servings. Just as a chef ensures each dish is balanced, you must ensure your trades are sized appropriately for the market conditions."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "concept",
    "title": "Integrating Evidence for Trade Decisions",
    "label": "Forex Track",
    "body": "### Core Scenario: Integrating Evidence for Trade Decisions\nIntegrating evidence from both the London and NY sessions is crucial for making informed trading decisions. This card teaches **how to synthesize information from multiple sessions**.\n\n* **Session Correlation**: Analyze how trends from the London session correlate with price movements in the NY session, identifying potential continuation or reversal points.\n* **Data Aggregation**: Compile data from various indicators, including moving averages and momentum oscillators, to form a comprehensive view of market conditions across sessions.\n* **Decision Framework**: Establish a decision framework that incorporates session evidence, allowing for systematic trade entry and exit points based on aligned signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Correlation",
          "definition": "The relationship between price movements in different trading sessions."
        },
        {
          "term": "Data Aggregation",
          "definition": "The process of compiling and analyzing data from multiple sources."
        },
        {
          "term": "Decision Framework",
          "definition": "A structured approach to making trading decisions based on evidence."
        }
      ],
      "whyThisMatters": "Integrating evidence from multiple sessions enhances the accuracy of trading decisions, leading to improved performance.",
      "realLifeExample": "After observing a bullish trend in the London session for AUDJPY, a trader analyzes the NY session's opening price and momentum indicators, confirming a continuation setup before entering a trade.",
      "commonMistake": "Traders often fail to consider evidence from both sessions, leading to incomplete analysis and suboptimal trading decisions.",
      "quickNote": "Integrate evidence from both sessions to enhance decision-making accuracy.",
      "mentorText": "Always look at the bigger picture by integrating evidence from both sessions. This holistic view will guide your trading decisions and improve your outcomes.",
      "mentorAnalogy": "Integrating evidence is like an architect reviewing blueprints from different phases of construction. Each phase provides critical insights that ensure the final structure is sound and meets all requirements."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "concept",
    "title": "Recognizing Continuation Patterns",
    "label": "Forex Track",
    "body": "### Core Scenario: Continuation Patterns Identification\nContinuation patterns indicate the likelihood of a trend persisting after a brief pause. This card teaches **how to identify key continuation patterns during the NY session based on prior London trends**.\n\n* **Pattern Types**: Focus on common patterns such as flags, pennants, and triangles that emerge after a significant price movement. These patterns suggest that the market is consolidating before continuing in the same direction.\n* **Volume Confirmation**: Ensure that volume supports the continuation pattern; increasing volume during the breakout phase strengthens the validity of the pattern.\n* **Session Timing**: Monitor the transition from the London session to the NY session, as successful patterns often manifest during this overlap, providing a robust trading opportunity.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuation Patterns",
          "definition": "Chart formations that indicate a trend is likely to continue after a period of consolidation."
        }
      ],
      "whyThisMatters": "Identifying continuation patterns allows traders to align with prevailing market momentum, enhancing the probability of successful trades.",
      "realLifeExample": "During the NY session, EURUSD forms a bullish flag after a 50-pip rise in the London session, with volume increasing by 30% at the breakout, signaling a continuation opportunity.",
      "commonMistake": "Traders often overlook volume analysis, leading to false confirmations of continuation patterns.",
      "quickNote": "Focus on volume and session timing when identifying continuation patterns.",
      "mentorText": "When you spot a continuation pattern, assess the volume closely. If it supports the breakout, you’re likely on the right track. Always consider the session context.",
      "mentorAnalogy": "Think of continuation patterns like a runner taking a breather before sprinting again; the pause indicates they are recharging for the next push."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "concept",
    "title": "Conducting Risk-Reward Analysis",
    "label": "Forex Track",
    "body": "### Core Scenario: Risk-Reward Assessment\nConducting a thorough risk-reward analysis is essential for evaluating the viability of continuation trades. This card teaches **how to quantify risk and reward before executing trades**.\n\n* **Risk Calculation**: Determine the stop-loss level based on the nearest support or resistance, ensuring it is logically placed to minimize losses while allowing for market fluctuations.\n* **Reward Estimation**: Identify potential profit targets using prior price action, aiming for a minimum risk-reward ratio of 1:2 to justify the trade.\n* **Scenario Testing**: Use historical data to backtest the risk-reward scenarios, ensuring that the chosen levels have a history of providing favorable outcomes in similar market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "A solid risk-reward analysis ensures that trades are not only based on potential profit but also on calculated risk, enhancing overall trading performance.",
      "realLifeExample": "In a continuation trade on GBPUSD, a trader sets a stop-loss at 1.3800 (30 pips risk) and targets 1.3860 (60 pips reward), establishing a 1:2 risk-reward ratio.",
      "commonMistake": "Traders often set targets without proper analysis, leading to unfavorable risk-reward ratios that jeopardize their capital.",
      "quickNote": "Always calculate your risk-reward ratio before entering a trade.",
      "mentorText": "Before entering a trade, I always assess my risk against the potential reward. If the numbers don’t align, I walk away. It’s about discipline.",
      "mentorAnalogy": "Conducting risk-reward analysis is like a pilot calculating fuel needs against distance; without accurate metrics, the journey could end in disaster."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "practice",
    "title": "Practical Application of Trade Sizing",
    "label": "Forex Track",
    "body": "### Core Scenario: Trade Sizing Techniques\nApplying appropriate trade sizing is critical for managing risk effectively. This card engages traders in **practical scenarios to apply trade sizing techniques based on London session trends for NY continuation trades**.\n\n* **Position Sizing Formula**: Use the formula: Position Size = (Account Risk % * Account Balance) / (Trade Risk in Pips * Pip Value). This ensures that your exposure aligns with your risk tolerance.\n* **Trend Analysis**: Assess the London session's price action to determine the strength of the trend, adjusting position sizes accordingly to capitalize on continuation opportunities.\n* **Dynamic Adjustments**: Be prepared to adjust your position size based on real-time market conditions, including volatility and liquidity changes during the NY session.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Proper trade sizing is essential for maintaining risk management and ensuring long-term profitability in trading.",
      "realLifeExample": "A trader with a $10,000 account risks 1% ($100) on a trade with a stop-loss of 20 pips on USDJPY, calculating a position size of 0.5 lots based on the pip value.",
      "commonMistake": "Traders often over-leverage their positions, exposing themselves to unnecessary risk and potential account drawdown.",
      "quickNote": "Always calculate your position size based on your risk tolerance and market conditions.",
      "mentorText": "When sizing your trades, remember: it’s not just about how much you can make, but how much you can afford to lose. Stay disciplined.",
      "mentorAnalogy": "Think of trade sizing like a chef portioning ingredients; too much can spoil the dish, while the right amount creates a balanced meal."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $20,000 account and a risk tolerance of 1%, what is the maximum amount you can risk on a single trade if your stop-loss is 50 pips?",
      "options": [
        {
          "id": "0",
          "text": "$200",
          "isCorrect": true,
          "feedback": "Correct. 1% of $20,000 is $200, which is the maximum risk for this trade."
        },
        {
          "id": "1",
          "text": "$100",
          "isCorrect": false,
          "feedback": "Incorrect. $100 is only 0.5% of the account, not the maximum risk allowed."
        },
        {
          "id": "2",
          "text": "$400",
          "isCorrect": false,
          "feedback": "Incorrect. $400 exceeds the 1% risk tolerance for this account."
        },
        {
          "id": "3",
          "text": "$1,000",
          "isCorrect": false,
          "feedback": "Incorrect. $1,000 is 5% of the account, which is too high for a single trade risk."
        }
      ]
    },
    "visualKey": "primary-scenario-map"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Concepts",
    "label": "Forex Track",
    "body": "### Core Scenario: Forex Concepts Recap\nThis summary consolidates the key concepts covered in the Forex track, emphasizing the importance of sizing NY continuation trades based on London session trends.\n\n* **Continuation Patterns**: Recognizing and validating continuation patterns is essential for identifying potential trade setups during the NY session.\n* **Risk-Reward Analysis**: Conducting a thorough risk-reward analysis ensures that trades are justified based on calculated risk versus potential profit.\n* **Trade Sizing**: Applying appropriate trade sizing techniques is critical for effective risk management and maintaining capital integrity.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Reinforcing these concepts ensures traders can effectively navigate the Forex market, maximizing their trading potential.",
      "realLifeExample": "A trader successfully identifies a continuation pattern in EURUSD, conducts a risk-reward analysis, and sizes their trade correctly, leading to a profitable outcome.",
      "commonMistake": "Failing to integrate these concepts can lead to inconsistent trading results and increased risk exposure.",
      "quickNote": "Mastering these concepts is vital for successful Forex trading.",
      "mentorText": "Remember, the key to success in Forex is not just about finding trades but understanding the underlying mechanics of each decision you make.",
      "mentorAnalogy": "Summarizing these concepts is like a pilot reviewing their flight plan; each element is crucial for a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "primary-scenario-map"
  }
];
