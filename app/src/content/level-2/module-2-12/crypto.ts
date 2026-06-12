import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Mapping CEX and DEX Margin Boundaries",
    "label": "Crypto Track",
    "body": "### Margin Mapping: CEX vs. DEX Boundaries\nCentralized and decentralized exchanges exhibit different margin dynamics. This card teaches **how to accurately map margin boundaries to understand leverage dynamics in crypto trading**.\n\n* **CEX Margin Limits**: Identify the maximum leverage offered by centralized exchanges, which typically ranges from 2x to 100x. For example, Binance allows up to 125x leverage on BTC/USDT.\n* **DEX Liquidity Constraints**: Assess the liquidity depth on decentralized exchanges, noting that margin trading may be limited by the available liquidity pools. For instance, Uniswap may have lower leverage options due to its automated market maker model.\n* **Boundary Mapping**: Use historical price data to plot the highest and lowest points of the HTF range on both CEX and DEX, establishing clear margin boundaries that inform risk management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "CEX",
          "definition": "Centralized Exchange, a trading platform that acts as an intermediary between buyers and sellers."
        },
        {
          "term": "DEX",
          "definition": "Decentralized Exchange, a platform that allows peer-to-peer trading without an intermediary."
        }
      ],
      "whyThisMatters": "Understanding margin boundaries is critical for managing leverage and risk exposure in crypto trading environments.",
      "realLifeExample": "On Binance, BTC/USDT reached a high of $60,000 and a low of $30,000 over a month. Mapping these points establishes a margin boundary for leveraged positions.",
      "commonMistake": "Traders often overlook the differences in margin limits between CEX and DEX, leading to miscalculations in risk exposure.",
      "quickNote": "Map CEX and DEX margin boundaries to optimize leverage usage.",
      "mentorText": "When trading, always know your limits. If you're on Binance, leverage can amplify gains but also losses. Understand where your margin boundaries lie.",
      "mentorAnalogy": "Think of margin boundaries like the safety limits on an aircraft. Just as pilots must know their altitude limits to avoid turbulence, traders must understand their margin limits to avoid liquidation."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "concept",
    "title": "Identifying Leverage Exhaustion Zones",
    "label": "Crypto Track",
    "body": "### Leverage Exhaustion: Order Book Insights\nLeverage exhaustion zones indicate points where excessive margin trading may lead to price reversals. This card teaches **how to identify these zones across major exchange order books**.\n\n* **Order Book Analysis**: Monitor the order book for significant clusters of long or short positions. For example, a heavy concentration of long orders at $50,000 on Coinbase may signal potential exhaustion if price approaches this level.\n* **Liquidation Levels**: Calculate the liquidation prices for leveraged positions. If a large number of positions are set to liquidate around a price level, this can create a leverage exhaustion zone, prompting a price reversal.\n* **Volume Divergence**: Observe volume trends in relation to price movements. A spike in volume with little price change may indicate that traders are losing conviction, signaling a potential exhaustion zone.",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Exhaustion",
          "definition": "A market condition where excessive leveraged positions lead to potential price reversals."
        },
        {
          "term": "Liquidation Price",
          "definition": "The price at which a trader's position is automatically closed due to insufficient margin."
        }
      ],
      "whyThisMatters": "Identifying leverage exhaustion zones allows traders to anticipate potential reversals, enhancing strategic decision-making.",
      "realLifeExample": "At $48,000, Bitcoin's order book showed a significant number of long positions. As price approached this level, a sudden drop to $45,000 triggered liquidations, confirming the exhaustion zone.",
      "commonMistake": "Traders often fail to consider order book dynamics, leading to unexpected losses when price reversals occur.",
      "quickNote": "Identify leverage exhaustion zones to anticipate price reversals effectively.",
      "mentorText": "Watch the order book closely. If you see a lot of long positions stacking up, be cautious. That could be a sign of exhaustion and a potential reversal.",
      "mentorAnalogy": "Identifying leverage exhaustion is like monitoring a dam. If water levels rise too high, the dam may break. Similarly, excessive leverage can lead to a market breakdown."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "concept",
    "title": "Recognizing Margin Call Signals",
    "label": "Crypto Track",
    "body": "### Margin Call Signals: Risk Management\nMargin calls occur when the equity in a trading account falls below the required maintenance margin. This card teaches **how to recognize signals that indicate potential margin calls**.\n\n* **Equity Monitoring**: Regularly check the equity levels in your account relative to your leveraged positions. For example, if your equity drops below 25% of your margin requirement, a margin call is imminent.\n* **Price Movement Alerts**: Set alerts for significant price movements that could trigger margin calls. If Ethereum drops 15% in a short period, assess your positions to avoid liquidation.\n* **Volatility Indicators**: Utilize volatility indicators to gauge market conditions. High volatility can lead to rapid equity declines, increasing the likelihood of margin calls.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for an investor to deposit additional money or securities to cover potential losses."
        },
        {
          "term": "Maintenance Margin",
          "definition": "The minimum equity that must be maintained in a margin account."
        }
      ],
      "whyThisMatters": "Recognizing margin call signals is essential for effective risk management and preventing account liquidation.",
      "realLifeExample": "If your account equity falls to $1,000 while maintaining a $4,000 leveraged position in XRP, you may receive a margin call as your equity is below the required maintenance margin.",
      "commonMistake": "Traders often ignore equity levels until it's too late, leading to unexpected margin calls.",
      "quickNote": "Monitor equity levels to recognize margin call signals proactively.",
      "mentorText": "Stay vigilant about your equity. If you see it dropping close to your margin requirement, take action before you get that margin call.",
      "mentorAnalogy": "Recognizing margin call signals is like a pilot checking fuel levels. Ignoring low fuel can lead to an emergency landing; similarly, ignoring equity levels can lead to forced liquidation."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "concept",
    "title": "Analyzing Order Book Dynamics",
    "label": "Crypto Track",
    "body": "### Order Book Dynamics: Mapping External Boundaries\nOrder book dynamics provide insights into market depth and potential external range boundaries. This card teaches **how to analyze these dynamics for effective trading strategies**.\n\n* **Bid-Ask Spread Analysis**: Evaluate the bid-ask spread to assess market liquidity. A narrowing spread indicates increased liquidity, while a widening spread may signal potential volatility. For instance, a spread of $50 on BTC/USDT suggests tight liquidity.\n* **Depth Chart Interpretation**: Utilize depth charts to visualize buy and sell orders. Identify significant support and resistance levels based on order concentrations. For example, a large sell wall at $55,000 could indicate a strong resistance level.\n* **Market Sentiment Assessment**: Analyze order book data to gauge market sentiment. A predominance of buy orders at a specific price level can indicate bullish sentiment, while a surge in sell orders may suggest bearish sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept."
        },
        {
          "term": "Depth Chart",
          "definition": "A visual representation of the supply and demand in a market, showing buy and sell orders."
        }
      ],
      "whyThisMatters": "Analyzing order book dynamics enhances trading strategies by providing insights into market depth and potential price movements.",
      "realLifeExample": "On Kraken, the BTC/USDT depth chart showed a significant sell wall at $60,000, indicating a potential resistance level that traders should consider when planning entries.",
      "commonMistake": "Traders often overlook order book dynamics, leading to missed opportunities or unexpected market movements.",
      "quickNote": "Analyze order book dynamics to map external range boundaries effectively.",
      "mentorText": "Always check the order book before entering a trade. It reveals where the market is leaning and can help you avoid pitfalls.",
      "mentorAnalogy": "Analyzing order book dynamics is like a chef checking ingredient availability before cooking. Knowing what's in stock helps you prepare a successful dish; similarly, understanding market depth helps you execute successful trades."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "concept",
    "title": "Exchange Dynamics: Impact on Margin Boundaries",
    "label": "Crypto Track",
    "body": "### Exchange Dynamics: Impact on Margin Boundaries\nDifferent exchanges exhibit unique liquidity profiles and fee structures, which directly influence margin boundaries for crypto assets. Understanding these dynamics is essential for optimizing trading strategies.\n\n* **Liquidity Variance**: Centralized exchanges (CEX) typically offer higher liquidity, allowing for tighter margin boundaries compared to decentralized exchanges (DEX), where liquidity can fluctuate significantly based on user activity.\n* **Fee Structures**: CEX often have fixed trading fees that can compress margin boundaries, while DEX may impose variable fees based on network congestion, affecting the overall cost of trading.\n* **Order Execution Speed**: The speed of order execution on CEX can lead to quicker adjustments in margin boundaries, whereas DEX may experience delays, impacting the trader's ability to react to market shifts effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Profile",
          "definition": "The measure of how easily an asset can be bought or sold in the market without affecting its price."
        },
        {
          "term": "Fee Structure",
          "definition": "The system of charges applied by an exchange for executing trades."
        }
      ],
      "whyThisMatters": "Understanding exchange dynamics allows traders to anticipate margin boundary shifts and adjust their strategies accordingly, enhancing profitability.",
      "realLifeExample": "When trading BTC on Binance (CEX) during peak hours, the margin boundary may be tighter, allowing for a 2% leverage, while on Uniswap (DEX) during low activity, the margin boundary could widen to 5% due to lower liquidity.",
      "commonMistake": "Traders often overlook the impact of exchange-specific fee structures, leading to unexpected costs that can erode profits.",
      "quickNote": "Exchange dynamics directly influence margin boundaries and trading costs.",
      "mentorText": "Think of it this way: if you're trading on a busy highway (CEX), you can move quickly and efficiently. But on a quiet back road (DEX), you might hit unexpected bumps that slow you down.",
      "mentorAnalogy": "Navigating exchanges is like choosing between a high-speed train and a local bus; each has its own speed and cost implications that affect your journey."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "concept",
    "title": "Effective Strategies for Margin Boundary Trading",
    "label": "Crypto Track",
    "body": "### Effective Strategies for Margin Boundary Trading\nUtilizing margin boundaries effectively can enhance entry and exit strategies in crypto trading. This card outlines specific approaches tailored for both CEX and DEX platforms.\n\n* **Boundary Breakout Strategy**: Enter trades when the price breaks above the upper margin boundary on a CEX, indicating strong bullish momentum, while setting a stop-loss just below the boundary to manage risk.\n* **Reversal Trading**: On DEX platforms, look for price action that approaches the lower margin boundary, indicating potential reversal points. Enter long positions with tight stop-losses to capitalize on price rebounds.\n* **Leverage Adjustment**: Adjust leverage based on proximity to margin boundaries; use higher leverage when trading near the center of the range and reduce it as price approaches the boundaries to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Boundary Breakout",
          "definition": "A trading strategy that involves entering a position when the price breaks through a predefined boundary."
        },
        {
          "term": "Reversal Trading",
          "definition": "A strategy that anticipates a price reversal at a significant support or resistance level."
        }
      ],
      "whyThisMatters": "Implementing effective strategies around margin boundaries can significantly enhance risk management and profitability in crypto trading.",
      "realLifeExample": "On Kraken (CEX), a trader notices ETH breaks above the $2,000 margin boundary, triggering a breakout strategy with a stop-loss at $1,950, while on SushiSwap (DEX), another trader enters a long position when ETH approaches $1,800, anticipating a reversal.",
      "commonMistake": "Failing to adjust leverage based on margin boundary proximity can lead to excessive risk during volatile market conditions.",
      "quickNote": "Strategic trading around margin boundaries enhances risk management and profit potential.",
      "mentorText": "When trading, think of margin boundaries as the walls of a boxing ring; you want to stay inside and control the fight, not get knocked out by the edges.",
      "mentorAnalogy": "Trading strategies around margin boundaries are like a football team adjusting their plays based on field position; the closer you are to the end zone, the more cautious you need to be."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "practice",
    "title": "Applying Crypto Margin Concepts in Real Scenarios",
    "label": "Crypto Track",
    "body": "### Applying Crypto Margin Concepts in Real Scenarios\nEngage in practical exercises to solidify your understanding of margin boundaries and leverage exhaustion in crypto trading. This card provides scenarios for application.\n\n* **Scenario 1**: You observe that BTC is trading at $40,000, nearing the upper margin boundary of $41,000 on Coinbase. What action should you take based on the boundary breakout strategy?\n* **Scenario 2**: ETH is currently at $1,750, approaching the lower margin boundary of $1,700 on a DEX. What would be your entry strategy based on reversal trading principles?\n* **Scenario 3**: You are trading LTC on Binance, and the price is fluctuating around $150, with a margin boundary of $145. How would you adjust your leverage as the price approaches this boundary?",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Exhaustion",
          "definition": "A condition where the potential for further price movement is limited due to excessive leverage being applied."
        }
      ],
      "whyThisMatters": "Practical application of margin concepts enables traders to develop real-time decision-making skills essential for success.",
      "realLifeExample": "In a live trading session, BTC approaches $41,000 on Coinbase, prompting a trader to execute a breakout strategy with a stop-loss at $40,500, while another trader anticipates a reversal on ETH at $1,700 on Uniswap.",
      "commonMistake": "Traders often misinterpret margin boundaries, leading to premature entries or exits that can result in losses.",
      "quickNote": "Practical exercises reinforce the application of margin boundaries in trading.",
      "mentorText": "Consider these scenarios as practice rounds; each decision you make should be calculated based on the boundaries you've set.",
      "mentorAnalogy": "Think of applying margin concepts like a pilot adjusting altitude; you must be aware of the limits to ensure a safe and successful flight."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe BTC trading at $40,500, nearing the upper margin boundary of $41,000 on Coinbase. What action should you take?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position with a stop-loss at $40,700.",
          "isCorrect": false,
          "feedback": "Entering a long position near the upper boundary increases risk; consider waiting for a breakout confirmation."
        },
        {
          "id": "1",
          "text": "Set a sell limit order at $41,000.",
          "isCorrect": true,
          "feedback": "Setting a sell limit at the upper boundary is a strategic move to capitalize on potential breakout momentum."
        },
        {
          "id": "2",
          "text": "Close all positions immediately.",
          "isCorrect": false,
          "feedback": "Closing positions without analysis may lead to missed opportunities; assess the breakout potential first."
        },
        {
          "id": "3",
          "text": "Adjust leverage to maximum and enter a long position.",
          "isCorrect": false,
          "feedback": "Using maximum leverage near the boundary increases risk; consider a more conservative approach."
        }
      ]
    },
    "visualKey": "crypto-cex-dex-margin-bounds"
  },
  {
    "type": "summary",
    "title": "Key Takeaways on Crypto Margin Concepts",
    "label": "Crypto Track",
    "body": "### Key Takeaways on Crypto Margin Concepts\nThis summary encapsulates the essential concepts surrounding margin boundaries in crypto trading, emphasizing their significance in strategic decision-making.\n\n* **Understanding Exchange Dynamics**: Different exchanges impact margin boundaries through liquidity profiles and fee structures, necessitating tailored strategies.\n* **Effective Trading Strategies**: Utilizing boundary breakout and reversal trading strategies can optimize entry and exit points, enhancing profitability.\n* **Practical Application**: Engaging with real-world scenarios solidifies the understanding of margin boundaries and their implications on trading performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Boundary",
          "definition": "The upper or lower limit of price movement for a trading asset, influenced by market conditions."
        }
      ],
      "whyThisMatters": "A comprehensive grasp of margin concepts is vital for executing informed trading strategies and managing risk effectively.",
      "realLifeExample": "Traders who effectively apply these concepts can navigate market fluctuations, such as BTC breaking through $41,000 or ETH reversing at $1,700, with confidence.",
      "commonMistake": "Overlooking the importance of margin boundaries can lead to poor trading decisions and increased risk exposure.",
      "quickNote": "Mastering margin concepts is essential for strategic trading in the crypto market.",
      "mentorText": "Remember, margin boundaries are your guideposts; respect them, and they will lead you to more informed trading decisions.",
      "mentorAnalogy": "Navigating margin concepts is like following a map; understanding the boundaries helps you avoid pitfalls and reach your destination safely."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-margin-bounds"
  }
];
