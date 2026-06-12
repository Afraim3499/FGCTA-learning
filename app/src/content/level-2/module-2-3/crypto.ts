import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "CEX vs DEX Venue Fragmentation",
    "label": "Crypto Track",
    "body": "### Price Feed Dynamics: CEX vs DEX Venue Fragmentation\nCentralized exchanges (CEX) and decentralized exchanges (DEX) operate under fundamentally different structures, leading to significant price feed discrepancies. This card outlines **how venue fragmentation affects price accuracy and execution quality**.\n\n* **Price Discrepancy**: CEXs often have tighter spreads due to higher liquidity, while DEXs may exhibit wider spreads due to lower trading volumes, impacting the price feeds traders receive.\n* **Execution Speed**: CEXs typically offer faster execution speeds due to centralized order matching, whereas DEXs may experience delays, especially during high volatility, affecting real-time price data.\n* **Market Depth**: The depth of order books varies significantly; CEXs generally have more robust market depth, which can lead to more reliable price feeds compared to DEXs that may have fragmented liquidity pools.\n",
    "context": {
      "keyTerms": [
        {
          "term": "CEX",
          "definition": "Centralized exchange where trades are executed via a central authority."
        },
        {
          "term": "DEX",
          "definition": "Decentralized exchange that allows peer-to-peer trading without a central authority."
        }
      ],
      "whyThisMatters": "Understanding the differences between CEX and DEX price feeds is crucial for executing trades at optimal prices.",
      "realLifeExample": "During a market surge, BTC prices on Binance (CEX) were $65,000, while on Uniswap (DEX), they spiked to $66,500 due to lower liquidity.",
      "commonMistake": "Traders often assume that prices on CEXs and DEXs will align, leading to execution errors.",
      "quickNote": "CEXs provide more reliable price feeds than DEXs due to better liquidity.",
      "mentorText": "When trading, always check both CEX and DEX prices. If you're seeing a significant difference, it could impact your execution and profitability.",
      "mentorAnalogy": "Think of CEXs as a busy airport with multiple flights (liquidity) arriving and departing on time, while DEXs are like a small airstrip with fewer planes, leading to delays and unpredictability."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Understanding API Order Book Feeds",
    "label": "Crypto Track",
    "body": "### Price Feed Mechanics: Understanding API Order Book Feeds\nAPI order book feeds are essential for real-time price data in crypto trading, providing insights into market depth and liquidity. This card explains **how these feeds operate and their implications for trading strategies**.\n\n* **Real-Time Data**: API feeds deliver live updates on order book changes, allowing traders to react swiftly to market movements and adjust their strategies accordingly.\n* **Bid-Ask Spread Analysis**: Traders can analyze the bid-ask spread through API feeds to gauge market sentiment and identify potential entry and exit points based on liquidity conditions.\n* **Latency Considerations**: Be aware of latency in API feeds; delays can occur during high volatility, impacting the accuracy of price data and execution timing.\n",
    "context": {
      "keyTerms": [
        {
          "term": "API",
          "definition": "Application Programming Interface that allows software applications to communicate with each other."
        },
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset organized by price level."
        }
      ],
      "whyThisMatters": "Accurate understanding of API order book feeds is vital for executing trades at the right moment and maximizing profitability.",
      "realLifeExample": "Using the Binance API, a trader notices the BTC order book shows a $200 spread at 10:00 AM EST, indicating potential resistance at $65,000.",
      "commonMistake": "Failing to account for API latency can lead to executing trades at prices that are no longer valid.",
      "quickNote": "API order book feeds provide crucial real-time insights into market dynamics.",
      "mentorText": "Always monitor your API feeds closely. If you see a sudden change in the order book, be prepared to act quickly or reconsider your position.",
      "mentorAnalogy": "Using API feeds is like having a live feed from a stock exchange floor; it allows you to see the action as it unfolds, just like a trader on the floor."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Mechanics of Flash Crashes in Crypto Markets",
    "label": "Crypto Track",
    "body": "### Price Feed Analysis: Mechanics of Flash Crashes in Crypto Markets\nFlash crashes in crypto markets often result from sudden liquidity shortages and fragmented order books. This card examines **the mechanics behind these events and their impact on price feeds**.\n\n* **Liquidity Pool Fragmentation**: When liquidity is spread across multiple exchanges, a sudden sell-off can lead to significant price drops as orders are unable to be filled efficiently.\n* **Algorithmic Trading Triggers**: Many flash crashes are exacerbated by algorithmic trading systems that react to price movements, creating a feedback loop that accelerates the decline in prices.\n* **Price Feed Discrepancies**: During a flash crash, price feeds can become unreliable, displaying extreme volatility that may not reflect the actual market conditions due to low trading volume on certain platforms.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Flash Crash",
          "definition": "A rapid and extreme drop in asset prices, often followed by a quick recovery."
        },
        {
          "term": "Liquidity Shortage",
          "definition": "A situation where there are insufficient buy or sell orders to maintain normal price levels."
        }
      ],
      "whyThisMatters": "Understanding flash crash mechanics helps traders anticipate potential risks and adjust their strategies accordingly.",
      "realLifeExample": "On May 19, 2021, ETH experienced a flash crash, dropping from $4,000 to $1,700 within minutes due to liquidity issues across exchanges.",
      "commonMistake": "Traders often react impulsively during a flash crash, leading to poor decision-making and increased losses.",
      "quickNote": "Flash crashes highlight the importance of monitoring liquidity across exchanges.",
      "mentorText": "Stay calm during a flash crash. Analyze the liquidity and avoid making hasty decisions based on erratic price feeds.",
      "mentorAnalogy": "A flash crash is like a sudden traffic jam caused by an accident; the disruption can lead to chaos, but understanding the flow of traffic can help you navigate safely."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Impact of Liquidity Pools on Price Stability",
    "label": "Crypto Track",
    "body": "### Price Feed Stability: Impact of Liquidity Pools on Price Stability\nLiquidity pools play a crucial role in maintaining price stability in crypto markets. This card discusses **how these pools influence price feeds and trader decision-making**.\n\n* **Market Depth and Stability**: Deeper liquidity pools provide more stable price feeds, reducing the impact of large trades on market prices and minimizing slippage.\n* **Arbitrage Opportunities**: Traders can exploit price discrepancies between liquidity pools on different exchanges, but this requires real-time access to accurate price feeds to capitalize effectively.\n* **Volatility Management**: Understanding the liquidity available in pools allows traders to better manage their exposure during volatile market conditions, ensuring they can execute trades at desired prices.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Pool",
          "definition": "A collection of funds locked in a smart contract that facilitates trading on decentralized exchanges."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Liquidity pools directly affect price stability, impacting the reliability of price feeds and trading strategies.",
      "realLifeExample": "During a sudden market downturn, a trader notices that a liquidity pool on SushiSwap provides a stable price of $2,500 for ETH, while other exchanges fluctuate wildly due to low liquidity.",
      "commonMistake": "Traders often overlook the importance of liquidity pools, leading to unexpected slippage and execution issues.",
      "quickNote": "Stable liquidity pools enhance price feed reliability and reduce trading risks.",
      "mentorText": "Always assess the liquidity of the pools before executing large trades. A stable pool can save you from unnecessary losses due to slippage.",
      "mentorAnalogy": "Think of liquidity pools as reservoirs; a well-maintained reservoir can provide a steady supply of water (price stability), while a dry one leads to scarcity and unpredictability."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Variability of Price Feeds Across Crypto Exchanges",
    "label": "Crypto Track",
    "body": "### Price Feed Variability: Exchange Discrepancies\nPrice feeds across various crypto exchanges can differ significantly, impacting execution and strategy. This card explores **how these variances affect trading decisions**.\n\n* **Liquidity Disparities**: Major exchanges like Binance and Coinbase may show price differences of up to 5% during high volatility events, affecting execution quality and slippage.\n* **Feed Latency**: Direct price feeds from exchanges can have latency issues, with delays of up to 200 milliseconds affecting real-time trading decisions, especially in arbitrage strategies.\n* **Market Depth Variability**: Assessing order book depth is crucial; a DEX like Uniswap may have less depth compared to centralized exchanges, leading to larger price impacts on trades due to lower liquidity.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Disparities",
          "definition": "Differences in available buy and sell orders across exchanges."
        },
        {
          "term": "Feed Latency",
          "definition": "The delay in price feed updates from exchanges."
        },
        {
          "term": "Market Depth",
          "definition": "The volume of orders at various price levels in an order book."
        }
      ],
      "whyThisMatters": "Understanding price feed variability is essential for optimizing execution strategies and minimizing slippage.",
      "realLifeExample": "During the Ethereum network congestion on May 12, 2021, Binance displayed a price of $4,000 while a DEX showed $4,200, leading to potential arbitrage opportunities.",
      "commonMistake": "Traders often assume that prices are uniform across exchanges, leading to poor execution and missed opportunities.",
      "quickNote": "Price feeds vary significantly across exchanges, impacting trading execution.",
      "mentorText": "When you see a price on one exchange, don't assume it's the same everywhere. Always check multiple feeds to ensure you're making informed decisions.",
      "mentorAnalogy": "Think of trading like navigating through a busy airport; just as flight times can vary between airlines, so too can prices across exchanges."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Adapting Trading Strategies to Crypto Price Feeds",
    "label": "Crypto Track",
    "body": "### Strategy Adaptation: Price Feed Characteristics\nAdapting trading strategies to the unique characteristics of crypto price feeds is critical for success. This card discusses **how to tailor strategies based on feed types**.\n\n* **CEX vs. DEX Strategies**: Centralized exchanges (CEX) often allow for faster execution; thus, scalping strategies can be more effective, while decentralized exchanges (DEX) require longer-term strategies due to potential slippage.\n* **Arbitrage Opportunities**: Identify price discrepancies between CEX and DEX; for instance, if Bitcoin is priced at $60,000 on Coinbase and $60,500 on Uniswap, a quick arbitrage strategy can yield profits.\n* **Risk Management Adjustments**: Adjust stop-loss and take-profit levels based on the volatility of the exchange; for example, a DEX may require wider stops due to lower liquidity and higher price swings.\n",
    "context": {
      "keyTerms": [
        {
          "term": "CEX",
          "definition": "Centralized Exchange, where trades are facilitated by a central authority."
        },
        {
          "term": "DEX",
          "definition": "Decentralized Exchange, where trades occur directly between users."
        },
        {
          "term": "Arbitrage",
          "definition": "The practice of taking advantage of price differences between markets."
        }
      ],
      "whyThisMatters": "Adapting strategies to the specific characteristics of price feeds enhances execution efficiency and profitability.",
      "realLifeExample": "A trader executing a scalping strategy on Binance during high volatility can capture price movements of up to 3% within seconds, while similar trades on a DEX may result in larger slippage.",
      "commonMistake": "Failing to adjust strategies based on the exchange type can lead to increased risk and reduced profitability.",
      "quickNote": "Tailor your trading strategies to the specific characteristics of CEX and DEX price feeds.",
      "mentorText": "Your strategy should evolve based on where you're trading. If you're on a DEX, think longer-term; on a CEX, you can be more aggressive.",
      "mentorAnalogy": "Just as a chef adjusts cooking times based on the type of stove, you must adapt your trading strategies based on the exchange environment."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "practice",
    "title": "Practical Analysis of Crypto Price Feeds",
    "label": "Crypto Track",
    "body": "### Price Feed Analysis: CEX vs. DEX\nEngage in practical exercises to analyze crypto price feeds, focusing on differences between CEX and DEX environments. This card provides **real-world scenarios for analysis**.\n\n* **Scenario 1**: Analyze the price of Litecoin on Binance and Uniswap during a market event. Identify discrepancies and calculate potential arbitrage profits.\n* **Scenario 2**: Monitor the latency of price updates on a CEX versus a DEX during a high-volume trading hour. Assess how this affects your execution strategy.\n* **Scenario 3**: Examine the order book depth on both platforms for Ethereum. Determine how this impacts your trade size and slippage risk when executing a market order.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a cryptocurrency immediately at the current market price."
        },
        {
          "term": "Order Book Depth",
          "definition": "The number of buy and sell orders at different price levels."
        },
        {
          "term": "Arbitrage Profit",
          "definition": "The profit made from buying low on one exchange and selling high on another."
        }
      ],
      "whyThisMatters": "Practical analysis sharpens decision-making skills and enhances understanding of market dynamics.",
      "realLifeExample": "During a trading session, you find Bitcoin priced at $58,000 on Kraken and $58,500 on a DEX; executing an arbitrage trade could yield a $500 profit per Bitcoin.",
      "commonMistake": "Overlooking the importance of real-time analysis can lead to missed opportunities and increased risks.",
      "quickNote": "Practice analyzing price feeds to understand discrepancies and improve execution.",
      "mentorText": "When you analyze price feeds, think critically about how each exchange operates. Look for opportunities and be aware of the risks involved.",
      "mentorAnalogy": "Like a pilot checking multiple instruments before takeoff, you must analyze various price feeds to ensure a safe and profitable trading journey."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You notice Bitcoin is priced at $45,000 on Binance and $45,500 on a DEX. What should you consider before executing an arbitrage trade?",
      "options": [
        {
          "id": "0",
          "text": "The transaction fees on both platforms.",
          "isCorrect": true,
          "feedback": "Transaction fees can significantly impact the profitability of your arbitrage trade."
        },
        {
          "id": "1",
          "text": "The time of day for executing the trade.",
          "isCorrect": false,
          "feedback": "While timing can affect volatility, it is not the primary concern for this specific arbitrage opportunity."
        },
        {
          "id": "2",
          "text": "The historical price trends of Bitcoin.",
          "isCorrect": false,
          "feedback": "Historical trends do not directly impact the immediate arbitrage opportunity."
        },
        {
          "id": "3",
          "text": "The number of trades executed on the DEX.",
          "isCorrect": false,
          "feedback": "While volume can indicate liquidity, it is not the main factor in this scenario."
        }
      ]
    },
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Price Feed Insights",
    "label": "Crypto Track",
    "body": "### Key Insights: Crypto Price Feeds\nUnderstanding crypto price feeds is essential for effective trading. This card summarizes **the critical insights gained regarding venue fragmentation and its impact on trading**.\n\n* **Fragmentation Impact**: Price feeds are fragmented across exchanges, leading to potential arbitrage opportunities and execution challenges that traders must navigate.\n* **Execution Strategies**: Different strategies are required for CEX and DEX environments, emphasizing the need for adaptability based on the trading venue.\n* **Real-Time Analysis**: Continuous monitoring of price feeds is vital to capitalize on discrepancies and manage risk effectively in a volatile market.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Fragmentation",
          "definition": "The division of trading across multiple exchanges leading to price discrepancies."
        },
        {
          "term": "Execution Challenges",
          "definition": "Difficulties faced by traders in executing trades effectively due to varying price feeds."
        },
        {
          "term": "Continuous Monitoring",
          "definition": "The ongoing observation of price feeds to identify trading opportunities."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the importance of understanding price feeds for strategic trading.",
      "realLifeExample": "Traders who effectively monitor price feeds can exploit a $100 price difference for Bitcoin across exchanges, resulting in substantial profits.",
      "commonMistake": "Failing to recognize the implications of venue fragmentation can lead to poor trading decisions.",
      "quickNote": "Crypto price feeds are fragmented, requiring adaptive strategies and real-time analysis.",
      "mentorText": "Always keep your finger on the pulse of price feeds. Fragmentation can create opportunities, but only if you know where to look.",
      "mentorAnalogy": "Like a detective piecing together clues from different sources, you must analyze various price feeds to uncover trading opportunities."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  }
];
