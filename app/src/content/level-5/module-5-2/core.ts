import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Dynamic Position Sizing Using ATR",
    "label": "Core Track",
    "body": "### Dynamic Position Sizing: Utilizing ATR\nPosition sizing should reflect current market conditions rather than arbitrary pip limits. This card teaches **how to employ Average True Range (ATR) for dynamic position sizing**.\n\n* **ATR Calculation**: ATR is calculated as the average of the true ranges over a specified period, providing a measure of market volatility. For example, if the ATR of EURUSD is 50 pips, this indicates a higher volatility environment.\n* **Position Size Adjustment**: Position size is adjusted based on ATR; for instance, if your risk tolerance is $200 and the ATR is 50 pips, your position size would be calculated as $200 divided by the ATR, resulting in 4 mini lots.\n* **Market Adaptation**: Regularly updating position sizes according to ATR allows for better risk management during varying market conditions, reducing the likelihood of overexposure during high volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a given period."
        }
      ],
      "whyThisMatters": "Dynamic sizing based on ATR allows traders to manage risk effectively in fluctuating market conditions, ensuring that position sizes reflect actual volatility rather than fixed limits.",
      "realLifeExample": "During a news event, the ATR for GBPUSD spikes to 80 pips. A trader with a $300 risk tolerance adjusts their position size to 3.75 mini lots, ensuring they remain within their risk parameters despite increased volatility.",
      "commonMistake": "Traders often neglect to adjust their position sizes when ATR changes, leading to either excessive risk or missed opportunities.",
      "quickNote": "Use ATR to dynamically size positions based on current market volatility.",
      "mentorText": "Think of ATR as your market volatility gauge. If the market is moving more, you need to adjust your position size accordingly to avoid unnecessary risk.",
      "mentorAnalogy": "Adjusting position size with ATR is like a pilot adjusting altitude based on weather conditions; both require real-time data to ensure safety and efficiency."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Calculating ATR for Effective Sizing",
    "label": "Core Track",
    "body": "### Calculating ATR: The Foundation of Sizing\nUnderstanding how to calculate ATR is essential for effective position sizing. This card details **the process of calculating ATR and its implications for risk management**.\n\n* **True Range Calculation**: True range is determined by taking the maximum of the following: current high minus current low, current high minus previous close, and current low minus previous close. This provides a comprehensive view of price movement.\n* **Smoothing ATR**: ATR is typically smoothed using a simple moving average (SMA) over a defined period, such as 14 days. For example, if the true ranges for the last 14 days average to 60 pips, the ATR would be 60 pips.\n* **Interpreting ATR Values**: Higher ATR values indicate increased volatility, prompting traders to adjust their position sizes accordingly. A trader observing an ATR increase from 30 to 70 pips should reassess their risk parameters and position sizes.\n",
    "context": {
      "keyTerms": [
        {
          "term": "True Range",
          "definition": "The greatest of the current high minus the current low, the absolute value of the current high minus the previous close, and the absolute value of the current low minus the previous close."
        },
        {
          "term": "Smoothing",
          "definition": "The process of applying a moving average to the ATR calculation to reduce noise and provide a clearer trend."
        }
      ],
      "whyThisMatters": "Accurate ATR calculation is critical for determining appropriate position sizes, which directly impacts risk management and trading performance.",
      "realLifeExample": "If the true ranges for the last 14 days of AUDCAD are calculated as 40, 50, 30, 60, and 70 pips, the ATR would be smoothed to approximately 50 pips, guiding the trader to adjust their position size accordingly.",
      "commonMistake": "Failing to use an appropriate period for smoothing ATR can lead to misleading volatility readings and poor sizing decisions.",
      "quickNote": "Calculate ATR accurately to inform position sizing based on market volatility.",
      "mentorText": "Calculating ATR is like measuring the pulse of the market. If you don’t know how fast it’s beating, you can’t make informed decisions about your position sizes.",
      "mentorAnalogy": "Calculating ATR is akin to a surgeon assessing a patient's vital signs before an operation; both require precise measurements to ensure safety and effectiveness."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Adjusting Stop Distances with ATR",
    "label": "Core Track",
    "body": "### Stop Distance Adjustment: Utilizing ATR\nPlacing stops at appropriate levels is crucial for effective risk management. This card explains **how to adjust stop distances based on ATR readings**.\n\n* **ATR-Based Stop Placement**: Stops should be placed a multiple of the ATR away from the entry point. For instance, if the ATR is 40 pips, a trader may set their stop loss at 1.5 times the ATR, or 60 pips, to account for normal price fluctuations.\n* **Volatility Context**: In a high ATR environment, wider stops are warranted to avoid being stopped out by market noise. Conversely, in low ATR conditions, tighter stops may be appropriate to maximize risk-reward ratios.\n* **Dynamic Adjustment**: As ATR changes, traders should continuously reassess stop distances. If the ATR increases from 30 to 50 pips, the stop distance should be recalibrated to maintain effective risk management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Loss",
          "definition": "An order placed to sell a security when it reaches a certain price, used to limit an investor's loss on a position."
        }
      ],
      "whyThisMatters": "Adjusting stop distances based on ATR helps to avoid premature stop-outs and enhances overall trade management in varying market conditions.",
      "realLifeExample": "A trader enters a long position on USDJPY at 110.00 with an ATR of 50 pips. They set their stop loss at 109.40 (1.5 times ATR), allowing for normal volatility without risking excessive loss.",
      "commonMistake": "Traders often set stops at fixed distances without considering ATR, leading to either excessive risk or being stopped out too early.",
      "quickNote": "Adjust stop distances based on ATR to align with market volatility.",
      "mentorText": "Think of your stop loss as a safety net. If the market is more volatile, you need a bigger net to catch those wild swings without getting knocked out.",
      "mentorAnalogy": "Adjusting stop distances with ATR is like a firefighter adjusting their hose length based on the fire's intensity; both require flexibility to handle varying conditions."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Determining Risk per Trade Using ATR",
    "label": "Core Track",
    "body": "### Risk per Trade: Integrating ATR\nSetting risk per trade is a fundamental aspect of trading strategy. This card focuses on **how to incorporate ATR into your risk management framework**.\n\n* **Risk Calculation**: Determine your risk per trade by dividing your total account risk by the ATR. For example, if your account risk is $500 and the ATR is 40 pips, your risk per pip would be $12.50.\n* **Position Size Adjustment**: Use the calculated risk per pip to determine your position size. If you decide to risk 2% of your account on a trade, and the ATR indicates a 40 pip stop, your position size would be 1.25 mini lots.\n* **Dynamic Risk Management**: As ATR fluctuates, continuously adjust your risk per trade to ensure alignment with market conditions. If the ATR increases, your position size may need to decrease to maintain the same risk level.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Dynamic risk management based on ATR allows traders to maintain consistent risk levels while adapting to changing market conditions, enhancing overall trading performance.",
      "realLifeExample": "A trader with a $10,000 account decides to risk 2% per trade. With an ATR of 50 pips, they calculate their risk per pip as $10. If they set a stop loss at 50 pips, they would trade 2 mini lots to stay within their risk parameters.",
      "commonMistake": "Traders often set fixed risk levels without considering ATR, leading to inconsistent risk exposure across trades.",
      "quickNote": "Incorporate ATR into your risk per trade calculations for tailored risk management.",
      "mentorText": "Your risk per trade should be as adaptable as the market itself. Use ATR to ensure you’re not overexposed when volatility spikes.",
      "mentorAnalogy": "Determining risk per trade with ATR is like a chef adjusting ingredient quantities based on the recipe's demands; both require flexibility to achieve the desired outcome."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Position Sizing Strategies Based on ATR",
    "label": "Core Track",
    "body": "### Position Sizing: Utilizing ATR for Optimal Entry and Exit\nDynamic position sizing based on Average True Range (ATR) enhances trade execution by aligning risk with market volatility. This card explores **strategies for adjusting position size using ATR**.\n\n* **ATR Calculation**: Determine the ATR over a specified period (e.g., 14 days) to gauge market volatility. For instance, if the ATR for EURUSD is 50 pips, this indicates the average price movement.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). For example, with a $1,000 account and a 2% risk, if ATR is 50 pips, the position size would be 0.4 lots.\n* **Dynamic Adjustments**: Continuously monitor ATR; as volatility increases, decrease position size to maintain consistent risk exposure. Conversely, increase position size during lower volatility periods to optimize potential returns.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "Position Size",
          "definition": "The number of units of an asset to trade based on risk parameters."
        }
      ],
      "whyThisMatters": "Understanding position sizing based on ATR allows traders to adapt to market conditions, enhancing risk management and performance.",
      "realLifeExample": "If the ATR for GBPJPY is 80 pips and you are willing to risk $200 on a trade, your position size would be calculated as $200 / (80 pips x 10) = 0.25 lots.",
      "commonMistake": "Traders often set position sizes based on fixed pip values rather than adjusting for ATR, leading to inconsistent risk exposure.",
      "quickNote": "ATR-based sizing aligns risk with market volatility for improved trade management.",
      "mentorText": "When you adjust your position size based on ATR, you’re ensuring that your risk is proportional to market conditions. If volatility spikes, reduce your size to protect your capital.",
      "mentorAnalogy": "Think of position sizing like adjusting the weight of your luggage based on the airline's baggage policy. If the weight limit changes, you must adapt your packing strategy to avoid fees."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Volatility Trends",
    "label": "Core Track",
    "body": "### Market Volatility: Analyzing Trends with ATR\nUnderstanding volatility trends is essential for making informed position sizing decisions. This card details **how to analyze market volatility using ATR**.\n\n* **Identifying Trend Patterns**: Observe ATR trends over time; increasing ATR indicates rising volatility, while decreasing ATR suggests a calmer market. For example, if the ATR for AUDCAD rises from 30 to 50 pips over a week, expect larger price swings.\n* **Volatility Breakouts**: Utilize ATR to identify breakout scenarios. If the price breaks a resistance level with an ATR spike, adjust position size to capitalize on potential momentum shifts. For instance, if EURUSD breaks a key level with an ATR increase, consider increasing your position size.\n* **Contextual Analysis**: Combine ATR analysis with other indicators (e.g., moving averages) to confirm volatility trends. A rising ATR alongside a bullish moving average crossover signals a strong upward trend.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Trend",
          "definition": "The direction of market volatility over a specified period."
        },
        {
          "term": "Breakout",
          "definition": "A price movement that breaks through a defined support or resistance level."
        }
      ],
      "whyThisMatters": "Analyzing volatility trends allows traders to make timely adjustments to position sizes, enhancing trade execution and risk management.",
      "realLifeExample": "If the ATR for NZDUSD shows a consistent increase over three days, moving from 20 to 35 pips, consider adjusting your position size to account for the heightened volatility during that period.",
      "commonMistake": "Failing to recognize changing volatility trends can lead to inappropriate position sizing, exposing traders to unexpected risks.",
      "quickNote": "Monitoring ATR trends enables timely adjustments to position sizes based on market conditions.",
      "mentorText": "When you analyze ATR trends, you’re essentially gauging the market’s pulse. If it’s racing, you need to adjust your strategy accordingly to stay in sync.",
      "mentorAnalogy": "Think of analyzing volatility trends like a pilot monitoring wind speed. Just as they adjust altitude based on wind conditions, you must adjust your position size based on market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in ATR-Based Sizing",
    "label": "Core Track",
    "body": "### Common Pitfalls: Avoiding Mistakes in ATR-Based Position Sizing\nTraders often encounter specific pitfalls when applying ATR for position sizing. This card identifies **common mistakes and how to avoid them**.\n\n* **Ignoring Market Context**: Relying solely on ATR without considering broader market conditions can lead to poor sizing decisions. For example, using an ATR of 100 pips during a high-impact news event without adjusting for potential volatility spikes can result in excessive risk.\n* **Static Position Sizes**: Maintaining fixed position sizes regardless of ATR fluctuations undermines risk management. If the ATR for USDCHF increases significantly, failing to adjust position size can expose your account to larger-than-expected losses.\n* **Over-Reliance on Historical ATR**: Using outdated ATR values without recalibrating for current market conditions can lead to miscalculations. Always recalculate ATR frequently to ensure your sizing reflects the latest volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Context",
          "definition": "The overall environment affecting price movements, including news and economic events."
        },
        {
          "term": "Static Position Size",
          "definition": "A fixed number of units traded regardless of market conditions."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding common pitfalls ensures effective use of ATR for position sizing, leading to improved trading outcomes.",
      "realLifeExample": "If the ATR for S&P 500 futures is 25 points but you ignore an upcoming earnings report, you may set a position size that is too aggressive, risking larger losses than anticipated.",
      "commonMistake": "Traders often neglect to adjust their position sizes when market conditions change, leading to inconsistent risk exposure.",
      "quickNote": "Awareness of common pitfalls in ATR sizing enhances risk management and trading performance.",
      "mentorText": "Avoid the trap of static sizing. Always adjust your position based on the current ATR and market context to protect your capital effectively.",
      "mentorAnalogy": "Think of it like a chef adjusting cooking times based on ingredient freshness. Just as you wouldn’t cook a dish the same way with stale ingredients, don’t size your positions without considering current market conditions."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Synthesis of Position Sizing Techniques",
    "label": "Core Track",
    "body": "### Synthesis: Integrating Position Sizing Techniques\nCombining various position sizing techniques enhances adaptability to changing market conditions. This card focuses on **integrating learned techniques for cohesive strategy**.\n\n* **Multi-Factor Sizing Approach**: Utilize ATR alongside other metrics, such as volatility regimes and market sentiment, to determine optimal position sizes. For instance, if ATR indicates high volatility and sentiment is bullish, increase position size to leverage potential gains.\n* **Dynamic Risk Allocation**: Adjust risk allocation based on market phases. In trending markets, consider a larger position size; in ranging markets, reduce size to mitigate risk. For example, if the ATR for DAX shows a consistent increase during a bullish trend, increase your position size accordingly.\n* **Review and Adapt**: Regularly review your position sizing strategy and adapt based on performance metrics and market feedback. If a particular sizing method yields consistent losses, reassess and modify your approach to ensure alignment with market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Factor Sizing",
          "definition": "A position sizing method that incorporates multiple indicators for decision-making."
        },
        {
          "term": "Risk Allocation",
          "definition": "The distribution of risk across different trades or assets."
        }
      ],
      "whyThisMatters": "Integrating various techniques allows for a more robust position sizing strategy that can adapt to different market environments.",
      "realLifeExample": "If the ATR for NASDAQ futures is 40 points and market sentiment is bullish, consider increasing your position size to capitalize on potential upward momentum, while maintaining a review process for ongoing adjustments.",
      "commonMistake": "Traders often fail to integrate multiple factors into their position sizing, relying on a single metric which may not capture the full market picture.",
      "quickNote": "A cohesive position sizing strategy adapts to market conditions by integrating multiple techniques.",
      "mentorText": "Think of your position sizing strategy like a well-coordinated sports team. Each player has a role, and when they work together, they adapt to the game’s flow effectively.",
      "mentorAnalogy": "Integrating position sizing techniques is like an architect combining various materials and designs to create a resilient structure. Each element must work together to withstand changing conditions."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Practical Application of ATR in Sizing",
    "label": "Core Track",
    "body": "### Practical Application: ATR Calculations for Position Sizing\nApplying the Average True Range (ATR) in position sizing allows traders to dynamically adjust their risk exposure based on current market volatility. This card focuses on **integrating ATR calculations into real trading scenarios**.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to determine the average market volatility. For instance, if the ATR for EURUSD is 50 pips, this indicates the average price movement.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk * Account Balance) / (ATR * Risk Multiplier). If your account risk is 2% of a $10,000 account, and you set a risk multiplier of 1.5, your position size would be calculated as: (0.02 * 10,000) / (50 * 1.5) = 2.\n* **Dynamic Adjustments**: Continuously monitor ATR and adjust position sizes accordingly. If the ATR increases to 70 pips, recalculate the position size to ensure consistent risk management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Understanding how to apply ATR for position sizing is crucial for maintaining consistent risk levels in fluctuating market conditions.",
      "realLifeExample": "During the London session, EURUSD shows an ATR of 50 pips. A trader with a $10,000 account and a 2% risk tolerance would size their position to risk $200, resulting in a position size of 2 lots based on the ATR calculation.",
      "commonMistake": "Traders often neglect to adjust their position sizes as ATR changes, leading to inconsistent risk exposure.",
      "quickNote": "Use ATR to dynamically size positions based on current market volatility.",
      "mentorText": "When you apply ATR in your sizing, you’re not just guessing. You’re using real data to make informed decisions. If the market is more volatile, you need to adjust your position size to protect your capital.",
      "mentorAnalogy": "Think of ATR like an aircraft's altimeter, which measures altitude changes. Just as pilots adjust their flight plans based on altitude data, traders must adjust their position sizes based on ATR readings."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Summary of Volatility-Adjusted Sizing",
    "label": "Core Track",
    "body": "### Summary: Key Concepts of Volatility-Adjusted Sizing\nVolatility-adjusted sizing is essential for effective risk management in trading. This card summarizes **the fundamental principles of using ATR for dynamic position sizing**.\n\n* **Risk Management Framework**: Position sizing based on ATR helps maintain a consistent risk profile, ensuring that traders do not overexpose themselves during high volatility periods. For example, if the ATR for GBPJPY is 80 pips, a trader should size their position to reflect this volatility.\n* **Risk Multiplier Application**: Incorporating a risk multiplier allows traders to adjust their exposure based on their market outlook. A trader might choose a multiplier of 1.2 during stable conditions and increase it to 1.5 during high volatility.\n* **Continuous Review**: Regularly review ATR values and adjust position sizes accordingly. If the ATR for AUDCAD shifts from 60 to 90 pips, recalibrating position sizes is necessary to align with the new risk environment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Multiplier",
          "definition": "A factor used to adjust position size based on market volatility and trader's risk appetite."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the importance of dynamic sizing in maintaining a robust risk management strategy.",
      "realLifeExample": "If a trader has a $15,000 account and the ATR for USDCHF is 90 pips, using a 2% risk tolerance means they can risk $300. Adjusting for a risk multiplier of 1.5 results in a position size of 2.22 lots.",
      "commonMistake": "Failing to adjust position sizes according to changing ATR values can lead to significant drawdowns.",
      "quickNote": "Volatility-adjusted sizing ensures consistent risk management across varying market conditions.",
      "mentorText": "Remember, the key to successful trading is adapting your position size to the market's volatility. Use ATR as your guide to maintain a balanced risk profile.",
      "mentorAnalogy": "Consider volatility-adjusted sizing like a ship captain adjusting sail area based on wind conditions. Just as a captain adapts to ensure safe navigation, traders must adjust their positions to navigate market volatility safely."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Core Advanced Risk Management 11",
    "label": "Core Track",
    "body": "### Advanced Application: Volatility-Adjusted Sizing for Capital Defense\nImplementing advanced volatility-adjusted sizing techniques is crucial for capital preservation. This card discusses **strategies for defending capital through dynamic position sizing**.\n\n* **Capital Defense Strategy**: Establish a capital defense threshold, such as limiting maximum drawdown to 5% of the account. If the ATR for NZDUSD is 75 pips, adjust position sizes to ensure that potential losses do not exceed this threshold during adverse movements.\n* **Risk Assessment Metrics**: Use metrics like Value at Risk (VaR) alongside ATR to assess potential losses in various market scenarios. For instance, if the VaR indicates a potential loss of $400, adjust position sizes accordingly to stay within the defined risk parameters.\n* **Scenario Analysis**: Conduct scenario analysis to evaluate how different ATR levels impact position sizing. If the ATR for S&P 500 futures rises to 100 points, recalibrate your position size to mitigate risk exposure effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Value at Risk (VaR)",
          "definition": "A statistical measure that quantifies the potential loss in value of a portfolio over a defined period for a given confidence interval."
        }
      ],
      "whyThisMatters": "Advanced risk management techniques are essential for protecting capital and ensuring long-term trading viability.",
      "realLifeExample": "If a trader has a $20,000 account and sets a maximum drawdown of 5%, they can risk $1,000. With an ATR of 75 pips for USDJPY, they would size their position to ensure that losses remain within this limit during volatile periods.",
      "commonMistake": "Overlooking the need for capital defense can lead to significant losses during high volatility events.",
      "quickNote": "Dynamic sizing based on ATR is essential for effective capital defense strategies.",
      "mentorText": "You must defend your capital like a fortress. Use ATR to gauge volatility and adjust your position sizes to ensure that your maximum drawdown stays within your risk tolerance.",
      "mentorAnalogy": "Think of capital defense like a military strategist planning troop deployments based on enemy movements. Just as a strategist adjusts forces based on threat levels, traders must adjust their positions based on market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Core Advanced Risk Management 12",
    "label": "Core Track",
    "body": "### Advanced Application: Volatility-Adjusted Sizing for Risk Management Metrics\nUtilizing volatility-adjusted sizing is vital for comprehensive risk management. This card explores **the integration of risk management metrics with ATR for effective trading strategies**.\n\n* **Risk-Reward Ratio Integration**: Combine ATR with risk-reward ratios to optimize trade setups. For example, if the ATR for EURAUD is 60 pips, and you aim for a 1:3 risk-reward ratio, size your position to ensure that potential losses align with your risk parameters.\n* **Dynamic Risk Assessment**: Continuously assess risk levels based on ATR fluctuations. If the ATR increases to 90 pips, reassess your risk-reward ratio and adjust your position size accordingly to maintain a favorable risk profile.\n* **Portfolio Diversification**: Use ATR to inform diversification strategies. If one asset class shows high volatility (e.g., commodities), reduce position sizes in that area while increasing exposure to more stable assets based on their ATR readings.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio that compares the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Integrating risk management metrics with ATR enhances the precision of position sizing and overall trading strategy.",
      "realLifeExample": "If a trader targets a 1:3 risk-reward ratio with an ATR of 60 pips for CADJPY, they would size their position to ensure that the potential loss aligns with their risk tolerance, adjusting as ATR changes.",
      "commonMistake": "Ignoring the interplay between ATR and risk-reward ratios can lead to suboptimal trade setups.",
      "quickNote": "Integrate risk-reward ratios with ATR for precise position sizing.",
      "mentorText": "Your risk-reward ratio is your blueprint for success. Use ATR to ensure that your position sizes align with your risk-reward goals, adapting as market conditions change.",
      "mentorAnalogy": "Consider this like an architect designing a building. Just as an architect adjusts plans based on structural integrity and environmental factors, traders must adjust their position sizes based on ATR and risk-reward metrics."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Core Volatility-Adjusted Sizing Rules",
    "label": "Core Track",
    "body": "### Core Advanced Risk Management 13: Volatility-Adjusted Sizing\nDynamic position sizing based on market volatility allows for more precise risk management. This card focuses on **how to implement Average True Range (ATR) for capital defense**.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to gauge market volatility. For instance, if the ATR of EURUSD is 50 pips, this indicates the average price movement over the last 14 days.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). For example, if risking $200 with a 50 pip ATR and a risk multiplier of 2, the position size would be $200 / (50 x 2) = 2 lots.\n* **Volatility Scaling**: Adjust position sizes dynamically based on changing ATR values. If the ATR increases to 70 pips, recalculate the position size to maintain the same risk exposure, ensuring capital preservation during volatile conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a specific period."
        }
      ],
      "whyThisMatters": "Understanding how to adjust position sizes based on ATR is essential for maintaining consistent risk management across varying market conditions.",
      "realLifeExample": "During a news event, EURUSD's ATR spikes to 70 pips. A trader recalculates their position size from 2 lots to 1.43 lots to maintain a $200 risk, adapting to the increased volatility.",
      "commonMistake": "Traders often neglect to update their position sizes as ATR changes, leading to overexposure during high volatility periods.",
      "quickNote": "Use ATR to dynamically adjust position sizes, ensuring consistent risk management.",
      "mentorText": "When volatility spikes, recalibrating your position size is non-negotiable. If you don't adjust, you're risking too much when the market is unpredictable.",
      "mentorAnalogy": "Think of trading like flying an aircraft. Just as pilots adjust altitude and speed based on weather conditions, traders must adapt their position sizes according to market volatility."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "practice",
    "title": "Calculating Position Size with ATR",
    "label": "Core Track",
    "body": "### Core Advanced Risk Management 14: Volatility-Adjusted Sizing Practice\nThis practice card tests your ability to apply ATR for position sizing adjustments in real-time scenarios.\n\n* **Scenario**: You have a trading account of $10,000 and are willing to risk 2% per trade. The current ATR for GBPJPY is 60 pips. What is your position size?\n* **Risk Amount**: Calculate your risk amount as 2% of $10,000, which equals $200.\n* **Position Size Calculation**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). Assuming a risk multiplier of 1, your position size would be $200 / (60 x 1) = 3.33 lots.\n\nNow, select the correct position size based on the above calculations.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Multiplier",
          "definition": "A factor used to adjust the position size based on volatility, often set at 1 for standard calculations."
        }
      ],
      "whyThisMatters": "Practicing position size calculations using ATR ensures traders can effectively manage risk in varying market conditions.",
      "realLifeExample": "In a volatile market, recalculating position sizes based on ATR can prevent significant losses. For instance, if GBPJPY's ATR changes to 80 pips, the position size would need to be recalibrated accordingly.",
      "commonMistake": "Failing to account for the risk multiplier can lead to incorrect position sizing, exposing traders to unnecessary risk.",
      "quickNote": "Always incorporate ATR into your position sizing calculations to maintain effective risk management.",
      "mentorText": "If you want to survive in this market, you must know how to size your positions based on volatility. It's not just about the numbers; it's about protecting your capital.",
      "mentorAnalogy": "Just as a surgeon tailors their approach based on the patient's condition, traders must adjust their position sizes based on market volatility metrics."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $10,000 account, a 2% risk per trade, and an ATR of 60 pips, what is the correct position size?",
      "options": [
        {
          "id": "0",
          "text": "3.33 lots",
          "isCorrect": true,
          "feedback": "Correct. The position size is calculated as $200 / (60 x 1) = 3.33 lots."
        },
        {
          "id": "1",
          "text": "2.00 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This does not account for the full risk amount based on the ATR."
        },
        {
          "id": "2",
          "text": "4.00 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This overestimates the position size based on the ATR."
        },
        {
          "id": "3",
          "text": "1.50 lots",
          "isCorrect": false,
          "feedback": "Incorrect. This underestimates the position size based on the risk amount."
        }
      ]
    },
    "visualKey": "volatility-sizing"
  },
  {
    "type": "summary",
    "title": "Key Takeaways on Volatility-Adjusted Sizing",
    "label": "Core Track",
    "body": "### Core Advanced Risk Management 15: Summary of Volatility-Adjusted Sizing\nEffective risk management requires a clear understanding of how to adjust position sizes based on market volatility. This summary encapsulates the core principles of using ATR for position sizing.\n\n* **ATR as a Volatility Measure**: ATR provides a quantifiable measure of market volatility, allowing traders to adapt their risk exposure dynamically. A higher ATR indicates increased volatility, necessitating smaller position sizes to maintain risk levels.\n* **Risk Management Framework**: Establish a systematic approach to position sizing by integrating ATR into your trading plan. For example, if the ATR for AUDCAD rises to 80 pips, recalculate your position size to ensure that your risk remains consistent with your trading strategy.\n* **Continuous Monitoring**: Regularly monitor ATR values and adjust position sizes accordingly. This practice ensures that you remain aligned with your risk management objectives, especially during periods of heightened market activity.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Defense",
          "definition": "Strategies employed to protect trading capital from significant losses."
        }
      ],
      "whyThisMatters": "Summarizing the principles of volatility-adjusted sizing reinforces the importance of dynamic risk management in trading.",
      "realLifeExample": "A trader using ATR effectively adjusts their position size as the ATR fluctuates, maintaining consistent risk exposure and protecting their capital during volatile market conditions.",
      "commonMistake": "Neglecting to adjust position sizes based on ATR can lead to significant losses, especially in unpredictable market environments.",
      "quickNote": "Utilize ATR to guide position sizing and enhance capital defense strategies.",
      "mentorText": "Remember, the market doesn't care about your plans. Adjust your position sizes based on ATR to protect your capital and stay in the game.",
      "mentorAnalogy": "Just as a skilled architect adjusts building designs based on environmental factors, traders must modify their position sizes based on market volatility to ensure structural integrity in their trading plans."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  }
];
