"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export function ConsentAwareAnalytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const read = () =>
      setGranted(localStorage.getItem("analytics-consent") === "granted");
    read();
    window.addEventListener("analytics-consent-change", read);
    return () => window.removeEventListener("analytics-consent-change", read);
  }, []);

  if (!granted) return null;
  return <Analytics />;
}
