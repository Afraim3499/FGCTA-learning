import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Contract Sizing for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C1 -->\n### Core Scenario: Contract Sizing Dynamics\nContract sizing is critical in gold trading, directly impacting execution costs and market liquidity. This card outlines **how to determine optimal contract sizes based on current market conditions**.\n\n* **Market Liquidity Assessment**: Analyze the average daily volume and bid-ask spreads for gold futures. For instance, if the average daily volume is 300,000 contracts with a spread of $0.50, this indicates sufficient liquidity for larger positions.\n* **Execution Cost Calculation**: Factor in brokerage fees and slippage. If trading 10 contracts at a price of $1,800 per ounce incurs a $5 execution cost, ensure this aligns with your profit targets.\n* **Dynamic Sizing Adjustments**: Adjust contract sizes based on real-time market volatility. For example, during high volatility, reduce contract sizes to mitigate risk, such as trading 5 contracts instead of 10 when the VIX exceeds 20.",
    "context": {
      "keyTerms": [
        {
          "term": "Contract Sizing",
          "definition": "The process of determining the number of contracts to trade based on market conditions and risk parameters."
        }
      ],
      "whyThisMatters": "Proper contract sizing minimizes execution costs and optimizes trade performance in volatile markets.",
      "realLifeExample": "Trading 8 gold contracts at $1,805 during a high liquidity session with a $0.40 spread results in a total execution cost of $3.20.",
      "commonMistake": "Failing to adjust contract sizes based on changing market conditions can lead to excessive costs and increased risk.",
      "quickNote": "Contract size must reflect both market liquidity and execution costs.",
      "mentorText": "When sizing your contracts, always consider the liquidity of the market. If the spread widens unexpectedly, be ready to adjust your size to avoid unnecessary costs.",
      "mentorAnalogy": "Think of contract sizing like adjusting the load on a cargo plane; too much weight can lead to inefficiencies and increased fuel costs."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "COMEX Swaps and Their Impact on Sizing",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C2 -->\n### Core Scenario: Understanding COMEX Swaps\nCOMEX swaps can significantly affect contract sizing decisions in gold trading by influencing execution costs. This card explains **how to incorporate swap rates into your sizing strategy**.\n\n* **Swap Rate Analysis**: Monitor the current swap rates for gold contracts. If the swap rate is 0.25% for a 3-month contract, calculate the cost of holding positions over time to inform sizing decisions.\n* **Cost-Benefit Assessment**: Weigh the benefits of larger positions against the costs incurred from swaps. For example, holding 10 contracts at a swap rate of 0.25% equates to $4.50 monthly in financing costs, impacting overall profitability.\n* **Strategic Sizing Adjustments**: Adjust your position size based on the swap rates. If rates rise significantly, consider reducing your position size to maintain profitability, such as trading 7 contracts instead of 10.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Swaps",
          "definition": "Financial instruments that allow traders to exchange cash flows based on the price of gold futures."
        }
      ],
      "whyThisMatters": "Understanding swaps is essential for accurate cost calculations and effective position sizing in gold trading.",
      "realLifeExample": "If holding 5 gold contracts incurs a swap cost of $3.75 per month, ensure this cost is factored into your profit calculations.",
      "commonMistake": "Ignoring swap costs when sizing contracts can lead to unexpected losses and reduced profitability.",
      "quickNote": "Incorporate swap rates into your sizing strategy to optimize trade costs.",
      "mentorText": "Always factor in the swap costs when deciding on your contract size. A small oversight can erode your profits significantly.",
      "mentorAnalogy": "Consider swap rates like interest on a loan; they accumulate over time and can affect your overall financial health."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Overnight Financing Wicks in Gold Contracts",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C3 -->\n### Core Scenario: Impact of Overnight Financing Wicks\nOvernight financing wicks can influence the sizing of gold contracts by affecting execution costs. This card discusses **how to account for these wicks in your trading strategy**.\n\n* **Understanding Financing Wicks**: Recognize that overnight financing can lead to price adjustments. For instance, if a gold contract closes at $1,810 and opens at $1,815 due to financing, this impacts your entry point and sizing.\n* **Cost Calculation**: Calculate the potential cost of overnight financing. If financing adds $2 to the entry price of 5 contracts, your total cost increases by $10, which must be included in your risk assessment.\n* **Adjusting Position Sizes**: Modify your contract size based on expected financing costs. If financing wicks are high, consider reducing your position size to maintain risk levels, such as trading 4 contracts instead of 5.",
    "context": {
      "keyTerms": [
        {
          "term": "Overnight Financing Wicks",
          "definition": "Price adjustments that occur due to financing costs when positions are held overnight."
        }
      ],
      "whyThisMatters": "Accounting for overnight financing wicks is essential for accurate cost management and risk assessment in gold trading.",
      "realLifeExample": "If holding 6 contracts results in a $12 increase due to overnight financing, ensure this is factored into your overall trade strategy.",
      "commonMistake": "Neglecting to account for overnight financing can lead to unexpected costs and skewed risk assessments.",
      "quickNote": "Always factor in overnight financing when sizing your gold contracts.",
      "mentorText": "Be vigilant about overnight financing. It can change your entry point and impact your overall profitability.",
      "mentorAnalogy": "Think of overnight financing like a toll on a highway; it’s an additional cost that affects your journey and overall budget."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Risk Management in Gold Contract Sizing",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C4 -->\n### Core Scenario: Risk Management Principles\nEffective risk management is vital in determining the appropriate size of gold contracts. This card outlines **how to align contract sizes with your risk tolerance**.\n\n* **Risk Tolerance Assessment**: Establish your risk tolerance level before sizing contracts. For example, if you are willing to risk $500 on a trade, and your stop loss is set at $10, you can trade a maximum of 50 contracts.\n* **Position Sizing Formula**: Use the formula: Position Size = (Account Risk / Trade Risk) x Current Price. If your account risk is $1,000 and the trade risk is $20, you could size your position at 50 contracts if gold is priced at $1,800.\n* **Continuous Monitoring**: Regularly review and adjust your position sizes based on changing market conditions and personal risk tolerance. If market volatility increases, reduce your size accordingly to maintain risk levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        }
      ],
      "whyThisMatters": "Aligning contract sizes with risk tolerance ensures sustainable trading practices and long-term profitability.",
      "realLifeExample": "If your risk tolerance allows for a $600 loss, and your stop loss is $15, you can safely trade 40 gold contracts at $1,800.",
      "commonMistake": "Failing to align contract sizes with risk tolerance can lead to excessive losses and account depletion.",
      "quickNote": "Contract sizing must reflect your risk management strategy.",
      "mentorText": "Always size your contracts based on your risk tolerance. It’s essential to protect your capital while pursuing profits.",
      "mentorAnalogy": "Think of risk management in trading like a safety harness in construction; it keeps you secure while you work at heights."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Evaluating Market Liquidity for Gold",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C5 -->\n### Core Scenario: Assessing Gold Market Liquidity\nMarket liquidity directly influences contract sizing and execution costs for gold trading. This card provides a framework for evaluating liquidity conditions in the gold market.\n\n* **Bid-Ask Spread Analysis**: Measure the bid-ask spread during different trading sessions. For instance, assess the spread during the London session, which may average 0.30 to 0.50 USD, compared to the New York session where it may widen to 0.60 USD.\n* **Order Book Depth**: Analyze the order book to determine the volume of buy and sell orders at various price levels. A deeper order book indicates higher liquidity, allowing for larger contract sizes without significant slippage.\n* **Volume Metrics**: Monitor trading volume during peak hours. For example, a volume of 10,000 contracts traded in a single hour indicates robust liquidity, supporting larger position sizes with minimal execution costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding liquidity is essential for optimizing contract sizes and minimizing execution costs in gold trading.",
      "realLifeExample": "During the NY session on March 15, 2023, the gold market showed a bid-ask spread of 0.65 USD with a trading volume of 12,000 contracts, indicating moderate liquidity for larger trades.",
      "commonMistake": "Traders often underestimate the impact of liquidity fluctuations during off-peak hours, leading to unexpected execution costs.",
      "quickNote": "Evaluate liquidity conditions to optimize contract sizing and execution costs.",
      "mentorText": "When trading gold, always check the liquidity conditions before sizing your position. If the spread is wider than usual, consider reducing your contract size to mitigate execution costs.",
      "mentorAnalogy": "Think of liquidity like water flow in a pipe; a wider pipe allows more water to flow without pressure loss. Similarly, higher liquidity enables larger trades without significant price impact."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "concept",
    "title": "Dynamic Sizing Strategies for Gold Contracts",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C6 -->\n### Core Scenario: Adapting Sizing to Market Conditions\nDynamic sizing strategies allow traders to adjust their contract sizes based on real-time market conditions and execution costs. This card outlines how to implement these strategies effectively.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. For example, if the ATR for gold is 20 USD, adjust your contract size to maintain a consistent risk level, such as 1% of your capital.\n* **Liquidity-Adjusted Sizing**: Modify your position size based on current liquidity metrics. If the bid-ask spread widens to 0.70 USD, consider reducing your size by 25% to avoid excessive slippage.\n* **Execution Cost Monitoring**: Continuously track execution costs during trades. If costs exceed a predetermined threshold, such as 0.50 USD per contract, reassess your position size to align with your risk management strategy.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Sizing",
          "definition": "Adjusting position sizes in response to changing market conditions."
        }
      ],
      "whyThisMatters": "Dynamic sizing enhances risk management by aligning contract sizes with current market conditions, thereby optimizing execution costs.",
      "realLifeExample": "On April 10, 2023, the ATR for gold was 18 USD, prompting a trader to size their position at 5 contracts instead of 10 to maintain a consistent risk exposure.",
      "commonMistake": "Failing to adjust position sizes in response to increased volatility can lead to overexposure and significant losses.",
      "quickNote": "Implement dynamic sizing to align contract sizes with live market conditions.",
      "mentorText": "Always be ready to adjust your contract size based on market volatility and liquidity. If conditions change, your strategy should adapt accordingly to protect your capital.",
      "mentorAnalogy": "Dynamic sizing is like adjusting the sails of a ship based on wind conditions; too much sail in a storm can capsize you, just as too large a position in volatile markets can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Gold Contract Sizing",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C7 -->\n### Core Scenario: Applying Sizing Techniques\nEngage in practical exercises to apply contract sizing techniques while considering COMEX swaps and overnight financing. This card provides a scenario for hands-on practice.\n\n* **Scenario Setup**: You are monitoring the gold market during the Asian session. The current price is 1,950 USD, with a bid-ask spread of 0.50 USD. You have a capital of 50,000 USD and aim to risk 1% per trade.\n* **Sizing Calculation**: Calculate your position size based on the current spread and risk parameters. If the stop loss is set at 10 USD, your maximum risk per trade is 500 USD, allowing for a position size of 50 contracts (500 USD / 10 USD).\n* **Financing Consideration**: Factor in overnight financing costs. If the financing rate is 0.02% per day, calculate the cost for holding your position overnight and adjust your sizing accordingly to maintain profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Swaps",
          "definition": "Contracts that allow traders to exchange cash flows based on the price of gold."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the application of sizing techniques in real market scenarios, enhancing decision-making skills.",
      "realLifeExample": "During a practice session on May 5, 2023, a trader calculated their position size at 50 contracts based on a 10 USD stop loss and a 0.50 USD spread, successfully managing their risk.",
      "commonMistake": "Traders often neglect to account for overnight financing costs, leading to unexpected losses on long-held positions.",
      "quickNote": "Practice sizing techniques with real market conditions to enhance execution efficiency.",
      "mentorText": "When sizing your contracts, always run the numbers based on your risk parameters and the current market conditions. This discipline will keep your trading strategy robust.",
      "mentorAnalogy": "Think of sizing like a chef measuring ingredients; too much of one can spoil the dish. In trading, too large a position can lead to significant losses."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a gold price of 1,950 USD, a bid-ask spread of 0.50 USD, and a stop loss of 10 USD, what is the appropriate position size if risking 1% of a 50,000 USD capital?",
      "options": [
        {
          "id": "0",
          "text": "50 contracts",
          "isCorrect": true,
          "feedback": "Correct. The position size is calculated as 500 USD (1% of 50,000) divided by the 10 USD stop loss, resulting in 50 contracts."
        },
        {
          "id": "1",
          "text": "25 contracts",
          "isCorrect": false,
          "feedback": "Incorrect. This size does not align with the risk management parameters set for this scenario."
        },
        {
          "id": "2",
          "text": "100 contracts",
          "isCorrect": false,
          "feedback": "Incorrect. This size exceeds the risk threshold based on the stop loss."
        },
        {
          "id": "3",
          "text": "75 contracts",
          "isCorrect": false,
          "feedback": "Incorrect. This size does not adhere to the calculated risk management strategy."
        }
      ]
    },
    "visualKey": "live-capital-planner"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Contract Sizing",
    "label": "Gold Track",
    "body": "<!-- M9.3-gold-C8 -->\n### Core Scenario: Recap of Key Sizing Concepts\nThis summary consolidates the essential concepts of sizing gold contracts, emphasizing execution costs and liquidity considerations.\n\n* **Liquidity Evaluation**: Regularly assess market liquidity to inform contract sizing. Wider spreads and lower volume necessitate smaller positions to mitigate execution costs.\n* **Dynamic Adjustments**: Implement dynamic sizing strategies that adapt to real-time market conditions, ensuring that position sizes reflect current volatility and liquidity.\n* **Practical Application**: Engage in practical exercises to reinforce contract sizing techniques, considering factors such as COMEX swaps and overnight financing costs to optimize trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Costs",
          "definition": "The total costs incurred when executing a trade, including spreads and commissions."
        }
      ],
      "whyThisMatters": "A solid understanding of contract sizing is crucial for maintaining effective risk management and optimizing trading performance.",
      "realLifeExample": "In a recent trading session, a trader adjusted their contract size based on liquidity metrics, successfully executing trades with minimal slippage and costs.",
      "commonMistake": "Traders often overlook the importance of liquidity and execution costs, leading to inefficient trade execution.",
      "quickNote": "Summarize key concepts of gold contract sizing to enhance trading efficiency.",
      "mentorText": "Remember, the key to successful trading in gold is understanding your position size in relation to market conditions. Always audit your sizing against liquidity and execution costs.",
      "mentorAnalogy": "Contract sizing is like a pilot calculating fuel needs based on flight conditions; too little fuel can lead to a crash, just as too large a position can lead to significant losses."
    },
    "taskData": null,
    "visualKey": "live-capital-planner"
  }
];
