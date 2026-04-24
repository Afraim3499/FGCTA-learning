import React from "react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-surface-primary)] flex flex-col">
      {/* Subtle background element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-500)] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-600)] opacity-[0.02] blur-[120px]" />
      </div>

      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <span className="text-xl font-bold bg-gradient-to-r from-white to-[var(--color-text-secondary)] bg-clip-text text-transparent">
          Elite Trading Academy
        </span>
        <div className="text-xs font-mono text-[var(--color-text-muted)] tracking-widest uppercase">
          Setup Phase
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-2xl">
          {children}
        </div>
      </main>
    </div>
  );
}
