"use client";

import { Download } from "lucide-react";

/**
 * Client component for the record download action.
 * Provides feedback to the user regarding the current status of the PDF generation feature.
 */
export function DownloadCertButton() {
  const handleDownload = () => {
    alert("Official Record Generation is currently in finalized audit. \n\nFor Alpha: Please use 'Public Verify' to share your records or 'Print to PDF' from your browser's print menu (Ctrl/Cmd + P) to save a local copy.");
  };

  return (
    <button 
      onClick={handleDownload}
      className="px-8 py-4 bg-[var(--ln-navy-900)] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-[var(--ln-navy-800)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--ln-navy-900)]/20"
    >
      <Download size={16} /> Download Record
    </button>
  );
}
