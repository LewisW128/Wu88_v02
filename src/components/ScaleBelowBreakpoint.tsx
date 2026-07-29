"use client";

import { useEffect, useRef, useState } from "react";

// The page is designed to look right at DESIGN_WIDTH. The instant the
// viewport gets narrower than that, stop reflowing individual sections and
// instead shrink the whole page (rendered at DESIGN_WIDTH) down to fit as one
// unit — like continuously zooming out on a desktop site. This scales
// smoothly all the way down (through iPad-portrait's 1024 width and beyond)
// rather than only kicking in below a separate breakpoint.
const DESIGN_WIDTH = 1440;

export default function ScaleBelowBreakpoint({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      setScale(Math.min(1, vw / DESIGN_WIDTH));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (scale >= 1) return;
    const el = innerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const h = entries[0]?.contentRect.height;
      if (h) setHeight(h);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [scale]);

  if (scale >= 1) {
    return <>{children}</>;
  }

  return (
    <div style={{ height: height ? height * scale : undefined, overflow: "hidden" }}>
      <div ref={innerRef} style={{ width: DESIGN_WIDTH, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}
