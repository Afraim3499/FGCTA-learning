import { getCourseLevels } from "@/lib/course-actions";
import { LevelCard } from "@/components/academy/level-card";

export default async function AcademyPage() {
  const levels = await getCourseLevels();

  return (
    <div className="space-y-8 pb-20">
      {/* Header Section */}
      <section className="space-y-3">
        <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">Academy</h1>
        <p className="text-[var(--ln-text-secondary)] font-medium max-w-2xl leading-relaxed">
          Build your market understanding through structured levels, visual lessons, 
          practice blocks, chart missions, and knowledge tests.
        </p>
      </section>

      {/* Level Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {levels.map((level) => {
          // A level is considered "Planned" if it has no modules yet
          const isPlanned = level.totalModules === 0 && level.level > 3;
          
          return (
            <LevelCard 
              key={level.level} 
              level={{
                ...level,
                // Add descriptions if they don't exist yet for better UX
                description: getLevelDescription(level.level)
              }} 
              isPlanned={isPlanned}
            />
          );
        })}
      </div>
    </div>
  );
}

function getLevelDescription(level: number): string {
  const descriptions: Record<number, string> = {
    0: "Establish your core market reading foundation. Learn OHLCV delivery, wicks, timeframe compression, and build an Evidence Stack.",
    1: "Master the rules of written planning. Learn how to define Areas of Interest, activation triggers, invalidation zones, and target paths.",
    2: "Understand execution mechanics, price feed delivery (DMA vs B-Book), structure swings, range boundaries, and session windows.",
    3: "Identify institutional footprints. Master Order Blocks, Fair Value Gaps, Breaker Blocks, and Volume Imbalances.",
    4: "Coordinate execution with time. Master the Daily Cycle (Asia consolidation, London Open, NY Open), PO3, and Killzones.",
    5: "Build your risk architecture. Learn position sizing, scaling out, capital protection, and drawdown limits.",
    6: "Develop scenario logic. Learn to build if-then decision branch trees for multiple market conditions.",
    7: "Synthesize setups into playbooks. Compile sweep, shift, and mitigation rules into repeatable strategies.",
    8: "Create management and review loops. Set up trade logs, journals, and statistical performance checks.",
    9: "Enter the final Crucible. Pass assessment scenarios and earn your institutional certification."
  };
  return descriptions[level] || "Academy level currently in planning.";
}
