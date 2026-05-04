"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
  glow?: boolean;
}

const AcademyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, glow = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      primary: "bg-[var(--ln-navy-950)] text-white hover:bg-[var(--ln-navy-800)] shadow-sm active:scale-95",
      secondary: "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)] shadow-sm",
      outline: "border-2 border-[var(--ln-border)] bg-white text-[var(--ln-navy-900)] hover:bg-[var(--ln-bg-soft)] hover:border-[var(--ln-teal-500)]/30",
      ghost: "bg-transparent text-[var(--ln-text-secondary)] hover:bg-[var(--ln-bg-soft)] hover:text-[var(--ln-navy-900)]",
      glass: "bg-white/80 backdrop-blur-md border border-[var(--ln-border)] text-[var(--ln-navy-900)] hover:bg-white shadow-sm",
      teal: "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)]",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg font-bold",
      icon: "h-10 w-10",
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Comp
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            glow && "shadow-[0_0_15px_rgba(0,112,243,0.4)]",
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
AcademyButton.displayName = "AcademyButton";

export { AcademyButton };
