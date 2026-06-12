import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Session and News Confirmation",
    "label": "Forex Track",
    "body": "Confirming trade setups after the opening of FX sessions or scheduled news releases is critical to ensure alignment with institutional flows and market sentiment. This mission brief outlines the necessity of waiting for these confirmations before activating your trading plan.",
    "context": {
      "keyTerms": [
        {
          "term": "FX Session",
          "definition": "A period when a specific financial center is open for trading, influencing currency volatility."
        },
        {
          "term": "News Release",
          "definition": "Scheduled announcements that can impact market conditions, such as economic data or central bank decisions."
        }
      ],
      "whyThisMatters": "Confirming setups after session opens or news releases helps traders align with true market direction, avoiding false signals and noise.",
      "realLifeExample": "A trader waits for the London session to open before confirming a GBPUSD setup, observing initial price reactions to ensure alignment with institutional flows.",
      "commonMistake": "Rushing into trades immediately at session open or news release without waiting for confirmation of market direction.",
      "quickNote": "Wait for session and news confirmations to align with market sentiment.",
      "mentorText": "Before you engage, ensure the market reveals its hand post-session open or news. This is your cue, not the clock.",
      "mentorAnalogy": "Think of it like a surgeon waiting for the patient's vital signs to stabilize before proceeding with the operation."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "concept",
    "title": "Confirmation After Session Opens",
    "label": "Forex Track",
    "body": "### Confirmation After Session Opens: Initial Market Reactions\nTrade setups require confirmation immediately after the FX session opens to ensure alignment with market sentiment.\n\n* **Initial Reaction Analysis**: Observe the first 15-30 minutes of the session for directional bias. A clear move with volume supports confirmation; erratic movements suggest caution.\n* **Spread Behavior**: Monitor the spread during the session open. Elevated spreads can indicate uncertainty and should be a red flag for immediate entries.\n* **Volume Confirmation**: Increased volume during the session open that aligns with price movement strengthens the setup's validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Directional Bias",
          "definition": "The expected direction of price movement based on current market conditions."
        },
        {
          "term": "Spread",
          "definition": "The difference between the bid and ask price of a currency pair."
        }
      ],
      "whyThisMatters": "Confirming setups after session opens helps traders avoid false starts and align trades with genuine market sentiment.",
      "realLifeExample": "During the Tokyo session opening, USDJPY shows a clear bullish move with tight spreads, confirming a long setup.",
      "commonMistake": "Entering trades based on pre-session analysis without waiting for the session's initial market reaction.",
      "quickNote": "Session opens reveal true market direction; confirm before acting.",
      "mentorText": "Watch the market's first steps as the session opens. It's like reading the opening lines of a book to understand the plot.",
      "mentorAnalogy": "Like a pilot checking wind conditions before takeoff, confirm the market's direction post-session open before you launch your trade."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "concept",
    "title": "Post-News Release Confirmation",
    "label": "Forex Track",
    "body": "### Post-News Release Confirmation: Ensuring Structural Integrity\nConfirm trade setups following major news releases by assessing market reactions and structural integrity amidst volatility.\n\n* **Volatility Assessment**: Evaluate the initial spike in volatility post-news. A sustained directional move with volume indicates confirmation; erratic spikes suggest instability.\n* **Structural Integrity Check**: Ensure price action respects key levels and does not breach critical support or resistance without follow-through.\n* **Volume and Momentum Correlation**: Confirm that volume supports the momentum of the move, indicating genuine market interest rather than speculative noise.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        },
        {
          "term": "Structural Integrity",
          "definition": "The adherence of price action to established technical levels and patterns."
        }
      ],
      "whyThisMatters": "Post-news confirmation ensures trades are based on genuine market reactions rather than transient volatility spikes.",
      "realLifeExample": "After a US Non-Farm Payrolls release, EURUSD breaks a key resistance with strong volume, confirming a bullish setup.",
      "commonMistake": "Reacting to the initial news spike without confirming the move's sustainability and structural support.",
      "quickNote": "News spikes need structural confirmation for trade validity.",
      "mentorText": "Post-news, don't chase the spike. Confirm the move's integrity before you engage.",
      "mentorAnalogy": "Like an engineer testing a bridge's stability after an earthquake, ensure the market's structure holds post-news before crossing."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "concept",
    "title": "Waiting for Spread Normalization",
    "label": "Forex Track",
    "body": "### Waiting for Spread Normalization: Reducing Premature Entries\nWaiting for spread normalization is crucial to confirm trade setups, reducing the risk of premature entries.\n\n* **Spread Monitoring**: Post-session or news, monitor spreads to ensure they return to typical levels. Elevated spreads can skew risk-reward calculations.\n* **Entry Timing**: Avoid entering trades during periods of spread expansion. Wait for spreads to normalize to ensure fair execution prices.\n* **Risk Management Alignment**: Ensure that normalized spreads align with your predefined risk management parameters, maintaining the integrity of your trading plan.",
    "context": {
      "keyTerms": [
        {
          "term": "Spread Normalization",
          "definition": "The return of the bid-ask spread to typical levels after a period of expansion."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure of the potential reward of a trade relative to its risk."
        }
      ],
      "whyThisMatters": "Spread normalization ensures that trade entries are executed at fair prices, preserving the trade's risk-reward profile.",
      "realLifeExample": "After a volatile news release, a trader waits for EURUSD spreads to return to 1 pip before entering a trade, ensuring optimal execution.",
      "commonMistake": "Entering trades during spread expansion, leading to unfavorable entry prices and distorted risk-reward ratios.",
      "quickNote": "Normalized spreads ensure fair trade execution.",
      "mentorText": "Let the spreads settle before you act. It's like waiting for the dust to clear after a storm to see the path ahead.",
      "mentorAnalogy": "Like a chef waiting for the oven to reach the right temperature before baking, ensure spreads are normalized before entering trades."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "concept",
    "title": "Confirmation in Volatile Conditions",
    "label": "Forex Track",
    "body": "### Forex Session News Confirmation: Volatile Conditions\nVolatile market conditions can obscure structural signals. This card details **strategies to confirm trades amidst rapid price changes**.\n\n* **Volatility Filter**: Implement a volatility filter by using ATR (Average True Range) to gauge acceptable price movement. If ATR exceeds a predefined threshold, delay confirmation until volatility subsides.\n* **News Impact Assessment**: Identify news events that could cause volatility spikes. Confirm setups only if the price action aligns with the expected directional bias post-news release.\n* **Structural Integrity Check**: Ensure that key support and resistance levels hold firm despite volatility. A breach without recovery invalidates the setup.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Filter",
          "definition": "A mechanism to assess and control trade entry based on market volatility levels."
        },
        {
          "term": "ATR",
          "definition": "Average True Range, a technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Volatile conditions can lead to false signals. Confirming trades in such environments ensures structural integrity and reduces risk.",
      "realLifeExample": "During the EURUSD spike at the 8:30 AM EST NFP release, ATR doubled. A trader waited for ATR to normalize before confirming a breakout setup.",
      "commonMistake": "Entering trades immediately after news releases without assessing volatility often leads to premature stop-outs.",
      "quickNote": "Volatility can mask true direction; confirm only when the dust settles.",
      "mentorText": "In volatile conditions, you must wait for the storm to pass before setting sail. Confirm only when the sea is calmer.",
      "mentorAnalogy": "Like a pilot waiting for turbulence to clear before making a landing decision, traders must wait for volatility to stabilize before confirming trades."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "concept",
    "title": "Confirmation During Session Transitions",
    "label": "Forex Track",
    "body": "### Forex Session News Confirmation: Session Transitions\nSession transitions can disrupt market structure. This card explains **how to confirm setups during these transitions**.\n\n* **Session Overlap Analysis**: During overlaps, such as London to New York, confirm setups by ensuring that the directional bias is maintained across both sessions.\n* **Opening Range Verification**: Use the first 30 minutes of a session to establish an opening range. Confirm setups only if the price action respects this range.\n* **Cross-Session Consistency**: Validate that key levels from the prior session are respected in the new session. A failure to hold these levels indicates a lack of confirmation.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two forex market sessions are open simultaneously."
        },
        {
          "term": "Opening Range",
          "definition": "The high and low price range established during the initial period of a trading session."
        }
      ],
      "whyThisMatters": "Session transitions can lead to conflicting signals. Confirming setups ensures continuity and reduces the risk of false entries.",
      "realLifeExample": "During the London to New York transition, GBPUSD respected the London session high, confirming a bullish continuation setup.",
      "commonMistake": "Ignoring session transitions can lead to entering trades against the prevailing trend established in the new session.",
      "quickNote": "Session transitions can shift tides; confirm with cross-session consistency.",
      "mentorText": "When sessions change, it's like a shift change at a factory. Ensure the new crew continues the work seamlessly before committing.",
      "mentorAnalogy": "Like a relay race where the baton must be passed smoothly, session transitions require confirmation that the market's direction is maintained."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "practice",
    "title": "Forex Confirmation Practice",
    "label": "Forex Track",
    "body": "### Forex Session News Confirmation: Practice\nApply confirmation strategies in practical scenarios, focusing on session and news-related structural verification.",
    "context": {
      "keyTerms": [
        {
          "term": "Structural Verification",
          "definition": "The process of confirming that market structure aligns with trading criteria before entering a trade."
        }
      ],
      "whyThisMatters": "Practical application of confirmation strategies solidifies understanding and prepares traders for real market conditions.",
      "realLifeExample": "A trader uses ATR and session overlap analysis to confirm a USDJPY setup during the Tokyo to London transition.",
      "commonMistake": "Failing to apply learned confirmation techniques in live scenarios leads to inconsistent trading results.",
      "quickNote": "Practice confirms theory; apply strategies to real scenarios.",
      "mentorText": "You can't just read about trading; you must practice confirming setups in real-time to master the craft.",
      "mentorAnalogy": "Like a surgeon practicing procedures in a controlled environment before operating, traders must practice confirmation strategies before live trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a London to New York session overlap, EURUSD shows a bullish trend. The ATR is high due to a recent news release. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Wait for ATR to normalize before confirming the setup.",
          "isCorrect": true,
          "feedback": "Correct. High ATR indicates volatility; waiting ensures a more stable environment for confirmation."
        },
        {
          "id": "1",
          "text": "Enter the trade immediately to capitalize on momentum.",
          "isCorrect": false,
          "feedback": "Incorrect. Entering during high volatility without confirmation can lead to false signals."
        },
        {
          "id": "2",
          "text": "Ignore the session overlap and focus solely on news impact.",
          "isCorrect": false,
          "feedback": "Incorrect. Session overlaps can provide crucial confirmation signals that should not be ignored."
        },
        {
          "id": "3",
          "text": "Use only the opening range of the New York session for confirmation.",
          "isCorrect": false,
          "feedback": "Incorrect. Both session overlap and volatility considerations are important for confirmation."
        }
      ]
    },
    "visualKey": "forex-session-news-confirmation"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Confirmation Techniques",
    "label": "Forex Track",
    "body": "### Forex Session News Confirmation: Summary\nReview key techniques for confirming forex setups, emphasizing session and news-related verification strategies.\n\n* **Volatility and News**: Use ATR and news impact assessments to filter setups in volatile conditions, ensuring structural integrity.\n* **Session Transitions**: Confirm setups during session transitions by analyzing session overlaps and verifying opening ranges.\n* **Cross-Session Consistency**: Ensure that key levels from prior sessions are respected in new sessions to confirm trade setups.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Session Consistency",
          "definition": "Ensuring that market structure and key levels are maintained across different trading sessions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of confirmation techniques enhances trade accuracy and reduces the risk of false entries.",
      "realLifeExample": "A trader uses both volatility filters and session transition analysis to confirm a GBPUSD setup, leading to a successful trade.",
      "commonMistake": "Failing to integrate all confirmation techniques can lead to incomplete analysis and suboptimal trading decisions.",
      "quickNote": "Integrate all techniques for robust confirmation.",
      "mentorText": "Think of confirmation as a checklist. Each technique is a box to tick off before you commit to a trade.",
      "mentorAnalogy": "Like an architect ensuring all structural elements are verified before construction, traders must confirm all aspects of a setup before execution."
    },
    "taskData": null,
    "visualKey": "forex-session-news-confirmation"
  }
];
