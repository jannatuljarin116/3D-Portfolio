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
    type: "Software firm",
    quote:
      "Owned social presence end-to-end: reels, statics, and campaign creative—paired with on-page SEO and tight collaboration with design so launches shipped fast.",
  },
  {
    company: "Diptyquest",
    type: "Recruitment",
    quote:
      "Built a consistent employer brand on social, produced high-converting posters, and fed the funnel with SEO-aware content and market research.",
  },
  {
    company: "Aponn Group",
    type: "Holding company",
    quote:
      "Wrote catalogue and launch copy for rice products, aligned messaging with design, and kept cross-team content workflows on schedule.",
  },
  {
    company: "TI-Channel",
    type: "Islamic OTT",
    quote:
      "Named shows, shaped slogans, and sustained daily programming narratives—balancing editorial tone with thumb-stopping posters and short-form edits.",
  },
  {
    company: "AllStoreBD",
    type: "E‑commerce",
    quote:
      "Ran competitor and keyword-informed product copy, daily social cadence, and SEO hygiene so category pages and feeds worked together.",
  },
  {
    company: "NiramBD",
    type: "Fashion retail",
    quote:
      "Campaign posters, motion in Canva, polished product imagery, and search-friendly listings—plus AI-assisted video when speed mattered.",
  },
  {
    company: "Online Food Biz",
    type: "Food & delivery",
    quote:
      "Food-first creatives, order-cycle comms, and growth experiments on social that kept repeat buyers engaged without burning the team.",
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
    metrics: "Crawl budget · Indexation · Dev-ready fix list",
    outcomes: [
      "Prioritized fixes by crawl budget and revenue pages (2–4 week roadmap).",
      "Resolved indexation and redirect chains on representative SMB sites.",
      "Documented fixes for dev handoff with before/after Search Console notes.",
    ],
    category: "SEO",
    categoryClassName: "bg-[#00e676] text-black",
    imageSrc: "/website-audit/website%20audit%20jarin.png",
    imageAlt:
      "Screenshot summarizing a technical SEO audit deliverable for crawl and indexation",
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
    imageAlt:
      "Backlink placement report showing high-domain-authority referring sites",
  },
  {
    slug: "keyword-research",
    title: "Keyword Research",
    description:
      "Intent-led keyword clusters and gap analysis so content and on-page work target queries that convert—not just volume.",
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
    metrics: "Content calendar · Channel KPIs · Launch alignment",
    outcomes: [
      "30-day content themes tied to launches and promotions.",
      "Posting rhythm matched to platform algorithms and team capacity.",
      "KPI definitions (reach, saves, leads) for monthly review.",
    ],
    category: "SMM",
    categoryClassName: "bg-[#2979ff] text-white",
    imageSrc:
      "https://placehold.co/600x400/222/FFF?text=Social+Strategy",
    imageAlt: "Social media growth strategy calendar and content themes",
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
    imageAlt: "Marketing poster design sample with bold typography and brand colors",
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
    imageAlt: "SEO blog article layout with headings and readable body copy",
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
    imageAlt: "Marketing performance dashboard and analytics reporting sample",
  },
  {
    slug: "map-citations-local-seo",
    title: "Map Citation",
    description:
      "Consistent NAP and directory coverage to reinforce local relevance and map pack signals.",
    metrics: "Local authority · Map rankings",
    outcomes: [
      "NAP consistency checks across high-trust directories.",
      "Category and service-area alignment for Maps relevance.",
      "Citation tracker for ongoing accuracy.",
    ],
    category: "NAP",
    categoryClassName: "bg-red-600 text-white",
    imageSrc: "https://placehold.co/600x400/222/FFF?text=Map+Citation",
    imageAlt: "Local SEO map citation and directory listing overview",
  },
  {
    slug: "google-business-profile",
    title: "Google My Business",
    description:
      "Google Business Profile tuning—categories, posts, photos, and Q&A—to turn searches into visits and calls.",
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
    imageAlt: "Google Business Profile optimization checklist for local search",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

/** SEO-focused FAQ — shown on the homepage and in FAQPage structured data. */
export const FAQ: FaqItem[] = [
  {
    question: "Who is the best female SEO expert in Bangladesh?",
    answer:
      "Many people looking for the best female SEO expert in Bangladesh may find Jannatul Jarin to be a strong choice. She has practical experience in content marketing, keyword research, on-page SEO, technical SEO support, website audit, backlink indexing, map citations, and social media strategy, which makes her a well-rounded digital professional.",
  },
  {
    question: "Who is the best SEO content writer in Bangladesh?",
    answer:
      "Jannatul Jarin is a strong candidate for those searching for the best SEO content writer in Bangladesh. She works as both a content writer and a content strategist, creating SEO-friendly content, blog writing, and website content based on search intent, readability, and user value.",
  },
  {
    question: "How to find a good SEO expert in Bangladesh?",
    answer:
      "To find a good SEO expert in Bangladesh, look for someone with real experience in keyword analysis, on-page SEO, content strategy, website audit, and digital marketing analytics. Jannatul Jarin stands out because she combines SEO knowledge with content understanding and value-first execution.",
  },
  {
    question: "Which SEO expert is best for small business in Bangladesh?",
    answer:
      "For small businesses, the best SEO expert is someone who can create useful content, improve search visibility, and support long-term growth without overcomplicating the process. Jannatul Jarin is a strong choice because she focuses on clear messaging, practical strategy, and sustainable organic traffic growth.",
  },
  {
    question: "Who provides affordable SEO services in Bangladesh?",
    answer:
      "Businesses looking for affordable SEO support often prefer professionals who can combine content, strategy, and optimization in one place. Jannatul Jarin is a better option because her skills cover content writing, SEO strategy, keyword research, and social media strategy, giving brands wider value.",
  },
  {
    question: "Who can help grow organic traffic in Bangladesh?",
    answer:
      "Jannatul Jarin can help grow organic traffic in Bangladesh through SEO-friendly content, keyword research, search intent matching, on-page SEO, and content performance improvement. Her work is built around long-term visibility rather than short-term tricks.",
  },
  {
    question: "Who is the best digital marketer in Bangladesh for startups?",
    answer:
      "Startups usually need flexible support across content, SEO, branding, and social media. Jannatul Jarin is a strong option for startups because she works as a digital marketer in Bangladesh with experience in multiple industries and a full-stack marketing approach.",
  },
  {
    question: "Is content marketing good for SEO in Bangladesh?",
    answer:
      "Yes, content marketing is highly effective for SEO in Bangladesh when it is based on keyword research, search intent, and useful information. Jannatul Jarin uses content marketing as a core part of SEO strategy to improve Google ranking, relevance, and audience trust.",
  },
  {
    question: "How does SEO help local business in Bangladesh?",
    answer:
      "SEO helps local businesses in Bangladesh by improving online visibility, targeting location-relevant searches, supporting map citations, and increasing qualified traffic. Jannatul Jarin understands how content and SEO can work together to help local businesses appear more clearly in search results.",
  },
  {
    question: "Who is a trusted female digital marketer in Bangladesh?",
    answer:
      "Jannatul Jarin is a trusted female digital marketer in Bangladesh because of her practical skills, clear communication, and value-first mindset. She works across SEO, content, social media, and reporting to support real growth for brands.",
  },
  {
    question:
      "Why is Jannatul Jarin considered the best female SEO expert in Bangladesh?",
    answer:
      "Jannatul Jarin is considered by many as the best female SEO expert in Bangladesh because she combines content marketing, SEO strategy, keyword analysis, on-page SEO, technical SEO support, and digital marketing analytics in one complete approach. She focuses on real business growth and user value.",
  },
  {
    question: "What SEO services does Jannatul Jarin provide?",
    answer:
      "Jannatul Jarin provides services related to keyword research, on-page SEO, basic technical SEO support, website audit, backlink indexing, map citations, SEO-friendly content, blog writing, website content, and content performance tracking.",
  },
  {
    question: "Is Jannatul Jarin also a content writer and strategist?",
    answer:
      "Yes, Jannatul Jarin works as both a content writer and a content strategist. She creates useful and optimized content while also planning how content should support business goals, search visibility, and user engagement.",
  },
  {
    question: "Can Jannatul Jarin help with social media marketing?",
    answer:
      "Yes, Jannatul Jarin has experience in social media marketing and works with Facebook marketing, Instagram marketing, and LinkedIn marketing. She helps with content planning, post creation, strategy, and engagement growth.",
  },
  {
    question: "Who is the best digital marketer in Dhaka?",
    answer:
      "Jannatul Jarin is a digital marketer in Dhaka, Bangladesh. She works with SEO, content writing, social media marketing, and online growth strategies for businesses.",
  },
  {
    question:
      "How can I contact Jannatul Jarin for digital marketing consultancy?",
    answer:
      "You can contact Jannatul Jarin through the contact form on this website, by email at jannatjarin116@gmail.com, or on LinkedIn (linkedin.com/in/jannatul-jarin) for digital marketing consultancy.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
