import type { Metadata } from "next";
import { images } from "@/lib/images";
import { ButtonLink, Container, CtaBand, Eyebrow, PageHeader, Photo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Student information",
  description: "Start dates, learning options, support, funding and policies for Global Skills Services learners.",
};

const topics = [
  { title: "Start dates", text: "Small groups start every month. You can study more than one course at a time." },
  { title: "How you'll learn", text: "Most courses are taught and assessed online. Some technical courses include face-to-face sessions and work experience." },
  { title: "Learning support", text: "Tell us about any learning difficulty and we'll put the right workshops, materials and personal support in place." },
  { title: "One-to-one help", text: "Individual support may be available on accredited courses, and we can refer you to local counselling if you need it." },
  { title: "Study skills", text: "Help with written English, academic writing, referencing, research and critical thinking." },
  { title: "IT access", text: "Use of PCs, laptops, tablets and free Wi-Fi, plus online learning resources." },
  { title: "Careers advice", text: "Guidance on CVs, job applications, interviews and choosing your next course." },
  { title: "Funding", text: "Our advisers will explain the funding options that may apply to you before you enrol." },
  { title: "Enrolment", text: "Apply online or by phone. Once enrolled, you'll receive your course timetable." },
];

const policies = [
  "Appeals", "Complaints", "Data protection", "GDPR", "Health & safety", "Plagiarism",
  "Safeguarding", "Withdrawal",
];

export default function StudentInfoPage() {
  return (
    <>
      <PageHeader
        image={images.studentInfo}
        eyebrow="Student information"
        title="Everything you need to know before you start."
        intro="How courses run, the support available to you, and the policies that protect you while you study."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <div key={t.title} className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="text-2xl text-ink">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Photo img={images.studentSupport} className="aspect-[3/2]" />
          <div>
            <Eyebrow>Support</Eyebrow>
            <h2 className="text-4xl text-ink sm:text-5xl">You won&apos;t study alone.</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Small groups, a named tutor and drop-in sessions mean help is always close. Tell us early about anything
              that might affect your learning and we&apos;ll plan support around you.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-sand/70 p-8 sm:p-10">
          <h2 className="text-4xl text-ink">Policies & procedures</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Our policies are reviewed at least once a year. Ask us for a copy of any policy.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {policies.map((p) => (
              <li key={p} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium">
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="secondary">Request a policy</ButtonLink>
          </div>
        </div>
      </Container>

      <CtaBand />
    </>
  );
}
