import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Venue Quality Confirmation",
    "label": "Crypto Track",
    "body": "Confirming crypto setups across multiple exchange venues is critical for ensuring price agreement and structural verification. This mission brief introduces the necessity of verifying crypto setups by examining price consistency across different exchanges.",
    "context": {
      "keyTerms": [
        {
          "term": "Crypto Venue",
          "definition": "A platform where cryptocurrencies are traded, including both centralized and decentralized exchanges."
        },
        {
          "term": "Price Agreement",
          "definition": "The consistency of a cryptocurrency's price across different trading venues."
        }
      ],
      "whyThisMatters": "Confirming setups across multiple venues prevents execution based on inaccurate or manipulated data from a single source.",
      "realLifeExample": "A trader checks BTC prices on Binance and Uniswap before executing a trade to ensure both platforms show similar price levels, confirming market consensus.",
      "commonMistake": "Relying solely on data from one exchange without cross-verifying can lead to trades based on incorrect market conditions.",
      "quickNote": "Always cross-verify crypto prices across multiple venues for accurate setup confirmation.",
      "mentorText": "Before you commit, ensure that the price you see isn't an anomaly. Cross-check across venues to confirm the setup's validity.",
      "mentorAnalogy": "Think of it like a pilot checking multiple instruments before takeoff. You need to confirm all readings align to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "CEX and DEX Price Agreement",
    "label": "Crypto Track",
    "body": "### CEX and DEX Price Agreement: Ensuring Structural Consistency\nConfirm crypto setups by verifying price agreement between centralized exchanges (CEX) and decentralized exchanges (DEX).\n\n* **Cross-Exchange Price Check**: Verify that the price on a CEX like Binance matches the price on a DEX like Uniswap. Discrepancies greater than 1% may indicate structural misalignment.\n* **Volume Verification**: Ensure both exchanges show similar trading volumes. A significant volume difference can signal a lack of liquidity or potential manipulation.\n* **Order Book Depth**: Compare the order book depth on both exchanges. Shallow order books can lead to price slippage and invalid setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Centralized Exchange (CEX)",
          "definition": "A cryptocurrency exchange operated by a centralized organization."
        },
        {
          "term": "Decentralized Exchange (DEX)",
          "definition": "A peer-to-peer marketplace where transactions occur directly between crypto traders."
        }
      ],
      "whyThisMatters": "Ensuring price agreement across CEX and DEX prevents executing trades based on isolated or manipulated data.",
      "realLifeExample": "A trader observes that ETH is priced at $2,000 on Coinbase (CEX) and $2,010 on SushiSwap (DEX). The 0.5% discrepancy is within acceptable limits, confirming structural consistency.",
      "commonMistake": "Ignoring price discrepancies between CEX and DEX can lead to trades based on skewed market data.",
      "quickNote": "Verify CEX and DEX prices align within 1% for setup confirmation.",
      "mentorText": "Always ensure your data isn't skewed by checking both centralized and decentralized sources. Consistency is key.",
      "mentorAnalogy": "Like a surgeon using both MRI and X-ray to confirm a diagnosis, you need multiple data points to ensure accuracy."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Detecting Venue Discrepancies",
    "label": "Crypto Track",
    "body": "### Detecting Venue Discrepancies: Identifying Structural Misalignments\nUnderstand how to detect discrepancies between exchange venues to identify potential structural misalignments.\n\n* **Price Divergence Analysis**: Regularly compare prices across multiple exchanges. Divergences greater than 2% require investigation to determine if they are due to technical issues or market manipulation.\n* **Latency Monitoring**: Identify latency issues by checking the time it takes for price updates across venues. Significant delays can lead to outdated data influencing decisions.\n* **Arbitrage Opportunities**: Discrepancies often indicate arbitrage opportunities, but ensure these are not due to systemic issues before acting.",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Discrepancy",
          "definition": "A difference in price or data between two or more trading venues."
        },
        {
          "term": "Arbitrage",
          "definition": "The simultaneous purchase and sale of an asset to profit from an imbalance in the price."
        }
      ],
      "whyThisMatters": "Detecting discrepancies helps traders avoid executing trades based on faulty or manipulated data.",
      "realLifeExample": "A trader notices BTC is priced at $50,000 on Kraken and $51,500 on Bitfinex. This 3% discrepancy prompts further investigation into potential data feed issues.",
      "commonMistake": "Failing to investigate significant price discrepancies can result in trades based on incorrect market conditions.",
      "quickNote": "Investigate discrepancies over 2% for potential structural issues.",
      "mentorText": "If you see a significant price difference, dig deeper. It could be a red flag or an opportunity, but never ignore it.",
      "mentorAnalogy": "Like an engineer checking for structural integrity, you must ensure all parts align before proceeding."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Liquidity Confirmation in Crypto",
    "label": "Crypto Track",
    "body": "### Liquidity Confirmation in Crypto: Ensuring Market Depth\nExplore the role of liquidity in confirming crypto setups, ensuring sufficient market depth supports structural verification.\n\n* **Liquidity Pool Analysis**: Check the size of liquidity pools on DEXs. A pool with less than $1 million may not support large trades without slippage.\n* **Order Book Inspection**: On CEXs, ensure the order book shows tight spreads and deep liquidity. Wide spreads indicate poor liquidity, affecting trade execution.\n* **Volume Consistency**: Confirm that trading volumes are consistent with historical averages. Sudden drops in volume can indicate reduced market interest or manipulation.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        },
        {
          "term": "Liquidity Pool",
          "definition": "A collection of funds locked in a smart contract on a DEX to facilitate trading."
        }
      ],
      "whyThisMatters": "Liquidity ensures that trades can be executed at desired prices without significant slippage, confirming the setup's viability.",
      "realLifeExample": "A trader checks that the liquidity pool for UNI/ETH on Uniswap is over $5 million, ensuring sufficient depth for a planned trade.",
      "commonMistake": "Ignoring liquidity conditions can lead to unexpected slippage and poor trade execution.",
      "quickNote": "Verify liquidity depth to avoid slippage and confirm trade setups.",
      "mentorText": "Before you trade, ensure there's enough liquidity. It's like checking fuel levels before a long journey.",
      "mentorAnalogy": "Just as a chef ensures all ingredients are available before starting a dish, you need to confirm liquidity before executing a trade."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Cross-Venue Analysis Techniques",
    "label": "Crypto Track",
    "body": "### Cross-Venue Analysis Techniques: Ensuring Structural Integrity\nAnalyzing crypto setups across multiple venues requires maintaining structural integrity despite differing market conditions. This card outlines techniques to verify structural consistency.\n\n* **Venue Liquidity Comparison**: Assess the liquidity levels across different exchanges. A setup is only valid if the liquidity profile is consistent, minimizing the risk of slippage and false signals.\n* **Price Discrepancy Analysis**: Monitor price discrepancies between venues. Significant differences may indicate arbitrage opportunities or unreliable data, invalidating the setup.\n* **Volume Synchronization**: Confirm that volume spikes align across venues. Disparate volume patterns suggest manipulation or lack of genuine interest, warranting rejection of the setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Venue Analysis",
          "definition": "Evaluating crypto market setups across multiple trading platforms to ensure consistency and reliability."
        }
      ],
      "whyThisMatters": "Cross-venue analysis prevents reliance on potentially unreliable data from a single source, ensuring robust decision-making.",
      "realLifeExample": "Analyzing BTC/USD across Binance, Coinbase, and Kraken, noticing a 2% price discrepancy on Kraken, indicating potential data unreliability.",
      "commonMistake": "Relying solely on one venue's data without cross-referencing can lead to false confirmations.",
      "quickNote": "Always cross-check venue data to ensure structural integrity.",
      "mentorText": "When analyzing crypto setups, always verify across multiple venues. Think of it as cross-referencing sources in a research paper to ensure accuracy.",
      "mentorAnalogy": "Just like a pilot checks multiple instruments to confirm altitude, a trader must verify data across venues to confirm market structure."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "concept",
    "title": "Confirmation in Volatile Crypto Markets",
    "label": "Crypto Track",
    "body": "### Confirmation in Volatile Crypto Markets: Strategies for Structural Verification\nVolatile crypto markets require robust strategies for confirming setups. This card provides methods to maintain structural verification amidst rapid changes.\n\n* **Volatility Thresholds**: Establish specific volatility thresholds that must be met before confirming a setup. High volatility can lead to false breakouts, so ensure the setup withstands these conditions.\n* **Timeframe Correlation**: Use multiple timeframes to confirm structural integrity. A setup confirmed on both short and long timeframes is more reliable.\n* **Pattern Consistency**: Verify that chart patterns remain consistent despite volatility. Patterns that distort under pressure should be disregarded.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Threshold",
          "definition": "A predefined level of market volatility that must be met to confirm a trading setup."
        }
      ],
      "whyThisMatters": "Volatility can obscure true market direction, making it essential to confirm setups with robust criteria.",
      "realLifeExample": "During a sudden 10% BTC price swing, confirming a setup requires checking if the pattern holds on both 15-minute and 1-hour charts.",
      "commonMistake": "Failing to adjust confirmation criteria during high volatility periods can lead to premature entries.",
      "quickNote": "In volatile markets, confirm across timeframes to ensure pattern integrity.",
      "mentorText": "In volatile crypto markets, don't rush. Confirm your setups by checking if they hold true across different timeframes and volatility conditions.",
      "mentorAnalogy": "Like a surgeon double-checking vital signs during a critical operation, a trader must verify setups under volatile conditions to ensure accuracy."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "practice",
    "title": "Crypto Confirmation Practice",
    "label": "Crypto Track",
    "body": "### Crypto Confirmation Practice: Applying Cross-Venue Verification\nApply learned confirmation strategies in practical crypto trading scenarios, focusing on cross-venue verification techniques.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Venue Verification",
          "definition": "The process of confirming trading setups by comparing data across multiple trading platforms."
        }
      ],
      "whyThisMatters": "Practical application of cross-venue verification solidifies understanding and enhances decision-making accuracy.",
      "realLifeExample": "Comparing ETH/USD setups on Binance and Bitfinex, ensuring volume and price patterns align before execution.",
      "commonMistake": "Ignoring discrepancies between venues can lead to unreliable trade confirmations.",
      "quickNote": "Cross-venue verification is crucial for reliable trade confirmations.",
      "mentorText": "Practice verifying your setups across different venues. It's like a quality control check to ensure your data is reliable.",
      "mentorAnalogy": "Think of it like a chef tasting a dish at different stages to ensure consistent flavor across the entire meal."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You notice a 3% price difference for BTC/USD between Binance and Kraken. What should you do before confirming your setup?",
      "options": [
        {
          "id": "0",
          "text": "Investigate the discrepancy and verify volume patterns across both venues.",
          "isCorrect": true,
          "feedback": "Correct. Investigating discrepancies ensures the reliability of your data."
        },
        {
          "id": "1",
          "text": "Ignore the discrepancy and proceed with the setup.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring discrepancies can lead to unreliable confirmations."
        },
        {
          "id": "2",
          "text": "Only use the data from the venue with the lower price.",
          "isCorrect": false,
          "feedback": "Incorrect. Relying on one venue's data can be misleading."
        },
        {
          "id": "3",
          "text": "Wait for the price to align across both venues.",
          "isCorrect": false,
          "feedback": "Incorrect. Waiting may not resolve the underlying issue causing the discrepancy."
        }
      ]
    },
    "visualKey": "crypto-venue-quality-confirmation"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Confirmation Methods",
    "label": "Crypto Track",
    "body": "### Summary of Crypto Confirmation Methods: Ensuring Structural Consistency\nReview and summarize key methods for confirming crypto setups, emphasizing cross-venue verification and structural consistency.\n\n* **Cross-Venue Verification**: Consistently compare data across multiple venues to ensure reliability and structural integrity.\n* **Volatility Adaptation**: Adjust confirmation criteria based on market volatility to avoid false signals.\n* **Timeframe Correlation**: Use multiple timeframes to verify the robustness of setups, ensuring they hold across different market conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Consistency",
          "definition": "The maintenance of a trading setup's integrity across different market conditions and venues."
        }
      ],
      "whyThisMatters": "Ensuring structural consistency across venues and conditions is crucial for reliable trading decisions.",
      "realLifeExample": "Reviewing a BTC setup confirmed across Binance, Kraken, and Coinbase, with consistent patterns on 15-minute and 1-hour charts.",
      "commonMistake": "Neglecting to verify setups across multiple venues can lead to unreliable trading decisions.",
      "quickNote": "Consistency across venues and timeframes is key to reliable confirmations.",
      "mentorText": "Always ensure your setups are structurally sound across different venues and conditions. It's your safeguard against unreliable data.",
      "mentorAnalogy": "Like an architect ensuring a building's design is sound across different environmental conditions, a trader must confirm setups across venues and timeframes."
    },
    "taskData": null,
    "visualKey": "crypto-venue-quality-confirmation"
  }
];
