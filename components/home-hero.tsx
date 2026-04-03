import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroImage = "/profile/Jannatul%20Jarin%20marketer.png";

export function HomeHero() {
  return (
    <section
      className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-10 px-4 py-16 sm:grid-cols-[1.08fr_1fr] sm:px-6 lg:gap-16 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-6">
        <p className="text-accent-brand animate-in fade-in slide-in-from-bottom-2 text-xs font-semibold uppercase tracking-[0.2em] duration-500 motion-reduce:animate-none">
          Digital marketing · SEO · Social &amp; content
        </p>
        <h1
          id="hero-heading"
          className="from-foreground via-foreground to-muted-foreground animate-in fade-in slide-in-from-bottom-3 text-4xl font-bold tracking-tight duration-500 fill-mode-both delay-75 motion-reduce:animate-none bg-linear-to-br bg-clip-text text-transparent sm:text-5xl lg:text-6xl"
        >
          More qualified traffic. Clearer brand story. Measurable growth.
        </h1>
        <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-3 max-w-lg text-lg leading-relaxed duration-500 fill-mode-both delay-150 motion-reduce:animate-none">
          I help teams in Bangladesh and abroad turn search, social, and
          content into pipeline—without gimmicks. Technical SEO, creative, and
          reporting in one workflow.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-3 flex flex-wrap gap-3 duration-500 fill-mode-both delay-200 motion-reduce:animate-none">
          <Button nativeButton={false} render={<Link href="#work" />}>
            See case highlights
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            Book a conversation
          </Button>
        </div>
      </div>
      <div className="animate-in fade-in zoom-in relative mx-auto w-full max-w-sm duration-700 fill-mode-both delay-100 motion-reduce:animate-none">
        <div
          className="from-accent-brand/25 pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br to-transparent blur-2xl"
          aria-hidden
        />
        <Image
          src={heroImage}
          alt="Jannatul Jarin, digital marketer and SEO strategist—professional portrait for portfolio"
          width={450}
          height={560}
          className="border-border relative z-10 w-full rounded-2xl border object-cover shadow-2xl transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:rotate-1"
          priority
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    </section>
  );
}
