import Link from "next/link";
import { ShieldAlert } from "lucide-react";

type AssetEducationNoticeProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function AssetEducationNotice({ tone = "light", compact = false }: AssetEducationNoticeProps) {
  const isDark = tone === "dark";

  return (
    <div
      data-asset-legal-notice="education-only"
      className={
        isDark
          ? "rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300"
          : "rounded-2xl border border-[var(--ln-border)] bg-white p-4 text-[var(--ln-text-secondary)] shadow-sm"
      }
    >
      <div className="flex gap-3">
        <div
          className={
            isDark
              ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--ln-teal-400)]"
              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]"
          }
        >
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p
            className={
              isDark
                ? "text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-teal-400)]"
                : "text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ln-teal-500)]"
            }
          >
            Education only
          </p>
          <p className={compact ? "mt-1 text-xs font-bold leading-5" : "mt-2 text-sm font-bold leading-6"}>
            Lurnava teaches market study, practice, and assessment. This content is not personal financial advice, a trade direction, or a promise of market results.{" "}
            <Link
              href="/disclaimer"
              className={
                isDark
                  ? "text-white underline decoration-white/30 underline-offset-4"
                  : "text-[var(--ln-navy-900)] underline decoration-slate-300 underline-offset-4"
              }
            >
              Read the disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
