import Link from "next/link";

export default function SiteNotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center outline-none"
    >
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8 max-w-sm text-sm">
        This project or page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-primary text-sm font-medium underline-offset-4 hover:underline"
      >
        Return home
      </Link>
    </main>
  );
}
