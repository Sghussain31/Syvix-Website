"use client";
/* eslint-disable @next/next/no-img-element */

import GradientButton from "@/components/ui/GradientButton";
import { useApp } from "@/context/AppContext";

export default function HomeView() {
  const { setActiveWindow, openContactModal } = useApp();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
      {/* ── Hero Section ───────────────────────────────────── */}
      <div className="mx-auto max-w-4xl text-center relative glow-wrapper">
        {/* Soft ambient background glows */}
        <div className="glow-ambient-blue -top-24 left-1/4" style={{ width: "400px", height: "400px" }} />
        <div className="glow-ambient-purple -top-24 right-1/4" style={{ width: "450px", height: "450px" }} />

        {/* Hero Logo — centered visual anchor with deep slate ambient backdrop and maximum scale */}
        <div className="relative z-10 flex justify-center mb-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-slate-900/15 blur-2xl pointer-events-none" />
          <img
            src="/syvix-logo.png"
            alt="SYVIX Brand Icon"
            className="relative z-10 h-48 sm:h-56 w-auto object-contain filter drop-shadow-[0px_8px_32px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight md:text-6xl relative z-10">
          <span className="text-gradient-electric block">AI for the Real World.</span>
          <span className="text-slate-900 block mt-2">Driven by Intelligence.</span>
        </h1>

        {/* Sub-description */}
        <p className="mx-auto mt-6 max-w-2xl font-sans text-base md:text-lg leading-relaxed md:leading-[1.8] text-slate-600 md:mt-8 relative z-10">
          Creating impactful AI-driven solutions that improve businesses, industries, and everyday life through innovation, scalability, and intelligent engineering.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row relative z-10">
          <GradientButton onClick={() => setActiveWindow("services")} variant="primary">
            See Our Work
          </GradientButton>
          <GradientButton onClick={openContactModal} variant="outline">
            Talk to Us
          </GradientButton>
        </div>
      </div>

      {/* ── Bento Grid Hero Feature Canvas ───────────────── */}
      <div className="mx-auto mt-16 max-w-5xl lg:mt-24 relative glow-wrapper animate-fade-in">
        {/* Soft ambient background glows */}
        <div className="glow-ambient-blue -top-12 left-10 animate-pulse" style={{ width: "400px", height: "400px", animationDuration: "8s" }} />
        <div className="glow-ambient-purple bottom-10 right-10 animate-pulse" style={{ width: "400px", height: "400px", animationDuration: "10s" }} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch relative z-10">
          
          {/* Card 1: AUTOMATION */}
          <article className="glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066FF]/8 border border-[#0066FF]/15 text-[#0066FF] font-display text-xs font-bold">
                01
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-[#0F172A] uppercase">
                Automation
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-500 font-sans">
                Deploying intelligent, autonomous agent workflows and custom business integrations that reduce human overhead and execute repetitive operations instantly.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#0066FF] font-bold uppercase tracking-wider">Active Pipeline</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </article>

          {/* Card 2: ENGINEERING - Raised Bento Element */}
          <article className="glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[350px] md:-translate-y-4 shadow-[0_12px_30px_rgba(0,102,255,0.03)] border-[#0066FF]/15">
            <div>
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C3AED]/8 border border-[#7C3AED]/15 text-[#7C3AED] font-display text-xs font-bold">
                02
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-[#0F172A] uppercase bg-gradient-to-r from-[#0066FF] to-[#7C3AED] bg-clip-text text-transparent">
                Engineering
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-500 font-sans">
                Building robust custom applications, responsive web portals, and scalable database layers built with clean, maintainable, production-level code.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#7C3AED] font-bold uppercase tracking-wider">Optimized Build</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-600 uppercase">Secure</span>
            </div>
          </article>

          {/* Card 3: ARCHITECTURE */}
          <article className="glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066FF]/8 border border-[#0066FF]/15 text-[#0066FF] font-display text-xs font-bold">
                03
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-[#0F172A] uppercase">
                Architecture
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-500 font-sans">
                Designing state-of-the-art computational infrastructure, neural model fine-tuning arrays, and lightning-fast API layers scaled to support enterprise volume.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#0066FF] font-bold uppercase tracking-wider">Neural Latency</span>
              <span className="font-display text-xs font-bold text-slate-700">14ms</span>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}

