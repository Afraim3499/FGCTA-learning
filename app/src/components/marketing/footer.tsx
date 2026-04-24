import Link from "next/link";
import { GraduationCap } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Simulation", href: "/simulation" },
    { label: "Certification", href: "/certification" },
    { label: "Methodology", href: "/methodology" },
    { label: "Free Trial", href: "/free-trial" },
  ],
  Markets: [
    { label: "Forex Trading", href: "/curriculum/forex" },
    { label: "Crypto Trading", href: "/curriculum/crypto" },
    { label: "Gold Trading", href: "/curriculum/gold" },
  ],
  Company: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Outcomes", href: "/outcomes" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Financial Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#090C11]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-600)] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-sm leading-none text-white">
                  FGC
                </span>
                <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] leading-none mt-0.5">
                  Training & Learning Academy
                </span>
              </div>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-[240px]">
              Learn to trade. Prove you can. Get certified. The
              performance-based trading academy for Forex, Crypto, and Gold.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} FGC Training and Learning Academy. All
            rights reserved.
          </p>
          <p className="text-[9px] text-[var(--color-text-muted)]/60 uppercase tracking-widest">
            Not financial advice · Educational platform only
          </p>
        </div>
      </div>
    </footer>
  );
}
