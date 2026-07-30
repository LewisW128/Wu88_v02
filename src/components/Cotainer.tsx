"use client";

import { useEffect, useState } from "react";

import { withBasePath } from "../lib/asset";
const AUTOPLAY_MS = 6000;

function Slide1() {
  return (
    <video
      src={withBasePath("/assets/cotainer/carousel/slide1-bg.mp4")}
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none absolute inset-0 size-full object-cover object-left"
    />
  );
}

function Slide2() {
  return (
    <>
      <video
        src={withBasePath("/assets/cotainer/carousel/slide2-bg.mp4")}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      <img alt="$300,000 來自WU88舉辦的競賽" src={withBasePath("/assets/cotainer/carousel/headline-slide2.svg")} className="absolute left-[72px] top-[130px] w-[348px]" />
      <div className="absolute left-[73px] top-[360px] h-[53px] w-[128px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
        <img alt="" src={withBasePath("/assets/cotainer/carousel/cta-pill-bg.svg")} className="pointer-events-none absolute inset-0 size-full" />
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">立即參加</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.5px]">
            <img alt="" src={withBasePath("/assets/cotainer/carousel/arrow-chevron.svg")} className="h-[7px] w-[5px]" />
          </div>
        </div>
      </div>
    </>
  );
}

const slides = [Slide1, Slide2];

function ChangeBar({
  total,
  activeIndex,
  onSelect,
}: {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="absolute right-[80px] top-[444px] flex items-center gap-[7px]">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`前往第 ${index + 1} 張輪播圖`}
          onClick={() => onSelect(index)}
          className={`h-[4px] rounded-full transition-all duration-300 ${
            index === activeIndex ? "w-[80px] bg-[#8d54d8]" : "w-[55px] bg-[#dadada]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Cotainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const ActiveSlide = slides[activeIndex];

  return (
    <div className="relative h-[611px] w-full overflow-hidden bg-[#f4f0ff]">
      <ActiveSlide />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[159px] w-full"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))" }}
      />
      <ChangeBar total={slides.length} activeIndex={activeIndex} onSelect={setActiveIndex} />
    </div>
  );
}
