import type { Metadata } from "next";
import { images } from "@/lib/images";
import { ButtonLink, Container, CtaBand, Eyebrow, PageHeader, Partners, Photo } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Who we are, our mission and vision, and how we support learners and employers across England.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        image={images.aboutStudy}
        eyebrow="About us"
        title="Training that leads to lasting results."
        intro={`${site.name} is an independent training provider based in Ilford, delivering accredited and non-accredited courses to learners and organisations across England.`}
      />

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="text-5xl text-ink">Real progress in education and work.</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We deliver training that makes a measurable, lasting difference — helping people gain qualifications,
            move into work and progress in their careers.
          </p>
        </div>
        <div>
          <Eyebrow>Our vision</Eyebrow>
          <h2 className="text-5xl text-ink">Closing the skills gap, together.</h2>
          <ul className="mt-4 space-y-3 leading-relaxed text-muted">
            <li>Build job readiness, enterprise and fresh thinking in every learner.</li>
            <li>Partner closely with employers and other organisations.</li>
            <li>Help narrow the skills gap and support local economic growth.</li>
          </ul>
        </div>
      </Container>

      <Container className="grid gap-5 pb-16 sm:grid-cols-2 sm:pb-20">
        <Photo img={images.aboutIdeas} className="aspect-[4/3]" />
        <Photo img={images.team} className="aspect-[4/3]" />
      </Container>

      <section className="border-t border-line py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Photo img={images.matrix} className="aspect-[10/7] border border-line" />
          <div>
            <Eyebrow>Quality</Eyebrow>
            <h2 className="text-4xl text-ink sm:text-5xl">matrix Standard accredited.</h2>
            <p className="mt-4 leading-relaxed text-muted">
              We hold matrix accreditation, the national quality standard for organisations that deliver information,
              advice and guidance. Our qualifications are awarded through recognised bodies including iCQ and NCFE
              CACHE.
            </p>
          </div>
        </Container>
      </section>

      <Partners />

      <section className="border-y border-line bg-paper py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl text-ink">Want to join our team?</h2>
            <p className="mt-2 text-muted">We&apos;re always looking for tutors, assessors and quality specialists.</p>
          </div>
          <ButtonLink href="/careers" variant="secondary">See opportunities</ButtonLink>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
