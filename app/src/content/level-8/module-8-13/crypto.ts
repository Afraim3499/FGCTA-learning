import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Comprehensive Audit of Crypto Performance",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C1 -->\n### Core Audit: Crypto Performance Metrics\nConducting a comprehensive audit of crypto performance requires a meticulous examination of on-chain flows, Total Value Locked (TVL) shifts, and perpetual funding rates. This card outlines **the structured approach to evaluate these metrics effectively**.\n\n* **On-Chain Flow Analysis**: Utilize Glassnode data to assess the inflow and outflow of assets across various blockchains. A significant increase in inflows may indicate bullish sentiment, while outflows can signal profit-taking or bearish trends.\n* **Total Value Locked (TVL) Evaluation**: Monitor TVL across DeFi protocols to gauge market confidence. A rising TVL suggests increased liquidity and user engagement, whereas a declining TVL may indicate waning interest or liquidity issues.\n* **Perpetual Funding Rate Assessment**: Analyze the perpetual funding rates to identify potential drag on performance. A consistently high funding rate may indicate over-leveraged long positions, suggesting a possible market correction.\n",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Flows",
          "definition": "The movement of assets on a blockchain, indicating investor behavior."
        },
        {
          "term": "Total Value Locked (TVL)",
          "definition": "The total capital held within a DeFi protocol."
        },
        {
          "term": "Perpetual Funding Rate",
          "definition": "The periodic fee exchanged between long and short positions in perpetual contracts."
        }
      ],
      "whyThisMatters": "A thorough audit of these metrics provides insights into market dynamics and trader sentiment, essential for informed decision-making.",
      "realLifeExample": "Analyzing Ethereum's on-chain flows revealed a 15% increase in inflows during a price rally, indicating strong bullish sentiment at the NY session open.",
      "commonMistake": "Failing to correlate TVL shifts with market events can lead to misinterpretation of liquidity trends.",
      "quickNote": "Audit crypto performance by analyzing on-chain flows, TVL, and funding rates.",
      "mentorText": "When you assess crypto performance, think of it as examining the health of a living organism. Each metric tells you something about its vitality and potential future.",
      "mentorAnalogy": "Conducting a crypto performance audit is like a doctor performing a comprehensive health check-up, where each metric is a vital sign indicating the overall condition."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Deep Dive into On-Chain Flow Analysis",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C2 -->\n### Core Analysis: On-Chain Flows\nOn-chain flow analysis provides crucial insights into market trends and investor behavior by tracking the movement of assets. This card teaches **how to interpret Glassnode data effectively**.\n\n* **Flow Directionality**: Distinguish between inflows and outflows to identify market sentiment. A net positive flow indicates accumulation, while a net negative flow suggests distribution.\n* **Volume Metrics**: Analyze the volume of transactions alongside flow data to assess the strength of market movements. High transaction volumes accompanying inflows can validate bullish trends.\n* **Address Activity**: Monitor active addresses to gauge user engagement. An increase in unique active addresses often correlates with rising interest and potential price appreciation.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Inflows",
          "definition": "The movement of assets into a blockchain or exchange."
        },
        {
          "term": "Outflows",
          "definition": "The movement of assets out of a blockchain or exchange."
        },
        {
          "term": "Active Addresses",
          "definition": "Unique wallet addresses that have conducted transactions within a specific timeframe."
        }
      ],
      "whyThisMatters": "Understanding on-chain flows allows traders to anticipate market movements based on actual asset movements rather than speculative sentiment.",
      "realLifeExample": "During a recent market correction, Bitcoin saw a significant outflow of 20,000 BTC from exchanges, indicating profit-taking behavior among investors.",
      "commonMistake": "Overlooking the context of flow data can lead to misinterpretation; for example, high outflows may not always indicate bearish sentiment if tied to specific events.",
      "quickNote": "On-chain flow analysis reveals market sentiment through asset movement.",
      "mentorText": "Think of on-chain flow analysis as reading the pulse of the market. Each inflow and outflow tells you whether investors are feeling bullish or bearish.",
      "mentorAnalogy": "Analyzing on-chain flows is akin to a detective examining footprints at a crime scene, where each footprint provides clues about the movements and intentions of individuals."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Understanding Total Value Locked (TVL) Shifts",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C3 -->\n### Core Concept: Total Value Locked (TVL)\nTotal Value Locked (TVL) is a critical metric in DeFi that reflects the total capital held within protocols. This card explores **how shifts in TVL can indicate market confidence and liquidity**.\n\n* **TVL Growth Indicators**: A consistent increase in TVL across protocols suggests growing confidence in DeFi platforms. Monitor major protocols like Uniswap and Aave for significant changes in their TVL.\n* **Market Correlation**: Analyze the correlation between TVL shifts and price movements. A rising TVL often precedes price increases, indicating that more capital is being committed to the market.\n* **Liquidity Assessment**: Evaluate the liquidity available in the market by observing TVL alongside trading volumes. High TVL with low trading volume may indicate trapped liquidity, while high TVL with high volume suggests active trading conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "DeFi",
          "definition": "Decentralized finance, a sector of finance using blockchain technology."
        },
        {
          "term": "Liquidity",
          "definition": "The availability of assets to be traded without causing significant price changes."
        },
        {
          "term": "Market Confidence",
          "definition": "The overall sentiment of investors regarding the stability and potential of the market."
        }
      ],
      "whyThisMatters": "TVL shifts provide insights into the health of DeFi ecosystems, influencing trading strategies and investment decisions.",
      "realLifeExample": "Aave's TVL surged by 30% over two weeks, coinciding with a 25% price increase in Ethereum, indicating strong market confidence.",
      "commonMistake": "Assuming that a high TVL guarantees price appreciation; market conditions can still lead to declines despite high liquidity.",
      "quickNote": "TVL shifts indicate market confidence and liquidity in DeFi.",
      "mentorText": "When assessing TVL, think of it as a barometer for market health. A rising barometer often means good weather ahead for traders.",
      "mentorAnalogy": "Understanding TVL shifts is like a gardener monitoring soil moisture; too little moisture indicates drought, while too much can lead to rot. Both extremes can affect plant health."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Analyzing Perpetual Funding Drag",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C4 -->\n### Core Analysis: Perpetual Funding Drag\nPerpetual funding drag can significantly impact traders' profitability in the crypto market. This card focuses on **how to analyze and mitigate the effects of funding rates**.\n\n* **Funding Rate Calculation**: Understand how funding rates are calculated and their implications on long and short positions. A positive funding rate means long positions pay shorts, which can erode profits if sustained.\n* **Market Sentiment Reflection**: Use funding rates as a sentiment gauge; high funding rates often indicate over-leveraged positions, which can lead to sharp corrections. Monitor these rates closely during volatile market conditions.\n* **Position Management**: Implement strategies to manage exposure based on funding rates. Consider reducing position sizes or utilizing stop-loss orders when funding rates are excessively high to protect profits.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The fee exchanged between long and short positions in perpetual contracts."
        },
        {
          "term": "Long Position",
          "definition": "A trade that profits from an increase in asset price."
        },
        {
          "term": "Short Position",
          "definition": "A trade that profits from a decrease in asset price."
        }
      ],
      "whyThisMatters": "Understanding perpetual funding drag is essential for managing risk and optimizing profitability in leveraged trading environments.",
      "realLifeExample": "During a recent bull run, Bitcoin's funding rate reached 0.1% per 8 hours, leading many long positions to incur significant costs, ultimately affecting their profitability.",
      "commonMistake": "Ignoring funding rates can lead to unexpected losses, particularly during market corrections when funding costs can spike.",
      "quickNote": "Analyze perpetual funding drag to manage risk and optimize trading profitability.",
      "mentorText": "Think of funding rates as the cost of doing business in the crypto market. If the cost rises too high, it can eat into your profits, just like high operating costs can impact a company's bottom line.",
      "mentorAnalogy": "Analyzing perpetual funding drag is like a pilot calculating fuel costs for a flight; if fuel prices spike, it can significantly impact the overall cost and profitability of the journey."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Key Indicators of On-Chain Flows",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C5 -->\n### Core Scenario: Identifying On-Chain Flow Indicators\nOn-chain flows provide insights into market sentiment and potential price movements. This card details **key metrics for assessing significant changes in on-chain activity**.\n\n* **Net Transfer Volume**: Analyze the difference between total inflows and outflows across wallets. A sudden increase in net inflows, for instance, from 1,000 BTC to 5,000 BTC in a 24-hour period can indicate bullish sentiment.\n* **Active Addresses**: Monitor the number of unique addresses participating in transactions. A spike from 10,000 to 50,000 active addresses in a week suggests heightened interest and potential price volatility.\n* **Exchange Inflows/Outflows**: Track the volume of assets moving to and from exchanges. For example, if 2,000 ETH flows into exchanges during a price drop, it may signal impending selling pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Net Transfer Volume",
          "definition": "The difference between total cryptocurrency inflows and outflows."
        },
        {
          "term": "Active Addresses",
          "definition": "The count of unique addresses involved in transactions over a specific period."
        },
        {
          "term": "Exchange Inflows/Outflows",
          "definition": "The volume of cryptocurrency transferred to and from exchanges."
        }
      ],
      "whyThisMatters": "Understanding these indicators allows traders to anticipate market shifts based on on-chain behavior.",
      "realLifeExample": "On April 15, 2023, Bitcoin saw a net transfer volume increase from 1,200 BTC to 6,000 BTC, coinciding with a price rally from $40,000 to $45,000.",
      "commonMistake": "Traders often overlook the context of on-chain metrics, misinterpreting normal fluctuations as signals.",
      "quickNote": "Key indicators of on-chain flows include net transfer volume, active addresses, and exchange inflows/outflows.",
      "mentorText": "When you see a surge in net transfers, it’s not just numbers; it’s a signal that traders are moving assets, which can lead to price shifts. Pay attention to these flows.",
      "mentorAnalogy": "Think of on-chain flows like traffic patterns in a city. A sudden influx of cars (net inflows) can indicate an event causing congestion (price movement)."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Evaluating Exchange Activity and Its Impact",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C6 -->\n### Core Scenario: Exchange Activity Assessment\nExchange activity is a critical component of market liquidity and price dynamics. This card outlines **how to evaluate deposits and withdrawals to gauge market conditions**.\n\n* **Deposit Trends**: Monitor the volume of assets deposited into exchanges. A consistent increase, such as 3,000 ETH daily over a week, may indicate growing confidence among traders.\n* **Withdrawal Patterns**: Analyze the frequency and volume of withdrawals. A spike in withdrawals, for example, 5,000 BTC over a weekend, often signals that traders are moving assets to cold storage, indicating a potential bullish outlook.\n* **Liquidity Metrics**: Assess the liquidity ratio by comparing total deposits to total withdrawals. A liquidity ratio below 1.0 suggests potential liquidity issues, which can lead to increased volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Deposit Trends",
          "definition": "The analysis of the volume and frequency of assets deposited into exchanges."
        },
        {
          "term": "Withdrawal Patterns",
          "definition": "The examination of the volume and frequency of assets withdrawn from exchanges."
        },
        {
          "term": "Liquidity Metrics",
          "definition": "The ratio of total deposits to total withdrawals, indicating market liquidity."
        }
      ],
      "whyThisMatters": "Evaluating exchange activity helps traders understand market sentiment and potential price movements.",
      "realLifeExample": "On March 20, 2023, a significant withdrawal of 4,500 BTC from exchanges coincided with a price increase from $38,000 to $42,000, indicating traders were securing assets.",
      "commonMistake": "Traders often misinterpret high deposit volumes as bullish without considering withdrawal trends.",
      "quickNote": "Evaluate exchange activity by analyzing deposit trends, withdrawal patterns, and liquidity metrics.",
      "mentorText": "When assessing exchange activity, think of it as watching the flow of water in a reservoir. High deposits can fill it up, but if withdrawals spike, it could signal a drain on liquidity.",
      "mentorAnalogy": "Evaluating exchange activity is like monitoring a bank's cash flow. Deposits increase available funds, while withdrawals indicate customer sentiment and potential market shifts."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "practice",
    "title": "Case Study on Crypto Performance Audits",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C7 -->\n### Core Scenario: Practical Application of Performance Audits\nEngaging in a case study allows for the application of on-chain metrics to assess a crypto asset's performance. This exercise focuses on **analyzing real-world data to draw actionable insights**.\n\n* **Scenario Analysis**: Review the performance of Ethereum (ETH) over a specified period, noting significant changes in on-chain metrics such as active addresses and net transfer volume.\n* **Data Interpretation**: Identify correlations between exchange inflows/outflows and price movements during the case study period. For instance, observe how a net outflow of 2,000 ETH affected market sentiment.\n* **Conclusion Development**: Formulate conclusions based on the data analyzed, considering how on-chain flows impacted price trends and potential future movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating a specific market scenario using historical data."
        },
        {
          "term": "Data Interpretation",
          "definition": "The act of drawing conclusions from analyzed data."
        },
        {
          "term": "Conclusion Development",
          "definition": "The formulation of insights based on data analysis."
        }
      ],
      "whyThisMatters": "Applying theoretical concepts to real-world scenarios enhances understanding and decision-making capabilities.",
      "realLifeExample": "In a case study of Ethereum from January 1 to January 15, 2023, a net inflow of 3,000 ETH was observed, correlating with a price increase from $2,500 to $3,000.",
      "commonMistake": "Failing to connect on-chain metrics with price movements leads to incomplete analyses.",
      "quickNote": "Engage in scenario analysis, data interpretation, and conclusion development to audit crypto performance.",
      "mentorText": "When you analyze a case study, think critically about how each metric interacts. Don’t just look at numbers; connect the dots to understand the bigger picture.",
      "mentorAnalogy": "Conducting a performance audit is like a forensic investigation. Each piece of data is a clue that helps you uncover the truth behind market movements."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During your analysis of Ethereum's performance, you notice a significant increase in active addresses. What does this indicate?",
      "options": [
        {
          "id": "0",
          "text": "Increased market interest and potential price volatility.",
          "isCorrect": true,
          "feedback": "Correct. A rise in active addresses typically signals heightened interest in the asset."
        },
        {
          "id": "1",
          "text": "A decrease in trading volume.",
          "isCorrect": false,
          "feedback": "Incorrect. Increased active addresses usually correlate with higher trading activity."
        },
        {
          "id": "2",
          "text": "A stable market environment.",
          "isCorrect": false,
          "feedback": "Incorrect. A stable market would not typically see a significant increase in active addresses."
        },
        {
          "id": "3",
          "text": "A potential exit of long-term holders.",
          "isCorrect": false,
          "feedback": "Incorrect. Increased active addresses generally indicate new or returning participants, not exits."
        }
      ]
    },
    "visualKey": "crypto-metric-dashboard"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Performance Audit Concepts",
    "label": "Crypto Track",
    "body": "<!-- M8.13-crypto-C8 -->\n### Core Scenario: Review of Key Concepts\nThis summary consolidates the essential concepts covered in the Crypto Track, emphasizing the role of on-chain audits in evaluating asset performance. Key takeaways include **the importance of metrics in understanding market behavior**.\n\n* **On-Chain Metrics**: Recognize the significance of net transfer volume, active addresses, and exchange inflows/outflows in predicting market trends.\n* **Exchange Activity**: Understand how deposit and withdrawal patterns affect liquidity and price dynamics, providing insight into trader sentiment.\n* **Practical Application**: Reinforce the value of applying theoretical knowledge to real-world scenarios through case studies, enhancing analytical skills.",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Metrics",
          "definition": "Quantitative measures derived from blockchain data that indicate market behavior."
        },
        {
          "term": "Exchange Activity",
          "definition": "The analysis of trading activity on exchanges, including deposits and withdrawals."
        },
        {
          "term": "Practical Application",
          "definition": "The use of theoretical concepts in real-world trading scenarios."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces their application in professional trading environments, aiding in informed decision-making.",
      "realLifeExample": "In reviewing the performance of Bitcoin over the past quarter, traders noted a consistent increase in active addresses, correlating with a price rise from $30,000 to $40,000.",
      "commonMistake": "Traders often fail to integrate multiple metrics, leading to a fragmented understanding of market conditions.",
      "quickNote": "Key concepts include on-chain metrics, exchange activity, and the importance of practical application.",
      "mentorText": "As you reflect on these concepts, remember that each metric is a piece of a larger puzzle. Integrate them to form a comprehensive view of the market.",
      "mentorAnalogy": "Summarizing these concepts is like reviewing a flight plan before takeoff. Each detail is crucial for a successful journey through the market."
    },
    "taskData": null,
    "visualKey": "crypto-metric-dashboard"
  }
];
