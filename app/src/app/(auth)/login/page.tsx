"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth-actions";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await signIn(formData);
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
      <h2 className="text-xl font-bold text-[var(--ln-navy-900)] mb-6 text-center">Sign In</h2>

      <form action={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[var(--ln-text-secondary)] mb-1.5">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-[var(--ln-bg-soft)] border border-[var(--ln-border)] rounded-xl text-[var(--ln-navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--ln-teal-500)]/30 focus:border-[var(--ln-teal-500)] transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-[var(--ln-text-secondary)]">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] transition-colors font-bold"
            >
              Forgot?
            </Link>
          </div>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2.5 bg-[var(--ln-bg-soft)] border border-[var(--ln-border)] rounded-xl text-[var(--ln-navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--ln-teal-500)]/30 focus:border-[var(--ln-teal-500)] transition-all"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-4 bg-[var(--ln-navy-900)] hover:bg-[var(--ln-navy-800)] text-white font-bold rounded-xl shadow-[0_10px_24px_rgba(8,26,54,0.16)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
        >
          {loading ? "Signing in..." : "Enter Academy"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-[var(--ln-text-muted)] font-medium">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] font-bold transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
