"use client";

import { useEffect, useRef, useState } from "react";

import { withBasePath } from "../../lib/asset";
import Filter from "../Filter";
import Profile, { ProfileCompact } from "../Profile";
import CasinoFilterChips from "./CasinoFilterChips";

type Stage = "top" | "mid" | "chips";

export default function CasinoStickyHeader({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("top");
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

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

  // Search rail and profile panel only pick up a hard edge/box on the side
  // that currently has tag content clipped behind it -- mirrors Figma's two
  // reference frames (scrolled-to-start vs scrolled-away-from-start).
  useEffect(() => {
    const el = tagsRef.current;
    if (!el) return;
    const updateEdges = () => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
    };
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [stage]);

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
          <div
            className={`flex shrink-0 items-center pl-[40px] pr-[20px] transition-colors ${
              atStart ? "" : "border-r border-[#dadada] bg-white py-[17px]"
            }`}
          >
            <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px] shrink-0" />
          </div>
          <div ref={tagsRef} className="scrollbar-hide flex min-w-0 flex-1 items-center overflow-x-auto pl-[20px] pr-[20px]">
            <CasinoFilterChips active={active} onSelect={onSelect} className="flex items-center gap-[10px]" />
          </div>
          <div
            className={`flex shrink-0 items-center gap-[40px] bg-gradient-to-r from-white/50 to-white pl-[20px] pr-[40px] backdrop-blur-[10px] transition-colors ${
              atEnd ? "" : "border-l border-[#dadada]"
            }`}
          >
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
