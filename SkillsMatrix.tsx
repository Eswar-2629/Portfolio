"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsMatrix() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="space-y-8 scroll-mt-20">
      {/* Section Divider */}
      <div className="w-full flex items-center justify-center gap-4 opacity-40">
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
          02 // STACK
        </span>
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
          Director's Toolkit • Skills Matrix
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold hidden sm:inline">
            SKILLS MATRIX
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.number}
            className="p-5 sm:p-6 rounded-2xl bg-[#0d0e15] border border-white/10 space-y-4 shadow-md hover:border-cyan-500/50 transition-all group"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white font-mono tracking-wider flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff]"></span>
                {category.title}
              </h3>
              <span className="text-[10px] font-mono text-neutral-500 font-bold">
                {category.number}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-default select-none hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
