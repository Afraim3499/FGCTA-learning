import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { 
  ArrowRight, 
  Map, 
  Target, 
  Lock, 
  RotateCcw, 
  BookOpen, 
  MicOff, 
  Compass, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Nava Guide | Lurnava",
  description: "Meet Nava, the built-in Lurnava guide that helps learners follow the course roadmap, find next steps, and review with clarity.",
  openGraph: {
    title: "Meet Nava, your Lurnava Guide",
    description: "Nava is a calm, rule-based guide built into Lurnava to help learners know what to do next.",
    images: ['/brand/nava/nava-bust.png'],
  },
};

const FEATURES = [
  {
    title: "Shows the next step",
    description: "Nava helps learners continue from the right lesson, test, mission, or lab activity.",
    icon: Map,
  },
  {
    title: "Highlights important actions",
    description: "Nava uses gentle markers and objective cues so learners know exactly where to click.",
    icon: Target,
  },
  {
    title: "Explains locked steps",
    description: "When something is not available yet, Nava explains the missing requirement clearly.",
    icon: Lock,
  },
  {
    title: "Supports review moments",
    description: "After tests or chart missions, Nava helps learners decide whether to continue, retry, or review.",
    icon: RotateCcw,
  },
  {
    title: "Builds journal habits",
    description: "Inside the Lab, Nava encourages learners to save and review practice notes.",
    icon: BookOpen,
  },
  {
    title: "Stays quiet during focus",
    description: "Nava does not interrupt active tests, chart drawing, or focused practice.",
    icon: MicOff,
  },
];

const JOURNEY_STEPS = [
  {
    title: "Dashboard",
    description: "Nava shows the current objective and next action.",
  },
  {
    title: "Course Roadmap",
    description: "Nava marks the current level and explains locked requirements.",
  },
  {
    title: "Lessons",
    description: "Nava points to practice blocks and next lesson actions.",
  },
  {
    title: "Knowledge Tests",
    description: "Nava stays hidden during questions, then helps with review or continuation.",
  },
  {
    title: "Chart Missions",
    description: "Nava guides before and after missions, never over the chart.",
  },
  {
    title: "Lab & Journal",
    description: "Nava helps learners save practice notes and build review habits.",
  },
];

const FAQS = [
  {
    question: "What is Nava?",
    answer: "Nava is the built-in Lurnava Guide that helps learners move through the course roadmap, modules, tests, missions, and Lab."
  },
  {
    question: "Is Nava an AI chatbot?",
    answer: "No. Nava is not a chatbot. Nava uses rule-based guidance connected to the learning path."
  },
  {
    question: "Does Nava give trading signals?",
    answer: "No. Nava does not provide signals, predictions, or financial advice."
  },
  {
    question: "Where does Nava appear?",
    answer: "Nava appears inside the learner app after login, including the dashboard, course roadmap, lessons, tests, chart missions, and Lab."
  },
  {
    question: "Can learners hide Nava?",
    answer: "Yes. Learners can hide tips for a while or mute Nava if they prefer a quieter experience."
  },
  {
    question: "Why did Lurnava create Nava?",
    answer: "Nava was created to reduce confusion and help learners know what to do next inside a structured course experience."
  },
];

