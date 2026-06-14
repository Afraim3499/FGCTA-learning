import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Gold Price Feeds",
    "label": "Gold Track",
    "body": "### Introduction to Gold Price Feeds\nGold price feeds are live streams of data displaying the buying and selling prices of gold in international markets, typically quoted as XAU/USD (Ounce of Gold in US Dollars).\n\n* **Asset Quote**: XAU/USD represents the price of one troy ounce of gold in U.S. dollars.\n* **COMEX Reference**: The Commodity Exchange (COMEX) gold futures market serves as the primary price benchmark for global gold trading.\n* **Volatility Catalysts**: Gold prices are highly sensitive to global economic changes, central bank announcements, and interest rate shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "XAU/USD",
          "definition": "The financial ticker representing the price of gold per troy ounce in U.S. dollars."
        },
        {
          "term": "COMEX",
          "definition": "The Commodity Exchange, the primary futures exchange where gold contracts are traded."
        }
      ],
      "whyThisMatters": "Understanding the XAU/USD quote is essential for tracking gold price movements and establishing market value.",
      "realLifeExample": "A live feed shows XAU/USD at $1,850.00, meaning one ounce of gold costs 1,850 U.S. dollars.",
      "commonMistake": "Confounding the troy ounce (used for gold pricing) with a standard ounce, which has different weight specifications.",
      "quickNote": "COMEX futures prices are the global standard for pricing physical and paper gold."
    },
    "taskData": null,
    "visualKey": "gold-comex-futures-feeds"
  },
  {
    "type": "concept",
    "title": "Gold Bids, Asks, and Spreads",
    "label": "Gold Track",
    "body": "### Gold Bids, Asks, and Spreads\nTrading gold involves executing orders at prices determined by the bid-ask spread in the gold order book.\n\n* **Bid Price**: The highest price buyers are currently offering for XAU/USD.\n* **Ask Price**: The lowest price sellers are currently demanding for XAU/USD.\n* **Spread**: The difference between the ask price and bid price, representing the immediate cost of entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid Price",
          "definition": "The highest price a buyer is willing to pay for gold."
        },
        {
          "term": "Ask Price",
          "definition": "The lowest price a seller is willing to accept for gold."
        }
      ],
      "whyThisMatters": "Knowing bids and asks is critical for calculating entry costs and avoiding execution slippage.",
      "realLifeExample": "If the bid is $1,850.00 and the ask is $1,850.30, you pay $1,850.30 to buy gold immediately via a market order.",
      "commonMistake": "Expecting to buy gold at the bid price when executing an immediate buy, which results in entering at the ask price.",
      "quickNote": "The spread on XAU/USD is usually tight during liquid hours, but widens during news releases."
    },
    "taskData": null,
    "visualKey": "gold-comex-futures-feeds"
  },
  {
    "type": "concept",
    "title": "Gold Tick Size and Contract Multipliers",
    "label": "Gold Track",
    "body": "### Gold Tick Size and Contract Multipliers\nTick size is the minimum increment by which the gold price can move, which affects order placement and price charting.\n\n* **COMEX Tick Size**: The minimum tick size for COMEX gold futures is $0.10 per ounce, representing a $10.00 value per standard contract (100 oz).\n* **Retail Spread Pricing**: Retail brokers often quote gold to two decimals (e.g., $1,850.05), allowing price increments of $0.01.\n* **Standard Contract Sizing**: One standard gold futures contract represents 100 troy ounces of gold.",
    "context": {
      "keyTerms": [
        {
          "term": "Tick Size",
          "definition": "The minimum allowed price movement of a trading instrument."
        }
      ],
      "whyThisMatters": "Calculating tick size and contract value allows you to set precise stop-loss and take-profit targets.",
      "realLifeExample": "If gold moves from $1,850.00 to $1,850.10, it has moved exactly one COMEX tick ($0.10).",
      "commonMistake": "Miscalculating position value by forgetting that one standard lot represents 100 ounces, resulting in excessive risk."
    },
    "taskData": null,
    "visualKey": "gold-comex-futures-feeds"
  },
  {
    "type": "concept",
    "title": "Macro Factors Impacting Gold Price Feeds",
    "label": "Gold Track",
    "body": "### Macro Factors Impacting Gold Price Feeds\nGold prices are highly reactive to macroeconomic events, which shape price feed trends and volatility.\n\n* **Interest Rates**: Gold has an inverse relationship with interest rates; rising rates increase the opportunity cost of holding gold, often driving prices down.\n* **US Dollar Index (DXY)**: Gold is typically priced in USD, meaning a stronger Dollar often pushes gold prices lower, and a weaker Dollar pushes them higher.\n* **Safe-Haven Demand**: During periods of geopolitical uncertainty or high inflation, investor demand for gold rises, driving prices up.",
    "context": {
      "keyTerms": [
        {
          "term": "Safe-Haven Asset",
          "definition": "An asset that is expected to retain or increase in value during times of market turbulence."
        }
      ],
      "whyThisMatters": "Understanding these macro drivers helps you anticipate major trends and avoid entering during high-risk news events.",
      "realLifeExample": "Following an announcement of interest rate hikes by the Federal Reserve, the gold price feed experiences a sharp downward swing.",
      "commonMistake": "Trading gold during major news releases without adjusting risk parameters, leading to severe slippage."
    },
    "taskData": null,
    "visualKey": "gold-comex-futures-feeds"
  },
  {
    "type": "concept",
    "title": "Gold Liquidity Pools and Spreads",
    "label": "Gold Track",
    "body": "### Gold Liquidity Pools and Spreads\nLiquidity in the gold market fluctuates dynamically throughout the trading day, directly impacting spreads.\n\n* **London and NY Session Peak**: Liquidity is highest during the London and New York session overlap, when spreads are thinnest.\n* **Off-Peak Spreads**: During the Asian session, lower trading volume can lead to wider spreads and slower price movement.\n* **Order Execution**: Liquid markets ensure that market orders are filled with minimal slippage."
  },
  {
    "type": "concept",
    "title": "Introduction to Gold Spreads and Volatility",
    "label": "Gold Track",
    "body": "### Introduction to Gold Spreads and Volatility\nVolatile market events cause spreads to expand and contract dynamically.\n\n* **Spread Expansion**: When high-impact news is released, market makers pull their orders, widening the spread to protect themselves from rapid price movements.\n* **Safe Trading Rules**: Avoid entering trades with market orders during these spread expansions, as the exit/entry prices will be less favorable.\n* **Limit Orders**: Utilizing limit orders protects you from buying at unfavorable prices during spread spikes."
  },
  {
    "type": "practice",
    "title": "Practical Analysis of Gold Spreads",
    "label": "Gold Track",
    "body": "### Practical Analysis of Gold Spreads\nLet's apply spread calculations to real-time gold price feeds to ensure you can evaluate transaction costs accurately.\n\n* **Spread Identification**: Locate the current bid and ask prices on the feed.\n* **Cost Calculation**: Calculate the difference to determine the spread value.",
    "context": {
      "whyThisMatters": "Calculating spreads ensures you can identify whether current conditions are suitable for trade execution.",
      "realLifeExample": "A price feed shows XAU/USD bid at $1,850.00 and ask at $1,850.30. The spread is $0.30."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You see a gold price feed showing XAU/USD bidding at $1,850.00 and asking at $1,850.30. What is the bid-ask spread?",
      "options": [
        {
          "id": "0",
          "text": "$0.30",
          "isCorrect": true,
          "feedback": "Correct! The spread is calculated as Ask ($1,850.30) - Bid ($1,850.00) = $0.30."
        },
        {
          "id": "1",
          "text": "$3.00",
          "isCorrect": false,
          "feedback": "Incorrect. Check your math. $1,850.30 minus $1,850.00 is 30 cents ($0.30), not 3 dollars ($3.00)."
        },
        {
          "id": "2",
          "text": "$0.03",
          "isCorrect": false,
          "feedback": "Incorrect. The difference is 30 cents ($0.30), not 3 cents ($0.03)."
        },
        {
          "id": "3",
          "text": "$30.00",
          "isCorrect": false,
          "feedback": "Incorrect. The difference is 30 cents ($0.30), not 30 dollars ($30.00)."
        }
      ]
    },
    "visualKey": "gold-comex-futures-feeds"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Price Feed Concepts",
    "label": "Gold Track",
    "body": "### Summary: Gold Price Feed Concepts\nUnderstanding XAU/USD quotes, bids, asks, and how spreads react to liquidity is crucial for gold trading.\n\n* **XAU/USD Quote**: The price of one ounce of gold in U.S. dollars.\n* **Bids and Asks**: Buy/sell levels in the book that determine execution.\n* **Spread Costs**: The ask-bid gap which fluctuates based on sessions and economic data.",
    "context": {
      "whyThisMatters": "Consolidating these concepts prepares you to analyze gold candlestick patterns and wicks in the next module."
    },
    "taskData": null,
    "visualKey": "gold-comex-futures-feeds"
  }
];
