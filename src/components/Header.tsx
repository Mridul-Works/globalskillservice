"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the hero at the top of the page; solid once scrolled or when the menu is open.
  const solid = scrolled || open;

  return (
    // Fixed so every page's dark hero runs up behind it to the very top.
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-7xl rounded-[0.75rem] text-paper transition-[background-color,box-shadow] duration-300 ${
          solid ? "bg-accent shadow-[0_10px_30px_-12px_rgba(3,24,32,0.6)]" : "bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo inverted />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`border-b-2 py-1 font-label text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                        active ? "border-accent-light text-paper" : "border-transparent text-paper/85 hover:text-paper"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="hidden font-label text-xs font-semibold tracking-wide text-paper/85 hover:text-paper xl:block">
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-[var(--radius-btn)] bg-paper px-5 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-cream sm:block"
            >
              Enquire now
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] text-paper hover:bg-accent-dark lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-paper/15 lg:hidden">
            <ul className="px-4 py-3">
              {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-3 font-label text-sm font-semibold uppercase tracking-[0.06em]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-paper/15 pb-2 pt-3">
                <a href={site.phoneHref} className="text-sm text-paper/85">
                  Call {site.phone}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
