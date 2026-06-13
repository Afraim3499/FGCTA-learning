import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Execution Costs in Position Sizing",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C1 -->\n### Core Scenario: Execution Cost Quantification\nExecution costs can significantly erode trading profitability and must be integrated into position sizing strategies. This card teaches **how to identify and quantify these costs to enhance trade execution**.\n\n* **Cost Components Identification**: Break down execution costs into explicit components such as spreads, commissions, and market impact. For example, if trading 100 shares of AAPL at a $150 price, with a $0.05 spread and $0.01 commission, the total execution cost is $6.\n* **Cost Impact Assessment**: Calculate the percentage of total costs relative to the position size. If the total execution cost is $6 on a $15,000 position, the effective cost is 0.04%, which should be factored into the overall risk-reward analysis.\n* **Dynamic Cost Adjustment**: Regularly audit execution costs against market conditions. If spreads widen during high volatility, adjust position sizes accordingly to maintain risk parameters.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Costs",
          "definition": "The total costs incurred when executing a trade, including spreads and commissions."
        }
      ],
      "whyThisMatters": "Accurate execution cost assessment is critical for maintaining profitability and ensuring that position sizes reflect true risk exposure.",
      "realLifeExample": "During the NYSE open, executing 200 shares of MSFT at $300 with a $0.10 spread results in a $20 execution cost, which must be accounted for in position sizing.",
      "commonMistake": "Traders often overlook execution costs, leading to inflated profit expectations and miscalculated risk.",
      "quickNote": "Execution costs must be quantified and integrated into position sizing for accurate trading strategies.",
      "mentorText": "When you enter a trade, think about all the costs involved. If you're not accounting for execution costs, you're setting yourself up for disappointment. Always factor these into your position size.",
      "mentorAnalogy": "Think of execution costs like fuel consumption in aviation; just as a pilot must account for fuel when planning a flight, a trader must consider execution costs when sizing positions."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Analyzing Slippage Curves",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C2 -->\n### Core Scenario: Slippage Curve Analysis\nSlippage occurs when the execution price differs from the expected price, often due to market volatility. This card teaches **how to analyze slippage curves to inform position sizing decisions**.\n\n* **Slippage Curve Construction**: Create a slippage curve by plotting execution prices against order sizes. For instance, if a market order of 100 shares of TSLA executes at $700, but a 500-share order executes at $705, this data can illustrate slippage trends.\n* **Volatility Correlation**: Assess how slippage varies with market volatility. During high volatility, such as earnings announcements, slippage may increase significantly, necessitating smaller position sizes to mitigate risk.\n* **Adaptive Sizing Strategies**: Adjust position sizes based on slippage analysis. If historical data shows a consistent 2% slippage during volatile periods, reduce position sizes to maintain risk thresholds.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage helps traders optimize position sizes, ensuring trades are executed at acceptable prices without excessive loss.",
      "realLifeExample": "When trading 300 shares of AMZN during a market open, if slippage averages $1.50 during high volatility, this must be factored into position sizing to avoid unexpected losses.",
      "commonMistake": "Failing to account for slippage during volatile market conditions can lead to larger-than-expected losses.",
      "quickNote": "Analyze slippage curves to adjust position sizes effectively based on market conditions.",
      "mentorText": "You need to know how slippage affects your trades. If you're not analyzing slippage curves, you're flying blind. Adjust your position sizes accordingly.",
      "mentorAnalogy": "Consider slippage like turbulence during a flight; just as pilots adjust their altitude and speed to navigate turbulence, traders must adjust their position sizes based on slippage data."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Adjusting Position Sizes for Market Liquidity",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C3 -->\n### Core Scenario: Market Liquidity Adjustment\nMarket liquidity directly influences the ability to execute trades without significant price impact. This card teaches **methods for adjusting position sizes based on real-time liquidity conditions**.\n\n* **Liquidity Assessment Metrics**: Monitor liquidity metrics such as bid-ask spread and volume. For example, if the bid-ask spread for EURUSD widens to 3 pips during a news event, consider reducing position sizes to avoid slippage.\n* **Dynamic Position Sizing**: Implement a dynamic sizing model that adjusts based on liquidity. If a market shows low liquidity, reduce position sizes by 50% to minimize the risk of adverse price movements.\n* **Liquidity Alerts**: Set alerts for liquidity thresholds. If the average volume drops below a certain level, automatically adjust position sizes to reflect the increased risk of execution costs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Liquidity",
          "definition": "The degree to which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Adjusting position sizes based on liquidity ensures trades are executed efficiently, reducing the risk of slippage and adverse price impact.",
      "realLifeExample": "During the London session, if the average spread for GBPJPY widens to 5 pips due to low liquidity, reducing position sizes by 30% can help maintain risk parameters.",
      "commonMistake": "Traders often maintain fixed position sizes regardless of liquidity conditions, leading to increased execution costs.",
      "quickNote": "Adjust position sizes dynamically based on market liquidity to optimize trade execution.",
      "mentorText": "You must be aware of liquidity conditions before entering a trade. If liquidity is low, reduce your position size to protect your capital.",
      "mentorAnalogy": "Think of market liquidity like traffic conditions; just as a driver adjusts speed based on traffic flow, a trader must adjust position sizes based on liquidity."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Incorporating Transaction Costs into Sizing Protocols",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C4 -->\n### Core Scenario: Transaction Cost Integration\nTransaction costs, including commissions and fees, must be integrated into position sizing protocols to ensure accurate profitability assessments. This card teaches **how to incorporate these costs into sizing strategies**.\n\n* **Comprehensive Cost Calculation**: Calculate total transaction costs for each trade, including commissions and fees. For example, if trading 150 shares of NFLX incurs a $0.02 commission per share, the total cost is $3.00, which should be factored into the position size.\n* **Cost-Benefit Analysis**: Perform a cost-benefit analysis to determine the viability of trades. If transaction costs exceed potential profit margins, consider reducing position sizes or avoiding the trade altogether.\n* **Regular Cost Audits**: Conduct regular audits of transaction costs against trading performance. If costs consistently exceed a certain percentage of profits, revise position sizing protocols to enhance profitability.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Transaction Costs",
          "definition": "The costs incurred when executing trades, including commissions, fees, and market impact."
        }
      ],
      "whyThisMatters": "Incorporating transaction costs into position sizing ensures that trading strategies are aligned with actual profitability, preventing unexpected losses.",
      "realLifeExample": "If trading 200 shares of GOOGL incurs a total transaction cost of $4.00, this must be deducted from profit calculations to accurately assess trade performance.",
      "commonMistake": "Traders often neglect to factor in transaction costs, leading to inflated profit expectations and mismanaged risk.",
      "quickNote": "Incorporate all transaction costs into position sizing to maintain accurate profitability assessments.",
      "mentorText": "Always account for transaction costs when sizing your positions. If you ignore these, you're not seeing the full picture of your trading performance.",
      "mentorAnalogy": "Incorporating transaction costs is like a chef accounting for ingredient costs; just as a chef must ensure that ingredient expenses don’t exceed menu prices, a trader must ensure that transaction costs don’t erode profits."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Evaluating Broker Execution Quality",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C5 -->\n### Core Scenario: Broker Execution Quality Assessment\nEvaluating the execution quality of brokers is essential for optimizing position sizing strategies. This card outlines **how to systematically assess broker performance metrics**.\n\n* **Execution Speed Metrics**: Measure the average execution time for trades across different brokers. A broker with an average execution time of 50 milliseconds is preferable to one with 200 milliseconds, as delays can impact trade outcomes.\n* **Slippage Analysis**: Monitor the frequency and magnitude of slippage during live trades. For instance, if a trade on EURUSD is executed at 1.0850 but the market price was 1.0845, the 5-pip slippage must be accounted for in position sizing.\n* **Spread Evaluation**: Compare the bid-ask spreads across brokers during various market conditions. A broker offering a consistent 1-pip spread during high volatility is more favorable than one with a variable spread that can widen to 5 pips.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Speed",
          "definition": "The time taken from order placement to order execution."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        },
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a financial instrument."
        }
      ],
      "whyThisMatters": "Understanding execution quality directly influences the effectiveness of position sizing, impacting overall profitability.",
      "realLifeExample": "During the NY session, a trader executes a buy order for 10,000 units of GBPUSD at 1.3000, but due to slippage, the order fills at 1.3005, affecting the risk-reward ratio.",
      "commonMistake": "Failing to account for slippage when calculating potential profits can lead to overestimating position sizes.",
      "quickNote": "Execution quality impacts trade outcomes and position sizing effectiveness.",
      "mentorText": "When assessing brokers, focus on execution speed and slippage. If you notice consistent slippage, adjust your position size to mitigate the risk of unexpected costs.",
      "mentorAnalogy": "Think of broker execution quality like a race car's pit stop. A quicker pit stop means less time lost on the track, just as faster execution minimizes costs in trading."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Real-Time Data Analysis for Sizing Adjustments",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C6 -->\n### Core Scenario: Real-Time Data Utilization\nUtilizing real-time data analysis is critical for making informed adjustments to position sizes based on current market conditions. This card details **how to leverage live market data for sizing decisions**.\n\n* **Volatility Assessment**: Use tools like the Average True Range (ATR) to gauge market volatility. For example, if the ATR for USDJPY is 0.50, adjust position sizes to reflect potential price swings.\n* **Liquidity Indicators**: Monitor order book depth and volume to assess liquidity. If a sudden spike in volume occurs, consider reducing position sizes to avoid slippage.\n* **Market Sentiment Analysis**: Analyze sentiment indicators to gauge market direction. If sentiment shifts from bullish to bearish, recalibrate position sizes to align with the new market outlook.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Order Book Depth",
          "definition": "A measure of the number of buy and sell orders at different price levels."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or market."
        }
      ],
      "whyThisMatters": "Real-time data allows traders to adapt position sizes dynamically, enhancing risk management and potential profitability.",
      "realLifeExample": "During a high-impact news release, a trader notices the ATR for GBPUSD spikes to 1.20, prompting a reduction in position size to mitigate risk.",
      "commonMistake": "Ignoring real-time data can lead to static position sizes that do not reflect current market conditions, increasing risk exposure.",
      "quickNote": "Real-time data analysis is essential for dynamic position sizing adjustments.",
      "mentorText": "Always keep an eye on volatility and liquidity. If the market shifts, your position size should shift with it to maintain your risk profile.",
      "mentorAnalogy": "Adjusting position sizes based on real-time data is like a pilot making in-flight adjustments to altitude based on weather conditions."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Risk Management in Position Sizing",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C7 -->\n### Core Scenario: Risk Management Protocols\nEffective risk management is integral to position sizing, ensuring trades align with overall risk tolerance. This card outlines **the principles of risk management as they pertain to position sizing**.\n\n* **Risk Per Trade Calculation**: Establish a maximum risk percentage per trade, typically between 1-2% of total capital. For example, with a $10,000 account, a maximum risk of 2% allows for a risk of $200 per trade.\n* **Position Size Formula**: Utilize the formula: Position Size = (Account Risk / Trade Risk) x Trade Size. If risking $200 on a trade with a $50 stop loss, the position size would be 4 lots.\n* **Diversification Strategy**: Avoid over-concentration in any single position. Limit exposure to 10% of total capital across correlated assets to mitigate systemic risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Per Trade",
          "definition": "The percentage of total capital risked on a single trade."
        },
        {
          "term": "Position Size Formula",
          "definition": "A mathematical approach to determine the appropriate size of a trade based on risk."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Aligning position sizes with risk management principles protects capital and enhances long-term trading success.",
      "realLifeExample": "A trader with a $15,000 account decides to risk 1% per trade, resulting in a maximum risk of $150. If the stop loss is set at $30, the trader can open a position size of 5 lots.",
      "commonMistake": "Neglecting to calculate risk per trade can lead to oversized positions and increased likelihood of significant losses.",
      "quickNote": "Risk management principles are foundational to effective position sizing.",
      "mentorText": "Always calculate your risk before entering a trade. If you can't define your risk, you shouldn't be in that trade.",
      "mentorAnalogy": "Think of risk management in trading like a surgeon's protocol: every procedure has a defined risk, and adjustments are made to ensure patient safety."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Creating a Dynamic Sizing Framework",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C8 -->\n### Core Scenario: Dynamic Position Sizing Framework\nCreating a dynamic position sizing framework allows traders to adapt to changing market conditions and execution costs. This card explains **how to construct a flexible sizing strategy**.\n\n* **Market Condition Assessment**: Classify market conditions (trending, ranging, volatile) to determine appropriate sizing strategies. In a trending market, increase position sizes, while in a ranging market, decrease them.\n* **Execution Cost Integration**: Factor in execution costs, such as spreads and commissions, when determining position sizes. If spreads widen to 3 pips on EURUSD, adjust the position size to maintain risk levels.\n* **Feedback Loop Mechanism**: Implement a feedback loop to regularly assess and adjust position sizes based on trade performance and market changes. For instance, after a series of losing trades, reduce position sizes until performance stabilizes.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Assessment",
          "definition": "The process of evaluating current market dynamics to inform trading strategies."
        },
        {
          "term": "Execution Costs",
          "definition": "The total costs associated with executing trades, including spreads and commissions."
        },
        {
          "term": "Feedback Loop",
          "definition": "A systematic process of evaluating and adjusting strategies based on performance outcomes."
        }
      ],
      "whyThisMatters": "A dynamic framework enhances adaptability, allowing traders to respond effectively to market fluctuations and optimize performance.",
      "realLifeExample": "In a volatile market where spreads have increased, a trader reduces their position size from 10 lots to 5 lots on AUDCAD to maintain risk exposure.",
      "commonMistake": "Failing to adjust position sizes in response to changing market conditions can lead to unnecessary losses.",
      "quickNote": "A dynamic sizing framework is essential for adapting to market changes effectively.",
      "mentorText": "Your position sizes should be as flexible as the market. If conditions change, your strategy must change with them to protect your capital.",
      "mentorAnalogy": "Creating a dynamic sizing framework is like a ship captain adjusting sails based on wind conditions to maintain course."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Position Sizing",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C9 -->\n### Core Scenario: Common Pitfalls in Position Sizing\nPosition sizing is critical for risk management, yet traders frequently encounter pitfalls that undermine their strategies. This card identifies **key errors and provides actionable strategies to avoid them**.\n\n* **Overleveraging Risks**: Traders often increase position sizes based on recent wins, ignoring the inherent risks. A trader who typically risks 2% of their capital may escalate to 5% after a winning streak, exposing themselves to significant drawdowns.\n* **Ignoring Market Conditions**: Failing to adjust position sizes according to market volatility can lead to inadequate risk management. For instance, trading 1 lot of GBPUSD during a high-impact news release may result in unexpected slippage and losses.\n* **Neglecting Transaction Costs**: Traders may overlook the impact of spreads and commissions on their position sizing. Executing a 10-lot order on a pair with a 3-pip spread can erode profits significantly, especially in low-volatility environments.",
    "context": {
      "keyTerms": [
        {
          "term": "Overleveraging",
          "definition": "Taking on excessive risk by increasing position sizes beyond acceptable limits."
        },
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time, affecting risk management."
        },
        {
          "term": "Transaction Costs",
          "definition": "Expenses incurred during trading, including spreads and commissions."
        }
      ],
      "whyThisMatters": "Understanding and avoiding common pitfalls in position sizing enhances risk management and trading performance.",
      "realLifeExample": "A trader risks 5% of their account after a series of wins, only to face a 15-pip adverse move in EURUSD during a news event, resulting in a significant loss.",
      "commonMistake": "Traders often increase position sizes impulsively after a winning streak, neglecting risk management principles.",
      "quickNote": "Avoid impulsive position sizing adjustments based on recent performance.",
      "mentorText": "You must adhere to your position sizing rules regardless of recent outcomes. Treat each trade as an independent event and stick to your risk parameters.",
      "mentorAnalogy": "Position sizing is like calibrating an aircraft's fuel load; failure to adjust for weight can lead to catastrophic outcomes during flight."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Case Studies on Position Sizing Errors",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C10 -->\n### Core Scenario: Learning from Position Sizing Errors\nAnalyzing past position sizing errors can provide valuable insights into effective risk management. This card reviews **notable case studies that illustrate common mistakes and their consequences**.\n\n* **Case Study: The 2015 Swiss Franc Shock**: A trader held a large position in EURCHF, failing to account for the potential impact of central bank interventions. The sudden removal of the peg led to a 1000-pip loss, wiping out their account.\n* **Case Study: Overexposure in Commodities**: A trader allocated 50% of their capital to crude oil futures without considering market volatility. A sudden price drop resulted in a margin call, forcing liquidation at a loss.\n* **Case Study: Ignoring Correlation Risks**: A trader simultaneously opened positions in highly correlated assets, such as AUDUSD and NZDUSD, without adjusting their position sizes. A market downturn led to compounded losses across both positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Central Bank Intervention",
          "definition": "Actions by a country's central bank to stabilize or influence its currency."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        },
        {
          "term": "Correlation Risks",
          "definition": "The risk associated with holding multiple positions that move in tandem."
        }
      ],
      "whyThisMatters": "Learning from historical position sizing errors can prevent costly mistakes and improve future trading strategies.",
      "realLifeExample": "A trader lost 80% of their account during the Swiss Franc shock by holding a large position in EURCHF without risk mitigation strategies.",
      "commonMistake": "Traders often fail to analyze past errors, leading to repeated mistakes in position sizing.",
      "quickNote": "Reviewing case studies helps identify and mitigate position sizing errors.",
      "mentorText": "Study these case studies closely. Each error is a lesson; learn from them to refine your approach and avoid similar pitfalls.",
      "mentorAnalogy": "Consider these case studies as crash reports in aviation; they reveal critical lessons that can prevent future disasters."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Integrating Position Sizing with Trading Strategies",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C11 -->\n### Core Scenario: Position Sizing and Trading Strategy Integration\nEffective trading strategies require a coherent position sizing framework. This card explores **how to align position sizing protocols with various trading strategies to enhance performance**.\n\n* **Trend Following Strategies**: Position sizes should be adjusted based on the strength of the trend. For example, in a strong uptrend, a trader might increase their position size by 20% for each confirmed higher high, while reducing size in a downtrend.\n* **Mean Reversion Strategies**: In mean reversion setups, position sizes can be increased when price deviates significantly from the mean. For instance, if the price of SPY deviates more than 2 standard deviations from its 20-day moving average, a trader may increase their position size to capitalize on the expected reversal.\n* **Scalping Techniques**: Position sizing in scalping requires precise calculations of risk per trade. A trader scalping the EURUSD may only risk 0.5% per trade, ensuring that even a series of losses does not significantly impact their capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Following",
          "definition": "A trading strategy that aims to capture gains through the analysis of an asset's momentum."
        },
        {
          "term": "Mean Reversion",
          "definition": "The theory that prices will return to their historical average over time."
        },
        {
          "term": "Scalping",
          "definition": "A trading strategy that involves making numerous trades to profit from small price changes."
        }
      ],
      "whyThisMatters": "Integrating position sizing with trading strategies optimizes risk management and enhances overall trading effectiveness.",
      "realLifeExample": "A trend follower increases their position size by 20% after confirming a higher high in AAPL, capitalizing on the upward momentum effectively.",
      "commonMistake": "Traders often apply a one-size-fits-all approach to position sizing, disregarding the nuances of their trading strategy.",
      "quickNote": "Align position sizing with your trading strategy to optimize risk and reward.",
      "mentorText": "Your position sizing must reflect the strategy you are employing. Adjust sizes based on market conditions and the specific strategy to maximize your edge.",
      "mentorAnalogy": "Integrating position sizing with trading strategies is like a chef adjusting ingredient quantities based on the recipe; precision is key to achieving the desired outcome."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Evaluating Performance Metrics Related to Sizing",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C12 -->\n### Core Scenario: Performance Metrics and Position Sizing\nPosition sizing decisions significantly impact trading performance metrics. This card focuses on **how to evaluate metrics that reflect the effectiveness of your position sizing protocols**.\n\n* **Risk-Adjusted Return**: Calculate the Sharpe Ratio to assess returns relative to the risk taken. A trader with a Sharpe Ratio above 1 indicates that their position sizing effectively balances risk and return.\n* **Maximum Drawdown**: Monitor the maximum drawdown to evaluate the worst peak-to-trough decline in capital. A trader who maintains a maximum drawdown of less than 15% demonstrates effective position sizing discipline.\n* **Win Rate vs. Risk-Reward Ratio**: Analyze the relationship between win rate and risk-reward ratio. A trader with a 60% win rate and a risk-reward ratio of 1:2 is effectively utilizing position sizing to maximize profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating how much excess return is received for the extra volatility endured."
        },
        {
          "term": "Maximum Drawdown",
          "definition": "The largest peak-to-trough decline in the value of a portfolio."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Evaluating performance metrics related to position sizing helps identify strengths and weaknesses in trading strategies.",
      "realLifeExample": "A trader calculates their Sharpe Ratio at 1.5, indicating that their position sizing strategy is yielding favorable risk-adjusted returns over the past quarter.",
      "commonMistake": "Traders often neglect to evaluate performance metrics, leading to unoptimized position sizing strategies.",
      "quickNote": "Regularly assess performance metrics to refine position sizing decisions.",
      "mentorText": "You must consistently evaluate your performance metrics. They are the compass that guides your position sizing decisions and overall trading strategy.",
      "mentorAnalogy": "Evaluating performance metrics is akin to a pilot reviewing flight data; it informs adjustments needed for a successful journey."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Practical Application of Sizing Protocols",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C13 -->\n### Core Scenario: Position Sizing Against Live Execution Costs\nPosition sizing must be dynamically adjusted based on real-time execution costs and liquidity conditions. This card details **how to engage in practical exercises that apply learned protocols in live market scenarios**.\n\n* **Market Condition Assessment**: Evaluate current market liquidity by analyzing bid-ask spreads and order book depth. For example, if EURUSD shows a 1.2 pip spread during the London session, adjust your position size accordingly to mitigate slippage.\n* **Execution Cost Calculation**: Incorporate transaction costs into your position sizing formula. If a trade incurs $10 in fees, ensure your position size reflects this cost to maintain risk parameters.\n* **Live Simulation Drills**: Conduct drills using a demo account to practice sizing adjustments based on live market data. For instance, simulate a scenario where GBPUSD experiences increased volatility, requiring a recalibration of your position size to maintain a consistent risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Costs",
          "definition": "The total costs incurred when executing a trade, including spreads and commissions."
        },
        {
          "term": "Liquidity Spread",
          "definition": "The difference between the bid and ask price in the market, indicating market depth."
        }
      ],
      "whyThisMatters": "Effective position sizing directly impacts profitability and risk management, especially in volatile conditions.",
      "realLifeExample": "During the NY open, you identify a 1.5 pip spread on AUDUSD. Adjust your position size to ensure that your risk remains at 1% of your capital, factoring in the increased execution cost.",
      "commonMistake": "Failing to adjust position size based on real-time liquidity changes, leading to unexpected losses.",
      "quickNote": "Always align position size with current market execution costs.",
      "mentorText": "When you assess a live market, remember that your position size must reflect the current execution costs. If spreads widen, your risk must be recalibrated to avoid overexposure.",
      "mentorAnalogy": "Think of position sizing like adjusting the thrust of an aircraft during takeoff. If wind conditions change, the thrust must be recalibrated to ensure a safe ascent."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "practice",
    "title": "Recap of Position Sizing Audits",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C14 -->\n### Core Scenario: Summarizing Key Concepts\nA thorough recap of position sizing audits is essential for reinforcing the learned protocols against execution costs and liquidity. This card emphasizes **the importance of summarizing key concepts for practical application**.\n\n* **Audit Checklist Creation**: Develop a checklist that includes factors like current spread, transaction fees, and risk percentage. This ensures that all elements are considered before executing a trade.\n* **Scenario Analysis**: Review past trades to identify how execution costs impacted your position sizing. For example, analyze a trade on USDJPY where a 2 pip spread led to a 0.5% loss instead of the planned 0.2% risk.\n* **Feedback Loop Implementation**: Establish a feedback mechanism to refine your position sizing protocols. After each trading session, assess how well your sizing aligned with actual execution costs and liquidity conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Audit Checklist",
          "definition": "A structured list of criteria to evaluate position sizing against market conditions."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of reviewing and adjusting strategies based on past performance."
        }
      ],
      "whyThisMatters": "Regular audits of position sizing ensure that traders remain disciplined and responsive to market changes.",
      "realLifeExample": "After a trading week, you review a series of trades on EURCAD, noting that an average spread of 1.8 pips caused a deviation from your planned risk levels, prompting a revision of your sizing protocol.",
      "commonMistake": "Neglecting to review past trades for execution cost impacts, leading to repeated sizing errors.",
      "quickNote": "Regularly audit your position sizing against live execution metrics.",
      "mentorText": "Every time you finish a trading session, take a moment to review your trades. Ask yourself if your position sizes were appropriate given the execution costs you faced.",
      "mentorAnalogy": "Conducting a position sizing audit is like a pilot reviewing flight data after landing. It’s crucial to analyze performance and make adjustments for future flights."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You executed a trade on GBPUSD with a 1.3 pip spread. What should you do to ensure your position size aligns with this execution cost?",
      "options": [
        {
          "id": "0",
          "text": "Increase position size to maximize potential profit.",
          "isCorrect": false,
          "feedback": "Increasing position size without considering the spread can lead to excessive risk."
        },
        {
          "id": "1",
          "text": "Maintain your planned position size without adjustments.",
          "isCorrect": false,
          "feedback": "Ignoring the spread can result in unexpected losses."
        },
        {
          "id": "2",
          "text": "Adjust your position size to account for the 1.3 pip spread.",
          "isCorrect": true,
          "feedback": "Correctly adjusting your position size ensures that your risk remains within acceptable limits."
        },
        {
          "id": "3",
          "text": "Only consider the spread if it exceeds 2 pips.",
          "isCorrect": false,
          "feedback": "Any spread should be considered when determining position size to manage risk effectively."
        }
      ]
    },
    "visualKey": "live-capital-planner"
  },
  {
    "type": "summary",
    "title": "Core Certification Portfolio 15 (Module 9.3 - CORE)",
    "label": "Core Track",
    "body": "<!-- M9.3-core-C15 -->\n### Core Scenario: Advanced Application of Live Capital Sizing Audits\nThe advanced application of Live Capital Sizing Audits is critical for achieving consistent performance in Core trading. This card focuses on **integrating advanced concepts into your trading portfolio**.\n\n* **Dynamic Risk Assessment**: Implement a system that adjusts risk levels based on real-time market conditions. For instance, if volatility increases, reduce your position size to maintain a stable risk profile.\n* **Liquidity Monitoring Tools**: Utilize advanced tools to monitor liquidity changes continuously. For example, employ a platform that alerts you when spreads exceed your predefined thresholds, prompting immediate sizing adjustments.\n* **Portfolio Diversification Strategy**: Diversify your trades to manage risk effectively across different instruments. If you are trading both gold and oil, ensure that position sizes are adjusted based on their respective liquidity profiles to avoid overexposure to market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Risk Assessment",
          "definition": "A method of adjusting risk levels based on real-time market conditions."
        },
        {
          "term": "Liquidity Monitoring Tools",
          "definition": "Technological solutions that track and alert traders to changes in market liquidity."
        }
      ],
      "whyThisMatters": "Advanced application of sizing audits enhances risk management and improves overall trading performance.",
      "realLifeExample": "In a volatile session, you notice that the spread on XAUUSD widens to 3 pips. You promptly reduce your position size to ensure that your risk remains capped at 1% of your capital.",
      "commonMistake": "Failing to adapt position sizes in response to changing liquidity conditions, leading to increased risk exposure.",
      "quickNote": "Integrate advanced sizing strategies to optimize your trading portfolio.",
      "mentorText": "Always be ready to adjust your risk based on what the market is telling you. If spreads widen, your position size must shrink to keep your risk in check.",
      "mentorAnalogy": "Think of your trading portfolio like a ship navigating through changing tides. You must adjust your sails and ballast to maintain stability and avoid capsizing."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  }
];
