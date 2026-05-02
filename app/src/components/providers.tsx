"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

import { ToastProvider, ToastViewport } from "@/components/ui/status-toast";

import { NavaProvider } from "@/components/nava/NavaProvider";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NavaProvider>
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </NavaProvider>
    </QueryClientProvider>
  );
}

