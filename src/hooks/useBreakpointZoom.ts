"use client";

import { useEffect, useState } from "react";

// Shared with ScaleBelowBreakpoint -- see that component for why 1530 and why
// `zoom` rather than `transform: scale`. Anything rendered outside a page's
// own ScaleBelowBreakpoint wrapper (e.g. a globally-mounted fixed overlay)
// needs this same factor to shrink in step with the rest of the page instead
// of staying full-size while everything around it scales down.
export const DESIGN_WIDTH = 1530;

export function useBreakpointZoom(designWidth: number = DESIGN_WIDTH) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      setZoom(Math.min(1, vw / designWidth));
    };
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, [designWidth]);

  return zoom;
}
