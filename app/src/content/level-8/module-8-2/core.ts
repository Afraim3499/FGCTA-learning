import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Reframing Losses as Operating Costs",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C1 -->\n### Core Scenario: Loss as a Business Expense\nViewing trading losses through the lens of business expenses allows for a more objective approach to trading. This card teaches **how to categorize losses as operational costs rather than personal failures**.\n\n* **Cost Accounting Principle**: Treat each loss as a necessary expense in the pursuit of profit. For instance, if a trader incurs a $500 loss on a trade, this should be viewed as a cost of conducting business, not as a personal defeat.\n* **Budget Allocation**: Allocate a specific percentage of your trading capital to cover losses. For example, if your trading account is $10,000, consider designating 5% ($500) as a loss buffer to manage expectations and reduce emotional stress.\n* **Profit and Loss Analysis**: Regularly review your losses alongside your gains to assess overall performance. This analysis should focus on the net profit over a defined period, such as quarterly, to reinforce the understanding that losses are part of the trading cycle.",
    "context": {
      "keyTerms": [
        {
          "term": "Operating Costs",
          "definition": "Expenses incurred in the process of trading that are necessary for generating profit."
        }
      ],
      "whyThisMatters": "Reframing losses as operating costs helps traders detach emotionally from outcomes, fostering a more analytical approach to trading decisions.",
      "realLifeExample": "A trader executing a series of trades incurs losses totaling $1,200 over a month. By categorizing these losses as operational costs, they adjust their trading strategy to focus on net profitability rather than individual trade outcomes.",
      "commonMistake": "Traders often internalize losses as personal failures, leading to emotional decision-making and erratic trading behavior.",
      "quickNote": "Treat losses as operational costs to maintain a clear focus on overall profitability.",
      "mentorText": "Think of your trading account as a business ledger. Every loss is simply a cost of doing business, not a reflection of your abilities. Focus on the bigger picture.",
      "mentorAnalogy": "Just as a restaurant incurs costs for ingredients that may not yield a profit, traders must accept losses as part of their operational expenses in the quest for overall success."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "The Psychology of Loss Acceptance",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C2 -->\n### Core Scenario: Overcoming Psychological Barriers\nTraders often face significant psychological barriers when it comes to accepting losses, which can hinder performance. This card teaches **strategies to overcome these barriers for improved decision-making**.\n\n* **Cognitive Dissonance**: Recognize the mental discomfort that arises from holding conflicting beliefs about losses. For example, if you believe that every loss is a failure, it may lead to avoidance of necessary risk-taking.\n* **Emotional Regulation Techniques**: Implement techniques such as mindfulness or breathing exercises to manage emotional responses to losses. For instance, taking a 5-minute break after a loss can help reset your mindset before the next trade.\n* **Reframing Techniques**: Shift your perspective by viewing losses as learning opportunities. After a losing trade, instead of focusing on the loss, analyze what went wrong and how to improve future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Cognitive Dissonance",
          "definition": "The mental discomfort experienced when holding contradictory beliefs, particularly about losses."
        }
      ],
      "whyThisMatters": "Overcoming psychological barriers related to loss acceptance is essential for maintaining discipline and making objective trading decisions.",
      "realLifeExample": "A trader experiences a loss on a EURUSD trade due to slippage. Instead of fixating on the loss, they analyze the market conditions and adjust their strategy for future trades.",
      "commonMistake": "Traders often allow emotional responses to dictate their actions following a loss, leading to impulsive decisions and further losses.",
      "quickNote": "Accepting losses as part of the process enhances decision-making and trading performance.",
      "mentorText": "You must confront the discomfort of losses head-on. Acknowledge them, learn from them, and move forward with a clearer mind.",
      "mentorAnalogy": "Just as a surgeon must accept that not every procedure will be successful, traders must accept losses as part of the surgical precision required in trading."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Understanding Mathematical Expectancy",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C3 -->\n### Core Scenario: Calculating Expectancy\nMathematical expectancy is a critical metric for evaluating the potential profitability of trades. This card teaches **how to calculate and apply expectancy to trading strategies**.\n\n* **Expectancy Formula**: Use the formula: Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss). For example, if a trader has a win rate of 60% with an average win of $200 and an average loss of $100, the expectancy would be (0.6 x 200) - (0.4 x 100) = $80.\n* **Trade Evaluation**: Apply expectancy to assess the viability of a trading strategy. A positive expectancy indicates a strategy is likely profitable over time, while a negative expectancy suggests reevaluation is necessary.\n* **Long-Term Focus**: Emphasize the importance of expectancy over individual trade outcomes. A strategy with a positive expectancy may incur short-term losses but will yield profits in the long run.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade over time."
        }
      ],
      "whyThisMatters": "Understanding and calculating expectancy allows traders to focus on long-term profitability rather than short-term outcomes.",
      "realLifeExample": "A trader analyzes their last 50 trades and finds a win rate of 55% with an average win of $150 and an average loss of $75. They calculate an expectancy of (0.55 x 150) - (0.45 x 75) = $37.50, indicating a profitable strategy.",
      "commonMistake": "Traders often focus solely on win/loss ratios without considering the impact of average win and average loss on overall expectancy.",
      "quickNote": "Calculate expectancy to evaluate the long-term profitability of your trading strategy.",
      "mentorText": "Focus on the numbers. If your expectancy is positive, you're on the right track. It's not about winning every trade; it's about winning over time.",
      "mentorAnalogy": "Like an engineer calculating the efficiency of a machine, traders must assess the expectancy of their strategies to ensure they operate profitably over time."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Risk-Reward Ratios in Trading",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C4 -->\n### Core Scenario: Analyzing Risk-Reward Ratios\nUnderstanding and analyzing risk-reward ratios is essential for making informed trading decisions. This card teaches **how to evaluate risk-reward ratios to enhance expectancy**.\n\n* **Risk-Reward Calculation**: Calculate the risk-reward ratio by dividing the potential profit by the potential loss. For instance, if a trade has a potential profit of $300 and a potential loss of $100, the risk-reward ratio is 3:1.\n* **Setting Targets**: Use risk-reward ratios to set realistic profit targets. Aiming for a minimum risk-reward ratio of 2:1 ensures that winning trades compensate for losing trades over time.\n* **Adjusting Position Size**: Align position size with risk-reward ratios. If the risk-reward ratio is 1:2, adjust your position size to ensure that a single loss does not exceed a predetermined percentage of your trading capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Analyzing risk-reward ratios allows traders to make decisions based on statistical probabilities rather than emotional responses to losses.",
      "realLifeExample": "A trader identifies a potential trade setup on GBPUSD with a risk of $50 and a target profit of $150. They calculate a risk-reward ratio of 3:1, justifying the trade based on favorable expectancy.",
      "commonMistake": "Traders often enter trades without properly assessing the risk-reward ratio, leading to unbalanced risk exposure and potential losses.",
      "quickNote": "Evaluate risk-reward ratios to make informed trading decisions based on expectancy.",
      "mentorText": "Always calculate your risk-reward ratio before entering a trade. It’s a critical step that can protect your capital and enhance your overall strategy.",
      "mentorAnalogy": "Like a financial analyst assessing investment opportunities, traders must evaluate risk-reward ratios to ensure their trades are statistically sound."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Using Trading Journals for Expectancy Tracking",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C5 -->\n### Core Scenario: Trading Journal Implementation\nMaintaining a trading journal is essential for tracking trades and calculating expectancy, which aids in refining strategies. This card outlines **how to systematically document trades to enhance performance**.\n\n* **Trade Documentation Protocol**: Record every trade with specific details: entry and exit points, position size, and market conditions. This data is crucial for calculating the expectancy of each strategy.\n* **Loss Analysis Framework**: After each loss, analyze the circumstances leading to the trade. Categorizing losses helps identify patterns and informs future decision-making.\n* **Expectancy Calculation Method**: Use the formula (Average Win × Win Rate) - (Average Loss × Loss Rate) to compute expectancy. Regularly update this metric to reflect the effectiveness of your trading strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "A metric that quantifies the average expected return of a trading strategy per trade."
        }
      ],
      "whyThisMatters": "Tracking trades through a journal allows for objective analysis of performance, leading to improved decision-making and strategy refinement.",
      "realLifeExample": "A trader documents 50 trades in their journal, noting an average win of $200 and an average loss of $100, resulting in a calculated expectancy of $50 per trade.",
      "commonMistake": "Failing to document emotional states during trades, which can skew analysis and hinder learning from mistakes.",
      "quickNote": "A comprehensive trading journal is vital for calculating and improving expectancy.",
      "mentorText": "You need to treat your trading journal like a flight log. Every detail matters; it’s your roadmap to improvement. Analyze your wins and losses critically.",
      "mentorAnalogy": "Think of your trading journal as a surgeon's logbook, where every procedure is documented. Just as a surgeon reviews outcomes to refine techniques, you must analyze your trades to enhance performance."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Strategies for Mitigating Losses",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C6 -->\n### Core Scenario: Proactive Loss Management\nImplementing strategies to mitigate losses is crucial for maintaining a positive expectancy. This card outlines **specific techniques to manage risk effectively**.\n\n* **Stop-Loss Order Utilization**: Set stop-loss orders at predetermined levels based on volatility and risk tolerance. This prevents emotional decision-making during adverse market movements.\n* **Position Sizing Strategy**: Apply the Kelly Criterion or fixed fractional method to determine optimal position sizes. This ensures that no single loss significantly impacts overall capital.\n* **Diversification Tactics**: Spread risk across various instruments or asset classes. Diversification can reduce the impact of a single loss on the overall portfolio expectancy.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit potential losses."
        }
      ],
      "whyThisMatters": "Proactively managing losses ensures that traders can sustain their capital and maintain a favorable expectancy over time.",
      "realLifeExample": "A trader sets a stop-loss at 2% below their entry point on a stock trade, effectively limiting potential losses to $200 on a $10,000 investment.",
      "commonMistake": "Neglecting to adjust stop-loss levels as market conditions change, leading to larger-than-necessary losses.",
      "quickNote": "Proactive loss mitigation strategies are essential for preserving capital and ensuring positive expectancy.",
      "mentorText": "Think of loss mitigation as a safety net. You need to have measures in place before you enter the trade, not after you feel the pain of a loss.",
      "mentorAnalogy": "Consider a commercial pilot who has multiple contingency plans for emergencies. Just as they prepare for the unexpected, you must have strategies to manage losses before they occur."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Reviewing Performance through Expectancy",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C7 -->\n### Core Scenario: Performance Review Metrics\nConducting performance reviews based on expectancy metrics allows traders to identify strengths and weaknesses in their strategies. This card details **how to systematically evaluate trading performance**.\n\n* **Expectancy Review Schedule**: Establish a regular review schedule, such as weekly or monthly, to assess expectancy calculations. Consistency in reviews leads to better strategy adjustments.\n* **Strengths and Weaknesses Analysis**: Break down performance by strategy type and market conditions. Identify which setups yield the highest expectancy and which are detrimental.\n* **Feedback Loop Creation**: Create a feedback loop where insights from performance reviews directly inform future trading decisions. Adjust strategies based on empirical data rather than emotional responses.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Review",
          "definition": "An analysis of trading results to evaluate the effectiveness of strategies and make necessary adjustments."
        }
      ],
      "whyThisMatters": "Regular performance reviews enable traders to adapt their strategies based on data-driven insights, enhancing overall trading effectiveness.",
      "realLifeExample": "A trader reviews their last 100 trades, discovering that a specific strategy has a 70% win rate but a negative expectancy due to high average losses, prompting a strategy overhaul.",
      "commonMistake": "Conducting performance reviews infrequently, leading to missed opportunities for strategy improvement.",
      "quickNote": "Regular performance reviews based on expectancy metrics are vital for optimizing trading strategies.",
      "mentorText": "You must treat your performance reviews like a post-mission debrief in aviation. Analyze what worked and what didn’t to ensure you’re always improving.",
      "mentorAnalogy": "Just as a surgeon reviews patient outcomes to refine techniques, you must analyze your trading performance to enhance your strategies."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Building Emotional Resilience in Trading",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C8 -->\n### Core Scenario: Emotional Resilience Techniques\nBuilding emotional resilience is essential for traders to remain focused on expectancy rather than the need to be right. This card outlines **specific techniques to enhance emotional stability**.\n\n* **Mindfulness Practices**: Incorporate mindfulness techniques such as meditation or breathing exercises before trading sessions. This helps to center focus and reduce emotional reactions to losses.\n* **Loss Reframing Strategy**: Train yourself to view losses as operating costs rather than failures. This shift in perspective fosters a healthier relationship with trading outcomes.\n* **Performance Visualization**: Use visualization techniques to mentally rehearse successful trading scenarios. This prepares the mind to handle losses more effectively by reinforcing a positive mindset.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Resilience",
          "definition": "The ability to maintain a stable emotional state in the face of trading challenges."
        }
      ],
      "whyThisMatters": "Emotional resilience allows traders to maintain focus on expectancy, reducing the psychological impact of losses and enhancing decision-making.",
      "realLifeExample": "A trader practices mindfulness daily and reframes a recent loss as a learning opportunity, allowing them to approach the next trade with renewed focus and clarity.",
      "commonMistake": "Allowing emotions to dictate trading decisions, leading to impulsive actions and further losses.",
      "quickNote": "Emotional resilience is crucial for maintaining focus on expectancy and managing the psychological aspects of trading.",
      "mentorText": "You need to build a mental fortress. When you face losses, remember they are just part of the cost of doing business. Stay focused on the bigger picture.",
      "mentorAnalogy": "Think of emotional resilience as the shock absorbers in a vehicle. They help you navigate bumps in the road without losing control, just as you must manage emotional turbulence in trading."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Optimizing Trading Strategies for Expectancy",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C9 -->\n### Core Strategy: Enhancing Expectancy in Trading\nOptimizing trading strategies involves refining parameters to improve expectancy, which is critical for long-term profitability. This card outlines **specific adjustments to enhance your trading performance**.\n\n* **Risk-Reward Ratio Adjustment**: Aim for a minimum risk-reward ratio of 1:2. For example, if your stop loss is set at 20 pips, your target should be at least 40 pips to ensure positive expectancy over time.\n* **Win Rate Calibration**: Analyze historical data to determine your win rate. If your win rate is 40%, ensure that your average win is at least 2.5 times your average loss to maintain a positive expectancy.\n* **Trade Frequency Optimization**: Adjust the number of trades based on market conditions. For instance, during high volatility, increase trade frequency to capitalize on more opportunities, while reducing trades in low volatility environments to avoid unnecessary losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade."
        }
      ],
      "whyThisMatters": "Optimizing strategies directly impacts the expectancy, allowing traders to maintain profitability over time despite inevitable losses.",
      "realLifeExample": "A trader using a strategy with a 40% win rate and a 1:2 risk-reward ratio can expect to gain $200 on winning trades and lose $100 on losing trades, leading to a net gain over multiple trades.",
      "commonMistake": "Traders often neglect to adjust their strategies based on changing market conditions, leading to suboptimal performance.",
      "quickNote": "Focus on refining risk-reward ratios and win rates to enhance expectancy.",
      "mentorText": "You must continuously evaluate your strategies. If your win rate is low, reassess your targets and stop losses to ensure you’re not just winning small and losing big.",
      "mentorAnalogy": "Think of it like an engineer optimizing a machine's performance; every adjustment can lead to greater efficiency and output."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "The Concept of Loss Recovery",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C10 -->\n### Core Insight: Avoiding Loss Recovery Traps\nThe urge to quickly recover losses can lead to impulsive decisions that compromise trading discipline. This card emphasizes **the importance of focusing on expectancy rather than recovery**.\n\n* **Loss Aversion Awareness**: Recognize that the psychological impact of losses can distort decision-making. For example, after a $500 loss, a trader might risk $700 on the next trade to recover, increasing exposure unnecessarily.\n* **Predefined Recovery Plans**: Establish clear recovery protocols that prioritize expectancy. For instance, if a trader incurs a loss, they should revert to their original strategy without increasing risk to chase losses.\n* **Time-Based Recovery Assessment**: Implement a rule to assess recovery over a set period rather than immediate trades. For example, allow a week to pass before adjusting strategies based on performance metrics rather than emotional responses.",
    "context": {
      "keyTerms": [
        {
          "term": "Loss Recovery",
          "definition": "The attempt to regain lost capital through subsequent trades."
        }
      ],
      "whyThisMatters": "Focusing on expectancy rather than recovery helps maintain a disciplined approach, reducing the likelihood of emotional trading.",
      "realLifeExample": "After a series of losses totaling $1,000, a trader decides to stick to their strategy rather than risking $1,500 to recover, ultimately leading to a more sustainable trading approach.",
      "commonMistake": "Traders often increase their position sizes in an attempt to recover losses quickly, which can lead to larger drawdowns.",
      "quickNote": "Prioritize expectancy over the emotional need to recover losses.",
      "mentorText": "When you face losses, step back. Chasing losses only leads to more mistakes; stick to your plan and focus on the bigger picture.",
      "mentorAnalogy": "Consider a surgeon who must remain calm during a complication; rushing to fix the issue without a plan can lead to greater errors."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "The Role of Trading Psychology in Expectancy",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C11 -->\n### Core Factor: Psychological Influence on Expectancy\nTrading psychology significantly affects decision-making and, consequently, expectancy. This card explores **how mental discipline can enhance trading outcomes**.\n\n* **Emotional Regulation Techniques**: Implement strategies such as mindfulness or breathing exercises to manage emotions during trading. For instance, taking a 5-minute break after a loss can help reset focus and maintain discipline.\n* **Expectation Management**: Set realistic performance expectations based on statistical analysis rather than emotional biases. For example, if your strategy historically yields a 30% win rate, adjust your mindset to accept losses as part of the process.\n* **Self-Review Protocols**: Conduct regular reviews of your trades to identify psychological patterns. For instance, if you notice increased risk-taking after a win, establish rules to limit position sizes following a winning streak.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Psychology",
          "definition": "The emotional and mental factors that influence trading decisions."
        }
      ],
      "whyThisMatters": "Understanding the psychological aspects of trading helps maintain a disciplined approach, enhancing overall expectancy.",
      "realLifeExample": "A trader who implements mindfulness techniques after a series of losses finds improved decision-making and adherence to their strategy, resulting in a more stable expectancy.",
      "commonMistake": "Traders often allow emotions to dictate their trading decisions, leading to inconsistent performance and reduced expectancy.",
      "quickNote": "Mental discipline is crucial for maintaining a positive expectancy in trading.",
      "mentorText": "Control your emotions. If you feel anxious after a loss, take a break. Your mindset directly impacts your trading results.",
      "mentorAnalogy": "Just as a pilot must maintain composure during turbulence, a trader must manage their emotions to navigate market fluctuations effectively."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Utilizing Analytics for Expectancy Management",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C12 -->\n### Core Tool: Leveraging Analytics for Enhanced Expectancy\nAnalytics tools provide critical insights that can significantly improve expectancy management. This card discusses **how to effectively use data-driven approaches in trading**.\n\n* **Performance Metrics Analysis**: Regularly analyze key performance indicators (KPIs) such as win rate, average win/loss, and expectancy. For example, if your average win is $300 and your average loss is $150, your expectancy is positive, guiding future trades.\n* **Backtesting Strategies**: Utilize backtesting to evaluate the effectiveness of trading strategies under various market conditions. For instance, backtesting a strategy on historical data for the EURUSD during different volatility periods can reveal its robustness and expected performance.\n* **Real-Time Data Utilization**: Implement real-time analytics tools to monitor market conditions and adjust strategies accordingly. For example, if volatility spikes during a news event, adapt your trading plan to manage risk effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Analytics Tools",
          "definition": "Software or methods used to analyze trading performance and market data."
        }
      ],
      "whyThisMatters": "Data-driven decision-making enhances expectancy management, allowing traders to make informed adjustments to their strategies.",
      "realLifeExample": "A trader using analytics discovers that their strategy performs better during specific economic releases, allowing them to optimize their trading schedule for higher expectancy.",
      "commonMistake": "Traders often overlook the importance of data analysis, relying solely on intuition rather than empirical evidence.",
      "quickNote": "Use analytics to inform and refine your trading strategies for better expectancy.",
      "mentorText": "Data is your ally. Regularly review your performance metrics and adjust your strategies based on what the numbers tell you.",
      "mentorAnalogy": "Think of it like an architect using blueprints; without precise data, you risk building something that won’t stand the test of time."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "concept",
    "title": "Practical Exercises for Expectancy Application",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C13 -->\n### Core Scenario: Engaging with Expectancy Exercises\nApplying expectancy concepts in real trading scenarios enhances decision-making and risk management. This card outlines **specific exercises to reinforce expectancy calculations**.\n\n* **Trade Simulation**: Execute a series of simulated trades on a platform like TradingView, focusing on a specific instrument, such as GBPUSD. Record entry and exit points, and calculate the expectancy for each trade based on a win rate of 60% and an average win of 50 pips against an average loss of 30 pips.\n* **Expectancy Calculation Drill**: Create a spreadsheet to track 10 trades with varying outcomes. Calculate the expectancy using the formula: (Win Rate x Average Win) - (Loss Rate x Average Loss). For example, if 6 trades are wins averaging 40 pips and 4 losses averaging 20 pips, the expectancy would be (0.6 x 40) - (0.4 x 20).\n* **Review and Adjust**: After completing the exercises, analyze the results to identify patterns and areas for improvement. Adjust your trading plan based on the expectancy findings to enhance future performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader expects to win or lose per trade."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises solidifies the understanding of expectancy, allowing traders to manage risk effectively.",
      "realLifeExample": "In a recent simulation, a trader executed 15 trades on EURUSD, achieving a 65% win rate with an average win of 30 pips and an average loss of 20 pips, resulting in a positive expectancy of 6 pips per trade.",
      "commonMistake": "Traders often neglect to calculate expectancy after each exercise, missing critical insights into their trading performance.",
      "quickNote": "Regularly practice expectancy calculations to refine your trading strategy.",
      "mentorText": "Focus on the numbers. Each trade should be a calculated decision based on your expectancy, not a gamble. Review your results meticulously.",
      "mentorAnalogy": "Think of expectancy like an engineer assessing the efficiency of a machine. Each component must be analyzed for optimal performance, just as each trade should be evaluated for its contribution to overall profitability."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "practice",
    "title": "Summary of Key Concepts (Module 8.2 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C14 -->\n### Core Scenario: Reinforcing Expectancy Principles\nSummarizing key concepts helps solidify the understanding of expectancy and loss management in trading. This card emphasizes **the importance of reframing losses and focusing on expectancy**.\n\n* **Loss as Operating Cost**: Reframe losses not as failures but as necessary operating costs in the trading business. For instance, if a trader incurs a loss of $200 on a trade, view it as a cost of doing business rather than a personal setback.\n* **Expectancy Focus**: Maintain a focus on expectancy rather than the need to be right. Calculate the expectancy for a trading strategy that yields a 70% win rate with an average win of 100 pips and an average loss of 50 pips, resulting in a positive expectancy of 35 pips per trade.\n* **Continuous Evaluation**: Regularly assess your trading performance against expectancy metrics. If a strategy shows a negative expectancy over 20 trades, it may require reevaluation or adjustment to improve profitability.",
    "context": {
      "keyTerms": [
        {
          "term": "Operating Cost",
          "definition": "The cost incurred from trading losses, viewed as a necessary expense."
        }
      ],
      "whyThisMatters": "Reframing losses and focusing on expectancy allows traders to maintain objectivity and improve long-term performance.",
      "realLifeExample": "A trader who consistently evaluates their strategies found that a particular setup had a negative expectancy after 30 trades, prompting a strategic pivot that improved overall results.",
      "commonMistake": "Traders often fixate on individual trade outcomes instead of the broader expectancy, leading to emotional decision-making.",
      "quickNote": "Shift your mindset to view losses as part of the trading process.",
      "mentorText": "Remember, every loss is a step toward understanding your trading landscape. Focus on the bigger picture of expectancy.",
      "mentorAnalogy": "Consider a pilot reviewing flight logs. Each flight may have turbulence, but the overall safety and efficiency metrics guide future routes and decisions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary focus when evaluating your trading performance?",
      "options": [
        {
          "id": "0",
          "text": "The need to be right in every trade.",
          "isCorrect": false,
          "feedback": "Focusing on the need to be right can lead to emotional trading decisions."
        },
        {
          "id": "1",
          "text": "The expectancy of your trading strategy.",
          "isCorrect": true,
          "feedback": "Focusing on expectancy provides a clearer picture of long-term profitability."
        },
        {
          "id": "2",
          "text": "The number of trades executed.",
          "isCorrect": false,
          "feedback": "The quantity of trades is less important than the quality and expectancy of those trades."
        },
        {
          "id": "3",
          "text": "The emotional impact of each trade.",
          "isCorrect": false,
          "feedback": "Emotions should not dictate trading decisions; focus on objective metrics instead."
        }
      ]
    },
    "visualKey": "expectancy-calculator-l8"
  },
  {
    "type": "summary",
    "title": "Core Management Review 15 (Module 8.2 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.2-core-C15 -->\n### Core Scenario: Advanced Expectancy Management\nThis summary card consolidates advanced applications of the concepts of Probability vs the Need to be Right, focusing on **effective expectancy management in trading**.\n\n* **Expectancy as a Decision-Making Tool**: Use expectancy calculations to guide trade entries and exits. For example, if a trader identifies a strategy with a 75% win rate and an average win of 80 pips versus an average loss of 40 pips, the expectancy becomes a critical factor in decision-making.\n* **Risk Management Integration**: Integrate expectancy into risk management strategies by determining position sizes based on calculated expectancy. If the expectancy is 20 pips per trade, position size should reflect the trader's risk tolerance and account size to optimize returns.\n* **Long-Term Strategy Evaluation**: Regularly assess trading strategies based on expectancy over multiple trades. If a strategy shows a consistent negative expectancy over 50 trades, it may be time to pivot or refine the approach to improve outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        }
      ],
      "whyThisMatters": "Understanding advanced expectancy management enables traders to make informed decisions that enhance profitability.",
      "realLifeExample": "A trader evaluated a scalping strategy over 100 trades, discovering a negative expectancy that led to a strategic overhaul, resulting in a shift to swing trading with improved outcomes.",
      "commonMistake": "Traders often neglect to incorporate expectancy into their risk management, leading to suboptimal position sizing and increased risk exposure.",
      "quickNote": "Leverage expectancy as a cornerstone of your trading strategy.",
      "mentorText": "Your trading decisions should be rooted in expectancy, not emotions. Analyze the numbers and adjust accordingly.",
      "mentorAnalogy": "Think of a surgeon evaluating patient outcomes. Each procedure's success rate informs future practices, just as each trade's expectancy shapes your trading strategy."
    },
    "taskData": null,
    "visualKey": "expectancy-calculator-l8"
  }
];
