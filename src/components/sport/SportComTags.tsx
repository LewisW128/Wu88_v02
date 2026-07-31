"use client";

import { useEffect, useRef, useState } from "react";

// Height of SportStickyHeader once scrolled (py-15 * 2 + ProfileCompact's
// 59px avatar row) -- this row sticks directly below it, so its sticky
// offset must match that scrolled header height, not the taller top-state one.
const STICKY_TOP = 89;

const TAGS = ["SUPER 體育", "WG 體育", "AP 體育", "熊貓體育", "LIVE 體育", "天群體育"];

export default function SportComTags() {
  const ref = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current?.getBoundingClientRect().top ?? Infinity;
      setStuck(top <= STICKY_TOP + 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="sticky z-20 -mt-[333px]" style={{ top: STICKY_TOP }}>
      {/* Bleeds beyond the row's own box (absolute, so it never affects the
          row's layout height) -- keeps the sticky element's flow height
          constant instead of jumping when the stuck backdrop appears. */}
      {stuck && <div className="pointer-events-none absolute inset-x-0 -top-[15px] -bottom-[15px] bg-white/90 backdrop-blur-[10px]" />}
      <div className="scrollbar-hide relative flex items-center gap-[20px] overflow-x-auto px-[40px]">
        {TAGS.map((tag) => (
          <div
            key={tag}
            className="shrink-0 whitespace-nowrap rounded-full bg-[#3e4140] px-[20px] py-[10px] text-[16px] font-bold tracking-[0.15px] text-white"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
