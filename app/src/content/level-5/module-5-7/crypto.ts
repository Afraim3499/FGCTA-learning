import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Funding Rate Settlements and Break-Even Stops",
    "label": "Crypto Track",
    "body": "### Break-Even Protocol: Timing Adjustments Near Funding Rate Settlements\nEstablishing break-even stops is crucial when trading perpetual contracts, especially as funding rate settlements approach. This card outlines **the timing for moving stops to break-even in relation to funding rates**.\n\n* **Funding Rate Dynamics**: Funding rates are periodic payments exchanged between long and short positions. Adjust your stop loss to break-even shortly before the funding rate settlement to avoid unnecessary losses.\n* **Settlement Timing**: Funding rates typically settle every 8 hours. Monitor these times closely; adjust your stop loss 30 minutes prior to settlement to protect against volatility spikes.\n* **Volatility Considerations**: If the market exhibits high volatility leading up to the funding settlement, consider delaying the break-even adjustment to avoid premature stop-outs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee paid between long and short positions in a perpetual contract."
        }
      ],
      "whyThisMatters": "Understanding the timing of funding rate settlements allows traders to optimize their stop-loss strategies, preserving capital while maximizing potential gains.",
      "realLifeExample": "On a BTCUSDT perpetual contract, if the funding rate is set to settle at 12:00 UTC, adjust your stop loss to break-even by 11:30 UTC to mitigate risk during potential price fluctuations.",
      "commonMistake": "Traders often move their stops to break-even too early, resulting in stop-outs before the funding rate settlement can impact the position.",
      "quickNote": "Adjust break-even stops 30 minutes before funding rate settlements to avoid unnecessary losses.",
      "mentorText": "As your coach, I advise you to respect the timing of funding settlements. Adjust your stops strategically to avoid being taken out by market noise.",
      "mentorAnalogy": "Think of this like a pilot preparing for landing; you must adjust your altitude carefully before reaching the runway to ensure a smooth touchdown."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Analyzing Funding Rates for Stop Adjustments",
    "label": "Crypto Track",
    "body": "### Break-Even Protocol: Funding Rate Analysis for Stop Adjustments\nAnalyzing funding rates is essential for effective stop-loss management in perpetual contracts. This card covers **how to interpret funding rates to optimize your break-even stop adjustments**.\n\n* **Rate Interpretation**: A positive funding rate indicates that long positions pay shorts, suggesting bullish sentiment. Adjust your stop loss to break-even when the rate exceeds 0.1% to capitalize on momentum.\n* **Rate Trends**: Monitor the historical funding rate trends over the past 30 days. If rates are consistently increasing, consider moving your stop loss to break-even earlier to secure profits.\n* **Market Sentiment**: Use funding rate spikes as signals for potential reversals. If the funding rate spikes above 0.2% unexpectedly, evaluate your position and consider adjusting your stop to protect against a sudden downturn.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate Trend",
          "definition": "The historical pattern of funding rates over a specified period."
        }
      ],
      "whyThisMatters": "Proper analysis of funding rates allows traders to make informed decisions about when to adjust their stop losses, enhancing trade management.",
      "realLifeExample": "If the ETHUSDT funding rate rises to 0.15% after a bullish rally, consider moving your stop loss to break-even to lock in profits while allowing for further upside.",
      "commonMistake": "Ignoring funding rate trends can lead to missed opportunities for optimizing stop adjustments, resulting in suboptimal trade management.",
      "quickNote": "Monitor funding rates closely; adjust break-even stops when rates exceed 0.1% to maximize profit potential.",
      "mentorText": "I want you to analyze funding rates like a data scientist. Use the numbers to guide your decisions on stop adjustments, ensuring you stay ahead of market movements.",
      "mentorAnalogy": "Consider this like a weather forecast; understanding the trends allows you to prepare for potential storms ahead, ensuring your position remains protected."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Market Volatility and Crypto Stops",
    "label": "Crypto Track",
    "body": "### Break-Even Protocol: Managing Stops in Volatile Markets\nMarket volatility significantly impacts the effectiveness of break-even stop adjustments. This card explores **strategies for adjusting stops in response to market volatility**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. If the ATR indicates a spike, consider delaying your break-even adjustment to avoid being stopped out prematurely.\n* **Dynamic Stop Placement**: In high-volatility conditions, place your break-even stop further from the entry point, allowing for natural price fluctuations while still protecting your capital.\n* **Risk Mitigation**: Implement a trailing stop strategy during volatile periods. This allows you to capture profits while adjusting your stop loss dynamically as the market moves in your favor.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset for that period."
        }
      ],
      "whyThisMatters": "Understanding market volatility helps traders make informed decisions about stop adjustments, reducing the risk of premature stop-outs.",
      "realLifeExample": "If the ATR for XRPUSDT is 0.15 during a high-volatility phase, consider placing your break-even stop 0.25 away from entry to accommodate price swings.",
      "commonMistake": "Traders often set break-even stops too close during volatile conditions, leading to unnecessary stop-outs.",
      "quickNote": "Assess market volatility using ATR; adjust break-even stops accordingly to avoid premature exits.",
      "mentorText": "As your mentor, I urge you to respect market volatility. Use ATR to guide your stop adjustments, ensuring you don't get shaken out by noise.",
      "mentorAnalogy": "Think of this like a tightrope walker; you must maintain balance and adjust your position based on the sway of the rope to avoid falling."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Integrating Trading Strategies with Break-Even Protocols",
    "label": "Crypto Track",
    "body": "### Break-Even Protocol: Aligning Strategies with Stop Adjustments\nIntegrating trading strategies with break-even protocols is vital for effective risk management in crypto trading. This card discusses **how to align your trading strategies with break-even stop adjustments**.\n\n* **Strategy Compatibility**: Ensure your trading strategy accounts for break-even stops. For instance, if using a scalping strategy, adjust your stops to break-even after a small profit target is hit to secure gains quickly.\n* **Market Condition Alignment**: Adapt your break-even adjustments based on market conditions. In trending markets, consider moving stops to break-even after a 1% gain; in range-bound markets, wait for a 2% gain to allow for price fluctuations.\n* **Feedback Loop**: Continuously evaluate the effectiveness of your break-even adjustments in relation to your trading strategy. Use performance metrics to refine your approach and improve overall trade management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scalping Strategy",
          "definition": "A trading strategy focused on making small profits from numerous trades over short time frames."
        }
      ],
      "whyThisMatters": "Integrating break-even protocols with trading strategies enhances risk management, allowing traders to secure profits while maintaining exposure to favorable market movements.",
      "realLifeExample": "If employing a scalping strategy on LTCUSDT, move your stop to break-even after achieving a 1% gain to lock in profits while minimizing risk.",
      "commonMistake": "Failing to adapt break-even protocols to the specific trading strategy can lead to inconsistent results and increased risk exposure.",
      "quickNote": "Align break-even stops with your trading strategy to enhance risk management and profit retention.",
      "mentorText": "I want you to think strategically. Your break-even adjustments should complement your trading style, ensuring you maximize your gains while minimizing risk.",
      "mentorAnalogy": "Imagine a chef adjusting cooking times based on the dish; just as timing is crucial in cooking, so is aligning your stop adjustments with your trading strategy."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Risk Management for Crypto Perpetual Contracts",
    "label": "Crypto Track",
    "body": "### Unique Risks: Crypto Perpetual Contracts\nEffective risk management for crypto perpetual contracts requires an understanding of their inherent volatility and funding mechanisms. This card details **how to establish break-even stop protocols tailored for perpetual contracts**.\n\n* **Funding Rate Considerations**: The funding rate can significantly impact trade profitability; ensure that your break-even stop accounts for this cost to avoid premature exits.\n* **Volatility Adjustments**: Use historical volatility metrics to determine appropriate stop-loss distances, ensuring that your break-even stop does not trigger during normal price fluctuations.\n* **Market Sentiment Analysis**: Monitor sentiment indicators to gauge potential reversals; adjust your break-even stops based on shifts in market psychology to protect against false breakouts.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual contracts."
        },
        {
          "term": "Volatility Metrics",
          "definition": "Statistical measures that quantify the price fluctuations of an asset over time."
        }
      ],
      "whyThisMatters": "Understanding these unique risks enables traders to implement break-even stops that effectively safeguard capital while allowing for potential upside in volatile markets.",
      "realLifeExample": "When trading BTCUSDT perpetual contracts, if the funding rate is 0.01% and the market is experiencing 5% volatility, adjust your break-even stop to account for these factors to avoid being stopped out prematurely.",
      "commonMistake": "Traders often neglect to factor in funding rates when setting break-even stops, leading to unexpected losses.",
      "quickNote": "Always incorporate funding rates and volatility into your break-even stop strategy for perpetual contracts.",
      "mentorText": "When managing risk in perpetual contracts, I always remind my traders to consider the funding rate. It’s not just about where you entered the trade, but also the costs associated with holding that position.",
      "mentorAnalogy": "Think of it like a pilot adjusting altitude based on air pressure changes; just as a pilot must account for atmospheric conditions, you must adjust your break-even stops based on market conditions."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "concept",
    "title": "Liquidity Analysis for Break-Even Stops",
    "label": "Crypto Track",
    "body": "### Assessing Market Liquidity: Break-Even Stops\nLiquidity plays a crucial role in executing break-even stops effectively in the crypto market. This card outlines **how to analyze liquidity conditions to optimize stop placement**.\n\n* **Order Book Depth**: Evaluate the order book to determine the depth at key price levels; a thin order book may lead to slippage when executing break-even stops.\n* **Volume Analysis**: Monitor trading volume spikes; high volume can indicate strong support or resistance levels, informing your decision to move stops to break-even.\n* **Market Impact Assessment**: Consider the potential market impact of your stop orders; avoid placing break-even stops at prices where large orders could trigger significant price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "The measure of the number of buy and sell orders at various price levels in the market."
        },
        {
          "term": "Volume Spikes",
          "definition": "Sudden increases in trading volume that can indicate market activity or sentiment shifts."
        }
      ],
      "whyThisMatters": "Liquidity analysis ensures that break-even stops are placed in a manner that minimizes slippage and maximizes execution efficiency.",
      "realLifeExample": "In a scenario where ETHUSDT shows a sudden volume spike at $2,000, placing your break-even stop just below this level could expose you to slippage if the order book is thin.",
      "commonMistake": "Failing to assess order book depth can lead to executing break-even stops at unfavorable prices due to slippage.",
      "quickNote": "Always analyze liquidity conditions before moving your stops to break-even to ensure optimal execution.",
      "mentorText": "I always tell my traders to look at the order book before moving their stops. If the liquidity isn’t there, you might get a worse fill than you expect.",
      "mentorAnalogy": "Imagine a chef gauging the availability of ingredients before starting a recipe; just as a chef needs to ensure all components are available, you must assess liquidity before executing your break-even strategy."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  },
  {
    "type": "practice",
    "title": "Practical Application of Break-Even Stops in Crypto",
    "label": "Crypto Track",
    "body": "### Simulating Break-Even Stops in Crypto Trading\nEngage in practical exercises to reinforce the application of break-even stops in various crypto trading scenarios. This card provides **realistic simulations to enhance your understanding**.\n\n* **Scenario Setup**: You enter a long position in LTCUSDT at $150, with a target of $160 and a stop-loss at $145. After the price reaches $155, evaluate whether to move your stop to break-even.\n* **Market Conditions**: Analyze the current market conditions, including volatility and liquidity, to determine if moving your stop to break-even is warranted.\n* **Outcome Evaluation**: After simulating the trade, assess the outcome based on your decision to move the stop; did it protect your capital effectively, or did it lead to a premature exit?",
    "context": {
      "keyTerms": [
        {
          "term": "Long Position",
          "definition": "A trade where the trader buys an asset expecting its price to rise."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell an asset when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Practicing these scenarios solidifies the decision-making process around break-even stops, enhancing execution in real trades.",
      "realLifeExample": "In a simulated environment, after entering a long position in XRPUSDT at $0.50, you decide to move your stop to break-even after reaching $0.55, only to see the price spike to $0.60 before retracing.",
      "commonMistake": "Traders often move their stops to break-even too early, missing out on potential gains when the market continues to trend favorably.",
      "quickNote": "Practice moving break-even stops in simulated scenarios to refine your decision-making skills.",
      "mentorText": "In practice, I want you to simulate these trades. Moving your stop too early can cost you, so always assess the market before making that move.",
      "mentorAnalogy": "Think of it like a surgeon deciding when to close an incision; you must assess the situation thoroughly before making a final decision on your stop placement."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You enter a long position in BTCUSDT at $30,000. The price rises to $31,000. What should you consider before moving your stop to break-even?",
      "options": [
        {
          "id": "0",
          "text": "The current funding rate and market volatility.",
          "isCorrect": true,
          "feedback": "Correct. Assessing the funding rate and volatility helps ensure you don’t get stopped out prematurely."
        },
        {
          "id": "1",
          "text": "The time of day and your trading strategy.",
          "isCorrect": false,
          "feedback": "Incorrect. While timing can matter, the funding rate and volatility are more critical in this scenario."
        },
        {
          "id": "2",
          "text": "The price of Bitcoin in the last month.",
          "isCorrect": false,
          "feedback": "Incorrect. Historical prices are less relevant than current market conditions when deciding on stops."
        },
        {
          "id": "3",
          "text": "Your emotional state and how you feel about the trade.",
          "isCorrect": false,
          "feedback": "Incorrect. Emotional factors should not influence your decision to move stops; focus on market data."
        }
      ]
    },
    "visualKey": "break-even-protocols"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Break-Even Protocols",
    "label": "Crypto Track",
    "body": "### Key Concepts: Moving Stops to Break-Even\nThis summary consolidates the essential elements of implementing break-even stop protocols in crypto trading. Understanding these concepts ensures effective risk management.\n\n* **Funding Rate Impact**: Always factor in the funding rate when determining break-even stops to avoid unnecessary losses.\n* **Market Volatility Awareness**: Recognize that high volatility can trigger break-even stops prematurely; adjust your strategy accordingly.\n* **Liquidity Considerations**: Ensure that your break-even stops are placed in liquid areas of the market to minimize slippage and maximize execution efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these protocols enhances a trader's ability to protect capital while allowing for potential profit in volatile crypto markets.",
      "realLifeExample": "In a volatile market, failing to account for the funding rate when moving your stop could lead to being stopped out at a loss when the market briefly retraces.",
      "commonMistake": "Traders often overlook the importance of liquidity when placing break-even stops, leading to unfavorable execution.",
      "quickNote": "Mastering break-even stop protocols is essential for effective risk management in crypto trading.",
      "mentorText": "Remember, the key to successful trading is not just about entering and exiting but knowing when to protect your gains. Always keep funding rates and liquidity in mind.",
      "mentorAnalogy": "Like a ship captain navigating through turbulent waters, you must adjust your course based on the conditions around you to ensure safe passage."
    },
    "taskData": null,
    "visualKey": "break-even-protocols"
  }
];
