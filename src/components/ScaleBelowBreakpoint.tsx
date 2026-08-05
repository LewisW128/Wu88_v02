"use client";

import { useBreakpointZoom } from "../hooks/useBreakpointZoom";

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
// 1440 is the Figma frame width, but the sidebar (291px) plus the fixed-width
// RewardAnnouncement card (519px) plus gaps/padding leave WinList less room
// than that — at 1440 it would render narrower than RewardAnnouncement, which
// it must never be. 1530 gives WinList's own min-width (600px) just enough
// room at 1:1, and since everything below this threshold scales down together
// via `zoom`, the ratio between the two cards stays constant at any size.
export default function ScaleBelowBreakpoint({ children, designWidth, maxZoom }: { children: React.ReactNode; designWidth?: number; maxZoom?: number }) {
  const zoom = useBreakpointZoom(designWidth, maxZoom);

  // `vh` units don't scale with an ancestor's `zoom` the way px values do —
  // 100vh always resolves to the real viewport height, so anything sized with
  // it (e.g. `h-screen`) ends up visually shrunk to `zoom * realHeight`
  // instead of matching the viewport. Expose the zoom factor as a CSS
  // variable so viewport-height-dependent elements can counter-scale via
  // `calc(100vh / var(--page-zoom))`.
  return <div style={{ zoom, "--page-zoom": zoom } as React.CSSProperties}>{children}</div>;
}
