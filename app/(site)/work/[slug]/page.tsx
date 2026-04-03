import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectMedia } from "@/components/project-media";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getProjectBySlug, getProjectSlugs } from "@/lib/portfolio-data";
import { SITE, absoluteUrl, getSiteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project" };
  }
  const title = project.title;
  const description = project.description;
  const url = `${getSiteUrl()}/work/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      type: "article",
      images: project.imageSrc
        ? [{ url: absoluteUrl(project.imageSrc), alt: project.imageAlt }]
        : undefined,
    },
    twitter: {
      card: project.imageSrc ? "summary_large_image" : "summary",
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}

export default async function WorkCasePage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/work/${project.slug}`),
    author: { "@type": "Person", name: SITE.name, url: getSiteUrl() },
    ...(project.imageSrc && {
      image: absoluteUrl(project.imageSrc),
    }),
  };

  return (
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 outline-none sm:px-6 sm:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <p className="text-muted-foreground mb-6 text-sm">
          <Link
            href="/#work"
            className="text-accent-brand font-medium underline-offset-2 transition-colors hover:underline"
          >
            ← All projects
          </Link>
        </p>
        <p className="text-accent-brand mb-2 text-xs font-bold uppercase tracking-[0.2em]">
          Case study · {project.category}
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
          {project.description}
        </p>

        <Card className="border-border/80 bg-card/90 mb-10 overflow-hidden border pt-0 shadow-sm">
          <div className="relative overflow-hidden rounded-t-xl">
            <span
              className={cn(
                "absolute top-3 left-3 z-10 rounded-md px-2.5 py-1 text-[0.65rem] font-bold uppercase backdrop-blur-sm",
                project.categoryClassName
              )}
            >
              {project.category}
            </span>
            <ProjectMedia
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          </div>
          <CardHeader>
            <h2 className="text-foreground text-base font-semibold">
              Deliverables &amp; proof points
            </h2>
            <p className="text-accent-brand text-sm font-semibold">
              {project.metrics}
            </p>
          </CardHeader>
          <CardContent>
            <h3
              id="outcomes-heading"
              className="text-foreground mb-3 text-sm font-semibold"
            >
              Outcomes &amp; scope
            </h3>
            <ul
              className="text-muted-foreground list-inside list-disc space-y-2 text-sm leading-relaxed"
              aria-labelledby="outcomes-heading"
            >
              {project.outcomes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href="/#contact" />}>
            Discuss a similar project
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            className="border-accent-brand/25 hover:bg-accent-brand-muted/20"
            render={<Link href="/#work" />}
          >
            More work
          </Button>
        </div>
      </article>
    </main>
  );
}
