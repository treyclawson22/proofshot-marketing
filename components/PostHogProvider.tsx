"use client";

import { useEffect, useState, createContext, useContext } from "react";
import type { PostHog } from "posthog-js";

const PostHogContext = createContext<PostHog | null>(null);

export function usePostHogLazy(): PostHog | null {
  return useContext(PostHogContext);
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [posthog, setPosthog] = useState<PostHog | null>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!key || typeof window === "undefined") return;

    import("posthog-js").then(({ default: ph }) => {
      ph.init(key, {
        api_host: host || "https://us.i.posthog.com",
        persistence: "memory",
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: true,
        advanced_disable_feature_flags: true,
      });
      setPosthog(ph);
    });
  }, []);

  return (
    <PostHogContext.Provider value={posthog}>
      {children}
    </PostHogContext.Provider>
  );
}
