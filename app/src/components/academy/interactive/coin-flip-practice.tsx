"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, TrendingUp, TrendingDown, RefreshCcw, AlertTriangle, CheckCircle2 } from "lucide-react";
import { AcademyButton } from "@/components/ui/academy-button";

export function CoinFlipPracticeEnvironment() {
  const [balance, setBalance] = useState(1000);
  const [flips, setFlips] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]);
  const [betSize, setBetSize] = useState(10);
  const [isFlipping, setIsFlipping] = useState(false);
  const [lastResult, setLastResult] = useState<boolean | null>(null);
  const [consecutiveLosses, setConsecutiveLosses] = useState(0);

  const flip = useCallback(() => {
    if (balance < betSize || flips >= 50) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      // 55% win rate as per blueprint
      const win = Math.random() < 0.55;
      const newBalance = win ? balance + betSize : balance - betSize;
      
      setBalance(newBalance);
      setFlips(f => f + 1);
      setHistory(h => [win, ...h].slice(0, 10));
      setLastResult(win);
      setIsFlipping(false);
      
      if (!win) setConsecutiveLosses(c => c + 1);
      else setConsecutiveLosses(0);
    }, 600);
  }, [balance, betSize, flips]);

  const reset = () => {
    setBalance(1000);
    setFlips(0);
    setHistory([]);
    setLastResult(null);
    setConsecutiveLosses(0);
  };

  const isFailed = balance < 500; // Account review logic
  const isPassed = flips >= 50 && balance > 1000;

  return (
    <div className="space-y-8 p-8 bg-slate-50 border border-[var(--ln-border)] rounded-[2.5rem] shadow-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tighter">Probability Learning</h3>
          <p className="text-xs text-slate-400 font-extrabold uppercase tracking-widest">55% Win Rate Edge | 50 Flip Challenge</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-extrabold text-slate-400 uppercase">Current Balance</p>
          <p className={`text-2xl font-extrabold ${balance >= 1000 ? 'text-[var(--ln-teal-600)]' : 'text-fail-red'}`}>
            ${balance.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl text-center space-y-1 shadow-sm">
           <p className="text-[9px] font-extrabold text-slate-400 uppercase">Flips</p>
           <p className="text-lg font-extrabold text-[var(--ln-navy-900)]">{flips} / 50</p>
        </div>
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl text-center space-y-1 shadow-sm">
           <p className="text-[9px] font-extrabold text-slate-400 uppercase">Loss Streak</p>
           <p className="text-lg font-extrabold text-fail-red">{consecutiveLosses}</p>
        </div>
        <div className="p-4 bg-white border border-[var(--ln-border)] rounded-2xl text-center space-y-1 shadow-sm">
           <p className="text-[9px] font-extrabold text-slate-400 uppercase">Risk Amount</p>
           <input 
              type="number" 
              value={betSize} 
              onChange={(e) => setBetSize(Number(e.target.value))}
              className="w-16 bg-transparent text-lg font-extrabold text-[var(--ln-teal-600)] text-center outline-none"
           />
        </div>
      </div>

      <div className="relative aspect-video bg-white border border-[var(--ln-border)] rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
         <AnimatePresence mode="wait">
            {isFlipping ? (
              <motion.div 
                key="flipping"
                animate={{ rotateY: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="text-[var(--ln-teal-500)]"
              >
                <Coins size={80} />
              </motion.div>
            ) : lastResult !== null ? (
              <motion.div 
                key="result"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4"
              >
                {lastResult ? (
                  <>
                    <TrendingUp size={80} className="text-[var(--ln-teal-500)]" />
                    <span className="text-sm font-extrabold text-[var(--ln-teal-600)] uppercase tracking-widest">+${betSize} PROFIT</span>
                  </>
                ) : (
                  <>
                    <TrendingDown size={80} className="text-fail-red" />
                    <span className="text-sm font-extrabold text-fail-red uppercase tracking-widest">-${betSize} LOSS</span>
                  </>
                )}
              </motion.div>
            ) : (
              <div className="text-slate-200 flex flex-col items-center gap-4">
                 <Coins size={80} />
                 <span className="text-[10px] font-extrabold uppercase tracking-widest">Awaiting Start</span>
              </div>
            )}
         </AnimatePresence>
         
         {/* History dots */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {history.map((win, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${win ? 'bg-[var(--ln-teal-500)]' : 'bg-fail-red/30'}`} />
            ))}
         </div>
      </div>

      <div className="space-y-4">
         {isFailed ? (
           <div className="p-4 bg-fail-red/[0.03] border border-fail-red/20 rounded-2xl flex items-center gap-3 text-fail-red">
              <AlertTriangle size={18} />
              <p className="text-xs font-extrabold uppercase">Balance Depleted. Risk Management Review Required.</p>
              <button onClick={reset} className="ml-auto text-[10px] font-extrabold underline uppercase">Restart Practice</button>
           </div>
         ) : isPassed ? (
           <div className="p-4 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 rounded-2xl flex items-center gap-3 text-[var(--ln-teal-600)]">
              <CheckCircle2 size={18} />
              <p className="text-xs font-extrabold uppercase">Probability Understanding Confirmed. Edge maintained over 50 iterations.</p>
           </div>
         ) : (
           <AcademyButton 
              size="lg" 
              glow 
              className="w-full h-16 rounded-2xl" 
              onClick={flip}
              disabled={isFlipping || flips >= 50}
           >
              {flips >= 50 ? "PRACTICE COMPLETE" : `START FLIP #${flips + 1}`}
           </AcademyButton>
         )}
      </div>
    </div>
  );
}
