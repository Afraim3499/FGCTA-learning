import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Custody Verification Processes",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C1 -->\n### Core Scenario: Crypto Custody Verification\nVerifying crypto custody is essential for ensuring the security of digital assets, particularly when preparing for the Final Certification Gate. This card outlines **the critical processes for validating custody arrangements**.\n\n* **Multi-Signature Wallets**: Ensure that custody solutions utilize multi-signature wallets, requiring multiple private keys for transaction approval. This adds a layer of security, mitigating risks associated with single-point failures.\n* **Cold Storage Protocols**: Confirm that assets are stored in cold wallets, disconnected from the internet. This minimizes exposure to hacking attempts, safeguarding assets during the certification process.\n* **Regular Audits**: Implement a schedule for regular third-party audits of custody solutions. These audits should verify the existence and security of the assets, providing transparency and confidence before the certification assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Signature Wallets",
          "definition": "Wallets that require multiple private keys to authorize a transaction."
        },
        {
          "term": "Cold Storage",
          "definition": "Storing digital assets offline to protect against online threats."
        },
        {
          "term": "Third-Party Audit",
          "definition": "An independent review of custody solutions to ensure compliance and security."
        }
      ],
      "whyThisMatters": "Effective custody verification is critical to prevent asset loss and ensure compliance during the certification process.",
      "realLifeExample": "A crypto firm verifies its custody solution by employing a multi-signature wallet with three keys, ensuring that at least two keys are required for any transaction, while also storing 80% of its assets in cold storage.",
      "commonMistake": "Failing to implement multi-signature wallets, which exposes assets to higher risks of unauthorized access.",
      "quickNote": "Utilize multi-signature wallets and cold storage for secure custody verification.",
      "mentorText": "In crypto, think of custody like a vault. You wouldn’t keep all your valuables in a single lock; use multiple locks to enhance security.",
      "mentorAnalogy": "Just as a bank uses multiple vaults and security measures to protect cash, crypto custody requires layered security protocols to safeguard digital assets."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "concept",
    "title": "Defending Against Perpetual Funding Drag",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C2 -->\n### Core Scenario: Perpetual Funding Drag Defense\nPerpetual funding drag can erode the profitability of leveraged positions in crypto trading. This card teaches **strategies to mitigate the impact of funding fees**.\n\n* **Position Sizing**: Adjust position sizes to ensure that the funding fees do not outweigh potential profits. For instance, if the funding rate is 0.01% per 8 hours, calculate the maximum position size that maintains a favorable risk-reward ratio.\n* **Hedging Strategies**: Utilize hedging techniques, such as taking offsetting positions in related assets, to counteract potential losses from funding fees. For example, if holding a long position in Bitcoin, consider shorting Ethereum to balance exposure.\n* **Funding Rate Monitoring**: Regularly monitor funding rates across exchanges to identify favorable conditions. If the funding rate spikes above 0.05%, reassess the viability of maintaining the position.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Drag",
          "definition": "The cost incurred from holding leveraged positions in perpetual contracts."
        },
        {
          "term": "Hedging",
          "definition": "Taking an offsetting position in a related asset to reduce risk."
        },
        {
          "term": "Funding Rate",
          "definition": "The fee paid between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "Understanding and mitigating funding drag is essential for maintaining profitability in leveraged crypto positions.",
      "realLifeExample": "A trader holds a long position in Bitcoin with a funding rate of 0.02% per 8 hours. By reducing their position size to ensure that fees do not exceed 1% of their total investment, they maintain profitability.",
      "commonMistake": "Neglecting to monitor funding rates, leading to unexpected losses from high funding fees.",
      "quickNote": "Mitigate funding drag through position sizing and hedging strategies.",
      "mentorText": "Think of funding fees as a toll on your trading journey. You need to plan your route carefully to avoid excessive costs.",
      "mentorAnalogy": "Like a pilot calculating fuel costs for a flight, traders must account for funding fees to ensure their positions remain viable."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "concept",
    "title": "Conducting Detailed Crypto Market Analysis",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C3 -->\n### Core Scenario: Crypto Market Analysis\nConducting thorough market analysis is vital for making informed trading decisions in cryptocurrencies. This card focuses on **the methodologies for effective market analysis**.\n\n* **Technical Indicators**: Utilize indicators such as Moving Averages and RSI to identify trends and potential reversal points. For instance, a 50-day moving average crossing above a 200-day moving average may signal a bullish trend.\n* **Sentiment Analysis**: Assess market sentiment through social media trends and news sentiment analysis. Tools like the Fear & Greed Index can provide insights into market psychology, influencing trading decisions.\n* **Volume Analysis**: Analyze trading volumes to confirm trends. A price increase accompanied by high volume indicates strong buying interest, while low volume may suggest a lack of conviction.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Statistical tools used to analyze price movements and trends."
        },
        {
          "term": "Sentiment Analysis",
          "definition": "Evaluating market sentiment based on news and social media."
        },
        {
          "term": "Volume Analysis",
          "definition": "Assessing trading volume to confirm price trends."
        }
      ],
      "whyThisMatters": "Effective market analysis is crucial for making data-driven trading decisions, especially before the certification assessment.",
      "realLifeExample": "A trader observes that Bitcoin's price is above its 50-day moving average with increasing volume, indicating a strong bullish trend, and decides to enter a long position.",
      "commonMistake": "Relying solely on one type of analysis, such as technical indicators, without considering sentiment or volume.",
      "quickNote": "Combine technical, sentiment, and volume analysis for comprehensive market insights.",
      "mentorText": "Market analysis is like preparing for an exam; you need to gather all relevant information to ensure success.",
      "mentorAnalogy": "Just as a chef combines various ingredients to create a balanced dish, traders must blend different analysis methods to achieve optimal trading results."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "concept",
    "title": "Implementing Risk Management in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C4 -->\n### Core Scenario: Risk Management Techniques\nEffective risk management is essential for navigating the volatile crypto landscape. This card explores **specific techniques tailored for crypto assets**.\n\n* **Stop-Loss Orders**: Implement stop-loss orders to limit potential losses on trades. For example, if entering a long position in Ethereum at $2,000, set a stop-loss at $1,900 to cap losses at 5%.\n* **Diversification**: Spread investments across multiple crypto assets to mitigate risk. Allocating 30% to Bitcoin, 30% to Ethereum, and 40% to altcoins can reduce exposure to any single asset's volatility.\n* **Position Sizing**: Determine position sizes based on risk tolerance and account size. A common rule is to risk no more than 1% of the total account balance on a single trade, ensuring that even a series of losses won't deplete the account.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell an asset when it reaches a specified price."
        },
        {
          "term": "Diversification",
          "definition": "Spreading investments across various assets to reduce risk."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a trade based on risk tolerance."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies is critical for sustaining trading performance in the highly volatile crypto market.",
      "realLifeExample": "A trader invests $10,000 in various cryptocurrencies, setting a stop-loss for each position to limit losses to 1%, ensuring that even in a downturn, the overall capital remains intact.",
      "commonMistake": "Failing to set stop-loss orders, leading to significant losses during market downturns.",
      "quickNote": "Utilize stop-loss orders and diversification to manage risk effectively.",
      "mentorText": "Risk management is your safety net. Without it, you're walking a tightrope without a harness.",
      "mentorAnalogy": "Like an architect designing a building with safety features, traders must incorporate risk management into their trading strategies to withstand market fluctuations."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "concept",
    "title": "Tactics for Final Gate Preparation (Module 9.15 - CRYPTO)",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C5 -->\n### Core Strategy: Final Gate Preparation Tactics\nEffective preparation for the Final Certification Gate requires a structured approach to strategy refinement and risk assessment. This card outlines **specific tactics to enhance your readiness**.\n\n* **Strategy Refinement Process**: Review and consolidate your trading strategies. Identify the top three strategies that have yielded consistent results in your practice sessions, ensuring they align with current market conditions.\n* **Risk Assessment Framework**: Utilize a risk-reward ratio of at least 1:2 for all potential trades. Calculate the maximum acceptable loss per trade based on your total capital, ensuring it does not exceed 2% of your trading account.\n* **Mock Trading Sessions**: Conduct at least three mock trading sessions under simulated market conditions. Focus on executing your refined strategies while adhering strictly to your risk management protocols.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        },
        {
          "term": "Mock Trading",
          "definition": "Simulated trading sessions to practice strategies without financial risk."
        }
      ],
      "whyThisMatters": "Effective preparation enhances performance and confidence during the Final Certification Gate, ensuring traders can execute strategies under pressure.",
      "realLifeExample": "During a mock session, a trader refines their strategy on BTC/USD, achieving a risk-reward ratio of 1:3 by setting a stop loss at $28,000 and a take profit at $30,000.",
      "commonMistake": "Failing to conduct thorough mock sessions, leading to untested strategies during the actual certification.",
      "quickNote": "Refine strategies and assess risks to ensure readiness for the Final Gate.",
      "mentorText": "Focus on refining your strategies and assessing your risks. Treat your mock sessions as if they are the real deal; this is where you build your confidence.",
      "mentorAnalogy": "Think of this preparation like a pilot conducting pre-flight checks. Every detail matters to ensure a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "concept",
    "title": "Mastering Technical Analysis for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C6 -->\n### Core Technique: Advanced Technical Analysis for Crypto\nMastering technical analysis is essential for making informed trading decisions in the Certification Crucible. This card covers **advanced techniques tailored for cryptocurrencies**.\n\n* **Chart Pattern Recognition**: Identify key chart patterns such as head and shoulders, double tops, and triangles. Use these patterns to predict potential price movements and reversal points.\n* **Volume Analysis**: Analyze volume trends alongside price movements. A spike in volume accompanying a price breakout indicates stronger conviction in the move, while low volume may suggest a false breakout.\n* **Indicator Integration**: Combine multiple indicators, such as the Relative Strength Index (RSI) and Moving Average Convergence Divergence (MACD), to confirm entry and exit points. For example, an RSI above 70 coupled with a bearish MACD crossover signals potential overbought conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Chart Patterns",
          "definition": "Visual formations on a price chart that indicate potential future price movements."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to validate price movements."
        }
      ],
      "whyThisMatters": "Advanced technical analysis equips traders with the tools to make data-driven decisions, crucial for success in the Certification Crucible.",
      "realLifeExample": "A trader identifies a head and shoulders pattern on ETH/USD, confirming a potential reversal at $2,000, supported by a volume increase of 30% during the breakout.",
      "commonMistake": "Relying on a single indicator without considering the broader context of price action and volume.",
      "quickNote": "Integrate advanced technical analysis techniques to enhance decision-making.",
      "mentorText": "Mastering technical analysis is non-negotiable. Use every tool at your disposal to confirm your trades and avoid pitfalls.",
      "mentorAnalogy": "Consider this like a surgeon using multiple diagnostic tools to assess a patient's condition. Each tool provides critical insights that guide the final decision."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "practice",
    "title": "Practice Scenarios for Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C7 -->\n### Core Exercise: Simulated Crypto Trading Scenarios\nEngaging in practice scenarios is vital for applying your knowledge and preparing for the Final Certification Gate. This card presents **realistic trading conditions to test your skills**.\n\n* **Scenario 1 - Market Volatility**: Simulate trading during a sudden market drop of 10% in BTC. Determine your entry and exit points while adhering to your risk management strategy.\n* **Scenario 2 - Breakout Trading**: Practice identifying a breakout in LTC/USD when it surpasses $150. Execute a trade based on your technical analysis, including stop-loss and take-profit levels.\n* **Scenario 3 - News Impact**: React to a major regulatory announcement affecting crypto markets. Assess how this news influences your trading strategy and adjust your positions accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "Rapid price fluctuations in a financial market."
        },
        {
          "term": "Breakout Trading",
          "definition": "A trading strategy that aims to capitalize on price movements following a breakout."
        }
      ],
      "whyThisMatters": "Simulated scenarios provide practical experience, reinforcing concepts learned and enhancing readiness for real trading conditions.",
      "realLifeExample": "During a simulated session, a trader reacts to a 10% drop in BTC, executing a short position at $40,000 with a stop-loss at $42,000, successfully capturing the downward trend.",
      "commonMistake": "Failing to adapt strategies during simulated scenarios, leading to poor performance in real conditions.",
      "quickNote": "Engage in realistic scenarios to refine your trading execution.",
      "mentorText": "Treat these practice scenarios as if they are live trades. The more realistic you make them, the better prepared you will be.",
      "mentorAnalogy": "Like a firefighter training for emergencies, you must simulate various scenarios to ensure you can respond effectively when it matters."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are simulating a breakout trade on ETH/USD when it surpasses $2,500. What is your first action?",
      "options": [
        {
          "id": "0",
          "text": "Place a buy order immediately without analysis.",
          "isCorrect": false,
          "feedback": "Immediate action without analysis can lead to poor decision-making."
        },
        {
          "id": "1",
          "text": "Analyze volume and confirm breakout before placing an order.",
          "isCorrect": true,
          "feedback": "Confirming the breakout with volume analysis ensures a higher probability of success."
        },
        {
          "id": "2",
          "text": "Set a stop-loss at the previous resistance level.",
          "isCorrect": false,
          "feedback": "Setting a stop-loss is important, but it should be based on a comprehensive analysis."
        },
        {
          "id": "3",
          "text": "Wait for a pullback before entering the trade.",
          "isCorrect": false,
          "feedback": "While waiting for a pullback can be a strategy, it is essential to confirm the breakout first."
        }
      ]
    },
    "visualKey": "final-certification-crucible"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Concepts",
    "label": "Crypto Track",
    "body": "<!-- M9.15-crypto-C8 -->\n### Core Overview: Key Crypto Concepts\nSummarizing the key concepts covered in the Crypto track reinforces understanding and prepares you for the Final Certification Gate. This card encapsulates **the essential elements of your training**.\n\n* **Risk Management Strategies**: Emphasize the importance of maintaining a risk-reward ratio of at least 1:2 and adhering to position sizing rules to protect capital.\n* **Technical Analysis Proficiency**: Master chart patterns, volume analysis, and the integration of multiple indicators to inform trading decisions effectively.\n* **Market Dynamics Awareness**: Understand the impact of market news and volatility on trading strategies, ensuring adaptability in changing conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a particular trade."
        },
        {
          "term": "Market Dynamics",
          "definition": "The forces that influence the behavior of financial markets."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts is critical for successful navigation of the Final Certification Gate and future trading endeavors.",
      "realLifeExample": "A trader recalls their training on risk management while executing a trade during a volatile market, successfully maintaining a 1:2 risk-reward ratio despite rapid price changes.",
      "commonMistake": "Overlooking the importance of integrating risk management with technical analysis, leading to unpreparedness in real trading scenarios.",
      "quickNote": "Reinforce key concepts to ensure readiness for the Final Certification Gate.",
      "mentorText": "Review these concepts thoroughly. They are your foundation, and a strong foundation leads to successful trading.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, ensure every detail of your trading strategy is solid before executing."
    },
    "taskData": null,
    "visualKey": "final-certification-crucible"
  }
];
