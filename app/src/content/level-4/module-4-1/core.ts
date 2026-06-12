import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding the AMD Cycle",
    "label": "Core Track",
    "body": "### Daily Cycle Basics: AMD Cycle Overview\nThe AMD cycle consists of three distinct phases: consolidation, manipulation, and distribution. Recognizing these phases is crucial for developing effective intraday trading strategies.\n\n* **Consolidation Phase**: This phase typically occurs during low volatility periods, where price movements are limited, often seen in the Asian session. Traders should identify tight price ranges to anticipate potential breakouts.\n* **Manipulation Phase**: Characterized by sudden price spikes, this phase often occurs at the start of the London session. Watch for rapid price movements that can mislead traders into false breakouts.\n* **Distribution Phase**: This phase signals the end of a trend, where institutions offload positions. Look for signs of exhaustion in price movements and volume spikes to confirm distribution activity.",
    "context": {
      "keyTerms": [
        {
          "term": "AMD Cycle",
          "definition": "The sequence of consolidation, manipulation, and distribution phases in intraday trading."
        }
      ],
      "whyThisMatters": "Understanding the AMD cycle allows traders to align their strategies with market behavior, enhancing decision-making.",
      "realLifeExample": "During the Asian session, EURUSD consolidates between 1.1000 and 1.1020. At 3:00 AM EST, manipulation occurs as price spikes to 1.1045 before reversing, indicating a potential distribution phase.",
      "commonMistake": "Traders often misinterpret consolidation as a signal to enter positions prematurely, failing to wait for clear breakout confirmation.",
      "quickNote": "The AMD cycle is essential for timing entry and exit points effectively.",
      "mentorText": "Focus on identifying each phase of the AMD cycle. If you see consolidation, prepare for potential manipulation. Don't rush in until you see clear signs of a breakout.",
      "mentorAnalogy": "Think of the AMD cycle like a traffic light system: consolidation is the red light, manipulation is the green light, and distribution is the yellow light signaling caution."
    },
    "taskData": null,
    "visualKey": "daily-cycle-intro"
  },
  {
    "type": "concept",
    "title": "Algorithmic Price Cycle Patterns",
    "label": "Core Track",
    "body": "### Daily Cycle Basics: Intraday Price Cycle Patterns\nIntraday price cycles exhibit algorithmic behavior, particularly during the transitions between the Asian, London, and New York sessions. Understanding these transitions is vital for predicting price movements.\n\n* **Asian Session Characteristics**: Price typically consolidates with low volatility, forming a range. This period sets the stage for potential breakouts as the London session begins.\n* **London Session Dynamics**: The transition to the London session often triggers manipulation, with price spikes that can mislead traders. Monitor for volume increases and sharp price movements.\n* **New York Session Influence**: The New York session often sees continuation or reversal of trends established in the London session. Analyze price action closely to identify potential exhaustion or continuation patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Transition",
          "definition": "The change in market behavior and volatility as one trading session ends and another begins."
        }
      ],
      "whyThisMatters": "Recognizing session transitions helps traders anticipate price movements and adjust their strategies accordingly.",
      "realLifeExample": "At 3:00 AM EST, GBPUSD consolidates between 1.2500 and 1.2520. As the London session opens, price spikes to 1.2550, indicating manipulation before a potential distribution phase.",
      "commonMistake": "Traders often overlook the significance of session transitions, leading to missed opportunities or incorrect entries.",
      "quickNote": "Session transitions are key indicators of potential price movements.",
      "mentorText": "Pay close attention to how price behaves as sessions change. Use this knowledge to position yourself ahead of potential moves.",
      "mentorAnalogy": "Consider session transitions like the changing of shifts in a factory: each shift brings a different pace and focus, impacting overall production."
    },
    "taskData": null,
    "visualKey": "asia-london-ny-flow"
  },
  {
    "type": "concept",
    "title": "The Judas Swing Explained",
    "label": "Core Track",
    "body": "### Daily Cycle Basics: Understanding the Judas Swing\nThe Judas swing is a manipulation tactic that occurs during the London session, characterized by false breakouts that can trap traders. Recognizing this phenomenon is essential for capitalizing on market moves.\n\n* **Identification of Judas Swings**: Look for sharp price movements that breach previous highs or lows, typically occurring shortly after the London session opens. These moves often reverse quickly, trapping unsuspecting traders.\n* **Volume Confirmation**: A significant increase in volume during the Judas swing can confirm manipulation. Analyze volume spikes alongside price action to validate potential setups.\n* **Entry Strategy**: Plan entries only after the price re-enters the previous range post-swing. This strategy minimizes risk and enhances the probability of successful trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Judas Swing",
          "definition": "A price manipulation pattern during the London session characterized by false breakouts."
        }
      ],
      "whyThisMatters": "Recognizing the Judas swing allows traders to avoid false breakouts and capitalize on subsequent price movements.",
      "realLifeExample": "At 4:00 AM EST, GBPUSD spikes to 1.3000, breaking the previous high, only to reverse back to 1.2950 within 15 minutes, indicating a Judas swing.",
      "commonMistake": "Traders often enter positions during the initial breakout of a Judas swing, failing to wait for confirmation of a reversal.",
      "quickNote": "The Judas swing is a critical pattern to recognize for successful intraday trading.",
      "mentorText": "Always wait for price to confirm its intentions after a breakout. If it reverses back into the range, that's your cue to act.",
      "mentorAnalogy": "Think of the Judas swing like a magician's trick: it distracts you with a flashy move while the real action happens elsewhere."
    },
    "taskData": null,
    "visualKey": "judas-swing-basics"
  },
  {
    "type": "concept",
    "title": "Mechanics of Distribution Phases",
    "label": "Core Track",
    "body": "### Daily Cycle Basics: Distribution Phase Mechanics\nThe distribution phase within the AMD cycle indicates a shift in market sentiment, often leading to trend reversals. Understanding its mechanics is vital for predicting future price movements.\n\n* **Identification of Distribution**: Look for signs of price exhaustion, such as lower highs and increased volume at resistance levels. These indicators suggest that institutions are offloading positions.\n* **Volume Analysis**: A spike in volume during price stagnation or slight declines can confirm distribution. Analyze volume patterns alongside price action to validate distribution signals.\n* **Market Sentiment Shift**: Monitor for changes in market sentiment, often reflected in economic news releases or geopolitical events, which can trigger distribution phases.",
    "context": {
      "keyTerms": [
        {
          "term": "Distribution Phase",
          "definition": "The stage in the AMD cycle where institutions sell off positions, indicating a potential trend reversal."
        }
      ],
      "whyThisMatters": "Recognizing distribution phases allows traders to anticipate market shifts and adjust their strategies accordingly.",
      "realLifeExample": "During the New York session, USDJPY shows price stagnation around 110.50 with increased volume, indicating a distribution phase as institutions offload positions.",
      "commonMistake": "Traders often misinterpret distribution signals, entering positions too early without confirming a trend reversal.",
      "quickNote": "Distribution phases signal potential trend reversals and require careful analysis.",
      "mentorText": "Stay alert for signs of distribution. If you see price stagnation with high volume, it's time to reassess your positions.",
      "mentorAnalogy": "Think of distribution like a company selling off its inventory: when the shelves are empty, it signals a change in market dynamics."
    },
    "taskData": null,
    "visualKey": "distribution-mechanics"
  },
  {
    "type": "concept",
    "title": "Debriefing the Daily Cycle",
    "label": "Core Track",
    "body": "### Daily Cycle Overview: Consolidation, Manipulation, and Distribution\nUnderstanding the daily cycle is essential for recognizing market behavior and executing trades effectively. This card summarizes the three critical phases of the daily cycle: consolidation, manipulation, and distribution.\n\n* **Consolidation Phase**: This phase typically occurs during low volatility periods, where price movements are contained within a defined range. Recognizing this phase allows traders to anticipate potential breakout points.\n* **Manipulation Phase**: Characterized by sudden price movements often driven by large players, this phase can mislead retail traders. Identifying these moves is crucial for avoiding false breakouts and traps.\n* **Distribution Phase**: In this phase, smart money begins to offload positions, leading to a price decline. Understanding the signs of distribution helps traders position themselves for potential reversals or continuation patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Consolidation",
          "definition": "A market phase where price moves within a defined range, indicating indecision."
        },
        {
          "term": "Manipulation",
          "definition": "Artificial price movements created by large market participants to mislead traders."
        },
        {
          "term": "Distribution",
          "definition": "The phase where smart money sells off positions, often leading to a price decline."
        }
      ],
      "whyThisMatters": "Recognizing the daily cycle phases enables traders to align their strategies with market behavior, improving decision-making.",
      "realLifeExample": "On EURUSD, consolidation was evident from 1.1000 to 1.1050 from 12:00 PM to 3:00 PM EST, followed by a manipulation spike to 1.1100 before a distribution drop to 1.0950.",
      "commonMistake": "Traders often enter positions during consolidation without waiting for confirmation of breakout or breakdown.",
      "quickNote": "Identify the daily cycle phases to enhance trading strategy alignment.",
      "mentorText": "You must recognize the phases of the daily cycle to avoid getting caught in traps. Consolidation is your warning; manipulation is your test; distribution is your opportunity.",
      "mentorAnalogy": "Think of the daily cycle like a manufacturing process: consolidation is the assembly line, manipulation is the quality check, and distribution is the final product being shipped out."
    },
    "taskData": null,
    "visualKey": "daily-cycle-debrief"
  },
  {
    "type": "concept",
    "title": "Trading During Consolidation",
    "label": "Core Track",
    "body": "### Strategies for Trading in Consolidation\nConsolidation phases present unique trading opportunities that require specific strategies to capitalize on potential breakouts or continuations. Understanding key indicators is essential for effective trading during this phase.\n\n* **Range Bound Trading**: Utilize support and resistance levels to identify entry and exit points. Traders should look for price action signals at these levels to confirm potential breakouts.\n* **Volume Analysis**: Monitor volume levels during consolidation. A significant increase in volume can signal the likelihood of a breakout, while low volume may indicate continued range-bound behavior.\n* **Indicator Confirmation**: Use indicators such as Bollinger Bands or the Average True Range (ATR) to gauge volatility and potential breakout points. A squeeze in Bollinger Bands often precedes a significant price movement.",
    "context": {
      "keyTerms": [
        {
          "term": "Range Bound Trading",
          "definition": "A strategy that involves trading within established support and resistance levels during consolidation."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of trading volume to identify potential breakout signals."
        },
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands."
        }
      ],
      "whyThisMatters": "Effective trading during consolidation can lead to high-probability setups and improved risk-reward ratios.",
      "realLifeExample": "During the consolidation of GBPUSD between 1.2500 and 1.2550 from 8:00 AM to 10:00 AM EST, a breakout occurred at 10:15 AM EST with a volume spike, resulting in a 50-pip move.",
      "commonMistake": "Traders often enter trades prematurely during consolidation, failing to wait for confirmation of a breakout.",
      "quickNote": "Utilize range-bound strategies and volume analysis to trade effectively during consolidation.",
      "mentorText": "In consolidation, patience is your ally. Wait for the right signals and volume spikes before committing your capital.",
      "mentorAnalogy": "Consider consolidation like a pressure cooker: it builds tension until the lid blows off. Your job is to identify when that pressure will release."
    },
    "taskData": null,
    "visualKey": "daily-cycle-intro"
  },
  {
    "type": "concept",
    "title": "Identifying Manipulation Signals",
    "label": "Core Track",
    "body": "### Recognizing Manipulation Signals in the AMD Cycle\nManipulation signals are critical indicators of market behavior that can lead to significant trading opportunities. Understanding how to identify these signals within the AMD cycle is essential for effective trading.\n\n* **Volume Spikes**: Look for unusual spikes in volume that coincide with price movements. A sudden increase in volume often indicates institutional activity, signaling potential manipulation.\n* **Price Anomalies**: Identify price anomalies such as rapid spikes or drops that do not align with market news or events. These anomalies can indicate manipulation attempts by larger players.\n* **Timeframe Analysis**: Use lower timeframes to spot manipulation signals. For example, a 5-minute chart may reveal sudden price movements that are not visible on higher timeframes, providing early entry points.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spikes",
          "definition": "Sudden increases in trading volume that may indicate manipulation."
        },
        {
          "term": "Price Anomalies",
          "definition": "Unusual price movements that do not correlate with market fundamentals."
        },
        {
          "term": "Timeframe Analysis",
          "definition": "The examination of price movements across different timeframes to identify patterns."
        }
      ],
      "whyThisMatters": "Identifying manipulation signals allows traders to avoid traps and position themselves advantageously in the market.",
      "realLifeExample": "On AUDJPY, a volume spike occurred at 1:30 AM EST, coinciding with a 30-pip drop, indicating manipulation before a recovery back to previous levels.",
      "commonMistake": "Traders often ignore volume spikes, leading to missed opportunities or false entries.",
      "quickNote": "Recognize volume spikes and price anomalies to identify potential market manipulation.",
      "mentorText": "You need to be vigilant for manipulation signals. A sudden volume spike is often the first sign that something is amiss in the market.",
      "mentorAnalogy": "Think of manipulation like a magician's trick: the distraction is the volume spike, while the real move happens elsewhere. Stay focused on the details."
    },
    "taskData": null,
    "visualKey": "asia-london-ny-flow"
  },
  {
    "type": "concept",
    "title": "Advanced Distribution Strategies",
    "label": "Core Track",
    "body": "### Timing and Execution in Distribution Phases\nDistribution phases require advanced strategies to maximize profit potential while minimizing risk. Understanding the timing and execution of trades during this phase is essential for success.\n\n* **Timing Entries**: Enter positions when price shows signs of weakness, such as lower highs or increased selling volume. This timing can help capture the downward momentum effectively.\n* **Execution Techniques**: Utilize limit orders to enter trades at strategic levels, ensuring you capture the move without chasing price. Setting stop-loss orders just above recent highs can protect against false breakouts.\n* **Targeting Profit Levels**: Identify key support levels to set profit targets. Use Fibonacci retracement levels or previous swing lows to determine where to exit trades during distribution.",
    "context": {
      "keyTerms": [
        {
          "term": "Timing Entries",
          "definition": "The strategic decision of when to enter a trade based on market signals."
        },
        {
          "term": "Execution Techniques",
          "definition": "Methods used to enter and exit trades effectively."
        },
        {
          "term": "Profit Levels",
          "definition": "Target price levels where traders aim to exit trades for profit."
        }
      ],
      "whyThisMatters": "Mastering distribution strategies enables traders to capitalize on market declines while managing risk effectively.",
      "realLifeExample": "During the distribution phase of SPY, a trader entered a short position at $400 after observing lower highs and increased selling volume, targeting a profit at $395.",
      "commonMistake": "Traders often enter positions too late in the distribution phase, missing optimal entry points.",
      "quickNote": "Focus on timing and execution to maximize profits during distribution phases.",
      "mentorText": "Timing is everything in distribution. Watch for signs of weakness and execute your trades with precision to capture the move.",
      "mentorAnalogy": "Think of distribution like a controlled demolition: you must time the charges perfectly to bring down the structure without collateral damage."
    },
    "taskData": null,
    "visualKey": "judas-swing-basics"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques in AMD Trading",
    "label": "Core Track",
    "body": "### Risk Management in AMD Trading\nEffective risk management is essential to protect capital during the AMD cycle's fluctuations. This card outlines **specific techniques to mitigate risk while trading AMD**.\n\n* **Position Sizing**: Calculate position sizes based on a fixed percentage of your capital, typically between 1-2%. For example, if your account balance is $10,000, limit your risk to $100-$200 per trade.\n* **Stop-Loss Placement**: Implement stop-loss orders strategically, placing them beyond key support or resistance levels. For instance, if AMD is trading at $80, consider placing a stop-loss at $78 to avoid excessive losses during volatility.\n* **Risk-Reward Ratio**: Aim for a minimum risk-reward ratio of 1:2. If you risk $100, ensure your target profit is at least $200, which helps maintain profitability over time.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to risk on a single trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Implementing robust risk management techniques is critical to surviving the inherent volatility of the AMD cycle.",
      "realLifeExample": "During the AMD cycle, if AMD shares drop from $82 to $78 after a consolidation phase, a well-placed stop-loss would prevent further losses beyond your risk threshold.",
      "commonMistake": "Traders often neglect to adjust their position sizes according to market conditions, leading to overexposure.",
      "quickNote": "Effective risk management protects your capital and ensures longevity in trading.",
      "mentorText": "In my experience, always calculate your risk before entering a trade. If you wouldn’t be comfortable losing that amount, don’t take the trade.",
      "mentorAnalogy": "Think of risk management like a seatbelt in a car; it’s there to protect you when the unexpected happens."
    },
    "taskData": null,
    "visualKey": "distribution-mechanics"
  },
  {
    "type": "concept",
    "title": "Integrating AMD Cycle Concepts into Strategy",
    "label": "Core Track",
    "body": "### Synthesis of AMD Concepts\nSynthesizing the key concepts of the AMD cycle is vital for developing a cohesive trading strategy. This card emphasizes **how to integrate these concepts effectively**.\n\n* **Consolidation Recognition**: Identify periods of consolidation by observing price ranges and volume patterns. For example, if AMD trades between $80 and $82 for several hours, this indicates a consolidation phase.\n* **Manipulation Awareness**: Recognize manipulation patterns, such as false breakouts, that often occur during the transition from consolidation to distribution. If AMD spikes to $83 before quickly retracing, it may signal a manipulation attempt.\n* **Distribution Signals**: Develop criteria for identifying distribution phases, such as increased selling volume at resistance levels. For instance, if AMD shows high volume at $84 while failing to break higher, it may indicate a distribution phase.",
    "context": {
      "keyTerms": [
        {
          "term": "Consolidation",
          "definition": "A market phase where prices move within a defined range."
        },
        {
          "term": "Manipulation",
          "definition": "Intentional price movements designed to mislead traders."
        },
        {
          "term": "Distribution",
          "definition": "A phase where assets are sold off after a price increase."
        }
      ],
      "whyThisMatters": "Integrating these concepts allows traders to create a structured approach, enhancing decision-making during the AMD cycle.",
      "realLifeExample": "After identifying consolidation in AMD between $80 and $82, a trader successfully anticipates a breakout to $84, using volume analysis to confirm distribution.",
      "commonMistake": "Traders often fail to connect the dots between consolidation, manipulation, and distribution, leading to missed opportunities.",
      "quickNote": "A cohesive strategy leverages the full spectrum of the AMD cycle.",
      "mentorText": "You need to see the bigger picture. Each phase of the AMD cycle feeds into the next; understand how they connect.",
      "mentorAnalogy": "Like assembling a puzzle, each piece of the AMD cycle must fit together to reveal the complete picture."
    },
    "taskData": null,
    "visualKey": "daily-cycle-debrief"
  },
  {
    "type": "concept",
    "title": "Avoiding Common Traps in AMD Trading",
    "label": "Core Track",
    "body": "### Common Traps in AMD Trading\nIdentifying common traps within the AMD cycle is crucial for maintaining a disciplined approach. This card highlights **specific pitfalls traders encounter**.\n\n* **Overtrading**: Traders may enter multiple positions during consolidation phases, leading to unnecessary exposure. For example, entering trades every time AMD touches $80 can result in losses if the price remains stagnant.\n* **Misinterpreting Signals**: Misreading consolidation as a breakout opportunity can lead to premature entries. If AMD briefly spikes above $82 but quickly retracts, it’s essential to wait for confirmation before acting.\n* **Ignoring Market Context**: Failing to consider broader market conditions can skew decision-making. For instance, if AMD is trading in a bullish market but shows signs of weakness, it may be prudent to avoid long positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Overtrading",
          "definition": "Taking excessive trades that may lead to increased risk."
        },
        {
          "term": "Breakout",
          "definition": "A price movement that exceeds a defined resistance level."
        },
        {
          "term": "Market Context",
          "definition": "The overall conditions affecting market behavior."
        }
      ],
      "whyThisMatters": "Avoiding these traps enhances a trader's ability to execute a disciplined and informed trading strategy.",
      "realLifeExample": "During a consolidation phase, a trader who overtrades AMD may enter five positions, risking capital unnecessarily when the price remains flat at $81.",
      "commonMistake": "Traders frequently misinterpret consolidation as a signal to enter trades, leading to losses when the expected breakout fails.",
      "quickNote": "Awareness of common traps can significantly improve trading outcomes.",
      "mentorText": "Stay vigilant. Overtrading is a silent killer; it can drain your capital before you realize it.",
      "mentorAnalogy": "Think of trading like navigating a minefield; one wrong step can lead to disaster if you’re not careful."
    },
    "taskData": null,
    "visualKey": "daily-cycle-intro"
  },
  {
    "type": "concept",
    "title": "Maintaining Discipline in AMD Trading",
    "label": "Core Track",
    "body": "### Psychological Aspects of AMD Trading\nUnderstanding the psychological factors at play during the AMD cycle is essential for maintaining discipline. This card discusses **how to manage emotions and decision-making**.\n\n* **Emotional Control**: Recognize emotional triggers that may lead to impulsive trading decisions. For instance, fear of missing out (FOMO) can cause traders to enter positions without proper analysis.\n* **Discipline in Execution**: Stick to your trading plan, even in volatile conditions. If AMD experiences rapid price movements, resist the urge to deviate from your predetermined strategy.\n* **Mindfulness Practices**: Implement techniques such as meditation or journaling to enhance focus and reduce anxiety. For example, taking a moment to breathe and reflect before executing a trade can improve clarity.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Control",
          "definition": "The ability to manage emotions during trading."
        },
        {
          "term": "Trading Plan",
          "definition": "A predefined strategy outlining entry and exit criteria."
        },
        {
          "term": "Mindfulness Practices",
          "definition": "Techniques to enhance awareness and focus."
        }
      ],
      "whyThisMatters": "Maintaining psychological discipline is critical for consistent performance and decision-making in the AMD cycle.",
      "realLifeExample": "A trader who feels FOMO may rush into an AMD trade after a breakout, only to face a retracement that results in a loss due to lack of analysis.",
      "commonMistake": "Traders often allow emotions to dictate their actions, leading to impulsive decisions that deviate from their strategy.",
      "quickNote": "Psychological discipline is as crucial as technical skills in trading.",
      "mentorText": "Your mind is your greatest asset and your worst enemy. Stay disciplined and stick to your plan, no matter the market noise.",
      "mentorAnalogy": "Like a pilot maintaining focus during turbulence, a trader must stay calm and adhere to their flight plan."
    },
    "taskData": null,
    "visualKey": "asia-london-ny-flow"
  },
  {
    "type": "concept",
    "title": "Market Structure and AMD",
    "label": "Core Track",
    "body": "### Market Structure: Interaction with AMD Cycle\nMarket structure plays a pivotal role in understanding the Accumulation-Manipulation-Distribution (AMD) cycle. This card elucidates **how market structure informs trading decisions within the AMD framework**.\n\n* **Identifying Market Phases**: Recognize whether the market is in an accumulation, manipulation, or distribution phase by analyzing price action and volume patterns. Look for consolidation ranges that signal potential accumulation or distribution.\n* **Support and Resistance Levels**: Use key support and resistance levels to gauge the strength of the current phase. A breakout above resistance during the manipulation phase often indicates a shift towards distribution.\n* **Volume Analysis**: Monitor volume spikes in conjunction with price movements. Increased volume during a breakout suggests strong institutional interest, validating the phase of the AMD cycle.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulation",
          "definition": "The phase where buyers enter the market, leading to price consolidation."
        },
        {
          "term": "Manipulation",
          "definition": "The phase characterized by price distortions to trigger stop-loss orders."
        },
        {
          "term": "Distribution",
          "definition": "The phase where sellers dominate, leading to price declines."
        }
      ],
      "whyThisMatters": "Understanding market structure within the AMD cycle enhances decision-making, allowing for more precise entry and exit points.",
      "realLifeExample": "During the EURUSD session on March 15, 2023, price consolidated between 1.0500 and 1.0525 before a manipulation spike to 1.0535, followed by a distribution drop back to 1.0480.",
      "commonMistake": "Failing to recognize the transition between accumulation and distribution phases can lead to premature entries or exits.",
      "quickNote": "Market structure provides the framework for identifying AMD phases.",
      "mentorText": "When analyzing the AMD cycle, always start with the market structure. It’s like checking the foundation of a building before assessing its height. If the structure is weak, the entire setup is at risk.",
      "mentorAnalogy": "Think of market structure as the architectural blueprint of a skyscraper. Just as engineers assess the blueprint to ensure stability, traders must evaluate market structure to confirm the integrity of their trading strategy."
    },
    "taskData": null,
    "visualKey": "judas-swing-basics"
  },
  {
    "type": "practice",
    "title": "Practical Application of AMD",
    "label": "Core Track",
    "body": "### AMD Cycle: Trade Execution Practice\nThis card focuses on applying the AMD concepts through practical exercises. Engage in **identifying and executing trades based on the AMD cycle**.\n\n* **Scenario Analysis**: Review historical price charts and identify phases of accumulation, manipulation, and distribution. Mark key levels where these phases transition.\n* **Trade Simulation**: Execute simulated trades based on identified AMD phases. For example, enter a long position during accumulation and set a stop-loss just below the support level.\n* **Risk Management**: Apply risk management principles by calculating position size based on the distance to the stop-loss. Ensure that potential loss does not exceed 1% of your trading capital.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Simulation",
          "definition": "Practicing trades in a simulated environment to refine execution skills."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies to minimize potential losses in trading."
        },
        {
          "term": "Position Size",
          "definition": "The amount of capital allocated to a particular trade."
        }
      ],
      "whyThisMatters": "Practicing AMD concepts solidifies understanding and prepares traders for real market conditions.",
      "realLifeExample": "In a simulated environment, observe the GBPUSD during the London session. Identify a manipulation spike at 1.3000, then execute a short trade when price retraces to 1.2980, targeting a distribution phase.",
      "commonMistake": "Overlooking the importance of risk management can lead to significant losses during real trades.",
      "quickNote": "Simulated trades reinforce the application of AMD concepts in real-time scenarios.",
      "mentorText": "When practicing AMD, treat each trade like a live operation. Analyze your entries and exits meticulously, just as a surgeon reviews each step of a procedure.",
      "mentorAnalogy": "Consider your trading practice akin to a flight simulator for pilots. Each session hones your skills and prepares you for the complexities of real-world trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a manipulation phase in the AUDJPY at 10:00 AM EST, where price spikes from 85.00 to 85.50. What should be your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position at 85.50 immediately.",
          "isCorrect": false,
          "feedback": "Entering without confirmation of a distribution phase can lead to losses."
        },
        {
          "id": "1",
          "text": "Wait for a price retracement to 85.20 before entering a short position.",
          "isCorrect": true,
          "feedback": "This strategy allows you to capitalize on the distribution phase after the manipulation."
        },
        {
          "id": "2",
          "text": "Set a buy limit order at 85.00.",
          "isCorrect": false,
          "feedback": "This does not align with the identified manipulation phase and ignores market dynamics."
        },
        {
          "id": "3",
          "text": "Monitor the price action for further confirmation before making any trades.",
          "isCorrect": false,
          "feedback": "While monitoring is important, a decisive action based on the AMD cycle is needed."
        }
      ]
    },
    "visualKey": "distribution-mechanics"
  },
  {
    "type": "summary",
    "title": "Summary of Daily Cycle Basics",
    "label": "Core Track",
    "body": "### Daily Cycle Basics: AMD Cycle Overview\nThis card summarizes the key aspects of the Accumulation-Manipulation-Distribution (AMD) cycle. Reinforce **the importance of applying these concepts in trading strategies**.\n\n* **Phases of the AMD Cycle**: The cycle consists of three distinct phases: accumulation, where buying interest builds; manipulation, where price is distorted to trigger stops; and distribution, where selling pressure leads to declines.\n* **Market Structure Integration**: Recognizing market structure enhances the ability to identify transitions between AMD phases, enabling more informed trading decisions.\n* **Execution and Risk Management**: Successful trading requires not only identifying AMD phases but also executing trades with appropriate risk management strategies to protect capital.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution",
          "definition": "The process of carrying out a trade order."
        },
        {
          "term": "Market Dynamics",
          "definition": "The forces that influence price movements in the market."
        },
        {
          "term": "Capital Protection",
          "definition": "Strategies to safeguard trading capital from significant losses."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of the AMD cycle is essential for developing effective trading strategies that adapt to market conditions.",
      "realLifeExample": "On April 10, 2023, the USDCHF showed clear signs of accumulation at 0.9200, followed by manipulation up to 0.9250, and finally distribution down to 0.9150, illustrating the AMD cycle in action.",
      "commonMistake": "Neglecting to adapt trading strategies based on the current phase of the AMD cycle can lead to missed opportunities or losses.",
      "quickNote": "The AMD cycle is a fundamental framework for understanding market behavior.",
      "mentorText": "Always keep the AMD cycle in mind when planning your trades. It’s like having a roadmap that guides your decisions through the market’s twists and turns.",
      "mentorAnalogy": "Think of the AMD cycle as the life cycle of a product. Just as a product goes through stages of development, marketing, and decline, the market experiences accumulation, manipulation, and distribution phases."
    },
    "taskData": null,
    "visualKey": "daily-cycle-debrief"
  }
];
