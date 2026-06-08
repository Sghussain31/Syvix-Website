"use client";
/* eslint-disable @next/next/no-img-element */

import { useApp } from "@/context/AppContext";
import { NAV_WINDOWS, LEGAL_DOCS, SUPPORT_LINKS } from "@/lib/types";
import type { LegalDoc, WindowView } from "@/lib/types";

/* ─── Social Icons ──────────────────────────────── */
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
/*
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM10 15.5v-7l5.54 3.5z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
*/

/* ─── Column link data ──────────────────────────── */
const COMPANY_LINKS = NAV_WINDOWS.filter((n) => n.view !== "home");

const SOCIAL = [
  { icon: <IconInstagram />, label: "Instagram", href: "https://www.instagram.com/syvix.ai.solutions?igsh=NnJxZzJ4Zm1oY2p6  " },
  { icon: <IconLinkedIn />, label: "LinkedIn", href: "https://www.linkedin.com/company/syvix-ai-solutions/" },
  //{ icon: <IconYouTube />, label: "YouTube", href: "https://youtube.com/@syvix" },
  //{ icon: <IconX />, label: "X (Twitter)", href: "https://x.com/syvixai" },
];

/* ─── Helper: map label → LegalDoc id ─────────── */
const LABEL_TO_DOC: Record<string, LegalDoc> = {
  "Privacy Policy": "privacy",
  "Terms of Service": "terms",
  "No Refund Policy": "no-refund",
  "Corporate Disclosures": "llp",
};

/* ─── Shared link button ─────────────────────────── */
function FooterBtn({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="text-sm text-slate-600 transition-colors duration-150 hover:text-[#0066FF] text-center sm:text-left w-full"
      >
        {label}
      </button>
    </li>
  );
}

/* ─── Footer ─────────────────────────────────────── */
export default function Footer() {
  const { setActiveWindow, openLegalDoc, openSupportTab, openContactModal } = useApp();

  const openSocial = (href: string) =>
    window.open(href, "_blank", "noopener noreferrer");

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── 4-Column Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 text-slate-600">

          {/* Column 1 — Brand */}
          <div className="space-y-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <button
              type="button"
              onClick={() => setActiveWindow("home")}
              className="flex items-center gap-2.5"
            >
              <img
                src="/syvix-logo.png"
                alt="SYVIX Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-sm font-bold leading-tight">
                <span className="text-[#0066FF]">SYVIX&nbsp;</span>
                <span className="text-slate-900">AI Solutions</span>
              </span>
            </button>

            <p className="text-xs leading-relaxed text-slate-500">
              Engineering Future Intelligence.
            </p>

            <p className="font-display text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              LEARN · BUILD · INNOVATE
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  aria-label={s.label}
                  onClick={() => openSocial(s.href)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-150 hover:border-[#0066FF]/40 hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="text-center sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <FooterBtn
                  key={link.view}
                  label={link.label}
                  onClick={() => setActiveWindow(link.view as WindowView)}
                />
              ))}
              <FooterBtn label="Contact Us" onClick={openContactModal} />
            </ul>
          </div>

          {/* Column 3 — Support */}
          <div className="text-center sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
              Support
            </p>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <FooterBtn
                  key={link.id}
                  label={link.label}
                  onClick={() => openSupportTab(link.id)}
                />
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal (wired to openLegalDoc) */}
          <div className="text-center sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </p>
            <ul className="space-y-3">
              {LEGAL_DOCS.map((doc) => (
                <FooterBtn
                  key={doc.id}
                  label={doc.label}
                  onClick={() => openLegalDoc(doc.id)}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ───────────────────────────────────────── */}
        <div className="h-px w-full bg-slate-200" />

        {/* ── Bottom Baseline Bar ───────────────────────────── */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          {/* Left: Copyright */}
          <p className="text-xs text-slate-500 leading-relaxed">
            © 2026 SYVIX AI Solutions Private Limited (PVT LTD). All rights reserved. | Registered Startup India Company.
          </p>

          {/* Right: Utility links — all wired to legal view */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            {/* Verify Certificate — placeholder, no legal doc */}
            <button
              type="button"
              onClick={() => openLegalDoc("llp")}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-[#0066FF]"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Verify Certificate
            </button>

            {/* Policy links */}
            {(["Terms of Service", "Privacy Policy", "No Refund Policy"] as const).map(
              (label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => openLegalDoc(LABEL_TO_DOC[label])}
                  className="text-xs text-slate-500 transition-colors hover:text-[#0066FF]"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
