import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AcademyCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glass?: boolean; variant?: "default" | "soft" | "dark" }
>(({ className, glass = false, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[var(--ln-surface)]",
    soft: "bg-[var(--ln-surface-soft)]",
    dark: "bg-[var(--ln-navy-950)] text-white",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-[var(--ln-border)] shadow-sm transition-all duration-300",
        variants[variant],
        glass && "bg-white/70 backdrop-blur-xl border-white/20",
        className
      )}
      {...props}
    />
  );
});
AcademyCard.displayName = "AcademyCard";

const AcademyCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 md:p-8", className)}
    {...props}
  />
));
AcademyCardHeader.displayName = "AcademyCardHeader";

const AcademyCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-extrabold leading-none tracking-tight text-[var(--ln-navy-900)] uppercase",
      className
    )}
    {...props}
  />
));
AcademyCardTitle.displayName = "AcademyCardTitle";

const AcademyCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[var(--ln-text-muted)] font-medium leading-relaxed", className)}
    {...props}
  />
));
AcademyCardDescription.displayName = "AcademyCardDescription";

const AcademyCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
AcademyCardContent.displayName = "AcademyCardContent";

const AcademyCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
AcademyCardFooter.displayName = "AcademyCardFooter";

export {
  AcademyCard,
  AcademyCardHeader,
  AcademyCardFooter,
  AcademyCardTitle,
  AcademyCardDescription,
  AcademyCardContent,
};
