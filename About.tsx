"use client";

import { Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      {/* Section Divider */}
      <div className="w-full flex items-center justify-center gap-4 opacity-40">
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
          01 // DOSSIER
        </span>
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
          Episode Synopsis • Origin Story
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold hidden sm:inline">
            ESWAR'S PROFILE
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Main Text Bio */}
        <div className="md:col-span-2 space-y-4 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
          <p>
            I am a Computer Science Engineer specializing in <strong>Artificial Intelligence (AI)</strong> from{" "}
            <span className="text-cyan-400 font-medium">{personal.education.institution}</span> ({personal.education.batch}, {personal.education.gpa}), based in {personal.location}.
          </p>
          <p>
            As a <strong className="text-white">{personal.currentRole}</strong>, I focus on constructing resilient Java backends, high-concurrency real-time WebSocket pipelines, and intelligent AI agents combining Retrieval-Augmented Generation (RAG) and computer vision.
          </p>
          <p>
            My engineering philosophy hinges on clear system architecture, zero unnecessary complexity, and continuous observability from network telemetry to client viewports.
          </p>
        </div>

        {/* Quick Facts Card */}
        <div className="p-6 rounded-2xl bg-[#0d0e15] border border-white/10 shadow-lg space-y-4 flex flex-col items-center sm:items-start hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center gap-4 w-full">
            <div className="w-14 h-14 rounded-full border-2 border-cyan-400/80 bg-cyan-950/60 flex items-center justify-center font-mono font-bold text-lg text-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              EV
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                Quick Facts //
              </h3>
              <p className="text-sm font-bold text-white">{personal.nickname}</p>
            </div>
          </div>

          <div className="space-y-3 text-xs leading-normal w-full pt-2 border-t border-white/10 font-mono">
            <div>
              <span className="text-neutral-500 block">EDUCATION:</span>
              <p className="font-medium text-neutral-200">{personal.education.degree}</p>
              <p className="text-neutral-400 text-[11px]">{personal.education.institution}</p>
            </div>
            <div>
              <span className="text-neutral-500 block">CURRENT ROLE:</span>
              <p className="font-medium text-cyan-400">{personal.currentRole}</p>
            </div>
            <div>
              <span className="text-neutral-500 block">LOCATION:</span>
              <p className="font-medium text-neutral-200">{personal.location}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 w-full space-y-2">
            <a
              href="/resume"
              className="w-full py-2.5 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
            >
              <FileText className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              <span>Open Full Résumé</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Architectural Beliefs */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CORE ARCHITECTURAL BELIEFS //</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {personal.principles.map((principle, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#0d0e15] border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm group"
            >
              <span className="text-xs font-mono text-cyan-400 mb-1 block group-hover:text-violet-400 transition-colors">
                0{index + 1} //
              </span>
              <p className="font-medium text-neutral-200 text-xs sm:text-sm leading-relaxed">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
