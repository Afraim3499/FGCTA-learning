import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundational Execution Protocols for High-Impact News",
    "label": "Core Track",
    "body": "### Core Protocol: Execution Under News Events\nNavigating high-impact news events requires a structured approach to execution. This card details **the essential protocols for effective trade management before, during, and after news releases**.\n\n* **Pre-Event Preparation**: Establish a clear plan that includes identifying the news event's expected impact and adjusting your trading strategy accordingly. Ensure that your position sizes reflect the increased volatility.\n* **Real-Time Monitoring**: During the news release, maintain active monitoring of price action and market sentiment. Use a reliable news feed to stay updated on any unexpected outcomes that may affect your trades.\n* **Post-Event Review**: After the news event, conduct a thorough analysis of your execution and market behavior. Document your observations to refine your strategy for future news events.",
    "visualKey": "news-event-protocol",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Pre-News Event Preparation Strategies",
    "label": "Core Track",
    "body": "### Core Strategy: Analyzing Market Sentiment Pre-News\nEffective positioning before a news event can significantly influence trade outcomes. This card explains **how to analyze market sentiment and prepare your trades in advance**.\n\n* **Sentiment Analysis**: Utilize tools such as economic calendars and sentiment indicators to gauge market expectations. For example, if the Non-Farm Payroll report is due, assess the consensus forecast and previous data to inform your bias.\n* **Setting Alerts**: Configure price alerts around key levels that may be impacted by the news. For instance, set alerts for EURUSD at 1.0850 and 1.0900 to monitor potential breakout points.\n* **Adjusting Stop-Loss Orders**: Modify your stop-loss orders to account for increased volatility. Consider widening your stops to avoid premature exits during the initial price swings following the news release.",
    "visualKey": "news-event-protocol",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Executing Trades During News Releases",
    "label": "Core Track",
    "body": "### Core Execution: Strategies for News Release Volatility\nExecuting trades during news releases demands precision and timing. This card outlines **the strategies for navigating volatility effectively**.\n\n* **Timing Your Entry**: Wait for the initial volatility to settle before executing trades. For example, if the USD CPI data is released at 8:30 AM EST, observe the first 5-10 minutes for erratic price movements before entering.\n* **Liquidity Considerations**: Be aware that liquidity may diminish during high-impact news, leading to slippage. Ensure you are trading with a broker that provides adequate liquidity during these times to minimize execution risk.\n* **Trade Size Management**: Scale down your position sizes during news events to mitigate risk. For instance, if your normal trade size is 1 lot, consider reducing it to 0.5 lots during a major announcement.",
    "visualKey": "news-event-protocol",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Post-News Event Analysis Techniques",
    "label": "Core Track",
    "body": "### Core Analysis: Evaluating Market Reactions Post-News\nAnalyzing market reactions after news events is crucial for refining trading strategies. This card discusses **how to assess outcomes and volatility effectively**.\n\n* **Market Reaction Assessment**: Evaluate how the market responded to the news by analyzing price movement and volume. For example, if the GBP/USD surged 150 pips after a positive GDP report, assess the sustainability of this move.\n* **Volatility Measurement**: Use volatility indicators such as Average True Range (ATR) to gauge post-event market conditions. This helps in determining whether to maintain or adjust your positions.\n* **Strategy Refinement**: Document your findings and adjust your trading plan based on the analysis. If a specific news event consistently leads to certain price behaviors, incorporate these insights into your future trading strategies.",
    "visualKey": "news-event-protocol",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Risk Management During News Events",
    "label": "Core Track",
    "body": "### Core Scenario: Risk Management Protocols\nEffective risk management during high-impact news events is essential to safeguard capital. This card outlines **specific strategies to mitigate risk exposure when trading around news releases**.\n\n* **Position Sizing Adjustments**: Reduce position sizes to 50% of your normal allocation before a news event. This limits potential losses while maintaining exposure to market movement.\n* **Stop-Loss Placement**: Set stop-loss orders at least 20 pips beyond the expected volatility range of the news event. This prevents premature exits due to market whipsaws.\n* **Pre-Event Capital Allocation**: Allocate no more than 1% of your total capital to trades initiated during the news event. This ensures that a single adverse outcome does not significantly impact your overall portfolio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Implementing robust risk management strategies during news events protects your capital from extreme volatility and unexpected market reactions.",
      "realLifeExample": "During the Non-Farm Payroll (NFP) release, EURUSD spiked 50 pips in both directions. A trader with a 1% capital allocation and a well-placed stop-loss would have mitigated losses effectively.",
      "commonMistake": "Failing to adjust position sizes or neglecting stop-loss placements, leading to excessive losses during volatile market conditions.",
      "quickNote": "Adjust position sizes and stop-loss placements to manage risk effectively during news events.",
      "mentorText": "When trading around news, always remember to scale down your position size. It’s about protecting your capital first, not chasing profits.",
      "mentorAnalogy": "Think of risk management like a parachute for a skydiver. Without it, the descent can be fatal; with it, you can navigate safely through turbulence."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Timing Your Trades Around News Events",
    "label": "Core Track",
    "body": "### Core Scenario: Trade Timing Strategy\nTiming is critical when executing trades around news events. This card focuses on **optimal entry and exit points to maximize trade efficiency**.\n\n* **Pre-Event Entry**: Enter trades no earlier than 5 minutes before the news release, ensuring you are positioned to react to immediate market movements.\n* **Immediate Post-Event Reaction**: Wait for the first 5 minutes after the news release to gauge market reaction before entering trades. This allows you to avoid initial volatility spikes.\n* **Exit Strategy**: Set profit targets based on the average price movement observed during similar past news events. For instance, if the last three NFP releases moved an average of 30 pips, set targets accordingly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Pre-Event Entry",
          "definition": "Entering a trade shortly before a scheduled news release."
        },
        {
          "term": "Post-Event Reaction",
          "definition": "Market behavior immediately following the release of news data."
        }
      ],
      "whyThisMatters": "Understanding timing allows traders to capitalize on market volatility without exposing themselves to unnecessary risk.",
      "realLifeExample": "During the FOMC rate decision, a trader entered a long position on GBPUSD 5 minutes before the announcement and exited 10 minutes after, capturing a 40-pip gain.",
      "commonMistake": "Entering trades too early or too late, resulting in missed opportunities or increased risk exposure.",
      "quickNote": "Optimize trade timing by entering shortly before and waiting after news releases to assess market reactions.",
      "mentorText": "Timing your trades is like a sprinter waiting for the starting gun. You need to be ready, but jumping the gun can cost you the race.",
      "mentorAnalogy": "Consider a chef timing the addition of ingredients. Adding too early can spoil the dish, while waiting too long can miss the perfect flavor."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Liquidity Considerations in News Trading",
    "label": "Core Track",
    "body": "### Core Scenario: Liquidity Assessment\nLiquidity plays a vital role in trade execution during news events. This card examines **how to assess and adapt to liquidity conditions**.\n\n* **Pre-Event Liquidity Check**: Analyze the order book and recent volume data to determine liquidity levels before the news release. Low liquidity may indicate higher slippage risk.\n* **Adjusting Trade Size**: In low liquidity conditions, reduce trade sizes by 25% to minimize slippage and ensure execution at desired prices.\n* **Post-Event Liquidity Monitoring**: After the news release, observe liquidity levels for at least 10 minutes. Avoid executing large orders until liquidity stabilizes to prevent excessive slippage.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price at which the trade is executed."
        }
      ],
      "whyThisMatters": "Understanding liquidity dynamics during news events helps traders execute trades more effectively and avoid unexpected costs.",
      "realLifeExample": "During the ECB interest rate decision, EURUSD experienced a liquidity drop, causing slippage of 10 pips on a large order. A trader who adjusted their order size avoided this issue.",
      "commonMistake": "Ignoring liquidity assessments and executing large trades during low liquidity periods, leading to significant slippage.",
      "quickNote": "Always assess liquidity before and after news events to ensure effective trade execution.",
      "mentorText": "Liquidity is your friend during news events. Always check the order book; it’s like knowing the traffic conditions before you hit the road.",
      "mentorAnalogy": "Think of liquidity like water flow in a river. During a drought, the flow is weak, and navigating becomes difficult. In trading, low liquidity can create similar challenges."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Maintaining Emotional Discipline",
    "label": "Core Track",
    "body": "### Core Scenario: Emotional Control Techniques\nEmotional discipline is paramount during high-impact news events. This card outlines **techniques to maintain focus and composure under pressure**.\n\n* **Pre-Trade Visualization**: Spend 2 minutes visualizing your trade plan and potential outcomes before the news event. This mental rehearsal prepares you for various scenarios.\n* **Breathing Techniques**: Implement a 4-7-8 breathing technique to calm nerves: inhale for 4 seconds, hold for 7, and exhale for 8. Repeat this before executing trades to enhance focus.\n* **Post-Trade Reflection**: After the news event, take 5 minutes to review your emotional state during trading. Identify triggers that led to impulsive decisions to improve future performance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Discipline",
          "definition": "The ability to maintain a calm and rational mindset while trading."
        },
        {
          "term": "Visualization",
          "definition": "The practice of mentally rehearsing a trade scenario to prepare for execution."
        }
      ],
      "whyThisMatters": "Maintaining emotional discipline allows traders to make rational decisions rather than impulsive ones, especially during volatile market conditions.",
      "realLifeExample": "A trader who practiced breathing techniques before the NFP release was able to stay calm and execute a well-planned strategy, resulting in a 25-pip gain.",
      "commonMistake": "Failing to manage emotions, leading to impulsive trading decisions during high-stress news events.",
      "quickNote": "Employ visualization and breathing techniques to maintain emotional discipline during news trading.",
      "mentorText": "Stay calm and stick to your plan. Emotional reactions can derail even the best strategies; focus on your process.",
      "mentorAnalogy": "Consider a surgeon in the operating room. They must remain calm and focused regardless of the situation, ensuring that every decision is made with precision."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in News Execution",
    "label": "Core Track",
    "body": "### Core Scenario: Identifying Execution Pitfalls\nUnderstanding common pitfalls during news events is essential for maintaining discipline and effectiveness in trading. This card outlines **key mistakes traders make when reacting to news volatility**.\n\n* **Overreacting to Initial Volatility**: Traders often enter positions immediately after news releases, driven by emotional responses to price spikes. This can lead to poor entry points and increased risk exposure.\n* **Misinterpreting Data**: Without a clear understanding of the economic indicators, traders may misinterpret the implications of the news. Always cross-reference data with historical context and market sentiment before executing trades.\n* **Ignoring Pre-Defined Plans**: Deviating from a pre-established trading plan during news events can result in impulsive decisions. Stick to your strategy and avoid making changes based on fleeting market reactions.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "Rapid price movements in response to news events."
        },
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide insight into economic performance."
        }
      ],
      "whyThisMatters": "Recognizing these pitfalls allows traders to maintain a disciplined approach, reducing the likelihood of costly mistakes during high-impact news events.",
      "realLifeExample": "During the US Non-Farm Payroll report, EURUSD spiked 50 pips in the first minute. A trader who entered immediately without analysis faced a loss as the price retraced.",
      "commonMistake": "Failing to wait for confirmation before entering a trade based on initial volatility.",
      "quickNote": "Avoid emotional trading; stick to your plan during news events.",
      "mentorText": "When news hits, don’t let the chaos dictate your actions. Stick to your strategy and wait for clarity before you act.",
      "mentorAnalogy": "Think of a surgeon in the operating room; they don’t react to every sudden movement but follow a precise protocol to ensure the best outcome."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Synthesizing News Execution Strategies",
    "label": "Core Track",
    "body": "### Core Scenario: Cohesive Execution Strategies\nSynthesizing various execution strategies allows traders to adapt effectively to news events. This card focuses on **integrating multiple approaches for robust trade execution**.\n\n* **Combining Technical and Fundamental Analysis**: Use technical setups to identify entry and exit points while considering fundamental data to gauge market sentiment. This dual approach enhances decision-making accuracy.\n* **Establishing Clear Entry and Exit Criteria**: Define specific criteria for entering and exiting trades based on news outcomes. For example, set a rule to enter a long position only if the price breaks above a key resistance level post-news release.\n* **Utilizing Risk Management Techniques**: Implement stop-loss orders and position sizing strategies tailored to news volatility. For instance, widen stop-loss levels during high-impact news to account for potential price swings.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Analysis",
          "definition": "Analyzing price charts and patterns to inform trading decisions."
        },
        {
          "term": "Fundamental Analysis",
          "definition": "Evaluating economic data to predict market movements."
        }
      ],
      "whyThisMatters": "A cohesive strategy allows traders to navigate the complexities of news events with confidence, improving execution quality.",
      "realLifeExample": "Before the Fed interest rate announcement, a trader combined a bullish technical pattern with positive economic forecasts, executing a long position on USDJPY at 110.50, which rallied post-announcement.",
      "commonMistake": "Relying solely on one type of analysis without integrating others, leading to incomplete decision-making.",
      "quickNote": "Integrate technical and fundamental strategies for effective news execution.",
      "mentorText": "You need to blend your analysis techniques. Don’t just rely on one; use both to create a comprehensive strategy that guides your trades.",
      "mentorAnalogy": "Like an architect using both structural integrity and aesthetic design principles, you must combine various strategies to build a solid trading plan."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Reviewing Trade Performance Post-News",
    "label": "Core Track",
    "body": "### Core Scenario: Post-Event Trade Evaluation\nEvaluating trade performance after news events is critical for continuous improvement. This card outlines **how to systematically review trades executed during news releases**.\n\n* **Analyzing Entry and Exit Points**: Review the timing of your entries and exits relative to the news release. Did you enter too early or too late? Document the outcomes to identify patterns in your decision-making.\n* **Assessing Risk Management Effectiveness**: Evaluate whether your stop-loss and take-profit levels were appropriate given the volatility. Did they protect your capital effectively, or were they too tight?\n* **Identifying Emotional Responses**: Reflect on your emotional state during the trade. Did fear or greed influence your decisions? Keeping a trading journal can help track these emotions and their impact on your performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A record of trades that includes details about the rationale and outcomes."
        },
        {
          "term": "Volatility Assessment",
          "definition": "Evaluating price fluctuations to inform risk management."
        }
      ],
      "whyThisMatters": "Post-event analysis provides insights that enhance future execution, enabling traders to refine their strategies and decision-making processes.",
      "realLifeExample": "After trading the UK GDP release, a trader noted that entering at 1.3000 was premature; the price retraced before hitting their target. They adjusted their strategy for future releases.",
      "commonMistake": "Neglecting to review trades, leading to repeated mistakes and missed learning opportunities.",
      "quickNote": "Systematically review your trades to enhance future performance.",
      "mentorText": "After every trade, take a moment to dissect what happened. Understanding your decisions will help you avoid repeating mistakes.",
      "mentorAnalogy": "Like a pilot reviewing flight data after a flight, you must analyze your trades to ensure safe and effective future operations."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Developing a Personal News Playbook",
    "label": "Core Track",
    "body": "### Core Scenario: Creating Your News Playbook\nA personalized news playbook is essential for executing trades effectively during news events. This card guides you in **developing a structured approach based on your experiences and best practices**.\n\n* **Documenting Trade Scenarios**: Create a list of high-impact news events and corresponding strategies that worked well for you in the past. Include specific entry and exit points for each scenario.\n* **Incorporating Risk Management Protocols**: Define your risk tolerance levels for different news events. For example, establish a rule to reduce position size during particularly volatile reports like Non-Farm Payrolls.\n* **Regularly Updating the Playbook**: Treat your playbook as a living document. Regularly review and update it based on new insights, market conditions, and personal performance evaluations.",
    "context": {
      "keyTerms": [
        {
          "term": "Personal Playbook",
          "definition": "A customized guide outlining strategies and protocols for trading."
        },
        {
          "term": "Risk Tolerance",
          "definition": "The level of risk a trader is willing to accept in their trading activities."
        }
      ],
      "whyThisMatters": "A well-structured playbook enhances preparedness and consistency, allowing traders to navigate news events with confidence.",
      "realLifeExample": "A trader developed a playbook for major central bank announcements, detailing specific strategies for EURUSD, which improved their execution rate by 30% over three months.",
      "commonMistake": "Failing to personalize strategies, resulting in a generic approach that doesn’t suit individual trading styles.",
      "quickNote": "Create and maintain a personalized playbook to enhance your news trading execution.",
      "mentorText": "Your playbook is your roadmap. Make it detailed and personal; it should reflect your unique trading style and experiences.",
      "mentorAnalogy": "Like a chef perfecting their recipe book, your playbook should evolve with each trade, incorporating lessons learned to enhance your future results."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "concept",
    "title": "Mock Trading During News Events",
    "label": "Core Track",
    "body": "### Core Scenario: Simulating News Event Execution\nMock trading during high-impact news events allows traders to refine their execution strategies without financial risk. This card outlines **how to effectively engage in simulated trading scenarios** to enhance decision-making skills under pressure.\n\n* **Scenario Setup**: Create a mock trading environment that replicates real-time market conditions during a scheduled news release, such as the Non-Farm Payrolls (NFP) report. Use historical data to simulate price movements and volatility.\n* **Execution Protocol**: Establish clear entry and exit rules before the mock event. For example, decide to enter a position 5 minutes before the news release, with a stop-loss set 15 pips away from the entry price.\n* **Performance Review**: After the mock event, analyze the outcomes of each trade. Focus on execution timing, adherence to rules, and emotional responses to market fluctuations, adjusting strategies accordingly for future scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Mock Trading",
          "definition": "Simulated trading practice to improve execution strategies without financial risk."
        }
      ],
      "whyThisMatters": "Engaging in mock trading during news events sharpens execution skills, preparing traders for real market conditions.",
      "realLifeExample": "Simulate a mock trading session for the EURUSD during the NFP release, executing a long position at 1.1000 with a target of 1.1020 and a stop-loss at 1.0985.",
      "commonMistake": "Failing to adhere to pre-defined rules during mock trading, leading to unrealistic practice outcomes.",
      "quickNote": "Mock trading is essential for refining execution strategies under high-impact news conditions.",
      "mentorText": "In mock trading, treat every scenario as if it were real. Stick to your rules and analyze your performance critically afterward.",
      "mentorAnalogy": "Mock trading is like a flight simulator for pilots; it prepares you for real turbulence without the risk of crashing."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  },
  {
    "type": "practice",
    "title": "Summary of Execution Under News Events",
    "label": "Core Track",
    "body": "### Core Scenario: Reinforcing Execution Strategies\nThis card summarizes the essential execution strategies learned throughout the module, emphasizing the importance of structured approaches during news events. **Reinforcement of these strategies ensures preparedness for real trading scenarios.**\n\n* **Pre-Event Strategy**: Confirm market sentiment and establish a clear bias before the news release. For instance, if the consensus is bullish for USD, prepare to enter long positions on USD pairs.\n* **During Event Execution**: Maintain composure and adhere to your execution plan. If trading GBPUSD during the UK GDP release, enter a position only if the price moves within 10 pips of your pre-defined entry zone.\n* **Post-Event Analysis**: Conduct a thorough review of trades executed during the news event. Identify what worked and what didn’t, adjusting your strategy for future high-impact scenarios.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Strategy",
          "definition": "A structured plan for entering and exiting trades during high-impact news events."
        }
      ],
      "whyThisMatters": "Reinforcing execution strategies enhances a trader's ability to navigate volatile market conditions effectively.",
      "realLifeExample": "After the US CPI release, review trades on the USDJPY, noting a successful long entry at 110.50 with a target of 111.00 and a stop-loss at 110.30.",
      "commonMistake": "Neglecting to review trades post-event, missing critical insights for future improvements.",
      "quickNote": "Structured execution during news events is vital for capitalizing on volatility.",
      "mentorText": "After every news event, dissect your trades. Understand what decisions led to success or failure to refine your approach.",
      "mentorAnalogy": "Think of your execution strategy as a surgical procedure; every step must be precise to ensure a successful outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the most critical step to take before a high-impact news event?",
      "options": [
        {
          "id": "0",
          "text": "Establish a clear market bias and execution plan.",
          "isCorrect": true,
          "feedback": "Correct. Establishing a clear market bias helps in making informed decisions during the event."
        },
        {
          "id": "1",
          "text": "Wait for the news to be released before making any decisions.",
          "isCorrect": false,
          "feedback": "Incorrect. Waiting until after the news release can lead to missed opportunities and increased volatility."
        },
        {
          "id": "2",
          "text": "Avoid trading altogether during news events.",
          "isCorrect": false,
          "feedback": "Incorrect. While caution is necessary, having a structured plan allows for potential profit."
        },
        {
          "id": "3",
          "text": "Increase your position size to maximize potential gains.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size without a plan can lead to significant losses."
        }
      ]
    },
    "visualKey": "news-event-protocol"
  },
  {
    "type": "summary",
    "title": "News Event Execution Playbook Summary",
    "label": "Core Track",
    "body": "### Core Scenario: Advanced Execution Techniques\nMastering execution under news events requires advanced application of previously learned concepts. This card focuses on **integrating execution strategies with market analysis for optimal performance.**\n\n* **Market Correlation Analysis**: Assess how different instruments react to the same news event. For example, analyze how gold prices may move inversely to USD strength during an FOMC announcement.\n* **Dynamic Risk Management**: Adjust position sizes based on volatility forecasts. If anticipating high volatility during an employment report, reduce position sizes to mitigate risk while maintaining exposure.\n* **Feedback Loop Creation**: Establish a continuous feedback loop by documenting trades and outcomes during news events. Use this data to refine strategies and improve execution precision over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Risk Management",
          "definition": "Adjusting risk parameters based on anticipated market volatility."
        }
      ],
      "whyThisMatters": "Advanced execution techniques enhance a trader's adaptability and precision in volatile market conditions.",
      "realLifeExample": "During the FOMC meeting, analyze the correlation between the S&P 500 and USD, adjusting your strategy based on observed reactions to the announcement.",
      "commonMistake": "Failing to adapt position sizes based on market volatility, leading to excessive risk exposure.",
      "quickNote": "Integrating advanced strategies is crucial for mastering execution during news events.",
      "mentorText": "Always analyze how different assets respond to news. This insight allows you to adjust your strategy in real-time for better outcomes.",
      "mentorAnalogy": "Advanced execution is like a conductor leading an orchestra; each instrument must harmonize with the others to create a flawless performance."
    },
    "taskData": null,
    "visualKey": "news-event-protocol"
  }
];
