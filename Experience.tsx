"use client";

import { Briefcase, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="space-y-8 scroll-mt-20">
      {/* Section Divider */}
      <div className="w-full flex items-center justify-center gap-4 opacity-40">
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
          04 // EXPERIENCE
        </span>
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
          Production History • Experience
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold hidden sm:inline">
            EXPERIENCE
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-[#0d0e15] border border-white/10 hover:border-cyan-500/40 transition-colors shadow-md space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>{exp.role}</span>
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  @ {exp.company}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <Calendar className="w-3 h-3 text-cyan-400" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-2 text-xs font-mono text-neutral-300">
              {exp.bulletPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-neutral-300 border border-white/10"
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
