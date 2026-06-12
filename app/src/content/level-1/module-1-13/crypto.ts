import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Crypto Plan Scoring",
    "label": "Crypto Track",
    "body": "### Introduction to Crypto Plan Scoring\nCrypto trading plans require a unique scoring approach due to the market's distinct characteristics. This card outlines **how spot-perp price spreads and funding rate impacts influence the quality of your trading plan**.\n\n* **Spot-Perp Price Spreads**: Evaluate the divergence between spot and perpetual futures prices. A significant spread may indicate arbitrage opportunities or market inefficiencies that can affect plan execution.\n* **Funding Rate Impacts**: Funding rates can shift the cost of holding positions in perpetual contracts. High funding rates may erode profitability, requiring careful consideration in plan scoring.\n* **Plan Quality Metrics**: Incorporate these factors into a comprehensive scoring system to assess the structural integrity of your trading plan before execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Price Spread",
          "definition": "The difference between the spot price and the perpetual futures price of a cryptocurrency."
        },
        {
          "term": "Funding Rate",
          "definition": "A periodic payment exchanged between traders to keep the perpetual futures price close to the spot price."
        }
      ],
      "whyThisMatters": "Scoring crypto trading plans helps traders identify potential weaknesses and inefficiencies before executing trades, enhancing decision-making and risk management.",
      "realLifeExample": "A trader observes a 1% spread between BTC spot and perp prices, with a funding rate of 0.1% per 8 hours. This impacts the decision to hold a long position overnight.",
      "commonMistake": "Ignoring the impact of funding rates and spot-perp spreads, leading to unexpected costs and reduced profitability.",
      "quickNote": "Spot-perp spreads and funding rates are critical metrics for crypto plan scoring.",
      "mentorText": "Think of scoring your crypto plan like a pre-flight checklist. You need to ensure every component, like spot-perp spreads and funding rates, is accounted for before takeoff.",
      "mentorAnalogy": "Just as an engineer assesses structural integrity before a bridge is built, you must evaluate your plan's quality through spot-perp spreads and funding rates."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Scoring Spot-Perp Price Spreads",
    "label": "Crypto Track",
    "body": "### Scoring Spot-Perp Price Spreads\nSpot-perp price spreads are a key metric in evaluating the viability of a crypto trading plan. **Learn to assess these spreads to determine plan quality**.\n\n* **Spread Analysis**: Calculate the percentage difference between spot and perpetual futures prices. A spread exceeding 1% may indicate market inefficiencies or arbitrage opportunities.\n* **Market Conditions**: Consider the volatility and liquidity of the instrument. High volatility can widen spreads, affecting execution.\n* **Plan Adjustment**: If spreads are unfavorable, adjust your strategy or timing to mitigate potential risks and enhance plan quality.",
    "context": {
      "keyTerms": [
        {
          "term": "Arbitrage Opportunity",
          "definition": "A chance to profit from price differences of the same asset in different markets or forms."
        }
      ],
      "whyThisMatters": "Spot-perp spreads can reveal market inefficiencies that, if unaccounted for, may lead to suboptimal trade execution and increased risk.",
      "realLifeExample": "ETH spot price is $2,000, while the perp price is $2,020, indicating a 1% spread. This suggests potential inefficiencies that could impact a short-term trading plan.",
      "commonMistake": "Failing to account for significant spot-perp spreads, leading to unexpected slippage and reduced trade effectiveness.",
      "quickNote": "Monitor spot-perp spreads to identify potential market inefficiencies.",
      "mentorText": "Spot-perp spreads are like the gap between a train and the platform. Mind the gap to ensure a smooth transition in your trading plan.",
      "mentorAnalogy": "A pilot checks wind speed differences at takeoff and landing. Similarly, assess spot-perp spreads to ensure a smooth trading journey."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Assessing Funding Rate Impact",
    "label": "Crypto Track",
    "body": "### Assessing Funding Rate Impact\nFunding rates influence the cost of holding positions in perpetual futures. **Incorporate these rates into your plan scoring to evaluate execution and success**.\n\n* **Rate Calculation**: Identify the current funding rate and its frequency. Rates exceeding 0.1% per 8 hours can significantly impact profitability.\n* **Cost Assessment**: Calculate the total cost of holding a position over your planned duration. High rates may necessitate plan adjustments.\n* **Strategic Timing**: Align your entry and exit strategies with funding rate cycles to minimize costs and enhance plan viability.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Futures",
          "definition": "A type of futures contract without an expiration date, often used in crypto trading."
        }
      ],
      "whyThisMatters": "Funding rates can erode profits, especially in leveraged positions, making it crucial to factor them into plan assessments.",
      "realLifeExample": "A trader plans to hold a long BTC position for 24 hours with a funding rate of 0.15% per 8 hours, impacting the decision to proceed with the trade.",
      "commonMistake": "Overlooking funding rates, leading to unexpected costs that diminish returns.",
      "quickNote": "Funding rates can significantly impact your trading costs.",
      "mentorText": "Think of funding rates like fuel costs for a long journey. You must calculate these costs to ensure your trip remains profitable.",
      "mentorAnalogy": "A sailor must account for tides and currents. Similarly, funding rates are the financial currents that can steer your trading plan off course."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Evaluating Exchange Venue Agreement",
    "label": "Crypto Track",
    "body": "### Evaluating Exchange Venue Agreement\nExchange venue conditions can significantly impact your trading plan. **Learn to assess how well your plan aligns with venue-specific conditions**.\n\n* **Liquidity Assessment**: Evaluate the liquidity provided by the exchange. Low liquidity can lead to slippage and execution delays.\n* **Fee Structure**: Analyze the exchange's fee structure, including maker and taker fees, to understand cost implications on your plan.\n* **Regulatory Compliance**: Ensure the exchange complies with relevant regulations, as non-compliance can pose legal and financial risks.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which it is executed."
        }
      ],
      "whyThisMatters": "Aligning your plan with exchange conditions ensures smoother execution and reduces unexpected costs or risks.",
      "realLifeExample": "A trader chooses an exchange with a 0.1% maker fee and high liquidity for executing a large ETH trade, ensuring minimal slippage.",
      "commonMistake": "Ignoring exchange-specific conditions, resulting in higher costs and execution issues.",
      "quickNote": "Align your plan with exchange conditions to optimize execution.",
      "mentorText": "Consider exchange conditions like airport regulations. You need to comply to ensure a smooth takeoff and landing for your trades.",
      "mentorAnalogy": "Just as a chef selects the right kitchen for specific dishes, choose the right exchange venue to suit your trading plan."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Incorporating Liquidity Considerations in Crypto Plans",
    "label": "Crypto Track",
    "body": "### Liquidity Considerations: Adjusting Plan Scores\nLiquidity impacts execution and slippage in crypto markets. This card explains **how to adjust your crypto plan scores based on liquidity conditions**.\n\n* **Liquidity Assessment**: Evaluate the average daily trading volume and bid-ask spread of the crypto asset. Plans involving assets with low liquidity should be scored lower due to higher execution risk.\n* **Volatility Impact**: Consider how liquidity affects volatility. High volatility in low liquidity environments can lead to erratic price movements, necessitating a more conservative plan score.\n* **Order Book Depth**: Analyze the order book depth to determine potential slippage. Shallow order books increase the likelihood of price impact, requiring adjustments to the plan score to reflect execution challenges.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ability to buy or sell an asset without causing a significant price change."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Liquidity directly affects trade execution and risk management, impacting the reliability of your trading plan.",
      "realLifeExample": "Trading DOGE on a weekend with a 15% bid-ask spread and low volume, leading to unexpected slippage.",
      "commonMistake": "Ignoring liquidity metrics and overestimating the ability to execute trades at desired prices.",
      "quickNote": "Always adjust your plan score for liquidity to avoid execution surprises.",
      "mentorText": "Liquidity is the lifeblood of your trading plan. Without it, your plan is just theory. Always check the pulse before you act.",
      "mentorAnalogy": "Think of liquidity like the water in a swimming pool. You need enough depth to dive safely; otherwise, you risk hitting the bottom."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Adapting Crypto Plans to Market Sentiment",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Integrating into Plan Scores\nMarket sentiment influences price direction and volatility. This card covers **how to incorporate market sentiment into your crypto plan scoring**.\n\n* **Sentiment Analysis Tools**: Utilize sentiment analysis tools to gauge market mood. A bullish sentiment in a bearish market condition may warrant a lower plan score due to potential reversals.\n* **News Impact**: Monitor news events and social media trends that could shift sentiment. Sudden sentiment changes can invalidate plan assumptions, requiring score adjustments.\n* **Sentiment Divergence**: Identify divergences between sentiment and price action. A plan should account for these divergences, as they often precede significant market moves.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors towards a particular market or asset."
        },
        {
          "term": "Sentiment Analysis",
          "definition": "The process of analyzing opinions or emotions expressed in text data."
        }
      ],
      "whyThisMatters": "Market sentiment can drive price movements, impacting the effectiveness and timing of your trading plan.",
      "realLifeExample": "BTC sentiment turns negative after a major exchange hack, causing a rapid price drop despite technical bullish signals.",
      "commonMistake": "Relying solely on technical indicators without considering sentiment shifts.",
      "quickNote": "Sentiment is the market's mood; ignore it at your plan's peril.",
      "mentorText": "Sentiment is like the weather. You might have a perfect plan, but if you don't check the forecast, you could get caught in a storm.",
      "mentorAnalogy": "Consider sentiment like a ship's wind. It can propel you forward or push you off course, depending on how you adjust your sails."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "practice",
    "title": "Crypto Plan Scoring Practice",
    "label": "Crypto Track",
    "body": "### Practice: Scoring Crypto Trading Plans\nApply your crypto plan scoring techniques in practice scenarios. Test your ability to accurately assess and refine crypto trading plans.\n\n* **Scenario Evaluation**: Given a set of market conditions, determine the appropriate plan score based on liquidity and sentiment factors.\n* **Score Adjustment**: Practice adjusting scores in response to changing market dynamics, ensuring your plan remains robust.\n* **Feedback Analysis**: Review feedback on your scoring decisions to refine your approach and improve accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Plan Score",
          "definition": "A numerical assessment of a trading plan's robustness and compliance."
        }
      ],
      "whyThisMatters": "Practical application of scoring techniques ensures plans are actionable and adaptable to real market conditions.",
      "realLifeExample": "Assessing a plan for ETH during a high-volatility period with mixed sentiment, adjusting scores as conditions evolve.",
      "commonMistake": "Failing to adjust scores dynamically, leading to plans that are either too aggressive or too conservative.",
      "quickNote": "Practice makes precision; refine your scoring for better execution.",
      "mentorText": "Scoring is your pre-flight checklist. Miss a step, and you risk the entire mission. Practice until it's second nature.",
      "mentorAnalogy": "Think of scoring like a pilot's pre-flight checklist. Each item ensures the plane is ready for takeoff, just as your score ensures your plan is ready for execution."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a scenario where BTC has high liquidity but negative sentiment, how should you adjust your plan score?",
      "options": [
        {
          "id": "0",
          "text": "Lower the score due to sentiment concerns.",
          "isCorrect": true,
          "feedback": "Correct. Negative sentiment can lead to unexpected price movements, warranting a more cautious approach."
        },
        {
          "id": "1",
          "text": "Raise the score due to high liquidity.",
          "isCorrect": false,
          "feedback": "Incorrect. While liquidity is favorable, sentiment plays a critical role in potential price direction."
        },
        {
          "id": "2",
          "text": "Keep the score unchanged.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring sentiment changes can lead to misjudged risk."
        },
        {
          "id": "3",
          "text": "Focus only on technical indicators.",
          "isCorrect": false,
          "feedback": "Incorrect. Sentiment is a crucial factor that can override technical signals."
        }
      ]
    },
    "visualKey": "crypto-plan-score-sheet"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Plan Scoring",
    "label": "Crypto Track",
    "body": "### Summary: Key Elements of Crypto Plan Scoring\nReview the key elements of scoring crypto trading plans. Reflect on how these techniques can improve your plan's structural integrity and compliance.\n\n* **Liquidity and Sentiment Integration**: Understand the importance of integrating liquidity and sentiment into your plan scores to ensure adaptability and robustness.\n* **Dynamic Scoring**: Emphasize the need for dynamic scoring adjustments in response to evolving market conditions, maintaining plan relevance.\n* **Continuous Improvement**: Encourage ongoing refinement of scoring techniques through practice and feedback analysis, enhancing plan effectiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Integrity",
          "definition": "The strength and reliability of a trading plan under various conditions."
        }
      ],
      "whyThisMatters": "A well-scored plan is more likely to withstand market fluctuations and deliver consistent results.",
      "realLifeExample": "Successfully navigating a volatile crypto market by dynamically adjusting plan scores based on liquidity and sentiment changes.",
      "commonMistake": "Overlooking the need for continuous plan score adjustments, leading to outdated strategies.",
      "quickNote": "A robust plan score adapts to the market, not the other way around.",
      "mentorText": "Your plan score is your market compass. Keep it calibrated, and you'll navigate any storm.",
      "mentorAnalogy": "Think of plan scoring like a ship's compass. It must be constantly adjusted to ensure you're on the right course, regardless of the sea's conditions."
    },
    "taskData": null,
    "visualKey": "crypto-plan-score-sheet"
  }
];
