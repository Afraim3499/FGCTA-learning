import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BookOpenCheck, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Financial Disclaimer | Lurnava Academy",
  description:
    "Read Lurnava Academy's education-only disclaimer for market lessons, practice scenarios, Asset Intelligence, Strategy Lab, and learning records.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--ln-border)] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ln-teal-500)]">
            <ShieldAlert className="h-4 w-4" />
            Legal notice
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="rounded-2xl border border-[var(--ln-border)] bg-white p-6 shadow-sm lg:p-10">
              <p className="text-xs font-bold text-[var(--ln-text-muted)]">Last updated: July 2026</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-[var(--ln-navy-900)] lg:text-5xl">
                Financial Disclaimer
              </h1>
              <p className="mt-5 text-sm leading-7 text-[var(--ln-text-secondary)]">
                Lurnava Academy is an education platform. We teach market concepts, asset research, chart reading, practice routines, and assessment workflows. We do not provide personal financial advice, brokerage services, investment management, trade directions, or account funding.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                  <p className="text-sm font-bold leading-7 text-amber-900">
                    Markets involve risk. Forex, crypto, gold, derivatives, and leveraged products can move quickly and may cause financial loss. Lurnava lessons and practice results do not predict future market results.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-8">
                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">What Lurnava Provides</h2>
                  <ul className="mt-4 space-y-3 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    <li>Structured market education and visual lessons.</li>
                    <li>Practice scenarios that use simulated conditions.</li>
                    <li>Asset Intelligence pages for research, source review, and market context.</li>
                    <li>Strategy Lab pages for classroom study of setup logic and visual models.</li>
                    <li>Learning records that verify coursework and assessment progress.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">What Lurnava Does Not Provide</h2>
                  <ul className="mt-4 space-y-3 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    <li>We are not a broker, dealer, exchange, investment adviser, prop trading firm, or investment company.</li>
                    <li>We do not execute trades, custody funds, pool investor money, or manage user capital.</li>
                    <li>We do not provide personalized recommendations, trade alerts, copy-trading instructions, or portfolio management.</li>
                    <li>We do not promise market results, employment outcomes, funded accounts, or returns.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">Practice And Assessment Limits</h2>
                  <p className="mt-4 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    Practice scenarios are educational simulations. They may not reflect real liquidity, slippage, spreads, fees, execution delay, emotional pressure, taxation, or broker rules. Assessment scores and certificates show learning progress inside Lurnava only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">Real-Market Decisions</h2>
                  <p className="mt-4 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    Any real-market decision is your responsibility. Before using real capital, consider your financial situation, risk tolerance, jurisdiction, tax treatment, and whether you need guidance from a properly licensed professional.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">Asset Intelligence And Sources</h2>
                  <p className="mt-4 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    Asset Intelligence pages use public sources and review dates to teach market context. Fast-changing holdings, reserves, TVL, flows, rates, and market metrics can become outdated after review. Treat those items as research references, not current instructions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black text-[var(--ln-navy-900)]">Limitation Of Liability</h2>
                  <p className="mt-4 text-sm font-bold leading-7 text-[var(--ln-text-secondary)]">
                    Lurnava Academy, its owners, team members, contractors, and affiliates are not liable for losses or damages connected to real-market activity, personal financial choices, third-party platforms, broker behavior, exchange behavior, or reliance on educational material.
                  </p>
                </section>
              </div>
            </article>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-[var(--ln-border)] bg-[var(--ln-navy-900)] p-5 text-white">
                <BookOpenCheck className="h-6 w-6 text-[var(--ln-teal-400)]" />
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--ln-teal-400)]">
                  Read this first
                </p>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-300">
                  Lurnava helps learners study markets. It does not decide what anyone should do with money.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--ln-border)] bg-white p-5 shadow-sm">
                <h2 className="text-lg font-black text-[var(--ln-navy-900)]">Related pages</h2>
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Market Guides", href: "/markets" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl bg-[var(--ln-bg-soft)] px-4 py-3 text-sm font-black text-[var(--ln-text-secondary)] transition hover:bg-[var(--ln-teal-soft)] hover:text-[var(--ln-navy-900)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
