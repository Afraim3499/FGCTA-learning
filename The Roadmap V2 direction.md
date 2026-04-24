Current truth: the academy is still around 31% integrated readiness.

DB has 72 modules, all currently core; 0 track-specific modules.
DB has 651 strategies: 202 Forex, 210 Crypto, 239 Gold.
Only 4/72 modules have logic_ids. Most modules are not mapped to execution logic.
Strategy DB has no logicId field, so module logic_ids cannot reliably point to DB strategies yet.
Strategy Lab currently fetches DB strategies but mostly renders static STRATEGIES_DATA, so the DB strategy vault is not the real UI source of truth yet.
23 modules have interactive_task_type, but only 2 have task data.
Module viewer only renders type_a_point_click, type_b_scenario, and type_c_replay; most seeded task types are not real renderers yet.
Only 2 knowledge tests exist.
No TrainingScenario, ScenarioAttempt, or module-scenario bridge exists yet.
The missing bridge is still real, but the first move cannot be blind mission seeding. The correct control path is:

DB Mapping Lock → Level 0 repair spec → TrainingScenario Bridge V1 → 3 pilot missions → expansion.

The final product path remains:

Learn → Practice → Simulate → Evaluate → Progress → Certify

Roadmap V2: 31% → 100% Control Plan

1. DB Reality & Mapping Lock — 31% → 38%
Purpose: create the truth map before adding more product surface.
Work required: classify all 72 modules by level, skill, track, content depth, logic IDs, task type, task data, renderer status, scenario link status, test coverage, and phase relevance. Classify all 651 strategies by asset class, family, usable logic category, UI visibility, module mapping, scenario relevance, and orphan status.
Data/models: CourseModule, Strategy, KnowledgeTest, TradingPhase, ModuleCompletion, UserProgress.
Files/routes likely involved: schema.prisma, admin, course, lab, audit scripts.
Dependencies: current DB export/live DB access.
Risks: mapping static Strategy Lab logic to DB strategies incorrectly.
Done criteria: locked audit report exists; every module and strategy is classified; orphan lists are explicit.
Must not touch: Prisma schema, migrations, mission seeds, certification logic.

2. Level 0 Beginner Repair — 38% → 45%
Purpose: make the first beginner experience usable and safe.
Work required: repair modules 0.1 to 0.3 so beginners learn pips, lots, spread, bid/ask, SL/TP, order entry, basic PnL, risk warning, and first safe demo action.
Data/models: CourseModule, later ModuleScenarioLink, TrainingScenario.
Files/routes: course module page, module viewer, terminal launcher, trading terminal.
Dependencies: Stage 1 module map.
Risks: exposing order entry before risk rules.
Done criteria: beginner can complete a safe 0.01-lot demo order with SL/TP and clear PnL/risk feedback.
Must not touch: advanced modules, phase exams, certification.

3. Scenario Bridge V1 — 45% → 53%
Purpose: allow a module to launch a terminal mission and save the result.
Work required: add TrainingScenario, ScenarioAttempt, ModuleScenarioLink; add mission launcher; add terminal scenario mode; save pass/fail, score, action log, trade log, XP source.
Data/models: new scenario models, CourseModule, User, UserProgress, XPLedgerEntry.
Files/routes: schema, scenario actions/API, module viewer, trading terminal, chart engine.
Dependencies: approved hardened schema and pilot module mapping.
Risks: duplicate active attempts, inconsistent module progress, scenario result drift.
Done criteria: one module can launch one scenario, complete it, save result, and update progress deterministically.
Must not touch: full 651 strategy import, certification, production phase rules.

4. Pilot Mission Pack — 53% → 58%
Purpose: prove the bridge with exactly 3 missions.
Work required: mission 1 order entry, mission 2 MSS structure annotation, mission 3 R-multiple/risk.
Data/models: TrainingScenario, ScenarioAttempt, ModuleScenarioLink.
Files/routes: mission launcher, terminal scenario mode, scenario grading.
Dependencies: Stage 3 bridge.
Risks: linking to wrong modules or inventing logic IDs.
Done criteria: 3 missions pass QA, save results, award XP, and affect only linked module progress.
Must not touch: 10+ missions, phase pools, certification.

