"use client";

import { useApp } from "@/context/AppContext";
import { LEGAL_DOCS } from "@/lib/types";
import type { LegalDoc } from "@/lib/types";

/* ─── Legal document content ─────────────────────────────────────────── */
const LEGAL_CONTENT: Record<LegalDoc, { title: string; body: string }> = {
  privacy: {
    title: "Privacy Policy",
    body: `At SYVIX AI Solutions Private Limited, we respect your privacy. We only collect basic information that you voluntarily provide through our contact forms, such as your name, email address, and message details. This information is exclusively used to answer your project inquiries or evaluate internship applications. We do not sell, trade, or share your data with external companies.`,
  },
  terms: {
    title: "Terms of Service",
    body: `By using our website, you agree to these basic terms. This platform provides details regarding our custom app development, website creation, maintenance packages, and academic internship programs. The content on this site is the property of SYVIX AI Solutions Private Limited. Any unauthorized copying or commercial redistribution of our website layout, text, or visual assets is strictly prohibited.`,
  },
  "no-refund": {
    title: "No Refund Policy",
    body: `All development packages, website builds, custom application deployments, and monthly maintenance plans are delivered under strict, custom milestone agreements. Because our services involve dedicated software engineering, custom coding, and allocated developer hours, all payments made towards completed project phases or monthly support retainers are final and non-refundable.`,
  },
  llp: {
    title: "Corporate Disclosures",
    body: `SYVIX AI Solutions Private Limited is a legally incorporated Private Limited company registered under the laws of India. We are an official startup ecosystem entity built to deliver technology automation, scalable digital tools, and technical educational fellowships. All official legal communications or contract agreements are processed under our registered corporate structure.`,
  },
};

/* ─── LegalView ──────────────────────────────────────────────────────── */
export default function LegalView() {
  const { activeLegalDoc, openLegalDoc } = useApp();
  const active = LEGAL_CONTENT[activeLegalDoc];

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-10 md:mb-12">
        <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Legal Information
        </p>
        <h1 className="font-display text-xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
          {active.title}
        </h1>
      </div>

      {/* ── 2-Column split layout ─────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

        {/* Left sidebar — tab navigation */}
        <nav aria-label="Legal documents">
          <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            {LEGAL_DOCS.map((doc) => {
              const isActive = activeLegalDoc === doc.id;
              return (
                <li key={doc.id}>
                  <button
                    type="button"
                    onClick={() => openLegalDoc(doc.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-150 ${isActive
                      ? "bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] shadow-[0_4px_12px_rgba(0,102,255,0.04)]"
                      : "border border-transparent text-slate-500 hover:border-slate-200 hover:bg-white hover:text-slate-900"
                      }`}
                  >
                    {/* Active indicator dot */}
                    <span className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                      )}
                      <span className={isActive ? "" : "pl-4"}>{doc.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Back to site hint */}
          <p className="mt-8 hidden text-[11px] leading-relaxed text-slate-500 lg:block font-sans">
            Use the navigation above to browse all legal documents. Click any
            nav link to return to the main site.
          </p>
        </nav>

        {/* Right panel — document content */}
        <div className="glass-card rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden lift-card">
          {/* Subtle ambient blue glow */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Document title with Electric Blue accent line */}
          <div className="relative z-10 mb-6 flex items-center gap-3 border-b border-slate-200 pb-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20">
              <svg
                className="h-4 w-4 text-[#0066FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                {active.title}
              </h2>
              <p className="text-[11px] text-slate-500">
                SYVIX AI Solutions Private Limited — Official Legal Document
              </p>
            </div>
          </div>

          {/* Body text */}
          <p className="relative z-10 text-sm leading-[1.85] text-slate-600 font-sans">
            {active.body}
          </p>

          {/* Footer note */}
          <div className="relative z-10 mt-8 rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-4">
            <p className="text-[11px] leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-500">Last updated:</span>{" "}
              January 2026 · For questions, contact{" "}
              <span className="font-mono text-[#0066FF] font-semibold">syvixaisolutions@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
