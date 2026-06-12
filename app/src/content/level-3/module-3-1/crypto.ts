import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Liquidation Delta Footprints in Crypto Exchanges",
    "label": "Crypto Track",
    "body": "### Liquidation Dynamics: Identifying Delta Footprints\nLiquidation events in crypto exchanges reveal critical insights into market sentiment and institutional activity. This card teaches **how to analyze liquidation delta footprints to identify potential Order Blocks**.\n\n* **Delta Calculation**: Measure liquidation deltas by comparing the total liquidated long positions against short positions during significant price movements. A delta exceeding 10% indicates potential institutional interest.\n* **Exchange-Specific Patterns**: Track liquidation spikes on major exchanges like Binance or Bitfinex during high volatility periods, as these often coincide with the formation of Order Blocks.\n* **Volume Correlation**: Confirm liquidation events by correlating them with volume surges. A spike in volume alongside liquidation deltas can validate the presence of an Order Block formation.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Delta",
          "definition": "The difference between liquidated long and short positions during a specified time frame."
        }
      ],
      "whyThisMatters": "Understanding liquidation deltas is essential for recognizing institutional buying or selling pressure that shapes Order Blocks.",
      "realLifeExample": "On Binance, a liquidation delta of 15% was observed during a 5% drop in BTC price at 3:00 AM UTC, indicating strong institutional selling pressure.",
      "commonMistake": "Traders often overlook the importance of volume in confirming liquidation deltas, leading to misinterpretation of market signals.",
      "quickNote": "Liquidation deltas indicate potential institutional activity and can signal the formation of Order Blocks.",
      "mentorText": "When analyzing liquidation deltas, focus on the percentage difference between longs and shorts. A significant delta often reveals where institutions are positioning themselves.",
      "mentorAnalogy": "Think of liquidation deltas like the black box data from an aircraft; they provide critical insights into what is happening behind the scenes during turbulent market conditions."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "concept",
    "title": "Understanding Crypto Exchange Order Books",
    "label": "Crypto Track",
    "body": "### Order Book Structure: Accumulation and Distribution\nThe order book of a crypto exchange is a live reflection of market supply and demand, crucial for identifying Order Blocks. This card focuses on **how to interpret order book data to recognize accumulation and distribution patterns**.\n\n* **Bid-Ask Spread Analysis**: Monitor the bid-ask spread; a narrowing spread often indicates accumulation, while a widening spread can suggest distribution. Look for spreads less than 1% during high-volume periods.\n* **Depth Chart Insights**: Analyze the depth chart for large buy or sell walls. A significant buy wall can indicate accumulation, while a sell wall may signal distribution, especially if it coincides with price resistance levels.\n* **Order Flow Monitoring**: Track real-time order flow to identify sudden shifts in buying or selling pressure. An influx of buy orders during a dip can indicate institutional accumulation, forming a potential Order Block.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific cryptocurrency on an exchange."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of order book dynamics allows traders to anticipate price movements and identify potential Order Blocks.",
      "realLifeExample": "During a BTC price rally, the order book on Coinbase showed a buy wall of 500 BTC at $45,000, indicating strong accumulation before a breakout.",
      "commonMistake": "Many traders fail to consider the implications of order book depth, leading to missed opportunities in identifying Order Blocks.",
      "quickNote": "Order books reveal real-time market sentiment and are essential for recognizing accumulation and distribution.",
      "mentorText": "When you look at the order book, focus on the depth and spread. These elements tell you where the market is leaning and can help you spot potential Order Blocks.",
      "mentorAnalogy": "Consider the order book like a city traffic report; it shows where congestion (buy/sell pressure) is building and where smooth flows (accumulation/distribution) are occurring."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "concept",
    "title": "Identifying Accumulation Patterns in Crypto",
    "label": "Crypto Track",
    "body": "### Accumulation Patterns: Recognizing Institutional Intent\nAccumulation patterns within crypto Order Blocks signal potential bullish reversals driven by institutional buying. This card teaches **how to identify these patterns effectively**.\n\n* **Price Consolidation**: Look for periods of price consolidation where the asset trades within a tight range, often preceding a breakout. A consolidation phase lasting more than 30 minutes with minimal price movement can indicate accumulation.\n* **Volume Analysis**: Confirm accumulation by observing volume spikes during consolidation. A volume increase of at least 50% compared to the previous hour can validate institutional interest.\n* **Support Level Testing**: Monitor how price interacts with key support levels. If price repeatedly tests a support level without breaking down, it often indicates accumulation by institutions preparing for a move upward.",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulation Pattern",
          "definition": "A price formation indicating that buyers are absorbing supply, often leading to a bullish reversal."
        }
      ],
      "whyThisMatters": "Recognizing accumulation patterns is crucial for anticipating potential price movements and identifying institutional buying activity.",
      "realLifeExample": "ETH showed a consolidation pattern between $3,200 and $3,250 for two hours, with volume increasing by 60% during this period, indicating strong accumulation before a breakout to $3,500.",
      "commonMistake": "Traders often misinterpret consolidation as indecision rather than a sign of accumulation, leading to missed entry opportunities.",
      "quickNote": "Accumulation patterns indicate institutional buying and can signal upcoming bullish movements.",
      "mentorText": "When you see price consolidating, pay attention to the volume. If it spikes, that’s a strong signal that institutions are accumulating positions.",
      "mentorAnalogy": "Think of accumulation patterns like a pressure cooker; as pressure builds (buying), it eventually leads to a release (price breakout)."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "concept",
    "title": "Recognizing Distribution Patterns in Crypto",
    "label": "Crypto Track",
    "body": "### Distribution Patterns: Identifying Institutional Selling\nDistribution patterns within crypto Order Blocks indicate potential bearish reversals driven by institutional selling. This card teaches **how to recognize these patterns effectively**.\n\n* **Price Rejection**: Watch for price rejections at key resistance levels. A rejection followed by a rapid decline can signal distribution, especially if it occurs with increased volume.\n* **Volume Spike Analysis**: Identify volume spikes during price declines. A volume increase of 70% or more during a downtrend can indicate that institutions are offloading positions, signaling distribution.\n* **Order Book Dynamics**: Monitor the order book for large sell orders appearing just before price drops. A sudden increase in sell orders can indicate that institutions are distributing their holdings.",
    "context": {
      "keyTerms": [
        {
          "term": "Distribution Pattern",
          "definition": "A price formation indicating that sellers are overwhelming buyers, often leading to a bearish reversal."
        }
      ],
      "whyThisMatters": "Recognizing distribution patterns is essential for anticipating potential price declines and understanding institutional selling behavior.",
      "realLifeExample": "During a recent rally, BTC faced a rejection at $50,000, followed by a volume spike of 80% as it dropped to $48,000, indicating strong institutional distribution.",
      "commonMistake": "Traders often fail to act on distribution signals, mistaking them for temporary pullbacks rather than signs of institutional selling.",
      "quickNote": "Distribution patterns indicate institutional selling and can signal upcoming bearish movements.",
      "mentorText": "When you see a price rejection at resistance, look closely at the volume. If it spikes, that’s a clear sign that institutions may be distributing their positions.",
      "mentorAnalogy": "Think of distribution patterns like a dam breaking; once the pressure from sellers builds up, it leads to a rapid release (price drop) that can be hard to recover from."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "concept",
    "title": "Leveraging Order Blocks for Maximum Profit in Crypto",
    "label": "Crypto Track",
    "body": "### Advanced Strategies for Crypto Order Blocks\nOrder Blocks in crypto markets can be strategically utilized to enhance profit margins during periods of high volatility. This card outlines advanced techniques for identifying and trading these structures effectively.\n\n* **Liquidity Zones**: Identify Order Blocks that coincide with significant liquidity zones, particularly around major psychological levels (e.g., $20,000 for Bitcoin). Enter trades when price revisits these zones, confirming institutional interest.\n* **Volatility Triggers**: Use volatility indicators, such as the Average True Range (ATR), to time entries. For instance, if Bitcoin's ATR indicates a spike while approaching a bullish Order Block, consider entering long positions.\n* **Confluence with Market Sentiment**: Analyze sentiment indicators alongside Order Block formations. If a bullish Order Block forms while sentiment is shifting positively (e.g., from neutral to bullish), the probability of a successful trade increases significantly.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Zones",
          "definition": "Areas where significant buy/sell orders are concentrated, often leading to price reversals."
        },
        {
          "term": "Volatility Indicators",
          "definition": "Metrics that measure market price fluctuations, aiding in timing trades."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Understanding these advanced strategies allows traders to capitalize on institutional movements, enhancing profitability in volatile crypto markets.",
      "realLifeExample": "On March 15, 2023, Bitcoin approached a bullish Order Block at $19,500 while the ATR indicated a significant increase in volatility. Traders entering long positions at this level saw a subsequent rally to $21,000.",
      "commonMistake": "Failing to confirm liquidity zones with volume analysis before entering trades based on Order Blocks.",
      "quickNote": "Maximize profit potential by aligning Order Blocks with liquidity zones and volatility indicators.",
      "mentorText": "When you spot an Order Block, don’t just jump in. Look for liquidity and volatility signals that confirm your trade. It’s about timing and precision.",
      "mentorAnalogy": "Think of trading Order Blocks like a pilot navigating through turbulence; you must identify safe zones and adjust your approach based on real-time data to ensure a smooth landing."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "concept",
    "title": "Hands-On Analysis of Crypto Order Blocks",
    "label": "Crypto Track",
    "body": "### Practical Exercises on Crypto Order Blocks\nApplying theoretical knowledge of Order Blocks requires practical exercises that reinforce understanding through real market data analysis. This card provides structured activities for traders.\n\n* **Chart Analysis**: Select a crypto asset such as Ethereum and analyze its price chart for the past month. Identify at least three Order Blocks and document the price action that followed each block.\n* **Volume Correlation**: Examine the volume profile during the formation of identified Order Blocks. Note any spikes in volume and correlate them with price movements. For example, if a bullish Order Block forms with a volume spike, mark it for potential entry.\n* **Trade Simulation**: Create a simulated trading plan based on your analysis. Define entry, stop-loss, and take-profit levels for trades based on your identified Order Blocks, using historical data to backtest your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Chart Analysis",
          "definition": "The process of examining price charts to identify patterns and structures."
        },
        {
          "term": "Volume Profile",
          "definition": "A graphical representation of trading volume over a specified time period at various price levels."
        },
        {
          "term": "Trade Simulation",
          "definition": "Practicing trading strategies in a risk-free environment using historical data."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises solidifies the understanding of Order Blocks, enabling traders to make informed decisions in live markets.",
      "realLifeExample": "During a recent analysis of Ethereum, a trader identified a bullish Order Block at $1,800. After documenting the price action and volume, they simulated a trade that would have yielded a 15% profit within a week.",
      "commonMistake": "Overlooking the importance of volume analysis when identifying Order Blocks, leading to potential false signals.",
      "quickNote": "Hands-on analysis of Order Blocks enhances decision-making skills in live trading scenarios.",
      "mentorText": "Get your hands dirty with the charts. Analyze, document, and simulate trades based on your findings. This is how you build confidence.",
      "mentorAnalogy": "Like a surgeon practicing on simulations before an operation, you must analyze and simulate trades to prepare for real market conditions."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "practice",
    "title": "Assessing Your Knowledge of Crypto Order Blocks",
    "label": "Crypto Track",
    "body": "### Summary of Crypto Order Blocks\nThis card consolidates key concepts related to Order Blocks in crypto trading, emphasizing the importance of understanding liquidation dynamics and order book structures. \n\n* **Liquidation Dynamics**: Recognize how liquidation events can influence price action around Order Blocks. For example, a sudden liquidation of long positions near a bearish Order Block can lead to rapid price declines.\n* **Order Book Structures**: Analyze the order book to identify significant buy/sell walls that align with Order Blocks. This helps in predicting potential price reversals or continuations.\n* **Market Context**: Always consider the broader market context when trading Order Blocks. Economic news or major events can drastically affect the effectiveness of these structures.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Dynamics",
          "definition": "The process by which positions are forcibly closed due to margin calls, impacting market prices."
        },
        {
          "term": "Order Book Structures",
          "definition": "The arrangement of buy and sell orders in the market, indicating supply and demand levels."
        },
        {
          "term": "Market Context",
          "definition": "The overall environment affecting market conditions, including news and economic indicators."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts is vital for making informed trading decisions and managing risk effectively.",
      "realLifeExample": "On April 10, 2023, Bitcoin experienced a sharp decline after a large liquidation event near a bearish Order Block at $25,000, illustrating the impact of liquidation dynamics.",
      "commonMistake": "Ignoring the influence of external market events on the effectiveness of Order Blocks, leading to misinformed trades.",
      "quickNote": "Understanding liquidation dynamics and order book structures is crucial for effective trading around Order Blocks.",
      "mentorText": "Always assess the market context before acting on an Order Block. Liquidations can change the game in an instant.",
      "mentorAnalogy": "Think of trading around Order Blocks like navigating a ship through changing tides; you must be aware of external forces that can alter your course."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What should you consider when trading around an Order Block?",
      "options": [
        {
          "id": "0",
          "text": "Only the price action of the Order Block itself.",
          "isCorrect": false,
          "feedback": "This is incorrect because external factors can significantly influence price action."
        },
        {
          "id": "1",
          "text": "Liquidation dynamics and order book structures.",
          "isCorrect": true,
          "feedback": "Correct. Understanding these elements is crucial for effective trading around Order Blocks."
        },
        {
          "id": "2",
          "text": "The historical performance of the asset only.",
          "isCorrect": false,
          "feedback": "This is incorrect; historical performance does not account for current market conditions."
        },
        {
          "id": "3",
          "text": "The time of day when the market is most active.",
          "isCorrect": false,
          "feedback": "While timing can be important, it is not the only factor to consider when trading around Order Blocks."
        }
      ]
    },
    "visualKey": "crypto-ob-venue-liquidations"
  },
  {
    "type": "summary",
    "title": "Advanced Applications of Order Blocks in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Crypto Advanced Application 8\nThis card explores advanced applications of Order Blocks, focusing on edge cases and professional-level nuances that can enhance trading strategies.\n\n* **Counter-Trend Trading**: Identify Order Blocks that signal potential reversals against the prevailing trend. For example, a bearish Order Block forming in a bullish market may indicate a short opportunity if confirmed by volume.\n* **Multi-Timeframe Analysis**: Utilize multiple timeframes to validate Order Blocks. A bullish Order Block on a 4-hour chart may be more significant if it aligns with a daily bullish trend.\n* **Risk Management Techniques**: Implement advanced risk management strategies when trading Order Blocks, such as adjusting position sizes based on the volatility of the asset and the strength of the Order Block.",
    "context": {
      "keyTerms": [
        {
          "term": "Counter-Trend Trading",
          "definition": "A strategy that involves trading against the prevailing market trend based on specific signals."
        },
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing price action across different timeframes to gain a comprehensive view."
        },
        {
          "term": "Risk Management Techniques",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Mastering these advanced applications allows traders to navigate complex market scenarios, enhancing their strategic edge.",
      "realLifeExample": "On May 5, 2023, a bearish Order Block formed at $30,000 for Bitcoin while the market was in a bullish trend. Traders who identified this and executed counter-trend trades profited as the price retraced to $28,000.",
      "commonMistake": "Neglecting to validate Order Blocks with multi-timeframe analysis, leading to potential false signals.",
      "quickNote": "Advanced applications of Order Blocks require a nuanced understanding of market dynamics and risk management.",
      "mentorText": "Don’t just follow the trend; look for opportunities to trade against it when the data supports your decision. Validate your findings across timeframes.",
      "mentorAnalogy": "Like an architect designing a building, you must consider all angles and potential structural weaknesses before committing to a design; the same applies to your trading strategies."
    },
    "taskData": null,
    "visualKey": "crypto-ob-venue-liquidations"
  }
];
