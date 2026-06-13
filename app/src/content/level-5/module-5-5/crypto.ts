import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Pyramiding Crypto Perpetual Positions",
    "label": "Crypto Track",
    "body": "### Pyramiding Strategy: Leveraging Crypto Perpetual Contracts\nPyramiding allows traders to increase position size during favorable market movements in crypto perpetual contracts. This card outlines **the strategic conditions for adding to winning positions**.\n\n* **Market Momentum Confirmation**: Only pyramid when the underlying asset shows strong upward momentum, confirmed by at least two consecutive higher closes on the 1-hour chart.\n* **Incremental Position Sizing**: Add to your position in increments of 25% of your initial size, ensuring that each addition maintains a favorable risk-to-reward ratio.\n* **Stop-Loss Adjustment**: After each addition, adjust your stop-loss to the entry price of the last added position to protect against sudden reversals.",
    "visualKey": "scaling-in-pyramiding",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Monitoring Liquidation Prices",
    "label": "Crypto Track",
    "body": "### Liquidation Price Awareness: Scaling into Positions\nUnderstanding liquidation prices is critical when scaling into leveraged crypto positions. This card teaches **how to monitor and calculate liquidation levels effectively**.\n\n* **Liquidation Price Calculation**: The liquidation price can be calculated as the entry price minus the maintenance margin divided by the leverage ratio. For example, if you enter a long position in BTC at $30,000 with 10x leverage and a maintenance margin of 0.5%, your liquidation price would be $29,500.\n* **Dynamic Monitoring**: Continuously monitor your liquidation price as you scale into positions. Each additional entry will alter your average entry price and thus your liquidation threshold.\n* **Risk Threshold Setting**: Establish a risk threshold that triggers a review of your position if the price approaches 80% of your liquidation level, allowing for timely adjustments.",
    "visualKey": "scaling-in-pyramiding",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Using Trailing Stops in Crypto",
    "label": "Crypto Track",
    "body": "### Trailing Stops: Protecting Profits in Pyramiding\nImplementing trailing stops is essential for securing profits while pyramiding positions in volatile crypto markets. This card explains **how to effectively use trailing stops**.\n\n* **Setting Trailing Stops**: Set your trailing stop at a distance of 3% below the market price for positions held in BTC. This allows for profit capture while providing enough room for price fluctuations.\n* **Adjusting for Volatility**: In high-volatility conditions, consider widening your trailing stop to 5% to prevent premature exits during price swings.\n* **Automated Execution**: Utilize trading platforms that allow for automated trailing stop orders to ensure that your positions are protected without constant monitoring.",
    "visualKey": "scaling-in-pyramiding",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Pyramiding",
    "label": "Crypto Track",
    "body": "### Risk Management: Safeguarding Against Overexposure\nEffective risk management is paramount when adding to crypto positions through pyramiding. This card focuses on **strategies to maintain manageable exposure**.\n\n* **Total Exposure Calculation**: Calculate your total exposure by summing the notional value of all positions. For example, if you have three BTC positions at $30,000, $31,000, and $32,000, your total exposure is $93,000.\n* **Maximum Risk Allocation**: Limit your total risk to no more than 2% of your trading capital on any single trade. For a $50,000 account, this means a maximum risk of $1,000.\n* **Diversification Strategy**: Avoid concentrating all positions in a single asset. Diversify across different cryptocurrencies to spread risk and reduce the impact of adverse movements.",
    "visualKey": "scaling-in-pyramiding",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Identifying Market Signals for Crypto",
    "label": "Crypto Track",
    "body": "### Market Signals: Price Action & Volume Analysis\nIdentifying key market signals is essential for determining optimal points to pyramid positions in cryptocurrency trading. This card teaches **how to analyze price action and volume to make informed scaling decisions**.\n\n* **Price Breakouts**: A breakout above a significant resistance level, confirmed by increased volume, indicates strong bullish momentum, suggesting a favorable condition for scaling in.\n* **Volume Spikes**: A sudden increase in volume accompanying price increases can signal institutional interest, validating the decision to add to a winning position.\n* **Trend Confirmation**: Utilize moving averages to confirm the trend direction; only pyramid when the price is above the moving average, reinforcing bullish sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Action",
          "definition": "The movement of a cryptocurrency's price over time, used to identify trends and patterns."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to assess the strength of price movements."
        }
      ],
      "whyThisMatters": "Effective identification of market signals allows for strategic scaling, enhancing potential returns while managing risk.",
      "realLifeExample": "Bitcoin breaks above $30,000 with a volume spike of 150% compared to the average, indicating a strong bullish signal for pyramiding positions.",
      "commonMistake": "Traders often pyramid based on emotional reactions to price movements rather than confirmed signals.",
      "quickNote": "Focus on price action and volume to identify optimal scaling opportunities.",
      "mentorText": "When you see a breakout with volume, that’s your cue. Don’t jump in without confirmation; wait for the trend to show strength.",
      "mentorAnalogy": "Think of this like a pilot adjusting altitude; you don’t just ascend without checking your instruments — you need clear signals that the climb is safe."
    },
    "taskData": null,
    "visualKey": "scaling-in-pyramiding"
  },
  {
    "type": "concept",
    "title": "Execution Strategies for Crypto Pyramiding",
    "label": "Crypto Track",
    "body": "### Execution Strategies: Limit vs. Market Orders\nEffective execution strategies are crucial for optimizing entry points when scaling into crypto positions. This card teaches **the differences between limit and market orders for pyramiding**.\n\n* **Limit Orders**: Placing limit orders allows you to enter at a predetermined price, ensuring you don’t overpay and can capitalize on pullbacks in an uptrend.\n* **Market Orders**: While market orders provide immediate execution, they can lead to slippage, especially in volatile markets; use them cautiously when the price is moving rapidly.\n* **Order Size Management**: Adjust the size of your additional positions based on market conditions; smaller increments can mitigate risk during high volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a cryptocurrency at a specified price or better."
        },
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a cryptocurrency immediately at the current market price."
        }
      ],
      "whyThisMatters": "Choosing the right order type can significantly impact your entry price and overall profitability when pyramiding.",
      "realLifeExample": "Ethereum is trading at $2,000; placing a limit order at $1,950 allows entry during a pullback, while a market order at $2,050 may incur slippage.",
      "commonMistake": "Traders often default to market orders in volatile conditions, leading to unfavorable entry prices.",
      "quickNote": "Utilize limit orders to control entry prices effectively when scaling into positions.",
      "mentorText": "Always consider your entry point. A limit order can save you money and ensure you’re scaling in at the right time.",
      "mentorAnalogy": "Like a chef timing the addition of ingredients, you need to know when to add to your dish to achieve the perfect flavor balance."
    },
    "taskData": null,
    "visualKey": "scaling-in-pyramiding"
  },
  {
    "type": "practice",
    "title": "Common Pitfalls in Crypto Pyramiding",
    "label": "Crypto Track",
    "body": "### Avoiding Pitfalls: Over-Leveraging & Emotional Decisions\nRecognizing common pitfalls is essential for successful pyramiding in cryptocurrency trading. This card focuses on **how to avoid over-leveraging and emotional decision-making**.\n\n* **Over-Leveraging Risks**: Using excessive leverage can amplify losses; maintain a conservative leverage ratio to protect your capital during drawdowns.\n* **Emotional Decision-Making**: Establish a strict trading plan and stick to it; emotional reactions can lead to impulsive pyramiding that deviates from your strategy.\n* **Risk Assessment**: Always assess the risk of each additional position; ensure that your total exposure remains within acceptable limits to avoid catastrophic losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Over-Leveraging",
          "definition": "Using borrowed funds to increase the size of a trading position beyond what is prudent."
        },
        {
          "term": "Emotional Decision-Making",
          "definition": "Making trading decisions based on feelings rather than objective analysis."
        }
      ],
      "whyThisMatters": "Avoiding these pitfalls ensures that your pyramiding strategy remains effective and sustainable over time.",
      "realLifeExample": "A trader pyramids into a Bitcoin position using 10x leverage, resulting in a margin call when the market retraces 5%, wiping out their account.",
      "commonMistake": "Traders often pyramid too aggressively after a winning streak, neglecting their risk management protocols.",
      "quickNote": "Maintain discipline to avoid emotional and leverage-related pitfalls when pyramiding.",
      "mentorText": "Stick to your plan. If you feel the urge to add more size out of excitement, take a step back and reassess your strategy.",
      "mentorAnalogy": "Just as a surgeon must follow a strict protocol during an operation, you must adhere to your trading plan to avoid critical errors."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is a common mistake traders make when pyramiding positions in crypto?",
      "options": [
        {
          "id": "0",
          "text": "Using excessive leverage without assessing risk.",
          "isCorrect": true,
          "feedback": "Over-leveraging can lead to significant losses and margin calls."
        },
        {
          "id": "1",
          "text": "Always using market orders for entry.",
          "isCorrect": false,
          "feedback": "While market orders can be useful, they can lead to slippage in volatile markets."
        },
        {
          "id": "2",
          "text": "Waiting too long to add to a winning position.",
          "isCorrect": false,
          "feedback": "Timely scaling is important; waiting too long can miss opportunities."
        },
        {
          "id": "3",
          "text": "Only pyramiding during downtrends.",
          "isCorrect": false,
          "feedback": "Pyramiding should be done in confirmed uptrends, not downtrends."
        }
      ]
    },
    "visualKey": "scaling-in-pyramiding"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Pyramiding Techniques",
    "label": "Crypto Track",
    "body": "### Key Concepts: Risk Management, Market Analysis, Execution\nA comprehensive review of pyramiding techniques in cryptocurrency trading emphasizes the importance of structured risk management and market analysis. This card summarizes **the essential strategies for effective pyramiding**.\n\n* **Risk Management Protocols**: Establish clear risk parameters for each position; ensure that total exposure does not exceed your risk tolerance.\n* **Market Analysis Techniques**: Utilize both fundamental and technical analysis to identify favorable conditions for scaling into positions; stay informed on market news and trends.\n* **Execution Timing**: Execute orders based on market conditions; use limit orders to optimize entry points and avoid slippage during volatile movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        },
        {
          "term": "Market Analysis",
          "definition": "The study of market conditions and trends to inform trading decisions."
        }
      ],
      "whyThisMatters": "Mastering these techniques enhances your ability to scale effectively, maximizing returns while minimizing risk exposure.",
      "realLifeExample": "A trader uses a combination of technical analysis and news updates to scale into a winning Ethereum position, maintaining a risk ratio of 1:3.",
      "commonMistake": "Traders often neglect to adjust their risk management strategies when scaling into positions.",
      "quickNote": "Integrate risk management, market analysis, and execution strategies for successful pyramiding.",
      "mentorText": "Always review your strategy before scaling in. A disciplined approach will keep your trading sustainable and profitable.",
      "mentorAnalogy": "Like an architect revisiting blueprints before construction, you must ensure your trading plan is sound before adding to your positions."
    },
    "taskData": null,
    "visualKey": "scaling-in-pyramiding"
  }
];
