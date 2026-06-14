import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.6 - Forex Track Cards
 * Focus: Forex Evidence Audit: Reading Pair Behavior Through Context
 */
export const forexCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Forex Evidence Audit Starts With Pair Behavior",
    label: "Forex Foundation",
    visualKey: "forex-evidence-audit-foundation",
    body: "When you look at a Forex chart, you are not looking at a single asset moving in a vacuum. You are looking at a relationship between two completely separate currencies. If you look at EUR/USD, every candle, swing, or breakout is a visual record of the tug-of-war between the Euro and the US Dollar. To read a Forex pair safely, we cannot just react to a single colored candle. We have to audit the whole picture: what are the currencies building, when are they moving, and does the broader context support what we see?",
    context: {
      keyTerms: [
        { term: "Currency Pair", definition: "A financial instrument comparing the relative value of one currency against another." },
        { term: "Relative Pressure", definition: "The changing balance of strength and weakness between two currencies." },
        { term: "Forex Audit", definition: "Checking multiple layers of pair behavior and context before drawing a reading." },
        { term: "Session Window", definition: "The active trading hours of a major regional market (Asia, London, New York)." },
        { term: "USD Context", definition: "Checking whether the US Dollar is driving the movement across multiple pairs." }
      ],
      whyThisMatters: "Thinking of a pair as one single stock makes you miss the relative forces at play. An audit forces you to check both currencies and their session environments first.",
      realLifeExample: "A beginner sees EUR/USD spike upward and shouts, 'The Euro is exploding!' A mentor points out that GBP/USD and AUD/USD are spiking at the exact same second, meaning the real driver is USD weakness, not Euro strength.",
      commonMistake: "Analyzing a currency pair as if only the base currency is active, ignoring the quote currency.",
      quickNote: "A Forex chart is a relationship. Always check both sides of the scale before you trust a move."
    }
  },
  {
    type: "visual_intro",
    title: "One Forex Candle Is Not the Whole Pair Story",
    label: "Single-Candle Trap",
    visualKey: "forex-single-candle-trap",
    body: "It is incredibly easy to get excited by a single, large green or red candle on a Forex chart. Beginners often look at a massive candle and think, 'This momentum is unstoppable, I have to buy now!' But in Forex, that single candle could just be a short-term session burst, a temporary news reaction, or a sweep of local liquidity. A single candle can start a question—'Is this the beginning of something new?'—but it can never answer it. We must stack it against session ranges, structure, and higher-timeframe boundaries.",
    context: {
      keyTerms: [
        { term: "Single-Candle Trap", definition: "The mistake of assuming a direction based solely on the size or color of one isolated candle." },
        { term: "Session Burst", definition: "A brief spike in trading activity that does not result in a structural shift." },
        { term: "Range Boundary", definition: "The upper or lower limits of a defined trading area." },
        { term: "Liquidity Sweep", definition: "A quick price spike beyond a key level designed to activate orders before reversing." },
        { term: "Evidence Stack", definition: "The sequential check of multiple technical layers to confirm a reading." }
      ],
      whyThisMatters: "Reacting to isolated candles in Forex leads to chasing price at the exact moment the market is preparing to rotate or trap late buyers.",
      realLifeExample: "EUR/USD prints a strong green candle during the London session. However, when you zoom out, you see that price is still stuck inside the quiet Asian session range and sits directly below a daily resistance area. The single green candle is a trap, not a breakout.",
      commonMistake: "Buying or selling immediately after a large candle closes, without checking where it closed relative to structure.",
      quickNote: "One candle is just a single word in a sentence. Read the whole sentence before you make a decision."
    }
  },
  {
    type: "visual_intro",
    title: "Session Context Shapes Forex Evidence",
    label: "Session Context",
    visualKey: "forex-session-context-evidence",
    body: "The Forex market is open 24 hours a day, but it does not behave the same way all day. It moves through distinct regional sessions: Asia, London, and New York. Because different institutions are active at different times, the weight of your evidence changes depending on the clock. A breakout candle printed during quiet Asian hours carries a very different meaning than one printed during the high-volume London and New York overlap. We must always ask: 'When did this evidence form?'",
    context: {
      keyTerms: [
        { term: "Asian Session", definition: "A lower-volume trading session characterized by consolidation and range-bound behavior." },
        { term: "London Session", definition: "The high-volume session where major trends and intraday ranges are typically established." },
        { term: "New York Session", definition: "The session where US data releases occur, often bringing reversals or expansion." },
        { term: "Session Overlap", definition: "The peak liquidity window when both London and New York markets are open together." },
        { term: "Volume Weight", definition: "Evaluating the significance of a move based on the liquidity of the active session." }
      ],
      whyThisMatters: "Without session context, you will treat slow, low-volume deviations the same as major institutional expansions, leading to incorrect structure readings.",
      realLifeExample: "Price drifts slowly above a resistance level at 11:00 PM EST (during the Asian session). There is no volume or momentum. A disciplined trader ignores this 'breakout' because it lacks session weight.",
      commonMistake: "Expecting high-momentum trend continuation during the middle of the Asian session.",
      quickNote: "Session timing doesn't give you buy or sell signals. It tells you how much weight to give the evidence."
    }
  },
  {
    type: "visual_intro",
    title: "Session Highs and Lows Become Evidence Areas",
    label: "Session Evidence Areas",
    visualKey: "forex-session-high-low-evidence",
    body: "Instead of drawing hundreds of support and resistance lines on your chart, focus on the most active reference points: session highs and lows. The high and low of the Asian range, London's initial push, and New York's early boundaries are key locations. When price returns to these areas, it is test time. We do not predict that the line will hold or break. We audit the behavior: does price sweep and snap back inside, or does it close strongly outside and hold?",
    context: {
      keyTerms: [
        { term: "Asian High/Low", definition: "The extreme high and low price established during the Asian trading hours." },
        { term: "Session Test", definition: "Price returning to a previous session high or low to check for participation." },
        { term: "Sweep and Return", definition: "When price briefly crosses a session extreme to trigger liquidity, then reverses back inside." },
        { term: "Expansion", definition: "When price breaks out of a session range and successfully holds outside." },
        { term: "Reference Area", definition: "A key price level where historical reactions occurred." }
      ],
      whyThisMatters: "Focusing on session extremes cleans up your charts and focuses your attention on where institutions actually place their orders.",
      realLifeExample: "EUR/USD spikes 10 pips above the Asian session high at London Open, but the London candle closes back inside the Asian range with a long upper wick. This tells you the sellers are defending the high.",
      commonMistake: "Assuming that price merely touching or crossing a session high means an automatic breakout.",
      quickNote: "Session highs and lows are not brick walls. They are zones where you watch to see who wins the fight."
    }
  },
  {
    type: "visual_intro",
    title: "USD Context Can Change the Reading",
    label: "USD Context",
    visualKey: "forex-usd-context-reading",
    body: "Because the US Dollar (USD) is on one side of most major Forex pairs, it acts as the master driver of the market. If you are auditing EUR/USD, GBP/USD, or AUD/USD, you cannot analyze them in isolation. You must check the general pressure of the USD itself. If all major USD pairs are moving in harmony, your reading is highly supported. If a pair is trying to move alone while the USD is flat, the evidence is mixed and less reliable.",
    context: {
      keyTerms: [
        { term: "US Dollar Index (DXY)", definition: "A measure of the US Dollar's value compared to other major global currencies." },
        { term: "Currency Correlation", definition: "The tendency of different currency pairs to move in similar or opposite directions." },
        { term: "USD Pressure", definition: "The market-wide strength or weakness of the US Dollar." },
        { term: "Harmonic Movement", definition: "When multiple pairs align to reflect the same underlying currency driver." },
        { term: "Divergent Movement", definition: "When a pair moves against the general USD trend, indicating unique local strength." }
      ],
      whyThisMatters: "Ignoring the USD's overall strength is like sailing without checking which way the ocean current is flowing.",
      realLifeExample: "You see EUR/USD breaking down and want to call it a clear bearish read. You look at GBP/USD and USD/JPY and realize the Dollar is flat. EUR/USD is moving alone due to a local Euro news item, making it a lower-quality, mixed read.",
      commonMistake: "Trading a USD pair without checking if the Dollar Index is sitting at a major weekly support or resistance.",
      quickNote: "Before you trust a pair breakout, check if the Dollar is driving the bus."
    }
  },
  {
    type: "visual_intro",
    title: "Related Pairs Help Confirm or Challenge Evidence",
    label: "Related-Pair Context",
    visualKey: "forex-related-pair-evidence",
    body: "To build a high-quality Forex reading, we compare related pairs to see if they confirm each other. EUR/USD and GBP/USD are closely related because they both trade against the US Dollar and represent European currencies. If EUR/USD is breaking a resistance level, look over at GBP/USD. Are they moving together in alignment? If both pairs show the same pressure, the evidence is confirmed. If they disagree, you have conflict.",
    context: {
      keyTerms: [
        { term: "Related Pairs", definition: "Pairs that share similar geographic, economic, or currency relationships." },
        { term: "Confirmation check", definition: "Comparing related charts to verify if a market-wide driver is active." },
        { term: "Related-Pair Conflict", definition: "When one pair breaks a level while a related pair fails to move." },
        { term: "Tunnel Vision", definition: "The dangerous habit of focusing entirely on one chart without looking at the broader market." },
        { term: "Confluence Audit", definition: "Gathering supporting evidence from related instruments." }
      ],
      whyThisMatters: "Comparing related pairs acts as a safety filter, saving you from buying fake breakouts that aren't backed by market-wide participation.",
      realLifeExample: "EUR/USD surges above its session high. You check GBP/USD and see it is sitting flat, unable to break its own high. This related-pair conflict warns you that the EUR/USD move is an isolated deviation.",
      commonMistake: "Failing to check GBP/USD when trading EUR/USD, leading to entering trades during structural divergence.",
      quickNote: "If the move is real, it will usually show up on more than one chart. Don't trade the loner."
    }
  },
  {
    type: "visual_intro",
    title: "Macro Events Can Distort Forex Evidence",
    label: "Event Distortion",
    visualKey: "forex-event-distortion-audit",
    body: "Economic reports, inflation releases (like CPI), employment numbers (NFP), and central bank rate decisions are major market events. During these releases, price can move hundreds of price units (known as pips) in a few seconds. These spikes are not organic structure; they are event distortions. A giant candle might break three levels, sweep the highs, and reverse instantly. As disciplined auditors, we do not guess event outcomes. We step aside and wait for the dust to settle.",
    context: {
      keyTerms: [
        { term: "Macro Release", definition: "Scheduled economic data reports that impact currency valuations." },
        { term: "Event Distortion", definition: "Extreme volatility and price spikes caused by news releases rather than technical trends." },
        { term: "Non-Farm Payrolls (NFP)", definition: "A major monthly US job report that causes extreme Dollar volatility." },
        { term: "CPI Release", definition: "Consumer Price Index (CPI) report, which shows inflation trends." },
        { term: "Post-News Stabilization", definition: "Waiting for price to form clear structure and candle closes after a news spike." }
      ],
      whyThisMatters: "Trying to audit a chart in the middle of a news release is impossible because the algorithms are clearing out orders on both sides.",
      realLifeExample: "During an interest rate decision, GBP/USD spikes 60 pips up, then 80 pips down, leaving giant wicks on the 15m chart. A beginner tries to trade the wicks. A mentor waits for the session to close to see where price actually stabilizes.",
      commonMistake: "Assuming a high-speed news candle is a 'clear trend breakout' and chasing it as it moves.",
      quickNote: "Let the news create the spike. Wait for the stabilizer close to read the actual story."
    }
  },
  {
    type: "visual_intro",
    title: "Aligned Forex Evidence vs Mixed Forex Evidence",
    label: "Alignment and Conflict",
    visualKey: "forex-aligned-vs-mixed-evidence",
    body: "Now it is time to classify our reading. We have a clear reading when our evidence layers align: the pair structure is trending, price is reacting at a key session location, USD context supports the move, and related pairs agree. We have a mixed reading when we have conflict: for example, EUR/USD is breaking a local high, but GBP/USD is flat, and price is approaching a major daily resistance. Learn to classify these states objectively.",
    context: {
      keyTerms: [
        { term: "Aligned Evidence", definition: "When session, structure, USD, and related pairs all support the same reading." },
        { term: "Mixed Evidence", definition: "When some layers show strength but others actively limit the reading's quality." },
        { term: "Reading Classification", definition: "Labeling the market state as Clear, Mixed, or Unclear." },
        { term: "Limiting Clues", definition: "Clues that conflict with a breakout or trend and reduce setup probability." },
        { term: "Trading Filter", definition: "Using evidence classification to skip low-quality, high-risk environments." }
      ],
      whyThisMatters: "By dividing charts into clear and mixed, you build a filter that keeps you out of low-probability consolidations.",
      realLifeExample: "EUR/USD breaks the Asian high at London Open, closes strong, USD Index is breaking support, and GBP/USD is also breaking out. This is a clear aligned reading. If GBP/USD was flat and USD was neutral, the reading would be mixed.",
      commonMistake: "Treating a mixed reading as if it were clear because you are eager to get into a trade.",
      quickNote: "A professional doesn't try to trade every setup. They wait for the alignments that require no arguments."
    }
  },
  {
    type: "visual_intro",
    title: "Forex Verification: What Must Happen Next?",
    label: "Verification Logic",
    visualKey: "forex-verification-workflow",
    body: "The final step of the audit is defining your verification checkpoints. Instead of predicting that price will continue in your direction, you write down a question for the market to answer. For a bullish breakout, the verification is: 'Does price hold above the broken session high, and does USD pressure remain weak?' If yes, the reading is verified. If price slips back inside, the reading is invalid. Let the market prove itself first.",
    context: {
      keyTerms: [
        { term: "Verification Checkpoint", definition: "A specific price behavior required to confirm a reading before taking action." },
        { term: "Invalidation Boundary", definition: "A level that, if crossed, proves the initial reading is no longer valid." },
        { term: "Pullback Hold", definition: "When price returns to a broken level and holds above it, showing support." },
        { term: "Execution Filter", definition: "Waiting for verification checkpoints to prevent entering fake movements." },
        { term: "Market Proof", definition: "Allowing price action to confirm your thesis rather than predicting it." }
      ],
      whyThisMatters: "Verification logic turns you from a gambler guessing breakout directions into an auditor checking off safety rules.",
      realLifeExample: "Price breaks above the London session high. Instead of buying immediately, you say, 'I need to see the next candle close above this level, and USD index continue falling.' The next candle fails and closes inside, saving you from a loss.",
      commonMistake: "Failing to establish an invalidation level, leading to holding onto a trade when the market has clearly proven you wrong.",
      quickNote: "Do not guess if the door is unlocked. Push on it and see if it opens."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Auditing Evidence Conflict",
    label: "Practice Drill",
    visualKey: "forex-evidence-audit-practice-drill",
    body: "Let's put your audit skills to the test. In this drill, we analyze a scenario during the New York morning session. GBP/USD has surged to break a local swing high, appearing strongly bullish. However, you must audit the related context layers (EUR/USD and DXY) before drawing a conclusion.",
    taskData: {
      type: "choice_block",
      question: "During the New York morning, GBP/USD pushes above a local swing high with a strong green candle. You audit the context: EUR/USD is completely flat, stuck in a narrow range. The US Dollar Index (DXY) is hitting a major daily support level and printing rejection wicks (showing buying interest). What is the disciplined reading of this GBP/USD move?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because GBP/USD broke a swing high with strong momentum.",
          isCorrect: false,
          feedback: "Incorrect. While GBP/USD has local momentum, the lack of confirmation from EUR/USD and the USD index hitting daily support create significant conflict. This is not a clear reading."
        },
        {
          id: "B",
          text: "Mixed evidence due to related-pair divergence and USD context conflict at major support.",
          isCorrect: true,
          feedback: "Correct! The evidence is mixed and conflicting. GBP/USD is moving in isolation while EUR/USD is flat, and DXY is hitting a major daily support floor. A strength reaction on the Dollar Index could quickly reverse the GBP/USD breakout, so a disciplined reader classifies this as mixed and waits for alignment."
        },
        {
          id: "C",
          text: "Guaranteed reversal because the Dollar Index is at support.",
          isCorrect: false,
          feedback: "Incorrect. A support level on the Dollar Index suggests potential USD strength, but it does not guarantee an immediate reversal. A disciplined learner avoids predicting absolute reversals and instead remains patient."
        },
        {
          id: "D",
          text: "Ignore the other charts since GBP/USD is the only pair being traded.",
          isCorrect: false,
          feedback: "Incorrect. Forex pairs are currency relationships. Ignoring the Dollar Index and closely related pairs leads to trading blind and missing institutional context."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Disciplined Reading", definition: "A chart assessment that accepts and logs conflicting clues." },
        { term: "Related-Pair Divergence", definition: "When closely correlated pairs (like EUR/USD and GBP/USD) move in opposite directions or fail to confirm each other's breakouts." },
        { term: "USD Support Reaction", definition: "When the US Dollar Index reaches a historical support zone, suggesting a potential dollar rally that could pressure other pairs." },
        { term: "Isolated Move", definition: "A price breakout on one currency pair that is not supported by market-wide currency trends." },
        { term: "Evidence Checklist", definition: "The mental or written list of factors monitored during an audit." }
      ],
      whyThisMatters: "This scenario trains you to notice warning signs rather than just seeing what you want to see.",
      realLifeExample: "You notice GBP/USD rallies, but EUR/USD is flat and the Dollar Index is bouncing off daily support. You label the read as mixed and wait, saving your account from a false breakout trap as the Dollar Index rises and pushes GBP/USD back down.",
      commonMistake: "Ignoring the lack of related pair confirmation because the GBP/USD breakout looks fast.",
      quickNote: "A breakout without related-pair confirmation and facing USD support is a warning to wait."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Forex Reading Is Pair Evidence Under Context",
    label: "Forex Debrief",
    visualKey: "forex-evidence-audit-debrief",
    body: "Congratulations! You have completed the Level 0 Forex Roadway. You have shifted your mindset from a retail trader chasing signals to a disciplined analyst auditing pair behavior. You now know that a Forex chart is a relationship of two currencies, shaped by session clocks, USD strength, related pair confirmation, and verification checkpoints. You have built a solid foundation that will protect you from retail traps as you progress to Level 1.",
    context: {
      keyTerms: [
        { term: "Forex Auditor", definition: "A trader who reviews session, structure, USD, and related pairs before acting." },
        { term: "Relationship Reading", definition: "Evaluating charts as currency balances rather than single assets." },
        { term: "Session Awareness", definition: "Factoring the active regional market hours into technical interpretations." },
        { term: "Confluence Filter", definition: "Using USD Index and related pair alignment to confirm setups." },
        { term: "Trader Foundation", definition: "The set of structural rules that guides objective chart analysis." }
      ],
      whyThisMatters: "Developing a systematic check of Forex context at Level 0 is what separates professionals who preserve capital from retail traders who blow accounts.",
      realLifeExample: "A Lurnava graduate opens EUR/USD. They check the time (London Open), the structure (uptrend), USD index (weak), GBP/USD (also strong), and define their verification pullback. They trade with clarity.",
      commonMistake: "Slipping back into trading wicks in isolation once you move to live market environments.",
      quickNote: "Do not predict first. Audit the pair, check the sessions, and wait for confirmation."
    }
  }
];
