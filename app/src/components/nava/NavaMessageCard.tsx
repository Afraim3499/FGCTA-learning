'use client';

import React from 'react';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronRight, Info, AlertTriangle, PartyPopper, Lock, Settings, EyeOff, MessageSquareOff } from 'lucide-react';
import { NavaMessage, NavaPose, NavaUserMode } from '@/lib/nava/types';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { NavaPoseImage } from './NavaPoseImage';

interface NavaMessageCardProps {
  message: NavaMessage;
  onDismiss: (id: string) => void;
  onHideTips?: () => void;
  onMute?: () => void;
  userMode?: NavaUserMode;
}

const VARIANTS = {
  welcome: { icon: Info, color: 'text-teal-600', bg: 'bg-teal-50' },
  tip: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50' },
  warning: { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  celebration: { icon: PartyPopper, color: 'text-purple-600', bg: 'bg-purple-50' },
  locked: { icon: Lock, color: 'text-slate-600', bg: 'bg-slate-50' },
};

export const NavaMessageCard: React.FC<NavaMessageCardProps> = ({ message, onDismiss, onHideTips, onMute, userMode }) => {
  const shouldReduceMotion = useReducedMotion();
  const [showSettings, setShowSettings] = React.useState(false);
  const config = VARIANTS[message.variant] || VARIANTS.tip;

  // High Attention Layout (Cinematic / Full Overlay)
  if (message.attentionLevel === 'high') {
    return (
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-8 bg-slate-900/60 backdrop-blur-[4px] overflow-y-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
              <div className="sm:hidden w-full h-full scale-90 origin-bottom">
                <NavaPoseImage
                  pose={message.pose}
                  attentionLevel="high"
                  forceBustOnMobile
                  priority
                  className="scale-110"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 sm:p-16 flex flex-col justify-center bg-white relative z-10 overflow-y-auto">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                    <Info size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-teal-600">
                      Nava Guide
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={cn(
                      "p-2 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors rounded-full hover:bg-[var(--ln-bg-soft)]",
                      showSettings && "bg-[var(--ln-bg-soft)] text-[var(--ln-navy-900)]"
                    )}
                  >
                    <Settings size={20} />
                  </button>
                  {message.dismissible && (
                    <button
                      onClick={() => onDismiss(message.id)}
                      className="p-2 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors rounded-full hover:bg-[var(--ln-bg-soft)]"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-4 bg-slate-50 rounded-[2rem] space-y-2 overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-3 mb-2">
                      <p className="text-[9px] font-black uppercase tracking-widest text-[var(--ln-text-muted)]">Guidance Preferences</p>
                      {userMode === 'quiet' && (
                        <span className="text-[8px] font-bold text-teal-600 uppercase tracking-tight">Nava is quieter for now</span>
                      )}
                    </div>
                    <button
                      onClick={() => { onHideTips?.(); setShowSettings(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] hover:bg-white rounded-2xl transition-all shadow-sm shadow-transparent hover:shadow-slate-200/50"
                    >
                      <EyeOff size={16} /> Hide all non-critical tips for 48 hours
                    </button>
                    <button
                      onClick={() => { onMute?.(); setShowSettings(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-[var(--ln-text-secondary)] hover:text-red-600 hover:bg-white rounded-2xl transition-all shadow-sm shadow-transparent hover:shadow-red-100/50"
                    >
                      <MessageSquareOff size={16} /> Mute Nava guide completely
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  {message.title}
                </h2>
                <p className="text-sm sm:text-xl text-[var(--ln-text-secondary)] leading-relaxed font-medium max-w-lg">
                  {message.body}
                </p>
              </div>

              {/* Zone 3: CTA Section */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {message.ctaHref ? (
                  <Link
                    href={message.ctaHref}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-900/20 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={() => onDismiss(message.id)}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-900/20 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <button
                  onClick={() => onDismiss(message.id)}
                  className="text-[var(--ln-text-muted)] hover:text-[var(--ln-navy-900)] font-bold text-sm tracking-wide transition-colors py-2"
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
  const [isMinimized, setIsMinimized] = React.useState(false);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn(
        "fixed z-50 bg-white rounded-2xl shadow-[0_15px_50px_rgba(8,26,54,0.12)] border border-slate-100 overflow-hidden flex flex-col sm:flex-row transition-all",
        message.attentionLevel === 'medium' ? 'bottom-20 sm:bottom-24' : 'bottom-4 sm:bottom-6',
        isMinimized ? 'max-w-[120px] sm:max-w-[150px]' : (isLow ? 'max-w-[300px]' : 'max-w-md'),
        "right-4 left-auto w-auto sm:right-6"
      )}
    >
      <div className="flex">
        {/* Nava Character Container */}
        <div 
          onClick={() => isMinimized && setIsMinimized(false)}
          className={cn(
            "bg-gradient-to-b from-slate-50 to-white flex items-end justify-center overflow-hidden border-r border-slate-50 shrink-0 transition-all",
            isMinimized ? 'w-12 sm:w-16 cursor-pointer' : (isLow ? 'w-20' : 'w-24 sm:w-32')
          )}
        >
          <div className={cn("origin-bottom transition-transform", isMinimized ? "scale-75" : "sm:scale-100 scale-90")}>
            <NavaPoseImage
              pose={message.pose}
              attentionLevel={message.attentionLevel}
              className="-bottom-1"
            />
          </div>
        </div>

        {!isMinimized && (
          <div className={`flex-1 ${isLow ? 'p-4' : 'p-5 sm:p-7'} relative`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-teal-600">
                    Nava Guide
                  </h4>
                </div>
                <p className={`${isLow ? 'text-xs' : 'text-[15px]'} font-extrabold text-[var(--ln-navy-900)] leading-tight tracking-tight`}>
                  {message.title}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors rounded-lg hover:bg-[var(--ln-bg-soft)]"
                  title="Minimize"
                >
                  <ChevronRight size={16} className="rotate-90 sm:rotate-0" />
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={cn(
                    "p-1.5 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors rounded-lg hover:bg-[var(--ln-bg-soft)]",
                    showSettings && "bg-[var(--ln-bg-soft)] text-[var(--ln-navy-900)]"
                  )}
                  title="Guidance Settings"
                >
                  <Settings size={14} />
                </button>
                {message.dismissible && (
                  <button
                    onClick={() => onDismiss(message.id)}
                    className="p-1.5 text-[var(--ln-text-dim)] hover:text-[var(--ln-navy-900)] transition-colors rounded-lg hover:bg-[var(--ln-bg-soft)]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 space-y-1 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-3 mb-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[var(--ln-text-muted)]">Settings</p>
                    {userMode === 'quiet' && (
                      <span className="text-[8px] font-bold text-teal-600 uppercase tracking-tight">Quieter Mode Active</span>
                    )}
                  </div>
                  <button
                    onClick={() => { onHideTips?.(); setShowSettings(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-[var(--ln-text-secondary)] hover:text-[var(--ln-navy-900)] hover:bg-[var(--ln-bg-soft)] rounded-xl transition-all"
                  >
                    <EyeOff size={12} /> Hide tips for 48h
                  </button>
                  <button
                    onClick={() => { onMute?.(); setShowSettings(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-[var(--ln-text-secondary)] hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <MessageSquareOff size={12} /> Mute Nava guide
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <p className={`${isLow ? 'text-[11px]' : 'text-[13px]'} text-[var(--ln-text-secondary)] mb-4 leading-relaxed font-medium`}>
              {message.body}
            </p>

            {message.ctaLabel && !isLow && (
              <div className="flex items-center gap-3">
                {message.ctaHref ? (
                  <Link
                    href={message.ctaHref}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--ln-navy-900)] text-white text-[11px] font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-[var(--ln-navy-900)]/10 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={14} />
                  </Link>
                ) : (
                  <button
                    onClick={() => onDismiss(message.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--ln-navy-900)] text-white text-[11px] font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-[var(--ln-navy-900)]/10 active:scale-95"
                  >
                    {message.ctaLabel}
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Attention Marker */}
      {message.attentionLevel === 'medium' && !isMinimized && (
        <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-teal-500" />
      )}
    </motion.div>
  );
};

