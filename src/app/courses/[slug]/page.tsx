import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, CategoryCard, Container, CtaBand, PageHeader } from "@/components/ui";
import { categories, getCategory } from "@/lib/courses";
import { categoryImage } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: `${category.name} courses`, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = categories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader image={{ ...categoryImage(category.slug), alt: `${category.name} learners` }} eyebrow="Courses" title={`${category.name} courses`} intro={category.description}>
        <p className="text-sm text-paper/75">
          <span className="font-label text-xs font-bold uppercase tracking-[0.08em] text-accent-light">Ideal for:</span> {category.audience}
        </p>
      </PageHeader>

      <Container className="py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/courses" className="hover:underline">All courses</Link> <span aria-hidden>/</span>{" "}
          <span className="text-ink">{category.name}</span>
        </nav>

        <ul className="space-y-4">
          {category.courses.map((course) => {
            const facts = [
              ["Level", course.level],
              ["Duration", course.duration ?? "Ask us"],
              ["Fee", course.fee ?? "Ask us"],
              ["Awarding body", course.awardingBody ?? "Ask us"],
            ];
            return (
              <li
                key={course.title}
                className={`rounded-xl border bg-paper p-6 sm:p-8 ${course.highlight ? "border-accent" : "border-line"}`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    {course.highlight && (
                      <span className="mb-3 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                        Mandatory for health & care staff
                      </span>
                    )}
                    <h2 className="text-2xl text-ink sm:text-3xl">{course.title}</h2>
                    {course.assessment && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        <span className="font-medium text-ink">Assessment:</span> {course.assessment}
                      </p>
                    )}
                    <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {facts.map(([k, v]) => (
                        <div key={k}>
                          <dt className="text-xs uppercase tracking-[0.12em] text-muted">{k}</dt>
                          <dd className="mt-0.5 text-sm font-medium">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="shrink-0">
                    <ButtonLink href={`/contact?course=${encodeURIComponent(course.title)}`}>Enquire</ButtonLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-muted">
          Start dates run monthly. Funding may be available — we&apos;ll talk you through options during your free consultation.
        </p>
      </Container>

      <section className="border-t border-line bg-sand/50 py-16">
        <Container>
          <h2 className="text-4xl text-ink">Other subject areas</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
