"use client";

import dynamic from "next/dynamic";

export const SceneBackgroundDynamic = dynamic(
  () =>
    import("@/components/scene-background").then((m) => m.SceneBackground),
  { ssr: false, loading: () => null }
);
