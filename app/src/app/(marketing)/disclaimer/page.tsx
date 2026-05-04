import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)] overflow-x-hidden">
      <Navbar />
      <article className="pt-40 pb-20 px-6 lg:px-8 max-w-3xl mx-auto prose prose-slate prose-sm prose-headings:tracking-tight prose-headings:font-bold prose-headings:text-[var(--ln-navy-900)] prose-p:text-[var(--ln-text-secondary)] prose-p:leading-relaxed prose-li:text-[var(--ln-text-secondary)] prose-strong:text-[var(--ln-navy-900)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ln-teal-500)] !mb-2">Legal</p>
        <h1 className="!text-4xl !mb-4 !text-[var(--ln-navy-900)]">Financial Disclaimer</h1>
        <p className="!text-xs !text-[var(--ln-text-muted)]">Last updated: April 2026</p>

        <div className="!p-6 !bg-rose-50 !border !border-rose-200 !rounded-2xl !not-prose !mb-8">
          <p className="text-sm text-rose-600 font-bold mb-3">⚠ IMPORTANT NOTICE</p>
          <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed font-medium">
            Lurnava Academy is an <strong className="text-[var(--ln-navy-900)]">educational platform only</strong>.
            Nothing on this platform constitutes financial advice, investment advice, trading advice, or any
            other form of professional financial guidance.
          </p>
        </div>

        <h2>What We Are</h2>
        <p>Lurnava Academy is a market education company. We provide:</p>
        <ul>
          <li>Structured educational content about financial markets and chart reading.</li>
          <li>Visual lessons and guided practice for building market awareness.</li>
          <li>Knowledge tests to validate understanding of concepts.</li>
          <li>Analytics tools for self-assessment and improvement.</li>
        </ul>

        <h2>What We Are NOT</h2>
        <ul>
          <li><strong>Not a broker or dealer.</strong> We do not execute trades on real markets.</li>
          <li><strong>Not a financial advisor.</strong> We do not provide personalized investment advice.</li>
          <li><strong>Not a prop trading firm.</strong> We do not manage real capital or offer funded accounts.</li>
          <li><strong>Not an investment company.</strong> We do not pool or invest funds.</li>
          <li><strong>Not a signal service.</strong> Our curriculum teaches methodology, not trade recommendations.</li>
        </ul>

        <h2>Practice Environment Disclaimer</h2>
        <p>Any practice activities on our platform use <strong>virtual scenarios only</strong>. No real money is at risk at any time. Practice results:</p>
        <ul>
          <li>Do NOT represent real trading results.</li>
          <li>Do NOT guarantee future performance in real markets.</li>
          <li>Are designed for educational assessment purposes only.</li>
          <li>May differ significantly from real market conditions.</li>
        </ul>

        <h2>Trading Risk Warning</h2>
        <p><strong>Trading financial instruments involves substantial risk of financial loss.</strong></p>
        <ul>
          <li>Forex, cryptocurrency, and gold markets are highly volatile.</li>
          <li>You can lose more than your initial investment, especially when using leverage.</li>
          <li>Past performance — in practice or in real markets — does not guarantee future results.</li>
          <li>Only trade with capital you can afford to lose.</li>
        </ul>

        <h2>Professional Advice</h2>
        <p><strong>Before trading with real capital, consult a licensed financial professional.</strong> Our educational content is designed to build skill and knowledge, but the decision to trade real money should be made with professional guidance appropriate to your individual financial situation, risk tolerance, and investment objectives.</p>

        <h2>Limitation of Liability</h2>
        <p>Lurnava Academy, its officers, directors, employees, and affiliates shall not be held liable for any financial losses incurred as a result of applying strategies, techniques, or knowledge gained through the platform in real-market trading.</p>

        <h2>Contact</h2>
        <p>For questions about this disclaimer, contact us at legal@lurnava.com.</p>
      </article>
      <Footer />
    </div>
  );
}
