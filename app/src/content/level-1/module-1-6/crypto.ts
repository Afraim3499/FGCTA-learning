import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Venue-Confirmed Trigger Design",
    "label": "Crypto Track",
    "body": "Designing triggers that require multi-venue order book sweep agreement is essential for robust crypto trading plans. This mission focuses on **understanding how to confirm triggers across both spot and perpetual markets** to ensure reliability and reduce false signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Venue Agreement",
          "definition": "A condition where multiple trading venues show the same market behavior, confirming a trigger."
        },
        {
          "term": "Order Book Sweep",
          "definition": "A rapid movement through the order book, consuming liquidity at multiple price levels."
        }
      ],
      "whyThisMatters": "Using multi-venue confirmation reduces the risk of false triggers caused by isolated market anomalies on a single exchange.",
      "realLifeExample": "A BTCUSD trigger is only activated when both Binance and Coinbase show a synchronized order book sweep at $30,000, ensuring market-wide consensus.",
      "commonMistake": "Relying on a single exchange's data can lead to false triggers due to isolated liquidity events.",
      "quickNote": "Multi-venue agreement is your safeguard against isolated market noise.",
      "mentorText": "Think of it like cross-checking data from multiple sources to ensure accuracy before making a decision.",
      "mentorAnalogy": "Imagine a pilot confirming weather conditions with multiple control towers before takeoff. This ensures a comprehensive understanding of the flight path."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "concept",
    "title": "Designing Multi-Venue Agreement Triggers",
    "label": "Crypto Track",
    "body": "### Designing Multi-Venue Agreement Triggers\nTriggers that require agreement across multiple trading venues enhance the reliability of trading signals. This card details **how to design such triggers and the importance of cross-verification**.\n\n* **Venue Synchronization**: Ensure that the trigger condition is met simultaneously on at least two major exchanges. This reduces the likelihood of isolated anomalies affecting the trigger.\n* **Cross-Verification Protocol**: Implement a protocol where triggers are only activated if confirmed by both spot and derivative markets on different venues.\n* **Latency Consideration**: Factor in the latency between exchanges, ensuring that the trigger condition accounts for slight timing discrepancies.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Verification",
          "definition": "The process of confirming a trading signal across multiple data sources or venues."
        },
        {
          "term": "Latency",
          "definition": "The delay between the occurrence of an event and its detection or reporting by a system."
        }
      ],
      "whyThisMatters": "Cross-verification ensures that trading decisions are based on comprehensive market data, not isolated events.",
      "realLifeExample": "An ETHUSD breakout trigger is validated only when both Kraken and Bitfinex show the same breakout pattern within a 5-second window.",
      "commonMistake": "Ignoring latency differences can lead to missed opportunities or false confirmations.",
      "quickNote": "Synchronize your triggers across venues for a true market picture.",
      "mentorText": "Always cross-check your data like a detective verifying alibis from multiple witnesses.",
      "mentorAnalogy": "Similar to a surgeon consulting with multiple specialists before a critical operation, ensuring all perspectives align."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "concept",
    "title": "Order Book Sweep Trigger Mechanics",
    "label": "Crypto Track",
    "body": "### Order Book Sweep Trigger Mechanics\nOrder book sweeps indicate significant market activity and can be used to activate precise trading triggers. This card explains **how to utilize these sweeps for accurate trigger activation**.\n\n* **Sweep Identification**: Recognize a sweep as a rapid consumption of liquidity across multiple price levels, often accompanied by increased volume.\n* **Trigger Activation Criteria**: A trigger is only activated if the sweep clears a predefined liquidity threshold, ensuring the move is substantial.\n* **Volume Confirmation**: Validate the sweep with a corresponding spike in volume to confirm genuine market interest.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity Threshold",
          "definition": "A predefined level of liquidity that must be consumed for a trigger to be activated."
        },
        {
          "term": "Volume Spike",
          "definition": "A sudden increase in trading volume, indicating heightened market activity."
        }
      ],
      "whyThisMatters": "Order book sweeps provide insight into market strength and can indicate the start of a significant price movement.",
      "realLifeExample": "A BTCUSD trigger activates when a sweep clears $500,000 in liquidity at $28,500 on Binance, confirmed by a 30% volume spike.",
      "commonMistake": "Activating triggers on minor sweeps without volume confirmation can lead to premature trades.",
      "quickNote": "Validate sweeps with volume to confirm genuine market moves.",
      "mentorText": "Treat order book sweeps like a seismic event; only react when the tremors are significant.",
      "mentorAnalogy": "Like a structural engineer assessing a building's stability after a tremor, ensure the movement is substantial before taking action."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "concept",
    "title": "Spot and Perp Confirmation Triggers",
    "label": "Crypto Track",
    "body": "### Spot and Perp Confirmation Triggers\nDesigning triggers that require confirmation from both spot and perpetual markets ensures comprehensive market alignment. This card covers **how to synchronize triggers across these markets**.\n\n* **Dual Market Verification**: Ensure that both spot and perpetual markets confirm the trigger condition, reducing the risk of isolated market behavior.\n* **Price Discrepancy Monitoring**: Monitor for significant price discrepancies between spot and perpetual markets, which can indicate arbitrage opportunities or market inefficiencies.\n* **Correlation Analysis**: Regularly analyze the correlation between spot and perpetual market movements to refine trigger conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Market",
          "definition": "A derivative market where contracts have no expiration date, allowing for continuous trading."
        },
        {
          "term": "Price Discrepancy",
          "definition": "A difference in price between two markets or instruments, often indicating potential arbitrage."
        }
      ],
      "whyThisMatters": "Aligning triggers across spot and perpetual markets ensures that trades are based on consistent market signals.",
      "realLifeExample": "An XRPUSD trigger is only activated when both the spot market on Binance and the perpetual market on Bybit confirm a breakout above $0.50.",
      "commonMistake": "Ignoring discrepancies between spot and perpetual markets can lead to trades based on incomplete data.",
      "quickNote": "Synchronize spot and perp confirmations for consistent signals.",
      "mentorText": "Think of spot and perpetual markets as two sides of the same coin; both must show the same face for a valid trigger.",
      "mentorAnalogy": "Like a conductor ensuring all sections of an orchestra are in harmony before starting a performance, ensure both markets are aligned."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "concept",
    "title": "Validating Crypto Triggers for Volatile Markets",
    "label": "Crypto Track",
    "body": "### Validating Crypto Triggers\nCrypto markets demand rigorous validation of triggers due to their inherent volatility. This card outlines **methods to ensure trigger reliability through backtesting and refinement**.\n\n* **Historical Backtesting**: Utilize historical data to test trigger performance across varying market conditions. Ensure that triggers consistently activate under predefined criteria without false positives.\n* **Volatility Analysis**: Incorporate volatility metrics such as ATR (Average True Range) to adjust trigger sensitivity. Triggers should adapt to changing volatility levels to maintain effectiveness.\n* **Performance Metrics**: Establish clear metrics such as win rate, average return, and drawdown to evaluate trigger success. Regularly review and refine triggers based on these performance indicators.",
    "context": {
      "keyTerms": [
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy using historical data to assess its viability."
        },
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given security or market index."
        }
      ],
      "whyThisMatters": "Validating triggers ensures they perform reliably in unpredictable crypto markets, reducing the risk of false activations.",
      "realLifeExample": "A trader backtests a Bitcoin trigger using data from the 2021 bull run, adjusting for high volatility periods to prevent premature activations.",
      "commonMistake": "Relying on triggers without backtesting, leading to unexpected losses during volatile market swings.",
      "quickNote": "Backtest triggers to ensure they withstand crypto volatility.",
      "mentorText": "Think of trigger validation like testing a new aircraft design in a wind tunnel. You must ensure it performs under all conditions before taking it to the skies.",
      "mentorAnalogy": "Just as an engineer tests a bridge design under various stress conditions, a trader must validate triggers against historical market data."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "concept",
    "title": "Designing Adaptive Crypto Triggers",
    "label": "Crypto Track",
    "body": "### Adaptive Crypto Trigger Design\nCrypto markets are dynamic, requiring triggers that can adjust to rapid changes. This card explores **strategies for designing adaptable triggers**.\n\n* **Dynamic Thresholds**: Implement triggers with thresholds that adjust based on real-time market data. Use indicators like moving averages to recalibrate trigger points.\n* **Market Condition Filters**: Integrate filters that assess current market conditions, such as trend strength or liquidity, to activate triggers only in optimal environments.\n* **Feedback Loops**: Establish feedback mechanisms that analyze trigger outcomes and adjust parameters accordingly. This continuous improvement process enhances trigger responsiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Thresholds",
          "definition": "Trigger levels that adjust based on current market data."
        },
        {
          "term": "Feedback Loops",
          "definition": "Processes that use outcomes to refine and improve future performance."
        }
      ],
      "whyThisMatters": "Adaptive triggers ensure traders can respond effectively to the fast-paced changes in crypto markets, maintaining strategic flexibility.",
      "realLifeExample": "A trader uses a moving average crossover strategy for Ethereum, adjusting trigger points as the market trend strengthens or weakens.",
      "commonMistake": "Failing to adjust triggers for changing market conditions, resulting in missed opportunities or false activations.",
      "quickNote": "Design triggers that adapt to market shifts for sustained effectiveness.",
      "mentorText": "Designing adaptive triggers is like programming a thermostat. It must adjust to temperature changes to maintain comfort without manual intervention.",
      "mentorAnalogy": "Just as a pilot adjusts flight controls based on wind conditions, a trader must design triggers that adapt to market dynamics."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "practice",
    "title": "Practicing Crypto Trigger Design",
    "label": "Crypto Track",
    "body": "### Practicing Crypto Trigger Design\nApply your knowledge of crypto trigger design through practical exercises. Test your skills in creating effective triggers within simulated trading environments.\n\n* **Scenario Simulation**: Use trading simulators to practice designing triggers under different market conditions. Focus on volatility, trend changes, and liquidity variations.\n* **Parameter Adjustment**: Experiment with trigger parameters such as threshold levels and timeframes to observe their impact on performance.\n* **Outcome Analysis**: Review simulated trade outcomes to refine trigger designs. Adjust based on success rates and error patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "Using simulated environments to test trading strategies under controlled conditions."
        },
        {
          "term": "Parameter Adjustment",
          "definition": "Modifying strategy settings to optimize performance."
        }
      ],
      "whyThisMatters": "Practical application solidifies theoretical knowledge, enabling traders to refine their skills in a risk-free environment.",
      "realLifeExample": "A trader uses a demo account to test a Litecoin trigger strategy, adjusting parameters based on simulated outcomes to improve accuracy.",
      "commonMistake": "Ignoring outcome analysis, leading to repeated errors and unoptimized trigger designs.",
      "quickNote": "Practice in simulations to perfect trigger designs before live trading.",
      "mentorText": "Think of this practice as a flight simulator for pilots. You need to test your strategies in a controlled setting before taking them live.",
      "mentorAnalogy": "Just as a chef perfects a recipe through repeated trials in a test kitchen, a trader must refine triggers through practice."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are testing a new trigger for Bitcoin that activates on a 5% price move within an hour. During simulation, you notice frequent false activations. What should you adjust?",
      "options": [
        {
          "id": "0",
          "text": "Increase the threshold to 7% and extend the timeframe to 2 hours.",
          "isCorrect": true,
          "feedback": "Increasing the threshold and extending the timeframe reduces false activations by filtering out minor fluctuations."
        },
        {
          "id": "1",
          "text": "Decrease the threshold to 3% for quicker activations.",
          "isCorrect": false,
          "feedback": "Decreasing the threshold will likely increase false activations, not reduce them."
        },
        {
          "id": "2",
          "text": "Keep the threshold the same but add more indicators.",
          "isCorrect": false,
          "feedback": "Adding more indicators without adjusting the threshold may complicate the trigger without addressing the false activations."
        },
        {
          "id": "3",
          "text": "Switch to a different cryptocurrency with less volatility.",
          "isCorrect": false,
          "feedback": "Switching instruments does not address the core issue of the trigger design."
        }
      ]
    },
    "visualKey": "crypto-venue-confirmed-trigger"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trigger Design",
    "label": "Crypto Track",
    "body": "### Summary of Crypto Trigger Design\nReview the key strategies and concepts for designing effective crypto triggers. Consolidate your understanding of multi-venue and order book sweep triggers for practical application.\n\n* **Multi-Venue Integration**: Ensure triggers consider data from multiple exchanges to capture a comprehensive market view. This reduces the risk of false signals from isolated venue anomalies.\n* **Order Book Sweep Triggers**: Design triggers that activate based on significant order book changes, such as large volume sweeps, indicating potential market moves.\n* **Continuous Refinement**: Regularly review and adjust triggers based on performance metrics and market evolution to maintain their effectiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Venue Integration",
          "definition": "Incorporating data from multiple trading venues to enhance trigger accuracy."
        },
        {
          "term": "Order Book Sweep",
          "definition": "A large volume transaction that clears multiple price levels in the order book, indicating strong market interest."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of trigger design ensures traders can effectively navigate the complexities of crypto markets.",
      "realLifeExample": "A trader refines their trigger strategy by incorporating data from Binance, Coinbase, and Kraken to improve signal reliability.",
      "commonMistake": "Neglecting to integrate multi-venue data, leading to incomplete market analysis and unreliable triggers.",
      "quickNote": "Integrate multi-venue data and refine triggers for robust crypto strategies.",
      "mentorText": "Think of your trigger design as a multi-sensor system in a spacecraft. You need data from all angles to make informed decisions.",
      "mentorAnalogy": "Just as an architect uses data from various surveys to design a stable structure, a trader must integrate diverse market data for effective triggers."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-trigger"
  }
];