5. Module Quality Upgrade — 58% → 68%
Purpose: stop modules from being skeletons.
Work required: deepen content, assign validated logic IDs, add task data, add scenario links, add tests, mark readiness status per module.
Data/models: CourseModule, future logic mapping table, scenario links, knowledge tests.
Files/routes: seed/update scripts after approval, module renderer, admin audit.
Dependencies: DB map and renderer inventory.
Risks: expanding content without assessment links.
Done criteria: each module has content depth, logic status, task/scenario status, and QA status.
Must not touch: unrelated user progress/history.

6. Interactive Renderer Completion — 68% → 74%
Purpose: make seeded task types real.
Current renderers: type_a_point_click, type_b_scenario, type_c_replay.
Missing DB task renderers include chart_annotation_mss, risk_defense_simulator, coin_flip_simulator, dealing_range_snapper, fvg_identifier_tool, plus many exam/simulator types.
Top 5 to build first: chart_annotation_mss, risk_defense_simulator, coin_flip_simulator, dealing_range_snapper, fvg_identifier_tool.
Done criteria per renderer: accepts typed task data, validates result, produces score, saves result, mobile-safe, admin-previewable.
Must not touch: certification or broad mission pools.

7. Strategy Mapping System — 74% → 80%
Purpose: connect 651 strategies without dumping all into UI.
Work required: introduce Strategy DB → StrategyLogic mapping, module logic_ids, lab visibility rules, orphan strategy handling, validation status.
Data/models: Strategy, likely StrategyLogic, CourseModule, module logic mappings.
Files/routes: Strategy Lab, vault API, admin mapping audit.
Dependencies: classification of 651 strategies.
Risks: showing low-quality/unmapped strategies as curriculum truth.
Done criteria: every strategy is mapped, hidden, or marked orphan with reason.
Must not touch: bulk UI exposure of all strategies.

8. Forex/Crypto/Gold Track Separation — 80% → 84%
Purpose: stop selling three thin skins.
Work required: define shared core modules, track-specific modules, track-specific strategies, missions, exams, instruments, risk conventions.
Current status: all 72 modules are core; only 6 modules have Forex, Crypto, and Gold adaptation fields.
Done criteria: each track has unique modules, missions, strategy lab filters, exams, and terminal defaults.
Must not touch: shared core identity unless track replacement is approved.

9. Phase Exam Scenario Pools — 84% → 88%
Purpose: make exams practical, not only knowledge tests.
Work required: scenario pools by phase/level, no-trade scenarios, trap scenarios, risk scenarios, randomization, unlock rules.
Data/models: TrainingScenario, ScenarioAttempt, TradingPhase, UserPhaseAttempt, KnowledgeTest.
Risks: students gaming fixed scenarios.
Done criteria: phase unlock requires knowledge + scenario evidence + risk discipline.
Must not touch: final certification scoring yet.

10. Certification Evidence System — 88% → 92%
Purpose: certification must be based on proof.
Work required: combine module results, scenario attempts, phase attempts, trading performance, risk discipline, reset penalties, final certificate logic.
Data/models: Certification, ScenarioAttempt, UserPhaseAttempt, Trade, RuleViolation, XPLedgerEntry.
Risks: certificates issued from XP alone.
Done criteria: certificate is impossible without practical evidence.
Must not touch: public certificate claims before QA.

11. Admin / QA / Anti-Placeholder Audit — 92% → 96%
Purpose: keep the academy clean.
Work required: admin visibility for module, task, scenario, strategy, renderer, route, placeholder status; broken path detector; orphan detector.
Done criteria: admin can see every incomplete or fake object before launch.
Must not touch: user-facing marketing claims until launch gate.

