"use client";

import { useHorizontalSlider } from "../../hooks/useHorizontalSlider";
import SlideArrows from "../SlideArrows";
import { withBasePath } from "../../lib/asset";
import SportCategoryTags from "./SportCategoryTags";
import SportSectionTitle from "./SportSectionTitle";

const NEWS = [
  { img: withBasePath("/assets/sport/news/card1.png"), headline: "世足4強》梅西超狂神助攻！　阿根廷6分鐘狂轟2球逆轉英格蘭晉冠軍戰" },
  { img: withBasePath("/assets/sport/news/card2.png"), headline: "不想待在英超了嗎？阿根廷晉級決賽功臣發文嘲笑英格蘭惹怒球迷" },
  { img: withBasePath("/assets/sport/news/card3.png"), headline: "世足》梅西不只會西班牙語 自曝「我會講英語但不喜歡」" },
];

function NewsCard({ img, headline }: { img: string; headline: string }) {
  return (
    <div className="relative h-[432px] w-[804px] shrink-0 overflow-hidden rounded-[50px] bg-[#3e4140]">
      <img alt="" src={img} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-[118px] bg-gradient-to-b from-transparent to-black/50">
        <div className="flex items-center gap-[20px] px-[40px] pt-[14px]">
          <img alt="" src={withBasePath("/assets/shared/title-accent.svg")} className="h-[53px] w-[52px] shrink-0 rotate-[8deg]" />
          <p className="line-clamp-2 flex-1 text-[20px] font-bold leading-[32px] tracking-[0.35px] text-white">{headline}</p>
        </div>
      </div>
    </div>
  );
}

export default function SportNews() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div id="sport-section-news" className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px] pl-[20px]">
          <SportSectionTitle>體育新聞</SportSectionTitle>
          <SportCategoryTags />
        </div>
        <div className="flex items-center gap-[10px] py-[5px] pr-[40px]">
          <p className="whitespace-nowrap text-[20px] font-bold leading-[32px] tracking-[0.35px] text-[#3e4140]">更多新聞</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[13px] w-[8px]" />
        </div>
      </div>

      <div className="relative flex items-center gap-[20px]">
        <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto pr-[40px]">
          {NEWS.map((item) => (
            <NewsCard key={item.headline} img={item.img} headline={item.headline} />
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
    </div>
  );
}
