import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />
      <article className="pt-40 pb-20 px-6 lg:px-8 max-w-3xl mx-auto prose prose-invert prose-sm prose-headings:tracking-tight prose-headings:font-bold prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-li:text-[var(--color-text-secondary)] prose-strong:text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] !mb-2">Legal</p>
        <h1 className="!text-4xl !mb-4">Privacy Policy</h1>
        <p className="!text-xs !text-[var(--color-text-muted)]">Last updated: April 2026</p>

        <h2>1. Information We Collect</h2>
        <h3>Account Information</h3>
        <p>When you register, we collect your name, email address, and chosen market track. We do not collect financial information directly — payment processing is handled by our third-party payment provider.</p>
        <h3>Platform Activity Data</h3>
        <p>We collect data about your learning progress, trading simulation activity, test results, certification scores, XP, badges, and performance metrics. This data is essential to the functioning of the platform.</p>
        <h3>Technical Data</h3>
        <p>We collect standard technical data including IP address, browser type, device information, and usage analytics to improve platform performance and security.</p>

        <h2>2. How We Use Your Data</h2>
        <ul>
          <li><strong>Platform Operation:</strong> To deliver course content, track progress, operate the trading simulation, calculate certification scores, and maintain leaderboards.</li>
          <li><strong>Certificate Verification:</strong> To enable public verification of certificates via unique IDs. Only certification level, market track, score, and issue date are publicly visible.</li>
          <li><strong>Analytics:</strong> To understand platform usage patterns and improve the learning experience.</li>
          <li><strong>Communication:</strong> To send account-related notifications, progress updates, and (with consent) marketing communications.</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell your personal data. We share data only with:</p>
        <ul>
          <li><strong>Payment Processors:</strong> To process transactions securely.</li>
          <li><strong>Analytics Services:</strong> Anonymized usage data for platform improvement.</li>
          <li><strong>Email Services:</strong> To deliver transactional and marketing emails.</li>
          <li><strong>Certificate Verification:</strong> Limited certification data is publicly verifiable by design.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement industry-standard security measures including encryption in transit (TLS), secure authentication, and access controls. Trading simulation data is stored separately from personal information.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data and request a copy.</li>
          <li>Correct inaccurate information.</li>
          <li>Request deletion of your account and associated data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Export your trading history and performance data.</li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>We retain your data for as long as your account is active. Upon account deletion, personal data is removed within 30 days. Certification records are retained permanently for verification purposes (with your consent at certification time).</p>

        <h2>7. Cookies</h2>
        <p>We use essential cookies for authentication and session management. We use analytics cookies (with consent) to understand platform usage. You can manage cookie preferences through your browser settings.</p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>The Service is not directed at individuals under 18. We do not knowingly collect data from minors.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Changes will be communicated via the platform or email.</p>

        <h2>10. Contact</h2>
        <p>For privacy-related inquiries, contact us at privacy@fgcacademy.com.</p>
      </article>
      <Footer />
    </div>
  );
}
