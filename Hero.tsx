"use client";

import { Play, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-2 md:pt-4 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-bold shadow-[0_0_12px_rgba(0,243,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>ORIGINAL SERIES // 2026 PRODUCTION</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight font-display">
              {personal.fullName}{" "}
              <span className="text-cyan-400 font-sans text-xl sm:text-2xl font-bold">
                (“{personal.nickname}”)
              </span>
            </h1>
            <p className="text-sm sm:text-base font-mono text-violet-400 font-medium tracking-wide">
              {personal.headline}
            </p>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-light max-w-xl">
            {personal.shortBio}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>View Originals</span>
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub Repos</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <div className="h-6 w-px bg-white/10 hidden sm:block mx-1"></div>

            <div className="flex items-center gap-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Cyberpunk Desk Scene Visual Card */}
        <div className="lg:col-span-5 w-full relative">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0d0e15] shadow-2xl p-6 flex flex-col justify-between min-h-[380px] group hover:border-cyan-400/60 transition-colors">
            {/* Cyberpunk Decorative Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
                SYSTEM_STATUS // ACTIVE
              </span>
            </div>

            {/* Code / Visual Graphics */}
            <div className="py-6 space-y-3 font-mono text-xs text-neutral-300">
              <div className="text-cyan-400 font-bold">$ whoami</div>
              <div className="text-neutral-200">
                &gt; {personal.fullName}
              </div>

              <div className="text-violet-400 font-bold pt-2">$ cat stack.config.json</div>
              <div className="bg-[#050508] p-3.5 rounded-lg border border-white/10 text-[11px] space-y-1">
                <div><span className="text-cyan-400">role:</span> "{personal.currentRole}"</div>
                <div><span className="text-violet-400">education:</span> "B.Tech CS (AI) @ NEC"</div>
                <div><span className="text-emerald-400">primary_languages:</span> ["Java", "Python", "TypeScript"]</div>
                <div><span className="text-cyan-400">ai_frameworks:</span> ["PyTorch", "LLMs", "RAG", "OpenCV"]</div>
              </div>
            </div>

            {/* Status Footer Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09090b]/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personal.statusBadge}</span>
              </div>

              <div className="text-[10px] font-mono text-cyan-400 font-bold tracking-wider">
                NEON // v2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
