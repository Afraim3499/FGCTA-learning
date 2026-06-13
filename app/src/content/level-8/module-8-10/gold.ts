import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Trading Objectives",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C1 -->\n### Core Objective: Defining Gold Trading Goals\nEstablishing clear objectives for gold trading ensures alignment with overarching trading strategies and risk management frameworks. This card outlines **how to articulate specific goals for your gold trading activities**.\n\n* **Capital Growth Target**: Define a percentage growth target for your gold portfolio over a specified time frame, such as aiming for a 15% annual return based on historical volatility and market trends.\n* **Risk Tolerance Specification**: Clearly outline the maximum acceptable loss per trade, such as limiting losses to 1% of total capital, to maintain discipline and prevent emotional decision-making.\n* **Diversification Criteria**: Set rules for the proportion of capital allocated to gold versus other asset classes, ensuring that gold trading does not exceed 30% of the total portfolio to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Growth Target",
          "definition": "A defined percentage increase in portfolio value aimed for over a specific period."
        },
        {
          "term": "Risk Tolerance",
          "definition": "The maximum acceptable loss on a trade relative to total capital."
        },
        {
          "term": "Diversification",
          "definition": "The strategy of spreading investments across various asset classes to reduce risk."
        }
      ],
      "whyThisMatters": "Clearly defined objectives provide a framework for evaluating performance and making informed trading decisions in the gold market.",
      "realLifeExample": "A trader sets a capital growth target of 15% for their gold investments over the next year, while limiting individual trade losses to 1% of their $100,000 portfolio.",
      "commonMistake": "Failing to establish specific, measurable objectives can lead to aimless trading and increased emotional decision-making.",
      "quickNote": "Establish clear, measurable objectives to guide your gold trading activities.",
      "mentorText": "You need to set precise goals for your gold trading. If you don’t know where you’re headed, every trade will feel like a shot in the dark. Define your targets and stick to them.",
      "mentorAnalogy": "Think of your trading objectives like a flight plan; without a clear destination, you risk flying aimlessly and running out of fuel."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Yield Alignment Rules",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C2 -->\n### Core Principle: Yield Alignment in Gold Trading\nYield alignment rules ensure that your gold trades correspond with prevailing market conditions and your investment objectives. This card details **how to construct yield alignment rules for your gold trading strategy**.\n\n* **Market Condition Assessment**: Establish criteria for assessing market conditions, such as using the 50-day moving average to determine bullish or bearish trends before entering trades.\n* **Yield Thresholds**: Set minimum yield thresholds for entering trades, for instance, only executing trades that offer a potential yield of at least 2% based on historical price movements and volatility.\n* **Exit Strategy Alignment**: Define exit strategies that align with yield expectations, such as closing positions when the yield drops below 1% to lock in profits and minimize losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Assessment",
          "definition": "Evaluating current market trends to inform trading decisions."
        },
        {
          "term": "Yield Threshold",
          "definition": "The minimum expected return on a trade before execution."
        },
        {
          "term": "Exit Strategy",
          "definition": "A predefined plan for closing trades based on specific criteria."
        }
      ],
      "whyThisMatters": "Yield alignment rules help traders navigate market fluctuations and ensure that trades are executed under favorable conditions.",
      "realLifeExample": "A trader analyzes the 50-day moving average and identifies a bullish trend, setting a yield threshold of 2% before entering a gold trade at $1,800 per ounce.",
      "commonMistake": "Ignoring market conditions can lead to entering trades that do not align with current yield expectations, increasing the risk of losses.",
      "quickNote": "Align your trades with market conditions and yield expectations to optimize performance.",
      "mentorText": "You must ensure that your trades are aligned with the market's current state. If the conditions aren’t right, don’t force a trade; wait for the right moment.",
      "mentorAnalogy": "Consider yield alignment like calibrating an aircraft's instruments before takeoff; everything must be in sync to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "COMEX Time Windows",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C3 -->\n### Core Focus: Optimizing Trade Execution with COMEX Time Windows\nUnderstanding COMEX time windows is critical for executing trades effectively and minimizing slippage. This card explains **how to incorporate COMEX time windows into your gold trading rulebook**.\n\n* **Session Timing**: Identify key trading sessions, such as the overlap between the London and New York sessions, which typically sees increased volatility and liquidity in gold markets.\n* **Order Execution Strategy**: Develop a strategy for placing orders during peak trading hours, for example, executing buy orders at 10:00 AM EST when market activity is highest.\n* **Slippage Management**: Set rules for managing slippage, such as using limit orders during volatile periods to ensure trades are executed at desired prices.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Time Windows",
          "definition": "Specific periods during which trading activity is heightened in the gold market."
        },
        {
          "term": "Session Timing",
          "definition": "Identifying optimal times for executing trades based on market activity."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which it is executed."
        }
      ],
      "whyThisMatters": "Incorporating COMEX time windows into your trading strategy enhances execution efficiency and reduces the risk of unfavorable price movements.",
      "realLifeExample": "A trader places a buy order for gold at $1,810 during the peak trading hours of the London-New York overlap, minimizing slippage and maximizing execution quality.",
      "commonMistake": "Failing to consider the timing of trades can lead to missed opportunities or increased slippage, negatively impacting profitability.",
      "quickNote": "Leverage COMEX time windows to enhance trade execution and minimize slippage.",
      "mentorText": "Timing is everything in trading. You need to know when to execute your trades to take advantage of market conditions. Don’t let poor timing cost you.",
      "mentorAnalogy": "Think of COMEX time windows like rush hour traffic; knowing when to travel can save you time and ensure you reach your destination efficiently."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Maximum Volatility Stops",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C4 -->\n### Core Mechanism: Setting Maximum Volatility Stops\nImplementing maximum volatility stops is essential for protecting your capital against extreme market fluctuations. This card outlines **how to establish maximum volatility stops in your gold trading rulebook**.\n\n* **Volatility Measurement**: Use the Average True Range (ATR) to measure market volatility, setting maximum stops at a multiple of the ATR, such as 1.5 times the ATR to account for normal price fluctuations.\n* **Stop Placement Rules**: Define rules for placing stops, for instance, placing a stop-loss order at $1,780 for a gold position entered at $1,800, based on calculated volatility levels.\n* **Dynamic Adjustment Protocol**: Establish a protocol for adjusting stops as volatility changes, ensuring that stops are tightened during low volatility periods to lock in profits.",
    "context": {
      "keyTerms": [
        {
          "term": "Maximum Volatility Stop",
          "definition": "A predefined stop-loss level set to protect against excessive price movements."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator used to measure market volatility."
        },
        {
          "term": "Stop Placement",
          "definition": "The strategy for determining where to set stop-loss orders."
        }
      ],
      "whyThisMatters": "Maximum volatility stops are critical for safeguarding capital and maintaining a disciplined approach to risk management in volatile markets.",
      "realLifeExample": "A trader calculates the ATR for gold at $20, sets a maximum volatility stop at $1,780 for a position entered at $1,800, and adjusts the stop as volatility decreases.",
      "commonMistake": "Neglecting to set volatility stops can expose traders to significant losses during sudden market shifts.",
      "quickNote": "Implement maximum volatility stops to protect your capital from extreme market movements.",
      "mentorText": "You must protect your capital from wild price swings. Setting maximum volatility stops is like putting on a seatbelt; it keeps you secure during unexpected turns.",
      "mentorAnalogy": "Think of maximum volatility stops like safety features in a car; they’re designed to protect you from unexpected hazards on the road."
    },
    "taskData": null,
    "visualKey": "trading-plan-builder"
  },
  {
    "type": "concept",
    "title": "Defining Trade Size for Gold",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C5 -->\n### Core Scenario: Trade Size Determination for Gold\nDetermining the appropriate trade size is critical to managing risk effectively in gold trading. This card outlines **how to calculate position size based on account equity and risk tolerance**.\n\n* **Risk Percentage Calculation**: Define your risk per trade as a percentage of your total account equity. For example, if your account balance is $10,000 and you decide to risk 1%, your maximum risk per trade is $100.\n* **Gold Position Size Formula**: Use the formula: Position Size = (Account Equity x Risk Percentage) / (Entry Price - Stop-Loss Price). For instance, if you enter gold at $1,800 and set a stop-loss at $1,790, the position size would be (10,000 x 0.01) / (1800 - 1790) = 10 contracts.\n* **Volatility Adjustment**: Adjust your trade size based on the current volatility of gold. If the Average True Range (ATR) is 15 points, consider reducing your position size to accommodate potential price swings.",
    "visualKey": "trading-plan-builder",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Stop-Loss Strategies for Gold",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C6 -->\n### Core Scenario: Implementing Stop-Loss Strategies for Gold\nEffective stop-loss strategies are essential for protecting capital during market fluctuations in gold trading. This card covers **how to set and adjust stop-loss orders based on market conditions**.\n\n* **Fixed Stop-Loss Method**: Establish a fixed stop-loss distance based on a percentage of the entry price. For example, entering gold at $1,800 with a 2% stop-loss would set your stop-loss at $1,764.\n* **ATR-Based Stop-Loss**: Utilize the Average True Range (ATR) to set dynamic stop-loss levels. If the ATR is 15 points, place your stop-loss 1.5 times the ATR below the entry price, resulting in a stop-loss at $1,785 for an entry at $1,800.\n* **Trailing Stop-Loss**: Implement a trailing stop-loss to lock in profits as the price moves favorably. For instance, if gold rises to $1,820, adjust your stop-loss to $1,805, maintaining a 15-point buffer.",
    "visualKey": "trading-plan-builder",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Implementing the Gold Rulebook",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C7 -->\n### Core Scenario: Practical Application of the Gold Rulebook\nThis exercise focuses on applying your gold rulebook to ensure effective execution of your trading strategies. Engage in **scenario-based decision-making** to reinforce your understanding.\n\n* **Scenario Analysis**: Review a hypothetical market condition where gold spikes due to geopolitical tensions. Determine your trade size and stop-loss placement based on your rulebook guidelines.\n* **Execution Simulation**: Simulate a trade execution using your defined strategies. For example, enter a long position at $1,810 with a stop-loss at $1,795 and calculate your position size based on a $10,000 account.\n* **Performance Review**: After the simulated trade, evaluate the outcomes against your rulebook. Assess whether your risk management and execution adhered to the established rules.",
    "visualKey": "trading-plan-builder",
    "taskData": {
      "type": "choice_block",
      "question": "In a scenario where gold prices spike to $1,810 due to geopolitical tensions, what is the most appropriate action to take regarding your trade size and stop-loss placement, in accordance with the Gold Rulebook?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position at $1,810 with a stop-loss at $1,795, calculating the position size based on a $10,000 account to maintain risk management.",
          "isCorrect": true,
          "feedback": "This option correctly applies the Gold Rulebook by ensuring the stop-loss is placed within an acceptable risk threshold and the position size is calculated based on the account balance."
        },
        {
          "id": "1",
          "text": "Enter a long position at $1,810 with no stop-loss, as the market is volatile.",
          "isCorrect": false,
          "feedback": "This option is incorrect because it disregards the essential risk management strategy of placing a stop-loss, which is critical in volatile market conditions."
        },
        {
          "id": "2",
          "text": "Enter a short position at $1,810 with a stop-loss at $1,830, assuming the price will reverse.",
          "isCorrect": false,
          "feedback": "This option is incorrect as it contradicts the scenario of a price spike and does not align with the Gold Rulebook's guidelines for entering trades based on market conditions."
        },
        {
          "id": "3",
          "text": "Avoid trading altogether due to market volatility, as per the Gold Rulebook.",
          "isCorrect": false,
          "feedback": "This option is incorrect because the Gold Rulebook encourages traders to engage in calculated trades even in volatile markets, provided they adhere to risk management principles."
        }
      ]
    }
  },
  {
    "type": "summary",
    "title": "Reviewing the Gold Rulebook",
    "label": "Gold Track",
    "body": "<!-- M8.10-gold-C8 -->\n### Core Scenario: Key Components of the Gold Rulebook\nA comprehensive review of the gold rulebook is vital for reinforcing the importance of each rule in successful trading. This card summarizes **the essential elements that govern your trading approach**.\n\n* **Trade Size Guidelines**: Reiterate the methods for calculating appropriate trade sizes based on account equity and risk tolerance, ensuring that risk management is prioritized.\n* **Stop-Loss Protocols**: Summarize the various stop-loss strategies, including fixed, ATR-based, and trailing stop-loss, emphasizing their roles in capital preservation.\n* **Execution and Review Procedures**: Highlight the importance of adhering to execution protocols and conducting post-trade reviews to refine strategies and improve future performance.",
    "visualKey": "trading-plan-builder",
    "taskData": null
  }
];
