import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export function HomeContact() {
  return (
    <section
      id="contact"
      className="section-surface border-border/50 border-t pb-24 pt-16 sm:pt-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="border-border bg-card/80 text-card-foreground rounded-2xl border p-8 shadow-lg sm:p-12">
          <h2
            id="contact-heading"
            className="mb-3 text-center text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Tell me what you&apos;re building
          </h2>
          <p className="text-muted-foreground mx-auto mb-10 max-w-lg text-center text-sm leading-relaxed sm:text-base">
            Freelance projects and full-time roles—share your goals, timeline,
            and links. I respond with a clear next step, not a generic pitch.
          </p>
          <ContactForm />
          <p className="text-muted-foreground mt-10 text-center text-xs">
            Prefer email?{" "}
            <a
              className="text-accent-brand font-medium underline-offset-2 transition-colors hover:underline"
              href="mailto:jannatjarin116@gmail.com"
            >
              jannatjarin116@gmail.com
            </a>
          </p>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="outline"
              nativeButton={false}
              className="border-accent-brand/25 hover:bg-accent-brand-muted/20"
              render={
                <a href="mailto:jannatjarin116@gmail.com">Compose in email</a>
              }
            />
            <Button
              variant="outline"
              nativeButton={false}
              className="border-accent-brand/25 hover:bg-accent-brand-muted/20"
              render={
                <a
                  href="https://www.linkedin.com/in/jannatul-jarin/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              LinkedIn profile
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              className="border-accent-brand/25 hover:bg-accent-brand-muted/20"
              render={
                <a
                  href="https://www.scribd.com/document/982910912/Resume-Janantul-Jarin?secret_password=gGmLDcWvdEEJBFrJBzqT"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Download resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
