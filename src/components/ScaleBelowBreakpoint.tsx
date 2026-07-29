"use client";

import { useEffect, useRef, useState } from "react";

// Below this viewport width, stop reflowing the desktop layout and instead
// shrink the whole page (rendered at DESIGN_WIDTH, where it's already known
// to look right) down to fit — like viewing a desktop site zoomed out.
const BREAKPOINT = 1024;
const DESIGN_WIDTH = 1440;

export default function ScaleBelowBreakpoint({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      setScale(vw < BREAKPOINT ? vw / DESIGN_WIDTH : 1);
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
