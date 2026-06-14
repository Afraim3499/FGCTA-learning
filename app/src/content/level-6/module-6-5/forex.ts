import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Marking Session Swing Extremes for Stop-Run Invalidation",
    "label": "Forex Track",
    "body": "### Core Scenario: Session Swing Extremes\nIdentifying session swing extremes is essential for determining stop-run invalidation levels that protect trading positions. This card teaches **how to accurately mark these extremes during the trading session**.\n\n* **Session High and Low Definition**: The session high is the highest price reached during a specific trading session, while the session low is the lowest price. Mark these levels to establish boundaries for potential stop-runs.\n* **Stop-Run Triggers**: A stop-run occurs when price breaches these marked extremes, triggering stop-loss orders. Recognize that a breach above the session high or below the session low indicates a potential invalidation of your trade scenario.\n* **Confirmation with Volume**: Validate the significance of the swing extremes by analyzing volume spikes. A high volume accompanying a breach of these levels suggests a strong conviction in the move, reinforcing the invalidation signal.",
    "context": {
      "keyTerms": [
        {
          "term": "Session High",
          "definition": "The highest price reached during a specific trading session."
        },
        {
          "term": "Session Low",
          "definition": "The lowest price reached during a specific trading session."
        },
        {
          "term": "Stop-Run",
          "definition": "A market movement that triggers stop-loss orders, often leading to further price movement."
        }
      ],
      "whyThisMatters": "Accurate identification of session swing extremes is critical for managing risk and protecting positions in volatile Forex markets.",
      "realLifeExample": "During the London session, EURUSD reached a high of 1.1200 and a low of 1.1150. A breach above 1.1200 triggered a stop-run, invalidating long positions established at 1.1180.",
      "commonMistake": "Traders often neglect to mark session extremes, leading to unprotected positions during volatile price movements.",
      "quickNote": "Mark session highs and lows to establish critical invalidation boundaries.",
      "mentorText": "When marking session extremes, focus on the highest and lowest points during the trading hours. If price breaches these levels, be prepared to reassess your position immediately.",
      "mentorAnalogy": "Think of marking session extremes like a pilot determining altitude limits during flight; exceeding these limits requires immediate corrective action."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Identifying Highs and Lows as Invalidation Points",
    "label": "Forex Track",
    "body": "### Core Scenario: Highs and Lows as Invalidation Points\nHighs and lows in Forex trading serve as critical invalidation points that can dictate the success or failure of a trading strategy. This card teaches **how to effectively identify and utilize these points**.\n\n* **Significance of Swing Highs and Lows**: A swing high is defined as a peak where price reverses downward, while a swing low is a trough where price reverses upward. These points are essential for setting invalidation levels.\n* **Price Action Confirmation**: Confirm the validity of identified highs and lows through subsequent price action. A failure to hold above a swing high or below a swing low can indicate a strong invalidation signal.\n* **Utilizing Fibonacci Levels**: Incorporate Fibonacci retracement levels with identified highs and lows to enhance invalidation strategies. For instance, if a swing high aligns with a 61.8% retracement level, it strengthens the invalidation point.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A price point where the market reverses downward after reaching a peak."
        },
        {
          "term": "Swing Low",
          "definition": "A price point where the market reverses upward after reaching a trough."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A tool used to identify potential reversal levels based on the Fibonacci sequence."
        }
      ],
      "whyThisMatters": "Identifying significant highs and lows allows traders to manage risk effectively and make informed decisions in their trading strategies.",
      "realLifeExample": "In a recent trading session, GBPUSD formed a swing high at 1.3500. A subsequent drop below 1.3480 confirmed the invalidation of long positions taken at 1.3495.",
      "commonMistake": "Traders often overlook minor swing points, which can lead to missed invalidation signals and increased risk exposure.",
      "quickNote": "Use swing highs and lows as key invalidation points to guide your trading decisions.",
      "mentorText": "When identifying highs and lows, focus on the price action that follows. If price fails to maintain above a swing high, it's time to reconsider your position.",
      "mentorAnalogy": "Identifying highs and lows is like a surgeon determining critical points of incision; missing these can lead to complications in the procedure."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Intraday Movements and Their Impact on Invalidation Levels",
    "label": "Forex Track",
    "body": "### Core Scenario: Intraday Movements and Invalidation Levels\nIntraday price movements significantly influence invalidation levels, requiring traders to adapt their strategies in real-time. This card teaches **how to analyze intraday movements for effective invalidation management**.\n\n* **Monitoring Price Fluctuations**: Track intraday price fluctuations closely to identify shifts in market sentiment. Rapid price changes can lead to new invalidation levels that differ from previous sessions.\n* **Volatility Indicators**: Utilize volatility indicators, such as the Average True Range (ATR), to assess the potential range of intraday movements. Adjust invalidation levels based on the ATR to account for expected price swings.\n* **Time Frame Analysis**: Analyze multiple time frames to gain a comprehensive view of intraday movements. A significant move on a lower time frame may invalidate setups established on higher time frames.",
    "context": {
      "keyTerms": [
        {
          "term": "Intraday Price Movement",
          "definition": "Price changes that occur within a single trading day."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market volatility by decomposing the entire range of an asset price for that period."
        },
        {
          "term": "Time Frame Analysis",
          "definition": "The practice of analyzing price movements across different time frames to gain insights."
        }
      ],
      "whyThisMatters": "Understanding intraday movements allows traders to adjust their invalidation levels dynamically, enhancing risk management and trade execution.",
      "realLifeExample": "During the New York session, USDJPY exhibited high volatility, with price swinging from 110.50 to 111.00. A trader adjusted their invalidation level to 110.45 based on the ATR, protecting their position from potential losses.",
      "commonMistake": "Traders often set static invalidation levels without accounting for intraday volatility, leading to premature exits or losses.",
      "quickNote": "Adapt invalidation levels based on real-time intraday price movements to enhance trade management.",
      "mentorText": "Keep a close eye on intraday price movements. If you notice significant fluctuations, be ready to adjust your invalidation levels accordingly to protect your trades.",
      "mentorAnalogy": "Adjusting invalidation levels based on intraday movements is like a pilot making real-time adjustments to altitude based on changing weather conditions."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Market Sentiment Analysis for Invalidation Decisions",
    "label": "Forex Track",
    "body": "### Core Scenario: Market Sentiment Analysis\nMarket sentiment plays a crucial role in determining invalidation decisions in Forex trading. This card teaches **how to analyze sentiment effectively to inform your invalidation strategy**.\n\n* **Sentiment Indicators**: Utilize sentiment indicators, such as the Commitment of Traders (COT) report, to gauge market positioning. High levels of bullish or bearish sentiment can signal potential invalidation points if the market reverses.\n* **News Impact Assessment**: Assess the impact of economic news releases on market sentiment. Major announcements can shift sentiment rapidly, necessitating a reevaluation of invalidation levels based on new information.\n* **Behavioral Analysis**: Observe trader behavior and positioning through social media and trading forums. A sudden shift in sentiment can indicate a potential invalidation of existing scenarios, prompting a reassessment of trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders toward a particular market or asset."
        },
        {
          "term": "Commitment of Traders (COT) Report",
          "definition": "A report that shows the positions of traders in the futures markets, providing insight into market sentiment."
        },
        {
          "term": "News Impact Assessment",
          "definition": "The process of evaluating how economic news releases affect market sentiment and price movements."
        }
      ],
      "whyThisMatters": "Analyzing market sentiment enables traders to make informed invalidation decisions, enhancing their ability to navigate volatile market conditions.",
      "realLifeExample": "Following a positive Non-Farm Payroll report, EURUSD sentiment shifted bullishly, prompting traders to adjust invalidation levels to 1.1200, as a break below this level indicated a reversal.",
      "commonMistake": "Traders often ignore sentiment analysis, relying solely on technical indicators, which can lead to missed invalidation signals during significant market shifts.",
      "quickNote": "Incorporate market sentiment analysis to refine your invalidation decisions and adapt to changing conditions.",
      "mentorText": "Always consider market sentiment when making invalidation decisions. If sentiment shifts dramatically, be prepared to adjust your strategy to align with the new market dynamics.",
      "mentorAnalogy": "Analyzing market sentiment is like a chef tasting a dish; if the flavor changes unexpectedly, adjustments must be made to achieve the desired outcome."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Correlation Analysis for Identifying Invalidation Anchors",
    "label": "Forex Track",
    "body": "### Core Scenario: Correlation Analysis\nCorrelation analysis between currency pairs reveals potential invalidation anchors, enhancing the precision of your trading strategy. This card teaches **how to leverage correlation metrics to identify critical price levels**.\n\n* **Identifying Correlated Pairs**: Analyze pairs such as EURUSD and GBPUSD; a strong positive correlation indicates that price movements in one may validate or invalidate scenarios in the other.\n* **Statistical Thresholds**: Use a correlation coefficient of 0.8 or higher to establish a reliable relationship, marking significant price levels where one pair's behavior could signal invalidation for the other.\n* **Dynamic Adjustments**: Monitor changes in correlation during key economic releases, adjusting your invalidation anchors based on shifts in market sentiment or economic data releases.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that indicates the extent to which two variables fluctuate together."
        }
      ],
      "whyThisMatters": "Understanding correlation allows traders to anticipate invalidation points based on the behavior of related currency pairs, improving decision-making accuracy.",
      "realLifeExample": "On a day when EURUSD rallies 50 pips, observe GBPUSD moving in tandem; if GBPUSD fails to hold above 1.4000, it may signal invalidation for your EURUSD long position.",
      "commonMistake": "Traders often overlook the significance of correlation changes during major economic announcements, leading to misjudged invalidation points.",
      "quickNote": "Use correlation to identify potential invalidation anchors across related currency pairs.",
      "mentorText": "When analyzing currency pairs, always check their correlation. If EURUSD is moving up but GBPUSD is lagging, that could be a red flag for your trade.",
      "mentorAnalogy": "Think of correlation analysis like a flight control system; just as pilots monitor multiple instruments to ensure safe navigation, traders must track correlated pairs to avoid misjudgments."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Economic Indicators as Invalidation Triggers",
    "label": "Forex Track",
    "body": "### Core Scenario: Economic Indicators\nEconomic indicators serve as critical triggers for invalidation, allowing traders to recalibrate their strategies based on macroeconomic data. This card teaches **how to identify key indicators that can invalidate your trading scenarios**.\n\n* **Key Economic Releases**: Focus on releases such as Non-Farm Payrolls (NFP) or CPI; a significant deviation from expectations can trigger immediate invalidation of existing positions.\n* **Market Reaction Analysis**: Observe how the market reacts to these indicators; for instance, if USDJPY drops 30 pips on a worse-than-expected NFP, it may invalidate bullish scenarios.\n* **Pre-Release Planning**: Establish invalidation levels before economic releases, ensuring you have a clear exit strategy if the data contradicts your trade thesis.",
    "context": {
      "keyTerms": [
        {
          "term": "Non-Farm Payrolls (NFP)",
          "definition": "A key economic indicator that measures the number of jobs added or lost in the U.S. economy, excluding the farming sector."
        }
      ],
      "whyThisMatters": "Recognizing the impact of economic indicators on currency movements allows traders to proactively manage risk and adjust strategies accordingly.",
      "realLifeExample": "Before the NFP release, you set a stop-loss on your AUDUSD long at 0.7400; if the actual NFP shows a loss of jobs, triggering a 50-pip drop, this invalidates your position.",
      "commonMistake": "Failing to adjust invalidation levels in response to unexpected economic data can lead to significant losses.",
      "quickNote": "Economic indicators can serve as immediate invalidation triggers for your trading scenarios.",
      "mentorText": "Always have your invalidation levels set before major economic releases. If the data comes in worse than expected, be ready to act quickly.",
      "mentorAnalogy": "Consider economic indicators like a surgeon's vital signs monitor; just as a doctor adjusts their approach based on patient data, traders must adapt to economic signals."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "concept",
    "title": "Simulations for Practicing Invalidation Marking",
    "label": "Forex Track",
    "body": "### Core Scenario: Invalidation Marking Simulations\nEngaging in trading simulations allows you to practice marking session swing extremes as invalidation points, reinforcing your understanding of the concept. This card focuses on **how to effectively simulate invalidation marking in real-time scenarios**.\n\n* **Session Swing Identification**: Use historical data to identify swing highs and lows during a trading session, marking them as potential invalidation points based on price action.\n* **Scenario Analysis**: Create scenarios where price approaches these marked levels; analyze how the market reacts and whether your invalidation holds or fails.\n* **Feedback Loop**: After each simulation, review your decisions and the outcomes, refining your criteria for marking invalidation points based on performance metrics.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High/Low",
          "definition": "The highest or lowest price point reached during a specific trading session."
        }
      ],
      "whyThisMatters": "Practicing invalidation marking in simulations prepares traders for real market conditions, enhancing their decision-making skills.",
      "realLifeExample": "In a simulation, you identify a swing high at 1.2000 for EURUSD; when price retraces to this level and fails to break above, you mark it as an invalidation point for your long position.",
      "commonMistake": "Traders often fail to accurately mark swing extremes, leading to missed invalidation opportunities during live trading.",
      "quickNote": "Simulations provide a risk-free environment to practice marking invalidation points based on swing extremes.",
      "mentorText": "Use simulations to hone your skills in marking invalidation points. The more you practice, the better you'll recognize these levels in live markets.",
      "mentorAnalogy": "Think of simulations like flight simulators for pilots; they provide a safe space to practice critical maneuvers without the risk of real-world consequences."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Invalidation Techniques",
    "label": "Forex Track",
    "body": "### Core Scenario: Invalidation Techniques Summary\nThis card summarizes the key techniques for marking session swing extremes as stop-run invalidations, reinforcing the learning objectives. Understanding these techniques is essential for maintaining a disciplined trading approach.\n\n* **Correlation Analysis**: Utilize correlation metrics to identify potential invalidation anchors across related currency pairs, enhancing trade accuracy.\n* **Economic Indicators**: Recognize how key economic data releases can act as triggers for invalidation, allowing for timely adjustments to trading strategies.\n* **Simulation Practice**: Engage in simulations to reinforce the identification of swing highs and lows, ensuring preparedness for real market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Run",
          "definition": "A market movement designed to trigger stop-loss orders, often leading to rapid price changes."
        }
      ],
      "whyThisMatters": "A solid grasp of invalidation techniques enables traders to manage risk effectively and make informed decisions in volatile markets.",
      "realLifeExample": "After reviewing your trades, you find that marking invalidation points based on economic indicators and correlation analysis has improved your win rate by 15%.",
      "commonMistake": "Traders may neglect to review and adapt their invalidation strategies, leading to repeated mistakes in live trading.",
      "quickNote": "Mastering invalidation techniques is crucial for effective risk management in Forex trading.",
      "mentorText": "Review these invalidation techniques regularly. They are your safety net in volatile markets, ensuring you act decisively when conditions change.",
      "mentorAnalogy": "Think of these techniques as a pilot's checklist before takeoff; each item is critical for ensuring a safe and successful trading journey."
    },
    "taskData": null,
    "visualKey": "invalidation-boundaries"
  }
];
