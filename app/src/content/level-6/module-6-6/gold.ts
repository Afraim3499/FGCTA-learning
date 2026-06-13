import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Timing Constraints in COMEX Developments",
    "label": "Gold Track",
    "body": "### Core Scenario: COMEX Opening Range Timing\nTiming constraints around the COMEX opening range are critical for executing gold trades effectively. This card outlines **how to establish time-based parameters for your trading strategy**.\n\n* **Opening Range Definition**: The opening range is defined as the high and low of the first 30 minutes of trading. This range sets the tone for potential price movements throughout the session.\n* **Time-Based Execution**: Execute trades within a defined time frame post-opening range. If price does not break the established range within the first hour, consider invalidating the plan.\n* **Impact of News Releases**: Be aware of scheduled news releases within the first hour of trading, as they can significantly alter price dynamics and invalidate previous plans.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Criteria for Expiring COMEX Plans",
    "label": "Gold Track",
    "body": "### Core Scenario: Expiration Criteria\nEstablishing clear criteria for expiring trading plans is essential for maintaining discipline in COMEX developments. This card details **specific time constraints that dictate plan expiration**.\n\n* **Time Window Assessment**: If the price fails to reach the target or invalidation point within a predetermined time frame (e.g., 60 minutes post-opening), the plan should be considered expired.\n* **Structural Interaction Check**: Evaluate whether structural interactions (e.g., support/resistance levels) have held or broken within the time frame. A failure to interact suggests a need for plan expiration.\n* **Market Conditions Review**: Regularly assess market conditions and volatility within the time window. If conditions change significantly, it may warrant an immediate expiration of the plan.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Identifying Time Signals in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Scenario: Time Signal Recognition\nRecognizing time signals is crucial for determining when to invalidate trading plans in gold. This card focuses on **how to identify misalignments with expected outcomes**.\n\n* **Price Action Analysis**: Monitor price action closely during the first hour after the COMEX open. If price fails to move in the expected direction (e.g., not breaking the opening range), consider invalidation.\n* **Volume Indicators**: Analyze volume spikes or drops within the time frame. A significant drop in volume during expected volatility can signal a lack of conviction, warranting plan expiration.\n* **Time-Based Alerts**: Set alerts for key time intervals (e.g., 30 minutes, 60 minutes) to prompt reassessment of the trading plan based on price behavior and market conditions.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Case Studies on COMEX Timing",
    "label": "Gold Track",
    "body": "### Core Scenario: Timing Case Studies\nExploring case studies provides insight into the successful application of timing constraints in COMEX developments. This card examines **real-world examples of timely decision-making**.\n\n* **Case Study 1**: On March 15, 2023, gold prices failed to break above $1,850 within the first hour after the COMEX open. Traders who expired their plans based on this timing constraint avoided a subsequent drop to $1,820.\n* **Case Study 2**: On April 10, 2023, a news release caused a spike in volatility. Traders who adjusted their plans within 30 minutes of the news were able to capitalize on a quick rally to $1,870, demonstrating the importance of timely execution.\n* **Lessons Learned**: Each case illustrates the necessity of adhering to time constraints for plan expiration, reinforcing the need for disciplined execution in volatile environments.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Strategies for Managing COMEX Timing",
    "label": "Gold Track",
    "body": "### Core Strategy: Timing Adaptation\nEffective timing management in gold trading is crucial for capitalizing on market movements. This card outlines **strategies to adapt to timing constraints imposed by COMEX developments**.\n\n* **Time Window Identification**: Establish specific time frames for key market events, such as economic reports or geopolitical developments, to align trading strategies with potential volatility.\n* **Dynamic Adjustment Protocols**: Implement protocols for adjusting positions based on real-time market data, ensuring that trades are executed within optimal time frames to mitigate risk.\n* **Risk Assessment Metrics**: Develop metrics to evaluate the impact of timing on trade performance, allowing for swift exits or adjustments when structural interactions fail to meet expectations.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Automating COMEX Timing Management",
    "label": "Gold Track",
    "body": "### Core Automation: Timing Efficiency\nAutomation tools can significantly enhance the management of timing constraints in gold trading. This card discusses **how to implement automation for effective timing management around COMEX developments**.\n\n* **Algorithmic Trading Systems**: Utilize algorithmic trading systems that automatically execute trades based on predefined timing criteria, reducing the need for manual intervention.\n* **Alert Systems**: Set up alert systems that notify traders of critical timing thresholds, ensuring timely responses to market changes without constant monitoring.\n* **Data Integration Tools**: Integrate data feeds that provide real-time updates on COMEX developments, allowing automated systems to adjust trading strategies based on the latest information.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Practical Application of COMEX Timing Constraints",
    "label": "Gold Track",
    "body": "### Core Practice: Timing Simulation\nEngaging in practical exercises is essential for mastering timing constraints in gold trading. This card provides **simulated scenarios to practice applying COMEX timing constraints**.\n\n* **Scenario Analysis**: Analyze historical COMEX events where timing played a critical role, identifying key decision points and outcomes based on timing constraints.\n* **Timed Execution Drills**: Participate in timed execution drills that simulate real market conditions, requiring traders to make decisions within specified time limits to reinforce timing discipline.\n* **Feedback Mechanisms**: Implement feedback mechanisms to evaluate performance during simulations, focusing on the effectiveness of timing decisions and adjustments made in response to market movements.",
    "taskData": {
      "type": "choice_block",
      "question": "During a COMEX session, you identify a significant price movement but have only 5 minutes to act before a scheduled report. What should you prioritize?",
      "options": [
        {
          "id": "0",
          "text": "Execute a market order immediately to capitalize on the movement.",
          "isCorrect": true,
          "feedback": "Executing a market order allows you to take advantage of the price movement before the report potentially alters market conditions."
        },
        {
          "id": "1",
          "text": "Wait for the report to be released before making any trades.",
          "isCorrect": false,
          "feedback": "Waiting for the report can result in missed opportunities, as the market may react quickly to the news."
        },
        {
          "id": "2",
          "text": "Adjust your stop-loss levels without executing a trade.",
          "isCorrect": false,
          "feedback": "Adjusting stop-loss levels without executing a trade does not capitalize on the current market movement."
        },
        {
          "id": "3",
          "text": "Consult with other traders before making a decision.",
          "isCorrect": false,
          "feedback": "Consulting with others can waste valuable time, leading to potential losses if the market moves against you."
        }
      ]
    },
    "visualKey": "time-invalidation-clocks"
  },
  {
    "type": "summary",
    "title": "Recap of COMEX Timing Constraints",
    "label": "Gold Track",
    "body": "### Core Summary: Timing Recap\nUnderstanding timing constraints is vital for effective gold trading around COMEX developments. This card summarizes **the key concepts related to timing management**.\n\n* **Critical Time Frames**: Recognize the importance of key time frames in the market, such as pre- and post-report periods, to optimize trading strategies.\n* **Adaptive Strategies**: Emphasize the need for adaptive strategies that allow for quick adjustments based on real-time market conditions and timing constraints.\n* **Automation Benefits**: Highlight the advantages of automation in managing timing, ensuring that traders can respond swiftly and efficiently to market changes.",
    "visualKey": "time-invalidation-clocks",
    "taskData": null
  }
];
