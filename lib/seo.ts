import type { Metadata } from "next";

import { EXPERIENCE, PROJECTS, SKILLS } from "@/lib/portfolio-data";

/** Public site URL — set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://yourdomain.com). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = getSiteUrl();
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

/** Hostname for robots.txt `Host` directive (no protocol). */
export function getSiteHost(): string {
  try {
    return new URL(getSiteUrl()).host;
  } catch {
    return "localhost:3000";
  }
}

export const SITE = {
  name: "Jannatul Jarin",
  title:
    "Jannatul Jarin | Digital Marketer, SEO & Visual Strategy Portfolio",
  tagline: "Digital Marketing & Visual Strategist",
  description:
    "Digital marketer and visual strategist specializing in SEO, SEM, social media growth, content, analytics, and brand-focused design. Portfolio: technical audits, backlinks, keyword research, on-page SEO, and measurable growth.",
  email: "jannatjarin116@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jannatul-jarin/",
  resume:
    "https://www.scribd.com/document/982910912/Resume-Janantul-Jarin?secret_password=gGmLDcWvdEEJBFrJBzqT",
  /** Hero / default OG image (served from /public). */
  ogImagePath: "/profile/Jannatul%20Jarin%20marketer.png",
  locale: "en_US",
} as const;

const EXTRA_KEYWORDS = [
  "digital marketing portfolio",
  "SEO specialist",
  "social media marketing",
  "content marketing",
  "Bangladesh marketer",
  "freelance digital marketer",
  "visual strategy",
  "growth marketing",
] as const;

export const KEYWORDS: string[] = [
  ...SKILLS.map((s) => s),
  ...EXTRA_KEYWORDS,
];

function buildVerification(): Metadata["verification"] | undefined {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();
  if (!google && !yandex && !bing) return undefined;
  return {
    ...(google && { google: [google] }),
    ...(yandex && { yandex: [yandex] }),
    ...(bing && { other: { "msvalidate.01": bing } }),
  };
}

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImage = absoluteUrl(SITE.ogImagePath);
  const verification = buildVerification();

  return {
    metadataBase: new URL(`${siteUrl}/`),
    title: {
      default: SITE.title,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: siteUrl }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords: KEYWORDS,
    category: "marketing",
    classification: "Portfolio",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: siteUrl,
      siteName: SITE.name,
      title: SITE.title,
      description: SITE.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.title,
      description: SITE.description,
      images: [ogImage],
    },
    ...(verification && { verification }),
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: SITE.name,
      statusBarStyle: "black-translucent",
    },
    other: {
      "msapplication-TileColor": "#020617",
    },
  };
}

/** JSON-LD @graph — WebSite, ProfilePage, Person, ItemList (projects), BreadcrumbList. */
export function buildJsonLdGraph() {
  const base = getSiteUrl();
  const id = (fragment: string) => `${base}/#${fragment}`;

  const sameAs = [SITE.linkedIn, SITE.resume].filter(Boolean);

  const worksFor = EXPERIENCE.map((exp) => ({
    "@type": "Organization" as const,
    name: exp.company,
    description: `${exp.type}. ${exp.quote}`,
  }));

  const portfolioItems = PROJECTS.map((project, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "CreativeWork" as const,
      name: project.title,
      description: project.description,
      url: `${base}/work/${project.slug}`,
      ...(project.imageSrc && {
        image: absoluteUrl(project.imageSrc),
      }),
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": id("website"),
        name: SITE.name,
        alternateName: SITE.tagline,
        url: base,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": id("person") },
      },
      {
        "@type": "ProfilePage",
        "@id": id("webpage"),
        url: `${base}/`,
        name: SITE.title,
        description: SITE.description,
        inLanguage: "en",
        isPartOf: { "@id": id("website") },
        about: { "@id": id("person") },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(SITE.ogImagePath),
          caption: `${SITE.name} portrait`,
        },
        breadcrumb: { "@id": id("breadcrumb") },
      },
      {
        "@type": "BreadcrumbList",
        "@id": id("breadcrumb"),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": id("person"),
        name: SITE.name,
        jobTitle: SITE.tagline,
        description: SITE.description,
        url: `${base}/`,
        image: absoluteUrl(SITE.ogImagePath),
        email: SITE.email,
        sameAs,
        knowsAbout: [...SKILLS],
        worksFor,
        subjectOf: { "@id": id("portfolio") },
      },
      {
        "@type": "ItemList",
        "@id": id("portfolio"),
        name: `${SITE.name} — Selected projects`,
        description:
          "SEO, social media, content, and growth work samples and case highlights.",
        numberOfItems: PROJECTS.length,
        itemListElement: portfolioItems,
      },
    ],
  };
}
