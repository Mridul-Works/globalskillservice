import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    // Dark section so the transparent header stays readable.
    <section className="bg-ink text-paper">
      <Container className="pb-28 pt-40 text-center sm:pb-36 sm:pt-48">
        <p className="font-display text-7xl text-accent-light">404</p>
        <h1 className="mt-4 text-5xl">We couldn&apos;t find that page.</h1>
        <p className="mt-3 text-paper/70">It may have moved when we updated our website.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/courses" variant="inverse">Browse courses</ButtonLink>
          <ButtonLink href="/" variant="light">Home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
