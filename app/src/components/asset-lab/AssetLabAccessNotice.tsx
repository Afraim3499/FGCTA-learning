import Link from "next/link";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

type AssetLabAccessNoticeProps = {
  assetName?: string;
};

export function AssetLabAccessNotice({ assetName }: AssetLabAccessNoticeProps) {
  const title = assetName ? `${assetName} Asset Lab requires platform access.` : "Asset Lab requires platform access.";

  return (
    <div className="min-h-[calc(100vh-140px)] py-8" data-asset-lab-access="upgrade-required">
      <section className="mx-auto grid max-w-5xl gap-6 rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:grid-cols-[minmax(0,1fr)_320px] lg:p-8">
        <div className="min-w-0 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ln-border)] bg-[var(--ln-teal-soft)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">
            <LockKeyhole className="h-4 w-4" />
            Protected workspace
          </div>

          <div>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-[var(--ln-navy-900)] sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ln-text-secondary)]">
              This workspace contains researched exposure maps, named participant notes, source-backed claims, and study routines for active Lurnava learners. Your account is signed in, but this workspace is not open on the current access level.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--ln-navy-900)] px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(8,26,54,0.16)] transition hover:bg-[var(--ln-navy-800)]"
            >
              View plans
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/markets"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--ln-border)] bg-white px-5 py-3 text-sm font-black text-[var(--ln-navy-900)] transition hover:bg-[var(--ln-bg-soft)]"
            >
              Browse Markets
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-[var(--ln-navy-900)] p-5 text-white">
          <ShieldCheck className="h-7 w-7 text-[var(--ln-teal-400)]" />
          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-400)]">
            What stays protected
          </p>
          <ul className="mt-4 space-y-3 text-sm font-bold leading-6 text-slate-300">
            <li>Named holder and exposure maps</li>
            <li>Deep source packs and review notes</li>
            <li>Asset-specific research routines</li>
            <li>Related lesson and Strategy Lab paths</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
