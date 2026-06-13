import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Portfolio Performance Scoring Overview",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C1 -->\n### Scoring Metrics: Crypto Portfolio Performance\nThe Lurnava Final Certification evaluates crypto portfolios based on specific performance metrics tailored to the volatile nature of cryptocurrencies. This card outlines the essential scoring components that contribute to portfolio evaluation.\n\n* **Risk-Adjusted Return**: Measure the portfolio's return relative to its risk, calculated using the Sharpe Ratio. A portfolio with a Sharpe Ratio above 1.0 indicates a favorable risk-return profile.\n* **Volatility Assessment**: Analyze the standard deviation of portfolio returns over a specified period. Portfolios with lower volatility are favored, indicating better risk management.\n* **Liquidity Metrics**: Evaluate the liquidity of assets within the portfolio, ensuring that at least 70% of holdings can be liquidated within 24 hours without significant price impact.",
    "visualKey": "cert-scorecard-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Understanding Perpetual Funding Rate Adjustments",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C2 -->\n### Funding Rate Adjustments: Impact on Portfolio Evaluation\nPerpetual funding rates are critical in assessing the cost of holding leveraged positions in crypto markets. This card explains how these adjustments influence the overall evaluation during certification.\n\n* **Funding Rate Calculation**: The funding rate is determined by the difference between the perpetual contract price and the spot price, adjusted every 8 hours. A positive funding rate indicates long positions pay shorts, impacting net returns.\n* **Impact on Profitability**: Frequent adjustments can erode profits in long positions during bullish trends. Traders must account for these costs when calculating net returns for certification.\n* **Risk Management Strategy**: Incorporate funding rate forecasts into portfolio strategies to mitigate potential losses. A well-structured strategy should include a buffer for funding costs in profit calculations.",
    "visualKey": "cert-scorecard-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Importance of Custody Checks in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C3 -->\n### Custody Checks: Ensuring Asset Security\nCustody checks are a fundamental aspect of the certification process, ensuring that digital assets are securely held and managed. This card highlights their significance in the evaluation framework.\n\n* **Asset Verification**: Conduct regular audits of digital asset holdings to confirm ownership and prevent discrepancies. This includes verifying wallet addresses and transaction histories.\n* **Security Protocols**: Implement multi-signature wallets and cold storage solutions to enhance security. Certification requires demonstrable adherence to industry best practices in asset custody.\n* **Regulatory Compliance**: Ensure all custody practices meet regulatory standards. Non-compliance can lead to disqualification from certification, emphasizing the need for robust custody measures.",
    "visualKey": "cert-scorecard-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Key Performance Metrics for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C4 -->\n### Performance Metrics: Evaluating Crypto Portfolios\nUnderstanding the key performance metrics is essential for effectively evaluating crypto portfolios in the certification process. This card details the metrics that impact scoring.\n\n* **Return on Investment (ROI)**: Calculate ROI by comparing the initial investment to the current value of the portfolio. A minimum ROI of 15% is typically required for certification eligibility.\n* **Drawdown Analysis**: Assess the maximum drawdown during the evaluation period. A drawdown exceeding 20% may lead to a negative impact on the overall score, indicating poor risk management.\n* **Diversification Ratio**: Evaluate the diversification of the portfolio across different asset classes. A well-diversified portfolio reduces risk and is favored in the scoring rubric.",
    "visualKey": "cert-scorecard-model",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Risk Management Practices for Crypto Traders",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C5 -->\n### Core Scenario: Risk Management in Crypto Trading\nEffective risk management is critical for crypto traders aiming to meet certification standards. This card details **the essential risk management practices that ensure sustainable trading**.\n\n* **Position Sizing Methodology**: Calculate position sizes based on a fixed percentage of total capital, typically 1-2%. For example, with a $10,000 account, risking 1% allows for a maximum position size of $100 per trade.\n* **Stop-Loss Implementation**: Establish stop-loss orders to limit potential losses. For instance, if entering a long position in BTC at $30,000, set a stop-loss at $29,000 to cap losses at approximately 3.33%.\n* **Risk-Reward Ratio Analysis**: Maintain a minimum risk-reward ratio of 1:2. If risking $100, ensure the target profit is at least $200, which aligns with certification metrics for consistent profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The method of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Proper risk management is a fundamental criterion in the certification evaluation process, impacting overall performance scores.",
      "realLifeExample": "A trader enters a long position in ETH at $2,000 with a stop-loss at $1,950, risking $50. With a target of $2,100, the risk-reward ratio is 1:2.",
      "commonMistake": "Failing to adjust position sizes according to market volatility can lead to excessive risk exposure.",
      "quickNote": "Effective risk management is essential for certification success.",
      "mentorText": "You must treat each trade as a calculated risk. If you're not managing your exposure, you're gambling, not trading. Stick to your position sizing rules.",
      "mentorAnalogy": "Think of risk management like an aerospace engineer calculating load limits for an aircraft. Each trade must adhere to strict parameters to ensure safety and performance."
    },
    "taskData": null,
    "visualKey": "cert-scorecard-model"
  },
  {
    "type": "concept",
    "title": "Evaluating Trading Strategies in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C6 -->\n### Core Scenario: Strategy Evaluation Metrics\nEvaluating trading strategies is essential for certification in crypto trading. This card outlines **the metrics used to assess strategy effectiveness**.\n\n* **Win Rate Calculation**: Determine the percentage of winning trades against total trades. A strategy with 60 wins out of 100 trades has a win rate of 60%, which is a critical metric for certification.\n* **Average Gain vs. Average Loss**: Calculate the average profit from winning trades and the average loss from losing trades. For example, if the average gain is $150 and the average loss is $100, the strategy is favorable.\n* **Maximum Drawdown Assessment**: Measure the largest peak-to-trough decline in portfolio value. A maximum drawdown of 15% indicates a need for strategy adjustment to meet certification standards.",
    "context": {
      "keyTerms": [
        {
          "term": "Win Rate",
          "definition": "The ratio of winning trades to total trades expressed as a percentage."
        },
        {
          "term": "Average Gain",
          "definition": "The mean profit from winning trades."
        },
        {
          "term": "Maximum Drawdown",
          "definition": "The maximum observed loss from a peak to a trough in the portfolio."
        }
      ],
      "whyThisMatters": "Understanding these evaluation metrics is crucial for demonstrating strategy effectiveness during the certification process.",
      "realLifeExample": "A trader analyzes a strategy with a win rate of 65%, an average gain of $200, and a maximum drawdown of 10%, indicating a robust trading approach.",
      "commonMistake": "Overlooking the importance of average gain versus average loss can lead to an inflated perception of strategy success.",
      "quickNote": "Metrics are the backbone of strategy evaluation for certification.",
      "mentorText": "You need to dissect your strategies with precision. If you’re not measuring win rates and drawdowns, you’re flying blind.",
      "mentorAnalogy": "Evaluating trading strategies is like a surgeon reviewing patient outcomes. Each metric informs the effectiveness of their techniques and decisions."
    },
    "taskData": null,
    "visualKey": "cert-scorecard-model"
  },
  {
    "type": "practice",
    "title": "Crypto Evaluation Metrics Application",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C7 -->\n### Core Scenario: Practical Evaluation of Crypto Strategies\nEngage in a simulated trading environment to apply evaluation metrics effectively. This practice scenario tests your ability to analyze performance based on established criteria.\n\n* **Scenario**: You have executed 50 trades in a simulated environment. Out of these, 30 were profitable, and 20 were losses. The average gain per winning trade was $120, while the average loss per losing trade was $80. The maximum drawdown observed was 12%.\n* **Task**: Calculate the win rate, average gain versus average loss, and determine if the strategy meets the certification standards.\n\n* **Win Rate Calculation**: 30/50 = 60%.\n* **Average Gain vs. Average Loss**: $120 vs. $80.\n* **Maximum Drawdown**: 12%.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading Environment",
          "definition": "A practice platform that mimics real trading conditions without financial risk."
        },
        {
          "term": "Performance Criteria",
          "definition": "Standards used to evaluate the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Applying these metrics in practice solidifies understanding and prepares candidates for the certification evaluation.",
      "realLifeExample": "In a simulated environment, a trader evaluates their performance metrics, confirming a win rate of 60% and a favorable risk-reward ratio.",
      "commonMistake": "Failing to accurately calculate metrics can lead to misinterpretation of strategy effectiveness.",
      "quickNote": "Practical application of metrics is vital for certification readiness.",
      "mentorText": "You need to analyze your trades critically. If you can't calculate your metrics accurately, you won't pass the certification.",
      "mentorAnalogy": "Think of this practice like a pilot in a flight simulator, where every maneuver is assessed against strict performance standards."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Based on the provided trading scenario, what is the win rate of the strategy?",
      "options": [
        {
          "id": "0",
          "text": "60%",
          "isCorrect": true,
          "feedback": "Correct. The win rate is calculated as 30 profitable trades out of 50 total trades."
        },
        {
          "id": "1",
          "text": "50%",
          "isCorrect": false,
          "feedback": "Incorrect. The win rate is based on the number of winning trades divided by total trades."
        },
        {
          "id": "2",
          "text": "70%",
          "isCorrect": false,
          "feedback": "Incorrect. The win rate is not based on the number of trades but rather the ratio of winning trades."
        },
        {
          "id": "3",
          "text": "40%",
          "isCorrect": false,
          "feedback": "Incorrect. The win rate must reflect the actual number of winning trades."
        }
      ]
    },
    "visualKey": "cert-scorecard-model"
  },
  {
    "type": "summary",
    "title": "Key Aspects of Crypto Portfolio Scoring",
    "label": "Crypto Track",
    "body": "<!-- M9.1-crypto-C8 -->\n### Core Scenario: Summary of Crypto Portfolio Performance\nUnderstanding crypto portfolio scoring is essential for certification. This card summarizes **the critical aspects that influence performance scores**.\n\n* **Diversification Metrics**: Assess the variety of assets within the portfolio. A well-diversified portfolio reduces risk and enhances scoring potential.\n* **Performance Relative to Benchmark**: Compare portfolio returns against a relevant benchmark, such as Bitcoin's performance over the same period. A portfolio outperforming Bitcoin indicates effective strategy execution.\n* **Consistency of Returns**: Evaluate the stability of returns over time. A portfolio showing consistent monthly gains, such as 5% per month over six months, is viewed favorably during certification assessments.",
    "context": {
      "keyTerms": [
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        },
        {
          "term": "Benchmark",
          "definition": "A standard against which the performance of a portfolio can be measured."
        },
        {
          "term": "Consistency of Returns",
          "definition": "The reliability of a portfolio to generate stable returns over time."
        }
      ],
      "whyThisMatters": "Portfolio scoring is a decisive factor in the certification evaluation, influencing overall performance ratings.",
      "realLifeExample": "A trader's portfolio consists of Bitcoin, Ethereum, and Litecoin, showing a 10% return compared to Bitcoin's 5% return over the same period, indicating effective diversification and strategy.",
      "commonMistake": "Neglecting to compare portfolio performance to benchmarks can lead to an inaccurate assessment of effectiveness.",
      "quickNote": "Portfolio scoring metrics are critical for certification success.",
      "mentorText": "Your portfolio must not only perform well but also stand up against benchmarks. If you're not measuring against Bitcoin, you're missing the mark.",
      "mentorAnalogy": "Think of portfolio scoring like a chef's dish being judged against Michelin standards. It must not only taste good but also outperform the competition."
    },
    "taskData": null,
    "visualKey": "cert-scorecard-model"
  }
];
