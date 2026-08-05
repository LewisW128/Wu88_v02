"use client";

import { useEffect, useState } from "react";

// Shared with ScaleBelowBreakpoint -- see that component for why 1530 and why
// `zoom` rather than `transform: scale`. Anything rendered outside a page's
// own ScaleBelowBreakpoint wrapper (e.g. a globally-mounted fixed overlay)
// needs this same factor to shrink in step with the rest of the page instead
// of staying full-size while everything around it scales down.
export const DESIGN_WIDTH = 1530;

// maxZoom caps how large the page ever renders, even on wide viewports --
// e.g. 0.85 makes every page render at 85% scale at most, so the whole site
// feels less oversized without touching any individual element's sizing
// (zoom is uniform, so all proportions/spacing stay exactly as designed).
export function useBreakpointZoom(designWidth: number = DESIGN_WIDTH, maxZoom = 1) {
  const [zoom, setZoom] = useState(maxZoom);

  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      setZoom(Math.min(maxZoom, vw / designWidth));
    };
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, [designWidth, maxZoom]);

  return zoom;
}
