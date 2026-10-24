import Image from "next/image";
import { categories, totalCourses } from "@/lib/courses";
import { images } from "@/lib/images";
import {
  Badge,
  ButtonLink,
  CategoryCard,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  HexNumber,
  Partners,
  TextLink,
  Wave,
} from "@/components/ui";

const stats = [
  { value: String(totalCourses), label: "Accredited courses", src: "/images/why/expertise.jpg" },
  { value: String(categories.length), label: "Subject areas", src: "/images/why/flexible.jpg" },
  { value: "Monthly", label: "Course start dates", src: "/images/why/supportive.jpg" },
  { value: "Entry–5", label: "Levels, beginner to manager", src: "/images/why/continuous-improvement.jpg" },
];

const reasons = [
  { title: "Specialist tutors", text: "Assessors with hands-on experience in care, education and management." },
  { title: "Flexible delivery", text: "Most courses are taught and assessed online, around your shifts." },
  { title: "One-to-one support", text: "Study-skills help, workshops and a named tutor when you need it." },
  { title: "Recognised awards", text: "Qualifications through iCQ, NCFE CACHE and other awarding bodies." },
];

const steps = [
  { title: "Choose your course", text: "Browse by subject or level, or book a free consultation and we'll recommend the right fit.", link: { href: "/courses", label: "Explore courses" } },
  { title: "Enrol", text: "We check your starting level, talk through funding and send your timetable and learning materials.", link: { href: "/contact", label: "Enquire now" } },
  { title: "Learn & get certified", text: "Build your portfolio with one-to-one support. Your work is assessed, quality-assured and certificated.", link: { href: "/student-information", label: "Student info" } },
];

const OMT = "The Oliver McGowan Mandatory Training on Learning Disability and Autism";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-paper">
        <Container className="grid gap-10 pb-14 pt-36 sm:pt-44 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl">
            Qualifications that move your career forward.
          </h1>
          <div>
            <Eyebrow dark>Accredited training · Ilford & online</Eyebrow>
            <p className="leading-relaxed text-paper/75">
              Health & Social Care, Functional Skills, Business, Teaching and Leadership courses — delivered flexibly
              for learners and employers across England.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/courses" variant="inverse">Find your course</ButtonLink>
              <ButtonLink href="/contact" variant="light">Free consultation</ButtonLink>
            </div>
          </div>
        </Container>

        {/* Photo tiles with stats */}
        <ul className="grid grid-cols-2 gap-px bg-ink lg:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label} className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.4]">
              <Image src={s.src} alt="" fill priority={i < 2} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel/85 via-panel/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-display text-4xl leading-none sm:text-5xl">{s.value}</p>
                <p className="mt-2 font-label text-[0.7rem] font-bold uppercase tracking-[0.08em] sm:text-xs">{s.label}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="h-10 sm:h-14" />
      </section>

      {/* Featured: Oliver McGowan */}
      <section className="pb-6 pt-16 sm:pt-20">
        <Container>
          <div className="grid overflow-hidden rounded-[1rem] bg-paper lg:grid-cols-[1fr_1.25fr]">
            <div className="relative aspect-[3/2] lg:aspect-auto">
              <Image src={images.oliverMcGowan.src} alt={images.oliverMcGowan.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <span className="absolute left-4 top-4"><Badge>Now booking</Badge></span>
            </div>
            <div className="p-8 sm:p-12">
              <Eyebrow>Mandatory for health & care staff</Eyebrow>
              <h2 className="text-3xl text-ink sm:text-4xl">{OMT}</h2>
              <p className="mt-4 leading-relaxed text-muted">
                The standard training for everyone working in health and social care in England. Book places for
                yourself or your whole team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`/contact?course=${encodeURIComponent(OMT)}`}>Book a place</ButtonLink>
                <ButtonLink href="/courses/health-and-social-care-courses" variant="secondary">Care courses</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl text-ink sm:text-5xl">
                Find the right course for your next step.
              </h2>
              <p className="mt-3 text-muted">Browse {totalCourses} courses across {categories.length} subject areas.</p>
            </div>
            <ButtonLink href="/courses">View all courses</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Full-bleed photo with overlay box */}
      <section className="relative">
        <Wave flip className="absolute inset-x-0 -top-px z-10 text-cream" />
        <div className="relative min-h-[36rem] sm:min-h-[40rem]">
          <Image src={images.graduation.src} alt={images.graduation.alt} fill sizes="100vw" className="object-cover" />
          <Container className="relative flex min-h-[36rem] items-end pb-20 pt-24 sm:min-h-[40rem]">
            <div className="max-w-xl rounded-[1rem] bg-ink p-8 text-paper shadow-2xl sm:p-10">
              <Eyebrow dark>Why Global Skills Services</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">Training designed around real working lives.</h2>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {reasons.map((r) => (
                  <div key={r.title}>
                    <dt className="font-label text-sm font-semibold">{r.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-paper/70">{r.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <ButtonLink href="/about" variant="inverse">About us</ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Learners / employers */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1rem] bg-paper p-8 sm:p-10">
            <Eyebrow>For learners</Eyebrow>
            <h2 className="text-3xl text-ink sm:text-4xl">Progress in your career, on your schedule.</h2>
            <div className="mt-6 text-muted">
              <CheckList items={["Online learning that fits around shifts", "A named tutor and one-to-one support", "No entry requirements for many courses"]} />
            </div>
            <div className="mt-8"><ButtonLink href="/courses" variant="secondary">Browse courses</ButtonLink></div>
          </div>
          <div className="rounded-[1rem] bg-accent p-8 text-paper sm:p-10">
            <Eyebrow dark>For employers</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Train your team and stay compliant.</h2>
            <div className="mt-6 text-paper/85">
              <CheckList dark items={["Free training needs analysis for your organisation", "Group bookings and bespoke programmes", "Mandatory and regulatory training covered"]} />
            </div>
            <div className="mt-8"><ButtonLink href="/employers" variant="inverse">Employer services</ButtonLink></div>
          </div>
        </Container>
      </section>

      {/* Where to begin */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <h2 className="text-center text-4xl text-ink sm:text-5xl">How to get started</h2>
          <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            <span aria-hidden className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-accent/40 md:block" />
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <HexNumber n={i + 1} />
                <h3 className="mt-6 text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
                <div className="mt-5"><TextLink href={s.link.href}>{s.link.label}</TextLink></div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Partners />

      <CtaBand />
    </>
  );
}
