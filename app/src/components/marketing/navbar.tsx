"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/curriculum", label: "Academy" },
  // { href: "/practice", label: "Practice" },
  // { href: "/community", label: "Community" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
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
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--ln-surface)]/90 backdrop-blur-xl border-b border-[var(--ln-border-soft)] shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/brand/lurnava/logo-lurnava-web.png" 
              alt="Lurnava Academy" 
              className="h-14 md:h-18 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-[var(--ln-teal-500)]"
                      : "text-[var(--ln-text-primary)] hover:text-[var(--ln-teal-500)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-[14px] font-medium text-[var(--ln-text-primary)] hover:text-[var(--ln-teal-500)] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="px-6 py-2.5 bg-[var(--ln-navy-900)] text-white text-[14px] font-medium rounded-xl hover:bg-[var(--ln-navy-800)] active:translate-y-px transition-all shadow-[0_10px_24px_rgba(8,26,54,0.16)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--ln-surface-soft)] text-[var(--ln-navy-900)]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-[var(--ln-surface)] pt-[104px] px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="space-y-2 mb-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-lg font-medium transition-all",
                      isActive
                        ? "text-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)]"
                        : "text-[var(--ln-navy-900)] hover:bg-[var(--ln-surface-soft)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-3 pt-6 border-t border-[var(--ln-border-soft)]">
              <Link
                href="/login"
                className="block w-full px-5 py-4 text-center text-base font-medium text-[var(--ln-navy-900)] border border-[var(--ln-border)] rounded-xl hover:bg-[var(--ln-surface-soft)] transition-all"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block w-full px-5 py-4 text-center text-base font-medium bg-[var(--ln-navy-900)] text-white rounded-xl shadow-[0_10px_24px_rgba(8,26,54,0.16)] transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
