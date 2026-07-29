


import { withBasePath } from "../lib/asset";
function PromoButton({ text }: { text: string }) {
  return (
    <div className="absolute bottom-[20px] left-[20px] h-[53px] w-[128px]">
      <div className="pointer-events-none absolute inset-[-18.41%_-7.81%_-55.27%_-23.44%]">
        <img alt="" src={withBasePath("/assets/promotions/btn-bg.svg")} className="block size-full max-w-none" />
      </div>
      <div className="absolute inset-[24.53%_11.72%_30.19%_11.72%] flex items-center justify-between">
        <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">{text}</p>
        <img alt="" src={withBasePath("/assets/promotions/vector1.svg")} className="h-[10px] w-[26px]" />
      </div>
    </div>
  );
}

function PromoTitle({ badge, text }: { badge: string; text: string }) {
  return (
    <div className="absolute left-[20px] top-[20px] flex flex-col">
      <img alt="" src={badge} className="h-[21px] w-[21px] rotate-[8deg]" />
      <p className="whitespace-nowrap text-[20px] font-bold tracking-[0.35px] text-white">{text}</p>
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
          <img alt="" src={withBasePath("/assets/promotions/vector1.svg")} className="h-[13px] w-[33px]" />
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-[#8d54d8]">
          <img alt="" src={withBasePath("/assets/promotions/pirate-bg.png")} className="pointer-events-none absolute left-[-5px] top-[-82px] h-[492px] w-[336px] max-w-none object-cover blur-[1px]" />
          <img alt="" src={withBasePath("/assets/promotions/pirate.png")} className="pointer-events-none absolute left-[128px] top-[-22px] h-[371px] w-[203px] object-cover" />
          <PromoTitle badge={withBasePath("/assets/promotions/vector2.svg")} text="新手冒險好禮" />
          <PromoButton text="立即領取" />
        </div>
        <div className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-[#8d54d8]">
          <img alt="" src={withBasePath("/assets/promotions/football.png")} className="pointer-events-none absolute left-1/2 top-[calc(50%+53px)] h-[452px] w-[339px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover" />
          <PromoTitle badge={withBasePath("/assets/promotions/vector3.svg")} text="看球賽領獎勵" />
          <PromoButton text="立即下注" />
        </div>
        <div
          className="relative h-[210px] w-[331px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]"
          style={{ backgroundImage: "linear-gradient(-52deg, rgb(72,186,206) 32%, rgb(154,113,241) 70%, rgb(100,78,179) 191%)" }}
        >
          <img alt="" src={withBasePath("/assets/promotions/gclass.png")} className="pointer-events-none absolute left-[36px] top-[29px] h-[212px] w-[377px] max-w-none object-cover" />
          <PromoTitle badge={withBasePath("/assets/promotions/vector4.svg")} text="VIP 專屬優惠" />
          <PromoButton text="立即參加" />
        </div>
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
          <button className="flex h-[45px] items-center justify-center rounded-full border border-[#dadada] bg-white/25 px-[20px] backdrop-blur-[10px]">
            <img alt="" src={withBasePath("/assets/business/arrow-left.svg")} className="h-[13px] w-[24px]" />
          </button>
          <button className="flex h-[45px] items-center justify-center rounded-full border border-[#23f3d5] bg-[rgba(35,243,213,0.8)] px-[20px] backdrop-blur-[10px]">
            <img alt="" src={withBasePath("/assets/business/arrow-right.svg")} className="h-[13px] w-[24px]" />
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
    <div
      className="relative h-[544px] w-[284px] shrink-0 overflow-hidden rounded-bl-[50px] rounded-tr-[50px]"
      style={{ backgroundImage: "linear-gradient(160deg, #8d54d8 0%, #6f4fbd 60%, #48bace 100%)" }}
    >
      <div className="absolute bottom-0 left-0 h-[151px] w-full bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-[40px] left-[20px] h-[53px] w-[244px]">
        <img alt="" src={withBasePath("/assets/service/btn-bg.svg")} className="pointer-events-none absolute inset-[-18.63%_-4.1%_-55.91%_-12.3%] block max-w-none size-full" />
        <div className="absolute inset-0 flex items-center justify-center gap-[10px]">
          <p className="whitespace-nowrap text-[16px] font-bold tracking-[0.15px] text-[#444242]">聯繫客服</p>
          <img alt="" src={withBasePath("/assets/service/vector.svg")} className="h-[8px] w-[21px]" />
        </div>
      </div>
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
