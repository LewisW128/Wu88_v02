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
    // 257px wide, inset 34px from the sidebar's left edge -- matches "Frame
    // 1303" (node 561:3775), the AD instance's actual containing frame
    // inside the real sidebar composition, not the nav rows or the AD
    // component's own standalone size.
    <div
      style={{ zoom }}
      className={`fixed bottom-0 left-[34px] z-40 h-[408px] w-[257px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        entered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />

      <Link href="/promotions" aria-label="領取獎勵" className="absolute bottom-[17.66px] left-1/2 h-[52.99px] w-[200.47px] -translate-x-1/2" />

      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="關閉廣告"
        className="absolute left-[17.66px] top-[17.66px] z-10 flex size-[22.08px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]"
      >
        <img alt="" src={withBasePath("/assets/shared/close-x-white.svg")} className="size-[12.36px]" />
      </button>
    </div>
  );
}
