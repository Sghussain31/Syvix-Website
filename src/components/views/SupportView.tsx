"use client";

import { useApp } from "@/context/AppContext";
import { SUPPORT_LINKS } from "@/lib/types";

export default function SupportView() {
  const { activeSupportTab, openSupportTab } = useApp();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-10 md:mb-12">
        <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          SYVIX Hub
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Support Services
        </h1>
      </div>

      {/* ── 2-Column split layout ─────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

        {/* Left sidebar — tab navigation */}
        <nav aria-label="Support sections">
          <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            {SUPPORT_LINKS.map((link) => {
              const isActive = activeSupportTab === link.id;
              return (
                <li key={link.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => openSupportTab(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] shadow-[0_4px_12px_rgba(0,102,255,0.04)]"
                        : "border border-transparent text-slate-500 hover:border-slate-200 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                      )}
                      <span className={isActive ? "" : "pl-4"}>{link.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 hidden text-[11px] leading-relaxed text-slate-500 lg:block font-sans">
            Need urgent developer assistance? Reach our help desk at:<br />
            <a href="mailto:syvixaisolutions@gmail.com" className="font-mono text-[#0066FF] hover:underline font-semibold">
              syvixaisolutions@gmail.com
            </a>
          </p>
        </nav>

        {/* Right panel — active responsive document card */}
        <div className="glass-card rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden lift-card">
          {/* Subtle ambient blue/purple glow depending on state */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-35"
            style={{
              background:
                activeSupportTab === "status"
                  ? "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Section 1: Help Center */}
          {activeSupportTab === "help" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-slate-900">Help Center</h2>
                  <p className="text-[11px] text-slate-500">Welcome to the SYVIX Support Hub</p>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm leading-[1.8] text-slate-600">
                <p>
                  Need assistance with your web platform, deployed AI models, application builds, or upcoming hosting infrastructure? Our dedicated resolution team is standing by to assist you.
                </p>
                <p>
                  For all support ticket logging, escalation, or general platform inquiries, please drop us an email with your project ID at:{" "}
                  <a href="mailto:syvixaisolutions@gmail.com" className="font-mono text-[#0066FF] font-semibold hover:underline">
                    syvixaisolutions@gmail.com
                  </a>
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-4 mt-6">
                  <p className="text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Average Response Time:</span> 12 to 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: FAQ */}
          {activeSupportTab === "faq" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
                  <p className="text-[11px] text-slate-500">Find quick answers to common support questions</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "What services do you build?",
                    a: "We provide intelligent AI custom automations, bespoke website ecosystems, and native apps optimized for startups and enterprise firms."
                  },
                  {
                    q: "When is your domain and hosting service launching?",
                    a: "Our affordable infrastructure hosting divisions are coming soon! Stay tuned to our innovations timeline."
                  },
                  {
                    q: "How can I contact management directly?",
                    a: "For business partnerships, enterprise requests, or custom builds, email us directly at: syvixaisolutions@gmail.com."
                  }
                ].map((item, index) => (
                  <div key={index} className="rounded-xl border border-slate-150 bg-slate-50/30 p-5 hover:bg-slate-50/80 transition-colors duration-150">
                    <h4 className="font-display text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="text-[#0066FF] font-semibold">Q.</span> {item.q}
                    </h4>
                    <p className="mt-2.5 font-sans text-xs text-slate-600 leading-relaxed pl-4 border-l-2 border-[#0066FF]/20">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Technical Support */}
          {activeSupportTab === "technical" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-slate-900">Technical Support</h2>
                  <p className="text-[11px] text-slate-500">Dedicated Engineering Support Line</p>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm leading-[1.8] text-slate-600">
                <p>
                  For clients under our active System Maintenance Support tier, our software developers manage your database stability, feature improvements, and cloud deployments continuously.
                </p>
                <p>
                  If your platform requires emergency hotfixes, API key updates, or server patching, please submit your support logs straight to our engineering queue at:{" "}
                  <a href="mailto:syvixaisolutions@gmail.com" className="font-mono text-[#0066FF] font-semibold hover:underline">
                    syvixaisolutions@gmail.com
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Section 4: System Status */}
          {activeSupportTab === "status" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
                  <svg className="h-4 w-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-slate-900">System Status</h2>
                  <p className="text-[11px] text-slate-500">Real-Time Operational Infrastructure</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: "SYVIX AI Chatbots & Automations Core Pipeline",
                    status: "ONLINE // 99.98% UPTIME"
                  },
                  {
                    title: "Enterprise Custom Web Infrastructure & App Sync",
                    status: "OPERATIONAL // LATENCY 12ms"
                  },
                  {
                    title: "Cloud Database Services & Hosting Nodes",
                    status: "FULLY STABLE // 0 ISSUES"
                  }
                ].map((sys, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-slate-200/60 bg-white/50 p-4 shadow-sm">
                    <span className="text-xs font-semibold text-slate-700 font-sans">{sys.title}</span>
                    <div className="mt-2 sm:mt-0 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-wide bg-emerald-50 border border-emerald-250/20 rounded-md px-2 py-0.5">
                        {sys.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
