import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Auditing Altcoin Strategy Drift Amid Bitcoin Dominance Shifts",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C1 -->\n### Core Scenario: Altcoin Strategy Drift Audit\nAuditing altcoin strategies is essential during periods of fluctuating Bitcoin dominance, as it can significantly impact performance metrics. This card outlines **how to systematically assess altcoin strategies for performance drift**.\n\n* **Dominance Threshold Analysis**: Monitor Bitcoin dominance levels; a shift above 60% often indicates a risk-off sentiment that can adversely affect altcoin performance. Adjust strategy parameters accordingly when dominance exceeds this threshold.\n* **Performance Benchmarking**: Compare altcoin returns against Bitcoin's performance over the same period. A divergence of more than 5% in returns may signal a potential drift in strategy effectiveness.\n* **Market Beta Assessment**: Calculate the beta of altcoin strategies relative to Bitcoin. A beta greater than 1 during high volatility periods suggests increased risk exposure, necessitating a review of the strategy's robustness.",
    "context": {
      "keyTerms": [
        {
          "term": "Bitcoin Dominance",
          "definition": "The percentage of Bitcoin's market capitalization relative to the total cryptocurrency market."
        }
      ],
      "whyThisMatters": "Understanding performance drift in altcoin strategies during Bitcoin dominance shifts is critical for maintaining a competitive edge in the crypto market.",
      "realLifeExample": "During the recent surge in Bitcoin dominance from 55% to 65%, the altcoin strategy for Ethereum (ETH) underperformed by 8%, prompting a strategy audit.",
      "commonMistake": "Failing to adjust altcoin strategies in response to significant changes in Bitcoin dominance can lead to substantial underperformance.",
      "quickNote": "Monitor Bitcoin dominance to ensure altcoin strategies remain aligned with market conditions.",
      "mentorText": "When Bitcoin dominance shifts, it’s like a tide that can lift or sink your altcoin strategies. You must audit your positions to ensure they’re not caught off guard.",
      "mentorAnalogy": "Think of your altcoin strategy as a ship navigating through changing tides. Just as a captain adjusts sails based on wind direction, you must adjust strategies based on Bitcoin dominance."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Understanding Bitcoin Dominance and Its Impact",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C2 -->\n### Core Scenario: Bitcoin Dominance Dynamics\nBitcoin dominance serves as a crucial indicator of market sentiment and can significantly influence altcoin performance. This card explains **how to interpret Bitcoin dominance and its implications for altcoin strategies**.\n\n* **Market Sentiment Indicator**: A rising Bitcoin dominance typically indicates a flight to safety among investors, often leading to reduced capital flow into altcoins. Monitor dominance levels to gauge market sentiment.\n* **Correlation with Altcoin Performance**: Analyze historical data; when Bitcoin dominance rises above 60%, altcoins tend to underperform. This correlation can guide strategy adjustments.\n* **Strategic Reallocation**: During periods of increasing dominance, consider reallocating capital from altcoins to Bitcoin or stablecoins to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Recognizing the impact of Bitcoin dominance on altcoin strategies allows traders to make informed decisions and adjust their portfolios proactively.",
      "realLifeExample": "In early 2023, Bitcoin dominance rose from 50% to 62%, leading to a 15% decline in the average performance of top 10 altcoins over the same period.",
      "commonMistake": "Ignoring Bitcoin dominance trends can result in significant losses during market shifts, as altcoin strategies may not perform as expected.",
      "quickNote": "Bitcoin dominance is a key metric for assessing altcoin strategy viability.",
      "mentorText": "Think of Bitcoin dominance as the weather forecast for your altcoin strategies. If the forecast predicts storms, you need to prepare your portfolio accordingly.",
      "mentorAnalogy": "Just as a pilot checks weather conditions before takeoff, you must assess Bitcoin dominance to ensure your altcoin strategies are on a safe flight path."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Evaluating Altcoin Performance Metrics",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C3 -->\n### Core Scenario: Performance Metrics Evaluation\nEvaluating the performance metrics of altcoin strategies is essential to detect signs of drift resulting from market changes. This card outlines **the key metrics to monitor for effective performance evaluation**.\n\n* **Return on Investment (ROI)**: Calculate the ROI for each altcoin strategy over different time frames. A declining ROI trend over three consecutive months may indicate performance drift.\n* **Sharpe Ratio Analysis**: Assess the Sharpe ratio to evaluate risk-adjusted returns. A ratio below 1.0 suggests that the strategy may not be compensating adequately for the risk taken.\n* **Drawdown Monitoring**: Track maximum drawdown levels; a drawdown exceeding 20% can signal a misalignment with market conditions, warranting a strategy review.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, calculated as the average return earned in excess of the risk-free rate per unit of volatility."
        }
      ],
      "whyThisMatters": "Regular evaluation of performance metrics helps identify potential drifts in strategies, allowing for timely adjustments to maintain effectiveness.",
      "realLifeExample": "An altcoin strategy for Cardano (ADA) showed a declining ROI from 12% to 3% over four months, alongside a Sharpe ratio drop from 1.5 to 0.8, indicating a need for reevaluation.",
      "commonMistake": "Overlooking key performance metrics can lead to continued losses without understanding the underlying issues affecting strategy performance.",
      "quickNote": "Consistently evaluate performance metrics to detect and address potential strategy drift.",
      "mentorText": "If your altcoin strategy metrics start to decline, it’s like a warning light on your dashboard. Don’t ignore it; take action before it’s too late.",
      "mentorAnalogy": "Just as a surgeon monitors vital signs during an operation, you must keep a close watch on your altcoin performance metrics to ensure everything is functioning correctly."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Market Correlation Analysis for Altcoins",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C4 -->\n### Core Scenario: Correlation Analysis\nAnalyzing market correlations between Bitcoin and altcoins is vital for identifying potential performance drift. This card details **how to conduct correlation analysis effectively**.\n\n* **Correlation Coefficient Calculation**: Use statistical tools to calculate the correlation coefficient between Bitcoin and selected altcoins. A coefficient above 0.7 indicates a strong positive correlation, suggesting that altcoin performance may closely follow Bitcoin trends.\n* **Divergence Identification**: Monitor periods where altcoin performance diverges from Bitcoin trends. A significant divergence (greater than 10%) may indicate a potential drift in the altcoin strategy that requires investigation.\n* **Risk Management Adjustments**: Based on correlation analysis, adjust risk management strategies. If altcoins show increasing divergence from Bitcoin, consider reducing exposure to those assets.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the strength and direction of a relationship between two variables."
        }
      ],
      "whyThisMatters": "Understanding market correlations helps traders anticipate altcoin performance and adjust strategies to mitigate risks associated with drift.",
      "realLifeExample": "In Q2 2023, the correlation coefficient between Bitcoin and Litecoin (LTC) dropped from 0.85 to 0.55, indicating a divergence that warranted a review of the LTC strategy.",
      "commonMistake": "Failing to analyze correlations can lead to unexpected losses, as altcoins may not behave as anticipated relative to Bitcoin movements.",
      "quickNote": "Conduct correlation analysis regularly to stay ahead of potential performance drift.",
      "mentorText": "If your altcoins start to behave differently than Bitcoin, it’s like a car veering off the road. You need to steer back on track before it’s too late.",
      "mentorAnalogy": "Just as a navigator checks the compass to ensure the ship stays on course, you must analyze market correlations to keep your altcoin strategies aligned with Bitcoin."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Identifying Risk Factors in Altcoin Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C5 -->\n### Core Scenario: Risk Factors in Altcoin Strategies\nPerformance drift in altcoin strategies can be exacerbated by shifts in Bitcoin dominance. This card details **how to identify key risk factors that contribute to this phenomenon**.\n\n* **Market Correlation Analysis**: Monitor the correlation between altcoins and Bitcoin. A significant increase in correlation during Bitcoin dominance shifts indicates heightened risk for altcoin strategies, necessitating immediate review.\n* **Liquidity Assessment**: Evaluate the liquidity of altcoins in your portfolio. Low liquidity can amplify volatility and lead to slippage, which can distort performance metrics during Bitcoin price fluctuations.\n* **Sentiment Tracking**: Utilize sentiment analysis tools to gauge market mood. A shift in sentiment towards Bitcoin can lead to capital flight from altcoins, impacting their performance and increasing the risk of drift.",
    "context": {
      "keyTerms": [
        {
          "term": "Bitcoin Dominance",
          "definition": "The percentage of Bitcoin's market capitalization relative to the total cryptocurrency market."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Identifying these risk factors allows traders to proactively adjust their strategies before significant performance drift occurs.",
      "realLifeExample": "During a Bitcoin rally from $30,000 to $40,000, the correlation of Ethereum with Bitcoin rose from 0.5 to 0.85, indicating a potential risk for altcoin strategies.",
      "commonMistake": "Failing to reassess altcoin exposure during periods of rising Bitcoin dominance can lead to unexpected losses.",
      "quickNote": "Monitor correlation and liquidity to identify risks in altcoin strategies.",
      "mentorText": "When Bitcoin starts to dominate the market, you must scrutinize your altcoin positions. If they're moving in lockstep with Bitcoin, it’s time to reassess your strategy.",
      "mentorAnalogy": "Think of your altcoin portfolio like a fleet of ships. If the flagship (Bitcoin) starts to sink, you need to know which ships are at risk of capsizing."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Corrective Measures for Altcoin Drift",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C6 -->\n### Core Scenario: Implementing Corrective Measures\nWhen performance drift is detected in altcoin strategies, corrective measures must be implemented promptly. This card outlines **specific actions to mitigate drift and realign performance**.\n\n* **Rebalancing Portfolio**: Adjust the weight of altcoins in your portfolio based on their recent performance metrics. If an altcoin has underperformed relative to Bitcoin, consider reducing its allocation to minimize risk.\n* **Stop-Loss Adjustments**: Set tighter stop-loss orders for underperforming altcoins. This can help limit losses and prevent further drift from your performance benchmarks.\n* **Strategy Review Sessions**: Conduct regular strategy review sessions to assess the effectiveness of your altcoin strategies. Document performance metrics and adjust your approach based on empirical data rather than emotions.",
    "context": {
      "keyTerms": [
        {
          "term": "Rebalancing",
          "definition": "The process of realigning the proportions of assets in a portfolio."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell an asset when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Implementing corrective measures ensures that your trading strategy remains aligned with market conditions and performance expectations.",
      "realLifeExample": "After noticing a 15% drop in a specific altcoin's performance over two weeks while Bitcoin surged, a trader rebalanced their portfolio, reducing the altcoin's weight from 20% to 10%.",
      "commonMistake": "Delaying corrective actions can exacerbate losses and lead to a larger performance gap.",
      "quickNote": "Act quickly with rebalancing and stop-loss adjustments to counter performance drift.",
      "mentorText": "If you see your altcoin strategy drifting, don’t hesitate to make adjustments. Rebalance and tighten your stop-losses to protect your capital.",
      "mentorAnalogy": "Correcting performance drift is like recalibrating an aircraft's instruments. If you’re off course, immediate adjustments are crucial to reach your destination safely."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Altcoin Drift Monitoring",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C7 -->\n### Core Scenario: Engaging in Practical Exercises\nTo solidify understanding of performance drift monitoring, practical exercises are essential. This card provides **real-world scenarios to apply auditing techniques**.\n\n* **Scenario Analysis**: Review a simulated portfolio of altcoins during a Bitcoin price surge. Identify which altcoins exhibit significant performance drift and suggest corrective measures.\n* **Data Interpretation**: Analyze historical performance data of selected altcoins against Bitcoin dominance shifts. Determine correlation coefficients and assess liquidity metrics to identify risk factors.\n* **Strategy Simulation**: Utilize trading simulation software to practice rebalancing a portfolio in response to performance drift. Track the results of your adjustments over a simulated month to evaluate effectiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation Software",
          "definition": "Tools that allow traders to practice trading strategies in a risk-free environment."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of a trading strategy."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises reinforces the application of theoretical concepts in real-world scenarios, enhancing skill development.",
      "realLifeExample": "In a trading simulation, a trader identifies that an altcoin's performance dropped by 20% during a Bitcoin rally, prompting a portfolio rebalance that improved overall returns by 5% in the simulation.",
      "commonMistake": "Relying solely on theoretical knowledge without practical application can hinder the ability to respond effectively to real market conditions.",
      "quickNote": "Practice with simulations to enhance your skills in monitoring performance drift.",
      "mentorText": "You need to practice these concepts in a simulated environment. The more scenarios you analyze, the better prepared you’ll be for real trades.",
      "mentorAnalogy": "Practicing performance drift monitoring is like a pilot training in a flight simulator. You need to experience various scenarios to handle them effectively in the real world."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You notice that an altcoin has underperformed by 25% during a Bitcoin rally. What is your first corrective action?",
      "options": [
        {
          "id": "0",
          "text": "Increase the allocation to the underperforming altcoin.",
          "isCorrect": false,
          "feedback": "Increasing allocation to an underperforming asset can exacerbate losses."
        },
        {
          "id": "1",
          "text": "Conduct a liquidity assessment of the altcoin.",
          "isCorrect": true,
          "feedback": "Assessing liquidity is crucial to understanding the risks associated with the altcoin."
        },
        {
          "id": "2",
          "text": "Ignore the performance drift and maintain the current strategy.",
          "isCorrect": false,
          "feedback": "Ignoring performance drift can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Set a wider stop-loss for the altcoin.",
          "isCorrect": false,
          "feedback": "Wider stop-losses can increase potential losses; tighter stop-losses are more appropriate."
        }
      ]
    },
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "summary",
    "title": "Summary of Altcoin Performance Drift Monitoring Techniques",
    "label": "Crypto Track",
    "body": "<!-- M9.10-crypto-C8 -->\n### Core Scenario: Summary of Key Techniques\nMonitoring performance drift in altcoin strategies requires a systematic approach. This card summarizes **the essential techniques for effective drift monitoring**.\n\n* **Regular Performance Audits**: Schedule consistent reviews of altcoin performance metrics against Bitcoin dominance shifts to identify early signs of drift.\n* **Risk Factor Identification**: Focus on correlation, liquidity, and sentiment as primary indicators of potential drift. Understanding these factors is critical for timely adjustments.\n* **Implementation of Corrective Actions**: Develop a clear protocol for rebalancing, adjusting stop-losses, and conducting strategy reviews to mitigate drift effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Audit",
          "definition": "A systematic review of a trading strategy's performance against established benchmarks."
        },
        {
          "term": "Corrective Action Protocol",
          "definition": "A predefined set of steps to take when performance drift is detected."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these techniques equips traders to maintain strategy effectiveness in changing market conditions.",
      "realLifeExample": "A trader conducts monthly performance audits and identifies a consistent 10% drift in altcoin strategies, allowing for timely rebalancing and improved overall returns.",
      "commonMistake": "Neglecting to summarize and document techniques can lead to inconsistent application of performance monitoring strategies.",
      "quickNote": "Regular audits and clear corrective actions are vital for managing performance drift.",
      "mentorText": "Summarize your findings regularly. Knowing your key techniques will help you stay ahead of performance drift.",
      "mentorAnalogy": "Think of performance drift monitoring as a mechanic regularly checking the engine of a car. Consistent checks prevent breakdowns and ensure optimal performance."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  }
];
