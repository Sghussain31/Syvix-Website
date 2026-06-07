"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GradientButton from "@/components/ui/GradientButton";
import { useApp } from "@/context/AppContext";

const DOMAINS = [
  {
    title: "AI Engineering",
    icon: "⚙️",
    description: "Designing system pipelines, scalable model deployments, and smart workflows.",
    skills: ["System Pipelines", "Model Deployments", "Smart Workflows", "API Routing"],
    glow: "rgba(0,102,255,0.06)",
    borderGlow: "rgba(0,102,255,0.2)"
  },
  {
    title: "AI Integration",
    icon: "🔌",
    description: "Connecting advanced large models and predictive intelligence into pre-existing business applications.",
    skills: ["LLM Integration", "Agent Connectors", "Predictive Intelligence", "Custom APIs"],
    glow: "rgba(124,58,237,0.06)",
    borderGlow: "rgba(124,58,237,0.2)"
  },
  {
    title: "AIML Domain",
    icon: "🧠",
    description: "Custom neural networks, computer vision tools, and deep machine learning fine-tuning layers.",
    skills: ["Neural Networks", "Computer Vision", "Model Fine-Tuning", "Deep Learning"],
    glow: "rgba(0,102,255,0.06)",
    borderGlow: "rgba(0,102,255,0.2)"
  },
  {
    title: "AI & Data Science (AI DS)",
    icon: "📊",
    description: "Big data parsing, statistical analytics, modeling, and automated collection pipelines.",
    skills: ["Big Data Parsing", "Statistical Analytics", "Data Modeling", "Collection Pipelines"],
    glow: "rgba(124,58,237,0.06)",
    borderGlow: "rgba(124,58,237,0.2)"
  },
  {
    title: "Software Development",
    icon: "💻",
    description: "Clean object-oriented programming, systems design, testing, and computational logic.",
    skills: ["OOP Paradigms", "Systems Design", "Unit Testing", "Computational Logic"],
    glow: "rgba(0,102,255,0.06)",
    borderGlow: "rgba(0,102,255,0.2)"
  },
  {
    title: "Full-Stack Web & App Development",
    icon: "🌐",
    description: "End-to-end engineering of responsive frontends, server controllers, API handling, and mobile application frameworks.",
    skills: ["Frontend Frameworks", "Server Controllers", "API Handling", "Mobile Frameworks"],
    glow: "rgba(124,58,237,0.06)",
    borderGlow: "rgba(124,58,237,0.2)"
  }
];

export default function CareerView() {
  const { openInternshipModal } = useApp();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Build the Future With Us"
        subtitle="Join our Paid Technical Fellowship & Specialized Internship Program."
        align="left"
        className="!text-left animate-fade-in"
      />

      {/* Program Description */}
      <div className="mt-4 max-w-4xl animate-fade-in relative z-10">
        <p className="text-sm leading-relaxed text-slate-600 font-sans">
          We believe in backing young talent. We offer comprehensive, hands-on paid internships to college students looking for real industry engineering experience. Write production-level code, collaborate on real client deployments, and learn directly from an active development team.
        </p>
      </div>

      {/* 6 Domain Columns */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch relative glow-wrapper animate-fade-in mt-12">
        {/* Soft background ambient glows */}
        <div className="glow-ambient-purple top-10 right-10" />
        <div className="glow-ambient-blue bottom-0 left-0" />

        {DOMAINS.map((domain) => (
          <article
            key={domain.title}
            className="glass-card flex flex-col justify-between rounded-2xl p-6 md:p-8 shadow-sm relative z-10 transition-all duration-300"
            style={{
              ["--hover-border" as string]: domain.borderGlow,
              ["--hover-glow" as string]: domain.glow,
            }}
          >
            <div>
              {/* Header Icon */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg">
                {domain.icon}
              </div>
              
              <h3 className="font-display text-base font-bold text-slate-900 tracking-wide">
                {domain.title}
              </h3>
              
              <p className="mt-4 text-xs leading-relaxed text-slate-600 font-sans">
                {domain.description}
              </p>
            </div>

            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
              {domain.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span className="h-1 w-1 rounded-full bg-[#7C3AED]/60" />
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Call to Action Row */}
      <div className="mt-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto border-t border-slate-200 pt-12 relative z-10">
        <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
          Ready to kickstart your engineering career?
        </h4>
        <p className="text-xs text-slate-500 font-sans mb-8 max-w-md">
          Apply to our Paid Technical Fellowship or Internship. Showcase your drive and learn next-generation systems engineering.
        </p>
        <GradientButton
          onClick={openInternshipModal}
          variant="purple"
          className="px-8 py-3.5 shadow-[0_4px_16px_rgba(124,58,237,0.15)] hover:shadow-[0_4px_24px_rgba(124,58,237,0.25)] text-xs"
        >
          Apply for Fellowship
        </GradientButton>
      </div>
    </div>
  );
}

