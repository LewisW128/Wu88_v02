"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { withBasePath } from "../lib/asset";
import { useBreakpointZoom } from "../hooks/useBreakpointZoom";

const REOPEN_DELAY_MS = 30000;

// Pages where the floating ad shouldn't appear -- the profile page is the
// member's own account view, already dense with its own promo/reward CTAs.
const HIDDEN_ON = ["/profile"];

// Floats over the sidebar's own column (same 291px width) at the bottom
// left, rather than being appended into the sidebar's own scrollable
// content -- closing it isn't permanent, it just comes back after a few
// seconds.
export default function SidebarAd() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  // This is mounted once in the root layout, outside any single page's own
  // ScaleBelowBreakpoint wrapper, so it needs its own copy of that same zoom
  // factor to shrink in step with the rest of the page below the breakpoint
  // instead of staying full-size while everything around it scales down.
  const zoom = useBreakpointZoom();

  useEffect(() => {
    if (visible) return;
    const id = setTimeout(() => setVisible(true), REOPEN_DELAY_MS);
    return () => clearTimeout(id);
  }, [visible]);

  if (!visible) return null;
  if (HIDDEN_ON.some((path) => pathname === path || pathname === `${path}/` || pathname?.startsWith(`${path}/`))) return null;

  return (
    <div className="fixed bottom-[24px] left-[24px] z-40 h-[462px] w-[291px]" style={{ zoom }}>
      <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />

      <button
        type="button"
        aria-label="關閉廣告"
        onClick={() => setVisible(false)}
        className="absolute left-[20px] top-[20px] flex size-[25px] items-center justify-center rounded-full bg-[#3e4140]"
      >
        <img alt="" src={withBasePath("/assets/shared/close-x-white.svg")} className="size-[12px]" />
      </button>

      <div className="absolute bottom-[20px] left-[32px] h-[60px] w-[227px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
        <img alt="" src={withBasePath("/assets/sidebar/promotions-button.svg")} className="pointer-events-none absolute inset-0 size-full" />
        <div className="absolute inset-[23.81%_11.62%_25.4%_11.62%] flex items-center justify-between">
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">領取獎勵</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
            <img alt="" src={withBasePath("/assets/sidebar/arrow-chevron.svg")} className="h-[7.222px] w-[4.711px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
