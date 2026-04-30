import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--ln-bg)] px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ln-navy-900)]">
            Lurnava Academy
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Learn the market with structure.
          </p>
        </div>
        <div className="bg-white border border-[var(--ln-border)] rounded-3xl p-8 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
