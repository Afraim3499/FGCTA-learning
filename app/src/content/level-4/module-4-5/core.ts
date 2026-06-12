import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding the Power of 3 in Daily Candles",
    "label": "Core Track",
    "body": "### Power of 3: Daily Candle Phases\nThe Power of 3 (PO3) framework dissects daily candles into three distinct phases: Accumulation, Manipulation, and Distribution. Recognizing these phases is essential for informed trading decisions.\n\n* **Accumulation Phase**: Characterized by a series of small-bodied candles, indicating that institutional players are building positions without causing significant price movement.\n* **Manipulation Phase**: Identified by sharp price movements and long wicks, suggesting that the market is being influenced to mislead retail traders before a major move.\n* **Distribution Phase**: Marked by a series of bearish candles following a bullish trend, indicating that smart money is offloading positions to retail traders at higher prices.",
    "visualKey": "po3-template-intro",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Mapping OHLC to PO3 Phases",
    "label": "Core Track",
    "body": "### OHLC Mapping: Power of 3 Phases\nMapping the Open, High, Low, and Close (OHLC) of daily candles to the PO3 phases provides insight into market sentiment and potential price direction. This understanding is critical for traders looking to align their strategies with market behavior.\n\n* **Open and Close Analysis**: In the Accumulation phase, the close is often near the open, while in the Distribution phase, the close typically trends lower than the open.\n* **High and Low Extremes**: During the Manipulation phase, expect to see significant wicks extending beyond the previous day's high or low, indicating false breakouts.\n* **Candle Body Size**: Smaller bodies in the Accumulation phase suggest indecision, while larger bodies in the Distribution phase indicate strong selling pressure.",
    "visualKey": "ohlc-phase-mapping",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Identifying the Accumulation Phase",
    "label": "Core Track",
    "body": "### Accumulation Phase: Recognition Techniques\nThe Accumulation phase signals the initial buying interest before a potential upward price movement. Recognizing this phase is vital for positioning ahead of bullish trends.\n\n* **Candle Characteristics**: Look for a series of small-bodied candles with higher lows and higher closes, indicating sustained buying pressure.\n* **Volume Confirmation**: Increased volume during this phase often accompanies price stability, suggesting that institutional traders are accumulating positions.\n* **Support Levels**: Identify key support levels where price consistently bounces, reinforcing the idea that buyers are entering the market.",
    "visualKey": "accumulation-phase",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Understanding Manipulation through Wicks",
    "label": "Core Track",
    "body": "### Manipulation Phase: Wick Analysis\nThe Manipulation phase is characterized by deceptive price movements, often indicated by candle wicks. Analyzing these wicks is crucial for avoiding traps set by market makers.\n\n* **Wick Length**: Long wicks on daily candles suggest price rejection at key levels, indicating potential traps for unsuspecting traders.\n* **False Breakouts**: A wick that breaches a significant support or resistance level before closing back within the range signals manipulation, often preceding a reversal.\n* **Market Sentiment**: Observe the context of wick formations; a wick at the high of a bullish candle can indicate that buyers were overpowered, suggesting a potential shift in momentum.",
    "visualKey": "manipulation-sweeps",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Recognizing the Distribution Phase",
    "label": "Core Track",
    "body": "### Distribution Phase: Identifying Selling Pressure\nThe Distribution phase signifies a market's transition from accumulation to a downward trend. This card details **how to spot selling pressure through candle characteristics**.\n\n* **Candle Patterns**: Look for bearish engulfing candles or multiple consecutive bearish candles, indicating strong selling interest. A typical distribution phase may show a series of three or more bearish candles closing near their lows.\n* **Volume Analysis**: Increased volume accompanying bearish candles suggests that institutional players are actively distributing their positions. A volume spike of 30% above the average during this phase is a critical indicator.\n* **Resistance Levels**: Monitor price action near established resistance levels; a failure to break above these levels, combined with bearish signals, reinforces the likelihood of a distribution phase.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Distribution Phase",
          "definition": "The stage where selling pressure dominates, leading to a potential downward trend."
        }
      ],
      "whyThisMatters": "Accurately identifying the Distribution phase allows traders to anticipate market reversals and adjust their strategies accordingly.",
      "realLifeExample": "On the S&P 500, observe a series of three bearish candles from 4,500 to 4,470 with a volume spike during the last candle, indicating strong selling pressure.",
      "commonMistake": "Traders often mistake a temporary pullback for a Distribution phase without confirming volume or candle patterns.",
      "quickNote": "Look for bearish patterns and volume spikes to confirm Distribution.",
      "mentorText": "When you see a series of bearish candles with increasing volume, think of it as a signal that the market is preparing to sell off. Don't ignore those signs.",
      "mentorAnalogy": "Identifying the Distribution phase is like a pilot noticing a drop in altitude; it signals a need for immediate corrective action before a potential crash."
    },
    "taskData": null,
    "visualKey": "po3-template-debrief"
  },
  {
    "type": "concept",
    "title": "Applying PO3 to Daily Trading Strategies",
    "label": "Core Track",
    "body": "### Integrating PO3 into Daily Trading\nIncorporating the Power of 3 framework enhances trading strategies by clarifying market phases. This card outlines **how to leverage PO3 for informed decision-making**.\n\n* **Phase Identification**: Begin each trading day by identifying the current phase (Accumulation, Manipulation, Distribution) based on daily candle analysis. Use the last three daily candles to determine the prevailing phase.\n* **Trade Execution**: Align your trades with the identified phase; for example, enter long positions during Accumulation and short positions during Distribution. Ensure that your stop-loss levels are set according to the phase's volatility.\n* **Risk Management**: Adjust position sizing based on the phase. During Manipulation, where volatility is higher, consider reducing position sizes to mitigate risk while maintaining exposure to potential moves.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Power of 3 (PO3)",
          "definition": "A framework for analyzing market phases: Accumulation, Manipulation, and Distribution."
        }
      ],
      "whyThisMatters": "Utilizing the PO3 framework enables traders to align their strategies with market dynamics, improving entry and exit timing.",
      "realLifeExample": "On a trading day where the EURUSD shows signs of Accumulation with three consecutive bullish candles, a trader might enter a long position at 1.1000, setting a stop-loss at 1.0950.",
      "commonMistake": "Failing to adapt trading strategies to the identified phase can lead to missed opportunities or increased losses.",
      "quickNote": "Align your trades with the current market phase for optimal results.",
      "mentorText": "Think of the PO3 framework as your trading compass; it guides you through the market's phases, ensuring your trades are well-timed and informed.",
      "mentorAnalogy": "Using PO3 is like a surgeon following a checklist before an operation; it ensures every critical phase is accounted for to avoid complications."
    },
    "taskData": null,
    "visualKey": "po3-template-intro"
  },
  {
    "type": "concept",
    "title": "Common Traps in PO3 Analysis",
    "label": "Core Track",
    "body": "### Avoiding Pitfalls in PO3 Analysis\nTraders often encounter traps when analyzing daily candles through the PO3 framework. This card highlights **common pitfalls and strategies to avoid them**.\n\n* **Confirmation Bias**: Traders may see what they want to see, interpreting bullish candles during a Distribution phase as a reversal signal. Always validate with volume and broader market context.\n* **Overlooking Timeframes**: Relying solely on daily candles can obscure critical information from lower timeframes. Analyze 4-hour or hourly charts to confirm phase transitions and avoid false signals.\n* **Ignoring Market News**: Major economic releases can distort price action, leading to misinterpretation of the PO3 phases. Always check the economic calendar and adjust your analysis accordingly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Bias",
          "definition": "The tendency to interpret information in a way that confirms one’s preconceptions."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding these common traps enhances the accuracy of PO3 analysis and improves trading outcomes.",
      "realLifeExample": "A trader sees a bullish candle on the daily chart of GBPUSD but fails to account for an upcoming interest rate decision, leading to a premature long position.",
      "commonMistake": "Many traders neglect to validate their analysis with additional timeframes, leading to false conclusions about market phases.",
      "quickNote": "Stay objective and validate your analysis to avoid common traps.",
      "mentorText": "Be vigilant; the market will often try to mislead you. Always cross-check your analysis against multiple factors to ensure clarity.",
      "mentorAnalogy": "Navigating the market without considering all factors is like a pilot flying blind; you need all instruments functioning to avoid disaster."
    },
    "taskData": null,
    "visualKey": "ohlc-phase-mapping"
  },
  {
    "type": "concept",
    "title": "Synthesis of PO3 Phases for Market Predictions",
    "label": "Core Track",
    "body": "### Creating a Cohesive Market Prediction Model\nSynthesizing the Accumulation, Manipulation, and Distribution phases allows traders to develop a robust market prediction model. This card teaches **how to integrate these phases for effective forecasting**.\n\n* **Phase Interconnectivity**: Recognize that each phase feeds into the next; Accumulation leads to Manipulation, which then transitions into Distribution. Understanding this flow is essential for predicting market movements.\n* **Candle Analysis**: Use the characteristics of candles in each phase to build a narrative. For example, a strong bullish candle after a Manipulation phase suggests a potential Accumulation phase is beginning.\n* **Market Sentiment**: Incorporate broader market sentiment and economic indicators to validate your predictions. For instance, if the market sentiment is bullish and you identify Accumulation, the likelihood of upward movement increases.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Prediction Model",
          "definition": "A framework for forecasting future price movements based on phase analysis."
        }
      ],
      "whyThisMatters": "A cohesive model enhances predictive accuracy, allowing traders to make informed decisions based on comprehensive analysis.",
      "realLifeExample": "After identifying Accumulation in the NASDAQ with bullish candles and positive economic sentiment, a trader predicts a potential upward move, entering a long position at 13,000.",
      "commonMistake": "Traders often fail to see the interconnectivity of phases, leading to fragmented analysis and poor predictions.",
      "quickNote": "Synthesize phases for a comprehensive market prediction model.",
      "mentorText": "Think of each phase as a chapter in a story; understanding how they connect helps you predict the plot's next twist.",
      "mentorAnalogy": "Creating a market prediction model is like an architect designing a building; each phase must be considered to ensure structural integrity and functionality."
    },
    "taskData": null,
    "visualKey": "accumulation-phase"
  },
  {
    "type": "concept",
    "title": "Advanced Techniques for PO3 Analysis",
    "label": "Core Track",
    "body": "### PO3 Analysis: Advanced Techniques\nUtilizing advanced techniques enhances the accuracy of PO3 analysis by integrating volume and additional indicators. This card explores **how to dissect daily candles through these advanced methodologies**.\n\n* **Volume Confirmation**: Analyze volume spikes during the Manipulation phase; a significant increase in volume should accompany price movements beyond established support or resistance levels to validate the Manipulation phase.\n* **Multi-Timeframe Analysis**: Employ higher timeframe candles to identify overarching trends while using lower timeframes to pinpoint entry and exit strategies, ensuring alignment with the PO3 framework.\n* **Indicator Integration**: Utilize tools such as the Relative Strength Index (RSI) and Moving Average Convergence Divergence (MACD) to confirm phase transitions, particularly during the shift from Accumulation to Manipulation.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Confirmation",
          "definition": "The process of validating price movements by analyzing accompanying volume spikes."
        },
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing price action across different timeframes to enhance decision-making."
        },
        {
          "term": "Indicator Integration",
          "definition": "The use of technical indicators to confirm market phase transitions."
        }
      ],
      "whyThisMatters": "Advanced techniques refine the PO3 analysis, allowing traders to make more informed decisions based on comprehensive market data.",
      "realLifeExample": "On a daily chart of GBPUSD, a volume spike of 150% was observed during a Manipulation phase at 1.3000, confirming a false breakout before a drop back to the Accumulation zone.",
      "commonMistake": "Relying solely on price action without considering volume can lead to misinterpretation of market phases.",
      "quickNote": "Integrate volume and indicators for precise PO3 analysis.",
      "mentorText": "When analyzing daily candles, always check the volume. If you see a price move without volume backing it, question the validity of that move. It’s like a plane taking off without enough thrust; it just won’t fly.",
      "mentorAnalogy": "Think of PO3 analysis like a forensic investigation; the price action is the crime scene, and volume is the evidence that helps you piece together what really happened."
    },
    "taskData": null,
    "visualKey": "manipulation-sweeps"
  },
  {
    "type": "concept",
    "title": "Case Studies: Successful PO3 Applications",
    "label": "Core Track",
    "body": "### PO3 Applications: Case Studies\nThis card reviews real market scenarios that demonstrate successful applications of the PO3 framework. These case studies provide **practical insights into the effectiveness of the PO3 methodology**.\n\n* **Case Study 1: EURUSD**: In a recent trading session, the daily candle exhibited a clear Accumulation phase followed by a Manipulation spike at 1.1200. Traders who recognized this pattern entered long positions, capitalizing on the subsequent Distribution phase that followed.\n* **Case Study 2: AUDJPY**: During a volatile market period, the daily candle showed a classic Manipulation phase with a false breakout above 80.00. Traders who understood the PO3 framework identified this as a signal to short, resulting in a profitable trade as the price reverted to the Accumulation zone.\n* **Case Study 3: SPX500**: An analysis of the SPX500 index revealed a Distribution phase characterized by declining volume. Traders who monitored this phase were able to exit positions before a significant market correction occurred.",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulative Phase",
          "definition": "The initial phase where buying interest builds up."
        },
        {
          "term": "Manipulation Phase",
          "definition": "A phase where price is artificially moved to trigger stop-loss orders."
        },
        {
          "term": "Distribution Phase",
          "definition": "The final phase where selling pressure leads to price declines."
        }
      ],
      "whyThisMatters": "Understanding successful case studies equips traders with the knowledge to apply the PO3 framework effectively in their own trading.",
      "realLifeExample": "In the EURUSD case, traders who entered long at the end of the Accumulation phase at 1.1150 profited as the price surged to 1.1250 during the Distribution phase.",
      "commonMistake": "Failing to recognize the phases can lead to missed opportunities or significant losses.",
      "quickNote": "Study successful PO3 applications to enhance your trading strategy.",
      "mentorText": "Look at these case studies closely. They illustrate how traders who understood the phases were able to capitalize on market movements. It’s not just about the price; it’s about understanding the story behind it.",
      "mentorAnalogy": "Consider these case studies like historical battle strategies; understanding past victories and defeats can guide your approach in future trades."
    },
    "taskData": null,
    "visualKey": "po3-template-debrief"
  },
  {
    "type": "concept",
    "title": "Psychological Factors Influencing PO3 Phases",
    "label": "Core Track",
    "body": "### Psychological Factors in PO3 Phases\nMarket behavior during the Accumulation, Manipulation, and Distribution phases is heavily influenced by trader psychology. This card delves into **the psychological elements that shape market movements**.\n\n* **Fear and Greed Dynamics**: During the Accumulation phase, fear of missing out (FOMO) drives traders to enter positions, while in the Manipulation phase, fear of loss can lead to panic selling, affecting price stability.\n* **Market Sentiment Analysis**: Gauge market sentiment through news and social media trends; positive sentiment can bolster the Accumulation phase, while negative sentiment often triggers the Manipulation phase.\n* **Behavioral Biases**: Recognize biases such as overconfidence during the Distribution phase, where traders may hold onto losing positions longer than necessary, leading to increased risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear and Greed Dynamics",
          "definition": "The emotional responses of traders that influence market decisions."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular market or asset."
        },
        {
          "term": "Behavioral Biases",
          "definition": "Cognitive biases that affect trading decisions and risk management."
        }
      ],
      "whyThisMatters": "Understanding psychological factors allows traders to anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "During the Accumulation phase of BTCUSD at $30,000, FOMO drove prices up to $35,000, but panic selling in the Manipulation phase saw a rapid drop back to $32,000 as traders reacted to negative news.",
      "commonMistake": "Ignoring psychological factors can lead to irrational trading decisions and increased losses.",
      "quickNote": "Psychological awareness is crucial for navigating PO3 phases effectively.",
      "mentorText": "Always be aware of your emotions when trading. If you feel overly confident or fearful, take a step back and reassess your position. It’s like a pilot checking their instruments before takeoff; you need to ensure you’re in the right mindset.",
      "mentorAnalogy": "Think of trading psychology like a chess match; understanding your opponent's mindset can give you the upper hand in anticipating their moves."
    },
    "taskData": null,
    "visualKey": "po3-template-intro"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies with PO3",
    "label": "Core Track",
    "body": "### Risk Management in PO3 Trading\nImplementing effective risk management strategies is essential when trading based on the PO3 framework. This card outlines **how to safeguard your capital while navigating market phases**.\n\n* **Position Sizing**: Determine position sizes based on the volatility of the asset during each phase; for instance, reduce position sizes during the Manipulation phase to mitigate risk exposure.\n* **Stop-Loss Placement**: Set stop-loss orders strategically outside the Accumulation and Distribution zones to protect against adverse price movements while allowing for normal fluctuations.\n* **Risk-Reward Ratio**: Maintain a favorable risk-reward ratio of at least 1:2 when entering trades during the Manipulation phase, ensuring that potential gains outweigh potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a trade."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell an asset when it reaches a certain price to limit losses."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Effective risk management strategies protect traders from significant losses, especially during volatile market phases.",
      "realLifeExample": "In a recent trade on USDCAD, a trader set a stop-loss at 1.2500 during the Manipulation phase, allowing for a potential gain to 1.2700 while risking only 50 pips.",
      "commonMistake": "Failing to adjust position sizes according to market volatility can lead to overexposure and significant losses.",
      "quickNote": "Implement robust risk management strategies to safeguard your trading capital.",
      "mentorText": "Always prioritize risk management. If you wouldn’t bet your entire bankroll in a casino, don’t risk your entire trading account on a single trade. Think of it as a safety net; it’s there to catch you when the market turns against you.",
      "mentorAnalogy": "Consider risk management like a safety harness in rock climbing; it keeps you secure while allowing you to reach new heights without the fear of falling."
    },
    "taskData": null,
    "visualKey": "ohlc-phase-mapping"
  },
  {
    "type": "concept",
    "title": "Practice Scenarios for PO3 Application",
    "label": "Core Track",
    "body": "### PO3 Application: Engaging with Real-Life Scenarios\nThe Power of 3 framework can be effectively applied to various trading scenarios. This card focuses on **practical exercises that reinforce the understanding of Accumulation, Manipulation, and Distribution phases**.\n\n* **Scenario Analysis**: Review historical daily candles of instruments like GBPUSD or SPX500, identifying clear phases of Accumulation (lower volatility, price range tightening) followed by Manipulation (sharp price moves against the prevailing trend) and concluding with Distribution (price rejection at key levels).\n* **Trade Setup Simulation**: Create hypothetical trading setups based on identified PO3 phases. For instance, if GBPUSD shows a 50-pip range during Accumulation followed by a 30-pip Manipulation spike, plan entry points for Distribution.\n* **Risk Management Application**: Assess risk-reward ratios in each phase. For example, if entering a trade during the Distribution phase after a Manipulation spike, ensure the stop-loss is set above the Manipulation high to protect against false breakouts.",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulation",
          "definition": "The initial phase where price consolidates before a significant move."
        },
        {
          "term": "Manipulation",
          "definition": "The phase where price is driven against the prevailing trend to trigger stop-losses."
        },
        {
          "term": "Distribution",
          "definition": "The final phase where price rejects previous highs/lows, indicating a potential reversal."
        }
      ],
      "whyThisMatters": "Engaging with real-life scenarios enhances the trader's ability to identify and act on PO3 phases in live markets.",
      "realLifeExample": "On March 15, 2023, GBPUSD exhibited a 40-pip Accumulation phase before a 25-pip Manipulation spike at 10:00 AM EST, followed by a Distribution phase that rejected the previous high.",
      "commonMistake": "Failing to recognize the transition between phases can lead to premature entries or exits.",
      "quickNote": "Practice identifying PO3 phases in historical data to solidify your understanding.",
      "mentorText": "When you analyze a daily candle, think of it as a story unfolding. Each phase tells you something critical about market sentiment and potential price action.",
      "mentorAnalogy": "Consider this like a three-act play: Accumulation sets the stage, Manipulation creates tension, and Distribution delivers the resolution."
    },
    "taskData": null,
    "visualKey": "accumulation-phase"
  },
  {
    "type": "practice",
    "title": "Summary of PO3 Concepts",
    "label": "Core Track",
    "body": "### PO3 Framework: Key Concepts Recap\nUnderstanding the Power of 3 framework is essential for successful trading. This card summarizes the critical components of Accumulation, Manipulation, and Distribution phases.\n\n* **Accumulative Behavior**: Price often consolidates within a defined range, indicating potential buying interest. For example, during the last week of February 2023, AUDCAD formed a tight range around 0.9000, signaling Accumulation before a breakout.\n* **Manipulative Moves**: Sharp price movements designed to trigger stop-loss orders. For instance, on April 10, 2023, EURUSD spiked 20 pips below a key support level at 1.1000 before reversing, illustrating a Manipulation phase.\n* **Distribution Signals**: Price rejection at key levels often indicates a shift in market sentiment. For example, on May 5, 2023, after a Manipulation spike, USDJPY rejected the 135.00 level, confirming a Distribution phase.",
    "context": {
      "keyTerms": [
        {
          "term": "Accumulative Behavior",
          "definition": "Price action indicating consolidation and potential buying interest."
        },
        {
          "term": "Manipulative Moves",
          "definition": "Price spikes designed to trigger stop-loss orders and create false breakouts."
        },
        {
          "term": "Distribution Signals",
          "definition": "Price rejections at key levels indicating a potential market reversal."
        }
      ],
      "whyThisMatters": "A solid grasp of these concepts allows traders to navigate market phases effectively and make informed decisions.",
      "realLifeExample": "On April 15, 2023, SPX500 showed a clear Accumulation phase around 4,000 before a Manipulation spike to 4,050, followed by a Distribution that rejected the high.",
      "commonMistake": "Overlooking the significance of each phase can lead to misinterpretation of market signals.",
      "quickNote": "Master the PO3 phases to enhance your trading strategy and decision-making process.",
      "mentorText": "Each phase of the PO3 framework is like a chapter in a book. You need to understand the context of each chapter to predict the plot's direction.",
      "mentorAnalogy": "Think of the market as a construction project: Accumulation is the foundation, Manipulation is the framing, and Distribution is the final inspection before the building is complete."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During which phase would you expect to see a sharp price spike designed to trigger stop-loss orders?",
      "options": [
        {
          "id": "0",
          "text": "Accumulation phase",
          "isCorrect": false,
          "feedback": "Incorrect. The Accumulation phase typically involves price consolidation, not sharp spikes."
        },
        {
          "id": "1",
          "text": "Manipulation phase",
          "isCorrect": true,
          "feedback": "Correct. The Manipulation phase is characterized by sharp price movements aimed at triggering stop-loss orders."
        },
        {
          "id": "2",
          "text": "Distribution phase",
          "isCorrect": false,
          "feedback": "Incorrect. The Distribution phase usually involves price rejection after a Manipulation spike."
        },
        {
          "id": "3",
          "text": "None of the above",
          "isCorrect": false,
          "feedback": "Incorrect. The Manipulation phase is specifically where you would see sharp price spikes."
        }
      ]
    },
    "visualKey": "manipulation-sweeps"
  },
  {
    "type": "summary",
    "title": "PO3 Daily Candle Synthesis",
    "label": "Core Track",
    "body": "### Advanced PO3 Application: Timing Filters and Session Dynamics\nThe advanced application of the Power of 3 framework requires a nuanced understanding of timing and session dynamics. This card covers **how to effectively integrate timing filters with PO3 phases**.\n\n* **Session Timing Analysis**: Identify key trading sessions (London, New York) and their impact on price behavior. For example, during the London session opening at 3:00 AM EST, a Manipulation phase may occur as liquidity increases.\n* **Timing Filters**: Use specific timeframes to confirm PO3 phases. For instance, if a Manipulation spike occurs at 10:30 AM EST during high-impact news releases, it may indicate a stronger Distribution phase to follow.\n* **Market Correlation**: Analyze how different instruments react during these phases. For example, if gold prices spike during a Manipulation phase in the S&P 500, it may indicate a risk-off sentiment impacting both markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Timing Analysis",
          "definition": "Evaluating the impact of different trading sessions on price behavior."
        },
        {
          "term": "Timing Filters",
          "definition": "Specific timeframes used to confirm the validity of PO3 phases."
        },
        {
          "term": "Market Correlation",
          "definition": "The relationship between different instruments during PO3 phases."
        }
      ],
      "whyThisMatters": "Understanding timing and session dynamics enhances the trader's ability to anticipate market movements and align trades with optimal conditions.",
      "realLifeExample": "On June 1, 2023, at 8:30 AM EST, the USDJPY exhibited a Manipulation spike during the New York session, leading to a Distribution phase that rejected the 140.00 level shortly after.",
      "commonMistake": "Neglecting to consider session dynamics can lead to misinterpretation of price action during PO3 phases.",
      "quickNote": "Integrate timing filters with PO3 analysis for enhanced trading precision.",
      "mentorText": "Timing is everything in trading. Just as a surgeon must know when to make the incision, you must understand when to enter or exit based on market phases.",
      "mentorAnalogy": "Think of trading like a symphony: each session and phase must harmonize to create a successful performance."
    },
    "taskData": null,
    "visualKey": "po3-template-debrief"
  }
];
