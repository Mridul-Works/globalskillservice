import type { Metadata } from "next";
import { images } from "@/lib/images";
import { ButtonLink, CheckList, Container, CtaBand, Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Training for employers",
  description: "Training needs analysis, group bookings and bespoke qualification programmes for care providers and other employers.",
};

const services = [
  {
    title: "Training needs analysis",
    text: "We review your team's current skills and compliance requirements, then recommend a clear, costed training plan.",
  },
  {
    title: "Mandatory & compliance training",
    text: "Including the Oliver McGowan Mandatory Training, the Adult Social Care Certificate, first aid and medication awareness.",
  },
  {
    title: "Group & cohort programmes",
    text: "Enrol several staff at once on a shared start date, with progress updates for managers.",
  },
  {
    title: "Leadership development",
    text: "Team leading and management diplomas, up to the Level 5 for registered care managers.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHeader
        image={images.employers}
        eyebrow="For employers"
        title="A skilled, compliant workforce — without the admin."
        intro="We work with care providers and other organisations to plan, deliver and track staff training, so you can focus on running your service."
      >
        <ButtonLink href="/contact?type=employer">Request a training needs analysis</ButtonLink>
      </PageHeader>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-paper p-7">
              <h2 className="text-3xl text-ink">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>What you get</Eyebrow>
            <h2 className="text-5xl text-ink">Training that fits around rotas.</h2>
          </div>
          <CheckList
            items={[
              "Online delivery and assessment for most courses, so staff stay on shift",
              "Monthly start dates and small groups",
              "A named contact for your organisation",
              "Regular progress updates on each learner",
              "Help identifying available funding",
            ]}
          />
        </div>
      </Container>

      <CtaBand
        title="Tell us what your team needs."
        text="A short call is all it takes. We'll come back with a recommended plan and costs — no obligation."
      />
    </>
  );
}
