"use client";

import { useState } from "react";
import { Maximize2, ExternalLink, Cpu, Users, Layers } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="space-y-8 scroll-mt-20">
      {/* Section Divider */}
      <div className="w-full flex items-center justify-center gap-4 opacity-40">
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
          03 // ORIGINALS
        </span>
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
            Blockbuster Originals • Projects (06)
          </h2>
          <p className="text-xs font-mono text-neutral-400 mt-1">
            FLAGSHIP ARCHITECTURES • REAL-TIME AI & BACKEND SYSTEMS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold hidden sm:inline">
            ORIGINALS
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group p-5 sm:p-6 rounded-2xl bg-[#0d0e15] border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4 shadow-md relative overflow-hidden"
          >
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex items-center justify-between font-mono text-[10px] gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-bold uppercase tracking-wider">
                    {project.seasonEpisode}
                  </span>
                  {project.isTeamProject ? (
                    <span className="px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-500/40 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
                      <Users className="w-2.5 h-2.5" />
                      <span>TEAM PROJECT</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-bold uppercase tracking-wider text-[9px]">
                      FLAGSHIP SOLO
                    </span>
                  )}
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
                  {project.matchScore}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-2 pt-1">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors font-display tracking-wide">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Bottom Actions & Tags */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[11px] font-mono text-neutral-400 hover:text-cyan-400 flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect Specs</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label={`${project.title} Source Code`}
                >
                  <span>Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspect Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
