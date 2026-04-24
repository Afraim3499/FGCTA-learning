-- CreateEnum
CREATE TYPE "ScenarioType" AS ENUM ('order_entry', 'structure_annotation', 'risk_sizing', 'no_trade', 'trap_detection', 'phase_exam', 'certification_exam');

-- CreateEnum
CREATE TYPE "ScenarioStatus" AS ENUM ('draft', 'qa', 'active', 'archived');

-- CreateEnum
CREATE TYPE "ScenarioAttemptStatus" AS ENUM ('started', 'in_progress', 'passed', 'failed', 'abandoned', 'expired');

-- CreateEnum
CREATE TYPE "CandleSourceType" AS ENUM ('generated', 'curated', 'imported_csv', 'live_snapshot');

-- CreateTable
CREATE TABLE "training_scenarios" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "scenario_type" "ScenarioType" NOT NULL,
    "status" "ScenarioStatus" NOT NULL DEFAULT 'draft',
    "market_track" "MarketTrack" NOT NULL DEFAULT 'multi',
    "level" INTEGER NOT NULL,
    "instrument" TEXT NOT NULL,
    "timeframe" TEXT NOT NULL,
    "candle_source_type" "CandleSourceType" NOT NULL,
    "candle_data" JSONB,
    "candle_seed" TEXT,
    "prompt" TEXT NOT NULL,
    "expected_actions" JSONB NOT NULL,
    "grading_rubric" JSONB NOT NULL,
    "pass_threshold" INTEGER NOT NULL DEFAULT 80,
    "xp_award" INTEGER NOT NULL DEFAULT 0,
    "scenario_version" INTEGER NOT NULL DEFAULT 1,
    "engine_version" TEXT NOT NULL DEFAULT '1.0.0',
    "grader_version" TEXT NOT NULL DEFAULT '1.0.0',
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_scenarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module_scenario_links" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "scenario_id" TEXT NOT NULL,
    "required_for_progress" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "min_score" INTEGER,
    "xp_award" INTEGER,

    CONSTRAINT "module_scenario_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scenario_attempts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "scenario_id" TEXT NOT NULL,
    "module_id" TEXT,
    "status" "ScenarioAttemptStatus" NOT NULL DEFAULT 'started',
    "score" INTEGER,
    "passed" BOOLEAN NOT NULL DEFAULT false,
    "actions" JSONB,
    "trade_log" JSONB,
    "grading_result" JSONB,
    "result_summary" TEXT,
    "weakness_tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "xp_awarded" INTEGER NOT NULL DEFAULT 0,
    "progress_applied" BOOLEAN NOT NULL DEFAULT false,
    "scenario_version" INTEGER NOT NULL DEFAULT 1,
    "engine_version" TEXT NOT NULL DEFAULT '1.0.0',
    "grader_version" TEXT NOT NULL DEFAULT '1.0.0',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "scenario_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "training_scenarios_slug_key" ON "training_scenarios"("slug");

-- CreateIndex
CREATE INDEX "training_scenarios_market_track_idx" ON "training_scenarios"("market_track");

-- CreateIndex
CREATE INDEX "training_scenarios_status_idx" ON "training_scenarios"("status");

-- CreateIndex
CREATE INDEX "training_scenarios_level_idx" ON "training_scenarios"("level");

-- CreateIndex
CREATE INDEX "training_scenarios_market_track_status_level_idx" ON "training_scenarios"("market_track", "status", "level");

-- CreateIndex
CREATE INDEX "module_scenario_links_module_id_idx" ON "module_scenario_links"("module_id");

-- CreateIndex
CREATE INDEX "module_scenario_links_scenario_id_idx" ON "module_scenario_links"("scenario_id");

-- CreateIndex
CREATE UNIQUE INDEX "module_scenario_links_module_id_scenario_id_key" ON "module_scenario_links"("module_id", "scenario_id");

-- CreateIndex
CREATE INDEX "scenario_attempts_scenario_id_idx" ON "scenario_attempts"("scenario_id");

-- CreateIndex
CREATE INDEX "scenario_attempts_module_id_idx" ON "scenario_attempts"("module_id");

-- CreateIndex
CREATE INDEX "scenario_attempts_user_id_idx" ON "scenario_attempts"("user_id");

-- CreateIndex
CREATE INDEX "scenario_attempts_status_idx" ON "scenario_attempts"("status");

-- CreateIndex
CREATE INDEX "scenario_attempts_user_id_scenario_id_started_at_idx" ON "scenario_attempts"("user_id", "scenario_id", "started_at");

-- Custom: Partial Unique Index for Active Attempts
CREATE UNIQUE INDEX scenario_attempt_one_active_per_context
ON scenario_attempts (user_id, scenario_id, COALESCE(module_id, ''))
WHERE status IN ('started', 'in_progress');

-- AddForeignKey
ALTER TABLE "module_scenario_links" ADD CONSTRAINT "module_scenario_links_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "course_modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module_scenario_links" ADD CONSTRAINT "module_scenario_links_scenario_id_fkey" FOREIGN KEY ("scenario_id") REFERENCES "training_scenarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenario_attempts" ADD CONSTRAINT "scenario_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenario_attempts" ADD CONSTRAINT "scenario_attempts_scenario_id_fkey" FOREIGN KEY ("scenario_id") REFERENCES "training_scenarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenario_attempts" ADD CONSTRAINT "scenario_attempts_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "course_modules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
