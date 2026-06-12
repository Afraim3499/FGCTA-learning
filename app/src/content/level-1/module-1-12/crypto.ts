import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Filtering Crypto Setups: Token Unlocks and Liquidations",
    "label": "Crypto Track",
    "body": "### Crypto Event Filtering: Token Unlocks and Liquidations\nCrypto markets are highly sensitive to scheduled events like token unlocks and liquidation cascades. This mission brief outlines **how to filter trading plans during these high-impact events**.\n\n* **Token Unlock Timing**: Identify the exact schedule of token unlocks for major cryptocurrencies. Avoid initiating trades within a 24-hour window surrounding these events to mitigate unexpected supply shocks.\n* **Protocol Upgrade Awareness**: Stay informed about upcoming protocol upgrades. Filter out setups that coincide with these events, as they often lead to unpredictable volatility.\n* **Derivative Liquidation Monitoring**: Use on-chain analytics to track derivative positions. Filter out trades when liquidation levels are reached, as these can trigger cascading effects.",
    "context": {
      "keyTerms": [
        {
          "term": "Token Unlock",
          "definition": "The release of previously locked tokens into circulation, potentially impacting supply and price."
        },
        {
          "term": "Protocol Upgrade",
          "definition": "A significant update to a blockchain's protocol, often affecting its functionality and security."
        },
        {
          "term": "Derivative Liquidation",
          "definition": "The forced closure of derivative positions due to margin calls, often leading to rapid price movements."
        }
      ],
      "whyThisMatters": "Filtering out trades during these events prevents exposure to unpredictable market dynamics and potential losses.",
      "realLifeExample": "A major token unlock for SOL is scheduled for 3 PM UTC. Traders should avoid entering new positions in SOL 12 hours before and after the event to avoid supply-driven price swings.",
      "commonMistake": "Traders often overlook the timing of token unlocks, leading to unexpected losses due to sudden increases in token supply.",
      "quickNote": "Always check the event calendar for token unlocks and protocol upgrades before trading.",
      "mentorText": "Think of these events like a scheduled maintenance on a major highway. You wouldn't plan a road trip during that time due to potential delays and detours.",
      "mentorAnalogy": "Just as an air traffic controller avoids scheduling flights during severe weather, traders must avoid trading during high-impact crypto events."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "concept",
    "title": "Impact of Token Unlocks on Crypto Markets",
    "label": "Crypto Track",
    "body": "### Token Unlocks: Market Dynamics and Trade Filtering\nToken unlock events can drastically alter market dynamics by increasing supply. This card explains **how to filter trades during these events**.\n\n* **Supply Shock Analysis**: Assess the percentage of total supply being unlocked. If it exceeds 5% of circulating supply, expect significant price impact and avoid trading.\n* **Market Sentiment Check**: Monitor social media and news outlets for sentiment shifts. Negative sentiment around unlocks often precedes sell-offs.\n* **Volume and Liquidity Monitoring**: Ensure liquidity levels remain stable post-unlock. Low liquidity can exacerbate price swings, making trading conditions unfavorable.",
    "context": {
      "keyTerms": [
        {
          "term": "Supply Shock",
          "definition": "A sudden increase in supply that can lead to price volatility."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors towards a particular market or asset."
        },
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding the impact of token unlocks helps traders avoid entering trades during periods of potential market disruption.",
      "realLifeExample": "During a token unlock event for UNI, the circulating supply increased by 10%. This led to a 15% drop in price within hours, catching unprepared traders off guard.",
      "commonMistake": "Ignoring the percentage of supply being unlocked, leading to trades executed in highly volatile conditions.",
      "quickNote": "Token unlocks can flood the market with supply, impacting prices significantly.",
      "mentorText": "Imagine a dam releasing water into a river. If you're downstream, you need to be aware of the surge to avoid being swept away.",
      "mentorAnalogy": "A chef must adjust recipes when a new batch of ingredients arrives, just as traders must adjust strategies for token unlocks."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "concept",
    "title": "Volatility During Protocol Upgrades",
    "label": "Crypto Track",
    "body": "### Protocol Upgrades: Managing Volatility\nMajor protocol upgrades can introduce significant volatility in crypto markets. This card outlines **how to manage and anticipate these changes**.\n\n* **Upgrade Timeline Assessment**: Confirm the exact timing and scope of the upgrade. Avoid trading during the 48-hour window surrounding the upgrade to prevent exposure to volatility.\n* **Technical Impact Evaluation**: Analyze the technical changes introduced by the upgrade. Changes in consensus mechanisms or transaction processing can affect market stability.\n* **Community and Developer Sentiment**: Gauge the sentiment of developers and the community. Positive sentiment can mitigate volatility, while negative sentiment can exacerbate it.",
    "context": {
      "keyTerms": [
        {
          "term": "Consensus Mechanism",
          "definition": "The protocol by which blockchain networks agree on a single state of the ledger."
        },
        {
          "term": "Technical Impact",
          "definition": "The effect of technical changes on the functionality and performance of a blockchain."
        },
        {
          "term": "Developer Sentiment",
          "definition": "The attitude and outlook of developers towards a blockchain's future and upgrades."
        }
      ],
      "whyThisMatters": "Anticipating volatility during upgrades allows traders to protect their positions and capitalize on post-upgrade stability.",
      "realLifeExample": "Ethereum's transition to Proof of Stake led to increased volatility as traders speculated on the impact of the upgrade.",
      "commonMistake": "Failing to account for the technical details of an upgrade, leading to unexpected market reactions.",
      "quickNote": "Protocol upgrades can be turbulent; plan trades around them carefully.",
      "mentorText": "Consider a protocol upgrade like a software update on your phone. You wouldn't perform critical tasks during the update due to potential disruptions.",
      "mentorAnalogy": "A pilot must adjust flight plans when new air traffic control systems are implemented, just as traders adjust for protocol upgrades."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "concept",
    "title": "Strategies for Derivative Liquidation Cascades",
    "label": "Crypto Track",
    "body": "### Derivative Liquidation Cascades: Trading Strategies\nDerivative liquidation cascades can cause rapid market movements. This card focuses on **strategies to filter noise and identify trends**.\n\n* **Liquidation Level Identification**: Use data analytics to pinpoint key liquidation levels. Avoid trading near these levels to prevent being caught in cascading sell-offs.\n* **Trend Confirmation Techniques**: Employ technical indicators like moving averages and RSI to confirm genuine trends post-liquidation. Avoid relying solely on price action during volatile periods.\n* **Risk Management Protocols**: Implement strict stop-loss and take-profit levels to safeguard against unexpected volatility during liquidation events.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Level",
          "definition": "The price point at which a trader's position is automatically closed due to insufficient margin."
        },
        {
          "term": "Cascading Sell-Off",
          "definition": "A rapid decline in asset prices triggered by successive liquidations."
        },
        {
          "term": "Trend Confirmation",
          "definition": "The process of using indicators to verify the strength and direction of a market trend."
        }
      ],
      "whyThisMatters": "Effective strategies during liquidation cascades help traders avoid losses and capitalize on post-cascade opportunities.",
      "realLifeExample": "A sudden drop in BTC price triggered a cascade of liquidations, wiping out $1 billion in positions. Traders who identified the trend reversal post-cascade profited.",
      "commonMistake": "Entering trades during a cascade without confirming trend reversals, leading to losses.",
      "quickNote": "Liquidation cascades are volatile; confirm trends before trading.",
      "mentorText": "Think of a liquidation cascade like a domino effect. You need to wait for the dust to settle before making your move.",
      "mentorAnalogy": "A firefighter waits for the building to stabilize before entering, just as traders wait for trends to stabilize post-cascade."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "concept",
    "title": "Managing Spread Expansions in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Managing Spread Expansions in Crypto Trading\nHigh-impact news events can cause significant spread expansions in crypto markets, impacting trade execution and profitability. This card explores techniques to manage these expansions effectively.\n\n* **Pre-Event Spread Analysis**: Calculate the average spread of the crypto pair during normal market conditions and compare it to the spread during the news event. A spread increase of more than 50% from the average should trigger a pause in trading.\n* **Volatility Buffer**: Implement a volatility buffer by setting wider stop-loss and take-profit levels during news events. This accounts for increased price swings and prevents premature stop-outs.\n* **Liquidity Provider Monitoring**: Monitor liquidity provider behavior. If liquidity dries up or becomes erratic, it signals potential execution risk, warranting a temporary trading halt.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Expansion",
          "definition": "The increase in the difference between the bid and ask price during volatile market conditions."
        }
      ],
      "whyThisMatters": "Managing spread expansions is crucial to protect trading capital from adverse execution during volatile news events.",
      "realLifeExample": "During a major Bitcoin ETF announcement, spreads on BTC/USD expanded from $10 to $50, causing slippage on trades executed without a volatility buffer.",
      "commonMistake": "Ignoring spread expansions during news events, leading to unexpected slippage and losses.",
      "quickNote": "Always assess spread changes before executing trades during news events.",
      "mentorText": "When spreads widen, it's like driving on a road with sudden potholes. You need to slow down and navigate carefully to avoid damage.",
      "mentorAnalogy": "Think of spread expansions like a sudden storm for a pilot. You need to adjust your flight path and speed to ensure a safe journey."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "concept",
    "title": "Confirming Crypto Trends Post-News",
    "label": "Crypto Track",
    "body": "### Confirming Crypto Trends Post-News\nAfter the initial impact of news events, confirming the true direction of crypto trends is essential for aligning trades with market sentiment.\n\n* **Post-Event Trend Analysis**: Wait for a 15-minute candle close post-news to confirm the trend direction. A close above or below key support/resistance levels indicates a potential trend continuation.\n* **Volume Confirmation**: Validate trend direction with volume analysis. A trend is more likely to sustain if accompanied by increasing volume, indicating strong market participation.\n* **Momentum Indicators**: Use momentum indicators like RSI or MACD to confirm trend strength. A divergence between price action and momentum suggests a potential reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Trend Confirmation",
          "definition": "The process of verifying the direction of a market trend after an event."
        }
      ],
      "whyThisMatters": "Confirming trends post-news ensures that trades are in sync with the actual market direction, reducing the risk of false breakouts.",
      "realLifeExample": "After a regulatory announcement, Ethereum's price initially spiked but confirmed a downtrend with a 15-minute close below $1,800 and increasing sell volume.",
      "commonMistake": "Rushing into trades immediately after news without waiting for trend confirmation, leading to false breakout entries.",
      "quickNote": "Wait for the dust to settle; confirm trends with volume and momentum.",
      "mentorText": "Think of post-news trading like waiting for the fog to clear before setting sail. You need clear visibility to navigate safely.",
      "mentorAnalogy": "Confirming trends post-news is like a surgeon waiting for vital signs to stabilize before proceeding with an operation."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Event Filtering",
    "label": "Crypto Track",
    "body": "### Practical Crypto Event Filtering\nEngage in practical exercises to apply crypto event filtering strategies in simulated market conditions, reinforcing learning.",
    "context": {
      "keyTerms": [
        {
          "term": "Event Filtering",
          "definition": "The process of excluding trading plans during high-impact events to avoid volatility."
        }
      ],
      "whyThisMatters": "Practical application of event filtering strategies enhances a trader's ability to manage risk effectively during volatile periods.",
      "realLifeExample": "Simulate trading during a major economic release affecting crypto markets, applying spread management and trend confirmation techniques.",
      "commonMistake": "Failing to simulate real-world conditions, leading to unpreparedness during actual market events.",
      "quickNote": "Practice makes precision; simulate before you execute.",
      "mentorText": "Think of this practice as a flight simulator for pilots. You need to experience turbulence in a controlled environment before facing it in the air.",
      "mentorAnalogy": "Practicing event filtering is like a chef perfecting a recipe in a test kitchen before serving it to guests."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated news event affecting BTC/USD, the spread widens significantly. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Pause trading and wait for spreads to normalize.",
          "isCorrect": true,
          "feedback": "Correct. Pausing trading during spread expansions protects against slippage."
        },
        {
          "id": "1",
          "text": "Continue trading as normal.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring spread expansions can lead to significant slippage."
        },
        {
          "id": "2",
          "text": "Increase position size to capitalize on volatility.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size during volatility increases risk."
        },
        {
          "id": "3",
          "text": "Close all open positions immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Closing positions without analysis can lead to unnecessary losses."
        }
      ]
    },
    "visualKey": "crypto-unlock-liquidation-filter"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Event Filtering",
    "label": "Crypto Track",
    "body": "### Summary of Crypto Event Filtering\nReview key strategies and concepts for filtering crypto trading plans during high-impact economic events, ensuring readiness for real-world trading.\n\n* **Spread Management**: Recognize and manage spread expansions to protect against slippage and execution risk.\n* **Trend Confirmation**: Use post-event analysis to confirm market trends, aligning trades with true market direction.\n* **Practical Application**: Engage in simulated exercises to reinforce the application of event filtering strategies under real-world conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Crypto Event Filtering",
          "definition": "The strategic exclusion of trading plans during high-impact events to manage volatility."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of event filtering equips traders to navigate volatile crypto markets with confidence and precision.",
      "realLifeExample": "A trader successfully navigates a volatile market by pausing trades during a major economic release and confirming trends before re-entering.",
      "commonMistake": "Overlooking the importance of event filtering, leading to unanticipated market exposure and losses.",
      "quickNote": "Filter and confirm before you commit.",
      "mentorText": "Think of event filtering as your market radar. It helps you detect and avoid storms before they hit your portfolio.",
      "mentorAnalogy": "Event filtering is like an architect reinforcing a building's foundation before a storm, ensuring it withstands the impact."
    },
    "taskData": null,
    "visualKey": "crypto-unlock-liquidation-filter"
  }
];
