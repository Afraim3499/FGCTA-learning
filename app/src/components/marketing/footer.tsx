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
    <footer className="border-t border-white/5 bg-[var(--ln-navy-950)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/brand/lurnava/lurnava-icon.png" alt="Lurnava Icon" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-sm leading-none text-white">
                  Lurnava
                </span>
                <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] leading-none mt-0.5">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-[240px]">
              Lurnava is a visual-first market education platform that helps beginners learn chart reading, risk discipline, and structured decision-making without hype.
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
            © {new Date().getFullYear()} Lurnava Academy. All rights reserved.
          </p>
          <p className="text-[9px] text-[var(--color-text-muted)]/60 uppercase tracking-widest text-right">
            Educational content only. No financial advice, signals, or profit guarantees. Trading involves risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
