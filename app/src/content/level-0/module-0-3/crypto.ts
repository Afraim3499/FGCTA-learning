import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "concept",
    "title": "Introduction to Crypto Price Feeds",
    "label": "Crypto Track",
    "body": "### Introduction to Crypto Price Feeds\nCrypto price feeds are continuous streams of live data displaying the buying and selling prices of digital assets like Bitcoin (BTC) or Ethereum (ETH).\n\n* **Price Source**: Price feeds are aggregated from multiple centralized or decentralized exchanges, reflecting real-time transactions.\n* **Base vs Quote Asset**: In a pair like BTC/USDT, BTC is the base asset being priced, and USDT is the quote asset used to value it.\n* **24/7 Availability**: Unlike traditional markets, crypto price feeds run continuously without closing, meaning price wicks and gaps can form at any hour.",
    "context": {
      "keyTerms": [
        {
          "term": "Price Feed",
          "definition": "A real-time data stream of buy and sell prices for an asset."
        },
        {
          "term": "Base Asset",
          "definition": "The first asset in a trading pair, representing the currency being valued."
        }
      ],
      "whyThisMatters": "Understanding how crypto price feeds operate is the first step to reading price charts and executing trades.",
      "realLifeExample": "A live feed shows BTC/USDT trading at $60,000, meaning one Bitcoin is valued at 60,000 Tether dollars at this moment.",
      "commonMistake": "Beginners assume crypto markets close on weekends, missing major weekend volatility sweeps.",
      "quickNote": "Crypto price feeds never sleep; they run 24 hours a day, 7 days a week.",
      "mentorText": "Get used to watching the live feed ticker. In crypto, momentum can shift at 2:00 AM on a Sunday just as easily as 2:00 PM on a Tuesday."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Bids, Asks, and the Crypto Order Book",
    "label": "Crypto Track",
    "body": "### Bids, Asks, and the Crypto Order Book\nThe price you see on a crypto chart is determined by the interaction of buy and sell orders in the order book.\n\n* **Bid Price**: The highest price buyers are willing to pay for a cryptocurrency at this moment.\n* **Ask Price**: The lowest price sellers are willing to accept for that same cryptocurrency.\n* **Order Book**: A ledger of all resting buy (bid) and sell (ask) limit orders waiting to be executed.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid Price",
          "definition": "The maximum price a buyer is willing to pay."
        },
        {
          "term": "Ask Price",
          "definition": "The minimum price a seller is willing to accept."
        }
      ],
      "whyThisMatters": "Every execution interacts directly with the order book's bids and asks, determining your entry price.",
      "realLifeExample": "If you buy BTC immediately, your order fills at the current lowest ask price ($60,000.50), not the bid price ($60,000.00).",
      "commonMistake": "Expecting to buy at the bid price when executing a market order, resulting in an entry price slightly higher than expected.",
      "quickNote": "Bids are buyers, asks are sellers. The chart price sits between them.",
      "mentorText": "Always look at the order book depth. It shows you where large buy or sell walls are waiting, which acts as immediate support or resistance."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Understanding the Crypto Bid-Ask Spread",
    "label": "Crypto Track",
    "body": "### Understanding the Crypto Bid-Ask Spread\nThe bid-ask spread is the price difference between the highest bid and the lowest ask in the order book.\n\n* **Spread Calculation**: Spread = Ask Price - Bid Price. For example, if BTC ask is $60,000.10 and bid is $60,000.00, the spread is $0.10.\n* **Liquidity and Spread**: High-liquidity pairs like BTC/USDT have extremely tight spreads (cents), while low-liquidity coins have wide spreads (dollars).\n* **Volatility impact**: During sudden price surges or flushes, spreads can temporarily widen as market makers pull their resting orders.",
    "context": {
      "keyTerms": [
        {
          "term": "Bid-Ask Spread",
          "definition": "The difference between the bid and ask price of a trading pair."
        }
      ],
      "whyThisMatters": "The spread is an implicit transaction cost. A wider spread means you start your trade further in a temporary loss.",
      "realLifeExample": "On a major exchange, BTC/USDT has a spread of $0.05. On a smaller decentralized swap, a minor token might have a spread of $2.50, representing a high entry cost.",
      "commonMistake": "Trading illiquid crypto assets during high-volatility news events, leading to massive spread costs.",
      "quickNote": "Tight spreads indicate healthy, high-liquidity market environments.",
      "mentorText": "Before you click buy, glance at the spread. If the spread is too wide, it's a sign that liquidity is thin and slippage could be high."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Crypto Tick Size and Price Precision",
    "label": "Crypto Track",
    "body": "### Crypto Tick Size and Price Precision\nTick size is the minimum price increment by which a cryptocurrency's price can move on a specific venue.\n\n* **Tick Size Definition**: The smallest possible price change for a trading pair. On most major exchanges, BTC/USDT has a tick size of $0.01.\n* **Asset Scaling**: Higher-priced assets like BTC have tick sizes of $0.01 or $0.10, while low-priced altcoins can have tick sizes with many decimals (e.g., $0.000001).\n* **Order Placement**: You cannot place a limit order with a price increment smaller than the designated tick size.",
    "context": {
      "keyTerms": [
        {
          "term": "Tick Size",
          "definition": "The smallest increment of price movement allowed for an asset."
        }
      ],
      "whyThisMatters": "Tick sizes dictate price precision and impact how wicks and bodies are mapped on the chart.",
      "realLifeExample": "If BTC is at $60,000.01, the next tick up is $60,000.02. You cannot submit an order at $60,000.015.",
      "commonMistake": "Forgetting that altcoins require different decimal precisions, leading to rejected order submissions.",
      "quickNote": "Tick size ensures order books remain standardized and clean.",
      "mentorText": "Price precision is key. Understanding the minimum tick size prevents you from trying to place unfillable orders."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Market Spreads and Liquidity Variations",
    "label": "Crypto Track",
    "body": "### Market Spreads and Liquidity Variations\nCrypto spreads can vary between exchanges depending on the liquidity available at each venue.\n\n* **Exchange Liquidity**: Major exchanges with millions of active users have deep liquidity and tight spreads. Smaller platforms have thinner order books and wider spreads.\n* **Trading Volume**: High daily trading volume generally correlates with tighter, more consistent spreads.\n* **Feed Stability**: Stable exchanges provide smooth, uninterrupted price feeds, while smaller platforms can experience data lags or erratic price jumps.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Liquidity",
          "definition": "The ease with which an asset can be bought or sold without causing a significant price change."
        }
      ],
      "whyThisMatters": "Knowing where spreads are thinnest helps you select the best exchanges to execute your trades efficiently.",
      "realLifeExample": "During a BTC surge, Binance maintains a $0.10 spread, while a minor swap shows a $5.00 spread due to thin order books.",
      "commonMistake": "Trading on platforms with low volume, resulting in paying high spread costs on market execution.",
      "quickNote": "Higher trading volume leads to tighter spreads and better execution pricing."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "concept",
    "title": "Crypto Bid-Ask Spread Dynamics in Volatility",
    "label": "Crypto Track",
    "body": "### Crypto Bid-Ask Spread Dynamics in Volatility\nSpreads are not static; they expand and contract dynamically as market conditions shift.\n\n* **Volatility Expansion**: When BTC prices move rapidly in a few seconds, market makers pull their orders to avoid being filled at bad prices. This causes spreads to widen.\n* **Spread Normalization**: Once price action stabilizes, orders return to the book, and the spread narrows back to its default state.\n* **Execution Protection**: If you execute a market order during a volatility spike, the wide spread can lead to entering at a much worse price.",
    "context": {
      "whyThisMatters": "Anticipating spread expansion during high volatility protects you from unnecessary execution costs.",
      "realLifeExample": "Just before a major economic release, the spread on ETH/USDT widens from $0.02 to $0.80, then snaps back to $0.02 ten seconds later.",
      "commonMistake": "Executing market orders right as a major price move starts, buying at the peak of a widened spread."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "practice",
    "title": "Practical Analysis of Crypto Spreads",
    "label": "Crypto Track",
    "body": "### Practical Analysis of Crypto Spreads\nLet's apply spread calculations to real-time crypto order book feeds to reinforce your understanding of execution costs.\n\n* **Spread Identification**: Locate the highest bid and lowest ask in the order book.\n* **Implicit Cost calculation**: Calculate the spread to determine the immediate cost of executing a market buy.",
    "context": {
      "whyThisMatters": "Performing quick spread calculations ensures you can evaluate trading conditions before committing capital.",
      "realLifeExample": "An order book shows BTC highest bid at $60,000.00 and lowest ask at $60,000.50. The spread is $0.50.",
      "commonMistake": "Assuming spreads are negligible on all pairs, leading to unexpected losses on lower-volume altcoins."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You see a BTC order book showing a highest bid of $60,000.00 and a lowest ask of $60,000.50. What is the bid-ask spread?",
      "options": [
        {
          "id": "0",
          "text": "$0.50",
          "isCorrect": true,
          "feedback": "Correct! The spread is calculated as Ask ($60,000.50) - Bid ($60,000.00) = $0.50."
        },
        {
          "id": "1",
          "text": "$5.00",
          "isCorrect": false,
          "feedback": "Incorrect. Check your subtraction. $60,000.50 minus $60,000.00 is $0.50, not $5.00."
        },
        {
          "id": "2",
          "text": "$0.05",
          "isCorrect": false,
          "feedback": "Incorrect. The difference is 50 cents ($0.50), not 5 cents ($0.05)."
        },
        {
          "id": "3",
          "text": "$50.00",
          "isCorrect": false,
          "feedback": "Incorrect. The difference is 50 cents ($0.50), not 50 dollars ($50.00)."
        }
      ]
    },
    "visualKey": "crypto-cex-dex-fragmentation"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Price Feed Insights",
    "label": "Crypto Track",
    "body": "### Summary: Crypto Price Feed Insights\nUnderstanding how crypto price feeds, order books, and spreads interact is essential for trading digital assets safely.\n\n* **Price Feeds**: Real-time continuous streams running 24/7 without close.\n* **Order Books**: Interaction of bids (buyers) and asks (sellers) determines chart prices.\n* **Spreads**: The ask-minus-bid gap represents the entry cost and widens during high volatility.",
    "context": {
      "whyThisMatters": "Consolidating these concepts ensures you have the prerequisite knowledge to analyze candlestick structures in the next module."
    },
    "taskData": null,
    "visualKey": "crypto-cex-dex-fragmentation"
  }
];
