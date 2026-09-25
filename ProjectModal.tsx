"use client";

import { X, ExternalLink, Github, CheckCircle, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d0e15] border border-cyan-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/40 font-bold uppercase tracking-wider">
              {project.seasonEpisode}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-500/40 font-bold uppercase tracking-wider">
              {project.matchScore}
            </span>
            {project.isTeamProject ? (
              <span className="px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 font-bold uppercase">
                TEAM PROJECT
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-bold uppercase">
                FLAGSHIP SOLO
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-400 font-mono">{project.tagline}</p>
        </div>

        {/* Full Description */}
        <div className="space-y-2 text-neutral-300 text-sm font-light leading-relaxed border-t border-white/10 pt-4">
          <h4 className="text-xs font-mono uppercase text-neutral-400 font-bold">
            SPECS OVERVIEW //
          </h4>
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
          </h4>
          <ul className="space-y-2 text-xs text-neutral-300 font-mono">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▸</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        <div className="bg-[#050508] p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1 text-neutral-300">
          <span className="text-violet-400 font-bold block mb-1">
            SYSTEM ARCHITECTURE:
          </span>
          <p>{project.architectureDetails}</p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-neutral-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(0,243,255,0.4)]"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
