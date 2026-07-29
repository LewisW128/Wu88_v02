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
      <div className="flex gap-[20px]">
        <PromoCard image={withBasePath("/assets/promotions/card1.png")} alt="每日簽到禮 天天贈彩點" />
        <PromoCard image={withBasePath("/assets/promotions/card2.png")} alt="武財神風輪盤 天天轉 8,888" />
        <PromoCard image={withBasePath("/assets/promotions/card3.png")} alt="超商儲值禮 送 G-CLASS" />
      </div>
    </div>
  );
}

const PARTNER_NAMES = ["CQ9", "歐博", "狼堡", "翼盾", "SUPERMAN", "META"];

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
      <div className="relative flex h-[164px] w-full items-center gap-[50px] overflow-hidden rounded-br-[50px] rounded-tl-[50px] border border-[#dadada] px-[30px]">
        <img alt="" src={withBasePath("/assets/business/ellipse.svg")} className="pointer-events-none absolute -right-[110px] -top-[30px] size-[366px]" />
        {PARTNER_NAMES.map((name) => (
          <div key={name} className="relative flex h-[85px] w-[85px] shrink-0 items-center justify-center text-center">
            <p className="text-[14px] font-bold tracking-wide text-[#3e4140]">{name}</p>
          </div>
        ))}
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
