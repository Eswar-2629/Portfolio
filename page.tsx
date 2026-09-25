import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Résumé | Eswar Devisetty",
  description: "View and download the professional résumé of Eswar Veera Vasanth Kumar Devisetty.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-200 font-sans p-4 sm:p-8 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Eswar_Devisetty_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(0,243,255,0.4)]"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer Embed */}
      <div className="w-full max-w-5xl h-[85vh] bg-[#0d0e15] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-none"
          title="Eswar Devisetty Résumé PDF"
        />
      </div>
    </div>
  );
}
