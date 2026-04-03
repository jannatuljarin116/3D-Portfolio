"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Proof" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const navLinkClass =
  "text-muted-foreground hover:text-foreground relative rounded-md px-1 py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-200 after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent-brand after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/50 bg-background/75 supports-backdrop-filter:bg-background/65 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:h-16 sm:px-6",
          "animate-in fade-in slide-in-from-top-2 duration-500 motion-reduce:animate-none"
        )}
      >
        <Link
          href="/"
          className="text-foreground hover:text-accent-brand shrink-0 text-sm font-semibold tracking-tight transition-colors"
          onClick={() => setOpen(false)}
        >
          Jannatul Jarin
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav
            id="site-nav"
            aria-label="Primary"
            className={cn(
              "border-border bg-background/98 absolute right-4 top-[calc(100%+0.5rem)] z-50 flex min-w-[200px] flex-col gap-1 rounded-xl border p-3 shadow-xl sm:static sm:flex sm:min-w-0 sm:flex-row sm:items-center sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none",
              open ? "flex" : "hidden sm:flex"
            )}
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              nativeButton={false}
              className="mt-2 w-full sm:hidden"
              render={<Link href="#contact" onClick={() => setOpen(false)} />}
            >
              Let&apos;s talk
            </Button>
          </nav>

          <Button
            nativeButton={false}
            size="sm"
            className="hidden sm:inline-flex"
            render={<Link href="#contact" onClick={() => setOpen(false)} />}
          >
            Let&apos;s talk
          </Button>

          <ThemeToggle className="shrink-0" />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
