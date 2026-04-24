import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-surface-primary)] px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Elite Trading Academy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Institutional grade education and simulation.
          </p>
        </div>
        <div className="bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-2xl p-8 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
