export const navItems = [
  { label: "Work", id: "experience-heading" },
  { label: "Projects", id: "projects-heading" },
  { label: "Education", id: "education-heading" },
  { label: "CP", id: "cp-heading" },
  { label: "Certifications", id: "certifications-heading" },
  { label: "Achievements", id: "achievements-heading" },
  { label: "Contact", id: "contact-heading" },
] as const;

export type NavItemId = (typeof navItems)[number]["id"];
