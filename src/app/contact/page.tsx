import type { Metadata } from "next";
import { images } from "@/lib/images";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Enquire about a course or book a free consultation. Call ${site.phone} or send us a message.`,
};

type Props = { searchParams: Promise<{ course?: string; type?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { course = "", type = "learner" } = await searchParams;

  return (
    <>
      <PageHeader
        image={images.contact}
        eyebrow="Contact"
        title="Let's talk about your next step"
        intro="Send an enquiry or book a free consultation. We reply within one working day."
      />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-line bg-paper p-6 sm:p-10">
          <EnquiryForm defaultCourse={course} defaultType={type === "employer" ? "employer" : "learner"} />
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-3xl text-ink">Call or email</h2>
            <p className="mt-3">
              <a href={site.phoneHref} className="text-lg font-medium text-accent hover:underline">{site.phone}</a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>
            </p>
            <p className="mt-2 text-sm text-muted">{site.hours}</p>
          </div>
          <div>
            <h2 className="text-3xl text-ink">Visit us</h2>
            <address className="mt-3 not-italic leading-relaxed">
              {site.address.line1}<br />
              {site.address.line2}<br />
              {site.address.city} {site.address.postcode}
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postcode}`,
              )}`}
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="rounded-2xl bg-accent-soft p-6">
            <h2 className="text-2xl text-ink">Safeguarding concern?</h2>
            <p className="mt-2 text-sm text-ink">
              Contact our Designated Safeguarding Lead, {site.safeguardingLead}, on {site.phone}. If someone is in
              immediate danger, call 999.
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
