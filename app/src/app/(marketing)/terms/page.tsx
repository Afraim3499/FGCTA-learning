import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />
      <article className="pt-40 pb-20 px-6 lg:px-8 max-w-3xl mx-auto prose prose-slate prose-sm prose-headings:tracking-tight prose-headings:font-bold prose-headings:text-[var(--ln-navy-900)] prose-p:text-[var(--ln-text-secondary)] prose-p:leading-relaxed prose-li:text-[var(--ln-text-secondary)] prose-strong:text-[var(--ln-navy-900)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ln-teal-500)] !mb-2">Legal</p>
        <h1 className="!text-4xl !mb-4 !text-[var(--ln-navy-900)]">Terms of Service</h1>
        <p className="!text-xs !text-[var(--ln-text-muted)]">Last updated: April 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Lurnava Academy platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>

        <h2>2. Description of Service</h2>
        <p>Lurnava Academy provides online market education, structured learning paths, practice exercises, and progress tracking. The Service is educational in nature and does not constitute financial advice, brokerage, or investment management.</p>

        <h2>3. Account Registration</h2>
        <p>You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the confidentiality of your account records and for all activities that occur under your account. You must be at least 18 years old to use the Service.</p>

        <h2>4. Payment Terms</h2>
        <ul>
          <li>Market track access is available as a one-time payment. Pricing is displayed on the pricing page.</li>
          <li>Referral discount codes may be applied at checkout. Codes are subject to availability and expiration.</li>
          <li>All payments are processed securely through our payment provider.</li>
          <li>Prices are subject to change. Any price change will not affect existing paid accounts.</li>
        </ul>

        <h2>5. Free Trial</h2>
        <p>The free trial provides access to Level 0 content. No credit card is required. Free trial progress carries over to paid access. Lurnava reserves the right to modify or discontinue the free trial at any time.</p>

        <h2>6. Intellectual Property</h2>
        <p>All course content, curriculum design, platform software, and educational methodology are the exclusive intellectual property of Lurnava Academy. You may not reproduce, distribute, modify, or create derivative works from any content without express written permission.</p>

        <h2>7. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Share, resell, or redistribute course content or account access.</li>
          <li>Attempt to reverse-engineer, exploit, or circumvent platform systems.</li>
          <li>Use automated tools, bots, or scripts to interact with the platform.</li>
          <li>Use the Service for any illegal purpose.</li>
        </ul>

        <h2>8. Educational Disclaimer</h2>
        <p>All content on the platform is for educational purposes only. Practice exercises use virtual scenarios. No real money is at risk. The Service does not provide financial advice, trading signals, or investment recommendations.</p>

        <h2>9. Limitation of Liability</h2>
        <p>Lurnava Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid for the Service.</p>

        <h2>10. Termination</h2>
        <p>Lurnava reserves the right to suspend or terminate your account at any time for violation of these terms. Upon termination, your access to course content will be revoked.</p>

        <h2>11. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration.</p>

        <h2>12. Changes to Terms</h2>
        <p>Lurnava may update these Terms at any time. Continued use of the Service after changes constitutes acceptance. Material changes will be communicated via email or platform notification.</p>

        <h2>13. Contact</h2>
        <p>For questions about these Terms, contact us at legal@lurnava.com.</p>
      </article>
      <Footer />
    </div>
  );
}
