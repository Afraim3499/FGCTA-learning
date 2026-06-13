import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Managing Leverage in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: Leverage Adjustment During Audits\nReal-time management of leverage settings is critical to mitigate risks associated with sudden price movements in crypto markets. This card teaches **how to dynamically adjust leverage during mid-session audits**.\n\n* **Leverage Monitoring**: Continuously assess current leverage ratios against market volatility indicators to ensure alignment with risk tolerance.\n* **Dynamic Adjustments**: Implement leverage adjustments based on real-time price action, particularly during high-impact news events or unexpected wicks.\n* **Risk Mitigation Protocols**: Establish clear protocols for reducing leverage in response to rapid price changes, minimizing exposure to potential losses.",
    "visualKey": "mid-session-audit-log",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Auditing Margin Settings",
    "label": "Crypto Track",
    "body": "### Core Scenario: Margin Setting Verification\nAuditing margin settings during live trading is essential for maintaining optimal risk management. This card focuses on **the systematic approach to verifying margin requirements**.\n\n* **Margin Requirement Assessment**: Regularly check margin requirements against current position sizes to ensure compliance with exchange regulations and personal risk thresholds.\n* **Adjustment Triggers**: Identify specific market conditions that necessitate margin adjustments, such as significant price fluctuations or changes in volatility.\n* **Impact Analysis**: Analyze the potential impact of margin changes on overall portfolio risk and adjust trading strategies accordingly.",
    "visualKey": "mid-session-audit-log",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Strategies for Flash Wicks",
    "label": "Crypto Track",
    "body": "### Core Scenario: Position Adjustment During Flash Wicks\nFlash wicks can create both risks and opportunities in crypto trading. This card explores **strategies for adjusting positions effectively during these events**.\n\n* **Immediate Reaction Protocols**: Develop protocols for immediate position adjustments when a flash wick occurs, including scaling in or out based on predefined criteria.\n* **Market Depth Analysis**: Utilize market depth data to assess the likelihood of wick reversals, informing whether to hold or exit positions quickly.\n* **Profit-Taking Strategies**: Implement profit-taking strategies during flash wicks to capitalize on rapid price movements while managing risk exposure.",
    "visualKey": "mid-session-audit-log",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Assessing Crypto Volatility",
    "label": "Crypto Track",
    "body": "### Core Scenario: Volatility Assessment Techniques\nAssessing volatility in crypto markets is crucial for informed trading decisions during mid-session audits. This card teaches **how to evaluate volatility metrics effectively**.\n\n* **Volatility Indicators**: Utilize indicators such as Average True Range (ATR) and Bollinger Bands to quantify current market volatility and adjust trading strategies accordingly.\n* **Session-Based Analysis**: Conduct volatility assessments based on specific trading sessions, identifying patterns that may influence price behavior in real-time.\n* **Risk Assessment Framework**: Develop a framework for assessing risk exposure based on volatility readings, ensuring that position sizes align with market conditions.",
    "visualKey": "mid-session-audit-log",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Implementing Risk Management in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: Risk Management Strategies\nEffective risk management is essential for maintaining capital during mid-session audits in the crypto market. This card outlines **how to implement risk management strategies tailored for crypto volatility**.\n\n* **Position Sizing**: Calculate position sizes based on a fixed percentage of total capital, typically 1-2%, to mitigate potential losses during rapid price fluctuations.\n* **Stop-Loss Orders**: Utilize dynamic stop-loss orders that adjust with market volatility, ensuring they are set at levels that account for both technical analysis and market conditions.\n* **Diversification**: Spread risk across multiple crypto assets rather than concentrating on a single position, which helps in managing exposure during adverse market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies is critical to safeguarding capital in the inherently volatile crypto market.",
      "realLifeExample": "During a mid-session audit, Bitcoin experiences a 10% drop within minutes. A trader with a 2% position size and a stop-loss set at 5% above the entry price mitigates losses effectively.",
      "commonMistake": "Failing to adjust stop-loss levels in response to market volatility can lead to unnecessary losses.",
      "quickNote": "Always calculate position sizes and adjust stop-loss orders based on current market conditions.",
      "mentorText": "In my experience, always know your risk before entering a trade. If Bitcoin drops 10% unexpectedly, your stop-loss should be your safety net, not an afterthought.",
      "mentorAnalogy": "Think of risk management like a parachute for skydivers; it’s not just a backup, but a critical part of the plan to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Best Practices for Executing Trades in Crypto",
    "label": "Crypto Track",
    "body": "### Core Scenario: Trade Execution Techniques\nExecuting trades effectively during mid-session audits requires a disciplined approach to capitalize on real-time market insights. This card details **best practices for executing trades in the crypto market**.\n\n* **Market Orders vs. Limit Orders**: Use market orders for immediate execution during volatile conditions, while limit orders should be employed to enter at desired price levels when market conditions stabilize.\n* **Timing Execution**: Monitor order book depth and price action closely; execute trades when liquidity is optimal to avoid slippage and unfavorable fills.\n* **Confirmation Signals**: Wait for confirmation from multiple indicators (e.g., RSI, MACD) before executing trades to ensure alignment with market trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a cryptocurrency immediately at the current market price."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a cryptocurrency at a specified price or better."
        },
        {
          "term": "Order Book Depth",
          "definition": "A list of buy and sell orders for a cryptocurrency, showing the demand and supply at various price levels."
        }
      ],
      "whyThisMatters": "Effective execution strategies can significantly enhance profitability and minimize costs in the fast-moving crypto market.",
      "realLifeExample": "A trader observes Ethereum's price consolidating at $2,000. They place a limit order at $1,950 to capitalize on a potential bounce, while also placing a market order to enter immediately if it breaks above $2,050.",
      "commonMistake": "Relying solely on market orders in highly volatile conditions can lead to significant slippage and execution at unfavorable prices.",
      "quickNote": "Choose the right order type based on market conditions and always confirm signals before executing trades.",
      "mentorText": "When executing trades, think of it like a chess game; every move should be calculated and based on the current state of the board.",
      "mentorAnalogy": "Executing trades is like a surgeon making precise incisions; timing and technique are critical to achieving the desired outcome."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "practice",
    "title": "Crypto Trading Simulation Practice",
    "label": "Crypto Track",
    "body": "### Core Scenario: Managing Leverage and Margin\nEffective management of leverage and margin settings is critical during volatile market conditions. This simulation focuses on **practicing leverage and margin management in real-time scenarios**.\n\n* **Leverage Settings**: Adjust leverage based on market volatility; lower leverage in highly volatile conditions to reduce risk exposure.\n* **Margin Calls**: Monitor margin levels closely; be prepared to add funds or reduce positions to avoid margin calls during sharp price movements.\n* **Scenario Analysis**: Engage in simulated trading sessions where you apply different leverage settings and observe the impact on your margin and overall risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for an investor to deposit additional money to cover potential losses."
        },
        {
          "term": "Margin Level",
          "definition": "The ratio of equity to margin used in a trading account, expressed as a percentage."
        }
      ],
      "whyThisMatters": "Understanding how to manage leverage and margin effectively can prevent significant losses during extreme market fluctuations.",
      "realLifeExample": "In a simulated environment, a trader uses 10x leverage on a volatile altcoin and experiences a sudden 15% drop, leading to a margin call that requires immediate action to maintain their position.",
      "commonMistake": "Overleveraging during periods of high volatility can lead to rapid account depletion and margin calls.",
      "quickNote": "Practice adjusting leverage settings based on market conditions to safeguard your capital.",
      "mentorText": "In volatile markets, think of leverage as a double-edged sword; it can amplify gains but also magnify losses if not managed correctly.",
      "mentorAnalogy": "Managing leverage is like piloting a plane; you must adjust your altitude based on turbulence to ensure a smooth flight."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulation, you notice a sudden 20% drop in a leveraged position. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Increase your leverage to recover losses.",
          "isCorrect": false,
          "feedback": "Increasing leverage can exacerbate losses and lead to a margin call."
        },
        {
          "id": "1",
          "text": "Reduce your position size to lower risk.",
          "isCorrect": true,
          "feedback": "Reducing position size can help manage risk and avoid margin calls during volatility."
        },
        {
          "id": "2",
          "text": "Hold the position and wait for recovery.",
          "isCorrect": false,
          "feedback": "Holding without action can lead to further losses and potential liquidation."
        },
        {
          "id": "3",
          "text": "Add more funds to your account to maintain the position.",
          "isCorrect": false,
          "feedback": "While adding funds can prevent a margin call, it may not be the best strategy if the market continues to decline."
        }
      ]
    },
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "summary",
    "title": "Crypto Scenario Recap: Volatility Entry Summary",
    "label": "Crypto Track",
    "body": "### Crypto Mid-Session Audit: Leverage and Margin Mastery Review\nThis advanced recap synthesizes the critical leverage management and margin audit techniques covered in this module. Key takeaways include **the importance of dynamic risk management and crypto-specific execution strategies**.\n\n* **Risk Management**: Implement position sizing, dynamic stop-loss orders, and diversification to protect capital during market volatility.\n* **Trade Execution**: Utilize market and limit orders effectively, ensuring trades align with real-time market conditions and confirmation signals.\n* **Leverage and Margin Management**: Adjust leverage based on market volatility, monitor margin levels closely, and engage in scenario analysis to practice effective management.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        },
        {
          "term": "Trade Execution",
          "definition": "The process of completing a buy or sell order in the market."
        },
        {
          "term": "Leverage Management",
          "definition": "The practice of adjusting leverage settings to control risk exposure."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts is vital for maintaining profitability and managing risk in the crypto market.",
      "realLifeExample": "A trader successfully navigates a volatile session by applying risk management techniques, executing trades based on real-time insights, and managing leverage effectively.",
      "commonMistake": "Neglecting to audit positions regularly can lead to missed opportunities and unmanaged risk.",
      "quickNote": "Regularly audit your trading strategies and positions to adapt to changing market conditions.",
      "mentorText": "Always keep your strategies sharp and adaptable. The market changes rapidly, and so should your approach.",
      "mentorAnalogy": "Think of your trading strategy as a well-tuned engine; it requires regular checks and adjustments to perform optimally."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  }
];
