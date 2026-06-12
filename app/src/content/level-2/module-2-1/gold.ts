import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "XAUUSD Spread and Volatility Understanding",
    "label": "Gold Track",
    "body": "### XAUUSD: Spread and Volatility Dynamics\nXAUUSD spreads fluctuate based on market volatility, affecting execution and trading strategies. This card details **how candlestick patterns can signal shifts in liquidity and price movements**.\n\n* **Spread Behavior**: During high volatility events, such as economic data releases, XAUUSD spreads can widen significantly, sometimes exceeding 2.0 pips. Avoid placing trades during these periods unless necessary.\n* **Candlestick Patterns**: Look for engulfing or pin bar formations on the 1-hour chart during volatile sessions, as these can indicate potential reversals or continuations in price action.\n* **Liquidity Assessment**: Analyze the volume accompanying candlestick formations; a high volume on a bullish candlestick suggests strong buying interest, while low volume may indicate a lack of conviction.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of an asset."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Understanding the relationship between spreads and volatility is crucial for executing trades effectively in the gold market.",
      "realLifeExample": "On March 10, 2023, during the US Non-Farm Payroll report, XAUUSD spread widened to 3.5 pips, with a bullish engulfing candle forming on the 15-minute chart, indicating a potential upward price movement.",
      "commonMistake": "Traders often enter positions during high volatility without considering spread implications, leading to increased slippage costs.",
      "quickNote": "Monitor spreads closely during volatile market conditions to optimize execution.",
      "mentorText": "When spreads widen, it's like driving on a bumpy road; you need to adjust your speed and approach. Pay attention to the signals from candlesticks to navigate these conditions effectively.",
      "mentorAnalogy": "Think of trading during volatile periods like piloting an aircraft through turbulence; you must be prepared for sudden changes and adjust your flight path accordingly."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "COMEX Contract Tick Sizes",
    "label": "Gold Track",
    "body": "### COMEX: Understanding Tick Sizes\nTick sizes in COMEX gold contracts directly influence trading strategies and candlestick movements. This card explores **the significance of tick sizes and their impact on market execution**.\n\n* **Standard Tick Size**: The standard tick size for COMEX gold futures is $0.10 per ounce, equating to a $10 move per contract. This precision is critical for setting stop-loss and take-profit levels.\n* **Candlestick Reactions**: Observe how candlestick formations react to tick size increments; a move of 5 ticks may create a significant bullish or bearish candlestick, indicating market sentiment shifts.\n* **Strategy Adjustment**: Adjust your trading strategy based on tick size; for instance, in a trending market, consider scaling in positions at every 2-tick movement to maximize gains while managing risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Tick Size",
          "definition": "The minimum price movement of a trading instrument."
        },
        {
          "term": "COMEX",
          "definition": "The Commodity Exchange, where gold futures are traded."
        }
      ],
      "whyThisMatters": "Understanding tick sizes is essential for precise execution and effective risk management in gold trading.",
      "realLifeExample": "On April 5, 2023, a bullish candlestick formed after a 10-tick movement in COMEX gold futures, indicating strong buying pressure as the price moved from $1,950.00 to $1,952.00.",
      "commonMistake": "Traders often overlook tick sizes when placing orders, leading to inappropriate stop-loss placements and increased risk exposure.",
      "quickNote": "Always factor in tick sizes when developing your trading strategy for COMEX gold contracts.",
      "mentorText": "Think of tick sizes as the increments on a ruler; each small measurement can lead to a larger picture in your trading strategy. Pay attention to these details.",
      "mentorAnalogy": "Like an architect measuring dimensions for a building, precise tick sizes ensure your trading structure is sound and well-planned."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Identifying Volatility Spikes",
    "label": "Gold Track",
    "body": "### Gold Market: Identifying Volatility Spikes\nVolatility spikes can present significant trading opportunities in the gold market. This card focuses on **how to identify these spikes through candlestick formations**.\n\n* **Spike Indicators**: Look for candlestick patterns such as long wicks or large body candles on the 5-minute chart, which often indicate sudden market movements. A wick exceeding 1% of the price can signal a volatility spike.\n* **Volume Confirmation**: Confirm volatility spikes with volume; a spike accompanied by a volume increase of over 50% compared to the average indicates strong market interest and potential continuation.\n* **Timeframe Analysis**: Analyze multiple timeframes; a volatility spike on the 1-minute chart may be confirmed by a similar pattern on the 15-minute chart, providing a clearer trading signal.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in price movement and trading volume."
        },
        {
          "term": "Wick",
          "definition": "The line on a candlestick that shows the high and low prices during a specific period."
        }
      ],
      "whyThisMatters": "Identifying volatility spikes allows traders to capitalize on rapid price movements, enhancing potential profitability.",
      "realLifeExample": "On February 15, 2023, XAUUSD experienced a volatility spike with a long wick on the 5-minute chart, reaching $1,900.00 before closing at $1,910.00, accompanied by a 60% increase in volume.",
      "commonMistake": "Traders frequently misinterpret normal price fluctuations as volatility spikes, leading to premature entries.",
      "quickNote": "Focus on candlestick formations and volume to accurately identify volatility spikes.",
      "mentorText": "When you see a long wick, think of it as a warning sign; it indicates that the market is reacting strongly. Use this information to position yourself wisely.",
      "mentorAnalogy": "Identifying volatility spikes is like a meteorologist predicting a storm; you must recognize the signs early to prepare for the impact."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Liquidity Sweeps and Market Impact",
    "label": "Gold Track",
    "body": "### Gold Market: Liquidity Sweeps\nLiquidity sweeps can dramatically influence price delivery in the gold market. This card examines **how liquidity sweeps interact with candlestick patterns**.\n\n* **Definition of Liquidity Sweep**: A liquidity sweep occurs when large orders are executed, causing rapid price movement. Monitor for candlestick formations that indicate these sweeps, such as large body candles with minimal wicks.\n* **Market Reaction**: Following a liquidity sweep, expect increased volatility; candlesticks may show rapid reversals or continuations. Analyze the 1-minute chart for immediate reactions post-sweep.\n* **Order Flow Analysis**: Use order flow tools to identify potential liquidity sweeps; a sudden increase in market orders can lead to significant price changes, often reflected in the subsequent candlestick formations.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Sweep",
          "definition": "A large market order that consumes available liquidity, causing price movement."
        },
        {
          "term": "Order Flow",
          "definition": "The analysis of buy and sell orders in the market."
        }
      ],
      "whyThisMatters": "Understanding liquidity sweeps helps traders anticipate price movements and adjust strategies accordingly.",
      "realLifeExample": "On January 20, 2023, a liquidity sweep occurred when XAUUSD dropped from $1,850.00 to $1,840.00 within minutes, creating a large bearish candlestick with minimal wicks, indicating strong selling pressure.",
      "commonMistake": "Traders often fail to recognize liquidity sweeps, leading to missed opportunities or incorrect market entries.",
      "quickNote": "Monitor for large orders to identify potential liquidity sweeps and their market impact.",
      "mentorText": "When you see a large candle forming, think of it as a tidal wave; it can sweep away everything in its path. Be prepared to react quickly to these movements.",
      "mentorAnalogy": "Recognizing liquidity sweeps is like a firefighter responding to a sudden blaze; you must act swiftly and decisively to manage the situation."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Gold Trading Strategies Using Candlestick Analysis",
    "label": "Gold Track",
    "body": "### Gold Trading: Candlestick Strategy Development\nEffective trading strategies for gold leverage candlestick analysis to interpret market sentiment and volatility. This card details **how to construct strategies based on candlestick patterns and spread dynamics**.\n\n* **Candlestick Patterns**: Identify key patterns such as bullish engulfing or shooting stars that signal potential reversals or continuations. For example, a bullish engulfing pattern on XAUUSD at $1,800 may indicate a strong upward momentum.\n* **Spread Dynamics**: Monitor the bid-ask spread during high-impact news releases, as spreads can widen significantly, impacting entry and exit points. A spread increase from 0.5 to 2.0 pips during a CPI release can affect profitability.\n* **Volatility Considerations**: Utilize Average True Range (ATR) to gauge volatility and adjust position sizing accordingly. If XAUUSD shows an ATR of $15, position sizes should reflect this volatility to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Visual formations on price charts indicating market sentiment."
        },
        {
          "term": "Spread Dynamics",
          "definition": "The difference between the bid and ask price, which can fluctuate based on market conditions."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility."
        }
      ],
      "whyThisMatters": "Understanding candlestick patterns and their implications on spread and volatility is essential for developing robust trading strategies in gold markets.",
      "realLifeExample": "On March 15, 2023, XAUUSD formed a bullish engulfing pattern at $1,800, coinciding with a narrowing spread of 0.5 pips, leading to a successful long position.",
      "commonMistake": "Traders often overlook the impact of spread changes during volatile market conditions, leading to unexpected losses.",
      "quickNote": "Candlestick patterns provide critical insights into market sentiment and potential price movements.",
      "mentorText": "When analyzing gold, focus on candlestick formations. They reveal the market's mood and can guide your entry and exit points effectively. Always consider the spread before executing trades.",
      "mentorAnalogy": "Think of candlestick analysis like a weather forecast for aviation; just as pilots must understand weather patterns to navigate safely, traders must interpret candlestick formations to navigate market conditions."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "concept",
    "title": "Risk Management in Gold Trading",
    "label": "Gold Track",
    "body": "### Gold Trading: Risk Management Fundamentals\nRisk management is critical in gold trading, especially when utilizing candlestick insights to define risk parameters. This card outlines **how to set effective risk management strategies using candlestick analysis**.\n\n* **Position Sizing**: Calculate position sizes based on the ATR and your risk tolerance. For instance, if XAUUSD has an ATR of $20 and your risk tolerance is 1%, your position size should reflect this to limit potential losses.\n* **Stop Loss Placement**: Use candlestick highs and lows to determine stop loss levels. For example, if entering a long position at $1,850, place a stop loss just below the recent swing low at $1,840 to minimize risk.\n* **Risk-Reward Ratio**: Establish a favorable risk-reward ratio, ideally 1:2 or higher. If targeting a profit of $40 on XAUUSD, ensure your stop loss does not exceed $20 to maintain this ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a trade based on risk tolerance."
        },
        {
          "term": "Stop Loss",
          "definition": "An order placed to limit losses on a position."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies protects capital and enhances long-term trading success in the volatile gold market.",
      "realLifeExample": "On April 10, 2023, a trader entered a long position on XAUUSD at $1,900 with a stop loss at $1,880, effectively managing risk while targeting a $40 profit.",
      "commonMistake": "Failing to adjust position sizes according to market volatility can lead to excessive losses.",
      "quickNote": "Effective risk management is essential for sustaining trading capital and ensuring long-term success.",
      "mentorText": "Always prioritize risk management in your trading plan. Use candlestick insights to set your stop losses and position sizes wisely.",
      "mentorAnalogy": "Consider risk management in trading like a safety harness for rock climbing; it keeps you secure while navigating the heights of the market."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "practice",
    "title": "Practical Application of Gold Trading Concepts",
    "label": "Gold Track",
    "body": "### Gold Trading: Practical Application Exercises\nEngaging in practical exercises helps solidify understanding of gold trading concepts, particularly regarding spreads, tick sizes, and volatility. This card provides **scenario-based tasks to apply these concepts effectively**.\n\n* **Scenario Analysis**: Given a scenario where XAUUSD is trading at $1,850 with a spread of 1.0 pips, determine the effective entry point for a long position. Consider the volatility indicated by the ATR of $15.\n* **Tick Size Calculation**: Calculate the minimum price movement for XAUUSD, which is typically $0.10. If you enter a trade at $1,850, what is the price at which you would exit for a profit of $30?\n* **Volatility Assessment**: Analyze a situation where XAUUSD experiences a sudden spike in volatility, increasing the ATR from $15 to $25. How would you adjust your position size and stop loss strategy in response?",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating hypothetical market situations to make informed trading decisions."
        },
        {
          "term": "Tick Size",
          "definition": "The minimum price movement of a trading instrument."
        },
        {
          "term": "Volatility Assessment",
          "definition": "Evaluating market fluctuations to adjust trading strategies."
        }
      ],
      "whyThisMatters": "Practical application of trading concepts enhances decision-making skills and prepares traders for real market conditions.",
      "realLifeExample": "During a trading session on May 5, 2023, XAUUSD’s volatility increased, prompting traders to adjust their stop losses and position sizes based on the new ATR readings.",
      "commonMistake": "Overlooking tick size calculations can lead to misjudged profit targets and unexpected losses.",
      "quickNote": "Practical exercises reinforce theoretical knowledge and improve trading execution.",
      "mentorText": "Practice these scenarios diligently. They will prepare you for real market conditions and help you refine your trading strategies.",
      "mentorAnalogy": "Think of these exercises as flight simulations for pilots; they prepare you for the actual flight by allowing you to practice in a controlled environment."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are analyzing XAUUSD at $1,850 with a spread of 1.0 pips. What is your effective entry point for a long position?",
      "options": [
        {
          "id": "0",
          "text": "$1,851.00",
          "isCorrect": true,
          "feedback": "Correct. The effective entry point is the ask price, which is $1,851.00."
        },
        {
          "id": "1",
          "text": "$1,850.00",
          "isCorrect": false,
          "feedback": "Incorrect. This is the bid price, not the effective entry point."
        },
        {
          "id": "2",
          "text": "$1,849.00",
          "isCorrect": false,
          "feedback": "Incorrect. This price does not account for the spread."
        },
        {
          "id": "3",
          "text": "$1,852.00",
          "isCorrect": false,
          "feedback": "Incorrect. This price exceeds the current market conditions."
        }
      ]
    },
    "visualKey": "gold-spread-volatility"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Trading Insights",
    "label": "Gold Track",
    "body": "### Gold Trading: Key Insights Summary\nThis card summarizes the critical insights gained regarding gold trading, particularly focusing on spreads and volatility. Understanding these elements is essential for effective trading strategies.\n\n* **Spreads and Volatility**: Recognize that spreads can widen significantly during high-impact news events, affecting trade execution and profitability. For instance, spreads may double during major economic announcements.\n* **Candlestick Analysis**: Utilize candlestick patterns to gauge market sentiment and potential price movements, allowing for informed trading decisions. Patterns like dojis and hammers can indicate indecision or reversals.\n* **Risk Management**: Implement strict risk management protocols, including position sizing and stop loss placement, to protect capital in volatile market conditions. A well-defined risk-reward ratio ensures sustainable trading practices.",
    "context": {
      "keyTerms": [
        {
          "term": "Spreads",
          "definition": "The difference between the bid and ask price, which can fluctuate based on market conditions."
        },
        {
          "term": "Candlestick Patterns",
          "definition": "Visual formations on price charts indicating market sentiment."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the foundational knowledge necessary for successful trading in the gold market.",
      "realLifeExample": "Traders who effectively applied these insights during the March 2023 FOMC meeting capitalized on volatility while managing their risk appropriately.",
      "commonMistake": "Failing to adapt to changing market conditions can lead to missed opportunities and increased losses.",
      "quickNote": "Key insights into spreads, candlestick analysis, and risk management are vital for successful gold trading.",
      "mentorText": "Reflect on these insights regularly. They are the foundation of your trading strategy and will guide your decisions in the market.",
      "mentorAnalogy": "Just as a chef must understand the ingredients and techniques to create a dish, traders must grasp market dynamics to execute successful trades."
    },
    "taskData": null,
    "visualKey": "gold-spread-volatility"
  }
];
