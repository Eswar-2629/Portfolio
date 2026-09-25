"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function MarqueeTicker() {
  const items = PORTFOLIO_DATA.personal.streamingBannerText;

  return (
    <div className="w-full overflow-hidden py-3.5 bg-cyan-950/20 border-y border-cyan-500/20 select-none">
      <div className="animate-marquee-smooth whitespace-nowrap text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span className={idx % 2 === 0 ? "text-cyan-400 font-bold" : "text-violet-400 font-bold"}>
              {text}
            </span>
            <span className="text-neutral-600">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
