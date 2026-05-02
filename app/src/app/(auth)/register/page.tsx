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
      <h2 className="text-xl font-bold text-[var(--ln-navy-900)] mb-6 text-center uppercase tracking-widest">
        Create your Lurnava Account
      </h2>

      <form action={handleSubmit} className="space-y-4">
        <input type="hidden" name="marketTrack" value={track} />
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-1.5">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-[var(--ln-bg-soft)] border border-[var(--ln-border)] rounded-xl text-[var(--ln-navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--ln-teal-500)]/30 focus:border-[var(--ln-teal-500)] transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-500 mb-1.5">
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
          <label className="block text-sm font-medium text-slate-500 mb-1.5">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            minLength={6}
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
          {loading ? "Creating Account..." : "Join the Academy"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] font-bold transition-colors"
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
