import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Foundations of Gold Invalidation Planning",
    "label": "Gold Track",
    "body": "Gold's volatility and correlation with real yields necessitate precise invalidation planning. This mission brief outlines the core principles of setting structural boundaries where your trade hypothesis is invalidated.\n\n* **Stop Buffers**: Implement wider stop buffers to accommodate gold's tendency for aggressive sweeps, ensuring stops are not prematurely triggered by transient volatility.\n* **Yield Correlation Breaks**: Monitor real-yield movements closely. A break in the correlation between gold and real yields can signal a fundamental shift, requiring reevaluation of invalidation points.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Buffer",
          "definition": "An additional margin added to stop-loss levels to prevent premature trade invalidation."
        },
        {
          "term": "Yield Correlation",
          "definition": "The relationship between gold prices and real yields, often inversely correlated."
        }
      ],
      "whyThisMatters": "Gold's unique market dynamics require traders to set invalidation points that account for its volatility and yield correlations, preventing unnecessary losses.",
      "realLifeExample": "A trader sets a stop-loss on XAUUSD at $1,850, but gold wicks to $1,848 before reversing. A buffer would have prevented the stop-out.",
      "commonMistake": "Setting stops too tight without considering gold's volatility, leading to frequent stop-outs.",
      "quickNote": "Gold's volatility demands wider stop buffers.",
      "mentorText": "When trading gold, think of invalidation points as structural boundaries. These aren't just numbers; they're your hypothesis checkpoints.",
      "mentorAnalogy": "Imagine you're an engineer designing a bridge. You must account for wind and traffic loads, just as you account for gold's volatility and yield shifts."
    },
    "taskData": null,
    "visualKey": "gold-invalidation-foundations"
  },
  {
    "type": "concept",
    "title": "Establishing Stop Buffers for Gold",
    "label": "Gold Track",
    "body": "### Gold Stop Buffers: Protecting Against Premature Invalidation\nGold's aggressive price movements require strategic stop buffer placement to prevent unnecessary trade invalidation.\n\n* **Volatility Consideration**: Calculate average true range (ATR) for gold to determine an appropriate buffer size. A buffer of 1.5x ATR can safeguard against typical wicks.\n* **Market Context Analysis**: Assess current market conditions, such as news events or economic releases, that may increase volatility, warranting larger buffers.\n* **Historical Sweep Patterns**: Review historical price action for patterns of stop sweeps, adjusting buffers to align with observed behaviors.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Stop Sweep",
          "definition": "A market move that triggers stop-loss orders, often followed by a reversal."
        }
      ],
      "whyThisMatters": "Proper stop buffers protect trades from being invalidated by gold's typical price wicks, maintaining trade integrity.",
      "realLifeExample": "Before a major economic announcement, a trader uses a 1.5x ATR buffer on XAUUSD, preventing a stop-out during a 20-point wick.",
      "commonMistake": "Failing to adjust stop buffers for high-impact news, leading to avoidable stop-outs.",
      "quickNote": "Use 1.5x ATR as a baseline for gold stop buffers.",
      "mentorText": "Think of stop buffers as your safety net. They keep you in the game when gold's volatility tries to shake you out.",
      "mentorAnalogy": "Just like a pilot adjusts flight paths for turbulence, adjust your stop buffers for market volatility."
    },
    "taskData": null,
    "visualKey": "gold-stop-sweep-buffers"
  },
  {
    "type": "concept",
    "title": "Yield Correlation Breaks in Gold",
    "label": "Gold Track",
    "body": "### Yield Correlation: Enhancing Gold Invalidation\nIncorporating yield correlation breaks into your invalidation planning can significantly bolster your gold trading strategy.\n\n* **Correlation Monitoring**: Regularly track the inverse relationship between gold prices and real yields. A breakdown in this correlation can indicate a shift in market sentiment.\n* **Invalidation Adjustment**: When a correlation break occurs, reassess your invalidation points. This may involve widening stops or exiting trades to mitigate risk.\n* **Economic Indicators**: Pay attention to economic releases that affect real yields, such as inflation data, which can precipitate correlation breaks.",
    "context": {
      "keyTerms": [
        {
          "term": "Real Yields",
          "definition": "The yield on an investment adjusted for inflation, often influencing gold prices."
        },
        {
          "term": "Correlation Break",
          "definition": "A deviation from the typical relationship between two correlated assets."
        }
      ],
      "whyThisMatters": "Yield correlation breaks can signal fundamental shifts in gold's market dynamics, necessitating a reassessment of trade invalidation points.",
      "realLifeExample": "Following unexpected inflation data, the correlation between gold and real yields breaks, prompting a trader to adjust their stop-loss on XAUUSD.",
      "commonMistake": "Ignoring yield correlation breaks, leading to trades based on outdated market assumptions.",
      "quickNote": "Yield breaks can redefine gold's trading landscape.",
      "mentorText": "When yields and gold prices stop dancing together, it's time to reconsider your steps. Adjust your invalidation points accordingly.",
      "mentorAnalogy": "Like a sailor adjusting sails when the wind changes, adjust your strategy when yield correlations shift."
    },
    "taskData": null,
    "visualKey": "gold-yield-invalidation-overlay"
  },
  {
    "type": "concept",
    "title": "Position Sizing for Gold Stops",
    "label": "Gold Track",
    "body": "### Gold Position Sizing: Aligning with Stop Strategy\nProper position sizing is crucial when setting stops in gold trading, ensuring that your risk is managed effectively.\n\n* **Risk Per Trade**: Define a fixed percentage of your capital to risk per trade, typically 1-2%. This ensures that stop placement aligns with your overall risk management strategy.\n* **Volatility-Based Sizing**: Adjust position sizes based on gold's current volatility, using metrics like ATR to determine optimal trade size relative to stop distance.\n* **Capital Allocation**: Allocate capital proportionally to the distance of your stop from entry, ensuring that larger stops do not disproportionately increase risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a particular trade."
        },
        {
          "term": "Risk Per Trade",
          "definition": "The percentage of total capital that a trader is willing to risk on a single trade."
        }
      ],
      "whyThisMatters": "Appropriate position sizing ensures that your stops are placed within a risk framework that protects your capital from excessive losses.",
      "realLifeExample": "A trader risks 1% of their account on XAUUSD, adjusting the position size to account for a 30-point stop based on current volatility.",
      "commonMistake": "Over-leveraging positions without considering stop distance, leading to excessive risk exposure.",
      "quickNote": "Align position size with stop distance to manage risk.",
      "mentorText": "Think of position sizing as your trade's foundation. It supports your strategy by keeping risk in check, no matter where your stops are set.",
      "mentorAnalogy": "Like a chef measuring ingredients precisely, measure your position size to ensure your trade recipe is balanced."
    },
    "taskData": null,
    "visualKey": "gold-stop-position-sizing"
  },
  {
    "type": "concept",
    "title": "Practical Gold Invalidation Drills",
    "label": "Gold Track",
    "body": "### Gold Invalidation Drills: Setting and Adjusting Boundaries\nEngage in practical exercises to refine the skill of setting and adjusting invalidation boundaries in gold trading scenarios.\n\n* **Boundary Identification**: Determine invalidation levels by identifying key structural price points such as previous highs/lows, pivot points, and significant Fibonacci retracement levels.\n* **Dynamic Adjustment**: Adjust invalidation boundaries in real-time based on evolving market conditions, such as sudden changes in volatility or unexpected economic data releases.\n* **Risk Management Integration**: Ensure that invalidation boundaries are aligned with overall risk management strategies, maintaining a balance between potential reward and acceptable risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Invalidation Boundary",
          "definition": "A price level where a trade hypothesis is considered invalid."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A method of technical analysis for determining support and resistance levels."
        }
      ],
      "whyThisMatters": "Practical drills enhance the ability to set precise invalidation points, crucial for minimizing losses and optimizing trade outcomes.",
      "realLifeExample": "During a gold trading session, a trader sets an invalidation boundary at $1,850, just below a recent swing low, and adjusts it to $1,845 after a volatile news release.",
      "commonMistake": "Failing to adjust invalidation boundaries in response to significant market changes, leading to premature stop-outs.",
      "quickNote": "Refine invalidation boundaries through consistent practice and real-time adjustments.",
      "mentorText": "Think of setting invalidation boundaries like a pilot adjusting flight paths in response to weather changes. You must be ready to adapt.",
      "mentorAnalogy": "Just as a surgeon must adjust their approach during unexpected complications, traders must dynamically adjust invalidation points as market conditions evolve."
    },
    "taskData": null,
    "visualKey": "gold-invalidation-drill-component"
  },
  {
    "type": "concept",
    "title": "Gold Invalidation Debrief",
    "label": "Gold Track",
    "body": "### Analyzing Past Trades: Invalidation Debrief\nReview and analyze past gold trades to evaluate the effectiveness of invalidation boundaries and identify areas for improvement.\n\n* **Post-Trade Analysis**: Conduct a detailed review of trades where invalidation boundaries were triggered. Assess whether the boundaries were set too tight or too loose.\n* **Pattern Recognition**: Identify recurring patterns or mistakes in boundary setting that led to suboptimal trade exits.\n* **Feedback Loop**: Integrate insights from past trades into future invalidation planning, enhancing the precision of boundary setting.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Trade Analysis",
          "definition": "The process of reviewing trades after they have closed to evaluate performance."
        },
        {
          "term": "Feedback Loop",
          "definition": "A system where outputs of a process are used as inputs for future iterations."
        }
      ],
      "whyThisMatters": "Analyzing past trades helps traders refine their invalidation strategies, reducing the likelihood of repeated mistakes.",
      "realLifeExample": "A trader reviews a gold trade where the invalidation boundary was set at $1,900, only to see the price rebound after a stop-out, indicating the boundary was too tight.",
      "commonMistake": "Neglecting to review trades where invalidation boundaries were hit, missing opportunities for learning and improvement.",
      "quickNote": "Debrief past trades to refine future invalidation strategies.",
      "mentorText": "Reviewing your trades is like a football coach analyzing game footage. It's where you find the real lessons.",
      "mentorAnalogy": "Just as an architect reviews blueprints after a project to identify design flaws, traders must analyze past trades to improve future invalidation planning."
    },
    "taskData": null,
    "visualKey": "gold-invalidation-debrief-component"
  },
  {
    "type": "practice",
    "title": "Gold Invalidation Practice Scenarios",
    "label": "Gold Track",
    "body": "### Practice Scenarios: Applying Invalidation Planning\nApply your skills in setting invalidation boundaries in various gold trading scenarios, focusing on stop buffers and yield correlation considerations.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Buffer",
          "definition": "An additional margin added to a stop-loss level to account for market noise."
        },
        {
          "term": "Yield Correlation",
          "definition": "The relationship between gold prices and bond yields, often inversely correlated."
        }
      ],
      "whyThisMatters": "Practice scenarios help traders internalize the process of setting effective invalidation points, crucial for managing risk.",
      "realLifeExample": "In a scenario where gold is trading at $1,875, a trader sets a stop buffer of $5 below the invalidation point to prevent stop-outs from minor fluctuations.",
      "commonMistake": "Setting stop buffers too tight, leading to unnecessary stop-outs from normal market noise.",
      "quickNote": "Use practice scenarios to solidify your invalidation planning skills.",
      "mentorText": "Think of practice scenarios as flight simulators for traders. They prepare you for real market conditions without the financial risk.",
      "mentorAnalogy": "Just like pilots use simulators to practice emergency procedures, traders use practice scenarios to refine their invalidation strategies."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a gold trading scenario where the price is $1,880, and bond yields are rising, where should you set your invalidation point if your entry is at $1,885?",
      "options": [
        {
          "id": "0",
          "text": "$1,875 with a $5 stop buffer",
          "isCorrect": true,
          "feedback": "This accounts for market noise and yield correlation, providing a balanced risk management approach."
        },
        {
          "id": "1",
          "text": "$1,885 with no stop buffer",
          "isCorrect": false,
          "feedback": "Setting the invalidation point at the entry price with no buffer is too tight and likely to result in a stop-out from minor fluctuations."
        },
        {
          "id": "2",
          "text": "$1,870 with a $10 stop buffer",
          "isCorrect": false,
          "feedback": "This buffer is too large, unnecessarily increasing risk exposure."
        },
        {
          "id": "3",
          "text": "$1,880 with a $2 stop buffer",
          "isCorrect": false,
          "feedback": "A $2 buffer is insufficient to account for typical market noise in gold trading."
        }
      ]
    },
    "visualKey": "gold-invalidation-foundations"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Invalidation Planning",
    "label": "Gold Track",
    "body": "### Comprehensive Review: Gold Invalidation Planning\nReview the key concepts of gold invalidation planning, focusing on stop buffers and yield correlations to ensure a robust understanding.\n\n* **Stop Buffers**: Implement stop buffers to account for market noise, ensuring that invalidation points are not prematurely triggered by minor fluctuations.\n* **Yield Correlation**: Understand the inverse relationship between gold prices and bond yields, adjusting invalidation points accordingly to reflect changing market dynamics.\n* **Strategic Refinement**: Continuously refine invalidation strategies through post-trade analysis and practical drills, enhancing precision and risk management.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Noise",
          "definition": "Random price fluctuations that do not reflect the underlying trend."
        },
        {
          "term": "Inverse Relationship",
          "definition": "A situation where two variables move in opposite directions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of invalidation planning is essential for effective risk management and trade optimization in gold markets.",
      "realLifeExample": "A trader consistently reviews their invalidation strategy, adjusting stop buffers and considering yield correlations to optimize their gold trades.",
      "commonMistake": "Overlooking the impact of yield correlations on gold prices, leading to poorly set invalidation points.",
      "quickNote": "Master invalidation planning to enhance your gold trading strategy.",
      "mentorText": "Think of this summary as your pre-flight checklist. It's essential to ensure all systems are go before you take off.",
      "mentorAnalogy": "Just as a chef reviews their recipe to ensure all ingredients are balanced, traders must review their invalidation strategies to ensure all elements are aligned."
    },
    "taskData": null,
    "visualKey": "gold-stop-sweep-buffers"
  }
];
