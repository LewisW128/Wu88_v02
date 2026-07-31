"use client";

import { useEffect, useRef, useState } from "react";

import { withBasePath } from "../../lib/asset";
import Filter from "../Filter";
import Profile, { ProfileCompact } from "../Profile";
import SportComChips from "./SportComChips";

type Stage = "top" | "mid" | "chips";

// Mirrors CasinoStickyHeader exactly -- once the in-page Sports_Com tag row
// (id="sport-com-anchor") scrolls fully behind the header, its tags get
// absorbed into the header itself (chips stage) instead of staying a
// separate sticky bar.
export default function SportStickyHeader() {
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
      const anchorBottom = document.getElementById("sport-com-anchor")?.getBoundingClientRect().bottom ?? Infinity;
      setStage(anchorBottom > headerBottom ? "mid" : "chips");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    if (stage !== "chips") return;
    const measure = () => {
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
      className={`sticky top-0 z-30 flex items-center px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
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
            <SportComChips className="flex items-center gap-[10px]" />
          </div>
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
