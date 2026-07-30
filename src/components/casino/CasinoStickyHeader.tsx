"use client";

import { useEffect, useState } from "react";

import { withBasePath } from "../../lib/asset";
import Filter from "../Filter";
import Profile, { ProfileCompact } from "../Profile";
import CasinoFilterChips from "./CasinoFilterChips";

export default function CasinoStickyHeader({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex items-center justify-between px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
        scrolled ? "bg-white/80 py-[15px] backdrop-blur-[10px]" : "pt-[20px]"
      }`}
    >
      {scrolled ? (
        <div className="flex items-center gap-[20px]">
          <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px] shrink-0" />
          <CasinoFilterChips active={active} onSelect={onSelect} className="scrollbar-hide flex gap-[10px] overflow-x-auto" />
        </div>
      ) : (
        <Filter />
      )}
      {scrolled ? <ProfileCompact /> : <Profile />}
    </div>
  );
}
