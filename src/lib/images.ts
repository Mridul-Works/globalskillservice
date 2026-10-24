// Images migrated from the live site (public/images). Alt text is written for each one,
// because the old site had none.

export type Img = { src: string; alt: string };

export const logo: Img = { src: "/images/logo.png", alt: "Global Skills Services" };

export const images = {
  heroLearners: { src: "/images/about/about-3.webp", alt: "Three learners reading through course material together" },
  oliverMcGowan: { src: "/images/hero/oliver-mcgowan.jpg", alt: "Oliver McGowan Mandatory Training on Learning Disability and Autism" },
  graduation: { src: "/images/hero/graduation.jpg", alt: "Graduates throwing their caps in the air at sunset" },
  learners: { src: "/images/hero/learners.jpg", alt: "Two smiling learners at a table" },
  aboutStudy: { src: "/images/about/about-1.webp", alt: "A learner studying on a laptop" },
  aboutIdeas: { src: "/images/about/about-2.webp", alt: "A learner sitting in front of a wall of sketched ideas" },
  team: { src: "/images/about/about-4.webp", alt: "Advisers with headsets working at laptops" },
  employers: { src: "/images/student/policies.jpg", alt: "Colleagues reviewing work together at a table" },
  careers: { src: "/images/why/high-performing.jpg", alt: "A tutor writing on a whiteboard" },
  contact: { src: "/images/banners/contact.jpg", alt: "An adviser on a headset taking a call" },
  courses: { src: "/images/banners/courses.jpg", alt: "A group of learners chatting in a classroom" },
  studentInfo: { src: "/images/banners/student-information.png", alt: "A learner working at a computer" },
  studentSupport: { src: "/images/student/student.png", alt: "A tutor helping a learner with their work" },
  safeguarding: { src: "/images/banners/safeguarding.jpg", alt: "A patient in a hospital bed using a tablet" },
  matrix: { src: "/images/gallery/matrix-accreditation.jpg", alt: "Announcement: Global Skills Services has achieved matrix accreditation" },
} satisfies Record<string, Img>;

/** Category photo, keyed by category slug. */
export const categoryImage = (slug: string): Img => ({
  src: `/images/categories/${slug}.jpg`,
  alt: "",
});

export const whyImages: Record<string, string> = {
  "Specialist tutors": "/images/why/expertise.jpg",
  "Flexible delivery": "/images/why/flexible.jpg",
  "Monthly start dates": "/images/why/supportive.jpg",
  "One-to-one support": "/images/why/experience.jpg",
  "Recognised awards": "/images/why/high-performing.jpg",
  "Always improving": "/images/why/continuous-improvement.jpg",
};

export const partners: (Img & { w: number; h: number })[] = [
  { src: "/images/partners/icq-awards.png", alt: "iCQ Awards", w: 1497, h: 998 },
  { src: "/images/partners/ncfe.jpg", alt: "NCFE", w: 100, h: 40 },
  { src: "/images/partners/cache.png", alt: "CACHE", w: 73, h: 32 },
  { src: "/images/partners/aoht.png", alt: "Association of Healthcare Trainers", w: 260, h: 199 },
  { src: "/images/partners/disability-confident.png", alt: "Disability Confident Committed", w: 312, h: 142 },
  { src: "/images/partners/ico.jpg", alt: "Registered with the Information Commissioner's Office", w: 87, h: 55 },
  { src: "/images/partners/sme-climate-hub.png", alt: "SME Climate Hub", w: 378, h: 375 },
];
