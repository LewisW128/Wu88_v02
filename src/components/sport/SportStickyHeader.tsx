"use client";

import { useEffect, useState } from "react";

import { withBasePath } from "../../lib/asset";
import Filter from "../Filter";
import Profile, { ProfileCompact } from "../Profile";

// Mirrors CasinoStickyHeader's non-chips ("mid") scrolled treatment -- this
// page has no header-absorbed filter chips, since the sticky tag row
// (SportComTags) pins itself independently below the header instead.
export default function SportStickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 flex items-center justify-between px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
        scrolled ? "bg-white/80 py-[15px] backdrop-blur-[10px]" : "pt-[20px]"
      }`}
    >
      {scrolled ? <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px]" /> : <Filter />}
      {scrolled ? <ProfileCompact /> : <Profile />}
    </div>
  );
}
