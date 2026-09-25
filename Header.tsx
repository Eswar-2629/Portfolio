"use client";

import { useState } from "react";
import { FileText, Mail, Menu, X, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="font-semibold text-white tracking-tight hover:opacity-90 transition-opacity flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full border border-cyan-500/60 bg-cyan-950/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              ES
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cyan-400 ring-2 ring-[#09090b]"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5 font-mono">
              {PORTFOLIO_DATA.personal.nickname.toUpperCase()}
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              JAVA • AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Originals
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="/resume"
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-white font-mono text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Résumé</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-white font-mono text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(0,243,255,0.4)] cursor-pointer hidden sm:inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e15] border-b border-white/10 px-6 py-4 space-y-3 font-mono text-xs uppercase tracking-wider text-neutral-300">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-cyan-400 transition-colors py-1"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-cyan-400 transition-colors py-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-cyan-400 transition-colors py-1"
          >
            Originals
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-cyan-400 transition-colors py-1"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-cyan-400 transition-colors py-1"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
