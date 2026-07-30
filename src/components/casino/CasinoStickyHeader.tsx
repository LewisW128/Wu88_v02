"use client";

import { useEffect, useRef, useState } from "react";

import { withBasePath } from "../../lib/asset";
import Filter from "../Filter";
import Profile, { ProfileCompact } from "../Profile";
import CasinoFilterChips from "./CasinoFilterChips";

type Stage = "top" | "mid" | "chips";

export default function CasinoStickyHeader({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("top");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 20) {
        setStage("top");
        return;
      }
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const anchorTop = document.getElementById("casino-filter-anchor")?.getBoundingClientRect().top ?? Infinity;
      setStage(anchorTop > headerBottom ? "mid" : "chips");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = stage !== "top";

  return (
    <div
      ref={headerRef}
      className={`sticky top-0 z-20 flex items-center px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
        scrolled ? "bg-white/80 py-[15px] backdrop-blur-[10px]" : "pt-[20px]"
      } ${stage === "chips" ? "" : "justify-between"}`}
    >
      {stage === "chips" ? (
        <div className="-mx-[40px] flex min-w-0 flex-1 items-stretch">
          <div className="flex shrink-0 items-center border-r border-[#dadada] bg-white py-[17px] pl-[30px] pr-[20px]">
            <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px] shrink-0" />
          </div>
          <CasinoFilterChips
            active={active}
            onSelect={onSelect}
            className="scrollbar-hide flex min-w-0 flex-1 items-center gap-[10px] overflow-x-auto pl-[20px] pr-[20px]"
          />
          <div className="flex shrink-0 items-center gap-[40px] border-l border-[#dadada] bg-white pl-[20px] pr-[40px]">
            <ProfileCompact />
          </div>
        </div>
      ) : (
        <>
          <Filter />
          {scrolled ? <ProfileCompact /> : <Profile />}
        </>
      )}
    </div>
  );
}
