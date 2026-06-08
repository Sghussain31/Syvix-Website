"use client";

import DivisionsBento from "@/components/blueprint/DivisionsBento";
import SectionHeader from "@/components/ui/SectionHeader";

export default function LabsView() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
      <SectionHeader
        title="SYVIX Labs & Future Tech"
        subtitle="Experimental research and core technological divisions built to power the next digital era."
        align="left"
        className="!text-left"
      />

      {/* Tech Capabilities Cards */}
      <DivisionsBento />

      {/* FUTURE ROADMAP (The Next Era Preview Card) */}
      <div className="mt-16 border-t border-slate-200 pt-12 relative glow-wrapper">
        <div className="glow-ambient-purple bottom-0 right-10" />

        <div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm lift-card">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] animate-pulse" />
            </span>
            <h3 className="font-display text-base font-bold text-slate-900 uppercase tracking-wider">
              Next-Gen Infrastructure (Coming Soon)
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 font-sans max-w-3xl">
            We are expanding our ecosystem to provide lightning-fast Cloud Hosting, Custom Domain Registration, and dedicated server allocations—similar to GoDaddy and Hostinger—offered at highly competitive and reasonable prices to help you launch your ideas instantly.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cloud Hosting", "Domain Registration", "Dedicated Servers", "Instant Launch"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-3 py-1 text-[11px] font-semibold text-[#7C3AED]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
