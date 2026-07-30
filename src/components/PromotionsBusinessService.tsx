"use client";

import { useHorizontalSlider } from "../hooks/useHorizontalSlider";
import { withBasePath } from "../lib/asset";
import SlideArrows from "./SlideArrows";

function PromoButton({ text }: { text: string }) {
  return (
    <div className="absolute bottom-[20px] left-[20px] h-[53px] w-[128px] drop-shadow-[0px_10px_10px_rgba(226,255,37,0.25)]">
      <div className="pointer-events-none absolute inset-0 -scale-x-100">
        <img alt="" src={withBasePath("/assets/reward-announcement/rectangle3.svg")} className="block size-full max-w-none" />
      </div>
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">{text}</p>
        <div className="flex size-[25px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[5.556px]">
          <img alt="" src={withBasePath("/assets/reward-announcement/rectangle1.svg")} className="h-[6.111px] w-[3.333px]" />
        </div>
      </div>
    </div>
  );
}

function PromoCard({ image, alt, children }: { image: string; alt: string; children?: React.ReactNode }) {
  return (
    <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
      <img alt={alt} src={image} className="pointer-events-none absolute inset-0 block size-full object-cover" />
      {children}
    </div>
  );
}

function Promotions() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();

  return (
    <div className="relative flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/icons/gift.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">優惠活動</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-[#3e4140]">更多優惠</p>
          <img alt="" src={withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[11px] w-[6px]" />
        </div>
      </div>
      <div ref={scrollRef} className="scrollbar-hide flex gap-[20px] overflow-x-auto">
        <PromoCard image={withBasePath("/assets/promotions/card1.png")} alt="每日簽到禮 天天贈彩點" />
        <PromoCard image={withBasePath("/assets/promotions/card2-wheel.svg")} alt="武財神風輪盤 天天轉 8,888">
          <PromoButton text="立即中獎" />
        </PromoCard>
        <PromoCard image={withBasePath("/assets/promotions/card3-usdt-vault.svg")} alt="USDT返利 無上限，每筆USDT加碼贈2%">
          <PromoButton text="立即參加" />
        </PromoCard>
        <PromoCard image={withBasePath("/assets/promotions/card4-gclass.svg")} alt="超商儲值禮 送 G-CLASS">
          <PromoButton text="立即參加" />
        </PromoCard>
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
      <div className="flex items-center gap-[10px] pl-[20px]">
        <img alt="" src={withBasePath("/assets/icons/partner.svg")} className="size-[45px]" />
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
    <div className="flex w-full items-center gap-[40px] pr-[40px]">
      <div className="flex min-w-0 flex-1 flex-col gap-[40px]">
        <Promotions />
        <Business />
      </div>
      <Service />
    </div>
  );
}
