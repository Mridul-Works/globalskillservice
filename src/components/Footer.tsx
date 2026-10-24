import Link from "next/link";
import { categories } from "@/lib/courses";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-panel text-paper/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed">
            Accredited training and qualifications for learners and employers across England.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-label text-xs font-bold uppercase tracking-[0.08em] text-accent-light">Courses</h2>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-white hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-label text-xs font-bold uppercase tracking-[0.08em] text-accent-light">Organisation</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white hover:underline">About us</Link></li>
            <li><Link href="/employers" className="hover:text-white hover:underline">For employers</Link></li>
            <li><Link href="/student-information" className="hover:text-white hover:underline">Student information</Link></li>
            <li><Link href="/careers" className="hover:text-white hover:underline">Work for us</Link></li>
            <li><Link href="/safeguarding" className="hover:text-white hover:underline">Safeguarding</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-label text-xs font-bold uppercase tracking-[0.08em] text-accent-light">Get in touch</h2>
          <address className="space-y-2 text-sm not-italic">
            <p>
              <a href={site.phoneHref} className="hover:text-white hover:underline">{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">{site.email}</a>
            </p>
            <p>
              {site.address.line1}<br />
              {site.address.line2}<br />
              {site.address.city} {site.address.postcode}
            </p>
            <p>{site.hours}</p>
          </address>
          <ul className="mt-4 flex gap-4 text-sm">
            <li><a href={site.social.facebook} className="hover:text-white hover:underline">Facebook</a></li>
            <li><a href={site.social.instagram} className="hover:text-white hover:underline">Instagram</a></li>
            <li><a href={site.social.x} className="hover:text-white hover:underline">X</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dash">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.name}. Registered in England & Wales, company no. {site.companyNumber}.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><a href={site.legal.privacy} className="hover:text-white hover:underline">Privacy policy</a></li>
            <li><a href={site.legal.cookies} className="hover:text-white hover:underline">Cookie policy</a></li>
            <li><a href={site.legal.terms} className="hover:text-white hover:underline">Terms & conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
