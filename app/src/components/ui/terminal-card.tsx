import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TerminalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glass?: boolean }
>(({ className, glass = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border-default",
      glass ? "bg-surface-primary/60 backdrop-blur-xl" : "bg-surface-primary",
      "shadow-card",
      className
    )}
    {...props}
  />
));
TerminalCard.displayName = "TerminalCard";

const TerminalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
TerminalCardHeader.displayName = "TerminalCardHeader";

const TerminalCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-bold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
));
TerminalCardTitle.displayName = "TerminalCardTitle";

const TerminalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-text-secondary", className)}
    {...props}
  />
));
TerminalCardDescription.displayName = "TerminalCardDescription";

const TerminalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
TerminalCardContent.displayName = "TerminalCardContent";

const TerminalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
TerminalCardFooter.displayName = "TerminalCardFooter";

export {
  TerminalCard,
  TerminalCardHeader,
  TerminalCardFooter,
  TerminalCardTitle,
  TerminalCardDescription,
  TerminalCardContent,
};
