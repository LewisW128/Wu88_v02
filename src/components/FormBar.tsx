import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import SlideArrows from "./SlideArrows";
import slot from "../assets/formbar/slot.png";
import football from "../assets/formbar/football.png";
import basketball from "../assets/formbar/basketball.png";
import baseball from "../assets/formbar/baseball.png";
import live from "../assets/formbar/live.png";
import lottery from "../assets/formbar/lottery.png";
import boardCard from "../assets/formbar/board-card.png";
import sicbo from "../assets/formbar/sicbo.png";

const FORMS = [
  { img: slot, main: "電子", sub: "SLOT" },
  { img: football, main: "足球", sub: "FOOTBALL" },
  { img: basketball, main: "籃球", sub: "BASKETBALL" },
  { img: baseball, main: "棒球", sub: "BASEBALL" },
  { img: live, main: "真人娛樂", sub: "LIVE" },
  { img: lottery, main: "彩票", sub: "LOTTORY" },
  { img: boardCard, main: "棋牌", sub: "BOARD & CARD" },
  { img: sicbo, main: "骰寶", sub: "ROULETTE" },
];

export default function FormBar() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative">
      <div ref={scrollRef} className="scrollbar-hide flex items-center gap-[20px] overflow-x-auto">
        {FORMS.map((form) => (
          <div key={form.main} className="relative h-[224px] w-[200px] shrink-0 overflow-hidden rounded-[50px] bg-white">
            <img alt="" src={form.img} className="absolute left-1/2 top-0 h-[213px] w-[246px] max-w-none -translate-x-1/2 object-cover" />
            <div className="absolute bottom-0 left-0 h-[81px] w-[200px] bg-gradient-to-b from-[rgba(141,84,216,0)] to-[#6f4fbd]">
              <div className="absolute left-[40px] top-[15px] flex flex-col whitespace-nowrap">
                <p className="text-[20px] font-bold tracking-[1px] text-white">{form.main}</p>
                <p className="text-[14px] text-[#67e4d2]">{form.sub}</p>
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
        className="absolute bottom-[40px] right-[40px]"
      />
    </div>
  );
}
