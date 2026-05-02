"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, Search, User, Settings, LogOut, ChevronDown, Menu, LayoutDashboard, BookOpen, Target, BarChart } from "lucide-react";
import { useUser } from "@/components/user-provider";
import { signOut } from "@/lib/auth-actions";
import Link from "next/link";

export function Topbar() {
  const user = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitial = user?.name?.[0] || user?.email?.[0] || "U";
  const progress = user?.progress;

  return (
    <header className="h-20 border-b border-[var(--ln-border)] bg-white/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
      <div className="flex items-center gap-4 md:gap-8">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative" ref={mobileMenuRef}>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-500 hover:text-[var(--ln-navy-900)] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute left-0 mt-4 w-64 bg-white border border-[var(--ln-border)] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200 z-50">
              <nav className="flex flex-col py-2">
                <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]">
                  <LayoutDashboard className="w-5 h-5 text-slate-400" /> Dashboard
                </Link>
                <Link href="/course" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]">
                  <BookOpen className="w-5 h-5 text-slate-400" /> Academy
                </Link>
                <Link href="/trading" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]">
                  <Target className="w-5 h-5 text-slate-400" /> Practice Environment
                </Link>
                <Link href="/lab" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]">
                  <BarChart className="w-5 h-5 text-slate-400" /> Progress
                </Link>
              </nav>
            </div>
          )}
        </div>

        <div className="hidden md:block relative group">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[var(--ln-teal-500)] transition-colors" />
          <input 
            type="text" 
            placeholder="Search learning materials..." 
            className="pl-12 pr-4 py-2.5 bg-[var(--ln-surface-soft)] border border-[var(--ln-border)] rounded-2xl text-sm text-[var(--ln-navy-900)] focus:outline-none focus:ring-1 focus:ring-[var(--ln-teal-500)]/50 w-72 transition-all placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`relative p-3 rounded-2xl border transition-all ${isNotificationsOpen ? 'bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-500)]' : 'bg-white border-[var(--ln-border)] text-slate-400 hover:text-[var(--ln-navy-900)] hover:border-slate-300 shadow-sm'}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-[var(--ln-teal-500)] rounded-full border-2 border-white" />
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-4 w-80 bg-white border border-[var(--ln-border)] rounded-3xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-5 border-b border-[var(--ln-border)] flex justify-between items-center bg-[var(--ln-surface-soft)]">
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Notifications</h3>
                <span className="text-[9px] font-bold text-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)] px-2 py-0.5 rounded">2 NEW</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                <div className="p-4 border-b border-[var(--ln-border)] hover:bg-[var(--ln-surface-soft)] transition-colors cursor-pointer space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--ln-navy-900)]">Module Unlocked</span>
                    <span className="text-[10px] text-slate-500">2m ago</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">Level 2 assessment criteria have been added to your path.</p>
                </div>
                <div className="p-4 hover:bg-[var(--ln-surface-soft)] transition-colors cursor-pointer space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--ln-navy-900)]">Learning Bonus</span>
                    <span className="text-[10px] text-slate-500">1h ago</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">You earned +500 XP for maintaining your learning streak.</p>
                </div>
              </div>
              <button className="w-full p-4 text-[10px] font-bold text-[var(--ln-teal-500)] uppercase tracking-widest hover:bg-[var(--ln-surface-soft)] transition-colors border-t border-[var(--ln-border)]">
                View All Notifications
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center gap-3 p-1.5 pr-4 rounded-2xl border transition-all shadow-sm ${isProfileOpen ? 'bg-[var(--ln-surface-soft)] border-slate-300' : 'bg-white border-[var(--ln-border)] hover:border-slate-300'}`}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--ln-teal-500)] to-[var(--ln-teal-400)] flex items-center justify-center text-xs font-extrabold text-white shadow-md">
              {userInitial.toUpperCase()}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-[var(--ln-navy-900)] tracking-tight leading-none truncate max-w-[100px]">
                {user?.name || user?.email?.split('@')[0]}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[10px] font-bold text-slate-500">Student</p>
                <div className="px-1.5 py-0.5 rounded border border-[var(--ln-teal-500)]/30 bg-[var(--ln-teal-soft)] text-[8px] font-bold text-[var(--ln-teal-500)] uppercase">
                  Level {progress?.currentLevel || 0}
                </div>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-64 bg-white border border-[var(--ln-border)] rounded-3xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-5 bg-[var(--ln-surface-soft)] border-b border-[var(--ln-border)]">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Authenticated as</p>
                <p className="text-sm font-bold text-[var(--ln-navy-900)] truncate">{user?.email}</p>
              </div>
              <div className="p-2">
                <Link 
                  href="/dashboard"
                  className="flex items-center gap-3 p-3 text-sm font-bold text-slate-600 hover:text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)] rounded-2xl transition-all"
                >
                  <User size={18} className="text-slate-400" /> My Profile
                </Link>
                <Link 
                  href="/dashboard/records"
                  className="flex items-center gap-3 p-3 text-sm font-bold text-slate-600 hover:text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)] rounded-2xl transition-all"
                >
                  <Settings size={18} className="text-slate-400" /> Settings
                </Link>
                <div className="h-px bg-[var(--ln-border)] my-2 mx-2" />
                <button 
                  onClick={() => signOut()}
                  className="w-full flex items-center gap-3 p-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
