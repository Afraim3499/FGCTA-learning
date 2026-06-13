import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Analyzing Order Book Fragmentation in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C1 -->\n### Core Scenario: Order Book Fragmentation Analysis\nOrder book fragmentation occurs when liquidity is dispersed across multiple exchanges, affecting market depth and execution efficiency. This card outlines **how to identify and analyze fragmentation to optimize order routing**.\n\n* **Fragmentation Identification**: Assess the distribution of order book depth across various exchanges. Use tools like aggregated order book data to visualize liquidity concentration and identify where significant orders are placed.\n* **Impact on Execution**: Understand that fragmented liquidity can lead to increased slippage and longer execution times. Analyze historical execution data to quantify the effects of fragmentation on trade performance.\n* **Routing Strategies**: Develop routing algorithms that prioritize exchanges with higher liquidity for specific pairs. Implement a decision matrix that weighs factors like transaction fees, latency, and order book depth when selecting execution venues.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Fragmentation",
          "definition": "The dispersion of liquidity across multiple trading venues, impacting market depth."
        }
      ],
      "whyThisMatters": "Effective order routing in fragmented markets can significantly reduce execution costs and slippage.",
      "realLifeExample": "During a high volatility event, BTC trades at $60,000 on Exchange A with 100 BTC available, while Exchange B shows $60,200 with only 20 BTC. Analyzing these discrepancies can inform better execution strategies.",
      "commonMistake": "Failing to account for fragmentation can lead to suboptimal trade execution and increased costs.",
      "quickNote": "Fragmentation analysis is essential for optimizing order routing in crypto markets.",
      "mentorText": "When you see fragmentation in the order books, think of it like a crowded highway. You need to find the fastest lane to avoid delays in your trades.",
      "mentorAnalogy": "Navigating fragmented liquidity is akin to an air traffic controller managing multiple flight paths. Each decision impacts the efficiency of the entire system."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "concept",
    "title": "Evaluating Liquidity on Centralized Exchanges",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C2 -->\n### Core Scenario: Centralized Exchange Liquidity Evaluation\nCentralized exchanges (CEXs) typically offer higher liquidity than decentralized counterparts, but evaluating their liquidity profiles requires specific metrics. This card details **how to assess liquidity on CEXs for optimal order execution**.\n\n* **Order Book Depth Analysis**: Measure the total volume available at various price levels within the order book. A deeper order book indicates better liquidity, reducing slippage during large orders.\n* **Trade Volume Metrics**: Analyze the 24-hour trading volume for specific pairs. Higher volumes suggest greater liquidity and more efficient price discovery, which is crucial for executing larger trades.\n* **Market Maker Presence**: Identify the presence of market makers on the exchange. A robust market maker presence can enhance liquidity and reduce spreads, facilitating better execution outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Centralized Exchange (CEX)",
          "definition": "A trading platform that facilitates transactions through a central authority, typically offering higher liquidity."
        }
      ],
      "whyThisMatters": "Understanding liquidity profiles on CEXs allows for better execution strategies and reduced transaction costs.",
      "realLifeExample": "Analyzing Binance's BTC/USDT pair shows a 24-hour volume of 50,000 BTC with a tight spread of $0.05, indicating strong liquidity for large trades.",
      "commonMistake": "Overlooking the importance of order book depth can lead to unexpected slippage during execution.",
      "quickNote": "Centralized exchanges often provide superior liquidity profiles compared to decentralized ones.",
      "mentorText": "When evaluating a centralized exchange, focus on the order book depth and trade volume. These metrics will guide your execution strategy.",
      "mentorAnalogy": "Think of a centralized exchange like a well-stocked supermarket. The more items available, the easier it is to find what you need without delays."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "concept",
    "title": "Assessing Liquidity on Decentralized Exchanges",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C3 -->\n### Core Scenario: Decentralized Exchange Liquidity Assessment\nDecentralized exchanges (DEXs) operate differently than CEXs, often resulting in unique liquidity profiles. This card focuses on **how to evaluate liquidity on DEXs and the implications for trade execution**.\n\n* **Liquidity Pool Analysis**: Examine the size and depth of liquidity pools for specific trading pairs. Larger pools generally indicate better liquidity, reducing the risk of slippage.\n* **Slippage Metrics**: Calculate potential slippage based on the current order book and historical trade data. Assess how slippage varies with trade size to inform execution strategies.\n* **Token Pair Correlation**: Investigate the correlation between liquidity and token pairs. Some pairs may have significantly lower liquidity, impacting execution efficiency and costs.",
    "context": {
      "keyTerms": [
        {
          "term": "Decentralized Exchange (DEX)",
          "definition": "A trading platform that operates without a central authority, often relying on liquidity pools."
        }
      ],
      "whyThisMatters": "Understanding DEX liquidity is crucial for executing trades without incurring excessive slippage.",
      "realLifeExample": "On Uniswap, the ETH/DAI liquidity pool shows $1 million with a 0.3% fee structure, while a less popular pair like ETH/XYZ has only $50,000, indicating potential slippage risks.",
      "commonMistake": "Assuming DEXs always provide sufficient liquidity can lead to execution failures or adverse price impacts.",
      "quickNote": "Assessing liquidity on DEXs requires a focus on liquidity pools and slippage metrics.",
      "mentorText": "When trading on a DEX, always check the liquidity pools first. They dictate how smoothly your trades will execute.",
      "mentorAnalogy": "Navigating DEX liquidity is like selecting ingredients from a farmer's market. The availability of fresh produce can vary greatly, impacting your meal preparation."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "concept",
    "title": "Understanding Execution Slippage in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C4 -->\n### Core Scenario: Execution Slippage Analysis\nExecution slippage occurs when the executed price of a trade differs from the expected price, often due to market conditions. This card explores **the factors contributing to slippage and methods to measure its impact**.\n\n* **Market Volatility Assessment**: Monitor market volatility indicators, such as the Average True Range (ATR), to anticipate potential slippage. Higher volatility typically correlates with increased slippage risk.\n* **Order Size Impact**: Evaluate how the size of your order affects slippage. Larger orders may push the market price against you, leading to unfavorable execution prices.\n* **Timing of Execution**: Analyze the timing of your trades relative to market events. Executing trades during high-impact news releases can result in significant slippage due to rapid price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Slippage",
          "definition": "The difference between the expected price of a trade and the actual executed price."
        }
      ],
      "whyThisMatters": "Minimizing slippage is essential for maintaining profitability in trading strategies.",
      "realLifeExample": "If a trader places a market order for 10 BTC at $60,000 during a sudden market drop, the execution may occur at $60,500, resulting in $5,000 slippage.",
      "commonMistake": "Failing to account for slippage when planning trade sizes can lead to unexpected losses.",
      "quickNote": "Understanding slippage is vital for effective trade execution and profitability.",
      "mentorText": "Always factor in slippage when planning your trades. It can make a significant difference in your overall performance.",
      "mentorAnalogy": "Think of execution slippage like a car hitting a bump in the road. The faster you go, the more pronounced the impact, affecting your smooth ride."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "concept",
    "title": "Implications of Order Book Fragmentation",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C5 -->\n### Core Scenario: Order Book Fragmentation Effects\nOrder book fragmentation occurs when liquidity is dispersed across multiple exchanges, impacting execution quality. This card outlines **how fragmentation affects price discovery and slippage**.\n\n* **Liquidity Disparity**: Different exchanges may exhibit varying levels of liquidity for the same asset. A trader executing a market order for Bitcoin at $30,000 on Exchange A may face a 2% slippage due to low liquidity, while executing on Exchange B with deeper order books may yield only 0.5% slippage.\n* **Price Discrepancies**: Fragmentation can lead to price inconsistencies across venues. For instance, if Ethereum is priced at $2,000 on Exchange C and $2,050 on Exchange D, the trader must consider the cost of execution when selecting the venue.\n* **Execution Strategy Adaptation**: Traders must adapt their strategies to account for fragmentation. Utilizing limit orders on fragmented books can mitigate slippage, while market orders may exacerbate it, especially during volatile periods.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Fragmentation",
          "definition": "The distribution of liquidity across multiple exchanges, leading to varied execution conditions."
        }
      ],
      "whyThisMatters": "Understanding order book fragmentation is essential for optimizing execution strategies and minimizing slippage in crypto trading.",
      "realLifeExample": "During a high-volatility event, Bitcoin's price fluctuated between $29,800 and $30,200 across various exchanges, leading to significant slippage for market orders placed on less liquid venues.",
      "commonMistake": "Traders often underestimate the impact of slippage caused by order book fragmentation, leading to poor execution outcomes.",
      "quickNote": "Fragmentation can significantly affect execution quality and price consistency.",
      "mentorText": "When you see fragmentation, remember that not all exchanges are created equal. Choose wisely to minimize slippage and maximize your execution quality.",
      "mentorAnalogy": "Think of order book fragmentation like a crowded airport with multiple terminals. Each terminal (exchange) has different flight availability (liquidity), and choosing the right one can save you time and money."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "concept",
    "title": "Strategies for Cross-Exchange Arbitrage",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C6 -->\n### Core Scenario: Cross-Exchange Arbitrage Mechanics\nCross-exchange arbitrage exploits price discrepancies for the same asset across different exchanges. This card details **how to identify and execute arbitrage opportunities effectively**.\n\n* **Price Monitoring Tools**: Utilize real-time price tracking tools to identify discrepancies. For example, if Litecoin is trading at $150 on Exchange E and $155 on Exchange F, an arbitrage opportunity exists.\n* **Execution Timing**: Speed is critical; execute trades quickly to capitalize on fleeting opportunities. A delay of even seconds can eliminate potential profits due to price convergence.\n* **Transaction Costs Consideration**: Always factor in transaction fees and withdrawal limits. If transferring Litecoin incurs a $5 fee, the net profit from the arbitrage must exceed this cost to be viable.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Exchange Arbitrage",
          "definition": "The practice of buying an asset on one exchange and simultaneously selling it on another to profit from price differences."
        }
      ],
      "whyThisMatters": "Effective arbitrage strategies can significantly enhance profitability by leveraging inefficiencies in market pricing across exchanges.",
      "realLifeExample": "A trader identifies that Ripple (XRP) is priced at $0.90 on Exchange G and $0.95 on Exchange H. By buying 1,000 XRP on Exchange G and selling on Exchange H, the trader nets a profit of $50 after accounting for fees.",
      "commonMistake": "Failing to account for transaction fees can turn a seemingly profitable arbitrage opportunity into a loss.",
      "quickNote": "Identify and act on price discrepancies swiftly to profit from arbitrage.",
      "mentorText": "When you spot a price difference, don't hesitate. Execute quickly, but always calculate your costs to ensure you're truly making a profit.",
      "mentorAnalogy": "Arbitrage is like a race between two runners starting at different points. The one who can reach the finish line first, while managing their energy (costs), wins."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "practice",
    "title": "Practical Exercise on Crypto Liquidity Auditing",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C7 -->\n### Core Scenario: Liquidity Profile Audit\nEngage in a practical exercise to audit liquidity profiles across various exchanges. This task will enhance your ability to evaluate and optimize order execution.\n\n* **Select Exchanges**: Choose at least three centralized and two decentralized exchanges for your audit. Record the current liquidity levels for Bitcoin, Ethereum, and Litecoin.\n* **Analyze Order Books**: Examine the order books for each exchange. Note the bid-ask spreads and depth at different price levels to assess liquidity.\n* **Compile Findings**: Create a report summarizing your findings, highlighting which exchanges offer the best liquidity for each asset and under what conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Profile",
          "definition": "An assessment of the available liquidity for an asset across different exchanges."
        }
      ],
      "whyThisMatters": "Conducting a liquidity audit equips traders with the knowledge to make informed decisions about order execution and routing.",
      "realLifeExample": "After auditing liquidity on Binance, Coinbase, and Uniswap, a trader discovers that Binance consistently offers lower spreads for Ethereum, leading to optimized execution strategies.",
      "commonMistake": "Overlooking the importance of liquidity depth can lead to poor execution and increased slippage.",
      "quickNote": "Conducting a liquidity audit is essential for informed trading decisions.",
      "mentorText": "When you audit liquidity, think critically about where your trades will be executed. The right venue can save you from unnecessary costs.",
      "mentorAnalogy": "Auditing liquidity is akin to a chef selecting the freshest ingredients from different suppliers. The quality of your final dish (trade) depends on the quality of your inputs."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are auditing liquidity profiles for Bitcoin across three exchanges. Which factor is most critical to assess?",
      "options": [
        {
          "id": "0",
          "text": "The number of active users on each exchange",
          "isCorrect": false,
          "feedback": "While user activity can indicate popularity, it does not directly reflect liquidity."
        },
        {
          "id": "1",
          "text": "The bid-ask spread and order book depth",
          "isCorrect": true,
          "feedback": "Bid-ask spreads and order book depth are direct indicators of liquidity and execution quality."
        },
        {
          "id": "2",
          "text": "The historical price movements of Bitcoin",
          "isCorrect": false,
          "feedback": "Historical prices do not provide current liquidity conditions."
        },
        {
          "id": "3",
          "text": "The total number of cryptocurrencies listed on each exchange",
          "isCorrect": false,
          "feedback": "The number of listings does not correlate with liquidity for a specific asset."
        }
      ]
    },
    "visualKey": "multi-venue-auditor"
  },
  {
    "type": "summary",
    "title": "Crypto Track Summary of Liquidity Auditing",
    "label": "Crypto Track",
    "body": "<!-- M9.11-crypto-C8 -->\n### Core Scenario: Liquidity Auditing Recap\nThis card summarizes the key concepts learned regarding liquidity auditing in the Crypto Track. Understanding these principles is essential for optimizing trading execution.\n\n* **Order Book Fragmentation**: Recognize how liquidity is distributed across exchanges and its impact on execution quality. Fragmentation can lead to increased slippage and price discrepancies.\n* **Arbitrage Opportunities**: Identify and act on price differences across exchanges to leverage arbitrage strategies. Speed and cost analysis are critical for successful execution.\n* **Liquidity Auditing Techniques**: Employ systematic auditing techniques to evaluate liquidity profiles. Understanding the depth and spreads of order books is vital for informed trading decisions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Auditing",
          "definition": "The process of assessing liquidity profiles across exchanges to optimize order execution."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of liquidity auditing enhances a trader's ability to execute orders efficiently and profitably.",
      "realLifeExample": "A trader who applies liquidity auditing principles consistently achieves better execution prices and reduced slippage during volatile market conditions.",
      "commonMistake": "Neglecting to audit liquidity profiles can lead to missed opportunities and increased trading costs.",
      "quickNote": "Mastering liquidity auditing is crucial for effective crypto trading.",
      "mentorText": "Remember, liquidity is the lifeblood of trading. Audit it regularly to ensure you're making the best execution decisions.",
      "mentorAnalogy": "Think of liquidity auditing like a pilot checking fuel levels and weather conditions before takeoff. Proper preparation ensures a smooth flight (trade)."
    },
    "taskData": null,
    "visualKey": "multi-venue-auditor"
  }
];
