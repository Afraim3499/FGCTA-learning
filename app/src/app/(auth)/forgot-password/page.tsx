"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 text-center"
    >
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
          <ShieldAlert className="w-8 h-8" />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-[var(--ln-navy-900)] uppercase tracking-widest">
          Reset Password
        </h2>
        <p className="text-[var(--ln-text-secondary)] font-medium leading-relaxed">
          Self-service password reset is currently being updated.
          Please contact our support team or use your linked account for access.
        </p>
      </div>

      <div className="p-6 bg-slate-50 border border-[var(--ln-border)] rounded-[2rem] flex items-center gap-4 text-left">
        <div className="w-10 h-10 bg-white rounded-xl border border-[var(--ln-border)] flex items-center justify-center text-[var(--ln-teal-500)] shrink-0">
          <Mail size={18} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-[var(--ln-text-muted)] uppercase tracking-widest">Support Access</p>
          <p className="text-sm font-bold text-[var(--ln-navy-900)]">support@lurnava.academy</p>
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </div>
    </motion.div>
  );
}
