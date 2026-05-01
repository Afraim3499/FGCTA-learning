import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AcademyCard = React.forwardRef<
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
AcademyCard.displayName = "AcademyCard";

const AcademyCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
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
      "text-lg font-bold leading-none tracking-tight text-white",
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
    className={cn("text-sm text-text-secondary", className)}
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
