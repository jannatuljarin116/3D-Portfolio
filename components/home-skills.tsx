import { SectionHeader } from "@/components/section-header";
import { SKILLS } from "@/lib/portfolio-data";

export function HomeSkills() {
  return (
    <section
      id="skills"
      className="border-border/50 section-surface border-t py-16 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          id="skills-heading"
          eyebrow="Capabilities"
          title="Full-funnel marketing support"
          description="From discoverability to creative execution—stacked for teams that want one strategist who speaks SEO, design, and analytics."
        />
        <ul className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <li key={skill}>
              <span className="border-border bg-card/80 text-foreground hover:border-accent-brand/40 hover:bg-accent-brand-muted/30 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm transition-all duration-200">
                <span
                  className="bg-accent-brand size-2 shrink-0 rounded-full"
                  aria-hidden
                />
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
