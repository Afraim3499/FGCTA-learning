import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Establishing Systematic Monitoring Protocols",
    "label": "Core Track",
    "body": "### Core Protocol: Monitoring Open Trades\nSystematic monitoring protocols are essential for evaluating open trades without emotional interference. This card outlines **how to create a structured monitoring routine that enhances decision-making**.\n\n* **Trade Review Schedule**: Establish a fixed schedule for reviewing open trades, such as every hour or at specific market sessions (e.g., 10 AM and 3 PM EST). Consistency in review times mitigates impulsive reactions to market fluctuations.\n* **Performance Metrics Tracking**: Utilize a trade journal to log key metrics, including entry price, current price, and unrealized profit/loss. This data should be updated in real-time to facilitate objective assessments.\n* **Alert System Implementation**: Set up alerts for significant price movements (e.g., 50 pips in your favor or against) to prompt a review of the trade. This ensures that decisions are based on data rather than emotional responses to market noise.",
    "context": {
      "keyTerms": [
        {
          "term": "Monitoring Protocols",
          "definition": "Structured routines for evaluating open trades to minimize emotional bias."
        }
      ],
      "whyThisMatters": "Establishing monitoring protocols allows traders to remain disciplined and focused on data-driven decisions, reducing the likelihood of emotional trading mistakes.",
      "realLifeExample": "A trader reviews their open EURUSD position every hour, noting a 30-pip gain at 1.0850 during the 10 AM EST review, ensuring they remain objective about potential exit strategies.",
      "commonMistake": "Failing to adhere to a consistent review schedule, leading to reactive decision-making based on market volatility.",
      "quickNote": "Consistent monitoring reduces emotional trading errors.",
      "mentorText": "You need to treat your open trades like a pilot checks their instruments. Set specific times to review, and stick to them. Don’t let the market’s noise dictate your actions.",
      "mentorAnalogy": "Think of your monitoring protocol as a flight plan; just as pilots adhere to their planned route and check instruments regularly, traders must follow their monitoring schedule to navigate the market effectively."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Key Performance Indicators for Open Trades",
    "label": "Core Track",
    "body": "### Performance Metrics: Assessing Open Trades\nDefining and applying performance indicators is crucial for objectively evaluating open trades. This card teaches **how to identify and utilize key performance metrics**.\n\n* **Risk-Reward Ratio**: Calculate the risk-reward ratio for each trade before entry, aiming for a minimum of 1:2. This metric helps assess whether the potential reward justifies the risk taken.\n* **Win Rate Analysis**: Track the percentage of winning trades over a defined period (e.g., monthly). A consistent win rate above 50% indicates effective strategy execution and helps in evaluating overall performance.\n* **Average Trade Duration**: Monitor the average duration of open trades to identify patterns. For instance, if trades are typically held for 3 days, adjustments may be necessary if recent trades are significantly shorter or longer.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A metric that compares the potential profit of a trade to its potential loss."
        },
        {
          "term": "Win Rate",
          "definition": "The percentage of successful trades over a specific period."
        },
        {
          "term": "Average Trade Duration",
          "definition": "The typical length of time a trade remains open."
        }
      ],
      "whyThisMatters": "Utilizing performance indicators allows traders to make informed decisions based on quantifiable data, reducing reliance on emotional judgment.",
      "realLifeExample": "A trader calculates a risk-reward ratio of 1:3 on a GBPJPY trade, with a target at 150.50 and a stop loss at 149.50, confirming the trade's potential before execution.",
      "commonMistake": "Neglecting to track performance metrics, leading to an inability to evaluate the effectiveness of trading strategies.",
      "quickNote": "Key performance indicators provide a data-driven foundation for trade evaluation.",
      "mentorText": "You must measure your trades like a scientist tracks experiments. Use clear metrics to evaluate what’s working and what isn’t, so you can adjust your approach accordingly.",
      "mentorAnalogy": "Think of performance indicators as a doctor’s vital signs monitor; just as a physician uses data to assess a patient’s health, traders must rely on metrics to gauge the health of their trades."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Implementing Trailing Stop Strategies",
    "label": "Core Track",
    "body": "### Trailing Stops: Protecting Profits\nTrailing stop strategies are essential for securing profits while allowing trades to run. This card covers **the mechanics of implementing effective trailing stops**.\n\n* **Fixed Trailing Stop**: Set a trailing stop at a fixed distance (e.g., 20 pips) from the highest price achieved since entry. This method locks in profits as the market moves favorably while providing a clear exit point if the market reverses.\n* **Percentage-Based Trailing Stop**: Use a percentage of the current price (e.g., 2%) to determine the trailing stop level. This approach adjusts dynamically with price movements, allowing for greater flexibility in volatile markets.\n* **Manual Adjustment Protocol**: Establish rules for manually adjusting trailing stops based on market conditions, such as tightening the stop after a significant price move (e.g., after a 50-pip gain). This ensures that profits are protected without premature exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to protect profits."
        },
        {
          "term": "Fixed Trailing Stop",
          "definition": "A trailing stop set at a constant distance from the highest price."
        },
        {
          "term": "Percentage-Based Trailing Stop",
          "definition": "A trailing stop determined by a percentage of the current price."
        }
      ],
      "whyThisMatters": "Implementing trailing stops effectively allows traders to maximize profits while minimizing the risk of loss, ensuring a disciplined approach to trade management.",
      "realLifeExample": "A trader sets a fixed trailing stop on their AUDCAD position at 0.9250 after the price reaches 0.9300, ensuring a 50-pip profit is locked in as the market fluctuates.",
      "commonMistake": "Setting trailing stops too close to the market price, resulting in premature exits from profitable trades.",
      "quickNote": "Trailing stops are crucial for maximizing profit potential while managing risk.",
      "mentorText": "Think of trailing stops as a safety net; they allow you to catch profits as they rise while protecting you from falling back into losses. Set them wisely and adjust as needed.",
      "mentorAnalogy": "Consider trailing stops like a safety harness for a climber; just as a harness secures a climber while allowing them to ascend, trailing stops protect your profits while letting your trades run."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Frameworks for Exiting Trades",
    "label": "Core Track",
    "body": "### Exit Strategies: Structured Frameworks\nEstablishing structured frameworks for exiting trades is vital for making data-driven decisions. This card outlines **how to create a systematic exit strategy**.\n\n* **Target-Based Exits**: Define exit points based on specific price targets established during trade planning. For example, if entering a long position on USDCHF at 0.9100, set a target at 0.9150 based on technical analysis.\n* **Time-Based Exits**: Implement time-based exit strategies, such as exiting trades after a predetermined time frame (e.g., 3 days) if the target has not been reached. This prevents holding onto losing positions indefinitely.\n* **Market Condition Review**: Regularly assess market conditions to determine if an exit is warranted. For instance, if volatility increases significantly, consider exiting to protect profits or limit losses, regardless of initial targets.",
    "context": {
      "keyTerms": [
        {
          "term": "Target-Based Exit",
          "definition": "An exit strategy that relies on reaching a predetermined price target."
        },
        {
          "term": "Time-Based Exit",
          "definition": "An exit strategy that involves closing a position after a set duration."
        },
        {
          "term": "Market Condition Review",
          "definition": "The process of evaluating current market conditions to inform exit decisions."
        }
      ],
      "whyThisMatters": "Having a structured exit framework ensures that traders can make timely decisions based on objective criteria, reducing the influence of emotions during critical moments.",
      "realLifeExample": "A trader sets a target-based exit for their NZDUSD trade at 0.6800, having entered at 0.6750, and also plans to exit if the trade has not reached the target within 5 days.",
      "commonMistake": "Failing to establish clear exit criteria, leading to indecision and emotional trading at critical moments.",
      "quickNote": "Structured exit frameworks facilitate objective decision-making.",
      "mentorText": "You need to have a clear exit strategy like a surgeon has a plan for every procedure. Define your targets and timeframes, and stick to them to avoid emotional decision-making.",
      "mentorAnalogy": "Think of your exit strategy as a fire evacuation plan; just as you would follow a predetermined route to safety, you must have a clear plan for exiting trades to avoid panic in volatile markets."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Open Trades",
    "label": "Core Track",
    "body": "### Core Technique: Risk Management for Open Trades\nEffective risk management is critical for maintaining emotional stability while managing open positions. This card outlines **specific techniques to mitigate risk during trade execution**.\n\n* **Position Sizing**: Determine the appropriate position size based on your account balance and risk tolerance. Use a maximum of 1-2% of your trading capital per trade to avoid emotional distress from significant losses.\n* **Stop-Loss Placement**: Set stop-loss orders at logical technical levels, such as below support or above resistance, to minimize emotional decision-making. Avoid adjusting stop-loss levels based on fear or greed.\n* **Risk-Reward Ratio**: Maintain a minimum risk-reward ratio of 1:2 for all open trades. This ensures that potential gains outweigh potential losses, fostering a more objective trading mindset.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A ratio that compares the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing tailored risk management techniques allows traders to maintain emotional balance and make rational decisions during open trades.",
      "realLifeExample": "A trader with a $10,000 account size risks 1% per trade, setting a stop-loss at 1.1500 for a EURUSD buy at 1.1600, ensuring a risk-reward ratio of 1:3.",
      "commonMistake": "Traders often increase position sizes in response to losses, leading to emotional trading and further losses.",
      "quickNote": "Effective risk management is essential for emotional stability in trading.",
      "mentorText": "Think of risk management as your safety net. If you set your stop-loss correctly and size your positions wisely, you can navigate the market without fear dictating your decisions.",
      "mentorAnalogy": "Risk management in trading is like a pilot conducting pre-flight checks. Just as a pilot ensures all systems are go before takeoff, you must ensure your risk parameters are set before entering a trade."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "The Importance of Trade Journaling",
    "label": "Core Track",
    "body": "### Core Practice: Trade Journaling\nMaintaining a trade journal is vital for tracking decisions and outcomes, reinforcing a disciplined approach to trading. This card explains **how to effectively journal open trades**.\n\n* **Record Keeping**: Document every trade, including entry and exit points, position size, and rationale behind each decision. This creates a comprehensive record for future analysis.\n* **Outcome Analysis**: After closing a trade, analyze the outcome against your initial expectations. Identify what worked and what didn’t to refine your strategy and decision-making process.\n* **Emotional Reflection**: Include notes on your emotional state during each trade. Understanding emotional triggers can help you develop strategies to mitigate their impact in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A systematic record of all trades executed, including details and reflections."
        },
        {
          "term": "Outcome Analysis",
          "definition": "The process of reviewing trade results to assess performance and strategy effectiveness."
        },
        {
          "term": "Emotional Reflection",
          "definition": "The practice of noting emotional responses during trading to identify patterns and triggers."
        }
      ],
      "whyThisMatters": "Effective trade journaling fosters discipline, allowing traders to learn from their experiences and make informed decisions without emotional interference.",
      "realLifeExample": "A trader journals a GBPUSD trade, noting an entry at 1.3000, exit at 1.3100, and reflects on feeling anxious about the position, leading to a decision to exit early.",
      "commonMistake": "Traders often neglect to document emotional states, missing critical insights into their decision-making processes.",
      "quickNote": "A trade journal is a crucial tool for disciplined trading and emotional awareness.",
      "mentorText": "Your trade journal is your personal coach. It holds you accountable and helps you see patterns in your trading behavior that you might otherwise overlook.",
      "mentorAnalogy": "Journaling in trading is akin to a surgeon reviewing their surgical outcomes. Just as a surgeon learns from each procedure to improve their skills, you must analyze your trades to enhance your trading acumen."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Navigating Market Volatility",
    "label": "Core Track",
    "body": "### Core Strategy: Managing Open Trades in Volatile Markets\nPeriods of high volatility can significantly impact open trades. This card outlines **strategies for effectively managing positions during such times**.\n\n* **Adjusting Stop-Loss Orders**: In volatile conditions, consider tightening stop-loss orders to protect profits while allowing for normal price fluctuations. This reduces the risk of being stopped out prematurely.\n* **Scaling Out of Positions**: Implement a scaling-out strategy by closing a portion of your position at predetermined profit levels. This allows you to lock in gains while maintaining exposure to potential further upside.\n* **Avoiding Overtrading**: Resist the urge to enter new trades during high volatility unless they meet your strict criteria. Overtrading can lead to emotional decision-making and increased losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time, often leading to increased risk."
        },
        {
          "term": "Tightening Stop-Loss",
          "definition": "Adjusting stop-loss orders closer to the current price to protect profits."
        },
        {
          "term": "Scaling Out",
          "definition": "The practice of closing part of a position to secure profits while leaving some exposure."
        }
      ],
      "whyThisMatters": "Understanding how to navigate volatility allows traders to protect their capital and maintain a disciplined approach during uncertain market conditions.",
      "realLifeExample": "During a major economic announcement, a trader tightens their stop-loss on a USDJPY position from 100 pips to 50 pips to secure profits while allowing for fluctuations.",
      "commonMistake": "Traders often react impulsively to volatility, leading to premature exits or poorly timed entries.",
      "quickNote": "Effective management during volatility protects capital and maintains discipline.",
      "mentorText": "When volatility spikes, think of it as turbulence in a flight. You must adjust your controls and stay calm to navigate through it without losing your course.",
      "mentorAnalogy": "Managing trades during volatility is like a captain steering a ship through a storm. You must adjust your sails and course, ensuring you remain steady and focused on your destination."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Building Emotional Resilience in Trading",
    "label": "Core Track",
    "body": "### Core Focus: Emotional Resilience Techniques\nDeveloping emotional resilience is essential for maintaining objectivity while managing open trades. This card discusses **techniques to enhance emotional strength**.\n\n* **Mindfulness Practices**: Implement mindfulness techniques such as meditation or deep-breathing exercises before and during trading sessions. This helps reduce anxiety and promotes a calm mindset.\n* **Predefined Trading Plans**: Establish clear trading plans that outline entry, exit, and risk parameters. Adhering to these plans minimizes emotional responses during trade execution.\n* **Regular Breaks**: Schedule regular breaks during trading sessions to step away from the screen and reset your mental state. This prevents emotional fatigue and enhances decision-making clarity.",
    "context": {
      "keyTerms": [
        {
          "term": "Mindfulness",
          "definition": "The practice of being fully present and engaged in the moment, reducing stress and anxiety."
        },
        {
          "term": "Predefined Trading Plan",
          "definition": "A detailed strategy outlining specific criteria for entering and exiting trades."
        },
        {
          "term": "Emotional Fatigue",
          "definition": "The state of mental exhaustion that can impair decision-making and increase emotional responses."
        }
      ],
      "whyThisMatters": "Building emotional resilience enables traders to remain objective and disciplined, reducing the likelihood of impulsive decisions during trade management.",
      "realLifeExample": "A trader practices deep breathing before entering a volatile market, allowing them to stick to their predefined trading plan without succumbing to fear.",
      "commonMistake": "Traders often neglect emotional management, leading to impulsive decisions that deviate from their trading plans.",
      "quickNote": "Emotional resilience is crucial for maintaining objectivity in trading.",
      "mentorText": "Think of emotional resilience as your mental armor. It protects you from the chaos of the market, allowing you to execute your plan without being swayed by emotions.",
      "mentorAnalogy": "Building emotional resilience in trading is like a firefighter training for high-pressure situations. They learn to stay calm and focused, even when the heat is on, ensuring they can make the right decisions in critical moments."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Reviewing Open Trades for Continuous Improvement",
    "label": "Core Track",
    "body": "### Core Scenario: Trade Review Process\nRegular reviews of open trades are essential for identifying performance patterns and areas for enhancement. This card outlines **a systematic approach to conducting trade reviews**.\n\n* **Trade Log Analysis**: Maintain a detailed log of all open trades, including entry and exit points, reasons for trade, and outcomes. Review this log weekly to identify recurring patterns in successful and unsuccessful trades.\n* **Performance Metrics Evaluation**: Analyze key performance metrics such as win/loss ratio, average profit/loss per trade, and maximum drawdown. Use these metrics to pinpoint specific strategies that require adjustment.\n* **Feedback Loop Implementation**: Establish a feedback loop where insights from trade reviews are integrated into future trading plans. Document lessons learned and apply them to refine entry and exit criteria systematically.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Log",
          "definition": "A detailed record of all trades, including entry and exit points, reasons, and outcomes."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess trading performance, such as win/loss ratio."
        }
      ],
      "whyThisMatters": "Regular reviews enhance trading discipline and lead to continuous improvement in strategy effectiveness.",
      "realLifeExample": "A trader reviews their open positions in EURUSD, noting a consistent pattern of losses when entering trades during low liquidity hours, prompting a strategy adjustment.",
      "commonMistake": "Failing to document trades leads to missed opportunities for learning and improvement.",
      "quickNote": "Systematic trade reviews are essential for refining trading strategies.",
      "mentorText": "When reviewing your trades, think of it as a debrief after a mission. Analyze what worked, what didn’t, and adjust your strategy accordingly.",
      "mentorAnalogy": "Like an aerospace engineer reviewing flight data after each mission, you must analyze your trades to ensure optimal performance in future sessions."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Identifying Exit Signals",
    "label": "Core Track",
    "body": "### Core Scenario: Exit Signal Recognition\nRecognizing exit signals is critical for effective trade management. This card details **specific criteria for determining when to exit a position**.\n\n* **Technical Indicator Confirmation**: Use indicators such as RSI or MACD to identify overbought or oversold conditions. For example, exit a long position in GBPUSD if RSI exceeds 70, indicating potential reversal.\n* **Price Action Patterns**: Monitor for reversal candlestick patterns at key support or resistance levels. An engulfing pattern at a resistance level in AUDJPY could signal a strong exit point.\n* **Trailing Stop Adjustment**: Implement trailing stops based on volatility measures. For instance, adjust a trailing stop for a long position in SPY to 1.5 times the ATR, locking in profits while allowing for potential further gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicator",
          "definition": "A mathematical calculation based on price and/or volume used to forecast future price movements."
        },
        {
          "term": "Price Action Patterns",
          "definition": "Visual patterns formed by price movements on a chart that indicate potential market reversals."
        }
      ],
      "whyThisMatters": "Clear exit signals prevent emotional decision-making and ensure trades are closed based on objective criteria.",
      "realLifeExample": "A trader exits a long position in NASDAQ after observing a bearish engulfing pattern at a significant resistance level of 15,000.",
      "commonMistake": "Ignoring exit signals due to emotional attachment to a position can lead to significant losses.",
      "quickNote": "Exit signals must be based on objective criteria to avoid emotional trading decisions.",
      "mentorText": "When you see a clear exit signal, treat it as a stop sign. Don’t hesitate; act decisively to protect your capital.",
      "mentorAnalogy": "Like a surgeon recognizing signs of complications during an operation, you must be prepared to exit a trade when indicators signal potential failure."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Understanding Trade Psychology",
    "label": "Core Track",
    "body": "### Core Scenario: Psychological Influences on Trading\nPsychological factors significantly impact decision-making in trading. This card explores **the mental aspects that affect managing open trades**.\n\n* **Emotional Awareness**: Recognize emotions such as fear and greed that can cloud judgment. Maintain a trading journal to track emotional states during trades and their impact on decisions.\n* **Discipline Reinforcement**: Establish strict adherence to your trading plan, regardless of emotional fluctuations. For example, if a trade moves against you, stick to your exit strategy rather than holding out of fear of loss.\n* **Mindset Training**: Engage in regular mental conditioning exercises, such as visualization techniques, to strengthen your focus and reduce anxiety. Visualize successful trade executions and exits to build confidence.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Awareness",
          "definition": "The ability to recognize and understand one's emotions and their impact on decision-making."
        },
        {
          "term": "Discipline Reinforcement",
          "definition": "The practice of adhering strictly to a trading plan to mitigate emotional decision-making."
        }
      ],
      "whyThisMatters": "Understanding psychological influences fosters a disciplined approach, enhancing overall trading performance.",
      "realLifeExample": "A trader notices they tend to hold losing positions longer when feeling anxious, prompting them to implement stricter exit rules to combat this tendency.",
      "commonMistake": "Allowing emotions to dictate trading decisions can lead to inconsistent performance and increased risk.",
      "quickNote": "Trade psychology is as critical as technical analysis in maintaining a disciplined trading approach.",
      "mentorText": "Recognize that emotions are part of trading. Acknowledge them, but don’t let them dictate your actions. Stick to your plan.",
      "mentorAnalogy": "Like a pilot maintaining composure in turbulent weather, you must manage your emotions to navigate the complexities of trading effectively."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Practical Scenarios for Managing Open Trades",
    "label": "Core Track",
    "body": "### Core Scenario: Real-World Trade Management\nEngaging with practical scenarios enhances the ability to apply systematic rules for managing open trades. This card presents **realistic trading situations for practice**.\n\n* **Scenario Simulation**: Create a simulated trading environment where you manage a live position in USDJPY. Adjust your stop-loss and take-profit levels based on real-time market movements and news events.\n* **Risk Management Application**: Implement risk management techniques by adjusting position sizes based on market volatility. For example, reduce position size by 50% when volatility increases significantly during an economic announcement.\n* **Exit Strategy Execution**: Practice executing exit strategies in response to specific market conditions. For instance, exit a position in crude oil when it breaches a critical support level after a bearish inventory report.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "Creating a controlled environment to practice trading strategies and decision-making."
        },
        {
          "term": "Risk Management Techniques",
          "definition": "Strategies employed to minimize potential losses in trading."
        }
      ],
      "whyThisMatters": "Practical scenarios build confidence and reinforce systematic management of open trades.",
      "realLifeExample": "A trader simulates managing a long position in gold during a Fed interest rate announcement, adjusting their exit strategy based on market volatility.",
      "commonMistake": "Failing to practice scenarios leads to unpreparedness in real trading situations.",
      "quickNote": "Engaging in practical scenarios sharpens your ability to manage trades effectively.",
      "mentorText": "Treat each practice scenario as a live mission. The more you simulate, the better prepared you’ll be when it truly counts.",
      "mentorAnalogy": "Like a surgeon practicing on simulations before a real operation, you must rehearse trade management to ensure precision under pressure."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Key Takeaways on Managing Open Trades",
    "label": "Core Track",
    "body": "### Core Strategy: Systematic Trade Management\nEffective management of open trades is critical for maintaining a disciplined trading approach. This card outlines **essential strategies and rules for systematically managing open positions**.\n\n* **Monitoring Criteria**: Continuously assess trade performance against pre-defined metrics, including risk-reward ratios and trailing stop levels. Adjust these parameters only based on objective market movements, not emotional responses.\n* **Trailing Stop Implementation**: Establish trailing stops at strategic levels (e.g., 20 pips behind the current price for EURUSD) to lock in profits while allowing for further upside potential. Ensure that trailing stops are adjusted only when the market moves favorably.\n* **Exit Protocols**: Define clear exit rules for both profit-taking and loss-cutting scenarios. For instance, exit a long position in GBPUSD if it retraces 30 pips from the peak after reaching a target of 1.4000, ensuring adherence to your risk management plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to secure profits."
        },
        {
          "term": "Exit Protocol",
          "definition": "Pre-defined rules for closing a position based on market conditions."
        }
      ],
      "whyThisMatters": "Systematic management of open trades minimizes emotional decision-making and enhances overall trading performance.",
      "realLifeExample": "Consider a long position in AUDUSD entered at 0.7400. If the price rises to 0.7450, implement a trailing stop at 0.7430 to secure profits while allowing for further gains.",
      "commonMistake": "Traders often fail to adjust trailing stops appropriately, leading to premature exits or missed profit opportunities.",
      "quickNote": "Systematic management prevents emotional interference in open trades.",
      "mentorText": "Focus on your rules. If you set a trailing stop, stick to it. Don’t let market noise dictate your actions. Trust your process.",
      "mentorAnalogy": "Managing open trades is like a pilot adjusting altitude; you must follow your flight plan and make adjustments based on objective data, not feelings."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "practice",
    "title": "Core Execution Mastery 14",
    "label": "Core Track",
    "body": "### Core Scenario: Advanced Trade Management Application\nThis practice card tests your ability to apply advanced strategies for managing open trades effectively. You will assess a scenario and determine the correct course of action based on systematic rules.\n\n* **Trade Monitoring**: You have an open position in USDJPY, entered at 110.50. The price has moved to 111.00. What should you do next?\n* **Trailing Stop Adjustment**: If you decide to implement a trailing stop, where would you place it to maximize profit while minimizing risk?\n* **Exit Strategy**: If the price reverses and hits 110.80, what is your exit protocol based on your pre-defined rules?",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        },
        {
          "term": "Market Noise",
          "definition": "Irrelevant price fluctuations that can lead to emotional trading decisions."
        }
      ],
      "whyThisMatters": "Mastering trade management enhances decision-making and protects capital during market fluctuations.",
      "realLifeExample": "You entered a long position in NZDUSD at 0.7100. After reaching 0.7150, you set a trailing stop at 0.7130. The price then retraces to 0.7120, triggering your exit.",
      "commonMistake": "Failing to adjust trailing stops in line with market movements can lead to unnecessary losses.",
      "quickNote": "Apply your rules consistently for effective trade management.",
      "mentorText": "Evaluate your position based on your rules. If the market moves in your favor, adjust your stops accordingly. Don’t let fear dictate your actions.",
      "mentorAnalogy": "Think of managing your trades like a surgeon following a checklist during an operation; each step is critical and must be executed without deviation."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a long position in USDJPY at 110.50, and the price has moved to 111.00. What is the best next step?",
      "options": [
        {
          "id": "0",
          "text": "Adjust the trailing stop to 110.90.",
          "isCorrect": true,
          "feedback": "This maintains your profit while allowing for further price movement."
        },
        {
          "id": "1",
          "text": "Close the position immediately.",
          "isCorrect": false,
          "feedback": "This disregards the potential for further gains."
        },
        {
          "id": "2",
          "text": "Leave the stop unchanged at 110.50.",
          "isCorrect": false,
          "feedback": "This exposes you to unnecessary risk if the price retraces."
        },
        {
          "id": "3",
          "text": "Move the stop to 111.10.",
          "isCorrect": false,
          "feedback": "This is too aggressive and may result in a premature exit."
        }
      ]
    },
    "visualKey": "open-trade-manager"
  },
  {
    "type": "summary",
    "title": "Systematic Open Trade Management Review",
    "label": "Core Track",
    "body": "### Core Summary: Advanced Trade Management Techniques\nThis summary card encapsulates advanced techniques for managing open trades, reinforcing the need for a disciplined approach. Review these techniques to solidify your understanding.\n\n* **Dynamic Risk Assessment**: Continuously evaluate the risk associated with open trades based on market conditions. Adjust your risk parameters in response to volatility changes, ensuring that your capital is protected.\n* **Profit Locking Mechanisms**: Utilize techniques such as partial profit-taking at key resistance levels (e.g., selling 50% of a position at 1.3500 in EURCAD) to secure gains while maintaining exposure to potential further upside.\n* **Emotional Detachment Protocol**: Implement strict rules for emotional detachment when managing trades. For instance, if a trade moves against you, adhere to your exit strategy without hesitation to avoid emotional decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Risk Assessment",
          "definition": "Ongoing evaluation of risk based on current market conditions."
        },
        {
          "term": "Partial Profit-Taking",
          "definition": "Selling a portion of a position to secure profits while leaving the remainder open."
        }
      ],
      "whyThisMatters": "Advanced management techniques ensure that traders can navigate market fluctuations without emotional bias.",
      "realLifeExample": "In a long position on GBPUSD at 1.3800, you decide to take partial profits at 1.3850, securing 50% of your position while allowing the rest to run.",
      "commonMistake": "Traders often allow emotions to dictate their exit strategies, leading to inconsistent results.",
      "quickNote": "Advanced techniques enhance trade management and protect capital.",
      "mentorText": "Stay disciplined. If the market moves against you, follow your exit rules. Emotional decisions lead to losses; stick to your plan.",
      "mentorAnalogy": "Managing trades is akin to a commercial pilot adjusting flight paths; each decision must be based on data and protocols, not on feelings."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  }
];
