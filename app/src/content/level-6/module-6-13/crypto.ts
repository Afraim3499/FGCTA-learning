import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot-Perp Funding Rate Limits",
    "label": "Crypto Track",
    "body": "### Core Scenario: Spot-Perp Funding Rate Limits\nSpot-perpetual funding rate limits are essential for managing execution risks in crypto trading. This card outlines **how to assess funding rate limits to align spot and perpetual positions**.\n\n* **Funding Rate Calculation**: Funding rates are determined by the difference in price between the spot market and perpetual contracts, impacting trader costs. Ensure the funding rate does not exceed 0.1% to maintain cost efficiency.\n* **Risk Management Thresholds**: Establish thresholds for acceptable funding rates based on historical volatility. A funding rate exceeding 0.2% during high volatility sessions may indicate potential liquidation risks.\n* **Execution Timing**: Monitor funding rate changes closely, especially during major news events. Execute trades when the funding rate is stable to avoid unexpected costs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a perpetual contract, influenced by the price difference between spot and perpetual markets."
        }
      ],
      "whyThisMatters": "Understanding funding rate limits is crucial for minimizing execution costs and avoiding unexpected liquidations.",
      "realLifeExample": "On October 15, 2023, the BTC perpetual funding rate spiked to 0.25% during a market correction, leading to increased liquidation risks for long positions.",
      "commonMistake": "Traders often overlook funding rate changes during high volatility, leading to unexpected costs.",
      "quickNote": "Monitor funding rates closely to align spot and perpetual positions effectively.",
      "mentorText": "When assessing your trades, always check the funding rates. If they spike unexpectedly, it could cost you more than you planned. Stay ahead of the curve.",
      "mentorAnalogy": "Think of funding rates like fuel prices for a flight. If prices spike unexpectedly, your flight plan needs adjustment to avoid running out of fuel mid-air."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Exchange Volume Checks for Execution",
    "label": "Crypto Track",
    "body": "### Core Scenario: Exchange Volume Checks\nPerforming exchange volume checks is critical for ensuring liquidity during trade execution. This card teaches **how to assess exchange volume to confirm sufficient liquidity**.\n\n* **Volume Thresholds**: Establish minimum volume thresholds based on the asset's average daily trading volume. For instance, ensure that the 24-hour volume exceeds $10 million for major altcoins.\n* **Order Book Depth Analysis**: Analyze the order book depth to gauge liquidity. A healthy order book should show at least 5% of the total volume available within the top three price levels.\n* **Market Impact Assessment**: Evaluate potential market impact before executing large trades. For example, if your order size is 5% of the average daily volume, anticipate slippage and adjust your execution strategy accordingly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "The amount of buy and sell orders at various price levels in a market."
        }
      ],
      "whyThisMatters": "Adequate liquidity is essential to minimize slippage and ensure efficient trade execution.",
      "realLifeExample": "On November 1, 2023, the ETH market showed a 24-hour volume of $12 million, confirming sufficient liquidity for a planned $500,000 trade.",
      "commonMistake": "Failing to check volume can lead to executing trades in illiquid markets, resulting in significant slippage.",
      "quickNote": "Always verify exchange volume to ensure liquidity before executing trades.",
      "mentorText": "Before you hit that execute button, check the volume. If it’s low, you might be setting yourself up for a rough ride. Don’t take unnecessary risks.",
      "mentorAnalogy": "Consider exchange volume checks like checking the water level before diving into a pool. Insufficient water can lead to a painful landing."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Evaluating Funding Rate Trends",
    "label": "Crypto Track",
    "body": "### Core Scenario: Evaluating Funding Rate Trends\nEvaluating funding rate trends is vital for informed trade execution. This card focuses on **how to analyze funding rate trends to enhance your pre-execution checklist**.\n\n* **Trend Analysis**: Use historical data to identify funding rate trends over the past 30 days. A consistent upward trend may indicate increasing costs for holding long positions.\n* **Correlation with Price Movements**: Assess how funding rates correlate with price movements. For example, if funding rates rise concurrently with price increases, it may signal over-leverage in the market.\n* **Adjusting Trade Strategies**: Adapt your trading strategy based on funding rate trends. If the funding rate is rising, consider reducing position sizes or implementing tighter stop-loss orders to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Analysis",
          "definition": "The process of analyzing historical data to identify patterns in funding rates."
        }
      ],
      "whyThisMatters": "Funding rate trends provide insights into market sentiment and potential risks, allowing for better-informed trading decisions.",
      "realLifeExample": "In late September 2023, BTC funding rates consistently increased alongside price rallies, indicating potential over-leverage, prompting traders to adjust their positions.",
      "commonMistake": "Ignoring funding rate trends can lead to unexpected costs and increased liquidation risks.",
      "quickNote": "Analyze funding rate trends to inform your trade execution strategy effectively.",
      "mentorText": "Look at the funding rates over time. If they’re climbing, it’s a red flag. Adjust your strategy accordingly to avoid getting caught in a squeeze.",
      "mentorAnalogy": "Evaluating funding rate trends is like monitoring weather patterns before a flight. Ignoring storm warnings can lead to turbulence and potential disaster."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Identifying Funding Rate Anomalies",
    "label": "Crypto Track",
    "body": "### Core Scenario: Identifying Funding Rate Anomalies\nIdentifying anomalies in funding rates is essential for refining your pre-execution checklist. This card explains **how to spot and respond to funding rate anomalies**.\n\n* **Anomaly Detection**: Use statistical methods to identify funding rate anomalies, such as a sudden spike exceeding 0.3% compared to the average. This could indicate market manipulation or extreme sentiment shifts.\n* **Impact Assessment**: Evaluate the potential impact of identified anomalies on your positions. For example, if a funding rate anomaly occurs during a major news release, anticipate increased volatility and adjust your risk management accordingly.\n* **Response Strategies**: Develop response strategies for anomalies, such as tightening stop-loss levels or reducing position sizes when anomalies are detected to mitigate risk exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Anomaly Detection",
          "definition": "The process of identifying unusual patterns in funding rates that deviate from historical norms."
        }
      ],
      "whyThisMatters": "Recognizing funding rate anomalies allows traders to adjust their strategies proactively, minimizing potential losses.",
      "realLifeExample": "On October 20, 2023, a sudden funding rate spike to 0.35% during a regulatory announcement led traders to adjust their positions to avoid liquidation risks.",
      "commonMistake": "Failing to recognize anomalies can result in significant losses during volatile market conditions.",
      "quickNote": "Stay vigilant for funding rate anomalies to refine your execution strategy.",
      "mentorText": "Keep an eye out for any unusual spikes in funding rates. They’re often signals of underlying market issues. Adjust your strategy to stay safe.",
      "mentorAnalogy": "Identifying funding rate anomalies is like a doctor spotting irregularities in a patient’s vital signs. Early detection can prevent serious complications."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Assessing Exchange Liquidity Conditions",
    "label": "Crypto Track",
    "body": "### Core Scenario: Exchange Liquidity Assessment\nEvaluating exchange liquidity conditions is essential for understanding funding rates and potential market impact. This card focuses on **how to analyze liquidity metrics before executing trades**.\n\n* **Liquidity Metrics**: Assess the order book depth and spread on exchanges like Binance or Coinbase, noting that a tighter spread often indicates higher liquidity, which can lead to lower funding rates.\n* **Impact on Funding Rates**: Understand that low liquidity can result in higher funding rates due to increased volatility; for instance, if BTC liquidity drops to $5 million, funding rates may spike to 0.15% over the next 8 hours.\n* **Market Sentiment Indicators**: Monitor the volume of open interest in perpetual contracts; a sudden increase in open interest alongside low liquidity can signal potential funding rate adjustments, impacting your checklist decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Metrics",
          "definition": "Quantitative measures of the ease with which an asset can be bought or sold without affecting its price."
        },
        {
          "term": "Funding Rates",
          "definition": "The cost of holding a leveraged position in perpetual contracts, influenced by market liquidity."
        }
      ],
      "whyThisMatters": "Understanding liquidity conditions allows traders to anticipate funding rate changes and adjust their strategies accordingly.",
      "realLifeExample": "On a day when ETH liquidity on Binance drops to $3 million, the funding rate increased to 0.2%, impacting long positions significantly during the next funding interval.",
      "commonMistake": "Traders often overlook liquidity assessments, leading to unexpected funding rate spikes that can erode profits.",
      "quickNote": "Liquidity conditions directly influence funding rates and should be assessed rigorously.",
      "mentorText": "Before executing any trades, ensure you assess the liquidity conditions. A sudden drop in liquidity can lead to unexpected costs in funding rates, which you must factor into your planning.",
      "mentorAnalogy": "Think of liquidity like the fuel in an aircraft; without sufficient fuel, the plane cannot take off smoothly. Similarly, without adequate liquidity, your trades may face turbulence in funding costs."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Integrating Technical Analysis for Funding Rates",
    "label": "Crypto Track",
    "body": "### Core Scenario: Technical Analysis Integration\nIncorporating technical analysis into funding rate assessments enhances the robustness of your pre-execution checklist. This card teaches **how to apply technical indicators to evaluate funding rates**.\n\n* **Key Indicators**: Utilize indicators such as the Relative Strength Index (RSI) and Moving Averages (MA) to gauge market momentum; for example, if BTC's 14-day RSI is above 70, it may indicate overbought conditions, potentially leading to a funding rate increase.\n* **Volume Analysis**: Analyze volume spikes in conjunction with price movements; a sudden increase in trading volume alongside a price drop could indicate a liquidity crunch, affecting funding rates.\n* **Chart Patterns**: Identify chart patterns like head and shoulders or triangles that may signal reversals; these patterns can provide insights into potential funding rate shifts, allowing for preemptive adjustments in your checklist.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Quantitative tools used to analyze market trends and price movements."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to assess the strength of price movements."
        }
      ],
      "whyThisMatters": "Integrating technical analysis into funding rate assessments allows for more informed decision-making and risk management.",
      "realLifeExample": "When analyzing LTC, a bearish divergence on the RSI was observed while funding rates were at 0.1%. This indicated a potential reversal, prompting a reassessment of long positions before the next funding cycle.",
      "commonMistake": "Failing to incorporate technical analysis can lead to missed signals that affect funding rate expectations.",
      "quickNote": "Technical analysis enhances funding rate assessments, providing a clearer trading picture.",
      "mentorText": "Always integrate technical analysis into your funding rate evaluations. It’s not just about the numbers; the charts tell a story that can guide your checklist decisions.",
      "mentorAnalogy": "Consider technical analysis like a flight simulator; it prepares you for various scenarios, helping you anticipate turbulence before it occurs."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "practice",
    "title": "Simulating Funding Rate Scenarios",
    "label": "Crypto Track",
    "body": "### Core Scenario: Funding Rate Simulation\nEngaging in simulated scenarios allows traders to practice applying their pre-execution checklist focused on funding rates and exchange volume. This card emphasizes **the importance of scenario-based practice**.\n\n* **Scenario Setup**: Create hypothetical market conditions where BTC experiences a 10% price drop with a corresponding increase in funding rates to 0.25%. Assess how your checklist would respond to these changes.\n* **Volume Considerations**: Include variables such as sudden volume spikes; for instance, if ETH trading volume surges to $10 million while prices remain stable, evaluate how this affects your funding rate expectations.\n* **Checklist Application**: Use your pre-execution checklist to determine entry and exit points based on the simulated funding rate changes, ensuring that your strategy remains adaptable to real-time market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "The process of creating hypothetical market conditions to practice trading strategies."
        },
        {
          "term": "Checklist Application",
          "definition": "The act of applying a structured list of criteria to evaluate trading opportunities."
        }
      ],
      "whyThisMatters": "Simulating funding rate scenarios prepares traders for real market fluctuations, enhancing their responsiveness.",
      "realLifeExample": "In a simulation, BTC drops 10% while funding rates rise to 0.25%. A trader using a checklist identifies this as a potential short opportunity, successfully executing a trade that capitalizes on the volatility.",
      "commonMistake": "Traders often neglect to simulate adverse conditions, leading to unpreparedness in real market scenarios.",
      "quickNote": "Simulated scenarios enhance readiness for real market conditions, refining checklist application.",
      "mentorText": "Practice makes perfect. Simulate various funding rate scenarios to ensure your checklist is robust and ready for any market condition.",
      "mentorAnalogy": "Think of scenario simulations like a fire drill; they prepare you for emergencies, ensuring you know how to respond effectively when the situation arises."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario where BTC drops 10% and funding rates rise to 0.25%, what should your checklist prioritize?",
      "options": [
        {
          "id": "0",
          "text": "Reassess long positions and consider shorting BTC.",
          "isCorrect": true,
          "feedback": "Correct. The checklist should prioritize reassessing long positions in light of increased funding rates."
        },
        {
          "id": "1",
          "text": "Ignore the funding rate changes and hold positions.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring funding rate changes can lead to increased costs on held positions."
        },
        {
          "id": "2",
          "text": "Increase leverage on long positions.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing leverage in a declining market can amplify losses."
        },
        {
          "id": "3",
          "text": "Liquidate all positions immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. A hasty liquidation may not consider potential recovery or market dynamics."
        }
      ]
    },
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "summary",
    "title": "Reviewing Crypto-Specific Concepts",
    "label": "Crypto Track",
    "body": "### Core Scenario: Concept Review\nThis card summarizes key concepts related to funding rates and exchange volume checks, reinforcing the importance of a thorough pre-execution checklist. Focus on **the integration of liquidity and technical analysis in funding rate assessments**.\n\n* **Liquidity and Funding Rates**: Recognize that liquidity directly impacts funding rates; low liquidity can lead to higher rates, necessitating careful assessment before trade execution.\n* **Technical Analysis Role**: Understand how technical indicators inform funding rate expectations, allowing for strategic adjustments in your checklist based on market conditions.\n* **Checklist Importance**: Emphasize the necessity of a well-structured pre-execution checklist that incorporates both liquidity conditions and technical analysis to enhance trading outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Pre-Execution Checklist",
          "definition": "A structured list of criteria to evaluate before executing trades."
        },
        {
          "term": "Market Conditions",
          "definition": "The current state of the market, including liquidity, volume, and price movements."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts ensures traders are equipped to navigate the complexities of crypto markets effectively.",
      "realLifeExample": "In reviewing a checklist, a trader identifies that low liquidity in XRP leads to a funding rate spike, prompting a strategic exit from long positions before the next funding cycle.",
      "commonMistake": "Traders often overlook the interplay between liquidity and technical analysis, leading to poorly informed trading decisions.",
      "quickNote": "A thorough checklist integrates liquidity and technical analysis for effective trading.",
      "mentorText": "Review these concepts regularly. A well-informed checklist is your best defense against unexpected market shifts.",
      "mentorAnalogy": "Think of your checklist as a pilot's pre-flight checklist; it ensures all systems are go before takeoff, minimizing risks during the flight."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  }
];
