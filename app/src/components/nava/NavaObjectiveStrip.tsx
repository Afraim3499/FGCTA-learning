'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavaObjectiveStripProps {
  active: boolean;
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
  onDismiss?: () => void;
  className?: string;
}

export function NavaObjectiveStrip({
  active,
  title,
  ctaLabel,
  ctaHref,
  onDismiss,
  className
}: NavaObjectiveStripProps) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className={cn(
            "w-full max-w-4xl mx-auto px-4 py-2 pointer-events-none",
            className
          )}
        >
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-[1.25rem] px-4 py-3 flex items-center justify-between gap-4 pointer-events-auto overflow-hidden relative group">
            {/* Accent Border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--ln-teal-500)]" />

            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[var(--ln-teal-500)]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest mb-0.5">Current Objective</span>
                <p className="text-sm font-bold text-[var(--ln-navy-900)] truncate">
                  {title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[var(--ln-teal-500)]/10"
                >
                  {ctaLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className="p-2 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors"
                  aria-label="Dismiss objective"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
