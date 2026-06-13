import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "BTC and ETH Multi-Asset Execution",
    "label": "Crypto Track",
    "body": "### Core Scenario: Simultaneous BTC and ETH Execution\nExecuting BTC and ETH trades simultaneously requires a disciplined approach to avoid doubling directional exposure. This card outlines **strategies for managing simultaneous trades effectively**.\n\n* **Execution Strategy**: Initiate trades in BTC and ETH only when both assets are aligned in the same directional bias. Confirm that the price action of both assets supports the intended trade direction.\n* **Exposure Management**: Limit total exposure to a maximum of 1% of the trading capital across both assets. This ensures that adverse movements in one asset do not disproportionately affect the overall portfolio.\n* **Trade Monitoring**: Continuously monitor the price movements of both BTC and ETH after execution. Adjust stop-loss levels dynamically based on the performance of both assets to mitigate risk.",
    "visualKey": "multi-pair-exec-grid",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Understanding BTC and ETH Correlation",
    "label": "Crypto Track",
    "body": "### Core Scenario: Assessing Correlation\nUnderstanding the correlation between BTC and ETH is essential for effective multi-asset execution. This card teaches **how to evaluate the correlation coefficient between these two cryptocurrencies**.\n\n* **Correlation Coefficient Calculation**: Use historical price data to calculate the correlation coefficient, which ranges from -1 to 1. A coefficient close to 1 indicates a strong positive correlation, while a coefficient near -1 indicates a strong negative correlation.\n* **Market Context Analysis**: Analyze correlation during different market conditions. For example, during a bullish trend, BTC and ETH may exhibit a correlation coefficient of 0.85, indicating they move together, while in bearish conditions, this may drop to 0.40.\n* **Trade Decision Framework**: Only execute simultaneous trades if the correlation coefficient is above 0.5, indicating a reasonable expectation of similar price movement.",
    "visualKey": "multi-pair-exec-grid",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Position Sizing for BTC and ETH",
    "label": "Crypto Track",
    "body": "### Core Scenario: Balanced Position Sizing\nEffective position sizing is crucial when trading BTC and ETH to maintain balanced exposure. This card explores **specific techniques for calculating position sizes**.\n\n* **Risk Percentage Method**: Determine the position size for each asset based on a fixed risk percentage of the total capital. For instance, if risking 1% of a $10,000 account, the maximum loss per trade is $100, which should be split between BTC and ETH based on their respective volatility.\n* **Volatility Adjustment**: Adjust position sizes according to the volatility of each asset. If BTC has a daily ATR (Average True Range) of $500 and ETH has an ATR of $100, consider allocating more capital to BTC to account for its larger price swings.\n* **Dynamic Rebalancing**: Regularly review and rebalance positions based on performance and market conditions. If BTC outperforms ETH, consider reducing BTC exposure to maintain a balanced portfolio.",
    "visualKey": "multi-pair-exec-grid",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Timing Execution for BTC and ETH Trades",
    "label": "Crypto Track",
    "body": "### Core Scenario: Optimal Trade Timing\nTiming is critical when executing trades in BTC and ETH to maximize gains while minimizing risk. This card discusses **strategies for determining the best execution times**.\n\n* **Session Overlap Analysis**: Identify periods of high liquidity, such as the overlap between the US and European trading sessions. For example, executing trades during the 8 AM to 12 PM EST window often results in increased volatility and tighter spreads.\n* **Technical Indicator Confirmation**: Utilize technical indicators like moving averages or RSI to confirm entry points. For instance, if BTC crosses above the 50-day moving average while ETH shows a bullish divergence on the RSI, this may signal an optimal entry point.\n* **News Event Monitoring**: Stay informed about major news events that could impact both assets. Execute trades before scheduled announcements to capitalize on potential volatility, ensuring to set appropriate stop-loss orders to protect against adverse movements.",
    "visualKey": "multi-pair-exec-grid",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Market Sentiment Analysis for BTC and ETH",
    "label": "Crypto Track",
    "body": "### Market Sentiment: BTC and ETH Dynamics\nMarket sentiment significantly influences the price movements of BTC and ETH. This card outlines **how to analyze sentiment and integrate it into your execution strategy**.\n\n* **Sentiment Indicators**: Utilize metrics such as the Fear and Greed Index and social media sentiment analysis to gauge market mood. A high fear level may indicate potential buying opportunities for BTC and ETH.\n* **Correlation Assessment**: Monitor the correlation between BTC and ETH movements. A strong positive correlation may suggest simultaneous trading strategies, while divergence can signal caution.\n* **Execution Timing**: Align trade executions with sentiment shifts. For instance, if sentiment turns bullish during the NY session, consider entering long positions in both BTC and ETH to capitalize on momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear and Greed Index",
          "definition": "A sentiment analysis tool that measures market emotions ranging from fear to greed."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to make informed decisions, optimizing entry and exit points for BTC and ETH trades.",
      "realLifeExample": "On October 5, 2023, a sudden spike in the Fear and Greed Index to 75 prompted a simultaneous long entry for BTC at $28,500 and ETH at $1,900 during the NY session.",
      "commonMistake": "Failing to consider sentiment shifts can lead to entering trades at the wrong time, resulting in unnecessary losses.",
      "quickNote": "Market sentiment analysis is essential for timing BTC and ETH trades effectively.",
      "mentorText": "When I assess sentiment, I look for indicators that tell me how traders feel. If fear is high, I might see it as a chance to buy BTC and ETH at a discount.",
      "mentorAnalogy": "Think of market sentiment like weather patterns; just as pilots adjust flight paths based on weather forecasts, traders must adapt their strategies based on market sentiment."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Hedging Strategies for BTC and ETH",
    "label": "Crypto Track",
    "body": "### Effective Hedging: BTC and ETH Protection\nHedging is a critical strategy for managing risk when executing trades in BTC and ETH. This card details **how to implement effective hedging techniques**.\n\n* **Inverse Positioning**: Use options or futures contracts to take an inverse position on BTC or ETH. For instance, if you hold 1 BTC long, consider a short position in BTC futures to mitigate downside risk.\n* **Cross-Asset Hedging**: Leverage the correlation between BTC and ETH. If BTC is long and ETH shows signs of weakness, a short position in ETH can provide a hedge against potential losses in your BTC position.\n* **Dynamic Adjustments**: Continuously monitor market conditions and adjust hedge ratios accordingly. For example, if BTC rises 10%, consider increasing your ETH short to maintain a balanced exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Inverse Positioning",
          "definition": "Taking a position in a financial instrument that is opposite to an existing position to reduce risk."
        },
        {
          "term": "Cross-Asset Hedging",
          "definition": "Using correlated assets to hedge against potential losses in another asset."
        }
      ],
      "whyThisMatters": "Implementing hedging strategies effectively protects your portfolio from adverse market movements in BTC and ETH.",
      "realLifeExample": "On September 15, 2023, with BTC at $30,000 and ETH at $2,000, a trader executed a short ETH position while holding long BTC to hedge against potential downturns.",
      "commonMistake": "Over-hedging can lead to reduced profits; ensure that your hedge ratios are aligned with your risk tolerance.",
      "quickNote": "Hedging strategies are essential for protecting your BTC and ETH positions from market volatility.",
      "mentorText": "When I hedge, I think of it as wearing a seatbelt in a car. It’s not about avoiding the drive; it’s about being prepared for bumps along the way.",
      "mentorAnalogy": "Hedging is like a parachute for skydivers; it provides a safety net against unexpected falls in the market."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "practice",
    "title": "Practice Scenarios for BTC and ETH Execution",
    "label": "Crypto Track",
    "body": "### Simulated Execution: BTC and ETH Trades\nEngaging in practice scenarios allows traders to apply execution principles effectively. This card focuses on **simulating BTC and ETH trades to avoid overexposure**.\n\n* **Scenario Setup**: Create a hypothetical market condition where BTC is trading at $29,000 and ETH at $1,800. Decide on the size of your positions based on your risk management rules.\n* **Execution Timing**: Determine the optimal entry points based on market sentiment and technical analysis. For instance, if BTC shows bullish momentum, plan to enter a long position while monitoring ETH closely.\n* **Risk Assessment**: Evaluate potential losses from simultaneous trades. If BTC moves against you by 5%, assess how this impacts your ETH position and adjust accordingly to maintain balanced exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Execution",
          "definition": "Practicing trade execution in a controlled environment without real capital at risk."
        },
        {
          "term": "Risk Management Rules",
          "definition": "Guidelines that dictate how much capital to risk on each trade."
        }
      ],
      "whyThisMatters": "Practicing execution scenarios enhances decision-making skills and prepares traders for real market conditions.",
      "realLifeExample": "In a simulated environment, a trader executes a long BTC position at $29,000 and a corresponding long ETH position at $1,800, monitoring both for a potential 3% adverse move.",
      "commonMistake": "Failing to simulate adverse market conditions can lead to unrealistic expectations and poor real-world performance.",
      "quickNote": "Simulated execution scenarios are vital for honing your trading skills in BTC and ETH.",
      "mentorText": "When you practice, treat it like a live environment. Make decisions as if real money is on the line, and learn from every outcome.",
      "mentorAnalogy": "Simulated execution is akin to a flight simulator for pilots; it prepares you for real flights without the risks of actual flying."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering executing a long position in BTC at $29,000 and ETH at $1,800. What should you evaluate first?",
      "options": [
        {
          "id": "0",
          "text": "Assess market sentiment for both BTC and ETH.",
          "isCorrect": true,
          "feedback": "Evaluating market sentiment is crucial to understanding potential price movements before executing trades."
        },
        {
          "id": "1",
          "text": "Check the latest news headlines.",
          "isCorrect": false,
          "feedback": "While news can impact sentiment, it should not be the first evaluation; sentiment analysis provides a broader market view."
        },
        {
          "id": "2",
          "text": "Look at historical price charts only.",
          "isCorrect": false,
          "feedback": "Historical charts provide context but do not reflect current market sentiment which is critical for execution."
        },
        {
          "id": "3",
          "text": "Determine your profit target before anything else.",
          "isCorrect": false,
          "feedback": "Setting profit targets is important, but understanding market conditions should precede this step."
        }
      ]
    },
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Multi-Pair Execution",
    "label": "Crypto Track",
    "body": "### Key Concepts: Multi-Pair Execution for BTC and ETH\nThis summary consolidates essential strategies for executing BTC and ETH trades simultaneously. Understanding these principles is vital for maintaining balanced exposure.\n\n* **Market Sentiment Integration**: Always analyze market sentiment before executing trades in BTC and ETH. This will guide your timing and position sizing.\n* **Hedging Techniques**: Implement effective hedging strategies to protect against adverse price movements. Use inverse positioning and cross-asset hedging to manage risk effectively.\n* **Execution Discipline**: Maintain strict adherence to risk management rules and avoid overexposure by continuously monitoring correlated movements between BTC and ETH.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Discipline",
          "definition": "The practice of adhering to a defined trading plan and risk management rules."
        },
        {
          "term": "Balanced Exposure",
          "definition": "Maintaining an appropriate level of risk across multiple positions to avoid overexposure."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces the importance of a disciplined approach to multi-pair execution in crypto trading.",
      "realLifeExample": "A trader reviewing their strategy on October 10, 2023, recalls executing BTC at $28,800 and ETH at $1,850 while applying sentiment analysis and hedging techniques.",
      "commonMistake": "Neglecting to review and summarize trading strategies can lead to repeated mistakes and missed opportunities.",
      "quickNote": "Reinforcing multi-pair execution strategies is essential for effective trading in BTC and ETH.",
      "mentorText": "Reflecting on your trades helps you understand what worked and what didn’t. Always review your strategy to improve future performance.",
      "mentorAnalogy": "Summarizing your trading strategies is like a post-flight debrief for pilots; it helps identify areas for improvement and ensures readiness for the next flight."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  }
];
