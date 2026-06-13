import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Logging Perpetual Funding Costs",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C1 -->\n### Core Scenario: Perpetual Funding Cost Documentation\nPerpetual funding costs can significantly impact the profitability of crypto trades. This card outlines **how to accurately log these costs for better trade assessment**.\n\n* **Daily Funding Rate Calculation**: Record the funding rate for each position daily. For instance, if holding a BTC perpetual contract incurs a 0.01% funding fee, document this as a cost against your position size.\n* **Cumulative Cost Tracking**: Maintain a running total of funding costs for each trade. If you hold a position for 10 days at a daily rate of 0.01% on a $10,000 position, the total cost will be $10.\n* **Profitability Impact Analysis**: Assess the effect of cumulative funding costs on overall trade profitability. If your trade yields a $200 profit but incurs $10 in funding, your net profit is $190.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Cost",
          "definition": "The fee paid by traders for holding a perpetual contract, typically charged at regular intervals."
        }
      ],
      "whyThisMatters": "Understanding and documenting funding costs is crucial for accurately calculating net profitability in leveraged crypto trades.",
      "realLifeExample": "On a BTC perpetual contract held from January 1 to January 10, with a funding rate of 0.01%, the trader logs a total of $10 in funding fees against a $200 profit.",
      "commonMistake": "Failing to log funding costs can lead to an inflated perception of trade profitability.",
      "quickNote": "Accurate funding cost logging is essential for true profitability assessment.",
      "mentorText": "When you log your trades, make sure to include every funding cost. It’s not just about the profit; it’s about the net profit after all costs.",
      "mentorAnalogy": "Think of logging funding costs like a pilot calculating fuel expenses for a flight. Without accounting for fuel, the flight’s profitability remains unclear."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Analyzing CEX Wick Patterns",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C2 -->\n### Core Scenario: CEX Wick Pattern Logging\nWick patterns on centralized exchanges (CEX) provide critical insights into price action and market sentiment. This card focuses on **how to log these patterns for effective trade execution and risk management**.\n\n* **Wick Identification Protocol**: Document the high and low points of each wick during your trading sessions. For example, if ETH shows a wick reaching $2,000 before closing at $1,950, note the extremes.\n* **Market Sentiment Analysis**: Analyze the implications of wick patterns on market sentiment. A long wick down may indicate buying pressure, while a long wick up could signal selling pressure.\n* **Trade Execution Adjustments**: Use logged wick patterns to inform entry and exit strategies. If a wick consistently shows rejection at $2,000, consider this level for future trade planning.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Wick Pattern",
          "definition": "A price movement on a candlestick chart that indicates volatility and market sentiment."
        }
      ],
      "whyThisMatters": "Logging wick patterns enhances understanding of market dynamics, aiding in more informed trade decisions.",
      "realLifeExample": "During a trading session, a trader logs a wick on LTC that spikes to $150 before closing at $140, indicating potential resistance at $150 for future trades.",
      "commonMistake": "Ignoring wick patterns can lead to missed opportunities or increased risk in trade execution.",
      "quickNote": "Wick patterns are essential indicators of market sentiment and price rejection levels.",
      "mentorText": "Pay attention to the wicks on your charts. They tell you where the market tried to go but failed, which is crucial for your next moves.",
      "mentorAnalogy": "Logging wick patterns is like an architect reviewing the structural integrity of a building. Each wick reveals where the market has been tested and where it may fail again."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Documenting Taker Fees in Trades",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C3 -->\n### Core Scenario: Taker Fee Documentation\nTaker fees are a vital component of transaction costs in crypto trading. This card emphasizes **the importance of logging these fees to maintain a comprehensive understanding of overall costs**.\n\n* **Fee Structure Analysis**: Document the taker fee percentage for each exchange used. For example, if Binance charges a 0.1% taker fee, log this for every trade executed.\n* **Total Cost Calculation**: Calculate the total taker fees incurred per trade. If a trader buys $5,000 worth of XRP, the taker fee would be $5 (0.1% of $5,000).\n* **Impact on Trade Viability**: Assess how taker fees affect the overall viability of trades. If a trade yields a $50 profit but incurs $10 in taker fees, the net gain is only $40.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Taker Fee",
          "definition": "A fee charged by exchanges for executing trades that remove liquidity from the market."
        }
      ],
      "whyThisMatters": "Accurate documentation of taker fees is essential for understanding the true cost of trading and its impact on profitability.",
      "realLifeExample": "A trader logs a trade of $10,000 in ADA on Coinbase with a 0.2% taker fee, resulting in a $20 fee that must be accounted for in profit calculations.",
      "commonMistake": "Overlooking taker fees can lead to inaccurate profit assessments and poor trading decisions.",
      "quickNote": "Taker fees must be logged to ensure accurate profit and loss calculations.",
      "mentorText": "Always factor in your taker fees when assessing your trades. They can eat into your profits faster than you realize.",
      "mentorAnalogy": "Documenting taker fees is akin to a chef accounting for ingredient costs in a recipe. Without knowing your costs, you can’t price your dish correctly."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Understanding Leverage Margin Metrics",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C4 -->\n### Core Scenario: Leverage Margin Metric Logging\nLeverage margin metrics are crucial for evaluating risk exposure in crypto trading. This card details **how to log these metrics to assess potential returns and risks effectively**.\n\n* **Margin Requirement Calculation**: Document the margin required for each leveraged position. For instance, if trading BTC with 10x leverage, a $1,000 position requires $100 in margin.\n* **Risk Exposure Assessment**: Calculate the total risk exposure based on leverage. If the market moves against a 10x leveraged position, a 1% move can lead to a 10% loss of the margin.\n* **Return on Investment (ROI) Analysis**: Log potential ROI based on leverage used. If a trader anticipates a 5% price increase on a 10x leveraged position, the potential gain is 50% on the margin used.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Margin",
          "definition": "The amount of capital required to open a leveraged position, expressed as a percentage of the total position size."
        }
      ],
      "whyThisMatters": "Documenting leverage margin metrics is essential for understanding risk exposure and making informed trading decisions.",
      "realLifeExample": "A trader logs a 5x leveraged position on ETH worth $2,000, requiring $400 in margin, and assesses the risk of a 2% market move against their position.",
      "commonMistake": "Failing to log leverage metrics can lead to underestimating risk and overexposing capital.",
      "quickNote": "Leverage margin metrics are vital for evaluating risk and potential returns in trading.",
      "mentorText": "Keep a close eye on your leverage metrics. They dictate how much risk you’re taking and how much you stand to gain or lose.",
      "mentorAnalogy": "Logging leverage margin metrics is like an engineer calculating load limits on a bridge. Understanding these limits is essential for safety and performance."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Logging Market Conditions in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C5 -->\n### Core Scenario: Documenting Market Conditions\nAccurate documentation of market conditions is vital for analyzing trade performance in the volatile crypto space. This card details **how to systematically log market conditions during each trade**.\n\n* **Market Sentiment Analysis**: Record the prevailing sentiment in the market at the time of entry and exit. Use indicators such as the Fear & Greed Index or social media sentiment to gauge trader psychology.\n* **Volatility Metrics**: Note the volatility levels of the crypto asset using the Average True Range (ATR) or Bollinger Bands. For example, if Bitcoin's ATR was at 5% during a trade, document this to assess how volatility impacted your strategy.\n* **Liquidity Assessment**: Log the liquidity conditions by noting the bid-ask spread and order book depth at the time of trading. For instance, if Ethereum had a 1% spread during your entry, this could indicate potential slippage risks.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular asset or market."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market."
        }
      ],
      "whyThisMatters": "Logging market conditions allows for a nuanced understanding of trade performance, essential for refining strategies in the crypto market.",
      "realLifeExample": "During a trade on Solana, you noted a market sentiment of extreme greed with an ATR of 4%, which led to a successful exit at a 10% profit when the market shifted.",
      "commonMistake": "Failing to document market conditions can lead to misinterpretation of trade outcomes and hinder future decision-making.",
      "quickNote": "Document market conditions to enhance future trade analysis.",
      "mentorText": "When you log your trades, don't just write down the entry and exit prices. Capture the market's mood and volatility; it’s like taking the pulse of the market.",
      "mentorAnalogy": "Think of logging market conditions like a pilot checking weather reports before takeoff. Just as a pilot needs to know the weather to ensure a safe flight, you need to understand market conditions to navigate your trades effectively."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Assessing Risk Management in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C6 -->\n### Core Scenario: Risk Management Logging\nEffective risk management is critical in crypto trading due to its inherent volatility. This card outlines **how to document your risk management strategies** to ensure adherence to your trading plan.\n\n* **Position Sizing Protocol**: Record the size of each position relative to your total capital. For instance, if you allocate 5% of your portfolio to a trade in Litecoin, document this to maintain consistent risk exposure.\n* **Stop-Loss and Take-Profit Levels**: Log the specific stop-loss and take-profit levels set for each trade. If you set a stop-loss at 3% below your entry price for a trade on Cardano, note this to analyze its effectiveness later.\n* **Risk-Reward Ratio**: Calculate and document the risk-reward ratio for each trade. For example, if you risk $100 to potentially gain $300, record this 1:3 ratio to evaluate your strategy's viability.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Documenting risk management strategies ensures compliance with your trading plan and enhances overall trading discipline.",
      "realLifeExample": "In a trade on Ripple, you documented a position size of 4% of your capital, set a stop-loss at 2% below entry, and aimed for a 1:4 risk-reward ratio, which led to a disciplined exit.",
      "commonMistake": "Neglecting to log risk management parameters can lead to inconsistent trading practices and increased exposure to losses.",
      "quickNote": "Document risk management strategies to maintain discipline and control over your trades.",
      "mentorText": "Every time you enter a trade, write down your position size and risk parameters. This is your safety net; without it, you're flying blind.",
      "mentorAnalogy": "Logging risk management is akin to a surgeon preparing for an operation. Just as a surgeon reviews patient risks and surgical plans, you must assess and document your trading risks."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Journaling Exercises",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C7 -->\n### Core Scenario: Engaging in Journaling Exercises\nPractical exercises reinforce the skills necessary for effective post-market reviews in crypto trading. This card provides **scenarios to practice your journaling techniques**.\n\n* **Scenario Analysis**: Review a recent trade on Bitcoin where you experienced a loss. Document the market conditions, your emotional state, and the risk management strategies you employed during the trade.\n* **Reflection Exercise**: After a successful trade on Litecoin, write a detailed entry that includes what worked well, what could have been improved, and how you felt during the trade. This helps solidify learning.\n* **Weekly Review**: At the end of each week, summarize your trades, focusing on patterns in your performance and emotional responses. Identify at least two areas for improvement based on your logs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating a specific trade to understand outcomes and improve future performance."
        },
        {
          "term": "Reflection Exercise",
          "definition": "A practice of reviewing trades to identify strengths and weaknesses."
        },
        {
          "term": "Weekly Review",
          "definition": "A summary of trades and performance over a specified period."
        }
      ],
      "whyThisMatters": "Engaging in practical journaling exercises enhances your ability to analyze trades and refine strategies based on documented experiences.",
      "realLifeExample": "After documenting a loss on Ethereum, you realized that emotional trading led to a poor decision, prompting you to adjust your strategy in future trades.",
      "commonMistake": "Skipping journaling exercises can result in missed opportunities for learning and improvement.",
      "quickNote": "Engage in journaling exercises to solidify your trading skills and insights.",
      "mentorText": "Don’t just log trades; analyze them. Treat your journal as a feedback loop that informs your future decisions.",
      "mentorAnalogy": "Think of your journaling practice like a scientist conducting experiments. Each trade is a test, and your journal is the lab notebook where you document results and refine your hypotheses."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You experienced a loss on a recent trade. What should you document in your journal?",
      "options": [
        {
          "id": "0",
          "text": "Market conditions, emotional state, and risk management strategies.",
          "isCorrect": true,
          "feedback": "Correct. Documenting these elements provides insight into the loss and helps improve future trades."
        },
        {
          "id": "1",
          "text": "Only the entry and exit prices.",
          "isCorrect": false,
          "feedback": "Incorrect. This lacks critical context needed for analysis."
        },
        {
          "id": "2",
          "text": "The amount of profit you could have made if the trade was successful.",
          "isCorrect": false,
          "feedback": "Incorrect. Focus on what happened, not hypothetical outcomes."
        },
        {
          "id": "3",
          "text": "The time of day you made the trade.",
          "isCorrect": false,
          "feedback": "Incorrect. While timing can be relevant, it’s not as critical as the other factors."
        }
      ]
    },
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "summary",
    "title": "Summarizing Key Insights from Crypto Journaling",
    "label": "Crypto Track",
    "body": "<!-- M8.6-crypto-C8 -->\n### Core Scenario: Consolidating Journaling Insights\nSummarizing insights from your crypto journaling is essential for ongoing performance analysis. This card emphasizes **the importance of detailed logging for effective trade evaluation**.\n\n* **Pattern Recognition**: Identify recurring themes in your trades, such as emotional triggers or consistent mistakes. For example, if you notice frequent losses after high volatility events, this insight can inform future strategies.\n* **Performance Metrics**: Summarize key performance metrics, including win rates, average profit/loss per trade, and risk-reward ratios. Documenting these metrics helps track progress over time.\n* **Actionable Adjustments**: Based on your insights, outline specific adjustments to your trading plan. If you find that trades executed during high market sentiment lead to losses, consider avoiding such conditions in the future.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pattern Recognition",
          "definition": "Identifying trends or recurring themes in trading performance."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess trading success."
        },
        {
          "term": "Actionable Adjustments",
          "definition": "Specific changes made to a trading strategy based on analysis."
        }
      ],
      "whyThisMatters": "Summarizing insights allows for a structured approach to refining trading strategies and improving overall performance.",
      "realLifeExample": "After reviewing your journal, you recognized a pattern of losses during high volatility, prompting you to adjust your strategy to trade more conservatively during such times.",
      "commonMistake": "Failing to summarize insights can lead to stagnation in trading performance and missed opportunities for improvement.",
      "quickNote": "Summarize insights to refine your trading strategies and enhance performance.",
      "mentorText": "Your journal is not just a record; it's a roadmap. Summarize your insights to navigate your trading journey more effectively.",
      "mentorAnalogy": "Think of summarizing your insights like a coach reviewing game footage. Just as a coach analyzes plays to improve team performance, you must analyze your trades to enhance your trading outcomes."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  }
];
