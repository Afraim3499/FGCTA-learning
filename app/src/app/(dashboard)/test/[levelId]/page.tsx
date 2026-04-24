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
        className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-white transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Exit Assessment
      </Link>

      {!test ? (
        <div className="flex flex-col items-center justify-center h-64 border border-[var(--color-border)] rounded-xl bg-[var(--color-panel)] text-center p-8">
          <h2 className="text-xl font-bold text-white mb-2">Assessment Under Construction</h2>
          <p className="text-[var(--color-text-muted)] max-w-md">
            The elite assessment for Level {levelId} is currently being calibrated by our institutional coaches. Please check back later.
          </p>
        </div>
      ) : (
        <TestEngine level={levelId} test={test} />
      )}
    </div>
  );
}
