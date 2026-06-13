import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Trading Objectives",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C1 -->\n### Core Scenario: Defining Crypto Trading Objectives\nEstablishing clear trading objectives is essential for aligning crypto strategies with overall financial goals. This card outlines **how to articulate specific objectives that guide trading behavior**.\n\n* **Risk-Adjusted Return Goals**: Set a target return that factors in the inherent volatility of crypto assets. For instance, aim for a 15% annualized return on a portfolio of Bitcoin and Ethereum, adjusting for drawdown tolerance.\n* **Timeframe Specification**: Define the trading horizon for each objective, such as short-term (daily to weekly) versus long-term (monthly to yearly) strategies. This helps in aligning trading decisions with market conditions.\n* **Diversification Targets**: Establish a minimum percentage allocation for various crypto assets to mitigate risk. For example, limit any single asset exposure to no more than 20% of the total portfolio value.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Adjusted Return",
          "definition": "The return on an investment adjusted for the risk taken to achieve it."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Clearly defined objectives ensure that trading actions remain consistent with long-term financial aspirations, particularly in the volatile crypto market.",
      "realLifeExample": "A trader sets a goal to achieve a 20% return on a $10,000 Bitcoin investment over the next six months, while maintaining a maximum drawdown of 10%.",
      "commonMistake": "Failing to articulate specific, measurable objectives leads to reactive trading rather than strategic decision-making.",
      "quickNote": "Define clear, measurable objectives to guide your crypto trading strategy.",
      "mentorText": "When you set your objectives, think of them as your trading compass. Without clear directions, you risk losing your way in the volatile crypto landscape.",
      "mentorAnalogy": "Like a pilot charting a course before takeoff, you must establish your trading objectives to navigate the unpredictable crypto skies."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Establishing Leverage Boundaries",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C2 -->\n### Core Scenario: Setting Leverage Boundaries\nLeverage can amplify both gains and losses in crypto trading, making it imperative to establish strict boundaries. This card teaches **how to define leverage limits to manage risk effectively**.\n\n* **Maximum Leverage Ratio**: Determine a maximum leverage ratio based on your risk tolerance and market conditions. For example, limit leverage to 2:1 for volatile assets like Dogecoin, while using 5:1 for more stable coins like USDC.\n* **Position Sizing Formula**: Calculate position sizes based on leverage limits and account equity. For instance, with a $10,000 account and a 2:1 leverage limit, the maximum position size should not exceed $20,000.\n* **Margin Call Threshold**: Set a threshold for margin calls that triggers a review of positions. For example, if equity falls below 30% of the required margin, initiate a risk assessment and potential liquidation of positions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Ratio",
          "definition": "The ratio of borrowed funds to equity in a trading position."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Establishing leverage boundaries protects capital and prevents catastrophic losses in a highly volatile crypto environment.",
      "realLifeExample": "A trader with a $15,000 account sets a maximum leverage of 3:1, allowing for a maximum position size of $45,000 in Ethereum, while ensuring risk is managed.",
      "commonMistake": "Over-leveraging due to emotional trading can lead to rapid account depletion, especially in volatile markets.",
      "quickNote": "Define strict leverage boundaries to protect your trading capital.",
      "mentorText": "Think of leverage as a double-edged sword. Set your boundaries wisely to avoid cutting too deep into your capital.",
      "mentorAnalogy": "Just as a structural engineer must adhere to load limits to ensure safety, you must establish leverage boundaries to safeguard your trading structure."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "TVL and Funding Limits",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C3 -->\n### Core Scenario: Defining TVL and Funding Limits\nTotal Value Locked (TVL) and funding limits are critical metrics for sustainable trading practices in the crypto market. This card explains **how to define these metrics in your trading rulebook**.\n\n* **TVL Calculation**: Establish a method for calculating TVL across your crypto investments. For instance, if you hold $5,000 in Ethereum and $3,000 in DeFi protocols, your TVL is $8,000.\n* **Funding Limit Protocol**: Set a maximum funding limit for new investments based on your TVL. For example, limit new investments to 20% of your TVL, ensuring that you do not overextend your capital.\n* **Rebalancing Schedule**: Implement a regular rebalancing schedule to maintain your funding limits. For example, review your portfolio every quarter to ensure that your investments align with your TVL and funding strategy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Total Value Locked (TVL)",
          "definition": "The total capital held within a specific crypto protocol or investment."
        },
        {
          "term": "Funding Limit",
          "definition": "The maximum amount allocated for new investments based on existing capital."
        }
      ],
      "whyThisMatters": "Defining TVL and funding limits helps maintain a balanced portfolio and prevents overexposure to high-risk assets.",
      "realLifeExample": "A trader calculates their TVL at $12,000 and sets a funding limit of $2,400 for new investments, ensuring they remain within safe capital allocation parameters.",
      "commonMistake": "Neglecting to calculate TVL can lead to over-investment in high-risk assets, jeopardizing overall portfolio health.",
      "quickNote": "Define TVL and funding limits to ensure sustainable trading practices.",
      "mentorText": "Think of your TVL as the foundation of your trading house. Keep it solid and well-structured to support your investments.",
      "mentorAnalogy": "Like a city planner allocating resources for infrastructure, you must define your TVL and funding limits to ensure a sustainable trading environment."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Profit Scaling Rules",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C4 -->\n### Core Scenario: Implementing Profit Scaling Rules\nProfit scaling is a strategic approach to optimizing gains while managing risk in crypto trading. This card outlines **how to implement profit scaling rules in your trading plan**.\n\n* **Scaling Thresholds**: Define specific thresholds for scaling out of positions. For example, sell 25% of a position when a crypto asset appreciates by 20%, and another 25% at a 40% gain.\n* **Reinvestment Strategy**: Establish a rule for reinvesting profits. For instance, reinvest 50% of realized profits into new opportunities while maintaining the remaining 50% as cash reserves.\n* **Trailing Stop Mechanism**: Implement a trailing stop to lock in profits as prices rise. For example, set a trailing stop at 5% below the highest price achieved after entering a position, ensuring profits are secured without capping potential upside.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Profit Scaling",
          "definition": "The strategy of gradually selling portions of a position to secure gains."
        },
        {
          "term": "Trailing Stop",
          "definition": "An order that adjusts with the market price to protect profits."
        }
      ],
      "whyThisMatters": "Implementing profit scaling rules allows traders to maximize returns while minimizing the risk of losing unrealized gains.",
      "realLifeExample": "A trader enters a position in Solana at $30, sells 25% at $36, and sets a trailing stop at $34 to secure profits as the price fluctuates.",
      "commonMistake": "Failing to scale profits can lead to missed opportunities for securing gains, especially in volatile markets.",
      "quickNote": "Implement profit scaling rules to optimize gains while managing risk.",
      "mentorText": "Scaling profits is like harvesting crops; you want to take what you’ve grown without risking the entire field. Be strategic in your approach.",
      "mentorAnalogy": "Just as a chef carefully portions out a dish to balance flavors, you must scale your profits to maintain a well-rounded trading strategy."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Defining Trade Size for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C5 -->\n### Core Scenario: Trade Size Determination\nEstablishing appropriate trade sizes is critical for effective risk management in crypto trading. This card outlines **how to calculate trade size based on account equity and risk tolerance**.\n\n* **Risk Percentage Rule**: Define a maximum risk percentage per trade, typically between 1-2% of total account equity. For example, with a $10,000 account, risking 1% allows for a maximum loss of $100.\n* **Position Size Formula**: Use the formula: Position Size = (Account Equity x Risk Percentage) / (Entry Price - Stop-Loss Price). If entering BTC at $30,000 with a stop-loss at $29,500, the position size for a 1% risk on a $10,000 account is 0.2 BTC.\n* **Volatility Adjustment**: Adjust trade size based on the asset's volatility. Higher volatility assets like ETH may require smaller position sizes to maintain the same risk profile as less volatile assets like stablecoins.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Percentage",
          "definition": "The proportion of total account equity that a trader is willing to risk on a single trade."
        },
        {
          "term": "Position Size",
          "definition": "The quantity of an asset that a trader buys or sells in a single trade."
        }
      ],
      "whyThisMatters": "Proper trade size calculation prevents excessive losses and ensures longevity in the volatile crypto market.",
      "realLifeExample": "Trading ETH at $2,000 with a stop-loss set at $1,950 on a $15,000 account, risking 1% would allow for a position size of 0.25 ETH.",
      "commonMistake": "Traders often increase position sizes impulsively after a win, disregarding their predefined risk parameters.",
      "quickNote": "Calculate trade size based on risk percentage and volatility to manage exposure effectively.",
      "mentorText": "When determining your trade size, always stick to your risk percentage. If you risk $100 on a trade, ensure your position size reflects that risk accurately.",
      "mentorAnalogy": "Think of trade size like fuel in a plane; too much can weigh you down, while too little can leave you stranded. Balance is essential."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Stop-Loss Strategies for Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C6 -->\n### Core Scenario: Implementing Stop-Loss Orders\nStop-loss orders are essential for protecting capital in the volatile crypto market. This card details **how to effectively set and manage stop-loss levels**.\n\n* **Fixed Stop-Loss**: Set a fixed stop-loss at a predetermined percentage below the entry price, such as 5%. For example, entering BTC at $40,000 would set a stop-loss at $38,000.\n* **Trailing Stop-Loss**: Utilize a trailing stop-loss to lock in profits as the price moves favorably. If BTC rises to $42,000, a trailing stop set at 5% would adjust the stop-loss to $39,900.\n* **Volatility-Based Stop-Loss**: Calculate stop-loss levels based on the asset's average true range (ATR). For instance, if the ATR for ETH is $100, setting a stop-loss at 1.5x ATR would place it $150 below the entry price.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Fixed Stop-Loss",
          "definition": "A predetermined price level where a position will be closed to prevent further losses."
        },
        {
          "term": "Trailing Stop-Loss",
          "definition": "A stop-loss order that moves with the market price to secure profits."
        }
      ],
      "whyThisMatters": "Implementing effective stop-loss strategies mitigates potential losses during market downturns, preserving capital.",
      "realLifeExample": "Entering LTC at $150 with a fixed stop-loss at $142 protects against a sudden drop, while a trailing stop at 5% would adjust as LTC rises.",
      "commonMistake": "Traders often place stop-loss orders too close to the entry price, leading to premature exits from trades.",
      "quickNote": "Use fixed, trailing, and volatility-based stop-loss strategies to safeguard your capital.",
      "mentorText": "Always have a stop-loss in place before entering a trade. It’s your safety net against unexpected market moves.",
      "mentorAnalogy": "Setting a stop-loss is like wearing a seatbelt in a car; it’s a precaution that protects you from potential accidents."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "practice",
    "title": "Implementing the Crypto Rulebook",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C7 -->\n### Core Scenario: Practical Application of the Rulebook\nEngaging in practical exercises helps solidify the implementation of your crypto rulebook. This card focuses on **applying defined strategies in simulated scenarios**.\n\n* **Scenario Simulation**: Create a simulated trading environment where you apply your rulebook. For example, execute trades based on your defined entry and exit criteria for BTC and ETH.\n* **Performance Review**: After executing trades, analyze the outcomes against your rulebook. Did you adhere to your risk management and stop-loss strategies? Document any deviations.\n* **Adjustment Protocol**: Based on your performance review, identify areas for improvement in your rulebook. Adjust parameters like trade size or stop-loss levels according to the results of your simulations.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "A practice exercise where traders apply their trading strategies in a controlled environment."
        },
        {
          "term": "Performance Review",
          "definition": "The process of analyzing trade outcomes to assess adherence to the trading plan."
        }
      ],
      "whyThisMatters": "Practical exercises ensure that traders can effectively execute their strategies under real market conditions.",
      "realLifeExample": "Simulating a trading session with BTC, applying a 2% risk rule, and reviewing the outcomes to refine your strategy.",
      "commonMistake": "Failing to document trades and outcomes leads to missed opportunities for learning and improvement.",
      "quickNote": "Engage in simulations to practice and refine your trading strategies effectively.",
      "mentorText": "Treat your practice sessions like real trades. Document everything and review your performance critically to improve.",
      "mentorAnalogy": "Think of this practice like a pilot in a flight simulator; it’s where you refine your skills before taking off in the real world."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are simulating a trading session and decide to enter a BTC trade at $35,000 with a stop-loss at $34,500. What is the maximum risk if your account balance is $5,000 and you are risking 2%?",
      "options": [
        {
          "id": "0",
          "text": "$100",
          "isCorrect": true,
          "feedback": "Correct. 2% of $5,000 is $100, which is the maximum risk for this trade."
        },
        {
          "id": "1",
          "text": "$200",
          "isCorrect": false,
          "feedback": "Incorrect. 2% of $5,000 is $100, not $200."
        },
        {
          "id": "2",
          "text": "$50",
          "isCorrect": false,
          "feedback": "Incorrect. 2% of $5,000 is $100, not $50."
        },
        {
          "id": "3",
          "text": "$150",
          "isCorrect": false,
          "feedback": "Incorrect. 2% of $5,000 is $100, not $150."
        }
      ]
    },
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "summary",
    "title": "Reviewing the Crypto Rulebook",
    "label": "Crypto Track",
    "body": "<!-- M8.10-crypto-C8 -->\n### Core Scenario: Key Components of the Rulebook\nA comprehensive review of the crypto rulebook reinforces the importance of each rule in successful trading. This card summarizes **the essential elements that should be included in your rulebook**.\n\n* **Risk Management Protocols**: Clearly outline your risk percentage per trade and position sizing rules to manage exposure effectively.\n* **Entry and Exit Strategies**: Document specific criteria for entering and exiting trades, including stop-loss and take-profit levels tailored to each asset's volatility.\n* **Performance Metrics**: Establish metrics for evaluating trade performance, including win/loss ratio, average risk/reward, and adherence to the rulebook.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management Protocols",
          "definition": "Guidelines that dictate how much capital is at risk in each trade."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "A well-defined rulebook serves as a roadmap for traders, ensuring consistent execution and risk management.",
      "realLifeExample": "Reviewing your crypto rulebook before trading sessions to ensure all strategies and risk parameters are clearly defined and understood.",
      "commonMistake": "Neglecting to regularly review and update the rulebook can lead to outdated strategies and increased risk exposure.",
      "quickNote": "Regularly review your crypto rulebook to ensure adherence to defined strategies and risk management protocols.",
      "mentorText": "Your rulebook is your trading bible. Review it before every trading session to ensure you’re aligned with your strategies.",
      "mentorAnalogy": "Think of your rulebook like a construction blueprint; it provides the necessary guidelines to build a solid trading foundation."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  }
];
