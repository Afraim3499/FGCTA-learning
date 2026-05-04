import { getTest } from "@/lib/test-actions";
import { TestEngine } from "@/components/academy/test-engine";
import Link from "next/link";
import { ChevronLeft, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function TestPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId: levelIdStr } = await params;
  const levelId = parseInt(levelIdStr);
  
  let test = null;
  let error: string | null = null;

  try {
    test = await getTest(levelId);
  } catch (e: any) {
    console.error("Test access error:", e.message);
    error = e.message;
  }

  return (
    <div className="space-y-8 min-h-[calc(100vh-10rem)] pb-12">
      <Link 
        href={`/course/${levelId}`} 
        className="inline-flex items-center text-sm text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] transition-colors group font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Level Test
      </Link>

      {(error || !test) ? (
        <div className="flex flex-col items-center justify-center h-96 border border-[var(--ln-border)] rounded-[3rem] bg-white text-center p-12 shadow-sm space-y-6">
          <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-500">
             <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--ln-navy-900)] tracking-tight">Level Test Not Ready Yet</h2>
            <p className="text-[var(--ln-text-secondary)] max-w-md font-medium leading-relaxed">
              {error || `The Knowledge Test for Level ${levelId} is currently being prepared.`}
              {" "}Complete the required lessons and practice steps before starting this test.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Link 
              href="/course"
              className="px-8 py-3.5 bg-[var(--ln-navy-900)] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[var(--ln-navy-900)]/10 hover:bg-[var(--ln-navy-800)] transition-all"
            >
              Back to Academy
            </Link>
            <Link 
              href={`/course/${levelId}`}
              className="px-8 py-3.5 bg-white border border-[var(--ln-border)] text-[var(--ln-navy-900)] rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all"
            >
              View Requirements
            </Link>
          </div>
        </div>
      ) : (
        <TestEngine level={levelId} test={test} />
      )}
    </div>
  );
}
