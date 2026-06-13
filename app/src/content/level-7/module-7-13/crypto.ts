import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Perpetual Funding Windows",
    "label": "Crypto Track",
    "body": "### Core Concept: Perpetual Funding Windows\nPerpetual funding windows are critical for maintaining position viability in BTC and ETH trading. This card details **how funding rates are calculated and their impact on trade management**.\n\n* **Funding Rate Mechanics**: Funding rates are determined by the difference between the perpetual contract price and the spot price. Traders must monitor these rates, which are typically recalibrated every 8 hours, to avoid unexpected costs.\n* **Position Management**: Adjust your position size based on upcoming funding windows. If a funding payment is due, consider reducing exposure to mitigate costs associated with holding a position through the window.\n* **Market Sentiment Analysis**: Analyze market sentiment leading up to funding windows. A positive sentiment may lead to higher funding rates, impacting your decision to hold or close positions before the window opens.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding funding windows allows traders to optimize their positions and reduce unnecessary costs associated with holding trades through these periods.",
      "realLifeExample": "BTC funding rate at 0.01% due at 12:00 UTC; a trader holding a long position of 1 BTC must prepare for a $0.10 payment if held through this window.",
      "commonMistake": "Failing to account for funding payments can lead to unexpected losses, especially during high volatility.",
      "quickNote": "Monitor funding rates closely to manage costs effectively.",
      "mentorText": "Always check the funding rate before holding a position overnight. It can turn a profitable trade into a loss if you're not prepared.",
      "mentorAnalogy": "Think of funding windows like a toll booth on a highway. If you don’t account for the toll, you might find yourself short on cash when you reach it."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Preventing Liquidation Cascades",
    "label": "Crypto Track",
    "body": "### Core Strategy: Liquidation Management\nLiquidation cascades can devastate trading positions in volatile markets. This card outlines **strategies to prevent triggering liquidation events**.\n\n* **Position Sizing**: Maintain a conservative position size relative to your capital. Use a maximum leverage of 2x to reduce the risk of liquidation during sharp market movements.\n* **Stop-Loss Placement**: Implement dynamic stop-loss orders that adjust based on market volatility. Place stop-loss orders at least 2% away from key support or resistance levels to avoid premature liquidations.\n* **Market Monitoring**: Continuously monitor open interest and liquidation levels across exchanges. If open interest spikes, consider reducing exposure to avoid being caught in a cascade.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Cascade",
          "definition": "A chain reaction of liquidations that occurs when a significant number of positions are forced to close."
        }
      ],
      "whyThisMatters": "Preventing liquidation cascades protects your capital and maintains market stability during volatile conditions.",
      "realLifeExample": "During a sudden drop in ETH price from $2,000 to $1,800, a trader with a 5x leverage position may face liquidation if their stop-loss is not adequately placed.",
      "commonMistake": "Over-leveraging positions without considering market volatility can lead to rapid liquidations.",
      "quickNote": "Use conservative leverage and dynamic stop-losses to safeguard against liquidations.",
      "mentorText": "Always think about how much risk you're taking. A small adjustment in leverage can save you from a large loss during a downturn.",
      "mentorAnalogy": "Managing your positions is like a pilot adjusting altitude; small corrections can prevent a crash in turbulent weather."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Understanding Exchange Slippage Rules",
    "label": "Crypto Track",
    "body": "### Core Mechanic: Slippage Management\nSlippage can significantly impact trade execution in crypto markets. This card explains **how to navigate slippage rules across major exchanges**.\n\n* **Exchange-Specific Rules**: Each exchange has unique slippage tolerances. For example, Binance allows up to 1% slippage on market orders, while Coinbase Pro may have tighter controls. Familiarize yourself with these to avoid unexpected execution prices.\n* **Order Types**: Use limit orders to control slippage. Market orders may execute at unfavorable prices during high volatility, especially in low liquidity conditions.\n* **Timing Execution**: Execute trades during peak liquidity hours, typically overlapping with major market sessions. This reduces the likelihood of slippage due to thin order books.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage rules enables traders to make informed decisions, minimizing execution costs and maximizing profitability.",
      "realLifeExample": "A trader places a market order for 10 ETH at $2,000, but due to slippage, the order fills at $2,005 during a low liquidity period.",
      "commonMistake": "Relying solely on market orders without considering slippage can lead to significant losses.",
      "quickNote": "Always check slippage rules before executing trades.",
      "mentorText": "Never assume your market order will fill at the expected price. Always account for slippage, especially in volatile conditions.",
      "mentorAnalogy": "Think of slippage like a car hitting a pothole; if you’re not aware, it can throw you off course unexpectedly."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Optimizing Trading Strategies for Perpetuals",
    "label": "Crypto Track",
    "body": "### Core Strategy: Perpetual Optimization\nOptimizing trading strategies for perpetual contracts requires a nuanced understanding of funding rates and slippage. This card covers **how to refine your approach for maximum efficiency**.\n\n* **Funding Rate Consideration**: Integrate funding rate analysis into your strategy. If the funding rate is consistently positive, consider long positions, while negative rates may signal short opportunities.\n* **Slippage Tolerance Adjustment**: Set slippage tolerances based on market conditions. In highly volatile markets, widen your slippage tolerance to ensure order execution, while tightening it in stable conditions.\n* **Backtesting Strategies**: Regularly backtest your strategies against historical funding rates and slippage data. This allows for continuous refinement and adaptation to changing market dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows traders to speculate on the price of an asset without an expiration date."
        }
      ],
      "whyThisMatters": "Optimizing strategies for perpetual contracts enhances profitability and reduces risks associated with funding and slippage.",
      "realLifeExample": "A trader backtests a strategy on BTC perpetuals, finding that adjusting for funding rates improved win rates by 15% during high volatility periods.",
      "commonMistake": "Neglecting to adjust strategies based on funding rates can lead to missed opportunities and increased costs.",
      "quickNote": "Incorporate funding rates and slippage into your strategy for optimal execution.",
      "mentorText": "Always refine your strategy based on real market conditions. What worked last month may not work today.",
      "mentorAnalogy": "Optimizing your trading strategy is like a chef adjusting recipes based on seasonal ingredients; it requires constant adaptation for the best results."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Tools for Risk Assessment in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Risk Assessment: Tools and Methodologies\nEffective risk assessment is critical for managing perpetual contracts in crypto trading. This card outlines **key tools and methodologies for evaluating risk exposure**.\n\n* **Volatility Metrics**: Utilize the Average True Range (ATR) to gauge market volatility. A higher ATR indicates increased risk, prompting tighter stop-loss placements.\n* **Funding Rate Analysis**: Monitor funding rates to assess the cost of holding positions. A positive funding rate may indicate bullish sentiment, while a negative rate suggests bearish pressure.\n* **Position Sizing Tools**: Implement risk calculators to determine optimal position sizes based on account equity and risk tolerance. This prevents over-leveraging in volatile markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic fee exchanged between long and short positions in perpetual contracts."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Understanding risk assessment tools enables traders to make informed decisions, minimizing potential losses in volatile crypto markets.",
      "realLifeExample": "During a high volatility period, BTC's ATR spiked to $500, prompting a trader to adjust their stop-loss to protect against larger price swings.",
      "commonMistake": "Traders often overlook funding rate implications, leading to unexpected costs that can erode profits.",
      "quickNote": "Utilize volatility metrics and funding rates to assess risk effectively.",
      "mentorText": "When evaluating risk, always check the ATR and funding rates. They provide insights into market behavior that can save you from costly mistakes.",
      "mentorAnalogy": "Think of risk assessment like a pilot checking weather conditions before takeoff; understanding turbulence helps ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Simulating Perp Funding and Slippage Scenarios",
    "label": "Crypto Track",
    "body": "### Execution Simulation: Practical Application\nSimulating execution scenarios provides traders with hands-on experience in managing funding windows and slippage. This card discusses **how to create effective simulation exercises**.\n\n* **Scenario Creation**: Develop scenarios based on historical price movements and funding rate changes. For instance, simulate a 5% price drop in ETH during a funding window to assess slippage impact.\n* **Execution Timing**: Practice executing trades at various times within the funding cycle. Analyze how timing affects slippage and overall trade outcomes.\n* **Performance Metrics**: Evaluate simulated trades using metrics such as execution price versus market price. This helps identify areas for improvement in real trading situations.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Execution Timing",
          "definition": "The specific moment a trade is placed in relation to market conditions."
        }
      ],
      "whyThisMatters": "Simulations allow traders to refine their execution strategies, reducing the risk of costly errors in live markets.",
      "realLifeExample": "A trader simulates executing a long ETH position during a funding window, discovering that slippage increased by 2% due to high volatility.",
      "commonMistake": "Failing to account for slippage in simulations can lead to unrealistic expectations during actual trading.",
      "quickNote": "Simulate various execution scenarios to enhance decision-making under pressure.",
      "mentorText": "Run through different scenarios as if you were in the market. This practice will prepare you for real-time decision-making.",
      "mentorAnalogy": "Simulating trades is like a flight simulator for pilots; it prepares you for the unexpected without the risk of crashing."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "practice",
    "title": "Market Analysis Techniques for Perpetual Contracts",
    "label": "Crypto Track",
    "body": "### Advanced Analysis: Perpetual Contracts\nThis card focuses on advanced market analysis techniques tailored for perpetual contracts. Learn to identify indicators that influence funding rates and slippage.\n\n* **Funding Rate Indicators**: Analyze historical funding rates alongside price movements. A consistent rise in funding rates may signal bullish sentiment, while a decline could indicate bearish pressure.\n* **Order Book Analysis**: Monitor order book depth to gauge potential slippage. A thin order book can lead to significant price shifts with minimal volume.\n* **Technical Indicators**: Utilize indicators like the Relative Strength Index (RSI) and Moving Averages to predict potential reversals that may affect funding rates and slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "The measure of buy and sell orders at various price levels in the market."
        },
        {
          "term": "Relative Strength Index (RSI)",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "Advanced market analysis equips traders with the insights needed to navigate the complexities of perpetual contracts effectively.",
      "realLifeExample": "A trader notices the funding rate for BTC has increased to 0.05% while the RSI indicates overbought conditions, prompting a strategic short position.",
      "commonMistake": "Relying solely on price action without considering funding rates can lead to misinformed trading decisions.",
      "quickNote": "Combine funding rate analysis with technical indicators for a comprehensive market view.",
      "mentorText": "Always analyze funding rates alongside technical indicators. This dual approach will give you a clearer picture of market sentiment.",
      "mentorAnalogy": "Think of market analysis like a surgeon assessing a patient's vital signs before surgery; every indicator provides critical information for decision-making."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a funding rate of 0.03% for ETH while the RSI shows an overbought condition. What should you consider doing next?",
      "options": [
        {
          "id": "0",
          "text": "Consider entering a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering a long position without considering the overbought condition could lead to losses."
        },
        {
          "id": "1",
          "text": "Evaluate the potential for a short position based on the overbought RSI.",
          "isCorrect": true,
          "feedback": "Given the overbought condition and funding rate, a short position may be prudent."
        },
        {
          "id": "2",
          "text": "Ignore the funding rate and focus solely on price action.",
          "isCorrect": false,
          "feedback": "Ignoring the funding rate can lead to unexpected costs and losses."
        },
        {
          "id": "3",
          "text": "Wait for further confirmation before making any trades.",
          "isCorrect": false,
          "feedback": "While waiting can be prudent, the overbought condition suggests immediate caution."
        }
      ]
    },
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Execution Techniques",
    "label": "Crypto Track",
    "body": "### Recap: Essential Execution Techniques\nMastering execution specifics is vital for success in crypto trading. This card summarizes **the key techniques and strategies covered throughout the module**.\n\n* **Risk Assessment Tools**: Effective use of volatility metrics, funding rate analysis, and position sizing tools is essential for managing risk in perpetual contracts.\n* **Simulation Practices**: Engaging in simulated execution scenarios enhances traders' ability to navigate real market conditions, focusing on timing and slippage management.\n* **Market Analysis Techniques**: Combining funding rate insights with technical indicators provides a comprehensive approach to analyzing perpetual contracts, leading to informed trading decisions.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "A solid grasp of execution techniques ensures traders can adapt to the fast-paced nature of crypto markets while managing risk effectively.",
      "realLifeExample": "Traders who applied these techniques effectively navigated a volatile BTC market, minimizing losses during rapid price fluctuations.",
      "commonMistake": "Many traders overlook the importance of integrating risk assessment with execution strategies, leading to poor decision-making.",
      "quickNote": "Integrate risk assessment, simulations, and market analysis for effective crypto execution.",
      "mentorText": "Review these techniques regularly. Mastery comes from consistent practice and application in real market scenarios.",
      "mentorAnalogy": "Think of these execution techniques as the checklist a pilot uses before takeoff; each item is crucial for a successful flight."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  }
];
