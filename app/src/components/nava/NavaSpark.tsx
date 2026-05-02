'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Lock, RotateCcw, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavaSparkVariant } from '@/lib/nava/types';

interface NavaSparkProps {
  active: boolean;
  variant?: NavaSparkVariant;
  label?: string;
  reducedMotion?: boolean;
  className?: string;
}

export function NavaSpark({ 
  active, 
  variant = 'next', 
  label, 
  reducedMotion = false,
  className 
}: NavaSparkProps) {
  if (!active) return null;

  const getIcon = () => {
    switch (variant) {
      case 'next': return <Compass className="w-3 h-3" />;
      case 'available': return <Sparkles className="w-3 h-3" />;
      case 'locked': return <Lock className="w-3 h-3" />;
      case 'review': return <RotateCcw className="w-3 h-3" />;
      case 'milestone': return <Award className="w-3 h-3" />;
      default: return <Compass className="w-3 h-3" />;
    }
  };

  const getColors = () => {
    switch (variant) {
      case 'locked': return 'bg-amber-500 text-white shadow-amber-500/20';
      case 'review': return 'bg-rose-500 text-white shadow-rose-500/20';
      default: return 'bg-[var(--ln-teal-500)] text-white shadow-[var(--ln-teal-500)]/20';
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(
        "absolute -top-2 -right-2 z-50 flex items-center gap-1.5",
        className
      )}
    >
      <div className="relative">
        {/* Pulse Effect */}
        {!reducedMotion && (
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute inset-0 rounded-full",
              variant === 'locked' ? 'bg-amber-500' : 
              variant === 'review' ? 'bg-rose-500' : 'bg-[var(--ln-teal-500)]'
            )}
          />
        )}
        
        {/* Main Marker */}
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white",
          getColors()
        )}>
          {getIcon()}
        </div>
      </div>

      {label && (
        <div className="bg-white/90 backdrop-blur-sm border border-slate-100 px-2 py-0.5 rounded-lg shadow-sm">
          <span className="text-[9px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider whitespace-nowrap">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}
