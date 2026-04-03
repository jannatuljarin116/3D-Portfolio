import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { TESTIMONIALS } from "@/lib/portfolio-data";

export function HomeTestimonials() {
  return (
    <section
      id="testimonials"
      className="section-surface border-border/50 border-t py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Proof"
          title="What clients say about the work"
          description="Anonymous quotes by request—each one maps to SEO, creative, or analytics engagements with a bias toward measurable outcomes."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article key={`${t.name}-${i}`}>
              <Card className="border-border/80 bg-card/90 hover:border-accent-brand/30 flex h-full flex-col transition-all duration-300 hover:shadow-md motion-reduce:transition-none">
                <CardContent className="flex flex-1 flex-col pt-6">
                  <blockquote className="flex flex-1 flex-col">
                    <p className="text-foreground/90 mb-4 text-sm leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-auto">
                      <h3 className="text-accent-brand text-xs font-semibold">
                        {t.name}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {t.role}
                        {t.company ? ` · ${t.company}` : ""}
                      </p>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
