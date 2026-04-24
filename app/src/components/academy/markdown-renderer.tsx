import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("markdown-content prose prose-invert max-w-none", className)}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ className, ...props }) => (
            <h1 className={cn("text-3xl font-bold text-white mb-6 border-b border-[var(--color-border-default)] pb-4", className)} {...props} />
          ),
          h2: ({ className, ...props }) => (
            <h2 className={cn("text-2xl font-bold text-[var(--color-brand-400)] mt-10 mb-4", className)} {...props} />
          ),
          h3: ({ className, ...props }) => (
            <h3 className={cn("text-xl font-bold text-white mt-8 mb-2", className)} {...props} />
          ),
          p: ({ className, ...props }) => (
            <p className={cn("text-[var(--color-text-secondary)] leading-relaxed mb-6", className)} {...props} />
          ),
          ul: ({ className, ...props }) => (
            <ul className={cn("list-disc list-inside space-y-3 mb-8 text-[var(--color-text-secondary)]", className)} {...props} />
          ),
          li: ({ className, ...props }) => (
            <li className={cn("marker:text-[var(--color-brand-500)]", className)} {...props} />
          ),
          blockquote: ({ className, ...props }) => (
            <blockquote className={cn("border-l-4 border-[var(--color-brand-500)] bg-[var(--color-surface-tertiary)] p-6 rounded-r-xl italic my-8", className)} {...props} />
          ),
          strong: ({ className, ...props }) => (
            <strong className={cn("text-white font-bold", className)} {...props} />
          ),
          code: ({ className, ...props }) => (
            <code className={cn("bg-white/10 px-1.5 py-0.5 rounded text-sm text-[var(--color-brand-300)] font-mono", className)} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
