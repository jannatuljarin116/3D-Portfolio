"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark" | "system";

const MODES: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("bg-muted flex h-10 w-29 rounded-full p-1", className)}
        aria-hidden
      />
    );
  }

  const active = (theme ?? "dark") as ThemeMode;

  return (
    <div
      className={cn(
        "bg-muted/80 flex h-10 items-center gap-0.5 rounded-full border border-border/60 p-1",
        className
      )}
      role="group"
      aria-label="Theme"
    >
      {MODES.map(({ value, label, icon: Icon }) => {
        const isOn = active === value;
        return (
          <Button
            key={value}
            type="button"
            variant="ghost"
            size="icon-sm"
            className={cn(
              "size-8 shrink-0 rounded-full shadow-none transition-transform duration-200 hover:scale-105 motion-reduce:hover:scale-100",
              isOn && "bg-background text-foreground shadow-sm ring-1 ring-border/50"
            )}
            aria-pressed={isOn}
            aria-label={`${label} theme`}
            title={label}
            onClick={() => setTheme(value)}
          >
            <Icon className="size-4" aria-hidden />
          </Button>
        );
      })}
    </div>
  );
}
