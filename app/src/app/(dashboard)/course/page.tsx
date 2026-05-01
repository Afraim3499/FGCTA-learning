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
    0: "Establish your core market understanding. Learn the essential mechanics and set up your safe PracticeEnvironment.",
    1: "Building your chart-reading foundation. Master basic concepts and begin interpreting market behavior.",
    2: "Exploring market mechanics. Understand the relationship between price action and market participants.",
    3: "Applying your knowledge. Learn to read advanced market interactions and practice within guided scenarios.",
    4: "Planned: Advanced timing and price interaction concepts.",
    5: "Planned: Risk management frameworks and capital preservation concepts.",
    6: "Planned: Macro narrative building and market correlation analysis.",
    7: "Planned: Synthesis of core pillars into a repeatable practice framework.",
    8: "Planned: Advanced decision-making and performance review."
  };
  return descriptions[level] || "Academy level currently in planning.";
}
