import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroImage = "/profile/Jannatul%20Jarin%20marketer.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <span className="text-sm font-semibold tracking-tight">
            Jannatul Jarin
          </span>
          <nav className="text-muted-foreground hidden gap-6 text-xs font-medium uppercase tracking-wide sm:flex">
            <Link href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-10 px-4 py-16 sm:grid-cols-[1.1fr_1fr] sm:px-6 lg:gap-16 lg:py-24">
          <div className="space-y-6">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              Digital Marketing & Visual Strategist
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bridging data, design & growth.
            </h1>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              I turn visibility into trust and trust into growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button nativeButton={false} render={<Link href="#skills" />}>
                View expertise
              </Button>
              <Button variant="outline" nativeButton={false} render={<Link href="#contact" />}>
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
              className="border-border relative z-10 w-full rounded-2xl border object-cover shadow-2xl"
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
            <ul className="text-muted-foreground grid gap-3 text-sm sm:grid-cols-2">
              <li>Social media strategy & growth</li>
              <li>Advanced SEO & GEO</li>
              <li>Content writing & copy</li>
              <li>Poster & visual design</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="bg-card text-card-foreground border-border rounded-2xl border p-8 text-center sm:p-12">
              <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">
                Ready to scale your brand?
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Open for freelance projects and full-time roles.
              </p>
              <Button nativeButton={false} render={<a href="mailto:jannatjarin116@gmail.com" />}>
                Email me
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-muted-foreground border-border/40 border-t py-8 text-center text-xs">
        <p>© {new Date().getFullYear()} Jannatul Jarin. All rights reserved.</p>
      </footer>
    </div>
  );
}
