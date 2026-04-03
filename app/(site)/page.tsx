import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { ProjectMedia } from "@/components/project-media";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  TESTIMONIALS,
} from "@/lib/portfolio-data";

const heroImage = "/profile/Jannatul%20Jarin%20marketer.png";

export default function Home() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex flex-1 flex-col outline-none"
    >
      <section className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-10 px-4 py-16 sm:grid-cols-[1.1fr_1fr] sm:px-6 lg:gap-16 lg:py-24">
        <div className="space-y-6">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Digital Marketing & Visual Strategist
          </p>
          <h1 className="from-foreground to-muted-foreground bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Bridging data, design & growth.
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
            I turn visibility into trust and trust into growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button nativeButton={false} render={<Link href="#work" />}>
              View my work
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              Get in touch
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="from-primary/20 pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br to-transparent blur-2xl" />
          <Image
            src={heroImage}
            alt="Jannatul Jarin"
            width={450}
            height={560}
            className="border-border relative z-10 w-full rounded-2xl border object-cover shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:rotate-1"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </section>

      <section id="skills" className="border-border/40 border-t py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-primary mb-2 text-xs font-bold uppercase tracking-widest">
            Core expertise
          </p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            What I bring to the table
          </h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="border-border bg-card/50 text-foreground inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary/60 hover:bg-primary/10"
              >
                <span
                  className="bg-primary size-2 shrink-0 rounded-full"
                  aria-hidden
                />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-border/40 border-t py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-primary mb-2 text-xs font-bold uppercase tracking-widest">
            Where I&apos;ve worked
          </p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience & clients
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {EXPERIENCE.map((exp) => (
              <Card
                key={exp.company}
                className="border-border/80 bg-card/80 transition-colors hover:border-blue-500/40"
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                  <CardTitle className="text-lg">{exp.company}</CardTitle>
                  <span className="bg-blue-500/15 text-blue-400 shrink-0 rounded px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide">
                    {exp.type}
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="border-primary/60 text-foreground/90 border-l-2 pl-4 text-base leading-relaxed italic">
                    {exp.quote}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="border-border/40 border-t py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-primary mb-2 text-xs font-bold uppercase tracking-widest">
            Social proof
          </p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            What clients say
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={`${t.name}-${i}`}
                className="border-border/80 bg-card/80 flex flex-col"
              >
                <CardContent className="flex flex-1 flex-col pt-6">
                  <p className="text-foreground/90 mb-4 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-primary mt-auto text-xs font-semibold">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-border/40 border-t py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-primary mb-2 text-xs font-bold uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card
                key={project.slug}
                className="group border-border/80 overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="relative">
                    <span
                      className={`absolute top-3 left-3 z-10 rounded px-2 py-0.5 text-[0.65rem] font-bold uppercase backdrop-blur-sm ${project.categoryClassName}`}
                    >
                      {project.category}
                    </span>
                    <ProjectMedia
                      imageSrc={project.imageSrc}
                      imageAlt={project.imageAlt}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="space-y-3">
                  <p className="text-primary text-xs font-semibold">
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
                    render={<Link href={`/work/${project.slug}`} />}
                  >
                    View case study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="bg-card text-card-foreground border-border rounded-2xl border p-8 sm:p-12">
            <h2 className="mb-2 text-center text-2xl font-semibold sm:text-3xl">
              Ready to scale your brand?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-sm">
              I am currently open for freelance projects and full-time roles.
              Send a message below or reach out directly.
            </p>
            <ContactForm />
            <p className="text-muted-foreground mt-8 text-center text-xs">
              Or email{" "}
              <a
                className="text-primary underline-offset-2 hover:underline"
                href="mailto:jannatjarin116@gmail.com"
              >
                jannatjarin116@gmail.com
              </a>
            </p>
            <div className="mt-6 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href="mailto:jannatjarin116@gmail.com">Open in email</a>
                }
              />
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href="https://www.linkedin.com/in/jannatul-jarin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href="https://www.scribd.com/document/982910912/Resume-Janantul-Jarin?secret_password=gGmLDcWvdEEJBFrJBzqT"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                My resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