12. Final Product Integrity — 96% → 100%
Purpose: full paid academy readiness.
Work required: full journey testing, three-track testing, mobile testing, cohort testing, support workflow, refunds/escalations, final launch gate.
Done criteria: a new learner can go Learn → Practice → Simulate → Evaluate → Progress → Certify without manual intervention.
Must not touch: launch switch until all gates pass.

Scenario Schema Hardening

Decision: remove direct moduleId from TrainingScenario and use ModuleScenarioLink.

Reason: a scenario can belong to multiple modules, phase pools, tracks, or certification pools. Putting moduleId on TrainingScenario and also on ModuleScenarioLink creates conflicting ownership. Keep moduleId only on ScenarioAttempt as launch context: “this user attempted this scenario from this module.”

Proposed schema shape, not applied:

// Reuse existing MarketTrack enum: forex, crypto, gold, multi

enum ScenarioType {
  order_entry
  structure_annotation
  risk_sizing
  no_trade
  trap_detection
  phase_exam
  certification_exam
}

enum ScenarioStatus {
  draft
  qa
  active
  archived
}

enum ScenarioAttemptStatus {
  started
  in_progress
  passed
  failed
  abandoned
  expired
}

enum CandleSourceType {
  generated
  curated
  imported_csv
  live_snapshot
}

model TrainingScenario {
  id               String          @id @default(uuid())
  slug             String          @unique
  title            String
  description      String?
  scenarioType     ScenarioType    @map("scenario_type")
  status           ScenarioStatus  @default(draft)
  marketTrack      MarketTrack     @default(multi) @map("market_track")
  level            Int
  instrument       String
  timeframe        String
  candleSourceType CandleSourceType @map("candle_source_type")
  candleData       Json?           @map("candle_data")
  candleSeed       String?         @map("candle_seed")
  prompt           String
  expectedActions  Json            @map("expected_actions")
  gradingRubric    Json            @map("grading_rubric")
  passThreshold    Int             @default(80) @map("pass_threshold")
  xpAward          Int             @default(0) @map("xp_award")
  version          Int             @default(1)
  metadata         Json            @default("{}")
  createdAt        DateTime        @default(now()) @map("created_at")
  updatedAt        DateTime        @updatedAt @map("updated_at")

  links            ModuleScenarioLink[]
  attempts         ScenarioAttempt[]

  @@index([marketTrack])
  @@index([status])
  @@index([level])
  @@index([marketTrack, status, level])
  @@map("training_scenarios")
}

model ModuleScenarioLink {
  id                  String           @id @default(uuid())
  moduleId            String           @map("module_id")
  scenarioId          String           @map("scenario_id")
  requiredForProgress Boolean          @default(true) @map("required_for_progress")
  sortOrder           Int              @default(0) @map("sort_order")
  minScore            Int?             @map("min_score")
  xpAward             Int?             @map("xp_award")

  module              CourseModule     @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  scenario            TrainingScenario @relation(fields: [scenarioId], references: [id], onDelete: Cascade)

  @@unique([moduleId, scenarioId])
  @@index([moduleId])
  @@index([scenarioId])
  @@map("module_scenario_links")
}

model ScenarioAttempt {
  id             String                @id @default(uuid())
  userId         String                @map("user_id")
  scenarioId     String                @map("scenario_id")
  moduleId       String?               @map("module_id")
  status         ScenarioAttemptStatus @default(started)
  score          Int?
  passed         Boolean               @default(false)
  actions        Json?
  tradeLog       Json?                 @map("trade_log")
  gradingResult  Json?                 @map("grading_result")
  startedAt      DateTime              @default(now()) @map("started_at")
  completedAt    DateTime?             @map("completed_at")

  user           User                  @relation(fields: [userId], references: [id], onDelete: Cascade)
  scenario       TrainingScenario      @relation(fields: [scenarioId], references: [id], onDelete: Cascade)
  module         CourseModule?         @relation(fields: [moduleId], references: [id])

  @@index([scenarioId])
  @@index([moduleId])
  @@index([userId])
  @@index([status])
  @@index([userId, scenarioId, startedAt])
  @@map("scenario_attempts")
}
Required relation additions:

