import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Executing EURUSD and GBPUSD Simultaneously",
    "label": "Forex Track",
    "body": "### Core Scenario: Simultaneous Execution Strategy\nExecuting trades on EURUSD and GBPUSD requires a disciplined approach to manage correlation and exposure. This card outlines **strategies to execute both pairs without exceeding risk thresholds**.\n\n* **Correlation Assessment**: Prior to execution, analyze the correlation coefficient between EURUSD and GBPUSD. Maintain a threshold of 0.7 to avoid excessive exposure to market movements.\n* **Order Placement Protocol**: Execute orders for both pairs simultaneously, ensuring that the total notional value does not exceed 2% of the trading account. This prevents overexposure to correlated risks.\n* **Monitoring and Adjustment**: Continuously monitor price movements post-execution. If one pair moves significantly against the position, consider adjusting the other to maintain a balanced risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two currency pairs move in relation to each other."
        }
      ],
      "whyThisMatters": "Effective simultaneous execution can enhance profitability while mitigating the risks associated with correlated pairs.",
      "realLifeExample": "Executing a long position on EURUSD at 1.0850 and GBPUSD at 1.2950 during the London session, ensuring total exposure remains within risk limits.",
      "commonMistake": "Failing to assess the correlation before executing both trades, leading to unintentional overexposure.",
      "quickNote": "Maintain a correlation threshold of 0.7 when executing EURUSD and GBPUSD simultaneously.",
      "mentorText": "You must treat these trades as a single entity. If one pair moves against you, adjust the other to keep your overall exposure in check.",
      "mentorAnalogy": "Think of this like a pilot managing fuel for two engines; if one engine burns more fuel, you must adjust the other to maintain balance and avoid a crash."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Understanding Currency Pair Correlation",
    "label": "Forex Track",
    "body": "### Core Scenario: Correlation Analysis\nUnderstanding the correlation between EURUSD and GBPUSD is essential for effective multi-pair execution management. This card details **how to assess and utilize correlation metrics**.\n\n* **Correlation Calculation**: Use historical price data to calculate the correlation coefficient. A value close to 1 indicates strong positive correlation, while a value close to -1 indicates strong negative correlation.\n* **Impact of Economic Events**: Analyze how economic indicators, such as U.S. Non-Farm Payrolls or UK GDP reports, affect both pairs. Recognize that simultaneous movements can amplify risk.\n* **Correlation Monitoring Tools**: Utilize trading platforms that provide correlation matrices. Regularly check these tools to stay informed about changing correlations, especially during high-impact news events.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Matrix",
          "definition": "A table that displays the correlation coefficients between multiple currency pairs."
        }
      ],
      "whyThisMatters": "Understanding correlation allows traders to make informed decisions, reducing the risk of simultaneous trades resulting in compounded losses.",
      "realLifeExample": "Analyzing a correlation coefficient of 0.85 between EURUSD and GBPUSD during a U.S. economic release, indicating a high likelihood of simultaneous movement.",
      "commonMistake": "Overlooking the impact of macroeconomic events on currency pair correlations, leading to unhedged risks.",
      "quickNote": "Regularly calculate and monitor the correlation coefficient between EURUSD and GBPUSD to inform your trading strategy.",
      "mentorText": "You need to know how these pairs move together. If one is rising, the other likely will too, and that can either be an opportunity or a risk.",
      "mentorAnalogy": "Consider this like a tightrope walker; if one foot moves too far to one side, the other must compensate to maintain balance."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Position Sizing for EURUSD and GBPUSD",
    "label": "Forex Track",
    "body": "### Core Scenario: Position Sizing Techniques\nProper position sizing is critical when trading EURUSD and GBPUSD to ensure balanced exposure. This card explores **specific techniques for calculating position sizes**.\n\n* **Risk Percentage Method**: Determine the maximum risk per trade as a percentage of your account balance. For instance, if your account is $10,000 and you set a risk limit of 1%, your maximum loss per trade should not exceed $100.\n* **Lot Size Calculation**: Calculate the appropriate lot size based on the distance to your stop loss. For example, if your stop loss is 50 pips away, and you are risking $100, your lot size should be 2 standard lots for EURUSD (where 1 lot = $10 per pip).\n* **Balancing Exposure**: When executing both pairs, ensure that the total risk across EURUSD and GBPUSD does not exceed your predetermined risk threshold. Adjust lot sizes accordingly to maintain this balance.",
    "context": {
      "keyTerms": [
        {
          "term": "Lot Size",
          "definition": "The number of units of a currency pair traded in one transaction."
        }
      ],
      "whyThisMatters": "Effective position sizing prevents overexposure and ensures that losses remain manageable across correlated trades.",
      "realLifeExample": "Calculating a position size of 2 lots for EURUSD and 1.5 lots for GBPUSD, ensuring total risk does not exceed $200 with a 50-pip stop loss.",
      "commonMistake": "Neglecting to adjust position sizes when trading multiple correlated pairs, leading to excessive risk exposure.",
      "quickNote": "Always calculate position size based on your risk tolerance and stop loss distance for both EURUSD and GBPUSD.",
      "mentorText": "You must size your positions carefully. If you overcommit on both pairs, a small move against you can lead to significant losses.",
      "mentorAnalogy": "Think of this like a chef balancing ingredients in a recipe; too much of one can spoil the dish, just as too much exposure can ruin your account."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Timing Trades for EURUSD and GBPUSD",
    "label": "Forex Track",
    "body": "### Core Scenario: Optimal Trade Timing\nTiming is crucial when executing trades in EURUSD and GBPUSD to maximize potential gains while minimizing risk. This card outlines **strategies for effective trade timing**.\n\n* **Session Overlap Analysis**: Identify key trading sessions, particularly the overlap between London and New York. This period typically sees increased volatility and liquidity, making it ideal for executing trades.\n* **Economic Calendar Utilization**: Monitor the economic calendar for high-impact news releases that affect both pairs. Execute trades shortly after these releases to capitalize on market movements while being mindful of potential whipsaws.\n* **Technical Indicator Confirmation**: Use technical indicators, such as moving averages or RSI, to confirm entry points. For instance, entering a long position in EURUSD at 1.0900 after a bullish crossover on the 1-hour chart during the London session can enhance trade success.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major trading sessions coincide, resulting in increased market activity."
        }
      ],
      "whyThisMatters": "Effective timing can significantly enhance trade outcomes, allowing traders to capitalize on market volatility and liquidity.",
      "realLifeExample": "Entering a long position on GBPUSD at 1.3000 during the London-New York overlap after a positive UK economic report, with EURUSD also showing bullish momentum.",
      "commonMistake": "Entering trades outside of optimal session overlaps, leading to lower liquidity and increased slippage.",
      "quickNote": "Focus on executing trades during the London-New York overlap for optimal timing.",
      "mentorText": "Timing your trades is just as important as the trades themselves. Execute during peak hours to maximize your chances of success.",
      "mentorAnalogy": "Consider this like a conductor timing the orchestra; if the timing is off, the performance suffers, just as poor timing can lead to missed opportunities in trading."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Market Sentiment Analysis for Forex Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: Sentiment Impact on EURUSD and GBPUSD\nMarket sentiment serves as a critical driver for price movements in correlated currency pairs like EURUSD and GBPUSD. This card outlines **how to analyze sentiment and integrate it into your execution strategy**.\n\n* **Sentiment Indicators**: Utilize tools such as the Commitment of Traders (COT) report and retail sentiment data to gauge market positioning. A bullish sentiment in EURUSD may indicate a potential upward movement, while bearish sentiment in GBPUSD could suggest caution.\n* **Correlation Analysis**: Monitor the correlation coefficient between EURUSD and GBPUSD. A high positive correlation (e.g., 0.85) suggests that both pairs may move in tandem, influencing your entry and exit points.\n* **Execution Timing**: Align your trade entries with sentiment shifts, such as news releases or economic data. For instance, if the ECB signals a dovish stance, consider executing a short position in EURUSD while monitoring GBPUSD for similar reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular currency pair."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two currency pairs move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows for more informed execution decisions, reducing the risk of adverse movements in correlated pairs.",
      "realLifeExample": "During the ECB's announcement on interest rates, EURUSD rallied 50 pips to 1.1200, while GBPUSD remained stable at 1.3100. Analyzing sentiment pre-announcement could have informed a strategic entry.",
      "commonMistake": "Failing to account for sentiment shifts can lead to misaligned trades, especially when one pair reacts differently than expected.",
      "quickNote": "Integrate sentiment analysis to enhance execution strategies in correlated pairs.",
      "mentorText": "When assessing trades, always check the sentiment indicators. They can provide insights that charts alone may not reveal. If the market is overwhelmingly bullish on EURUSD, it might be wise to align your GBPUSD trades accordingly.",
      "mentorAnalogy": "Think of market sentiment like weather patterns; just as a storm can change your flight plans, shifts in sentiment can drastically alter the landscape of your trades."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "concept",
    "title": "Hedging Strategies for EURUSD and GBPUSD",
    "label": "Forex Track",
    "body": "### Core Scenario: Implementing Hedging Techniques\nHedging is a vital strategy for managing risk when executing trades in correlated pairs such as EURUSD and GBPUSD. This card outlines **effective hedging techniques to mitigate adverse price movements**.\n\n* **Direct Hedging**: Simultaneously open a position in the opposite direction of your primary trade. For example, if you are long EURUSD at 1.1200, consider placing a short GBPUSD position at 1.3100 to offset potential losses from adverse movements in either pair.\n* **Cross-Hedging**: Use a correlated asset to hedge against risk. If EURUSD is moving against your position, a short position in GBPUSD can help balance your overall exposure, especially if both pairs are positively correlated.\n* **Dynamic Adjustments**: Continuously monitor your hedged positions and adjust as necessary. If EURUSD moves significantly in your favor, consider reducing the size of your hedge to lock in profits while maintaining some protection against GBPUSD volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Direct Hedging",
          "definition": "Opening a position in the opposite direction of an existing position to mitigate risk."
        },
        {
          "term": "Cross-Hedging",
          "definition": "Using a correlated asset to hedge against potential losses in another asset."
        }
      ],
      "whyThisMatters": "Implementing effective hedging strategies protects against unforeseen market movements, ensuring capital preservation.",
      "realLifeExample": "If EURUSD trades long at 1.1200 and GBPUSD is short at 1.3100, a 30-pip adverse move in EURUSD can be offset by gains in GBPUSD, maintaining overall portfolio stability.",
      "commonMistake": "Over-hedging can lead to reduced profit potential; ensure that hedges are proportionate to the risk exposure.",
      "quickNote": "Utilize hedging strategies to safeguard against adverse market movements in correlated pairs.",
      "mentorText": "Always have a hedge in place when trading correlated pairs. It’s like wearing a seatbelt; it won’t prevent an accident, but it can minimize the damage.",
      "mentorAnalogy": "Hedging is akin to a pilot checking their emergency protocols; it’s about being prepared for unexpected turbulence in the market."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "practice",
    "title": "Practice Scenarios for EURUSD and GBPUSD Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: Simulating Trade Execution\nEngaging in practice scenarios allows for the application of execution principles in EURUSD and GBPUSD trades. This card focuses on **realistic trading simulations to reinforce learning**.\n\n* **Scenario Setup**: Create a trading plan for a simultaneous execution of EURUSD and GBPUSD based on current market conditions. Define entry points, stop-loss levels, and take-profit targets for both pairs.\n* **Execution Simulation**: Execute the trades in a simulated environment, monitoring price movements and sentiment indicators. Adjust positions dynamically based on market reactions to economic data releases.\n* **Review and Adjust**: After the simulation, analyze the outcomes of your trades. Identify what worked, what didn’t, and how hedging strategies could have been better implemented to manage risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Plan",
          "definition": "A detailed outline of the strategy, including entry and exit points, for executing trades."
        },
        {
          "term": "Simulated Environment",
          "definition": "A practice setting that mimics real market conditions without financial risk."
        }
      ],
      "whyThisMatters": "Practicing execution scenarios builds confidence and enhances decision-making skills in real market conditions.",
      "realLifeExample": "In a simulated environment, executing a long position in EURUSD at 1.1200 and a short in GBPUSD at 1.3100 during a high-impact news release can illustrate the importance of timing and sentiment analysis.",
      "commonMistake": "Neglecting to adjust trades based on changing market conditions can lead to significant losses; always be prepared to adapt.",
      "quickNote": "Simulate trade executions to reinforce strategic principles and improve decision-making.",
      "mentorText": "Practice makes perfect. Use simulations to test your strategies and refine your execution skills before hitting the live market.",
      "mentorAnalogy": "Think of trading practice like a flight simulator; it prepares you for the real thing without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are preparing to execute a long position in EURUSD and a short position in GBPUSD. What is the first step you should take?",
      "options": [
        {
          "id": "0",
          "text": "Analyze market sentiment and set your entry points.",
          "isCorrect": true,
          "feedback": "Correct. Analyzing sentiment is crucial for determining the right entry points."
        },
        {
          "id": "1",
          "text": "Place the trades immediately without analysis.",
          "isCorrect": false,
          "feedback": "Incorrect. Immediate execution without analysis can lead to poor decision-making."
        },
        {
          "id": "2",
          "text": "Set stop-loss levels after placing the trades.",
          "isCorrect": false,
          "feedback": "Incorrect. Stop-loss levels should be determined before executing trades."
        },
        {
          "id": "3",
          "text": "Only focus on EURUSD and ignore GBPUSD.",
          "isCorrect": false,
          "feedback": "Incorrect. Both pairs must be considered due to their correlation."
        }
      ]
    },
    "visualKey": "multi-pair-exec-grid"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Multi-Pair Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: Key Takeaways for Multi-Pair Execution\nExecuting trades in correlated pairs like EURUSD and GBPUSD requires a disciplined approach to risk management. This card summarizes **the essential strategies for effective multi-pair execution**.\n\n* **Correlation Awareness**: Always assess the correlation between EURUSD and GBPUSD before executing trades. A strong correlation can amplify risk, necessitating careful position sizing.\n* **Sentiment Integration**: Incorporate market sentiment analysis into your execution strategy. Understanding the prevailing sentiment can guide entry and exit decisions, enhancing trade outcomes.\n* **Hedging Techniques**: Utilize hedging strategies to protect against adverse price movements. Implement direct and cross-hedging methods to manage risk effectively while executing trades in both pairs.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade based on risk management principles."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Summarizing these key concepts reinforces the importance of a structured approach to executing trades in correlated pairs.",
      "realLifeExample": "A trader executing a long EURUSD and short GBPUSD simultaneously should monitor both pairs closely, adjusting positions based on correlation and sentiment shifts.",
      "commonMistake": "Ignoring the correlation between pairs can lead to overexposure and increased risk; always factor this into your strategy.",
      "quickNote": "Reinforce multi-pair execution strategies to minimize risk and enhance trading performance.",
      "mentorText": "Review these key concepts regularly. They are your foundation for executing trades in correlated pairs without overexposure.",
      "mentorAnalogy": "Executing trades in correlated pairs is like managing a balanced diet; too much of one thing can lead to imbalance and risk."
    },
    "taskData": null,
    "visualKey": "multi-pair-exec-grid"
  }
];
