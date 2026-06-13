import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Net Performance Analysis of Crypto Assets",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C1 -->\n### Core Scenario: Comprehensive Performance Assessment\nEvaluating the net performance of crypto assets requires a thorough understanding of perpetual funding costs and slippage. This card teaches **how to integrate these factors for a precise calculation of actual returns**.\n\n* **Perpetual Funding Cost Calculation**: Determine the total funding paid or received over the holding period. For example, if holding a long position in Bitcoin (BTC) incurs a funding rate of 0.01% daily over 30 days, the total cost would be 0.30% of the position size.\n* **Slippage Impact Analysis**: Measure the difference between expected and executed prices during trades. If a trader expects to buy Ethereum (ETH) at $2,000 but executes at $2,020 due to market volatility, the slippage is $20, impacting overall returns.\n* **Net Return Formula**: Calculate net returns by subtracting total funding costs and slippage from gross returns. For instance, if a trader realizes a gross return of 5% on a position but incurs 0.30% in funding and $20 in slippage on a $2,000 trade, the net return would be approximately 4.70%.",
    "context": {
      "keyTerms": [
        {
          "term": "Net Performance",
          "definition": "The actual return on an investment after accounting for all costs, including funding and slippage."
        },
        {
          "term": "Perpetual Funding Rate",
          "definition": "The cost associated with holding a perpetual futures position, paid periodically."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Accurate net performance analysis is essential for assessing the viability of crypto trading strategies and ensuring profitability over time.",
      "realLifeExample": "A trader holds a long position in BTC at $40,000, incurs a funding cost of $120 over 30 days, and experiences $100 in slippage. The gross return of 10% translates to a net return of approximately 9.5%.",
      "commonMistake": "Traders often overlook slippage, leading to an inflated perception of their actual returns.",
      "quickNote": "Integrate funding costs and slippage for a true measure of crypto asset performance.",
      "mentorText": "When evaluating your crypto trades, always account for the costs that eat into your profits. If you're not factoring in funding and slippage, you're not seeing the full picture.",
      "mentorAnalogy": "Think of this like a pilot calculating fuel costs and maintenance before a flight. Just as a pilot must account for all expenses to determine profitability, you must factor in all costs to assess your trading performance."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Impact of Perpetual Funding Rates on Returns",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C2 -->\n### Core Scenario: Funding Rate Influence\nPerpetual funding rates can significantly affect the profitability of trading positions in the crypto market. This card teaches **how to calculate and interpret the impact of funding rates on overall returns**.\n\n* **Daily Funding Rate Calculation**: Identify the funding rate applicable to your position. For example, if the funding rate for a long position in Litecoin (LTC) is 0.02% per day, this translates to a cost of $20 for a $10,000 position over 30 days.\n* **Total Funding Cost Assessment**: Multiply the daily funding rate by the number of days held to determine total costs. For instance, a 0.02% rate over 30 days results in a total funding cost of 0.60% on the initial position size.\n* **Return Adjustment**: Adjust gross returns by subtracting the total funding costs. If a trader achieves a gross return of 8% on their LTC position, the net return after accounting for the funding cost would be approximately 7.4%.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        },
        {
          "term": "Gross Return",
          "definition": "The total return on an investment before any costs are deducted."
        },
        {
          "term": "Net Return",
          "definition": "The return on an investment after all costs, including funding, have been deducted."
        }
      ],
      "whyThisMatters": "Understanding funding rates is critical for traders to accurately assess their potential returns and manage risk effectively.",
      "realLifeExample": "A trader holds a long position in Bitcoin at $50,000 with a funding rate of 0.01% daily. After 30 days, they incur a funding cost of $150, reducing their gross return of 12% to a net return of 11.7%.",
      "commonMistake": "Traders frequently ignore the cumulative effect of funding rates over time, leading to unexpected losses.",
      "quickNote": "Calculate funding costs to accurately gauge the impact on your trading returns.",
      "mentorText": "Always factor in the funding costs when holding positions. If you're not doing this, you're likely overestimating your profits.",
      "mentorAnalogy": "Consider a chef who must account for ingredient costs before pricing a dish. Just as a chef needs to know their expenses to ensure profitability, you must understand funding rates to accurately assess your trading outcomes."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Understanding Slippage in Crypto Transactions",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C3 -->\n### Core Scenario: Slippage Analysis\nSlippage occurs when the execution price of a trade differs from the expected price, impacting overall performance. This card teaches **how to quantify slippage and its implications for trade execution**.\n\n* **Slippage Calculation**: Measure the difference between the expected entry price and the actual execution price. For example, if a trader intends to buy Ripple (XRP) at $1.00 but executes at $1.05, the slippage is $0.05 per unit.\n* **Market Conditions Assessment**: Identify conditions that exacerbate slippage, such as high volatility or low liquidity. For instance, during a sudden market drop, a trader may experience increased slippage when executing a market order on a thinly traded altcoin.\n* **Performance Impact Evaluation**: Assess how slippage affects overall returns. If a trader buys 1,000 units of XRP at $1.05 instead of $1.00, the total cost increases by $50, which must be accounted for in the net return calculation.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        },
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a security immediately at the current market price."
        },
        {
          "term": "Liquidity",
          "definition": "The degree to which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Quantifying slippage is essential for traders to understand the true cost of executing trades and to refine their trading strategies.",
      "realLifeExample": "A trader places a market order to buy 500 units of Chainlink (LINK) at $30.00 but executes at $30.50 due to high volatility. The slippage of $0.50 per unit results in an additional cost of $250, significantly impacting the trade's profitability.",
      "commonMistake": "Traders often underestimate slippage during volatile periods, leading to unexpected costs.",
      "quickNote": "Always account for slippage to ensure accurate performance assessments.",
      "mentorText": "When executing trades, always consider the potential for slippage. If you ignore it, you risk miscalculating your actual costs and returns.",
      "mentorAnalogy": "Think of a surgeon who must account for potential complications during an operation. Just as a surgeon prepares for unexpected issues, you must anticipate slippage to ensure accurate trade execution."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Analyzing On-Chain Capital Flows",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C4 -->\n### Core Scenario: Capital Flow Assessment\nOn-chain capital flows provide insights into market sentiment and liquidity. This card teaches **how to analyze blockchain data to assess these flows effectively**.\n\n* **Flow Direction Analysis**: Examine the direction of capital flows into and out of exchanges. For example, if Bitcoin experiences a net inflow of 2,000 BTC to exchanges, it may indicate increased selling pressure.\n* **Volume Comparison**: Compare on-chain transaction volumes with historical averages. If Ethereum shows a spike in transaction volume of 15% above its 30-day average, this may signal heightened market activity or sentiment shifts.\n* **Liquidity Assessment**: Evaluate the liquidity available on exchanges by analyzing order book depth. A shallow order book with large sell orders may suggest potential price drops, while a deep order book indicates stability.",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Flows",
          "definition": "The movement of assets on the blockchain, reflecting buying and selling activity."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular asset or market."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding on-chain capital flows is crucial for traders to gauge market sentiment and make informed trading decisions.",
      "realLifeExample": "If a trader notices a significant outflow of 5,000 ETH from exchanges while prices are stable, it may indicate that holders are accumulating, potentially leading to upward price pressure.",
      "commonMistake": "Traders often misinterpret capital flows, failing to consider the broader market context and historical trends.",
      "quickNote": "Analyze on-chain flows to gauge market sentiment and liquidity effectively.",
      "mentorText": "When assessing market conditions, always look at on-chain flows. They provide vital clues about where the market might be headed.",
      "mentorAnalogy": "Consider a traffic engineer analyzing vehicle flow on a highway. Just as they assess traffic patterns to predict congestion, you must analyze on-chain flows to anticipate market movements."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Key Performance Metrics for Crypto Audits",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C5 -->\n### Core Metrics: Essential Performance Indicators\nIdentifying key performance metrics is critical for conducting thorough audits in the crypto space. This card focuses on **two primary metrics: Return on Investment (ROI) and volatility measures**.\n\n* **Return on Investment (ROI)**: Calculate ROI by taking the difference between the current value of the investment and the initial cost, then dividing by the initial cost. For example, if you bought Bitcoin at $30,000 and it is now $40,000, ROI = (40,000 - 30,000) / 30,000 = 33.33%.\n* **Volatility Measures**: Assess volatility using standard deviation of price changes over a specified period. For instance, if Ethereum's price fluctuated between $2,000 and $2,500 over a month, the standard deviation can provide insight into risk levels associated with holding the asset.\n* **Liquidity Metrics**: Monitor liquidity through trading volume and order book depth. A sudden drop in trading volume can indicate potential liquidity issues, impacting the ability to execute trades without significant price slippage.",
    "context": {
      "keyTerms": [
        {
          "term": "Return on Investment (ROI)",
          "definition": "A performance measure used to evaluate the efficiency of an investment."
        },
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given security."
        }
      ],
      "whyThisMatters": "Understanding these metrics allows traders to assess the performance of their crypto investments and make informed decisions.",
      "realLifeExample": "Analyzing Bitcoin's ROI after a 20% price increase from $35,000 to $42,000, resulting in an ROI of 20% over a month.",
      "commonMistake": "Failing to consider both ROI and volatility can lead to misjudging the risk-reward profile of an investment.",
      "quickNote": "Key metrics like ROI and volatility are essential for effective crypto audits.",
      "mentorText": "When evaluating your crypto investments, always calculate ROI and assess volatility. These metrics will give you a clear picture of your performance and risk.",
      "mentorAnalogy": "Think of these metrics like an aircraft's performance indicators; just as a pilot must monitor speed and altitude, a trader must track ROI and volatility."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Calculating Funding Rate Drag",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C6 -->\n### Funding Rate Drag: Impact on Positions\nCalculating the drag effect of perpetual funding rates is crucial for understanding the long-term profitability of crypto positions. This card teaches **how to quantify this drag and its implications**.\n\n* **Funding Rate Calculation**: The funding rate is typically calculated as the difference between the interest paid by long positions and the interest received by short positions. For example, if the funding rate is 0.01% per 8 hours, a long position of $10,000 incurs a cost of $1.20 per day.\n* **Drag Assessment**: To assess the drag, multiply the funding rate by the position size and the number of funding intervals. If you hold a $10,000 position with a funding rate of 0.01% every 8 hours, the total drag over 24 hours is $3.60.\n* **Long-Term Strategy Implications**: Consider the cumulative effect of funding rate drag when holding positions for extended periods. If the drag exceeds potential gains from price appreciation, reevaluate your strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        },
        {
          "term": "Drag Effect",
          "definition": "The negative impact on returns due to costs associated with holding a position."
        }
      ],
      "whyThisMatters": "Understanding funding rate drag helps traders make informed decisions about holding or closing positions based on cost versus potential returns.",
      "realLifeExample": "Calculating the drag on a $50,000 Bitcoin position with a funding rate of 0.02% every 8 hours results in a daily cost of $9.00, impacting overall profitability.",
      "commonMistake": "Overlooking the cumulative effect of funding rates can lead to unexpected losses in long-term positions.",
      "quickNote": "Calculate funding rate drag to assess the true cost of holding perpetual positions.",
      "mentorText": "Always factor in the funding rate when holding a position. It can significantly affect your overall returns, especially over time.",
      "mentorAnalogy": "Consider funding rate drag like the fuel consumption of a plane; if you don't account for it, you may run out of resources before reaching your destination."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Indicators of Capital Flow Trends",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C7 -->\n### Capital Flow Indicators: Market Dynamics\nExamining capital flow indicators is essential for identifying shifts in market dynamics within the crypto space. This card focuses on **key indicators that signal these trends**.\n\n* **On-Chain Metrics**: Utilize on-chain data, such as transaction volume and wallet activity, to gauge capital inflows and outflows. For instance, a spike in transactions on the Ethereum network can indicate increased buying interest.\n* **Exchange Inflows/Outflows**: Monitor the net flow of assets into and out of exchanges. A significant increase in inflows may suggest selling pressure, while outflows can indicate accumulation. For example, if $100 million flows into Binance, it may signal bearish sentiment.\n* **Sentiment Analysis**: Leverage social media sentiment and news trends to assess market psychology. A surge in positive sentiment can precede capital inflows, while negative sentiment often correlates with outflows.",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Metrics",
          "definition": "Data derived from blockchain transactions that provide insights into market behavior."
        },
        {
          "term": "Net Flow",
          "definition": "The difference between the total amount of assets entering and exiting an exchange."
        }
      ],
      "whyThisMatters": "Recognizing capital flow trends allows traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "Observing a 30% increase in Bitcoin inflows to exchanges during a price drop can indicate potential selling pressure, prompting a reassessment of positions.",
      "commonMistake": "Ignoring on-chain metrics can lead to a misinterpretation of market trends and missed opportunities.",
      "quickNote": "Monitor capital flow indicators to stay ahead of market shifts.",
      "mentorText": "Always keep an eye on capital flows; they reveal the underlying sentiment and can help you make timely decisions.",
      "mentorAnalogy": "Think of capital flows like water currents in a river; understanding their direction and strength can guide your navigation through the market."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Evaluating Exchange-Specific Wicks",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C8 -->\n### Exchange-Specific Wicks: Market Volatility\nUnderstanding how to evaluate exchange-specific wicks is vital for assessing perceived market volatility and liquidity. This card focuses on **the mechanics of analyzing these wicks**.\n\n* **Wick Analysis**: Examine the length and direction of wicks on candlestick charts to determine market sentiment. For instance, a long upper wick on a 1-hour candle for Bitcoin may indicate rejection of higher prices, signaling potential bearish sentiment.\n* **Liquidity Assessment**: Assess the liquidity at different exchanges by comparing wick lengths across platforms. A significant wick on Binance but not on Coinbase may suggest liquidity issues or manipulation on that exchange.\n* **Impact on Trading Decisions**: Use wick analysis to inform entry and exit strategies. If a wick indicates strong rejection at a price level, consider adjusting stop-loss orders or taking profits to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick",
          "definition": "The line on a candlestick chart that shows the high and low prices during a specific time period."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold without affecting its price."
        }
      ],
      "whyThisMatters": "Evaluating wicks helps traders understand market sentiment and make informed decisions based on price action.",
      "realLifeExample": "Analyzing a 15-minute candlestick for Ethereum that shows a long wick at $2,800, indicating rejection and a potential reversal, can inform your trading strategy.",
      "commonMistake": "Relying solely on close prices without considering wick data can lead to misinterpretation of market conditions.",
      "quickNote": "Evaluate exchange-specific wicks to gauge market sentiment and liquidity.",
      "mentorText": "Pay close attention to wicks; they tell you where the market tried to go and where it was rejected, which is crucial for your trading decisions.",
      "mentorAnalogy": "Think of wicks like the wake left by a boat; they indicate the path the market tried to take and can help you navigate future movements."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Risk Management in Crypto Trading (Module 8.13 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C9 -->\n### Core Scenario: Risk Management Strategies\nEffective risk management is essential in crypto trading due to the volatility of funding rates and slippage. This card details **specific strategies to mitigate risk exposure**.\n\n* **Funding Rate Monitoring**: Regularly assess the perpetual funding rate to identify potential costs. A funding rate above 0.1% can significantly impact profitability, especially in leveraged positions.\n* **Slippage Calculation**: Implement a slippage tolerance threshold before executing trades. For instance, if trading BTC/USD at $30,000, set a slippage tolerance of 0.5% to avoid unexpected execution at $30,150.\n* **Position Sizing**: Calculate position sizes based on the maximum acceptable loss per trade. If your risk tolerance is $200, and the stop-loss is set at 2%, position size should not exceed $10,000 to maintain risk management discipline.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position in perpetual contracts, which can affect overall profitability."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual executed price."
        }
      ],
      "whyThisMatters": "Understanding these risk management strategies allows traders to protect their capital and optimize their trading performance in volatile markets.",
      "realLifeExample": "While trading ETH/USD, a trader notices a funding rate of 0.15% and decides to adjust their position size to limit exposure, resulting in a calculated maximum loss of $150.",
      "commonMistake": "Failing to account for funding rates when holding positions overnight can lead to unexpected losses.",
      "quickNote": "Monitor funding rates and slippage to effectively manage risk in crypto trades.",
      "mentorText": "You must treat each trade like a critical mission. Always assess the funding rates and slippage before entering a position. If the costs outweigh the potential gains, reconsider your strategy.",
      "mentorAnalogy": "Think of trading like piloting an aircraft; you must constantly monitor fuel levels (funding rates) and adjust your altitude (position size) to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Comparative Performance Analysis",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C10 -->\n### Core Scenario: Analyzing Crypto Asset Performance\nConducting a comparative performance analysis is vital for selecting optimal crypto assets based on funding costs and slippage. This card outlines **the methodology for effective analysis**.\n\n* **Asset Comparison Metrics**: Evaluate multiple assets using metrics such as ROI, volatility, and funding rates. For example, compare BTC, ETH, and LTC over a 30-day period to identify which asset offers the best risk-adjusted return.\n* **Funding Cost Integration**: Incorporate funding costs into performance metrics. If BTC has a 30-day average funding rate of 0.1% and ETH at 0.05%, adjust the ROI calculations accordingly to reflect true performance.\n* **Slippage Impact Assessment**: Analyze historical slippage data for each asset during high volatility periods. For instance, during a market crash, BTC may experience 2% slippage while ETH might only see 1%, affecting overall profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "ROI",
          "definition": "Return on investment, a measure of the profitability of an investment."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        }
      ],
      "whyThisMatters": "This analysis enables traders to make informed decisions based on comprehensive performance metrics rather than superficial observations.",
      "realLifeExample": "A trader compares BTC and ETH over the past month, finding BTC's ROI at 5% after adjusting for a 0.1% funding cost, while ETH's ROI is 7% with a 0.05% funding cost, leading to a strategic shift in asset allocation.",
      "commonMistake": "Neglecting to adjust performance metrics for funding costs can lead to misleading conclusions about asset profitability.",
      "quickNote": "Always adjust performance metrics to account for funding costs and slippage when comparing crypto assets.",
      "mentorText": "When analyzing assets, think beyond the surface. Adjust your calculations for funding costs and slippage to get a true picture of performance. This is how you make data-driven decisions.",
      "mentorAnalogy": "Consider this like evaluating different cars; you wouldn’t just look at speed (ROI) without factoring in fuel efficiency (funding costs) and maintenance (slippage)."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "The Audit Process for Crypto Investments",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C11 -->\n### Core Scenario: Step-by-Step Audit Process\nA thorough audit process is essential for assessing crypto investments, ensuring that all relevant factors are considered. This card outlines **the systematic approach to conducting an audit**.\n\n* **Data Collection**: Gather all relevant transaction data, including funding rates, slippage, and historical performance. Utilize platforms like Glassnode to access on-chain metrics for accurate data.\n* **Performance Evaluation**: Analyze the collected data against set benchmarks. For instance, if the expected funding rate for a position is 0.05%, assess actual performance against this metric to identify discrepancies.\n* **Risk Assessment**: Conduct a risk assessment based on the findings. If an asset's funding rate consistently exceeds 0.1% during high volatility, consider reducing exposure or implementing hedging strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Audit",
          "definition": "A systematic examination of financial records and performance metrics."
        },
        {
          "term": "Benchmark",
          "definition": "A standard or point of reference against which things may be compared."
        }
      ],
      "whyThisMatters": "A structured audit process helps traders identify weaknesses in their investment strategy and optimize their portfolios accordingly.",
      "realLifeExample": "An audit of a portfolio reveals that the average funding rate for a leveraged BTC position is 0.12%, prompting the trader to reassess their exposure and adjust their strategy to mitigate costs.",
      "commonMistake": "Overlooking the importance of data collection can lead to incomplete audits and poor investment decisions.",
      "quickNote": "Follow a systematic audit process to ensure comprehensive evaluation of crypto investments.",
      "mentorText": "Treat your audit like a forensic investigation. Every piece of data matters. Gather it meticulously, evaluate it rigorously, and assess risks thoroughly to ensure your investments are sound.",
      "mentorAnalogy": "Think of this audit process like a surgical procedure; every step must be followed precisely to ensure the health of your investment portfolio."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Practical Case Study on Crypto Audits",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C12 -->\n### Core Scenario: Applying Audit Concepts\nEngaging in a practical case study allows traders to apply theoretical concepts to real-world scenarios. This card provides **a framework for conducting a crypto audit**.\n\n* **Case Study Selection**: Choose a hypothetical crypto portfolio consisting of BTC, ETH, and LTC. Document the initial funding rates, slippage, and performance metrics for each asset.\n* **Data Analysis**: Analyze the portfolio's performance over a specified period, adjusting for funding costs and slippage. For example, if BTC shows a 4% return but incurs a 0.1% funding cost, the net return is 3.9%.\n* **Final Recommendations**: Based on the analysis, provide actionable recommendations. If ETH shows consistent underperformance due to high funding rates, suggest reallocating funds to BTC or exploring alternative assets.",
    "context": {
      "keyTerms": [
        {
          "term": "Hypothetical Portfolio",
          "definition": "A simulated collection of assets used for analysis and educational purposes."
        },
        {
          "term": "Actionable Recommendations",
          "definition": "Specific suggestions based on analysis results to improve investment strategies."
        }
      ],
      "whyThisMatters": "Applying theoretical knowledge to practical scenarios solidifies understanding and enhances decision-making skills in real trading environments.",
      "realLifeExample": "In a case study, a trader audits a hypothetical portfolio of BTC, ETH, and LTC, discovering that reallocating funds from ETH to BTC increases overall portfolio performance by 1.5% after adjusting for funding costs.",
      "commonMistake": "Failing to simulate realistic market conditions in the case study can lead to misleading conclusions.",
      "quickNote": "Utilize practical case studies to bridge the gap between theory and real-world application in crypto audits.",
      "mentorText": "When you conduct a case study, treat it as if it were your actual portfolio. Analyze every detail, adjust for real-world costs, and make recommendations that you would follow in your trading.",
      "mentorAnalogy": "Conducting a case study is like a pilot running simulations before a flight; it prepares you for real-world conditions and ensures you’re ready to make informed decisions."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Key Components of Crypto Audits",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C13 -->\n### Core Concept: Summary of Key Concepts in Crypto Audits\nThorough audits are essential for evaluating crypto performance, focusing on perpetual funding rates, on-chain flows, and exchange-specific anomalies. This card consolidates the critical elements necessary for effective crypto audits.\n\n* **Perpetual Funding Rate Analysis**: Assess the impact of funding rates on price action. A funding rate above 0.01% can indicate excessive long positioning, potentially leading to a price correction.\n* **On-Chain Flow Metrics**: Utilize Glassnode metrics to analyze net inflows and outflows. A significant increase in exchange inflows, such as 5,000 BTC to Binance, may signal impending selling pressure.\n* **Exchange-Specific Wicks**: Identify and evaluate wicks on price charts from specific exchanges. For instance, a 10% wick on Coinbase during high volatility can indicate liquidity issues or stop-loss hunting.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Rate",
          "definition": "The cost of holding a perpetual futures position, influencing trader behavior."
        },
        {
          "term": "On-Chain Flows",
          "definition": "The movement of assets on the blockchain, providing insights into market sentiment."
        },
        {
          "term": "Exchange-Specific Wicks",
          "definition": "Price spikes or drops on specific exchanges that may not reflect broader market trends."
        }
      ],
      "whyThisMatters": "Understanding these components allows traders to make informed decisions based on market dynamics and potential risks.",
      "realLifeExample": "During a recent market downturn, a funding rate spike of 0.02% on Binance coincided with a 3,000 BTC influx, indicating a potential sell-off.",
      "commonMistake": "Failing to consider the influence of funding rates on market sentiment can lead to misinterpretation of price movements.",
      "quickNote": "Audit perpetual funding rates, on-chain flows, and wicks for comprehensive crypto performance evaluation.",
      "mentorText": "When auditing crypto performance, focus on the funding rates and on-chain flows. They provide critical insights into market sentiment that can guide your trading decisions.",
      "mentorAnalogy": "Think of crypto audits like a pilot's pre-flight checklist, ensuring all systems are functioning correctly before takeoff to avoid mid-flight issues."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "practice",
    "title": "Core Management Review 14 (Module 8.13 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C14 -->\n### Core Application: Advanced Crypto Audit Techniques\nThis practice card focuses on applying advanced concepts from crypto performance and on-chain audits to real-world trading scenarios. Evaluate the implications of your findings on trading decisions.\n\n* **Scenario Analysis**: Given a perpetual funding rate of 0.015% and a recent influx of 2,500 ETH to Kraken, determine the potential market impact. Consider how this might influence your trading strategy.\n* **Wick Evaluation**: Analyze a 12% wick observed on Bitfinex during a high-volume trading session. Assess whether this indicates a liquidity issue or a genuine price reversal opportunity.\n* **Flow Correlation**: Correlate on-chain flows with price movements. If 1,000 BTC flows out of exchanges while the price increases by 5%, what does this suggest about market sentiment?\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating potential outcomes based on specific market conditions."
        },
        {
          "term": "Wick Evaluation",
          "definition": "Assessing price spikes to determine their significance in market behavior."
        },
        {
          "term": "Flow Correlation",
          "definition": "Analyzing the relationship between asset flows and price movements."
        }
      ],
      "whyThisMatters": "Applying these techniques enhances decision-making and risk management in volatile crypto markets.",
      "realLifeExample": "In a recent analysis, a funding rate of 0.015% and a 2,500 ETH influx led to a strategic decision to short ETH, resulting in a profitable trade as the price corrected.",
      "commonMistake": "Overlooking the significance of exchange-specific wicks can lead to missed trading opportunities or unnecessary losses.",
      "quickNote": "Utilize scenario analysis and wick evaluation to refine your trading strategies.",
      "mentorText": "When faced with a funding rate spike, assess the on-chain flows and wicks. This will provide clarity on whether to adjust your positions or hold steady.",
      "mentorAnalogy": "Conducting these audits is akin to a surgeon reviewing a patient's history before an operation, ensuring all variables are accounted for to minimize risk."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a perpetual funding rate of 0.012% and a significant outflow of 3,000 BTC from exchanges, what trading action should you consider?",
      "options": [
        {
          "id": "0",
          "text": "Consider entering a long position, as this indicates bullish sentiment.",
          "isCorrect": false,
          "feedback": "This option overlooks the bearish implications of significant outflows."
        },
        {
          "id": "1",
          "text": "Evaluate the potential for a price drop and consider shorting.",
          "isCorrect": true,
          "feedback": "Correct. Significant outflows can indicate bearish sentiment, suggesting a potential price decline."
        },
        {
          "id": "2",
          "text": "Maintain current positions without changes.",
          "isCorrect": false,
          "feedback": "This option does not account for the implications of the funding rate and outflows."
        },
        {
          "id": "3",
          "text": "Increase leverage on long positions to capitalize on potential recovery.",
          "isCorrect": false,
          "feedback": "Increasing leverage in this scenario could amplify losses if the market declines."
        }
      ]
    },
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "summary",
    "title": "Core Management Review 15 (Module 8.13 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.13-core-C15 -->\n### Core Summary: Integrating Audit Insights\nThis summary card encapsulates the integration of audit insights into trading strategies, emphasizing the importance of continuous evaluation of crypto performance metrics.\n\n* **Continuous Monitoring**: Establish a routine for monitoring funding rates and on-chain flows. Regular checks can reveal emerging trends that inform trading decisions.\n* **Risk Assessment Framework**: Develop a framework to assess risks associated with exchange-specific wicks. Identify thresholds that trigger alerts for potential market manipulation or liquidity issues.\n* **Performance Feedback Loop**: Create a feedback loop to evaluate the effectiveness of trades based on audit insights. Analyze past trades to refine future strategies and improve overall performance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Monitoring",
          "definition": "Regularly tracking performance metrics to identify trends."
        },
        {
          "term": "Risk Assessment Framework",
          "definition": "A structured approach to evaluate potential risks in trading."
        },
        {
          "term": "Performance Feedback Loop",
          "definition": "A process for analyzing past trades to enhance future trading strategies."
        }
      ],
      "whyThisMatters": "Integrating audit insights into trading practices enhances adaptability and responsiveness to market changes.",
      "realLifeExample": "After establishing a continuous monitoring routine, a trader identified a pattern of exchange inflows preceding price drops, leading to timely short positions that capitalized on these trends.",
      "commonMistake": "Neglecting to integrate audit insights into trading strategies can lead to missed opportunities and increased risk exposure.",
      "quickNote": "Integrate audit insights into your trading strategy for improved adaptability.",
      "mentorText": "Always monitor funding rates and on-chain flows. They are your compass in navigating the volatile crypto landscape and should inform your trading decisions.",
      "mentorAnalogy": "Integrating audit insights is like a navigator adjusting a ship's course based on real-time weather data, ensuring safe passage through turbulent waters."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  }
];
