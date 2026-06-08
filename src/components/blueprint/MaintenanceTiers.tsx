"use client";

import { useApp } from "@/context/AppContext";
import GradientButton from "@/components/ui/GradientButton";

const TIERS = [
  {
    name: "Startup Package",
    tagline: "Quick Launch",
    badge: null,
    description:
      "Best for new businesses and individual creators needing a clean, professional website or basic mobile application to launch quickly.",
    features: [
      "Responsive Web / App Build",
      "Core Admin Portal",
      "30-Day Launch Support",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise Package",
    tagline: "Custom Systems",
    badge: "Most Popular",
    description:
      "Built for expanding operations needing custom software, data dashboards, or automated business tools.",
    features: [
      "Tailored Software Core",
      "Secure Dedicated Database",
      "SLA-backed Support",
    ],
    highlighted: true,
  },
  {
    name: "Maintenance Support",
    tagline: "Uptime & Security",
    badge: null,
    description:
      "Dedicated technical check-ups, bug fixes, and server management so your platform stays fast and secure. We stay with you long after deployment to handle all infrastructure updates.",
    features: [
      "Continuous Server Checks",
      "Weekly Backup Cycles",
      "Security Fix Retainer",
    ],
    highlighted: false,
  },
];

export default function MaintenanceTiers() {
  const { openContactModal } = useApp();

  const inquire = () => {
    openContactModal();
  };

  return (
    <div className="mt-16 border-t border-slate-200 pt-16">
      <p className="mb-2 text-center text-xs font-bold tracking-wider text-slate-500 uppercase">
        App & Website Packages
      </p>
      <h3 className="mb-10 text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
        Select a Package
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch relative glow-wrapper">
        {/* Ambient glows */}
        <div className="glow-ambient-blue bottom-10 left-0" />
        <div className="glow-ambient-purple top-0 right-0" />

        {TIERS.map((tier) => (
          <article
            key={tier.name}
            className={`relative z-10 flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
              tier.highlighted
                ? "border-2 border-[#0066FF] bg-white shadow-[0_8px_30px_rgba(0,102,255,0.04)] hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] hover:border-[#0066FF]"
                : "glass-card"
            }`}
          >
            {/* Badge */}
            {tier.badge && (
              <div>
                <span className="mb-4 inline-flex items-center rounded-full bg-[#0066FF]/10 px-3 py-1 text-xs font-bold text-[#0066FF] border border-[#0066FF]/20">
                  {tier.badge}
                </span>
              </div>
            )}

            <div>
              <p className="font-mono text-[10px] tracking-wide text-slate-500 uppercase">
                {tier.tagline}
              </p>
              <h4
                className={`mt-2 font-display text-xl font-bold ${
                  tier.highlighted ? "text-gradient-bp" : "text-slate-900"
                }`}
              >
                {tier.name}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 font-sans">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        background: tier.highlighted ? "#0066FF" : "#7C3AED",
                      }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <GradientButton
                onClick={inquire}
                variant={tier.highlighted ? "primary" : "outline"}
                className="w-full text-xs"
              >
                Inquire Now
              </GradientButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
