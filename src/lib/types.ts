export type WindowView =
  | "home"
  | "about"
  | "innovations"
  | "services"
  | "career"
  | "legal"
  | "support";

export type LegalDoc = "privacy" | "terms" | "no-refund" | "llp";
export type SupportTab = "help" | "faq" | "technical" | "status";

export const NAV_WINDOWS: { label: string; view: WindowView }[] = [
  { label: "Home", view: "home" },
  { label: "About Us", view: "about" },
  { label: "Innovations", view: "innovations" },
  { label: "Services", view: "services" },
  { label: "Career with SYVIX", view: "career" },
];

export const LEGAL_DOCS: { id: LegalDoc; label: string }[] = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" },
  { id: "no-refund", label: "No Refund Policy" },
  { id: "llp", label: "Corporate Disclosures" },
];

export const SUPPORT_LINKS: { id: SupportTab; label: string }[] = [
  { id: "help", label: "Help Center" },
  { id: "faq", label: "FAQ" },
  { id: "technical", label: "Technical Support" },
  { id: "status", label: "System Status" },
];
