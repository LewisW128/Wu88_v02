"use client";

import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import SlideArrows from "./SlideArrows";

import { withBasePath } from "../lib/asset";
const FORMS = [
  { img: withBasePath("/assets/formbar/slot.png"), main: "電子", sub: "SLOT" },
  { img: withBasePath("/assets/formbar/football.png"), main: "足球", sub: "FOOTBALL" },
  { img: withBasePath("/assets/formbar/basketball.png"), main: "籃球", sub: "BASKETBALL" },
  { img: withBasePath("/assets/formbar/baseball.png"), main: "棒球", sub: "BASEBALL" },
  { img: withBasePath("/assets/formbar/live.png"), main: "真人娛樂", sub: "LIVE" },
  { img: withBasePath("/assets/formbar/lottery.png"), main: "彩票", sub: "LOTTORY" },
  { img: withBasePath("/assets/formbar/board-card.png"), main: "棋牌", sub: "BOARD & CARD" },
  { img: withBasePath("/assets/formbar/sicbo.png"), main: "骰寶", sub: "ROULETTE" },
];

export default function FormBar() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative">
      <div ref={scrollRef} className="scrollbar-hide flex items-end gap-[20px] overflow-x-auto">
        {FORMS.map((form) => (
          <div
            key={form.main}
            className="group relative h-[224px] w-[200px] shrink-0 overflow-hidden rounded-[50px] bg-white transition-[width,height] duration-300 ease-out hover:z-10 hover:h-[254px] hover:w-[227px]"
          >
            <img
              alt=""
              src={form.img}
              className="absolute left-1/2 top-0 h-[224px] w-[258px] max-w-none -translate-x-1/2 object-cover transition-[width,height] duration-300 ease-out group-hover:h-[255px] group-hover:w-[294px]"
            />
            <div className="absolute bottom-0 left-0 h-[81px] w-[200px] bg-gradient-to-b from-[rgba(141,84,216,0)] to-[#6f4fbd] transition-[width,height] duration-300 ease-out group-hover:h-[92px] group-hover:w-[227px]">
              <div className="absolute left-[40px] top-[15px] flex flex-col whitespace-nowrap transition-[left,top] duration-300 ease-out group-hover:left-[45px] group-hover:top-[17px]">
                <p className="text-[20px] font-bold tracking-[1px] text-white transition-[font-size] duration-300 ease-out group-hover:text-[23px]">{form.main}</p>
                <p className="text-[14px] text-[#67e4d2] transition-[font-size] duration-300 ease-out group-hover:text-[16px]">{form.sub}</p>
              </div>
            </div>
          </div>
        ))}
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
