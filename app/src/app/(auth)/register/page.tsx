"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { signUp } from "@/lib/auth-actions";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

// useSearchParams() must be in a child component inside <Suspense>
function RegisterForm() {
  const searchParams = useSearchParams();
  const track = searchParams.get("track") || "forex";
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await signUp(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold text-white mb-6 text-center uppercase tracking-widest">
        Join {track.toUpperCase()} Track
      </h2>

      <form action={handleSubmit} className="space-y-4">
        <input type="hidden" name="marketTrack" value={track} />
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full px-4 py-2.5 bg-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-600)] hover:from-[var(--color-brand-600)] hover:to-[var(--color-brand-700)] text-white font-bold rounded-xl shadow-lg shadow-brand-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {loading ? "Creating Account..." : "Join the Academy"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
