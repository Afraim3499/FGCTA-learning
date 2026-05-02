'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Info, Lock } from 'lucide-react';
import { NavaMarkerType } from '@/lib/nava/types';

interface NavaGuidanceMarkerProps {
  targetSelector: string;
  type: NavaMarkerType;
  isVisible: boolean;
}

export const NavaGuidanceMarker: React.FC<NavaGuidanceMarkerProps> = ({
  targetSelector,
  type,
  isVisible,
}) => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const observerRef = useRef<MutationObserver | null>(null);

  const updateRect = () => {
    const element = document.querySelector(targetSelector);
    if (element) {
      setRect(element.getBoundingClientRect());
    } else {
      setRect(null);
    }
  };

  useEffect(() => {
    if (!isVisible) return;

    updateRect();
    
    // Watch for window resize and scroll
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });

    // Watch for DOM changes (in case element appears later)
    observerRef.current = new MutationObserver(updateRect);
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
      observerRef.current?.disconnect();
    };
  }, [targetSelector, isVisible]);

  if (!isVisible || !rect) return null;

  // Scroll offset is handled by getBoundingClientRect being relative to viewport
  // But we want to render this in a fixed overlay
  const style: React.CSSProperties = {
    position: 'fixed',
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    pointerEvents: 'none',
    zIndex: 40,
  };

  return (
    <div style={style}>
      <AnimatePresence>
        {type === 'soft_pulse' && (
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
            className="absolute inset-0 rounded-2xl border-2 border-teal-400/50"
          />
        )}

        {type === 'highlight_card' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -inset-1 rounded-3xl border-2 border-teal-500/30 shadow-[0_0_30px_rgba(45,212,191,0.15)] bg-teal-500/5"
          />
        )}

        {type === 'nava_badge' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center z-10"
          >
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-[10px] font-black">
              NAVA
            </div>
          </motion.div>
        )}

        {type === 'locked_gate_marker' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] rounded-3xl border border-slate-200 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-slate-400">
              <Lock size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
