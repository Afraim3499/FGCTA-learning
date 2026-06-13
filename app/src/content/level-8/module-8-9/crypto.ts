import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Scaling Down Leverage in Crypto Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C1 -->\n### Core Scenario: Leverage Adjustment During Drawdown\nScaling down leverage during drawdown periods is essential for capital preservation and recovery. This card outlines **the systematic approach to leverage reduction** to mitigate risk.\n\n* **Leverage Reduction Protocol**: Decrease leverage by a predetermined percentage (e.g., 50%) when drawdown exceeds 10% of equity. This ensures that exposure is minimized as market volatility increases.\n* **Equity Threshold Monitoring**: Continuously monitor equity levels; if equity drops below a set threshold (e.g., 90% of initial capital), enforce immediate leverage scaling to safeguard remaining capital.\n* **Recovery Leverage Strategy**: Once recovery is underway, gradually reinstate leverage only after achieving a 5% gain from the drawdown low, ensuring a cautious approach to re-exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Reduction Protocol",
          "definition": "A systematic method for decreasing leverage during drawdown periods."
        },
        {
          "term": "Equity Threshold Monitoring",
          "definition": "The practice of tracking equity levels to enforce leverage adjustments."
        },
        {
          "term": "Recovery Leverage Strategy",
          "definition": "A strategy for reinstating leverage after achieving a specified recovery gain."
        }
      ],
      "whyThisMatters": "Effective leverage management during drawdowns is critical for long-term capital preservation in volatile crypto markets.",
      "realLifeExample": "During a market downturn, BTC experiences a 15% drop to $25,000. A trader reduces leverage from 10x to 5x immediately upon the 10% equity drawdown threshold being breached.",
      "commonMistake": "Traders often maintain or increase leverage during drawdowns, exacerbating losses instead of protecting capital.",
      "quickNote": "Scale down leverage to protect capital during drawdowns.",
      "mentorText": "When you see your equity dipping, don’t hesitate to cut back on leverage. Think of it as putting on the brakes when you sense a skid on the road. It’s about preserving what you have.",
      "mentorAnalogy": "Adjusting leverage in a drawdown is like a pilot reducing throttle during turbulence; it stabilizes the flight path and protects the aircraft from further distress."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Liquidation Flushes",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C2 -->\n### Core Scenario: Identifying Liquidation Events\nLiquidation flushes occur when rapid price movements trigger forced selling, often leading to significant drawdowns. This card teaches **how to analyze market signals that precede these events**.\n\n* **Order Book Analysis**: Monitor the order book for large sell walls or sudden shifts in liquidity; a significant imbalance can indicate impending liquidation pressure.\n* **Volatility Indicators**: Utilize volatility indicators (e.g., Bollinger Bands) to identify when price approaches extreme deviations, suggesting potential liquidation scenarios.\n* **Market Sentiment Assessment**: Gauge market sentiment through social media and news sentiment analysis; heightened fear or panic can precede liquidation flushes, prompting preemptive leverage adjustments.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Analysis",
          "definition": "The examination of buy and sell orders to identify potential liquidation risks."
        },
        {
          "term": "Volatility Indicators",
          "definition": "Tools used to measure market volatility and predict price movements."
        },
        {
          "term": "Market Sentiment Assessment",
          "definition": "The evaluation of trader sentiment through various channels to anticipate market movements."
        }
      ],
      "whyThisMatters": "Understanding liquidation flushes allows traders to adjust their strategies proactively, reducing the risk of severe drawdowns.",
      "realLifeExample": "ETH's price drops from $1,800 to $1,600 in a matter of minutes due to a large sell wall identified in the order book, triggering a wave of liquidations across leveraged positions.",
      "commonMistake": "Failing to monitor order book changes can lead to unexpected liquidations during volatile market conditions.",
      "quickNote": "Analyze market conditions to anticipate liquidation flushes.",
      "mentorText": "Keep your eyes on the order book; it’s your first line of defense against liquidation. If you see a wall of sell orders, it’s time to reassess your leverage.",
      "mentorAnalogy": "Identifying liquidation flushes is akin to a ship captain observing storm clouds on the horizon; early detection allows for course adjustments before disaster strikes."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Crypto Drawdowns",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C3 -->\n### Core Scenario: Tailoring Risk Management\nEffective risk management is vital during drawdown scenarios to maintain exposure while protecting capital. This card outlines **specific strategies tailored for crypto trading**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on current equity levels; for instance, reduce position size by 25% when equity falls below 90% of initial capital to limit exposure.\n* **Stop-Loss Adjustments**: Implement tighter stop-loss orders during periods of high volatility; for example, set stop-loss at 2% below the entry price instead of the usual 5% to protect against rapid declines.\n* **Diversification of Assets**: Spread risk across multiple crypto assets; if BTC is in a drawdown, consider reallocating a portion of capital to stablecoins or altcoins with lower correlation to mitigate overall risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting trade sizes based on current equity levels to manage risk."
        },
        {
          "term": "Stop-Loss Adjustments",
          "definition": "Modifying stop-loss levels to protect against increased volatility."
        },
        {
          "term": "Diversification of Assets",
          "definition": "Allocating capital across multiple assets to reduce overall risk exposure."
        }
      ],
      "whyThisMatters": "Implementing tailored risk management strategies during drawdowns is essential for maintaining capital and enabling recovery.",
      "realLifeExample": "A trader holding $10,000 in BTC reduces their position size from 1 BTC to 0.75 BTC after equity drops to $9,000, effectively limiting potential losses.",
      "commonMistake": "Traders often neglect to adjust stop-loss levels during high volatility, leading to larger-than-expected losses.",
      "quickNote": "Implement tailored risk management strategies during drawdowns.",
      "mentorText": "When you’re in a drawdown, it’s time to tighten your grip on risk. Adjust your position sizes and stop-losses to stay in the game.",
      "mentorAnalogy": "Managing risk in a drawdown is like a surgeon adjusting their technique during a complicated procedure; precision and caution are paramount to avoid complications."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Strategies for Adjusting Leverage in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C4 -->\n### Core Scenario: Leverage Adjustment Techniques\nAdjusting leverage strategically during drawdowns can enhance recovery potential. This card details **specific methods for modifying leverage** in response to market conditions.\n\n* **Incremental Leverage Scaling**: Gradually adjust leverage in increments (e.g., 0.5x) based on recovery milestones; for example, increase leverage from 2x to 2.5x after achieving a 3% gain from the drawdown low.\n* **Risk-to-Reward Ratio Evaluation**: Before adjusting leverage, assess the risk-to-reward ratio of potential trades; only increase leverage if the ratio exceeds a predetermined threshold (e.g., 2:1).\n* **Market Condition Review**: Regularly review market conditions and volatility; if market stability returns, consider increasing leverage cautiously, ensuring that risk management protocols remain intact.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Incremental Leverage Scaling",
          "definition": "Gradually adjusting leverage based on recovery milestones."
        },
        {
          "term": "Risk-to-Reward Ratio Evaluation",
          "definition": "Assessing potential trades to determine if leverage adjustments are warranted."
        },
        {
          "term": "Market Condition Review",
          "definition": "Regularly analyzing market stability to inform leverage decisions."
        }
      ],
      "whyThisMatters": "Strategically adjusting leverage during recovery phases is crucial for maximizing potential gains while managing risk.",
      "realLifeExample": "After a 10% recovery from a drawdown, a trader increases their leverage from 3x to 3.5x on an ETH trade, where the risk-to-reward ratio is 2.5:1.",
      "commonMistake": "Traders often rush to increase leverage without proper evaluation of market conditions, leading to further losses.",
      "quickNote": "Adjust leverage strategically to enhance recovery potential.",
      "mentorText": "When the market shows signs of recovery, don’t just jump back in with full leverage. Assess your gains and adjust incrementally to protect your capital.",
      "mentorAnalogy": "Adjusting leverage during recovery is like a race car driver gradually increasing speed after a pit stop; it’s about finding the right balance between risk and performance."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Position Sizing Techniques for Crypto Recovery",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C5 -->\n### Core Technique: Adaptive Position Sizing\nEffective recovery from drawdowns in crypto trading requires a disciplined approach to position sizing. This card outlines **specific techniques to adjust position sizes based on current equity levels**.\n\n* **Equity-Based Sizing**: Calculate position size as a percentage of current equity, adjusting dynamically after each trade. For example, if your equity drops to $8,000 after a drawdown, using a 2% risk per trade would mean a position size of $160.\n* **Recovery Multiplier**: Implement a recovery multiplier to gradually increase position size as equity recovers. For instance, if your equity returns to $9,000, consider increasing your risk to 2.5%, resulting in a position size of $225.\n* **Maximum Drawdown Cap**: Set a maximum drawdown threshold that triggers a reduction in position size. If your equity falls below $7,500, reduce your risk to 1% until recovery is achieved.",
    "context": {
      "keyTerms": [
        {
          "term": "Equity-Based Sizing",
          "definition": "Position sizing based on the current equity level."
        },
        {
          "term": "Recovery Multiplier",
          "definition": "A method to increase position size as equity recovers."
        },
        {
          "term": "Maximum Drawdown Cap",
          "definition": "A threshold that limits position size during significant drawdowns."
        }
      ],
      "whyThisMatters": "Proper position sizing during recovery phases mitigates risk and enhances capital preservation.",
      "realLifeExample": "After a drawdown to $8,000, a trader adjusts their position size to $160 on a BTC trade at $30,000, ensuring they manage risk effectively.",
      "commonMistake": "Failing to adjust position sizes according to current equity, leading to overexposure during recovery.",
      "quickNote": "Adaptive position sizing is crucial for managing risk during recovery phases.",
      "mentorText": "You must adjust your position size based on your current equity. If you’re down, don’t chase recovery with larger trades; instead, recalibrate your risk to protect your capital.",
      "mentorAnalogy": "Think of your trading account like an aircraft's fuel gauge. If you’re low on fuel, you don’t push the throttle harder; you adjust your flight path to conserve fuel until you can refuel safely."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "concept",
    "title": "Identifying Market Signals for Crypto Recovery",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C6 -->\n### Core Signal: Recovery Indicators\nRecognizing market signals that indicate potential recovery is essential for capitalizing on upward price movements post-drawdown. This card focuses on **specific indicators that can signal a recovery phase**.\n\n* **Volume Confirmation**: Look for increased trading volume accompanying price reversals. For example, a spike in volume during a BTC price increase from $28,000 to $30,000 can indicate strong buying interest.\n* **Support Level Validation**: Identify key support levels that hold during drawdowns. If ETH bounces off a support level at $1,800 with strong buying pressure, it may signal a recovery.\n* **Divergence Analysis**: Monitor for bullish divergence between price and momentum indicators like RSI. If BTC price makes a lower low while RSI shows higher lows, this divergence can suggest a potential reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Confirmation",
          "definition": "Increased trading volume that supports price movement."
        },
        {
          "term": "Support Level Validation",
          "definition": "Confirmation of price holding at established support levels."
        },
        {
          "term": "Divergence Analysis",
          "definition": "A technique to identify potential reversals using momentum indicators."
        }
      ],
      "whyThisMatters": "Identifying recovery signals allows traders to time their entries effectively and maximize profit potential.",
      "realLifeExample": "After a drawdown, BTC shows a bullish divergence with RSI while bouncing off $28,500, indicating a potential recovery back to $32,000.",
      "commonMistake": "Ignoring volume trends and relying solely on price action can lead to missed recovery opportunities.",
      "quickNote": "Market signals are critical for timing entries during recovery phases.",
      "mentorText": "Pay attention to volume and support levels. If you see strong buying at a support level, that’s your cue to consider entering a position.",
      "mentorAnalogy": "Identifying recovery signals is like a pilot monitoring instruments for altitude and speed. You need to know when to ascend and when to hold steady to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "practice",
    "title": "Simulating Crypto Recovery Scenarios",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C7 -->\n### Core Exercise: Recovery Simulation\nEngaging in practical simulations of recovery scenarios enables traders to apply theoretical knowledge in real-time contexts. This card focuses on **practicing recovery strategies through simulated market conditions**.\n\n* **Scenario Setup**: Create a simulated environment where BTC experiences a 20% drawdown, followed by various recovery paths. For example, simulate a recovery back to $35,000 over two weeks.\n* **Position Adjustment**: Adjust position sizes based on the simulated equity levels throughout the recovery. If equity drops to $8,000, practice recalibrating position sizes to reflect a 2% risk.\n* **Signal Identification**: During the simulation, identify key recovery signals such as volume spikes or support level validations. Document these signals and their impact on trade decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Setup",
          "definition": "Creating a simulated environment to practice recovery strategies."
        },
        {
          "term": "Position Adjustment",
          "definition": "Modifying position sizes based on equity changes during recovery."
        },
        {
          "term": "Signal Identification",
          "definition": "Recognizing key indicators during simulated recovery scenarios."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free environment to practice recovery strategies and refine decision-making skills.",
      "realLifeExample": "In a simulation, BTC drops to $28,000, and the trader practices adjusting their position size to $160 while identifying a volume spike at $29,000 as a recovery signal.",
      "commonMistake": "Failing to document recovery signals during simulations can hinder learning and application in real scenarios.",
      "quickNote": "Simulating recovery scenarios enhances practical understanding of recovery strategies.",
      "mentorText": "Use simulations to practice your recovery strategies. Adjust your positions based on equity changes and identify signals that indicate a market recovery.",
      "mentorAnalogy": "Simulating recovery scenarios is like a flight simulator for pilots. You practice maneuvers and responses to different situations without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated recovery scenario where Bitcoin (BTC) experiences a 20% drawdown, what is the most effective strategy for adjusting position sizes if your equity drops to $8,000?",
      "options": [
        {
          "id": "0",
          "text": "Recalibrate position sizes to reflect a 2% risk based on the new equity level.",
          "isCorrect": true,
          "feedback": "This approach ensures that risk management principles are adhered to, maintaining a consistent risk exposure relative to the current equity."
        },
        {
          "id": "1",
          "text": "Maintain the original position sizes regardless of equity changes.",
          "isCorrect": false,
          "feedback": "This strategy ignores the principles of risk management and could lead to excessive risk exposure, potentially resulting in significant losses."
        },
        {
          "id": "2",
          "text": "Increase position sizes to maximize potential recovery gains.",
          "isCorrect": false,
          "feedback": "Increasing position sizes in a drawdown scenario contradicts sound risk management practices and could exacerbate losses."
        },
        {
          "id": "3",
          "text": "Completely liquidate all positions to avoid further losses.",
          "isCorrect": false,
          "feedback": "While liquidating positions may prevent immediate losses, it disregards the potential for recovery and does not utilize the strategies learned in the simulation."
        }
      ]
    },
    "visualKey": "drawdown-recovery-model"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Drawdown Recovery",
    "label": "Crypto Track",
    "body": "<!-- M8.9-crypto-C8 -->\n### Core Summary: Recovery Strategies\nThis card consolidates the essential strategies and techniques for recovering from drawdowns in crypto trading. Understanding these concepts is vital for maintaining capital integrity and optimizing recovery efforts.\n\n* **Position Sizing Techniques**: Implement adaptive position sizing based on current equity to manage risk effectively during recovery phases.\n* **Market Signal Identification**: Recognize key market signals such as volume confirmation and support level validation to time recovery entries accurately.\n* **Simulation Practice**: Engage in recovery simulations to apply theoretical knowledge in practical scenarios, enhancing decision-making skills under pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Recovery Strategies",
          "definition": "Techniques and methods used to recover capital after drawdowns."
        },
        {
          "term": "Capital Integrity",
          "definition": "Maintaining the value of trading capital during recovery phases."
        },
        {
          "term": "Optimization of Recovery Efforts",
          "definition": "Maximizing the effectiveness of strategies employed during recovery."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of recovery strategies ensures traders can navigate drawdowns effectively and return to profitability.",
      "realLifeExample": "A trader who implemented adaptive position sizing and identified recovery signals effectively recovers from a 20% drawdown within two weeks.",
      "commonMistake": "Overlooking the importance of simulations can lead to unpreparedness in real trading environments.",
      "quickNote": "Mastering recovery strategies is essential for long-term trading success.",
      "mentorText": "Review these strategies regularly. Position sizing, market signals, and simulations are your tools for effective recovery. Keep them sharp.",
      "mentorAnalogy": "Summarizing recovery strategies is like a surgeon reviewing a checklist before an operation. Each step is critical to ensure a successful outcome."
    },
    "taskData": null,
    "visualKey": "drawdown-recovery-model"
  }
];
