"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, Search, Zap, User, Settings, LogOut, ChevronDown, Shield, Trophy } from "lucide-react";
import { useProgressStore } from "@/lib/stores";
import { formatXP, getXPRank } from "@/lib/utils";
import { useUser } from "@/components/user-provider";
import { signOut } from "@/lib/auth-actions";
import Link from "next/link";

export function Topbar() {
  const { progress } = useProgressStore();
  const user = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitial = user?.name?.[0] || user?.email?.[0] || "U";

  return (
    <header className="h-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="relative group">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-accent-blue transition-colors" />
          <input 
            type="text" 
            placeholder="Search terminal..." 
            className="pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[11px] text-white focus:outline-none focus:ring-1 focus:ring-accent-blue/50 w-72 transition-all placeholder:text-slate-600 font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* XP Status Badge */}
        <div className="hidden md:flex items-center gap-4 px-5 py-2 bg-white/5 border border-white/10 rounded-2xl group hover:border-accent-blue/30 transition-all cursor-default">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-accent-blue fill-accent-blue" />
            </div>
            <span className="text-xs font-black text-white tracking-tight">{formatXP(progress?.xpTotal || 0)}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2">
             <Shield className="w-3 h-3 text-slate-500" />
             <span className="text-[10px] uppercase tracking-[0.1em] font-black text-slate-400">
               {progress?.xpRank || getXPRank(0)}
             </span>
          </div>
        </div>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`relative p-3 rounded-2xl border transition-all ${isNotificationsOpen ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue' : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10'}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-accent-blue rounded-full border-2 border-[#050505]" />
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-4 w-80 bg-[#0D1117] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Alerts</h3>
                <span className="text-[9px] font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">2 NEW</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                <div className="p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white uppercase">Crucible Unlocked</span>
                    <span className="text-[9px] text-slate-600">2m ago</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Level 10 assessment criteria have been synchronized to your profile.</p>
                </div>
                <div className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white uppercase">Performance Bonus</span>
                    <span className="text-[9px] text-slate-600">1h ago</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">You earned +500 XP for maintaining a 94% precision streak.</p>
                </div>
              </div>
              <button className="w-full p-4 text-[10px] font-bold text-accent-blue uppercase tracking-widest hover:bg-white/5 transition-colors">
                View All Intelligence
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center gap-3 p-1.5 pr-4 rounded-2xl border transition-all ${isProfileOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-blue to-blue-400 flex items-center justify-center text-xs font-black text-white shadow-lg shadow-accent-blue/20">
              {userInitial.toUpperCase()}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[11px] font-black text-white tracking-tight uppercase leading-none truncate max-w-[100px]">
                {user?.name || user?.email?.split('@')[0]}
              </p>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter mt-1">Operator</p>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-64 bg-[#0D1117] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-5 bg-white/[0.02] border-b border-white/5">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Authenticated as</p>
                <p className="text-xs font-bold text-white truncate">{user?.email}</p>
              </div>
              <div className="p-2">
                <Link 
                  href="/dashboard/profile"
                  className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  <User size={16} className="text-slate-600" /> Tactical Profile
                </Link>
                <Link 
                  href="/dashboard/settings"
                  className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  <Settings size={16} className="text-slate-600" /> Command Settings
                </Link>
                <div className="h-px bg-white/5 my-2 mx-2" />
                <button 
                  onClick={() => signOut()}
                  className="w-full flex items-center gap-3 p-3 text-xs font-bold text-rose-400 hover:bg-rose-500/10 rounded-2xl transition-all"
                >
                  <LogOut size={16} /> Terminate Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
