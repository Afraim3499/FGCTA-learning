import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding HTF Range Extremes",
    "label": "Core Track",
    "body": "### HTF Range Analysis: Identifying Extremes\nIdentifying the highest and lowest points of the Higher Timeframe (HTF) range is critical for establishing effective trading boundaries. This card teaches **how to accurately pinpoint these extremes**.\n\n* **Swing Highs and Lows**: Use a minimum of three consecutive price bars to define swing highs and lows on the HTF chart. For example, a swing high is confirmed when the current bar closes above the previous two bars' highs.\n* **Timeframe Selection**: Select HTF charts that align with your trading strategy; for day trading, use 4-hour or daily charts. Ensure that the extremes are based on at least 14 days of historical data for reliability.\n* **Volume Confirmation**: Validate extremes with volume spikes; a swing high should ideally coincide with increased volume, indicating strong market participation at that level.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A price point where the market has reached a peak before reversing."
        },
        {
          "term": "Swing Low",
          "definition": "A price point where the market has reached a trough before reversing."
        }
      ],
      "whyThisMatters": "Accurate identification of HTF range extremes is essential for setting boundaries that inform risk management and trade execution.",
      "realLifeExample": "On the daily chart of GBPUSD, the highest point of the last 14 days was 1.4000, while the lowest was 1.3600, establishing a clear HTF range.",
      "commonMistake": "Traders often misidentify extremes by relying on short-term fluctuations rather than confirming with multiple bars.",
      "quickNote": "Establish HTF extremes using confirmed swing highs and lows over a minimum of 14 days.",
      "mentorText": "When I assess the HTF, I look for clear swing highs and lows. If I see three bars confirming a high, I mark that as my resistance level.",
      "mentorAnalogy": "Think of identifying HTF extremes like surveying a mountain range; you need to find the highest peaks and lowest valleys to map your route effectively."
    },
    "taskData": null,
    "visualKey": "external-boundary-intro"
  },
  {
    "type": "concept",
    "title": "Mapping HTF Range Extremes",
    "label": "Core Track",
    "body": "### HTF Range Mapping: Techniques for Accuracy\nMapping HTF range extremes involves analyzing historical price data to visualize potential price movements. This card teaches **the techniques for effective mapping**.\n\n* **Historical Data Analysis**: Utilize at least 30 days of historical price data to identify consistent highs and lows. Chart these points on a weekly or daily basis to visualize the range.\n* **Fibonacci Retracement**: Apply Fibonacci retracement levels to the identified extremes to project potential reversal zones. For instance, if the range is from 1.3500 to 1.4000, the 61.8% retracement level at 1.3750 can indicate a potential support area.\n* **Chart Patterns**: Look for chart patterns such as double tops or bottoms within the HTF range. These patterns can reinforce the significance of the identified extremes and provide additional context for trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Fibonacci Retracement",
          "definition": "A technical analysis tool that uses horizontal lines to indicate areas of support or resistance at the key Fibonacci levels."
        },
        {
          "term": "Chart Patterns",
          "definition": "Recurring formations in price charts that can indicate future price movements."
        }
      ],
      "whyThisMatters": "Accurate mapping of HTF range extremes allows traders to visualize potential price movements, enhancing decision-making and trade planning.",
      "realLifeExample": "On the EURUSD chart, mapping the range from 1.1800 to 1.2000 revealed a significant Fibonacci level at 1.1900, which acted as resistance during the next trading session.",
      "commonMistake": "Traders often overlook historical data, focusing only on recent price action, which can lead to inaccurate mapping of extremes.",
      "quickNote": "Use a minimum of 30 days of historical data to accurately map HTF range extremes.",
      "mentorText": "When mapping extremes, I always pull back at least 30 days to ensure I capture the full range. This gives me a clearer picture of where price is likely to move.",
      "mentorAnalogy": "Mapping HTF extremes is like creating a topographic map; you need to chart the highs and lows to navigate the terrain effectively."
    },
    "taskData": null,
    "visualKey": "htf-range-extremes"
  },
  {
    "type": "concept",
    "title": "Evaluating Boundary Acceptance",
    "label": "Core Track",
    "body": "### Boundary Acceptance: Recognizing Price Action\nRecognizing when price action accepts boundaries is crucial for leveraging potential entry points. This card teaches **how to evaluate boundary acceptance**.\n\n* **Close Proximity Analysis**: Monitor price action within 10 pips of established boundaries. A close approach followed by a strong close above or below indicates acceptance of the boundary.\n* **Volume Confirmation**: Look for volume spikes as price approaches the boundary. Increased volume at the boundary can signify acceptance and potential continuation of the trend.\n* **Candlestick Patterns**: Identify candlestick patterns such as engulfing or pin bars at the boundary. These patterns can indicate a strong acceptance of the boundary and provide potential entry signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Engulfing Pattern",
          "definition": "A candlestick pattern where a larger candle completely engulfs the previous candle, indicating a potential reversal."
        },
        {
          "term": "Pin Bar",
          "definition": "A candlestick with a long wick and a small body, signaling potential price rejection."
        }
      ],
      "whyThisMatters": "Understanding boundary acceptance helps traders identify optimal entry points, improving the probability of successful trades.",
      "realLifeExample": "During the US session, USDJPY approached the 110.00 boundary with a volume spike and closed above it, indicating acceptance and leading to a 50-pip upward move.",
      "commonMistake": "Traders often misinterpret boundary approaches as rejection rather than acceptance, leading to missed opportunities.",
      "quickNote": "Evaluate boundary acceptance by analyzing price proximity, volume, and candlestick patterns.",
      "mentorText": "When I see price hovering near a boundary, I pay close attention to volume. If it spikes and the close is strong, I consider that a signal to enter.",
      "mentorAnalogy": "Evaluating boundary acceptance is like a pilot assessing runway conditions; you need to ensure the approach is stable before committing to landing."
    },
    "taskData": null,
    "visualKey": "boundary-acceptance"
  },
  {
    "type": "concept",
    "title": "Identifying Boundary Rejection",
    "label": "Core Track",
    "body": "### Boundary Rejection: Interpreting Price Behavior\nUnderstanding the signs of boundary rejection is essential for adjusting trading strategies. This card teaches **how to identify and interpret boundary rejection**.\n\n* **Price Action Reversal**: Watch for significant price reversals at established boundaries. A rejection is often indicated by a strong move away from the boundary, typically exceeding 20 pips.\n* **Volume Divergence**: Analyze volume trends; a decrease in volume during boundary testing followed by a price reversal can indicate rejection. This suggests a lack of commitment from buyers or sellers.\n* **Candlestick Rejections**: Look for specific candlestick formations such as shooting stars or dojis at the boundary. These formations can signal rejection and prompt a reassessment of trading positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Shooting Star",
          "definition": "A bearish candlestick pattern that occurs after an uptrend, indicating potential price reversal."
        },
        {
          "term": "Doji",
          "definition": "A candlestick pattern that indicates indecision in the market, often signaling potential reversal."
        }
      ],
      "whyThisMatters": "Identifying boundary rejection allows traders to adjust their strategies proactively, minimizing losses and maximizing gains.",
      "realLifeExample": "On the AUDCAD chart, price approached the 0.9500 boundary, formed a shooting star, and reversed sharply, dropping 30 pips within the next hour.",
      "commonMistake": "Traders frequently misinterpret minor price fluctuations as rejection, failing to recognize the significance of strong reversals.",
      "quickNote": "Identify boundary rejection through price action reversals, volume divergence, and specific candlestick formations.",
      "mentorText": "When I see a strong reversal at a boundary, I know to reassess my positions. A shooting star or doji tells me that the market is rejecting that level.",
      "mentorAnalogy": "Identifying boundary rejection is like a surgeon observing a patient's vital signs; a sudden change indicates a need for immediate action."
    },
    "taskData": null,
    "visualKey": "boundary-rejection"
  },
  {
    "type": "concept",
    "title": "Maintaining Discipline at Range Limits",
    "label": "Core Track",
    "body": "### External Range Boundary: Maintaining Discipline at Range Limits\nDiscipline is critical when trading near high-timeframe (HTF) range limits. This card emphasizes **how to adhere to trading plans and avoid emotional responses**.\n\n* **Predefined Entry and Exit Points**: Establish entry and exit levels before approaching range limits to mitigate impulsive decisions. For example, if EURUSD approaches 1.1000, set a limit order to sell at 1.0995 and a stop-loss at 1.1010.\n* **Emotional Detachment**: Utilize a checklist to assess market conditions rather than relying on gut feelings. If price action shows a rejection at 1.1000, stick to your plan rather than second-guessing.\n* **Trade Size Management**: Adjust position sizes based on proximity to range limits. For instance, reduce exposure by 50% when trading within 20 pips of the upper boundary to limit risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "HTF Range Limits",
          "definition": "The highest and lowest points identified on a high-timeframe chart that define a trading range."
        }
      ],
      "whyThisMatters": "Maintaining discipline at range limits prevents costly emotional trades that deviate from established strategies.",
      "realLifeExample": "On March 15, 2023, GBPUSD approached the 1.3000 resistance level. A disciplined trader adhered to their plan, selling at 1.2995 and avoiding the emotional urge to chase price action.",
      "commonMistake": "Traders often abandon their plans and enter trades based on fear of missing out when price nears range limits.",
      "quickNote": "Discipline at range limits is essential for consistent trading success.",
      "mentorText": "Stick to your plan. When you approach a range limit, remember that your strategy is based on data, not emotion. Execute your plan without hesitation.",
      "mentorAnalogy": "Think of a surgeon following a strict checklist during an operation. Deviating from the plan can lead to critical errors; similarly, straying from your trading plan can result in significant losses."
    },
    "taskData": null,
    "visualKey": "external-boundary-debrief"
  },
  {
    "type": "concept",
    "title": "Strategies for Trading HTF Boundaries",
    "label": "Core Track",
    "body": "### External Range Boundary: Strategies for Trading HTF Boundaries\nEffective strategies are essential when trading near HTF boundaries. This card explores **specific approaches to optimize risk management and timing**.\n\n* **Breakout Strategy**: When price breaches a boundary, confirm with volume spikes. For instance, if USDJPY breaks 135.00 with a 100% increase in volume, consider entering a long position with a tight stop-loss.\n* **Reversal Strategy**: Identify reversal patterns at range limits, such as double tops or bottoms. If AUDCAD forms a double top at 0.9500, execute a short position with a stop-loss above the high.\n* **Range Trading**: Utilize oscillators like RSI to identify overbought or oversold conditions near boundaries. If the RSI exceeds 70 near 1.2000 in EURCAD, prepare to sell as the price approaches the upper limit.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Strategy",
          "definition": "A trading approach that involves entering a position when the price breaks through a defined level."
        },
        {
          "term": "Reversal Pattern",
          "definition": "Chart formations that signal a potential change in the direction of price movement."
        }
      ],
      "whyThisMatters": "Employing structured strategies enhances decision-making and risk management when trading near critical HTF boundaries.",
      "realLifeExample": "On April 10, 2023, EURUSD broke the 1.1500 level with a significant volume increase. A trader executed a long position, capturing a 50-pip gain before price retraced.",
      "commonMistake": "Failing to confirm breakouts with volume can lead to false signals and unnecessary losses.",
      "quickNote": "Strategic execution near HTF boundaries can maximize profit potential.",
      "mentorText": "When trading boundaries, have a clear strategy. Whether you're looking for breakouts or reversals, always confirm your signals with supporting data.",
      "mentorAnalogy": "Like a pilot adjusting flight paths based on weather conditions, you must adapt your trading strategies based on market signals at HTF boundaries."
    },
    "taskData": null,
    "visualKey": "external-boundary-intro"
  },
  {
    "type": "concept",
    "title": "Confirming Boundary Validity",
    "label": "Core Track",
    "body": "### External Range Boundary: Confirming Boundary Validity\nValidating identified boundaries is crucial for reliable trading decisions. This card covers **how to use technical indicators to confirm boundary strength**.\n\n* **Volume Analysis**: Use volume indicators to confirm boundary validity. If the price approaches a boundary with declining volume, it may indicate a lack of interest and potential false breakouts.\n* **Divergence Indicators**: Implement tools like MACD or RSI to identify divergences at boundaries. For example, if the price makes a new high but RSI shows lower highs, this divergence signals a potential reversal at the boundary.\n* **Multiple Timeframe Analysis**: Cross-reference boundaries on lower timeframes to confirm validity. If a daily resistance level aligns with a 4-hour supply zone, this strengthens the case for a reversal at that boundary.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to assess the strength of price movements."
        },
        {
          "term": "Divergence",
          "definition": "A discrepancy between price movement and an indicator, suggesting a potential reversal."
        }
      ],
      "whyThisMatters": "Confirming boundary validity enhances the reliability of trading decisions, reducing the risk of false breakouts.",
      "realLifeExample": "On May 5, 2023, the S&P 500 approached a resistance level at 4,200. A trader noted declining volume and an RSI divergence, deciding against a long position, which later proved beneficial as the price reversed.",
      "commonMistake": "Ignoring volume and divergence signals can lead to entering trades based on invalidated boundaries.",
      "quickNote": "Confirm boundary validity to enhance trading accuracy.",
      "mentorText": "Always validate your boundaries. If the price is near a critical level but volume is low, question the strength of that boundary before executing trades.",
      "mentorAnalogy": "Like a structural engineer assessing the integrity of a bridge before allowing traffic, you must ensure the strength of your trading boundaries before proceeding."
    },
    "taskData": null,
    "visualKey": "htf-range-extremes"
  },
  {
    "type": "concept",
    "title": "Dynamic Adjustments to Boundaries",
    "label": "Core Track",
    "body": "### External Range Boundary: Dynamic Adjustments to Boundaries\nMarket conditions are fluid, necessitating dynamic adjustments to established boundaries. This card discusses **how to adapt boundaries in response to evolving price action**.\n\n* **Market Sentiment Analysis**: Regularly assess market sentiment through news and economic indicators. If a significant economic report is released, adjust boundaries based on the new volatility levels.\n* **Trailing Stops**: Implement trailing stops to adjust your exit strategy dynamically. For example, if trading long on GBPUSD, set a trailing stop 20 pips below the current price to lock in profits as the price rises.\n* **Volatility Indicators**: Use tools like the Average True Range (ATR) to adjust boundaries based on market volatility. If ATR indicates increased volatility, widen your boundaries to accommodate larger price swings.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors towards a particular market or asset."
        },
        {
          "term": "Trailing Stop",
          "definition": "A type of stop-loss order that moves with the market price."
        }
      ],
      "whyThisMatters": "Dynamic adjustments ensure traders remain responsive to changing market conditions, enhancing trade management.",
      "realLifeExample": "On June 12, 2023, following a major employment report, a trader adjusted their boundaries on USDCHF based on increased volatility, successfully capturing a 100-pip move.",
      "commonMistake": "Failing to adjust boundaries in response to market changes can lead to missed opportunities or increased risk.",
      "quickNote": "Adapt boundaries dynamically to stay aligned with market conditions.",
      "mentorText": "Stay flexible. If the market shifts, your boundaries should too. Adjust your strategy based on real-time data to maximize your trading effectiveness.",
      "mentorAnalogy": "Just as a sailor adjusts their sails based on changing winds, you must adapt your trading boundaries to align with market dynamics."
    },
    "taskData": null,
    "visualKey": "boundary-acceptance"
  },
  {
    "type": "concept",
    "title": "Recognizing Boundary Failures",
    "label": "Core Track",
    "body": "### Boundary Failures: Implications and Reactions\nBoundary failures indicate a breakdown of expected price behavior at established high and low points. Understanding these failures allows traders to safeguard against potential losses during volatile conditions.\n\n* **Failure Confirmation**: A boundary failure is confirmed when the price closes beyond the established high or low of the range with a candle body exceeding 50% of the range. Monitor for subsequent price action to determine if the failure is genuine or a false breakout.\n* **Immediate Reaction Protocol**: Upon confirmation of a boundary failure, adjust stop-loss orders to protect against further adverse movement. Consider implementing a trailing stop to lock in profits if the price reverses.\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. If the ATR is significantly elevated (e.g., above 1.5 times the 14-day average), reassess your risk management strategy before executing trades near boundary failures.",
    "context": {
      "keyTerms": [
        {
          "term": "Boundary Failure",
          "definition": "A situation where the price breaches an established range boundary, indicating a potential shift in market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing boundary failures is critical for risk management and can prevent significant losses in volatile markets.",
      "realLifeExample": "On EURUSD, a boundary failure occurred when the price closed at 1.1205, breaking the established high of 1.1190 during the 10:00 AM EST news release, leading to a swift decline of 50 pips.",
      "commonMistake": "Traders often misinterpret boundary failures as signals to enter trades without confirming subsequent price action.",
      "quickNote": "Boundary failures require immediate reassessment of trading positions to mitigate risk.",
      "mentorText": "When you see a boundary failure, don't panic. Instead, assess the price action that follows. If it confirms the failure, adjust your stops and be ready to exit if necessary.",
      "mentorAnalogy": "Think of boundary failures like a dam breaking; the initial breach may seem minor, but the subsequent rush of water can lead to significant consequences if not managed properly."
    },
    "taskData": null,
    "visualKey": "boundary-rejection"
  },
  {
    "type": "concept",
    "title": "Multi-Timeframe Analysis for Boundaries",
    "label": "Core Track",
    "body": "### Enhancing Boundary Identification through Multi-Timeframe Analysis\nMulti-timeframe analysis provides a broader perspective on market dynamics, allowing for more accurate boundary identification. This approach integrates various timeframes to enhance trading decisions.\n\n* **Higher Timeframe Context**: Always analyze boundaries on higher timeframes (e.g., daily or weekly) before executing trades on lower timeframes (e.g., 1-hour or 15-minute). This ensures alignment with the prevailing market trend.\n* **Timeframe Confluence**: Identify where boundaries on different timeframes overlap. For instance, if a daily high aligns with an hourly resistance level, this confluence strengthens the significance of the boundary.\n* **Dynamic Adjustment**: As market conditions evolve, continuously reassess boundaries across timeframes. If a lower timeframe shows a breakout while the higher timeframe remains intact, exercise caution before acting on the lower timeframe signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "A trading approach that examines price action across various timeframes to gain a comprehensive market view."
        }
      ],
      "whyThisMatters": "Utilizing multi-timeframe analysis enhances boundary identification, leading to more informed trading decisions.",
      "realLifeExample": "During the 3:00 PM EST session, the daily boundary for GBPUSD was 1.3600, while the 1-hour chart showed a resistance at 1.3595. The overlap indicated a strong selling opportunity when the price approached this zone.",
      "commonMistake": "Traders often neglect higher timeframe analysis, leading to misaligned trades that do not consider broader market trends.",
      "quickNote": "Multi-timeframe analysis is essential for validating boundary significance.",
      "mentorText": "Always start with the higher timeframes. They tell you the bigger story. If the daily chart shows a strong boundary, respect it when you’re trading on the hourly chart.",
      "mentorAnalogy": "Consider multi-timeframe analysis like a pilot checking both the flight plan and real-time weather conditions; both perspectives are crucial for safe navigation."
    },
    "taskData": null,
    "visualKey": "external-boundary-debrief"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Trading Boundaries",
    "label": "Core Track",
    "body": "### Psychological Factors Influencing Trading Decisions at Boundaries\nUnderstanding the psychological aspects that influence trading decisions at boundaries is essential for maintaining discipline and objectivity. Traders often face emotional challenges at these critical levels.\n\n* **Fear and Greed Dynamics**: At boundary levels, fear of loss and greed for profit can cloud judgment. Recognize these emotions and implement a predefined trading plan to counteract impulsive decisions.\n* **Confirmation Bias**: Traders may seek information that supports their pre-existing beliefs about price direction at boundaries. Combat this by relying on objective analysis rather than subjective opinions.\n* **Discipline Reinforcement**: Establish strict entry and exit rules based on technical criteria rather than emotional reactions. Use a trading journal to document decisions made at boundaries to reinforce disciplined behavior over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to favor information that confirms existing beliefs, potentially leading to poor trading decisions."
        }
      ],
      "whyThisMatters": "Addressing psychological factors is crucial for developing a disciplined trading mindset, especially at critical boundary levels.",
      "realLifeExample": "After witnessing a bounce at the 1.2000 boundary on USDJPY, a trader hesitated to enter a short position due to fear of loss, missing a subsequent drop to 1.1950.",
      "commonMistake": "Traders often allow emotions to dictate their actions at boundaries, leading to inconsistent decision-making.",
      "quickNote": "Maintain discipline by adhering to a trading plan, especially at critical boundaries.",
      "mentorText": "When you reach a boundary, take a deep breath. Stick to your plan and don’t let fear or greed dictate your actions. Trust your analysis.",
      "mentorAnalogy": "Think of your trading plan as a surgeon's checklist; it ensures that every step is followed correctly, minimizing the risk of emotional errors during critical moments."
    },
    "taskData": null,
    "visualKey": "external-boundary-intro"
  },
  {
    "type": "concept",
    "title": "Confluence with Other Technical Levels",
    "label": "Core Track",
    "body": "### Identifying Confluence Between HTF Boundaries and Technical Levels\nRecognizing confluence between high timeframe boundaries and other technical levels enhances the robustness of trading setups. This multi-faceted approach increases the likelihood of successful trades.\n\n* **Fibonacci Retracement Levels**: Align HTF boundaries with Fibonacci retracement levels. For example, if the 61.8% retracement coincides with a daily boundary, this strengthens the potential reversal zone.\n* **Moving Averages**: Use moving averages to identify dynamic support and resistance levels that coincide with HTF boundaries. A 200-period moving average aligning with a weekly boundary can provide significant trading insight.\n* **Chart Patterns**: Look for chart patterns (e.g., double tops or bottoms) that form near HTF boundaries. The presence of a pattern at a boundary can indicate a higher probability of price reversal or continuation.",
    "context": {
      "keyTerms": [
        {
          "term": "Confluence",
          "definition": "The occurrence of multiple technical indicators or levels aligning at a specific price point, enhancing trade validity."
        }
      ],
      "whyThisMatters": "Identifying confluence increases the reliability of trading setups, leading to better risk-reward ratios.",
      "realLifeExample": "On AUDCAD, a daily boundary at 0.9400 aligned with a 50% Fibonacci retracement level, resulting in a strong reversal that provided a 70-pip profit opportunity.",
      "commonMistake": "Traders often overlook the importance of confluence, relying solely on single indicators or boundaries without considering additional technical levels.",
      "quickNote": "Confluence strengthens trading setups by aligning multiple technical indicators.",
      "mentorText": "Always look for additional signals at your boundaries. If multiple indicators align, it’s a stronger case for entering a trade.",
      "mentorAnalogy": "Think of confluence like a safety net for a tightrope walker; the more supports you have, the less likely you are to fall."
    },
    "taskData": null,
    "visualKey": "htf-range-extremes"
  },
  {
    "type": "concept",
    "title": "Practical Application of Boundary Concepts",
    "label": "Core Track",
    "body": "### External Range Boundary: Practical Application of Boundary Concepts\nMapping HTF boundaries requires practical engagement to solidify understanding. This card emphasizes **exercises that reinforce boundary mapping and trading strategies**.\n\n* **Boundary Identification Exercise**: Analyze the last 10 trading days of EURUSD, marking the highest and lowest points. Confirm these boundaries align with significant price action to validate your mapping technique.\n* **Trade Simulation**: Conduct a simulated trade based on your identified boundaries. Enter a long position at the lower boundary and set a target at the upper boundary, assessing the risk-to-reward ratio.\n* **Review and Adjust**: Post-simulation, review your trades. Identify any deviations from your planned boundaries and adjust your mapping approach based on observed market behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "HTF Boundaries",
          "definition": "High Time Frame price levels that define the upper and lower limits of market movement."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises enhances your ability to accurately map and trade HTF boundaries, leading to more informed trading decisions.",
      "realLifeExample": "During the last two weeks, EURUSD traded between 1.0800 and 1.1000. Mapping these boundaries allowed for a long position entry at 1.0800 with a target at 1.1000, achieving a 200 pip gain.",
      "commonMistake": "Failing to validate boundary levels with significant price action can lead to inaccurate trading decisions.",
      "quickNote": "Practical exercises reinforce boundary mapping skills essential for effective trading.",
      "mentorText": "You must engage with the market directly. Identify those boundaries, simulate trades, and learn from your outcomes. This is how you refine your skills.",
      "mentorAnalogy": "Think of boundary mapping like a pilot charting a flight path. Each waypoint is crucial for navigation, ensuring you stay within safe airspace."
    },
    "taskData": null,
    "visualKey": "boundary-acceptance"
  },
  {
    "type": "practice",
    "title": "Summary of HTF Boundary Concepts",
    "label": "Core Track",
    "body": "### External Range Boundary: Summary of HTF Boundary Concepts\nUnderstanding HTF boundaries is essential for effective trading. This card summarizes **the key concepts related to mapping and trading within these limits**.\n\n* **Boundary Mapping**: Identify the highest and lowest points over a defined period, ensuring these levels are respected by price action. Use at least a 14-day period for accuracy.\n* **Trading Within Boundaries**: Execute trades only when price approaches these mapped boundaries. Long positions should be considered near the lower boundary, while short positions are viable near the upper boundary.\n* **Risk Management**: Always set stop-loss orders just outside the boundaries to protect against false breakouts, ensuring your risk is managed effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a security's price over time, used to identify potential trading opportunities."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces their importance, ensuring traders can effectively utilize HTF boundaries in their strategies.",
      "realLifeExample": "In a recent analysis of GBPUSD, the highest point was 1.3200 and the lowest was 1.3000. Trading strategies were executed based on these boundaries, leading to successful trades.",
      "commonMistake": "Ignoring the significance of price action in confirming boundary levels can lead to poor trading outcomes.",
      "quickNote": "Mapping and trading within HTF boundaries are critical for successful market engagement.",
      "mentorText": "You need to internalize these concepts. Mapping boundaries isn't just theory; it's your roadmap for trading decisions.",
      "mentorAnalogy": "Consider a chef preparing a dish. The boundaries are the recipe's limits; stray too far, and the dish fails. Stick to the recipe for success."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary purpose of mapping HTF boundaries?",
      "options": [
        {
          "id": "0",
          "text": "To identify potential entry and exit points for trades.",
          "isCorrect": true,
          "feedback": "Correct. Mapping HTF boundaries helps traders identify where to enter and exit trades based on price action."
        },
        {
          "id": "1",
          "text": "To predict future market movements.",
          "isCorrect": false,
          "feedback": "Incorrect. Mapping boundaries is not about predicting but about identifying levels where price may react."
        },
        {
          "id": "2",
          "text": "To determine the overall market trend.",
          "isCorrect": false,
          "feedback": "Incorrect. While boundaries can indicate trend strength, their primary purpose is to define trading limits."
        },
        {
          "id": "3",
          "text": "To set arbitrary price levels for trading.",
          "isCorrect": false,
          "feedback": "Incorrect. Boundaries should be based on historical price action, not arbitrary levels."
        }
      ]
    },
    "visualKey": "boundary-rejection"
  },
  {
    "type": "summary",
    "title": "External Range Boundary Synthesis",
    "label": "Core Track",
    "body": "### External Range Boundary: Core Advanced Application 15\nAdvanced application of HTF boundary concepts requires understanding edge cases and nuances. This card covers **the complexities of trading near boundaries and potential pitfalls**.\n\n* **False Breakouts**: Be aware of false breakouts that can occur near boundary levels. Use volume analysis to confirm breakouts before executing trades.\n* **Dynamic Boundaries**: Adjust boundaries based on changing market conditions. If price consistently breaches a boundary, re-evaluate its significance and adjust your trading strategy accordingly.\n* **Confluence with Other Indicators**: Integrate HTF boundaries with other technical indicators, such as moving averages or Fibonacci retracements, to enhance decision-making and validate entry points.",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that exceeds a boundary but fails to sustain momentum, leading to a reversal."
        }
      ],
      "whyThisMatters": "Understanding these advanced applications allows for more nuanced trading strategies, reducing the risk of losses associated with boundary trading.",
      "realLifeExample": "During a recent session, USDJPY broke above 145.00 but quickly reversed. A trader using volume analysis would have avoided entering a long position based on the false breakout.",
      "commonMistake": "Relying solely on boundary levels without considering market context can lead to significant trading losses.",
      "quickNote": "Advanced understanding of HTF boundaries enhances trading precision and risk management.",
      "mentorText": "You must be vigilant. Boundaries are not static; they evolve. Use all available data to make informed decisions.",
      "mentorAnalogy": "Think of a surgeon navigating complex anatomy. Each boundary is a critical structure; understanding their dynamics can mean the difference between success and failure."
    },
    "taskData": null,
    "visualKey": "external-boundary-debrief"
  }
];
