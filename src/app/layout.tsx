import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are stored in src/fonts (latin subset, variable weight, SIL Open Font License),
// so dev and builds never depend on reaching Google Fonts.
const eczar = localFont({
  src: "../fonts/Eczar-latin.woff2",
  weight: "400 500",
  variable: "--font-eczar",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
const montserrat = localFont({
  src: "../fonts/Montserrat-latin.woff2",
  weight: "500 700",
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
const geologica = localFont({
  src: "../fonts/Geologica-latin.woff2",
  weight: "300 500",
  variable: "--font-geologica",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Accredited training in Ilford & across England`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_GB" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${eczar.variable} ${montserrat.variable} ${geologica.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
