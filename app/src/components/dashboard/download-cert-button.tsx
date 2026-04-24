"use client";

import { Download } from "lucide-react";

/**
 * Client component for the certificate download action.
 * Provides feedback to the user regarding the current status of the PDF generation feature.
 */
export function DownloadCertButton() {
  const handleDownload = () => {
    alert("Official PDF Generation is currently in finalized audit. \n\nFor Alpha: Please use 'Public Verify' to share your credentials or 'Print to PDF' from your browser's print menu (Ctrl/Cmd + P) to save a local copy.");
  };

  return (
    <button 
      onClick={handleDownload}
      className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl"
    >
      <Download size={18} /> Download PDF
    </button>
  );
}
