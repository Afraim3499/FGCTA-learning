import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Venue Mismatches in Crypto",
    "label": "Crypto Track",
    "body": "### Venue Mismatches: Impact on Candlestick Formations\nMulti-venue order books create unique challenges in crypto trading. This card details **how discrepancies between venues affect candlestick patterns and trading strategies**.\n\n* **Order Book Disparity**: Analyze the difference in price levels across multiple exchanges; a 2% price variance between Binance and Kraken can lead to false candlestick signals.\n* **Liquidity Gaps**: Identify liquidity mismatches; for instance, a sudden spike in buy orders on a low-volume exchange can distort candlestick formations, misleading traders.\n* **Execution Timing**: Recognize that execution delays can occur; a trade executed on a slower venue may not reflect the real-time market, impacting the perceived candlestick structure.",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Mismatch",
          "definition": "A discrepancy in price or liquidity between different trading venues."
        }
      ],
      "whyThisMatters": "Understanding venue mismatches is critical for accurate candlestick analysis and effective trading strategies in crypto markets.",
      "realLifeExample": "On October 15, 2023, BTC/USD showed a 3% price difference between Bitfinex and Huobi during a high volatility event, leading to misleading candlestick formations on both platforms.",
      "commonMistake": "Traders often overlook venue differences, leading to misinterpretations of market signals and poor execution.",
      "quickNote": "Venue mismatches can distort candlestick patterns, impacting trading decisions.",
      "mentorText": "When analyzing candlesticks, always check multiple venues. A 2% difference can change your entire strategy. Don’t let a single venue dictate your decisions.",
      "mentorAnalogy": "Think of trading across venues like navigating different airports; each has its own traffic patterns and delays, which can affect your flight path."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Spot vs. Perpetual Contract Structures",
    "label": "Crypto Track",
    "body": "### Contract Structures: Spot vs. Perpetual\nSpot and perpetual contracts represent two distinct trading mechanisms in crypto. This card explains **how each structure influences candlestick patterns and market behavior**.\n\n* **Immediate Settlement**: Spot contracts settle instantly, reflecting real-time price changes; for example, a sudden price surge in ETH/USD on a spot exchange will create immediate candlestick spikes.\n* **Funding Rates**: Perpetual contracts involve funding fees that can create price oscillations; for instance, if funding rates are high, the candlestick patterns may show increased volatility in the underlying asset.\n* **Market Sentiment**: Spot markets often reflect immediate sentiment, while perpetual contracts can lead to lagging indicators; a bullish sentiment in spot may not immediately translate to perpetual candlestick formations.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Contract",
          "definition": "A contract for immediate delivery of an asset at the current market price."
        },
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows trading without an expiration date, often involving funding fees."
        }
      ],
      "whyThisMatters": "Recognizing the differences between contract types is essential for accurate candlestick analysis and strategic trading.",
      "realLifeExample": "On September 20, 2023, BTC spot prices surged 5% while perpetual contracts lagged due to high funding rates, leading to divergent candlestick formations.",
      "commonMistake": "Traders often confuse the immediate nature of spot contracts with the delayed effects of perpetual contracts, leading to misaligned strategies.",
      "quickNote": "Spot and perpetual contracts create different market dynamics that affect candlestick patterns.",
      "mentorText": "Always consider the type of contract you’re trading. Spot reacts quickly, while perpetual can lag due to funding dynamics. This distinction can save you from costly mistakes.",
      "mentorAnalogy": "Trading spot is like buying groceries; you pay and take them home immediately. Perpetual contracts are like a subscription service; you pay periodically and receive goods over time."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "CEX vs. DEX Feed Differences",
    "label": "Crypto Track",
    "body": "### Exchange Types: CEX vs. DEX\nCentralized exchanges (CEX) and decentralized exchanges (DEX) operate under different mechanisms. This card discusses **how these differences impact candlestick formations and liquidity**.\n\n* **Order Execution**: CEX typically offers faster execution and tighter spreads; for example, a 1% price movement in BTC on Coinbase may create a clean candlestick, while a DEX like Uniswap may show erratic patterns due to slippage.\n* **Liquidity Sources**: CEX pools liquidity from multiple sources, leading to more stable candlestick formations; DEX relies on user liquidity, which can lead to gaps and erratic price movements.\n* **Market Depth**: Analyze the depth of market data; CEX often has better visibility of order books, resulting in more reliable candlestick patterns compared to DEX, where liquidity can be fragmented.",
    "context": {
      "keyTerms": [
        {
          "term": "CEX",
          "definition": "A centralized exchange that facilitates trading through a central order book."
        },
        {
          "term": "DEX",
          "definition": "A decentralized exchange that allows peer-to-peer trading without a central authority."
        }
      ],
      "whyThisMatters": "Understanding the differences between CEX and DEX is vital for interpreting candlestick patterns and making informed trading decisions.",
      "realLifeExample": "On August 10, 2023, ETH/USD showed a stable candlestick pattern on Binance (CEX) while exhibiting erratic spikes on SushiSwap (DEX) due to liquidity issues.",
      "commonMistake": "Traders often assume that candlestick patterns are uniform across exchanges, failing to account for the inherent differences between CEX and DEX.",
      "quickNote": "CEX and DEX have distinct characteristics that influence candlestick behavior and liquidity.",
      "mentorText": "When trading, always consider whether you're on a CEX or DEX. The execution speed and liquidity can drastically change your candlestick analysis.",
      "mentorAnalogy": "Think of CEX as a well-organized supermarket with a consistent supply, while DEX is like a farmer's market where availability can vary greatly from stall to stall."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Analyzing Multi-Venue Order Books",
    "label": "Crypto Track",
    "body": "### Multi-Venue Order Books: Analysis Techniques\nAnalyzing multi-venue order books is essential for identifying trading opportunities. This card covers **how candlestick patterns can reveal discrepancies across platforms**.\n\n* **Cross-Platform Price Analysis**: Compare prices of the same asset across multiple exchanges; a 2% difference in LTC/USD between Kraken and Bitstamp can indicate potential arbitrage opportunities, reflected in candlestick formations.\n* **Volume Discrepancies**: Monitor volume spikes; a sudden increase in volume on one venue may lead to significant candlestick movements on others, indicating market sentiment shifts.\n* **Arbitrage Signals**: Identify candlestick patterns that signal potential arbitrage; for instance, if a bullish pattern forms on Binance while a bearish pattern appears on Bitfinex, this discrepancy can be exploited.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Venue Order Book",
          "definition": "An aggregation of order books from multiple exchanges for the same asset."
        }
      ],
      "whyThisMatters": "Analyzing multi-venue order books allows traders to spot discrepancies that can lead to profitable trading strategies.",
      "realLifeExample": "On July 25, 2023, LTC/USD showed a bullish candlestick pattern on Binance while Bitfinex displayed a bearish pattern, creating a 3% arbitrage opportunity.",
      "commonMistake": "Traders often fail to analyze multiple venues, missing out on discrepancies that could enhance their trading strategies.",
      "quickNote": "Candlestick patterns can reveal discrepancies in multi-venue order books, indicating trading opportunities.",
      "mentorText": "Always analyze multiple venues before executing trades. A small price difference can lead to significant profits if you act quickly.",
      "mentorAnalogy": "Think of analyzing order books like checking prices at different gas stations; a few cents difference can save you a lot over time."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Crypto Trading Strategies Using Candlestick Analysis",
    "label": "Crypto Track",
    "body": "### Candlestick Strategies: Venue Mismatches in Crypto Trading\nCandlestick analysis is pivotal in formulating effective trading strategies within crypto markets. This card details **how to leverage venue mismatches to enhance price action understanding**.\n\n* **Identifying Venue Mismatches**: Analyze price discrepancies between exchanges, such as Binance and Coinbase, where a BTC price of $30,000 on Binance might show $30,200 on Coinbase. This 0.67% difference can indicate potential arbitrage opportunities.\n* **Candlestick Patterns**: Utilize specific patterns like bullish engulfing or shooting stars to confirm trade entries. For example, a bullish engulfing pattern on Binance at $30,000 may signal a strong buy if confirmed by volume.\n* **Timeframe Correlation**: Match candlestick timeframes across venues. A 15-minute bullish signal on Binance should be corroborated by a similar pattern on Coinbase to validate the trade's strength.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Mismatch",
          "definition": "Price discrepancies between different trading platforms for the same asset."
        }
      ],
      "whyThisMatters": "Understanding venue mismatches allows traders to capitalize on price inefficiencies, enhancing profitability in crypto trading.",
      "realLifeExample": "On October 1, 2023, BTC was priced at $30,000 on Binance and $30,200 on Coinbase, creating a 0.67% arbitrage opportunity.",
      "commonMistake": "Traders often overlook venue mismatches, missing out on profitable arbitrage opportunities.",
      "quickNote": "Leverage venue mismatches to enhance trading strategies using candlestick patterns.",
      "mentorText": "When you spot a candlestick pattern on one exchange, always check for similar signals on another. This cross-verification can significantly improve your trade's success rate.",
      "mentorAnalogy": "Think of trading across venues like a pilot checking multiple flight paths; the safest route is confirmed by multiple navigation systems."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Risk Management: Utilizing Candlestick Insights\nEffective risk management is essential in crypto trading, particularly when leveraging candlestick analysis. This card discusses **how to set risk parameters based on candlestick insights**.\n\n* **Stop-Loss Placement**: Position stop-loss orders just below significant candlestick lows. For instance, if ETH closes at $2,000 with a low of $1,950, set your stop-loss at $1,940 to mitigate losses.\n* **Position Sizing**: Calculate position sizes based on the risk percentage of your trading capital. If risking 2% on a $10,000 account, your maximum loss should not exceed $200, guiding your trade size.\n* **Volatility Assessment**: Use candlestick ranges to assess volatility. A wide range on a daily candle indicates higher volatility, suggesting tighter risk parameters to protect capital during uncertain market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price, limiting potential losses."
        }
      ],
      "whyThisMatters": "Implementing effective risk management strategies ensures capital preservation and long-term trading viability.",
      "realLifeExample": "On September 15, 2023, a trader set a stop-loss for LTC at $70 after identifying a low of $68, effectively managing risk during a volatile session.",
      "commonMistake": "Failing to adjust stop-loss levels according to candlestick patterns can lead to unnecessary losses.",
      "quickNote": "Use candlestick insights to define risk parameters and protect your trading capital.",
      "mentorText": "Always set your stop-loss based on the most recent candlestick low. This practice helps you avoid emotional decisions when the market moves against you.",
      "mentorAnalogy": "Consider risk management like a surgeon's checklist; every step is crucial to ensure a successful operation and minimize complications."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Trading Concepts",
    "label": "Crypto Track",
    "body": "### Practical Application: Order Book Analysis and Candlestick Patterns\nEngaging in practical exercises enhances the understanding of crypto trading concepts. This card focuses on **applying order book analysis alongside candlestick patterns across various venues**.\n\n* **Order Book Dynamics**: Analyze the order book for BTC on Kraken and Binance. Identify significant buy walls at $29,800 and sell walls at $30,200 to gauge market sentiment.\n* **Candlestick Pattern Recognition**: Identify a bearish engulfing pattern on Binance at $30,000 while observing a corresponding increase in sell orders on Kraken, indicating potential downward pressure.\n* **Cross-Venue Strategy Development**: Develop a strategy based on simultaneous analysis of candlestick patterns and order book data. If a bullish pattern forms on Binance with a supportive order book, execute a buy order on Kraken where the price is lower.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset, showing market depth and liquidity."
        }
      ],
      "whyThisMatters": "Practical application of these concepts solidifies understanding and enhances decision-making in real-time trading scenarios.",
      "realLifeExample": "On November 5, 2023, a trader noticed a bullish engulfing pattern on Binance at $30,000 while the order book on Kraken showed significant buy support, prompting a successful trade.",
      "commonMistake": "Neglecting to analyze the order book alongside candlestick patterns can lead to misinformed trading decisions.",
      "quickNote": "Integrate order book analysis with candlestick patterns for informed trading decisions.",
      "mentorText": "Always check the order book when you spot a candlestick pattern. It’s like having a second opinion before making a critical decision.",
      "mentorAnalogy": "Think of this process like a chef tasting ingredients while preparing a dish; the right combination leads to a successful outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a bullish engulfing pattern on Binance at $30,000 and a significant buy wall at $29,800. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Place a buy order on Binance immediately.",
          "isCorrect": true,
          "feedback": "This is correct because the bullish pattern and buy wall indicate strong support."
        },
        {
          "id": "1",
          "text": "Ignore the pattern and wait for further confirmation.",
          "isCorrect": false,
          "feedback": "This is incorrect; the pattern and buy wall provide sufficient confirmation."
        },
        {
          "id": "2",
          "text": "Sell your position on Binance.",
          "isCorrect": false,
          "feedback": "This is incorrect; selling contradicts the bullish signal."
        },
        {
          "id": "3",
          "text": "Place a buy order on Kraken instead.",
          "isCorrect": false,
          "feedback": "This is incorrect; the bullish signal is strongest on Binance."
        }
      ]
    },
    "visualKey": "crypto-venue-mismatch"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trading Insights",
    "label": "Crypto Track",
    "body": "### Summary: Key Insights from Crypto Trading\nThis card summarizes the essential insights gained from the Crypto track, focusing on **venue mismatches and contract structures**.\n\n* **Understanding Venue Mismatches**: Recognizing price discrepancies across exchanges allows for strategic trading decisions and potential arbitrage opportunities.\n* **Candlestick Analysis**: Leveraging candlestick patterns enhances entry and exit strategies, particularly when correlated with order book dynamics.\n* **Risk Management**: Implementing robust risk management strategies based on candlestick insights is crucial for capital preservation in volatile markets.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Structure",
          "definition": "The terms and conditions under which a trade is executed, including leverage and margin requirements."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the importance of a structured approach to trading in the crypto market.",
      "realLifeExample": "Traders who effectively utilized venue mismatches and candlestick analysis reported improved trading performance during volatile periods in Q3 2023.",
      "commonMistake": "Failing to integrate candlestick analysis with venue insights can lead to missed trading opportunities.",
      "quickNote": "Integrate venue mismatch awareness with candlestick analysis for effective trading strategies.",
      "mentorText": "Reflect on your trades; did you consider venue mismatches and candlestick patterns? These elements are critical for informed decision-making.",
      "mentorAnalogy": "Just as an architect must understand the land before designing a building, a trader must grasp market structures before executing trades."
    },
    "taskData": null,
    "visualKey": "crypto-venue-mismatch"
  }
];
