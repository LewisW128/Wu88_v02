import { useEffect, useState } from "react";
import slide1Background from "../assets/cotainer/carousel/slide1-background.svg";
import headlineSlide1 from "../assets/cotainer/carousel/headline-slide1.svg";
import slide2Bg from "../assets/cotainer/carousel/slide2-bg.png";
import headlineSlide2 from "../assets/cotainer/carousel/headline-slide2.svg";
import ctaPillBg from "../assets/cotainer/carousel/cta-pill-bg.svg";
import arrowChevron from "../assets/cotainer/carousel/arrow-chevron.svg";

const AUTOPLAY_MS = 6000;

function Slide1() {
  return (
    <>
      <img alt="" src={slide1Background} className="pointer-events-none absolute inset-0 size-full object-cover" />
      <div className="absolute left-[80px] top-1/2 flex w-[382px] -translate-y-1/2 flex-col items-start gap-[20px]">
        <img alt="精彩不設限 贏得更過癮！" src={headlineSlide1} className="w-[336px]" />
        <p className="text-[36px] font-bold leading-none tracking-[0.36px] text-[#3e4140]">高額獎金 24h 精彩不斷</p>
      </div>
    </>
  );
}

function Slide2() {
  return (
    <>
      <img alt="" src={slide2Bg} className="pointer-events-none absolute inset-0 size-full object-cover" />
      <img alt="$300,000 來自WU88舉辦的競賽" src={headlineSlide2} className="absolute left-[72px] top-[130px] w-[348px]" />
      <div className="absolute left-[73px] top-[360px] h-[53px] w-[128px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
        <img alt="" src={ctaPillBg} className="pointer-events-none absolute inset-0 size-full" />
        <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">立即參加</p>
          <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.5px]">
            <img alt="" src={arrowChevron} className="h-[7px] w-[5px]" />
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
