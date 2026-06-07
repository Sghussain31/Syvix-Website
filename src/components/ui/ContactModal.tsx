"use client";

import { useApp } from "@/context/AppContext";
import { FormEvent, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  if (!isContactModalOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    closeContactModal();
    // Reset form after exit transition
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setDescription("");
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
        {/* Soft background glow */}
        <div
          className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#2563EB]/10 blur-3xl pointer-events-none"
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
            <h3 className="font-display text-xl font-bold text-white">Message Received</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 max-w-xs">
              Thank you for reaching out. Our team will contact you within 48 hours to discuss your project.
            </p>
            <GradientButton onClick={handleClose} variant="primary" className="mt-8 text-xs">
              Close Window
            </GradientButton>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold text-white">Contact SYVIX</h2>
              <p className="mt-1.5 text-xs text-slate-400">
                Tell us about your project and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Email Address
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  placeholder="you@domain.com"
                />
              </div>

              <div>
                <label htmlFor="modal-desc" className="mb-1.5 block text-xs font-bold text-slate-350">
                  Project Description
                </label>
                <textarea
                  id="modal-desc"
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-xs text-white outline-none transition-all focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  placeholder="Describe what you want to build (e.g. mobile app, automation system, website)..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#2563EB] text-white py-3 text-xs font-bold shadow-sm hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-[0.99]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
