import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Pair Selection Criteria",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C1 -->\n### Core Scenario: Currency Pair Selection\nSelecting the right currency pairs is critical for aligning trading strategies with market behavior and objectives. This card outlines **specific criteria for evaluating and choosing currency pairs** for your Forex rulebook.\n\n* **Liquidity Assessment**: Prioritize pairs with high trading volumes, such as EUR/USD or USD/JPY, to ensure tight spreads and minimal slippage during execution. Avoid illiquid pairs that can lead to unpredictable price movements.\n* **Volatility Measurement**: Analyze historical volatility to identify pairs that align with your risk tolerance. For example, pairs like GBP/JPY may offer higher volatility, suitable for aggressive strategies, while pairs like EUR/CHF may be more stable.\n* **Correlation Analysis**: Evaluate the correlation between selected pairs to avoid overexposure. For instance, trading both AUD/USD and NZD/USD can lead to redundant risk; instead, diversify with pairs like USD/CAD to balance exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure that describes the extent to which two variables move in relation to each other."
        }
      ],
      "whyThisMatters": "Proper pair selection directly influences the effectiveness of your trading strategy and risk management framework.",
      "realLifeExample": "Choosing to trade EUR/USD and USD/JPY during the London session, where both pairs exhibit high liquidity and volatility, can enhance execution efficiency.",
      "commonMistake": "Failing to consider liquidity can lead to poor execution and increased trading costs.",
      "quickNote": "Select currency pairs based on liquidity, volatility, and correlation to align with trading objectives.",
      "mentorText": "When I assess currency pairs, I focus on liquidity first. If a pair isn’t liquid, I move on. It’s about ensuring I can enter and exit trades without excessive costs.",
      "mentorAnalogy": "Selecting currency pairs is like an architect choosing materials for a building; the right materials ensure stability and longevity."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Defining Session Hour Limits",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C2 -->\n### Core Scenario: Session Hour Limits\nEstablishing session hour limits is essential for optimizing trading opportunities while managing exposure to market volatility. This card details **how to set effective trading hours** in your Forex rulebook.\n\n* **Session Identification**: Clearly define the major trading sessions (Asian, European, and North American) and their peak hours. For example, the overlap between the London and New York sessions (8 AM to 12 PM EST) typically presents the most trading opportunities.\n* **Time Allocation**: Allocate specific hours for active trading based on your strategy. For instance, if you focus on breakout strategies, prioritize trading during high-volume sessions to capture significant price movements.\n* **Trade Closure Protocol**: Implement a rule to close all positions before the end of a session to avoid overnight risk. For example, if trading the EUR/USD, ensure all positions are closed by 5 PM EST to mitigate exposure to market gaps.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Session",
          "definition": "A period during which a specific market is open for trading."
        },
        {
          "term": "Peak Hours",
          "definition": "Times during a trading session when trading volume and volatility are highest."
        }
      ],
      "whyThisMatters": "Defining session limits helps to maximize trading efficiency while minimizing exposure to unpredictable market movements.",
      "realLifeExample": "Trading the GBP/USD during the London session from 3 AM to 12 PM EST allows for capturing high volatility and liquidity.",
      "commonMistake": "Not adhering to session limits can lead to unnecessary exposure during low liquidity periods.",
      "quickNote": "Define clear session hour limits to optimize trading opportunities and manage risk.",
      "mentorText": "I always set my trading hours based on market activity. If the market is quiet, I step back; if it’s active, I’m ready to engage.",
      "mentorAnalogy": "Setting session limits is like a pilot scheduling flight times; you want to operate when conditions are optimal for safety and efficiency."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Incorporating News Restrictions",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C3 -->\n### Core Scenario: News Event Restrictions\nIntegrating news event restrictions into your Forex rulebook is vital for managing risks associated with high volatility periods. This card outlines **how to effectively implement news restrictions**.\n\n* **Economic Calendar Review**: Regularly consult an economic calendar to identify high-impact news events. For instance, avoid trading the USD/JPY during the release of Non-Farm Payrolls, as it can lead to significant price swings.\n* **Pre-Event Trade Closure**: Establish a rule to close all open positions 30 minutes prior to major news releases to avoid unexpected volatility. For example, if the Fed announces interest rate changes, ensure all trades are closed to prevent adverse price movements.\n* **Post-Event Analysis**: After major news events, wait for a minimum of 15 minutes before re-entering the market to allow volatility to stabilize. This helps in assessing the new market conditions without being caught in erratic price behavior.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Calendar",
          "definition": "A schedule of economic events that may impact financial markets."
        },
        {
          "term": "Volatility",
          "definition": "The degree of price variation in a financial instrument."
        }
      ],
      "whyThisMatters": "Incorporating news restrictions protects your capital from unpredictable market movements during high-impact events.",
      "realLifeExample": "Avoiding trades on EUR/USD during the ECB interest rate announcement can prevent exposure to sudden price spikes.",
      "commonMistake": "Ignoring upcoming news events can lead to significant losses due to unexpected volatility.",
      "quickNote": "Integrate news restrictions to manage risks associated with high volatility periods.",
      "mentorText": "I always check the economic calendar before trading. If a major report is coming, I either close my positions or avoid the market altogether.",
      "mentorAnalogy": "In surgery, a surgeon waits for stable conditions before proceeding; similarly, wait for market stability after news events before trading."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Leverage Guidelines for Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C4 -->\n### Core Scenario: Leverage Guidelines\nEstablishing leverage guidelines is crucial for managing risk effectively in Forex trading. This card details **how to set appropriate leverage levels** in your Forex rulebook.\n\n* **Risk Assessment**: Determine your risk tolerance and adjust leverage accordingly. For example, if your risk tolerance is 1% per trade, using 10:1 leverage on a $10,000 account allows for a maximum position size of $1,000.\n* **Leverage Limits**: Set maximum leverage limits based on market conditions. During high volatility periods, reduce leverage to 2:1 to mitigate risk exposure. Conversely, during stable market conditions, leverage can be increased to 5:1.\n* **Margin Call Protocol**: Implement a rule to monitor margin levels closely. If the account equity falls below 100% margin requirement, initiate a review of open positions and consider reducing exposure immediately.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase potential returns on investment."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Proper leverage guidelines are essential for protecting capital and ensuring sustainable trading practices.",
      "realLifeExample": "Using 5:1 leverage on a $20,000 account during stable market conditions allows for a position size of $4,000, but reducing to 2:1 during high volatility protects against larger losses.",
      "commonMistake": "Overleveraging can lead to rapid account depletion during adverse market movements.",
      "quickNote": "Establish leverage guidelines to manage risk effectively in Forex trading.",
      "mentorText": "I always calculate my leverage based on my risk. If the market is volatile, I lower my leverage to protect my capital.",
      "mentorAnalogy": "Setting leverage guidelines is like a pilot determining fuel capacity; too much can lead to danger, while too little can limit range."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Determining Trade Size Parameters",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C5 -->\n### Core Scenario: Trade Size Calibration\nDefining trade size parameters is essential for maintaining consistent risk management across all trades. This card outlines **how to establish a systematic approach to determine position sizes based on account equity and risk tolerance**.\n\n* **Risk Percentage Calculation**: Determine the percentage of your total account equity you are willing to risk on a single trade, typically between 1-2%. For example, with a $10,000 account, risking 1% means a maximum loss of $100.\n* **Pip Value Assessment**: Calculate the pip value based on the currency pair and trade size. For a standard lot of EURUSD, a 1 pip movement equals $10; thus, if risking $100, your trade size would be 10 pips.\n* **Position Sizing Formula**: Use the formula: Position Size = (Account Equity x Risk Percentage) / (Stop-Loss in Pips x Pip Value). For instance, with a $10,000 account, risking 1% on a trade with a 50 pip stop-loss results in a position size of 2 lots.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Size",
          "definition": "The number of units traded in a single transaction."
        },
        {
          "term": "Pip Value",
          "definition": "The monetary value of a one-pip movement in a currency pair."
        }
      ],
      "whyThisMatters": "Accurate trade size parameters prevent overexposure and ensure that risk management protocols are adhered to consistently.",
      "realLifeExample": "Trading USDJPY at 110.50 with a stop-loss of 30 pips; if risking 1% of a $20,000 account, the position size would be calculated to ensure a maximum loss of $200.",
      "commonMistake": "Failing to adjust position size according to account fluctuations, leading to inconsistent risk exposure.",
      "quickNote": "Establish a systematic approach to position sizing to maintain risk control.",
      "mentorText": "When determining your trade size, always anchor your calculations to your account size and risk tolerance. This ensures that no single trade can jeopardize your overall capital.",
      "mentorAnalogy": "Think of position sizing like a pilot calculating fuel for a flight; too much fuel can weigh down the aircraft, while too little can lead to an emergency landing."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Setting Stop-Loss Rules",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C6 -->\n### Core Scenario: Strategic Stop-Loss Implementation\nEstablishing effective stop-loss rules is critical for capital preservation and limiting losses. This card details **how to create a structured approach for setting stop-loss levels based on market conditions and trade strategy**.\n\n* **Volatility Assessment**: Analyze the volatility of the currency pair to determine appropriate stop-loss distances. For instance, if EURUSD typically moves 50 pips daily, setting a stop-loss 30 pips away from entry may be prudent.\n* **Technical Levels**: Utilize support and resistance levels to position stop-loss orders. If entering a long position at 1.1200, placing a stop-loss just below a significant support level at 1.1180 can provide a safety net.\n* **Dynamic Adjustment Protocol**: Implement a rule to adjust stop-loss levels as the trade moves in your favor. For example, if a trade moves 20 pips into profit, consider moving the stop-loss to break-even to protect capital.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Support Level",
          "definition": "A price level where a downtrend can be expected to pause due to a concentration of demand."
        }
      ],
      "whyThisMatters": "Effective stop-loss rules safeguard capital and ensure that losses are contained within predefined limits.",
      "realLifeExample": "Entering a short position on GBPUSD at 1.3000 with a stop-loss set at 1.3050, based on a recent resistance level, limits potential losses to 50 pips.",
      "commonMistake": "Setting stop-loss levels too tight, leading to premature exits from trades that may have been profitable.",
      "quickNote": "Strategically position stop-loss orders to protect capital while allowing room for market fluctuations.",
      "mentorText": "Your stop-loss is your safety net; it should be strategically placed to protect your capital while not being so tight that it gets triggered by normal market noise.",
      "mentorAnalogy": "Setting a stop-loss is like a surgeon marking the incision line; it must be precise and well-considered to avoid unnecessary complications."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "practice",
    "title": "Implementing the Forex Rulebook",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C7 -->\n### Core Scenario: Practical Application of the Forex Rulebook\nEngaging in practical exercises to implement your Forex rulebook is essential for ensuring effective execution of your defined trading strategies. This card focuses on **applying the rules in simulated trading scenarios**.\n\n* **Scenario Simulation**: Create a mock trading environment where you apply your rulebook to various market conditions. For example, simulate trading EURUSD during high-impact news events while adhering to your stop-loss and position sizing rules.\n* **Trade Review Process**: After executing trades, conduct a thorough review to assess adherence to your rulebook. Identify any deviations and analyze their impact on trade outcomes.\n* **Feedback Loop**: Establish a feedback mechanism to refine your rulebook based on practical experiences. Adjust rules as necessary to enhance performance and risk management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Mock Trading",
          "definition": "Simulated trading without real capital to practice strategies."
        },
        {
          "term": "Feedback Mechanism",
          "definition": "A process for evaluating performance and making adjustments based on outcomes."
        }
      ],
      "whyThisMatters": "Practical application reinforces the importance of the rulebook and enhances discipline in executing trading strategies.",
      "realLifeExample": "Simulating a trade on AUDCAD during an economic announcement, adhering to your predefined risk rules, and reviewing the outcomes to ensure compliance with your rulebook.",
      "commonMistake": "Neglecting to review trades against the rulebook, leading to repeated mistakes and lack of accountability.",
      "quickNote": "Engage in mock trading to solidify the application of your Forex rulebook.",
      "mentorText": "Practice makes perfect; use mock trading to test your rulebook under various conditions and refine your approach based on what you learn.",
      "mentorAnalogy": "Implementing your rulebook is like a pilot conducting pre-flight checks; every step must be followed to ensure a safe and successful journey."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are simulating a trade on USDCHF during a major economic announcement. What is the first step you should take according to your Forex rulebook?",
      "options": [
        {
          "id": "0",
          "text": "Adjust your stop-loss to be tighter than usual.",
          "isCorrect": false,
          "feedback": "This is incorrect; tightening your stop-loss can lead to unnecessary losses during volatility."
        },
        {
          "id": "1",
          "text": "Review your position sizing based on your risk parameters.",
          "isCorrect": true,
          "feedback": "Correct; reviewing position sizing ensures adherence to risk management rules before entering the trade."
        },
        {
          "id": "2",
          "text": "Ignore the rulebook and trade based on gut feeling.",
          "isCorrect": false,
          "feedback": "This is incorrect; deviating from the rulebook undermines your trading discipline."
        },
        {
          "id": "3",
          "text": "Set a wider stop-loss to accommodate potential volatility.",
          "isCorrect": false,
          "feedback": "While wider stop-losses can be beneficial, they must be justified by your risk management rules."
        }
      ]
    },
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "summary",
    "title": "Reviewing the Forex Rulebook",
    "label": "Forex Track",
    "body": "<!-- M8.10-forex-C8 -->\n### Core Scenario: Comprehensive Rulebook Review\nA thorough review of the Forex rulebook is vital for reinforcing the importance of each rule in successful trading. This card summarizes **the key components that should be consistently evaluated**.\n\n* **Risk Management Protocols**: Ensure that all risk management rules, including trade size and stop-loss placements, are clearly defined and adhered to. Regularly revisit these parameters to align with current market conditions.\n* **Execution Guidelines**: Review the execution rules that dictate how trades are entered and exited. Confirm that these guidelines are practical and reflect your trading style and strategy.\n* **Performance Metrics**: Establish metrics to evaluate the effectiveness of your rulebook. Analyze win/loss ratios, average risk/reward, and adherence to rules to identify areas for improvement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Guidelines",
          "definition": "Rules that specify how trades should be entered and exited."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess trading performance."
        }
      ],
      "whyThisMatters": "Regularly reviewing the Forex rulebook ensures that it remains relevant and effective in guiding trading decisions.",
      "realLifeExample": "Conducting a quarterly review of your Forex rulebook, analyzing the effectiveness of your stop-loss strategies and trade sizes based on recent performance data.",
      "commonMistake": "Failing to update the rulebook in response to changing market conditions or personal trading evolution.",
      "quickNote": "Regularly review your Forex rulebook to ensure its effectiveness and relevance.",
      "mentorText": "Treat your rulebook like a living document; it should evolve based on your experiences and the changing market landscape. Regular reviews are essential.",
      "mentorAnalogy": "Reviewing your rulebook is akin to a chef tasting their dish; adjustments must be made to ensure the final product meets the desired standards."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  }
];
