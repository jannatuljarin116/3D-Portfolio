"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "analytics-consent";

export function dispatchAnalyticsConsent(value: "granted" | "denied") {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event("analytics-consent-change"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "granted" && stored !== "denied") {
        setVisible(true);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie and analytics preferences"
      className="border-border bg-card text-card-foreground fixed right-4 bottom-4 z-90 max-w-sm rounded-xl border p-4 shadow-xl sm:right-6 sm:bottom-6"
    >
      <p className="mb-3 text-sm leading-relaxed">
        This site can load privacy-friendly analytics after you opt in. See{" "}
        <Link href="/privacy" className="text-primary underline-offset-2 hover:underline">
          Privacy
        </Link>
        .
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          onClick={() => {
            dispatchAnalyticsConsent("granted");
            setVisible(false);
          }}
        >
          Accept analytics
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            dispatchAnalyticsConsent("denied");
            setVisible(false);
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
