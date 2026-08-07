"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { withBasePath } from "../lib/asset";

const REOPEN_DELAY_MS = 30_000;

export default function SidebarAd() {
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

  if (closed) return null;

  return (
    <div
      className={`fixed bottom-0 left-[34px] z-40 h-[408px] w-[257px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        entered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <img alt="" src={withBasePath("/assets/shared/sidebar-ad.svg")} className="pointer-events-none absolute inset-0 size-full" />

      <Link
        href="/promotions"
        aria-label="領取獎勵"
        className="absolute bottom-[17.66px] left-1/2 h-[52.99px] w-[200.47px] -translate-x-1/2"
      />

      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="關閉廣告"
        className="absolute right-[12px] top-[12px] z-10 flex size-[24px] items-center justify-center rounded-full bg-black/30"
      >
        <img alt="" src={withBasePath("/assets/shared/close-x-white.svg")} className="size-[12px]" />
      </button>
    </div>
  );
}
