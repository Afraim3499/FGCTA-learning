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
      <h2 className="text-xl font-bold text-white mb-6 text-center">Sign In</h2>

      <form action={handleSubmit} className="space-y-5">
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
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors"
            >
              Forgot?
            </Link>
          </div>
          <input
            name="password"
            type="password"
            required
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
          {loading ? "Signing in..." : "Enter Academy"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] font-medium transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
