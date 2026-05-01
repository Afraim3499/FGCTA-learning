import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { 
  Zap, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TrackData {
  id: string;
  name: string;
  symbol: string;
  color: string;
  tagline: string;
  description: string;
  volatility: "High" | "Medium" | "Extreme";
  bestTime: string;
  strategies: string[];
  adaptations: string[];
  metrics: { label: string; value: string }[];
}

const TRACKS: Record<string, TrackData> = {
  forex: {
    id: "forex",
    name: "Forex Academy",
    symbol: "EUR/USD",
    color: "text-blue-400",
    tagline: "The world's deepest liquidity.",
    description: "Master the 24/5 currency markets using central bank flow analysis and liquidity conceptsing strategies.",
    volatility: "Medium",
    bestTime: "London/NY Overlap",
    strategies: ["London Session Breakouts", "Asia Range Liquidity Sweeps", "Central Bank Intervention Plays", "NFP Volatility Expansion"],
    adaptations: ["Focus on Pip-based risk management", "News event filters for high-impact releases", "Cross-pair correlation tracking"],
    metrics: [{ label: "Daily Volume", value: "$7.5 Trillion" }, { label: "Leverage Limit", value: "30:1 (Inst)" }, { label: "Spread avg", value: "0.2 pips" }],
  },
  crypto: {
    id: "crypto",
    name: "Crypto Velocity",
    symbol: "BTC/USDT",
    color: "text-amber-400",
    tagline: "Unmatched volatility expansion.",
    description: "Capture extreme trends in the 24/7 digital asset market. Focus on momentum and order book imbalance.",
    volatility: "Extreme",
    bestTime: "24/7 (Weekend spikes common)",
    strategies: ["Funding Rate Arbitrage", "Momentum Breakout Scalps", "Altcoin Cycle Rotation", "CEX/DEX Arbitrage"],
    adaptations: ["Strict 1% maximum risk due to gaps", "Focus on USDT-denominated risk", "Weekend trading filters"],
    metrics: [{ label: "Avg Volatility", value: "4.5% / Day" }, { label: "Active Pairs", value: "2000+" }, { label: "Uptime", value: "100%" }],
  },
  gold: {
    id: "gold",
    name: "Gold/Commodities",
    symbol: "XAU/USD",
    color: "text-yellow-400",
    tagline: "The safe haven battleground.",
    description: "Trade the ultimate store of value. Master the unique price action signatures of Gold and Precious Metals.",
    volatility: "High",
    bestTime: "NY Session Open",
    strategies: ["NY Gold Open Breakouts", "DXY Inverse Correlation Trades", "Safe Haven Flight Inversions", "Fed Rate Decision Plays"],
    adaptations: ["Higher spread tolerance", "Focus on $ per tick sizing", "DXY (Dollar Index) overlay required"],
    metrics: [{ label: "Avg Range", value: "$25 / Day" }, { label: "Inst. Holdings", value: "33,000 Tons" }, { label: "Correlation", value: "-0.85 w/ DXY" }],
  },
};

export function generateStaticParams() {
  return [
    { track: "forex" },
    { track: "crypto" },
    { track: "gold" },
  ];
}

export default function TrackPage({ params }: { params: { track: string } }) {
  const track = TRACKS[params.track as keyof typeof TRACKS];

  if (!track) return <div>Track not found</div>;

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[150px] opacity-10 rounded-full", track.color.replace("text-", "bg-"))} />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className={cn("px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-extrabold tracking-widest uppercase", track.color)}>
                Track: {track.id}
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-muted)]">{track.symbol}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none">
              {track.name.split(' ')[0]} <br/> 
              <span className={track.color}>{track.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {track.description}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/register" className="px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm">
                Enroll in {track.id} track
              </Link>
            </div>
          </div>

          {/* Academy Stats Card */}
          <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] space-y-10">
            <div className="grid grid-cols-2 gap-8">
              {track.metrics.map(m => (
                <div key={m.label} className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{m.label}</p>
                  <p className="text-2xl font-extrabold tracking-tighter text-white">{m.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8 border-t border-white/5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-text-secondary)]">Volatility Profile</span>
                <span className={cn("font-bold px-3 py-1 rounded-lg bg-white/5", 
                  track.volatility === "Extreme" ? "text-rose-400" : track.volatility === "High" ? "text-amber-400" : "text-blue-400"
                )}>{track.volatility}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-text-secondary)]">Academy Edge</span>
                <span className="text-white font-bold">L1 - L9 Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Taxonomy */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase">Strategy Taxonomy</h2>
            <p className="text-[var(--color-text-secondary)]">Real strategies you will master in this specific track.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {track.strategies.map((s, i) => (
              <div key={s} className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">0{i+1}</span>
                  <p className="text-lg font-bold text-white tracking-tight">{s}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)]">
                  <Zap size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptation Framework */}
      <section className="py-32 px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase">Market Adaptations</h2>
            <p className="text-[var(--color-text-secondary)]">The core Lurnava system is universal. Here is how we adapt it for {track.name}.</p>
          </div>

          <div className="space-y-6">
            {track.adaptations.map((a, i) => (
              <div key={i} className="flex items-start gap-6 p-6 bg-[#05070A] border border-white/5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-500)]/5 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-[var(--color-brand-400)]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white mb-2">Requirement {i+1}</p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion */}
      <section className="py-32 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl font-extrabold tracking-tighter uppercase">Ready to dominate {track.symbol}?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="px-12 py-6 bg-white text-black font-extrabold rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm">
              Start Free Trial
            </Link>
            <Link href="/pricing" className="px-12 py-6 border border-white/10 text-white font-extrabold rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
              View Enrollment Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
