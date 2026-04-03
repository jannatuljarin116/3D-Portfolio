import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jannatul-jarin/" },
  { label: "Facebook", href: "https://www.facebook.com/jannatuljarinn/" },
  { label: "Instagram", href: "https://www.instagram.com/jannatuljarin.seo/" },
  { label: "X (Twitter)", href: "https://x.com/jannatuljarinM" },
  { label: "Linktree", href: "https://linktr.ee/jannatuljarin" },
  {
    label: "Google Business Profile",
    href: "https://share.google/OrcBUpXRyVfJFo8Nr",
  },
] as const;

const footerLinkClass =
  "text-muted-foreground hover:text-accent-brand rounded-sm text-xs transition-colors duration-200 underline-offset-4 hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-border/50 bg-card/40 text-muted-foreground border-t py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="sr-only">Contact and social links</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-foreground text-sm font-semibold tracking-tight">
              Grow with clarity
            </p>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              SEO, content, and social strategy for brands that want measurable
              traction—not vanity metrics.
            </p>
          </div>

          <address className="not-italic">
            <p className="text-foreground mb-3 text-xs font-semibold uppercase tracking-widest">
              Direct
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className={footerLinkClass}
                  href="mailto:jannatuljarin116@gmail.com"
                >
                  jannatuljarin116@gmail.com
                </a>
              </li>
              <li>
                <a className={footerLinkClass} href="tel:+8801339315807">
                  +880 1339 315807
                </a>
              </li>
            </ul>
          </address>

          <nav
            aria-label="Social and profiles"
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="text-foreground mb-3 text-xs font-semibold uppercase tracking-widest">
              Profiles
            </p>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLinkClass}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-border/50 mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Jannatul Jarin. All rights reserved.
          </p>
          <Link href="/privacy" className={footerLinkClass}>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
