import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/images";
import { CheckList, Container, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work for us",
  description: "Tutor, assessor and quality assurance opportunities at Global Skills Services.",
};

const roles = [
  "Functional Skills Tutor",
  "Health and Social Care Assessor",
  "Business and Management Assessor",
  "Early Years and Teaching & Learning Assessor",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        image={images.careers}
        eyebrow="Work for us"
        title="Help adults build better careers."
        intro="We recruit tutors, assessors, coaches, programme managers and quality assurance specialists."
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl text-ink">Roles we recruit for</h2>
          <ul className="mt-5 divide-y divide-line rounded-2xl border border-line bg-paper">
            {roles.map((r) => (
              <li key={r} className="flex items-center justify-between px-5 py-4">
                <span className="font-medium">{r}</span>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${r}`)}`}
                  className="text-sm font-medium text-accent hover:text-ink"
                >
                  Apply
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Send your CV and a short cover note to{" "}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-ink">What we look for</h2>
          <div className="mt-5">
            <CheckList
              items={[
                "Subject knowledge and experience in teaching, assessing or lecturing",
                "Enthusiasm for helping learners develop",
                "Ability to build positive working relationships",
                "Willingness to share skills and support colleagues",
              ]}
            />
          </div>
          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-accent-soft p-6 text-sm text-ink">
            <Image
              src="/images/work/disability-confident.png"
              alt="Disability Confident Committed"
              width={312}
              height={142}
              className="h-12 w-auto shrink-0 rounded bg-paper p-1"
            />
            <p>
            We are an equal opportunities employer and a Disability Confident employer. Applicants who declare a
            disability and meet the minimum criteria are guaranteed an interview.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
