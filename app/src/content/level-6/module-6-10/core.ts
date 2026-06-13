import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding SMT Divergence Patterns",
    "label": "Core Track",
    "body": "### Core Concept: SMT Divergence Patterns\nSMT Divergence Patterns highlight discrepancies between correlated assets, serving as a critical indicator of market sentiment shifts. This card outlines **how to identify and interpret these divergence patterns effectively**.\n\n* **Identification of Divergence**: Divergence occurs when one asset moves in a direction contrary to its correlated counterpart, indicating potential market inefficiencies. For example, if the S&P 500 rises while the NASDAQ falls, it may signal a divergence worth investigating.\n* **Types of Divergence**: Recognize both regular and hidden divergences, where regular indicates potential reversals and hidden suggests continuation of the trend. An example includes a bullish divergence in the RSI of EURUSD while GBPUSD shows a bearish trend.\n* **Contextual Analysis**: Always consider the broader market context, including economic indicators and news events, that may influence the divergence. For instance, a divergence during a major economic announcement can provide stronger evidence of institutional sentiment shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "SMT Divergence",
          "definition": "A discrepancy between correlated assets indicating potential market shifts."
        }
      ],
      "whyThisMatters": "Identifying SMT Divergence Patterns allows traders to anticipate market movements based on institutional behavior rather than mere price action.",
      "realLifeExample": "On March 15, 2023, while WTI Crude Oil rose by 3%, Brent Crude exhibited a decline of 1%, indicating a divergence that suggested potential market instability.",
      "commonMistake": "Traders often overlook the significance of divergence when it occurs in low-volume conditions, leading to misinterpretation of the signals.",
      "quickNote": "Divergence patterns reveal institutional sentiment shifts between correlated assets.",
      "mentorText": "When you see one asset rising while its correlated counterpart drops, take a moment to assess the situation. This divergence could be a sign of institutional repositioning, and ignoring it could cost you.",
      "mentorAnalogy": "Think of SMT Divergence like a pilot noticing one engine performing differently than the other. It signals a potential issue that requires immediate attention to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Analyzing Correlated Asset Relationships",
    "label": "Core Track",
    "body": "### Core Analysis: Correlated Asset Relationships\nUnderstanding the relationships between correlated assets is essential for identifying divergence patterns that signal market shifts. This card focuses on **how to analyze these relationships effectively**.\n\n* **Correlation Metrics**: Utilize correlation coefficients to quantify the strength of relationships between assets. A coefficient close to +1 indicates strong positive correlation, while one near -1 suggests strong negative correlation. For instance, a 0.85 correlation between AUDUSD and NZDUSD indicates they typically move together.\n* **Identifying Divergence Signals**: Monitor for signs of divergence by comparing price movements and momentum indicators across correlated assets. For example, if USDJPY is trending upward while EURUSD shows a downward trend, this divergence may indicate a shift in market dynamics.\n* **Timeframe Considerations**: Analyze divergence across multiple timeframes to validate signals. A divergence on the daily chart may carry more weight than one on the hourly chart, especially during major economic releases.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Analyzing correlated asset relationships helps traders identify potential market shifts before they occur, enhancing decision-making.",
      "realLifeExample": "On April 10, 2023, while the correlation coefficient between GBPUSD and EURUSD was 0.90, a sudden drop in GBPUSD without a corresponding move in EURUSD indicated a divergence worth investigating.",
      "commonMistake": "Traders often misinterpret correlation as a guarantee of movement, failing to account for external factors that can disrupt relationships.",
      "quickNote": "Strong correlations can mask underlying divergences that signal market changes.",
      "mentorText": "When analyzing correlated assets, look for discrepancies in their movements. If one is moving contrary to the other, it’s a signal that something significant may be happening beneath the surface.",
      "mentorAnalogy": "Imagine a symphony where one instrument suddenly plays off-key. It disrupts the harmony and signals that something is wrong, just like a divergence in correlated assets."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Institutional Evidence in Divergence",
    "label": "Core Track",
    "body": "### Core Insight: Institutional Evidence in Divergence\nInstitutional trading behavior often reveals cracks in asset correlations, providing insights into market sentiment and potential reversals. This card examines **how to interpret institutional evidence in divergence patterns**.\n\n* **Volume Analysis**: Assess trading volumes during divergence events. Increased volume accompanying a divergence can signify institutional interest, suggesting a potential shift in market direction. For example, a divergence in the S&P 500 with a spike in volume may indicate institutional selling pressure.\n* **Order Flow Dynamics**: Monitor order flow for signs of institutional activity. A sudden increase in sell orders for a correlated asset can indicate a shift in sentiment, even if the price remains stable. For instance, if institutional sell orders flood into USDCHF while EURUSD remains flat, it may signal a divergence in sentiment.\n* **Market Sentiment Indicators**: Utilize sentiment indicators to gauge institutional positioning during divergence. A shift from bullish to bearish sentiment in a correlated asset can provide confirmation of a divergence signal, indicating potential reversals.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The net buying and selling activity in the market, often indicative of institutional behavior."
        }
      ],
      "whyThisMatters": "Recognizing institutional evidence during divergence patterns enhances a trader's ability to anticipate market reversals and align with institutional sentiment.",
      "realLifeExample": "On May 5, 2023, a divergence was noted between the DAX and FTSE 100, with the DAX experiencing a 2% drop on high volume while the FTSE remained stable, suggesting institutional selling in the DAX.",
      "commonMistake": "Traders often disregard volume and order flow data, focusing solely on price action, which can lead to missed opportunities.",
      "quickNote": "Institutional behavior during divergence can provide critical insights into market sentiment.",
      "mentorText": "When you see a divergence accompanied by unusual volume or order flow, pay close attention. It’s a signal that institutions are making moves that could impact the market significantly.",
      "mentorAnalogy": "Think of institutional evidence like a surgeon's scalpel—precise and revealing. Just as a surgeon identifies underlying issues through careful examination, you must analyze the market to uncover hidden divergences."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Methods for Detecting Divergence",
    "label": "Core Track",
    "body": "### Core Techniques: Methods for Detecting Divergence\nVarious methods exist for detecting SMT divergence, including technical indicators and price action analysis. This card outlines **effective techniques for identifying divergence patterns**.\n\n* **Technical Indicators**: Employ indicators like the Relative Strength Index (RSI) or Moving Average Convergence Divergence (MACD) to spot divergence. For example, if the RSI shows a lower high while the price makes a higher high, this indicates a bearish divergence.\n* **Price Action Analysis**: Analyze candlestick patterns and support/resistance levels to identify divergence. A price making new highs while the corresponding asset fails to do so can signal a potential reversal, such as a double top formation in correlated assets.\n* **Divergence Confirmation**: Always seek confirmation through additional indicators or price action. A divergence signal followed by a breakout from a key support level strengthens the case for a potential market shift.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action Analysis",
          "definition": "The study of historical price movements to inform trading decisions."
        }
      ],
      "whyThisMatters": "Utilizing multiple methods for detecting divergence enhances the accuracy of signals and improves trading outcomes.",
      "realLifeExample": "On June 20, 2023, a bearish divergence was identified in the GBPJPY using RSI, where the price made a higher high while the RSI formed a lower high, leading to a subsequent price drop of 150 pips.",
      "commonMistake": "Traders often rely on a single method for detecting divergence, which can lead to false signals and poor decision-making.",
      "quickNote": "Combining multiple methods for detecting divergence increases the reliability of your trading signals.",
      "mentorText": "When detecting divergence, don’t rely on just one tool. Use a combination of indicators and price action to confirm your findings and make informed decisions.",
      "mentorAnalogy": "Consider detecting divergence like a chef using multiple ingredients to create a complex dish. Each element adds depth and flavor, just as various methods enhance your analysis."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Setting Up Trades Based on Divergence",
    "label": "Core Track",
    "body": "### Core Scenario: Trade Setup from Divergence\nIdentifying SMT divergence patterns allows traders to pinpoint potential reversal points in correlated assets. This card outlines **how to effectively set up trades based on these divergences**.\n\n* **Entry Strategy**: Enter a trade when a divergence is confirmed between two correlated assets, such as EURUSD and GBPUSD, with a minimum divergence of 20 pips on the RSI indicator.\n* **Exit Strategy**: Set exit targets at previous support or resistance levels, ensuring to account for a minimum risk-reward ratio of 1:2 based on the divergence strength.\n* **Confirmation Signals**: Utilize additional indicators, such as MACD crossovers or volume spikes, to confirm the divergence before executing the trade.",
    "visualKey": "smt-divergence-charts",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Risk Management with Divergence Patterns",
    "label": "Core Track",
    "body": "### Core Scenario: Risk Management Framework\nEffective risk management is critical when trading based on SMT divergence patterns to protect capital and ensure longevity in the market. This card emphasizes **position sizing and stop-loss strategies**.\n\n* **Position Sizing**: Calculate position size based on the distance to the stop-loss level, ensuring that no more than 2% of the trading capital is at risk per trade. For example, if the stop-loss is set 30 pips away, adjust the lot size accordingly.\n* **Stop-Loss Placement**: Place stop-loss orders beyond the last swing high or low, ensuring they are not too tight to avoid premature exits. For instance, if trading USDJPY and the last swing high is at 110.50, set the stop-loss at 110.70.\n* **Risk-Reward Assessment**: Before entering a trade, assess the risk-reward ratio, aiming for at least 1:2 to justify the trade's risk.",
    "visualKey": "smt-divergence-charts",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Advanced Trading Strategies Using SMT",
    "label": "Core Track",
    "body": "### Core Scenario: Maximizing Profit with SMT Divergence\nAdvanced trading strategies that leverage SMT divergence patterns can significantly enhance profit potential while minimizing risk exposure. This card explores **strategies that utilize these patterns**.\n\n* **Multi-Timeframe Analysis**: Confirm divergence across multiple timeframes, such as identifying a bullish divergence on the 4-hour chart while confirming on the daily chart for stronger conviction.\n* **Combining Divergence with Trend Analysis**: Trade in the direction of the prevailing trend when divergence occurs, such as entering long positions on AUDCAD when both the daily trend is bullish and a divergence is spotted on the hourly chart.\n* **Utilizing Options for Hedging**: Consider using options strategies, such as buying puts or calls, to hedge against potential losses when trading divergence, allowing for a controlled risk environment.",
    "visualKey": "smt-divergence-charts",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Divergence Trading",
    "label": "Core Track",
    "body": "### Core Scenario: Avoiding Divergence Trading Traps\nTraders often encounter pitfalls when interpreting SMT divergence patterns, which can lead to suboptimal trading decisions. This card identifies **common mistakes and how to avoid them**.\n\n* **Ignoring Context**: Failing to consider the broader market context can lead to misinterpretation of divergence signals. For instance, trading a bullish divergence on GBPUSD during a strong bearish trend can result in significant losses.\n* **Overtrading on Divergence Signals**: Entering trades too frequently based on minor divergences without confirming strength can dilute overall performance. Limit trades to only high-probability setups with clear divergence signals.\n* **Neglecting Confirmation Indicators**: Relying solely on divergence without additional confirmation can lead to false signals. Always incorporate tools like Fibonacci retracement levels or moving averages to validate divergence before executing trades.",
    "visualKey": "smt-divergence-charts",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Synthesizing Divergence Insights",
    "label": "Core Track",
    "body": "### Core Insight: Integrating Divergence with Market Indicators\nSynthesizing insights from SMT divergence patterns with other market indicators enhances decision-making precision. This card outlines **how to create a cohesive trading strategy** using multiple data points.\n\n* **Divergence Confirmation**: Use additional indicators such as RSI or MACD to confirm divergence signals. For instance, if EURUSD shows a bullish divergence while RSI remains above 30, consider this a stronger buy signal.\n* **Volume Analysis**: Assess volume trends alongside divergence patterns. A divergence in GBPJPY with increasing volume during a reversal can indicate institutional interest, enhancing trade confidence.\n* **Timeframe Alignment**: Ensure that divergence signals align across multiple timeframes. A daily bullish divergence in AUDCAD supported by a 4-hour trend can provide a robust entry point for longer-term trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Divergence Confirmation",
          "definition": "Using additional indicators to validate divergence signals."
        },
        {
          "term": "Volume Analysis",
          "definition": "Examining volume trends to gauge market interest."
        },
        {
          "term": "Timeframe Alignment",
          "definition": "Ensuring divergence signals are consistent across different timeframes."
        }
      ],
      "whyThisMatters": "Integrating SMT divergence with other indicators provides a multi-faceted view, reducing reliance on singular signals and enhancing trade accuracy.",
      "realLifeExample": "On March 15, 2023, AUDUSD displayed a bullish divergence on the 1-hour chart while RSI confirmed above 40, leading to a successful trade that gained 1.2% over the next 48 hours.",
      "commonMistake": "Traders often rely solely on divergence without confirming with other indicators, leading to potential false signals.",
      "quickNote": "Combine SMT divergence with other indicators for a robust trading strategy.",
      "mentorText": "When I analyze divergence, I always look for confirmation from other indicators. If I see a bullish divergence on EURUSD, I check the RSI and volume to ensure I'm not missing any critical signals.",
      "mentorAnalogy": "Think of trading like assembling a complex machine; each component must work in harmony. Just as an engineer checks multiple systems before finalizing a design, you must validate divergence with other market indicators."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Case Studies on Successful Divergence Trades",
    "label": "Core Track",
    "body": "### Core Analysis: Learning from Successful Trades\nAnalyzing real-world case studies of SMT divergence trades reveals practical applications and outcomes. This card focuses on **extracting lessons from historical trades** to refine future strategies.\n\n* **Case Study 1 - USDJPY**: On February 10, 2023, USDJPY exhibited a bearish divergence on the 4-hour chart, leading to a 150 pip drop over the next week. The divergence was confirmed by a drop in volume, indicating weakening bullish momentum.\n* **Case Study 2 - NZDCAD**: On April 5, 2023, NZDCAD showed a strong bullish divergence with a 200 pip rally following confirmation from a MACD crossover. This case illustrates the importance of timing and confirmation in executing trades.\n* **Case Study 3 - GBPUSD**: On January 20, 2023, GBPUSD displayed a divergence pattern that preceded a significant market reversal. Analyzing the news context during this period helped identify external factors influencing the divergence.",
    "context": {
      "keyTerms": [
        {
          "term": "Bearish Divergence",
          "definition": "A pattern indicating potential price decline when price makes higher highs but indicators make lower highs."
        },
        {
          "term": "Bullish Divergence",
          "definition": "A pattern indicating potential price increase when price makes lower lows but indicators make higher lows."
        },
        {
          "term": "Volume Drop",
          "definition": "A decrease in trading volume that can signal weakening trends."
        }
      ],
      "whyThisMatters": "Studying successful divergence trades equips traders with insights into practical execution and reinforces the importance of contextual analysis.",
      "realLifeExample": "On February 10, 2023, USDJPY's bearish divergence led to a 150 pip decline, showcasing the effectiveness of divergence analysis when combined with volume trends.",
      "commonMistake": "Traders often overlook the context surrounding divergence patterns, missing critical news or events that can affect outcomes.",
      "quickNote": "Analyze historical divergence trades to enhance your strategy and execution.",
      "mentorText": "When I look at past trades, I focus on what worked and what didn't. The USDJPY case taught me that confirming divergence with volume can significantly impact the outcome of a trade.",
      "mentorAnalogy": "Like a detective piecing together clues from a crime scene, analyzing past trades helps you understand the factors that led to success or failure, allowing you to refine your approach."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Divergence Trading",
    "label": "Core Track",
    "body": "### Core Focus: Managing Psychological Factors\nUnderstanding the psychological factors influencing trading decisions is crucial when utilizing SMT divergence patterns. This card discusses **how to maintain discipline and emotional control** during trading.\n\n* **Fear of Missing Out (FOMO)**: Recognize the urge to enter trades impulsively when observing divergence. For example, seeing a bullish divergence in EURCAD may tempt you to enter prematurely without proper confirmation.\n* **Confirmation Bias**: Be aware of the tendency to favor information that supports your existing beliefs about a trade. A trader might ignore bearish signals in a divergence scenario with GBPJPY because they are overly focused on potential gains.\n* **Discipline in Execution**: Establish a strict trading plan that outlines entry and exit criteria based on divergence patterns. Adhering to this plan, even during volatile market conditions, is essential for maintaining long-term profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear of Missing Out (FOMO)",
          "definition": "The anxiety of missing potential profits, leading to impulsive trading decisions."
        },
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to favor information that confirms existing beliefs."
        },
        {
          "term": "Discipline in Execution",
          "definition": "Adhering to a predefined trading plan without emotional interference."
        }
      ],
      "whyThisMatters": "Recognizing and managing psychological factors is vital for executing trades based on SMT divergence patterns without emotional distortion.",
      "realLifeExample": "During a bullish divergence in AUDNZD on March 12, 2023, a trader entered without waiting for confirmation, resulting in a 1.5% loss as the market reversed unexpectedly.",
      "commonMistake": "Traders often act on emotional impulses rather than following their trading plans, leading to inconsistent results.",
      "quickNote": "Maintain discipline and emotional control when trading divergence patterns.",
      "mentorText": "I've seen many traders lose money because they let emotions dictate their decisions. Stick to your plan, especially when you see divergence; don't let FOMO push you into a bad trade.",
      "mentorAnalogy": "Think of trading like a surgical procedure; precision and discipline are paramount. Just as a surgeon follows a strict protocol to avoid errors, you must adhere to your trading plan to ensure successful outcomes."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Market Conditions Affecting Divergence",
    "label": "Core Track",
    "body": "### Core Insight: Adapting to Market Conditions\nDifferent market conditions can significantly impact the reliability of SMT divergence patterns. This card outlines **how to adapt trading strategies based on prevailing market environments**.\n\n* **Trending vs. Ranging Markets**: In a trending market, divergence can signal potential reversals, while in a ranging market, it may indicate continuation. For example, a bearish divergence in a strong uptrend for GBPUSD may suggest an impending correction.\n* **Volatility Assessment**: High volatility can distort divergence signals. During the NFP release on March 10, 2023, USDCHF showed a divergence pattern, but the subsequent volatility led to false breakouts, highlighting the need for caution.\n* **Economic News Impact**: Major economic announcements can invalidate divergence signals. A bullish divergence in AUDCAD prior to an RBA interest rate decision may be less reliable as market sentiment shifts rapidly.",
    "context": {
      "keyTerms": [
        {
          "term": "Trending Market",
          "definition": "A market characterized by a consistent upward or downward price movement."
        },
        {
          "term": "Ranging Market",
          "definition": "A market where prices move within a defined range without a clear trend."
        },
        {
          "term": "Volatility Assessment",
          "definition": "Evaluating market volatility to gauge the reliability of trading signals."
        }
      ],
      "whyThisMatters": "Understanding how market conditions affect divergence patterns allows traders to adjust their strategies for improved accuracy and risk management.",
      "realLifeExample": "On March 10, 2023, during the NFP release, USDCHF exhibited a divergence pattern but resulted in a false breakout due to heightened volatility, emphasizing the need for careful analysis.",
      "commonMistake": "Traders often ignore the broader market context, leading to reliance on divergence patterns that may not hold true under certain conditions.",
      "quickNote": "Adapt your divergence strategies based on current market conditions for better outcomes.",
      "mentorText": "I always assess the market environment before acting on divergence signals. If the market is volatile, I tread carefully; a divergence in such conditions can lead to unexpected outcomes.",
      "mentorAnalogy": "Like a pilot adjusting flight plans based on weather conditions, you must adapt your trading strategies to the current market environment to ensure a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "concept",
    "title": "Practical Application of SMT Divergence",
    "label": "Core Track",
    "body": "### Core Scenario: Engaging with SMT Divergence\nSMT divergence provides critical insights into market behavior, allowing traders to identify discrepancies between correlated assets. This card focuses on **applying SMT divergence patterns in real-time scenarios**.\n\n* **Identifying Divergence**: Monitor two correlated assets, such as EURUSD and GBPUSD, for divergence in their price movements. For instance, if EURUSD is making higher highs while GBPUSD is making lower highs, this signals potential weakness in the EURUSD trend.\n* **Execution Strategy**: Upon confirming divergence, set a limit order to enter a position in the weaker asset (e.g., shorting EURUSD) with a defined risk level based on the last swing high. This approach capitalizes on the expected correction.\n* **Confirmation Tools**: Utilize additional indicators, such as RSI or MACD, to confirm divergence signals. For example, if the RSI shows overbought conditions while price diverges, this reinforces the validity of the trade setup.",
    "context": {
      "keyTerms": [
        {
          "term": "SMT Divergence",
          "definition": "A discrepancy in price movement between correlated assets indicating potential market reversals."
        }
      ],
      "whyThisMatters": "Identifying SMT divergence allows for strategic entries and exits based on market inefficiencies, enhancing overall trading performance.",
      "realLifeExample": "On March 15, 2023, EURUSD reached 1.1050 while GBPUSD peaked at 1.2500, but GBPUSD showed a lower high at 1.2450, indicating a divergence that prompted a short position on EURUSD.",
      "commonMistake": "Traders often overlook confirmation from additional indicators, leading to premature entries based solely on price action.",
      "quickNote": "Monitor correlated assets for divergence to identify potential market reversals.",
      "mentorText": "When you spot divergence, treat it as a red flag. It’s your cue to analyze further and consider your entry strategy based on the weaker asset's behavior.",
      "mentorAnalogy": "Think of SMT divergence like an aircraft experiencing turbulence; while one wing may rise, the other dips, indicating a need for corrective action before the flight stabilizes."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "practice",
    "title": "Summary of SMT Divergence Patterns",
    "label": "Core Track",
    "body": "### Core Scenario: Consolidating SMT Divergence Knowledge\nSummarizing SMT divergence patterns reinforces the key strategies and applications learned throughout the module. This card emphasizes **integrating SMT divergence into your trading framework**.\n\n* **Key Divergence Types**: Recognize both regular and hidden divergence. Regular divergence signals potential reversals, while hidden divergence indicates trend continuation. For example, if AUDJPY shows a higher low while price makes a lower low, this is regular divergence.\n* **Trade Execution**: Establish clear entry and exit points based on divergence signals. For instance, if you identify a hidden divergence in USDCHF, plan to enter long at the next support level with a stop loss below the recent low.\n* **Risk Management**: Always incorporate risk management strategies when trading based on SMT divergence. Define your risk-reward ratio before entering a trade, ensuring it aligns with your overall trading plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Regular Divergence",
          "definition": "A divergence pattern indicating a potential reversal in market direction."
        },
        {
          "term": "Hidden Divergence",
          "definition": "A divergence pattern suggesting a continuation of the current trend."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of SMT divergence patterns enhances decision-making and trade execution, leading to improved trading outcomes.",
      "realLifeExample": "On April 10, 2023, USDJPY exhibited regular divergence with price making lower lows while the RSI formed higher lows, prompting a long position entry at 132.00.",
      "commonMistake": "Failing to differentiate between regular and hidden divergence can lead to incorrect trade assumptions and losses.",
      "quickNote": "Consolidate your SMT divergence knowledge to enhance trade execution and risk management.",
      "mentorText": "Review your divergence patterns regularly. They are your roadmap to understanding market sentiment and timing your trades effectively.",
      "mentorAnalogy": "Consider SMT divergence as a diagnostic tool in medicine; it highlights discrepancies in symptoms that require further investigation before treatment."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe that AUDCAD is making higher highs while the RSI is making lower highs. What type of divergence is this?",
      "options": [
        {
          "id": "0",
          "text": "Regular Divergence",
          "isCorrect": true,
          "feedback": "Correct. This indicates a potential reversal in AUDCAD."
        },
        {
          "id": "1",
          "text": "Hidden Divergence",
          "isCorrect": false,
          "feedback": "Incorrect. This is not a continuation signal but a reversal signal."
        },
        {
          "id": "2",
          "text": "No Divergence",
          "isCorrect": false,
          "feedback": "Incorrect. There is a clear divergence present."
        },
        {
          "id": "3",
          "text": "Converging Divergence",
          "isCorrect": false,
          "feedback": "Incorrect. This term is not applicable in this context."
        }
      ]
    },
    "visualKey": "smt-divergence-charts"
  },
  {
    "type": "summary",
    "title": "Multi-Asset Correlation: Advanced Exposure Controls",
    "label": "Core Track",
    "body": "### Core Scenario: Multi-Asset Correlation Exposure Controls with SMT Divergence\nApplying SMT divergence patterns requires robust risk management strategies to protect capital while maximizing potential gains. This card focuses on **integrating risk metrics with SMT divergence analysis**.\n\n* **Capital Defense Strategies**: Establish a maximum risk threshold per trade, typically not exceeding 1-2% of total capital. For example, if your account balance is $10,000, set a maximum risk of $100 per trade based on SMT divergence signals.\n* **Position Sizing**: Calculate position size based on the distance to your stop loss and your risk threshold. If entering a trade with a 50-pip stop loss, you would risk $2 per pip to stay within your $100 risk limit.\n* **Dynamic Risk Adjustments**: Continuously evaluate your risk as market conditions change. If a divergence signal strengthens, consider adjusting your stop loss to breakeven or trailing it to lock in profits while managing risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Defense",
          "definition": "Strategies implemented to protect trading capital from significant losses."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the appropriate amount of capital to allocate to a trade based on risk."
        }
      ],
      "whyThisMatters": "Advanced risk management ensures that traders can capitalize on SMT divergence opportunities while safeguarding their capital against adverse movements.",
      "realLifeExample": "On May 5, 2023, after identifying a divergence in NZDUSD, a trader with a $20,000 account set a risk limit of $200, calculating a position size of 4 lots with a 50-pip stop loss.",
      "commonMistake": "Traders often neglect to adjust their risk management strategies when market conditions change, leading to unplanned losses.",
      "quickNote": "Integrate advanced risk management with SMT divergence analysis to protect capital and optimize trades.",
      "mentorText": "Always remember, risk management is your safety net. It allows you to trade confidently, knowing that your capital is protected even when trades don’t go as planned.",
      "mentorAnalogy": "Think of risk management as the safety harness in rock climbing; it provides security as you navigate the heights of market volatility."
    },
    "taskData": null,
    "visualKey": "smt-divergence-charts"
  }
];
