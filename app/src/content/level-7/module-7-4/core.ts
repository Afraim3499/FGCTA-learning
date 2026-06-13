import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Candle Sequences in Live Markets",
    "label": "Core Track",
    "body": "### Core Scenario: Candle Sequence Interpretation\nIdentifying candle sequences is crucial for gauging market sentiment and potential price movements. This card teaches **how to interpret various candle formations in real-time trading scenarios**.\n\n* **Candle Types and Implications**: Recognize bullish and bearish candles, such as dojis and engulfing patterns, and their significance in indicating market reversals or continuations.\n* **Sequence Analysis**: Assess the relationship between consecutive candles; for instance, a series of higher highs and higher lows indicates bullish momentum, while lower highs and lower lows suggest bearish pressure.\n* **Volume Confirmation**: Validate candle formations with volume; a bullish engulfing candle with increased volume confirms buyer strength, while a doji with low volume may signal indecision.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Sequence",
          "definition": "A series of candles that provide insight into market sentiment and potential price direction."
        }
      ],
      "whyThisMatters": "Understanding candle sequences allows traders to anticipate potential market movements and adjust their strategies accordingly.",
      "realLifeExample": "During the NY session, a series of three consecutive bullish candles on the GBPUSD, closing at 1.3700 with increasing volume, indicated strong buyer interest, prompting a long position.",
      "commonMistake": "Traders often misinterpret candle formations by ignoring volume, leading to false signals and poor decision-making.",
      "quickNote": "Candle sequences reveal market sentiment and potential price direction.",
      "mentorText": "When you see a series of candles forming, pay close attention to their relationships. A strong bullish sequence with volume backing it is a clear signal to consider entering a long position.",
      "mentorAnalogy": "Think of reading candle sequences like analyzing a flight path; each candle represents a waypoint that indicates the direction and momentum of the aircraft."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Order Flow Dynamics in Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Analyzing Order Flow\nUnderstanding order flow is essential for interpreting market sentiment and predicting price direction. This card teaches **how to analyze the dynamics between buyers and sellers in real-time**.\n\n* **Bid-Ask Analysis**: Monitor the bid and ask prices to gauge the strength of buying and selling pressure; a narrowing spread indicates potential consolidation, while widening spreads suggest volatility.\n* **Volume and Price Movement**: Correlate volume spikes with price movements; for example, a sudden increase in buy orders at a support level can indicate strong buyer interest and potential price reversal.\n* **Order Book Insights**: Utilize the order book to identify large buy or sell orders that may influence price action; a large sell order at a resistance level can signal potential rejection of higher prices.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The analysis of buying and selling activity in the market to gauge market sentiment."
        }
      ],
      "whyThisMatters": "Analyzing order flow provides insights into market sentiment, allowing traders to make informed decisions based on real-time data.",
      "realLifeExample": "At 10:30 AM EST, a sudden spike in buy orders for the S&P 500 futures led to a price increase from 4,200 to 4,220, indicating strong bullish sentiment.",
      "commonMistake": "Traders often overlook the significance of order flow, relying solely on price action without considering the underlying buyer-seller dynamics.",
      "quickNote": "Order flow analysis reveals the underlying market sentiment and potential price direction.",
      "mentorText": "When you analyze order flow, focus on the relationship between buyers and sellers. A sudden influx of buy orders can signal a shift in market sentiment, guiding your next move.",
      "mentorAnalogy": "Consider order flow like traffic patterns; understanding where the majority of vehicles are headed helps predict congestion and smooth navigation."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Integrating Pre-Planned Scenarios with Live Data",
    "label": "Core Track",
    "body": "### Core Scenario: Aligning Live Data with Trading Plans\nIntegrating live price action with pre-planned trading scenarios enhances decision-making and risk management. This card teaches **how to align real-time data with your trading strategy**.\n\n* **Scenario Validation**: Confirm that live price action aligns with your pre-defined scenarios; for instance, if your plan indicates a long entry at 1.1500 on EURUSD, ensure price approaches this level with supporting volume.\n* **Dynamic Adjustments**: Be prepared to adjust your scenarios based on real-time data; if price action shows strong rejection at a key level, consider modifying your entry or exit points accordingly.\n* **Risk Management Alignment**: Ensure that your risk parameters are still valid as live data unfolds; if volatility increases unexpectedly, reassess your stop-loss levels to maintain risk control.",
    "context": {
      "keyTerms": [
        {
          "term": "Pre-Planned Scenarios",
          "definition": "Trading strategies developed prior to market activity based on technical analysis."
        }
      ],
      "whyThisMatters": "Aligning live data with pre-planned scenarios allows traders to make informed decisions and manage risk effectively.",
      "realLifeExample": "As the AUDUSD approached the pre-defined entry point of 0.7400, live data showed increased buying pressure, confirming the scenario and prompting execution of the long position.",
      "commonMistake": "Traders often fail to adjust their scenarios in response to live data, leading to missed opportunities or increased risk.",
      "quickNote": "Integrate live data with pre-planned scenarios for informed trading decisions.",
      "mentorText": "Always check if the live market aligns with your plan. If the data shifts, be ready to adapt your strategy to stay in control.",
      "mentorAnalogy": "Think of this process like a pilot adjusting their flight path based on real-time weather conditions; flexibility is key to a safe landing."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Identifying Key Candle Patterns in Real-Time",
    "label": "Core Track",
    "body": "### Core Scenario: Recognizing Candle Patterns\nRecognizing significant candle patterns as they form is critical for anticipating market reversals or continuations. This card teaches **how to identify and interpret key candle patterns in real-time**.\n\n* **Pattern Recognition**: Identify key patterns such as hammers, shooting stars, and morning stars as they develop; each pattern has distinct implications for potential price movement.\n* **Contextual Analysis**: Assess the context in which patterns form; for example, a hammer at a support level suggests a potential bullish reversal, while a shooting star at resistance indicates a possible bearish reversal.\n* **Confirmation Signals**: Look for confirmation from subsequent candles; a bullish engulfing candle following a hammer pattern reinforces the likelihood of a price increase.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Patterns",
          "definition": "Specific formations of candles that indicate potential market reversals or continuations."
        }
      ],
      "whyThisMatters": "Identifying candle patterns in real-time allows traders to act swiftly on potential market movements.",
      "realLifeExample": "At 2:00 PM GMT, a hammer pattern formed on the USDJPY at 110.50, followed by a bullish engulfing candle, prompting a long position that capitalized on a subsequent rally to 111.00.",
      "commonMistake": "Traders often misinterpret candle patterns by failing to consider the broader market context, leading to premature entries.",
      "quickNote": "Key candle patterns signal potential market reversals or continuations.",
      "mentorText": "When you spot a candle pattern, analyze its context carefully. A hammer at support is a strong signal, but always wait for confirmation before acting.",
      "mentorAnalogy": "Recognizing candle patterns is like a surgeon identifying symptoms; each pattern provides clues that guide your next critical decision."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Assessing Volatility Through Candle Behavior",
    "label": "Core Track",
    "body": "### Core Scenario: Candle Size and Market Volatility\nCandle size and range are direct indicators of market volatility, impacting trading decisions. This card teaches **how to assess volatility through real-time candle analysis**.\n\n* **Candle Size Evaluation**: A candle's body size indicates the strength of price movement. Larger bodies suggest higher volatility, while smaller bodies indicate consolidation. For example, a 50-pip body on the GBPUSD during the London session signals strong momentum.\n* **Range Analysis**: Measure the high-low range of the last five candles to gauge volatility. A consistent range above 30 pips on the EURJPY suggests a volatile environment, prompting adjustments in position sizing.\n* **Volatility Impact on Strategy**: Modify entry and exit strategies based on volatility assessments. In a high-volatility scenario, consider wider stop-loss levels to accommodate larger price swings.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Size",
          "definition": "The length of a candle's body, indicating price movement strength."
        },
        {
          "term": "Candle Range",
          "definition": "The difference between the high and low of a candle, reflecting volatility."
        }
      ],
      "whyThisMatters": "Understanding candle behavior allows traders to adapt strategies to current market conditions, enhancing decision-making accuracy.",
      "realLifeExample": "During the NY session, the AUDUSD exhibited a candle range of 40 pips, indicating increased volatility, which influenced a trader to widen their stop-loss to 20 pips.",
      "commonMistake": "Traders often misinterpret small candles as a lack of opportunity, overlooking potential volatility shifts.",
      "quickNote": "Candle size and range are key indicators of market volatility.",
      "mentorText": "When analyzing candles, focus on their size and range. A large body means the market is moving decisively, while smaller bodies indicate indecision. Adjust your strategies accordingly.",
      "mentorAnalogy": "Think of candle behavior like a car's speedometer. A large candle is like a car accelerating quickly, while a small candle is akin to a car idling at a stoplight."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Momentum Signals from Live Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Identifying Momentum Through Candle Patterns\nMomentum signals derived from live price action can indicate potential breakout opportunities. This card teaches **how to interpret these signals effectively**.\n\n* **Bullish and Bearish Engulfing Patterns**: A bullish engulfing pattern occurs when a larger green candle completely engulfs the previous red candle, signaling strong buying momentum. For instance, if USDCHF shows this pattern at 0.9100, it suggests a potential upward breakout.\n* **Doji Candles as Reversal Indicators**: A doji candle, characterized by a small body and long wicks, indicates indecision. If a doji forms after a strong bullish trend, it may signal a reversal or consolidation phase, prompting caution in further buying.\n* **Volume Confirmation**: Always confirm momentum signals with volume analysis. A breakout above resistance with increased volume (e.g., 150% of the average) on the S&P 500 indicates a strong momentum shift.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Engulfing Pattern",
          "definition": "A candle pattern where one candle completely engulfs the previous one, indicating potential momentum."
        },
        {
          "term": "Doji Candle",
          "definition": "A candle with a small body and long wicks, reflecting market indecision."
        }
      ],
      "whyThisMatters": "Interpreting momentum signals accurately allows traders to capitalize on breakout opportunities, enhancing profitability.",
      "realLifeExample": "The GBPUSD formed a bullish engulfing pattern at 1.3000 with a volume spike, leading to a successful long position that gained 30 pips within the next hour.",
      "commonMistake": "Traders often enter positions on momentum signals without waiting for volume confirmation, leading to false breakouts.",
      "quickNote": "Momentum signals guide breakout strategies; always confirm with volume.",
      "mentorText": "When you see a bullish engulfing pattern, it’s like a green light for a potential breakout. But don’t rush in; check the volume to ensure the momentum is real.",
      "mentorAnalogy": "Think of momentum signals like a runner's starting gun. A clear signal means go, but if the crowd is silent (low volume), it might be a false start."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Recognizing Traps in Live Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Identifying Common Trading Traps\nTraders often fall into traps when interpreting live price action, such as false breakouts and whipsaws. This card teaches **how to recognize and avoid these pitfalls**.\n\n* **False Breakouts**: A false breakout occurs when price moves beyond a support or resistance level but quickly reverses. For example, if the EURUSD breaks above 1.1000 but falls back within 10 pips, it indicates a false breakout, necessitating caution in new long positions.\n* **Whipsaw Movements**: Whipsaws are rapid price movements that trigger stop-loss orders. If the price of GBPJPY oscillates between 150.00 and 150.20 within a short timeframe, it can cause traders to exit positions prematurely. Recognize this behavior to avoid unnecessary losses.\n* **Confirmation Signals**: Always seek confirmation before entering trades on breakouts. A breakout should be accompanied by a close above the level and increased volume to validate the move.\n",
    "context": {
      "keyTerms": [
        {
          "term": "False Breakout",
          "definition": "A price movement that breaches a support or resistance level but quickly reverses."
        },
        {
          "term": "Whipsaw",
          "definition": "Rapid price movements that can trigger stop-loss orders, leading to losses."
        }
      ],
      "whyThisMatters": "Recognizing traps in price action helps traders avoid costly mistakes and enhances overall trading discipline.",
      "realLifeExample": "During a volatile session, the USDJPY broke above 110.50 but quickly reversed, trapping traders who entered long positions, resulting in a loss of 15 pips.",
      "commonMistake": "Traders often enter trades on breakouts without waiting for confirmation, leading to losses from false signals.",
      "quickNote": "Identifying traps can prevent costly trading mistakes.",
      "mentorText": "Stay alert for false breakouts. If price moves past a level but quickly retreats, it’s a trap. Always wait for confirmation before acting.",
      "mentorAnalogy": "Think of trading traps like quicksand. It may look solid, but stepping in can pull you under if you’re not careful."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Implementing Risk Management with Live Data",
    "label": "Core Track",
    "body": "### Core Scenario: Adapting Risk Management in Real-Time\nEffective risk management is essential for sustaining trading success, particularly when analyzing live price action. This card teaches **how to adjust risk strategies based on real-time data**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on current volatility. If the ATR (Average True Range) of the AUDCAD is 25 pips, consider reducing position size to maintain a consistent risk level per trade.\n* **Real-Time Stop-Loss Adjustments**: Modify stop-loss levels based on live candle formations. If a bullish candle closes above a key resistance level, consider moving the stop-loss to breakeven to protect profits.\n* **Risk-Reward Ratio Reevaluation**: Continuously assess the risk-reward ratio as new price action unfolds. If the price of NZDUSD approaches a target with diminishing momentum, reassess the exit strategy to secure profits.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting position sizes based on current market conditions and volatility."
        },
        {
          "term": "ATR (Average True Range)",
          "definition": "A measure of market volatility based on the range of price movements."
        }
      ],
      "whyThisMatters": "Adapting risk management strategies in real-time enhances capital preservation and trading longevity.",
      "realLifeExample": "While trading the S&P 500, a trader noticed an ATR of 30 points, prompting them to reduce their position size to maintain a risk of 1% per trade.",
      "commonMistake": "Traders often fail to adjust stop-loss levels in response to changing market conditions, leading to larger-than-expected losses.",
      "quickNote": "Real-time data is crucial for effective risk management.",
      "mentorText": "Always be ready to adjust your risk parameters as the market changes. If volatility increases, reduce your position size to stay within your risk tolerance.",
      "mentorAnalogy": "Think of risk management like a pilot adjusting altitude based on weather conditions. You must be prepared to change your approach to ensure a safe landing."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Executing Trades Based on Live Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Real-Time Trade Execution\nExecuting trades based on live price action requires a systematic approach to analyzing candle formations and order flow. This card outlines **the process for making timely trading decisions using real-time data**.\n\n* **Candle Sequence Analysis**: Identify the last three candles' formations. Look for patterns such as bullish or bearish engulfing, pin bars, or dojis that signal potential reversals or continuations.\n* **Order Flow Confirmation**: Monitor the volume and speed of price movements. Confirm that the order flow aligns with your analysis; for example, a bullish engulfing candle should be accompanied by increasing buy volume.\n* **Execution Timing**: Enter trades only when price action confirms your analysis within a defined time frame (e.g., within 5 minutes of identifying a setup). Avoid hesitation; execute orders promptly to capitalize on momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Sequence",
          "definition": "A series of consecutive price bars that provide insight into market sentiment."
        },
        {
          "term": "Order Flow",
          "definition": "The net buying and selling pressure in the market at a given time."
        }
      ],
      "whyThisMatters": "Timely execution based on live price action can significantly enhance trade success rates and minimize slippage.",
      "realLifeExample": "During the London session, EURUSD shows a bullish engulfing candle at 1.0850 with a volume spike. Executing a buy order at 1.0855 within 3 minutes captures the upward momentum.",
      "commonMistake": "Traders often wait too long to execute trades after identifying a setup, leading to missed opportunities.",
      "quickNote": "Timely execution hinges on real-time analysis of candle formations and order flow.",
      "mentorText": "When you see a bullish engulfing candle, act quickly. If the volume supports it, don’t hesitate. Execute your trade and manage your risk.",
      "mentorAnalogy": "Think of a surgeon who must make split-second decisions during an operation. Just as they rely on real-time data from monitors, you must act on live price action to ensure successful trades."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Post-Trade Analysis of Live Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Analyzing Completed Trades\nPost-trade analysis is essential for refining trading strategies based on live price action. This card details **how to systematically evaluate trades after execution**.\n\n* **Trade Review Framework**: Document each trade's entry and exit points, along with the corresponding candle formations and order flow at the time of execution. Assess whether the initial analysis was accurate.\n* **Outcome Correlation**: Analyze the relationship between the live price action observed during the trade and the final outcome. For example, did a reversal candle appear before a loss, indicating a need for earlier exit strategies?\n* **Strategy Adjustment**: Based on your findings, adjust your trading strategy. If certain candle patterns consistently lead to losses, consider modifying your entry criteria or risk management approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Review",
          "definition": "The process of evaluating a completed trade to identify strengths and weaknesses."
        },
        {
          "term": "Outcome Correlation",
          "definition": "The relationship between the trade's analysis and its final result."
        }
      ],
      "whyThisMatters": "Conducting thorough post-trade analysis allows traders to learn from their experiences and improve future performance.",
      "realLifeExample": "After a trade on GBPJPY resulted in a loss, reviewing the price action revealed a bearish pin bar formed just before the exit. Adjusting future entries to account for this pattern could prevent similar losses.",
      "commonMistake": "Traders often skip post-trade analysis, missing valuable insights that could enhance their strategies.",
      "quickNote": "Post-trade analysis is critical for continuous improvement in trading performance.",
      "mentorText": "After each trade, take a moment to reflect. What did the price action tell you? Use that knowledge to refine your approach for next time.",
      "mentorAnalogy": "Just as an athlete reviews game footage to improve performance, you must analyze your trades to identify what works and what doesn’t."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Adapting Strategies to Live Market Conditions",
    "label": "Core Track",
    "body": "### Core Scenario: Dynamic Strategy Adjustment\nAdapting trading strategies in real-time is crucial for success in volatile markets. This card outlines **the process for modifying strategies based on live price action**.\n\n* **Market Condition Assessment**: Continuously evaluate the current market conditions, including volatility and trend strength. Use indicators like Average True Range (ATR) to gauge volatility changes and adjust your strategy accordingly.\n* **Candle Pattern Recognition**: Identify significant candle patterns that emerge during trading sessions. For instance, if a series of lower highs and lower lows appear, consider shifting from a bullish to a bearish strategy.\n* **Flexible Risk Management**: Adjust position sizes and stop-loss levels based on evolving market conditions. For example, in a high-volatility environment, tighten stop-loss levels to protect gains while allowing for potential fluctuations.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Condition Assessment",
          "definition": "The process of evaluating current market dynamics to inform trading decisions."
        },
        {
          "term": "Candle Pattern Recognition",
          "definition": "Identifying specific formations in price action that indicate potential market direction."
        }
      ],
      "whyThisMatters": "Adapting strategies in real-time allows traders to remain responsive to market changes, enhancing overall performance.",
      "realLifeExample": "During a high-impact news release for USD, the price of AUDUSD shows increased volatility. Adjusting the strategy to reduce position size and tightening stops helps manage risk effectively.",
      "commonMistake": "Traders often stick to their original strategies despite changing market conditions, leading to unnecessary losses.",
      "quickNote": "Real-time adaptation of strategies is essential for navigating dynamic market conditions.",
      "mentorText": "Stay alert to market changes. If the conditions shift, don’t hesitate to adapt your strategy. Flexibility is key to survival in trading.",
      "mentorAnalogy": "An architect must adapt building plans based on site conditions. Similarly, you must adjust your trading strategies to align with the current market landscape."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Reading Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Managing Psychological Influences\nPsychological factors significantly impact how traders interpret live price action. This card explores **the methods for mitigating emotional biases during trading**.\n\n* **Emotional Awareness**: Recognize personal emotional triggers that may distort price action interpretation. For example, fear of loss can lead to premature exits, while overconfidence may result in reckless entries.\n* **Structured Decision-Making**: Implement a structured decision-making process to counteract emotional responses. Use a checklist to evaluate trades based on objective criteria rather than emotional impulses.\n* **Mindfulness Techniques**: Incorporate mindfulness practices to enhance focus and reduce anxiety. Techniques such as deep breathing or visualization can help maintain composure during high-pressure trading situations.",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Awareness",
          "definition": "The ability to recognize and understand one's emotional responses to trading situations."
        },
        {
          "term": "Structured Decision-Making",
          "definition": "A systematic approach to making trading decisions based on objective criteria."
        }
      ],
      "whyThisMatters": "Managing psychological factors is crucial for maintaining objectivity and improving trading outcomes.",
      "realLifeExample": "After experiencing a series of losses, a trader feels anxious about entering new trades. By practicing deep breathing and sticking to a structured checklist, they regain composure and make informed decisions.",
      "commonMistake": "Traders often allow emotions to dictate their trading decisions, leading to inconsistent results.",
      "quickNote": "Awareness and management of psychological factors are essential for effective price action interpretation.",
      "mentorText": "Stay calm and collected. Recognize when emotions are influencing your decisions, and rely on your structured process to guide you.",
      "mentorAnalogy": "A pilot must remain calm and focused during turbulence. Similarly, you must manage your emotions to navigate the challenges of trading effectively."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Practical Application of Live Price Action Analysis",
    "label": "Core Track",
    "body": "### Core Scenario: Engaging with Live Price Action\nInterpreting live price action requires active engagement and practical application of theoretical concepts. This card focuses on **simulating live trading scenarios to enhance real-time analysis skills**.\n\n* **Candle Pattern Recognition**: Identify key candle formations such as pin bars, engulfing patterns, and dojis in real-time. Assess their implications on market sentiment and potential reversals.\n* **Order Flow Dynamics**: Analyze the order flow by observing volume spikes and price movement. Determine whether buyers or sellers are in control based on the intensity of price action.\n* **Scenario Simulation**: Participate in simulated trading sessions where you apply learned concepts to live charts. Document your interpretations and outcomes to refine your analytical skills.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Patterns",
          "definition": "Visual formations on price charts that indicate potential market movements."
        },
        {
          "term": "Order Flow",
          "definition": "The net buying and selling pressure in the market at any given time."
        }
      ],
      "whyThisMatters": "Mastering live price action analysis enables traders to make informed decisions based on real-time market behavior, enhancing execution precision.",
      "realLifeExample": "During the London session, a trader observes a bullish engulfing pattern on the GBPUSD 5-minute chart at 1.3000, indicating strong buying interest as volume increases.",
      "commonMistake": "Failing to consider the context of candle formations, leading to misinterpretation of market signals.",
      "quickNote": "Engage actively with live price action to develop a robust analytical framework.",
      "mentorText": "In live sessions, focus on recognizing patterns as they form. Don't just watch; analyze how each candle interacts with the previous ones and what that means for market direction.",
      "mentorAnalogy": "Think of live price action analysis like a surgeon performing an operation. Each movement and reaction must be observed and interpreted in real-time to ensure successful outcomes."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "practice",
    "title": "Summary of Key Concepts in Live Price Action",
    "label": "Core Track",
    "body": "### Core Scenario: Consolidating Live Price Action Knowledge\nReinforcing the key concepts learned throughout the module is essential for effective trading execution. This card summarizes **the critical elements of live price action analysis**.\n\n* **Market Sentiment Indicators**: Recognize how different candle formations reflect market sentiment. Understand the implications of bullish vs. bearish patterns in context.\n* **Volume Analysis**: Assess the role of volume in confirming price movements. Higher volume on a breakout indicates stronger conviction in the move.\n* **Real-Time Decision Making**: Develop a framework for making quick decisions based on live price action. Establish criteria for entering and exiting trades based on observed patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        },
        {
          "term": "Volume Confirmation",
          "definition": "The validation of price movements through corresponding trading volume."
        }
      ],
      "whyThisMatters": "A solid grasp of key concepts allows traders to respond effectively to market changes, enhancing their adaptability and success rate.",
      "realLifeExample": "A trader notices a significant increase in volume during a breakout on the EURUSD at 1.1200, confirming the bullish sentiment and prompting an entry.",
      "commonMistake": "Overlooking the importance of volume in confirming price action, leading to premature trade decisions.",
      "quickNote": "Summarize key concepts regularly to reinforce understanding and application.",
      "mentorText": "Review your notes on candle formations and volume analysis. These are your tools for interpreting the market correctly and making informed decisions.",
      "mentorAnalogy": "Consider this like a pilot reviewing their flight checklist before takeoff. Each item is crucial for ensuring a safe and successful journey."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Which of the following is a key indicator of market sentiment in live price action analysis?",
      "options": [
        {
          "id": "0",
          "text": "Candle formations",
          "isCorrect": true,
          "feedback": "Candle formations provide insights into market sentiment, indicating bullish or bearish tendencies."
        },
        {
          "id": "1",
          "text": "Historical price data",
          "isCorrect": false,
          "feedback": "Historical data does not reflect current market sentiment and should not be used for immediate decisions."
        },
        {
          "id": "2",
          "text": "Economic news releases",
          "isCorrect": false,
          "feedback": "While important, economic news releases are not direct indicators of real-time price action."
        },
        {
          "id": "3",
          "text": "Trading volume from previous sessions",
          "isCorrect": false,
          "feedback": "Volume from previous sessions does not provide real-time insights into current market sentiment."
        }
      ]
    },
    "visualKey": "live-price-reader"
  },
  {
    "type": "summary",
    "title": "Integrating Price Action into the Live OS",
    "label": "Core Track",
    "body": "### Core Scenario: Advanced Execution of Live Price Action\nAchieving mastery in reading live price action is essential for executing trades with precision. This card emphasizes **the advanced application of concepts learned in this module**.\n\n* **Integrated Analysis**: Combine candle patterns, volume, and order flow to create a comprehensive market view. This holistic approach enhances decision-making accuracy.\n* **Adaptive Strategies**: Develop adaptive trading strategies that respond to real-time price movements. Adjust entry and exit points based on live analysis rather than static plans.\n* **Performance Review**: Regularly assess your execution based on live price action analysis. Identify patterns in your decision-making process to improve future performance.",
    "context": {
      "keyTerms": [
        {
          "term": "Integrated Analysis",
          "definition": "The combination of multiple analytical methods to form a comprehensive market view."
        },
        {
          "term": "Adaptive Trading Strategies",
          "definition": "Flexible strategies that adjust based on real-time market conditions."
        }
      ],
      "whyThisMatters": "Advanced execution skills allow traders to capitalize on market opportunities as they arise, increasing profitability and reducing risk.",
      "realLifeExample": "During a volatile session, a trader observes a series of bullish candles on the AUDJPY, adjusting their entry point to 85.50 based on increasing volume and order flow.",
      "commonMistake": "Relying solely on static strategies without adapting to live market conditions, leading to missed opportunities.",
      "quickNote": "Mastery in live price action execution requires continuous adaptation and review.",
      "mentorText": "Focus on integrating all aspects of your analysis. The market is dynamic, and your strategies must evolve with it to maintain an edge.",
      "mentorAnalogy": "Think of this process like a conductor leading an orchestra. Each musician must adapt to the tempo and dynamics of the performance to create a harmonious outcome."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  }
];
