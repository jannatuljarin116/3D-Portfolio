import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 max-w-2xl", className)}>
      <p className="text-accent-brand mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      ) : null}
      {children}
    </header>
  );
}
