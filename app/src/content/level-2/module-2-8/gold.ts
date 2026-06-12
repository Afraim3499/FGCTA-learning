import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Wick Cluster Filtering",
    "label": "Gold Track",
    "body": "### Gold Wick Filtering: Identifying Significant Movements\nWick clusters in gold can obscure true price action. This card teaches **how to filter these clusters to discern meaningful price movements from market noise**.\n\n* **Cluster Analysis**: Identify wick clusters by observing multiple wicks within a 15-minute timeframe. A cluster of three or more wicks indicates potential indecision rather than a strong directional move.\n* **Volume Confirmation**: Validate wick clusters with volume spikes. A wick cluster accompanied by a volume increase of at least 50% compared to the average volume indicates a higher probability of a significant price move.\n* **Timeframe Alignment**: Focus on filtering wick clusters on the 1-hour chart while confirming with the daily chart. Clusters that align with daily support or resistance levels carry more weight in decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick Cluster",
          "definition": "A series of price wicks that indicate indecision in the market."
        }
      ],
      "whyThisMatters": "Filtering wick clusters enhances the accuracy of entry and exit points, reducing the risk of false signals.",
      "realLifeExample": "On March 15, 2023, gold formed a wick cluster around $1,920 during the 10:00 AM EST news release, with a volume spike of 60%. This indicated potential indecision before a breakout.",
      "commonMistake": "Traders often react to wick clusters without confirming with volume, leading to premature entries.",
      "quickNote": "Filter wick clusters to distinguish between noise and significant price movements.",
      "mentorText": "When you see a cluster of wicks, don't jump in. Check the volume. If it’s not confirming the move, you might be looking at noise.",
      "mentorAnalogy": "Think of wick clusters like turbulence during a flight; they can signal instability, but you need to assess if you're approaching clear skies before making a move."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "concept",
    "title": "Distinguishing Daily High/Low Anchors",
    "label": "Gold Track",
    "body": "### Daily High/Low Anchors: Noise vs. Price Action\nDaily high and low anchors serve as critical reference points in gold trading. This card focuses on **how to distinguish these anchors from noise-induced intraday wicks**.\n\n* **Anchor Identification**: Mark daily high and low anchors on the chart at the start of each trading day. These levels should be confirmed by at least two touches within the trading session.\n* **Wick Analysis**: Analyze intraday wicks that breach these anchors. A wick that exceeds the daily high or low but closes within the range indicates potential false breakouts.\n* **Session Context**: Consider the context of the trading session. For example, if a wick breaches the daily low during the London session but fails to hold, it may indicate a reversal opportunity.",
    "context": {
      "keyTerms": [
        {
          "term": "Daily Anchor",
          "definition": "The highest or lowest price reached during a trading day."
        }
      ],
      "whyThisMatters": "Accurately identifying daily anchors helps traders avoid false breakouts and enhances the precision of their trades.",
      "realLifeExample": "On April 10, 2023, gold reached a daily high of $1,950. A wick touched $1,952 but closed at $1,948, indicating a false breakout during the New York session.",
      "commonMistake": "Traders often mistake intraday wicks that breach daily anchors as valid breakouts without waiting for confirmation.",
      "quickNote": "Differentiate daily high/low anchors from noise to refine trading decisions.",
      "mentorText": "When you see a wick breach a daily anchor, don’t assume it’s a breakout. Wait for the close to confirm the move.",
      "mentorAnalogy": "Identifying daily anchors is like setting waypoints on a navigation system; they guide your path and help you avoid detours."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "concept",
    "title": "Analyzing Intraday Wicks for Trading Signals",
    "label": "Gold Track",
    "body": "### Intraday Wicks: Signal Analysis\nIntraday wicks can provide valuable insights into market sentiment. This card explores **techniques for analyzing these wicks to identify potential trading signals**.\n\n* **Wick Length Assessment**: Measure the length of intraday wicks. A wick length exceeding 1% of the current price indicates strong rejection or buying pressure, warranting further analysis.\n* **Contextual Relevance**: Analyze the context of the wick formation. For instance, a long wick at resistance levels suggests a potential reversal, while a wick at support may indicate a buying opportunity.\n* **Multiple Timeframe Confirmation**: Use higher timeframes to confirm signals from intraday wicks. A wick that aligns with a reversal pattern on the 4-hour chart strengthens the case for a trading signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Intraday Wick",
          "definition": "A price movement within a trading day that shows rejection of a price level."
        }
      ],
      "whyThisMatters": "Analyzing intraday wicks accurately can lead to timely entries and exits, enhancing overall trading performance.",
      "realLifeExample": "On May 5, 2023, gold formed a long wick at $1,940 during the 2:00 PM EST session, indicating rejection at resistance, which led to a subsequent drop to $1,925.",
      "commonMistake": "Traders often overlook the context of wick formations, leading to misinterpretation of market sentiment.",
      "quickNote": "Analyze intraday wicks to uncover potential trading signals based on market sentiment.",
      "mentorText": "Look at the length of the wick and where it forms. If it’s long and at a key level, it’s telling you something important about market sentiment.",
      "mentorAnalogy": "Analyzing intraday wicks is like reading the pulse of a patient; it reveals critical insights about their condition and helps guide your next steps."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "concept",
    "title": "Validating Gold Structures Against External Ranges",
    "label": "Gold Track",
    "body": "### Validating Gold Structures: External Range Alignment\nValidating gold structures against external ranges ensures alignment with broader market movements. This card teaches **how to validate these structures effectively**.\n\n* **External Range Definition**: Identify external ranges by analyzing the last 14 days of price action. Mark significant high and low points to establish a broader context for current price movements.\n* **Structure Confirmation**: Confirm gold structures by checking if they align with external ranges. For example, a bullish structure forming at the lower boundary of an external range indicates a potential buying opportunity.\n* **Breakout Validation**: When price breaks an external range, validate the breakout by checking for volume confirmation. A breakout accompanied by a volume increase of 30% or more indicates a higher probability of continuation.",
    "context": {
      "keyTerms": [
        {
          "term": "External Range",
          "definition": "The high and low price levels established over a specified period, typically 14 days."
        }
      ],
      "whyThisMatters": "Validating structures against external ranges enhances the robustness of trading strategies, aligning them with market trends.",
      "realLifeExample": "On June 12, 2023, gold broke above an external range at $1,960 with a volume increase of 35%, confirming a bullish structure and leading to a rally to $1,980.",
      "commonMistake": "Traders often fail to validate breakouts against external ranges, leading to false entries.",
      "quickNote": "Validate gold structures against external ranges to ensure alignment with market trends.",
      "mentorText": "Always check if your structure aligns with the external range. If it doesn’t, you might be setting yourself up for a false move.",
      "mentorAnalogy": "Validating structures is like ensuring a building's foundation is solid; without it, the entire structure is at risk of collapse."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Gold Trading",
    "label": "Gold Track",
    "body": "### Risk Management: Navigating Gold Trading Structures\nEffective risk management in gold trading requires an understanding of both internal and external structures. This card details **specific techniques to mitigate risks associated with volatility and market movements**.\n\n* **Position Sizing**: Calculate position sizes based on the average true range (ATR) of gold over the past 14 days. For instance, if the ATR is $20, limit your position size to 1% of your trading capital per $20 move to maintain risk control.\n* **Stop-Loss Placement**: Set stop-loss orders just beyond recent internal structure highs or lows. For example, if gold trades at $1,800 and the last internal high is $1,810, place your stop-loss at $1,812 to avoid being stopped out by minor fluctuations.\n* **Risk-Reward Ratio**: Aim for a minimum risk-reward ratio of 1:3. If entering a trade at $1,800 with a stop-loss at $1,812, set your target price at $1,824 to ensure that potential gains outweigh the risks taken.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade based on risk tolerance."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Understanding these risk management techniques is critical for maintaining capital and ensuring long-term trading success in gold markets.",
      "realLifeExample": "On March 15, 2023, gold spiked to $1,850 during a geopolitical event. A trader using a $20 ATR would size their position to avoid overexposure during this volatility.",
      "commonMistake": "Traders often neglect to adjust their stop-loss levels according to market volatility, leading to unnecessary losses.",
      "quickNote": "Effective risk management in gold trading hinges on understanding market structures.",
      "mentorText": "When trading gold, always remember to size your positions based on volatility. If the market moves against you, a well-placed stop-loss can save your capital.",
      "mentorAnalogy": "Think of risk management in trading like a pilot calculating fuel needs based on flight distance and weather conditions; both require precise planning to avoid disaster."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "concept",
    "title": "Leveraging Gold Structures for Trading Strategies",
    "label": "Gold Track",
    "body": "### Trading Strategies: Exploiting Gold's Internal and External Structures\nDeveloping effective trading strategies in gold requires a nuanced understanding of its internal and external structures. This card outlines **strategies that capitalize on these market dynamics**.\n\n* **Breakout Trading**: Identify external structure breakouts above resistance levels. For instance, if gold breaks above $1,850 with strong volume, consider entering a long position to capitalize on upward momentum.\n* **Pullback Entries**: Use internal structure pullbacks to enter trades at favorable prices. If gold retraces to $1,830 after a move to $1,850, assess the market for bullish signals before entering a long position.\n* **Range Trading**: Recognize when gold is trading within a defined range, such as between $1,800 and $1,850. Execute buy orders near $1,800 and sell orders near $1,850 to profit from oscillations within this range.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Trading",
          "definition": "A strategy that involves entering a trade when the price breaks above a resistance level."
        },
        {
          "term": "Pullback Entry",
          "definition": "A strategy that involves entering a trade after a price retracement to a support level."
        },
        {
          "term": "Range Trading",
          "definition": "A strategy that involves buying at support and selling at resistance within a defined price range."
        }
      ],
      "whyThisMatters": "Utilizing these strategies allows traders to make informed decisions based on structural analysis, enhancing profitability in gold trading.",
      "realLifeExample": "On April 10, 2023, gold broke above $1,850 with a surge in volume, prompting traders to enter long positions, which resulted in a rally to $1,900.",
      "commonMistake": "Traders often fail to wait for confirmation before entering breakout trades, leading to false signals and losses.",
      "quickNote": "Effective trading strategies in gold hinge on recognizing and acting upon market structures.",
      "mentorText": "Always look for breakouts or pullbacks in gold. If you see a strong breakout, don’t hesitate to enter, but ensure you have confirmation first.",
      "mentorAnalogy": "Think of trading strategies like a chess game; each move must be calculated based on the opponent's position and potential responses."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "practice",
    "title": "Applying Gold Structure Analysis in Trading Scenarios",
    "label": "Gold Track",
    "body": "### Practical Application: Analyzing Gold Structures for Trading Decisions\nEngaging in practical exercises helps solidify the understanding of internal and external structures in gold trading. This card presents **scenarios for applying structure analysis**.\n\n* **Scenario 1**: Gold is currently trading at $1,820, and the last internal high was $1,830. What is the best approach to enter a trade? Consider placing a buy order at $1,815 with a stop-loss at $1,810 to capitalize on a potential breakout.\n* **Scenario 2**: Gold has formed a range between $1,800 and $1,850. What strategy should you employ? Execute a buy near $1,800 and a sell near $1,850, ensuring to monitor for signs of a breakout.\n* **Scenario 3**: Gold breaks above $1,860 with high volume. What should be your next move? Enter a long position with a target of $1,900, placing a stop-loss at $1,855 to protect against reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Confirmation",
          "definition": "The validation of a breakout through increased volume and price movement."
        },
        {
          "term": "Range Bound Trading",
          "definition": "A trading strategy focused on buying and selling within established price boundaries."
        },
        {
          "term": "Market Monitoring",
          "definition": "The continuous observation of market conditions to inform trading decisions."
        }
      ],
      "whyThisMatters": "Practicing these scenarios enhances the ability to make informed trading decisions based on structural analysis.",
      "realLifeExample": "During a trading session on May 5, 2023, gold fluctuated between $1,800 and $1,850, allowing traders to capitalize on range-bound strategies effectively.",
      "commonMistake": "Traders often rush into trades without proper analysis of the internal and external structures, leading to poor decision-making.",
      "quickNote": "Applying structure analysis in trading scenarios is essential for informed decision-making.",
      "mentorText": "When faced with a trading decision, always analyze the structure first. It’s your roadmap to making the right moves.",
      "mentorAnalogy": "Think of structure analysis like a surgeon preparing for an operation; each step must be meticulously planned to ensure success."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Gold is currently trading at $1,825, with the last internal high at $1,835. What is the best course of action?",
      "options": [
        {
          "id": "0",
          "text": "Place a buy order at $1,820 with a stop-loss at $1,815.",
          "isCorrect": true,
          "feedback": "This approach allows for a potential breakout while managing risk effectively."
        },
        {
          "id": "1",
          "text": "Sell immediately at market price.",
          "isCorrect": false,
          "feedback": "Selling at market price does not consider the potential for a breakout."
        },
        {
          "id": "2",
          "text": "Place a buy order at $1,840 with a stop-loss at $1,835.",
          "isCorrect": false,
          "feedback": "This order is too far from the current price and does not capitalize on internal structure."
        },
        {
          "id": "3",
          "text": "Wait for further confirmation before making any trades.",
          "isCorrect": false,
          "feedback": "While caution is important, waiting too long can lead to missed opportunities."
        }
      ]
    },
    "visualKey": "gold-wicks-vs-daily-anchors"
  },
  {
    "type": "summary",
    "title": "Key Concepts of Gold Internal vs External Structures",
    "label": "Gold Track",
    "body": "### Summary: Internal vs External Structures in Gold Trading\nThis card encapsulates the critical concepts surrounding internal and external structures in gold trading. Understanding these elements is essential for effective market analysis and decision-making.\n\n* **Internal Structures**: Recognize minor pullbacks within the broader market context to avoid false signals. Internal structures help identify entry points during retracements.\n* **External Structures**: Focus on major price levels and breakouts that define the overall market trend. External structures provide context for risk management and trade planning.\n* **Integration of Structures**: Successful trading in gold requires integrating both internal and external structures for comprehensive market analysis, enhancing the potential for profitable trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Internal Structures",
          "definition": "Minor price movements that occur within a larger trend."
        },
        {
          "term": "External Structures",
          "definition": "Major price levels that define the overall market trend."
        },
        {
          "term": "Market Context",
          "definition": "The overall environment in which trading decisions are made."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces their importance in developing a structured approach to trading gold.",
      "realLifeExample": "On June 1, 2023, gold's internal structure showed a pullback to $1,810 while the external structure indicated a resistance at $1,850, guiding traders in their decisions.",
      "commonMistake": "Traders often overlook the relationship between internal and external structures, leading to misinformed trades.",
      "quickNote": "Integrating internal and external structures is vital for effective gold trading.",
      "mentorText": "Always keep both internal and external structures in mind when analyzing the market. They are your compass in navigating trades.",
      "mentorAnalogy": "Think of market structures like a building's foundation and framework; both are essential for stability and success."
    },
    "taskData": null,
    "visualKey": "gold-wicks-vs-daily-anchors"
  }
];
