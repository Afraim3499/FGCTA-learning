import { getAllUsers } from "@/lib/admin-actions";
import { ShieldCheck, Search, Filter } from "lucide-react";
import { AdminActionButtons } from "@/components/admin/admin-action-buttons";

export default async function AdminPage() {
  const users = await getAllUsers();

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight uppercase">
            Operations Command
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-400/5 px-2 py-0.5 rounded-md border border-amber-400/10">
              <ShieldCheck size={12} /> Admin Access Verified
            </span>
            <p className="text-slate-500 italic text-sm">
              Global User Management & Entitlement Control.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Candidates", value: users.length },
          { label: "Forex Track", value: users.filter(u => u.marketTrack === "forex").length },
          { label: "Crypto Track", value: users.filter(u => u.marketTrack === "crypto").length },
          { label: "Gold Track", value: users.filter(u => u.marketTrack === "gold").length },
        ].map((stat) => (
          <div key={stat.label} className="p-6 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-2xl space-y-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-mono font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* User Management Table */}
      <div className="bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search by email or name..." 
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[var(--color-brand-500)]/50"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Candidate Information</th>
                <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Market Protocol</th>
                <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Academy Baseline</th>
                <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                <th className="p-5 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-500)]/10 flex items-center justify-center font-bold text-[var(--color-brand-400)]">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{user.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${
                      user.marketTrack === "forex" ? "bg-blue-500/5 border-blue-500/20 text-blue-400" :
                      user.marketTrack === "crypto" ? "bg-amber-500/5 border-amber-500/20 text-amber-400" :
                      "bg-yellow-500/5 border-yellow-500/20 text-yellow-400"
                    }`}>
                      {user.marketTrack}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-white">L{user.progress?.currentLevel} Certification</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest">{user.progress?.xpTotal} Performance XP</div>
                    </div>
                  </td>
                  <td className="p-5">
                    {user.phaseAttempts[0] ? (
                      <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Simulation Active
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Idle</span>
                    )}
                  </td>
                  <td className="p-5 text-right">
                    <AdminActionButtons 
                      userId={user.id} 
                      currentTrack={user.marketTrack} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
