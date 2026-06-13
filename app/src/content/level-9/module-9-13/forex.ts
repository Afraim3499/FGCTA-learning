import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Combining London Expansion and New York Mean Reversion",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C1 -->\n### Core Strategy: Dual Session Synergy\nThe London expansion strategy focuses on the initial volatility and momentum of the market, while the New York mean reversion strategy capitalizes on price corrections. This card outlines **how to effectively integrate these strategies for enhanced trading performance**.\n\n* **Session Overlap Utilization**: Identify the overlap between the London and New York sessions, typically from 8:00 AM to 11:00 AM EST. This period often features increased liquidity and volatility, providing optimal conditions for executing trades based on both strategies.\n* **Trade Execution Protocol**: Initiate trades during the London expansion phase, capturing momentum, and set limit orders for mean reversion trades as the New York session opens. For example, if EURUSD rallies to 1.0900 during London, set a limit order to short at 1.0920 as the New York session begins.\n* **Risk Management Alignment**: Establish a unified risk management framework that applies to both strategies. For instance, if the combined risk per trade is 1% of the portfolio, ensure that position sizing reflects this across both strategies to maintain consistency and control.",
    "context": {
      "keyTerms": [
        {
          "term": "London Expansion Strategy",
          "definition": "A trading approach that capitalizes on the initial volatility during the London market opening."
        },
        {
          "term": "New York Mean Reversion Strategy",
          "definition": "A trading approach that seeks to profit from price corrections during the New York trading session."
        }
      ],
      "whyThisMatters": "Integrating these strategies allows traders to leverage different market dynamics, enhancing overall portfolio performance.",
      "realLifeExample": "During the London session, GBPUSD moves from 1.2500 to 1.2550. As the New York session opens, set a mean reversion trade to sell at 1.2570, anticipating a pullback.",
      "commonMistake": "Traders often neglect to adjust their risk parameters when transitioning between strategies, leading to inconsistent performance.",
      "quickNote": "Leverage session overlaps to maximize trading opportunities.",
      "mentorText": "Think of the London session as the ignition of a car; it gets the engine running. The New York session is where you steer and navigate, adjusting your course based on the road ahead.",
      "mentorAnalogy": "Combining these strategies is like a pilot using both takeoff and landing procedures; each phase requires distinct approaches to ensure a successful flight."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Identifying Intraday Trends for Strategy Alignment",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C2 -->\n### Core Technique: Trend Identification\nRecognizing intraday trends is critical for aligning both the London expansion and New York mean reversion strategies. This card explains **how to systematically identify trends that enhance entry and exit precision**.\n\n* **Trend Analysis Framework**: Utilize a combination of moving averages (e.g., 50-period and 200-period) to determine the prevailing trend. For instance, if the 50-period MA is above the 200-period MA on a 15-minute chart, the trend is bullish, guiding your trade direction.\n* **Session-Specific Trend Indicators**: Apply specific indicators like the Average True Range (ATR) to gauge volatility in both sessions. For example, an ATR reading above 20 pips during the London session indicates strong momentum, suggesting a potential continuation.\n* **Confirmation Signals**: Look for confirmation from price action, such as higher highs and higher lows during the London session, to validate bullish trends before executing trades in the New York session.",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Average",
          "definition": "A technical indicator that smooths price data to identify trends over a specific period."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market movement by decomposing the entire range of an asset price for that period."
        }
      ],
      "whyThisMatters": "Identifying trends accurately allows traders to align their strategies with market movements, increasing the probability of successful trades.",
      "realLifeExample": "If USDJPY shows a bullish trend with a 50-period MA above the 200-period MA during London, a trader might enter a long position at 110.50, anticipating continuation into the New York session.",
      "commonMistake": "Failing to confirm trends with multiple indicators can lead to premature entries or exits.",
      "quickNote": "Align strategies with prevailing intraday trends for optimal execution.",
      "mentorText": "Think of trend identification as reading the wind before sailing; it tells you which way to set your sails for the best journey.",
      "mentorAnalogy": "Identifying trends is like a surgeon assessing a patient’s vital signs; accurate readings are essential for making informed decisions."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Timing Entries for Maximum Impact",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C3 -->\n### Core Skill: Entry Timing\nEffective entry timing is crucial for maximizing the impact of trades in both the London and New York sessions. This card details **methods for optimizing entry points based on session characteristics**.\n\n* **Session Timing Strategy**: Enter trades at the beginning of the London session (3:00 AM EST) when volatility peaks. For instance, if EURUSD opens at 1.0800 and quickly moves to 1.0820, consider entering a long position to capitalize on momentum.\n* **Market Sentiment Analysis**: Monitor economic news releases scheduled during both sessions. For example, if U.S. Non-Farm Payroll data is released at 8:30 AM EST, position yourself to enter trades shortly after the news, anticipating volatility spikes.\n* **Limit Order Utilization**: Use limit orders to enter trades at pre-defined levels during the New York session. If GBPUSD retraces to 1.3000 after an initial rally, place a limit order to buy at that level, expecting a mean reversion.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Peak",
          "definition": "A point in time when market price movements are at their highest, typically during major session openings."
        },
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a security at a specified price or better."
        }
      ],
      "whyThisMatters": "Timing entries correctly can significantly enhance trade profitability and reduce risk exposure.",
      "realLifeExample": "If AUDUSD shows a spike to 0.7400 at the London open, entering a long position at that moment can capture the initial momentum before the New York session begins.",
      "commonMistake": "Traders often enter trades too late, missing the optimal entry point due to hesitation or lack of preparation.",
      "quickNote": "Optimize entry timing to align with session volatility and market sentiment.",
      "mentorText": "Timing your entries is like a sprinter waiting for the starting gun; the moment you react can determine your success in the race.",
      "mentorAnalogy": "Timing entries is akin to a chef knowing when to add ingredients; the right moment can elevate a dish from good to exceptional."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Analyzing Volatility for Strategy Effectiveness",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C4 -->\n### Core Analysis: Volatility Assessment\nUnderstanding market volatility is essential for evaluating the effectiveness of combined trading strategies. This card outlines **how to analyze volatility to inform strategy adjustments**.\n\n* **Volatility Measurement Tools**: Utilize indicators such as Bollinger Bands and ATR to assess market volatility. For example, if EURUSD's ATR exceeds 25 pips during the London session, it indicates heightened volatility, suggesting a potential for larger price movements.\n* **Session-Specific Volatility Patterns**: Recognize that volatility often varies between sessions. The London session may exhibit higher volatility due to European market participation, while the New York session may show mean reversion patterns. Adjust your strategy accordingly based on these patterns.\n* **Risk-Reward Ratio Adjustment**: Modify your risk-reward ratios based on volatility assessments. If volatility is high, consider widening your stop-loss and take-profit levels to accommodate larger price swings, such as setting a stop-loss 30 pips away for a trade entered at 1.0850.",
    "context": {
      "keyTerms": [
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands, indicating price levels relative to volatility."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Analyzing volatility allows traders to adapt their strategies to current market conditions, enhancing overall effectiveness.",
      "realLifeExample": "If GBPUSD shows a volatility spike with Bollinger Bands expanding significantly during the London session, a trader may adjust their strategy to capitalize on potential breakouts.",
      "commonMistake": "Ignoring volatility changes can lead to inappropriate trade setups and increased risk exposure.",
      "quickNote": "Assess volatility to fine-tune strategy effectiveness and risk management.",
      "mentorText": "Analyzing volatility is like a weather forecast; it helps you prepare for the conditions you will face in the market.",
      "mentorAnalogy": "Understanding volatility is akin to a pilot adjusting altitude based on turbulence; it’s essential for a smooth flight."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Executing Trades Across Sessions",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C5 -->\n### Core Scenario: Session Execution Optimization\nExecuting trades effectively across the London and New York sessions requires an understanding of market dynamics and timing. This card outlines **best practices for seamless strategy implementation during these critical trading hours**.\n\n* **Session Overlap Strategy**: Focus on executing trades during the overlap of the London and New York sessions (8 AM to 12 PM EST). This period often sees increased volatility and liquidity, enhancing the potential for successful trades.\n* **Order Type Selection**: Utilize limit orders to capture price movements during session transitions. For instance, placing a buy limit order on EURUSD at 1.0850 during the London session can capitalize on anticipated upward momentum as the New York session opens.\n* **Time-Based Execution Protocol**: Establish a routine for trade execution that aligns with key economic releases. For example, if the U.S. Non-Farm Payroll report is scheduled for 8:30 AM EST, prepare to execute trades based on pre-release sentiment analysis to optimize entry points.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when both the London and New York trading sessions are active, typically resulting in higher volatility."
        }
      ],
      "whyThisMatters": "Understanding session dynamics allows traders to optimize entry and exit points, enhancing overall strategy effectiveness.",
      "realLifeExample": "On a Tuesday morning, executing a buy order for GBPUSD at 1.3000 during the London session led to a 40-pip gain as the New York session opened and volatility increased.",
      "commonMistake": "Failing to adjust execution strategies based on session characteristics, leading to missed opportunities or increased slippage.",
      "quickNote": "Maximize trade execution efficiency by leveraging session overlaps.",
      "mentorText": "When executing trades, always be aware of the session dynamics. If you're not adjusting your strategy for the overlap, you're leaving money on the table.",
      "mentorAnalogy": "Think of trading across sessions like a relay race; each runner (session) has a specific role, and timing the handoff (trade execution) is crucial for success."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "concept",
    "title": "Adjusting Risk Parameters for Dual Strategies",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C6 -->\n### Core Scenario: Risk Parameter Calibration\nEmploying both London expansion and New York mean reversion strategies necessitates precise adjustments to risk parameters. This card discusses **how to balance risk management across these dual strategies**.\n\n* **Dynamic Risk Allocation**: Allocate a higher percentage of capital to the London expansion strategy during high volatility periods, such as major economic announcements, while reducing exposure in the New York session to mitigate risk.\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. For instance, if the ATR for EURUSD is 50 pips, set stop-loss orders at 1.5 times the ATR to accommodate normal price fluctuations without premature exits.\n* **Position Sizing Technique**: Implement a position sizing formula that adjusts based on the strategy being employed. For example, if trading the New York mean reversion strategy, reduce position size by 25% to account for lower volatility compared to the London expansion phase.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Risk Allocation",
          "definition": "Adjusting capital allocation based on market conditions and strategy requirements."
        }
      ],
      "whyThisMatters": "Proper risk adjustment ensures that traders can effectively manage exposure while maximizing potential returns across different market conditions.",
      "realLifeExample": "During a high-impact news release, increasing the risk allocation to the London expansion strategy resulted in a 3% portfolio gain, while reducing exposure for the New York session protected against potential reversals.",
      "commonMistake": "Overcommitting capital to one strategy without adjusting for the unique risk profile of the other, leading to increased drawdowns.",
      "quickNote": "Balance risk by dynamically adjusting allocations between strategies.",
      "mentorText": "Always remember to adjust your risk parameters based on the strategy you're deploying. If you're not calibrating for volatility, you're not trading smart.",
      "mentorAnalogy": "Adjusting risk parameters is like fine-tuning an aircraft's instruments; each setting must be precise to ensure a smooth flight through varying conditions."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "practice",
    "title": "Simulating Combined Forex Strategies",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C7 -->\n### Core Scenario: Real-Time Strategy Simulation\nEngaging in practical simulations allows traders to apply the combined London expansion and New York mean reversion strategies effectively. This card provides **an opportunity to practice these strategies in real-time scenarios**.\n\n* **Scenario Setup**: Simulate a trading environment where both strategies are active. For example, set up a virtual account with a starting balance of $10,000 and apply the London expansion strategy during the first half of the trading day.\n* **Trade Execution Practice**: Execute trades based on predefined conditions, such as entering a long position on AUDUSD at 0.7400 during the London session and then switching to a mean reversion strategy in the New York session.\n* **Performance Review**: After completing the simulation, analyze the results by comparing the performance of both strategies. Assess metrics such as win rate, drawdown, and overall profitability to refine future strategies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Real-Time Simulation",
          "definition": "Practicing trading strategies in a controlled environment that mimics live market conditions."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to refine strategy execution and improve decision-making under pressure.",
      "realLifeExample": "In a simulated environment, executing a combined strategy resulted in a 5% increase in portfolio value over a week, demonstrating the effectiveness of dual strategy application.",
      "commonMistake": "Failing to adhere to the strategy rules during simulations, leading to unrealistic performance expectations.",
      "quickNote": "Utilize simulations to refine strategy execution without financial risk.",
      "mentorText": "Treat your simulations as real trades. The more disciplined you are in practice, the more successful you'll be in live markets.",
      "mentorAnalogy": "Simulating trades is akin to a pilot's flight simulator; it prepares you for real-world conditions without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated trading session, you notice increased volatility in the London session. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Increase position size for the London expansion strategy.",
          "isCorrect": true,
          "feedback": "Increasing position size during high volatility can capitalize on price movements effectively."
        },
        {
          "id": "1",
          "text": "Reduce all positions to minimize risk.",
          "isCorrect": false,
          "feedback": "Reducing positions may lead to missed opportunities in a volatile market."
        },
        {
          "id": "2",
          "text": "Switch to a mean reversion strategy immediately.",
          "isCorrect": false,
          "feedback": "Switching strategies without assessing market conditions can lead to poor execution."
        },
        {
          "id": "3",
          "text": "Hold existing positions without adjustment.",
          "isCorrect": false,
          "feedback": "Holding without adjustment may expose you to unnecessary risk during volatile conditions."
        }
      ]
    },
    "visualKey": "multi-strategy-builder"
  },
  {
    "type": "summary",
    "title": "Recap of Forex Multi-Strategy Integration",
    "label": "Forex Track",
    "body": "<!-- M9.13-forex-C8 -->\n### Core Scenario: Strategy Integration Summary\nIntegrating London expansion and New York mean reversion strategies is essential for a comprehensive trading approach. This card summarizes **the key concepts learned for effective strategy integration**.\n\n* **Session Dynamics**: Recognize the importance of executing trades during the London and New York session overlaps to maximize volatility and liquidity.\n* **Risk Management Techniques**: Implement dynamic risk allocation and position sizing to balance exposure between the two strategies, ensuring a robust risk management framework.\n* **Practical Application**: Engage in simulations to practice the combined strategies, allowing for real-time adjustments and performance analysis to refine execution skills.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Strategy Integration",
          "definition": "The process of combining multiple trading strategies to enhance overall performance."
        }
      ],
      "whyThisMatters": "A well-integrated strategy playbook enhances adaptability and responsiveness to market conditions, improving trading outcomes.",
      "realLifeExample": "A trader successfully integrated both strategies, resulting in a 10% portfolio growth over a month by leveraging session dynamics and effective risk management.",
      "commonMistake": "Neglecting to review and adjust strategies based on performance metrics, leading to stagnation in trading results.",
      "quickNote": "Effective integration of strategies leads to improved trading performance.",
      "mentorText": "Always review how your strategies work together. Integration is not just about execution; it's about understanding how they complement each other.",
      "mentorAnalogy": "Integrating strategies is like a conductor leading an orchestra; each instrument (strategy) must harmonize to create a cohesive performance."
    },
    "taskData": null,
    "visualKey": "multi-strategy-builder"
  }
];
