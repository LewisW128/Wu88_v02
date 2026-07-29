"use client";

import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import { withBasePath } from "../lib/asset";
import SlideArrows from "./SlideArrows";

function PromoCard({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
      <img alt={alt} src={image} className="pointer-events-none block size-full object-cover" />
    </div>
  );
}

function Promotions() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/promotions/icon-title.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">優惠活動</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">更多優惠</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[11px] w-[6px]" />
        </div>
      </div>
      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto">
        <PromoCard image={withBasePath("/assets/promotions/card1.png")} alt="每日簽到禮 天天贈彩點" />
        <PromoCard image={withBasePath("/assets/promotions/card2.jpg")} alt="武財神風輪盤 天天轉 8,888" />
        <PromoCard image={withBasePath("/assets/promotions/card3.jpg")} alt="USDT返利 無上限，每筆USDT加碼贈2%" />
        <PromoCard image={withBasePath("/assets/promotions/card4.jpg")} alt="USDT返利 無上限，每筆USDT加碼贈2%" />
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

function Business() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center gap-[10px]">
        <img alt="" src={withBasePath("/assets/business/icon-title.svg")} className="size-[45px]" />
        <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">頂級合作廠商</p>
      </div>
      <div ref={scrollRef} className="scrollbar-hide h-[164px] w-full overflow-x-auto rounded-br-[50px] rounded-tl-[50px] border border-[#dadada]">
        <img alt="頂級合作廠商" src={withBasePath("/assets/business/panel.png")} className="pointer-events-none block h-full min-w-full object-cover" />
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

function Service() {
  return (
    <div className="relative h-[544px] w-[284px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
      <img alt="聯繫客服" src={withBasePath("/assets/service/service-card.png")} className="pointer-events-none block size-full object-cover" />
    </div>
  );
}

export default function PromotionsBusinessService() {
  return (
    <div className="flex w-full items-center gap-[40px]">
      <div className="flex flex-1 flex-col gap-[40px]">
        <Promotions />
        <Business />
      </div>
      <Service />
    </div>
  );
}
