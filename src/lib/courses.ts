// Course catalogue. Details (duration, fee, assessment) are only filled in where
// the live site publishes them — everything else shows "Ask us" until confirmed.

export type Course = {
  title: string;
  level: string;
  awardingBody?: string;
  duration?: string;
  fee?: string;
  assessment?: string;
  highlight?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  courses: Course[];
};

const PORTFOLIO = "Portfolio of evidence, internally assessed and externally quality assured";

export const categories: Category[] = [
  {
    slug: "health-and-social-care-courses",
    name: "Health & Social Care",
    tagline: "From your first care role to registered manager.",
    description:
      "Nationally recognised qualifications for care workers, senior carers and managers — including the Oliver McGowan Mandatory Training required across health and social care.",
    audience: "Care workers, support workers, senior carers and care managers",
    courses: [
      { title: "The Oliver McGowan Mandatory Training on Learning Disability and Autism", level: "Mandatory", highlight: true },
      { title: "NCFE CACHE Level 2 Adult Social Care Certificate", level: "Level 2", awardingBody: "NCFE CACHE" },
      { title: "ICQ Level 2 Diploma in Care", level: "Level 2", awardingBody: "ICQ" },
      { title: "ICQ Level 2 Certificate in End of Life Care", level: "Level 2", awardingBody: "ICQ", duration: "3 months", fee: "£400", assessment: `${PORTFOLIO}. Six mandatory units.` },
      { title: "NCFE CACHE Level 2 Certificate in Mental Health Awareness", level: "Level 2", awardingBody: "NCFE CACHE" },
      { title: "ICQ Level 2 Certificate in Principles of Medication Administration", level: "Level 2", awardingBody: "ICQ" },
      { title: "ICQ Level 2 Certificate in the Principles of Dementia Care", level: "Level 2", awardingBody: "ICQ" },
      { title: "ICQ Level 2 Certificate in Understanding Autism", level: "Level 2", awardingBody: "ICQ" },
      { title: "Level 3 Award in First Aid at Work", level: "Level 3" },
      { title: "ICQ Level 3 Diploma in Adult Care (England)", level: "Level 3", awardingBody: "ICQ" },
      { title: "ICQ Level 4 Diploma in Adult Care", level: "Level 4", awardingBody: "ICQ" },
      { title: "ICQ Level 5 Diploma in Leading and Managing Adult Care Services (England)", level: "Level 5", awardingBody: "ICQ" },
    ],
  },
  {
    slug: "functional-skills-courses",
    name: "Functional Skills",
    tagline: "Practical English and maths for work and life.",
    description:
      "Build the English and maths you use every day at work. No entry requirements — we assess your starting point when you enrol and place you at the right level.",
    audience: "Adults who want to strengthen English or maths, or need them for further study",
    courses: [
      { title: "Functional Skills English — Entry Level", level: "Entry", duration: "55 hours", fee: "£250", assessment: "Three controlled assessments: reading; writing; speaking, listening and communicating" },
      { title: "Functional Skills English — Level 1 & 2", level: "Level 1–2" },
      { title: "Functional Skills Maths — Entry Level", level: "Entry" },
      { title: "Functional Skills Maths — Level 1 & 2", level: "Level 1–2" },
    ],
  },
  {
    slug: "business-administration",
    name: "Business & Administration",
    tagline: "Office, admin and customer service skills employers want.",
    description:
      "Qualifications in business administration and customer service, from entry-level certificates to Level 3 diplomas.",
    audience: "Admin staff, receptionists, customer-facing teams and career changers",
    courses: [
      { title: "Level 1 Certificate in Business Administration", level: "Level 1", duration: "3 months", fee: "£400", assessment: PORTFOLIO },
      { title: "Level 1 Certificate in Customer Service", level: "Level 1" },
      { title: "Level 2 Certificate in Customer Service", level: "Level 2" },
      { title: "Level 2 Diploma in Business Administration", level: "Level 2" },
      { title: "Level 3 Diploma in Business Administration", level: "Level 3" },
      { title: "Level 3 Diploma in Customer Service", level: "Level 3" },
    ],
  },
  {
    slug: "leadership-and-management-courses",
    name: "Leadership & Management",
    tagline: "Step up to lead a team — or a whole service.",
    description:
      "Develop the skills to lead people and manage operations, from first-line team leading to senior management.",
    audience: "Team leaders, supervisors and managers",
    courses: [
      { title: "Diploma in Team Leading Level 2", level: "Level 2", duration: "Up to 6 months", assessment: PORTFOLIO },
      { title: "Diploma in Management Level 3", level: "Level 3" },
      { title: "Diploma in Management Level 4", level: "Level 4" },
      { title: "Diploma in Management and Leadership Level 5", level: "Level 5" },
    ],
  },
  {
    slug: "teaching-and-lecturing-courses",
    name: "Teaching & Assessing",
    tagline: "Qualify to teach, train and assess adults.",
    description:
      "Start teaching in further education or become a qualified vocational assessor.",
    audience: "New trainers, workplace trainers, lecturers and assessors",
    courses: [
      { title: "Level 3 Award in Education and Training", level: "Level 3", duration: "4–6 months", fee: "£1,000", assessment: `${PORTFOLIO}. May include written assignments and practical tasks.` },
      { title: "Level 3 Certificate in Assessing Vocational Achievement", level: "Level 3" },
      { title: "Level 5 Diploma in Education and Training", level: "Level 5" },
    ],
  },
  {
    slug: "internal-quality-assurance-courses",
    name: "Internal Quality Assurance",
    tagline: "Quality-assure assessment — and lead others who do.",
    description:
      "IQA qualifications for experienced assessors moving into quality assurance or leading an IQA team.",
    audience: "Experienced assessors and quality leads",
    courses: [
      { title: "Level 4 Award in the Internal Quality Assurance of Assessment Processes and Practice", level: "Level 4" },
      { title: "Level 4 Award in Leading the Internal Quality Assurance of Assessment Processes and Practice", level: "Level 4", duration: "9 months", fee: "£3,000", assessment: `${PORTFOLIO}, plus coursework and a practical demonstration.` },
    ],
  },
  {
    slug: "information-advice-and-guidance",
    name: "Information, Advice & Guidance",
    tagline: "Help people make confident decisions about their future.",
    description:
      "Qualifications for anyone giving careers, employment or welfare advice and guidance.",
    audience: "Careers advisers, employment coaches and support workers",
    courses: [
      { title: "Level 2 Certificate in Information, Advice or Guidance", level: "Level 2", duration: "3 months", fee: "£500", assessment: PORTFOLIO },
      { title: "Level 3 Certificate in Information, Advice or Guidance", level: "Level 3" },
      { title: "Level 4 Diploma in Advice and Guidance", level: "Level 4" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const totalCourses = categories.reduce((n, c) => n + c.courses.length, 0);
