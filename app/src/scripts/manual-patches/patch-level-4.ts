/**
 * PURPOSE: Manual patch to expand Level 4 curriculum and finalize assessment/mission data.
 * SAFETY: Idempotent. Uses Prisma upserts to prevent unique constraint conflicts.
 * TABLES TOUCHED: CourseModule, KnowledgeTest, TrainingScenario, ModuleScenarioLink.
 * ENVIRONMENT REQUIRED: Requires DIRECT_URL in .env for database connection.
 * AUTO-RUN: This script is a manual utility and is never executed automatically by the platform.
 * USAGE: Use only to synchronize existing database environments with Level 4 authoritative data.
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Level 4 Final Audit Patch Starting...');

  // 1. Expand Level 4 Modules (Mirroring seed-full-69.ts final state)
  const l4Modules = [
    {
      level: 4, moduleNumber: "4.1", title: "Major vs Minor Structure",
      objective: "Separate meaningful swings from chart noise.",
      content: `# Major vs Minor Structure

## Concept Explanation
The market moves in a hierarchy. **Major Swing Points** are the primary anchors that define the main structure (the 'larger structure'). These are points where price has significantly turned, creating a clear high or low that subsequently led to a new structural break. **Minor Fluctuations** are internal movements—noise that occurs within the range of two major swing points. Understanding this hierarchy is the difference between reading a clear map and getting lost in the terrain details.

## Why it matters
Confusing minor swings for major structure leads to "over-trading" and misinterpreting the main structural direction. By identifying major anchors, you stay aligned with the higher-order market behavior. This prevents you from reacting to small movements that do not actually change the broader structural reading.

## What to look for
- **Major Swings**: Clear pivots that result in price breaking the previous major high or low. These points must be the direct cause of a new structural movement.
- **Displacement**: Strong movement away from the pivot point. If price lingers or slowly crawls away, the validity of the anchor is reduced.
- **Confirmed Break**: The pivot is only "Major" once it has successfully anchored a move that closes beyond the previous major structure.

## What does NOT count
- Small pullbacks that do not reach meaningful levels or show rejection.
- "Inside bars" or fluctuations that stay within the range of a single large candle.
- Wick spikes that do not lead to a sustained structural shift.

## Common Mistake
Treating every single candle pullback as a new "Higher Low." This creates a messy map and leads to false readings of structural shifts. Beginners often mark every pivot they see, which obscures the main structure.

## Review Condition
If price is fluctuating within a massive directional leg, the internal structure is in a 'Review Condition' until it reaches a major anchor. Do not attempt to map the internal noise as if it were the main structure.

## Practice Instruction
In the interactive chart below, identify the primary Major Swing Low that acted as the anchor for the most recent directional movement.

## Summary
Main structure is your primary map; minor swings are just the terrain details. Focus on the anchors that drive the market forward.`,
      skillLevel: "advanced", orderIndex: 1,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the Major Swing Low that anchored the current directional movement.",
        validationZones: {
          primary: [{ time: "2024-01-05", priceMin: 98, priceMax: 102 }]
        },
        hints: {
          light: "Look for the lowest point before the most aggressive upward move.",
          guided: "Focus on the pivot around Jan 5th."
        },
        rationale: "This point represents a significant shift in market behavior where demand overwhelmed supply, leading to a major directional movement."
      }
    },
    {
      level: 4, moduleNumber: "4.2", title: "Structural Breaks vs Internal Movement",
      objective: "Distinguish real structure change from internal movement.",
      content: `# Structural Breaks vs Internal Movement

## Concept Explanation
A **Structural Break** occurs when price moves beyond a Major Swing Point and confirms that move with a candle closure. This indicates a shift in the market's validated range. **Internal Movement** is any price action that occurs *inside* the range established by the most recent major high and low. Even if price moves aggressively, if it stays within that range, the main structure has not changed.

## Why it matters
Learners often panic when price moves against them internally. Understanding that this is just "filling the range" prevents reacting to movements that don't actually change the structural reading. It allows for a calm assessment of whether the market is truly reversing or simply retracing within a larger move.

## What to look for
- **Structural Break**: A candle body closing beyond the major wick high or low. A mere touch or wick through is not enough to confirm a shift.
- **Internal Movement**: Price oscillating between established anchors without a new close. This movement often looks chaotic but is logically contained within the major leg.
- **Validation**: Look for consecutive closes beyond a level to ensure the break is not a failed attempt.

## What does NOT count
- A "wick sweep" where price touches a level but closes back inside.
- Minor highs being broken while price is still within a major downward leg.
- Consolidations that occur right at a level without a clear break.

## Common Mistake
Classifying a break of a minor internal high as a "Trend Reversal." Reversals only happen at major anchors. Many traders see a small shift on a lower timeframe and assume the whole market has changed, ignoring the major structural context.

## Review Condition
When price is middle-ranging (exactly between two major anchors), wait for a transition toward an edge before updating the map. The middle of the range is the most dangerous area to make a new structural reading.

## Practice Instruction
Analyze the scenario provided. Determine if the movement described constitutes a structural shift or internal noise based on the position of the major anchors.

## Summary
A break is only real if it happens at a major anchor with a confirmed closure. Everything else is internal noise that must be filtered out.`,
      skillLevel: "advanced", orderIndex: 2,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Price has just moved slightly below a previous minor low, but remains well above the major swing low. How should this be classified?",
        options: [
          { id: "a", text: "Structural Break (Reversal)", isCorrect: false, feedback: "Incorrect. Minor lows do not define the main structure." },
          { id: "b", text: "Internal Movement (Noise)", isCorrect: true, feedback: "Correct. As long as the major swing low holds, this is internal fluctuation." },
          { id: "c", text: "Confirmed Structural Shift", isCorrect: false, feedback: "Incorrect. Shift requires a break of a major structural anchor." }
        ]
      }
    },
    {
      level: 4, moduleNumber: "4.3", title: "Range Transitions",
      objective: "Read how a range shifts into directional movement.",
      content: `# Range Transitions

## Concept Explanation
Markets oscillate between two states: **Consolidation (Range)** and **Directional Movement**. A **Range Transition** is the specific area where price stops oscillating within a horizontal boundary and begins a sustained move in one direction. This transition is marked by a violation of the range boundary followed by a failure of price to return to the range's midpoint.

## Why it matters
Catching the transition early allows you to align with the new structural leg before it becomes overextended. It helps you distinguish between a market that is just "ranging wide" and a market that is genuinely initiating a new directional phase.

## What to look for
- **Boundary Violation**: Price closing outside the range high or low with strong movement.
- **Hold**: Price retesting the boundary from the outside and staying outside, showing that the old resistance is now acting as support (or vice versa).
- **Expansion**: A series of candles that move price away from the range with increasing speed and size.

## What does NOT count
- A quick spike out of the range followed by an immediate return (this is a Failed Breakout).
- Volatility spikes that occur during news events without a structural hold.
- Price drifting slightly above the boundary but staying within the "noise" of the range.

## Common Mistake
Assuming a range has transitioned just because price touched the boundary. Transitions require a "behavioral shift" from sideways oscillation to vertical movement. Traders often enter too early on a touch and get caught in the range's continued horizontal movement.

## Review Condition
If price breaks out but starts to move sideways again immediately, the range has simply expanded (gotten wider); it has not transitioned into a new directional leg. You must reset your boundaries and wait for a fresh transition attempt.

## Practice Instruction
On the chart, mark the upper boundary of the established range that price had to transition through to start the upward directional movement.

## Summary
Ranges provide the energy; transitions provide the direction. Map the boundaries clearly to see when the shift finally occurs.`,
      skillLevel: "advanced", orderIndex: 3,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the upper boundary of the established range before the transition area.",
        validationZones: {
          primary: [{ time: "2024-01-12", priceMin: 110, priceMax: 115 }]
        },
        hints: {
          light: "Look for the horizontal ceiling where price was rejected multiple times.",
          guided: "The boundary was tested around Jan 12th."
        },
        rationale: "Mapping the boundary correctly allows you to identify the subsequent breakout as a valid transition area."
      }
    },
    {
      level: 4, moduleNumber: "4.4", title: "Failed Breakouts & Review Conditions",
      objective: "Identify breaks that do not hold.",
      content: `# Failed Breakouts & Review Conditions

## Concept Explanation
A **Failed Breakout** occurs when price moves beyond a structural anchor but fails to maintain that level, quickly returning into the previous range. This is often called a "sweep." We call this a **Review Condition** because the immediate structural reading (the breakout) has been invalidated. Instead of forcing a new direction, we must step back and wait for price to establish a fresh, validated anchor.

## Why it matters
Failed breakouts are common traps designed to catch over-eager traders. Recognizing them prevents you from "chasing" a move that has already lost its structural integrity. It keeps you on the sidelines during periods of low-probability noise.

## What to look for
- **Lack of Closure**: Candle wicks extending beyond the level but the bodies closing back inside.
- **Strong Return**: A large candle or series of candles immediately moving price back deep into the range, often erasing the breakout movement entirely.
- **Momentum Shift**: A sharp decrease in buying/selling pressure right as the level is breached.

## What does NOT count
- A slow retracement after a successful break (this is often just a healthy retest of the level).
- A break that holds for several candles before slowly failing much later in the session.
- A breakout that consolidates just above the level (this is often a sign of strength).

## Common Mistake
Shifting your reading immediately after a failed breakout (e.g., going from "up" to "down" just because the break failed). Often, the market just needs more time to consolidate within the existing range before a real break occurs.

## Review Condition
A failed breakout *is* a review condition. You should stop mapping new structure until a new major swing high and low are clearly formed and validated. Do not force a map on messy price action.

## Practice Instruction
Review the scenario provided. Price has broken a level but shows specific failure characteristics. Choose the most objective structural response.

## Summary
When structure fails to hold, the map is broken. Wait for a new anchor to form before re-orienting your structural reading.`,
      skillLevel: "advanced", orderIndex: 4,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "Price breaks a major swing high but immediately closes back inside the range with a large candle moving downward. What is the most objective structural reading?",
        options: [
          { id: "opt1", text: "The main structure is continuing, ignore the return.", grade: "poor", feedback: "Risky. A failed breakout is a warning sign, not a continuation." },
          { id: "opt2", text: "Mark as a 'Failed Break' and wait for a review condition.", grade: "best", feedback: "Correct. Caution is required when structure fails to hold.", rationale: "Failed breaks often indicate a lack of momentum or a range directional movement rather than a clear continuation." },
          { id: "opt3", text: "Shift structural reading immediately to a downward structure.", grade: "acceptable", feedback: "Reasonable, but 'Review' is safer than an immediate shift without more structure." }
        ]
      }
    },
    {
      level: 4, moduleNumber: "4.5", title: "Continuation vs Reversal Attempts",
      objective: "Compare continuation and reversal attempts using evidence.",
      content: `# Continuation vs Reversal Attempts

## Concept Explanation
When price approaches a major structural anchor, it will either attempt to **Continue** the existing structure or **Reverse** it. A **Continuation Attempt** is characterized by the respect of recent major swing points and a push toward a new structural break. A **Reversal Attempt** involves the violation of a major anchor and a clear shift in market behavior (e.g., from Higher Highs/Higher Lows to Lower Highs/Lower Lows).

## Why it matters
Differentiating between a simple pullback (continuation) and a genuine shift (reversal) is the most critical skill in advanced mapping. It keeps you aligned with the primary directional movement of the market and prevents you from fighting the main structure.

## What to look for
- **Continuation**: Price pulls back into a zone but stays above the previous major swing low (in an upward structure). It then shows rejection and moves back toward the high.
- **Reversal**: Price closes below the previous major swing low with strong movement. This break must be confirmed by a subsequent lower high to prove the shift.
- **Clarity**: Continuation usually looks like a slow retracement; reversals often start with a sharp, unexpected break of the anchor.

## What does NOT count
- A minor swing break within a larger major leg (this is not a reversal of the main structure).
- A wick sweep of a major low followed by an immediate return into the range (this is a failed reversal attempt).
- Consolidation at the anchor without a clear break.

## Common Mistake
Anticipating a reversal before the major anchor has been successfully violated. Many traders try to "pick the top" or "pick the bottom," ignoring that the main structure is still technically intact until the anchor is broken.

## Review Condition
If price is hovering at a major anchor without a clear break or rejection, the chart context is in a state of 'Review Required'. Do not commit to a reading until the market chooses a direction.

## Practice Instruction
Analyze the current price position relative to the major anchors. Determine if the market is showing signs of a continuation or a genuine reversal attempt.

## Summary
Evidence is everything. Respect the major anchors until they are broken with confirmed displacement and closure.`,
      skillLevel: "advanced", orderIndex: 5,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Price has violated a major swing high but is now slowly retracing toward the previous break point. It has NOT violated the recent major swing low. What is the current classification?",
        options: [
          { id: "a", text: "Confirmed Reversal Attempt", isCorrect: false, feedback: "Incorrect. The major swing low is still intact." },
          { id: "b", text: "Continuation Attempt", isCorrect: true, feedback: "Correct. Until the major anchor is broken, the structural reading remains continuation." },
          { id: "c", text: "Range Directional Movement", isCorrect: false, feedback: "Possible, but 'Continuation Attempt' is the most accurate structural reading." }
        ]
      }
    },
    {
      level: 4, moduleNumber: "4.6", title: "Multi-Timeframe Structure Context",
      objective: "Compare smaller structure against larger structure.",
      content: `# Multi-Timeframe Structure Context

## Concept Explanation
Markets are fractal in nature, meaning the same patterns repeat at different scales. **Multi-Timeframe (MTF) Context** involves using the Higher-Timeframe (HTF) structure to weight the importance of Lower-Timeframe (LTF) movements. A "reversal" on a 5-minute chart is often just a "minor retracement" on a 1-hour chart. The **Larger Context** always takes priority in your structural reading because it represents the dominant market behavior.

## Why it matters
Without MTF context, you will be constantly tricked by "shifts" that are actually just internal movements within a larger structural leg. It provides a "North Star" for your reading, ensuring you don't get lost in the noise of the smaller timeframes.

## What to look for
- **Alignment**: When both the HTF and LTF show the same structural direction (e.g., both are in an upward movement).
- **Divergence**: When the LTF is moving against the HTF. This often indicates a deep retracement is starting on the larger timeframe, not necessarily a full market structure change.
- **Priority**: Always start your mapping on the higher timeframe and "zoom in" only to find more precise review areas.

## What does NOT count
- Using too many timeframes (stick to a primary and a secondary context to avoid confusion).
- Ignoring the HTF because the LTF "looks like it's moving fast." Speed on the 1-minute chart does not change the 4-hour structure.
- Trying to find "perfect" alignment; often, one timeframe will be in review while the other is clear.

## Common Mistake
Trading a 1-minute structural break as a "Full Market Reversal" when the 1-hour chart is in a strong upward directional movement. This is the most common cause of "stop-outs" for developing traders.

## Review Condition
If the HTF is in a 'Review Condition' (e.g., middle of a range), lower timeframe structures are inherently less reliable and should be treated with extreme caution.

## Practice Instruction
Identify the safest structural reading for a chart where the 1H timeframe is upward but the 5m has made a downward break.

## Summary
Always look at the larger structure before zooming in. The larger context dictates the true health of the structural reading.`,
      skillLevel: "advanced", orderIndex: 6,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "The 1H chart is in a clear upward structure. The 5m chart has just made a structural break to the downside. What is the safest structural context?",
        options: [
          { id: "a", text: "Higher-Timeframe Reversal in progress.", isCorrect: false, feedback: "Premature. 5m breaks do not necessarily reverse 1H main structures." },
          { id: "b", text: "LTF retracement within Higher-timeframe upward structure.", isCorrect: true, feedback: "Correct. Always prioritize the higher-timeframe context." },
          { id: "c", text: "Full market transition.", isCorrect: false, feedback: "Incorrect. LTF noise should not overrule the larger context." }
        ]
      }
    },
    {
      level: 4, moduleNumber: "4.7", title: "Structure Mapping Workflow",
      objective: "Build a repeatable structure-mapping process.",
      content: `# Structure Mapping Workflow

## Concept Explanation
Consistency in mapping comes from following a repeatable **Structure Mapping Workflow**. This ensures that you don't skip steps or allow emotion to influence your reading. A good workflow starts with the largest context and ends with identifying the immediate "Review Areas." It turns chart reading from a "guessing game" into an objective process of data verification and mapping.

## Why it matters
A workflow provides a stable framework for your analysis. It allows you to produce the same structural reading every time you look at a chart, regardless of your personal feelings or recent results. This objectivity is the hallmark of advanced market review.

## The Lurnava Workflow
1. **Identify Higher-Timeframe Context**: Is the larger structure upward, downward, or ranging? Start at the 4H or 1D level.
2. **Mark Major Anchors**: Where are the key pivots that define the current leg on your primary timeframe (e.g., 1H)?
3. **Check for Transitions**: Is price currently oscillating in a range or moving vertically in a directional movement?
4. **Identify Review Areas**: At what specific price point does your structural reading become invalid? Mark this clearly on your chart.

## What does NOT count
- Jumping straight to a 1-minute chart to find a setup without checking the HTF first.
- Marking every single candle high/low as an anchor (this violates the "Major Swing" rule).
- Changing your map every 5 minutes as new candles form.

## Common Mistake
Forgetting to update the "Review Area." As price moves and forms new structure, your invalidation points must move with it. If you leave your review areas at stale price points, you will be reading the "old" map while the market is in a new phase.

## Review Condition
If any step in the workflow is unclear (e.g., you can't find a clear anchor), the chart is in a Review Condition. State this clearly and wait for more data.

## Practice Instruction
Following the workflow steps, identify the current 'Decision Checkpoint' where the upward structural reading must be reviewed.

## Summary
Process over anticipation. Follow the workflow consistently to maintain objective structural clarity across all sessions.`,
      skillLevel: "advanced", orderIndex: 7,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the current 'Decision Checkpoint' where the upward structural reading must be reviewed.",
        validationZones: {
          primary: [{ time: "2024-01-18", priceMin: 120, priceMax: 125 }]
        },
        hints: {
          light: "Look for the most recent major swing low that anchors the current leg.",
          guided: "The pivot at Jan 18th is our current invalidation point."
        },
        rationale: "Defining your decision checkpoints before price reaches them reduces emotional reacting."
      }
    },
    {
      level: 4, moduleNumber: "4.8", title: "Level 4 Synthesis: Structure Review Map",
      objective: "Full applied chart-reading sequence.",
      content: `# Level 4 Synthesis: Structure Review Map

## Concept Explanation
In this final Level 4 module, you combine all concepts into a single **Structure Review Map**. Synthesis is the act of looking at a chart and classifying it by its confirmed structure, its unclear areas, and its necessary review conditions. Instead of asking "Where is price going?", you ask "What has price already confirmed?" This shift in mindset from guessing movement to observation is the core of the Lurnava methodology.

## Why it matters
Synthesis is where theory meets the real, moving chart. it is the final step in your structural education before you move into specific strategy application in later levels. Without a solid synthesis process, your strategies will be built on shaky, subjective foundations.

## The Synthesis Mindset
- **Confirmation over Guessing**: Only mark what the candles have already closed and proved. Do not guess what the next candle will do.
- **Acceptance of Uncertainty**: If a chart is in a review condition, clearly state "unclear structure." This is not a failure; it is a valid and professional reading.
- **Fractal Awareness**: Always weight your reading by the larger timeframe context. If the 1H is up but the 1D is down into a major level, your synthesis must reflect that conflict.

## What to look for
- The **Main Anchor** that started the current directional movement.
- The **Current Range** boundaries if price is consolidating.
- The **Next Transition Zone** where structure might shift or continue.
- The **Invalidation Point** where your structural reading is proven wrong.

## Common Mistake
Feeling the need to have a "direction" or a "predetermined path" for every chart you look at. Some charts are genuinely messy and should be marked as "Review Required." Forcing a direction on a messy chart is a recipe for errors.

## Review Condition
Synthesis itself is a dynamic process. If price violates your primary synthesis anchors, the current map is discarded and a new one is built from scratch.

## Practice Instruction
Complete the full structural map for the provided chart. Identify the primary structural anchor for the current directional movement.

## Summary
Congratulations! You have now developed an advanced structural mapping process. This objective foundation is what separates professional market reviewers from gamblers. You are now ready for the Level 4 Structure Mapping Test.`,
      skillLevel: "advanced", orderIndex: 8,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the primary structural anchor for the current directional movement.",
        validationZones: {
          primary: [{ time: "2024-01-08", priceMin: 105, priceMax: 108 }]
        },
        hints: {
          light: "Focus on the point that initiated the directional movement from the initial base.",
          guided: "The directional movement started around Jan 8th."
        },
        rationale: "Synthesis complete. You are now ready for the Level 4 Structure Mapping Test."
      }
    },
  ];

  for (const mod of l4Modules) {
    await prisma.courseModule.upsert({
      where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      update: { ...(mod as any), marketTrack: 'core' },
      create: { ...(mod as any), marketTrack: 'core' },
    });
  }

  // 2. Knowledge Test (Cleaned options)
  const level4Test = {
    level: 4,
    title: "Level 4 Structure Mapping Test",
    passThreshold: 80,
    timeLimitMin: 20,
    questionsPerAttempt: 15,
    questions: [
      { id: "q4_1", question: "What distinguishes a Major Swing from a Minor Swing?", options: ["Major swings create new highs/lows in the main structure", "Minor swings move faster", "Major swings only happen on daily charts", "There is no difference"], correctIndex: 0, explanation: "Major swings define the primary anchors of the market structure." },
      { id: "q4_2", question: "A 'Failed Breakout' is best described as:", options: ["A confirmed structure shift", "Price moving beyond structure but failing to hold and closing back inside", "A break that goes too far", "The end of a trend"], correctIndex: 1, explanation: "Failure to hold beyond a level is a warning of structural exhaustion." },
      { id: "q4_3", question: "When price is in a 'Range Transition', what is happening?", options: ["It is reversing", "It is shifting from horizontal movement to a new directional leg", "It is becoming unclear", "Volume is decreasing"], correctIndex: 1, explanation: "Transitions mark the shift from consolidation to directional movement." },
      { id: "q4_4", question: "If the 1H chart is in an upward structure and the 1m chart is in a downward structure, what is the safest structural context?", options: ["Shift reading immediately", "1m is likely a retracement within the 1H upward structure", "Wait for the 1H to turn downward", "Prioritize the 1m chart"], correctIndex: 1, explanation: "Higher-timeframe context should always weight lower timeframe noise." },
      { id: "q4_5", question: "What is a 'Decision Checkpoint' in structure mapping?", options: ["A random point on the chart", "A structural level where the current reading must be reviewed or invalidated", "A session transition", "A confirmed structural pivot"], correctIndex: 1, explanation: "Checkpoints define where your current map is no longer valid." },
      { id: "q4_6", question: "True or False: Every candle break of a minor high is a structural shift.", options: ["True", "False"], correctIndex: 1, explanation: "Minor breaks are often internal movement and do not shift the main structure." },
      { id: "q4_7", question: "In a 'Continuation Attempt', what is the market trying to do?", options: ["Reverse the trend", "Extend the current structural direction", "Fill a price gap", "Ignore the previous structure"], correctIndex: 1, explanation: "Continuation is the attempt to maintain the existing structural sequence." },
      { id: "q4_8", question: "Why is 'Review Required' an objective structural reading?", options: ["Because you don't know what to do", "Because price action is currently unclear or conflicting", "Because the market is unclear", "Because you are tired"], correctIndex: 1, explanation: "Recognizing uncertainty is a hallmark of advanced structural mapping." },
      { id: "q4_10", question: "What is 'Internal Movement'?", options: ["Price action occurring within a major structural leg", "A breakout", "Lateral consolidation", "Market volatility"], correctIndex: 0, explanation: "Internal movement is fluctuations that do not create new primary anchors." },
      { id: "q4_11", question: "What is the primary goal of Level 4 Structure Mapping?", options: ["Memorize isolated chart labels", "Mark every small candle movement", "Develop an objective structural mapping process", "Ignore unclear structure"], correctIndex: 2, explanation: "Level 4 focuses on building a repeatable process for applied chart review, not guessing the next movement." },
      { id: "q4_12", question: "When price 'sweeps' a level but does not close beyond it, it is a:", options: ["Structural Break", "Range violation / Failed Break", "Continuation pattern", "Failed structural validation"], correctIndex: 1, explanation: "A sweep without closure is not a confirmed structural shift." },
      { id: "q4_13", question: "A 'Decision Checkpoint' for an upward structure is usually:", options: ["The recent Major Swing High", "The recent Major Swing Low", "The midpoint of the range", "A round number level"], correctIndex: 1, explanation: "The swing low anchors the upward structure; if it breaks, the reading must be reviewed." },
      { id: "q4_14", question: "Multi-timeframe analysis helps avoid:", options: ["Treating every small movement as a full structure change", "Over-reacting to lower-timeframe noise", "Marking every candle as a major swing", "Missing the larger structure"], correctIndex: 1, explanation: "Higher-timeframe context keeps you aligned with the main structure." },
      { id: "q4_15", question: "What should you do after a 'Failed Breakout'?", options: ["Act immediately without review", "Mark for review and wait for a new structural anchor", "Shift reading immediately", "Ignore it"], correctIndex: 1, explanation: "Failed breaks invalidate the immediate breakout narrative and require a fresh assessment." }
    ]
  };

  await prisma.knowledgeTest.upsert({
    where: { level: 4 },
    update: level4Test as any,
    create: level4Test as any,
  });

  // 3. Training Scenarios (Cleaned copy)
  const scenarios = [
    {
      slug: "l4-mission-4a",
      title: "Level 4: Main Structural Break",
      description: "Identify the primary break area that shifted the chart context.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 4, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the main structural break area that changed the structural reading.",
      passThreshold: 80, xpAward: 250,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Structural Break", timeStart: "2024-01-08", timeEnd: "2024-01-10", priceMin: 105, priceMax: 110 }],
        feedbackOnPass: "Verification complete. You correctly identified the primary structural shift.",
        feedbackOnFail: "Identification incomplete. Review the major anchors and identify where price displacement occurred."
      }
    },
    {
      slug: "l4-mission-4b",
      title: "Level 4: Reversal Review Area",
      description: "Identify the area where the previous structure needed review.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 4, instrument: "XAUUSD", timeframe: "4H", candleSourceType: "curated",
      prompt: "Identify the area where the previous structural reading was invalidated.",
      passThreshold: 80, xpAward: 250,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["logic_verification"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-01-15", timeEnd: "2024-01-17", priceMin: 115, priceMax: 120 }],
        feedbackOnPass: "Logic confirmed. You identified the area where structural invalidation occurred.",
        feedbackOnFail: "Review the evidence. A reversal requires a confirmed break of a major anchor."
      }
    },
    {
      slug: "level-3-final-gate",
      title: "Level 3: Final Structure Exam",
      description: "Final assessment for Level 3 completion.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 3, instrument: "BTCUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the primary zone and the following structural break.",
      passThreshold: 80, xpAward: 500,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Structure Check", timeStart: "2024-01-10", timeEnd: "2024-01-12", priceMin: 108, priceMax: 112 }],
        feedbackOnPass: "Level 3 Capstone complete. Level 4 unlocked.",
        feedbackOnFail: "Review Level 3 concepts before retrying the final gate."
      }
    }
  ];

  for (const sc of scenarios) {
    const scenario = await prisma.trainingScenario.upsert({
      where: { slug: sc.slug },
      update: sc as any,
      create: sc as any,
    });

    const targetModuleNumber = sc.level === 3 ? "3.10" : "4.8";
    const targetModule = await prisma.courseModule.findFirst({ 
      where: { moduleNumber: targetModuleNumber, level: sc.level } 
    });

    if (targetModule) {
      await prisma.moduleScenarioLink.upsert({
        where: { moduleId_scenarioId: { moduleId: targetModule.id, scenarioId: scenario.id } },
        update: { requiredForProgress: true, sortOrder: 1 },
        create: { 
          moduleId: targetModule.id,
          scenarioId: scenario.id,
          requiredForProgress: true,
          sortOrder: 1
        },
      });
    }
  }

  // 4. Update Level 3 Final Gate Module
  await prisma.courseModule.updateMany({
    where: { level: 3, moduleNumber: "3.10" },
    data: {
      title: "Level 3 Final Gate",
      objective: "Verify Level 3 knowledge.",
      interactiveTaskType: "scenario_link",
      interactiveTaskData: { scenarioSlug: "level-3-final-gate", passThreshold: 80 } as any
    }
  });

  console.log('✅ Level 4 Final Audit Patch Complete.');
}

main()
  .catch((e) => {
    console.error('❌ Patch failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
