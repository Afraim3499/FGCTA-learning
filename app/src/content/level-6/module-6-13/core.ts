import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Spot-Perp Discrepancies",
    "label": "Core Track",
    "body": "### Core Scenario: Spot-Perpetual Price Analysis\nIdentifying discrepancies between spot and perpetual futures prices is critical for informed trade execution and risk management. This card teaches **how to analyze these discrepancies effectively**.\n\n* **Price Comparison Metrics**: Calculate the percentage difference between spot and perpetual prices, focusing on values exceeding 1% as potential indicators of misalignment.\n* **Market Sentiment Indicators**: Monitor sentiment shifts in the underlying asset; a bullish sentiment in spot with bearish futures may suggest a short squeeze opportunity.\n* **Execution Timing**: Execute trades when discrepancies align with market news or events, ensuring that the timing capitalizes on volatility rather than lagging behind market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Price",
          "definition": "The current market price at which an asset can be bought or sold for immediate delivery."
        },
        {
          "term": "Perpetual Futures",
          "definition": "A type of futures contract that does not have an expiration date, allowing for continuous trading."
        }
      ],
      "whyThisMatters": "Understanding spot-perp discrepancies allows traders to optimize entry and exit points, enhancing risk management strategies.",
      "realLifeExample": "On September 15, 2023, Bitcoin's spot price was $26,000 while perpetual futures traded at $25,700, indicating a 1.15% discrepancy that could trigger a long position if market sentiment supports upward movement.",
      "commonMistake": "Traders often overlook minor discrepancies, failing to act on significant price differences that can lead to missed opportunities.",
      "quickNote": "Analyze spot-perp discrepancies to refine trade execution strategies.",
      "mentorText": "When you spot a significant difference between spot and perpetual prices, think of it as a potential mispricing in the market. Act decisively to leverage that gap before it corrects.",
      "mentorAnalogy": "Consider this like an aerospace engineer identifying discrepancies in aircraft performance metrics; addressing these gaps is crucial for optimal flight safety and efficiency."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Liquidation Triggers in Crypto Trading",
    "label": "Core Track",
    "body": "### Core Scenario: Identifying Liquidation Triggers\nUnderstanding the factors that trigger liquidations is essential for risk management in crypto trading. This card teaches **how to incorporate liquidation triggers into your pre-execution checklist**.\n\n* **Margin Requirements**: Monitor margin levels closely; a drop below the maintenance margin can trigger automatic liquidation of positions.\n* **Volatility Thresholds**: Identify price volatility thresholds that, when breached, can lead to cascading liquidations across leveraged positions in the market.\n* **Order Book Analysis**: Analyze the order book for large sell orders that may trigger liquidations, especially during high volatility periods, to anticipate potential market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation",
          "definition": "The process of closing a trader's position when the account equity falls below the required margin."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Incorporating liquidation triggers into your checklist helps mitigate risks associated with sudden market movements and protects capital.",
      "realLifeExample": "On October 5, 2023, Ethereum experienced a sharp decline from $1,800 to $1,650, triggering liquidations for over $100 million in leveraged positions due to margin calls across multiple exchanges.",
      "commonMistake": "Traders often ignore the impact of market volatility on liquidation risks, leading to unexpected losses during rapid price movements.",
      "quickNote": "Identify and monitor liquidation triggers to safeguard your trading positions.",
      "mentorText": "Always keep an eye on margin levels and volatility; they are your first line of defense against unexpected liquidations. A small shift can lead to significant losses.",
      "mentorAnalogy": "Think of this like a surgeon monitoring vital signs during an operation; any deviation from normal can lead to critical consequences if not addressed immediately."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Evaluating Market Depth for Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Market Depth Assessment\nAssessing market depth is crucial for ensuring optimal execution of trades. This card teaches **how to evaluate market depth in relation to spot-perp discrepancies and liquidations**.\n\n* **Order Book Insights**: Analyze the order book to determine the volume of buy and sell orders at various price levels, identifying potential support and resistance zones.\n* **Slippage Calculation**: Estimate potential slippage by comparing the depth of the order book against your intended trade size, ensuring that large orders do not adversely affect execution prices.\n* **Impact of Large Orders**: Monitor for large orders that can shift market depth significantly; these can create opportunities or risks depending on their direction relative to your position.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Depth",
          "definition": "The measure of the supply and demand for an asset at various price levels."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Evaluating market depth allows traders to execute trades more effectively, minimizing slippage and maximizing profit potential.",
      "realLifeExample": "On November 10, 2023, a large sell order for Litecoin at $70 caused a significant drop in market depth, leading to slippage of 2% for traders attempting to sell at that price level.",
      "commonMistake": "Traders frequently underestimate the impact of market depth on execution, leading to unexpected costs and poor trade outcomes.",
      "quickNote": "Assess market depth to enhance trade execution and minimize slippage.",
      "mentorText": "Before executing a trade, always check the order book. Understanding market depth can save you from costly slippage and ensure you get the best possible price.",
      "mentorAnalogy": "Consider this like an architect assessing the load-bearing capacity of a structure; understanding the depth of support is essential for a stable and successful build."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Impact of Funding Rates on Trade Decisions",
    "label": "Core Track",
    "body": "### Core Scenario: Funding Rate Analysis\nUnderstanding how funding rates influence trading decisions is vital for effective risk management. This card teaches **the importance of including funding rates in your pre-execution checklist**.\n\n* **Funding Rate Calculation**: Regularly calculate the funding rate for perpetual contracts to assess the cost of holding a position over time, especially during high volatility periods.\n* **Long vs. Short Considerations**: Analyze whether the funding rate favors long or short positions; a high funding rate for longs may deter holding a long position if costs outweigh potential gains.\n* **Market Sentiment Reflection**: Use funding rates as a sentiment indicator; extreme funding rates can signal market overexuberance or fear, guiding entry and exit strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts, reflecting the cost of holding a position."
        },
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows traders to speculate on the price of an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Incorporating funding rates into your checklist helps avoid unexpected costs and enhances decision-making in volatile markets.",
      "realLifeExample": "On December 1, 2023, the funding rate for Bitcoin perpetual contracts surged to 0.1% per 8 hours, prompting traders to reconsider long positions as the cost of holding became significant amid declining prices.",
      "commonMistake": "Traders often neglect funding rates, leading to unforeseen costs that can erode profits or exacerbate losses.",
      "quickNote": "Include funding rates in your checklist to avoid unexpected holding costs.",
      "mentorText": "Always factor in funding rates when planning your trades. They can significantly impact your overall profitability and should never be overlooked.",
      "mentorAnalogy": "Think of funding rates like the interest on a loan; understanding the cost of borrowing is essential for making sound financial decisions."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Risk Assessment of Liquidation Levels",
    "label": "Core Track",
    "body": "### Core Scenario: Liquidation Level Risk Assessment\nAssessing liquidation levels is essential for identifying potential market disruptions and managing exposure effectively. This card teaches **how to evaluate the risk associated with various liquidation thresholds**.\n\n* **Liquidation Threshold Identification**: Determine key liquidation levels by analyzing open interest and margin requirements across exchanges. For instance, if Bitcoin is trading at $30,000 and a significant number of long positions are liquidated at $29,500, this level becomes critical.\n* **Risk Exposure Calculation**: Calculate the potential impact of liquidation events on your portfolio. If a trader holds 1 BTC at $30,000, a liquidation at $29,500 could result in a 1.67% loss, necessitating a risk management strategy.\n* **Market Sentiment Analysis**: Monitor sentiment indicators and order book data to gauge the likelihood of reaching liquidation levels. A sudden influx of sell orders near a liquidation threshold can signal increased risk, prompting a reassessment of positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Level",
          "definition": "The price point at which a trader's margin account is closed due to insufficient equity."
        }
      ],
      "whyThisMatters": "Understanding liquidation levels helps traders avoid significant losses and adjust strategies proactively.",
      "realLifeExample": "Ethereum trading at $2,000 with liquidation levels clustered around $1,950. A sudden drop triggers a 5% market sell-off, impacting long positions significantly.",
      "commonMistake": "Failing to adjust position sizes based on proximity to liquidation levels can lead to unexpected losses.",
      "quickNote": "Assess liquidation levels to manage risk effectively before executing trades.",
      "mentorText": "When evaluating liquidation levels, always consider how close your positions are to these thresholds. If you're within a risky range, it’s time to reassess your exposure.",
      "mentorAnalogy": "Think of liquidation levels like a dam holding back water. If the water rises too high, the dam will break, causing a flood. You must monitor the water level to prevent disaster."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Spot Market Volatility Analysis",
    "label": "Core Track",
    "body": "### Core Scenario: Analyzing Spot Market Volatility\nSpot market volatility directly influences trade execution and risk management strategies. This card teaches **how to analyze volatility to anticipate price swings**.\n\n* **Volatility Metrics Calculation**: Use standard deviation and average true range (ATR) to quantify spot market volatility. For example, if Bitcoin's ATR is $1,000, expect potential price swings of that magnitude during high volatility periods.\n* **Impact on Execution Timing**: Assess how volatility affects your entry and exit points. A spike in volatility may require wider stop-loss orders to avoid premature exits, especially if BTC is fluctuating between $29,000 and $31,000.\n* **Correlation with Liquidation Events**: Identify correlations between spot volatility and liquidation spikes. For instance, if Ethereum's price swings exceed 5% in a day, liquidation events often follow, necessitating caution in trade execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility by decomposing the entire range of an asset price for a specific period."
        }
      ],
      "whyThisMatters": "Recognizing volatility patterns allows traders to adjust their strategies and avoid unfavorable execution conditions.",
      "realLifeExample": "During a news event, Bitcoin experiences a 10% spike in volatility, moving from $30,000 to $33,000 in under an hour, impacting execution strategies significantly.",
      "commonMistake": "Ignoring volatility spikes can lead to slippage and poor trade execution outcomes.",
      "quickNote": "Analyze spot market volatility to anticipate price swings and adjust execution strategies accordingly.",
      "mentorText": "When you see volatility increasing, it’s a signal to tighten your execution strategy. Adjust your stops and be prepared for rapid price movements.",
      "mentorAnalogy": "Consider analyzing volatility like a pilot monitoring turbulence. Just as a pilot adjusts altitude to avoid rough air, you must adjust your trading strategy to navigate volatile markets."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Building Your Pre-Execution Scenario Checklist",
    "label": "Core Track",
    "body": "### Core Scenario: Developing a Pre-Execution Checklist\nA comprehensive pre-execution checklist ensures all critical factors are considered before placing trades. This card teaches **how to create a detailed checklist incorporating spot-perp discrepancies and liquidation risks**.\n\n* **Checklist Components**: Include essential elements such as current spot prices, liquidation levels, and open interest. For example, if Bitcoin is at $30,000 with a liquidation level at $29,500, this should be prominently noted in your checklist.\n* **Spot-Perp Discrepancy Analysis**: Evaluate discrepancies between spot and perpetual futures prices. If the spot price is $30,000 and the perp price is $30,500, this indicates a potential arbitrage opportunity or risk, which must be included in your checklist.\n* **Risk Mitigation Strategies**: Outline specific actions based on checklist findings. For instance, if liquidation risks are high, consider reducing position sizes or adjusting stop-loss orders to mitigate potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perpetual Discrepancy",
          "definition": "The difference between the spot price of an asset and the price of its perpetual futures contract."
        }
      ],
      "whyThisMatters": "A structured checklist minimizes oversight and enhances decision-making efficiency in volatile markets.",
      "realLifeExample": "Before executing a trade, a trader notes Bitcoin's spot price at $30,000, a liquidation level at $29,500, and a perp price at $30,500, prompting a cautious approach.",
      "commonMistake": "Omitting critical factors from the checklist can lead to unpreparedness and increased risk exposure.",
      "quickNote": "Develop a thorough pre-execution checklist to ensure all critical factors are accounted for.",
      "mentorText": "Creating a checklist is like preparing for a flight. You must ensure all systems are go before taking off to avoid mid-air issues.",
      "mentorAnalogy": "Think of your checklist as a surgeon's pre-operation checklist. Every step must be verified to ensure a successful outcome without complications."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Analyzing Historical Liquidation Events",
    "label": "Core Track",
    "body": "### Core Scenario: Historical Liquidation Event Analysis\nUnderstanding historical liquidation events provides insights into market behavior and risk management. This card teaches **how to analyze past liquidation events to inform your pre-execution checklist**.\n\n* **Data Collection and Review**: Gather data on past liquidation events, noting price levels, market conditions, and volume. For example, during a significant downturn, if Bitcoin liquidated 20% of long positions at $28,000, this data should be analyzed for future reference.\n* **Pattern Recognition**: Identify patterns in liquidation events, such as recurring price levels or market catalysts. If liquidations frequently occur around major news announcements, this should inform your trading strategy and checklist.\n* **Risk Assessment Integration**: Incorporate findings into your risk assessment framework. If historical data shows that a specific level often triggers liquidations, adjust your strategies accordingly to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Historical Liquidation Event",
          "definition": "A past occurrence where a significant number of positions were liquidated due to price movements."
        }
      ],
      "whyThisMatters": "Analyzing historical liquidation events enhances risk management by providing a framework for anticipating future risks.",
      "realLifeExample": "Reviewing data from a past event where Ethereum liquidated at $1,800 reveals that similar conditions led to significant sell-offs, informing current trading strategies.",
      "commonMistake": "Failing to analyze historical events can lead to repeating past mistakes and increased risk exposure.",
      "quickNote": "Analyze historical liquidation events to identify patterns and enhance risk management strategies.",
      "mentorText": "Look back at past liquidation events to understand what triggered them. This knowledge will help you navigate future risks more effectively.",
      "mentorAnalogy": "Think of analyzing historical liquidation events like studying past flight patterns to avoid turbulence. By understanding what caused issues before, you can better prepare for future flights."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Integrating Technical Indicators into Checklists",
    "label": "Core Track",
    "body": "### Core Scenario: Technical Indicator Integration\nIntegrating technical indicators into your pre-execution checklist enhances your ability to identify discrepancies between spot and perpetual contracts. This card details **how to select and apply relevant indicators effectively**.\n\n* **Indicator Selection Criteria**: Choose indicators that align with your trading strategy, such as RSI for momentum or MACD for trend confirmation, ensuring they are relevant to the specific crypto asset.\n* **Checklist Application**: Incorporate indicators into your checklist by defining threshold levels that trigger action; for example, an RSI above 70 may indicate overbought conditions, prompting a review of potential liquidations.\n* **Dynamic Adjustments**: Continuously adjust your checklist based on market conditions; if a significant divergence occurs, such as a 5% difference between spot and perp prices, reassess your indicators' relevance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Mathematical calculations based on price and volume data used to forecast market behavior."
        }
      ],
      "whyThisMatters": "Incorporating technical indicators into your checklist allows for a systematic approach to identifying market discrepancies and potential liquidation points.",
      "realLifeExample": "During a recent BTC trading session, the RSI indicated overbought conditions at 75 while the spot price diverged 4% from the perp price, prompting a reevaluation of entry points.",
      "commonMistake": "Traders often neglect to adjust their indicators based on changing market conditions, leading to outdated assessments.",
      "quickNote": "Select and apply relevant technical indicators to enhance your pre-execution checklist.",
      "mentorText": "When integrating indicators, think of them as your navigational tools. If your RSI shows overbought levels, it’s time to reassess your position before executing.",
      "mentorAnalogy": "Just as a pilot uses instruments to navigate through changing weather conditions, you must rely on technical indicators to guide your trading decisions amidst market volatility."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Identifying Market Sentiment Indicators",
    "label": "Core Track",
    "body": "### Core Scenario: Market Sentiment Analysis\nIdentifying market sentiment indicators is crucial for refining your pre-execution checklist, as they directly influence spot and perp pricing. This card outlines **how to effectively gauge market sentiment**.\n\n* **Sentiment Sources**: Utilize social media trends, news sentiment analysis, and on-chain metrics to assess market mood; for instance, a surge in positive tweets about ETH could indicate bullish sentiment.\n* **Quantitative Metrics**: Incorporate metrics such as the Fear & Greed Index or funding rates into your checklist, as these can signal potential market reversals or continuation patterns.\n* **Real-Time Adjustments**: Be prepared to adjust your trading strategy based on sentiment shifts; for example, if negative news causes a rapid decline in sentiment, consider tightening stop-loss orders to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or market."
        }
      ],
      "whyThisMatters": "Understanding market sentiment helps anticipate price movements, allowing for more informed decision-making in your trading strategy.",
      "realLifeExample": "After a negative regulatory announcement regarding USDT, sentiment metrics dropped significantly, leading to a 10% decline in perp prices relative to spot prices.",
      "commonMistake": "Traders often overlook sentiment indicators, relying solely on technical analysis, which can lead to misjudgments in volatile markets.",
      "quickNote": "Incorporate sentiment indicators into your checklist to gauge market mood and adjust strategies accordingly.",
      "mentorText": "Think of market sentiment as the crowd's mood at a concert. If the crowd is excited, prices may rise; if they’re leaving early, it’s time to reconsider your position.",
      "mentorAnalogy": "Like a chef adjusting seasoning based on the taste of the dish, you must adapt your trading strategy based on the prevailing market sentiment."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Utilizing Order Book Analysis",
    "label": "Core Track",
    "body": "### Core Scenario: Order Book Insights\nUtilizing order book analysis enhances your pre-execution checklist by identifying potential discrepancies and liquidation risks. This card explains **how to interpret order book data effectively**.\n\n* **Bid-Ask Spread Evaluation**: Monitor the bid-ask spread; a widening spread may indicate decreased liquidity, signaling potential price volatility and liquidation risks.\n* **Large Order Detection**: Identify large buy or sell orders that could impact market dynamics; for example, a sudden large sell order on the order book for LTC could trigger a cascade of liquidations if it pushes prices below support levels.\n* **Depth of Market Analysis**: Assess the depth of the order book to understand market sentiment; a significant imbalance in buy versus sell orders can indicate potential price movements and liquidation triggers.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset, showing the interest in that asset at various price levels."
        }
      ],
      "whyThisMatters": "Effective order book analysis allows traders to anticipate price movements and potential liquidation events, enhancing decision-making.",
      "realLifeExample": "During a recent trading session, a large sell order for XRP appeared on the order book, leading to a 7% drop in price and triggering liquidations across multiple exchanges.",
      "commonMistake": "Traders often misinterpret order book data, failing to recognize the significance of large orders and their potential impact on market prices.",
      "quickNote": "Leverage order book analysis to identify discrepancies and assess liquidation risks in your pre-execution checklist.",
      "mentorText": "When analyzing the order book, think of it as a live pulse of the market. Large orders can signal impending moves, so pay attention to the shifts.",
      "mentorAnalogy": "Just as a surgeon monitors vital signs during an operation, you must keep a close eye on the order book to gauge market health and potential risks."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Evaluating Exchange Liquidity Conditions",
    "label": "Core Track",
    "body": "### Core Scenario: Liquidity Assessment\nEvaluating exchange liquidity conditions is essential for ensuring your checklist accounts for liquidity-related risks. This card focuses on **how to assess liquidity effectively**.\n\n* **Liquidity Metrics**: Analyze metrics such as trading volume and order book depth to gauge liquidity; for instance, a trading volume of $50 million in a 24-hour period indicates healthy liquidity for BTC.\n* **Market Impact Analysis**: Consider the impact of liquidity on trade execution; low liquidity may result in slippage, affecting the execution price of your orders, particularly during high volatility events.\n* **Exchange Comparison**: Compare liquidity across different exchanges; if one exchange shows significantly higher liquidity for ETH, prioritize executing trades there to minimize execution risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding liquidity conditions helps mitigate execution risks and enhances the reliability of your trading strategy.",
      "realLifeExample": "During a market downturn, BTC liquidity dropped significantly on one exchange, leading to a 12% slippage on large orders compared to more liquid exchanges.",
      "commonMistake": "Traders often underestimate the importance of liquidity, leading to unexpected slippage and execution issues during volatile periods.",
      "quickNote": "Assess exchange liquidity conditions to ensure your checklist accounts for potential execution risks.",
      "mentorText": "When evaluating liquidity, think of it as the water level in a reservoir. Low levels can lead to droughts in trading opportunities, while high levels ensure smooth execution.",
      "mentorAnalogy": "Like a traffic engineer assessing road conditions before a major event, you must evaluate liquidity to ensure smooth trade execution in the market."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Finalizing Your Checklist for Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Pre-Execution Checklist Finalization\nFinalizing your pre-execution checklist is essential to ensure all critical factors are accounted for before entering a trade. This card details **how to systematically verify spot-perp discrepancies and liquidation thresholds**.\n\n* **Spot-Perp Discrepancy Analysis**: Confirm that the spot price aligns with the perpetual futures price within a defined threshold (e.g., 0.5%). If discrepancies exceed this threshold, reassess trade viability.\n* **Liquidation Risk Assessment**: Calculate the liquidation price based on your leverage and position size. For instance, with a 10x leverage on a $1,000 position, a 10% adverse move could trigger liquidation.\n* **Market Sentiment Review**: Analyze recent market sentiment indicators, including funding rates and open interest, to gauge potential volatility. A funding rate above 0.1% suggests a long bias that may lead to increased liquidation risk during downturns.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Discrepancy",
          "definition": "The difference between the spot price of an asset and its perpetual futures price."
        },
        {
          "term": "Liquidation Price",
          "definition": "The price at which a trader's position will be automatically closed due to insufficient margin."
        }
      ],
      "whyThisMatters": "A thorough checklist minimizes execution errors and enhances risk management in volatile crypto markets.",
      "realLifeExample": "When BTC spot trades at $30,000 and the perp price is $30,150, a discrepancy of 0.5% triggers a review of trade conditions before execution.",
      "commonMistake": "Failing to account for significant spot-perp discrepancies can lead to unexpected losses during execution.",
      "quickNote": "Ensure all checklist items are verified before executing a trade.",
      "mentorText": "Before you execute, double-check your checklist. If the spot and perp prices are misaligned, it could cost you. Always confirm your liquidation thresholds.",
      "mentorAnalogy": "Think of your checklist like a pre-flight checklist for a pilot. Each item ensures the aircraft is ready for takeoff, just as each checklist item ensures your trade is ready for execution."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "practice",
    "title": "Simulating Trade Scenarios",
    "label": "Core Track",
    "body": "### Core Scenario: Trade Simulation Practice\nEngaging in simulated trade scenarios allows you to apply your pre-execution checklist effectively. This card focuses on **identifying discrepancies and managing liquidation risks through practical exercises**.\n\n* **Scenario Setup**: Create a simulated environment with varying spot and perp prices. For example, set BTC spot at $29,800 and perp at $30,000, then analyze the discrepancy.\n* **Risk Management Application**: Calculate the liquidation price based on different leverage levels. For instance, with a $1,000 position at 5x leverage, determine the liquidation price and assess risk tolerance.\n* **Decision-Making Process**: Document your decision-making process based on the checklist. If the spot-perp discrepancy exceeds 0.5%, outline your response strategy, such as adjusting position size or waiting for alignment.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trade Scenario",
          "definition": "A practice environment that mimics real market conditions for training purposes."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Simulations reinforce your ability to execute trades effectively under varying market conditions, enhancing your readiness for real trades.",
      "realLifeExample": "In a simulation, if ETH spot is $2,000 and perp is $2,050, you practice adjusting your position size to mitigate liquidation risk based on your checklist.",
      "commonMistake": "Overlooking the importance of simulating adverse market conditions can lead to unpreparedness in live trading.",
      "quickNote": "Practice with simulated scenarios to refine your checklist application.",
      "mentorText": "Use simulations to test your checklist. If you can't handle the discrepancies in a practice environment, you won't manage them in the real market.",
      "mentorAnalogy": "Simulating trades is like a flight simulator for pilots. It prepares you for real-world scenarios without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, BTC is trading at $32,500 while the perpetual futures price is $32,800. What should you do next based on your checklist?",
      "options": [
        {
          "id": "0",
          "text": "Proceed with the trade as the discrepancy is acceptable.",
          "isCorrect": false,
          "feedback": "This is incorrect. The discrepancy exceeds the acceptable threshold, requiring further analysis."
        },
        {
          "id": "1",
          "text": "Reassess the trade and consider adjusting your position size.",
          "isCorrect": true,
          "feedback": "Correct. The discrepancy indicates a potential risk that needs addressing before execution."
        },
        {
          "id": "2",
          "text": "Ignore the discrepancy and execute the trade.",
          "isCorrect": false,
          "feedback": "This is incorrect. Ignoring discrepancies can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Wait for the prices to align before making a decision.",
          "isCorrect": false,
          "feedback": "While waiting can be prudent, you must still assess the risk based on your checklist."
        }
      ]
    },
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "summary",
    "title": "Reviewing Key Concepts",
    "label": "Core Track",
    "body": "### Core Scenario: Key Concept Review\nThis summary reinforces the importance of a thorough pre-execution checklist in managing spot-perp discrepancies and liquidations. Key concepts include **the critical elements of your checklist and their impact on trade execution**.\n\n* **Checklist Components**: Ensure your checklist includes spot-perp analysis, liquidation risk assessment, and market sentiment review. Each component plays a vital role in trade viability.\n* **Impact of Discrepancies**: Recognize that significant discrepancies can indicate underlying market issues. For example, a 1% difference may suggest a potential liquidation cascade.\n* **Liquidation Management**: Understand how to calculate and manage liquidation prices effectively. A clear grasp of your liquidation thresholds is essential for maintaining your trading position.",
    "context": {
      "keyTerms": [
        {
          "term": "Checklist Components",
          "definition": "The individual elements that make up a comprehensive pre-execution checklist."
        },
        {
          "term": "Liquidation Cascade",
          "definition": "A chain reaction of liquidations triggered by significant price movements."
        }
      ],
      "whyThisMatters": "A comprehensive review solidifies your understanding and application of the checklist, enhancing your trading discipline.",
      "realLifeExample": "Reviewing a checklist where LTC spot is $150 and perp is $155 highlights the need for immediate action to avoid liquidation risks.",
      "commonMistake": "Neglecting to review and update your checklist can lead to outdated strategies and increased risk exposure.",
      "quickNote": "Regularly review your checklist to ensure its effectiveness in real market conditions.",
      "mentorText": "Review your checklist regularly. If you find gaps, address them immediately. A solid checklist is your first line of defense against market volatility.",
      "mentorAnalogy": "Reviewing your checklist is like a surgeon reviewing their surgical plan before an operation. Each step must be precise to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  }
];
