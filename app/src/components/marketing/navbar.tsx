"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/simulation", label: "Simulation" },
  { href: "/certification", label: "Certification" },
  { href: "/methodology", label: "Methodology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/free-trial", label: "Free Trial" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0B0E14]/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-600)] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-shadow">
              <GraduationCap size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm leading-none text-white">
                FGC
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] leading-none mt-0.5">
                Trading Academy
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-white transition-colors rounded-xl hover:bg-white/5"
            >
              Sign In
            </Link>
            <Link
              href="/free-trial"
              className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Start Free Trial
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0B0E14]/98 backdrop-blur-2xl pt-24 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="space-y-2 mb-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-[var(--color-text-muted)] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-3 border-t border-white/5 pt-6">
              <Link
                href="/login"
                className="block w-full px-5 py-4 text-center text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/free-trial"
                className="block w-full px-5 py-4 text-center text-sm font-bold uppercase tracking-widest bg-white text-black rounded-2xl hover:bg-white/90 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
