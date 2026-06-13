import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Real-Time Position Analysis",
    "label": "Core Track",
    "body": "### Core Scenario: Evaluating Active Positions\nReal-time position analysis is crucial for making informed decisions during live trading. This card teaches **how to assess key indicators that may necessitate position adjustments or exits**.\n\n* **Performance Metrics**: Continuously monitor metrics such as profit/loss ratios and drawdown percentages to determine if the position aligns with your risk tolerance.\n* **Market Sentiment Indicators**: Analyze sentiment indicators like the COT report or volatility indices to gauge market psychology and potential reversals.\n* **Technical Signals**: Identify critical technical signals, such as moving average crossovers or RSI levels, that may indicate a shift in market momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Profit/Loss Ratio",
          "definition": "The ratio of the average profit of winning trades to the average loss of losing trades."
        },
        {
          "term": "COT Report",
          "definition": "A report detailing the positions of traders in the futures market, indicating market sentiment."
        },
        {
          "term": "Moving Average Crossover",
          "definition": "A technical indicator that occurs when a short-term moving average crosses above or below a long-term moving average."
        }
      ],
      "whyThisMatters": "Evaluating active positions in real-time allows for timely adjustments that can mitigate losses and maximize gains.",
      "realLifeExample": "During the London session, a trader notices their long position in GBPUSD is showing a 1.5% drawdown while the RSI approaches 30, indicating oversold conditions, prompting a reevaluation of the position.",
      "commonMistake": "Failing to adjust positions based on real-time performance metrics, leading to missed opportunities for profit or increased losses.",
      "quickNote": "Real-time analysis is essential for effective position management.",
      "mentorText": "When you’re in the heat of trading, focus on the numbers. If your drawdown exceeds your planned threshold, it’s time to reassess your position and consider your exit strategy.",
      "mentorAnalogy": "Think of this like a pilot adjusting altitude based on real-time weather data; ignoring turbulence can lead to disaster."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Identifying Structural Clues",
    "label": "Core Track",
    "body": "### Core Scenario: Spotting Structural Clues\nIdentifying structural clues in market behavior is essential for influencing active trading positions. This card teaches **how to recognize patterns and signals that indicate potential market shifts**.\n\n* **Support and Resistance Levels**: Monitor key support and resistance levels that can indicate potential reversals or breakouts, adjusting positions accordingly.\n* **Volume Analysis**: Analyze volume spikes in conjunction with price movements to confirm the strength of a trend or signal potential exhaustion.\n* **Market Correlations**: Observe correlations between different instruments, such as EURUSD and DXY, to identify underlying structural shifts that may affect your positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Support Level",
          "definition": "A price level where buying interest is strong enough to overcome selling pressure."
        },
        {
          "term": "Volume Spike",
          "definition": "A sudden increase in trading volume that can indicate strong market interest or a potential reversal."
        },
        {
          "term": "Market Correlation",
          "definition": "The degree to which two instruments move in relation to one another."
        }
      ],
      "whyThisMatters": "Recognizing structural clues allows traders to adapt their strategies in real-time, enhancing decision-making and position management.",
      "realLifeExample": "A trader notices that while the S&P 500 is breaking through a resistance level, the VIX is spiking, indicating increased market fear, prompting a reevaluation of their long positions in equities.",
      "commonMistake": "Ignoring structural clues and relying solely on indicators, which can lead to misinformed trading decisions.",
      "quickNote": "Structural clues provide insight into potential market shifts.",
      "mentorText": "Keep your eyes peeled for patterns. If you see a significant volume spike at a resistance level, don't just sit there; it may be time to adjust your positions.",
      "mentorAnalogy": "Like an architect assessing the stability of a building's foundation, recognizing structural clues ensures your trading strategy is built on solid ground."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Integrating Risk Management",
    "label": "Core Track",
    "body": "### Core Scenario: Incorporating Risk Management\nIntegrating risk management strategies into mid-session audits is vital for protecting against adverse market movements. This card teaches **how to apply risk management principles during live trading**.\n\n* **Position Sizing**: Calculate position size based on your risk tolerance and the current market conditions to ensure that no single trade can significantly impact your capital.\n* **Stop-Loss Orders**: Implement stop-loss orders that are dynamically adjusted based on real-time market volatility, ensuring that losses are contained.\n* **Risk-Reward Ratios**: Continuously evaluate risk-reward ratios for active positions, adjusting targets and stops as market conditions evolve.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade based on risk tolerance."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price, limiting potential losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Effective risk management during mid-session audits safeguards capital and enhances the sustainability of trading strategies.",
      "realLifeExample": "A trader with a 2% risk tolerance adjusts their position size on a volatile gold trade after observing a 1% price fluctuation, ensuring they remain within their risk parameters.",
      "commonMistake": "Neglecting to adjust stop-loss orders based on market conditions, leading to larger-than-expected losses.",
      "quickNote": "Risk management is a continuous process that must adapt to market conditions.",
      "mentorText": "Always remember, your capital is your lifeblood. If the market moves against you, your stop-loss should be your first line of defense, not an afterthought.",
      "mentorAnalogy": "Think of risk management like a safety harness for a climber; it’s there to catch you when the climb gets too steep."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Assessing Market Volatility",
    "label": "Core Track",
    "body": "### Core Scenario: Evaluating Market Volatility\nAssessing market volatility is essential for understanding its impact on active positions. This card teaches **how to measure volatility and make timely adjustments**.\n\n* **Volatility Indicators**: Utilize indicators such as the Average True Range (ATR) to quantify market volatility and adjust position sizes or stop-loss levels accordingly.\n* **News Impact Assessment**: Monitor economic calendar events that can trigger volatility spikes, preparing to adjust positions preemptively based on expected market reactions.\n* **Timeframe Analysis**: Analyze different timeframes to gauge volatility trends, allowing for better timing in trade execution and adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that can impact market volatility."
        },
        {
          "term": "Timeframe Analysis",
          "definition": "The examination of price movements across different timeframes to identify trends and volatility."
        }
      ],
      "whyThisMatters": "Understanding market volatility enables traders to make informed decisions about position management and risk exposure.",
      "realLifeExample": "A trader observes that the ATR for USDJPY has increased to 0.0050 during a high-impact news release, prompting them to widen their stop-loss to accommodate potential price swings.",
      "commonMistake": "Failing to account for volatility changes, leading to inappropriate position sizing and risk exposure.",
      "quickNote": "Volatility assessment is critical for effective trade management.",
      "mentorText": "Always keep an eye on volatility. If the ATR spikes, it’s a signal to reassess your risk and potentially adjust your positions to avoid being caught off guard.",
      "mentorAnalogy": "Assessing market volatility is like a sailor checking wind conditions before setting sail; it determines how you navigate the waters ahead."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Timing Your Trade Executions",
    "label": "Core Track",
    "body": "### Core Scenario: Timing Execution\nTiming is critical in executing trades, particularly during mid-session audits where market conditions can shift rapidly. This card teaches **how to align trade executions with real-time market evaluations**.\n\n* **Market Condition Assessment**: Evaluate the current market environment by analyzing volatility metrics and news events. For example, if the USDJPY is experiencing a 20-pip spike due to unexpected economic data, execution should be aligned with this momentum.\n* **Execution Windows**: Identify optimal execution windows based on liquidity and market activity. For instance, executing trades during the overlap of the London and New York sessions can enhance fill quality and reduce slippage.\n* **Adaptive Execution Strategy**: Adjust your execution strategy dynamically based on real-time audits. If a trade is showing a 0.5% drawdown, consider delaying execution until market conditions stabilize.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Timing",
          "definition": "The strategic alignment of trade entries with real-time market conditions."
        }
      ],
      "whyThisMatters": "Proper timing can significantly enhance trade outcomes and minimize losses during volatile market conditions.",
      "realLifeExample": "During the London session, GBPUSD spiked 30 pips on a surprise interest rate announcement, necessitating immediate execution to capitalize on the movement.",
      "commonMistake": "Failing to adjust execution timing based on real-time market conditions often leads to missed opportunities or increased losses.",
      "quickNote": "Align trade executions with real-time market conditions for optimal results.",
      "mentorText": "When you see a market shift, don’t hesitate. Timing your entry can mean the difference between profit and loss. Always assess the market pulse before executing.",
      "mentorAnalogy": "Think of a surgeon timing an incision precisely during a critical operation; a moment's delay can alter the outcome significantly."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Evaluating Trade Performance",
    "label": "Core Track",
    "body": "### Core Scenario: Real-Time Trade Evaluation\nEvaluating trade performance in real-time allows for immediate adjustments and strategic pivots. This card teaches **how to assess ongoing trades effectively**.\n\n* **Performance Metrics**: Utilize metrics such as risk-reward ratio and win rate to evaluate trade effectiveness. For example, if a trade on AUDCAD shows a 1:2 risk-reward ratio but is currently at a 1% loss, reassess the position.\n* **Feedback Loops**: Implement feedback loops by documenting trade outcomes and market conditions. If a trade on EURUSD consistently underperforms during specific news events, adjust future strategies accordingly.\n* **Adjustment Protocols**: Establish protocols for making real-time adjustments based on performance evaluations. If a position is not aligning with expected outcomes, consider scaling out or adjusting stop-loss levels immediately.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to assess the effectiveness of trades."
        }
      ],
      "whyThisMatters": "Continuous evaluation enables traders to adapt strategies promptly, enhancing overall trading performance.",
      "realLifeExample": "A trader notices that their long position in S&P 500 is underperforming during a market correction, prompting immediate reassessment and potential exit.",
      "commonMistake": "Ignoring real-time performance data can lead to prolonged losses and missed opportunities for adjustment.",
      "quickNote": "Evaluate trades continuously to adapt strategies and improve outcomes.",
      "mentorText": "Always keep an eye on your trades. If something’s not working, don’t be afraid to pivot. Real-time evaluation is your best friend.",
      "mentorAnalogy": "Like a pilot monitoring flight instruments, you must constantly assess your trade performance to ensure a smooth journey."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Conducting Live Scenario Analysis",
    "label": "Core Track",
    "body": "### Core Scenario: Live Scenario Analysis\nConducting live scenario analysis allows traders to anticipate market movements and adjust positions accordingly. This card teaches **how to perform effective scenario analysis during trading sessions**.\n\n* **Scenario Planning**: Develop multiple scenarios based on current market data. For instance, if the DXY is trending upwards, consider how this affects pairs like EURUSD and plan accordingly.\n* **Market Reaction Assessment**: Monitor how the market reacts to news and economic indicators. If the unemployment rate drops unexpectedly, analyze potential impacts on USD pairs and adjust positions in real-time.\n* **Dynamic Adjustment**: Be prepared to adjust your trading strategy based on real-time scenario outcomes. If a bullish scenario for GBPUSD unfolds, consider increasing your position size to capitalize on the momentum.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential market movements based on current data and events."
        }
      ],
      "whyThisMatters": "Effective scenario analysis enables traders to proactively manage risk and seize opportunities as they arise.",
      "realLifeExample": "During a live session, a trader anticipates a bullish move in gold after a geopolitical event and adjusts their position size accordingly, resulting in a 2% gain.",
      "commonMistake": "Failing to conduct scenario analysis can lead to reactive trading, increasing the risk of losses.",
      "quickNote": "Conduct live scenario analysis to anticipate market movements and adjust strategies effectively.",
      "mentorText": "Stay ahead of the market by analyzing potential scenarios. If you see a shift, be ready to adapt your strategy immediately.",
      "mentorAnalogy": "Like an architect adjusting plans on-site based on real-time conditions, you must adapt your trading strategy to unfolding market scenarios."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Maintaining Emotional Discipline",
    "label": "Core Track",
    "body": "### Core Scenario: Emotional Discipline\nMaintaining emotional discipline during mid-session audits is essential to avoid impulsive trading decisions. This card teaches **strategies to uphold discipline in real-time**.\n\n* **Predefined Rules**: Establish clear trading rules before the session begins. For example, if your rule is to exit a position after a 1% loss, adhere strictly to this guideline regardless of emotional impulses.\n* **Mindfulness Techniques**: Implement mindfulness techniques to stay focused and reduce emotional reactions. Techniques such as deep breathing or short breaks can help maintain clarity during high-pressure moments.\n* **Accountability Measures**: Use accountability measures, such as trading journals or peer discussions, to reinforce discipline. Documenting your thought process can help you stay committed to your trading plan during volatile sessions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Discipline",
          "definition": "The ability to maintain composure and adhere to trading rules despite market fluctuations."
        }
      ],
      "whyThisMatters": "Emotional discipline is critical for making rational decisions and avoiding costly mistakes during trading sessions.",
      "realLifeExample": "A trader sticks to their exit strategy during a market dip, preventing a potential loss of 3% by adhering to their predefined rules.",
      "commonMistake": "Allowing emotions to dictate trading decisions often leads to impulsive actions and increased risk exposure.",
      "quickNote": "Uphold emotional discipline to make rational trading decisions and avoid impulsive actions.",
      "mentorText": "When the market gets volatile, remember your rules. Stick to your plan and don’t let emotions cloud your judgment.",
      "mentorAnalogy": "Like a surgeon maintaining focus during a critical operation, you must keep your composure to ensure successful trading outcomes."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Strategies for Trade Adjustments",
    "label": "Core Track",
    "body": "### Core Scenario: Trade Adjustment Strategies\nReal-time audits reveal critical market shifts that necessitate trade adjustments. This card outlines **specific strategies for modifying positions based on live data**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on volatility indicators, such as a 1.5% increase in ATR (Average True Range) during the session, to manage risk effectively.\n* **Stop-Loss Re-evaluation**: Reassess stop-loss levels when price action breaches significant support or resistance levels, such as a break below 1.2000 in EURUSD, indicating a change in market sentiment.\n* **Profit-Taking Strategies**: Implement profit-taking strategies when price reaches key Fibonacci retracement levels, for instance, exiting 50% of a position when the price retraces to the 61.8% level after a bullish breakout.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting the size of a trade based on current market volatility."
        },
        {
          "term": "Stop-Loss Re-evaluation",
          "definition": "Reassessing stop-loss levels in response to market changes."
        },
        {
          "term": "Profit-Taking Strategies",
          "definition": "Methods for securing profits at predetermined price levels."
        }
      ],
      "whyThisMatters": "Effective trade adjustments based on real-time audits can significantly enhance risk management and profitability.",
      "realLifeExample": "During the London session, GBPUSD spikes 80 pips due to unexpected economic data, prompting a re-evaluation of stop-loss levels from 1.3500 to 1.3450.",
      "commonMistake": "Failing to adjust position sizes in response to increased volatility, which can lead to excessive risk exposure.",
      "quickNote": "Adjust trades dynamically based on real-time market conditions.",
      "mentorText": "When you see volatility spike, don't just sit there. Adjust your position size to match the new market reality. If ATR jumps, it's time to rethink your risk.",
      "mentorAnalogy": "Think of it like a pilot adjusting altitude based on changing weather conditions; you must adapt your strategy to maintain a safe and profitable flight path."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Reflecting on Post-Audit Insights",
    "label": "Core Track",
    "body": "### Core Scenario: Post-Audit Reflection\nPost-session audits provide insights that are crucial for refining trading strategies. This card emphasizes **the importance of reflecting on insights gained from mid-session audits**.\n\n* **Insight Documentation**: Maintain a detailed log of observations made during audits, such as noting that a specific news event caused a 50-pip swing in USDJPY, to identify patterns over time.\n* **Strategy Evaluation**: Assess which strategies performed well or poorly during the session, for instance, recognizing that a trailing stop strategy yielded better results during high volatility periods.\n* **Feedback Loop Creation**: Establish a feedback loop by integrating insights into future trading plans, such as adjusting entry criteria based on the success rate of trades executed during specific market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Insight Documentation",
          "definition": "Recording observations from trading sessions for future analysis."
        },
        {
          "term": "Strategy Evaluation",
          "definition": "Assessing the effectiveness of trading strategies post-session."
        },
        {
          "term": "Feedback Loop Creation",
          "definition": "Integrating insights into future trading plans to enhance performance."
        }
      ],
      "whyThisMatters": "Reflecting on insights from audits allows traders to continuously improve their strategies and adapt to changing market conditions.",
      "realLifeExample": "After a session where EURUSD fluctuated significantly, a trader documents that trades initiated after major news releases had a 70% success rate, leading to a strategy adjustment.",
      "commonMistake": "Neglecting to document insights, which results in missed opportunities for strategy refinement.",
      "quickNote": "Reflect on insights to continuously improve trading strategies.",
      "mentorText": "After each session, take a moment to reflect. What worked? What didn’t? Document those insights; they are your roadmap to improvement.",
      "mentorAnalogy": "Like a surgeon reviewing a procedure to identify areas for improvement, you must analyze your trades to enhance your future performance."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Avoiding Common Pitfalls",
    "label": "Core Track",
    "body": "### Core Scenario: Common Pitfalls in Mid-Session Audits\nMid-session audits can lead to errors if common pitfalls are not recognized. This card identifies **frequent mistakes traders make during audits and how to avoid them**.\n\n* **Confirmation Bias**: Traders often seek information that confirms their existing positions, such as ignoring bearish signals in a bullish trend, which can lead to significant losses.\n* **Overreacting to Noise**: Reacting impulsively to minor fluctuations, such as a 10-pip movement in a stable market, can result in unnecessary adjustments and increased transaction costs.\n* **Neglecting Broader Context**: Focusing solely on immediate price action without considering broader market trends, like ignoring a strong USD trend while trading GBPUSD, can lead to misinformed decisions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to favor information that confirms existing beliefs."
        },
        {
          "term": "Overreacting to Noise",
          "definition": "Making impulsive decisions based on minor price fluctuations."
        },
        {
          "term": "Neglecting Broader Context",
          "definition": "Ignoring larger market trends while focusing on immediate price action."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding these pitfalls ensures more accurate audits and better trading decisions.",
      "realLifeExample": "A trader holds onto a long position in AUDUSD despite negative economic news, driven by confirmation bias, resulting in a 100-pip loss when the market corrects.",
      "commonMistake": "Failing to consider broader market conditions, leading to misaligned trades.",
      "quickNote": "Be aware of common pitfalls to enhance the accuracy of your audits.",
      "mentorText": "Stay objective during your audits. Don't let your biases cloud your judgment. If the data suggests a shift, be ready to adapt your strategy.",
      "mentorAnalogy": "Like a quality control engineer who must remain impartial when assessing product defects, you must evaluate your trades without bias to ensure optimal performance."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Synthesis of Audit Strategies",
    "label": "Core Track",
    "body": "### Core Scenario: Synthesizing Audit Strategies\nCombining insights from multiple audits can create a robust trading plan. This card focuses on **how to synthesize various strategies from your audits into a cohesive trading plan**.\n\n* **Strategy Integration**: Combine successful elements from different sessions, such as merging a profit-taking strategy from one session with a stop-loss adjustment from another, to create a more effective approach.\n* **Scenario Mapping**: Develop a scenario map that outlines how different strategies perform under varying market conditions, such as identifying that a specific strategy excels during high volatility periods.\n* **Continuous Refinement**: Regularly update your trading plan based on new insights, ensuring that strategies evolve with changing market dynamics, like adjusting entry points based on recent price action patterns.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Strategy Integration",
          "definition": "Combining successful strategies from different sessions into one plan."
        },
        {
          "term": "Scenario Mapping",
          "definition": "Creating a visual representation of how strategies perform in various conditions."
        },
        {
          "term": "Continuous Refinement",
          "definition": "Regularly updating trading strategies based on new insights."
        }
      ],
      "whyThisMatters": "Synthesis of strategies leads to a more adaptable and effective trading plan, enhancing overall performance.",
      "realLifeExample": "A trader synthesizes a successful trailing stop strategy from a volatile session with a static profit target from a stable session, resulting in improved performance in subsequent trades.",
      "commonMistake": "Failing to integrate insights from multiple audits, leading to a fragmented and less effective trading approach.",
      "quickNote": "Synthesize strategies from audits to create a cohesive trading plan.",
      "mentorText": "Look at your audits as pieces of a puzzle. Each session provides a piece that, when combined, reveals the bigger picture of your trading strategy.",
      "mentorAnalogy": "Like an architect combining various design elements to create a cohesive building plan, you must integrate diverse strategies into a unified trading approach."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "concept",
    "title": "Engaging in Real-Time Simulation for Mid-Session Audits",
    "label": "Core Track",
    "body": "### Core Scenario: Real-Time Simulation Practice\nPractical simulation enhances the ability to conduct mid-session audits effectively. This card focuses on **applying audit skills in a controlled trading environment**.\n\n* **Simulation Setup**: Utilize a trading platform to create a simulated environment that mirrors live market conditions, including volatility and liquidity.\n* **Position Review Protocol**: Establish a checklist to evaluate active positions, including entry points, stop-loss levels, and profit targets, ensuring alignment with the current market structure.\n* **Feedback Loop**: Implement a mechanism for immediate feedback on audit decisions, allowing for real-time adjustments and learning from mistakes during the simulation.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulation Setup",
          "definition": "Creating a controlled trading environment that mimics live market conditions."
        },
        {
          "term": "Position Review Protocol",
          "definition": "A systematic approach to evaluate active trading positions."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process for receiving immediate feedback on trading decisions."
        }
      ],
      "whyThisMatters": "Engaging in simulations allows traders to refine their mid-session audit skills without financial risk, enhancing decision-making capabilities in live scenarios.",
      "realLifeExample": "During a simulated session, a trader identifies a 15-pip drawdown on a GBPUSD long position, adjusting the stop-loss based on real-time volatility metrics, ultimately preserving capital.",
      "commonMistake": "Traders often overlook the importance of simulating various market conditions, leading to inadequate preparation for real-time audits.",
      "quickNote": "Simulations provide a risk-free environment to practice mid-session audits.",
      "mentorText": "In my experience, running through simulations is like rehearsing for a performance. You need to know your lines and cues before the real show starts.",
      "mentorAnalogy": "Think of a pilot in a flight simulator; they practice emergency scenarios to ensure they can handle real situations effectively."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "practice",
    "title": "Recapping Essential Concepts of Mid-Session Audits",
    "label": "Core Track",
    "body": "### Core Scenario: Summary of Key Concepts\nRecapping essential concepts solidifies understanding and application in live trading. This card emphasizes **the critical aspects of mid-session audits**.\n\n* **Market Structure Analysis**: Continuously assess the market structure to identify potential shifts in trend or momentum, adjusting positions accordingly.\n* **Risk Assessment Metrics**: Utilize risk management metrics such as the risk-reward ratio and position sizing to evaluate the viability of current trades during the session.\n* **Adaptive Strategy Implementation**: Be prepared to adapt trading strategies based on real-time data and audit findings, ensuring alignment with overall trading objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure Analysis",
          "definition": "The ongoing evaluation of market trends and momentum shifts."
        },
        {
          "term": "Risk Assessment Metrics",
          "definition": "Quantitative measures used to evaluate the risk associated with trades."
        },
        {
          "term": "Adaptive Strategy Implementation",
          "definition": "Adjusting trading strategies based on real-time market data."
        }
      ],
      "whyThisMatters": "A solid grasp of these concepts enables traders to make informed decisions during live trading sessions, enhancing performance and capital preservation.",
      "realLifeExample": "During a live session, a trader notices a shift in the EURUSD market structure, prompting an adjustment to their risk-reward ratio from 1:2 to 1:1.5 to manage exposure effectively.",
      "commonMistake": "Failing to recap and internalize key concepts can lead to inconsistent application during live trading, resulting in missed opportunities.",
      "quickNote": "Regularly reviewing key concepts enhances decision-making in live trading.",
      "mentorText": "You must internalize these concepts; they are your foundation. Without them, your trading decisions will lack the necessary support.",
      "mentorAnalogy": "Like a surgeon reviewing a procedure before an operation, you must ensure every step is clear before executing trades."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary focus of mid-session audits?",
      "options": [
        {
          "id": "0",
          "text": "To evaluate market conditions and adjust positions accordingly.",
          "isCorrect": true,
          "feedback": "Correct. The primary focus is to assess market conditions and make necessary adjustments."
        },
        {
          "id": "1",
          "text": "To predict future market movements based on historical data.",
          "isCorrect": false,
          "feedback": "Incorrect. Mid-session audits focus on current market conditions, not predictions."
        },
        {
          "id": "2",
          "text": "To establish new trading strategies without considering existing positions.",
          "isCorrect": false,
          "feedback": "Incorrect. Audits require evaluating existing positions before establishing new strategies."
        },
        {
          "id": "3",
          "text": "To analyze past performance without real-time adjustments.",
          "isCorrect": false,
          "feedback": "Incorrect. Mid-session audits are about real-time analysis, not retrospective evaluation."
        }
      ]
    },
    "visualKey": "mid-session-audit-log"
  },
  {
    "type": "summary",
    "title": "Advanced Risk Management in Mid-Session Audits",
    "label": "Core Track",
    "body": "### Core Scenario: Core Advanced Risk Management 15\nAdvanced application of mid-session audits focuses on capital defense and risk management metrics. This card covers **strategies for protecting capital during live execution**.\n\n* **Dynamic Capital Allocation**: Adjust capital allocation based on real-time risk assessments, ensuring that no single position jeopardizes overall portfolio health.\n* **Volatility Adjustments**: Incorporate volatility measures into risk management strategies, modifying stop-loss orders and position sizes in response to market fluctuations.\n* **Performance Metrics Tracking**: Establish a system for tracking performance metrics during the session, allowing for immediate adjustments to risk management strategies based on live data.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Capital Allocation",
          "definition": "Adjusting capital distribution based on current risk assessments."
        },
        {
          "term": "Volatility Adjustments",
          "definition": "Modifying trading parameters in response to market volatility."
        },
        {
          "term": "Performance Metrics Tracking",
          "definition": "Monitoring key performance indicators during trading sessions."
        }
      ],
      "whyThisMatters": "Implementing advanced risk management techniques during mid-session audits is essential for capital preservation and long-term trading success.",
      "realLifeExample": "In a volatile session, a trader reduces position size on a USDJPY trade by 30% after observing a spike in volatility, thereby protecting capital while maintaining market exposure.",
      "commonMistake": "Traders often neglect to adjust their risk management strategies in real-time, leading to increased exposure during volatile conditions.",
      "quickNote": "Advanced risk management is critical for capital preservation during live trading.",
      "mentorText": "You must treat your capital like a fortress. Every decision should reinforce its defenses against market volatility.",
      "mentorAnalogy": "Consider a military strategist adjusting troop deployments based on real-time battlefield conditions; flexibility is key to maintaining an advantage."
    },
    "taskData": null,
    "visualKey": "mid-session-audit-log"
  }
];
