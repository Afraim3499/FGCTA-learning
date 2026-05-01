import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { TrustBreakerSection } from "@/components/marketing/trust-breaker-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { SpotThePatternGame } from "@/components/marketing/spot-the-pattern-game";
import { FreeTrialSection } from "@/components/marketing/free-trial-section";
import { CTABanner } from "@/components/marketing/cta-banner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] selection:bg-[var(--ln-teal-500)]/30 selection:text-[var(--ln-navy-900)] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats Bar — safe proof points */}
      <StatsBar />

      {/* 3. Trust Breaker — Normal Courses vs Lurnava */}
      <TrustBreakerSection />

      {/* 4. How Lurnava Works — Learn → Practice → Prove → Progress */}
      <HowItWorksSection />

      {/* 5. Spot the Pattern — Interactive Preview */}
      <SpotThePatternGame />

      {/* 6. Free Trial CTA */}
      <FreeTrialSection />

      {/* 7. No-Hype Promise CTA */}
      <CTABanner
        headline="No signals. No hype. Just structured learning."
        subheadline="Start with Level 0 for free. Visual lessons, guided practice, and your first chart mission. No credit card. No commitment."
        primaryLabel="Start Free"
        primaryHref="/free-trial"
        secondaryLabel="View Curriculum"
        secondaryHref="/curriculum"
      />

      <Footer />
    </div>
  );
}
