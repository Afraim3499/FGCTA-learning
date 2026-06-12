import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Protected Order Blocks",
    "label": "Core Track",
    "body": "### Protected Order Blocks: Market Reversal Indicators\nProtected order blocks represent key areas where institutional buying or selling has occurred, often leading to potential market reversals. This card outlines **how to identify these blocks and their significance in market dynamics**.\n\n* **Identification Criteria**: Look for significant price consolidation followed by a strong breakout, indicating the presence of protected orders. These blocks are typically formed after a notable price movement, signaling institutional interest.\n* **Volume Confirmation**: Validate the presence of a protected order block by analyzing volume spikes during the breakout. A minimum 25% increase in volume compared to the preceding session strengthens the block's significance.\n* **Timeframe Relevance**: Focus on higher timeframes (H1 or H4) for identifying protected order blocks, as they provide a clearer picture of institutional activity and potential reversal zones.",
    "context": {
      "keyTerms": [
        {
          "term": "Protected Order Block",
          "definition": "A price level where significant buying or selling has occurred, indicating potential market reversals."
        }
      ],
      "whyThisMatters": "Recognizing protected order blocks is essential for anticipating market reversals and aligning with institutional trading behavior.",
      "realLifeExample": "On the EURUSD, a protected order block formed at 1.1000 after a consolidation period, followed by a breakout with a volume increase of 30% at 9:00 AM EST.",
      "commonMistake": "Traders often overlook the importance of volume confirmation when identifying protected order blocks.",
      "quickNote": "Protected order blocks signal potential market reversals based on institutional activity.",
      "mentorText": "When you spot a protected order block, think of it as a signal that institutions are ready to make a move. Pay attention to the volume; it tells you if they are serious.",
      "mentorAnalogy": "Identifying a protected order block is like an architect recognizing a structural support beam in a building; it indicates where the market is likely to pivot."
    },
    "taskData": null,
    "visualKey": "breaker-intro"
  },
  {
    "type": "concept",
    "title": "Mechanics of Sweeping Protected OBs",
    "label": "Core Track",
    "body": "### Sweeping Protected Order Blocks: Market Dynamics\nThe sweeping of protected order blocks occurs when price action breaks through these levels, often leading to significant shifts in market sentiment. This card details **the mechanics behind these sweeps and their implications for traders**.\n\n* **Market Forces at Play**: Sweeps typically occur due to a combination of stop-loss hunting and profit-taking by institutional traders. This creates a liquidity vacuum that drives price through the protected order block.\n* **Trader Behavior**: Watch for retail traders reacting to price movements at these levels, often leading to increased volatility. A sudden spike in retail selling can exacerbate the sweep, confirming the shift in market dynamics.\n* **Timing of Sweeps**: Sweeps are more likely to occur during high-impact news releases or market open sessions, such as the London or New York open, when liquidity is at its peak.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sweep",
          "definition": "The act of price breaking through a protected order block, often leading to a shift in market sentiment."
        }
      ],
      "whyThisMatters": "Understanding the mechanics of sweeps allows traders to anticipate potential shifts in market direction and adjust their strategies accordingly.",
      "realLifeExample": "During the London open, the GBPUSD swept through a protected order block at 1.2500, driven by a 40% increase in volume as traders reacted to a positive economic report.",
      "commonMistake": "Traders often misinterpret a sweep as a definitive trend reversal without considering the broader market context.",
      "quickNote": "Sweeping protected order blocks indicates a shift in market sentiment, often driven by institutional behavior.",
      "mentorText": "When a protected order block gets swept, it’s like a dam breaking; the market is ready to flow in a new direction. Be prepared for volatility.",
      "mentorAnalogy": "Think of a market sweep like a floodgate opening; it releases built-up pressure and can lead to rapid changes in the landscape."
    },
    "taskData": null,
    "visualKey": "breaker-mechanics"
  },
  {
    "type": "concept",
    "title": "Transforming OBs into Breakers",
    "label": "Core Track",
    "body": "### Order Blocks to Breaker Blocks: The Transformation Process\nWhen a protected order block is swept, it can transform into a breaker block, acting as a new support or resistance level. This card examines **the psychological and technical factors that contribute to this transformation**.\n\n* **Psychological Shift**: After a sweep, market participants often reassess their positions, leading to a shift in sentiment. The previous order block now serves as a reference point for traders, influencing their decision-making.\n* **Technical Confirmation**: A successful retest of the swept order block as a breaker block is confirmed by a price rejection or a bullish/bearish engulfing pattern. This indicates that the market respects the new support or resistance level.\n* **Volume Analysis**: Monitor volume during the retest phase; a decrease in volume compared to the initial sweep can signal weakening momentum, while an increase suggests strong institutional interest in the new breaker level.",
    "context": {
      "keyTerms": [
        {
          "term": "Breaker Block",
          "definition": "A former protected order block that has been swept and now acts as a new support or resistance level."
        }
      ],
      "whyThisMatters": "Recognizing the transformation of order blocks into breaker blocks is crucial for effective trade planning and risk management.",
      "realLifeExample": "After the EURUSD swept the order block at 1.1000, it retested this level at 1.1005 with a bullish engulfing pattern and 25% higher volume, confirming its new role as a support breaker.",
      "commonMistake": "Traders often enter positions prematurely after a sweep without waiting for confirmation of the breaker block's validity.",
      "quickNote": "Swept order blocks can become breaker blocks, indicating new market support or resistance.",
      "mentorText": "When you see an order block turn into a breaker, it’s a sign that the market has changed its mind. Wait for confirmation before acting.",
      "mentorAnalogy": "Transforming an order block into a breaker is like a bridge being rebuilt after a flood; it now serves a new purpose in the landscape."
    },
    "taskData": null,
    "visualKey": "ob-to-breaker"
  },
  {
    "type": "concept",
    "title": "Entry Strategies on Breaker Blocks",
    "label": "Core Track",
    "body": "### Trading Strategies Around Breaker Blocks\nEffective entry strategies around breaker blocks can enhance trading performance. This card outlines **how to identify optimal entry points based on market structure changes**.\n\n* **Entry Confirmation**: Wait for a clear price action signal, such as a pin bar or a breakout retest, before entering a trade at the breaker block. This reduces the risk of false breakouts.\n* **Risk Management**: Set stop-loss orders just below the breaker block for long positions or above for short positions. This protects against unexpected market movements while allowing for potential profit capture.\n* **Target Setting**: Establish profit targets based on the next significant support or resistance level. Use Fibonacci retracement levels or previous swing highs/lows to determine realistic target zones.",
    "context": {
      "keyTerms": [
        {
          "term": "Entry Strategy",
          "definition": "A plan for entering trades based on market conditions and technical analysis."
        }
      ],
      "whyThisMatters": "Implementing effective entry strategies around breaker blocks can significantly improve trade success rates and risk management.",
      "realLifeExample": "After the GBPUSD confirmed a breaker block at 1.2500 with a pin bar formation, a trader entered long at 1.2510, setting a stop-loss at 1.2490 and targeting 1.2550 based on previous swing highs.",
      "commonMistake": "Traders often enter trades too aggressively without waiting for confirmation signals, leading to increased risk of loss.",
      "quickNote": "Use confirmation signals and proper risk management when trading around breaker blocks.",
      "mentorText": "When trading around a breaker block, think of it as a launchpad; you need the right conditions to take off successfully. Wait for the signal.",
      "mentorAnalogy": "Entering a trade at a breaker block is like a pilot waiting for the green light before takeoff; timing and conditions are critical for a successful flight."
    },
    "taskData": null,
    "visualKey": "breaker-entry"
  },
  {
    "type": "concept",
    "title": "Debriefing on Breaker Block Trades",
    "label": "Core Track",
    "body": "### Breaker Block Trade Analysis: Debriefing Framework\nAnalyzing trades executed around breaker blocks is essential for refining strategies. This card outlines a structured approach to debriefing these trades.\n\n* **Outcome Assessment**: Evaluate the outcome of each trade by comparing the entry and exit points against the breaker block's performance. Identify whether the block held as support or resistance and the subsequent price action.\n* **Trade Rationale Review**: Document the rationale behind each trade, including the market conditions and narrative shifts that influenced the decision. This helps in understanding the effectiveness of your analysis.\n* **Adjustment Identification**: After assessing outcomes, identify specific areas for adjustment in your strategy. Focus on aspects such as entry timing, stop-loss placement, and risk-reward ratios based on the debrief findings.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "The process of analyzing trade outcomes to improve future trading strategies."
        }
      ],
      "whyThisMatters": "Systematic debriefing enhances your ability to adapt and refine trading strategies based on empirical evidence.",
      "realLifeExample": "After executing a long position on GBPUSD at a breaker block on the 1-hour chart, the price retraced 30 pips before rallying 50 pips. The debrief revealed that entry timing could have been improved by waiting for a confirmed close above the block.",
      "commonMistake": "Traders often neglect to document their rationale, which leads to repetitive mistakes in future trades.",
      "quickNote": "A structured debrief is essential for continuous improvement in trading performance.",
      "mentorText": "When you debrief, focus on what worked and what didn’t. Look at the conditions surrounding your trades and ask yourself if you followed your plan or deviated due to emotions.",
      "mentorAnalogy": "Think of debriefing like a post-flight analysis in aviation. Pilots review their flight paths and decisions to ensure safety and efficiency in future flights."
    },
    "taskData": null,
    "visualKey": "breaker-debrief"
  },
  {
    "type": "concept",
    "title": "Identifying Narrative Shifts",
    "label": "Core Track",
    "body": "### Market Dynamics: Identifying Narrative Shifts\nRecognizing narrative shifts is critical for anticipating order block sweeps. This card focuses on the mechanics of identifying these shifts in market sentiment.\n\n* **Volume Spike Analysis**: Monitor volume spikes that accompany price movements near known order blocks. A significant increase in volume often indicates a shift in market sentiment that can lead to a sweep.\n* **News Event Correlation**: Correlate narrative shifts with economic news releases. For instance, if the USD experiences a narrative shift post-NFP data, it may lead to a sweep of USDJPY order blocks.\n* **Price Action Patterns**: Look for specific price action patterns, such as engulfing candles or pin bars, that signal a potential shift. These patterns often precede significant sweeps of protected order blocks.",
    "context": {
      "keyTerms": [
        {
          "term": "Narrative Shift",
          "definition": "A change in market sentiment that can lead to significant price movements."
        }
      ],
      "whyThisMatters": "Identifying narrative shifts allows traders to position themselves ahead of potential order block sweeps, enhancing entry and exit strategies.",
      "realLifeExample": "On the EURUSD 15-minute chart, a narrative shift was identified when the price broke through a key order block after a positive ECB announcement, resulting in a 40-pip upward move.",
      "commonMistake": "Traders often overlook volume analysis, relying solely on price action, which can lead to missed opportunities.",
      "quickNote": "Narrative shifts are often accompanied by volume changes and specific price action patterns.",
      "mentorText": "Stay alert for changes in market sentiment. If you see a sudden volume spike, investigate what’s driving it. It could be the catalyst for a significant price movement.",
      "mentorAnalogy": "Identifying narrative shifts is like a weather forecaster predicting a storm. They analyze data patterns to anticipate changes, allowing for timely preparations."
    },
    "taskData": null,
    "visualKey": "breaker-intro"
  },
  {
    "type": "concept",
    "title": "Support and Resistance Dynamics",
    "label": "Core Track",
    "body": "### Breaker Blocks: Support and Resistance Dynamics\nUnderstanding the dynamics of support and resistance in relation to breaker blocks is vital for making informed trading decisions. This card delves into how these levels are established and their implications.\n\n* **Establishment of Levels**: Breaker blocks become pivotal support or resistance levels when they are tested multiple times without being breached. This repeated testing solidifies their significance in the market.\n* **Role Reversal Mechanics**: Once a breaker block is swept, it often reverses its role. For example, if a resistance breaker is breached, it may turn into support during subsequent price action, influencing future trades.\n* **Market Reaction Analysis**: Observe how the market reacts upon retesting these levels. A strong rejection at a former breaker block indicates a robust support or resistance level, guiding future trade entries.",
    "context": {
      "keyTerms": [
        {
          "term": "Role Reversal",
          "definition": "The phenomenon where a previously established support or resistance level changes its function after being breached."
        }
      ],
      "whyThisMatters": "Understanding support and resistance dynamics around breaker blocks enhances decision-making and trade timing.",
      "realLifeExample": "After a breakout above a resistance breaker block on AUDCAD, the price retraced to the block and found support, leading to a 60-pip rally.",
      "commonMistake": "Traders often fail to recognize the role reversal of breaker blocks, leading to premature entries or exits.",
      "quickNote": "Breaker blocks can shift from resistance to support, impacting future price movements.",
      "mentorText": "Always analyze how the market behaves around breaker blocks. If a level holds strong after being tested, it’s likely to influence future price action.",
      "mentorAnalogy": "Think of support and resistance dynamics like a bridge. Once a bridge is crossed, it can serve as a new pathway, changing the flow of traffic in the area."
    },
    "taskData": null,
    "visualKey": "breaker-mechanics"
  },
  {
    "type": "concept",
    "title": "Market Psychology Behind Breakers",
    "label": "Core Track",
    "body": "### Psychological Factors: Market Sentiment Around Breaker Blocks\nMarket psychology plays a crucial role in how traders react to breaker blocks. This card examines the psychological underpinnings that drive price behavior around these levels.\n\n* **Fear and Greed Dynamics**: Understand how fear and greed influence trader behavior at breaker blocks. For instance, a rapid price approach to a resistance breaker may trigger fear of missing out (FOMO), leading to impulsive buying.\n* **Market Sentiment Indicators**: Utilize sentiment indicators, such as the COT report, to gauge trader positioning around breaker blocks. A high percentage of long positions near a resistance breaker can signal potential selling pressure.\n* **Reaction to Breaks**: Analyze how traders react when a breaker block is breached. A sudden influx of buying or selling can indicate herd behavior, which often leads to sharp price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Psychology",
          "definition": "The study of how psychological factors influence trader behavior and market movements."
        }
      ],
      "whyThisMatters": "Understanding market psychology helps traders anticipate reactions to breaker blocks, improving trade execution and risk management.",
      "realLifeExample": "During a test of a resistance breaker on S&P 500, a surge in buying was observed as traders reacted to FOMO, driving prices up by 25 points before a correction.",
      "commonMistake": "Traders often ignore psychological factors, focusing solely on technical analysis, which can lead to misjudgment of market reactions.",
      "quickNote": "Market psychology is a key driver of price behavior around breaker blocks.",
      "mentorText": "Pay attention to the emotions driving the market. If you see a lot of buying at a resistance level, consider whether it’s driven by fear of missing out or genuine bullish sentiment.",
      "mentorAnalogy": "Market psychology is akin to crowd behavior at a concert. The mood of the crowd can shift rapidly, influencing how individuals react, just as traders react to price movements around breaker blocks."
    },
    "taskData": null,
    "visualKey": "ob-to-breaker"
  },
  {
    "type": "concept",
    "title": "Risk Management with Breaker Blocks",
    "label": "Core Track",
    "body": "### Breaker Block Risk Management: Stop-Loss and Position Sizing\nEffective risk management is critical when trading around breaker blocks. This card emphasizes **the necessity of stop-loss orders and precise position sizing** to mitigate potential losses.\n\n* **Stop-Loss Placement**: Position stop-loss orders just beyond the outer edge of the breaker block to limit exposure. For example, if trading a bullish breaker block on GBPUSD at 1.3000, set the stop-loss at 1.2985 to account for volatility.\n* **Position Sizing Calculation**: Use the formula: Position Size = (Account Risk / Trade Risk) × Account Size. If risking 1% of a $10,000 account with a $150 risk per trade, the position size would be 66.67 GBPUSD lots.\n* **Risk-Reward Ratio**: Aim for a minimum risk-reward ratio of 1:2 when entering trades around breaker blocks. If the target is set at 1.3060, ensure the stop-loss aligns with the calculated risk to maintain this ratio.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Proper risk management around breaker blocks can significantly reduce the likelihood of substantial losses while maximizing profit potential.",
      "realLifeExample": "Consider a trade on AUDUSD where a breaker block is identified at 0.7500. A trader sets a stop-loss at 0.7480, risking 20 pips while targeting a move to 0.7560, achieving a 1:3 risk-reward ratio.",
      "commonMistake": "Traders often neglect to adjust their stop-loss orders based on market volatility, leading to premature exits.",
      "quickNote": "Always prioritize risk management when trading around breaker blocks.",
      "mentorText": "When trading breaker blocks, I always stress the importance of stop-loss placement. Set your stops wisely to protect your capital and ensure your position sizing aligns with your risk tolerance.",
      "mentorAnalogy": "Think of trading around breaker blocks like a pilot preparing for takeoff. Just as a pilot checks all systems and sets safety protocols before flight, you must establish your risk management parameters before entering a trade."
    },
    "taskData": null,
    "visualKey": "breaker-entry"
  },
  {
    "type": "concept",
    "title": "Case Studies of Breaker Block Trades",
    "label": "Core Track",
    "body": "### Breaker Block Trade Analysis: Successes and Failures\nAnalyzing real-world case studies provides insights into the practical application of breaker block strategies. This card focuses on **successful and unsuccessful trades around breaker blocks**.\n\n* **Successful Trade Example**: In March 2023, EURUSD formed a bullish breaker block at 1.0800. Traders who entered at 1.0810 with a stop-loss at 1.0785 saw a rally to 1.0900, realizing a 1:3 risk-reward ratio.\n* **Unsuccessful Trade Example**: Conversely, a bearish breaker block at 1.2500 on GBPUSD failed when the price retraced to 1.2520. Traders who did not adjust their stop-loss to break even faced losses as the price reversed to 1.2400.\n* **Lessons Learned**: Successful trades often involve confirmation from additional technical indicators, while unsuccessful trades highlight the importance of adapting to market conditions and adjusting stop-loss levels accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Indicators",
          "definition": "Technical indicators that validate a trading signal."
        },
        {
          "term": "Market Conditions",
          "definition": "The prevailing economic and market environment affecting price movements."
        }
      ],
      "whyThisMatters": "Understanding the outcomes of past trades around breaker blocks helps traders refine their strategies and decision-making processes.",
      "realLifeExample": "In a case study from January 2023, a trader identified a bullish breaker block on USDJPY at 130.00. Entering at 130.10 with a stop-loss at 129.85, the trader capitalized on a subsequent price surge to 131.50, demonstrating effective strategy execution.",
      "commonMistake": "Traders often overlook the importance of analyzing past trades, leading to repeated mistakes in their approach.",
      "quickNote": "Reviewing case studies enhances understanding of practical applications of breaker blocks.",
      "mentorText": "When I analyze trades, I focus on what worked and what didn’t. Each case study teaches us valuable lessons about timing, execution, and the importance of adapting to market dynamics.",
      "mentorAnalogy": "Consider a surgeon reviewing past operations. Each case provides insights into techniques that succeeded or failed, guiding future procedures for optimal outcomes."
    },
    "taskData": null,
    "visualKey": "breaker-debrief"
  },
  {
    "type": "concept",
    "title": "Advanced Trading Strategies for Breakers",
    "label": "Core Track",
    "body": "### Leveraging Breaker Blocks: Advanced Strategies\nAdvanced trading strategies can enhance profitability when leveraging breaker blocks. This card covers **techniques that experienced traders utilize** to maximize their trading outcomes.\n\n* **Multi-Timeframe Analysis**: Utilize higher timeframes to identify significant breaker blocks and confirm entry points on lower timeframes. For instance, a bullish breaker block on the daily chart can be validated with a 1-hour entry at 1.3500.\n* **Order Flow Analysis**: Monitor order flow to gauge market sentiment around breaker blocks. If a bullish breaker block at 1.2000 on AUDCAD shows increasing buy orders, consider entering long positions with confidence.\n* **Combining with Other Strategies**: Integrate breaker block strategies with Fibonacci retracement levels. For example, if a breaker block aligns with a 61.8% Fibonacci retracement level, the confluence can provide a stronger entry signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "Analyzing price action across different timeframes for better trade decisions."
        },
        {
          "term": "Order Flow",
          "definition": "The net buying and selling pressure in the market."
        }
      ],
      "whyThisMatters": "Advanced strategies around breaker blocks can significantly improve entry precision and overall trading performance.",
      "realLifeExample": "In a trade on NZDUSD, a trader identified a bullish breaker block at 0.6800 on the daily chart. They confirmed the entry on the 15-minute chart at 0.6810, capitalizing on a subsequent rally to 0.6880.",
      "commonMistake": "Traders often fail to conduct multi-timeframe analysis, leading to missed opportunities or incorrect entries.",
      "quickNote": "Advanced strategies can amplify the effectiveness of breaker block trading.",
      "mentorText": "I always advise traders to look beyond a single timeframe. By analyzing multiple timeframes, you can identify stronger setups and increase your chances of success.",
      "mentorAnalogy": "Think of a pilot using multiple instruments to navigate. Just as a pilot relies on various gauges for accurate flight paths, you should leverage multiple timeframes to guide your trading decisions."
    },
    "taskData": null,
    "visualKey": "breaker-intro"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Breaker Trading",
    "label": "Core Track",
    "body": "### Avoiding Pitfalls in Breaker Block Trading\nIdentifying common pitfalls can enhance trading success when dealing with breaker blocks. This card provides **guidance on avoiding mistakes** that often hinder traders.\n\n* **Ignoring Market Context**: Failing to consider broader market trends can lead to poor trading decisions. For example, entering a long position on a bullish breaker block during a strong bearish trend can result in losses.\n* **Overleveraging Positions**: Many traders risk too much capital on a single trade around breaker blocks. For instance, using 10% of account equity on a single trade can lead to significant drawdowns if the trade goes against them.\n* **Neglecting to Adapt**: Markets are dynamic; sticking rigidly to a strategy without adapting to changing conditions can be detrimental. If a breaker block is consistently being tested without success, it may indicate a shift in market sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Context",
          "definition": "The overall economic and market conditions that influence price movements."
        },
        {
          "term": "Overleveraging",
          "definition": "Risking an excessive portion of capital on a single trade."
        }
      ],
      "whyThisMatters": "Recognizing and avoiding common pitfalls can improve a trader's ability to execute successful trades around breaker blocks.",
      "realLifeExample": "A trader entered a long position on a bullish breaker block at 1.1500 on EURCAD without considering the prevailing downtrend. The price quickly reversed, resulting in a loss of 50 pips.",
      "commonMistake": "Traders often neglect to assess the broader market context, leading to misaligned trades.",
      "quickNote": "Awareness of common pitfalls is essential for successful breaker block trading.",
      "mentorText": "I see many traders fall into the trap of ignoring market context. Always assess the broader landscape before making a trade decision; it can save you from unnecessary losses.",
      "mentorAnalogy": "Imagine a chef preparing a dish without considering the season's ingredients. Just as a chef must adapt recipes to what's available, you must adjust your trading strategies based on current market conditions."
    },
    "taskData": null,
    "visualKey": "breaker-mechanics"
  },
  {
    "type": "concept",
    "title": "Practical Exercises on Breaker Blocks",
    "label": "Core Track",
    "body": "### Breaker Blocks: Practical Application Exercises\nEngaging in practical exercises reinforces the identification and utilization of breaker blocks in live market conditions. This card provides structured exercises to enhance your proficiency in recognizing narrative shifts.\n\n* **Scenario Analysis**: Analyze historical charts of the EURUSD during the London session, focusing on instances where order blocks were swept and subsequently turned into breaker blocks. Identify at least three specific price levels where this occurred.\n* **Trade Simulation**: Create a simulated trading plan based on a recent breakout of a breaker block in the S&P 500. Outline entry, stop-loss, and take-profit levels, ensuring adherence to risk management protocols.\n* **Peer Review**: Pair with a colleague to review each other’s analyses of potential breaker blocks in the current market. Discuss the rationale behind your identified levels and the expected market behavior following the sweep of these blocks.",
    "context": {
      "keyTerms": [
        {
          "term": "Breaker Block",
          "definition": "A price level where a previously protected order block is swept, leading to a shift in market structure."
        }
      ],
      "whyThisMatters": "Practical exercises solidify theoretical knowledge, enabling traders to apply concepts of breaker blocks effectively in real-time scenarios.",
      "realLifeExample": "On March 15, 2023, the GBPUSD saw a breaker block formation at 1.3000 after a sweep of the previous order block, leading to a subsequent rally of 150 pips.",
      "commonMistake": "Traders often overlook the importance of confirming the narrative shift before acting on a breaker block.",
      "quickNote": "Engage in practical exercises to master the identification and application of breaker blocks.",
      "mentorText": "When analyzing breaker blocks, focus on the context of the sweep. Look for volume spikes and price action that confirm the shift in market narrative.",
      "mentorAnalogy": "Think of breaker blocks like a dam in a river; when the dam is breached, the water flows freely, creating new pathways. Similarly, when an order block is swept, the market can shift direction rapidly."
    },
    "taskData": null,
    "visualKey": "ob-to-breaker"
  },
  {
    "type": "practice",
    "title": "Summary of Breaker Block Concepts",
    "label": "Core Track",
    "body": "### Breaker Blocks: Key Concept Recap\nThis card summarizes the essential concepts regarding breaker blocks, emphasizing their role in market structure shifts. Understanding these principles is vital for effective trading strategies.\n\n* **Order Block to Breaker Transition**: Recognize that when an order block is swept, it often transforms into a breaker block, serving as a new support or resistance level. This transition is critical for identifying potential trade setups.\n* **Market Sentiment Shift**: Monitor the market sentiment during the sweep of an order block. A significant change in volume and price action indicates a potential reversal or continuation of the trend.\n* **Confirmation Signals**: Utilize additional indicators, such as RSI or MACD, to confirm the validity of the breaker block. Look for divergences or crossovers that support the narrative shift.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        },
        {
          "term": "Confirmation Signals",
          "definition": "Indicators that validate the potential effectiveness of a trade setup."
        }
      ],
      "whyThisMatters": "A solid grasp of breaker block concepts allows traders to anticipate market movements and make informed decisions.",
      "realLifeExample": "During the US session on February 10, 2023, the NASDAQ 100 saw a breaker block at 13,500 after sweeping a previous order block, leading to a 200-point drop.",
      "commonMistake": "Failing to wait for confirmation signals can lead to premature entries based on unvalidated breaker blocks.",
      "quickNote": "Master the transition from order blocks to breaker blocks for effective market navigation.",
      "mentorText": "Remember, the sweep of an order block is not just a signal; it's a narrative shift. Always look for confirmation before executing trades.",
      "mentorAnalogy": "Consider breaker blocks like a traffic light; when the light changes, it signals a change in flow. Just as you wouldn't proceed without confirming the light is green, don't trade without confirmation of the breaker block."
    },
    "taskData": {
      "type": "choice_block",
      "question": "What is the primary function of a breaker block after an order block is swept?",
      "options": [
        {
          "id": "0",
          "text": "To serve as a new support or resistance level.",
          "isCorrect": true,
          "feedback": "Correct. A breaker block indicates a shift in market structure, often becoming a new support or resistance level."
        },
        {
          "id": "1",
          "text": "To indicate a guaranteed price reversal.",
          "isCorrect": false,
          "feedback": "Incorrect. While a breaker block can indicate potential reversal, it is not guaranteed without confirmation."
        },
        {
          "id": "2",
          "text": "To signal the end of a trading session.",
          "isCorrect": false,
          "feedback": "Incorrect. Breaker blocks are related to price action, not the timing of trading sessions."
        },
        {
          "id": "3",
          "text": "To provide a fixed target for profit-taking.",
          "isCorrect": false,
          "feedback": "Incorrect. Breaker blocks serve as levels of interest, but targets should be determined based on broader analysis."
        }
      ]
    },
    "visualKey": "breaker-entry"
  },
  {
    "type": "summary",
    "title": "Core Advanced Application of Breaker Blocks",
    "label": "Core Track",
    "body": "### Breaker Blocks: Advanced Application\nThis card delves into advanced applications of breaker block concepts, focusing on edge cases and nuanced market behaviors. Mastery of these concepts enhances trading precision.\n\n* **Contextual Analysis**: Assess the broader market context when a breaker block forms. Consider macroeconomic factors, news events, and overall market sentiment that could influence price action around the breaker level.\n* **Multi-Timeframe Approach**: Utilize a multi-timeframe analysis to validate breaker blocks. A breaker block on a higher timeframe (e.g., daily) carries more weight than one on a lower timeframe (e.g., 15-minute).\n* **Risk Management Strategies**: Implement advanced risk management techniques when trading around breaker blocks. Consider adjusting position sizes based on volatility and the strength of the breaker block's confirmation.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Timeframe Analysis",
          "definition": "The practice of analyzing price action across different timeframes to gain a comprehensive market view."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        }
      ],
      "whyThisMatters": "Advanced applications of breaker blocks allow traders to navigate complex market conditions with greater accuracy and confidence.",
      "realLifeExample": "On April 5, 2023, the AUDUSD formed a breaker block at 0.6700 after sweeping a prior order block, coinciding with a significant employment report that influenced market sentiment.",
      "commonMistake": "Overlooking the impact of external factors on the validity of a breaker block can lead to misjudged trades.",
      "quickNote": "Advanced applications of breaker blocks require a comprehensive analysis of market context and risk management.",
      "mentorText": "When approaching breaker blocks, always consider the bigger picture. What external factors could affect price action? Don't trade in a vacuum.",
      "mentorAnalogy": "Think of trading around breaker blocks like navigating a ship through a storm. You need to account for wind direction, wave height, and other conditions to steer safely."
    },
    "taskData": null,
    "visualKey": "breaker-debrief"
  }
];
