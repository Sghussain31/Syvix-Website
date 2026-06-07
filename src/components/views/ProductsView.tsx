"use client";

import MaintenanceTiers from "@/components/blueprint/MaintenanceTiers";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientButton from "@/components/ui/GradientButton";
import { useApp } from "@/context/AppContext";

export default function ProductsView() {
  const { openContactModal } = useApp();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Core Services & Custom Solutions"
        subtitle="High-performance digital tools engineered for individuals, startups, and enterprise operations."
      />
      <MaintenanceTiers />

      {/* Component 2 - Custom Automation (Highlighted Callout Card) */}
      <div className="mt-16 border-t border-slate-200 pt-16 relative glow-wrapper animate-fade-in">
        <div className="glow-ambient-blue bottom-0 left-1/4" />

        <article className="relative z-10 overflow-hidden rounded-2xl border-2 border-[#0066FF] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,102,255,0.04)] hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-[#0066FF]/10 px-3 py-1 text-xs font-bold text-[#0066FF] border border-[#0066FF]/20">
                Specialized Service
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 tracking-wide">
                Custom AI-Powered Automation
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 font-sans">
                We also provide custom AI-powered automation solutions tailored to your business needs. For more information, please submit an inquiry and our team will contact you shortly.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <GradientButton
                onClick={openContactModal}
                variant="primary"
                className="w-full md:w-auto text-xs whitespace-nowrap"
              >
                Inquire About Automation
              </GradientButton>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

