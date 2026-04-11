"use client";

import { useEffect } from "react";
import { initScrollTracking, initTimeOnPage, initSectionTracking } from "@/lib/analytics";

const SECTION_IDS = [
  "about",
  "services",
  "experience",
  "projects",
  "testimonials",
  "process",
  "faq",
  "contact",
];

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll depth tracking
    initScrollTracking();

    // Initialize time on page tracking
    initTimeOnPage();

    // Initialize section visibility tracking
    const cleanup = initSectionTracking(SECTION_IDS);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
}
