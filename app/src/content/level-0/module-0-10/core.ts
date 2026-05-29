import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.10 - Specialized Forex Reading Lab Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Forex Reading Needs Pair Pressure Discipline",
    label: "Forex Lab Foundation",
    visualKey: "forex-reading-lab-foundation",
    body: "Forex (Foreign Exchange) is not one asset moving alone. A currency pair moves because the balance of pressure shifts between two different national economies. A disciplined Forex learner does not react to a single fast candle or a session range break first. They check what pressure is moving the pair, when the move formed, what wider USD/DXY context supports it, whether related pairs are confirming the story, and what must happen next to verify it. In this Forex Reading Lab, you will learn to combine these layers into a clinical, evidence-based reading process.",
    context: {
      keyTerms: [
        { term: "Forex Pair", definition: "A relationship between two currencies where the first currency is compared to the second." },
        { term: "Pair Pressure", definition: "The shifting balance of demand and supply between the two sides of a currency pair." },
        { term: "Session Context", definition: "The active trading window (Asia, London, New York) that defines participation levels." },
        { term: "Verification", definition: "The process of waiting for secondary evidence or next-candle behavior to confirm a reading." },
        { term: "Reading Discipline", definition: "Avoiding emotional reactions to speed and systematically auditing structural context." }
      ],
      whyThisMatters: "Without a structured reading discipline, you will constantly chase single-candle moves that have no real institutional backing.",
      realLifeExample: "EUR/USD spikes up 30 pips. A beginner buys the breakout instantly. A disciplined reader audits DXY, related pairs, and session context before assigning a reading.",
      commonMistake: "Treating a currency pair as a single stock that moves on its own isolated news.",
      quickNote: "A currency pair is always a tug-of-war. Always identify both sides before deciding who is pulling."
    }
  },
  {
    type: "visual_intro",
    title: "The Pair Pressure Map",
    label: "Pair Pressure",
    visualKey: "forex-pair-pressure-map",
    body: "When a currency pair moves, it is the result of relative forces. If the EUR/USD pair rises, it does not automatically mean the Euro is strong. The move could be driven by Euro strength, US Dollar weakness, or a combination of both. To interpret a move, you must map the individual pressure on both sides. A clean trend occurs when the two currencies pull in opposite directions (e.g., EUR strong and USD weak). If both are strong or both are weak, price tends to churn in mixed pressure, creating low-quality evidence.",
    context: {
      keyTerms: [
        { term: "Base Currency", definition: "The first currency listed in a pair (e.g., EUR in EUR/USD). It is the asset being priced." },
        { term: "Quote Currency", definition: "The second currency listed in a pair (e.g., USD in EUR/USD). It is the money used to price the asset." },
        { term: "Relative Strength", definition: "The strength of one currency compared directly to another rather than in isolation." },
        { term: "Opposing Pressure", definition: "When one currency in a pair is strongly demanded while the other is actively sold." },
        { term: "Mixed Pressure", definition: "When both currencies in a pair are moving in the same direction, leading to sideways chop." }
      ],
      whyThisMatters: "Mapping individual currency strength keeps you from misinterpreting a USD-driven move as base currency strength.",
      realLifeExample: "EUR/USD and GBP/USD both rise. This indicates the move is likely driven by USD weakness rather than independent Euro and Pound strength.",
      commonMistake: "Assuming EUR/USD is rising solely because European economic data was positive.",
      quickNote: "EUR/USD rises because EUR is strong OR USD is weak. Check DXY to find out which."
    }
  },
  {
    type: "visual_intro",
    title: "Session Context Changes Forex Evidence",
    label: "Session Context",
    visualKey: "forex-session-context-lab",
    body: "Forex is a 24-hour market, but it does not behave the same way all day. The market day is divided into major trading sessions: Asia, London, New York, and overlaps. A candle printed during a quiet Asian session does not carry the same institutional weight as one printed during the highly active London/New York overlap. Session context does not give you an instruction to trade; it helps you judge whether a move was created by quiet compression, active expansion, or late-session consolidation.",
    context: {
      keyTerms: [
        { term: "Asia Session", definition: "The Tokyo trading window, typically characterized by lower volume and range compression." },
        { term: "London Session", definition: "The European trading window, where major institutional participation and expansion begins." },
        { term: "New York Session", definition: "The North American trading window, which overlaps with the late London session." },
        { term: "Session Overlap", definition: "The 4-hour window where London and New York are open at the same time, producing maximum volume." },
        { term: "Late-Session Chop", definition: "The final hours of the New York session where volume drains and price often moves sideways." }
      ],
      whyThisMatters: "Understanding session clocks prevents you from treating a slow, low-volume Asia breakout as highly reliable evidence.",
      realLifeExample: "Price breaks out of a range at 8 PM New York time. Because it is late Asia, you classify the breakout as high-risk noise rather than expansion.",
      commonMistake: "Expecting clean trends and major follow-through during the quietest trading hours of the day.",
      quickNote: "Time of day determines market participation. Always check the session clock before reading the candle."
    }
  },
  {
    type: "visual_intro",
    title: "Session Handoff Can Change the Reading",
    label: "Session Handoff",
    visualKey: "forex-session-handoff-lab",
    body: "A session handoff occurs when one major trading region becomes less active as another takes over. The transition from London to New York is the most important handoff. A move created by London participants is not guaranteed to continue when New York opens. New York can choose to continue the London move, reject it entirely, or stall it into range chop. A disciplined reader does not assume continuation; they wait to see how New York interacts with the levels established by London.",
    context: {
      keyTerms: [
        { term: "Session Handoff", definition: "The transition period where trading volume and control shift from one region to another." },
        { term: "London Range", definition: "The high and low boundaries established during the active European session." },
        { term: "Handoff Continuation", definition: "When a new session confirms and extends the directional movement of the previous session." },
        { term: "Handoff Rejection", definition: "When a new session reverses the direction of the previous session's move at a key level." },
        { term: "Stall and Consolidation", definition: "When a new session lacks the participation to continue a move, leading to range behavior." }
      ],
      whyThisMatters: "Monitoring handoffs keeps you from getting caught on the wrong side when New York rejects a late London move.",
      realLifeExample: "London pushes GBP/USD up 40 pips. New York opens, sweeps the London high, and immediately closes back inside. New York has rejected the London move.",
      commonMistake: "Assuming a trend started in London must automatically continue through the New York session.",
      quickNote: "A new session brings new capital. Let the new session confirm its intent before updating your reading."
    }
  },
  {
    type: "visual_intro",
    title: "The DXY Mirror Trap",
    label: "DXY Awareness",
    visualKey: "forex-dxy-mirror-trap",
    body: "The US Dollar Index (DXY) is a measure of the Dollar's value against a basket of six major currencies. DXY provides vital context for USD strength. However, because the Euro makes up 57.6% of the DXY basket, EUR/USD and DXY often move as near-perfect mirrors. If EUR/USD rises and DXY falls, the learner must not treat this as two independent pieces of confirmation. That is a mirror trap. Double-counting the same relationship leads to false confidence; you must cross-check other USD pairs to confirm true Dollar direction.",
    context: {
      keyTerms: [
        { term: "US Dollar Index (DXY)", definition: "An index tracking the USD against a basket of six foreign currencies (weighted heavily toward the Euro)." },
        { term: "Basket Weight", definition: "The percentage share of a currency in an index (Euro is 57.6%, Yen is 13.6%, Pound is 11.9%)." },
        { term: "Mirror Correlation", definition: "When two assets move in near-exact opposite directions due to shared structural drivers." },
        { term: "Double-Counting", definition: "Treating correlated price movements as independent confirmation of a reading." },
        { term: "Independent Check", definition: "Using USD/JPY or USD/CAD to verify if USD strength/weakness is broad or isolated to EUR." }
      ],
      whyThisMatters: "Avoiding the mirror trap ensures you do not mistake a simple Euro-specific move for broad US Dollar weakness.",
      realLifeExample: "EUR/USD rises and DXY falls, but USD/JPY is rising. This shows USD is not broadly weak; the move is Euro-specific.",
      commonMistake: "Viewing DXY weakness as a separate, independent confirmation of a EUR/USD upward move.",
      quickNote: "EUR/USD and DXY are mostly the same coin. Look at USD/JPY to check if the Dollar is really moving."
    }
  },
  {
    type: "visual_intro",
    title: "Related Pairs Can Confirm or Challenge the Story",
    label: "Related-Pair Context",
    visualKey: "forex-related-pair-lab",
    body: "Related pairs (such as EUR/USD, GBP/USD, and AUD/USD) share the same quote currency and are driven by broad USD capital flows. A broad market move is stronger when related pairs confirm the direction. If GBP/USD pushes strongly upward but EUR/USD remains flat and USD/JPY does not support Dollar weakness, the move on GBP/USD is isolated. An isolated move is more likely to be a fake-out. Comparing related pairs helps you avoid tunnel vision and identify mixed evidence early.",
    context: {
      keyTerms: [
        { term: "Related Pairs", definition: "Pairs that share a common currency (e.g., EUR/USD, GBP/USD, AUD/USD all share the USD)." },
        { term: "Broad Movement", definition: "Price movement that occurs across multiple related pairs at the same time, showing market consensus." },
        { term: "Isolated Movement", definition: "When only one pair moves while related pairs remain flat or move in the opposite direction." },
        { term: "Relative Divergence", definition: "A disagreement between related pairs, signaling that the move lacks broad institutional backing." },
        { term: "Consensus Check", definition: "Auditing multiple USD pairs to confirm if institutional capital is moving the entire Dollar basket." }
      ],
      whyThisMatters: "Checking related pairs prevents you from chasing an isolated spike that the rest of the market does not support.",
      realLifeExample: "GBP/USD spikes up, but EUR/USD and AUD/USD are completely flat. You classify the GBP/USD move as isolated and wait for verification.",
      commonMistake: "Trading a breakout on one pair while ignoring the fact that all related pairs are in tight consolidation.",
      quickNote: "Whales move indices and baskets, not just single pairs. Look for consensus among related pairs."
    }
  },
  {
    type: "visual_intro",
    title: "ADR Is a Caution Filter, Not a Reversal Signal",
    label: "ADR Check",
    visualKey: "forex-adr-caution-filter",
    body: "Average Daily Range (ADR) measures the average distance a currency pair travels from its high to its low over a typical trading day (measured in pips). ADR is a caution filter, not a reversal signal. If a pair has already moved 90% of its typical daily range, it has 'stretched' its resources. While price does not have to reverse, any fresh continuation attempt requires much stronger evidence to be considered clean. Buying or selling at the extreme edges of a pair's ADR is a low-probability action.",
    context: {
      keyTerms: [
        { term: "Average Daily Range (ADR)", definition: "The average high-to-low pip range of a pair calculated over a set number of days (usually 5 to 20)." },
        { term: "Daily Stretch", definition: "How much of the typical daily range a pair has already consumed during the current trading day." },
        { term: "Exhaustion Zone", definition: "The price levels near the extreme edges of the daily range where momentum typically slows." },
        { term: "Caution Filter", definition: "A rule that advises against chasing moves when price has reached its typical daily limit." },
        { term: "Continuation Proof", definition: "The requirement for stronger-than-usual volume or structural break to validate a move at ADR limits." }
      ],
      whyThisMatters: "Using ADR as a filter prevents you from buying the absolute top or selling the absolute bottom of a daily move.",
      realLifeExample: "EUR/USD average range is 80 pips. Today it has moved 75 pips and is breaking a minor high. You avoid buying because the daily stretch is at 94%.",
      commonMistake: "Assuming a pair must immediately reverse because it has reached 100% of its ADR.",
      quickNote: "ADR tells you when the market is tired. Do not ask a tired market to run a marathon."
    }
  },
  {
    type: "visual_intro",
    title: "News Can Distort the First Forex Move",
    label: "News Pressure",
    visualKey: "forex-news-distortion-lab",
    body: "Macroeconomic news releases (such as inflation data, interest rate decisions, and jobs reports) inject rapid capital into the Forex market. This news pressure creates large candles and thinned liquidity, leading to sudden price spikes. The first reaction to a news event is often distorted by algorithms sweeping stop-losses. A disciplined reader does not chase the immediate news spike. They wait for the stabilization period—usually 15 to 30 minutes—to analyze the candle close and subsequent follow-through.",
    context: {
      keyTerms: [
        { term: "News Pressure", definition: "The immediate volatility and order flow generated by high-impact economic data releases." },
        { term: "Thinned Liquidity", definition: "When market makers withdraw orders before news, causing price to jump easily on lower volume." },
        { term: "Stop-Sweep Spike", definition: "A rapid price spike designed to trigger stop-loss orders before returning to the original range." },
        { term: "Stabilization Period", definition: "The window after a news release where price settles and normal order matching resumes." },
        { term: "Post-News Hold", definition: "When price maintains its news-driven levels after stabilization, confirming institutional acceptance." }
      ],
      whyThisMatters: "Waiting for post-news stabilization protects you from being caught in violent whipsaw movements.",
      realLifeExample: "Interest rate news causes USD/JPY to drop 50 pips in one minute, only to reverse and rally 80 pips by the end of the hourly close.",
      commonMistake: "Assuming the first rapid candle reaction to news represents the true institutional direction for the day.",
      quickNote: "News spikes are questions. Wait for the post-news close to see the real answer."
    }
  },
  {
    type: "visual_intro",
    title: "The Forex Verification Sequence",
    label: "Verification Workflow",
    visualKey: "forex-verification-sequence",
    body: "To read a Forex chart like a professional, you must follow a systematic verification sequence. Never let your eyes jump directly to the candle shapes or speed first. Instead, apply the checklist in order: 1. Audit the Pair Pressure. 2. Verify Session Context. 3. Check Structure & Location. 4. Cross-check USD/DXY context. 5. Confirm related pairs consensus. 6. Check ADR stretch. 7. Assess news pressure. 8. Observe next-candle follow-through. Only then do you classify the reading.",
    context: {
      keyTerms: [
        { term: "Verification Sequence", definition: "The chronological checklist used to analyze and confirm a market reading." },
        { term: "Structure Audit", definition: "Mapping the swing highs, swing lows, and dealing range on the active timeframe." },
        { term: "Consensus Check", definition: "Verifying if related currency pairs are showing aligned movement." },
        { term: "Follow-Through Check", definition: "Waiting for the subsequent candle to confirm or invalidate the initial reaction." },
        { term: "Reading Classification", definition: "Labeling the analysis as Clear (high quality), Mixed (conflicting evidence), or Unclear (insufficient data)." }
      ],
      whyThisMatters: "Following a sequence keeps you clinical and structured, preventing emotional bias from distorting your analysis.",
      realLifeExample: "Price spikes up. Instead of reacting, you check: Session? Overlap. Related pairs? Flat. ADR? Stretched. Verdict: Mixed reading. You stand aside.",
      commonMistake: "Skipping structural and context checks because a candle looks large and green.",
      quickNote: "Always check the coordinate stack before deciding if a move has institutional backing."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Build the Forex Reading",
    label: "Practice Drill",
    visualKey: "forex-reading-lab-practice-drill",
    body: "Let's put your Forex reading discipline to the test. In this drill, you will analyze a complex New York morning session. GBP/USD has pushed upward from a prior support zone, but related pairs and macro context show significant conflicts. Review the scenario variables carefully, inspect the visual model, and select the most disciplined reading classification.",
    taskData: {
      type: "choice_block",
      question: "During the New York morning session, GBP/USD pushes upward from a prior reaction zone. EUR/USD remains flat near the middle of its range. DXY is sitting near a daily support area and has not clearly broken lower. GBP/USD has already consumed 80% of its typical Daily Range (ADR). There was a USD news release 10 minutes ago, and the subsequent candle hesitates. What is the most disciplined Forex reading?",
      options: [
        {
          id: "A",
          text: "Clear bullish reading because GBP/USD pushed upward from a reaction area.",
          isCorrect: false,
          feedback: "Incorrect. While GBP/USD moved, EUR/USD is flat and DXY is at support. An isolated move near ADR limits with news distortion is not a clear reading."
        },
        {
          id: "B",
          text: "Mixed reading because the move exists, but related pairs, DXY location, ADR stretch, news pressure, and weak follow-through limit confidence.",
          isCorrect: true,
          feedback: "Correct! This is a mixed reading. There is conflict between the GBP/USD move and DXY support, related-pair flatness, ADR limits, and lack of follow-through. Standing aside is the correct action."
        },
        {
          id: "C",
          text: "Guaranteed reversal because GBP/USD has moved most of its daily range.",
          isCorrect: false,
          feedback: "Incorrect. ADR is a caution filter, not an automatic reversal signal. Reversals still require structural shifts and fresh evidence."
        },
        {
          id: "D",
          text: "Ignore the reading completely because Forex cannot be read during New York.",
          isCorrect: false,
          feedback: "Incorrect. Forex can be read during New York, but you must systematically identify conflicts and classify the reading as mixed when evidence is not clean."
        }
      ]
    },
    context: {
      keyTerms: [
        { term: "Session Conflict", definition: "When different sessions or timeframes display opposing market behavior." },
        { term: "Isolated Spike", definition: "A rapid price move in one pair that is not reflected in related pairs." },
        { term: "News Distortion", definition: "Temporary price spikes and thinned spreads caused by recent high-impact news releases." },
        { term: "Range Caution", definition: "Avoiding new positions when price is near the extreme limit of its typical daily range." },
        { term: "Verification Failure", definition: "When next-candle behavior stalls, proving that a price reaction lacks continuation backing." }
      ],
      whyThisMatters: "This drill trains you to accept mixed readings and stay disciplined instead of forcing high-conviction opinions on messy charts.",
      realLifeExample: "GBP/USD rallies on news, but EUR/USD chops. You observe the related-pair conflict, note the ADR stretch, and classify it as mixed.",
      commonMistake: "Forcing a bullish bias because one pair printed a large candle, ignoring the broader context of conflict.",
      quickNote: "Conflict is high-quality information. When the stack is mixed, the pro action is to wait."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Forex Reading Is Pressure Under Context",
    label: "Forex Lab Debrief",
    visualKey: "forex-reading-lab-debrief",
    body: "Congratulations! You have completed the Forex Reading Lab. You now understand that reading a currency pair is not about reacting to candle shape or session breaks. Forex must be audited through multiple layers of context: check pair pressure, identify session characteristics, map structure and location, audit DXY, check related pairs for consensus, monitor ADR daily stretch, allow news pressure to stabilize, and wait for follow-through. The habits you built here will protect your capital and ensure you analyze Forex with institutional objectivity.",
    context: {
      keyTerms: [
        { term: "Forex Context", definition: "The complete set of background conditions (sessions, DXY, related pairs) surrounding a currency pair." },
        { term: "Consensus Habits", definition: "The practice of verifying moves across related pairs to ensure broad market participation." },
        { term: "ADR Filter Habit", definition: "Always checking daily stretch limits before assigning a clean reading to a continuation move." },
        { term: "Handoff Respect", definition: "Slowing down analysis during session transitions to let the new session establish its intent." },
        { term: "Objective Classifier", definition: "Classifying every chart as Clear, Mixed, or Unclear based on structured evidence rather than feeling." }
      ],
      whyThisMatters: "Forex pairs will frequently try to tempt you with rapid movements. These validation habits serve as your shield against impulse decisions.",
      realLifeExample: "You watch EUR/USD spike during London close. You calmly check DXY and related pairs, note the session handoff, and wait for New York direction.",
      commonMistake: "Chasing session transition breakouts without waiting to see if the new session validates the levels.",
      quickNote: "Trust the reading only after the pair proves consensus and quality across the entire coordinate stack."
    }
  }
];
