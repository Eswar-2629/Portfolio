"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { socials, nickname } = PORTFOLIO_DATA.personal;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-20">
      {/* Section Divider */}
      <div className="w-full flex items-center justify-center gap-4 opacity-40">
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">
          05 // CONTACT
        </span>
        <div className="h-[1px] flex-1 bg-cyan-500/30"></div>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
          Sign-Off • Get In Touch
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold hidden sm:inline">
            LET'S TALK
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0d0e15] border border-cyan-500/30 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>DIRECT CHANNELS //</span>
            </div>

            <p className="text-xs text-neutral-300 font-mono leading-relaxed">
              {nickname}: “Still at the desk coding 💻 Let's build something great together!”
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                DIRECT EMAIL:
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white">
                <span className="truncate">{socials.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors flex items-center gap-1 text-[10px]"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-cyan-400 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-cyan-400 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[#0d0e15] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>TRANSMIT DISPATCH FORM</span>
              </h3>
              <span className="text-[10px] font-mono text-cyan-400">ENCRYPTED // 256-BIT</span>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-500/50 text-center space-y-2">
                <Check className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="text-sm font-bold font-mono text-cyan-400 uppercase">
                  DISPATCH TRANSMITTED SUCCESSFULLY!
                </h4>
                <p className="text-xs text-neutral-300 font-mono">
                  Thank you for reaching out! Eswar will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#050508] border border-white/10 focus:border-cyan-400 focus:outline-none text-white font-mono text-xs transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">
                    YOUR EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#050508] border border-white/10 focus:border-cyan-400 focus:outline-none text-white font-mono text-xs transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">
                    MESSAGE / PROJECT INQUIRY:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, offer, or inquiry..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#050508] border border-white/10 focus:border-cyan-400 focus:outline-none text-white font-mono text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
