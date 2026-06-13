import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Perpetual Swap Mechanics",
    "label": "Core Track",
    "body": "### Core Mechanic: Perpetual Swap Overview\nPerpetual swaps allow traders to hold positions indefinitely without an expiration date, differing significantly from traditional futures. This card outlines **the mechanics of perpetual swaps and their implications for leverage and margin**.\n\n* **Leverage Utilization**: Perpetual swaps typically offer higher leverage compared to traditional futures, often up to 100x. Understand the risks associated with high leverage, as it can amplify both gains and losses significantly.\n* **Margin Requirements**: Unlike traditional futures, perpetual swaps require a maintenance margin that can change based on market volatility. Ensure to monitor margin levels closely to avoid forced liquidation during price fluctuations.\n* **Funding Rate Mechanism**: The funding rate is a periodic payment exchanged between long and short positions, designed to anchor the perpetual price to the spot price. Familiarize yourself with how this rate affects your overall position cost over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Swap",
          "definition": "A derivative that allows traders to hold positions indefinitely without expiration."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum amount of equity that must be maintained in a margin account."
        }
      ],
      "whyThisMatters": "Understanding perpetual swap mechanics is essential for optimizing leverage and managing margin effectively, which directly impacts trading performance.",
      "realLifeExample": "Trading BTC perpetual swaps with 50x leverage at a price of $30,000, where a 1% price move results in a $1,500 gain or loss on a $1,000 margin.",
      "commonMistake": "Failing to account for the impact of funding rates on the overall cost of holding a position.",
      "quickNote": "Perpetual swaps allow indefinite holding with unique margin and funding rate considerations.",
      "mentorText": "When trading perpetual swaps, always consider your leverage carefully. A small price movement can lead to significant gains or losses, so ensure your margin is sufficient to withstand volatility.",
      "mentorAnalogy": "Think of trading perpetual swaps like piloting a plane with adjustable altitude settings. Higher altitudes (leverage) can provide a better view (returns), but they also require more fuel (margin) to maintain stability."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Margin Requirements in Perpetual Contracts",
    "label": "Core Track",
    "body": "### Core Requirement: Margin in Perpetual Trading\nMargin requirements are critical for maintaining positions in perpetual contracts. This card details **initial and maintenance margins and their strategic implications**.\n\n* **Initial Margin**: This is the upfront capital required to open a position, typically expressed as a percentage of the total trade value. Ensure you have enough initial margin to enter trades without risking liquidation.\n* **Maintenance Margin**: This is the minimum equity percentage that must be maintained in your account to keep a position open. Falling below this level can trigger a margin call or liquidation, necessitating active monitoring.\n* **Dynamic Margin Adjustments**: Be aware that margin requirements can change based on market volatility. During high volatility, exchanges may increase margin requirements, impacting your ability to hold positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Initial Margin",
          "definition": "The amount of capital required to open a trading position."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity required to maintain an open position."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "A thorough understanding of margin requirements is essential for effective risk management and preventing unexpected liquidations.",
      "realLifeExample": "Entering a long position on ETH at $2,000 with an initial margin requirement of 10%, requiring $200 to open the trade, while maintaining a minimum equity of $100 to avoid liquidation.",
      "commonMistake": "Underestimating the impact of market volatility on margin requirements, leading to unexpected liquidations.",
      "quickNote": "Margin requirements dictate your ability to open and maintain positions in perpetual contracts.",
      "mentorText": "Always calculate your initial and maintenance margins before entering a trade. This ensures you have a clear understanding of your risk exposure and can avoid margin calls.",
      "mentorAnalogy": "Managing margin in trading is like ensuring a ship has enough ballast. Too little can lead to capsizing (liquidation), while too much can slow you down (excessive capital tied up)."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Dynamics of Funding Rates in Perpetual Markets",
    "label": "Core Track",
    "body": "### Core Mechanic: Funding Rate Dynamics\nFunding rates are a crucial component of perpetual contracts, influencing the cost of holding positions. This card explains **how funding rates are calculated and their strategic implications**.\n\n* **Calculation of Funding Rates**: Funding rates are typically calculated based on the difference between the perpetual contract price and the spot price, adjusted for interest rates. Monitor these rates regularly to assess the cost of holding positions.\n* **Impact on Position Costs**: Positive funding rates mean long positions pay shorts, while negative rates mean shorts pay longs. This can significantly affect your overall profitability, especially during extended holding periods.\n* **Strategic Positioning**: Use funding rate trends to inform your trading strategy. For example, if funding rates are consistently high, consider reducing exposure or closing positions to mitigate costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in a perpetual contract."
        },
        {
          "term": "Spot Price",
          "definition": "The current market price at which an asset can be bought or sold."
        },
        {
          "term": "Interest Rate Adjustment",
          "definition": "Modifications to funding rates based on prevailing interest rates."
        }
      ],
      "whyThisMatters": "Understanding funding rates allows traders to optimize their exposure and manage costs effectively over time.",
      "realLifeExample": "Holding a BTC position during a funding rate of 0.01% per 8 hours results in a cost of $3 for a $30,000 position, impacting overall profitability if held for several days.",
      "commonMistake": "Ignoring funding rates during position management, leading to unexpected costs that erode profits.",
      "quickNote": "Funding rates directly affect the cost of holding positions in perpetual contracts.",
      "mentorText": "Always factor in funding rates when holding positions. They can turn a profitable trade into a loss if not managed correctly.",
      "mentorAnalogy": "Think of funding rates like the interest on a loan. The longer you hold the loan (position), the more interest you pay, which can significantly affect your financial outcome."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidation Risk Factors",
    "label": "Core Track",
    "body": "### Core Risk: Liquidation Factors in Perpetual Contracts\nLiquidation risks are inherent in perpetual contracts, and understanding these factors is vital. This card focuses on **how to identify and assess liquidation risks**.\n\n* **Price Volatility**: High volatility can rapidly decrease account equity, increasing the likelihood of liquidation. Monitor historical volatility and adjust your positions accordingly to mitigate risk.\n* **Leverage Levels**: Higher leverage increases liquidation risk. Assess your leverage carefully and consider reducing it during uncertain market conditions to protect your capital.\n* **Margin Levels**: Keep a close watch on your maintenance margin level. If your equity approaches this threshold, consider reducing exposure or adding funds to avoid liquidation.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation",
          "definition": "The forced closure of a position when the account equity falls below the maintenance margin."
        },
        {
          "term": "Price Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Leverage Risk",
          "definition": "The risk associated with using borrowed capital to increase potential returns."
        }
      ],
      "whyThisMatters": "Identifying liquidation risks allows traders to implement proactive measures to protect their capital and maintain positions.",
      "realLifeExample": "A trader using 100x leverage on a $1,000 BTC position at $30,000 faces liquidation if BTC drops to $29,970, as the equity would fall below the maintenance margin.",
      "commonMistake": "Failing to adjust leverage or margin levels in response to changing market conditions, leading to unexpected liquidations.",
      "quickNote": "Proactively identifying liquidation risks is essential for capital preservation in perpetual trading.",
      "mentorText": "Always assess your liquidation risk before entering a trade. Adjust your leverage and margin levels based on market conditions to safeguard your capital.",
      "mentorAnalogy": "Managing liquidation risk is like a pilot monitoring fuel levels. Running low can lead to a crash (liquidation), so always ensure you have enough reserves to navigate turbulence."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Managing Slippage in Crypto Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Slippage Management in Crypto Trading\nSlippage occurs when the executed price of a trade differs from the expected price, particularly during high volatility. This card details **strategies to minimize slippage in BTC/ETH trading**.\n\n* **Identify High Volatility Periods**: Monitor news events and market sentiment indicators that typically lead to increased volatility. Avoid placing trades during these periods unless necessary.\n* **Use Limit Orders**: Implement limit orders instead of market orders to control the entry and exit prices. Set limit orders at strategic levels based on technical analysis to avoid slippage.\n* **Adjust Position Sizes**: Scale down position sizes during anticipated volatile periods. Smaller trades can reduce the impact of slippage on overall capital.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Minimizing slippage is critical for preserving capital and achieving favorable execution prices in volatile markets.",
      "realLifeExample": "During the BTC price surge to $45,000, a market order executed at $45,200 due to slippage, resulting in a 2% loss on the intended entry.",
      "commonMistake": "Traders often use market orders in volatile conditions, leading to unexpected execution prices.",
      "quickNote": "Limit orders are essential for controlling slippage during high volatility.",
      "mentorText": "When you anticipate volatility, always opt for limit orders. They give you control over your entry price, unlike market orders that can lead to slippage.",
      "mentorAnalogy": "Think of slippage like a pilot adjusting their flight path to avoid turbulence. Just as a pilot anticipates rough weather, you must anticipate market conditions to avoid slippage."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Order Types for Effective Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Utilizing Order Types in Perpetual Trading\nDifferent order types serve distinct purposes in crypto execution. This card outlines **how to effectively use market, limit, and stop orders in BTC/ETH trading**.\n\n* **Market Orders**: Execute trades immediately at the current market price. Use them for urgent entries or exits, but be aware of potential slippage.\n* **Limit Orders**: Set specific entry or exit prices to control execution. Ideal for entering at desired levels without incurring slippage, especially in volatile markets.\n* **Stop Orders**: Activate a market order once a specified price is reached. Use stop-loss orders to limit losses and stop-entry orders to capitalize on breakout scenarios.\n",
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
          "term": "Stop Order",
          "definition": "An order that becomes a market order once a specified price is reached."
        }
      ],
      "whyThisMatters": "Understanding order types enhances execution outcomes and allows traders to navigate market conditions effectively.",
      "realLifeExample": "A trader sets a limit order to buy ETH at $3,000. The market price reaches $3,000, executing the order without slippage, while a market order would have filled at $3,050.",
      "commonMistake": "Many traders fail to utilize limit orders, resulting in unnecessary slippage during execution.",
      "quickNote": "Different order types can significantly impact your execution strategy.",
      "mentorText": "Always choose the right order type for your strategy. Use market orders for speed, but limit orders for precision.",
      "mentorAnalogy": "Selecting the right order type is like a chef choosing the right cooking method. Each method has its purpose and outcome; choose wisely for the best results."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Impact of Market Volatility on Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Execution Strategies in Volatile Markets\nMarket volatility significantly influences execution strategies in perpetual contracts. This card examines **how to time entries and exits effectively during volatile periods**.\n\n* **Timing Entries**: Enter trades when volatility is expected to stabilize post-news events. Avoid entering during the peak of volatility to minimize slippage.\n* **Exit Strategies**: Use trailing stops to lock in profits during volatile price movements. This allows for capturing gains while protecting against sudden reversals.\n* **Adjusting Execution Plans**: Be prepared to modify your execution strategy based on real-time volatility indicators, such as the Average True Range (ATR). Adjust stop-loss levels accordingly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time, often influenced by news and market sentiment."
        },
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to protect profits."
        }
      ],
      "whyThisMatters": "Understanding volatility's impact on execution allows traders to optimize their performance and manage risk effectively.",
      "realLifeExample": "After a major announcement, BTC volatility spikes, and a trader waits for a 10% drop in ATR before entering a position, avoiding slippage.",
      "commonMistake": "Traders often enter positions during extreme volatility, leading to unfavorable execution prices.",
      "quickNote": "Timing is crucial; avoid trading during peak volatility.",
      "mentorText": "Always assess the volatility before executing. Entering too early can lead to slippage and losses.",
      "mentorAnalogy": "Navigating market volatility is like a surgeon timing their incision. Precision is key; rushing can lead to complications."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Advanced Risk Management Strategies",
    "label": "Core Track",
    "body": "### Core Scenario: Risk Management in Perpetual Trading\nEffective risk management is essential for long-term success in perpetual trading. This card discusses **advanced techniques for position sizing, stop-loss placement, and diversification**.\n\n* **Position Sizing**: Calculate position sizes based on account equity and risk tolerance. Use the Kelly Criterion to determine optimal bet sizes in volatile markets.\n* **Stop-Loss Placement**: Set stop-loss orders based on technical levels, such as support and resistance. Avoid placing stops too close to the market price to prevent premature exits.\n* **Diversification Strategies**: Spread risk across multiple crypto assets to mitigate exposure. Consider correlating assets and their volatility profiles when constructing a diversified portfolio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a trade based on risk management principles."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Advanced risk management techniques are vital for protecting capital and enhancing trading longevity in volatile markets.",
      "realLifeExample": "A trader with a $10,000 account sizes a BTC position to risk only 2% ($200) based on technical analysis, placing a stop-loss below a key support level.",
      "commonMistake": "Traders often neglect proper position sizing, leading to excessive risk exposure.",
      "quickNote": "Effective risk management is the backbone of sustainable trading.",
      "mentorText": "Always calculate your position size before entering a trade. Protect your capital by knowing how much you're willing to risk.",
      "mentorAnalogy": "Think of risk management like a safety net for a tightrope walker. It’s essential to ensure you don’t fall too far if something goes wrong."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Practical Scenarios for Liquidation Management",
    "label": "Core Track",
    "body": "### Core Scenario: Liquidation Management Exercises\nEngaging in simulated liquidation scenarios sharpens risk management skills essential for perpetual trading. This card focuses on **applying liquidation strategies through practical exercises**.\n\n* **Scenario Simulation**: Create hypothetical situations where BTC drops 10% in a volatile market. Identify risk factors such as leverage used and potential liquidation prices based on entry points.\n* **Risk Factor Assessment**: Evaluate the impact of funding rates on liquidation thresholds. Calculate how a 0.05% funding rate affects your position's viability during a downturn.\n* **Mitigation Strategies**: Develop a plan to reduce exposure, such as adjusting leverage or implementing stop-loss orders when nearing liquidation levels. Ensure that these strategies are executed within a defined risk tolerance framework.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation",
          "definition": "The process of closing a position when the margin falls below the required maintenance level."
        }
      ],
      "whyThisMatters": "Understanding liquidation scenarios is critical for preserving capital and maintaining a sustainable trading strategy in perpetual markets.",
      "realLifeExample": "Simulating a scenario where ETH drops from $2,000 to $1,800 while holding a 10x leveraged position, resulting in a liquidation price of $1,950.",
      "commonMistake": "Failing to account for funding rate changes that can unexpectedly alter liquidation thresholds.",
      "quickNote": "Simulate various liquidation scenarios to enhance risk management skills.",
      "mentorText": "Imagine you're in a high-stakes game. Each decision you make can lead to a win or a loss. By practicing liquidation scenarios, you prepare yourself for the unexpected.",
      "mentorAnalogy": "Think of this like a pilot practicing emergency landings. Each scenario prepares you for real-life turbulence in the market."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Perpetual Trading",
    "label": "Core Track",
    "body": "### Core Scenario: Emotional Control in Trading\nNavigating the psychological landscape of perpetual trading is essential for consistent performance. This card delves into **strategies for maintaining emotional discipline**.\n\n* **Identifying Emotional Triggers**: Recognize common triggers such as rapid market fluctuations that induce fear or greed. Document instances when emotions influenced your trading decisions.\n* **Discipline Techniques**: Implement techniques such as pre-defined entry and exit points to minimize emotional decision-making. Stick to your trading plan regardless of market noise.\n* **Reflection and Adjustment**: After each trading session, reflect on emotional responses and their impact on your trades. Adjust your strategy to incorporate lessons learned from emotional experiences.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Discipline",
          "definition": "The ability to manage emotions effectively to make rational trading decisions."
        }
      ],
      "whyThisMatters": "Psychological resilience is vital for traders to avoid impulsive decisions that can lead to significant losses.",
      "realLifeExample": "During a market dip, a trader sells BTC at $25,000 due to panic, only to see it rebound to $28,000 shortly after, illustrating the cost of emotional trading.",
      "commonMistake": "Allowing fear of loss to dictate trading decisions, leading to premature exits from profitable positions.",
      "quickNote": "Master emotional control to enhance trading performance.",
      "mentorText": "Trading is as much about mental fortitude as it is about strategy. Recognize your emotional triggers and learn to manage them effectively.",
      "mentorAnalogy": "Consider a surgeon who must remain calm during a critical operation. Emotional control is essential for making the right decisions under pressure."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "The Importance of a Trading Journal",
    "label": "Core Track",
    "body": "### Core Scenario: Journal Maintenance for Performance Tracking\nA trading journal is a powerful tool for enhancing performance in perpetual markets. This card emphasizes **the systematic documentation of trades and emotional responses**.\n\n* **Trade Documentation**: Record every trade, including entry and exit points, position size, and rationale behind each decision. This creates a comprehensive record for future analysis.\n* **Emotional Reflection**: After each trading session, note emotional states experienced during trades. Categorize these emotions to identify patterns that may affect decision-making.\n* **Performance Review**: Regularly review your journal to assess trade outcomes and emotional responses. Use this data to refine strategies and improve future performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Journal",
          "definition": "A systematic record of trades, decisions, and emotional responses to enhance performance."
        }
      ],
      "whyThisMatters": "Maintaining a trading journal allows traders to learn from past experiences, leading to improved decision-making and performance.",
      "realLifeExample": "A trader reviews their journal and discovers that emotional trading led to a 30% loss over three months, prompting a strategy overhaul.",
      "commonMistake": "Neglecting to document trades consistently, leading to missed opportunities for learning and improvement.",
      "quickNote": "A trading journal is essential for tracking performance and emotional responses.",
      "mentorText": "Think of your trading journal as a personal coach. It highlights your strengths and weaknesses, guiding you toward better decisions.",
      "mentorAnalogy": "Just as an athlete reviews game footage to improve performance, a trader must analyze their past trades to enhance future outcomes."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Market Analysis Techniques for Perpetual Trading",
    "label": "Core Track",
    "body": "### Core Scenario: Tailored Market Analysis for Perpetual Strategies\nEffective market analysis is crucial for successful perpetual trading. This card outlines **specific techniques for analyzing market conditions**.\n\n* **Technical Analysis Tools**: Utilize indicators such as moving averages and RSI to identify market trends and potential reversal points. Apply these tools to BTC/ETH charts for real-time analysis.\n* **Fundamental Analysis Integration**: Assess macroeconomic factors affecting cryptocurrency markets, such as regulatory news or technological advancements. Determine how these factors influence market sentiment and price action.\n* **Combining Approaches**: Develop a hybrid analysis strategy that incorporates both technical and fundamental insights. For example, use technical indicators to time entries while considering fundamental news for overall market direction.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Analysis",
          "definition": "The study of price movements and patterns to forecast future market behavior."
        }
      ],
      "whyThisMatters": "Mastering market analysis techniques allows traders to make informed decisions and adapt strategies to changing market conditions.",
      "realLifeExample": "Analyzing ETH's price action during a major regulatory announcement, where a bullish trend was confirmed by a breakout above the 200-day moving average.",
      "commonMistake": "Relying solely on one analysis method, leading to a lack of comprehensive market understanding.",
      "quickNote": "Combine technical and fundamental analysis for effective perpetual trading.",
      "mentorText": "Market analysis is your compass. Use it to navigate the complexities of perpetual trading and make informed decisions.",
      "mentorAnalogy": "Think of a ship captain using both radar and weather reports to chart a safe course. In trading, you need both technical and fundamental insights to guide your strategy."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Synthesizing Trading Strategies for Perpetuals",
    "label": "Core Track",
    "body": "### Core Strategy: Integrating Perpetual Trading Approaches\nA cohesive trading strategy for perpetual contracts requires the integration of various methodologies tailored to market conditions. This card outlines **how to synthesize multiple strategies into a unified execution plan**.\n\n* **Strategy Selection Criteria**: Evaluate market volatility and liquidity to determine which strategy (scalping, swing trading, or trend following) is most applicable. For instance, in a high-volatility BTC market, a scalping approach may yield better results.\n* **Execution Timing Alignment**: Align your strategy with funding rate windows to optimize entry and exit points. For example, executing a long position on ETH just before a favorable funding rate adjustment can enhance profitability.\n* **Risk Diversification**: Implement a diversified approach by allocating capital across different strategies. For example, allocate 60% of your capital to a trend-following strategy and 40% to a mean-reversion strategy based on current market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "A type of futures contract without an expiration date, allowing for continuous trading."
        },
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Synthesizing strategies allows traders to adapt to changing market conditions, maximizing potential returns while managing risk effectively.",
      "realLifeExample": "During a high volatility period in BTC, a trader combines scalping and trend-following strategies, executing a long position at $45,000 just before a positive funding rate adjustment, capturing a 3% gain within hours.",
      "commonMistake": "Failing to adapt strategies to current market conditions can lead to significant losses, particularly in volatile environments.",
      "quickNote": "Integrate multiple trading strategies to enhance execution effectiveness in perpetual contracts.",
      "mentorText": "When trading perpetuals, think of your strategies as tools in a toolbox. Use the right tool for the right job, and don’t hesitate to switch tools as market conditions change.",
      "mentorAnalogy": "Just as an architect combines various structural designs to create a cohesive building, a trader must blend different strategies to construct a robust trading plan."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "practice",
    "title": "Summary of Crypto Execution Specifics",
    "label": "Core Track",
    "body": "### Core Review: Key Concepts in Crypto Execution\nMastering the specifics of crypto execution is essential for effective trading in perpetual markets. This card reinforces **the critical elements of perp mechanics, funding rates, and slippage management**.\n\n* **Perpetual Mechanics**: Understand how perpetual contracts function, including the absence of expiration and the role of funding rates in maintaining price alignment with spot markets. For instance, if BTC trades at $45,500 with a funding rate of 0.01%, traders must account for this cost in their strategies.\n* **Funding Rate Timing**: Identify optimal entry and exit points based on funding rate schedules. For example, entering a short position on ETH just before a negative funding rate can enhance profitability by reducing holding costs.\n* **Slippage Management**: Implement strategies to minimize slippage during high volatility. For example, using limit orders instead of market orders when trading BTC during major news events can help maintain desired entry prices.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a cryptocurrency at a specific price or better."
        }
      ],
      "whyThisMatters": "A thorough understanding of these concepts ensures traders can navigate the complexities of perpetual contracts effectively, enhancing their overall trading performance.",
      "realLifeExample": "A trader executes a limit order for BTC at $45,000 during a news event, avoiding slippage that could have occurred with a market order, thus securing a better entry price.",
      "commonMistake": "Overlooking the impact of funding rates on trade profitability can lead to unexpected losses, particularly in long-held positions.",
      "quickNote": "Reinforce your understanding of perp mechanics, funding rates, and slippage to enhance execution precision.",
      "mentorText": "Reviewing these concepts is like studying the specifications of an aircraft before flight. You must know how everything works to ensure a successful trading experience.",
      "mentorAnalogy": "Just as a chef meticulously prepares ingredients before cooking, a trader must understand execution specifics to create a successful trading outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary reason to use limit orders instead of market orders in volatile conditions?",
      "options": [
        {
          "id": "0",
          "text": "To avoid slippage and secure a desired entry price.",
          "isCorrect": true,
          "feedback": "Correct. Limit orders help manage slippage by allowing traders to specify their desired price."
        },
        {
          "id": "1",
          "text": "To guarantee a trade will be executed immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Market orders are used for immediate execution, but they can incur slippage."
        },
        {
          "id": "2",
          "text": "To increase the size of the trade.",
          "isCorrect": false,
          "feedback": "Incorrect. The order type does not affect the size of the trade."
        },
        {
          "id": "3",
          "text": "To avoid paying trading fees.",
          "isCorrect": false,
          "feedback": "Incorrect. Trading fees apply to both order types."
        }
      ]
    },
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "summary",
    "title": "Execution Simulations for Mastery",
    "label": "Core Track",
    "body": "### Core Practice: Simulated Trading Scenarios\nParticipating in simulated trading scenarios reinforces understanding of perpetual execution mechanics. This card emphasizes **the importance of practicing execution strategies in a controlled environment**.\n\n* **Scenario-Based Training**: Engage in simulations that replicate real market conditions, focusing on funding rate adjustments and slippage occurrences. For example, simulate a trading session where BTC experiences a sudden price drop of 5% and analyze how to manage your positions effectively.\n* **Risk Management Application**: Apply risk management techniques within simulations to understand their impact on trade outcomes. For instance, practice setting stop-loss orders based on volatility metrics during simulated trading sessions.\n* **Performance Review**: After each simulation, conduct a thorough analysis of decision-making processes and outcomes. Identify areas for improvement, such as timing of entries and exits relative to funding rates.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment using virtual capital."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit potential losses."
        }
      ],
      "whyThisMatters": "Simulated trading allows traders to refine their execution skills without financial risk, leading to better performance in live markets.",
      "realLifeExample": "In a simulation, a trader practices entering a long position on ETH during a funding rate shift, successfully managing a 2% slippage and exiting at a profit after 30 minutes.",
      "commonMistake": "Failing to treat simulations with the same seriousness as live trading can lead to poor habit formation.",
      "quickNote": "Utilize simulations to practice execution mechanics and refine risk management strategies.",
      "mentorText": "Think of simulations as your training ground. Just like a pilot practices in a simulator, you must hone your skills in a risk-free environment before taking off in live markets.",
      "mentorAnalogy": "Like a surgeon rehearsing a procedure on a dummy, traders must practice execution strategies to ensure precision and confidence in real scenarios."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  }
];
