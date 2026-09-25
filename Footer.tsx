"use client";

import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 py-8 bg-[#050508] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f3ff]"></span>
          <span>
            © 2026 {PORTFOLIO_DATA.personal.fullName}. ALL RIGHTS RESERVED.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
            CYBERPUNK NEON EDITION // V1.0
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-neutral-400 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
