import { withBasePath } from "../lib/asset";

function PromoCard({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
      <img alt={alt} src={image} className="pointer-events-none block size-full object-cover" />
    </div>
  );
}

function Promotions() {
  return (
    <div className="flex w-full flex-col gap-[20px]">
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
      <div className="scrollbar-hide flex gap-[20px] overflow-x-auto">
        <PromoCard image={withBasePath("/assets/promotions/card1.png")} alt="每日簽到禮 天天贈彩點" />
        <PromoCard image={withBasePath("/assets/promotions/card2.png")} alt="武財神風輪盤 天天轉 8,888" />
        <PromoCard image={withBasePath("/assets/promotions/card3.png")} alt="超商儲值禮 送 G-CLASS" />
        <PromoCard image={withBasePath("/assets/promotions/card4.png")} alt="USDT返利 無上限，每筆USDT加碼贈2%" />
      </div>
    </div>
  );
}

function Business() {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img alt="" src={withBasePath("/assets/business/icon-title.svg")} className="size-[45px]" />
          <p className="text-[20px] font-bold tracking-[0.35px] text-[#444242]">頂級合作廠商</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140]">
            <img alt="" src={withBasePath("/assets/shared/arrow-chevron-gray.svg")} className="h-[11px] w-[6px] rotate-180" />
          </button>
          <button className="flex size-[45px] items-center justify-center rounded-full bg-[#3e4140] backdrop-blur-[10px]">
            <img alt="" src={withBasePath("/assets/shared/arrow-chevron-teal.svg")} className="h-[11px] w-[6px]" />
          </button>
        </div>
      </div>
      <div className="h-[164px] w-full overflow-hidden rounded-br-[50px] rounded-tl-[50px] border border-[#dadada]">
        <img alt="頂級合作廠商" src={withBasePath("/assets/business/panel.png")} className="pointer-events-none block size-full object-cover" />
      </div>
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
