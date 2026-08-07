"use client";

import { useState } from "react";

import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import SlideArrows from "./SlideArrows";

import { withBasePath } from "../lib/asset";
const FORMS = [
  { img: withBasePath("/assets/formbar/slot.png"), video: withBasePath("/assets/formbar/slot.mp4"), main: "電子", sub: "SLOT" },
  { img: withBasePath("/assets/formbar/football.png"), video: withBasePath("/assets/formbar/football.mp4"), main: "足球", sub: "FOOTBALL" },
  { img: withBasePath("/assets/formbar/basketball.png"), video: withBasePath("/assets/formbar/basketball.mp4"), main: "籃球", sub: "BASKETBALL" },
  { img: withBasePath("/assets/formbar/baseball.png"), video: withBasePath("/assets/formbar/baseball.mp4"), main: "棒球", sub: "BASEBALL" },
  { img: withBasePath("/assets/formbar/live.png"), video: withBasePath("/assets/formbar/live.mp4"), main: "真人娛樂", sub: "LIVE" },
  { img: withBasePath("/assets/formbar/lottery.png"), video: withBasePath("/assets/formbar/lottery.mp4"), main: "彩票", sub: "LOTTORY" },
  { img: withBasePath("/assets/formbar/board-card.png"), video: withBasePath("/assets/formbar/board-card.mp4"), main: "棋牌", sub: "BOARD & CARD" },
];

const CARD_WIDTH = 200;
const HOVER_WIDTH = 227;
const HOVER_GROWTH = HOVER_WIDTH - CARD_WIDTH;

// 200px per card, minimum 20px gap between them (per-card math: 7*200 +
// 6*20 = 1520) -- below that the row can no longer fit and the scroll
// container (with SlideArrows) takes over instead of squeezing gaps
// further. Above it, the 1fr tracks grow evenly so the row centers itself
// between the section's own 40px left/right padding instead of sitting
// flush-left with dead space on the right.
const FORM_GRID_MIN_WIDTH = FORMS.length * CARD_WIDTH + (FORMS.length - 1) * 20;
const FORM_GRID_COLUMNS = `${CARD_WIDTH}px repeat(${FORMS.length - 1}, minmax(20px, 1fr) ${CARD_WIDTH}px)`;

export default function FormBar() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();
  const [hovered, setHovered] = useState<number | null>(null);
  const lastIndex = FORMS.length - 1;
  // The last card has nothing to its right to push aside, so it grows
  // leftward instead and shoves the cards before it further left.
  const hoveredGrowsLeft = hovered === lastIndex;

  return (
    <div className="relative">
      <div ref={scrollRef} className="scrollbar-hide -mt-[30px] overflow-x-auto pr-[40px] pt-[30px]">
        <div className="grid items-end" style={{ gridTemplateColumns: FORM_GRID_COLUMNS, minWidth: FORM_GRID_MIN_WIDTH }}>
          {FORMS.map((form, i) => {
            const isHovered = hovered === i;
            let shift = 0;
            if (hovered !== null && !isHovered) {
              const isOnPushedSide = hoveredGrowsLeft ? i < hovered : i > hovered;
              if (isOnPushedSide) shift = hoveredGrowsLeft ? -HOVER_GROWTH : HOVER_GROWTH;
            }
            return (
              <div
                key={form.main}
                style={{
                  gridColumn: i * 2 + 1,
                  justifySelf: isHovered && hoveredGrowsLeft ? "end" : "start",
                  transform: shift ? `translateX(${shift}px)` : undefined,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                className={`relative h-[224px] transition-[width,transform] duration-300 ease-out ${isHovered ? "z-10 w-[227px]" : "w-[200px]"}`}
              >
                <div
                  className={`absolute bottom-0 left-0 h-[224px] overflow-hidden rounded-[50px] bg-white transition-[width,height] duration-300 ease-out ${
                    isHovered ? "h-[254px] w-[227px]" : "w-[200px]"
                  }`}
                >
                  <img
                    alt=""
                    src={form.img}
                    className={`absolute left-1/2 top-0 h-[224px] max-w-none -translate-x-1/2 object-cover transition-[width,height,opacity] duration-300 ease-out ${
                      isHovered ? "h-[255px] w-[294px] opacity-0" : "w-[258px] opacity-100"
                    }`}
                  />
                  <video
                    src={form.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute left-1/2 top-0 h-[224px] max-w-none -translate-x-1/2 object-cover transition-[width,height,opacity] duration-300 ease-out ${
                      isHovered ? "h-[255px] w-[294px] opacity-100" : "w-[258px] opacity-0"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-[81px] bg-gradient-to-b from-[rgba(141,84,216,0)] to-[#6f4fbd] transition-[width,height] duration-300 ease-out ${
                      isHovered ? "h-[92px] w-[227px]" : "w-[200px]"
                    }`}
                  >
                    <div
                      className={`absolute top-[15px] flex flex-col whitespace-nowrap transition-[left,top] duration-300 ease-out ${
                        isHovered ? "left-[45px] top-[17px]" : "left-[40px]"
                      }`}
                    >
                      <p className={`font-bold tracking-[1px] text-white transition-[font-size] duration-300 ease-out ${isHovered ? "text-[23px]" : "text-[20px]"}`}>
                        {form.main}
                      </p>
                      <p className={`text-[#67e4d2] transition-[font-size] duration-300 ease-out ${isHovered ? "text-[16px]" : "text-[14px]"}`}>{form.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SlideArrows
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        onLeft={() => scrollByPage("left")}
        onRight={() => scrollByPage("right")}
        className="absolute bottom-[40px] right-[40px] z-20"
      />
    </div>
  );
}
