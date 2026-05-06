import { getModuleContent } from "@/lib/course-actions";
import { getUser } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ModuleViewer } from "@/components/academy/module-viewer";

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const module = await getModuleContent(moduleId);
  const user = await getUser();

  if (!user) return <div>Unauthorized</div>;
  
  // Legacy Protection: Redirect students away from archived content
  if (module.level === 1 && module.title.includes("[Legacy]")) {
    const { redirect } = await import("next/navigation");
    redirect("/course/1");
  }

  // Fetch user's selected track for the UI hint
  const userProgress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
    include: { user: { select: { marketTrack: true } } }
  });

  const userTrack = userProgress?.user.marketTrack || "forex";

  // Lesson-card modules use the V2 Workspace Shell which has its own
  // module title, breadcrumb, and stepper inside the left rail.
  // Skip the outer header/breadcrumb wrapper for these to maximize canvas space.
  const isLessonCardModule = module.content?.includes(":::lesson-cards");

  if (isLessonCardModule) {
    return (
      // Full-bleed lesson workspace — padding handled by the workspace shell itself
      <div className="h-full px-4 sm:px-6 lg:px-8 py-6">
        <ModuleViewer module={module} userTrack={userTrack} />
      </div>
    );
  }

  // ── Legacy layout for non-lesson-card modules (Level 1–5 etc.) ──
  return (
    <div className="space-y-8">
      <Link 
        href={`/course/${module.level}`} 
        className="inline-flex items-center text-sm text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] transition-colors group font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Academy Roadmap
      </Link>

      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-widest">
          <span>Level {module.level}</span>
          <span className="text-[var(--ln-text-dim)]">/</span>
          <span>Module {module.moduleNumber}</span>
        </div>
        <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">{module.title}</h1>
      </div>

      <ModuleViewer module={module} userTrack={userTrack} />
    </div>
  );
}
