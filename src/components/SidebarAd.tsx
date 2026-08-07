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
    <div
      style={{ zoom }}
      className={`fixed bottom-0 left-0 z-40 h-[462px] w-[291px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        entered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />

      <Link href="/promotions" aria-label="領取獎勵" className="absolute bottom-[20px] left-1/2 h-[60px] w-[227px] -translate-x-1/2" />

      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="關閉廣告"
        className="absolute left-[20px] top-[20px] z-10 flex size-[25px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]"
      >
        <img alt="" src={withBasePath("/assets/shared/close-x-white.svg")} className="size-[14px]" />
      </button>
    </div>
  );
}
