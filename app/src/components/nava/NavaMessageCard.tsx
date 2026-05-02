'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronRight, Info, AlertTriangle, PartyPopper, Lock } from 'lucide-react';
import { NavaMessage, NavaPose } from '@/lib/nava/types';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { NavaPoseImage } from './NavaPoseImage';

interface NavaMessageCardProps {
  message: NavaMessage;
  onDismiss: (id: string) => void;
  onMute?: () => void;
}

const VARIANTS = {
  welcome: { icon: Info, color: 'text-teal-600', bg: 'bg-teal-50' },
  tip: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50' },
  warning: { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  celebration: { icon: PartyPopper, color: 'text-purple-600', bg: 'bg-purple-50' },
  locked: { icon: Lock, color: 'text-slate-600', bg: 'bg-slate-50' },
};

export const NavaMessageCard: React.FC<NavaMessageCardProps> = ({ message, onDismiss, onMute }) => {
  const shouldReduceMotion = useReducedMotion();
  const config = VARIANTS[message.variant] || VARIANTS.tip;

  // High Attention Layout (Cinematic / Full Overlay)
  if (message.attentionLevel === 'high') {
    return (
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-8 bg-slate-900/40 backdrop-blur-[2px] overflow-y-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
          className="relative max-w-4xl w-full"
        >
          {/* Desktop-only Peeking Nava Character */}
          <div className="hidden sm:block">
            <NavaPoseImage 
              pose={message.pose} 
              attentionLevel="high" 
              priority 
              className="z-20"
            />
          </div>

          <div className="relative bg-white rounded-t-[3rem] sm:rounded-[3rem] shadow-2xl flex flex-col sm:flex-row h-auto max-h-[90vh] sm:min-h-[500px] overflow-hidden">
            {/* Zone 1: Visual Stage (Mobile Image / Desktop Sidebar) */}
            <div className="w-full sm:w-[40%] h-48 sm:h-auto bg-gradient-to-br from-slate-50 to-teal-50/50 shrink-0 relative flex items-center justify-center overflow-hidden">
              <div className="sm:hidden w-full h-full">
                <NavaPoseImage 
                  pose={message.pose} 
                  attentionLevel="high" 
                  forceBustOnMobile 
                  priority 
                  className="scale-125"
                />
              </div>
            </div>

            {/* Content Section (Zone 2 & 3 Combined but Structured) */}
            <div className="flex-1 p-8 sm:p-16 flex flex-col justify-center bg-white relative z-10 overflow-y-auto">
              {/* Zone 2: Message Content */}
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                    <Info size={16} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-teal-600">
                    Nava Guide
                  </span>
                </div>
                {message.dismissible && (
                  <button 
                    onClick={() => onDismiss(message.id)} 
                    className="p-2 -mr-2 text-slate-300 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                )}
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  {message.title}
                </h2>
                <p className="text-sm sm:text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                  {message.body}
                </p>
              </div>

              {/* Zone 3: CTA Section */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {message.ctaHref ? (
                  <Link
                    href={message.ctaHref}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-900/20 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={() => onDismiss(message.id)}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-900/20 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                
                <button 
                  onClick={() => onDismiss(message.id)}
                  className="text-slate-400 hover:text-slate-900 font-bold text-sm tracking-wide transition-colors py-2"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Medium & Low Attention Layouts (Side Cards)
  const isLow = message.attentionLevel === 'low';
  
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50, scale: 0.95 }}
      className={cn(
        "fixed right-6 z-50 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex",
        message.attentionLevel === 'medium' ? 'bottom-24' : 'bottom-6',
        isLow ? 'max-w-[280px]' : 'max-w-sm',
        "w-[calc(100vw-3rem)] sm:w-full"
      )}
    >
      {/* Nava Character Container */}
      <div className={cn(
        "bg-gradient-to-b from-slate-50 to-white flex items-end justify-center overflow-hidden border-r border-slate-50",
        isLow ? 'w-20' : 'w-24 sm:w-28'
      )}>
        <NavaPoseImage 
          pose={message.pose} 
          attentionLevel={message.attentionLevel} 
          className={cn(
             // Controlled peeking for side cards
             "-bottom-2" 
          )}
        />
      </div>

      <div className={`flex-1 ${isLow ? 'p-4' : 'p-5 sm:p-6'}`}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-widest text-teal-600 mb-0.5">
              Nava Guide
            </h4>
            <p className={`${isLow ? 'text-xs' : 'text-sm'} font-extrabold text-slate-900 leading-tight`}>
              {message.title}
            </p>
          </div>
          {message.dismissible && (
            <button
              onClick={() => onDismiss(message.id)}
              className="p-1 -mt-1 -mr-1 text-slate-300 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <p className={`${isLow ? 'text-[11px]' : 'text-xs'} text-slate-500 mb-3 leading-relaxed font-medium line-clamp-3`}>
          {message.body}
        </p>

        {message.ctaLabel && !isLow && (
          <div className="flex items-center gap-2">
            {message.ctaHref ? (
              <Link
                href={message.ctaHref}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                {message.ctaLabel}
                <ChevronRight size={14} />
              </Link>
            ) : (
              <button
                onClick={() => onDismiss(message.id)}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                {message.ctaLabel}
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Attention Marker */}
      {message.attentionLevel === 'medium' && (
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
      )}
    </motion.div>
  );
};

