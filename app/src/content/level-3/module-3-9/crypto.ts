import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto CEX/DEX Book Fragmentations",
    "label": "Crypto Track",
    "body": "### Crypto Order Book Fragmentation: CEX vs. DEX Dynamics\nCrypto exchanges exhibit distinct order book fragmentation, where centralized exchanges (CEX) and decentralized exchanges (DEX) can create significant volume imbalances. This card teaches **how to identify critical fragmentation points between CEX and DEX**.\n\n* **CEX Liquidity Gaps**: Monitor CEX order books for liquidity gaps exceeding 20% compared to DEX counterparts, especially during high volatility sessions like the New York opening.\n* **DEX Price Divergence**: Identify price divergence when a DEX shows a 5% price difference from a CEX, indicating potential arbitrage opportunities and volume imbalances.\n* **Fragmentation Alerts**: Set alerts for when CEX and DEX order books show a cumulative volume difference of over 30%, signaling potential market inefficiencies.",
    "context": {
      "keyTerms": [
        {
          "term": "CEX",
          "definition": "Centralized Exchange, a platform where trades are executed through a central authority."
        },
        {
          "term": "DEX",
          "definition": "Decentralized Exchange, a platform that allows peer-to-peer trading without a central authority."
        }
      ],
      "whyThisMatters": "Understanding CEX/DEX fragmentation is crucial for capitalizing on volume imbalances that can lead to profitable trades.",
      "realLifeExample": "On October 15, 2023, BTC traded at $30,000 on Binance (CEX) while Uniswap (DEX) showed a price of $28,500, indicating a 5% divergence and a potential arbitrage opportunity.",
      "commonMistake": "Traders often overlook the impact of liquidity differences between CEX and DEX, leading to missed trading opportunities.",
      "quickNote": "CEX and DEX fragmentation can reveal hidden volume imbalances.",
      "mentorText": "When you see a significant price difference between CEX and DEX, pay attention. That’s where the market inefficiencies lie, and you can capitalize on them.",
      "mentorAnalogy": "Think of CEX and DEX like two different airports. If one airport has a flight delay while the other is on time, you can take advantage of the situation by choosing the right flight path."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "concept",
    "title": "Understanding Volume Imbalances in Crypto",
    "label": "Crypto Track",
    "body": "### Volume Imbalances: Analyzing Crypto Price Action\nVolume imbalances in crypto markets occur when trading volume does not align with price movements, often indicating potential reversals or continuations. This card teaches **how to analyze price action alongside volume metrics**.\n\n* **Volume Spike Analysis**: Identify volume spikes that exceed the 30-day average by 50% during key price movements, signaling potential reversals or breakouts.\n* **Candle Body vs. Wick Analysis**: Examine candle bodies where the body range is narrower than the wick range, indicating potential exhaustion or indecision in the market.\n* **Exchange Volume Comparison**: Compare volume across multiple exchanges; a significant discrepancy can highlight areas of potential liquidity and price manipulation.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Imbalance",
          "definition": "A situation where the trading volume does not correspond with the price movement, indicating potential market inefficiencies."
        }
      ],
      "whyThisMatters": "Recognizing volume imbalances allows traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "On September 20, 2023, ETH showed a 60% volume spike on Coinbase while remaining flat on Kraken, indicating a potential price surge that followed.",
      "commonMistake": "Traders often misinterpret volume spikes as definitive signals without considering the context of price action.",
      "quickNote": "Volume imbalances can signal potential market reversals or continuations.",
      "mentorText": "Always look at the volume behind price movements. A spike in volume without a corresponding price change is a red flag that something is brewing.",
      "mentorAnalogy": "Think of volume like fuel in a car. If the car is moving but the fuel gauge shows empty, something is off. You need to check the engine."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "concept",
    "title": "Venue Volume Deviations",
    "label": "Crypto Track",
    "body": "### Identifying Venue Volume Deviations\nVenue volume deviations occur when trading volumes on different exchanges show significant discrepancies, indicating potential trading opportunities. This card teaches **how to effectively recognize and act on these deviations**.\n\n* **Volume Discrepancy Thresholds**: Establish a threshold of 25% volume deviation between exchanges; deviations beyond this level often precede price corrections or breakouts.\n* **Timeframe Analysis**: Analyze volume deviations across multiple timeframes (1-hour, 4-hour, daily) to confirm the strength and validity of the signal.\n* **Cross-Exchange Monitoring**: Utilize tools to monitor real-time volume across major exchanges; discrepancies can indicate market manipulation or emerging trends.",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Volume Deviation",
          "definition": "The difference in trading volume between different exchanges for the same asset."
        }
      ],
      "whyThisMatters": "Identifying venue volume deviations can provide insights into market sentiment and potential price movements.",
      "realLifeExample": "On October 10, 2023, LTC showed a 30% volume deviation between Binance and Bitfinex, leading to a subsequent price rally on Binance.",
      "commonMistake": "Traders often ignore volume deviations, focusing solely on price action, which can lead to missed opportunities.",
      "quickNote": "Monitor volume deviations across exchanges to uncover potential trading opportunities.",
      "mentorText": "When you see a significant volume difference between exchanges, take note. That’s your cue to investigate further and potentially act.",
      "mentorAnalogy": "Imagine a news report showing different ratings for the same event; the discrepancies can indicate where the real interest lies, just like in trading."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "concept",
    "title": "Strategies for Trading Volume Imbalances",
    "label": "Crypto Track",
    "body": "### Trading Strategies for Volume Imbalances\nDeveloping effective strategies for trading volume imbalances is essential for maximizing profit potential in crypto markets. This card teaches **specific tactics for positioning during volume imbalances**.\n\n* **Entry Point Strategies**: Enter trades when volume exceeds the average by 40% during critical price levels, confirming the strength of the move.\n* **Stop-Loss Placement**: Set stop-loss orders just below the last swing low or high, depending on the direction of the trade, to protect against false breakouts.\n* **Profit Targeting**: Use a risk-reward ratio of at least 1:2 when trading volume imbalances, ensuring that potential gains outweigh risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure that compares the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing targeted strategies for volume imbalances can enhance trading performance and risk management.",
      "realLifeExample": "On November 5, 2023, a trader entered a position in XRP when volume spiked 50% above average, targeting a 2:1 risk-reward ratio, resulting in a successful trade.",
      "commonMistake": "Traders often set profit targets too close to entry points, failing to capitalize on the full potential of volume-driven moves.",
      "quickNote": "Strategically trade volume imbalances to maximize profit potential.",
      "mentorText": "When you spot a volume imbalance, don’t just jump in. Plan your entry, set your stops, and define your targets to ensure a disciplined approach.",
      "mentorAnalogy": "Think of trading volume imbalances like a chef timing the cooking of multiple dishes; you need to know when to add ingredients and when to pull them off the heat for the best results."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "concept",
    "title": "Risks Associated with Crypto Volume Imbalances",
    "label": "Crypto Track",
    "body": "### Crypto Volume Imbalances: Identifying Risks\nTrading volume imbalances in the crypto market can expose traders to significant risks. This card highlights **the potential pitfalls and mitigation strategies** necessary for effective trading.\n\n* **Market Manipulation**: Volume imbalances can be exploited by large players to create false signals. Traders should be wary of sudden spikes in volume that do not correlate with price movement.\n* **Liquidity Issues**: Low liquidity during volume imbalances can lead to slippage. Always assess the order book depth before executing trades in thinly traded assets.\n* **Emotional Trading**: The volatility associated with volume imbalances can trigger emotional responses. Establish strict entry and exit rules to avoid impulsive decisions during high volatility periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Imbalance",
          "definition": "A discrepancy between buy and sell orders that can indicate potential price movement."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding the risks associated with volume imbalances is crucial for maintaining a disciplined trading approach and avoiding significant losses.",
      "realLifeExample": "On March 15, 2023, BTC experienced a 20% price drop following a sudden volume spike that led to a liquidity crunch, causing slippage for many traders.",
      "commonMistake": "Traders often enter positions based solely on volume spikes without confirming price action, leading to potential losses.",
      "quickNote": "Always assess the context of volume imbalances to mitigate trading risks.",
      "mentorText": "When you see a volume spike, don’t just jump in. Analyze the order book and market conditions to ensure you’re not falling into a trap set by larger players.",
      "mentorAnalogy": "Think of trading like navigating a ship through fog. Volume imbalances can obscure your view, and without proper instruments to gauge depth, you risk running aground."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "concept",
    "title": "Case Studies on Crypto Volume Imbalances",
    "label": "Crypto Track",
    "body": "### Crypto Volume Imbalances: Analyzing Case Studies\nReal-world examples provide valuable insights into trading strategies based on volume imbalances. This card analyzes **successful trades that leveraged volume discrepancies** in the crypto market.\n\n* **Ethereum Surge on July 5, 2023**: A 15% price increase was observed when ETH's volume imbalance indicated strong buying interest, confirmed by a breakout above a key resistance level.\n* **Ripple's Decline on August 12, 2023**: XRP's price dropped 10% after a significant volume imbalance revealed heavy selling pressure, leading to a breakdown below support.\n* **Litecoin Recovery on September 20, 2023**: LTC saw a 25% rebound as volume imbalances indicated a shift in sentiment, with buyers stepping in after a prolonged downtrend.",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout",
          "definition": "A price movement that occurs when an asset moves beyond a defined support or resistance level."
        },
        {
          "term": "Support Level",
          "definition": "A price level where buying interest is strong enough to prevent the price from declining further."
        }
      ],
      "whyThisMatters": "Analyzing case studies helps traders understand how to apply volume imbalance concepts in real trading scenarios, enhancing decision-making skills.",
      "realLifeExample": "On July 5, 2023, ETH traded at $2,000 with a volume imbalance indicating strong buying pressure, leading to a breakout to $2,300 within hours.",
      "commonMistake": "Traders often overlook the importance of confirming volume imbalances with price action, leading to missed opportunities or losses.",
      "quickNote": "Case studies illustrate the practical application of volume imbalances in trading.",
      "mentorText": "Look at past trades where volume imbalances played a key role. Each case tells a story that can guide your future decisions.",
      "mentorAnalogy": "Just like a detective examines evidence to solve a case, you must analyze volume imbalances to uncover the truth behind price movements."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Crypto Volume Imbalances",
    "label": "Crypto Track",
    "body": "### Crypto Volume Imbalances: Engaging in Practical Exercises\nApplying theoretical knowledge through practical exercises is essential for mastering volume imbalances. This card provides **scenarios to practice identifying and acting on volume imbalances** in crypto trading.\n\n* **Scenario 1**: Analyze a chart where BTC shows a volume spike without a corresponding price increase. Determine the potential implications and your trading strategy.\n* **Scenario 2**: Review a recent ETH price action where a volume imbalance led to a breakout. Identify entry and exit points based on the volume data.\n* **Scenario 3**: Examine a case where a sudden drop in volume precedes a price reversal in LTC. Assess how this could influence your trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Entry Point",
          "definition": "The price level at which a trader decides to enter a trade."
        },
        {
          "term": "Exit Point",
          "definition": "The price level at which a trader decides to close a trade."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the ability to recognize and act on volume imbalances, critical for effective trading strategies.",
      "realLifeExample": "In a recent exercise, participants analyzed a BTC chart where a volume spike occurred at $30,000, leading to a subsequent price drop to $28,000.",
      "commonMistake": "Traders often fail to practice identifying volume imbalances in real-time scenarios, limiting their ability to react appropriately.",
      "quickNote": "Practice scenarios help solidify your understanding of volume imbalances.",
      "mentorText": "Engage with these scenarios as if you were trading live. Each decision you make should be backed by your analysis of volume data.",
      "mentorAnalogy": "Think of these exercises like a flight simulator for pilots. You need to practice in a controlled environment before taking off in real markets."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In the scenario where BTC shows a volume spike without a price increase, what should be your initial reaction?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering a long position without confirming price action can lead to losses."
        },
        {
          "id": "1",
          "text": "Analyze the order book for buy and sell pressure.",
          "isCorrect": true,
          "feedback": "Analyzing the order book helps confirm whether the volume spike is legitimate or a trap."
        },
        {
          "id": "2",
          "text": "Ignore the volume spike and wait for a price confirmation.",
          "isCorrect": false,
          "feedback": "Ignoring volume spikes can result in missed opportunities if the movement is genuine."
        },
        {
          "id": "3",
          "text": "Set a stop-loss and enter a short position.",
          "isCorrect": false,
          "feedback": "Entering a short position without understanding the context of the volume spike can lead to unnecessary risk."
        }
      ]
    },
    "visualKey": "crypto-vi-fragmentation"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Volume Imbalances",
    "label": "Crypto Track",
    "body": "### Crypto Volume Imbalances: Key Takeaways\nThis card summarizes the essential concepts regarding volume imbalances in the crypto market. Understanding these elements is vital for effective trading strategies.\n\n* **Identifying Risks**: Recognize the risks associated with trading volume imbalances, including market manipulation and liquidity issues, to make informed decisions.\n* **Case Study Insights**: Analyze real-world case studies to understand how volume imbalances can lead to successful trades, reinforcing the importance of context in trading.\n* **Practical Application**: Engage in practical exercises to apply theoretical knowledge, ensuring readiness to act on volume imbalances in live trading scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Manipulation",
          "definition": "The act of artificially inflating or deflating the price of an asset."
        },
        {
          "term": "Contextual Analysis",
          "definition": "Evaluating market conditions and data to inform trading decisions."
        }
      ],
      "whyThisMatters": "Summarizing key concepts reinforces understanding and retention, essential for professional trading.",
      "realLifeExample": "Traders who successfully identified volume imbalances during the ETH surge on July 5, 2023, were able to capitalize on a 15% price increase.",
      "commonMistake": "Failing to review and summarize key concepts can lead to gaps in knowledge and poor trading decisions.",
      "quickNote": "Revisiting key concepts solidifies your understanding of volume imbalances.",
      "mentorText": "Take the time to review these key takeaways. They are the foundation upon which your trading strategies should be built.",
      "mentorAnalogy": "Just as a pilot reviews flight plans and checklists before takeoff, you must revisit these concepts to ensure a smooth trading experience."
    },
    "taskData": null,
    "visualKey": "crypto-vi-fragmentation"
  }
];
