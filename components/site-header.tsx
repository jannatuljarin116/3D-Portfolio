"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Jannatul Jarin
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav
            className={cn(
              "text-muted-foreground absolute right-4 top-14 z-50 flex min-w-[180px] flex-col gap-3 rounded-lg border border-border bg-background/95 p-4 text-xs font-medium uppercase tracking-wide shadow-lg sm:static sm:flex sm:min-w-0 sm:flex-row sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none",
              open ? "flex" : "hidden sm:flex"
            )}
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle className="shrink-0" />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-expanded={open}
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
