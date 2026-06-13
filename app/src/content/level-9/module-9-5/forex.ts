import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Central Bank Currency Peg Removals",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C1 -->\n### Core Scenario: Central Bank Currency Peg Removals\nSudden removals of currency pegs can lead to extreme volatility and significant losses for unprepared traders. This card outlines **how to establish recovery protocols to mitigate the impact of such events**.\n\n* **Pre-emptive Risk Assessment**: Identify currencies with potential peg vulnerabilities. Monitor central bank communications and economic indicators that may signal impending changes, allowing for proactive adjustments in position sizing.\n* **Dynamic Position Management**: Implement a tiered exit strategy for open positions. Set predefined levels for partial closures to secure profits and limit losses in the event of a peg removal.\n* **Emergency Protocol Activation**: Create a checklist for immediate actions post-peg removal, including liquidity checks and rapid assessment of market conditions to facilitate swift decision-making and position adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Currency Peg",
          "definition": "A fixed exchange rate between a currency and another currency or basket of currencies."
        }
      ],
      "whyThisMatters": "Understanding currency peg removals is critical for developing robust recovery protocols that protect capital during extreme market shifts.",
      "realLifeExample": "On January 15, 2015, the Swiss National Bank removed the EUR/CHF peg, causing the pair to drop from 1.20 to as low as 0.85 within minutes, leading to substantial losses for unprepared traders.",
      "commonMistake": "Failing to monitor central bank announcements and economic indicators that may signal potential peg adjustments, leading to unhedged positions.",
      "quickNote": "Establish recovery protocols to mitigate risks from sudden currency peg removals.",
      "mentorText": "When a peg is removed, the market can react violently. You need to have a plan in place to manage your positions and protect your capital. Always be ready to adjust your strategy based on real-time data.",
      "mentorAnalogy": "Think of a currency peg like a bridge holding two sides of a river. If that bridge collapses suddenly, you need a solid plan to navigate the turbulent waters that follow."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Market Reactions to Peg Removals",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C2 -->\n### Core Scenario: Market Reactions to Peg Removals\nCurrency peg removals often trigger rapid market reactions, characterized by sharp price movements and increased volatility. This card teaches **how to anticipate these movements and adjust trading strategies accordingly**.\n\n* **Volatility Spike Analysis**: Monitor volatility indices before and after peg removals. A sudden spike in volatility can indicate market panic or reassessment of currency value, necessitating immediate strategy adjustments.\n* **Order Flow Monitoring**: Analyze changes in order book depth and liquidity. A significant drop in liquidity can signal potential price gaps, requiring traders to adjust stop-loss orders to avoid slippage.\n* **Technical Indicator Adaptation**: Utilize adaptive technical indicators that can respond to sudden market changes. For example, implement ATR (Average True Range) to recalibrate stop-loss levels based on increased volatility post-peg removal.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Spike",
          "definition": "A sudden increase in the price fluctuations of a currency pair."
        }
      ],
      "whyThisMatters": "Anticipating market reactions to peg removals allows traders to adjust their strategies proactively, reducing potential losses.",
      "realLifeExample": "Following the Swiss National Bank's peg removal in January 2015, EUR/CHF experienced a volatility spike, with price movements exceeding 1,000 pips within hours, impacting many traders' positions.",
      "commonMistake": "Underestimating the speed and magnitude of market reactions, leading to inadequate risk management and increased exposure.",
      "quickNote": "Anticipate market reactions to peg removals to adjust strategies effectively.",
      "mentorText": "When a peg is removed, expect chaos. Be prepared to react quickly, as the market will not wait for you to catch up. Adjust your strategy based on real-time data and market behavior.",
      "mentorAnalogy": "Imagine a dam holding back a river. When the dam breaks, the water rushes out unpredictably. Your strategy must be flexible enough to navigate the sudden flood of market reactions."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Handling Spread Freezes",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C3 -->\n### Core Scenario: Handling Spread Freezes\nDuring extreme market volatility, spread freezes can occur, preventing trades from executing at desired prices. This card outlines **specific techniques for managing spread freezes to ensure effective trading operations**.\n\n* **Pre-Defined Spread Tolerance**: Establish a maximum acceptable spread before entering a trade. If spreads exceed this threshold during volatility, avoid execution to prevent unfavorable fills.\n* **Alternative Execution Strategies**: Utilize limit orders instead of market orders during high volatility periods. This ensures trades are executed only at predetermined prices, protecting against adverse price movements.\n* **Broker Communication Protocol**: Maintain open lines of communication with your broker during high-impact news events. Understanding their policies on spread adjustments can help you make informed decisions on trade execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Freeze",
          "definition": "A situation where the bid-ask spread widens significantly, preventing trades from executing at expected prices."
        }
      ],
      "whyThisMatters": "Effectively managing spread freezes is essential for maintaining operational efficiency and minimizing execution risk during volatile periods.",
      "realLifeExample": "During the Brexit referendum in June 2016, many brokers experienced spread freezes on GBP pairs, with spreads widening to over 100 pips, leading to execution failures for traders who did not adapt their strategies.",
      "commonMistake": "Failing to set a maximum spread tolerance, resulting in executing trades at significantly worse prices during volatility.",
      "quickNote": "Implement strategies to manage spread freezes effectively during extreme volatility.",
      "mentorText": "When spreads widen unexpectedly, you must have a plan. Don't let emotions dictate your trades; stick to your predefined limits and execution strategies.",
      "mentorAnalogy": "Think of spread freezes like a traffic jam. If the road is blocked, you need to find an alternative route rather than force your way through the congestion."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Liquidity Management Strategies",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C4 -->\n### Core Scenario: Liquidity Management Strategies\nDuring crises, liquidity can dry up, leading to increased slippage and execution difficulties. This card explores **liquidity management strategies to maintain operational efficiency and minimize losses**.\n\n* **Liquidity Pool Identification**: Identify key liquidity providers and their operational hours. Establish relationships with multiple brokers to ensure access to liquidity during crises, especially during off-peak hours.\n* **Dynamic Position Sizing**: Adjust position sizes based on current liquidity conditions. In low liquidity environments, reduce position sizes to mitigate slippage and execution risk.\n* **Contingency Fund Allocation**: Set aside a contingency fund specifically for trading during crises. This fund can be used to capitalize on opportunities when liquidity returns, ensuring you are prepared to act swiftly.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Effective liquidity management is crucial for maintaining trading operations during market disruptions, ensuring that traders can execute strategies without significant losses.",
      "realLifeExample": "During the COVID-19 market crash in March 2020, many traders faced severe liquidity issues, with spreads widening dramatically on major currency pairs, leading to execution challenges and increased losses.",
      "commonMistake": "Neglecting to assess liquidity conditions before entering trades, resulting in unexpected slippage and execution failures.",
      "quickNote": "Implement liquidity management strategies to navigate crises effectively.",
      "mentorText": "In times of crisis, liquidity can vanish quickly. You need to know where to find it and how to adjust your trades to avoid getting stuck in illiquid markets.",
      "mentorAnalogy": "Consider liquidity management like a firefighter assessing a blaze. You must know where the water sources are and how to adjust your approach based on the intensity of the fire."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Advanced Risk Mitigation Techniques in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C5 -->\n### Core Scenario: Risk Mitigation in Forex Trading\nForex markets can experience extreme volatility due to geopolitical events or economic announcements. This card outlines **advanced techniques for mitigating risk during sudden market disruptions**.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on volatility metrics. Use the Average True Range (ATR) to determine the appropriate size; for example, if the ATR for EURUSD is 0.0050, consider reducing position size by 50% during high-impact news events.\n* **Hedging Strategies**: Implement hedging through correlated pairs. For instance, if holding a long position in AUDUSD, consider a short position in AUDJPY to offset potential losses during a market shock.\n* **Stop-Loss Adjustments**: Utilize trailing stops to protect gains while allowing for volatility. Set a trailing stop of 30 pips for a long position in GBPUSD to secure profits while accommodating price fluctuations.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting trade sizes based on market volatility."
        },
        {
          "term": "Hedging",
          "definition": "Taking an offsetting position to reduce potential losses."
        },
        {
          "term": "Trailing Stop",
          "definition": "A stop-loss order that moves with the market price."
        }
      ],
      "whyThisMatters": "Effective risk mitigation strategies are essential for maintaining capital during unpredictable market events, ensuring long-term trading viability.",
      "realLifeExample": "During the 2016 Brexit vote, traders using dynamic position sizing reduced exposure on GBP pairs, avoiding significant losses as GBPUSD dropped 800 pips within hours.",
      "commonMistake": "Failing to adjust position sizes in response to increased volatility can lead to excessive losses.",
      "quickNote": "Dynamic adjustments are crucial for risk management in volatile forex conditions.",
      "mentorText": "When volatility spikes, I adjust my position sizes immediately. If I see the ATR rising, I know to reduce my exposure to avoid getting caught in a rapid downturn.",
      "mentorAnalogy": "Think of risk mitigation in trading like a pilot adjusting altitude during turbulence; you must respond quickly to maintain control and ensure safety."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "concept",
    "title": "Creating Comprehensive Forex Recovery Plans",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C6 -->\n### Core Scenario: Developing Forex Recovery Plans\nMarket disruptions can lead to significant drawdowns, necessitating a structured recovery plan. This card details **how to formulate a robust recovery strategy tailored for forex traders**.\n\n* **Predefined Recovery Thresholds**: Establish clear thresholds for drawdowns that trigger recovery protocols. For example, if your account equity drops by 10%, initiate a recovery plan that includes reduced position sizes and increased risk assessment.\n* **Diversification Protocol**: Diversify across multiple currency pairs to spread risk. For instance, if heavily invested in EURUSD, consider adding positions in USDJPY and NZDCAD to balance exposure during market turbulence.\n* **Scheduled Review Sessions**: Implement regular review sessions to assess the effectiveness of recovery strategies. Schedule bi-weekly evaluations to analyze performance and adjust plans based on market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Recovery Threshold",
          "definition": "A predetermined level of loss that triggers a recovery plan."
        },
        {
          "term": "Diversification",
          "definition": "Spreading investments across different assets to reduce risk."
        },
        {
          "term": "Review Sessions",
          "definition": "Scheduled evaluations of trading performance and strategies."
        }
      ],
      "whyThisMatters": "A well-structured recovery plan enables traders to respond effectively to market disruptions, minimizing losses and facilitating a return to profitability.",
      "realLifeExample": "After a 12% drawdown during the Swiss Franc shock in 2015, traders with predefined recovery thresholds successfully implemented reduced risk strategies, allowing them to recover within three months.",
      "commonMistake": "Neglecting to establish recovery thresholds can lead to emotional decision-making during drawdowns.",
      "quickNote": "A structured recovery plan is essential for navigating market disruptions effectively.",
      "mentorText": "I always set my recovery thresholds before I trade. When the market moves against me, I know exactly when to pull back and reassess my strategy.",
      "mentorAnalogy": "Creating a recovery plan is like an architect designing a building with safety protocols; you must prepare for unexpected events to ensure stability."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  },
  {
    "type": "practice",
    "title": "Forex Scenario Simulation Exercise",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C7 -->\n### Core Scenario: Forex Scenario Simulation Exercise\nEngage in a practical simulation to test your response to extreme market conditions. This exercise focuses on **managing sudden currency peg removals and spread freezes**.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Currency Peg",
          "definition": "A fixed exchange rate between two currencies."
        },
        {
          "term": "Spread Freeze",
          "definition": "A situation where bid-ask spreads widen significantly."
        }
      ],
      "whyThisMatters": "Practicing responses to extreme scenarios prepares traders to act decisively and effectively during real market disruptions.",
      "realLifeExample": "During the Swiss National Bank's removal of the EUR/CHF peg in January 2015, traders who practiced scenario simulations were able to react quickly, mitigating losses.",
      "commonMistake": "Failing to simulate extreme scenarios can result in unpreparedness when real market disruptions occur.",
      "quickNote": "Scenario simulations enhance your readiness for unexpected market events.",
      "mentorText": "In this simulation, treat every decision as if real capital is at stake. Your ability to react under pressure will define your success during actual market disruptions.",
      "mentorAnalogy": "Think of this exercise like a firefighter training for emergencies; you must practice under pressure to ensure you can respond effectively when it counts."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are holding a long position in USD/CHF when the Swiss National Bank unexpectedly removes the currency peg. What should be your immediate action?",
      "options": [
        {
          "id": "0",
          "text": "Close the position immediately to limit losses.",
          "isCorrect": true,
          "feedback": "Closing the position immediately is a prudent action to prevent further losses due to extreme volatility."
        },
        {
          "id": "1",
          "text": "Hold the position and wait for the market to stabilize.",
          "isCorrect": false,
          "feedback": "Holding the position without action could lead to significant losses as the market reacts."
        },
        {
          "id": "2",
          "text": "Increase the position size to average down.",
          "isCorrect": false,
          "feedback": "Increasing position size during extreme volatility can amplify losses."
        },
        {
          "id": "3",
          "text": "Set a wide stop-loss and wait.",
          "isCorrect": false,
          "feedback": "A wide stop-loss may not protect you adequately during rapid price movements."
        }
      ]
    },
    "visualKey": "stress-test-model"
  },
  {
    "type": "summary",
    "title": "Forex Module Recap and Key Insights",
    "label": "Forex Track",
    "body": "<!-- M9.5-forex-C8 -->\n### Core Scenario: Forex Module Recap and Key Insights\nThis module has equipped traders with essential strategies for managing extreme market disruptions. Key insights include **the importance of preparedness and structured recovery protocols**.\n\n* **Risk Mitigation Techniques**: Advanced strategies such as dynamic position sizing and hedging are critical for managing exposure during volatile conditions.\n* **Comprehensive Recovery Plans**: Establishing predefined recovery thresholds and diversification protocols ensures traders can respond effectively to drawdowns.\n* **Practical Simulations**: Engaging in scenario simulations prepares traders for real-world challenges, enhancing decision-making under pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Preparedness",
          "definition": "The state of being ready to respond to market disruptions."
        },
        {
          "term": "Structured Recovery Protocols",
          "definition": "Defined procedures for recovering from trading losses."
        }
      ],
      "whyThisMatters": "Summarizing these insights reinforces the necessity of having robust strategies in place to navigate unforeseen market events successfully.",
      "realLifeExample": "Traders who implemented the strategies discussed in this module successfully navigated the 2020 COVID-19 market volatility, demonstrating the effectiveness of preparedness.",
      "commonMistake": "Overlooking the importance of structured recovery can lead to severe financial setbacks during market disruptions.",
      "quickNote": "Preparedness and structured recovery are vital for successful forex trading.",
      "mentorText": "Reflect on what you've learned. The strategies we discussed are not just theory; they are your lifeline during market chaos. Implement them diligently.",
      "mentorAnalogy": "A successful trader is like a seasoned pilot; thorough preparation and clear protocols are essential for navigating through turbulence safely."
    },
    "taskData": null,
    "visualKey": "stress-test-model"
  }
];
