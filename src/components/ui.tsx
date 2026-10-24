import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/courses";
import { categoryImage, partners, type Img } from "@/lib/images";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Bold uppercase label above headings. */
export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 font-label text-xs font-bold uppercase tracking-[0.08em] ${dark ? "text-accent-light" : "text-accent"}`}>
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] border px-6 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.08em] transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  /** primary = solid rust, secondary = teal outline (light bg),
   *  inverse = solid off-white (dark bg), light = off-white outline (dark bg) */
  variant?: "primary" | "secondary" | "inverse" | "light";
}) {
  const styles = {
    primary: "border-accent bg-accent text-paper hover:border-accent-dark hover:bg-accent-dark",
    secondary: "border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    inverse: "border-paper bg-paper text-ink hover:border-cream hover:bg-cream",
    light: "border-paper/60 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  }[variant];
  return (
    <Link href={href} className={`${btnBase} ${styles}`}>
      {children}
    </Link>
  );
}

/** Underlined uppercase text link with an arrow. */
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 border-b border-accent pb-0.5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-accent"
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
    </Link>
  );
}

/** Soft wave used on section edges. `className` sets the colour via text-*. */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-8 w-full sm:h-12 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d="M0 60V22C180 2 360 0 560 14S940 52 1140 40 1360 10 1440 18V60Z" fill="currentColor" />
    </svg>
  );
}

/** Hexagon with a number, for steps. */
export function HexNumber({ n }: { n: number }) {
  return (
    <span
      className="relative z-10 grid h-14 w-12 place-items-center bg-accent font-label text-lg font-bold text-paper"
      style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
    >
      {n}
    </span>
  );
}

/** Rounded photo that fills its box. Give the wrapper an aspect ratio via className. */
export function Photo({
  img,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  img: Img;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[1rem] bg-sand ${className}`}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: Img;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative bg-ink text-paper">
      <Container className={`pb-20 pt-32 sm:pb-24 sm:pt-36 ${image ? "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">{intro}</p>}
          {children && <div className="mt-8 text-paper/75">{children}</div>}
        </div>
        {image && <Photo img={image} priority className="aspect-[4/3]" />}
      </Container>
    </section>
  );
}

/** Pill badge, e.g. "12 courses" over an image. */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-cream px-3 py-1 font-label text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink">
      {children}
    </span>
  );
}

export function CategoryCard({ category }: { category: Category; index?: number }) {
  return (
    <Link
      href={`/courses/${category.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1rem] bg-paper shadow-[0_1px_2px_rgba(6,44,60,0.06)] transition-shadow hover:shadow-[0_14px_30px_-14px_rgba(6,44,60,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={categoryImage(category.slug).src}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4">
          <Badge>
            {category.courses.length} {category.courses.length === 1 ? "course" : "courses"}
          </Badge>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-ink">{category.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{category.tagline}</p>
      </div>
    </Link>
  );
}

export function CtaBand({
  title = "Not sure which course is right for you?",
  text = "Book a free, no-pressure consultation. We'll talk through your goals, check your starting level and explain funding options.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative mt-8 bg-ink text-paper">
      <Wave flip className="absolute inset-x-0 -top-px text-cream" />
      <Container className="grid gap-8 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
        <h2 className="text-4xl sm:text-5xl">{title}</h2>
        <div>
          <Eyebrow dark>Free consultation</Eyebrow>
          <p className="leading-relaxed text-paper/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="inverse">Book a consultation</ButtonLink>
            <ButtonLink href="/courses" variant="light">Browse all courses</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`divide-y ${dark ? "divide-dash" : "divide-line"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-3 first:pt-0 last:pb-0">
          <svg aria-hidden viewBox="0 0 20 20" className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-accent-light" : "text-accent"}`} fill="currentColor">
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
          </svg>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Partners() {
  return (
    <section aria-labelledby="partners-h" className="py-14">
      <Container>
        <h2 id="partners-h" className="text-center font-label text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Partners & accreditations
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((p) => (
            <li key={p.src} className="flex h-14 items-center">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                sizes="160px"
                className="h-full w-auto max-w-36 object-contain opacity-75 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
