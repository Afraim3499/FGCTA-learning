import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Analyzing Taker Fee Drag in Crypto Perps",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C1 -->\n### Core Scenario: Taker Fee Drag Analysis\nTaker fees can significantly impact overall profitability and liquidation risk in crypto perpetual contracts. This card focuses on **quantifying the effect of taker fees on liquidation events**.\n\n* **Fee Calculation Methodology**: Determine the total taker fees incurred during trading sessions by summing the fees for each executed trade. For example, if a trader executes 10 trades with a fee of 0.1% on a $10,000 position, the total fee drag would amount to $100.\n* **Liquidation Threshold Adjustment**: Adjust the liquidation price based on the cumulative taker fees. If a trader's position is liquidated at $9,800 but incurred $100 in fees, the effective liquidation threshold is $9,700.\n* **Performance Impact Review**: Regularly review performance logs to assess the correlation between fee drag and liquidation events. For instance, if 30% of liquidations occur after a high-fee trading period, this indicates a need for fee management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Taker Fee",
          "definition": "A fee charged to traders who take liquidity from the market by placing market orders."
        }
      ],
      "whyThisMatters": "Understanding taker fee drag is critical for optimizing trading strategies and minimizing liquidation risks in volatile markets.",
      "realLifeExample": "During a volatile session on Binance, a trader executed 15 trades in BTCUSDT with a total taker fee of $150, leading to a liquidation at $39,850 instead of the anticipated $40,000.",
      "commonMistake": "Traders often overlook the cumulative effect of taker fees when calculating their liquidation thresholds.",
      "quickNote": "Taker fees can distort liquidation thresholds; always factor them into your calculations.",
      "mentorText": "You need to account for every fee when assessing your liquidation risk. If you ignore taker fees, you’re setting yourself up for unexpected liquidations.",
      "mentorAnalogy": "Think of taker fees like fuel consumption in an aircraft; if you don't account for it, you might run out of fuel before reaching your destination."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Understanding Funding Rate Impact on Liquidations",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C2 -->\n### Core Scenario: Funding Rate Analysis\nFunding rates can create pressure on positions, leading to increased liquidation risks during market volatility. This card teaches **how to analyze funding rates and their correlation with liquidation events**.\n\n* **Funding Rate Calculation**: Monitor the funding rate for perpetual contracts, which can fluctuate based on market sentiment. For example, a funding rate of 0.01% every 8 hours can accumulate to 0.06% per day, impacting long positions significantly.\n* **Market Sentiment Correlation**: Analyze historical data to identify patterns where high funding rates coincide with liquidation spikes. For instance, during a bearish trend, funding rates may rise, leading to increased liquidations as traders are forced to close positions.\n* **Risk Management Strategies**: Implement strategies to mitigate funding rate impacts, such as adjusting position sizes or using stop-loss orders. If a trader holds a long position in ETHUSDT with a high funding rate, they may reduce their size to limit exposure to liquidation risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual contracts, reflecting market demand."
        }
      ],
      "whyThisMatters": "Funding rates can significantly influence liquidation events, particularly in volatile market conditions, making it essential for risk management.",
      "realLifeExample": "In a recent market downturn, the funding rate for ETHUSDT spiked to 0.02%, leading to a 40% increase in liquidation events among long positions within 24 hours.",
      "commonMistake": "Traders frequently neglect to monitor funding rates, leading to unexpected liquidations during high volatility.",
      "quickNote": "Funding rates can exacerbate liquidation risks; always monitor them closely.",
      "mentorText": "You must keep an eye on funding rates. They can turn a manageable position into a liquidation nightmare if you're not prepared.",
      "mentorAnalogy": "Consider funding rates like interest on a loan; if you don’t account for it, your debt can spiral out of control."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidation Risk Factors in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C3 -->\n### Core Scenario: Liquidation Risk Assessment\nIdentifying key risk factors that lead to liquidations is essential for maintaining a robust trading strategy. This card focuses on **methods to assess and quantify liquidation risks in crypto trading environments**.\n\n* **Leverage Analysis**: Evaluate the leverage used in positions. For instance, using 10x leverage on a $5,000 position means a price movement of only $500 can trigger liquidation. A trader must understand their liquidation price based on leverage.\n* **Volatility Metrics**: Monitor market volatility indicators, such as the Average True Range (ATR). A high ATR indicates increased price swings, which can lead to higher liquidation risks. For example, an ATR of $200 in BTCUSDT suggests significant price movement potential.\n* **Order Book Depth Examination**: Analyze the order book for liquidity levels. Thin order books can exacerbate slippage and increase liquidation risk. If BTCUSDT has a low depth at key support levels, traders should be cautious about entering large positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed capital to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Identifying liquidation risk factors enables traders to make informed decisions and adjust their strategies accordingly.",
      "realLifeExample": "A trader using 20x leverage on a $1,000 position in LTCUSDT faced liquidation when the price dropped by just $50, highlighting the risks of high leverage.",
      "commonMistake": "Traders often underestimate the impact of leverage and volatility, leading to unexpected liquidations.",
      "quickNote": "Leverage and volatility are critical factors in assessing liquidation risks; always evaluate them before trading.",
      "mentorText": "You have to know your risk factors inside and out. If you’re using high leverage, even a small price move can wipe you out.",
      "mentorAnalogy": "Think of liquidation risk like a tightrope walker; the higher they go, the more careful they must be with every step they take."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Effective Slippage Logging in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C4 -->\n### Core Scenario: Slippage Data Management\nEffective logging of slippage data is crucial for enhancing performance analysis and risk management in crypto trading. This card focuses on **techniques for accurately recording slippage events**.\n\n* **Slippage Definition and Measurement**: Define slippage as the difference between the expected price of a trade and the actual executed price. Record this data for each trade to analyze patterns. For example, if a trader expected to buy BTCUSDT at $40,000 but executed at $40,050, the slippage is $50.\n* **Logging Methodology**: Create a structured log that includes trade details, expected price, executed price, and slippage amount. For instance, a log entry might read: \"BTCUSDT, Buy, Expected: $40,000, Executed: $40,050, Slippage: $50.\"\n* **Performance Review Frequency**: Regularly review slippage logs to identify trends and adjust strategies accordingly. If a trader notices consistent slippage during high volatility periods, they may need to refine their execution strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Accurate slippage logging allows traders to identify execution issues and improve their trading strategies.",
      "realLifeExample": "A trader logged slippage of $100 on multiple trades during a market crash, prompting a review of their execution strategy and leading to a shift towards limit orders.",
      "commonMistake": "Traders often fail to log slippage accurately, missing key insights into their trading performance.",
      "quickNote": "Accurate slippage logging is essential for performance analysis; make it a habit.",
      "mentorText": "If you’re not logging your slippage, you’re flying blind. You need that data to refine your execution strategy and minimize losses.",
      "mentorAnalogy": "Logging slippage is like a pilot recording flight data; without it, you can’t improve your flight path or avoid turbulence in the future."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Developing Slippage-Aware Crypto Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C5 -->\n### Core Strategy: Slippage-Aware Development\nDeveloping strategies that incorporate slippage and liquidation risks is essential for maintaining profitability in volatile crypto markets. This card outlines **how to integrate slippage considerations into your trading strategy**.\n\n* **Market Impact Analysis**: Assess the potential slippage based on order size relative to market depth. For instance, placing a market order for 50 BTC on Binance when the order book shows only 20 BTC at the current price may result in significant slippage.\n* **Limit Order Utilization**: Prioritize limit orders to control entry and exit prices. For example, setting a limit order to buy ETH at $1,800 instead of executing a market order can mitigate slippage during high volatility periods.\n* **Dynamic Position Sizing**: Adjust position sizes based on recent slippage metrics. If historical data indicates an average slippage of 2% on trades over $10,000, consider scaling down to $9,800 to minimize risk during execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Market Depth",
          "definition": "The measure of supply and demand for a specific cryptocurrency at various price levels."
        }
      ],
      "whyThisMatters": "Incorporating slippage awareness into strategies directly impacts execution quality and overall trading performance.",
      "realLifeExample": "Executing a market order for 100 LTC during a spike in volatility may result in a slippage of 5%, leading to a purchase at $150 instead of the expected $142.",
      "commonMistake": "Failing to account for slippage when executing large orders, which can lead to unexpected losses.",
      "quickNote": "Integrate slippage metrics into strategy development to enhance execution precision.",
      "mentorText": "When developing your strategies, always ask yourself: How will slippage affect my entry and exit? Adjust your approach accordingly.",
      "mentorAnalogy": "Think of trading like a pilot adjusting flight paths based on air traffic; just as a pilot must account for turbulence, you must account for slippage in your trades."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "concept",
    "title": "Optimizing Performance Metrics for Crypto Trades",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C6 -->\n### Core Focus: Performance Metric Optimization\nOptimizing performance metrics is essential for minimizing slippage and liquidation risks in crypto trading. This card details **how to refine your performance metrics to enhance trading outcomes**.\n\n* **Slippage Ratio Calculation**: Regularly calculate the slippage ratio by dividing total slippage by total trade volume. For example, if total slippage on $100,000 worth of trades is $2,000, your slippage ratio is 2%.\n* **Liquidation Risk Assessment**: Monitor and evaluate the liquidation risk associated with each position. If holding a leveraged position of 10x on a $5,000 trade, ensure that the liquidation price is well above the current market price to avoid forced liquidation.\n* **Performance Benchmarking**: Compare your slippage and liquidation metrics against industry benchmarks. If your slippage ratio exceeds 1% while the industry average is 0.5%, reassess your order execution methods.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        },
        {
          "term": "Liquidation Risk",
          "definition": "The risk of a position being forcibly closed due to insufficient margin."
        }
      ],
      "whyThisMatters": "Optimizing performance metrics allows traders to identify inefficiencies and adjust strategies to reduce slippage and liquidation occurrences.",
      "realLifeExample": "Tracking a slippage ratio of 3% on a series of trades during a volatile market can prompt a trader to switch from market orders to limit orders to improve execution.",
      "commonMistake": "Neglecting to regularly update performance metrics, leading to outdated strategies that do not account for current market conditions.",
      "quickNote": "Regularly optimize performance metrics to ensure effective trade execution and risk management.",
      "mentorText": "You need to be relentless in tracking your performance metrics. If slippage is creeping up, it’s time to adjust your strategy.",
      "mentorAnalogy": "Just as an engineer refines a machine's performance metrics to ensure efficiency, you must refine your trading metrics to enhance execution."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "practice",
    "title": "Practice: Slippage in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C7 -->\n### Core Exercise: Slippage Simulation\nEngage in practical exercises that simulate slippage scenarios in crypto trading. This practice focuses on **applying learned concepts to real-world situations**.\n\n* **Scenario Simulation**: You are tasked with executing a market order for 200 ADA during a high volatility period. Analyze the order book and predict potential slippage based on current market depth.\n* **Limit Order Application**: Practice setting a limit order for 50 BTC at $30,000 while the market is fluctuating. Assess the likelihood of execution and potential slippage based on recent price movements.\n* **Risk Assessment Drill**: Evaluate a leveraged position of 5x on a $10,000 trade in ETH. Calculate the liquidation price and determine the slippage risk based on current market volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a cryptocurrency immediately at the current market price."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a cryptocurrency at a specified price or better."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the understanding of slippage and liquidation risks, enhancing decision-making skills in live trading.",
      "realLifeExample": "Simulating a market order for 100 ETH during a sudden price drop can help traders understand the impact of slippage on their trades.",
      "commonMistake": "Underestimating the impact of slippage during volatile market conditions, leading to unexpected losses.",
      "quickNote": "Engage in simulations to build confidence in managing slippage and liquidation risks.",
      "mentorText": "In practice, always visualize how slippage can affect your trades. Run through scenarios in your mind to prepare for real market conditions.",
      "mentorAnalogy": "Like a surgeon rehearsing a procedure before the operation, you must simulate trading scenarios to prepare for the unexpected."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You plan to execute a market order for 150 LTC during a market downturn. What should you consider regarding slippage?",
      "options": [
        {
          "id": "0",
          "text": "The current order book depth and potential price impact.",
          "isCorrect": true,
          "feedback": "Correct. Analyzing the order book depth helps predict slippage."
        },
        {
          "id": "1",
          "text": "The historical performance of LTC over the last month.",
          "isCorrect": false,
          "feedback": "Incorrect. Historical performance does not directly impact current slippage."
        },
        {
          "id": "2",
          "text": "The latest news affecting LTC price.",
          "isCorrect": false,
          "feedback": "Incorrect. While news can affect price, it does not provide insight into slippage."
        },
        {
          "id": "3",
          "text": "Your emotional state while trading.",
          "isCorrect": false,
          "feedback": "Incorrect. Emotional state does not influence slippage directly."
        }
      ]
    },
    "visualKey": "execution-speed-monitor"
  },
  {
    "type": "summary",
    "title": "Crypto Track Summary",
    "label": "Crypto Track",
    "body": "<!-- M9.4-crypto-C8 -->\n### Core Summary: Key Concepts in Crypto Trading\nThis summary encapsulates the essential concepts covered in the Crypto track, focusing on slippage auditing. Key takeaways include **the importance of understanding slippage and liquidation risks in crypto markets**.\n\n* **Slippage Awareness**: Recognizing the impact of slippage on trade execution is crucial for maintaining profitability. Strategies must be developed with slippage considerations in mind.\n* **Performance Metrics**: Regular optimization of performance metrics is necessary to identify inefficiencies and adjust strategies accordingly. Monitoring slippage ratios and liquidation risks is essential for effective trading.\n* **Practical Application**: Engaging in simulations and practical exercises reinforces the understanding of slippage and liquidation risks, preparing traders for real-market scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Auditing",
          "definition": "The process of measuring and analyzing slippage occurrences in trading."
        },
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Summarizing these concepts ensures traders are equipped to handle slippage and liquidation risks effectively.",
      "realLifeExample": "A trader who understands slippage auditing can adjust their strategies during high volatility, such as when Bitcoin experiences a rapid price change.",
      "commonMistake": "Overlooking the importance of slippage auditing in developing robust trading strategies.",
      "quickNote": "Mastering slippage auditing is vital for successful crypto trading.",
      "mentorText": "Reflect on these key concepts regularly. They are the foundation of your trading success in the crypto markets.",
      "mentorAnalogy": "Just as a pilot reviews flight data to ensure safety, you must constantly audit your trades for slippage to maintain operational integrity."
    },
    "taskData": null,
    "visualKey": "execution-speed-monitor"
  }
];
