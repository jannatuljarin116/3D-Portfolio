import { ChevronDown } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { FAQ } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-surface border-border/50 border-t py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions brands ask before we work together"
          description="Straight answers on SEO, content, and growth—especially if you are comparing marketers in Bangladesh or hiring remote."
        />

        <div className="divide-border border-border bg-card/50 overflow-hidden rounded-2xl border shadow-sm">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="group border-border border-b last:border-b-0 open:bg-muted/25"
            >
              <summary
                className={cn(
                  "hover:bg-muted/30 flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition-colors sm:px-6 sm:py-5",
                  "[&::-webkit-details-marker]:hidden"
                )}
              >
                <h3 className="text-foreground pr-2 text-left text-sm font-semibold leading-snug sm:text-base">
                  {item.question}
                </h3>
                <ChevronDown
                  className="text-accent-brand size-5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                  aria-hidden
                />
              </summary>
              <div className="text-muted-foreground border-border/60 border-t px-4 py-4 text-sm leading-relaxed sm:px-6 sm:py-5">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
