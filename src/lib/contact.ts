export const CONTACT_INTERESTS = [
  "Build a Web/App Project",
  "Apply for Paid Internship",
] as const;

export type ContactInterest = (typeof CONTACT_INTERESTS)[number];
