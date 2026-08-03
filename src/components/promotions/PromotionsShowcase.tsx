"use client";

import { useHorizontalSlider } from "../../hooks/useHorizontalSlider";
import { withBasePath } from "../../lib/asset";
import SlideArrows from "../SlideArrows";

// Index-aligned with PROMOTIONS_FILTERS (PromotionsFilterChips.tsx) -- titles
// read naturally instead of mechanically appending "優惠活動" to every tag,
// which would double up on tags that already end in "優惠" (e.g. "獨家優惠").
const SHOWCASE_TITLES = ["所有優惠活動", "新會員優惠活動", "獨家優惠活動", "電子場館優惠活動", "VIP特權優惠活動", "體育賽事優惠活動"];

// Same button chrome as PromotionsBusinessService's PromoButton, scaled up
// ~1.414x (331x210 -> 468x297) to match this dedicated page's bigger cards.
function ShowcaseButton({ text }: { text: string }) {
  return (
    <div className="absolute bottom-[28px] left-[28px] h-[75px] w-[181px] drop-shadow-[0px_14px_14px_rgba(226,255,37,0.25)]">
      <div className="pointer-events-none absolute inset-0 -scale-x-100">
        <img alt="" src={withBasePath("/assets/reward-announcement/rectangle3.svg")} className="block size-full max-w-none" />
      </div>
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
        <p className="whitespace-nowrap text-[23px] font-bold tracking-[0.15px] text-[#444242]">{text}</p>
        <div className="flex size-[35px] shrink-0 items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[8px]">
          <img alt="" src={withBasePath("/assets/reward-announcement/rectangle1.svg")} className="h-[8.6px] w-[4.7px]" />
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ image, alt, children }: { image: string; alt: string; children?: React.ReactNode }) {
  return (
    <div className="relative h-[297px] w-[468px] shrink-0 overflow-hidden rounded-bl-[70px] rounded-tr-[70px]">
      <img alt={alt} src={image} className="pointer-events-none absolute inset-0 block size-full object-cover" />
      {children}
    </div>
  );
}

export default function PromotionsShowcase({ activeFilter }: { activeFilter: number }) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByPage } = useHorizontalSlider();
  const title = SHOWCASE_TITLES[activeFilter] ?? SHOWCASE_TITLES[0];

  return (
    <div className="relative flex w-full flex-col gap-[20px] pr-[40px]">
      <div className="flex items-center justify-between pl-[20px]">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/icons/gift.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">{title}</p>
        </div>
        <SlideArrows canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} onLeft={() => scrollByPage("left")} onRight={() => scrollByPage("right")} />
      </div>
      <div ref={scrollRef} className="scrollbar-hide flex gap-[28px] overflow-x-auto drop-shadow-[10px_25px_25px_rgba(0,0,0,0.25)]">
        <ShowcaseCard image={withBasePath("/assets/promotions/card1-signin.svg")} alt="每日簽到禮 天天贈彩點">
          <ShowcaseButton text="立即領取" />
        </ShowcaseCard>
        <ShowcaseCard image={withBasePath("/assets/promotions/card2-wheel.svg")} alt="武財神風輪盤 天天轉 8,888">
          <ShowcaseButton text="立即中獎" />
        </ShowcaseCard>
        <ShowcaseCard image={withBasePath("/assets/promotions/card3-usdt-vault.svg")} alt="USDT返利 無上限，每筆USDT加碼贈2%">
          <ShowcaseButton text="立即參加" />
        </ShowcaseCard>
        <ShowcaseCard image={withBasePath("/assets/promotions/card4-gclass.svg")} alt="超商儲值禮 送 G-CLASS">
          <ShowcaseButton text="立即儲值" />
        </ShowcaseCard>
      </div>
    </div>
  );
}
