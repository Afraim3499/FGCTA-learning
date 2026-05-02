'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { NavaMarkerType, NavaSparkVariant } from '@/lib/nava/types';
import { NavaSpark } from './NavaSpark';

interface NavaGuidanceMarkerProps {
  targetSelector: string;
  markerType: NavaMarkerType;
  sparkVariant?: NavaSparkVariant;
  label?: string;
  active?: boolean;
}

export function NavaGuidanceMarker({ 
  targetSelector, 
  markerType, 
  sparkVariant = 'next',
  label,
  active = true 
}: NavaGuidanceMarkerProps) {
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = document.querySelector(targetSelector) as HTMLElement;
    if (el) {
      setTargetEl(el);
    }
  }, [targetSelector, active]);

  if (!targetEl || !active) return null;

  const renderMarker = () => {
    switch (markerType) {
      case 'spark':
        return (
          <NavaSpark 
            active={active} 
            variant={sparkVariant} 
            label={label} 
            reducedMotion={!!shouldReduceMotion} 
          />
        );
      case 'soft_pulse':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: shouldReduceMotion ? 0.3 : [0.2, 0.5, 0.2],
              boxShadow: shouldReduceMotion 
                ? '0 0 20px rgba(45,212,191,0.2)' 
                : ['0 0 20px rgba(45,212,191,0.2)', '0 0 40px rgba(45,212,191,0.4)', '0 0 20px rgba(45,212,191,0.2)']
            }}
            transition={shouldReduceMotion ? {} : { 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 rounded-[inherit] border-2 border-teal-400/50 pointer-events-none"
          />
        );
      case 'highlight_card':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -inset-1 rounded-[inherit] border-2 border-teal-500/30 bg-teal-500/5 pointer-events-none"
          />
        );
      case 'locked_gate_marker':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] rounded-[inherit] border border-slate-200 pointer-events-none"
          />
        );
      default:
        return null;
    }
  };

  // We use absolute positioning relative to the targetEl's parent if it's relative, 
  // or we can use fixed positioning with getBoundingClientRect.
  // Given the complexity of layouts, createPortal to a relative parent is often safer.
  
  return createPortal(
    <div 
      className="absolute pointer-events-none z-50"
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <AnimatePresence>
        {active && renderMarker()}
      </AnimatePresence>
    </div>,
    targetEl
  );
}
