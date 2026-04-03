import Link from "next/link";

import { ProjectMedia } from "@/components/project-media";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const titleClass =
  "font-heading text-base leading-snug font-semibold transition-colors duration-200 group-hover:text-accent-brand";

export function HomeWork() {
  return (
    <section
      id="work"
      className="border-border/50 border-t py-16 sm:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="work-heading"
          eyebrow="Portfolio"
          title="Case-style snapshots you can explore"
          description="Technical SEO, authority building, content systems, and social—each write-up includes scope, outcomes, and how I think about prioritization."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.slug}>
              <Card className="group border-border/80 bg-card/90 overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:border-accent-brand/25 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <Link href={`/work/${project.slug}`} className="block">
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
                    <h3 className={titleClass}>{project.title}</h3>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="space-y-3">
                  <p className="text-accent-brand text-xs font-semibold tracking-wide uppercase">
                    {project.metrics}
                  </p>
                  <ul className="text-muted-foreground list-inside list-disc space-y-1 text-xs leading-relaxed">
                    {project.outcomes.slice(0, 2).map((line) => (
                      <li key={line.slice(0, 40)}>{line}</li>
                    ))}
                  </ul>
                  <Button
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    className="border-accent-brand/25 hover:border-accent-brand/50 hover:bg-accent-brand-muted/20"
                    render={<Link href={`/work/${project.slug}`} />}
                  >
                    Open case study
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
