import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { TrustBreakerSection } from "@/components/marketing/trust-breaker-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { PlatformPreviewSection } from "@/components/marketing/platform-preview-section";
import { LevelsOverviewSection } from "@/components/marketing/levels-overview-section";
import { MarketTracksSection } from "@/components/marketing/market-tracks-section";
import { CertificationPreviewSection } from "@/components/marketing/certification-preview-section";
import { FreeTrialSection } from "@/components/marketing/free-trial-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { SpotThePatternGame } from "@/components/marketing/spot-the-pattern-game";
import { TradingReadinessQuiz } from "@/components/marketing/trading-readiness-quiz";
import { StrategyWalkthroughSection } from "@/components/marketing/strategy-walkthrough-section";
import { CertificationCalculator } from "@/components/marketing/certification-calculator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-[var(--color-brand-500)]/30 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. Trust Breaker — Normal Courses vs FGC */}
      <TrustBreakerSection />

      {/* 4. Spot the Pattern — Interactive Engagement */}
      <SpotThePatternGame />

      {/* 5. Strategy Walkthrough — Educational Proof */}
      <StrategyWalkthroughSection />

      {/* 6. Certification Calculator — Goal Transparency */}
      <CertificationCalculator />

      {/* 7. Trading Readiness Assessment — Personal Hook */}
      <TradingReadinessQuiz />

      {/* 8. How the System Works — The Roadmap */}
      <HowItWorksSection />

      {/* 10. Platform Preview — The Experience */}
      <PlatformPreviewSection />

      {/* 11. 10-Level Curriculum Overview */}
      <LevelsOverviewSection />

      {/* 12. Market Track Selector */}
      <MarketTracksSection />

      {/* 13. Certification Preview */}
      <CertificationPreviewSection />

      {/* 14. Free Trial CTA */}
      <FreeTrialSection />

      {/* 15. Testimonials */}
      <TestimonialsSection />

      {/* 16. Final CTA */}
      <CTABanner
        headline="You've seen the system. Now see if you can trade."
        subheadline="Start with Level 0 for free. No credit card. No commitment. Just real trading education."
        primaryLabel="Start Free Trial"
        primaryHref="/free-trial"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />

      <Footer />
    </div>
  );
}
