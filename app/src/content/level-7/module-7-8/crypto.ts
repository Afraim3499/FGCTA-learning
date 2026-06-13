import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Slippage in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Core Concept: Slippage Dynamics\nSlippage occurs when the execution price of a trade differs from the expected price due to market volatility. This card details **the causes of slippage and its implications for execution costs**.\n\n* **Market Volatility**: High volatility during significant market events can lead to rapid price changes, resulting in slippage. For instance, a market order for Bitcoin at $30,000 may execute at $30,050 during a sudden price drop.\n* **Order Size Impact**: Larger orders can exacerbate slippage, especially in less liquid markets. A $100,000 buy order for Ethereum may experience slippage if the order exceeds the available liquidity at the desired price level.\n* **Execution Type**: Market orders are more susceptible to slippage compared to limit orders. Executing a market order for Litecoin during a spike may result in a fill at $150 instead of the anticipated $145.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage is critical for accurately assessing trade costs and optimizing execution strategies in volatile crypto markets.",
      "realLifeExample": "During the Ethereum network upgrade on September 15, 2022, a trader placed a market order at $1,800, but due to slippage, the order executed at $1,850, incurring a significant cost.",
      "commonMistake": "Traders often underestimate the impact of slippage during high volatility events, leading to unexpected losses.",
      "quickNote": "Slippage can significantly affect trade execution costs, especially during volatile market conditions.",
      "mentorText": "When placing trades, always account for slippage. If you're executing a large order, be prepared for the possibility that your fill price may not match your expected price due to market fluctuations.",
      "mentorAnalogy": "Think of slippage like a plane encountering turbulence during landing; the intended landing spot may shift due to unexpected air currents, just as your trade price can shift due to market conditions."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Analyzing Exchange Slippage",
    "label": "Crypto Track",
    "body": "### Core Analysis: Exchange Slippage\nAnalyzing slippage across different exchanges is essential for optimizing trade execution. This card outlines **how to evaluate slippage metrics to enhance trading performance**.\n\n* **Slippage Metrics Comparison**: Regularly compare slippage metrics across multiple exchanges. For example, Binance may show an average slippage of 0.5% for BTC trades, while Coinbase may exhibit 1.2% under similar conditions.\n* **Liquidity Assessment**: Assess the liquidity of the exchange before executing trades. A lower liquidity exchange may result in higher slippage, as seen when trading a lesser-known altcoin with a $50,000 order on a platform with low volume.\n* **Historical Slippage Data**: Utilize historical data to identify patterns in slippage during specific times or events. Analyzing slippage during the last Bitcoin halving can provide insights into expected execution costs during future halvings.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Exchange Slippage",
          "definition": "The variation in execution price caused by differences in liquidity and market conditions across different trading platforms."
        }
      ],
      "whyThisMatters": "Understanding exchange-specific slippage helps traders select optimal platforms for their trades, minimizing execution costs.",
      "realLifeExample": "A trader analyzed slippage on Kraken and found that during peak trading hours, slippage for Ethereum was consistently 1.5%, prompting them to adjust their trading schedule.",
      "commonMistake": "Failing to compare slippage across exchanges can lead to unnecessary costs and missed opportunities for better execution.",
      "quickNote": "Exchange slippage varies; always analyze before executing trades.",
      "mentorText": "Before placing a trade, always check slippage across different exchanges. It can make a significant difference in your overall costs and profitability.",
      "mentorAnalogy": "Analyzing exchange slippage is like choosing a highway for a road trip; some routes may have more traffic and delays, impacting your overall travel time and fuel costs."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Understanding Taker Fee Drag",
    "label": "Crypto Track",
    "body": "### Core Concept: Taker Fee Impact\nTaker fees can significantly impact overall execution costs in crypto trading. This card explains **how to account for taker fees and strategies to minimize their effects**.\n\n* **Fee Structures**: Different exchanges have varying taker fee structures. For example, Binance may charge 0.1% for taker orders, while Bitfinex may charge 0.2%. Understanding these fees is crucial for calculating true trade costs.\n* **Order Types and Fees**: Use limit orders to avoid taker fees when possible. A trader placing a limit order for Ripple at $0.50 instead of a market order at $0.52 can save on taker fees, preserving more capital.\n* **Fee Optimization Strategies**: Consider using exchanges with lower fees or fee discounts for high-volume trading. A trader executing $1 million in trades monthly on Coinbase Pro may qualify for reduced fees, enhancing profitability.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Taker Fee",
          "definition": "A fee charged by exchanges for executing market orders that take liquidity from the order book."
        }
      ],
      "whyThisMatters": "Recognizing the impact of taker fees on trade costs allows traders to implement strategies that preserve capital and enhance profitability.",
      "realLifeExample": "A trader executed a $10,000 market order for Chainlink, incurring a $20 taker fee at a 0.2% rate, which could have been avoided with a limit order.",
      "commonMistake": "Many traders overlook taker fees when calculating overall trade costs, leading to reduced profitability.",
      "quickNote": "Taker fees can erode profits; always factor them into your trading strategy.",
      "mentorText": "Always be aware of taker fees when executing trades. They can add up quickly and significantly impact your bottom line if not managed properly.",
      "mentorAnalogy": "Managing taker fees is like monitoring fuel consumption in a vehicle; small inefficiencies can accumulate over time, leading to higher overall costs."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Managing Perpetual Funding Costs",
    "label": "Crypto Track",
    "body": "### Core Strategy: Perpetual Funding Management\nPerpetual funding costs can accumulate and affect overall trading expenses. This card focuses on **strategies to manage and mitigate these costs effectively**.\n\n* **Funding Rate Awareness**: Monitor the funding rates of perpetual contracts regularly. For instance, if the funding rate for Bitcoin perpetual contracts is 0.01% every 8 hours, this can add up to 0.06% daily, impacting long-term positions.\n* **Position Sizing**: Adjust position sizes based on funding costs. A trader holding a $50,000 long position in a perpetual contract with a high funding rate may consider reducing size to minimize costs.\n* **Timing of Trades**: Execute trades strategically around funding rate resets. For example, entering a position just before a funding rate reset can help avoid unnecessary costs associated with holding through the funding period.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Cost",
          "definition": "The cost incurred by traders holding perpetual contracts, typically paid at regular intervals based on market conditions."
        }
      ],
      "whyThisMatters": "Effectively managing perpetual funding costs is essential for maintaining profitability in leveraged trading strategies.",
      "realLifeExample": "A trader held a long position in a Bitcoin perpetual contract during a high funding rate period, incurring $300 in funding fees over a week, which could have been avoided with better timing.",
      "commonMistake": "Traders often neglect to account for perpetual funding costs when planning trades, leading to unexpected expenses.",
      "quickNote": "Perpetual funding costs can erode profits; manage them proactively.",
      "mentorText": "Always factor in perpetual funding costs when holding positions. They can significantly affect your profitability if not managed properly.",
      "mentorAnalogy": "Managing perpetual funding costs is like budgeting for recurring expenses in a business; failure to account for them can lead to cash flow issues."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Impact of Market Volatility on Slippage",
    "label": "Crypto Track",
    "body": "### Market Dynamics: Volatility and Slippage\nMarket volatility directly influences slippage, affecting trade execution quality. This card details **how to assess volatility's impact on slippage and adjust trading strategies accordingly**.\n\n* **Volatility Measurement**: Utilize the Average True Range (ATR) to quantify market volatility. A higher ATR indicates increased potential for slippage, necessitating wider stop-loss orders.\n* **Execution Timing**: Identify high-volatility periods, such as major news releases or market openings. Adjust entry and exit points to avoid slippage spikes during these times.\n* **Order Types**: Use limit orders instead of market orders in volatile conditions. This approach can mitigate slippage by ensuring execution at a predetermined price, even if it means waiting longer for fills.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset for that period."
        }
      ],
      "whyThisMatters": "Understanding how volatility affects slippage allows traders to refine their execution strategies, minimizing unexpected costs.",
      "realLifeExample": "During the Bitcoin surge on October 1, 2023, the ATR spiked to 5% over the previous week, leading to slippage of 3% on market orders executed at peak volatility.",
      "commonMistake": "Traders often underestimate slippage during volatile periods, leading to unexpected losses.",
      "quickNote": "Monitor ATR to gauge volatility and adjust execution strategies accordingly.",
      "mentorText": "When volatility spikes, I adjust my strategy. I check the ATR and widen my stop-loss to account for potential slippage. It’s about being proactive, not reactive.",
      "mentorAnalogy": "Think of trading like piloting an aircraft through turbulent weather; you must adjust your altitude and speed to maintain a safe flight path."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "concept",
    "title": "Optimizing Execution Costs in Crypto",
    "label": "Crypto Track",
    "body": "### Cost Efficiency: Minimizing Slippage and Fees\nExecution costs can erode profits in crypto trading. This card outlines **strategies to optimize execution costs by minimizing slippage and transaction fees**.\n\n* **Fee Structure Analysis**: Review the fee structures of different exchanges. Choose platforms that offer lower fees for high-volume trades to reduce overall execution costs.\n* **Slippage Tolerance Settings**: Set a maximum slippage tolerance in your trading platform. This ensures that trades only execute within acceptable price ranges, preventing excessive slippage.\n* **Liquidity Assessment**: Prioritize trading pairs with higher liquidity. Pairs like ETH/USDT typically have tighter spreads and less slippage, enhancing execution efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage Tolerance",
          "definition": "The maximum price deviation a trader is willing to accept when executing a trade."
        }
      ],
      "whyThisMatters": "Optimizing execution costs directly impacts profitability, allowing traders to retain more of their gains.",
      "realLifeExample": "Trading ETH/USDT on Binance during a low-traffic period resulted in a slippage of only 0.1%, compared to 1.5% on a less liquid pair like DOGE/USDT.",
      "commonMistake": "Many traders neglect to analyze fee structures, leading to higher costs that diminish overall profitability.",
      "quickNote": "Always assess fees and slippage tolerance before executing trades.",
      "mentorText": "I always check the fee structure before placing a trade. If I can save even a small percentage, it compounds over time, boosting my overall returns.",
      "mentorAnalogy": "Consider a chef optimizing ingredient costs; every penny saved on supplies can enhance the restaurant's bottom line."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "practice",
    "title": "Simulating Crypto Execution Costs",
    "label": "Crypto Track",
    "body": "### Practical Application: Execution Cost Simulation\nEngaging in simulations helps traders understand execution costs in crypto markets. This card focuses on **practical exercises to simulate and manage execution costs effectively**.\n\n* **Simulation Tools**: Utilize trading simulators that allow for real-time market conditions to practice executing trades. Adjust slippage and fees to see their impact on profitability.\n* **Scenario Analysis**: Create scenarios with varying market conditions (high volatility vs. low volatility) and analyze how slippage affects trade outcomes. Document the results for future reference.\n* **Performance Metrics**: Track key performance indicators such as average slippage and execution costs over multiple trades. Use this data to refine trading strategies and improve decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Simulating execution costs prepares traders for real market conditions, enhancing their ability to manage slippage effectively.",
      "realLifeExample": "In a simulation, executing a $10,000 trade on a volatile pair resulted in a 2% slippage, costing $200, highlighting the importance of pre-trade analysis.",
      "commonMistake": "Traders often skip simulations, leading to unpreparedness for real market conditions.",
      "quickNote": "Use simulations to understand the impact of slippage and fees on your trades.",
      "mentorText": "I run simulations before entering live trades. It’s like a pilot practicing in a simulator; it prepares me for real conditions without the risk.",
      "mentorAnalogy": "Simulating trades is akin to a surgeon practicing on a mannequin; it allows for skill refinement without real-world consequences."
    },
    "taskData": {
          "type": "choice_block",
          "question": "When simulating a market order entry on a volatile perp contract, how does high slippage affect the realized risk-reward (R:R) ratio?",
          "options": [
                {
                      "id": "0",
                      "text": "Slippage fills the order at a worse price, widening the stop-loss distance and reducing the potential R:R.",
                      "isCorrect": true,
                      "feedback": "Correct. Getting filled at a worse price than planned increases the distance to your stop-loss and shrinks the distance to your target, degrading R:R."
                },
                {
                      "id": "1",
                      "text": "Slippage improves the execution price, narrowing the stop-loss distance.",
                      "isCorrect": false,
                      "feedback": "Incorrect. Market slippage in the direction of the trade fills your order at a higher (worse) price, not a better one."
                },
                {
                      "id": "2",
                      "text": "Slippage has no effect on the R:R ratio since stop-loss is set in pips.",
                      "isCorrect": false,
                      "feedback": "Incorrect. Since the stop-loss must remain below structure, a worse entry price directly increases the risk distance."
                },
                {
                      "id": "3",
                      "text": "Slippage automatically triggers exchange rebates that cover the entry fee.",
                      "isCorrect": false,
                      "feedback": "Incorrect. Slippage is market impact cost, not an exchange rebate fee structure."
                }
          ]
    },
    "visualKey": "spread-slippage-meter"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Slippage Management",
    "label": "Crypto Track",
    "body": "### Key Takeaways: Slippage Management in Crypto\nEffective slippage management is essential for maintaining profitability in crypto trading. This card summarizes **the essential strategies and insights for managing slippage and execution costs**.\n\n* **Volatility Awareness**: Recognize how market volatility impacts slippage and adjust strategies accordingly. Utilize tools like ATR to gauge market conditions.\n* **Execution Cost Optimization**: Focus on minimizing fees and slippage by selecting appropriate trading pairs and using limit orders. Analyze fee structures to enhance profitability.\n* **Simulation and Analysis**: Engage in simulations to practice execution cost management. Track performance metrics to refine strategies and improve future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Cost Management",
          "definition": "The process of minimizing costs associated with executing trades, including slippage and fees."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of slippage management strategies is crucial for successful trading in volatile crypto markets.",
      "realLifeExample": "Traders who implemented these strategies during the recent Ethereum market fluctuations reported a 15% increase in net profitability by effectively managing slippage.",
      "commonMistake": "Failing to adapt strategies based on market conditions often leads to increased slippage and reduced profitability.",
      "quickNote": "Master slippage management to enhance trading performance and profitability.",
      "mentorText": "I always review my slippage management strategies after each trading session. It’s about learning and adapting to ensure I’m maximizing my profits.",
      "mentorAnalogy": "Managing slippage is like a project manager ensuring resources are allocated efficiently; every misstep can lead to budget overruns."
    },
    "taskData": null,
    "visualKey": "spread-slippage-meter"
  }
];
