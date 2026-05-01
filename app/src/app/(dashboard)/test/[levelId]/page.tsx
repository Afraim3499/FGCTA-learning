import { getTest } from "@/lib/test-actions";
import { TestEngine } from "@/components/academy/test-engine";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function TestPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId: levelIdStr } = await params;
  const levelId = parseInt(levelIdStr);
  const test = await getTest(levelId);

  return (
    <div className="space-y-8 min-h-[calc(100vh-10rem)]">
      <Link 
        href={`/course/${levelId}`} 
        className="inline-flex items-center text-sm text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] transition-colors group font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Level Test
      </Link>

      {!test ? (
        <div className="flex flex-col items-center justify-center h-64 border border-[var(--ln-border)] rounded-3xl bg-white text-center p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--ln-navy-900)] mb-2 tracking-tight">Test Currently Unavailable</h2>
          <p className="text-[var(--ln-text-secondary)] max-w-md font-medium leading-relaxed">
            The Knowledge Test for Level {levelId} is currently being prepared. Please check back later.
          </p>
        </div>
      ) : (
        <TestEngine level={levelId} test={test} />
      )}
    </div>
  );
}
