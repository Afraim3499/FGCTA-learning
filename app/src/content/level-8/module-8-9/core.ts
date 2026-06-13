import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Drawdown Circuit Breakers",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C1 -->\n### Core Scenario: Drawdown Circuit Breakers Implementation\nImplementing drawdown circuit breakers is essential for maintaining capital integrity during adverse trading conditions. This card outlines **how to establish thresholds that trigger risk management protocols**.\n\n* **Threshold Definition**: Set a specific percentage drawdown limit (e.g., 5% of account equity) that, when breached, activates a pause in trading activities. This allows for a critical assessment of strategy effectiveness.\n* **Trade Suspension Protocol**: Upon hitting the drawdown threshold, suspend all trading for a minimum of 24 hours. Use this time to analyze recent trades and identify potential flaws in execution or strategy.\n* **Recovery Plan Activation**: Develop a structured recovery plan that includes reduced position sizes and a focus on high-probability setups only after a drawdown event to mitigate further losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Circuit Breaker",
          "definition": "A predefined threshold that triggers risk management actions to prevent excessive capital loss."
        }
      ],
      "whyThisMatters": "Implementing circuit breakers ensures that traders do not exacerbate losses during prolonged losing streaks, preserving capital for future opportunities.",
      "realLifeExample": "A trader experiences a 6% drawdown on a $100,000 account, triggering a circuit breaker that halts trading for 24 hours while they reassess their strategy.",
      "commonMistake": "Failing to set a drawdown threshold leads to emotional decision-making and potential catastrophic losses.",
      "quickNote": "Establish drawdown circuit breakers to safeguard capital during adverse trading conditions.",
      "mentorText": "When you hit your drawdown limit, take a step back. This isn't the time to double down; it's a moment to reassess and recalibrate your approach.",
      "mentorAnalogy": "Think of a drawdown circuit breaker like an aircraft's emergency landing protocol. When conditions become unsafe, the pilot must divert to ensure safety before proceeding."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Scaling Down Risk During Losing Streaks",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C2 -->\n### Core Scenario: Risk Scaling During Consecutive Losses\nScaling down risk exposure during losing streaks is critical for capital preservation. This card details **how to adjust position sizes to mitigate further drawdowns**.\n\n* **Dynamic Position Sizing**: Implement a formula to reduce position size by a fixed percentage (e.g., 25%) for each consecutive loss. This approach helps to limit exposure while still allowing for potential recovery.\n* **Loss Threshold Monitoring**: Continuously monitor cumulative losses and adjust risk parameters accordingly. If losses exceed a predetermined threshold, further reduce position sizes until recovery is achieved.\n* **Focus on High-Quality Setups**: During periods of consecutive losses, prioritize only the highest probability setups. This selective approach minimizes risk while maintaining the potential for profit.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting trade sizes based on recent performance to manage risk effectively."
        }
      ],
      "whyThisMatters": "Scaling down risk during losing streaks prevents deeper drawdowns and preserves capital for future trades.",
      "realLifeExample": "After three consecutive losses totaling $3,000, a trader reduces their position size from $1,000 to $750 for the next trade, focusing on a high-probability setup.",
      "commonMistake": "Traders often maintain or increase position sizes during losing streaks, leading to amplified losses.",
      "quickNote": "Reduce position sizes during losing streaks to safeguard capital.",
      "mentorText": "When losses stack up, it's time to tighten your belt. Scale back your risk and focus on trades that have the highest probability of success.",
      "mentorAnalogy": "Scaling down risk is like a surgeon reducing the number of procedures during a high complication rate. Focus on quality over quantity to ensure patient safety."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Identifying Tail Events in Trading",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C3 -->\n### Core Scenario: Tail Event Recognition\nRecognizing tail events is crucial for adjusting trading strategies proactively. This card explains **how to identify and respond to rare but impactful market events**.\n\n* **Statistical Analysis**: Use historical data to identify patterns of tail events, defined as occurrences outside the 95% confidence interval. For example, a sudden 200-pip move in EURUSD due to geopolitical news is a tail event.\n* **Market Sentiment Monitoring**: Track market sentiment indicators, such as the VIX or news sentiment analysis, to gauge potential volatility spikes that could signal an impending tail event.\n* **Preemptive Strategy Adjustment**: Develop contingency plans for identified tail events, including adjusting stop-loss levels and reducing position sizes ahead of high-impact news releases.",
    "context": {
      "keyTerms": [
        {
          "term": "Tail Event",
          "definition": "A rare market occurrence that significantly deviates from expected outcomes, often leading to substantial losses."
        }
      ],
      "whyThisMatters": "Identifying tail events allows traders to adjust their strategies proactively, reducing the risk of significant drawdowns.",
      "realLifeExample": "A trader notices a spike in VIX ahead of an important economic report and reduces their position size in GBPUSD, successfully avoiding a 150-pip adverse move.",
      "commonMistake": "Ignoring signs of potential tail events can lead to unpreparedness and significant losses.",
      "quickNote": "Proactively identify tail events to adjust your trading strategy and mitigate risks.",
      "mentorText": "Stay alert for signs of market turbulence. When you see volatility indicators spiking, it's time to reassess your positions and prepare for the unexpected.",
      "mentorAnalogy": "Identifying tail events is like a meteorologist predicting a hurricane. Early detection allows for preparation and risk mitigation before the storm hits."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Analyzing Equity Curve Stagnation",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C4 -->\n### Core Scenario: Equity Curve Analysis\nAnalyzing equity curve stagnation is essential for determining when to implement recovery strategies. This card discusses **how to identify stagnation and take corrective actions**.\n\n* **Equity Curve Monitoring**: Regularly review your equity curve for periods of flat performance, defined as no significant upward movement over a specified timeframe (e.g., 4 weeks). This stagnation may indicate underlying issues in strategy effectiveness.\n* **Performance Metrics Evaluation**: Assess key performance metrics such as win rate, average trade duration, and risk-reward ratio during stagnation periods. Identify any declining trends that may require strategic adjustments.\n* **Recovery Strategy Implementation**: Upon identifying stagnation, develop a recovery strategy that may include reducing trade frequency, focusing on higher probability trades, or temporarily adjusting risk parameters to regain upward momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Equity Curve Stagnation",
          "definition": "A period where the equity curve shows little to no growth, indicating potential issues with trading strategy."
        }
      ],
      "whyThisMatters": "Recognizing stagnation allows traders to take corrective actions before losses accumulate, ensuring long-term profitability.",
      "realLifeExample": "A trader notices their equity curve has plateaued for 5 weeks, prompting them to analyze their win rate, which has dropped from 60% to 45%, leading to a strategic overhaul.",
      "commonMistake": "Failing to analyze equity curve stagnation can result in prolonged periods of underperformance and capital erosion.",
      "quickNote": "Regularly analyze your equity curve to identify stagnation and implement recovery strategies.",
      "mentorText": "If your equity curve isn't moving up, it's time to dig deep. Analyze your trades and make the necessary adjustments to get back on track.",
      "mentorAnalogy": "Analyzing equity curve stagnation is like a car mechanic diagnosing a vehicle that won't accelerate. Identifying the issue early can prevent a complete breakdown."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Dynamic Risk Adjustment Techniques",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C5 -->\n### Core Scenario: Dynamic Risk Adjustment\nDynamic risk adjustment allows traders to recalibrate their risk parameters based on recent performance metrics. This card details **how to implement adaptive risk sizing in response to market conditions**.\n\n* **Performance-Based Risk Scaling**: Adjust position sizes based on the last 10 trades' win/loss ratio. For instance, if the ratio drops below 40%, reduce position size by 25% until recovery is observed.\n* **Volatility Assessment**: Utilize the Average True Range (ATR) to gauge market volatility. If the ATR for a currency pair like EURUSD exceeds 0.0050, consider reducing risk exposure by 15% to account for increased uncertainty.\n* **Equity Curve Monitoring**: Track the equity curve weekly. If a stagnation period exceeds 5% drawdown from the peak, implement a risk reduction protocol, decreasing all active positions by 10% until a recovery trend is established.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Risk Adjustment",
          "definition": "The process of modifying risk parameters based on recent trading performance and market conditions."
        }
      ],
      "whyThisMatters": "Dynamic risk adjustment ensures that traders are not overexposed during unfavorable market conditions, preserving capital for future opportunities.",
      "realLifeExample": "After experiencing a 5% drawdown over two weeks, a trader reduces their position size in GBPJPY from 1.0 lot to 0.75 lots, aligning with the recent performance metrics.",
      "commonMistake": "Traders often fail to adjust their risk parameters promptly, leading to larger losses during adverse market conditions.",
      "quickNote": "Adapt risk parameters based on recent performance to align with current market conditions.",
      "mentorText": "When the market shifts, you must shift with it. If your recent trades aren't performing, recalibrate your risk. It's about survival, not just profit.",
      "mentorAnalogy": "Think of a pilot adjusting altitude based on weather conditions. Just as a pilot must adapt to turbulence, a trader must adjust risk to navigate market volatility."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Developing Effective Recovery Strategies",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C6 -->\n### Core Scenario: Tailored Recovery Strategies\nCreating effective recovery strategies is essential for addressing specific drawdown scenarios. This card outlines **how to formulate a structured recovery plan**.\n\n* **Scenario Analysis**: Identify the root cause of the drawdown. For example, if a trader incurs losses due to high volatility in the AUDUSD, develop a strategy that focuses on lower volatility pairs like USDCHF for recovery.\n* **Incremental Recovery Goals**: Set specific, measurable recovery targets. For instance, aim for a 2% increase in equity over the next month, adjusting position sizes to achieve this goal without over-leveraging.\n* **Time-Based Recovery Framework**: Establish a timeline for recovery. If a trader experiences a 10% drawdown, create a 3-month plan with weekly evaluations to assess progress and adjust strategies as needed.",
    "context": {
      "keyTerms": [
        {
          "term": "Recovery Strategy",
          "definition": "A structured plan designed to regain capital after experiencing a drawdown."
        }
      ],
      "whyThisMatters": "Tailored recovery strategies enhance a trader's ability to bounce back from drawdowns, ensuring long-term sustainability in trading.",
      "realLifeExample": "After a 7% drawdown in a month, a trader focuses on low-risk trades in the NZDUSD, setting a goal to recover 3% over the next four weeks by limiting position sizes.",
      "commonMistake": "Traders often implement generic recovery strategies without considering the specific circumstances of their drawdown.",
      "quickNote": "Develop tailored recovery strategies that address specific drawdown scenarios.",
      "mentorText": "After a setback, it's crucial to have a plan. Analyze what went wrong, set clear recovery targets, and adjust your approach to ensure you come back stronger.",
      "mentorAnalogy": "Just as an athlete adjusts their training regimen after an injury, a trader must refine their strategies post-drawdown to ensure a successful comeback."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Building Psychological Resilience During Drawdowns",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C7 -->\n### Core Scenario: Psychological Resilience\nMaintaining psychological resilience during drawdowns is critical for long-term trading success. This card emphasizes **strategies to cultivate discipline and focus**.\n\n* **Mindfulness Practices**: Implement daily mindfulness techniques, such as meditation or focused breathing, to manage stress levels during drawdowns. Allocate 10 minutes each morning to center your thoughts before trading.\n* **Structured Trading Journals**: Maintain a detailed trading journal to document emotions and decisions during drawdowns. Review entries weekly to identify patterns and triggers that affect your trading mindset.\n* **Support Systems**: Establish a network of fellow traders or mentors for accountability and support. Engage in weekly discussions to share experiences and strategies for overcoming psychological hurdles.",
    "context": {
      "keyTerms": [
        {
          "term": "Psychological Resilience",
          "definition": "The ability to maintain emotional stability and focus during challenging trading periods."
        }
      ],
      "whyThisMatters": "Building psychological resilience helps traders navigate emotional challenges, ensuring decisions remain objective and process-driven.",
      "realLifeExample": "A trader facing a 6% drawdown practices mindfulness techniques daily, resulting in improved decision-making and reduced emotional trading during recovery efforts.",
      "commonMistake": "Traders often neglect their mental state, leading to impulsive decisions and further losses during drawdowns.",
      "quickNote": "Cultivate psychological resilience to maintain focus and discipline during drawdowns.",
      "mentorText": "Your mindset is your most powerful tool. When faced with losses, take a step back, breathe, and remember that discipline is key to recovery.",
      "mentorAnalogy": "Like a surgeon maintaining composure during a critical operation, a trader must remain calm and focused, especially when navigating the pressures of drawdowns."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Conducting Post-Drawdown Performance Reviews",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C8 -->\n### Core Scenario: Post-Drawdown Reviews\nConducting thorough performance reviews after drawdowns is essential for continuous improvement. This card outlines **the process for effective post-drawdown analysis**.\n\n* **Data Compilation**: Gather all relevant trading data from the drawdown period, including trade logs, performance metrics, and market conditions. Analyze trades that contributed to losses and identify patterns.\n* **Root Cause Identification**: Use a structured approach to identify the root causes of the drawdown. For instance, if a trader's strategy failed due to market volatility, document specific trades that deviated from the plan.\n* **Actionable Insights**: Develop a list of actionable insights from the review. If emotional trading was identified as a key factor, create a plan to implement stricter adherence to trading rules in future sessions.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Drawdown Review",
          "definition": "A systematic evaluation of trading performance following a drawdown to identify lessons learned."
        }
      ],
      "whyThisMatters": "Post-drawdown reviews provide critical insights that enhance future trading strategies and decision-making processes.",
      "realLifeExample": "After a 5% drawdown, a trader reviews their performance, identifying that 70% of losses came from impulsive trades made during high volatility in the EURUSD.",
      "commonMistake": "Traders often skip performance reviews, missing valuable lessons that could prevent future drawdowns.",
      "quickNote": "Conduct thorough performance reviews after drawdowns to identify lessons learned and improve future decisions.",
      "mentorText": "Reviewing your performance after a drawdown is not optional; it's essential. Analyze what went wrong, learn from it, and adjust your strategy accordingly.",
      "mentorAnalogy": "Just as an engineer conducts a post-mortem on a failed project to prevent future mistakes, a trader must analyze drawdowns to refine their approach and enhance performance."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Capital Preservation Strategies During Recovery",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C9 -->\n### Core Strategy: Capital Preservation During Recovery\nCapital preservation is critical during recovery phases to avoid further losses and rebuild accounts sustainably. This card outlines **strategies to minimize risk while focusing on account recovery**.\n\n* **Reduced Position Sizing**: Implement a maximum position size reduction of 50% from pre-drawdown levels. For example, if your standard trade size was 1.0 lots, adjust to 0.5 lots until a stable equity curve is re-established.\n* **Risk-Adjusted Profit Targets**: Set profit targets at 1.5 times the risk instead of the usual 2:1 ratio during recovery. This adjustment allows for more achievable goals while still focusing on capital growth.\n* **Time-Based Recovery Assessment**: Establish a 30-day period post-drawdown where performance is monitored closely. If the account does not show a positive trend in this period, reassess strategy and risk parameters.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Preservation",
          "definition": "Strategies aimed at protecting trading capital during recovery phases."
        }
      ],
      "whyThisMatters": "Effective capital preservation prevents further erosion of equity, allowing for a more strategic recovery approach.",
      "realLifeExample": "After a drawdown of 15% on a $50,000 account, a trader reduces their position size from 1.0 to 0.5 lots on EURUSD trades, aiming for a more conservative recovery.",
      "commonMistake": "Traders often increase position sizes in an attempt to recover losses quickly, leading to further drawdowns.",
      "quickNote": "Preserve capital first; recovery will follow.",
      "mentorText": "Focus on rebuilding your capital without risking more. Adjust your position sizes and set realistic profit targets. This isn't about speed; it's about sustainability.",
      "mentorAnalogy": "Think of a pilot adjusting altitude after turbulence. They don't rush back to cruising height; they stabilize first before ascending."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Evaluating Risk-Reward Ratios Post-Drawdown",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C10 -->\n### Core Evaluation: Risk-Reward Ratios Post-Drawdown\nPost-drawdown, evaluating risk-reward ratios is essential to ensure future trades are strategically aligned for recovery. This card discusses **how to recalibrate risk-reward assessments**.\n\n* **Minimum Risk-Reward Threshold**: Set a minimum risk-reward ratio of 1:2 for all trades until the account recovers to its previous high. This ensures that every trade contributes positively to the equity curve.\n* **Dynamic Adjustment of Targets**: Adjust profit targets based on the volatility of the instrument. For instance, if trading GBPJPY, which has higher volatility, consider a risk-reward ratio of 1:2.5 to account for larger price swings.\n* **Post-Trade Analysis**: After each trade, conduct a review of the risk-reward ratio achieved versus the planned ratio. Document any discrepancies to refine future strategy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Maintaining a favorable risk-reward ratio post-drawdown is crucial for ensuring that recovery efforts are effective and sustainable.",
      "realLifeExample": "After a 10% drawdown, a trader sets a risk-reward ratio of 1:2 on a trade with a stop loss of 20 pips, aiming for a target of 40 pips on USDJPY.",
      "commonMistake": "Traders often lower their risk-reward expectations post-drawdown, leading to inadequate recovery potential.",
      "quickNote": "Maintain a minimum risk-reward ratio to support recovery.",
      "mentorText": "Evaluate every trade critically. If you're not hitting at least a 1:2 risk-reward ratio, reassess your strategy. Recovery requires discipline.",
      "mentorAnalogy": "Like an architect ensuring structural integrity after a quake, you must reinforce your trading framework to withstand future market fluctuations."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Adapting Trading Plans Post-Drawdown",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C11 -->\n### Core Adaptation: Trading Plans Post-Drawdown\nAdapting your trading plan after experiencing a drawdown is essential for maintaining relevance and effectiveness in changing market conditions. This card focuses on **how to revise your trading plan strategically**.\n\n* **Review and Revise Strategy Components**: Analyze the components of your trading strategy that contributed to the drawdown. For instance, if a specific indicator led to poor entries, consider replacing it with a more reliable one.\n* **Incorporate Market Condition Filters**: Introduce filters that adapt to current market conditions. For example, if volatility is high, limit trades to those with confirmed setups rather than speculative entries.\n* **Set Recovery Milestones**: Define clear milestones for recovery, such as regaining 50% of the drawdown before reverting to original trading strategies. This creates a structured approach to recovery.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Plan",
          "definition": "A documented strategy outlining entry, exit, and risk management rules."
        }
      ],
      "whyThisMatters": "A flexible trading plan that adapts to market conditions enhances the likelihood of successful recovery.",
      "realLifeExample": "After a drawdown, a trader revises their strategy to exclude trades based on a specific moving average that previously led to losses, opting instead for price action confirmation.",
      "commonMistake": "Traders often stick to outdated strategies without evaluating their effectiveness post-drawdown.",
      "quickNote": "Adapt your trading plan to reflect current market realities.",
      "mentorText": "Your trading plan must evolve. Analyze what went wrong, and adjust your strategy to ensure it aligns with the current market environment. Don't be rigid; be responsive.",
      "mentorAnalogy": "Just as a surgeon adjusts their technique based on patient response, you must modify your trading approach based on market feedback."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Automating Risk Management Protocols",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C12 -->\n### Core Automation: Risk Management Protocols\nAutomating risk management protocols can streamline the drawdown recovery process and mitigate emotional decision-making. This card discusses **the implementation of automated systems for risk management**.\n\n* **Set Automated Stop-Loss Orders**: Utilize automated stop-loss orders to limit losses on each trade. For example, set a stop-loss at 1% of account equity for each position, ensuring consistent risk management.\n* **Implement Trailing Stops**: Use trailing stops to lock in profits as trades move in your favor. For instance, if a trade on AUDCAD moves 30 pips in profit, set a trailing stop to secure 15 pips automatically.\n* **Risk Allocation Algorithms**: Develop algorithms that adjust position sizes based on current account equity and volatility. For example, if equity drops below a certain threshold, automatically reduce position sizes by 25% until recovery is achieved.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Automated Risk Management",
          "definition": "Systems that manage trading risks without manual intervention."
        }
      ],
      "whyThisMatters": "Automation reduces emotional biases, ensuring that risk management protocols are consistently applied during recovery phases.",
      "realLifeExample": "A trader sets an automated stop-loss at 1% of their $40,000 account on a new position in NZDUSD, ensuring that losses are capped at $400.",
      "commonMistake": "Traders often neglect to automate risk management, leading to inconsistent application of rules during emotional trading periods.",
      "quickNote": "Automate risk management to minimize emotional decision-making.",
      "mentorText": "Implement automation in your trading to take the emotion out of risk management. Set your parameters and let the system do the work. Consistency is key.",
      "mentorAnalogy": "Like an air traffic control system that manages flight paths automatically, your trading should have automated protocols to ensure safety and efficiency."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Simulating Drawdown Scenarios",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C13 -->\n### Core Scenario: Practical Drawdown Simulation\nSimulating drawdown scenarios allows traders to experience potential equity curve impacts without real capital exposure. This card outlines **how to create and analyze simulated drawdown situations**.\n\n* **Scenario Design**: Construct various drawdown scenarios based on historical data. For instance, simulate a 20% drawdown in a trading account starting with $100,000, resulting in an equity curve dip to $80,000.\n* **Risk Sizing Adjustments**: Apply different risk sizing rules during simulations. For example, reduce position size from 2% to 1% of equity during a simulated drawdown to assess recovery strategies.\n* **Performance Metrics**: Track performance metrics such as recovery time and maximum drawdown. Analyze how long it takes to return to the original equity level, e.g., recovering from $80,000 back to $100,000 over 10 trades.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Simulation",
          "definition": "A controlled exercise that models potential equity losses in trading."
        }
      ],
      "whyThisMatters": "Engaging in drawdown simulations prepares traders to handle real market stress and refine their recovery strategies effectively.",
      "realLifeExample": "Simulating a 15% drawdown on a $50,000 account, resulting in a dip to $42,500, and testing recovery strategies over 5 trades.",
      "commonMistake": "Traders often neglect to adjust their risk parameters during simulations, leading to unrealistic recovery expectations.",
      "quickNote": "Simulations provide a risk-free environment to test recovery strategies under drawdown conditions.",
      "mentorText": "Imagine you're a pilot practicing emergency landings in a simulator. You need to understand how to react under pressure without risking lives. Similarly, drawdown simulations prepare you for real trading scenarios.",
      "mentorAnalogy": "Just as an architect uses models to simulate structural integrity under stress, traders must simulate drawdowns to evaluate their strategies' resilience."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "practice",
    "title": "Summary of Drawdown Auditing & Recovery",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C14 -->\n### Core Scenario: Drawdown Auditing Recap\nThis card consolidates the essential strategies for managing drawdowns and recovering capital effectively. It reinforces **the critical components of drawdown auditing and recovery techniques**.\n\n* **Drawdown Identification**: Recognize drawdown thresholds using metrics such as the maximum drawdown percentage. For instance, identify a 10% drawdown on a $100,000 account as a critical alert level.\n* **Recovery Strategies**: Implement recovery strategies such as scaling down position sizes or altering trade frequency. For example, after a 15% drawdown, reduce position size from $2,000 to $1,000 until recovery is achieved.\n* **Performance Review**: Conduct regular performance reviews to assess drawdown impacts. Analyze the equity curve for stagnation periods and adjust strategies accordingly, e.g., if the equity curve stagnates for over 10 trades, reassess risk management rules.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Drawdown Auditing",
          "definition": "The process of evaluating and managing periods of equity loss in trading."
        }
      ],
      "whyThisMatters": "Understanding drawdown auditing ensures traders can effectively manage risk and implement recovery strategies to safeguard capital.",
      "realLifeExample": "After experiencing a 12% drawdown on a $75,000 account, implementing a strategy to reduce position sizes by 50% until the account recovers to $75,000.",
      "commonMistake": "Failing to conduct performance reviews leads to missed opportunities for adjusting risk management during drawdown periods.",
      "quickNote": "Regular audits and strategic adjustments are vital for effective drawdown recovery.",
      "mentorText": "Think of this like a coach reviewing game footage. You need to analyze where you went wrong during drawdowns to improve future performance.",
      "mentorAnalogy": "Just as a surgeon reviews patient outcomes to refine techniques, traders must audit their drawdowns to enhance recovery strategies."
    },
    "taskData": {
      "type": "choice_block",
      "question": "After experiencing a 10% drawdown, what is the most effective immediate action to take?",
      "options": [
        {
          "id": "0",
          "text": "Increase position sizes to recover losses quickly.",
          "isCorrect": false,
          "feedback": "Increasing position sizes can amplify losses and worsen the drawdown."
        },
        {
          "id": "1",
          "text": "Reduce position sizes and reassess trading strategy.",
          "isCorrect": true,
          "feedback": "Reducing position sizes allows for a more measured approach to recovery, minimizing risk."
        },
        {
          "id": "2",
          "text": "Continue trading without any adjustments.",
          "isCorrect": false,
          "feedback": "Continuing without adjustments can lead to further losses and prolonged drawdown."
        },
        {
          "id": "3",
          "text": "Withdraw funds to avoid further losses.",
          "isCorrect": false,
          "feedback": "Withdrawing funds does not address the underlying issues causing the drawdown."
        }
      ]
    },
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "summary",
    "title": "Core Management Review 15 (Module 8.9 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.9-core-C15 -->\n### Core Scenario: Advanced Drawdown Management\nThis card focuses on the advanced application of drawdown auditing and recovery concepts tailored for Core trading. It emphasizes **strategic management of drawdowns to enhance overall trading performance**.\n\n* **Dynamic Risk Assessment**: Continuously assess risk exposure during drawdown phases. For instance, if a trader's account experiences a 20% drawdown, dynamically adjust risk parameters based on current equity levels.\n* **Equity Curve Analysis**: Analyze the equity curve for patterns indicating stagnation or recovery. Identify if the equity curve has plateaued for over 15 trades, indicating a need for strategy reassessment.\n* **Tail Event Preparation**: Prepare for tail events by implementing contingency plans. For example, set aside 10% of capital as a buffer during high-volatility periods to manage potential drawdowns effectively.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Tail Event",
          "definition": "An unexpected market event that significantly impacts trading performance."
        }
      ],
      "whyThisMatters": "Advanced management of drawdown scenarios equips traders to navigate unexpected market conditions and safeguard their capital.",
      "realLifeExample": "During a market crash, a trader with a 15% drawdown implements a 10% capital buffer, allowing for strategic recovery without further risk exposure.",
      "commonMistake": "Traders often fail to adjust their strategies dynamically, leading to missed opportunities for recovery during drawdown periods.",
      "quickNote": "Advanced drawdown management is essential for long-term trading success.",
      "mentorText": "Consider this like a military strategist preparing for unexpected attacks. You need to have a plan in place to mitigate risks during drawdowns.",
      "mentorAnalogy": "Just as a firefighter prepares for unpredictable blazes with contingency plans, traders must prepare for tail events to manage drawdowns effectively."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  }
];
