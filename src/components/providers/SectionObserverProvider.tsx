"use client";

import { useSectionObserver } from "@/hooks/useSectionObserver";

export function SectionObserverProvider() {
  useSectionObserver();
  return null;
}
