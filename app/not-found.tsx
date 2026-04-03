import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center outline-none"
      >
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm text-sm">
          That URL doesn&apos;t exist. Try the home page or the navigation
          links.
        </p>
        <Link
          href="/"
          className="text-primary text-sm font-medium underline-offset-4 hover:underline"
        >
          Return home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
