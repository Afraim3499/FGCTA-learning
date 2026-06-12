import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Pip Values in Forex",
    "label": "Forex Track",
    "body": "### Forex Mechanics: Pip Value Calculation\nPip values are critical for quantifying potential gains or losses in Forex trading. This card explains **how pip values relate to candlestick movements and their importance in trade execution**.\n\n* **Pip Calculation Formula**: For pairs quoted in USD, the pip value is calculated as (0.0001 / exchange rate) * trade size. For example, if trading EUR/USD at 1.1000 with a position size of 10,000 units, the pip value is approximately $0.91.\n* **Impact on Risk Management**: Accurate pip calculations are essential for setting stop-loss and take-profit levels. A miscalculation can lead to excessive risk exposure or missed profit opportunities.\n* **Candlestick Influence**: Observe candlestick patterns to anticipate price movements. A bullish engulfing pattern may indicate a strong upward pip movement, necessitating recalibration of pip value assessments for effective trade planning.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a single pip movement in a currency pair."
        }
      ],
      "whyThisMatters": "Understanding pip values ensures precise risk management and enhances decision-making in trade execution.",
      "realLifeExample": "When trading GBP/JPY at 150.50, a movement of 100 pips results in a $66.67 change for a standard lot, directly impacting profit calculations.",
      "commonMistake": "Traders often neglect to adjust pip values based on changing exchange rates, leading to inaccurate risk assessments.",
      "quickNote": "Pip values are essential for calculating potential profits and losses in Forex trades.",
      "mentorText": "When you calculate pip values accurately, you can make informed decisions that align with your risk tolerance. Always double-check your calculations before executing trades.",
      "mentorAnalogy": "Think of pip values like fuel consumption in an aircraft; understanding how much fuel you need for each flight leg is crucial for safe and efficient travel."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Currency Quoting Mechanics",
    "label": "Forex Track",
    "body": "### Forex Dynamics: Bid and Ask Price Mechanics\nBid and ask prices are foundational to currency quoting. This card details **how these prices are influenced by candlestick formations and institutional trading behaviors**.\n\n* **Bid-Ask Relationship**: The bid price is the highest price a buyer is willing to pay, while the ask price is the lowest price a seller will accept. For instance, if EUR/USD is quoted at 1.1000/1.1002, the bid is 1.1000 and the ask is 1.1002.\n* **Candlestick Patterns**: Recognize that bullish candlestick formations often lead to upward adjustments in the ask price, while bearish formations can depress the bid price. For example, a hammer pattern may signal a potential reversal, prompting buyers to raise their bids.\n* **Institutional Influence**: Large institutional trades can create significant shifts in bid-ask spreads. A sudden influx of buy orders during a bullish candlestick breakout can widen the spread, impacting trade execution timing.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid Price",
          "definition": "The price at which a trader can sell a currency pair."
        },
        {
          "term": "Ask Price",
          "definition": "The price at which a trader can buy a currency pair."
        }
      ],
      "whyThisMatters": "Understanding bid and ask mechanics allows traders to anticipate price movements and optimize entry and exit points.",
      "realLifeExample": "During a news release, if the EUR/USD bid price jumps from 1.1000 to 1.1020 while the ask remains at 1.1002, traders may face slippage when executing trades.",
      "commonMistake": "Traders often overlook the impact of candlestick formations on bid-ask prices, leading to poor execution timing.",
      "quickNote": "Bid and ask prices are influenced by market sentiment and candlestick patterns.",
      "mentorText": "Always analyze the bid and ask prices in relation to candlestick patterns. They tell you where the market is likely to head next.",
      "mentorAnalogy": "Consider bid and ask prices like the opening and closing of a restaurant; the menu (candlestick patterns) influences how many customers (traders) come in and what they order."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Bid-Ask Spread Dynamics at Session Opens",
    "label": "Forex Track",
    "body": "### Forex Analysis: Spread Behavior at Session Opens\nBid-ask spreads can fluctuate significantly during institutional session opens. This card explores **the relationship between candlestick patterns and spread dynamics**.\n\n* **Spread Widening**: Expect spreads to widen during the first 15 minutes of a session open due to high volatility and order imbalances. For example, if the EUR/USD spread is normally 2 pips, it may widen to 5 pips at the London open.\n* **Candlestick Impact**: A strong bullish candlestick at the session open can lead to tighter spreads as demand increases, while a bearish candlestick may cause spreads to widen as sellers dominate. Monitor the first few candlesticks for clues on spread behavior.\n* **Execution Strategy**: Avoid placing trades immediately at session opens; wait for the first 5-minute candlestick to form and assess spread stability before executing trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the bid and ask prices of a currency pair."
        }
      ],
      "whyThisMatters": "Understanding spread dynamics at session opens allows traders to optimize entry points and manage execution costs.",
      "realLifeExample": "If trading AUD/USD at the Sydney open, a sudden spike in volatility can cause the spread to widen from 1 pip to 4 pips, impacting trade profitability.",
      "commonMistake": "Traders frequently enter positions immediately at session opens without considering spread fluctuations, leading to unfavorable trade outcomes.",
      "quickNote": "Bid-ask spreads can widen significantly during session opens, affecting trade execution.",
      "mentorText": "Be patient at session opens. Wait for the initial volatility to settle before making your move. This can save you from unnecessary losses.",
      "mentorAnalogy": "Think of the bid-ask spread like the opening rush at a concert; the initial chaos can lead to missed opportunities if you don’t wait for the crowd to settle."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Institutional Session Timing",
    "label": "Forex Track",
    "body": "### Forex Timing: Institutional Session Correlation\nInstitutional trading sessions significantly influence market movements. This card investigates **how session timing correlates with candlestick formations**.\n\n* **Session Overlaps**: Major market overlaps, such as the London and New York sessions, often lead to increased volatility and significant candlestick formations. For example, during the overlap, the EUR/USD may experience rapid movements, forming large-bodied candlesticks.\n* **Candlestick Signals**: Pay attention to candlestick formations during key session times. A doji at the end of the London session may indicate indecision, while a strong bullish candlestick at the New York open could signal continuation.\n* **Timing Strategies**: Align your trading strategies with institutional session timings. For instance, consider entering trades 15 minutes after a significant candlestick pattern forms during a session open to capitalize on momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Institutional Session",
          "definition": "Periods when major financial institutions are actively trading, influencing market liquidity and volatility."
        }
      ],
      "whyThisMatters": "Understanding institutional session timings allows traders to anticipate market movements and optimize trading strategies.",
      "realLifeExample": "During the London-New York overlap, if GBP/USD forms a bullish engulfing pattern, traders should be prepared for increased volatility and potential breakout opportunities.",
      "commonMistake": "Traders often ignore the timing of institutional sessions, missing out on key trading opportunities that align with candlestick formations.",
      "quickNote": "Institutional session timings correlate with significant candlestick patterns, impacting market volatility.",
      "mentorText": "Timing is everything in trading. Align your strategies with institutional sessions to maximize your chances of success.",
      "mentorAnalogy": "Think of institutional session timings like the rush hour for public transport; understanding when the trains are busiest can help you plan your journey more effectively."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Trading Strategies Based on Candlestick Analysis",
    "label": "Forex Track",
    "body": "### Candlestick Strategies: Leveraging OHLC for Entry and Exit\nCandlestick patterns provide critical insights into market sentiment and potential price movements. This card focuses on **how pip values and spreads can enhance trading strategies**.\n\n* **Pip Value Calculation**: Determine the pip value for your currency pair to assess the risk-reward ratio accurately. For instance, in EURUSD, if the pip value is $10 for a standard lot, ensure your strategy accommodates this in your profit targets.\n* **Spread Consideration**: Analyze the spread during different market sessions. For example, if the spread widens to 3 pips during low liquidity hours, adjust your entry and exit points to maintain profitability.\n* **Pattern Recognition**: Utilize candlestick patterns such as engulfing or pin bars to signal potential reversals. For example, a bullish engulfing pattern at a support level in GBPJPY may indicate a strong buying opportunity, especially if confirmed by a favorable pip value.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a one-pip movement in a currency pair."
        },
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        }
      ],
      "whyThisMatters": "Understanding how pip values and spreads interact with candlestick patterns allows traders to formulate precise entry and exit strategies, enhancing overall trading effectiveness.",
      "realLifeExample": "In a trading session, if EURUSD shows a bullish engulfing pattern at 1.1000 with a pip value of $10, and the spread is 2 pips, a trader might set a buy order at 1.1002, targeting a 20-pip profit.",
      "commonMistake": "Traders often overlook the impact of spread changes during different market sessions, leading to unexpected losses.",
      "quickNote": "Effective candlestick strategies require a thorough understanding of pip values and spreads.",
      "mentorText": "When developing your trading strategy, always calculate the pip value for your trades. This ensures that your profit targets align with the risk you're willing to take.",
      "mentorAnalogy": "Think of trading strategies like an architect designing a building. Just as an architect must consider the foundation and materials, you must consider pip values and spreads to build a solid trading plan."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "concept",
    "title": "Risk Management in Forex Trading",
    "label": "Forex Track",
    "body": "### Risk Management: Utilizing Candlestick Insights\nEffective risk management is essential in Forex trading, particularly when informed by candlestick analysis. This card focuses on **how to set stop-loss and take-profit levels using candlestick patterns**.\n\n* **Stop-Loss Placement**: Position stop-loss orders based on recent swing highs or lows identified through candlestick patterns. For instance, if a bearish pin bar forms at 1.1500 in AUDUSD, set a stop-loss above the high at 1.1510 to mitigate risk.\n* **Take-Profit Strategy**: Use the height of candlestick patterns to project potential price targets. For example, if a bullish engulfing pattern at 1.2000 has a height of 50 pips, set a take-profit at 1.2050 to capitalize on the expected move.\n* **Risk-Reward Ratio**: Maintain a minimum risk-reward ratio of 1:2. If your stop-loss is 20 pips, ensure your take-profit is at least 40 pips away, aligning with the candlestick analysis to validate the trade setup.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Take-Profit",
          "definition": "An order placed to sell a security when it reaches a certain price to secure profits."
        }
      ],
      "whyThisMatters": "Implementing effective risk management strategies based on candlestick insights protects capital and enhances long-term trading success.",
      "realLifeExample": "In a trading scenario, if USDJPY forms a bearish engulfing pattern at 110.50, a trader might set a stop-loss at 110.70 and a take-profit at 110.30, ensuring a 1:2 risk-reward ratio.",
      "commonMistake": "A frequent error is placing stop-loss orders too close to the market price, leading to premature exits from trades.",
      "quickNote": "Candlestick patterns are vital for informed risk management in Forex trading.",
      "mentorText": "Always base your stop-loss and take-profit levels on candlestick formations. This approach not only protects your capital but also aligns your trades with market sentiment.",
      "mentorAnalogy": "Consider risk management in trading like a pilot calculating fuel needs for a flight. Just as a pilot ensures enough fuel for the journey, you must ensure adequate risk management to navigate market volatility."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex Trading Concepts",
    "label": "Forex Track",
    "body": "### Practical Application: Pip Values and Bid-Ask Spreads\nEngage in exercises that reinforce your understanding of pip values and bid-ask spreads in conjunction with candlestick analysis. This card focuses on **applying theoretical knowledge to real-world scenarios**.\n\n* **Scenario Analysis**: Analyze a candlestick chart of GBPUSD and identify potential entry points based on pip values and current spreads. Determine if the current spread allows for a profitable trade.\n* **Trade Simulation**: Simulate a trade based on a bullish candlestick pattern. Calculate the pip value for a standard lot and set appropriate stop-loss and take-profit levels based on your analysis.\n* **Market Conditions Assessment**: Evaluate how different market conditions (e.g., news releases) affect pip values and spreads. Adjust your trading plan accordingly to maintain profitability.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the highest price a buyer is willing to pay and the lowest price a seller will accept."
        },
        {
          "term": "Trade Simulation",
          "definition": "A practice exercise that allows traders to execute trades in a risk-free environment."
        }
      ],
      "whyThisMatters": "Applying theoretical concepts in practical scenarios solidifies understanding and prepares traders for real market conditions.",
      "realLifeExample": "During a simulated trading session, if GBPUSD shows a bullish engulfing pattern at 1.3000 with a spread of 2 pips, calculate the pip value and set a buy order at 1.3002, targeting a 20-pip profit.",
      "commonMistake": "Traders often fail to adjust their strategies based on changing market conditions, leading to unexpected losses.",
      "quickNote": "Practical exercises enhance your ability to apply Forex concepts effectively.",
      "mentorText": "When practicing, always simulate real market conditions. This will prepare you for the unexpected and help you refine your trading strategies.",
      "mentorAnalogy": "Think of trading practice like a flight simulator for pilots. Just as pilots practice maneuvers in a safe environment, you must simulate trades to prepare for real market scenarios."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a bullish candlestick pattern forming on the EURUSD chart at 1.1200, with a current spread of 1 pip. What should you consider before placing a trade?",
      "options": [
        {
          "id": "0",
          "text": "Place a buy order at 1.1201 without considering the pip value.",
          "isCorrect": false,
          "feedback": "Not considering pip value may lead to miscalculating potential profits or losses."
        },
        {
          "id": "1",
          "text": "Calculate the pip value and ensure the spread allows for a profitable trade before placing the order.",
          "isCorrect": true,
          "feedback": "Calculating the pip value ensures that your trade is aligned with your risk management strategy."
        },
        {
          "id": "2",
          "text": "Ignore the spread and place a market order immediately.",
          "isCorrect": false,
          "feedback": "Ignoring the spread can result in entering a trade at a disadvantage."
        },
        {
          "id": "3",
          "text": "Set a stop-loss at 1.1190 without analyzing the candlestick pattern.",
          "isCorrect": false,
          "feedback": "Setting a stop-loss without analyzing the pattern may expose you to unnecessary risk."
        }
      ]
    },
    "visualKey": "forex-pip-value"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Trading Insights",
    "label": "Forex Track",
    "body": "### Summary: Key Insights from Forex Trading\nThis card summarizes the critical insights gained from the Forex track, emphasizing the importance of pip values and institutional session dynamics. Understanding these concepts is essential for effective trading.\n\n* **Pip Value Importance**: Recognizing how pip values affect trade profitability is fundamental. For instance, a change in pip value can significantly impact your overall risk-reward calculations.\n* **Session Dynamics**: Different trading sessions exhibit varying liquidity and volatility. For example, the overlap of the London and New York sessions often results in tighter spreads and increased trading opportunities.\n* **Candlestick Analysis**: Utilizing candlestick patterns effectively allows traders to identify potential market reversals and continuations, enhancing decision-making processes in trading strategies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Institutional Session Dynamics",
          "definition": "The behavior of market participants during different trading sessions that affects liquidity and volatility."
        },
        {
          "term": "Risk-Reward Calculation",
          "definition": "The assessment of potential profit against potential loss in a trade."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the foundational knowledge necessary for executing informed trading decisions in the Forex market.",
      "realLifeExample": "In a trading week, understanding that the London session typically sees tighter spreads can lead to more strategic entries, such as placing trades during this time for pairs like EURUSD.",
      "commonMistake": "Traders often neglect to consider the impact of session dynamics on their trading strategies, leading to suboptimal performance.",
      "quickNote": "Mastering pip values and session dynamics is crucial for Forex trading success.",
      "mentorText": "Reflect on the insights gained from this track. Each component, from pip values to session dynamics, plays a vital role in your trading strategy.",
      "mentorAnalogy": "Think of your trading insights as the various instruments in an orchestra. Each insight contributes to the overall harmony of your trading strategy, ensuring a well-rounded approach."
    },
    "taskData": null,
    "visualKey": "forex-pip-value"
  }
];
