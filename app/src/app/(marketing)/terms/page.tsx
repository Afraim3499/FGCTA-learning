import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />
      <article className="pt-40 pb-20 px-6 lg:px-8 max-w-3xl mx-auto prose prose-invert prose-sm prose-headings:tracking-tight prose-headings:font-bold prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-li:text-[var(--color-text-secondary)] prose-strong:text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] !mb-2">Legal</p>
        <h1 className="!text-4xl !mb-4">Terms of Service</h1>
        <p className="!text-xs !text-[var(--color-text-muted)]">Last updated: April 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the FGC Training and Learning Academy platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>

        <h2>2. Description of Service</h2>
        <p>FGC Training and Learning Academy provides online trading education, simulated trading environments, performance analytics, and certification services. The Service is educational in nature and does not constitute financial advice, brokerage, or investment management.</p>

        <h2>3. Account Registration</h2>
        <p>You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use the Service.</p>

        <h2>4. Payment Terms</h2>
        <ul>
          <li>Market track access is available as a one-time payment: Forex ($220), Crypto ($245), Gold ($205).</li>
          <li>Referral discount codes may be applied at checkout. Codes are subject to availability and expiration.</li>
          <li>All payments are processed securely through our payment provider.</li>
          <li>Prices are subject to change. Any price change will not affect existing paid accounts.</li>
        </ul>

        <h2>5. Free Trial</h2>
        <p>The free trial provides access to Level 0 content. No credit card is required. Free trial progress carries over to paid access. FGC reserves the right to modify or discontinue the free trial at any time.</p>

        <h2>6. Intellectual Property</h2>
        <p>All course content, curriculum design, strategy taxonomies, simulation engines, certification methodology, and platform software are the exclusive intellectual property of FGC Training and Learning Academy. You may not reproduce, distribute, modify, or create derivative works from any content without express written permission.</p>

        <h2>7. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Share, resell, or redistribute course content or account access.</li>
          <li>Attempt to reverse-engineer, exploit, or circumvent the simulation engine, anti-memorization systems, or certification scoring.</li>
          <li>Use automated tools, bots, or scripts to interact with the platform.</li>
          <li>Misrepresent your certification status or alter certificate information.</li>
          <li>Use the Service for any illegal purpose.</li>
        </ul>

        <h2>8. Certification</h2>
        <p>Certifications are awarded based on demonstrated performance in the trading simulation. Certificate IDs are verifiable through our public verification system. FGC reserves the right to revoke certifications obtained through fraud, exploitation, or violation of these terms.</p>

        <h2>9. Simulation Disclaimer</h2>
        <p>The trading simulation uses virtual capital only. No real money is at risk. Simulated performance does not guarantee future results in real markets. The simulation is designed for educational purposes and skill assessment.</p>

        <h2>10. Limitation of Liability</h2>
        <p>FGC Training and Learning Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid for the Service.</p>

        <h2>11. Termination</h2>
        <p>FGC reserves the right to suspend or terminate your account at any time for violation of these terms. Upon termination, your access to course content and simulation will be revoked. Certification records remain in our system for verification purposes.</p>

        <h2>12. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration.</p>

        <h2>13. Changes to Terms</h2>
        <p>FGC may update these Terms at any time. Continued use of the Service after changes constitutes acceptance. Material changes will be communicated via email or platform notification.</p>

        <h2>14. Contact</h2>
        <p>For questions about these Terms, contact us at legal@fgcacademy.com.</p>
      </article>
      <Footer />
    </div>
  );
}
