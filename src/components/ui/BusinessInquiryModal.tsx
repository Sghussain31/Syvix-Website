"use client";

import { useApp } from "@/context/AppContext";
import { FormEvent, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";

export default function BusinessInquiryModal() {
  const { isContactModalOpen, closeContactModal } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Custom AI Automation");
  const [description, setDescription] = useState("");

  if (!isContactModalOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const dataObj: Record<string, string> = {
        "access_key": ["45c2de0d", "93a9", "4b0a", "9ac6", "c70c73be8ea5"].join("-"),
        "subject": "New Business & Automation Inquiry - SYVIX",
        "from_name": "SYVIX AI Solutions",
        "botcheck": "",
        "Client Name": name,
        "Corporate Email": email,
        "Project Division": projectType,
        "Project Requirements Details": description
      };

      const res = await fetch(["https://api.web3forms.", "com/submit"].join(""), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataObj)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to submit. Please check details.");
      }
    } catch {
      setError("Network connection issue. Please check your connectivity.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeContactModal();
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
      setName("");
      setEmail("");
      setProjectType("Custom AI Automation");
      setDescription("");
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative w-[92%] max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all sm:p-8 animate-fade-in z-10">
        {/* Soft background glow */}
        <div
          className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#0066FF]/5 blur-3xl pointer-events-none"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
          aria-label="Close modal"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Transmission Received</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 max-w-xs">
              Our team will contact you shortly.
            </p>
            <GradientButton onClick={handleClose} variant="primary" className="mt-8 text-xs">
              Close Window
            </GradientButton>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold text-slate-900">Business Inquiry</h2>
              <p className="mt-1.5 text-xs text-slate-500">
                Partner with SYVIX AI to deploy custom platforms and AI automation.
              </p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden system metadata for access key */}
              <input type="hidden" name="access_key" value="45c2de0d-93a9-4b0a-9ac6-c70c73be8ea5" />
              {/* Invisible honeypot field */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div>
                <label htmlFor="inquiry-name" className="mb-1.5 block text-xs font-bold text-slate-700">
                  Name
                </label>
                <input
                  id="inquiry-name"
                  name="Client Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-[#0066FF] focus:bg-white focus:ring-1 focus:ring-[#0066FF]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="mb-1.5 block text-xs font-bold text-slate-700">
                  Business Email
                </label>
                <input
                  id="inquiry-email"
                  name="Corporate Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-[#0066FF] focus:bg-white focus:ring-1 focus:ring-[#0066FF]"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="inquiry-type" className="mb-1.5 block text-xs font-bold text-slate-700">
                  Engagement Type
                </label>
                <div className="relative">
                  <select
                    id="inquiry-type"
                    name="Project Division"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-[#0066FF] focus:bg-white focus:ring-1 focus:ring-[#0066FF] appearance-none"
                  >
                    <option>Custom AI Automation</option>
                    <option>Enterprise Web Systems</option>
                    <option>Mobile App Infrastructure</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-desc" className="mb-1.5 block text-xs font-bold text-slate-700">
                  Project Scope Details
                </label>
                <textarea
                  id="inquiry-desc"
                  name="Project Requirements Details"
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-[#0066FF] focus:bg-white focus:ring-1 focus:ring-[#0066FF]"
                  placeholder="Describe your goals, requirements, or what you want us to help build..."
                />
              </div>

              {error && (
                <p className="text-xs font-semibold text-red-500 text-center">{error}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#0066FF] text-white py-3 text-xs font-bold shadow-sm hover:bg-[#0052CC] hover:shadow-[0_0_20px_rgba(0,102,255,0.25)] transition-all active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
