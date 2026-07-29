import { useEffect, useRef, useState } from "react";

export function useScaleToFit(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setScale(width / designWidth);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [designWidth]);

  return { ref, scale };
}
