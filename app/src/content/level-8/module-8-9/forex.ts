import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Position Size Adjustment Techniques",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C1 -->\n### Core Technique: Dynamic Position Sizing\nAdjusting position sizes during drawdown periods is critical for capital recovery. This card outlines **specific methodologies for recalibrating position sizes on Forex majors and crosses** to enhance recovery potential.\n\n* **Percentage Risk Model**: Limit risk to a fixed percentage of total equity (e.g., 1% per trade). During drawdowns, reduce position size proportionally to account for decreased equity, ensuring that risk remains consistent with your overall strategy.\n* **Volatility-Based Sizing**: Utilize the Average True Range (ATR) to adjust position sizes based on market volatility. For instance, if EURUSD's ATR is 50 pips, and you typically risk 20 pips, adjust your position size to maintain your risk threshold even as volatility fluctuates.\n* **Equity Curve Monitoring**: Implement a rule to reduce position sizes by 25% after a 5% drawdown. This conservative approach allows for gradual recovery without overexposing capital during adverse market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Percentage Risk Model",
          "definition": "A method of determining position size based on a fixed percentage of total equity."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Equity Curve",
          "definition": "A graphical representation of a trader's capital over time."
        }
      ],
      "whyThisMatters": "Effective position size adjustments during drawdowns can significantly enhance recovery potential and protect capital.",
      "realLifeExample": "During a drawdown, if your account equity drops from $10,000 to $9,500, adjust your position size from risking $100 (1%) to risking $95 (1% of new equity) on subsequent trades.",
      "commonMistake": "Failing to adjust position sizes in proportion to current equity, leading to excessive risk-taking during recovery attempts.",
      "quickNote": "Dynamic position sizing is essential for effective drawdown recovery.",
      "mentorText": "When you hit a drawdown, recalibrate your position sizes immediately. It’s not just about recovering losses; it’s about protecting your capital first.",
      "mentorAnalogy": "Think of this like a pilot adjusting fuel load based on current weight and conditions. Just as a pilot must ensure optimal fuel for safe flight, you must adjust your position size to ensure safe trading."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Analyzing Currency Pairs for Drawdown Recovery",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C2 -->\n### Core Analysis: Currency Pair Evaluation\nIdentifying currency pairs that present better recovery opportunities during drawdown phases is essential for strategic recovery. This card teaches **how to analyze various currency pairs effectively**.\n\n* **Correlation Analysis**: Examine the correlation between currency pairs. For instance, if EURUSD and GBPUSD have a strong positive correlation, focus on the pair showing relative strength for recovery trades.\n* **Fundamental Drivers**: Assess economic indicators impacting currency pairs. If the USD is strengthening due to positive employment data, consider focusing on pairs like USDJPY or AUDUSD that may be more responsive to USD movements.\n* **Technical Patterns**: Utilize chart patterns and key support/resistance levels. For example, if AUDNZD shows a bullish reversal pattern at a significant support level during a drawdown, this could signal a potential recovery opportunity.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Analysis",
          "definition": "A method of evaluating the relationship between two currency pairs."
        },
        {
          "term": "Fundamental Drivers",
          "definition": "Economic indicators that influence currency value."
        },
        {
          "term": "Technical Patterns",
          "definition": "Chart formations that indicate potential price movements."
        }
      ],
      "whyThisMatters": "Understanding which currency pairs offer better recovery potential allows for more informed trading decisions during drawdown periods.",
      "realLifeExample": "During a drawdown, you analyze EURUSD and AUDUSD; noticing EURUSD is correlated with positive news, you prioritize trades on EURUSD for potential recovery.",
      "commonMistake": "Overlooking the impact of correlations and fundamentals, leading to suboptimal pair selection during recovery attempts.",
      "quickNote": "Effective analysis of currency pairs can enhance recovery strategies during drawdowns.",
      "mentorText": "When assessing pairs, focus on those that are likely to respond favorably to current market conditions. It’s about finding the right vehicle for your recovery.",
      "mentorAnalogy": "Like a navigator selecting the best route based on current traffic conditions, you must choose currency pairs that can lead you out of drawdown efficiently."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Risk Reduction Methods for Forex Trading",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C3 -->\n### Core Method: Risk Mitigation Strategies\nMinimizing exposure during drawdown periods is vital for preserving capital. This card covers **various risk reduction methods tailored for Forex trading**.\n\n* **Stop-Loss Adjustments**: Tighten stop-loss levels to minimize potential losses. For example, if you typically set a stop-loss 50 pips away, consider reducing it to 30 pips during drawdowns to protect capital more aggressively.\n* **Diversification of Pairs**: Spread risk by diversifying trades across different currency pairs. Instead of focusing solely on EURUSD, include pairs like USDCHF and AUDCAD to mitigate exposure to a single currency's volatility.\n* **Scaling Down Positions**: Gradually reduce position sizes across all trades during drawdowns. If your typical position size is 1 lot, consider scaling down to 0.5 lots until recovery is achieved.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Adjustments",
          "definition": "Modifying stop-loss levels to limit potential losses."
        },
        {
          "term": "Diversification of Pairs",
          "definition": "Spreading risk across multiple currency pairs."
        },
        {
          "term": "Scaling Down Positions",
          "definition": "Reducing position sizes to lower overall risk exposure."
        }
      ],
      "whyThisMatters": "Implementing risk reduction methods during drawdowns can safeguard capital and facilitate recovery.",
      "realLifeExample": "In a drawdown scenario, you adjust your stop-loss on a EURJPY trade from 50 pips to 30 pips, effectively limiting potential losses as you reassess market conditions.",
      "commonMistake": "Neglecting to implement risk reduction strategies, leading to larger-than-necessary losses during drawdown periods.",
      "quickNote": "Effective risk reduction is crucial for capital preservation during drawdowns.",
      "mentorText": "When facing a drawdown, your first move should be to tighten your risk parameters. Protecting your capital is paramount.",
      "mentorAnalogy": "Just as a surgeon must minimize exposure to infection during a procedure, you must limit your risk exposure in trading to safeguard your capital."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Optimizing Trade Sizes During Recovery",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C4 -->\n### Core Strategy: Trade Size Optimization\nOptimizing trade sizes based on recent performance metrics is essential for effective recovery efforts. This card details **how to adjust trade sizes strategically**.\n\n* **Performance Metrics Review**: Analyze your last 10 trades to assess win/loss ratios and average returns. If the average return has dropped, reduce trade sizes to reflect this decline in performance.\n* **Incremental Size Increases**: Implement a rule to gradually increase trade sizes only after achieving a series of profitable trades (e.g., three consecutive wins). This approach prevents overexposure during recovery.\n* **Risk-Reward Ratio Assessment**: Ensure that trade sizes align with a favorable risk-reward ratio. For example, if you are targeting a 2:1 ratio, adjust your position size to ensure that potential losses do not exceed your risk threshold.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Metrics",
          "definition": "Data reflecting the outcomes of recent trades."
        },
        {
          "term": "Incremental Size Increases",
          "definition": "Gradually increasing trade sizes based on consistent performance."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Optimizing trade sizes during recovery ensures that efforts are effective and sustainable, minimizing the risk of further drawdowns.",
      "realLifeExample": "After a series of losses, you analyze your last 10 trades and find a win rate of 30%. You decide to reduce your position size from 1 lot to 0.5 lots until you achieve consistent profitability again.",
      "commonMistake": "Failing to adjust trade sizes based on performance metrics, leading to continued losses and potential capital depletion.",
      "quickNote": "Optimizing trade sizes is vital for sustainable recovery efforts.",
      "mentorText": "During recovery, focus on adjusting your trade sizes based on your recent performance. It’s about being strategic, not emotional.",
      "mentorAnalogy": "Like a chef adjusting ingredient quantities based on the taste of a dish, you must modify your trade sizes based on the performance of your recent trades."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Effective Margin Management in Forex",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C5 -->\n### Core Scenario: Effective Margin Management\nEffective margin management is critical in Forex to prevent excessive drawdowns and ensure sustainable trading practices. This card outlines **strategies to optimize margin usage while maintaining adequate capital for recovery**.\n\n* **Margin Utilization Ratio**: Maintain a margin utilization ratio below 50% to ensure sufficient buffer against adverse market movements. For instance, if your account balance is $10,000, limit your margin used to $5,000 or less.\n* **Dynamic Margin Adjustment**: Adjust margin levels based on volatility indicators. In periods of high volatility, such as during major economic announcements, reduce position sizes to mitigate risk exposure.\n* **Risk-Reward Calibration**: Establish a risk-reward ratio of at least 1:2. This ensures that even with a few losing trades, the overall account can recover effectively, e.g., risking $100 to gain $200 on each trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Utilization Ratio",
          "definition": "The percentage of account equity being used as margin for open positions."
        },
        {
          "term": "Dynamic Margin Adjustment",
          "definition": "Modifying margin requirements based on current market volatility."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Effective margin management directly impacts a trader's ability to withstand drawdowns and recover capital efficiently.",
      "realLifeExample": "During the EURUSD volatility spike on the NFP release, maintaining a margin utilization ratio of 40% allowed for quick recovery from a temporary drawdown of $1,200.",
      "commonMistake": "Traders often over-leverage their accounts, leading to rapid drawdowns that are difficult to recover from.",
      "quickNote": "Keep margin utilization below 50% to safeguard against drawdowns.",
      "mentorText": "Think of margin management as your safety net. If you’re walking a tightrope, you need enough net below to catch you if you slip. Keep your margin low enough to absorb market shocks.",
      "mentorAnalogy": "Like a pilot adjusting fuel reserves based on flight conditions, you must manage your margin to ensure you can navigate through turbulent market conditions."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Tactics for Forex Drawdown Recovery",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C6 -->\n### Core Scenario: Tactics for Drawdown Recovery\nRecovering from drawdowns requires a strategic approach that aligns with market conditions. This card details **specific tactics to facilitate recovery during favorable market scenarios**.\n\n* **Market Timing Analysis**: Identify optimal recovery windows by analyzing market trends and economic calendars. For example, entering trades during the London session when volatility is typically higher can enhance recovery chances.\n* **Position Sizing Strategy**: Implement a reduced position size during recovery phases. For instance, if your typical trade size is 1 lot, consider scaling down to 0.5 lots until the account shows consistent positive movement.\n* **Utilizing Technical Indicators**: Use indicators like the RSI or MACD to identify oversold conditions that may signal a recovery opportunity. For example, an RSI reading below 30 on USDJPY could indicate a potential bounce back.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Timing Analysis",
          "definition": "Evaluating the best times to enter or exit trades based on market conditions."
        },
        {
          "term": "Position Sizing Strategy",
          "definition": "Adjusting the size of trades to manage risk effectively during recovery."
        },
        {
          "term": "Technical Indicators",
          "definition": "Statistical tools used to analyze market trends and price movements."
        }
      ],
      "whyThisMatters": "Implementing effective recovery tactics can significantly shorten the duration of drawdowns and restore capital more efficiently.",
      "realLifeExample": "After experiencing a drawdown of $2,000, a trader reduced position sizes and focused on trading during the London session, leading to a recovery of $1,500 within two weeks.",
      "commonMistake": "Failing to adjust position sizes during recovery can exacerbate losses and prolong drawdown periods.",
      "quickNote": "Use market timing and reduced position sizes to recover from drawdowns effectively.",
      "mentorText": "When recovering from a drawdown, think of it as navigating through a storm. You need to adjust your sails—reduce your position sizes and choose your entry points wisely.",
      "mentorAnalogy": "Just as a surgeon carefully selects the right moment to operate based on a patient's condition, you must choose the right market conditions to execute your recovery trades."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "practice",
    "title": "Simulating Forex Recovery Scenarios",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C7 -->\n### Core Scenario: Simulating Recovery Scenarios\nEngaging in practical simulations allows traders to apply their knowledge of drawdown recovery in real-time scenarios. This card focuses on **practicing recovery strategies through simulated trading environments**.\n\n* **Scenario Setup**: Create a simulated trading environment reflecting recent market conditions. For example, replicate a scenario where GBPUSD experiences a sudden drop of 150 pips due to unexpected news.\n* **Recovery Plan Execution**: Implement your recovery tactics based on the simulated scenario. For instance, reduce position sizes and identify potential reversal points using technical indicators.\n* **Performance Review**: After executing trades in the simulation, conduct a thorough review of decisions made and outcomes achieved. Analyze what worked and what could be improved for future recovery efforts.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading Environment",
          "definition": "A practice platform that mimics real market conditions for training purposes."
        },
        {
          "term": "Recovery Plan Execution",
          "definition": "Implementing a predetermined strategy to recover from losses."
        },
        {
          "term": "Performance Review",
          "definition": "Analyzing trade outcomes to improve future decision-making."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to practice recovery strategies, enhancing a trader's readiness for real market conditions.",
      "realLifeExample": "In a simulated environment, a trader faced a 200-pip drawdown on AUDCAD and successfully implemented a recovery plan, regaining 80% of the losses within the simulation timeframe.",
      "commonMistake": "Traders often neglect to review their performance after simulations, missing valuable insights for real trading.",
      "quickNote": "Use simulated scenarios to practice and refine your recovery strategies.",
      "mentorText": "Think of simulations as your training ground. Just like athletes practice before a big game, you need to rehearse your recovery strategies to be prepared when it counts.",
      "mentorAnalogy": "Similar to a pilot using a flight simulator to prepare for emergency landings, you must practice recovery tactics in a simulated trading environment to ensure readiness for real market challenges."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated trading environment where GBPUSD has dropped 150 pips due to unexpected news, which recovery strategy should be prioritized to effectively manage the drawdown?",
      "options": [
        {
          "id": "0",
          "text": "Reduce position sizes and identify potential reversal points using technical indicators.",
          "isCorrect": true,
          "feedback": "This approach is correct as it mitigates risk by lowering exposure while allowing for strategic entry points based on market analysis."
        },
        {
          "id": "1",
          "text": "Increase position sizes to capitalize on the anticipated market rebound.",
          "isCorrect": false,
          "feedback": "This option is incorrect as increasing position sizes during a drawdown can exacerbate losses and increase risk exposure."
        },
        {
          "id": "2",
          "text": "Ignore the market conditions and continue trading as usual.",
          "isCorrect": false,
          "feedback": "This option is incorrect because neglecting market conditions can lead to further losses and does not align with effective recovery strategies."
        },
        {
          "id": "3",
          "text": "Only focus on long positions without considering market indicators.",
          "isCorrect": false,
          "feedback": "This option is incorrect as it disregards the importance of technical indicators and market analysis, which are crucial for informed trading decisions."
        }
      ]
    },
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Drawdown Recovery",
    "label": "Forex Track",
    "body": "<!-- M8.9-forex-C8 -->\n### Core Scenario: Summary of Recovery Strategies\nThis card summarizes essential strategies and techniques for recovering from drawdowns in Forex trading. Understanding these principles is vital for maintaining trading discipline and capital integrity.\n\n* **Margin Management**: Keep margin utilization below 50% to provide a buffer against drawdowns. This ensures that you can withstand market fluctuations without risking account depletion.\n* **Tactical Recovery**: Implement market timing and reduced position sizes during recovery phases to enhance the likelihood of regaining lost capital. Focus on high-probability setups to maximize recovery efficiency.\n* **Simulation Practice**: Regularly engage in simulated trading to practice recovery strategies. This helps reinforce decision-making skills and prepares you for real-world scenarios.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Capital Integrity",
          "definition": "The preservation of trading capital to ensure ongoing trading activities."
        },
        {
          "term": "High-Probability Setups",
          "definition": "Trading opportunities that have a higher likelihood of success based on analysis."
        },
        {
          "term": "Discipline in Trading",
          "definition": "The adherence to a predetermined trading plan and strategies."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces critical concepts that traders must internalize to effectively manage drawdowns and recover capital.",
      "realLifeExample": "A trader who consistently applies margin management and tactical recovery strategies was able to recover from a significant drawdown of $3,000 within six weeks, demonstrating the effectiveness of disciplined trading.",
      "commonMistake": "Failing to consolidate learning from recovery strategies can lead to repeated mistakes in real trading situations.",
      "quickNote": "Effective recovery requires disciplined margin management, tactical execution, and practice.",
      "mentorText": "Remember, recovery is not just about making back losses; it's about applying disciplined strategies consistently. Review these principles regularly to keep them fresh in your mind.",
      "mentorAnalogy": "Like an architect reviewing blueprints before construction, you must revisit your recovery strategies to ensure they are sound and ready for implementation when needed."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  }
];
