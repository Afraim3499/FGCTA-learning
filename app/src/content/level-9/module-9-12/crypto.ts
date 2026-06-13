import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Configuring Multi-Monitor Setups",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C1 -->\n### Core Setup: Multi-Monitor Configuration\nA multi-monitor setup allows for simultaneous monitoring of various crypto markets, enhancing decision-making efficiency. This card outlines **how to optimally arrange monitors for maximum visibility**.\n\n* **Monitor Arrangement**: Position primary monitors at eye level for comfort, with secondary monitors angled for peripheral visibility. A typical configuration might include two 27-inch monitors side by side for charting and news feeds, with a third monitor above for order management.\n* **Dedicated Workspaces**: Assign specific tasks to each monitor. For example, use one monitor for live price feeds (e.g., Binance), another for chart analysis (e.g., TradingView), and a third for news aggregation (e.g., CoinDesk).\n* **Resolution and Scaling**: Ensure all monitors are set to the same resolution to avoid discrepancies in visual data. For instance, using three 1920x1080 monitors provides a consistent viewing experience across all screens.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Monitor Setup",
          "definition": "A workspace configuration using multiple screens to enhance monitoring capabilities."
        }
      ],
      "whyThisMatters": "An effective multi-monitor setup increases the trader's ability to analyze multiple data streams, reducing reaction time to market movements.",
      "realLifeExample": "During the ETH/USD trading session at 10 AM UTC, a trader uses a multi-monitor setup to track price action on Binance, analyze order book depth on Kraken, and monitor news updates on CoinTelegraph simultaneously.",
      "commonMistake": "Traders often neglect to calibrate monitor brightness and color settings, leading to visual strain and misinterpretation of data.",
      "quickNote": "Optimize monitor arrangement for enhanced visibility and task-specific organization.",
      "mentorText": "When I configured my multi-monitor setup, I ensured that each screen had a distinct purpose. This way, I could focus on live trades while keeping an eye on market news without losing sight of my charts.",
      "mentorAnalogy": "Think of your multi-monitor setup like an air traffic control tower; each screen is a radar displaying different aspects of the airspace, ensuring no critical information is missed."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "concept",
    "title": "Integrating CEX Order Books into Your Workspace",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C2 -->\n### Core Integration: CEX Order Books\nIntegrating centralized exchange (CEX) order books into your workspace provides real-time insights into market depth and liquidity. This card teaches **how to effectively display and utilize order book data**.\n\n* **Order Book Widgets**: Utilize widgets from exchanges like Binance or Coinbase Pro to display live order book data. Position these widgets prominently to ensure quick access to buy and sell orders.\n* **Depth Chart Analysis**: Incorporate a depth chart alongside the order book to visualize liquidity. This allows for quick assessment of support and resistance levels based on order clustering.\n* **Real-Time Updates**: Ensure that your order book integration updates in real-time to reflect the latest market conditions. For example, setting alerts for significant changes in the order book can help you react swiftly to market shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "CEX Order Book",
          "definition": "A digital list of buy and sell orders for a specific cryptocurrency on a centralized exchange."
        }
      ],
      "whyThisMatters": "Real-time order book data is essential for understanding market sentiment and liquidity, enabling more informed trading decisions.",
      "realLifeExample": "While trading BTC/USD on Binance at 3 PM UTC, a trader observes a sudden increase in sell orders on the order book, prompting a strategic exit from a long position.",
      "commonMistake": "Traders often overlook the importance of filtering order book data, leading to information overload and indecision.",
      "quickNote": "Integrate live CEX order books to enhance market depth analysis and liquidity awareness.",
      "mentorText": "Integrating the order book into my workspace was a game changer. I could see where the market was leaning, allowing me to make more informed decisions based on real-time data.",
      "mentorAnalogy": "Consider the order book like a restaurant menu; it shows what’s available and how much demand there is for each dish, helping you decide what to order based on current preferences."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "concept",
    "title": "Setting Up Glassnode Flows",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C3 -->\n### Core Setup: Glassnode Flows\nSetting up Glassnode flows in your workspace allows for effective tracking of on-chain data and market trends. This card outlines **how to incorporate on-chain metrics into your analysis**.\n\n* **Data Visualization**: Use Glassnode’s API to pull key on-chain metrics such as active addresses and transaction volume into your workspace. Display these metrics in a dedicated section for quick reference.\n* **Trend Analysis**: Analyze historical data trends by setting up charts that compare on-chain metrics against price movements. For instance, plotting active addresses against BTC price can reveal potential bullish or bearish signals.\n* **Alerts and Notifications**: Configure alerts for significant changes in on-chain metrics. For example, setting a notification for when active addresses increase by 20% can signal heightened market interest.",
    "context": {
      "keyTerms": [
        {
          "term": "Glassnode Flows",
          "definition": "On-chain data metrics provided by Glassnode that offer insights into cryptocurrency market trends."
        }
      ],
      "whyThisMatters": "On-chain data provides a deeper understanding of market dynamics, allowing traders to make data-driven decisions based on actual network activity.",
      "realLifeExample": "During a market rally at 4 PM UTC, a trader notices a spike in active addresses on Glassnode, indicating increased interest in ETH, prompting them to enter a long position.",
      "commonMistake": "Traders may ignore the context of on-chain data, misinterpreting spikes as signals without considering other market factors.",
      "quickNote": "Incorporate Glassnode flows to enhance your understanding of on-chain market dynamics.",
      "mentorText": "When I set up Glassnode flows, I could see the underlying activity driving price changes. It’s like having a backstage pass to the market, revealing what’s really happening beneath the surface.",
      "mentorAnalogy": "Think of Glassnode flows as a weather radar for trading; just as a radar shows incoming storms, these metrics reveal the underlying forces affecting market conditions."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "concept",
    "title": "Organizing Funding Rate Tables",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C4 -->\n### Core Organization: Funding Rate Tables\nOrganizing funding rate tables in your workspace is essential for monitoring costs associated with leveraged positions in crypto trading. This card details **how to effectively track funding rates**.\n\n* **Funding Rate Display**: Set up a dedicated table that lists current funding rates for various cryptocurrencies across exchanges. For example, include BTC, ETH, and ADA funding rates from Binance and Bitfinex for easy comparison.\n* **Historical Analysis**: Incorporate historical funding rate data to identify trends. For instance, tracking funding rate changes over the past month can help assess potential costs of holding leveraged positions.\n* **Alert System**: Create alerts for significant funding rate changes. For example, if the funding rate for BTC increases above 0.1%, set a notification to reassess your leveraged positions accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost associated with holding a leveraged position in cryptocurrency trading, often paid between long and short positions."
        }
      ],
      "whyThisMatters": "Monitoring funding rates is crucial for managing the costs of leveraged trading, which can significantly impact overall profitability.",
      "realLifeExample": "At 5 PM UTC, a trader notices that the funding rate for BTC on Binance has spiked to 0.15%, prompting them to close a leveraged long position to avoid excessive costs.",
      "commonMistake": "Traders frequently overlook funding rates, leading to unexpected costs that can erode profits from successful trades.",
      "quickNote": "Organize funding rate tables to effectively monitor and manage costs of leveraged positions.",
      "mentorText": "When I organized my funding rate tables, I could quickly see how much it would cost to hold my positions overnight. This visibility allowed me to make more informed decisions about my leverage.",
      "mentorAnalogy": "Think of funding rates like interest on a loan; just as you need to account for interest costs, you must monitor funding rates to ensure your trading strategy remains profitable."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "concept",
    "title": "Managing Crypto News Feeds",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C5 -->\n### Core Scenario: Effective News Feed Management\nStaying updated on crypto news is essential, but excessive information can lead to analysis paralysis. This card outlines **strategies to filter and prioritize news sources** effectively.\n\n* **Curated Source Selection**: Identify and subscribe to 3-5 reputable crypto news outlets, such as CoinDesk or The Block, to ensure quality over quantity. Avoid aggregators that may dilute critical information.\n* **Scheduled Review Times**: Allocate specific times during the trading day, such as 10:00 AM and 3:00 PM UTC, to review news updates. This prevents constant distractions and allows for focused trading periods.\n* **Alert System Configuration**: Set up alerts for significant market events or price movements using tools like CoinMarketCap or TradingView. Customize alerts to trigger only for major news that impacts your trading strategy, such as regulatory changes or major exchange hacks.",
    "context": {
      "keyTerms": [
        {
          "term": "Curated Sources",
          "definition": "Selected news outlets that provide reliable and relevant information."
        },
        {
          "term": "Scheduled Review",
          "definition": "Designated times to check news updates to minimize distractions."
        },
        {
          "term": "Alert System",
          "definition": "Notifications set up to inform traders of significant market events."
        }
      ],
      "whyThisMatters": "Managing news feeds effectively helps traders maintain focus and make informed decisions without succumbing to information overload.",
      "realLifeExample": "A trader sets alerts for Bitcoin price movements above 5% and reviews news from CoinDesk at 10:00 AM and 3:00 PM UTC, ensuring they stay informed without constant interruptions.",
      "commonMistake": "Many traders subscribe to too many news sources, leading to conflicting information and confusion.",
      "quickNote": "Prioritize quality news sources and set specific review times to manage information overload.",
      "mentorText": "Focus on a few trusted sources. Set your alerts wisely, and don’t let every headline dictate your trading decisions. Stick to your plan.",
      "mentorAnalogy": "Think of your news feed like an air traffic control system; you need clear, concise information to navigate safely without being overwhelmed by chatter."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "concept",
    "title": "Setting Up Portfolio Tracking Tools",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C6 -->\n### Core Scenario: Portfolio Monitoring Configuration\nEffective portfolio tracking is crucial for assessing performance and making informed trading decisions. This card covers **how to set up and utilize tracking tools** in your workspace.\n\n* **Tool Selection**: Choose robust portfolio tracking tools like Blockfolio or Delta that allow for real-time updates and performance analytics. Ensure they support the specific cryptocurrencies in your portfolio.\n* **Integration with Exchanges**: Connect your tracking tools directly to exchanges such as Binance or Coinbase to automatically update your holdings and transactions. This reduces manual entry errors and keeps data current.\n* **Performance Metrics Setup**: Configure key performance indicators (KPIs) such as ROI, daily performance, and asset allocation within your tracking tool. Regularly review these metrics to adjust your trading strategy as needed.",
    "context": {
      "keyTerms": [
        {
          "term": "Portfolio Tracking Tools",
          "definition": "Software applications used to monitor and analyze investment performance."
        },
        {
          "term": "Integration",
          "definition": "Linking tracking tools with exchanges for automatic updates."
        },
        {
          "term": "Performance Metrics",
          "definition": "Quantitative measures used to evaluate investment performance."
        }
      ],
      "whyThisMatters": "Setting up effective portfolio tracking tools allows traders to make data-driven decisions and optimize their investment strategies.",
      "realLifeExample": "A trader uses Delta to track their Ethereum and Litecoin holdings, automatically syncing with Binance to reflect real-time performance and calculate ROI daily.",
      "commonMistake": "Traders often neglect to integrate their tracking tools with exchanges, leading to outdated or inaccurate portfolio information.",
      "quickNote": "Utilize reliable tracking tools and integrate them with exchanges for accurate, real-time portfolio management.",
      "mentorText": "Your portfolio is your business. Use the right tools to keep track of every asset, and make sure you know how each one is performing at all times.",
      "mentorAnalogy": "Setting up portfolio tracking is like a pilot using a flight management system; it provides essential data to navigate the trading landscape effectively."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Workspace Setup",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C7 -->\n### Core Scenario: Workspace Configuration Exercise\nCreating an optimal workspace is critical for executing trades efficiently. This card presents a practical exercise to **apply workspace configuration principles**.\n\n* **Scenario Setup**: You are preparing for a live trading session. Design your workspace layout, ensuring that your trading platform, news feed, and portfolio tracker are easily accessible and visible.\n* **Tool Arrangement**: Arrange your screens or windows to prioritize real-time data. For instance, place your trading platform on the primary monitor, with news feeds and portfolio trackers on secondary screens.\n* **Distraction Minimization**: Identify potential distractions in your environment. Create a checklist to eliminate these distractions before starting your trading session, such as turning off non-essential notifications and setting your phone to Do Not Disturb mode.",
    "context": {
      "keyTerms": [
        {
          "term": "Workspace Configuration",
          "definition": "The arrangement of tools and resources in a trader's environment to optimize performance."
        },
        {
          "term": "Tool Arrangement",
          "definition": "The strategic placement of trading tools for efficient access."
        },
        {
          "term": "Distraction Minimization",
          "definition": "Techniques used to reduce interruptions during trading."
        }
      ],
      "whyThisMatters": "An optimized workspace enhances focus and execution speed, directly impacting trading performance.",
      "realLifeExample": "A trader sets up three monitors: the main screen for Binance, a secondary screen for CoinMarketCap, and a third for news updates, ensuring all critical information is visible at once.",
      "commonMistake": "Traders often overlook the physical arrangement of their workspace, leading to inefficient setups that hinder performance.",
      "quickNote": "Design your workspace to prioritize visibility and minimize distractions for optimal trading execution.",
      "mentorText": "Your workspace is your command center. Arrange it to ensure you have everything you need at your fingertips. Eliminate distractions before you start.",
      "mentorAnalogy": "Think of your trading workspace like a surgeon's operating room; every tool must be within reach, and the environment must be free of distractions to ensure precision."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are setting up your trading workspace. Which arrangement maximizes efficiency?",
      "options": [
        {
          "id": "0",
          "text": "Place the trading platform on the main screen and news feeds on secondary screens.",
          "isCorrect": true,
          "feedback": "This arrangement prioritizes real-time trading data while keeping news updates accessible."
        },
        {
          "id": "1",
          "text": "Use a single monitor for all tools, stacking them vertically.",
          "isCorrect": false,
          "feedback": "This setup can lead to confusion and delays in accessing critical information."
        },
        {
          "id": "2",
          "text": "Keep all notifications on to stay updated on various platforms.",
          "isCorrect": false,
          "feedback": "Constant notifications can distract you from focusing on trading tasks."
        },
        {
          "id": "3",
          "text": "Arrange tools randomly across multiple screens.",
          "isCorrect": false,
          "feedback": "A random arrangement hinders quick access to important tools and data."
        }
      ]
    },
    "visualKey": "desk-setup-diagram"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Workspace Strategies",
    "label": "Crypto Track",
    "body": "<!-- M9.12-crypto-C8 -->\n### Core Scenario: Recap of Workspace Configuration\nA distraction-free workspace is vital for effective trading execution. This card summarizes **key strategies for optimizing your crypto trading environment**.\n\n* **Focused News Management**: Limit news sources to a select few and schedule dedicated review times to avoid information overload. Set alerts for critical updates to stay informed without distraction.\n* **Robust Portfolio Tracking**: Utilize integrated portfolio tracking tools to monitor investments in real-time. Regularly assess performance metrics to inform trading decisions and strategy adjustments.\n* **Optimal Workspace Layout**: Design your workspace for efficiency by prioritizing the arrangement of tools. Minimize distractions by creating a checklist to ensure a focused trading environment.",
    "context": {
      "keyTerms": [
        {
          "term": "Distraction-Free Workspace",
          "definition": "An environment designed to minimize interruptions during trading."
        },
        {
          "term": "Workspace Optimization",
          "definition": "The process of arranging tools and resources for maximum efficiency."
        },
        {
          "term": "Real-Time Data Management",
          "definition": "The ability to access and utilize current market information instantly."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of a well-configured workspace for achieving trading success.",
      "realLifeExample": "A trader implements all strategies: they limit news sources, use Delta for tracking, and arrange their workspace with three monitors for maximum efficiency.",
      "commonMistake": "Failing to regularly review and adjust workspace configurations can lead to inefficiencies and missed trading opportunities.",
      "quickNote": "Implement focused news management, robust tracking, and optimal layout for a distraction-free trading experience.",
      "mentorText": "Review these strategies regularly. Your workspace is your foundation; ensure it supports your trading goals without distractions.",
      "mentorAnalogy": "Consider your trading workspace like a well-designed cockpit; every instrument must be in the right place for optimal performance and safety."
    },
    "taskData": null,
    "visualKey": "desk-setup-diagram"
  }
];
