import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Impact of News Prints on FX Gaps",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: Economic News Prints\nEconomic news releases significantly influence price dynamics in the Forex market, often resulting in Fair Value Gaps (FVG). This card examines **how specific news events create price imbalances**.\n\n* **CPI Impact**: A significant Consumer Price Index (CPI) release can lead to a FVG when the actual figure deviates from market expectations by more than 0.5%. For instance, if the USD CPI is reported at 3.2% versus an expected 2.8%, expect a gap in the USD pairs.\n* **NFP Influence**: Non-Farm Payroll (NFP) reports often create substantial FVGs due to the market's reaction to employment data. A deviation of 50,000 jobs from the forecast can result in a 30-50 pip gap in major pairs like EURUSD or USDJPY.\n* **Session Timing**: FVGs are most pronounced during high-impact news releases, particularly during the overlap of the London and New York sessions, amplifying volatility and price movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Fair Value Gap (FVG)",
          "definition": "A price imbalance created when the market moves rapidly, leaving behind unfilled orders."
        }
      ],
      "whyThisMatters": "Understanding how news prints create FVGs allows traders to anticipate price movements and adjust their strategies accordingly.",
      "realLifeExample": "On July 13, 2023, the USD CPI release at 8:30 AM EST showed a 3.0% increase, leading to a 40 pip FVG in the EURUSD pair within the first 15 minutes post-release.",
      "commonMistake": "Traders often underestimate the volatility following major news releases, leading to premature entries or exits.",
      "quickNote": "News prints can create significant Fair Value Gaps that traders must recognize and act upon.",
      "mentorText": "When a major economic report hits the wires, the market reacts swiftly. If you're not prepared for the ensuing volatility, you risk missing out on critical trading opportunities.",
      "mentorAnalogy": "Think of trading around news prints like a pilot preparing for takeoff; you must account for sudden changes in weather conditions that can affect your flight path."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "concept",
    "title": "USD CPI and Three-Candle Imbalances",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: USD CPI Releases\nThe USD CPI release is a pivotal economic indicator that often results in three-candle imbalances, creating Fair Value Gaps. This card explores **the mechanics of these imbalances following CPI announcements**.\n\n* **Three-Candle Formation**: A typical three-candle imbalance occurs when the first candle closes above the previous high, the second candle retraces, and the third candle breaks the high, indicating strong bullish sentiment. This pattern often follows a positive CPI release.\n* **Historical Reaction**: Analyzing past CPI releases, such as the 0.6% increase on August 10, 2023, shows that the EURUSD formed a three-candle bullish pattern, resulting in a 50 pip movement within the first hour.\n* **Market Sentiment**: The market's perception of inflation influences the strength of the three-candle imbalance. Higher-than-expected CPI figures typically lead to aggressive buying in USD pairs, reinforcing the gap's significance.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Three-Candle Imbalance",
          "definition": "A price action pattern indicating a strong directional move, typically following a news event."
        }
      ],
      "whyThisMatters": "Recognizing three-candle imbalances allows traders to identify potential entry points and manage risk effectively.",
      "realLifeExample": "Following the USD CPI release on September 13, 2023, which showed a 0.4% increase, the GBPUSD formed a three-candle bullish pattern, resulting in a 60 pip rise within the first 30 minutes.",
      "commonMistake": "Traders often overlook the importance of confirming the three-candle pattern before entering trades, leading to false breakouts.",
      "quickNote": "CPI releases frequently trigger three-candle imbalances, providing actionable trading signals.",
      "mentorText": "When you see a three-candle formation after a CPI release, it's a signal that the market is reacting strongly. Use this to your advantage, but confirm the pattern before taking action.",
      "mentorAnalogy": "Consider this pattern like a surgical procedure; precision is key, and you must ensure all signs align before proceeding."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "concept",
    "title": "NFP Reports and Imbalance Delivery",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: NFP Reports\nNon-Farm Payroll (NFP) reports are critical economic indicators that significantly impact Forex markets, often resulting in imbalance delivery. This card analyzes **the typical price movements following NFP announcements**.\n\n* **Immediate Market Reaction**: Following an NFP release, the market often reacts within minutes, creating FVGs. For example, if the NFP figure comes in at 300,000 versus an expectation of 250,000, expect a rapid price surge in USD pairs, often exceeding 50 pips.\n* **Price Movement Patterns**: The price typically forms a series of candlesticks that reflect the market's sentiment. A strong NFP report can lead to a bullish engulfing pattern, indicating a continuation of upward momentum.\n* **Volatility Considerations**: The first 15 minutes post-NFP are crucial, as this is when the most significant price action occurs. Traders should be prepared for high volatility and potential slippage during this period.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Imbalance Delivery",
          "definition": "The process by which price moves rapidly to fill gaps left by previous market inefficiencies."
        }
      ],
      "whyThisMatters": "Understanding how NFP reports create imbalances enables traders to capitalize on rapid price movements effectively.",
      "realLifeExample": "On October 6, 2023, the NFP report showed an increase of 350,000 jobs, leading to a 70 pip surge in the USDJPY pair within the first 10 minutes after the announcement.",
      "commonMistake": "Traders often enter positions too early, not waiting for confirmation of the price action following the NFP release.",
      "quickNote": "NFP reports can create significant price imbalances that traders must act on swiftly.",
      "mentorText": "When the NFP numbers come out, the market can move like a freight train. Be ready to react, but ensure you have a solid plan before jumping in.",
      "mentorAnalogy": "Think of trading after an NFP report like a firefighter responding to a blaze; you need to assess the situation quickly and act decisively to avoid getting burned."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "concept",
    "title": "Trading Strategies around FX Gaps",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: Trading Strategies\nEffective trading strategies around Fair Value Gaps (FVG) created by news events can enhance profitability. This card outlines **tactical approaches to capitalize on these gaps**.\n\n* **Gap Fill Strategy**: Traders often look for price to retrace back to the FVG level to enter positions. For example, if a gap forms after a CPI release, wait for a retracement to the gap before entering a long position, targeting a 1:2 risk-reward ratio.\n* **Momentum Trading**: Following a significant news event, traders can employ momentum strategies by entering positions in the direction of the gap. If the NFP report shows a strong job increase, enter long on USD pairs immediately after the initial surge.\n* **Risk Management**: Implement strict stop-loss orders just below the FVG to protect against false breakouts. For instance, if the EURUSD gaps up after a positive news release, set a stop-loss 10 pips below the gap to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Gap Fill Strategy",
          "definition": "A trading approach that involves entering positions when price retraces to fill a Fair Value Gap."
        }
      ],
      "whyThisMatters": "Utilizing effective strategies around FVGs allows traders to maximize their risk-adjusted returns.",
      "realLifeExample": "After the USD CPI release on August 10, 2023, the EURUSD formed a FVG. Traders employing a gap fill strategy entered long when price retraced to the gap, achieving a 1:3 risk-reward ratio within the next hour.",
      "commonMistake": "Traders often neglect to account for slippage when entering trades around FVGs, leading to unexpected losses.",
      "quickNote": "Strategic trading around Fair Value Gaps can significantly enhance profitability.",
      "mentorText": "When you spot a Fair Value Gap, have a plan ready. Whether you're filling the gap or riding the momentum, ensure your strategy is sound and your risk is managed.",
      "mentorAnalogy": "Think of trading around FVGs like a chef timing the perfect moment to flip a steak; too early or too late can ruin the dish."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "concept",
    "title": "Risk Management in FX Gaps",
    "label": "Forex Track",
    "body": "### Forex Imbalance Risk: Protecting Rollover and Spread Swings\nManaging risk on currency Fair Value Gaps requires accounting for execution slippage and spread expansions. This card teaches **how to size stops and manage trades when ECN spreads swell**.\n\n* **Rollover Spread Buffers**: Stop-losses on FVG trades must incorporate a buffer equal to the pair's average 5:00 PM EST rollover spread expansion, preventing premature stop-outs.\n* **ECN Slippage Math**: Stop parameters are adjusted to assume a 1-2 pip slippage penalty when filling limit orders during sudden macro-driven imbalance runs.\n* **ATR Stop Scaling**: The invalidation boundary of the FVG plan is scaled using 1.5 times the 15-minute ATR to absorb volatility spikes during active session overlaps.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a trade."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Proper risk management protects capital and enhances long-term trading performance, particularly in volatile market conditions associated with FVGs.",
      "realLifeExample": "In a trade setup on EURUSD, a trader identifies a Fair Value Gap at 1.1200. They place a stop-loss at 1.1185 (15 pips below) and size their position to risk only 1% of their $10,000 account.",
      "commonMistake": "Traders often place stop-loss orders too close to the entry point, leading to unnecessary losses from normal market fluctuations.",
      "quickNote": "Effective risk management is critical for longevity in Forex trading.",
      "mentorText": "When trading Fair Value Gaps, always ensure your stop-loss is strategically placed to withstand market noise. Think of it as a safety net that allows you to stay in the game longer.",
      "mentorAnalogy": "Like a pilot calculating fuel reserves and emergency protocols before takeoff, you must assess your risk parameters before entering a trade."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "concept",
    "title": "Case Studies on FX Gaps",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: Analyzing Successful Trades\nExamining historical trades based on Fair Value Gaps (FVG) provides valuable insights into effective trading strategies. This card highlights **key takeaways from successful trades in the Forex market**.\n\n* **Trade Example: GBPUSD**: A trader identified a FVG at 1.3000 after a news release. They entered long, targeting a 50-pip gain, and successfully exited at 1.3050, capitalizing on the imbalance.\n* **Market Reaction**: Post-entry, the price retraced to fill the gap before rallying, demonstrating the importance of waiting for confirmation before entering trades.\n* **Lessons Learned**: Successful traders noted the significance of timing their entries around news events, as volatility can enhance the effectiveness of FVG strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "News Release",
          "definition": "An announcement that can impact market prices significantly."
        },
        {
          "term": "Imbalance",
          "definition": "A situation where supply and demand are not equal, leading to price movements."
        }
      ],
      "whyThisMatters": "Learning from successful case studies allows traders to refine their strategies and improve decision-making in real-time trading scenarios.",
      "realLifeExample": "In a case study, a trader capitalized on a FVG in AUDJPY after the RBA's interest rate announcement, entering at 85.50 and exiting at 86.00 after a 50-pip move.",
      "commonMistake": "Traders often overlook the context of market conditions surrounding FVGs, leading to missed opportunities or premature exits.",
      "quickNote": "Analyzing successful trades reveals patterns and strategies that can enhance your trading approach.",
      "mentorText": "Reviewing past trades is crucial. Each successful trade based on a Fair Value Gap teaches you something about timing, market conditions, and execution.",
      "mentorAnalogy": "Just as a surgeon reviews past operations to refine techniques, you must analyze your trades to improve your strategy."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on FX Gaps",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: Identifying and Trading Exercises\nEngaging in practical exercises focused on Fair Value Gaps (FVG) enhances your ability to identify and trade these setups effectively. This card provides **scenarios for applying learned strategies in real-time**.\n\n* **Scenario 1**: Identify a FVG on USDCHF during the New York session. Determine your entry point, stop-loss, and target based on the most recent price action.\n* **Scenario 2**: Analyze a 15-minute chart for EURCAD. Locate a three-candle imbalance and outline your trading plan, including risk management parameters.\n* **Scenario 3**: Review a recent news event impacting NZD. Identify any resulting FVGs and propose a trade setup, including entry, exit, and stop-loss levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Three-Candle Imbalance",
          "definition": "A price structure indicating a significant imbalance in supply and demand."
        },
        {
          "term": "Entry Point",
          "definition": "The price level at which a trader enters a trade."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical knowledge and improve the trader's ability to execute strategies under real market conditions.",
      "realLifeExample": "In a practical exercise, a trader identifies a FVG on GBPJPY at 150.50, sets a stop-loss at 150.30, and targets a profit at 151.00, practicing risk management principles.",
      "commonMistake": "Failing to backtest scenarios before live trading can lead to unpreparedness for real market conditions.",
      "quickNote": "Hands-on practice is essential for mastering Fair Value Gaps.",
      "mentorText": "Practice identifying Fair Value Gaps in various market conditions. The more you engage with real scenarios, the more instinctive your trading decisions will become.",
      "mentorAnalogy": "Like a pilot practicing in a simulator, you must rehearse your trading strategies in a controlled environment before taking them live."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You identify a Fair Value Gap on AUDUSD at 0.7500. What is your next step?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": false,
          "feedback": "Entering immediately without confirmation can lead to losses if the gap is not filled."
        },
        {
          "id": "1",
          "text": "Wait for a retracement to fill the gap before entering.",
          "isCorrect": true,
          "feedback": "Waiting for a retracement allows for a more favorable entry point, increasing the probability of a successful trade."
        },
        {
          "id": "2",
          "text": "Set a stop-loss at 0.7480 and enter without further analysis.",
          "isCorrect": false,
          "feedback": "Setting a stop-loss without analyzing market conditions can expose you to unnecessary risk."
        },
        {
          "id": "3",
          "text": "Ignore the gap and focus on other pairs.",
          "isCorrect": false,
          "feedback": "Ignoring potential trading opportunities can lead to missed profits."
        }
      ]
    },
    "visualKey": "forex-fvg-news"
  },
  {
    "type": "summary",
    "title": "Summary of Fair Value Gaps in Forex",
    "label": "Forex Track",
    "body": "### Fair Value Gaps: Key Concepts Recap\nThis card summarizes the essential concepts regarding Fair Value Gaps (FVG) in Forex, emphasizing the **role of news prints and three-candle imbalances**.\n\n* **News Impact**: Major economic announcements often create FVGs, leading to significant price movements. Understanding the timing of these announcements is crucial for effective trading.\n* **Three-Candle Imbalance**: Recognizing the structure of three-candle imbalances helps traders identify potential reversal points and entry opportunities within FVGs.\n* **Risk Management**: Implementing robust risk management strategies is vital when trading FVGs to protect capital and maximize potential gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Announcement",
          "definition": "A scheduled release of economic data that can influence market prices."
        },
        {
          "term": "Reversal Point",
          "definition": "A price level at which a trend is expected to change direction."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of FVGs enhances a trader's ability to navigate the Forex market with precision and confidence.",
      "realLifeExample": "Traders noted a FVG on USDJPY following a strong Non-Farm Payroll report, leading to a rapid price increase from 110.00 to 111.00.",
      "commonMistake": "Overlooking the significance of news events can lead to missed trading opportunities or unexpected losses.",
      "quickNote": "Mastering Fair Value Gaps is essential for effective Forex trading.",
      "mentorText": "Reviewing the core concepts of Fair Value Gaps will prepare you for real market scenarios. Stay vigilant around news events and understand the price structure.",
      "mentorAnalogy": "Just as an architect revisits blueprints before construction, you must revisit these key concepts before executing trades."
    },
    "taskData": null,
    "visualKey": "forex-fvg-news"
  }
];
