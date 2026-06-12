import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Breakouts vs Failed Breaks",
    "label": "Core Track",
    "body": "### Breakout Analysis: Distinguishing Valid Movements\nEvaluating the distinction between true breakouts and failed breaks is essential for effective market participation. This card focuses on **the significance of candle close quality in identifying valid market movements**.\n\n* **Candle Close Evaluation**: A breakout is only valid if the candle closes above the resistance level with a minimum of 1% distance from the boundary. A close within 0.5% indicates a potential failed break.\n* **Volume Confirmation**: Ensure that the breakout candle is accompanied by at least a 30% increase in volume compared to the previous three candles. This confirms institutional interest in the move.\n* **Time Frame Consistency**: Analyze the breakout on multiple time frames; a valid breakout on the daily chart must also reflect strength on the 4-hour chart to avoid false signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout",
          "definition": "A price movement that exceeds a defined resistance level."
        },
        {
          "term": "Failed Break",
          "definition": "A price movement that initially exceeds a resistance level but closes below it."
        }
      ],
      "whyThisMatters": "Accurate identification of breakouts versus failed breaks is critical for executing successful trades and managing risk effectively.",
      "realLifeExample": "On EURUSD, a breakout occurred at 1.1200 with a close at 1.1225 and 40% higher volume at 10:00 AM EST, confirming the move's validity.",
      "commonMistake": "Traders often mistake a price spike above resistance as a breakout without confirming the candle close quality.",
      "quickNote": "Evaluate candle closes and volume to differentiate between true breakouts and failed breaks.",
      "mentorText": "When assessing breakouts, focus on the candle's close. If it doesn't hold above resistance with sufficient volume, treat it with caution.",
      "mentorAnalogy": "Think of a breakout like a plane taking off; it must clear the runway (resistance) and gain altitude (volume) to ensure a successful flight."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-intro"
  },
  {
    "type": "concept",
    "title": "Evaluating Candle Close Quality",
    "label": "Core Track",
    "body": "### Candle Close Quality: Assessing Validity\nThe quality of candle closes is pivotal in determining the legitimacy of breakouts versus sweeps. This card details **how to assess candle closes in relation to horizontal boundaries**.\n\n* **Close Above Resistance**: For a breakout to be valid, the candle must close at least 1% above the resistance level. A close below this threshold indicates potential weakness.\n* **Wick Analysis**: Analyze the upper wick; a long wick on a breakout candle suggests rejection. Ideally, wicks should be minimal to confirm strength.\n* **Body Size**: A breakout candle should have a body size at least 50% of the total candle height. This indicates strong buying or selling pressure supporting the breakout.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Close",
          "definition": "The final price of an asset at the end of a specified time period."
        },
        {
          "term": "Wick",
          "definition": "The line extending from the body of a candle, indicating the high and low prices during the period."
        }
      ],
      "whyThisMatters": "Candle close quality directly influences the reliability of breakout strategies, impacting entry and exit decisions.",
      "realLifeExample": "On GBPJPY, a breakout candle closed at 150.50, 1.5% above resistance with minimal wicks, confirming a strong bullish sentiment at 2:00 PM EST.",
      "commonMistake": "Traders often overlook wick lengths, misjudging the strength of a breakout based on body size alone.",
      "quickNote": "A valid breakout candle must close significantly above resistance with minimal wicks.",
      "mentorText": "Always scrutinize the candle's close. A strong close above resistance with minimal wicks is your confirmation of a valid breakout.",
      "mentorAnalogy": "Evaluating candle closes is like assessing a car's speed before a race; it must be fast enough to clear the starting line and maintain momentum."
    },
    "taskData": null,
    "visualKey": "close-quality-validation"
  },
  {
    "type": "concept",
    "title": "Identifying Signs of Sweep Rejections",
    "label": "Core Track",
    "body": "### Sweep Rejection Indicators: Recognizing Failures\nIdentifying signs of sweep rejections is crucial for traders to avoid false breakouts. This card outlines **key indicators that suggest a price sweep is being rejected**.\n\n* **Rapid Price Retracement**: A price that quickly retraces back below the breakout level within the same session indicates rejection. Monitor for a retracement exceeding 50% of the breakout candle's body.\n* **Increased Selling Volume**: A spike in selling volume following a breakout can signal rejection. Look for a volume increase of at least 25% compared to the breakout candle's volume.\n* **Candle Formation**: A bearish engulfing candle following a breakout is a strong rejection signal. This formation indicates that sellers have regained control.",
    "context": {
      "keyTerms": [
        {
          "term": "Sweep Rejection",
          "definition": "A price movement that initially breaks through a level but fails to maintain above it."
        },
        {
          "term": "Bearish Engulfing",
          "definition": "A candle pattern where a larger bearish candle completely engulfs the preceding bullish candle."
        }
      ],
      "whyThisMatters": "Recognizing sweep rejections allows traders to adjust their strategies and manage risk effectively.",
      "realLifeExample": "At 3:30 PM EST, AUDUSD broke above 0.7400, but within minutes retraced to 0.7380 with a bearish engulfing candle, indicating a sweep rejection.",
      "commonMistake": "Traders often ignore volume spikes, leading to premature entries during potential sweep rejections.",
      "quickNote": "Watch for rapid retracements and increased selling volume to identify sweep rejections.",
      "mentorText": "If you see a rapid price drop after a breakout, don’t ignore it. Check for volume spikes and candle patterns to confirm rejection.",
      "mentorAnalogy": "Identifying sweep rejections is like a goalie in soccer; they must quickly react to a shot on goal to prevent a score."
    },
    "taskData": null,
    "visualKey": "sweep-rejection-signs"
  },
  {
    "type": "concept",
    "title": "Rules for Confirming Breakouts",
    "label": "Core Track",
    "body": "### Breakout Confirmation: Essential Rules\nEstablishing rules for confirming breakouts is vital for distinguishing valid market movements. This card explores **essential rules focusing on candle formations and volume analysis**.\n\n* **Multi-Candle Confirmation**: A valid breakout should be confirmed by at least two consecutive bullish candles following the breakout candle. This indicates sustained buying pressure.\n* **Volume Analysis**: Confirm that the breakout candle's volume is at least 30% higher than the average volume of the previous five candles. This validates institutional participation.\n* **Retest of Breakout Level**: After the initial breakout, a successful retest of the breakout level should hold. If the price returns to the breakout level and bounces back up, it confirms the breakout's strength.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Candle Confirmation",
          "definition": "The requirement for multiple consecutive candles to validate a breakout."
        },
        {
          "term": "Retest",
          "definition": "A price movement returning to a previous level after a breakout."
        }
      ],
      "whyThisMatters": "Establishing confirmation rules enhances the reliability of breakout strategies, reducing the risk of false entries.",
      "realLifeExample": "At 11:00 AM EST, USDCHF broke out above 0.9000, followed by two bullish candles and a volume increase of 35%, confirming the breakout's validity.",
      "commonMistake": "Traders often enter positions on the first breakout candle without waiting for confirmation, leading to potential losses.",
      "quickNote": "Use multi-candle confirmation and volume analysis to validate breakouts.",
      "mentorText": "Always wait for at least two bullish candles and check the volume before committing to a breakout trade. This is your safety net.",
      "mentorAnalogy": "Confirming breakouts is like a safety check before a flight; you must ensure all systems are go before taking off."
    },
    "taskData": null,
    "visualKey": "breakout-confirmation-rules"
  },
  {
    "type": "concept",
    "title": "Debriefing Failed Breaks",
    "label": "Core Track",
    "body": "### Breakout Analysis: Debriefing Failed Breaks\nAnalyzing failed breakouts is essential for refining entry strategies. This card focuses on **identifying common pitfalls in failed breakouts and how to mitigate them**.\n\n* **Volume Discrepancy**: A failed breakout often occurs when the breakout lacks sufficient volume. Ensure that the breakout candle closes with volume at least 30% above the average volume of the last 14 days to validate the move.\n* **Support/Resistance Interaction**: Failed breaks frequently happen near key support or resistance levels. Confirm that the breakout candle closes at least 10 pips above resistance or below support to avoid false signals.\n* **Market Context**: Analyze the broader market context; failed breakouts can correlate with high-impact news events. For instance, a breakout on GBPUSD during a scheduled Bank of England announcement may lead to erratic price action, increasing the likelihood of a failed break.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Discrepancy",
          "definition": "The difference between the breakout volume and the average volume of previous trading sessions."
        },
        {
          "term": "Support/Resistance Interaction",
          "definition": "The behavior of price action around established support and resistance levels."
        },
        {
          "term": "Market Context",
          "definition": "The overall market conditions and events that influence price movements."
        }
      ],
      "whyThisMatters": "Understanding failed breakouts allows traders to refine their strategies and avoid costly mistakes.",
      "realLifeExample": "On EURUSD, a breakout above 1.2000 at 10:00 AM EST lacked volume, closing at 1.1995 with only 50% of the average volume, resulting in a swift reversal.",
      "commonMistake": "Traders often enter positions on breakouts without confirming volume, leading to premature trades.",
      "quickNote": "Always assess volume and market context before entering on a breakout.",
      "mentorText": "When you see a breakout, look for the volume. If it’s not there, it’s like trying to take off in a plane without enough fuel. You’ll just crash.",
      "mentorAnalogy": "Think of a failed breakout like a plane attempting to take off without sufficient runway. Without enough momentum, it will stall and fall back."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-debrief"
  },
  {
    "type": "concept",
    "title": "Candle Close Analysis Techniques",
    "label": "Core Track",
    "body": "### Breakout Analysis: Candle Close Techniques\nCandle close analysis is critical for validating breakouts. This card explores **various techniques for interpreting candle closes and their implications for breakout success**.\n\n* **Close Above Resistance**: A breakout is only valid if the candle closes above the resistance level. Ensure the close is at least 5 pips above the resistance to confirm strength.\n* **Engulfing Patterns**: Look for engulfing candle patterns at breakout points. An engulfing bullish candle closing above resistance indicates strong buying pressure, whereas a bearish engulfing candle suggests rejection.\n* **Wick Analysis**: Analyze the wicks of breakout candles. A long wick on the breakout candle indicates rejection; thus, a close with a long wick should prompt caution in entering the trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Close Above Resistance",
          "definition": "The price action of a candle closing above a defined resistance level."
        },
        {
          "term": "Engulfing Patterns",
          "definition": "A candlestick pattern where one candle completely engulfs the previous candle, indicating a potential reversal."
        },
        {
          "term": "Wick Analysis",
          "definition": "The examination of the upper and lower shadows of a candle to assess market rejection or acceptance."
        }
      ],
      "whyThisMatters": "Effective candle close analysis enhances decision-making and reduces the likelihood of false breakouts.",
      "realLifeExample": "On AUDJPY, a candle closed at 85.50, 6 pips above resistance, forming a bullish engulfing pattern, confirming the breakout's validity.",
      "commonMistake": "Traders often overlook wick analysis, leading to entries based on false breakouts.",
      "quickNote": "Always analyze the candle close in relation to key levels for breakout validation.",
      "mentorText": "When assessing a breakout, focus on how the candle closes. A close above resistance with strong volume is your green light; anything else is a caution sign.",
      "mentorAnalogy": "Imagine a surgeon checking vital signs before proceeding with an operation. A candle close is your vital sign; it tells you if the breakout is healthy."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-intro"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Breakout Validity",
    "label": "Core Track",
    "body": "### Breakout Analysis: Market Sentiment\nMarket sentiment plays a pivotal role in breakout validity. This card examines **how to incorporate sentiment analysis into your trading strategy for better breakout assessment**.\n\n* **Sentiment Indicators**: Utilize sentiment indicators like the Commitment of Traders (COT) report to gauge market positioning. A high percentage of long positions in a breakout scenario may indicate overextension, suggesting caution.\n* **News Impact**: Major news releases can shift market sentiment rapidly. For example, if a breakout occurs just before a Non-Farm Payroll release, be wary of potential reversals due to sentiment shifts.\n* **Social Media Sentiment**: Monitor social media platforms for trader sentiment. A surge in bullish sentiment on platforms like Twitter during a breakout can validate the move, while excessive bearish sentiment may indicate a potential failure.",
    "context": {
      "keyTerms": [
        {
          "term": "Sentiment Indicators",
          "definition": "Tools used to measure the overall sentiment of market participants."
        },
        {
          "term": "News Impact",
          "definition": "The effect of economic news releases on market sentiment and price action."
        },
        {
          "term": "Social Media Sentiment",
          "definition": "The collective opinion of traders expressed on social media platforms."
        }
      ],
      "whyThisMatters": "Incorporating sentiment analysis allows traders to better assess the likelihood of breakout success or failure.",
      "realLifeExample": "During a breakout on SPX500, a surge in bullish sentiment was noted on social media, coinciding with a positive earnings report, reinforcing the breakout's validity.",
      "commonMistake": "Traders often ignore sentiment analysis, leading to misjudgments about breakout strength.",
      "quickNote": "Always assess market sentiment alongside technical indicators for breakout validation.",
      "mentorText": "Sentiment is like the wind; it can change direction quickly. Always check the sentiment before you commit to a breakout trade.",
      "mentorAnalogy": "Consider a weather forecast before a flight. Just as pilots check for wind conditions, you must assess market sentiment before executing trades."
    },
    "taskData": null,
    "visualKey": "close-quality-validation"
  },
  {
    "type": "concept",
    "title": "Timeframe Consistency in Breakout Analysis",
    "label": "Core Track",
    "body": "### Breakout Analysis: Timeframe Consistency\nMaintaining consistency across timeframes is crucial for accurate breakout evaluations. This card discusses **the importance of aligning multiple timeframes when analyzing breakouts**.\n\n* **Multi-Timeframe Confirmation**: Always check at least two higher timeframes for confirmation of the breakout. A breakout on a 15-minute chart should be validated by the 1-hour and 4-hour charts closing above the same resistance level.\n* **Timeframe Divergence**: Be cautious of divergences between timeframes. If the 1-hour chart shows a breakout while the 4-hour chart remains below resistance, this may indicate a false breakout.\n* **Trend Alignment**: Ensure that the breakout aligns with the prevailing trend across multiple timeframes. A breakout against the trend on higher timeframes is more likely to fail.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Confirmation",
          "definition": "The process of validating a breakout by checking multiple timeframes."
        },
        {
          "term": "Timeframe Divergence",
          "definition": "A situation where different timeframes show conflicting signals regarding a breakout."
        },
        {
          "term": "Trend Alignment",
          "definition": "The alignment of a breakout with the prevailing trend across various timeframes."
        }
      ],
      "whyThisMatters": "Timeframe consistency enhances the accuracy of breakout assessments, reducing the risk of false entries.",
      "realLifeExample": "A breakout on the 5-minute chart for USDJPY was confirmed by the 1-hour chart closing above 110.50, while the 4-hour chart also showed bullish momentum.",
      "commonMistake": "Traders often rely on a single timeframe, missing critical confirmations from higher timeframes.",
      "quickNote": "Always validate breakouts across multiple timeframes to ensure consistency.",
      "mentorText": "Think of it like checking multiple gauges in an aircraft. If one gauge shows a problem while others are fine, you need to investigate further before taking off.",
      "mentorAnalogy": "Just as a pilot checks various instruments before takeoff, you must analyze multiple timeframes to confirm breakout validity."
    },
    "taskData": null,
    "visualKey": "sweep-rejection-signs"
  },
  {
    "type": "concept",
    "title": "Risk Management for Breakouts",
    "label": "Core Track",
    "body": "### Breakout Strategy: Effective Risk Management Techniques\nRisk management is critical when trading breakouts to safeguard capital against adverse market movements. This card outlines **specific strategies to mitigate risk during breakout trades**.\n\n* **Position Sizing**: Calculate position sizes based on a maximum risk percentage of your trading capital, typically not exceeding 2%. For example, with a $10,000 account, your maximum risk per trade should be $200.\n* **Stop-Loss Placement**: Set stop-loss orders just below the breakout level to limit losses. If trading a breakout on the S&P 500 at 4,200, place the stop-loss at 4,180 to protect against a failed breakout.\n* **Risk-Reward Ratio**: Aim for a minimum risk-reward ratio of 1:2. If your entry point is 4,200 with a target of 4,260, ensure your stop-loss is no more than 4,180 to maintain this ratio.",
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
      "whyThisMatters": "Effective risk management strategies are essential to protect capital during volatile breakout scenarios, ensuring longevity in trading.",
      "realLifeExample": "During a breakout of the EURUSD at 1.2000, a trader sets a stop-loss at 1.1980, risking 20 pips on a position size calculated to risk only 2% of their capital.",
      "commonMistake": "Traders often neglect to adjust position sizes based on market volatility, leading to excessive risk exposure.",
      "quickNote": "Always calculate position sizes and set stop-losses to manage risk effectively during breakouts.",
      "mentorText": "When trading breakouts, I always emphasize the importance of knowing how much you can afford to lose before entering a trade. It’s not just about the potential gain; it’s about protecting your capital first.",
      "mentorAnalogy": "Think of trading breakouts like a pilot preparing for takeoff. Just as a pilot checks fuel levels and weather conditions, you must assess your risk and set safeguards before entering a trade."
    },
    "taskData": null,
    "visualKey": "breakout-confirmation-rules"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Breakout Trading",
    "label": "Core Track",
    "body": "### Breakout Trading: Managing Psychological Factors\nPsychological factors significantly influence decision-making during breakout trades. This card examines **how to manage emotions to enhance trading performance**.\n\n* **Fear of Missing Out (FOMO)**: Recognize the impulse to enter a trade impulsively when a breakout occurs. Establish a rule to wait for confirmation before entering, such as a close above the breakout level.\n* **Overtrading**: Avoid the tendency to enter multiple trades after a successful breakout. Stick to your trading plan and limit trades to those that meet your criteria, such as a clear breakout on the NASDAQ at 14,000.\n* **Loss Aversion**: Understand that the fear of losing can lead to premature exits. Set a predetermined exit strategy based on technical analysis rather than emotional reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear of Missing Out (FOMO)",
          "definition": "The anxiety that one might miss out on a profitable trade, leading to impulsive decisions."
        },
        {
          "term": "Overtrading",
          "definition": "Entering too many trades in a short period, often driven by emotional responses rather than strategy."
        },
        {
          "term": "Loss Aversion",
          "definition": "The tendency to prefer avoiding losses over acquiring equivalent gains."
        }
      ],
      "whyThisMatters": "Understanding psychological factors helps traders maintain discipline and adhere to their strategies during high-pressure breakout scenarios.",
      "realLifeExample": "After a breakout on GBPUSD at 1.3500, a trader feels compelled to enter immediately due to FOMO, disregarding their confirmation rule, leading to a loss when the price retraces.",
      "commonMistake": "Traders often let emotions dictate their entry and exit points, resulting in inconsistent trading outcomes.",
      "quickNote": "Maintain emotional discipline by adhering to your trading plan and avoiding impulsive decisions during breakouts.",
      "mentorText": "I’ve seen many traders get caught up in the excitement of a breakout and jump in without waiting for confirmation. Stick to your rules; the market will always be there tomorrow.",
      "mentorAnalogy": "Managing emotions in trading is like a surgeon maintaining focus during a critical operation. Precision and adherence to protocol are essential for successful outcomes."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-debrief"
  },
  {
    "type": "concept",
    "title": "Historical Patterns of Breakouts",
    "label": "Core Track",
    "body": "### Breakout Analysis: Historical Patterns\nAnalyzing historical patterns of breakouts can provide insights into future price movements. This card focuses on **identifying recurring themes in breakout behavior**.\n\n* **Volume Confirmation**: Successful breakouts often occur with increased volume. For instance, a breakout of the Dow Jones at 35,000 with a volume spike of 30% above the 10-day average indicates strong buying interest.\n* **Retest Patterns**: Many breakouts will retest the breakout level before continuing in the direction of the breakout. If the price breaks above $50 on a stock and then retraces to $50.50, this retest can confirm the breakout's validity.\n* **Time of Day Influence**: Breakouts occurring during high liquidity sessions, such as the London opening at 3:00 AM EST, tend to be more reliable than those during low-volume periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Confirmation",
          "definition": "The increase in trading volume accompanying a price movement, indicating strength."
        },
        {
          "term": "Retest Pattern",
          "definition": "A price movement that revisits a breakout level to confirm its validity before continuing."
        },
        {
          "term": "Liquidity Session",
          "definition": "Periods during which trading volume is significantly higher, often leading to more reliable price movements."
        }
      ],
      "whyThisMatters": "Recognizing historical patterns enables traders to make informed decisions based on past market behavior, enhancing predictive capabilities.",
      "realLifeExample": "A trader notes that the last five breakouts of the EURJPY at 130.00 were followed by a retest at 129.80, confirming the breakout before a rally to 132.00.",
      "commonMistake": "Traders often overlook the importance of volume and retest patterns, leading to false breakout entries.",
      "quickNote": "Study historical breakout patterns to identify reliable signals and improve your trading strategy.",
      "mentorText": "When I analyze breakouts, I always look back at how similar setups performed in the past. Patterns repeat, and understanding them can give you an edge.",
      "mentorAnalogy": "Think of historical breakout analysis like an architect studying past building designs. By understanding what worked and what didn’t, you can create more robust structures in your trading."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-intro"
  },
  {
    "type": "concept",
    "title": "Integrating Breakout Analysis into Trading Plans",
    "label": "Core Track",
    "body": "### Breakout Strategy: Integrating Analysis into Trading Plans\nIncorporating breakout analysis into your trading plan ensures a structured approach to market engagement. This card outlines **how to effectively integrate breakout strategies**.\n\n* **Define Entry Criteria**: Establish clear criteria for entering trades based on breakout signals, such as a close above resistance with a volume increase. For example, entering a trade on the Russell 2000 when it closes above 2,300 with a volume increase of 20%.\n* **Set Exit Strategies**: Determine exit strategies based on technical indicators, such as trailing stops or fixed profit targets. If entering at 2,310, set a target at 2,350 and a trailing stop at 2,300 to lock in profits.\n* **Review and Adjust**: Regularly review your trading plan to incorporate lessons learned from past breakout trades. Adjust entry and exit criteria based on market conditions and performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Entry Criteria",
          "definition": "Specific conditions that must be met to initiate a trade."
        },
        {
          "term": "Exit Strategies",
          "definition": "Predefined plans for closing a trade to secure profits or limit losses."
        },
        {
          "term": "Performance Metrics",
          "definition": "Data used to evaluate the effectiveness of trading strategies over time."
        }
      ],
      "whyThisMatters": "Integrating breakout analysis into your trading plan creates a disciplined framework that enhances decision-making and consistency.",
      "realLifeExample": "A trader sets an entry criterion for a breakout on Apple stock at $150, with a target of $155 and a trailing stop at $148, ensuring a structured approach to the trade.",
      "commonMistake": "Failing to document and adjust trading plans based on past performance can lead to repeated mistakes and missed opportunities.",
      "quickNote": "Establish clear entry and exit criteria in your trading plan to effectively manage breakout trades.",
      "mentorText": "Your trading plan should be a living document. After each trade, analyze what worked and what didn’t, and adjust your strategies accordingly.",
      "mentorAnalogy": "Creating a trading plan is like a flight plan for a pilot. Every detail matters, and adjustments must be made based on past flights to ensure a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "close-quality-validation"
  },
  {
    "type": "concept",
    "title": "Simulated Breakout Scenarios",
    "label": "Core Track",
    "body": "### Breakout Evaluation: Simulated Scenarios for Close Quality\nSimulated trading scenarios enhance your ability to discern valid breakouts from failed breaks based on close quality. This card focuses on **evaluating closing prices in various breakout scenarios**.\n\n* **Close Above Resistance**: A breakout is validated if the price closes above a resistance level with a minimum of 1% above the level, indicating strong buying pressure.\n* **Volume Confirmation**: Ensure that the breakout is accompanied by a volume increase of at least 30% above the 20-day average, confirming institutional interest.\n* **Rejection Signals**: Identify failed breaks by observing a close within 1% of the breakout level, especially if volume is below the average, indicating a lack of conviction.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Close Quality",
          "definition": "The assessment of a price's closing position relative to key support or resistance levels."
        },
        {
          "term": "Breakout",
          "definition": "A price movement that exceeds a defined resistance level."
        }
      ],
      "whyThisMatters": "Accurate evaluation of close quality is essential for distinguishing between genuine breakouts and false signals, which can lead to significant trading losses.",
      "realLifeExample": "On EURUSD, a simulated breakout above 1.2000 at 10:00 AM EST was followed by a close at 1.2025 with a volume spike, confirming the breakout. Conversely, a close at 1.1995 after a spike above 1.2000 indicated a failed breakout.",
      "commonMistake": "Traders often misinterpret a single candle's breakout without considering the closing price and volume context.",
      "quickNote": "Evaluate closing prices critically to confirm breakout validity.",
      "mentorText": "When assessing a breakout, always look at the close. If it’s not convincingly above resistance with strong volume, it’s likely a trap.",
      "mentorAnalogy": "Think of a pilot preparing for takeoff; they must ensure all systems are green before leaving the ground. Similarly, ensure all breakout conditions are met before entering a trade."
    },
    "taskData": null,
    "visualKey": "sweep-rejection-signs"
  },
  {
    "type": "practice",
    "title": "Breakout Confirmation Rules",
    "label": "Core Track",
    "body": "### Breakout Assessment: Key Confirmation Rules\nSummarizing the critical evaluation techniques for distinguishing breakouts from failed breaks, this card emphasizes the importance of close quality evaluation in trading decisions.\n\n* **Resistance Break Confirmation**: A breakout is confirmed when the price closes at least 1% above the resistance level, supported by a volume increase of 30% or more.\n* **Failed Break Identification**: A failed breakout occurs when the price closes within 1% of the breakout level with insufficient volume, suggesting a lack of follow-through.\n* **Contextual Analysis**: Always analyze the preceding price action; a strong bullish trend leading to a breakout increases the likelihood of success compared to a sideways market.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, indicating heightened interest in a security."
        },
        {
          "term": "Resistance Level",
          "definition": "A price point where selling interest is strong enough to prevent the price from rising further."
        }
      ],
      "whyThisMatters": "Understanding these confirmation rules is vital for making informed trading decisions and managing risk effectively.",
      "realLifeExample": "During a breakout of GBPUSD at 1.3500, the price closed at 1.3525 with a volume spike of 40% above average, confirming the breakout. A subsequent close at 1.3480 after a brief spike above indicated a failed breakout.",
      "commonMistake": "Failing to check volume alongside price action can lead to entering trades based on false breakouts.",
      "quickNote": "Always confirm breakouts with close quality and volume metrics.",
      "mentorText": "You must confirm a breakout with both price and volume. If either is lacking, reconsider your position.",
      "mentorAnalogy": "Like a surgeon ensuring all instruments are sterile and ready before an operation, confirm all breakout conditions before executing a trade."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a breakout in AUDJPY above 80.00, closing at 80.25 with a volume increase of 20%. What does this indicate?",
      "options": [
        {
          "id": "0",
          "text": "This is a confirmed breakout.",
          "isCorrect": false,
          "feedback": "The volume increase is below the required threshold, indicating insufficient confirmation."
        },
        {
          "id": "1",
          "text": "This is a failed breakout.",
          "isCorrect": false,
          "feedback": "The price closed above resistance, but the volume does not confirm the breakout."
        },
        {
          "id": "2",
          "text": "This is a valid breakout but requires further confirmation.",
          "isCorrect": true,
          "feedback": "The close above resistance is valid, but the volume increase must meet the threshold for full confirmation."
        },
        {
          "id": "3",
          "text": "This breakout is invalid regardless of the close.",
          "isCorrect": false,
          "feedback": "The close above resistance is valid; however, confirmation is needed based on volume."
        }
      ]
    },
    "visualKey": "breakout-confirmation-rules"
  },
  {
    "type": "summary",
    "title": "Advanced Application of Breakouts vs Failed Breaks",
    "label": "Core Track",
    "body": "### Advanced Breakout Analysis: Edge Cases and Nuances\nThis card delves into advanced applications of breakout concepts, focusing on edge cases and professional-level nuances in evaluating breakouts versus failed breaks.\n\n* **Contextual Market Conditions**: Analyze macroeconomic events that may influence breakout validity, such as major news releases or economic data that can skew market reactions.\n* **Timeframe Considerations**: Different timeframes yield varying breakout characteristics; a daily close may indicate stronger conviction than a 5-minute close.\n* **Psychological Levels**: Breakouts around psychological levels (e.g., round numbers) require heightened scrutiny, as traders may react more emotionally, leading to potential false breaks.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Psychological Level",
          "definition": "A price level that is significant to traders, often leading to increased buying or selling activity."
        },
        {
          "term": "Edge Case",
          "definition": "A situation that occurs outside of the normal operating parameters, requiring special consideration."
        }
      ],
      "whyThisMatters": "Understanding these advanced nuances allows traders to refine their strategies and improve their decision-making processes in complex market conditions.",
      "realLifeExample": "During the NFP release, USDJPY spiked above 110.00 but closed at 109.85 with low volume, indicating a failed breakout despite initial bullish momentum.",
      "commonMistake": "Overlooking macroeconomic factors that can invalidate a breakout assessment.",
      "quickNote": "Factor in market context and psychological levels when assessing breakouts.",
      "mentorText": "Always consider the broader market context. A breakout in a vacuum can lead to misinterpretation; assess the surrounding conditions.",
      "mentorAnalogy": "Like a weather forecaster analyzing multiple data points before predicting a storm, you must evaluate all market conditions before confirming a breakout."
    },
    "taskData": null,
    "visualKey": "breakouts-failed-debrief"
  }
];
