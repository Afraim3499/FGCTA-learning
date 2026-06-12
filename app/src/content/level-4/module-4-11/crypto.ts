import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Weekly Cycles in Cryptocurrency",
    "label": "Crypto Track",
    "body": "### Weekly Cycles: Impact of Weekend CME Gap\nThe weekend CME gap plays a crucial role in shaping the weekly price action in cryptocurrency markets. This card outlines **how to recognize the influence of this gap on Monday and Tuesday price movements**.\n\n* **CME Gap Dynamics**: The CME gap typically forms over the weekend when traditional markets are closed, leading to price discrepancies when crypto markets reopen on Monday. Gaps can range from 1% to 5% of the previous week's close.\n* **Market Reaction**: Price often reacts to the CME gap during the first few hours of trading on Monday, with potential for rapid movements as traders adjust positions. Watch for initial volatility spikes around 9:00 AM EST.\n* **Gap Fill Probability**: Historical data indicates that gaps are often filled within the first 48 hours of the week, making it essential to monitor price behavior closely during this timeframe.",
    "context": {
      "keyTerms": [
        {
          "term": "CME Gap",
          "definition": "The price difference that occurs when the CME Bitcoin futures market closes on Friday and reopens on Monday."
        }
      ],
      "whyThisMatters": "Understanding the CME gap is essential for anticipating price movements and positioning trades effectively at the start of the week.",
      "realLifeExample": "On Monday at 9:15 AM EST, Bitcoin opened at $40,000, creating a CME gap from the previous Friday's close of $39,500. The price quickly spiked to $41,000, indicating strong market reaction.",
      "commonMistake": "Traders often overlook the significance of the CME gap, leading to missed opportunities or misaligned positions at the start of the week.",
      "quickNote": "Monitor CME gaps closely for early-week trading opportunities.",
      "mentorText": "When you see a CME gap, treat it like a flashing signal. It indicates where the market wants to go, and you need to be ready to act as soon as the market opens.",
      "mentorAnalogy": "Think of the CME gap as a runway gap in aviation; if the runway is blocked, the plane must adjust its approach. Similarly, traders must adjust their strategies based on the gap."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "concept",
    "title": "Analyzing the Weekend CME Gap",
    "label": "Crypto Track",
    "body": "### CME Gap Analysis: Price Movements on Monday Mornings\nThe analysis of the CME gap is vital for predicting price behavior at the beginning of the trading week. This card details **how to effectively analyze the gap and its implications for price action on Mondays**.\n\n* **Gap Measurement**: Measure the gap from the last closing price on Friday to the opening price on Monday. A gap larger than 3% often indicates significant market sentiment shifts.\n* **Volume Confirmation**: Analyze trading volume during the first hour post-open. High volume accompanying a gap fill suggests strong conviction in the direction of the move.\n* **Price Action Patterns**: Look for specific price action patterns, such as engulfing candles or pin bars, that may signal a reversal or continuation of the gap direction within the first two hours of trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Confirmation",
          "definition": "The analysis of trading volume to validate price movements and market sentiment."
        }
      ],
      "whyThisMatters": "Accurate analysis of the CME gap can lead to timely entries and exits, enhancing overall trading performance.",
      "realLifeExample": "On a Monday morning, Ethereum opened at $2,800 after a CME gap from $2,750. The first hour saw a volume spike of 150% compared to the previous week, confirming bullish sentiment.",
      "commonMistake": "Failing to consider volume when analyzing the CME gap can lead to misinterpretations of market strength or weakness.",
      "quickNote": "Always analyze volume alongside the CME gap for better trade decisions.",
      "mentorText": "When you see a gap, don’t just look at the price. Check the volume too; it tells you whether the market is really behind that move or if it’s just noise.",
      "mentorAnalogy": "Analyzing the CME gap is like a doctor checking vital signs; without understanding the full picture, you can't diagnose the market's health accurately."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "concept",
    "title": "Identifying Monday Morning Price Sweeps",
    "label": "Crypto Track",
    "body": "### Monday Morning Price Sweeps: Trend Indicators\nMonday mornings often exhibit price sweeps that can indicate the prevailing trend for the week. This card focuses on **how to identify and interpret these price sweeps effectively**.\n\n* **Timeframe Focus**: Monitor the 5-minute and 15-minute charts during the first two hours of trading on Monday. Price sweeps typically occur within this timeframe as traders react to weekend news and gaps.\n* **Sweep Characteristics**: Look for rapid price movements that exceed previous highs or lows by at least 2% within a short time frame, often followed by a retracement. These can signal strong buying or selling interest.\n* **Confirmation Signals**: Use additional indicators, such as RSI or MACD, to confirm the strength of the price sweep. A divergence on these indicators can indicate a potential reversal after the sweep.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Sweep",
          "definition": "A rapid price movement that breaks through established support or resistance levels."
        }
      ],
      "whyThisMatters": "Identifying price sweeps can provide early signals for potential trends, allowing for strategic positioning in the market.",
      "realLifeExample": "On a Monday at 10:00 AM EST, Bitcoin surged from $40,000 to $41,500, exceeding the previous high by 3.75% before retracing to $40,800, indicating strong bullish momentum.",
      "commonMistake": "Traders often misinterpret price sweeps as trend reversals without confirming with additional indicators.",
      "quickNote": "Identify price sweeps early to capitalize on potential trends.",
      "mentorText": "When you see a price sweep, think of it as a freight train. It’s powerful and fast, but you need to check the tracks ahead to see if it’s headed for a destination or a dead end.",
      "mentorAnalogy": "Identifying price sweeps is like a meteorologist predicting a storm; you need to recognize the signs early to prepare for the impact."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "concept",
    "title": "Weekly Leverage Expansion in Crypto Markets",
    "label": "Crypto Track",
    "body": "### Leverage Expansion: Effects on Volatility and Price Action\nUnderstanding how leverage expands weekly in crypto markets is essential for managing risk and anticipating volatility. This card explains **the mechanics of leverage expansion and its implications for trading**.\n\n* **Leverage Dynamics**: Leverage typically increases at the start of the week as traders open new positions based on weekend developments. Monitor changes in open interest to gauge leverage levels.\n* **Volatility Indicators**: High leverage often correlates with increased volatility. Use the Average True Range (ATR) to measure volatility spikes, particularly during the first two days of the week.\n* **Risk Management**: Adjust position sizes based on leverage levels. A 5x leverage can amplify both gains and losses, necessitating tighter stop-loss orders to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Open Interest",
          "definition": "The total number of outstanding derivative contracts that have not been settled."
        }
      ],
      "whyThisMatters": "Understanding leverage dynamics allows traders to make informed decisions, reducing the risk of significant losses during volatile periods.",
      "realLifeExample": "On a Monday, Bitcoin's open interest increased by 20% from the previous week, leading to a volatility spike where the price fluctuated between $39,000 and $42,000 within the first 24 hours.",
      "commonMistake": "Traders often underestimate the impact of leverage on volatility, leading to overexposure in their positions.",
      "quickNote": "Monitor leverage levels to anticipate market volatility and adjust risk management strategies accordingly.",
      "mentorText": "Think of leverage as a double-edged sword. It can cut your losses or double your gains, but you must wield it carefully to avoid disaster.",
      "mentorAnalogy": "Managing leverage in trading is like handling a high-performance sports car; it requires skill and awareness to navigate safely without losing control."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "concept",
    "title": "Summary of Cryptocurrency Weekly Cycle Insights",
    "label": "Crypto Track",
    "body": "### Weekly Cycle Insights: Cryptocurrency Overview\nAnalyzing weekly cycles in cryptocurrency trading reveals critical patterns that can inform strategic decisions. This card summarizes the key insights, focusing on the CME gap and Monday sweeps.\n\n* **CME Gap Dynamics**: The CME gap often creates significant price reactions when the market opens after the weekend. Traders should monitor gaps formed during the weekend and anticipate potential fill strategies on Monday.\n* **Monday Sweep Patterns**: Price action on Mondays frequently shows a tendency to sweep previous week highs or lows. This behavior can be used to identify potential reversal points or continuation patterns early in the week.\n* **Volatility Considerations**: The initial volatility on Mondays can lead to false breakouts. Utilize lower timeframes to confirm price action before entering trades based on weekly cycle insights.",
    "context": {
      "keyTerms": [
        {
          "term": "CME Gap",
          "definition": "The price difference between the last trading price on Friday and the first price on Sunday."
        },
        {
          "term": "Monday Sweep",
          "definition": "A price movement on Monday that typically seeks to test the previous week's high or low."
        }
      ],
      "whyThisMatters": "Understanding these insights allows traders to position themselves effectively at the start of the week, maximizing potential profit opportunities.",
      "realLifeExample": "On a recent Monday, Bitcoin opened at $40,000, sweeping down to $39,500 before rallying back to $41,000, effectively filling the CME gap from the weekend.",
      "commonMistake": "Traders often enter positions too early on Mondays without waiting for confirmation of price action.",
      "quickNote": "Monitor CME gaps and Monday sweeps for strategic positioning.",
      "mentorText": "Focus on the CME gap and Monday's price action. These are your early indicators for the week ahead. Wait for confirmation before making any moves.",
      "mentorAnalogy": "Think of this like a pilot checking for weather conditions before takeoff. You need to assess the environment before making your flight plan."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "concept",
    "title": "Practical Application of Crypto Weekly Cycle Analysis",
    "label": "Crypto Track",
    "body": "### Practical Application: Weekly Cycle Analysis in Crypto\nApplying the concepts of weekly cycles in cryptocurrency trading requires a structured approach to identify actionable setups. This card engages you in practical exercises to solidify your understanding.\n\n* **Identifying Key Levels**: Start by marking the previous week's high and low on your chart. This provides a framework for potential breakout or reversal points as the new week unfolds.\n* **Analyzing Volume Patterns**: Observe volume spikes during Monday's trading session. High volume accompanying a price move can validate the strength of a breakout or reversal.\n* **Session Timing**: Pay attention to the timing of your trades. The first few hours of the Monday session can set the tone for the week, making it essential to analyze price action during this period closely.",
    "context": {
      "keyTerms": [
        {
          "term": "Key Levels",
          "definition": "Significant price points from the previous week that traders monitor for breakout or reversal signals."
        },
        {
          "term": "Volume Patterns",
          "definition": "The analysis of trading volume to confirm price movements."
        }
      ],
      "whyThisMatters": "Practical application of these concepts enhances your ability to make informed trading decisions based on real-time data.",
      "realLifeExample": "On a Monday, Ethereum opened at $2,500, with a significant volume spike at 10 AM EST, confirming a breakout above the previous week's high of $2,600.",
      "commonMistake": "Failing to analyze volume can lead to misinterpretation of price movements, resulting in poor trade decisions.",
      "quickNote": "Utilize key levels and volume patterns to validate your trading decisions.",
      "mentorText": "Your focus should be on identifying key levels and volume during the early part of the week. This is where the strongest setups often emerge.",
      "mentorAnalogy": "Like a chef prepping ingredients before cooking, you must prepare your charts and data before executing trades."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "practice",
    "title": "Crypto Advanced Time & Price 7",
    "label": "Crypto Track",
    "body": "### Advanced Application: Weekly Cycles in Crypto Trading\nThis card focuses on the advanced application of weekly cycle concepts, emphasizing timing filters and session dynamics. Mastering these elements is crucial for effective trading strategies.\n\n* **Timing Filters**: Implement timing filters to refine your entry points. For instance, consider only taking trades that align with the first two hours of the Monday session, which often dictate the week's direction.\n* **Session Dynamics**: Analyze how different sessions (Asian, London, New York) interact with the weekly cycle. For example, if Bitcoin shows strength during the Asian session, it may indicate a bullish week ahead.\n* **Confirmation Signals**: Look for confirmation signals such as RSI divergence or MACD crossovers during key session openings to validate your trade entries.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Filters",
          "definition": "Criteria used to determine optimal entry points based on time."
        },
        {
          "term": "Session Dynamics",
          "definition": "The interaction of different trading sessions that can influence price movements."
        }
      ],
      "whyThisMatters": "Advanced timing and session analysis can significantly improve your entry and exit strategies, leading to better risk management.",
      "realLifeExample": "On a Monday, Bitcoin rallied during the Asian session, prompting a trader to enter a long position at $41,000, later confirming with an RSI divergence.",
      "commonMistake": "Ignoring session dynamics can lead to missed opportunities or entering trades against the prevailing trend.",
      "quickNote": "Utilize timing filters and session analysis for refined trading strategies.",
      "mentorText": "Be disciplined with your timing filters. They are your guide to entering trades at the most opportune moments.",
      "mentorAnalogy": "Like a surgeon timing each incision with precision, your entry points must be calculated and deliberate."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During which session should you primarily focus on entering trades based on the weekly cycle analysis?",
      "options": [
        {
          "id": "0",
          "text": "Only during the Asian session",
          "isCorrect": false,
          "feedback": "Focusing solely on one session may cause you to miss critical opportunities in others."
        },
        {
          "id": "1",
          "text": "The first two hours of the Monday session",
          "isCorrect": true,
          "feedback": "This period often sets the tone for the week, making it crucial for entry points."
        },
        {
          "id": "2",
          "text": "Any time during the week",
          "isCorrect": false,
          "feedback": "Trading at random times without a focus on session dynamics can lead to poor decision-making."
        },
        {
          "id": "3",
          "text": "Only during the New York session",
          "isCorrect": false,
          "feedback": "Limiting your focus to one session can overlook important signals from other sessions."
        }
      ]
    },
    "visualKey": "crypto-weekly-cycles"
  },
  {
    "type": "summary",
    "title": "Crypto Weekend CME Gap Reversal Summary",
    "label": "Crypto Track",
    "body": "### Summary of Advanced Weekly Cycles in Crypto\nThis card summarizes the advanced applications of weekly cycle concepts, emphasizing the importance of timing filters and session dynamics in trading strategies.\n\n* **Refined Entry Strategies**: Utilize timing filters to enhance your entry strategies, focusing on the early part of the week for optimal setups.\n* **Session Interaction**: Understand how different trading sessions impact price movements and can confirm or negate your trading hypotheses.\n* **Validation Techniques**: Employ technical indicators like MACD and RSI to validate your entry points, ensuring that trades align with the overall market sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Refined Entry Strategies",
          "definition": "Advanced methods for determining entry points based on specific criteria."
        },
        {
          "term": "Validation Techniques",
          "definition": "Methods used to confirm the strength of a trade setup."
        }
      ],
      "whyThisMatters": "Summarizing these advanced concepts equips traders with actionable insights to enhance their trading performance.",
      "realLifeExample": "A trader identifies a bullish trend in Ethereum during the London session, confirming with a MACD crossover, leading to a successful trade at $2,700.",
      "commonMistake": "Neglecting to validate trades with technical indicators can lead to entering positions based on false signals.",
      "quickNote": "Summarize and apply advanced concepts for improved trading outcomes.",
      "mentorText": "Always validate your trades with solid techniques. This is your safeguard against impulsive decisions.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, ensure your strategies are validated before execution."
    },
    "taskData": null,
    "visualKey": "crypto-weekly-cycles"
  }
];
