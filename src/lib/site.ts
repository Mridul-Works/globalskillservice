export const site = {
  name: "Global Skills Services",
  shortName: "GSS",
  url: "https://www.globalskillsservices.com",
  description:
    "Accredited Health & Social Care, Functional Skills, Business, Teaching and Leadership qualifications for learners and employers across England.",
  phone: "+44 7440 405166",
  phoneHref: "tel:+447440405166",
  email: "info@globalskillsservices.com",
  hours: "Mon–Fri, 9:00–17:00",
  address: {
    line1: "100 Gabrielle House",
    line2: "332–336 Perth Road",
    city: "Ilford",
    postcode: "IG2 6FG",
  },
  companyNumber: "13491923",
  safeguardingLead: "Mrs Ranjeet Seerha",
  social: {
    // TODO: confirm real profile URLs — the live site links to generic homepages.
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
  },
  legal: {
    // Existing documents on the live site. Migrate into /privacy etc. when content is supplied.
    privacy: "https://www.globalskillsservices.com/uploads/privacypolicy/336122.pdf",
    cookies: "https://www.globalskillsservices.com/uploads/privacypolicy/604069.pdf",
    terms: "https://www.globalskillsservices.com/term-condition",
  },
} as const;

export const nav = [
  { href: "/courses", label: "Courses" },
  { href: "/employers", label: "For employers" },
  { href: "/student-information", label: "Student info" },
  { href: "/about", label: "About" },
  { href: "/safeguarding", label: "Safeguarding" },
] as const;