export default function NavaPage() {
  return (
    <div className="min-h-screen bg-[var(--ln-bg)] text-[var(--ln-text-primary)]">
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-200)] text-[var(--ln-teal-600)] text-[10px] font-extrabold uppercase tracking-widest">
                  <Compass className="w-3.5 h-3.5" />
                  Meet Nava
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-[var(--ln-navy-900)] leading-tight tracking-tight">
                  Meet Nava, your <br/>
                  <span className="text-[var(--ln-teal-500)]">Lurnava Guide</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                  Nava helps learners know what to do next, where to go, and how to move through the Lurnava learning path without feeling lost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href="/register" 
                    className="bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-[var(--ln-teal-500)]/20 flex items-center justify-center gap-2"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/curriculum" 
                    className="bg-white border border-slate-200 hover:border-slate-300 text-[var(--ln-navy-900)] px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center"
                  >
                    View Curriculum
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[var(--ln-teal-500)]/5 blur-3xl rounded-full" />
                <img 
                  src="/brand/nava/nava-bust.png" 
                  alt="Nava, your Lurnava Guide" 
                  className="relative w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Decorative Spark */}
                <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce duration-[3000ms]">
                  <div className="w-6 h-6 rounded-full bg-[var(--ln-teal-400)] shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Why Nava Exists */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)]">
              Learning should not feel scattered
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-left pt-8">
              <p className="text-slate-500">
                Many learning platforms leave learners wondering what to do next, why something is locked, or whether to retry a lesson.
              </p>
              <p className="text-slate-500">
                Lurnava is built differently. Nava exists to reduce that confusion and build consistent practice habits.
              </p>
            </div>
            <div className="pt-12">
              <div className="inline-block px-8 py-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                <p className="text-xl font-bold text-[var(--ln-navy-900)]">
                  "Nava turns the learning path into a guided experience."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What Nava Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)]">
                What Nava helps with
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--ln-teal-soft)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-[var(--ln-teal-500)]" />
                  </div>
                  <h3 className="text-lg font-black text-[var(--ln-navy-900)] mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Not a Chatbot */}
        <section className="py-24 bg-[var(--ln-navy-900)] text-white rounded-[4rem] mx-4 lg:mx-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-black">
                  Guidance without noise
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Nava is not a chatbot, trading assistant, or prediction tool. Nava does not give financial advice, trading signals, or open-ended answers. Nava uses structured course progress to show relevant guidance at the right time.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "No open-ended chat",
                    "No trading signals",
                    "No market predictions",
                    "No financial advice",
                    "No interruption during tests",
                    "No obstruction during charts",
                    "Rule-based guidance",
                    "Course-aware logic"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                      <ShieldCheck className="w-5 h-5 text-[var(--ln-teal-400)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ln-teal-500)]/20 blur-3xl" />
                <p className="text-2xl font-bold leading-relaxed italic text-[var(--ln-teal-400)]">
                  "Nava is not a chatbot. Nava is a structured guide built into the learning path."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Where Nava Helps */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)]">
                Built into the learning journey
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {JOURNEY_STEPS.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--ln-teal-500)] border-4 border-white" />
                  <h3 className="text-lg font-black text-[var(--ln-navy-900)] mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Built for Focus */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img src="/brand/nava/nava-pointing.png" alt="Nava Pointing" className="w-full max-w-md mx-auto" />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)]">
                  Helpful when needed. <br/>
                  Quiet when not.
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Nava is designed to support focus, not compete with it. Learners can hide tips, mute Nava, and continue working without distraction.
                </p>
                <div className="space-y-4">
                  {[
                    "Quiet mode for minimal guidance",
                    "Full mute option available",
                    "Reduced-motion support for calm visual cues",
                    "No public-page interruption",
                    "Learner-first controls"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-bold text-[var(--ln-navy-900)]">
                      <CheckCircle2 className="w-5 h-5 text-[var(--ln-teal-500)]" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-4">
                  Nava helps learners know what to do next inside Lurnava.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Why This Matters */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)]">
              A course experience that feels guided
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Lurnava is built around structured progress. Nava supports that philosophy by helping learners understand where they are, what is next, and how to recover when a step needs review.
            </p>
          </div>
        </section>

        {/* Section 8 — FAQ */}
        <section className="py-24 bg-white" id="faq">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--ln-navy-900)] text-center mb-12">
              Questions about Nava
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-lg font-black text-[var(--ln-navy-900)] mb-3">{faq.question}</h3>
                  <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            {/* FAQ Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </section>

        {/* Section 9 — Final CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-[var(--ln-teal-500)] rounded-[3rem] p-8 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-white.svg')] opacity-10" />
            <div className="relative space-y-8">
              <h2 className="text-3xl lg:text-6xl font-black">
                Start your learning path <br/> with Nava inside Lurnava
              </h2>
              <p className="text-xl text-teal-50 max-w-2xl mx-auto font-medium">
                Create your account and move through the roadmap with clear next steps, calm guidance, and focused practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  href="/register" 
                  className="bg-white text-[var(--ln-teal-600)] px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Create Account
                </Link>
                <Link 
                  href="/curriculum" 
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
