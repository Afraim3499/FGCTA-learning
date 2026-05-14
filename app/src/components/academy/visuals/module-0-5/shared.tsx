import React from "react";

/**
 * Module 0.5 Shared Visual Helpers
 */

export const Module05Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border rounded-xl bg-slate-50">
    {children}
  </div>
);