model CourseModule {
  scenarioLinks    ModuleScenarioLink[]
  scenarioAttempts ScenarioAttempt[]
}

model User {
  scenarioAttempts ScenarioAttempt[]
}
Duplicate active attempts should be enforced with a Postgres partial unique index in the SQL migration, not plain Prisma @@unique, because only active statuses should be unique:

CREATE UNIQUE INDEX scenario_attempt_one_active_per_context
ON scenario_attempts (user_id, scenario_id, COALESCE(module_id, ''))
WHERE status IN ('started', 'in_progress');
Migration Safety Plan

Migration name: add_training_scenario_bridge_v1.

Dev migration:

Only after approval.
Create schema change in dev branch.
Run prisma migrate dev --name add_training_scenario_bridge_v1 against dev DB only.
Verify generated SQL before applying elsewhere.
Staging migration:

Export/backup staging DB first.
Run migration with prisma migrate deploy.
Run validation queries before any seed.
Backup/export step:

Export full DB JSON.
Take database-level backup or pg_dump.
Separately export course_modules, strategies, users, user_progress, module_completions, trading_phases.
Rollback strategy:

Do not claim prisma migrate resolve rolls back tables. It does not.
Since V1 adds new tables/enums/indexes only, rollback should be a forward rollback migration that drops new scenario tables/indexes/enums if no production scenario data must be preserved.
If pilot data exists, export scenario tables first, then deploy rollback migration.
Use migrate resolve only to mark migration state after a manual DB correction, never as a rollback tool.
Seed strategy:

No auto-seed inside migration.
Seed exactly 3 pilot scenarios only after migration validation.
Use stable slugs and idempotent upserts.
Do not import all 651 strategies.
Do not create phase pools yet.
Validation queries:

SELECT COUNT(*) FROM training_scenarios;
SELECT COUNT(*) FROM module_scenario_links;
SELECT COUNT(*) FROM scenario_attempts;

SELECT module_id, scenario_id, COUNT(*)
FROM module_scenario_links
GROUP BY module_id, scenario_id
HAVING COUNT(*) > 1;

SELECT user_id, scenario_id, COALESCE(module_id, ''), COUNT(*)
FROM scenario_attempts
WHERE status IN ('started', 'in_progress')
GROUP BY user_id, scenario_id, COALESCE(module_id, '')
HAVING COUNT(*) > 1;

SELECT l.*
FROM module_scenario_links l
LEFT JOIN course_modules m ON m.id = l.module_id
LEFT JOIN training_scenarios s ON s.id = l.scenario_id
WHERE m.id IS NULL OR s.id IS NULL;
Corrected Pilot Mission Plan

Mission 1 — Level 0 Order Entry

Module: 0.3 — Terminal Synchronization
Module ID: 1b4c12b0-ce2b-4fc2-b240-e273a40be97d
Current module logic ID: INT_004
DB strategy-table logic ID exists: No. The DB strategy table has no logicId column and exact match search found no INT_004.

scenarioType: order_entry
Instrument: EURUSD
Account size: $10,000 tutorial demo
Allowed order size: 0.01 lot only
Risk sizing correction: 0.01 lot is safe; 1.00 lot must not be default for this beginner mission.
Mission prompt: place a demo EURUSD market order using bid/ask awareness, mandatory SL, mandatory TP, and risk below tutorial limit.
Expected action: buy or sell 0.01 lot with valid SL on the correct side and TP at least 2R.
Acceptable action: correct direction optional if risk, SL/TP, spread awareness, and order size are correct.
Invalid action: no SL, wrong-side SL, TP wrong side, size above 0.01, risk above limit, revenge/retry spam.
Rubric: order size 20, bid/ask/spread 20, SL validity 25, TP/R multiple 20, risk warning acknowledged 15.
Pass threshold: 90
XP award: 25
Module progress: required scenario pass can unlock/synchronize module 0.3; no certification effect.
Mission 2 — Structure / MSS

