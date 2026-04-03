import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="text-muted-foreground border-border/40 border-t py-8 text-center text-xs">
      <p className="mb-3">
        © {new Date().getFullYear()} Jannatul Jarin. All rights reserved.
      </p>
      <Link
        href="/privacy"
        className="text-muted-foreground hover:text-foreground underline-offset-4 transition-colors hover:underline"
      >
        Privacy
      </Link>
    </footer>
  );
}
