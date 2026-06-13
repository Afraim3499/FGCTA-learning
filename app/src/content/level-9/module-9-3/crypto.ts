import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Leverage in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C1 -->\n### Core Scenario: Leverage Application in Crypto Trading\nLeverage allows traders to control larger positions with a smaller amount of capital, impacting both potential gains and losses. This card details **how to calculate and apply leverage effectively in crypto trading**.\n\n* **Leverage Ratio Calculation**: Determine the leverage ratio by dividing the total position size by the margin required. For example, a trader opening a $10,000 position with $1,000 margin is using a 10:1 leverage ratio.\n* **Execution Cost Consideration**: Factor in the impact of leverage on execution costs. Higher leverage can lead to increased fees and slippage, especially in volatile markets, which can erode profits.\n* **Margin Call Awareness**: Monitor margin levels closely. A position using 10:1 leverage requires maintaining at least 10% of the position value in the account to avoid liquidation during adverse price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase potential returns on investment."
        }
      ],
      "whyThisMatters": "Understanding leverage is essential for optimizing position sizes while managing risk in volatile crypto markets.",
      "realLifeExample": "A trader opens a long position on BTC/USD worth $20,000 using 5:1 leverage, requiring $4,000 in margin. If BTC drops 10%, the trader faces a $2,000 loss, significantly impacting their capital.",
      "commonMistake": "Failing to account for the impact of leverage on both potential profits and losses, leading to overexposure.",
      "quickNote": "Leverage amplifies both gains and losses; manage it wisely.",
      "mentorText": "Leverage is like a double-edged sword. Use it to enhance your position, but always be aware of the risks involved. If you're not monitoring your margin closely, you could face a margin call before you know it.",
      "mentorAnalogy": "Think of leverage like a high-performance sports car. It can accelerate your profits, but if you don’t know how to handle it, you risk losing control and crashing."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Cross vs Isolated Margin in Position Sizing",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C2 -->\n### Core Scenario: Margin Type Selection\nChoosing between cross and isolated margin affects how much capital is allocated to a position and the risk exposure. This card explains **the implications of each margin type on position sizing**.\n\n* **Cross Margin Mechanics**: In cross margin, all available balance in the account is used to maintain positions. This can prevent liquidation but increases risk exposure across all positions. For example, if a trader has $5,000 and opens a $2,000 position, the remaining $3,000 is still at risk if the market moves against them.\n* **Isolated Margin Mechanics**: Isolated margin limits the risk to the specific position by allocating only a set amount of capital. For instance, if a trader uses $1,000 as isolated margin for a $10,000 position, only that $1,000 is at risk if the trade goes against them.\n* **Position Sizing Strategy**: Evaluate the market conditions and your risk tolerance when selecting margin type. In volatile markets, isolated margin may be preferable to protect overall capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross Margin",
          "definition": "A margin type that uses the entire account balance to maintain positions."
        },
        {
          "term": "Isolated Margin",
          "definition": "A margin type that limits risk to a specific position by allocating a fixed amount of capital."
        }
      ],
      "whyThisMatters": "Selecting the appropriate margin type is crucial for managing risk and capital allocation in crypto trading.",
      "realLifeExample": "A trader with $10,000 uses cross margin to open a $5,000 position on ETH/USD. A sudden drop in ETH price leads to a $1,000 loss, impacting the entire account balance.",
      "commonMistake": "Misunderstanding the implications of cross margin leading to excessive risk exposure across multiple positions.",
      "quickNote": "Choose margin types based on your risk tolerance and market conditions.",
      "mentorText": "Selecting the right margin type is like choosing the right safety gear for a race. Cross margin offers flexibility but can expose you to greater risk, while isolated margin provides a safety net for each trade.",
      "mentorAnalogy": "Consider cross margin as a shared bank account for multiple projects, while isolated margin is like a dedicated fund for a single project. Mismanagement of the shared account can jeopardize all projects."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Liquidity Adjustments for Perpetual Contracts",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C3 -->\n### Core Scenario: Position Sizing Based on Liquidity\nLiquidity conditions directly influence the execution of trades in perpetual contracts. This card outlines **how to adjust position sizes based on liquidity and volatility**.\n\n* **Liquidity Assessment**: Evaluate the order book depth and spread before entering a position. For example, if the BTC perpetual contract shows a tight spread of $0.50 with high volume, larger positions can be executed with lower slippage.\n* **Volatility Consideration**: In high volatility scenarios, reduce position size to mitigate the risk of slippage. If BTC experiences a sudden price spike, a trader may adjust their position size down by 20% to avoid unfavorable fills.\n* **Dynamic Sizing Protocol**: Implement a dynamic sizing strategy that adjusts based on real-time liquidity metrics. For instance, if the market liquidity decreases significantly, decrease your position size by 50% to maintain risk management standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        },
        {
          "term": "Perpetual Contracts",
          "definition": "A type of derivative that allows traders to speculate on the price of an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Adapting position sizes based on liquidity ensures efficient execution and minimizes slippage costs.",
      "realLifeExample": "A trader plans to enter a $10,000 position on a BTC perpetual contract. However, due to low liquidity with a $3 spread, they decide to reduce the position size to $7,000 to minimize slippage risk.",
      "commonMistake": "Failing to adjust position sizes according to liquidity conditions, leading to unexpected execution costs.",
      "quickNote": "Adjust position sizes based on liquidity to optimize execution.",
      "mentorText": "Think of liquidity like the flow of traffic. When the roads are clear, you can drive faster and take bigger risks. But when traffic is heavy, it's wise to slow down and take smaller routes.",
      "mentorAnalogy": "Navigating liquidity in trading is akin to adjusting your speed based on road conditions. In heavy traffic, you wouldn't drive at full speed; similarly, in low liquidity, reduce your position size to avoid costly delays."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Risk Management for Crypto Leverage",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C4 -->\n### Core Scenario: Leverage Risk Management\nEffective risk management is essential when using leverage in crypto trading to protect capital and ensure longevity. This card discusses **strategies for managing risk while leveraging positions**.\n\n* **Position Sizing Rules**: Establish strict rules for position sizes based on account equity and leverage used. For example, limit any single position to no more than 2% of total capital when using 5:1 leverage to avoid excessive risk.\n* **Stop-Loss Implementation**: Utilize stop-loss orders to automatically exit positions at predetermined levels. If a trader enters a leveraged position on LTC/USD at $150, setting a stop-loss at $145 limits potential losses to $500 on a $2,500 position.\n* **Diversification Strategy**: Avoid concentration risk by diversifying leveraged positions across multiple assets. For instance, instead of allocating all capital to a single leveraged position in ETH, spread it across ETH, LTC, and XRP to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies is critical for sustaining long-term profitability in leveraged crypto trading.",
      "realLifeExample": "A trader with a $10,000 account uses 5:1 leverage to open a $5,000 position on XRP. By setting a stop-loss at 3% below the entry price, they limit their maximum loss to $150, preserving capital for future trades.",
      "commonMistake": "Neglecting to set stop-loss orders or position limits, leading to catastrophic losses.",
      "quickNote": "Implement strict risk management protocols when using leverage.",
      "mentorText": "Think of risk management as your safety net. Without it, one bad trade can wipe out your account. Always set your stop-losses and adhere to position sizing rules to protect your capital.",
      "mentorAnalogy": "Risk management in trading is like a parachute for skydivers. It’s essential for a safe landing; without it, the consequences can be dire."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Evaluating Market Conditions for Crypto Sizing",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C5 -->\n### Core Scenario: Market Condition Assessment\nEvaluating market conditions is critical for determining appropriate position sizing in crypto trading. This card outlines **how to analyze volatility, liquidity, and market sentiment** to optimize execution.\n\n* **Volatility Analysis**: Utilize the Average True Range (ATR) to gauge market volatility. For example, if BTC shows an ATR of $500, adjust your position size to mitigate risk exposure during high volatility periods.\n* **Liquidity Assessment**: Monitor order book depth and spread. If ETH has a spread of $10 with low order book volume, reduce position size to avoid slippage during execution.\n* **Sentiment Indicators**: Incorporate sentiment analysis tools, such as the Fear & Greed Index. A reading of extreme fear may suggest smaller positions to capitalize on potential reversals without overexposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Order Book Depth",
          "definition": "The list of buy and sell orders in the market, indicating liquidity and potential slippage."
        }
      ],
      "whyThisMatters": "Understanding market conditions directly influences risk management and execution efficiency, critical for capital preservation.",
      "realLifeExample": "During the BTC/USD trading session on March 15, 2023, with an ATR of $600 and a liquidity spread of $15, a trader adjusted their position size to 0.2 BTC to minimize risk exposure.",
      "commonMistake": "Failing to adjust position sizes according to sudden changes in market volatility can lead to unexpected losses.",
      "quickNote": "Market conditions dictate optimal position sizing for effective execution.",
      "mentorText": "Assessing market conditions is like checking the weather before a flight. You wouldn't take off in a storm; similarly, adjust your position size based on market volatility and liquidity.",
      "mentorAnalogy": "Think of trading like piloting an aircraft. Just as pilots adjust their flight plans based on weather conditions, traders must adapt their position sizes based on market volatility and liquidity."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Dynamic Position Sizing in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C6 -->\n### Core Scenario: Adaptive Position Sizing\nDynamic position sizing allows traders to adjust their exposure based on real-time market data. This card discusses **techniques for modifying position sizes in response to liquidity and price action**.\n\n* **Real-Time Data Integration**: Use APIs to pull live market data, adjusting position sizes based on current liquidity and volatility metrics. For instance, if the market cap of a crypto asset increases, consider increasing your position size proportionately.\n* **Risk Percentage Model**: Implement a risk percentage model where position size is calculated based on a fixed percentage of your total capital. If your capital is $10,000 and you decide on a 2% risk, your position size for a trade should not exceed $200.\n* **Liquidity-Based Adjustments**: Monitor liquidity levels during trading sessions. If a crypto asset experiences a sudden drop in liquidity, reduce your position size to prevent slippage and execution issues.",
    "context": {
      "keyTerms": [
        {
          "term": "API",
          "definition": "Application Programming Interface, a set of protocols for building and interacting with software applications."
        },
        {
          "term": "Market Cap",
          "definition": "The total market value of a cryptocurrency, calculated by multiplying the current price by the total supply."
        }
      ],
      "whyThisMatters": "Dynamic sizing ensures that traders remain agile, adapting to market conditions to optimize risk management and execution.",
      "realLifeExample": "On April 10, 2023, a trader used an API to track the liquidity of SOL, noticing a drop in liquidity during the NY session. They reduced their position size from 100 SOL to 50 SOL to mitigate slippage.",
      "commonMistake": "Rigidly sticking to predetermined position sizes without adapting to real-time market conditions can lead to increased risk exposure.",
      "quickNote": "Dynamic sizing adapts to market conditions, optimizing execution and risk management.",
      "mentorText": "Think of dynamic sizing as adjusting your sails based on wind conditions. If the wind picks up, you adjust your sails to maintain control; similarly, adjust your position size based on market conditions.",
      "mentorAnalogy": "Dynamic position sizing is akin to a chef adjusting ingredient quantities based on the number of guests. Just as a chef must adapt to ensure quality, traders must adjust their positions to maintain risk control."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Crypto Position Sizing",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C7 -->\n### Core Scenario: Position Sizing Application\nEngaging in practical exercises allows traders to apply theoretical knowledge of position sizing in real-world scenarios. This card focuses on **exercises that incorporate leverage and liquidity considerations**.\n\n* **Leverage Calculation**: Practice calculating position sizes based on leverage limits. For example, if your account balance is $5,000 and your broker offers 10x leverage, determine the maximum position size you can take while adhering to risk management rules.\n* **Liquidity Adjustment Scenarios**: Simulate trading scenarios with varying liquidity conditions. For instance, if trading XRP during a low liquidity period, calculate the adjusted position size to avoid slippage.\n* **Risk Management Drill**: Create a risk management plan that outlines position sizes based on different market conditions. For example, establish a protocol for reducing position sizes by 50% during high volatility events.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical concepts, enabling traders to make informed decisions under varying market conditions.",
      "realLifeExample": "During a simulated trading session, a trader calculated that with a $5,000 account and 10x leverage, they could take a maximum position of $50,000. They adjusted their size to $25,000 during a high volatility scenario to manage risk.",
      "commonMistake": "Failing to practice position sizing adjustments in simulated environments can lead to poor execution in live trading.",
      "quickNote": "Practical exercises solidify understanding of position sizing in diverse market conditions.",
      "mentorText": "Practicing position sizing is like a pilot using a flight simulator. You need to experience different conditions to prepare for real-world scenarios.",
      "mentorAnalogy": "Think of position sizing exercises like a chef practicing recipes. Just as a chef refines their techniques under various conditions, traders must practice sizing adjustments to master execution."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have an account balance of $5,000 and your broker offers 10x leverage. If you want to adhere to a risk management rule that limits your maximum risk to 2% of your account per trade, what is the maximum position size you can take?",
      "options": [
        {
          "id": "0",
          "text": "$10,000",
          "isCorrect": true,
          "feedback": "This is correct because with 10x leverage, you can control a position size of $50,000. However, limiting your risk to 2% of $5,000 means you can risk $100, which allows for a maximum position size of $10,000 when using leverage."
        },
        {
          "id": "1",
          "text": "$5,000",
          "isCorrect": false,
          "feedback": "This is incorrect because while $5,000 is your account balance, leveraging allows you to control a larger position. The risk management rule must be applied to the leveraged amount."
        },
        {
          "id": "2",
          "text": "$50,000",
          "isCorrect": false,
          "feedback": "This is incorrect because although you can control a position size of $50,000 with 10x leverage, your risk management rule limits your risk to 2% of your account, which translates to a maximum position size of $10,000."
        },
        {
          "id": "3",
          "text": "$20,000",
          "isCorrect": false,
          "feedback": "This is incorrect because while $20,000 may seem feasible with leverage, it exceeds the risk management limit of 2% of your account, which allows for a maximum position size of $10,000."
        }
      ]
    },
    "visualKey": "live-capital-planner"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Position Sizing",
    "label": "Crypto Track",
    "body": "<!-- M9.3-crypto-C8 -->\n### Core Scenario: Position Sizing Recap\nPosition sizing is a fundamental aspect of trading strategy that directly impacts risk management and execution. This card summarizes **key concepts related to leverage and liquidity considerations in crypto trading**.\n\n* **Leverage Utilization**: Understand how leverage affects position sizing. For example, using 5x leverage on a $10,000 account allows a maximum position size of $50,000, but increases risk exposure significantly.\n* **Liquidity Awareness**: Recognize the importance of liquidity in determining position sizes. A crypto asset with a high liquidity spread requires careful sizing to avoid slippage during execution.\n* **Risk Management Framework**: Establish a framework for position sizing that incorporates market conditions, leveraging a fixed percentage of capital to ensure consistent risk exposure across trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Framework",
          "definition": "A structured approach to managing risk in trading, including position sizing and capital allocation."
        }
      ],
      "whyThisMatters": "A solid understanding of position sizing principles is essential for maintaining capital and optimizing trading performance.",
      "realLifeExample": "A trader with a $20,000 account using 3x leverage on BTC/USD calculated their position size at $60,000, ensuring to adjust based on liquidity conditions during execution.",
      "commonMistake": "Neglecting to adjust position sizes based on market conditions can lead to significant losses.",
      "quickNote": "Position sizing is critical for risk management and effective execution in crypto trading.",
      "mentorText": "Think of position sizing as the foundation of a building. Without a solid foundation, everything else is at risk. Ensure your sizing is robust to withstand market fluctuations.",
      "mentorAnalogy": "Position sizing is like a ship's ballast. Just as ballast keeps a ship stable in rough waters, proper sizing stabilizes your trading strategy against market volatility."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  }
];
