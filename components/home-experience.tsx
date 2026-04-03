import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function HomeExperience() {
  return (
    <section
      id="experience"
      className="border-border/50 border-t py-16 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="experience-heading"
          eyebrow="Track record"
          title="Brands and teams I've shipped with"
          description="Operator-level execution across SaaS, e‑commerce, media, and local businesses—always with reporting you can act on."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {EXPERIENCE.map((exp) => (
            <article key={exp.company}>
              <Card className="border-border/80 bg-card/90 hover:border-accent-brand/35 group h-full transition-all duration-300 hover:shadow-md motion-reduce:transition-none">
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {exp.company}
                  </h3>
                  <span
                    className={cn(
                      "text-accent-brand-foreground shrink-0 rounded-md px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide",
                      "bg-accent-brand-muted"
                    )}
                  >
                    {exp.type}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="border-accent-brand/40 text-foreground/90 border-l-2 pl-4 text-base leading-relaxed">
                    {exp.quote}
                  </p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
