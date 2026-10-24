import type { Metadata } from "next";
import { images } from "@/lib/images";
import { CheckList, Container, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safeguarding, health & safety",
  description: "How we keep learners and staff safe, and how to report a safeguarding concern.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHeader
        image={images.safeguarding}
        eyebrow="Safeguarding · Health & safety"
        title="Everyone has the right to learn safely."
        intro="We are committed to protecting everyone who uses our services from harm, and to treating every person with respect and fairness."
      />

      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="h-fit rounded-3xl bg-panel p-8 text-cream sm:p-10">
          <h2 className="text-4xl">Report a concern</h2>
          <p className="mt-3 text-cream/80">
            If you are worried about your own safety or someone else&apos;s, speak to our Designated Safeguarding Lead.
          </p>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/60">Designated Safeguarding Lead</dt>
              <dd className="mt-1 text-lg font-medium">{site.safeguardingLead}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/60">Phone</dt>
              <dd className="mt-1"><a href={site.phoneHref} className="text-lg font-medium underline">{site.phone}</a></dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/60">Email</dt>
              <dd className="mt-1"><a href={`mailto:${site.email}`} className="underline">{site.email}</a></dd>
            </div>
          </dl>
          <p className="mt-8 rounded-xl bg-white/10 p-4 text-sm">
            If someone is in immediate danger, call <strong>999</strong>.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-4xl text-ink">Our commitments</h2>
            <div className="mt-5">
              <CheckList
                items={[
                  "Every concern is taken seriously and handled confidentially.",
                  "Learners can access online training on safeguarding, Prevent, and equality & diversity.",
                  "Risk assessments are completed for every delivery location.",
                  "Safeguarding and health & safety policies are reviewed at least annually.",
                ]}
              />
            </div>
          </section>
          <section>
            <h2 className="text-4xl text-ink">Staying safe online</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Much of your learning happens online. Keep your passwords private, be cautious with links and attachments,
              and tell your tutor straight away if anything online makes you feel uncomfortable.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
