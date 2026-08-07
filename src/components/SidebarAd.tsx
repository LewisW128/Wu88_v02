"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { withBasePath } from "../lib/asset";
import { useBreakpointZoom } from "../hooks/useBreakpointZoom";

const REOPEN_DELAY_MS = 30_000;

export default function SidebarAd() {
  // This overlay is mounted outside any page's own ScaleBelowBreakpoint
  // wrapper (see that hook's comment), so it needs the same zoom factor
  // applied directly or it renders full-size and overruns the sidebar's
  // (shrunk-down) width instead of matching it.
  const zoom = useBreakpointZoom(undefined, 0.9);
  const pathname = usePathname();
  const [closed, setClosed] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (closed) return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [closed]);

  useEffect(() => {
    if (!closed) return;
    setEntered(false);
    const timer = setTimeout(() => setClosed(false), REOPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, [closed]);

  if (closed || pathname?.startsWith("/profile")) return null;

  return (
    // 271px wide -- matches the sidebar nav rows' own width (inset 20px from
    // the sidebar's left edge, flush with its right edge), per feedback that
    // the ad shouldn't be any wider than an unselected menu item's row.
    <div
      style={{ zoom }}
      className={`fixed bottom-0 left-[20px] z-40 h-[430px] w-[271px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        entered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />

      <Link href="/promotions" aria-label="領取獎勵" className="absolute bottom-[19px] left-1/2 h-[56px] w-[211px] -translate-x-1/2" />

      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="關閉廣告"
        className="absolute left-[19px] top-[19px] z-10 flex size-[23px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]"
      >
        <img alt="" src={withBasePath("/assets/shared/close-x-white.svg")} className="size-[13px]" />
      </button>
    </div>
  );
}
