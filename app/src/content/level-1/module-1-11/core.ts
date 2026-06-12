import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Timing Plans",
    "label": "Core Track",
    "body": "Timing plans are essential for aligning trading strategies with market session dynamics. This mission brief outlines the coordination of price zones with session timings and the identification of key volatility overlaps.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Plan",
          "definition": "A strategic framework that aligns trading activities with specific market session timings and volatility patterns."
        },
        {
          "term": "Volatility Overlap",
          "definition": "Periods when multiple market sessions are active, often leading to increased volatility."
        }
      ],
      "whyThisMatters": "Professional traders use timing plans to optimize entry and exit strategies, reducing risk and enhancing profitability by aligning trades with market activity peaks.",
      "realLifeExample": "A trader plans to trade EURUSD during the London-New York overlap, expecting higher volatility and better price movement opportunities.",
      "commonMistake": "Ignoring session timings and trading randomly, leading to missed opportunities and increased risk.",
      "quickNote": "Align your trades with session peaks for optimal results.",
      "mentorText": "Think of timing plans as your market schedule. You need to know when the market is most active to make the most informed decisions.",
      "mentorAnalogy": "Just like a concert pianist schedules performances during peak audience times to maximize impact, traders should align their activities with market peaks."
    },
    "taskData": null,
    "visualKey": "timing-plan-intro"
  },
  {
    "type": "concept",
    "title": "Defining Session-Specific Active Windows",
    "label": "Core Track",
    "body": "### Defining Session-Specific Active Windows\nActive trading windows are periods within market sessions where liquidity and volatility are typically higher. This card focuses on **identifying these windows to maximize trading opportunities**.\n\n* **London Session Window**: Typically active from 3:00 AM to 11:00 AM EST, this window often sees high liquidity and significant price movements.\n* **New York Session Window**: From 8:00 AM to 5:00 PM EST, this session overlaps with London, creating a prime opportunity for volatility.\n* **Tokyo Session Window**: Active from 7:00 PM to 4:00 AM EST, this window is crucial for traders focusing on Asian markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Active Window",
          "definition": "A period within a market session characterized by high liquidity and volatility."
        }
      ],
      "whyThisMatters": "Identifying active windows allows traders to focus their efforts when the market is most likely to offer profitable opportunities.",
      "realLifeExample": "A trader observes GBPUSD during the London session from 3:00 AM to 11:00 AM EST, capitalizing on the increased volatility during this window.",
      "commonMistake": "Trading outside of active windows, resulting in low probability trades and increased slippage.",
      "quickNote": "Trade when the market is awake.",
      "mentorText": "You wouldn't fish in a pond when the fish are asleep. Similarly, trade when the market is most active.",
      "mentorAnalogy": "Just as a farmer plants crops in the growing season to maximize yield, traders should operate during active windows to maximize potential gains."
    },
    "taskData": null,
    "visualKey": "valid-timing-window"
  },
  {
    "type": "concept",
    "title": "Recognizing Dead Zones in Trading",
    "label": "Core Track",
    "body": "### Recognizing Dead Zones in Trading\nDead zones are periods of low market activity and volatility. This card explains **how to identify these zones and why trading during them is often unproductive**.\n\n* **Post-London Close**: After 11:00 AM EST, liquidity often decreases as the London session ends, leading to reduced volatility.\n* **Pre-Asian Open**: The period between the New York close and Tokyo open (5:00 PM to 7:00 PM EST) is typically quiet.\n* **Holiday Periods**: Global holidays can lead to extended dead zones due to reduced market participation.",
    "context": {
      "keyTerms": [
        {
          "term": "Dead Zone",
          "definition": "A period of low market activity and volatility, often resulting in poor trading conditions."
        }
      ],
      "whyThisMatters": "Avoiding dead zones helps traders conserve capital and focus on higher probability setups during active periods.",
      "realLifeExample": "A trader avoids entering new positions on EURUSD between 5:00 PM and 7:00 PM EST, recognizing the lack of movement during this dead zone.",
      "commonMistake": "Attempting to trade during dead zones, leading to frustration and unnecessary losses.",
      "quickNote": "Avoid trading when the market is asleep.",
      "mentorText": "Trading in a dead zone is like trying to drive fast in rush hour traffic. You won't get far, and you'll waste fuel.",
      "mentorAnalogy": "Just as a pilot avoids flying through turbulent weather to ensure a smooth flight, traders should avoid dead zones to maintain a smooth trading experience."
    },
    "taskData": null,
    "visualKey": "dead-timing-window"
  },
  {
    "type": "concept",
    "title": "Consequences of Late Entry into Timing Plans",
    "label": "Core Track",
    "body": "### Consequences of Late Entry into Timing Plans\nEntering trades outside of predefined timing plans can lead to increased risk and missed opportunities. This card explores **the risks associated with late entries and strategies to avoid them**.\n\n* **Increased Slippage**: Entering trades late can result in unfavorable price fills due to reduced liquidity.\n* **Missed Optimal Entry**: Late entries often mean missing the initial move, reducing potential profit margins.\n* **Emotional Trading**: Late entries can lead to emotional decision-making, deviating from the original plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Late Entry",
          "definition": "Entering a trade after the optimal timing window has passed, often leading to increased risk."
        }
      ],
      "whyThisMatters": "Timely entries ensure that trades are executed under optimal conditions, maximizing potential returns and minimizing risk.",
      "realLifeExample": "A trader enters a GBPUSD trade at 9:30 AM EST, missing the initial London session move, resulting in reduced profit potential.",
      "commonMistake": "Chasing trades after the move has started, leading to poor entry points and reduced R:R ratios.",
      "quickNote": "Stick to your timing plan to avoid unnecessary risks.",
      "mentorText": "Think of your timing plan as a train schedule. If you miss the train, don't chase it; wait for the next one.",
      "mentorAnalogy": "Just like a surgeon follows a precise schedule to ensure optimal conditions for surgery, traders must adhere to timing plans to ensure optimal trading conditions."
    },
    "taskData": null,
    "visualKey": "late-plan-warning"
  },
  {
    "type": "concept",
    "title": "Debriefing Timing Plan Effectiveness",
    "label": "Core Track",
    "body": "### Timing Plan: Post-Trade Evaluation\nEvaluating the effectiveness of timing plans post-trade is crucial for refining strategies. This card focuses on **how to analyze timing plan performance to improve future trades**.\n\n* **Performance Metrics Analysis**: After executing a trade, review key performance metrics such as entry/exit precision, duration within the trade, and the impact of session timing on volatility. Quantify these metrics to identify patterns.\n* **Session Impact Assessment**: Determine how specific session timings influenced trade outcomes. Analyze whether trades executed during session overlaps or transitions yielded better results compared to isolated sessions.\n* **Adjustment Protocols**: Develop a structured protocol for adjusting timing plans based on debrief findings. This may involve modifying entry/exit times or avoiding certain sessions based on historical performance data.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate the success of a trading strategy."
        },
        {
          "term": "Session Impact",
          "definition": "The influence of market session timings on trade outcomes."
        }
      ],
      "whyThisMatters": "Analyzing timing plan effectiveness allows traders to refine strategies, increasing the likelihood of future success.",
      "realLifeExample": "A trader reviews their EURUSD trades executed during the London-New York overlap, noting a 15% higher success rate compared to trades outside this window.",
      "commonMistake": "Failing to systematically review timing plans post-trade, leading to repeated errors and missed optimization opportunities.",
      "quickNote": "Debriefing is your feedback loop for continuous improvement.",
      "mentorText": "Post-trade analysis is your diagnostic tool. Just like a pilot reviews flight data post-landing, you must assess your timing plan's impact on trade outcomes.",
      "mentorAnalogy": "Think of this like a post-mission debrief in aerospace engineering, where every detail is scrutinized to enhance future missions."
    },
    "taskData": null,
    "visualKey": "timing-plan-debrief"
  },
  {
    "type": "concept",
    "title": "Coordinating Price Zones with Session Timings",
    "label": "Core Track",
    "body": "### Timing Plan: Aligning Price Zones\nAligning price zones with specific session timings optimizes trade entries and exits. This card explains **how to coordinate these elements for strategic advantage**.\n\n* **Session-Specific Price Zones**: Identify price zones that historically react to specific session openings or closings. Use these zones as potential entry or exit points.\n* **Timing Synchronization**: Match your trading plan's entry and exit strategies to the session's volatility profile. For example, align breakout strategies with session opens when volatility typically spikes.\n* **Historical Zone Analysis**: Analyze historical price reactions to session timings to refine your zone selection. This ensures your zones are not only technically valid but also temporally optimized.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Zones",
          "definition": "Specific price levels identified as potential points of support or resistance."
        },
        {
          "term": "Timing Synchronization",
          "definition": "Aligning trade actions with specific session timings to exploit volatility."
        }
      ],
      "whyThisMatters": "Coordinating price zones with session timings enhances the precision and effectiveness of trade execution.",
      "realLifeExample": "A trader sets a buy limit order at a support zone just before the New York open, anticipating a volatility-driven bounce.",
      "commonMistake": "Ignoring session timings when setting price zones, leading to missed opportunities or premature trade entries.",
      "quickNote": "Synchronize your zones with session clocks for precision.",
      "mentorText": "Think of session timings as the tide. Align your price zones with these tides to ride the waves effectively.",
      "mentorAnalogy": "Like a chef timing the addition of ingredients to coincide with peak cooking phases, align your price zones with session timings for optimal results."
    },
    "taskData": null,
    "visualKey": "timing-plan-intro"
  },
  {
    "type": "concept",
    "title": "Strategies for Volatility Overlaps",
    "label": "Core Track",
    "body": "### Timing Plan: Capitalizing on Overlaps\nPeriods where session timings overlap create increased market volatility. This card details **strategies to exploit these volatility windows**.\n\n* **Overlap Identification**: Clearly identify the time windows where major sessions overlap, such as the London-New York overlap. These periods often see heightened liquidity and price movement.\n* **Volatility-Based Strategies**: Implement strategies that capitalize on increased volatility, such as breakout or momentum trades, during these overlaps.\n* **Risk Management Adjustments**: Adjust risk parameters to account for the heightened volatility during overlaps. This may involve setting wider stop-losses or reducing position sizes to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Overlaps",
          "definition": "Periods where two major market sessions overlap, often resulting in increased market activity."
        },
        {
          "term": "Breakout Strategy",
          "definition": "A trading strategy that seeks to enter trades during periods of significant price movement."
        }
      ],
      "whyThisMatters": "Leveraging session overlaps can lead to higher probability trades due to increased market activity.",
      "realLifeExample": "During the London-New York overlap, a trader executes a breakout trade on GBPUSD, capturing a 50-pip move within an hour.",
      "commonMistake": "Failing to recognize overlap periods, resulting in missed opportunities for high-probability trades.",
      "quickNote": "Overlap periods are volatility goldmines.",
      "mentorText": "Session overlaps are your market's turbo boost. Use them wisely to accelerate your trading results.",
      "mentorAnalogy": "Like a Formula 1 driver using DRS zones to gain speed, traders should exploit session overlaps to maximize trade potential."
    },
    "taskData": null,
    "visualKey": "valid-timing-window"
  },
  {
    "type": "concept",
    "title": "Managing Transitions Between Sessions",
    "label": "Core Track",
    "body": "### Timing Plan: Session Transition Management\nManaging trades during transitions between market sessions is critical for maintaining optimal timing. This card explores **techniques to navigate these periods effectively**.\n\n* **Transition Awareness**: Be aware of the exact times when sessions transition, as these periods can be marked by reduced liquidity and erratic price movements.\n* **Position Adjustment**: Consider adjusting or closing positions before session transitions to avoid unpredictable market behavior. This may involve scaling out of trades or tightening stop-losses.\n* **Observation Period**: Use session transitions as observation periods rather than active trading times. Analyze market behavior during these times to inform future strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Transition",
          "definition": "The period when one market session closes and another opens, often leading to changes in market dynamics."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of buyers and sellers in the market, affecting the ease of trade execution."
        }
      ],
      "whyThisMatters": "Properly managing session transitions helps avoid unnecessary risk and positions traders for better opportunities.",
      "realLifeExample": "A trader closes a position on USDJPY just before the Tokyo session closes to avoid the liquidity drop and potential volatility spike at the London open.",
      "commonMistake": "Holding positions through session transitions without adjusting for potential liquidity changes.",
      "quickNote": "Transitions are times for observation, not action.",
      "mentorText": "Session transitions are like changing lanes on a busy highway. You need to be alert and ready to adjust your speed and position.",
      "mentorAnalogy": "Like a pilot preparing for a smooth landing during a shift change at the control tower, traders must manage session transitions with precision and caution."
    },
    "taskData": null,
    "visualKey": "dead-timing-window"
  },
  {
    "type": "concept",
    "title": "Adjusting Timing Plans for Market Conditions",
    "label": "Core Track",
    "body": "### Timing Plan Adaptation: Market Condition Adjustments\nTiming plans must be flexible to accommodate unexpected market conditions. This card details **how to adjust timing plans in response to changing market conditions and unexpected events**.\n\n* **Volatility Spike Reaction**: If a sudden increase in volatility occurs, such as during an unexpected geopolitical event, adjust your timing plan to include additional monitoring periods. This allows for capturing new opportunities or avoiding heightened risks.\n* **Session Extension Protocol**: Extend your operational hours if a key economic release is delayed. This ensures that your timing plan remains aligned with market-moving events.\n* **Event-Driven Adjustment**: Incorporate a contingency plan for events like central bank announcements that may shift market dynamics outside normal session overlaps.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A sudden and significant increase in market volatility."
        },
        {
          "term": "Session Extension",
          "definition": "Adjusting trading hours to accommodate unexpected market events."
        }
      ],
      "whyThisMatters": "Adapting timing plans to market conditions helps traders manage risk and capitalize on unforeseen opportunities.",
      "realLifeExample": "During a surprise OPEC announcement at 2:00 PM EST, crude oil volatility spikes, prompting traders to extend their timing plans to monitor price action closely.",
      "commonMistake": "Failing to adjust timing plans during unexpected market events, leading to missed opportunities or increased risk.",
      "quickNote": "Flexibility in timing plans is crucial for managing unexpected market conditions.",
      "mentorText": "When the market throws a curveball, your timing plan needs to be as flexible as a seasoned pilot adjusting for sudden weather changes.",
      "mentorAnalogy": "Think of it like a Formula 1 race team adjusting their pit stop strategy when rain suddenly starts mid-race."
    },
    "taskData": null,
    "visualKey": "late-plan-warning"
  },
  {
    "type": "concept",
    "title": "Rejecting Setups Outside Operational Hours",
    "label": "Core Track",
    "body": "### Timing Plan Discipline: Operational Hour Rejection\nTrade setups outside designated operational hours pose unnecessary risks. This card explains **the importance of rejecting setups that occur outside valid operational hours**.\n\n* **Operational Hour Definition**: Clearly define your trading hours based on session overlaps and personal availability. Any setup outside these hours is automatically rejected.\n* **Risk Management Enforcement**: Trading outside operational hours often leads to increased slippage and reduced liquidity. Enforce strict adherence to your timing plan to mitigate these risks.\n* **Psychological Discipline**: Maintain psychological discipline by avoiding impulsive trades during off-hours, which can lead to emotional decision-making and poor outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Operational Hours",
          "definition": "Pre-defined trading hours based on session overlaps and personal schedule."
        },
        {
          "term": "Slippage",
          "definition": "The difference between the expected price of a trade and the actual price."
        }
      ],
      "whyThisMatters": "Rejecting setups outside operational hours helps maintain discipline and reduces exposure to unnecessary risks.",
      "realLifeExample": "A trader operating from 8:00 AM to 4:00 PM EST ignores a setup at 6:00 PM EST to avoid low liquidity and high slippage.",
      "commonMistake": "Trading outside operational hours due to FOMO, leading to poor trade execution and increased risk.",
      "quickNote": "Stick to your operational hours to maintain discipline and manage risk effectively.",
      "mentorText": "Think of your operational hours like a surgeon's scheduled operating room time—precision and planning are key, and anything outside that window is a risk.",
      "mentorAnalogy": "It's like a restaurant closing its kitchen after hours to ensure quality and consistency, rather than serving subpar meals late at night."
    },
    "taskData": null,
    "visualKey": "timing-plan-debrief"
  },
  {
    "type": "concept",
    "title": "Optimizing Timing Plans for Efficiency",
    "label": "Core Track",
    "body": "### Timing Plan Optimization: Efficiency Maximization\nEfficiency in timing plans enhances trading performance. This card explores **methods to optimize timing plans for maximum efficiency and effectiveness**.\n\n* **Session Overlap Focus**: Prioritize trading during session overlaps, such as the London-New York overlap, where liquidity and volatility are highest, maximizing trade efficiency.\n* **Time Block Allocation**: Allocate specific time blocks for analysis, execution, and review. This structured approach prevents time wastage and enhances focus.\n* **Performance Review Integration**: Regularly review timing plan performance to identify inefficiencies and make necessary adjustments for continuous improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two trading sessions are open simultaneously, increasing liquidity."
        },
        {
          "term": "Time Block Allocation",
          "definition": "Designating specific time periods for different trading activities."
        }
      ],
      "whyThisMatters": "Optimizing timing plans ensures that traders are active during the most opportune times, enhancing trade execution and outcomes.",
      "realLifeExample": "A trader focuses on the 8:00 AM to 12:00 PM EST window during the London-New York overlap to capitalize on increased market activity.",
      "commonMistake": "Failing to review and adjust timing plans, leading to inefficient use of trading hours.",
      "quickNote": "Optimize your timing plan to trade during peak market activity for better results.",
      "mentorText": "Your timing plan should be as efficient as an assembly line—every minute counts, and optimization is key to productivity.",
      "mentorAnalogy": "Consider it like a train schedule, where precise timing ensures smooth operations and maximum passenger flow."
    },
    "taskData": null,
    "visualKey": "timing-plan-intro"
  },
  {
    "type": "concept",
    "title": "Integrating Timing Plans with Trading Strategies",
    "label": "Core Track",
    "body": "### Timing Plan Integration: Strategy Alignment\nSeamless integration of timing plans with trading strategies enhances performance. This card details **how to integrate timing plans with overall trading strategies**.\n\n* **Strategy-Timing Synchronization**: Align your timing plans with your trading strategy's requirements, ensuring that trades are executed during optimal conditions for your specific strategy.\n* **Adaptive Strategy Implementation**: Modify strategies to fit within your timing plan, such as adjusting entry criteria based on session-specific volatility patterns.\n* **Feedback Loop Establishment**: Create a feedback loop between strategy performance and timing plan effectiveness to refine both continuously.",
    "context": {
      "keyTerms": [
        {
          "term": "Strategy-Timing Synchronization",
          "definition": "Aligning timing plans with the specific needs of a trading strategy."
        },
        {
          "term": "Feedback Loop",
          "definition": "A system for continuously improving processes based on performance data."
        }
      ],
      "whyThisMatters": "Integrating timing plans with strategies ensures trades are executed under optimal conditions, enhancing strategy effectiveness.",
      "realLifeExample": "A momentum trader aligns their strategy to execute trades during the first hour of the New York session, where volatility is high, and price movements are pronounced.",
      "commonMistake": "Implementing strategies without considering timing, leading to suboptimal trade execution.",
      "quickNote": "Integrate timing plans with strategies for optimal trade execution.",
      "mentorText": "Your timing plan should be the backbone of your strategy, much like a conductor synchronizes an orchestra to create harmony.",
      "mentorAnalogy": "It's like a chef timing the cooking of each dish to ensure everything is ready to serve at the same time, creating a perfect dining experience."
    },
    "taskData": null,
    "visualKey": "valid-timing-window"
  },
  {
    "type": "concept",
    "title": "Risk Management within Timing Plans",
    "label": "Core Track",
    "body": "### Risk Management: Integrating with Timing Plans\nIncorporating risk management into timing plans is essential for mitigating potential losses during volatile market periods.\n\n* **Volatility Assessment**: Identify high-risk periods by analyzing historical volatility data during specific session overlaps. Avoid executing trades during these identified 'dead-timing windows' where price action is erratic and unpredictable.\n* **Position Sizing Adjustment**: Adjust position sizes based on the identified risk level during specific timing windows. Larger positions may be reduced during high volatility overlaps to limit exposure.\n* **Stop-Loss Placement**: Implement dynamic stop-loss orders that adapt to the volatility of the timing window. This ensures that stop-loss levels are neither too tight nor too loose, protecting capital effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Dead-Timing Window",
          "definition": "Periods where market volatility is unpredictable, increasing risk."
        },
        {
          "term": "Volatility Assessment",
          "definition": "The process of analyzing past market volatility to predict future risk."
        },
        {
          "term": "Position Sizing",
          "definition": "Adjusting the number of units to trade based on risk assessment."
        }
      ],
      "whyThisMatters": "Integrating risk management with timing plans helps traders protect capital during unpredictable market conditions.",
      "realLifeExample": "During the overlap of the London and New York sessions, GBPUSD can exhibit erratic movements. A trader reduces position size and places a wider stop-loss to accommodate increased volatility.",
      "commonMistake": "Neglecting to adjust stop-loss levels during volatile session overlaps, leading to premature stop-outs.",
      "quickNote": "Always align risk management strategies with timing plans to safeguard against volatility.",
      "mentorText": "Think of risk management as your safety net. During volatile session overlaps, adjust your net to catch any unexpected falls.",
      "mentorAnalogy": "Just like an engineer reinforces a bridge during peak traffic hours to handle stress, you must reinforce your trading plan during volatile market overlaps."
    },
    "taskData": null,
    "visualKey": "dead-timing-window"
  },
  {
    "type": "practice",
    "title": "Practical Application of Timing Plans",
    "label": "Core Track",
    "body": "### Practical Application: Timing Plans in Action\nEngage in practical exercises to apply timing plans in simulated trading scenarios, reinforcing learned concepts.\n\n* **Scenario Simulation**: Use historical data to simulate trading scenarios during key session overlaps. Identify optimal entry and exit points based on timing plans.\n* **Execution Timing**: Practice executing trades at precise times within your plan to maximize efficiency and reduce slippage.\n* **Review and Adjust**: After simulation, review the outcomes and adjust timing plans to improve future performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "Using historical data to practice trading strategies in a controlled environment."
        },
        {
          "term": "Execution Timing",
          "definition": "The precise timing of trade entries and exits to optimize outcomes."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge and prepares traders for real-world execution.",
      "realLifeExample": "A trader uses historical EURUSD data to simulate trades during the New York open, refining their timing plan for optimal entries.",
      "commonMistake": "Failing to review simulated trades, missing opportunities for improvement.",
      "quickNote": "Practice with historical data to refine your timing plan execution.",
      "mentorText": "You can't just read about timing plans; you have to practice them. Treat each simulation as a real trade to build your instincts.",
      "mentorAnalogy": "A pilot doesn't just read about flying; they use simulators to practice takeoffs and landings until it's second nature."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated trading session, you notice increased volatility at the London-New York overlap. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Reduce position size and adjust stop-loss levels.",
          "isCorrect": true,
          "feedback": "Correct. Adjusting position size and stop-loss levels helps manage risk during volatile overlaps."
        },
        {
          "id": "1",
          "text": "Increase position size to capitalize on volatility.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size during high volatility increases risk."
        },
        {
          "id": "2",
          "text": "Ignore the volatility and stick to the original plan.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring volatility can lead to significant losses."
        },
        {
          "id": "3",
          "text": "Close all positions to avoid risk.",
          "isCorrect": false,
          "feedback": "Incorrect. While closing positions reduces risk, it also eliminates potential profit opportunities."
        }
      ]
    },
    "visualKey": "late-plan-warning"
  },
  {
    "type": "summary",
    "title": "Summary of Timing Plan Concepts",
    "label": "Core Track",
    "body": "### Timing Plan Concepts: Comprehensive Review\nReview and consolidate all key concepts related to timing plans, ensuring a comprehensive understanding of their application in trading.\n\n* **Session Timing Coordination**: Understand how to align trading activities with session timings to exploit predictable market behaviors.\n* **Volatility Overlap Management**: Recognize and manage periods of increased volatility during session overlaps to optimize trade execution.\n* **Risk Management Integration**: Incorporate risk management strategies into timing plans to mitigate potential losses during volatile periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing Coordination",
          "definition": "Aligning trading activities with specific market session times."
        },
        {
          "term": "Volatility Overlap",
          "definition": "Periods where two market sessions overlap, often increasing volatility."
        }
      ],
      "whyThisMatters": "A thorough understanding of timing plans enhances strategic trade execution and risk management.",
      "realLifeExample": "A trader plans trades around the Tokyo-London overlap, anticipating increased volatility and adjusting their strategy accordingly.",
      "commonMistake": "Overlooking the impact of session overlaps on market volatility, leading to poorly timed trades.",
      "quickNote": "Timing plans align your strategy with market rhythms for optimal execution.",
      "mentorText": "Think of timing plans as your roadmap. Without it, you're driving blind. Use it to navigate the market's twists and turns.",
      "mentorAnalogy": "Just like a conductor synchronizes an orchestra, you must synchronize your trades with market sessions for harmony and precision."
    },
    "taskData": null,
    "visualKey": "timing-plan-debrief"
  }
];
