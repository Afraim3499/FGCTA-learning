import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Swing Highs and Lows",
    "label": "Core Track",
    "body": "### Market Structure: Swing Highs and Lows\nSwing highs and lows are pivotal in defining market structure. This card outlines **how to identify these critical price points**.\n\n* **Swing High Identification**: A swing high is formed when a price peak is followed by a decline, requiring at least two lower highs on either side. Confirm this by observing a price movement that exceeds the previous high by a minimum of 1%.\n* **Swing Low Identification**: A swing low occurs when a price trough is followed by an increase, necessitating at least two higher lows on either side. Ensure the price drop is at least 1% below the preceding low to validate the swing.\n* **Contextual Importance**: Recognizing these swings allows traders to map out potential support and resistance levels, which are essential for strategic decision-making.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A price peak followed by lower highs on both sides."
        },
        {
          "term": "Swing Low",
          "definition": "A price trough followed by higher lows on both sides."
        }
      ],
      "whyThisMatters": "Identifying swing highs and lows is fundamental for establishing market structure, which informs entry and exit strategies.",
      "realLifeExample": "On the EURUSD chart, a swing high formed at 1.2000 on January 15, followed by a drop to 1.1950, indicates a potential resistance level.",
      "commonMistake": "Traders often misidentify swings by not waiting for confirmation, leading to premature entries.",
      "quickNote": "Swing highs and lows define market structure and guide trading decisions.",
      "mentorText": "When you spot a swing high, think of it as a mountain peak. If prices fall after reaching that peak, it signals potential resistance. Wait for confirmation before acting.",
      "mentorAnalogy": "Identifying swing highs and lows is like a pilot determining altitude; you need clear markers to avoid turbulence and ensure a smooth flight path."
    },
    "taskData": null,
    "visualKey": "structure-part1-intro"
  },
  {
    "type": "concept",
    "title": "Validation Rules for Protected Swing Highs and Lows",
    "label": "Core Track",
    "body": "### Market Structure: Protected Swings\nProtected swing highs and lows are essential for confirming market structure integrity. This card explains **the criteria for validating these swings**.\n\n* **Protected Swing High Criteria**: A swing high is protected if the subsequent price action does not breach the swing high by more than 1% before forming a new swing low. This indicates strong selling pressure.\n* **Protected Swing Low Criteria**: A swing low is protected if the following price movement does not exceed the swing low by more than 1% before establishing a new swing high. This reflects robust buying interest.\n* **Market Condition Consideration**: Validate swings in varying market conditions; during high volatility, adjust your thresholds to account for potential false breaks.",
    "context": {
      "keyTerms": [
        {
          "term": "Protected Swing High",
          "definition": "A swing high that remains unbroken by subsequent price action."
        },
        {
          "term": "Protected Swing Low",
          "definition": "A swing low that remains unbroken by subsequent price action."
        }
      ],
      "whyThisMatters": "Understanding protected swings helps traders differentiate between valid market structure and false signals.",
      "realLifeExample": "On the GBPUSD, a swing high at 1.3500 remained intact with no breach before a new swing low formed at 1.3400, confirming its protection.",
      "commonMistake": "Traders often misinterpret swings as protected without confirming price action, leading to unreliable setups.",
      "quickNote": "Protected swings confirm market structure integrity and inform trading decisions.",
      "mentorText": "Think of protected swings as fortresses. If the price doesn't breach these levels, they stand strong, guiding your trading strategy.",
      "mentorAnalogy": "Validating protected swings is akin to a security system; it ensures that only verified signals trigger your trading actions."
    },
    "taskData": null,
    "visualKey": "protected-swings"
  },
  {
    "type": "concept",
    "title": "Metrics for Swing Confirmation",
    "label": "Core Track",
    "body": "### Market Structure: Swing Confirmation Metrics\nMetrics are critical in confirming swing highs and lows. This card details **the specific metrics to apply in real-time trading**.\n\n* **Volume Analysis**: Confirm swings with volume spikes; a swing high should ideally coincide with increased selling volume, while a swing low should align with heightened buying volume, indicating market conviction.\n* **Relative Strength Index (RSI)**: Use RSI readings above 70 to confirm a swing high and below 30 for a swing low. This helps assess overbought or oversold conditions, reinforcing swing validity.\n* **Moving Average Convergence Divergence (MACD)**: Monitor MACD crossovers; a bearish crossover at a swing high signals potential reversal, while a bullish crossover at a swing low suggests upward momentum.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Analysis",
          "definition": "Examining trading volume to confirm price movements."
        },
        {
          "term": "RSI",
          "definition": "A momentum oscillator measuring the speed and change of price movements."
        },
        {
          "term": "MACD",
          "definition": "A trend-following momentum indicator that shows the relationship between two moving averages."
        }
      ],
      "whyThisMatters": "Employing metrics enhances the reliability of swing confirmations, leading to more informed trading decisions.",
      "realLifeExample": "On the AUDJPY, a swing high at 85.50 was confirmed by a volume surge of 150% and an RSI reading of 75, indicating strong selling pressure.",
      "commonMistake": "Relying solely on price action without incorporating metrics can lead to false confirmations.",
      "quickNote": "Metrics enhance the accuracy of swing confirmations, guiding trading strategies.",
      "mentorText": "Metrics are your analytical tools. Just like a mechanic checks engine diagnostics, you need to analyze volume and indicators to confirm your swings.",
      "mentorAnalogy": "Using metrics for swing confirmation is like a chef tasting a dish; you need to ensure every ingredient is balanced before serving."
    },
    "taskData": null,
    "visualKey": "swing-validation"
  },
  {
    "type": "concept",
    "title": "Distinguishing Breaks of Structure from Liquidity Sweeps",
    "label": "Core Track",
    "body": "### Market Structure: Breaks vs. Liquidity Sweeps\nUnderstanding the distinction between structural breaks and liquidity sweeps is vital. This card clarifies **how to identify genuine market shifts versus false moves**.\n\n* **Identifying Structural Breaks**: A structural break occurs when price decisively breaches a swing high or low with sustained momentum, typically accompanied by increased volume. Look for a 2% move beyond the swing point with a closing candle confirming the breach.\n* **Recognizing Liquidity Sweeps**: Liquidity sweeps often involve rapid price movements that briefly breach swing points but quickly reverse. These are characterized by low volume and short-lived price action, often retracing within the same session.\n* **Confirmation Techniques**: Use candlestick patterns and volume analysis to differentiate; a strong bearish engulfing pattern at a swing high indicates a structural break, while a quick spike followed by a reversal suggests a liquidity sweep.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Break",
          "definition": "A decisive breach of a swing high or low indicating a potential trend change."
        },
        {
          "term": "Liquidity Sweep",
          "definition": "A rapid price movement that temporarily breaches a swing point without sustaining momentum."
        }
      ],
      "whyThisMatters": "Distinguishing between these two phenomena is crucial for avoiding false signals and making informed trading decisions.",
      "realLifeExample": "On the USDCHF, a structural break occurred when price closed above 0.9500 with a 3% move and high volume, while a liquidity sweep was seen when price briefly touched 0.9400 before retracing.",
      "commonMistake": "Traders often misinterpret liquidity sweeps as structural breaks, leading to premature entries.",
      "quickNote": "Understanding breaks versus sweeps prevents false signals and enhances trading accuracy.",
      "mentorText": "When you see a price spike, assess the volume and candle closure. A true break will show strength, while a sweep will quickly reverse.",
      "mentorAnalogy": "Distinguishing breaks from sweeps is like a detective solving a case; you need to gather evidence and analyze the scene before drawing conclusions."
    },
    "taskData": null,
    "visualKey": "market-structure-breaks"
  },
  {
    "type": "concept",
    "title": "Strategies for Confirming Swing Points",
    "label": "Core Track",
    "body": "### Market Structure: Strategies for Confirming Swing Points\nAdvanced confirmation of swing highs and lows is essential for validating market structure. This card explores **volume analysis and price action patterns** as tools for confirming swing points.\n\n* **Volume Spike Confirmation**: A swing high is confirmed if it coincides with a volume spike exceeding the 20-period average by at least 50%. For instance, if a swing high occurs at $1.2000 on EURUSD with a volume of 1,500 contracts, while the average is 1,000, this validates the swing.\n* **Price Action Patterns**: Look for reversal candlestick patterns, such as pin bars or engulfing candles, at swing points. A pin bar forming at a swing low of $1.1800 on GBPUSD indicates potential support, reinforcing the swing's validity.\n* **Multi-Timeframe Analysis**: Confirm swing points by analyzing higher timeframes. If a swing high on the 1-hour chart aligns with a resistance level on the daily chart, this adds credibility to the swing point's strength.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume that can confirm price movements."
        },
        {
          "term": "Price Action Patterns",
          "definition": "Specific candlestick formations that indicate potential market reversals."
        }
      ],
      "whyThisMatters": "Accurate confirmation of swing points enhances the reliability of market structure analysis, reducing the risk of false entries.",
      "realLifeExample": "On March 15, 2023, EURUSD formed a swing high at $1.2000 with a volume spike to 1,600 contracts, confirming the swing against the average of 1,000.",
      "commonMistake": "Traders often overlook volume analysis, leading to premature conclusions about swing validity.",
      "quickNote": "Volume spikes and price action patterns are critical for confirming swing points.",
      "mentorText": "When assessing swing points, always check for volume spikes. If you see a high volume at a swing high, take it seriously; it indicates strong interest at that level.",
      "mentorAnalogy": "Think of confirming swing points like an engineer verifying the integrity of a bridge. Just as engineers check for structural soundness before allowing traffic, traders must validate swing points before acting."
    },
    "taskData": null,
    "visualKey": "structure-part1-debrief"
  },
  {
    "type": "concept",
    "title": "Identifying Liquidity Sweeps in Market Structure",
    "label": "Core Track",
    "body": "### Market Structure: Identifying Liquidity Sweeps\nRecognizing liquidity sweeps is crucial for avoiding false breakouts that can mislead traders. This card details **how to identify liquidity sweeps** within market structure.\n\n* **Order Book Analysis**: Monitor the order book for significant buy or sell orders that may indicate liquidity sweeps. A sudden increase in sell orders at a swing high can signal a liquidity sweep, suggesting a potential reversal.\n* **Price Movement Patterns**: Look for rapid price movements that breach established swing highs or lows without follow-through. For example, if USDJPY spikes above 135.00 but quickly retraces, this may indicate a liquidity sweep.\n* **Volume Confirmation**: A liquidity sweep is often accompanied by a volume increase that is inconsistent with prior price action. If a swing low at $130.00 on AUDUSD is breached with a volume of 2,000 contracts, but the average is only 1,000, this indicates a potential liquidity sweep.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Sweep",
          "definition": "A rapid price movement that clears out stop orders, often leading to false breakouts."
        },
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific asset, providing insight into market depth."
        }
      ],
      "whyThisMatters": "Understanding liquidity sweeps helps traders avoid entering positions based on false breakouts, improving trade accuracy.",
      "realLifeExample": "On April 10, 2023, GBPUSD spiked to 1.2500, breaching a swing high with a volume of 3,000 contracts, only to retrace back to 1.2400, indicating a liquidity sweep.",
      "commonMistake": "Traders often misinterpret liquidity sweeps as genuine breakouts, leading to losses.",
      "quickNote": "Liquidity sweeps can signal false breakouts; always analyze volume and price action.",
      "mentorText": "When you see a price spike that quickly reverses, think twice. It might be a liquidity sweep designed to trap traders.",
      "mentorAnalogy": "Identifying liquidity sweeps is like a detective spotting a staged crime scene. Just as a detective looks for inconsistencies, traders must analyze price movements for signs of manipulation."
    },
    "taskData": null,
    "visualKey": "structure-part1-intro"
  },
  {
    "type": "concept",
    "title": "Awareness of Swing Traps and Their Impact",
    "label": "Core Track",
    "body": "### Market Structure: Awareness of Swing Traps\nSwing traps can significantly distort market structure perception. This card focuses on **identifying swing traps** and understanding their implications for trading decisions.\n\n* **Characteristics of Swing Traps**: A swing trap typically features a false breakout followed by a rapid reversal. For instance, if a swing high at $1.3000 on EURUSD is breached, only to fall back below $1.2950, this indicates a potential trap.\n* **Volume Divergence**: Observe volume patterns during suspected swing traps. If a breakout occurs with lower volume than the preceding swings, it may indicate a lack of conviction, signaling a trap.\n* **Market Sentiment Analysis**: Utilize sentiment indicators to gauge trader positioning. If sentiment is overwhelmingly bullish but price fails to sustain a breakout above a swing high, this could indicate a swing trap.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing Trap",
          "definition": "A false breakout that leads traders into losing positions."
        },
        {
          "term": "Volume Divergence",
          "definition": "A situation where price moves in one direction while volume decreases, indicating a potential reversal."
        }
      ],
      "whyThisMatters": "Awareness of swing traps allows traders to avoid entering positions based on misleading price movements.",
      "realLifeExample": "On February 20, 2023, USDCHF broke above 0.9500 with a surge in price but retraced to 0.9400, indicating a swing trap.",
      "commonMistake": "Traders often enter positions during false breakouts without confirming market conditions.",
      "quickNote": "Identifying swing traps is essential for protecting against false breakouts.",
      "mentorText": "Always be skeptical of breakouts. If the price moves sharply but the volume doesn't back it up, it could be a trap waiting to ensnare you.",
      "mentorAnalogy": "Identifying swing traps is like a pilot recognizing turbulence before landing. Just as pilots must adjust their approach, traders must remain vigilant against deceptive price movements."
    },
    "taskData": null,
    "visualKey": "protected-swings"
  },
  {
    "type": "concept",
    "title": "Synthesis of Swing Structure Analysis",
    "label": "Core Track",
    "body": "### Market Structure: Synthesis of Swing Structure Analysis\nSynthesizing information from various analyses enhances understanding of market structure. This card focuses on **integrating insights from swing analysis** to improve trading strategies.\n\n* **Combining Indicators**: Use multiple indicators, such as moving averages and RSI, to confirm swing points. For example, if a swing low at $1.1500 on AUDUSD aligns with a 50-period moving average and an RSI reading below 30, this strengthens the analysis.\n* **Contextualizing Price Action**: Analyze price action in the context of recent economic data releases. If a swing high occurs after a positive NFP report, it may indicate stronger market sentiment.\n* **Developing a Structured Approach**: Create a checklist for analyzing swing points that includes volume, price action patterns, and economic context. This structured approach ensures comprehensive analysis before making trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Averages",
          "definition": "A technical indicator that smooths price data to identify trends."
        },
        {
          "term": "RSI",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "A comprehensive analysis of swing structures leads to more informed trading decisions and improved risk management.",
      "realLifeExample": "On January 5, 2023, EURUSD formed a swing low at $1.1500, coinciding with a 50-period moving average and an RSI of 28, indicating a strong buying opportunity.",
      "commonMistake": "Traders often rely on a single indicator, missing critical context that could influence their analysis.",
      "quickNote": "Integrating multiple analyses enhances the accuracy of swing structure assessments.",
      "mentorText": "When analyzing swings, don’t just rely on one indicator. Combine insights to create a fuller picture of market conditions.",
      "mentorAnalogy": "Synthesis of swing structure analysis is like an architect reviewing multiple blueprints before construction. Just as architects ensure all elements align, traders must integrate various analyses for sound decision-making."
    },
    "taskData": null,
    "visualKey": "swing-validation"
  },
  {
    "type": "concept",
    "title": "Tools for Swing Confirmation",
    "label": "Core Track",
    "body": "### Market Structure: Tools for Swing Confirmation\nSwing highs and lows can be validated using various technical tools and indicators. This card outlines **essential tools that enhance swing confirmation** for more accurate market analysis.\n\n* **Fibonacci Retracement Levels**: Utilize Fibonacci retracement levels to identify potential reversal zones. A swing high followed by a retracement to the 61.8% level often indicates a strong support or resistance area.\n* **Moving Averages**: Apply a combination of short-term and long-term moving averages to confirm swing points. A crossover of the 50-period moving average above the 200-period can validate a swing low.\n* **Volume Analysis**: Monitor volume spikes at swing highs and lows. A significant increase in volume during a swing high can indicate strong selling interest, confirming the swing's validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Fibonacci Retracement",
          "definition": "A tool used to identify potential reversal levels based on the Fibonacci sequence."
        },
        {
          "term": "Moving Averages",
          "definition": "A statistical calculation used to analyze data points by creating averages over specific periods."
        },
        {
          "term": "Volume Analysis",
          "definition": "The study of the amount of a security traded during a given timeframe."
        }
      ],
      "whyThisMatters": "Accurate swing confirmation is critical for establishing reliable entry and exit points, enhancing overall trading performance.",
      "realLifeExample": "On GBPUSD, a swing high at 1.4000 was confirmed by a Fibonacci retracement to 1.3800, coinciding with a volume spike of 150% during the retracement.",
      "commonMistake": "Traders often overlook volume analysis, leading to false confirmations of swing points.",
      "quickNote": "Utilize multiple tools for robust swing confirmation to enhance trade accuracy.",
      "mentorText": "When confirming swings, always cross-check with volume and key levels. Think of it as ensuring your foundation is solid before building a house.",
      "mentorAnalogy": "Just as an architect verifies structural integrity with multiple measurements before construction, traders must confirm swing points with various indicators."
    },
    "taskData": null,
    "visualKey": "market-structure-breaks"
  },
  {
    "type": "concept",
    "title": "Implications of Market Structure on Trading Decisions",
    "label": "Core Track",
    "body": "### Market Structure: Implications on Trading Decisions\nUnderstanding market structure is essential for informed trading decisions. This card discusses **how swing analysis impacts risk management and strategy formulation**.\n\n* **Trend Identification**: Recognizing swing highs and lows aids in identifying market trends. An uptrend is confirmed when higher highs and higher lows are established, guiding bullish strategies.\n* **Risk Management**: Set stop-loss orders below swing lows in an uptrend to protect capital. This strategy ensures that trades are exited before significant losses occur if the market reverses.\n* **Trade Entry Points**: Use confirmed swing lows as potential entry points for long positions. Entering near these levels increases the probability of a successful trade based on established market structure.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Identification",
          "definition": "The process of determining the general direction of the market based on price movements."
        },
        {
          "term": "Risk Management",
          "definition": "Strategies employed to minimize potential losses in trading."
        },
        {
          "term": "Trade Entry Points",
          "definition": "Specific price levels at which a trader decides to enter a position."
        }
      ],
      "whyThisMatters": "A solid grasp of market structure allows traders to make strategic decisions that align with prevailing market conditions, enhancing profitability.",
      "realLifeExample": "In a bullish trend on SPY, a swing low at $400 provided a strategic entry point, with a stop-loss set at $395, effectively managing risk.",
      "commonMistake": "Failing to adjust stop-loss levels according to market structure can lead to unnecessary losses.",
      "quickNote": "Market structure directly influences your trading strategy and risk management techniques.",
      "mentorText": "Always align your trades with the market structure. Think of it as sailing with the wind rather than against it.",
      "mentorAnalogy": "Like a seasoned sailor who adjusts their sails based on wind direction, traders must adapt their strategies to the prevailing market structure."
    },
    "taskData": null,
    "visualKey": "structure-part1-debrief"
  },
  {
    "type": "concept",
    "title": "Psychological Aspects of Swing Highs and Lows",
    "label": "Core Track",
    "body": "### Market Structure: Psychological Aspects of Swings\nMarket sentiment plays a crucial role in the formation of swing highs and lows. This card explores **the psychological factors that influence these critical points**.\n\n* **Fear and Greed**: Swing highs often occur at points of extreme greed, while swing lows may form during periods of fear. Recognizing these emotions can provide insight into potential reversals.\n* **Market Sentiment Indicators**: Utilize sentiment indicators such as the Fear & Greed Index to gauge market psychology. A high greed reading may signal an impending swing high.\n* **Behavioral Patterns**: Observe historical price patterns around swing points. Repeated behaviors, such as rapid sell-offs at previous swing highs, can indicate psychological resistance levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear and Greed",
          "definition": "Emotions that drive market participants' decisions, often leading to extreme price movements."
        },
        {
          "term": "Market Sentiment Indicators",
          "definition": "Tools that measure the overall attitude of investors toward a particular security or market."
        },
        {
          "term": "Behavioral Patterns",
          "definition": "Recurring tendencies in market behavior that can indicate future price movements."
        }
      ],
      "whyThisMatters": "Understanding the psychological underpinnings of market movements allows traders to anticipate potential reversals and adjust strategies accordingly.",
      "realLifeExample": "During a rally, the S&P 500 reached a swing high at 4,500, coinciding with a Fear & Greed Index reading of 90, indicating extreme greed and potential reversal.",
      "commonMistake": "Ignoring psychological factors can lead to misinterpretation of market signals and poor trading decisions.",
      "quickNote": "Market psychology is a critical component in identifying swing highs and lows.",
      "mentorText": "Recognize that market movements are driven by human emotions. Stay aware of the psychological landscape to better predict swings.",
      "mentorAnalogy": "Just as a psychologist analyzes behavior patterns to predict actions, traders must interpret market sentiment to forecast price movements."
    },
    "taskData": null,
    "visualKey": "structure-part1-intro"
  },
  {
    "type": "concept",
    "title": "Evolution of Swing Structure Over Time",
    "label": "Core Track",
    "body": "### Market Structure: Evolution of Swing Structure\nSwing structures evolve across different time frames, impacting trading strategies. This card examines **how to adapt analysis based on time frame variations**.\n\n* **Time Frame Analysis**: Higher time frames (e.g., daily, weekly) provide a broader perspective on swing structure, while lower time frames (e.g., 5-minute, 15-minute) reveal more immediate price action. Adapt strategies accordingly based on the time frame used.\n* **Swing Structure Changes**: Be aware that swing highs and lows can shift as new data emerges. A swing high on a 1-hour chart may become a swing low on a daily chart, necessitating strategy adjustments.\n* **Multi-Time Frame Confluence**: Look for alignment between different time frames. A swing low on the 4-hour chart that coincides with a swing high on the daily chart can provide stronger confirmation for trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Frame Analysis",
          "definition": "The examination of price movements over various periods to identify trends and patterns."
        },
        {
          "term": "Swing Structure Changes",
          "definition": "The dynamic nature of swing highs and lows as market conditions evolve."
        },
        {
          "term": "Multi-Time Frame Confluence",
          "definition": "The occurrence of similar signals across different time frames, enhancing trade validity."
        }
      ],
      "whyThisMatters": "Adapting to the evolution of swing structure allows traders to refine their strategies and improve trade accuracy across varying market conditions.",
      "realLifeExample": "On EURUSD, a swing high at 1.2000 on the daily chart was later confirmed as a swing low on the 15-minute chart, indicating a shift in market sentiment.",
      "commonMistake": "Traders often fail to adjust their strategies when swing structures change across time frames, leading to missed opportunities.",
      "quickNote": "Monitor swing structure across time frames to enhance strategy adaptability.",
      "mentorText": "Stay flexible and adjust your analysis as market conditions evolve. Think of it as recalibrating your instruments during a flight.",
      "mentorAnalogy": "Like a pilot adjusting altitude based on changing weather conditions, traders must adapt their strategies to evolving market structures."
    },
    "taskData": null,
    "visualKey": "protected-swings"
  },
  {
    "type": "concept",
    "title": "Practical Application of Swing Analysis",
    "label": "Core Track",
    "body": "### Swing Analysis: Engaging with Practical Exercises\nSwing analysis is a critical skill for identifying market structure. This card focuses on **applying swing analysis techniques through targeted exercises**.\n\n* **Identifying Swing Points**: Mark swing highs and lows on a chart of GBPUSD during the London session. Look for at least three consecutive higher highs and higher lows to confirm an uptrend.\n* **Time Frame Consistency**: Use a 1-hour chart for identifying swings, then validate them on a 15-minute chart to ensure accuracy and alignment across time frames.\n* **Volume Confirmation**: Analyze volume spikes accompanying swing points; a swing high with a volume increase of 20% indicates stronger resistance than one with lower volume.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A peak in price action that indicates a potential reversal point."
        },
        {
          "term": "Swing Low",
          "definition": "A trough in price action that indicates a potential reversal point."
        }
      ],
      "whyThisMatters": "Mastering swing analysis allows traders to accurately map market structure and make informed decisions based on price action.",
      "realLifeExample": "During the GBPUSD London session, identify a swing high at 1.4000 followed by a swing low at 1.3950, confirming a bullish structure.",
      "commonMistake": "Failing to validate swing points across multiple time frames can lead to misinterpretation of market structure.",
      "quickNote": "Engage in practical exercises to reinforce swing analysis techniques.",
      "mentorText": "When you look at a chart, don't just see lines; see the story of price action. Identify those swing points as if you're mapping a route on a GPS.",
      "mentorAnalogy": "Think of swing analysis like a topographical map for a hiker; each peak and valley guides you on the safest path through the terrain."
    },
    "taskData": null,
    "visualKey": "swing-validation"
  },
  {
    "type": "practice",
    "title": "Summary of Market Structure Insights",
    "label": "Core Track",
    "body": "### Market Structure Insights: Key Takeaways\nUnderstanding market structure is essential for effective trading strategies. This card summarizes **the critical insights gained from analyzing swing highs and lows**.\n\n* **Trend Identification**: Recognizing the formation of higher highs and higher lows in instruments like EURUSD indicates a bullish trend, while lower highs and lower lows signify a bearish trend.\n* **Breakout Confirmation**: A breakout above a swing high should be confirmed with a close above that level on the daily chart, ideally accompanied by increased volume to validate the move.\n* **Retracement Levels**: Use Fibonacci retracement levels to identify potential reversal zones after a swing high or low, enhancing entry and exit strategies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout",
          "definition": "A price movement beyond a defined support or resistance level."
        },
        {
          "term": "Retracement",
          "definition": "A temporary reversal in the direction of a price trend."
        }
      ],
      "whyThisMatters": "Summarizing key insights reinforces the importance of swing analysis in establishing market structure, aiding in strategic decision-making.",
      "realLifeExample": "After identifying a swing high at 1.1500 on the EURUSD, a trader waits for a daily close above this level with a volume increase to confirm a breakout.",
      "commonMistake": "Overlooking volume confirmation can lead to false breakouts and ineffective trading decisions.",
      "quickNote": "Key insights from swing analysis are crucial for developing robust trading strategies.",
      "mentorText": "Remember, every swing high and low tells you something about market sentiment. Use these insights to navigate your trading decisions with precision.",
      "mentorAnalogy": "Consider market structure like a building's foundation; without a solid understanding of swings, your trading strategy lacks stability."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the best confirmation for a breakout above a swing high?",
      "options": [
        {
          "id": "0",
          "text": "A close above the swing high with increased volume.",
          "isCorrect": true,
          "feedback": "Correct. A close above the swing high with increased volume validates the breakout."
        },
        {
          "id": "1",
          "text": "A single price spike above the swing high.",
          "isCorrect": false,
          "feedback": "Incorrect. A single spike does not confirm a breakout without a closing price."
        },
        {
          "id": "2",
          "text": "A retracement back to the swing high level.",
          "isCorrect": false,
          "feedback": "Incorrect. A retracement does not confirm a breakout; it may indicate a reversal."
        },
        {
          "id": "3",
          "text": "Ignoring volume and focusing solely on price action.",
          "isCorrect": false,
          "feedback": "Incorrect. Volume is essential for confirming the strength of a breakout."
        }
      ]
    },
    "visualKey": "market-structure-breaks"
  },
  {
    "type": "summary",
    "title": "Core Track Summary: Market Structure Insights",
    "label": "Core Track",
    "body": "### Core Track Summary: Integrating Swing Analysis\nThis summary encapsulates the essential teachings on market structure through swing analysis. **Integration of swing highs and lows into trading strategies is paramount**.\n\n* **Establishing Structure**: Consistently identify swing highs and lows to define market structure, enabling better forecasting of potential price movements.\n* **Strategic Entry Points**: Use identified swing points to determine optimal entry and exit levels, enhancing risk management and trade execution.\n* **Continuous Validation**: Regularly validate swing points across multiple time frames to ensure alignment and accuracy in market analysis.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure",
          "definition": "The arrangement of price movements defined by swing highs and lows."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of market structure through swing analysis is vital for developing effective trading strategies.",
      "realLifeExample": "A trader identifies a series of swing lows on the AUDJPY, using them to set stop-loss orders below these levels for risk management.",
      "commonMistake": "Neglecting to adjust strategies based on evolving market structure can lead to significant trading losses.",
      "quickNote": "Integrate swing analysis into your trading strategies for enhanced decision-making.",
      "mentorText": "Think of swing analysis as your trading compass; it guides you through the complexities of market structure and helps you navigate with confidence.",
      "mentorAnalogy": "Like an architect designing a building, understanding market structure allows you to create a solid foundation for your trading strategy."
    },
    "taskData": null,
    "visualKey": "structure-part1-debrief"
  }
];
