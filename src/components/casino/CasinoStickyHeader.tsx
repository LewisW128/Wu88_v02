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
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const profileBoxRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("top");
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [edgeWidths, setEdgeWidths] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 20) {
        setStage("top");
        return;
      }
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      // Use the anchor's BOTTOM edge, not its top -- the in-page filter bar
      // must be fully scrolled behind the sticky header (its whole height
      // clear of headerBottom) before switching to the chips stage, or the
      // tail end of that anchor row is still visible just below the header.
      const anchorBottom = document.getElementById("casino-filter-anchor")?.getBoundingClientRect().bottom ?? Infinity;
      setStage(anchorBottom > headerBottom ? "mid" : "chips");
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

  // The tag strip runs the FULL width, underneath the search/profile panels
  // (matching Figma's absolute-positioned overlap) -- padded by their
  // measured widths so a scrolled-behind tag actually peeks out, blurred,
  // through the panels' translucent backgrounds instead of leaving a flat gap.
  useEffect(() => {
    if (stage !== "chips") return;
    const measure = () => {
      // offsetWidth (not getBoundingClientRect, which reports post-zoom
      // viewport pixels) so this stays in the same coordinate space as the
      // inline padding style below -- otherwise the page's below-breakpoint
      // CSS zoom scaling gets applied twice and the padding comes out short.
      setEdgeWidths({
        left: searchBoxRef.current?.offsetWidth ?? 0,
        right: profileBoxRef.current?.offsetWidth ?? 0,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (searchBoxRef.current) observer.observe(searchBoxRef.current);
    if (profileBoxRef.current) observer.observe(profileBoxRef.current);
    return () => observer.disconnect();
  }, [stage, atStart, atEnd]);

  const scrolled = stage !== "top";

  return (
    <div
      ref={headerRef}
      className={`sticky top-0 z-20 flex items-center px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
        stage === "chips"
          ? "bg-gradient-to-r from-white from-[6.657%] via-[rgba(255,255,255,0.8)] via-[42.545%] to-white to-[69.398%] py-[15px] backdrop-blur-[10px]"
          : scrolled
            ? "bg-white/80 py-[15px] backdrop-blur-[10px]"
            : "pt-[20px]"
      } ${stage === "chips" ? "" : "justify-between"}`}
    >
      {stage === "chips" ? (
        <div className="-mx-[40px] relative h-[59px] flex-1">
          <div
            ref={tagsRef}
            className="scrollbar-hide absolute inset-y-0 left-0 right-0 flex items-center gap-[10px] overflow-x-auto"
            style={{ paddingLeft: edgeWidths.left + 20, paddingRight: edgeWidths.right + 20 }}
          >
            <CasinoFilterChips active={active} onSelect={onSelect} className="flex items-center gap-[10px]" />
          </div>
          {/* Outer panels bleed 15px above/below the 59px row to match the
              full sticky-header height -- only this outer layer carries the
              gradient/blur fill; the inner content box (and its border) stays
              content-sized, exactly mirroring the two nested Figma frames. */}
          <div
            ref={searchBoxRef}
            className="absolute left-0 z-10 flex items-center bg-gradient-to-l from-white/50 to-white pl-[40px] backdrop-blur-[10px]"
            style={{ top: -15, bottom: -15 }}
          >
            <div className={`flex h-[59px] shrink-0 items-center pr-[20px] ${atStart ? "" : "border-r border-[#dadada]"}`}>
              <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px] shrink-0" />
            </div>
          </div>
          <div
            ref={profileBoxRef}
            className="absolute right-0 z-10 flex items-center bg-gradient-to-r from-white/50 to-white pr-[30px] backdrop-blur-[10px]"
            style={{ top: -15, bottom: -15 }}
          >
            <div className={`flex h-[59px] shrink-0 items-center gap-[40px] pl-[20px] ${atEnd ? "" : "border-l border-[#dadada]"}`}>
              <ProfileCompact />
            </div>
          </div>
        </div>
      ) : (
        <>
          {scrolled ? <img alt="" src={withBasePath("/assets/icons/search.svg")} className="size-[25px]" /> : <Filter />}
          {scrolled ? <ProfileCompact /> : <Profile />}
        </>
      )}
    </div>
  );
}
