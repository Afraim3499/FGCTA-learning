import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Logging COMEX Open Gold Slippage",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C1 -->\n### Core Scenario: COMEX Open Slippage Documentation\nDocumenting slippage during the COMEX open is essential to evaluate its impact on trading strategies. This card outlines **how to accurately log slippage occurrences to refine execution strategies**.\n\n* **Slippage Identification**: Record the expected entry and exit prices versus actual executed prices during the COMEX open. For example, if you planned to enter a long position on gold at $1,800 but executed at $1,802, document the $2 slippage.\n* **Time Stamping**: Note the exact time of each trade execution. Slippage can vary significantly within the first 15 minutes of the COMEX open, so precise timing is crucial for analysis.\n* **Impact Assessment**: After documenting slippage, assess how it affected your overall trade outcome. For instance, if a $2 slippage resulted in a loss of $200 on a 100-ounce position, include this in your analysis to adjust future strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding slippage at the COMEX open allows traders to adjust their strategies and manage risk more effectively.",
      "realLifeExample": "On a recent COMEX open, you attempted to buy gold at $1,805 but experienced slippage, executing at $1,807. Documenting this slippage helps analyze its impact on your profit margin.",
      "commonMistake": "Failing to record slippage consistently leads to a lack of awareness regarding execution quality.",
      "quickNote": "Log every instance of slippage to refine future execution strategies.",
      "mentorText": "When you see slippage, document it immediately. It’s not just a number; it’s a lesson in execution quality. If you entered at $1,805 but got filled at $1,807, write it down and analyze it later.",
      "mentorAnalogy": "Think of logging slippage like a pilot recording altitude changes during takeoff. Each deviation from the expected path informs future flight plans."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Documenting Overnight Swap Rates",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C2 -->\n### Core Scenario: Overnight Swap Rate Logging\nLogging overnight swap rates is critical for assessing the cost of holding gold positions over time. This card details **how to systematically document and analyze swap rates to inform long-term trading decisions**.\n\n* **Daily Rate Recording**: Capture the overnight swap rate for each position at the end of the trading day. For example, if the swap rate for holding gold overnight is -$1.50 per ounce, document this for each day you hold the position.\n* **Cumulative Impact Analysis**: Calculate the cumulative effect of swap rates on your positions. If you hold 10 ounces of gold for 30 days at -$1.50, note the total cost of $450 in your journal.\n* **Strategic Adjustments**: Use the documented swap rates to evaluate whether to hold or close positions. If swap costs exceed potential gains, consider adjusting your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Swap Rate",
          "definition": "The cost or credit incurred for holding a position overnight in a leveraged trading account."
        }
      ],
      "whyThisMatters": "Accurate logging of swap rates enables traders to make informed decisions about position holding durations and associated costs.",
      "realLifeExample": "You held a gold position of 15 ounces for 14 days, incurring a swap rate of -$1.20 per ounce. Documenting this helps you assess whether the position was worth the cost.",
      "commonMistake": "Neglecting to log swap rates can lead to unexpected costs that erode trading profits.",
      "quickNote": "Document overnight swap rates daily to assess their impact on your trading strategy.",
      "mentorText": "Every day, check and log your swap rates. If you're holding gold and the rate is -$1.20, that’s a cost you need to factor into your overall strategy. Don’t let it catch you off guard.",
      "mentorAnalogy": "Logging swap rates is like a chef recording ingredient costs; without knowing the expense, you can’t price your dish accurately."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Analyzing Volatility Wick Reactions",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C3 -->\n### Core Scenario: Volatility Wick Reaction Logging\nLogging reactions to volatility wicks is essential for identifying trading patterns in gold. This card outlines **how to document and analyze these reactions to enhance future trading decisions**.\n\n* **Wick Identification**: Record every instance of volatility wicks on your charts. For example, if gold spikes to $1,820 and quickly retracts to $1,810, note the wick length and the reaction time.\n* **Reaction Assessment**: Analyze your response to these wicks. Did you enter a position too quickly? Document whether your reaction was based on fear or opportunity, and the outcome of that decision.\n* **Pattern Recognition**: Over time, look for patterns in your reactions to volatility wicks. If you consistently react negatively to wicks, consider strategies to improve your emotional response.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Wick",
          "definition": "A price spike on a chart that quickly retracts, often indicating market indecision."
        }
      ],
      "whyThisMatters": "Understanding your reactions to volatility wicks can help refine emotional discipline and improve trading outcomes.",
      "realLifeExample": "During a recent trading session, gold experienced a volatility wick reaching $1,825 before dropping back to $1,800. Documenting your decision to enter a position at $1,815 provides insights for future trades.",
      "commonMistake": "Failing to log reactions to volatility wicks can lead to repeated emotional trading mistakes.",
      "quickNote": "Log every volatility wick and your reaction to identify emotional trading patterns.",
      "mentorText": "When you see a volatility wick, take a moment to log your reaction. Did you panic or seize the opportunity? This reflection is crucial for improving your trading discipline.",
      "mentorAnalogy": "Think of logging volatility wick reactions like a surgeon documenting patient responses during a procedure; each reaction informs future practices."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Understanding Gold Market Dynamics",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C4 -->\n### Core Scenario: Gold Market Dynamics Documentation\nDocumenting the dynamics of the gold market is vital for understanding price movements. This card explains **how to log macroeconomic factors that influence gold trading decisions**.\n\n* **Macroeconomic Event Logging**: Record significant macroeconomic events, such as interest rate changes or geopolitical tensions. For instance, if the Federal Reserve announces a rate hike, note the date and potential impact on gold prices.\n* **Price Reaction Analysis**: Analyze how gold prices reacted to these events. If gold prices dropped from $1,800 to $1,750 after a rate hike, document this reaction and your trading decisions during that period.\n* **Trend Correlation**: Over time, correlate macroeconomic events with price trends. If you notice that gold consistently rises during periods of geopolitical instability, log this pattern to inform future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Macroeconomic Factors",
          "definition": "Economic indicators and events that influence market conditions and asset prices."
        }
      ],
      "whyThisMatters": "Understanding market dynamics allows traders to anticipate price movements and adjust strategies accordingly.",
      "realLifeExample": "After logging a significant geopolitical event, you observed gold prices increase from $1,780 to $1,800. Documenting this helps refine your strategy for similar future events.",
      "commonMistake": "Ignoring macroeconomic factors can lead to missed opportunities and unexpected losses.",
      "quickNote": "Log macroeconomic events and their impacts on gold prices to enhance strategic trading decisions.",
      "mentorText": "Every time a major economic event occurs, write it down. How did gold react? This information is crucial for understanding market behavior and refining your strategy.",
      "mentorAnalogy": "Logging market dynamics is like an architect studying environmental factors before designing a building; understanding the landscape is essential for successful outcomes."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Assessing Risk Management in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C5 -->\n### Core Scenario: Risk Management Logging\nEffective risk management is critical in gold trading to safeguard capital and adhere to your trading plan. This card teaches **how to systematically document risk management strategies for gold positions**.\n\n* **Position Sizing Protocol**: Record the size of each gold position relative to your total capital. For example, if your account balance is $50,000 and you enter a position of 1 ounce of gold at $1,800, document the percentage of your capital at risk.\n* **Stop-Loss Implementation**: Log the specific stop-loss levels set for each trade. If you enter a long position at $1,800, and set a stop-loss at $1,780, ensure this is recorded alongside the rationale for that level.\n* **Risk-Reward Ratio Assessment**: Document the calculated risk-reward ratio for each trade. For instance, if you aim for a target of $1,850 with a stop-loss at $1,780, note the ratio of 2:1, justifying the potential reward against the risk taken.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The method of determining the amount of capital allocated to a specific trade."
        },
        {
          "term": "Stop-Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Documenting risk management strategies ensures compliance with your trading plan and enhances decision-making consistency.",
      "realLifeExample": "A trader logs a long position in gold at $1,800 with a stop-loss at $1,780, documenting a risk-reward ratio of 2:1 targeting $1,850.",
      "commonMistake": "Failing to log stop-loss levels, which can lead to emotional decision-making during market fluctuations.",
      "quickNote": "Always document risk parameters to maintain discipline and adherence to your trading plan.",
      "mentorText": "When you enter a trade, think of it as a contract with yourself. You must outline your risk clearly, just like a pilot checks their flight plan before takeoff.",
      "mentorAnalogy": "Logging risk management in trading is akin to an architect documenting safety protocols in a building design; both require precise planning to avoid catastrophic failures."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "concept",
    "title": "Logging Market Conditions for Gold",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C6 -->\n### Core Scenario: Market Condition Documentation\nUnderstanding the market conditions that influence gold prices is essential for evaluating trade performance. This card teaches **how to document relevant market conditions affecting gold trading**.\n\n* **Economic Indicators**: Record key economic data releases, such as U.S. Non-Farm Payrolls or inflation rates, that could impact gold prices. For instance, if the U.S. unemployment rate drops, note the potential bullish sentiment for gold.\n* **Geopolitical Events**: Log significant geopolitical events, such as tensions in the Middle East or changes in U.S. monetary policy, that may affect gold's safe-haven status. Document the date and the event's potential impact on market sentiment.\n* **Technical Analysis Factors**: Include observations on technical indicators, such as moving averages or RSI levels, that influenced your trading decisions. For example, if gold breaks above a 200-day moving average, note this as a bullish signal in your journal.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide insight into the economic performance and can influence market sentiment."
        },
        {
          "term": "Geopolitical Events",
          "definition": "Occurrences in global politics that can impact financial markets."
        },
        {
          "term": "Technical Analysis",
          "definition": "The analysis of price movements and trading volumes to forecast future price movements."
        }
      ],
      "whyThisMatters": "Documenting market conditions allows for a nuanced analysis of trade performance and helps identify patterns over time.",
      "realLifeExample": "A trader notes that on March 5th, the U.S. Non-Farm Payrolls report showed stronger-than-expected job growth, leading to a bullish outlook on gold prices.",
      "commonMistake": "Neglecting to log market conditions, which can lead to a lack of context in future performance evaluations.",
      "quickNote": "Always document the market conditions that influenced your trades for comprehensive analysis.",
      "mentorText": "Think of market conditions as the weather report for your trades. Just as a pilot checks the forecast before flying, you must assess the market climate before entering a position.",
      "mentorAnalogy": "Logging market conditions in trading is like a meteorologist recording weather patterns; both require careful observation to predict future outcomes."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "practice",
    "title": "Practical Gold Journaling Exercises",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C7 -->\n### Core Scenario: Journaling Application\nEngaging in practical exercises reinforces the skills necessary for effective post-market reviews. This card provides **hands-on activities to apply gold journaling techniques**.\n\n* **Scenario Simulation**: Create a mock trading scenario where you log trades made under specific market conditions. For instance, simulate a trading day where gold prices fluctuate due to an economic report, documenting each entry and exit.\n* **Review and Reflect**: After completing your mock trades, review your journal entries. Identify patterns in your decision-making process and assess whether your risk management strategies were adhered to.\n* **Peer Review Session**: Share your journal with a peer or mentor for feedback. Discuss the logged entries and receive insights on areas for improvement or alternative strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Mock Trading",
          "definition": "Simulated trading activities that allow for practice without financial risk."
        },
        {
          "term": "Peer Review",
          "definition": "A process where colleagues evaluate each other's work for feedback and improvement."
        }
      ],
      "whyThisMatters": "Practical exercises solidify the journaling process, enhancing your ability to analyze and learn from past trades.",
      "realLifeExample": "You simulate a trading day where gold fluctuates from $1,800 to $1,850, logging each trade and the rationale behind your decisions.",
      "commonMistake": "Failing to engage in mock trading exercises, which limits the development of effective journaling habits.",
      "quickNote": "Practice journaling through simulations to enhance your analytical skills.",
      "mentorText": "Consider these exercises as your training ground. Just as athletes practice drills, you must refine your journaling technique to excel in real trading scenarios.",
      "mentorAnalogy": "Practical journaling exercises are like a flight simulator for pilots; they provide a risk-free environment to hone skills before actual market engagement."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a mock trading day, you log a trade where you entered gold at $1,800 and exited at $1,820. What key aspect should you document in your journal?",
      "options": [
        {
          "id": "0",
          "text": "The reason for entering the trade based on market conditions.",
          "isCorrect": true,
          "feedback": "Documenting the rationale for your entry helps in understanding your decision-making process."
        },
        {
          "id": "1",
          "text": "The exact time of day you entered the trade.",
          "isCorrect": false,
          "feedback": "While timing can be relevant, the rationale behind the trade is more critical for analysis."
        },
        {
          "id": "2",
          "text": "The color of the candlestick at the time of entry.",
          "isCorrect": false,
          "feedback": "The candlestick color is less important than the reasoning behind your trading decision."
        },
        {
          "id": "3",
          "text": "The price of gold at the end of the trading session.",
          "isCorrect": false,
          "feedback": "While this is useful information, it does not provide insight into your decision-making process."
        }
      ]
    },
    "visualKey": "trade-journal-mockup"
  },
  {
    "type": "summary",
    "title": "Summarizing Key Insights from Gold Journaling",
    "label": "Gold Track",
    "body": "<!-- M8.6-gold-C8 -->\n### Core Scenario: Insights Compilation\nSummarizing insights from your gold journaling is essential for continuous improvement. This card highlights **the importance of detailed logging for performance analysis**.\n\n* **Performance Metrics Overview**: Compile key metrics from your journal, such as win rates and average risk-reward ratios. For example, if your journal shows a win rate of 60% with an average risk-reward ratio of 2:1, document these insights for future reference.\n* **Behavioral Analysis**: Reflect on your mental state during trades. If you notice patterns of anxiety or overconfidence, log these observations to adjust your psychological approach in future trades.\n* **Actionable Adjustments**: Based on your summaries, create a list of actionable adjustments to your trading plan. If you find that trades made during high volatility yield better results, note this and consider adjusting your strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trading strategies."
        },
        {
          "term": "Behavioral Analysis",
          "definition": "The study of psychological factors that influence trading decisions."
        },
        {
          "term": "Actionable Adjustments",
          "definition": "Specific changes made to improve trading strategies based on analysis."
        }
      ],
      "whyThisMatters": "Summarizing insights allows for a structured review process, facilitating ongoing improvement in trading strategies.",
      "realLifeExample": "After reviewing your journal, you find that trades executed during U.S. market hours have a win rate of 70%, prompting a strategy adjustment to focus on this time frame.",
      "commonMistake": "Neglecting to summarize insights, which can lead to missed opportunities for strategic improvements.",
      "quickNote": "Regularly summarize your journal entries to identify patterns and enhance your trading strategy.",
      "mentorText": "Think of summarizing your insights as a debriefing after a flight. You must analyze what went well and what needs improvement to ensure future success.",
      "mentorAnalogy": "Summarizing insights from your journal is like a coach reviewing game footage; both processes aim to refine performance through critical analysis."
    },
    "taskData": null,
    "visualKey": "trade-journal-mockup"
  }
];
