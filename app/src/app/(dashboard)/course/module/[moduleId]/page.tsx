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
          <span className="text-slate-300">/</span>
          <span>Module {module.moduleNumber}</span>
        </div>
        <h1 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">{module.title}</h1>
      </div>

      <ModuleViewer module={module} userTrack={userTrack} />
    </div>
  );
}
