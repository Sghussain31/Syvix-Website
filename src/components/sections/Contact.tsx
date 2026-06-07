"use client";
/* eslint-disable @next/next/no-img-element */

import { useApp } from "@/context/AppContext";
import { CONTACT_INTERESTS } from "@/lib/contact";
import { FormEvent, useState } from "react";

export default function Contact() {
  const { contactRef, contactInterest, setContactInterest } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted. Notification routed to syvixaisolutions@gmail.com");
    setSubmitted(true);
  };

  const openEmail = (address: string) => {
    window.location.assign(`mailto:${address}`);
  };

  return (
    <section
      ref={contactRef as React.RefObject<HTMLElement>}
      className="relative z-10 border-t border-white/10 bg-[#0F1115] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative glow-wrapper">
        {/* Ambient background glows */}
        <div className="glow-ambient-blue top-1/4 left-1/4" />
        <div className="glow-ambient-purple bottom-1/4 right-1/4" />

        <div className="grid gap-8 lg:grid-cols-2 relative z-10">
          {/* Left Column: Direct Text Directory */}
          <div className="glass-card rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Subtle watermark logo in background */}
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] pointer-events-none">
              <img
                src="/syvix-logo.png"
                alt="SYVIX Logo Watermark"
                className="w-64 h-auto object-contain"
              />
            </div>

            <div className="relative z-10">
              <img
                src="/syvix-logo.png"
                alt="SYVIX Logo"
                className="h-12 w-auto mb-6 object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.15)]"
              />
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s build future intelligence.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-350 font-sans">
                Get in touch to scope a web/app project, apply for a paid internship, or establish partnerships with SYVIX Labs.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-8 space-y-6">
              <div>
                <p className="font-display text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Direct Contact Directory
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-slate-400">
                      Corporate Inquiries
                    </span>
                    <button
                      type="button"
                      onClick={() => openEmail("syvixaisolutions@gmail.com")}
                      className="mt-1 sm:mt-0 font-mono text-sm font-semibold text-[#2563EB] hover:text-[#2563EB]/80 transition-colors text-left"
                    >
                      syvixaisolutions@gmail.com
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Input Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
          >
            {submitted ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-display text-lg font-bold text-white">
                  Message Received
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Our team will respond within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-bold text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-white/10 bg-black/20 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-bold text-slate-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-black/20 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      placeholder="you@domain.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-xs font-bold text-slate-300"
                    >
                      Area of Interest
                    </label>
                    <div className="relative">
                      <select
                        id="interest"
                        name="interest"
                        value={contactInterest}
                        onChange={(e) => setContactInterest(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] appearance-none"
                      >
                        {CONTACT_INTERESTS.map((option) => (
                          <option key={option} value={option} className="bg-[#0F1115] text-white">
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      placeholder="Tell us what you want to build or how we can help you..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#2563EB] text-white py-3 text-xs font-bold shadow-sm hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
