import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects from the old site's URLs so existing links and search rankings carry over.
  async redirects() {
    return [
      { source: "/course", destination: "/courses", permanent: true },
      { source: "/course-detail/:slug", destination: "/courses/:slug", permanent: true },
      { source: "/mission", destination: "/about", permanent: true },
      { source: "/work", destination: "/careers", permanent: true },
      { source: "/job-detail/:slug*", destination: "/careers", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/health-safety", destination: "/safeguarding", permanent: true },
      { source: "/gallery", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
