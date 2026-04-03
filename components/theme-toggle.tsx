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
        className={cn("bg-muted flex h-8 w-22 rounded-lg p-0.5", className)}
        aria-hidden
      />
    );
  }

  const active = (theme ?? "dark") as ThemeMode;

  return (
    <div
      className={cn(
        "bg-muted/80 flex h-8 rounded-lg border border-border/60 p-0.5",
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
            size="icon-xs"
            className={cn(
              "size-7 rounded-md",
              isOn && "bg-background text-foreground shadow-sm"
            )}
            aria-pressed={isOn}
            aria-label={`${label} theme`}
            title={label}
            onClick={() => setTheme(value)}
          >
            <Icon className="size-3.5" aria-hidden />
          </Button>
        );
      })}
    </div>
  );
}
