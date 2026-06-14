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
  }
];
