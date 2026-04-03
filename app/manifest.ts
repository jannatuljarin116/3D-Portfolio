import type { MetadataRoute } from "next";

import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "browser",
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#020617",
    lang: "en",
    categories: ["business", "marketing", "portfolio"],
  };
}
