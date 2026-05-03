import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export function NavaTeaserSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block pointer-events-none">
            <img 
              src="/brand/nava/nava-bust.png" 
              alt="Nava Bust" 
              className="w-full h-full object-contain object-right-bottom translate-y-12 group-hover:translate-y-8 transition-transform duration-700"
            />
          </div>
          
          <div className="max-w-2xl relative space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-200)] text-[var(--ln-teal-600)] text-[10px] font-extrabold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              Guided Experience
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-[var(--ln-navy-900)] leading-tight">
              Meet Nava, your guide <br/> inside Lurnava
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed">
              Nava helps learners find the next lesson, understand locked steps, and recover after tests or chart missions—without turning the course into a chatbot.
            </p>
            
            <div className="pt-4">
              <Link 
                href="/nava" 
                className="inline-flex items-center gap-3 bg-[var(--ln-navy-900)] hover:bg-[var(--ln-navy-950)] text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 group/btn"
              >
                Meet Nava
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Mobile Nava Asset */}
          <div className="mt-12 lg:hidden">
             <img 
              src="/brand/nava/nava-bust.png" 
              alt="Nava Bust" 
              className="w-full max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