Selected module: 2.6 — Market Structure Shift (MSS)
Module ID: f2337154-f283-4b26-a5e4-5d78ef24b1db
Why not 2.4: 2.4 — Swings & Structural Points is prerequisite structure vocabulary, but 2.6 is the actual MSS module and already has interactive_task_type = chart_annotation_mss.
Current module logic ID: none
DB strategy-table logic ID exists: No. Must be created/mapped before seeding.

scenarioType: structure_annotation
Instrument: EURUSD
Account size: $10,000 demo context
Allowed order size: none; execution disabled
Mission prompt: identify the valid MSS by marking the protected swing and the candle body close that confirms structural shift.
Expected action: annotate prior swing, break candle, and new directional bias.
Acceptable action: marks MSS within tolerance and explains why wick-only sweep is not enough.
Invalid action: marks liquidity sweep as MSS, ignores candle close, places a trade.
Rubric: correct protected swing 30, correct break candle 35, wick-vs-close distinction 20, bias explanation 15.
Pass threshold: 80
XP award: 40
Module progress: required scenario pass counts toward module 2.6; 2.4 remains prerequisite only.
Mission 3 — Risk / R-Multiple

Selected module: 1.12 — R-Multiples
Module ID: b7053b0f-a214-47e0-abc9-cd657223274b
Why not 5.1: 5.1 — Dynamic Position Sizing is later intermediate sizing; this pilot should teach beginner R outcomes first.
Current module logic ID: none
DB strategy-table logic ID exists: No. Must be created/mapped before seeding.

scenarioType: risk_sizing
Instrument: EURUSD
Account size: $10,000
Allowed order size: 0.01 lot default; higher only if calculated risk remains under mission limit
Mission prompt: set SL and TP so the trade defines 1R risk and at least 2R reward.
Expected action: choose entry, SL, and TP that produce valid 2R+ with risk under limit.
Acceptable action: any valid direction with risk defined, TP at least 2R, and no oversizing.
Invalid action: no SL, TP below 1.5R, position size causing excessive dollar risk, moving SL wider after entry.
Rubric: defines 1R 30, calculates TP/R 30, position risk 25, avoids invalid adjustment 15.
Pass threshold: 85
XP award: 50
Module progress: required scenario pass counts toward module 1.12; no phase/certification credit yet.
Build Decision

Is the first build still TrainingScenario Bridge V1?
Not as the very first implementation task. It is the first feature build after the mapping lock.

Or must we do DB mapping first?
Yes. DB Reality & Mapping Lock comes first.

Or must we repair Level 0 first?
Level 0 repair spec starts before the bridge, but the full Level 0 “first safe demo action” depends on Scenario Bridge V1.

Exact first implementation task:
Create a read-only academy readiness audit that classifies modules, strategies, task renderers, tests, tracks, and pilot-module mapping. Output a lock report before schema work.

What must remain untouched?
Prisma schema, migrations, mission seeds, certification logic, phase exam pools, all-651 strategy import, and broad module rewrites.

Exact First Implementation Step

After approval, build a read-only academy-readiness-lock audit: it reads the current DB and reports every module, strategy, task type, renderer, test, track adaptation, and pilot link status. No schema changes. No migrations. No seeds.

That report becomes the control document for every later sprint.

What Must Not Be Touched Yet

Do not update Prisma schema yet.
Do not run migration yet.
Do not seed missions yet.
Do not seed or expose all 651 strategies.
Do not build 10 missions.
Do not link MSS to 2.4; use 2.6.
Do not link R-multiple pilot to 5.1; use 1.12.
Do not proceed to certification mode.
Do not alter existing user progress, trades, phase attempts, or certificates.