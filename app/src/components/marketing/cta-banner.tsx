"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  headline,
  subheadline,
  primaryLabel = "Start Free Trial",
  primaryHref = "/free-trial",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 lg:px-8 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[350px] bg-[var(--color-brand-500)]/8 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
          {headline}
        </h2>

        {subheadline && (
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.08)] group text-sm"
          >
            {primaryLabel}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-white transition-colors border border-white/10 rounded-2xl hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>

        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)]/50 pt-4">
          No credit card required · Free Level 0 access
        </p>
      </motion.div>
    </section>
  );
}
