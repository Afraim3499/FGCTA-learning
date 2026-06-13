import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Liquidity Sweep and Break-Even Stops",
    "label": "Forex Track",
    "body": "### Liquidity Sweep: Transitioning Stops to Break-Even\nUnderstanding liquidity sweeps is essential for effective stop management in Forex trading. This card details **how to identify liquidity sweeps and transition stops to break-even** after price clears key structural levels.\n\n* **Identifying Liquidity Zones**: A liquidity sweep occurs when price moves through areas of high order concentration, often triggering stop-loss orders. Recognizing these zones allows traders to anticipate potential reversals.\n* **Stop Adjustment Timing**: Move your stop to break-even only after price has decisively cleared the liquidity zone, typically by a minimum of 5 pips, to avoid premature adjustments.\n* **Confirmation Signals**: Utilize additional indicators, such as volume spikes or momentum shifts, to confirm that the liquidity sweep is valid before adjusting your stop loss.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Sweep",
          "definition": "A price movement that clears significant order levels, often triggering stop-loss orders."
        }
      ],
      "whyThisMatters": "Properly managing stop losses post-liquidity sweep can protect profits while allowing trades to develop fully.",
      "realLifeExample": "EURUSD clearing a liquidity zone at 1.1000 with a 10-pip move, confirming a break before moving stops to entry at 1.0990.",
      "commonMistake": "Traders often adjust stops too early, missing the opportunity for price to establish a new trend.",
      "quickNote": "Only adjust stops after confirming a valid liquidity sweep.",
      "mentorText": "When you see price clear a liquidity zone, wait for confirmation before moving your stop. This ensures you don’t get taken out prematurely.",
      "mentorAnalogy": "Think of a pilot waiting for a clear runway before taking off; moving your stop too soon can lead to a crash landing."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Analyzing Price Action Post-Liquidity Sweep",
    "label": "Forex Track",
    "body": "### Price Action Analysis: Optimal Stop Movement\nPost-liquidity sweep price action analysis is critical for determining when to adjust stops to break-even. This card outlines **how to evaluate price movements after a liquidity sweep** to optimize stop placement.\n\n* **Candlestick Patterns**: Look for reversal patterns such as pin bars or engulfing candles immediately after a liquidity sweep to gauge market sentiment and potential reversals.\n* **Volume Confirmation**: Increased volume accompanying the price action can indicate strength in the move, providing a stronger basis for moving your stop to break-even.\n* **Support and Resistance Levels**: Identify any nearby support or resistance levels that could influence price movement; adjust your stop accordingly to avoid being stopped out by market noise.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of price over time, often analyzed through patterns and trends."
        }
      ],
      "whyThisMatters": "Effective analysis of price action post-sweep ensures that stop adjustments align with market behavior.",
      "realLifeExample": "After EURUSD sweeps liquidity at 1.1000, a bullish engulfing pattern forms at 1.1005, justifying a break-even stop adjustment.",
      "commonMistake": "Failing to wait for confirmation signals can lead to premature stop adjustments that cut profitable trades short.",
      "quickNote": "Use candlestick patterns and volume to confirm price action before adjusting stops.",
      "mentorText": "Evaluate the price action carefully after a liquidity sweep. Look for patterns that confirm the move before you adjust your stop.",
      "mentorAnalogy": "Like a surgeon assessing a patient’s recovery signs before proceeding, ensure the price action confirms your next move."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Market Sentiment and Stop Adjustments",
    "label": "Forex Track",
    "body": "### Market Sentiment: Influencing Stop Movements\nUnderstanding market sentiment is vital for making informed stop adjustments after a liquidity sweep. This card explains **how to assess sentiment shifts to guide break-even stop placements**.\n\n* **Sentiment Indicators**: Utilize tools such as the Commitment of Traders (COT) report or sentiment surveys to gauge overall market sentiment and its potential impact on price action.\n* **News Events Impact**: Be aware of upcoming economic releases or geopolitical events that could shift market sentiment dramatically, influencing your decision to adjust stops.\n* **Behavioral Patterns**: Monitor how price reacts to liquidity sweeps in relation to sentiment; a bullish sentiment with a liquidity sweep suggests a stronger case for moving stops to break-even.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Aligning stop adjustments with market sentiment ensures trades remain viable and responsive to market dynamics.",
      "realLifeExample": "After a liquidity sweep in GBPUSD, positive sentiment from a favorable economic report supports moving stops to break-even at 1.3000.",
      "commonMistake": "Ignoring sentiment shifts can lead to misaligned stop adjustments that do not reflect market conditions.",
      "quickNote": "Always consider market sentiment before adjusting your stops.",
      "mentorText": "Stay attuned to market sentiment. If sentiment shifts positively after a liquidity sweep, it’s a strong signal to adjust your stop.",
      "mentorAnalogy": "Like a weather forecaster adjusting predictions based on changing conditions, adapt your stop strategy to reflect market sentiment."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Trend Analysis for Break-Even Stops",
    "label": "Forex Track",
    "body": "### Trend Analysis: Informing Stop Movements\nUtilizing trend analysis is essential for determining the appropriate timing for moving stops to break-even. This card focuses on **how to analyze trends to guide stop adjustments effectively**.\n\n* **Identifying Trend Direction**: Use moving averages or trend lines to establish the prevailing trend direction; only move stops to break-even in the direction of the trend to avoid counter-trend risks.\n* **Trend Strength Assessment**: Evaluate trend strength using indicators like the Average Directional Index (ADX); a strong trend supports moving stops to break-even, while a weak trend suggests caution.\n* **Retracement Levels**: Monitor key Fibonacci retracement levels; if price retraces to a significant level after a liquidity sweep, consider adjusting your stop to lock in profits while allowing for potential continuation.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Analysis",
          "definition": "The evaluation of price movements to determine the direction and strength of a market trend."
        }
      ],
      "whyThisMatters": "Informed trend analysis ensures stop adjustments align with market momentum, enhancing trade viability.",
      "realLifeExample": "After a liquidity sweep at 1.1500 in AUDUSD, the price remains above the 50-day moving average, justifying a break-even stop at 1.1490.",
      "commonMistake": "Adjusting stops against the prevailing trend can lead to unnecessary losses and missed opportunities.",
      "quickNote": "Always align stop adjustments with the prevailing trend direction.",
      "mentorText": "Analyze the trend before moving your stop. If the trend is strong, it’s safer to adjust your stop to break-even.",
      "mentorAnalogy": "Like a sailor adjusting sails according to wind direction, your stop adjustments should align with market trends."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Risk-Reward Considerations in Forex Stops",
    "label": "Forex Track",
    "body": "### Risk-Reward: Understanding Forex Stop Adjustments\nMoving stops to break-even after a liquidity sweep requires careful consideration of risk-reward ratios unique to Forex. This card outlines **how to assess risk-reward dynamics when adjusting stop losses**.\n\n* **Liquidity Sweep Impact**: A liquidity sweep often leads to a temporary price spike, which can distort perceived risk-reward ratios. Ensure that the new stop-loss placement does not negate the initial risk-reward setup.\n* **Minimum Reward Threshold**: Establish a minimum reward threshold (e.g., 1:1) before moving stops to break-even. This ensures that trades remain viable and profitable even after adjustments.\n* **Volatility Consideration**: Analyze the average true range (ATR) of the currency pair to determine appropriate stop placements. A higher ATR may necessitate a wider stop to accommodate expected price fluctuations without triggering premature exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Sweep",
          "definition": "A sudden price movement that clears stop orders, often leading to increased volatility."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Understanding risk-reward dynamics is essential for maintaining trade viability and ensuring that stop adjustments do not compromise profit potential.",
      "realLifeExample": "Consider the EURUSD experiencing a liquidity sweep at 1.1000, spiking to 1.1025 before retracing. If your initial risk was 50 pips with a target of 100 pips, moving your stop to break-even at 1.1000 after the sweep may negate your risk-reward ratio if the price retraces too quickly.",
      "commonMistake": "Traders often move stops to break-even too quickly, disregarding the volatility and potential for further price movement.",
      "quickNote": "Assess risk-reward ratios carefully before adjusting stops to break-even after liquidity sweeps.",
      "mentorText": "When you see a liquidity sweep, don’t rush to move your stop. Analyze the risk-reward ratio first; if it’s still favorable, then consider your adjustment.",
      "mentorAnalogy": "Think of a pilot adjusting altitude during turbulence. They must assess the conditions before making any changes to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Effective Stop-Loss Strategies in Forex",
    "label": "Forex Track",
    "body": "### Stop-Loss Strategies: Enhancing Break-Even Protocols\nImplementing effective stop-loss strategies is crucial for protecting trades while maximizing potential gains. This card details **strategies that work in tandem with break-even protocols**.\n\n* **Trailing Stops**: Utilize trailing stops to lock in profits as the trade moves in your favor. This method adjusts the stop-loss level automatically, maintaining a set distance from the current price.\n* **Volatility-Based Stops**: Set stop-loss levels based on volatility indicators like the ATR. This approach accommodates price swings while protecting against adverse movements.\n* **Time-Based Adjustments**: Consider time-based criteria for moving stops to break-even. For example, if a trade has not moved in your favor after a set period, reevaluate the position and adjust the stop accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop-loss order that moves with the market price, allowing for profit protection as the price rises."
        },
        {
          "term": "Volatility-Based Stop",
          "definition": "A stop-loss that adjusts according to market volatility, often measured by the ATR."
        }
      ],
      "whyThisMatters": "Effective stop-loss strategies safeguard capital while allowing for maximum upside potential in Forex trades.",
      "realLifeExample": "In a trade on GBPJPY, if you enter at 150.00 with a trailing stop set at 50 pips, as the price rises to 152.00, your stop would adjust to 151.50, ensuring profit protection while allowing for further gains.",
      "commonMistake": "Traders often set static stop-loss levels that do not account for market volatility, leading to unnecessary losses.",
      "quickNote": "Implement dynamic stop-loss strategies to protect gains while allowing for potential upside.",
      "mentorText": "Think of your stop-loss as a safety net. Adjust it dynamically to protect your profits without stifling your trade's potential.",
      "mentorAnalogy": "Like a tightrope walker adjusting their balance as they move, your stop-loss should adapt to the market's movements to maintain stability."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "practice",
    "title": "Practical Application of Break-Even Stops in Forex",
    "label": "Forex Track",
    "body": "### Application: Break-Even Stops in Forex Scenarios\nEngage in practical exercises to apply break-even stop protocols effectively in Forex trading. This card focuses on **real-world scenarios to reinforce learned concepts**.\n\n* **Scenario Analysis**: Analyze a recent trade where a liquidity sweep occurred. Determine the optimal point to move your stop to break-even based on risk-reward considerations and volatility.\n* **Simulation Exercise**: Use a trading simulator to practice moving stops to break-even in various market conditions. Assess how different strategies impact your overall trade performance.\n* **Review and Adjust**: After executing trades, review your break-even stop placements. Adjust your strategies based on outcomes and market behavior to refine your approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential outcomes based on varying market conditions."
        },
        {
          "term": "Trading Simulator",
          "definition": "A platform that allows traders to practice trading strategies without financial risk."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding of break-even protocols, enhancing decision-making in live trading.",
      "realLifeExample": "In a simulated trading environment, practice moving your stop to break-even after the AUDCAD experiences a liquidity sweep at 0.9500, assessing the impact on your risk-reward ratio.",
      "commonMistake": "Failing to practice moving stops in a simulated environment can lead to poor decision-making in real trades.",
      "quickNote": "Engage in practical exercises to master break-even stop protocols in Forex.",
      "mentorText": "Practice makes perfect. Use simulations to refine your stop-loss strategies and ensure you’re ready for live trading.",
      "mentorAnalogy": "Like a surgeon rehearsing a procedure, practicing your stop-loss adjustments prepares you for the real operating room of the market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You enter a trade on USDCHF at 0.9000 with a stop-loss at 0.8950. After a liquidity sweep to 0.9020, when should you move your stop to break-even?",
      "options": [
        {
          "id": "0",
          "text": "Immediately after the liquidity sweep",
          "isCorrect": false,
          "feedback": "Moving the stop immediately may disregard the volatility and risk-reward assessment."
        },
        {
          "id": "1",
          "text": "Only if the price reaches 0.9030",
          "isCorrect": true,
          "feedback": "Waiting for the price to reach a specific target ensures that the trade remains viable and the risk-reward ratio is favorable."
        },
        {
          "id": "2",
          "text": "After the price retraces to 0.9010",
          "isCorrect": false,
          "feedback": "This may be too early, as the trade could still have potential without moving the stop."
        },
        {
          "id": "3",
          "text": "When the trade has been open for 30 minutes",
          "isCorrect": false,
          "feedback": "Time alone should not dictate stop adjustments; assess market conditions and risk-reward ratios instead."
        }
      ]
    },
    "visualKey": "break-even-protocols"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Break-Even Protocols",
    "label": "Forex Track",
    "body": "### Summary: Key Concepts of Break-Even Stops in Forex\nMoving stops to break-even is a critical component of Forex trading strategy. This card summarizes **the essential elements of break-even protocols**.\n\n* **Liquidity Sweep Awareness**: Recognize the impact of liquidity sweeps on price movement and adjust your stop-loss accordingly to maintain a favorable risk-reward ratio.\n* **Dynamic Stop-Loss Strategies**: Implement dynamic stop-loss strategies, such as trailing stops and volatility-based stops, to protect trades while maximizing potential gains.\n* **Practical Application**: Engage in scenario analysis and simulation exercises to reinforce your understanding of break-even stops, ensuring readiness for real-market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Stop-Loss",
          "definition": "A stop-loss that adjusts based on market conditions to optimize trade protection."
        },
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating potential outcomes based on varying market conditions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of break-even protocols enhances decision-making and trade management in Forex.",
      "realLifeExample": "Review a recent trade on NZDUSD where a liquidity sweep occurred, and analyze how moving your stop to break-even impacted your overall risk-reward ratio.",
      "commonMistake": "Traders often neglect to consider the broader market context when moving stops to break-even, leading to suboptimal decisions.",
      "quickNote": "Master the key concepts of break-even protocols to enhance your Forex trading strategy.",
      "mentorText": "Always assess the market conditions before moving your stop to break-even. It’s about protecting your capital while allowing for growth.",
      "mentorAnalogy": "Like a chess player evaluating the board before making a move, ensure that your decisions regarding stop-loss adjustments are strategic and well-considered."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  }
];
