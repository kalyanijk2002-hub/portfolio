"use client";

// useReveal — custom hook that triggers the CSS scroll-reveal animation.
// Attach the returned `ref` to any element you want to animate in when
// it enters the viewport.  The hook adds/removes the `reveal-visible` class
// via an IntersectionObserver so no layout jank occurs.

import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          // Once visible, no need to keep observing
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
