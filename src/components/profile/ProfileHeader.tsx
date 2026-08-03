"use client";

import { useEffect, useState } from "react";

import Profile, { ProfileCompact } from "../Profile";

// Mirrors the home page's StickyHeader exactly (simple scrolled/not-scrolled
// toggle) -- this page has no filter/tag row to collapse into it like
// casino/sport, so it doesn't need their 3-stage chips behavior.
export default function ProfileHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex items-center justify-end px-[40px] transition-[background-color,padding,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-gradient-to-l from-white from-[6.657%] via-[rgba(255,255,255,0.8)] via-[42.545%] to-white to-[69.398%] py-[15px] backdrop-blur-[10px]"
          : "pt-[20px]"
      }`}
    >
      {scrolled ? <ProfileCompact /> : <Profile />}
    </div>
  );
}
