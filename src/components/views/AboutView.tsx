"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

const DECODE_ITEMS = [
  {
    letter: "S",
    title: "Systems",
    desc: "Building structured platforms and reliable digital backbones.",
  },
  {
    letter: "Y",
    title: "Yielding",
    desc: "Providing actual results and helpful, real-world value.",
  },
  {
    letter: "V",
    title: "Vision",
    desc: "Planning ahead to build tools ready for the future.",
  },
  {
    letter: "I",
    title: "Intelligence",
    desc: "Making software smart enough to do work for you.",
  },
  {
    letter: "X",
    title: "Execution",
    desc: "Writing code carefully and launching products on time.",
  },
];

const VALUES = [
  {
    title: "Smart Work",
    icon: "⚡",
    description: "Making complex technology simple to use.",
  },
  {
    title: "Reliability",
    icon: "🛡",
    description: "Building tools that work perfectly every time.",
  },
  {
    title: "Growth-Ready",
    icon: "📈",
    description: "Designing software that can scale up as your company expands.",
  },
];

export default function AboutView() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
      <SectionHeader
        title="What SYVIX Stands For"
        align="left"
        className="!text-left"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 relative glow-wrapper">
        {/* Ambient background glows */}
        <div className="glow-ambient-purple -top-10 left-10" />
        <div className="glow-ambient-blue top-40 right-0" />

        {/* Left: Description, Vision & Goal */}
        <div className="space-y-6 relative z-10">
          <p className="text-base leading-relaxed text-slate-600 md:text-lg font-sans">
            SYVIX is a technology company. We bridge the gap between advanced
            software engineering and simple, everyday digital tools that solve
            real problems.
          </p>
          
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                Company Vision
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 font-sans">
                To build intelligent technologies that solve real-world problems through artificial intelligence, automation, and next-generation digital systems.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                Company Goal
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 font-sans">
                To empower individuals, corporates, and startups globally by delivering top-tier AI automations, custom websites, intuitive applications, and robust technical infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Acronym stack bars */}
        <div className="flex flex-col gap-3 relative z-10">
          {DECODE_ITEMS.map((item, index) => (
            <div
              key={item.letter}
              onMouseEnter={() => setActive(index)}
              className={`stack-item flex items-start gap-4 rounded-xl border p-4 transition-all duration-150 cursor-default bg-white/60 ${
                active === index
                  ? "border-[#0066FF]/40 bg-[#0066FF]/5 shadow-[0_4px_16px_rgba(0,102,255,0.04)]"
                  : "border-slate-200"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold transition-all duration-150 font-display ${
                  active === index
                    ? "bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.3)]"
                    : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}
              >
                {item.letter}
              </span>
              <div>
                <p className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                  {item.title}
                  {active === index && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                  )}
                </p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ── Core Values Section ─────────────────────────────── */}
      <div className="mt-20 border-t border-slate-200 pt-16">
        <h3 className="mb-10 text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          Our Simple Values
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="glass-card rounded-xl p-7"
            >
              <span className="text-2xl mb-4 block">{value.icon}</span>
              <h4 className="font-display text-base font-bold text-slate-900">
                {value.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 font-sans">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
