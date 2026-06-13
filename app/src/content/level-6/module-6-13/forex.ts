import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Isolated Margin Limits",
    "label": "Forex Track",
    "body": "### Core Scenario: Isolated Margin Limits\nIsolated margin limits are critical in managing liquidation risks, particularly in volatile Forex environments. This card details **how to set and adjust isolated margin limits effectively**.\n\n* **Margin Allocation**: Allocate only a portion of your total margin to a specific position, isolating risk to that trade. For example, if trading EURUSD, set an isolated margin of $500 for a position size of 1 lot.\n* **Risk Management**: Monitor the equity in your isolated margin account closely. If the equity drops below a certain threshold (e.g., 50% of the margin), prepare to adjust or close positions to avoid liquidation.\n* **Dynamic Adjustments**: Adjust your isolated margin limit based on market volatility and position performance. If EURUSD experiences a sudden spike of 100 pips, reassess your margin limits to protect against potential liquidation.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Isolated Margin",
          "definition": "A margin type that limits the risk of liquidation to a specific position."
        }
      ],
      "whyThisMatters": "Understanding isolated margin limits is essential for controlling risk exposure and preventing forced liquidations in volatile markets.",
      "realLifeExample": "When trading BTCUSD, if your isolated margin is set at $1,000 and the price moves against you by 10%, your risk is contained to that margin amount, preventing broader account liquidation.",
      "commonMistake": "Traders often neglect to adjust their isolated margin limits in response to market changes, leading to unexpected liquidations.",
      "quickNote": "Isolated margin limits protect individual trades from impacting overall account equity.",
      "mentorText": "In my experience, setting isolated margin limits is like putting a safety net under a tightrope walker. You want to ensure that if they slip, only the fall from that rope matters, not the entire circus.",
      "mentorAnalogy": "Think of isolated margin limits as the safety harness of a rock climber. It secures the climber to a specific route, ensuring that a fall only affects that climb, not the entire ascent."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Liquidation Pool Boundaries Explained",
    "label": "Forex Track",
    "body": "### Core Scenario: Liquidation Pool Boundaries\nDefining liquidation pool boundaries is essential for anticipating potential liquidation events. This card covers **how to analyze and set these boundaries effectively**.\n\n* **Boundary Calculation**: Identify the liquidation price by calculating the price at which your margin balance will be insufficient to cover the required margin. For example, if your margin is $1,000 and your position size is 2 lots of EURUSD, calculate the liquidation price based on current leverage.\n* **Market Conditions**: Assess market volatility and liquidity to adjust your liquidation pool boundaries. In a high-volatility scenario, widen your boundaries to accommodate potential price swings.\n* **Pre-Execution Checklist**: Include liquidation pool boundaries in your pre-execution checklist to ensure that you are aware of the risks before entering a trade. For instance, if you’re trading ETHUSD, set boundaries based on recent price action and volatility metrics.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Pool",
          "definition": "The price range within which a position may be liquidated due to insufficient margin."
        }
      ],
      "whyThisMatters": "Accurately defining liquidation pool boundaries helps traders avoid unexpected liquidations and enhances risk management strategies.",
      "realLifeExample": "If trading LTCUSD with a margin of $2,000 and a leverage of 10x, your liquidation pool boundary might be set at $150, based on current market conditions and position size.",
      "commonMistake": "Failing to adjust liquidation pool boundaries according to changing market conditions can lead to unanticipated liquidations.",
      "quickNote": "Liquidation pool boundaries must be dynamic, adjusting with market conditions to prevent forced exits.",
      "mentorText": "When I set liquidation pool boundaries, I visualize a dam holding back a river. If the water rises too high, it breaches the dam, just like a price breach can trigger a liquidation.",
      "mentorAnalogy": "Think of liquidation pool boundaries as the floodgates of a reservoir. They must be monitored and adjusted to prevent overflow—just as you must manage your positions to prevent liquidation."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Evaluating Margin Call Risks",
    "label": "Forex Track",
    "body": "### Core Scenario: Evaluating Margin Call Risks\nEvaluating margin call risks is vital for traders using isolated margin accounts. This card explains **how to assess and mitigate these risks effectively**.\n\n* **Risk Assessment Metrics**: Calculate the margin call level by determining the equity-to-margin ratio. For instance, if your account equity is $1,500 with a margin requirement of $1,000, your ratio is 1.5, indicating a buffer against margin calls.\n* **Market Volatility Impact**: Monitor market volatility to anticipate potential margin calls. If the volatility index spikes, adjust your margin requirements accordingly to maintain a safe buffer.\n* **Pre-Execution Checklist Integration**: Incorporate margin call risk evaluations into your pre-execution checklist. For example, if trading XRPUSD, ensure your equity-to-margin ratio is above the threshold before entering a position.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for additional funds to cover potential losses."
        }
      ],
      "whyThisMatters": "Evaluating margin call risks helps traders maintain sufficient equity levels and avoid forced liquidations.",
      "realLifeExample": "In a scenario where you hold a position in ADAUSD with an equity of $2,000 and a margin requirement of $1,500, your margin call risk is low, but a sudden market drop could change that.",
      "commonMistake": "Traders often overlook the importance of monitoring their equity-to-margin ratio, leading to unexpected margin calls.",
      "quickNote": "Regularly evaluate your margin call risks to maintain a secure trading environment.",
      "mentorText": "Think of margin call risks like a safety inspection on a vehicle. If you don’t check the oil or brakes, you risk a breakdown on the road, just as ignoring your margin levels can lead to a margin call.",
      "mentorAnalogy": "Evaluating margin call risks is akin to a pilot conducting pre-flight checks. Each gauge must be monitored to ensure a safe flight, just as your margin levels must be assessed to avoid a margin call."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Impact of Leverage on Liquidation Risks",
    "label": "Forex Track",
    "body": "### Core Scenario: Impact of Leverage on Liquidation Risks\nUnderstanding how leverage affects liquidation risks is crucial for effective risk management. This card outlines **how to analyze and incorporate leverage into your pre-execution checklist**.\n\n* **Leverage Calculation**: Calculate the effective leverage by dividing the total position size by the margin used. For example, if you control a $10,000 position in BTCUSD with a $1,000 margin, your leverage is 10x.\n* **Liquidation Threshold**: Determine the liquidation threshold based on your leverage. Higher leverage increases the risk of liquidation; for instance, with 20x leverage, a 5% adverse move could trigger liquidation.\n* **Pre-Execution Checklist Considerations**: Include leverage assessments in your pre-execution checklist. If trading LINKUSD, ensure that your leverage aligns with your risk tolerance and market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Understanding leverage's impact on liquidation risks allows traders to make informed decisions and manage their risk exposure effectively.",
      "realLifeExample": "If you are trading SOLUSD with a leverage of 15x and a position size of $3,000, a price movement of just 6.67% against you could lead to liquidation, emphasizing the need for careful leverage management.",
      "commonMistake": "Traders often underestimate the risks associated with high leverage, leading to rapid liquidations during market fluctuations.",
      "quickNote": "Leverage amplifies both potential gains and risks; manage it wisely to avoid liquidation.",
      "mentorText": "Leverage is like a double-edged sword; it can amplify your gains but also your losses. Always assess how much risk you’re willing to take before swinging that sword.",
      "mentorAnalogy": "Think of leverage as a high-speed train. It can get you to your destination faster, but if you don’t manage the speed, you risk derailing the entire journey."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Setting Effective Margin Limits",
    "label": "Forex Track",
    "body": "### Core Scenario: Margin Limit Strategies\nEstablishing effective margin limits is critical to minimizing liquidation risks in volatile markets. This card teaches **how to set margin limits based on market conditions and risk tolerance**.\n\n* **Dynamic Margin Assessment**: Adjust margin limits based on real-time volatility indicators, such as the Average True Range (ATR), ensuring that limits reflect current market conditions.\n* **Risk Tolerance Calibration**: Define your risk tolerance in percentage terms (e.g., 1-2% of total capital per trade) and set margin limits accordingly to prevent over-leverage.\n* **Scenario-Based Adjustments**: Implement a checklist for adjusting margin limits before major economic announcements or market events, such as central bank meetings, to account for potential volatility spikes.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Limits",
          "definition": "The maximum amount of leverage a trader is willing to use in a trade."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market fluctuations."
        }
      ],
      "whyThisMatters": "Effective margin limits directly influence the sustainability of trading strategies, particularly in high-volatility environments.",
      "realLifeExample": "During the EUR/USD session on a day with an ATR of 50 pips, setting a margin limit of 1% would mean risking no more than 50 pips per trade, effectively managing liquidation risk.",
      "commonMistake": "Traders often set margin limits too high without considering market volatility, leading to increased liquidation risks.",
      "quickNote": "Dynamic margin limits based on volatility are essential for risk management.",
      "mentorText": "When I set margin limits, I always consider the current volatility. If the ATR is high, I tighten my limits to protect my capital.",
      "mentorAnalogy": "Think of margin limits like the safety margins in aerospace engineering; just as pilots adjust their flight paths based on weather conditions, traders must adjust their margin limits based on market volatility."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Analyzing Historical Liquidation Patterns",
    "label": "Forex Track",
    "body": "### Core Scenario: Liquidation Pattern Analysis\nUnderstanding historical liquidation patterns provides insight into potential future risks and informs your pre-execution checklist. This card teaches **how to analyze past liquidation events to enhance decision-making**.\n\n* **Data Mining Techniques**: Utilize historical data to identify past liquidation spikes, focusing on specific currency pairs like GBP/USD during high-impact news releases.\n* **Correlation with Market Events**: Analyze the correlation between liquidation events and market catalysts, such as economic data releases or geopolitical tensions, to forecast potential risks.\n* **Pattern Recognition**: Develop a checklist to recognize recurring patterns in liquidation events, such as sudden price drops following a major announcement, to prepare for similar scenarios in the future.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Patterns",
          "definition": "Trends or occurrences where traders are forced to close positions due to margin calls."
        },
        {
          "term": "Market Catalysts",
          "definition": "Events that can significantly impact market prices."
        }
      ],
      "whyThisMatters": "Analyzing historical liquidation patterns equips traders with the knowledge to anticipate and mitigate risks in their trading strategies.",
      "realLifeExample": "In March 2023, GBP/USD saw a liquidation spike of 300 pips following the release of unexpected inflation data, highlighting the need for pre-execution awareness.",
      "commonMistake": "Traders often overlook the significance of historical data, failing to incorporate past liquidation patterns into their risk assessments.",
      "quickNote": "Historical liquidation patterns can inform future risk management strategies.",
      "mentorText": "I always review past liquidation events before trading. Understanding how the market reacted to previous news helps me prepare for similar situations.",
      "mentorAnalogy": "Analyzing liquidation patterns is like studying past flight data in aviation; just as pilots learn from previous incidents to improve safety, traders must learn from past market behaviors."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "practice",
    "title": "Simulating Margin Scenarios",
    "label": "Forex Track",
    "body": "### Core Scenario: Margin Simulation Practice\nEngaging in simulated margin scenarios allows traders to apply their pre-execution checklist effectively. This card focuses on **identifying potential liquidation risks through practical exercises**.\n\n* **Scenario Creation**: Develop realistic trading scenarios based on historical volatility and margin limits, such as trading the AUD/USD during an RBA rate decision.\n* **Risk Assessment Exercises**: Conduct exercises to assess the impact of different margin limits on potential liquidation outcomes, using a range of leverage settings (e.g., 10x, 20x).\n* **Feedback Loop Implementation**: After simulations, analyze outcomes and adjust your checklist based on identified weaknesses or unexpected liquidation triggers.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Margin Scenarios",
          "definition": "Practice exercises that replicate trading conditions to assess risk management strategies."
        },
        {
          "term": "Feedback Loop",
          "definition": "A process of reviewing outcomes to improve future decision-making."
        }
      ],
      "whyThisMatters": "Simulating margin scenarios enhances traders' preparedness for real market conditions, reducing the likelihood of liquidation.",
      "realLifeExample": "In a simulation, a trader sets a 15x leverage on the AUD/USD during a volatile RBA announcement, resulting in a 200 pip liquidation risk, prompting a review of their margin limit strategy.",
      "commonMistake": "Traders often skip simulations, assuming they can manage risks without practical experience, leading to unexpected liquidations.",
      "quickNote": "Simulated scenarios are essential for refining risk management strategies.",
      "mentorText": "I recommend running simulations before entering real trades. They help you understand how different leverage levels can impact your risk exposure.",
      "mentorAnalogy": "Simulating margin scenarios is akin to a pilot conducting flight simulations; it prepares you for real-world conditions and helps you manage risks effectively."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario, you set a 20x leverage on the AUD/USD before an RBA announcement. What is your primary concern?",
      "options": [
        {
          "id": "0",
          "text": "The potential for high returns outweighs the risks.",
          "isCorrect": false,
          "feedback": "This mindset ignores the significant risks associated with high leverage."
        },
        {
          "id": "1",
          "text": "The risk of liquidation due to market volatility.",
          "isCorrect": true,
          "feedback": "High leverage increases the risk of liquidation, especially during volatile announcements."
        },
        {
          "id": "2",
          "text": "The market will likely move in your favor.",
          "isCorrect": false,
          "feedback": "Assuming market movement without considering volatility can lead to liquidation."
        },
        {
          "id": "3",
          "text": "You can easily adjust your margin limits later.",
          "isCorrect": false,
          "feedback": "Adjusting margin limits after entering a trade may not mitigate liquidation risks."
        }
      ]
    },
    "visualKey": "crypto-scenario-checklist"
  },
  {
    "type": "summary",
    "title": "Reviewing Forex-Specific Concepts",
    "label": "Forex Track",
    "body": "### Core Scenario: Forex Concept Review\nThis card summarizes key Forex-specific concepts essential for managing margin limits and liquidation risks. It reinforces **the importance of a structured approach to risk management**.\n\n* **Isolated Margin Limits**: Emphasize the necessity of setting isolated margin limits to protect capital during high-risk trades, particularly in volatile pairs like USD/JPY.\n* **Liquidation Pool Boundaries**: Understand the boundaries of liquidation pools and how they can shift based on market conditions, ensuring your checklist accounts for these dynamics.\n* **Pre-Execution Checklist Importance**: Reiterate the critical role of a pre-execution checklist in identifying potential risks and preparing for market events, ensuring a disciplined trading approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Isolated Margin Limits",
          "definition": "Margin limits that apply only to specific trades, protecting overall capital."
        },
        {
          "term": "Liquidation Pool Boundaries",
          "definition": "The thresholds at which positions are liquidated based on margin requirements."
        }
      ],
      "whyThisMatters": "A thorough understanding of these concepts is vital for maintaining capital and minimizing liquidation risks in Forex trading.",
      "realLifeExample": "In a volatile session, a trader using isolated margin limits on USD/JPY can prevent overall capital loss by limiting exposure to individual trades.",
      "commonMistake": "Traders often neglect to review their pre-execution checklist, leading to unpreparedness for market volatility.",
      "quickNote": "A structured approach to margin management is essential for Forex trading success.",
      "mentorText": "Always review your checklist before executing trades. It’s your safety net against unexpected market movements.",
      "mentorAnalogy": "Reviewing Forex concepts is like a surgeon checking instruments before an operation; thorough preparation is essential for success and safety."
    },
    "taskData": null,
    "visualKey": "crypto-scenario-checklist"
  }
];
