"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, TrendingUp, TrendingDown, RefreshCcw, AlertTriangle, CheckCircle2 } from "lucide-react";
import { InstitutionalButton } from "@/components/ui/institutional-button";

export function CoinFlipSimulator() {
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

  const isFailed = balance < 500; // Account blown logic
  const isPassed = flips >= 50 && balance > 1000;

  return (
    <div className="space-y-8 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-black text-white uppercase tracking-tighter">The Probability Matrix</h3>
          <p className="text-xs text-text-muted uppercase tracking-widest">55% Win Rate Edge | 50 Flip Challenge</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-500 uppercase">Current Equity</p>
          <p className={`text-2xl font-black ${balance >= 1000 ? 'text-pass-green' : 'text-fail-red'}`}>
            ${balance.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center space-y-1">
           <p className="text-[9px] font-bold text-slate-500 uppercase">Flips</p>
           <p className="text-lg font-black text-white">{flips} / 50</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center space-y-1">
           <p className="text-[9px] font-bold text-slate-500 uppercase">Max Loss Streak</p>
           <p className="text-lg font-black text-fail-red">{consecutiveLosses}</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center space-y-1">
           <p className="text-[9px] font-bold text-slate-500 uppercase">Risk Per Flip</p>
           <input 
              type="number" 
              value={betSize} 
              onChange={(e) => setBetSize(Number(e.target.value))}
              className="w-16 bg-transparent text-lg font-black text-accent-blue text-center outline-none"
           />
        </div>
      </div>

      <div className="relative aspect-video bg-black/40 border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden">
         <AnimatePresence mode="wait">
            {isFlipping ? (
              <motion.div 
                key="flipping"
                animate={{ rotateY: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="text-accent-blue"
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
                    <TrendingUp size={80} className="text-pass-green" />
                    <span className="text-sm font-bold text-pass-green uppercase tracking-widest">+${betSize} WIN</span>
                  </>
                ) : (
                  <>
                    <TrendingDown size={80} className="text-fail-red" />
                    <span className="text-sm font-bold text-fail-red uppercase tracking-widest">-${betSize} LOSS</span>
                  </>
                )}
              </motion.div>
            ) : (
              <div className="text-slate-700 flex flex-col items-center gap-4">
                 <Coins size={80} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Awaiting Execution</span>
              </div>
            )}
         </AnimatePresence>
         
         {/* History dots */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {history.map((win, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${win ? 'bg-pass-green' : 'bg-fail-red'}`} />
            ))}
         </div>
      </div>

      <div className="space-y-4">
         {isFailed ? (
           <div className="p-4 bg-fail-red/10 border border-fail-red/20 rounded-2xl flex items-center gap-3 text-fail-red">
              <AlertTriangle size={18} />
              <p className="text-xs font-bold uppercase">Account Liquidated. Risk Management Protocol Violated.</p>
              <button onClick={reset} className="ml-auto text-[10px] underline">RETRY MISSION</button>
           </div>
         ) : isPassed ? (
           <div className="p-4 bg-pass-green/10 border border-pass-green/20 rounded-2xl flex items-center gap-3 text-pass-green">
              <CheckCircle2 size={18} />
              <p className="text-xs font-bold uppercase">Probability Mastery Verified. Edge maintained over 50 iterations.</p>
           </div>
         ) : (
           <InstitutionalButton 
              size="lg" 
              glow 
              className="w-full" 
              onClick={flip}
              disabled={isFlipping || flips >= 50}
           >
              {flips >= 50 ? "MISSION COMPLETE" : `EXECUTE FLIP #${flips + 1}`}
           </InstitutionalButton>
         )}
      </div>
    </div>
  );
}
