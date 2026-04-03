export const SKILLS = [
  "Social Media Strategy & Growth",
  "Advanced SEO & GEO",
  "Content Writing & Copy",
  "Poster & Visual Design",
  "Search Engine Marketing (SEM)",
  "Analytics & Reporting",
  "Brand Psychology",
  "Market Planning",
  "Organic Growth Cheat Codes",
  "Lead Collection",
  "Marketing Consulting",
  "Team collaboration",
] as const;

export type Experience = {
  company: string;
  type: string;
  quote: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Rafusoft",
    type: "Software Firm",
    quote:
      "Social Media management, poster designing, reels making, collaborating with designer team, performing multi-tasking jobs at the same time, SEO.",
  },
  {
    company: "Diptyquest",
    type: "Recruitment",
    quote:
      "Social Media Management, effective posters design, seo, content creation, market research, team work with research team.",
  },
  {
    company: "Aponn Group",
    type: "Mother Company",
    quote:
      "Write effective catalogue for rice production, content creation, team work with design team, manage additional office tasks as well.",
  },
  {
    company: "TI-Channel",
    type: "Islamic OTT Platform",
    quote:
      "Research on islamic television programs, wrote effective show names, slogan and story through daily content posting and posters or videos editing.",
  },
  {
    company: "AllStoreBD",
    type: "E-Commerce Platform",
    quote:
      "Competitor analysis, content writing, product seo, daily social media posting, team work with design team.",
  },
  {
    company: "NiramBD",
    type: "Women's Collection Shop",
    quote:
      "Designed posters on women collection products, crafted motion on canva, edit product images and product seo, created ai videos.",
  },
  {
    company: "Online Food Biz",
    type: "Food Industry",
    quote:
      "Creating appetizing visual content, managing daily orders, customer engagement, social media growth strategies.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Clear reporting, fast turnaround on creatives, and SEO fixes we could actually measure. Organic sessions climbed within the first quarter.",
    name: "Anonymous client",
    role: "Founder",
    company: "E‑commerce brand",
  },
  {
    quote:
      "She balanced brand voice with performance copy—our socials finally looked cohesive and the content calendar was realistic for our team.",
    name: "Anonymous client",
    role: "Marketing lead",
    company: "Regional services company",
  },
  {
    quote:
      "Technical audit was actionable, not a PDF graveyard. We prioritized fixes by impact and saw fewer crawl errors in Search Console.",
    name: "Anonymous client",
    role: "Operations manager",
    company: "SMB with WordPress site",
  },
];

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  metrics: string;
  /** Short, concrete result lines (timeframe, %, or scope). */
  outcomes: string[];
  category: string;
  categoryClassName: string;
  imageSrc: string | null;
  imageAlt: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: "technical-site-audit",
    title: "Technical Site Audit",
    description:
      "Conducted a full technical SEO audit, fixing crawl errors and optimizing site structure for different clients.",
    metrics: "Technical issues identification and solve",
    outcomes: [
      "Prioritized fixes by crawl budget and revenue pages (2–4 week roadmap).",
      "Resolved indexation and redirect chains on representative SMB sites.",
      "Documented fixes for dev handoff with before/after Search Console notes.",
    ],
    category: "SEO",
    categoryClassName: "bg-[#00e676] text-black",
    imageSrc: "/website-audit/website%20audit%20jarin.png",
    imageAlt: "Technical SEO audit",
  },
  {
    slug: "high-authority-backlinks",
    title: "90+ PA/DA Backlinks",
    description:
      "Authority backlinks from high-DA websites to improve search trust and rankings.",
    metrics: "High DA / DR · Trusted real sites",
    outcomes: [
      "Placements from 90+ PA/DA properties where niche-relevant.",
      "Diversified anchor mix to reduce over-optimization risk.",
      "Monthly link snapshot for transparency with stakeholders.",
    ],
    category: "SEO",
    categoryClassName: "bg-[#00e676] text-black",
    imageSrc: "/backlinks/backlinks%20by%20jarin%2090%2B%20DA.png",
    imageAlt: "Backlinking project",
  },
  {
    slug: "keyword-research",
    title: "Keyword Research",
    description:
      "Improves website visibility and rankings through structured optimization.",
    metrics: "Rankable & intent matched · Low difficulty & competition",
    outcomes: [
      "Intent-mapped keyword clusters aligned to funnel stages.",
      "Low-difficulty wins identified for faster ranking traction.",
      "Competitor gap list for content and on-page expansion.",
    ],
    category: "SEO",
    categoryClassName: "bg-[#00e676] text-black",
    imageSrc: null,
    imageAlt: "Keyword research",
  },
  {
    slug: "on-page-wordpress-seo",
    title: "On Page WordPress (Yoast, Rank Math)",
    description:
      "Delivered high on-page SEO quality, scoring 80+ on Yoast and 90+ on Rank Math.",
    metrics:
      "Meta tag setup · Image, video & voice optimization · Internal linking",
    outcomes: [
      "Yoast 80+ / Rank Math 90+ scores on target templates.",
      "Schema-ready meta, media alt text, and internal link hubs.",
      "Editor checklist so the client team can keep scores high.",
    ],
    category: "SEO",
    categoryClassName: "bg-[#00e676] text-black",
    imageSrc: null,
    imageAlt: "On-page SEO",
  },
  {
    slug: "social-growth-strategy",
    title: "Social Growth",
    description:
      "Monthly content calendar and growth strategy with market analysis, clear roadmap, measurable goals & effective content writing.",
    metrics: "Strategy · Content planning",
    outcomes: [
      "30-day content themes tied to launches and promotions.",
      "Posting rhythm matched to platform algorithms and team capacity.",
      "KPI definitions (reach, saves, leads) for monthly review.",
    ],
    category: "SMM",
    categoryClassName: "bg-[#2979ff] text-white",
    imageSrc:
      "https://placehold.co/600x400/222/FFF?text=Social+Strategy",
    imageAlt: "Social strategy",
  },
  {
    slug: "poster-visual-design",
    title: "Poster Design",
    description:
      "Provides brand messages into eye-catching visual stories.",
    metrics: "Gemini · Canva Pro",
    outcomes: [
      "Campaign-ready posters in brand palettes and safe zones.",
      "Motion variants for reels/stories where needed.",
      "Asset packs sized for key platforms (feed, story, print).",
    ],
    category: "Visuals",
    categoryClassName: "bg-orange-600 text-white",
    imageSrc: "https://placehold.co/600x400/222/FFF?text=Poster+Design",
    imageAlt: "Poster design",
  },
  {
    slug: "seo-content-writing",
    title: "Content Writing",
    description: "Turns brand into people's faith with effective writing.",
    metrics: "Human written · SEO blog",
    outcomes: [
      "Outline → draft → optimize workflow with target keywords.",
      "Readable, human tone with clear H2/H3 structure for skim readers.",
      "Meta descriptions and social snippets per piece.",
    ],
    category: "Content",
    categoryClassName: "bg-[#ffea00] text-black",
    imageSrc: "https://placehold.co/600x400/222/FFF?text=Blog+Content",
    imageAlt: "Blog content",
  },
  {
    slug: "performance-reporting-analytics",
    title: "Performance Reporting",
    description:
      "Monthly deep-dive analytics reports correlating spend with ROI for a digital agency client.",
    metrics: "Google Analytics · Data viz",
    outcomes: [
      "Channel-level ROI narrative for leadership summaries.",
      "Funnel drop-off callouts with next-step experiments.",
      "Month-over-month dashboards stakeholders actually use.",
    ],
    category: "Growth",
    categoryClassName: "bg-[#d500f9] text-white",
    imageSrc: "https://placehold.co/600x400/222/FFF?text=Growth+Report",
    imageAlt: "Growth report",
  },
  {
    slug: "map-citations-local-seo",
    title: "Map Citation",
    description: "To improve Google Maps visibility and local trust.",
    metrics: "Local authority · Map rankings",
    outcomes: [
      "NAP consistency checks across high-trust directories.",
      "Category and service-area alignment for Maps relevance.",
      "Citation tracker for ongoing accuracy.",
    ],
    category: "NAP",
    categoryClassName: "bg-red-600 text-white",
    imageSrc: "https://placehold.co/600x400/222/FFF?text=Map+Citation",
    imageAlt: "Map citation",
  },
  {
    slug: "google-business-profile",
    title: "Google My Business",
    description: "To improve Google Maps visibility and local trust.",
    metrics: "Local authority · Map rankings",
    outcomes: [
      "Profile completeness, photos, and Q&A hygiene.",
      "Post cadence for offers and updates.",
      "Review response templates aligned to brand voice.",
    ],
    category: "NAP",
    categoryClassName: "bg-red-600 text-white",
    imageSrc:
      "https://placehold.co/600x400/222/FFF?text=Google+My+Business",
    imageAlt: "Google My Business",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
