"use client";

import { useEffect, useState } from "react";

// The page is designed to look right at DESIGN_WIDTH. The instant the
// viewport gets narrower than that, shrink the whole page down to fit as one
// unit — like continuously zooming out on a desktop site — rather than
// reflowing individual sections. Uses the CSS `zoom` property (not
// `transform: scale`): transform creates a new containing block for
// descendants, which breaks `position: sticky`/`fixed` (the sidebar and the
// sticky header would stop pinning and just scroll with the page). `zoom`
// scales rendering the same way a browser's own page zoom does, so sticky/
// fixed elements keep resolving against the real viewport correctly, and the
// browser computes scrollable height natively — no manual measuring needed.
const DESIGN_WIDTH = 1440;

export default function ScaleBelowBreakpoint({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      setZoom(Math.min(1, vw / DESIGN_WIDTH));
    };
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  return <div style={{ zoom }}>{children}</div>;
}
