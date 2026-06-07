"use client";

import { useApp } from "@/context/AppContext";
import { FormEvent, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";

const DOMAINS = [
  "Software Engineering",
  "AI/DS",
  "AIML"
];

export default function InternshipModal() {
  const { isInternshipModalOpen, closeInternshipModal } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [interest, setInterest] = useState(DOMAINS[0]);

  if (!isInternshipModalOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    closeInternshipModal();
    // Reset form after exit transition
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setUniversity("");
      setInterest(DOMAINS[0]);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-200"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#12141a]/95 p-6 shadow-2xl backdrop-blur-md transition-all sm:p-8 animate-fade-in z-10">
        {/* Soft background glow (Purple for Careers) */}
        <div
          className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-3xl pointer-events-none"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/35 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-white">Application Received</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 max-w-xs">
              Thank you for applying. Our recruiting team will review your credentials and reach out if there is a match.
            </p>
            <GradientButton onClick={handleClose} variant="purple" className="mt-8 text-xs">
              Close Window
            </GradientButton>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold text-white">Apply for Internship</h2>
              <p className="mt-1.5 text-xs text-slate-400">
                Join our Paid Technical Fellowship & Internship Program.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="intern-name" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Name
                </label>
                <input
                  id="intern-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="intern-email" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Email Address
                </label>
                <input
                  id="intern-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                  placeholder="you@domain.com"
                />
              </div>

              <div>
                <label htmlFor="intern-uni" className="mb-1.5 block text-xs font-bold text-slate-350">
                  University
                </label>
                <input
                  id="intern-uni"
                  type="text"
                  required
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]"
                  placeholder="University / College Name"
                />
              </div>

              <div>
                <label htmlFor="intern-interest" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Field of Interest
                </label>
                <div className="relative">
                  <select
                    id="intern-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-black/45 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] appearance-none"
                  >
                    {DOMAINS.map((domain) => (
                      <option key={domain} value={domain} className="bg-[#0F1115] text-white">
                        {domain}
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#8B5CF6] text-white py-3 text-xs font-bold shadow-sm hover:bg-[#7C3AED] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-[0.99]"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
